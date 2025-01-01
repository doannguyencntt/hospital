(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~64ae6b2a"],{

/***/ "./node_modules/@iconify/icons-ic/picture-as-pdf.js":
/*!**********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/picture-as-pdf.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Kết Quả CĐHA, TDCN',Path:''},\n                        {Title:'DS Lịch Sử Kết Quả CĐHA, TDCN',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid urlGetData=\"CanLamSang/GetDataLichSuCanLamSangForGridAsync\"\n                urlGetTotalPage=\"CanLamSang/GetTotalLichSuCanLamSangPageForGridAsync\" [gridColumns]=\"gridColumns\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [documentType]=\"documentType\" [searchString]=\"timKiemObj.SearchString\" [checkboxAble]=\"false\">\n                <ng-template #ngayCoKetQuaTemplate let-dataItem>\n                    {{dataItem.NgayCoKetQuaSACHStr}}\n                </ng-template>\n            </app-grid>\n        </div>\n    </vex-page-layout-content>\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <!-- <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                [(model)]=\"timKiemObj.TuNgayDenNgay\" label=\"Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n            </app-daterangepicker> -->\n            <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"searchChange($event)\" placeholder=\"Tìm kiếm theo Mã NB, Mã TN, Họ tên\" />\n            </div>\n            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n    \n            <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                title=\"Lọc cột\" type=\"button\">\n                <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n            </button>\n            <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <div *ngFor=\"let column of _gridColumnsFilter\">\n                    <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                        <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                            {{ column.Title }}\n                        </mat-checkbox>\n                    </button>\n                </div>\n            </mat-menu>\n    \n            <button class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\"\n                (click)=\"exportExcel()\">\n                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n</vex-page-layout>\n\n<ng-template #maYeuCauTiepNhanTemplate let-dataItem>\n    <a (click)=\"view(dataItem.Id)\">\n        <p class=\"reverse-ellipsis r\" title=\"{{dataItem.MaYeuCauTiepNhan}}\">{{dataItem.MaYeuCauTiepNhan}}</p>\n    </a>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Kết Quả CĐHA, TDCN',Path:''},\n            {Title:'DS Lịch Sử Kết Quả CĐHA, TDCN',Path:'/lich-su-ket-qua-cdha-tdcn', queryParams: {holdQuery : true}},\n            {Title:'Chi tiết Kết Quả CĐHA, TDCN',Path:'',Active:true}          \n            ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[           \n            {Key:'Esc',Description:'Quay lại',End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n                            <fieldset fxFlex=\"100%\" class=\"mb-3\" class=\"{{(thongTinBenhNhan != null && thongTinBenhNhan.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n                                <legend>Thông tin hành chính</legend>\n                                <div class=\" mt-1\">\n                                    <ul class=\"inline\">\n                                        <li>Mã TN:\n                                            <strong>\n                                                {{thongTinBenhNhan.MaYeuCauTiepNhan}}\n                                            </strong>\n                                        </li>\n                                        <li>Mã NB:\n                                            <strong>\n                                                {{thongTinBenhNhan.MaBN}}\n                                            </strong>\n                                        </li>\n                                        <li>Họ Tên:\n                                            <strong>\n                                                {{thongTinBenhNhan.HoTen}}\n                                            </strong>\n                                        </li>\n\n                                        <li >Tuổi:\n                                            <strong *ngIf=\"!isDuoi6Tuoi\">{{thongTinBenhNhan.Tuoi}}</strong>\n                                            <strong *ngIf=\"isDuoi6Tuoi\">{{Duoi6TuoiDisplay}}</strong>\n                                        </li>\n                                        <li>Giới Tính:\n                                            <strong>\n                                                {{thongTinBenhNhan.GioiTinhStr}}\n                                            </strong>\n                                        </li>\n                                        <li>Địa chỉ:\n                                            <strong>\n                                                {{thongTinBenhNhan.DiaChi}}\n                                            </strong>\n                                        </li>\n                                        <li>Đối tượng:\n                                            <strong style=\"color: blue;\">\n                                                {{thongTinBenhNhan.DoiTuong}}\n                                            </strong>\n                                        </li>\n                                        <li>Số BA:\n                                            <strong style=\"color: blue;\">\n                                                {{thongTinBenhNhan.SoBenhAn}}\n                                            </strong>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </fieldset>\n                            <fieldset fxFlex=\"100%\" class=\"mb-3\">\n                                <legend>Thông tin dịch vụ</legend>\n                                <app-grid [gridColumns]=\"gridColumns\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                                    [documentType]=\"documentType\" [checkboxAble]=\"false\" [additionalSearchString]=\"idYeuCauTiepNhan\" [height]=\"500\" [pageSize]=\"20\"\n                                    urlGetData=\"CanLamSang/GetDataChiTietLichSuCanLamSangForGrid\"\n                                    urlGetTotalPage=\"CanLamSang/GetTotalChiTietLichSuCanLamSangPageForGrid\">\n                                </app-grid>\n                                <ng-template #ngayChiDinhTemplate let-dataItem>\n                                   {{dataItem.NgayChiDinhDisplay}}\n                                </ng-template>\n                                <ng-template #ngayThucHienTemplate let-dataItem>\n                                    {{dataItem.NgayThucHienDisplay}}\n                                </ng-template>\n\n                                <ng-template #fileChuKyTemplate let-dataItem>\n                                    <a (click)=\"taiFileChuKy(dataItem)\">\n                                        <p class=\"reverse-ellipsis r\" title=\"{{dataItem.FileChuKy}}\">{{dataItem.FileChuKy}}</p>\n                                    </a>\n                                </ng-template>\n                                <ng-template #actionTemplate let-dataItem>\n                                    <div class=\"text-center\" kendoTooltip>                                                                          \n                                        <button (click)=\"xemKetQua(dataItem)\" color=\"primary\" mat-flat-button kendoTooltip type=\"button\">\n                                            Xem kết quả\n                                        </button>\n                                    </div>\n                                </ng-template>\n                            </fieldset>\n                            <!-- <fieldset fxFlex=\"100%\" class=\"mb-3\">\n                                <legend>Kết Quả</legend>\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                    fxLayoutGap.lt-sm=\"0\" *ngIf=\"ketQuaNhomXetNghiems !== null\">\n                                    <h3 fxFlex=\"100%\" class=\"sub-title\">Xét Nghiệm</h3>\n                                    <div fxFlex=\"100%\">\n                                        <div *ngFor=\"let thongTinNhomXetNghiemCanLamSang of ketQuaNhomXetNghiems\"\n                                            fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\"\n                                            fxLayoutGap.lt-sm=\"0\" class=\"mb-0\">\n                                            <div fxFlex=\"50%\" class=\"mb-3\">\n                                                <span> Nhóm:\n                                                    <strong>{{thongTinNhomXetNghiemCanLamSang.TenNhomDichVuKyhuat}}\n\n                                                    </strong>\n                                                </span>\n                                                <span>\n                                                    - Dịch vụ: </span>\n                                                <ul class=\"inline dich_vu\">\n                                                    <li\n                                                        *ngFor=\"let thongTinCanLamSang of thongTinNhomXetNghiemCanLamSang.NhomDanhSachXetNghiem\">\n                                                        <strong>\n                                                            {{thongTinCanLamSang.TenDichVu}}\n                                                        </strong>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            <div fxFlex=\"40%\">\n                                                Ghi Chú: <strong>{{thongTinNhomXetNghiemCanLamSang.KetLuan}}</strong>\n                                            </div>\n                                            <div fxFlex=\"10%\">\n                                                <button type=\"button\" mat-icon-button tabindex=\"-1\"\n                                                    *ngIf=\"thongTinNhomXetNghiemCanLamSang.GiayKetQuaNhomCanLamSang != null && thongTinNhomXetNghiemCanLamSang.GiayKetQuaNhomCanLamSang.length !== 0\"\n                                                    matTooltip=\"Xem kết quả xét nghiệm cận lâm sàng\"\n                                                    (click)=\"ViewImagePDF(thongTinNhomXetNghiemCanLamSang.GiayKetQuaNhomCanLamSang)\">\n                                                    <mat-icon [icIcon]=\"icRedEye\" style=\"width: 150px;\">\n                                                    </mat-icon>\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                    style=\"border-top: 1px solid rgba(0, 0, 0, 0.12);\" fxLayoutGap.lt-sm=\"0\"\n                                    *ngIf=\"chuanDoanHinhAnh===true\">\n                                    <h3 fxFlex=\"100%\" class=\"sub-title\">Chẩn đoán hình ảnh</h3>\n                                    <div fxFlex=\"100%\">\n                                        <table class=\"table table-border\" width=\"100%\">\n                                            <tr *ngFor=\"let thongTinCanLamSang of thongTinCanLamSangs\">\n                                                <td *ngIf=\"thongTinCanLamSang.LoaiYeuCauKyThuat===3 && thongTinCanLamSang.GiayKetQuaLamSang !== null\"\n                                                    width=\"50%\">\n                                                    Dịch Vụ: <strong>{{thongTinCanLamSang.TenDichVu}} </strong>\n                                                    <a (click)=\"xemTaiLieu(thongTinCanLamSang.GiayKetQuaLamSang)\"\n                                                        class=\"link\">{{thongTinCanLamSang.GiayKetQuaLamSang.Ten}}</a>\n                                                </td>\n                                                <td width=\"40%\"\n                                                    *ngIf=\"thongTinCanLamSang.LoaiYeuCauKyThuat===3 && thongTinCanLamSang.GiayKetQuaLamSang !== null\">\n                                                    Ghi Chú: <strong>{{thongTinCanLamSang.GhiChu}}</strong></td>\n\n                                                <td *ngIf=\"thongTinCanLamSang.LoaiYeuCauKyThuat===3 && thongTinCanLamSang.GiayKetQuaLamSang === null\"\n                                                    width=\"30%\"> <strong>Cập nhật kết quả</strong></td>\n                                                <td width=\"10%\" *ngIf=\"thongTinCanLamSang.LoaiYeuCauKyThuat===3\">\n                                                    <button type=\"button\" mat-icon-button tabindex=\"-1\" *ngIf=\"thongTinCanLamSang.GiayKetQuaLamSang !== null && thongTinCanLamSang.GiayKetQuaLamSang.length !== 0\"\n                                                        matTooltip=\"Xem kết quả chuẩn đoán hình ảnh cận lâm sàng\"\n                                                        (click)=\"ViewImagePDF(thongTinCanLamSang.GiayKetQuaLamSang)\">\n                                                        <mat-icon [icIcon]=\"icRedEye\" style=\"width: 150px;\"></mat-icon>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </div>\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                    fxLayoutGap.lt-sm=\"0\" *ngIf=\"thamDoChucNang===true\">\n                                    <h3 fxFlex=\"100%\" class=\"sub-title\">Thăm dò chức năng</h3>\n                                    <div fxFlex=\"100%\">\n                                        <table class=\"table table-border\" width=\"100%\">\n                                            <tr *ngFor=\"let thongTinCanLamSang of thongTinCanLamSangs\">\n                                                <td *ngIf=\"thongTinCanLamSang.LoaiYeuCauKyThuat===4 && thongTinCanLamSang.GiayKetQuaLamSang !== null\"\n                                                    width=\"50%\">\n                                                    Dịch Vụ: <strong>{{thongTinCanLamSang.TenDichVu}} </strong>\n                                                    <a (click)=\"xemTaiLieu(thongTinCanLamSang.GiayKetQuaLamSang)\"\n                                                        class=\"link\">{{thongTinCanLamSang.GiayKetQuaLamSang.Ten}}</a>\n                                                </td>\n                                                <td width=\"40%\"\n                                                    *ngIf=\"thongTinCanLamSang.LoaiYeuCauKyThuat===4 && thongTinCanLamSang.GiayKetQuaLamSang !== null\">\n                                                    Ghi Chú: <strong>{{thongTinCanLamSang.GhiChu}}</strong></td>\n                                                <td *ngIf=\"thongTinCanLamSang.LoaiYeuCauKyThuat===4 && thongTinCanLamSang.GiayKetQuaLamSang === null\"\n                                                    width=\"30%\"> <strong>Cập nhật kết quả</strong></td>\n                                                <td width=\"10%\" *ngIf=\"thongTinCanLamSang.LoaiYeuCauKyThuat===4\">\n                                                    <button type=\"button\" mat-icon-button tabindex=\"-1\" *ngIf=\"thongTinCanLamSang.GiayKetQuaLamSang !== null && thongTinCanLamSang.GiayKetQuaLamSang.length !== 0\"\n                                                        matTooltip=\"Xem kết quả thăm dò chức năng cận lâm sàng\"\n                                                        (click)=\"ViewImagePDF(thongTinCanLamSang.GiayKetQuaLamSang)\">\n                                                        <mat-icon [icIcon]=\"icRedEye\" style=\"width: 150px;\"></mat-icon>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </div>\n                            </fieldset> -->\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n                            <button type=\"button\" mat-raised-button (click)=\"BackToList()\" title=\"Phím tắt: ESC\">\n                                Quay lại\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Hình Ảnh / PDF Kết Quả Cận Lâm Sàng</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\" (click)=\"close('No answer')\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"mb-3\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridDataSource]=\"gridDataSource\" [useHeaderDefault]=\"false\"\n                [gridColumns]=\"gridColumns\" [useActionDefault]=\"false\"\n                [useAddDeault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\"\n                style=\"width: 1px;\" [pageable]=\"false\" >\n            </app-grid>\n        </div>\n    </div>\n    <ng-template #headerTemplate let-dataItem>\n        <div class=\"text-center\">\n            <button type=\"button\"  mat-raised-button mat-button (click)=\"downloadFileAll(data.Model)\">\n                Tải tất cả\n            </button>\n        </div>\n    </ng-template>\n    <ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <div fxFlex=\"100%\" >\n            <button type=\"button\" fxFlex=\"50%\"  style=\"float: right;padding-right: 5px;\"color=\"primary\" mat-raised-button mat-button (click)=\"ViewImagePDF(dataItem)\" *ngIf=\"dataItem.LoaiTapTin !== 10\">\n                Xem\n            </button>\n            <span fxFlex=\"5px\" ></span>\n            <span fxFlex=\"50%\" *ngIf=\"dataItem.LoaiTapTin === 10\"></span>\n            <button type=\"button\" fxFlex=\"50%\"  style=\"float: right;\" color=\"primary\" mat-raised-button mat-button (click)=\"downloadFile(dataItem)\">\n                Tải\n            </button>\n        </div>\n    </ng-template>\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Kết quả CĐHA, TDCN</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 550px;\">\n    <div *ngIf=\"fileUrl != null && fileUrl != ''\" class=\"container-iframe\">\n        <iframe id=\"fileKetQua\" width=\"100%\" height=\"100%\" frameborder=\"0\" [src]=\"fileUrl | safe\"\n            allowTransparency=\"true\" background=\"transparent\">\n        </iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n            class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" (click)=\"downloadFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải\n        file</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LichSuCanLamSangRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuCanLamSangRoutingModule", function() { return LichSuCanLamSangRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lich_su_danh_sach_can_lam_sang_lich_su_danh_sach_can_lam_sang_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.ts");
/* harmony import */ var _thong_tin_lich_su_chi_tiet_thong_tin_lich_su_chi_tiet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");








const routes = [
    {
        path: "",
        component: _lich_su_danh_sach_can_lam_sang_lich_su_danh_sach_can_lam_sang_component__WEBPACK_IMPORTED_MODULE_3__["LichSuDanhSachCanLamSangComponent"],
        data: {
            title: "Lịch sử kết quả cận lâm sàng",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].LichSuCanLamSang,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
    },
    {
        path: "chi-tiet/:id",
        component: _thong_tin_lich_su_chi_tiet_thong_tin_lich_su_chi_tiet_component__WEBPACK_IMPORTED_MODULE_4__["ThongTinLichSuChiTietComponent"],
        data: {
            title: "Thông tin lịch sử cận lâm sàng",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].LichSuCanLamSang,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
    },
];
let LichSuCanLamSangRoutingModule = class LichSuCanLamSangRoutingModule {
};
LichSuCanLamSangRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LichSuCanLamSangRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: LichSuCanLamSangModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuCanLamSangModule", function() { return LichSuCanLamSangModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _lich_su_can_lam_sang_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lich-su-can-lam-sang-routing.module */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang-routing.module.ts");
/* harmony import */ var _lich_su_danh_sach_can_lam_sang_lich_su_danh_sach_can_lam_sang_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.ts");
/* harmony import */ var _thong_tin_lich_su_chi_tiet_thong_tin_lich_su_chi_tiet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _view_image_pdf_list_cls_view_image_pdf_list_cls_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-image-pdf-list-cls/view-image-pdf-list-cls.component */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.ts");
/* harmony import */ var _xem_ket_qua_cdha_tdcn_popup_xem_ket_qua_cdha_tdcn_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.ts");
/* harmony import */ var _danh_sach_ket_qua_can_lam_sang_can_lam_sang_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../danh-sach-ket-qua-can-lam-sang/can-lam-sang.module */ "./src/app/modules/main/can-lam-sang/danh-sach-ket-qua-can-lam-sang/can-lam-sang.module.ts");




















