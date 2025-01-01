(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketing-dang-ky-goi-marketing-marketing-module"],{

/***/ "./node_modules/@iconify/icons-ic/edit.js":
/*!************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/edit.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Marketing',Path:''}\n        ,{Title:'Đăng Ký Gói Marketing',Path:'/marketing/dang-ky-goi-marketing', queryParams: {holdQuery : true}, Active: true}\n        \n            ]\" [isicMoreVert]=\"false\">\n        </app-header-form>\n\n    <!-- <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n        <div class=\"p-gutter\" vexContainer>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <h2 style=\"margin-right: 15px !important;\" class=\"title m-0\">Đăng Ký Gói Marketing</h2>\n                    \n                        <!-- (modelChange)=\"lyDoVaoVienChange($event)\" -->\n                        <!-- <app-radio id=\"IsXuatKhac\" class=\"no-label\" [(model)]=\"IsXuatKhac\"\n                             [items]=\"[{Value:false,Text:'Xuất qua kho khác'},{Value:true,Text:'Xuất khác'}]\">\n                        </app-radio> -->\n                    \n                    </div>\n\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                        <app-marketing-shared [isUpdate]=\"false\">\n                        </app-marketing-shared>\n\n                        <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                            <!-- <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                                                                            </app-formfooter> -->\n                            <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                            <button *ngIf=\"!loading\" type=\"button\" (click)=\"xuLyKiemTraDangKyGoiMarketing()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu</button>\n                            <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                    alt=\"Loading\" /></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>marketing-detail works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Marketing',Path:''}\n                ,{Title:'Đăng Ký Gói Marketing',Path:'/marketing/dang-ky-goi-marketing', queryParams: {holdQuery : true}, Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #grid baseRoute=\"/marketing/dang-ky-goi-marketing\"\n                [additionalSearchString]=\"additionalSearchString\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" [sort]=\"sort\"\n                [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\" [detailTemplate]=\"detailTemplate\"></app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"/marketing/dang-ky-goi-marketing\" #detailGrid [gridColumns]=\"gridChildColumns\"\n                    pageSize=\"5\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                    [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    [additionalSearchString]=\"dataItem.Id\" searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n        </div>\n        <ng-template #actionTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button *ngIf=\"dataItem.EnableDeleteButton == true\" (click)=\"delete(dataItem.Id)\" mat-menu-item>\n                        <!-- <mat-icon [icIcon]=\"icDelete\"></mat-icon> -->\n                        <span>Xóa</span>\n                    </button>\n                    <!-- <button (click)=\"daNhanTien(dataItem.Id)\" mat-menu-item>            \n                            <span>Đã nhận tiền</span>\n                    </button> -->\n                    <button (click)=\"inBangKeTrongGoiBenhNhan(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In</span>\n                    </button>\n                    <button (click)=\"ketXuatGoiTheoBenhNhanExcel(dataItem.Id)\"   mat-menu-item>\n                        <mat-icon  [icIcon]=\"icFileExcel\"></mat-icon>\n                        <span>Kết xuất excel</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n\n        <ng-template #actionTemplate2 let-dataItem>\n            <!-- dataItem.TrangThaiThanhToan != 1 |||||| dataItem.TrangThaiThanhToan == 6 EQUAL dataItem.TrangThaiThanhToan == 1 && dataItem.BoPhanMarketingDaNhanTien != true  -->\n            <button *ngIf=\"(dataItem.TrangThaiThanhToan == 1 && dataItem.BoPhanMarketingDaNhanTien != true)\n    || dataItem.TrangThai == 2\n    || (dataItem.TrangThaiThanhToan == 2 && dataItem.TongSoQua > dataItem.TongSoQuaDaXuat)\" kendoTooltip\n                title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button *ngIf=\"dataItem.TrangThaiThanhToan == 1 && dataItem.BoPhanMarketingDaNhanTien != true\"\n                        (click)=\"deleteChild(dataItem.Id)\" mat-menu-item>\n                        <span>Xóa</span>\n                    </button>\n\n                    <button *ngIf=\"dataItem.TrangThaiThanhToan == 1 && dataItem.BoPhanMarketingDaNhanTien != true\"\n                        (click)=\"daNhanTienChild(dataItem.Id)\" mat-menu-item>\n                        <span>Đã nhận tiền</span>\n                    </button>\n\n                    <!-- *ngIf=\"dataItem.TrangThaiThanhToan == 2 && dataItem.TongSoQua > dataItem.TongSoQuaDaXuat\" -->\n                    <button *ngIf=\"dataItem.TrangThaiThanhToan == 2 && dataItem.TongSoQua > dataItem.TongSoQuaDaXuat\"\n                        (click)=\"xuatQuaChild(dataItem.benhNhanId, dataItem.chuongTrinhGoiDichVuId)\" mat-menu-item>\n                        <span>Xuất quà</span>\n                    </button>\n\n                    <button *ngIf=\"dataItem.TrangThai == 2\" (click)=\"hoanThanhSuDungChild(dataItem.Id)\" mat-menu-item>\n                        <span>Hoàn thành sử dụng</span>\n                    </button>\n\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n\n        <ng-template #maBNTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">\n                {{dataItem.MaBenhNhan}}</a>\n        </ng-template>\n\n\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <app-checkbox (modelChange)=\"CheckboxChange($event, true)\" id=\"DangChoDuyetId\"\n                    [(model)]=\"marketing.DangChoNhanTien\" class=\"ml-2\" label=\"Đang chờ n.tiền\">\n                </app-checkbox>\n                <app-checkbox (modelChange)=\"CheckboxChange($event, false, true)\" id=\"TuChoiDuyetId\"\n                    [(model)]=\"marketing.DangChoThanhToan\" class=\"ml-2\" label=\"Chưa t.toán\">\n                </app-checkbox>\n                <app-checkbox (modelChange)=\"CheckboxChange($event, false, false, true)\" id=\"DaDuyetId\"\n                    [(model)]=\"marketing.DaThanhToan\" class=\"ml-2\" label=\"Đã t.toán\">\n                </app-checkbox>\n\n                <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"marketing.SearchString\" (keyup)=\"onKey($event)\"\n                        (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n\n                <!-- <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeXuat\" fxFlex=\"200px\" fxFlex.sm=\"auto\"\n                [(model)]=\"xuatKhoSearch.RangeXuat\" label=\"Xuất từ ngày - đến ngày\" (keyup)=\"onKeyNgayXuat($event)\"\n                (modelChange)=\"changeNgayXuatRange($event)\" (blur)=\"blur($event)\" class=\"mt-1 on-header\">\n                </app-daterangepicker> -->\n\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"marketing.TuNgay\" #tiepnhantu\n                    id=\"ThoiDiemTiepNhanTuFormat\" (modelChange)=\"tuNgayChange()\" label=\"Từ ngày\" class=\"ml-2 on-header\"\n                    (keyup)=\"onKeyTuNgayDenNgay($event)\">\n                </app-datetimepicker>\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"marketing.DenNgay\" #tiepnhanden\n                    id=\"ThoiDiemTiepNhanDenFormat\" (modelChange)=\"denNgayChange()\" label=\"Đến ngày\"\n                    class=\"ml-2 on-header\" (keyup)=\"onKeyTuNgayDenNgay($event)\">\n                </app-datetimepicker>\n\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n\n                <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button (click)=\"add()\" class=\"mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip\n                    title=\"Thêm\" type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n\n            </div>\n        </ng-template>\n\n\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Hành Chính\n            <span class=\"thong-tin-tai-khoan-benh-nhan\"\n                *ngIf=\"thongTinTaiKhoanBenhNhan != null && thongTinTaiKhoanBenhNhan != undefined\">\n                Mã NB: <span style=\"font-weight: bold;\">{{thongTinTaiKhoanBenhNhan.MaBenhNhan}}</span> - Tài\n                Khoản: <span style=\"font-weight: bold; color:green\">{{thongTinTaiKhoanBenhNhan.SoDuTaiKhoan |\n                    number:'0.2-2':'vi-VN'}}</span>\n            </span>\n        </h3>\n        <app-textbox class=\"text-transform-uppercase\" #HoVaTenTextbox (modelChange)=\"changeHoTen($event)\" (keyup)=\"onKey($event)\" id=\"HoTen\"\n           \n            label=\"Họ và tên\" [(model)]=\"marketing.HoTen\" maxlength=\"100\" [fxFlex.sm]=\"!isUpdate? '15%' : '20%'\"\n            [fxFlex]=\"!isUpdate ? '15%' : '20%'\" [isAutoFocus]=\"true\" [required]=\"true\" [upperCase]=\"true\"  \n            [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n        </app-textbox>\n\n\n        <div *ngIf=\"!isUpdate\" fxFlex=\"5%\" fxFlex.sm=\"5%\">\n            <button color=\"default\" mat-raised-button type=\"button\" style=\"height: 100%;\" tabindex=\"-1\"\n                (click)=\"timKiemBenhNhanPopup()\" [ngStyle]=\"{'color':true == true?'green':'grey'}\">\n                <mat-icon [icIcon]=\"icFind\"></mat-icon>\n                <div style=\"line-height: 20px;\">{{totalBenhNhan}}</div>\n            </button>\n        </div>\n\n\n        <app-datepicker #NgaySinhCoBHYT (keyup)=\"onKey($event)\" id=\"NgaySinh\" fxFlex=\"13%\" fxFlex.sm=\"13%\"\n            label=\"Ngày sinh\" [(model)]=\"marketing.NgayThangNamSinh\" [required]=\"true\"\n            (modelChange)=\"ThongTinBenhNhanNgaySinhChange($event)\"\n            [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n        </app-datepicker>\n\n        <app-textboxnumeric [(model)]=\"marketing.NamSinh\" id=\"Numerictextbox\" fxFlex=\"7%\" fxFlex.sm=\"7%\"\n            label=\"Năm sinh\" format=\"0\" min=\"1\" max=\"9999\" (keyup)=\"onKey($event)\"\n            [disabled]=\"marketing.NgayThangNamSinh!=null\"\n            [validationerror]=\"'NamSinh' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <!-- <app-textbox *ngIf=\"under6yearsold\" id=\"SoTuoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số tuổi\" [disabled]=\"true\" [(model)]=\"soTuoiDisplay\">\n    </app-textbox> -->\n\n        <app-textboxmask (keyup)=\"onKey($event)\" id=\"SoDienThoai\" onlynumber=\"true\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n            label=\"Số điện thoại\" maxlength=\"10\" [(model)]=\"marketing.SoDienThoai\" mask=\"000 000 0000\" \n            (modelChange)=\"changeSDT($event)\">\n        </app-textboxmask>\n\n        <app-dropdownlist id=\"Dropdownlist\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Giới tính\"\n            url=\"TiepNhanBenhNhan/GetGioiTinh\" [(model)]=\"marketing.GioiTinh\" bind=\"true\"\n            [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n        </app-dropdownlist>\n\n        <app-combobox id=\"NgheNghiep\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề Nghiệp\" bind=\"true\"\n            url=\"TiepNhanBenhNhan/GetNgheNghiep\" [(model)]=\"marketing.NgheNghiepId\">\n        </app-combobox>\n\n        <app-combobox id=\"GetQuocTich\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quốc tịch\" bind=\"true\"\n            url=\"TiepNhanBenhNhan/GetQuocTich\" [(model)]=\"marketing.QuocTichId\">\n        </app-combobox>\n\n        <app-combobox id=\"TinhThanhPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" bind=\"true\"\n            (modelChange)=\"TinhThanhPhoChange($event)\" label=\"Tỉnh/Thành Phố\"\n            url=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{marketing.QuanHuyenId}}\" hierarchyKeyToSend=\"tinhThanh\"\n            [(model)]=\"marketing.TinhThanhId\" class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n            [templateHeader]=\"tinhThanhTemplateHeader\">\n            <ng-template #tinhThanhTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #tinhThanhTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-combobox id=\"QuanHuyen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quận/Huyện\" #comboboxQuanHuyen\n            (modelChange)=\"QuanHuyenChange($event)\"\n            url=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{marketing.PhuongXaId}}\" hierarchyKeyToListen=\"tinhThanh\"\n            hierarchyKeyToSend=\"quanHuyen\" bind=\"true\" [(model)]=\"marketing.QuanHuyenId\" class=\"item-no-padding\"\n            [template]=\"quanHuyenTemplate\" [templateHeader]=\"quanHuyenTemplateHeader\">\n            <ng-template #quanHuyenTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #quanHuyenTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-combobox id=\"PhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Phường/Xã\" #comboboxPhuongXa\n            url=\"TiepNhanBenhNhan/GetPhuongXa\" hierarchyKeyToListen=\"quanHuyen\" (modelChange)=\"PhuongXaChange($event)\"\n            [(model)]=\"marketing.PhuongXaId\" class=\"item-no-padding\" [template]=\"phuongXaTemplate\"\n            [templateHeader]=\"phuongXaTemplateHeader\">\n            <ng-template #phuongXaTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #phuongXaTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-textbox class=\"text-transform-capitalize\" id=\"SoNhaDuongPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\"\n            (keyup)=\"onKey($event)\" label=\"Số nhà/Đường phố\" [(model)]=\"marketing.DiaChi\" (modelChange)=\"changDiaChi($event)\">\n        </app-textbox>\n\n        <app-textbox id=\"SoCMND\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số CMND\" (keyup)=\"onKey($event)\"\n            [(model)]=\"marketing.SoChungMinhThu\" maxlength=\"12\" onlynumber=\"true\" (modelChange)=\"changCMND($event)\"\n            [validationerror]=\"'SoChungMinhThu' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-textbox id=\"Email\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" maxlength=\"200\" [(model)]=\"marketing.Email\"\n            [validationerror]=\"'Email' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-textbox id=\"NoiLamViec\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" label=\"Nơi làm việc\"\n            [(model)]=\"marketing.NoiLamViec\">\n        </app-textbox>\n\n        <app-combobox bind=\"true\" id=\"DanToc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Dân tộc\"\n            url=\"TiepNhanBenhNhan/GetDanToc\" [(model)]=\"marketing.DanTocId\">\n        </app-combobox>\n    </div>\n\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" fxFlex=\"100%\"\n        fxFlex.sm=\"100%\">\n        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Gói Marketing\n        </h3>\n\n        <!--Begin Thêm chọn gói và số lượng marketing gói trước -->\n        <app-combobox id=\"goi-marketing\" fxFlex=\"30%\" fxFlex.sm=\"100%\" label=\"Gói marketing\" #comboboxPhuongXa\n            url=\"DanhMucMarketing/GetListGoiMarketing\" [(model)]=\"chonGoiMarketing.GoiMarketingId\"\n            class=\"item-no-padding\" [template]=\"goiTemplate\" [templateHeader]=\"goiTemplateHeader\" [required]=\"true\"    \n            [validationerror]=\"'GoiMarketingId' | validationerror:validationErrors\">\n            <ng-template #goiTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #goiTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.DisplayName}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-textboxnumeric id=\"so-luong\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Số lượng\"\n            (modelChange)=\"changeSoLuongMarketing($event)\" [(model)]=\"chonGoiMarketing.SoLuong\">\n        </app-textboxnumeric>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip fxFlex=\"20%\"\n            fxFlex.sm=\"100%\">\n            <button type=\"button\" (click)=\"themGoiMarketing()\" color=\"primary\" mat-raised-button>\n                <span>Thêm</span>\n            </button>\n        </div>\n        <!--End Thêm chọn gói và số lượng marketing gói trước  -->\n\n        <app-grid *ngIf=\"(isUpdate == true && searchStringDefault != null) || isUpdate == false\"\n            [gridDataSource]=\"dataGridMarketing\" height=\"400\" [detailTemplate]=\"detailTemplate\" #parentGrid\n            [showStt]=\"true\" fxFlex=\"100%\" fxFlex.sm=\"100%\" baseRoute=\"/danh-muc/danh-sach-marketing/them\"\n            (extDetailExpand)=\"extDetailExpand($event)\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n            [additionalSearchString]=\"searchStringDefault\" [useHeaderDefault]=\"false\"  [useAddDeault]=\"false\"\n            [removeGroupFooterIfIsOnlyOne]=\"true\" [showDefaultPagerTemplate]=\"false\"\n            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\">\n        </app-grid>\n\n        <ng-template #detailTemplate let-dataItem>\n            <div class=\"grid-child\">\n                <h3 fxFlex=\"100%\" style=\"padding-top: 15px !important;\" class=\"sub-title mt-0\">Dịch Vụ Trong Gói </h3>\n                <app-grid baseRoute=\"/danh-muc/danh-sach-marketing/them\" [groups]=\"groupCacDichVu\" [sort]=\"sort\"\n                    #gridDichVus masterName=\"gridDichVus\" [gridColumns]=\"gridDichVuColumns\" [showStt]=\"true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\" [useHeaderDefault]=\"false\"\n                    [removeGroupFooterIfIsOnlyOne]=\"true\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" (extOnDataBound)=\"onDataBoundGrid($event)\" [urlGetData]=\"urlGetDataGridChild1\"\n                    [urlGetTotalPage]=\"urlGetTotalPageGridChild1\" searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n\n\n                <span *ngIf=\"dataItem.IsHaveGift\" style=\"padding: 15px 0 15px 0 !important;\" fxFlex=\"100%\"\n                    fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\">\n                    <h3 fxFlex=\"40%\" class=\"sub-title mt-0\">Quà Tặng Kèm Theo\n                    </h3>\n                    <!-- *ngIf=\"dataItem.TrangThai == 2\" -->\n                    <span *ngIf=\"dataItem.TrangThai == 2\" style=\"text-align: right;\" fxFlex=\"60%\">\n                        <button id=\"{{dataItem.Id}}\" (click)=\"XuatQua($event)\" type=\"button\" color=\"primary\"\n                            mat-raised-button>Xuất quà</button>\n                    </span>\n                </span>\n\n                <app-grid *ngIf=\"dataItem.IsHaveGift\" baseRoute=\"/danh-muc/danh-sach-marketing/them\" [sort]=\"sortChild1\"\n                    #gridChild2 [gridColumns]=\"gridChild2Columns\" [documentType]=\"documentType\" [showStt]=\"true\"\n                    [additionalSearchString]=\"id\" [useAddDeault]=\"false\" pageSize=\"5\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild2\" [urlGetTotalPage]=\"urlGetTotalPageGridChild2\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n\n                <span *ngIf=\"dataItem.CoCacDichVuKhac\" style=\"padding: 15px 0 15px 0 !important;\" fxFlex=\"100%\"\n                    fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\">\n                    <h3 fxFlex=\"40%\" class=\"sub-title mt-0\">DỊCH VỤ KHUYẾN MẠI KÈM THEO\n                    </h3>\n                </span>\n\n                <app-grid *ngIf=\"dataItem.CoCacDichVuKhac\" baseRoute=\"/danh-muc/danh-sach-marketing/them\" [sort]=\"sort\"\n                    #gridCacDichVus [gridColumns]=\"gridCacDichVuKhuyenMaiColumns\" [documentType]=\"documentType\"\n                    [showStt]=\"true\" [additionalSearchString]=\"dataItem.Id + ';' + isUpdate + ';'\"\n                    [useAddDeault]=\"false\" pageSize=\"5\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                    [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataGridChildDichVuKyThuat\"\n                    [groups]=\"groupCacDichVu\" [urlGetTotalPage]=\"urlGetTotalPageGridChildDichVuKyThuat\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n\n            </div>\n        </ng-template>\n\n        <ng-template #detailTemplate2 let-dataItem>\n\n            <div class=\"grid-child\">\n                <h3 fxFlex=\"100%\" style=\"padding-top: 15px !important;\" class=\"sub-title mt-0\">Dịch Vụ Trong Gói\n                </h3>\n\n                <app-grid baseRoute=\"/danh-muc/danh-sach-marketing/them\" [groups]=\"groupCacDichVu\" [sort]=\"sort\"\n                    (extOnDataBound)=\"onDataBoundGrid($event)\" [gridColumns]=\"gridDichVuColumns\" [showStt]=\"true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\" [useHeaderDefault]=\"false\"\n                    [removeGroupFooterIfIsOnlyOne]=\"true\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataGridChild1\"\n                    [urlGetTotalPage]=\"urlGetTotalPageGridChild1\" searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n\n                <span style=\"padding: 15px 0 15px 0 !important;\" fxFlex=\"100%\" fxLayout=\"row wrap\"\n                    fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\">\n                    <h3 fxFlex=\"40%\" class=\"sub-title mt-0\">Quà Tặng Kèm Theo\n                    </h3>\n                </span>\n\n                <app-grid baseRoute=\"/danh-muc/danh-sach-marketing/them\" [sort]=\"sortChild1\" [showStt]=\"true\"\n                    [gridColumns]=\"gridChild2Columns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild2\" [urlGetTotalPage]=\"urlGetTotalPageGridChild2\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n\n                <span style=\"padding: 15px 0 15px 0 !important;\" fxFlex=\"100%\" fxLayout=\"row wrap\"\n                    fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\">\n                    <h3 fxFlex=\"40%\" class=\"sub-title mt-0\">DỊCH VỤ KHUYẾN MẠI KÈM THEO\n                    </h3>\n                </span>\n\n                <app-grid baseRoute=\"/danh-muc/danh-sach-marketing/them\" [sort]=\"sort\" #gridCacDichVus\n                    [gridColumns]=\"gridCacDichVuKhuyenMaiColumns\" [documentType]=\"documentType\" [showStt]=\"true\"\n                    [additionalSearchString]=\"dataItem.Id + ';' + isUpdate + ';'\" [useAddDeault]=\"false\" pageSize=\"5\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChildDichVuKyThuat\" [groups]=\"groupCacDichVu\"\n                    [urlGetTotalPage]=\"urlGetTotalPageGridChildDichVuKyThuat\" [autoHeight]=\"true\">\n                </app-grid>\n            </div>\n        </ng-template>\n\n    </div>\n\n    <div *ngIf=\"lstDaHoanThanh != null && lstDaHoanThanh.length > 0\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n        fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Đã hoàn thành</h3>\n        <app-grid *ngIf=\"isUpdate == true && searchStringDaHoanThanhDefault != null\"\n            [urlGetData]=\"urlGetDataDaHoanThanhGrid\" [urlGetTotalPage]=\"urlGetTotalDaHoanThanhPageGrid\"\n            [HideHeader]=\"true\" [autoHeight]=\"true\" [detailTemplate]=\"detailTemplate2\" #parentGrid2 [showStt]=\"true\"\n            baseRoute=\"/danh-muc/danh-sach-marketing/them\" (extDetailExpand)=\"extDetailExpand($event)\"\n            [gridColumns]=\"gridDaHoanThanhColumns\" [documentType]=\"documentType\" [useHeaderDefault]=\"false\"\n            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [additionalSearchString]=\"searchStringDaHoanThanhDefault\"\n            [checkboxAble]=\"false\"></app-grid>\n\n    </div>\n\n    <ng-template #tenGoiTemplate let-dataItem>\n        <div style=\"display: flex; align-items: flex-end; color: green;\">\n            <app-checkbox hidden [disabled]=\"dataItem.BenhNhanDaThanhToan != 0\"\n                (modelChange)=\"checkedChange($event, dataItem)\" [(model)]=\"dataItem.IsChecked\"\n                id=\"IsChecked{{dataItem.Id}}\"></app-checkbox>\n            <span class=\"span-1-goi-marketing l\" position=\"right\" style=\"margin-left: 10px;\"\n                title=\"{{dataItem.TenDisplay}}\" kendoTooltip>{{dataItem.TenDisplay}}</span>\n        </div>\n    </ng-template>\n\n    <ng-template #tinhTrangTemplate let-dataItem>\n        <div kendoTooltip>\n            <!-- <span *ngIf=\"dataItem.IsChecked && isUpdate\" kendoTooltip class=\"reverse-ellipsis l\"\n                title=\"ĐÃ THU: {{dataItem.BenhNhanDaThanhToanDisplay}} - CHƯA THU: {{dataItem.ChuaThuDisplay}}\">ĐÃ THU:\n                <b style=\"color: green;\">{{dataItem.BenhNhanDaThanhToanDisplay}}</b>                -\n                CHƯA THU: <b style=\"color: orange;\">{{dataItem.ChuaThuDisplay}}</b></span> -->\n            <span>\n                <b *ngIf=\"dataItem.TrangThaiGoi == 4\" style=\"color: Red;\">Gói {{dataItem.TrangThaiGoiDisplay}}</b>\n                <b *ngIf=\"dataItem.TrangThaiGoi == 3\" style=\"color: green;\">{{dataItem.TrangThaiGoiDisplay}}</b>\n                <b *ngIf=\"dataItem.TrangThaiGoi == 2\" style=\"color: orange;\">{{dataItem.TrangThaiGoiDisplay}}</b>\n            </span>\n        </div>\n    </ng-template>\n    <ng-template #tenGoiDaHoanThanhTemplate let-dataItem>\n        <div style=\"display: flex; align-items: flex-end;\">\n            <app-checkbox [disabled]=\"true\" [(model)]=\"dataItem.IsChecked\" id=\"IsChecked2b{{dataItem.Id}}\">\n            </app-checkbox>\n            <span class=\"span-1-goi-marketing l\" position=\"right\" style=\"margin-left: 10px;\"\n                title=\"{{dataItem.TenDisplay}}\" kendoTooltip>{{dataItem.TenDisplay}}</span>\n        </div>\n    </ng-template>\n\n    <!-- <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKeyGrid($event)\"\n                    (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n\n        </div>\n    </ng-template> -->\n\n    <ng-template #tongCongFooterTemplate let-dataItem>\n        <span style=\"float:right\">Tổng cộng:</span>\n    </ng-template>\n\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n    <ng-template #donGiaTemplate let-dataItem>\n        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #donGiaCKTemplate let-dataItem>\n        {{dataItem.DonGiaKhuyenMai | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #donGiaTruocCKTemplate let-dataItem>\n        {{dataItem.DonGiaTruocCK | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #thanhTienTruocCKTemplate let-dataItem>\n        {{dataItem.ThanhTienTruocCK | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #donGiaSauCKTemplate let-dataItem>\n        {{dataItem.DonGiaSauCK | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #thanhTienSauCKTemplate let-dataItem>\n        {{dataItem.ThanhTienSauCK | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #tongChiFooterTemplate>\n        <span style=\"float:right\">Tổng cộng:</span>\n    </ng-template>\n\n    <ng-template #thanhTienTruocCKFooterTemplate let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTienTruocCK') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n    <ng-template #thanhTienTruocCKGroupFooterTemplate let-aggregates>\n        {{aggregates.ThanhTienTruocCK.sum | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #thanhTienSauCKFooterTemplate let-dataItem>\n        <p style=\"color: red; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTienSauCK') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n    <ng-template #thanhTienSauCKGroupFooterTemplate let-aggregates>\n        {{aggregates.ThanhTienSauCK.sum | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #goiSoSinhTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.GoiSoSinh==true\" [disabled]=\"true\" (modelChange)=\"checkedChange($event, dataItem)\"\n            [(model)]=\"dataItem.GoiSoSinh\" id=\"IsChecked{{dataItem.Id}}\"></app-checkbox>\n    </ng-template>\n\n    <ng-template #giaGoiTemplate let-dataItem>\n        {{dataItem.GiaGoi | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #daThuTemplate let-dataItem>\n        <span *ngIf=\"dataItem.TrangThaiGoi == 4\">{{0| number:'0.2-2':'vi-VN'}}</span>\n        <span *ngIf=\"dataItem.TrangThaiGoi != 4\">{{dataItem.BenhNhanDaThanhToan | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n    <ng-template #chuaThuTemplate let-dataItem>\n        <span *ngIf=\"dataItem.TrangThaiGoi == 4\">{{0| number:'0.2-2':'vi-VN'}}</span>\n        <span *ngIf=\"dataItem.TrangThaiGoi != 4\">{{dataItem.ChuaThu | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n    <ng-template #daDungTemplate let-dataItem>\n        <span *ngIf=\"dataItem.TrangThaiGoi == 4\">{{0| number:'0.2-2':'vi-VN'}}</span>\n        <span *ngIf=\"dataItem.TrangThaiGoi != 4\">{{dataItem.DangDung | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #actionTemplate let-dataItem>\n        <button *ngIf=\"dataItem.TrangThaiGoi === null\" type=\"button\" (click)=\"xoaChuongTrinh(dataItem)\" color=\"warn\" mat-raised-button>\n            <span>Xóa</span>\n        </button>\n    </ng-template>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Marketing',Path:''}\n        ,{Title:'Đăng Ký Gói Marketing',Path:'/marketing/dang-ky-goi-marketing', queryParams: {holdQuery : true}, Active: true}\n        \n            ]\" [isicMoreVert]=\"false\">\n        </app-header-form>\n\n    <!-- <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n        <div class=\"p-gutter\" vexContainer>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <h2 style=\"margin-right: 15px !important;\" class=\"title m-0\">Cập Nhật Đăng Ký Gói Marketing</h2>\n                    \n                        <!-- (modelChange)=\"lyDoVaoVienChange($event)\" -->\n                        <!-- <app-radio id=\"IsXuatKhac\" class=\"no-label\" [(model)]=\"IsXuatKhac\"\n                             [items]=\"[{Value:false,Text:'Xuất qua kho khác'},{Value:true,Text:'Xuất khác'}]\">\n                        </app-radio> -->\n                    \n                    </div>\n\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                        <app-marketing-shared [isUpdate]=\"true\">\n                        </app-marketing-shared>\n\n                        <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                            <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\">\n                                                                            </app-formfooter>\n                            <!-- <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                            <button *ngIf=\"!loading\" type=\"button\" (click)=\"create()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu</button>\n                            <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                    alt=\"Loading\" /></button> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"m-0\">\n    <div>TÌM KIẾM NGƯỜI BỆNH</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n        [useHeaderDefault]=\"false\" #gridTimKiem [useActionDefault]=\"false\" [checkboxAble]=\"false\" height=\"511\"\n        [allowSortDefault]=\"true\" [headerTemplate]=\"headerTemplate\" [urlGetData]=\"urlGetDataGrid\" [showStt]=\"true\"\n        [urlGetTotalPage]=\"urlGetTotalPageGrid\" [additionalSearchString]=\"addtionStringDefault\">\n    </app-grid>\n</mat-dialog-content>\n\n<ng-template #actionTemplate let-dataItem>\n    <button class=\"button-chon\" (click)=\"chonBenhNhan(dataItem)\" mat-menu-item>\n        Chọn\n    </button>\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div style=\"padding: 10px;border-bottom: 1px solid #ccc;\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n            <app-textbox fxFlex=\"10%\" [(model)]=\"timKiemBenhNhanSearch.MaBN\" id=\"MaBenhNhan\" label=\"Mã NB\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-textbox fxFlex=\"12%\" [(model)]=\"timKiemBenhNhanSearch.BHYTMaSoThe\" id=\"MaBHYT\" label=\"Mã BHYT\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-textbox fxFlex=\"15%\" [(model)]=\"timKiemBenhNhanSearch.HoTen\" id=\"HoTen\" label=\"Họ và tên\"  [upperCase]=\"true\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n\n            <app-datepicker fxFlex=\"11%\" [(model)]=\"timKiemBenhNhanSearch.NgaySinhDisplay\" id=\"NgaySinhDisplay\"\n                label=\"Ngày sinh\" (keyup)=\"onKey($event)\">\n            </app-datepicker>\n\n            <app-textbox fxFlex=\"12%\" [(model)]=\"timKiemBenhNhanSearch.SoChungMinhThu\" id=\"CMND\" label=\"CMND\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <app-textboxmask fxFlex=\"10%\" [(model)]=\"timKiemBenhNhanSearch.SoDienThoai\" id=\"DienThoai\"\n                label=\"Điện thoại\" (keyup)=\"onKey($event)\" mask=\"000 000 0000\">\n            </app-textboxmask>\n            <app-textbox fxFlex=\"20%\" [(model)]=\"timKiemBenhNhanSearch.DiaChi\" id=\"DiaChi\" label=\"Địa chỉ\"\n                (keyup)=\"onKey($event)\">\n            </app-textbox>\n            <div fxFlex=\"5%\">\n                <button type=\"button\" color=\"primary\" (keyup)=\"onKey($event)\" (click)=\"TimKiem()\" mat-raised-button\n                    class=\"mt-5\">\n                    Tìm</button>\n            </div>\n\n        </div>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU XUẤT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvZGFuZy1reS1nb2ktbWFya2V0aW5nL21hcmtldGluZy1jcmVhdGUvbWFya2V0aW5nLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MarketingCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingCreateComponent", function() { return MarketingCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _marketing_shared_marketing_shared_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../marketing-shared/marketing-shared.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.ts");















let MarketingCreateComponent = class MarketingCreateComponent {
    constructor(route, router, baseService, ref, notificationService, authService, errorService, dialog, apiService) {
        this.route = route;
        this.router = router;
        this.baseService = baseService;
        this.ref = ref;
        this.notificationService = notificationService;
        this.authService = authService;
        this.errorService = errorService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.loading = false;
        this.confirm = null;
    }
    ngOnInit() {
    }
    onCreated() {
        //this.router.navigate(['marketing/dang-ky-goi-marketing/']);
        this.router.navigateByUrl('marketing/dang-ky-goi-marketing?holdQuery=true');
    }
    cancel() {
        this.onCreated();
    }
    // BVHD-3481
    //================================================================================================
    xuLyKiemTraDangKyGoiMarketing() {
        var data = this.shared.getSharedData();
        if (data.BenhNhanId == null || data.BenhNhanId == 0) {
            this.shared.validationErrors = null;
            this.ref.detectChanges();
            if (this.confirm != null) {
                this.dialog.closeAll();
                this.confirm = null;
            }
            this.apiService.post("DanhMucMarketing/KiemTraBenhNhanTrongHeThong", data).subscribe(result => {
                if (result != null) {
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: result.Message }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            this.xuLyLuuDangKyGoiMarketing();
                        }
                    });
                }
                else {
                    this.xuLyLuuDangKyGoiMarketing();
                }
            }, (err) => {
                this.shared.validationErrors = err.ValidationErrors;
                this.loading = false;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
        else {
            this.xuLyLuuDangKyGoiMarketing();
        }
    }
    xuLyLuuDangKyGoiMarketing() {
        var self = this;
        self.shared.validationErrors = null;
        self.ref.detectChanges();
        if (self.confirm != null) {
            self.dialog.closeAll();
            self.confirm = null;
        }
        self.confirm = self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ["thêm"]) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                self.loading = true;
                if (self.shared.validationErrors != null && self.shared.validationErrors.some(x => x)) {
                    self.loading = false;
                    return;
                }
                self.apiService.post("DanhMucMarketing", self.shared.getSharedData()).subscribe(resultData => {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                    self.loading = false;
                    self.cancel();
                }, (err) => {
                    self.shared.validationErrors = err.ValidationErrors;
                    self.loading = false;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
            }
        });
    }
};
MarketingCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_marketing_shared_marketing_shared_component__WEBPACK_IMPORTED_MODULE_14__["MarketingSharedComponent"], { static: true })
], MarketingCreateComponent.prototype, "shared", void 0);
MarketingCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-create.component.scss */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.scss")).default]
    })
], MarketingCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvZGFuZy1reS1nb2ktbWFya2V0aW5nL21hcmtldGluZy1kZXRhaWwvbWFya2V0aW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MarketingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingDetailComponent", function() { return MarketingDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MarketingDetailComponent = class MarketingDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
MarketingDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-detail.component.scss */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.scss")).default]
    })
], MarketingDetailComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvZGFuZy1reS1nb2ktbWFya2V0aW5nL21hcmtldGluZy1saXN0L21hcmtldGluZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MarketingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingListComponent", function() { return MarketingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _marketing_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../marketing.model */ "./src/app/modules/main/marketing/marketing.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _thu_chi_thu_chi_vien_phi_common_common_pdf_popup_common_pdf_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../thu-chi/thu-chi-vien-phi/common/common-pdf-popup/common-pdf-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/common-pdf-popup/common-pdf-popup.component.ts");


























