(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-benh-lich-su-kham-chua-benh-lich-su-kham-chua-benh-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.html": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.html ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n\t<vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\t\t<div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n\t\t\t<vex-breadcrumbs [crumbs]=\"[\n\t\t\t    {Title:'Lịch sử khám chữa bệnh',Path:''}]\">\n            </vex-breadcrumbs>\n\t\t</div>\n\t</vex-page-layout-header>\n\n\t<vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\t\t<div @fadeInUp class=\"-mt-16\">\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div class=\"card\" fxFlex=\"100%\">\n\t\t\t\t\t<div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\" kendoTooltip>\n                                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                                    type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                                    (ngModelChange)=\"searchChanges($event)\" placeholder=\"Họ tên, Mã NB, Mã TN\" />\n                                <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n                                    class=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\" title=\"Phím tắt: Ctrl + Q\">\n                                    <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                </button>\n                            </div>\n\n                            <app-textboxnumeric fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"timKiemNangCaoObj.NamSinh\" id=\"nam\" label=\"Năm sinh\"\n                                style=\"margin-top: 1px;\" class=\"ml-2  on-header\" (keyup)=\"onKey($event)\" format=\"0\" min=\"1\" max=\"9999\">\n                            </app-textboxnumeric>\n                            <app-textboxmask id=\"sdt\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Số điện thoại\" class=\"ml-2 on-header\"\n                                (keyup)=\"onKey($event)\" style=\"margin-top: 1px;\" [(model)]=\"timKiemNangCaoObj.SoDienThoai\" mask=\"000 000 0000\"\n                                maxlength=\"12\">\n                            </app-textboxmask>\n                            \n                            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                            </button>\n                            \n                            <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"on-header ml-2\"\n                                [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay\" label=\"Từ ngày - đến ngày\" (keyup)=\"onKey($event)\">\n                            </app-daterangepicker>\n                            <button type=\"button\" color=\"primary\" (click)=\"timKiemNangCao()\" class=\"ml-2\" mat-raised-button>Tìm</button>\n                        </div>\n\n                        <kendo-splitter class=\"mt-2\" *ngIf=\"lichSuKhamChuaBenh != undefined\">\n                            <kendo-splitter-pane [collapsible]=\"true\" size=\"25%\">\n                                <p *ngIf=\"lichSuKhamChuaBenh.LichSuTiepNhans.length == 0\">\n                                    Không có lịch sử khám chữa bệnh\n                                </p>\n                                <div *ngIf=\"lichSuKhamChuaBenh.LichSuTiepNhans.length > 0\">\n                                    <table fxFlex=\"100%\" class=\"table table-striped\">\n                                        <tbody>\n                                            <ng-container *ngFor=\"let tiepNhan of lichSuKhamChuaBenh.LichSuTiepNhans\">\n                                                <tr class=\"parent-row\">\n                                                    <td valign=\"center\">\n                                                        <div>\n                                                            <a (click)=\"chonYeuCauTiepNhan(tiepNhan)\">{{tiepNhan.DisplayName}}</a>\n                                                            <button *ngIf=\"tiepNhan.HienLichSuChiTiet\" mat-raised-button type=\"button\" \n                                                                color=\"primary\" class=\"ml-2\" (click)=\"getTatCaPhieuIn(tiepNhan)\">Xem tất cả\n                                                            </button>\n                                                            <ng-container *ngIf=\"tiepNhan.CoLichSuYLenh && timKiemNangCaoObj.CoQuyenXemYLenh\">\n                                                                <button *ngIf=\"!tiepNhan.HienLichSuNoiTru\" mat-raised-button type=\"button\" color=\"primary\" class=\"ml-2\"\n                                                                    (click)=\"xemBenhAn(tiepNhan)\">Xem BA\n                                                                </button>\n                                                                <button *ngIf=\"tiepNhan.HienLichSuNoiTru\" mat-raised-button type=\"button\" color=\"primary\" class=\"ml-2\"\n                                                                    (click)=\"xemBenhAn(tiepNhan, false)\">Ẩn BA\n                                                                </button>\n                                                            </ng-container>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                                <ng-container *ngIf=\"tiepNhan.HienLichSuChiTiet\">\n                                                    <ng-container *ngFor=\"let lichSu of tiepNhan.ChiTietKhamChuaBenhs\">\n                                                        <tr\n                                                            *ngIf=\"lichSu.LoaiLichSuKhamChuaBenh != loaiLichSuKhamChuaBenhYLenh || tiepNhan.HienLichSuNoiTru\">\n                                                            <td>\n                                                                <b *ngIf=\"lichSu.IsGroupItem\" class=\"pl-4\">{{lichSu.DisplayName}}</b>\n                                                                <a *ngIf=\"!lichSu.IsGroupItem\" class=\"pl-4\"\n                                                                    (click)=\"chonChiTietCanIn(lichSu, tiepNhan)\">{{lichSu.DisplayName}}</a>\n                                                            </td>\n                                                        </tr>\n                                                    </ng-container>\n                                                </ng-container>\n                                            </ng-container>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            \n                            </kendo-splitter-pane>\n                            <kendo-splitter-pane style=\"overflow:initial;\">\n                                <div class=\"container-iframe\" *ngIf=\"fileUrl != null\">\n                                    <iframe id=\"fileLichSuKham\" frameborder=\"0\" [src]=\"fileUrl | safe\"\n                                        type=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\" style=\"display:none\"\n                                        onload=\"this.style.display = 'block';\">\n                                    </iframe>\n                                </div>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.html": 
        /*!****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.html ***!
          \****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"m-0\">\n    <div>TÌM KIẾM NGƯỜI BỆNH</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <app-grid #gridTimKiem [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" height=\"511\"\n        [allowSortDefault]=\"true\" [headerTemplate]=\"headerTemplate\" [urlGetData]=\"urlGetDataGrid\" [showStt]=\"true\"\n        [urlGetTotalPage]=\"urlGetTotalPageGrid\" [additionalSearchString]=\"strAdditionalSearchString\">\n    </app-grid>\n</mat-dialog-content>\n\n<ng-template #actionTemplate let-dataItem>\n    <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"chonNguoiBenh(dataItem)\">\n        Chọn\n    </button>\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div style=\"border-bottom: 1px solid #ccc;\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap.lt-sm=\"0\">\n            <div  class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\" kendoTooltip>\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                        placeholder=\"Họ tên, Mã NB, Mã TN\" />\n                    <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n                        class=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\"\n                        title=\"Phím tắt: Ctrl + Q\">\n                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                    </button>\n                </div>\n\n                <app-textboxnumeric fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"timKiemNangCaoObj.NamSinh\" id=\"namPopup\"\n                    label=\"Năm sinh\" style=\"margin-top: 1px;\" class=\"ml-2  on-header\" (keyup)=\"onKey($event)\" format=\"0\"\n                    min=\"1\" max=\"9999\">\n                </app-textboxnumeric>\n                <app-textboxmask id=\"sdtPopup\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Số điện thoại\" class=\"ml-2 on-header\"\n                    (keyup)=\"onKey($event)\" style=\"margin-top: 1px;\" [(model)]=\"timKiemNangCaoObj.SoDienThoai\"\n                    mask=\"000 000 0000\" maxlength=\"12\">\n                </app-textboxmask>\n\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <app-daterangepicker id=\"tuNgayDenNgayPopup\" fxFlex=\"25%\" fxFlex.sm=\"25%\" class=\"on-header ml-2\"\n                    [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay\" label=\"Từ ngày - đến ngày\" (keyup)=\"onKey($event)\">\n                </app-daterangepicker>\n                <button type=\"button\" color=\"primary\" (click)=\"timKiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button>\n                <div fxFlex=\"auto\"></div>\n            </div>\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/@vex/animations/fade-in-up.animation.ts": 
        /*!*****************************************************!*\
          !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
          \*****************************************************/
        /*! exports provided: fadeInUpAnimation, fadeInUp400ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () { return fadeInUpAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () { return fadeInUp400ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function fadeInUpAnimation(duration) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(20px)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }))
                    ])
                ]);
            }
            var fadeInUp400ms = fadeInUpAnimation(400);
            /***/ 
        }),
        /***/ "./src/@vex/animations/stagger.animation.ts": 
        /*!**************************************************!*\
          !*** ./src/@vex/animations/stagger.animation.ts ***!
          \**************************************************/
        /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () { return staggerAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function () { return stagger80ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function () { return stagger60ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function () { return stagger40ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function () { return stagger20ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function staggerAnimation(timing) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
                    ])
                ]);
            }
            var stagger80ms = staggerAnimation(80);
            var stagger60ms = staggerAnimation(60);
            var stagger40ms = staggerAnimation(40);
            var stagger20ms = staggerAnimation(20);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.scss": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.scss ***!
          \**************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntr.parent-row {\n  background-color: #dddddd;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  min-height: 720px;\n}\n\nkendo-splitter kendo-splitter-pane {\n  min-height: 720px;\n  max-height: 720px;\n}\n\n.container-iframe {\n  position: relative;\n  width: 100%;\n  height: 720px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tYmVuaC9saWNoLXN1LWtoYW0tY2h1YS1iZW5oL2xpY2gtc3Uta2hhbS1jaHVhLWJlbmgtbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tYmVuaFxcbGljaC1zdS1raGFtLWNodWEtYmVuaFxcbGljaC1zdS1raGFtLWNodWEtYmVuaC1saXN0XFxsaWNoLXN1LWtoYW0tY2h1YS1iZW5oLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgvbGljaC1zdS1raGFtLWNodWEtYmVuaC9saWNoLXN1LWtoYW0tY2h1YS1iZW5oLWxpc3QvbGljaC1zdS1raGFtLWNodWEtYmVuaC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1iZW5oL2xpY2gtc3Uta2hhbS1jaHVhLWJlbmgvbGljaC1zdS1raGFtLWNodWEtYmVuaC1saXN0L2xpY2gtc3Uta2hhbS1jaHVhLWJlbmgtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxudHIucGFyZW50LXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNzIwcHg7XG59XG5cbmtlbmRvLXNwbGl0dGVyIGtlbmRvLXNwbGl0dGVyLXBhbmUge1xuICBtaW4taGVpZ2h0OiA3MjBweDtcbiAgbWF4LWhlaWdodDogNzIwcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MjBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG50ci5wYXJlbnQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA3MjBweDtcbn1cblxua2VuZG8tc3BsaXR0ZXIga2VuZG8tc3BsaXR0ZXItcGFuZSB7XG4gIG1pbi1oZWlnaHQ6IDcyMHB4O1xuICBtYXgtaGVpZ2h0OiA3MjBweDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.ts": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: LichSuKhamChuaBenhListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuKhamChuaBenhListComponent", function () { return LichSuKhamChuaBenhListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _lich_su_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lich-su-kham-chua-benh.model */ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/kham-benh.enum */ "./src/app/shared/enum/kham-benh.enum.ts");
            /* harmony import */ var _lich_su_kham_chua_benh_nguoi_benh_popup_lich_su_kham_chua_benh_nguoi_benh_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component */ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_lich_su_kham_chua_benh_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/enum/lich-su-kham-chua-benh.enum */ "./src/app/shared/enum/lich-su-kham-chua-benh.enum.ts");
            var LichSuKhamChuaBenhListComponent = /** @class */ (function () {
                function LichSuKhamChuaBenhListComponent(authService, notificationService, router, route, location, dialog, apiService) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuKhamChuaBenh;
                    this.gridColumns = [];
                    this.isScanF1 = false;
                    this.strAdditionalSearchString = "";
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.baseRoute = "/lich-su-kham-chua-benh";
                    this.timKiemNangCaoObj = new _lich_su_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_4__["LichSuKhamChuaBenhTimKiemNangCao"]();
                    this.nguoiBenhId = null;
                    this.lichSuKhamChuaBenh = null;
                    this.coQuyenXemYLenh = false;
                    this.loaiLichSuKhamChuaBenhYLenh = src_app_shared_enum_lich_su_kham_chua_benh_enum__WEBPACK_IMPORTED_MODULE_20__["LoaiLichSuKhamChuaBenh"].YLenh;
                    this.filePdf = null;
                    this.fileUrl = null;
                    this.hosting = "";
                }
                LichSuKhamChuaBenhListComponent.prototype.ngOnInit = function () {
                    this.coQuyenXemYLenh = this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuKhamChuaBenhKhamBenh, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View)
                        || this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuKhamChuaBenhYLenh, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View);
                    this.hosting = window.location.protocol + "//" + window.location.host;
                };
                LichSuKhamChuaBenhListComponent.prototype.searchChanges = function (event) {
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
                LichSuKhamChuaBenhListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                LichSuKhamChuaBenhListComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    this.timKiemNangCao();
                };
                LichSuKhamChuaBenhListComponent.prototype.timKiemNangCao = function () {
                    var _this = this;
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_13__["LocalStorageHelper"].setItem("additionalSearchStringLichSuKhamChuaBenh", queryString);
                    // this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
                    // this.gridChild.search();
                    // xử lý chỗ này
                    this.timKiemNangCaoObj.CoQuyenXemKhamBenh = this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuKhamChuaBenhKhamBenh, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View);
                    this.timKiemNangCaoObj.CoQuyenXemCanLamSang = this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuKhamChuaBenhCanLamSang, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View);
                    this.timKiemNangCaoObj.CoQuyenXemYLenh = this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuKhamChuaBenhYLenh, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View);
                    this.showPopupLoadingData();
                    this.apiService.post("LichSuKhamChuaBenh/TimKiemNguoiBenhDaTiepNhan", this.timKiemNangCaoObj).subscribe(function (res) {
                        _this.closePopupLoadingData();
                        if (res && res.Data != null) {
                            if (res.Data.length == 1) {
                                _this.nguoiBenhId = res.Data[0].Id;
                                _this.getLichSuKhamChuaBenhTheoNguoiBenh();
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
                LichSuKhamChuaBenhListComponent.prototype.showPopupTimKiemNguoiBenh = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_lich_su_kham_chua_benh_nguoi_benh_popup_lich_su_kham_chua_benh_nguoi_benh_popup_component__WEBPACK_IMPORTED_MODULE_19__["LichSuKhamChuaBenhNguoiBenhPopupComponent"], {
                        disableClose: false,
                        width: '1400px',
                        height: '600px',
                        data: this.timKiemNangCaoObj,
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result != null && result != undefined) {
                            _this.nguoiBenhId = result;
                            _this.getLichSuKhamChuaBenhTheoNguoiBenh();
                        }
                    });
                };
                LichSuKhamChuaBenhListComponent.prototype.getLichSuKhamChuaBenhTheoNguoiBenh = function () {
                    var _this = this;
                    if (this.nguoiBenhId != null && this.nguoiBenhId != 0) {
                        this.showPopupLoadingData();
                        this.apiService.get("LichSuKhamChuaBenh/GetLichSuKhamChuaBenhTheoNguoiBenh?nguoiBenhId=" + this.nguoiBenhId).subscribe(function (res) {
                            _this.closePopupLoadingData();
                            if (res) {
                                _this.lichSuKhamChuaBenh = res;
                                _this.fileUrl = null;
                                _this.filePdf = null;
                            }
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                };
                LichSuKhamChuaBenhListComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                LichSuKhamChuaBenhListComponent.prototype.changeQR = function (event) {
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
                LichSuKhamChuaBenhListComponent.prototype.showPopupLoadingData = function (typeLoading) {
                    if (typeLoading === void 0) { typeLoading = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_18__["EnumTypeLoadingData"].View; }
                    var mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
                    switch (typeLoading) {
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_18__["EnumTypeLoadingData"].View:
                            mess = "Đang tải dữ liệu...";
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_18__["EnumTypeLoadingData"].Update:
                            mess = "Đang lưu dữ liệu...";
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_18__["EnumTypeLoadingData"].Delete:
                            mess = "Đang xóa dữ liệu...";
                            break;
                        case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_18__["EnumTypeLoadingData"].Cancel:
                            mess = "Đang hủy dữ liệu...";
                            break;
                        default: mess = "Đang tải dữ liệu...";
                    }
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: mess }
                    });
                };
                LichSuKhamChuaBenhListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                LichSuKhamChuaBenhListComponent.prototype.chonYeuCauTiepNhan = function (dataItem) {
                    dataItem.HienLichSuChiTiet = !dataItem.HienLichSuChiTiet;
                    // if(dataItem.HienLichSuChiTiet)
                    // {
                    //   this.getTatCaPhieuIn(dataItem);
                    // }
                    if (!dataItem.HienLichSuChiTiet) {
                        dataItem.HienLichSuNoiTru = false;
                    }
                };
                LichSuKhamChuaBenhListComponent.prototype.xemBenhAn = function (dataItem, hienBenhAn) {
                    if (hienBenhAn === void 0) { hienBenhAn = true; }
                    dataItem.HienLichSuChiTiet = true;
                    dataItem.HienLichSuNoiTru = hienBenhAn;
                    //this.getTatCaPhieuIn(dataItem);
                };
                LichSuKhamChuaBenhListComponent.prototype.getTatCaPhieuIn = function (dataItem) {
                    var objQueryInfo = new _lich_su_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_4__["PhieuInLichSuKhamQueryInfo"]();
                    objQueryInfo.YeuCauTiepNhanId = dataItem.YeuCauTiepNhanId;
                    objQueryInfo.Hosting = this.hosting;
                    objQueryInfo.HienLichSuNoiTru = dataItem.HienLichSuNoiTru;
                    this.getThongTinPhieuInLichSuKham(objQueryInfo);
                };
                LichSuKhamChuaBenhListComponent.prototype.chonChiTietCanIn = function (dataItem, parent) {
                    var objQueryInfo = new _lich_su_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_4__["PhieuInLichSuKhamQueryInfo"]();
                    objQueryInfo.YeuCauTiepNhanId = parent.YeuCauTiepNhanId;
                    objQueryInfo.LoaiLichSuKhamChuaBenh = dataItem.LoaiLichSuKhamChuaBenh;
                    objQueryInfo.LoaiLichSuKhamChuaBenhChiTiet = dataItem.LoaiLichSuKhamChuaBenhChiTiet;
                    objQueryInfo.YeuCauDichVuId = dataItem.YeuCauDichVuId;
                    objQueryInfo.NoiTruBenhAnId = dataItem.NoiTruBenhAnId;
                    objQueryInfo.LoaiHoSoDieuTriNoiTru = dataItem.LoaiHoSoDieuTriNoiTru;
                    objQueryInfo.HienLichSuNoiTru = parent.HienLichSuNoiTru;
                    objQueryInfo.Hosting = this.hosting;
                    objQueryInfo.NoiTruHoSoKhacId = dataItem.NoiTruHoSoKhacId;
                    this.getThongTinPhieuInLichSuKham(objQueryInfo);
                };
                LichSuKhamChuaBenhListComponent.prototype.getThongTinPhieuInLichSuKham = function (objQueryInfo) {
                    var _this = this;
                    this.showPopupLoadingData();
                    this.apiService.postExportPdf('LichSuKhamChuaBenh/GetFilePDFLichSuKhamChuaBenhFromHtml', objQueryInfo).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        _this.fileUrl = datalocalURL;
                        _this.filePdf = file;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message !== 'Validation Failed') {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                return LichSuKhamChuaBenhListComponent;
            }());
            LichSuKhamChuaBenhListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] }
            ]; };
            LichSuKhamChuaBenhListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lich-su-kham-chua-benh-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-kham-chua-benh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_15__["fadeInUp400ms"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-kham-chua-benh-list.component.scss */ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.scss")).default]
                })
            ], LichSuKhamChuaBenhListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.scss": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.scss ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgvbGljaC1zdS1raGFtLWNodWEtYmVuaC9saWNoLXN1LWtoYW0tY2h1YS1iZW5oLW5ndW9pLWJlbmgtcG9wdXAvbGljaC1zdS1raGFtLWNodWEtYmVuaC1uZ3VvaS1iZW5oLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.ts": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.ts ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: LichSuKhamChuaBenhNguoiBenhPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuKhamChuaBenhNguoiBenhPopupComponent", function () { return LichSuKhamChuaBenhNguoiBenhPopupComponent; });
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
            /* harmony import */ var _lich_su_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lich-su-kham-chua-benh.model */ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh.model.ts");
            var LichSuKhamChuaBenhNguoiBenhPopupComponent = /** @class */ (function () {
                function LichSuKhamChuaBenhNguoiBenhPopupComponent(data, dialogRef, notificationService) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.gridColumns = [];
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].LichSuKhamChuaBenh;
                    this.timKiemNangCaoObj = new _lich_su_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_11__["LichSuKhamChuaBenhTimKiemNangCao"]();
                    this.isScanF1 = false;
                    this.strAdditionalSearchString = "";
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.sort = [
                        {
                            field: "MaBN",
                            dir: "asc",
                        },
                    ];
                    this.urlGetDataGrid = "LichSuKhamChuaBenh/GetDataForGridTimKiemNguoiBenhDaTiepNhan";
                    this.urlGetTotalPageGrid = "LichSuKhamChuaBenh/GetTotalPageForGridTimKiemNguoiBenhDaTiepNhan";
                }
                LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype.ngOnInit = function () {
                    var hasLocalSearchString = false;
                    var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].getItem("additionalSearchStringLichSuKhamChuaBenh");
                    if (additionalSearchString != null) {
                        this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                        if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
                            this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
                        }
                        if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
                            this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
                        }
                        this.gridTimKiem.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                        hasLocalSearchString = true;
                    }
                    if (!hasLocalSearchString) {
                        var now = new Date();
                        var currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                        this.timKiemNangCaoObj.TuNgayDenNgay.startDate = this.timKiemNangCaoObj.TuNgayDenNgay.endDate = currentDate;
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                        this.gridTimKiem.additionalSearchString = this.strAdditionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
                    }
                    this.gridColumns = [
                        { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
                        { Field: "BHYTMaSoThe", Title: "Mã thẻ BHYT", Width: 150, Sortable: true },
                        { Field: "HoTen", Title: "Họ và tên", Width: 150, Sortable: true },
                        { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 120, Sortable: false },
                        { Field: "GioiTinhDisplay", Title: "GT", Width: 60, Sortable: false },
                        { Field: "SoChungMinhThu", Title: "CMND", Width: 150, Sortable: false },
                        { Field: "SoDienThoaiDisplay", Title: "Điện thoại", Width: 120, Sortable: false },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 300, Sortable: false },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
                    ];
                };
                LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype.close = function (answer) {
                    if (answer === void 0) { answer = null; }
                    this.dialogRef.close(answer);
                };
                LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype.chonNguoiBenh = function (dataItem) {
                    this.close(dataItem.Id);
                };
                LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype.searchChanges = function (event) {
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
                LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    this.timKiemNangCao();
                };
                LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype.timKiemNangCao = function () {
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    this.gridTimKiem._additionalSearchString = this.strAdditionalSearchString = queryString;
                    this.gridTimKiem.search();
                };
                LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype.changeQR = function (event) {
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
                return LichSuKhamChuaBenhNguoiBenhPopupComponent;
            }());
            LichSuKhamChuaBenhNguoiBenhPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], { static: true })
            ], LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype, "gridTimKiem", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], LichSuKhamChuaBenhNguoiBenhPopupComponent.prototype, "actionTemplate", void 0);
            LichSuKhamChuaBenhNguoiBenhPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lich-su-kham-chua-benh-nguoi-benh-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-kham-chua-benh-nguoi-benh-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-kham-chua-benh-nguoi-benh-popup.component.scss */ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], LichSuKhamChuaBenhNguoiBenhPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-routing.module.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-routing.module.ts ***!
          \********************************************************************************************************/
        /*! exports provided: LichSuKhamChuaBenhRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuKhamChuaBenhRoutingModule", function () { return LichSuKhamChuaBenhRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _lich_su_kham_chua_benh_list_lich_su_kham_chua_benh_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component */ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _lich_su_kham_chua_benh_list_lich_su_kham_chua_benh_list_component__WEBPACK_IMPORTED_MODULE_6__["LichSuKhamChuaBenhListComponent"],
                    data: {
                        title: "Lịch sử khám chữa bệnh",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].LichSuKhamChuaBenh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
            ];
            var LichSuKhamChuaBenhRoutingModule = /** @class */ (function () {
                function LichSuKhamChuaBenhRoutingModule() {
                }
                return LichSuKhamChuaBenhRoutingModule;
            }());
            LichSuKhamChuaBenhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], LichSuKhamChuaBenhRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh.model.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh.model.ts ***!
          \***********************************************************************************************/
        /*! exports provided: LichSuKhamChuaBenhTimKiemNangCao, LichSuKhamChuaBenhTimKiemTuNgayDenNgay, PhieuInLichSuKhamQueryInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuKhamChuaBenhTimKiemNangCao", function () { return LichSuKhamChuaBenhTimKiemNangCao; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuKhamChuaBenhTimKiemTuNgayDenNgay", function () { return LichSuKhamChuaBenhTimKiemTuNgayDenNgay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuInLichSuKhamQueryInfo", function () { return PhieuInLichSuKhamQueryInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LichSuKhamChuaBenhTimKiemNangCao = /** @class */ (function () {
                function LichSuKhamChuaBenhTimKiemNangCao(SearchString, NamSinh, SoDienThoai, CoQuyenXemKhamBenh, CoQuyenXemCanLamSang, CoQuyenXemYLenh, TuNgayDenNgay) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (CoQuyenXemKhamBenh === void 0) { CoQuyenXemKhamBenh = false; }
                    if (CoQuyenXemCanLamSang === void 0) { CoQuyenXemCanLamSang = false; }
                    if (CoQuyenXemYLenh === void 0) { CoQuyenXemYLenh = false; }
                    if (TuNgayDenNgay === void 0) { TuNgayDenNgay = new LichSuKhamChuaBenhTimKiemTuNgayDenNgay(); }
                    this.SearchString = SearchString;
                    this.NamSinh = NamSinh;
                    this.SoDienThoai = SoDienThoai;
                    this.CoQuyenXemKhamBenh = CoQuyenXemKhamBenh;
                    this.CoQuyenXemCanLamSang = CoQuyenXemCanLamSang;
                    this.CoQuyenXemYLenh = CoQuyenXemYLenh;
                    this.TuNgayDenNgay = TuNgayDenNgay;
                }
                return LichSuKhamChuaBenhTimKiemNangCao;
            }());
            var LichSuKhamChuaBenhTimKiemTuNgayDenNgay = /** @class */ (function () {
                function LichSuKhamChuaBenhTimKiemTuNgayDenNgay(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return LichSuKhamChuaBenhTimKiemTuNgayDenNgay;
            }());
            var PhieuInLichSuKhamQueryInfo = /** @class */ (function () {
                function PhieuInLichSuKhamQueryInfo(YeuCauTiepNhanId, LoaiLichSuKhamChuaBenh, LoaiLichSuKhamChuaBenhChiTiet, YeuCauDichVuId, NoiTruBenhAnId, LoaiHoSoDieuTriNoiTru, // ở BE là enum
                NoiTruHoSoKhacId, Hosting, HienLichSuNoiTru) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (LoaiLichSuKhamChuaBenh === void 0) { LoaiLichSuKhamChuaBenh = null; }
                    if (LoaiLichSuKhamChuaBenhChiTiet === void 0) { LoaiLichSuKhamChuaBenhChiTiet = null; }
                    if (YeuCauDichVuId === void 0) { YeuCauDichVuId = null; }
                    if (NoiTruBenhAnId === void 0) { NoiTruBenhAnId = null; }
                    if (LoaiHoSoDieuTriNoiTru === void 0) { LoaiHoSoDieuTriNoiTru = null; }
                    if (NoiTruHoSoKhacId === void 0) { NoiTruHoSoKhacId = null; }
                    if (Hosting === void 0) { Hosting = null; }
                    if (HienLichSuNoiTru === void 0) { HienLichSuNoiTru = false; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.LoaiLichSuKhamChuaBenh = LoaiLichSuKhamChuaBenh;
                    this.LoaiLichSuKhamChuaBenhChiTiet = LoaiLichSuKhamChuaBenhChiTiet;
                    this.YeuCauDichVuId = YeuCauDichVuId;
                    this.NoiTruBenhAnId = NoiTruBenhAnId;
                    this.LoaiHoSoDieuTriNoiTru = LoaiHoSoDieuTriNoiTru;
                    this.NoiTruHoSoKhacId = NoiTruHoSoKhacId;
                    this.Hosting = Hosting;
                    this.HienLichSuNoiTru = HienLichSuNoiTru;
                }
                return PhieuInLichSuKhamQueryInfo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh.module.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh.module.ts ***!
          \************************************************************************************************/
        /*! exports provided: LichSuKhamChuaBenhModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuKhamChuaBenhModule", function () { return LichSuKhamChuaBenhModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _lich_su_kham_chua_benh_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lich-su-kham-chua-benh-routing.module */ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-routing.module.ts");
            /* harmony import */ var _lich_su_kham_chua_benh_list_lich_su_kham_chua_benh_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component */ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component.ts");
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
            /* harmony import */ var _lich_su_kham_chua_benh_nguoi_benh_popup_lich_su_kham_chua_benh_nguoi_benh_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component */ "./src/app/modules/main/kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component.ts");
            var LichSuKhamChuaBenhModule = /** @class */ (function () {
                function LichSuKhamChuaBenhModule() {
                }
                return LichSuKhamChuaBenhModule;
            }());
            LichSuKhamChuaBenhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_lich_su_kham_chua_benh_list_lich_su_kham_chua_benh_list_component__WEBPACK_IMPORTED_MODULE_4__["LichSuKhamChuaBenhListComponent"], _lich_su_kham_chua_benh_nguoi_benh_popup_lich_su_kham_chua_benh_nguoi_benh_popup_component__WEBPACK_IMPORTED_MODULE_17__["LichSuKhamChuaBenhNguoiBenhPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _lich_su_kham_chua_benh_routing_module__WEBPACK_IMPORTED_MODULE_3__["LichSuKhamChuaBenhRoutingModule"],
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
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]
                    ],
                    entryComponents: [
                        _lich_su_kham_chua_benh_nguoi_benh_popup_lich_su_kham_chua_benh_nguoi_benh_popup_component__WEBPACK_IMPORTED_MODULE_17__["LichSuKhamChuaBenhNguoiBenhPopupComponent"]
                    ]
                })
            ], LichSuKhamChuaBenhModule);
            /***/ 
        }),
        /***/ "./src/app/shared/enum/kham-benh.enum.ts": 
        /*!***********************************************!*\
          !*** ./src/app/shared/enum/kham-benh.enum.ts ***!
          \***********************************************/
        /*! exports provided: LoaiHangDoi, TrangThaiHangDoi, TrangThaiYeuCauDichVuKyThuat, TrangThaiYeuCauKhamBenh, EnumNhomGoiDichVu, EnumTypeLoadingData, EnumTypeComponent, LoaiDichVuKyThuat, LoaiPhieuIn, EnumTrangThaiYeuCauTiepNhan */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiHangDoi", function () { return LoaiHangDoi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiHangDoi", function () { return TrangThaiHangDoi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiYeuCauDichVuKyThuat", function () { return TrangThaiYeuCauDichVuKyThuat; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiYeuCauKhamBenh", function () { return TrangThaiYeuCauKhamBenh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumNhomGoiDichVu", function () { return EnumNhomGoiDichVu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumTypeLoadingData", function () { return EnumTypeLoadingData; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumTypeComponent", function () { return EnumTypeComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiDichVuKyThuat", function () { return LoaiDichVuKyThuat; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiPhieuIn", function () { return LoaiPhieuIn; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumTrangThaiYeuCauTiepNhan", function () { return EnumTrangThaiYeuCauTiepNhan; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LoaiHangDoi;
            (function (LoaiHangDoi) {
                LoaiHangDoi[LoaiHangDoi["ChuanBiKham"] = 1] = "ChuanBiKham";
                LoaiHangDoi[LoaiHangDoi["LamChiDinh"] = 2] = "LamChiDinh";
                LoaiHangDoi[LoaiHangDoi["DoiKetLuan"] = 3] = "DoiKetLuan";
            })(LoaiHangDoi || (LoaiHangDoi = {}));
            var TrangThaiHangDoi;
            (function (TrangThaiHangDoi) {
                TrangThaiHangDoi[TrangThaiHangDoi["ChoKham"] = 1] = "ChoKham";
                TrangThaiHangDoi[TrangThaiHangDoi["DangKham"] = 2] = "DangKham";
            })(TrangThaiHangDoi || (TrangThaiHangDoi = {}));
            var TrangThaiYeuCauDichVuKyThuat;
            (function (TrangThaiYeuCauDichVuKyThuat) {
                //ChuaDongTien = 0,
                TrangThaiYeuCauDichVuKyThuat[TrangThaiYeuCauDichVuKyThuat["ChuaThucHien"] = 1] = "ChuaThucHien";
                TrangThaiYeuCauDichVuKyThuat[TrangThaiYeuCauDichVuKyThuat["DangThucHien"] = 2] = "DangThucHien";
                TrangThaiYeuCauDichVuKyThuat[TrangThaiYeuCauDichVuKyThuat["DaThucHien"] = 3] = "DaThucHien";
                TrangThaiYeuCauDichVuKyThuat[TrangThaiYeuCauDichVuKyThuat["DaHuy"] = 4] = "DaHuy";
            })(TrangThaiYeuCauDichVuKyThuat || (TrangThaiYeuCauDichVuKyThuat = {}));
            var TrangThaiYeuCauKhamBenh;
            (function (TrangThaiYeuCauKhamBenh) {
                TrangThaiYeuCauKhamBenh[TrangThaiYeuCauKhamBenh["ChuaKham"] = 1] = "ChuaKham";
                TrangThaiYeuCauKhamBenh[TrangThaiYeuCauKhamBenh["DangKham"] = 2] = "DangKham";
                TrangThaiYeuCauKhamBenh[TrangThaiYeuCauKhamBenh["DangLamChiDinh"] = 3] = "DangLamChiDinh";
                TrangThaiYeuCauKhamBenh[TrangThaiYeuCauKhamBenh["DangDoiKetLuan"] = 4] = "DangDoiKetLuan";
                TrangThaiYeuCauKhamBenh[TrangThaiYeuCauKhamBenh["DaKham"] = 5] = "DaKham";
                TrangThaiYeuCauKhamBenh[TrangThaiYeuCauKhamBenh["HuyKham"] = 6] = "HuyKham";
            })(TrangThaiYeuCauKhamBenh || (TrangThaiYeuCauKhamBenh = {}));
            var EnumNhomGoiDichVu;
            (function (EnumNhomGoiDichVu) {
                EnumNhomGoiDichVu[EnumNhomGoiDichVu["DichVuKhamBenh"] = 1] = "DichVuKhamBenh";
                EnumNhomGoiDichVu[EnumNhomGoiDichVu["DichVuKyThuat"] = 2] = "DichVuKyThuat";
                EnumNhomGoiDichVu[EnumNhomGoiDichVu["VatTuTieuHao"] = 3] = "VatTuTieuHao";
                EnumNhomGoiDichVu[EnumNhomGoiDichVu["DuocPham"] = 4] = "DuocPham";
                EnumNhomGoiDichVu[EnumNhomGoiDichVu["DichVuGiuongBenh"] = 5] = "DichVuGiuongBenh";
                EnumNhomGoiDichVu[EnumNhomGoiDichVu["DonThuocThanhToan"] = 6] = "DonThuocThanhToan";
            })(EnumNhomGoiDichVu || (EnumNhomGoiDichVu = {}));
            var EnumTypeLoadingData;
            (function (EnumTypeLoadingData) {
                EnumTypeLoadingData[EnumTypeLoadingData["View"] = 1] = "View";
                EnumTypeLoadingData[EnumTypeLoadingData["Update"] = 2] = "Update";
                EnumTypeLoadingData[EnumTypeLoadingData["Delete"] = 3] = "Delete";
                EnumTypeLoadingData[EnumTypeLoadingData["Cancel"] = 4] = "Cancel";
                EnumTypeLoadingData[EnumTypeLoadingData["Add"] = 5] = "Add";
            })(EnumTypeLoadingData || (EnumTypeLoadingData = {}));
            var EnumTypeComponent;
            (function (EnumTypeComponent) {
                EnumTypeComponent[EnumTypeComponent["KInput"] = 1] = "KInput";
                EnumTypeComponent[EnumTypeComponent["KDropdown"] = 2] = "KDropdown";
                EnumTypeComponent[EnumTypeComponent["KTextBox"] = 3] = "KTextBox";
            })(EnumTypeComponent || (EnumTypeComponent = {}));
            var LoaiDichVuKyThuat;
            (function (LoaiDichVuKyThuat) {
                LoaiDichVuKyThuat[LoaiDichVuKyThuat["ThuThuatPhauThuat"] = 1] = "ThuThuatPhauThuat";
                LoaiDichVuKyThuat[LoaiDichVuKyThuat["XetNghiem"] = 2] = "XetNghiem";
                LoaiDichVuKyThuat[LoaiDichVuKyThuat["ChuanDoanHinhAnh"] = 3] = "ChuanDoanHinhAnh";
                LoaiDichVuKyThuat[LoaiDichVuKyThuat["ThamDoChucNang"] = 4] = "ThamDoChucNang";
                LoaiDichVuKyThuat[LoaiDichVuKyThuat["TheoYeuCau"] = 5] = "TheoYeuCau";
                LoaiDichVuKyThuat[LoaiDichVuKyThuat["Khac"] = 6] = "Khac";
            })(LoaiDichVuKyThuat || (LoaiDichVuKyThuat = {}));
            var LoaiPhieuIn;
            (function (LoaiPhieuIn) {
                LoaiPhieuIn[LoaiPhieuIn["InPhieuChiDinh"] = 1] = "InPhieuChiDinh";
                LoaiPhieuIn[LoaiPhieuIn["InDonThuocBHYT"] = 2] = "InDonThuocBHYT";
                LoaiPhieuIn[LoaiPhieuIn["InDonThuocNhaThuoc"] = 3] = "InDonThuocNhaThuoc";
                LoaiPhieuIn[LoaiPhieuIn["InPhieuKhamBenh"] = 4] = "InPhieuKhamBenh";
                LoaiPhieuIn[LoaiPhieuIn["InPhieuKhamBenhVaoVien"] = 5] = "InPhieuKhamBenhVaoVien";
            })(LoaiPhieuIn || (LoaiPhieuIn = {}));
            var EnumTrangThaiYeuCauTiepNhan;
            (function (EnumTrangThaiYeuCauTiepNhan) {
                EnumTrangThaiYeuCauTiepNhan[EnumTrangThaiYeuCauTiepNhan["DangThucHien"] = 1] = "DangThucHien";
                EnumTrangThaiYeuCauTiepNhan[EnumTrangThaiYeuCauTiepNhan["DaHoanTat"] = 2] = "DaHoanTat";
                EnumTrangThaiYeuCauTiepNhan[EnumTrangThaiYeuCauTiepNhan["DaHuy"] = 3] = "DaHuy";
            })(EnumTrangThaiYeuCauTiepNhan || (EnumTrangThaiYeuCauTiepNhan = {}));
            /***/ 
        }),
        /***/ "./src/app/shared/enum/lich-su-kham-chua-benh.enum.ts": 
        /*!************************************************************!*\
          !*** ./src/app/shared/enum/lich-su-kham-chua-benh.enum.ts ***!
          \************************************************************/
        /*! exports provided: LoaiLichSuKhamChuaBenh, LoaiLichSuKhamChuaBenhChiTiet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiLichSuKhamChuaBenh", function () { return LoaiLichSuKhamChuaBenh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiLichSuKhamChuaBenhChiTiet", function () { return LoaiLichSuKhamChuaBenhChiTiet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LoaiLichSuKhamChuaBenh;
            (function (LoaiLichSuKhamChuaBenh) {
                LoaiLichSuKhamChuaBenh[LoaiLichSuKhamChuaBenh["KhamBenh"] = 1] = "KhamBenh";
                LoaiLichSuKhamChuaBenh[LoaiLichSuKhamChuaBenh["CanLamSang"] = 2] = "CanLamSang";
                LoaiLichSuKhamChuaBenh[LoaiLichSuKhamChuaBenh["YLenh"] = 3] = "YLenh";
            })(LoaiLichSuKhamChuaBenh || (LoaiLichSuKhamChuaBenh = {}));
            var LoaiLichSuKhamChuaBenhChiTiet;
            (function (LoaiLichSuKhamChuaBenhChiTiet) {
                LoaiLichSuKhamChuaBenhChiTiet[LoaiLichSuKhamChuaBenhChiTiet["DichVuKhamBenh"] = 1] = "DichVuKhamBenh";
                LoaiLichSuKhamChuaBenhChiTiet[LoaiLichSuKhamChuaBenhChiTiet["DichVuCDHATDCN"] = 2] = "DichVuCDHATDCN";
                LoaiLichSuKhamChuaBenhChiTiet[LoaiLichSuKhamChuaBenhChiTiet["DichVuXetNghiem"] = 3] = "DichVuXetNghiem";
                LoaiLichSuKhamChuaBenhChiTiet[LoaiLichSuKhamChuaBenhChiTiet["PhieuDieuTri"] = 4] = "PhieuDieuTri";
                LoaiLichSuKhamChuaBenhChiTiet[LoaiLichSuKhamChuaBenhChiTiet["PhieuChamSoc"] = 5] = "PhieuChamSoc";
                LoaiLichSuKhamChuaBenhChiTiet[LoaiLichSuKhamChuaBenhChiTiet["HoSoKhac"] = 6] = "HoSoKhac";
                LoaiLichSuKhamChuaBenhChiTiet[LoaiLichSuKhamChuaBenhChiTiet["DonThuoc"] = 7] = "DonThuoc";
                LoaiLichSuKhamChuaBenhChiTiet[LoaiLichSuKhamChuaBenhChiTiet["DonVatTu"] = 8] = "DonVatTu";
            })(LoaiLichSuKhamChuaBenhChiTiet || (LoaiLichSuKhamChuaBenhChiTiet = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=kham-benh-lich-su-kham-chua-benh-lich-su-kham-chua-benh-module-es2015.js.map
//# sourceMappingURL=kham-benh-lich-su-kham-chua-benh-lich-su-kham-chua-benh-module-es5.js.map
//# sourceMappingURL=kham-benh-lich-su-kham-chua-benh-lich-su-kham-chua-benh-module-es5.js.map