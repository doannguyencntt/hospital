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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-tai-khoa-duoc-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-module"], {
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
        /***/ "./node_modules/@iconify/icons-ic/twotone-info.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-info.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path opacity=\".3\" d=\"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z\" fill=\"currentColor\"/><path d=\"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.html ***!
          \**************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\" *ngIf=\"loaiKhoThuoc === true \">\n    <div fxFlex=\"100%\" *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='5'\">\n        <h4 style=\"color: red;\">Lý do: {{thongTinDuTruMuaVatTuTaiKhoaDuoc.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n    <app-textbox id=\"soPhieu\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.SoPhieu\"\n        maxlength=\"50\" label=\"Số phiếu\" [validationerror]=\"'SoPhieu' | validationerror:validationErrors\"\n        [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-textbox id=\"Khoa\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.Khoa\"\n        bind=\"true\" label=\"Khoa\" class=\"item-no-padding\" [validationerror]=\"'Khoa' | validationerror:validationErrors\"\n        [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-combobox id=\"KyDuTru\" fxFlex=\"20%\" [required]=\"true\" fxFlex.sm=\"20%\" [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.KyDuTru\"\n        [modelText]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.KyDuTru\" label=\"Kỳ dự trù\" [disabled]=\"isDisableTrangThai\"\n        url=\"\">\n    </app-combobox>\n    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TenNguoiYeuCau\" label=\"Người yêu cầu\" class=\"item-no-padding\"\n        [validationerror]=\"'TenNguoiYeuCau' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n\n    <app-datepicker id=\"NgayYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.NgayYeuCau\" label=\"Ngày yêu cầu\"\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-datepicker>\n\n    <app-textbox id=\"GhiChu\" fxFlex=\"100%\"  [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.GhiChu\"\n        bind=\"true\" label=\"Ghi chú\" class=\"item-no-padding\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\" [disabled]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='2' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='3' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='4'\">\n    </app-textbox>\n    <span fxFlex=\"100%\"><b>THÔNG TIN CHI TIẾT</b></span>\n    <app-grid baseRoute=\"\" #gridCreate fxFlex=\"100%\" [gridColumns]=\"gridChildColumns\"  [documentType]=\"documentType\"\n        [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\" [gridDataSource]=\"gridDataSource\" [detailTemplate]=\"detailChildTemplate\"  [pageable]=\"false\"\n        [autoHeight]=\"true\" [groups]=\"groups\">\n    </app-grid>\n\n    <ng-template #detailChildTemplate let-dataItem>\n        <app-grid baseRoute=\"\"  [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" urlGetData=\"YeuCauMuaKSNK/GetDataChildKhoaForGridAsync\" [pageable]=\"false\"\n            additionalSearchString=\"{{dataItem.Id}}-{{dataItem.Loai}}-{{dataItem.VatTuId}}\"\n            [autoHeight]=\"true\">\n        </app-grid>\n\n    </ng-template>\n\n</div>\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\" *ngIf=\"loaiKhoThuoc === false\">\n    <div fxFlex=\"100%\" *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='5'\">\n        <h4 style=\"color: red;\">Lý do: {{thongTinDuTruMuaVatTuTaiKhoaDuoc.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n    <app-textbox id=\"soPhieu\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.SoPhieu\"\n        maxlength=\"50\" label=\"Số phiếu\" [validationerror]=\"'SoPhieu' | validationerror:validationErrors\"\n        [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n\n    <!-- <app-combobox id=\"LoaiDuTruId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuTruId\"\n        [modelText]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuTru\" url=\"\" label=\"Nhóm\"\n        [validationerror]=\"'LoaiDuTruId' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-combobox> -->\n    <app-combobox id=\"khoNhapId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId\" [disabled]=\"true\"\n        [modelText]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TenKho\" url=\"\" label=\"Kho\"\n        [validationerror]=\"'KhoId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox id=\"KyDuTru\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.KyDuTru\"\n        [modelText]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.KyDuTru\" label=\"Kỳ dự trù\" [disabled]=\"isDisableTrangThai\"\n        url=\"\">\n    </app-combobox>\n    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TenNguoiYeuCau\" label=\"Người yêu cầu\" class=\"item-no-padding\"\n        [validationerror]=\"'TenNguoiYeuCau' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n\n    <app-datepicker id=\"NgayYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.NgayYeuCau\" label=\"Ngày yêu cầu\"\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-datepicker>\n\n    <app-textbox id=\"GhiChu\" fxFlex=\"100%\"  [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.GhiChu\"\n        bind=\"true\" label=\"Ghi chú\" class=\"item-no-padding\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\" [disabled]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='2' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='3' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='4'\">\n    </app-textbox>\n    <span fxFlex=\"100%\"><b>THÔNG TIN CHI TIẾT </b></span>\n    <app-grid baseRoute=\"\" fxFlex=\"100%\" #gridCreate [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n        [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [pageable]=\"false\" \n        [lazyLoadPage]=\"true\" [gridDataSource]=\"gridDataSource\" additionalSearchString=\"\" [autoHeight]=\"true\" [groups]=\"groups\"\n        >\n    </app-grid>\n    <!-- <ng-template #detailChildKhoaTemplate let-dataItem>\n        <app-grid baseRoute=\"\"  [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" urlGetData=\"YeuCauMuaKSNK/GetDataChildForGridAsync\" [pageable]=\"false\"\n            additionalSearchString=\"{{dataItem.Id}}-{{dataItem.Loai}}-{{dataItem.VatTuId}}\"\n            [autoHeight]=\"true\">\n        </app-grid>\n\n    </ng-template> -->\n\n</div>\n<ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    {{rowIndex + 1}}\n</ng-template>\n<ng-template #tongTonKhoTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of khos\">\n                <td>{{item.TenKhoTong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\"  (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #hDChuaNhanTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of hdts\">\n                <td>{{item.TenHopDong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #sLDuTruKhoTDuocDuyet let-dataItem let-rowIndex=\"rowIndex\">\n    <app-textboxnumeric class=\"no-label numeric-in-grid\" (modelChange)=\"modelChangeSoLuongDuyet($event ,dataItem)\"\n        [(model)]=\"dataItem.SLDuTruTKhoDuyet\" max=\"1000000\" min=\"1\" [disabled]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='2' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='3' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='4'\">\n    </app-textboxnumeric>\n</ng-template>\n<ng-template #loaiTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Loai == true\">BHYT</span>\n    <span *ngIf=\"dataItem.Loai == false\">Không BHYT</span>\n</ng-template>\n<ng-template #SLDuTruKhoDuocDuyet let-dataItem let-rowIndex=\"rowIndex\">\n    <app-textboxnumeric class=\"no-label numeric-in-grid\" (modelChange)=\"modelChangeSoLuongKDDuyet($event ,dataItem)\"\n        [(model)]=\"dataItem.SLDuTruKhoDuocDuyet\" max=\"1000000\" min=\"1\" [disabled]=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='2' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='3' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='4'\">\n    </app-textboxnumeric>\n</ng-template>\n<ng-template #loaiNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <div fxFlex=\"100%\">\n        <strong fxFlex=\"15%\">\n            <span *ngIf=\"value == true\"><b>BHYT</b></span>\n            <span *ngIf=\"value == false\"><b>Không BHYT</b></span>\n        </strong>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.html ***!
          \**************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n{Title:'Nhập xuất',Path:''}\n,{Title:'Hành chính - KSNK',Path:''}\n,{Title:'Dự trù mua',Path:''}\n,{Title:'THDT mua tại Hành chính​​​​',Path:'/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh',queryParams: {holdQuery : true},Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Duyệt Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn​</h2>\n                <b class=\"status-yeu-cau-linh trang-thai t{{thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai}}\">{{thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThaiHienThi}}</b>\n               \n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-duyet-du-tru-mua-ksnk-shared (dataItem)=\"getDataItem($event)\">\n                </app-duyet-du-tru-mua-ksnk-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                            <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1 align-right-fx\"\n                                *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai =='2' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai =='1'\"><i\n                                    class=\"ft-arrow-left\"></i> Hủy</button>\n                            <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1 align-right-fx\"\n                                *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai =='4' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='3'\"><i\n                                    class=\"ft-arrow-left\"></i> Quay lại</button>\n                            <button type=\"button\" (click)=\"tuChoi()\" mat-button class=\"mr-1 color-button\"\n                                *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai =='1'\"><i class=\"ft-arrow-left\"></i>Từ chối</button>\n                            <button type=\"button\" *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='1'\" (click)=\"Duyet()\" color=\"primary\"\n                                mat-raised-button><i class=\"ft-save\"></i> Duyệt</button>\n                            <button type=\"button\" (click)=\"huyDuyet()\" mat-button class=\"mr-1 color-button\"\n                                *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai=='2'\"><i class=\"ft-arrow-left\"></i>Hủy Duyệt</button>\n                            <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                    alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.html": 
        /*!****************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.html ***!
          \****************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"100%\" *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '5'\">\n        <h4 style=\"color: red;\">Lý do: {{thongTinDuTruMuaVatTuTaiKhoaDuocGoi.LyDoTuChoi}}</h4>\n    </div>\n    <app-combobox id=\"KyDuTru\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.KyDuTruId\"\n        [modelText]=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.KyDuTru\" label=\"Kỳ dự trù\" [autoSelectFirstItem]=\"true\"\n        [disabled]=\"isDisableTrangThai\" url=\"\">\n    </app-combobox>\n    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TenNguoiYeuCau\" bind=\"true\" label=\"Người yêu cầu\" class=\"item-no-padding\"\n         [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n\n    <app-datepicker id=\"NgayYeuCau\" fxFlex=\"20%\" [required]=\"true\" label=\"Ngày yêu cầu\"\n        [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.NgayYeuCau\"\n         [disabled]=\"isDisableTrangThai\">\n    </app-datepicker>\n    <app-textbox id=\"GhiChu\" fxFlex=\"40%\"  [(model)]=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.GhiChu\"\n        bind=\"true\" label=\"Ghi chú\" class=\"item-no-padding\"  [disabled]=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '5' || thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '4' || thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '3'\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\" >\n    </app-textbox>\n     <span fxFlex=\"100%\"><b>THÔNG TIN CHI TIẾT</b></span>\n        <app-grid baseRoute=\"\" fxFlex=\"100%\" #grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [gridDataSource]=\"gridDataSource\"  [detailTemplate]=\"detailChildTemplate\"\n            [autoHeight]=\"true\" [pageable]=\"false\" [groups]=\"groups\">\n        </app-grid>\n    <ng-template #detailChildTemplate let-dataItem>\n       \n        <app-grid baseRoute=\"\" *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '2'\" [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [gridDataSource]=\"getDataSourceChild(dataItem)\"  [pageable]=\"false\"\n            additionalSearchString=\"\"  [autoHeight]=\"true\" [groups]=\"groupNhoms\" [removeGroupFooterIfIsOnlyOne]=\"true\">\n        </app-grid>\n        <app-grid baseRoute=\"\"  *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '5'\" [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            urlGetData=\"YeuCauMuaKSNK/GetDuTruMuaKSNKChiTietGoiViewChild\" [removeGroupFooterIfIsOnlyOne]=\"true\"\n            additionalSearchString=\"{{dataItem.Id}}\"  [autoHeight]=\"true\" [groups]=\"groupNhoms\" [pageable]=\"false\">\n        </app-grid>\n        <app-grid baseRoute=\"\"   *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '4'\" [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaKSNK/GetDuTruMuaKSNKChiTietGoiViewChild\" [removeGroupFooterIfIsOnlyOne]=\"true\"\n        additionalSearchString=\"{{dataItem.Id}}\"  [autoHeight]=\"true\" [groups]=\"groupNhoms\" [pageable]=\"false\">\n    </app-grid>\n    <app-grid baseRoute=\"\"  *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '3'\" [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            urlGetData=\"YeuCauMuaKSNK/GetDuTruMuaKSNKChiTietGoiViewChild\" [removeGroupFooterIfIsOnlyOne]=\"true\"\n            additionalSearchString=\"{{dataItem.Id}}\"  [autoHeight]=\"true\" [groups]=\"groupNhoms\" [pageable]=\"false\">\n        </app-grid>\n    </ng-template>\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div fxFlex=\"100%\">\n            <strong fxFlex=\"15%\" >\n                <span>{{value}}</span> \n            </strong>\n        </div>\n    </ng-template>\n    <ng-template #loaiNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div fxFlex=\"100%\">\n            <strong fxFlex=\"15%\">\n                <span *ngIf=\"value == true\"><b>BHYT</b></span>\n                <span *ngIf=\"value == false\"><b>Không BHYT</b></span>\n            </strong>\n        </div>\n    </ng-template>\n    <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #loaiTemplate let-dataItem >\n        <span *ngIf=\"dataItem.Loai == true\"><b>BHYT</b></span>\n        <span *ngIf=\"dataItem.Loai == false\"><b>KhôngBHYT</b></span>\n    </ng-template>\n    <ng-template #khoaTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #soLuongDuTruHeaderTemplate let-aggregates=\"aggregates\">\n        <strong>{{aggregates.SLDuTru.sum | number:'1.0':'vi-VN' }}</strong>\n    </ng-template>\n    <ng-template #soLuongDuKienHeaderTemplate let-aggregates=\"aggregates\">\n        <strong>{{aggregates.SLDuKienTrongKy.sum | number:'1.0':'vi-VN' }}</strong>\n    </ng-template>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.html": 
        /*!****************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.html ***!
          \****************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n{Title:'Nhập xuất',Path:''}\n,{Title:'Hành chính - KSNK',Path:''}\n,{Title:'Dự trù mua',Path:''}\n,{Title:'THDT mua tại Hành chính​​​',Path:'/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh',queryParams: {holdQuery : true},Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\" *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai != '0'\">Gửi Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn</h2>\n                <h2 class=\"title m-0\" *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '0'\">Gửi Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn</h2>\n                <b\n                    class=\"status-yeu-cau-linh trang-thai t{{thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai}}\">{{thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThaiHienThi}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-goi-giam-doc-du-tru-mua-ksnk-shared (dataItem)=\"getDataItem($event)\">\n                </app-goi-giam-doc-du-tru-mua-ksnk-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1 align-right-fx\"*ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai != '2'\"><i class=\"ft-arrow-left\"></i> Quay lại\n                    </button>\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1 align-right-fx\" *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '2'\"><i class=\"ft-arrow-left\"></i> Hủy\n                    </button>\n                    <button type=\"button\" (click)=\"goi()\"  *ngIf=\"thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TrangThai == '2'\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Gửi</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.html": 
        /*!**********************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.html ***!
          \**********************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>IN PHIẾU DỰ TRÙ MUA HÀNH CHÍNH - KIỂM SOÁT NHIỄM KHUẨN TẠI KHOA</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.html": 
        /*!******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.html ***!
          \******************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\" [innerHtml]=\"Message\"></div>\n    \n        <app-textarea id=\"lyDo\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\"\n            minHeight=\"20\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close(null)\">Không</button>\n    <button mat-button color=\"primary\" [disabled]=\"!lyDo\" (click)=\"close('ok')\">Có</button>\n</mat-dialog-actions>");
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
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.scss": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.scss ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZHV5ZXQtZHUtdHJ1LW11YS1rc25rLXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxca2llbS1zb2F0LW5oaWVtLWtodWFuXFxkdS10cnUtbXVhXFx0b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2NcXGR1eWV0LWR1LXRydS1tdWEta3Nuay1zaGFyZWRcXGR1eWV0LWR1LXRydS1tdWEta3Nuay1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2R1eWV0LWR1LXRydS1tdWEta3Nuay1zaGFyZWQvZHV5ZXQtZHUtdHJ1LW11YS1rc25rLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2R1eWV0LWR1LXRydS1tdWEta3Nuay1zaGFyZWQvZHV5ZXQtZHUtdHJ1LW11YS1rc25rLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5raG8tdG9uZy10b24tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5raG8tdG9uZy10b24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iLCIua2hvLXRvbmctdG9uLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ua2hvLXRvbmctdG9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.ts": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.ts ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: DuyetDuTruMuaKSNKSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetDuTruMuaKSNKSharedComponent", function () { return DuyetDuTruMuaKSNKSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model.ts");
            var DuyetDuTruMuaKSNKSharedComponent = /** @class */ (function () {
                function DuyetDuTruMuaKSNKSharedComponent(authService, dialog, notificationService, apiService, router, route) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.gridChildChildColumns = [];
                    this.khos = [];
                    this.hdts = [];
                    this.trangThaiDuyet = null;
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.gridDataSource = {};
                    this.gridChildDataSource = {};
                    this.data = [];
                    this.loaiKhoThuoc = true;
                    this.KhoaId = 0;
                    this.KhoId = 0;
                    // trường hợp tu chôi,đã duyệt  === true  , cho duyet == false
                    this.isDisableTrangThai = false;
                    this.IdTrangThai = 0;
                    this.groups = [{ field: 'Loai' }];
                    this.dataItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                DuyetDuTruMuaKSNKSharedComponent.prototype.ngOnInit = function () {
                    this.thongTinDuTruMuaVatTuTaiKhoaDuoc = new _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_9__["TongHopDuTruMuaTaiKhoaDuoc"]();
                    var id = this.route.snapshot.params.id;
                    var loaiKhoThuoc = this.route.snapshot.params.khoThuocId;
                    if (loaiKhoThuoc != undefined || loaiKhoThuoc != null) {
                        if (loaiKhoThuoc == 5) {
                            this.loaiKhoThuoc = true; // khoa
                        }
                        if (loaiKhoThuoc != 5) {
                            this.loaiKhoThuoc = false; // kho
                        }
                    }
                    if (id != undefined && loaiKhoThuoc != undefined) {
                        this.getById(id);
                    }
                    this.gridChildColumns = [
                        { Field: 'STT', Title: '#', Width: 40, Sortable: false },
                        { Field: 'Loai', Title: 'Loại', Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
                        { Field: 'TenVatTu', Title: 'Tên', Width: 50, Sortable: false },
                        { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
                        { Field: 'HoatChat', Title: 'Quy cách', Width: 50, Sortable: false },
                        { Field: 'NhaSX', Title: 'Hãng SX', Width: 50, Sortable: false },
                        { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false },
                        { Field: 'SLDuTru', Title: 'SL dự trù', Width: 150, Sortable: false },
                        { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', MinWidth: 30, Sortable: false },
                        { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 150, Sortable: false },
                        { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 150, Sortable: false, Template: this.tongTonKhoTemplate },
                        { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 150, Sortable: false, Template: this.hDChuaNhanTemplate },
                        { Field: 'SLDuTruTKhoDuyet', Title: 'T.Khoa duyệt', Width: 150, Sortable: false },
                        { Field: 'SLDuTruKhoDuocDuyet', Title: 'K.dược duyệt', Width: 150, Sortable: false, Template: this.SLDuTruKhoDuocDuyet },
                    ];
                    this.gridColumns = [
                        { Field: 'STT', Title: '#', Width: 40, Sortable: false, Template: this.sttTemplate },
                        { Field: 'Loai', Title: 'Loại', Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
                        { Field: 'TenVatTu', Title: 'Tên', Width: 50, Sortable: false },
                        { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
                        { Field: 'HoatChat', Title: 'Quy cách', Width: 50, Sortable: false },
                        { Field: 'NhaSX', Title: 'Hãng SX', Width: 50, Sortable: false },
                        { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false },
                        { Field: 'SLDuTru', Title: 'SL dự trù', Width: 150, Sortable: false },
                        { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', Width: 150, Sortable: false },
                        { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 150, Sortable: false },
                        { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 150, Sortable: false, Template: this.tongTonKhoTemplate },
                        { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 150, Sortable: false, Template: this.hDChuaNhanTemplate },
                        { Field: 'SLDuTruTKhoaDuyet', Title: 'T.Khoa duyệt', Width: 150, Sortable: false, Template: this.sLDuTruKhoTDuocDuyet },
                    ];
                    this.gridChildChildColumns = [
                        { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
                        { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: true },
                        { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true },
                        { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: true },
                    ];
                };
                DuyetDuTruMuaKSNKSharedComponent.prototype.TooltipCustom = function (duTruDetail) {
                    this.khos = duTruDetail.TongTonList.slice();
                    this.hdts = duTruDetail.HopDongChuahapList.slice();
                };
                DuyetDuTruMuaKSNKSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.isDisableTrangThai = true;
                    this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuyet = true;
                    this.apiService.post("YeuCauMuaKSNK/GetDataUpdate?id=" + id + "&typeLoaiKho=" + this.loaiKhoThuoc)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id = resultData.Id;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.SoPhieu = resultData.SoPhieu;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId = resultData.KhoaId;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.Khoa = resultData.TenKhoa;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KyDuTru = resultData.KyDuTru;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.NguoiYeuCauId = resultData.NguoiYeuCauId;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.TenNguoiYeuCau = resultData.TenNguoiYeuCau;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.NgayYeuCau = resultData.NgayYeuCau;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.GhiChu = resultData.GhiChu;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.TenKho = resultData.TenKho;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThai = resultData.TrangThai;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.TrangThaiHienThi = resultData.TrangThaiHienThi;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId = resultData.KhoId;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuTru = resultData.TenLoaiDuTru;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuTruId = resultData.LoaiDuTruId;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LyDoTruongKhoaTuChoi = resultData.LyDoTuChoi;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList = resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocList;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoaId = resultData.KhoaId;
                            _this.gridDataSource = {
                                data: _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList,
                                total: _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.length
                            };
                            _this.setDataGridView();
                            _this.dataItem.emit(_this.thongTinDuTruMuaVatTuTaiKhoaDuoc);
                        }
                    });
                };
                DuyetDuTruMuaKSNKSharedComponent.prototype.getSharedData = function () {
                    this.thongTinDuTruMuaVatTuTaiKhoaDuoc;
                };
                DuyetDuTruMuaKSNKSharedComponent.prototype.setDataGridView = function () {
                    this.gridChild.gridDataSource = this.gridDataSource;
                    if (this.gridChild !== undefined)
                        this.gridChild.setDataSource();
                };
                DuyetDuTruMuaKSNKSharedComponent.prototype.setDataGridViewRefesh = function () {
                    this.gridChild.gridDataSource = this.gridDataSource;
                    if (this.gridChild !== undefined)
                        this.gridChild.setDataSource();
                };
                DuyetDuTruMuaKSNKSharedComponent.prototype.modelChangeSoLuongDuyet = function (event, dataItem) {
                    if (event != null) {
                        var index = this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.findIndex(function (x) { return x.Id == dataItem.Id; });
                        var vitri = this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.indexOf(dataItem);
                        if (index != -1) {
                            this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList[vitri].SLDuTruTKhoDuyet = event;
                        }
                    }
                };
                DuyetDuTruMuaKSNKSharedComponent.prototype.modelChangeSoLuongKDDuyet = function (event, dataItem) {
                    if (event != null) {
                        var index = this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.findIndex(function (x) { return x.Id == dataItem.Id; });
                        var vitri = this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.indexOf(dataItem);
                        if (index != -1) {
                            this.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList[vitri].SLDuTruKhoDuocDuyet = event;
                        }
                    }
                };
                return DuyetDuTruMuaKSNKSharedComponent;
            }());
            DuyetDuTruMuaKSNKSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCreate', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"], static: false })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplate', { static: true })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "tongTonKhoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplate', { static: true })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "hDChuaNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplateDuyet', { static: true })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "tongTonKhoTemplateDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplateDuyet', { static: true })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "hDChuaNhanTemplateDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiTemplate', { static: true })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "loaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sLDuTruKhoTDuocDuyet', { static: true })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "sLDuTruKhoTDuocDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SLDuTruKhoDuocDuyet', { static: true })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "SLDuTruKhoDuocDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiNhomGroupHeaderTemplate', { static: true })
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "loaiNhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetDuTruMuaKSNKSharedComponent.prototype, "dataItem", void 0);
            DuyetDuTruMuaKSNKSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-duyet-du-tru-mua-ksnk-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-du-tru-mua-ksnk-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-du-tru-mua-ksnk-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.scss")).default]
                })
            ], DuyetDuTruMuaKSNKSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.scss": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.scss ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.color-button {\n  background-color: red;\n  color: white;\n}\n\n.trang-thai.t1 {\n  color: sandybrown;\n}\n\n.trang-thai.t2 {\n  color: #afb42b;\n}\n\n.trang-thai.t3 {\n  color: blue;\n}\n\n.trang-thai.t4 {\n  color: green;\n}\n\n.trang-thai.t5 {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZHV5ZXQtZHUtdHJ1LW11YS1rc25rLXVwZGF0ZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxca2llbS1zb2F0LW5oaWVtLWtodWFuXFxkdS10cnUtbXVhXFx0b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2NcXGR1eWV0LWR1LXRydS1tdWEta3Nuay11cGRhdGVcXGR1eWV0LWR1LXRydS1tdWEta3Nuay11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2R1eWV0LWR1LXRydS1tdWEta3Nuay11cGRhdGUvZHV5ZXQtZHUtdHJ1LW11YS1rc25rLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZHV5ZXQtZHUtdHJ1LW11YS1rc25rLXVwZGF0ZS9kdXlldC1kdS10cnUtbXVhLWtzbmstdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmNvbG9yLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHJhbmctdGhhaS50MSB7XG4gIGNvbG9yOiBzYW5keWJyb3duO1xufVxuXG4udHJhbmctdGhhaS50MiB7XG4gIGNvbG9yOiAjYWZiNDJiO1xufVxuXG4udHJhbmctdGhhaS50MyB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4udHJhbmctdGhhaS50NCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnRyYW5nLXRoYWkudDUge1xuICBjb2xvcjogcmVkO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5jb2xvci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyYW5nLXRoYWkudDEge1xuICBjb2xvcjogc2FuZHlicm93bjtcbn1cblxuLnRyYW5nLXRoYWkudDIge1xuICBjb2xvcjogI2FmYjQyYjtcbn1cblxuLnRyYW5nLXRoYWkudDMge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnRyYW5nLXRoYWkudDQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi50cmFuZy10aGFpLnQ1IHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.ts": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.ts ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: DuyetDuTruMuaKSNKUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetDuTruMuaKSNKUpdateComponent", function () { return DuyetDuTruMuaKSNKUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _duyet_du_tru_mua_ksnk_shared_duyet_du_tru_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model.ts");
            /* harmony import */ var _tu_choi_duyet_ksnk_popup_tu_choi_duyet_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.ts");
            // import { TongHopDuTruMuaTaiKhoaDuoc ,TrangThaiDuyet,DuTruMuaVatTuKhoDuocChiTietList} from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';
            var DuyetDuTruMuaKSNKUpdateComponent = /** @class */ (function () {
                function DuyetDuTruMuaKSNKUpdateComponent(authService, dialog, notificationService, apiService, router, route) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.isShow = false;
                    this.loading = false;
                }
                DuyetDuTruMuaKSNKUpdateComponent.prototype.ngOnInit = function () {
                    this.trangThai = new _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_14__["TrangThaiDuyet"]();
                    this.thongTinDuTruMuaVatTuTaiKhoaDuoc = new _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_14__["TongHopDuTruMuaTaiKhoaDuoc"]();
                };
                DuyetDuTruMuaKSNKUpdateComponent.prototype.huy = function () {
                    this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh?holdQuery=true');
                };
                DuyetDuTruMuaKSNKUpdateComponent.prototype.tuChoi = function () {
                    var _this = this;
                    var self = this;
                    self.validationErrors = [];
                    self.thongTinDuTruMuaVatTuTaiKhoaDuoc = this.shared.thongTinDuTruMuaVatTuTaiKhoaDuoc;
                    if (self.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId != 0) {
                        this.dialog.open(_tu_choi_duyet_ksnk_popup_tu_choi_duyet_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_15__["TuChoiDuyetKSNKPopupComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
                        }).afterClosed().subscribe(function (result) {
                            if (result !== null) {
                                self.thongTinDuTruMuaVatTuTaiKhoaDuoc.LyDoTruongKhoaTuChoi = result;
                                self.apiService.post("YeuCauMuaKSNK/TuChoiDanhSach", { id: self.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id, loaiKho: 0, LyDoTuChoi: result })
                                    .subscribe(function (resultData) {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Từ chối"]));
                                    self.back();
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    if (self.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoaId != 0) {
                        this.dialog.open(_tu_choi_duyet_ksnk_popup_tu_choi_duyet_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_15__["TuChoiDuyetKSNKPopupComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
                        }).afterClosed().subscribe(function (result) {
                            if (result !== null) {
                                self.thongTinDuTruMuaVatTuTaiKhoaDuoc.LyDoTruongKhoaTuChoi = result;
                                self.apiService.post("YeuCauMuaKSNK/TuChoiDanhSach", { id: self.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id, loaiKho: 5, LyDoTuChoi: result })
                                    .subscribe(function (resultData) {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Từ chối"]));
                                    self.back();
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                };
                DuyetDuTruMuaKSNKUpdateComponent.prototype.Duyet = function () {
                    var _this = this;
                    var self = this;
                    self.validationErrors = [];
                    self.thongTinDuTruMuaVatTuTaiKhoaDuoc = this.shared.thongTinDuTruMuaVatTuTaiKhoaDuoc;
                    self.thongTinDuTruMuaVatTuTaiKhoaDuoc.ListDuTruMuaVatTuKhoDuocChiTiet = [];
                    if (self.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.length != 0) {
                        self.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.forEach(function (element) {
                            var duTru = new _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_14__["DuTruMuaVatTuKhoDuocChiTietList"]();
                            duTru.VatTuId = element.VatTuId;
                            duTru.DuTruMuaVatTuId = self.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id;
                            duTru.DuTruMuaVatTuKhoDuocChiTietId = null;
                            duTru.DuTruMuaVatTuTheoKhoaChiTietId = null;
                            duTru.Id = element.Id;
                            duTru.LaVatTuBHYT = element.Loai;
                            duTru.NhomDieuTriDuPhong = element.NhomDieuTriDuPhong;
                            duTru.SoLuongDuKienSuDung = element.SLDuKienSuDungTrongKho;
                            duTru.SoLuongDuTru = element.SLDuTru,
                                duTru.SoLuongDuTruTruongKhoaDuyet = element.SLDuTruTKhoDuyet;
                            duTru.SoLuongDuTruKhoDuocDuyet = element.SLDuTruKhoDuocDuyet;
                            duTru.DuTruMuaVatTuTheoKhoaId = element.DuTruMuaVatTuTheoKhoaId;
                            self.thongTinDuTruMuaVatTuTaiKhoaDuoc.ListDuTruMuaVatTuKhoDuocChiTiet.push(duTru);
                        });
                    }
                    if (this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoaId != 0) {
                        this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuyet = true;
                    }
                    if (this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId != 0) {
                        this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuyet = false;
                    }
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt phiếu dự trù này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            self.apiService.post("YeuCauMuaKSNK/DuyetDanhSach", _this.thongTinDuTruMuaVatTuTaiKhoaDuoc)
                                .subscribe(function (resultData) {
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                self.back();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetDuTruMuaKSNKUpdateComponent.prototype.huyDuyet = function () {
                    var _this = this;
                    if (this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId != 0) {
                        var self = this;
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
                        }).afterClosed().subscribe(function (result) {
                            if (result === 'Yes') {
                                self.apiService.post("YeuCauMuaKSNK/HuyDuyet", { id: _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id, loaiKho: _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId })
                                    .subscribe(function (resultData) {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Hủy duyệt"]));
                                    _this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh?holdQuery=true');
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    if (this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoaId != 0) {
                        var self = this;
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
                        }).afterClosed().subscribe(function (result) {
                            if (result === 'Yes') {
                                self.apiService.post("YeuCauMuaKSNK/HuyDuyet", { id: _this.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id, loaiKho: 5 }) // 5 la khoa le
                                    .subscribe(function (resultData) {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Hủy duyệt"]));
                                    _this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh?holdQuery=true');
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                };
                DuyetDuTruMuaKSNKUpdateComponent.prototype.back = function () {
                    this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh']);
                };
                DuyetDuTruMuaKSNKUpdateComponent.prototype.getTrangThaiYeuCau = function (event) {
                    if (event != undefined && event != null) {
                        this.trangThai = event;
                        if (this.trangThai.DuocDuyet == true) {
                            this.isShow = false;
                        }
                        else if (this.trangThai.DuocDuyet == false) {
                            this.isShow = false;
                        }
                        else {
                            this.isShow = true;
                        }
                    }
                };
                DuyetDuTruMuaKSNKUpdateComponent.prototype.getDataItem = function (event) {
                    this.thongTinDuTruMuaVatTuTaiKhoaDuoc = event;
                };
                return DuyetDuTruMuaKSNKUpdateComponent;
            }());
            DuyetDuTruMuaKSNKUpdateComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duyet_du_tru_mua_ksnk_shared_duyet_du_tru_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_13__["DuyetDuTruMuaKSNKSharedComponent"], { static: true })
            ], DuyetDuTruMuaKSNKUpdateComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], { static: true })
            ], DuyetDuTruMuaKSNKUpdateComponent.prototype, "gridChild", void 0);
            DuyetDuTruMuaKSNKUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-duyet-du-tru-mua-ksnk-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-du-tru-mua-ksnk-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-du-tru-mua-ksnk-update.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.scss")).default]
                })
            ], DuyetDuTruMuaKSNKUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.scss": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.scss ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".xac-nhan-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZ29pLWdpYW0tZG9jLWR1LXRydS1tdWEta3Nuay1zaGFyZWQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxcZHUtdHJ1LW11YVxcdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jXFxnb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1rc25rLXNoYXJlZFxcZ29pLWdpYW0tZG9jLWR1LXRydS1tdWEta3Nuay1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2dvaS1naWFtLWRvYy1kdS10cnUtbXVhLWtzbmstc2hhcmVkL2dvaS1naWFtLWRvYy1kdS10cnUtbXVhLWtzbmstc2hhcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2dvaS1naWFtLWRvYy1kdS10cnUtbXVhLWtzbmstc2hhcmVkL2dvaS1naWFtLWRvYy1kdS10cnUtbXVhLWtzbmstc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnhhYy1uaGFuLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iLCIueGFjLW5oYW4tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.ts": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.ts ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: GoiGiamDocDuTruMuaKSNKSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiGiamDocDuTruMuaKSNKSharedComponent", function () { return GoiGiamDocDuTruMuaKSNKSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-info */ "./node_modules/@iconify/icons-ic/twotone-info.js");
            /* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model.ts");
            var GoiGiamDocDuTruMuaKSNKSharedComponent = /** @class */ (function () {
                function GoiGiamDocDuTruMuaKSNKSharedComponent(authService, dialog, notificationService, apiService, router, route) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.gridChildChildColumns = [];
                    this.trangThaiDuyet = null;
                    this.icInfo = _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.gridDataSource = {};
                    this.gridChildDataSource = {};
                    this.data = [];
                    this.loaiKhoThuoc = true;
                    this.KhoaId = 0;
                    this.KhoId = 0;
                    this.isDisableTrangThai = false;
                    this.show = true;
                    this.IdTrangThai = 0;
                    this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.tinhTrangView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.dataItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.groups = [{ field: 'Loai' }];
                    this.groupNhoms = [{
                            field: 'Khoa', aggregates: [
                                { field: 'SLDuTru', aggregate: 'sum' },
                                { field: 'SLDuKienTrongKy', aggregate: 'sum' }
                            ]
                        }];
                }
                GoiGiamDocDuTruMuaKSNKSharedComponent.prototype.ngOnInit = function () {
                    this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = new _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_9__["DuTruMuaTaiKhoaDuocGoi"]();
                    var id = this.route.snapshot.params.id;
                    var tinhTrang = this.route.snapshot.params.tinhTrang;
                    if (tinhTrang != undefined && tinhTrang != null) {
                        // view
                        this.tinhTrangView.emit(tinhTrang);
                        this.getByIdView(id, tinhTrang);
                    }
                    if (id != undefined || id != null && tinhTrang == undefined) {
                        this.getById(id);
                    }
                    this.gridColumns = [
                        { Field: 'STT', Title: '#', Width: 40, Sortable: false, Template: this.sttTemplate },
                        { Field: 'Loai', Title: 'Loại', Width: 100, ShowTooltip: true, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
                        { Field: 'TenVatTu', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
                        { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
                        { Field: 'HoatChat', Title: 'Quy cách', Width: 60, ShowTooltip: true, Sortable: false },
                        { Field: 'NhaSX', Title: 'Hãng SX', Width: 50, Sortable: false },
                        { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false },
                        { Field: 'SLDuTru', Title: 'SL dự trù', Width: 150, Sortable: false },
                        { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', minWidth: 30, Sortable: false },
                        { Field: 'SLDuTruTKhoDuyet', Title: 'T.Khoa duyệt', Width: 150, Sortable: false },
                        { Field: 'SLDuTruKhoDuocDuyet', Title: 'K.dược duyệt', Width: 150, Sortable: false },
                    ];
                    this.gridChildChildColumns = [
                        { Field: "Khoa", Title: "Khoa", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
                        { Field: 'STT', Title: '#', Width: 30, Sortable: false, Template: this.sttTemplate },
                        { Field: 'Kho', Title: 'Kho', minWidth: 100, Sortable: false },
                        { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false, TemplateGroupFooter: this.soLuongDuTruHeaderTemplate },
                        { Field: 'SLDuKienTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false, TemplateGroupFooter: this.soLuongDuKienHeaderTemplate },
                    ];
                };
                GoiGiamDocDuTruMuaKSNKSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.isDisableTrangThai = true;
                    this.apiService.post("YeuCauMuaKSNK/GetDataGoiDuyetDuTruMuaKSNK?idKyDuTru=" + id)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = resultData;
                            _this.gridDataSource = {
                                data: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList,
                                total: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.length
                            };
                            _this.setDataGridView();
                            _this.dataItem.emit(_this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi);
                        }
                    });
                };
                GoiGiamDocDuTruMuaKSNKSharedComponent.prototype.getDataSourceChild = function (parentItem) {
                    return {
                        data: parentItem.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild,
                        total: parentItem.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild.length
                    };
                };
                GoiGiamDocDuTruMuaKSNKSharedComponent.prototype.getByIdView = function (id, tinhTrang) {
                    var _this = this;
                    this.isDisableTrangThai = true;
                    this.apiService.post("YeuCauMuaKSNK/GetDataGoiDuyetDuTruMuaKSNKView?idKyDuTru=" + id + "&tinhTrang=" + tinhTrang)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = resultData;
                            _this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.LyDoTuChoi = resultData.LyDoTuChoi;
                            _this.gridDataSource = {
                                data: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList,
                                total: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.length
                            };
                            _this.setDataGridView();
                            _this.dataItem.emit(_this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi);
                        }
                    });
                };
                GoiGiamDocDuTruMuaKSNKSharedComponent.prototype.setDataGridView = function () {
                    this.gridChild.gridDataSource = this.gridDataSource;
                    if (this.gridChild !== undefined)
                        this.gridChild.setDataSource();
                };
                GoiGiamDocDuTruMuaKSNKSharedComponent.prototype.getSharedData = function () {
                    this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi;
                };
                return GoiGiamDocDuTruMuaKSNKSharedComponent;
            }());
            GoiGiamDocDuTruMuaKSNKSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"], static: false })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplate', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "tongTonKhoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplate', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "hDChuaNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplateDuyet', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "tongTonKhoTemplateDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplateDuyet', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "hDChuaNhanTemplateDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiTemplate', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "loaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiNhomGroupHeaderTemplate', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "loaiNhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sLDuTruKhoTDuocDuyet', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "sLDuTruKhoTDuocDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SLDuTruKhoDuocDuyet', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "SLDuTruKhoDuocDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "trangThaiYeuCau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "tinhTrangView", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "dataItem", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruHeaderTemplate', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "soLuongDuTruHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuKienHeaderTemplate', { static: true })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent.prototype, "soLuongDuKienHeaderTemplate", void 0);
            GoiGiamDocDuTruMuaKSNKSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-goi-giam-doc-du-tru-mua-ksnk-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goi-giam-doc-du-tru-mua-ksnk-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goi-giam-doc-du-tru-mua-ksnk-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.scss")).default]
                })
            ], GoiGiamDocDuTruMuaKSNKSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.scss": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.scss ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.color-button {\n  background-color: red;\n  color: white;\n}\n\n.trang-thai.t1 {\n  color: sandybrown;\n}\n\n.trang-thai.t2 {\n  color: #afb42b;\n}\n\n.trang-thai.t3 {\n  color: blue;\n}\n\n.trang-thai.t4 {\n  color: green;\n}\n\n.trang-thai.t5 {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZ29pLWdpYW0tZG9jLWR1LXRydS1tdWEta3Nuay11cGRhdGUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxcZHUtdHJ1LW11YVxcdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jXFxnb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1rc25rLXVwZGF0ZVxcZ29pLWdpYW0tZG9jLWR1LXRydS1tdWEta3Nuay11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2dvaS1naWFtLWRvYy1kdS10cnUtbXVhLWtzbmstdXBkYXRlL2dvaS1naWFtLWRvYy1kdS10cnUtbXVhLWtzbmstdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi9kdS10cnUtbXVhL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy9nb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1rc25rLXVwZGF0ZS9nb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1rc25rLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5jb2xvci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyYW5nLXRoYWkudDEge1xuICBjb2xvcjogc2FuZHlicm93bjtcbn1cblxuLnRyYW5nLXRoYWkudDIge1xuICBjb2xvcjogI2FmYjQyYjtcbn1cblxuLnRyYW5nLXRoYWkudDMge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnRyYW5nLXRoYWkudDQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi50cmFuZy10aGFpLnQ1IHtcbiAgY29sb3I6IHJlZDtcbn0iLCIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uY29sb3ItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cmFuZy10aGFpLnQxIHtcbiAgY29sb3I6IHNhbmR5YnJvd247XG59XG5cbi50cmFuZy10aGFpLnQyIHtcbiAgY29sb3I6ICNhZmI0MmI7XG59XG5cbi50cmFuZy10aGFpLnQzIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi50cmFuZy10aGFpLnQ0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4udHJhbmctdGhhaS50NSB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.ts": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.ts ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: GoiGiamDocDuTruMuaKSNKUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiGiamDocDuTruMuaKSNKUpdateComponent", function () { return GoiGiamDocDuTruMuaKSNKUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _goi_giam_doc_du_tru_mua_ksnk_shared_goi_giam_doc_du_tru_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model.ts");
            /* harmony import */ var _phieu_mua_tru_ksnk_tai_khoa_duoc_phieu_mua_tru_ksnk_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.ts");
            // import { GuiTongHopDuTruMuaKSNKTaiKhoaDuocConfirmComponent } from '../gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-confirm.component';
            var GoiGiamDocDuTruMuaKSNKUpdateComponent = /** @class */ (function () {
                function GoiGiamDocDuTruMuaKSNKUpdateComponent(authService, dialog, notificationService, apiService, router, route, ref) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.ref = ref;
                    this.isShow = false;
                    this.tinhTrangView = true;
                }
                GoiGiamDocDuTruMuaKSNKUpdateComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].THDTMuaTaiHanhChinh;
                    this.duTruMuaVatTuTaiKhoaDuoc = new _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_15__["DuTruMuaVatTuTaiKhoaDuoc"]();
                    this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = new _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_15__["DuTruMuaTaiKhoaDuocGoi"]();
                };
                GoiGiamDocDuTruMuaKSNKUpdateComponent.prototype.huy = function () {
                    this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh?holdQuery=true');
                };
                GoiGiamDocDuTruMuaKSNKUpdateComponent.prototype.tinhTrangVieww = function (event) {
                    if (event != null) {
                        this.tinhTrangView = false;
                    }
                };
                GoiGiamDocDuTruMuaKSNKUpdateComponent.prototype.goi = function () {
                    var _this = this;
                    var self = this;
                    self.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = this.shared.thongTinDuTruMuaVatTuTaiKhoaDuocGoi;
                    this.duTruMuaVatTuTaiKhoaDuoc.ListDuTruVatTuId = [];
                    this.duTruMuaVatTuTaiKhoaDuoc.ListDuTruVatTuTheoKhoaId = [];
                    if (this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi != undefined && this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi != null) {
                        this.duTruMuaVatTuTaiKhoaDuoc.NhanVienYeuCauId = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.NguoiYeuCauId;
                        this.duTruMuaVatTuTaiKhoaDuoc.KyDuTruMuaVatTuVatTuId = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.KyDuTruId;
                        this.duTruMuaVatTuTaiKhoaDuoc.TuNgay = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TuNgay;
                        this.duTruMuaVatTuTaiKhoaDuoc.DenNgay = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.DenNgay;
                        this.duTruMuaVatTuTaiKhoaDuoc.NgayYeuCau = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.NgayYeuCau;
                        this.duTruMuaVatTuTaiKhoaDuoc.ListDuTruVatTuId = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.ListDuTruVatTuId;
                        this.duTruMuaVatTuTaiKhoaDuoc.ListDuTruVatTuTheoKhoaId = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.ListDuTruVatTuTheoKhoaId;
                        this.duTruMuaVatTuTaiKhoaDuoc.DuTruMuaVatTuKhoDuocChiTiet = [];
                        if (this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList != undefined && this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList != null) {
                            this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.forEach(function (item) {
                                var data = new _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_15__["DuTruMuaVatTuKhoDuocChiTiets"]();
                                data.VatTuId = item.VatTuId;
                                data.LaVatTuBHYT = item.Loai,
                                    data.SoLuongDuTru = item.SLDuTru,
                                    data.SoLuongDuKienSuDung = item.SLDuKienSuDungTrongKho;
                                data.SoLuongDuTruKhoDuocDuyet = item.SLDuTruKhoDuocDuyet;
                                data.SoLuongDuTruTruongKhoaDuyet = item.SLDuTruTKhoDuyet;
                                // if(data.DuTruMuaVatTuKhoDu)
                                _this.duTruMuaVatTuTaiKhoaDuoc.DuTruMuaVatTuKhoDuocChiTiet.push(data);
                            });
                        }
                    }
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
                        self.dialog.open(null, {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có chắc chắn muốn gởi duyệt phiếu dự trù này không ?",
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                self.apiService.post("YeuCauMuaKSNK/GuiDuTruMuaKSNKTaiKhoaDuoc", self.thongTinDuTruMuaVatTuTaiKhoaDuocGoi)
                                    .subscribe(function (resultData) {
                                    if (resultData != undefined && resultData != null) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                        _this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh?holdQuery=true');
                                        self.closePopupSavingData();
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupSavingData();
                                });
                            }
                            else if (res == "YesAndPrint") {
                                self.validationErrors = [];
                                self.ref.detectChanges();
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
                                    self.savingPage();
                                    self.apiService.post("YeuCauMuaKSNK/GuiDuTruMuaKSNKTaiKhoaDuoc", self.thongTinDuTruMuaVatTuTaiKhoaDuocGoi).subscribe(function (resultData) {
                                        if (resultData != undefined && resultData != null) {
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                            self.closePopupSavingData();
                                            self.dialog.open(_phieu_mua_tru_ksnk_tai_khoa_duoc_phieu_mua_tru_ksnk_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_16__["PhieuMuaTruKSNKTaiKhoaDuocComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Id: resultData },
                                            }).afterClosed().subscribe(function () {
                                                self.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh']);
                                            });
                                        }
                                    }, function (err) {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupSavingData();
                                    });
                                }
                                else {
                                }
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                GoiGiamDocDuTruMuaKSNKUpdateComponent.prototype.closePopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                GoiGiamDocDuTruMuaKSNKUpdateComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                GoiGiamDocDuTruMuaKSNKUpdateComponent.prototype.getDataItem = function (event) {
                    this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = event;
                };
                return GoiGiamDocDuTruMuaKSNKUpdateComponent;
            }());
            GoiGiamDocDuTruMuaKSNKUpdateComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_goi_giam_doc_du_tru_mua_ksnk_shared_goi_giam_doc_du_tru_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_14__["GoiGiamDocDuTruMuaKSNKSharedComponent"], { static: true })
            ], GoiGiamDocDuTruMuaKSNKUpdateComponent.prototype, "shared", void 0);
            GoiGiamDocDuTruMuaKSNKUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-goi-giam-doc-du-tru-mua-ksnk-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goi-giam-doc-du-tru-mua-ksnk-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goi-giam-doc-du-tru-mua-ksnk-update.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.scss")).default]
                })
            ], GoiGiamDocDuTruMuaKSNKUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.scss": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.scss ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvcGhpZXUtbXVhLXRydS1rc25rLXRhaS1raG9hLWR1b2MvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxcZHUtdHJ1LW11YVxcdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jXFxwaGlldS1tdWEtdHJ1LWtzbmstdGFpLWtob2EtZHVvY1xccGhpZXUtbXVhLXRydS1rc25rLXRhaS1raG9hLWR1b2MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL3BoaWV1LW11YS10cnUta3Nuay10YWkta2hvYS1kdW9jL3BoaWV1LW11YS10cnUta3Nuay10YWkta2hvYS1kdW9jLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL3BoaWV1LW11YS10cnUta3Nuay10YWkta2hvYS1kdW9jL3BoaWV1LW11YS10cnUta3Nuay10YWkta2hvYS1kdW9jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.ts": 
        /*!******************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.ts ***!
          \******************************************************************************************************************************************************************************************/
        /*! exports provided: PhieuMuaTruKSNKTaiKhoaDuocComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuMuaTruKSNKTaiKhoaDuocComponent", function () { return PhieuMuaTruKSNKTaiKhoaDuocComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model.ts");
            var PhieuMuaTruKSNKTaiKhoaDuocComponent = /** @class */ (function () {
                function PhieuMuaTruKSNKTaiKhoaDuocComponent(dialogRef, apiService, notificationService, data, ref) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.data = data;
                    this.ref = ref;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.inPhieu = new _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_6__["PhieuInDuTruMuaTaiKhoaDuoc"]();
                    this.src = '';
                    this.dataHTML = '';
                }
                PhieuMuaTruKSNKTaiKhoaDuocComponent.prototype.ngOnInit = function () {
                    this.xemPhieuVatTu();
                };
                PhieuMuaTruKSNKTaiKhoaDuocComponent.prototype.xemPhieuVatTuVaDuocPham = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieu.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
                    self.inPhieu.DuTruMuaVatTuTheoKhoaId = self.data.Id;
                    self.inPhieu.Header = true;
                    self.apiService.post('YeuCauMuaKSNK/InPhieuVatTuVaDuocPhamTaiKhoaDuoc', self.inPhieu).subscribe(function (resData) {
                        if (resData) {
                            self.inPhieu.Header = false;
                            self.dataHTML = resData;
                            self.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(resData);
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuMuaTruKSNKTaiKhoaDuocComponent.prototype.xemPhieuVatTu = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieu.DuTruMuaVatTuTheoKhoaId = self.data.Id;
                    self.inPhieu.Header = true;
                    self.apiService.post('YeuCauMuaKSNK/InPhieuDuTruMuaTaiKhoaDuoc', self.inPhieu).subscribe(function (resData) {
                        if (resData) {
                            self.inPhieu.Header = false;
                            self.dataHTML = resData;
                            self.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(resData);
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuMuaTruKSNKTaiKhoaDuocComponent.prototype.xemPhieuDuocPham = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieu.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
                    self.inPhieu.Header = true;
                    self.apiService.post('YeuCauMuaKSNK/InPhieuDuTruMuaTaiKhoaDuocPham', self.inPhieu).subscribe(function (resData) {
                        if (resData) {
                            self.inPhieu.Header = false;
                            self.dataHTML = resData;
                            self.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(resData);
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuMuaTruKSNKTaiKhoaDuocComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var template = this.dataHTML.replace('<p style=\'background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center\'>' +
                        '<th>PHIẾU TỔNG HỢP DỰ TRÙ KIỂM SOÁT NHIỄM KHUẨN</th>' +
                        '</p>', '');
                    return new Promise(function (resolve) {
                        resolve(template);
                        _this.close();
                    });
                };
                PhieuMuaTruKSNKTaiKhoaDuocComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return PhieuMuaTruKSNKTaiKhoaDuocComponent;
            }());
            PhieuMuaTruKSNKTaiKhoaDuocComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            PhieuMuaTruKSNKTaiKhoaDuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-phieu-mua-tru-ksnk-tai-khoa-duoc',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-mua-tru-ksnk-tai-khoa-duoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-mua-tru-ksnk-tai-khoa-duoc.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], PhieuMuaTruKSNKTaiKhoaDuocComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-routing.module.ts": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-routing.module.ts ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule", function () { return TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _duyet_du_tru_mua_ksnk_update_duyet_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.ts");
            /* harmony import */ var _goi_giam_doc_du_tru_mua_ksnk_update_goi_giam_doc_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.ts");
            // import { TongHopDuTruMuaKSNKTaiKhoaDuocListComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list.component';
            var routes = [
                {
                    path: '',
                    // component: TongHopDuTruMuaKSNKTaiKhoaDuocListComponent,
                    data: {
                        title: 'Danh sách tổng hợp dự trù mua tại khoa kiểm soát nhiễm khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiHanhChinh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'xem-chi-tiet/:id',
                    component: _duyet_du_tru_mua_ksnk_update_duyet_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_6__["DuyetDuTruMuaKSNKUpdateComponent"],
                    data: {
                        title: 'Chi tiết duyệt dự trù mua kiểm soát nhiễm khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiHanhChinh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'xem-chi-tiet-tu-choi/:id/:khoThuocId',
                    component: _duyet_du_tru_mua_ksnk_update_duyet_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_6__["DuyetDuTruMuaKSNKUpdateComponent"],
                    data: {
                        title: 'Xem dự trù mua kiểm soát nhiễm khuẩn theo khoa',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiHanhChinh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'xem-chi-tiet-tu-da-xu-ly/:id/:khoThuocId',
                    component: _duyet_du_tru_mua_ksnk_update_duyet_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_6__["DuyetDuTruMuaKSNKUpdateComponent"],
                    data: {
                        title: 'Xem dự trù mua kiểm soát nhiễm khuẩn theo khoa',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiHanhChinh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'duyet/:id/:khoThuocId/:trangThai',
                    component: _duyet_du_tru_mua_ksnk_update_duyet_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_6__["DuyetDuTruMuaKSNKUpdateComponent"],
                    data: {
                        title: 'Duyệt dự trù mua kiểm soát nhiễm khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiHanhChinh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'gui/:id',
                    component: _goi_giam_doc_du_tru_mua_ksnk_update_goi_giam_doc_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_7__["GoiGiamDocDuTruMuaKSNKUpdateComponent"],
                    data: {
                        title: 'Gửi dự trù mua kiểm soát nhiễm khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiHanhChinh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'gui/:id/:tinhTrang',
                    component: _goi_giam_doc_du_tru_mua_ksnk_update_goi_giam_doc_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_7__["GoiGiamDocDuTruMuaKSNKUpdateComponent"],
                    data: {
                        title: 'Xem dự trù mua kiểm soát nhiễm khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].THDTMuaTaiHanhChinh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule = /** @class */ (function () {
                function TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule() {
                }
                return TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule;
            }());
            TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model.ts": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model.ts ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaTaiKhoaDuoc, DuTruMuaVatTuKhoDuocChiTietList, ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc, ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild, TongHopDuTruTuaTaiKhoaDuocSearch, TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy, TongHopDuTruTuaTaiKhoaDuocSearchTuChoi, RangeDate, TrangThaiDuyet, DuTruMuaVatTuKhoDuoc, DuTruMuaVatTuKhoDuocChiTiet, DuTruMuaTaiKhoaDuocGoi, ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc, PhieuInDuTruMuaTaiKhoaDuoc, DuTruMuaVatTuTaiKhoaDuoc, DuTruView, DuTruViewDetail, DuTruMuaVatTuKhoDuocChiTiets, ListStatusSelectTabTHDTKhoa */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuoc", function () { return TongHopDuTruMuaTaiKhoaDuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaVatTuKhoDuocChiTietList", function () { return DuTruMuaVatTuKhoDuocChiTietList; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc", function () { return ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild", function () { return ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruTuaTaiKhoaDuocSearch", function () { return TongHopDuTruTuaTaiKhoaDuocSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy", function () { return TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruTuaTaiKhoaDuocSearchTuChoi", function () { return TongHopDuTruTuaTaiKhoaDuocSearchTuChoi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiDuyet", function () { return TrangThaiDuyet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaVatTuKhoDuoc", function () { return DuTruMuaVatTuKhoDuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaVatTuKhoDuocChiTiet", function () { return DuTruMuaVatTuKhoDuocChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaTaiKhoaDuocGoi", function () { return DuTruMuaTaiKhoaDuocGoi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc", function () { return ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuInDuTruMuaTaiKhoaDuoc", function () { return PhieuInDuTruMuaTaiKhoaDuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaVatTuTaiKhoaDuoc", function () { return DuTruMuaVatTuTaiKhoaDuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruView", function () { return DuTruView; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruViewDetail", function () { return DuTruViewDetail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaVatTuKhoDuocChiTiets", function () { return DuTruMuaVatTuKhoDuocChiTiets; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStatusSelectTabTHDTKhoa", function () { return ListStatusSelectTabTHDTKhoa; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TongHopDuTruMuaTaiKhoaDuoc = /** @class */ (function () {
                function TongHopDuTruMuaTaiKhoaDuoc(Id, SoPhieu, Khoa, KhoaId, TenKhoa, KhoId, TenKho, NguoiYeuCauId, TenNguoiYeuCau, NgayYeuCau, TrangThai, TrangThaiHienThi, NgayKhoaDuocDuyet, NgayGiamDocDuyet, KyDuTru, KyDuTruId, LoaiDuTru, LoaiDuTruId, GhiChu, LyDoTruongKhoaTuChoi, LoaiDuyet, ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList, ListDuTruMuaVatTuKhoDuocChiTiet) {
                    if (Id === void 0) { Id = 0; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (Khoa === void 0) { Khoa = null; }
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (TenKhoa === void 0) { TenKhoa = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (NguoiYeuCauId === void 0) { NguoiYeuCauId = null; }
                    if (TenNguoiYeuCau === void 0) { TenNguoiYeuCau = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TrangThaiHienThi === void 0) { TrangThaiHienThi = null; }
                    if (NgayKhoaDuocDuyet === void 0) { NgayKhoaDuocDuyet = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (KyDuTru === void 0) { KyDuTru = null; }
                    if (KyDuTruId === void 0) { KyDuTruId = null; }
                    if (LoaiDuTru === void 0) { LoaiDuTru = null; }
                    if (LoaiDuTruId === void 0) { LoaiDuTruId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (LyDoTruongKhoaTuChoi === void 0) { LyDoTruongKhoaTuChoi = null; }
                    if (LoaiDuyet === void 0) { LoaiDuyet = null; }
                    if (ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList === void 0) { ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList = []; }
                    if (ListDuTruMuaVatTuKhoDuocChiTiet === void 0) { ListDuTruMuaVatTuKhoDuocChiTiet = []; }
                    this.Id = Id;
                    this.SoPhieu = SoPhieu;
                    this.Khoa = Khoa;
                    this.KhoaId = KhoaId;
                    this.TenKhoa = TenKhoa;
                    this.KhoId = KhoId;
                    this.TenKho = TenKho;
                    this.NguoiYeuCauId = NguoiYeuCauId;
                    this.TenNguoiYeuCau = TenNguoiYeuCau;
                    this.NgayYeuCau = NgayYeuCau;
                    this.TrangThai = TrangThai;
                    this.TrangThaiHienThi = TrangThaiHienThi;
                    this.NgayKhoaDuocDuyet = NgayKhoaDuocDuyet;
                    this.NgayGiamDocDuyet = NgayGiamDocDuyet;
                    this.KyDuTru = KyDuTru;
                    this.KyDuTruId = KyDuTruId;
                    this.LoaiDuTru = LoaiDuTru;
                    this.LoaiDuTruId = LoaiDuTruId;
                    this.GhiChu = GhiChu;
                    this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
                    this.LoaiDuyet = LoaiDuyet;
                    this.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList = ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList;
                    this.ListDuTruMuaVatTuKhoDuocChiTiet = ListDuTruMuaVatTuKhoDuocChiTiet;
                }
                return TongHopDuTruMuaTaiKhoaDuoc;
            }());
            var DuTruMuaVatTuKhoDuocChiTietList = /** @class */ (function () {
                function DuTruMuaVatTuKhoDuocChiTietList(Id, DuTruMuaVatTuId, DuTruMuaVatTuTheoKhoaId, VatTuId, LaVatTuBHYT, SoLuongDuTru, SoLuongDuKienSuDung, NhomDieuTriDuPhong, SoLuongDuTruTruongKhoaDuyet, SoLuongDuTruKhoDuocDuyet, DuTruMuaVatTuTheoKhoaChiTietId, DuTruMuaVatTuKhoDuocChiTietId) {
                    if (Id === void 0) { Id = 0; }
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = 0; }
                    if (DuTruMuaVatTuTheoKhoaId === void 0) { DuTruMuaVatTuTheoKhoaId = 0; }
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (NhomDieuTriDuPhong === void 0) { NhomDieuTriDuPhong = null; }
                    if (SoLuongDuTruTruongKhoaDuyet === void 0) { SoLuongDuTruTruongKhoaDuyet = null; }
                    if (SoLuongDuTruKhoDuocDuyet === void 0) { SoLuongDuTruKhoDuocDuyet = null; }
                    if (DuTruMuaVatTuTheoKhoaChiTietId === void 0) { DuTruMuaVatTuTheoKhoaChiTietId = null; }
                    if (DuTruMuaVatTuKhoDuocChiTietId === void 0) { DuTruMuaVatTuKhoDuocChiTietId = null; }
                    this.Id = Id;
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.DuTruMuaVatTuTheoKhoaId = DuTruMuaVatTuTheoKhoaId;
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
                    this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
                    this.SoLuongDuTruTruongKhoaDuyet = SoLuongDuTruTruongKhoaDuyet;
                    this.SoLuongDuTruKhoDuocDuyet = SoLuongDuTruKhoDuocDuyet;
                    this.DuTruMuaVatTuTheoKhoaChiTietId = DuTruMuaVatTuTheoKhoaChiTietId;
                    this.DuTruMuaVatTuKhoDuocChiTietId = DuTruMuaVatTuKhoDuocChiTietId;
                }
                return DuTruMuaVatTuKhoDuocChiTietList;
            }());
            var ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc = /** @class */ (function () {
                function ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc(Id, STT, Loai, TenLoai, VatTuId, TenVatTu, HoatChat, NongDoVaHamLuong, SĐK, DuTruMuaVatTuTheoKhoaId, DVT, DD, NhaSX, NuocSX, NhomDieuTriDuPhong, SLDuTru, SLDuKienSuDungTrongKho, KhoDuTruTon, HDChuaNhan, SLDuTruTKhoDuyet, SLDuTruKhoDuocDuyet, KhoTongTon, thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild) {
                    if (Id === void 0) { Id = 0; }
                    if (STT === void 0) { STT = 0; }
                    if (Loai === void 0) { Loai = null; }
                    if (TenLoai === void 0) { TenLoai = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (NongDoVaHamLuong === void 0) { NongDoVaHamLuong = null; }
                    if (SĐK === void 0) { SĐK = null; }
                    if (DuTruMuaVatTuTheoKhoaId === void 0) { DuTruMuaVatTuTheoKhoaId = 0; }
                    if (DVT === void 0) { DVT = null; }
                    if (DD === void 0) { DD = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (NhomDieuTriDuPhong === void 0) { NhomDieuTriDuPhong = null; }
                    if (SLDuTru === void 0) { SLDuTru = null; }
                    if (SLDuKienSuDungTrongKho === void 0) { SLDuKienSuDungTrongKho = null; }
                    if (KhoDuTruTon === void 0) { KhoDuTruTon = null; }
                    if (HDChuaNhan === void 0) { HDChuaNhan = null; }
                    if (SLDuTruTKhoDuyet === void 0) { SLDuTruTKhoDuyet = null; }
                    if (SLDuTruKhoDuocDuyet === void 0) { SLDuTruKhoDuocDuyet = null; }
                    if (KhoTongTon === void 0) { KhoTongTon = null; }
                    if (thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild === void 0) { thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild = []; }
                    this.Id = Id;
                    this.STT = STT;
                    this.Loai = Loai;
                    this.TenLoai = TenLoai;
                    this.VatTuId = VatTuId;
                    this.TenVatTu = TenVatTu;
                    this.HoatChat = HoatChat;
                    this.NongDoVaHamLuong = NongDoVaHamLuong;
                    this.SĐK = SĐK;
                    this.DuTruMuaVatTuTheoKhoaId = DuTruMuaVatTuTheoKhoaId;
                    this.DVT = DVT;
                    this.DD = DD;
                    this.NhaSX = NhaSX;
                    this.NuocSX = NuocSX;
                    this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
                    this.SLDuTru = SLDuTru;
                    this.SLDuKienSuDungTrongKho = SLDuKienSuDungTrongKho;
                    this.KhoDuTruTon = KhoDuTruTon;
                    this.HDChuaNhan = HDChuaNhan;
                    this.SLDuTruTKhoDuyet = SLDuTruTKhoDuyet;
                    this.SLDuTruKhoDuocDuyet = SLDuTruKhoDuocDuyet;
                    this.KhoTongTon = KhoTongTon;
                    this.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild = thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild;
                }
                return ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc;
            }());
            var ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild = /** @class */ (function () {
                function ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild(STT, Nhom, Kho, TuNgay, DenNgay, SLDuTru, SLDuKienTrongKy, DuTruMuaVatTuTheoKhoaId, DuTruMuaVatTuTheoKhoaChiTietId, DuTruMuaVatTuId, DuTruMuaVatTuChiTietId, KyDuTru) {
                    if (STT === void 0) { STT = 0; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (Kho === void 0) { Kho = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (SLDuTru === void 0) { SLDuTru = null; }
                    if (SLDuKienTrongKy === void 0) { SLDuKienTrongKy = null; }
                    if (DuTruMuaVatTuTheoKhoaId === void 0) { DuTruMuaVatTuTheoKhoaId = null; }
                    if (DuTruMuaVatTuTheoKhoaChiTietId === void 0) { DuTruMuaVatTuTheoKhoaChiTietId = null; }
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = null; }
                    if (DuTruMuaVatTuChiTietId === void 0) { DuTruMuaVatTuChiTietId = null; }
                    if (KyDuTru === void 0) { KyDuTru = null; }
                    this.STT = STT;
                    this.Nhom = Nhom;
                    this.Kho = Kho;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.SLDuTru = SLDuTru;
                    this.SLDuKienTrongKy = SLDuKienTrongKy;
                    this.DuTruMuaVatTuTheoKhoaId = DuTruMuaVatTuTheoKhoaId;
                    this.DuTruMuaVatTuTheoKhoaChiTietId = DuTruMuaVatTuTheoKhoaChiTietId;
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.DuTruMuaVatTuChiTietId = DuTruMuaVatTuChiTietId;
                    this.KyDuTru = KyDuTru;
                }
                return ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild;
            }());
            var TongHopDuTruTuaTaiKhoaDuocSearch = /** @class */ (function () {
                function TongHopDuTruTuaTaiKhoaDuocSearch(ChoDuyet, ChoGoi, SearchString, RangeNhap, RangeDuyet) {
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (ChoGoi === void 0) { ChoGoi = true; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeNhap === void 0) { RangeNhap = new RangeDate(); }
                    if (RangeDuyet === void 0) { RangeDuyet = new RangeDate(); }
                    this.ChoDuyet = ChoDuyet;
                    this.ChoGoi = ChoGoi;
                    this.SearchString = SearchString;
                    this.RangeNhap = RangeNhap;
                    this.RangeDuyet = RangeDuyet;
                }
                return TongHopDuTruTuaTaiKhoaDuocSearch;
            }());
            var TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy = /** @class */ (function () {
                function TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy(DaGoiVaDangChoDuyet, TuChoiDuyet, DaDuyet, SearchString, 
                // public RangeNhap: RangeDate = new RangeDate(),
                RangeDuyet) {
                    if (DaGoiVaDangChoDuyet === void 0) { DaGoiVaDangChoDuyet = true; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = true; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeDuyet === void 0) { RangeDuyet = new RangeDate(); }
                    this.DaGoiVaDangChoDuyet = DaGoiVaDangChoDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.DaDuyet = DaDuyet;
                    this.SearchString = SearchString;
                    this.RangeDuyet = RangeDuyet;
                }
                return TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy;
            }());
            var TongHopDuTruTuaTaiKhoaDuocSearchTuChoi = /** @class */ (function () {
                function TongHopDuTruTuaTaiKhoaDuocSearchTuChoi(SearchString, RangeNhap) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeNhap === void 0) { RangeNhap = new RangeDate(); }
                    this.SearchString = SearchString;
                    this.RangeNhap = RangeNhap;
                }
                return TongHopDuTruTuaTaiKhoaDuocSearchTuChoi;
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
            var TrangThaiDuyet = /** @class */ (function () {
                function TrangThaiDuyet(TenTrangThai, DuocDuyet) {
                    if (TenTrangThai === void 0) { TenTrangThai = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    this.TenTrangThai = TenTrangThai;
                    this.DuocDuyet = DuocDuyet;
                }
                return TrangThaiDuyet;
            }());
            var DuTruMuaVatTuKhoDuoc = /** @class */ (function () {
                function DuTruMuaVatTuKhoDuoc(Id, LyDoTruongKhoaTuChoi, LoaiDuyet, ListDuTruMuaVatTuKhoDuocChiTiet) {
                    if (Id === void 0) { Id = null; }
                    if (LyDoTruongKhoaTuChoi === void 0) { LyDoTruongKhoaTuChoi = null; }
                    if (LoaiDuyet === void 0) { LoaiDuyet = null; }
                    if (ListDuTruMuaVatTuKhoDuocChiTiet === void 0) { ListDuTruMuaVatTuKhoDuocChiTiet = []; }
                    this.Id = Id;
                    this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
                    this.LoaiDuyet = LoaiDuyet;
                    this.ListDuTruMuaVatTuKhoDuocChiTiet = ListDuTruMuaVatTuKhoDuocChiTiet;
                }
                return DuTruMuaVatTuKhoDuoc;
            }());
            var DuTruMuaVatTuKhoDuocChiTiet = /** @class */ (function () {
                function DuTruMuaVatTuKhoDuocChiTiet(DuTruMuaVatTuId, DuTruMuaVatTuTheoKhoaId, VatTuId, LaVatTuBHYT, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongDuTruTruongKhoaDuyet, SoLuongDuTruKhoDuocDuyet, NhomDieuTriDuPhong, DuTruMuaVatTuTheoKhoaChiTietId, DuTruMuaVatTuKhoDuocChiTietId) {
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = null; }
                    if (DuTruMuaVatTuTheoKhoaId === void 0) { DuTruMuaVatTuTheoKhoaId = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongDuTruTruongKhoaDuyet === void 0) { SoLuongDuTruTruongKhoaDuyet = null; }
                    if (SoLuongDuTruKhoDuocDuyet === void 0) { SoLuongDuTruKhoDuocDuyet = null; }
                    if (NhomDieuTriDuPhong === void 0) { NhomDieuTriDuPhong = null; }
                    if (DuTruMuaVatTuTheoKhoaChiTietId === void 0) { DuTruMuaVatTuTheoKhoaChiTietId = null; }
                    if (DuTruMuaVatTuKhoDuocChiTietId === void 0) { DuTruMuaVatTuKhoDuocChiTietId = null; }
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.DuTruMuaVatTuTheoKhoaId = DuTruMuaVatTuTheoKhoaId;
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
                    this.SoLuongDuTruTruongKhoaDuyet = SoLuongDuTruTruongKhoaDuyet;
                    this.SoLuongDuTruKhoDuocDuyet = SoLuongDuTruKhoDuocDuyet;
                    this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
                    this.DuTruMuaVatTuTheoKhoaChiTietId = DuTruMuaVatTuTheoKhoaChiTietId;
                    this.DuTruMuaVatTuKhoDuocChiTietId = DuTruMuaVatTuKhoDuocChiTietId;
                }
                return DuTruMuaVatTuKhoDuocChiTiet;
            }());
            // goi
            var DuTruMuaTaiKhoaDuocGoi = /** @class */ (function () {
                function DuTruMuaTaiKhoaDuocGoi(Id, KyDuTru, KyDuTruId, TenNguoiYeuCau, NguoiYeuCauId, TrangThai, TrangThaiHienThi, GhiChu, TuNgay, DenNgay, NgayYeuCau, LyDoTuChoi, ListDuTruVatTuId, ListDuTruVatTuTheoKhoaId, thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList) {
                    if (Id === void 0) { Id = 0; }
                    if (KyDuTru === void 0) { KyDuTru = null; }
                    if (KyDuTruId === void 0) { KyDuTruId = null; }
                    if (TenNguoiYeuCau === void 0) { TenNguoiYeuCau = null; }
                    if (NguoiYeuCauId === void 0) { NguoiYeuCauId = 0; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TrangThaiHienThi === void 0) { TrangThaiHienThi = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (LyDoTuChoi === void 0) { LyDoTuChoi = null; }
                    if (ListDuTruVatTuId === void 0) { ListDuTruVatTuId = []; }
                    if (ListDuTruVatTuTheoKhoaId === void 0) { ListDuTruVatTuTheoKhoaId = []; }
                    if (thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList === void 0) { thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList = []; }
                    this.Id = Id;
                    this.KyDuTru = KyDuTru;
                    this.KyDuTruId = KyDuTruId;
                    this.TenNguoiYeuCau = TenNguoiYeuCau;
                    this.NguoiYeuCauId = NguoiYeuCauId;
                    this.TrangThai = TrangThai;
                    this.TrangThaiHienThi = TrangThaiHienThi;
                    this.GhiChu = GhiChu;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.NgayYeuCau = NgayYeuCau;
                    this.LyDoTuChoi = LyDoTuChoi;
                    this.ListDuTruVatTuId = ListDuTruVatTuId;
                    this.ListDuTruVatTuTheoKhoaId = ListDuTruVatTuTheoKhoaId;
                    this.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList = thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList;
                }
                return DuTruMuaTaiKhoaDuocGoi;
            }());
            var ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc = /** @class */ (function () {
                function ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc(Id, STT, Loai, TenLoai, VatTuId, TenVatTu, HoatChat, NongDoVaHamLuong, SĐK, DuTruMuaVatTuTheoKhoaId, DVT, DD, NhaSX, NuocSX, NhomDieuTriDuPhong, SLDuTru, SLDuKienSuDungTrongKho, KhoDuTruTon, HDChuaNhan, SLDuTruTKhoDuyet, SLDuTruKhoDuocDuyet, KhoTongTon, ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChildList) {
                    if (Id === void 0) { Id = 0; }
                    if (STT === void 0) { STT = 0; }
                    if (Loai === void 0) { Loai = null; }
                    if (TenLoai === void 0) { TenLoai = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (NongDoVaHamLuong === void 0) { NongDoVaHamLuong = null; }
                    if (SĐK === void 0) { SĐK = null; }
                    if (DuTruMuaVatTuTheoKhoaId === void 0) { DuTruMuaVatTuTheoKhoaId = 0; }
                    if (DVT === void 0) { DVT = null; }
                    if (DD === void 0) { DD = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (NhomDieuTriDuPhong === void 0) { NhomDieuTriDuPhong = null; }
                    if (SLDuTru === void 0) { SLDuTru = null; }
                    if (SLDuKienSuDungTrongKho === void 0) { SLDuKienSuDungTrongKho = null; }
                    if (KhoDuTruTon === void 0) { KhoDuTruTon = null; }
                    if (HDChuaNhan === void 0) { HDChuaNhan = null; }
                    if (SLDuTruTKhoDuyet === void 0) { SLDuTruTKhoDuyet = null; }
                    if (SLDuTruKhoDuocDuyet === void 0) { SLDuTruKhoDuocDuyet = null; }
                    if (KhoTongTon === void 0) { KhoTongTon = null; }
                    if (ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChildList === void 0) { ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChildList = []; }
                    this.Id = Id;
                    this.STT = STT;
                    this.Loai = Loai;
                    this.TenLoai = TenLoai;
                    this.VatTuId = VatTuId;
                    this.TenVatTu = TenVatTu;
                    this.HoatChat = HoatChat;
                    this.NongDoVaHamLuong = NongDoVaHamLuong;
                    this.SĐK = SĐK;
                    this.DuTruMuaVatTuTheoKhoaId = DuTruMuaVatTuTheoKhoaId;
                    this.DVT = DVT;
                    this.DD = DD;
                    this.NhaSX = NhaSX;
                    this.NuocSX = NuocSX;
                    this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
                    this.SLDuTru = SLDuTru;
                    this.SLDuKienSuDungTrongKho = SLDuKienSuDungTrongKho;
                    this.KhoDuTruTon = KhoDuTruTon;
                    this.HDChuaNhan = HDChuaNhan;
                    this.SLDuTruTKhoDuyet = SLDuTruTKhoDuyet;
                    this.SLDuTruKhoDuocDuyet = SLDuTruKhoDuocDuyet;
                    this.KhoTongTon = KhoTongTon;
                    this.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChildList = ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChildList;
                }
                return ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc;
            }());
            // phieu in 
            var PhieuInDuTruMuaTaiKhoaDuoc = /** @class */ (function () {
                function PhieuInDuTruMuaTaiKhoaDuoc(DuTruMuaDuocPhamTheoKhoaId, DuTruMuaVatTuTheoKhoaId, HostingName, Header) {
                    if (DuTruMuaDuocPhamTheoKhoaId === void 0) { DuTruMuaDuocPhamTheoKhoaId = null; }
                    if (DuTruMuaVatTuTheoKhoaId === void 0) { DuTruMuaVatTuTheoKhoaId = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    this.DuTruMuaDuocPhamTheoKhoaId = DuTruMuaDuocPhamTheoKhoaId;
                    this.DuTruMuaVatTuTheoKhoaId = DuTruMuaVatTuTheoKhoaId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                }
                return PhieuInDuTruMuaTaiKhoaDuoc;
            }());
            var DuTruMuaVatTuTaiKhoaDuoc = /** @class */ (function () {
                function DuTruMuaVatTuTaiKhoaDuoc(Id, SoPhieu, NhanVienYeuCauId, NgayYeuCau, TuNgay, DenNgay, GhiChu, GiamDocDuyet, GiamDocId, NgayGiamDocDuyet, LyDoGiamDocTuChoi, KyDuTruMuaVatTuVatTuId, ListDuTruVatTuId, ListDuTruVatTuTheoKhoaId, ListDuTruVatTuChiTietId, ListDuTruVatTuTheoKhoaChiTietId, DuTruMuaVatTuKhoDuocChiTiet) {
                    if (Id === void 0) { Id = 0; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = 0; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (GiamDocDuyet === void 0) { GiamDocDuyet = null; }
                    if (GiamDocId === void 0) { GiamDocId = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (LyDoGiamDocTuChoi === void 0) { LyDoGiamDocTuChoi = null; }
                    if (KyDuTruMuaVatTuVatTuId === void 0) { KyDuTruMuaVatTuVatTuId = 0; }
                    if (ListDuTruVatTuId === void 0) { ListDuTruVatTuId = []; }
                    if (ListDuTruVatTuTheoKhoaId === void 0) { ListDuTruVatTuTheoKhoaId = []; }
                    if (ListDuTruVatTuChiTietId === void 0) { ListDuTruVatTuChiTietId = []; }
                    if (ListDuTruVatTuTheoKhoaChiTietId === void 0) { ListDuTruVatTuTheoKhoaChiTietId = []; }
                    if (DuTruMuaVatTuKhoDuocChiTiet === void 0) { DuTruMuaVatTuKhoDuocChiTiet = []; }
                    this.Id = Id;
                    this.SoPhieu = SoPhieu;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.NgayYeuCau = NgayYeuCau;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.GhiChu = GhiChu;
                    this.GiamDocDuyet = GiamDocDuyet;
                    this.GiamDocId = GiamDocId;
                    this.NgayGiamDocDuyet = NgayGiamDocDuyet;
                    this.LyDoGiamDocTuChoi = LyDoGiamDocTuChoi;
                    this.KyDuTruMuaVatTuVatTuId = KyDuTruMuaVatTuVatTuId;
                    this.ListDuTruVatTuId = ListDuTruVatTuId;
                    this.ListDuTruVatTuTheoKhoaId = ListDuTruVatTuTheoKhoaId;
                    this.ListDuTruVatTuChiTietId = ListDuTruVatTuChiTietId;
                    this.ListDuTruVatTuTheoKhoaChiTietId = ListDuTruVatTuTheoKhoaChiTietId;
                    this.DuTruMuaVatTuKhoDuocChiTiet = DuTruMuaVatTuKhoDuocChiTiet;
                }
                return DuTruMuaVatTuTaiKhoaDuoc;
            }());
            // view 
            var DuTruView = /** @class */ (function () {
                function DuTruView(SoPhieu, KyDuTruDisplay, KyDuTru, NguoiYeuCau, NguoiDuyet, NgayYeuCauDisplay, Id, NgayYeuCau, NgayDuyetDisplay, LyDoGiamDocTuChoi, NgayDuyet, GhiChu, TrangThai, // null: chờ, true: đã duyệt, false: từ chối duyệt
                TrangThaiDisplay, DuTruGiamDocDetails) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KyDuTruDisplay === void 0) { KyDuTruDisplay = null; }
                    if (KyDuTru === void 0) { KyDuTru = null; }
                    if (NguoiYeuCau === void 0) { NguoiYeuCau = null; }
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (NgayYeuCauDisplay === void 0) { NgayYeuCauDisplay = null; }
                    if (Id === void 0) { Id = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (NgayDuyetDisplay === void 0) { NgayDuyetDisplay = null; }
                    if (LyDoGiamDocTuChoi === void 0) { LyDoGiamDocTuChoi = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TrangThaiDisplay === void 0) { TrangThaiDisplay = null; }
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
                    this.LyDoGiamDocTuChoi = LyDoGiamDocTuChoi;
                    this.NgayDuyet = NgayDuyet;
                    this.GhiChu = GhiChu;
                    this.TrangThai = TrangThai;
                    this.TrangThaiDisplay = TrangThaiDisplay;
                    this.DuTruGiamDocDetails = DuTruGiamDocDetails;
                }
                return DuTruView;
            }());
            var DuTruViewDetail = /** @class */ (function () {
                function DuTruViewDetail(Loai, IsBhyt, VatTuId, VatTu, HoatChat, Id, NongDo, Sdk, Dvt, DuongDung, NhaSx, NuocSx, SoLuongDuTru, SoLuongDuKienTrongKy, SoLuongDuTruTrKhoa, SoLuongDuTruKhDuoc, SoLuongDuTruDirector, KhoDuTruTon, KhoTongTon, HdChuaNhap, TongTonList, HdChuaNhapList) {
                    if (Loai === void 0) { Loai = null; }
                    if (IsBhyt === void 0) { IsBhyt = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (VatTu === void 0) { VatTu = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (Id === void 0) { Id = null; }
                    if (NongDo === void 0) { NongDo = null; }
                    if (Sdk === void 0) { Sdk = null; }
                    if (Dvt === void 0) { Dvt = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
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
                    this.HoatChat = HoatChat;
                    this.Id = Id;
                    this.NongDo = NongDo;
                    this.Sdk = Sdk;
                    this.Dvt = Dvt;
                    this.DuongDung = DuongDung;
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
                return DuTruViewDetail;
            }());
            var DuTruMuaVatTuKhoDuocChiTiets = /** @class */ (function () {
                function DuTruMuaVatTuKhoDuocChiTiets(Id, VatTuId, DuTruMuaVatTuKhoDuocId, LaVatTuBHYT, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongDuTruTruongKhoaDuyet, SoLuongDuTruKhoDuocDuyet, SoLuongDuTruGiamDocDuyet) {
                    if (Id === void 0) { Id = 0; }
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (DuTruMuaVatTuKhoDuocId === void 0) { DuTruMuaVatTuKhoDuocId = 0; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = 0; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = 0; }
                    if (SoLuongDuTruTruongKhoaDuyet === void 0) { SoLuongDuTruTruongKhoaDuyet = 0; }
                    if (SoLuongDuTruKhoDuocDuyet === void 0) { SoLuongDuTruKhoDuocDuyet = 0; }
                    if (SoLuongDuTruGiamDocDuyet === void 0) { SoLuongDuTruGiamDocDuyet = 0; }
                    this.Id = Id;
                    this.VatTuId = VatTuId;
                    this.DuTruMuaVatTuKhoDuocId = DuTruMuaVatTuKhoDuocId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
                    this.SoLuongDuTruTruongKhoaDuyet = SoLuongDuTruTruongKhoaDuyet;
                    this.SoLuongDuTruKhoDuocDuyet = SoLuongDuTruKhoDuocDuyet;
                    this.SoLuongDuTruGiamDocDuyet = SoLuongDuTruGiamDocDuyet;
                }
                return DuTruMuaVatTuKhoDuocChiTiets;
            }());
            var ListStatusSelectTabTHDTKhoa = /** @class */ (function () {
                function ListStatusSelectTabTHDTKhoa(selectedTabChoXuLy, selectedTabDaXuLy, selectedTabTuChoi) {
                    if (selectedTabChoXuLy === void 0) { selectedTabChoXuLy = true; }
                    if (selectedTabDaXuLy === void 0) { selectedTabDaXuLy = false; }
                    if (selectedTabTuChoi === void 0) { selectedTabTuChoi = false; }
                    this.selectedTabChoXuLy = selectedTabChoXuLy;
                    this.selectedTabDaXuLy = selectedTabDaXuLy;
                    this.selectedTabTuChoi = selectedTabTuChoi;
                }
                return ListStatusSelectTabTHDTKhoa;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.module.ts": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.module.ts ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruKSNKMuaTaiKhoaDuocModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruKSNKMuaTaiKhoaDuocModule", function () { return TongHopDuTruKSNKMuaTaiKhoaDuocModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.service */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.service.ts");
            /* harmony import */ var _duyet_du_tru_mua_ksnk_shared_duyet_du_tru_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component.ts");
            /* harmony import */ var _duyet_du_tru_mua_ksnk_update_duyet_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component.ts");
            /* harmony import */ var _tu_choi_duyet_ksnk_popup_tu_choi_duyet_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.ts");
            /* harmony import */ var _goi_giam_doc_du_tru_mua_ksnk_shared_goi_giam_doc_du_tru_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component.ts");
            /* harmony import */ var _goi_giam_doc_du_tru_mua_ksnk_update_goi_giam_doc_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component.ts");
            /* harmony import */ var _phieu_mua_tru_ksnk_tai_khoa_duoc_phieu_mua_tru_ksnk_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component.ts");
            /* harmony import */ var _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-routing.module */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-routing.module.ts");
            // import { TongHopDuTruMuaKSNKTaiKhoaDuocListComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list.component';
            // import { TongHopDuTruMuaKSNKTaiKhoaUpdateComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-update/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-update.component';
            // import { TongHopDuTruMuaKSNKTaiKhoaDuocChoXuLyComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-cho-xu-ly.component';
            // import { TongHopDuTruMuaKSNKTaiKhoaDuocDaXuLyComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-da-xu-ly.component';
            // import { TongHopDuTruMuaKSNKTaiTuChoiComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-tu-choi.component';
            // import { GuiTongHopDuTruMuaKSNKTaiKhoaDuocConfirmComponent } from './gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-confirm.component';
            var TongHopDuTruKSNKMuaTaiKhoaDuocModule = /** @class */ (function () {
                function TongHopDuTruKSNKMuaTaiKhoaDuocModule() {
                }
                return TongHopDuTruKSNKMuaTaiKhoaDuocModule;
            }());
            TongHopDuTruKSNKMuaTaiKhoaDuocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        // TongHopDuTruMuaKSNKTaiKhoaDuocListComponent,
                        // TongHopDuTruMuaTaiKhoaDuocSharedComponent,
                        // TongHopDuTruMuaKSNKTaiKhoaUpdateComponent,            
                        // TongHopDuTruMuaKSNKTaiKhoaDuocChoXuLyComponent,
                        // TongHopDuTruMuaKSNKTaiKhoaDuocDaXuLyComponent,
                        // TongHopDuTruMuaKSNKTaiTuChoiComponent,
                        _duyet_du_tru_mua_ksnk_shared_duyet_du_tru_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_14__["DuyetDuTruMuaKSNKSharedComponent"],
                        _duyet_du_tru_mua_ksnk_update_duyet_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_15__["DuyetDuTruMuaKSNKUpdateComponent"],
                        _tu_choi_duyet_ksnk_popup_tu_choi_duyet_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_16__["TuChoiDuyetKSNKPopupComponent"],
                        _goi_giam_doc_du_tru_mua_ksnk_shared_goi_giam_doc_du_tru_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_17__["GoiGiamDocDuTruMuaKSNKSharedComponent"],
                        _goi_giam_doc_du_tru_mua_ksnk_update_goi_giam_doc_du_tru_mua_ksnk_update_component__WEBPACK_IMPORTED_MODULE_18__["GoiGiamDocDuTruMuaKSNKUpdateComponent"],
                        // GuiTongHopDuTruMuaKSNKTaiKhoaDuocConfirmComponent,
                        _phieu_mua_tru_ksnk_tai_khoa_duoc_phieu_mua_tru_ksnk_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_19__["PhieuMuaTruKSNKTaiKhoaDuocComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_routing_module__WEBPACK_IMPORTED_MODULE_20__["TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                    ],
                    providers: [
                        _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_service__WEBPACK_IMPORTED_MODULE_13__["TongHopDuTruMuaKSNKTaiKhoaDuocService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"], useClass: _tong_hop_du_tru_mua_ksnk_tai_khoa_duoc_service__WEBPACK_IMPORTED_MODULE_13__["TongHopDuTruMuaKSNKTaiKhoaDuocService"] },
                    ],
                    entryComponents: [
                        _tu_choi_duyet_ksnk_popup_tu_choi_duyet_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_16__["TuChoiDuyetKSNKPopupComponent"],
                        _phieu_mua_tru_ksnk_tai_khoa_duoc_phieu_mua_tru_ksnk_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_19__["PhieuMuaTruKSNKTaiKhoaDuocComponent"],
                    ]
                })
            ], TongHopDuTruKSNKMuaTaiKhoaDuocModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.service.ts": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.service.ts ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaKSNKTaiKhoaDuocService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaKSNKTaiKhoaDuocService", function () { return TongHopDuTruMuaKSNKTaiKhoaDuocService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var TongHopDuTruMuaKSNKTaiKhoaDuocService = /** @class */ (function (_super) {
                __extends(TongHopDuTruMuaKSNKTaiKhoaDuocService, _super);
                function TongHopDuTruMuaKSNKTaiKhoaDuocService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'YeuCauMuaVatTu';
                    return _this;
                }
                return TongHopDuTruMuaKSNKTaiKhoaDuocService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            TongHopDuTruMuaKSNKTaiKhoaDuocService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            TongHopDuTruMuaKSNKTaiKhoaDuocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TongHopDuTruMuaKSNKTaiKhoaDuocService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.scss": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.scss ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL3R1LWNob2ktZHV5ZXQta3Nuay1wb3B1cC90dS1jaG9pLWR1eWV0LWtzbmstcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.ts": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.ts ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: TuChoiDuyetKSNKPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuChoiDuyetKSNKPopupComponent", function () { return TuChoiDuyetKSNKPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var TuChoiDuyetKSNKPopupComponent = /** @class */ (function () {
                function TuChoiDuyetKSNKPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.Title = null;
                    this.Message = null;
                    this.lyDo = null;
                }
                TuChoiDuyetKSNKPopupComponent.prototype.ngOnInit = function () {
                    this.Title = this.data.Title;
                    this.Message = this.data.Message;
                };
                TuChoiDuyetKSNKPopupComponent.prototype.close = function (data) {
                    if (data === 'ok') {
                        this.dialogRef.close(this.lyDo);
                    }
                    else {
                        this.dialogRef.close(null);
                    }
                };
                return TuChoiDuyetKSNKPopupComponent;
            }());
            TuChoiDuyetKSNKPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            TuChoiDuyetKSNKPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-tu-choi-duyet-ksnk-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tu-choi-duyet-ksnk-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tu-choi-duyet-ksnk-popup.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], TuChoiDuyetKSNKPopupComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-tai-khoa-duoc-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-tai-khoa-duoc-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-module-es5.js.map
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-tai-khoa-duoc-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-module-es5.js.map