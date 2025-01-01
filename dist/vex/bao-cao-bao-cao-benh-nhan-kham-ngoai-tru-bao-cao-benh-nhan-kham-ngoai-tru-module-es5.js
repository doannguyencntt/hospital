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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-benh-nhan-kham-ngoai-tru-bao-cao-benh-nhan-kham-ngoai-tru-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component.html": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component.html ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\" typeSize=\"A4\" >\n    </app-print-form>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.html": 
        /*!********************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.html ***!
          \********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''}\n                    ,{Title:'Bác Sĩ', Path:''}\n                    ,{Title:'Người Bệnh Khám Ngoại Trú', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" hierarchyKeyToSend=\"khoa\" class=\"mt-1 on-header\"\n                    popupSettings=\"null\" [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" label=\"Khoa\"\n                    url=\"GiuongBenh/GetListKhoaPhong\" bind=\"true\" [(model)]=\"baoCaoSearch.KhoaId\">\n                </app-combobox>\n                <ng-template #khoaTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"30%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #khoaTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n                <app-combobox id=\"PhongId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" hierarchyKeyToListen=\"khoa\"\n                    [disabled]=\"baoCaoSearch.KhoaId == 0 || baoCaoSearch.KhoaId == null\" class=\"mt-1 on-header\" label=\"Phòng\"\n                    [templateHeader]=\"phongTemplateHeader\" [template]=\"phongTemplate\" url=\"BaoCao/GetTaCaPhongTheoKhoa\"\n                    bind=\"true\" [(model)]=\"baoCaoSearch.PhongId\" popupSettings=\"null\">\n                </app-combobox>\n                <ng-template #phongTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"20%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #phongTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"40%\" fxFlex.sm=\"40%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <!-- <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"InbaoCao()\" style=\"float: right;\" *ngIf=\"showPrintExport\">In Báo cáo</button> -->\n\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                </div>\n                <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" *ngIf=\"ishowView\" [gridColumns]=\"gridColumns\"\n                    [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [groups]=\"groups\"\n                    [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\" [autoHeight]=\"true\"\n                    [gridDataSource]=\"gridView\" [showStt]=\"true\">\n                </app-grid>\n\n                <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                    {{rowIndex + 1}}\n                </ng-template>\n\n                <ng-template #tenPhongKhamGroupTemplate let-value=\"value\">\n                    <strong>{{value}}</strong>\n                </ng-template>\n\n                <ng-template #tongSoGroupFooterTemplate kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                    <span>{{aggregates.PhongKhamId.min}}</span>\n                </ng-template>              \n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<ng-template #thoiGianKhamTemplate let-dataItem>\n    <p kendoTooltip class=\"reverse-ellipsis r\" title=\"{{dataItem.ThoiGianKhamDisplay}}\">{{dataItem.ThoiGianKhamDisplay}}\n    </p>\n</ng-template>\n<ng-template #ngaySinhTemplate let-dataItem>\n    <p kendoTooltip class=\"reverse-ellipsis r\" title=\"{{dataItem.NgaySinhDisplay}}\">{{dataItem.NgaySinhDisplay}}\n    </p>\n</ng-template>\n<ng-template #suDungGoiTemplate let-dataItem>\n    <app-checkbox id=\"coSuDungGoi{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.SuDungGoi\" [disabled]=\"true\">\n    </app-checkbox>\n</ng-template>\n<ng-template #ngoaiGioHanhChinhTemplate let-dataItem>\n    <app-checkbox id=\"ngoaiGioHanhChinh{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.NgoaiGioHanhChinh\" [disabled]=\"true\">\n    </app-checkbox>\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component.scss": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component.scss ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1iZW5oLW5oYW4ta2hhbS1uZ29haS10cnUvYmFvLWNhby1iZW5oLW5oYW4ta2hhbS1uZ29haS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tYmVuaC1uaGFuLWtoYW0tbmdvYWktdHJ1XFxiYW8tY2FvLWJlbmgtbmhhbi1raGFtLW5nb2FpLXBvcHVwXFxiYW8tY2FvLWJlbmgtbmhhbi1raGFtLW5nb2FpLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWJlbmgtbmhhbi1raGFtLW5nb2FpLXRydS9iYW8tY2FvLWJlbmgtbmhhbi1raGFtLW5nb2FpLXBvcHVwL2Jhby1jYW8tYmVuaC1uaGFuLWtoYW0tbmdvYWktcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1iZW5oLW5oYW4ta2hhbS1uZ29haS10cnUvYmFvLWNhby1iZW5oLW5oYW4ta2hhbS1uZ29haS1wb3B1cC9iYW8tY2FvLWJlbmgtbmhhbi1raGFtLW5nb2FpLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component.ts": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component.ts ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: BaoCaoBenhNhanKhamNgoaiPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiPopupComponent", function () { return BaoCaoBenhNhanKhamNgoaiPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var BaoCaoBenhNhanKhamNgoaiPopupComponent = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiPopupComponent(data, sanitizer, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.src = '';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
                }
                BaoCaoBenhNhanKhamNgoaiPopupComponent.prototype.ngOnInit = function () {
                    this.modelPrint = this.data.Model;
                };
                BaoCaoBenhNhanKhamNgoaiPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        resolve(_this.modelPrint);
                    });
                };
                BaoCaoBenhNhanKhamNgoaiPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return BaoCaoBenhNhanKhamNgoaiPopupComponent;
            }());
            BaoCaoBenhNhanKhamNgoaiPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            BaoCaoBenhNhanKhamNgoaiPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-benh-nhan-kham-ngoai-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-benh-nhan-kham-ngoai-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-benh-nhan-kham-ngoai-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], BaoCaoBenhNhanKhamNgoaiPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.scss": 
        /*!******************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.scss ***!
          \******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tYmVuaC1uaGFuLWtoYW0tbmdvYWktdHJ1L2Jhby1jYW8tYmVuaC1uaGFuLWtoYW0tbmdvYWktdHJ1LWxpc3QvYmFvLWNhby1iZW5oLW5oYW4ta2hhbS1uZ29haS10cnUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.ts": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.ts ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoBenhNhanKhamNgoaiTruListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTruListComponent", function () { return BaoCaoBenhNhanKhamNgoaiTruListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _bao_cao_benh_nhan_kham_ngoai_tru_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-benh-nhan-kham-ngoai-tru.model */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var BaoCaoBenhNhanKhamNgoaiTruListComponent = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiTruListComponent(route, router, apiService, dialog, notificationService, authService) {
                    this.route = route;
                    this.router = router;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.gridColumns = [];
                    this.baoCaoSearch = new _bao_cao_benh_nhan_kham_ngoai_tru_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoBenhNhanKhamNgoaiTruSearch"]();
                    this.inBaoCaoBenhNhanKhamNgoaiTru = new _bao_cao_benh_nhan_kham_ngoai_tru_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoBenhNhanKhamNgoaiTru"]();
                    this.gridView = {
                        data: [],
                        total: 0,
                    };
                    this.groups = [{
                            field: 'PhongKham', dir: null, aggregates: [
                            // { field: 'PhongKhamId', aggregate: 'min' }
                            ]
                        }];
                    this.ishowView = false;
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                }
                BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].BaoCaoLuuTruHoSoBenhAn;
                    this.gridColumns = [
                        { Field: "ThoiGianKham", Title: "Thời gian khám", Width: 120, Template: this.thoiGianKhamTemplate },
                        { Field: "CongTyKhamSucKhoe", Title: "Đoàn KSK", Width: 100 },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100 },
                        { Field: "HoTen", Title: "Họ tên NB", Width: 160 },
                        { Field: "NgaySinh", Title: "Ngày sinh", Width: 100, Template: this.ngaySinhTemplate },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 60 },
                        { Field: "TheBHYT", Title: "Thẻ BHYT", Width: 100 },
                        { Field: "PhieuKham", Title: "Phiếu khám", Width: 120 },
                        { Field: "PhongKham", Title: "Phòng khám", Width: 100, TemplateGroupHeader: this.tenPhongKhamGroupTemplate, TemplateGroupFooter: this.phongKhamGroupFooterTemplate },
                        { Field: "ICD", Title: "ICD", MinWidth: 100 },
                        { Field: "TrangThai", Title: "Trạng thái", Width: 100 },
                        { Field: "BacSiKham", Title: "BS Khám", Width: 120 },
                        { Field: "BacSiKetLuan", Title: "BS kết luận", Width: 120 },
                        { Field: "CachGiaiQuyet", Title: "Cách giải quyết", Width: 100 },
                        { Field: "KhoaNhapVien", Title: "Khoa nhập viện", Width: 100 },
                        { Field: "SuDungGoi", Title: "NB gói", Width: 80, Template: this.suDungGoiTemplate },
                        { Field: "NgoaiGioHanhChinh", Title: "Ngoài giờ hành chính", Width: 100, Template: this.ngoaiGioHanhChinhTemplate }
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                        this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
                    }
                };
                BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.baoCaoSearch.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.baoCaoSearch.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
                    }
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                    var khoaId = 0;
                    if (this.baoCaoSearch.KhoaId != undefined && this.baoCaoSearch.KhoaId != null) {
                        khoaId = this.baoCaoSearch.KhoaId;
                    }
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.baoCaoSearch.AdditionalSearchString = khoaId.toString() + ";" + tuNgay + ";" + denNgay;
                    this.showPopupLoadingData();
                    this.ishowView = false;
                    this.apiService.post("BaoCao/GetBaoCaoBenhNhanKhamNgoaiTruForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            //this.gridView = process(resultData.Data, { group: this.groups });
                            if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                                _this.ishowView = true;
                            }
                            else {
                                _this.ishowView = false;
                            }
                            var self = _this;
                            setTimeout(function () {
                                self.gridView = {
                                    data: resultData.Data,
                                    total: resultData.TotalRowCount
                                };
                            }, 50);
                        }
                        var self = _this;
                        setTimeout(function () {
                            self.closePopupLoadingData();
                        }, 50);
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                        var khoaId = 0;
                        if (this.baoCaoSearch.KhoaId != undefined && this.baoCaoSearch.KhoaId != null) {
                            khoaId = this.baoCaoSearch.KhoaId;
                        }
                        var phongId = 0;
                        if (this.baoCaoSearch.PhongId != undefined && this.baoCaoSearch.PhongId != null) {
                            phongId = this.baoCaoSearch.KhoaId;
                        }
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.baoCaoSearch.AdditionalSearchString = khoaId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoBenhNhanKhamNgoaiTru.HostingName;
                        this.showPopupLoadingData();
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoBenhNhanKhamNgoaiTru", this.baoCaoSearch)
                            .subscribe(function (res) {
                            _this.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBenhNhanKhamNgoaiTru" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                            _this.closePopupLoadingData();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                // InbaoCao() {
                //   if (this.showPrintExport == true) {
                //     let baoCaoBenhNhanKhamNgoaiTruAnVo = new BaoCaoBenhNhanKhamNgoaiTruAnVo();
                //     baoCaoBenhNhanKhamNgoaiTruAnVo.PhongId = this.search.PhongId;
                //     baoCaoBenhNhanKhamNgoaiTruAnVo.KhoaId = this.search.KhoaId;
                //     baoCaoBenhNhanKhamNgoaiTruAnVo.DenNgay = this.search.DateEnd;
                //     baoCaoBenhNhanKhamNgoaiTruAnVo.TuNgay = this.search.DateStart;
                //     baoCaoBenhNhanKhamNgoaiTruAnVo.hosting = window.location.protocol + "//" + window.location.host;
                //     this.apiService.post<any>("BaoCao/InBaoCaoBenhNhanKhamNgoaiTru", baoCaoBenhNhanKhamNgoaiTruAnVo).subscribe(
                //       (result) => {
                //         this.dialog.open(BaoCaoBsDsKhamNgoaiTruPopupComponent, {
                //           disableClose: true,
                //           width: '1000px',
                //           data: { Model: result }
                //         }).afterClosed().subscribe(() => {
                //         });
                //       },
                //       (err: ApiError) => {
                //         this.validationErrors = err.ValidationErrors;
                //         if (err.Message != "Validation Failed") {
                //           this.notificationService.showError(err.Message);
                //         }
                //       });
                //   }
                // }
                BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype.showPopupLoadingData = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                };
                BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return BaoCaoBenhNhanKhamNgoaiTruListComponent;
            }());
            BaoCaoBenhNhanKhamNgoaiTruListComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenPhongKhamGroupTemplate', { static: true })
            ], BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype, "tenPhongKhamGroupTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phongKhamGroupFooterTemplate', { static: true })
            ], BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype, "phongKhamGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianKhamTemplate', { static: true })
            ], BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype, "thoiGianKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngaySinhTemplate', { static: true })
            ], BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype, "ngaySinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('suDungGoiTemplate', { static: true })
            ], BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype, "suDungGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngoaiGioHanhChinhTemplate', { static: true })
            ], BaoCaoBenhNhanKhamNgoaiTruListComponent.prototype, "ngoaiGioHanhChinhTemplate", void 0);
            BaoCaoBenhNhanKhamNgoaiTruListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-benh-nhan-kham-ngoai-tru-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-benh-nhan-kham-ngoai-tru-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-benh-nhan-kham-ngoai-tru-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.scss")).default]
                })
            ], BaoCaoBenhNhanKhamNgoaiTruListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-routing.module.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-routing.module.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: BaoCaoBenhNhanKhamNgoaiTruRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTruRoutingModule", function () { return BaoCaoBenhNhanKhamNgoaiTruRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _bao_cao_benh_nhan_kham_ngoai_tru_list_bao_cao_benh_nhan_kham_ngoai_tru_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_benh_nhan_kham_ngoai_tru_list_bao_cao_benh_nhan_kham_ngoai_tru_list_component__WEBPACK_IMPORTED_MODULE_2__["BaoCaoBenhNhanKhamNgoaiTruListComponent"],
                    data: {
                        title: 'Báo cáo người bệnh khám ngoại trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].BaoCaoBenhNhanKhamNgoaiTru,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoBenhNhanKhamNgoaiTruRoutingModule = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiTruRoutingModule() {
                }
                return BaoCaoBenhNhanKhamNgoaiTruRoutingModule;
            }());
            BaoCaoBenhNhanKhamNgoaiTruRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
                })
            ], BaoCaoBenhNhanKhamNgoaiTruRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.model.ts": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.model.ts ***!
          \*****************************************************************************************************************/
        /*! exports provided: BaoCaoBenhNhanKhamNgoaiTruSearch, BaoCaoBenhNhanKhamNgoaiTru, InBaoCaoBenhNhanKhamNgoaiTru */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTruSearch", function () { return BaoCaoBenhNhanKhamNgoaiTruSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTru", function () { return BaoCaoBenhNhanKhamNgoaiTru; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoBenhNhanKhamNgoaiTru", function () { return InBaoCaoBenhNhanKhamNgoaiTru; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoBenhNhanKhamNgoaiTruSearch = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiTruSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoaId, PhongId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (PhongId === void 0) { PhongId = null; }
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
                    this.KhoaId = KhoaId;
                    this.PhongId = PhongId;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoBenhNhanKhamNgoaiTruSearch;
            }());
            var BaoCaoBenhNhanKhamNgoaiTru = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiTru(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
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
                return BaoCaoBenhNhanKhamNgoaiTru;
            }());
            var InBaoCaoBenhNhanKhamNgoaiTru = /** @class */ (function () {
                function InBaoCaoBenhNhanKhamNgoaiTru(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoBenhNhanKhamNgoaiTru;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.module.ts": 
        /*!******************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.module.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: BaoCaoBenhNhanKhamNgoaiTruModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTruModule", function () { return BaoCaoBenhNhanKhamNgoaiTruModule; });
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
            /* harmony import */ var _bao_cao_benh_nhan_kham_ngoai_tru_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-benh-nhan-kham-ngoai-tru-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-routing.module.ts");
            /* harmony import */ var _bao_cao_benh_nhan_kham_ngoai_tru_list_bao_cao_benh_nhan_kham_ngoai_tru_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component.ts");
            /* harmony import */ var _bao_cao_benh_nhan_kham_ngoai_tru_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-benh-nhan-kham-ngoai-tru.service */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.service.ts");
            /* harmony import */ var _bao_cao_benh_nhan_kham_ngoai_popup_bao_cao_benh_nhan_kham_ngoai_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component.ts");
            var BaoCaoBenhNhanKhamNgoaiTruModule = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiTruModule() {
                }
                return BaoCaoBenhNhanKhamNgoaiTruModule;
            }());
            BaoCaoBenhNhanKhamNgoaiTruModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _bao_cao_benh_nhan_kham_ngoai_tru_list_bao_cao_benh_nhan_kham_ngoai_tru_list_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoBenhNhanKhamNgoaiTruListComponent"],
                        _bao_cao_benh_nhan_kham_ngoai_popup_bao_cao_benh_nhan_kham_ngoai_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoBenhNhanKhamNgoaiPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
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
                        _bao_cao_benh_nhan_kham_ngoai_tru_routing_module__WEBPACK_IMPORTED_MODULE_18__["BaoCaoBenhNhanKhamNgoaiTruRoutingModule"]
                    ],
                    providers: [
                        _bao_cao_benh_nhan_kham_ngoai_tru_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoBenhNhanKhamNgoaiTruService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_benh_nhan_kham_ngoai_tru_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoBenhNhanKhamNgoaiTruService"] },
                    ],
                    entryComponents: [
                        _bao_cao_benh_nhan_kham_ngoai_popup_bao_cao_benh_nhan_kham_ngoai_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoBenhNhanKhamNgoaiPopupComponent"]
                    ]
                })
            ], BaoCaoBenhNhanKhamNgoaiTruModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.service.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.service.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: BaoCaoBenhNhanKhamNgoaiTruService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTruService", function () { return BaoCaoBenhNhanKhamNgoaiTruService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoBenhNhanKhamNgoaiTruService = /** @class */ (function (_super) {
                __extends(BaoCaoBenhNhanKhamNgoaiTruService, _super);
                function BaoCaoBenhNhanKhamNgoaiTruService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoBenhNhanKhamNgoaiTruService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoBenhNhanKhamNgoaiTruService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoBenhNhanKhamNgoaiTruService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoBenhNhanKhamNgoaiTruService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-benh-nhan-kham-ngoai-tru-bao-cao-benh-nhan-kham-ngoai-tru-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-benh-nhan-kham-ngoai-tru-bao-cao-benh-nhan-kham-ngoai-tru-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-benh-nhan-kham-ngoai-tru-bao-cao-benh-nhan-kham-ngoai-tru-module-es5.js.map