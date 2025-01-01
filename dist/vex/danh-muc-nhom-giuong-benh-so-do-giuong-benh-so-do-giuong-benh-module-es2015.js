(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-giuong-benh-so-do-giuong-benh-so-do-giuong-benh-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Danh Mục',Path:''}\n                ,{Title:'Nhóm Giường Bệnh',Path:''}\n                ,{Title:'Tình Trạng Giường Bệnh',Path:'/danh-muc/nhom-giuong-benh/so-do-giuong-benh/', Active: true}\n                ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\n        <div class=\"card overflow-auto -mt-15\">            \n\n            <app-grid baseRoute=\"danh-muc/nhom-giuong-benh/so-do-giuong-benh\" [headerTemplate]=\"headerTemplate\"\n                [useHeaderDefault]=\"false\" [lazyLoadPage]=\"true\" [gridColumns]=\"gridColumns\" (getDataSource)=\"getDataSource($event)\"\n                [documentType]=\"documentType\" [checkboxAble]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\">\n            </app-grid>\n\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-combobox id=\"KhoaId\" fxFlex=\"300px\" hierarchyKeyToSend=\"khoa\" class=\"on-header item-no-padding\"\n                        popupSettings=\"null\" [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" label=\"Khoa\"\n                        url=\"GiuongBenh/GetListKhoaPhong\" bind=\"true\" [(model)]=\"soDoGiuongBenhSearch.PhongId\"\n                        (modelChange)=\"khoaChange($event)\"\n                        style=\"margin-left: 5px;margin-top: 20px;\">\n                    </app-combobox>\n                    <ng-template #khoaTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"20%\">Mã</th>\n                                <th>Tên</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #khoaTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                <td>{{dataItem.Ten}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n\n                    <div class=\"button-export\">\n                    \n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                            title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <button (click)=\"exportExcel()\" class=\"mr-6\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\"\n                            type=\"button\">\n                            <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                        </button>\n                    \n                    \n                    \n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    \n                    </div>\n                </div>\n            </ng-template>\n\n            <ng-template #soDoGiuongTemplate let-dataItem>\n                <div style=\"width: 100; text-align: center;\">\n                    <button (click)=\"Xem(dataItem)\" mat-raised-button color=\"primary\" type=\"button\">\n                        Xem\n                    </button>\n                </div>\n            </ng-template>\n\n\n            <ng-template #khoaFooterTemplate let-dataItem>\n                <span style=\"float:right\">Tổng:</span>\n            </ng-template>\n\n            <ng-template #giuongTrongFooteremplate let-aggregates>\n                {{totalGiuongTrong}}\n            </ng-template>\n\n            <ng-template #giuongCoBenhNhanFooteremplate let-aggregates>\n                {{totalGiuongCoBenhNhan}}\n            </ng-template>\n\n            <ng-template #giuongBenhCuaKhoaFooteremplate let-aggregates>\n                {{totalTongGiuongBenhCuaKhoa}}\n            </ng-template>\n\n        </div>\n\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Danh Mục',Path:''}\n            ,{Title:'Nhóm Giường Bệnh',Path:''}\n            ,{Title:'Tình Trạng Giường Bệnh',Path:'/danh-muc/nhom-giuong-benh/so-do-giuong-benh/'}\n            ,{Title:'Quản Lý Giường Bệnh Tại Khoa: '+tenKhoa,Path:'', Active: true}\n            ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n\n            <app-grid baseRoute=\"danh-muc/nhom-giuong-benh/so-do-giuong-benh\" [headerTemplate]=\"headerTemplate\"\n                [urlGetData]=\"urlData\" [urlGetTotalPage]=\"urlTotal\"\n                [useHeaderDefault]=\"false\" [lazyLoadPage]=\"true\" [gridColumns]=\"gridColumns\" (getDataSource)=\"getDataSource($event)\"\n                [documentType]=\"documentType\" [checkboxAble]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\">\n            </app-grid>\n\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-combobox id=\"KhoaId\" fxFlex=\"300px\" class=\"on-header item-no-padding\"\n                        popupSettings=\"null\" [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" label=\"Phòng\"\n                        url=\"SoDoGiuongBenh/GetListPhong/?khoaId={{id}}\" bind=\"true\" [(model)]=\"soDoGiuongBenhSearch.PhongId\"\n                        (modelChange)=\"khoaChange($event)\"\n                        style=\"margin-left: 5px;margin-top: 20px;\">\n                    </app-combobox>\n                    <ng-template #khoaTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"20%\">Mã</th>\n                                <th>Tên</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #khoaTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                <td>{{dataItem.Ten}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n\n                    <div style=\"width: 100%; text-align: right;\">\n                        <button type=\"button\" color=\"primary\" (click)=\"quayLai()\" class=\"ml-2\"\n                        mat-raised-button>\n                            Quay lại\n                        </button>\n                    </div>\n                </div>\n            </ng-template>\n\n            <ng-template #phongTemplate let-dataItem>\n                <a (click)=\"Xem(dataItem)\" style=\"width: 100; text-align: center;\">\n                    {{dataItem.Ten}}\n                </a>\n            </ng-template>\n\n\n            <ng-template #khoaFooterTemplate let-dataItem>\n                <span style=\"float:right\">Tổng:</span>\n            </ng-template>\n\n            <ng-template #giuongTrongFooteremplate let-aggregates>\n                {{totalGiuongTrong}}\n            </ng-template>\n\n            <ng-template #giuongCoBenhNhanFooteremplate let-aggregates>\n                {{totalGiuongCoBenhNhan}}\n            </ng-template>\n\n            <ng-template #giuongBenhCuaKhoaFooteremplate let-aggregates>\n                {{totalTongGiuongBenhCuaKhoa}}\n            </ng-template>\n\n        </div>\n\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Danh Mục',Path:''}\n            ,{Title:'Nhóm Giường Bệnh',Path:''}\n            ,{Title:'Tình Trạng Giường Bệnh',Path:'/danh-muc/nhom-giuong-benh/so-do-giuong-benh/'}\n            ,{Title:'Quản Lý Giường Bệnh Tại Phòng: '+maTenPhong +' - Khoa: '+tenKhoa,Path:'', Active: true}\n            ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"danh-muc/nhom-giuong-benh/so-do-giuong-benh\" [headerTemplate]=\"headerTemplate\"\n                [urlGetData]=\"urlData\" [urlGetTotalPage]=\"urlTotal\" (getDataSource)=\"getDataSource($event)\"\n                [useHeaderDefault]=\"false\" [lazyLoadPage]=\"true\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [checkboxAble]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" heightToolbar=\"195\">\n            </app-grid>\n\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <div class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            (ngModelChange)=\"clearSearch($event)\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\" (blur)=\"blur()\"\n                            placeholder=\"Nhập tên giường, tên NB\" />\n                    </div>\n                   \n\n                    <div style=\"width: 100%; text-align: right;\">\n                        <button type=\"button\" color=\"primary\" (click)=\"quayLai()\" class=\"ml-2\"\n                        mat-raised-button>\n                            Quay lại\n                        </button>\n                    </div>\n                </div>\n            </ng-template>\n\n            <!-- <div #testTemplate> -->\n                <ng-template #benhNhanTemplate let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 1)}}\">\n                            {{displayFieldBenhNhan(dataItem, 1)}}\n                        </div>\n                    </div>\n                </ng-template>\n\n                <ng-template #benhNhan2Template let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 2)}}\">\n                            {{displayFieldBenhNhan(dataItem, 2)}}\n                        </div>\n                    </div>\n                </ng-template>\n\n                <ng-template #benhNhan3Template let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 3)}}\">\n                            {{displayFieldBenhNhan(dataItem, 3)}}\n                        </div>\n                    </div>\n                </ng-template>\n\n                <ng-template #benhNhan4Template let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 4)}}\">\n                            {{displayFieldBenhNhan(dataItem, 4)}}\n                        </div>\n                    </div>\n                </ng-template>\n\n                <ng-template #benhNhan5Template let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 5)}}\">\n                            {{displayFieldBenhNhan(dataItem, 5)}}\n                        </div>\n                    </div>\n                </ng-template>\n\n                <ng-template #benhNhan6Template let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 6)}}\">\n                            {{displayFieldBenhNhan(dataItem, 6)}}\n                        </div>\n                    </div>\n                </ng-template>\n\n                <ng-template #benhNhan7Template let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 7)}}\">\n                            {{displayFieldBenhNhan(dataItem, 7)}}\n                        </div>\n                    </div>\n                </ng-template>\n\n                <ng-template #benhNhan8Template let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 8)}}\">\n                            {{displayFieldBenhNhan(dataItem, 8)}}\n                        </div>\n                    </div>\n                </ng-template>\n\n                <ng-template #benhNhan9Template let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 9)}}\">\n                            {{displayFieldBenhNhan(dataItem, 9)}}\n                        </div>\n                    </div>\n                </ng-template>\n\n                <ng-template #benhNhan10Template let-dataItem let-rowIndex>\n                    <div>\n                        <div class=\"tip\" title=\"{{setTitle(dataItem, 10)}}\">\n                            {{displayFieldBenhNhan(dataItem, 10)}}\n                        </div>\n                    </div>\n                </ng-template>\n            <!-- </div> -->\n\n            <!-- <ng-template #phongTemplate let-dataItem>\n                <a (click)=\"Xem(dataItem)\" style=\"width: 100; text-align: center;\">\n                    {{dataItem.Ten}}\n                </a>\n            </ng-template>\n\n\n            <ng-template #khoaFooterTemplate let-dataItem>\n                <span style=\"float:right\">Tổng:</span>\n            </ng-template>\n\n            <ng-template #giuongTrongFooteremplate let-aggregates>\n                {{totalGiuongTrong}}\n            </ng-template>\n\n            <ng-template #giuongCoBenhNhanFooteremplate let-aggregates>\n                {{totalGiuongCoBenhNhan}}\n            </ng-template>\n\n            <ng-template #giuongBenhCuaKhoaFooteremplate let-aggregates>\n                {{totalTongGiuongBenhCuaKhoa}}\n            </ng-template> -->\n\n            \n\n        <div>\n            <div class=\"styleTinhTong\">\n                <ul class=\"inline\">\n                    <li class=\"styleLI\">Tổng số giường: <strong>{{getTotalBottomGrid(1)}}</strong>\n                    </li>\n                    <li class=\"styleLI\">Tổng số giường trống: <strong>{{getTotalBottomGrid(2)}}</strong>\n                    </li>\n                    <li class=\"styleLI\">Tổng số giường có NB: <strong>{{getTotalBottomGrid(3)}}</strong>\n                    </li>\n                    <li>Tổng số giường nằm ghép: <strong>{{getTotalBottomGrid(4)}}</strong>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n        </div>\n\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" style=\"border-bottom-width: 1px;\">\n    <div>Sơ Đồ Giường Bệnh Tại {{tenKhoa}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<!-- <mat-dialog-content> -->\n    <div fxLayout=\"row wrap\">\n        <app-combobox id=\"phongId\" fxFlex=\"40%\" class=\"item-no-padding\"\n            [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" label=\"Phòng\"\n            url=\"SoDoGiuongBenh/GetListPhongForPopup/?khoaId={{khoaId}}\" bind=\"true\" [(model)]=\"phongId\"\n            (modelChange)=\"phongChange($event)\">\n        </app-combobox>\n        <ng-template #khoaTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #khoaTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n\n        <div fxFlex=\"5%\">\n\n        </div>\n\n        <app-checkbox class=\"color-green\" style=\"padding: 35px 0px 0px 20px;\" id=\"GiuongTrong\" fxFlex=\"20%\"\n            label=\"Giường trống\" model=\"giuongTrong\" (modelChange)=\"giuongTrongChange($event)\">\n        </app-checkbox>\n\n        <app-checkbox class=\"color-red\" style=\"padding: 35px 0px 0px 20px;\" id=\"GiuongDaCoBN\" fxFlex=\"20%\"\n            label=\"Giường đã có NB\" model=\"giuongDaCoBenhNhan\" (modelChange)=\"giuongDaCoBenhNhanChange($event)\">\n        </app-checkbox>\n    </div>\n\n\n    <div class=\"div-giuong\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n        *ngFor=\"let item of resultGiuong.lstPhong; let i = index\">\n        <span style=\"font-weight: 500\">\n            {{item.DisplayName}}\n        </span>\n\n        <div fxLayout=\"row wrap\" fxLayout.lt-md=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n            *ngFor=\"let itemChild of resultGiuong.lstPhong[i].lstGiuong\">\n\n            <div *ngIf=\"(itemChild.IsGiuongTrong == true && giuongTrong == true) || (itemChild.IsGiuongTrong == false && giuongDaCoBenhNhan == true)\" class=\"div-item-giuong\" [ngStyle]=\"{'background-color':itemChild.IsGiuongTrong == true  ? 'green' : 'red' }\">\n                {{itemChild.TenGiuong}} | {{itemChild.SoBenhNhan}}\n            </div>\n        </div>\n\n    </div>\n<!-- </mat-dialog-content> -->");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-list-page {\n  margin: 15px 15px 15px 15px;\n}\n\n.button-export {\n  width: 100%;\n  display: block !important;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvcXVhbi1seS1naXVvbmctYmVuaC1raG9hL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcZGFuaC1tdWNcXG5ob20tZ2l1b25nLWJlbmhcXHNvLWRvLWdpdW9uZy1iZW5oXFxxdWFuLWx5LWdpdW9uZy1iZW5oLWtob2FcXHF1YW4tbHktZ2l1b25nLWJlbmgta2hvYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvcXVhbi1seS1naXVvbmctYmVuaC1raG9hL3F1YW4tbHktZ2l1b25nLWJlbmgta2hvYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvcXVhbi1seS1naXVvbmctYmVuaC1raG9hL3F1YW4tbHktZ2l1b25nLWJlbmgta2hvYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1saXN0LXBhZ2Uge1xuICBtYXJnaW46IDE1cHggMTVweCAxNXB4IDE1cHg7XG59XG5cbi5idXR0b24tZXhwb3J0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSIsIi50aXRsZS1saXN0LXBhZ2Uge1xuICBtYXJnaW46IDE1cHggMTVweCAxNXB4IDE1cHg7XG59XG5cbi5idXR0b24tZXhwb3J0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: QuanLyGiuongBenhKhoaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuanLyGiuongBenhKhoaComponent", function() { return QuanLyGiuongBenhKhoaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _so_do_giuong_benh_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../so-do-giuong-benh.model */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _so_do_giuong_popup_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../so-do-giuong-popup/so-do-giuong-popup.component */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_16__);

















let QuanLyGiuongBenhKhoaComponent = class QuanLyGiuongBenhKhoaComponent {
    constructor(authService, router, notificationService, dialog, apiService) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.gridColumns = [];
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.soDoGiuongBenhSearch = new _so_do_giuong_benh_model__WEBPACK_IMPORTED_MODULE_7__["SoDoGiuongBenhSearchHeader"]();
        //Data footer
        this.totalGiuongTrong = "0";
        this.totalGiuongCoBenhNhan = "0 (0)";
        this.totalTongGiuongBenhCuaKhoa = "0";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].TinhTrangGiuongBenh;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 60 },
            { Field: "Ten", Title: "Khoa", MinWidth: 200, Sortable: true, LinkDetail: true,
                TemplateFooter: this.khoaFooterTemplate },
            { Field: "GiuongTrong", Title: "Giường Trống", Width: 150, Sortable: true,
                TemplateFooter: this.giuongTrongFooteremplate },
            { Field: "GiuongCoBenhNhan", Title: "Giường Có Người Bệnh", Width: 200, Sortable: true,
                TemplateFooter: this.giuongCoBenhNhanFooteremplate },
            { Field: "TongGiuongBenhCuaKhoa", Title: "Tổng Giường Bệnh Của Khoa", Width: 200, Sortable: true,
                TemplateFooter: this.giuongBenhCuaKhoaFooteremplate },
            { Field: "Id", Title: "Sơ Đồ Giường", Width: 100, Template: this.soDoGiuongTemplate },
        ];
    }
    getDataSource(resultData) {
        //console.log("getDataSource = ", resultData);
        if (resultData != null && resultData != undefined && resultData.length > 0) {
            this.totalGiuongTrong = resultData[0].TongSoGiuongTrong;
            this.totalGiuongCoBenhNhan = resultData[0].TongSoGiuongCoBenhNhan + " (" + resultData[0].TongSoGiuongGhep + ")";
            this.totalTongGiuongBenhCuaKhoa = resultData[0].TongSoTongGiuongBenhCuaKhoa;
        }
    }
    khoaChange(event) {
        this.soDoGiuongBenhSearch.KhoaId = event;
        this.TimkiemNangCao();
    }
    TimkiemNangCao() {
        var queryString = JSON.stringify(this.soDoGiuongBenhSearch);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }
    Xem(item) {
        //console.log("Xem = ", item, this.gridChild._gridDataSource.data[0]);
        let dialogRef = this.dialog.open(_so_do_giuong_popup_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_9__["SoDoGiuongPopupComponent"], {
            disableClose: false,
            width: '1000px',
            height: '500px',
            data: item.Id,
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    totalKhac(item) {
        //console.log("totalKhac = ", item);
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("SoDoGiuongBenh/ExportSoDoGiuongBenh", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "SoDoGiuongBenh" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
QuanLyGiuongBenhKhoaComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], QuanLyGiuongBenhKhoaComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soDoGiuongTemplate', { static: true })
], QuanLyGiuongBenhKhoaComponent.prototype, "soDoGiuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoaFooterTemplate', { static: true })
], QuanLyGiuongBenhKhoaComponent.prototype, "khoaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giuongTrongFooteremplate', { static: true })
], QuanLyGiuongBenhKhoaComponent.prototype, "giuongTrongFooteremplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giuongCoBenhNhanFooteremplate', { static: true })
], QuanLyGiuongBenhKhoaComponent.prototype, "giuongCoBenhNhanFooteremplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giuongBenhCuaKhoaFooteremplate', { static: true })
], QuanLyGiuongBenhKhoaComponent.prototype, "giuongBenhCuaKhoaFooteremplate", void 0);
QuanLyGiuongBenhKhoaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quan-ly-giuong-benh-khoa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quan-ly-giuong-benh-khoa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quan-ly-giuong-benh-khoa.component.scss */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.scss")).default]
    })
], QuanLyGiuongBenhKhoaComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-list-page {\n  margin: 15px 15px 15px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvcXVhbi1seS1naXVvbmctYmVuaC1waG9uZy9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGRhbmgtbXVjXFxuaG9tLWdpdW9uZy1iZW5oXFxzby1kby1naXVvbmctYmVuaFxccXVhbi1seS1naXVvbmctYmVuaC1waG9uZ1xccXVhbi1seS1naXVvbmctYmVuaC1waG9uZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvcXVhbi1seS1naXVvbmctYmVuaC1waG9uZy9xdWFuLWx5LWdpdW9uZy1iZW5oLXBob25nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWdpdW9uZy1iZW5oL3NvLWRvLWdpdW9uZy1iZW5oL3F1YW4tbHktZ2l1b25nLWJlbmgtcGhvbmcvcXVhbi1seS1naXVvbmctYmVuaC1waG9uZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1saXN0LXBhZ2Uge1xuICBtYXJnaW46IDE1cHggMTVweCAxNXB4IDE1cHg7XG59IiwiLnRpdGxlLWxpc3QtcGFnZSB7XG4gIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: QuanLyGiuongBenhPhongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuanLyGiuongBenhPhongComponent", function() { return QuanLyGiuongBenhPhongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _so_do_giuong_benh_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../so-do-giuong-benh.model */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.model.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");