let MarketingListComponent = class MarketingListComponent {
    constructor(apiService, authService, dialog, location, route, router, notificationService) {
        this.apiService = apiService;
        this.authService = authService;
        this.dialog = dialog;
        this.location = location;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.baseRoute = "/marketing/dang-ky-goi-marketing";
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"];
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.marketing = new _marketing_model__WEBPACK_IMPORTED_MODULE_19__["DanhSachMarketingSearch"]();
        this.holdQuery = null;
        this.additionalSearchString = null;
        this.sort = [{
                field: "NgayTao",
                dir: "desc"
            },
            {
                field: "Id",
                dir: "asc"
            }];
        this.urlGetDataGridChild = "DanhMucMarketing/GetDataForGridChildAsync";
        this.urlGetTotalPageGridChild = "DanhMucMarketing/GetTotalPageForGridChildAsync";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhSachMarketing;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].getItem('additionalSearchStringDSMarketing') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].getItem('additionalSearchStringDSMarketing');
            this.backWithSearch();
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].setItem('additionalSearchStringDSMarketing', null);
            this.additionalSearchString = JSON.stringify(this.marketing);
        }
        this.gridColumns = [
            ////MaBenhNhan, TenBenhNhan, NamSinh, GioiTinh, DienThoai, ChungMinhThu, DiaChi
            // { Field: "STT", Title: "#", Width: 30, Sortable: false },
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 100, Sortable: true, Template: this.maBNTemplate },
            { Field: "TenBenhNhan", Title: "Người bệnh", Width: 250, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
            { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
            { Field: "DienThoaiDisplay", Title: "Điện thoại", Width: 100, Sortable: true },
            { Field: "ChungMinhThu", Title: "CMND", Width: 100, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 200, Sortable: true },
            // { Field: "NgayTaoDisplay", Title: "Ngày tạo", Width: 200, Sortable: true },
            { Field: "Action", Title: "", Width: 50, Sortable: false, HideFilter: false, Template: this.actionTemplate }
        ];
        this.gridChildColumns = [
            //ChuongTrinhGoiMarketing, TongTienTT, TrangThaiTT, TrangThaiSuDung, TrangThaiNhanQua
            //{ Field: "STT", Title: "#", Width: 30, Sortable: false },
            { Field: "ChuongTrinhGoiMarketing", Title: "Chương Trình Gói Marketing", MinWidth: 200, Sortable: false },
            { Field: "TongTienTTDisplay", Title: "Tổng Tiền TT", Width: 150, Sortable: false },
            { Field: "TrangThaiTT", Title: "T.Trạng Thanh Toán", Width: 150, Sortable: false },
            { Field: "TrangThaiSuDung", Title: "T.Trạng Sử Dụng", Width: 150, Sortable: false },
            { Field: "TrangThaiNhanQua", Title: "T.Trạng Nhận Quà", Width: 150, Sortable: false },
            { Field: "NgayDangKyDisplay", Title: "Ngày đăng ký", Width: 150, Sortable: true },
            { Field: "Action", Title: "", Width: 50, Sortable: false, HideFilter: false, Template: this.actionTemplate2 }
        ];
    }
    backWithSearch() {
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].getItem("additionalSearchStringDSMarketing");
                if (additionalSearchString != null) {
                    let marketingClone = JSON.parse(additionalSearchString);
                    if (this.marketing.TuNgay != null && this.marketing.TuNgay != undefined) {
                        let startDate = new Date(this.marketing.TuNgay);
                        this.marketing.TuNgay = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                    }
                    if (this.marketing.DenNgay != null && this.marketing.DenNgay != undefined) {
                        let endDate = new Date(this.marketing.DenNgay);
                        this.marketing.DenNgay = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    //this.addtionStringDefault = additionalSearchString;
                    this.marketing = JSON.parse(additionalSearchString);
                    this.grid.additionalSearchString = JSON.stringify(marketingClone);
                    this.grid.searchString = this.marketing.SearchString;
                }
            }
        }
    }
    xemChiTiet(id, dataItem) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View)) {
            this.router.navigate(["/marketing/dang-ky-goi-marketing" + "/chinh-sua/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    daNhanTien(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
            //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);
            var self = this;
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageDaNhanTien }
            }).afterClosed().subscribe(result => {
                //this.dialogRef = null;
                if (result == "Yes") {
                    self.apiService.post("DanhMucMarketing/ChangeTrangThaiDangChoNhanTienOfBenhNhan?benhNhanId=" + id).subscribe(resultData => {
                        self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageDaNhanTienThanhCong);
                        self.grid.search();
                    }, (err) => {
                        //this.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            //self.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            self.notificationService.showError(err.Message);
                        }
                        //console.log("error = ", err)
                    });
                }
                else { }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    delete(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Delete)) {
            //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);
            var self = this;
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageXoa }
            }).afterClosed().subscribe(result => {
                //this.dialogRef = null;
                if (result == "Yes") {
                    self.apiService.post("DanhMucMarketing/RemoveMarketingOfBenhNhan?benhNhanId=" + id).subscribe(resultData => {
                        self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageXoaThanhCong);
                        self.grid.search();
                    }, (err) => {
                        //this.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            //self.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            self.notificationService.showError(err.Message);
                        }
                        //console.log("error = ", err)
                    });
                }
                else { }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    deleteChild(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Delete)) {
            //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);
            var self = this;
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageXoaChild }
            }).afterClosed().subscribe(result => {
                //this.dialogRef = null;
                if (result == "Yes") {
                    self.apiService.post("DanhMucMarketing/RemoveMarketingOfChild?yeuCauGoiId=" + id).subscribe(resultData => {
                        self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageXoaThanhCong);
                        self.detailGrid.search();
                    }, (err) => {
                        //this.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            //self.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            self.notificationService.showError(err.Message);
                        }
                        //console.log("error = ", err)
                    });
                }
                else { }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    daNhanTienChild(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
            //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);
            var self = this;
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageDaNhanTienChild }
            }).afterClosed().subscribe(result => {
                //this.dialogRef = null;
                if (result == "Yes") {
                    self.apiService.post("DanhMucMarketing/ChangeTrangThaiDangChoNhanTienOfChild?yeuCauGoiId=" + id).subscribe(resultData => {
                        self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageDaNhanTienThanhCong);
                        self.detailGrid.search();
                    }, (err) => {
                        //this.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            //self.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            self.notificationService.showError(err.Message);
                        }
                        //console.log("error = ", err)
                    });
                }
                else { }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xuatQuaChild(benhNhanId, chuongTrinhGoiId) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
            //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);
            var self = this;
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageXuatQuaChild }
            }).afterClosed().subscribe(result => {
                //this.dialogRef = null;
                if (result == "Yes") {
                    self.apiService.post("DanhMucMarketing/XuatQuaOfChild?benhNhanId=" + benhNhanId + "&chuongTrinhGoiDichVuId=" + chuongTrinhGoiId).subscribe(resultData => {
                        if (resultData == null || resultData == undefined) {
                            //MessageXuatQuaChildError
                            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageXuatQuaChildError);
                        }
                        else {
                            self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageXuatQuaChildThanhCong);
                        }
                        self.detailGrid.search();
                    }, (err) => {
                        //this.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            //self.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            self.notificationService.showError(err.Message);
                        }
                        //console.log("error = ", err)
                    });
                }
                else { }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    hoanThanhSuDungChild(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
            //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);
            var self = this;
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageDangSuDungChild }
            }).afterClosed().subscribe(result => {
                //this.dialogRef = null;
                if (result == "Yes") {
                    self.apiService.post("DanhMucMarketing/ChangeTrangThaiDangDangSuDungOfChild?yeuCauGoiId=" + id).subscribe(resultData => {
                        self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["DangKyGoiMarketingMessage"].MessageDaNhanTienThanhCong);
                        self.detailGrid.search();
                    }, (err) => {
                        //this.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            //self.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            self.notificationService.showError(err.Message);
                        }
                        //console.log("error = ", err)
                    });
                }
                else { }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    add() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Add)) {
            this.router.navigate(["/marketing/dang-ky-goi-marketing/them"]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    clearSearch() {
        if (this.marketing.SearchString == "" || this.marketing.SearchString == null) {
            this.grid.searchString = "";
            let xuatKhoClone = JSON.parse(JSON.stringify(this.marketing));
            let queryForHole = JSON.parse(JSON.stringify(xuatKhoClone));
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].setItem('additionalSearchStringDSMarketing', JSON.stringify(queryForHole));
            this.grid.search();
        }
    }
    onKey(event) {
        if (event.keyCode == 13) {
            this.Timkiem();
        }
    }
    Timkiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        let QueryString = null;
        this.grid._additionalSearchString = null;
        QueryString = this.marketing.SearchString;
        let xuatKhoClone = JSON.parse(JSON.stringify(this.marketing));
        if (xuatKhoClone.TuNgay != null && xuatKhoClone.TuNgay != undefined) {
            let date = new Date(xuatKhoClone.TuNgay);
            xuatKhoClone.TuNgay = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()));
        }
        if (xuatKhoClone.DenNgay != null && xuatKhoClone.DenNgay != undefined) {
            let date = new Date(xuatKhoClone.DenNgay);
            xuatKhoClone.DenNgay = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()));
        }
        var query = JSON.stringify(xuatKhoClone);
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].setItem("additionalSearchStringDSMarketing", JSON.stringify(this.marketing));
        this.grid._additionalSearchString = query;
        //LocalStorageHelper.setItem("additionalSearchStringDSMarketing", query);
        this.grid.searchString = QueryString;
        this.grid.search();
    }
    CheckboxChange($event, dangChoNhanTien = false, dangChoThanhToan = false, daThanhToan = false) {
        this.router.navigateByUrl('/marketing/dang-ky-goi-marketing?holdQuery=true');
        if (dangChoNhanTien) {
            this.marketing.DangChoNhanTien = $event;
        }
        else if (dangChoThanhToan) {
            this.marketing.DangChoThanhToan = $event;
        }
        else if (daThanhToan) {
            this.marketing.DaThanhToan = $event;
        }
        this.Timkiem();
    }
    onKeyTuNgayDenNgay(event) {
        if (event.key == "Enter") {
            this.Timkiem();
        }
    }
    tuNgayChange() {
        this.Timkiem();
    }
    denNgayChange() {
        this.Timkiem();
    }
    exportExcel() {
        //console.log("exportExcel");
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("DanhMucMarketing/ExportDanhSachMarketing", this.grid._gridQueryInfo).subscribe(resultData => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "DangKyGoiMarketing" + dateTimeNow.getFullYear() + ".xlsx");
            }, () => {
                //return null;
                //console.log("error")
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    inBangKeTrongGoiBenhNhan(benhNhanId) {
        this.showLoadingPopup();
        let arrFileUrl = [];
        let arrFilePdf = [];
        let hostingName = "";
        if (window.location.protocol == "http:") {
            hostingName = "http://" + window.location.host;
        }
        else {
            hostingName = "https://" + window.location.host;
        }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View)) {
            this.apiService.postExportPdf("DanhMucMarketing/InBangKeGoiMarketingBenhNhan?benhNhanId=" + benhNhanId + "&hostingName=" + hostingName).subscribe((file) => {
                let newBlob = new Blob([file], { type: "application/pdf" });
                let datalocalURL = window.URL.createObjectURL(newBlob);
                arrFileUrl.push(datalocalURL);
                arrFilePdf.push(file);
                if (arrFilePdf.length > 0) {
                    this.dialog
                        .open(_thu_chi_thu_chi_vien_phi_common_common_pdf_popup_common_pdf_popup_component__WEBPACK_IMPORTED_MODULE_25__["CommonPdfPopupComponent"], {
                        disableClose: false,
                        width: "1000px",
                        data: { arrFileUrl, arrFilePdf },
                    })
                        .afterClosed()
                        .subscribe((result) => {
                        this.closeAllDialogs();
                    });
                }
                else {
                    this.notificationService.showError("Không có thông tin.");
                    this.closeAllDialogs();
                }
            });
            (err) => {
                if (err.Message !== "Validation Failed") {
                    this.notificationService.showError(err.Message);
                    this.closeAllDialogs();
                }
            };
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
            this.closeAllDialogs();
        }
    }
    ketXuatGoiTheoBenhNhanExcel(benhNhanId) {
        this.showLoadingPopup();
        //Bệnh nhân có bao nhiêu yêu cầu chương trình maketing 
        this.apiService.get("DanhMucMarketing/AllGoiTheoBenhBenh?benhNhanId=" + benhNhanId).subscribe(ketQuaChuongTrinhs => {
            if (ketQuaChuongTrinhs.length > 0) {
                ketQuaChuongTrinhs.forEach(itemChuongTrinh => {
                    this.apiService.postExportExcel("DanhMucMarketing/KetXuatGoiTheoBenhNhanExcel?yeuCauGoiDichVuId=" + itemChuongTrinh)
                        .subscribe(res => {
                        this.showLoadingPopup();
                        let dateTimeNow = new Date();
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "KetXuatGoiTheoBenhNhanExcel_" + itemChuongTrinh + dateTimeNow.getFullYear() + ".xlsx");
                        this.dialog.closeAll();
                    }, err => {
                        this.notificationService.showError(err.Message);
                        this.dialog.closeAll();
                    });
                });
            }
        });
    }
    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }
    showSavingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
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
MarketingListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], MarketingListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate2', { static: true })
], MarketingListComponent.prototype, "actionTemplate2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maBNTemplate', { static: true })
], MarketingListComponent.prototype, "maBNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: true })
], MarketingListComponent.prototype, "grid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('detailGrid', { static: false })
], MarketingListComponent.prototype, "detailGrid", void 0);
MarketingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-list.component.scss */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.scss")).default]
    })
], MarketingListComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: MarketingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingRoutingModule", function() { return MarketingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _marketing_list_marketing_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marketing-list/marketing-list.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.ts");
/* harmony import */ var _marketing_create_marketing_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marketing-create/marketing-create.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.ts");
/* harmony import */ var _marketing_update_marketing_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marketing-update/marketing-update.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.ts");
/* harmony import */ var _marketing_detail_marketing_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marketing-detail/marketing-detail.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.ts");










