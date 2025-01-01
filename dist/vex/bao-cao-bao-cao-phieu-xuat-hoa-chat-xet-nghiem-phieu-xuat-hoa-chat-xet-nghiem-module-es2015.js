(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-phieu-xuat-hoa-chat-xet-nghiem-phieu-xuat-hoa-chat-xet-nghiem-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.html":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.html ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>THÔNG TIN CHI TIẾT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n\n    <div width=\"100%\" fxLayout=\"row\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"gridView\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid>\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                        style=\"margin-top: 36px;\">\n                        <div style=\"width: 180%;\" fxLayout=\"row\">\n                            <table class=\"table table-border\" width=\"100%\">\n                                <tr>\n                                    <td colspan=\"2\" align=\"left\">Kho : <strong style=\"color: red\"\n                                            align=\"left\">{{data.Model.TenKho}}</strong></td>\n                                    <td colspan=\"2\" align=\"left\">Tên Hóa Chất: <strong style=\"color: red\"\n                                            align=\"left\">{{data.Model.TenDuocPham}}</strong> </td>\n\n                                </tr>\n                            </table>\n                        </div>\n                        <div style=\"width: 100%;\" fxLayoutAlign=\"end center\" fxLayout=\"row\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất excel</button>\n                        </div>\n                    </div>\n\n                </ng-template>\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    [style]=\"{'text-align': 'center'}\" width=\"{{getWidthColumn(0)}}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    [style]=\"{'text-align': 'center'}\" width=\"{{getWidthColumn(1)}}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                    width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                    width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                    width=\"{{getWidthColumn(4)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                    width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                    width=\"{{getWidthColumn(6)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"reFresh()\">\n                        </div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n\n            </kendo-grid>\n        </div>\n\n    </div>\n</mat-dialog-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                  \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Xét Nghiệm', Path:''},\n                {Title:'Phiếu xuất hoá chất', Path:'', Active:true}]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"gridView\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid>\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" popupSettings=\"\" bind=\"true\"\n                            url=\"BaoCao/GetTatCaKhoPhieuXuatHoaChat\" [(model)]=\"baoCaoSearch.KhoId\"\n                            [autoSelectFirstItem]=\"true\" (selectionChange)=\"selectionChangeKhoHoaChat($event)\">\n                        </app-combobox>\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Tên máy XN\" popupSettings=\"\" bind=\"true\"\n                            url=\"BaoCao/GetTenMayXetNghiem\" [(model)]=\"baoCaoSearch.MayXetNghiemId\" \n                            [autoSelectFirstItem]=\"true\">\n                        </app-combobox>\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Tên dược phẩm\" popupSettings=\"\" bind=\"true\"\n                            url=\"BaoCao/GetTenDuocPhamTheoPhieuXuat?KhoId={{baoCaoSearch.KhoId}}\"\n                            #duocPhamCombobox [(model)]=\"baoCaoSearch.DuocPhamId\" [autoSelectFirstItem]=\"true\">\n                        </app-combobox>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgay\" id=\"TuNgay\"\n                            [maxDate]=\"baoCaoSearch.DenNgay\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgay\" id=\"DenNgay\"\n                            [minDate]=\"baoCaoSearch.TuNgay\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                        </app-datetimepicker>\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n\n                        </div>\n                    </div>\n                </ng-template>\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    [style]=\"{'text-align': 'center'}\" width=\"{{getWidthColumn(0)}}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    [style]=\"{'text-align': 'center'}\" width=\"{{getWidthColumn(1)}}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                    width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                    width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                    width=\"{{getWidthColumn(4)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                    width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                            (click)=\"XemChiTiet(dataItem)\">Xem chi tiết</button>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"reFresh()\">\n                        </div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n\n            </kendo-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1waGlldS14dWF0LWhvYS1jaGF0LXhldC1uZ2hpZW0vcGhpZXUteHVhdC1ob2EtY2hhdC14ZXQtbmdoaWVtLWNoaS10aWV0LXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby1waGlldS14dWF0LWhvYS1jaGF0LXhldC1uZ2hpZW1cXHBoaWV1LXh1YXQtaG9hLWNoYXQteGV0LW5naGllbS1jaGktdGlldC1wb3B1cFxccGhpZXUteHVhdC1ob2EtY2hhdC14ZXQtbmdoaWVtLWNoaS10aWV0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXBoaWV1LXh1YXQtaG9hLWNoYXQteGV0LW5naGllbS9waGlldS14dWF0LWhvYS1jaGF0LXhldC1uZ2hpZW0tY2hpLXRpZXQtcG9wdXAvcGhpZXUteHVhdC1ob2EtY2hhdC14ZXQtbmdoaWVtLWNoaS10aWV0LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tcGhpZXUteHVhdC1ob2EtY2hhdC14ZXQtbmdoaWVtL3BoaWV1LXh1YXQtaG9hLWNoYXQteGV0LW5naGllbS1jaGktdGlldC1wb3B1cC9waGlldS14dWF0LWhvYS1jaGF0LXhldC1uZ2hpZW0tY2hpLXRpZXQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.ts ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: PhieuXuatHoaChatXetNghiemChiTietPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuXuatHoaChatXetNghiemChiTietPopupComponent", function() { return PhieuXuatHoaChatXetNghiemChiTietPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _phieu_xuat_hoa_chat_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../phieu-xuat-hoa-chat-xet-nghiem.model */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.model.ts");














let PhieuXuatHoaChatXetNghiemChiTietPopupComponent = class PhieuXuatHoaChatXetNghiemChiTietPopupComponent {
    constructor(data, sanitizer, dialog, apiService, authService, notificationService) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.baoCaoSearch = new _phieu_xuat_hoa_chat_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_13__["BaoCaoTonKhoSearch"]();
        this.additionalSearchString = "";
        this.showDefaultPagerTemplate = true;
        this.dataSource = { data: [], total: 0 };
        this.pageSize = 50;
        this.skip = 0;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.heightToolbar = 140;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
    }
    ngOnInit() {
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoXNPhieuXuatHoaChat;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.gridColumns = [
            { Field: "TenDuocPham", Title: "Tên Hóa Chất", Width: 150, Sortable: true },
            { Field: "NgayXuatDisplay", Title: "Ngày xuất", Width: 150, Sortable: true },
            { Field: "SoLo", Title: "Lô", Width: 150, Sortable: true },
            { Field: "HanDungDisplay", Title: "Hạn dùng", Width: 150, Sortable: true },
            { Field: "LuongXuat", Title: "Lượng xuất (lọ/hộp)", Width: 150, Sortable: true },
            { Field: "NguoiXuat", Title: "Người xuất", Width: 150, Sortable: true },
            { Field: "NguoiNhan", Title: "Người nhận", Width: 150, Sortable: true },
        ];
        if (this.data.Model != undefined && this.data.Model != null) {
            this.baoCaoSearch.DenNgay = this.data.Model.DenNgay;
            this.baoCaoSearch.TuNgay = this.data.Model.TuNgay;
            this.baoCaoSearch.KhoId = this.data.Model.KhoId;
            this.baoCaoSearch.DuocPhamId = this.data.Model.DuocPhamId;
            this.baoCaoSearch.MayXetNghiemId = this.data.Model.MayXetNghiemId;
            this.baoCaoSearch.Skip = 0;
            this.baoCaoSearch.Take = (this.pageSize * this.skip) + this.pageSize;
            this.showDataXetNghiem(this.baoCaoSearch);
        }
    }
    showDataXetNghiem(baoCaoSearch) {
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        this.apiService.post("BaoCao/GetDataPhieuXuatHoaChatChiTietForGrid", baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.dataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                this.gridView = this.dataSource;
                this._isLoading = false;
                this._isLoadingTotalPage = false;
            }
        });
    }
    exportExcel() {
        if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (!this.baoCaoSearch.KhoId) {
            this.notificationService.showError("Vui lòng chọn tủ hóa chất");
            return;
        }
        if (this.baoCaoSearch.MayXetNghiemId === undefined || this.baoCaoSearch.MayXetNghiemId === null) {
            this.notificationService.showError("Vui lòng chọn máy xét nghiệm");
            return;
        }
        if (this.baoCaoSearch.DuocPhamId === undefined || this.baoCaoSearch.DuocPhamId === null) {
            this.notificationService.showError("Vui lòng chọn dược phẩm");
            return;
        }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            let loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel("BaoCao/ExportPhieuXuatHoaChat", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "PhieuXuatHoaChat" + dateTimeNow.getFullYear() + ".xlsx");
                loading.close();
            }, err => {
                this.notificationService.showError(err.Message);
                loading.close();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    getFieldColumn(index) {
        return this.gridColumns[index].Field;
    }
    getTitleColumn(index) {
        return this.gridColumns[index].Title;
    }
    getWidthColumn(index) {
        return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
    }
    getMinWidthColumn(minWidth) {
        var widthParent = jQuery("#baoCaoGrid").parent().width();
        var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
        var totalWidth = this.gridColumns.filter((item) => {
            return item.Width != null;
        }).reduce((sum, item) => sum + item.Width, 0);
        if ((widthScreen < totalWidth + minWidth + 100)) {
            return minWidth;
        }
        else {
            return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
        }
    }
    pageChange(event) {
        this.skip = event.skip;
        if (this.dataSource.data.length == 0) {
            this.showDataXetNghiem(this.baoCaoSearch);
        }
        else {
            this.baoCaoSearch.Skip = this.skip;
            this.baoCaoSearch.Take = (this.pageSize * this.skip) + this.pageSize;
            this.showDataXetNghiem(this.baoCaoSearch);
        }
    }
    reFresh() {
        this.skip = 0;
        this.showDataXetNghiem(this.baoCaoSearch);
    }
    close() {
        this.dialog.closeAll();
    }
};
PhieuXuatHoaChatXetNghiemChiTietPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuXuatHoaChatXetNghiemChiTietPopupComponent.prototype, "heightToolbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoGrid', { static: true })
], PhieuXuatHoaChatXetNghiemChiTietPopupComponent.prototype, "baoCaoGrid", void 0);
PhieuXuatHoaChatXetNghiemChiTietPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PhieuXuatHoaChatXetNghiemChiTietPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.scss ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1waGlldS14dWF0LWhvYS1jaGF0LXhldC1uZ2hpZW0vcGhpZXUteHVhdC1ob2EtY2hhdC14ZXQtbmdoaWVtLWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLXBoaWV1LXh1YXQtaG9hLWNoYXQteGV0LW5naGllbVxccGhpZXUteHVhdC1ob2EtY2hhdC14ZXQtbmdoaWVtLWxpc3RcXHBoaWV1LXh1YXQtaG9hLWNoYXQteGV0LW5naGllbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXBoaWV1LXh1YXQtaG9hLWNoYXQteGV0LW5naGllbS9waGlldS14dWF0LWhvYS1jaGF0LXhldC1uZ2hpZW0tbGlzdC9waGlldS14dWF0LWhvYS1jaGF0LXhldC1uZ2hpZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXBoaWV1LXh1YXQtaG9hLWNoYXQteGV0LW5naGllbS9waGlldS14dWF0LWhvYS1jaGF0LXhldC1uZ2hpZW0tbGlzdC9waGlldS14dWF0LWhvYS1jaGF0LXhldC1uZ2hpZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iLCIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: BaoCaoPhieuXuatHoaChatXetNghiemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoPhieuXuatHoaChatXetNghiemListComponent", function() { return BaoCaoPhieuXuatHoaChatXetNghiemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.ts");
/* harmony import */ var _phieu_xuat_hoa_chat_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../phieu-xuat-hoa-chat-xet-nghiem.model */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.model.ts");