let QuanLyGiuongBenhPhongComponent = class QuanLyGiuongBenhPhongComponent {
    constructor(authService, router, notificationService, dialog, route, apiService) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.route = route;
        this.apiService = apiService;
        this.gridColumns = [];
        this.tenKhoa = "";
        this.soDoGiuongBenhSearch = new _so_do_giuong_benh_model__WEBPACK_IMPORTED_MODULE_2__["SoDoGiuongBenhSearchHeader"]();
        //Data footer
        this.totalGiuongTrong = "0";
        this.totalGiuongCoBenhNhan = "0 (0)";
        this.totalTongGiuongBenhCuaKhoa = "0";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TinhTrangGiuongBenh;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 60 },
            { Field: "Ten", Title: "Phòng", MinWidth: 200, Sortable: true, Template: this.phongTemplate,
                TemplateFooter: this.khoaFooterTemplate },
            { Field: "GiuongTrong", Title: "Số Giường Trống", Width: 150, Sortable: true,
                TemplateFooter: this.giuongTrongFooteremplate },
            { Field: "GiuongCoBenhNhan", Title: "Số Giường Có Người Bệnh", Width: 200, Sortable: true,
                TemplateFooter: this.giuongCoBenhNhanFooteremplate },
            { Field: "TongGiuongBenhCuaKhoa", Title: "Tổng Số Giường", Width: 200, Sortable: true,
                TemplateFooter: this.giuongBenhCuaKhoaFooteremplate }
        ];
        this.id = this.route.snapshot.params.id;
        this.getTenKhoa(this.id).then(obj => {
            this.tenKhoa = obj;
        });
        this.urlTotal = "SoDoGiuongBenh/GetTotalPageForGridSoDoGiuongBenhPhongAsync/?khoaId=" + this.id;
        this.urlData = "SoDoGiuongBenh/GetDataForGridSoDoGiuongBenhPhongAsync?khoaId=" + this.id;
    }
    getDataSource(resultData) {
        //console.log("getDataSource = ", resultData);
        if (resultData != null && resultData != undefined && resultData.length > 0) {
            this.totalGiuongTrong = resultData[0].TongSoGiuongTrong;
            this.totalGiuongCoBenhNhan = resultData[0].TongSoGiuongCoBenhNhan + " (" + resultData[0].TongSoGiuongGhep + ")";
            this.totalTongGiuongBenhCuaKhoa = resultData[0].TongSoTongGiuongBenhCuaKhoa;
        }
    }
    khoaChange(event) {
        this.soDoGiuongBenhSearch.KhoaId = event;
        this.TimkiemNangCao();
    }
    TimkiemNangCao() {
        var queryString = JSON.stringify(this.soDoGiuongBenhSearch);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }
    Xem(event) {
        // console.log("event = ", event);
        this.router.navigate(['danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-phong-khoa/' + event.Id + '/' + this.id]);
    }
    quayLai() {
        this.router.navigate(['danh-muc/nhom-giuong-benh/so-do-giuong-benh/']);
    }
    getTenKhoa(id) {
        return this.apiService.post("SoDoGiuongBenh/GetTenKhoa?khoaId=" + id).toPromise().catch(() => "");
    }
};
QuanLyGiuongBenhPhongComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], QuanLyGiuongBenhPhongComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phongTemplate', { static: true })
], QuanLyGiuongBenhPhongComponent.prototype, "phongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoaFooterTemplate', { static: true })
], QuanLyGiuongBenhPhongComponent.prototype, "khoaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giuongTrongFooteremplate', { static: true })
], QuanLyGiuongBenhPhongComponent.prototype, "giuongTrongFooteremplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giuongCoBenhNhanFooteremplate', { static: true })
], QuanLyGiuongBenhPhongComponent.prototype, "giuongCoBenhNhanFooteremplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giuongBenhCuaKhoaFooteremplate', { static: true })
], QuanLyGiuongBenhPhongComponent.prototype, "giuongBenhCuaKhoaFooteremplate", void 0);
QuanLyGiuongBenhPhongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quan-ly-giuong-benh-phong',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quan-ly-giuong-benh-phong.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quan-ly-giuong-benh-phong.component.scss */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.scss")).default]
    })
], QuanLyGiuongBenhPhongComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-list-page {\n  margin: 15px 15px 15px 15px;\n}\n\n.styleTinhTong {\n  border: 1px solid #ccc;\n  padding: 15px;\n  background: #e3f2fd;\n  text-align: left;\n}\n\n.styleLI {\n  padding-right: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvcXVhbi1seS1naXVvbmctYmVuaC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGRhbmgtbXVjXFxuaG9tLWdpdW9uZy1iZW5oXFxzby1kby1naXVvbmctYmVuaFxccXVhbi1seS1naXVvbmctYmVuaFxccXVhbi1seS1naXVvbmctYmVuaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvcXVhbi1seS1naXVvbmctYmVuaC9xdWFuLWx5LWdpdW9uZy1iZW5oLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vZGFuaC1tdWMvbmhvbS1naXVvbmctYmVuaC9zby1kby1naXVvbmctYmVuaC9xdWFuLWx5LWdpdW9uZy1iZW5oL3F1YW4tbHktZ2l1b25nLWJlbmguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtbGlzdC1wYWdlIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAxNXB4O1xufVxuXG4uc3R5bGVUaW5oVG9uZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdHlsZUxJIHtcbiAgcGFkZGluZy1yaWdodDogMTAwcHggIWltcG9ydGFudDtcbn0iLCIudGl0bGUtbGlzdC1wYWdlIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAxNXB4O1xufVxuXG4uc3R5bGVUaW5oVG9uZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdHlsZUxJIHtcbiAgcGFkZGluZy1yaWdodDogMTAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: QuanLyGiuongBenhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuanLyGiuongBenhComponent", function() { return QuanLyGiuongBenhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _so_do_giuong_benh_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../so-do-giuong-benh.model */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");












let QuanLyGiuongBenhComponent = class QuanLyGiuongBenhComponent {
    constructor(authService, router, notificationService, dialog, route, apiService) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.route = route;
        this.apiService = apiService;
        this.gridColumns = [];
        this.tenKhoa = "";
        this.maTenPhong = "";
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"];
        this.soDoGiuongBenhSearch = new _so_do_giuong_benh_model__WEBPACK_IMPORTED_MODULE_9__["SoDoGiuongBenhSearchHeader"]();
        //Footer template
        // @ViewChild('khoaFooterTemplate', { static: true }) khoaFooterTemplate: TemplateRef<any>;
        // @ViewChild('giuongTrongFooteremplate', { static: true }) giuongTrongFooteremplate: TemplateRef<any>;
        // @ViewChild('giuongCoBenhNhanFooteremplate', { static: true }) giuongCoBenhNhanFooteremplate: TemplateRef<any>;
        // @ViewChild('giuongBenhCuaKhoaFooteremplate', { static: true }) giuongBenhCuaKhoaFooteremplate: TemplateRef<any>;
        //Data footer
        this.totalGiuongTrong = "0";
        this.totalGiuongCoBenhNhan = "0 (0)";
        this.totalTongGiuongBenhCuaKhoa = "0";
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default.a;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].TinhTrangGiuongBenh;
        this.phongId = this.route.snapshot.params.phongId;
        this.khoaId = this.route.snapshot.params.khoaId;
        this.urlTotal = "SoDoGiuongBenh/GetTotalPageForGridSoDoGiuongBenhKhoaPhongAsync/?khoaId=" + this.khoaId + "&phongId=" + this.phongId;
        this.urlData = "SoDoGiuongBenh/GetDataForGridSoDoGiuongBenhKhoaPhongAsync/?khoaId=" + this.khoaId + "&phongId=" + this.phongId;
        this.getTenKhoa(this.khoaId).then(obj => {
            this.tenKhoa = obj;
        });
        this.getMaTenPhong(this.phongId).then(obj => {
            this.maTenPhong = obj;
        });
        this.setDefaultColumnGrid();
        // this.gridColumns.push({ Field: "TongGiuongBenhCuaKhoa", Title: "Tổng Số Giường", Width: 200, Sortable: true,
        // TemplateFooter: this.giuongBenhCuaKhoaFooteremplate });
        //console.log("ngOnInit = ", this.phongId, this.khoaId);
    }
    getTenKhoa(id) {
        return this.apiService.post("SoDoGiuongBenh/GetTenKhoa?khoaId=" + id).toPromise().catch(() => "");
    }
    getMaTenPhong(id) {
        return this.apiService.post("SoDoGiuongBenh/GetMaTenPhong?phongId=" + id).toPromise().catch(() => "");
    }
    getDataSource(resultData) {
        this.setDefaultColumnGrid();
        //console.log("getDataSource = ", resultData);
        let soBenhNhanMax = 0;
        if (resultData != null && resultData != undefined) {
            resultData.forEach(e => {
                if (e.lstBenhNhanGiuong != null && e.lstBenhNhanGiuong != undefined
                    && soBenhNhanMax < e.lstBenhNhanGiuong.length) {
                    soBenhNhanMax = e.lstBenhNhanGiuong.length;
                }
            });
        }
        this.setBenhNhanColumnForGrid(soBenhNhanMax);
        this.setBenhNhanDataForGrid(resultData);
        //set datasource
        this.dataSource = resultData;
    }
    setDefaultColumnGrid() {
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 60 },
            { Field: "TenGiuong", Title: "Tên Giường", MinWidth: 200, Sortable: true },
            { Field: "DonGiaDisplay", Title: "Đơn Giá", Width: 150, Sortable: true },
        ];
    }
    setBenhNhanColumnForGrid(soBenhNhanMax) {
        if (soBenhNhanMax != 0) {
            for (var i = 0; i < soBenhNhanMax; i++) {
                //let columnTemplate = this.gridColumns;
                let title = "Người Bệnh " + (i + 1);
                let fieldName = "BenhNhan" + (i + 1);
                //console.log("testTemplate = ", this.testTemplate);
                switch (i) {
                    case 0:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhanTemplate });
                        break;
                    case 1:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan2Template });
                        break;
                    case 2:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan3Template });
                        break;
                    case 3:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan4Template });
                        break;
                    case 4:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan5Template });
                        break;
                    case 5:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan6Template });
                        break;
                    case 6:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan7Template });
                        break;
                    case 7:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan8Template });
                        break;
                    case 8:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan9Template });
                        break;
                    case 9:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true, Template: this.benhNhan10Template });
                        break;
                    default:
                        this.gridColumns.push({ Field: fieldName, Title: title, Width: 200, Sortable: true });
                        break;
                }
                this.gridChild._gridColumns = this.gridColumns;
            }
        }
    }
    // Xem(data: any, rowIndex: any, abc: any){
    //   console.log("Xem = ", data, rowIndex, abc);
    // }
    getTotalBottomGrid(numberType = 1) {
        if (this.dataSource == null || this.dataSource == undefined || this.dataSource.length == 0) {
            return "0";
        }
        let result = "0";
        switch (numberType) {
            case 1:
                result = this.dataSource[0].TongSoGiuong;
                return result;
            case 2:
                result = this.dataSource[0].TongSoGiuongTrong;
                return result;
            case 3:
                result = this.dataSource[0].TongSoGiuongCoBenhNhan;
                return result;
            case 4:
                result = this.dataSource[0].TongSoGiuongNamGhep;
                return result;
            default:
                return "0";
        }
    }
    setTitle(data, index = 1) {
        //return "Hello, World! \nvu le";
        let result = "Mã NB: MaBN \nKhoa điều trị: KhoaDieuTri \nPhòng: Phong \n"
            + "Họ và tên: HoVaTen \nNăm sinh: NamSinh \nSĐT: SoDienThoai \nTình trạng bệnh: TinhTrangBenh \n"
            + "Ngày vào viện: NgayVaoVien \nNgày ra viện: NgayRaVien";
        let item = data.lstBenhNhanGiuong[index - 1];
        //console.log("setTitle = ", data, index, item, data.lstBenhNhanGiuong[index]);
        if (item != undefined) {
            result = result.replace("MaBN", (item.MaBenhNhan == null ? "" : item.MaBenhNhan))
                .replace("KhoaDieuTri", (item.KhoaDieuTri == null ? "" : item.KhoaDieuTri))
                .replace("Phong", (item.Phong == null ? "" : item.Phong))
                .replace("HoVaTen", (item.HoVaTen == null ? "" : item.HoVaTen))
                .replace("NamSinh", (item.NamSinh == null ? "" : item.NamSinh))
                .replace("SoDienThoai", (item.SoDienThoai == null ? "" : item.SoDienThoai))
                .replace("TinhTrangBenh", (item.TinhTrangBenh == null ? "" : item.TinhTrangBenh))
                .replace("NgayVaoVien", (item.NgayVaoVien == null ? "" : item.NgayVaoVien))
                .replace("NgayRaVien", (item.NgayRaVien == null ? "" : item.NgayRaVien));
        }
        else {
            result = null;
        }
        return result;
    }
    displayFieldBenhNhan(data, index = 1) {
        let result = "";
        switch (index) {
            case 1:
                result = data.BenhNhan1;
                return result;
            case 2:
                result = data.BenhNhan2;
                return result;
            case 3:
                result = data.BenhNhan3;
                return result;
            case 4:
                result = data.BenhNhan4;
                return result;
            case 5:
                result = data.BenhNhan5;
                return result;
            case 6:
                result = data.BenhNhan6;
                return result;
            case 7:
                result = data.BenhNhan7;
                return result;
            case 8:
                result = data.BenhNhan8;
                return result;
            case 9:
                result = data.BenhNhan9;
                return result;
            case 10:
                result = data.BenhNhan10;
                return result;
            default:
                return "";
        }
    }
    setBenhNhanDataForGrid(resultData) {
        if (resultData != null && resultData != undefined) {
            //console.log("setBenhNhanDataForGrid - resultData = ", resultData);
            resultData.forEach(e => {
                let stt = 0;
                if (e.lstBenhNhanGiuong != null && e.lstBenhNhanGiuong != undefined) {
                    e.lstBenhNhanGiuong.forEach(p => {
                        e["BenhNhan" + (stt + 1)] = p.HoVaTen;
                        stt = stt + 1;
                    });
                }
            });
        }
        //console.log("setBenhNhanDataForGrid = ", resultData);
    }
    quayLai() {
        this.router.navigate(['danh-muc/nhom-giuong-benh/so-do-giuong-benh/chinh-sua/' + this.khoaId]);
    }
    blur() {
        //console.log("blur = ");
        this.timKiem();
    }
    clearSearch(event) {
        //console.log("clearSearch = ", event);
        this.searchString = event;
        if (event == "") {
            this.timKiem();
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    timKiem() {
        this.gridChild.searchString = this.searchString;
        this.gridChild.search();
    }
};
QuanLyGiuongBenhComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
], QuanLyGiuongBenhComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhanTemplate', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhan2Template', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhan2Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhan3Template', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhan3Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhan4Template', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhan4Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhan5Template', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhan5Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhan6Template', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhan6Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhan7Template', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhan7Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhan8Template', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhan8Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhan9Template', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhan9Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhan10Template', { static: true })
], QuanLyGiuongBenhComponent.prototype, "benhNhan10Template", void 0);
QuanLyGiuongBenhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quan-ly-giuong-benh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quan-ly-giuong-benh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quan-ly-giuong-benh.component.scss */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.scss")).default]
    })
], QuanLyGiuongBenhComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh-routing.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SoDoGiuongBenhRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDoGiuongBenhRoutingModule", function() { return SoDoGiuongBenhRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quan_ly_giuong_benh_quan_ly_giuong_benh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quan-ly-giuong-benh/quan-ly-giuong-benh.component */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _quan_ly_giuong_benh_khoa_quan_ly_giuong_benh_khoa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.ts");
/* harmony import */ var _quan_ly_giuong_benh_phong_quan_ly_giuong_benh_phong_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.ts");









