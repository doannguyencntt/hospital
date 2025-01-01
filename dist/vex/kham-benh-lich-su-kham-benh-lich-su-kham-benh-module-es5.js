(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-benh-lich-su-kham-benh-lich-su-kham-benh-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.html": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.html ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Bệnh',Path:''},\n                        {Title:'Lịch Sử Khám Bệnh',Path:'/lich-su-kham-benh', Active:true}           \n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"KhamBenh/GetDataForGridAsyncDanhMucLichSuKhamBenh\" [showStt]=\"true\"\n                urlGetTotalPage=\"KhamBenh/GetTotalPageForGridAsyncDanhMucLichSuKhamBenh\" [useHeaderDefault]=\"false\"\n                [searchString]=\"danhSachChoKham.SearchString\" [additionalSearchString]=\"addtionStringDefault\"\n                [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\" [sort]=\"sort\">\n                <ng-template #thoiDiemTiepNhanTemplate let-dataItem>\n                    {{dataItem.ThoiDiemTiepNhanDisplay}}\n                </ng-template>\n                <ng-template #thoiDiemThucHienTemplate let-dataItem>\n                    {{dataItem.ThoiDiemThucHienDisplay}}\n                </ng-template>\n                <ng-template #chiTietTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"view(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaYeuCauTiepNhan}}\">\n                                {{dataItem.MaYeuCauTiepNhan}}</p>\n                        </a>\n                    </div>\n                </ng-template>\n                <ng-template #trangThaiTemplate let-dataItem>\n                    <label *ngIf=\"dataItem.TrangThaiYeuCauKhamBenh == 5\" class=\"green\">\n                        <strong><span>Đã khám</span></strong>\n                    </label>\n                    <label *ngIf=\"dataItem.TrangThaiYeuCauKhamBenh == 6\" class=\"red\">\n                        <strong><span>Hủy khám</span></strong>\n                    </label>\n                </ng-template>\n            </app-grid>\n\n        </div>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"danhSachChoKham.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"danhSachChoKham.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n                    id=\"ThoiDiemTiepNhanTuFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Tiếp nhận từ\"\n                    class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"danhSachChoKham.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n                    id=\"ThoiDiemTiepNhanDenFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Tiếp nhận đến\"\n                    class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n                <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button>\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"XuatExcel()\"\n                    kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n            </div>\n        </ng-template>\n        <ng-template #khoaGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n        <ng-template #acTionTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button (click)=\"InToaThuoc(dataItem)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In Toa Thuốc/Vật Tư</span>\n                    </button>\n                    <button (click)=\"In(dataItem,1)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In Phiếu Chỉ Định</span>\n                    </button>\n                    <button (click)=\"In(dataItem,2)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In Đơn Thuốc BHYT</span>\n                    </button>\n                    <button (click)=\"In(dataItem,3)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In Đơn Thuốc Nhà Thuốc</span>\n                    </button>\n                    <button (click)=\"In(dataItem,4)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In Phiếu Khám Bệnh</span>\n                    </button>\n                    <button (click)=\"In(dataItem,5)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In Phiếu Khám Bệnh Vào Viện</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.html": 
        /*!*****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.html ***!
          \*****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Xác Nhận</div>\n</div>\n<ng-container *ngIf=\"showMessage==1\">\n    <h4>Dịch vụ khám này không có dịch vụ chỉ định.</h4>\n    <div style=\"float: right;\">\n        <button type=\"button\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"close()\">Đóng</button>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"showMessage==2\">\n    <h4>Dịch vụ khám này không có thuốc BHYT.</h4>\n    <div style=\"float: right;\">\n        <button type=\"button\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"close()\">Đóng</button>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"showMessage==3\">\n    <h4>Dịch vụ khám này không có thuốc nhà thuốc (thuốc không BHYT).</h4>\n    <div style=\"float: right;\">\n        <button type=\"button\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"close()\">Đóng</button>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"showMessage==4\">\n    <h4>Dịch vụ khám này không có phiếu khám bệnh.</h4>\n    <div style=\"float: right;\">\n        <button type=\"button\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"close()\">Đóng</button>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"showMessage==5\">\n    <h4>Dịch vụ khám này không có phiếu khám bệnh vào viện.</h4>\n    <div style=\"float: right;\">\n        <button type=\"button\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"close()\">Đóng</button>\n    </div>\n</ng-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.html": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.html ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Xác Nhận</div>\n</div>\n<ng-container *ngIf=\"dataItem.CoDonThuocBHYT || dataItem.CoDonThuocKhongBHYT || dataItem.CoDonVatTu\">\n    <p class=\"mb-3\"> Thực hiện in toa thuốc/vật tư cho NB : </p>\n\n    <div *ngIf=\"dataItem.CoDonThuocBHYT == true\">\n        <app-checkbox id=\"BHYT\" [(model)]=\"thongTin.ThuocBHYT\" label=\"In toa thuốc BHYT\" class=\"pb-0\"></app-checkbox>\n    </div>\n\n    <div *ngIf=\"dataItem.CoDonThuocKhongBHYT\">\n        <app-checkbox id=\"KhongBHYT\" [(model)]=\"thongTin.ThuocKhongBHYT\" label=\"In toa thuốc không BHYT\" class=\"pb-0\">\n        </app-checkbox>\n    </div>\n\n    <div *ngIf=\"dataItem.CoDonVatTu\">\n        <app-checkbox id=\"VatTu\" [(model)]=\"thongTin.VatTu\" label=\"In vật tư\" class=\"pb-0\">\n        </app-checkbox>\n    </div>\n\n    <div style=\"float: right;\">\n        <button type=\"button\" style=\"margin-right: 10px\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n            (click)=\"close()\">Không</button>\n        <button [disabled]=\"!thongTin.ThuocBHYT && !thongTin.ThuocKhongBHYT && !thongTin.VatTu\" type=\"button\"\n            color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"InToaThuoc()\">In toa\n            thuốc/vật tư</button>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"!dataItem.CoDonThuocBHYT && !dataItem.CoDonThuocKhongBHYT && !dataItem.CoDonVatTu\">\n\n    <h4>Dịch vụ khám này không có toa thuốc/vật tư.</h4>\n    <div style=\"float: right;\">\n        <button type=\"button\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"close()\">Đóng</button>\n    </div>\n</ng-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.html": 
        /*!*******************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.html ***!
          \*******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>XEM TOA THUỐC/VẬT TƯ</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src|safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In toa thuốc/vật tư\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.scss": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.scss ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgvbGljaC1zdS1raGFtLWJlbmgvbGljaC1zdS1raGFtLWJlbmgtbGlzdC9saWNoLXN1LWtoYW0tYmVuaC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.ts": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.ts ***!
          \*********************************************************************************************************************/
        /*! exports provided: LichSuKhamBenhListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuKhamBenhListComponent", function () { return LichSuKhamBenhListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_danh_sach_cho_kham_danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_22__);
            /* harmony import */ var _toa_thuoc_kham_benh_confirm_toa_thuoc_kham_benh_confirm_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/shared/enum/kham-benh.enum */ "./src/app/shared/enum/kham-benh.enum.ts");
            /* harmony import */ var _popup_chon_loai_In_popup_chon_loai_in_view_popup_chon_loai_in_view_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component */ "./src/app/modules/main/popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component.ts");
            /* harmony import */ var _popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.ts");
            /* harmony import */ var _toa_thuoc_kham_benh_popup_toa_thuoc_kham_benh_popup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.ts");
            /* harmony import */ var _kham_benh_lan_kham_hien_tai_phieu_kham_benh_vao_vien_popup_phieu_kham_benh_vao_vien_popup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../kham-benh/lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component.ts");
            var LichSuKhamBenhListComponent = /** @class */ (function () {
                function LichSuKhamBenhListComponent(router, authService, notificationService, apiService, dialog, route, location) {
                    this.router = router;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.route = route;
                    this.location = location;
                    this.sort = [{
                            field: "ThoiDiemTiepNhan",
                            dir: 'desc'
                        }
                    ];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_22___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.gridColumns = [];
                    this.baseRoute = "/lich-su-kham-benh";
                    this.addtionStringDefault = null;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"];
                }
                LichSuKhamBenhListComponent.prototype.ngOnInit = function () {
                    this.danhSachChoKham = new _tiep_nhan_benh_nhan_danh_sach_cho_kham_danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_12__["DanhSachChoKham"]();
                    var dateNow = new Date();
                    this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                    this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
                    if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null) {
                        this.danhSachChoKham.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.danhSachChoKham.FromDate = null;
                    }
                    if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null) {
                        this.danhSachChoKham.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.danhSachChoKham.ToDate = null;
                    }
                    var queryString = JSON.stringify(this.danhSachChoKham);
                    this.addtionStringDefault = queryString;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].LichSuKhamBenh;
                    this.backWithSearch();
                    this.gridColumns = [
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.chiTietTemplate },
                        { Field: "MaBenhNhan", Title: "Mã NB", Width: 100, ShowTooltip: true, Sortable: true },
                        { Field: "HoTen", Title: "Tên Người Bệnh", Width: 180, ShowTooltip: true, Sortable: true },
                        { Field: "NamSinh", Title: "Năm Sinh", Width: 90, Sortable: true },
                        { Field: "DiaChi", Title: "Địa Chỉ", Width: 110, ShowTooltip: true, Sortable: true },
                        { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 120, ShowTooltip: true, Sortable: true },
                        { Field: "ThoiDiemThucHien", Title: "Thời điểm thực hiện", Width: 150, Sortable: true, Template: this.thoiDiemThucHienTemplate },
                        { Field: "ThoiDiemTiepNhan", Title: "Tiếp Nhận Lúc", Width: 140, Sortable: true, Template: this.thoiDiemTiepNhanTemplate },
                        { Field: "TrieuChungTiepNhan", Title: "Lý Do Khám Bệnh", Width: 145, Sortable: true },
                        { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 140, ShowTooltip: true, Sortable: true },
                        { Field: "CachGiaiQuyet", Title: "Cách giải quyết", Width: 100, Sortable: true },
                        { Field: "BSKham", Title: "Bác sĩ khám", Width: 100, ShowTooltip: true, Sortable: true },
                        { Field: "DoiTuong", Title: "Đối Tượng", Width: 100, Sortable: true },
                        { Field: "TrangThaiYeuCauKhamBenh", Title: "Trạng Thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate },
                        { Field: "Action", Title: "", Width: 50, Template: this.acTionTemplate },
                    ];
                };
                LichSuKhamBenhListComponent.prototype.backWithSearch = function () {
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].getItem("additionalSearchStringLichSuKhamBenh");
                            if (additionalSearchString != null) {
                                this.danhSachChoKham = JSON.parse(additionalSearchString);
                                if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != undefined && this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null && this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != "") {
                                    this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = new Date(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat);
                                }
                                else {
                                    this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = null;
                                }
                                if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != undefined && this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null && this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != "") {
                                    this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = new Date(this.danhSachChoKham.ThoiDiemTiepNhanDenFormat);
                                }
                                else {
                                    this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = null;
                                }
                                this.addtionStringDefault = additionalSearchString;
                                this.gridChild.additionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].removeItem("additionalSearchStringLichSuKhamBenh");
                    }
                };
                LichSuKhamBenhListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.TimkiemNangCao();
                    }
                };
                LichSuKhamBenhListComponent.prototype.clearSearch = function () {
                    this.searchString = "";
                    this.danhSachChoKham.SearchString = null;
                    this.gridChild.search();
                };
                LichSuKhamBenhListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.gridChild.searchString = null;
                        // self.gridChild._additionalSearchString = null;
                        self.TimkiemNangCao();
                    }
                };
                LichSuKhamBenhListComponent.prototype.Timkiem = function () {
                    var QueryString = null;
                    this.gridChild._additionalSearchString = null;
                    if (this.searchString != null) {
                        QueryString = this.searchString;
                    }
                    this.gridChild.searchString = QueryString;
                    this.gridChild.search();
                };
                LichSuKhamBenhListComponent.prototype.TimkiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null) {
                        this.danhSachChoKham.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.danhSachChoKham.FromDate = null;
                    }
                    if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null) {
                        this.danhSachChoKham.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.danhSachChoKham.ToDate = null;
                    }
                    var queryString = JSON.stringify(this.danhSachChoKham);
                    //this.gridChild.searchString = null;
                    this.gridChild._additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].setItem("additionalSearchStringLichSuKhamBenh", queryString);
                    this.gridChild.search();
                    //this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0
                };
                LichSuKhamBenhListComponent.prototype.thoiDiemTNChange = function () {
                    this.TimkiemNangCao();
                };
                // getDropdownItem(obj: any, keyValue: any, titleValue: any) {
                //   let index = this.listTagSearch.findIndex(x => x.Key == keyValue && x.Title == titleValue);
                //   if (obj == undefined && this.listTagSearch.findIndex(x => x.Title == titleValue) != -1) {
                //     let indexTitle = this.listTagSearch.findIndex(x => x.Title == titleValue);
                //     this.listTagSearch.splice(indexTitle, 1);
                //   }
                //   if (obj != undefined && obj.KeyId != null) {
                //     if (obj.KeyId == null) {
                //       if (index != -1) {
                //         this.listTagSearch.splice(index, 1);
                //       }
                //     }
                //     else {
                //       if (index < 0) {
                //         let item = new TagItem();
                //         item.Key = keyValue;
                //         item.Value = obj.DisplayName;
                //         item.Title = titleValue;
                //         let indexTitle = this.listTagSearch.findIndex(x => x.Title == titleValue);
                //         if (indexTitle >= 0) {
                //           this.listTagSearch.splice(indexTitle, 1);
                //         }
                //         this.listTagSearch.push(item);
                //       }
                //       else {
                //         this.listTagSearch.pop();
                //         this.listTagSearch[index].Value = obj.DisplayName;
                //       }
                //     }
                //   }
                //   else {
                //     if (index != -1) {
                //       this.listTagSearch.splice(index, 1);
                //     }
                //   }
                // }
                LichSuKhamBenhListComponent.prototype.closeMenu = function () {
                    this.trigger.closeMenu();
                };
                LichSuKhamBenhListComponent.prototype.view = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                        this.router.navigate(["/lich-su-kham-benh/chi-tiet/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                LichSuKhamBenhListComponent.prototype.XuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("KhamBenh/ExportLichSuKhamBenh", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "LichSuKhamBenh" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                LichSuKhamBenhListComponent.prototype.InToaThuoc = function (dataItem) {
                    console.log("dataItem: ", dataItem);
                    var self = this;
                    self.dialog
                        .open(_toa_thuoc_kham_benh_confirm_toa_thuoc_kham_benh_confirm_component__WEBPACK_IMPORTED_MODULE_23__["ToaThuocKhamBenhConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: dataItem,
                    });
                };
                LichSuKhamBenhListComponent.prototype.In = function (dataItem, loaiPhieuIn) {
                    var _this = this;
                    console.log(dataItem);
                    switch (loaiPhieuIn) {
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InPhieuChiDinh:
                            this.apiService.post("KhamBenh/GetDanhSachDichVuChiDinhCuaBenhNhan?yeuCauTiepNhanId=" + dataItem.YeuCauTiepNhanId + "&yeuCauKhamBenhId=" + dataItem.Id).subscribe(function (resultData) {
                                if (resultData.Data.length != 0) {
                                    var gridChiDinh_1 = [];
                                    resultData.Data.forEach(function (elements) {
                                        if (elements.NhomId == 1 || elements.NhomId == 2) {
                                            var obj = {
                                                dichVuChiDinhId: elements.Id,
                                                nhomChiDinhId: elements.NhomId
                                            };
                                            gridChiDinh_1.push(obj);
                                        }
                                    });
                                    var dataIn = {
                                        YeuCauTiepNhanId: dataItem.YeuCauTiepNhanId,
                                        YeuCauKhamBenhid: dataItem.Id,
                                        ListDichVuChiDinh: gridChiDinh_1,
                                        InChungChiDinh: 0,
                                        hosting: window.location.protocol + "//" + window.location.host,
                                        KieuInChung: true,
                                        GhiChuCanLamSang: "",
                                        IsKhamDoanTatCa: false,
                                        EnumInChiDinhKhamBenhNgoaiTru: 1,
                                        listGridSelect: resultData.Data,
                                        Loai: 1,
                                        InDichVuBacSiChiDinh: true
                                    };
                                    var dialogRef = _this.dialog.open(_popup_chon_loai_In_popup_chon_loai_in_view_popup_chon_loai_in_view_component__WEBPACK_IMPORTED_MODULE_27__["PopupChonLoaiInViewComponent"], {
                                        width: '1000px',
                                        data: { Model: dataIn }
                                    });
                                }
                                else {
                                    var dialogRef = _this.dialog.open(_popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_28__["PopupMessageKhongCoDichVuVuInComponent"], {
                                        width: '400px',
                                        data: { Model: src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InPhieuChiDinh }
                                    });
                                }
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InDonThuocBHYT:
                            var data = {
                                YeuCauTiepNhanId: dataItem.YeuCauTiepNhanId,
                                YeuCauKhamBenhId: dataItem.Id,
                                ThuocBHYT: true,
                                HostingName: window.location.protocol + "//" + window.location.host
                            };
                            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                                this.apiService.post("KhamBenh/InToaThuocBHYTVaKhongBHYTDanhSachKhamBenh", data).subscribe(function (result) {
                                    if (result != undefined && result != null && result != "") {
                                        _this.dialog
                                            .open(_toa_thuoc_kham_benh_popup_toa_thuoc_kham_benh_popup_component__WEBPACK_IMPORTED_MODULE_29__["ToaThuocKhamBenhPopupComponent"], {
                                            disableClose: true,
                                            width: "1200px",
                                            data: result,
                                        });
                                    }
                                    else {
                                        var dialogRef = _this.dialog.open(_popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_28__["PopupMessageKhongCoDichVuVuInComponent"], {
                                            width: '400px',
                                            data: { Model: src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InDonThuocBHYT }
                                        });
                                    }
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    ;
                                });
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                            }
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InDonThuocNhaThuoc:
                            // public ThuocBHYT: boolean = true,
                            // public ThuocKhongBHYT: boolean = true,
                            // public VatTu: boolean = true,
                            var dataCanInDonThuocKhongBHYT = {
                                YeuCauTiepNhanId: dataItem.YeuCauTiepNhanId,
                                YeuCauKhamBenhId: dataItem.Id,
                                ThuocKhongBHYT: true,
                                HostingName: window.location.protocol + "//" + window.location.host
                            };
                            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                                this.apiService.post("KhamBenh/InToaThuocBHYTVaKhongBHYTDanhSachKhamBenh", dataCanInDonThuocKhongBHYT).subscribe(function (result) {
                                    if (result != undefined && result != null && result != "") {
                                        _this.dialog
                                            .open(_toa_thuoc_kham_benh_popup_toa_thuoc_kham_benh_popup_component__WEBPACK_IMPORTED_MODULE_29__["ToaThuocKhamBenhPopupComponent"], {
                                            disableClose: true,
                                            width: "1200px",
                                            data: result,
                                        });
                                    }
                                    else {
                                        var dialogRef = _this.dialog.open(_popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_28__["PopupMessageKhongCoDichVuVuInComponent"], {
                                            width: '400px',
                                            data: { Model: src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InDonThuocNhaThuoc }
                                        });
                                    }
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    ;
                                });
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                            }
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InPhieuKhamBenh:
                            // public long YeuCauKhamBenhId { get; set; }
                            // public bool CoKhamBenh { get; set; }
                            // public bool CoHeader { get; set; }
                            // public bool CoKhamBenhVaoVien { get; set; }
                            var dataPhieuKhamBenh = {
                                YeuCauKhamBenhId: dataItem.Id,
                                CoKhamBenh: true
                            };
                            this.apiService.post("KhamBenh/InPhieuKhamBenh", dataPhieuKhamBenh).subscribe(function (resultData) {
                                if (resultData != undefined && resultData != null && resultData != "") {
                                    _this.dialog
                                        .open(_kham_benh_lan_kham_hien_tai_phieu_kham_benh_vao_vien_popup_phieu_kham_benh_vao_vien_popup_component__WEBPACK_IMPORTED_MODULE_30__["PhieuKhamBenhVaoVienPopupComponent"], {
                                        disableClose: true,
                                        width: "1000px",
                                        data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                                    })
                                        .afterClosed()
                                        .subscribe(function () {
                                    });
                                }
                                else {
                                    var dialogRef = _this.dialog.open(_popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_28__["PopupMessageKhongCoDichVuVuInComponent"], {
                                        width: '400px',
                                        data: { Model: src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InPhieuKhamBenh }
                                    });
                                }
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                                ;
                            });
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InPhieuKhamBenhVaoVien:
                            var dataPhieuKhamBenhVaoVien = {
                                YeuCauKhamBenhId: dataItem.Id,
                                CoKhamBenhVaoVien: dataItem.CoNhapVien != null ? true : false
                            };
                            if (dataItem.CoNhapVien == true) {
                                this.apiService.post("KhamBenh/InPhieuKhamBenh", dataPhieuKhamBenhVaoVien).subscribe(function (resultData) {
                                    if (resultData != undefined && resultData != null && resultData != "") {
                                        _this.dialog
                                            .open(_kham_benh_lan_kham_hien_tai_phieu_kham_benh_vao_vien_popup_phieu_kham_benh_vao_vien_popup_component__WEBPACK_IMPORTED_MODULE_30__["PhieuKhamBenhVaoVienPopupComponent"], {
                                            disableClose: true,
                                            width: "1000px",
                                            data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                                        })
                                            .afterClosed()
                                            .subscribe(function () {
                                        });
                                    }
                                    else {
                                        var dialogRef = _this.dialog.open(_popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_28__["PopupMessageKhongCoDichVuVuInComponent"], {
                                            width: '400px',
                                            data: { Model: src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InPhieuKhamBenhVaoVien }
                                        });
                                    }
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    ;
                                });
                            }
                            else {
                                var dialogRef = this.dialog.open(_popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_28__["PopupMessageKhongCoDichVuVuInComponent"], {
                                    width: '400px',
                                    data: { Model: src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_26__["LoaiPhieuIn"].InPhieuKhamBenhVaoVien }
                                });
                            }
                            break;
                        default:
                            break;
                    }
                };
                return LichSuKhamBenhListComponent;
            }());
            LichSuKhamBenhListComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_24__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LichSuKhamBenhListComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
            ], LichSuKhamBenhListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemTiepNhanTemplate', { static: true })
            ], LichSuKhamBenhListComponent.prototype, "thoiDiemTiepNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemThucHienTemplate', { static: true })
            ], LichSuKhamBenhListComponent.prototype, "thoiDiemThucHienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiTietTemplate', { static: true })
            ], LichSuKhamBenhListComponent.prototype, "chiTietTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], LichSuKhamBenhListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('acTionTemplate', { static: true })
            ], LichSuKhamBenhListComponent.prototype, "acTionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], { static: false })
            ], LichSuKhamBenhListComponent.prototype, "trigger", void 0);
            LichSuKhamBenhListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lich-su-kham-benh-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-kham-benh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-kham-benh-list.component.scss */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.scss")).default]
                })
            ], LichSuKhamBenhListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-routing.module.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-routing.module.ts ***!
          \**********************************************************************************************/
        /*! exports provided: LichSuKhamBenhRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuKhamBenhRoutingModule", function () { return LichSuKhamBenhRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _lich_su_kham_benh_chi_tiet_lich_su_kham_benh_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lich-su-kham-benh-chi-tiet/lich-su-kham-benh-chi-tiet.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-chi-tiet/lich-su-kham-benh-chi-tiet.component.ts");
            /* harmony import */ var _lich_su_kham_benh_list_lich_su_kham_benh_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lich-su-kham-benh-list/lich-su-kham-benh-list.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _lich_su_kham_benh_list_lich_su_kham_benh_list_component__WEBPACK_IMPORTED_MODULE_7__["LichSuKhamBenhListComponent"],
                    data: {
                        title: "Lịch Sử Khám Bệnh",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuKhamBenh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _lich_su_kham_benh_chi_tiet_lich_su_kham_benh_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__["LichSuKhamBenhChiTietComponent"],
                    data: {
                        title: "Lịch Sử Khám Bệnh Chi Tiết",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuKhamBenh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var LichSuKhamBenhRoutingModule = /** @class */ (function () {
                function LichSuKhamBenhRoutingModule() {
                }
                return LichSuKhamBenhRoutingModule;
            }());
            LichSuKhamBenhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], LichSuKhamBenhRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh.module.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh.module.ts ***!
          \**************************************************************************************/
        /*! exports provided: LichSuKhamBenhModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuKhamBenhModule", function () { return LichSuKhamBenhModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _lich_su_kham_benh_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lich-su-kham-benh-routing.module */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-routing.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var ngx_image_drawing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-image-drawing */ "./node_modules/ngx-image-drawing/fesm2015/ngx-image-drawing.js");
            /* harmony import */ var _lich_su_kham_benh_list_lich_su_kham_benh_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lich-su-kham-benh-list/lich-su-kham-benh-list.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/lich-su-kham-benh-list/lich-su-kham-benh-list.component.ts");
            /* harmony import */ var _kham_benh_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../kham-benh.module */ "./src/app/modules/main/kham-benh/kham-benh.module.ts");
            /* harmony import */ var _toa_thuoc_kham_benh_confirm_toa_thuoc_kham_benh_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.ts");
            /* harmony import */ var _toa_thuoc_kham_benh_popup_toa_thuoc_kham_benh_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.ts");
            /* harmony import */ var _popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.ts");
            /* harmony import */ var _quay_thuoc_quay_thuoc_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../quay-thuoc/quay-thuoc.module */ "./src/app/modules/main/quay-thuoc/quay-thuoc.module.ts");
            var LichSuKhamBenhModule = /** @class */ (function () {
                function LichSuKhamBenhModule() {
                }
                return LichSuKhamBenhModule;
            }());
            LichSuKhamBenhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _lich_su_kham_benh_list_lich_su_kham_benh_list_component__WEBPACK_IMPORTED_MODULE_17__["LichSuKhamBenhListComponent"],
                        _toa_thuoc_kham_benh_confirm_toa_thuoc_kham_benh_confirm_component__WEBPACK_IMPORTED_MODULE_19__["ToaThuocKhamBenhConfirmComponent"],
                        _toa_thuoc_kham_benh_popup_toa_thuoc_kham_benh_popup_component__WEBPACK_IMPORTED_MODULE_20__["ToaThuocKhamBenhPopupComponent"],
                        _popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_21__["PopupMessageKhongCoDichVuVuInComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _lich_su_kham_benh_routing_module__WEBPACK_IMPORTED_MODULE_12__["LichSuKhamBenhRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                        ngx_image_drawing__WEBPACK_IMPORTED_MODULE_16__["ImageDrawingModule"],
                        _kham_benh_module__WEBPACK_IMPORTED_MODULE_18__["KhamBenhModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                        _quay_thuoc_quay_thuoc_module__WEBPACK_IMPORTED_MODULE_22__["QuayThuocModule"]
                    ],
                    entryComponents: [
                        _toa_thuoc_kham_benh_confirm_toa_thuoc_kham_benh_confirm_component__WEBPACK_IMPORTED_MODULE_19__["ToaThuocKhamBenhConfirmComponent"],
                        _toa_thuoc_kham_benh_popup_toa_thuoc_kham_benh_popup_component__WEBPACK_IMPORTED_MODULE_20__["ToaThuocKhamBenhPopupComponent"],
                        _popup_message_khong_co_dich_vu_vu_in_popup_message_khong_co_dich_vu_vu_in_component__WEBPACK_IMPORTED_MODULE_21__["PopupMessageKhongCoDichVuVuInComponent"]
                    ]
                })
            ], LichSuKhamBenhModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.scss": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.scss ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgvbGljaC1zdS1raGFtLWJlbmgvcG9wdXAtbWVzc2FnZS1raG9uZy1jby1kaWNoLXZ1LXZ1LWluL3BvcHVwLW1lc3NhZ2Uta2hvbmctY28tZGljaC12dS12dS1pbi5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.ts": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.ts ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: PopupMessageKhongCoDichVuVuInComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMessageKhongCoDichVuVuInComponent", function () { return PopupMessageKhongCoDichVuVuInComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var PopupMessageKhongCoDichVuVuInComponent = /** @class */ (function () {
                function PopupMessageKhongCoDichVuVuInComponent(data, dialog) {
                    this.data = data;
                    this.dialog = dialog;
                    this.showMessage = 1;
                }
                PopupMessageKhongCoDichVuVuInComponent.prototype.ngOnInit = function () {
                    this.showMessage = this.data.Model;
                };
                PopupMessageKhongCoDichVuVuInComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return PopupMessageKhongCoDichVuVuInComponent;
            }());
            PopupMessageKhongCoDichVuVuInComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            PopupMessageKhongCoDichVuVuInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-message-khong-co-dich-vu-vu-in',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-message-khong-co-dich-vu-vu-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-message-khong-co-dich-vu-vu-in.component.scss */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PopupMessageKhongCoDichVuVuInComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.scss": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.scss ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgvbGljaC1zdS1raGFtLWJlbmgvdG9hLXRodW9jLWtoYW0tYmVuaC1jb25maXJtL3RvYS10aHVvYy1raGFtLWJlbmgtY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.ts": 
        /*!*******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.ts ***!
          \*******************************************************************************************************************************/
        /*! exports provided: ToaThuocKhamBenhConfirmComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToaThuocKhamBenhConfirmComponent", function () { return ToaThuocKhamBenhConfirmComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _kham_benh_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../kham-benh.model */ "./src/app/modules/main/kham-benh/kham-benh.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _toa_thuoc_kham_benh_popup_toa_thuoc_kham_benh_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.ts");
            var ToaThuocKhamBenhConfirmComponent = /** @class */ (function () {
                function ToaThuocKhamBenhConfirmComponent(dialog, apiService, notificationService, authService, dialogRef, dataItem) {
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialogRef = dialogRef;
                    this.dataItem = dataItem;
                    this.thongTin = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_4__["InToaThuocLichSuKhamBenhDanhSach"]();
                    this.popupLoadingData = null;
                    this.validationErrors = null;
                }
                ToaThuocKhamBenhConfirmComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].LichSuKhamBenh;
                    this.thongTin.HostingName = window.location.protocol + "//" + window.location.host;
                    this.thongTin.YeuCauKhamBenhId = this.dataItem.Id;
                    this.thongTin.YeuCauTiepNhanId = this.dataItem.YeuCauTiepNhanId;
                    console.log("data: ", this.dataItem);
                };
                ToaThuocKhamBenhConfirmComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                ToaThuocKhamBenhConfirmComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                ToaThuocKhamBenhConfirmComponent.prototype.InToaThuoc = function () {
                    var _this = this;
                    var self = this;
                    self.loadingPage();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process)) {
                        self.apiService.post("KhamBenh/InToaThuocBHYTVaKhongBHYTDanhSachKhamBenh", self.thongTin).subscribe(function (result) {
                            if (result != undefined && result != null) {
                                self.closePopupLoadingData();
                                self.dialog
                                    .open(_toa_thuoc_kham_benh_popup_toa_thuoc_kham_benh_popup_component__WEBPACK_IMPORTED_MODULE_11__["ToaThuocKhamBenhPopupComponent"], {
                                    disableClose: true,
                                    width: "1200px",
                                    data: result,
                                });
                            }
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            ;
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                ToaThuocKhamBenhConfirmComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return ToaThuocKhamBenhConfirmComponent;
            }());
            ToaThuocKhamBenhConfirmComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            ToaThuocKhamBenhConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-toa-thuoc-kham-benh-confirm',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toa-thuoc-kham-benh-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toa-thuoc-kham-benh-confirm.component.scss */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], ToaThuocKhamBenhConfirmComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.scss": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.scss ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tYmVuaC9saWNoLXN1LWtoYW0tYmVuaC90b2EtdGh1b2Mta2hhbS1iZW5oLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1iZW5oXFxsaWNoLXN1LWtoYW0tYmVuaFxcdG9hLXRodW9jLWtoYW0tYmVuaC1wb3B1cFxcdG9hLXRodW9jLWtoYW0tYmVuaC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tYmVuaC9saWNoLXN1LWtoYW0tYmVuaC90b2EtdGh1b2Mta2hhbS1iZW5oLXBvcHVwL3RvYS10aHVvYy1raGFtLWJlbmgtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tYmVuaC9saWNoLXN1LWtoYW0tYmVuaC90b2EtdGh1b2Mta2hhbS1iZW5oLXBvcHVwL3RvYS10aHVvYy1raGFtLWJlbmgtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.ts": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.ts ***!
          \***************************************************************************************************************************/
        /*! exports provided: ToaThuocKhamBenhPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToaThuocKhamBenhPopupComponent", function () { return ToaThuocKhamBenhPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var ToaThuocKhamBenhPopupComponent = /** @class */ (function () {
                function ToaThuocKhamBenhPopupComponent(dialog, sanitizer, data) {
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                ToaThuocKhamBenhPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                ToaThuocKhamBenhPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                ToaThuocKhamBenhPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var source = this.data;
                    source = source.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>TOA THUỐC BẢO HIỂM Y TẾ</th></p>", "");
                    source = source.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
                        "<th>TOA THUỐC KHÔNG BẢO HIỂM Y TẾ</th>" + "</p>", "");
                    source = source.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
                        "<th>TOA THUỐC NGOÀI BỆNH VIỆN</th>" + "</p>", "");
                    source = source.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
                        "<th>TOA THUỐC THỰC PHẨM CHỨC NĂNG</ th>" + "</p>", "");
                    source = source.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
                        "<th>VẬT TƯ Y TẾ</th>" + "</p>", "");
                    return new Promise(function (resolve) {
                        resolve(source);
                        _this.close();
                    });
                };
                return ToaThuocKhamBenhPopupComponent;
            }());
            ToaThuocKhamBenhPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            ToaThuocKhamBenhPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-toa-thuoc-kham-benh-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toa-thuoc-kham-benh-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toa-thuoc-kham-benh-popup.component.scss */ "./src/app/modules/main/kham-benh/lich-su-kham-benh/toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ToaThuocKhamBenhPopupComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=kham-benh-lich-su-kham-benh-lich-su-kham-benh-module-es2015.js.map
//# sourceMappingURL=kham-benh-lich-su-kham-benh-lich-su-kham-benh-module-es5.js.map
//# sourceMappingURL=kham-benh-lich-su-kham-benh-lich-su-kham-benh-module-es5.js.map