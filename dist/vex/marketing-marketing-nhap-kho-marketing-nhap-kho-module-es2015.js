(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketing-marketing-nhap-kho-marketing-nhap-kho-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-block.js":
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-block.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Marketing',Path:''}\n                    ,{Title:'Nhập kho',Path:'/danh-muc/marketing/nhap-kho-marketing', queryParams: {holdQuery : true}}\n                    ,{Title:'Nhập kho Chi Tiết',Path:'', Active:true} \n                    ]\">\n            </vex-breadcrumbs>\n\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <div class=\"row mb-3\"></div>\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                            class=\"paddingThemQuaTang\">\n                            <app-textbox id=\"soPX\" fxFlex=\"18%\" [required]=\"true\"\n                                [(model)]=\"nhapKhoChiTietMarketing.SoChungTu\" maxlength=\"50\" label=\"Số chứng từ\">\n                            </app-textbox>\n                            <app-combobox id=\"NguoiNhap\" fxFlex=\"18%\" [required]=\"true\"\n                                url=\"Marketing/GetNhanVienTaiBenhVien\" [(model)]=\"nhapKhoChiTietMarketing.NguoiNhapId\"\n                                [modelText]=\"nhapKhoChiTietMarketing.TenNguoiNhap\" label=\"Người nhập\"\n                                class=\"item-no-padding\" [disabled]=\"true\">\n                            </app-combobox>\n                            <app-radio id=\"LoaiNguoiGiao\" fxFlex=\"28%\" label=\"Loại người giao\"\n                                [(model)]=\"nhapKhoChiTietMarketing.LoaiNguoiGiao\" [required]=\"true\"\n                                [items]=\"[{Value:1,Text:'Trong hệ thống'},{Value:2,Text:'Ngoài hệ thống'}]\">\n                            </app-radio>\n                            <app-combobox id=\"NhanVienTaiBenhVien\" fxFlex=\"18%\" [required]=\"true\" [required]=\"true\"\n                                url=\"Marketing/GetNhanVienTaiBenhVien\"\n                                [(model)]=\"nhapKhoChiTietMarketing.NhanVienGiaoId\"\n                                [modelText]=\"nhapKhoChiTietMarketing.TenNguoiGiao\" label=\"Tên người giao\"\n                                class=\"item-no-padding\">\n                            </app-combobox>\n\n                            <app-datepicker id=\"ngaynhap\" fxFlex=\"18%\" [required]=\"true\"\n                                [(model)]=\"nhapKhoChiTietMarketing.NgayNhap\" disabled={{true}} label=\"Ngày nhập\">\n                            </app-datepicker>\n                            <span fxFlex=\"100%\"><b>THÔNG TIN QUÀ TẶNG</b></span>\n                            <app-textbox id=\"NhaCungCap\" fxFlex=\"18%\" [required]=\"true\"\n                                [(model)]=\"nhapKhoChiTietMarketing.NhaCungCap\" maxlength=\"50\" label=\"Nhà cung cấp\">\n                            </app-textbox>\n                            <app-combobox id=\"QuaTang\" fxFlex=\"21%\" [required]=\"true\"\n                                url=\"Marketing/GetListQuaTang\"\n                                [(model)]=\"nhapKhoChiTietMarketing.QuaTang\"\n                                [modelText]=\"nhapKhoChiTietMarketing.QuaTang\" \n                                (selectionChange)=\"ChangeQuaTang($event)\"\n                                label=\"Quà Tặng\" class=\"item-no-padding\">\n                            </app-combobox>\n                            <app-textbox id=\"DVT\" fxFlex=\"10%\" [required]=\"true\"\n                                [(model)]=\"nhapKhoChiTietMarketing.DonViTinh\" maxlength=\"50\" label=\"Đơn vị tính\"\n                                [disabled]=\"true\">\n                            </app-textbox>\n                            <app-textboxnumeric fxFlex=\"12%\" label=\"Số lượng\" (modelChange)=\"modelChangeSoLuong($event)\"\n                                [(model)]=\"nhapKhoChiTietMarketing.SoLuong\" [required]=\"true\">\n                            </app-textboxnumeric>\n                            <app-textboxnumeric fxFlex=\"12%\" label=\"Giá nhập\" (modelChange)=\"modelChangeGiaNhap($event)\"\n                                [(model)]=\"nhapKhoChiTietMarketing.GiaNhap\" [required]=\"true\">\n                            </app-textboxnumeric>\n\n                            <app-textboxnumeric fxFlex=\"12%\" label=\"Thành tiền\"\n                                [(model)]=\"nhapKhoChiTietMarketing.ThanhTien\" [disabled]=\"true\">\n                            </app-textboxnumeric>\n                            <div fxFlex=\"15%\">\n                                <div style=\"padding-top: 11px !important;\">\n                                    <button type=\"button\" style=\"margin-right: 5px;\" mat-raised-button mat-button\n                                        (click)=\"Huy()\">\n                                        Hủy\n                                    </button>\n                                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button (click)=\"Them()\">\n                                        Thêm\n                                    </button>\n                                </div>\n                            </div>\n\n                            <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n                                #gridCreate [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSource\"\n                                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n                                [pageable]=\"false\" [groups]=\"groups\">\n                            </app-grid>\n                            <ng-template #thanhTienTemplate let-dataItem>\n                                <span>{{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n                            <ng-template #soLuongTemplate let-dataItem>\n                                <app-textboxnumeric class=\"no-label numeric-in-grid\"\n                                (modelChange)=\"modelChangeSoLuongMua($event , dataItem)\"\n                                [(model)]=\"dataItem.SoLuong\">\n                            </app-textboxnumeric>\n                            </ng-template>\n                            <ng-template #giaNhapTemplate let-dataItem>\n                                <app-textboxnumeric class=\"no-label numeric-in-grid\"\n                                (modelChange)=\"modelChangeGiaNhapMua($event , dataItem)\"\n                                [(model)]=\"dataItem.GiaNhap\">\n                            </app-textboxnumeric>\n                            </ng-template>\n                            <ng-template #TongCongFooter let-dataItem>\n                                <span style=\"color:blue\">Tổng cộng :</span>\n                            </ng-template>\n                            <ng-template #TongCongThanhTienFooter let-dataItem>\n                                <span style=\"color:blue\">{{TongCong | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n                            <ng-template #actionemplate let-dataItem>\n                                <button type=\"button\" class=\"float-right\" mat-raised-button mat-button (click)=\"Xoa(dataItem)\" style=\"background-color: red;color: white;\">\n                                    Xóa\n                                </button>\n                            </ng-template>\n                            <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n\n                            <div fxFlex=\"100%\">\n                                <button type=\"button\" class=\"float-right\" style=\"margin-right: 5px;\" color=\"primary\"\n                                    mat-raised-button mat-button (click)=\"Luu()\">\n                                    Lưu\n                                </button>\n                                <button type=\"button\" class=\"float-right\" mat-raised-button mat-button (click)=\"Huy()\">\n                                    Hủy\n                                </button>\n                            </div>\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Marketing',Path:''}\n    ,{Title:'Nhập kho',Path:''}\n    ,{Title:'Nhập kho Chi Tiết',Path:'/marketing/nhap-kho-marketing', queryParams: {holdQuery : true}, Active:true} \n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Nhập Kho Quà Tặng</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-marketing-nhap-kho-shared ></app-marketing-nhap-kho-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Marketing',Path:''}\n                ,{Title:'Nhập kho',Path:'/marketing/nhap-kho-marketing', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [searchString]=\"nhapKhoMarketing.SearchString\"\n                [sort]=\"sort\" urlGetData=\"Marketing/GetDSNhapKhoMarketingDataForGridAsync\"\n                [additionalSearchString]=\"addtionStringDefault\"\n                urlGetTotalPage=\"Marketing/GetDSNhapKhoMarketingTotalPageForGridAsync\" [headerTemplate]=\"headerTemplate\"\n                [checkboxAble]=\"false\">\n\n                <ng-template #ngayNhapTemplate let-dataItem>\n                    {{dataItem.NgayNhapDisplay}}\n                </ng-template>\n                <ng-template #chiTietTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"view(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                                {{dataItem.SoPhieu}}</p>\n                        </a>\n                    </div>\n                </ng-template>\n            </app-grid>\n\n        </div>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"nhapKhoMarketing.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n                <app-datetimepicker fxFlex=\"205px\" [(model)]=\"nhapKhoMarketing.NgayNhapTuFormat\" #tiepnhantu\n                    id=\"NgayNhapTuFormat\" (modelChange)=\"TimkiemNangCao()\" label=\"Từ ngày\" class=\"ml-2 on-header\"\n                    (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n                <app-datetimepicker fxFlex=\"205px\" [(model)]=\"nhapKhoMarketing.NgayNhapDenFormat\" #tiepnhanden\n                    id=\"NgayNhapDenFormat\" (modelChange)=\"TimkiemNangCao()\" label=\"Đến ngày\" class=\"ml-2 on-header\"\n                    (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n                <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button>\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-6\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\" style=\"margin-right: -65px;\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n                <button class=\"ml-4 right\" style=\"right: 0px;\" type=\"button\" mat-icon-button (click)=\"XuatExcel()\"\n                    kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n\n                <button class=\"ml-3\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\"\n                    (click)=\"gridChild.navigate('/marketing/nhap-kho-marketing/them',168,3)\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n            </div>\n        </ng-template>\n        <ng-template #acTionTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button (click)=\"Edit(dataItem)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                        <span>Sửa</span>\n                    </button>\n                    <button (click)=\"Delete(dataItem)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                        <span>Xóa</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    class=\"paddingThemQuaTang\">\n    <app-textbox id=\"soPX\" fxFlex=\"18%\" [required]=\"true\" [(model)]=\"nhapKhoChiTietMarketing.SoChungTu\" maxlength=\"50\"\n        label=\"Số chứng từ\" [validationerror]=\"'SoChungTu' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-textbox id=\"NguoiNhap\" fxFlex=\"18%\" [required]=\"true\" [(model)]=\"nhapKhoChiTietMarketing.TenNguoiNhap\"\n        bind=\"true\" label=\"Người nhập\" class=\"item-no-padding\" [disabled]=\"true\"\n        [validationerror]=\"'NguoiNhap' | validationerror:validationErrors\">\n    </app-textbox>\n    <!-- <app-combobox id=\"NguoiNhap\" fxFlex=\"18%\" [required]=\"true\"\n         [(model)]=\"nhapKhoChiTietMarketing.NguoiNhapId\" bind=\"true\"\n        [modelText]=\"nhapKhoChiTietMarketing.TenNguoiNhap\" label=\"Người nhập\"\n        class=\"item-no-padding\" [disabled]=\"true\">\n    </app-combobox> -->\n    <app-radio id=\"LoaiNguoiGiao\" fxFlex=\"28%\" label=\"Loại người giao\" [(model)]=\"nhapKhoChiTietMarketing.LoaiNguoiGiao\"\n        [required]=\"true\" [items]=\"[{Value:1,Text:'Trong hệ thống'},{Value:2,Text:'Ngoài hệ thống'}]\" (modelChange)=\"ChangLoaiNguoiGiao($event)\">\n    </app-radio>\n    <app-combobox id=\"NhanVienTaiBenhVien\"  fxFlex=\"18%\" [required]=\"true\" [required]=\"true\"  \n        *ngIf=\"nhapKhoChiTietMarketing.LoaiNguoiGiao ==1\" url=\"Marketing/GetNhanVienTaiBenhVien\"\n        [(model)]=\"nhapKhoChiTietMarketing.NguoiGiaoId\" [modelText]=\"nhapKhoChiTietMarketing.TenNguoiGiao\"\n        label=\"Tên người giao\" class=\"item-no-padding\" (selectionChange)=\"NhanVienTaiBenhVien($event)\"\n        [validationerror]=\"'TenNguoiGiao' | validationerror:validationErrors\"\n        >\n    </app-combobox>\n    <app-textbox id=\"NguoiGiaoId\" fxFlex=\"18%\" [required]=\"true\" [(model)]=\"nhapKhoChiTietMarketing.TenNguoiGiao\"\n        maxlength=\"100\" bind=\"true\" label=\"Tên người giao\" class=\"item-no-padding\"\n        *ngIf=\"nhapKhoChiTietMarketing.LoaiNguoiGiao ==2\"\n        [validationerror]=\"'TenNguoiGiao' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-datepicker id=\"ngaynhap\" fxFlex=\"18%\" [required]=\"true\" [(model)]=\"nhapKhoChiTietMarketing.NgayNhap\"\n        disabled={{true}} label=\"Ngày nhập\" [validationerror]=\"'NgayNhap' | validationerror:validationErrors\">\n    </app-datepicker>\n    <span fxFlex=\"100%\"><b>THÔNG TIN QUÀ TẶNG</b></span>\n    <app-textbox id=\"NhaCungCap\" fxFlex=\"18%\" [required]=\"true\" [(model)]=\"nhapKhoChiTietMarketing.NhaCungCap\"\n        maxlength=\"50\" label=\"Nhà cung cấp\" [validationerror]=\"'NhaCungCap' | validationerror:validationErrorsChiTiet\">\n    </app-textbox>\n    <app-combobox id=\"QuaTang\" fxFlex=\"21%\" [required]=\"true\" url=\"Marketing/GetListQuaTang\" #marketingCombobox\n        [(model)]=\"nhapKhoChiTietMarketing.QuaTangId\" [modelText]=\"nhapKhoChiTietMarketing.QuaTang\"\n        (selectionChange)=\"ChangeQuaTang($event)\" label=\"Quà Tặng\" class=\"item-no-padding\"\n        [validationerror]=\"'QuaTangId' | validationerror:validationErrorsChiTiet\" popupSettings=\"null\" (keyup)=\"onKeyEnterAddItem($event)\" (openCombobox)=\"openCombobox($event)\">\n    </app-combobox>\n    <app-textbox id=\"DVT\" fxFlex=\"10%\" [(model)]=\"nhapKhoChiTietMarketing.DonViTinh\" maxlength=\"50\" label=\"Đơn vị tính\"\n        [disabled]=\"true\">\n    </app-textbox>\n    <app-textboxnumeric fxFlex=\"12%\" label=\"Số lượng\" (modelChange)=\"modelChangeSoLuong($event)\"\n        [(model)]=\"nhapKhoChiTietMarketing.SoLuongNhap\" [required]=\"true\" max=\"1000000\" min=\"1\" (keyup)=\"onKey($event)\"\n        [validationerror]=\"'SoLuongNhap' | validationerror:validationErrorsChiTiet\">\n\n    </app-textboxnumeric>\n    <app-textboxnumeric fxFlex=\"12%\" label=\"Giá nhập\" (modelChange)=\"modelChangeGiaNhap($event)\"\n        [(model)]=\"nhapKhoChiTietMarketing.DonGiaNhap\" [required]=\"true\" max=\"1000000\" min=\"1\"\n        [validationerror]=\"'DonGiaNhap' | validationerror:validationErrorsChiTiet\" (keyup)=\"onKey($event)\">\n    </app-textboxnumeric>\n\n    <app-textboxnumeric fxFlex=\"12%\" label=\"Thành tiền\"  max=\"9999999999999999\"[(model)]=\"nhapKhoChiTietMarketing.ThanhTien\" [disabled]=\"true\">\n    </app-textboxnumeric>\n    <div fxFlex=\"15%\">\n        <div style=\"padding-top: 11px !important;\">\n            <button type=\"button\" style=\"margin-right: 5px;\" mat-raised-button mat-button (click)=\"Huy()\">\n                Hủy\n            </button>\n            <button type=\"button\" color=\"primary\" mat-raised-button mat-button (click)=\"Them()\">\n                Thêm\n            </button>\n        </div>\n    </div>\n\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\" #gridCreate\n        [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        maxHeight=\"500\" [pageable]=\"false\">\n    </app-grid>\n    <ng-template #thanhTienTemplate let-dataItem>\n        <span>{{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n    <ng-template #soLuongTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric class=\"no-label numeric-in-grid\" (modelChange)=\"modelChangeSoLuongMua($event ,dataItem)\"\n            [(model)]=\"dataItem.SoLuongNhap\" max=\"1000000\" min=\"1\"\n            [validationerror]=\"'DanhSachQuaTangDuocThemList['+rowIndex+'].SoLuongNhap' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n    </ng-template>\n    <ng-template #giaNhapTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric class=\"no-label numeric-in-grid\" (modelChange)=\"modelChangeGiaNhapMua($event , dataItem)\"\n            [(model)]=\"dataItem.DonGiaNhap\" max=\"1000000\" min=\"1\"\n            [validationerror]=\"'DanhSachQuaTangDuocThemList['+rowIndex+'].DonGiaNhap' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n    </ng-template>\n    <ng-template #TongCongFooter let-dataItem>\n        <span style=\"color:blue\">Tổng cộng :</span>\n    </ng-template>\n    <ng-template #TongCongThanhTienFooter let-dataItem>\n        <span style=\"color:blue\">{{TongCong | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n    <ng-template #actionemplate let-dataItem>\n        <!-- <button type=\"button\" class=\"float-right\" mat-raised-button mat-button (click)=\"Xoa(dataItem)\">\n            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n        </button> -->\n        <div class=\"text-center\" kendoTooltip>\n            <button style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"Xoa(dataItem)\">\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n    <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n{Title:'Marketing',Path:''}\n,{Title:'Nhập kho',Path:''}\n,{Title:'Nhập kho Chi Tiết',Path:'/marketing/nhap-kho-marketing', queryParams: {holdQuery : true}, Active:true} \n]\" [isicMoreVert]=\"false\"></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Nhập Kho Quà Tặng</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-marketing-nhap-kho-shared></app-marketing-nhap-kho-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".paddingThemQuaTang {\n  padding: 5px 16px 22px 13px !important;\n}\n\n.paddingThemHuy {\n  padding-top: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL21hcmtldGluZy9tYXJrZXRpbmctbmhhcC1raG8vbWFya2V0aW5nLW5oYXAta2hvLWNoaS10aWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbWFya2V0aW5nXFxtYXJrZXRpbmctbmhhcC1raG9cXG1hcmtldGluZy1uaGFwLWtoby1jaGktdGlldFxcbWFya2V0aW5nLW5oYXAta2hvLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbWFya2V0aW5nL21hcmtldGluZy1uaGFwLWtoby9tYXJrZXRpbmctbmhhcC1raG8tY2hpLXRpZXQvbWFya2V0aW5nLW5oYXAta2hvLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbWFya2V0aW5nL21hcmtldGluZy1uaGFwLWtoby9tYXJrZXRpbmctbmhhcC1raG8tY2hpLXRpZXQvbWFya2V0aW5nLW5oYXAta2hvLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmdUaGVtUXVhVGFuZyB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDIycHggMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucGFkZGluZ1RoZW1IdXkge1xuICBwYWRkaW5nLXRvcDogMTFweDtcbn0iLCIucGFkZGluZ1RoZW1RdWFUYW5nIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjJweCAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkaW5nVGhlbUh1eSB7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: MarketingNhapKhoChiTietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKhoChiTietComponent", function() { return MarketingNhapKhoChiTietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _marketing_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../marketing.model */ "./src/app/modules/main/marketing/marketing.model.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");












