(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-vat-tu-xuat-kho-vat-tu-khac-xuat-kho-vat-tu-khac-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU XUẤT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật tư',Path:''}\n                ,{Title:'Xuất khác',Path:'/nhap-xuat/vat-tu/xuat-kho-khac', Active: true}\n                ]\">\n</app-header-form>\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo yêu cầu xuất kho khác</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-xuat-kho-vat-tu-khac-shared [validationErrors]=\"validationErrors\" [isCreate]=\"true\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-xuat-kho-vat-tu-khac-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"create()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật tư',Path:''}\n                ,{Title:'Xuất khác',Path:'',Active:true}\n                ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #parentGrid [sort]=\"sort\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [useActionDefault]=\"false\" [showStt]=\"true\"\n                [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\" [showExportExcel]=\"true\"\n                [urlGetData]=\"urlGetDataVatTu\" [urlGetTotalPage]=\"urlGetTotalPageVatTu\"\n                (extExportExcel)=\"exportExcel()\"></app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <!-- [sort]=\"sortChild\" -->\n                <app-grid #gridChildOfParent [groups]=\"groups\" [gridColumns]=\"gridChildColumns\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [showStt]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    additionalSearchString=\"{{dataItem.Id}};{{dataItem.TinhTrang}} \" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n        </div>\n        <ng-template #soChungTuTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem.Id, dataItem.TinhTrang)\">\n                {{dataItem.SoPhieu}}</a>\n        </ng-template>\n\n        <ng-template #khoXuatTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem.Id, dataItem.TinhTrang)\">\n                {{dataItem.KhoVatTuXuat}}</a>\n        </ng-template>\n\n        <ng-template #tinhTrangTemplate let-dataItem>\n            <label *ngIf=\"dataItem.TinhTrang == 0\" class=\"orange\">\n                <span>{{dataItem.TinhTrangDisplay}}</span>\n            </label>\n            <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                <span>{{dataItem.TinhTrangDisplay}}</span>\n            </label>\n        </ng-template>\n\n        <ng-template #ngayXuatTemplate let-dataItem>\n            {{dataItem.NgayXuatDisplay}}\n        </ng-template>\n\n        <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <app-checkbox name=\"chua-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet')\" class=\"ml-2\"\n                    value=\"coduyet\" [(model)]=\"xuatKhoSearch.ChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n                </app-checkbox>\n\n                <app-checkbox name=\"da-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daduyet')\" class=\"ml-2\"\n                    value=\"coduyet\" [(model)]=\"xuatKhoSearch.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" label=\"Đã duyệt xuất\">\n                </app-checkbox>\n\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"xuatKhoSearch.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n                <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                    [(model)]=\"xuatKhoSearch.RangeFromDate\" label=\"Xuất từ ngày - đến ngày\" (keyup)=\"onKey($event)\"\n                    (modelChange)=\"changeNgayBatDauRange()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n                </app-daterangepicker>\n\n\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button (click)=\"themMoiXuatKho()\" class=\"mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip\n                    title=\"Thêm\" type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n\n            </div>\n        </ng-template>\n\n\n        <ng-template #actionTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button (click)=\"inPhieu(dataItem)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In phiếu</span>\n                    </button>\n                    <!-- <button *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"chinhSua(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                        <span>Sửa</span>\n                    </button> -->\n                    <button *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"xoa(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                        <span>Xóa</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n            <!-- <div class=\"text-center\" kendoTooltip>\n                <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                    *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"xoa(dataItem.Id)\">\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                </button>\n            </div> -->\n        </ng-template>\n        <ng-template #hsdListTemplate let-dataItem>\n            {{dataItem.HanSuDungDisplay}}\n        </ng-template>\n\n        <ng-template #tinhTrangTemplate let-dataItem>\n            <label *ngIf=\"dataItem.TinhTrang == 0\" class=\"orange\">\n                <span>{{dataItem.TinhTrangDisplay}}</span>\n            </label>\n            <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                <span>{{dataItem.TinhTrangDisplay}}</span>\n            </label>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <app-combobox *ngIf=\"trangThaiVo != undefined && trangThaiVo!= null && trangThaiVo.TrangThai == null\" id=\"KhoXuatId\"\n        fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"yeuCauXuatKhoKhac.KhoXuatId\" [required]=\"true\"\n        autoSelectFirstItem=\"true\" bind=\"true\" [disabled]=\"disabled\" [modelText]=\"yeuCauXuatKhoKhac.TenKhoXuat\"\n        (modelChange)=\"khoXuatModelChange($event)\" label=\"Kho xuất\" url=\"XuatKhoVatTuKhac/GetKhoTheoLoaiVatTu\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauXuatKhoKhac.KhoXuatId +'}', Take: 50}\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"trangThaiVo != undefined && trangThaiVo!= null && trangThaiVo.TrangThai == true\" id=\"KhoXuatId\"\n        fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"yeuCauXuatKhoKhac.KhoXuatId\" [required]=\"true\" [disabled]=\"true\"\n        [modelText]=\"yeuCauXuatKhoKhac.TenKhoXuat\" label=\"Kho xuất\" url=\"XuatKhoVatTuKhac/GetKhoTheoLoaiVatTu\">\n    </app-combobox>\n\n    <app-combobox id=\"NguoiXuatId\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"yeuCauXuatKhoKhac.NguoiXuatId\"\n        [required]=\"true\" [modelText]=\"yeuCauXuatKhoKhac.TenNguoiXuat\" bind=\"true\" label=\"Người xuất\"\n        url=\"XuatKhoVatTu/GetNguoiXuat\" [disabled]=\"true\"\n        [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox id=\"NguoiNhanId\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"yeuCauXuatKhoKhac.NguoiNhanId\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        [queryInfo]=\"{ParameterDependencies:'{NguoiNhanId:' + yeuCauXuatKhoKhac.NguoiNhanId +'}', Take: 50}\"\n        [modelText]=\"yeuCauXuatKhoKhac.TenNguoiNhan\" label=\"Người nhận\" url=\"XuatKhoDuocPhamKhac/GetNguoiNhanXuatKhac\">\n    </app-combobox>\n\n    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"25%\"\n        [fxFlex]=\"\n    (yeuCauXuatKhoKhac.LoaiKho === 3 || yeuCauXuatKhoKhac.LoaiKho === 2 || yeuCauXuatKhoKhac.LoaiKho === 4 || yeuCauXuatKhoKhac.LoaiKho === 6) ? '15%' : '25%'\"\n        label=\"Ngày xuất\" [(model)]=\"yeuCauXuatKhoKhac.NgayXuat\" [required]=\"true\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n    </app-datetimepicker>\n\n    <div *ngIf=\"\n    (yeuCauXuatKhoKhac.LoaiKho === 3 || yeuCauXuatKhoKhac.LoaiKho === 2 || yeuCauXuatKhoKhac.LoaiKho === 6 || yeuCauXuatKhoKhac.LoaiKho === 4)\"\n        fxFlex=\"10%\" fxFlex.sm=\"20%\">\n        <div class=\"container-custom no-label\">\n            <label>&nbsp;</label>\n            <div fxLayout=\"row\">\n                <app-checkbox\n                    [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null || disabled\"\n                    (modelChange)=\"traNCCChange($event)\" id=\"traNCC\" [(model)]=\"yeuCauXuatKhoKhac.TraNCC\"\n                    label=\"Trả NCC\">\n                </app-checkbox>\n            </div>\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"yeuCauXuatKhoKhac.TraNCC == true\">\n        <app-combobox id=\"NhaThauId\" fxFlex=\"50%\" fxFlex.sm=\"50%\" [(model)]=\"yeuCauXuatKhoKhac.NhaThauId\"\n            [required]=\"true\" [modelText]=\"yeuCauXuatKhoKhac.TenNhaThau\" label=\"Nhà cung cấp\" [disabled]=\"disabled\"\n            (modelChange)=\"nhaThauChange()\" url=\"XuatKhoDuocPhamKhac/GetNhaCungCapTheoKhoDuocPhams\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoId:' +yeuCauXuatKhoKhac.KhoXuatId +', Id: '+yeuCauXuatKhoKhac.NhaThauId+'}', Take: 50}\"\n            [validationerror]=\"'NhaThauId' | validationerror:validationErrors\">\n        </app-combobox>\n\n        <app-combobox id=\"SoChungTu\" fxFlex=\"50%\" fxFlex.sm=\"50%\" [(model)]=\"yeuCauXuatKhoKhac.NhapKhoVatTuId\"\n            [required]=\"true\" [modelText]=\"yeuCauXuatKhoKhac.SoChungTu\" label=\"Số hóa đơn\" [disabled]=\"disabled\"\n            url=\"XuatKhoVatTuKhac/GetSoHoaDonTheoKhoVatTus\" (selectionChange)=\"soHoaDonChange($event)\"\n            [queryInfo]=\"{ParameterDependencies:'{Id:' +yeuCauXuatKhoKhac.NhaThauId +', NhaThauId: '+yeuCauXuatKhoKhac.NhaThauId +' , KhoId: '+yeuCauXuatKhoKhac.KhoXuatId  +'}', Take: 50}\"\n            [validationerror]=\"'NhapKhoVatTuId' | validationerror:validationErrors\">\n        </app-combobox>\n    </ng-container>\n\n\n    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"yeuCauXuatKhoKhac.LyDoXuatKho\"\n        label=\"Ghi chú\" maxlength=\"1000\" [required]=\"true\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n    </app-textbox>\n\n</div>\n<div style=\"height: 20px;\">\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN VẬT TƯ\n    </h3>\n    <ng-container *ngIf=\"trangThaiVo != undefined && trangThaiVo!= null && trangThaiVo.TrangThai == null\">\n\n        <app-grid fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n            [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetTotal\" [useHeaderDefault]=\"false\"\n            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" height=\"500\"\n            [headerTemplate]=\"headerTemplate\" #gridVatTuXuat [groups]=\"groups\"></app-grid>\n\n        <app-grid fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridResultColumns\" [documentType]=\"documentType\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n            [pageable]=\"false\" height=\"500\" [headerTemplate]=\"headerTemplate2\" #gridResult [groups]=\"groups\"\n            [gridDataSource]=\"gridDataSourceVatTuKhac\"></app-grid>\n    </ng-container>\n\n    <ng-container *ngIf=\"trangThaiVo != undefined && trangThaiVo!= null && trangThaiVo.TrangThai != null\">\n        <app-grid fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridResultDaDuyetColumns\"\n            [documentType]=\"documentType\" [sort]=\"sort\" [urlGetData]=\"urlGetDataDaDuyet\"\n            [urlGetTotalPage]=\"urlGetTotalDaDuyet\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" height=\"500\"\n            [additionalSearchString]=\"addtionStringDefault\" [headerTemplate]=\"headerTemplateDaDuyet\"\n            #gridVatTuXuatDaDuyet [groups]=\"groups\"></app-grid>\n    </ng-container>\n\n    <ng-template #headerTemplateDaDuyet>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"xuatKhoKhacGridDaDuyet.SearchString\"\n                    (keyup)=\"onKeyGrid3($event)\" (ngModelChange)=\"searchChanges3($event)\"\n                    placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"yeuCauXuatKhoVatTuChiTietVoSearch.SearchString\"\n                    (keyup)=\"onKeyGrid1($event)\" (ngModelChange)=\"searchChanges($event)\"\n                    placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #headerTemplate2>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString2\" [(ngModel)]=\"searchString2\" (keyup)=\"onKeyGrid2($event)\"\n                    (ngModelChange)=\"clearSearchGrid2($event)\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <!-- GRID DATA 1  CONTENT-->\n\n    <ng-template #soLuongXuatGrid1Template let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\"\n            [format]=\"format\" [decimals]=\"2\" [max]=\"dataItem.SoLuongTon\">\n        </app-textboxnumeric>\n    </ng-template>\n\n    <ng-template #transferTemplate let-dataItem>\n        <div style=\"text-align: right;\">\n            <button (click)=\"dieuChuyenTungVatTuGrid1(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\"\n                kendoTooltip title=\"Chọn: {{dataItem.Ten}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n                mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRight\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div style=\"width: 50%;\">\n            <strong>{{value}}</strong>\n        </div>\n        <div style=\"width: 50%; text-align: right;\">\n            <button (click)=\"dieuChuyenVatTuTheoNhomGrid(dataItem,1)\" color=\"primary\" kendoTooltip\n                title=\"Chọn chóm: {{value}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button\n                type=\"button\">\n                <mat-icon [icIcon]=\"icRightLast\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <!-- GRID DATA 2  CONTENT-->\n\n    <ng-template #soLuongXuatGrid2Template let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai == null\"\n            class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\"\n            [max]=\"dataItem.SoLuongTon\" maxlength=\"99999999\" [format]=\"format\" [decimals]=\"2\"\n            [validationerror]=\"'YeuCauXuatKhoVatTuChiTiets['+rowIndex+'].SoLuongXuat' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <div *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\">\n            {{dataItem.SoLuongXuat | number:'1.0':'vi-VN' }}\n        </div>\n\n    </ng-template>\n\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr>\n                <td>Số lượng tồn thực tế: {{sLTonThucTe | number:'1.0':'vi-VN'}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <ng-template #sLTonTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        {{dataItem.SoLuongTon | number:'1.2-2':'vi-VN' }}\n    </ng-template>\n\n    <ng-template #slTonThucTeTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <span> {{dataItem.SoLuongTon | number:'1.2-2':'vi-VN'}}</span>\n        <span\n            *ngIf=\"validationErrors != []&& validationErrors!=undefined && validationErrors!=null && validationErrors.length > 0\"\n            class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n            position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </ng-template>\n\n    <ng-template #tenNhom2GroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <button (click)=\"dieuChuyenVatTuTheoNhomGrid(dataItem,2)\" color=\"primary\" kendoTooltip\n            title=\"Bỏ chọn nhóm: {{value}}\" class=\"p-0 mr-2\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button\n            type=\"button\">\n            <mat-icon [icIcon]=\"icLeftLast\"></mat-icon>\n        </button>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n\n    <ng-template #transferTemplate2 let-dataItem>\n        <button (click)=\"dieuChuyenTungVatTuGrid2(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\"\n            kendoTooltip title=\"Bỏ chọn: {{dataItem.Ten}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n            mat-raised-button type=\"button\">\n            <mat-icon [icIcon]=\"icLeft\"></mat-icon>\n        </button>\n    </ng-template>\n\n    <ng-template #hsdTemplate let-dataItem>\n        {{dataItem.HanSuDungDisplay}}\n    </ng-template>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật Tư',Path:''}\n                ,{Title:'Xuất khác',Path:'/nhap-xuat/vat-tu/xuat-kho-khac', queryParams: {holdQuery : true}}\n                ]\">\n</app-header-form>\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết yêu cầu xuất khác</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\" *ngIf=\"tinhTrang== 1\" style=\"color:green\">Đã duyệt\n                    xuất</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\" *ngIf=\"tinhTrang== 0\" style=\"color:orange\">Chờ duyệt</b>\n            </div>\n            \n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-xuat-kho-vat-tu-khac-shared #temp [isCreate]=\"false\" [trangThaiVo]=\"trangThaiVo\"\n                    [validationErrors]=\"validationErrors\">\n                </app-xuat-kho-vat-tu-khac-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <!-- <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-arrow-left\"></i> In Phiếu</button> -->\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay lại</button>\n\n                    <button *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai== null\" type=\"button\"\n                        (click)=\"duyetXuat()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Duyệt Xuất</button>\n\n                    <button *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai== null\" type=\"button\" (click)=\"update()\"\n                        color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3h1YXQta2hvLXZhdC10dS1raGFjL3h1YXQta2hvLWluLXBoaWV1LXBvcHVwL3h1YXQta2hvLWluLXBoaWV1LXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: XuatKhoInPhieuPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoInPhieuPopupComponent", function() { return XuatKhoInPhieuPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);





