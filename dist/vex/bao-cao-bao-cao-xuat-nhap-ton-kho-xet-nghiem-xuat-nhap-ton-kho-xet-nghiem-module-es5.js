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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-xuat-nhap-ton-kho-xet-nghiem-xuat-nhap-ton-kho-xet-nghiem-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.html": 
        /*!****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.html ***!
          \****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                  \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Xét Nghiệm', Path:''},\n                {Title:'Xuất nhập tồn kho xét nghiệm', Path:'', Active:true}]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"gridView\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid\n                [group]=\"groups\">\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Chọn tủ hoá chất\" popupSettings=\"\" bind=\"true\"\n                            url=\"BaoCao/GetTatCaTuHoaChat\" [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\">\n                        </app-combobox>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgay\" id=\"TuNgay\"\n                            [maxDate]=\"baoCaoSearch.DenNgay\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgay\" id=\"DenNgay\"\n                            [minDate]=\"baoCaoSearch.TuNgay\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                        </app-datetimepicker>\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                        </div>\n                    </div>\n                </ng-template>\n\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                    width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                    width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                    width=\"{{getWidthColumn(4)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                    width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                    width=\"{{getWidthColumn(6)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                    width=\"{{getWidthColumn(7)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                    width=\"{{getWidthColumn(8)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                    width=\"{{getWidthColumn(9)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                    width=\"{{getWidthColumn(10)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(11)}}\" [hidden]=\"true\">\n                    <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"reFresh()\">\n                        </div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n\n            </kendo-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.scss": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.scss ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby14dWF0LW5oYXAtdG9uLWtoby14ZXQtbmdoaWVtL3h1YXQtbmhhcC10b24ta2hvLXhldC1uZ2hpZW0tbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8teHVhdC1uaGFwLXRvbi1raG8teGV0LW5naGllbVxceHVhdC1uaGFwLXRvbi1raG8teGV0LW5naGllbS1saXN0XFx4dWF0LW5oYXAtdG9uLWtoby14ZXQtbmdoaWVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8teHVhdC1uaGFwLXRvbi1raG8teGV0LW5naGllbS94dWF0LW5oYXAtdG9uLWtoby14ZXQtbmdoaWVtLWxpc3QveHVhdC1uaGFwLXRvbi1raG8teGV0LW5naGllbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8teHVhdC1uaGFwLXRvbi1raG8teGV0LW5naGllbS94dWF0LW5oYXAtdG9uLWtoby14ZXQtbmdoaWVtLWxpc3QveHVhdC1uaGFwLXRvbi1raG8teGV0LW5naGllbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSIsIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.ts": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.ts ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoXuatNhapTonKhoXetNghiemListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonKhoXetNghiemListComponent", function () { return BaoCaoXuatNhapTonKhoXetNghiemListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var _xuat_nhap_ton_kho_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../xuat-nhap-ton-kho-xet-nghiem.model */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem.model.ts");
            var BaoCaoXuatNhapTonKhoXetNghiemListComponent = /** @class */ (function () {
                function BaoCaoXuatNhapTonKhoXetNghiemListComponent(apiService, dialog, authService, notificationService, cd) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.cd = cd;
                    this.baoCaoSearch = new _xuat_nhap_ton_kho_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_14__["BaoCaoTonKhoSearch"]();
                    this.inBaoCaoTonKho = new _xuat_nhap_ton_kho_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_14__["InBaoCaoTonKho"]();
                    this.pageSize = 50;
                    this.skip = 0;
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.sort = [{
                            field: 'Id',
                            dir: 'desc'
                        }];
                    this.dataSource = {
                        data: [],
                        total: 0
                    };
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this.showDefaultPagerTemplate = true;
                    this.ishowView = false;
                    this.IsData = false;
                    this.heightToolbar = 140;
                    this.groups = [{ field: 'Nhom' }];
                }
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.pageChange = function (event) {
                    this.skip = event.skip;
                    if (this.dataSource.data.length == 0) {
                        this.XemBaoCao();
                    }
                    else {
                        var takeTo = +this.skip + +this.pageSize;
                        var gridData = this.dataSource.data.slice(this.skip, takeTo);
                        this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__["process"])(gridData, { group: this.groups });
                        this.gridView.total = this.dataSource.total;
                    }
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoXNXuatNhapTonKhoXetNghiem;
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    if (window.location.protocol == "http:") {
                        this.inBaoCaoTonKho.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inBaoCaoTonKho.HostingName = "https://" + window.location.host;
                    }
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 100, Template: this.sttTemplate },
                        { Field: "MaDuocPham", Title: "Mã dược phẩm", Width: 100 },
                        { Field: "DuocPham", Title: "Dược phẩm", Width: 200 },
                        { Field: "DonViTinh", Title: "Đơn vị tính", Width: 100 },
                        { Field: "TongDauKy", Title: "Tồn đầu kỳ", Width: 120 },
                        { Field: "NhapTrongKy", Title: "Nhập trong kỳ", Width: 100 },
                        { Field: "XuatTrongKy", Title: "Xuất trong kỳ", Width: 150 },
                        { Field: "TonCuoiKy", Title: "Tồn cuối kỳ", Width: 120 },
                        { Field: "SoLoSX", Title: "Lô sx", Width: 120 },
                        { Field: "HanDungDisplay", Title: "Hạn dùng", Width: 120 },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 120 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    if (this.baoCaoSearch.TuNgay == null) {
                        this.baoCaoSearch.TuNgay = this.minDateTuNgay;
                    }
                    if (this.baoCaoSearch.DenNgay == null) {
                        this.baoCaoSearch.DenNgay = new Date();
                        //this.baoCaoSearch.DenNgay.setHours(23, 59, 59);
                    }
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.getMinWidthColumn = function (minWidth) {
                    var widthParent = jQuery("#baoCaoGrid").parent().width();
                    var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
                    var totalWidth = this.gridColumns.filter(function (item) {
                        return item.Width != null;
                    }).reduce(function (sum, item) { return sum + item.Width; }, 0);
                    if ((widthScreen < totalWidth + minWidth + 100)) {
                        return minWidth;
                    }
                    else {
                        return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
                    }
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.detailExpand = function (event) {
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgay, "dd/mm/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgay, "dd/mm/yyyy");
                    this.additionalSearchString = this.baoCaoSearch.KhoId + ";" + event.dataItem.NhomDuocPhamVatTuId + ";" + tuNgay + ";" + denNgay;
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.onDataBoundChild = function (event) {
                    console.log(event);
                    this.dataToSumThanhTien = event.Data;
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.ngAfterContentInit = function () {
                    var self = this;
                    self.height = jQuery(window).height() - self.heightToolbar;
                    if (self.height < 400) {
                        self.height = 400;
                    }
                    jQuery(window).resize(function () {
                        self.height = jQuery(window).height() - self.heightToolbar;
                        if (self.height < 400) {
                            self.height = 400;
                        }
                    });
                    this.cd.detectChanges();
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (!this.baoCaoSearch.KhoId) {
                        this.notificationService.showError("Vui lòng chọn tủ hóa chất");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgay, "dd/mm/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgay, "dd/mm/yyyy");
                        var khoId = 0;
                        if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
                            khoId = this.baoCaoSearch.KhoId;
                        }
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgay;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgay;
                        this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoTonKho.HostingName;
                        this.apiService.postExportExcel("BaoCao/ExportXuatNhapTonKhoXetNghiem", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "XuatNhapTonKhoXetNghiem" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.reFresh = function () {
                    this.skip = 0;
                    this.XemBaoCao();
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (!this.baoCaoSearch.KhoId) {
                        this.notificationService.showError("Vui lòng chọn tủ hóa chất");
                        return;
                    }
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgay;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgay;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    this.apiService.post("BaoCao/GetDataXuatNhapTonKhoXetNghiemForGrid", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.dataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            var takeTo = +_this.skip + +_this.pageSize;
                            var gridData = _this.dataSource.data.slice(_this.skip, takeTo);
                            _this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__["process"])(gridData, { group: _this.groups });
                            _this.gridView.total = _this.dataSource.total;
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                        }
                    });
                };
                BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype.changeValueStart = function () {
                    this.minDateDenNgay = new Date();
                    if (this.baoCaoSearch.TuNgay != null && this.baoCaoSearch.DenNgay != null
                        && this.baoCaoSearch.DenNgay > this.baoCaoSearch.TuNgay) {
                        this.baoCaoSearch.DenNgay = this.minDateDenNgay;
                    }
                };
                return BaoCaoXuatNhapTonKhoXetNghiemListComponent;
            }());
            BaoCaoXuatNhapTonKhoXetNghiemListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype, "heightToolbar", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
            ], BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('baoCaoGrid', { static: true })
            ], BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype, "baoCaoGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sttTemplate', { static: true })
            ], BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], BaoCaoXuatNhapTonKhoXetNghiemListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            BaoCaoXuatNhapTonKhoXetNghiemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-xuat-nhap-ton-kho-xet-nghiem-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-nhap-ton-kho-xet-nghiem-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-nhap-ton-kho-xet-nghiem-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.scss")).default]
                })
            ], BaoCaoXuatNhapTonKhoXetNghiemListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-routing.module.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-routing.module.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: BaoCaoXuatNhapTonKhoXetNghiemRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonKhoXetNghiemRoutingModule", function () { return BaoCaoXuatNhapTonKhoXetNghiemRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _xuat_nhap_ton_kho_xet_nghiem_list_xuat_nhap_ton_kho_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _xuat_nhap_ton_kho_xet_nghiem_list_xuat_nhap_ton_kho_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoXuatNhapTonKhoXetNghiemListComponent"],
                    data: {
                        title: 'Xuất nhập tồn kho xét nghiệm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoXNXuatNhapTonKhoXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoXuatNhapTonKhoXetNghiemRoutingModule = /** @class */ (function () {
                function BaoCaoXuatNhapTonKhoXetNghiemRoutingModule() {
                }
                return BaoCaoXuatNhapTonKhoXetNghiemRoutingModule;
            }());
            BaoCaoXuatNhapTonKhoXetNghiemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoXuatNhapTonKhoXetNghiemRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem.model.ts": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem.model.ts ***!
          \*****************************************************************************************************************/
        /*! exports provided: BaoCaoTonKhoSearch, BaoCaoTonKho, InBaoCaoTonKho */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoSearch", function () { return BaoCaoTonKhoSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKho", function () { return BaoCaoTonKho; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoTonKho", function () { return InBaoCaoTonKho; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTonKhoSearch = /** @class */ (function () {
                function BaoCaoTonKhoSearch(FromDate, ToDate, TuNgay, DenNgay, KhoId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.KhoId = KhoId;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoTonKhoSearch;
            }());
            var BaoCaoTonKho = /** @class */ (function () {
                function BaoCaoTonKho(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
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
                return BaoCaoTonKho;
            }());
            var InBaoCaoTonKho = /** @class */ (function () {
                function InBaoCaoTonKho(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoTonKho;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem.module.ts": 
        /*!******************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem.module.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: BaoCaoXuatNhapTonKhoXetNghiemModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonKhoXetNghiemModule", function () { return BaoCaoXuatNhapTonKhoXetNghiemModule; });
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
            /* harmony import */ var _xuat_nhap_ton_kho_xet_nghiem_list_xuat_nhap_ton_kho_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component.ts");
            /* harmony import */ var _xuat_nhap_ton_kho_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./xuat-nhap-ton-kho-xet-nghiem-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem-routing.module.ts");
            /* harmony import */ var _xuat_nhap_ton_kho_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./xuat-nhap-ton-kho-xet-nghiem.service */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem.service.ts");
            var BaoCaoXuatNhapTonKhoXetNghiemModule = /** @class */ (function () {
                function BaoCaoXuatNhapTonKhoXetNghiemModule() {
                }
                return BaoCaoXuatNhapTonKhoXetNghiemModule;
            }());
            BaoCaoXuatNhapTonKhoXetNghiemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_xuat_nhap_ton_kho_xet_nghiem_list_xuat_nhap_ton_kho_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoXuatNhapTonKhoXetNghiemListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _xuat_nhap_ton_kho_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoXuatNhapTonKhoXetNghiemRoutingModule"],
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
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"]
                    ],
                    providers: [
                        _xuat_nhap_ton_kho_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoXuatNhapTonKhoXetNghiemService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _xuat_nhap_ton_kho_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoXuatNhapTonKhoXetNghiemService"] },
                    ],
                    entryComponents: []
                })
            ], BaoCaoXuatNhapTonKhoXetNghiemModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem.service.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem.service.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: BaoCaoXuatNhapTonKhoXetNghiemService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonKhoXetNghiemService", function () { return BaoCaoXuatNhapTonKhoXetNghiemService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoXuatNhapTonKhoXetNghiemService = /** @class */ (function (_super) {
                __extends(BaoCaoXuatNhapTonKhoXetNghiemService, _super);
                function BaoCaoXuatNhapTonKhoXetNghiemService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoXuatNhapTonKhoXetNghiemService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoXuatNhapTonKhoXetNghiemService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoXuatNhapTonKhoXetNghiemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoXuatNhapTonKhoXetNghiemService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-xuat-nhap-ton-kho-xet-nghiem-xuat-nhap-ton-kho-xet-nghiem-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-xuat-nhap-ton-kho-xet-nghiem-xuat-nhap-ton-kho-xet-nghiem-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-xuat-nhap-ton-kho-xet-nghiem-xuat-nhap-ton-kho-xet-nghiem-module-es5.js.map