let MarketingNhapKhoChiTietComponent = class MarketingNhapKhoChiTietComponent {
    constructor(apiService, authService, router, notificationService, dialog, route, location) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.route = route;
        this.location = location;
        this.gridColumns = [];
        this.gridDataSource = {};
        this.additionString = null;
        this.TongCong = 0;
    }
    ngOnInit() {
        this.nhapKhoChiTietMarketing = new _marketing_model__WEBPACK_IMPORTED_MODULE_7__["MarketingNhapKhoChiTiet"]();
        this.danhSachCanThemMarketing = new _marketing_model__WEBPACK_IMPORTED_MODULE_7__["DanhSachCanThemMarketing"]();
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].NhapKhoMarketing;
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.additionString = id;
            this.getById(id);
        }
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 20, Template: this.STTTemplate },
            { Field: "NhaCungCap", Title: "Nhà cung cấp", Width: 250 },
            { Field: "QuaTang", Title: "Nhà cung cấp", Width: 250 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
            { Field: "SoLuong", Title: "SL", Width: 120, Template: this.soLuongTemplate },
            { Field: "GiaNhap", Title: "Giá nhập", Width: 120, TemplateFooter: this.TongCongFooter, Template: this.giaNhapTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 120, TemplateFooter: this.TongCongThanhTienFooter, Template: this.thanhTienTemplate },
            { Field: "", Title: "", Width: 80, Template: this.actionemplate }
        ];
    }
    getById(Id) {
        var self = this;
        this.nhapKhoChiTietMarketing.Id = Id;
        self.apiService.get("Marketing/GetThongTinNhapKho?id=" + this.nhapKhoChiTietMarketing.Id).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                console.log("data:", resultData);
                this.nhapKhoChiTietMarketing = resultData;
                this.gridDataSource = {
                    data: resultData.DanhSachQuaTangDuocThemList,
                    total: resultData.DanhSachQuaTangDuocThemList.length
                };
                this.TongCong = resultData.DanhSachQuaTangDuocThemList.reduce((sum, item) => sum + item.ThanhTien, 0);
                this.setDataGridView();
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
    setDataGridView() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    Them() {
        // if (this.nhapKhoChiTietMarketing.NhaCungCap != null &&
        //   this.nhapKhoChiTietMarketing.QuaTang != null &&
        //   this.nhapKhoChiTietMarketing.DonViTinh != null &&
        //   this.nhapKhoChiTietMarketing.SoLuong != null &&
        //   this.nhapKhoChiTietMarketing.GiaNhap != null &&
        //   this.nhapKhoChiTietMarketing.ThanhTien != null) {
        //   this.danhSachCanThemMarketing.NhaCungCap = this.nhapKhoChiTietMarketing.NhaCungCap;
        //   this.danhSachCanThemMarketing.QuaTang = this.nhapKhoChiTietMarketing.QuaTang;
        //   this.danhSachCanThemMarketing.DonViTinh = this.nhapKhoChiTietMarketing.DonViTinh;
        //   this.danhSachCanThemMarketing.SoLuong = this.nhapKhoChiTietMarketing.SoLuong;
        //   this.danhSachCanThemMarketing.GiaNhap = this.nhapKhoChiTietMarketing.GiaNhap;
        //   this.danhSachCanThemMarketing.ThanhTien = this.nhapKhoChiTietMarketing.ThanhTien;
        //   this.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.push(this.danhSachCanThemMarketing);
        //   this.Huy();
        //   this.setDataGridView();
        // }
        // else {
        //   // validated
        // }
    }
    Huy() {
        // this.nhapKhoChiTietMarketing.NhaCungCap = null;
        // this.nhapKhoChiTietMarketing.QuaTang = null;
        // this.nhapKhoChiTietMarketing.DonViTinh = null;
        // this.nhapKhoChiTietMarketing.SoLuong = null;
        // this.nhapKhoChiTietMarketing.GiaNhap = null;
        // this.nhapKhoChiTietMarketing.ThanhTien = null;
    }
    Luu() {
    }
    modelChangeSoLuongMua(event, dataItem) {
        for (let index = 0; index < this.gridDataSource.data.length; index++) {
            if (this.gridDataSource.data[index].Id === dataItem.Id) {
                this.gridDataSource.data[index].ThanhTien = event * this.gridDataSource.data[index].GiaNhap;
            }
            this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
        }
    }
    modelChangeGiaNhapMua(event, dataItem) {
        for (let index = 0; index < this.gridDataSource.data.length; index++) {
            if (this.gridDataSource.data[index].Id === dataItem.Id) {
                this.gridDataSource.data[index].ThanhTien = event * this.gridDataSource.data[index].SoLuong;
            }
            this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
        }
    }
    ChangeQuaTang(event) {
        if (event != null) {
            var self = this;
            self.apiService.post("Marketing/GetDonViTinhQuaTang?idQuaTang=" + event.KeyId).subscribe(resultData => {
                console.log("resultData", resultData);
                this.nhapKhoChiTietMarketing.DonViTinh = resultData;
            });
        }
    }
    modelChangeGiaNhap(event) {
        // this.nhapKhoChiTietMarketing.GiaNhap = event;
        // if (this.nhapKhoChiTietMarketing.SoLuong != 0) {
        //   this.nhapKhoChiTietMarketing.ThanhTien = this.nhapKhoChiTietMarketing.SoLuong * this.nhapKhoChiTietMarketing.GiaNhap;
        // }
    }
    modelChangeSoLuong(event) {
        // this.nhapKhoChiTietMarketing.SoLuong = event;
        // if (this.nhapKhoChiTietMarketing.GiaNhap != 0) {
        //   this.nhapKhoChiTietMarketing.ThanhTien = this.nhapKhoChiTietMarketing.SoLuong * this.nhapKhoChiTietMarketing.GiaNhap;
        // }
    }
    Xoa(event) {
        console.log(event);
        if (event != undefined && event != null) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xóa quà tặng này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.gridDataSource.data.splice(this.gridDataSource.data.findIndex((x) => x == event), 1);
                    this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                    this.setDataGridView();
                    this.notificationService.showSuccess("Xóa thành công");
                }
            });
        }
        ;
    }
};
MarketingNhapKhoChiTietComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCreate', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"], static: false })
], MarketingNhapKhoChiTietComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], MarketingNhapKhoChiTietComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionemplate', { static: true })
], MarketingNhapKhoChiTietComponent.prototype, "actionemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TongCongThanhTienFooter', { static: true })
], MarketingNhapKhoChiTietComponent.prototype, "TongCongThanhTienFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TongCongFooter', { static: true })
], MarketingNhapKhoChiTietComponent.prototype, "TongCongFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
], MarketingNhapKhoChiTietComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaNhapTemplate', { static: true })
], MarketingNhapKhoChiTietComponent.prototype, "giaNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], MarketingNhapKhoChiTietComponent.prototype, "thanhTienTemplate", void 0);
MarketingNhapKhoChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-nhap-kho-chi-tiet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-nhap-kho-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-nhap-kho-chi-tiet.component.scss */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component.scss")).default]
    })
], MarketingNhapKhoChiTietComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvbWFya2V0aW5nLW5oYXAta2hvL21hcmtldGluZy1uaGFwLWtoby1jcmVhdGUvbWFya2V0aW5nLW5oYXAta2hvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: MarketingNhapKhoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKhoCreateComponent", function() { return MarketingNhapKhoCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _marketing_nhap_kho_shared_marketing_nhap_kho_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../marketing-nhap-kho-shared/marketing-nhap-kho-shared.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");