let LichSuCanLamSangModule = class LichSuCanLamSangModule {
};
LichSuCanLamSangModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _xem_ket_qua_cdha_tdcn_popup_xem_ket_qua_cdha_tdcn_popup_component__WEBPACK_IMPORTED_MODULE_17__["XemKetQuaCdhaTdcnPopupComponent"]
        ],
        declarations: [
            _lich_su_danh_sach_can_lam_sang_lich_su_danh_sach_can_lam_sang_component__WEBPACK_IMPORTED_MODULE_4__["LichSuDanhSachCanLamSangComponent"],
            _thong_tin_lich_su_chi_tiet_thong_tin_lich_su_chi_tiet_component__WEBPACK_IMPORTED_MODULE_5__["ThongTinLichSuChiTietComponent"],
            _view_image_pdf_list_cls_view_image_pdf_list_cls_component__WEBPACK_IMPORTED_MODULE_16__["ViewImagePdfListClsComponent"],
            _xem_ket_qua_cdha_tdcn_popup_xem_ket_qua_cdha_tdcn_popup_component__WEBPACK_IMPORTED_MODULE_17__["XemKetQuaCdhaTdcnPopupComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _lich_su_can_lam_sang_routing_module__WEBPACK_IMPORTED_MODULE_3__["LichSuCanLamSangRoutingModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _danh_sach_ket_qua_can_lam_sang_can_lam_sang_module__WEBPACK_IMPORTED_MODULE_18__["CanLamSangModule"]
        ],
        entryComponents: [
            _view_image_pdf_list_cls_view_image_pdf_list_cls_component__WEBPACK_IMPORTED_MODULE_16__["ViewImagePdfListClsComponent"],
            _xem_ket_qua_cdha_tdcn_popup_xem_ket_qua_cdha_tdcn_popup_component__WEBPACK_IMPORTED_MODULE_17__["XemKetQuaCdhaTdcnPopupComponent"]
        ],
    })
], LichSuCanLamSangModule);



