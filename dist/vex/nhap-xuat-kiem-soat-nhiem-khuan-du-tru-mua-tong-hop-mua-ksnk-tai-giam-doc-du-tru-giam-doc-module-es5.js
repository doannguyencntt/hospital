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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-mua-ksnk-tai-giam-doc-du-tru-giam-doc-module"], {
        /***/ "./node_modules/@iconify/icons-ic/baseline-info.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/baseline-info.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.html": 
        /*!***************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.html ***!
          \***************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Nhập Xuất',Path:''},\n    {Title:'Hành chính - KSNK',Path:''},\n    {Title:'Dự Trù Mua',Path:''},\n    {Title:'Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn Tại Giám Đốc',\n    Path:'/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc', queryParams: {holdQuery : true}, Active: true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b render-tu-choi\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">{{title}}</h2>\n                <div [innerHTML]=\"tinhTrangTxt\"></div>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-du-tru-giam-doc-shared (fireStatus)=\"GetCurrentStatus($event)\" #shared></app-du-tru-giam-doc-shared>\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <button type=\"button\" (click)=\"Back()\" mat-raised-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i>\n                        {{txtReturn}}</button>\n                    <button *ngIf=\"status==null\" type=\"button\" color=\"warn\" (click)=\"Decline()\" mat-raised-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i>\n                        Từ Chối</button>\n                    <button *ngIf=\"status==null\" type=\"button\" color=\"primary\" (click)=\"Approve()\" mat-raised-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i>\n                        Duyệt</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.html": 
        /*!*******************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.html ***!
          \*******************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n        {Title:'Nhập Xuất',Path:''},\n        {Title:'Hành chính - KSNK',Path:''},\n        {Title:'Dự Trù Mua',Path:''},\n        {Title:'Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn Tại Giám Đốc',\n        Path:'/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc', Active: true}\n        ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent baseRoute=\"nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc\" [sort]=\"sort\" [additionalSearchString]=\"additionalSearchString\" [gridColumns]=\"gridColumns\" [lazyLoadPage]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                (extOnDataBound)=\"SetColorForTrangThai()\" [checkboxAble]=\"false\" [useHeaderDefault]=\"false\" [searchString]=\"search.SearchString\" [headerTemplate]=\"headerTemplate\" [useActionDefault]=\"false\" [detailTemplate]=\"detailTemplate\">\n            </app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid [detailTemplate]=\"detailTemplateChild\" *ngIf=\"dataItem.TrangThai==null\" baseRoute=\"nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc\" [gridColumns]=\"gridChildChoDuyetColumns\" pageSize=\"5\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [sort]=\"sortChild\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [groups]=\"groupLoais\" [urlGetData]=\"urlGetDataGridChild\" [groups]=\"groupLoais\" [showStt]=\"true\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    [additionalSearchString]=\"dataItem.Id\" [autoHeight]=\"true\">\n                </app-grid>\n                <app-grid [detailTemplate]=\"detailTemplateChild\" *ngIf=\"dataItem.TrangThai!=null\" baseRoute=\"nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc\" [gridColumns]=\"gridChildColumns\" pageSize=\"5\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [sort]=\"sortChild\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [groups]=\"groupLoais\" [urlGetData]=\"urlGetDataGridChild\" [groups]=\"groupLoais\" [showStt]=\"true\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    [additionalSearchString]=\"dataItem.Id\" [autoHeight]=\"true\">\n                </app-grid>\n                <ng-template #detailTemplateChild let-dataItem>\n                    <app-grid baseRoute=\"nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc\" [gridColumns]=\"gridResultColumns\" pageSize=\"5\" [checkboxAble]=\"false\" [sort]=\"sortChildForChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [urlGetData]=\"urlGetDataGridChildForChild\" additionalSearchString=\"{{dataItem.Id}}-{{dataItem.IsBhyt}}\" [autoHeight]=\"true\" [groups]=\"groups\" [showStt]=\"true\">\n                    </app-grid>\n\n                </ng-template>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, true)\" id=\"DangChoDuyetId\" [(model)]=\"search.DangChoDuyet\" class=\"ml-2\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, false, true)\" id=\"DaDuyetId\" [(model)]=\"search.DaDuyet\" class=\"ml-2\" label=\"Đã duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, true)\" id=\"TuChoiDuyetId\" [(model)]=\"search.TuChoiDuyet\" class=\"ml-2\" label=\"Từ chối\">\n                    </app-checkbox>\n\n                    <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchString\" [(ngModel)]=\"search.SearchString\" (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                    </div>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\" [(model)]=\"search.RangeYeuCau\" label=\"Yêu cầu từ ngày - đến ngày\" (modelChange)=\"Timkiem()\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-duyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\" [(model)]=\"search.RangeDuyet\" label=\"Giám đốc duyệt từ ngày - đến ngày\" (modelChange)=\"Timkiem()\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n          </button>\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n          </button>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n            <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n          </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"!column.HideFilter\" class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                  {{ column.Title }}\n                </mat-checkbox>\n              </button>\n                        </div>\n                    </mat-menu>\n                </div>\n            </ng-template>\n\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>\n\n<ng-template #soLuongTemplate let-dataItem>\n    {{dataItem.SoLuongTra | number:'1.0':'vi-VN' }}\n</ng-template>\n\n<ng-template #giaTemplate let-dataItem>\n    {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <button type=\"button\" *ngIf=\"dataItem.TrangThai == null\" (click)=\"Decline(dataItem)\" color=\"warn\" mat-raised-button>Từ\n    chối</button>\n    <button type=\"button\" class=\"duyet\" *ngIf=\"dataItem.TrangThai == null\" (click)=\"Approve(dataItem)\" color=\"primary\" mat-raised-button>Duyệt</button>\n</ng-template>\n\n<ng-template #trangThaiTemplate let-dataItem>\n    <div [innerHtml]=\"dataItem.TrangThaiDisplay\"></div>\n</ng-template>\n\n<ng-template #soPhieuTemplate let-dataItem>\n    <a (click)=\"edit(dataItem.Id)\">{{dataItem.SoPhieu}}</a>\n</ng-template>\n\n<ng-template #ngayYeuCauTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetTemplate let-dataItem>\n    {{dataItem.NgayDuyetDisplay}}\n</ng-template>\n\n<ng-template #orderTemplate let-i=\"rowIndex\">\n    {{i + 1}}\n</ng-template>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #soLuongDuTruTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTru | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #soLuongDuKienTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuKienTrongKy | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #soLuongDuTruTrKhoaTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTruTrKhoa | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #soLuongDuTruKhDuocTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTruKhDuoc | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #soLuongDuTruDirectorTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTruDirector | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #khoDuTruTonTemplate let-dataItem>\n    <span>{{dataItem.KhoDuTruTon | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #khoTongTonTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let kho of khos\">\n                <td>{{kho.Name}}:</td>\n                <td>{{kho.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n      <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n    </span>\n    </div>\n</ng-template>\n\n<ng-template #hdChuaNhapTemplate let-dataItem>\n    <ng-template #templateHdInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let hdt of hdts\">\n                <td>{{hdt.Name}}:</td>\n                <td>{{hdt.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HdChuaNhap | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.HdChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateHdInfo\" filter=\"*\">\n      <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n    </span>\n    </div>\n</ng-template>\n\n<ng-template #khoaGroupHeader let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n<ng-template #soLuongDuTruHeaderTemplate let-aggregates=\"aggregates\">\n    <strong>{{aggregates.SoLuongDuTru.sum | number:'1.0':'vi-VN' }}</strong>\n</ng-template>\n\n<ng-template #soLuongDuKienHeaderTemplate let-aggregates=\"aggregates\">\n    <strong>{{aggregates.SoLuongDuKienTrongKy.sum | number:'1.0':'vi-VN' }}</strong>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-shared/du-tru-giam-doc-shared.component.html": 
        /*!***********************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-shared/du-tru-giam-doc-shared.component.html ***!
          \***********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div *ngIf=\"duTruGiamDoc.TrangThai==false\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"color: red;\">Lý do: {{duTruGiamDoc.LyDoGiamDocTuChoi}}\n    </div>\n    <app-textbox id=\"so-phieu\" fxFlex=\"20\" fxFlex.sm=\"100\" [required]=\"true\" [(model)]=\"duTruGiamDoc.SoPhieu\" [disabled]=\"true\" label=\"Số phiếu\" [validationerror]=\"'SoPhieu' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-dropdownlist id=\"ky-du-tru\" fxFlex=\"20\" fxFlex.sm=\"100\" [disabled]=\"true\" fxFlex.sm=\"100\" [required]=\"true\" [(model)]=\"duTruGiamDoc.KyDuTru\" [modelText]=\"duTruGiamDoc.KyDuTru\" label=\"Kỳ dự trù\">\n    </app-dropdownlist>\n\n    <app-textbox id=\"nguoi-yeu-cau\" fxFlex=\"20\" fxFlex.sm=\"100\" [(model)]=\"duTruGiamDoc.NguoiYeuCau\" [required]=\"true\" maxlength=\"250\" label=\"Người yêu cầu\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datepicker id=\"ngay-yeu-cau\" fxFlex=\"20\" fxFlex.sm=\"100\" [(model)]=\"duTruGiamDoc.NgayYeuCau\" [disabled]=\"true\" [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"duTruGiamDoc.TrangThai==true\" id=\"nguoi-duyet\" fxFlex=\"20\" fxFlex.sm=\"100\" [(model)]=\"duTruGiamDoc.NguoiDuyet\" [required]=\"true\" maxlength=\"250\" label=\"Người duyệt\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"duTruGiamDoc.TrangThai==true\" id=\"ngay-duyet\" fxFlex=\"20\" fxFlex.sm=\"100\" [(model)]=\"duTruGiamDoc.NgayDuyet\" [disabled]=\"true\" [required]=\"true\" label=\"Ngày duyệt\">\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"duTruGiamDoc.TrangThai==false\" id=\"nguoi-tu-choi\" fxFlex=\"20\" fxFlex.sm=\"100\" [(model)]=\"duTruGiamDoc.NguoiDuyet\" [required]=\"true\" maxlength=\"250\" label=\"Người từ chối\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"duTruGiamDoc.TrangThai==false\" id=\"ngay-tu-choi\" fxFlex=\"20\" fxFlex.sm=\"100\" [(model)]=\"duTruGiamDoc.NgayDuyet\" [disabled]=\"true\" [required]=\"true\" label=\"Ngày từ chối\">\n    </app-datepicker>\n\n    <app-textarea id=\"ghi-chu\" fxFlex=\"auto\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\" [disabled]=\"true\" [(model)]=\"duTruGiamDoc.GhiChu\">\n    </app-textarea>\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin chi tiết</h3>\n    <app-grid *ngIf=\"duTruGiamDoc.TrangThai==null\" [groups]=\"groupLoais\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\" [gridColumns]=\"gridColumnsChoDuyet\" [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [sort]=\"sort\" [additionalSearchString]=\"id\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" maxHeight=\"500\" [urlGetData]=\"urlGetDataChuaDuyetGrid\" [detailTemplate]=\"detailTemplate\" (extOnDataBound)=\"GetListVatTu($event)\"\n        [showStt]=\"true\">\n    </app-grid>\n    <app-grid *ngIf=\"duTruGiamDoc.TrangThai!=null\" [groups]=\"groupLoais\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\" [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [sort]=\"sort\" [additionalSearchString]=\"id\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" maxHeight=\"500\" [urlGetData]=\"urlGetDataDuyetGrid\" [detailTemplate]=\"detailTemplate\" (extOnDataBound)=\"GetListVatTu($event)\" [showStt]=\"true\">\n    </app-grid>\n\n    <ng-template #soLuongDuTruTemplate let-dataItem>\n        <span>{{dataItem.SoLuongDuTru | number:'1.0':'vi-VN' }}</span>\n    </ng-template>\n    <ng-template #soLuongDuKienTemplate let-dataItem>\n        <span>{{dataItem.SoLuongDuKienTrongKy | number:'1.0':'vi-VN' }}</span>\n    </ng-template>\n    <ng-template #directorTemplate let-dataItem>\n        <app-textboxnumeric id=\"giam-doc-duyet\" fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"no-label p-0\" min=\"1\" max=\"9999999\" [(model)]=\"dataItem.SoLuongDuTruDirector\" label=\" \" [validationerror]=\"'SoLuongDuTruDirector[' + duTruGiamDoc.DuTruGiamDocDetails.indexOf(dataItem) + ']' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n    </ng-template>\n\n    <ng-template #detailTemplate let-dataItem>\n        <app-grid baseRoute=\"nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc\" [gridColumns]=\"gridResultColumns\" pageSize=\"5\" [checkboxAble]=\"false\" [sort]=\"sort\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [urlGetData]=\"urlGetDataGridChild\" additionalSearchString=\"{{dataItem.Id}}-{{dataItem.IsBhyt}}\" [autoHeight]=\"true\" [groups]=\"groups\" [showStt]=\"true\">\n        </app-grid>\n    </ng-template>\n</div>\n<ng-template #soLuongDuTruHeaderTemplate let-aggregates=\"aggregates\">\n    <strong>{{aggregates.SoLuongDuTru.sum | number:'1.0':'vi-VN' }}</strong>\n</ng-template>\n<ng-template #soLuongDuKienHeaderTemplate let-aggregates=\"aggregates\">\n    <strong>{{aggregates.SoLuongDuKienTrongKy.sum | number:'1.0':'vi-VN' }}</strong>\n</ng-template>\n<ng-template #khoTongTonTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let kho of khos\">\n                <td>{{kho.Name}}:</td>\n                <td>{{kho.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<ng-template #hdChuaNhapTemplate let-dataItem>\n    <ng-template #templateHdInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let hdt of hdts\">\n                <td>{{hdt.Name}}:</td>\n                <td>{{hdt.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HdChuaNhap | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.HdChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateHdInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #khoaGroupHeader let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #slDuTruTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTru | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #slDuKienTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuKienTrongKy | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #khoDuTruTonTemplate let-dataItem>\n    <span>{{dataItem.KhoDuTruTon | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #truongKhoaTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTruTrKhoa | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #khoaDuocTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTruKhDuoc | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #directorReadonlyTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTruDirector | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.html": 
        /*!*************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.html ***!
          \*************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close('No')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\" [innerHtml]=\"message\"></div>\n\n        <app-textarea id=\"ly-do\" [required]=\"true\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\" minHeight=\"20\" [validationerror]=\"'LyDo' | validationerror:validationErrors\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close('No')\">Không</button>\n    <button mat-button color=\"primary\" (click)=\"close('Yes - ' + lyDo)\">Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.scss": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.scss ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".render-tu-choi {\n  justify-content: space-between !important;\n}\n\n.form-footer {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1tdWEta3Nuay10YWktZ2lhbS1kb2MvZHUtdHJ1LWdpYW0tZG9jLWNoaS10aWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxraWVtLXNvYXQtbmhpZW0ta2h1YW5cXGR1LXRydS1tdWFcXHRvbmctaG9wLW11YS1rc25rLXRhaS1naWFtLWRvY1xcZHUtdHJ1LWdpYW0tZG9jLWNoaS10aWV0XFxkdS10cnUtZ2lhbS1kb2MtY2hpLXRpZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtbXVhLWtzbmstdGFpLWdpYW0tZG9jL2R1LXRydS1naWFtLWRvYy1jaGktdGlldC9kdS10cnUtZ2lhbS1kb2MtY2hpLXRpZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtbXVhLWtzbmstdGFpLWdpYW0tZG9jL2R1LXRydS1naWFtLWRvYy1jaGktdGlldC9kdS10cnUtZ2lhbS1kb2MtY2hpLXRpZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVuZGVyLXR1LWNob2kge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iLCIucmVuZGVyLXR1LWNob2kge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.ts": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.ts ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: DuTruGiamDocChiTietComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruGiamDocChiTietComponent", function () { return DuTruGiamDocChiTietComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _du_tru_giam_doc_tu_choi_popup_du_tru_giam_doc_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.ts");
            var DuTruGiamDocChiTietComponent = /** @class */ (function () {
                function DuTruGiamDocChiTietComponent(route, dialog, authService, apiService, notificationService, router) {
                    this.route = route;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.tinhTrangTxt = null;
                    this.txtReturn = null;
                    this.title = null;
                    this.status = null;
                }
                DuTruGiamDocChiTietComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__["DocumentType"].THDTMuaTaiGiamDoc;
                    this.id = this.route.snapshot.params.id;
                };
                DuTruGiamDocChiTietComponent.prototype.Back = function () {
                    this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc'], {
                        queryParamsHandling: 'preserve',
                    });
                };
                DuTruGiamDocChiTietComponent.prototype.Decline = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update)) {
                        this.dialog.open(_du_tru_giam_doc_tu_choi_popup_du_tru_giam_doc_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_12__["DuTruGiamDocTuChoiPopupComponent"], {
                            disableClose: false,
                            width: '450px',
                            height: '250px',
                            data: {}
                        }).afterClosed().subscribe(function (result) {
                            if (result && result.includes('Yes')) {
                                var resSplit = result.split(' - ');
                                var reqParam = _this.shared.ReturnData(resSplit[1]);
                                _this.apiService.post('YeuCauMuaKSNK/Decline', reqParam).subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["DuTruGiamDocMessage"].MessageDecline);
                                    _this.Back();
                                }, function (err) {
                                    _this.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuTruGiamDocChiTietComponent.prototype.Approve = function () {
                    var _this = this;
                    var confirm = 'duyệt';
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessLockTemplate, [confirm, 'phiếu dự trù']) }
                        }).afterClosed().subscribe(function (result) {
                            if (result === 'Yes') {
                                var reqParam = _this.shared.ReturnData();
                                if (reqParam === 0) {
                                    return;
                                }
                                _this.apiService.post('YeuCauMuaKSNK/ApproveForm', reqParam).subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["DuTruGiamDocMessage"].MessageApprove);
                                    _this.Back();
                                }, function (err) {
                                    _this.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuTruGiamDocChiTietComponent.prototype.GetCurrentStatus = function (status) {
                    this.status = status;
                    this.tinhTrangTxt = status === true ? '<span class="green-txt">Đã duyệt</span>' : (status === false ?
                        '<span class="red - txt">Từ chối</span>' :
                        '<span class="orange-txt">Chờ duyệt</span>');
                    this.txtReturn = status == null ? 'Hủy' : 'Quay lại';
                    this.title = status == null ? 'Duyệt Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn' : 'Chi Tiết Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn';
                    setTimeout(function () {
                        $('.orange-txt').css('color', 'orange');
                        $('.red-txt').css('color', 'red');
                        $('.green-txt').css('color', 'green');
                    }, 50);
                };
                return DuTruGiamDocChiTietComponent;
            }());
            DuTruGiamDocChiTietComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shared', { static: false })
            ], DuTruGiamDocChiTietComponent.prototype, "shared", void 0);
            DuTruGiamDocChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-du-tru-giam-doc-chi-tiet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./du-tru-giam-doc-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./du-tru-giam-doc-chi-tiet.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.scss")).default]
                })
            ], DuTruGiamDocChiTietComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.scss": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.scss ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".duyet {\n  margin-left: 16px;\n}\n\n.kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1tdWEta3Nuay10YWktZ2lhbS1kb2MvZHUtdHJ1LWdpYW0tZG9jLWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxcZHUtdHJ1LW11YVxcdG9uZy1ob3AtbXVhLWtzbmstdGFpLWdpYW0tZG9jXFxkdS10cnUtZ2lhbS1kb2MtbGlzdFxcZHUtdHJ1LWdpYW0tZG9jLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtbXVhLWtzbmstdGFpLWdpYW0tZG9jL2R1LXRydS1naWFtLWRvYy1saXN0L2R1LXRydS1naWFtLWRvYy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtbXVhLWtzbmstdGFpLWdpYW0tZG9jL2R1LXRydS1naWFtLWRvYy1saXN0L2R1LXRydS1naWFtLWRvYy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR1eWV0IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5raG8tdG9uZy10b24tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5raG8tdG9uZy10b24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iLCIuZHV5ZXQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmtoby10b25nLXRvbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmtoby10b25nLXRvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.ts": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.ts ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: DuTruGiamDocListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruGiamDocListComponent", function () { return DuTruGiamDocListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _du_tru_giam_doc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../du-tru-giam-doc.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.model.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _du_tru_giam_doc_tu_choi_popup_du_tru_giam_doc_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.ts");
            var DuTruGiamDocListComponent = /** @class */ (function () {
                function DuTruGiamDocListComponent(route, router, notificationService, apiService, dialog, authService) {
                    this.route = route;
                    this.router = router;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.holdQuery = null;
                    this.additionalSearchString = null;
                    this.search = new _du_tru_giam_doc_model__WEBPACK_IMPORTED_MODULE_5__["Search"]();
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.gridChildChoDuyetColumns = [];
                    this.gridResultColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.urlGetDataGridChild = 'YeuCauMuaKSNK/GetDataForGridChildDuyetAsync';
                    this.urlGetTotalPageGridChild = 'YeuCauMuaKSNK/GetTotalPageForGridChildAsync';
                    this.urlGetDataGridChildForChild = 'YeuCauMuaKSNK/GetDataForGridDuyetDetail';
                    this.query = null;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
                    this.baseRoute = 'nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc';
                    this.khos = [];
                    this.hdts = [];
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.sort = [{
                            field: 'NgayYeuCau',
                            dir: 'asc'
                        },
                        {
                            field: 'Id',
                            dir: 'asc'
                        }];
                    this.sortChild = [
                        {
                            field: 'Id',
                            dir: 'asc'
                        }
                    ];
                    this.groups = [{
                            field: 'Khoa', aggregates: [
                                { field: 'SoLuongDuTru', aggregate: 'sum' },
                                { field: 'SoLuongDuKienTrongKy', aggregate: 'sum' }
                            ]
                        }];
                    this.sortChildForChild = [
                        {
                            field: 'Id',
                            dir: 'asc'
                        }
                    ];
                    this.groupLoais = [{ field: 'Loai', dir: 'asc', aggregates: [] }];
                }
                DuTruGiamDocListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].THDTMuaTaiGiamDoc;
                    if (this.route.snapshot.queryParams.holdQuery != null) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null &&
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].getItem('adtSearchKSNKDuTruGiamDocNhomKSNK') != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].getItem('adtSearchKSNKDuTruGiamDocNhomKSNK');
                        this.search = JSON.parse(this.additionalSearchString);
                        if (this.search.RangeYeuCau != null) {
                            if (this.search.RangeYeuCau.startDate != null) {
                                var startDate = new Date(this.search.RangeYeuCau.startDate);
                                this.search.RangeYeuCau.startDate = new Date(startDate);
                            }
                            if (this.search.RangeYeuCau.endDate != null) {
                                var endDate = new Date(this.search.RangeYeuCau.endDate);
                                this.search.RangeYeuCau.endDate = new Date(endDate);
                            }
                        }
                        if (this.search.RangeDuyet != null) {
                            if (this.search.RangeDuyet.startDate != null) {
                                var startDate = new Date(this.search.RangeDuyet.startDate);
                                this.search.RangeDuyet.startDate = new Date(startDate);
                            }
                            if (this.search.RangeDuyet.endDate != null) {
                                var endDate = new Date(this.search.RangeDuyet.endDate);
                                this.search.RangeDuyet.endDate = new Date(endDate);
                            }
                        }
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('adtSearchKSNKDuTruGiamDocNhomKSNK', null);
                        this.additionalSearchString = JSON.stringify(this.search);
                    }
                    this.gridColumns = [
                        { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 202, Sortable: true, Template: this.soPhieuTemplate },
                        { Field: 'KyDuTru', Title: 'Kỳ Dự Trù', Sortable: true, Width: 213 },
                        { Field: 'NguoiYeuCau', Title: 'Người Yêu Cầu', Width: 277, Sortable: true },
                        { Field: 'NgayYeuCau', Title: 'Ngày Yêu Cầu', Width: 360, Sortable: true, Template: this.ngayYeuCauTemplate },
                        { Field: 'TrangThai', Title: 'Trạng Thái', Width: 134, Sortable: false, Template: this.trangThaiTemplate },
                        { Field: 'NgayDuyet', Title: 'Ngày G.Đốc Duyệt', Width: 160, Sortable: true, Template: this.ngayDuyetTemplate },
                        { Field: '', Title: '', HideFilter: true, Width: 209, Template: this.actionTemplate }
                    ];
                    this.gridChildColumns = [
                        { Field: 'Loai', Title: 'Loại', ShowTooltip: true, Width: 67, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'VatTu', Title: 'Kiểm Soát Nhiễm Khuẩn', ShowTooltip: true, MinWidth: 96 },
                        { Field: 'Dvt', Title: 'ĐVT', ShowTooltip: true, Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 103 },
                        { Field: 'NhaSx', Title: 'Nhà SX', ShowTooltip: true, Width: 80 },
                        { Field: 'NuocSx', Title: 'Nước SX', ShowTooltip: true, Width: 83 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự trù', Width: 120, Template: this.soLuongDuTruTemplate },
                        { Field: 'SoLuongDuKienTrongKy', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 210, Template: this.soLuongDuKienTemplate },
                        { Field: 'SoLuongDuTruTrKhoa', Title: 'T.Khoa Duyệt', Width: 120, Template: this.soLuongDuTruTrKhoaTemplate },
                        { Field: 'SoLuongDuTruKhDuoc', Title: 'K.Dược Duyệt', Width: 120, Template: this.soLuongDuTruKhDuocTemplate },
                        { Field: 'SoLuongDuTruDirector', Title: 'G.Đốc Duyệt', Width: 120, Template: this.soLuongDuTruDirectorTemplate }
                    ];
                    this.gridChildChoDuyetColumns = [
                        { Field: 'Loai', Title: 'Loại', ShowTooltip: true, Width: 67, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'VatTu', Title: 'Kiểm Soát Nhiễm Khuẩn', ShowTooltip: true, MinWidth: 96 },
                        { Field: 'Dvt', Title: 'ĐVT', ShowTooltip: true, Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 103 },
                        { Field: 'NhaSx', Title: 'Nhà SX', ShowTooltip: true, Width: 80 },
                        { Field: 'NuocSx', Title: 'Nước SX', ShowTooltip: true, Width: 83 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự trù', Width: 80, Template: this.soLuongDuTruTemplate },
                        { Field: 'SoLuongDuKienTrongKy', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 210, Template: this.soLuongDuKienTemplate },
                        { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 115, Template: this.khoDuTruTonTemplate },
                        { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 111, Template: this.khoTongTonTemplate },
                        { Field: 'HdChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 150, Template: this.hdChuaNhapTemplate },
                        { Field: 'SoLuongDuTruTrKhoa', Title: 'T.Khoa Duyệt', Width: 100, Template: this.soLuongDuTruTrKhoaTemplate },
                        { Field: 'SoLuongDuTruKhDuoc', Title: 'K.Dược Duyệt', Width: 100, Template: this.soLuongDuTruKhDuocTemplate },
                        { Field: 'SoLuongDuTruDirector', Title: 'G.Đốc Duyệt', Width: 100, Template: this.soLuongDuTruDirectorTemplate }
                    ];
                    this.gridResultColumns = [
                        {
                            Field: 'Khoa',
                            Title: '',
                            Hidden: true,
                            TemplateGroupHeader: this.khoaGroupHeader
                        },
                        { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: false },
                        {
                            Field: 'SoLuongDuTru', Title: 'SL dự trù', Width: 100, Sortable: false,
                            TemplateGroupFooter: this.soLuongDuTruHeaderTemplate, Template: this.soLuongDuTruTemplate
                        },
                        {
                            Field: 'SoLuongDuKienTrongKy', Title: 'SL dự kiến trong kỳ', Width: 170, Sortable: false,
                            TemplateGroupFooter: this.soLuongDuKienHeaderTemplate, Template: this.soLuongDuKienTemplate
                        },
                    ];
                };
                DuTruGiamDocListComponent.prototype.TooltipCustom = function (duTruGiamDocDetail) {
                    this.khos = duTruGiamDocDetail.TongTonList.slice();
                    this.hdts = duTruGiamDocDetail.HdChuaNhapList.slice();
                };
                DuTruGiamDocListComponent.prototype.CheckboxChange = function ($event, dangChoDuyet, tuChoiDuyet, daDuyet) {
                    if (dangChoDuyet === void 0) { dangChoDuyet = false; }
                    if (tuChoiDuyet === void 0) { tuChoiDuyet = false; }
                    if (daDuyet === void 0) { daDuyet = false; }
                    this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc?holdQuery=true');
                    if (dangChoDuyet) {
                        this.search.DangChoDuyet = $event;
                    }
                    else if (tuChoiDuyet) {
                        this.search.TuChoiDuyet = $event;
                    }
                    else if (daDuyet) {
                        this.search.DaDuyet = $event;
                    }
                    this.Timkiem();
                };
                DuTruGiamDocListComponent.prototype.SetColorForTrangThai = function () {
                    setTimeout(function () {
                        $('.orange-txt').css('color', 'orange');
                        $('.red-txt').css('color', 'red');
                        $('.green-txt').css('color', 'green');
                    }, 50);
                };
                DuTruGiamDocListComponent.prototype.Timkiem = function () {
                    var QueryString = null;
                    this.gridParent._additionalSearchString = null;
                    QueryString = this.search.SearchString;
                    this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc?holdQuery=true');
                    var searchClone = JSON.parse(JSON.stringify(this.search));
                    if (searchClone.RangeYeuCau.startDate != null) {
                        var startDate = new Date(searchClone.RangeYeuCau.startDate);
                        searchClone.RangeYeuCau.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                    }
                    if (searchClone.RangeYeuCau.endDate != null) {
                        var endDate = new Date(searchClone.RangeYeuCau.endDate);
                        searchClone.RangeYeuCau.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (searchClone.RangeDuyet.startDate != null) {
                        var startDate = new Date(searchClone.RangeDuyet.startDate);
                        searchClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                    }
                    if (searchClone.RangeDuyet.endDate != null) {
                        var endDate = new Date(searchClone.RangeDuyet.endDate);
                        searchClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    this.query = JSON.stringify(searchClone);
                    var queryForHold = JSON.parse(JSON.stringify(searchClone));
                    if (queryForHold.RangeYeuCau != null) {
                        if (queryForHold.RangeYeuCau.startDate != null) {
                            queryForHold.RangeYeuCau.startDate = new Date(queryForHold.RangeYeuCau.startDate);
                        }
                        if (queryForHold.RangeYeuCau.endDate != null) {
                            queryForHold.RangeYeuCau.endDate = new Date(queryForHold.RangeYeuCau.endDate);
                        }
                    }
                    if (queryForHold.RangeDuyet != null) {
                        if (queryForHold.RangeDuyet.startDate != null) {
                            queryForHold.RangeDuyet.startDate = new Date(queryForHold.RangeDuyet.startDate);
                        }
                        if (queryForHold.RangeDuyet.endDate != null) {
                            queryForHold.RangeDuyet.endDate = new Date(queryForHold.RangeDuyet.endDate);
                        }
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('adtSearchKSNKDuTruGiamDocNhomKSNK', JSON.stringify(queryForHold));
                    this.gridParent._additionalSearchString = this.query;
                    this.gridParent.searchString = QueryString;
                    this.gridParent.search();
                };
                DuTruGiamDocListComponent.prototype.clearSearch = function () {
                    if (this.search.SearchString === '' || this.search.SearchString == null) {
                        var searchClone = JSON.parse(JSON.stringify(this.search));
                        if (searchClone.RangeYeuCau.startDate != null) {
                            var startDate = new Date(searchClone.RangeYeuCau.startDate);
                            searchClone.RangeYeuCau.startDate = new Date(startDate);
                        }
                        if (searchClone.RangeYeuCau.endDate != null) {
                            var endDate = new Date(searchClone.RangeYeuCau.endDate);
                            searchClone.RangeYeuCau.endDate = new Date(endDate);
                        }
                        if (searchClone.RangeDuyet.startDate != null) {
                            var startDate = new Date(searchClone.RangeDuyet.startDate);
                            searchClone.RangeDuyet.startDate = new Date(startDate);
                        }
                        if (searchClone.RangeDuyet.endDate != null) {
                            var endDate = new Date(searchClone.RangeDuyet.endDate);
                            searchClone.RangeDuyet.endDate = new Date(endDate);
                        }
                        this.query = JSON.stringify(searchClone);
                        var queryForHold = JSON.parse(JSON.stringify(searchClone));
                        if (queryForHold.RangeYeuCau != null) {
                            if (queryForHold.RangeYeuCau.startDate != null) {
                                queryForHold.RangeYeuCau.startDate = new Date(queryForHold.RangeYeuCau.startDate);
                            }
                            if (queryForHold.RangeYeuCau.endDate != null) {
                                queryForHold.RangeYeuCau.endDate = new Date(queryForHold.RangeYeuCau.endDate);
                            }
                        }
                        if (queryForHold.RangeDuyet != null) {
                            if (queryForHold.RangeDuyet.startDate != null) {
                                queryForHold.RangeDuyet.startDate = new Date(queryForHold.RangeDuyet.startDate);
                            }
                            if (queryForHold.RangeDuyet.endDate != null) {
                                queryForHold.RangeDuyet.endDate = new Date(queryForHold.RangeDuyet.endDate);
                            }
                        }
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('adtSearchKSNKDuTruGiamDocNhomKSNK', JSON.stringify(queryForHold));
                        if (this.gridParent) {
                            this.gridParent._additionalSearchString = this.query;
                            this.gridParent.searchString = '';
                            this.gridParent.search();
                        }
                    }
                };
                DuTruGiamDocListComponent.prototype.onKey = function (event) {
                    if (event.keyCode === 13) {
                        this.Timkiem();
                    }
                };
                DuTruGiamDocListComponent.prototype.exportExcel = function () {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Process)) {
                        self.showPopupLoadingData();
                        self.apiService.postExportExcel('YeuCauMuaKSNK/ExportTongHopDuTruMuaKSNKTaiGiamDoc', self.gridParent._gridQueryInfo).subscribe(function (resultData) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'TongHopDuTruMuaKSNKTaiGiamDoc' + dateTimeNow.getFullYear() + '.xlsx');
                            self.closePopupLoadingData();
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuTruGiamDocListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DuTruGiamDocListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DuTruGiamDocListComponent.prototype.edit = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        this.router.navigateByUrl(this.baseRoute + '/chi-tiet/' + id + '?holdQuery=true');
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuTruGiamDocListComponent.prototype.Decline = function (item) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        this.dialog.open(_du_tru_giam_doc_tu_choi_popup_du_tru_giam_doc_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_21__["DuTruGiamDocTuChoiPopupComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: {}
                        }).afterClosed().subscribe(function (result) {
                            if (result && result.includes('Yes')) {
                                var resSplit = result.split(' - ');
                                var approve = new _du_tru_giam_doc_model__WEBPACK_IMPORTED_MODULE_5__["ApproveData"]();
                                approve.Id = item.Id;
                                approve.LyDo = resSplit[1];
                                _this.apiService.post('YeuCauMuaKSNK/Decline', approve).subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DuTruGiamDocMessage"].MessageDecline);
                                    _this.gridParent.setDataSource();
                                }, function (err) {
                                    _this.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuTruGiamDocListComponent.prototype.Approve = function (item) {
                    var _this = this;
                    var confirm = 'duyệt';
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].MessLockTemplate, [confirm, 'phiếu dự trù']) }
                        }).afterClosed().subscribe(function (result) {
                            if (result === 'Yes') {
                                _this.apiService.get("YeuCauMuaKSNK/Approve?id=" + item.Id).subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DuTruGiamDocMessage"].MessageApprove);
                                    _this.gridParent.setDataSource();
                                }, function (err) {
                                    _this.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return DuTruGiamDocListComponent;
            }());
            DuTruGiamDocListComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_17__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: false })
            ], DuTruGiamDocListComponent.prototype, "gridParent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "soPhieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orderTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "orderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "soLuongDuTruTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuKienTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "soLuongDuKienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruTrKhoaTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "soLuongDuTruTrKhoaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruKhDuocTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "soLuongDuTruKhDuocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruDirectorTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "soLuongDuTruDirectorTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoDuTruTonTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "khoDuTruTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoTongTonTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "khoTongTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hdChuaNhapTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "hdChuaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoaGroupHeader', { static: true })
            ], DuTruGiamDocListComponent.prototype, "khoaGroupHeader", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruHeaderTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "soLuongDuTruHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuKienHeaderTemplate', { static: true })
            ], DuTruGiamDocListComponent.prototype, "soLuongDuKienHeaderTemplate", void 0);
            DuTruGiamDocListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-du-tru-giam-doc-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./du-tru-giam-doc-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./du-tru-giam-doc-list.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.scss")).default]
                })
            ], DuTruGiamDocListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-routing.module.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-routing.module.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: DuTruGiamDocRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruGiamDocRoutingModule", function () { return DuTruGiamDocRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _du_tru_giam_doc_list_du_tru_giam_doc_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./du-tru-giam-doc-list/du-tru-giam-doc-list.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.ts");
            /* harmony import */ var _du_tru_giam_doc_chi_tiet_du_tru_giam_doc_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.ts");
            var routes = [
                {
                    path: '',
                    component: _du_tru_giam_doc_list_du_tru_giam_doc_list_component__WEBPACK_IMPORTED_MODULE_6__["DuTruGiamDocListComponent"],
                    data: {
                        title: 'Danh Sách Nhập Kho Kiểm Soát Nhiễm Khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiGiamDoc,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _du_tru_giam_doc_chi_tiet_du_tru_giam_doc_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__["DuTruGiamDocChiTietComponent"],
                    data: {
                        title: 'Chi Tiết Duyệt Dự Trù Kiểm Soát Nhiễm Khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiGiamDoc,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
            ];
            var DuTruGiamDocRoutingModule = /** @class */ (function () {
                function DuTruGiamDocRoutingModule() {
                }
                return DuTruGiamDocRoutingModule;
            }());
            DuTruGiamDocRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuTruGiamDocRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-shared/du-tru-giam-doc-shared.component.scss": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-shared/du-tru-giam-doc-shared.component.scss ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1tdWEta3Nuay10YWktZ2lhbS1kb2MvZHUtdHJ1LWdpYW0tZG9jLXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxca2llbS1zb2F0LW5oaWVtLWtodWFuXFxkdS10cnUtbXVhXFx0b25nLWhvcC1tdWEta3Nuay10YWktZ2lhbS1kb2NcXGR1LXRydS1naWFtLWRvYy1zaGFyZWRcXGR1LXRydS1naWFtLWRvYy1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtbXVhLWtzbmstdGFpLWdpYW0tZG9jL2R1LXRydS1naWFtLWRvYy1zaGFyZWQvZHUtdHJ1LWdpYW0tZG9jLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtbXVhLWtzbmstdGFpLWdpYW0tZG9jL2R1LXRydS1naWFtLWRvYy1zaGFyZWQvZHUtdHJ1LWdpYW0tZG9jLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5raG8tdG9uZy10b24tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5raG8tdG9uZy10b24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iLCIua2hvLXRvbmctdG9uLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ua2hvLXRvbmctdG9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-shared/du-tru-giam-doc-shared.component.ts": 
        /*!*******************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-shared/du-tru-giam-doc-shared.component.ts ***!
          \*******************************************************************************************************************************************************************/
        /*! exports provided: DuTruGiamDocSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruGiamDocSharedComponent", function () { return DuTruGiamDocSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _du_tru_giam_doc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../du-tru-giam-doc.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.model.ts");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var DuTruGiamDocSharedComponent = /** @class */ (function () {
                function DuTruGiamDocSharedComponent(route, baseService) {
                    this.route = route;
                    this.baseService = baseService;
                    this.gridColumns = [];
                    this.gridColumnsChoDuyet = [];
                    this.gridResultColumns = [];
                    this.urlGetDataChuaDuyetGrid = 'YeuCauMuaKSNK/GetDataForGridChildChuaDuyetAsync';
                    this.urlGetDataDuyetGrid = 'YeuCauMuaKSNK/GetDataForGridChildDuyetAsync';
                    this.urlGetDataGridChild = 'YeuCauMuaKSNK/GetDataForGridDuyetDetail';
                    this.khos = [];
                    this.hdts = [];
                    this.duTruGiamDoc = {};
                    this.duTruGiamDocDetail = {};
                    this.sort = [
                        {
                            field: 'Id',
                            dir: 'asc'
                        }
                    ];
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.groups = [{
                            field: 'Khoa', aggregates: [
                                { field: 'SoLuongDuTru', aggregate: 'sum' },
                                { field: 'SoLuongDuKienTrongKy', aggregate: 'sum' }
                            ]
                        }];
                    this.groupLoais = [{ field: 'Loai', dir: 'asc', aggregates: [] }];
                    this.fireStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                DuTruGiamDocSharedComponent.prototype.ngOnInit = function () {
                    console.log(this.duTruGiamDoc);
                    this.id = this.route.snapshot.params.id;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiGiamDoc;
                    this.gridColumnsChoDuyet = [
                        { Field: 'Loai', Title: 'Loại', ShowTooltip: true, Width: 67, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'VatTu', Title: 'Kiểm Soát Nhiễm Khuẩn', ShowTooltip: true, MinWidth: 96 },
                        { Field: 'Dvt', Title: 'ĐVT', ShowTooltip: true, Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 90 },
                        { Field: 'NhaSx', Title: 'Nhà SX', ShowTooltip: true, Width: 80 },
                        { Field: 'NuocSx', Title: 'Nước SX', ShowTooltip: true, Width: 83 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự trù', Width: 80, Template: this.slDuTruTemplate },
                        { Field: 'SoLuongDuKienTrongKy', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 210, Template: this.slDuKienTemplate },
                        { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 115, Template: this.khoDuTruTonTemplate },
                        { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 111, Template: this.khoTongTonTemplate },
                        { Field: 'HdChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 150, Template: this.hdChuaNhapTemplate },
                        { Field: 'SoLuongDuTruTrKhoa', Title: 'T.Khoa Duyệt', Width: 100, Template: this.truongKhoaTemplate },
                        { Field: 'SoLuongDuTruKhDuoc', Title: 'K.Dược Duyệt', Width: 100, Template: this.khoaDuocTemplate },
                        { Field: 'SoLuongDuTruDirector', Title: 'G.Đốc Duyệt', Width: 100, Template: this.directorTemplate }
                    ];
                    this.gridColumns = [
                        { Field: 'Loai', Title: 'Loại', ShowTooltip: true, Width: 67, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'VatTu', Title: 'Kiểm Soát Nhiễm Khuẩn', ShowTooltip: true, MinWidth: 96 },
                        { Field: 'Dvt', Title: 'ĐVT', ShowTooltip: true, Width: 50 },
                        { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 90 },
                        { Field: 'NhaSx', Title: 'Nhà SX', ShowTooltip: true, Width: 80 },
                        { Field: 'NuocSx', Title: 'Nước SX', ShowTooltip: true, Width: 83 },
                        { Field: 'SoLuongDuTru', Title: 'SL Dự trù', Width: 80, Template: this.slDuTruTemplate },
                        { Field: 'SoLuongDuKienTrongKy', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 210, Template: this.slDuKienTemplate },
                        { Field: 'SoLuongDuTruTrKhoa', Title: 'T.Khoa Duyệt', Width: 100, Template: this.truongKhoaTemplate },
                        { Field: 'SoLuongDuTruKhDuoc', Title: 'K.Dược Duyệt', Width: 100, Template: this.khoaDuocTemplate },
                        { Field: 'SoLuongDuTruDirector', Title: 'G.Đốc Duyệt', Width: 100, Template: this.directorReadonlyTemplate }
                    ];
                    this.gridResultColumns = [
                        {
                            Field: 'Khoa',
                            Title: '',
                            Hidden: true,
                            HideFilter: true,
                            TemplateGroupHeader: this.khoaGroupHeader
                        },
                        { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: false },
                        {
                            Field: 'SoLuongDuTru', Title: 'SL dự trù', Width: 100, Sortable: false,
                            TemplateGroupFooter: this.soLuongDuTruHeaderTemplate, Template: this.soLuongDuTruTemplate
                        },
                        {
                            Field: 'SoLuongDuKienTrongKy', Title: 'SL dự kiến trong kỳ', Width: 170, Sortable: false,
                            TemplateGroupFooter: this.soLuongDuKienHeaderTemplate, Template: this.soLuongDuKienTemplate
                        },
                    ];
                    if (this.id) {
                        this.getById(this.id);
                    }
                };
                DuTruGiamDocSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        _this.duTruGiamDoc = Object.assign({}, resultData);
                        _this.fireStatus.emit(_this.duTruGiamDoc.TrangThai);
                        console.log(_this.duTruGiamDoc);
                    });
                };
                DuTruGiamDocSharedComponent.prototype.TooltipCustom = function (duTruGiamDocDetail) {
                    this.khos = duTruGiamDocDetail.TongTonList.slice();
                    this.hdts = duTruGiamDocDetail.HdChuaNhapList.slice();
                };
                DuTruGiamDocSharedComponent.prototype.ReturnData = function (lyDo) {
                    if (lyDo === void 0) { lyDo = null; }
                    var approve = new _du_tru_giam_doc_model__WEBPACK_IMPORTED_MODULE_5__["ApproveData"]();
                    approve.Id = this.id;
                    approve.LyDo = lyDo;
                    this.duTruGiamDoc.DuTruGiamDocDetails.forEach(function (item) {
                        var approveDetail = new _du_tru_giam_doc_model__WEBPACK_IMPORTED_MODULE_5__["ChiTietVatTu"]();
                        approveDetail.Id = item.Id;
                        approveDetail.SoLuongDuyet = item.SoLuongDuTruDirector;
                        approve.ChiTietVatTuList.push(approveDetail);
                    });
                    if (!lyDo) {
                        this.validationErrors = [];
                        if (this.duTruGiamDoc.TrangThai == null && this.duTruGiamDoc.DuTruGiamDocDetails &&
                            this.duTruGiamDoc.DuTruGiamDocDetails
                                .some(function (e) { return e.SoLuongDuTruDirector === 0 || e.SoLuongDuTruDirector == null; })) {
                            for (var _i = 0, _a = this.duTruGiamDoc.DuTruGiamDocDetails
                                .filter(function (e) { return e.SoLuongDuTruDirector == null; }); _i < _a.length; _i++) {
                                var validateItem = _a[_i];
                                var validate = {
                                    Field: 'SoLuongDuTruDirector[' + this.duTruGiamDoc.DuTruGiamDocDetails.indexOf(validateItem) + ']',
                                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["DuTruGiamDocMessage"].SoLuongGiamDocNotAllowNull
                                };
                                this.validationErrors.push(validate);
                            }
                            for (var _b = 0, _c = this.duTruGiamDoc.DuTruGiamDocDetails
                                .filter(function (e) { return e.SoLuongDuTruDirector === 0; }); _b < _c.length; _b++) {
                                var validateItem = _c[_b];
                                var validate = {
                                    Field: 'SoLuongDuTruDirector[' + this.duTruGiamDoc.DuTruGiamDocDetails.indexOf(validateItem) + ']',
                                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["DuTruGiamDocMessage"].SoLuongGiamDocNotAllowZero
                                };
                                this.validationErrors.push(validate);
                            }
                            return 0;
                        }
                    }
                    return approve;
                };
                DuTruGiamDocSharedComponent.prototype.GetListVatTu = function (data) {
                    this.duTruGiamDoc.DuTruGiamDocDetails = data.Data.slice();
                };
                return DuTruGiamDocSharedComponent;
            }());
            DuTruGiamDocSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuTruGiamDocSharedComponent.prototype, "fireStatus", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orderTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "orderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruHeaderTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "soLuongDuTruHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "soLuongDuTruTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuKienTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "soLuongDuKienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuKienHeaderTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "soLuongDuKienHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoaGroupHeader', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "khoaGroupHeader", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('directorTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "directorTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoTongTonTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "khoTongTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hdChuaNhapTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "hdChuaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('directorReadonlyTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "directorReadonlyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slDuTruTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "slDuTruTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slDuKienTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "slDuKienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoDuTruTonTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "khoDuTruTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('truongKhoaTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "truongKhoaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoaDuocTemplate', { static: true })
            ], DuTruGiamDocSharedComponent.prototype, "khoaDuocTemplate", void 0);
            DuTruGiamDocSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-du-tru-giam-doc-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./du-tru-giam-doc-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-shared/du-tru-giam-doc-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./du-tru-giam-doc-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-shared/du-tru-giam-doc-shared.component.scss")).default]
                })
            ], DuTruGiamDocSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.scss": 
        /*!***********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.scss ***!
          \***********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtbXVhLWtzbmstdGFpLWdpYW0tZG9jL2R1LXRydS1naWFtLWRvYy10dS1jaG9pLXBvcHVwL2R1LXRydS1naWFtLWRvYy10dS1jaG9pLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.ts": 
        /*!*********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.ts ***!
          \*********************************************************************************************************************************************************************************/
        /*! exports provided: DuTruGiamDocTuChoiPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruGiamDocTuChoiPopupComponent", function () { return DuTruGiamDocTuChoiPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var DuTruGiamDocTuChoiPopupComponent = /** @class */ (function () {
                function DuTruGiamDocTuChoiPopupComponent(data, dialogRef) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.lyDo = null;
                    this.message = 'Bạn có chắc chắn muốn từ chối phiếu dự trù này không?';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                }
                DuTruGiamDocTuChoiPopupComponent.prototype.ngOnInit = function () {
                    setTimeout(function () {
                        $('mat-dialog-content.mat-dialog-content').css('overflow', 'hidden');
                    }, 50);
                };
                DuTruGiamDocTuChoiPopupComponent.prototype.close = function (answer) {
                    this.validationErrors = [];
                    if (answer.includes('Yes') && this.lyDo == null) {
                        var validate = {
                            Field: 'LyDo',
                            Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_4__["DuTruGiamDocMessage"].MessageLyDoNotNull
                        };
                        this.validationErrors.push(validate);
                        return;
                    }
                    if (answer.includes('Yes') && this.lyDo === '') {
                        var validateNull = {
                            Field: 'LyDo',
                            Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_4__["DuTruGiamDocMessage"].MessageLyDoNotAllowNull
                        };
                        this.validationErrors.push(validateNull);
                        return;
                    }
                    this.dialogRef.close(answer);
                };
                return DuTruGiamDocTuChoiPopupComponent;
            }());
            DuTruGiamDocTuChoiPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            DuTruGiamDocTuChoiPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-du-tru-giam-doc-tu-choi-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./du-tru-giam-doc-tu-choi-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./du-tru-giam-doc-tu-choi-popup.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuTruGiamDocTuChoiPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.model.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.model.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: DuTruGiamDoc, DuTruGiamDocDetail, DuTruTheoVatTuDetail, Search, RangeDate, ApproveData, ChiTietVatTu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruGiamDoc", function () { return DuTruGiamDoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruGiamDocDetail", function () { return DuTruGiamDocDetail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruTheoVatTuDetail", function () { return DuTruTheoVatTuDetail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function () { return Search; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveData", function () { return ApproveData; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietVatTu", function () { return ChiTietVatTu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DuTruGiamDoc = /** @class */ (function () {
                function DuTruGiamDoc(SoPhieu, KyDuTruDisplay, KyDuTru, NguoiYeuCau, NguoiDuyet, NgayYeuCauDisplay, Id, NgayYeuCau, NgayDuyetDisplay, NgayDuyet, GhiChu, TrangThai, // null: chờ, true: đã duyệt, false: từ chối duyệt
                TrangThaiDisplay, LyDoGiamDocTuChoi, DuTruGiamDocDetails) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KyDuTruDisplay === void 0) { KyDuTruDisplay = null; }
                    if (KyDuTru === void 0) { KyDuTru = null; }
                    if (NguoiYeuCau === void 0) { NguoiYeuCau = null; }
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (NgayYeuCauDisplay === void 0) { NgayYeuCauDisplay = null; }
                    if (Id === void 0) { Id = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (NgayDuyetDisplay === void 0) { NgayDuyetDisplay = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TrangThaiDisplay === void 0) { TrangThaiDisplay = null; }
                    if (LyDoGiamDocTuChoi === void 0) { LyDoGiamDocTuChoi = null; }
                    if (DuTruGiamDocDetails === void 0) { DuTruGiamDocDetails = []; }
                    this.SoPhieu = SoPhieu;
                    this.KyDuTruDisplay = KyDuTruDisplay;
                    this.KyDuTru = KyDuTru;
                    this.NguoiYeuCau = NguoiYeuCau;
                    this.NguoiDuyet = NguoiDuyet;
                    this.NgayYeuCauDisplay = NgayYeuCauDisplay;
                    this.Id = Id;
                    this.NgayYeuCau = NgayYeuCau;
                    this.NgayDuyetDisplay = NgayDuyetDisplay;
                    this.NgayDuyet = NgayDuyet;
                    this.GhiChu = GhiChu;
                    this.TrangThai = TrangThai;
                    this.TrangThaiDisplay = TrangThaiDisplay;
                    this.LyDoGiamDocTuChoi = LyDoGiamDocTuChoi;
                    this.DuTruGiamDocDetails = DuTruGiamDocDetails;
                }
                return DuTruGiamDoc;
            }());
            var DuTruGiamDocDetail = /** @class */ (function () {
                function DuTruGiamDocDetail(Loai, IsBhyt, VatTuId, VatTu, Id, QuyCach, Dvt, NhaSx, NuocSx, SoLuongDuTru, SoLuongDuKienTrongKy, SoLuongDuTruTrKhoa, SoLuongDuTruKhDuoc, SoLuongDuTruDirector, KhoDuTruTon, KhoTongTon, HdChuaNhap, TongTonList, HdChuaNhapList) {
                    if (Loai === void 0) { Loai = null; }
                    if (IsBhyt === void 0) { IsBhyt = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (VatTu === void 0) { VatTu = null; }
                    if (Id === void 0) { Id = null; }
                    if (QuyCach === void 0) { QuyCach = null; }
                    if (Dvt === void 0) { Dvt = null; }
                    if (NhaSx === void 0) { NhaSx = null; }
                    if (NuocSx === void 0) { NuocSx = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienTrongKy === void 0) { SoLuongDuKienTrongKy = null; }
                    if (SoLuongDuTruTrKhoa === void 0) { SoLuongDuTruTrKhoa = null; }
                    if (SoLuongDuTruKhDuoc === void 0) { SoLuongDuTruKhDuoc = null; }
                    if (SoLuongDuTruDirector === void 0) { SoLuongDuTruDirector = null; }
                    if (KhoDuTruTon === void 0) { KhoDuTruTon = null; }
                    if (KhoTongTon === void 0) { KhoTongTon = null; }
                    if (HdChuaNhap === void 0) { HdChuaNhap = null; }
                    if (TongTonList === void 0) { TongTonList = []; }
                    if (HdChuaNhapList === void 0) { HdChuaNhapList = []; }
                    this.Loai = Loai;
                    this.IsBhyt = IsBhyt;
                    this.VatTuId = VatTuId;
                    this.VatTu = VatTu;
                    this.Id = Id;
                    this.QuyCach = QuyCach;
                    this.Dvt = Dvt;
                    this.NhaSx = NhaSx;
                    this.NuocSx = NuocSx;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienTrongKy = SoLuongDuKienTrongKy;
                    this.SoLuongDuTruTrKhoa = SoLuongDuTruTrKhoa;
                    this.SoLuongDuTruKhDuoc = SoLuongDuTruKhDuoc;
                    this.SoLuongDuTruDirector = SoLuongDuTruDirector;
                    this.KhoDuTruTon = KhoDuTruTon;
                    this.KhoTongTon = KhoTongTon;
                    this.HdChuaNhap = HdChuaNhap;
                    this.TongTonList = TongTonList;
                    this.HdChuaNhapList = HdChuaNhapList;
                }
                return DuTruGiamDocDetail;
            }());
            var DuTruTheoVatTuDetail = /** @class */ (function () {
                function DuTruTheoVatTuDetail(Khoa, Kho, KyDuTruDisplay, KyDuTru, SoLuongDuTru, SoLuongDuKienTrongKy) {
                    if (Khoa === void 0) { Khoa = null; }
                    if (Kho === void 0) { Kho = null; }
                    if (KyDuTruDisplay === void 0) { KyDuTruDisplay = null; }
                    if (KyDuTru === void 0) { KyDuTru = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienTrongKy === void 0) { SoLuongDuKienTrongKy = null; }
                    this.Khoa = Khoa;
                    this.Kho = Kho;
                    this.KyDuTruDisplay = KyDuTruDisplay;
                    this.KyDuTru = KyDuTru;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienTrongKy = SoLuongDuKienTrongKy;
                }
                return DuTruTheoVatTuDetail;
            }());
            var Search = /** @class */ (function () {
                function Search(DangChoDuyet, TuChoiDuyet, DaDuyet, SearchString, 
                // tslint:disable-next-line: no-use-before-declare
                RangeYeuCau, 
                // tslint:disable-next-line: no-use-before-declare
                RangeDuyet) {
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeYeuCau === void 0) { RangeYeuCau = new RangeDate(); }
                    if (RangeDuyet === void 0) { RangeDuyet = new RangeDate(); }
                    this.DangChoDuyet = DangChoDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.DaDuyet = DaDuyet;
                    this.SearchString = SearchString;
                    this.RangeYeuCau = RangeYeuCau;
                    this.RangeDuyet = RangeDuyet;
                }
                return Search;
            }());
            var RangeDate = /** @class */ (function () {
                function RangeDate(startDate, endDate) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return RangeDate;
            }());
            var ApproveData = /** @class */ (function () {
                function ApproveData(Id, LyDo, ChiTietVatTuList) {
                    if (Id === void 0) { Id = null; }
                    if (LyDo === void 0) { LyDo = null; }
                    if (ChiTietVatTuList === void 0) { ChiTietVatTuList = []; }
                    this.Id = Id;
                    this.LyDo = LyDo;
                    this.ChiTietVatTuList = ChiTietVatTuList;
                }
                return ApproveData;
            }());
            var ChiTietVatTu = /** @class */ (function () {
                function ChiTietVatTu(Id, SoLuongDuyet) {
                    if (Id === void 0) { Id = null; }
                    if (SoLuongDuyet === void 0) { SoLuongDuyet = null; }
                    this.Id = Id;
                    this.SoLuongDuyet = SoLuongDuyet;
                }
                return ChiTietVatTu;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.module.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.module.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaKSNKTaiGiamDocModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaKSNKTaiGiamDocModule", function () { return TongHopDuTruMuaKSNKTaiGiamDocModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _du_tru_giam_doc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./du-tru-giam-doc-routing.module */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-routing.module.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
            /* harmony import */ var _du_tru_giam_doc_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./du-tru-giam-doc.service */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.service.ts");
            /* harmony import */ var _du_tru_giam_doc_list_du_tru_giam_doc_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./du-tru-giam-doc-list/du-tru-giam-doc-list.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-list/du-tru-giam-doc-list.component.ts");
            /* harmony import */ var _du_tru_giam_doc_shared_du_tru_giam_doc_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./du-tru-giam-doc-shared/du-tru-giam-doc-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-shared/du-tru-giam-doc-shared.component.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _du_tru_giam_doc_tu_choi_popup_du_tru_giam_doc_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component.ts");
            /* harmony import */ var _du_tru_giam_doc_chi_tiet_du_tru_giam_doc_chi_tiet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component.ts");
            var TongHopDuTruMuaKSNKTaiGiamDocModule = /** @class */ (function () {
                function TongHopDuTruMuaKSNKTaiGiamDocModule() {
                }
                return TongHopDuTruMuaKSNKTaiGiamDocModule;
            }());
            TongHopDuTruMuaKSNKTaiGiamDocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _du_tru_giam_doc_list_du_tru_giam_doc_list_component__WEBPACK_IMPORTED_MODULE_15__["DuTruGiamDocListComponent"],
                        _du_tru_giam_doc_chi_tiet_du_tru_giam_doc_chi_tiet_component__WEBPACK_IMPORTED_MODULE_19__["DuTruGiamDocChiTietComponent"],
                        _du_tru_giam_doc_shared_du_tru_giam_doc_shared_component__WEBPACK_IMPORTED_MODULE_16__["DuTruGiamDocSharedComponent"],
                        _du_tru_giam_doc_tu_choi_popup_du_tru_giam_doc_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_18__["DuTruGiamDocTuChoiPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _du_tru_giam_doc_routing_module__WEBPACK_IMPORTED_MODULE_3__["DuTruGiamDocRoutingModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_13__["DropDownButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"]
                    ],
                    providers: [
                        _du_tru_giam_doc_service__WEBPACK_IMPORTED_MODULE_14__["TongHopDuTruMuaKSNKTaiGiamDocService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__["BaseService"], useClass: _du_tru_giam_doc_service__WEBPACK_IMPORTED_MODULE_14__["TongHopDuTruMuaKSNKTaiGiamDocService"] },
                    ],
                    entryComponents: [
                        _du_tru_giam_doc_tu_choi_popup_du_tru_giam_doc_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_18__["DuTruGiamDocTuChoiPopupComponent"]
                    ]
                })
            ], TongHopDuTruMuaKSNKTaiGiamDocModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.service.ts": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.service.ts ***!
          \***********************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaKSNKTaiGiamDocService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaKSNKTaiGiamDocService", function () { return TongHopDuTruMuaKSNKTaiGiamDocService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var TongHopDuTruMuaKSNKTaiGiamDocService = /** @class */ (function (_super) {
                __extends(TongHopDuTruMuaKSNKTaiGiamDocService, _super);
                function TongHopDuTruMuaKSNKTaiGiamDocService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'YeuCauMuaKSNK';
                    return _this;
                }
                return TongHopDuTruMuaKSNKTaiGiamDocService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            TongHopDuTruMuaKSNKTaiGiamDocService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            TongHopDuTruMuaKSNKTaiGiamDocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], TongHopDuTruMuaKSNKTaiGiamDocService);
            /***/ 
        })
    }]);
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-mua-ksnk-tai-giam-doc-du-tru-giam-doc-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-mua-ksnk-tai-giam-doc-du-tru-giam-doc-module-es5.js.map
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-mua-ksnk-tai-giam-doc-du-tru-giam-doc-module-es5.js.map