let MarketingNhapKhoCreateComponent = class MarketingNhapKhoCreateComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    onCreated() {
        this.router.navigate(['/marketing/nhap-kho-marketing']);
    }
};
MarketingNhapKhoCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_marketing_nhap_kho_shared_marketing_nhap_kho_shared_component__WEBPACK_IMPORTED_MODULE_3__["MarketingNhapKhoSharedComponent"], { static: true })
], MarketingNhapKhoCreateComponent.prototype, "shared", void 0);
MarketingNhapKhoCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-nhap-kho-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-nhap-kho-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-nhap-kho-create.component.scss */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.scss")).default]
    })
], MarketingNhapKhoCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvbWFya2V0aW5nLW5oYXAta2hvL21hcmtldGluZy1uaGFwLWtoby1saXN0L21hcmtldGluZy1uaGFwLWtoby1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: MarketingNhapKhoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKhoListComponent", function() { return MarketingNhapKhoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-block */ "./node_modules/@iconify/icons-ic/twotone-block.js");
/* harmony import */ var _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _marketing_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../marketing.model */ "./src/app/modules/main/marketing/marketing.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");




























let MarketingNhapKhoListComponent = class MarketingNhapKhoListComponent {
    constructor(authService, router, notificationService, route, location, apiService, dialog) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.route = route;
        this.location = location;
        this.apiService = apiService;
        this.dialog = dialog;
        this.expression = false;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icBlock = _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.soPhanTramHuongBHYT = null;
        this._gridColumns = [];
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.addtionStringDefault = null;
        this.exportQueryInfoQueryInfo = new _marketing_model__WEBPACK_IMPORTED_MODULE_23__["ExportQueryInfoQueryInfo"]();
        this.validationErrors = [];
        this.sort = [
            {
                field: "NgayNhap",
                dir: "desc",
            },
        ];
        this.baseRoute = "/marketing/nhap-kho-marketing";
        this.holdQuery = null;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.gridColumns = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].NhapKhoMarketing;
        this.nhapKhoMarketing = new _marketing_model__WEBPACK_IMPORTED_MODULE_23__["MarketingNhapKho"]();
        // let dateNow = new Date();
        // this.nhapKhoMarketing.NgayNhapTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        // this.nhapKhoMarketing.NgayNhapDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        // if (this.nhapKhoMarketing.NgayNhapTuFormat != null) {
        //   this.nhapKhoMarketing.FromDate = CommonService.formatDateTime(
        //     this.nhapKhoMarketing.NgayNhapTuFormat,
        //     "dd/mm/yyyy"
        //   );
        // } else {
        //   this.nhapKhoMarketing.FromDate = null;
        // }
        // if (this.nhapKhoMarketing.NgayNhapDenFormat != null) {
        //   this.nhapKhoMarketing.ToDate = CommonService.formatDateTime(this.nhapKhoMarketing.NgayNhapDenFormat, "dd/mm/yyyy");
        // } else {
        //   this.nhapKhoMarketing.ToDate = null;
        // }
        var queryString = JSON.stringify(this.nhapKhoMarketing);
        this.addtionStringDefault = queryString;
        this.backWithSearch();
        this.gridColumns = [
            { Field: "SoPhieu", Title: "Số PN", Width: 120, Sortable: true, Template: this.chiTietTemplate },
            { Field: "SoChungTu", Title: "Số chứng từ", MinWidth: 150, Sortable: true },
            { Field: "LoaiNguoiGiaoString", Title: "Loại người giao", Width: 150, Sortable: true },
            { Field: "TenNguoiGiao", Title: "Tên người giao", Width: 150, Sortable: true },
            { Field: "NhanVienNhap", Title: "Người nhập", Width: 150, Sortable: true },
            { Field: "NgayNhapDisplay", Title: "Ngày nhập", Width: 150, Sortable: true, Template: this.ngayNhapTemplate, },
            {
                Field: "Action",
                Title: "",
                Width: 50,
                Template: this.acTionTemplate,
            },
        ];
    }
    XuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Process)) {
            this.exportQueryInfoQueryInfo.AdditionalSearchString = null;
            this.apiService.postExportExcel("Marketing/ExportNhapKhoMarketing", this.exportQueryInfoQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "NhapKhoMarketing" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    Edit(data) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].View)) {
            this.router.navigate(["/marketing/nhap-kho-marketing/chinh-sua/" + data.Id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    Delete(event) {
        if (event != undefined && event != null) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xóa nhập kho này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.apiService.post("Marketing/XoaQuaTang?id=" + event.Id).subscribe(resultData => {
                        this.notificationService.showSuccess("Xóa thành công");
                        this.TimkiemNangCao();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
    }
    backWithSearch() {
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].getItem("additionalSearchStringNhapKhoMarketing");
                if (additionalSearchString != null) {
                    this.nhapKhoMarketing = JSON.parse(additionalSearchString);
                    if (this.nhapKhoMarketing.NgayNhapTuFormat != undefined && this.nhapKhoMarketing.NgayNhapTuFormat != null && this.nhapKhoMarketing.NgayNhapTuFormat != "") {
                        this.nhapKhoMarketing.NgayNhapTuFormat = new Date(this.nhapKhoMarketing.NgayNhapTuFormat);
                    }
                    else {
                        this.nhapKhoMarketing.NgayNhapTuFormat = null;
                    }
                    if (this.nhapKhoMarketing.NgayNhapDenFormat != undefined && this.nhapKhoMarketing.NgayNhapDenFormat != null && this.nhapKhoMarketing.NgayNhapDenFormat != "") {
                        this.nhapKhoMarketing.NgayNhapDenFormat = new Date(this.nhapKhoMarketing.NgayNhapDenFormat);
                    }
                    else {
                        this.nhapKhoMarketing.NgayNhapDenFormat = null;
                    }
                    this.addtionStringDefault = additionalSearchString;
                    this.gridChild.additionalSearchString = additionalSearchString;
                }
            }
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.TimkiemNangCao();
        }
    }
    clearSearch() {
        this.searchString = null;
        //this.danhSachChoKham.SearchString = null;
        this.gridChild.search();
    }
    TimkiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.nhapKhoMarketing.NgayNhapTuFormat != null) {
            this.nhapKhoMarketing.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.nhapKhoMarketing.NgayNhapTuFormat, "dd/mm/yyyy");
        }
        else {
            this.nhapKhoMarketing.FromDate = null;
        }
        if (this.nhapKhoMarketing.NgayNhapDenFormat != null) {
            this.nhapKhoMarketing.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].formatDateTime(this.nhapKhoMarketing.NgayNhapDenFormat, "dd/mm/yyyy");
        }
        else {
            this.nhapKhoMarketing.ToDate = null;
        }
        var queryString = JSON.stringify(this.nhapKhoMarketing);
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].setItem("additionalSearchStringNhapKhoMarketing", queryString);
        this.gridChild.search();
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            self.TimkiemNangCao();
        }
    }
    view(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].View)) {
            this.router.navigate(["/marketing/nhap-kho-marketing/chinh-sua/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
MarketingNhapKhoListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_24__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarketingNhapKhoListComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], MarketingNhapKhoListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('acTionTemplate', { static: true })
], MarketingNhapKhoListComponent.prototype, "acTionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayNhapTemplate", { static: true })
], MarketingNhapKhoListComponent.prototype, "ngayNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiTietTemplate', { static: true })
], MarketingNhapKhoListComponent.prototype, "chiTietTemplate", void 0);
MarketingNhapKhoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-nhap-kho-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-nhap-kho-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-nhap-kho-list.component.scss */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.scss")).default]
    })
], MarketingNhapKhoListComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: MarketingNhapKhoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKhoRoutingModule", function() { return MarketingNhapKhoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _marketing_nhap_kho_list_marketing_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marketing-nhap-kho-list/marketing-nhap-kho-list.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.ts");
/* harmony import */ var _marketing_nhap_kho_create_marketing_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marketing-nhap-kho-create/marketing-nhap-kho-create.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.ts");
/* harmony import */ var _marketing_nhap_kho_update_marketing_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marketing-nhap-kho-update/marketing-nhap-kho-update.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.ts");









