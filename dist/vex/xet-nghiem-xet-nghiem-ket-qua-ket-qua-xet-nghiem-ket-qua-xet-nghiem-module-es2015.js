(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xet-nghiem-xet-nghiem-ket-qua-ket-qua-xet-nghiem-ket-qua-xet-nghiem-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-done.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-done.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Kết quả xét nghiệm ({{arrFileUrl.length}} file)</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n    <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n  </button>\n</div>\n<mat-dialog-content style=\"height: 550px;\">\n    <div class=\"container-iframe\">\n        <ng-container [ngSwitch]=\"arrFileUrl.length > 0\">\n            <div *ngSwitchCase=\"true\">\n                <ng-container *ngFor=\"let item of arrFileUrl\">\n                    <iframe width=\"100%\" height=\"550px\" frameborder=\"0\" [src]=\"item | safe\" type=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n                </ng-container>\n            </div>\n            <div *ngSwitchDefault>Không có dữ liệu</div>\n        </ng-container>\n\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n      class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải tất cả</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>ket-qua-xet-nghiem-detail works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Xét nghiệm',Path:''},\n                {Title:'Kết Quả Xét Nghiệm',Path:'/xet-nghiem/ket-qua', Active: true}]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent [documentType]=\"documentType\" [sort]=\"sort\" [showStt]=\"true\"\n                [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\"\n                [checkboxAble]=\"false\" [gridColumns]=\"gridDanhSachXetNghiemColumns\" [urlGetData]=\"urlGetDataParent\"\n                [additionalSearchString]=\"addtionStringDefault\" [urlGetTotalPage]=\"urlGetTotalPageParent\"\n                [detailTemplate]=\"gridChild2Template\" [headerTemplate]=\"headerTemplate\" [lazyLoadPage]=\"true\">\n            </app-grid>\n\n            <ng-template #gridChild2Template let-dataItem>\n                <app-grid #gridNhomXetNghiem pageSize=\"5\" additionalSearchString={{dataItem.Id}}\n                    [documentType]=\"documentType\" [autoHeight]=\"true\" [sort]=\"sortChild\" [showStt]=\"true\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                    [gridColumns]=\"gridDanhSachXetNghiemChild2Columns\" [urlGetData]=\"urlGetDataChild2\"\n                    [urlGetTotalPage]=\"urlGetTotalPageChild2\" [groups]=\"groupNhomXetNghiem\" [lazyLoadPage]=\"true\">\n                </app-grid>\n            </ng-template>\n\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox (modelChange)=\"checkboxChange($event, true, false, false)\" id=\"ChoKetQua\"\n                        [(model)]=\"ketQuaXetNghiemSearch.ChoKetQua\" class=\"ml-2\" label=\"Chờ KQ\">\n                    </app-checkbox>\n\n                    <app-checkbox (modelChange)=\"checkboxChange($event, false, true, false)\" id=\"ChoDuyetKetQua\"\n                        [(model)]=\"ketQuaXetNghiemSearch.ChoDuyetKetQua\" class=\"ml-2\" label=\"Chờ duyệt KQ\">\n                    </app-checkbox>\n\n                    <app-checkbox (modelChange)=\"checkboxChange($event, false, false, true)\" id=\"DaCoKetQua\"\n                        [(model)]=\"ketQuaXetNghiemSearch.DaCoKetQua\" class=\"ml-2\" label=\"Đã có KQ\">\n                    </app-checkbox>\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"ketQuaXetNghiemSearch.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch()\"\n                            placeholder=\"Tìm kiếm theo Mã NB, Mã TN, Họ tên NB, Barcode\" />\n                        <button color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip\n                            title=\"Phím tắt: Ctrl + Q\" (click)=\"QuetMaQRCodeClick()\">\n                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                        </button>\n                    </div>\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat\"\n                        #tiepnhantu id=\"ThoiDiemTiepNhanTuFormat\" (modelChange)=\"Timkiem()\" label=\"Từ ngày\"\n                        class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat\"\n                        #tiepnhanden id=\"ThoiDiemTiepNhanDenFormat\" (modelChange)=\"Timkiem()\" label=\"Đến ngày\"\n                        class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridDanhSachXetNghiemColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                        title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\">\n</app-barcode>\n\n<ng-template #ngayNhanMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NgayNhanMauDisplay}}\n</ng-template>\n\n<ng-template #actionDanhSachXetNghiemTemplate let-dataItem>\n    <button *ngIf=\"dataItem.TrangThai == DaCoKQ && dataItem.IsDaDuyetAll == true\" kendoTooltip title=\"Hành động\"\n        [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n            <button (click)=\"print(dataItem.Id,dataItem.YeuCauTiepNhanId)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                <span>In Kết Quả</span>\n            </button>\n            <!-- <button (click)=\"download(dataItem.Id)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icDownload\"></mat-icon>\n                <span>Xuất File Kết Quả</span>\n            </button> -->\n        </ng-template>\n    </mat-menu>\n</ng-template>\n\n<ng-template #ngayThucHienTemplate let-dataItem>\n    {{dataItem.NgayThucHienDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetKQTemplate let-dataItem>\n    {{dataItem.NgayDuyetKQDisplay}}\n</ng-template>\n\n<ng-template #barcodeTemplate let-dataItem>\n    <a (click)=\"barcodeClick(dataItem)\">\n        {{dataItem.BarCode}}\n    </a>\n</ng-template>\n\n<ng-template #trangThaiTemplate let-dataItem>\n    <span\n        [ngStyle]=\"{'color': (dataItem.TrangThai == 1 ? 'red' : (dataItem.TrangThai == 2 ? 'orange' : (dataItem.TrangThai == 3 ? 'blue' : 'green') ) )}\">\n        {{dataItem.TrangThaiDisplay}}\n    </span>\n</ng-template>\n\n<ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <strong style=\"width: 100%;\">\n        {{value}}\n        <ul class='inline small ml-20'>\n            <li *ngFor=\"let item of dataItem.items[0].DanhSachLoaiMauTongCong\">\n                <span *ngIf=\"checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMau)\">\n                    <span *ngIf=\"!isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                        <span class='green'>&#10003;</span> {{item}}\n                    </span>\n                    <span *ngIf=\"isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                        <span class='red'>&times; </span> {{item}}\n                    </span>\n                </span>\n\n                <span *ngIf=\"!checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMau)\">\n                    {{item}}\n                </span>\n\n            </li>\n        </ul>\n\n        <a class='float-right' *ngIf=\"dataItem.items[0].YeuCauChayLai == true \n            && dataItem.items[0].DaDuyet == true\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"top\"\n            [tooltipTemplate]=\"templateInfo\" filter=\"*\" (mouseover)=\"setUpDataTooltip(dataItem)\" kendoTooltip>Yêu cầu\n            chạy lại XN</a>\n\n        <ng-template #templateInfo let-dataItem>\n            <div>\n                <span>Người yêu cầu: </span><span>{{displayToolTipGridNguoiYeuCau}}</span>\n            </div>\n            <div>\n                <span>Ngày yêu cầu: </span><span>{{displayToolTipGridNgayYeuCau}}</span>\n            </div>\n            <div>\n                <span>Lý do yêu cầu: </span><span>{{displayToolTipGridLyDoYeuCau}}</span>\n            </div>\n            <div>\n                <span>Người duyệt: </span><span>{{displayToolTipGridNguoiDuyet}}</span>\n            </div>\n            <div>\n                <span>Ngày duyệt: </span><span>{{displayToolTipGridNgayDuyet}}</span>\n            </div>\n        </ng-template>\n    </strong>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <span>Còn các chỉ số chưa có kết quả: </span>\n    <ul style=\"max-height: 100px; height: 100px; overflow: auto;\">\n        <li *ngFor=\"let item of lstData\">\n            <span>&nbsp;&nbsp; + {{item.Ten}}<strong></strong></span>\n        </li>\n    </ul>\n\n    <div style=\"margin-top: 20px\">\n        <span>Bạn có chắc chắn muốn gởi duyệt kết quả mẫu này không?</span>\n    </div>\n\n    <div class=\"div-title-bottom\">\n        <button type=\"button\" mat-button class=\"mr-1\" (click)=\"Khong()\">Không</button>\n        <button type=\"button\" (click)=\"Co()\" color=\"primary\" mat-raised-button>Có</button>\n    </div>\n    \n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-1\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <fieldset style=\"background: #e1f5fe;\">\n        <legend>Thông tin hành chính</legend>\n        <div fxFlex=\"100%\">\n            <ul class=\"inline\">\n                <li>Barcode:\n                    <strong>{{ketQuaXetNghiem.BarCodeID}}</strong>\n                </li>\n                <li>Mã BHYT:\n                    <strong>{{ketQuaXetNghiem.MaSoBHYT}}</strong>\n                </li>\n                <li>Mã NB:\n                    <strong>{{ketQuaXetNghiem.MaBN}}</strong>\n                </li>\n                <li>Mã TN:\n                    <strong>{{ketQuaXetNghiem.MaYeuCauTiepNhan}}</strong>\n                </li>\n                <li>Họ tên:\n                    <strong>{{ketQuaXetNghiem.HoTen}}</strong>\n                </li>\n                <li>Tuổi:\n                    <strong>{{ketQuaXetNghiem.Tuoi}}</strong>\n                    <!-- <strong *ngIf=\"!isDuoi6Tuoi\">{{benhNhanHienTai.YeuCauTiepNhan.Tuoi}}</strong>\n                    <strong *ngIf=\"isDuoi6Tuoi\">{{Duoi6TuoiDisplay}}</strong> -->\n                </li>\n                <li>\n                    Giới tính:\n                    <strong>{{ketQuaXetNghiem.GioiTinhDisplay}}</strong>\n                </li>\n                <li>\n                    Tuyến: <strong style=\"color: green;\">{{ketQuaXetNghiem.Tuyen}}</strong>\n                </li>\n                <li>\n                    Mức hưởng: <strong *ngIf=\"ketQuaXetNghiem.BHYTMucHuong != null\"\n                        style=\"color: blue;\">{{ketQuaXetNghiem.BHYTMucHuong}}%</strong>\n                </li>\n                <li>Dân tộc:\n                    <strong>{{ketQuaXetNghiem.DanToc}}</strong>\n                </li>\n                <li>\n                    Địa chỉ:\n                    <strong>{{ketQuaXetNghiem.DiaChi}}</strong>\n                </li>\n                <li>\n                    Nghề nghiệp:\n                    <strong>{{ketQuaXetNghiem.NgheNghiep}}</strong>\n                </li>\n\n                <li>\n                    Chẩn đoán: <strong>{{ketQuaXetNghiem.ChanDoan}}</strong>\n                </li>\n                <li>\n                    Khoa chỉ định: <strong>{{ketQuaXetNghiem.KhoaChiDinh}}</strong>\n                </li>\n                <li>\n                    Phòng: <strong>{{ketQuaXetNghiem.Phong}}</strong>\n                </li>\n                <li *ngIf=\"ketQuaXetNghiem.TenCongTy != null\">\n                    Tên công ty: <strong>{{ketQuaXetNghiem.TenCongTy}}</strong>\n                </li>\n            </ul>\n        </div>\n    </fieldset>\n\n</div>\n\n\n<div class=\"content-2\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <fieldset class=\"mt-2\">\n        <legend>Chi Tiết Kết Quả Xét Nghiệm</legend>\n\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n            <div *ngIf=\"gridDataSource != undefined\" fxFlex=\"100%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-grid fxFlex=\"100%\" [sort]=\"sort\" #gridParent [documentType]=\"documentType\"\n                    [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\"\n                    [checkboxAble]=\"false\" [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\"\n                    [groups]=\"groups\" [pageable]=\"false\" [headerTemplate]=\"headerTemplate\" [autoHeight]=\"true\">\n                </app-grid>\n\n                <ng-template #headerTemplate>\n                    <div class=\"div-header bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n                        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                            fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <!-- [(ngModel)]=\"searchString\" -->\n                            <input [formControl]=\"searchCtrl\"\n                                class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" (ngModelChange)=\"searchChanges($event)\"\n                                (keyup)=\"onKeySearchChanges($event)\" placeholder=\"Nhập từ khóa tìm kiếm\" />\n                        </div>\n                        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                        </button>\n\n                        <div fxFlex=\"50%\" class=\"order-color\">\n                            <div class=\"set-color black\"></div>\n                            <p>Bình thường</p>\n                            <div class=\"set-color blue\"></div>\n                            <p>Bất thường</p>\n                            <div class=\"set-color red\"></div>\n                            <p>Nguy hiểm</p>\n                        </div>\n                    </div>\n                </ng-template>\n\n            </div>\n\n            <div fxFlex=\"100%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                fxLayoutGap.lt-sm=\"0\">\n                <app-combobox fxFlex=\"30%\" fxFlex.sm=\"50%\" id=\"NhanVienThucHienId\" label=\"Người thực hiện\"\n                    url=\"NhanVien/GetListLookupNhanVien\" [(model)]=\"ketQuaXetNghiem.NhanVienThucHienId\" bind=\"true\"\n                    [disabled]=\"type == 4\" required=\"true\"\n                    [validationerror]=\"'NhanVienThucHienId' | validationerror:validationErrors\">\n                </app-combobox>\n\n                <!-- <app-textbox id=\"ChanDoanDuoi\" fxFlex=\"70%\" fxFlex.sm=\"70%\" label=\"Chẩn đoán\" [disabled]=\"type == 4\"\n                    [(model)]=\"ketQuaXetNghiem.ChanDoanDuoi\" maxlength=\"200\">\n                </app-textbox> -->\n                <app-textbox id=\"GhiChu\" fxFlex=\"70%\" fxFlex.sm=\"50%\" label=\"Ghi chú\" [(model)]=\"ketQuaXetNghiem.GhiChu\"\n                    [disabled]=\"type == 4\" maxlength=\"1000\">\n                </app-textbox>\n            </div>\n\n        </div>\n\n    </fieldset>\n\n    <ng-template #tenTemplate let-dataItem>\n        <span\n            [ngStyle]=\"{'padding-left':(dataItem.Level)*20+'px','font-weight':dataItem.IdChilds.length>0?'bold':'normal'}\">{{dataItem.Ten}}</span>\n    </ng-template>\n    <ng-template #nhomTemplate let-value=\"value\" let-dataItem let-index=\"rowIndex\" let-aggregates>\n        <p style=\"width: 100%;\" kendoTooltip>\n            <strong style=\"width: 100%;\">\n                <!-- <input type=\"checkbox\" id=\"selectCheckboxId{{value}}\" (ngModelChange)=\"checkBoxNhomChange($event,dataItem, aggregates)\"\n                    name=\"selectCheckboxId{{value}}\" [(ngModel)]=\"dataItem\">\n                <label for=\"nhom{{value}}\"> {{value}}</label> -->\n                <!-- <app-checkbox id=\"check_{{dataItem.items[0].NhomDichVuBenhVienId}}\" label=\"{{value}}\" fxFlex=\"10%\"\n                    [disabled]=\"dataItem.items[0].DisabledCheckBoxParent\" (modelChange)=\"checkBoxNhomChange($event,dataItem)\"\n                    [(model)]=\"dataItem.items[0].CheckBoxParent\">\n                </app-checkbox> -->\n                {{value}}\n                <ul class='inline small ml-20'>\n                    <li *ngFor=\"let item of dataItem.items[0].DanhSachLoaiMau\">\n                        <span *ngIf=\"checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                            <!-- <span class='green'>&#10003;</span> {{item}} -->\n                            <span *ngIf=\"!isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                                <span class='green'>&#10003;</span> {{item}}\n                            </span>\n                            <span *ngIf=\"isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                                <span class='red'>&times; </span> {{item}}\n                            </span>\n                        </span>\n\n                        <span *ngIf=\"!checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                            <span class='red'></span> {{item}}\n                        </span>\n                    </li>\n                </ul>\n\n                <a class='float-right' *ngIf=\"dataItem.items[0].YeuCauChayLai == true\n                    && dataItem.items[0].DaDuyet == true\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n                    position=\"top\" [tooltipTemplate]=\"templateInfo\" filter=\"*\" (mouseover)=\"setUpDataTooltip(dataItem)\"\n                    kendoTooltip>Yêu cầu chạy lại XN</a>\n\n                <ng-template #templateInfo let-dataItem>\n                    <div>\n                        <span>Người yêu cầu: </span><span>{{displayToolTipGridNguoiYeuCau}}</span>\n                    </div>\n                    <div>\n                        <span>Ngày yêu cầu: </span><span>{{displayToolTipGridNgayYeuCau}}</span>\n                    </div>\n                    <div>\n                        <span>Lý do yêu cầu: </span><span>{{displayToolTipGridLyDoYeuCau}}</span>\n                    </div>\n                    <div>\n                        <span>Người duyệt: </span><span>{{displayToolTipGridNguoiDuyet}}</span>\n                    </div>\n                    <div>\n                        <span>Ngày duyệt: </span><span>{{displayToolTipGridNgayDuyet}}</span>\n                    </div>\n                </ng-template>\n            </strong>\n        </p>\n\n\n    </ng-template>\n    <ng-template #kqCuTemplate let-dataItem>\n        <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n            [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red'),'font-weight':dataItem.ToDamGiaTri?'bold':'normal'}\">{{dataItem.GiaTriCu}}</span>\n    </ng-template>\n    <ng-template #kqTuMayTemplate let-dataItem>\n        <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n            [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red'),'font-weight':(dataItem.ToDamGiaTri?'bold':'normal')}\">{{dataItem.GiaTriTuMay}}</span>\n    </ng-template>\n    <ng-template #kqDuyetTemplate let-dataItem>\n        <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n            [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red'),'font-weight':dataItem.ToDamGiaTri?'bold':'normal'}\">{{dataItem.GiaTriDuyet}}</span>\n    </ng-template>\n    <ng-template #kqNhapTayTemplate let-dataItem>\n        <app-textbox *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n            [disabled]=\"dataItem.DaDuyetChiTiet || type == 4 || dataItem.DaDuyet == true\" class=\"no-label\"\n            id=\"GiaTriNhapTayA{{dataItem.Id}}\" label=\" \" (modelChange)=\"CheckHighlight(dataItem, $event)\"\n            maxlength=\"500\" [(model)]=\"dataItem.GiaTriNhapTay\"></app-textbox>\n    </ng-template>\n    <ng-template #damKQTemplate let-dataItem>\n        <app-checkbox *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n            [disabled]=\"dataItem.DaDuyetChiTiet || type == 4 || dataItem.DaDuyet == true\" id=\"damKetQua{{dataItem.Id}}\"\n            label=\" \" [(model)]=\"dataItem.ToDamGiaTri\" class=\"pl-2\"></app-checkbox>\n    </ng-template>\n    <ng-template #chiSoBinhThuongTemplate let-dataItem>\n        <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.CSBT}}</span>\n    </ng-template>\n    <ng-template #donViTinhTemplate let-dataItem>\n        <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.DonVi}}</span>\n    </ng-template>\n    <ng-template #gioTiepNhanTemplate let-dataItem>\n        <span\n            *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemGuiYeuCauDisplay}}</span>\n    </ng-template>\n    <ng-template #gioNhanMauTemplate let-dataItem>\n        <span\n            *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemNhanKetQuaDisplay}}</span>\n    </ng-template>\n    <ng-template #mayXNTemplate let-dataItem>\n        <app-combobox [disabled]=\"dataItem.DaDuyetChiTiet || type == 4 || dataItem.DaDuyet == true\" id=\"MayXetNghiemId\"\n            popupSettings=\"\" label=\" \" (modelChange)=\"mayXNChange($event, dataItem.Level, dataItem.DichVuXetNghiemId)\"\n            class=\"no-label\" url=\"KetQuaXetNghiem/GetListLookupMayXetNghiem\" [(model)]=\"dataItem.MayXetNghiemId\"\n            bind=\"true\">\n        </app-combobox>\n    </ng-template>\n    <ng-template #nguoiDuyetTemplate let-dataItem>\n        <span\n            *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.NguoiDuyet}}</span>\n    </ng-template>\n    <ng-template #ngayDuyetTemplate let-dataItem>\n        <span\n            *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemDuyetKetQuaDisplay}}</span>\n    </ng-template>\n\n\n    <ng-template #checkBoxTemplate let-dataItem>\n        <input *ngIf=\"dataItem.Level==1\" [disabled]=\"dataItem.DaGoiDuyet == true\" type=\"checkbox\" id=\"vehicle1\"\n            [(ngModel)]=\"dataItem.CheckBox\" (ngModelChange)=\"checkBoxChange($event,dataItem)\" name=\"vehicle1\">\n    </ng-template>\n    <ng-template #checkBoxHeaderTemplate let-dataItem>\n        <input type=\"checkbox\" id=\"vehicle1\" (ngModelChange)=\"checkBoxAllChange($event)\" name=\"vehicle1\"\n            [(ngModel)]=\"checkAll\">\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Xét Nghiệm',Path:''}\n        ,{Title:'Kết Quả Xét Nghiệm',Path:'/xet-nghiem/ket-qua', queryParams: {holdQuery : true}, Active: true}\n        \n            ]\" [isicMoreVert]=\"false\">\n        </app-header-form>\n\n    <!-- <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n        <div class=\"p-gutter\" vexContainer>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <h2 style=\"margin-right: 15px !important; width: 40%;\" class=\"title m-0\">Chi Tiết Kết Quả Xét Nghiệm</h2>\n                        \n                        <span style=\"text-align: right; width: 60%;\" [ngStyle]=\"{'color': (titleString == ChoKQChayLai ? 'red' : (titleString == ChoKQ ? 'orange' : (titleString == ChoDuyetKQ ? 'blue' : 'green') ) )}\">\n                            {{titleString}}\n                        </span>\n                        <!-- (modelChange)=\"lyDoVaoVienChange($event)\" -->\n                        <!-- <app-radio id=\"IsXuatKhac\" class=\"no-label\" [(model)]=\"IsXuatKhac\"\n                             [items]=\"[{Value:false,Text:'Xuất qua kho khác'},{Value:true,Text:'Xuất khác'}]\">\n                        </app-radio> -->\n                    \n                    </div>\n\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                        <app-ket-qua-xet-nghiem-shared (trangThaiIn)=\"getTrangThaiIn($event)\">\n                        </app-ket-qua-xet-nghiem-shared>\n\n                        <div style=\"padding-top: 30px; width: 100%; display: flex;\">\n                            <div style=\"width: 50%;\">\n                                <button type=\"button\" (click)=\"quayLai()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Quay\n                                    lại</button>\n                            </div>\n                            <div style=\"width: 50%;\" class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                                <button *ngIf=\"!loading && (type == 1 || type == 2)\" type=\"button\" (click)=\"GoiDuyet()\" color=\"primary\" mat-raised-button>\n                                    Gởi duyệt\n                                </button>\n\n                                <button *ngIf=\"!loading && type != 4\" type=\"button\" (click)=\"luu()\" color=\"primary\" mat-raised-button>\n                                    <i class=\"ft-save\"></i> Lưu\n                                </button>\n\n                                <!-- <button *ngIf=\"type == 4\" type=\"button\" (click)=\"xuatFileKetQua()\" mat-button class=\"mr-1\">\n                                    Xuất file kết quả\n                                </button> -->\n                                \n                                <button *ngIf=\"type == 4 || trangThaiIn == true\" type=\"button\" (click)=\"inKetQua()\" mat-button class=\"mr-1\">\n                                     In kết quả\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n}\n\n.container-iframe iframe {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhL2tldC1xdWEteGV0LW5naGllbS9rZXQtcXVhLXBoaWV1LXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxceGV0LW5naGllbS1rZXQtcXVhXFxrZXQtcXVhLXhldC1uZ2hpZW1cXGtldC1xdWEtcGhpZXUtcG9wdXBcXGtldC1xdWEtcGhpZXUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS9rZXQtcXVhLXhldC1uZ2hpZW0va2V0LXF1YS1waGlldS1wb3B1cC9rZXQtcXVhLXBoaWV1LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS9rZXQtcXVhLXhldC1uZ2hpZW0va2V0LXF1YS1waGlldS1wb3B1cC9rZXQtcXVhLXBoaWV1LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: KetQuaPhieuPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaPhieuPopupComponent", function() { return KetQuaPhieuPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");








let KetQuaPhieuPopupComponent = class KetQuaPhieuPopupComponent {
    constructor(data, apiService, dialog, notificationService) {
        this.data = data;
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.arrFilePdf = [];
        this.arrFileUrl = [];
    }
    ngOnInit() {
        this.getALlFilePDFFromHtml(this.data);
    }
    getALlFilePDFFromHtml(arrHtml) {
        this.showPopupLoadingData();
        arrHtml.forEach(html => {
            const obj = {
                Html: html,
                TenFile: 'KetQuaXetNghiem'
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
            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(file, 'application/pdf', 'KetQuaXetNghiem' + dateTimeNow.getFullYear() + '.pdf');
        });
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
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
KetQuaPhieuPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
KetQuaPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-ket-qua-phieu-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-phieu-popup.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], KetQuaPhieuPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS9rZXQtcXVhLXhldC1uZ2hpZW0va2V0LXF1YS14ZXQtbmdoaWVtLWRldGFpbC9rZXQtcXVhLXhldC1uZ2hpZW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemDetailComponent", function() { return KetQuaXetNghiemDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KetQuaXetNghiemDetailComponent = class KetQuaXetNghiemDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
KetQuaXetNghiemDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-detail.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.scss")).default]
    })
], KetQuaXetNghiemDetailComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS9rZXQtcXVhLXhldC1uZ2hpZW0va2V0LXF1YS14ZXQtbmdoaWVtLWxpc3Qva2V0LXF1YS14ZXQtbmdoaWVtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemListComponent", function() { return KetQuaXetNghiemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_file_download__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/file-download */ "./node_modules/@iconify/icons-ic/file-download.js");
/* harmony import */ var _iconify_icons_ic_file_download__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_file_download__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ket_qua_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ket-qua-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/constants/xet-nghiem-constant */ "./src/app/shared/constants/xet-nghiem-constant.ts");
/* harmony import */ var _ket_qua_phieu_popup_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../ket-qua-phieu-popup/ket-qua-phieu-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component.ts");




