let BaoCaoPhieuXuatHoaChatXetNghiemListComponent = class BaoCaoPhieuXuatHoaChatXetNghiemListComponent {
    constructor(apiService, dialog, notificationService, cd) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.cd = cd;
        this.baoCaoSearch = new _phieu_xuat_hoa_chat_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_10__["BaoCaoTonKhoSearch"]();
        this.thongTinChiTietXetNghiem = new _phieu_xuat_hoa_chat_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_10__["ThongTinChiTietXetNghiem"]();
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
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default.a;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.showDefaultPagerTemplate = true;
        this.ishowView = false;
        this.IsData = false;
        this.heightToolbar = 140;
    }
    pageChange(event) {
        this.skip = event.skip;
        if (this.dataSource.data.length == 0) {
            this.XemBaoCao();
        }
        else {
            if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
                this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                return;
            }
            if (!this.baoCaoSearch.KhoId) {
                this.notificationService.showError("Vui lòng chọn tủ hóa chất");
                return;
            }
            if (this.baoCaoSearch.MayXetNghiemId === undefined || this.baoCaoSearch.MayXetNghiemId === null) {
                this.notificationService.showError("Vui lòng chọn máy xét nghiệm");
                return;
            }
            if (this.baoCaoSearch.DuocPhamId === undefined || this.baoCaoSearch.DuocPhamId === null) {
                this.notificationService.showError("Vui lòng chọn dược phẩm");
                return;
            }
            this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgay;
            this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgay;
            this._isLoading = true;
            this._isLoadingTotalPage = true;
            this.loadDanhSachPhieuXuatXetNghiem(this.skip, this.skip + this.pageSize);
        }
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoXNPhieuXuatHoaChat;
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 100, Template: this.sttTemplate },
            { Field: "MaDuocPham", Title: "Mã Hóa Chất", Width: 100 },
            { Field: "TenDuocPham", Title: "Tên Hóa Chất", Width: 200 },
            { Field: "DonViTinh", Title: "Đơn Vị Tính", Width: 100 },
            { Field: "TongSoLuongXuat", Title: "Tổng Số Lượng Xuất", Width: 120 },
            { Field: "", Title: "", Width: 120 }
        ];
        this.dataTimeDefaut();
    }
    dataTimeDefaut() {
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        if (this.baoCaoSearch.TuNgay == null) {
            this.baoCaoSearch.TuNgay = firstDayOfMonth;
        }
        if (this.baoCaoSearch.DenNgay == null) {
            this.baoCaoSearch.DenNgay = new Date();
        }
    }
    getFieldColumn(index) {
        return this.gridColumns[index].Field;
    }
    getTitleColumn(index) {
        return this.gridColumns[index].Title;
    }
    getWidthColumn(index) {
        return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
    }
    getMinWidthColumn(minWidth) {
        var widthParent = jQuery("#baoCaoGrid").parent().width();
        var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
        var totalWidth = this.gridColumns.filter((item) => {
            return item.Width != null;
        }).reduce((sum, item) => sum + item.Width, 0);
        if ((widthScreen < totalWidth + minWidth + 100)) {
            return minWidth;
        }
        else {
            return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
        }
    }
    detailExpand(event) {
        let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgay, "dd/mm/yyyy");
        let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgay, "dd/mm/yyyy");
        this.additionalSearchString = this.baoCaoSearch.KhoId + ";" + event.dataItem.NhomDuocPhamVatTuId + ";" + tuNgay + ";" + denNgay;
    }
    onDataBoundChild(event) {
        console.log(event);
        this.dataToSumThanhTien = event.Data;
    }
    ngAfterContentInit() {
        const self = this;
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
    }
    reFresh() {
        this.skip = 0;
        this.XemBaoCao();
    }
    XemBaoCao() {
        if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (!this.baoCaoSearch.KhoId) {
            this.notificationService.showError("Vui lòng chọn tủ hóa chất");
            return;
        }
        if (this.baoCaoSearch.MayXetNghiemId === undefined || this.baoCaoSearch.MayXetNghiemId === null) {
            this.notificationService.showError("Vui lòng chọn máy xét nghiệm");
            return;
        }
        if (this.baoCaoSearch.DuocPhamId === undefined || this.baoCaoSearch.DuocPhamId === null) {
            this.notificationService.showError("Vui lòng chọn máy xét nghiệm");
            return;
        }
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgay;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgay;
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        this.loadDanhSachPhieuXuatXetNghiem(0, 50);
    }
    changeValueStart() {
        this.minDateDenNgay = new Date();
        if (this.baoCaoSearch.TuNgay != null && this.baoCaoSearch.DenNgay != null
            && this.baoCaoSearch.DenNgay > this.baoCaoSearch.TuNgay) {
            this.baoCaoSearch.DenNgay = this.minDateDenNgay;
        }
    }
    selectionChangeKhoHoaChat(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.baoCaoSearch.KhoId = dataItem.KeyId;
            this.baoCaoSearch.DuocPhamId = null;
        }
        else {
            this.baoCaoSearch.KhoId = null;
            this.baoCaoSearch.DuocPhamId = null;
        }
        this.baoCaoSearch.DuocPhamId = 0;
        this.dataTimeDefaut();
    }
    XemChiTiet(dataItem) {
        let self = this;
        self.thongTinChiTietXetNghiem.MayXetNghiemId = dataItem.MayXetNghiemId;
        self.thongTinChiTietXetNghiem.KhoId = dataItem.KhoId;
        self.thongTinChiTietXetNghiem.TenKho = dataItem.TenKho;
        self.thongTinChiTietXetNghiem.DuocPhamId = dataItem.DuocPhamId;
        self.thongTinChiTietXetNghiem.TenDuocPham = dataItem.TenDuocPham;
        self.thongTinChiTietXetNghiem.TuNgay = this.baoCaoSearch.TuNgay;
        self.thongTinChiTietXetNghiem.DenNgay = this.baoCaoSearch.DenNgay;
        self.dialog.open(_phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_9__["PhieuXuatHoaChatXetNghiemChiTietPopupComponent"], {
            disableClose: true,
            width: '1200px',
            data: { Model: self.thongTinChiTietXetNghiem }
        }).afterClosed().subscribe(() => {
        });
    }
    loadDanhSachPhieuXuatXetNghiem(skip, take) {
        this.baoCaoSearch.Skip = skip;
        this.baoCaoSearch.Take = take;
        this.apiService.post("BaoCao/GetDataPhieuXuatHoaChatForGrid", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.dataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                this.gridView = this.dataSource;
                this._isLoading = false;
                this._isLoadingTotalPage = false;
            }
        });
    }
};
BaoCaoPhieuXuatHoaChatXetNghiemListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], BaoCaoPhieuXuatHoaChatXetNghiemListComponent.prototype, "heightToolbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
], BaoCaoPhieuXuatHoaChatXetNghiemListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('baoCaoGrid', { static: true })
], BaoCaoPhieuXuatHoaChatXetNghiemListComponent.prototype, "baoCaoGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sttTemplate', { static: true })
], BaoCaoPhieuXuatHoaChatXetNghiemListComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], BaoCaoPhieuXuatHoaChatXetNghiemListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
BaoCaoPhieuXuatHoaChatXetNghiemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-phieu-xuat-hoa-chat-xet-nghiem-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-xuat-hoa-chat-xet-nghiem-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-xuat-hoa-chat-xet-nghiem-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.scss")).default]
    })
], BaoCaoPhieuXuatHoaChatXetNghiemListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-routing.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule", function() { return BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _phieu_xuat_hoa_chat_xet_nghiem_list_phieu_xuat_hoa_chat_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.ts");







