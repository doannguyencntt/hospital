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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tong-hop-so-luong-xet-nghiem-bao-cao-tong-hop-so-luong-xet-nghiem-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.html": 
        /*!********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.html ***!
          \********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Xét Nghiệm', Path:''},\n                    {Title:'Tổng Hợp Số Lượng Xét Nghiệm', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <app-grid *ngIf=\"ishowView\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n                        [checkboxAble]=\"false\" [autoHeight]=\"true\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                        [useActionDefault]=\"false\" [documentType]=\"documentType\" [gridDataSource]=\"gridView\"\n                        [groups]=\"groups\">\n                    </app-grid>\n\n                    <ng-template #sttTemplate let-rowIndex=\"rowIndex\" let-dataItem>\n                        <span *ngIf=\"dataItem.ToDam === true\" style=\"font-weight: bold\"> {{rowIndex + 1}}</span>\n                        <span *ngIf=\"dataItem.ToDam === false\"> {{rowIndex + 1}}</span>\n                    </ng-template>\n\n                    <ng-template #tenToDamTemplate let-rowIndex=\"rowIndex\" let-dataItem>\n                        <span *ngIf=\"dataItem.ToDam === true\" style=\"font-weight: bold\">\n                            {{dataItem.TenDichVu}}</span>\n                        <span *ngIf=\"dataItem.ToDam === false\"> {{dataItem.TenDichVu}}</span>\n                    </ng-template>\n\n                    <ng-template #soLuongMauNoiTruToDamTemplate let-rowIndex=\"rowIndex\" let-dataItem>\n                        <span *ngIf=\"dataItem.ToDam === true\" style=\"font-weight: bold\">\n                            {{dataItem.SoLuongMauNoiTru}}</span>\n                        <span *ngIf=\"dataItem.ToDam === false\"> {{dataItem.SoLuongMauNoiTru}}</span>\n                    </ng-template>\n\n                    <ng-template #soLuongMauNgoaiTruToDamTemplate let-rowIndex=\"rowIndex\" let-dataItem>\n                        <span *ngIf=\"dataItem.ToDam === true\" style=\"font-weight: bold\">\n                            {{dataItem.SoLuongMauNgoaiTru}}</span>\n                        <span *ngIf=\"dataItem.ToDam === false\"> {{dataItem.SoLuongMauNgoaiTru}}</span>\n                    </ng-template>\n\n                    <ng-template #soLuongMauBHYTNoiTruToDamTemplate let-rowIndex=\"rowIndex\" let-dataItem>\n                        <span *ngIf=\"dataItem.ToDam === true\" style=\"font-weight: bold\">\n                            {{dataItem.SoLuongMauBHYTNoiTru}}</span>\n                        <span *ngIf=\"dataItem.ToDam === false\"> {{dataItem.SoLuongMauBHYTNoiTru}}</span>\n                    </ng-template>\n\n                    <ng-template #soLuongMauBHYTNgoaiTruToDamTemplate let-rowIndex=\"rowIndex\" let-dataItem>\n                        <span *ngIf=\"dataItem.ToDam === true\" style=\"font-weight: bold\">\n                            {{dataItem.SoLuongMauBHYTNgoaiTru}}</span>\n                        <span *ngIf=\"dataItem.ToDam === false\"> {{dataItem.SoLuongMauBHYTNgoaiTru}}</span>\n                    </ng-template>\n\n\n                    <ng-template #soLuongDichVuToDamTemplate let-rowIndex=\"rowIndex\" let-dataItem>\n                        <span *ngIf=\"dataItem.ToDam === true\" style=\"font-weight: bold\">\n                            {{dataItem.SoLuongDichVu}}</span>\n                        <span *ngIf=\"dataItem.ToDam === false\"> {{dataItem.SoLuongDichVu}}</span>\n                    </ng-template>\n\n                    <ng-template #soLuongKhamSucKhoeToDamTemplate let-rowIndex=\"rowIndex\" let-dataItem>\n                        <span *ngIf=\"dataItem.ToDam === true\" style=\"font-weight: bold\">\n                            {{dataItem.SoLuongKhamSucKhoe}}</span>\n                        <span *ngIf=\"dataItem.ToDam === false\"> {{dataItem.SoLuongKhamSucKhoe}}</span>\n                    </ng-template>\n\n                    <ng-template #soLuongTongHopToDamTemplate let-rowIndex=\"rowIndex\" let-dataItem>\n                        <span *ngIf=\"dataItem.ToDam === true\" style=\"font-weight: bold\">\n                            {{dataItem.SoLuongTongHop}}</span>\n                        <span *ngIf=\"dataItem.ToDam === false\"> {{dataItem.SoLuongTongHop}}</span>\n                    </ng-template>\n\n\n                    <ng-template #nhomDVBVGroupTemplate let-value=\"value\">\n                        <strong></strong>\n                    </ng-template>\n\n                    <ng-template #sumSoLuongMauNoiTruGroupHeaderTemplate let-aggregates let-field=\"field\">\n                        <span>{{aggregates.SoLuongMauNoiTru.sum | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #sumSoLuongMauNgoaiTruGroupHeaderTemplate kendoGridGroupHeaderTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.SoLuongMauNgoaiTru.sum | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #sumSoLuongMauBHYTNoiTruGroupHeaderTemplate kendoGridGroupHeaderTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.SoLuongMauBHYTNoiTru.sum | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #sumSoLuongMauBHYTNgoaiTruGroupHeaderTemplate kendoGridGroupHeaderTemplate\n                        let-aggregates let-field=\"field\">\n                        <span>{{aggregates.SoLuongMauBHYTNgoaiTru.sum | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #sumSoLuongDichVuGroupHeaderTemplate kendoGridGroupHeaderTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.SoLuongDichVu.sum | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #sumSoLuongKhamSucKhoeGroupHeaderTemplate kendoGridGroupHeaderTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.SoLuongKhamSucKhoe.sum | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #sumSoLuongTongHopGroupHeaderTemplate kendoGridGroupHeaderTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.SoLuongTongHop.sum | number:'0.2'}}</span>\n                    </ng-template>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.html": 
        /*!**********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.html ***!
          \**********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>BÁO CÁO XUẤT NHẬP TỒN </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In báo cáo\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.scss": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.scss ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10b25nLWhvcC1zby1sdW9uZy14ZXQtbmdoaWVtL2Jhby1jYW8tdG9uZy1ob3Atc28tbHVvbmcteGV0LW5naGllbS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby10b25nLWhvcC1zby1sdW9uZy14ZXQtbmdoaWVtXFxiYW8tY2FvLXRvbmctaG9wLXNvLWx1b25nLXhldC1uZ2hpZW0tbGlzdFxcYmFvLWNhby10b25nLWhvcC1zby1sdW9uZy14ZXQtbmdoaWVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uZy1ob3Atc28tbHVvbmcteGV0LW5naGllbS9iYW8tY2FvLXRvbmctaG9wLXNvLWx1b25nLXhldC1uZ2hpZW0tbGlzdC9iYW8tY2FvLXRvbmctaG9wLXNvLWx1b25nLXhldC1uZ2hpZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXRvbmctaG9wLXNvLWx1b25nLXhldC1uZ2hpZW0vYmFvLWNhby10b25nLWhvcC1zby1sdW9uZy14ZXQtbmdoaWVtLWxpc3QvYmFvLWNhby10b25nLWhvcC1zby1sdW9uZy14ZXQtbmdoaWVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.ts": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.ts ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopSoLuongXetNghiemListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopSoLuongXetNghiemListComponent", function () { return BaoCaoTongHopSoLuongXetNghiemListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _bao_cao_tong_hop_so_luong_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bao-cao-tong-hop-so-luong-xet-nghiem.model */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.model.ts");
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
            var BaoCaoTongHopSoLuongXetNghiemListComponent = /** @class */ (function () {
                // public groups: GroupDescriptor[] = [{
                //   field: 'Loai',
                //   aggregates: [
                //     { field: 'TonDauKyThanhTien', aggregate: 'sum' },
                //     { field: 'NhapTrongKyThanhTien', aggregate: 'sum' },
                //     { field: 'XuatTrongKyThanhTien', aggregate: 'sum' },
                //     { field: 'TonCuoiKyThanhTien', aggregate: 'sum' },
                //   ]
                // },{
                //   field: 'Nhom',
                //   aggregates: [
                //     { field: 'TonDauKyThanhTien', aggregate: 'sum' },
                //     { field: 'NhapTrongKyThanhTien', aggregate: 'sum' },
                //     { field: 'XuatTrongKyThanhTien', aggregate: 'sum' },
                //     { field: 'TonCuoiKyThanhTien', aggregate: 'sum' },
                //   ]
                // }];
                function BaoCaoTongHopSoLuongXetNghiemListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_tong_hop_so_luong_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_1__["BaoCaoTongHopSoLuongXetNghiemSearch"]();
                    this.inBaoCaoTongHopSoLuongXetNghiem = new _bao_cao_tong_hop_so_luong_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_1__["InBaoCaoTongHopSoLuongXetNghiem"]();
                    this.pageSize = 50;
                    this.skip = 0;
                    this.urlGetDataGridChild = "";
                    this.urlGetPageDataGridChild = "";
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
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this.showDefaultPagerTemplate = true;
                    this.ishowView = false;
                    this.IsData = false;
                    this.heightToolbar = 140;
                    this.groups = [{
                            field: 'NhomDichVuBenhVienId', dir: null, aggregates: [
                                { field: 'SoLuongMauNoiTru', aggregate: 'sum' },
                                { field: 'SoLuongMauNgoaiTru', aggregate: 'sum' },
                                { field: 'SoLuongMauBHYTNoiTru', aggregate: 'sum' },
                                { field: 'SoLuongMauBHYTNgoaiTru', aggregate: 'sum' },
                                { field: 'SoLuongDichVu', aggregate: 'sum' },
                                { field: 'SoLuongKhamSucKhoe', aggregate: 'sum' },
                                { field: 'SoLuongTongHop', aggregate: 'sum' }
                            ]
                        }];
                }
                BaoCaoTongHopSoLuongXetNghiemListComponent.prototype.pageChange = function (event) {
                    this.baoCaoSearch.Skip = event.skip;
                    this.skip = event.skip;
                    this.XemBaoCao();
                };
                BaoCaoTongHopSoLuongXetNghiemListComponent.prototype.ngOnInit = function () {
                    this.urlGetDataGridChild = "BaoCao/GetDataBaoCaoTongHopSoLuongXetNghiemForGridAsyncChild";
                    this.urlGetPageDataGridChild = "BaoCao/GetTotalBaoCaoTongHopSoLuongXetNghiemForGridAsyncChild";
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTongHopSoLuongXetNghiem;
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    if (window.location.protocol == "http:") {
                        this.inBaoCaoTongHopSoLuongXetNghiem.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inBaoCaoTongHopSoLuongXetNghiem.HostingName = "https://" + window.location.host;
                    }
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 50, Template: this.sttTemplate },
                        { Field: "TenDichVu", Title: "Tên DV", Width: 120, Template: this.tenToDamTemplate },
                        { Field: "SoLuongMauNoiTru", Title: "SL mẫu nội trú", Width: 120, Template: this.soLuongMauNoiTruToDamTemplate, TemplateGroupHeader: this.sumSoLuongMauNoiTruGroupHeaderTemplate },
                        { Field: "SoLuongMauNgoaiTru", Title: "SL mẫu ngoại trú", Width: 50, Template: this.soLuongMauNgoaiTruToDamTemplate, TemplateGroupHeader: this.sumSoLuongMauNgoaiTruGroupHeaderTemplate },
                        { Field: "SoLuongMauBHYTNoiTru", Title: "SL mẫu BHYT nội trú", Width: 50, Template: this.soLuongMauBHYTNoiTruToDamTemplate, TemplateGroupHeader: this.sumSoLuongMauBHYTNoiTruGroupHeaderTemplate },
                        { Field: "SoLuongMauBHYTNgoaiTru", Title: "SL mẫu BHYT ngoại trú", Width: 120, Template: this.soLuongMauBHYTNgoaiTruToDamTemplate, TemplateGroupHeader: this.sumSoLuongMauBHYTNgoaiTruGroupHeaderTemplate },
                        { Field: "SoLuongDichVu", Title: "SL dịch vụ", Width: 120, Template: this.soLuongDichVuToDamTemplate, TemplateGroupHeader: this.sumSoLuongDichVuGroupHeaderTemplate },
                        { Field: "SoLuongKhamSucKhoe", Title: "SL khám sức khỏe", Width: 120, Template: this.soLuongKhamSucKhoeToDamTemplate, TemplateGroupHeader: this.sumSoLuongKhamSucKhoeGroupHeaderTemplate },
                        { Field: "SoLuongTongHop", Title: "SL tổng hợp", Width: 120, Template: this.soLuongTongHopToDamTemplate, TemplateGroupHeader: this.sumSoLuongTongHopGroupHeaderTemplate },
                        {
                            Field: "NhomDichVuBenhVienId",
                            Title: '',
                            Width: 150,
                            Sortable: true,
                            Hidden: true,
                            HideFilter: true,
                            TemplateGroupHeader: this.nhomDVBVGroupTemplate
                        }
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
                BaoCaoTongHopSoLuongXetNghiemListComponent.prototype.onDataBoundChild = function (event) {
                    console.log(event);
                    this.dataToSumThanhTien = event.Data;
                };
                BaoCaoTongHopSoLuongXetNghiemListComponent.prototype.exportExcel = function () {
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
                        this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoTongHopSoLuongXetNghiem.HostingName;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoTongHopSoLuongXetNghiem", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopSoLuongXetNghiem" + dateTimeNow.getFullYear() + ".xlsx");
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
                BaoCaoTongHopSoLuongXetNghiemListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
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
                    this.apiService.post("BaoCao/GetDataBaoCaoTongHopSoLuongXetNghiemTheoThoiGianForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.IsData = true;
                            _this.dataToSumAllThanhTien = resultData.Data;
                            _this.gridView = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            //this.gridView = process(resultData.Data, { group: this.groups });
                            // console.log(this.gridView)
                            // this.gridView.data.forEach((item, idx) => {
                            //   this.baoCaoGrid.collapseRow(idx);
                            // });//Đóng all expand
                            // this._isLoading = false;
                            // this._isLoadingTotalPage = false;
                            if (_this.gridView.total != 0) {
                                _this.ishowView = true;
                            }
                            else {
                                _this.ishowView = false;
                            }
                        }
                    });
                };
                return BaoCaoTongHopSoLuongXetNghiemListComponent;
            }());
            BaoCaoTongHopSoLuongXetNghiemListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "heightToolbar", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('baoCaoGrid', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "baoCaoGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonDauKyTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienTonDauKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienNhapTrongKyTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienNhapTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienXuatTrongKyTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienXuatTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonCuoiKyTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienTonCuoiKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('donGiaTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sttTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('donGiaFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "donGiaFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonDauKyFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienTonDauKyFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienNhapTrongKyFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienNhapTrongKyFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienXuatTrongKyFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienXuatTrongKyFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonCuoiKyFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienTonCuoiKyFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('donGiaGroupFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "donGiaGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonDauKyGroupFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienTonDauKyGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienNhapTrongKyGroupFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienNhapTrongKyGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienXuatTrongKyGroupFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienXuatTrongKyGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonCuoiKyGroupFooterTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "thanhTienTonCuoiKyGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('nhomDVBVGroupTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "nhomDVBVGroupTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sumSoLuongMauNoiTruGroupHeaderTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "sumSoLuongMauNoiTruGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sumSoLuongMauNgoaiTruGroupHeaderTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "sumSoLuongMauNgoaiTruGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sumSoLuongMauBHYTNoiTruGroupHeaderTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "sumSoLuongMauBHYTNoiTruGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sumSoLuongMauBHYTNgoaiTruGroupHeaderTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "sumSoLuongMauBHYTNgoaiTruGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sumSoLuongDichVuGroupHeaderTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "sumSoLuongDichVuGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sumSoLuongKhamSucKhoeGroupHeaderTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "sumSoLuongKhamSucKhoeGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sumSoLuongTongHopGroupHeaderTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "sumSoLuongTongHopGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('tenToDamTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "tenToDamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('soLuongMauNoiTruToDamTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "soLuongMauNoiTruToDamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('soLuongMauNgoaiTruToDamTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "soLuongMauNgoaiTruToDamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('soLuongMauBHYTNoiTruToDamTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "soLuongMauBHYTNoiTruToDamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('soLuongMauBHYTNgoaiTruToDamTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "soLuongMauBHYTNgoaiTruToDamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('soLuongDichVuToDamTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "soLuongDichVuToDamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('soLuongKhamSucKhoeToDamTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "soLuongKhamSucKhoeToDamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('soLuongTongHopToDamTemplate', { static: true })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent.prototype, "soLuongTongHopToDamTemplate", void 0);
            BaoCaoTongHopSoLuongXetNghiemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'app-bao-cao-tong-hop-so-luong-xet-nghiem-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tong-hop-so-luong-xet-nghiem-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tong-hop-so-luong-xet-nghiem-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.scss")).default]
                })
            ], BaoCaoTongHopSoLuongXetNghiemListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.scss": 
        /*!********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.scss ***!
          \********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10b25nLWhvcC1zby1sdW9uZy14ZXQtbmdoaWVtL2Jhby1jYW8tdG9uZy1ob3Atc28tbHVvbmcteGV0LW5naGllbS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tdG9uZy1ob3Atc28tbHVvbmcteGV0LW5naGllbVxcYmFvLWNhby10b25nLWhvcC1zby1sdW9uZy14ZXQtbmdoaWVtLXBvcHVwXFxiYW8tY2FvLXRvbmctaG9wLXNvLWx1b25nLXhldC1uZ2hpZW0tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uZy1ob3Atc28tbHVvbmcteGV0LW5naGllbS9iYW8tY2FvLXRvbmctaG9wLXNvLWx1b25nLXhldC1uZ2hpZW0tcG9wdXAvYmFvLWNhby10b25nLWhvcC1zby1sdW9uZy14ZXQtbmdoaWVtLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uZy1ob3Atc28tbHVvbmcteGV0LW5naGllbS9iYW8tY2FvLXRvbmctaG9wLXNvLWx1b25nLXhldC1uZ2hpZW0tcG9wdXAvYmFvLWNhby10b25nLWhvcC1zby1sdW9uZy14ZXQtbmdoaWVtLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.ts": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.ts ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopSoLuongXetNghiemPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopSoLuongXetNghiemPopupComponent", function () { return BaoCaoTongHopSoLuongXetNghiemPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _bao_cao_tong_hop_so_luong_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bao-cao-tong-hop-so-luong-xet-nghiem.model */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.model.ts");
            var BaoCaoTongHopSoLuongXetNghiemPopupComponent = /** @class */ (function () {
                function BaoCaoTongHopSoLuongXetNghiemPopupComponent(apiService, dialogRef, dialog, sanitizer, data) {
                    this.apiService = apiService;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.data = data;
                    this.inBaoCaoTongHopSoLuongXetNghiem = new _bao_cao_tong_hop_so_luong_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_7__["InBaoCaoTongHopSoLuongXetNghiem"]();
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.src = "";
                }
                BaoCaoTongHopSoLuongXetNghiemPopupComponent.prototype.ngOnInit = function () {
                    this.inBaoCaoTongHopSoLuongXetNghiem = this.data;
                    this.showBaoCao();
                };
                BaoCaoTongHopSoLuongXetNghiemPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                BaoCaoTongHopSoLuongXetNghiemPopupComponent.prototype.showBaoCao = function () {
                    var _this = this;
                    var loaded = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                    this.apiService.post("BaoCao/InBaoCaoTongHopSoLuongXetNghiem", this.inBaoCaoTongHopSoLuongXetNghiem).subscribe(function (resultData) {
                        if (resultData != "" && resultData != null) {
                            _this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
                        }
                        loaded.close();
                    }, function () {
                        _this.close();
                    });
                };
                BaoCaoTongHopSoLuongXetNghiemPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.apiService.post("BaoCao/InBaoCaoTongHopSoLuongXetNghiem", _this.inBaoCaoTongHopSoLuongXetNghiem).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                        _this.close();
                    });
                };
                return BaoCaoTongHopSoLuongXetNghiemPopupComponent;
            }());
            BaoCaoTongHopSoLuongXetNghiemPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            BaoCaoTongHopSoLuongXetNghiemPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-tong-hop-so-luong-xet-nghiem-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], BaoCaoTongHopSoLuongXetNghiemPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-routing.module.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-routing.module.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopSoLuongXetNghiemRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopSoLuongXetNghiemRoutingModule", function () { return BaoCaoTongHopSoLuongXetNghiemRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_tong_hop_so_luong_xet_nghiem_list_bao_cao_tong_hop_so_luong_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_tong_hop_so_luong_xet_nghiem_list_bao_cao_tong_hop_so_luong_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTongHopSoLuongXetNghiemListComponent"],
                    data: {
                        title: 'Báo cáo xuất nhập tồn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTongHopSoLuongXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTongHopSoLuongXetNghiemRoutingModule = /** @class */ (function () {
                function BaoCaoTongHopSoLuongXetNghiemRoutingModule() {
                }
                return BaoCaoTongHopSoLuongXetNghiemRoutingModule;
            }());
            BaoCaoTongHopSoLuongXetNghiemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTongHopSoLuongXetNghiemRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.model.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.model.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopSoLuongXetNghiemSearch, BaoCaoTongHopSoLuongXetNghiem, InBaoCaoTongHopSoLuongXetNghiem */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopSoLuongXetNghiemSearch", function () { return BaoCaoTongHopSoLuongXetNghiemSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopSoLuongXetNghiem", function () { return BaoCaoTongHopSoLuongXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoTongHopSoLuongXetNghiem", function () { return InBaoCaoTongHopSoLuongXetNghiem; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTongHopSoLuongXetNghiemSearch = /** @class */ (function () {
                function BaoCaoTongHopSoLuongXetNghiemSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (KhoId === void 0) { KhoId = null; }
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
                    this.KhoId = KhoId;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoTongHopSoLuongXetNghiemSearch;
            }());
            var BaoCaoTongHopSoLuongXetNghiem = /** @class */ (function () {
                function BaoCaoTongHopSoLuongXetNghiem(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
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
                return BaoCaoTongHopSoLuongXetNghiem;
            }());
            var InBaoCaoTongHopSoLuongXetNghiem = /** @class */ (function () {
                function InBaoCaoTongHopSoLuongXetNghiem(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoTongHopSoLuongXetNghiem;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.module.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.module.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopSoLuongXetNghiemModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopSoLuongXetNghiemModule", function () { return BaoCaoTongHopSoLuongXetNghiemModule; });
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
            /* harmony import */ var _bao_cao_tong_hop_so_luong_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-tong-hop-so-luong-xet-nghiem-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-routing.module.ts");
            /* harmony import */ var _bao_cao_tong_hop_so_luong_xet_nghiem_list_bao_cao_tong_hop_so_luong_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component.ts");
            /* harmony import */ var _bao_cao_tong_hop_so_luong_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-tong-hop-so-luong-xet-nghiem.service */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.service.ts");
            /* harmony import */ var _bao_cao_tong_hop_so_luong_xet_nghiem_popup_bao_cao_tong_hop_so_luong_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component.ts");
            var BaoCaoTongHopSoLuongXetNghiemModule = /** @class */ (function () {
                function BaoCaoTongHopSoLuongXetNghiemModule() {
                }
                return BaoCaoTongHopSoLuongXetNghiemModule;
            }());
            BaoCaoTongHopSoLuongXetNghiemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_tong_hop_so_luong_xet_nghiem_list_bao_cao_tong_hop_so_luong_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTongHopSoLuongXetNghiemListComponent"], _bao_cao_tong_hop_so_luong_xet_nghiem_popup_bao_cao_tong_hop_so_luong_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoTongHopSoLuongXetNghiemPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_tong_hop_so_luong_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_18__["BaoCaoTongHopSoLuongXetNghiemRoutingModule"],
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
                        _bao_cao_tong_hop_so_luong_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTongHopSoLuongXetNghiemService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_tong_hop_so_luong_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTongHopSoLuongXetNghiemService"] },
                    ],
                    entryComponents: [
                        _bao_cao_tong_hop_so_luong_xet_nghiem_popup_bao_cao_tong_hop_so_luong_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoTongHopSoLuongXetNghiemPopupComponent"]
                    ]
                })
            ], BaoCaoTongHopSoLuongXetNghiemModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.service.ts": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.service.ts ***!
          \***************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopSoLuongXetNghiemService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopSoLuongXetNghiemService", function () { return BaoCaoTongHopSoLuongXetNghiemService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoTongHopSoLuongXetNghiemService = /** @class */ (function (_super) {
                __extends(BaoCaoTongHopSoLuongXetNghiemService, _super);
                function BaoCaoTongHopSoLuongXetNghiemService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoTongHopSoLuongXetNghiemService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoTongHopSoLuongXetNghiemService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoTongHopSoLuongXetNghiemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoTongHopSoLuongXetNghiemService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-so-luong-xet-nghiem-bao-cao-tong-hop-so-luong-xet-nghiem-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-so-luong-xet-nghiem-bao-cao-tong-hop-so-luong-xet-nghiem-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-so-luong-xet-nghiem-bao-cao-tong-hop-so-luong-xet-nghiem-module-es5.js.map