const routes = [
    {
        path: '',
        component: _marketing_list_marketing_list_component__WEBPACK_IMPORTED_MODULE_6__["MarketingListComponent"],
        data: {
            title: 'Marketing',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachMarketing,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _marketing_create_marketing_create_component__WEBPACK_IMPORTED_MODULE_7__["MarketingCreateComponent"],
        data: {
            title: 'Thêm Marketing',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachMarketing,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _marketing_update_marketing_update_component__WEBPACK_IMPORTED_MODULE_8__["MarketingUpdateComponent"],
        data: {
            title: 'Chỉnh Sửa Marketing',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachMarketing,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet/:id',
        component: _marketing_detail_marketing_detail_component__WEBPACK_IMPORTED_MODULE_9__["MarketingDetailComponent"],
        data: {
            title: 'Xem Marketing',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachMarketing,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let MarketingRoutingModule = class MarketingRoutingModule {
};
MarketingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MarketingRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thong-tin-tai-khoan-benh-nhan {\n  float: right;\n  font-weight: normal;\n}\n\n.grid-child {\n  display: block !important;\n}\n\n.span-1-goi-marketing {\n  margin-left: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.span-2-goi-marketing {\n  width: 53%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL21hcmtldGluZy9kYW5nLWt5LWdvaS1tYXJrZXRpbmcvbWFya2V0aW5nLXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG1hcmtldGluZ1xcZGFuZy1reS1nb2ktbWFya2V0aW5nXFxtYXJrZXRpbmctc2hhcmVkXFxtYXJrZXRpbmctc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbWFya2V0aW5nL2Rhbmcta3ktZ29pLW1hcmtldGluZy9tYXJrZXRpbmctc2hhcmVkL21hcmtldGluZy1zaGFyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbWFya2V0aW5nL2Rhbmcta3ktZ29pLW1hcmtldGluZy9tYXJrZXRpbmctc2hhcmVkL21hcmtldGluZy1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhvbmctdGluLXRhaS1raG9hbi1iZW5oLW5oYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5ncmlkLWNoaWxkIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnNwYW4tMS1nb2ktbWFya2V0aW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc3Bhbi0yLWdvaS1tYXJrZXRpbmcge1xuICB3aWR0aDogNTMlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iLCIudGhvbmctdGluLXRhaS1raG9hbi1iZW5oLW5oYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5ncmlkLWNoaWxkIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnNwYW4tMS1nb2ktbWFya2V0aW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc3Bhbi0yLWdvaS1tYXJrZXRpbmcge1xuICB3aWR0aDogNTMlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MarketingSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingSharedComponent", function() { return MarketingSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _marketing_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../marketing.model */ "./src/app/modules/main/marketing/marketing.model.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/search */ "./node_modules/@iconify/icons-ic/search.js");
/* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
/* harmony import */ var _popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _xuat_qua_in_phieu_popup_xuat_qua_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");


















let MarketingSharedComponent = class MarketingSharedComponent {
    constructor(apiService, dialog, router, baseService, cdRef, notificationService, route) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.router = router;
        this.baseService = baseService;
        this.cdRef = cdRef;
        this.notificationService = notificationService;
        this.route = route;
        this.marketing = new _marketing_model__WEBPACK_IMPORTED_MODULE_2__["Marketing"]();
        this.chonGoiMarketing = new _marketing_model__WEBPACK_IMPORTED_MODULE_2__["ChonGoiMarketing"]();
        this.dataGridMarketing = {
            data: [],
            total: 0
        };
        this.modelTimKiemBenhNhan = new _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_9__["TimKiemBenhNhanGridVo"]();
        this.lstBenhNhan = new Array();
        this.totalBenhNhan = 0;
        this.icFind = _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.benhNhanId = 0;
        this.validationErrors = [];
        this.gridColumns = [];
        this.gridDichVuColumns = [];
        this.gridChild2Columns = [];
        this.gridDaHoanThanhColumns = [];
        this.gridCacDichVuKhuyenMaiColumns = [];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"];
        this.urlGetDataGrid = "DanhMucMarketing/GetDataThongTinGoiForGridAsync";
        this.urlGetTotalPageGrid = "DanhMucMarketing/GetTotalThongTinGoiPageForGridAsync";
        this.urlGetDataDaHoanThanhGrid = "DanhMucMarketing/GetDataThongTinGoiDaHoanThanhForGridAsync";
        this.urlGetTotalDaHoanThanhPageGrid = "DanhMucMarketing/GetTotalThongTinGoiDaHoanThanhPageForGridAsync";
        this.urlGetDataGridChild1 = "DanhMucMarketing/GetDataDichVuGoiForGridAsync";
        this.urlGetTotalPageGridChild1 = "DanhMucMarketing/GetTotalDichVuGoiPageForGridAsync";
        this.urlGetDataGridChild2 = "DanhMucMarketing/GetDataQuaTangGoiForGridAsync";
        this.urlGetTotalPageGridChild2 = "DanhMucMarketing/GetTotalQuaTangGoiPageForGridAsync";
        //Grid bao gồm dv: Khám, Kỹ thuật, Giường
        this.urlGetDataGridChildDichVuKyThuat = "DanhMucMarketing/GetDataCacDichVuTrongGoiForGridAsync";
        this.urlGetTotalPageGridChildDichVuKyThuat = "DanhMucMarketing/GetTotalCacDichVuTrongGoiPageForGridAsync";
        this.sortChild1 = [{
                field: 'STT',
                dir: 'desc'
            }];
        this.sort = [{
                field: 'NhomId',
                dir: 'asc'
            }];
        this.lstDaChon = new Array();
        this.lstDaHoanThanh = new Array();
        this.lstExpand = new Array();
        this.lstAppend = new Array();
        this.lstAppend2 = new Array();
        this.searchStringDefault = null;
        this.searchStringDaHoanThanhDefault = null;
        this.dataToSumThanhTien = [];
        // groupCacDichVu: GroupDescriptor[] = [{ field: 'Nhom' }];
        this.groupCacDichVu = [
            {
                field: 'Nhom', aggregates: [
                    { field: 'ThanhTienTruocCK', aggregate: 'sum' },
                    { field: 'ThanhTienSauCK', aggregate: 'sum' }
                ]
            }
        ];
        this.searchString = null;
        this.postTimKiem = null;
        this.timeOutTimKiem = null;
    }
    totalThanhTien(field) {
        switch (field) {
            case 'ThanhTienTruocCK':
                if (this.dataToSumThanhTien.length > 0) {
                    return this.dataToSumThanhTien.reduce((sum, item) => sum + item.ThanhTienTruocCK, 0);
                }
            case 'ThanhTienSauCK':
                if (this.dataToSumThanhTien.length > 0) {
                    return this.dataToSumThanhTien.reduce((sum, item) => sum + item.ThanhTienSauCK, 0);
                }
        }
    }
    ;
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachMarketing;
        //Template: this.tinhTrangTemplate
        this.gridColumns = [
            { Field: "TenDisplay", Title: "Tên gói", Width: 300, Sortable: true, Template: this.tenGoiTemplate },
            { Field: "GoiSoSinh", Title: "Gói sơ sinh", Width: 100, Sortable: true, Template: this.goiSoSinhTemplate },
            { Field: "TrangThaiGoiDisplay", Title: "Tình Trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate },
            { Field: "GiaGoi", Title: "Giá Gói", Width: 100, Sortable: true, Template: this.giaGoiTemplate },
            { Field: "BenhNhanDaThanhToan", Title: "Đã Thu", Width: 200, Sortable: true, Template: this.daThuTemplate },
            { Field: "ChuaThu", Title: "Chưa Thu", Width: 150, Sortable: true, Template: this.chuaThuTemplate },
            { Field: "DaDung", Title: "Đã dùng", Width: 150, Sortable: true, Template: this.daDungTemplate },
            { Field: "NgayDangKyDisplay", Title: "Ngày Đăng ký", Width: 150, Sortable: true },
            { Field: "NguoiDangKy", Title: "Người đăng ký", Width: 150, Sortable: true },
            { Field: "", Title: "", Width: 150, Sortable: true, Template: this.actionTemplate },
        ];
        this.gridDichVuColumns = [
            { Field: "NhomId", Title: "Nhóm Id", Width: 50, Sortable: true, Hidden: true },
            { Field: "Nhom", Title: "Nhóm", Sortable: false, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 100, Sortable: false },
            { Field: "Ten", Title: "Tên Dịch Vụ", MinWidth: 150, Sortable: false, ShowTooltip: true },
            { Field: "LoaiGia", Title: "Loại Giá", Width: 150, Sortable: false },
            { Field: "SoLan", Title: "SL", Width: 100, Sortable: false },
            { Field: "DonGiaTruocCK", Title: "Đơn Giá trước CK", Width: 200, Sortable: false, Template: this.donGiaTruocCKTemplate },
            { Field: "DonGiaSauCK", Title: "Đơn Giá sau ck", Width: 200, Sortable: false, Template: this.donGiaSauCKTemplate, TemplateFooter: this.tongChiFooterTemplate },
            { Field: "ThanhTienTruocCK", Title: "Thành Tiền trước ck", Width: 150, Sortable: false, Template: this.thanhTienTruocCKTemplate, TemplateFooter: this.thanhTienTruocCKFooterTemplate, TemplateGroupFooter: this.thanhTienTruocCKGroupFooterTemplate },
            { Field: "ThanhTienSauCK", Title: "Thành Tiền sau ck", Width: 150, Sortable: false, Template: this.thanhTienSauCKTemplate, TemplateFooter: this.thanhTienSauCKFooterTemplate, TemplateGroupFooter: this.thanhTienSauCKGroupFooterTemplate },
        ];
        this.gridChild2Columns = [
            { Field: "Ten", Title: "Quà Tặng", MinWidth: 150, Sortable: false },
            { Field: "SoLuongTonDisplay", Title: "SL Tồn", Width: 100, Sortable: false },
            { Field: "SoLuongDisplay", Title: "SL Xuất", Width: 100, Sortable: false },
            { Field: "GhiChu", Title: "Ghi Chú", Width: 250, Sortable: false },
            { Field: "SoPhieuXuat", Title: "Phiếu Xuất", Width: 100, Sortable: false },
        ];
        this.gridDaHoanThanhColumns = [
            { Field: "TenGoi", Title: "Tên gói", MinWidth: 90, Sortable: true, Template: this.tenGoiDaHoanThanhTemplate },
        ];
        this.gridCacDichVuKhuyenMaiColumns = [
            { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "Ten", Title: "Tên dịch vụ", Width: 100, Sortable: false, ShowTooltip: true },
            { Field: "NhomId", Title: "Nhóm Id", Width: 50, Sortable: true, Hidden: true },
            { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "LoaiGia", Title: "Loại giá", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "SoLan", Title: "SL", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 80, Sortable: false, Template: this.donGiaTemplate },
            { Field: "DonGiaKhuyenMai", Title: "Đơn giá KM", Width: 80, Sortable: false, Template: this.donGiaCKTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 100, Sortable: false, Template: this.thanhTienTemplate },
            { Field: "GhiChu", Title: "Ghi chú", Width: 100, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 70, Sortable: false, ShowTooltip: true },
        ];
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
            //this.isCreate = false;
        }
    }
    changeSoLuongMarketing(event) {
        if (event !== undefined && event !== null) {
            this.chonGoiMarketing.SoLuong = event;
        }
        else {
            this.chonGoiMarketing.SoLuong = 1;
        }
    }
    themGoiMarketing() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.chonGoiMarketing.GoiMarketingId == undefined &&
            this.chonGoiMarketing.GoiMarketingId == null) {
            this.validationErrors.push({
                Message: "Vui lòng chọn marketing",
                Field: "GoiMarketingId",
            });
        }
        //Kiểm Tra this.chonGoiMarketing.GoiMarketingId lấy thông tin gói đó lên AddThongTinGoiMarketing
        if (this.validationErrors.length == 0) {
            this.apiService.post("DanhMucMarketing/AddThongTinGoiMarketing", this.chonGoiMarketing).subscribe(resultData => {
                if (resultData.length > 0) {
                    resultData.forEach(dataItem => {
                        this.notificationService.showSuccess("Thêm gói thành công.");
                        this.dataGridMarketing.data.push(dataItem);
                        this.chonGoiMarketing = new _marketing_model__WEBPACK_IMPORTED_MODULE_2__["ChonGoiMarketing"]();
                    });
                    this.dataGridMarketing.total = this.dataGridMarketing.data.length;
                }
                this.gridChild.search();
            }, (err) => {
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    this.notificationService.showError(err.Message);
                }
            });
        }
    }
    getThongGoiMRTBenhNhan(benhNhanId) {
        this.apiService.post("DanhMucMarketing/GetThongGoiMRTBenhNhan?benhNhanId=" + benhNhanId).subscribe(resultData => {
            let dsChon = [];
            this.dataGridMarketing.data = resultData.Data;
            this.dataGridMarketing.total = resultData.TotalRowCount;
            if (resultData.length > 0) {
                resultData.forEach(dataItem => {
                    dsChon.push(dataItem.Id);
                });
            }
            this.gridChild.search();
            this.marketing.LstDaChon = dsChon;
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                this.notificationService.showError(err.Message);
            }
        });
    }
    onDataBoundGrid(dataItem) {
        this.dataToSumThanhTien = dataItem.Data;
    }
    XuatQua(dataItem) {
        let elementId = dataItem.currentTarget.id;
        //console.log("XuatQua = ", elementId, dataItem);
        var self = this;
        if (this.dialogRef == undefined || this.dialogRef == null) {
            this.dialogRef = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["DangKyGoiMarketingMessage"].MessageConfirmXuatQua }
            }).afterClosed().subscribe(result => {
                this.dialogRef = null;
                if (result == "Yes") {
                    self.apiService.post("DanhMucMarketing/XuatQua?benhNhanId=" + self.id + "&chuongTrinhGoiDichVuId=" + elementId).subscribe(resultData => {
                        if (resultData == null || resultData == undefined) {
                            self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["DangKyGoiMarketingMessage"].MessageDaXuat);
                            //self.gridChild2.search();
                        }
                        else {
                            self.dialog.open(_xuat_qua_in_phieu_popup_xuat_qua_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_16__["XuatQuaInPhieuPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: resultData,
                            }).afterClosed().subscribe(() => {
                                self.gridChild2.search();
                            });
                        }
                    }, (err) => {
                        //this.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            self.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            self.notificationService.showError(err.Message);
                        }
                        //console.log("error = ", err)
                    });
                }
                else {
                }
            });
        }
    }
    getById(id) {
        this.baseService.getById(id).subscribe(resultData => {
            this.marketing = resultData;
            this.marketing.LstDaChon = resultData.LstDaChon;
            this.marketing.LstDaHoanThanh = resultData.LstDaHoanThanh;
            this.lstDaChon = resultData.LstDaChon;
            this.lstDaHoanThanh = resultData.LstDaHoanThanh;
            if (this.marketing.BenhNhanId > 0) {
                this.getThongGoiMRTBenhNhan(this.marketing.BenhNhanId);
            }
            // let self = this;
            // setTimeout(function () {
            //   self.Timkiem();
            // }, 500);
            if (this.id !== undefined && this.id !== null) {
                this.searchStringDefault = this.id + "|" + JSON.stringify(this.lstDaChon);
                this.searchStringDaHoanThanhDefault = this.id + "|" + JSON.stringify(this.lstDaHoanThanh);
            }
            else {
                this.searchStringDefault = null + "|" + JSON.stringify(this.lstDaChon);
                this.searchStringDaHoanThanhDefault = this.id + "|" + JSON.stringify(this.lstDaHoanThanh);
            }
        });
    }
    getSharedData() {
        //this.marketing.LstDaChon = this.lstDaChon;
        //kiểm tra trong grid có bao nhiêu data dc chọn
        let danhSachDaChon = [];
        if (this.dataGridMarketing.data.length > 0) {
            this.dataGridMarketing.data.forEach(element => {
                danhSachDaChon.push(element.Id);
            });
        }
        this.marketing.LstDaChon = danhSachDaChon;
        return this.marketing;
    }
    extDetailExpand(event) {
        this.dataChildCurrent = event.dataItem;
    }
    checkedChange(event, dataItem) {
        if (event == true) {
            this.addListDaChon(dataItem.Id);
        }
        else {
            this.removeListDaChon(dataItem.Id);
        }
        //console.log("checkedChange = ", event, dataItem);
    }
    clearSearch() {
        if ((this.searchString == "" || this.searchString == null) && this.gridChild != undefined) {
            this.gridChild.searchString = "";
            this.gridChild.search();
        }
    }
    onKeyGrid(event) {
        if (event.keyCode == 13) {
            this.Timkiem();
        }
    }
    Timkiem() {
        if (this.id !== undefined && this.id !== null) {
            this.gridChild._additionalSearchString = this.id + "|" + JSON.stringify(this.lstDaChon);
        }
        else {
            this.gridChild._additionalSearchString = null + "|" + JSON.stringify(this.lstDaChon);
        }
        this.gridChild.searchString = this.searchString;
        this.gridChild.search();
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        }
    }
    timKiemBenhNhan(model) {
        var self = this;
        if (self.timeOutTimKiem != null) {
            clearTimeout(self.timeOutTimKiem);
            self.timeOutTimKiem = null;
        }
        self.timeOutTimKiem = setTimeout(function () {
            self.setModelTimKiemBenhNhan();
            self.lstBenhNhan = new Array();
            self.totalBenhNhan = 0;
            if (self.postTimKiem != null) {
                self.postTimKiem.unsubscribe();
                self.postTimKiem = null;
            }
            self.postTimKiem = self.apiService.post("TiepNhanBenhNhan/GetBenhNhanTimKiem", model).subscribe(resultData => {
                //console.log("timKiemBenhNhan = ", resultData);
                self.lstBenhNhan = resultData;
                if (resultData != undefined && resultData != null) {
                    self.totalBenhNhan = resultData.length;
                    let index = 1;
                    self.lstBenhNhan.forEach(obj => {
                        obj.STT = index;
                        index = index + 1;
                    });
                }
                //console.log("timKiemBenhNhan = ", this.lstBenhNhan);
            }, () => {
            });
        }, 500);
    }
    setModelTimKiemBenhNhan() {
        this.modelTimKiemBenhNhan.HoTen = this.marketing.HoTen;
        this.modelTimKiemBenhNhan.NgaySinhDisplay = this.marketing.NgayThangNamSinh;
        this.modelTimKiemBenhNhan.NamSinh = this.marketing.NamSinh;
        //this.modelTimKiemBenhNhan.GioiTinh = this.tiepNhanBenhNhan.GioiTinh;
        this.modelTimKiemBenhNhan.SoChungMinhThu = this.marketing.SoChungMinhThu;
        this.modelTimKiemBenhNhan.SoDienThoai = this.marketing.SoDienThoai;
        this.modelTimKiemBenhNhan.DiaChi = this.marketing.DiaChi;
    }
    changeHoTen(event) {
        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
    }
    timKiemBenhNhanPopup() {
        let dataTimKiem = new _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_9__["DataTimKiem"]();
        dataTimKiem.searchBenhNhan = new _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_9__["TimKiemBenhNhanGridVo"]();
        dataTimKiem.searchBenhNhan = this.modelTimKiemBenhNhan; // lí do model gán == null không bt lý do
        // search 23062021 
        let dataSearch = {
            MaBN: null,
            MaBHYT: null,
            BHYTMaSoThe: null,
            HoTen: this.marketing.HoTen,
            NgaySinh: this.marketing.NgaySinh,
            NgaySinhDisplay: this.marketing.NgaySinh == null ? this.modelTimKiemBenhNhan.NgaySinhDisplay : this.marketing.NgaySinh,
            GioiTinh: null,
            GioiTinhDisplay: null,
            SoChungMinhThu: this.marketing.SoChungMinhThu,
            SoDienThoai: this.marketing.SoDienThoai != null ? this.marketing.SoDienThoai : this.modelTimKiemBenhNhan.SoDienThoai,
            DiaChi: this.marketing.DiaChi,
            Id: null,
            STT: null,
            ThangSinh: this.marketing.ThangSinh,
            NamSinh: this.marketing.NamSinh,
            NgaySinhFormat: this.marketing.NgaySinh != null &&
                this.marketing.ThangSinh != null &&
                this.marketing.NamSinh != null ? src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].formatDateTime(new Date(this.marketing.NgaySinh, this.marketing.ThangSinh, this.marketing.NamSinh), "dd/mm/yyyy")
                : null
        };
        //
        dataTimKiem.searchBenhNhan = dataSearch;
        dataTimKiem.data = new Array();
        dataTimKiem.searchBenhNhan;
        let dialogRef = this.dialog.open(_popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_10__["PopupTimKiemBenhNhanComponent"], {
            disableClose: false,
            width: '1400px',
            height: '600px',
            data: dataTimKiem,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != null && result != undefined) {
                this.checkExistYeuCauGoiDichVu(result.Id);
                this.validationErrors = null;
                this.setThongTinTaiKhoanBenhNhan(result.Id);
                //set benh nhan
                this.marketing.BenhNhanId = result.Id;
                this.benhNhanId = result.Id;
                this.setValueFromBenhNhanToYeuCauTiepNhan(result);
                this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
            }
        });
    }
    xoaChuongTrinh(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: `Bạn có muốn xoá gói ${dataItem.TenDisplay} không?` }
        }).afterClosed().subscribe(result => {
            if (result === "Yes") {
                this.notificationService.showSuccess("Xóa gói thành công.");
                this.dataGridMarketing.data.splice(this.dataGridMarketing.data.findIndex((x) => x == dataItem), 1);
            }
        });
    }
    checkExistYeuCauGoiDichVu(id) {
        this.apiService.post("DanhMucMarketing/GetYeuCauGoiDichVuOfBenhNhan?id=" + id).subscribe(resultData => {
            this.dialog.closeAll();
            if (resultData == true) {
                this.router.navigate(['marketing/dang-ky-goi-marketing/chinh-sua/' + id]);
            }
        }, () => {
            //return null;
            //console.log("error")
        });
    }
    setThongTinTaiKhoanBenhNhan(id) {
        this.apiService.post("TiepNhanBenhNhan/GetThongTinTaiKhoanBenhNhan?id=" + id).subscribe(resultData => {
            this.thongTinTaiKhoanBenhNhan = resultData;
        }, () => {
            //return null;
            //console.log("error")
        });
    }
    setValueFromBenhNhanToYeuCauTiepNhan(benhNhan) {
        this.marketing.NgaySinh = benhNhan.NgaySinh;
        this.marketing.NamSinh = benhNhan.NamSinh;
        this.marketing.ThangSinh = benhNhan.ThangSinh;
        this.marketing.NgayThangNamSinh = benhNhan.NgayThangNamSinh;
        this.marketing.HoTen = benhNhan.HoTen;
        this.marketing.PhuongXaId = benhNhan.PhuongXaId;
        this.marketing.TinhThanhId = benhNhan.TinhThanhId;
        this.marketing.QuanHuyenId = benhNhan.QuanHuyenId;
        this.marketing.QuocTichId = benhNhan.QuocTichId;
        //this.tiepNhanBenhNhan.DanTocId = benhNhan.DanTocId;
        this.marketing.DiaChi = benhNhan.DiaChi;
        this.marketing.SoDienThoai = benhNhan.SoDienThoai;
        this.marketing.SoChungMinhThu = benhNhan.SoChungMinhThu;
        this.marketing.Email = benhNhan.Email;
        this.marketing.NgheNghiepId = benhNhan.NgheNghiepId;
        this.marketing.GioiTinh = benhNhan.GioiTinh;
        //this.tiepNhanBenhNhan.BHYTMaKhuVuc = benhNhan.BHYTMaKhuVuc;
        this.marketing.NoiLamViec = benhNhan.NoiLamViec;
        //this.marketing.BenhNhanId = benhNhan.id
    }
    PhuongXaChange($event) {
        this.marketing.PhuongXaId = $event;
        if ($event != null && $event != undefined) {
            this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(resultData => {
                this.marketing.TinhThanhId = resultData.TinhThanhId;
                this.marketing.QuanHuyenId = resultData.QuanHuyenId;
                this.comboboxQuanHuyen.getDataForLookup();
            }, () => {
            });
        }
        else {
            this.marketing.TinhThanhId = null;
            this.marketing.QuanHuyenId = null;
        }
    }
    QuanHuyenChange($event) {
        this.marketing.QuanHuyenId = $event;
        this.marketing.PhuongXaId = null;
    }
    TinhThanhPhoChange($event) {
        this.marketing.TinhThanhId = $event;
        this.marketing.QuanHuyenId = null;
        this.marketing.PhuongXaId = null;
    }
    addListDaChon(id) {
        if (this.lstDaChon != undefined) {
            let index = this.lstDaChon.filter(o => o == id);
            if (index == null || index == undefined || index.length == 0) {
                this.lstDaChon.push(id);
            }
        }
        //console.log("addListDaChon = ", this.lstDaChon);
    }
    removeListDaChon(id) {
        if (this.lstDaChon != undefined) {
            let index = this.lstDaChon.filter(o => o == id);
            if (index != null && index != undefined && index.length > 0) {
                this.lstDaChon = this.lstDaChon.filter(o => o != id);
            }
        }
        //console.log("removeListDaChon = ", this.lstDaChon);
    }
    ThongTinBenhNhanNgaySinhChange($event) {
        if (this.marketing.NgayThangNamSinh != null) {
            this.marketing.NamSinh = this.marketing.NgayThangNamSinh.getFullYear();
        }
        if ($event == null || $event == undefined) {
            this.marketing.NamSinh = null;
        }
        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
    }
    changeSDT(event) {
        if (this.marketing.SoDienThoai != null) {
            this.marketing.SoDienThoai = event + "";
        }
        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
    }
    changDiaChi(event) {
        if (this.marketing.DiaChi != null) {
            this.marketing.DiaChi = event + "";
        }
        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
    }
    changCMND(event) {
        if (this.marketing.SoChungMinhThu != null) {
            this.marketing.SoChungMinhThu = event + "";
        }
        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
    }
};
MarketingSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_13__["BaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('HoVaTenTextbox', { static: false })
], MarketingSharedComponent.prototype, "HoVaTenTextbox", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxQuanHuyen', { static: true })
], MarketingSharedComponent.prototype, "comboboxQuanHuyen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxPhuongXa', { static: true })
], MarketingSharedComponent.prototype, "comboboxPhuongXa", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenGoiTemplate', { static: true })
], MarketingSharedComponent.prototype, "tenGoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], MarketingSharedComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenGoiDaHoanThanhTemplate', { static: true })
], MarketingSharedComponent.prototype, "tenGoiDaHoanThanhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: false })
], MarketingSharedComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongFooterTemplate', { static: true })
], MarketingSharedComponent.prototype, "tongCongFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChild2', { static: false })
], MarketingSharedComponent.prototype, "gridChild2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCacDichVus', { static: false })
], MarketingSharedComponent.prototype, "gridCacDichVus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], MarketingSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], MarketingSharedComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaCKTemplate', { static: true })
], MarketingSharedComponent.prototype, "donGiaCKTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], MarketingSharedComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTruocCKTemplate', { static: true })
], MarketingSharedComponent.prototype, "donGiaTruocCKTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaSauCKTemplate', { static: true })
], MarketingSharedComponent.prototype, "donGiaSauCKTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTruocCKTemplate', { static: true })
], MarketingSharedComponent.prototype, "thanhTienTruocCKTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienSauCKTemplate', { static: true })
], MarketingSharedComponent.prototype, "thanhTienSauCKTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTruocCKFooterTemplate', { static: true })
], MarketingSharedComponent.prototype, "thanhTienTruocCKFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienSauCKFooterTemplate', { static: true })
], MarketingSharedComponent.prototype, "thanhTienSauCKFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongChiFooterTemplate', { static: true })
], MarketingSharedComponent.prototype, "tongChiFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTruocCKGroupFooterTemplate', { static: true })
], MarketingSharedComponent.prototype, "thanhTienTruocCKGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienSauCKGroupFooterTemplate', { static: true })
], MarketingSharedComponent.prototype, "thanhTienSauCKGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaGoiTemplate', { static: true })
], MarketingSharedComponent.prototype, "giaGoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daThuTemplate', { static: true })
], MarketingSharedComponent.prototype, "daThuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daDungTemplate', { static: true })
], MarketingSharedComponent.prototype, "daDungTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chuaThuTemplate', { static: true })
], MarketingSharedComponent.prototype, "chuaThuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('goiSoSinhTemplate', { static: true })
], MarketingSharedComponent.prototype, "goiSoSinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], MarketingSharedComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarketingSharedComponent.prototype, "isUpdate", void 0);
MarketingSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-shared.component.scss */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.scss")).default]
    })
], MarketingSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvZGFuZy1reS1nb2ktbWFya2V0aW5nL21hcmtldGluZy11cGRhdGUvbWFya2V0aW5nLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MarketingUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingUpdateComponent", function() { return MarketingUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _marketing_shared_marketing_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../marketing-shared/marketing-shared.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.ts");