/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.ts ***!
  \****************************************************************************************/
/*! exports provided: LichSuCanLamSang, TagItem, ThongTinBenhNhan, ListDanhSachCanLamSang, ThongTinCanLamSang, GiayKetQuaLamSang, CanLamSangLichSuTimKiem, CanLamSangLichSuTimKiemDateRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuCanLamSang", function() { return LichSuCanLamSang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return TagItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhNhan", function() { return ThongTinBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDanhSachCanLamSang", function() { return ListDanhSachCanLamSang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinCanLamSang", function() { return ThongTinCanLamSang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiayKetQuaLamSang", function() { return GiayKetQuaLamSang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLamSangLichSuTimKiem", function() { return CanLamSangLichSuTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLamSangLichSuTimKiemDateRange", function() { return CanLamSangLichSuTimKiemDateRange; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LichSuCanLamSang {
    constructor(TimKiem = null, TuNgay = null, DenNgay = null, FromDate = null, ToDate = null) {
        this.TimKiem = TimKiem;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}
class TagItem {
    constructor(Key = null, Value = null, ValueDisplay = null, Title = null) {
        this.Key = Key;
        this.Value = Value;
        this.ValueDisplay = ValueDisplay;
        this.Title = Title;
    }
}
class ThongTinBenhNhan {
    constructor(Id = 0, MaYeuCauTiepNhan = null, BenhNhanId = null, MaBN = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, Tuoi = null, SoBenhAn = null, TenGioiTinh = null, GioiTinhStr = null, DiaChi = null, SoDienThoai = null, Email = null, DoiTuongUuDai = null, CongTyUuDai = null, BHYTMaSoThe = null, BHYTngayHieuLuc = null, BHYTNgayHetHan = null, BHYTDiaChi = null, BHYTMucHuong = null, TuyenKham = null, TenGiayChuyenVien = null, CongTyUuDaiId = null, NgayHieuLucStr = null, NgayHetHanStr = null, GiayChuyenVienId = null, DuocHuongBHYT, CoBHYT, DoiTuong = null, BHYTgiayMienCungChiTraId = null, TenGiayMiemCungTriTra = null, 
    //BVHD-3800
    LaCapCuu = null) {
        this.Id = Id;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.BenhNhanId = BenhNhanId;
        this.MaBN = MaBN;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.Tuoi = Tuoi;
        this.SoBenhAn = SoBenhAn;
        this.TenGioiTinh = TenGioiTinh;
        this.GioiTinhStr = GioiTinhStr;
        this.DiaChi = DiaChi;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.DoiTuongUuDai = DoiTuongUuDai;
        this.CongTyUuDai = CongTyUuDai;
        this.BHYTMaSoThe = BHYTMaSoThe;
        this.BHYTngayHieuLuc = BHYTngayHieuLuc;
        this.BHYTNgayHetHan = BHYTNgayHetHan;
        this.BHYTDiaChi = BHYTDiaChi;
        this.BHYTMucHuong = BHYTMucHuong;
        this.TuyenKham = TuyenKham;
        this.TenGiayChuyenVien = TenGiayChuyenVien;
        this.CongTyUuDaiId = CongTyUuDaiId;
        this.NgayHieuLucStr = NgayHieuLucStr;
        this.NgayHetHanStr = NgayHetHanStr;
        this.GiayChuyenVienId = GiayChuyenVienId;
        this.DuocHuongBHYT = DuocHuongBHYT;
        this.CoBHYT = CoBHYT;
        this.DoiTuong = DoiTuong;
        this.BHYTgiayMienCungChiTraId = BHYTgiayMienCungChiTraId;
        this.TenGiayMiemCungTriTra = TenGiayMiemCungTriTra;
        this.LaCapCuu = LaCapCuu;
    }
}
class ListDanhSachCanLamSang {
    constructor(DanhSachCanLamSangs = []) {
        this.DanhSachCanLamSangs = DanhSachCanLamSangs;
    }
}
class ThongTinCanLamSang {
    constructor(DichVuKyhuatId = 0, TenDichVu = null, GhiChu = null, LoaiYeuCauKyThuat = 0, GiayKetQuaLamSang = []) {
        this.DichVuKyhuatId = DichVuKyhuatId;
        this.TenDichVu = TenDichVu;
        this.GhiChu = GhiChu;
        this.LoaiYeuCauKyThuat = LoaiYeuCauKyThuat;
        this.GiayKetQuaLamSang = GiayKetQuaLamSang;
    }
}
class GiayKetQuaLamSang {
    constructor(Id = 0, Ma = null, Ten = null, TenGuid = null, DuongDan = null, MoTa = null, KichThuoc = 0, LoaiTapTin = null) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.DuongDan = DuongDan;
        this.MoTa = MoTa;
        this.KichThuoc = KichThuoc;
        this.LoaiTapTin = LoaiTapTin;
    }
}
class CanLamSangLichSuTimKiem {
    constructor(SearchString = null, TuNgayDenNgay = new CanLamSangLichSuTimKiemDateRange()) {
        this.SearchString = SearchString;
        this.TuNgayDenNgay = TuNgayDenNgay;
    }
}
class CanLamSangLichSuTimKiemDateRange {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}


/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jYW4tbGFtLXNhbmcvbGljaC1zdS1jYW4tbGFtLXNhbmcvbGljaC1zdS1kYW5oLXNhY2gtY2FuLWxhbS1zYW5nL2xpY2gtc3UtZGFuaC1zYWNoLWNhbi1sYW0tc2FuZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: LichSuDanhSachCanLamSangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuDanhSachCanLamSangComponent", function() { return LichSuDanhSachCanLamSangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/cancel */ "./node_modules/@iconify/icons-ic/cancel.js");
/* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _lich_su_can_lam_sang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lich-su-can-lam-sang */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






















