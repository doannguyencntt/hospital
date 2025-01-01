(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach-cho-kham-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-6 py-4\" fxLayout=\"column\">\n\n    <div style=\"margin-top: 5px;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\">\n        <div fxFlex=\"100%\" style=\"padding-left: 7px; text-align: center;\">\n            Số thẻ BHYT: <span style=\"font-weight: bold;\">{{data.MaThe}}</span>\n        </div>\n        <div fxFlex=\"100%\" style=\"padding-left: 7px; text-align: center;\">\n            Họ và tên: <span style=\"font-weight: bold;\">{{data.TenBenhNhan}}</span>\n        </div>\n        <div fxFlex=\"100%\" style=\"padding-left: 7px; text-align: center;\">\n            Ngày sinh: <span style=\"font-weight: bold;\">{{data.NgaySinhDisplay}}</span>\n        </div>\n    </div>\n\n</div>\n\n<div style=\"text-align: center;\">\n    <h4>Hệ thống đang kiểm tra thông tin BHYT...</h4>\n    <button color=\"primary\" mat-raised-button type=\"button\">\n        <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n    </button>\n</div>\n\n\n<!-- <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"menu\" (click)=\"close()\">Đóng</button>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-create/danh-sach-cho-kham-create.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-create/danh-sach-cho-kham-create.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>danh-sach-cho-kham-create works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-error/danh-sach-cho-kham-error.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-error/danh-sach-cho-kham-error.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"text-align: center;\">{{errorMessage}}</h3>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n            [\n                {Title:'Tiếp Nhận Người Bệnh',Path:''},\n                {Title:'DS Tiếp Nhận',Path:'', Active:true}           \n            ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n            {Key:'Ctrl + Q', Description:'Quét mã vạch',End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-sach-tiep-nhan\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [additionalSearchString]=\"addtionStringDefault\"\n                urlGetData=\"DanhSachChoKham/GetDataForGridAsyncDanhSachChoKham\" [showStt]=\"true\"\n                urlGetTotalPage=\"DanhSachChoKham/GetTotalPageForGridAsyncDanhSachChoKham\" [useHeaderDefault]=\"false\"\n                [searchString]=\"danhSachChoKham.SearchString\" [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\"\n                [sort]=\"sort\">\n                <ng-template #thoiDiemTiepNhanTemplate let-dataItem>\n                    {{dataItem.ThoiDiemTiepNhanDisplay}}\n                </ng-template>\n                <ng-template #chiTietTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"edit(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaYeuCauTiepNhan}}\">\n                                {{dataItem.MaYeuCauTiepNhan}}</p>\n                        </a>\n                    </div>\n                </ng-template>\n                <ng-template #hienThiNgayThangNamTemplate let-dataItem>\n                    {{dataItem.NgayThangNam}}\n                </ng-template>\n            </app-grid>\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"danhSachChoKham.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                    <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" kendoTooltip\n                        title=\"Quét mã vạch thẻ\" class=\"button-barcoe-in-search\">\n                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                    </button>\n                </div>\n\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"danhSachChoKham.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n                    id=\"ThoiDiemTiepNhanTuFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Tiếp nhận từ\"\n                    class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"danhSachChoKham.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n                    id=\"ThoiDiemTiepNhanDenFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Tiếp nhận đến\"\n                    class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n                <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button>\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"XuatExcel()\"\n                    kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n            </div>\n        </ng-template>\n        <ng-template #trangThaiTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button (click)=\"InTheBenhNhan(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>Thẻ Người Bệnh</span>\n                    </button>\n                    <button (click)=\"InVongDeoTay(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>Vòng Đeo Tay</span>\n                    </button>\n                    <app-print-form typeSize=\"A5\" textPrint=\"Phiếu Đăng Ký Khám\" type=\"PDF\" [event]=\"(dataItem.Id)\"\n                        typeLayout=\"landscape\" [bodyComponent]=\"this\">\n                    </app-print-form>\n                    <button (click)=\"InBangKeChiPhiKhamBenh(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>Bảng Kê Chi Phí Khám Bệnh</span>\n                    </button>\n                    <button (click)=\"InHoSoKhamBenh(dataItem.Id, true)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>Phiếu Khám Bệnh</span>\n                    </button>\n                    <button *ngIf=\"dataItem.CoYeuCauKhamBenhNhapVien == true\"\n                        (click)=\"InHoSoKhamBenh(dataItem.Id, false)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>Phiếu Khám Bệnh Vào Viện</span>\n                    </button>\n                    <button *ngIf=\"dataItem.CoBHYT == true\" (click)=\"InGiayNghiHuongBHXH(dataItem)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>Giấy Nghỉ Hưởng BHXH</span>\n                    </button>\n                    <button (click)=\"edit(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                        <span>Sửa</span>\n                    </button>\n                    <button (click)=\"deleteTinhTrang(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icBlock\"></mat-icon>\n                        <span>Hủy</span>\n                    </button>\n                    <button \n                    (click)=\"InPhieuXN(dataItem.Id)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                    <span>PHIẾU CHỈ ĐỊNH XÉT NGHIỆM\n                        TEST NHANH KHÁNG NGUYÊN SARS-CoV-2</span>\n                    </button>\n                   \n                </ng-template>\n            </mat-menu>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div #content hidden class=\"content\" id=\"printMe\">\n    <table style=\"width:20%; border: 1px dotted black; padding: 5px; width: 300px\">\n        <tr>\n            <th rowspan=\"\"> BỆNH VIỆN ĐA KHOA<br>\n                HUYỆN HOÀI ĐỨC</th>\n        </tr>\n        <tr>\n            <th> Khám Nội</th>\n        </tr>\n        <tr>\n            <th> Tầng 2<br>\n                Phòng: 205\n            </th>\n        </tr>\n        <tr>\n            <th> Mã NB: 3256<br>\n                Tên : {{a}} &nbsp; N.sinh: 1985 &nbsp; G.tính: Nam <br>\n                Giờ khám dự kiến: 8h30\n            </th>\n        </tr>\n        <tr>\n            <th>\n                Phiếu có giá trị trong ngày: 25/12/2019\n            </th>\n        </tr>\n    </table>\n</div> -->\n<div #divID id=\"printMe\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Thông Tin Bảo Hiểm Y Tế</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <h3 class=\"sub-title\">Thông Tin Thẻ</h3>\n    <table width=\"100%\">\n        <tr>\n            <td width=\"28%\">Ngày sinh: <strong>{{data.BenhNhan.NgayThangNamSinhDisplay}}</strong></td>\n            <td width=\"29%\">Giới tính: <strong>{{data.BenhNhan.GioiTinhDisplay}}</strong></td>\n            <td>Địa chỉ: <strong>{{data.DiaChiDisplay}}</strong></td>\n        </tr>\n        <tr>\n            <td>Mã ĐKBĐ: <strong>{{data.MaDKBD}}</strong></td>\n            <td>Nơi ĐKBH: <strong>{{data.BenhNhan.NoiDangKyBHYT}}</strong></td>\n            <td>Cơ quan BHXH: <strong>{{data.cqBHXH}}</strong></td>\n        </tr>\n        <tr>\n            <td>Ngày có hiệu lực: <strong>{{data.NgayCoHieuLucDisplay}}</strong></td>\n            <td>Ngày hết hiệu lực: <strong [style.color] = \"data.isOutOfDate == true ? 'red' : 'black' \">{{data.NgayHetHieuLucDisplay}}</strong></td>\n            <td>Ngày đủ 5 năm: <strong>{{data.NgayDu5NamDisplay}}</strong></td>\n        </tr>\n    </table>\n    <h3 class=\"sub-title\">Thông Tin Khám Chữa Bệnh</h3>\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>danh-sach-cho-kham-shared works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Tiếp Nhận Người Bệnh',Path:''}\n                    ,{Title:'DS Tiếp Nhận',Path:'/danh-sach-tiep-nhan', queryParams: {holdQuery : true}}\n                    ,{Title:'Cập Nhật Yêu Cầu Tiếp Nhận',Path:'',Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <!-- <app-radio id=\"LoaiKham\" name=\"LoaiKham\" class=\"no-format-css rad-white\"\n                [(model)]=\"tiepNhanBenhNhan.LoaiKham\"\n                [items]=\"[{Value:1,Text:'Khám Có BHYT'},{Value:2,Text:'Khám Nhân Dân'},{Value:3,Text:'Khám Sức Khỏe Tổng Quát'}]\">\n            </app-radio> -->\n            <app-hot-key [keys]=\"[\n            {Key:'Ctrl + Q',Description:'Quét mã vạch'},\n            {Key:'Ctrl + F1',Description:'Di chuyển tới và check Có BHYT'},\n            {Key:'Ctrl + F2',Description:'Di chuyển tới và check NHẬP TAY'},\n            {Key:'Ctrl + F3',Description:'Di chuyển tới và check Có giấy chuyển viện'},\n            {Key:'Ctrl + F5',Description:'Di chuyển tới và check Có giấy miễn cùng chi trả'},\n            {Key:'Ctrl + F6',Description:'Di chuyển tới và check Có miễn giảm'},\n            {Key:'Ctrl + F7',Description:'Di chuyển tới và check CÓ BHTN'},\n            {Key:'Ctrl + F8',Description:'Di chuyển tới và mở tab Chỉ định dịch vụ'},\n            {Key:'Ctrl + F9',Description:'Di chuyển tới và mở tab Tài liệu đính kèm'},\n            {Key:'Ctrl + F10',Description:'Di chuyển tới và mở tab Người giám hộ'},\n            {Key:'Ctrl + F11',Description:'Di chuyển tới và mở tab Lịch hẹn'},\n            {Key:'Ctrl + F12',Description:'Di chuyển tới và mở tab Lịch sử khám bệnh'},\n            {Key:'Ctrl + S',Description:'Lưu'},\n            {Key:'Esc',Description:'Hủy',End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div @fadeInUp class=\"overflow-auto -mt-15\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <div sfxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\" fxFlex=\"100%\">\n                                <div fxFlex=\"15%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\">\n                                    <h3 class=\"sub-title mt-0\">\n                                        Thông Tin Bảo Hiểm Y Tế\n                                    </h3>\n                                </div>\n\n                                <div fxFlex=\"35%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" kendoTooltip>\n                                    <app-checkbox (modelChange)=\"coBHYTChange($event)\"\n                                        [(model)]=\"tiepNhanBenhNhan.CoBHYT\" id=\"CheckboxIsHaveBHYT\" label=\"Có\"\n                                        [disabled]=\"tiepNhanBenhNhan.TuNhap == true\" title=\"Phím tắt: Ctrl + F1\">\n                                    </app-checkbox>\n                                    &nbsp;&nbsp;&nbsp;&nbsp;\n                                    <app-checkbox (modelChange)=\"tuNhapChange($event)\"\n                                        [(model)]=\"tiepNhanBenhNhan.TuNhap\" id=\"TuNhap\"\n                                        [disabled]=\"tiepNhanBenhNhan.CoBHYT != true || isDisableNhapTayForUpdate\"\n                                        label=\"Nhập tay\" title=\"Phím tắt: Ctrl + F2\"></app-checkbox>\n                                </div>\n\n                                <div fxFlex=\"50%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\">\n                                    <div fxFlex=\"50%\">\n\n                                    </div>\n                                    <div fxFlex=\"50%\" style=\"text-align: right;\">\n                                        <a style=\"text-decoration: underline; color: blue; font-style: italic;\"\n                                            (click)=\"lichSuKiemTraTheBHYT()\">Lịch sử kiểm tra thẻ BHYT</a>\n                                        <a style=\"text-decoration: underline; color: blue; font-style: italic; margin-left: 10px;\"\n                                            (click)=\"lichSuKBC()\">Lịch sử KCB</a>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\" *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\">\n                                <div fxFlex=\"20%\" fxFlex.sm=\"20%\" style=\"position: relative;\" kendoTooltip>\n                                    <app-textbox id=\"SoTheBHYT\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Số thẻ BHYT\"\n                                        [(model)]=\"tiepNhanBenhNhan.BHYTMaSoThe\" (keyup)=\"onKey($event, true, 1)\"\n                                        [isAutoFocus]=\"true\" (blurChange)=\"blur($event, true)\"\n                                        [disabled]=\"isHaveBHYTForTheFistLoad == true && tiepNhanBenhNhan.TuNhap != true\"\n                                        (modelChange)=\"ThongTinBenhNhanMaSoTHeChange($event)\" [required]=\"true\"\n                                        [validationerror]=\"'BHYTMaSoThe' | validationerror:validationErrors\">\n                                    </app-textbox>\n\n                                    <button (click)=\"QuetMaQRCodeClick()\" [disabled]=\"isHaveBHYTForTheFistLoad == true\"\n                                        style=\"position: absolute;right: 21px;margin-top: 10px;\" color=\"primary\"\n                                        (keyup)=\"onKeyScanner($event)\" mat-mini-fab type=\"button\" kendoTooltip\n                                        title=\"Quét mã vạch thẻ BHYT\" title=\"Phím tắt: Ctrl + Q\">\n                                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                    </button>\n                                </div>\n\n                                <app-textbox id=\"BHYTMaDKBD\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mã nơi ĐKBH\"\n                                    maxlength=\"200\" (blurChange)=\"blurMaNoiDKBD($event)\"\n                                    (keyup)=\"onKeyMaNoiDKBD($event)\" [(model)]=\"tiepNhanBenhNhan.BHYTMaDKBD\"\n                                    [required]=\"true\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                                    [validationerror]=\"'BHYTMaDKBD' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <app-textbox id=\"NoiDangKyBHYT\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nơi ĐKBH\"\n                                    maxlength=\"200\" [(model)]=\"tiepNhanBenhNhan.NoiDangKyBHYT\" [disabled]=\"true\">\n                                </app-textbox>\n\n                                <app-textboxnumeric [(model)]=\"tiepNhanBenhNhan.BHYTMucHuong\" id=\"BHYTMucHuong\"\n                                    fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mức hưởng (%)\" format=\"0\" [required]=\"true\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\" min=\"1\" max=\"100\"\n                                    (blur)=\"blurBHYTMucHuong($event)\" (keyup)=\"onKeyBHYTMucHuong($event)\"\n                                    [validationerror]=\"'BHYTMucHuong' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n\n                                <app-textbox id=\"BHYTDiaChi\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Địa chỉ\"\n                                    maxlength=\"200\" (blurChange)=\"blurDiaChi($event)\" (keyup)=\"onKeyDiaChi($event)\"\n                                    placeHolder=\"Địa chỉ (Số nhà/đường phố, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố)\"\n                                    [(model)]=\"tiepNhanBenhNhan.BHYTDiaChi\" [required]=\"true\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                                    [validationerror]=\"'BHYTDiaChi' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <app-radio id=\"LyDoVaoVien\" label=\"Tuyến khám\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    [(model)]=\"tiepNhanBenhNhan.LyDoVaoVien\" (modelChange)=\"lyDoVaoVienChange($event)\"\n                                    [items]=\"[{Value:1,Text:'Đúng tuyến'},{Value:3,Text:'Trái tuyến'}]\">\n                                </app-radio>\n\n                                <app-datepicker id=\"BHYTNgayHieuLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    (blur)=\"blurNgayCoHieuLuc($event)\" (keyup)=\"onKeyNgayCoHieuLuc($event)\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                                    (modelChange)=\"ngayCoHieuLucChange($event)\" label=\"Ngày có hiệu lực\"\n                                    [(model)]=\"tiepNhanBenhNhan.BHYTNgayHieuLuc\" [required]=\"true\"\n                                    [validationerror]=\"'BHYTNgayHieuLuc' | validationerror:validationErrors\">\n                                </app-datepicker>\n                                <!-- (modelChange)=\"ngayHetHieuLucChange($event)\" -->\n                                <app-datepicker id=\"BHYTNgayHetHan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    (blur)=\"blurNgayHetHieuLuc($event)\" (keyup)=\"onKeyNgayHetHieuLuc($event)\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\" label=\"Ngày hết hiệu lực\"\n                                    [(model)]=\"tiepNhanBenhNhan.BHYTNgayHetHan\" [required]=\"true\"\n                                    [validationerror]=\"'BHYTNgayHetHan' | validationerror:validationErrors\">\n                                </app-datepicker>\n\n                                <app-datepicker id=\"BHYTNgayDu5Nam\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    [disabled]=\"tiepNhanBenhNhan.TuNhap != true\" label=\"Ngày đủ 5 năm\"\n                                    [(model)]=\"tiepNhanBenhNhan.BHYTNgayDu5Nam\">\n                                </app-datepicker>\n\n                                <app-textbox\n                                    *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == true && soPhanTramHuongBHYT != null && tiepNhanBenhNhan.IsCheckedBHYT != null\"\n                                    id=\"messageThanhCong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\"\n                                    maxlength=\"200\" [disabled]=\"true\" [(model)]=\"messageThanhCong\" class=\"green\">\n                                </app-textbox>\n\n                                <app-textbox\n                                    *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == false && soPhanTramHuongBHYT != null && tiepNhanBenhNhan.IsCheckedBHYT != null\"\n                                    id=\"messageKhongThanhCong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\"\n                                    maxlength=\"200\" [disabled]=\"true\" [(model)]=\"messageKhongThanhCong\" class=\"red\">\n                                </app-textbox>\n\n                                <app-textbox *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == null\" id=\"messageNULL\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\" maxlength=\"200\"\n                                    [disabled]=\"true\">\n                                </app-textbox>\n\n                                <!-- <div fxFlex=\"80%\">\n                                    <div>\n                                        <ul class=\"inline\">\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Mã nơi ĐKBH: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.BHYTMaDKBD}}</strong>\n                                            </li>\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Nơi ĐKBH: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.NoiDangKyBHYT}}</strong>\n                                            </li>\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Ngày đủ 5 năm: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.NgayDu5NamDisplay}}</strong>\n                                            </li>\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Mức hưởng: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null && tiepNhanBenhNhan.BHYTMucHuong != null\">{{tiepNhanBenhNhan.BHYTMucHuong}}%</strong>\n                                            </li>\n                                        </ul>\n                                    </div>\n\n                                    <div>\n                                        <ul class=\"inline\">\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Ngày có hiệu lực: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.NgayCoHieuLucDisplay}}</strong>\n                                            </li>\n\n                                            <li fxFlex=\"25%\" fxFlex.sm=\"25%\">Ngày hết hiệu lực: <strong\n                                                *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.NgayHetHieuLucDisplay}}</strong>\n                                        </li>\n                                        <li fxFlex=\"25%\" fxFlex.sm=\"25%\">\n\n                                        </li>\n                                        <li fxFlex=\"25%\" fxFlex.sm=\"25%\">\n\n                                        </li>\n                                        </ul>\n                                    </div>\n\n                                    <div>\n                                        <ul class=\"inline\">\n                                            <li fxFlex=\"50%\" fxFlex.sm=\"50%\">Địa chỉ: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan != null\">{{tiepNhanBenhNhan.BHYTDiaChi}}</strong>\n                                            </li>\n                                            <li fxFlex=\"30%\" fxFlex.sm=\"30%\">Kiểm tra trên BHYT: <strong\n                                                    *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == true && soPhanTramHuongBHYT != null\" style=\"color: green;\">Kiểm tra\n                                                    thành công</strong>\n                                                <strong *ngIf=\"tiepNhanBenhNhan.IsCheckedBHYT == false && soPhanTramHuongBHYT != null\" style=\"color: red;\">Kiểm\n                                                    tra không thành công</strong></li>\n                                            <li fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                                                <a style=\"text-decoration: underline; color: blue; font-style: italic;\" (click)=\"lichSuKBC()\">Lịch sử KCB</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n\n\n                                </div> -->\n\n                                <!-- <div style=\"width: 100%\" fxLayout=\"row\" xFlex=\"100%\" fxFlex.sm=\"100%\">\n\n                                    <label style=\"margin-right: 10px\">Tuyến khám: </label>\n                                    <app-radio id=\"LyDoVaoVien\" class=\"no-format-css\"\n                                        [(model)]=\"tiepNhanBenhNhan.LyDoVaoVien\"\n                                        (modelChange)=\"lyDoVaoVienChange($event)\"\n                                        [items]=\"[{Value:1,Text:'Đúng tuyến'},{Value:3,Text:'Trái tuyến'}]\">\n                                    </app-radio>\n                                </div> -->\n\n                            </div>\n\n                        </div>\n\n                        <div style=\"height: 30px;\">\n\n                        </div>\n\n                        <div id=\"test\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                            fxLayoutGap.lt-sm=\"0\">\n                            <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Hành Chính\n                                <span class=\"thong-tin-tai-khoan-benh-nhan\"\n                                    *ngIf=\"thongTinTaiKhoanBenhNhan != null && thongTinTaiKhoanBenhNhan != undefined\">\n                                    <button (click)=\"InVongDeoTay()\" style=\"bottom: 7px;margin-right: 10px;\"\n                                        type=\"button\" color=\"primary\" mat-raised-button>\n                                        In Vòng Đeo Tay</button>\n                                    <button (click)=\"InTheBenhNhanTiepNhan()\" style=\"bottom: 7px;margin-right: 10px;\"\n                                        type=\"button\" color=\"primary\" mat-raised-button>\n                                        In Thẻ Người Bệnh</button>\n                                    Mã TN: <span style=\"font-weight: bold;\">{{tiepNhanBenhNhan.MaYeuCauTiepNhan}}\n                                    </span>\n\n                                    - Mã NB: <span\n                                        style=\"font-weight: bold;\">{{thongTinTaiKhoanBenhNhan.MaBenhNhan}}</span> - Tạm\n                                    ứng: <span\n                                        style=\"font-weight: bold; color:green\">{{thongTinTaiKhoanBenhNhan.SoDuTaiKhoan |\n                                        number:'0.2-2':'vi-VN'}}</span> - Còn lại: <span\n                                        style=\"font-weight: bold; color: rgb(255, 86, 48)\">{{tiepNhanBenhNhan.SoTienConLai\n                                        | number:'0.2-2':'vi-VN'}}</span>\n                                </span>\n                            </h3>\n                            <app-textbox class=\"text-transform-uppercase\" #HoVaTenTextbox\n                                (blurChange)=\"blur($event, false)\" id=\"HoTen\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                [isAutoFocus]=\"true\" label=\"Họ và tên\" [(model)]=\"tiepNhanBenhNhan.HoTen\"\n                                maxlength=\"100\"  [upperCase]=\"true\"\n                                [disabled]=\"(isHaveBHYTForTheFistLoad == true) || isChinhSuaThongTinBenhNhan != true\"\n                                (keyup)=\"onKey($event, false, 2)\" (modelChange)=\"ThongTinBenhNhanHoTenChange($event)\"\n                                [required]=\"true\" [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-datepicker *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\" (blur)=\"blur($event, false, 3)\"\n                                id=\"NgaySinh\" fxFlex=\"13%\" fxFlex.sm=\"13%\" label=\"Ngày sinh\"\n                                [disabled]=\"(isHaveBHYTForTheFistLoad == true) || isChinhSuaThongTinBenhNhan != true\"\n                                [(model)]=\"tiepNhanBenhNhan.NgayThangNamSinh\" (keyup)=\"onKey($event, false, 3)\"\n                                (modelChange)=\"ThongTinBenhNhanNgaySinhChange($event)\" [required]=\"true\"\n                                [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n                            <app-datepicker *ngIf=\"tiepNhanBenhNhan.CoBHYT != true\" (blur)=\"blur($event, false, 3)\"\n                                id=\"NgaySinh\" fxFlex=\"13%\" fxFlex.sm=\"13%\" label=\"Ngày sinh\"\n                                [disabled]=\"isChinhSuaThongTinBenhNhan != true\"\n                                [(model)]=\"tiepNhanBenhNhan.NgayThangNamSinh\" (keyup)=\"onKey($event, false, 3)\"\n                                [required]=\"true\" (modelChange)=\"ThongTinBenhNhanNgaySinhChange($event)\"\n                                [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n                            <app-textboxnumeric [(model)]=\"tiepNhanBenhNhan.NamSinh\" id=\"Numerictextbox\" min=\"1\"\n                                max=\"9999\" (modelChange)=\"NamSinhChange($event)\" (blur)=\"blur($event, false, 3)\"\n                                (keyup)=\"onKey($event, false, 3)\" fxFlex=\"7%\" fxFlex.sm=\"7%\" label=\"Năm sinh\" format=\"0\"\n                                [disabled]=\"tiepNhanBenhNhan.NgayThangNamSinh!=null || isChinhSuaThongTinBenhNhan != true\">\n                            </app-textboxnumeric>\n\n                            <!-- *ngIf=\"under6yearsold\"  -->\n                            <span class=\"so-tuoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                                Số tuổi: &nbsp; <strong>{{soTuoiDisplay}}</strong>\n                            </span>\n\n                            <app-textboxmask id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số điện thoại\"\n                                [disabled]=\"isChinhSuaThongTinBenhNhan != true\" onlynumber=\"true\" maxlength=\"10\"\n                                [(model)]=\"tiepNhanBenhNhan.SoDienThoai\" mask=\"000 000 0000\">\n                            </app-textboxmask>\n\n                            <app-dropdownlist id=\"Dropdownlist\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Giới tính\"\n                                [disabled]=\"isChinhSuaThongTinBenhNhan != true\" url=\"TiepNhanBenhNhan/GetGioiTinh\"\n                                [(model)]=\"tiepNhanBenhNhan.GioiTinh\" bind=\"true\"\n                                [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n                            </app-dropdownlist>\n\n                            <app-combobox id=\"NgheNghiep\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề Nghiệp\" bind=\"true\"\n                                [disabled]=\"isChinhSuaThongTinBenhNhan != true\" url=\"TiepNhanBenhNhan/GetNgheNghiep\"\n                                [(model)]=\"tiepNhanBenhNhan.NgheNghiepId\">\n                            </app-combobox>\n\n                            <app-combobox id=\"GetQuocTich\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quốc tịch\" bind=\"true\"\n                                [disabled]=\"isChinhSuaThongTinBenhNhan != true\" url=\"TiepNhanBenhNhan/GetQuocTich\"\n                                [(model)]=\"tiepNhanBenhNhan.QuocTichId\"\n                                [required]=\"true\" [validationerror]=\"'QuocTichId' | validationerror:validationErrors\">\n                            </app-combobox>\n\n                            <app-combobox id=\"TinhThanhPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" bind=\"true\"\n                                (modelChange)=\"TinhThanhPhoChange($event)\" label=\"Tỉnh/Thành Phố\"\n                                [disabled]=\"isChinhSuaThongTinBenhNhan != true\"\n                                url=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{tiepNhanBenhNhan.QuanHuyenId}}\"\n                                hierarchyKeyToSend=\"tinhThanh\" [(model)]=\"tiepNhanBenhNhan.TinhThanhId\"\n                                class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n                                [templateHeader]=\"tinhThanhTemplateHeader\"\n                                [required]=\"true\" [validationerror]=\"'TinhThanhId' | validationerror:validationErrors\">\n                                <ng-template #tinhThanhTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"20%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #tinhThanhTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <app-combobox id=\"QuanHuyen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quận/Huyện\"\n                                (modelChange)=\"QuanHuyenChange($event)\"\n                                url=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{tiepNhanBenhNhan.PhuongXaId}}\"\n                                hierarchyKeyToListen=\"tinhThanh\" hierarchyKeyToSend=\"quanHuyen\"\n                                [disabled]=\"isChinhSuaThongTinBenhNhan != true\" [(model)]=\"tiepNhanBenhNhan.QuanHuyenId\"\n                                class=\"item-no-padding\" [template]=\"quanHuyenTemplate\"\n                                [templateHeader]=\"quanHuyenTemplateHeader\"\n                                [required]=\"true\" [validationerror]=\"'QuanHuyenId' | validationerror:validationErrors\">\n                                <ng-template #quanHuyenTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"20%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #quanHuyenTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <app-combobox id=\"PhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Phường/Xã\"\n                                (modelChange)=\"PhuongXaChange($event)\" url=\"TiepNhanBenhNhan/GetPhuongXa\"\n                                hierarchyKeyToListen=\"quanHuyen\" [disabled]=\"isChinhSuaThongTinBenhNhan != true\"\n                                [(model)]=\"tiepNhanBenhNhan.PhuongXaId\" class=\"item-no-padding\"\n                                [template]=\"phuongXaTemplate\" [templateHeader]=\"phuongXaTemplateHeader\"\n                                [required]=\"true\" [validationerror]=\"'PhuongXaId' | validationerror:validationErrors\">\n                                <ng-template #phuongXaTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"20%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #phuongXaTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <app-textbox class=\"text-transform-capitalize\" id=\"SoNhaDuongPho\" fxFlex=\"20%\"\n                                fxFlex.sm=\"20%\" maxlength=\"200\" [disabled]=\"isChinhSuaThongTinBenhNhan != true\"\n                                (modelChange)=\"soNhaDuongPhoChange($event)\" label=\"Số nhà/Đường phố\"\n                                [(model)]=\"tiepNhanBenhNhan.DiaChi\">\n                            </app-textbox>\n\n                            <app-textbox id=\"SoCMND\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số CMND\"\n                                [disabled]=\"isChinhSuaThongTinBenhNhan != true\"\n                                [(model)]=\"tiepNhanBenhNhan.SoChungMinhThu\" maxlength=\"12\" onlynumber=\"true\"\n                                [validationerror]=\"'SoChungMinhThu' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-textbox id=\"Email\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" maxlength=\"200\"\n                                [(model)]=\"tiepNhanBenhNhan.Email\" [disabled]=\"isChinhSuaThongTinBenhNhan != true\"\n                                [validationerror]=\"'Email' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-textbox id=\"NoiLamViec\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\"\n                                [disabled]=\"isChinhSuaThongTinBenhNhan != true\" label=\"Nơi làm việc\"\n                                [(model)]=\"tiepNhanBenhNhan.NoiLamViec\"\n                                [required]=\"tiepNhanBenhNhan.CoBHYT == true\"\n                                [validationerror]=\"'NoiLamViec' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-combobox bind=\"true\" id=\"DanToc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Dân tộc\" [reloadForGrid]=\"true\"\n                                url=\"TiepNhanBenhNhan/GetDanToc\" [(model)]=\"tiepNhanBenhNhan.DanTocId\">\n                            </app-combobox>\n\n                            <div *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\" style=\"width: 100%;\" fxLayout=\"row\"\n                                xFlex=\"100%\" fxFlex.sm=\"100%\">\n                                <div style=\"width: 100%;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                    fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                                    <!-- <div *ngIf=\"tiepNhanBenhNhan.BHYTDuocMienCungChiTra == true\n                                            && (tiepNhanBenhNhan.DuocChuyenVien == false || tiepNhanBenhNhan.DuocChuyenVien == null)\"\n                                        fxFlex=\"80%\" fxFlex.sm=\"80%\">\n\n                                    </div> -->\n\n                                    <app-checkbox [(model)]=\"tiepNhanBenhNhan.BHYTDuocMienCungChiTra\" fxFlex=\"20%\"\n                                        fxFlex.sm=\"20%\" id=\"CheckboxAB\" label=\"Có giấy miễn cùng chi trả\"\n                                        title=\"Phím tắt: Ctrl + F5\" kendoTooltip>\n                                    </app-checkbox>\n\n                                    <app-upload *ngIf=\"tiepNhanBenhNhan.BHYTDuocMienCungChiTra == true\" fxFlex=\"60%\"\n                                        fxFlex.sm=\"60%\" id=\"Upload\" label=\"Giấy miễn cùng chi trả đính kèm\"\n                                        [model]=\"tiepNhanBenhNhan.BHYTGiayMienCungChiTra\"\n                                        (uploadFileDone)=\"uploadFileMienCungChiTraDone($event)\">\n                                    </app-upload>\n\n                                    <app-datepicker *ngIf=\"tiepNhanBenhNhan.BHYTDuocMienCungChiTra == true\"\n                                        id=\"BHYTNgayDuocMienCungChiTra\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                        label=\"Ngày bắt đầu miễn cùng chi trả\"\n                                        [(model)]=\"tiepNhanBenhNhan.BHYTNgayDuocMienCungChiTra\">\n                                    </app-datepicker>\n\n                                </div>\n                            </div>\n\n                            <div [fxFlex]=\"tiepNhanBenhNhan.DuocChuyenVien == true ? '100%' : '15%'\" [fxFlex.sm]=\"tiepNhanBenhNhan.DuocChuyenVien == true ? '100%' : '15%'\" \n                                fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" kendoTooltip>\n                                <app-checkbox [(model)]=\"tiepNhanBenhNhan.DuocChuyenVien\" [fxFlex]=\"tiepNhanBenhNhan.DuocChuyenVien == true ? '20%' : '100%'\" [fxFlex.sm]=\"tiepNhanBenhNhan.DuocChuyenVien == true ? '20%' : '100%'\"\n                                    id=\"CheckboxA\" label=\"Có giấy chuyển viện\" title=\"Phím tắt: Ctrl + F3\">\n                                </app-checkbox>\n\n                                <app-datepicker *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"ThoiGianChuyenVien\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày chuyển tuyến\"\n                                    [(model)]=\"tiepNhanBenhNhan.ThoiGianChuyenVien\">\n                                </app-datepicker>\n\n                                <app-textbox *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"SoChuyenTuyen\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số tuyến chuyển\" maxlength=\"20\"\n                                    [(model)]=\"tiepNhanBenhNhan.SoChuyenTuyen\">\n                                </app-textbox>\n\n                                <app-combobox *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"NoiChuyenId\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tuyến chuyển\"\n                                    url=\"TiepNhanBenhNhan/GetTuyenChuyen\" bind=\"true\"\n                                    [(model)]=\"tiepNhanBenhNhan.NoiChuyenId\">\n                                </app-combobox>\n\n                                <app-textbox *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"LyDoChuyen\"\n                                    fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Lý do chuyển\" maxlength=\"200\"\n                                    [(model)]=\"tiepNhanBenhNhan.LyDoChuyen\">\n                                </app-textbox>\n\n                                <div *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" fxFlex=\"20%\" fxFlex.sm=\"20%\">\n\n                                </div>\n\n                                <app-upload *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" fxFlex=\"80%\" fxFlex.sm=\"80%\"\n                                    id=\"Upload\" label=\"Giấy chuyển viện đính kèm\"\n                                    [model]=\"tiepNhanBenhNhan.GiayChuyenVien\" (uploadFileDone)=\"uploadFileDone($event)\">\n                                </app-upload>\n                            </div>\n\n                            <div fxLayout=\"row wrap\"  [fxFlex]=\"tiepNhanBenhNhan.DuocUuDai == true ? '100%' : '15%'\" [fxFlex.sm]=\"tiepNhanBenhNhan.DuocUuDai == true ? '100%' : '15%'\" fxLayout.lt-sm=\"column\"\n                                fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                                <app-checkbox [(model)]=\"tiepNhanBenhNhan.DuocUuDai\" id=\"CheckboxUuDai\"\n                                    [disabled]=\"tiepNhanBenhNhan.DisableCoMienGiam\" label=\"Có miễn giảm\" [fxFlex]=\"tiepNhanBenhNhan.DuocUuDai == true ? '10%' : '100%'\"\n                                    [fxFlex.sm]=\"tiepNhanBenhNhan.DuocUuDai == true ? '10%' : '100%'\" title=\"Phím tắt: Ctrl + F6\" kendoTooltip></app-checkbox>\n\n                                <!-- <div style=\"margin-top: 3px;\" *ngIf=\"tiepNhanBenhNhan.DuocUuDai == true\" fxFlex=\"90%\" fxFlex.sm=\"90%\">\n                                    <label fxFlex=\"10%\" fxFlex.sm=\"10%\" style=\"margin-right: 10px\">Loại miễn giảm: </label>\n                                    <app-radio bind=\"true\" fxFlex=\"85%\" fxFlex.sm=\"85%\" id=\"LoaiMienGiam\" class=\"no-format-css\" [(model)]=\"tiepNhanBenhNhan.LoaiMienGiam\" [items]=\"[{Value:1,Text:'Đối tượng ưu đãi'},{Value:2,Text:'Voucher'}]\">\n                                    </app-radio>\n                                </div> -->\n\n                                <div *ngIf=\"tiepNhanBenhNhan.DuocUuDai == true\" fxFlex=\"100%\">\n                                    <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\" fxLayout.lt-sm=\"column\"\n                                        style=\"width: 100%;\">\n                                        <app-combobox [disabled]=\"tiepNhanBenhNhan.DisableDoiTuongUuDai\"\n                                            id=\"DoiTuongKhamChuaBenh\" fxFlex=\"30%\" fxFlex.sm=\"30%\"\n                                            label=\"Đối tượng ưu đãi\" bind=\"true\" url=\"TiepNhanBenhNhan/GetDoiTuongUuDai\"\n                                            [(model)]=\"tiepNhanBenhNhan.DoiTuongUuDaiId\" required=\"true\"\n                                            [validationerror]=\"'DoiTuongUuDaiId' | validationerror:validationErrors\">\n                                        </app-combobox>\n\n                                        <app-combobox [disabled]=\"tiepNhanBenhNhan.DisableDoiTuongUuDai\"\n                                            id=\"CongTyUuDai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" bind=\"true\"\n                                            url=\"TiepNhanBenhNhan/GetCongTyUuDai\"\n                                            [(model)]=\"tiepNhanBenhNhan.CongTyUuDaiId\" label=\"Công ty ưu đãi\"\n                                            required=\"true\"\n                                            [validationerror]=\"'CongTyUuDaiId' | validationerror:validationErrors\">\n                                        </app-combobox>\n\n                                        <div class=\"div-voucher\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                                            kendoTooltip fxFlex=\"50%\" fxFlex.sm=\"50%\">\n                                            <kendo-multiselect fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 100%;\"\n                                                #multiselect [data]=\"listVoucherItem\" [clearButton]=\"false\"\n                                                [(ngModel)]=\"value\" (open)=\"open()\" [filterable]=\"true\"\n                                                (removeTag)=\"removeTag($event)\" (blur)=\"blurVoucher()\"\n                                                (filterChange)=\"filterChange($event)\">\n                                            </kendo-multiselect>\n                                            <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab\n                                                type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip\n                                                title=\"Quét mã vạch thẻ\" title=\"Phím tắt: Ctrl + Q\">\n                                                <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                            </button>\n                                            <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\"\n                                                style=\"display: none;\"></app-barcode>\n                                        </div>\n                                        <app-validationerrorother fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"LstMaVoucher\"\n                                            [validationerror]=\"'LstMaVoucher' | validationerror:validationErrors\">\n                                        </app-validationerrorother>\n\n                                    </div>\n\n                                </div>\n\n                                <!-- <div *ngIf=\"tiepNhanBenhNhan.DuocUuDai == true\" fxFlex=\"100%\">\n                                    <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\" fxLayout.lt-sm=\"column\" style=\"width: 100%;\">\n                                        <div style=\"margin-top: -5px;\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" kendoTooltip style=\"width: 100%;\">\n                                        <kendo-multiselect fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 100%;\"  #multiselect \n                                            [data]=\"listVoucherItem\" [clearButton]=\"false\" [(ngModel)]=\"value\" (open)=\"open()\" [filterable]=\"true\" (removeTag)=\"removeTag($event)\" (blur)=\"blurVoucher()\"\n                                            (filterChange)=\"filterChange($event)\">\n                                        </kendo-multiselect>\n                                        <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab\n                                            type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\"\n                                            title=\"Phím tắt: Ctrl + Q\">\n                                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                        </button>\n                                        <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\"\n                                            style=\"display: none;\"></app-barcode>\n                                    </div>\n                                    <app-validationerrorother fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"LstMaVoucher\" [validationerror]=\"'LstMaVoucher' | validationerror:validationErrors\">\n                                    </app-validationerrorother> \n                                    </div>\n                                </div> -->\n                            </div>\n\n                            <div fxLayout=\"row wrap\" fxFlex=\"15%\" fxFlex.sm=\"15%\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                                <app-checkbox [(model)]=\"tiepNhanBenhNhan.LaCapCuu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"color-red\"\n                                    id=\"ckbCapCuu\" label=\"Cấp cứu\">\n                                </app-checkbox>\n                            </div>\n                        </div>\n\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <h3 style=\"margin-top:10px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Bảo\n                                Hiểm Tư Nhân &nbsp; <app-checkbox id=\"CheckboxIsHaveBHTN\"\n                                    [(model)]=\"tiepNhanBenhNhan.CoBHTN\" label=\"Có\" title=\"Phím tắt: Ctrl + F7\"\n                                    kendoTooltip></app-checkbox>\n                            </h3>\n\n                            <div *ngIf=\"tiepNhanBenhNhan.CoBHTN == true\" fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\"\n                                fxLayout.lt-sm=\"column\" style=\"width: 100%;\">\n                                <app-combobox id=\"CongTyBaoHiemTuNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    [(model)]=\"themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId\" label=\"Công ty\"\n                                    url=\"TiepNhanBenhNhan/GetCongTyBaoHiemTuNhan\" bind=\"true\"\n                                    (modelChange)=\"congTyBaoHiemChange($event)\" required=\"true\" [required]=\"true\"\n                                    [validationerror]=\"'CongTyBaoHiemTuNhanId' | validationerror:validationErrors\">\n                                </app-combobox>\n\n                                <app-textbox id=\"MaSoThe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số thẻ\"\n                                    [(model)]=\"themBaoHiemTuNhanModel.MaSoThe\" maxlength=\"30\">\n                                </app-textbox>\n\n                                <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Từ ngày\"\n                                    [(model)]=\"themBaoHiemTuNhanModel.NgayHieuLuc\">\n                                </app-datepicker>\n\n                                <app-datepicker id=\"NgayHetHan\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Đến ngày\"\n                                    [(model)]=\"themBaoHiemTuNhanModel.NgayHetHan\"\n                                    [validationerror]=\"'NgayHetHan' | validationerror:validationErrors\">\n                                </app-datepicker>\n\n                                <app-textboxmask id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Điện thoại\"\n                                    readonly=\"true\" maxlength=\"100\" [(model)]=\"themBaoHiemTuNhanModel.SoDienThoai\">\n                                </app-textboxmask>\n\n                                <app-textbox id=\"DiaChi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Địa chỉ\" readonly=\"true\"\n                                    maxlength=\"200\" [(model)]=\"themBaoHiemTuNhanModel.DiaChi\">\n                                </app-textbox>\n\n                                <div style=\"margin-bottom: 20px;\" fxLayoutAlign=\"end right\" fxFlex=\"100%\"\n                                    fxFlex.sm=\"100%\" class=\"mr-4\">\n                                    <button (click)=\"huyBHTN()\" mat-button class=\"mr-1 px-6 py-0\"><i\n                                            class=\"ft-arrow-left \"></i>Hủy</button>\n                                    <button *ngIf=\"isUpdateGrid == false\" (click)=\"ThemBHTN()\" color=\"primary\"\n                                        mat-raised-button class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Thêm</button>\n                                    <button *ngIf=\"isUpdateGrid == true\" (click)=\"SuaBHTN()\" color=\"primary\"\n                                        mat-raised-button class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Cập\n                                        nhật</button>\n                                </div>\n\n                                <app-grid [gridDataSource]=\"gridDataSourceBHTN\" [gridColumns]=\"gridColumns\" #gridBHTN\n                                    [documentType]=\"documentType\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                    [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"5\" [autoHeight]=\"true\"\n                                    [pageable]=\"false\">\n                                </app-grid>\n\n\n                            </div>\n                        </div>\n\n                        <ng-template #actionTemplate let-dataItem>\n                            <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                                [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                            </button>\n                            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                                <ng-template let-customer=\"customer\" matMenuContent>\n                                    <button (click)=\"updateGridBHTN(dataItem)\" mat-menu-item>\n                                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                                        <span>Sửa</span>\n                                    </button>\n                                    <button (click)=\"removeGridBHTN(dataItem.CongTyBaoHiemTuNhanId)\" mat-menu-item>\n                                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                        <span>Xóa</span>\n                                    </button>\n                                </ng-template>\n                            </mat-menu>\n                        </ng-template>\n                        \n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" *ngIf=\"showbuttonLuuVaInPhieuXetNghiem == true\">\n                            <h3 style=\"margin-top:10px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin SARS-CoV\n                            </h3>\n                            <div fxFlex=\"100%\">\n                                <app-textarea fxFlex=\"45%\" id=\"BieuHienLamSang\" [(model)]=\"tiepNhanBenhNhan.BieuHienLamSang\" label=\"Biểu hiện lâm sàng\"\n                                    minHeight=\"20\" style=\"margin-right: 5px;\">\n                                </app-textarea>\n                                <app-textarea id=\"DichTeSarsCoV2\" [(model)]=\"tiepNhanBenhNhan.DichTeSarsCoV2\" fxFlex=\"45%\" label=\"Dịch tễ SARS-CoV 2\"\n                                    minHeight=\"20\">\n                                </app-textarea>\n                            </div>\n                        </div>\n\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <h3 style=\"margin-top:20px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Tiếp\n                                Nhận\n                            </h3>\n\n                            <!-- <app-radio id=\"LoaiTiepNhan\" label=\"Loại tiếp nhận\" fxFlex=\"40%\" fxFlex.sm=\"40%\"\n                                [(model)]=\"tiepNhanBenhNhan.LoaiYeuCauTiepNhan\"\n                                (modelChange)=\"loaiTiepNhanChange($event)\"\n                                [items]=\"[{Value:1,Text:'Khám bệnh'},{Value:2,Text:'Thực hiện dịch vụ kỹ thuật'},{Value:3,Text:'Thực hiện dịch vụ khác'}]\">\n                            </app-radio> -->\n\n                            <app-datetimepicker id=\"TiepNhanLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tiếp nhận lúc\"\n                                [disabled]=\"true\" [(model)]=\"tiepNhanBenhNhan.ThoiGianTiepNhan\"\n                                [validationerror]=\"'ThoiGianTiepNhan' | validationerror:validationErrors\">\n                            </app-datetimepicker>\n\n                            <app-combobox bind=\"true\" id=\"DoiTuongKhamChuaBenh\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                label=\"Đối tượng khám chữa bệnh ưu tiên\"\n                                url=\"TiepNhanBenhNhan/GetDoiTuongKhamChuaBenhUuTien\"\n                                [(model)]=\"tiepNhanBenhNhan.DoiTuongUuTienKhamChuaBenhId\">\n                            </app-combobox>\n\n                            <!-- <app-combobox id=\"LyDoTiepNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Lý do tiếp nhận\" bind=\"true\"\n                                [(model)]=\"tiepNhanBenhNhan.LyDoTiepNhan\" url=\"TiepNhanBenhNhan/GetLyDoTiepNhan\" required=\"true\"\n                                [validationerror]=\"'LyDoTiepNhan' | validationerror:validationErrors\">\n                            </app-combobox> -->\n\n                            <app-combobox-tree id=\"LyDoTiepNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Lý do tiếp nhận\"\n                                url=\"TiepNhanBenhNhan/GetLyDoTiepNhanTreeView\"\n                                [modelText]=\"tiepNhanBenhNhan.LyDoTiepNhanText\"\n                                [(model)]=\"tiepNhanBenhNhan.LyDoTiepNhanId\" bind=\"true\" required=\"true\"\n                                [validationerror]=\"'LyDoTiepNhanId' | validationerror:validationErrors\">\n                            </app-combobox-tree>\n\n                            <app-combobox id=\"HinhThucDen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hình thức đến\"\n                                bind=\"true\" (selectionChange)=\"OnChangeHinhThucDen($event)\"\n                                [(model)]=\"tiepNhanBenhNhan.HinhThucDenId\" url=\"TiepNhanBenhNhan/GetHinhThucDen\"\n                                (keyup)=\"onKeyHinhThucDen($event)\"\n                                [validationerror]=\"'HinhThucDenId' | validationerror:validationErrors\">\n                            </app-combobox>\n\n                            <app-combobox id=\"NoiGioiThieu\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nơi giới thiệu\"\n                                bind=\"true\" [(model)]=\"tiepNhanBenhNhan.NoiGioiThieuId\" \n                                *ngIf=\"tiepNhanBenhNhan.HinhThucDenId == 2\" url=\"TiepNhanBenhNhan/GetNoiGioiThieu\"\n                                class=\"item-no-padding\" [template]=\"noiGioiThieuTemplate\"\n                                [templateHeader]=\"noiGioiThieuTemplateHeader\"\n                                [validationerror]=\"'NoiGioiThieuId' | validationerror:validationErrors\">\n                                <ng-template #noiGioiThieuTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"60%\">Tên cộng tác viên</th>\n                                            <th>Đơn vị</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #noiGioiThieuTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"60%\">{{dataItem.Ten}}</td>\n                                            <td>{{dataItem.Ma}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <!-- <app-combobox id=\"TrieuChungTiepNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Triệu chứng khám\"\n                                                            [(model)]=\"tiepNhanBenhNhan.TrieuChungTiepNhan\" url=\"TiepNhanBenhNhan/GetLyDoKhamBenh\"\n\n                                                            [validationerror]=\"'TrieuChungTiepNhan' | validationerror:validationErrors\">\n                                                        </app-combobox> -->\n                            <app-autocomplete id=\"TrieuChungTiepNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"250\"\n                                [(model)]=\"tiepNhanBenhNhan.TrieuChungTiepNhan\" [dataList]=\"TrieuChungTiepNhanResource\"\n                                label=\"Lý do khám bệnh\"\n                                [validationerror]=\"'TrieuChungTiepNhan' | validationerror:validationErrors\">\n                            </app-autocomplete>\n\n                            <kendo-tabstrip #tabStrip fxFlex=\"100%\" class=\"content-has-border\"\n                                (tabSelect)=\"onTabSelect($event)\" (keyup)=\"tabscripChange($event)\">\n                                <kendo-tabstrip-tab [selected]=\"true\">\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F8\">\n                                            Chỉ định dịch vụ\n                                        </div>\n                                    </ng-template>\n\n                                    <ng-template kendoTabContent>\n\n\n\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                            fxLayoutGap.lt-sm=\"0\" class=\"m-0\">\n                                            <!-- <app-radio fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"LoaiDichVuKhac\"\n                                                name=\"LoaiDichVuKhac\" class=\"no-format-css\"\n                                                [(model)]=\"themChiDinhDichVuModel.LoaiDichVuKhac\"\n                                                (modelChange)=\"LoaiDichVuKhacChange($event)\"\n                                                [items]=\"[{Value:1,Text:'Gói không có chiết khấu'},{Value:2,Text:'Gói có chiết khấu'}\n                                                                                            ,{Value:3,Text:'Dịch vụ khám bệnh'},{Value:4,Text:'Dịch vụ kỹ thuật'}\n                                                                                            ,{Value:5,Text:'Dịch vụ giường'}]\">\n                                            </app-radio> -->\n\n\n                                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                                fxLayoutGap.lt-sm=\"0\" class=\"m-0 pb-0\" style=\"width: 100%;\">\n                                                <label style=\"margin-top: 36px;\" fxFlex=\"7%\" fxFlex.sm=\"7%\">\n                                                    Dịch vụ:\n                                                </label>\n                                                <app-combobox #dichVuCombobox hierarchyKeyToSend=\"khoaKham\" id=\"DichVu\"\n                                                    fxFlex=\"23%\" fxFlex.sm=\"23%\" label=\"Mã dịch vụ\"\n                                                    url=\"TiepNhanBenhNhan/GetDichVu\"\n                                                    [(model)]=\"themChiDinhDichVuModel.MaDichVuId\" [required]=\"true\"\n                                                    (selectionChange)=\"MaDichVuSelectionChange($event)\"\n                                                    (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\"\n                                                    [validationerror]=\"'MaDichVuId' | validationerror:validationErrors\"\n                                                    [template]=\"dichVuTemplate\" [templateHeader]=\"dichVuTemplateHeader\"\n                                                    class=\"item-no-padding\"\n                                                    [popupSettings]=\"{width: 900,popupClass:'item-no-padding'}\">\n                                                    <ng-template #dichVuTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"12%\">Mã</th>\n                                                                <th width=\"40%\">Tên</th>\n                                                                <th width=\"38%\">Tên TT43</th>\n                                                                <th width=\"10%\">Loại</th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #dichVuTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <td width=\"12%\">{{dataItem.Ma}}</td>\n                                                                <td width=\"40%\">{{dataItem.Ten}}</td>\n                                                                <td width=\"38%\">{{dataItem.TenTt43}}</td>\n                                                                <td width=\"10%\">{{dataItem.Loai}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                </app-combobox>\n\n                                                <!-- url=\"TiepNhanBenhNhan/GetLoaiGiaKhamBenh\" -->\n                                                <app-combobox id=\"LoaiGia\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Loại giá\"\n                                                    (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\"\n                                                    (modelChange)=\"LoaiGiaChange($event)\" bind=\"true\"\n                                                    url=\"KhamBenh/LoaiGiaHieuLucTheoDichVuKham\" *ngIf=\"loaiTiepNhan == 1\"\n                                                    [(model)]=\"themChiDinhDichVuModel.LoaiGiaId\" [required]=\"true\"\n                                                    popupSettings=\"null\"\n                                                    hierarchyKeyToListen=\"khoaKham\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                                                    [validationerror]=\"'LoaiGiaId' | validationerror:validationErrors\">\n                                                </app-combobox>\n\n                                                <app-textboxnumeric id=\"SoLuong\" fxFlex=\"5%\" fxFlex.sm=\"5%\" label=\"SL\"\n                                                    (keyup)=\"onKeyMaDichVu($event)\"\n                                                    [(model)]=\"themChiDinhDichVuModel.SoLuong\"\n                                                    (modelChange)=\"SoLuongChange($event)\" max=\"10000\" [required]=\"true\"\n                                                    [disabled]=\"loaiTiepNhan == 1 || loaiTiepNhan == 3\"\n                                                    [validationerror]=\"'SoLuong' | validationerror:validationErrors\">\n                                                </app-textboxnumeric>\n                                                <!-- <app-textbox id=\"DonGia\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                                                    (modelChange)=\"DonGiaChange($event)\" label=\"Đơn giá\"\n                                                    onlynumber=\"true\" [(model)]=\"themChiDinhDichVuModel.DonGia\"\n                                                    [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n                                                </app-textbox>\n                                                <app-textbox id=\"ThanhTien\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                                                    label=\"Thành tiền\" onlynumber=\"true\"\n                                                    [validationerror]=\"'DiaChi' | validationerror:validationErrors\"\n                                                    [(model)]=\"themChiDinhDichVuModel.ThanhTien\">\n                                                </app-textbox> -->\n\n                                                <app-textboxnumeric format=\"n2\" decimals=\"2\" id=\"DonGia\" fxFlex=\"10%\"\n                                                    fxFlex.sm=\"10%\" min=\"0\" [(model)]=\"themChiDinhDichVuModel.DonGia\"\n                                                    disabled=\"true\" (modelChange)=\"DonGiaChange($event)\" label=\"Đơn giá\"\n                                                    [validationerror]=\"'DonGia' | validationerror:validationErrors\">\n                                                </app-textboxnumeric>\n\n                                                <app-textboxnumeric id=\"ThanhTien\" fxFlex=\"10%\" fxFlex.sm=\"10%\" min=\"0\"\n                                                    [(model)]=\"themChiDinhDichVuModel.ThanhTien\" label=\"Thành tiền\"\n                                                    disabled=\"true\"\n                                                    [validationerror]=\"'ThanhTien' | validationerror:validationErrors\">\n                                                </app-textboxnumeric>\n\n                                                <app-combobox hierarchyKeyToListen=\"khoaKham\" id=\"NoiThucHien1a\"\n                                                    *ngIf=\"loaiTiepNhan == 1\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                    label=\"Nơi thực hiện\" autoSelectFirstItem=\"true\" idWhere=\"1\"\n                                                    url=\"TiepNhanBenhNhan/GetPhongKham\"\n                                                    [(model)]=\"themChiDinhDichVuModel.NoiThucHienId\"\n                                                    (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\" [required]=\"true\"\n                                                    [validationerror]=\"'NoiThucHienId' | validationerror:validationErrors\"\n                                                    [template]=\"phongKhamTemplate\"\n                                                    [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding\"\n                                                    [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n\n                                                    <ng-template #phongKhamTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"40%\">Phòng</th>\n                                                                <th width=\"40%\">Bác sĩ</th>\n                                                                <th width=\"10%\" kendoTooltip\n                                                                    title=\"SL người bệnh được đăng ký vào phòng trong ngày hôm nay ở trạng thái đang khám\">\n                                                                    Đ.khám</th>\n                                                                <th width=\"10%\" kendoTooltip\n                                                                    title=\"Tổng SL người bệnh được đăng ký vào phòng trong ngày hôm nay\">\n                                                                    Tổng</th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #phongKhamTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr [ngStyle]=\"{'color': dataItem.IsWarning==true?'orange':'black'}\"\n                                                                kendoTooltip\n                                                                title=\"{{dataItem.IsWarning==true?'Bác sĩ này đã khám nhiều hơn ' + dataItem.TongSoKhamGioiHan + ' người bệnh':''}}\">\n                                                                <td width=\"40%\">{{dataItem.TenPhong}}</td>\n                                                                <td width=\"40%\">{{dataItem.TenBacSi}}</td>\n                                                                <td width=\"10%\">{{dataItem.DangKham}}</td>\n                                                                <td width=\"10%\">{{dataItem.Tong}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n\n                                                </app-combobox>\n\n                                                <app-combobox hierarchyKeyToListen=\"khoaKham\" id=\"NoiThucHien2a\"\n                                                    *ngIf=\"loaiTiepNhan == 2\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                    label=\"Nơi thực hiện\" autoSelectFirstItem=\"true\" idWhere=\"1\"\n                                                    url=\"TiepNhanBenhNhan/GetPhongKhamKyThuat\"\n                                                    [(model)]=\"themChiDinhDichVuModel.NoiThucHienId\"\n                                                    (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\" [required]=\"true\"\n                                                    [validationerror]=\"'NoiThucHienId' | validationerror:validationErrors\"\n                                                    [template]=\"phongKhamTemplate\"\n                                                    [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding\"\n                                                    [popupSettings]=\"{width: 500,popupClass:'item-no-padding'}\">\n\n                                                    <ng-template #phongKhamTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"20%\">Mã</th>\n                                                                <th width=\"60%\">Phòng</th>\n                                                                <th>SL ĐTH</th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #phongKhamTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                                <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                                <td>{{dataItem.Tong}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n\n                                                </app-combobox>\n\n                                                <app-combobox hierarchyKeyToListen=\"khoaKham\" id=\"NoiThucHien3a\"\n                                                    *ngIf=\"loaiTiepNhan == 3\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                    label=\"Nơi thực hiện\" autoSelectFirstItem=\"true\" idWhere=\"1\"\n                                                    url=\"TiepNhanBenhNhan/GetPhongKhamDichVuGiuong\"\n                                                    [(model)]=\"themChiDinhDichVuModel.NoiThucHienId\"\n                                                    (keyup)=\"onKeyMaDichVu($event)\"\n                                                    (openCombobox)=\"openCombobox($event)\" [required]=\"true\"\n                                                    [validationerror]=\"'NoiThucHienId' | validationerror:validationErrors\"\n                                                    [template]=\"phongKhamTemplate\"\n                                                    [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding\"\n                                                    [popupSettings]=\"{width: 500,popupClass:'item-no-padding'}\">\n\n                                                    <ng-template #phongKhamTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"20%\">Mã</th>\n                                                                <th width=\"60%\">Phòng</th>\n                                                                <th>SL ĐTH</th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #phongKhamTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                                <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                                <td>{{dataItem.Tong}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n\n                                                </app-combobox>\n\n\n\n                                                <!-- <app-checkbox [(model)]=\"themChiDinhDichVuModel.DuocHuongBHYT\" id=\"CheckboxDuocHuongBHYT\" label=\"Được hưởng BHYT\" *ngIf=\"loaiTiepNhan == 1\" [disabled]=\"duocHuongBHYT != true || !enableDuocHuongBHYT\" fxFlex=\"10%\" fxFlex.sm=\"10%\" class=\"mt-2\">\n                                                </app-checkbox> -->\n                                                <div fxFlex=\"5%\" fxFlex.sm=\"5%\">\n                                                    <button class=\"mt-5\" (click)=\"themChiDinhDichVuNew()\" title=\"Thêm\"\n                                                        color=\"primary\" mat-raised-button>Thêm\n                                                    </button>\n                                                </div>\n\n                                            </div>\n\n                                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                                fxLayoutGap.lt-sm=\"0\" class=\"m-0 pb-0\" style=\"width: 100%;\">\n\n                                                <div fxFlex=\"90%\" fxFlex.sm=\"90%\">\n\n                                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                                        fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" class=\"m-0 pb-0\"\n                                                        style=\"width: 100%;\">\n\n                                                        <app-checkbox [(model)]=\"suDungGoiMarketingModelTemp\"\n                                                            id=\"suDungGoiMarketingModelTemp\"\n                                                            (modelChange)=\"suDungGoiMarketingChange($event)\"\n                                                            [disabled]=\"true\"\n                                                            label=\"Sử dụng gói marketing\"></app-checkbox>\n                                                            <!-- cập nhật BVHD-3246: chỉ hiện gói dịch vụ đã đăng ký -->\n                                                            <!-- [disabled]=\"disabledCheckboxMarketing\" -->\n\n                                                        <div class=\"div-danh-sach-goi\"\n                                                            *ngFor=\"let item of danhSachGoiDaChonTrongYCTN\">\n                                                            <a class=\"danh-sach-goi\"\n                                                                (click)=\"showPopupMarketingWithHyperlink(item)\">{{item.TenChuongTrinh}}\n                                                            </a>\n                                                                <!-- - {{item.TenGoiDichVu}} -->\n\n                                                            <button\n                                                                *ngIf=\"item.DaThanhToan != true && item.IsFromMarketing != true\"\n                                                                style=\"margin-left: 2px;\" (click)=\"removeGoi(item)\"\n                                                                color=\"primary\" type=\"button\">\n                                                                <span class=\"k-icon k-i-close\"></span>\n                                                            </button>\n\n                                                        </div>\n\n                                                        <!-- cập nhật BVHD-3246: chỉ hiện gói dịch vụ đã đăng ký -->\n                                                        <!-- <div *ngIf=\"tiepNhanBenhNhan.BenhNhanId != 0 && tiepNhanBenhNhan.BenhNhanId != undefined\n                                                && danhSachGoiDaChonTrongYCTN.length > 0\">\n                                                            <button (click)=\"openPopupGoiDichVu()\"\n                                                                class=\"mr-6 button-them-goi\" color=\"primary\"\n                                                                fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\"\n                                                                type=\"button\">\n                                                                <mat-icon class=\"mat-icon-them-goi\" [icIcon]=\"icAdd\">\n                                                                </mat-icon>\n                                                            </button>\n                                                        </div> -->\n                                                    </div>\n                                                </div>\n\n                                                <div fxFlex=\"auto\">\n                                                    <!-- cacDichVuKM -->\n                                                    <a *ngIf=\"coYeuCauGoiDichVu\" fxFlex=\"auto\" (click)=\"xemGoiDichVuKhuyenMai()\">\n                                                        <span\n                                                            style=\"color:blue; text-decoration: underline; font-weight: bold; bottom: 20px;\">\n                                                            Dịch vụ khuyến mại\n                                                        </span>\n                                                    </a>\n                                                </div>\n\n                                                <a (click)=\"xemNhomDichVuThuongDung()\" \n                                                    style=\"color:green; text-decoration: underline; font-weight: bold;\">\n                                                    Nhóm dịch vụ thường dùng\n                                                </a>\n                                            </div>\n\n                                            <!-- Dong dich vu giuong va goi kham vao 21/8/2020 -->\n\n                                            <!-- <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" class=\"m-0 pb-0\" style=\"width: 100%;\">\n                                                <label style=\"margin-top: 36px;\" fxFlex=\"7%\" fxFlex.sm=\"7%\">\n                                                    Gói dịch vụ:\n                                                </label>\n                                                <app-combobox id=\"MaDichVuGoiId12\" fxFlex=\"33%\" fxFlex.sm=\"33%\" label=\"Gói khám\" url=\"TiepNhanBenhNhan/GetGoiKhamTongHop\" [(model)]=\"themChiDinhGoiModel.MaDichVuGoiId\" [required]=\"true\" [template]=\"goiTemplate\" (selectionChange)=\"MaDichVuGoiSelectionChange($event)\"\n                                                    [templateHeader]=\"goiTemplateHeader\" class=\"item-no-padding\" [validationerror]=\"'MaDichVuGoiId' | validationerror:validationErrors\">\n                                                    <ng-template #goiTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"70%\">Tên gói</th>\n                                                                <th>Chiết khấu </th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #goiTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <td width=\"70%\">{{dataItem.Ten}}</td>\n                                                                <td>{{dataItem.ChietKhau}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                </app-combobox>\n\n                                                <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                                                    <button class=\"mt-5\" (click)=\"themChiDinhDichVuGoiNew()\" title=\"Thêm\" color=\"primary\" mat-raised-button>Thêm\n                                                    </button>\n                                                </div>\n\n                                            </div> -->\n\n\n                                            <!-- <div *ngIf=\"themChiDinhDichVuModel.LoaiDichVuKhac == 7\" fxLayout=\"row wrap\"\n                                                fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                                                class=\"m-0\" style=\"width: 100%;\">\n                                                <app-combobox id=\"MaDichVuId\" fxFlex=\"40%\" fxFlex.sm=\"40%\"\n                                                    label=\"Gói khám\" url=\"TiepNhanBenhNhan/GetGoiKham\"\n                                                    [(model)]=\"themChiDinhDichVuModel.MaDichVuId\" [required]=\"true\"\n                                                    [validationerror]=\"'MaDichVuId' | validationerror:validationErrors\">\n                                                </app-combobox>\n\n                                                <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                                                    <button class=\"mt-5\" (click)=\"themChiDinhDichVuKhacKhamBenh(1)\"\n                                                        title=\"Thêm\" color=\"primary\" mat-raised-button>Thêm\n                                                    </button>\n                                                </div>\n\n                                            </div> -->\n\n                                            <!-- <div *ngIf=\"themChiDinhDichVuModel.LoaiDichVuKhac == 2\" fxLayout=\"row wrap\"\n                                                fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                                                class=\"m-0\" style=\"width: 100%;\">\n                                                <app-combobox id=\"MaDichVuId\" fxFlex=\"40%\" fxFlex.sm=\"40%\"\n                                                    label=\"Gói khám\" url=\"TiepNhanBenhNhan/GetGoiKhamCoChietKhau\"\n                                                    [(model)]=\"themChiDinhDichVuModel.MaDichVuId\" [required]=\"true\"\n                                                    [validationerror]=\"'MaDichVuId' | validationerror:validationErrors\">\n                                                </app-combobox>\n\n                                                <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                                                    <button class=\"mt-5\" (click)=\"themChiDinhDichVuKhacKhamBenh(2)\"\n                                                        title=\"Thêm\" color=\"primary\" mat-raised-button>Thêm\n                                                    </button>\n                                                </div>\n\n                                            </div> -->\n\n\n\n                                            <div\n                                                *ngIf=\"gridDataKhacCoChietKhauDisplay != null && gridDataKhacCoChietKhauDisplay.length != 0\">\n                                                <div class=\"header-grid\">GÓI CÓ CHIẾT KHẤU</div>\n\n                                                <div  fxFlex=\"100%\"\n                                                    *ngIf=\"gridDataKhacCoChietKhauArray != undefined && gridDataKhacCoChietKhauArray != null\">\n\n                                                    <div *ngFor=\"let item of gridDataKhacCoChietKhauArray; let i = index\"\n                                                        fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\"\n                                                        fxLayoutGap.lt-sm=\"0\">\n                                                        <div fxFlex=\"100%\" style=\"background: #ebeced;\">\n                                                            <span class=\"header-span-grid\">\n                                                                {{item.data[0].items[0].TenGoiChietKhau}}\n                                                            </span>\n                                                            <span style=\"float:right;\">\n                                                                <button (click)=\"removeGridKhacCoChietKhau(item)\"\n                                                                    mat-icon-button>\n                                                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                                                </button>\n                                                            </span>\n                                                        </div>\n                                                        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" #gridCoChietKhau\n                                                            masterName=\"{{item.data[0].items[0].GoiCoChietKhauId}}\"\n                                                            [gridColumns]=\"gridCoChietKhauColumns\"\n                                                            [gridDataSource]=\"item\" [documentType]=\"documentType\"\n                                                            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                                                            [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                                            [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n                                                            [groups]=\"groupChietKhau\">\n                                                        </app-grid>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div  fxFlex=\"100%\"\n                                                *ngIf=\"gridDataKhacDisplay != null && gridDataKhacDisplay.length != 0 && gridDataKhacDisplay.total != 0\">\n                                                <div *ngIf=\"gridDataKhacCoChietKhauDisplay != null && gridDataKhacCoChietKhauDisplay.length != 0\"\n                                                    class=\"header-grid\">DỊCH VỤ KHÁC</div>\n                                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\"\n                                                    fxLayoutGap.lt-sm=\"0\">\n                                                    <app-grid #gridInChiDinh fxFlex=\"100%\" fxFlex.sm=\"100%\" #gridKhongChietKhau\n                                                        [gridColumns]=\"gridKhongChietKhauColumns\" masterName=\"goiKhac\"\n                                                        [removeGroupFooterIfIsOnlyOne]=\"true\"\n                                                        [gridDataSource]=\"gridDataKhacDisplay\"\n                                                        [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n                                                        [pageable]=\"false\" [groups]=\"groupKhongChietKhau\">\n                                                    </app-grid>\n                                                </div>\n\n                                            </div>\n                                            <div fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                                                *ngIf=\"this.tiepNhanBenhNhan.YeuCauKhacGrid != null\n                                                && this.tiepNhanBenhNhan.YeuCauKhacGrid != undefined\n                                                && this.tiepNhanBenhNhan.YeuCauKhacGrid.length > 0\n                                                && gridDataKhacCoChietKhauDisplay != null && gridDataKhacCoChietKhauDisplay.length != 0\">\n                                                <div class=\"styleTinhTong\">\n                                                    <ul class=\"inline\">\n                                                        <li>Tổng cộng: <strong\n                                                                style=\"color: blue;\">{{totalKhac('TongThanhTienGoi', 1)\n                                                                | number:'0.2-2':'vi-VN'}}</strong>\n                                                        </li>\n                                                        <li>Tổng tiền NB thanh toán: <strong\n                                                                style=\"color:red;\">{{totalKhac('TongThanhTienBNTra', 1)\n                                                                | number:'0.2-2':'vi-VN'}}</strong>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n\n                                        </div>\n\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab>\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F9\">\n                                            Tài liệu đính kèm\n                                        </div>\n                                    </ng-template>\n                                    <ng-template kendoTabContent>\n                                        <!-- grid -->\n                                        <app-grid [gridColumns]=\"gridTaiLieuDinhKemColumns\"\n                                            [gridDataSource]=\"gridDataTaiLieuDinhKem\" [documentType]=\"documentType\"\n                                            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                                            [headerTemplate]=\"headerTaiLieuTemplate\" [useHeaderDefault]=\"false\"\n                                            #gridTaiLieuDinhKem [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                            [autoHeight]=\"true\">\n                                        </app-grid>\n\n\n                                        <ng-template #headerTaiLieuTemplate>\n                                            <div style=\"padding: 16px;border-bottom: 1px solid #ccc;\">\n                                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                                    fxLayoutGap.lt-sm=\"0\">\n\n                                                    <app-dropdownlist id=\"LoaiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                        label=\"Loại\" url=\"TiepNhanBenhNhan/GetLoaiTaiLieuDinhKem\"\n                                                        [(model)]=\"themTaiLieu.LoaiId\" required=\"true\"\n                                                        [validationerror]=\"'LoaiId' | validationerror:validationErrors\">\n                                                    </app-dropdownlist>\n\n                                                    <app-upload fxFlex=\"50%\" fxFlex.sm=\"50%\" id=\"TaiLieu\"\n                                                        label=\"Tài liệu\" [model]=\"themTaiLieu.TaiLieu\"\n                                                        (uploadFileDone)=\"uploadTaiLieuDone($event)\" required=\"true\"\n                                                        [validationerror]=\"'TaiLieu' | validationerror:validationErrors\">\n                                                    </app-upload>\n\n                                                    <app-textbox id=\"MoTa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"100\"\n                                                        label=\"Mô tả\" [(model)]=\"themTaiLieu.MoTa\">\n                                                    </app-textbox>\n\n                                                    <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                                                        <button class=\"mt-5\" (click)=\"themTaiLieuButton()\" type=\"button\"\n                                                            color=\"primary\" mat-raised-button>Thêm</button>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n                                        </ng-template>\n\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab>\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F10\">\n                                            Người giám hộ\n                                        </div>\n                                    </ng-template>\n                                    <ng-template kendoTabContent>\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                            fxLayoutGap.lt-sm=\"0\" class=\"m-0\">\n\n                                            <app-textbox id=\"NguoiLienHeHoTen\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                maxlength=\"100\" label=\"Họ và tên\" [upperCase]=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeHoTen\"\n                                                [validationerror]=\"'NguoiLienHeHoTen' | validationerror:validationErrors\">\n                                            </app-textbox>\n                                            <app-combobox id=\"NguoiLienHeQuanHeNhanThan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Quan hệ\" url=\"TiepNhanBenhNhan/GetQuanHe\" bind=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHeNhanThanId\"\n                                                [validationerror]=\"'NguoiLienHeQuanHeNhanThanId' | validationerror:validationErrors\">\n                                            </app-combobox>\n\n                                            <app-textboxmask id=\"NguoiLienHeSoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Số điện thoại\" maxlength=\"10\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeSoDienThoai\" mask=\"000 000 0000\"\n                                                [validationerror]=\"'NguoiLienHeSoDienThoai' | validationerror:validationErrors\">\n                                            </app-textboxmask>\n                                            <app-textbox id=\"NguoiLienHeEmail\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Email\" maxlength=\"200\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeEmail\"\n                                                [validationerror]=\"'NguoiLienHeEmail' | validationerror:validationErrors\">\n                                            </app-textbox>\n\n                                            <app-combobox id=\"NguoiLienHeTinhThanhId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                (modelChange)=\"TinhThanhPhoNguoiLienHeChange($event)\" bind=\"true\"\n                                                label=\"Tỉnh/Thành Phố\" url=\"TiepNhanBenhNhan/GetTinhThanh\"\n                                                hierarchyKeyToSend=\"tinhThanhLienHe\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeTinhThanhId\"\n                                                class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n                                                [templateHeader]=\"tinhThanhTemplateHeader\" broadcastAfterLoaded=\"true\">\n                                                <ng-template #tinhThanhTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #tinhThanhTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                            <td>{{dataItem.Ten}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n\n                                            <app-combobox id=\"NguoiLienHeQuanHuyenId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Quận/Huyện\" (modelChange)=\"QuanHuyenNguoiLienHeChange($event)\"\n                                                url=\"TiepNhanBenhNhan/GetQuanHuyen\"\n                                                hierarchyKeyToListen=\"tinhThanhLienHe\"\n                                                hierarchyKeyToSend=\"quanHuyenLienHe\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHuyenId\"\n                                                class=\"item-no-padding\" [template]=\"quanHuyenTemplate\"\n                                                [templateHeader]=\"quanHuyenTemplateHeader\"\n                                                [queryInfo]=\"queryInfoNguoiLienHeQuanHuyen\" broadcastAfterLoaded=\"true\">\n                                                <ng-template #quanHuyenTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #quanHuyenTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                            <td>{{dataItem.Ten}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n\n                                            <app-combobox id=\"NguoiLienHePhuongXaId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Phường/Xã\" url=\"TiepNhanBenhNhan/GetPhuongXa\"\n                                                hierarchyKeyToListen=\"quanHuyenLienHe\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHePhuongXaId\"\n                                                class=\"item-no-padding\" [template]=\"phuongXaTemplate\"\n                                                [templateHeader]=\"phuongXaTemplateHeader\"\n                                                [queryInfo]=\"queryInfoNguoiLienHePhuongXa\" broadcastAfterLoaded=\"true\">\n                                                <ng-template #phuongXaTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Tên</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #phuongXaTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                            <td>{{dataItem.Ten}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                            </app-combobox>\n\n                                            <app-textbox id=\"SoNhaDuongPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" class=\"text-transform-capitalize\"\n                                                label=\"Số nhà/Đường phố\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeDiaChi\">\n                                            </app-textbox>\n                                        </div>\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab>\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F11\">\n                                            Lịch Hẹn\n                                        </div>\n                                    </ng-template>\n                                    <ng-template kendoTabContent>\n                                        <app-tai-kham [(BenhNhan)]=\"benhNhanId\">\n                                        </app-tai-kham>\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab>\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip title=\"Phím tắt: Ctrl + F12\">\n                                            Lịch Sử Khám Bệnh\n                                        </div>\n                                    </ng-template>\n                                    <ng-template kendoTabContent>\n                                        <app-kham-benh-lich-su-kham-list [(BenhNhan)]=\"benhNhanId\">\n                                        </app-kham-benh-lich-su-kham-list>\n                                        <!-- <app-tiep-nhan-benh-nhan-lich-su [(benhNhanId)]=\"benhNhanId\"></app-tiep-nhan-benh-nhan-lich-su> -->\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                            </kendo-tabstrip>\n\n                            <ng-template #donGiaKhamBenhTemplate let-dataItem>\n                                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #donGiaKhamBenhFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Tổng cộng:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienKhamBenhTemplate let-dataItem>\n                                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhamBenhFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span style=\"color:blue;\">{{totalKhamBenh('ThanhTien') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhamBenhTemplate let-dataItem>\n                                {{dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhamBenhFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span>{{totalKhamBenh('BHYTThanhToan') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.BHYTThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n\n                            <ng-template #bnThanhToanKhamBenhTemplate let-dataItem>\n                                {{dataItem.BnThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.BnThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhamBenhFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span\n                                            style=\"color:red;\">{{totalKhamBenh('BnThanhToan') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #actionKhamBenhTemplate let-dataItem>\n                                <!-- <button (click)=\"removeGridKhamBenh(dataItem)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button> -->\n                            </ng-template>\n\n                            <ng-template #donGiaKyThuatTemplate let-dataItem>\n                                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #donGiaKyThuatFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Tổng cộng:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienKyThuatTemplate let-dataItem>\n                                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKyThuatGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKyThuatFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span style=\"color:blue;\">{{totalKyThuat('ThanhTien') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n\n                            <ng-template #bnThanhToanKyThuatTemplate let-dataItem>\n                                {{dataItem.BnThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKyThuatFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span style=\"color:red;\">{{totalKyThuat('BnThanhToan') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKyThuatGroupFooterTemplate let-aggregates>\n                                {{aggregates.BnThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #actionKyThuatTemplate let-dataItem>\n                                <!-- <button (click)=\"removeGridKyThuat(dataItem)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button> -->\n                            </ng-template>\n\n                            <ng-template #tenDvTemplate let-dataItem>\n                                <div *ngIf=\"dataItem.IsGoiCoChietKhau || dataItem.LaDichVuKhuyenMai\" class=\"xac-nhan-ng-template\" kendoTooltip\n                                    #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"top\"\n                                    [tooltipTemplate]=\"templateInfo\" filter=\"*\"\n                                    (mouseover)=\"setUpDataTooltip(dataItem)\">\n                                    <mat-icon [icIcon]=\"icInfo\" class=\"info\"></mat-icon>\n                                </div>\n\n                                <ng-template #templateInfo let-dataItem>\n                                    <span>Dịch vụ chọn từ gói: {{displayToolTipGrid}} </span>\n                                </ng-template>\n\n                                <div class=\"xac-nhan-ng-template\" kendoTooltip>\n                                    <p class=\"ten-dich-vu-label\" title={{dataItem.TenDichVu}}>\n                                        {{dataItem.TenDichVu}}</p>\n                                </div>\n\n                            </ng-template>\n\n                            <ng-template #donGiaKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n                            <ng-template #donGiaBHYTTemplate let-dataItem>\n                                {{dataItem.GiaBHYT | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #donGiaKhongChietKhauFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Tổng cộng:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhongChietKhauFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span style=\"color:blue;\">{{totalKhac('ThanhTien', 1) | number:'0.2-2':'vi-VN'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.BHYTThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhongChietKhauFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span>{{totalKhac('BHYTThanhToan', 0) | number:'0.2-2':'vi-VN'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n\n\n                            <ng-template #bnThanhToanKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.BnThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.BnThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhongChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:red;\">{{totalKhac('BnThanhToan', masterName) |\n                                    number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                                <strong>{{value}}</strong>\n                            </ng-template>\n\n                            <!-- [disabled]=\"duocHuongBHYT != true || dataItem.CoGiaBHYT != true\" -->\n                            <ng-template #duocHuongBHYTTemplate let-dataItem>\n                                <app-checkbox \n                                    [disabled]=\"!(((tiepNhanBenhNhan.CoBHYT && dataItem.DuocHuongBHYT != true) || (tiepNhanBenhNhan.CoBHYT != true && dataItem.DuocHuongBHYT == true)) && (dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH' || dataItem.LaChiDinhTuKhamBenh))\"\n                                    (modelChange)=\"changDuocHuongBHYT($event, dataItem)\"\n                                    [(model)]=\"dataItem.DuocHuongBHYT\"\n                                    id=\"DuocHuongBHYT{{dataItem.MaDichVuId}}{{dataItem.Nhom}}\" label=\"Có\">\n                                </app-checkbox>\n                            </ng-template>\n\n                            <!-- url=\"TiepNhanBenhNhan/GetLoaiGiaKhamBenh\" -->\n                            <ng-template #loaiGiaTemplate let-dataItem>\n                                <app-combobox id=\"LoaiGiaGrid-{{dataItem.Id}}\" label=\"\" class=\"no-label\"\n                                    (modelChange)=\"loaiGiaGridChange($event, dataItem)\"\n                                    url=\"{{dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH' ? 'KhamBenh/LoaiGiaHieuLucTheoDichVuKham' : 'KhamBenh/LoaiGiaHieuLucTheoDichVuKyThuat'}}\"\n                                    [disabled]=\"dataItem.IsGoiCoChietKhau || dataItem.LaDichVuVacxin || dataItem.LaDichVuKhuyenMai\"\n                                    [(model)]=\"dataItem.LoaiGiaId\" popupSettings=\"null\" [bind]=\"true\" [reloadForGrid]=\"true\"\n                                    [queryInfo]=\"{ParameterDependencies:'{DichVuId:' +dataItem.MaDichVuId +'}', Take: 50}\">\n                                </app-combobox>\n\n                            </ng-template>\n\n                            <ng-template #sttKhongChietKhauTemplate let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n                            <ng-template #sttCoChietKhauTemplate let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n\n                            <ng-template #soLuongTemplate let-dataItem>\n                                <!-- (modelChange)=\"soLuongGridChange($event, dataItem)\" -->\n                                <app-textboxnumeric [disabled]=\"dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH' || dataItem.LaDichVuVacxin\" min=1\n                                    \n                                    (modelChange)=\"soLuongGridChange($event, dataItem)\" (blur)=\"soLuongBlur(dataItem)\"\n                                    [(model)]=\"dataItem.SoLuong\" id=\"NumerictextboxGrid\" label=\"\" format=\"0\"\n                                    class=\"item-no-padding no-label\">\n                                </app-textboxnumeric>\n                                <!-- [max]=\"(dataItem.Nhom != 'DỊCH VỤ KHÁM BỆNH' && dataItem.IsGoiCoChietKhau) ? dataItem.SoLuongConLai : 1000\" -->\n\n                            </ng-template>\n\n                            <ng-template #noiThucHienKhongChietKhauTemplate let-dataItem>\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ GIƯỜNG'\">\n                                    <app-combobox id=\"NoiThucHien{{dataItem.MaDichVuId}}\" label=\"\"\n                                        [disabled]=\"dataItem.IsDontHavePermissionChangeNoiThucHien\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamDichVuGiuongKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" [modelText]=\"dataItem.NoiThucHienModelText\"\n                                        (modelChange)=\"noiThucHienGridChange($event, dataItem)\" [required]=\"true\"\n                                        [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n                                        class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 400,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th width=\"60%\">Phòng</th>\n                                                    <th>SL ĐTH</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                    <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                    <td>{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH'\">\n                                    <app-combobox popupSettings=\"\" id=\"NoiThucHien{{dataItem.MaDichVuId}}\" label=\"\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamKhac/?id={{dataItem.MaDichVuId}}\"\n                                        (modelChange)=\"noiThucHienGridChange($event, dataItem)\"\n                                        [disabled]=\"dataItem.IsDontHavePermissionChangeNoiThucHien\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" [modelText]=\"dataItem.NoiThucHienModelText\"\n                                        [required]=\"true\" [template]=\"phongKhamTemplate\"\n                                        [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"40%\">Phòng</th>\n                                                    <th width=\"40%\">Bác sĩ</th>\n                                                    <th width=\"10%\">Đ.khám</th>\n                                                    <th width=\"10%\">Tổng</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr [ngStyle]=\"{'color': dataItem.IsWarning==true?'orange':'black'}\"\n                                                    kendoTooltip\n                                                    title=\"{{dataItem.IsWarning==true?'Bác sĩ này đã khám nhiều hơn ' + dataItem.TongSoKhamGioiHan + ' người bệnh':''}}\">\n                                                    <td width=\"40%\">{{dataItem.TenPhong}}</td>\n                                                    <td width=\"40%\">{{dataItem.TenBacSi}}</td>\n                                                    <td width=\"10%\">{{dataItem.DangKham}}</td>\n                                                    <td width=\"10%\">{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KỸ THUẬT'\">\n                                    <app-combobox id=\"NoiThucHien{{dataItem.MaDichVuId}}\" label=\"\"\n                                        (modelChange)=\"noiThucHienGridChange($event, dataItem)\"\n                                        [disabled]=\"dataItem.IsDontHavePermissionChangeNoiThucHien || dataItem.LaDichVuVacxin\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamKyThuatKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" [modelText]=\"dataItem.NoiThucHienModelText\"\n                                        [required]=\"true\" [template]=\"phongKhamTemplate\"\n                                        [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 400,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th width=\"60%\">Phòng</th>\n                                                    <th>SL ĐTH</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                    <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                    <td>{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #actionKhongChietKhauTemplate let-dataItem>\n                                <!-- <button (click)=\"removeGridKhac(dataItem)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button> -->\n\n                                <button *ngIf=\"dataItem.ShowButtonHoanThanhDichVu && !dataItem.LaDichVuVacxin\" color=\"primary\" mat-icon-button kendoTooltip\n                                    title=\"Cập nhật thực hiện dịch vụ\" type=\"button\" (click)=\"capNhatThongTinThucHienDichVu(dataItem)\" class=\"mr-1\">\n                                    <mat-icon [icIcon]=\"icDone\"></mat-icon>\n                                </button>\n                                <button *ngIf=\"dataItem.ShowButtonHuyHoanThanhDichVu && !dataItem.LaDichVuVacxin\" style=\"color: red\" mat-icon-button kendoTooltip\n                                    title=\"Hủy thực hiện dịch vụ\" type=\"button\" (click)=\"capNhatThongTinThucHienDichVu(dataItem, false)\" class=\"mr-1\">\n                                    <mat-icon [icIcon]=\"icHistory\"></mat-icon>\n                                </button>\n\n                                <button *ngIf=\"!dataItem.IsDichVuHuyThanhToan && !dataItem.LaDichVuVacxin\" style=\"color: red\" mat-icon-button\n                                    kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"removeGridKhac(dataItem)\">\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                                <button *ngIf=\"dataItem.IsDichVuHuyThanhToan && !dataItem.LyDoHuyDichVu && !dataItem.LaDichVuVacxin\"\n                                    style=\"color: red\" mat-icon-button kendoTooltip title=\"Hủy\" type=\"button\"\n                                    (click)=\"huyDichVuDaHuyThanhToan(dataItem)\">\n                                    <mat-icon [icIcon]=\"icCancel\"></mat-icon>\n                                </button>\n                            </ng-template>\n\n                            <ng-template #tinhTrangTemplate let-dataItem>\n                                <div style=\"position: relative;\">\n                                <span kendoTooltip title=\"{{dataItem.LyDoHuyDichVu}}\"\n                                    [style.color]=\"(dataItem.TinhTrangDisplay == tinhTrangDangThucHien || dataItem.TinhTrangDisplay == tinhTrangDangKham || dataItem.TinhTrangDisplay == tinhTrangDangLamChiDinh || dataItem.TinhTrangDisplay == tinhTrangDangDoiKetLuan ) \n                                ? 'orange' : ( (dataItem.TinhTrangDisplay == tinhTrangChuaThucHien || dataItem.TinhTrangDisplay == tinhTrangChuaKham) \n                                ? 'black' : ( (dataItem.TinhTrangDisplay == tinhTrangDaThucHien || dataItem.TinhTrangDisplay == tinhTrangDaKham ) ? 'green' :  'black' ) ) \">\n                                    {{dataItem.TinhTrangDisplay}}</span>\n                                    <mat-icon class=\"icon-info-status-grid\" *ngIf=\"dataItem.LyDoHuyTrangThaiDaThucHien\" [icIcon]=\"icInfo\" kendoTooltip\n                                        title=\"{{'Lý do hủy thực hiện: ' + dataItem.LyDoHuyTrangThaiDaThucHien}}\">\n                                    </mat-icon>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #donGiaChietKhauTemplate let-dataItem>\n                                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n\n                            <ng-template #thanhTienChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n                            <ng-template #thanhTienTrongGoiChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTienTrongGoi | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #donGiaChietKhauFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Giá trước CK:</span>\n                            </ng-template>\n\n                            <!-- <ng-template #thanhTienTrongGoiChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTienTrongGoi.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template> -->\n\n                            <ng-template #thanhTienTrongGoiChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:red;\">{{totalKhac('ThanhTienTrongGoi', masterName) |\n                                    number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                            <!-- <ng-template #thanhTienChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template> -->\n\n                            <ng-template #thanhTienChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:blue\">{{totalKhac('ThanhTienGoiChietKhau', masterName) |\n                                    number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienTrongGoiChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTienTrongGoi | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #tyLeChietKhauCoChietKhauTemplate let-dataItem>\n                                {{dataItem.TyLeChietKhauDisplay}}\n                            </ng-template>\n\n                            <ng-template #duocGiamTrongGoiCoChietKhauTemplate let-dataItem>\n                                {{dataItem.DuocGiamTrongGoi | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #duocGiamTrongGoiCoChietKhauFooterTemplate let-dataItem>\n                                <div>\n                                    <span style=\"float:right\">Giá sau CK:</span>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #noiThucHienChietKhauTemplate let-dataItem>\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ GIƯỜNG'\">\n                                    <app-combobox id=\"NoiThucHien123{{dataItem.MaDichVuId}}\" label=\"\"\n                                        (modelChange)=\"noiThucHienGridChange($event, dataItem)\"\n                                        [disabled]=\"dataItem.IsDontHavePermissionChangeNoiThucHien\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamDichVuGiuongKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" [modelText]=\"dataItem.NoiThucHienModelText\"\n                                        [required]=\"true\" [template]=\"phongKhamTemplate\"\n                                        [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 400,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th width=\"60%\">Phòng</th>\n                                                    <th>SL ĐTH</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                    <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                    <td>{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH'\">\n                                    <app-combobox id=\"NoiThucHien456{{dataItem.MaDichVuId}}\" label=\"\"\n                                        [modelText]=\"dataItem.NoiThucHienModelText\"\n                                        (modelChange)=\"noiThucHienGridChange($event, dataItem)\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" [required]=\"true\"\n                                        [disabled]=\"dataItem.IsDontHavePermissionChangeNoiThucHien\"\n                                        [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n                                        class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"40%\">Phòng</th>\n                                                    <th width=\"40%\">Bác sĩ</th>\n                                                    <th width=\"10%\">Đ.khám</th>\n                                                    <th width=\"10%\">Tổng</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr [ngStyle]=\"{'color': dataItem.IsWarning==true?'orange':'black'}\"\n                                                    kendoTooltip\n                                                    title=\"{{dataItem.IsWarning==true?'Bác sĩ này đã khám nhiều hơn ' + dataItem.TongSoKhamGioiHan + ' người bệnh':''}}\">\n                                                    <td width=\"40%\">\n                                                        {{dataItem.TenPhong}}</td>\n                                                    <td width=\"40%\">\n                                                        {{dataItem.TenBacSi}}</td>\n                                                    <td width=\"10%\">\n                                                        {{dataItem.DangKham}}</td>\n                                                    <td width=\"10%\">\n                                                        {{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KỸ THUẬT'\">\n                                    <app-combobox id=\"NoiThucHien412{{dataItem.MaDichVuId}}\" label=\"\"\n                                        (modelChange)=\"noiThucHienGridChange($event, dataItem)\"\n                                        [disabled]=\"dataItem.IsDontHavePermissionChangeNoiThucHien\"\n                                        url=\"TiepNhanBenhNhan/GetPhongKhamKyThuatKhac/?id={{dataItem.MaDichVuId}}\"\n                                        [(model)]=\"dataItem.NoiThucHienId\" [modelText]=\"dataItem.NoiThucHienModelText\"\n                                        [required]=\"true\" [template]=\"phongKhamTemplate\"\n                                        [templateHeader]=\"phongKhamTemplateHeader\" class=\"item-no-padding no-label\"\n                                        [popupSettings]=\"{width: 400,popupClass:'item-no-padding'}\">\n\n                                        <ng-template #phongKhamTemplateHeader let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <th width=\"20%\">Mã</th>\n                                                    <th width=\"60%\">Phòng</th>\n                                                    <th>SL ĐTH</th>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                        <ng-template #phongKhamTemplate let-dataItem>\n                                            <table width=\"100%\" class=\"table-combobox\">\n                                                <tr>\n                                                    <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                                                    <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                                                    <td>{{dataItem.Tong}}</td>\n                                                </tr>\n                                            </table>\n                                        </ng-template>\n                                    </app-combobox>\n                                </div>\n                            </ng-template>\n\n\n                            <!-- template grid -->\n                            <ng-template #taiLieuTemplate let-dataItem>\n                                <a (click)=\"viewTaiLieu(dataItem)\">\n                                    {{dataItem.Ten}}\n                                </a>\n                            </ng-template>\n\n                            <ng-template #actionTaiLieuTemplate let-dataItem>\n                                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                                    [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                                </button>\n                                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                                    <ng-template let-customer=\"customer\" matMenuContent>\n                                        <button (click)=\"removeTaiLieu(dataItem)\" mat-menu-item>\n                                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                            <span>Xóa</span>\n                                        </button>\n                                    </ng-template>\n                                </mat-menu>\n                            </ng-template>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- </div> -->\n            <div class=\"form-footer-fixed\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"8px\" kendoTooltip>\n                <!-- <ul class=\"hot-keys float-left\">\n                    <li class=\"warn\">F1: Quét mã vạch</li>\n                </ul> -->\n                <!-- <button *ngIf=\"showTaoYCTNMoi()\" type=\"button\" mat-raised-button color=\"warn\" class=\"float-left\" (click)=\"taoYCTNMoi()\" title=\"Tạo YCTN Mới\">Tạo YCTN Mới</button> -->\n                <button *ngIf=\"tiepNhanBenhNhan.CheckYeuCauTiepNhanTaoMoi\" type=\"button\" mat-raised-button color=\"warn\"\n                    class=\"float-left\" (click)=\"taoYCTNMoi()\" title=\"Tạo YCTN Mới\">Tạo YCTN Mới</button>\n\n                <button *ngIf=\"showInChiDinh\" type=\"button\" mat-raised-button color=\"primary\"\n                    class=\"float-left\" (click)=\"inChiDinh(0)\" title=\"In chỉ định\">In chỉ định</button>\n                <button *ngIf=\"showInChiDinh\" type=\"button\" mat-raised-button color=\"primary\"\n                    class=\"float-left\" (click)=\"InPhieuXN()\" title=\"In chỉ định\">In phiếu chỉ định xét nghiệm test nhanh Sars-Cov 2</button>\n                    \n                <button type=\"button\" mat-button class=\"mr-1\" (click)=\"huy()\" title=\"Phím tắt: Esc\">Hủy</button>\n                <button type=\"button\" (click)=\"luuPhieu()\" color=\"primary\" mat-raised-button\n                    title=\"Phím tắt: Ctrl + S\">Lưu</button>\n            </div>\n            <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\"></app-barcode>\n        </div>\n\n        <ng-template #dichVuTrongGoiTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <app-checkbox *ngIf=\"dataItem.CoDichVuNayTrongGoi\" id=\"dvGoiMarketing{{rowIndex}}\" label=\"\" [(model)]=\"dataItem.GoiCoChietKhauId\"\n                [disabled]=\"dataItem.LaDichVuVacxin || dataItem.LaDichVuKhuyenMai\"\n                (modelChange)=\"changeDichVuTrongGoi($event, dataItem)\">\n            </app-checkbox>\n        </ng-template>\n        <ng-template #dichVuKhuyenMaiTemplate let-dataItem>\n            <app-checkbox *ngIf=\"dataItem.CoDichVuNayTrongGoiKhuyenMai\" id=\"dvKhuyenMaiGoiMarketing{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.LaDichVuKhuyenMai\"\n                [disabled]=\"dataItem.LaDichVuVacxin || dataItem.GoiCoChietKhauId !== 0\" (modelChange)=\"changeDichVuKhuyenMai($event, dataItem)\">\n            </app-checkbox>\n        </ng-template>\n        <div class=\"gripViewGoiDichViKhacTemplate\">\n            <ng-template #checkBoxHeaderTemplate let-dataItem>\n                <input type=\"checkbox\" id=\"vehicle1\" name=\"vehicle1\" [(ngModel)]=\"checkAll\" (ngModelChange)=\"SelectcheckAllboxIn($event)\">\n            </ng-template>\n            <ng-template #checkBoxTemplate let-dataItem>\n                <span *ngIf=\" (dataItem.TrangThaiYeuCauKhamBenh != null && dataItem.TrangThaiYeuCauKhamBenh != 6) || \n                              (dataItem.TrangThaiYeuCauDichVuKyThuat != null && dataItem.TrangThaiYeuCauDichVuKyThuat !=4)\" >\n                    <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.isCheckRowItem\" name=\"vehicle1\" (ngModelChange)=\"checkboxIn($event,dataItem)\">\n                </span>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Phiếu khám bệnh ({{arrFileUrl.length}} file)</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 550px;\">\n    <div class=\"container-iframe\">\n        <ng-container [ngSwitch]=\"arrFileUrl.length > 0\">\n            <div *ngSwitchCase=\"true\">\n                <ng-container *ngFor=\"let item of arrFileUrl\">\n                    <iframe width=\"100%\" height=\"550px\" frameborder=\"0\" [src]=\"item | safe\" type=\"application/pdf\"\n                        allowTransparency=\"true\" background=\"transparent\"></iframe>\n                </ng-container>\n            </div>\n            <div *ngSwitchDefault>Không có dữ liệu</div>\n        </ng-container>\n\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n            class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\"\n        class=\"mr-1 mt-4\">Tải tất cả</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 110px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\">Bạn có chắc chắn muốn hủy dịch vụ này không?</div>\n\n        <app-textarea id=\"lyDo\" [(model)]=\"lyDoHuy\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\" [required]=\"true\"\n            minHeight=\"20\" [validationerror]=\"'LyDoHuy' | validationerror:validationErrors\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close()\">Không</button>\n    <button mat-button color=\"primary\" (click)=\"Huy()\">Có</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div fxFlex=\"100%\">\n        <span fxFlex=\"20%\" style=\"padding-top: 20px;\">XEM TRƯỚC KHI IN</span>\n    </div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src | safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <!-- in phiếu DvKT -->\n    <app-print-form textPrint=\"In Phiếu Chỉ Định CLS\" type=\"PDF\" [event]=\"data\" style=\"text-align: right;\" typeSize=\"A4\"\n        (click)=\"InPhieu(1)\" [bodyComponent]=\"this\">\n    </app-print-form>\n    <!-- in phiếu Dvkham -->\n    <app-print-form textPrint=\"In Phiếu Khám Bệnh\" type=\"PDF\" [event]=\"data\" style=\"text-align: right;\" typeSize=\"A5\"\n        typeLayout=\"landscape\" (click)=\"InPhieu(2)\" [bodyComponent]=\"this\">\n    </app-print-form>\n    <!-- in phiếu Dv giuong -->\n    <!-- <app-print-form textPrint=\"In Dịch Vụ Giường\" type=\"PDF\" [event]=\"data\" style=\"text-align: right;\" typeSize=\"A4\" (click)=\"InPhieu(4)\" \n   (click)=\"InPhieu\" [bodyComponent]=\"this\" >\n </app-print-form>   -->\n    <app-print-form textPrint=\"In phiếu Chỉ định xét nghiệm\n   \" type=\"PDF\" [event]=\"data\" style=\"text-align: right;\" typeSize=\"A4\" (click)=\"InPhieu(3)\" (click)=\"InPhieu\"\n        [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Giấy Nghỉ Hưởng Bảo Hiểm Xã Hội</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In giấy nghỉ hưởng BHXH\" type=\"PDF\"\n        typeLayout=\"landscape\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Ngày Nghỉ Hưởng Bảo Hiểm Xã Hội</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 90px;\">\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxLayout=\"row wrap\" fxFlex=\"100%\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n            style=\"padding-top: 16px;\">\n\n            <app-datepicker fxFlex=\"25%\" label=\"Từ ngày\" [minDate]=\"dateTiepNhanMin\"\n                [(model)]=\"thongTinNgayNghiHuongBHYT.ThoiDiemTiepNhan\" required=\"true\"\n                [validationerror]=\"'ThoiDiemTiepNhan' | validationerror:validationErrors\">\n            </app-datepicker>\n            <app-datepicker fxFlex=\"25%\" label=\"Đến ngày\" [minDate]=\"dateTiepNhanMin\"\n                [(model)]=\"thongTinNgayNghiHuongBHYT.DenNgay\" required=\"true\"\n                [validationerror]=\"'DenNgay' | validationerror:validationErrors\">\n            </app-datepicker>\n\n            <app-combobox fxFlex=\"50%\" [(model)]=\"thongTinNgayNghiHuongBHYT.BacSiKetLuanId\" popupSettings=\"null\"\n                [modelText]=\"thongTinNgayNghiHuongBHYT.HoTenBacSi\" id=\"BacSiKetLuanId\" label=\"Bác Sĩ Khám Bệnh\"\n                [queryInfo]=\"queryInfo\" url=\"DanhSachChoKham/BacSiKhamBenhTiepNhan\" [autoSelectFirstItem]=\"true\"\n                bind=\"true\" class=\"item-no-padding\">\n            </app-combobox>\n        </div>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <button tabindex=\"-1\" type=\"button\" (click)=\"close()\" mat-stroked-button color=\"primary\"\n        mat-dialog-close>Hủy</button>\n    <button tabindex=\"-1\" type=\"button\" (click)=\"xemGiayHuongBHXH()\" mat-stroked-button color=\"primary\"\n        class=\"md-primary\">Xác Nhận</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-6 py-4\" fxLayout=\"column\">\n\n    <div style=\"margin-top: 5px;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\">\n        <div fxFlex=\"100%\" style=\"padding-left: 7px; text-align: center;\">\n            Số thẻ BHYT: <span style=\"font-weight: bold;\">{{data.MaThe}}</span>\n        </div>\n        <div fxFlex=\"100%\" style=\"padding-left: 7px; text-align: center;\">\n            Họ và tên: <span style=\"font-weight: bold;\">{{data.TenBenhNhan}}</span>\n        </div>\n        <div fxFlex=\"100%\" style=\"padding-left: 7px; text-align: center;\">\n            Ngày sinh: <span style=\"font-weight: bold;\">{{data.NgaySinhDisplay}}</span>\n        </div>\n    </div>\n\n</div>\n\n<div style=\"text-align: center;\">\n    <h4>Hệ thống đang kiểm tra thông tin BHYT...</h4>\n    <button color=\"primary\" mat-raised-button type=\"button\">\n        <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n    </button>\n</div>\n\n\n<!-- <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"menu\" (click)=\"close()\">Đóng</button>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <!-- <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button> -->\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <div>\n        Dịch vụ này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm dịch vụ này hay không?\n    </div>\n    \n</mat-dialog-content>\n\n\n<mat-dialog-actions style=\"margin-top: 20px;\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" mat-stroked-button color=\"primary\" (click)=\"Khong()\">Không</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"Co()\">Có</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>THÔNG BÁO</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <table width=\"100%\">\n        <tr>\n            <td>Số thẻ BHYT: <strong>{{data.BHYTMaSoThe}}</strong></td>\n        </tr>\n        <tr>\n            <td>Họ và tên: <strong>{{data.HoTen}}</strong></td>\n            <td>Năm sinh: <strong>{{data.NgayThangNamSinhDisplay}}</strong></td>\n            <td>Giới tính: <strong>{{data.GioiTinhDisplay}}</strong></td>\n        </tr>\n        <tr>\n            <td>Ngày có hiệu lực: <strong>{{data.NgayCoHieuLucDisplay}}</strong></td>\n            <td>Ngày hết hiệu lực: <strong [style.color] = \"data.isOutOfDate == true ? 'red' : 'black' \">{{data.NgayHetHieuLucDisplay}}</strong></td>\n        </tr>\n    </table>\n\n    <div style=\"margin-top: 30px\">\n        <!-- <h3 class=\"sub-title, sub-title-bottom\">Người bệnh này không tồn tại trên cổng BHYT</h3> -->\n        <h3 class=\"sub-title, sub-title-bottom err-mess-bhyt\">{{messageErrFromBHYT}}</h3>\n    </div>\n\n    <div class=\"div-title-bottom\">\n        <button type=\"button\" mat-button class=\"mr-1\" (click)=\"huy()\">Hủy</button>\n        <button type=\"button\" class=\"mr-1\" (click)=\"khamKhongBHYT()\" color=\"primary\" mat-raised-button>Khám không có thẻ BHYT</button>\n        <button type=\"button\" (click)=\"chapNhanBHYTNhapTay()\" color=\"primary\" mat-raised-button>Chấp nhận BHYT nhập tay</button>\n    </div>\n    \n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>THÔNG BÁO</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <table width=\"100%\">\n        <tr>\n            <td>Số thẻ BHYT: <strong>{{data.BHYTMaSoThe}}</strong></td>\n        </tr>\n        <tr>\n            <td>Họ và tên: <strong>{{data.HoTen}}</strong></td>\n            <td>Năm sinh: <strong>{{data.NgayThangNamSinhDisplay}}</strong></td>\n            <td>Giới tính: <strong>{{data.GioiTinhDisplay}}</strong></td>\n        </tr>\n        <tr>\n            <td>Ngày có hiệu lực: <strong>{{data.NgayCoHieuLucDisplay}}</strong></td>\n            <td>Ngày hết hiệu lực: <strong [style.color] = \"data.isOutOfDate == true ? 'red' : 'black' \">{{data.NgayHetHieuLucDisplay}}</strong></td>\n        </tr>\n    </table>\n\n    <div style=\"margin-top: 30px\">\n        <h3 class=\"sub-title, sub-title-bottom\">Bạn không thể sử dụng thẻ này vì thẻ đã hết hiệu lực</h3>\n    </div>\n\n    <div class=\"div-title-bottom\">\n        <button type=\"button\" mat-button class=\"mr-1\" (click)=\"huy()\">Hủy</button>\n        <button type=\"button\" class=\"mr-1\" (click)=\"khamKhongBHYT()\" color=\"primary\" mat-raised-button>Khám không có thẻ BHYT</button>\n        <button type=\"button\" (click)=\"chapNhanBHYTNhapTay()\" color=\"primary\" mat-raised-button>Chấp nhận BHYT nhập tay</button>\n    </div>\n    \n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.html":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n\n    <div style=\"overflow-y: auto;max-height: 553px;\">   \n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngIf=\"isBHYT\" style=\"background: #005dab;color:#fff;\">\n                <th>BẢNG KÊ CHI PHÍ KHÁM BỆNH CHO BẢO HIỂM Y TẾ</th>\n            </tr>\n            <tr *ngIf=\"isBHYT\">\n                <td style=\"padding: 0;\">\n                    <div class=\"container-iframe\">\n                        <iframe width=\"100%\" typeSize=\"A4\"\n                            [src]=\"srcBangKeChiPhiKhamBenhCoBHYT| safe\" allowTransparency=\"true\"\n                            background=\"transparent\"></iframe>\n                    </div>\n                </td>\n            </tr>\n            <tr></tr>\n            <tr *ngIf=\"iskhongBHYT\" style=\"background: #005dab;color:#fff;\">\n                <th>BẢNG KÊ CHI PHÍ KHÁM BỆNH CHO BỆNH VIỆN</th>\n            </tr>           \n            <tr *ngIf=\"iskhongBHYT\">\n                <td style=\"padding: 0;\">\n                    <div class=\"container-iframe\">\n                        <iframe width=\"100%\" typeSize=\"A4\"\n                            [src]=\"srcBangKeChiPhiKhamBenh| safe\" allowTransparency=\"true\"\n                            background=\"transparent\"></iframe>\n                    </div>\n\n                </td>\n            </tr>\n            <tr *ngIf=\"isBHYT=== false && iskhongBHYT=== false\" style=\"background: #005dab;color:#fff;\">\n                <th>Chưa có dịch vụ</th>\n            </tr>\n            <tr></tr>\n        </table>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\" *ngIf=\"isBHYT !== false || iskhongBHYT !== false\">\n    <app-print-form textPrint=\"In Phiếu Bảng Kê Chi Phí Khám Bệnh\" type=\"PDF\" [event]=\"19\" style=\"text-align: right;\" typeSize=\"A4\"\n        [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>THÔNG BÁO</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <table width=\"100%\">\n        <tr>\n            <td>Số thẻ BHYT: <strong>{{data.BHYTMaSoThe}}</strong></td>\n        </tr>\n        <tr>\n            <td>Họ và tên: <strong>{{data.HoTen}}</strong></td>\n            <td>Năm sinh: <strong>{{data.NgayThangNamSinhDisplay}}</strong></td>\n            <td>Giới tính: <strong>{{data.GioiTinhDisplay}}</strong></td>\n        </tr>\n    </table>\n\n    <div style=\"margin-top: 30px\">\n        <h3 class=\"sub-title, sub-title-bottom\">Không thể kiểm tra thẻ này trên cổng BHYT, bạn hãy thử lại lần nữa</h3>\n    </div>\n\n    <div class=\"div-title-bottom\">\n        <button class=\"div-margin-bottom\" type=\"button\" mat-button class=\"mr-1\" (click)=\"khamKhongBHYT()\">Hủy</button>\n        <button class=\"div-margin-bottom\" type=\"button\" (click)=\"khamKhongBHYT()\" color=\"primary\" mat-raised-button>Khám không có thẻ BHYT</button>\n        <!-- <button class=\"div-margin-bottom\" type=\"button\" (click)=\"chapNhanCoBHYT()\" color=\"primary\" mat-raised-button>Chấp nhận có BHYT</button> -->\n        <button type=\"button\" (click)=\"chapNhanBHYTNhapTay()\" class=\"div-margin-bottom\" color=\"primary\" mat-raised-button>Chấp nhận BHYT nhập tay</button>\n        <button type=\"button\" (click)=\"thuLai()\" color=\"primary\" mat-raised-button>Thử lại</button>\n    </div>\n    \n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>LỊCH SỬ KCB</div>\n    <!-- <button type=\"button\" mat-icon-button (click)=\"close('No answer')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button> -->\n</div>\n\n<mat-dialog-content>\n    <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridData\"\n    [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" \n    [useHeaderDefault]=\"false\" #grid [useActionDefault]=\"false\"\n    [checkboxAble]=\"false\" height=\"300\">\n</app-grid>\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>LỊCH SỬ KIỂM TRA THẺ BHYT</div>\n    <!-- <button type=\"button\" mat-icon-button (click)=\"close('No answer')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button> -->\n</div>\n\n<mat-dialog-content>\n    <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridData\"\n    [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" \n    [useHeaderDefault]=\"false\" #grid [useActionDefault]=\"false\"\n    [checkboxAble]=\"false\" height=\"400\">\n    <!-- height=\"300\" -->\n</app-grid>\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.html":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Xác Nhận</div>\n    <!-- <button (click)=\"close()\" type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button> -->\n</div>\n\n<mat-dialog-content style=\"margin-bottom: 20px;\">\n    <div class=\"div-tag-content\">\n        <div style=\"margin-bottom: 10px;\">Dịch vụ cảnh báo:</div>\n        <app-grid fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n            [gridDataSource]=\"danhSachGoiDaChonTrongLanPopup\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [pageable]=\"false\">\n        </app-grid>\n        <div style=\"margin-top: 10px;\">Ngoài ra tất cả các dịch vụ khác sẽ được thêm vào, bạn có chấp nhận không ?</div>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\" (click)=\"Khong()\">Không</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"Co()\">Có</button>\n</mat-dialog-actions>\n\n\n<ng-template #canhBaoTemplate let-dataItem>\n    <span>Trùng</span>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <app-checkbox [(model)]=\"dataItem.KhongThem\" id=\"khongThem-{{dataItem.Id}}\"\n        label=\"Không thêm\"></app-checkbox>\n    <!-- <app-textboxnumeric id=\"abc-{{dataItem.Id}}\" [disabled]=\"!dataItem.IsActive || !dataItem.IsChecked\" [(model)]=\"dataItem.SoLuongDungLanNay\"\n        class=\"no-label\" label=\" \" [min]=\"(!dataItem.IsActive || !dataItem.IsChecked) ? 0 : 1\" [max]=\"dataItem.TenNhomDichVu == 'DỊCH VỤ KHÁM BỆNH' ? 1 : (dataItem.SoLuongConLai)\"\n        (modelChange)=\"changeSoLuongDichVu($event, dataItem)\"> \n    </app-textboxnumeric> -->\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Gói dịch vụ</div>\n    <button (click)=\"close()\" type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"min-height: 200px;\">\n    <kendo-splitter orientation=\"horizontal\">\n        <kendo-splitter-pane>\n            <div class=\"pane-content\">\n                <app-grid #parentGrid fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridColumns\"\n                    [useAddDeault]=\"false\" [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\"\n                    [additionalSearchString]=\"searchStringDefault\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                    [checkboxAble]=\"false\" [HideHeader]=\"true\" [documentType]=\"documentType\" [lazyLoadPage]=\"true\"\n                    [autoHeight]=\"true\"  [headerTemplate]=\"headerTemplate\"\n                    [pageable]=\"false\" [detailTemplate]=\"detailTemplate\" (extOnDataBound)=\"xemChiTietGoiDichVu($event)\">\n                </app-grid>\n            </div>\n        </kendo-splitter-pane>\n\n        <kendo-splitter-pane [collapsible]=\"true\" size=\"30%\">\n            <div class=\"pane-content p-3\" style=\"height: 100%;\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"grid\" fxLayoutGap.lt-sm=\"0\">\n                    <h3 fxFlex=\"100%\">Dịch vụ sử dụng cho lần này</h3>\n                    <ng-container *ngIf=\"danhSachDichVuDaChonTrongLanPopup.length > 0\">\n                        <ng-container *ngFor=\"let goiDichVu of arrGoiDangChon\">\n                            <table class=\"mb-2\" *ngIf=\"kiemTraGoiDichVuCoChonDichVu(goiDichVu.YeuCauGoiDichVuId)\" fxFlex=\"100%\">\n                                <tr>\n                                    <th colspan=\"3\" style=\"text-align: left;\">\n                                        {{goiDichVu.TenGoiDichVu}}\n                                    </th>\n                                    <th><span *ngIf=\"goiDichVu.IsChecked\" class='text-right-td' style=\"color: green;\">Đã đăng ký</span></th>\n                                </tr>\n                                <ng-container *ngFor=\"let dichVu of getArrayDichVuDaChonTheoGoi(goiDichVu.YeuCauGoiDichVuId)\">\n                                    <tr>\n                                        <td width='35%' style=\"max-width: 150px;\" class='reverse-ellipsis r' kendoTooltip title=\"{{dichVu.TenDichVu}}\">- {{dichVu.TenDichVu}}</td>\n                                        <td width='5%' class='text-left-td'>{{dichVu.SoLuongDungLanNay}}</td>\n                                        <td width='20%' class='text-right-td'>{{dichVu.DonGia | number}}</td>\n                                        <td width='20%' class='text-right-td'>{{(dichVu.SoLuongDungLanNay * dichVu.DonGia) | number}}</td>\n                                    </tr>\n                                </ng-container>\n                                <tr>\n                                    <td colspan=\"3\" class='text-right-td'>Tổng: </td>\n                                    <td class='text-right-td'><b>{{tinhTongTienDichVuDangChon(goiDichVu.YeuCauGoiDichVuId) | number}}</b></td>\n                                </tr>\n                                <tr *ngIf=\"goiDichVu.TongTienConBaoLanhDuoc < tinhTongTienDichVuDangChon(goiDichVu.YeuCauGoiDichVuId)\">\n                                    <td colspan='4' class='text-right-td text-red' [attr.name]=\"'lbl-khong-du-bao-lanh'\">Không đủ bảo lãnh</td>\n                                </tr>\n                            </table>\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"danhSachDichVuDaChonTrongLanPopup.length == 0\">\n                        Chưa chọn dịch vụ\n                    </ng-container>\n                </div>\n            </div>\n        </kendo-splitter-pane>\n    </kendo-splitter>\n\n\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\">Hủy</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"luuDichVuChiDinh()\">Chọn</button>\n</mat-dialog-actions>\n\n\n<ng-template #detailTemplate let-dataItem>\n    <app-grid class=\"k-grid-border\" [gridColumns]=\"gridColumnsChild\" [useAddDeault]=\"false\"\n        [documentType]=\"documentType\" [useHeaderDefault]=\"true\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [pageable]=\"false\" [groups]=\"groups\" masterName=\"gridChiTietGoiDichVu\"\n        urlGetData=\"TiepNhanBenhNhan/GetDataDichVuGoiForGridAsyncUpdateView\"\n        urlGetTotalPage=\"TiepNhanBenhNhan/GetTotalDichVuGoiPageForGridAsyncUpdateView\" [dataItemParent]=\"dataItem\"\n        [additionalSearchString]=\"benhNhanId + '|' + dataItem.Id + '|' + danhSachDichVuDaChonTrongLanPopupString\">\n    </app-grid>\n    <!-- (extCheckboxSelection)=\"chonDichVuTrongGoi($event)\" [hideDetailSelectedCheckbox]=\"true\" -->\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\"\n            fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKeyGrid($event)\"\n                (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n        </div>\n\n    </div>\n</ng-template>\n\n<ng-template #tenGoiTemplate let-dataItem>\n    <div style=\"display: flex; justify-content: space-between; color: green;\">\n        <!-- <app-checkbox [disabled]=\"dataItem.TrangThai != 6 && dataItem.TrangThai != null\" (modelChange)=\"checkedChange($event, dataItem)\" [(model)]=\"dataItem.IsChecked\" \n        id=\"IsChecked{{dataItem.Id}}\"></app-checkbox>  -->\n        <span class=\"span-1-goi-marketing l\" position=\"right\" style=\"margin-left: 10px;\" title=\"{{dataItem.TenDisplay}}\"\n            kendoTooltip>\n            {{dataItem.TenDisplay}}</span>\n        <!-- <span class=\"span-2-goi-marketing\"\n            [ngStyle]=\"{'color':dataItem.TrangThai == 1 ? 'orange' : (dataItem.TrangThai == 2 ? 'green' : 'red') }\">{{dataItem.TrangThaiDisplay}}</span> -->\n        \n            <span style=\"text-align: right; color: black;\" *ngIf=\"dataItem.IsChecked\" kendoTooltip\n                title=\"{{'ĐÃ THU:' + dataItem.BenhNhanDaThanhToanDisplay + ' - CHƯA THU: ' + dataItem.ChuaThuDisplay + ' - CÒN CHO PHÉP BẢO LÃNH: ' + dataItem.ConLaiDisplay}}\">\n                ĐÃ THU:\n                <b style=\"color: green;\">{{dataItem.BenhNhanDaThanhToanDisplay}}</b>\n                -\n                CHƯA THU: <b style=\"color: orange;\">{{dataItem.ChuaThuDisplay}}</b>\n                -\n                CÒN CHO PHÉP BẢO LÃNH: <b style=\"color: red;\">{{dataItem.ConLaiDisplay}}</b>\n            </span>\n    </div>\n</ng-template>\n<ng-template #tongCongFooterTemplate let-dataItemParent=\"dataItemParent\">\n    <!-- {{test(dataItemParent)}} -->\n    <span class=\"blue\">{{dataItemParent.GiaSauChietKhau | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n<!-- <ng-template #chietKhauFooterTemplate let-dataItemParent=\"dataItemParent\">\n    CK: <span class=\"green\">{{dataItemParent.TiLeChietKhau | number}} %</span>\n</ng-template>\n<ng-template #giaGoiFooterTemplate let-dataItemParent=\"dataItemParent\">\n    Giá gói: <span class=\"red\">{{dataItemParent.GiaSauChietKhau | number:'0.2-2':'vi-VN'}}</span>\n</ng-template> -->\n\n<ng-template #checkBoxHeaderTemplate let-dataItemParent=\"dataItemParent\">\n    <input type=\"checkbox\" id=\"ckbHeader-{{dataItemParent.Id}}\" [(ngModel)]=\"dataItemParent.chonTatCa\" \n        (ngModelChange)=\"chonTatCaDichVuTrongGoi($event, dataItemParent.Id)\">\n</ng-template>\n<ng-template #checkBoxTemplate let-dataItem>\n    <input id=\"ckbItem-{{dataItem.YeuCauGoiDichVuId}}-{{dataItem.NhomDichVu}}-{{dataItem.Id}}\" type=\"checkbox\" [attr.name]=\"'ckbItem-' + dataItem.YeuCauGoiDichVuId\"\n        *ngIf=\"!(dataItem.SoLuongConLai <= 0 || !dataItem.IsActive)\" [(ngModel)]=\"dataItem.IsChecked\" class=\"ckbItemInGroup-{{dataItem.YeuCauGoiDichVuId}}-{{dataItem.TenNhomDichVu}}\"\n        (ngModelChange)=\"chonDichVu($event, dataItem)\">\n</ng-template>\n<ng-template #tongTienFooterTemplate>\n    <span>Tổng cộng:</span>\n</ng-template>\n<ng-template #nhomDichVuTemplate let-value=\"value\" let-dataItemParent=\"dataItemParent\">\n    <strong>\n        <input type=\"checkbox\" id=\"ckbGroup-{{dataItemParent.Id}}-{{value}}\" class=\"ckbGroup-{{dataItemParent.Id}} mr-2\"\n            (change)=\"chonTatCaDichVuTrongNhom($event, dataItemParent.Id, value)\" value=\"true\">\n        {{value}}\n    </strong>\n</ng-template>\n<ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n    <strong>{{rowIndex + 1}}</strong>\n</ng-template>\n<ng-template #soLuongTemplate let-dataItem>\n    <app-textboxnumeric id=\"abc-{{dataItem.Id}}\" [disabled]=\"!dataItem.IsActive || !dataItem.IsChecked\"\n        [(model)]=\"dataItem.SoLuongDungLanNay\" class=\"no-label\" label=\" \"\n        [min]=\"(!dataItem.IsActive || !dataItem.IsChecked) ? 0 : 1\"\n        [max]=\"dataItem.TenNhomDichVu == 'DỊCH VỤ KHÁM BỆNH' ? 1 : (dataItem.SoLuongConLai)\"\n        (modelChange)=\"changeSoLuongDichVu($event, dataItem)\">\n    </app-textboxnumeric>\n</ng-template>\n<ng-template #donGiaTemplate let-dataItem>\n    {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #thanhTienTemplate let-dataItem>\n    {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>THÊM GÓI DỊCH VỤ</div>\n    <!-- <button type=\"button\" mat-icon-button (click)=\"close('No answer')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button> -->\n</div>\n\n<mat-dialog-content>\n    <app-grid *ngIf=\"isGoiCoChietKhau\" [gridColumns]=\"gridCoChietKhauColumns\" [gridDataSource]=\"gridCoChietKhauData\" #goiCoChietKhau\n    [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" \n    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n    [checkboxAble]=\"false\" height=\"300\">\n</app-grid>\n\n<app-grid *ngIf=\"isGoiCoChietKhau == false\" [gridColumns]=\"gridKhongCoChietKhauColumns\" [gridDataSource]=\"gridKhongCoChietKhauData\" #goiKhongCoChietKhau\n    [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" \n    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n    [checkboxAble]=\"false\" height=\"300\">\n</app-grid>\n\n<div class=\"div-bottom\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"8px\">\n    <button type=\"button\" mat-button class=\"mr-1\" (click)=\"huy()\">Hủy</button>\n    <button type=\"button\" (click)=\"ok()\" color=\"primary\" mat-raised-button>Thêm</button>\n</div>\n\n</mat-dialog-content>\n\n\n<ng-template #noiThucHienKhongChietKhauTemplate let-dataItem>\n    <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ GIƯỜNG'\">\n        <app-combobox popupSettings=\"\" id=\"NoiThucHienPopup{{dataItem.MaDichVuId}}\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n            label=\"\" (dataForLookupChange)=\"noiThucHienChange($event, dataItem)\"\n            url=\"TiepNhanBenhNhan/GetPhongKhamDichVuGiuongKhac/?id={{dataItem.MaDichVuId}}\"\n            [(model)]=\"dataItem.NoiThucHienId\" bind=true [required]=\"true\"\n            [validationerror]=\"'NoiThucHienId' | validationerror:validationErrors\"\n            [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n            class=\"item-no-padding no-label\">\n\n            <ng-template #phongKhamTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th width=\"20%\">Phòng</th>\n                        <th width=\"60%\">SL đang thực hiện</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #phongKhamTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                        <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                        <td width=\"20%\">{{dataItem.Tong}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n    </div>\n\n    <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH'\">\n        <app-combobox popupSettings=\"\" id=\"NoiThucHienPopup{{dataItem.MaDichVuId}}\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n            label=\"\" url=\"TiepNhanBenhNhan/GetPhongKhamKhac/?id={{dataItem.MaDichVuId}}\"\n            (dataForLookupChange)=\"noiThucHienChange($event, dataItem)\" \n            [(model)]=\"dataItem.NoiThucHienId\" bind=true [required]=\"true\"\n            [validationerror]=\"'NoiThucHienId' | validationerror:validationErrors\"\n            [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n            class=\"item-no-padding no-label\">\n\n            <ng-template #phongKhamTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Phòng</th>\n                        <th width=\"40%\">Bác sĩ</th>\n                        <th width=\"20%\">Đ.khám</th>\n                        <th width=\"20%\">Tổng</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #phongKhamTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr [ngStyle]=\"{'color': dataItem.IsWarning==true?'orange':'black'}\"\n                        kendoTooltip title=\"{{dataItem.IsWarning==true?'Bác sĩ này đã khám nhiều hơn ' + dataItem.TongSoKhamGioiHan + ' người bệnh':''}}\">\n                        <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                        <td width=\"40%\">{{dataItem.TenBacSi}}</td>\n                        <td width=\"20%\">{{dataItem.DangKham}}</td>\n                        <td width=\"20%\">{{dataItem.Tong}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n    </div>\n\n    <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KỸ THUẬT'\">\n        <app-combobox popupSettings=\"\" id=\"NoiThucHienPopup{{dataItem.MaDichVuId}}\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n            label=\"\" url=\"TiepNhanBenhNhan/GetPhongKhamKyThuatKhac/?id={{dataItem.MaDichVuId}}\"\n            (dataForLookupChange)=\"noiThucHienChange($event, dataItem)\"\n            [(model)]=\"dataItem.NoiThucHienId\" bind=true [required]=\"true\"\n            [validationerror]=\"'NoiThucHienId' | validationerror:validationErrors\"\n            [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\"\n            class=\"item-no-padding no-label\">\n\n            <ng-template #phongKhamTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                            <th width=\"20%\">Mã</th>\n                            <th width=\"20%\">Phòng</th>\n                            <th width=\"60%\">SL đang thực hiện</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #phongKhamTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.MaPhong}}</td>\n                        <td width=\"60%\">{{dataItem.TenPhong}}</td>\n                        <td width=\"20%\">{{dataItem.Tong}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n    </div>\n</ng-template>\n\n<ng-template #duocHuongBHYTTemplate let-dataItem>\n    <app-checkbox [disabled]=\"true\" [(model)]=\"dataItem.DuocHuongBHYTPopup\" \n        id=\"DuocHuongBHYTPopup{{dataItem.MaDichVuId}}{{dataItem.Nhom}}\"\n        label=\"Có\"></app-checkbox>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/tai-kham/tai-kham.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/tai-kham/tai-kham.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-grid baseRoute=\"/danh-sanh-tiep-nhan\" [gridColumns]=\"gridColumns\"\n        [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"true\" [useActionDefault]=\"false\"\n        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataGrid\"\n        [urlGetTotalPage]=\"urlGetTotalPageGrid\" [additionalSearchString]=\"BenhNhan+''\" [autoHeight]=true> \n    </app-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>THẺ NGƯỜI BỆNH</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In thẻ người bệnh\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>VÒNG ĐEO TAY</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\" background=\"transparent\" style=\"\n        background-position: center; background-size: contain;background-repeat: no-repeat; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAAxYCAYAAABqxbsbAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAEjHnZZ3VFTXFofPvXd6oc0wAlKG3rvAANJ7k15FYZgZYCgDDjM0sSGiAhFFRJoiSFDEgNFQJFZEsRAUVLAHJAgoMRhFVCxvRtaLrqy89/Ly++Osb+2z97n77L3PWhcAkqcvl5cGSwGQyhPwgzyc6RGRUXTsAIABHmCAKQBMVka6X7B7CBDJy82FniFyAl8EAfB6WLwCcNPQM4BOB/+fpFnpfIHomAARm7M5GSwRF4g4JUuQLrbPipgalyxmGCVmvihBEcuJOWGRDT77LLKjmNmpPLaIxTmns1PZYu4V8bZMIUfEiK+ICzO5nCwR3xKxRoowlSviN+LYVA4zAwAUSWwXcFiJIjYRMYkfEuQi4uUA4EgJX3HcVyzgZAvEl3JJS8/hcxMSBXQdli7d1NqaQffkZKVwBALDACYrmcln013SUtOZvBwAFu/8WTLi2tJFRbY0tba0NDQzMv2qUP91829K3NtFehn4uWcQrf+L7a/80hoAYMyJarPziy2uCoDOLQDI3fti0zgAgKSobx3Xv7oPTTwviQJBuo2xcVZWlhGXwzISF/QP/U+Hv6GvvmckPu6P8tBdOfFMYYqALq4bKy0lTcinZ6QzWRy64Z+H+B8H/nUeBkGceA6fwxNFhImmjMtLELWbx+YKuGk8Opf3n5r4D8P+pMW5FonS+BFQY4yA1HUqQH7tBygKESDR+8Vd/6NvvvgwIH554SqTi3P/7zf9Z8Gl4iWDm/A5ziUohM4S8jMX98TPEqABAUgCKpAHykAd6ABDYAasgC1wBG7AG/iDEBAJVgMWSASpgA+yQB7YBApBMdgJ9oBqUAcaQTNoBcdBJzgFzoNL4Bq4AW6D+2AUTIBnYBa8BgsQBGEhMkSB5CEVSBPSh8wgBmQPuUG+UBAUCcVCCRAPEkJ50GaoGCqDqqF6qBn6HjoJnYeuQIPQXWgMmoZ+h97BCEyCqbASrAUbwwzYCfaBQ+BVcAK8Bs6FC+AdcCXcAB+FO+Dz8DX4NjwKP4PnEIAQERqiihgiDMQF8UeikHiEj6xHipAKpAFpRbqRPuQmMorMIG9RGBQFRUcZomxRnqhQFAu1BrUeVYKqRh1GdaB6UTdRY6hZ1Ec0Ga2I1kfboL3QEegEdBa6EF2BbkK3oy+ib6Mn0K8xGAwNo42xwnhiIjFJmLWYEsw+TBvmHGYQM46Zw2Kx8lh9rB3WH8vECrCF2CrsUexZ7BB2AvsGR8Sp4Mxw7rgoHA+Xj6vAHcGdwQ3hJnELeCm8Jt4G749n43PwpfhGfDf+On4Cv0CQJmgT7AghhCTCJkIloZVwkfCA8JJIJKoRrYmBRC5xI7GSeIx4mThGfEuSIemRXEjRJCFpB+kQ6RzpLuklmUzWIjuSo8gC8g5yM/kC+RH5jQRFwkjCS4ItsUGiRqJDYkjiuSReUlPSSXK1ZK5kheQJyeuSM1J4KS0pFymm1HqpGqmTUiNSc9IUaVNpf+lU6RLpI9JXpKdksDJaMm4ybJkCmYMyF2TGKQhFneJCYVE2UxopFykTVAxVm+pFTaIWU7+jDlBnZWVkl8mGyWbL1sielh2lITQtmhcthVZKO04bpr1borTEaQlnyfYlrUuGlszLLZVzlOPIFcm1yd2WeydPl3eTT5bfJd8p/1ABpaCnEKiQpbBf4aLCzFLqUtulrKVFS48vvacIK+opBimuVTyo2K84p6Ss5KGUrlSldEFpRpmm7KicpFyufEZ5WoWiYq/CVSlXOavylC5Ld6Kn0CvpvfRZVUVVT1Whar3qgOqCmrZaqFq+WpvaQ3WCOkM9Xr1cvUd9VkNFw08jT6NF454mXpOhmai5V7NPc15LWytca6tWp9aUtpy2l3audov2Ax2yjoPOGp0GnVu6GF2GbrLuPt0berCehV6iXo3edX1Y31Kfq79Pf9AAbWBtwDNoMBgxJBk6GWYathiOGdGMfI3yjTqNnhtrGEcZ7zLuM/5oYmGSYtJoct9UxtTbNN+02/R3Mz0zllmN2S1zsrm7+QbzLvMXy/SXcZbtX3bHgmLhZ7HVosfig6WVJd+y1XLaSsMq1qrWaoRBZQQwShiXrdHWztYbrE9Zv7WxtBHYHLf5zdbQNtn2iO3Ucu3lnOWNy8ft1OyYdvV2o/Z0+1j7A/ajDqoOTIcGh8eO6o5sxybHSSddpySno07PnU2c+c7tzvMuNi7rXM65Iq4erkWuA24ybqFu1W6P3NXcE9xb3Gc9LDzWepzzRHv6eO7yHPFS8mJ5NXvNelt5r/Pu9SH5BPtU+zz21fPl+3b7wX7efrv9HqzQXMFb0ekP/L38d/s/DNAOWBPwYyAmMCCwJvBJkGlQXlBfMCU4JvhI8OsQ55DSkPuhOqHC0J4wybDosOaw+XDX8LLw0QjjiHUR1yIVIrmRXVHYqLCopqi5lW4r96yciLaILoweXqW9KnvVldUKq1NWn46RjGHGnIhFx4bHHol9z/RnNjDn4rziauNmWS6svaxnbEd2OXuaY8cp40zG28WXxU8l2CXsTphOdEisSJzhunCruS+SPJPqkuaT/ZMPJX9KCU9pS8Wlxqae5Mnwknm9acpp2WmD6frphemja2zW7Fkzy/fhN2VAGasyugRU0c9Uv1BHuEU4lmmfWZP5Jiss60S2dDYvuz9HL2d7zmSue+63a1FrWWt78lTzNuWNrXNaV78eWh+3vmeD+oaCDRMbPTYe3kTYlLzpp3yT/LL8V5vDN3cXKBVsLBjf4rGlpVCikF84stV2a9021DbutoHt5turtn8sYhddLTYprih+X8IqufqN6TeV33zaEb9joNSydP9OzE7ezuFdDrsOl0mX5ZaN7/bb3VFOLy8qf7UnZs+VimUVdXsJe4V7Ryt9K7uqNKp2Vr2vTqy+XeNc01arWLu9dn4fe9/Qfsf9rXVKdcV17w5wD9yp96jvaNBqqDiIOZh58EljWGPft4xvm5sUmoqbPhziHRo9HHS4t9mqufmI4pHSFrhF2DJ9NProje9cv+tqNWytb6O1FR8Dx4THnn4f+/3wcZ/jPScYJ1p/0Pyhtp3SXtQBdeR0zHYmdo52RXYNnvQ+2dNt293+o9GPh06pnqo5LXu69AzhTMGZT2dzz86dSz83cz7h/HhPTM/9CxEXbvUG9g5c9Ll4+ZL7pQt9Tn1nL9tdPnXF5srJq4yrndcsr3X0W/S3/2TxU/uA5UDHdavrXTesb3QPLh88M+QwdP6m681Lt7xuXbu94vbgcOjwnZHokdE77DtTd1PuvriXeW/h/sYH6AdFD6UeVjxSfNTws+7PbaOWo6fHXMf6Hwc/vj/OGn/2S8Yv7ycKnpCfVEyqTDZPmU2dmnafvvF05dOJZ+nPFmYKf5X+tfa5zvMffnP8rX82YnbiBf/Fp99LXsq/PPRq2aueuYC5R69TXy/MF72Rf3P4LeNt37vwd5MLWe+x7ys/6H7o/ujz8cGn1E+f/gUDmPP8usTo0wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAh7lJREFUeF7t3QeYZFtZNmzmNwfMOaJiwIgBRQwo5oCKOQvmnPAzK+aMiihmURRFUOGYxSyKYsQIKoqIgjmBAdP532emN9bp0zOnu6eraj/d931dL9Vdh6naVb3rqbXXXmvtSzfeeOOtANbu/zu4BVg1YQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUOHJQ6KVLl+4+N7e58hvA1j12suhBBz8f6Wph9XNzc+crvwFs3Q2TRe908PORbimsfmnqcbkPYAteeeoOU7cYVrdKWB2ukbDKDzkcBNiWj59K1jzsqCzaLB3sQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVUEFZABWEFVBBWQAVhBVQQVkAFYQVU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CsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqggrIAKwgqoIKyACsIKqCCsgArCCqhw1mH1hlN/MfXoqe+e+ripl5q6yF5p6lOnfmDq96eePPXXU4+d+pGpz5l67amL7IWmPnTqAVO/MfXEqb+fetzUz0195dRbTz3T1EX1nFPvOnW/qV+a+tOpf5z6s6lfnvqmqfeZeu6p8+nGG2+8WY3sIPnh7vnlBN5kKv/ucP3o1J2mLpJ3nMpOdNT7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v5lcS42GltWmhNByMYfjVIIpLY62MULXI4sa5gKpm4crt1RZpSDrZl0UCewMx1guPHqcypzDLFp3VodFa5fATi4sa3MdrpN2NVyIw8Cj5PAmO1vO6GX07dK0TwsqhzHpaE7/Qj64F1X65dISfchUWlWb4ZUzWT8zlY7n15q6qNKqfJepTO/KihvL2LVUWhK/OvW1U2ldXZSQOiyhlaOvjLvLl9oyaFtYXYc1LPm7dt6jW5YzrBc1mI4r/XgnHSZz7LBa6xpNZymdnlyb9+iWZdxU+kO5uhzJbK3v9yKEFXAOCCuggrACKggroIKwAioIK6CCsAIqCCuggrACKggroIKwAioIK6CCsAIqCCuggrACKggroIKwAioIK6CCsAIqCCuggrACKggroIKwAioIK6CCsAIqCCuggrACKggroIKwAioIK6CCsAIqCCuggrACKggroIKwAioIK6CCsAIqCCuggrACKggroIKwAioIK6CCsAIqCCuggrACKly68cYbD378P5cuXfq5ubnz1D2mvj33HdMrTX3c1N9N/f7Uo6YeP3XR3W7q9aby/jzvVL4k/nHqcVO/PvXoqf+dushedOoNpl516gWnnn0q79ETp/L+PHLqaVMX2XNPvf7Ua0y9+NRzTT1l6slTvz31y1P/MNXk46e+auqGyaJ3unzP1SSsDtdIWOWHu+eXE3iTqfy7zfqNqY+Yerapi+R5pj596k+mDr8nh+tJU186lQ/sRfKMU+879StTR70vm/XUqe+cuv3URXOXqRumEtZHvTdL/dfUj0+97dSlqQYJq2z7w47Kos06+s7Th9XrTP3uVFpW+feblW/Id5k679Jq+qiptAoOvwf5BkwrIfXnB/dt1n9M3WvqWabOuzef+qOpw+9B3rffm8p7lP+eD+Dh/88Dp15k6rx7xamfnjr8+v9t6rFTeY8eM5UgP/z/SSvr1afWbm9htSnN1A+b+rWpPNZS9586r62s55/6ianN15vf33Mq/+2wW0/ddeohUzkMXP5NWqO3mTqPnmHqy6c236M/mPqYqZeZOuyZpu409dVTmx/Kv5l6s6nz6gOm/nVqeb1/PfUFUzkEzHu4KV+QrzL1WVN/MbX8m/+c+uipNVtFWG16h6knTOUxU780lePv8yTh8sdTy2tMH8Idp44r/Vk/O7X8+7+deq2p8yT9UD80tfkacxh4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')\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\" typeSize=\"10.5in 0.95in\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tY2hvLXF1eWV0L2Rhbmgtc2FjaC1jaG8ta2hhbS1jaG8tcXV5ZXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: DanhSachChoKhamChoQuyetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamChoQuyetComponent", function() { return DanhSachChoKhamChoQuyetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model */ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");





let DanhSachChoKhamChoQuyetComponent = class DanhSachChoKhamChoQuyetComponent {
    constructor(data, dialog, apiService, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.apiService = apiService;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.quetThongTinBenhNhan(this.data);
    }
    quetThongTinBenhNhan(model) {
        this.apiService.post("BHYT/GetLichSuKhamChuaBenh", model).subscribe(resultData => {
            if (resultData != undefined) {
                //this.setValueBHYT(resultData);
                this.dialogRef.close(resultData);
            }
        }, (err) => {
            //console.log("err = ", err);
            this.dialogRef.close(null);
        });
    }
};
DanhSachChoKhamChoQuyetComponent.ctorParameters = () => [
    { type: _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_3__["ThongTinBenhNhan"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
DanhSachChoKhamChoQuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-cho-kham-cho-quyet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-kham-cho-quyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-kham-cho-quyet.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DanhSachChoKhamChoQuyetComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-create/danh-sach-cho-kham-create.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-create/danh-sach-cho-kham-create.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tY3JlYXRlL2Rhbmgtc2FjaC1jaG8ta2hhbS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-create/danh-sach-cho-kham-create.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-create/danh-sach-cho-kham-create.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: DanhSachChoKhamCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamCreateComponent", function() { return DanhSachChoKhamCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DanhSachChoKhamCreateComponent = class DanhSachChoKhamCreateComponent {
    constructor() { }
    ngOnInit() {
    }
};
DanhSachChoKhamCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-cho-kham-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-kham-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-create/danh-sach-cho-kham-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-kham-create.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-create/danh-sach-cho-kham-create.component.scss")).default]
    })
], DanhSachChoKhamCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-error/danh-sach-cho-kham-error.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-error/danh-sach-cho-kham-error.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tZXJyb3IvZGFuaC1zYWNoLWNoby1raGFtLWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-error/danh-sach-cho-kham-error.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-error/danh-sach-cho-kham-error.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: DanhSachChoKhamErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamErrorComponent", function() { return DanhSachChoKhamErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");



let DanhSachChoKhamErrorComponent = class DanhSachChoKhamErrorComponent {
    constructor() { }
    ngOnInit() {
        this.errorMessage = src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_2__["TiepNhanBenhNhanMessage"].MessageSaiThongTinBenhNhan;
    }
};
DanhSachChoKhamErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-cho-kham-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-kham-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-error/danh-sach-cho-kham-error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-kham-error.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-error/danh-sach-cho-kham-error.component.scss")).default]
    })
], DanhSachChoKhamErrorComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL2Rhbmgtc2FjaC1jaG8ta2hhbS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGllcC1uaGFuLWJlbmgtbmhhblxcZGFuaC1zYWNoLWNoby1raGFtXFxkYW5oLXNhY2gtY2hvLWtoYW0tbGlzdFxcZGFuaC1zYWNoLWNoby1raGFtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tbGlzdC9kYW5oLXNhY2gtY2hvLWtoYW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tbGlzdC9kYW5oLXNhY2gtY2hvLWtoYW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWZvcm0td3JhcHBlciAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbn0iLCIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: DanhSachChoKhamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamListComponent", function() { return DanhSachChoKhamListComponent; });
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
/* harmony import */ var _danh_sach_cho_kham_pdf_danh_sach_cho_kham_pdf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../danh-sach-cho-kham.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-block */ "./node_modules/@iconify/icons-ic/twotone-block.js");
/* harmony import */ var _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _ho_so_benh_an_popup_ho_so_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../ho-so-benh-an-popup/ho-so-benh-an-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.ts");
/* harmony import */ var _the_benh_nhan_popup_the_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../the-benh-nhan-popup/the-benh-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.ts");
/* harmony import */ var _vong_deo_tay_popup_vong_deo_tay_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../vong-deo-tay-popup/vong-deo-tay-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.ts");
/* harmony import */ var _nghi_huong_bhxh_tiep_nhan_popup_nghi_huong_bhxh_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _in_phieu_dang_ky_kham_popup_in_phieu_dang_ky_kham_popup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _xem_truoc_bang_ke_chi_phi_poup_xem_truoc_bang_ke_chi_phi_poup_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.ts");




































let DanhSachChoKhamListComponent = class DanhSachChoKhamListComponent {
    constructor(apiService, authService, router, notificationService, dialog, route, location) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.route = route;
        this.location = location;
        this.expression = false;
        this.gridColumns = [];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icBlock = _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_29___default.a;
        this.soPhanTramHuongBHYT = null;
        this._gridColumns = [];
        this.groups = [{ field: "Khoa" }];
        this.showCancelSearch = false;
        this.isDisabledExport = false;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.sort = [
            {
                field: "ThoiDiemTiepNhan",
                dir: "desc",
            },
        ];
        this.baseRoute = "/danh-sach-tiep-nhan";
        this.isScanF1 = false;
        this.holdQuery = null;
        this.timKiemThongTinBenhNhan = {};
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.addtionStringDefault = null;
    }
    ngOnInit() {
        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        }
        else {
            this.hostingName = "https://" + window.location.host;
        }
        this.danhSachChoKham = new _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_10__["DanhSachChoKham"]();
        let dateNow = new Date();
        this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null) {
            this.danhSachChoKham.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.danhSachChoKham.FromDate = null;
        }
        if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null) {
            this.danhSachChoKham.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.danhSachChoKham.ToDate = null;
        }
        var queryString = JSON.stringify(this.danhSachChoKham);
        this.addtionStringDefault = queryString;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhSachChoKham;
        this.backWithSearch();
        this.gridColumns = [
            {
                Field: "MaYeuCauTiepNhan",
                Title: "Mã TN",
                Width: 100,
                Sortable: true,
                Template: this.chiTietTemplate
            },
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 100, Sortable: true },
            { Field: "HoTen", Title: "Tên Người Bệnh", Width: 180, Sortable: true },
            { Field: "NamSinh", Title: "Năm Sinh", Width: 135, Sortable: true, Template: this.hienThiNgayThangNamTemplate },
            { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 150, Sortable: true },
            { Field: "TenNhanVienTiepNhan", Title: "Người tiếp nhận", Width: 180, Sortable: true },
            {
                Field: "ThoiDiemTiepNhan",
                Title: "Tiếp Nhận Lúc",
                Width: 190,
                Sortable: true,
                Template: this.thoiDiemTiepNhanTemplate,
            },
            {
                Field: "TrieuChungTiepNhan",
                Title: "Lý Do Khám Bệnh",
                Width: 145,
                Sortable: true,
            },
            { Field: "DoiTuong", Title: "Đối Tượng", Width: 140, Sortable: true },
            {
                Field: "Action",
                Title: "",
                Width: 50,
                Template: this.trangThaiTemplate,
            },
        ];
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_32__["LocalStorageHelper"].getItem("additionalSearchStringDSTN");
                if (additionalSearchString != null) {
                    this.danhSachChoKham = JSON.parse(additionalSearchString);
                    if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != undefined && this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null && this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != "") {
                        this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = new Date(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat);
                    }
                    else {
                        this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = null;
                    }
                    if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != undefined && this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null && this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != "") {
                        this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = new Date(this.danhSachChoKham.ThoiDiemTiepNhanDenFormat);
                    }
                    else {
                        this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = null;
                    }
                    this.addtionStringDefault = additionalSearchString;
                    this.gridChild.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_32__["LocalStorageHelper"].removeItem("additionalSearchStringDSTN");
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.TimkiemNangCao();
        }
    }
    clearSearch() {
        this.searchString = null;
        this.danhSachChoKham.SearchString = null;
        this.gridChild.search();
    }
    Timkiem() {
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        if (this.searchString != null) {
            QueryString = this.searchString;
        }
        this.gridChild.searchString = QueryString;
        this.gridChild.search();
    }
    TimkiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null) {
            this.danhSachChoKham.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.danhSachChoKham.FromDate = null;
        }
        if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null) {
            this.danhSachChoKham.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.danhSachChoKham.ToDate = null;
        }
        var queryString = JSON.stringify(this.danhSachChoKham);
        //this.gridChild.searchString = this.searchString;
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_32__["LocalStorageHelper"].setItem("additionalSearchStringDSTN", queryString);
        this.gridChild.search();
    }
    searchChanges(event) {
        var self = this;
        if (this.timeoutSearchChange != null) {
            clearTimeout(this.timeoutSearchChange);
            this.timeoutSearchChange = null;
        }
        this.timeoutSearchChange = setTimeout(function () {
            if (event !== undefined && event !== null && event.endsWith("@")) {
                var dataTimKiem = event.split("|");
                if (dataTimKiem.length > 1) {
                    self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                }
                else {
                    self.searchString = event.slice(0, -1);
                    self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = event.slice(0, -1);
                }
                self.getThongTinYeuCauBenhNhan(self.timKiemThongTinBenhNhan);
            }
        }, 100);
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            // self.gridChild._additionalSearchString = null;
            self.TimkiemNangCao();
        }
    }
    thoiDiemTNChange() {
        this.TimkiemNangCao();
    }
    getSharedPrintForm(id) {
        return new Promise((resolve) => {
            this.apiService
                .get("TiepNhanBenhNhan/InPhieuKhamBenh?id=" +
                id +
                "&hostingName=" +
                this.hostingName)
                .subscribe((resultData) => {
                // resolve(resultData);
                let dialogRef = this.dialog.open(_in_phieu_dang_ky_kham_popup_in_phieu_dang_ky_kham_popup_component__WEBPACK_IMPORTED_MODULE_31__["InPhieuDangKyKhamPopupComponent"], {
                    width: '1000px',
                    height: 'auto',
                    data: { Model: resultData }
                }).afterClosed().subscribe(result => {
                });
            });
        });
    }
    edit(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Update)) {
            this.router.navigate(["/danh-sach-tiep-nhan" + "/chinh-sua/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    deleteTinhTrang(id) {
        let comfirm = "hủy";
        var self = this;
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Update)) {
            this.dialog
                .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmComponent"], {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].MessLockTemplate, [
                        comfirm,
                        "người bệnh chờ khám",
                    ]),
                },
            })
                .afterClosed()
                .subscribe((result) => {
                /* result is a string:Yes,No,No answer*/
                if (result == "Yes") {
                    self.apiService
                        .post("DanhSachChoKham/HuyBenhNhanChoKham?id=" + id)
                        .subscribe(() => {
                        self.gridChild.search();
                    }, (err) => {
                        self.notificationService.showError(err.Message);
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    InBangKeChiPhiKhamBenh(id) {
        this.dialog.open(_xem_truoc_bang_ke_chi_phi_poup_xem_truoc_bang_ke_chi_phi_poup_component__WEBPACK_IMPORTED_MODULE_34__["XemTruocBangKeChiPhiPopupComponent"], {
            disableClose: false,
            width: "1000px",
            data: id,
        })
            .afterClosed()
            .subscribe(result => { });
    }
    InHoSoKhamBenh(id, laPhieuKhamBenh) {
        // this.dialog.open(HoSoBenhAnPopupComponent, {
        //   disableClose: true,
        //   width: "1200px",
        //   data: { id, laPhieuKhamBenh },
        // });
        this.apiService.get("DanhSachChoKham/InPhieuCacDichVuKhamBenh?yeuCauTiepNhanId=" + id
            + "&hostingName=" + this.hostingName
            + "&header=false"
            + "&laPhieuKhamBenh=" + laPhieuKhamBenh).subscribe(resultData => {
            if (resultData != null) {
                this.dialog.open(_ho_so_benh_an_popup_ho_so_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_25__["HoSoBenhAnPopupComponent"], {
                    disableClose: true,
                    width: "1000px",
                    data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                });
            }
        }, (err) => {
        });
    }
    InTheBenhNhan(id) {
        this.dialog.open(_the_benh_nhan_popup_the_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_26__["TheBenhNhanPopupComponent"], {
            disableClose: true,
            width: "466px",
            data: id,
        });
    }
    InVongDeoTay(id) {
        this.dialog.open(_vong_deo_tay_popup_vong_deo_tay_popup_component__WEBPACK_IMPORTED_MODULE_27__["VongDeoTayPopupComponent"], {
            disableClose: true,
            height: "780px",
            width: "200px",
            data: id,
        });
    }
    InGiayNghiHuongBHXH(dataItem) {
        this.dialog.open(_nghi_huong_bhxh_tiep_nhan_popup_nghi_huong_bhxh_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_28__["NghiHuongBhxhTiepNhanPopupComponent"], {
            disableClose: true,
            width: "700px",
            data: dataItem,
        });
    }
    changeQR($event) {
        if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
            this.modelQRCode = $event;
            var dataTimKiem = $event.split("|");
            if (dataTimKiem.length > 1) {
                this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
            }
            else {
                this.searchString = $event.slice(0, -1);
                this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
            }
            this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
        }
        else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScanF1 = false;
    }
    QuetMaQRCodeClick() {
        let elementBarcode = document.getElementById("barcodeActive");
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }
    getThongTinYeuCauBenhNhan(timKiemThongTinBenhNhan) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Update)) {
            this.apiService
                .post("DanhSachChoKham/GetThongTinYeuCauTiepNhan/", timKiemThongTinBenhNhan)
                .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                    if (resultData !== 0) {
                        this.router.navigate([
                            "/danh-sach-tiep-nhan" + "/chinh-sua/" + resultData,
                        ]);
                    }
                }
                else {
                    this.notificationService.showError("Không tìm thấy thông tin tiếp nhận cần tìm.");
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    keyEvent(event) {
        if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
            event.preventDefault();
            this.QuetMaQRCodeClick();
        }
    }
    XuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_30__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("DanhSachChoKham/ExportDanhSachTiepNhan", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "DSTiepNhan" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    //BVHD-3761
    //=======================================================================================================
    InPhieuXN(id) {
        this.apiService
            .get("TiepNhanBenhNhan/InPhieuXetNghiemCovid?id=" +
            id +
            "&hostingName=" +
            this.hostingName)
            .subscribe((resultData) => {
            // resolve(resultData);
            let dialogRef = this.dialog.open(_in_phieu_dang_ky_kham_popup_in_phieu_dang_ky_kham_popup_component__WEBPACK_IMPORTED_MODULE_31__["InPhieuDangKyKhamPopupComponent"], {
                width: '1000px',
                height: 'auto',
                data: { Model: resultData }
            }).afterClosed().subscribe(result => {
            });
        });
    }
};
DanhSachChoKhamListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_20__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_33__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DanhSachChoKhamListComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], DanhSachChoKhamListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("trangThaiTemplate", { static: true })
], DanhSachChoKhamListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thoiDiemTiepNhanTemplate", { static: true })
], DanhSachChoKhamListComponent.prototype, "thoiDiemTiepNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiTietTemplate', { static: true })
], DanhSachChoKhamListComponent.prototype, "chiTietTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hienThiNgayThangNamTemplate', { static: true })
], DanhSachChoKhamListComponent.prototype, "hienThiNgayThangNamTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_danh_sach_cho_kham_pdf_danh_sach_cho_kham_pdf_component__WEBPACK_IMPORTED_MODULE_8__["DanhSachChoKhamPdfComponent"], { static: true })
], DanhSachChoKhamListComponent.prototype, "layoutPrint", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], { static: false })
], DanhSachChoKhamListComponent.prototype, "trigger", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], DanhSachChoKhamListComponent.prototype, "keyEvent", null);
DanhSachChoKhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-danh-sach-cho-kham-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-kham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-kham-list.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.scss")).default]
    })
], DanhSachChoKhamListComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\n.header, .header-space,\n.footer, .footer-space {\n  height: 100px;\n}\n\n.header {\n  position: fixed;\n  top: 0;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n}\n\n@media screen {\n  :host {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL2Rhbmgtc2FjaC1jaG8ta2hhbS1wZGYvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxkYW5oLXNhY2gtY2hvLWtoYW1cXGRhbmgtc2FjaC1jaG8ta2hhbS1wZGZcXGRhbmgtc2FjaC1jaG8ta2hhbS1wZGYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tcGRmL2Rhbmgtc2FjaC1jaG8ta2hhbS1wZGYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGFBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL2Rhbmgtc2FjaC1jaG8ta2hhbS1wZGYvZGFuaC1zYWNoLWNoby1raGFtLXBkZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmhlYWRlciwgLmhlYWRlci1zcGFjZSxcbi5mb290ZXIsIC5mb290ZXItc3BhY2Uge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiB7XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwidGFibGUsIHRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uaGVhZGVyLCAuaGVhZGVyLXNwYWNlLFxuLmZvb3RlciwgLmZvb3Rlci1zcGFjZSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIHtcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: DanhSachChoKhamPdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamPdfComponent", function() { return DanhSachChoKhamPdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");



let DanhSachChoKhamPdfComponent = class DanhSachChoKhamPdfComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.danhSachChoKham = {};
    }
    ngOnInit() {
    }
};
DanhSachChoKhamPdfComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
DanhSachChoKhamPdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-cho-kham-pdf',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-kham-pdf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-kham-pdf.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.scss")).default]
    })
], DanhSachChoKhamPdfComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sub-title {\n  font-size: 15px;\n  border-bottom: 1px solid var(--foreground-divider);\n  padding-bottom: 0 !important;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: var(--text-color);\n  text-transform: uppercase;\n}\n\ntable tr {\n  border-bottom: 1px solid #ebeced;\n}\n\ntable tr td {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL2Rhbmgtc2FjaC1jaG8ta2hhbS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRpZXAtbmhhbi1iZW5oLW5oYW5cXGRhbmgtc2FjaC1jaG8ta2hhbVxcZGFuaC1zYWNoLWNoby1raGFtLXBvcHVwXFxkYW5oLXNhY2gtY2hvLWtoYW0tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tcG9wdXAvZGFuaC1zYWNoLWNoby1raGFtLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtEQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tcG9wdXAvZGFuaC1zYWNoLWNoby1raGFtLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWNlZDtcbn1cblxudGFibGUgdHIgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xufSIsIi5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRhYmxlIHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmVjZWQ7XG59XG5cbnRhYmxlIHRyIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: DanhSachChoKhamPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamPopupComponent", function() { return DanhSachChoKhamPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");





let DanhSachChoKhamPopupComponent = class DanhSachChoKhamPopupComponent {
    constructor(data, dialog) {
        this.data = data;
        this.dialog = dialog;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
    }
    ngOnInit() {
        console.log(this.data);
    }
    close() {
        this.dialog.closeAll();
    }
};
DanhSachChoKhamPopupComponent.ctorParameters = () => [
    { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["TiepNhanBenhNhanViewModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DanhSachChoKhamPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-cho-kham-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-kham-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-kham-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DanhSachChoKhamPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-routing.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DanhSachChoKhamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamRoutingModule", function() { return DanhSachChoKhamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _danh_sach_cho_kham_list_danh_sach_cho_kham_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danh-sach-cho-kham-list/danh-sach-cho-kham-list.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _danh_sach_cho_kham_pdf_danh_sach_cho_kham_pdf_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.ts");
/* harmony import */ var _danh_sach_cho_kham_update_danh_sach_cho_kham_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./danh-sach-cho-kham-update/danh-sach-cho-kham-update.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.ts");









const routes = [
    {
        path: '',
        component: _danh_sach_cho_kham_list_danh_sach_cho_kham_list_component__WEBPACK_IMPORTED_MODULE_3__["DanhSachChoKhamListComponent"],
        data: {
            title: 'Danh Sách Tiếp Nhận',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachChoKham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'pdf',
        component: _danh_sach_cho_kham_pdf_danh_sach_cho_kham_pdf_component__WEBPACK_IMPORTED_MODULE_7__["DanhSachChoKhamPdfComponent"],
        data: {
            title: 'Danh Sách Tiếp Nhận PDF',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachChoKham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _danh_sach_cho_kham_update_danh_sach_cho_kham_update_component__WEBPACK_IMPORTED_MODULE_8__["DanhSachChoKhamUpdateComponent"],
        data: {
            title: 'Chỉnh sửa yêu cầu khám bệnh',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachChoKham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
];
let DanhSachChoKhamRoutingModule = class DanhSachChoKhamRoutingModule {
};
DanhSachChoKhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DanhSachChoKhamRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tc2hhcmVkL2Rhbmgtc2FjaC1jaG8ta2hhbS1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: DanhSachChoKhamSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamSharedComponent", function() { return DanhSachChoKhamSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DanhSachChoKhamSharedComponent = class DanhSachChoKhamSharedComponent {
    constructor() { }
    ngOnInit() {
    }
};
DanhSachChoKhamSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-cho-kham-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-kham-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-kham-shared.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component.scss")).default]
    })
], DanhSachChoKhamSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ten-dich-vu-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.button-them-goi {\n  width: 20px;\n  height: 20px;\n  margin-top: 5px;\n}\n\n.mat-icon-them-goi {\n  margin-top: -20px;\n  margin-left: -2px;\n}\n\n.xac-nhan-ng-template {\n  display: inherit;\n  white-space: nowrap;\n}\n\n.danh-sach-goi {\n  color: orange;\n  text-decoration: underline;\n}\n\n.div-danh-sach-goi {\n  padding-top: 5px !important;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n\n.header-grid {\n  width: 100%;\n  height: auto;\n  background: #ffe0b2;\n  padding: 10px 10px 10px 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.header-span-grid {\n  width: 80%;\n  padding: 10px 10px 10px 10px;\n  font-weight: bold;\n  color: #005dab;\n  text-transform: uppercase;\n  display: inline-block;\n}\n\n.thong-tin-tai-khoan-benh-nhan {\n  float: right;\n  font-weight: normal;\n}\n\n.styleTinhTong {\n  border: 1px solid #ccc;\n  padding: 15px;\n  background: #e3f2fd;\n  text-align: right;\n  margin: 10px -17px -17px -17px;\n}\n\n.so-tuoi {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.div-voucher {\n  padding: 0 !important;\n}\n\n.icon-info-status-grid {\n  position: absolute;\n  right: 0;\n  background-color: white;\n  height: 15px;\n  top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL2Rhbmgtc2FjaC1jaG8ta2hhbS11cGRhdGUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxkYW5oLXNhY2gtY2hvLWtoYW1cXGRhbmgtc2FjaC1jaG8ta2hhbS11cGRhdGVcXGRhbmgtc2FjaC1jaG8ta2hhbS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9kYW5oLXNhY2gtY2hvLWtoYW0tdXBkYXRlL2Rhbmgtc2FjaC1jaG8ta2hhbS11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9kYW5oLXNhY2gtY2hvLWtoYW0vZGFuaC1zYWNoLWNoby1raGFtLXVwZGF0ZS9kYW5oLXNhY2gtY2hvLWtoYW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlbi1kaWNoLXZ1LWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1dHRvbi10aGVtLWdvaSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1hdC1pY29uLXRoZW0tZ29pIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuXG4ueGFjLW5oYW4tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGFuaC1zYWNoLWdvaSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZGl2LWRhbmgtc2FjaC1nb2kge1xuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uaGVhZGVyLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZlMGIyO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhlYWRlci1zcGFuLWdyaWQge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRob25nLXRpbi10YWkta2hvYW4tYmVuaC1uaGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uc3R5bGVUaW5oVG9uZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDEwcHggLTE3cHggLTE3cHggLTE3cHg7XG59XG5cbi5zby10dW9pIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXYtdm91Y2hlciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmljb24taW5mby1zdGF0dXMtZ3JpZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMnB4O1xufSIsIi50ZW4tZGljaC12dS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idXR0b24tdGhlbS1nb2kge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tYXQtaWNvbi10aGVtLWdvaSB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBtYXJnaW4tbGVmdDogLTJweDtcbn1cblxuLnhhYy1uaGFuLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRhbmgtc2FjaC1nb2kge1xuICBjb2xvcjogb3JhbmdlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmRpdi1kYW5oLXNhY2gtZ29pIHtcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmhlYWRlci1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZTBiMjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkZXItc3Bhbi1ncmlkIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50aG9uZy10aW4tdGFpLWtob2FuLWJlbmgtbmhhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnN0eWxlVGluaFRvbmcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAxMHB4IC0xN3B4IC0xN3B4IC0xN3B4O1xufVxuXG4uc28tdHVvaSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGl2LXZvdWNoZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLWluZm8tc3RhdHVzLWdyaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: DanhSachChoKhamUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamUpdateComponent", function() { return DanhSachChoKhamUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
/* harmony import */ var _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model */ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts");
/* harmony import */ var src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/common-type.enums */ "./src/app/shared/enum/common-type.enums.ts");
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-info */ "./node_modules/@iconify/icons-ic/twotone-info.js");
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/tinh-trang-the.enum */ "./src/app/shared/enum/tinh-trang-the.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/search */ "./node_modules/@iconify/icons-ic/search.js");
/* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _popup_het_hieu_luc_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../popup-het-hieu-luc/popup-het-hieu-luc.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.ts");
/* harmony import */ var _popup_khong_kiem_tra_duoc_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.ts");
/* harmony import */ var _popup_cho_quet_popup_cho_quet_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../popup-cho-quet/popup-cho-quet.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.ts");
/* harmony import */ var _popup_error_popup_error_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../popup-error/popup-error.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.ts");
/* harmony import */ var _popup_lich_su_kham_chua_benh_popup_lich_su_kham_chua_benh_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.ts");
/* harmony import */ var _popup_them_goi_popup_them_goi_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../popup-them-goi/popup-them-goi.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _popup_lich_su_kiem_tra_bhyt_popup_lich_su_kiem_tra_bhyt_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.ts");
/* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _the_benh_nhan_popup_the_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../the-benh-nhan-popup/the-benh-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.ts");
/* harmony import */ var _vong_deo_tay_popup_vong_deo_tay_popup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../vong-deo-tay-popup/vong-deo-tay-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.ts");
/* harmony import */ var src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/shared/constants/nhom-dich-vu-constant */ "./src/app/shared/constants/nhom-dich-vu-constant.ts");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _iconify_icons_ic_outline_cancel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @iconify/icons-ic/outline-cancel */ "./node_modules/@iconify/icons-ic/outline-cancel.js");
/* harmony import */ var _iconify_icons_ic_outline_cancel__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_outline_cancel__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @iconify/icons-ic/twotone-history */ "./node_modules/@iconify/icons-ic/twotone-history.js");
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _popup_marketing_tnbn_update_popup_marketing_tnbn_update_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../popup-marketing-tnbn-update/popup-marketing-tnbn-update.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.ts");
/* harmony import */ var _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../danh-sach-cho-kham.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model.ts");
/* harmony import */ var _popup_dich_vu_check_trung_update_popup_dich_vu_check_trung_update_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.ts");
/* harmony import */ var _huy_dich_vu_huy_thanh_toan_popup_huy_dich_vu_huy_thanh_toan_popup_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.ts");
/* harmony import */ var _dich_vu_khuyen_mai_dich_vu_khuyen_mai_popup_dich_vu_khuyen_mai_popup_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component */ "./src/app/modules/main/dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component.ts");
/* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_nhom_dich_vu_thuong_dung_popup_lan_kham_hien_tai_nhom_dich_vu_thuong_dung_popup_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component.ts");
/* harmony import */ var _kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../kham-benh/kham-benh.model */ "./src/app/modules/main/kham-benh/kham-benh.model.ts");
/* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_nhom_dich_vu_loi_popup_lan_kham_hien_tai_nhom_dich_vu_loi_popup_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component.ts");
/* harmony import */ var src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! src/app/shared/enum/kham-benh.enum */ "./src/app/shared/enum/kham-benh.enum.ts");
/* harmony import */ var _popup_chon_loai_In_popup_chon_loai_in_view_popup_chon_loai_in_view_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component */ "./src/app/modules/main/popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component.ts");
/* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_cap_nhat_thong_tin_thuc_hien_dvkt_popup_cap_nhat_thong_tin_thuc_hien_dvkt_popup_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../kham-benh/kham-benh/lan-kham-hien-tai/cap-nhat-thong-tin-thuc-hien-dvkt-popup/cap-nhat-thong-tin-thuc-hien-dvkt-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/cap-nhat-thong-tin-thuc-hien-dvkt-popup/cap-nhat-thong-tin-thuc-hien-dvkt-popup.component.ts");
/* harmony import */ var _xn_covid_popup_xn_covid_popup_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../xn-covid-popup/xn-covid-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/xn-covid-popup/xn-covid-popup.component.ts");
/* harmony import */ var _in_phieu_xn_covid_in_phieu_xn_covid_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../in-phieu-xn-covid/in-phieu-xn-covid.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/in-phieu-xn-covid/in-phieu-xn-covid.component.ts");
/* harmony import */ var src_app_shared_enum_bo_phan_enum__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! src/app/shared/enum/bo-phan.enum */ "./src/app/shared/enum/bo-phan.enum.ts");

























































let DanhSachChoKhamUpdateComponent = class DanhSachChoKhamUpdateComponent {
    constructor(apiService, dialog, authService, router, notificationService, location, route, cdRef) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.location = location;
        this.route = route;
        this.cdRef = cdRef;
        //#region Define
        //message kiem tra tren BHYT
        this.messageThanhCong = "Kiểm tra thành công";
        this.messageKhongThanhCong = "Kiểm tra không thành công";
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icFind = _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_38___default.a;
        this.icCancel = _iconify_icons_ic_outline_cancel__WEBPACK_IMPORTED_MODULE_39___default.a;
        this.icDone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_40___default.a;
        this.icHistory = _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_41___default.a;
        this.isSearchQRCodeEnable = true;
        this.isDungTuyenDisplay = null;
        this.isDungTuyen = false;
        this.isOutOfDate = false;
        this.validationErrors = [];
        this.icInfo = _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.soPhanTramHuongBHYT = null;
        this.gridColumns = [];
        this.gridKhamBenhColumns = [];
        this.gridKyThuatColumns = [];
        this.gridKhongChietKhauColumns = [];
        this.gridCoChietKhauColumns = [];
        this.gridTaiLieuDinhKemColumns = [];
        this.themTaiLieu = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemTaiLieuDinhKem"]();
        this.themChiDinhDichVuModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemChiDinhDichVu"]();
        this.themChiDinhGoiModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemChiDinhDichVu"]();
        this.themBaoHiemTuNhanModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemBaoHiemTuNhan"]();
        this.lstBHTN = [];
        this.isIdNeedUpdate = null;
        this.isUpdateGrid = false;
        this.gridDataKhacCoChietKhauArray = [];
        this.soLuongGoiCoChietKhau = 0;
        this.soLuongGoiKhongChietKhau = 0;
        this.isSetValue = false;
        this.isCheckedBHYT = false;
        this.isActivePopup = false;
        this.soTienBHYTSeThanhToan = 0;
        this.benhNhanId = 0;
        this.benhNhanIdPopup = 0;
        this.coYeuCauGoiDichVu = false;
        this.diaChiBHYT = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["DiaChiBHYT"]();
        this.lichSuKCB = new Array();
        this.lichSuKiemTraTheBHYTGrid = new Array();
        //1 kham benh, 2 ky thuat, 3 giuong
        this.loaiTiepNhan = null;
        this.isGoiCoChietKhau = null;
        //
        this.duocHuongBHYT = false;
        this.enableDuocHuongBHYT = false;
        //Tim kiem benh nhan
        this.lstBenhNhan = new Array();
        this.modelTimKiemBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["TimKiemBenhNhanGridVo"]();
        this.totalBenhNhan = 0;
        this.queryInfoNguoiLienHeQuanHuyen = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_33__["LookupQueryInfo"]();
        this.queryInfoNguoiLienHePhuongXa = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_33__["LookupQueryInfo"]();
        //update
        this.isHaveBHYTUpdated = false;
        //
        this.isScanF1 = false;
        //
        // voucher
        this.loaiVoucher = 0;
        //
        this.isChinhSuaThongTinBenhNhan = false;
        //
        this.removeBHYT = false;
        this.isDisableNhapTayForUpdate = false;
        //ngay thang nam sinh
        this.under6yearsold = false;
        this.isActiveAction = null;
        //#endregion Define
        this.isAddOrDeleteGrid = false;
        this.isHaveBHYTForTheFistLoad = true;
        this.maDichVuDisabled = false;
        this.showInChiDinh = false;
        this.tinhTrangDangThucHien = src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__["DisplayNameTinhTrangDichVu"].DangThucHien;
        this.tinhTrangChuaThucHien = src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__["DisplayNameTinhTrangDichVu"].ChuaThucHien;
        this.tinhTrangDaThucHien = src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__["DisplayNameTinhTrangDichVu"].DaThucHien;
        this.tinhTrangDaHuy = src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__["DisplayNameTinhTrangDichVu"].DaHuy;
        this.tinhTrangChuaKham = src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__["DisplayNameTinhTrangDichVu"].ChuaKham;
        this.tinhTrangDangKham = src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__["DisplayNameTinhTrangDichVu"].DangKham;
        this.tinhTrangDaKham = src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__["DisplayNameTinhTrangDichVu"].DaKham;
        this.tinhTrangDangLamChiDinh = src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__["DisplayNameTinhTrangDichVu"].DangLamChiDinh;
        this.tinhTrangDangDoiKetLuan = src_app_shared_constants_nhom_dich_vu_constant__WEBPACK_IMPORTED_MODULE_37__["DisplayNameTinhTrangDichVu"].DangDoiKetLuan;
        this.displayToolTipGrid = null;
        this.suDungGoiMarketingModelTemp = false;
        this.disabledCheckboxMarketing = false;
        this.danhSachGoiDaChonTrongYCTN = new Array();
        this.danhSachDichVuGoiDaChon = new Array();
        this.danhSachDichVuDaChonTrongLanPopup = new Array();
        this.dichVuSarsCoVs = [];
        this.loaiBenhPhamText = null;
        this.loaiBenhPham = null;
        this.showbuttonLuuVaInPhieuXetNghiem = false;
        // group
        this.groupKhamBenh = [
            {
                field: 'Nhom', aggregates: [
                    { field: 'ThanhTien', aggregate: 'sum' },
                    { field: 'BnThanhToan', aggregate: 'sum' },
                    //{ field: 'SoTienMG', aggregate: 'sum' },
                    { field: 'BHYTThanhToan', aggregate: 'sum' }
                ]
            }
        ];
        // group
        this.groupKyThuat = [{
                field: 'Nhom', aggregates: [
                    { field: 'ThanhTien', aggregate: 'sum' },
                    //{ field: 'SoTienMG', aggregate: 'sum' },
                    { field: 'BnThanhToan', aggregate: 'sum' }
                ]
            }];
        // group
        this.groupKhongChietKhau = [
            {
                field: 'Nhom', aggregates: [
                    { field: 'ThanhTien', aggregate: 'sum' },
                    { field: 'BHYTThanhToan', aggregate: 'sum' },
                    //{ field: 'SoTienMG', aggregate: 'sum' },
                    { field: 'BnThanhToan', aggregate: 'sum' }
                ]
            }
        ];
        // action
        this.groupChietKhau = [
            {
                field: 'Nhom', aggregates: [
                    { field: 'ThanhTien', aggregate: 'sum' },
                    { field: 'ThanhTienTrongGoi', aggregate: 'sum' }
                ]
            }
        ];
        //end chiết khấu
        this.thanhTienTongCong = 0;
        this.bnThanhToanTongCong = 0;
        this.listChonDichVuChiDinh = [];
        this.listChonDichVuChiDinhReLoad = [];
        this.firstLoadData = true;
        this.checkAll = null;
        this.checkItem = null;
        //#region grid
        this.aggregatesKhamBenh = [{ field: 'ThanhTien', aggregate: 'sum' },
            { field: 'BHYTThanhToan', aggregate: 'sum' },
            { field: 'BnThanhToan', aggregate: 'sum' }];
        this.stateKhamBenh = {
            skip: 0,
            take: 200,
            group: [{ field: 'Nhom', aggregates: this.aggregatesKhamBenh }]
        };
        //============================================================Xử lý thông tin voucher========================================//
        this.listVoucherItem = [];
        this.newBarcode = "";
        this.value = [];
        this.checkboxOnly = true;
        this.isCheckAll = false;
        this.isCheckXacNhanIn = false;
    }
    ngOnDestroy() {
        //console.log("ngOnDestroy");
        //this.cdRef.detectChanges();
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        }
        else {
            this.hostingName = "https://" + window.location.host;
        }
        this.getListDichVuSarsCoVs();
        //chua co documenttype
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_18__["DocumentType"].YeuCauTiepNhan;
        this.documentTypeChinhSuaThongTinHanhChinh = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_18__["DocumentType"].YeuCauTiepNhanChinhSuaThongTinHanhChinh;
        //role
        if (this.authService.hasPermission(this.documentTypeChinhSuaThongTinHanhChinh, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
            this.isChinhSuaThongTinBenhNhan = true;
        }
        if (this.id != undefined) {
            this.getBenhNhan(this.id);
        }
        //#region clone create view
        this.getSoTienBHYTSeThanhToan();
        this.getListTenTrieuChungKham();
        this.setDefaultData();
        this.thongTinBenhNhan = new _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_3__["ThongTinBenhNhan"]();
        this.lichSuKCB = new Array();
        this.gridTaiLieuDinhKemColumns = [
            { Field: "LoaiDisplay", Title: "Loại", Width: 200, Sortable: true },
            { Field: "Ten", Title: "Tài liệu", MinWidth: 200, Sortable: true, Template: this.taiLieuTemplate },
            { Field: "MoTa", Title: "Mô tả", Width: 200, Sortable: true },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTaiLieuTemplate },
        ];
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 50, Sortable: true },
            { Field: "CongTyDisplay", Title: "Công ty", Width: 250, Sortable: true },
            { Field: "MaSoThe", Title: "Số thẻ", Width: 150, Sortable: true },
            { Field: "NgayHieuLucDisplay", Title: "Từ ngày", Width: 100, Sortable: true },
            { Field: "NgayHetHanDisplay", Title: "Đến ngày", Width: 100, Sortable: true },
            { Field: "SoDienThoai", Title: "Điện thoại", Width: 100, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 200, Sortable: true },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
        ];
        this.gridKhamBenhColumns = [
            { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140, Sortable: true },
            { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
            { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaKhamBenhTemplate,
                TemplateFooter: this.donGiaKhamBenhFooterTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                Template: this.thanhTienKhamBenhTemplate,
                TemplateFooter: this.thanhTienKhamBenhFooterTemplate,
                TemplateGroupFooter: this.thanhTienKhamBenhGroupFooterTemplate
            },
            {
                Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100, Sortable: true,
                Template: this.bhytThanhToanKhamBenhTemplate,
                TemplateFooter: this.bhytThanhToanKhamBenhFooterTemplate,
                TemplateGroupFooter: this.bhytThanhToanKhamBenhGroupFooterTemplate
            },
            // { Field: "TLMGDisplay", Title: "TL MG", Width: 45, Sortable: true },
            {
                Field: "BnThanhToan", Title: "BN thanh toán", Width: 150, Sortable: true,
                Template: this.bnThanhToanKhamBenhTemplate,
                TemplateFooter: this.bnThanhToanKhamBenhFooterTemplate,
                TemplateGroupFooter: this.bnThanhToanKhamBenhGroupFooterTemplate
            },
            {
                Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true
            },
            { Field: "ActionKhamBenh", Title: "", Width: 50, Template: this.actionKhamBenhTemplate }
        ];
        this.gridKyThuatColumns = [
            { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140, Sortable: true },
            { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
            { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaKyThuatTemplate,
                TemplateFooter: this.donGiaKyThuatFooterTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                Template: this.thanhTienKyThuatTemplate,
                TemplateFooter: this.thanhTienKyThuatFooterTemplate,
                TemplateGroupFooter: this.thanhTienKyThuatGroupFooterTemplate
            },
            //{ Field: "TLMGDisplay", Title: "TL MG", Width: 45, Sortable: true },
            {
                Field: "BnThanhToan", Title: "BN thanh toán", Width: 100, Sortable: true,
                Template: this.bnThanhToanKyThuatTemplate,
                TemplateFooter: this.bnThanhToanKyThuatFooterTemplate,
                TemplateGroupFooter: this.bnThanhToanKyThuatGroupFooterTemplate
            },
            {
                Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true
            },
            {
                Field: "TenNhanVienChiDinh", Title: "Nhân viên chỉ định", Width: 180, Sortable: true
            },
            { Field: "ActionKyThuat", Title: "", Width: 50, Template: this.actionKyThuatTemplate }
        ];
        this.gridKhongChietKhauColumns = [
            {
                Field: "id", Title: "#", Width: 90, Sortable: true,
                Template: this.sttKhongChietKhauTemplate
            },
            { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            {
                Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 200, Sortable: true, ShowTooltip: true,
                TemplateFooter: this.donGiaKhongChietKhauFooterTemplate,
                Template: this.tenDvTemplate
            },
            { Field: "GoiCoChietKhauId", Title: "DV Trong Gói", Width: 60, Template: this.dichVuTrongGoiTemplate },
            { Field: "LaDichVuKhuyenMai", Title: "DV Khuyến Mại", Width: 60, Template: this.dichVuKhuyenMaiTemplate },
            {
                Field: "LoaiGia", Title: "Loại Giá", Width: 100, Sortable: true,
                Template: this.loaiGiaTemplate
            },
            {
                Field: "SoLuong", Title: "SL", Width: 80, Sortable: true,
                Template: this.soLuongTemplate
            },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaKhongChietKhauTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                Template: this.thanhTienKhongChietKhauTemplate,
                TemplateGroupFooter: this.thanhTienKhongChietKhauGroupFooterTemplate,
                TemplateFooter: this.thanhTienKhongChietKhauFooterTemplate,
            },
            {
                Field: "GiaBHYT", Title: "ĐG BHYT", Width: 100, Sortable: true,
                Template: this.donGiaBHYTTemplate
            },
            {
                Field: "DuocHuongBHYT", Title: "ĐH BHYT", Width: 60, Sortable: false,
                Template: this.duocHuongBHYTTemplate
            },
            // {
            //     Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100, Sortable: true,
            //     Template: this.bhytThanhToanKhongChietKhauTemplate,
            //     TemplateFooter: this.bhytThanhToanKhongChietKhauFooterTemplate,
            //     TemplateGroupFooter: this.bhytThanhToanKhongChietKhauGroupFooterTemplate
            // },
            // // { Field: "TLMGDisplay", Title: "TL MG", Width: 60, Sortable: true },
            // {
            //     Field: "BnThanhToan", Title: "BN thanh toán", Width: 100, Sortable: true,
            //     Template: this.bnThanhToanKhongChietKhauTemplate,
            //     TemplateFooter: this.bnThanhToanKhongChietKhauFooterTemplate,
            //     TemplateGroupFooter: this.bnThanhToanKhongChietKhauGroupFooterTemplate
            // },
            {
                Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true,
                Template: this.noiThucHienKhongChietKhauTemplate
            },
            {
                Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 180, Sortable: true
            },
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 110 },
            {
                Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate
            },
            { Field: "ActionKhongChietKhau", Title: "", Width: 75, Template: this.actionKhongChietKhauTemplate }
        ];
        this.gridCoChietKhauColumns = [
            {
                Field: "id", Title: "#", Width: 90, Sortable: true,
                Template: this.sttCoChietKhauTemplate
            },
            { Field: "Nhom", Title: "Nhóm", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 200, Sortable: true, ShowTooltip: true },
            { Field: "LoaiGia", Title: "Loại Giá", Width: 80, Sortable: true },
            { Field: "SoLuong", Title: "SL", Width: 30, Sortable: true },
            {
                Field: "DonGia", Title: "Đơn Giá", Width: 100, Sortable: true,
                Template: this.donGiaChietKhauTemplate,
                TemplateFooter: this.donGiaChietKhauFooterTemplate
            },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: true,
                Template: this.thanhTienChietKhauTemplate,
                TemplateFooter: this.thanhTienChietKhauFooterTemplate,
                TemplateGroupFooter: this.thanhTienChietKhauGroupFooterTemplate
            },
            {
                Field: "TyLeChietKhauDisplay", Title: "TL CK", Width: 100, Sortable: true,
                Template: this.tyLeChietKhauCoChietKhauTemplate,
            },
            {
                Field: "DuocGiamTrongGoi", Title: "DG Trong Gói", Width: 100, Sortable: true,
                Template: this.duocGiamTrongGoiCoChietKhauTemplate,
                TemplateFooter: this.duocGiamTrongGoiCoChietKhauFooterTemplate
            },
            {
                Field: "ThanhTienTrongGoi", Title: "TT Trong Gói", Width: 100, Sortable: true,
                Template: this.thanhTienTrongGoiChietKhauTemplate,
                TemplateFooter: this.thanhTienTrongGoiChietKhauFooterTemplate,
                TemplateGroupFooter: this.thanhTienTrongGoiChietKhauGroupFooterTemplate
            },
            {
                Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230, Sortable: true,
                Template: this.noiThucHienChietKhauTemplate
            },
            {
                Field: "TenNhanVienChiDinh", Title: "Nhân viên chỉ định", Width: 180, Sortable: true
            },
            {
                Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 100, Sortable: true,
            }
        ];
        //chua co documenttype
        //this.documentType = DocumentType.DanhMucBenhVien;
        this.tiepNhanBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["TiepNhanBenhNhanViewModel"];
        this.tiepNhanBenhNhan.BenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanTiepNhanBenhNhanViewModel"]();
        this.tiepNhanBenhNhanClone = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["TiepNhanBenhNhanViewModel"];
        this.tiepNhanBenhNhanClone.BenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanTiepNhanBenhNhanViewModel"]();
        this.lstBHTN = new Array();
        this.setValueForGridBHTN();
        this.huyBHTN();
        //this.setDataForDichVuKyThuat();
        //this.setDataForDichVuKhamBenh();
        //this.setDataForTaiLieuDinhKem();
        this.refreshGrid();
        this.themChiDinhDichVuModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemChiDinhDichVu"]();
        this.themChiDinhGoiModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemChiDinhDichVu"]();
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;
        this.clearThongTinTaiKhoanBenhNhan();
        this.clearThemTaiLieu();
        //#endregion clone create view
        this.queryInfoNguoiLienHeQuanHuyen.ParameterDependencies = "{tinhThanhLienHe:" + this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId + "}";
        this.queryInfoNguoiLienHePhuongXa.ParameterDependencies = "{quanHuyenLienHe:" + this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId + "}";
        if (this.id != undefined) {
            this.getThongTinVoucher(this.id);
        }
    }
    cloneTiepNhanBenhNhan() {
        this.tiepNhanBenhNhanClone = JSON.parse(JSON.stringify(this.tiepNhanBenhNhan));
        //console.log("cloneTiepNhanBenhNhan = ", this.tiepNhanBenhNhanClone);
    }
    keyEvent(event) {
        //console.log(event);
        if (this.isHaveBHYTForTheFistLoad != true) {
            if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                event.preventDefault();
                this.QuetMaQRCodeClick();
            }
            else if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 == true) {
                event.preventDefault();
            }
        }
        //f1 - CoBHYT
        if (event.keyCode == 112 && event.ctrlKey) {
            //console.log("Ok");
            this.coBHYTChange(true);
            this.tiepNhanBenhNhan.CoBHYT = true;
            event.preventDefault();
        }
        //f2 - TuNhap
        else if (event.keyCode == 113 && event.ctrlKey) {
            //console.log("Ok");
            this.tuNhapChange(true);
            this.tiepNhanBenhNhan.TuNhap = true;
            event.preventDefault();
        }
        //f3 - Có giấy chuyển viện
        else if (event.keyCode == 114 && event.ctrlKey) {
            //console.log("Ok");
            this.tiepNhanBenhNhan.DuocChuyenVien = true;
            event.preventDefault();
        }
        //f5 - Có giấy miễn cùng chi trả
        else if (event.keyCode == 116 && event.ctrlKey) {
            //console.log("Ok");
            this.tiepNhanBenhNhan.BHYTDuocMienCungChiTra = true;
            event.preventDefault();
        }
        //f6 - Có miễn giảm
        else if (event.keyCode == 117 && event.ctrlKey) {
            //console.log("f6 Ok");
            //this.CoUuDaiChange(true);
            this.tiepNhanBenhNhan.DuocUuDai = true;
            event.preventDefault();
        }
        //f7 - Có BHTN
        else if (event.keyCode == 118 && event.ctrlKey) {
            //console.log("Ok");
            this.tiepNhanBenhNhan.CoBHTN = true;
            event.preventDefault();
        }
        //f8 - Chỉ định dịch vụ
        else if (event.keyCode == 119 && event.ctrlKey) {
            this.tabStrip.selectTab(0);
            this.onTabSelect(0);
            event.preventDefault();
        }
        else if (event.keyCode == 120 && event.ctrlKey) {
            this.tabStrip.selectTab(1);
            this.onTabSelect(1);
            event.preventDefault();
        }
        else if (event.keyCode == 121 && event.ctrlKey) {
            this.tabStrip.selectTab(2);
            this.onTabSelect(2);
            event.preventDefault();
        }
        else if (event.keyCode == 122 && event.ctrlKey) {
            this.tabStrip.selectTab(3);
            this.onTabSelect(3);
            event.preventDefault();
        }
        else if (event.keyCode == 123 && event.ctrlKey) {
            this.tabStrip.selectTab(4);
            this.onTabSelect(4);
            event.preventDefault();
        }
        else if (event.keyCode == 83 && event.ctrlKey) {
            this.luuPhieu();
            event.preventDefault();
        }
        // else if(event.keyCode == 83 && event.ctrlKey && event.shiftKey){
        //     //this.luuVaInPhieu();
        //     event.preventDefault();
        // }
        else if (event.keyCode == 27) {
            this.huy();
            event.preventDefault();
        }
    }
    QuetMaQRCodeClick() {
        let elementBarcode = document.getElementById('barcodeActive');
        if (elementBarcode != undefined) {
            elementBarcode.click();
            this.isScanF1 = true;
        }
    }
    //#region clear data
    setDefaultData() {
        this.isDungTuyenDisplay = null;
        this.isDungTuyen = false;
        this.isSearchQRCodeEnable = true;
        this.soTuoiDisplay = null;
        this.hoTenDaTimKiem = null;
        this.maSoTheDaTimKiem = null;
        this.ngaySinhDaTimKiem = null;
        this.soPhanTramHuongBHYT = null;
        this.totalBenhNhan = 0;
        this.lstBenhNhan = new Array();
        this.modelTimKiemBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["TimKiemBenhNhanGridVo"]();
        this.isOutOfDate = false;
    }
    clearThongTinTaiKhoanBenhNhan() {
        this.thongTinTaiKhoanBenhNhan = null;
    }
    clearThemTaiLieu() {
        this.themTaiLieu = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemTaiLieuDinhKem"]();
    }
    clearData() {
        let soTheBHYT = this.tiepNhanBenhNhan.BHYTMaSoThe;
        let hoVaTen = this.tiepNhanBenhNhan.HoTen;
        let ngaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        //this.ngOnInit();
        this.clearDataUpdateThongTinBHYT();
        this.tiepNhanBenhNhan.BHYTMaSoThe = soTheBHYT;
        this.tiepNhanBenhNhan.HoTen = hoVaTen;
        this.tiepNhanBenhNhan.NgayThangNamSinh = ngaySinh;
    }
    //#endregion clear data
    congTyBaoHiemChange($event) {
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/GetThongTinBHTN/?congTyBaoHiemTuNhanId=" + $event).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.themBaoHiemTuNhanModel.DiaChi = resultData.DiaChi;
                this.themBaoHiemTuNhanModel.SoDienThoai = resultData.SoDienThoai;
            }
            else {
                this.themBaoHiemTuNhanModel.DiaChi = null;
                this.themBaoHiemTuNhanModel.SoDienThoai = null;
            }
        }, (err) => {
            this.themBaoHiemTuNhanModel.DiaChi = null;
            this.themBaoHiemTuNhanModel.SoDienThoai = null;
        });
    }
    setThongTinTaiKhoanBenhNhan(idBenhNhan, idYeuCauTiepNhan) {
        this.apiService.post("TiepNhanBenhNhan/GetThongTinTaiKhoanBenhNhan?idBenhNhan=" + idBenhNhan + "&idYeuCauTiepNhan=" + idYeuCauTiepNhan).subscribe(resultData => {
            this.thongTinTaiKhoanBenhNhan = resultData;
        }, () => {
            //return null;
            //console.log("error")
        });
    }
    getBenhNhan(id) {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_34__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
        this.apiService.post("TiepNhanBenhNhan/GetYeuCauKhamBenh?id=" + id).subscribe(resultData => {
            if (resultData == null || resultData == undefined)
                return;
            this.tiepNhanBenhNhan = resultData;
            // console.log("getBenhNhan", this.tiepNhanBenhNhan);
            this.benhNhanIdPopup = this.tiepNhanBenhNhan.BenhNhanId;
            this.coYeuCauGoiDichVu = this.tiepNhanBenhNhan.CoYeuCauGoiDichVu;
            this.benhNhanId = this.tiepNhanBenhNhan.BenhNhanId;
            //
            this.getDanhSachGoiBenhNhan(this.benhNhanId);
            //
            this.setThongTinTaiKhoanBenhNhan(this.tiepNhanBenhNhan.BenhNhanId, id);
            if (this.tiepNhanBenhNhan.TuNhap != true && this.tiepNhanBenhNhan.CoBHYT) {
                this.isDisableNhapTayForUpdate = true;
            }
            this.lichSuKCB = this.tiepNhanBenhNhan.GridLichSuKCB;
            this.lichSuKiemTraTheBHYTGrid = this.tiepNhanBenhNhan.GridLichSuKiemTraTheBHYT;
            if (resultData.LoaiVoucher == null) {
                this.loaiVoucher = 0;
            }
            else {
                this.loaiVoucher = resultData.LoaiVoucher;
            }
            // thong tin BHYT
            if (resultData.BHYTNgayHieuLuc != null && resultData.BHYTNgayHieuLuc != undefined) {
                let ngayCoHieuLuc = new Date(resultData.BHYTNgayHieuLuc);
                this.tiepNhanBenhNhan.NgayCoHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDate(ngayCoHieuLuc, "dd/mm/yyyy");
                //console.log("getBenhNhan = ", ngayCoHieuLuc, this.tiepNhanBenhNhan.NgayCoHieuLucDisplay);
            }
            if (resultData.BHYTNgayHetHan != null && resultData.BHYTNgayHetHan != undefined) {
                let ngayHetHan = new Date(resultData.BHYTNgayHetHan);
                this.tiepNhanBenhNhan.NgayHetHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDate(ngayHetHan, "dd/mm/yyyy");
            }
            if (resultData.BHYTNgayDu5Nam != null && resultData.BHYTNgayDu5Nam != undefined) {
                let ngayDu5Nam = new Date(resultData.BHYTNgayDu5Nam);
                this.tiepNhanBenhNhan.NgayDu5NamDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDate(ngayDu5Nam, "dd/mm/yyyy");
            }
            if (resultData.BHYTMaDKBD != null && resultData.BHYTMaDKBD != undefined) {
                //this.setSoPhanTramHuongBHYT(resultData.BHYTMaSoThe)
                //this.setTuyenKhamBenh(resultData.BHYTMaDKBD);
                this.setSoPhanTramHuongBHYTForThemChiDinh();
                this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + resultData.BHYTMaDKBD).subscribe(resultData => {
                    this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;
                }, () => {
                    //return null;
                    //console.log("error")
                });
            }
            // BHTN
            //this.lstBHTN = resultData.BaoHiemTuNhans;
            if (resultData.BaoHiemTuNhans != undefined && resultData.BaoHiemTuNhans != null) {
                resultData.BaoHiemTuNhans.forEach(item => {
                    let model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemBaoHiemTuNhanGridVo"]();
                    model.Id = item.Id;
                    model.CongTyBaoHiemTuNhanId = item.BHTNCongTyBaoHiemId;
                    model.CongTyDisplay = item.CongTyDisplay;
                    model.DiaChi = item.BHTNDiaChi;
                    model.MaSoThe = item.BHTNMaSoThe;
                    model.SoDienThoai = item.BHTNSoDienThoai;
                    model.NgayHetHan = item.BHTNNgayHetHan;
                    if (item.BHTNNgayHetHan != null) {
                        let dateNgayHetHan = new Date(model.NgayHetHan);
                        model.NgayHetHanDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDate(dateNgayHetHan, "dd/mm/yyyy");
                    }
                    else {
                        model.NgayHetHanDisplay = null;
                    }
                    model.NgayHieuLuc = item.BHTNNgayHieuLuc;
                    if (item.BHTNNgayHieuLuc != null) {
                        let dateNgayHieuLuc = new Date(model.NgayHieuLuc);
                        model.NgayHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDate(dateNgayHieuLuc, "dd/mm/yyyy");
                    }
                    else {
                        model.NgayHieuLucDisplay = null;
                    }
                    this.lstBHTN.push(model);
                });
                this.setValueForGridBHTN();
            }
            // BHTN
            this.isHaveBHYTUpdated = resultData.CoBHYT;
            this.tiepNhanBenhNhan.BenhNhan.GioiTinhDisplay = resultData.BenhNhan.GioiTinh == 1 ? "Nam" : "Nữ";
            //let ngayThangNamSinh = new Date();
            //ngayThangNamSinh.setDate(resultData.BenhNhan.NgaySinh);
            //ngayThangNamSinh.setMonth(resultData.BenhNhan.ThangSinh);
            //ngayThangNamSinh.setFullYear(resultData.BenhNhan.NamSinh, resultData.BenhNhan.ThangSinh, resultData.BenhNhan.NgaySinh);
            //this.tiepNhanBenhNhan.BenhNhan.NgayThangNamSinh = ngayThangNamSinh;
            if (resultData.BenhNhan.NamSinh != null && resultData.BenhNhan.ThangSinh != null && resultData.BenhNhan.NgaySinh != null) {
                let ngayThangNamSinh = null;
                if (resultData.BenhNhan.NgayThangNamSinh != undefined && resultData.BenhNhan.NgayThangNamSinh != null) {
                    ngayThangNamSinh = new Date(resultData.BenhNhan.NgayThangNamSinh);
                }
                else {
                    let thang = (resultData.BenhNhan.ThangSinh == null || resultData.BenhNhan.ThangSinh == 0) ? 1 : resultData.BenhNhan.ThangSinh;
                    let ngay = (resultData.BenhNhan.NgaySinh == null || resultData.BenhNhan.NgaySinh == 0) ? 1 : resultData.BenhNhan.NgaySinh;
                    ngayThangNamSinh = new Date(resultData.BenhNhan.NamSinh, thang, ngay);
                }
                this.getAge(ngayThangNamSinh, new Date);
            }
            //console.log("------------: ", this.tiepNhanBenhNhan)
            if (this.tiepNhanBenhNhan.BHYTMucHuong == null) {
                this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                this.isHaveBHYTForTheFistLoad = false;
            }
            if (this.tiepNhanBenhNhan.IsCheckedBHYT) {
                let dateToCheck = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
                //console.log("dateToCheck ", this.tiepNhanBenhNhan.BHYTNgayHetHan, dateToCheck)
                this.checkOutOfDateBHYT(dateToCheck);
            }
            else {
                this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
            }
            //
            this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
            //Chi dinh dich vu
            this.setDataForDichVuKhac();
            this.setDataForTaiLieuDinhKem();
            this.refreshGrid();
            this.dialog.closeAll();
            this.cloneTiepNhanBenhNhan();
        }, () => {
            this.dialog.closeAll();
            //console.log("error")
        });
    }
    totalKhac(field, goiCoChietkhauId = 0) {
        //.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
        //console.log("totalKhac = ", goiCoChietkhauId);
        switch (field) {
            case 'TongThanhTien':
                return (this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.ThanhTien, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == true)
                    .reduce((sum, item) => sum + item.ThanhTien, 0));
            case 'ThanhTien':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'ThanhTienGoiChietKhau':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'TongThanhTienGoiChietKhau':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == true)
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'BHYTThanhToan':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.BHYTThanhToan, 0);
            case 'SoTienMG':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'BnThanhToan':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.BnThanhToan, 0);
            case 'TongBnThanhToan':
                return (this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.BnThanhToan, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == true)
                    .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0));
            case 'ThanhTienTrongGoi':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.GoiCoChietKhauId == goiCoChietkhauId)
                    .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);
            case 'TongThanhTienTrongGoi':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == true)
                    .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);
            case 'TongThanhTienGoi':
                return this.tiepNhanBenhNhan.YeuCauKhacGrid
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'TongThanhTienBNTra':
                return (this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
                    .reduce((sum, item) => sum + item.BnThanhToan, 0)) + this.tiepNhanBenhNhan.YeuCauKhacGrid
                    //.filter(o => o.IsGoiCoChietKhau == true)
                    .reduce((sum, item) => sum + item.ThanhTienTrongGoi, 0);
        }
    }
    ;
    //#endregion grid
    getSoTienBHYTSeThanhToan() {
        this.apiService.get("TiepNhanBenhNhan/GetSoTienBHYTSeThanhToan").subscribe(resultData => {
            this.soTienBHYTSeThanhToan = resultData;
            //console.log("getSoTienBHYTSeThanhToan = ", this.soTienBHYTSeThanhToan);
        });
    }
    getListTenTrieuChungKham() {
        this.apiService.get("TiepNhanBenhNhan/GetListTenTrieuChungKhamAsync").subscribe(resultData => {
            this.TrieuChungTiepNhanResource = resultData;
        });
    }
    refreshGrid() {
        if (!this.cdRef.destroyed) {
            this.cdRef.detectChanges();
        }
        if (this.gridChildBHTN != undefined) {
            this.gridChildBHTN.setDataSource();
        }
        if (this.gridChildCoChietKhau != undefined) {
            this.gridChildCoChietKhau.setDataSource();
        }
        //console.log("grid ko chiet khau ", this.gridChildKhongChietKhau)
        if (this.gridChildKhongChietKhau != undefined) {
            this.gridChildKhongChietKhau.setDataSource();
        }
        if (this.gridTaiLieuDinhKem != undefined) {
            this.gridTaiLieuDinhKem.setDataSource();
        }
        //this.cdRef.detectChanges();
    }
    //#region BHTN
    setValueForGridBHTN() {
        //console.log(this.lstBHTN);
        let index = 1;
        this.lstBHTN.forEach(obj => {
            obj.STT = index;
            index = index + 1;
        });
        this.updateBHTN();
        this.gridDataSourceBHTN = {
            data: this.lstBHTN,
            total: this.lstBHTN.length
        };
    }
    updateBHTN() {
        this.tiepNhanBenhNhan.BaoHiemTuNhans = new Array();
        this.lstBHTN.forEach(obj => {
            let model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BaoHiemTuNhanViewModel"]();
            //model.YeuCauTiepNhanId = obj.YeuCauTiepNhanId;
            model.Id = obj.Id;
            model.BHTNCongTyBaoHiemId = obj.CongTyBaoHiemTuNhanId;
            model.BHTNDiaChi = obj.DiaChi;
            model.BHTNMaSoThe = obj.MaSoThe;
            model.BHTNNgayHetHan = obj.NgayHetHan;
            model.BHTNNgayHieuLuc = obj.NgayHieuLuc;
            model.BHTNSoDienThoai = obj.SoDienThoai;
            this.tiepNhanBenhNhan.BaoHiemTuNhans.push(model);
        });
        //console.log("updateBHTN = ", this.tiepNhanBenhNhan.BaoHiemTuNhans);
    }
    huyBHTN() {
        this.isUpdateGrid = false;
        this.clearThemBHTN();
    }
    clearThemBHTN() {
        this.themBaoHiemTuNhanModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemBaoHiemTuNhan"]();
    }
    ThemBHTN() {
        this.validationErrors = null;
        let isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
        if (isValid == false) {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageThemBHTN);
            return;
        }
        this.apiService.post("TiepNhanBenhNhan/ThemThongTinBHTN", this.themBaoHiemTuNhanModel).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.lstBHTN.push(resultData);
                this.setValueForGridBHTN();
                this.clearThemBHTN();
            }
            else {
            }
        }, (err) => {
            // self.validationErrors = err.ValidationErrors;
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
    }
    updateGridBHTN(dataItem) {
        console.log("updateGridBHTN");
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/IsHaveCongNo/?yeuCauTiepNhanId=" + this.id
            + "&congTyId=" + dataItem.CongTyBaoHiemTuNhanId).subscribe(resultData => {
            if (resultData != null && resultData != undefined && resultData == false) {
                this.isUpdateGrid = true;
                //set
                this.themBaoHiemTuNhanModel.Id = dataItem.Id;
                this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId = dataItem.CongTyBaoHiemTuNhanId;
                this.themBaoHiemTuNhanModel.DiaChi = dataItem.DiaChi;
                this.themBaoHiemTuNhanModel.MaSoThe = dataItem.MaSoThe;
                this.themBaoHiemTuNhanModel.NgayHetHan = dataItem.NgayHetHan;
                this.themBaoHiemTuNhanModel.NgayHieuLuc = dataItem.NgayHieuLuc;
                this.themBaoHiemTuNhanModel.SoDienThoai = dataItem.SoDienThoai;
                //this.themBaoHiemTuNhanModel.STT = dataItem.STT; 
                this.enableUpdateGird(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageBHTNCongNoCapNhat);
            }
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
    }
    SuaBHTN() {
        let index = this.lstBHTN.find(obj => obj.CongTyBaoHiemTuNhanId == this.isIdNeedUpdate);
        // this.lstBHTN.splice(this.lstBHTN.indexOf(index), 1);
        // let isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
        if (this.isIdNeedUpdate != this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId) {
            let isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
            if (isValid == false) {
                this.disableUpdateGrid();
                return;
            }
            ;
        }
        this.validationErrors = null;
        //
        //this.lstBHTN[this.lstBHTN.indexOf(index)] = this.themBaoHiemTuNhanModel;
        this.lstBHTN.splice(this.lstBHTN.indexOf(index), 1);
        this.apiService.post("TiepNhanBenhNhan/ThemThongTinBHTN", this.themBaoHiemTuNhanModel).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.lstBHTN.push(resultData);
                this.setValueForGridBHTN();
                this.disableUpdateGrid();
            }
            else {
            }
        }, (err) => {
            // self.validationErrors = err.ValidationErrors;
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
    }
    enableUpdateGird(id) {
        this.isUpdateGrid = true;
        this.isIdNeedUpdate = id;
    }
    disableUpdateGrid() {
        this.isUpdateGrid = false;
        this.isIdNeedUpdate = null;
        this.clearThemBHTN();
    }
    checkValidAddBHTN(id) {
        //console.log("checkValidAddBHTN = ", this.lstBHTN,id);
        let model = this.lstBHTN.find(obj => obj.CongTyBaoHiemTuNhanId == id);
        //console.log("checkValidAddBHTN = ", index);
        if (model != undefined) {
            return false;
        }
        return true;
    }
    //#endregion BHTN
    //#region chi dinh dich vu
    onTabSelect($event) {
        this.removeThemDichVuValue();
        this.removeThemGoiValue();
        if ($event != null && $event.index == 2 && this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if (this.under6yearsold == false) {
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
        }
    }
    MaDichVuGoiSelectionChange($event) {
        //console.log("abc = ", $event);
        if ($event != null && $event != undefined) {
            if ($event.IsCoChietKhau) {
                this.isGoiCoChietKhau = true;
            }
            else {
                this.isGoiCoChietKhau = false;
            }
        }
        else {
            this.isGoiCoChietKhau = null;
        }
    }
    MaDichVuSelectionChange($event) {
        //console.log("abc = ", $event);
        //this.loaiTiepNhan = 1;
        this.themChiDinhDichVuModel.SoLuong = 1;
        if ($event != undefined && $event != null) {
            if ($event.Loai == "DVKT") {
                this.MaDichVuChange($event.KeyId, 4, true);
                this.loaiTiepNhan = 2;
            }
            else if ($event.Loai == "DV Giường") {
                this.MaDichVuChange($event.KeyId, 5);
                this.loaiTiepNhan = 3;
            }
            else {
                this.MaDichVuChange($event.KeyId);
                this.loaiTiepNhan = 1;
            }
        }
        else {
            this.themChiDinhDichVuModel.DonGia = null;
            this.themChiDinhDichVuModel.NoiThucHienId = null;
            this.setThanhTienForDichVuModel();
            this.loaiTiepNhan = 1;
        }
        //
        if ($event != null && $event != undefined) {
            this.SetEnableDuocHuongBHYT($event.KeyId, this.loaiTiepNhan);
        }
        this.cdRef.detectChanges();
        //this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    }
    SetEnableDuocHuongBHYT(dichVuId, loai) {
        this.apiService.post("TiepNhanBenhNhan/DuocHuongBHYT?dichVuId=" + dichVuId + "&loai=" + loai).subscribe(resultData => {
            if (resultData != null && resultData != undefined) {
                this.enableDuocHuongBHYT = resultData;
                // if(resultData == false){
                //     this.themChiDinhDichVuModel.DuocHuongBHYT = false;
                // }
                // else{
                //     //this.themChiDinhDichVuModel.DuocHuongBHYT = true;
                // }
                this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
            }
        }, (err) => {
        });
    }
    MaDichVuChange($event, loaiDichVu = 0, isCheckValidDonGia = false) {
        //console.log("MaDichVuChange = ", $event);
        let urlDefault = "TiepNhanBenhNhan/GetDonGia";
        if (loaiDichVu == 4) {
            urlDefault = "TiepNhanBenhNhan/GetDonGiaKyThuat";
            // this.themChiDinhDichVuModel.LoaiGiaId = 1;
            this.themChiDinhDichVuModel.LoaiGiaId = 0;
        }
        else if (loaiDichVu == 5) {
            urlDefault = "TiepNhanBenhNhan/GetDonGiaGiuongBenh";
            this.themChiDinhDichVuModel.LoaiGiaId = 1;
        }
        let model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GetDonGiaVo"]();
        if ($event != undefined && $event != null
            && (loaiDichVu == 4 || (this.themChiDinhDichVuModel.LoaiGiaId != null && this.themChiDinhDichVuModel.LoaiGiaId != undefined))) {
            //console.log($event);
            model.DichVuKhamBenhBenhVienId = $event;
            model.NhomGiaDichVuKhamBenhBenhVienId = this.themChiDinhDichVuModel.LoaiGiaId;
            model.IsCheckValidDonGia = isCheckValidDonGia;
            this.apiService.post(urlDefault, model).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    if (loaiDichVu == 4) {
                        this.themChiDinhDichVuModel.LoaiGiaId = resultData.NhomGiaDichVuKhamBenhBenhVienId;
                        this.themChiDinhDichVuModel.DonGia = resultData.DonGia;
                    }
                    else {
                        this.themChiDinhDichVuModel.DonGia = resultData;
                    }
                    this.setThanhTienForDichVuModel();
                }
                else {
                    this.themChiDinhDichVuModel.DonGia = null;
                    this.setThanhTienForDichVuModel();
                }
            }, (err) => {
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
        else {
            this.themChiDinhDichVuModel.DonGia = null;
            this.setThanhTienForDichVuModel();
        }
    }
    setThanhTienForDichVuModel() {
        if (this.themChiDinhDichVuModel.DonGia != undefined && this.themChiDinhDichVuModel.DonGia != null
            && this.themChiDinhDichVuModel.SoLuong != undefined && this.themChiDinhDichVuModel.SoLuong != null) {
            this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.DonGia * this.themChiDinhDichVuModel.SoLuong;
        }
        else {
            this.themChiDinhDichVuModel.ThanhTien = null;
        }
    }
    SoLuongChange($event) {
        if (this.themChiDinhDichVuModel.DonGia != undefined && this.themChiDinhDichVuModel.DonGia != null
            && $event != undefined && $event != null) {
            this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.DonGia * $event;
        }
        else {
            this.themChiDinhDichVuModel.ThanhTien = null;
        }
    }
    setDataForDichVuKhac() {
        if (this.tiepNhanBenhNhan.YeuCauKhacGrid != null) {
            this.apiService.get("TiepNhanBenhNhan/GetSarsCoVs").subscribe(resultData => {
                this.dichVuSarsCoVs = [];
                this.dichVuSarsCoVs = resultData.Ids;
                this.loaiBenhPham = resultData.LoaiMauXetNghiem;
                this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText;
                if (this.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0) {
                    this.showbuttonLuuVaInPhieuXetNghiem = false;
                }
                else {
                    if (this.showbuttonLuuVaInPhieuXetNghiem == false) {
                        this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(element => {
                            this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(element.MaDichVuId);
                        });
                    }
                }
            });
        }
        this.gridDataKhacCoChietKhauArray = [];
        if (this.tiepNhanBenhNhan.YeuCauKhacGrid.length != 0) {
            this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(element => {
                if (element.isCheckValueRowItemCuoiCung == true) {
                    element.isCheckRowItem = true;
                }
            });
        }
        this.gridDataKhacDisplay = {
            data: this.tiepNhanBenhNhan.YeuCauKhacGrid
            //.filter(obj => obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null)
            ,
            total: this.tiepNhanBenhNhan.YeuCauKhacGrid
                //.filter(obj => obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null)
                .length
        };
        if (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(s => s.isCheckRowItem == true).length == this.tiepNhanBenhNhan.YeuCauKhacGrid.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
        if (this.tiepNhanBenhNhan.YeuCauKhacGrid.length != 0) {
            this.showInChiDinh = true;
        }
        //this.cdRef.detectChanges();
        //console.log("setDataForDichVuKhac = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
        // let arrayNhomGoiCoChietKhau: string[] = [];
        // this.gridDataKhacCoChietKhauDisplay = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(obj => obj.IsGoiCoChietKhau == true);
        // this.gridDataKhacCoChietKhauDisplay.forEach(e => {
        //     if (!arrayNhomGoiCoChietKhau.some(o => o == e.TenGoiChietKhau)) {
        //         arrayNhomGoiCoChietKhau.push(e.TenGoiChietKhau);
        //     }
        // });
        // arrayNhomGoiCoChietKhau.forEach(e => {
        //     let resultArray: ChiDinhDichVuGridVo[] = [];
        //     this.gridDataKhacCoChietKhauDisplay.forEach(o => {
        //         //let result = new ChiDinhDichVuGridVo();
        //         if (e == o.TenGoiChietKhau) {
        //             //result = o;
        //             resultArray.push(o);
        //         }
        //     });
        //     this.gridDataKhacCoChietKhauArray.push(process(resultArray, this.stateKhamBenh));
        // });
        //console.log("setDataForDichVuKhac = ", this.gridDataKhacCoChietKhauArray, this.gridDataKhacDisplay);
        this.setSoLuongChoGridKhac();
    }
    setSoLuongChoGridKhac() {
        this.soLuongGoiCoChietKhau = this.gridDataKhacCoChietKhauArray.length - 1;
    }
    themChiDinhDichVuGoiNew() {
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageBHYTThayDoi);
            return;
        }
        if (this.isGoiCoChietKhau) {
            this.themChiDinhDichVuKhacKhamBenh(2);
        }
        else if (this.isGoiCoChietKhau == false || this.isGoiCoChietKhau == null) {
            this.themChiDinhDichVuKhacKhamBenh(1);
        }
    }
    themChiDinhDichVuNew() {
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageBHYTThayDoi);
            return;
        }
        //console.log("themChiDinhDichVuNew = ", this.loaiTiepNhan);
        // if (this.loaiTiepNhan == 1) {
        //     this.themChiDinhDichVuKhacKhamBenh(3);
        // }
        // else if (this.loaiTiepNhan == 2) {
        //     this.themChiDinhDichVuKhacKhamBenh(4);
        // }
        // else {
        //     this.themChiDinhDichVuKhacKhamBenh(5);
        // }
        //start update goi
        let model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["CheckDuSoLuongTonTrongGoi"]();
        model.DichVuThem = this.themChiDinhDichVuModel;
        model.DichVuThem.benhNhanId = this.tiepNhanBenhNhan.BenhNhanId;
        if (this.loaiTiepNhan == 1) {
            //1: KB, 2: DVKT, 3: DVG
            model.DichVuThem.TenNhomDichVu = 'DỊCH VỤ KHÁM BỆNH';
        }
        else if (this.loaiTiepNhan == 2) {
            model.DichVuThem.TenNhomDichVu = 'DỊCH VỤ KỸ THUẬT';
        }
        else {
            model.DichVuThem.TenNhomDichVu = 'DỊCH VỤ GIƯỜNG';
        }
        //model.DanhSachDichVuChonTrongLanPopup = this.danhSachDichVuDaChonTrongLanPopup;
        model.DanhSachDichVuChonTrongLanPopup = new Array();
        let self = this;
        let itemExist = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.MaDichVuId == model.DichVuThem.MaDichVuId && o.Nhom == model.DichVuThem.TenNhomDichVu);
        if (itemExist.length > 0) {
            self.dialog.open(_popup_dich_vu_check_trung_update_popup_dich_vu_check_trung_update_component__WEBPACK_IMPORTED_MODULE_44__["PopupDichVuCheckTrungUpdateComponent"], {
                disableClose: false,
                width: '400px',
            }).afterClosed().subscribe(result => {
                if (result == true) {
                    this.themDichVu(model);
                }
                else {
                }
            });
        }
        else {
            this.themDichVu(model);
        }
        //end update goi
    }
    themDichVu(model) {
        let self = this;
        let dataRes = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["DichVuTrongGoiKhiThem"]();
        // cập nhật ngày 02/06/2021: ko kiểm tra dịch vụ có trong gói nữa
        if (this.loaiTiepNhan == 1) {
            this.themChiDinhDichVuKhacKhamBenh(3);
        }
        else if (this.loaiTiepNhan == 2) {
            this.themChiDinhDichVuKhacKhamBenh(4);
        }
        else {
            this.themChiDinhDichVuKhacKhamBenh(5);
        }
        // this.apiService.post<DichVuTrongGoiKhiThem>("TiepNhanBenhNhan/CheckDuSoLuongTonTrongGoi", model).subscribe(
        //     resultData => {
        //         if (resultData != undefined && resultData != null) {
        //             //console.log("DichVuTrongGoiKhiThem = ", resultData);
        //             dataRes = resultData;
        //             this.dialog.open(ConfirmComponent, {
        //                 disableClose: false,
        //                 width: '400px',
        //                 data: { Title: "Xác nhận", Message: CommonService.format(TiepNhanBenhNhanMessage.MessageConfirmThemVaoGoi, [resultData.TenDichVu, resultData.TenChuongTrinh, self.tiepNhanBenhNhan.HoTen]) }
        //             }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        //                 if (result == "Yes") {
        //                     //
        //                     self.danhSachDichVuGoiDaChon = new Array<ThemChiDinhDichVu>();
        //                     let item = new ThemChiDinhDichVu();
        //                     item.LaGoi = true;
        //                     item.TenNhomDichVu = model.DichVuThem.TenNhomDichVu;
        //                     item.MaDichVuId = model.DichVuThem.MaDichVuId;
        //                     item.SoLuong = model.DichVuThem.SoLuong;
        //                     item.chuongTrinhGoiDichVuId = dataRes.ChuongTrinhGoiDichVuId;
        //                     //cheat cho lẹ
        //                     item.DuocHuongBHYT = model.DichVuThem.DuocHuongBHYT;
        //                     item.YeuCauGoiDichVuId = dataRes.YeuCauGoiDichVuId;
        //                     item.ThuocGoi = dataRes.TenChuongTrinh;
        //                     item.yeuCauTiepNhanId = self.id;
        //                     item.benhNhanId = self.tiepNhanBenhNhan.BenhNhanId;
        //                     //them noi thuc hien khac voi add view
        //                     item.NoiThucHienId = model.DichVuThem.NoiThucHienId;
        //                     self.danhSachDichVuGoiDaChon.push(item);
        //                     self.addOneDvGoi(self.danhSachDichVuGoiDaChon);
        //                     self.addDanhSachTongCongFromDanhSachDaChon(self.danhSachDichVuGoiDaChon);
        //                     //self.router.navigate(['tiep-nhan-trong-ngay/']);
        //                     //self.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
        //                 }
        //                 else {
        //                     //self.ngOnInit();
        //                     if (this.loaiTiepNhan == 1) {
        //                         this.themChiDinhDichVuKhacKhamBenh(3);
        //                     }
        //                     else if (this.loaiTiepNhan == 2) {
        //                         this.themChiDinhDichVuKhacKhamBenh(4);
        //                     }
        //                     else {
        //                         this.themChiDinhDichVuKhacKhamBenh(5);
        //                     }
        //                 }
        //             });
        //         }
        //         else {
        //             if (this.loaiTiepNhan == 1) {
        //                 this.themChiDinhDichVuKhacKhamBenh(3);
        //             }
        //             else if (this.loaiTiepNhan == 2) {
        //                 this.themChiDinhDichVuKhacKhamBenh(4);
        //             }
        //             else {
        //                 this.themChiDinhDichVuKhacKhamBenh(5);
        //             }
        //         }
        //     },
        //     (err: any) => {
        //         if (err != undefined && err.ValidationErrors != null) {
        //             this.validationErrors = err.ValidationErrors;
        //         }
        //         else if (err != undefined && err.Errors == null) {
        //             this.notificationService.showError(err.Message);
        //         }
        //     });
    }
    addOneDvGoi(lstModelDichVu) {
        let modelCheck = new _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_43__["CheckDuSoLuongTonTrongGoiListDichVu"]();
        modelCheck.LstDichVuThem = lstModelDichVu;
        let model = new _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_43__["modelUpdateView"]();
        model.Data = lstModelDichVu;
        model.YeuCauTiepNhanId = this.id;
        model.BenhNhanid = this.tiepNhanBenhNhan.BenhNhanId;
        model.MucHuongBHYT = this.tiepNhanBenhNhan.BHYTMucHuong;
        this.apiService.post("TiepNhanBenhNhan/CheckDuSoLuongTonTrongGoiLstDichVu", modelCheck).subscribe(resultData => {
            if (resultData != undefined && resultData != null && resultData) {
                //add goi
                this.apiService.post("TiepNhanBenhNhan/ThemDichVuFromGoiUpdateView", model).subscribe(resultData => {
                    //this.dialogRef.close(resultData);
                    if (resultData != null && resultData != undefined) {
                        this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                        this.setDataForDichVuKhac();
                        this.refreshGrid();
                        this.removeThemDichVuValue();
                        this.removeThemGoiValue();
                        this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
                    }
                }, (err) => {
                    if (err != undefined && err.ValidationErrors != null) {
                        this.validationErrors = err.ValidationErrors;
                    }
                    else if (err != undefined && err.Errors == null) {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
            else {
                //ex
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageErrorDVOnGoi);
            }
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                this.notificationService.showError(err.Message);
            }
        });
    }
    addDanhSachTongCongFromDanhSachDaChon(data) {
        data.forEach(o => {
            let item = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["DanhSachDichVuChonTrongLanPopup"]();
            item.TenNhomDichVu = o.TenNhomDichVu;
            item.DichVuId = o.MaDichVuId;
            item.SoLuongDungLanNay = o.SoLuong;
            item.ChuongTrinhGoiDichVuId = o.chuongTrinhGoiDichVuId;
            item.BenhNhanId = this.tiepNhanBenhNhan.BenhNhanId;
            item.YeuCauGoiDichVuId = o.YeuCauGoiDichVuId;
            item.ThuocGoi = o.ThuocGoi;
            this.danhSachDichVuDaChonTrongLanPopup.push(item);
        });
    }
    checkValidateUpdateThongTinBHYT() {
        if (this.tiepNhanBenhNhan.CoBHYT != this.tiepNhanBenhNhanClone.CoBHYT
            || this.tiepNhanBenhNhan.TuNhap != this.tiepNhanBenhNhanClone.TuNhap
            || this.tiepNhanBenhNhan.MaDKBD != this.tiepNhanBenhNhanClone.MaDKBD
            || this.tiepNhanBenhNhan.BHYTMucHuong != this.tiepNhanBenhNhanClone.BHYTMucHuong
            || this.tiepNhanBenhNhan.BHYTDiaChi != this.tiepNhanBenhNhanClone.BHYTDiaChi
            || this.tiepNhanBenhNhan.LyDoVaoVien != this.tiepNhanBenhNhanClone.LyDoVaoVien
            || this.tiepNhanBenhNhan.BHYTNgayHieuLuc != this.tiepNhanBenhNhanClone.BHYTNgayHieuLuc
            || this.tiepNhanBenhNhan.BHYTNgayHetHan != this.tiepNhanBenhNhanClone.BHYTNgayHetHan
            || this.tiepNhanBenhNhan.BHYTNgayDu5Nam != this.tiepNhanBenhNhanClone.BHYTNgayDu5Nam) {
            return false;
        }
        return true;
    }
    checkValidAddGoiCoChietKhau(id) {
        //console.log("checkValidAddGoiCoChietKhau = ", this.tiepNhanBenhNhan.YeuCauKhacGrid, this.loaiTiepNhan, id);
        let model = this.tiepNhanBenhNhan.YeuCauKhacGrid
            //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
            .find(obj => obj.GoiCoChietKhauId == id);
        //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
        if (model != undefined) {
            return false;
        }
        return true;
    }
    themChiDinhDichVuKhacKhamBenh(loaiDichVuKhac, lstDataGoi = null) {
        //bỏ check trùng 29/10/2020 Tuan said: "e sửa lại ko cần check trùng luôn : 2:04PM"
        // if (loaiDichVuKhac == 1 || loaiDichVuKhac == 2) {
        //     let isValid = this.checkValidAddGoiCoChietKhau(this.themChiDinhGoiModel.MaDichVuGoiId);
        //     //console.log("isValid = ", isValid, this.themChiDinhGoiModel);
        //     if (isValid == false) {
        //         this.notificationService.showError(TiepNhanBenhNhanMessage.MessageGoiTonTai);
        //         return;
        //     };
        // }
        // else {
        //     let isValid = this.checkValidAddChiDinhDichVuKhac(this.themChiDinhDichVuModel.MaDichVuId);
        //     if (isValid == false && loaiDichVuKhac != 1 && loaiDichVuKhac != 2) {
        //         this.notificationService.showError(TiepNhanBenhNhanMessage.MessageDichVuTonTai);
        //         return;
        //     };
        // }
        this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(this.themChiDinhDichVuModel.MaDichVuId);
        if (this.showbuttonLuuVaInPhieuXetNghiem == true) {
            this.dialog
                .open(_xn_covid_popup_xn_covid_popup_component__WEBPACK_IMPORTED_MODULE_53__["XnCovidPopupComponent"], {
                width: "600px",
                data: { LoaiMauXetNghiem: this.loaiBenhPham, LoaiMauXetNghiemText: this.loaiBenhPhamText }
            })
                .afterClosed()
                .subscribe((result) => {
                if (result != undefined) {
                    this.tiepNhanBenhNhan.BieuHienLamSang = result.BieuHienLamSang;
                    this.tiepNhanBenhNhan.DichTeSarsCoV2 = result.DichTeSarsCoV2;
                }
            });
        }
        let self = this;
        this.validationErrors = null;
        this.themChiDinhDichVuModel.yeuCauTiepNhanId = this.id;
        // xử lý list id check trước đó => sau mỗi lần thêm grid refesh những giá trị item check trước đó sẻ mất
        if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
            let gridData = this.gridInChiDinh.getAllDataFromDatasource();
            gridData.forEach(elements => {
                // this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                //     if (lstChiDinh.dichVuChiDinhId == elements.Id && lstChiDinh.nhomChiDinhId == elements.NhomId && elements) {
                //         let obj = {
                //             Id: elements.Id,
                //             NhomId: elements.NhomId
                //         };
                //         this.listChonDichVuChiDinhReLoad.push(obj);
                //     }
                // });
                if (elements.isCheckRowItem == true) {
                    let obj = {
                        Id: elements.Id,
                        NhomId: elements.NhomId
                    };
                    this.listChonDichVuChiDinhReLoad.push(obj);
                }
            });
        }
        this.themChiDinhDichVuModel.ListDichVuCheckTruocDos = this.listChonDichVuChiDinhReLoad;
        let urlDefault = "TiepNhanBenhNhan/ThemDichVuForUpdateView";
        if (loaiDichVuKhac == 4) {
            urlDefault = "TiepNhanBenhNhan/ThemDichVuKyThuatForUpdateView";
        }
        else if (loaiDichVuKhac == 5) {
            urlDefault = "TiepNhanBenhNhan/ThemDichVuGiuongForUpdateView";
        }
        //Goi new
        else if (loaiDichVuKhac == 6) {
            urlDefault = "TiepNhanBenhNhan/ThemDichVuTuGoiUpdateView";
        }
        else if (loaiDichVuKhac == 1) {
            urlDefault = "TiepNhanBenhNhan/ThemGoiKhongChietKhau";
            this.themChiDinhDichVuModel.LaGoi = true;
            this.themChiDinhGoiModel.LaGoi = true;
            this.themChiDinhDichVuModel.MaDichVuId = this.themChiDinhDichVuModel.MaDichVuGoiId;
            this.themChiDinhGoiModel.MaDichVuId = this.themChiDinhGoiModel.MaDichVuGoiId;
            //console.log("ThemGoiKhongChietKhau = ", this.duocHuongBHYT);
            this.themChiDinhGoiModel.DuocHuongBHYT = this.duocHuongBHYT;
        }
        else if (loaiDichVuKhac == 2) {
            urlDefault = "TiepNhanBenhNhan/ThemGoiCoChietKhau";
            this.themChiDinhDichVuModel.LaGoi = true;
            this.themChiDinhGoiModel.LaGoi = true;
            this.themChiDinhDichVuModel.MaDichVuId = this.themChiDinhDichVuModel.MaDichVuGoiId;
            this.themChiDinhGoiModel.MaDichVuId = this.themChiDinhGoiModel.MaDichVuGoiId;
        }
        if (loaiDichVuKhac == 6) {
        }
        else if (loaiDichVuKhac == 1 || loaiDichVuKhac == 2) {
            //console.log("themChiDinhDichVuKhacKhamBenh = ", loaiDichVuKhac, urlDefault);
            this.apiService.post(urlDefault, this.themChiDinhGoiModel).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    //console.log("----------- ",resultData);
                    // resultData.forEach(obj => {
                    //     obj.LoaiDichVuKhac = loaiDichVuKhac;
                    //     this.tiepNhanBenhNhan.YeuCauKhacGrid.push(obj);
                    //     this.setDataForDichVuKhac();
                    //     this.setGiaBHYT();
                    //     this.refreshGrid();
                    //     this.removeThemDichVuValue();
                    // });
                    //check validate
                    let added = true;
                    resultData.forEach(obj => {
                        if (loaiDichVuKhac == 2) {
                            let modelValid = this.tiepNhanBenhNhan.YeuCauKhacGrid
                                .find(o => o.MaDichVuId == obj.MaDichVuId && o.Nhom == obj.Nhom);
                            if (modelValid != null && modelValid != undefined) {
                                added = false;
                            }
                        }
                    });
                    if (!added) {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageDichVuTrongGoiTonTai);
                        return;
                    }
                    ;
                    //
                    let model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["AddGoiForUpdateView"]();
                    model.LstGrid = new Array();
                    model.YeuCauTiepNhanId = this.id;
                    model.LstGrid = resultData;
                    model.MucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                    let dialogRef = this.dialog.open(_popup_them_goi_popup_them_goi_component__WEBPACK_IMPORTED_MODULE_30__["PopupThemGoiComponent"], {
                        disableClose: false,
                        width: '1000px',
                        height: '450px',
                        data: model,
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        //console.log("close = ", result);
                        //this.clearData();
                        //this.isActivePopup = false;
                        if (result != undefined && result != null) {
                            self.tiepNhanBenhNhan.YeuCauKhacGrid = result;
                            self.setDataForDichVuKhac();
                            self.refreshGrid();
                        }
                        self.removeThemDichVuValue();
                        self.removeThemGoiValue();
                    });
                }
                else {
                }
            }, (err) => {
                // self.validationErrors = err.ValidationErrors;
                this.themChiDinhDichVuModel.LaGoi = false;
                this.themChiDinhGoiModel.LaGoi = false;
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
            });
        }
        else {
            this.apiService.post(urlDefault, this.themChiDinhDichVuModel).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    //resultData.LoaiDichVuKhac = loaiDichVuKhac;
                    // this.tiepNhanBenhNhan.YeuCauKhacGrid.push(resultData);
                    // this.setDataForDichVuKhac();
                    // this.setGiaBHYT();
                    // this.refreshGrid();
                    this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                    this.removeThemDichVuValue();
                    this.removeThemGoiValue();
                }
                else {
                }
            }, (err) => {
                // self.validationErrors = err.ValidationErrors;
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
            });
        }
    }
    checkValidAddChiDinhDichVuKhac(id) {
        let nhom = 'DỊCH VỤ KHÁM BỆNH';
        if (this.loaiTiepNhan == 2) {
            nhom = 'DỊCH VỤ KỸ THUẬT';
        }
        else if (this.loaiTiepNhan == 1) {
            nhom = 'DỊCH VỤ KHÁM BỆNH';
        }
        else {
            nhom = 'DỊCH VỤ GIƯỜNG';
        }
        let model = this.tiepNhanBenhNhan.YeuCauKhacGrid
            //.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
            .find(obj => obj.MaDichVuId == id && obj.Nhom == nhom);
        //console.log("checkValidAddChiDinhDichVuKhac = ", model, nhom);
        if (model != undefined) {
            return false;
        }
        return true;
    }
    //#endregion chi dinh dich vu
    //#region tai lieu dinh kem
    setDataForTaiLieuDinhKem() {
        //console.log("abc = ", this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length);
        this.gridDataTaiLieuDinhKem = {
            data: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans,
            total: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length
        };
    }
    //#endregion tai lieu dinh kem
    //#region BHYT
    setValueBHYT(model) {
        //console.log("setValueBHYT = ", model, this.isSetValue);
        if (model != null && model.maSoBHXH == null && this.isSetValue == false && model != undefined || this.isActivePopup == true)
            return;
        this.isSetValue = true;
        let STT = 1;
        this.lichSuKCB = new Array();
        if (model.dsLichSuKCB2018 != null && model.dsLichSuKCB2018 != undefined) {
            model.dsLichSuKCB2018.forEach(element => {
                let childModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridLichSuKCB"]();
                childModel.STT = STT;
                childModel.MaTheBHYT = model.maThe;
                childModel.HoVaTen = model.hoTen;
                childModel.NgayVaoVien = element.ngayVaoDisplay;
                childModel.NgayRaVien = element.ngayRaDisplay;
                childModel.CoSoKCB = element.coSoKCB;
                childModel.MaCoSoKCB = element.maCSKCB;
                childModel.KetQuaDieuTri = element.kqDieuTriDisplay;
                childModel.KetQuaDieuTriNumber = +element.kqDieuTri;
                childModel.LyDoVaoVien = element.lyDoVVDisplay;
                childModel.LyDoVaoVienNumber = +element.lyDoVV;
                childModel.TinhTrangRaVien = element.tinhTrangDisplay;
                childModel.TinhTrangRaVienNumber = +element.tinhTrang;
                childModel.NgayVaoDateTime = element.ngayVaoDateTime;
                childModel.NgayRaDateTime = element.ngayRaDateTime;
                this.lichSuKCB.push(childModel);
                STT = STT + 1;
            });
            this.tiepNhanBenhNhan.GridLichSuKCB = this.lichSuKCB;
        }
        //
        let STT2 = 1;
        this.lichSuKiemTraTheBHYTGrid = new Array();
        if (model.dsLichSuKT2018 != null && model.dsLichSuKT2018 != undefined) {
            model.dsLichSuKT2018.forEach(element => {
                let childModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridLichSuKiemTraTheBHYT"]();
                childModel.STT = STT2;
                childModel.UserKiemTra = element.userKT;
                childModel.ThoiGianKiemTra = element.thoiGianKTDisplay;
                childModel.thoiGianKTDateTime = element.thoiGianKTDateTime;
                childModel.TenCSKCB = element.tenCSKCB;
                childModel.MaCSKCB = element.maCSKCB;
                childModel.NoiDungThongBao = element.thongBao;
                this.lichSuKiemTraTheBHYTGrid.push(childModel);
                STT2 = STT2 + 1;
            });
            this.tiepNhanBenhNhan.GridLichSuKiemTraTheBHYT = this.lichSuKiemTraTheBHYTGrid;
        }
        //console.log("setValueBHYT = ", model)
        this.tiepNhanBenhNhan.BHYTMaSoThe = model.maThe;
        //set muc do huong quyen loi bao hiem
        this.setSoPhanTramHuongBHYT(model.maThe);
        //
        this.tiepNhanBenhNhan.HoTen = model.hoTen;
        // var dateParts = model.ngaySinh.split("/");
        // this.tiepNhanBenhNhan.NgayThangNamSinh = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        // this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
        // this.tiepNhanBenhNhan.NgayThangNamSinhDisplay = model.ngaySinh,
        if (model.ngaySinh.indexOf("/") == -1) {
            this.tiepNhanBenhNhan.NamSinh = +model.ngaySinh;
        }
        else {
            var dateParts = model.ngaySinh.split("/");
            if (dateParts.length == 3) {
                this.tiepNhanBenhNhan.NgayThangNamSinh = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
                this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
                this.tiepNhanBenhNhan.NgayThangNamSinhDisplay = model.ngaySinh;
            }
        }
        this.tiepNhanBenhNhan.GioiTinh = model.gioiTinh == 'Nam' ? src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_4__["GioiTinh"].Nam : src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_4__["GioiTinh"].Nu;
        this.tiepNhanBenhNhan.GioiTinhDisplay = model.gioiTinh;
        //this.tiepNhanBenhNhan.NoiDangKyBHYT = this.getBenhVienByMa(model.maDKBD);
        this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + model.maDKBD).subscribe(resultData => {
            this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;
        }, () => {
            //return null;
            //console.log("error")
        });
        // this.apiService.post<any>("TiepNhanBenhNhan/GetThongTinTaiKhoanBenhNhan?maSoBHYT=" + model.maThe).subscribe(
        //   resultData => {
        //     this.thongTinTaiKhoanBenhNhan = resultData;
        //   },
        //   () => {
        //     //return null;
        //     //console.log("error")
        //   });
        // this.apiService.post<any>("TiepNhanBenhNhan/GetThongTinBenhNhan?maSoBHYT=" + model.maThe).subscribe(
        //   resultData => {
        //     if (resultData != null) {
        //       this.tiepNhanBenhNhan.DiaChi = resultData.DiaChi;
        //       this.tiepNhanBenhNhan.SoDienThoai = resultData.SoDienThoai;
        //       this.tiepNhanBenhNhan.SoChungMinhThu = resultData.SoChungMinhThu;
        //       this.tiepNhanBenhNhan.Email = resultData.Email;
        //       this.tiepNhanBenhNhan.NgheNghiepId = resultData.NgheNghiepId;
        //       this.tiepNhanBenhNhan.SoDienThoai = resultData.SoDienThoai;
        //       this.tiepNhanBenhNhan.GioiTinh = resultData.GioiTinh;
        //       this.tiepNhanBenhNhan.NoiLamViec = resultData.NoiLamViec;
        //       this.tiepNhanBenhNhan.QuocTichId = resultData.QuocTichId;
        //     }
        //   },
        //   () => {
        //     //return null;
        //     //console.log("error")
        //   });
        //Vu Le & Thach comment 13/08/2020. Ly Do: chưa rõ
        // this.apiService.post<any>("TiepNhanBenhNhan/GetIdBenhNhan?maSoBHYT=" + model.maThe).subscribe(
        //     resultData => {
        //         this.benhNhanId = resultData;
        //         console.log(this.benhNhanId)
        //     },
        //     () => {
        //         //return null;
        //         //console.log("error")
        //     });
        this.tiepNhanBenhNhan.BHYTDiaChi = model.diaChi;
        this.setDiaChiBHYTForModel(model.diaChi);
        //popup
        this.tiepNhanBenhNhan.MaDKBD = model.maDKBD;
        this.tiepNhanBenhNhan.BHYTMaDKBD = model.maDKBD;
        this.tiepNhanBenhNhan.NgayCoHieuLucDisplay = model.gtTheTu;
        var dateParts2 = model.gtTheTu.split("/");
        this.tiepNhanBenhNhan.BHYTNgayHieuLuc = new Date(+dateParts2[2], +dateParts2[1] - 1, +dateParts2[0]);
        if (model.gtTheDen != undefined && model.gtTheDen != null) {
            this.tiepNhanBenhNhan.NgayHetHieuLucDisplay = model.gtTheDen;
            var dateParts3 = model.gtTheDen.split("/");
            this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(+dateParts3[2], +dateParts3[1] - 1, +dateParts3[0]);
        }
        this.tiepNhanBenhNhan.NgayDu5NamDisplay = model.ngayDu5Nam;
        this.tiepNhanBenhNhan.DiaChiDisplay = model.diaChi;
        this.tiepNhanBenhNhan.cqBHXH = model.cqBHXH;
        this.tiepNhanBenhNhan.BHYTCoQuanBHXH = model.cqBHXH;
        if (model.ngayDu5Nam != null && model.ngayDu5Nam != undefined && model.ngayDu5Nam != "") {
            var dateParts4 = model.ngayDu5Nam.split("/");
            this.tiepNhanBenhNhan.BHYTNgayDu5Nam = new Date(+dateParts4[2], +dateParts4[1] - 1, +dateParts4[0]);
        }
        //
        this.setTuyenKhamBenh(model.maDKBD);
        //
        //test
        //model.isConnectSuccessfully = false;
        //
        if (model.isConnectSuccessfully == false) {
            //console.log("model.isConnectSuccessfully");
            this.tiepNhanBenhNhan.IsCheckedBHYT = false;
            this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
            let dialogRef = this.dialog.open(_popup_khong_kiem_tra_duoc_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_26__["PopupKhongKiemTraDuocComponent"], {
                disableClose: true,
                width: '700px',
                height: '300px',
                data: this.tiepNhanBenhNhan,
            });
            dialogRef.afterClosed().subscribe(result => {
                //console.log("TiepNhanBenhNhanPopupKhongKiemTraDuocComponent = ",result);
                if (result == true) {
                    this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                    this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
                    this.tiepNhanBenhNhan.CoBHYT = true;
                    this.tiepNhanBenhNhan.TuNhap = true;
                }
                else if (result == false) {
                    this.tiepNhanBenhNhan.CoBHYT = false;
                    this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
                    this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                }
                else if (result != undefined) {
                    //console.log("------- ", result);
                    this.setValueBHYT(result);
                }
            });
        }
        else {
            this.tiepNhanBenhNhan.IsCheckedBHYT = true;
            this.checkOutOfDateBHYT(this.tiepNhanBenhNhan.BHYTNgayHetHan);
        }
        //Get tuoi
        this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
        //disable search qr code
        this.isSearchQRCodeEnable = false;
        //set value da tim kiem
        this.hoTenDaTimKiem = model.hoTen;
        this.maSoTheDaTimKiem = model.maThe;
        this.ngaySinhDaTimKiem = this.tiepNhanBenhNhan.NgayThangNamSinh;
        //
        //console.log("setValueBHYT = ", this.tiepNhanBenhNhan)
        this.isSetValue = false;
    }
    onKey(event, isSoTheBHYT, loai = 1) {
        if (isSoTheBHYT == true) {
            this.bindMucHuongFromSoTheBHYT(this.tiepNhanBenhNhan.BHYTMaSoThe);
        }
        // if(loai == 1){
        //     this.modelTimKiemBenhNhan.MaBHYT = this.tiepNhanBenhNhan.BHYTMaSoThe;
        // }
        // else if(loai == 2){
        //     this.modelTimKiemBenhNhan.HoTen = this.tiepNhanBenhNhan.HoTen;
        // }
        // else if(loai == 3){
        //     this.modelTimKiemBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        //     //console.log("-------------: ",this.tiepNhanBenhNhan.NgayThangNamSinh);
        // }
        //this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
        //console.log("onKey = ", this.tiepNhanBenhNhan.HoTen);
        if (event.keyCode === 13) {
            if (loai == 3 && this.tiepNhanBenhNhan.NgayThangNamSinh != null && this.tiepNhanBenhNhan.NgayThangNamSinh != undefined) {
                this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
            }
        }
        if (this.isCheckedBHYT == true || this.isHaveBHYTUpdated == true || this.tiepNhanBenhNhan.CoBHYT != true)
            return;
        if (this.tiepNhanBenhNhan.TuNhap == true && this.isScanF1 == false && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$")))
            return;
        this.isCheckedBHYT = true;
        let isQrCodeScan = false;
        if (isSoTheBHYT == true && this.tiepNhanBenhNhan.BHYTMaSoThe != null
            && this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$")) {
            //console.log("successfully");
            this.inputQrCode(this.tiepNhanBenhNhan.BHYTMaSoThe);
            isQrCodeScan = true;
        }
        if (this.isSearchQRCodeEnable == true && isQrCodeScan == false) {
            //console.log("enter submit");
            if (event.keyCode === 13) {
                this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
                this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
                this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
                this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;
                var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]("en-US");
                this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');
                //console.log("---------: ", this.thongTinBenhNhan.MaThe == null, this.thongTinBenhNhan.MaThe == "" );
                if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.MaThe != ""
                    && this.thongTinBenhNhan.TenBenhNhan != null && this.thongTinBenhNhan.TenBenhNhan != ""
                    && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {
                    let dialogRef = this.dialog.open(_popup_cho_quet_popup_cho_quet_component__WEBPACK_IMPORTED_MODULE_27__["PopupChoQuetComponent"], {
                        disableClose: true,
                        width: '500px',
                        height: '250px',
                        data: this.thongTinBenhNhan,
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        //console.log("close = ", result);
                        // if (result == null || (result != null && result.maKetQua == "050")) {
                        if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                            //this.clearData();
                            //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                            //
                            this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                            let dialogRef = this.dialog.open(_popup_error_popup_error_component__WEBPACK_IMPORTED_MODULE_28__["PopupErrorComponent"], {
                                disableClose: false,
                                width: '700px',
                                height: '300px',
                                data: this.tiepNhanBenhNhan,
                            });
                            dialogRef.afterClosed().subscribe(result => {
                                //document.getElementById("SoTheBHYTisAutoFocus").focus();
                                this.isCheckedBHYT = false;
                                if (result == 2) {
                                    this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                    this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
                                    this.tiepNhanBenhNhan.CoBHYT = true;
                                    this.tiepNhanBenhNhan.TuNhap = true;
                                }
                                else if (result == 1) {
                                    this.tiepNhanBenhNhan.CoBHYT = false;
                                    this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
                                    this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                                }
                                else if (result != undefined) {
                                    //console.log("------- ", result);
                                    this.setValueBHYT(result);
                                }
                            });
                            //
                        }
                        else {
                            //console.log("onkey = ",event, this.tiepNhanBenhNhan.BHYTMaSoThe)
                            this.isCheckedBHYT = false;
                            this.setValueBHYT(result);
                        }
                    });
                }
                else {
                    this.isCheckedBHYT = false;
                }
                //console.log(this.tiepNhanBenhNhan.BHYTMaSoThe);
            }
            else {
                this.isCheckedBHYT = false;
            }
        }
        else {
            this.isCheckedBHYT = false;
        }
    }
    blurMaNoiDKBD($event) {
        this.setNoiDKBD(this.tiepNhanBenhNhan.BHYTMaDKBD);
    }
    onKeyMaNoiDKBD($event) {
        if ($event.keyCode === 13) {
            this.setNoiDKBD(this.tiepNhanBenhNhan.BHYTMaDKBD);
        }
    }
    setNoiDKBD(ma) {
        this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + ma).subscribe(resultData => {
            this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;
        }, () => {
            //return null;
            //console.log("error")
        });
    }
    blur($event, isSoTheBHYT, loai = 1) {
        //console.log("blur", $event);
        if (loai == 3 && this.tiepNhanBenhNhan.NgayThangNamSinh != null && this.tiepNhanBenhNhan.NgayThangNamSinh != undefined) {
            this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
        }
        if (this.isCheckedBHYT == true || this.isHaveBHYTUpdated == true || this.tiepNhanBenhNhan.CoBHYT != true)
            return;
        if (this.tiepNhanBenhNhan.TuNhap == true && this.isScanF1 == false && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$")))
            return;
        this.isCheckedBHYT = true;
        if (isSoTheBHYT == true) {
            this.bindMucHuongFromSoTheBHYT(this.tiepNhanBenhNhan.BHYTMaSoThe);
        }
        if (this.isSearchQRCodeEnable == true && !(this.tiepNhanBenhNhan.BHYTMaSoThe != null && this.tiepNhanBenhNhan.BHYTMaSoThe.includes("$"))) {
            this.thongTinBenhNhan.MaThe = this.tiepNhanBenhNhan.BHYTMaSoThe;
            this.thongTinBenhNhan.TenBenhNhan = this.tiepNhanBenhNhan.HoTen;
            this.thongTinBenhNhan.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
            this.thongTinBenhNhan.NamSinh = this.tiepNhanBenhNhan.NamSinh;
            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]("en-US");
            this.thongTinBenhNhan.NgaySinhDisplay = datePipe.transform(this.tiepNhanBenhNhan.NgayThangNamSinh, 'dd/MM/yyyy');
            if (this.thongTinBenhNhan.MaThe != null && this.thongTinBenhNhan.MaThe != ""
                && this.thongTinBenhNhan.TenBenhNhan != null && this.thongTinBenhNhan.TenBenhNhan != ""
                && (this.thongTinBenhNhan.NgaySinh != null || this.thongTinBenhNhan.NamSinh != null)) {
                let dialogRef = this.dialog.open(_popup_cho_quet_popup_cho_quet_component__WEBPACK_IMPORTED_MODULE_27__["PopupChoQuetComponent"], {
                    disableClose: true,
                    width: '500px',
                    height: '250px',
                    data: this.thongTinBenhNhan,
                });
                dialogRef.afterClosed().subscribe(result => {
                    //console.log("close = ", result);
                    // if (result == null || (result != null && result.maKetQua == "050")) {
                    if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                        this.clearData();
                        //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                        //
                        this.tiepNhanBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                        let dialogRef = this.dialog.open(_popup_error_popup_error_component__WEBPACK_IMPORTED_MODULE_28__["PopupErrorComponent"], {
                            disableClose: true,
                            width: '700px',
                            height: '300px',
                            data: this.tiepNhanBenhNhan,
                        });
                        dialogRef.afterClosed().subscribe(result => {
                            //console.log("PopupErrorComponent ", result);
                            //document.getElementById("SoTheBHYTisAutoFocus").focus();
                            this.isCheckedBHYT = false;
                            if (result == 2) {
                                this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                                this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
                                this.tiepNhanBenhNhan.CoBHYT = true;
                                this.tiepNhanBenhNhan.TuNhap = true;
                            }
                            else if (result == 1) {
                                this.tiepNhanBenhNhan.CoBHYT = false;
                                this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
                                this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                            }
                            else if (result != undefined) {
                                //console.log("------- ", result);
                                this.setValueBHYT(result);
                            }
                        });
                        //
                    }
                    else {
                        this.isCheckedBHYT = false;
                        this.setValueBHYT(result);
                    }
                });
            }
            else {
                this.isCheckedBHYT = false;
            }
        }
        else {
            this.isCheckedBHYT = false;
        }
    }
    inputQrCode(qrCode) {
        this.apiService.post("BHYT/GetInfoFromURL/?model=" + qrCode).subscribe(resultData => {
            if (resultData != undefined) {
                this.modelQRCode = resultData;
                this.setValueBHYT(this.modelQRCode);
            }
        }, (err) => {
            //
            if (err.Message != "Validation Failed" && err.Message != null && err.Message != '') {
                this.tiepNhanBenhNhan.MessageErrFromBHYT = err.Message;
            }
            else {
                this.tiepNhanBenhNhan.MessageErrFromBHYT = null;
            }
            let dialogRef = this.dialog.open(_popup_error_popup_error_component__WEBPACK_IMPORTED_MODULE_28__["PopupErrorComponent"], {
                disableClose: false,
                width: '700px',
                height: '300px',
                data: this.tiepNhanBenhNhan,
            });
            dialogRef.afterClosed().subscribe(result => {
                document.getElementById("SoTheBHYTisAutoFocus").focus();
                this.isCheckedBHYT = false;
                if (result == 2) {
                    this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                    this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
                    this.tiepNhanBenhNhan.CoBHYT = true;
                    this.tiepNhanBenhNhan.TuNhap = true;
                }
                else if (result == 1) {
                    this.tiepNhanBenhNhan.CoBHYT = false;
                    this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].KhongXacDinh;
                    this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                }
                else if (result != undefined) {
                    //console.log("------- ", result);
                    this.setValueBHYT(result);
                }
            });
            //
        });
    }
    setTuyenKhamBenh(maDKBD) {
        this.apiService.post("TiepNhanBenhNhan/IsDungTuyen?maBenhVien=" + maDKBD).subscribe(resultData => {
            //console.log("IsDungTuyen",resultData)
            if (resultData == true) {
                this.isDungTuyenDisplay = "Đúng tuyến";
                this.isDungTuyen = true;
                this.tiepNhanBenhNhan.LyDoVaoVien = 1;
            }
            else {
                this.isDungTuyenDisplay = "Đúng tuyến";
                this.isDungTuyen = true;
                this.tiepNhanBenhNhan.LyDoVaoVien = 1;
            }
            this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        }, () => {
            //console.log("error")
        });
    }
    setSoPhanTramHuongBHYT(maThe) {
        let maTheArray = maThe.split("");
        if (maTheArray[2] == '1') {
            this.soPhanTramHuongBHYT = 100;
        }
        else if (maTheArray[2] == '2') {
            this.soPhanTramHuongBHYT = 100;
        }
        else if (maTheArray[2] == '3') {
            this.soPhanTramHuongBHYT = 95;
        }
        else if (maTheArray[2] == '4') {
            this.soPhanTramHuongBHYT = 80;
        }
        else {
            this.soPhanTramHuongBHYT = 100;
        }
        this.tiepNhanBenhNhan.BHYTMucHuong = this.soPhanTramHuongBHYT;
        // this.themChiDinhDichVuModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
        // this.themChiDinhGoiModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
        this.setSoPhanTramHuongBHYTForThemChiDinh();
    }
    setSoPhanTramHuongBHYTForThemChiDinh() {
        this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        this.themChiDinhGoiModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
    }
    blurDiaChi($event) {
        this.setDiaChiBHYTForModel(this.tiepNhanBenhNhan.BHYTDiaChi);
    }
    onKeyDiaChi($event) {
        if ($event.keyCode === 13) {
            this.setDiaChiBHYTForModel(this.tiepNhanBenhNhan.BHYTDiaChi);
        }
    }
    setDiaChiBHYTForModel(diaChi) {
        let self = this;
        var coDiaChi = self.kiemTraDiaChiDaCo(); // BVHD-3768
        var coDiaChiGiamHo = self.kiemTraDiaChiDaCo(true); // BVHD-3768
        if ((diaChi == undefined || diaChi == null || diaChi == '')) // && !coDiaChi) {
         {
            if (!coDiaChi) {
                this.tiepNhanBenhNhan.TinhThanhId = null;
                this.tiepNhanBenhNhan.QuanHuyenId = null;
                this.tiepNhanBenhNhan.PhuongXaId = null;
                this.tiepNhanBenhNhan.DiaChi = null;
            }
            return;
        }
        let lstDiaChi = diaChi.split(",");
        if ((lstDiaChi.length < 3)) // && !coDiaChi) {
         {
            if (!coDiaChi) {
                this.tiepNhanBenhNhan.TinhThanhId = null;
                this.tiepNhanBenhNhan.QuanHuyenId = null;
                this.tiepNhanBenhNhan.PhuongXaId = null;
                this.tiepNhanBenhNhan.DiaChi = null;
            }
            return;
        }
        let tinhThanhPho = lstDiaChi[lstDiaChi.length - 1].trim();
        let quanHuyen = lstDiaChi[lstDiaChi.length - 2].trim();
        let phuongXa = lstDiaChi[lstDiaChi.length - 3].trim();
        let soNha = null;
        if (lstDiaChi.length >= 4) {
            let index = diaChi.indexOf(lstDiaChi[lstDiaChi.length - 3]);
            soNha = diaChi.slice(0, index - 1);
        }
        let model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["DiaChiBHYT"]();
        model.TinhThanh = tinhThanhPho;
        model.QuanHuyen = quanHuyen;
        model.PhuongXa = phuongXa;
        this.apiService.post("TiepNhanBenhNhan/GetDiaChiBHYT", model).subscribe(resultData => {
            //cheat cho combobox hoat dong
            if (!coDiaChi) {
                this.tiepNhanBenhNhan.PhuongXaId = null;
                this.tiepNhanBenhNhan.QuanHuyenId = null;
                this.tiepNhanBenhNhan.TinhThanhId = null;
                this.tiepNhanBenhNhan.DiaChi = null;
            }
            setTimeout(function () {
                if (!coDiaChi) {
                    self.tiepNhanBenhNhan.PhuongXaId = resultData.PhuongXaId;
                    self.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                    self.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                    self.tiepNhanBenhNhan.DiaChi = soNha;
                }
                if (self.under6yearsold && !coDiaChiGiamHo) {
                    self.cloneDiaChiNguoiGiamHo();
                }
                if (this.under6yearsold == false) {
                    this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
                }
            }, 500);
            // dev cũ cheat
            //this.tiepNhanBenhNhan.DiaChi = soNha;
        }, () => {
            //return null;
            //console.log("error")
        });
    }
    kiemTraDiaChiDaCo(laGiamHo = false) {
        if (laGiamHo) {
            return this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId || this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId || this.tiepNhanBenhNhan.NguoiLienHePhuongXaId || this.tiepNhanBenhNhan.NguoiLienHeDiaChi;
        }
        else {
            return this.tiepNhanBenhNhan.TinhThanhId || this.tiepNhanBenhNhan.QuanHuyenId || this.tiepNhanBenhNhan.PhuongXaId || this.tiepNhanBenhNhan.DiaChi;
        }
    }
    // ngayHetHieuLucChange($event)
    // {
    //   if($event != null && $event != undefined){
    //     //console.log("ngayHetHieuLucChange = ", $event);
    //     this.tiepNhanBenhNhan.BHYTNgayHetHan = $event;
    //     this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    //   }
    // }
    blurNgayHetHieuLuc($event) {
        // if (this.removeBHYT != false) return;
        // this.removeBHYT = true;
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        //this.setDuocHuongBHYTAndChangeGrid();
    }
    onKeyNgayHetHieuLuc($event) {
        if ($event.keyCode === 13) {
            // if (this.removeBHYT != false) return;
            // this.removeBHYT = true;
            this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
            //this.setDuocHuongBHYTAndChangeGrid();
        }
    }
    blurNgayCoHieuLuc($event) {
        // if (this.removeBHYT != false) return;
        // this.removeBHYT = true;
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
        //this.setDuocHuongBHYTAndChangeGrid();
    }
    onKeyNgayCoHieuLuc($event) {
        if ($event.keyCode === 13) {
            // if (this.removeBHYT != false) return;
            // this.removeBHYT = true;
            this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
            //this.setDuocHuongBHYTAndChangeGrid();
        }
    }
    setDuocHuongBHYTAndChangeGrid() {
        let dateNow = new Date();
        let dateNgayHetHan = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
        //console.log("setDuocHuongBHYTAndChangeGrid = ", dateNgayHetHan
        //, this.tiepNhanBenhNhan.CoBHYT && this.tiepNhanBenhNhan.LyDoVaoVien == 1 && dateNgayHetHan > dateNow);
        if (this.tiepNhanBenhNhan.CoBHYT && this.tiepNhanBenhNhan.LyDoVaoVien == 1 && dateNgayHetHan > dateNow) {
        }
        else {
            this.lyDoVaoVienChange(this.tiepNhanBenhNhan.LyDoVaoVien, true);
        }
    }
    setDuocHuongBHYT(CoBHYT = false, LyDoVaoVien = 1) {
        //console.log("setDuocHuongBHYT");
        let dateNow = new Date((new Date()).toDateString());
        // console.log("setDuocHuongBHYT = ", CoBHYT, LyDoVaoVien
        // , this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHieuLuc < dateNow, this.tiepNhanBenhNhan.BHYTNgayHetHan);
        let dateNgayHetHan = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
        let dateCoHieuLuc = new Date(this.tiepNhanBenhNhan.BHYTNgayHieuLuc);
        //console.log("setDuocHuongBHYT = ", CoBHYT, LyDoVaoVien, LyDoVaoVien == 1, dateNgayHetHan > dateNow
        //, dateNgayHetHan, dateNow)
        if (CoBHYT && LyDoVaoVien == 1 && dateNgayHetHan >= dateNow && dateCoHieuLuc <= dateNow) {
            //console.log("setDuocHuongBHYT = ", CoBHYT, LyDoVaoVien, LyDoVaoVien == 1, this.tiepNhanBenhNhan.BHYTNgayHetHan)
            this.themChiDinhDichVuModel.DuocHuongBHYT = true;
            this.themChiDinhGoiModel.DuocHuongBHYT = true;
            this.duocHuongBHYT = true;
            this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
            this.themChiDinhGoiModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
            this.addBHYTForGridChiDinhDichVu();
        }
        else {
            this.themChiDinhDichVuModel.DuocHuongBHYT = false;
            this.themChiDinhGoiModel.DuocHuongBHYT = false;
            this.duocHuongBHYT = false;
            this.themChiDinhDichVuModel.BHYTMucHuong = null;
            this.themChiDinhGoiModel.BHYTMucHuong = null;
            this.removeBHYTForGridChiDinhDichVu();
        }
        if (!this.enableDuocHuongBHYT) {
            this.themChiDinhDichVuModel.DuocHuongBHYT = false;
            this.themChiDinhGoiModel.DuocHuongBHYT = false;
        }
        //console.log("setDuocHuongBHYT = ", this.duocHuongBHYT)
    }
    kiemTraTheBHYTHieuLucHienTai() {
        let dateNow = new Date((new Date()).toDateString());
        let dateNgayHetHan = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
        let dateCoHieuLuc = new Date(this.tiepNhanBenhNhan.BHYTNgayHieuLuc);
        return this.tiepNhanBenhNhan.CoBHYT == true && this.tiepNhanBenhNhan.LyDoVaoVien == 1 && dateNgayHetHan >= dateNow && dateCoHieuLuc <= dateNow;
    }
    addBHYTForGridChiDinhDichVu() {
        //khac
        // for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
        //     const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
        //     // console.log("addBHYTForGridChiDinhDichVu = ", item.GiaBHYT);
        //     // if (item.DuocHuongBHYT == true && item.GiaBHYT != 0) {
        //     //   item.BHYTThanhToan = item.GiaBHYT;
        //     //   //item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
        //     //   item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan;
        //     // }
        // }
        //this.setGiaBHYT();
        //this.addOrRemoveListDichVuToServer();
        // this.setDataForDichVuKhac();
        // this.refreshGrid();
    }
    removeBHYTForGridChiDinhDichVu() {
        //dich vu ky thuat
        //khac
        for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
            const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
            if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0) {
                //item.BHYTThanhToan = 0;
                //item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                //item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan;
                item.DuocHuongBHYT = false;
            }
        }
        //this.addOrRemoveListDichVuToServer();
        // this.setDataForDichVuKhac();
        // this.refreshGrid();
    }
    addOrRemoveListDichVuToServer() {
        if (this.isAddOrDeleteGrid)
            return;
        this.isAddOrDeleteGrid = true;
        let modelUpdate = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridUpdate"]();
        this.setValueParamsUpdateListDichVu(modelUpdate);
        this.apiService.post("TiepNhanBenhNhan/AddOrDeleteListDichVuToServer", modelUpdate).subscribe(resultData => {
            //console.log("duocHuongBHYTChange = ", resultData);
            this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            this.setDataForDichVuKhac();
            this.refreshGrid();
            this.isAddOrDeleteGrid = false;
        }, (err) => {
            this.isAddOrDeleteGrid = false;
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
    }
    setValueParamsUpdateListDichVu(modelUpdate) {
        modelUpdate.lstChiDinhDichVu = new Array();
        modelUpdate.model = this.tiepNhanBenhNhan;
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
        modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(obj => {
            if (obj.IsGoiCoChietKhau != true) {
                let dichVu = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ListChiDinhNeedUpdate"]();
                dichVu.Nhom = obj.Nhom;
                dichVu.DichVuId = obj.MaDichVuId;
                modelUpdate.lstChiDinhDichVu.push(dichVu);
            }
        });
    }
    // setGiaBHYT() {
    //     //console.log("setGiaBHYT = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
    //     //this.setGiaBHYTSoLanKham();
    //     let soLanKham = 1;
    //     let tyLeLan1 = 0;
    //     let tyLeLan2 = 0;
    //     let tyLeLan3 = 0;
    //     let tyLeLan4 = 0;
    //     let tyLeLan5 = 0;
    //     ;
    //     this.apiService.get<Array<number>>("TiepNhanBenhNhan/GetTyLeSoLanHuongBHYTDichVu").subscribe(
    //         resultData => {
    //             if (resultData != null && resultData != undefined) {
    //                 //console.log("setGiaBHYTSoLanKham = ", resultData, resultData[0],  resultData[1]);
    //                 tyLeLan1 = resultData[0];
    //                 tyLeLan2 = resultData[1];
    //                 tyLeLan3 = resultData[2];
    //                 tyLeLan4 = resultData[3];
    //                 tyLeLan5 = resultData[4];
    //                 //console.log("Trươc = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
    //                 if (this.tiepNhanBenhNhan.YeuCauKhacGrid != null && this.tiepNhanBenhNhan.YeuCauKhacGrid != undefined) {
    //                     for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
    //                         const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
    //                         //console.log("index = ", item, soLanKham);
    //                         if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && item.GiaBHYT != 0) {
    //                             if (item.Nhom == 'DỊCH VỤ KHÁM BỆNH') {
    //                                 if (soLanKham == 1) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan1 / 100;
    //                                     soLanKham = soLanKham + 1;
    //                                 }
    //                                 else if (soLanKham == 2) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan2 / 100;
    //                                     soLanKham = soLanKham + 1;
    //                                 }
    //                                 else if (soLanKham == 3) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan3 / 100;
    //                                     soLanKham = soLanKham + 1;
    //                                 }
    //                                 else if (soLanKham == 4) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan4 / 100;
    //                                     soLanKham = soLanKham + 1;
    //                                 }
    //                                 else if (soLanKham == 5) {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan5 / 100;
    //                                     soLanKham = soLanKham + 1;
    //                                 }
    //                                 else {
    //                                     item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100 * 0 / 100;
    //                                     soLanKham = soLanKham + 1;
    //                                 }
    //                             }
    //                             else {
    //                                 item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100;
    //                             }
    //                             item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
    //                             item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
    //                         }
    //                     }
    //                 }
    //                 //this.setDataForDichVuKhac();
    //                 //console.log("Sau = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
    //             }
    //             let bhytKhacKhamBenh = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null)
    //                 .reduce((sum, item) => sum + item.BHYTThanhToan, 0);
    //             if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh < this.soTienBHYTSeThanhToan) {
    //                 for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
    //                     const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
    //                     if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && this.tiepNhanBenhNhan.BHYTMucHuong != null) {
    //                         item.BHYTThanhToan = item.BHYTThanhToan;
    //                         item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
    //                         item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
    //                     }
    //                 }
    //             }
    //             else if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh >= this.soTienBHYTSeThanhToan) {
    //                 for (let index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
    //                     const item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
    //                     if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && this.tiepNhanBenhNhan.BHYTMucHuong != null) {
    //                         item.BHYTThanhToan = item.BHYTThanhToan * this.tiepNhanBenhNhan.BHYTMucHuong / 100;
    //                         item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
    //                         item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
    //                     }
    //                 }
    //             }
    //             this.setDataForDichVuKhac();
    //             this.refreshGrid();
    //         }
    //     )
    // }
    checkOutOfDateBHYT(date) {
        //console.log("checkOutOfDateBHYT ");
        let dateNow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        ;
        //console.log("checkOutOfDateBHYT: ", dateNow, date, date.getTime() , dateNow.getTime())
        if (date.getTime() < dateNow.getTime()) {
            this.isActivePopup = true;
            this.isOutOfDate = true;
            this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].HetHieuLuc;
            //this.notificationService.showError("Thẻ bảo hiểm này đã hết hiệu lực, bạn phải chuyển qua khám nhân dân");
            let dialogRef = this.dialog.open(_popup_het_hieu_luc_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_25__["PopupHetHieuLucComponent"], {
                disableClose: true,
                width: '700px',
                height: '300px',
                data: this.tiepNhanBenhNhan,
            });
            dialogRef.afterClosed().subscribe(result => {
                //console.log("close = ", result);
                //this.clearData();
                this.isActivePopup = false;
                if (result == 1) {
                    this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].HetHieuLuc;
                    this.clearData();
                }
                else if (result == 2) {
                    this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                    this.tiepNhanBenhNhan.CoBHYT = true;
                    this.tiepNhanBenhNhan.TuNhap = true;
                }
                else {
                    this.tiepNhanBenhNhan.CoBHYT = false;
                    this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].HetHieuLuc;
                }
            });
        }
        else {
            this.isOutOfDate = false;
            this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_19__["TinhTrangThe"].ConHieuLuc;
        }
        this.tiepNhanBenhNhan.isOutOfDate = this.isOutOfDate;
        //console.log(date, dateNow);
        //console.log("checkOutOfDateBHYT = ", date.getTime(), " ---- ",  dateNow.getTime(), " ---- ", this.isOutOfDate)
    }
    //#endregion BHYT
    //#region upload file
    uploadFileDone(tapTin) {
        //console.log(tapTin);
        this.tiepNhanBenhNhan.GiayChuyenVien = tapTin;
        if (!this.cdRef.destroyed) {
            this.cdRef.detectChanges();
        }
        //console.log("aaaaa= ", this.tiepNhanBenhNhan)
    }
    uploadFileMienCungChiTraDone(tapTin) {
        //console.log(tapTin);
        this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra = tapTin;
        if (!this.cdRef.destroyed) {
            this.cdRef.detectChanges();
        }
        //console.log("aaaaa= ", this.tiepNhanBenhNhan)
    }
    uploadTaiLieuDone($event) {
        this.themTaiLieu.TaiLieu = $event;
        if (!this.cdRef.destroyed) {
            this.cdRef.detectChanges();
        }
    }
    //#endregion upload file
    //#region lich su kham chua benh
    lichSuKBC() {
        let dialogRef = this.dialog.open(_popup_lich_su_kham_chua_benh_popup_lich_su_kham_chua_benh_component__WEBPACK_IMPORTED_MODULE_29__["PopupLichSuKhamChuaBenhComponent"], {
            disableClose: false,
            width: '1000px',
            height: '409px',
            data: this.lichSuKCB,
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    lichSuKiemTraTheBHYT() {
        let dialogRef = this.dialog.open(_popup_lich_su_kiem_tra_bhyt_popup_lich_su_kiem_tra_bhyt_component__WEBPACK_IMPORTED_MODULE_32__["PopupLichSuKiemTraBhytComponent"], {
            disableClose: false,
            width: '1200px',
            height: '500px',
            data: this.lichSuKiemTraTheBHYTGrid,
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    //#endregion lich su kham chua benh
    //#region dropdownlist change
    QuanHuyenChange($event) {
        this.tiepNhanBenhNhan.QuanHuyenId = $event;
        //console.log("QuanHuyenChange = ", $event)
        this.tiepNhanBenhNhan.PhuongXaId = null;
        if (this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if (this.under6yearsold == false) {
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
        }
    }
    PhuongXaChange($event) {
        if ($event != null && $event != undefined) {
            this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(resultData => {
                this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors.length > 0) {
                    if (this.validationErrors && this.validationErrors.some(x => x.Field.includes('QuanHuyenId') || x.Field.includes('TinhThanhId'))) {
                        for (const validationItem of this.validationErrors.filter(x => x.Field.includes('QuanHuyenId') || x.Field.includes('TinhThanhId'))) {
                            this.validationErrors.splice(this.validationErrors.indexOf(validationItem), 1);
                        }
                    }
                }
            }, (err) => {
            });
        }
        else {
            this.tiepNhanBenhNhan.TinhThanhId = null;
            this.tiepNhanBenhNhan.QuanHuyenId = null;
        }
    }
    QuanHuyenNguoiLienHeChange($event) {
        console.log("QuanHuyenNguoiLienHeChange = ", $event);
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
    }
    TinhThanhPhoChange($event) {
        //console.log("TinhThanhPhoChange = ", $event)
        this.tiepNhanBenhNhan.QuanHuyenId = null;
        this.tiepNhanBenhNhan.PhuongXaId = null;
    }
    TinhThanhPhoNguoiLienHeChange($event) {
        console.log("TinhThanhPhoNguoiLienHeChange = ", $event);
        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
    }
    KhoaKhamChange($event) {
        //this.tiepNhanBenhNhan.PhongKhamVaBacSiId = null;
        this.apiService.post("TiepNhanBenhNhan/SetPhongKham?KhoaKhamId=" + $event).subscribe(resultData => {
            this.tiepNhanBenhNhan.PhongKhamVaBacSiId = resultData;
        }, (err) => {
        });
    }
    ThongTinBenhNhanHoTenChange($event) {
        if ($event != null) {
            //this.tiepNhanBenhNhan.HoTen = $event.toUpperCase();
        }
        if (this.hoTenDaTimKiem == $event && this.ngaySinhDaTimKiem == this.tiepNhanBenhNhan.NgayThangNamSinh
            && this.maSoTheDaTimKiem == this.tiepNhanBenhNhan.BHYTMaSoThe) {
            this.isSearchQRCodeEnable = false;
        }
        else {
            this.isSearchQRCodeEnable = true;
        }
    }
    ThongTinBenhNhanMaSoTHeChange($event) {
        if ($event != null) {
            this.tiepNhanBenhNhan.BHYTMaSoThe = $event.toUpperCase();
        }
        if (this.maSoTheDaTimKiem == $event && this.ngaySinhDaTimKiem == this.tiepNhanBenhNhan.NgayThangNamSinh
            && this.hoTenDaTimKiem == this.tiepNhanBenhNhan.HoTen) {
            this.isSearchQRCodeEnable = false;
        }
        else {
            this.isSearchQRCodeEnable = true;
        }
    }
    ThongTinBenhNhanNgaySinhChange($event) {
        if (this.hoTenDaTimKiem == this.tiepNhanBenhNhan.HoTen && this.ngaySinhDaTimKiem == $event
            && this.maSoTheDaTimKiem == this.tiepNhanBenhNhan.BHYTMaSoThe) {
            this.isSearchQRCodeEnable = false;
        }
        else {
            this.isSearchQRCodeEnable = true;
        }
        if (this.tiepNhanBenhNhan.NgayThangNamSinh != null) {
            this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
            this.getAge(this.tiepNhanBenhNhan.NgayThangNamSinh, new Date);
        }
        if ($event == null || $event == undefined) {
            this.under6yearsold = false;
            if (this.under6yearsold == false) {
                this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
            }
            // kiểm tra khi change ngày tháng năm sinh, nếu ko nhập vào data mà khi đó filed năm sinh đã có thì sẽ ko clear data năm sinh
            if (this.tiepNhanBenhNhan.NamSinh == undefined || this.tiepNhanBenhNhan.NamSinh == null) {
                this.tiepNhanBenhNhan.NamSinh = null;
            }
        }
    }
    LoaiDichVuKhacChange($event) {
        this.removeThemDichVuValue();
        //this.themChiDinhDichVuModel.LoaiDichVuKhac = $event;
    }
    loaiTiepNhanChange($event) {
        if ($event == 1) {
            this.tiepNhanBenhNhan.YeuCauKyThuatGrid = [];
            this.tiepNhanBenhNhan.YeuCauKhacGrid = [];
        }
        else if ($event == 2) {
            this.tiepNhanBenhNhan.YeuCauKhamBenhGrid = [];
            this.tiepNhanBenhNhan.YeuCauKhacGrid = [];
        }
        else {
            this.tiepNhanBenhNhan.YeuCauKhamBenhGrid = [];
            this.tiepNhanBenhNhan.YeuCauKyThuatGrid = [];
        }
        this.setDataForDichVuKhac();
        this.refreshGrid();
        this.removeThemDichVuValue();
        this.removeThemGoiValue();
    }
    //#endregion dropdownlist change
    removeThemDichVuValue() {
        //console.log("removeThemDichVuValue");
        this.themChiDinhDichVuModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemChiDinhDichVu"]();
        //this.setDuocHuongBHYT();
        this.themChiDinhDichVuModel.ThanhTien = null;
        //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;
        this.loaiTiepNhan = null;
        this.isGoiCoChietKhau = null;
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    }
    removeThemGoiValue() {
        //console.log("removeThemDichVuValue");
        this.themChiDinhGoiModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThemChiDinhDichVu"]();
        //this.setDuocHuongBHYT();
        this.themChiDinhGoiModel.ThanhTien = null;
        //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;
        this.loaiTiepNhan = null;
        this.isGoiCoChietKhau = null;
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
    }
    //#region update for grid
    duocHuongBHYTChange($event, id, nhom) {
        //console.log("duocHuongBHYTChange = ", $event, maDichVuId, nhom);
        let modelUpdate = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridUpdate"]();
        modelUpdate.model = this.tiepNhanBenhNhan;
        modelUpdate.isChecked = $event;
        modelUpdate.maDichVuId = id;
        modelUpdate.nhom = nhom;
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
        modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/CheckOrUncheckBHYTForDichVu", modelUpdate).subscribe(resultData => {
            //console.log("duocHuongBHYTChange = ", resultData);
            this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            this.setDataForDichVuKhac();
            this.refreshGrid();
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
    }
    changDuocHuongBHYT($event, dataItem) {
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageBHYTThayDoi);
            return;
        }
        let modelUpdate = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridUpdate"]();
        modelUpdate.isChecked = $event;
        modelUpdate.maDichVuId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.yeuCauTiepNhanId = this.id;
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/CapNhatDuocHuongBHYTDichVu", modelUpdate).subscribe(resultData => {
            this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            this.setDataForDichVuKhac();
            this.refreshGrid();
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                this.notificationService.showError(err.Message);
            }
            dataItem.DuocHuongBHYT = !$event;
        });
    }
    noiThucHienGridChange($event, dataItem) {
        //console.log("noiThucHienGridChange = ", $event, dataItem);
        if ($event == undefined) {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessagePhaiChonNoiThucHien);
            return;
        }
        let modelUpdate = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridUpdate"]();
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.maDichVuId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        modelUpdate.model = this.tiepNhanBenhNhan;
        modelUpdate.NoiThucHienId = $event;
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/NoiThucHienChange", modelUpdate).subscribe(resultData => {
            //console.log("noiThucHienGridChange = ", resultData);
            if (resultData == null)
                return;
            this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            this.setDataForDichVuKhac();
            this.refreshGrid();
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
    }
    removeGridKhac(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result == 'Yes') {
                //console.log("removeGridKhac = ", dataItem);
                let modelUpdate = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridUpdate"]();
                modelUpdate.yeuCauTiepNhanId = this.id;
                modelUpdate.maDichVuId = dataItem.Id;
                modelUpdate.nhom = dataItem.Nhom;
                modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                modelUpdate.model = this.tiepNhanBenhNhan;
                this.listChonDichVuChiDinhReLoad = [];
                if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
                    let gridData = this.gridInChiDinh.getAllDataFromDatasource();
                    gridData.forEach(elements => {
                        if (elements.isCheckRowItem == true) {
                            let obj = {
                                Id: elements.Id,
                                NhomId: elements.NhomId
                            };
                            this.listChonDichVuChiDinhReLoad.push(obj);
                        }
                    });
                }
                modelUpdate.ListDichVuCheckTruocDos = this.listChonDichVuChiDinhReLoad;
                this.validationErrors = null;
                this.apiService.post("TiepNhanBenhNhan/RemoveDichVu", modelUpdate).subscribe(resultData => {
                    //console.log("duocHuongBHYTChange = ", resultData);
                    this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                    this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
                    this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageRemoveDichVuSuccessfully);
                }, (err) => {
                    if (err != undefined && err.ValidationErrors != null) {
                        this.validationErrors = err.ValidationErrors;
                    }
                    else if (err != undefined && err.Errors == null) {
                        //self.validationErrors.push({ "Message": err.Message });
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        });
    }
    removeGridKhacCoChietKhau(item) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result == 'Yes') {
                //console.log("removeGridKhacCoChietKhau = ", item);
                let modelUpdate = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridUpdate"]();
                modelUpdate.yeuCauTiepNhanId = this.id;
                modelUpdate.maDichVuId = item.data[0].items[0].GoiCoChietKhauId;
                //modelUpdate.nhom = item.Nhom;
                modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                modelUpdate.model = this.tiepNhanBenhNhan;
                this.validationErrors = null;
                this.apiService.post("TiepNhanBenhNhan/RemoveDichVuCoChietKhau", modelUpdate).subscribe(resultData => {
                    //console.log("duocHuongBHYTChange = ", resultData);
                    this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                }, (err) => {
                    if (err != undefined && err.ValidationErrors != null) {
                        this.validationErrors = err.ValidationErrors;
                    }
                    else if (err != undefined && err.Errors == null) {
                        //self.validationErrors.push({ "Message": err.Message });
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        });
    }
    changeQR($event) {
        if ($event != null) {
            this.modelQRCode = $event;
            this.setValueBHYT(this.modelQRCode);
        }
        else {
        }
        this.isScanF1 = false;
        //console.log("changeQR = ", $event);
    }
    huy() {
        // this.router.navigate(['danh-sach-tiep-nhan/']);
        this.location.back();
    }
    cloneDiaChiNguoiGiamHo() {
        this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = this.tiepNhanBenhNhan.TinhThanhId;
        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = this.tiepNhanBenhNhan.QuanHuyenId;
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = this.tiepNhanBenhNhan.PhuongXaId;
        this.tiepNhanBenhNhan.NguoiLienHeDiaChi = this.tiepNhanBenhNhan.DiaChi;
    }
    cloneDiaChiNguoiGiamHoLonHon6Tuoi() {
        this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = null;
        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
        this.tiepNhanBenhNhan.NguoiLienHeDiaChi = null;
    }
    luuPhieu() {
        var self = this;
        self.validationErrors = null;
        let comfrim = "lưu phiếu khám bệnh cho bệnh nhân";
        if (self.tiepNhanBenhNhan.YeuCauKhacGrid == undefined || self.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0) {
            comfrim = "lưu thông tin cho người bệnh";
        }
        this.tiepNhanBenhNhan.NguoiGioiThieu = null;
        this.tiepNhanBenhNhan.NoiGioiThieu = null;
        //console.log("-----: ", this.documentType);
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
            //console.log("success");
            if (this.isActiveAction != null) {
                this.dialog.closeAll();
                this.isActiveAction = null;
            }
            this.isActiveAction = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].MessLockTemplate, [comfrim, ""]) }
            }).afterClosed().subscribe(result => {
                if (result == "Yes") {
                    self.apiService.post("TiepNhanBenhNhan/UpdateYeuCauKhamBenh", this.tiepNhanBenhNhan).subscribe(resultData => {
                        //console.log("result", resultData)
                        //self.router.navigate(['danh-sach-tiep-nhan/']);
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Thay đổi"]));
                        //self.ngOnInit();
                        window.location.reload();
                        //confirm
                    }, (err) => {
                        // self.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            let itemGiamHoValidate = err.ValidationErrors.find(p => p.Field == "NguoiLienHeHoTen"
                                || p.Field == "NguoiLienHeQuanHeNhanThanId" || p.Field == "NguoiLienHeSoDienThoai");
                            if (itemGiamHoValidate != null && itemGiamHoValidate != undefined) {
                                self.tabStrip.selectTab(2);
                                ;
                            }
                            self.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            self.notificationService.showError(err.Message);
                        }
                    });
                    //
                }
            });
        }
    }
    themTaiLieuButton() {
        // if(this.themTaiLieu.LoaiId != null && this.themTaiLieu.TaiLieu != null){
        //     console.log(this.themTaiLieu);
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/GetNameLoaiTaiLieuDinhKem", this.themTaiLieu).subscribe(resultData => {
            let taiLieuNew = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["HoSoYeuCauTiepNhanViewModel"]();
            taiLieuNew.Ma = this.themTaiLieu.TaiLieu.Ma;
            taiLieuNew.Ten = this.themTaiLieu.TaiLieu.Ten;
            taiLieuNew.TenGuid = this.themTaiLieu.TaiLieu.TenGuid;
            taiLieuNew.MoTa = this.themTaiLieu.MoTa;
            taiLieuNew.DuongDan = this.themTaiLieu.TaiLieu.DuongDan;
            taiLieuNew.KichThuoc = this.themTaiLieu.TaiLieu.KichThuoc;
            taiLieuNew.LoaiHoSoYeuCauTiepNhanId = this.themTaiLieu.LoaiId;
            taiLieuNew.LoaiDisplay = resultData;
            taiLieuNew.DuongDanTmp = this.themTaiLieu.TaiLieu.DuongDanTmp;
            taiLieuNew.AddNew = true;
            this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.push(taiLieuNew);
            this.setDataForTaiLieuDinhKem();
            this.clearThemTaiLieu();
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
        //}
    }
    removeTaiLieu(data) {
        //console.log("removeTaiLieu = ", data);
        // this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans = this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.filter(p => p.TenGuid != data.TenGuid
        //     && p.Ten != data.Ten && p.LoaiHoSoYeuCauTiepNhanId != data.LoaiHoSoYeuCauTiepNhanId
        //     && p.MoTa != data.MoTa);
        this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.splice(this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.indexOf(data), 1);
        this.setDataForTaiLieuDinhKem();
    }
    viewTaiLieu(file) {
        //console.log("viewTaiLieu = ", dataItem);
        let duongDan = file.DuongDan;
        if (file.AddNew) {
            duongDan = file.DuongDanTmp;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpParams"]({
            fromObject: {
                tenGuid: file.TenGuid,
                duongDan: duongDan,
            }
        });
        // let response = await this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).toPromise();
        this.apiService.get('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe((resp) => {
            if (resp) {
                if (file.TenGuid.indexOf(".pdf") != -1 || file.TenGuid.indexOf(".PDF") != -1) {
                    var html = "<div class=\"showFile\">";
                    html += "<div class=\"overlay\"></div>";
                    html += "<div class=\"middle\">";
                    html += "<div class=\"inner\">";
                    html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                    html += "<iframe src='" + resp + "' style=\"width:770px; height:570px;\" frameborder=\"0\"></iframe>";
                    html += "</div>";
                    html += "</div>";
                    html += "</div>";
                    $(html).appendTo('app-main');
                }
                else {
                    var html = "<div class=\"showFile\">";
                    html += "<div class=\"overlay\"></div>";
                    html += "<div class=\"middle\">";
                    html += "<div class=\"inner\">";
                    html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                    html += "<img src='" + resp + "' alt='' style=\"max-width: 770px;max-height: 570px;\"/>";
                    html += "</div>";
                    html += "</div>";
                    html += "</div>";
                    $(html).appendTo('app-main');
                }
            }
        });
    }
    //#endregion update for grid
    removeGridBHTN(id) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result == 'Yes') {
                this.validationErrors = null;
                this.apiService.post("TiepNhanBenhNhan/IsHaveCongNo/?yeuCauTiepNhanId=" + this.id
                    + "&congTyId=" + id).subscribe(resultData => {
                    if (resultData != null && resultData != undefined && resultData == false) {
                        //remove BHTN
                        let index = this.lstBHTN.find(obj => obj.CongTyBaoHiemTuNhanId == id);
                        this.lstBHTN.splice(this.lstBHTN.indexOf(index), 1);
                        this.gridDataSourceBHTN = {
                            data: this.lstBHTN,
                            total: this.lstBHTN.length
                        };
                        this.updateBHTN();
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageBHTNCongNo);
                    }
                }, (err) => {
                    if (err != undefined && err.ValidationErrors != null) {
                        this.validationErrors = err.ValidationErrors;
                    }
                    else if (err != undefined && err.Errors == null) {
                        //self.validationErrors.push({ "Message": err.Message });
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        });
    }
    LoaiGiaChange($event) {
        let model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GetDonGiaVo"]();
        if ($event != undefined && $event != null
            && this.themChiDinhDichVuModel.MaDichVuId != null && this.themChiDinhDichVuModel.MaDichVuId != undefined) {
            //console.log($event);
            model.NhomGiaDichVuKhamBenhBenhVienId = $event;
            model.DichVuKhamBenhBenhVienId = this.themChiDinhDichVuModel.MaDichVuId;
            this.apiService.post("TiepNhanBenhNhan/GetDonGia", model).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.themChiDinhDichVuModel.DonGia = resultData;
                    this.setThanhTienForDichVuModel();
                }
                else {
                    this.themChiDinhDichVuModel.DonGia = null;
                    this.setThanhTienForDichVuModel();
                }
            }, (err) => {
            });
        }
        else {
            this.themChiDinhDichVuModel.DonGia = null;
        }
    }
    DonGiaChange($event) {
        if (this.themChiDinhDichVuModel.SoLuong != undefined && this.themChiDinhDichVuModel.SoLuong != null
            && $event != undefined && $event != null) {
            this.themChiDinhDichVuModel.ThanhTien = this.themChiDinhDichVuModel.SoLuong * $event;
        }
        else {
            this.themChiDinhDichVuModel.ThanhTien = null;
        }
    }
    lyDoVaoVienChange($event, removeBHYT = false) {
        this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, $event);
        // if ($event == 3 || removeBHYT == true) {
        //     this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, $event) 
        //     //{
        //     // let modelUpdate = new GridUpdate();
        //     // modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();
        //     // ;
        //     // modelUpdate.yeuCauTiepNhanId = this.id;
        //     // modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        //     // modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
        //     // modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        //     // this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(obj => {
        //     //     if (obj.IsGoiCoChietKhau != true) {
        //     //         let dichVu = new ListChiDinhNeedUpdate();
        //     //         dichVu.Nhom = obj.Nhom;
        //     //         dichVu.DichVuId = obj.MaDichVuId;
        //     //         modelUpdate.lstChiDinhDichVu.push(dichVu);
        //     //     }
        //     // })
        //     // this.validationErrors = null;
        //     // this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/HuyBHYTChoChiDinhDichVu", modelUpdate).subscribe(
        //     //     resultData => {
        //     //         //console.log("duocHuongBHYTChange = ", resultData);
        //     //         this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
        //     //         this.setDataForDichVuKhac();
        //     //         this.refreshGrid();
        //     //         this.removeBHYT = false;
        //     //     },
        //     //     (err: any) => {
        //     //         this.removeBHYT = false;
        //     //         if (err != undefined && err.ValidationErrors != null) {
        //     //             this.validationErrors = err.ValidationErrors;
        //     //         }
        //     //         else if (err != undefined && err.Errors == null) {
        //     //             //self.validationErrors.push({ "Message": err.Message });
        //     //             this.notificationService.showError(err.Message);
        //     //         }
        //     //     });
        // }
    }
    tuNhapChange($event) {
        if ($event == true) {
            this.tiepNhanBenhNhan.CoBHYT = true;
            this.tiepNhanBenhNhan.IsCheckedBHYT = null;
            this.tiepNhanBenhNhan.LyDoVaoVien = 1;
        }
        else {
            this.tiepNhanBenhNhan.LyDoVaoVien = null;
        }
        if ($event == false && this.id != null && this.id != undefined) {
            this.tiepNhanBenhNhan.CoBHYT = false;
            this.isHaveBHYTForTheFistLoad = false;
            this.isHaveBHYTUpdated = false;
            this.coBHYTChange(false);
            this.tiepNhanBenhNhan.LyDoVaoVien = null;
        }
    }
    blurBHYTMucHuong($event) {
        //console.log("blurBHYTMucHuong");
        this.mucHuongChange();
    }
    onKeyBHYTMucHuong($event) {
        if ($event.keyCode === 13) {
            //console.log("onKeyBHYTMucHuong");
            this.mucHuongChange();
        }
    }
    soNhaDuongPhoChange(model) {
        this.tiepNhanBenhNhan.DiaChi = model;
        if (this.under6yearsold) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if (this.under6yearsold == false) {
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
        }
        // if(model != null && model != undefined && model != ""){
        //     this.tiepNhanBenhNhan.DiaChi = model[0].toUpperCase() + model.slice(1);
        // }
        // if (model != null && model != undefined && model != "") {
        //     let arrayDiaChi = model.split(" ");
        //     let resultString = "";
        //     //console.log("soNhaDuongPhoChange = ", arrayDiaChi);
        //     
        //     arrayDiaChi.forEach(e => {
        //         if (e != undefined && e != null && e != "") {
        //             if (resultString == "") {
        //                 resultString = e[0].toUpperCase() + e.slice(1);
        //             }
        //             else {
        //                 resultString = resultString + " " + e[0].toUpperCase() + e.slice(1);
        //             }
        //         }
        //         else if (e == "") {
        //             resultString = resultString + " ";
        //         }
        //     });
        //     this.tiepNhanBenhNhan.DiaChi = resultString;
        //     //this.tiepNhanBenhNhan.DiaChi = model[0].toUpperCase() + model.slice(1);
        // }
    }
    mucHuongChange() {
        //this.tiepNhanBenhNhan.BHYTMucHuong = $event;
        let modelUpdate = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridUpdate"]();
        modelUpdate.model = this.tiepNhanBenhNhan;
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
        modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
        modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
        //this.validationErrors = null;
        // this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/SetMucHuongChoDichVu", modelUpdate).subscribe(
        //     resultData => {
        //         //console.log("duocHuongBHYTChange = ", resultData);
        //         this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
        //         this.setDataForDichVuKhac();
        //         this.refreshGrid();
        //     },
        //     (err: any) => {
        //         if (err != undefined && err.ValidationErrors != null) {
        //             this.validationErrors = err.ValidationErrors;
        //         }
        //         else if (err != undefined && err.Errors == null) {
        //             //self.validationErrors.push({ "Message": err.Message });
        //             this.notificationService.showError(err.Message);
        //         }
        //     });
    }
    bindMucHuongFromSoTheBHYT(soTheBHYT) {
        if (soTheBHYT != undefined && soTheBHYT != null && soTheBHYT.length >= 3) {
            let maTheArray = soTheBHYT.split("");
            if (maTheArray[2] == '1') {
                this.tiepNhanBenhNhan.BHYTMucHuong = 100;
            }
            else if (maTheArray[2] == '2') {
                this.tiepNhanBenhNhan.BHYTMucHuong = 100;
            }
            else if (maTheArray[2] == '3') {
                this.tiepNhanBenhNhan.BHYTMucHuong = 95;
            }
            else if (maTheArray[2] == '4') {
                this.tiepNhanBenhNhan.BHYTMucHuong = 80;
            }
            else {
                this.tiepNhanBenhNhan.BHYTMucHuong = 100;
            }
        }
    }
    coBHYTChange($event) {
        this.tiepNhanBenhNhan.CoBHYT = $event;
        this.isDisableNhapTayForUpdate = false;
        if ($event != true) {
            this.tiepNhanBenhNhan.TuNhap = false;
            this.isHaveBHYTForTheFistLoad = false;
            this.isHaveBHYTUpdated = false;
            this.HoVaTenTextbox.focus();
            this.tiepNhanBenhNhan.LyDoVaoVien = null;
            this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
            // let modelUpdate = new GridUpdate();
            // modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();
            // ;
            // modelUpdate.yeuCauTiepNhanId = this.id;
            // modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
            // modelUpdate.HoTen = this.tiepNhanBenhNhan.HoTen;
            // modelUpdate.NgaySinh = this.tiepNhanBenhNhan.NgayThangNamSinh;
            // this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(obj => {
            //     if (obj.IsGoiCoChietKhau != true) {
            //         let dichVu = new ListChiDinhNeedUpdate();
            //         dichVu.Nhom = obj.Nhom;
            //         dichVu.DichVuId = obj.MaDichVuId;
            //         modelUpdate.lstChiDinhDichVu.push(dichVu);
            //     }
            // })
            // this.validationErrors = null;
            // this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/HuyBHYTChoChiDinhDichVuForCoBHYTChange", modelUpdate).subscribe(
            //     resultData => {
            //         //console.log("duocHuongBHYTChange = ", resultData);
            //         this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            //         this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
            //         this.setDataForDichVuKhac();
            //         this.refreshGrid();
            //     },
            //     (err: any) => {
            //         if (err != undefined && err.ValidationErrors != null) {
            //             this.validationErrors = err.ValidationErrors;
            //         }
            //         else if (err != undefined && err.Errors == null) {
            //             //self.validationErrors.push({ "Message": err.Message });
            //             this.notificationService.showError(err.Message);
            //         }
            //     });
            this.clearDataUpdateThongTinBHYTFromModel();
        }
        else {
            this.tiepNhanBenhNhan.LyDoVaoVien = 1;
            this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
        }
    }
    clearDataUpdateThongTinBHYTFromModel() {
        this.tiepNhanBenhNhan.CoBHYT = false;
        this.tiepNhanBenhNhan.TuNhap = false;
        this.tiepNhanBenhNhan.BHYTCoQuanBHXH = null;
        this.tiepNhanBenhNhan.BHYTDiaChi = null;
        this.tiepNhanBenhNhan.BHYTMaDKBD = null;
        this.tiepNhanBenhNhan.BHYTMaSoThe = null;
        this.tiepNhanBenhNhan.BHYTMucHuong = null;
        this.tiepNhanBenhNhan.BHYTNgayDu5Nam = null;
        this.tiepNhanBenhNhan.BHYTNgayHetHan = null;
        this.tiepNhanBenhNhan.BHYTNgayHieuLuc = null;
        //this.tiepNhanBenhNhan.IsCheckedBHYT = model.IsCheckedBHYT;
        this.tiepNhanBenhNhan.LyDoVaoVien = 1;
        this.tiepNhanBenhNhan.NoiDangKyBHYT = null;
    }
    clearDataUpdateThongTinBHYT() {
        this.tiepNhanBenhNhan.BHYTCoQuanBHXH = null;
        this.tiepNhanBenhNhan.BHYTDiaChi = null;
        this.tiepNhanBenhNhan.BHYTMaDKBD = null;
        this.tiepNhanBenhNhan.BHYTMaSoThe = null;
        this.tiepNhanBenhNhan.BHYTMucHuong = null;
        this.tiepNhanBenhNhan.BHYTNgayDu5Nam = null;
        this.tiepNhanBenhNhan.BHYTNgayHetHan = null;
        this.tiepNhanBenhNhan.BHYTNgayHieuLuc = null;
        //this.tiepNhanBenhNhan.IsCheckedBHYT = model.IsCheckedBHYT;
        this.tiepNhanBenhNhan.LyDoVaoVien = 1;
        this.tiepNhanBenhNhan.NoiDangKyBHYT = null;
    }
    // onSelectChangeVoucher(voucherId: any) {
    //     var last = voucherId[voucherId.length - 1];
    //     if (last == undefined)
    //         this.loaiVoucher = 0;
    //     this.apiService.post<any>("ThuNgan/GetMaVoucher?loaiVoucher=" + this.loaiVoucher + "&yeucauTiepNhanId=" + this.id).subscribe(resultData => {
    //         if (resultData !== null && resultData !== undefined) {
    //             this.voucherLookupItemVo = resultData;
    //             this.voucherLookupItemVo.forEach(element => {
    //                 if (element.KeyId == last) {
    //                     this.loaiVoucher = element.LoaiVoucher;
    //                 }
    //             });
    //         }
    //     });
    // }
    onOpenChange() {
        this.voucherList.getDataForLookup();
    }
    NamSinhChange(event) {
        //console.log("NamSinhChange = ", event);
        let dateNow = new Date();
        if (event >= dateNow.getFullYear() - 6) {
            this.under6yearsold = true;
            this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi " + 0 + " Tháng " + 0 + " Ngày ";
            this.cloneDiaChiNguoiGiamHo();
        }
        else {
            this.under6yearsold = false;
            this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi";
        }
        //this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi " + 0 + " Tháng " + 0 + " Ngày ";
        if (this.under6yearsold == true) {
            this.cloneDiaChiNguoiGiamHo();
        }
        if (this.under6yearsold == false) {
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
        }
    }
    getAge(date_1, date_2) {
        //console.log("getAge = ",date_1, date_2);
        // if(){
        if ((date_1 == undefined || date_1 == null) && this.tiepNhanBenhNhan.NamSinh != undefined && this.tiepNhanBenhNhan.NamSinh != null && this.tiepNhanBenhNhan.NamSinh != 0) {
            date_1 = new Date(this.tiepNhanBenhNhan.NamSinh, 1, 1);
        }
        date_1 = new Date(date_1);
        date_2 = new Date(date_2);
        // }
        //convert to UTC
        let date2_UTC = new Date(Date.UTC(date_2.getFullYear(), date_2.getMonth(), date_2.getDate()));
        let date1_UTC = new Date(Date.UTC(date_1.getFullYear(), date_1.getMonth(), date_1.getDate()));
        let yAppendix, mAppendix, dAppendix;
        //--------------------------------------------------------------
        let days = date2_UTC.getDate() - date1_UTC.getDate();
        if (days < 0) {
            date2_UTC.setMonth(date2_UTC.getMonth() - 1);
            days += this.DaysInMonth(date2_UTC);
        }
        //--------------------------------------------------------------
        let months = date2_UTC.getMonth() - date1_UTC.getMonth();
        if (months < 0) {
            date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
            months += 12;
        }
        //--------------------------------------------------------------
        let years = date2_UTC.getFullYear() - date1_UTC.getFullYear();
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
            this.under6yearsold = true;
            this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
            this.cloneDiaChiNguoiGiamHo();
        }
        else {
            this.under6yearsold = false;
            this.soTuoiDisplay = years + " Tuổi";
            this.cloneDiaChiNguoiGiamHoLonHon6Tuoi();
        }
        //this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
        //console.log(years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix);
    }
    DaysInMonth(date2_UTC) {
        let monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
        let monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
        let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
        return monthLength;
    }
    InTheBenhNhanTiepNhan() {
        this.dialog
            .open(_the_benh_nhan_popup_the_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_35__["TheBenhNhanPopupComponent"], {
            disableClose: true,
            width: "466px",
            data: this.id,
        });
    }
    InVongDeoTay() {
        this.dialog
            .open(_vong_deo_tay_popup_vong_deo_tay_popup_component__WEBPACK_IMPORTED_MODULE_36__["VongDeoTayPopupComponent"], {
            disableClose: true,
            height: "780px",
            width: "200px",
            data: this.id,
        });
    }
    //cheat for tab on [BVHD-1506]
    onKeyScanner(event) {
        //console.log("onKeyScanner = ", event);
        if (event.keyCode === 9) {
            //console.log(this.HoVaTenTextbox);
            this.HoVaTenTextbox.focus();
        }
    }
    onKeyHinhThucDen(event) {
        if (event.keyCode === 9) {
            this.tabStrip.selectTab(0);
            let self = this;
            setTimeout(function () {
                //console.log("setTimeout = ", self.dichVuCombobox);
                if (self.dichVuCombobox != undefined) {
                    self.dichVuCombobox.focusManual();
                }
            }, 100);
        }
    }
    tabscripChange(event) {
        //console.log("tabscripChange = ", $event);
        if (event.keyCode === 9 && (event.path != null && event.path[0].id == "k-tabstrip-tab-0")) {
            this.tabStrip.selectTab(0);
            let self = this;
            setTimeout(function () {
                //console.log("setTimeout = ", self.dichVuCombobox);
                if (self.dichVuCombobox != undefined) {
                    self.dichVuCombobox.focusManual();
                }
            }, 100);
        }
    }
    ngayCoHieuLucChange($event) {
        //console.log("ngayCoHieuLucChange, event = ", $event, " , ngaycohieuluc = ", this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHetHan);
        if ($event != null && $event != undefined) {
            //console.log("ngayCoHieuLucChange, event = ", $event, " , ngaycohieuluc = ", this.tiepNhanBenhNhan.BHYTNgayHieuLuc, this.tiepNhanBenhNhan.BHYTNgayHetHan);
            // let dateFormat = new Date($event);
            // this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(dateFormat.getFullYear() + 1, dateFormat.getMonth(), dateFormat.getDate());
            //BVHD-3518: mặc định là ngà 31/12 của năm hiện tại
            let currentDate = new Date();
            this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(currentDate.getFullYear(), 11, 31);
        }
    }
    OnChangeHinhThucDen(dataEvent) {
        if (dataEvent != undefined && dataEvent.KeyId === 2) {
            this.tiepNhanBenhNhan.NoiGioiThieuId = 1;
        }
    }
    loaiGiaGridChange($event, dataItem) {
        if ($event == undefined || $event == null) {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessagePhaiChonLoaiGia);
            this.refreshGrid();
            return;
        }
        let modelUpdate = {};
        modelUpdate.lstChiDinhDichVu = new Array();
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.yeuCauId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.loaiGiaId = $event;
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/LoaiGiaGridChange", modelUpdate).subscribe(resultData => {
            //console.log("duocHuongBHYTChange = ", resultData);
            this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
            this.setDataForDichVuKhac();
            this.refreshGrid();
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
    }
    soLuongGridChange($event, dataItem) {
        // if ($event == undefined || $event == null) {
        //     this.notificationService.showError(TiepNhanBenhNhanMessage.MessagePhaiChonSoLuong);
        //     this.refreshGrid();
        //     return;
        // }
        // let modelUpdate: any = {};
        // modelUpdate.lstChiDinhDichVu = new Array<ListChiDinhNeedUpdate>();
        // modelUpdate.yeuCauTiepNhanId = this.id;
        // modelUpdate.yeuCauId = dataItem.Id;
        // modelUpdate.nhom = dataItem.Nhom;
        // modelUpdate.soLuong = $event
        // this.validationErrors = null;
        // this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/SoLuongGridChange", modelUpdate).subscribe(
        //     resultData => {
        //         //console.log("duocHuongBHYTChange = ", resultData);
        //         this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
        //         this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
        //         this.setDataForDichVuKhac();
        //         this.refreshGrid();
        //     },
        //     (err: any) => {
        //         if (err != undefined && err.ValidationErrors != null) {
        //             this.validationErrors = err.ValidationErrors;
        //         }
        //         else if (err != undefined && err.Errors == null) {
        //             //self.validationErrors.push({ "Message": err.Message });
        //             this.notificationService.showError(err.Message);
        //         }
        //     });
    }
    soLuongBlur(dataItem) {
        //console.log("soLuongBlur = ", dataItem);
        let $event = dataItem.SoLuong;
        if ($event == undefined || $event == null) {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessagePhaiChonSoLuong);
            this.refreshGrid();
            return;
        }
        let modelUpdate = {};
        modelUpdate.lstChiDinhDichVu = new Array();
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.yeuCauId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.soLuong = $event;
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/SoLuongGridChange", modelUpdate).subscribe(resultData => {
            //console.log("duocHuongBHYTChange = ", resultData);
            this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
            this.setDataForDichVuKhac();
            this.refreshGrid();
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
    }
    onKeyMaDichVu($event) {
        if ($event.keyCode == 13) {
            if (this.maDichVuDisabled != true) {
                this.themChiDinhDichVuNew();
            }
            else {
                this.maDichVuDisabled = false;
            }
        }
        //this.countCheck++;
    }
    openCombobox($event) {
        //console.log("openCombobox = ", $event);
        //this.countCheck = 0;
        if ($event) {
            this.maDichVuDisabled = true;
        }
        else {
            this.maDichVuDisabled = false;
        }
    }
    getDanhSachGoiBenhNhan(benhNhanId) {
        this.apiService.post("TiepNhanBenhNhan/GetMarketingForBenhNhan?benhNhanId=" + benhNhanId).subscribe(resultData => {
            this.danhSachGoiDaChonTrongYCTN = resultData;
            //console.log("getDanhSachGoiBenhNhan = ", resultData);
            if (resultData !== null && resultData !== undefined && resultData.length > 0) {
                this.suDungGoiMarketingModelTemp = true;
                this.disabledCheckboxMarketing = true;
            }
            else {
                this.suDungGoiMarketingModelTemp = false;
                this.disabledCheckboxMarketing = false;
            }
        });
    }
    setUpDataTooltip(dataItem) {
        //console.log("setUpDataTooltip = ", dataItem, dataItem.Id, dataItem.TenGoiChietKhau);
        this.displayToolTipGrid = dataItem.TenGoiChietKhau;
    }
    suDungGoiMarketingChange(event) {
        //console.log("suDungGoiMarketingChange = ", event);
        if (event) {
            this.openPopupGoiDichVu();
        }
    }
    showPopupMarketingWithHyperlink(item) {
        //console.log("showPopupMarketingWithHyperlink = ", item);
        this.openPopupGoiDichVu(item);
    }
    openPopupGoiDichVu(danhSachGoiDaChon = null) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].View)) {
            let duocHuongBHYT = this.kiemTraTheBHYTHieuLucHienTai();
            //----------------------------//
            this.listChonDichVuChiDinhReLoad = [];
            this.listChonDichVuChiDinh = [];
            if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
                let gridData = this.gridInChiDinh.getAllDataFromDatasource();
                gridData.forEach(elements => {
                    if (elements.isCheckRowItem == true) {
                        let obj = {
                            Id: elements.Id,
                            NhomId: elements.NhomId
                        };
                        this.listChonDichVuChiDinhReLoad.push(obj);
                    }
                });
            }
            //---------------------------//
            self.dialog.open(_popup_marketing_tnbn_update_popup_marketing_tnbn_update_component__WEBPACK_IMPORTED_MODULE_42__["PopupMarketingTnbnUpdateComponent"], {
                disableClose: false,
                width: '1800px',
                data: {
                    benhNhanId: this.tiepNhanBenhNhan.BenhNhanId, itemPopup: danhSachGoiDaChon,
                    duocHuongBHYT: duocHuongBHYT //this.themChiDinhDichVuModel.DuocHuongBHYT
                    ,
                    yctnId: this.id,
                    mucHuong: this.tiepNhanBenhNhan.BHYTMucHuong,
                    danhSachDichVuDangCo: this.tiepNhanBenhNhan.YeuCauKhacGrid,
                    ListDichVuCheckTruocDos: this.listChonDichVuChiDinhReLoad
                }
            }).afterClosed().subscribe(result => {
                if (result != undefined && result != null) {
                    self.tiepNhanBenhNhan.YeuCauKhacGrid = result;
                    self.setDataForDichVuKhac();
                    self.getDanhSachGoiBenhNhan(self.tiepNhanBenhNhan.BenhNhanId);
                    self.refreshGrid();
                }
                self.removeThemDichVuValue();
                self.removeThemGoiValue();
                let findDvGoi = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(o => o.IsGoiCoChietKhau);
                if (result == undefined && this.disabledCheckboxMarketing != true
                    && findDvGoi.length == 0) {
                    this.suDungGoiMarketingModelTemp = false;
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    removeGoi(item) {
        console.log("removeGoi = ", item, this.tiepNhanBenhNhan.YeuCauKhacGrid);
        item.YeuCauTiepNhanId = this.id;
        if (this.isActiveAction != null) {
            this.dialog.closeAll();
            this.isActiveAction = null;
        }
        this.isActiveAction = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageConfirmRemoveGoi }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.removeGoiGiuLaiDichVu(item);
            }
            else {
                this.removeGoiKhongGiuLaiDichVu(item);
            }
        });
        //this.removeGoiDaChon(item.ChuongTrinhGoiDichVuId);
    }
    removeGoiGiuLaiDichVu(model) {
        this.apiService.post("TiepNhanBenhNhan/XoaGoiGiuLaiDichVu", model).subscribe(resultData => {
            //this.dialogRef.close(resultData);
            if (resultData != null && resultData != undefined) {
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                this.setDataForDichVuKhac();
                this.refreshGrid();
                this.removeThemDichVuValue();
                this.removeThemGoiValue();
                this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
            }
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                this.notificationService.showError(err.Message);
            }
        });
    }
    removeGoiKhongGiuLaiDichVu(model) {
        this.apiService.post("TiepNhanBenhNhan/XoaGoiKhongGiuLaiDichVu", model).subscribe(resultData => {
            //this.dialogRef.close(resultData);
            if (resultData != null && resultData != undefined) {
                this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                this.setDataForDichVuKhac();
                this.refreshGrid();
                this.removeThemDichVuValue();
                this.removeThemGoiValue();
                this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
            }
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                this.notificationService.showError(err.Message);
            }
        });
    }
    QuetMaQRCodeVoucherClick() {
        let elementBarcode = document.getElementById("barcodeActive");
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }
    changeVoucherQR($event) {
        if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
            this.modelQRCodeVoucher = $event;
            var maVoucher = $event.split("@");
            if (maVoucher.length > 1) {
                this.kiemTraThongTinMaVoucher(maVoucher[0]);
            }
            else {
                this.notificationService.showError("Mã voucher không hợp lệ.");
            }
        }
    }
    getThongTinVoucher(id) {
        this.apiService.get("ThuNgan/GetMaVoucher?yeucauTiepNhanId=" + id).subscribe(resultData => {
            if (resultData !== undefined && resultData !== null) {
                this.tiepNhanBenhNhan.LstMaVoucher = [];
                resultData.forEach(item => {
                    this.value.push(item.DisplayName);
                    this.listVoucherItem.push(item.KeyId + "|" + item.DisplayName);
                });
                this.tiepNhanBenhNhan.LstMaVoucher = this.listVoucherItem;
            }
        });
    }
    kiemTraThongTinMaVoucher(maVoucher) {
        this.tiepNhanBenhNhan.LstMaVoucher = [];
        this.apiService.post("TiepNhanBenhNhan/KiemTraVoucherHopLe?maVoucher=" + maVoucher)
            .subscribe((resultData) => {
            if (resultData.Item1 === 0) {
                this.value = [];
                this.notificationService.showError(resultData.Item2);
                this.newBarcode = "";
            }
            else {
                this.notificationService.showSuccess(resultData.Item2);
                //====================neu voucher thành công====================
                this.value.push(maVoucher);
                this.listVoucherItem.push(resultData.Item1 + "|" + maVoucher);
                this.newBarcode = "";
            }
        });
        this.tiepNhanBenhNhan.LstMaVoucher = this.listVoucherItem;
    }
    open() {
        this.multiselect.toggle(false);
    }
    removeTag(ev) {
        this.KiemTraTheVoucherSuDung(ev.dataItem);
    }
    KiemTraTheVoucherSuDung(theVoucher) {
        let thongTinVoucherTheoYeuCauTiepNhan = {};
        thongTinVoucherTheoYeuCauTiepNhan.TheVoucher = theVoucher;
        thongTinVoucherTheoYeuCauTiepNhan.YeucauTiepNhanId = this.id;
        this.apiService.post("TiepNhanBenhNhan/KiemTraTheVoucherSuDung", thongTinVoucherTheoYeuCauTiepNhan)
            .subscribe((resultData) => {
            if (resultData.Item1) {
                this.value = [];
                this.notificationService.showError(resultData.Item2);
                this.getThongTinVoucher(this.id);
                this.newBarcode = "";
                return true;
            }
            else {
                let maVouchers = [];
                if (this.tiepNhanBenhNhan.LstMaVoucher.length > 0) {
                    this.tiepNhanBenhNhan.LstMaVoucher.forEach(element => {
                        var dataVoucher = element.split("|");
                        if (dataVoucher[1] !== theVoucher) {
                            maVouchers.push(dataVoucher[0] + "|" + dataVoucher[1]);
                        }
                    });
                    this.listVoucherItem = maVouchers;
                    this.tiepNhanBenhNhan.LstMaVoucher = maVouchers;
                    this.newBarcode = "";
                }
            }
        });
    }
    blurVoucher() {
        if (this.newBarcode != "") {
            this.kiemTraThongTinMaVoucher(this.newBarcode);
        }
        ;
    }
    onKeyBarCode(event) {
        if (event.keyCode === 13) {
            this.multiselect.blur();
            this.multiselect.focus();
        }
    }
    filterChange(filter) {
        if (filter != null && filter != "") {
            this.newBarcode = filter;
        }
    }
    showTaoYCTNMoi() {
        if (this.tiepNhanBenhNhan.ThoiGianTiepNhan != null) {
            var now = new Date();
            if (typeof (this.tiepNhanBenhNhan.ThoiGianTiepNhan) == "object" && typeof this.tiepNhanBenhNhan.ThoiGianTiepNhan.getMonth === 'function') {
                return new Date(this.tiepNhanBenhNhan.ThoiGianTiepNhan.getFullYear(), this.tiepNhanBenhNhan.ThoiGianTiepNhan.getMonth(), this.tiepNhanBenhNhan.ThoiGianTiepNhan.getDate()) <
                    new Date(now.getFullYear(), now.getMonth(), now.getDate());
            }
            else {
                if (typeof (this.tiepNhanBenhNhan.ThoiGianTiepNhan) == "string") {
                    var tgtnTemp = new Date(this.tiepNhanBenhNhan.ThoiGianTiepNhan);
                    return new Date(tgtnTemp.getFullYear(), tgtnTemp.getMonth(), tgtnTemp.getDate()) <
                        new Date(now.getFullYear(), now.getMonth(), now.getDate());
                }
                return false;
            }
        }
        return false;
    }
    taoYCTNMoi() {
        var self = this;
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn tạo YCTN mới cho NB này?" }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.apiService.post("TiepNhanBenhNhan/GetYeuCauTiepNhanOfBenhNhanNgoaiNgay?maSoBHYT=" + (self.tiepNhanBenhNhan.BHYTMaSoThe != null && self.tiepNhanBenhNhan.BHYTMaSoThe != "" && self.tiepNhanBenhNhan.BHYTMaSoThe != "null" && self.tiepNhanBenhNhan.BHYTMaSoThe != "NULL" ? self.tiepNhanBenhNhan.BHYTMaSoThe : "") + "&id=" + self.tiepNhanBenhNhan.BenhNhanId).subscribe(resultData => {
                    if (resultData != null) {
                        this.dialog.closeAll();
                        this.router.navigate(['them-yeu-cau-tiep-nhan/' + resultData]);
                    }
                }, () => {
                    //return null;
                    //console.log("error")
                });
            }
            else {
            }
        });
    }
    checkboxIn(event, dataItem) {
        if (this.gridInChiDinh.gridDataSource.data == undefined) {
            this.listChonDichVuChiDinh = [];
        }
        let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == dataItem.Id && x.nhomChiDinhId == dataItem.NhomId);
        if (event == true) {
            if (index == -1) {
                var chiDinh = new _kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_48__["ListInChiDinh"]();
                chiDinh.nhomChiDinhId = dataItem.NhomId;
                chiDinh.dichVuChiDinhId = dataItem.Id;
                this.listChonDichVuChiDinh.push(chiDinh);
                if (this.listChonDichVuChiDinh.length == this.gridDataKhacDisplay.data.filter(sp => ((sp.TrangThaiYeuCauKhamBenh != null && sp.TrangThaiYeuCauKhamBenh != 6) ||
                    (sp.TrangThaiYeuCauDichVuKyThuat != null && sp.TrangThaiYeuCauDichVuKyThuat != 4))).length) {
                    this.checkAll = true;
                }
            }
            else {
                if (this.listChonDichVuChiDinh.length == this.gridDataKhacDisplay.data.filter(sp => ((sp.TrangThaiYeuCauKhamBenh != null && sp.TrangThaiYeuCauKhamBenh != 6) ||
                    (sp.TrangThaiYeuCauDichVuKyThuat != null && sp.TrangThaiYeuCauDichVuKyThuat != 4))).length) {
                    this.checkAll = true;
                }
                else {
                    this.checkAll = false;
                }
            }
            dataItem.isCheckRowItem = true;
        }
        else {
            this.checkAll = false;
            if (index >= 0) {
                this.listChonDichVuChiDinh.splice(index, 1);
            }
        }
        if (this.listChonDichVuChiDinh.length == this.gridDataKhacDisplay.data.filter(sp => ((sp.TrangThaiYeuCauKhamBenh != null && sp.TrangThaiYeuCauKhamBenh != 6) ||
            (sp.TrangThaiYeuCauDichVuKyThuat != null && sp.TrangThaiYeuCauDichVuKyThuat != 4))).length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }
    SelectcheckAllboxIn(event) {
        let gridDataIn = [];
        if (this.gridInChiDinh != null) {
            if (this.gridInChiDinh.gridDataSource.data == undefined) {
                this.listChonDichVuChiDinh = [];
            }
            else {
                if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
                    gridDataIn = this.gridInChiDinh.getAllDataFromDatasource();
                    this.listChonDichVuChiDinh = [];
                    gridDataIn.forEach(element => {
                        if (element.isCheckRowItem == true) {
                            var chiDinh = new _kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_48__["ListInChiDinh"]();
                            chiDinh.nhomChiDinhId = element.NhomId;
                            chiDinh.dichVuChiDinhId = element.Id;
                            this.listChonDichVuChiDinh.push(chiDinh);
                        }
                    });
                }
                else {
                    this.listChonDichVuChiDinh = [];
                }
            }
        }
        else {
            this.listChonDichVuChiDinh = [];
        }
        if (event == true) {
            gridDataIn.forEach(element => {
                element.isCheckRowItem = true;
                this.checkAll = true;
                let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == element.Id && x.nhomChiDinhId == element.NhomId);
                if (index == -1) {
                    var chiDinh = new _kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_48__["ListInChiDinh"]();
                    chiDinh.nhomChiDinhId = element.NhomId;
                    chiDinh.dichVuChiDinhId = element.Id;
                    this.listChonDichVuChiDinh.push(chiDinh);
                }
            });
        }
        else {
            gridDataIn.forEach(element => {
                element.isCheckRowItem = false;
            });
            this.listChonDichVuChiDinh = [];
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }
    inChiDinh(kieuIn) {
        this.listChonDichVuChiDinhReLoad = [];
        if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
            let gridData = this.gridInChiDinh.getAllDataFromDatasource();
            gridData.forEach(elements => {
                if (elements.isCheckRowItem == true) {
                    let obj = {
                        nhomChiDinhId: elements.NhomId,
                        dichVuChiDinhId: elements.Id
                    };
                    this.listChonDichVuChiDinhReLoad.push(obj);
                }
            });
            let listGridSelect = [];
            gridData.forEach(elements => {
                if (elements.isCheckRowItem == true) {
                    listGridSelect.push(elements);
                }
            });
            let dataIn = {
                YeuCauTiepNhanId: this.id,
                YeuCauKhamBenhid: 0,
                ListDichVuChiDinh: this.listChonDichVuChiDinhReLoad,
                InChungChiDinh: kieuIn,
                hosting: window.location.protocol + "//" + window.location.host,
                KieuInChung: true,
                GhiChuCanLamSang: "",
                IsKhamDoanTatCa: false,
                EnumInChiDinhKhamBenhNgoaiTru: 1,
                listGridSelect: listGridSelect,
                Loai: 1,
                InDichVuBacSiChiDinh: true
            };
            let dialogRef = this.dialog.open(_popup_chon_loai_In_popup_chon_loai_in_view_popup_chon_loai_in_view_component__WEBPACK_IMPORTED_MODULE_51__["PopupChonLoaiInViewComponent"], {
                width: '1000px',
                data: { Model: dataIn }
            });
        }
        else {
            this.notificationService.showError("Không có dịch vụ chỉ định.");
        }
    }
    huyDichVuDaHuyThanhToan(dataItem) {
        this.dialog.open(_huy_dich_vu_huy_thanh_toan_popup_huy_dich_vu_huy_thanh_toan_popup_component__WEBPACK_IMPORTED_MODULE_45__["HuyDichVuHuyThanhToanPopupComponent"], {
            disableClose: false,
            width: '600px',
            data: { Title: "Xác nhận", Message: "Bạn có chắc hủy dịch vụ này không?" }
        }).afterClosed().subscribe(result => {
            if (result != undefined && result != null && result != "") {
                let modelUpdate = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["GridUpdate"]();
                modelUpdate.yeuCauTiepNhanId = this.id;
                modelUpdate.maDichVuId = dataItem.Id;
                modelUpdate.nhom = dataItem.Nhom;
                modelUpdate.mucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                modelUpdate.model = this.tiepNhanBenhNhan;
                modelUpdate.LyDoHuyDichVu = result;
                this.validationErrors = null;
                this.listChonDichVuChiDinhReLoad = [];
                if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
                    let gridData = this.gridInChiDinh.getAllDataFromDatasource();
                    gridData.forEach(elements => {
                        if (elements.isCheckRowItem == true) {
                            let obj = {
                                nhomChiDinhId: elements.NhomId,
                                dichVuChiDinhId: elements.Id
                            };
                            this.listChonDichVuChiDinhReLoad.push(obj);
                        }
                    });
                }
                modelUpdate.ListDichVuCheckTruocDos = this.listChonDichVuChiDinhReLoad;
                this.apiService.post("TiepNhanBenhNhan/RemoveDichVu", modelUpdate).subscribe(resultData => {
                    this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                    this.getDanhSachGoiBenhNhan(this.tiepNhanBenhNhan.BenhNhanId);
                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Hủy dịch vụ "]));
                }, (err) => {
                    if (err != undefined && err.ValidationErrors != null) {
                        this.validationErrors = err.ValidationErrors;
                    }
                    else if (err != undefined && err.Errors == null) {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        });
    }
    cacDichVuKM() {
        this.dialog.open(_dich_vu_khuyen_mai_dich_vu_khuyen_mai_popup_dich_vu_khuyen_mai_popup_component__WEBPACK_IMPORTED_MODULE_46__["DichVuKhuyenMaiPopupComponent"], {
            disableClose: false,
            width: '1500px',
            data: { BenhNhanId: this.benhNhanIdPopup, DocumentType: "YeuCauTiepNhan" }
        }).afterClosed().subscribe(() => {
        });
    }
    //===================================BVHD-3825==========================================
    xemGoiDichVuKhuyenMai() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].View)) {
            // self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
            self.dialog.open(_dich_vu_khuyen_mai_dich_vu_khuyen_mai_popup_dich_vu_khuyen_mai_popup_component__WEBPACK_IMPORTED_MODULE_46__["DichVuKhuyenMaiPopupComponent"], {
                disableClose: false,
                width: '1800px',
                data: { DocumentType: self.documentType, BenhNhanId: self.tiepNhanBenhNhan.BenhNhanId }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if (yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "") {
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.id;
                    self.apiService.post("TiepNhanBenhNhan/KiemTraDichVuKhuyenMaiTrongGoiMarketingDaCoTheoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_nhom_dich_vu_loi_popup_lan_kham_hien_tai_nhom_dich_vu_loi_popup_component__WEBPACK_IMPORTED_MODULE_49__["LanKhamHienTaiNhomDichVuLoiPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: { arrDichVuCanhBao: resultData, DocumentType: this.documentType }
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    yeuCauGoiMarketing.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing);
                                }
                            });
                        }
                        else {
                            self.xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing);
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing) {
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageBHYTThayDoi);
            return;
        }
        if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
            let gridData = this.gridInChiDinh.getAllDataFromDatasource();
            if (yeuCauGoiMarketing.ChiDinhDichVuGridVos == undefined || yeuCauGoiMarketing.ChiDinhDichVuGridVos == null) {
                yeuCauGoiMarketing.ChiDinhDichVuGridVos = [];
            }
            gridData.forEach(elements => {
                yeuCauGoiMarketing.ChiDinhDichVuGridVos.push(elements);
            });
        }
        this.showPopupLoadingData(src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_50__["EnumTypeLoadingData"].Update);
        this.apiService.post("TiepNhanBenhNhan/ThemChiDinhGoiDichVuKhuyenMaiTheoTiepNhan", yeuCauGoiMarketing).subscribe(result => {
            let mess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Thêm"]);
            this.notificationService.showSuccess(mess);
            // reload grid
            if (result == null)
                return;
            this.tiepNhanBenhNhan.YeuCauKhacGrid = result;
            this.setDataForDichVuKhac();
            this.refreshGrid();
            this.closePopupLoadingData();
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    changeDichVuKhuyenMai(event, dataItem) {
        let modelUpdate = {};
        modelUpdate.lstChiDinhDichVu = new Array();
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.yeuCauId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.LaDichVuKhuyenMai = event;
        modelUpdate.soLuong = dataItem.SoLuong;
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/ChuyenDoiDichVuKhuyenMai", modelUpdate).subscribe(resultData => {
            this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            this.setDataForDichVuKhac();
            this.refreshGrid();
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                this.notificationService.showError(err.Message);
            }
        });
    }
    //======================================================================================
    changeDichVuTrongGoi(event, dataItem) {
        let modelUpdate = {};
        modelUpdate.lstChiDinhDichVu = new Array();
        modelUpdate.yeuCauTiepNhanId = this.id;
        modelUpdate.yeuCauId = dataItem.Id;
        modelUpdate.nhom = dataItem.Nhom;
        modelUpdate.LaDichVuTrongGoi = event;
        modelUpdate.soLuong = dataItem.SoLuong;
        this.validationErrors = null;
        this.apiService.post("TiepNhanBenhNhan/ChuyenDoiDichVuTrongVaNgoaiGoi", modelUpdate).subscribe(resultData => {
            this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
            // this.setDuocHuongBHYT($event, this.tiepNhanBenhNhan.LyDoVaoVien);
            this.setDataForDichVuKhac();
            this.refreshGrid();
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                this.notificationService.showError(err.Message);
            }
        });
    }
    // nhóm dịch vụ thường dùng
    // 1: loading, 2: update data
    showPopupLoadingData(typeLoading = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_50__["EnumTypeLoadingData"].View) {
        let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
        switch (typeLoading) {
            case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_50__["EnumTypeLoadingData"].View:
                mess = "Đang tải dữ liệu...";
                break;
            case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_50__["EnumTypeLoadingData"].Update:
                mess = "Đang lưu dữ liệu...";
                break;
            case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_50__["EnumTypeLoadingData"].Delete:
                mess = "Đang xóa dữ liệu...";
                break;
            case src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_50__["EnumTypeLoadingData"].Cancel:
                mess = "Đang hủy dữ liệu...";
                break;
            default: mess = "Đang tải dữ liệu...";
        }
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_34__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    xemNhomDichVuThuongDung() {
        var self = this;
        let boPhan = src_app_shared_enum_bo_phan_enum__WEBPACK_IMPORTED_MODULE_55__["BoPhan"].TiepNhanNgoaiTru;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].View)) {
            self.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_nhom_dich_vu_thuong_dung_popup_lan_kham_hien_tai_nhom_dich_vu_thuong_dung_popup_component__WEBPACK_IMPORTED_MODULE_47__["LanKhamHienTaiNhomDichVuThuongDungPopupComponent"], {
                disableClose: false,
                width: '1500px',
                data: { DocumentType: self.documentType, boPhan: boPhan }
            }).afterClosed().subscribe(yeuCauGoiThuongDung => {
                if (yeuCauGoiThuongDung) {
                    self.showPopupLoadingData(src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_50__["EnumTypeLoadingData"].Update);
                    yeuCauGoiThuongDung.YeuCauKhamBenhId = 0; // dùng ké viewmodel bên khám bệnh
                    yeuCauGoiThuongDung.YeuCauTiepNhanId = self.id;
                    self.apiService.post("KhamBenh/KiemTraDichVuTrongGoiDaCoTheoYeuCauTiepNhan", yeuCauGoiThuongDung).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.closePopupLoadingData();
                            self.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_nhom_dich_vu_loi_popup_lan_kham_hien_tai_nhom_dich_vu_loi_popup_component__WEBPACK_IMPORTED_MODULE_49__["LanKhamHienTaiNhomDichVuLoiPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: { arrDichVuCanhBao: resultData, DocumentType: this.documentType }
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    self.showPopupLoadingData(src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_50__["EnumTypeLoadingData"].Update);
                                    yeuCauGoiThuongDung.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
                                }
                            });
                        }
                        else {
                            self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung) {
        if (!this.checkValidateUpdateThongTinBHYT()) {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["TiepNhanBenhNhanMessage"].MessageBHYTThayDoi);
            return;
        }
        if (this.gridInChiDinh != undefined && this.gridInChiDinh != null) {
            let gridData = this.gridInChiDinh.getAllDataFromDatasource();
            gridData.forEach(elements => {
                yeuCauGoiThuongDung.ChiDinhDichVuGridVos.push(elements);
            });
        }
        this.apiService.post("TiepNhanBenhNhan/ThemYeuGoiDichVuThuongDung", yeuCauGoiThuongDung).subscribe(result => {
            let mess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Thêm "]);
            this.notificationService.showSuccess(mess);
            // reload grid
            if (result == null)
                return;
            this.tiepNhanBenhNhan.YeuCauKhacGrid = result;
            this.setDataForDichVuKhac();
            this.refreshGrid();
            this.closePopupLoadingData();
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    // cập nhật kiểm tra dịch vụ khác 4 nhóm: PTTT, CDHA, TDCN, XN thì cho phép hoàn thành, hủy hoàn thành
    capNhatThongTinThucHienDichVu(dataItem, isThucHien = true) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
            var newObj = {
                YeuCauDichVuKyThuatId: dataItem.Id,
                LaThucHienDichVu: isThucHien,
                DocumentType: this.documentType,
                YeuCauKhamBenhId: null
            };
            this.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_cap_nhat_thong_tin_thuc_hien_dvkt_popup_cap_nhat_thong_tin_thuc_hien_dvkt_popup_component__WEBPACK_IMPORTED_MODULE_52__["CapNhatThongTinThucHienDvktPopupComponent"], {
                disableClose: false,
                width: '600px',
                data: newObj,
            }).afterClosed().subscribe((res) => {
                if (res) {
                    var mess = isThucHien ? "Cập nhật thông tin thực hiện dịch vụ" : "Hủy thông tin thực hiện dịch vụ";
                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, [mess]));
                    this.apiService.get("TiepNhanBenhNhan/GetGridDichVuDaChiDinh?yeuCauTiepNhanId=" + this.id).subscribe(resultData => {
                        this.tiepNhanBenhNhan.YeuCauKhacGrid = resultData;
                        this.setDataForDichVuKhac();
                        this.refreshGrid();
                    }, (err) => {
                        if (err != undefined && err.ValidationErrors != null) {
                            this.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    // BVHD-3761
    //================================================================================================
    getListDichVuSarsCoVs() {
        this.apiService.get("TiepNhanBenhNhan/GetSarsCoVs").subscribe(resultData => {
            this.dichVuSarsCoVs = [];
            this.dichVuSarsCoVs = resultData.Ids;
            this.loaiBenhPham = resultData.LoaiMauXetNghiem;
            this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText;
        });
    }
    //================================================================================================
    //BVHD-3761
    //=======================================================================================================
    InPhieuXN() {
        let hosting = window.location.protocol + "//" + window.location.host;
        this.apiService
            .get("TiepNhanBenhNhan/InPhieuXetNghiemCovid?id=" +
            this.id +
            "&hostingName=" +
            hosting)
            .subscribe((resultData) => {
            if (resultData != null && resultData != "") {
                let dialogRef = this.dialog.open(_in_phieu_xn_covid_in_phieu_xn_covid_component__WEBPACK_IMPORTED_MODULE_54__["InPhieuXnCovidComponent"], {
                    width: '1000px',
                    height: 'auto',
                    data: { Model: resultData }
                }).afterClosed().subscribe(result => {
                });
            }
            else {
                let mess = "Không có dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
                this.notificationService.showError(mess);
            }
        });
    }
};
DanhSachChoKhamUpdateComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridBHTN', { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "gridChildBHTN", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKhamBenh', { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "gridChildKhamBenh", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKyThuat', { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "gridChildKyThuat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCoChietKhau', { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "gridChildCoChietKhau", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKhongChietKhau', { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "gridChildKhongChietKhau", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridTaiLieuDinhKem', { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "gridTaiLieuDinhKem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhamBenhFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "donGiaKhamBenhFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhamBenhTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "donGiaKhamBenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhamBenhTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienKhamBenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhamBenhFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienKhamBenhFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhamBenhGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienKhamBenhGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhamBenhTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bhytThanhToanKhamBenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhamBenhFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bhytThanhToanKhamBenhFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhamBenhGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bhytThanhToanKhamBenhGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhamBenhTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bnThanhToanKhamBenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhamBenhFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bnThanhToanKhamBenhFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhamBenhGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bnThanhToanKhamBenhGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionKhamBenhTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "actionKhamBenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiGiaTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "loaiGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttKhongChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "sttKhongChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttCoChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "sttCoChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKyThuatFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "donGiaKyThuatFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKyThuatTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "donGiaKyThuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKyThuatTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienKyThuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKyThuatFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienKyThuatFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKyThuatGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienKyThuatGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKyThuatTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bnThanhToanKyThuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKyThuatFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bnThanhToanKyThuatFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKyThuatGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bnThanhToanKyThuatGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionKyThuatTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "actionKyThuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tabStrip", { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "tabStrip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhongChietKhauFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "donGiaKhongChietKhauFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhongChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "donGiaKhongChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienKhongChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongChietKhauFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienKhongChietKhauFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongChietKhauGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienKhongChietKhauGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhongChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bhytThanhToanKhongChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhongChietKhauFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bhytThanhToanKhongChietKhauFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhongChietKhauGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bhytThanhToanKhongChietKhauGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhongChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bnThanhToanKhongChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhongChietKhauFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bnThanhToanKhongChietKhauFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhongChietKhauGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "bnThanhToanKhongChietKhauGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienKhongChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "noiThucHienKhongChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocHuongBHYTTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "duocHuongBHYTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionKhongChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "actionKhongChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "donGiaChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaChietKhauFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "donGiaChietKhauFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBHYTTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "donGiaBHYTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienChietKhauFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienChietKhauFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienChietKhauGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienChietKhauGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tyLeChietKhauCoChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "tyLeChietKhauCoChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocGiamTrongGoiCoChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "duocGiamTrongGoiCoChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocGiamTrongGoiCoChietKhauFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "duocGiamTrongGoiCoChietKhauFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTrongGoiChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienTrongGoiChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTrongGoiChietKhauFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienTrongGoiChietKhauFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTrongGoiChietKhauGroupFooterTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "thanhTienTrongGoiChietKhauGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienChietKhauTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "noiThucHienChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taiLieuTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "taiLieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTaiLieuTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "actionTaiLieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('HoVaTenTextbox', { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "HoVaTenTextbox", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuCombobox', { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "dichVuCombobox", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDvTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "tenDvTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('voucherList', { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "voucherList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("multiselect", { static: false })
], DanhSachChoKhamUpdateComponent.prototype, "multiselect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuTrongGoiTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "dichVuTrongGoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuKhuyenMaiTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "dichVuKhuyenMaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "checkBoxTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { static: true })
], DanhSachChoKhamUpdateComponent.prototype, "checkBoxHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridInChiDinh', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_24__["GridComponent"], static: false })
], DanhSachChoKhamUpdateComponent.prototype, "gridInChiDinh", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], DanhSachChoKhamUpdateComponent.prototype, "keyEvent", null);
DanhSachChoKhamUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-cho-kham-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-kham-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_6__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-kham-update.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.scss")).default]
    })
], DanhSachChoKhamUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: DanhSachChoKhamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamModule", function() { return DanhSachChoKhamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vong_deo_tay_popup_vong_deo_tay_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vong-deo-tay-popup/vong-deo-tay-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _danh_sach_cho_kham_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danh-sach-cho-kham-routing.module */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-routing.module.ts");
/* harmony import */ var _danh_sach_cho_kham_list_danh_sach_cho_kham_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./danh-sach-cho-kham-list/danh-sach-cho-kham-list.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-list/danh-sach-cho-kham-list.component.ts");
/* harmony import */ var _danh_sach_cho_kham_create_danh_sach_cho_kham_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danh-sach-cho-kham-create/danh-sach-cho-kham-create.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-create/danh-sach-cho-kham-create.component.ts");
/* harmony import */ var _danh_sach_cho_kham_update_danh_sach_cho_kham_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./danh-sach-cho-kham-update/danh-sach-cho-kham-update.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-update/danh-sach-cho-kham-update.component.ts");
/* harmony import */ var _danh_sach_cho_kham_shared_danh_sach_cho_kham_shared_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _danh_sach_cho_kham_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./danh-sach-cho-kham.service */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _danh_sach_cho_kham_pdf_danh_sach_cho_kham_pdf_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component.ts");
/* harmony import */ var _danh_sach_cho_kham_popup_danh_sach_cho_kham_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component.ts");
/* harmony import */ var _danh_sach_cho_kham_cho_quyet_danh_sach_cho_kham_cho_quyet_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _danh_sach_cho_kham_error_danh_sach_cho_kham_error_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./danh-sach-cho-kham-error/danh-sach-cho-kham-error.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham-error/danh-sach-cho-kham-error.component.ts");
/* harmony import */ var _popup_het_hieu_luc_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./popup-het-hieu-luc/popup-het-hieu-luc.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.ts");
/* harmony import */ var _popup_khong_kiem_tra_duoc_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.ts");
/* harmony import */ var _popup_cho_quet_popup_cho_quet_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./popup-cho-quet/popup-cho-quet.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.ts");
/* harmony import */ var _popup_error_popup_error_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./popup-error/popup-error.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.ts");
/* harmony import */ var _popup_lich_su_kham_chua_benh_popup_lich_su_kham_chua_benh_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.ts");
/* harmony import */ var _popup_them_goi_popup_them_goi_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./popup-them-goi/popup-them-goi.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.ts");
/* harmony import */ var _popup_lich_su_kiem_tra_bhyt_popup_lich_su_kiem_tra_bhyt_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.ts");
/* harmony import */ var _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../kham-benh/kham-benh.module */ "./src/app/modules/main/kham-benh/kham-benh.module.ts");
/* harmony import */ var _tai_kham_tai_kham_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./tai-kham/tai-kham.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/tai-kham/tai-kham.component.ts");
/* harmony import */ var _popup_in_bang_ke_chi_phi_kham_benh_popup_in_bang_ke_chi_phi_kham_benh_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.ts");
/* harmony import */ var _ho_so_benh_an_popup_ho_so_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ho-so-benh-an-popup/ho-so-benh-an-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.ts");
/* harmony import */ var _the_benh_nhan_popup_the_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./the-benh-nhan-popup/the-benh-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.ts");
/* harmony import */ var _nghi_huong_bhxh_tiep_nhan_popup_nghi_huong_bhxh_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.ts");
/* harmony import */ var _nghi_huong_bhxh_tiep_nhan_detail_popup_nghi_huong_bhxh_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.ts");
/* harmony import */ var _in_phieu_dang_ky_kham_popup_in_phieu_dang_ky_kham_popup_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.ts");
/* harmony import */ var _popup_marketing_tnbn_update_popup_marketing_tnbn_update_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./popup-marketing-tnbn-update/popup-marketing-tnbn-update.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm2015/index.js");
/* harmony import */ var _popup_dich_vu_check_trung_update_popup_dich_vu_check_trung_update_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.ts");
/* harmony import */ var _popup_marketing_check_trung_update_popup_marketing_check_trung_update_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./popup-marketing-check-trung-update/popup-marketing-check-trung-update.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.ts");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
/* harmony import */ var _thu_chi_thu_chi_vien_phi_noi_tru_cho_thu_tien_cho_thu_tien_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module.ts");
/* harmony import */ var _huy_dich_vu_huy_thanh_toan_popup_huy_dich_vu_huy_thanh_toan_popup_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.ts");
/* harmony import */ var _dich_vu_khuyen_mai_dich_vu_khuyen_mai_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../dich-vu-khuyen-mai/dich-vu-khuyen-mai.module */ "./src/app/modules/main/dich-vu-khuyen-mai/dich-vu-khuyen-mai.module.ts");
/* harmony import */ var _tiep_nhan_benh_nhan_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.module */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.module.ts");






















































let DanhSachChoKhamModule = class DanhSachChoKhamModule {
};
DanhSachChoKhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _danh_sach_cho_kham_list_danh_sach_cho_kham_list_component__WEBPACK_IMPORTED_MODULE_5__["DanhSachChoKhamListComponent"],
            _danh_sach_cho_kham_create_danh_sach_cho_kham_create_component__WEBPACK_IMPORTED_MODULE_6__["DanhSachChoKhamCreateComponent"],
            _danh_sach_cho_kham_update_danh_sach_cho_kham_update_component__WEBPACK_IMPORTED_MODULE_7__["DanhSachChoKhamUpdateComponent"],
            _danh_sach_cho_kham_shared_danh_sach_cho_kham_shared_component__WEBPACK_IMPORTED_MODULE_8__["DanhSachChoKhamSharedComponent"],
            _danh_sach_cho_kham_pdf_danh_sach_cho_kham_pdf_component__WEBPACK_IMPORTED_MODULE_23__["DanhSachChoKhamPdfComponent"],
            _danh_sach_cho_kham_cho_quyet_danh_sach_cho_kham_cho_quyet_component__WEBPACK_IMPORTED_MODULE_25__["DanhSachChoKhamChoQuyetComponent"],
            _danh_sach_cho_kham_popup_danh_sach_cho_kham_popup_component__WEBPACK_IMPORTED_MODULE_24__["DanhSachChoKhamPopupComponent"],
            _danh_sach_cho_kham_error_danh_sach_cho_kham_error_component__WEBPACK_IMPORTED_MODULE_28__["DanhSachChoKhamErrorComponent"],
            _popup_het_hieu_luc_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_29__["PopupHetHieuLucComponent"],
            _popup_khong_kiem_tra_duoc_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_30__["PopupKhongKiemTraDuocComponent"],
            _popup_cho_quet_popup_cho_quet_component__WEBPACK_IMPORTED_MODULE_31__["PopupChoQuetComponent"],
            _popup_error_popup_error_component__WEBPACK_IMPORTED_MODULE_32__["PopupErrorComponent"],
            _popup_lich_su_kham_chua_benh_popup_lich_su_kham_chua_benh_component__WEBPACK_IMPORTED_MODULE_33__["PopupLichSuKhamChuaBenhComponent"],
            _popup_them_goi_popup_them_goi_component__WEBPACK_IMPORTED_MODULE_34__["PopupThemGoiComponent"],
            _popup_lich_su_kiem_tra_bhyt_popup_lich_su_kiem_tra_bhyt_component__WEBPACK_IMPORTED_MODULE_35__["PopupLichSuKiemTraBhytComponent"],
            _popup_in_bang_ke_chi_phi_kham_benh_popup_in_bang_ke_chi_phi_kham_benh_component__WEBPACK_IMPORTED_MODULE_38__["InBangKeChiPhiKhamBenhComponent"],
            _tai_kham_tai_kham_component__WEBPACK_IMPORTED_MODULE_37__["TaiKhamComponent"],
            _ho_so_benh_an_popup_ho_so_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_39__["HoSoBenhAnPopupComponent"],
            _the_benh_nhan_popup_the_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_40__["TheBenhNhanPopupComponent"],
            _nghi_huong_bhxh_tiep_nhan_popup_nghi_huong_bhxh_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_41__["NghiHuongBhxhTiepNhanPopupComponent"],
            _nghi_huong_bhxh_tiep_nhan_detail_popup_nghi_huong_bhxh_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_42__["NghiHuongBhxhTiepNhanDetailPopupComponent"],
            _vong_deo_tay_popup_vong_deo_tay_popup_component__WEBPACK_IMPORTED_MODULE_1__["VongDeoTayPopupComponent"],
            _in_phieu_dang_ky_kham_popup_in_phieu_dang_ky_kham_popup_component__WEBPACK_IMPORTED_MODULE_43__["InPhieuDangKyKhamPopupComponent"],
            _popup_marketing_tnbn_update_popup_marketing_tnbn_update_component__WEBPACK_IMPORTED_MODULE_44__["PopupMarketingTnbnUpdateComponent"],
            _popup_dich_vu_check_trung_update_popup_dich_vu_check_trung_update_component__WEBPACK_IMPORTED_MODULE_47__["PopupDichVuCheckTrungUpdateComponent"],
            _popup_marketing_check_trung_update_popup_marketing_check_trung_update_component__WEBPACK_IMPORTED_MODULE_48__["PopupMarketingCheckTrungUpdateComponent"],
            _huy_dich_vu_huy_thanh_toan_popup_huy_dich_vu_huy_thanh_toan_popup_component__WEBPACK_IMPORTED_MODULE_51__["HuyDichVuHuyThanhToanPopupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_26__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _danh_sach_cho_kham_routing_module__WEBPACK_IMPORTED_MODULE_4__["DanhSachChoKhamRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_45__["InputsModule"],
            _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_36__["KhamBenhModule"],
            _thu_chi_thu_chi_vien_phi_noi_tru_cho_thu_tien_cho_thu_tien_module__WEBPACK_IMPORTED_MODULE_50__["ChoThuTienNoiTruModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_46__["DropDownsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_49__["DropDownButtonModule"],
            _dich_vu_khuyen_mai_dich_vu_khuyen_mai_module__WEBPACK_IMPORTED_MODULE_52__["DichVuKhuyenMaiModule"],
            _tiep_nhan_benh_nhan_module__WEBPACK_IMPORTED_MODULE_53__["TiepNhanBenhNhanModule"]
        ], providers: [
            _danh_sach_cho_kham_service__WEBPACK_IMPORTED_MODULE_19__["DanhSachChoKhamService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_20__["BaseService"], useClass: _danh_sach_cho_kham_service__WEBPACK_IMPORTED_MODULE_19__["DanhSachChoKhamService"] },
        ],
        entryComponents: [
            _danh_sach_cho_kham_popup_danh_sach_cho_kham_popup_component__WEBPACK_IMPORTED_MODULE_24__["DanhSachChoKhamPopupComponent"],
            _danh_sach_cho_kham_cho_quyet_danh_sach_cho_kham_cho_quyet_component__WEBPACK_IMPORTED_MODULE_25__["DanhSachChoKhamChoQuyetComponent"],
            _danh_sach_cho_kham_error_danh_sach_cho_kham_error_component__WEBPACK_IMPORTED_MODULE_28__["DanhSachChoKhamErrorComponent"],
            _popup_het_hieu_luc_popup_het_hieu_luc_component__WEBPACK_IMPORTED_MODULE_29__["PopupHetHieuLucComponent"],
            _popup_khong_kiem_tra_duoc_popup_khong_kiem_tra_duoc_component__WEBPACK_IMPORTED_MODULE_30__["PopupKhongKiemTraDuocComponent"],
            _popup_cho_quet_popup_cho_quet_component__WEBPACK_IMPORTED_MODULE_31__["PopupChoQuetComponent"],
            _popup_error_popup_error_component__WEBPACK_IMPORTED_MODULE_32__["PopupErrorComponent"],
            _popup_lich_su_kham_chua_benh_popup_lich_su_kham_chua_benh_component__WEBPACK_IMPORTED_MODULE_33__["PopupLichSuKhamChuaBenhComponent"],
            _popup_them_goi_popup_them_goi_component__WEBPACK_IMPORTED_MODULE_34__["PopupThemGoiComponent"],
            _popup_in_bang_ke_chi_phi_kham_benh_popup_in_bang_ke_chi_phi_kham_benh_component__WEBPACK_IMPORTED_MODULE_38__["InBangKeChiPhiKhamBenhComponent"],
            _popup_lich_su_kiem_tra_bhyt_popup_lich_su_kiem_tra_bhyt_component__WEBPACK_IMPORTED_MODULE_35__["PopupLichSuKiemTraBhytComponent"],
            _ho_so_benh_an_popup_ho_so_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_39__["HoSoBenhAnPopupComponent"],
            _the_benh_nhan_popup_the_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_40__["TheBenhNhanPopupComponent"],
            _nghi_huong_bhxh_tiep_nhan_popup_nghi_huong_bhxh_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_41__["NghiHuongBhxhTiepNhanPopupComponent"],
            _nghi_huong_bhxh_tiep_nhan_detail_popup_nghi_huong_bhxh_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_42__["NghiHuongBhxhTiepNhanDetailPopupComponent"],
            _vong_deo_tay_popup_vong_deo_tay_popup_component__WEBPACK_IMPORTED_MODULE_1__["VongDeoTayPopupComponent"],
            _in_phieu_dang_ky_kham_popup_in_phieu_dang_ky_kham_popup_component__WEBPACK_IMPORTED_MODULE_43__["InPhieuDangKyKhamPopupComponent"],
            _popup_marketing_tnbn_update_popup_marketing_tnbn_update_component__WEBPACK_IMPORTED_MODULE_44__["PopupMarketingTnbnUpdateComponent"],
            _popup_dich_vu_check_trung_update_popup_dich_vu_check_trung_update_component__WEBPACK_IMPORTED_MODULE_47__["PopupDichVuCheckTrungUpdateComponent"],
            _popup_marketing_check_trung_update_popup_marketing_check_trung_update_component__WEBPACK_IMPORTED_MODULE_48__["PopupMarketingCheckTrungUpdateComponent"],
            _huy_dich_vu_huy_thanh_toan_popup_huy_dich_vu_huy_thanh_toan_popup_component__WEBPACK_IMPORTED_MODULE_51__["HuyDichVuHuyThanhToanPopupComponent"]
        ]
    })
], DanhSachChoKhamModule);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.service.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: DanhSachChoKhamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoKhamService", function() { return DanhSachChoKhamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let DanhSachChoKhamService = class DanhSachChoKhamService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'DanhSachChoKham';
    }
};
DanhSachChoKhamService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DanhSachChoKhamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DanhSachChoKhamService);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL2hvLXNvLWJlbmgtYW4tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxkYW5oLXNhY2gtY2hvLWtoYW1cXGhvLXNvLWJlbmgtYW4tcG9wdXBcXGhvLXNvLWJlbmgtYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9oby1zby1iZW5oLWFuLXBvcHVwL2hvLXNvLWJlbmgtYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL2hvLXNvLWJlbmgtYW4tcG9wdXAvaG8tc28tYmVuaC1hbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: HoSoBenhAnPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoBenhAnPopupComponent", function() { return HoSoBenhAnPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");









let HoSoBenhAnPopupComponent = class HoSoBenhAnPopupComponent {
    constructor(dialogRef, sanitizer, apiService, dialog, notificationService, data) {
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.src = "";
        this.title = "";
        this.arrFilePdf = [];
        this.arrFileUrl = [];
    }
    ngOnInit() {
        this.getALlFilePDFFromHtml(this.data.html);
    }
    close() {
        this.dialogRef.close();
    }
    getALlFilePDFFromHtml(arrHtml) {
        this.showPopupLoadingData();
        arrHtml.forEach(html => {
            const obj = {
                Html: html,
                TenFile: 'PhieuKhamBenh',
                LaPhieuKhamBenh: true
            };
            this.apiService.postExportPdf('XetNghiem/GetFilePDFFromHtml', obj).subscribe(file => {
                const newBlob = new Blob([file], { type: 'application/pdf' });
                const datalocalURL = window.URL.createObjectURL(newBlob);
                // document.querySelector("iframe").src = datalocalURL;
                this.arrFileUrl.push(datalocalURL);
                this.arrFilePdf.push(file);
                if (this.arrFileUrl.length === arrHtml.length) {
                    this.closePopupLoadingData();
                }
            }, (err) => {
                if (err.Message !== 'Validation Failed') {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
        });
    }
    downloadAllFile() {
        const dateTimeNow = new Date();
        this.arrFilePdf.forEach(file => {
            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].downLoadFile(file, 'application/pdf', 'PhieuKhamBenh' + dateTimeNow.getFullYear() + '.pdf');
        });
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }
};
HoSoBenhAnPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
HoSoBenhAnPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ho-so-benh-an-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ho-so-benh-an-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ho-so-benh-an-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/ho-so-benh-an-popup/ho-so-benh-an-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], HoSoBenhAnPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.scss ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9odXktZGljaC12dS1odXktdGhhbmgtdG9hbi1wb3B1cC9odXktZGljaC12dS1odXktdGhhbmgtdG9hbi1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: HuyDichVuHuyThanhToanPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuyDichVuHuyThanhToanPopupComponent", function() { return HuyDichVuHuyThanhToanPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let HuyDichVuHuyThanhToanPopupComponent = class HuyDichVuHuyThanhToanPopupComponent {
    constructor(data, dialog, cdRef, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.cdRef = cdRef;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.lyDoHuy = null;
    }
    ngOnInit() {
    }
    Huy() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.lyDoHuy == null || this.lyDoHuy == "") {
            this.validationErrors.push({
                Message: "Lý do yêu cầu nhập.",
                Field: "LyDoHuy",
            });
            return true;
        }
        else {
            this.dialogRef.close(this.lyDoHuy);
        }
    }
    close() {
        this.dialog.closeAll();
    }
};
HuyDichVuHuyThanhToanPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
HuyDichVuHuyThanhToanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-huy-dich-vu-huy-thanh-toan-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./huy-dich-vu-huy-thanh-toan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./huy-dich-vu-huy-thanh-toan-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], HuyDichVuHuyThanhToanPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9pbi1waGlldS1kYW5nLWt5LWtoYW0tcG9wdXAvaW4tcGhpZXUtZGFuZy1reS1raGFtLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: InPhieuDangKyKhamPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuDangKyKhamPopupComponent", function() { return InPhieuDangKyKhamPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);






let InPhieuDangKyKhamPopupComponent = class InPhieuDangKyKhamPopupComponent {
    constructor(data, sanitizer, apiService, dialog) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.apiService = apiService;
        this.dialog = dialog;
        this.phieuDangKyKham = [];
        this.phieuDichVuKyThuatCLS = [];
        this.phieuDichVuKhamCLS = [];
        this.phieuDichVuKhacCLS = [];
        this.phieuDichVuGiuongCLS = [];
        this.phieuDichVuChiDinhXetNghiemTestCovid = [];
        this.src = "";
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.loaiPhieu = 0;
    }
    ngOnInit() {
        this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
        console.log("data:", this.data.Model);
        this.modelPrint = this.data.Model;
    }
    close() {
        this.dialog.closeAll();
    }
    InPhieu(loaiPhieu) {
        this.loaiPhieu = loaiPhieu;
        if (this.modelPrint != undefined) {
        }
        this.getSharedPrintForm();
    }
    getSharedPrintForm() {
        const tmpPhieuKham = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU ĐĂNG KÝ KHÁM</th></tr></table>';
        const tmpPhieuCLS = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG</th></tr></table>';
        const tmpPhieuXNCoVId = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH XÉT NGHIỆM TEST NHANH KHÁNG NGUYÊN SARS-CoV-2 </th></tr></table>';
        let data = this.modelPrint.replaceAll(tmpPhieuKham, '').replaceAll(tmpPhieuCLS, '').replaceAll(tmpPhieuXNCoVId, '');
        debugger;
        // in 
        let dataphieukeThuTienThuoc = data.split('<div class=\"pagebreak\"> </div>');
        let dataphieu = data.split('<div class=\"pagebreak\"> </div>');
        let pageBreak = '<div class=\"pagebreak\"> </div>';
        dataphieu.forEach(element => {
            if (element.indexOf('PHIẾU ĐĂNG KÝ KHÁM') > -1) {
                let PhieuInPageBreak = element + pageBreak;
                this.phieuDangKyKham.push(PhieuInPageBreak);
            }
            else if (element.indexOf('DỊCH VỤ GIƯỜNG') > -1) {
                let PhieuInPageBreak = element + pageBreak;
                this.phieuDichVuGiuongCLS.push(PhieuInPageBreak);
            }
            else if (element.indexOf('PHIẾU CHỈ ĐỊNH XÉT NGHIỆM') > -1) {
                let PhieuInPageBreak = element + pageBreak;
                this.phieuDichVuChiDinhXetNghiemTestCovid.push(PhieuInPageBreak);
            }
            else {
                let PhieuInPageBreak = element + pageBreak;
                this.phieuDichVuKyThuatCLS.push(PhieuInPageBreak);
            }
        });
        if (this.loaiPhieu == 1) // dvkt
         {
            if (this.phieuDichVuKyThuatCLS.length == 0) {
                let chuoiIn = "Không có dịch vụ chỉ định cận lâm sàng.";
                return new Promise(resolve => {
                    resolve(chuoiIn);
                    this.phieuDichVuKyThuatCLS = [];
                });
            }
            else {
                let chuoiIn = "";
                this.phieuDichVuKyThuatCLS.forEach(element => {
                    if (element != pageBreak) {
                        chuoiIn = chuoiIn + element;
                    }
                });
                let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
                chuoiIn = chuoiIn.substr(0, viTricutPageBreak);
                return new Promise(resolve => {
                    resolve(chuoiIn);
                    chuoiIn = "";
                    this.phieuDichVuKyThuatCLS = [];
                });
            }
        }
        if (this.loaiPhieu == 2) // dv kb
         {
            if (this.phieuDangKyKham.length == 0) {
                let chuoiIn = "Không có dịch vụ khám bệnh.";
                return new Promise(resolve => {
                    resolve(chuoiIn);
                    chuoiIn = "";
                    this.phieuDichVuKyThuatCLS = [];
                });
            }
            else {
                let chuoiIn = "";
                this.phieuDangKyKham.forEach(element => {
                    chuoiIn = chuoiIn + element;
                });
                let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
                chuoiIn = chuoiIn.substr(0, viTricutPageBreak);
                return new Promise(resolve => {
                    resolve(chuoiIn);
                    chuoiIn = "";
                    this.phieuDangKyKham = [];
                });
            }
        }
        if (this.loaiPhieu == 4) // dv giuong
         {
            if (this.phieuDangKyKham.length == 0) {
                let chuoiIn = "Không có dịch vụ khám bệnh.";
                return new Promise(resolve => {
                    resolve(chuoiIn);
                    chuoiIn = "";
                    this.phieuDichVuKyThuatCLS = [];
                });
            }
            else {
                let chuoiIn = "";
                this.phieuDichVuGiuongCLS.forEach(element => {
                    chuoiIn = chuoiIn + element;
                });
                let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
                chuoiIn = chuoiIn.substr(0, viTricutPageBreak);
                return new Promise(resolve => {
                    resolve(chuoiIn);
                    chuoiIn = "";
                    this.phieuDichVuGiuongCLS = [];
                });
            }
        }
        if (this.loaiPhieu == 3) // dv xn covid
         {
            if (this.phieuDichVuChiDinhXetNghiemTestCovid.length == 0) {
                let chuoiIn = "Không có phiếu chỉ định xét nghiệm Sars Cov 2";
                return new Promise(resolve => {
                    resolve(chuoiIn);
                    chuoiIn = "";
                    this.phieuDichVuKyThuatCLS = [];
                });
            }
            else {
                let chuoiIn = "";
                this.phieuDichVuChiDinhXetNghiemTestCovid.forEach(element => {
                    chuoiIn = chuoiIn + element;
                });
                let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
                chuoiIn = chuoiIn.substr(0, viTricutPageBreak);
                return new Promise(resolve => {
                    resolve(chuoiIn);
                    chuoiIn = "";
                    this.phieuDichVuChiDinhXetNghiemTestCovid = [];
                });
            }
        }
    }
};
InPhieuDangKyKhamPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
InPhieuDangKyKhamPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-in-phieu-dang-ky-kham-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-phieu-dang-ky-kham-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-phieu-dang-ky-kham-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InPhieuDangKyKhamPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.scss ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL25naGktaHVvbmctYmh4aC10aWVwLW5oYW4tZGV0YWlsLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGllcC1uaGFuLWJlbmgtbmhhblxcZGFuaC1zYWNoLWNoby1raGFtXFxuZ2hpLWh1b25nLWJoeGgtdGllcC1uaGFuLWRldGFpbC1wb3B1cFxcbmdoaS1odW9uZy1iaHhoLXRpZXAtbmhhbi1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9uZ2hpLWh1b25nLWJoeGgtdGllcC1uaGFuLWRldGFpbC1wb3B1cC9uZ2hpLWh1b25nLWJoeGgtdGllcC1uaGFuLWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9kYW5oLXNhY2gtY2hvLWtoYW0vbmdoaS1odW9uZy1iaHhoLXRpZXAtbmhhbi1kZXRhaWwtcG9wdXAvbmdoaS1odW9uZy1iaHhoLXRpZXAtbmhhbi1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: NghiHuongBhxhTiepNhanDetailPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NghiHuongBhxhTiepNhanDetailPopupComponent", function() { return NghiHuongBhxhTiepNhanDetailPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let NghiHuongBhxhTiepNhanDetailPopupComponent = class NghiHuongBhxhTiepNhanDetailPopupComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.src = "";
    }
    ngOnInit() {
        this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.templateLienSo1);
    }
    close() {
        this.dialog.closeAll();
    }
    getSharedPrintForm() {
        return new Promise(resolve => {
            resolve(this.data.templateLienSo1);
            this.close();
        });
    }
};
NghiHuongBhxhTiepNhanDetailPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
NghiHuongBhxhTiepNhanDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nghi-huong-bhxh-tiep-nhan-detail-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nghi-huong-bhxh-tiep-nhan-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nghi-huong-bhxh-tiep-nhan-detail-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], NghiHuongBhxhTiepNhanDetailPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".md-primary {\n  color: white;\n  background-color: #005dab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL25naGktaHVvbmctYmh4aC10aWVwLW5oYW4tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxkYW5oLXNhY2gtY2hvLWtoYW1cXG5naGktaHVvbmctYmh4aC10aWVwLW5oYW4tcG9wdXBcXG5naGktaHVvbmctYmh4aC10aWVwLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9uZ2hpLWh1b25nLWJoeGgtdGllcC1uaGFuLXBvcHVwL25naGktaHVvbmctYmh4aC10aWVwLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9uZ2hpLWh1b25nLWJoeGgtdGllcC1uaGFuLXBvcHVwL25naGktaHVvbmctYmh4aC10aWVwLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWRhYjtcbn0iLCIubWQtcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWRhYjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: NghiHuongBhxhTiepNhanPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NghiHuongBhxhTiepNhanPopupComponent", function() { return NghiHuongBhxhTiepNhanPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../kham-benh/kham-benh.model */ "./src/app/modules/main/kham-benh/kham-benh.model.ts");
/* harmony import */ var _nghi_huong_bhxh_tiep_nhan_detail_popup_nghi_huong_bhxh_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");










let NghiHuongBhxhTiepNhanPopupComponent = class NghiHuongBhxhTiepNhanPopupComponent {
    constructor(apiService, notificationService, dialog, data, ref, dialogRef) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.data = data;
        this.ref = ref;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.dateTiepNhanMin = null;
        this.queryInfo = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_8__["LookupQueryInfo"]();
    }
    ngOnInit() {
        console.log(this.data);
        this.thongTinNgayNghiHuongBHYT = new _kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_5__["ThongTinNgayNghiHuongBHYTTiepNhan"]();
        this.thongTinNgayNghiHuongBHYT.YeuCauTiepNhanId = this.data.Id;
        this.thongTinNgayNghiHuongBHYT.ThoiDiemTiepNhan = this.data.ThoiDiemTiepNhan;
        this.thongTinNgayNghiHuongBHYT.DenNgay = new Date();
        this.dateTiepNhanMin = new Date(this.data.ThoiDiemTiepNhan);
        this.queryInfo.ParameterDependencies = this.thongTinNgayNghiHuongBHYT.YeuCauTiepNhanId.toString();
    }
    xemGiayHuongBHXH() {
        let loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
        this.validationErrors = [];
        this.ref.detectChanges();
        this.apiService.post("DanhSachChoKham/XemGiayNghiHuongBHYTLien1", this.thongTinNgayNghiHuongBHYT).subscribe(resultData1 => {
            if (resultData1 != undefined && resultData1 != null) {
                loading.close();
                this.dialog.open(_nghi_huong_bhxh_tiep_nhan_detail_popup_nghi_huong_bhxh_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["NghiHuongBhxhTiepNhanDetailPopupComponent"], {
                    disableClose: true,
                    width: "1200px",
                    data: { templateLienSo1: resultData1, thongTinNgayNghiHuongBHYT: this.thongTinNgayNghiHuongBHYT },
                });
                // this.apiService.post<any>("DanhSachChoKham/XemGiayNghiHuongBHYTLien2", this.thongTinNgayNghiHuongBHYT).subscribe(
                //   resultData2 => {
                //     if (resultData2 != undefined && resultData2 != null) {
                //       loading.close();
                //       this.dialog.open(NghiHuongBhxhTiepNhanDetailPopupComponent, {
                //         disableClose: true,
                //         width: "1200px",
                //         data: { templateLienSo1: resultData1, templateLienSo2: resultData2, thongTinNgayNghiHuongBHYT: this.thongTinNgayNghiHuongBHYT },
                //       });
                //       this.dialogRef.close();
                //     } else {
                //       loading.close();
                //     }
                //   })
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
                loading.close();
            }
            loading.close();
        });
    }
    close() {
        this.dialogRef.close();
    }
};
NghiHuongBhxhTiepNhanPopupComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
NghiHuongBhxhTiepNhanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nghi-huong-bhxh-tiep-nhan-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nghi-huong-bhxh-tiep-nhan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nghi-huong-bhxh-tiep-nhan-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], NghiHuongBhxhTiepNhanPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1jaG8tcXVldC9wb3B1cC1jaG8tcXVldC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PopupChoQuetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupChoQuetComponent", function() { return PopupChoQuetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model */ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");





let PopupChoQuetComponent = class PopupChoQuetComponent {
    constructor(data, dialog, apiService, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.apiService = apiService;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.quetThongTinBenhNhan(this.data);
    }
    quetThongTinBenhNhan(model) {
        this.apiService.post("BHYT/GetLichSuKhamChuaBenh", model).subscribe(resultData => {
            if (resultData != undefined) {
                //this.setValueBHYT(resultData);
                this.dialogRef.close(resultData);
            }
        }, (err) => {
            //console.log("err = ", err);
            let errBHYT = new _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_3__["BaoHiemYTe"]();
            if (err.Message != "Validation Failed" && err.Message != null && err.Message != '') {
                errBHYT.ghiChu = err.Message;
            }
            else {
                errBHYT = null;
            }
            this.dialogRef.close(errBHYT);
        });
    }
};
PopupChoQuetComponent.ctorParameters = () => [
    { type: _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_3__["ThongTinBenhNhan"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
PopupChoQuetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-cho-quet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-cho-quet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-cho-quet.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PopupChoQuetComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.scss ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1kaWNoLXZ1LWNoZWNrLXRydW5nLXVwZGF0ZS9wb3B1cC1kaWNoLXZ1LWNoZWNrLXRydW5nLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: PopupDichVuCheckTrungUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDichVuCheckTrungUpdateComponent", function() { return PopupDichVuCheckTrungUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");






let PopupDichVuCheckTrungUpdateComponent = class PopupDichVuCheckTrungUpdateComponent {
    constructor(dialog, data, dialogRef, apiService, notificationService) {
        this.dialog = dialog;
        this.data = data;
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
    }
    ngOnInit() {
    }
    Co() {
        this.dialogRef.close(true);
    }
    Khong() {
        this.dialogRef.close(false);
    }
};
PopupDichVuCheckTrungUpdateComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
PopupDichVuCheckTrungUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-dich-vu-check-trung-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-dich-vu-check-trung-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-dich-vu-check-trung-update.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PopupDichVuCheckTrungUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sub-title-bottom {\n  text-align: center;\n  color: red;\n}\n\n.div-title-bottom {\n  margin-top: 30px;\n  text-align: right;\n}\n\n.err-mess-bhyt:first-letter {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3BvcHVwLWVycm9yL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGllcC1uaGFuLWJlbmgtbmhhblxcZGFuaC1zYWNoLWNoby1raGFtXFxwb3B1cC1lcnJvclxccG9wdXAtZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1lcnJvci9wb3B1cC1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1lcnJvci9wb3B1cC1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZXJyLW1lc3MtYmh5dDpmaXJzdC1sZXR0ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSIsIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZXJyLW1lc3MtYmh5dDpmaXJzdC1sZXR0ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PopupErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupErrorComponent", function() { return PopupErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");







let PopupErrorComponent = class PopupErrorComponent {
    constructor(data, dialog, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.messageErrFromBHYT = "";
    }
    ngOnInit() {
        this.errorMessage = src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_2__["TiepNhanBenhNhanMessage"].MessageSaiThongTinBenhNhan;
        if (this.data != null) {
            //console.log(this.data);
            this.data.NgayThangNamSinhDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDate(new Date(this.data.NgayThangNamSinh), "dd/mm/yyyy");
            if (this.data.MessageErrFromBHYT != undefined && this.data.MessageErrFromBHYT != null && this.data.MessageErrFromBHYT != "") {
                this.messageErrFromBHYT = this.data.MessageErrFromBHYT;
            }
            else {
                this.messageErrFromBHYT = "Người bệnh này không tồn tại trên cổng BHYT";
            }
        }
        else {
            this.messageErrFromBHYT = "Người bệnh này không tồn tại trên cổng BHYT";
        }
    }
    close() {
        //console.log("close");
        this.dialog.closeAll();
        //this.dialogRef.close(1);
    }
    khamKhongBHYT() {
        //this.dialog.closeAll();
        this.dialogRef.close(1);
    }
    huy() {
        //console.log("huy");
        this.dialog.closeAll();
        //this.dialogRef.close(1);
    }
    chapNhanBHYTNhapTay() {
        this.dialogRef.close(2);
    }
};
PopupErrorComponent.ctorParameters = () => [
    { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_5__["TiepNhanBenhNhanViewModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
PopupErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-error.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], PopupErrorComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sub-title-bottom {\n  text-align: center;\n  color: red;\n}\n\n.div-title-bottom {\n  margin-top: 30px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3BvcHVwLWhldC1oaWV1LWx1Yy9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRpZXAtbmhhbi1iZW5oLW5oYW5cXGRhbmgtc2FjaC1jaG8ta2hhbVxccG9wdXAtaGV0LWhpZXUtbHVjXFxwb3B1cC1oZXQtaGlldS1sdWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1oZXQtaGlldS1sdWMvcG9wdXAtaGV0LWhpZXUtbHVjLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9kYW5oLXNhY2gtY2hvLWtoYW0vcG9wdXAtaGV0LWhpZXUtbHVjL3BvcHVwLWhldC1oaWV1LWx1Yy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSIsIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PopupHetHieuLucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupHetHieuLucComponent", function() { return PopupHetHieuLucComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);





let PopupHetHieuLucComponent = class PopupHetHieuLucComponent {
    constructor(data, dialog, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
    }
    ngOnInit() {
    }
    close() {
        //this.dialog.closeAll();
        this.dialogRef.close(1);
    }
    khamKhongBHYT() {
        this.dialog.closeAll();
    }
    huy() {
        this.dialogRef.close(1);
    }
    chapNhanBHYTNhapTay() {
        this.dialogRef.close(2);
    }
};
PopupHetHieuLucComponent.ctorParameters = () => [
    { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["TiepNhanBenhNhanViewModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
PopupHetHieuLucComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-het-hieu-luc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-het-hieu-luc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-het-hieu-luc.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-het-hieu-luc/popup-het-hieu-luc.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], PopupHetHieuLucComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3BvcHVwLWluLWJhbmcta2UtY2hpLXBoaS1raGFtLWJlbmgvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxkYW5oLXNhY2gtY2hvLWtoYW1cXHBvcHVwLWluLWJhbmcta2UtY2hpLXBoaS1raGFtLWJlbmhcXHBvcHVwLWluLWJhbmcta2UtY2hpLXBoaS1raGFtLWJlbmguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1pbi1iYW5nLWtlLWNoaS1waGkta2hhbS1iZW5oL3BvcHVwLWluLWJhbmcta2UtY2hpLXBoaS1raGFtLWJlbmguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9kYW5oLXNhY2gtY2hvLWtoYW0vcG9wdXAtaW4tYmFuZy1rZS1jaGktcGhpLWtoYW0tYmVuaC9wb3B1cC1pbi1iYW5nLWtlLWNoaS1waGkta2hhbS1iZW5oLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: InBangKeChiPhiKhamBenhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBangKeChiPhiKhamBenhComponent", function() { return InBangKeChiPhiKhamBenhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");







let InBangKeChiPhiKhamBenhComponent = class InBangKeChiPhiKhamBenhComponent {
    constructor(data, sanitizer, apiService, dialog) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.apiService = apiService;
        this.dialog = dialog;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.src = "";
        this.srcBangKeChiPhiKhamBenhCoBHYT = "";
        this.srcBangKeChiPhiKhamBenh = "";
        this.isBHYT = false;
        this.iskhongBHYT = false;
        this.srcBangKeChiPhiKhamBenhCoBHYTHtml = "";
        this.srcBangKeChiPhiKhamBenhHtml = "";
        this.typeLayout = "landscape";
        // this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
    }
    ngOnInit() {
        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        }
        else {
            this.hostingName = "https://" + window.location.host;
        }
        var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: {},
        });
        this.apiService
            .get("TiepNhanBenhNhan/GetHtmlPhieuChiPhiKhamBenhCoBHYT?yeuCauTiepNhanId=" +
            this.data.id +
            "&hostingName=" +
            this.hostingName)
            .subscribe((res) => {
            if (res != "") {
                this.isBHYT = true;
            }
            this.srcBangKeChiPhiKhamBenhCoBHYTHtml = res;
            this.srcBangKeChiPhiKhamBenhCoBHYT =
                "data:text/html;charset=utf-8," + encodeURIComponent(res);
            loading.close();
        });
        this.apiService
            .get("TiepNhanBenhNhan/GetHtmlPhieuChiPhiKhamBenh?yeuCauTiepNhanId=" +
            this.data.id +
            "&hostingName=" +
            this.hostingName)
            .subscribe((res) => {
            if (res != "") {
                this.iskhongBHYT = true;
            }
            this.srcBangKeChiPhiKhamBenhHtml = res;
            this.srcBangKeChiPhiKhamBenh =
                "data:text/html;charset=utf-8," + encodeURIComponent(res);
            loading.close();
        });
    }
    getSharedPrintForm(id) {
        return new Promise((resolve) => {
            if (this.data.id != null) {
                this.apiService
                    .get("TiepNhanBenhNhan/InBangKeChiPhiKhamBenh?yeuCauTiepNhanId=" +
                    this.data.id +
                    "&hostingName=" +
                    this.hostingName)
                    .subscribe((inPhieu) => {
                    resolve(inPhieu);
                });
            }
        });
    }
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, "g"), replace);
    }
    close() {
        this.dialog.closeAll();
    }
};
InBangKeChiPhiKhamBenhComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("iframeAutoHeight", { static: false })
], InBangKeChiPhiKhamBenhComponent.prototype, "iframeAutoHeight", void 0);
InBangKeChiPhiKhamBenhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "popup-in-bang-ke-chi-phi-kham-benh",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-in-bang-ke-chi-phi-kham-benh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-in-bang-ke-chi-phi-kham-benh.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InBangKeChiPhiKhamBenhComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sub-title-bottom {\n  text-align: center;\n  color: red;\n}\n\n.div-title-bottom {\n  margin-top: 30px;\n  text-align: right;\n}\n\n.div-margin-bottom {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3BvcHVwLWtob25nLWtpZW0tdHJhLWR1b2MvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxkYW5oLXNhY2gtY2hvLWtoYW1cXHBvcHVwLWtob25nLWtpZW0tdHJhLWR1b2NcXHBvcHVwLWtob25nLWtpZW0tdHJhLWR1b2MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1raG9uZy1raWVtLXRyYS1kdW9jL3BvcHVwLWtob25nLWtpZW0tdHJhLWR1b2MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9kYW5oLXNhY2gtY2hvLWtoYW0vcG9wdXAta2hvbmcta2llbS10cmEtZHVvYy9wb3B1cC1raG9uZy1raWVtLXRyYS1kdW9jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi10aXRsZS1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kaXYtdGl0bGUtYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5kaXYtbWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSIsIi5zdWItdGl0bGUtYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZGl2LW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: PopupKhongKiemTraDuocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupKhongKiemTraDuocComponent", function() { return PopupKhongKiemTraDuocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model */ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
/* harmony import */ var _popup_cho_quet_popup_cho_quet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popup-cho-quet/popup-cho-quet.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-cho-quet/popup-cho-quet.component.ts");
/* harmony import */ var _popup_error_popup_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup-error/popup-error.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-error/popup-error.component.ts");








let PopupKhongKiemTraDuocComponent = class PopupKhongKiemTraDuocComponent {
    constructor(data, dialog, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.thongTinBenhNhan = new _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_2__["ThongTinBenhNhan"]();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
    }
    ngOnInit() {
    }
    khamKhongBHYT() {
        this.dialogRef.close(false);
        //this.dialogRef2.close();
    }
    chapNhanBHYTNhapTay() {
        this.dialogRef.close(true);
    }
    // chapNhanCoBHYT(){
    //   this.dialogRef.close(true);
    //   //this.dialogRef2.close();
    // }
    close() {
        this.dialogRef.close(false);
    }
    thuLai() {
        this.thongTinBenhNhan.MaThe = this.data.BHYTMaSoThe;
        this.thongTinBenhNhan.TenBenhNhan = this.data.HoTen;
        this.thongTinBenhNhan.NgaySinh = this.data.NgayThangNamSinh;
        let dialogRef = this.dialog.open(_popup_cho_quet_popup_cho_quet_component__WEBPACK_IMPORTED_MODULE_6__["PopupChoQuetComponent"], {
            disableClose: true,
            width: '500px',
            height: '250px',
            data: this.thongTinBenhNhan,
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log("close = ", result);
            // if (result == null || (result != null && result.maKetQua == "050")) {
            if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
                //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);
                //
                this.thongTinBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
                let dialogRef = this.dialog.open(_popup_error_popup_error_component__WEBPACK_IMPORTED_MODULE_7__["PopupErrorComponent"], {
                    disableClose: false,
                    width: '400px',
                    height: '100px',
                    data: this.thongTinBenhNhan
                });
                dialogRef.afterClosed().subscribe(result => {
                    //document.getElementById("SoTheBHYTisAutoFocus").focus();
                });
                //
            }
            else {
                //console.log("thuLai = ", result);
                this.dialogRef.close(result);
                //this.dialogRef2.close();
            }
        });
    }
};
PopupKhongKiemTraDuocComponent.ctorParameters = () => [
    { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_5__["TiepNhanBenhNhanViewModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
PopupKhongKiemTraDuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-khong-kiem-tra-duoc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-khong-kiem-tra-duoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-khong-kiem-tra-duoc.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], PopupKhongKiemTraDuocComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1saWNoLXN1LWtoYW0tY2h1YS1iZW5oL3BvcHVwLWxpY2gtc3Uta2hhbS1jaHVhLWJlbmguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PopupLichSuKhamChuaBenhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupLichSuKhamChuaBenhComponent", function() { return PopupLichSuKhamChuaBenhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let PopupLichSuKhamChuaBenhComponent = class PopupLichSuKhamChuaBenhComponent {
    constructor(data, dialog, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.gridColumns = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].YeuCauTiepNhan;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 45, Sortable: true },
            { Field: "MaTheBHYT", Title: "Mã thẻ BHYT", Width: 150, Sortable: false },
            { Field: "HoVaTen", Title: "Họ và tên", MinWidth: 150, Sortable: false },
            { Field: "NgayVaoVien", Title: "Ngày vào viện", Width: 156, Sortable: false },
            { Field: "NgayRaVien", Title: "Ngày ra viện", Width: 156, Sortable: false },
            { Field: "CoSoKCB", Title: "Cơ sở KCB", Width: 180, Sortable: false },
            { Field: "KetQuaDieuTri", Title: "Kết quả điều trị", Width: 100, Sortable: false },
            { Field: "LyDoVaoVien", Title: "Lý do vào viện", Width: 100, Sortable: false },
            { Field: "TinhTrangRaVien", Title: "Tình trạng ra viện", Width: 100, Sortable: false },
        ];
        this.setDataForGrid();
    }
    setDataForGrid() {
        this.gridData = {
            data: this.data,
            total: this.data.length
        };
        if (this.grid != undefined) {
            this.grid.setDataSource();
        }
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
};
PopupLichSuKhamChuaBenhComponent.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false })
], PopupLichSuKhamChuaBenhComponent.prototype, "grid", void 0);
PopupLichSuKhamChuaBenhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-lich-su-kham-chua-benh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-lich-su-kham-chua-benh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-lich-su-kham-chua-benh.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], PopupLichSuKhamChuaBenhComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1saWNoLXN1LWtpZW0tdHJhLWJoeXQvcG9wdXAtbGljaC1zdS1raWVtLXRyYS1iaHl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: PopupLichSuKiemTraBhytComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupLichSuKiemTraBhytComponent", function() { return PopupLichSuKiemTraBhytComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let PopupLichSuKiemTraBhytComponent = class PopupLichSuKiemTraBhytComponent {
    constructor(data, dialog, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.gridColumns = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].YeuCauTiepNhan;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 45, Sortable: false },
            { Field: "UserKiemTra", Title: "User kiểm tra", Width: 120, Sortable: false },
            { Field: "TenCSKCB", Title: "Tên CSKCB", Width: 260, Sortable: false },
            { Field: "ThoiGianKiemTra", Title: "Thời gian kiểm tra", Width: 155, Sortable: false },
            { Field: "NoiDungThongBao", Title: "Nội dung thông báo", MinWidth: 300, Sortable: false },
        ];
        this.setDataForGrid();
    }
    setDataForGrid() {
        this.gridData = {
            data: this.data,
            total: this.data.length
        };
        if (this.grid != undefined) {
            this.grid.setDataSource();
        }
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
};
PopupLichSuKiemTraBhytComponent.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false })
], PopupLichSuKiemTraBhytComponent.prototype, "grid", void 0);
PopupLichSuKiemTraBhytComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-lich-su-kiem-tra-bhyt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-lich-su-kiem-tra-bhyt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-lich-su-kiem-tra-bhyt.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], PopupLichSuKiemTraBhytComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-tag-content {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3BvcHVwLW1hcmtldGluZy1jaGVjay10cnVuZy11cGRhdGUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxkYW5oLXNhY2gtY2hvLWtoYW1cXHBvcHVwLW1hcmtldGluZy1jaGVjay10cnVuZy11cGRhdGVcXHBvcHVwLW1hcmtldGluZy1jaGVjay10cnVuZy11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1tYXJrZXRpbmctY2hlY2stdHJ1bmctdXBkYXRlL3BvcHVwLW1hcmtldGluZy1jaGVjay10cnVuZy11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3BvcHVwLW1hcmtldGluZy1jaGVjay10cnVuZy11cGRhdGUvcG9wdXAtbWFya2V0aW5nLWNoZWNrLXRydW5nLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtdGFnLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSIsIi5kaXYtdGFnLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: PopupMarketingCheckTrungUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMarketingCheckTrungUpdateComponent", function() { return PopupMarketingCheckTrungUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");





let PopupMarketingCheckTrungUpdateComponent = class PopupMarketingCheckTrungUpdateComponent {
    constructor(dialog, data, dialogRef, apiService, notificationService) {
        this.dialog = dialog;
        this.data = data;
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.danhSachGoiDaChonTrongLanPopup = new Array();
        this.gridColumns = [];
        this.danhSachGoiDaChonTrongLanPopup = this.data.data;
    }
    ngOnInit() {
        this.gridColumns = [
            { Field: "ThuocGoi", Title: "Chương Trình", Width: 180, Sortable: false },
            { Field: "TenDichVu", Title: "Dịch Vụ", Width: 180, Sortable: true },
            { Field: "ThuocGoi", Title: "Cảnh Báo", Width: 80, Sortable: true, Template: this.canhBaoTemplate },
            { Field: "ThuocGoi", Title: "", Width: 100, Sortable: true, Template: this.actionTemplate },
        ];
    }
    Co() {
        let item = this.danhSachGoiDaChonTrongLanPopup.filter(o => o.KhongThem);
        //console.log("Co = ", item);
        this.dialogRef.close(item);
    }
    Khong() {
        this.dialogRef.close();
    }
    close() {
        this.dialogRef.close();
    }
};
PopupMarketingCheckTrungUpdateComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], PopupMarketingCheckTrungUpdateComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canhBaoTemplate', { static: true })
], PopupMarketingCheckTrungUpdateComponent.prototype, "canhBaoTemplate", void 0);
PopupMarketingCheckTrungUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-marketing-check-trung-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-marketing-check-trung-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-marketing-check-trung-update.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PopupMarketingCheckTrungUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  margin: 0;\n}\n\nul.dashed {\n  list-style-type: none;\n}\n\nul.dashed > li {\n  text-indent: -5px;\n  padding: 1px 0px 1px 0px;\n}\n\nul.dashed > li:before {\n  content: \"- \";\n  text-indent: -5px;\n}\n\n.title-grid-parent {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\ninput[type=checkbox] {\n  transform: scale(1.5);\n}\n\n.span-1-goi-marketing {\n  margin-left: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 40%;\n  width: 40%;\n}\n\n.span-2-goi-marketing {\n  width: 57%;\n  text-align: right;\n}\n\n.text-right-td {\n  text-align: right;\n}\n\n.text-left-td {\n  text-align: left;\n}\n\n.text-red {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3BvcHVwLW1hcmtldGluZy10bmJuLXVwZGF0ZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRpZXAtbmhhbi1iZW5oLW5oYW5cXGRhbmgtc2FjaC1jaG8ta2hhbVxccG9wdXAtbWFya2V0aW5nLXRuYm4tdXBkYXRlXFxwb3B1cC1tYXJrZXRpbmctdG5ibi11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC1tYXJrZXRpbmctdG5ibi11cGRhdGUvcG9wdXAtbWFya2V0aW5nLXRuYm4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9kYW5oLXNhY2gtY2hvLWtoYW0vcG9wdXAtbWFya2V0aW5nLXRuYm4tdXBkYXRlL3BvcHVwLW1hcmtldGluZy10bmJuLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG51bC5kYXNoZWQge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnVsLmRhc2hlZCA+IGxpIHtcbiAgdGV4dC1pbmRlbnQ6IC01cHg7XG4gIHBhZGRpbmc6IDFweCAwcHggMXB4IDBweDtcbn1cblxudWwuZGFzaGVkID4gbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCItIFwiO1xuICB0ZXh0LWluZGVudDogLTVweDtcbn1cblxuLnRpdGxlLWdyaWQtcGFyZW50IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4uc3Bhbi0xLWdvaS1tYXJrZXRpbmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogNDAlO1xuICB3aWR0aDogNDAlO1xufVxuXG4uc3Bhbi0yLWdvaS1tYXJrZXRpbmcge1xuICB3aWR0aDogNTclO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtcmlnaHQtdGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtbGVmdC10ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50ZXh0LXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59IiwidWwge1xuICBtYXJnaW46IDA7XG59XG5cbnVsLmRhc2hlZCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxudWwuZGFzaGVkID4gbGkge1xuICB0ZXh0LWluZGVudDogLTVweDtcbiAgcGFkZGluZzogMXB4IDBweCAxcHggMHB4O1xufVxuXG51bC5kYXNoZWQgPiBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIi0gXCI7XG4gIHRleHQtaW5kZW50OiAtNXB4O1xufVxuXG4udGl0bGUtZ3JpZC1wYXJlbnQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbi5zcGFuLTEtZ29pLW1hcmtldGluZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiA0MCU7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5zcGFuLTItZ29pLW1hcmtldGluZyB7XG4gIHdpZHRoOiA1NyU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1yaWdodC10ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1sZWZ0LXRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHQtcmVkIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: PopupMarketingTnbnUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMarketingTnbnUpdateComponent", function() { return PopupMarketingTnbnUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../danh-sach-cho-kham.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _popup_marketing_check_trung_update_popup_marketing_check_trung_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../popup-marketing-check-trung-update/popup-marketing-check-trung-update.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-check-trung-update/popup-marketing-check-trung-update.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");















let PopupMarketingTnbnUpdateComponent = class PopupMarketingTnbnUpdateComponent {
    constructor(dialog, data, dialogRef, apiService, notificationService) {
        this.dialog = dialog;
        this.data = data;
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.validationErrors = [];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.searchString = null;
        this.gridColumns = [];
        this.gridColumnsChild = [];
        this.benhNhanId = null;
        this.duocHuongBHYT = false;
        this.yctnId = null;
        this.mucHuong = null;
        this.danhSachDichVuDaChonTrongLanPopup = new Array();
        this.danhSachDichVuDaChonTrongLanPopupString = "";
        this.danhSachGoiDaChonTrongLanPopup = new Array();
        this.danhSachDichVuDangCo = new Array();
        this.urlGetDataGrid = "TiepNhanBenhNhan/GetDataThongTinGoiForGridAsync";
        this.urlGetTotalPageGrid = "TiepNhanBenhNhan/GetTotalThongTinGoiPageForGridAsync";
        this.searchStringDefault = null;
        this.tongSoTienThem = null;
        this.chuongTrinhGoiDichVuIdPopup = null;
        this.yeuCauGoiDichVuIdPopup = null;
        this.groups = [{ field: 'TenNhomDichVu' }];
        this.arrGoiDangChon = new Array();
        this.benhNhanId = this.data.benhNhanId;
        this.duocHuongBHYT = this.data.duocHuongBHYT;
        this.yctnId = this.data.yctnId;
        this.mucHuong = this.data.mucHuong;
        if (this.data.itemPopup != undefined && this.data.itemPopup != null) {
            // this.chuongTrinhGoiDichVuIdPopup = this.data.itemPopup.ChuongTrinhGoiDichVuId;
            this.yeuCauGoiDichVuIdPopup = this.data.itemPopup.YeuCauGoiDichVuId;
        }
        // this.searchStringDefault = this.benhNhanId + "|" + this.chuongTrinhGoiDichVuIdPopup;
        this.searchStringDefault = this.benhNhanId + "|" + this.yeuCauGoiDichVuIdPopup;
        this.danhSachDichVuDangCo = this.data.danhSachDichVuDangCo;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhSachChoKham;
        this.gridColumns = [
            { Field: "TenGoi", Title: "Tên Gói", Width: 600, Sortable: false, Template: this.tenGoiTemplate }
        ];
        this.gridColumnsChild = [
            { Field: "CheckBox", Title: "", Width: 40, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
            { Field: "STT", Title: "#", Width: 20, Sortable: false, Template: this.sttTemplate },
            { Field: "TenNhomDichVu", Title: "", Width: 20, TemplateGroupHeader: this.nhomDichVuTemplate, Hidden: true },
            { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
            { Field: "TenDichVu", Title: "Tên dịch vụ", MinWidth: 180, Sortable: true },
            { Field: "LoaiGiaDisplay", Title: "Loại giá", Width: 100, Sortable: true },
            { Field: "SoLuong", Title: "SL", Width: 40, Sortable: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 120, Sortable: true, Template: this.donGiaTemplate, TemplateFooter: this.tongTienFooterTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 120, Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.tongCongFooterTemplate },
            { Field: "SoLuongDaDung", Title: "SL đã dùng", Width: 100, Sortable: true },
            { Field: "SoLuongDungLanNay", Title: "SL dùng lần này", Width: 120, Sortable: false, Template: this.soLuongTemplate } //, TemplateFooter: this.giaGoiFooterTemplate }
        ];
        // if (this.chuongTrinhGoiDichVuIdPopup != null && this.chuongTrinhGoiDichVuIdPopup != undefined) {
        if (this.yeuCauGoiDichVuIdPopup != null && this.yeuCauGoiDichVuIdPopup != undefined) {
            let self = this;
            setTimeout(() => {
                self.gridChild.onExpandRowDetail(0);
            }, 500);
        }
    }
    onKeyGrid(event) {
        if (event.keyCode == 13) {
            this.Timkiem();
        }
    }
    Timkiem() {
        this.gridChild._additionalSearchString = this.searchStringDefault;
        this.gridChild.searchString = this.searchString;
        this.gridChild.search();
    }
    clearSearch() {
        if ((this.searchString == "" || this.searchString == null) && this.gridChild != undefined) {
            this.gridChild.searchString = "";
            this.gridChild.search();
        }
    }
    chonDichVu(event, dataItem) {
        console.log('chondichvu', dataItem);
        //console.log("chonDichVu = ", event, dataItem);
        if (event == true) {
            this.addDichVu(dataItem);
        }
        else {
            this.removeDichVu(dataItem);
        }
    }
    setSoTienTTThem() {
        return (this.danhSachGoiDaChonTrongLanPopup.filter(o => o.TrangThaiThanhToan != 2)
            .reduce((sum, item) => sum + item.GiaSauChietKhau, 0));
    }
    changeSoLuongDichVu(event, dataItem) {
        let item = JSON.parse(JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup.filter(o => o == dataItem)));
        //console.log("changeSoLuongDichVu = ", event, dataItem, item);
        if (item != undefined && item.length > 0) {
            item[0].SoLuongDungLanNay = event;
            item[0].SoLuongConLai = item[0].SoLan - event;
            this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(item);
        }
    }
    addDichVu(data) {
        let dataTemp = this.cloneItemDichVuChonTronLanNay(data);
        let indexTemp = -1;
        this.danhSachDichVuDaChonTrongLanPopup.forEach((element, index) => {
            let elementTemp = this.cloneItemDichVuChonTronLanNay(element);
            if (JSON.stringify(dataTemp) == JSON.stringify(elementTemp)) {
                indexTemp = index;
            }
        });
        if (indexTemp == -1) {
            this.danhSachDichVuDaChonTrongLanPopup.push(data);
            this.capNhatThongTinGoiTuDanhSachDichVuDaChon();
            this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup);
        }
        // let item = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o == data);
        // if (item == undefined || item.length == 0) {
        //   this.danhSachDichVuDaChonTrongLanPopup.push(data);
        //   this.capNhatThongTinGoiTuDanhSachDichVuDaChon();
        //   //
        //   // let goi = new DanhSachGoiChonTrongLanPopup();
        //   // goi.ThuocGoi = data.ThuocGoi;
        //   // goi.GiaSauChietKhau = data.GiaSauChietKhau;
        //   // goi.TrangThaiThanhToan = data.TrangThaiThanhToan;
        //   // goi.TrangThaiThanhToanDisplay = data.TrangThaiThanhToanDisplay;
        //   // this.danhSachGoiDaChonTrongLanPopup.push(goi);
        //   //
        //   this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup);
        // }
    }
    removeDichVu(data) {
        let dataTemp = this.cloneItemDichVuChonTronLanNay(data);
        let indexTemp = -1;
        this.danhSachDichVuDaChonTrongLanPopup.forEach((element, index) => {
            let elementTemp = this.cloneItemDichVuChonTronLanNay(element);
            if (JSON.stringify(dataTemp) == JSON.stringify(elementTemp)) {
                indexTemp = index;
            }
        });
        if (indexTemp != -1) {
            this.danhSachDichVuDaChonTrongLanPopup.splice(indexTemp, 1);
        }
        // this.danhSachDichVuDaChonTrongLanPopup = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o != data);
        //
        this.capNhatThongTinGoiTuDanhSachDichVuDaChon();
        //
        this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup);
        //console.log("removeDichVu = ", this.danhSachDichVuDaChonTrongLanPopup, this.danhSachDichVuDaChonTrongLanPopupString);
    }
    cloneItemDichVuChonTronLanNay(data) {
        let dataTemp = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_6__["DanhSachDichVuChonTrongLanPopup"]();
        dataTemp.Id = data.Id;
        dataTemp.TenNhomDichVu = data.TenNhomDichVu;
        dataTemp.ChuongTrinhGoiDichVuId = data.ChuongTrinhGoiDichVuId;
        dataTemp.YeuCauGoiDichVuId = data.YeuCauGoiDichVuId;
        dataTemp.DichVuId = data.DichVuId;
        return dataTemp;
    }
    capNhatThongTinGoiTuDanhSachDichVuDaChon() {
        this.danhSachGoiDaChonTrongLanPopup = new Array();
        this.danhSachDichVuDaChonTrongLanPopup.forEach(o => {
            let item = this.danhSachGoiDaChonTrongLanPopup.filter(m => m.ThuocGoi == o.ThuocGoi);
            if (item.length == 0) {
                let goi = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_6__["DanhSachGoiChonTrongLanPopup"]();
                goi.ThuocGoi = o.ThuocGoi;
                goi.GiaSauChietKhau = o.GiaSauChietKhau;
                goi.GiaSauChietKhauDisplay = o.GiaSauChietKhauDisplay;
                goi.TrangThaiThanhToan = o.TrangThaiThanhToan;
                goi.TrangThaiThanhToanDisplay = o.TrangThaiThanhToanDisplay;
                this.danhSachGoiDaChonTrongLanPopup.push(goi);
            }
        });
        //console.log("capNhatThongTinGoiTuDanhSachDichVuDaChon = ", this.danhSachGoiDaChonTrongLanPopup);
    }
    // test(dataItemParent){
    //   console.log("dataItemParent = ", dataItemParent);
    // }
    luuDichVuChiDinh() {
        if (this.danhSachDichVuDaChonTrongLanPopup != undefined && this.danhSachDichVuDaChonTrongLanPopup.length > 0) {
            //check trung
            let danhSachDichVuTrung = new Array();
            for (let i = 0; i < this.danhSachDichVuDaChonTrongLanPopup.length; i++) {
                let daThem = false;
                let item = this.danhSachDichVuDaChonTrongLanPopup[i];
                let itemExist = this.danhSachDichVuDangCo.filter(o => o.MaDichVuId == item.DichVuId && o.Nhom == item.TenNhomDichVu);
                if (itemExist.length > 0) {
                    danhSachDichVuTrung.push(item);
                    daThem = true;
                }
                //
                let itemPopupExist = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o != item && o.DichVuId == item.DichVuId && o.TenNhomDichVu == item.TenNhomDichVu);
                if (itemPopupExist.length > 0 && !daThem) {
                    danhSachDichVuTrung.push(item);
                }
            }
            //console.log("danhSachDichVuTrung = ", danhSachDichVuTrung);
            //
            if (danhSachDichVuTrung.length > 0) {
                this.openPopup(danhSachDichVuTrung);
            }
            else {
                //this.dialogRef.close(this.danhSachDichVuDaChonTrongLanPopup);
                let danhSachDichVuGoiDaChon = new Array();
                this.danhSachDichVuDaChonTrongLanPopup.forEach(e => {
                    let item = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_6__["ThemChiDinhDichVu"]();
                    item.LaGoi = true;
                    item.TenNhomDichVu = e.TenNhomDichVu;
                    item.MaDichVuId = e.DichVuId;
                    item.SoLuong = e.SoLuongDungLanNay;
                    item.chuongTrinhGoiDichVuId = e.ChuongTrinhGoiDichVuId;
                    item.YeuCauGoiDichVuId = e.YeuCauGoiDichVuId;
                    item.LoaiGiaId = e.NhomGiaDichVuBenhVienId;
                    //cheat cho lẹ
                    item.DuocHuongBHYT = this.duocHuongBHYT;
                    item.yeuCauTiepNhanId = this.yctnId;
                    item.benhNhanId = this.benhNhanId;
                    danhSachDichVuGoiDaChon.push(item);
                });
                let model = new _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_10__["modelUpdateView"]();
                model.Data = danhSachDichVuGoiDaChon;
                model.YeuCauTiepNhanId = this.yctnId;
                model.BenhNhanid = this.benhNhanId;
                model.MucHuongBHYT = this.mucHuong;
                // this.luuDichVu(model, danhSachDichVuGoiDaChon);
                //BVHD-3804
                this.kiemTraCoDichVuKhongBaoLanh(model, danhSachDichVuGoiDaChon);
            }
            //luu dich vu
            //this.luuDichVu(model, danhSachDichVuGoiDaChon);
            //console.log('openPopupGoiDichVu', danhSachDichVuGoiDaChon, model);
            //this.themChiDinhDichVuKhacKhamBenh(6, this.danhSachDichVuGoiDaChon);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["TiepNhanBenhNhanMessage"].MessageErrorMustHaveOneDVGoi);
        }
        //console.log("luuDichVuChiDinh = ", this.danhSachDichVuDaChonTrongLanPopup);
        //this.dialogRef.close(this.danhSachDichVuDaChonTrongLanPopup);
    }
    openPopup(danhSachDichVuTrung) {
        var self = this;
        self.dialog.open(_popup_marketing_check_trung_update_popup_marketing_check_trung_update_component__WEBPACK_IMPORTED_MODULE_12__["PopupMarketingCheckTrungUpdateComponent"], {
            disableClose: false,
            width: '950px',
            data: {
                data: danhSachDichVuTrung
            }
        }).afterClosed().subscribe(result => {
            console.log('danh sach khong chon = ', result);
            if (result == undefined) {
                //khong them gi
                this.dialogRef.close();
            }
            else {
                let danhSach = new Array();
                for (let i = 0; i < this.danhSachDichVuDaChonTrongLanPopup.length; i++) {
                    let itemThem = this.danhSachDichVuDaChonTrongLanPopup[i];
                    let itemKhongThem = result.filter(o => o == itemThem);
                    if (itemKhongThem.length == 0) {
                        danhSach.push(itemThem);
                    }
                }
                //this.dialogRef.close(danhSach);
                //luu dich vu
                let danhSachDichVuGoiDaChon = new Array();
                danhSach.forEach(e => {
                    let item = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_6__["ThemChiDinhDichVu"]();
                    item.LaGoi = true;
                    item.TenNhomDichVu = e.TenNhomDichVu;
                    item.MaDichVuId = e.DichVuId;
                    item.SoLuong = e.SoLuongDungLanNay;
                    item.chuongTrinhGoiDichVuId = e.ChuongTrinhGoiDichVuId;
                    item.YeuCauGoiDichVuId = e.YeuCauGoiDichVuId;
                    item.LoaiGiaId = e.NhomGiaDichVuBenhVienId;
                    //cheat cho lẹ
                    item.DuocHuongBHYT = this.duocHuongBHYT;
                    item.yeuCauTiepNhanId = this.yctnId;
                    item.benhNhanId = this.benhNhanId;
                    danhSachDichVuGoiDaChon.push(item);
                });
                let model = new _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_10__["modelUpdateView"]();
                model.Data = danhSachDichVuGoiDaChon;
                model.YeuCauTiepNhanId = this.yctnId;
                model.BenhNhanid = this.benhNhanId;
                model.MucHuongBHYT = this.mucHuong;
                //this.luuDichVu(model, danhSachDichVuGoiDaChon);
                //BVHD-3804
                this.kiemTraCoDichVuKhongBaoLanh(model, danhSachDichVuGoiDaChon);
            }
        });
    }
    luuDichVu(model, danhSachDichVuGoiDaChon) {
        this.showPopupLoadingData();
        let modelCheck = new _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_10__["CheckDuSoLuongTonTrongGoiListDichVu"]();
        modelCheck.LstDichVuThem = danhSachDichVuGoiDaChon;
        model.ListDichVuCheckTruocDos = [];
        if (this.data.ListDichVuCheckTruocDos != undefined && this.data.ListDichVuCheckTruocDos != null && this.data.ListDichVuCheckTruocDos != "") {
            model.ListDichVuCheckTruocDos = this.data.ListDichVuCheckTruocDos;
        }
        this.apiService.post("TiepNhanBenhNhan/CheckDuSoLuongTonTrongGoiLstDichVu", modelCheck).subscribe(resultData => {
            if (resultData != undefined && resultData != null && resultData) {
                //add goi
                this.apiService.post("TiepNhanBenhNhan/ThemDichVuFromGoiUpdateView", model).subscribe(resultData => {
                    this.closePopupLoadingData();
                    this.dialogRef.close(resultData);
                }, (err) => {
                    this.closePopupLoadingData();
                    if (err != undefined && err.ValidationErrors != null) {
                        this.validationErrors = err.ValidationErrors;
                    }
                    else if (err != undefined && err.Errors == null) {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
            else {
                this.closePopupLoadingData();
                //ex
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["TiepNhanBenhNhanMessage"].MessageErrorDVOnGoi);
            }
        }, (err) => {
            this.closePopupLoadingData();
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                this.notificationService.showError(err.Message);
            }
        });
    }
    close() {
        this.dialogRef.close();
    }
    // update gói marketing
    xemChiTietGoiDichVu(event) {
        if (event.Data.length > 0) {
            console.log('event.Data', event.Data);
            event.Data.forEach(element => {
                //xử lý thêm vào ds hiển thị dịch vụ đang chọn
                var indexGoiDangChon = this.arrGoiDangChon.findIndex(x => x.YeuCauGoiDichVuId == element.Id);
                if (indexGoiDangChon == -1) {
                    this.arrGoiDangChon.push(new _danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_10__["GoiDichVuMarketingDangChonTiepNhan"](element.Id, 0, element.TenDisplay, element.ConLai, element.IsChecked, []));
                }
                else {
                    var goiDangChon = this.arrGoiDangChon.find(x => x.YeuCauGoiDichVuId == element.Id);
                    goiDangChon.TongTienConBaoLanhDuoc = element.ConLai;
                }
            });
        }
    }
    kiemTraGoiDichVuCoChonDichVu(yeuCauGoiDichVuId) {
        let index = this.danhSachDichVuDaChonTrongLanPopup.findIndex(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId);
        return index != -1;
    }
    getArrayDichVuDaChonTheoGoi(yeuCauGoiDichVuId) {
        return this.danhSachDichVuDaChonTrongLanPopup.filter(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId);
    }
    tinhTongTienDichVuDangChon(yeuCauGoiDichVuId) {
        let tongTien = 0;
        this.danhSachDichVuDaChonTrongLanPopup.forEach(element => {
            if (element.YeuCauGoiDichVuId == yeuCauGoiDichVuId) {
                tongTien += element.SoLuongDungLanNay * element.DonGia;
            }
        });
        return tongTien;
    }
    // cập nhật BVHD-3423
    chonTatCaDichVuTrongGoi(event, yeuCauGoiDichVuId) {
        if (event) {
            let name = 'ckbItem-' + yeuCauGoiDichVuId;
            let checkboxes = document.getElementsByName(name);
            checkboxes.forEach(element => {
                if (!element['checked']) {
                    document.getElementById(element['id']).click();
                }
            });
            let nameGroup = 'ckbGroup-' + yeuCauGoiDichVuId;
            let checkboxGroups = document.getElementsByClassName(nameGroup);
            for (let index = 0; index < checkboxGroups.length; index++) {
                var element = document.getElementById(checkboxGroups[index].id);
                if (!element.checked) {
                    element.checked = true;
                }
            }
        }
        else {
            let name = 'ckbItem-' + yeuCauGoiDichVuId;
            let checkboxes = document.getElementsByName(name);
            checkboxes.forEach(element => {
                if (element['checked']) {
                    document.getElementById(element['id']).click();
                }
            });
            let nameGroup = 'ckbGroup-' + yeuCauGoiDichVuId;
            let checkboxGroups = document.getElementsByClassName(nameGroup);
            for (let index = 0; index < checkboxGroups.length; index++) {
                var element = document.getElementById(checkboxGroups[index].id);
                if (element.checked) {
                    element.checked = false;
                }
            }
        }
    }
    chonTatCaDichVuTrongNhom(event, yeuCauGoiDichVuId, tenNhom) {
        let classItemInGroup = 'ckbItemInGroup-' + yeuCauGoiDichVuId + '-' + tenNhom;
        let checkboxItemGroups = document.getElementsByClassName(classItemInGroup);
        for (let index = 0; index < checkboxItemGroups.length; index++) {
            var element = document.getElementById(checkboxItemGroups[index].id);
            if (event.target.checked) {
                if (!element.checked) {
                    document.getElementById(element.id).click();
                }
            }
            else {
                if (element.checked) {
                    document.getElementById(element.id).click();
                }
            }
        }
    }
    //BVHD-3804
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang lưu dữ liệu..." },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    kiemTraCoDichVuKhongBaoLanh(model, danhSach) {
        var self = this;
        let name = 'lbl-khong-du-bao-lanh';
        let lbls = document.getElementsByName(name);
        if (lbls != undefined && lbls.length > 0) {
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Thông báo", Message: "Số tiền tạm ứng gói của người bệnh chưa đủ để thực hiện dịch vụ này", IsDetail: true },
            }).afterClosed().subscribe(result => {
                self.luuDichVu(model, danhSach);
            });
        }
        else {
            self.luuDichVu(model, danhSach);
        }
    }
};
PopupMarketingTnbnUpdateComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenGoiTemplate', { static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "tenGoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDichVuTemplate', { static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "nhomDichVuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienFooterTemplate', { static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "tongTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongCongFooterTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "tongCongFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chietKhauFooterTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "chietKhauFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaGoiFooterTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "giaGoiFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "checkBoxHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], PopupMarketingTnbnUpdateComponent.prototype, "checkBoxTemplate", void 0);
PopupMarketingTnbnUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-marketing-tnbn-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-marketing-tnbn-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-marketing-tnbn-update.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-marketing-tnbn-update/popup-marketing-tnbn-update.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]))
], PopupMarketingTnbnUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-bottom {\n  display: block !important;\n  margin-top: 10px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3BvcHVwLXRoZW0tZ29pL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGllcC1uaGFuLWJlbmgtbmhhblxcZGFuaC1zYWNoLWNoby1raGFtXFxwb3B1cC10aGVtLWdvaVxccG9wdXAtdGhlbS1nb2kuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS9wb3B1cC10aGVtLWdvaS9wb3B1cC10aGVtLWdvaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3BvcHVwLXRoZW0tZ29pL3BvcHVwLXRoZW0tZ29pLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1ib3R0b20ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iLCIuZGl2LWJvdHRvbSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PopupThemGoiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupThemGoiComponent", function() { return PopupThemGoiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");








let PopupThemGoiComponent = class PopupThemGoiComponent {
    constructor(data, apiService, notificationService, dialog, dialogRef) {
        this.data = data;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.gridCoChietKhauColumns = [];
        this.validationErrors = [];
        this.gridKhongCoChietKhauColumns = [];
        this.isGoiCoChietKhau = false;
        //console.log("data[0].IsGoiCoChietKhau = ", data);
    }
    ngOnInit() {
        this.isGoiCoChietKhau = this.data.LstGrid[0].IsGoiCoChietKhau;
        let index = 1;
        this.data.LstGrid.forEach(obj => {
            obj.STT = index;
            index = index + 1;
            obj.DuocHuongBHYTPopup = obj.DuocHuongBHYTPopup;
        });
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].YeuCauTiepNhan;
        this.gridCoChietKhauColumns = [
            { Field: "STT", Title: "STT", Width: 80, Sortable: false },
            { Field: "Ma", Title: "Mã", Width: 150, Sortable: false },
            { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150, Sortable: false },
            { Field: "LoaiGia", Title: "Loại giá", Width: 156, Sortable: false },
            { Field: "NoiThucHienId", Title: "Nơi thực hiện", Width: 156, Sortable: false,
                Template: this.noiThucHienKhongChietKhauTemplate },
        ];
        this.gridKhongCoChietKhauColumns = [
            { Field: "STT", Title: "STT", Width: 80, Sortable: false },
            { Field: "Ma", Title: "Mã", Width: 150, Sortable: false },
            { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150, Sortable: false },
            { Field: "LoaiGia", Title: "Loại giá", Width: 156, Sortable: false },
            { Field: "DuocHuongBHYT", Title: "ĐH BHYT", Width: 156, Sortable: false, Template: this.duocHuongBHYTTemplate },
            { Field: "NoiThucHienId", Title: "Nơi thực hiện", Width: 156, Sortable: false,
                Template: this.noiThucHienKhongChietKhauTemplate },
        ];
        if (this.isGoiCoChietKhau) {
            this.setDataForCoChietKhauGrid();
        }
        else {
            this.setDataForKhongCoChietKhauGrid();
        }
    }
    setDataForCoChietKhauGrid() {
        this.gridCoChietKhauData = {
            data: this.data.LstGrid,
            total: this.data.LstGrid.length
        };
        if (this.gridCoChietKhau != undefined) {
            this.gridCoChietKhau.setDataSource();
        }
    }
    setDataForKhongCoChietKhauGrid() {
        this.gridKhongCoChietKhauData = {
            data: this.data.LstGrid,
            total: this.data.LstGrid.length
        };
        if (this.gridKhongCoChietKhau != undefined) {
            this.gridKhongCoChietKhau.setDataSource();
        }
    }
    ok() {
        //console.log("ok = ", this.data);
        this.validationErrors = null;
        let url = "TiepNhanBenhNhan/ThemGoiKhongChietKhauPopup";
        if (this.isGoiCoChietKhau) {
            url = "TiepNhanBenhNhan/ThemGoiCoChietKhauPopup";
        }
        this.apiService.post(url, this.data).subscribe(resultData => {
            this.dialogRef.close(resultData);
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
        });
    }
    huy() {
        this.dialogRef.close();
        //console.log("huy = ", this.data);
    }
    noiThucHienChange($event, dataItem) {
        //console.log("test = ", $event, dataItem);
        let model = this.data.LstGrid.find(obj => obj == dataItem);
        if ($event != null && $event != undefined && $event.length > 0) {
            //this.themChiDinhDichVuModel.NoiThucHienId = $event[0].KeyId;
            if (model != undefined) {
                model.NoiThucHienId = $event[0].KeyId;
            }
        }
        else {
            if (model != undefined) {
                model.NoiThucHienId = $event[0].KeyId;
            }
            //this.themChiDinhDichVuModel.NoiThucHienId = null;
        }
    }
};
PopupThemGoiComponent.ctorParameters = () => [
    { type: _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_3__["AddGoiForUpdateView"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('goiCoChietKhau', { static: false })
], PopupThemGoiComponent.prototype, "gridCoChietKhau", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('goiKhongCoChietKhau', { static: false })
], PopupThemGoiComponent.prototype, "gridKhongCoChietKhau", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienKhongChietKhauTemplate', { static: true })
], PopupThemGoiComponent.prototype, "noiThucHienKhongChietKhauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocHuongBHYTTemplate', { static: true })
], PopupThemGoiComponent.prototype, "duocHuongBHYTTemplate", void 0);
PopupThemGoiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-them-goi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-them-goi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-them-goi.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/popup-them-goi/popup-them-goi.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PopupThemGoiComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/tai-kham/tai-kham.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/tai-kham/tai-kham.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS90YWkta2hhbS90YWkta2hhbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/tai-kham/tai-kham.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/tai-kham/tai-kham.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TaiKhamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaiKhamComponent", function() { return TaiKhamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");




let TaiKhamComponent = class TaiKhamComponent {
    constructor() {
        this.gridColumns = [];
        this.urlGetDataGrid = "TiepNhanBenhNhan/GetDataForGridAsyncTaiKham";
        this.urlGetTotalPageGrid = "TiepNhanBenhNhan/GetTotalPageForGridAsyncTaiKham";
        this.BenhNhan = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauTiepNhan;
        this.gridColumns = [
            { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150, Sortable: false },
            { Field: "BacSiThucHien", Title: "Bác sĩ thực hiện", Width: 150, Sortable: false },
            { Field: "NgayTaiKhamDisplay", Title: "Ngày tái khám", Width: 150, Sortable: false },
            { Field: "GhiChuTaiKham", Title: "Ghi chú tái khám", Width: 150, Sortable: false },
        ];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
], TaiKhamComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaiKhamComponent.prototype, "BenhNhan", void 0);
TaiKhamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tai-kham',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tai-kham.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/tai-kham/tai-kham.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tai-kham.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/tai-kham/tai-kham.component.scss")).default]
    })
], TaiKhamComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 271px;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3RoZS1iZW5oLW5oYW4tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxkYW5oLXNhY2gtY2hvLWtoYW1cXHRoZS1iZW5oLW5oYW4tcG9wdXBcXHRoZS1iZW5oLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS90aGUtYmVuaC1uaGFuLXBvcHVwL3RoZS1iZW5oLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS90aGUtYmVuaC1uaGFuLXBvcHVwL3RoZS1iZW5oLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjcxcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjcxcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: TheBenhNhanPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheBenhNhanPopupComponent", function() { return TheBenhNhanPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let TheBenhNhanPopupComponent = class TheBenhNhanPopupComponent {
    constructor(data, sanitizer, apiService, dialogRef, dialog) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.src = "";
        this.loading = false;
    }
    ngOnInit() {
        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        }
        else {
            this.hostingName = "https://" + window.location.host;
        }
        this.xemTheBenhNhan();
    }
    xemTheBenhNhan() {
        let yeuCauTiepNhanId = this.data;
        this.apiService.get("DanhSachChoKham/InTheBenhNhan?yeuCauTiepNhanId=" + yeuCauTiepNhanId + "&hostingName=" + this.hostingName).subscribe(resultData => {
            if (resultData != null) {
                var html = resultData;
                this.src = "data:text/html;charset=utf-8," + encodeURIComponent(html);
            }
            else {
                this.src = "";
            }
            this.loading = false;
        }, (err) => {
        });
    }
    getSharedPrintForm() {
        let yeuCauTiepNhanId = this.data;
        return new Promise(resolve => {
            this.apiService.get("DanhSachChoKham/InTheBenhNhan?yeuCauTiepNhanId=" + yeuCauTiepNhanId + "&hostingName=" + this.hostingName).subscribe(resultData => {
                resolve(resultData);
            });
            this.close();
        });
    }
    close() {
        this.dialogRef.close();
    }
};
TheBenhNhanPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
TheBenhNhanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-the-benh-nhan-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./the-benh-nhan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./the-benh-nhan-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/the-benh-nhan-popup/the-benh-nhan-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], TheBenhNhanPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 1080px;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWNoby1raGFtL3ZvbmctZGVvLXRheS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRpZXAtbmhhbi1iZW5oLW5oYW5cXGRhbmgtc2FjaC1jaG8ta2hhbVxcdm9uZy1kZW8tdGF5LXBvcHVwXFx2b25nLWRlby10YXktcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8ta2hhbS92b25nLWRlby10YXktcG9wdXAvdm9uZy1kZW8tdGF5LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9kYW5oLXNhY2gtY2hvLWtoYW0vdm9uZy1kZW8tdGF5LXBvcHVwL3ZvbmctZGVvLXRheS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDgwcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTA4MHB4O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: VongDeoTayPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VongDeoTayPopupComponent", function() { return VongDeoTayPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let VongDeoTayPopupComponent = class VongDeoTayPopupComponent {
    constructor(data, sanitizer, apiService, dialog) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.apiService = apiService;
        this.dialog = dialog;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.src = "";
        this.loading = false;
    }
    ngOnInit() {
        if (window.location.protocol == "http:") {
            this.hostingName = "http://" + window.location.host;
        }
        else {
            this.hostingName = "https://" + window.location.host;
        }
        this.xemVongDeoTay();
    }
    xemVongDeoTay() {
        let yeuCauTiepNhanId = this.data;
        this.apiService.get("DanhSachChoKham/InVongDeoTay?yeuCauTiepNhanId=" + yeuCauTiepNhanId + "&hostingName=" + this.hostingName).subscribe(resultData => {
            if (resultData != null) {
                var html = resultData;
                this.src = "data:text/html;charset=utf-8," + encodeURIComponent(html);
            }
            else {
                this.src = "";
            }
            this.loading = false;
        }, (err) => {
        });
    }
    getSharedPrintForm() {
        let yeuCauTiepNhanId = this.data;
        return new Promise(resolve => {
            this.apiService.get("DanhSachChoKham/InVongDeoTay?yeuCauTiepNhanId=" + yeuCauTiepNhanId + "&hostingName=" + this.hostingName).subscribe(resultData => {
                resolve(resultData);
            });
            this.close();
        });
    }
    close() {
        this.dialog.closeAll();
    }
};
VongDeoTayPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
VongDeoTayPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vong-deo-tay-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vong-deo-tay-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vong-deo-tay-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/vong-deo-tay-popup/vong-deo-tay-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], VongDeoTayPopupComponent);



/***/ })

}]);
//# sourceMappingURL=tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach-cho-kham-module-es2015.js.map