const routes = [
    {
        path: '',
        component: _phieu_xuat_hoa_chat_xet_nghiem_list_phieu_xuat_hoa_chat_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoPhieuXuatHoaChatXetNghiemListComponent"],
        data: {
            title: 'Phiếu xuất hoá chất',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoXNPhieuXuatHoaChat,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule = class BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule {
};
BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.model.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.model.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: BaoCaoTonKhoSearch, BaoCaoTonKho, ThongTinChiTietXetNghiem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoSearch", function() { return BaoCaoTonKhoSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKho", function() { return BaoCaoTonKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietXetNghiem", function() { return ThongTinChiTietXetNghiem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoTonKhoSearch {
    constructor(FromDate = null, ToDate = null, TuNgay = null, DenNgay = null, KhoId = null, DuocPhamId = null, MayXetNghiemId = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.KhoId = KhoId;
        this.DuocPhamId = DuocPhamId;
        this.MayXetNghiemId = MayXetNghiemId;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class BaoCaoTonKho {
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
class ThongTinChiTietXetNghiem {
    constructor(KhoId = null, DuocPhamId = null, MayXetNghiemId = null, TenDuocPham = null, TenKho = null, TuNgay = null, DenNgay = null) {
        this.KhoId = KhoId;
        this.DuocPhamId = DuocPhamId;
        this.MayXetNghiemId = MayXetNghiemId;
        this.TenDuocPham = TenDuocPham;
        this.TenKho = TenKho;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BaoCaoPhieuXuatTonKhoXetNghiemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoPhieuXuatTonKhoXetNghiemModule", function() { return BaoCaoPhieuXuatTonKhoXetNghiemModule; });
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
/* harmony import */ var _phieu_xuat_hoa_chat_xet_nghiem_list_phieu_xuat_hoa_chat_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component.ts");
/* harmony import */ var _phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component.ts");
/* harmony import */ var _phieu_xuat_hoa_chat_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./phieu-xuat-hoa-chat-xet-nghiem-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem-routing.module.ts");
/* harmony import */ var _phieu_xuat_hoa_chat_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./phieu-xuat-hoa-chat-xet-nghiem.service */ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.service.ts");






















let BaoCaoPhieuXuatTonKhoXetNghiemModule = class BaoCaoPhieuXuatTonKhoXetNghiemModule {
};
BaoCaoPhieuXuatTonKhoXetNghiemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_phieu_xuat_hoa_chat_xet_nghiem_list_phieu_xuat_hoa_chat_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoPhieuXuatHoaChatXetNghiemListComponent"], _phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_19__["PhieuXuatHoaChatXetNghiemChiTietPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _phieu_xuat_hoa_chat_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_20__["BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule"],
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
            _phieu_xuat_hoa_chat_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_21__["BaoCaoPhieuXuatHoaChatXetNghiemService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _phieu_xuat_hoa_chat_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_21__["BaoCaoPhieuXuatHoaChatXetNghiemService"] },
        ],
        entryComponents: [_phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_phieu_xuat_hoa_chat_xet_nghiem_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_19__["PhieuXuatHoaChatXetNghiemChiTietPopupComponent"]]
    })
], BaoCaoPhieuXuatTonKhoXetNghiemModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.service.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: BaoCaoPhieuXuatHoaChatXetNghiemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoPhieuXuatHoaChatXetNghiemService", function() { return BaoCaoPhieuXuatHoaChatXetNghiemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoPhieuXuatHoaChatXetNghiemService = class BaoCaoPhieuXuatHoaChatXetNghiemService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BaoCaoPhieuXuatHoaChatXetNghiemService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoPhieuXuatHoaChatXetNghiemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoPhieuXuatHoaChatXetNghiemService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-phieu-xuat-hoa-chat-xet-nghiem-phieu-xuat-hoa-chat-xet-nghiem-module-es2015.js.map