const routes = [
    {
        path: '',
        component: _marketing_nhap_kho_list_marketing_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_6__["MarketingNhapKhoListComponent"],
        data: {
            title: 'Danh Sách Nhập Kho Marketing',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].NhapKhoMarketing,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    // {
    //   path: 'chi-tiet/:id',
    //   component: MarketingNhapKhoChiTietComponent,
    //   data: {
    //     title: "Nhập Kho Marketing Chi Tiết",
    //     DocumentType: DocumentType.NhapKhoMarketing,
    //     SecurityOperation: SecurityOperation.View
    //   },
    //   canActivate: [PermisssionGuard]
    // },
    {
        path: 'them',
        component: _marketing_nhap_kho_create_marketing_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_7__["MarketingNhapKhoCreateComponent"],
        data: {
            title: 'Thêm nhập kho quà tặng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].NhapKhoMarketing,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _marketing_nhap_kho_update_marketing_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_8__["MarketingNhapKhoUpdateComponent"],
        data: {
            title: 'Chỉnh sửa nhập kho quà tặng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].NhapKhoMarketing,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
];
let MarketingNhapKhoRoutingModule = class MarketingNhapKhoRoutingModule {
};
MarketingNhapKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MarketingNhapKhoRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvbWFya2V0aW5nLW5oYXAta2hvL21hcmtldGluZy1uaGFwLWtoby1zaGFyZWQvbWFya2V0aW5nLW5oYXAta2hvLXNoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: MarketingNhapKhoSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKhoSharedComponent", function() { return MarketingNhapKhoSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _marketing_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../marketing.model */ "./src/app/modules/main/marketing/marketing.model.ts");













let MarketingNhapKhoSharedComponent = class MarketingNhapKhoSharedComponent {
    constructor(apiService, authService, router, notificationService, dialog, route, location, cdRef) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.route = route;
        this.location = location;
        this.cdRef = cdRef;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.danhSachMarketing = [];
        this.validationErrorsChiTiet = [];
        this.gridColumns = [];
        this.gridDataSource = {};
        this.additionString = null;
        this.TongCong = 0;
        this.IdNhapKho = 0;
        this.isSelectingItem = false;
    }
    ngOnInit() {
        this.nhapKhoChiTietMarketing = new _marketing_model__WEBPACK_IMPORTED_MODULE_12__["MarketingNhapKhoChiTiet"]();
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].NhapKhoMarketing;
        const id = this.route.snapshot.params.id;
        this.validationErrorsChiTiet = [];
        if (id !== undefined && id !== null) {
            this.additionString = id;
            this.IdNhapKho = id;
            this.getById(id);
        }
        else {
            this.getNhanVienId = this.authService.getAccessUser();
            this.nhapKhoChiTietMarketing.NguoiNhapId = this.getNhanVienId.AccessToken.Id;
            this.nhapKhoChiTietMarketing.LoaiNguoiGiao = 1;
            this.nhapKhoChiTietMarketing.NgayNhap = new Date();
            this.apiService.get("Marketing/GetThongTinNhanVien?nhanVienId=" + this.getNhanVienId.AccessToken.Id).subscribe(resultData => {
                this.nhapKhoChiTietMarketing.NguoiNhapId = resultData.KeyId;
                this.nhapKhoChiTietMarketing.TenNguoiNhap = resultData.DisplayName;
                this.nhapKhoChiTietMarketing.NgayNhap = new Date();
            });
        }
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 20, Template: this.STTTemplate },
            { Field: "NhaCungCap", Title: "Nhà cung cấp", Width: 250 },
            { Field: "QuaTang", Title: "Quà tặng", Width: 250 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
            { Field: "SoLuongNhap", Title: "SL", Width: 120, Template: this.soLuongTemplate },
            { Field: "DonGiaNhap", Title: "Giá nhập", Width: 120, TemplateFooter: this.TongCongFooter, Template: this.giaNhapTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 120, TemplateFooter: this.TongCongThanhTienFooter, Template: this.thanhTienTemplate },
            { Field: "Action", Title: "", Width: 80, Template: this.actionemplate }
        ];
    }
    ChangLoaiNguoiGiao(event) {
        if (event == 2) {
            this.nhapKhoChiTietMarketing.TenNguoiGiao = "";
        }
    }
    getById(Id) {
        var self = this;
        this.nhapKhoChiTietMarketing.Id = Id;
        this.IdNhapKho = Id;
        self.apiService.get("Marketing/GetThongTinNhapKho?id=" + this.nhapKhoChiTietMarketing.Id).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                console.log("data:", resultData);
                this.nhapKhoChiTietMarketing = resultData;
                let index = 1;
                resultData.DanhSachQuaTangDuocThemList.forEach(element => {
                    element.STT = index++;
                });
                this.gridDataSource = {
                    data: resultData.DanhSachQuaTangDuocThemList,
                    total: resultData.DanhSachQuaTangDuocThemList.length
                };
                this.TongCong = resultData.DanhSachQuaTangDuocThemList.reduce((sum, item) => sum + item.ThanhTien, 0);
                this.setDataGridView();
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
    setDataGridView() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    Them() {
        this.marketingCombobox.focusManual();
        var self = this;
        self.validationErrorsChiTiet = [];
        this.cdRef.detectChanges();
        let kiemTraThem = true;
        if (self.nhapKhoChiTietMarketing.NhaCungCap == null || self.nhapKhoChiTietMarketing.NhaCungCap == "") {
            kiemTraThem = false;
            self.validationErrorsChiTiet.push({ Message: 'Nhà cung cấp yêu cầu nhập.', Field: 'NhaCungCap' });
        }
        if (self.nhapKhoChiTietMarketing.QuaTangId == undefined || self.nhapKhoChiTietMarketing.QuaTangId == null || self.nhapKhoChiTietMarketing.QuaTangId === 0) {
            kiemTraThem = false;
            self.validationErrorsChiTiet.push({ Message: 'Quà tặng yêu cầu nhập', Field: 'QuaTangId' });
        }
        if (self.nhapKhoChiTietMarketing.SoLuongNhap == null || self.nhapKhoChiTietMarketing.SoLuongNhap === 0) {
            kiemTraThem = false;
            self.validationErrorsChiTiet.push({ Message: 'Số lượng yêu cầu nhập', Field: 'SoLuongNhap' });
        }
        if (self.nhapKhoChiTietMarketing.DonGiaNhap == null || self.nhapKhoChiTietMarketing.DonGiaNhap === 0) {
            kiemTraThem = false;
            self.validationErrorsChiTiet.push({ Message: 'Đơn giá nhập yêu cầu nhập', Field: 'DonGiaNhap' });
        }
        if (self.gridDataSource.data != null) {
            if (self.nhapKhoChiTietMarketing.NhaCungCap != null && self.nhapKhoChiTietMarketing.QuaTangId != null) {
                console.log("[" + self.nhapKhoChiTietMarketing.NhaCungCap.trim() + "]");
                console.log("[" + self.nhapKhoChiTietMarketing.QuaTangId + "]");
                let indexNhaCungCap = self.gridDataSource.data.findIndex(x => x.NhaCungCap == self.nhapKhoChiTietMarketing.NhaCungCap.trim());
                let indexQuaTang = self.gridDataSource.data.findIndex(x => x.QuaTangId == self.nhapKhoChiTietMarketing.QuaTangId);
                if (indexNhaCungCap !== -1 && indexQuaTang !== -1) {
                    kiemTraThem = false;
                    self.validationErrorsChiTiet.push({ Message: 'Nhà cung cấp đã nhập quà tặng này.', Field: 'NhaCungCap' });
                }
            }
        }
        if (self.nhapKhoChiTietMarketing.NhaCungCap != null && self.nhapKhoChiTietMarketing.QuaTangId != null && self.gridDataSource.data == null) {
            self.apiService.post("Marketing/ValidateNhaCungCap?nhaCungCap=" + self.nhapKhoChiTietMarketing.NhaCungCap + "&quaTangId=" + self.nhapKhoChiTietMarketing.QuaTangId).subscribe(resultData => {
                if (resultData == true) {
                    kiemTraThem = false;
                    self.validationErrorsChiTiet.push({ Message: 'Nhà cung cấp đã nhập quà tặng này.', Field: 'NhaCungCap' });
                }
            });
        }
        if (kiemTraThem == true) {
            let tenQuaTang = "";
            self.apiService.post("Marketing/GetTenQuaTang?idQuaTang=" + self.nhapKhoChiTietMarketing.QuaTangId).subscribe(resultData => {
                tenQuaTang = resultData;
                let data = {
                    SoLuongDaXuat: 0,
                    NhapKhoQuaTangId: self.IdNhapKho,
                    QuaTangId: self.nhapKhoChiTietMarketing.QuaTangId,
                    QuaTang: tenQuaTang,
                    NhaCungCap: self.nhapKhoChiTietMarketing.NhaCungCap,
                    DonViTinh: self.nhapKhoChiTietMarketing.DonViTinh,
                    SoLuongNhap: self.nhapKhoChiTietMarketing.SoLuongNhap,
                    DonGiaNhap: self.nhapKhoChiTietMarketing.DonGiaNhap,
                    ThanhTien: self.nhapKhoChiTietMarketing.ThanhTien,
                    Id: 0,
                    STT: 0
                };
                self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.push(data);
                let index = 1;
                self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.forEach(element => {
                    element.STT = index++;
                });
                self.gridDataSource = {
                    data: self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList,
                    total: self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.length
                };
                this.TongCong = self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.reduce((sum, item) => sum + item.ThanhTien, 0);
                self.setDataGridView();
                self.Huy();
            });
        }
    }
    Huy() {
        this.validationErrorsChiTiet = [];
        this.validationErrors = [];
        this.nhapKhoChiTietMarketing.NhaCungCap = null;
        this.nhapKhoChiTietMarketing.QuaTangId = null;
        this.nhapKhoChiTietMarketing.QuaTang = null;
        this.nhapKhoChiTietMarketing.DonViTinh = null;
        this.nhapKhoChiTietMarketing.SoLuongNhap = null;
        this.nhapKhoChiTietMarketing.DonGiaNhap = null;
        this.nhapKhoChiTietMarketing.ThanhTien = null;
    }
    Luu() {
    }
    modelChangeSoLuongMua(event, dataItem) {
        if (event === 0 || event === null) {
            for (let index = 0; index < this.gridDataSource.data.length; index++) {
                if (this.gridDataSource.data[index].STT === dataItem.STT) {
                    this.gridDataSource.data[index].ThanhTien = 0;
                }
                this.TongCong = 0;
            }
        }
        else {
            for (let index = 0; index < this.gridDataSource.data.length; index++) {
                if (this.gridDataSource.data[index].STT === dataItem.STT) {
                    this.gridDataSource.data[index].ThanhTien = event * this.gridDataSource.data[index].DonGiaNhap;
                }
                this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }
    modelChangeGiaNhapMua(event, dataItem) {
        if (event == 0 || event === null) {
            for (let index = 0; index < this.gridDataSource.data.length; index++) {
                if (this.gridDataSource.data[index].STT === dataItem.STT) {
                    this.gridDataSource.data[index].ThanhTien = 0;
                }
                this.TongCong = 0;
            }
        }
        else {
            for (let index = 0; index < this.gridDataSource.data.length; index++) {
                if (this.gridDataSource.data[index].STT === dataItem.STT) {
                    this.gridDataSource.data[index].ThanhTien = event * this.gridDataSource.data[index].SoLuongNhap;
                }
                this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }
    ChangeQuaTang(event) {
        if (event != null) {
            var self = this;
            self.apiService.post("Marketing/GetDonViTinhQuaTang?idQuaTang=" + event.KeyId).subscribe(resultData => {
                this.nhapKhoChiTietMarketing.DonViTinh = resultData;
            });
        }
        else {
            this.nhapKhoChiTietMarketing.DonViTinh = "";
        }
    }
    modelChangeGiaNhap(event) {
        if (event == 0) {
            this.validationErrors = [];
            this.validationErrors.push({ Message: 'Đơn giá không hợp lệ', Field: 'DonGiaNhap' });
        }
        else {
            this.nhapKhoChiTietMarketing.DonGiaNhap = event;
            if (this.nhapKhoChiTietMarketing.SoLuongNhap != 0) {
                this.nhapKhoChiTietMarketing.ThanhTien = this.nhapKhoChiTietMarketing.SoLuongNhap * this.nhapKhoChiTietMarketing.DonGiaNhap;
            }
        }
    }
    modelChangeSoLuong(event) {
        if (event == 0) {
            this.validationErrors = [];
            this.validationErrors.push({ Message: 'Số lượng không hợp lệ', Field: 'SoLuongNhap' });
        }
        else {
            this.nhapKhoChiTietMarketing.SoLuongNhap = event;
            if (this.nhapKhoChiTietMarketing.DonGiaNhap != 0) {
                this.nhapKhoChiTietMarketing.ThanhTien = this.nhapKhoChiTietMarketing.SoLuongNhap * this.nhapKhoChiTietMarketing.DonGiaNhap;
            }
        }
    }
    Xoa(event) {
        console.log(event);
        if (event != undefined && event != null) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xóa quà tặng này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (event.SoLuongDaXuat != 0) {
                        this.notificationService.showError("Số lượng quà tặng đã được xuất");
                    }
                    else {
                        this.gridDataSource.data.splice(this.gridDataSource.data.findIndex((x) => x == event), 1);
                        this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                        this.setDataGridView();
                        this.notificationService.showSuccess("Xóa thành công");
                    }
                }
            });
        }
        ;
    }
    NhanVienTaiBenhVien(event) {
        if (event != undefined || event != null) {
            this.nhapKhoChiTietMarketing.TenNguoiGiao = event.DisplayName;
            this.nhapKhoChiTietMarketing.NguoiGiaoId = event.KeyId;
        }
        else {
            this.nhapKhoChiTietMarketing.TenNguoiGiao = null;
            this.nhapKhoChiTietMarketing.NguoiGiaoId = null;
        }
    }
    getSharedData() {
        let kiemtraSave = true;
        this.validationErrorsChiTiet = [];
        if (this.IdNhapKho == null) {
            this.nhapKhoChiTietMarketing.Id = 0;
        }
        else {
            this.nhapKhoChiTietMarketing.Id = this.IdNhapKho;
        }
        this.nhapKhoChiTietMarketing.ThanhTien = 0;
        if (kiemtraSave == true) {
            return this.nhapKhoChiTietMarketing;
        }
    }
    onKeyEnterAddItem(event) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {
                this.Them();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }
    openCombobox(event) {
        if (event) {
            this.isSelectingItem = true;
        }
        else {
            this.isSelectingItem = false;
        }
    }
    onKey(event) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {
                this.Them();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }
};
MarketingNhapKhoSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCreate', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], static: false })
], MarketingNhapKhoSharedComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], MarketingNhapKhoSharedComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionemplate', { static: true })
], MarketingNhapKhoSharedComponent.prototype, "actionemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TongCongThanhTienFooter', { static: true })
], MarketingNhapKhoSharedComponent.prototype, "TongCongThanhTienFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TongCongFooter', { static: true })
], MarketingNhapKhoSharedComponent.prototype, "TongCongFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
], MarketingNhapKhoSharedComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaNhapTemplate', { static: true })
], MarketingNhapKhoSharedComponent.prototype, "giaNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], MarketingNhapKhoSharedComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('marketingCombobox', { static: false })
], MarketingNhapKhoSharedComponent.prototype, "marketingCombobox", void 0);
MarketingNhapKhoSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-nhap-kho-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-nhap-kho-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-nhap-kho-shared.component.scss */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.scss")).default]
    })
], MarketingNhapKhoSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvbWFya2V0aW5nLW5oYXAta2hvL21hcmtldGluZy1uaGFwLWtoby11cGRhdGUvbWFya2V0aW5nLW5oYXAta2hvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: MarketingNhapKhoUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKhoUpdateComponent", function() { return MarketingNhapKhoUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _marketing_nhap_kho_shared_marketing_nhap_kho_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../marketing-nhap-kho-shared/marketing-nhap-kho-shared.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");






