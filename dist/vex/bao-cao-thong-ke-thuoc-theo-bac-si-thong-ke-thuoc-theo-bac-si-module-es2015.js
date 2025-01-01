(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-thong-ke-thuoc-theo-bac-si-thong-ke-thuoc-theo-bac-si-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống kê', Path:''},\n                    {Title:'Báo cáo', Path:''},\n                    {Title:'Dược', Path:''},\n                    {Title:'Thống Kê Thuốc Theo Bác Sĩ', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\" >\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"  fxLayoutGap.lt-sm=\"0\" style=\"margin: 0px -3px 3px 0px;\"> \n                <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                    class=\"mt-1 on-header pb-0 mr-1\" label=\"Bác sĩ\" popupSettings=\"\" bind=\"true\"\n                    [autoSelectFirstItem]=\"true\" url=\"BaoCao/GetTatCaBacSi\"\n                    [(model)]=\"baoCaoThongKeThuocTheoBacSiSearch.BacSiId\">\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoThongKeThuocTheoBacSiSearch.TuNgay\" #tiepnhantu\n                    id=\"TuNgay\" [maxDate]=\"baoCaoThongKeThuocTheoBacSiSearch.DenNgay\" label=\"Từ ngày\"\n                    class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoThongKeThuocTheoBacSiSearch.DenNgay\" #tiepnhanden\n                    id=\"DenNgay\" [minDate]=\"baoCaoThongKeThuocTheoBacSiSearch.TuNgay\" class=\"mt-1 on-header\"\n                    label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"auto\" fxFlex.sm=\"50%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"xemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"xuatBaoCao()\">Xuất Excel</button>\n                </div>\n        \n            </div>\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\" style=\"overflow:auto;\">\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <div  [innerHtml]=\"html\" style=\"overflow:auto;\" ></div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống kê', Path:''},\n                    {Title:'Báo cáo', Path:''},\n                    {Title:'Dược', Path:''},\n                    {Title:'Thống Kê Thuốc Theo Bác Sĩ', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\" [showStt]=\"true\" [groups]=\"groups\">\n            </app-grid>\n\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n                <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                    class=\"mt-1 on-header pb-0 mr-1\" label=\"Bác sĩ\" popupSettings=\"\" bind=\"true\"\n                    [autoSelectFirstItem]=\"true\" url=\"BaoCao/GetTatCaBacSi\"\n                    [(model)]=\"baoCaoThongKeThuocTheoBacSiSearch.BacSiId\">\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoThongKeThuocTheoBacSiSearch.TuNgay\" #tiepnhantu\n                    id=\"TuNgay\" [maxDate]=\"baoCaoThongKeThuocTheoBacSiSearch.DenNgay\" label=\"Từ ngày\"\n                    class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoThongKeThuocTheoBacSiSearch.DenNgay\" #tiepnhanden\n                    id=\"DenNgay\" [minDate]=\"baoCaoThongKeThuocTheoBacSiSearch.TuNgay\" class=\"mt-1 on-header\"\n                    label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"xemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"xuatBaoCao()\">Xuất Excel</button>\n                </div>\n\n            </div>\n        </ng-template>\n\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #tongCongGroupFooterTemplate let-aggregates>\n            <span style=\"float: right;\">Cộng: {{aggregates.DonViTinh.count}} khoản</span>\n        </ng-template>\n\n        <ng-template #tongCongFooterTemplate let-dataItem>\n            <span style=\"float: right;\">Tổng cộng: {{ total('TongCong')}} khoản</span>\n        </ng-template>\n\n        <ng-template #soLuongTemplate let-dataItem>\n            {{dataItem.SoLuong | number:'0.2-2':'vi-VN' }}\n        </ng-template>\n\n        <ng-template #soLuongGroupFooterTemplate let-aggregates>\n            <strong>{{aggregates.SoLuong.sum | number:'0.2-2':'vi-VN'}}</strong>\n        </ng-template>\n\n        <ng-template #soLuongFooterTemplate let-dataItem>\n            <span>{{total('SoLuong') | number:'0.2-2':'vi-VN'}}</span>\n        </ng-template>\n\n        <ng-template #thanhTienTemplate let-dataItem>\n            {{dataItem.ThanhTien | number:'0.2-2':'vi-VN' }}\n        </ng-template>\n\n        <ng-template #thanhTienGroupFooterTemplate let-aggregates>\n            <strong>{{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}</strong>\n        </ng-template>\n\n        <ng-template #thanhTienFooterTemplate let-dataItem>\n            <span>{{total('ThanhTien') | number:'0.2-2':'vi-VN'}}</span>\n        </ng-template>\n\n    </vex-page-layout-content>\n\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid #dddddd;\n}\n\ntable th.stt {\n  width: 50px;\n  font-size: 16px;\n  font-weight: normal;\n}\n\ntable th.tenthuoc {\n  width: 1000px;\n  font-size: 16px;\n  font-weight: normal;\n}\n\ntable th.donvi {\n  width: 250px;\n  font-size: 16px;\n  font-weight: normal;\n}\n\ntable th.soluong {\n  width: 250px;\n  font-size: 16px;\n  font-weight: normal;\n}\n\ntable th.thanhtien {\n  width: 250px;\n  font-size: 16px;\n  font-weight: normal;\n}\n\ntable th.loai {\n  width: 250px;\n  font-size: 16px;\n  font-weight: normal;\n}\n\ntable th.group {\n  text-align: left;\n  font-size: 17px;\n}\n\ntable td.center {\n  text-align: center;\n}\n\ntable th, table td {\n  width: 250px;\n  text-align: left;\n  padding: 3px;\n  text-align: center;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntr:hover {\n  background-color: #f5f5f5;\n}\n\nul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\ntable td.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vdGhvbmcta2UtdGh1b2MtdGhlby1iYWMtc2kvdGhvbmcta2UtdGh1b2MtdGhlby1iYWMtc2ktbmV3L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcdGhvbmcta2UtdGh1b2MtdGhlby1iYWMtc2lcXHRob25nLWtlLXRodW9jLXRoZW8tYmFjLXNpLW5ld1xcdGhvbmcta2UtdGh1b2MtdGhlby1iYWMtc2ktbmV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby90aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaS90aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaS1uZXcvdGhvbmcta2UtdGh1b2MtdGhlby1iYWMtc2ktbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rob25nLWtlLXRodW9jLXRoZW8tYmFjLXNpL3Rob25nLWtlLXRodW9jLXRoZW8tYmFjLXNpLW5ldy90aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaS1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG50YWJsZSB0aC5zdHQge1xuICB3aWR0aDogNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG50YWJsZSB0aC50ZW50aHVvYyB7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudGFibGUgdGguZG9udmkge1xuICB3aWR0aDogMjUwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudGFibGUgdGguc29sdW9uZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG50YWJsZSB0aC50aGFuaHRpZW4ge1xuICB3aWR0aDogMjUwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudGFibGUgdGgubG9haSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG50YWJsZSB0aC5ncm91cCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxudGFibGUgdGQuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZSB0aCwgdGFibGUgdGQge1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbnVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRkLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJ0YWJsZSB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG50YWJsZSB0aC5zdHQge1xuICB3aWR0aDogNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG50YWJsZSB0aC50ZW50aHVvYyB7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudGFibGUgdGguZG9udmkge1xuICB3aWR0aDogMjUwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudGFibGUgdGguc29sdW9uZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG50YWJsZSB0aC50aGFuaHRpZW4ge1xuICB3aWR0aDogMjUwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudGFibGUgdGgubG9haSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG50YWJsZSB0aC5ncm91cCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxudGFibGUgdGQuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZSB0aCwgdGFibGUgdGQge1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbnVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRkLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: ThongKeThuocTheoBacSiNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeThuocTheoBacSiNewComponent", function() { return ThongKeThuocTheoBacSiNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _thong_ke_thuoc_theo_bac_si_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../thong-ke-thuoc-theo-bac-si.model */ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.model.ts");














let ThongKeThuocTheoBacSiNewComponent = class ThongKeThuocTheoBacSiNewComponent {
    constructor(apiService, dialog, notificationService, authService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.baoCaoThongKeThuocTheoBacSiSearch = new _thong_ke_thuoc_theo_bac_si_model__WEBPACK_IMPORTED_MODULE_13__["BaoCaoThongKeThuocTheoBacSiSearch"]();
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.gridColumns = [];
        this.gridColumnNews = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.showGrid = false;
        this.showPrintExport = false;
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.skip = 0;
        this.pageSize = 50;
        this.showDefaultPagerTemplate = true;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.ishowView = false;
        this.urlGetDataGridChild = "";
        this.urlGetPageDataGridChild = "";
        this.aggregates = [
            { field: 'ThanhTien', aggregate: 'sum' },
            { field: 'SoLuong', aggregate: 'sum' },
            { field: 'DonViTinh', aggregate: 'count' }
        ];
        this.groups = [{
                field: 'Loai',
                aggregates: this.aggregates
            }];
        this.heightToolbar = 140;
        this.html = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].ThongKeThuocTheoBacSi;
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        if (this.baoCaoThongKeThuocTheoBacSiSearch.TuNgay == null) {
            this.baoCaoThongKeThuocTheoBacSiSearch.TuNgay = firstDay;
        }
        if (this.baoCaoThongKeThuocTheoBacSiSearch.DenNgay == null) {
            this.baoCaoThongKeThuocTheoBacSiSearch.DenNgay = new Date();
            this.baoCaoThongKeThuocTheoBacSiSearch.DenNgay.setHours(23, 59, 59);
        }
    }
    xemBaoCao() {
        const self = this;
        if (self.baoCaoThongKeThuocTheoBacSiSearch.TuNgay == null ||
            self.baoCaoThongKeThuocTheoBacSiSearch.DenNgay == null) {
            self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === undefined
            || self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === null) {
            self.notificationService.showError("Bác sĩ yêu cầu chọn");
            return;
        }
        self.showLoadingPopup();
        self.apiService.post("BaoCao/ThongKeThuocTheoBacSiHTML", self.baoCaoThongKeThuocTheoBacSiSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.html = "";
                this.html = resultData;
                self.closeAllDialogs();
            }
        });
    }
    xuatBaoCao() {
        const self = this;
        if (self.baoCaoThongKeThuocTheoBacSiSearch.TuNgay == null ||
            self.baoCaoThongKeThuocTheoBacSiSearch.DenNgay == null) {
            self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === undefined
            || self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === null) {
            self.notificationService.showError("Bác sĩ yêu cầu chọn");
            return;
        }
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            self.apiService.postExportExcel('BaoCao/ExportThongKeThuocTheoBacSi', this.baoCaoThongKeThuocTheoBacSiSearch)
                .subscribe(resultData => {
                self.dialog.closeAll();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'ThongKeThuocTheoBacSi' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.dialog.closeAll();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    totalGroup(dataGroups) {
        console.log(dataGroups);
    }
    ;
    total(field) {
        switch (field) {
            case 'SoLuong':
                return this.XuLyTotalForField('SoLuong');
            case 'ThanhTien':
                return this.XuLyTotalForField('ThanhTien');
            case 'TongCong':
                return this.gridDataSource.data.length;
        }
    }
    ;
    XuLyTotalForField(field) {
        let sum = 0;
        if (this.gridDataSource.data != undefined && this.gridDataSource.data != null) {
            this.gridDataSource.data.forEach(element => {
                switch (field) {
                    case 'SoLuong':
                        sum = sum + element.SoLuong;
                        break;
                    case 'ThanhTien':
                        sum = sum + element.ThanhTien;
                        break;
                }
            });
            return sum;
        }
    }
    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }
    showSavingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang lưu...' }
            });
        }
    }
    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
};
ThongKeThuocTheoBacSiNewComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThongKeThuocTheoBacSiNewComponent.prototype, "heightToolbar", void 0);
ThongKeThuocTheoBacSiNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thong-ke-thuoc-theo-bac-si-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-ke-thuoc-theo-bac-si-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-ke-thuoc-theo-bac-si-new.component.scss */ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.scss")).default]
    })
], ThongKeThuocTheoBacSiNewComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-routing.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ThongKeThuocTheoBacSiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeThuocTheoBacSiRoutingModule", function() { return ThongKeThuocTheoBacSiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _thong_ke_thuoc_theo_bac_si_new_thong_ke_thuoc_theo_bac_si_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component */ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.ts");