let KetQuaXetNghiemListComponent = class KetQuaXetNghiemListComponent {
    constructor(dialog, router, route, authService, notificationService, location, renderer, apiService) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.notificationService = notificationService;
        this.location = location;
        this.renderer = renderer;
        this.apiService = apiService;
        this.baseRoute = "/xet-nghiem/ket-qua";
        this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icDownload = _iconify_icons_ic_file_download__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.isScan = false;
        this.gridDanhSachXetNghiemColumns = [];
        this.gridDanhSachXetNghiemChild1Columns = [];
        this.gridDanhSachXetNghiemChild2Columns = [];
        this.urlGetDataParent = "KetQuaXetNghiem/GetDataForGridAsync";
        this.urlGetDataChild1 = "";
        this.urlGetDataChild2 = "KetQuaXetNghiem/GetDataForGridChildAsync";
        this.urlGetTotalPageParent = "KetQuaXetNghiem/GetTotalPageForGridAsync";
        this.urlGetTotalPageChild1 = "";
        this.urlGetTotalPageChild2 = "KetQuaXetNghiem/GetTotalPageForGridChildAsync";
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KetQuaXetNghiem;
        this.ketQuaXetNghiemSearch = new _ket_qua_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_19__["KetQuaXetNghiemSearch"]();
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"];
        this.addtionStringDefault = null;
        this.query = null;
        this.additionalSearchString = null;
        this.displayToolTipGridNguoiYeuCau = null;
        this.displayToolTipGridNgayYeuCau = null;
        this.displayToolTipGridLyDoYeuCau = null;
        this.displayToolTipGridNguoiDuyet = null;
        this.displayToolTipGridNgayDuyet = null;
        this.inPhieuDuyetKetQua = new _ket_qua_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_19__["PhieuDuyetKetQua"]();
        this.groupNhomXetNghiem = [{ field: "TenNhomDichVuBenhVien" }];
        this.sort = [
            {
                field: "TrangThai",
                dir: "asc",
            },
        ];
        this.sortChild = [
            {
                field: "MaDichVu",
                dir: "asc",
            },
        ];
        this.ChoKQChayLai = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_24__["TrangThaiKetQuaXetNghiemConst"].ChoKQChayLai;
        this.ChoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_24__["TrangThaiKetQuaXetNghiemConst"].ChoKQ;
        this.ChoDuyetKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_24__["TrangThaiKetQuaXetNghiemConst"].ChoDuyetKQ;
        this.DaCoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_24__["TrangThaiKetQuaXetNghiemConst"].DaCoKQ;
    }
    ngOnInit() {
        this.ketQuaXetNghiemSearch = new _ket_qua_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_19__["KetQuaXetNghiemSearch"]();
        let dateNow = new Date();
        this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != null) {
            this.ketQuaXetNghiemSearch.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].formatDateTime(this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.ketQuaXetNghiemSearch.FromDate = null;
        }
        if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.ketQuaXetNghiemSearch.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].formatDateTime(this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.ketQuaXetNghiemSearch.ToDate = null;
        }
        var queryString = JSON.stringify(this.ketQuaXetNghiemSearch);
        this.addtionStringDefault = queryString;
        this.backWithSearch();
        this.gridDanhSachXetNghiemColumns = [
            { Field: "BarCode", Title: "Barcode", Width: 150, Sortable: true, Template: this.barcodeTemplate },
            { Field: "MaTN", Title: "Mã TN", Width: 150, Sortable: true },
            { Field: "MaBN", Title: "Mã NB", Width: 150, Sortable: true },
            { Field: "HoTen", Title: "Họ Tên", Width: 150, Sortable: true },
            { Field: "GioiTinh", Title: "Giới Tính", Width: 100, Sortable: true },
            { Field: "NamSinh", Title: "Năm Sinh", Width: 100, Sortable: true },
            { Field: "DiaChi", Title: "Địa Chỉ", Width: 100, Sortable: true },
            { Field: "TrangThai", Title: "Trạng Thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate },
            { Field: "NguoiThucHien", Title: "Người thực hiện", Width: 150, Sortable: true },
            { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 130, Sortable: true, Template: this.ngayThucHienTemplate },
            { Field: "NguoiDuyetKQ", Title: "Người Duyệt KQ", Width: 150, Sortable: true },
            { Field: "NgayDuyetKQ", Title: "Ngày Duyệt KQ", Width: 130, Sortable: true, Template: this.ngayDuyetKQTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionDanhSachXetNghiemTemplate }
        ];
        this.gridDanhSachXetNghiemChild2Columns = [
            { Field: "TenNhomDichVuBenhVien", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "MaDichVu", Title: "Mã DV", Width: 100, Sortable: false },
            { Field: "TenDichVu", Title: "Tên DV", Width: 400, Sortable: false },
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời Gian Chỉ Định", Width: 200, Sortable: false },
            { Field: "NguoiChiDinh", Title: "Người Chỉ Định", Width: 150, Sortable: false },
            { Field: "BenhPham", Title: "Bệnh Phẩm", Width: 150, Sortable: false },
            { Field: "LoaiMau", Title: "Loại Mẫu", Width: 150, Sortable: false }
        ];
    }
    keyEvent(event) {
        if (event.keyCode == 81 && event.ctrlKey && this.isScan != true) {
            this.isScan = true;
            event.preventDefault();
            this.QuetMaQRCodeClick();
        }
    }
    barcodeClick(dataItem) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Update)) {
            if (dataItem.TrangThai == 2) {
                this.router.navigate(["/xet-nghiem/ket-qua" + "/cap-nhat/" + dataItem.Id + "/1/" + dataItem.YeuCauTiepNhanId]);
            }
            else if (dataItem.TrangThai == 1) {
                this.router.navigate(["/xet-nghiem/ket-qua" + "/cap-nhat/" + dataItem.Id + "/2/" + dataItem.YeuCauTiepNhanId]);
            }
            else if (dataItem.TrangThai == 3) {
                this.router.navigate(["/xet-nghiem/ket-qua" + "/cap-nhat/" + dataItem.Id + "/3/" + dataItem.YeuCauTiepNhanId]);
            }
            else if (dataItem.TrangThai == 4) {
                this.router.navigate(["/xet-nghiem/ket-qua" + "/cap-nhat/" + dataItem.Id + "/4/" + dataItem.YeuCauTiepNhanId]);
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    checkboxChange($event, choKetQua = false, choDuyetKetQua = false, daCoKetQua = false) {
        this.router.navigateByUrl("/xet-nghiem/ket-qua?holdQuery=true");
        if (choKetQua) {
            this.ketQuaXetNghiemSearch.ChoKetQua = $event;
        }
        else if (choDuyetKetQua) {
            this.ketQuaXetNghiemSearch.ChoDuyetKetQua = $event;
        }
        else if (daCoKetQua) {
            this.ketQuaXetNghiemSearch.DaCoKetQua = $event;
        }
        this.Timkiem();
    }
    clearSearch() {
        if (this.ketQuaXetNghiemSearch.SearchString == "" || this.ketQuaXetNghiemSearch.SearchString == null) {
            this.Timkiem();
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.Timkiem();
        }
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].getItem("additionalSearchStringKetQuaXetNghiem");
                if (additionalSearchString != null) {
                    this.ketQuaXetNghiemSearch = JSON.parse(additionalSearchString);
                    if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != undefined && this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != null && this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != "") {
                        this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat = new Date(this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat);
                    }
                    else {
                        this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat = null;
                    }
                    if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != undefined && this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != null && this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != "") {
                        this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat = new Date(this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat);
                    }
                    else {
                        this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat = null;
                    }
                    this.addtionStringDefault = additionalSearchString;
                    this.gridParent.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].removeItem("additionalSearchStringKetQuaXetNghiem");
        }
    }
    Timkiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != null) {
            this.ketQuaXetNghiemSearch.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].formatDateTime(this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.ketQuaXetNghiemSearch.FromDate = null;
        }
        if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.ketQuaXetNghiemSearch.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].formatDateTime(this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.ketQuaXetNghiemSearch.ToDate = null;
        }
        var queryString = JSON.stringify(this.ketQuaXetNghiemSearch);
        this.gridParent._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].setItem("additionalSearchStringKetQuaXetNghiem", queryString);
        this.gridParent.search();
    }
    exportExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Process)) {
            this.dialog.open(_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel('KetQuaXetNghiem/ExportKetQuaXetNghiem', this.gridParent._gridQueryInfo).subscribe(resultData => {
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'KetQuaXetNghiem' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, (err) => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    QuetMaQRCodeClick() {
        let elementBarcode = document.getElementById("barcodeActive");
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }
    changeQR(evt) {
        if (evt != null && typeof evt == "string" && evt.endsWith("@")) {
            // this.modelQRCode = event;
            var dataTimKiem = evt.split("|");
            if (dataTimKiem.length > 1) {
                this.ketQuaXetNghiemSearch.SearchString = dataTimKiem[0];
            }
            else {
                this.ketQuaXetNghiemSearch.SearchString = evt.slice(0, -1);
            }
            this.Timkiem();
        }
        else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScan = false;
    }
    setUpDataTooltip(dataItem) {
        //console.log("setUpDataTooltip = ", dataItem);
        this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
        this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
        this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
        this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyet;
        this.displayToolTipGridNgayDuyet = dataItem.items[0].NgayDuyetDisplay;
    }
    checkHiddenIcon(item, danhSachLoaiMau) {
        // console.log("checkHiddenIcon = ", item, danhSachLoaiMau);
        // return true;
        for (let i = 0; i < danhSachLoaiMau.length; i++) {
            if (item == danhSachLoaiMau[i]) {
                return true;
            }
        }
        return false;
    }
    isMauKhongDat(mau, danhSachMauKhongDat) {
        for (let i = 0; i < danhSachMauKhongDat.length; i++) {
            if (mau == danhSachMauKhongDat[i]) {
                return true;
            }
        }
        return false;
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], {
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
    print(id, yeuCauTiepNhanId) {
        this.showPopupLoadingData();
        this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
        this.inPhieuDuyetKetQua.Header = true;
        this.inPhieuDuyetKetQua.PhienXetNghiemId = id;
        this.inPhieuDuyetKetQua.YeuCauTiepNhanId = yeuCauTiepNhanId;
        let dialogRef;
        let dataChiTietXetNghiem = [];
        this.apiService.post("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + this.inPhieuDuyetKetQua.YeuCauTiepNhanId + "&phienXetNghiemId=" + this.inPhieuDuyetKetQua.PhienXetNghiemId).subscribe((result) => {
            if (result != null) {
                result.forEach(element => {
                    if (element.ChiTietKetQuaXetNghiems != null) {
                        element.ChiTietKetQuaXetNghiems.forEach(elements => {
                            dataChiTietXetNghiem.push(elements);
                        });
                    }
                });
                dialogRef = this.dialog.open(_duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_27__["ChonLoaiKetQuaXetNghiemPopupComponent"], {
                    disableClose: true,
                    width: '1000px',
                    // height: '300px',
                    data: dataChiTietXetNghiem,
                }).afterClosed().subscribe((result) => {
                    if (result != undefined && result != null && result != "") {
                        if (result == 'No') {
                            this.closePopupLoadingData();
                        }
                        else {
                            this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                            this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                            this.apiService.post('XetNghiem/GetAllHtmlPdfKetQuaXetNghiemKetQua', this.inPhieuDuyetKetQua).subscribe(arrHtml => {
                                this.dialog.open(_ket_qua_phieu_popup_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_25__["KetQuaPhieuPopupComponent"], {
                                    disableClose: false,
                                    width: '1000px',
                                    data: arrHtml
                                }).afterClosed().subscribe(result => {
                                });
                                this.closePopupLoadingData();
                            }, (err) => {
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                                this.closePopupLoadingData();
                            });
                        }
                    }
                });
            }
            ;
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
        // this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
        // this.inPhieuDuyetKetQua.Header = true;
        // this.inPhieuDuyetKetQua.Id = id;
        // this.apiService.post<any>('DuyetKetQuaXetNghiem/InPhieuDuyetKetQua', this.inPhieuDuyetKetQua).subscribe(
        //   resData => {
        //     if (resData) {
        //       resData.forEach((e: any) => {
        //         const WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
        //         WindowPrt.focus();
        //         WindowPrt.close();
        //         WindowPrt.document.write(e);
        //         WindowPrt.document.close();
        //         var typeSize = "A4";
        //         var typeLayout = "portrait";
        //         var contents = WindowPrt.document.documentElement.innerHTML;
        //         var frame1 = this.renderer.createElement('iframe');
        //         frame1.name = "frame1";
        //         frame1.style.position = "absolute";
        //         frame1.style.top = "-1000000px";
        //         document.body.appendChild(frame1);
        //         var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
        //         frameDoc.document.open();
        //         frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print {@page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet">');
        //         frameDoc.document.write('</head><body>');
        //         frameDoc.document.write(contents);
        //         frameDoc.document.write('</body></html>');
        //         frameDoc.document.close();
        //         setTimeout(function () {
        //           window.frames["frame1"].focus();
        //           window.frames["frame1"].print();
        //           document.body.removeChild(frame1);
        //         }, 500);
        //       });
        //     }
        //   },
        //   (err: ApiError) => {
        //     this.validationErrors = err.ValidationErrors;
        //     if (err.Message !== 'Validation Failed') {
        //       this.notificationService.showError(err.Message);
        //     }
        //   }
        // );
    }
    download(id) {
    }
};
KetQuaXetNghiemListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('actionDanhSachXetNghiemTemplate', { static: true })
], KetQuaXetNghiemListComponent.prototype, "actionDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('barcodeTemplate', { static: true })
], KetQuaXetNghiemListComponent.prototype, "barcodeTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trangThaiTemplate', { static: true })
], KetQuaXetNghiemListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngayThucHienTemplate', { static: true })
], KetQuaXetNghiemListComponent.prototype, "ngayThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngayDuyetKQTemplate', { static: true })
], KetQuaXetNghiemListComponent.prototype, "ngayDuyetKQTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridParent', { static: true })
], KetQuaXetNghiemListComponent.prototype, "gridParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], KetQuaXetNghiemListComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:keydown', ['$event'])
], KetQuaXetNghiemListComponent.prototype, "keyEvent", null);
KetQuaXetNghiemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-list.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.scss")).default]
    })
], KetQuaXetNghiemListComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.scss ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-title-bottom {\n  margin-top: 30px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhL2tldC1xdWEteGV0LW5naGllbS9rZXQtcXVhLXhldC1uZ2hpZW0tcG9wdXAtZ29pLWR1eWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxceGV0LW5naGllbS1rZXQtcXVhXFxrZXQtcXVhLXhldC1uZ2hpZW1cXGtldC1xdWEteGV0LW5naGllbS1wb3B1cC1nb2ktZHV5ZXRcXGtldC1xdWEteGV0LW5naGllbS1wb3B1cC1nb2ktZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS9rZXQtcXVhLXhldC1uZ2hpZW0va2V0LXF1YS14ZXQtbmdoaWVtLXBvcHVwLWdvaS1kdXlldC9rZXQtcXVhLXhldC1uZ2hpZW0tcG9wdXAtZ29pLWR1eWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhL2tldC1xdWEteGV0LW5naGllbS9rZXQtcXVhLXhldC1uZ2hpZW0tcG9wdXAtZ29pLWR1eWV0L2tldC1xdWEteGV0LW5naGllbS1wb3B1cC1nb2ktZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSIsIi5kaXYtdGl0bGUtYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemPopupGoiDuyetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemPopupGoiDuyetComponent", function() { return KetQuaXetNghiemPopupGoiDuyetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let KetQuaXetNghiemPopupGoiDuyetComponent = class KetQuaXetNghiemPopupGoiDuyetComponent {
    constructor(data, dialog, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.lstData = new Array();
        this.lstData = data;
        console.log("data = ", this.lstData);
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
    Khong() {
        this.dialogRef.close();
    }
    Co() {
        this.dialogRef.close("Yes");
    }
};
KetQuaXetNghiemPopupGoiDuyetComponent.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
KetQuaXetNghiemPopupGoiDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-popup-goi-duyet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-popup-goi-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-popup-goi-duyet.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], KetQuaXetNghiemPopupGoiDuyetComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-routing.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemRoutingModule", function() { return KetQuaXetNghiemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ket_qua_xet_nghiem_list_ket_qua_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _ket_qua_xet_nghiem_update_ket_qua_xet_nghiem_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_detail_ket_qua_xet_nghiem_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.ts");