const routes = [
    {
        path: '',
        component: _quan_ly_giuong_benh_khoa_quan_ly_giuong_benh_khoa_component__WEBPACK_IMPORTED_MODULE_7__["QuanLyGiuongBenhKhoaComponent"],
        data: {
            title: 'Quản Lý Giường Bệnh',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TinhTrangGiuongBenh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _quan_ly_giuong_benh_phong_quan_ly_giuong_benh_phong_component__WEBPACK_IMPORTED_MODULE_8__["QuanLyGiuongBenhPhongComponent"],
        data: {
            title: 'Quản Lý Giường Bệnh Tại Khoa',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'quan-ly-phong-khoa/:phongId/:khoaId',
        component: _quan_ly_giuong_benh_quan_ly_giuong_benh_component__WEBPACK_IMPORTED_MODULE_3__["QuanLyGiuongBenhComponent"],
        data: {
            title: 'Quản Lý Giường Bệnh Tại Khoa',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    }
];
let SoDoGiuongBenhRoutingModule = class SoDoGiuongBenhRoutingModule {
};
SoDoGiuongBenhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SoDoGiuongBenhRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.model.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.model.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SoDoGiuongBenh, SoDoGiuongBenhSearchHeader, ResultSoDoPopup, LstPhong, LstGiuong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDoGiuongBenh", function() { return SoDoGiuongBenh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDoGiuongBenhSearchHeader", function() { return SoDoGiuongBenhSearchHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultSoDoPopup", function() { return ResultSoDoPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LstPhong", function() { return LstPhong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LstGiuong", function() { return LstGiuong; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SoDoGiuongBenh {
}
class SoDoGiuongBenhSearchHeader {
    constructor(KhoaId = null, PhongId = null) {
        this.KhoaId = KhoaId;
        this.PhongId = PhongId;
    }
}
class ResultSoDoPopup {
    constructor(KhoaId = null, PhongId = null, TenKhoa = null, GiuongTrong = null, GiuongDaCoBenhNhan = null, lstPhong = new Array()) {
        this.KhoaId = KhoaId;
        this.PhongId = PhongId;
        this.TenKhoa = TenKhoa;
        this.GiuongTrong = GiuongTrong;
        this.GiuongDaCoBenhNhan = GiuongDaCoBenhNhan;
        this.lstPhong = lstPhong;
    }
}
class LstPhong {
    constructor(PhongId = null, DisplayName = null, lstGiuong = new Array()) {
        this.PhongId = PhongId;
        this.DisplayName = DisplayName;
        this.lstGiuong = lstGiuong;
    }
}
class LstGiuong {
    constructor(IsGiuongTrong = null, SoBenhNhan = null, TenGiuong = null) {
        this.IsGiuongTrong = IsGiuongTrong;
        this.SoBenhNhan = SoBenhNhan;
        this.TenGiuong = TenGiuong;
    }
}


/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: SoDoGiuongBenhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDoGiuongBenhModule", function() { return SoDoGiuongBenhModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _so_do_giuong_benh_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./so-do-giuong-benh-routing.module */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh-routing.module.ts");
/* harmony import */ var _quan_ly_giuong_benh_quan_ly_giuong_benh_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quan-ly-giuong-benh/quan-ly-giuong-benh.component */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh/quan-ly-giuong-benh.component.ts");
/* harmony import */ var _so_do_giuong_popup_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./so-do-giuong-popup/so-do-giuong-popup.component */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.ts");
/* harmony import */ var _quan_ly_giuong_benh_khoa_quan_ly_giuong_benh_khoa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component.ts");
/* harmony import */ var _quan_ly_giuong_benh_phong_quan_ly_giuong_benh_phong_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _so_do_giuong_benh_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./so-do-giuong-benh.service */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




















let SoDoGiuongBenhModule = class SoDoGiuongBenhModule {
};
SoDoGiuongBenhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_quan_ly_giuong_benh_quan_ly_giuong_benh_component__WEBPACK_IMPORTED_MODULE_4__["QuanLyGiuongBenhComponent"], _so_do_giuong_popup_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_5__["SoDoGiuongPopupComponent"],
            _quan_ly_giuong_benh_khoa_quan_ly_giuong_benh_khoa_component__WEBPACK_IMPORTED_MODULE_6__["QuanLyGiuongBenhKhoaComponent"], _quan_ly_giuong_benh_phong_quan_ly_giuong_benh_phong_component__WEBPACK_IMPORTED_MODULE_7__["QuanLyGiuongBenhPhongComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _so_do_giuong_benh_routing_module__WEBPACK_IMPORTED_MODULE_3__["SoDoGiuongBenhRoutingModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__["GridModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"]
        ],
        providers: [
            _so_do_giuong_benh_service__WEBPACK_IMPORTED_MODULE_18__["SoDoGiuongBenhService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_19__["BaseService"], useClass: _so_do_giuong_benh_service__WEBPACK_IMPORTED_MODULE_18__["SoDoGiuongBenhService"] },
        ],
        entryComponents: [
            _so_do_giuong_popup_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_5__["SoDoGiuongPopupComponent"]
        ],
    })
], SoDoGiuongBenhModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SoDoGiuongBenhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDoGiuongBenhService", function() { return SoDoGiuongBenhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let SoDoGiuongBenhService = class SoDoGiuongBenhService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'SoDoGiuongBenh';
    }
};
SoDoGiuongBenhService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
SoDoGiuongBenhService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SoDoGiuongBenhService);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-giuong {\n  margin-top: 15px !important;\n  padding-top: 15px !important;\n  border-bottom-width: 1px;\n}\n\n.div-item-giuong {\n  color: white;\n  text-align: center;\n  align-items: center;\n  display: flex;\n  height: 25px;\n  padding: 5px !important;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcZGFuaC1tdWNcXG5ob20tZ2l1b25nLWJlbmhcXHNvLWRvLWdpdW9uZy1iZW5oXFxzby1kby1naXVvbmctcG9wdXBcXHNvLWRvLWdpdW9uZy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLXBvcHVwL3NvLWRvLWdpdW9uZy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLWJlbmgvc28tZG8tZ2l1b25nLXBvcHVwL3NvLWRvLWdpdW9uZy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtZ2l1b25nIHtcbiAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG59XG5cbi5kaXYtaXRlbS1naXVvbmcge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiLmRpdi1naXVvbmcge1xuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbn1cblxuLmRpdi1pdGVtLWdpdW9uZyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SoDoGiuongPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDoGiuongPopupComponent", function() { return SoDoGiuongPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _so_do_giuong_benh_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../so-do-giuong-benh.model */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.model.ts");