const routes = [
    // {
    //   path: '',
    //   component: ThongKeThuocTheoBacSiComponent,
    //   data: {
    //     title: 'Thống kê thuốc theo bác sĩ',
    //     DocumentType: DocumentType.ThongKeThuocTheoBacSi,
    //     SecurityOperation: SecurityOperation.View
    //   },
    //   canActivate: [PermisssionGuard]
    // },
    {
        path: '',
        component: _thong_ke_thuoc_theo_bac_si_new_thong_ke_thuoc_theo_bac_si_new_component__WEBPACK_IMPORTED_MODULE_6__["ThongKeThuocTheoBacSiNewComponent"],
        data: {
            title: 'Thống kê thuốc theo bác sĩ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].ThongKeThuocTheoBacSi,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let ThongKeThuocTheoBacSiRoutingModule = class ThongKeThuocTheoBacSiRoutingModule {
};
ThongKeThuocTheoBacSiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ThongKeThuocTheoBacSiRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.model.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.model.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BaoCaoThongKeThuocTheoBacSiSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThongKeThuocTheoBacSiSearch", function() { return BaoCaoThongKeThuocTheoBacSiSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoThongKeThuocTheoBacSiSearch {
    constructor(SearchString = "", TuNgay = null, DenNgay = null, BacSiId = 0, Skip = 0, Take = 50, PageSize = 50) {
        this.SearchString = SearchString;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.BacSiId = BacSiId;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ThongKeThuocTheoBacSiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeThuocTheoBacSiModule", function() { return ThongKeThuocTheoBacSiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _thong_ke_thuoc_theo_bac_si_thong_ke_thuoc_theo_bac_si_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component */ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component.ts");
/* harmony import */ var _thong_ke_thuoc_theo_bac_si_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./thong-ke-thuoc-theo-bac-si-routing.module */ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-routing.module.ts");
/* harmony import */ var _thong_ke_thuoc_theo_bac_si_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./thong-ke-thuoc-theo-bac-si.service */ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.service.ts");
/* harmony import */ var _thong_ke_thuoc_theo_bac_si_new_thong_ke_thuoc_theo_bac_si_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component */ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component.ts");






















let ThongKeThuocTheoBacSiModule = class ThongKeThuocTheoBacSiModule {
};
ThongKeThuocTheoBacSiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_thong_ke_thuoc_theo_bac_si_thong_ke_thuoc_theo_bac_si_component__WEBPACK_IMPORTED_MODULE_18__["ThongKeThuocTheoBacSiComponent"], _thong_ke_thuoc_theo_bac_si_new_thong_ke_thuoc_theo_bac_si_new_component__WEBPACK_IMPORTED_MODULE_21__["ThongKeThuocTheoBacSiNewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _thong_ke_thuoc_theo_bac_si_routing_module__WEBPACK_IMPORTED_MODULE_19__["ThongKeThuocTheoBacSiRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"]
        ],
        providers: [
            _thong_ke_thuoc_theo_bac_si_service__WEBPACK_IMPORTED_MODULE_20__["ThongKeThuocTheoBacSiService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], useClass: _thong_ke_thuoc_theo_bac_si_service__WEBPACK_IMPORTED_MODULE_20__["ThongKeThuocTheoBacSiService"] },
        ]
    })
], ThongKeThuocTheoBacSiModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ThongKeThuocTheoBacSiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeThuocTheoBacSiService", function() { return ThongKeThuocTheoBacSiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let ThongKeThuocTheoBacSiService = class ThongKeThuocTheoBacSiService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
    }
};
ThongKeThuocTheoBacSiService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ThongKeThuocTheoBacSiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ThongKeThuocTheoBacSiService);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vdGhvbmcta2UtdGh1b2MtdGhlby1iYWMtc2kvdGhvbmcta2UtdGh1b2MtdGhlby1iYWMtc2kvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFx0aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaVxcdGhvbmcta2UtdGh1b2MtdGhlby1iYWMtc2lcXHRob25nLWtlLXRodW9jLXRoZW8tYmFjLXNpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby90aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaS90aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaS90aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby90aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaS90aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaS90aG9uZy1rZS10aHVvYy10aGVvLWJhYy1zaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iLCIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ThongKeThuocTheoBacSiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeThuocTheoBacSiComponent", function() { return ThongKeThuocTheoBacSiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _thong_ke_thuoc_theo_bac_si_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../thong-ke-thuoc-theo-bac-si.model */ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.model.ts");