let XuatKhoInPhieuPopupComponent = class XuatKhoInPhieuPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.src = "";
    }
    ngOnInit() {
        this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
    }
    getSharedPrintForm() {
        let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
        return new Promise(resolve => {
            resolve(source);
            this.close();
        });
    }
    close() {
        this.dialogRef.close();
    }
};
XuatKhoInPhieuPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
XuatKhoInPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-in-phieu-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-in-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-in-phieu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], XuatKhoInPhieuPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveHVhdC1raG8tdmF0LXR1LWtoYWMveHVhdC1raG8tdmF0LXR1LWtoYWMtY3JlYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHh1YXQta2hvLXZhdC10dS1raGFjXFx4dWF0LWtoby12YXQtdHUta2hhYy1jcmVhdGVcXHh1YXQta2hvLXZhdC10dS1raGFjLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveHVhdC1raG8tdmF0LXR1LWtoYWMveHVhdC1raG8tdmF0LXR1LWtoYWMtY3JlYXRlL3h1YXQta2hvLXZhdC10dS1raGFjLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3h1YXQta2hvLXZhdC10dS1raGFjL3h1YXQta2hvLXZhdC10dS1raGFjLWNyZWF0ZS94dWF0LWtoby12YXQtdHUta2hhYy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: XuatKhoVatTuKhacCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuKhacCreateComponent", function() { return XuatKhoVatTuKhacCreateComponent; });
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
/* harmony import */ var _yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_shared_xuat_kho_vat_tu_khac_shared_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../xuat-kho-vat-tu-khac.model */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



