const routes = [
    {
        path: '',
        component: _ket_qua_xet_nghiem_list_ket_qua_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_3__["KetQuaXetNghiemListComponent"],
        data: {
            title: 'Kết Quả Xét Nghiệm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KetQuaXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'cap-nhat/:id/:type/:yctn',
        component: _ket_qua_xet_nghiem_update_ket_qua_xet_nghiem_update_component__WEBPACK_IMPORTED_MODULE_7__["KetQuaXetNghiemUpdateComponent"],
        data: {
            title: 'Cập Nhật Kết Quả Xét Nghiệm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KetQuaXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet/:id',
        component: _ket_qua_xet_nghiem_detail_ket_qua_xet_nghiem_detail_component__WEBPACK_IMPORTED_MODULE_8__["KetQuaXetNghiemDetailComponent"],
        data: {
            title: 'Xem Kết Quả Xét Nghiệm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KetQuaXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    }
];
let KetQuaXetNghiemRoutingModule = class KetQuaXetNghiemRoutingModule {
};
KetQuaXetNghiemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KetQuaXetNghiemRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".span-result-information {\n  font-weight: bold;\n}\n\n.content-2 {\n  margin-top: 30px !important;\n}\n\n.content-1 {\n  border-bottom: 1px solid var(--foreground-divider);\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\ntable {\n  width: 100%;\n  background-color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ntable th {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\ntable th.w-250 {\n  width: 250px;\n}\n\ntable tr.bg-light-red {\n  background-color: #eaa3a3;\n}\n\n.order-color {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.order-color .set-color {\n  padding: 10px 40px;\n}\n\n.order-color .set-color.black {\n  background-color: black;\n}\n\n.order-color .set-color.red {\n  background-color: red;\n}\n\n.order-color .set-color.blue {\n  background-color: blue;\n}\n\n.div-header {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhL2tldC1xdWEteGV0LW5naGllbS9rZXQtcXVhLXhldC1uZ2hpZW0tc2hhcmVkL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxceGV0LW5naGllbS1rZXQtcXVhXFxrZXQtcXVhLXhldC1uZ2hpZW1cXGtldC1xdWEteGV0LW5naGllbS1zaGFyZWRcXGtldC1xdWEteGV0LW5naGllbS1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS9rZXQtcXVhLXhldC1uZ2hpZW0va2V0LXF1YS14ZXQtbmdoaWVtLXNoYXJlZC9rZXQtcXVhLXhldC1uZ2hpZW0tc2hhcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrREFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS94ZXQtbmdoaWVtLWtldC1xdWEva2V0LXF1YS14ZXQtbmdoaWVtL2tldC1xdWEteGV0LW5naGllbS1zaGFyZWQva2V0LXF1YS14ZXQtbmdoaWVtLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFuLXJlc3VsdC1pbmZvcm1hdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGVudC0yIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRhYmxlIHRoLnctMjUwIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG50YWJsZSB0ci5iZy1saWdodC1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFhM2EzO1xufVxuXG4ub3JkZXItY29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yIHtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSIsIi5zcGFuLXJlc3VsdC1pbmZvcm1hdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGVudC0yIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRhYmxlIHRoLnctMjUwIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG50YWJsZSB0ci5iZy1saWdodC1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFhM2EzO1xufVxuXG4ub3JkZXItY29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yIHtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemSharedComponent", function() { return KetQuaXetNghiemSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _ket_qua_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ket-qua-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/constants/xet-nghiem-constant */ "./src/app/shared/constants/xet-nghiem-constant.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");













let KetQuaXetNghiemSharedComponent = class KetQuaXetNghiemSharedComponent {
    constructor(cdRef, dialog, baseService, route, notificationService) {
        this.cdRef = cdRef;
        this.dialog = dialog;
        this.baseService = baseService;
        this.route = route;
        this.notificationService = notificationService;
        this.ChoKQChayLai = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_10__["TrangThaiKetQuaXetNghiemConst"].ChoKQChayLai;
        this.ChoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_10__["TrangThaiKetQuaXetNghiemConst"].ChoKQ;
        this.ChoDuyetKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_10__["TrangThaiKetQuaXetNghiemConst"].ChoDuyetKQ;
        this.DaCoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_10__["TrangThaiKetQuaXetNghiemConst"].DaCoKQ;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"];
        this.gridColumns = [];
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KetQuaXetNghiem;
        this.disableNhom = false;
        this.urlGetDataParent = "";
        this.urlGetTotalPageParent = "";
        this.ketQuaXetNghiem = new _ket_qua_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_8__["KetQuaXetNghiemViewKetQuaViewModel"]();
        this.displayToolTipGridNguoiYeuCau = null;
        this.displayToolTipGridNgayYeuCau = null;
        this.displayToolTipGridLyDoYeuCau = null;
        this.displayToolTipGridNguoiDuyet = null;
        this.displayToolTipGridNgayDuyet = null;
        this.dataChildDisplay = new Array();
        this.sort = [
            {
                field: "Id",
                dir: "asc"
            }
        ];
        this.trangThaiIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkAll = null;
        this.checkBoxNhom = null;
        this.groups = [{ field: 'Nhom' }];
        this.id = this.route.snapshot.params.id;
        this.type = this.route.snapshot.params.type;
        //console.log("constructor = ", this.id, this.type);
    }
    ngOnInit() {
        this.gridColumns = [
            { Field: "Nhom", Title: "", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
            { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
            { Field: "Ten", Title: "Tên", MinWidth: 200, Sortable: false, Template: this.tenTemplate, ShowTooltip: true },
            { Field: "GiaTriCu", Title: "KQ Cũ", Width: 100, Sortable: false, Template: this.kqCuTemplate },
            { Field: "GiaTriTuMay", Title: "KQ Từ Máy", Width: 100, Sortable: false, Template: this.kqTuMayTemplate },
            { Field: "GiaTriNhapTay", Title: "KQ Nhập Tay", Width: 100, Sortable: false, Template: this.kqNhapTayTemplate },
            { Field: "ToDamGiaTri", Title: "Đậm KQ", Width: 50, Sortable: false, Template: this.damKQTemplate },
            { Field: "CSBT", Title: "CSBT", Width: 100, Sortable: false, Template: this.chiSoBinhThuongTemplate },
            { Field: "DonVi", Title: "ĐVT", Width: 50, Sortable: false, Template: this.donViTinhTemplate },
            { Field: "ThoiDiemGuiYeuCauDisplay", Title: "Giờ Tiếp Nhận Mẫu", Width: 150, Sortable: false, Template: this.gioTiepNhanTemplate },
            { Field: "ThoiDiemNhanKetQuaDisplay", Title: "Giờ Nhận KQ", Width: 150, Sortable: false, Template: this.gioNhanMauTemplate },
            { Field: "MayXetNghiemId", Title: "Máy XN", Width: 150, Sortable: false, Template: this.mayXNTemplate },
            { Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 100, Sortable: false, Template: this.ngayDuyetTemplate },
            { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: false, Template: this.nguoiDuyetTemplate }
        ];
        this.checkAll = false;
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
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
    getById(id) {
        this.loadingPage();
        this.baseService.getById(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                console.log("resultData : ", resultData);
                this.closePopupLoadingData();
                this.ketQuaXetNghiem = resultData;
                this.setDataSourceForGrid();
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    searchChanges($event) {
        //console.log("searchString = ", this.searchString, $event);
        this.searchString = $event;
        if ($event == "" || $event == undefined) {
            this.setDataSourceForGrid();
        }
    }
    onKeySearchChanges($event) {
        if ($event.keyCode == 13) {
            this.setDataSourceForGrid();
        }
    }
    setDataSourceForGrid() {
        //search
        if (this.searchString == undefined || this.searchString == null || this.searchString == "") {
            this.dataChildDisplay = [...this.ketQuaXetNghiem.dataChild];
        }
        else {
            let search = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].removeVietnamese(this.searchString).toLowerCase().trim().replace(/đ/g, 'd');
            this.dataChildDisplay = [...this.ketQuaXetNghiem.dataChild].filter(o => 
            //(o.GiaTriCu != null && o.GiaTriCu.toLocaleLowerCase().trim().indexOf(search) != -1)
            (o.Ten != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].removeVietnamese(o.Ten).toLocaleLowerCase().trim().indexOf(search) != -1)
                //|| (o.GiaTriTuMay != null && o.GiaTriTuMay.toLocaleLowerCase().trim().indexOf(search) != -1)
                //|| (o.GiaTriNhapTay != null && o.GiaTriNhapTay.toLocaleLowerCase().trim().indexOf(search) != -1)
                //|| (o.CSBT != null && o.CSBT.toLocaleLowerCase().trim().indexOf(search) != -1 )
                || (o.DonVi != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].removeVietnamese(o.DonVi).toLocaleLowerCase().trim().indexOf(search) != -1)
                //|| (o.ThoiDiemGuiYeuCauDisplay != null &&  o.ThoiDiemGuiYeuCauDisplay.toLocaleLowerCase().trim().indexOf(search) != -1)
                //|| (o.ThoiDiemNhanKetQuaDisplay != null && o.ThoiDiemNhanKetQuaDisplay.toLocaleLowerCase().trim().indexOf(search) != -1)
                || (o.TenMayXetNghiem != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].removeVietnamese(o.TenMayXetNghiem).toLocaleLowerCase().trim().indexOf(search) != -1)
                || (o.NguoiDuyet != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].removeVietnamese(o.NguoiDuyet).toLocaleLowerCase().trim().indexOf(search) != -1)
                || (o.NgayDuyetDisplay != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].removeVietnamese(o.NgayDuyetDisplay).toLocaleLowerCase().trim().indexOf(search) != -1));
        }
        //set highlight
        if (this.type != 1) {
            //console.log("result = ", this.dataChildDisplay.filter(x => x.ThoiDiemDuyetKetQua == null || (x.GiaTriTuMay == null && x.GiaTriNhapTay == null)), this.dataChildDisplay);
            this.dataChildDisplay.filter(x => x.ThoiDiemDuyetKetQua == null || (x.GiaTriTuMay == null && x.GiaTriNhapTay == null))
                .forEach(x => { x.HighLightClass = 'bg-row-lightRed'; });
        }
        this.dataChildDisplay.filter(x => x.DaGoiDuyet == true).forEach(dataItem => {
            if (dataItem.Level == 1 && dataItem.IdChilds.length == 0) {
                dataItem.HighLightClass = ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                    && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
            }
            else if (dataItem.Level == 1 && dataItem.IdChilds.length > 0) {
                dataItem.HighLightClass = null;
            }
            if (dataItem.Level != 1) {
                dataItem.HighLightClass = ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                    && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
            }
        });
        //
        this.gridDataSource = [];
        this.gridDataSource = {
            data: this.dataChildDisplay,
            total: this.dataChildDisplay.length
        };
        // kiem tra có Duyêt kết quả in
        let kiemTraTrangThaiIn = this.gridDataSource.data.findIndex(s => s.ThoiDiemDuyetKetQua != null);
        if (kiemTraTrangThaiIn == -1) {
            this.trangThaiIn.emit(false);
        }
        else {
            this.trangThaiIn.emit(true);
        }
        //console.log("gridDataSource = ", this.gridDataSource);
        if (!this.cdRef.destroyed) {
            this.cdRef.detectChanges();
        }
        if (this.gridParent != undefined) {
            this.gridParent._gridDataSource = Object.assign({}, this.gridDataSource);
            this.gridParent.setDataSource();
            //this.cdRef.detectChanges();
        }
    }
    getSharedDataGoiDuyet() {
        let lstDataCheckBoxCurrent = this.gridParent.getAllDataFromDatasource();
        let lstDataCurrentLv1 = lstDataCheckBoxCurrent.filter(x => x.Level == 1 && x.CheckBox && !x.DaGoiDuyet);
        let lstDataCurrentLv2 = lstDataCheckBoxCurrent.filter(x => x.Level == 2);
        var lstDataLv2 = [];
        if (lstDataCurrentLv2.length > 0) {
            lstDataCurrentLv2.forEach(element => {
                if (lstDataCurrentLv1.findIndex(x => x.DichVuXetNghiemId == element.DichVuXetNghiemChaId) !== -1) {
                    lstDataLv2.push(element);
                }
            });
        }
        var lstDataLv3 = [];
        let lstDataCurrentLv3 = lstDataCheckBoxCurrent.filter(x => x.Level == 3);
        if (lstDataCurrentLv3.length > 0) {
            lstDataCurrentLv3.forEach(element => {
                if (lstDataLv2.findIndex(x => x.DichVuXetNghiemId == element.DichVuXetNghiemChaId) !== -1) {
                    lstDataLv3.push(element);
                }
            });
        }
        let dataChild = lstDataCurrentLv1.concat(lstDataLv2.concat(lstDataLv3));
        let dataGoiDuyet = Object.assign({}, this.ketQuaXetNghiem);
        dataGoiDuyet.dataChild = dataChild;
        return dataGoiDuyet;
    }
    getSharedDataLuu() {
        return this.ketQuaXetNghiem;
    }
    updateDataSauKhiLuu(dataChilds) {
        let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
        lstDataCurrent.forEach(element => {
            let dataChild = dataChilds.find(o => o.Id == element.Id);
            if (dataChild) {
                element.ThoiDiemNhanKetQuaDisplay = dataChild.ThoiDiemNhanKetQuaDisplay;
            }
        });
        this.gridParent._gridDataSource = Object.assign({}, lstDataCurrent);
        this.gridParent.setDataSource();
    }
    setUpDataTooltip(dataItem) {
        console.log("setUpDataTooltip = ", dataItem);
        this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
        this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
        this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
        this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyetChayLai;
        this.displayToolTipGridNgayDuyet = dataItem.items[0].NgayDuyetDisplay;
    }
    checkHiddenIcon(item, danhSachLoaiMau) {
        // console.log("checkHiddenIcon = ", item, danhSachLoaiMau);
        // return true;
        for (let i = 0; i < danhSachLoaiMau.length; i++) {
            if (item == danhSachLoaiMau[i]) {
                return true;
            }
        }
        return false;
    }
    CheckHighlight(dataItem, currentValue) {
        dataItem.GiaTriNhapTay = currentValue;
        dataItem.HighLightClass = dataItem.DaGoiDuyet == true && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '') ? 'bg-row-lightRed' : null;
    }
    isMauKhongDat(mau, danhSachMauKhongDat) {
        for (let i = 0; i < danhSachMauKhongDat.length; i++) {
            if (mau == danhSachMauKhongDat[i]) {
                return true;
            }
        }
        return false;
    }
    mayXNChange(event, level, dichVuXetNghiemId) {
        if (level == 1) {
            let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
            // console.log("data: ", lstDataCurrent)
            let lstDataCurrentLv2 = lstDataCurrent.filter(x => x.Level == 2);
            let lstDataCurrentLv3 = lstDataCurrent.filter(x => x.Level == 3);
            if (lstDataCurrentLv2.length > 0) {
                lstDataCurrentLv2.forEach(element => {
                    if (element.DichVuXetNghiemChaId == dichVuXetNghiemId) {
                        element.MayXetNghiemId = event;
                    }
                });
            }
            if (lstDataCurrentLv3.length > 0) {
                lstDataCurrentLv3.forEach(element => {
                    element.MayXetNghiemId = lstDataCurrentLv2.find(x => x.DichVuXetNghiemId == element.DichVuXetNghiemChaId) != null ? event : null;
                });
            }
            // lstDataCurrent.forEach(element => {
            //   if ((element.Level == 2 && element.DichVuXetNghiemChaId == dichVuXetNghiemId)
            //     || (element.Level == 3 && element.DichVuXetNghiemChaId == dichVuXetNghiemId)) {
            //     element.MayXetNghiemId = event;
            //   }
            // });
            this.gridParent._gridDataSource = Object.assign({}, lstDataCurrent);
            this.gridParent.setDataSource();
        }
    }
    checkBoxChange(event, dataItem) {
        let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
        lstDataCurrent.forEach(element => {
            if (element.Id == dataItem.Id) {
                element.CheckBox = event;
                // element.CheckBoxParent = event;
            }
        });
        if (lstDataCurrent.some(x => !x.CheckBox && x.Level == 1)) {
            this.checkAll = false;
        }
        else {
            this.checkAll = true;
        }
        if (lstDataCurrent.some(x => !x.CheckBox && x.Level == 1 && x.NhomDichVuBenhVienId == dataItem.NhomDichVuBenhVienId)) {
            lstDataCurrent.forEach(element => {
                element.CheckBoxParent = false;
            });
        }
        else if (lstDataCurrent.every(x => x.CheckBox && x.Level == 1 && x.NhomDichVuBenhVienId == dataItem.NhomDichVuBenhVienId)) {
            lstDataCurrent.forEach(element => {
                element.CheckBoxParent = true;
            });
        }
        this.gridParent._gridDataSource = Object.assign({}, lstDataCurrent);
        this.gridParent.setDataSource();
    }
    checkBoxAllChange(event) {
        let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
        this.checkAll = event;
        lstDataCurrent.forEach(element => {
            if (element.DaGoiDuyet != true) {
                element.CheckBox = event;
                element.CheckBoxParent = event;
            }
        });
        this.gridParent._gridDataSource = Object.assign({}, lstDataCurrent);
        this.gridParent.setDataSource();
    }
    checkBoxNhomChange(event, data) {
        data.items.forEach(element => {
            if (element.Level == 1 && element.DaGoiDuyet == null) {
                element.CheckBox = event;
                element.CheckBoxParent = event;
            }
        });
        let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
        if (lstDataCurrent.some(x => x.CheckBoxParent != true && x.Level == 1)) {
            this.checkAll = false;
        }
        else {
            this.checkAll = true;
        }
        this.gridParent._gridDataSource = Object.assign({}, lstDataCurrent);
        this.gridParent.setDataSource();
    }
};
KetQuaXetNghiemSharedComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], KetQuaXetNghiemSharedComponent.prototype, "trangThaiIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "tenTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqCuTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "kqCuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqTuMayTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "kqTuMayTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqNhapTayTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "kqNhapTayTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqDuyetTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "kqDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('damKQTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "damKQTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiSoBinhThuongTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "chiSoBinhThuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donViTinhTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "donViTinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioTiepNhanTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "gioTiepNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioNhanMauTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "gioNhanMauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mayXNTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "mayXNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiDuyetTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "nguoiDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "checkBoxTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "checkBoxHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: false })
], KetQuaXetNghiemSharedComponent.prototype, "gridParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomTemplate', { static: true })
], KetQuaXetNghiemSharedComponent.prototype, "nhomTemplate", void 0);
KetQuaXetNghiemSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-shared.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.scss")).default]
    })
], KetQuaXetNghiemSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS9rZXQtcXVhLXhldC1uZ2hpZW0va2V0LXF1YS14ZXQtbmdoaWVtLXVwZGF0ZS9rZXQtcXVhLXhldC1uZ2hpZW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemUpdateComponent", function() { return KetQuaXetNghiemUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _ket_qua_xet_nghiem_shared_ket_qua_xet_nghiem_shared_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _ket_qua_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ket-qua-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_popup_goi_duyet_ket_qua_xet_nghiem_popup_goi_duyet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.ts");
/* harmony import */ var src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/constants/xet-nghiem-constant */ "./src/app/shared/constants/xet-nghiem-constant.ts");
/* harmony import */ var _ket_qua_phieu_popup_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ket-qua-phieu-popup/ket-qua-phieu-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.ts");
/* harmony import */ var _duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component.ts");





