let LichSuDanhSachCanLamSangComponent = class LichSuDanhSachCanLamSangComponent {
    constructor(router, authService, dialog, apiService, notificationService, route, location) {
        this.router = router;
        this.authService = authService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.route = route;
        this.location = location;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icCancel = _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.timKiemObj = new _lich_su_can_lam_sang__WEBPACK_IMPORTED_MODULE_10__["CanLamSangLichSuTimKiem"]();
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this._gridColumnsFilter = [];
        this._isCheckColumnFilter = true;
        this.strAdditionalSearchString = "";
        this.IsFirstLoad = true;
        this.baseRoute = "/lich-su-ket-qua-cdha-tdcn";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].CanLamSang;
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachLichSuKetQuaCDHATDCN");
                if (additionalSearchString != null) {
                    this.timKiemObj = JSON.parse(additionalSearchString);
                    if (this.timKiemObj.TuNgayDenNgay.TuNgay != null && this.timKiemObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemObj.TuNgayDenNgay.TuNgay != '') {
                        this.timKiemObj.TuNgayDenNgay.startDate = new Date(this.timKiemObj.TuNgayDenNgay.startDate);
                    }
                    if (this.timKiemObj.TuNgayDenNgay.DenNgay != null && this.timKiemObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemObj.TuNgayDenNgay.DenNgay != '') {
                        this.timKiemObj.TuNgayDenNgay.endDate = new Date(this.timKiemObj.TuNgayDenNgay.endDate);
                    }
                    this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            this.gridChild.additionalSearchString = null;
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachLichSuKetQuaCDHATDCN");
        }
        this.gridColumns = [
            { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 60, Sortable: true, Template: this.maYeuCauTiepNhanTemplate, },
            { Field: "SoBenhAn", Title: "Số BA", Width: 60, Sortable: true },
            { Field: "MaBN", Title: "Mã NB", Width: 60, Sortable: true },
            { Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: true },
            { Field: "GioiTinh", Title: "Giới Tính", Width: 60, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 80, Sortable: true },
            { Field: "SoDienThoai", Title: "Số điện thoại", Width: 120, Sortable: true }
        ];
        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
    }
    searchChange(event) {
        if ((event == null || event == "") && this.strAdditionalSearchString != "") {
            this.timKiemNangCao();
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiemNangCao();
        }
    }
    clearSearch() {
        this.timKiemObj.SearchString = null;
        this.gridChild.searchString = null;
        this.timKiemNangCao();
    }
    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.timKiemObj.TuNgayDenNgay != null && this.timKiemObj.TuNgayDenNgay.startDate != null) {
            this.timKiemObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.timKiemObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
        }
        else {
            this.timKiemObj.TuNgayDenNgay.TuNgay = null;
        }
        if (this.timKiemObj.TuNgayDenNgay != null && this.timKiemObj.TuNgayDenNgay.endDate != null) {
            this.timKiemObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.timKiemObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
        }
        else {
            this.timKiemObj.TuNgayDenNgay.DenNgay = null;
        }
        let queryString = JSON.stringify(this.timKiemObj);
        this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachLichSuKetQuaCDHATDCN", queryString);
        this.gridChild.search();
    }
    view(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].View)) {
            this.router.navigate(["/lich-su-ket-qua-cdha-tdcn/chi-tiet/" + id,]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
            self.apiService
                .postExportExcel("CanLamSang/ExportLichSuCanLamSang", this.gridChild._gridQueryInfo)
                .subscribe((resultData) => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "LichSuKetQuaCDHATDCN" + dateTimeNow.getFullYear() + ".xlsx");
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang xuất excel..." },
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
};
LichSuDanhSachCanLamSangComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], LichSuDanhSachCanLamSangComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("maYeuCauTiepNhanTemplate", { static: true })
], LichSuDanhSachCanLamSangComponent.prototype, "maYeuCauTiepNhanTemplate", void 0);
LichSuDanhSachCanLamSangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-lich-su-danh-sach-can-lam-sang",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-danh-sach-can-lam-sang.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-danh-sach-can-lam-sang.component.scss */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component.scss")).default]
    })
], LichSuDanhSachCanLamSangComponent);



