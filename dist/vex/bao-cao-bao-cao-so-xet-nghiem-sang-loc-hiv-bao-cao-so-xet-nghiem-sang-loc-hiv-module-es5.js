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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-so-xet-nghiem-sang-loc-hiv-bao-cao-so-xet-nghiem-sang-loc-hiv-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.html": 
        /*!**************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.html ***!
          \**************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Xét Nghiệm', Path:''},\n                    {Title:'SỐ Xét Nghiệm Sàng Lọc HIV', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Dịch vụ kỹ thuật\" bind=\"true\"\n                    url=\"DichVuKyThuatBenhVien/GetDichVuKyThuatBenhVien\" [(model)]=\"baoCaoSearch.DichVuKyThuatBenhVienId\"  [autoSelectFirstItem]=\"true\">\n                </app-combobox>\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <app-grid *ngIf=\"ishowView\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" [showStt]=\"true\"\n                    [checkboxAble]=\"false\" [autoHeight]=\"true\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [documentType]=\"documentType\" [gridDataSource]=\"gridView\">\n                </app-grid>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.html": 
        /*!****************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.html ***!
          \****************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>BÁO CÁO XUẤT NHẬP TỒN </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In báo cáo\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.scss": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.scss ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdi9iYW8tY2FvLXNvLXhldC1uZ2hpZW0tc2FuZy1sb2MtaGl2LWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLXNvLXhldC1uZ2hpZW0tc2FuZy1sb2MtaGl2XFxiYW8tY2FvLXNvLXhldC1uZ2hpZW0tc2FuZy1sb2MtaGl2LWxpc3RcXGJhby1jYW8tc28teGV0LW5naGllbS1zYW5nLWxvYy1oaXYtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdi9iYW8tY2FvLXNvLXhldC1uZ2hpZW0tc2FuZy1sb2MtaGl2LWxpc3QvYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tc28teGV0LW5naGllbS1zYW5nLWxvYy1oaXYvYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdi1saXN0L2Jhby1jYW8tc28teGV0LW5naGllbS1zYW5nLWxvYy1oaXYtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iLCIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.ts": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.ts ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoSoXetNghiemSangLocHivListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoXetNghiemSangLocHivListComponent", function () { return BaoCaoSoXetNghiemSangLocHivListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _bao_cao_so_xet_nghiem_sang_loc_hiv_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bao-cao-so-xet-nghiem-sang-loc-hiv.model */ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.model.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var BaoCaoSoXetNghiemSangLocHivListComponent = /** @class */ (function () {
                function BaoCaoSoXetNghiemSangLocHivListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_so_xet_nghiem_sang_loc_hiv_model__WEBPACK_IMPORTED_MODULE_1__["BaoCaoSoXetNghiemSangLocHivSearch"]();
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.ishowView = false;
                }
                BaoCaoSoXetNghiemSangLocHivListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoSoXetNghiemSangLocHiv;
                    this.gridColumns = [
                        //{ Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate },
                        { Field: "MaBN", Title: "Mã BN", Width: 120 },
                        { Field: "MaBarcode", Title: "Mã Barcode", Width: 120 },
                        { Field: "HoTen", Title: "Họ tên", Width: 250 },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 100 },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 120 },
                        { Field: "KhoaPhong", Title: "Khoa phòng", Width: 250 },
                        { Field: "DoiTuong", Title: "Đối tượng", Width: 120 },
                        { Field: "NgayLayMau", Title: "Ngày lấy mẫu", Width: 120 },
                        { Field: "NgayXetNghiem", Title: "Ngày xét nghiệm", Width: 120 },
                        { Field: "KetQua", Title: "Kết quả", Width: 300 },
                        { Field: "KetQuaKhangDinh", Title: "KQ khẳng định", Width: 200 },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 120 }
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    //this.minDateTuNgay.setMonth((new Date()).getMonth() -1);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                    }
                };
                BaoCaoSoXetNghiemSangLocHivListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoSoXetNghiemSangLocHiv", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoSoXetNghiemSangLocHiv" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoSoXetNghiemSangLocHivListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.baoCaoSearch.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.baoCaoSearch.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
                    }
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
                    this.apiService.post("BaoCao/GetDataBaoCaoSoXetNghiemSangLocHivForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.gridView = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            if (_this.gridView.total != 0) {
                                _this.ishowView = true;
                            }
                            else {
                                _this.ishowView = false;
                            }
                        }
                    });
                };
                return BaoCaoSoXetNghiemSangLocHivListComponent;
            }());
            BaoCaoSoXetNghiemSangLocHivListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
            ], BaoCaoSoXetNghiemSangLocHivListComponent.prototype, "gridChild", void 0);
            BaoCaoSoXetNghiemSangLocHivListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'app-bao-cao-so-xet-nghiem-sang-loc-hiv-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.scss")).default]
                })
            ], BaoCaoSoXetNghiemSangLocHivListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.scss": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.scss ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdi9iYW8tY2FvLXNvLXhldC1uZ2hpZW0tc2FuZy1sb2MtaGl2LXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdlxcYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdi1wb3B1cFxcYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdi9iYW8tY2FvLXNvLXhldC1uZ2hpZW0tc2FuZy1sb2MtaGl2LXBvcHVwL2Jhby1jYW8tc28teGV0LW5naGllbS1zYW5nLWxvYy1oaXYtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1zby14ZXQtbmdoaWVtLXNhbmctbG9jLWhpdi9iYW8tY2FvLXNvLXhldC1uZ2hpZW0tc2FuZy1sb2MtaGl2LXBvcHVwL2Jhby1jYW8tc28teGV0LW5naGllbS1zYW5nLWxvYy1oaXYtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.ts": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.ts ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoSoXetNghiemSangLocHivPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoXetNghiemSangLocHivPopupComponent", function () { return BaoCaoSoXetNghiemSangLocHivPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _bao_cao_so_xet_nghiem_sang_loc_hiv_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bao-cao-so-xet-nghiem-sang-loc-hiv.model */ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.model.ts");
            var BaoCaoSoXetNghiemSangLocHivPopupComponent = /** @class */ (function () {
                function BaoCaoSoXetNghiemSangLocHivPopupComponent(apiService, dialogRef, dialog, sanitizer, data) {
                    this.apiService = apiService;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.data = data;
                    this.inBaoCaoSoXetNghiemSangLocHiv = new _bao_cao_so_xet_nghiem_sang_loc_hiv_model__WEBPACK_IMPORTED_MODULE_7__["InBaoCaoSoXetNghiemSangLocHiv"]();
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.src = "";
                }
                BaoCaoSoXetNghiemSangLocHivPopupComponent.prototype.ngOnInit = function () {
                    this.inBaoCaoSoXetNghiemSangLocHiv = this.data;
                    this.showBaoCao();
                };
                BaoCaoSoXetNghiemSangLocHivPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                BaoCaoSoXetNghiemSangLocHivPopupComponent.prototype.showBaoCao = function () {
                    var _this = this;
                    var loaded = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                    this.apiService.post("BaoCao/InBaoCaoSoXetNghiemSangLocHiv", this.inBaoCaoSoXetNghiemSangLocHiv).subscribe(function (resultData) {
                        if (resultData != "" && resultData != null) {
                            _this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
                        }
                        loaded.close();
                    }, function () {
                        _this.close();
                    });
                };
                BaoCaoSoXetNghiemSangLocHivPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.apiService.post("BaoCao/InBaoCaoSoXetNghiemSangLocHiv", _this.inBaoCaoSoXetNghiemSangLocHiv).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                        _this.close();
                    });
                };
                return BaoCaoSoXetNghiemSangLocHivPopupComponent;
            }());
            BaoCaoSoXetNghiemSangLocHivPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            BaoCaoSoXetNghiemSangLocHivPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-so-xet-nghiem-sang-loc-hiv-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], BaoCaoSoXetNghiemSangLocHivPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-routing.module.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-routing.module.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: BaoCaoSoXetNghiemSangLocHivRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoXetNghiemSangLocHivRoutingModule", function () { return BaoCaoSoXetNghiemSangLocHivRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_so_xet_nghiem_sang_loc_hiv_list_bao_cao_so_xet_nghiem_sang_loc_hiv_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component */ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_so_xet_nghiem_sang_loc_hiv_list_bao_cao_so_xet_nghiem_sang_loc_hiv_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoSoXetNghiemSangLocHivListComponent"],
                    data: {
                        title: 'Báo cáo xuất nhập tồn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoSoXetNghiemSangLocHiv,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoSoXetNghiemSangLocHivRoutingModule = /** @class */ (function () {
                function BaoCaoSoXetNghiemSangLocHivRoutingModule() {
                }
                return BaoCaoSoXetNghiemSangLocHivRoutingModule;
            }());
            BaoCaoSoXetNghiemSangLocHivRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoSoXetNghiemSangLocHivRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.model.ts": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.model.ts ***!
          \*********************************************************************************************************************/
        /*! exports provided: BaoCaoSoXetNghiemSangLocHivSearch, BaoCaoSoXetNghiemSangLocHiv, InBaoCaoSoXetNghiemSangLocHiv */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoXetNghiemSangLocHivSearch", function () { return BaoCaoSoXetNghiemSangLocHivSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoXetNghiemSangLocHiv", function () { return BaoCaoSoXetNghiemSangLocHiv; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoSoXetNghiemSangLocHiv", function () { return InBaoCaoSoXetNghiemSangLocHiv; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoSoXetNghiemSangLocHivSearch = /** @class */ (function () {
                function BaoCaoSoXetNghiemSangLocHivSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, DichVuKyThuatBenhVienId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (DichVuKyThuatBenhVienId === void 0) { DichVuKyThuatBenhVienId = 3798; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.TuNgayFormat = TuNgayFormat;
                    this.DenNgayFormat = DenNgayFormat;
                    this.DichVuKyThuatBenhVienId = DichVuKyThuatBenhVienId;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoSoXetNghiemSangLocHivSearch;
            }());
            var BaoCaoSoXetNghiemSangLocHiv = /** @class */ (function () {
                function BaoCaoSoXetNghiemSangLocHiv(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
                    if (STT === void 0) { STT = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (SLTonDauKy === void 0) { SLTonDauKy = 0; }
                    if (ThanhTienTonDauKy === void 0) { ThanhTienTonDauKy = 0; }
                    if (SLNhapTrongKy === void 0) { SLNhapTrongKy = 0; }
                    if (ThanhTienNhapTrongKy === void 0) { ThanhTienNhapTrongKy = 0; }
                    if (SLXuatTrongKy === void 0) { SLXuatTrongKy = 0; }
                    if (ThanhTienXuatTrongKy === void 0) { ThanhTienXuatTrongKy = 0; }
                    if (SLTonCuoiKy === void 0) { SLTonCuoiKy = 0; }
                    if (Gia === void 0) { Gia = 0; }
                    if (ThanhTien === void 0) { ThanhTien = 0; }
                    this.STT = STT;
                    this.Ten = Ten;
                    this.DVT = DVT;
                    this.SLTonDauKy = SLTonDauKy;
                    this.ThanhTienTonDauKy = ThanhTienTonDauKy;
                    this.SLNhapTrongKy = SLNhapTrongKy;
                    this.ThanhTienNhapTrongKy = ThanhTienNhapTrongKy;
                    this.SLXuatTrongKy = SLXuatTrongKy;
                    this.ThanhTienXuatTrongKy = ThanhTienXuatTrongKy;
                    this.SLTonCuoiKy = SLTonCuoiKy;
                    this.Gia = Gia;
                    this.ThanhTien = ThanhTien;
                }
                return BaoCaoSoXetNghiemSangLocHiv;
            }());
            var InBaoCaoSoXetNghiemSangLocHiv = /** @class */ (function () {
                function InBaoCaoSoXetNghiemSangLocHiv(DichVuKyThuatBenhVienId, HostingName, FromDate, ToDate) {
                    if (DichVuKyThuatBenhVienId === void 0) { DichVuKyThuatBenhVienId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.DichVuKyThuatBenhVienId = DichVuKyThuatBenhVienId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoSoXetNghiemSangLocHiv;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.module.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.module.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: BaoCaoSoXetNghiemSangLocHivModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoXetNghiemSangLocHivModule", function () { return BaoCaoSoXetNghiemSangLocHivModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _bao_cao_so_xet_nghiem_sang_loc_hiv_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-so-xet-nghiem-sang-loc-hiv-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-routing.module.ts");
            /* harmony import */ var _bao_cao_so_xet_nghiem_sang_loc_hiv_list_bao_cao_so_xet_nghiem_sang_loc_hiv_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component */ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.ts");
            /* harmony import */ var _bao_cao_so_xet_nghiem_sang_loc_hiv_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-so-xet-nghiem-sang-loc-hiv.service */ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.service.ts");
            /* harmony import */ var _bao_cao_so_xet_nghiem_sang_loc_hiv_popup_bao_cao_so_xet_nghiem_sang_loc_hiv_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.ts");
            var BaoCaoSoXetNghiemSangLocHivModule = /** @class */ (function () {
                function BaoCaoSoXetNghiemSangLocHivModule() {
                }
                return BaoCaoSoXetNghiemSangLocHivModule;
            }());
            BaoCaoSoXetNghiemSangLocHivModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_so_xet_nghiem_sang_loc_hiv_list_bao_cao_so_xet_nghiem_sang_loc_hiv_list_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoSoXetNghiemSangLocHivListComponent"], _bao_cao_so_xet_nghiem_sang_loc_hiv_popup_bao_cao_so_xet_nghiem_sang_loc_hiv_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoSoXetNghiemSangLocHivPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_so_xet_nghiem_sang_loc_hiv_routing_module__WEBPACK_IMPORTED_MODULE_18__["BaoCaoSoXetNghiemSangLocHivRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
                    ],
                    providers: [
                        _bao_cao_so_xet_nghiem_sang_loc_hiv_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoSoXetNghiemSangLocHivService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_so_xet_nghiem_sang_loc_hiv_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoSoXetNghiemSangLocHivService"] },
                    ],
                    entryComponents: [
                        _bao_cao_so_xet_nghiem_sang_loc_hiv_popup_bao_cao_so_xet_nghiem_sang_loc_hiv_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoSoXetNghiemSangLocHivPopupComponent"]
                    ]
                })
            ], BaoCaoSoXetNghiemSangLocHivModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.service.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.service.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: BaoCaoSoXetNghiemSangLocHivService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoXetNghiemSangLocHivService", function () { return BaoCaoSoXetNghiemSangLocHivService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoSoXetNghiemSangLocHivService = /** @class */ (function (_super) {
                __extends(BaoCaoSoXetNghiemSangLocHivService, _super);
                function BaoCaoSoXetNghiemSangLocHivService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoSoXetNghiemSangLocHivService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoSoXetNghiemSangLocHivService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoSoXetNghiemSangLocHivService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoSoXetNghiemSangLocHivService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-so-xet-nghiem-sang-loc-hiv-bao-cao-so-xet-nghiem-sang-loc-hiv-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-so-xet-nghiem-sang-loc-hiv-bao-cao-so-xet-nghiem-sang-loc-hiv-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-so-xet-nghiem-sang-loc-hiv-bao-cao-so-xet-nghiem-sang-loc-hiv-module-es5.js.map