let MarketingNhapKhoUpdateComponent = class MarketingNhapKhoUpdateComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    onUpdated() {
        this.router.navigate(['/marketing/nhap-kho-marketing']);
    }
};
MarketingNhapKhoUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_marketing_nhap_kho_shared_marketing_nhap_kho_shared_component__WEBPACK_IMPORTED_MODULE_3__["MarketingNhapKhoSharedComponent"], { static: true })
], MarketingNhapKhoUpdateComponent.prototype, "shared", void 0);
MarketingNhapKhoUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-nhap-kho-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-nhap-kho-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-nhap-kho-update.component.scss */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.scss")).default]
    })
], MarketingNhapKhoUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho.module.ts ***!
  \****************************************************************************************/
/*! exports provided: MarketingNhapKhoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKhoModule", function() { return MarketingNhapKhoModule; });
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
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _marketing_nhap_kho_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./marketing-nhap-kho-routing.module */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-routing.module.ts");
/* harmony import */ var _marketing_nhap_kho_list_marketing_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./marketing-nhap-kho-list/marketing-nhap-kho-list.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-list/marketing-nhap-kho-list.component.ts");
/* harmony import */ var _marketing_nhap_kho_chi_tiet_marketing_nhap_kho_chi_tiet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component.ts");
/* harmony import */ var _marketing_nhap_kho_shared_marketing_nhap_kho_shared_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./marketing-nhap-kho-shared/marketing-nhap-kho-shared.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-shared/marketing-nhap-kho-shared.component.ts");
/* harmony import */ var _marketing_nhap_kho_update_marketing_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./marketing-nhap-kho-update/marketing-nhap-kho-update.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-update/marketing-nhap-kho-update.component.ts");
/* harmony import */ var _marketing_nhap_kho_create_marketing_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./marketing-nhap-kho-create/marketing-nhap-kho-create.component */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho-create/marketing-nhap-kho-create.component.ts");
/* harmony import */ var _marketing_nhap_kho_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./marketing-nhap-kho.service */ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");






