/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n\n.sub-title {\n  font-size: 14px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Nhbi1sYW0tc2FuZy9saWNoLXN1LWNhbi1sYW0tc2FuZy90aG9uZy10aW4tbGljaC1zdS1jaGktdGlldC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGNhbi1sYW0tc2FuZ1xcbGljaC1zdS1jYW4tbGFtLXNhbmdcXHRob25nLXRpbi1saWNoLXN1LWNoaS10aWV0XFx0aG9uZy10aW4tbGljaC1zdS1jaGktdGlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2Nhbi1sYW0tc2FuZy9saWNoLXN1LWNhbi1sYW0tc2FuZy90aG9uZy10aW4tbGljaC1zdS1jaGktdGlldC90aG9uZy10aW4tbGljaC1zdS1jaGktdGlldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsNENBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFLQSw0QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Nhbi1sYW0tc2FuZy9saWNoLXN1LWNhbi1sYW0tc2FuZy90aG9uZy10aW4tbGljaC1zdS1jaGktdGlldC90aG9uZy10aW4tbGljaC1zdS1jaGktdGlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWZvcm0td3JhcHBlciAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWRkaW5nLXRodS10aWVuIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjhweCAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wby1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBhZGRpbmctbGVmdDgwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmQtdW5zZXQge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1zcGxpdHRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHVsID4gbGkucmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSB1bC5pbmxpbmUgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5pbmxpbmVfYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjQyLCAyNTMsIDAuNSk7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLWdyb3VwLWIge1xuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KSBvdXRzZXQ7XG59XG5cbi5zdGlja3ktbGlzdCB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnN0aWNreS10YWIge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RpY2t5LXRhYiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLnN0aWNreS10YWIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzJlMzg0ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVmN2ZhO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5hY3RpdmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnJlc29sdmVkIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnByb2Nlc3Npbmcge1xuICBjb2xvcjogI2ZmOTgwMDtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkudW5mdWxmaWxsZWQge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwge1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwgLnBzLXNjcm9sbGJhci14IHtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGlja3ktcGFuZWxiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogNjRweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLm1lbnUtZm9ybS13cmFwcGVyIC5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGRpbmctdGh1LXRpZW4ge1xuICBwYWRkaW5nOiA1cHggMTZweCAyOHB4IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnBvLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucGFkZGluZy1sZWZ0ODBweCB7XG4gIHBhZGRpbmctbGVmdDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uZC11bnNldCB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxua2VuZG8tc3BsaXR0ZXIgdWwgPiBsaS5yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ThongTinLichSuChiTietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLichSuChiTietComponent", function() { return ThongTinLichSuChiTietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-remove-red-eye */ "./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js");
/* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _view_image_pdf_list_cls_view_image_pdf_list_cls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../view-image-pdf-list-cls/view-image-pdf-list-cls.component */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/file-download.helper */ "./src/app/core/utilities/file-download.helper.ts");
/* harmony import */ var _danh_sach_ket_qua_can_lam_sang_ket_qua_cdha_tdcn_in_phieu_popup_ket_qua_cdha_tdcn_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../danh-sach-ket-qua-can-lam-sang/ket-qua-cdha-tdcn-in-phieu-popup/ket-qua-cdha-tdcn-in-phieu-popup.component */ "./src/app/modules/main/can-lam-sang/danh-sach-ket-qua-can-lam-sang/ket-qua-cdha-tdcn-in-phieu-popup/ket-qua-cdha-tdcn-in-phieu-popup.component.ts");


















