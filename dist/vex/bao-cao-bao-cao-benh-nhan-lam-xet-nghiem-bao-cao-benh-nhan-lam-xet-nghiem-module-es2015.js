(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-benh-nhan-lam-xet-nghiem-bao-cao-benh-nhan-lam-xet-nghiem-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Xét Nghiệm', Path:''},\n                    {Title:'Người Bệnh Làm Xét Nghiệm', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\"\n                        [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                        [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\" [autoHeight]=\"true\"\n                        [gridDataSource]=\"gridDataSource\" (extOnPageChange)=\"pageChange($event)\">\n                    </app-grid>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>BÁO CÁO XUẤT NHẬP TỒN </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In báo cáo\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.scss ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1iZW5oLW5oYW4tbGFtLXhldC1uZ2hpZW0vYmFvLWNhby1iZW5oLW5oYW4tbGFtLXhldC1uZ2hpZW0tbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tYmVuaC1uaGFuLWxhbS14ZXQtbmdoaWVtXFxiYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS1saXN0XFxiYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS9iYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS1saXN0L2Jhby1jYW8tYmVuaC1uaGFuLWxhbS14ZXQtbmdoaWVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1iZW5oLW5oYW4tbGFtLXhldC1uZ2hpZW0vYmFvLWNhby1iZW5oLW5oYW4tbGFtLXhldC1uZ2hpZW0tbGlzdC9iYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSIsIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: BaoCaoBenhNhanLamXetNghiemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanLamXetNghiemListComponent", function() { return BaoCaoBenhNhanLamXetNghiemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bao_cao_benh_nhan_lam_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bao-cao-benh-nhan-lam-xet-nghiem.model */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.model.ts");
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













let BaoCaoBenhNhanLamXetNghiemListComponent = class BaoCaoBenhNhanLamXetNghiemListComponent {
    constructor(apiService, dialog, authService, notificationService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.baoCaoSearch = new _bao_cao_benh_nhan_lam_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_1__["BaoCaoBenhNhanLamXetNghiemSearch"]();
        this.inBaoCaoBenhNhanLamXetNghiem = new _bao_cao_benh_nhan_lam_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_1__["InBaoCaoBenhNhanLamXetNghiem"]();
        this.dataSource = {
            data: [],
            total: 0
        };
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.pageSize = 50;
        this.skip = 0;
        this.additionalSearchString = "";
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.ishowView = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoBenhNhanLamXetNghiem;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate },
            { Field: "MaBarcode", Title: "Mã Barcode", Width: 120 },
            { Field: "MaBN", Title: "Mã BN", Width: 120 },
            { Field: "HoTen", Title: "Họ tên", Width: 50 },
            { Field: "GioiTinh", Title: "Giới tính", Width: 120 },
            { Field: "NamSinh", Title: "Năm sinh", Width: 50 },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 120 },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 120 },
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
    }
    pageChange(event) {
        // this.skip = event;
        // let ss = this.dataSource;
        // // this.XemBaoCao();
        // var takeTo = this.skip + this.pageSize;
        // this.gridDataSource.data = this.dataSource.data.slice(this.skip, takeTo);
        // this.gridDataSource.total = this.dataSource.total;
        this.skip = event;
        if (this.dataSource.data.length == 0) {
            this.XemBaoCao();
        }
        else {
            var takeTo = this.skip + this.pageSize;
            let gridData = this.dataSource.data.slice(this.skip, takeTo);
            this.gridDataSource = {
                data: gridData,
                total: this.dataSource.total
            };
        }
    }
    exportExcel() {
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
            let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
            let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
            this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoBenhNhanLamXetNghiem.HostingName;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoBenhNhanLamXetNghiem", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBenhNhanLamXetNghiem" + dateTimeNow.getFullYear() + ".xlsx");
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
    XemBaoCao() {
        this.gridChild._isLoading = true;
        this.gridChild._isLoadingTotalPage = true;
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            this.gridChild._isLoading = false;
            this.gridChild._isLoadingTotalPage = false;
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
        let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
        let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
        this.apiService.post("BaoCao/GetDataBaoCaoBenhNhanLamXetNghiemForGridAsync", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                console.log(resultData);
                this.dataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                var takeTo = this.skip + this.pageSize;
                let gridData = this.dataSource.data.slice(this.skip, takeTo);
                this.gridDataSource = {
                    data: gridData,
                    total: resultData.TotalRowCount
                };
                //this.gridDataSource = this.dataSource;
                // if (this.gridView.total != 0) {
                //   this.ishowView = true;
                // } else {
                //   this.ishowView = false;
                // }
                this.gridChild._isLoading = false;
                this.gridChild._isLoadingTotalPage = false;
            }
        });
    }
};
BaoCaoBenhNhanLamXetNghiemListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
], BaoCaoBenhNhanLamXetNghiemListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sttTemplate', { static: true })
], BaoCaoBenhNhanLamXetNghiemListComponent.prototype, "sttTemplate", void 0);
BaoCaoBenhNhanLamXetNghiemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bao-cao-benh-nhan-lam-xet-nghiem-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-benh-nhan-lam-xet-nghiem-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-benh-nhan-lam-xet-nghiem-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.scss")).default]
    })
], BaoCaoBenhNhanLamXetNghiemListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component.scss ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1iZW5oLW5oYW4tbGFtLXhldC1uZ2hpZW0vYmFvLWNhby1iZW5oLW5oYW4tbGFtLXhldC1uZ2hpZW0tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbVxcYmFvLWNhby1iZW5oLW5oYW4tbGFtLXhldC1uZ2hpZW0tcG9wdXBcXGJhby1jYW8tYmVuaC1uaGFuLWxhbS14ZXQtbmdoaWVtLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS9iYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS1wb3B1cC9iYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS9iYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS1wb3B1cC9iYW8tY2FvLWJlbmgtbmhhbi1sYW0teGV0LW5naGllbS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: BaoCaoBenhNhanLamXetNghiemPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanLamXetNghiemPopupComponent", function() { return BaoCaoBenhNhanLamXetNghiemPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _bao_cao_benh_nhan_lam_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bao-cao-benh-nhan-lam-xet-nghiem.model */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.model.ts");