let MarketingNhapKhoModule = class MarketingNhapKhoModule {
};
MarketingNhapKhoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_marketing_nhap_kho_list_marketing_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_15__["MarketingNhapKhoListComponent"], _marketing_nhap_kho_chi_tiet_marketing_nhap_kho_chi_tiet_component__WEBPACK_IMPORTED_MODULE_16__["MarketingNhapKhoChiTietComponent"], _marketing_nhap_kho_shared_marketing_nhap_kho_shared_component__WEBPACK_IMPORTED_MODULE_17__["MarketingNhapKhoSharedComponent"], _marketing_nhap_kho_update_marketing_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_18__["MarketingNhapKhoUpdateComponent"], _marketing_nhap_kho_create_marketing_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_19__["MarketingNhapKhoCreateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _marketing_nhap_kho_routing_module__WEBPACK_IMPORTED_MODULE_14__["MarketingNhapKhoRoutingModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["InputsModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__["GridModule"],
        ], providers: [
            _marketing_nhap_kho_service__WEBPACK_IMPORTED_MODULE_20__["MarketingNhapKhoService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_21__["BaseService"], useClass: _marketing_nhap_kho_service__WEBPACK_IMPORTED_MODULE_20__["MarketingNhapKhoService"] },
        ],
    })
], MarketingNhapKhoModule);