let XuatKhoVatTuKhacCreateComponent = class XuatKhoVatTuKhacCreateComponent {
    constructor(apiService, dialog, notificationService, authService, router, ref, location) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.location = location;
        this.validationErrors = [];
        this.isCreate = false;
        this.trangThaiVo = new _yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__["TrangThaiTaoPhieuLinh"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].XuatKhoVatTuKhac;
        this.xuatKhoKhac = new _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_16__["XuatKhoVatTuKhac"]();
        // this.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
        this.trangThaiVo.TrangThai = null;
    }
    addingPage() {
        this.popupAddingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupAddingData() {
        if (this.popupAddingData != undefined && this.popupAddingData != null) {
            this.popupAddingData.close();
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    cancel() {
        // this.location.back();
        this.router.navigateByUrl('nhap-xuat/vat-tu/xuat-kho-khac?holdQuery=true');
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
    create() {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn thêm dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                self.xuatKhoKhac = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Add)) {
                    self.addingPage();
                    self.apiService.post("XuatKhoVatTuKhac/ThemYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe((resultData) => {
                        self.closePopupAddingData();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                        let url = '/xem-chi-tiet';
                        this.router.navigate(["/nhap-xuat/vat-tu/xuat-kho-khac" + url], { queryParams: { Id: resultData, F: 0 } });
                        // self.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho-khac" + "/xem-chi-tiet/" + resultData]);
                        // self.router.navigate(['/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham']);
                        // self.loadingPage();
                        // self.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = resultData;
                        // self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", self.yeuCauDieuChuyenDuocPhamPhieuIn).subscribe(
                        //   resData => {
                        //     if (resData != undefined && resData != null) {
                        //       self.closePopupLoadingData();
                        //       self.dialog.open(DieuChuyenKhoNoiBoDuocPhamPopupComponent, {
                        //         disableClose: true,
                        //         width: "1200px",
                        //         data: resData,
                        //       }).afterClosed().subscribe(() => {
                        //         // self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
                        //         self.router.navigate(['/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham']);
                        //       });
                        //     }
                        //   },
                        //   (err: ApiError) => {
                        //     self.validationErrors = err.ValidationErrors;
                        //     if (err.Message != "Validation Failed") {
                        //       self.notificationService.showError(err.Message);
                        //     }
                        //     self.closePopupLoadingData();
                        //   })
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupAddingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
};
XuatKhoVatTuKhacCreateComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_xuat_kho_vat_tu_khac_shared_xuat_kho_vat_tu_khac_shared_component__WEBPACK_IMPORTED_MODULE_13__["XuatKhoVatTuKhacSharedComponent"], { static: true })
], XuatKhoVatTuKhacCreateComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], XuatKhoVatTuKhacCreateComponent.prototype, "keyEvent", null);
XuatKhoVatTuKhacCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-vat-tu-khac-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-vat-tu-khac-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-vat-tu-khac-create.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.scss")).default]
    })
], XuatKhoVatTuKhacCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3h1YXQta2hvLXZhdC10dS1raGFjL3h1YXQta2hvLXZhdC10dS1raGFjLWxpc3QveHVhdC1raG8tdmF0LXR1LWtoYWMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: XuatKhoVatTuKhacListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuKhacListComponent", function() { return XuatKhoVatTuKhacListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10__);
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
/* harmony import */ var _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../xuat-kho-vat-tu-khac.model */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _duoc_pham_xuat_kho_khac_xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../duoc-pham/xuat-kho-khac/xuat-kho-khac.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.model.ts");
/* harmony import */ var _duoc_pham_xuat_kho_khac_phieu_xuat_kho_dp_vt_popup_phieu_xuat_kho_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component.ts");



