let MarketingUpdateComponent = class MarketingUpdateComponent {
    constructor(route, router, baseService, ref, notificationService, authService, errorService, dialog) {
        this.route = route;
        this.router = router;
        this.baseService = baseService;
        this.ref = ref;
        this.notificationService = notificationService;
        this.authService = authService;
        this.errorService = errorService;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    onUpdated() {
        //this.router.navigate(['danh-muc/danh-sach-marketing/']);
        this.router.navigateByUrl('marketing/dang-ky-goi-marketing?holdQuery=true');
    }
    cancel() {
        this.onUpdated();
    }
};
MarketingUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_marketing_shared_marketing_shared_component__WEBPACK_IMPORTED_MODULE_10__["MarketingSharedComponent"], { static: true })
], MarketingUpdateComponent.prototype, "shared", void 0);
MarketingUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketing-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-update.component.scss */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.scss")).default]
    })
], MarketingUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: MarketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingModule", function() { return MarketingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _marketing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketing-routing.module */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-routing.module.ts");
/* harmony import */ var _marketing_list_marketing_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marketing-list/marketing-list.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-list/marketing-list.component.ts");
/* harmony import */ var _marketing_create_marketing_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketing-create/marketing-create.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-create/marketing-create.component.ts");
/* harmony import */ var _marketing_update_marketing_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marketing-update/marketing-update.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-update/marketing-update.component.ts");
/* harmony import */ var _marketing_shared_marketing_shared_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marketing-shared/marketing-shared.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-shared/marketing-shared.component.ts");
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
/* harmony import */ var _marketing_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./marketing.service */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _marketing_detail_marketing_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./marketing-detail/marketing-detail.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing-detail/marketing-detail.component.ts");
/* harmony import */ var _popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.ts");
/* harmony import */ var _xuat_qua_in_phieu_popup_xuat_qua_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.ts");
/* harmony import */ var _thu_chi_thu_chi_vien_phi_noi_tru_cho_thu_tien_cho_thu_tien_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module.ts");

