let ThongTinLichSuChiTietComponent = class ThongTinLichSuChiTietComponent {
    constructor(route, baseService, router, apiService, dialog, location, notificationService, authService, http) {
        this.route = route;
        this.baseService = baseService;
        this.router = router;
        this.apiService = apiService;
        this.dialog = dialog;
        this.location = location;
        this.notificationService = notificationService;
        this.authService = authService;
        this.http = http;
        this.idYeuCauTiepNhan = 0;
        this.icRedEye = _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.isDuoi6Tuoi = false;
        this.Duoi6TuoiDisplay = "";
        this.baseService.controllerName = "CanLamSang";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].CanLamSang;
        this.thongTinBenhNhan = {};
        this.idYeuCauTiepNhan = this.route.snapshot.params.id;
        if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
            this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
        }
        this.gridColumns = [
            { Field: "DichVu", Title: "Dịch vụ", Width: 160, Sortable: true },
            { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 100, Sortable: true },
            { Field: "NoiChiDinh", Title: "Nơi chỉ định", Width: 120, Sortable: true },
            { Field: "NgayChiDinh", Title: "Ngày chỉ định", Width: 80, Sortable: true, Template: this.ngayChiDinhTemplate },
            { Field: "NguoiThucHien", Title: "Người thực hiện", Width: 100, Sortable: true },
            { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 80, Sortable: true, Template: this.ngayThucHienTemplate },
            { Field: "BacSiKetLuan", Title: "BS Kết luận", Width: 100, Sortable: true },
            { Field: "MayTraKetQua", Title: "Máy trả KQ", Width: 60, Sortable: true },
            { Field: "FileChuKy", Title: "File chữ ký", Width: 80, Sortable: true, Template: this.fileChuKyTemplate },
            { Field: "Action", Title: "", Width: 80, Sortable: true, Template: this.actionTemplate }
        ];
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    BackToList() {
        this.location.back();
    }
    getThongTinYeuCauBenhNhan(id) {
        this.showPopupLoadingData();
        this.baseService.getById(id).subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.thongTinBenhNhan = resultData;
                if (this.thongTinBenhNhan.NamSinh != null &&
                    this.thongTinBenhNhan.ThangSinh != null &&
                    this.thongTinBenhNhan.NgaySinh != null) {
                    var ngaySinh = new Date(this.thongTinBenhNhan.ThangSinh +
                        "/" +
                        this.thongTinBenhNhan.NgaySinh +
                        "/" +
                        this.thongTinBenhNhan.NamSinh +
                        "/");
                    this.getAge(ngaySinh, new Date());
                }
            }
            this.closePopupLoadingData();
        }, err => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    getAge(date_1, date_2) {
        let yAppendix, mAppendix, dAppendix;
        let days = date_2.getDate() - date_1.getDate();
        if (days < 0) {
            date_2.setMonth(date_2.getMonth() - 1);
            days += this.DaysInMonth(date_2);
        }
        let months = date_2.getMonth() - date_1.getMonth();
        if (months < 0) {
            date_2.setFullYear(date_2.getFullYear() - 1);
            months += 12;
        }
        let years = date_2.getFullYear() - date_1.getFullYear();
        if (years > 1)
            yAppendix = " years";
        else
            yAppendix = " year";
        if (months > 1)
            mAppendix = " months";
        else
            mAppendix = " month";
        if (days > 1)
            dAppendix = " days";
        else
            dAppendix = " day";
        if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
            this.isDuoi6Tuoi = true;
        }
        else {
            this.isDuoi6Tuoi = false;
        }
        this.Duoi6TuoiDisplay =
            years + " Tuổi " + months + " Tháng " + days + " Ngày ";
    }
    DaysInMonth(date2_UTC) {
        let monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
        let monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
        let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
        return monthLength;
    }
    taiFileChuKy(dataItem) {
        this.showPopupLoadingData();
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]({
            fromObject: {
                tenGuid: dataItem.TenGuid,
                duongDan: dataItem.DuongDan,
            },
        });
        this.apiService
            .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
            .subscribe((resp) => {
            const options = new _angular_http__WEBPACK_IMPORTED_MODULE_15__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_15__["ResponseContentType"].Blob });
            this.http.get(resp, options).subscribe(res => {
                Object(src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_16__["saveFile"])(res.blob(), dataItem.FileChuKy);
            });
            this.closePopupLoadingData();
        }, err => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    xemKetQua(dataItem) {
        var obj = {
            "Id": dataItem.Id,
            "HostingName": window.location.protocol + "//" + window.location.host
        };
        this.apiService.post("CanLamSang/XuLyInPhieuKetQua", obj).subscribe(res => {
            this.closePopupLoadingData();
            this.dialog.open(_danh_sach_ket_qua_can_lam_sang_ket_qua_cdha_tdcn_in_phieu_popup_ket_qua_cdha_tdcn_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_17__["KetQuaCdhaTdcnInPhieuPopupComponent"], {
                disableClose: false,
                width: '1200px',
                data: { res, yeuCauDVKyThuatId: dataItem.Id, dichVuKyThuatBenhVienId: dataItem.Id },
            }).afterClosed().subscribe(result => {
            });
        }, err => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    getThongTinCanLamSang(id) {
        // this.dialog.open(LoadingComponent, {
        //   disableClose: true,
        //   width: "200px",
        //   height: "90px",
        //   data: { Title: "Đang tải dữ liệu..." },
        // });
        // this.apiService
        //   .get<any>("CanLamSang/GetThongTinKLichSuCanLamSang/" + id)
        //   .subscribe((resultData) => {
        //     if (resultData !== null && resultData !== undefined) {
        //       this.thongTinCanLamSangs = resultData.DanhSachCanLamSangs;
        //       this.ketQuaNhomXetNghiems = resultData.KetQuaNhomXetNghiems;
        //       resultData.DanhSachCanLamSangs.forEach((element) => {
        //         if (element.LoaiYeuCauKyThuat === 3) {
        //           this.chuanDoanHinhAnh = true;
        //         }
        //         if (element.LoaiYeuCauKyThuat === 4) {
        //           this.thamDoChucNang = true;
        //         }
        //         this.dialog.closeAll();
        //       });
        //       this.dialog.closeAll();
        //     }
        //   });
    }
    xemTaiLieu(dataItem) {
        this.showPopupLoadingData();
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]({
            fromObject: {
                tenGuid: dataItem.TenGuid,
                duongDan: dataItem.DuongDan,
            },
        });
        this.apiService
            .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
            .subscribe((resp) => {
            this.closePopupLoadingData();
            if (resp) {
                if (dataItem.TenGuid.indexOf(".pdf") != -1 ||
                    dataItem.TenGuid.indexOf(".PDF") != -1) {
                    this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_8__["ViewImagePdfComponent"], {
                        disableClose: false,
                        width: "1000px",
                        height: "600px",
                        data: {
                            Type: "PDF",
                            Title: "Xem tài liệu",
                            Description: resp.MoTa !== null ? resp.MoTa : "",
                            Src: resp,
                        },
                    });
                }
                else {
                    this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_8__["ViewImagePdfComponent"], {
                        disableClose: false,
                        width: "1000px",
                        height: "600px",
                        data: {
                            Type: "Image",
                            Title: "Xem ảnh",
                            Description: resp.MoTa !== null ? resp.MoTa : "",
                            Src: resp,
                        },
                    });
                }
            }
        }, err => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.BackToList();
            event.preventDefault();
        }
    }
    ViewImagePDF(dataItem) {
        this.dialog.open(_view_image_pdf_list_cls_view_image_pdf_list_cls_component__WEBPACK_IMPORTED_MODULE_11__["ViewImagePdfListClsComponent"], {
            disableClose: true,
            width: '1000px',
            height: 'auto',
            data: { Model: dataItem }
        }).afterClosed()
            .subscribe((result) => {
        });
    }
};
ThongTinLichSuChiTietComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_15__["Http"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayChiDinhTemplate", { static: true })
], ThongTinLichSuChiTietComponent.prototype, "ngayChiDinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayThucHienTemplate", { static: true })
], ThongTinLichSuChiTietComponent.prototype, "ngayThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileChuKyTemplate", { static: true })
], ThongTinLichSuChiTietComponent.prototype, "fileChuKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplate", { static: true })
], ThongTinLichSuChiTietComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], ThongTinLichSuChiTietComponent.prototype, "keyEvent", null);
ThongTinLichSuChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-thong-tin-lich-su-chi-tiet",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-lich-su-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-lich-su-chi-tiet.component.scss */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component.scss")).default]
    })
], ThongTinLichSuChiTietComponent);