let XuatKhoVatTuKhacListComponent = class XuatKhoVatTuKhacListComponent {
    constructor(apiService, authService, dialog, location, route, router, notificationService) {
        this.apiService = apiService;
        this.authService = authService;
        this.dialog = dialog;
        this.location = location;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.phieuXuatKhoKhacVo = new _duoc_pham_xuat_kho_khac_xuat_kho_khac_model__WEBPACK_IMPORTED_MODULE_25__["PhieuXuatKhoKhacVo"]();
        this.baseRoute = "/nhap-xuat/vat-tu/xuat-kho-khac";
        this.sort = [{
                field: 'NgayXuat',
                dir: 'desc'
            }];
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"];
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataVatTu = "XuatKhoVatTuKhac/GetDataForGridAsync";
        this.urlGetTotalPageVatTu = "XuatKhoVatTuKhac/GetTotalPageForGridAsync";
        this.urlGetDataGridChild = "XuatKhoVatTuKhac/GetDataForGridChildAsync";
        this.urlGetTotalPageGridChild = "XuatKhoVatTuKhac/GetTotalPageForGridChildAsync";
        this.holdQuery = null;
        this.additionalSearchString = null;
        //update xuat kho 14/9/2020
        this.xuatKhoSearch = new _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_22__["XuatKhoKhacGrid"]();
        this.groups = [{ field: 'TenNhom' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_16__["DocumentType"].XuatKhoVatTuKhac;
        this.backWithSearch();
        this.gridColumns = [
            { Field: "SoPhieu", Title: "Số phiếu", Width: 90, Sortable: true, Template: this.soChungTuTemplate },
            { Field: "KhoVatTuXuat", Title: "Nơi xuất", Width: 200, Sortable: true, Template: this.khoXuatTemplate },
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
            { Field: "Ten", Title: "Vật tư", Width: 100, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: false, Template: this.hsdListTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
            { Field: "SoLuongXuat", Title: "SL Xuất", Width: 100, Sortable: false },
            { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
        ];
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].getItem("additionalSearchStringXuatKhoKhacVT");
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
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].removeItem("additionalSearchStringXuatKhoKhacVT");
        }
    }
    xemChiTiet(id, tinhTrang) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
            let url = '/xem-chi-tiet';
            this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, F: tinhTrang } });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    exportExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel("XuatKhoVatTuKhac/ExportData", this.gridChild._gridQueryInfo).subscribe(resultData => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_19__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "XuatKhoVatTuKhac" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    blur() {
        this.timKiem();
    }
    trangThaiCheckBox(event, tinhTrang) {
        if (tinhTrang == "choduyet") {
            this.xuatKhoSearch.ChoDuyet = event;
        }
        if (tinhTrang == "daduyet") {
            this.xuatKhoSearch.DaDuyet = event;
        }
        this.timKiem();
    }
    changeNgayBatDauRange() {
        this.timKiem();
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            self.timKiem();
        }
    }
    timKiem() {
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
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].setItem("additionalSearchStringXuatKhoKhacVT", queryString);
        this.gridChild.search();
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    inPhieu(data) {
        this.loadingPage();
        this.phieuXuatKhoKhacVo.Id = data.Id;
        this.phieuXuatKhoKhacVo.HostingName = window.location.protocol + "//" + window.location.host;
        this.phieuXuatKhoKhacVo.CoNCC = data.CoNCC;
        this.phieuXuatKhoKhacVo.DuocDuyet = data.DuocDuyet;
        this.phieuXuatKhoKhacVo.LaDuocPham = false;
        this.apiService.post("XuatKhoDuocPhamKhac/InPhieuXuatKhoKhac", this.phieuXuatKhoKhacVo).subscribe(resData => {
            if (resData != undefined && resData != null) {
                this.closePopupLoadingData();
                this.dialog.open(_duoc_pham_xuat_kho_khac_phieu_xuat_kho_dp_vt_popup_phieu_xuat_kho_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_26__["PhieuXuatKhoDpVtPopupComponent"], {
                    disableClose: true,
                    width: "1200px",
                    data: { html: resData, title: "PHIẾU XUẤT SỬ DỤNG THUỐC, HÓA CHẤT, VẬT TƯ" },
                }).afterClosed().subscribe(() => {
                });
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    xoa(id) {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Delete)) {
                    this.apiService.post("XuatKhoVatTuKhac/XoaYeuCauXuatVatTu?id=" + id).subscribe(() => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_19__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                        this.timKiem();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    themMoiXuatKho() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Add)) {
            this.router.navigate(["/nhap-xuat/vat-tu/xuat-kho-khac/them"]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
XuatKhoVatTuKhacListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildOfParent', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "gridChildOfParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdListTemplate', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "hsdListTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoVatTuXuatTemplate', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "khoVatTuXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayXuatTemplate", { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "ngayXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoXuatTemplate', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "khoXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soChungTuTemplate', { static: true })
], XuatKhoVatTuKhacListComponent.prototype, "soChungTuTemplate", void 0);
XuatKhoVatTuKhacListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-vat-tu-khac-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-vat-tu-khac-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-vat-tu-khac-list.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.scss")).default]
    })
], XuatKhoVatTuKhacListComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: XuatKhoVatTuKhacRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuKhacRoutingModule", function() { return XuatKhoVatTuKhacRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xuat_kho_vat_tu_khac_create_xuat_kho_vat_tu_khac_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_list_xuat_kho_vat_tu_khac_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_update_xuat_kho_vat_tu_khac_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");









const routes = [
    {
        path: '',
        component: _xuat_kho_vat_tu_khac_list_xuat_kho_vat_tu_khac_list_component__WEBPACK_IMPORTED_MODULE_4__["XuatKhoVatTuKhacListComponent"],
        data: {
            title: 'Xuất Kho Vật Tư Khác',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].XuatKhoVatTuKhac,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _xuat_kho_vat_tu_khac_create_xuat_kho_vat_tu_khac_create_component__WEBPACK_IMPORTED_MODULE_3__["XuatKhoVatTuKhacCreateComponent"],
        data: {
            title: 'Thêm Xuất Kho Vật Tư Khác',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].XuatKhoVatTuKhac,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet',
        component: _xuat_kho_vat_tu_khac_update_xuat_kho_vat_tu_khac_update_component__WEBPACK_IMPORTED_MODULE_5__["XuatKhoVatTuKhacUpdateComponent"],
        data: {
            title: 'Xem Xuất Kho Vật Tư Khác',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].XuatKhoVatTuKhac,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
    }
];
let XuatKhoVatTuKhacRoutingModule = class XuatKhoVatTuKhacRoutingModule {
};
XuatKhoVatTuKhacRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], XuatKhoVatTuKhacRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3h1YXQta2hvLXZhdC10dS1raGFjL3h1YXQta2hvLXZhdC10dS1raGFjLXNoYXJlZC94dWF0LWtoby12YXQtdHUta2hhYy1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: XuatKhoVatTuKhacSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuKhacSharedComponent", function() { return XuatKhoVatTuKhacSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/chevron-right */ "./node_modules/@iconify/icons-ic/chevron-right.js");
/* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/last-page */ "./node_modules/@iconify/icons-ic/last-page.js");
/* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/chevron-left */ "./node_modules/@iconify/icons-ic/chevron-left.js");
/* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/first-page */ "./node_modules/@iconify/icons-ic/first-page.js");
/* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../xuat-kho-vat-tu-khac.model */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.model.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/enum/loai-kho.enum */ "./src/app/shared/enum/loai-kho.enum.ts");





