let KetQuaXetNghiemUpdateComponent = class KetQuaXetNghiemUpdateComponent {
    constructor(router, route, baseService, apiService, authService, renderer, dialog, notificationService, errorService) {
        this.router = router;
        this.route = route;
        this.baseService = baseService;
        this.apiService = apiService;
        this.authService = authService;
        this.renderer = renderer;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.errorService = errorService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].KetQuaXetNghiem;
        this.loading = false;
        this.showToastNotifyError = false;
        this.trangThaiIn = false;
        this.ChoKQChayLai = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_18__["TrangThaiKetQuaXetNghiemConst"].ChoKQChayLai;
        this.ChoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_18__["TrangThaiKetQuaXetNghiemConst"].ChoKQ;
        this.ChoDuyetKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_18__["TrangThaiKetQuaXetNghiemConst"].ChoDuyetKQ;
        this.DaCoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_18__["TrangThaiKetQuaXetNghiemConst"].DaCoKQ;
        this.titleString = null;
        this.inPhieuDuyetKetQua = new _ket_qua_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_15__["PhieuDuyetKetQua"]();
        this.id = this.route.snapshot.params.id;
        this.type = this.route.snapshot.params.type;
        this.yeuCauTiepNhanId = this.route.snapshot.params.yctn;
        if (this.type == 1) {
            this.titleString = this.ChoKQ;
        }
        else if (this.type == 2) {
            this.titleString = this.ChoKQChayLai;
        }
        else if (this.type == 3) {
            this.titleString = this.ChoDuyetKQ;
        }
        else if (this.type == 4) {
            this.titleString = this.DaCoKQ;
        }
    }
    ngOnInit() {
    }
    xuatFileKetQua() {
    }
    getTrangThaiIn(event) {
        this.trangThaiIn = event;
    }
    inKetQua() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
            this.showPopupDownloadData();
            this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
            this.inPhieuDuyetKetQua.Header = true;
            this.inPhieuDuyetKetQua.PhienXetNghiemId = this.id;
            this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
            let dialogRef;
            let dataChiTietXetNghiem = [];
            this.apiService.post("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&phienXetNghiemId=" + this.inPhieuDuyetKetQua.PhienXetNghiemId).subscribe((result) => {
                if (result != null) {
                    result.forEach(element => {
                        if (element.ChiTietKetQuaXetNghiems != null) {
                            element.ChiTietKetQuaXetNghiems.forEach(elements => {
                                dataChiTietXetNghiem.push(elements);
                            });
                        }
                    });
                    dialogRef = this.dialog.open(_duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_20__["ChonLoaiKetQuaXetNghiemPopupComponent"], {
                        disableClose: true,
                        width: '1000px',
                        // height: '300px',
                        data: dataChiTietXetNghiem,
                    }).afterClosed().subscribe((result) => {
                        if (result != undefined && result != null && result != "") {
                            if (result == 'No') {
                                this.closePopupLoadingData();
                            }
                            else {
                                this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                                this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                                this.apiService.post('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(arrHtml => {
                                    this.dialog.open(_ket_qua_phieu_popup_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_19__["KetQuaPhieuPopupComponent"], {
                                        disableClose: false,
                                        width: '1000px',
                                        data: arrHtml
                                    }).afterClosed().subscribe(result => {
                                    });
                                    this.closePopupLoadingData();
                                }, (err) => {
                                    if (err.Message !== 'Validation Failed') {
                                        this.notificationService.showError(err.Message);
                                    }
                                    this.closePopupLoadingData();
                                });
                            }
                        }
                    });
                }
                ;
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
        // this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
        // this.inPhieuDuyetKetQua.Header = true;
        // this.inPhieuDuyetKetQua.PhienXetNghiemId = this.id;
        // this.apiService.post<any>('DuyetKetQuaXetNghiem/InPhieuDuyetKetQua', this.inPhieuDuyetKetQua).subscribe(
        //   resData => {
        //     if (resData) {
        //       resData.forEach(e => {
        //         const WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
        //         WindowPrt.focus();
        //         WindowPrt.close();
        //         WindowPrt.document.write(e.Html);
        //         WindowPrt.document.close();
        //         var typeSize = "A4";
        //         var typeLayout = "portrait";
        //         var contents = WindowPrt.document.documentElement.innerHTML;
        //         var frame1 = this.renderer.createElement('iframe');
        //         frame1.name = "frame1";
        //         frame1.style.position = "absolute";
        //         frame1.style.top = "-1000000px";
        //         document.body.appendChild(frame1);
        //         var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
        //         frameDoc.document.open();
        //         frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print {@page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet">');
        //         frameDoc.document.write('</head><body>');
        //         frameDoc.document.write(contents);
        //         frameDoc.document.write('</body></html>');
        //         frameDoc.document.close();
        //         setTimeout(function () {
        //           window.frames["frame1"].focus();
        //           window.frames["frame1"].print();
        //           document.body.removeChild(frame1);
        //         }, 500);
        //       });
        //     }
        //   },
        //   (err: ApiError) => {
        //     this.validationErrors = err.ValidationErrors;
        //     if (err.Message !== 'Validation Failed') {
        //       this.notificationService.showError(err.Message);
        //     }
        //   }
        // );
    }
    showPopupDownloadData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], {
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
    quayLai() {
        this.router.navigateByUrl('xet-nghiem/ket-qua?holdQuery=true');
    }
    luu() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
            var self = this;
            self.shared.validationErrors = null;
            self.loading = true;
            self.baseService.update(self.shared.getSharedDataLuu()).subscribe((resData) => {
                //self.router.navigateByUrl('xet-nghiem/ket-qua?holdQuery=true');
                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                // const currentRoute = this.router.url;
                //               this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                //                   this.router.navigate([currentRoute]); // navigate to same route
                //               });
                self.loading = false;
                self.shared.updateDataSauKhiLuu(resData);
            }, (err) => {
                self.shared.validationErrors = err.ValidationErrors;
                if (self.showToastNotifyError == true) {
                    var mess = self.errorService.getValidationErrors(err);
                    if (mess != null) {
                        self.notificationService.showError(mess);
                    }
                }
                self.loading = false;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
        }
    }
    GoiDuyet() {
        var self = this;
        let dataGoiDuyet = self.shared.getSharedDataGoiDuyet();
        let data = dataGoiDuyet;
        let dataNeedFillValue = data.dataChild.filter(o => (o.GiaTriTuMay == null || o.GiaTriTuMay == "")
            && (o.GiaTriNhapTay == null || o.GiaTriNhapTay == "") && ((o.Level != 1 && o.IdChilds.length == 0) || o.Level != 1 || (o.Level == 1 && o.IdChilds.length == 0)));
        if (dataNeedFillValue.length > 0) {
            //
            let dialogRef = this.dialog.open(_ket_qua_xet_nghiem_popup_goi_duyet_ket_qua_xet_nghiem_popup_goi_duyet_component__WEBPACK_IMPORTED_MODULE_17__["KetQuaXetNghiemPopupGoiDuyetComponent"], {
                disableClose: true,
                width: '700px',
                height: '340px',
                data: dataNeedFillValue,
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == "Yes") {
                    self.apiService.post("KetQuaXetNghiem/DuyetPhienXetNghiem", dataGoiDuyet).subscribe(resData => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Gởi duyệt"]));
                        self.loading = false;
                        if (resData) {
                            //self.router.navigate(["/xet-nghiem/ket-qua" + "/cap-nhat/" + dataGoiDuyet.Id + "/3/" + dataGoiDuyet.YeuCauTiepNhanId]);
                            let toUrl = "/xet-nghiem/ket-qua" + "/cap-nhat/" + dataGoiDuyet.Id + "/3/" + dataGoiDuyet.YeuCauTiepNhanId;
                            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([toUrl]));
                        }
                        else {
                            location.reload();
                        }
                    }, (err) => {
                        self.shared.validationErrors = err.ValidationErrors;
                        if (self.showToastNotifyError == true) {
                            var mess = self.errorService.getValidationErrors(err);
                            if (mess != null) {
                                self.notificationService.showError(mess);
                            }
                        }
                        self.loading = false;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                }
            });
            //
        }
        else {
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                disableClose: false, width: '400px',
                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["KetQuaXetNghiemMessage"].MessageGoiDuyet }
            }).afterClosed().subscribe(result => {
                if (result == "Yes") {
                    self.apiService.post("KetQuaXetNghiem/DuyetPhienXetNghiem", dataGoiDuyet).subscribe(resData => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Gởi duyệt"]));
                        self.loading = false;
                        if (resData) {
                            //self.router.navigate(["/xet-nghiem/ket-qua" + "/cap-nhat/" + dataGoiDuyet.Id + "/3/" + dataGoiDuyet.YeuCauTiepNhanId]);
                            let toUrl = "/xet-nghiem/ket-qua" + "/cap-nhat/" + dataGoiDuyet.Id + "/3/" + dataGoiDuyet.YeuCauTiepNhanId;
                            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([toUrl]));
                        }
                        else {
                            location.reload();
                        }
                    }, (err) => {
                        self.shared.validationErrors = err.ValidationErrors;
                        if (self.showToastNotifyError == true) {
                            var mess = self.errorService.getValidationErrors(err);
                            if (mess != null) {
                                self.notificationService.showError(mess);
                            }
                        }
                        self.loading = false;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
    }
};
KetQuaXetNghiemUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ket_qua_xet_nghiem_shared_ket_qua_xet_nghiem_shared_component__WEBPACK_IMPORTED_MODULE_13__["KetQuaXetNghiemSharedComponent"], { static: true })
], KetQuaXetNghiemUpdateComponent.prototype, "shared", void 0);
KetQuaXetNghiemUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-update.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.scss")).default]
    })
], KetQuaXetNghiemUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.model.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.model.ts ***!
  \***********************************************************************************************************/
