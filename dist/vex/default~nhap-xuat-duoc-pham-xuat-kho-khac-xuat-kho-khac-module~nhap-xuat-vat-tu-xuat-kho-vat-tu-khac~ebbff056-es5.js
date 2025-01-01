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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhap-xuat-duoc-pham-xuat-kho-khac-xuat-kho-khac-module~nhap-xuat-vat-tu-xuat-kho-vat-tu-khac~ebbff056"], {
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
        /***/ "./node_modules/@iconify/icons-ic/chevron-left.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/chevron-left.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/chevron-right.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/chevron-right.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/first-page.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/first-page.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/last-page.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/last-page.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.html": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.html ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{data.title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.html": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.html ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Xuất khác',Path:'/nhap-xuat/duoc-pham/xuat-kho-khac', Active: true}\n                ]\">\n</app-header-form>\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo yêu cầu xuất kho khác</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-xuat-kho-khac-shared [validationErrors]=\"validationErrors\" [isCreate]=\"true\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-xuat-kho-khac-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"create()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU XUẤT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.html": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.html ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Xuất khác',Path:'',Active:true}\n                ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #parentGrid [sort]=\"sort\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [useActionDefault]=\"false\" [showStt]=\"true\"\n                [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\" [showExportExcel]=\"true\"\n                [urlGetData]=\"urlGetDataDuocPham\" [urlGetTotalPage]=\"urlGetTotalPageDuocPham\"\n                (extExportExcel)=\"exportExcel()\"></app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <!-- [sort]=\"sortChild\" -->\n                <app-grid #gridChildOfParent [groups]=\"groups\" [gridColumns]=\"gridChildColumns\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [showStt]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    additionalSearchString=\"{{dataItem.Id}};{{dataItem.TinhTrang}} \" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n        </div>\n        <ng-template #soChungTuTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem.Id, dataItem.TinhTrang)\">\n                {{dataItem.SoPhieu}}</a>\n        </ng-template>\n\n        <ng-template #khoXuatTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem.Id, dataItem.TinhTrang)\">\n                {{dataItem.KhoDuocPhamXuat}}</a>\n        </ng-template>\n\n        <ng-template #tinhTrangTemplate let-dataItem>\n            <label *ngIf=\"dataItem.TinhTrang == 0\" class=\"orange\">\n                <span>{{dataItem.TinhTrangDisplay}}</span>\n            </label>\n            <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                <span>{{dataItem.TinhTrangDisplay}}</span>\n            </label>\n        </ng-template>\n\n        <ng-template #ngayXuatTemplate let-dataItem>\n            {{dataItem.NgayXuatDisplay}}\n        </ng-template>\n\n        <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <app-checkbox name=\"chua-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet')\" class=\"ml-2\"\n                    value=\"coduyet\" [(model)]=\"xuatKhoSearch.ChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n                </app-checkbox>\n\n                <app-checkbox name=\"da-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daduyet')\" class=\"ml-2\"\n                    value=\"coduyet\" [(model)]=\"xuatKhoSearch.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" label=\"Đã duyệt xuất\">\n                </app-checkbox>\n\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"xuatKhoSearch.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n                <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                    [(model)]=\"xuatKhoSearch.RangeFromDate\" label=\"Xuất từ ngày - đến ngày\" (keyup)=\"onKey($event)\"\n                    (modelChange)=\"changeNgayBatDauRange()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n                </app-daterangepicker>\n\n\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button (click)=\"themMoiXuatKho()\" class=\"mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip\n                    title=\"Thêm\" type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n\n            </div>\n        </ng-template>\n\n\n        <ng-template #actionTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button (click)=\"inPhieu(dataItem)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In phiếu</span>\n                    </button>\n                    <!-- <button *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"chinhSua(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                        <span>Sửa</span>\n                    </button> -->\n                    <button *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"xoa(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                        <span>Xóa</span>\n                    </button>\n                </ng-template>\n\n            </mat-menu>\n            <!-- <div class=\"text-center\" kendoTooltip>\n                <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                    *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"xoa(dataItem.Id)\">\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                </button>\n            </div> -->\n        </ng-template>\n        <ng-template #hsdListTemplate let-dataItem>\n            {{dataItem.HanSuDungDisplay}}\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.html": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.html ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <app-combobox *ngIf=\"trangThaiVo != undefined && trangThaiVo!= null && trangThaiVo.TrangThai == null\" id=\"KhoXuatId\"\n        fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"yeuCauXuatKhoKhac.KhoXuatId\" [required]=\"true\"\n        autoSelectFirstItem=\"true\" bind=\"true\" [disabled]=\"disabled\" [modelText]=\"yeuCauXuatKhoKhac.TenKhoXuat\"\n        label=\"Kho xuất\" (modelChange)=\"khoXuatModelChange($event)\" url=\"XuatKhoDuocPhamKhac/GetKhoTheoLoaiDuocPham\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauXuatKhoKhac.KhoXuatId +'}', Take: 50}\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"trangThaiVo != undefined && trangThaiVo!= null && trangThaiVo.TrangThai == true\" id=\"KhoXuatId\"\n        fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"yeuCauXuatKhoKhac.KhoXuatId\" [required]=\"true\" [disabled]=\"true\"\n        [modelText]=\"yeuCauXuatKhoKhac.TenKhoXuat\" label=\"Kho xuất\" url=\"XuatKhoDuocPhamKhac/GetKhoTheoLoaiDuocPham\">\n    </app-combobox>\n\n    <app-combobox id=\"NguoiXuatId\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"yeuCauXuatKhoKhac.NguoiXuatId\"\n        [required]=\"true\" [modelText]=\"yeuCauXuatKhoKhac.TenNguoiXuat\" bind=\"true\" label=\"Người xuất\"\n        url=\"XuatKhoDuocPham/GetNguoiXuat\" [disabled]=\"true\"\n        [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox id=\"NguoiNhanId\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"yeuCauXuatKhoKhac.NguoiNhanId\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        [queryInfo]=\"{ParameterDependencies:'{NguoiNhanId:' + yeuCauXuatKhoKhac.NguoiNhanId +'}', Take: 50}\"\n        [modelText]=\"yeuCauXuatKhoKhac.TenNguoiNhan\" label=\"Người nhận\" url=\"XuatKhoDuocPhamKhac/GetNguoiNhanXuatKhac\">\n    </app-combobox>\n\n    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"25%\"\n        [fxFlex]=\"yeuCauXuatKhoKhac.TraNCC === true ||\n        (yeuCauXuatKhoKhac.LoaiKho === 1 || yeuCauXuatKhoKhac.LoaiKho === 2 || yeuCauXuatKhoKhac.LoaiKho === 6 || yeuCauXuatKhoKhac.LoaiKho === 4) ? '15%' : '25%'\"\n        label=\"Ngày xuất\" [(model)]=\"yeuCauXuatKhoKhac.NgayXuat\" [required]=\"true\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n    </app-datetimepicker>\n\n    <div *ngIf=\"\n    (yeuCauXuatKhoKhac.LoaiKho === 1 || yeuCauXuatKhoKhac.LoaiKho === 2 || yeuCauXuatKhoKhac.LoaiKho === 6 || yeuCauXuatKhoKhac.LoaiKho === 4)\"\n        fxFlex=\"10%\" fxFlex.sm=\"20%\">\n        <div class=\"container-custom no-label\">\n            <label>&nbsp;</label>\n            <div fxLayout=\"row\">\n                <app-checkbox\n                    [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null || disabled\"\n                    (modelChange)=\"traNCCChange($event)\" id=\"traNCC\" [(model)]=\"yeuCauXuatKhoKhac.TraNCC\"\n                    label=\"Trả NCC\">\n                </app-checkbox>\n            </div>\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"yeuCauXuatKhoKhac.TraNCC == true\">\n        <app-combobox id=\"NhaThauId\" fxFlex=\"50%\" fxFlex.sm=\"50%\" [(model)]=\"yeuCauXuatKhoKhac.NhaThauId\"\n            [required]=\"true\" [modelText]=\"yeuCauXuatKhoKhac.TenNhaThau\" label=\"Nhà cung cấp\" [disabled]=\"disabled\"\n            (modelChange)=\"nhaThauChange()\" url=\"XuatKhoDuocPhamKhac/GetNhaCungCapTheoKhoDuocPhams\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoId:' +yeuCauXuatKhoKhac.KhoXuatId +', Id: '+yeuCauXuatKhoKhac.NhaThauId+'}', Take: 50}\"\n            [validationerror]=\"'NhaThauId' | validationerror:validationErrors\">\n        </app-combobox>\n\n        <app-combobox id=\"SoChungTu\" fxFlex=\"50%\" fxFlex.sm=\"50%\" [(model)]=\"yeuCauXuatKhoKhac.NhapKhoDuocPhamId\"\n            [required]=\"true\" [modelText]=\"yeuCauXuatKhoKhac.SoChungTu\" label=\"Số hóa đơn\" [disabled]=\"disabled\"\n            url=\"XuatKhoDuocPhamKhac/GetSoHoaDonTheoKhoDuocPhams\" (selectionChange)=\"soHoaDonChange($event)\"\n            [queryInfo]=\"{ParameterDependencies:'{Id:' +yeuCauXuatKhoKhac.NhaThauId +', NhaThauId: '+yeuCauXuatKhoKhac.NhaThauId +' , KhoId: '+yeuCauXuatKhoKhac.KhoXuatId  +'}', Take: 50}\"\n            [validationerror]=\"'NhapKhoDuocPhamId' | validationerror:validationErrors\">\n        </app-combobox>\n    </ng-container>\n\n    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"yeuCauXuatKhoKhac.LyDoXuatKho\"\n        label=\"Ghi chú\" maxlength=\"1000\" [required]=\"true\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n    </app-textbox>\n\n</div>\n\n<div style=\"height: 20px;\">\n\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN DƯỢC PHẨM\n    </h3>\n    <ng-container *ngIf=\"trangThaiVo != undefined && trangThaiVo!= null && trangThaiVo.TrangThai == null\">\n\n        <app-grid fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n            [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetTotal\" [useHeaderDefault]=\"false\"\n            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" height=\"500\"\n            [headerTemplate]=\"headerTemplate\" #gridDuocPhamXuat [groups]=\"groups\"></app-grid>\n\n        <app-grid fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridResultColumns\" [documentType]=\"documentType\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n            [pageable]=\"false\" height=\"500\" [headerTemplate]=\"headerTemplate2\" #gridResult [groups]=\"groups\"\n            [gridDataSource]=\"gridDataSourceThuocKhac\"></app-grid>\n    </ng-container>\n\n    <ng-container *ngIf=\"trangThaiVo != undefined && trangThaiVo!= null && trangThaiVo.TrangThai != null\">\n        <app-grid fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridResultDaDuyetColumns\"\n            [documentType]=\"documentType\" [sort]=\"sort\" [urlGetData]=\"urlGetDataDaDuyet\"\n            [urlGetTotalPage]=\"urlGetTotalDaDuyet\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" height=\"500\"\n            [additionalSearchString]=\"addtionStringDefault\" [headerTemplate]=\"headerTemplateDaDuyet\"\n            #gridDuocPhamXuatDaDuyet [groups]=\"groups\"></app-grid>\n    </ng-container>\n\n    <ng-template #headerTemplateDaDuyet>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"xuatKhoKhacGridDaDuyet.SearchString\"\n                    (keyup)=\"onKeyGrid3($event)\" (ngModelChange)=\"searchChanges3($event)\"\n                    placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"yeuCauXuatKhoDuocPhamChiTietVoSearch.SearchString\"\n                    (keyup)=\"onKeyGrid1($event)\" (ngModelChange)=\"searchChanges($event)\"\n                    placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #headerTemplate2>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString2\" [(ngModel)]=\"searchString2\" (keyup)=\"onKeyGrid2($event)\"\n                    (ngModelChange)=\"clearSearchGrid2($event)\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <!-- GRID DATA 1  CONTENT-->\n\n    <ng-template #soLuongXuatGrid1Template let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\"\n            [format]=\"format\" [decimals]=\"2\" [max]=\"dataItem.SoLuongTon\">\n        </app-textboxnumeric>\n    </ng-template>\n\n    <ng-template #transferTemplate let-dataItem>\n        <div style=\"text-align: right;\">\n            <button (click)=\"dieuChuyenTungDuocPhamGrid1(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\"\n                kendoTooltip title=\"Chọn: {{dataItem.Ten}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n                mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRight\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div style=\"width: 50%;\">\n            <strong>{{value}}</strong>\n        </div>\n        <div style=\"width: 50%; text-align: right;\">\n            <button (click)=\"dieuChuyenDuocPhamTheoNhomGrid(dataItem,1)\" color=\"primary\" kendoTooltip\n                title=\"Chọn chóm: {{value}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button\n                type=\"button\">\n                <mat-icon [icIcon]=\"icRightLast\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n\n    <!-- GRID DATA 2  CONTENT-->\n\n    <ng-template #soLuongXuatGrid2Template let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai == null\"\n            class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\"\n            [max]=\"dataItem.SoLuongTon\" maxlength=\"99999999\" [format]=\"format\" [decimals]=\"2\"\n            [validationerror]=\"'YeuCauXuatKhoDuocPhamChiTiets['+rowIndex+'].SoLuongXuat' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <div *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\">\n            {{dataItem.SoLuongXuat | number:'1.0':'vi-VN' }}\n        </div>\n\n    </ng-template>\n\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr>\n                <td>Số lượng tồn thực tế: {{sLTonThucTe | number:'1.0':'vi-VN'}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <ng-template #sLTonTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        {{dataItem.SoLuongTon | number:'1.2-2':'vi-VN' }}\n    </ng-template>\n\n    <ng-template #slTonThucTeTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <span> {{dataItem.SoLuongTon | number:'1.2-2':'vi-VN' }}</span>\n        <span\n            *ngIf=\"validationErrors != []&& validationErrors!=undefined && validationErrors!=null &&  validationErrors.length > 0\"\n            class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n            position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </ng-template>\n\n    <ng-template #tenNhom2GroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <button (click)=\"dieuChuyenDuocPhamTheoNhomGrid(dataItem,2)\" color=\"primary\" kendoTooltip\n            title=\"Bỏ chọn nhóm: {{value}}\" class=\"p-0 mr-2\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button\n            type=\"button\">\n            <mat-icon [icIcon]=\"icLeftLast\"></mat-icon>\n        </button>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n\n    <ng-template #transferTemplate2 let-dataItem>\n        <button (click)=\"dieuChuyenTungDuocPhamGrid2(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\"\n            kendoTooltip title=\"Bỏ chọn: {{dataItem.Ten}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n            mat-raised-button type=\"button\">\n            <mat-icon [icIcon]=\"icLeft\"></mat-icon>\n        </button>\n    </ng-template>\n\n    <ng-template #hsdTemplate let-dataItem>\n        {{dataItem.HanSuDungDisplay}}\n    </ng-template>\n\n    <ng-template #mayXetNghiemTemplate let-dataItem>\n        <app-combobox fxFlex=\"100%\" class=\"no-label p-0\" [popupSettings]=\"null\"\n            [(model)]=\"dataItem.XetNghiemIdDauTienMayXetNghiem\" [bind]=\"true\" [reloadForGrid]=\"true\"\n            [modelText]=\"dataItem.TenXetNghiemDauTienMayXetNghiem\"\n            [queryInfo]=\"{ParameterDependencies:'{DuocPhamBenhVienId:' + dataItem.DuocPhamBenhVienId + '}', Take: 50}\"\n            url=\"XuatKhoDuocPhamKhac/GetAllMayXetNghiemKhoKhac\">\n        </app-combobox>\n    </ng-template>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.html": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.html ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Xuất khác',Path:'/nhap-xuat/duoc-pham/xuat-kho-khac',queryParams: {holdQuery : true},Active:true}\n                ]\">\n</app-header-form>\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết yêu cầu xuất khác</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\" *ngIf=\"tinhTrang ==1\"\n                    style=\"color:green\">Đã duyệt xuất</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\" *ngIf=\"tinhTrang ==0\"\n                    style=\"color:orange\">Chờ duyệt</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-xuat-kho-khac-shared #temp [isCreate]=\"false\" [trangThaiVo]=\"trangThaiVo\"\n                    [validationErrors]=\"validationErrors\">\n                </app-xuat-kho-khac-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <!-- <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-arrow-left\"></i> In Phiếu</button> -->\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay lại</button>\n\n                    <button *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai== null\" type=\"button\"\n                        (click)=\"duyetXuat()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Duyệt Xuất</button>\n\n                    <button *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai== null\" type=\"button\" (click)=\"update()\"\n                        color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
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
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.scss": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.scss ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8ta2hhYy9waGlldS14dWF0LWtoby1kcC12dC1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx4dWF0LWtoby1raGFjXFxwaGlldS14dWF0LWtoby1kcC12dC1wb3B1cFxccGhpZXUteHVhdC1raG8tZHAtdnQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvLWtoYWMvcGhpZXUteHVhdC1raG8tZHAtdnQtcG9wdXAvcGhpZXUteHVhdC1raG8tZHAtdnQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8ta2hhYy9waGlldS14dWF0LWtoby1kcC12dC1wb3B1cC9waGlldS14dWF0LWtoby1kcC12dC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.ts": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.ts ***!
          \***********************************************************************************************************************************/
        /*! exports provided: PhieuXuatKhoDpVtPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuXuatKhoDpVtPopupComponent", function () { return PhieuXuatKhoDpVtPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var PhieuXuatKhoDpVtPopupComponent = /** @class */ (function () {
                function PhieuXuatKhoDpVtPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                PhieuXuatKhoDpVtPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.html);
                };
                PhieuXuatKhoDpVtPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                PhieuXuatKhoDpVtPopupComponent.prototype.getSharedPrintForm = function () {
                    var source = this.data.html;
                    return new Promise(function (resolve) {
                        resolve(source);
                        // this.close();
                    });
                };
                return PhieuXuatKhoDpVtPopupComponent;
            }());
            PhieuXuatKhoDpVtPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PhieuXuatKhoDpVtPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-xuat-kho-dp-vt-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-xuat-kho-dp-vt-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-xuat-kho-dp-vt-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuXuatKhoDpVtPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.scss": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.scss ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.warning-text {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8ta2hhYy94dWF0LWtoby1raGFjLWNyZWF0ZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx4dWF0LWtoby1raGFjXFx4dWF0LWtoby1raGFjLWNyZWF0ZVxceHVhdC1raG8ta2hhYy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvLWtoYWMveHVhdC1raG8ta2hhYy1jcmVhdGUveHVhdC1raG8ta2hhYy1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS94dWF0LWtoby1raGFjL3h1YXQta2hvLWtoYWMtY3JlYXRlL3h1YXQta2hvLWtoYWMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLndhcm5pbmctdGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59IiwiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLndhcm5pbmctdGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: XuatKhoKhacCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacCreateComponent", function () { return XuatKhoKhacCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
            /* harmony import */ var _xuat_kho_khac_shared_xuat_kho_khac_shared_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../xuat-kho-khac-shared/xuat-kho-khac-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.ts");
            /* harmony import */ var _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../xuat-kho-khac.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.model.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            var XuatKhoKhacCreateComponent = /** @class */ (function () {
                function XuatKhoKhacCreateComponent(apiService, dialog, notificationService, authService, router, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.ref = ref;
                    this.location = location;
                    this.validationErrors = [];
                    this.isCreate = false;
                    this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__["TrangThaiTaoPhieuLinh"]();
                }
                XuatKhoKhacCreateComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__["DocumentType"].XuatKhoDuocPhamKhac;
                    this.xuatKhoKhac = new _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_14__["XuatKhoKhac"]();
                    // this.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
                    this.trangThaiVo.TrangThai = null;
                };
                XuatKhoKhacCreateComponent.prototype.addingPage = function () {
                    this.popupAddingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                XuatKhoKhacCreateComponent.prototype.closePopupAddingData = function () {
                    if (this.popupAddingData != undefined && this.popupAddingData != null) {
                        this.popupAddingData.close();
                    }
                };
                XuatKhoKhacCreateComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                XuatKhoKhacCreateComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                XuatKhoKhacCreateComponent.prototype.cancel = function () {
                    // this.location.back();
                    this.router.navigateByUrl('nhap-xuat/duoc-pham/xuat-kho-khac?holdQuery=true');
                };
                XuatKhoKhacCreateComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                XuatKhoKhacCreateComponent.prototype.create = function () {
                    var _this = this;
                    var self = this;
                    self.xuatKhoKhac = self.shared.getSharedData();
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    this.apiService.post("XuatKhoDuocPhamKhac/KiemTraXuatHoaChatTheoMayXetNghiem", self.xuatKhoKhac).subscribe(function (resultData) {
                        var message = resultData !== undefined && resultData !== null && resultData.length > 0 ?
                            "D\u01B0\u1EE3c ph\u1EA9m ch\u01B0a ch\u1ECDn m\u00E1y x\u00E9t nghi\u1EC7m: <br/> <span class=\"warning-text\">" + resultData.join('<br/>').bold() + "</span>" :
                            "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n th\u00EAm d\u1EEF li\u1EC7u n\u00E0y kh\u00F4ng ?";
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: message
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Add)) {
                                    self.addingPage();
                                    _this.themXuatKhoKhac();
                                }
                                else {
                                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                                }
                            }
                            else {
                                self.closePopupAddingData();
                            }
                        });
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupAddingData();
                    });
                };
                XuatKhoKhacCreateComponent.prototype.themXuatKhoKhac = function () {
                    var _this = this;
                    var self = this;
                    self.apiService.post("XuatKhoDuocPhamKhac/ThemYeuCauXuatThuocKhac", self.xuatKhoKhac).subscribe(function (resultData) {
                        self.closePopupAddingData();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                        var url = '/xem-chi-tiet';
                        _this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho-khac" + url], { queryParams: { Id: resultData, F: 0 } });
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupAddingData();
                    });
                };
                return XuatKhoKhacCreateComponent;
            }());
            XuatKhoKhacCreateComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_xuat_kho_khac_shared_xuat_kho_khac_shared_component__WEBPACK_IMPORTED_MODULE_13__["XuatKhoKhacSharedComponent"], { static: true })
            ], XuatKhoKhacCreateComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], XuatKhoKhacCreateComponent.prototype, "keyEvent", null);
            XuatKhoKhacCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xuat-kho-khac-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-khac-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-khac-create.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.scss")).default]
                })
            ], XuatKhoKhacCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvLWtoYWMveHVhdC1raG8ta2hhYy1pbi1waGlldS1wb3B1cC94dWF0LWtoby1raGFjLWluLXBoaWV1LXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: XuatKhoKhacInPhieuPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacInPhieuPopupComponent", function () { return XuatKhoKhacInPhieuPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var XuatKhoKhacInPhieuPopupComponent = /** @class */ (function () {
                function XuatKhoKhacInPhieuPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                XuatKhoKhacInPhieuPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                XuatKhoKhacInPhieuPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                XuatKhoKhacInPhieuPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
                    return new Promise(function (resolve) {
                        resolve(source);
                        _this.close();
                    });
                };
                return XuatKhoKhacInPhieuPopupComponent;
            }());
            XuatKhoKhacInPhieuPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            XuatKhoKhacInPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xuat-kho-khac-in-phieu-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-khac-in-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-khac-in-phieu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], XuatKhoKhacInPhieuPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.scss": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.scss ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvLWtoYWMveHVhdC1raG8ta2hhYy1saXN0L3h1YXQta2hvLWtoYWMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: XuatKhoKhacListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacListComponent", function () { return XuatKhoKhacListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../xuat-kho-khac.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var _phieu_xuat_kho_dp_vt_popup_phieu_xuat_kho_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.ts");
            var XuatKhoKhacListComponent = /** @class */ (function () {
                function XuatKhoKhacListComponent(apiService, authService, dialog, location, route, router, notificationService) {
                    this.apiService = apiService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.location = location;
                    this.route = route;
                    this.router = router;
                    this.notificationService = notificationService;
                    this.phieuXuatKhoKhacVo = new _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_22__["PhieuXuatKhoKhacVo"]();
                    this.baseRoute = "/nhap-xuat/duoc-pham/xuat-kho-khac";
                    this.sort = [{
                            field: 'NgayXuat',
                            dir: 'desc'
                        }];
                    // sortChild: SortDescriptor[] = [{
                    //   field: 'DuocPham',
                    //   dir: 'desc'
                    // }];
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"];
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.urlGetDataDuocPham = "XuatKhoDuocPhamKhac/GetDataForGridAsync";
                    this.urlGetTotalPageDuocPham = "XuatKhoDuocPhamKhac/GetTotalPageForGridAsync";
                    this.urlGetDataGridChild = "XuatKhoDuocPhamKhac/GetDataForGridChildAsync";
                    this.urlGetTotalPageGridChild = "XuatKhoDuocPhamKhac/GetTotalPageForGridChildAsync";
                    this.holdQuery = null;
                    this.additionalSearchString = null;
                    //update xuat kho 14/9/2020
                    this.xuatKhoSearch = new _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_22__["XuatKhoKhacGrid"]();
                    this.groups = [{ field: 'TenNhom' }];
                }
                XuatKhoKhacListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_16__["DocumentType"].XuatKhoDuocPhamKhac;
                    // var now = new Date();
                    // this.xuatKhoSearch.RangeFromDate.startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
                    // this.xuatKhoSearch.RangeFromDate.endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
                    this.backWithSearch();
                    this.gridColumns = [
                        { Field: "SoPhieu", Title: "Số phiếu", Width: 90, Sortable: true, Template: this.soChungTuTemplate },
                        { Field: "KhoDuocPhamXuat", Title: "Nơi xuất", Width: 200, Sortable: true, Template: this.khoXuatTemplate },
                        { Field: "TenNguoiXuat", Title: "Người xuất", Width: 150, Sortable: true },
                        { Field: "NgayXuat", Title: "Ngày xuất", Width: 150, Sortable: true, Template: this.ngayXuatTemplate },
                        { Field: "TenNguoiNhan", Title: "Người nhận", Width: 150, Sortable: true },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate },
                        { Field: "LyDoXuatKho", Title: "Lý do xuất", Width: 165, Sortable: true },
                        { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
                    ];
                    this.gridChildColumns = [
                        { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
                        { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
                        { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: false, Template: this.hsdListTemplate },
                        { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
                        { Field: "SoLuongXuat", Title: "SL Xuất", Width: 100, Sortable: false },
                        { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
                    ];
                };
                XuatKhoKhacListComponent.prototype.backWithSearch = function () {
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].getItem("additionalSearchStringXuatKhoKhacDp");
                            if (additionalSearchString != null) {
                                this.xuatKhoSearch = JSON.parse(additionalSearchString);
                                if (this.xuatKhoSearch.RangeFromDate.TuNgay != null
                                    && this.xuatKhoSearch.RangeFromDate.TuNgay != 'null' && this.xuatKhoSearch.RangeFromDate.TuNgay != '') {
                                    this.xuatKhoSearch.RangeFromDate.startDate = new Date(this.xuatKhoSearch.RangeFromDate.startDate);
                                }
                                else {
                                    this.xuatKhoSearch.RangeFromDate.startDate = null;
                                }
                                if (this.xuatKhoSearch.RangeFromDate.DenNgay != null
                                    && this.xuatKhoSearch.RangeFromDate.DenNgay != 'null' && this.xuatKhoSearch.RangeFromDate.DenNgay != '') {
                                    this.xuatKhoSearch.RangeFromDate.endDate = new Date(this.xuatKhoSearch.RangeFromDate.endDate);
                                }
                                else {
                                    this.xuatKhoSearch.RangeFromDate.endDate = null;
                                }
                                // this.addtionStringDefault = additionalSearchString;
                                this.gridChild.additionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].removeItem("additionalSearchStringXuatKhoKhacDp");
                    }
                };
                XuatKhoKhacListComponent.prototype.xemChiTiet = function (id, tinhTrang) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
                        var url = '/xem-chi-tiet';
                        this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, F: tinhTrang } });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoKhacListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        this.apiService.postExportExcel("XuatKhoDuocPhamKhac/ExportData", this.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_19__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "XuatKhoDuocPhamKhac" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoKhacListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiem();
                    }
                };
                XuatKhoKhacListComponent.prototype.trangThaiCheckBox = function (event, tinhTrang) {
                    if (tinhTrang == "choduyet") {
                        this.xuatKhoSearch.ChoDuyet = event;
                    }
                    if (tinhTrang == "daduyet") {
                        this.xuatKhoSearch.DaDuyet = event;
                    }
                    this.timKiem();
                };
                XuatKhoKhacListComponent.prototype.changeNgayBatDauRange = function () {
                    this.timKiem();
                };
                XuatKhoKhacListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.gridChild.searchString = null;
                        self.timKiem();
                    }
                };
                XuatKhoKhacListComponent.prototype.timKiem = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.xuatKhoSearch.RangeFromDate != null && this.xuatKhoSearch.RangeFromDate.startDate != null) {
                        this.xuatKhoSearch.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_19__["CommonService"].formatDateTime(this.xuatKhoSearch.RangeFromDate.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.xuatKhoSearch.RangeFromDate.TuNgay = null;
                    }
                    if (this.xuatKhoSearch.RangeFromDate != null && this.xuatKhoSearch.RangeFromDate.endDate != null) {
                        this.xuatKhoSearch.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_19__["CommonService"].formatDateTime(this.xuatKhoSearch.RangeFromDate.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.xuatKhoSearch.RangeFromDate.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.xuatKhoSearch);
                    this.gridChild._additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].setItem("additionalSearchStringXuatKhoKhacDp", queryString);
                    this.gridChild.search();
                };
                XuatKhoKhacListComponent.prototype.themMoiXuatKho = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Add)) {
                        this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho-khac/them"]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoKhacListComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                XuatKhoKhacListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                XuatKhoKhacListComponent.prototype.inPhieu = function (data) {
                    var _this = this;
                    this.loadingPage();
                    this.phieuXuatKhoKhacVo.Id = data.Id;
                    this.phieuXuatKhoKhacVo.HostingName = window.location.protocol + "//" + window.location.host;
                    this.phieuXuatKhoKhacVo.CoNCC = data.CoNCC;
                    this.phieuXuatKhoKhacVo.DuocDuyet = data.DuocDuyet;
                    this.phieuXuatKhoKhacVo.LaDuocPham = true;
                    this.apiService.post("XuatKhoDuocPhamKhac/InPhieuXuatKhoKhac", this.phieuXuatKhoKhacVo).subscribe(function (resData) {
                        if (resData != undefined && resData != null) {
                            _this.closePopupLoadingData();
                            _this.dialog.open(_phieu_xuat_kho_dp_vt_popup_phieu_xuat_kho_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_25__["PhieuXuatKhoDpVtPopupComponent"], {
                                disableClose: true,
                                width: "1200px",
                                data: { html: resData, title: "PHIẾU XUẤT SỬ DỤNG THUỐC, HÓA CHẤT, VẬT TƯ" },
                            }).afterClosed().subscribe(function () {
                            });
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                XuatKhoKhacListComponent.prototype.blur = function () {
                    this.timKiem();
                };
                XuatKhoKhacListComponent.prototype.xoa = function (id) {
                    var _this = this;
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Delete)) {
                                _this.apiService.post("XuatKhoDuocPhamKhac/XoaYeuCauXuatThuoc?id=" + id).subscribe(function () {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_19__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                    _this.timKiem();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                return XuatKhoKhacListComponent;
            }());
            XuatKhoKhacListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], XuatKhoKhacListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: true })
            ], XuatKhoKhacListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildOfParent', { static: true })
            ], XuatKhoKhacListComponent.prototype, "gridChildOfParent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], XuatKhoKhacListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdListTemplate', { static: true })
            ], XuatKhoKhacListComponent.prototype, "hsdListTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
            ], XuatKhoKhacListComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soChungTuTemplate', { static: true })
            ], XuatKhoKhacListComponent.prototype, "soChungTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], XuatKhoKhacListComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayXuatTemplate", { static: true })
            ], XuatKhoKhacListComponent.prototype, "ngayXuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoXuatTemplate', { static: true })
            ], XuatKhoKhacListComponent.prototype, "khoXuatTemplate", void 0);
            XuatKhoKhacListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xuat-kho-khac-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-khac-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-khac-list.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.scss")).default]
                })
            ], XuatKhoKhacListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-routing.module.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-routing.module.ts ***!
          \************************************************************************************************/
        /*! exports provided: XuatKhoKhacRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacRoutingModule", function () { return XuatKhoKhacRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _xuat_kho_khac_list_xuat_kho_khac_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xuat-kho-khac-list/xuat-kho-khac-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.ts");
            /* harmony import */ var _xuat_kho_khac_create_xuat_kho_khac_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xuat-kho-khac-create/xuat-kho-khac-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.ts");
            /* harmony import */ var _xuat_kho_khac_update_xuat_kho_khac_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xuat-kho-khac-update/xuat-kho-khac-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.ts");
            var routes = [
                {
                    path: '',
                    component: _xuat_kho_khac_list_xuat_kho_khac_list_component__WEBPACK_IMPORTED_MODULE_6__["XuatKhoKhacListComponent"],
                    data: {
                        title: 'Xuất Kho Dược Phẩm Khác',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].XuatKhoDuocPhamKhac,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _xuat_kho_khac_create_xuat_kho_khac_create_component__WEBPACK_IMPORTED_MODULE_7__["XuatKhoKhacCreateComponent"],
                    data: {
                        title: 'Thêm Xuất Kho Dược Phẩm Khác',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].XuatKhoDuocPhamKhac,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'xem-chi-tiet',
                    component: _xuat_kho_khac_update_xuat_kho_khac_update_component__WEBPACK_IMPORTED_MODULE_8__["XuatKhoKhacUpdateComponent"],
                    data: {
                        title: 'Xem Xuất Kho Dược Phẩm Khác',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].XuatKhoDuocPhamKhac,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var XuatKhoKhacRoutingModule = /** @class */ (function () {
                function XuatKhoKhacRoutingModule() {
                }
                return XuatKhoKhacRoutingModule;
            }());
            XuatKhoKhacRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], XuatKhoKhacRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.scss": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.scss ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvLWtoYWMveHVhdC1raG8ta2hhYy1zaGFyZWQveHVhdC1raG8ta2hhYy1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: XuatKhoKhacSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacSharedComponent", function () { return XuatKhoKhacSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/chevron-right */ "./node_modules/@iconify/icons-ic/chevron-right.js");
            /* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/last-page */ "./node_modules/@iconify/icons-ic/last-page.js");
            /* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/chevron-left */ "./node_modules/@iconify/icons-ic/chevron-left.js");
            /* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/first-page */ "./node_modules/@iconify/icons-ic/first-page.js");
            /* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../xuat-kho-khac.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.model.ts");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
            /* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/enum/loai-kho.enum */ "./src/app/shared/enum/loai-kho.enum.ts");
            var XuatKhoKhacSharedComponent = /** @class */ (function () {
                function XuatKhoKhacSharedComponent(route, dialog, authService, apiService, notificationService) {
                    this.route = route;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.yeuCauXuatKhoKhac = new _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_18__["XuatKhoKhac"]();
                    this.yeuCauXuatKhoDuocPhamChiTietVoSearch = new _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_18__["YeuCauXuatKhoDuocPhamChiTietVoSearch"]();
                    this.lstXuatKhoSearch = new Array();
                    this.lstXuatKho = new Array();
                    this.xuatKhoKhacGridDaDuyet = new _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_18__["XuatKhoKhacGridDaDuyet"]();
                    this.disabled = false;
                    this.popupLoadingData = null;
                    this.yeuCauXuatKhacDuocPhamId = 0;
                    this.icRight = _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icLeft = _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icRightLast = _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icLeftLast = _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.lstXuatKhoTheoNhom = [];
                    this.addtionStringDefault = null;
                    this.searchString = null;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.gridColumns = [];
                    this.gridResultColumns = [];
                    this.gridResultDaDuyetColumns = [];
                    this.additionalSearchString = null;
                    this.gridDataSourceThuocKhac = {
                        data: [],
                        total: 0
                    };
                    this.sort = [{
                            field: 'Ten',
                            dir: 'desc'
                        }];
                    this.format = "n2";
                    this.sLTonThucTe = 0;
                    this.urlGetData = "XuatKhoDuocPhamKhac/GetDataForGridAsyncDuocPhamDaChon";
                    this.urlGetTotal = "XuatKhoDuocPhamKhac/GetTotalPageForGridAsyncDuocPhamDaChon";
                    this.urlGetDataDaDuyet = "XuatKhoDuocPhamKhac/GetDataForGridChildAsyncDaDuyet";
                    this.urlGetTotalDaDuyet = "XuatKhoDuocPhamKhac/GetTotalPageForGridChildAsyncDaDuyet";
                    this.groups = [{ field: 'TenNhom' }];
                    this.validationErrors = [];
                    this.id = 0;
                    this.tinhTrang = 0;
                }
                XuatKhoKhacSharedComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].XuatKhoDuocPhamKhac;
                    this.route.queryParams.subscribe(function (param) {
                        _this.id = param['Id'];
                        _this.tinhTrang = param['F'];
                        if (!_this.isCreate) {
                            if (_this.tinhTrang == 1) {
                                _this.xuatKhoKhacGridDaDuyet.XuatKhoDuocPhamId = _this.id;
                                var queryString = JSON.stringify(_this.xuatKhoKhacGridDaDuyet);
                                _this.addtionStringDefault = queryString;
                                _this.getById(_this.id, true);
                            }
                            else {
                                _this.getById(_this.id, false);
                            }
                        }
                    });
                    this.getCurrentUser();
                    this.gridColumns = [
                        { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
                        { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
                        { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
                        { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
                        // { Field: "Loai", Title: "Loại", Width: 70, Sortable: false },
                        { Field: "SoLuongTon", Title: "SL tồn", Width: 70, Sortable: false, Template: this.sLTonTemplate },
                        {
                            Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: true,
                            Template: this.soLuongXuatGrid1Template
                        },
                        { Field: "Id", Title: "", Width: 30, Sortable: true, Template: this.transferTemplate },
                    ];
                    this.gridResultColumns = [
                        { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
                        { Field: "Id", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
                        { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
                        { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
                        { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
                        { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
                        // { Field: "Loai", Title: "Loại", Width: 70, Sortable: false },
                        { Field: "SoLuongTon", Title: "SL tồn", Width: 70, Sortable: false, Template: this.slTonThucTeTemplate },
                        {
                            Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: false,
                            Template: this.soLuongXuatGrid2Template
                        },
                        { Field: "", Title: "Máy XN", Width: 150, Sortable: false, Template: this.mayXetNghiemTemplate },
                    ];
                    this.gridResultDaDuyetColumns = [
                        { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
                        { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
                        { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
                        { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
                        { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
                        { Field: "SoLuongXuat", Title: "SL Xuất", Width: 150, Sortable: false },
                        { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
                    ];
                };
                XuatKhoKhacSharedComponent.prototype.getCurrentUser = function () {
                    var _this = this;
                    if (this.isCreate) {
                        this.yeuCauXuatKhoKhac.NgayXuat = new Date();
                        this.apiService.get("YeuCauLinhDuocPham/GetCurrentUser").subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.yeuCauXuatKhoKhac.NguoiXuatId = resultData.NhanVienYeuCauId;
                                _this.yeuCauXuatKhoKhac.TenNguoiXuat = resultData.HoTen;
                            }
                        });
                    }
                };
                XuatKhoKhacSharedComponent.prototype.khoNhapChangeChange = function () {
                    this.validationErrors = [];
                };
                XuatKhoKhacSharedComponent.prototype.onKeyGrid1 = function (event) {
                    if (event.key == "Enter") {
                        this.TimkiemNangCao();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.onKeyGrid2 = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemGrid2();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.TimkiemNangCao = function () {
                    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId = this.yeuCauXuatKhoKhac.KhoXuatId;
                    if (this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId == undefined || this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId == null) {
                        this.timKiemGrid2();
                    }
                    var queryString = JSON.stringify(this.yeuCauXuatKhoDuocPhamChiTietVoSearch);
                    if (this.gridDuocPhamXuat != undefined && this.gridDuocPhamXuat != null) {
                        this.gridDuocPhamXuat._additionalSearchString = queryString;
                        this.gridDuocPhamXuat.search();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.clearSearchGrid2 = function (event) {
                    if (event != undefined && (event == null || event == "")) {
                        if (this.searchString2 == "" || this.searchString2 == null) {
                            this.lstXuatKhoSearch = JSON.parse(JSON.stringify(this.lstXuatKho));
                            this.setDataXuatKho();
                        }
                    }
                };
                XuatKhoKhacSharedComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.TimkiemNangCao();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.dieuChuyenTungDuocPhamGrid1 = function (dataItem) {
                    this.validationErrors = [];
                    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.push(dataItem);
                    this.lstXuatKhoSearch.push(dataItem);
                    this.lstXuatKho.push(dataItem);
                    this.timKiemGrid2();
                };
                XuatKhoKhacSharedComponent.prototype.dieuChuyenTungDuocPhamGrid2 = function (dataItem) {
                    this.validationErrors = [];
                    this.lstXuatKho = this.lstXuatKho.filter(function (o) { return o != dataItem; });
                    this.lstXuatKhoSearch = this.lstXuatKhoSearch.filter(function (o) { return o != dataItem; });
                    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.splice(this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.findIndex(function (x) { return x == dataItem; }), 1);
                    this.timKiemGrid2();
                };
                XuatKhoKhacSharedComponent.prototype.timKiemGrid2 = function () {
                    if (this.searchString2 == undefined || this.searchString2 == null) {
                        this.setDataXuatKho();
                    }
                    else {
                        var search_1 = this.searchString2.toLowerCase().trim();
                        this.lstXuatKhoSearch = this.lstXuatKho.filter(function (o) { return o.Ten.toLowerCase().trim().indexOf(search_1) != -1
                            || o.Ma.toLowerCase().trim().indexOf(search_1) != -1; });
                        this.setDataXuatKho();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.setDataXuatKho = function () {
                    this.TimkiemNangCao();
                    this.gridDataSourceThuocKhac = [];
                    var dataGrid = this.lstXuatKhoSearch;
                    this.gridDataSourceThuocKhac = {
                        data: dataGrid,
                        total: dataGrid.length,
                    };
                    if (this.gridDataSourceThuocKhac.data.length > 0) {
                        this.disabled = true;
                    }
                    else {
                        this.disabled = false;
                    }
                    this.refreshGrid();
                };
                XuatKhoKhacSharedComponent.prototype.refreshGrid = function () {
                    if (this.gridResult != undefined) {
                        this.gridResult.setDataSource();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.addingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                XuatKhoKhacSharedComponent.prototype.closepopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.dieuChuyenDuocPhamTheoNhomGrid = function (dataItem, gridNumber) {
                    var _this = this;
                    var model = {
                        YeuCauXuatKhoDuocPhamChiTiets: dataItem.items
                    };
                    this.addingPage();
                    this.apiService.post("XuatKhoDuocPhamKhac/XuatDuocPhamTheoNhom", model).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            resultData.YeuCauXuatKhoDuocPhamChiTiets.forEach(function (element) {
                                if (gridNumber == 1) {
                                    _this.lstXuatKhoSearch.push(element);
                                    _this.lstXuatKho.push(element);
                                    _this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.push(element);
                                }
                                else {
                                    _this.lstXuatKho.splice(_this.lstXuatKho.findIndex(function (x) { return x.DuocPhamBenhVienId == element.DuocPhamBenhVienId
                                        && x.Ten == element.Ten
                                        && x.Ma == element.Ma
                                        && x.SoDangKy == element.SoDangKy
                                        && x.DVT == element.DVT
                                        && x.LaDuocPhamBHYT == element.LaDuocPhamBHYT
                                        && x.HanSuDung == element.HanSuDung; }), 1);
                                    _this.lstXuatKhoSearch.splice(_this.lstXuatKhoSearch.findIndex(function (x) { return x.DuocPhamBenhVienId == element.DuocPhamBenhVienId
                                        && x.Ten == element.Ten
                                        && x.Ma == element.Ma
                                        && x.SoDangKy == element.SoDangKy
                                        && x.DVT == element.DVT
                                        && x.LaDuocPhamBHYT == element.LaDuocPhamBHYT
                                        && x.HanSuDung == element.HanSuDung; }), 1);
                                    _this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.splice(_this.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.findIndex(function (x) { return x.DuocPhamBenhVienId == element.DuocPhamBenhVienId
                                        && x.Ten == element.Ten
                                        && x.Ma == element.Ma
                                        && x.SoDangKy == element.SoDangKy
                                        && x.DVT == element.DVT
                                        && x.LaDuocPhamBHYT == element.LaDuocPhamBHYT
                                        && x.HanSuDung == element.HanSuDung; }), 1);
                                }
                            });
                            _this.closepopupLoadingData();
                            _this.timKiemGrid2();
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closepopupLoadingData();
                    });
                };
                XuatKhoKhacSharedComponent.prototype.getById = function (id, trangThai) {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View)) {
                        self.addingPage();
                        if (trangThai) {
                            self.apiService.get("XuatKhoDuocPhamKhac/GetXuatKhoDuocPhamKhac?id=" + id).subscribe(function (resultData) {
                                if (resultData != undefined && resultData != null) {
                                    self.disabled = true;
                                    self.closepopupLoadingData();
                                    self.yeuCauXuatKhoKhac = resultData;
                                }
                            }, function (err) {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                                self.closepopupLoadingData();
                            });
                        }
                        else {
                            self.apiService.get("XuatKhoDuocPhamKhac/GetYeuCauXuatKhoDuocPhamKhac?id=" + id).subscribe(function (resultData) {
                                if (resultData != undefined && resultData != null) {
                                    self.disabled = true;
                                    self.closepopupLoadingData();
                                    self.yeuCauXuatKhoKhac = resultData;
                                    resultData.YeuCauXuatKhoDuocPhamChiTietHienThis.forEach(function (element) {
                                        self.lstXuatKhoSearch.push(element);
                                        self.lstXuatKho.push(element);
                                        self.yeuCauXuatKhoDuocPhamChiTietVoSearch.DuocPhamBenhViens.push(element);
                                    });
                                    if (self.yeuCauXuatKhoKhac.TraNCC == true) {
                                        self.yeuCauXuatKhoDuocPhamChiTietVoSearch.TraNCC = self.yeuCauXuatKhoKhac.TraNCC;
                                        self.yeuCauXuatKhoDuocPhamChiTietVoSearch.NhaThauId = self.yeuCauXuatKhoKhac.NhaThauId;
                                        self.yeuCauXuatKhoDuocPhamChiTietVoSearch.SoChungTu = self.yeuCauXuatKhoKhac.SoChungTu;
                                    }
                                    self.timKiemGrid2();
                                }
                            }, function (err) {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                                self.closepopupLoadingData();
                            });
                        }
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoKhacSharedComponent.prototype.onKeyGrid3 = function (event) {
                    if (event.key == "Enter") {
                        this.timKiem3();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.searchChanges3 = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.timKiem3();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.timKiem3 = function () {
                    this.xuatKhoKhacGridDaDuyet.XuatKhoDuocPhamId = this.id;
                    var queryString = JSON.stringify(this.xuatKhoKhacGridDaDuyet);
                    if (this.gridDuocPhamXuatDaDuyet != undefined && this.gridDuocPhamXuatDaDuyet != null) {
                        this.gridDuocPhamXuatDaDuyet._additionalSearchString = queryString;
                        this.gridDuocPhamXuatDaDuyet.search();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.clearValidator = function () {
                    this.validationErrors = [];
                };
                XuatKhoKhacSharedComponent.prototype.TooltipCustom = function (dataItem) {
                    var _this = this;
                    this.apiService.post("XuatKhoDuocPhamKhac/GetSoLuongTonThucTe", dataItem).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.sLTonThucTe = resultData;
                        }
                    });
                };
                XuatKhoKhacSharedComponent.prototype.khoXuatModelChange = function (dataItem) {
                    var _this = this;
                    if (dataItem != undefined && dataItem != null) {
                        this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId = dataItem;
                        this.apiService.get("XuatKhoDuocPhamKhac/GetLoaiKho?khoId=" + dataItem).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                if (_this.yeuCauXuatKhoKhac.LoaiKho != src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__["EnumLoaiKho"].KhoTongDuocPhamCap1
                                    && _this.yeuCauXuatKhoKhac.LoaiKho != src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__["EnumLoaiKho"].KhoTongDuocPhamCap2
                                    && _this.yeuCauXuatKhoKhac.LoaiKho != src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__["EnumLoaiKho"].KhoTongVTYTCap2
                                    && _this.yeuCauXuatKhoKhac.LoaiKho != src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__["EnumLoaiKho"].NhaThuoc) {
                                    _this.yeuCauXuatKhoKhac.LoaiKho = resultData;
                                }
                            }
                        });
                    }
                    else {
                        this.yeuCauXuatKhoKhac.LoaiKho = null;
                        this.yeuCauXuatKhoDuocPhamChiTietVoSearch.KhoXuatId = null;
                    }
                    var queryString = JSON.stringify(this.yeuCauXuatKhoDuocPhamChiTietVoSearch);
                    if (this.gridDuocPhamXuat != undefined && this.gridDuocPhamXuat != null) {
                        this.gridDuocPhamXuat._additionalSearchString = queryString;
                        this.gridDuocPhamXuat.search();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.nhaThauChange = function () {
                    this.yeuCauXuatKhoKhac.NhapKhoDuocPhamId = null;
                };
                XuatKhoKhacSharedComponent.prototype.soHoaDonChange = function (data) {
                    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.TraNCC = this.yeuCauXuatKhoKhac.TraNCC;
                    this.yeuCauXuatKhoDuocPhamChiTietVoSearch.NhaThauId = this.yeuCauXuatKhoKhac.NhaThauId;
                    if (data != undefined && data != null) {
                        this.yeuCauXuatKhoDuocPhamChiTietVoSearch.SoChungTu = data.DisplayName;
                        this.yeuCauXuatKhoKhac.SoChungTu = data.DisplayName;
                    }
                    else {
                        this.yeuCauXuatKhoDuocPhamChiTietVoSearch.SoChungTu = null;
                        this.yeuCauXuatKhoKhac.SoChungTu = null;
                    }
                    var queryString = JSON.stringify(this.yeuCauXuatKhoDuocPhamChiTietVoSearch);
                    if (this.gridDuocPhamXuat != undefined && this.gridDuocPhamXuat != null) {
                        this.gridDuocPhamXuat._additionalSearchString = queryString;
                        this.gridDuocPhamXuat.search();
                    }
                };
                XuatKhoKhacSharedComponent.prototype.traNCCChange = function (event) {
                    if (event != true) {
                        this.yeuCauXuatKhoKhac.NhaThauId = null;
                        this.yeuCauXuatKhoDuocPhamChiTietVoSearch.NhaThauId = this.yeuCauXuatKhoKhac.NhaThauId;
                        this.yeuCauXuatKhoDuocPhamChiTietVoSearch.SoChungTu = null;
                        var queryString = JSON.stringify(this.yeuCauXuatKhoDuocPhamChiTietVoSearch);
                        if (this.gridDuocPhamXuat != undefined && this.gridDuocPhamXuat != null) {
                            this.gridDuocPhamXuat._additionalSearchString = queryString;
                            this.gridDuocPhamXuat.search();
                        }
                    }
                };
                XuatKhoKhacSharedComponent.prototype.getSharedData = function () {
                    var _this = this;
                    this.yeuCauXuatKhoKhac.YeuCauXuatKhoDuocPhamChiTiets = new Array();
                    this.lstXuatKho.forEach(function (element) {
                        var yeuCauXuatKhoKhacChiTiet = new _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_18__["YeuCauXuatKhoDuocPhamChiTiet"]();
                        yeuCauXuatKhoKhacChiTiet.Id = element.Id;
                        yeuCauXuatKhoKhacChiTiet.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
                        yeuCauXuatKhoKhacChiTiet.LaDuocPhamBHYT = element.LaDuocPhamBHYT;
                        yeuCauXuatKhoKhacChiTiet.SoLuongXuat = element.SoLuongXuat;
                        yeuCauXuatKhoKhacChiTiet.KhoXuatId = _this.yeuCauXuatKhoKhac.KhoXuatId;
                        yeuCauXuatKhoKhacChiTiet.SoLo = element.SoLo;
                        yeuCauXuatKhoKhacChiTiet.Ma = element.Ma;
                        yeuCauXuatKhoKhacChiTiet.HanSuDung = element.HanSuDung;
                        yeuCauXuatKhoKhacChiTiet.MayXetNghiemId = element.XetNghiemIdDauTienMayXetNghiem;
                        _this.yeuCauXuatKhoKhac.YeuCauXuatKhoDuocPhamChiTiets.push(yeuCauXuatKhoKhacChiTiet);
                    });
                    return this.yeuCauXuatKhoKhac;
                };
                return XuatKhoKhacSharedComponent;
            }());
            XuatKhoKhacSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamXuat', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
            ], XuatKhoKhacSharedComponent.prototype, "gridDuocPhamXuat", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridResult', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
            ], XuatKhoKhacSharedComponent.prototype, "gridResult", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamXuatDaDuyet', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
            ], XuatKhoKhacSharedComponent.prototype, "gridDuocPhamXuatDaDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhom2GroupHeaderTemplate', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "tenNhom2GroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "transferTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate2', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "transferTemplate2", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatGrid1Template', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "soLuongXuatGrid1Template", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatGrid2Template', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "soLuongXuatGrid2Template", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatDaDuyetTemplate', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "soLuongXuatDaDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sLTonTemplate', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "sLTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "hsdTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slTonThucTeTemplate', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "slTonThucTeTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mayXetNghiemTemplate', { static: true })
            ], XuatKhoKhacSharedComponent.prototype, "mayXetNghiemTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], XuatKhoKhacSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], XuatKhoKhacSharedComponent.prototype, "validationErrors", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], XuatKhoKhacSharedComponent.prototype, "trangThaiVo", void 0);
            XuatKhoKhacSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xuat-kho-khac-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-khac-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-khac-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.scss")).default]
                })
            ], XuatKhoKhacSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.scss": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.scss ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.warning-text {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8ta2hhYy94dWF0LWtoby1raGFjLXVwZGF0ZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx4dWF0LWtoby1raGFjXFx4dWF0LWtoby1raGFjLXVwZGF0ZVxceHVhdC1raG8ta2hhYy11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvLWtoYWMveHVhdC1raG8ta2hhYy11cGRhdGUveHVhdC1raG8ta2hhYy11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS94dWF0LWtoby1raGFjL3h1YXQta2hvLWtoYWMtdXBkYXRlL3h1YXQta2hvLWtoYWMtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLndhcm5pbmctdGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59IiwiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLndhcm5pbmctdGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: XuatKhoKhacUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacUpdateComponent", function () { return XuatKhoKhacUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _xuat_kho_khac_shared_xuat_kho_khac_shared_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../xuat-kho-khac-shared/xuat-kho-khac-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.ts");
            /* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../xuat-kho-khac.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            var XuatKhoKhacUpdateComponent = /** @class */ (function () {
                function XuatKhoKhacUpdateComponent(apiService, dialog, notificationService, authService, route, router, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.route = route;
                    this.router = router;
                    this.ref = ref;
                    this.location = location;
                    this.xuatKhoKhac = new _xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_17__["XuatKhoKhac"]();
                    this.validationErrors = [];
                    this.popupSavingData = null;
                    this.popupLoadingData = null;
                    this.isCreate = false;
                    this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_9__["TrangThaiTaoPhieuLinh"]();
                    this.id = 0;
                    this.tinhTrang = 0;
                }
                XuatKhoKhacUpdateComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].XuatKhoDuocPhamKhac;
                    this.route.queryParams.subscribe(function (param) {
                        _this.id = param['Id'];
                        _this.tinhTrang = parseInt(param['F']);
                        if (_this.tinhTrang == 1) {
                            _this.trangThaiVo.Ten = 'Đã duyệt xuất';
                            _this.trangThaiVo.TrangThai = true;
                        }
                        else {
                            _this.trangThaiVo.Ten = 'Chờ duyệt';
                            _this.trangThaiVo.TrangThai = null;
                        }
                    });
                };
                XuatKhoKhacUpdateComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                XuatKhoKhacUpdateComponent.prototype.closepopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                XuatKhoKhacUpdateComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                XuatKhoKhacUpdateComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                XuatKhoKhacUpdateComponent.prototype.update = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.xuatKhoKhac = self.shared.getSharedData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        self.savingPage();
                        self.KiemTraXuatHoaChatTheoMayXetNghiem(true);
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoKhacUpdateComponent.prototype.duyetXuat = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.xuatKhoKhac = self.shared.getSharedData();
                    self.xuatKhoKhac.LaLuuDuyet = true;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        self.savingPage();
                        self.KiemTraXuatHoaChatTheoMayXetNghiem(false);
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoKhacUpdateComponent.prototype.cancel = function () {
                    // this.location.back();
                    this.router.navigateByUrl('nhap-xuat/duoc-pham/xuat-kho-khac?holdQuery=true');
                };
                XuatKhoKhacUpdateComponent.prototype.KiemTraXuatHoaChatTheoMayXetNghiem = function (isUpdate) {
                    var self = this;
                    this.apiService.post("XuatKhoDuocPhamKhac/KiemTraXuatHoaChatTheoMayXetNghiem", self.xuatKhoKhac).subscribe(function (resultData) {
                        var message = resultData !== undefined && resultData !== null && resultData.length > 0 ?
                            "D\u01B0\u1EE3c ph\u1EA9m ch\u01B0a ch\u1ECDn m\u00E1y x\u00E9t nghi\u1EC7m: <br/> <span class=\"warning-text\">" + resultData.join('<br/>').bold() + "</span>" :
                            isUpdate ? "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n l\u01B0u d\u1EEF li\u1EC7u n\u00E0y kh\u00F4ng ?" : "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n duy\u1EC7t xu\u1EA5t d\u1EEF li\u1EC7u n\u00E0y kh\u00F4ng ?";
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: message
                            },
                        }).afterClosed().subscribe(function (res) {
                            if (res == "Yes") {
                                if (isUpdate) {
                                    self.updateXuatKhoKhac();
                                }
                                else {
                                    self.duyetXuatKhoKhac();
                                }
                            }
                            else {
                                self.closepopupSavingData();
                            }
                        });
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closepopupSavingData();
                    });
                };
                XuatKhoKhacUpdateComponent.prototype.updateXuatKhoKhac = function () {
                    var self = this;
                    self.apiService.post("XuatKhoDuocPhamKhac/CapNhatYeuCauXuatThuocKhac", self.xuatKhoKhac).subscribe(function (resultData) {
                        self.closepopupSavingData();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        window.location.reload();
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closepopupSavingData();
                    });
                };
                XuatKhoKhacUpdateComponent.prototype.duyetXuatKhoKhac = function () {
                    var self = this;
                    self.apiService.post("XuatKhoDuocPhamKhac/CapNhatYeuCauXuatThuocKhac", self.xuatKhoKhac).subscribe(function (resultData) {
                        self.closepopupSavingData();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        var url = '/xem-chi-tiet';
                        self.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho-khac" + url], { queryParams: { Id: resultData.Id, F: 1 } });
                        // window.location.reload();
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closepopupSavingData();
                    });
                };
                return XuatKhoKhacUpdateComponent;
            }());
            XuatKhoKhacUpdateComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPham', { static: true })
            ], XuatKhoKhacUpdateComponent.prototype, "gridDuocPham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _xuat_kho_khac_shared_xuat_kho_khac_shared_component__WEBPACK_IMPORTED_MODULE_8__["XuatKhoKhacSharedComponent"], static: false })
            ], XuatKhoKhacUpdateComponent.prototype, "shared", void 0);
            XuatKhoKhacUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xuat-kho-khac-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-khac-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-khac-update.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.scss")).default]
                })
            ], XuatKhoKhacUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.model.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.model.ts ***!
          \***************************************************************************************/
        /*! exports provided: XuatKhoKhac, YeuCauXuatKhoDuocPhamChiTiet, YeuCauXuatKhoDuocPhamChiTietVoSearch, XuatKhacDuocPhamBenhVienChiTietVo, YeuCauXuatKhoDuocPhamGridVo, XuatKhoKhacGrid, XuatKhoKhacGridDaDuyet, PhieuXuatKhoKhacVo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhac", function () { return XuatKhoKhac; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauXuatKhoDuocPhamChiTiet", function () { return YeuCauXuatKhoDuocPhamChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauXuatKhoDuocPhamChiTietVoSearch", function () { return YeuCauXuatKhoDuocPhamChiTietVoSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhacDuocPhamBenhVienChiTietVo", function () { return XuatKhacDuocPhamBenhVienChiTietVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauXuatKhoDuocPhamGridVo", function () { return YeuCauXuatKhoDuocPhamGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacGrid", function () { return XuatKhoKhacGrid; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacGridDaDuyet", function () { return XuatKhoKhacGridDaDuyet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuXuatKhoKhacVo", function () { return PhieuXuatKhoKhacVo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var XuatKhoKhac = /** @class */ (function () {
                function XuatKhoKhac(Id, KhoXuatId, TenKhoXuat, NguoiXuatId, TenNguoiXuat, NguoiNhanId, TenNguoiNhan, LyDoXuatKho, NhanVienDuyetId, TenNhanVienDuyet, NgayDuyet, NgayXuat, LaLuuDuyet, TraNCC, DuocDuyet, LoaiKho, NhaThauId, TenNhaThau, NhapKhoDuocPhamId, SoChungTu, YeuCauXuatKhoDuocPhamChiTiets, YeuCauXuatKhoDuocPhamChiTietHienThis) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (TenKhoXuat === void 0) { TenKhoXuat = null; }
                    if (NguoiXuatId === void 0) { NguoiXuatId = null; }
                    if (TenNguoiXuat === void 0) { TenNguoiXuat = null; }
                    if (NguoiNhanId === void 0) { NguoiNhanId = null; }
                    if (TenNguoiNhan === void 0) { TenNguoiNhan = null; }
                    if (LyDoXuatKho === void 0) { LyDoXuatKho = null; }
                    if (NhanVienDuyetId === void 0) { NhanVienDuyetId = null; }
                    if (TenNhanVienDuyet === void 0) { TenNhanVienDuyet = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (NgayXuat === void 0) { NgayXuat = null; }
                    if (LaLuuDuyet === void 0) { LaLuuDuyet = false; }
                    if (TraNCC === void 0) { TraNCC = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    if (LoaiKho === void 0) { LoaiKho = null; }
                    if (NhaThauId === void 0) { NhaThauId = null; }
                    if (TenNhaThau === void 0) { TenNhaThau = null; }
                    if (NhapKhoDuocPhamId === void 0) { NhapKhoDuocPhamId = null; }
                    if (SoChungTu === void 0) { SoChungTu = null; }
                    if (YeuCauXuatKhoDuocPhamChiTiets === void 0) { YeuCauXuatKhoDuocPhamChiTiets = []; }
                    if (YeuCauXuatKhoDuocPhamChiTietHienThis === void 0) { YeuCauXuatKhoDuocPhamChiTietHienThis = []; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.TenKhoXuat = TenKhoXuat;
                    this.NguoiXuatId = NguoiXuatId;
                    this.TenNguoiXuat = TenNguoiXuat;
                    this.NguoiNhanId = NguoiNhanId;
                    this.TenNguoiNhan = TenNguoiNhan;
                    this.LyDoXuatKho = LyDoXuatKho;
                    this.NhanVienDuyetId = NhanVienDuyetId;
                    this.TenNhanVienDuyet = TenNhanVienDuyet;
                    this.NgayDuyet = NgayDuyet;
                    this.NgayXuat = NgayXuat;
                    this.LaLuuDuyet = LaLuuDuyet;
                    this.TraNCC = TraNCC;
                    this.DuocDuyet = DuocDuyet;
                    this.LoaiKho = LoaiKho;
                    this.NhaThauId = NhaThauId;
                    this.TenNhaThau = TenNhaThau;
                    this.NhapKhoDuocPhamId = NhapKhoDuocPhamId;
                    this.SoChungTu = SoChungTu;
                    this.YeuCauXuatKhoDuocPhamChiTiets = YeuCauXuatKhoDuocPhamChiTiets;
                    this.YeuCauXuatKhoDuocPhamChiTietHienThis = YeuCauXuatKhoDuocPhamChiTietHienThis;
                }
                return XuatKhoKhac;
            }());
            var YeuCauXuatKhoDuocPhamChiTiet = /** @class */ (function () {
                function YeuCauXuatKhoDuocPhamChiTiet(Id, SoLuongXuat, DuocPhamBenhVienId, LaDuocPhamBHYT, KhoXuatId, Ten, Ma, SoLo, HanSuDung, MayXetNghiemId) {
                    if (Id === void 0) { Id = 0; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (MayXetNghiemId === void 0) { MayXetNghiemId = null; }
                    this.Id = Id;
                    this.SoLuongXuat = SoLuongXuat;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                    this.KhoXuatId = KhoXuatId;
                    this.Ten = Ten;
                    this.Ma = Ma;
                    this.SoLo = SoLo;
                    this.HanSuDung = HanSuDung;
                    this.MayXetNghiemId = MayXetNghiemId;
                }
                return YeuCauXuatKhoDuocPhamChiTiet;
            }());
            var YeuCauXuatKhoDuocPhamChiTietVoSearch = /** @class */ (function () {
                function YeuCauXuatKhoDuocPhamChiTietVoSearch(KhoXuatId, NhaThauId, SoChungTu, TraNCC, SearchString, DuocPhamBenhViens) {
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (NhaThauId === void 0) { NhaThauId = null; }
                    if (SoChungTu === void 0) { SoChungTu = null; }
                    if (TraNCC === void 0) { TraNCC = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (DuocPhamBenhViens === void 0) { DuocPhamBenhViens = []; }
                    this.KhoXuatId = KhoXuatId;
                    this.NhaThauId = NhaThauId;
                    this.SoChungTu = SoChungTu;
                    this.TraNCC = TraNCC;
                    this.SearchString = SearchString;
                    this.DuocPhamBenhViens = DuocPhamBenhViens;
                }
                return YeuCauXuatKhoDuocPhamChiTietVoSearch;
            }());
            var XuatKhacDuocPhamBenhVienChiTietVo = /** @class */ (function () {
                function XuatKhacDuocPhamBenhVienChiTietVo(DuocPhamBenhVienId, Ten, Ma, LaDuocPhamBHYT, SoLo, DonGia, HanSuDung, XetNghiemIdDauTienMayXetNghiem, TenXetNghiemDauTienMayXetNghiem) {
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (XetNghiemIdDauTienMayXetNghiem === void 0) { XetNghiemIdDauTienMayXetNghiem = null; }
                    if (TenXetNghiemDauTienMayXetNghiem === void 0) { TenXetNghiemDauTienMayXetNghiem = null; }
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.Ten = Ten;
                    this.Ma = Ma;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                    this.SoLo = SoLo;
                    this.DonGia = DonGia;
                    this.HanSuDung = HanSuDung;
                    this.XetNghiemIdDauTienMayXetNghiem = XetNghiemIdDauTienMayXetNghiem;
                    this.TenXetNghiemDauTienMayXetNghiem = TenXetNghiemDauTienMayXetNghiem;
                }
                return XuatKhacDuocPhamBenhVienChiTietVo;
            }());
            var YeuCauXuatKhoDuocPhamGridVo = /** @class */ (function () {
                function YeuCauXuatKhoDuocPhamGridVo(Id, DuocPhamBenhVienId, Ten, DVT, LaDuocPhamBHYT, Loai, SoLuongTon, SoLuongTonDisplay, SoLuongXuat, DuocPhamBenhVienPhanNhomId, TenNhom, Ma, SoDangKy, SoLo, HanSuDung, XetNghiemIdDauTienMayXetNghiem, TenXetNghiemDauTienMayXetNghiem) {
                    if (Id === void 0) { Id = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (Loai === void 0) { Loai = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongTonDisplay === void 0) { SoLuongTonDisplay = null; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    if (DuocPhamBenhVienPhanNhomId === void 0) { DuocPhamBenhVienPhanNhomId = null; }
                    if (TenNhom === void 0) { TenNhom = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (SoDangKy === void 0) { SoDangKy = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (XetNghiemIdDauTienMayXetNghiem === void 0) { XetNghiemIdDauTienMayXetNghiem = null; }
                    if (TenXetNghiemDauTienMayXetNghiem === void 0) { TenXetNghiemDauTienMayXetNghiem = null; }
                    this.Id = Id;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.Ten = Ten;
                    this.DVT = DVT;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                    this.Loai = Loai;
                    this.SoLuongTon = SoLuongTon;
                    this.SoLuongTonDisplay = SoLuongTonDisplay;
                    this.SoLuongXuat = SoLuongXuat;
                    this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
                    this.TenNhom = TenNhom;
                    this.Ma = Ma;
                    this.SoDangKy = SoDangKy;
                    this.SoLo = SoLo;
                    this.HanSuDung = HanSuDung;
                    this.XetNghiemIdDauTienMayXetNghiem = XetNghiemIdDauTienMayXetNghiem;
                    this.TenXetNghiemDauTienMayXetNghiem = TenXetNghiemDauTienMayXetNghiem;
                }
                return YeuCauXuatKhoDuocPhamGridVo;
            }());
            var XuatKhoKhacGrid = /** @class */ (function () {
                function XuatKhoKhacGrid(NgayXuatTuFormat, NgayXuatDenFormat, ChoDuyet, DaDuyet, TuNgay, DenNgay, SearchString, RangeFromDate) {
                    if (NgayXuatTuFormat === void 0) { NgayXuatTuFormat = null; }
                    if (NgayXuatDenFormat === void 0) { NgayXuatDenFormat = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = true; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    this.NgayXuatTuFormat = NgayXuatTuFormat;
                    this.NgayXuatDenFormat = NgayXuatDenFormat;
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.SearchString = SearchString;
                    this.RangeFromDate = RangeFromDate;
                }
                return XuatKhoKhacGrid;
            }());
            var XuatKhoKhacGridDaDuyet = /** @class */ (function () {
                function XuatKhoKhacGridDaDuyet(XuatKhoDuocPhamId, SearchString) {
                    if (XuatKhoDuocPhamId === void 0) { XuatKhoDuocPhamId = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.XuatKhoDuocPhamId = XuatKhoDuocPhamId;
                    this.SearchString = SearchString;
                }
                return XuatKhoKhacGridDaDuyet;
            }());
            var PhieuXuatKhoKhacVo = /** @class */ (function () {
                function PhieuXuatKhoKhacVo(Id, HostingName, CoNCC, LaDuocPham, DuocDuyet) {
                    if (Id === void 0) { Id = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (CoNCC === void 0) { CoNCC = null; }
                    if (LaDuocPham === void 0) { LaDuocPham = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    this.Id = Id;
                    this.HostingName = HostingName;
                    this.CoNCC = CoNCC;
                    this.LaDuocPham = LaDuocPham;
                    this.DuocDuyet = DuocDuyet;
                }
                return PhieuXuatKhoKhacVo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.module.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.module.ts ***!
          \****************************************************************************************/
        /*! exports provided: XuatKhoKhacModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacModule", function () { return XuatKhoKhacModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _xuat_kho_khac_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuat-kho-khac-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-routing.module.ts");
            /* harmony import */ var _xuat_kho_khac_list_xuat_kho_khac_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xuat-kho-khac-list/xuat-kho-khac-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-list/xuat-kho-khac-list.component.ts");
            /* harmony import */ var _xuat_kho_khac_create_xuat_kho_khac_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xuat-kho-khac-create/xuat-kho-khac-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-create/xuat-kho-khac-create.component.ts");
            /* harmony import */ var _xuat_kho_khac_shared_xuat_kho_khac_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xuat-kho-khac-shared/xuat-kho-khac-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-shared/xuat-kho-khac-shared.component.ts");
            /* harmony import */ var _xuat_kho_khac_update_xuat_kho_khac_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xuat-kho-khac-update/xuat-kho-khac-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-update/xuat-kho-khac-update.component.ts");
            /* harmony import */ var _xuat_kho_khac_in_phieu_popup_xuat_kho_khac_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component.ts");
            /* harmony import */ var _xuat_kho_khac_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./xuat-kho-khac.service */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _phieu_xuat_kho_dp_vt_popup_phieu_xuat_kho_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.ts");
            var XuatKhoKhacModule = /** @class */ (function () {
                function XuatKhoKhacModule() {
                }
                return XuatKhoKhacModule;
            }());
            XuatKhoKhacModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_xuat_kho_khac_list_xuat_kho_khac_list_component__WEBPACK_IMPORTED_MODULE_4__["XuatKhoKhacListComponent"], _xuat_kho_khac_create_xuat_kho_khac_create_component__WEBPACK_IMPORTED_MODULE_5__["XuatKhoKhacCreateComponent"], _xuat_kho_khac_shared_xuat_kho_khac_shared_component__WEBPACK_IMPORTED_MODULE_6__["XuatKhoKhacSharedComponent"], _xuat_kho_khac_update_xuat_kho_khac_update_component__WEBPACK_IMPORTED_MODULE_7__["XuatKhoKhacUpdateComponent"], _xuat_kho_khac_in_phieu_popup_xuat_kho_khac_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_8__["XuatKhoKhacInPhieuPopupComponent"], _phieu_xuat_kho_dp_vt_popup_phieu_xuat_kho_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_22__["PhieuXuatKhoDpVtPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_17__["InputsModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_21__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_20__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
                        _xuat_kho_khac_routing_module__WEBPACK_IMPORTED_MODULE_3__["XuatKhoKhacRoutingModule"],
                    ], entryComponents: [
                        _xuat_kho_khac_in_phieu_popup_xuat_kho_khac_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_8__["XuatKhoKhacInPhieuPopupComponent"],
                        _phieu_xuat_kho_dp_vt_popup_phieu_xuat_kho_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_22__["PhieuXuatKhoDpVtPopupComponent"]
                    ],
                    providers: [
                        _xuat_kho_khac_service__WEBPACK_IMPORTED_MODULE_9__["XuatKhoKhacService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_10__["BaseService"], useClass: _xuat_kho_khac_service__WEBPACK_IMPORTED_MODULE_9__["XuatKhoKhacService"] },
                    ]
                })
            ], XuatKhoKhacModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.service.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.service.ts ***!
          \*****************************************************************************************/
        /*! exports provided: XuatKhoKhacService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacService", function () { return XuatKhoKhacService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var XuatKhoKhacService = /** @class */ (function (_super) {
                __extends(XuatKhoKhacService, _super);
                function XuatKhoKhacService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'XuatKhoDuocPhamKhac';
                    return _this;
                }
                return XuatKhoKhacService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            XuatKhoKhacService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            XuatKhoKhacService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], XuatKhoKhacService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts ***!
          \**********************************************************************************************/
        /*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuGridVo", function () { return YeuCauMuaVatTuGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTu", function () { return YeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTiet", function () { return YeuCauMuaVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaVatTu", function () { return PhieuYeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinVatTuChiTiet", function () { return ThongTinVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTietValidator", function () { return YeuCauMuaVatTuChiTietValidator; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var YeuCauMuaVatTuGridVo = /** @class */ (function () {
                function YeuCauMuaVatTuGridVo(SoPhieu, TenNhanVienYeuCau, NgayYeuCauTuFormat, NgayYeuCauDenFormat, RangeFromDate, FromDate, ToDate, ChoDuyet, DaDuyet, TuChoiDuyet, TuNgay, DenNgay, SearchString) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NgayYeuCauTuFormat === void 0) { NgayYeuCauTuFormat = null; }
                    if (NgayYeuCauDenFormat === void 0) { NgayYeuCauDenFormat = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new RangeDate(); }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.SoPhieu = SoPhieu;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
                    this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
                    this.RangeFromDate = RangeFromDate;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.SearchString = SearchString;
                }
                return YeuCauMuaVatTuGridVo;
            }());
            var RangeDate = /** @class */ (function () {
                function RangeDate(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return RangeDate;
            }());
            var YeuCauMuaVatTu = /** @class */ (function () {
                function YeuCauMuaVatTu(Id, SoPhieu, KhoId, NhanVienYeuCauId, NgayYeuCau, KyDuTruMuaDuocPhamVatTuId, GhiChu, TruongKhoaId, TruongKhoaDuyet, TenKho, TenNhanVienYeuCau, TenNhomDuTru, TenKyDuTru, NgayTaiKhoa, NgayKhoDuoc, NgayGiamDoc, TrangThai, TenTruongKhoa, NgayTruongKhoaDuyet, TenNhanVienKhoDuoc, NgayKhoDuocDuyet, TenGiamDoc, NgayGiamDocDuyet, LyDoTruongKhoaTuChoi, DuTruMuaVatTuChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (KyDuTruMuaDuocPhamVatTuId === void 0) { KyDuTruMuaDuocPhamVatTuId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TruongKhoaId === void 0) { TruongKhoaId = null; }
                    if (TruongKhoaDuyet === void 0) { TruongKhoaDuyet = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (TenNhomDuTru === void 0) { TenNhomDuTru = null; }
                    if (TenKyDuTru === void 0) { TenKyDuTru = null; }
                    if (NgayTaiKhoa === void 0) { NgayTaiKhoa = null; }
                    if (NgayKhoDuoc === void 0) { NgayKhoDuoc = null; }
                    if (NgayGiamDoc === void 0) { NgayGiamDoc = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TenTruongKhoa === void 0) { TenTruongKhoa = null; }
                    if (NgayTruongKhoaDuyet === void 0) { NgayTruongKhoaDuyet = null; }
                    if (TenNhanVienKhoDuoc === void 0) { TenNhanVienKhoDuoc = null; }
                    if (NgayKhoDuocDuyet === void 0) { NgayKhoDuocDuyet = null; }
                    if (TenGiamDoc === void 0) { TenGiamDoc = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (LyDoTruongKhoaTuChoi === void 0) { LyDoTruongKhoaTuChoi = null; }
                    if (DuTruMuaVatTuChiTiets === void 0) { DuTruMuaVatTuChiTiets = []; }
                    this.Id = Id;
                    this.SoPhieu = SoPhieu;
                    this.KhoId = KhoId;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.NgayYeuCau = NgayYeuCau;
                    this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
                    this.GhiChu = GhiChu;
                    this.TruongKhoaId = TruongKhoaId;
                    this.TruongKhoaDuyet = TruongKhoaDuyet;
                    this.TenKho = TenKho;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.TenNhomDuTru = TenNhomDuTru;
                    this.TenKyDuTru = TenKyDuTru;
                    this.NgayTaiKhoa = NgayTaiKhoa;
                    this.NgayKhoDuoc = NgayKhoDuoc;
                    this.NgayGiamDoc = NgayGiamDoc;
                    this.TrangThai = TrangThai;
                    this.TenTruongKhoa = TenTruongKhoa;
                    this.NgayTruongKhoaDuyet = NgayTruongKhoaDuyet;
                    this.TenNhanVienKhoDuoc = TenNhanVienKhoDuoc;
                    this.NgayKhoDuocDuyet = NgayKhoDuocDuyet;
                    this.TenGiamDoc = TenGiamDoc;
                    this.NgayGiamDocDuyet = NgayGiamDocDuyet;
                    this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
                    this.DuTruMuaVatTuChiTiets = DuTruMuaVatTuChiTiets;
                }
                return YeuCauMuaVatTu;
            }());
            var YeuCauMuaVatTuChiTiet = /** @class */ (function () {
                function YeuCauMuaVatTuChiTiet(STT, Id, VatTuId, LaVatTuBHYT, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongDuTruTaiKhoaDuyet, NhomDieuTriDuPhong, GhiChu, DuTruMuaVatTuTheoKhoaChiTietId, DuTruMuaVatTuKhoDuocChiTietId) {
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = 0; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (NhomDieuTriDuPhong === void 0) { NhomDieuTriDuPhong = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (DuTruMuaVatTuTheoKhoaChiTietId === void 0) { DuTruMuaVatTuTheoKhoaChiTietId = null; }
                    if (DuTruMuaVatTuKhoDuocChiTietId === void 0) { DuTruMuaVatTuKhoDuocChiTietId = null; }
                    this.STT = STT;
                    this.Id = Id;
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
                    this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
                    this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
                    this.GhiChu = GhiChu;
                    this.DuTruMuaVatTuTheoKhoaChiTietId = DuTruMuaVatTuTheoKhoaChiTietId;
                    this.DuTruMuaVatTuKhoDuocChiTietId = DuTruMuaVatTuKhoDuocChiTietId;
                }
                return YeuCauMuaVatTuChiTiet;
            }());
            var PhieuYeuCauMuaVatTu = /** @class */ (function () {
                function PhieuYeuCauMuaVatTu(DuTruMuaVatTuId, HostingName, Header, TrangThai) {
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.TrangThai = TrangThai;
                }
                return PhieuYeuCauMuaVatTu;
            }());
            var ThongTinVatTuChiTiet = /** @class */ (function () {
                function ThongTinVatTuChiTiet(STT, Id, NhomVatTuId, VatTuId, LaVatTuBHYT, Ma, DVT, QuyCach, NhaSX, NuocSX, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongTonDuTru, SoLuongTonKhoTong, SoLuongChuaNhapVeHDT, // Hợp đồng thầu
                ThongTinChiTietTonKhoTongs, ThongTinChiTietTonHDTs, LoaiVatTu, TenLoaiVatTu, Ten, SLTonDuTru, SLTonKhoTong, SLChuaNhapVeHDT, SoLuongDuTruTaiKhoaDuyet, SoLuongDuTruKhoaDuocDuyet, SoLuongDuTruGiamDocDuyet, KhoId, IsThemVatTu, GhiChu, YeuCauMuaVatTuChiTietValidators) {
                    if (STT === void 0) { STT = 0; }
                    if (Id === void 0) { Id = 0; }
                    if (NhomVatTuId === void 0) { NhomVatTuId = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (QuyCach === void 0) { QuyCach = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongTonDuTru === void 0) { SoLuongTonDuTru = null; }
                    if (SoLuongTonKhoTong === void 0) { SoLuongTonKhoTong = null; }
                    if (SoLuongChuaNhapVeHDT === void 0) { SoLuongChuaNhapVeHDT = null; }
                    if (ThongTinChiTietTonKhoTongs === void 0) { ThongTinChiTietTonKhoTongs = []; }
                    if (ThongTinChiTietTonHDTs === void 0) { ThongTinChiTietTonHDTs = []; }
                    if (LoaiVatTu === void 0) { LoaiVatTu = null; }
                    if (TenLoaiVatTu === void 0) { TenLoaiVatTu = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (SLTonDuTru === void 0) { SLTonDuTru = null; }
                    if (SLTonKhoTong === void 0) { SLTonKhoTong = null; }
                    if (SLChuaNhapVeHDT === void 0) { SLChuaNhapVeHDT = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (SoLuongDuTruKhoaDuocDuyet === void 0) { SoLuongDuTruKhoaDuocDuyet = null; }
                    if (SoLuongDuTruGiamDocDuyet === void 0) { SoLuongDuTruGiamDocDuyet = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (IsThemVatTu === void 0) { IsThemVatTu = false; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (YeuCauMuaVatTuChiTietValidators === void 0) { YeuCauMuaVatTuChiTietValidators = []; }
                    this.STT = STT;
                    this.Id = Id;
                    this.NhomVatTuId = NhomVatTuId;
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.Ma = Ma;
                    this.DVT = DVT;
                    this.QuyCach = QuyCach;
                    this.NhaSX = NhaSX;
                    this.NuocSX = NuocSX;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
                    this.SoLuongTonDuTru = SoLuongTonDuTru;
                    this.SoLuongTonKhoTong = SoLuongTonKhoTong;
                    this.SoLuongChuaNhapVeHDT = SoLuongChuaNhapVeHDT;
                    this.ThongTinChiTietTonKhoTongs = ThongTinChiTietTonKhoTongs;
                    this.ThongTinChiTietTonHDTs = ThongTinChiTietTonHDTs;
                    this.LoaiVatTu = LoaiVatTu;
                    this.TenLoaiVatTu = TenLoaiVatTu;
                    this.Ten = Ten;
                    this.SLTonDuTru = SLTonDuTru;
                    this.SLTonKhoTong = SLTonKhoTong;
                    this.SLChuaNhapVeHDT = SLChuaNhapVeHDT;
                    this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
                    this.SoLuongDuTruKhoaDuocDuyet = SoLuongDuTruKhoaDuocDuyet;
                    this.SoLuongDuTruGiamDocDuyet = SoLuongDuTruGiamDocDuyet;
                    this.KhoId = KhoId;
                    this.IsThemVatTu = IsThemVatTu;
                    this.GhiChu = GhiChu;
                    this.YeuCauMuaVatTuChiTietValidators = YeuCauMuaVatTuChiTietValidators;
                }
                return ThongTinVatTuChiTiet;
            }());
            var YeuCauMuaVatTuChiTietValidator = /** @class */ (function () {
                function YeuCauMuaVatTuChiTietValidator(VatTuId, LaVatTuBHYT) {
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                }
                return YeuCauMuaVatTuChiTietValidator;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/enum/loai-kho.enum.ts": 
        /*!**********************************************!*\
          !*** ./src/app/shared/enum/loai-kho.enum.ts ***!
          \**********************************************/
        /*! exports provided: EnumLoaiKho */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumLoaiKho", function () { return EnumLoaiKho; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EnumLoaiKho;
            (function (EnumLoaiKho) {
                EnumLoaiKho[EnumLoaiKho["KhoTongDuocPhamCap1"] = 1] = "KhoTongDuocPhamCap1";
                EnumLoaiKho[EnumLoaiKho["KhoTongDuocPhamCap2"] = 2] = "KhoTongDuocPhamCap2";
                EnumLoaiKho[EnumLoaiKho["KhoTongVTYTCap1"] = 3] = "KhoTongVTYTCap1";
                EnumLoaiKho[EnumLoaiKho["KhoTongVTYTCap2"] = 4] = "KhoTongVTYTCap2";
                EnumLoaiKho[EnumLoaiKho["KhoLe"] = 5] = "KhoLe";
                EnumLoaiKho[EnumLoaiKho["NhaThuoc"] = 6] = "NhaThuoc";
                EnumLoaiKho[EnumLoaiKho["KhoDuocPhamChoXuLy"] = 7] = "KhoDuocPhamChoXuLy";
                EnumLoaiKho[EnumLoaiKho["KhoVTYTChoXuLy"] = 8] = "KhoVTYTChoXuLy";
            })(EnumLoaiKho || (EnumLoaiKho = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=default~nhap-xuat-duoc-pham-xuat-kho-khac-xuat-kho-khac-module~nhap-xuat-vat-tu-xuat-kho-vat-tu-khac~ebbff056-es2015.js.map
//# sourceMappingURL=default~nhap-xuat-duoc-pham-xuat-kho-khac-xuat-kho-khac-module~nhap-xuat-vat-tu-xuat-kho-vat-tu-khac~ebbff056-es5.js.map
//# sourceMappingURL=default~nhap-xuat-duoc-pham-xuat-kho-khac-xuat-kho-khac-module~nhap-xuat-vat-tu-xuat-kho-vat-tu-khac~ebbff056-es5.js.map