/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jYW4tbGFtLXNhbmcvbGljaC1zdS1jYW4tbGFtLXNhbmcvdmlldy1pbWFnZS1wZGYtbGlzdC1jbHMvdmlldy1pbWFnZS1wZGYtbGlzdC1jbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ViewImagePdfListClsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImagePdfListClsComponent", function() { return ViewImagePdfListClsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _iconify_icons_ic_picture_as_pdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/picture-as-pdf */ "./node_modules/@iconify/icons-ic/picture-as-pdf.js");
/* harmony import */ var _iconify_icons_ic_picture_as_pdf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_picture_as_pdf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/file-download.helper */ "./src/app/core/utilities/file-download.helper.ts");












let ViewImagePdfListClsComponent = class ViewImagePdfListClsComponent {
    constructor(data, sanitizer, apiService, dialog, http, dialogRef) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.apiService = apiService;
        this.dialog = dialog;
        this.http = http;
        this.dialogRef = dialogRef;
        this.src = "";
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.IcPDF = _iconify_icons_ic_picture_as_pdf__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.ChonKieuInChung = true;
        this.showLoaiPhieuIn = false; // kieu in
        this.HideClose = false;
        this.gridDataSource = {};
        this.gridColumns = [];
        // this.src= "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
    }
    ngOnInit() {
        console.log("dataa:", this.data.Model);
        this.gridColumns = [
            { Field: "Ten", Title: "Tên file", Width: 200, Sortable: false },
            { Field: "", Title: "", Width: 40, Sortable: false, Template: this.actionTemplate, TemplateHeader: this.headerTemplate },
        ];
        this.gridDataSource = {
            data: this.data.Model,
            total: this.data.Model.length
        };
    }
    setDataGridView() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    ViewImagePDF(thongTinAnh) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]({
            fromObject: {
                tenGuid: thongTinAnh.TenGuid,
                duongDan: thongTinAnh.DuongDan,
            },
        });
        this.apiService
            .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
            .subscribe((result) => {
            if (result) {
                if (thongTinAnh.TenGuid.indexOf(".pdf") != -1 ||
                    thongTinAnh.TenGuid.indexOf(".PDF") != -1) {
                    // console.log(this.listPdf)
                    this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_6__["ViewImagePdfComponent"], {
                        disableClose: true,
                        width: '1000px',
                        height: '600px',
                        data: {
                            Type: 'PDF', Title: 'Xem tập tin',
                            Src: result
                        }
                    }).afterClosed()
                        .subscribe((result) => {
                    });
                }
                else {
                    this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_6__["ViewImagePdfComponent"], {
                        disableClose: true,
                        width: '1000px',
                        height: '600px',
                        data: {
                            Type: 'Image', Title: 'Xem ảnh',
                            Src: result
                        }
                    }).afterClosed()
                        .subscribe((result) => {
                    });
                }
            }
        });
    }
    downloadFile(dataItem) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]({
            fromObject: {
                tenGuid: dataItem.TenGuid,
                duongDan: dataItem.DuongDan,
            },
        });
        this.apiService
            .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
            .subscribe((result) => {
            this.dataPopup = result;
            const options = new _angular_http__WEBPACK_IMPORTED_MODULE_10__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_10__["ResponseContentType"].Blob });
            this.http.get(this.dataPopup, options).subscribe(res => {
                Object(src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_11__["saveFile"])(res.blob(), dataItem.Ten);
            });
        });
    }
    downloadFileAll(dataItem) {
        dataItem.forEach(element => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]({
                fromObject: {
                    tenGuid: element.TenGuid,
                    duongDan: element.DuongDan,
                },
            });
            this.apiService
                .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
                .subscribe((result) => {
                this.dataPopup = result;
                const options = new _angular_http__WEBPACK_IMPORTED_MODULE_10__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_10__["ResponseContentType"].Blob });
                this.http.get(this.dataPopup, options).subscribe(res => {
                    Object(src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_11__["saveFile"])(res.blob(), element.Ten);
                });
            });
        });
    }
    close(data) {
        this.dialogRef.close(data);
    }
};
ViewImagePdfListClsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_10__["Http"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], { static: false })
], ViewImagePdfListClsComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], ViewImagePdfListClsComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerTemplate', { static: true })
], ViewImagePdfListClsComponent.prototype, "headerTemplate", void 0);
ViewImagePdfListClsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-image-pdf-list-cls',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-image-pdf-list-cls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-image-pdf-list-cls.component.scss */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/view-image-pdf-list-cls/view-image-pdf-list-cls.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ViewImagePdfListClsComponent);