/***/ }),

/***/ "./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing-nhap-kho/marketing-nhap-kho.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: MarketingNhapKhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKhoService", function() { return MarketingNhapKhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let MarketingNhapKhoService = class MarketingNhapKhoService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'Marketing';
    }
};
MarketingNhapKhoService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
MarketingNhapKhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MarketingNhapKhoService);



/***/ }),

/***/ "./src/app/modules/main/marketing/marketing.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/main/marketing/marketing.model.ts ***!
  \***********************************************************/
/*! exports provided: Marketing, DanhSachMarketingSearch, MarketingXuatKho, MarketingXuatKhoChiTiet, MarketingNhapKho, MarketingNhapKhoChiTiet, DanhSachCanThemMarketing, ThongTinNhanVienLogin, ExportQueryInfoQueryInfo, ChonGoiMarketing, GridGoiMarketingModel, ThongTinGoiMarketingGridVo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marketing", function() { return Marketing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachMarketingSearch", function() { return DanhSachMarketingSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingXuatKho", function() { return MarketingXuatKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingXuatKhoChiTiet", function() { return MarketingXuatKhoChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKho", function() { return MarketingNhapKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingNhapKhoChiTiet", function() { return MarketingNhapKhoChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachCanThemMarketing", function() { return DanhSachCanThemMarketing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinNhanVienLogin", function() { return ThongTinNhanVienLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function() { return ExportQueryInfoQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChonGoiMarketing", function() { return ChonGoiMarketing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridGoiMarketingModel", function() { return GridGoiMarketingModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinGoiMarketingGridVo", function() { return ThongTinGoiMarketingGridVo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Marketing {
    constructor(HoTen = null, NgayThangNamSinh = null, NgaySinh = null, ThangSinh = null, NamSinh = null, SoDienThoai = null, GioiTinh = null, NgheNghiepId = null, QuocTichId = 1, TinhThanhId = null, QuanHuyenId = null, PhuongXaId = null, DiaChi = null, SoChungMinhThu = null, Email = null, NoiLamViec = null, DanTocId = null, BenhNhanId = null, LstDaChon = null, LstDaHoanThanh = null) {
        this.HoTen = HoTen;
        this.NgayThangNamSinh = NgayThangNamSinh;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.SoDienThoai = SoDienThoai;
        this.GioiTinh = GioiTinh;
        this.NgheNghiepId = NgheNghiepId;
        this.QuocTichId = QuocTichId;
        this.TinhThanhId = TinhThanhId;
        this.QuanHuyenId = QuanHuyenId;
        this.PhuongXaId = PhuongXaId;
        this.DiaChi = DiaChi;
        this.SoChungMinhThu = SoChungMinhThu;
        this.Email = Email;
        this.NoiLamViec = NoiLamViec;
        this.DanTocId = DanTocId;
        this.BenhNhanId = BenhNhanId;
        this.LstDaChon = LstDaChon;
        this.LstDaHoanThanh = LstDaHoanThanh;
    }
}
class DanhSachMarketingSearch {
    constructor(SearchString = null, DangChoNhanTien = true, DangChoThanhToan = true, DaThanhToan = true, TuNgay = null, DenNgay = null) {
        this.SearchString = SearchString;
        this.DangChoNhanTien = DangChoNhanTien;
        this.DangChoThanhToan = DangChoThanhToan;
        this.DaThanhToan = DaThanhToan;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class MarketingXuatKho {
    constructor(
    //public Id: number = 0,
    SearchString = null, SoPhieu = null, NguoiXuatId = 0, NhanVienXuat = null, HoTenBenhNhan = null, NgayXuat = null, NgayXuatDisplay = null, NgayXuatFormat = null, NgayXuatTuFormat = null, NgayXuatDenFormat = null, GhiChu = null, FromDate = null, ToDate = null) {
        this.SearchString = SearchString;
        this.SoPhieu = SoPhieu;
        this.NguoiXuatId = NguoiXuatId;
        this.NhanVienXuat = NhanVienXuat;
        this.HoTenBenhNhan = HoTenBenhNhan;
        this.NgayXuat = NgayXuat;
        this.NgayXuatDisplay = NgayXuatDisplay;
        this.NgayXuatFormat = NgayXuatFormat;
        this.NgayXuatTuFormat = NgayXuatTuFormat;
        this.NgayXuatDenFormat = NgayXuatDenFormat;
        this.GhiChu = GhiChu;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}
class MarketingXuatKhoChiTiet {
    constructor(Id = 0, SoPhieu = null, KhoXuatId = 1, TenKhoXuat = "Kho Marketing", NguoiXuatId = 0, NhanVienXuat = null, BenhNhanId = 0, NguoiNhan = null, NgayXuat = null, NgayXuatFormat = null, NgayXuatTuFormat = null, NgayXuatDenFormat = null, GhiChu = null, FromDate = null, ToDate = null) {
        this.Id = Id;
        this.SoPhieu = SoPhieu;
        this.KhoXuatId = KhoXuatId;
        this.TenKhoXuat = TenKhoXuat;
        this.NguoiXuatId = NguoiXuatId;
        this.NhanVienXuat = NhanVienXuat;
        this.BenhNhanId = BenhNhanId;
        this.NguoiNhan = NguoiNhan;
        this.NgayXuat = NgayXuat;
        this.NgayXuatFormat = NgayXuatFormat;
        this.NgayXuatTuFormat = NgayXuatTuFormat;
        this.NgayXuatDenFormat = NgayXuatDenFormat;
        this.GhiChu = GhiChu;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}
class MarketingNhapKho {
    constructor(
    //public Id: number = 0,
    SearchString = null, SoPhieu = null, NguoiNhapId = 0, NhanVienNhap = null, HoTenBenhNhan = null, NgayNhap = null, NgayNhapDisplay = null, NgayNhapFormat = null, NgayNhapTuFormat = null, NgayNhapDenFormat = null, GhiChu = null, FromDate = null, ToDate = null) {
        this.SearchString = SearchString;
        this.SoPhieu = SoPhieu;
        this.NguoiNhapId = NguoiNhapId;
        this.NhanVienNhap = NhanVienNhap;
        this.HoTenBenhNhan = HoTenBenhNhan;
        this.NgayNhap = NgayNhap;
        this.NgayNhapDisplay = NgayNhapDisplay;
        this.NgayNhapFormat = NgayNhapFormat;
        this.NgayNhapTuFormat = NgayNhapTuFormat;
        this.NgayNhapDenFormat = NgayNhapDenFormat;
        this.GhiChu = GhiChu;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}
class MarketingNhapKhoChiTiet {
    constructor(Id = 0, SoChungTu = null, LoaiNguoiGiao = null, TenNguoiGiao = "", NguoiGiaoId = null, TenNguoiNhap = "", NguoiNhapId = null, NhaCungCap = null, QuaTang = null, QuaTangId = null, DonViTinh = null, SoLuongNhap = null, DonGiaNhap = null, ThanhTien = null, SoLuongDaXuat = null, NhapKhoQuaTangId = 0, NgayNhap = null, DanhSachQuaTangDuocThemList = []) {
        this.Id = Id;
        this.SoChungTu = SoChungTu;
        this.LoaiNguoiGiao = LoaiNguoiGiao;
        this.TenNguoiGiao = TenNguoiGiao;
        this.NguoiGiaoId = NguoiGiaoId;
        this.TenNguoiNhap = TenNguoiNhap;
        this.NguoiNhapId = NguoiNhapId;
        this.NhaCungCap = NhaCungCap;
        this.QuaTang = QuaTang;
        this.QuaTangId = QuaTangId;
        this.DonViTinh = DonViTinh;
        this.SoLuongNhap = SoLuongNhap;
        this.DonGiaNhap = DonGiaNhap;
        this.ThanhTien = ThanhTien;
        this.SoLuongDaXuat = SoLuongDaXuat;
        this.NhapKhoQuaTangId = NhapKhoQuaTangId;
        this.NgayNhap = NgayNhap;
        this.DanhSachQuaTangDuocThemList = DanhSachQuaTangDuocThemList;
    }
}
class DanhSachCanThemMarketing {
    constructor(Id = 0, STT = 0, NhaCungCap = null, QuaTang = null, QuaTangId = null, DonViTinh = null, SoLuongNhap = null, DonGiaNhap = null, ThanhTien = null, SoLuongDaXuat = null, NhapKhoQuaTangId = 0) {
        this.Id = Id;
        this.STT = STT;
        this.NhaCungCap = NhaCungCap;
        this.QuaTang = QuaTang;
        this.QuaTangId = QuaTangId;
        this.DonViTinh = DonViTinh;
        this.SoLuongNhap = SoLuongNhap;
        this.DonGiaNhap = DonGiaNhap;
        this.ThanhTien = ThanhTien;
        this.SoLuongDaXuat = SoLuongDaXuat;
        this.NhapKhoQuaTangId = NhapKhoQuaTangId;
    }
}
class ThongTinNhanVienLogin {
    constructor(KeyId = 0, DisplayName = "") {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}
class ExportQueryInfoQueryInfo {
    constructor(Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", 
    // public searchTerms: string = "",
    Sort = []) {
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class ChonGoiMarketing {
    constructor(GoiMarketingId = null, SoLuong = 1) {
        this.GoiMarketingId = GoiMarketingId;
        this.SoLuong = SoLuong;
    }
}
class GridGoiMarketingModel {
    constructor(data = [], total = 0) {
        this.data = data;
        this.total = total;
    }
}
class ThongTinGoiMarketingGridVo {
    constructor(Id = 0, STT = 0, TenGoi = null, TenDisplay = null, IsChecked = null, TiLeChietKhau = null, TiLeChietKhauDisplay = null, GiaTruocChietKhau = null, GiaSauChietKhau = null, GiaTruocChietKhauDisplay = null, GiaSauChietKhauDisplay = null, TrangThai = null, TrangThaiDisplay = null, IsHaveGift = null, CoCacDichVuKhac = null, TongCong = null, GiaGoi = null, ChuaThu = null, ChuaThuDisplay = null, BenhNhanDaThanhToan = null, BenhNhanDaThanhToanDisplay = null, DangDung = null, ConLai = null, ConLaiDisplay = null, GoiSoSinh = null, NgayDangKy = null, NgayDangKyDisplay = null, TrangThaiGoiDisplay = null, TrangThaiGoi = null, NguoiDangKy = null) {
        this.Id = Id;
        this.STT = STT;
        this.TenGoi = TenGoi;
        this.TenDisplay = TenDisplay;
        this.IsChecked = IsChecked;
        this.TiLeChietKhau = TiLeChietKhau;
        this.TiLeChietKhauDisplay = TiLeChietKhauDisplay;
        this.GiaTruocChietKhau = GiaTruocChietKhau;
        this.GiaSauChietKhau = GiaSauChietKhau;
        this.GiaTruocChietKhauDisplay = GiaTruocChietKhauDisplay;
        this.GiaSauChietKhauDisplay = GiaSauChietKhauDisplay;
        this.TrangThai = TrangThai;
        this.TrangThaiDisplay = TrangThaiDisplay;
        this.IsHaveGift = IsHaveGift;
        this.CoCacDichVuKhac = CoCacDichVuKhac;
        this.TongCong = TongCong;
        this.GiaGoi = GiaGoi;
        this.ChuaThu = ChuaThu;
        this.ChuaThuDisplay = ChuaThuDisplay;
        this.BenhNhanDaThanhToan = BenhNhanDaThanhToan;
        this.BenhNhanDaThanhToanDisplay = BenhNhanDaThanhToanDisplay;
        this.DangDung = DangDung;
        this.ConLai = ConLai;
        this.ConLaiDisplay = ConLaiDisplay;
        this.GoiSoSinh = GoiSoSinh;
        this.NgayDangKy = NgayDangKy;
        this.NgayDangKyDisplay = NgayDangKyDisplay;
        this.TrangThaiGoiDisplay = TrangThaiGoiDisplay;
        this.TrangThaiGoi = TrangThaiGoi;
        this.NguoiDangKy = NguoiDangKy;
    }
}


/***/ })

}]);
//# sourceMappingURL=marketing-marketing-nhap-kho-marketing-nhap-kho-module-es2015.js.map