let XuatKhoVatTuKhacSharedComponent = class XuatKhoVatTuKhacSharedComponent {
    constructor(route, dialog, authService, apiService, notificationService) {
        this.route = route;
        this.dialog = dialog;
        this.authService = authService;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.yeuCauXuatKhoKhac = new _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_17__["XuatKhoVatTuKhac"]();
        this.yeuCauXuatKhoVatTuChiTietVoSearch = new _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauXuatKhoVatTuChiTietVoSearch"]();
        this.lstXuatKhoSearch = new Array();
        this.lstXuatKho = new Array();
        this.xuatKhoKhacGridDaDuyet = new _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_17__["XuatKhoKhacGridDaDuyet"]();
        this.disabled = false;
        this.popupLoadingData = null;
        this.yeuCauXuatKhacVatTuId = 0;
        this.icRight = _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icLeft = _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icRightLast = _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icLeftLast = _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.lstXuatKhoTheoNhom = [];
        this.addtionStringDefault = null;
        this.searchString = null;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.gridColumns = [];
        this.gridResultColumns = [];
        this.gridResultDaDuyetColumns = [];
        this.additionalSearchString = null;
        this.gridDataSourceVatTuKhac = {
            data: [],
            total: 0
        };
        this.sort = [{
                field: 'Ten',
                dir: 'desc'
            }];
        this.sLTonThucTe = 0;
        this.urlGetData = "XuatKhoVatTuKhac/GetDataForGridAsyncVatTuDaChon";
        this.urlGetTotal = "XuatKhoVatTuKhac/GetTotalPageForGridAsyncVatTuDaChon";
        this.urlGetDataDaDuyet = "XuatKhoVatTuKhac/GetDataForGridChildAsyncDaDuyet";
        this.urlGetTotalDaDuyet = "XuatKhoVatTuKhac/GetTotalPageForGridChildAsyncDaDuyet";
        this.groups = [{ field: 'TenNhom' }];
        this.validationErrors = [];
        this.id = 0;
        this.tinhTrang = 0;
        this.format = "n2";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_16__["DocumentType"].XuatKhoVatTuKhac;
        this.route.queryParams.subscribe(param => {
            this.id = param['Id'];
            this.tinhTrang = param['F'];
            if (!this.isCreate) {
                if (this.tinhTrang == 1) {
                    this.xuatKhoKhacGridDaDuyet.XuatKhoVatTuId = this.id;
                    var queryString = JSON.stringify(this.xuatKhoKhacGridDaDuyet);
                    this.addtionStringDefault = queryString;
                    this.getById(this.id, true);
                }
                else {
                    this.getById(this.id, false);
                }
            }
        });
        this.getCurrentUser();
        this.gridColumns = [
            { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
            { Field: "Ten", Title: "Vật tư", Width: 100, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
            { Field: "SoLuongTon", Title: "SL tồn", Width: 70, Sortable: false, Template: this.sLTonTemplate },
            { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: true, Template: this.soLuongXuatGrid1Template },
            { Field: "Id", Title: "", Width: 30, Sortable: true, Template: this.transferTemplate },
        ];
        this.gridResultColumns = [
            { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
            { Field: "Id", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
            { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
            { Field: "Ten", Title: "Vật tư", Width: 100, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
            { Field: "SoLuongTon", Title: "SL tồn", Width: 70, Sortable: false, Template: this.slTonThucTeTemplate },
            { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatGrid2Template },
        ];
        this.gridResultDaDuyetColumns = [
            { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
            { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
            { Field: "SoLuongXuat", Title: "SL Xuất", Width: 150, Sortable: false },
            { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
        ];
    }
    getCurrentUser() {
        if (this.isCreate) {
            this.yeuCauXuatKhoKhac.NgayXuat = new Date();
            this.apiService.get("YeuCauLinhDuocPham/GetCurrentUser").subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.yeuCauXuatKhoKhac.NguoiXuatId = resultData.NhanVienYeuCauId;
                    this.yeuCauXuatKhoKhac.TenNguoiXuat = resultData.HoTen;
                }
            });
        }
    }
    khoNhapChangeChange() {
        this.validationErrors = [];
    }
    onKeyGrid1(event) {
        if (event.key == "Enter") {
            this.TimkiemNangCao();
        }
    }
    onKeyGrid2(event) {
        if (event.key == "Enter") {
            this.timKiemGrid2();
        }
    }
    clearSearchGrid2(event) {
        if (event != undefined && (event == null || event == "")) {
            if (this.searchString2 == "" || this.searchString2 == null) {
                this.lstXuatKhoSearch = JSON.parse(JSON.stringify(this.lstXuatKho));
                this.setDataXuatKho();
            }
        }
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.TimkiemNangCao();
        }
    }
    dieuChuyenTungVatTuGrid1(dataItem) {
        this.validationErrors = [];
        this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.push(dataItem);
        this.lstXuatKhoSearch.push(dataItem);
        this.lstXuatKho.push(dataItem);
        this.timKiemGrid2();
    }
    dieuChuyenTungVatTuGrid2(dataItem) {
        this.validationErrors = [];
        this.lstXuatKho = this.lstXuatKho.filter(o => o != dataItem);
        this.lstXuatKhoSearch = this.lstXuatKhoSearch.filter(o => o != dataItem);
        this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.splice(this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.findIndex((x) => x == dataItem), 1);
        this.timKiemGrid2();
    }
    addingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closepopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    getById(id, trangThai) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].View)) {
            self.addingPage();
            if (trangThai) {
                self.apiService.get("XuatKhoVatTuKhac/GetXuatKhoVatTuKhac?id=" + id).subscribe(resultData => {
                    if (resultData != undefined && resultData != null) {
                        self.disabled = true;
                        self.closepopupLoadingData();
                        self.yeuCauXuatKhoKhac = resultData;
                    }
                }, (err) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    self.closepopupLoadingData();
                });
            }
            else {
                self.apiService.get("XuatKhoVatTuKhac/GetYeuCauXuatKhoVatTuKhac?id=" + id).subscribe(resultData => {
                    if (resultData != undefined && resultData != null) {
                        self.disabled = true;
                        self.closepopupLoadingData();
                        self.yeuCauXuatKhoKhac = resultData;
                        resultData.YeuCauXuatKhoVatTuChiTietHienThis.forEach(element => {
                            this.lstXuatKhoSearch.push(element);
                            this.lstXuatKho.push(element);
                            this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.push(element);
                        });
                        if (self.yeuCauXuatKhoKhac.TraNCC == true) {
                            self.yeuCauXuatKhoVatTuChiTietVoSearch.TraNCC = self.yeuCauXuatKhoKhac.TraNCC;
                            self.yeuCauXuatKhoVatTuChiTietVoSearch.NhaThauId = self.yeuCauXuatKhoKhac.NhaThauId;
                            self.yeuCauXuatKhoVatTuChiTietVoSearch.SoChungTu = self.yeuCauXuatKhoKhac.SoChungTu;
                        }
                        self.timKiemGrid2();
                    }
                }, (err) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    self.closepopupLoadingData();
                });
            }
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    timKiemGrid2() {
        if (this.searchString2 == undefined || this.searchString2 == null) {
            this.setDataXuatKho();
        }
        else {
            let search = this.searchString2.toLowerCase().trim();
            this.lstXuatKhoSearch = this.lstXuatKho.filter(o => o.Ten.toLowerCase().trim().indexOf(search) != -1
                || o.Ma.toLowerCase().trim().indexOf(search) != -1);
            this.setDataXuatKho();
        }
    }
    setDataXuatKho() {
        this.TimkiemNangCao();
        this.gridDataSourceVatTuKhac = [];
        let dataGrid = this.lstXuatKhoSearch;
        this.gridDataSourceVatTuKhac = {
            data: dataGrid,
            total: dataGrid.length,
        };
        if (this.gridDataSourceVatTuKhac.data.length > 0) {
            this.disabled = true;
        }
        else {
            this.disabled = false;
        }
        this.refreshGrid();
    }
    TimkiemNangCao() {
        this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = this.yeuCauXuatKhoKhac.KhoXuatId;
        if (this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId == undefined || this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId == null) {
            this.timKiemGrid2();
        }
        var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
        if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
            this.gridVatTuXuat._additionalSearchString = queryString;
            this.gridVatTuXuat.search();
        }
    }
    refreshGrid() {
        if (this.gridResult != undefined) {
            this.gridResult.setDataSource();
        }
    }
    dieuChuyenVatTuTheoNhomGrid(dataItem, gridNumber) {
        let model = {
            YeuCauXuatKhoVatTuChiTiets: dataItem.items
        };
        this.addingPage();
        this.apiService.post("XuatKhoVatTuKhac/XuatVatTuTheoNhom", model).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                resultData.YeuCauXuatKhoVatTuChiTiets.forEach((element) => {
                    if (gridNumber == 1) {
                        this.lstXuatKhoSearch.push(element);
                        this.lstXuatKho.push(element);
                        this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.push(element);
                    }
                    else {
                        this.lstXuatKho.splice(this.lstXuatKho.findIndex((x) => x.VatTuBenhVienId == element.VatTuBenhVienId
                            && x.Ten == element.Ten
                            && x.Ma == element.Ma
                            && x.DVT == element.DVT
                            && x.LaVatTuBHYT == element.LaVatTuBHYT
                            && x.HanSuDung == element.HanSuDung), 1);
                        this.lstXuatKhoSearch.splice(this.lstXuatKhoSearch.findIndex((x) => x.VatTuBenhVienId == element.VatTuBenhVienId
                            && x.Ten == element.Ten
                            && x.Ma == element.Ma
                            && x.DVT == element.DVT
                            && x.LaVatTuBHYT == element.LaVatTuBHYT
                            && x.HanSuDung == element.HanSuDung), 1);
                        this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.splice(this.yeuCauXuatKhoVatTuChiTietVoSearch.VatTuBenhViens.findIndex((x) => x.VatTuBenhVienId == element.VatTuBenhVienId
                            && x.Ten == element.Ten
                            && x.Ma == element.Ma
                            && x.DVT == element.DVT
                            && x.LaVatTuBHYT == element.LaVatTuBHYT
                            && x.HanSuDung == element.HanSuDung), 1);
                    }
                });
                this.closepopupLoadingData();
                this.timKiemGrid2();
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closepopupLoadingData();
        });
    }
    onKeyGrid3(event) {
        if (event.key == "Enter") {
            this.timKiem3();
        }
    }
    searchChanges3(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.timKiem3();
        }
    }
    timKiem3() {
        this.xuatKhoKhacGridDaDuyet.XuatKhoVatTuId = this.id;
        var queryString = JSON.stringify(this.xuatKhoKhacGridDaDuyet);
        if (this.gridVatTuXuatDaDuyet != undefined && this.gridVatTuXuatDaDuyet != null) {
            this.gridVatTuXuatDaDuyet._additionalSearchString = queryString;
            this.gridVatTuXuatDaDuyet.search();
        }
    }
    clearValidator() {
        this.validationErrors = [];
    }
    TooltipCustom(dataItem) {
        this.apiService.post("XuatKhoVatTuKhac/GetSoLuongTonThucTe", dataItem).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.sLTonThucTe = resultData;
            }
        });
    }
    khoXuatSelectChange(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.yeuCauXuatKhoKhac.LoaiKho = dataItem.LoaiKho;
            this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = dataItem.KeyId;
        }
        else {
            this.yeuCauXuatKhoKhac.LoaiKho = null;
            this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = null;
        }
        var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
        if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
            this.gridVatTuXuat._additionalSearchString = queryString;
            this.gridVatTuXuat.search();
        }
    }
    khoXuatModelChange(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = dataItem;
            this.apiService.get("XuatKhoDuocPhamKhac/GetLoaiKho?khoId=" + dataItem).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    if (resultData != undefined && resultData != null) {
                        if (this.yeuCauXuatKhoKhac.LoaiKho != src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__["EnumLoaiKho"].KhoTongVTYTCap1
                            && this.yeuCauXuatKhoKhac.LoaiKho != src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__["EnumLoaiKho"].KhoTongDuocPhamCap2
                            && this.yeuCauXuatKhoKhac.LoaiKho != src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__["EnumLoaiKho"].KhoTongVTYTCap2
                            && this.yeuCauXuatKhoKhac.LoaiKho != src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_20__["EnumLoaiKho"].NhaThuoc) {
                            this.yeuCauXuatKhoKhac.LoaiKho = resultData;
                        }
                    }
                }
            });
        }
        else {
            this.yeuCauXuatKhoKhac.LoaiKho = null;
            this.yeuCauXuatKhoVatTuChiTietVoSearch.KhoXuatId = null;
        }
        var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
        if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
            this.gridVatTuXuat._additionalSearchString = queryString;
            this.gridVatTuXuat.search();
        }
    }
    traNCCChange(event) {
        if (event != true) {
            this.yeuCauXuatKhoKhac.NhaThauId = null;
            this.yeuCauXuatKhoVatTuChiTietVoSearch.NhaThauId = this.yeuCauXuatKhoKhac.NhaThauId;
            this.yeuCauXuatKhoVatTuChiTietVoSearch.SoChungTu = null;
            var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
            if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
                this.gridVatTuXuat._additionalSearchString = queryString;
                this.gridVatTuXuat.search();
            }
        }
    }
    nhaThauChange() {
        this.yeuCauXuatKhoKhac.NhapKhoVatTuId = null;
    }
    soHoaDonChange(data) {
        this.yeuCauXuatKhoVatTuChiTietVoSearch.TraNCC = this.yeuCauXuatKhoKhac.TraNCC;
        this.yeuCauXuatKhoVatTuChiTietVoSearch.NhaThauId = this.yeuCauXuatKhoKhac.NhaThauId;
        if (data != undefined && data != null) {
            this.yeuCauXuatKhoVatTuChiTietVoSearch.SoChungTu = data.DisplayName;
            this.yeuCauXuatKhoKhac.SoChungTu = data.DisplayName;
        }
        else {
            this.yeuCauXuatKhoVatTuChiTietVoSearch.SoChungTu = null;
            this.yeuCauXuatKhoKhac.SoChungTu = null;
        }
        var queryString = JSON.stringify(this.yeuCauXuatKhoVatTuChiTietVoSearch);
        if (this.gridVatTuXuat != undefined && this.gridVatTuXuat != null) {
            this.gridVatTuXuat._additionalSearchString = queryString;
            this.gridVatTuXuat.search();
        }
    }
    getSharedData() {
        this.yeuCauXuatKhoKhac.YeuCauXuatKhoVatTuChiTiets = new Array();
        this.lstXuatKho.forEach(element => {
            let yeuCauXuatKhoKhacChiTiet = new _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauXuatKhoVatTuChiTiet"]();
            yeuCauXuatKhoKhacChiTiet.Id = element.Id;
            yeuCauXuatKhoKhacChiTiet.VatTuBenhVienId = element.VatTuBenhVienId;
            yeuCauXuatKhoKhacChiTiet.LaVatTuBHYT = element.LaVatTuBHYT;
            yeuCauXuatKhoKhacChiTiet.SoLuongXuat = element.SoLuongXuat;
            yeuCauXuatKhoKhacChiTiet.KhoXuatId = this.yeuCauXuatKhoKhac.KhoXuatId;
            yeuCauXuatKhoKhacChiTiet.SoLo = element.SoLo;
            yeuCauXuatKhoKhacChiTiet.Ma = element.Ma;
            yeuCauXuatKhoKhacChiTiet.HanSuDung = element.HanSuDung;
            this.yeuCauXuatKhoKhac.YeuCauXuatKhoVatTuChiTiets.push(yeuCauXuatKhoKhacChiTiet);
        });
        return this.yeuCauXuatKhoKhac;
    }
};
XuatKhoVatTuKhacSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTuXuat', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], static: false })
], XuatKhoVatTuKhacSharedComponent.prototype, "gridVatTuXuat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridResult', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], static: false })
], XuatKhoVatTuKhacSharedComponent.prototype, "gridResult", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTuXuatDaDuyet', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], static: false })
], XuatKhoVatTuKhacSharedComponent.prototype, "gridVatTuXuatDaDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhom2GroupHeaderTemplate', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "tenNhom2GroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "transferTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate2', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "transferTemplate2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatGrid1Template', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "soLuongXuatGrid1Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatGrid2Template', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "soLuongXuatGrid2Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatDaDuyetTemplate', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "soLuongXuatDaDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "hsdTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slTonThucTeTemplate', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "slTonThucTeTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sLTonTemplate', { static: true })
], XuatKhoVatTuKhacSharedComponent.prototype, "sLTonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], XuatKhoVatTuKhacSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], XuatKhoVatTuKhacSharedComponent.prototype, "validationErrors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], XuatKhoVatTuKhacSharedComponent.prototype, "trangThaiVo", void 0);
XuatKhoVatTuKhacSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-vat-tu-khac-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-vat-tu-khac-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-vat-tu-khac-shared.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.scss")).default]
    })
], XuatKhoVatTuKhacSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveHVhdC1raG8tdmF0LXR1LWtoYWMveHVhdC1raG8tdmF0LXR1LWtoYWMtdXBkYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHh1YXQta2hvLXZhdC10dS1raGFjXFx4dWF0LWtoby12YXQtdHUta2hhYy11cGRhdGVcXHh1YXQta2hvLXZhdC10dS1raGFjLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveHVhdC1raG8tdmF0LXR1LWtoYWMveHVhdC1raG8tdmF0LXR1LWtoYWMtdXBkYXRlL3h1YXQta2hvLXZhdC10dS1raGFjLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3h1YXQta2hvLXZhdC10dS1raGFjL3h1YXQta2hvLXZhdC10dS1raGFjLXVwZGF0ZS94dWF0LWtoby12YXQtdHUta2hhYy11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: XuatKhoVatTuKhacUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuKhacUpdateComponent", function() { return XuatKhoVatTuKhacUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../xuat-kho-vat-tu-khac.model */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.model.ts");
/* harmony import */ var _yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_shared_xuat_kho_vat_tu_khac_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");



