/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Nhbi1sYW0tc2FuZy9saWNoLXN1LWNhbi1sYW0tc2FuZy94ZW0ta2V0LXF1YS1jZGhhLXRkY24tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxjYW4tbGFtLXNhbmdcXGxpY2gtc3UtY2FuLWxhbS1zYW5nXFx4ZW0ta2V0LXF1YS1jZGhhLXRkY24tcG9wdXBcXHhlbS1rZXQtcXVhLWNkaGEtdGRjbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2Nhbi1sYW0tc2FuZy9saWNoLXN1LWNhbi1sYW0tc2FuZy94ZW0ta2V0LXF1YS1jZGhhLXRkY24tcG9wdXAveGVtLWtldC1xdWEtY2RoYS10ZGNuLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jYW4tbGFtLXNhbmcvbGljaC1zdS1jYW4tbGFtLXNhbmcveGVtLWtldC1xdWEtY2RoYS10ZGNuLXBvcHVwL3hlbS1rZXQtcXVhLWNkaGEtdGRjbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: XemKetQuaCdhaTdcnPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XemKetQuaCdhaTdcnPopupComponent", function() { return XemKetQuaCdhaTdcnPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");








let XemKetQuaCdhaTdcnPopupComponent = class XemKetQuaCdhaTdcnPopupComponent {
    constructor(data, dialog, apiService, notificationService) {
        this.data = data;
        this.dialog = dialog;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
    }
    ngOnInit() {
        this.getHtml();
    }
    getHtml() {
        this.showPopupLoadingData();
        var obj = {
            "Id": this.data,
            "HostingName": window.location.protocol + "//" + window.location.host
        };
        this.apiService.post("CanLamSang/XuLyInPhieuKetQua", obj).subscribe(res => {
            this.getFilePDFFromHtml(res);
        }, err => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    getFilePDFFromHtml(html) {
        var obj = {
            "Html": html,
            "TenFile": "KetQuaCDHATDCN"
        };
        this.apiService.postExportPdf('CanLamSang/GetFilePDFFromHtml', obj).subscribe(file => {
            let newBlob = new Blob([file], { type: "application/pdf" });
            let datalocalURL = window.URL.createObjectURL(newBlob);
            this.fileUrl = datalocalURL;
            this.file = file;
            this.closePopupLoadingData();
        }, (err) => {
            if (err.Message !== 'Validation Failed') {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    downloadFile() {
        const dateTimeNow = new Date();
        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(this.file, 'application/pdf', 'KetQuaCDHATDCN' + dateTimeNow.getFullYear() + '.pdf');
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
};
XemKetQuaCdhaTdcnPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
XemKetQuaCdhaTdcnPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xem-ket-qua-cdha-tdcn-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xem-ket-qua-cdha-tdcn-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xem-ket-qua-cdha-tdcn-popup.component.scss */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], XemKetQuaCdhaTdcnPopupComponent);



/***/ })

}]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~64ae6b2a-es2015.js.map