let MarketingModule = class MarketingModule {
};
MarketingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_marketing_list_marketing_list_component__WEBPACK_IMPORTED_MODULE_4__["MarketingListComponent"], _marketing_create_marketing_create_component__WEBPACK_IMPORTED_MODULE_5__["MarketingCreateComponent"], _marketing_update_marketing_update_component__WEBPACK_IMPORTED_MODULE_6__["MarketingUpdateComponent"], _marketing_shared_marketing_shared_component__WEBPACK_IMPORTED_MODULE_7__["MarketingSharedComponent"], _marketing_detail_marketing_detail_component__WEBPACK_IMPORTED_MODULE_21__["MarketingDetailComponent"], _popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_22__["PopupTimKiemBenhNhanComponent"], _xuat_qua_in_phieu_popup_xuat_qua_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_23__["XuatQuaInPhieuPopupComponent"]],
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
            _marketing_routing_module__WEBPACK_IMPORTED_MODULE_3__["MarketingRoutingModule"],
            _thu_chi_thu_chi_vien_phi_noi_tru_cho_thu_tien_cho_thu_tien_module__WEBPACK_IMPORTED_MODULE_24__["ChoThuTienNoiTruModule"]
        ],
        providers: [
            _marketing_service__WEBPACK_IMPORTED_MODULE_19__["MarketingService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_20__["BaseService"], useClass: _marketing_service__WEBPACK_IMPORTED_MODULE_19__["MarketingService"] },
        ],
        entryComponents: [
            _popup_tim_kiem_benh_nhan_popup_tim_kiem_benh_nhan_component__WEBPACK_IMPORTED_MODULE_22__["PopupTimKiemBenhNhanComponent"],
            _xuat_qua_in_phieu_popup_xuat_qua_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_23__["XuatQuaInPhieuPopupComponent"]
        ],
    })
], MarketingModule);