let XuatKhoVatTuKhacUpdateComponent = class XuatKhoVatTuKhacUpdateComponent {
    constructor(apiService, dialog, notificationService, authService, route, router, ref, location) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.ref = ref;
        this.location = location;
        this.xuatKhoKhac = new _xuat_kho_vat_tu_khac_model__WEBPACK_IMPORTED_MODULE_8__["XuatKhoVatTuKhac"]();
        this.validationErrors = [];
        this.popupSavingData = null;
        this.popupLoadingData = null;
        this.isCreate = false;
        this.trangThaiVo = new _yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_9__["TrangThaiTaoPhieuLinh"]();
        this.id = 0;
        this.tinhTrang = 0;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XuatKhoVatTuKhac;
        this.route.queryParams.subscribe(param => {
            this.id = param['Id'];
            this.tinhTrang = parseInt(param['F']);
            if (this.tinhTrang == 1) {
                this.trangThaiVo.Ten = 'Đã duyệt xuất';
                this.trangThaiVo.TrangThai = true;
            }
            else {
                this.trangThaiVo.Ten = 'Chờ duyệt';
                this.trangThaiVo.TrangThai = null;
            }
        });
    }
    savingPage() {
        this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closepopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    update() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.xuatKhoKhac = self.shared.getSharedData();
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn lưu dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                    self.savingPage();
                    self.apiService.post("XuatKhoVatTuKhac/CapNhatYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe((resultData) => {
                        self.closepopupSavingData();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        window.location.reload();
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closepopupSavingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    duyetXuat() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.xuatKhoKhac = self.shared.getSharedData();
        self.xuatKhoKhac.LaLuuDuyet = true;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn duyệt xuất dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                    self.savingPage();
                    self.apiService.post("XuatKhoVatTuKhac/CapNhatYeuCauXuatVatTuKhac", self.xuatKhoKhac).subscribe((resultData) => {
                        self.closepopupSavingData();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        let url = '/xem-chi-tiet';
                        self.router.navigate(["/nhap-xuat/vat-tu/xuat-kho-khac" + url], { queryParams: { Id: resultData.Id, F: 1 } });
                        // window.location.reload();
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closepopupSavingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    cancel() {
        // this.location.back();
        this.router.navigateByUrl('nhap-xuat/vat-tu/xuat-kho-khac?holdQuery=true');
    }
};
XuatKhoVatTuKhacUpdateComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTu', { static: true })
], XuatKhoVatTuKhacUpdateComponent.prototype, "gridVatTu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _xuat_kho_vat_tu_khac_shared_xuat_kho_vat_tu_khac_shared_component__WEBPACK_IMPORTED_MODULE_10__["XuatKhoVatTuKhacSharedComponent"], static: false })
], XuatKhoVatTuKhacUpdateComponent.prototype, "shared", void 0);
XuatKhoVatTuKhacUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-vat-tu-khac-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-vat-tu-khac-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_6__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-vat-tu-khac-update.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.scss")).default]
    })
], XuatKhoVatTuKhacUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.model.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.model.ts ***!
  \**************************************************************************************************/