let ThongKeThuocTheoBacSiComponent = class ThongKeThuocTheoBacSiComponent {
    constructor(apiService, dialog, notificationService, authService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.baoCaoThongKeThuocTheoBacSiSearch = new _thong_ke_thuoc_theo_bac_si_model__WEBPACK_IMPORTED_MODULE_13__["BaoCaoThongKeThuocTheoBacSiSearch"]();
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.showGrid = false;
        this.showPrintExport = false;
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.skip = 0;
        this.pageSize = 50;
        this.showDefaultPagerTemplate = true;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.ishowView = false;
        this.urlGetDataGridChild = "";
        this.urlGetPageDataGridChild = "";
        this.aggregates = [
            { field: 'ThanhTien', aggregate: 'sum' },
            { field: 'SoLuong', aggregate: 'sum' },
            { field: 'DonViTinh', aggregate: 'count' }
        ];
        this.groups = [{
                field: 'Loai',
                aggregates: this.aggregates
            }];
        this.heightToolbar = 140;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].ThongKeThuocTheoBacSi;
        this.gridColumns = [
            { Field: "Loai", Title: "Loại", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            {
                Field: "TenThuocHamLuong", Title: "Tên thuốc - Hàm lượng", Width: 150,
                TemplateFooter: this.tongCongFooterTemplate, TemplateGroupFooter: this.tongCongGroupFooterTemplate
            },
            { Field: "DonViTinh", Title: "Đơn vị", Width: 100 },
            {
                Field: "SoLuong", Title: "Số lượng", Width: 200, Template: this.soLuongTemplate,
                TemplateFooter: this.soLuongFooterTemplate, TemplateGroupFooter: this.soLuongGroupFooterTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành tiền", Width: 150, Template: this.thanhTienTemplate,
                TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate
            }
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        if (this.baoCaoThongKeThuocTheoBacSiSearch.TuNgay == null) {
            this.baoCaoThongKeThuocTheoBacSiSearch.TuNgay = firstDay;
        }
        if (this.baoCaoThongKeThuocTheoBacSiSearch.DenNgay == null) {
            this.baoCaoThongKeThuocTheoBacSiSearch.DenNgay = new Date();
            this.baoCaoThongKeThuocTheoBacSiSearch.DenNgay.setHours(23, 59, 59);
        }
    }
    xemBaoCao() {
        const self = this;
        if (self.baoCaoThongKeThuocTheoBacSiSearch.TuNgay == null ||
            self.baoCaoThongKeThuocTheoBacSiSearch.DenNgay == null) {
            self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === undefined
            || self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === null) {
            self.notificationService.showError("Bác sĩ yêu cầu chọn");
            return;
        }
        self.showLoadingPopup();
        self.apiService.post("BaoCao/GetDataThongKeThuocTheoBacSiForGrid", self.baoCaoThongKeThuocTheoBacSiSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                self.gridDataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                self.closeAllDialogs();
            }
        });
    }
    xuatBaoCao() {
        const self = this;
        if (self.baoCaoThongKeThuocTheoBacSiSearch.TuNgay == null ||
            self.baoCaoThongKeThuocTheoBacSiSearch.DenNgay == null) {
            self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === undefined
            || self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === null) {
            self.notificationService.showError("Bác sĩ yêu cầu chọn");
            return;
        }
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            self.apiService.postExportExcel('BaoCao/ExportThongKeThuocTheoBacSi', this.baoCaoThongKeThuocTheoBacSiSearch)
                .subscribe(resultData => {
                self.dialog.closeAll();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'ThongKeThuocTheoBacSi' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.dialog.closeAll();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    totalGroup(dataGroups) {
        console.log(dataGroups);
    }
    ;
    total(field) {
        switch (field) {
            case 'SoLuong':
                return this.XuLyTotalForField('SoLuong');
            case 'ThanhTien':
                return this.XuLyTotalForField('ThanhTien');
            case 'TongCong':
                return this.gridDataSource.data.length;
        }
    }
    ;
    XuLyTotalForField(field) {
        let sum = 0;
        if (this.gridDataSource.data != undefined && this.gridDataSource.data != null) {
            this.gridDataSource.data.forEach(element => {
                switch (field) {
                    case 'SoLuong':
                        sum = sum + element.SoLuong;
                        break;
                    case 'ThanhTien':
                        sum = sum + element.ThanhTien;
                        break;
                }
            });
            return sum;
        }
    }
    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }
    showSavingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang lưu...' }
            });
        }
    }
    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
};
ThongKeThuocTheoBacSiComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoThongHoatDongCLSKhoaGrid', { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "baoCaoThongHoatDongCLSKhoaGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soLanGroupHeaderColumnTemplate", { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "soLanGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nhomGroupHeaderTemplate", { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongFooterTemplate', { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "tongCongFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongGroupFooterTemplate', { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "tongCongGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soLuongTemplate", { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongFooterTemplate', { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "soLuongFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongGroupFooterTemplate', { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "soLuongGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTemplate", { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterTemplate', { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "thanhTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
], ThongKeThuocTheoBacSiComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThongKeThuocTheoBacSiComponent.prototype, "heightToolbar", void 0);
ThongKeThuocTheoBacSiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thong-ke-thuoc-theo-bac-si',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-ke-thuoc-theo-bac-si.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-ke-thuoc-theo-bac-si.component.scss */ "./src/app/modules/main/bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component.scss")).default]
    })
], ThongKeThuocTheoBacSiComponent);



/***/ })

}]);
//# sourceMappingURL=bao-cao-thong-ke-thuoc-theo-bac-si-thong-ke-thuoc-theo-bac-si-module-es2015.js.map