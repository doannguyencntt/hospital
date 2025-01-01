(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dieu-tri-noi-tru-benh-an-dien-tu-benh-an-dien-tu-module"], {
        /***/ "./node_modules/@iconify/icons-ic/round-arrow-back-ios.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/round-arrow-back-ios.js ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/round-arrow-forward-ios.js": 
        /*!*******************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/round-arrow-forward-ios.js ***!
          \*******************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/zoom-in.js": 
        /*!***************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/zoom-in.js ***!
          \***************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\" fill=\"currentColor\"/><path d=\"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/zoom-out.js": 
        /*!****************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/zoom-out.js ***!
          \****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.html": 
        /*!********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.html ***!
          \********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"m-0\">\n    <div>TÌM KIẾM BỆNH ÁN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <app-grid #gridTimKiem [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" height=\"511\"\n        [allowSortDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [urlGetData]=\"urlGetDataGrid\" [showStt]=\"true\"\n        [urlGetTotalPage]=\"urlGetTotalPageGrid\" [additionalSearchString]=\"strAdditionalSearchString\">\n    </app-grid>\n</mat-dialog-content>\n\n<ng-template #actionTemplate let-dataItem>\n    <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"chonBenhAn(dataItem)\">\n        Chọn\n    </button>\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div style=\"border-bottom: 1px solid #ccc;\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap.lt-sm=\"0\">\n            <div  class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\" kendoTooltip>\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                        placeholder=\"Họ tên, Mã NB, Mã TN\" />\n                    <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n                        class=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\"\n                        title=\"Phím tắt: Ctrl + Q\">\n                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                    </button>\n                </div>\n\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"on-header ml-2\"\n                    [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayNhapVien\" label=\"Nhập viện\" (keyup)=\"onKey($event)\">\n                </app-daterangepicker>\n                \n                <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"on-header ml-2\"\n                    [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayXuatVien\" label=\"Xuất viện\" (keyup)=\"onKey($event)\">\n                </app-daterangepicker>\n                <button type=\"button\" color=\"primary\" (click)=\"timKiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button>\n                <div fxFlex=\"auto\"></div>\n            </div>\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.html": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.html ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <!-- class=\"pb-16\" -->\n\t<vex-page-layout-header  fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\t\t<!-- <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n\t\t\t<vex-breadcrumbs [crumbs]=\"[\n\t\t\t    {Title:'Bệnh Án Điện Tử',Path:''}]\">\n            </vex-breadcrumbs>\n\t\t</div> -->\n\t</vex-page-layout-header>\n\n\t<vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\t\t<div @fadeInUp class=\"-mt-16\">\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div class=\"card\" fxFlex=\"100%\">\n\t\t\t\t\t<div fxLayout=\"column\" style=\"position: relative;\">\n                        <!-- <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\" kendoTooltip>\n                                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                                    type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                                    (ngModelChange)=\"searchChanges($event)\" placeholder=\"Họ tên, Mã NB, Mã TN\" />\n                                <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n                                    class=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\" title=\"Phím tắt: Ctrl + Q\">\n                                    <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                </button>\n                            </div>\n                            \n                            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                            </button>\n                            \n                            <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"on-header ml-2\"\n                                [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayNhapVien\" label=\"Nhập viện\" (keyup)=\"onKey($event)\">\n                            </app-daterangepicker>\n\n                            <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"on-header ml-2\"\n                                [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayXuatVien\" label=\"Xuất viện\" (keyup)=\"onKey($event)\">\n                            </app-daterangepicker>\n                            <button type=\"button\" color=\"primary\" (click)=\"timKiemNangCao()\" class=\"ml-2\" mat-raised-button>Tìm</button>\n\n                            <ng-container *ngIf=\"benhAnDienTu != undefined && benhAnDienTu.GayBenhAns.length > 0\">\n                            <button *ngIf=\"benhAnDienTu != undefined && benhAnDienTu.GayBenhAns.length > 0\" type=\"button\" color=\"primary\"\n                                (click)=\"getThongTinTheoGayBenhAn(null, -1, false, false, true)\" class=\"ml-2\" mat-raised-button>In</button>\n                            \n                            <button (click)=\"inBangkeChiPhi()\" color=\"primary\" mat-raised-button style=\"margin-left: auto;\"> Xem\n                                bảng kê chi phí</button>\n                            </ng-container>\n                        </div> -->\n\n                        <kendo-splitter class=\"mt-2\">\n                            <kendo-splitter-pane [collapsible]=\"true\" size=\"25%\" class=\"format-height\" style=\"overflow-y: auto; min-height: 850px;\">\n                                <div class=\"pane-content\">\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n                                    <div  fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                                        <div class=\"rounded-full border\" fxLayout=\"row\"\n                                            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;background: #ebeced;width:100%;\" kendoTooltip>\n                                            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                                name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                                                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Họ tên, Mã NB, Mã TN\" />\n                                            <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" style=\"right:0\" class=\"button-barcoe-in-search\"\n                                                kendoTooltip title=\"Quét mã vạch thẻ\" title=\"Phím tắt: Ctrl + Q\">\n                                                <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                            </button>\n                                        </div>\n                                    \n                                        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                                        </button>\n                                    </div>\n                                       \n                                    \n                                        <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"50%\" fxFlex.sm=\"100%\" \n                                            [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayNhapVien\" label=\"Nhập viện\" (keyup)=\"onKey($event)\">\n                                        </app-daterangepicker>\n                                    \n                                        <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"50%\" fxFlex.sm=\"100%\" \n                                            [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayXuatVien\" label=\"Xuất viện\" (keyup)=\"onKey($event)\">\n                                        </app-daterangepicker>\n                                        <div  fxFlex=\"80%\" fxFlex.sm=\"100%\">\n                                            <ng-container *ngIf=\"benhAnDienTu != undefined && benhAnDienTu.GayBenhAns.length > 0\">\n                                                <button *ngIf=\"benhAnDienTu != undefined && benhAnDienTu.GayBenhAns.length > 0\" type=\"button\" color=\"primary\"\n                                                    (click)=\"getThongTinTheoGayBenhAn(null, -1, false, false, true)\" class=\"mt-2\" mat-raised-button>In</button>\n                                        \n                                                <button (click)=\"inBangkeChiPhi()\" color=\"primary\" mat-raised-button class=\"mt-2 ml-2\"> Xem bảng kê chi\n                                                    phí</button>\n                                            </ng-container>\n                                        </div>\n                                        <div  fxFlex=\"20%\" fxFlex.sm=\"100%\">\n                                            <button type=\"button\" color=\"primary\" (click)=\"timKiemNangCao()\" class=\"mt-2\" style=\"float: right;\" mat-raised-button>Tìm</button>\n                                        </div>\n                                    \n                                        \n                                </div>\n                            </div>\n\n                                <ng-container *ngIf=\"benhAnDienTu != undefined\">\n                                    <p *ngIf=\"benhAnDienTu.GayBenhAns.length == 0\">\n                                        Không có lịch sử khám chữa bệnh\n                                    </p>\n                                    <div *ngIf=\"benhAnDienTu.GayBenhAns.length > 0\">\n                                        <table fxFlex=\"100%\" class=\"table table-striped\">\n                                            <thead>\n                                                <tr>\n                                                    <th>DS GÁY BỆNH ÁN</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <ng-container *ngFor=\"let gayBenhAn of benhAnDienTu.GayBenhAns, let i = index\">\n                                                    <tr class=\"gay-label {{indexGayBenhAnHienTai == i ? 'selected': ''}}\">\n                                                        <td>\n                                                            <a (click)=\"chonGayBenhAn(gayBenhAn, i)\">{{gayBenhAn.TenGayHoSo}}</a>\n                                                        </td>\n                                                    </tr>\n                                                </ng-container>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </ng-container>\n                            \n                            </kendo-splitter-pane>\n                            <kendo-splitter-pane style=\"overflow:initial;\">\n                                <!-- <div class=\"container-iframe\" *ngIf=\"fileUrl != null\">\n                                    <iframe id=\"fileLichSuKham\" frameborder=\"0\" [src]=\"fileUrl | safe\"\n                                        type=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\" style=\"display:none\"\n                                        onload=\"this.style.display = 'block';\">\n                                    </iframe>\n                                </div> -->\n                                <div *ngIf=\"benhAnDienTu != undefined\" fxLayout=\"row\" fxLayout.lt-md=\"column\" id=\"test\" class=\"format-height\" style=\"max-height: 860px;\">\n                                    <div fxFlex=\"10%\" class=\"btn-arrow\">\n                                        <a *ngIf=\"(showBtnPrevHtml || indexHtmlGayBenhAnHienTai > 0) && !isLoadingDataNext && !isLoadingDataPrev\" class=\"ic-arrow\" (click)=\"chuyenPhieu(false)\">\n                                            <ic-icon [icon]=\"icArrowBack\" inline=\"true\" size=\"40px\"></ic-icon>\n                                        </a>\n                                    </div>\n                                    <div fxFlex=\"80%\" style=\"background: #ebebee;overflow: hidden;\">\n                                        <div style=\"width: 100%;display: block;text-align: center;padding: 5px 0;\">\n                                            <iframe id=\"myiframe\" class=\"target\" width=\"100%\" style=\"min-height: 850px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n                                                background=\"transparent\"></iframe>\n                                        </div>\n                                    </div>\n                                    <div fxFlex=\"10%\" class=\"btn-arrow\">\n                                        <div>\n                                            <button *ngIf=\"src != undefined && src != null && src != ''\" (click)=\"zoomOut()\" [disabled]=\"zoom <= 0.1\" mat-menu-item>\n                                                <ic-icon [icon]=\"icZoomOut\" inline=\"true\" size=\"40px\"></ic-icon>\n                                            </button>\n                                        </div>\n                                        <div>\n                                            <button *ngIf=\"src != undefined && src != null && src != ''\" (click)=\"zoomIn()\" [disabled]=\"zoom >= 1\" mat-menu-item>\n                                                <ic-icon [icon]=\"icZoomIn\" inline=\"true\" size=\"40px\"></ic-icon>\n                                            </button>\n                                        </div>\n                                        <div>\n                                            <button *ngIf=\"src != undefined && src != null && src != ''\" (click)=\"InGayBenhAn()\" mat-menu-item>\n                                                <ic-icon [icon]=\"icPrint\" inline=\"true\" size=\"40px\"></ic-icon>\n                                            </button>\n                                        </div>\n                                        <a *ngIf=\"(showBtnNextHtml || (indexHtmlGayBenhAnHienTai < htmlGayBenhAnHienTai.length - 1)) && !isLoadingDataNext && !isLoadingDataPrev\" class=\"ic-arrow\" (click)=\"chuyenPhieu()\">\n                                            <ic-icon [icon]=\"icArrowForward\" inline=\"true\" size=\"40px\"></ic-icon>\n                                        </a>\n                                    </div>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.scss": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.scss ***!
          \******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L2JlbmgtYW4tZGllbi10dS9iZW5oLWFuLWRpZW4tdHUtYmVuaC1hbi1wb3B1cC9iZW5oLWFuLWRpZW4tdHUtYmVuaC1hbi1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.ts": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.ts ***!
          \****************************************************************************************************************************************/
        /*! exports provided: BenhAnDienTuBenhAnPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhAnDienTuBenhAnPopupComponent", function () { return BenhAnDienTuBenhAnPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _benh_an_dien_tu_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../benh-an-dien-tu.model */ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu.model.ts");
            var BenhAnDienTuBenhAnPopupComponent = /** @class */ (function () {
                function BenhAnDienTuBenhAnPopupComponent(data, dialogRef, notificationService) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.gridColumns = [];
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].BenhAnDienTu;
                    this.timKiemNangCaoObj = new _benh_an_dien_tu_model__WEBPACK_IMPORTED_MODULE_11__["BenhAnDienTuTimKiemNangCao"]();
                    this.isScanF1 = false;
                    this.strAdditionalSearchString = "";
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.sort = [
                        {
                            field: "Id",
                            dir: "asc",
                        },
                    ];
                    this.urlGetDataGrid = "BenhAnDienTu/GetDataForGridTimKiemNoiTruBenhAn";
                    this.urlGetTotalPageGrid = "BenhAnDienTu/GetTotalPageForGridTimKiemNoiTruBenhAn";
                }
                BenhAnDienTuBenhAnPopupComponent.prototype.ngOnInit = function () {
                    var hasLocalSearchString = false;
                    var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].getItem("additionalSearchStringBenhAnDienTu");
                    if (additionalSearchString != null) {
                        this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                        if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay != '') {
                            this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate);
                        }
                        if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay != '') {
                            this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate);
                        }
                        if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay != '') {
                            this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate);
                        }
                        if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay != '') {
                            this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate);
                        }
                        this.gridTimKiem.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                        hasLocalSearchString = true;
                    }
                    if (!hasLocalSearchString) {
                        var now = new Date();
                        var currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate = this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate = currentDate;
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate, "mm/dd/yyyy");
                        this.gridTimKiem.additionalSearchString = this.strAdditionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
                    }
                    this.gridColumns = [
                        { Field: "SoBenhAn", Title: "Số BA", Width: 90, Sortable: true },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 90, Sortable: true },
                        { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
                        { Field: "BHYTMaSoThe", Title: "Mã thẻ BHYT", Width: 100, Sortable: true },
                        { Field: "HoTen", Title: "Họ và tên", Width: 150, Sortable: true },
                        { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 120, Sortable: false },
                        { Field: "GioiTinhDisplay", Title: "GT", Width: 60, Sortable: false },
                        { Field: "SoChungMinhThu", Title: "CMND", Width: 100, Sortable: false },
                        { Field: "SoDienThoaiDisplay", Title: "Điện thoại", Width: 120, Sortable: false },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 180, Sortable: false },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
                    ];
                };
                BenhAnDienTuBenhAnPopupComponent.prototype.close = function (answer) {
                    if (answer === void 0) { answer = null; }
                    this.dialogRef.close(answer);
                };
                BenhAnDienTuBenhAnPopupComponent.prototype.chonBenhAn = function (dataItem) {
                    this.close(dataItem.Id);
                };
                BenhAnDienTuBenhAnPopupComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        self.timeoutSearchChange = setTimeout(function () {
                            self.modelQRCode = event;
                            self.changeQR(self.modelQRCode);
                        }, 10);
                    }
                    else if ((event == null || event == "") && this.strAdditionalSearchString != "") {
                        this.modelQRCode = null;
                        this.timKiemNangCao();
                    }
                };
                BenhAnDienTuBenhAnPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                BenhAnDienTuBenhAnPopupComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    this.timKiemNangCao();
                };
                BenhAnDienTuBenhAnPopupComponent.prototype.timKiemNangCao = function () {
                    if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    this.gridTimKiem._additionalSearchString = this.strAdditionalSearchString = queryString;
                    this.gridTimKiem.search();
                };
                BenhAnDienTuBenhAnPopupComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                BenhAnDienTuBenhAnPopupComponent.prototype.changeQR = function (event) {
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        var dataTimKiem = event.split("|");
                        if (dataTimKiem.length > 1) {
                            this.timKiemNangCaoObj.SearchString = dataTimKiem[0];
                        }
                        else {
                            this.timKiemNangCaoObj.SearchString = event.slice(0, -1);
                        }
                        this.timKiemNangCao();
                    }
                    else {
                        this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
                    }
                    this.isScanF1 = false;
                };
                return BenhAnDienTuBenhAnPopupComponent;
            }());
            BenhAnDienTuBenhAnPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], { static: true })
            ], BenhAnDienTuBenhAnPopupComponent.prototype, "gridTimKiem", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], BenhAnDienTuBenhAnPopupComponent.prototype, "actionTemplate", void 0);
            BenhAnDienTuBenhAnPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-benh-an-dien-tu-benh-an-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./benh-an-dien-tu-benh-an-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./benh-an-dien-tu-benh-an-popup.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], BenhAnDienTuBenhAnPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.scss": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.scss ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-arrow {\n  background-color: #ebebee;\n  position: relative;\n}\n\n.btn-arrow .ic-arrow {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.gay-label {\n  transition: background-color 2s ease-out 100ms;\n}\n\n.gay-label.selected {\n  background-color: #b8b8b8;\n}\n\n.gay-label :hover {\n  background-color: #eaeaed;\n}\n\n.target {\n  background: #fff;\n  border: 1px ridge #c1c1c1;\n  overflow-y: auto;\n  transform-origin: 0 0;\n  margin: 5px 0;\n  resize: both;\n}\n\n.pane-content {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvYmVuaC1hbi1kaWVuLXR1L2JlbmgtYW4tZGllbi10dS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcZGlldS10cmktbm9pLXRydVxcYmVuaC1hbi1kaWVuLXR1XFxiZW5oLWFuLWRpZW4tdHUtbGlzdFxcYmVuaC1hbi1kaWVuLXR1LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L2JlbmgtYW4tZGllbi10dS9iZW5oLWFuLWRpZW4tdHUtbGlzdC9iZW5oLWFuLWRpZW4tdHUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhDQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUtBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L2JlbmgtYW4tZGllbi10dS9iZW5oLWFuLWRpZW4tdHUtbGlzdC9iZW5oLWFuLWRpZW4tdHUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYXJyb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmVlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG4tYXJyb3cgLmljLWFycm93IHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZ2F5LWxhYmVsIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycyBlYXNlLW91dCAxMDBtcztcbn1cblxuLmdheS1sYWJlbC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGI4Yjg7XG59XG5cbi5nYXktbGFiZWwgOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlZDtcbn1cblxuLnRhcmdldCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHJpZGdlICNjMWMxYzE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHJlc2l6ZTogYm90aDtcbn1cblxuLnBhbmUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59IiwiLmJ0bi1hcnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0bi1hcnJvdyAuaWMtYXJyb3cge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5nYXktbGFiZWwge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2Utb3V0IDEwMG1zO1xufVxuXG4uZ2F5LWxhYmVsLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YjhiODtcbn1cblxuLmdheS1sYWJlbCA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVkO1xufVxuXG4udGFyZ2V0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggcmlkZ2UgI2MxYzFjMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgcmVzaXplOiBib3RoO1xufVxuXG4ucGFuZS1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: BenhAnDienTuListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhAnDienTuListComponent", function () { return BenhAnDienTuListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_round_arrow_back_ios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/round-arrow-back-ios */ "./node_modules/@iconify/icons-ic/round-arrow-back-ios.js");
            /* harmony import */ var _iconify_icons_ic_round_arrow_back_ios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_round_arrow_back_ios__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_round_arrow_forward_ios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/round-arrow-forward-ios */ "./node_modules/@iconify/icons-ic/round-arrow-forward-ios.js");
            /* harmony import */ var _iconify_icons_ic_round_arrow_forward_ios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_round_arrow_forward_ios__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_zoom_in__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/zoom-in */ "./node_modules/@iconify/icons-ic/zoom-in.js");
            /* harmony import */ var _iconify_icons_ic_zoom_in__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_zoom_in__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_zoom_out__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/zoom-out */ "./node_modules/@iconify/icons-ic/zoom-out.js");
            /* harmony import */ var _iconify_icons_ic_zoom_out__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_zoom_out__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _benh_an_dien_tu_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../benh-an-dien-tu.model */ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu.model.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/kham-benh.enum */ "./src/app/shared/enum/kham-benh.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _benh_an_dien_tu_benh_an_popup_benh_an_dien_tu_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _danh_sach_dieu_tri_noi_tru_bang_ke_in_theo_yeu_cau_popup_bang_ke_in_theo_yeu_cau_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../danh-sach-dieu-tri-noi-tru/bang-ke-in-theo-yeu-cau-popup/bang-ke-in-theo-yeu-cau-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/bang-ke-in-theo-yeu-cau-popup/bang-ke-in-theo-yeu-cau-popup.component.ts");
            /* harmony import */ var _danh_sach_dieu_tri_noi_tru_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../danh-sach-dieu-tri-noi-tru/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts");
            var BenhAnDienTuListComponent = /** @class */ (function () {
                function BenhAnDienTuListComponent(authService, notificationService, router, route, location, dialog, apiService, renderer) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.renderer = renderer;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icArrowBack = _iconify_icons_ic_round_arrow_back_ios__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icArrowForward = _iconify_icons_ic_round_arrow_forward_ios__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icZoomIn = _iconify_icons_ic_zoom_in__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icZoomOut = _iconify_icons_ic_zoom_out__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].BenhAnDienTu;
                    this.gridColumns = [];
                    this.isScanF1 = false;
                    this.strAdditionalSearchString = "";
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.baseRoute = "/benh-an-dien-tu";
                    this.timKiemNangCaoObj = new _benh_an_dien_tu_model__WEBPACK_IMPORTED_MODULE_15__["BenhAnDienTuTimKiemNangCao"]();
                    this.noiTruBenhAnId = null;
                    this.benhAnDienTu = null;
                    this.filePdf = null;
                    this.fileUrl = null;
                    this.hosting = "";
                    this.indexGayBenhAnHienTai = 0;
                    this.htmlGayBenhAnHienTai = [];
                    this.indexHtmlGayBenhAnHienTai = 0;
                    this.showBtnPrevHtml = false;
                    this.showBtnNextHtml = false;
                    this.src = "";
                    this.isLoadingDataPrev = false;
                    this.isLoadingDataNext = false;
                    this.htmlGayBenhAnTatCa = [];
                    this.i = 0;
                    //============================================================================
                    this.zoom = 1;
                }
                BenhAnDienTuListComponent.prototype.ngOnInit = function () {
                    this.hosting = window.location.protocol + "//" + window.location.host;
                };
                BenhAnDienTuListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        self.timeoutSearchChange = setTimeout(function () {
                            self.modelQRCode = event;
                            self.changeQR(self.modelQRCode);
                        }, 10);
                    }
                    else if ((event == null || event == "") && this.strAdditionalSearchString != "") {
                        this.modelQRCode = null;
                        this.timKiemNangCao();
                    }
                };
                BenhAnDienTuListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                BenhAnDienTuListComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    this.timKiemNangCao();
                };
                BenhAnDienTuListComponent.prototype.timKiemNangCao = function () {
                    var _this = this;
                    // this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__["LocalStorageHelper"].setItem("additionalSearchStringBenhAnDienTu", queryString);
                    this.showPopupLoadingData();
                    this.apiService.post("BenhAnDienTu/TimKiemNoiTruBenhAn", this.timKiemNangCaoObj).subscribe(function (res) {
                        _this.closePopupLoadingData();
                        if (res && res.Data != null) {
                            if (res.Data.length == 1) {
                                _this.noiTruBenhAnId = res.Data[0].Id;
                                _this.getGayBenhAnDienTuTheoBenhAn();
                            }
                            else if (res.Data.length > 1) {
                                _this.showPopupTimKiemNguoiBenh();
                            }
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                BenhAnDienTuListComponent.prototype.showPopupTimKiemNguoiBenh = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_benh_an_dien_tu_benh_an_popup_benh_an_dien_tu_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_21__["BenhAnDienTuBenhAnPopupComponent"], {
                        disableClose: false,
                        width: '1400px',
                        height: '600px',
                        data: this.timKiemNangCaoObj,
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result != null && result != undefined) {
                            _this.noiTruBenhAnId = result;
                            _this.getGayBenhAnDienTuTheoBenhAn();
                        }
                    });
                };
                BenhAnDienTuListComponent.prototype.getGayBenhAnDienTuTheoBenhAn = function () {
                    var _this = this;
                    if (this.noiTruBenhAnId != null && this.noiTruBenhAnId != 0) {
                        this.showPopupLoadingData();
                        this.apiService.get("BenhAnDienTu/GetGayBenhAnDienTuTheoBenhAn?noiTruBenhAnId=" + this.noiTruBenhAnId).subscribe(function (res) {
                            _this.closePopupLoadingData();
                            if (res) {
                                _this.benhAnDienTu = res;
                                // this.fileUrl = null;
                                // this.filePdf = null;
                                if (_this.benhAnDienTu.GayBenhAns.length > 0) {
                                    _this.chonGayBenhAn(_this.benhAnDienTu.GayBenhAns[0]);
                                }
                            }
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                };
                BenhAnDienTuListComponent.prototype.chonGayBenhAn = function (gayBenhAn, indexGay) {
                    if (indexGay === void 0) { indexGay = 0; }
                    if (gayBenhAn != undefined && gayBenhAn != null) {
                        this.getThongTinTheoGayBenhAn(gayBenhAn, indexGay);
                        var indexPrev = indexGay - 1;
                        var indexNext = indexGay + 1;
                        if (indexPrev >= 0) {
                            var gayBenhAnPrev = this.benhAnDienTu.GayBenhAns[indexPrev];
                            if (gayBenhAnPrev != undefined && gayBenhAnPrev != null) {
                                this.showBtnPrevHtml = true;
                                if (gayBenhAnPrev.Htmls == undefined || gayBenhAnPrev.Htmls == null || gayBenhAnPrev.Htmls.length == 0) {
                                    if (!gayBenhAnPrev.IsLoading !== true) {
                                        this.getThongTinTheoGayBenhAn(gayBenhAnPrev, -1, true);
                                    }
                                }
                            }
                            else {
                                this.showBtnPrevHtml = false;
                            }
                        }
                        else {
                            this.showBtnPrevHtml = false;
                        }
                        if (indexNext >= 0) {
                            var gayBenhAnNext = this.benhAnDienTu.GayBenhAns[indexNext];
                            if (gayBenhAnNext != undefined && gayBenhAnNext != null) {
                                this.showBtnNextHtml = true;
                                if (gayBenhAnNext.Htmls == undefined || gayBenhAnNext.Htmls == null || gayBenhAnNext.Htmls.length == 0) {
                                    if (gayBenhAnNext.IsLoading !== true) {
                                        this.getThongTinTheoGayBenhAn(gayBenhAnNext, -1, false, true);
                                    }
                                }
                            }
                            else {
                                this.showBtnNextHtml = false;
                            }
                        }
                        else {
                            this.showBtnNextHtml = false;
                        }
                    }
                };
                BenhAnDienTuListComponent.prototype.getThongTinTheoGayBenhAn = function (gayBenhAn, indexGay, isLoadPrev, isLoadNext, layTatCa) {
                    var _this = this;
                    if (indexGay === void 0) { indexGay = 0; }
                    if (isLoadPrev === void 0) { isLoadPrev = false; }
                    if (isLoadNext === void 0) { isLoadNext = false; }
                    if (layTatCa === void 0) { layTatCa = false; }
                    if (indexGay != -1 || layTatCa) {
                        this.showPopupLoadingData();
                        if (!layTatCa) {
                            this.indexGayBenhAnHienTai = indexGay;
                        }
                    }
                    var thongTinBenhAnCanIn = new _benh_an_dien_tu_model__WEBPACK_IMPORTED_MODULE_15__["BenhAnDienTuDetail"]();
                    thongTinBenhAnCanIn.NoiTruBenhAnId = this.benhAnDienTu.NoiTruBenhAnId;
                    thongTinBenhAnCanIn.MaYeuCauTiepNhan = this.benhAnDienTu.MaYeuCauTiepNhan;
                    thongTinBenhAnCanIn.BenhNhanId = this.benhAnDienTu.BenhNhanId;
                    thongTinBenhAnCanIn.Hosting = this.hosting;
                    thongTinBenhAnCanIn.LaInPhieu = layTatCa;
                    if (layTatCa) {
                        this.benhAnDienTu.GayBenhAns.forEach(function (element) {
                            thongTinBenhAnCanIn.GayBenhAns.push(Object.assign({}, element));
                        });
                    }
                    else {
                        thongTinBenhAnCanIn.GayBenhAns.push(Object.assign({}, gayBenhAn));
                    }
                    if (gayBenhAn != null && gayBenhAn.Htmls && !layTatCa) {
                        if (indexGay != -1) {
                            this.htmlGayBenhAnHienTai = [];
                            this.htmlGayBenhAnHienTai = gayBenhAn.Htmls;
                            if (this.indexHtmlGayBenhAnHienTai == -1) {
                                this.indexHtmlGayBenhAnHienTai = this.htmlGayBenhAnHienTai.length - 1;
                            }
                            else {
                                this.indexHtmlGayBenhAnHienTai = 0;
                            }
                            // this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(gayBenhAn.Htmls[this.indexHtmlGayBenhAnHienTai]);
                            this.getSrcHtml(this.indexHtmlGayBenhAnHienTai, gayBenhAn.Htmls);
                            this.closePopupLoadingData();
                        }
                    }
                    else {
                        if (isLoadPrev) {
                            this.isLoadingDataPrev = isLoadPrev;
                        }
                        if (isLoadNext) {
                            this.isLoadingDataNext = isLoadNext;
                        }
                        if (gayBenhAn != undefined && gayBenhAn != null) {
                            gayBenhAn.IsLoading = true;
                        }
                        this.apiService.post('BenhAnDienTu/GetFilePDFBenhAnDienTuFromHtml', thongTinBenhAnCanIn).subscribe(function (htmls) {
                            if (gayBenhAn != undefined && gayBenhAn != null) {
                                gayBenhAn.IsLoading = false;
                            }
                            // let newBlob = new Blob([file], { type: "application/pdf" });
                            // let datalocalURL = window.URL.createObjectURL(newBlob);
                            // this.fileUrl = datalocalURL;
                            // this.filePdf = file;
                            //this.print(htmls,htmls[0]);
                            if (isLoadPrev) {
                                _this.isLoadingDataPrev = false;
                            }
                            if (isLoadNext) {
                                _this.isLoadingDataNext = false;
                            }
                            // trường hợp lấy theo gáy bệnh án
                            if (gayBenhAn != null) {
                                gayBenhAn.Htmls = htmls;
                                if (indexGay != -1) {
                                    _this.htmlGayBenhAnHienTai = [];
                                    _this.htmlGayBenhAnHienTai = htmls;
                                    if (_this.indexHtmlGayBenhAnHienTai == -1) {
                                        _this.indexHtmlGayBenhAnHienTai = _this.htmlGayBenhAnHienTai.length - 1;
                                    }
                                    else {
                                        _this.indexHtmlGayBenhAnHienTai = 0;
                                    }
                                    //this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmls[this.indexHtmlGayBenhAnHienTai]);
                                    _this.getSrcHtml(_this.indexHtmlGayBenhAnHienTai, _this.htmlGayBenhAnHienTai);
                                    //this.dataContainer.nativeElement.innerHTML = htmls;
                                    _this.closePopupLoadingData();
                                }
                            }
                            // trường hợp lấy tất cả html
                            else if (layTatCa) {
                                _this.htmlGayBenhAnTatCa = [];
                                _this.htmlGayBenhAnTatCa = htmls;
                                _this.closePopupLoadingData();
                                _this.print(_this.htmlGayBenhAnTatCa, _this.htmlGayBenhAnTatCa[0]);
                            }
                        }, function (err) {
                            if (err.Message !== 'Validation Failed') {
                                _this.notificationService.showError(err.Message);
                            }
                            if (isLoadPrev) {
                                _this.isLoadingDataPrev = false;
                            }
                            if (isLoadNext) {
                                _this.isLoadingDataNext = false;
                            }
                            if (gayBenhAn != undefined && gayBenhAn != null) {
                                gayBenhAn.IsLoading = false;
                            }
                            if (indexGay != -1 || layTatCa) {
                                _this.closePopupLoadingData();
                            }
                        });
                    }
                };
                BenhAnDienTuListComponent.prototype.chuyenPhieu = function (isNext) {
                    if (isNext === void 0) { isNext = true; }
                    if (isNext) {
                        this.indexHtmlGayBenhAnHienTai += 1;
                    }
                    else {
                        this.indexHtmlGayBenhAnHienTai -= 1;
                    }
                    if (this.indexHtmlGayBenhAnHienTai == -1 || this.indexHtmlGayBenhAnHienTai > this.htmlGayBenhAnHienTai.length - 1) {
                        if (isNext) {
                            this.indexGayBenhAnHienTai += 1;
                            this.indexHtmlGayBenhAnHienTai = 0;
                        }
                        else {
                            this.indexGayBenhAnHienTai -= 1;
                            this.indexHtmlGayBenhAnHienTai = -1;
                        }
                        var gayBenhAn = this.benhAnDienTu.GayBenhAns[this.indexGayBenhAnHienTai];
                        this.chonGayBenhAn(gayBenhAn, this.indexGayBenhAnHienTai);
                    }
                    else {
                        this.getSrcHtml(this.indexHtmlGayBenhAnHienTai, this.htmlGayBenhAnHienTai);
                    }
                };
                BenhAnDienTuListComponent.prototype.getSrcHtml = function (index, htmls) {
                    this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmls[index]);
                };
                BenhAnDienTuListComponent.prototype.print = function (htmls, html) {
                    var self = this;
                    if (self.i == htmls.length) {
                        self.i = 0;
                        return;
                    }
                    else {
                        setTimeout(function () {
                            self.notificationService.showInfo('Đang in trang ' + (self.i + 1) + '/' + htmls.length);
                            if (html != undefined && html != null && html.length > 0) {
                                var typeSize = "1.5in 0.87in";
                                var typeLayout = "portrait";
                                var WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
                                if (WindowPrt != null && WindowPrt != undefined) {
                                    WindowPrt.focus();
                                    WindowPrt.close();
                                    WindowPrt.document.write(html);
                                    WindowPrt.document.close();
                                    var contents = WindowPrt.document.documentElement.innerHTML;
                                    var frame1 = self.renderer.createElement('iframe');
                                    frame1.name = "frame1";
                                    frame1.style.position = "absolute";
                                    frame1.style.top = "-1000000px";
                                    document.body.appendChild(frame1);
                                    var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
                                    frameDoc.document.open();
                                    frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print { @page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>');
                                    frameDoc.document.write('</head><body>');
                                    frameDoc.document.write(contents);
                                    frameDoc.document.write('</body></html>');
                                    frameDoc.document.close();
                                    setTimeout(function () {
                                        window.frames["frame1"].focus();
                                        window.frames["frame1"].print();
                                        document.body.removeChild(frame1);
                                    }, 1000);
                                }
                            }
                            self.i++;
                            if (self.i <= htmls.length) {
                                self.print(htmls, htmls[self.i]);
                            }
                        }, 1000);
                    }
                };
                BenhAnDienTuListComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                BenhAnDienTuListComponent.prototype.changeQR = function (event) {
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        var dataTimKiem = event.split("|");
                        if (dataTimKiem.length > 1) {
                            this.timKiemNangCaoObj.SearchString = dataTimKiem[0];
                        }
                        else {
                            this.timKiemNangCaoObj.SearchString = event.slice(0, -1);
                        }
                        this.timKiemNangCao();
                    }
                    else {
                        this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
                    }
                    this.isScanF1 = false;
                };
                BenhAnDienTuListComponent.prototype.showPopupLoadingData = function (typeLoading) {
                    if (typeLoading === void 0) { typeLoading = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_19__["EnumTypeLoadingData"].View; }
                    var mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
                    switch (typeLoading) {
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_19__["EnumTypeLoadingData"].View:
                            mess = "Đang tải dữ liệu...";
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_19__["EnumTypeLoadingData"].Update:
                            mess = "Đang lưu dữ liệu...";
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_19__["EnumTypeLoadingData"].Delete:
                            mess = "Đang xóa dữ liệu...";
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_19__["EnumTypeLoadingData"].Cancel:
                            mess = "Đang hủy dữ liệu...";
                            break;
                        default: mess = "Đang tải dữ liệu...";
                    }
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: mess }
                    });
                };
                BenhAnDienTuListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                // bảng kê chi phí
                BenhAnDienTuListComponent.prototype.inBangkeChiPhi = function () {
                    var _this = this;
                    this.dialog.open(_danh_sach_dieu_tri_noi_tru_bang_ke_in_theo_yeu_cau_popup_bang_ke_in_theo_yeu_cau_popup_component__WEBPACK_IMPORTED_MODULE_24__["BangKeTheoYeuCauComponent"], {
                        disableClose: false,
                        width: '600px'
                    }).afterClosed()
                        .subscribe(function (chonPhieuIn) {
                        if (typeof chonPhieuIn === "boolean") {
                            if (chonPhieuIn) {
                                _this.phieuInTaCa();
                            }
                            else {
                                _this.phieuInChiPhiTheoKhoa();
                            }
                        }
                    });
                };
                BenhAnDienTuListComponent.prototype.phieuInTaCa = function () {
                    var _this = this;
                    var arrFileUrl = [];
                    var arrFilePdf = [];
                    var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: {},
                    });
                    var hostingName = window.location.protocol + '//' + window.location.host;
                    this.apiService.postExportPdf("DieuTriNoiTru/InPhieuThu?yeuCauTiepNhanId=" + this.noiTruBenhAnId + "&hostingName=" + hostingName).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        arrFileUrl.push(datalocalURL);
                        arrFilePdf.push(file);
                        if (arrFilePdf.length > 0) {
                            _this.dialog
                                .open(_danh_sach_dieu_tri_noi_tru_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_25__["ThongTinPhieuPdfPopupComponent"], {
                                disableClose: false,
                                width: "1000px",
                                data: { arrFileUrl: arrFileUrl, arrFilePdf: arrFilePdf },
                            })
                                .afterClosed()
                                .subscribe(function () {
                                loading.close();
                            });
                        }
                        else {
                            _this.notificationService.showError("Bảng chi phí chưa có dịch vụ.");
                            loading.close();
                        }
                    }, function (err) {
                        if (err.Message !== "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                            loading.close();
                        }
                    });
                };
                BenhAnDienTuListComponent.prototype.phieuInChiPhiTheoKhoa = function () {
                    var _this = this;
                    var arrFileUrl = [];
                    var arrFilePdf = [];
                    var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: {},
                    });
                    var hostingName = window.location.protocol + '//' + window.location.host;
                    this.apiService.postExportPdf("DieuTriNoiTru/XemBangKeChiPhiTheoKhoa?yeuCauTiepNhanId=" + this.noiTruBenhAnId + "&hostingName=" + hostingName).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        arrFileUrl.push(datalocalURL);
                        arrFilePdf.push(file);
                        if (arrFilePdf.length > 0) {
                            _this.dialog
                                .open(_danh_sach_dieu_tri_noi_tru_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_25__["ThongTinPhieuPdfPopupComponent"], {
                                disableClose: false,
                                width: "1000px",
                                data: { arrFileUrl: arrFileUrl, arrFilePdf: arrFilePdf },
                            })
                                .afterClosed()
                                .subscribe(function () {
                                loading.close();
                            });
                        }
                        else {
                            _this.notificationService.showError("Bảng chi phí chưa có dịch vụ.");
                            loading.close();
                        }
                    }, function (err) {
                        if (err.Message !== "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                            loading.close();
                        }
                    });
                };
                BenhAnDienTuListComponent.prototype.zoomIn = function () {
                    this.zoom += 0.1;
                    $('.target').css('transform', 'scale(' + this.zoom + ')');
                    this.getHeightIframeByZoomValue();
                };
                BenhAnDienTuListComponent.prototype.zoomOut = function () {
                    this.zoom -= 0.1;
                    $('.target').css('transform', 'scale(' + this.zoom + ')');
                    this.getHeightIframeByZoomValue();
                    // var w = $(".container-iframe").width();
                    // var h = $(".container-iframe").height();
                    // let x = 1;
                    // if (x === -1) {
                    //   this.zoom = this.zoom * 1.1;
                    //   w = w * 0.9;
                    //   h = h * 0.9;
                    //   $("#myiframe").width(w + "px");
                    //   $("#myiframe").height(h + "px")
                    // } else {
                    //   this.zoom = this.zoom * 0.9;
                    //   w = w * 1.1;
                    //   h = h * 1.1;
                    //   $("#myiframe").width(w + "px");
                    //   $("#myiframe").height(h + "px")
                    // }
                    // $('#myiframe').css('transform', `scale(${this.zoom})`);
                };
                BenhAnDienTuListComponent.prototype.getHeightIframeByZoomValue = function () {
                    var valueZoom = 1 - this.zoom;
                    //var step = valueZoom/0.1 - 1;
                    document.getElementById('myiframe').style.height = ((valueZoom * 1000) + 850) + 'px';
                };
                BenhAnDienTuListComponent.prototype.InGayBenhAn = function () {
                    if (this.htmlGayBenhAnHienTai != undefined && this.htmlGayBenhAnHienTai.length > 0) {
                        var html = this.htmlGayBenhAnHienTai[this.indexHtmlGayBenhAnHienTai];
                        if (html != undefined && html != null && html != '') {
                            var htmlNganTrang = "<br><hr style =\"border-top: 1px dotted gray;\"><br>";
                            var htmlBreakPage = "<div class=\"pagebreak\"></div>";
                            html = this.replaceAll(html, htmlNganTrang, htmlBreakPage);
                            var typeSize = "A4";
                            var typeLayout = "portrait";
                            var WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
                            if (WindowPrt != null && WindowPrt != undefined) {
                                WindowPrt.focus();
                                WindowPrt.close();
                                WindowPrt.document.write(html);
                                WindowPrt.document.close();
                                var contents = WindowPrt.document.documentElement.innerHTML;
                                // if (soLuongIn > 1) {
                                //   for (var i = 2; i <= soLuongIn; i++) {
                                //     contents += "<p class='pagebreak'></p>" + WindowPrt.document.documentElement.innerHTML;
                                //   }
                                // }
                                var frame1 = this.renderer.createElement('iframe');
                                frame1.name = "frame1";
                                frame1.style.position = "absolute";
                                frame1.style.top = "-1000000px";
                                document.body.appendChild(frame1);
                                var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
                                frameDoc.document.open();
                                frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print { @page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>');
                                frameDoc.document.write('</head><body>');
                                frameDoc.document.write(contents);
                                frameDoc.document.write('</body></html>');
                                frameDoc.document.close();
                                setTimeout(function () {
                                    window.frames["frame1"].focus();
                                    window.frames["frame1"].print();
                                    document.body.removeChild(frame1);
                                }, 500);
                            }
                        }
                    }
                };
                BenhAnDienTuListComponent.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                return BenhAnDienTuListComponent;
            }());
            BenhAnDienTuListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
            ]; };
            BenhAnDienTuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-benh-an-dien-tu-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./benh-an-dien-tu-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_22__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_23__["fadeInUp400ms"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./benh-an-dien-tu-list.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.scss")).default]
                })
            ], BenhAnDienTuListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-routing.module.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-routing.module.ts ***!
          \*************************************************************************************************/
        /*! exports provided: BenhAnDienTuRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhAnDienTuRoutingModule", function () { return BenhAnDienTuRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _benh_an_dien_tu_list_benh_an_dien_tu_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./benh-an-dien-tu-list/benh-an-dien-tu-list.component */ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _benh_an_dien_tu_list_benh_an_dien_tu_list_component__WEBPACK_IMPORTED_MODULE_5__["BenhAnDienTuListComponent"],
                    data: {
                        title: "Bệnh án điện tử",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BenhAnDienTu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    }
                },
            ];
            var BenhAnDienTuRoutingModule = /** @class */ (function () {
                function BenhAnDienTuRoutingModule() {
                }
                return BenhAnDienTuRoutingModule;
            }());
            BenhAnDienTuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BenhAnDienTuRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu.model.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu.model.ts ***!
          \****************************************************************************************/
        /*! exports provided: BenhAnDienTuTimKiemNangCao, BenhAnDienTuTimKiemTuNgayDenNgay, BenhAnDienTuDetail, BenhAnDienTuMenuInfo, BenhAnDienTuChiTietMenuInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhAnDienTuTimKiemNangCao", function () { return BenhAnDienTuTimKiemNangCao; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhAnDienTuTimKiemTuNgayDenNgay", function () { return BenhAnDienTuTimKiemTuNgayDenNgay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhAnDienTuDetail", function () { return BenhAnDienTuDetail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhAnDienTuMenuInfo", function () { return BenhAnDienTuMenuInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhAnDienTuChiTietMenuInfo", function () { return BenhAnDienTuChiTietMenuInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BenhAnDienTuTimKiemNangCao = /** @class */ (function () {
                function BenhAnDienTuTimKiemNangCao(SearchString, TuNgayDenNgayNhapVien, TuNgayDenNgayXuatVien) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (TuNgayDenNgayNhapVien === void 0) { TuNgayDenNgayNhapVien = new BenhAnDienTuTimKiemTuNgayDenNgay(); }
                    if (TuNgayDenNgayXuatVien === void 0) { TuNgayDenNgayXuatVien = new BenhAnDienTuTimKiemTuNgayDenNgay(); }
                    this.SearchString = SearchString;
                    this.TuNgayDenNgayNhapVien = TuNgayDenNgayNhapVien;
                    this.TuNgayDenNgayXuatVien = TuNgayDenNgayXuatVien;
                }
                return BenhAnDienTuTimKiemNangCao;
            }());
            var BenhAnDienTuTimKiemTuNgayDenNgay = /** @class */ (function () {
                function BenhAnDienTuTimKiemTuNgayDenNgay(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return BenhAnDienTuTimKiemTuNgayDenNgay;
            }());
            var BenhAnDienTuDetail = /** @class */ (function () {
                function BenhAnDienTuDetail(NoiTruBenhAnId, MaYeuCauTiepNhan, BenhNhanId, Hosting, LaInPhieu, GayBenhAns) {
                    if (NoiTruBenhAnId === void 0) { NoiTruBenhAnId = null; }
                    if (MaYeuCauTiepNhan === void 0) { MaYeuCauTiepNhan = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (Hosting === void 0) { Hosting = null; }
                    if (LaInPhieu === void 0) { LaInPhieu = false; }
                    if (GayBenhAns === void 0) { GayBenhAns = []; }
                    this.NoiTruBenhAnId = NoiTruBenhAnId;
                    this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
                    this.BenhNhanId = BenhNhanId;
                    this.Hosting = Hosting;
                    this.LaInPhieu = LaInPhieu;
                    this.GayBenhAns = GayBenhAns;
                }
                return BenhAnDienTuDetail;
            }());
            var BenhAnDienTuMenuInfo = /** @class */ (function () {
                function BenhAnDienTuMenuInfo(ViTri, TenGayHoSo, ChiTietHoSos) {
                    if (ViTri === void 0) { ViTri = null; }
                    if (TenGayHoSo === void 0) { TenGayHoSo = null; }
                    if (ChiTietHoSos === void 0) { ChiTietHoSos = []; }
                    this.ViTri = ViTri;
                    this.TenGayHoSo = TenGayHoSo;
                    this.ChiTietHoSos = ChiTietHoSos;
                }
                return BenhAnDienTuMenuInfo;
            }());
            var BenhAnDienTuChiTietMenuInfo = /** @class */ (function () {
                function BenhAnDienTuChiTietMenuInfo(LoaiHoSo, Value) {
                    if (LoaiHoSo === void 0) { LoaiHoSo = null; }
                    if (Value === void 0) { Value = null; }
                    this.LoaiHoSo = LoaiHoSo;
                    this.Value = Value;
                }
                return BenhAnDienTuChiTietMenuInfo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu.module.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu.module.ts ***!
          \*****************************************************************************************/
        /*! exports provided: BenhAnDienTuModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhAnDienTuModule", function () { return BenhAnDienTuModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _benh_an_dien_tu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benh-an-dien-tu-routing.module */ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-routing.module.ts");
            /* harmony import */ var _benh_an_dien_tu_list_benh_an_dien_tu_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./benh-an-dien-tu-list/benh-an-dien-tu-list.component */ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-list/benh-an-dien-tu-list.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _benh_an_dien_tu_benh_an_popup_benh_an_dien_tu_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component.ts");
            /* harmony import */ var _dieu_tri_noi_tru_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dieu-tri-noi-tru.module */ "./src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.module.ts");
            var BenhAnDienTuModule = /** @class */ (function () {
                function BenhAnDienTuModule() {
                }
                return BenhAnDienTuModule;
            }());
            BenhAnDienTuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_benh_an_dien_tu_list_benh_an_dien_tu_list_component__WEBPACK_IMPORTED_MODULE_4__["BenhAnDienTuListComponent"], _benh_an_dien_tu_benh_an_popup_benh_an_dien_tu_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_17__["BenhAnDienTuBenhAnPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _benh_an_dien_tu_routing_module__WEBPACK_IMPORTED_MODULE_3__["BenhAnDienTuRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                        _dieu_tri_noi_tru_module__WEBPACK_IMPORTED_MODULE_18__["DieuTriNoiTruModule"]
                    ],
                    entryComponents: [
                        _benh_an_dien_tu_benh_an_popup_benh_an_dien_tu_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_17__["BenhAnDienTuBenhAnPopupComponent"]
                    ]
                })
            ], BenhAnDienTuModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=dieu-tri-noi-tru-benh-an-dien-tu-benh-an-dien-tu-module-es2015.js.map
//# sourceMappingURL=dieu-tri-noi-tru-benh-an-dien-tu-benh-an-dien-tu-module-es5.js.map
//# sourceMappingURL=dieu-tri-noi-tru-benh-an-dien-tu-benh-an-dien-tu-module-es5.js.map