/*! exports provided: XuatKhoVatTuKhac, YeuCauXuatKhoVatTuChiTiet, YeuCauXuatKhoVatTuChiTietVoSearch, XuatKhacVatTuBenhVienChiTietVo, YeuCauXuatKhoVatTuGridVo, XuatKhoKhacGrid, XuatKhoKhacGridDaDuyet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuKhac", function() { return XuatKhoVatTuKhac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauXuatKhoVatTuChiTiet", function() { return YeuCauXuatKhoVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauXuatKhoVatTuChiTietVoSearch", function() { return YeuCauXuatKhoVatTuChiTietVoSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhacVatTuBenhVienChiTietVo", function() { return XuatKhacVatTuBenhVienChiTietVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauXuatKhoVatTuGridVo", function() { return YeuCauXuatKhoVatTuGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacGrid", function() { return XuatKhoKhacGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKhacGridDaDuyet", function() { return XuatKhoKhacGridDaDuyet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class XuatKhoVatTuKhac {
    constructor(Id = 0, KhoXuatId = null, TenKhoXuat = null, NguoiXuatId = null, TenNguoiXuat = null, NguoiNhanId = null, TenNguoiNhan = null, LyDoXuatKho = null, NhanVienDuyetId = null, TenNhanVienDuyet = null, NgayDuyet = null, NgayXuat = null, LaLuuDuyet = false, TraNCC = null, DuocDuyet = null, LoaiKho = null, NhaThauId = null, TenNhaThau = null, NhapKhoVatTuId = null, SoChungTu = null, YeuCauXuatKhoVatTuChiTiets = [], YeuCauXuatKhoVatTuChiTietHienThis = []) {
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
        this.NhapKhoVatTuId = NhapKhoVatTuId;
        this.SoChungTu = SoChungTu;
        this.YeuCauXuatKhoVatTuChiTiets = YeuCauXuatKhoVatTuChiTiets;
        this.YeuCauXuatKhoVatTuChiTietHienThis = YeuCauXuatKhoVatTuChiTietHienThis;
    }
}
class YeuCauXuatKhoVatTuChiTiet {
    constructor(Id = 0, SoLuongXuat = null, VatTuBenhVienId = null, LaVatTuBHYT = null, KhoXuatId = null, Ten = null, Ma = null, SoLo = null, HanSuDung = null) {
        this.Id = Id;
        this.SoLuongXuat = SoLuongXuat;
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.KhoXuatId = KhoXuatId;
        this.Ten = Ten;
        this.Ma = Ma;
        this.SoLo = SoLo;
        this.HanSuDung = HanSuDung;
    }
}
class YeuCauXuatKhoVatTuChiTietVoSearch {
    constructor(KhoXuatId = null, SearchString = null, NhaThauId = null, SoChungTu = null, TraNCC = null, VatTuBenhViens = []) {
        this.KhoXuatId = KhoXuatId;
        this.SearchString = SearchString;
        this.NhaThauId = NhaThauId;
        this.SoChungTu = SoChungTu;
        this.TraNCC = TraNCC;
        this.VatTuBenhViens = VatTuBenhViens;
    }
}
class XuatKhacVatTuBenhVienChiTietVo {
    constructor(VatTuBenhVienId = null, Ten = null, Ma = null, LaVatTuBHYT = null, SoLo = null) {
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.Ten = Ten;
        this.Ma = Ma;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.SoLo = SoLo;
    }
}
class YeuCauXuatKhoVatTuGridVo {
    constructor(Id = null, VatTuBenhVienId = null, Ten = null, DVT = null, LaVatTuBHYT = null, Loai = null, SoLuongTon = null, SoLuongTonDisplay = null, SoLuongXuat = null, NhomVatTuId = null, TenNhom = null, Ma = null, SoLo = null, HanSuDung = null) {
        this.Id = Id;
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.Ten = Ten;
        this.DVT = DVT;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.Loai = Loai;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongTonDisplay = SoLuongTonDisplay;
        this.SoLuongXuat = SoLuongXuat;
        this.NhomVatTuId = NhomVatTuId;
        this.TenNhom = TenNhom;
        this.Ma = Ma;
        this.SoLo = SoLo;
        this.HanSuDung = HanSuDung;
    }
}
class XuatKhoKhacGrid {
    constructor(NgayXuatTuFormat = null, NgayXuatDenFormat = null, ChoDuyet = true, DaDuyet = true, TuNgay = null, DenNgay = null, SearchString = null, RangeFromDate = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"]()) {
        this.NgayXuatTuFormat = NgayXuatTuFormat;
        this.NgayXuatDenFormat = NgayXuatDenFormat;
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.SearchString = SearchString;
        this.RangeFromDate = RangeFromDate;
    }
}
class XuatKhoKhacGridDaDuyet {
    constructor(XuatKhoVatTuId = null, SearchString = null) {
        this.XuatKhoVatTuId = XuatKhoVatTuId;
        this.SearchString = SearchString;
    }
}


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: XuatKhoVatTuKhacModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuKhacModule", function() { return XuatKhoVatTuKhacModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _xuat_kho_vat_tu_khac_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuat-kho-vat-tu-khac-routing.module */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-routing.module.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_list_xuat_kho_vat_tu_khac_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_create_xuat_kho_vat_tu_khac_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_update_xuat_kho_vat_tu_khac_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_shared_xuat_kho_vat_tu_khac_shared_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _xuat_kho_vat_tu_khac_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./xuat-kho-vat-tu-khac.service */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.service.ts");
/* harmony import */ var _duoc_pham_xuat_kho_khac_xuat_kho_khac_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../duoc-pham/xuat-kho-khac/xuat-kho-khac.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.module.ts");























