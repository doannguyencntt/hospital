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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-danh-sach-benh-nhan-phau-thuat-danh-sach-benh-nhan-phau-thuat-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.html": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.html ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n              {Title:'Báo Cáo',Path:''}\n              , {Title:'Hoạt Động Khoa Khám Bệnh',Path:'/bao-cao/hoat-dong-khoa-kham-benh',Active:true}\n              ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [ngStyle]=\"{'flex-direction': 'column', 'margin-top': '-72px'}\">\n        <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\">\n            <div fxFlex=\"80%\" fxFlex.sm=\"100%\">\n                <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\" [(model)]=\"searchQuery.FromToDate\" label=\"Từ ngày - đến ngày\" (modelChange)=\"onAdvanceSearch()\">\n                </app-daterangepicker>\n\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchString\" [(ngModel)]=\"searchQuery.Searchterm\" (keyup)=\"onKey($event)\" placeholder=\"Tìm kiếm...\" (ngModelChange)=\"searchChange()\" />\n                </div>\n            </div>\n            <div fxFlex=\"20%\" fxFlex.sm=\"100%\" class=\"text-right\" style=\"margin: 5px;\">\n                <button (click)=\"exportExcel()\" type=\"button\" color=\"primary\" mat-raised-button mat-button>Xuất\n                    Excel</button>\n                <app-print-form textPrint=\"In Báo Cáo\" type=\"PDF\" [bodyComponent]=\"this\" [showInMenuItem]=\"false\" [showIconPrint]=\"false\">\n                </app-print-form>\n            </div>\n        </div>\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n            <kendo-grid [data]=\"gridDataSource\" class=\"k-grid1 shared-header grid-bao-cao\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\" [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" #hoatDongKhoaKhamBenhGrid id={{masterName}} (columnResize)=\"columnResize($event)\">\n                <kendo-grid-column title=\"STT\" [width]=\"50\" sortable=\"false\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex+1}}\n                    </ng-template>\n                </kendo-grid-column>\n                <kendo-grid-column [style]=\"{'text-align': 'center'}\" [field]=\"col.Field\" [title]=\"col.Title\" [width]=\"CellWidthAuto(col.Width,col.MinWidth)\" [sortable]=\"col.Sortable\" *ngFor=\"let col of gridDisplayColumns\">\n                    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\" *ngIf=\"col.Template!=null\">\n                        <ng-container *ngTemplateOutlet=\"col.Template; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                        </ng-container>\n                    </ng-template>\n                    <ng-template *ngIf=\"col.Colspan\" kendoGridHeaderTemplate let-column let-columnIndex=\"columnIndex\">\n                        <table style=\"width:100%;\" class=\"tableingroup\" [innerHTML]=\"renderDescendantHeader(col.ParentTitle)\">\n                        </table>\n                    </ng-template>\n                    <ng-template *ngIf=\"col.Colspan\" kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <table style=\"width:100%;\" class=\"tableingroup\" [innerHTML]=\"renderDescendantBody(col.ParentTitle, dataItem)\">\n                            <tr>\n                                <td style=\"text-align: right;\">\n                                    {{ dataItem.Bhyt | number:'1.0':'vi-VN'}}\n                                </td>\n                                <td style=\"text-align: right;\">\n                                    {{ dataItem.VienPhi | number:'1.0':'vi-VN'}}\n                                </td>\n                                <td style=\"text-align: right;\">\n                                    {{ dataItem.KskDoan | number:'1.0':'vi-VN'}}\n                                </td>\n                                <td style=\"text-align: right;\">\n                                    {{ dataItem.Ksk | number:'1.0':'vi-VN'}}\n                                </td>\n                                <td style=\"text-align: right;\">\n                                    {{ dataItem.Goi | number:'1.0':'vi-VN'}}\n                                </td>\n                                <td style=\"text-align: right;\">\n                                    {{ dataItem.TreEm | number:'1.0':'vi-VN'}}\n                                </td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </kendo-grid-column>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between\" fxFlex=\"100%\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"isLoadingTotalPage\" kendoButton class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\" style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"onAdvanceSearch()\"></div>\n                        <div *ngIf=\"isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\" detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                </kendo-grid-messages>\n            </kendo-grid>\n        </div>\n        <ng-template #ngayHetHanTemplate let-dataItem>\n            <span style=\"color: orange;\" class=\"badge badge-pill\">{{dataItem.NgayHetHanDisplay}}\n            </span>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>\n<ng-template #gioiTinhTemplate let-dataItem>\n    <span>\n      {{dataItem.GioiTinh == null ? \"\" : (dataItem.GioiTinh == 1 ? \"Nam\" : \"Nữ\")}}\n  </span>\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.scss": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.scss ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th,\n.k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vZGFuaC1zYWNoLWJlbmgtbmhhbi1waGF1LXRodWF0L2Rhbmgtc2FjaC1iZW5oLW5oYW4tcGhhdS10aHVhdC1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcZGFuaC1zYWNoLWJlbmgtbmhhbi1waGF1LXRodWF0XFxkYW5oLXNhY2gtYmVuaC1uaGFuLXBoYXUtdGh1YXQtbGlzdFxcZGFuaC1zYWNoLWJlbmgtbmhhbi1waGF1LXRodWF0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Rhbmgtc2FjaC1iZW5oLW5oYW4tcGhhdS10aHVhdC9kYW5oLXNhY2gtYmVuaC1uaGFuLXBoYXUtdGh1YXQtbGlzdC9kYW5oLXNhY2gtYmVuaC1uaGFuLXBoYXUtdGh1YXQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vZGFuaC1zYWNoLWJlbmgtbmhhbi1waGF1LXRodWF0L2Rhbmgtc2FjaC1iZW5oLW5oYW4tcGhhdS10aHVhdC1saXN0L2Rhbmgtc2FjaC1iZW5oLW5oYW4tcGhhdS10aHVhdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufSIsIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLFxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.ts": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.ts ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: DanhSachBenhNhanPhauThuatListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachBenhNhanPhauThuatListComponent", function () { return DanhSachBenhNhanPhauThuatListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _danh_sach_benh_nhan_phau_thuat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../danh-sach-benh-nhan-phau-thuat.model */ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat.model.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var DanhSachBenhNhanPhauThuatListComponent = /** @class */ (function () {
                function DanhSachBenhNhanPhauThuatListComponent(notificationService, authService, location, dialog, apiService) {
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.queryInfo = null;
                    this.searchQuery = new _danh_sach_benh_nhan_phau_thuat_model__WEBPACK_IMPORTED_MODULE_3__["Search"]();
                    this.gridColumns = [];
                    this.gridDisplayColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.height = null;
                    this.skip = 0;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
                    this.baseRoute = '/bao-cao/danh-sach-benh-nhan-phau-thuat';
                    this.dataDanhSachBenhNhanPhauThuat = [];
                    this.pageSize = 50;
                    this.gridDataSource = new _danh_sach_benh_nhan_phau_thuat_model__WEBPACK_IMPORTED_MODULE_3__["Grid"]();
                    this.masterName = 'DanhSachBenhNhanPhauThuatGrid';
                    this.isLoading = true;
                    this.isLoadingTotalPage = true;
                    this.additionalSearchString = '';
                }
                DanhSachBenhNhanPhauThuatListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhSachBenhNhanPhauThuat;
                    this.gridColumns = [
                        { Field: 'ThoiGianVaoVienDisplay', Title: 'Khoa', Width: 127, Sortable: false, Render: true },
                        { Field: 'MaTn', Title: 'Mã TN', Width: 90, Sortable: false, Render: true },
                        { Field: 'HoTenBn', Title: 'Họ tên NB', Width: 122, MinWidth: 250, Sortable: false, Render: true },
                        { Field: 'DiaChi', Title: 'Địa Chỉ', Width: 177, Sortable: false, Render: true },
                        { Field: 'NgaySinhDisplay', Title: 'Ngày Sinh', Width: 177, Sortable: false, Render: true },
                        { Field: 'GioiTinh', Title: 'Giới Tính', Width: 177, Sortable: false, Render: true, Template: this.gioiTinhTemplate },
                        { Field: 'Khoa', Title: 'Khoa', Width: 177, Sortable: false, Render: true },
                        { Field: 'ChanDoan', Title: 'Chẩn đoán', Width: 177, Sortable: false, Render: true },
                        { Field: 'PhuongPhapPhauThuat', Title: 'Phương Pháp Phẫu Thuật', Width: 177, Sortable: false, Render: true },
                        { Field: 'PhuongPhapVoCam', Title: 'Phương Pháp Vô Cảm', Width: 177, Sortable: false, Render: true },
                        { Field: 'Ptv', Title: 'PTV', Width: 177, Sortable: false, Render: true },
                        { Field: 'GayMe', Title: 'Gây Mê', Width: 177, Sortable: false, Render: true },
                        { Field: 'TinhTrangSauPt', Title: 'Tình Trạng Sau PT', Width: 177, Sortable: false, Render: true },
                        {
                            Field: 'ThoiGianPhauThuatTu',
                            Title: 'Từ Ngày',
                            Width: 515,
                            Sortable: false,
                            ParentTitle: 'Thời gian phẫu thuật',
                            Colspan: 2,
                            Render: true
                        },
                        { Field: 'ThoiGianPhauThuatDen', Title: 'Đến Ngày', Width: 125, Sortable: false, ParentTitle: 'Số Lần Khám' },
                        { Field: 'CapCuu', Title: 'Cấp Cứu', Width: 177, Sortable: false, Render: true },
                        { Field: 'TaiBien', Title: 'Tai Biến', Width: 177, Sortable: false, Render: true }
                    ];
                    this.gridDisplayColumns = this.gridColumns.slice().filter(function (x) { return x.Render; });
                    this.GetDatasource();
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.CellWidthAuto = function (width, minWidth) {
                    if (width == null) {
                        if (this.gridColumns && this.gridColumns.length > 0) {
                            var widthParent = jQuery('#' + this.masterName).parent().width();
                            var widthScreen = (widthParent ? Math.round(widthParent) : jQuery(window).width()) - 120;
                            var totalWidth = this.gridColumns.filter(function (item) {
                                return item.Width != null;
                            }).reduce(function (sum, item) { return sum + item.Width; }, 0);
                            if ((widthScreen < totalWidth + minWidth + 100)) {
                                return minWidth;
                            }
                            else {
                                return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
                            }
                        }
                    }
                    else {
                        return width;
                    }
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.renderDescendantHeader = function (parent) {
                    var numberOfThisParent = this.gridColumns.filter(function (x) { return x.ParentTitle === parent; }).length;
                    var result = '';
                    var parentHtml = "<tr>\n                <th colspan=\"" + numberOfThisParent + "\">" + parent + "</th>\n            </tr>";
                    var init = '<tr>';
                    var finish = '</tr>';
                    result += parentHtml + init;
                    this.gridColumns.filter(function (x) { return x.ParentTitle === parent; }).forEach(function (node) {
                        result += "<th style=\"border-right: 1px solid darkgrey;border-left: 1px solid darkgrey;\">" + node.Title + "</th>";
                    });
                    result += finish;
                    return result;
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.renderDescendantBody = function (parent, data) {
                    var _this = this;
                    var result = '';
                    var init = '<tr>';
                    var finish = '</tr>';
                    result += init;
                    this.gridColumns.filter(function (x) { return x.ParentTitle === parent; }).forEach(function (node) {
                        result += "<td style=\"text-align: right;\">" + _this.GetDataByGivenField(node.Field, data) + "</td>";
                    });
                    result += finish;
                    return result;
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.GetDataByGivenField = function (field, data) {
                    switch (field) {
                        case 'Bhyt': {
                            return data.Bhyt != null ? data.Bhyt.toLocaleString('vi-VI') : '';
                        }
                        case 'VienPhi': {
                            return data.VienPhi != null ? data.VienPhi.toLocaleString('vi-VI') : '';
                        }
                        case 'KskDoan': {
                            return data.KskDoan != null ? data.KskDoan.toLocaleString('vi-VI') : '';
                        }
                        case 'Ksk': {
                            return data.Ksk != null ? data.Ksk.toLocaleString('vi-VI') : '';
                        }
                        case 'Goi': {
                            return data.Goi != null ? data.Goi.toLocaleString('vi-VI') : '';
                        }
                        case 'TreEm': {
                            return data.TreEm != null ? data.TreEm.toLocaleString('vi-VI') : '';
                        }
                        case 'SoNguoiBenhDieuTriNgoaiTru': {
                            return data.SoNguoiBenhDieuTriNgoaiTru != null ? data.SoNguoiBenhDieuTriNgoaiTru.toLocaleString('vi-VI') : '';
                        }
                        case 'SoNgayDieuTriNgoaiTru': {
                            return data.SoNgayDieuTriNgoaiTru != null ? data.SoNgayDieuTriNgoaiTru.toLocaleString('vi-VI') : '';
                        }
                    }
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.GetDatasource = function () {
                    var _this = this;
                    this.queryInfo = new _danh_sach_benh_nhan_phau_thuat_model__WEBPACK_IMPORTED_MODULE_3__["QueryInfo"](this.skip, (this.pageSize * this.skip) + this.pageSize, this.pageSize, '', this.additionalSearchString);
                    this.apiService.post('DanhSachBenhNhanPhauThuat/GetDataForGridAsync', this.queryInfo).subscribe(function (resultData) {
                        if (resultData) {
                            _this.gridDataSource.data = resultData.Data.slice();
                            _this.isLoading = false;
                        }
                    });
                    this.apiService.post('DanhSachBenhNhanPhauThuat/GetTotalPageForGridAsync', this.queryInfo).subscribe(function (resultData) {
                        if (resultData) {
                            _this.isLoadingTotalPage = false;
                            _this.gridDataSource.total = resultData.TotalRowCount;
                        }
                    });
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this.height = jQuery(window).height() - 180;
                    if (this.height < 400) {
                        this.height = 400;
                    }
                    jQuery(window).resize(function () {
                        _this.height = jQuery(window).height() - 180;
                        if (_this.height < 400) {
                            _this.height = 400;
                        }
                    });
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.pageChange = function (event) {
                    if (event != null) {
                        this.skip = event.skip;
                    }
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.onAdvanceSearch = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    this.isLoadingTotalPage = true;
                    if (this.searchQuery.FromToDate != null && this.searchQuery.FromToDate.startDate != null) {
                        this.searchQuery.FromToDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.searchQuery.FromToDate.startDate, 'mm/dd/yyyy');
                    }
                    else {
                        this.searchQuery.FromToDate.TuNgay = null;
                    }
                    if (this.searchQuery.FromToDate != null && this.searchQuery.FromToDate.endDate != null) {
                        this.searchQuery.FromToDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.searchQuery.FromToDate.endDate, 'mm/dd/yyyy');
                    }
                    else {
                        this.searchQuery.FromToDate.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.searchQuery);
                    this.additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem('cacheDanhSachBenhNhanPhauThuat', queryString);
                    this.search();
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.search = function () {
                    this.skip = 0;
                    if (this.gridDataSource == null) {
                        this.GetDatasource();
                    }
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.onKey = function (event) {
                    if (event.key === 'Enter') {
                        this.onAdvanceSearch();
                    }
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.searchChange = function () {
                    if (this.searchQuery.Searchterm == null || this.searchQuery.Searchterm === '') {
                        this.onAdvanceSearch();
                    }
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.apiService.post('BaoCaoDanhSachBenhNhanPhauThuat/InDanhMucDaHetHan', _this.searchQuery).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                    });
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.showPopupLoadingData();
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel('BaoCaoDanhSachBenhNhanPhauThuat/ExportBaoCaoDanhSachBenhNhanPhauThuat', this.queryInfo).subscribe(function (resultData) {
                            _this.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoDanhSachBenhNhanPhauThuat' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.GetListAsync = function (eventList) {
                    this.dataDanhSachBenhNhanPhauThuat = eventList.Data.slice();
                };
                DanhSachBenhNhanPhauThuatListComponent.prototype.columnResize = function (event) {
                    var _this = this;
                    console.log('column resize ', event);
                    if (event != null && event.length > 0) {
                        event.forEach(function (element) {
                            var columnIndex = _this.gridColumns.findIndex(function (x) { return x.Field === element.column.field; });
                            if (columnIndex >= 0) {
                                _this.gridColumns[columnIndex].Width = element.newWidth;
                                if (jQuery('.k-detail-cell .k-grid-table').find('col')
                                    && jQuery('.k-detail-cell .k-grid-table').find('col').length > 0) {
                                    jQuery(jQuery('.k-detail-cell .k-grid-table').find('col')[columnIndex]).css({ width: element.newWidth });
                                }
                            }
                        });
                    }
                };
                return DanhSachBenhNhanPhauThuatListComponent;
            }());
            DanhSachBenhNhanPhauThuatListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DanhSachBenhNhanPhauThuatListComponent.prototype, "bodyComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('DanhSachBenhNhanPhauThuatGrid', { static: true })
            ], DanhSachBenhNhanPhauThuatListComponent.prototype, "DanhSachBenhNhanPhauThuatGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhTemplate', { static: true })
            ], DanhSachBenhNhanPhauThuatListComponent.prototype, "gioiTinhTemplate", void 0);
            DanhSachBenhNhanPhauThuatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-danh-sach-benh-nhan-phau-thuat-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-benh-nhan-phau-thuat-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-benh-nhan-phau-thuat-list.component.scss */ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.scss")).default]
                })
            ], DanhSachBenhNhanPhauThuatListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-routing.module.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-routing.module.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: DanhSachBenhNhanPhauThuatRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachBenhNhanPhauThuatRoutingModule", function () { return DanhSachBenhNhanPhauThuatRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _danh_sach_benh_nhan_phau_thuat_list_danh_sach_benh_nhan_phau_thuat_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component */ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            var routes = [
                {
                    path: '',
                    component: _danh_sach_benh_nhan_phau_thuat_list_danh_sach_benh_nhan_phau_thuat_list_component__WEBPACK_IMPORTED_MODULE_4__["DanhSachBenhNhanPhauThuatListComponent"],
                    data: {
                        title: 'Danh Sách Người Bệnh Phẫu Thuật',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachBenhNhanPhauThuat,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    }
                }
            ];
            var DanhSachBenhNhanPhauThuatRoutingModule = /** @class */ (function () {
                function DanhSachBenhNhanPhauThuatRoutingModule() {
                }
                return DanhSachBenhNhanPhauThuatRoutingModule;
            }());
            DanhSachBenhNhanPhauThuatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DanhSachBenhNhanPhauThuatRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat.model.ts": 
        /*!*************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat.model.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: Search, SearchDateRange, Grid, DanhSachBenhNhanPhauThuatVo, QueryInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function () { return Search; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDateRange", function () { return SearchDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function () { return Grid; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachBenhNhanPhauThuatVo", function () { return DanhSachBenhNhanPhauThuatVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInfo", function () { return QueryInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Search = /** @class */ (function () {
                function Search(
                // tslint:disable-next-line: no-use-before-declare
                FromToDate, 
                // tslint:disable-next-line: no-use-before-declare
                Searchterm) {
                    if (FromToDate === void 0) { FromToDate = new SearchDateRange(); }
                    if (Searchterm === void 0) { Searchterm = null; }
                    this.FromToDate = FromToDate;
                    this.Searchterm = Searchterm;
                }
                return Search;
            }());
            var SearchDateRange = /** @class */ (function () {
                function SearchDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return SearchDateRange;
            }());
            var Grid = /** @class */ (function () {
                function Grid(data, total) {
                    if (data === void 0) { data = []; }
                    if (total === void 0) { total = null; }
                    this.data = data;
                    this.total = total;
                }
                return Grid;
            }());
            var DanhSachBenhNhanPhauThuatVo = /** @class */ (function () {
                function DanhSachBenhNhanPhauThuatVo(Id, Bhyt, DichVu, Goi, Ksk, KskDoan, SoLanCapCuu, SoNgayDieuTriNgoaiTru, SoNguoiBenhChuyenVien, SoNguoiBenhDieuTriNgoaiTru, SoNguoiBenhVaoVien, TongSo, TreEm, VienPhi) {
                    if (Id === void 0) { Id = null; }
                    if (Bhyt === void 0) { Bhyt = null; }
                    if (DichVu === void 0) { DichVu = null; }
                    if (Goi === void 0) { Goi = null; }
                    if (Ksk === void 0) { Ksk = null; }
                    if (KskDoan === void 0) { KskDoan = null; }
                    if (SoLanCapCuu === void 0) { SoLanCapCuu = null; }
                    if (SoNgayDieuTriNgoaiTru === void 0) { SoNgayDieuTriNgoaiTru = null; }
                    if (SoNguoiBenhChuyenVien === void 0) { SoNguoiBenhChuyenVien = null; }
                    if (SoNguoiBenhDieuTriNgoaiTru === void 0) { SoNguoiBenhDieuTriNgoaiTru = null; }
                    if (SoNguoiBenhVaoVien === void 0) { SoNguoiBenhVaoVien = null; }
                    if (TongSo === void 0) { TongSo = null; }
                    if (TreEm === void 0) { TreEm = null; }
                    if (VienPhi === void 0) { VienPhi = null; }
                    this.Id = Id;
                    this.Bhyt = Bhyt;
                    this.DichVu = DichVu;
                    this.Goi = Goi;
                    this.Ksk = Ksk;
                    this.KskDoan = KskDoan;
                    this.SoLanCapCuu = SoLanCapCuu;
                    this.SoNgayDieuTriNgoaiTru = SoNgayDieuTriNgoaiTru;
                    this.SoNguoiBenhChuyenVien = SoNguoiBenhChuyenVien;
                    this.SoNguoiBenhDieuTriNgoaiTru = SoNguoiBenhDieuTriNgoaiTru;
                    this.SoNguoiBenhVaoVien = SoNguoiBenhVaoVien;
                    this.TongSo = TongSo;
                    this.TreEm = TreEm;
                    this.VienPhi = VienPhi;
                }
                return DanhSachBenhNhanPhauThuatVo;
            }());
            var QueryInfo = /** @class */ (function () {
                function QueryInfo(skip, take, pageSize, searchString, additionalSearchString) {
                    this.skip = skip;
                    this.take = take;
                    this.pageSize = pageSize;
                    this.searchString = searchString;
                    this.additionalSearchString = additionalSearchString;
                }
                return QueryInfo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat.module.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat.module.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: DanhSachBenhNhanPhauThuatModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachBenhNhanPhauThuatModule", function () { return DanhSachBenhNhanPhauThuatModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _danh_sach_benh_nhan_phau_thuat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danh-sach-benh-nhan-phau-thuat-routing.module */ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-routing.module.ts");
            /* harmony import */ var _danh_sach_benh_nhan_phau_thuat_list_danh_sach_benh_nhan_phau_thuat_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component */ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component.ts");
            /* harmony import */ var _danh_sach_benh_nhan_phau_thuat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./danh-sach-benh-nhan-phau-thuat.service */ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            var DanhSachBenhNhanPhauThuatModule = /** @class */ (function () {
                function DanhSachBenhNhanPhauThuatModule() {
                }
                return DanhSachBenhNhanPhauThuatModule;
            }());
            DanhSachBenhNhanPhauThuatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _danh_sach_benh_nhan_phau_thuat_list_danh_sach_benh_nhan_phau_thuat_list_component__WEBPACK_IMPORTED_MODULE_4__["DanhSachBenhNhanPhauThuatListComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__["GridModule"],
                        _danh_sach_benh_nhan_phau_thuat_routing_module__WEBPACK_IMPORTED_MODULE_3__["DanhSachBenhNhanPhauThuatRoutingModule"]
                    ],
                    entryComponents: [],
                    providers: [
                        _danh_sach_benh_nhan_phau_thuat_service__WEBPACK_IMPORTED_MODULE_5__["DanhSachBenhNhanPhauThuatService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _danh_sach_benh_nhan_phau_thuat_service__WEBPACK_IMPORTED_MODULE_5__["DanhSachBenhNhanPhauThuatService"] },
                    ]
                })
            ], DanhSachBenhNhanPhauThuatModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat.service.ts": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat.service.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: DanhSachBenhNhanPhauThuatService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachBenhNhanPhauThuatService", function () { return DanhSachBenhNhanPhauThuatService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DanhSachBenhNhanPhauThuatService = /** @class */ (function (_super) {
                __extends(DanhSachBenhNhanPhauThuatService, _super);
                function DanhSachBenhNhanPhauThuatService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'DanhSachBenhNhanPhauThuat';
                    return _this;
                }
                return DanhSachBenhNhanPhauThuatService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DanhSachBenhNhanPhauThuatService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DanhSachBenhNhanPhauThuatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DanhSachBenhNhanPhauThuatService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-danh-sach-benh-nhan-phau-thuat-danh-sach-benh-nhan-phau-thuat-module-es2015.js.map
//# sourceMappingURL=bao-cao-danh-sach-benh-nhan-phau-thuat-danh-sach-benh-nhan-phau-thuat-module-es5.js.map
//# sourceMappingURL=bao-cao-danh-sach-benh-nhan-phau-thuat-danh-sach-benh-nhan-phau-thuat-module-es5.js.map