let BaoCaoBenhNhanLamXetNghiemPopupComponent = class BaoCaoBenhNhanLamXetNghiemPopupComponent {
    constructor(apiService, dialogRef, dialog, sanitizer, data) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.data = data;
        this.inBaoCaoBenhNhanLamXetNghiem = new _bao_cao_benh_nhan_lam_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_7__["InBaoCaoBenhNhanLamXetNghiem"]();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.src = "";
    }
    ngOnInit() {
        this.inBaoCaoBenhNhanLamXetNghiem = this.data;
        this.showBaoCao();
    }
    close() {
        this.dialogRef.close();
    }
    showBaoCao() {
        var loaded = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
        this.apiService.post("BaoCao/InBaoCaoBenhNhanLamXetNghiem", this.inBaoCaoBenhNhanLamXetNghiem).subscribe(resultData => {
            if (resultData != "" && resultData != null) {
                this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
            }
            loaded.close();
        }, () => {
            this.close();
        });
    }
    getSharedPrintForm() {
        return new Promise(resolve => {
            this.apiService.post("BaoCao/InBaoCaoBenhNhanLamXetNghiem", this.inBaoCaoBenhNhanLamXetNghiem).subscribe(resultData => {
                resolve(resultData);
            });
            this.close();
        });
    }
};
BaoCaoBenhNhanLamXetNghiemPopupComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
BaoCaoBenhNhanLamXetNghiemPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-benh-nhan-lam-xet-nghiem-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-benh-nhan-lam-xet-nghiem-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-benh-nhan-lam-xet-nghiem-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], BaoCaoBenhNhanLamXetNghiemPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: BaoCaoBenhNhanLamXetNghiemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanLamXetNghiemRoutingModule", function() { return BaoCaoBenhNhanLamXetNghiemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_benh_nhan_lam_xet_nghiem_list_bao_cao_benh_nhan_lam_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_benh_nhan_lam_xet_nghiem_list_bao_cao_benh_nhan_lam_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoBenhNhanLamXetNghiemListComponent"],
        data: {
            title: 'Báo cáo xuất nhập tồn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoBenhNhanLamXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoBenhNhanLamXetNghiemRoutingModule = class BaoCaoBenhNhanLamXetNghiemRoutingModule {
};
BaoCaoBenhNhanLamXetNghiemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoBenhNhanLamXetNghiemRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.model.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.model.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BaoCaoBenhNhanLamXetNghiemSearch, BaoCaoBenhNhanLamXetNghiem, InBaoCaoBenhNhanLamXetNghiem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanLamXetNghiemSearch", function() { return BaoCaoBenhNhanLamXetNghiemSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanLamXetNghiem", function() { return BaoCaoBenhNhanLamXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoBenhNhanLamXetNghiem", function() { return InBaoCaoBenhNhanLamXetNghiem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoBenhNhanLamXetNghiemSearch {
    constructor(FromDate = null, ToDate = null, TuNgayFormat = null, DenNgayFormat = null, KhoId = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.TuNgayFormat = TuNgayFormat;
        this.DenNgayFormat = DenNgayFormat;
        this.KhoId = KhoId;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class BaoCaoBenhNhanLamXetNghiem {
    constructor(STT = null, Ten = null, DVT = null, SLTonDauKy = 0, ThanhTienTonDauKy = 0, SLNhapTrongKy = 0, ThanhTienNhapTrongKy = 0, SLXuatTrongKy = 0, ThanhTienXuatTrongKy = 0, SLTonCuoiKy = 0, Gia = 0, ThanhTien = 0) {
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
}
class InBaoCaoBenhNhanLamXetNghiem {
    constructor(KhoId = 0, HostingName = null, FromDate = null, ToDate = null) {
        this.KhoId = KhoId;
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: BaoCaoBenhNhanLamXetNghiemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanLamXetNghiemModule", function() { return BaoCaoBenhNhanLamXetNghiemModule; });
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
/* harmony import */ var _bao_cao_benh_nhan_lam_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-benh-nhan-lam-xet-nghiem-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-routing.module.ts");
/* harmony import */ var _bao_cao_benh_nhan_lam_xet_nghiem_list_bao_cao_benh_nhan_lam_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component.ts");
/* harmony import */ var _bao_cao_benh_nhan_lam_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-benh-nhan-lam-xet-nghiem.service */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.service.ts");
/* harmony import */ var _bao_cao_benh_nhan_lam_xet_nghiem_popup_bao_cao_benh_nhan_lam_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component.ts");






















let BaoCaoBenhNhanLamXetNghiemModule = class BaoCaoBenhNhanLamXetNghiemModule {
};
BaoCaoBenhNhanLamXetNghiemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_benh_nhan_lam_xet_nghiem_list_bao_cao_benh_nhan_lam_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoBenhNhanLamXetNghiemListComponent"], _bao_cao_benh_nhan_lam_xet_nghiem_popup_bao_cao_benh_nhan_lam_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoBenhNhanLamXetNghiemPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_benh_nhan_lam_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_18__["BaoCaoBenhNhanLamXetNghiemRoutingModule"],
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
            _bao_cao_benh_nhan_lam_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoBenhNhanLamXetNghiemService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_benh_nhan_lam_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoBenhNhanLamXetNghiemService"] },
        ],
        entryComponents: [
            _bao_cao_benh_nhan_lam_xet_nghiem_popup_bao_cao_benh_nhan_lam_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoBenhNhanLamXetNghiemPopupComponent"]
        ]
    })
], BaoCaoBenhNhanLamXetNghiemModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.service.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.service.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: BaoCaoBenhNhanLamXetNghiemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanLamXetNghiemService", function() { return BaoCaoBenhNhanLamXetNghiemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoBenhNhanLamXetNghiemService = class BaoCaoBenhNhanLamXetNghiemService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BaoCaoBenhNhanLamXetNghiemService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoBenhNhanLamXetNghiemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoBenhNhanLamXetNghiemService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-benh-nhan-lam-xet-nghiem-bao-cao-benh-nhan-lam-xet-nghiem-module-es2015.js.map