let XuatKhoVatTuKhacModule = class XuatKhoVatTuKhacModule {
};
XuatKhoVatTuKhacModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_xuat_kho_vat_tu_khac_list_xuat_kho_vat_tu_khac_list_component__WEBPACK_IMPORTED_MODULE_4__["XuatKhoVatTuKhacListComponent"], _xuat_kho_vat_tu_khac_create_xuat_kho_vat_tu_khac_create_component__WEBPACK_IMPORTED_MODULE_5__["XuatKhoVatTuKhacCreateComponent"], _xuat_kho_vat_tu_khac_update_xuat_kho_vat_tu_khac_update_component__WEBPACK_IMPORTED_MODULE_6__["XuatKhoVatTuKhacUpdateComponent"], _xuat_kho_vat_tu_khac_shared_xuat_kho_vat_tu_khac_shared_component__WEBPACK_IMPORTED_MODULE_7__["XuatKhoVatTuKhacSharedComponent"], _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_19__["XuatKhoInPhieuPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_14__["InputsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_18__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
            _xuat_kho_vat_tu_khac_routing_module__WEBPACK_IMPORTED_MODULE_3__["XuatKhoVatTuKhacRoutingModule"],
            _duoc_pham_xuat_kho_khac_xuat_kho_khac_module__WEBPACK_IMPORTED_MODULE_22__["XuatKhoKhacModule"]
        ], entryComponents: [
            _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_19__["XuatKhoInPhieuPopupComponent"]
        ],
        providers: [
            _xuat_kho_vat_tu_khac_service__WEBPACK_IMPORTED_MODULE_21__["XuatKhoVatTuKhacService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_20__["BaseService"], useClass: _xuat_kho_vat_tu_khac_service__WEBPACK_IMPORTED_MODULE_21__["XuatKhoVatTuKhacService"] },
        ]
    })
], XuatKhoVatTuKhacModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: XuatKhoVatTuKhacService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuKhacService", function() { return XuatKhoVatTuKhacService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let XuatKhoVatTuKhacService = class XuatKhoVatTuKhacService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'XuatKhoVatTuKhac';
    }
};
XuatKhoVatTuKhacService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
XuatKhoVatTuKhacService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XuatKhoVatTuKhacService);



/***/ })

}]);
//# sourceMappingURL=nhap-xuat-vat-tu-xuat-kho-vat-tu-khac-xuat-kho-vat-tu-khac-module-es2015.js.map