/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/marketing.service.ts ***!
  \***********************************************************************************/
/*! exports provided: MarketingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingService", function() { return MarketingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let MarketingService = class MarketingService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'DanhMucMarketing';
    }
};
MarketingService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
MarketingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MarketingService);



/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-chon {\n  color: white !important;\n  background-color: #005dab !important;\n  text-align: center !important;\n  border-radius: 3px !important;\n}\n\n.button-chon:hover {\n  background-color: #005dab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL21hcmtldGluZy9kYW5nLWt5LWdvaS1tYXJrZXRpbmcvcG9wdXAtdGltLWtpZW0tYmVuaC1uaGFuL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbWFya2V0aW5nXFxkYW5nLWt5LWdvaS1tYXJrZXRpbmdcXHBvcHVwLXRpbS1raWVtLWJlbmgtbmhhblxccG9wdXAtdGltLWtpZW0tYmVuaC1uaGFuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbWFya2V0aW5nL2Rhbmcta3ktZ29pLW1hcmtldGluZy9wb3B1cC10aW0ta2llbS1iZW5oLW5oYW4vcG9wdXAtdGltLWtpZW0tYmVuaC1uaGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbWFya2V0aW5nL2Rhbmcta3ktZ29pLW1hcmtldGluZy9wb3B1cC10aW0ta2llbS1iZW5oLW5oYW4vcG9wdXAtdGltLWtpZW0tYmVuaC1uaGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jaG9uIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWIgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWNob246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGFiO1xufSIsIi5idXR0b24tY2hvbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGFiICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1jaG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWRhYjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PopupTimKiemBenhNhanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupTimKiemBenhNhanComponent", function() { return PopupTimKiemBenhNhanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");









let PopupTimKiemBenhNhanComponent = class PopupTimKiemBenhNhanComponent {
    constructor(data, dialogRef, apiService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.gridColumns = [];
        this.timKiemBenhNhanSearch = new _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["TimKiemBenhNhanGridVo"]();
        this.sort = [
            {
                field: "MaBN",
                dir: "asc",
            },
        ];
        this.addtionStringDefault = null;
        //theFirstLstBenhNhan: TimKiemBenhNhanGridVo[] = new Array<TimKiemBenhNhanGridVo>();
        this.urlGetDataGrid = "TiepNhanBenhNhan/GetDataForGridAsyncPopupTimKiem";
        this.urlGetTotalPageGrid = "TiepNhanBenhNhan/GetTotalPageForGridAsyncPopupTimKiem";
        if (data == null || data == undefined) {
            data = new _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["DataTimKiem"]();
        }
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].YeuCauTiepNhan;
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
        this.timKiemBenhNhanSearch.MaBN = this.data.searchBenhNhan.MaBN;
        this.timKiemBenhNhanSearch.BHYTMaSoThe = this.data.searchBenhNhan.MaBHYT;
        this.timKiemBenhNhanSearch.HoTen = this.data.searchBenhNhan.HoTen;
        this.timKiemBenhNhanSearch.NgaySinhDisplay = this.data.searchBenhNhan.NgaySinhDisplay;
        this.timKiemBenhNhanSearch.ThangSinh = this.data.searchBenhNhan.ThangSinh;
        this.timKiemBenhNhanSearch.NamSinh = this.data.searchBenhNhan.NamSinh;
        this.timKiemBenhNhanSearch.SoChungMinhThu = this.data.searchBenhNhan.SoChungMinhThu;
        this.timKiemBenhNhanSearch.SoDienThoai = this.data.searchBenhNhan.SoDienThoai;
        this.timKiemBenhNhanSearch.DiaChi = this.data.searchBenhNhan.DiaChi;
        if (this.timKiemBenhNhanSearch.NgaySinhDisplay != null) {
            this.timKiemBenhNhanSearch.NgaySinhFormat = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(new Date(this.timKiemBenhNhanSearch.NgaySinhDisplay), "dd/mm/yyyy");
        }
        this.addtionStringDefault = JSON.stringify(this.timKiemBenhNhanSearch);
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
    chonBenhNhan(item) {
        this.apiService.post("TiepNhanBenhNhan/GetBenhNhan/?benhNhanId=" + item.Id).subscribe(resultData => {
            //console.log("chonBenhNhan = ", resultData);
            this.dialogRef.close(resultData);
        }, (err) => {
        });
    }
    onKey(event) {
        if (event.keyCode === 13) {
            this.TimKiem();
        }
    }
    // clearDataChange() {
    //   if (
    //     (this.timKiemBenhNhanSearch.MaBN == null || this.timKiemBenhNhanSearch.MaBN == "")
    //     && (this.timKiemBenhNhanSearch.BHYTMaSoThe == null || this.timKiemBenhNhanSearch.BHYTMaSoThe == "")
    //     && (this.timKiemBenhNhanSearch.NgaySinhDisplay == null || this.timKiemBenhNhanSearch.NgaySinhDisplay == "")
    //     && (this.timKiemBenhNhanSearch.SoChungMinhThu == null || this.timKiemBenhNhanSearch.SoChungMinhThu == "")
    //     && (this.timKiemBenhNhanSearch.SoDienThoai == null || this.timKiemBenhNhanSearch.SoDienThoai == "")
    //     && (this.timKiemBenhNhanSearch.DiaChi == null || this.timKiemBenhNhanSearch.DiaChi == "")
    //   ) {
    //     this.gridTimKiem._additionalSearchString = null;
    //     this.gridTimKiem.search();
    //   }
    // }
    TimKiem() {
        if (this.timKiemBenhNhanSearch.NgaySinhDisplay != null) {
            this.timKiemBenhNhanSearch.NgaySinhFormat = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.timKiemBenhNhanSearch.NgaySinhDisplay, "dd/mm/yyyy");
        }
        else {
            this.timKiemBenhNhanSearch.NgaySinhFormat = null;
        }
        var queryString = JSON.stringify(this.timKiemBenhNhanSearch);
        this.gridTimKiem._additionalSearchString = queryString;
        this.gridTimKiem.search();
    }
};
PopupTimKiemBenhNhanComponent.ctorParameters = () => [
    { type: _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["DataTimKiem"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupTimKiemBenhNhanComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
], PopupTimKiemBenhNhanComponent.prototype, "gridTimKiem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], PopupTimKiemBenhNhanComponent.prototype, "actionTemplate", void 0);
PopupTimKiemBenhNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-tim-kiem-benh-nhan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-tim-kiem-benh-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-tim-kiem-benh-nhan.component.scss */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], PopupTimKiemBenhNhanComponent);



/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvZGFuZy1reS1nb2ktbWFya2V0aW5nL3h1YXQtcXVhLWluLXBoaWV1LXBvcHVwL3h1YXQtcXVhLWluLXBoaWV1LXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: XuatQuaInPhieuPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatQuaInPhieuPopupComponent", function() { return XuatQuaInPhieuPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let XuatQuaInPhieuPopupComponent = class XuatQuaInPhieuPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.src = "";
    }
    ngOnInit() {
        this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
    }
    close() {
        this.dialogRef.close();
    }
    getSharedPrintForm() {
        let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
        return new Promise(resolve => {
            resolve(source);
            this.close();
        });
    }
};
XuatQuaInPhieuPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
XuatQuaInPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-qua-in-phieu-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-qua-in-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-qua-in-phieu-popup.component.scss */ "./src/app/modules/main/marketing/dang-ky-goi-marketing/xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], XuatQuaInPhieuPopupComponent);



/***/ })

}]);
//# sourceMappingURL=marketing-dang-ky-goi-marketing-marketing-module-es2015.js.map