let SoDoGiuongPopupComponent = class SoDoGiuongPopupComponent {
    constructor(data, dialog, apiService) {
        this.data = data;
        this.dialog = dialog;
        this.apiService = apiService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.tenKhoa = "";
        //
        this.giuongTrong = true;
        this.giuongDaCoBenhNhan = true;
        this.modelGiuong = new _so_do_giuong_benh_model__WEBPACK_IMPORTED_MODULE_6__["ResultSoDoPopup"]();
        this.resultGiuong = new _so_do_giuong_benh_model__WEBPACK_IMPORTED_MODULE_6__["ResultSoDoPopup"]();
        this.khoaId = data;
        this.modelGiuong.KhoaId = data;
    }
    ngOnInit() {
        //console.log("khoa id = ", this.khoaId);
        this.getTenKhoa(this.khoaId).then(obj => {
            this.tenKhoa = obj;
        });
    }
    giuongTrongChange($event) {
        this.giuongTrong = $event;
        //this.getListGiuongBenhFollowPhong(this.phongId);
    }
    giuongDaCoBenhNhanChange($event) {
        this.giuongDaCoBenhNhan = $event;
        //this.getListGiuongBenhFollowPhong(this.phongId);
    }
    phongChange($event) {
        //console.log("phongChange = ", $event);
        this.getListGiuongBenhFollowPhong($event);
    }
    close() {
        this.dialog.closeAll();
    }
    getTenKhoa(id) {
        return this.apiService.post("SoDoGiuongBenh/GetTenKhoa?khoaId=" + id).toPromise().catch(() => "");
    }
    getListGiuongBenhFollowPhong(phongId) {
        this.modelGiuong.PhongId = phongId;
        this.modelGiuong.TenKhoa = this.tenKhoa;
        this.modelGiuong.GiuongDaCoBenhNhan = this.giuongDaCoBenhNhan;
        this.modelGiuong.GiuongTrong = this.giuongTrong;
        this.apiService.post("SoDoGiuongBenh/GetDanhSachGiuongKhoaPopup", this.modelGiuong).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                console.log("ResultSoDoPopup = ", resultData);
                this.resultGiuong = resultData;
            }
            else {
            }
        }, (err) => {
        });
    }
};
SoDoGiuongPopupComponent.ctorParameters = () => [
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
SoDoGiuongPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-so-do-giuong-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./so-do-giuong-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./so-do-giuong-popup.component.scss */ "./src/app/modules/main/danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-popup/so-do-giuong-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], SoDoGiuongPopupComponent);



/***/ })

}]);
//# sourceMappingURL=danh-muc-nhom-giuong-benh-so-do-giuong-benh-so-do-giuong-benh-module-es2015.js.map