/*! exports provided: KetQuaXetNghiem, KetQuaXetNghiemSearch, KetQuaXetNghiemViewKetQuaViewModel, CheckBoxTheoNhom, ListDataChild, PhieuDuyetKetQua */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiem", function() { return KetQuaXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemSearch", function() { return KetQuaXetNghiemSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemViewKetQuaViewModel", function() { return KetQuaXetNghiemViewKetQuaViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxTheoNhom", function() { return CheckBoxTheoNhom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataChild", function() { return ListDataChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuDuyetKetQua", function() { return PhieuDuyetKetQua; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KetQuaXetNghiem {
}
class KetQuaXetNghiemSearch {
    constructor(ChoKetQua = true, ChoDuyetKetQua = false, DaCoKetQua = false, SearchString = "", TuNgay = null, DenNgay = null, FromDate = null, ToDate = null, ThoiDiemTiepNhanTuFormat = null, ThoiDiemTiepNhanDenFormat = null) {
        this.ChoKetQua = ChoKetQua;
        this.ChoDuyetKetQua = ChoDuyetKetQua;
        this.DaCoKetQua = DaCoKetQua;
        this.SearchString = SearchString;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
        this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
    }
}
class KetQuaXetNghiemViewKetQuaViewModel {
    constructor() {
        this.BarCodeID = null;
        this.MaSoBHYT = null;
        this.MaBN = null;
        this.MaYeuCauTiepNhan = null;
        this.HoTen = null;
        this.Tuoi = null;
        this.GioiTinhDisplay = null;
        this.Tuyen = null;
        this.BHYTMucHuong = null;
        this.DanToc = null;
        this.DiaChi = null;
        this.NgheNghiep = null;
        this.ChanDoan = null;
        this.KhoaChiDinh = null;
        this.Phong = null;
        this.NhanVienThucHienId = null;
        this.ChanDoanDuoi = null;
        this.GhiChu = null;
        this.YeuCauChayLai = null;
        this.DaDuyet = null;
        this.NgayYeuCauDisplay = null;
        this.LyDoYeuCau = null;
        this.NgayDuyetDisplay = null;
        this.dataChild = new Array();
        //BVHD-3364
        this.TenCongTy = null;
    }
}
class CheckBoxTheoNhom {
    constructor() {
        this.CheckBox = null;
        this.NhomDichVuBenhVienId = null;
    }
}
// export class KetQuaXetNghiemChiTietViewModel {
//     public TenNhomDichVuBenhVien: string = null;
//     public NhomDichVuBenhVienId: number = null;
//     public YeuCauChayLai: boolean = null;
//     public DaDuyet: boolean = null;
//     public NguoiYeuCau: string = null;
//     public NgayYeuCauDisplay: string = null;
//     public LyDoYeuCau: string = null;
//     public NguoiDuyet: string = null;
//     public NgayDuyetDisplay: string = null;
//     public DanhSachLoaiMauDaCoKetQua: string[] = new Array<string>();
//     public DanhSachLoaiMau: string[] = new Array<string>();
//     public datas: ListDataChild[] = new Array<ListDataChild>();
// }
class ListDataChild {
    constructor() {
        this.Ten = null;
        this.GiaTriCu = null;
        this.GiaTriTuMay = null;
        this.GiaTriNhapTay = null;
        this.GiaTriDuyet = null;
        this.ToDamGiaTri = null;
        this.CSBT = null;
        this.DonVi = null;
        this.ThoiDiemGuiYeuCau = null;
        this.ThoiDiemGuiYeuCauDisplay = null;
        this.ThoiDiemNhanKetQua = null;
        this.ThoiDiemNhanKetQuaDisplay = null;
        this.TenMayXetNghiem = null;
        this.MayXetNghiemId = null;
        this.ThoiDiemDuyetKetQua = null;
        this.ThoiDiemDuyetKetQuaDisplay = null;
        this.NguoiDuyet = null;
        //structure tree
        this.LoaiMau = null;
        this.DichVuXetNghiemId = null;
        this.LoaiKetQuaTuMay = null;
        //update
        this.IdChilds = new Array();
        this.Level = null;
        this.DanhSachLoaiMau = new Array();
        this.YeuCauChayLai = null;
        this.DaDuyet = null;
        this.NgayYeuCauDisplay = null;
        this.LyDoYeuCau = null;
        this.NgayDuyetDisplay = null;
        this.NguoiYeuCau = null;
        this.NguoiDuyetChayLai = null;
        this.Nhom = null;
        this.DaDuyetChiTiet = null;
        this.HighLightClass = null;
        this.DaGoiDuyet = null;
        this.CheckBox = null;
    }
}
class PhieuDuyetKetQua {
    constructor(HostingName = null, Header = null, PhienXetNghiemId = null, YeuCauTiepNhanId = null, LoaiIn = null, ListIn = []) {
        this.HostingName = HostingName;
        this.Header = Header;
        this.PhienXetNghiemId = PhienXetNghiemId;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiIn = LoaiIn;
        this.ListIn = ListIn;
    }
}


/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemModule", function() { return KetQuaXetNghiemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ket_qua_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-routing.module */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-routing.module.ts");
/* harmony import */ var _ket_qua_xet_nghiem_list_ket_qua_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_update_ket_qua_xet_nghiem_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_detail_ket_qua_xet_nghiem_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_shared_ket_qua_xet_nghiem_shared_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _ket_qua_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ket-qua-xet-nghiem.service */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _ket_qua_xet_nghiem_popup_goi_duyet_ket_qua_xet_nghiem_popup_goi_duyet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component.ts");
/* harmony import */ var _ket_qua_phieu_popup_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ket-qua-phieu-popup/ket-qua-phieu-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-phieu-popup/ket-qua-phieu-popup.component.ts");
/* harmony import */ var _duyet_ket_qua_duyet_ket_qua_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../duyet-ket-qua/duyet-ket-qua.module */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.module.ts");
























let KetQuaXetNghiemModule = class KetQuaXetNghiemModule {
};
KetQuaXetNghiemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ket_qua_xet_nghiem_list_ket_qua_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_4__["KetQuaXetNghiemListComponent"], _ket_qua_xet_nghiem_update_ket_qua_xet_nghiem_update_component__WEBPACK_IMPORTED_MODULE_5__["KetQuaXetNghiemUpdateComponent"], _ket_qua_xet_nghiem_detail_ket_qua_xet_nghiem_detail_component__WEBPACK_IMPORTED_MODULE_6__["KetQuaXetNghiemDetailComponent"], _ket_qua_xet_nghiem_shared_ket_qua_xet_nghiem_shared_component__WEBPACK_IMPORTED_MODULE_7__["KetQuaXetNghiemSharedComponent"], _ket_qua_xet_nghiem_popup_goi_duyet_ket_qua_xet_nghiem_popup_goi_duyet_component__WEBPACK_IMPORTED_MODULE_21__["KetQuaXetNghiemPopupGoiDuyetComponent"], _ket_qua_phieu_popup_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_22__["KetQuaPhieuPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ket_qua_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_3__["KetQuaXetNghiemRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_17__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__["InputsModule"],
            _duyet_ket_qua_duyet_ket_qua_module__WEBPACK_IMPORTED_MODULE_23__["DuyetKetQuaXetNghiemModule"]
        ],
        providers: [
            _ket_qua_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_18__["KetQuaXetNghiemService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_19__["BaseService"], useClass: _ket_qua_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_18__["KetQuaXetNghiemService"] },
        ],
        entryComponents: [
            _ket_qua_xet_nghiem_popup_goi_duyet_ket_qua_xet_nghiem_popup_goi_duyet_component__WEBPACK_IMPORTED_MODULE_21__["KetQuaXetNghiemPopupGoiDuyetComponent"],
            _ket_qua_phieu_popup_ket_qua_phieu_popup_component__WEBPACK_IMPORTED_MODULE_22__["KetQuaPhieuPopupComponent"]
        ]
    })
], KetQuaXetNghiemModule);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.service.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemService", function() { return KetQuaXetNghiemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let KetQuaXetNghiemService = class KetQuaXetNghiemService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'KetQuaXetNghiem';
    }
};
KetQuaXetNghiemService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
KetQuaXetNghiemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KetQuaXetNghiemService);



/***/ })

}]);
//# sourceMappingURL=xet-nghiem-xet-nghiem-ket-qua-ket-qua-xet-nghiem-ket-qua-xet-nghiem-module-es2015.js.map