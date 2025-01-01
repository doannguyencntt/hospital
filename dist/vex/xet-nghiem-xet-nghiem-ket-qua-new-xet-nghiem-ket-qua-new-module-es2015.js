(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xet-nghiem-xet-nghiem-ket-qua-new-xet-nghiem-ket-qua-new-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Kết quả xét nghiệm ({{arrFileUrl.length}} file)</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n    <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n  </button>\n</div>\n<mat-dialog-content style=\"height: 550px;\">\n    <div class=\"container-iframe\">\n        <ng-container [ngSwitch]=\"arrFileUrl.length > 0\">\n            <div *ngSwitchCase=\"true\">\n                <ng-container *ngFor=\"let item of arrFileUrl\">\n                    <iframe width=\"100%\" height=\"550px\" frameborder=\"0\" [src]=\"item | safe\" type=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n                </ng-container>\n            </div>\n            <div *ngSwitchDefault>Không có dữ liệu</div>\n        </ng-container>\n\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n      class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải tất cả</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>ket-qua-xet-nghiem-new-detail works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Xét nghiệm',Path:''},\n                {Title:'Kết Quả Xét Nghiệm',Path:'/xet-nghiem/ket-qua-new', Active: true}]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent [documentType]=\"documentType\" [sort]=\"sort\" [showStt]=\"true\"\n                [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\"\n                [checkboxAble]=\"false\" [gridColumns]=\"gridDanhSachXetNghiemColumns\" [urlGetData]=\"urlGetDataParent\"\n                [additionalSearchString]=\"addtionStringDefault\" [urlGetTotalPage]=\"urlGetTotalPageParent\"\n                [detailTemplate]=\"gridChild2Template\" [headerTemplate]=\"headerTemplate\" [lazyLoadPage]=\"true\">\n            </app-grid>\n\n            <ng-template #gridChild2Template let-dataItem>\n                <app-grid #gridNhomXetNghiem pageSize=\"5\" additionalSearchString={{dataItem.Id}}\n                    [documentType]=\"documentType\" [autoHeight]=\"true\" [sort]=\"sortChild\" [showStt]=\"true\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                    [gridColumns]=\"gridDanhSachXetNghiemChild2Columns\" [urlGetData]=\"urlGetDataChild2\"\n                    [urlGetTotalPage]=\"urlGetTotalPageChild2\" [groups]=\"groupNhomXetNghiem\" [lazyLoadPage]=\"true\">\n                </app-grid>\n            </ng-template>\n\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, 'choDuyetKetQua')\"\n                        [(model)]=\"ketQuaXetNghiemSearch.ChoDuyetKetQua\" class=\"ml-2\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, 'choKetQua')\"\n                        [(model)]=\"ketQuaXetNghiemSearch.ChoKetQua\" class=\"ml-2\" label=\"Đang thực hiện\">\n                    </app-checkbox>\n\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, 'daCoKetQua')\"\n                        [(model)]=\"ketQuaXetNghiemSearch.DaCoKetQua\" class=\"ml-2\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"ketQuaXetNghiemSearch.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch()\"\n                            placeholder=\"Tìm kiếm theo Mã NB, Mã TN, Họ tên NB, Barcode\" />\n                        <button color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip\n                            title=\"Phím tắt: Ctrl + Q\" (click)=\"QuetMaQRCodeClick()\">\n                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                        </button>\n                    </div>\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat\"\n                        #tiepnhantu id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\"\n                        class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat\"\n                        #tiepnhanden id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\"\n                        class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n                     style=\"margin-left: 5px;\" (click)=\"Timkiem()\">Tìm kiếm</button>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridDanhSachXetNghiemColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                        title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\">\n</app-barcode>\n\n<ng-template #ngayNhanMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NgayNhanMauDisplay}}\n</ng-template>\n\n<ng-template #actionDanhSachXetNghiemTemplate let-dataItem>\n    <button *ngIf=\"dataItem.TrangThai == DaCoKQ && dataItem.IsDaDuyetAll == true\" kendoTooltip title=\"Hành động\"\n        [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n            <button (click)=\"print(dataItem.Id,dataItem.YeuCauTiepNhanId)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                <span>In Kết Quả</span>\n            </button>\n            <!-- <button (click)=\"download(dataItem.Id)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icDownload\"></mat-icon>\n                <span>Xuất File Kết Quả</span>\n            </button> -->\n        </ng-template>\n    </mat-menu>\n</ng-template>\n\n<ng-template #ngayThucHienTemplate let-dataItem>\n    {{dataItem.NgayThucHienDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetKQTemplate let-dataItem>\n    {{dataItem.NgayDuyetKQDisplay}}\n</ng-template>\n\n<ng-template #barcodeTemplate let-dataItem>\n    <a (click)=\"barcodeClick(dataItem)\">\n        {{dataItem.BarCode}}\n    </a>\n</ng-template>\n\n<ng-template #trangThaiTemplate let-dataItem>\n    <span\n        [ngStyle]=\"{'color': (dataItem.TrangThai == 1 ? 'red' : (dataItem.TrangThai == 2 ? 'orange' : (dataItem.TrangThai == 3 ? 'blue' : 'green') ) )}\">\n        {{dataItem.TrangThaiDisplay}}\n    </span>\n</ng-template>\n\n<ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <strong style=\"width: 100%;\">\n        {{value}}\n        <ul class='inline small ml-20'>\n            <li *ngFor=\"let item of dataItem.items[0].DanhSachLoaiMauTongCong\">\n                <span *ngIf=\"checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMau)\">\n                    <span *ngIf=\"!isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                        <span class='green'>&#10003;</span> {{item}}\n                    </span>\n                    <span *ngIf=\"isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                        <span class='red'>&times; </span> {{item}}\n                    </span>\n                </span>\n\n                <span *ngIf=\"!checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMau)\">\n                    {{item}}\n                </span>\n\n            </li>\n        </ul>\n\n        <a class='float-right' *ngIf=\"dataItem.items[0].YeuCauChayLai == true \n            && dataItem.items[0].DaDuyet == true\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"top\"\n            [tooltipTemplate]=\"templateInfo\" filter=\"*\" (mouseover)=\"setUpDataTooltip(dataItem)\" kendoTooltip>Yêu cầu\n            chạy lại XN</a>\n\n        <ng-template #templateInfo let-dataItem>\n            <div>\n                <span>Người yêu cầu: </span><span>{{displayToolTipGridNguoiYeuCau}}</span>\n            </div>\n            <div>\n                <span>Ngày yêu cầu: </span><span>{{displayToolTipGridNgayYeuCau}}</span>\n            </div>\n            <div>\n                <span>Lý do yêu cầu: </span><span>{{displayToolTipGridLyDoYeuCau}}</span>\n            </div>\n            <div>\n                <span>Người duyệt: </span><span>{{displayToolTipGridNguoiDuyet}}</span>\n            </div>\n            <div>\n                <span>Ngày duyệt: </span><span>{{displayToolTipGridNgayDuyet}}</span>\n            </div>\n        </ng-template>\n    </strong>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component.html":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <!-- <h3 class=\"sub-title\">Thông Tin Thẻ</h3> -->\n    <span>Còn các chỉ số chưa có kết quả: </span>\n    <ul style=\"max-height: 100px; height: 100px; overflow: auto;\">\n        <li *ngFor=\"let item of lstData\">\n            <span>&nbsp;&nbsp; + {{item.Ten}}<strong></strong></span>\n        </li>\n    </ul>\n\n    <div style=\"margin-top: 20px\">\n        <span>Bạn có chắc chắn muốn gởi duyệt kết quả mẫu này không?</span>\n    </div>\n\n    <div class=\"div-title-bottom\">\n        <button type=\"button\" mat-button class=\"mr-1\" (click)=\"Khong()\">Không</button>\n        <button type=\"button\" (click)=\"Co()\" color=\"primary\" mat-raised-button>Có</button>\n    </div>\n    \n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" style=\"padding-top: 0;\">\n    <!-- style=\"background: #e1f5fe;\"  -->\n    <fieldset class=\"{{(ketQuaXetNghiem != null && ketQuaXetNghiem.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n        <legend>Thông tin hành chính</legend>\n        <div fxFlex=\"100%\">\n            <ul class=\"inline\">\n                <li>Barcode:\n                    <strong>{{ketQuaXetNghiem.BarCodeID}}</strong>\n                </li>\n                <li>Mã NB:\n                    <strong>{{ketQuaXetNghiem.MaBN}}</strong>\n                </li>\n                <li>Mã TN:\n                    <strong>{{ketQuaXetNghiem.MaYeuCauTiepNhan}}</strong>\n                </li>\n                <li>Họ tên:\n                    <strong>{{ketQuaXetNghiem.HoTen}}</strong>\n                </li>\n                <li>Năm sinh:\n                    <strong>{{ketQuaXetNghiem.NamSinhDisplay}}</strong>\n                </li>\n                <li>\n                    Giới tính:\n                    <strong>{{ketQuaXetNghiem.GioiTinhDisplay}}</strong>\n                </li>\n                <li>Số thẻ BHYT:\n                    <strong>{{ketQuaXetNghiem.MaSoBHYT}}</strong>\n                </li>\n                <li>\n                    Đối tượng: <strong style=\"color: blue;\">{{ketQuaXetNghiem.DoiTuong}}</strong>\n                </li>\n                <li>\n                    Địa chỉ:\n                    <strong>{{ketQuaXetNghiem.DiaChi}}</strong>\n                </li>\n                <li>\n                    Chẩn đoán: <strong>{{ketQuaXetNghiem.ChanDoan}}</strong>\n                </li>\n                <li>\n                    Khoa chỉ định: <strong>{{ketQuaXetNghiem.KhoaChiDinh}}</strong>\n                </li>\n                <li>\n                    Phòng: <strong>{{ketQuaXetNghiem.Phong}}</strong>\n                </li>\n                <li>\n                    SĐT: <strong>{{ketQuaXetNghiem.SoDienThoai}}</strong>\n                </li>\n            </ul>\n        </div>\n    </fieldset>\n\n</div>\n\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"100%\" class=\"px-6  order-btn\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px\"\n        fxLayoutAlign=\"start center\" style=\"padding-top: 0.5rem;\">\n        <app-combobox fxFlex=\"30%\" fxFlex.sm=\"50%\" id=\"NhanVienThucHienId\" label=\"Người thực hiện\"\n            style=\"padding-top: 1.2rem;padding-bottom: 0;\" url=\"NhanVien/GetListLookupNhanVien\"\n            [(model)]=\"ketQuaXetNghiem.NhanVienThucHienId\" bind=\"true\" [disabled]=\"type == 4\" required=\"true\"\n            [validationerror]=\"'NhanVienThucHienId' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-textbox id=\"GhiChu\" fxFlex=\"60%\" fxFlex.sm=\"50%\" label=\"Ghi chú\" [(model)]=\"ketQuaXetNghiem.GhiChu\"\n            style=\"padding-top: 1.2rem;padding-bottom: 0;\" [disabled]=\"type == 4\" maxlength=\"1000\">\n        </app-textbox>\n        <div fxFlex=\"auto\" fxLayoutAlign=\"end center\" style=\"padding-top: 20px;\">\n            <button *ngIf=\"type != 4\" type=\"button\" (click)=\"luu()\" color=\"primary\" mat-raised-button>\n                <i class=\"ft-save\"></i> Lưu\n            </button>\n        </div>\n\n        <div class=\"px-1\" fxLayout=\"column\" style=\"padding-top: 0.5rem;\">\n            <div class=\"row mb-2\">\n                <fieldset class=\"mt-2\">\n                    <legend>Chi Tiết Kết Quả Xét Nghiệm</legend>\n                    <div *ngIf=\"gridDataSource != undefined\" fxFlex=\"100%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                        <app-grid fxFlex=\"100%\" [sort]=\"sort\" #gridChiTietKetQuaXn [documentType]=\"documentType\"\n                            [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\"\n                            [useActionDefault]=\"false\" [checkboxAble]=\"false\" [gridColumns]=\"gridColumns\"\n                            [gridDataSource]=\"gridDataSource\" heightToolbar=\"440\" [groups]=\"groups\" [pageable]=\"false\"\n                            [headerTemplate]=\"headerTemplate\" (extOnKeydownGrid)=\"onKeydownGrid($event)\">\n                        </app-grid>\n\n                        <ng-template #headerTemplate>\n                            <div class=\"div-header bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                                fxLayoutAlign=\"start center\">\n                                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\"\n                                    fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                    <input [formControl]=\"searchCtrl\"\n                                        class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                        name=\"searchString\" (ngModelChange)=\"searchChanges($event)\"\n                                        (keyup)=\"onKeySearchChanges($event)\" placeholder=\"Nhập từ khóa tìm kiếm\" />\n                                </div>\n                                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                                </button>\n\n                                <div fxFlex=\"50%\" class=\"order-color\">\n                                    <div class=\"set-color bluelight\"></div>\n                                    <p>DV chưa duyệt</p>\n                                    <div class=\"set-color black\"></div>\n                                    <p>Bình thường</p>\n                                    <div class=\"set-color blue\"></div>\n                                    <p>Bất thường</p>\n                                    <div class=\"set-color red\"></div>\n                                    <p>Nguy hiểm</p>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </div>\n                </fieldset>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #tenTemplate let-dataItem>\n    <span\n        [ngStyle]=\"{'padding-left':(dataItem.Level)*20+'px','font-weight':dataItem.IdChilds.length>0?'bold':'normal'}\">{{dataItem.Ten}}</span>\n</ng-template>\n<ng-template #nhomTemplate let-value=\"value\" let-dataItem let-index=\"rowIndex\" let-aggregates>\n    <p style=\"width: 100%;\" kendoTooltip>\n        <strong style=\"width: 100%;\">\n            <!-- <app-checkbox id=\"check_{{dataItem.items[0].NhomDichVuBenhVienId}}\" label=\"{{value}}\" fxFlex=\"10%\"\n                    [disabled]=\"dataItem.items[0].DisabledCheckBoxParent\" (modelChange)=\"checkBoxNhomChange($event,dataItem)\"\n                    [(model)]=\"dataItem.items[0].CheckBoxParent\">\n                </app-checkbox> -->\n            {{value}}\n            <ul class='inline small ml-20'>\n                <li *ngFor=\"let item of dataItem.items[0].DanhSachLoaiMau\">\n                    <span *ngIf=\"checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                        <!-- <span class='green'>&#10003;</span> {{item}} -->\n                        <span *ngIf=\"!isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                            <span class='green'>&#10003;</span> {{item}}\n                        </span>\n                        <span *ngIf=\"isMauKhongDat(item, dataItem.items[0].DanhSachLoaiMauKhongDat)\">\n                            <span class='red'>&times; </span> {{item}}\n                        </span>\n                    </span>\n\n                    <span *ngIf=\"!checkHiddenIcon(item, dataItem.items[0].DanhSachLoaiMauDaCoKetQua)\">\n                        <span class='red'></span> {{item}}\n                    </span>\n                </li>\n            </ul>\n\n            <a class='float-right' *ngIf=\"dataItem.items[0].YeuCauChayLai == true\n                    && dataItem.items[0].DaDuyet == true\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n                position=\"top\" [tooltipTemplate]=\"templateInfo\" filter=\"*\" (mouseover)=\"setUpDataTooltip(dataItem)\"\n                kendoTooltip>Yêu cầu chạy lại XN</a>\n\n            <ng-template #templateInfo let-dataItem>\n                <div>\n                    <span>Người yêu cầu: </span><span>{{displayToolTipGridNguoiYeuCau}}</span>\n                </div>\n                <div>\n                    <span>Ngày yêu cầu: </span><span>{{displayToolTipGridNgayYeuCau}}</span>\n                </div>\n                <div>\n                    <span>Lý do yêu cầu: </span><span>{{displayToolTipGridLyDoYeuCau}}</span>\n                </div>\n                <div>\n                    <span>Người duyệt: </span><span>{{displayToolTipGridNguoiDuyet}}</span>\n                </div>\n                <div>\n                    <span>Ngày duyệt: </span><span>{{displayToolTipGridNgayDuyet}}</span>\n                </div>\n            </ng-template>\n        </strong>\n    </p>\n\n\n</ng-template>\n<!-- ,'font-weight':dataItem.ToDamGiaTri?'bold':'normal' -->\n<ng-template #kqCuTemplate let-dataItem>\n    <!-- <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red')}\">{{dataItem.GiaTriCu}}</span> -->\n    <div *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\" kendoTooltip\n        (mouseover)=\"TooltipCustomNgayDuyet(dataItem)\" #tooltip=\"kendoTooltip\" position=\"left\"\n        [tooltipTemplate]=\"(dataItem.GiaTriCu!=null && dataItem.GiaTriCu !='') ? templateInfoNgayDuyet: ''\" filter=\"*\"\n        [ngStyle]=\"{'background-color':dataItem.GiaTriCu !=null && dataItem.GiaTriCu !='' ? 'deepskyblue' : ''}\">\n        {{dataItem.GiaTriCu}}</div>\n</ng-template>\n\n<ng-template #templateInfoNgayDuyet let-dataItem>\n    <span class=\"tooltiptext\">\n        {{ngayDuyet}}\n    </span>\n</ng-template>\n\n<!-- ,'font-weight':(dataItem.ToDamGiaTri?'bold':'normal' -->\n<ng-template #kqTuMayTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red')}\">{{dataItem.GiaTriTuMay}}</span>\n</ng-template>\n<!-- ,'font-weight':dataItem.ToDamGiaTri?'bold':'normal' -->\n<ng-template #kqDuyetTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [ngStyle]=\"{'color':dataItem.LoaiKetQuaTuMay == 1 ? 'black' : (dataItem.LoaiKetQuaTuMay == 2 ? 'blue' : 'red')}\">{{dataItem.GiaTriDuyet}}</span>\n</ng-template>\n\n<ng-template #kqNhapTayTemplate let-dataItem kendoTooltip>\n    <app-textbox kendoTooltip *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [disabled]=\"dataItem.DaDuyetChiTiet || type == 4 || dataItem.DaDuyet == true\" class=\"no-label\"\n        id=\"GiaTriNhapTay-{{dataItem.Id}}\" label=\" \" (modelChange)=\"CheckHighlight(dataItem, $event)\"\n        (mouseover)=\"TooltipCustom(dataItem.GiaTriNhapTay)\" #tooltip=\"kendoTooltip\" position=\"left\"\n        [tooltipTemplate]=\"(dataItem.GiaTriNhapTay!=null && dataItem.GiaTriNhapTay !='') ? templateInfo: ''\" filter=\"*\"\n        maxlength=\"500\" [(model)]=\"dataItem.GiaTriNhapTay\">\n    </app-textbox>\n</ng-template>\n\n<ng-template #templateInfo let-dataItem>\n    <span class=\"tooltiptext\">\n        {{kqNhapTay}}\n    </span>\n</ng-template>\n\n<ng-template #damKQTemplate let-dataItem>\n    <app-checkbox *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\"\n        [disabled]=\"dataItem.DaDuyetChiTiet || type == 4 || dataItem.DaDuyet == true\" id=\"damKetQua{{dataItem.Id}}\"\n        label=\" \" [(model)]=\"dataItem.ToDamGiaTri\" class=\"pl-2\"></app-checkbox>\n</ng-template>\n<ng-template #chiSoBinhThuongTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.CSBT}}</span>\n</ng-template>\n<ng-template #donViTinhTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.DonVi}}</span>\n</ng-template>\n<ng-template #gioTiepNhanTemplate let-dataItem>\n    <span\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemGuiYeuCauDisplay}}</span>\n</ng-template>\n<ng-template #gioNhanMauTemplate let-dataItem>\n    <span\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemNhanKetQuaDisplay}}</span>\n</ng-template>\n<ng-template #mayXNTemplate let-dataItem>\n    <!-- <app-combobox [disabled]=\"dataItem.DaDuyetChiTiet || type == 4 || dataItem.DaDuyet == true\"\n        id=\"MayXetNghiemId-{{dataItem.Id}}\" popupSettings=\"\" label=\" \" (openCombobox)=\"openCombobox($event)\"\n        (modelChange)=\"mayXNChange($event, dataItem.Level, dataItem.DichVuXetNghiemId)\" class=\"no-label\"\n        url=\"KetQuaXetNghiem/GetListLookupMayXetNghiem\" [(model)]=\"dataItem.MayXetNghiemId\" bind=\"true\">\n    </app-combobox> -->\n\n    <app-combobox [disabled]=\"dataItem.DaDuyetChiTiet || type == 4 || dataItem.DaDuyet == true\"\n        id=\"MayXetNghiemId-{{dataItem.Id}}\" popupSettings=\"\" label=\" \" (openCombobox)=\"openCombobox($event)\"\n        (modelChange)=\"mayXNChange($event, dataItem.Level, dataItem.DichVuXetNghiemId)\" class=\"no-label\" bind=\"true\"\n        [data]=\"phongLookupItemVos\" [(model)]=\"dataItem.MayXetNghiemId\">\n    </app-combobox>\n\n</ng-template>\n<ng-template #nguoiDuyetTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.NguoiDuyet}}</span>\n</ng-template>\n<ng-template #ngayDuyetTemplate let-dataItem>\n    <span\n        *ngIf=\"dataItem.Level!=1 || (dataItem.Level==1 && dataItem.IdChilds.length==0)\">{{dataItem.ThoiDiemDuyetKetQuaDisplay}}</span>\n</ng-template>\n\n\n<ng-template #checkBoxTemplate let-dataItem>\n    <input *ngIf=\"dataItem.Level==1\" [disabled]=\"dataItem.DaGoiDuyet == true\" type=\"checkbox\" id=\"vehicle1\"\n        [(ngModel)]=\"dataItem.CheckBox\" (ngModelChange)=\"checkBoxChange($event,dataItem)\" name=\"vehicle1\">\n</ng-template>\n<ng-template #checkBoxHeaderTemplate let-dataItem>\n    <input type=\"checkbox\" id=\"vehicle1\" (ngModelChange)=\"checkBoxAllChange($event)\" name=\"vehicle1\"\n        [(ngModel)]=\"checkAll\">\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Xét Nghiệm',Path:''}\n        ,{Title:'Kết Quả Xét Nghiệm',Path:'/xet-nghiem/ket-qua-new', queryParams: {holdQuery : true}, Active: true}\n        \n            ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"padding-top: 0.5rem;\">\n                <h2 style=\"margin-right: 15px !important; width: 40%;\" class=\"title m-0\">Chi Tiết Kết Quả Xét Nghiệm\n                </h2>\n                <div class=\"bg-app-bar px-3 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchStringBarCode\" [(ngModel)]=\"search.SearchStringBarCode\"\n                            (keyup)=\"onKey($event)\" maxlength=\"10\" (ngModelChange)=\"searchChangesNangCao($event)\"\n                            placeholder=\"Nhập barcode...\" />\n                        <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" kendoTooltip\n                            title=\"Quét mã vạch thẻ\" class=\"button-barcoe-in-search\">\n                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                        </button>\n                    </div>\n\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"search.ThoiDiemGoiDuyetTuFormat\" #tiepnhantu\n                        id=\"ThoiDiemGoiDuyetTuFormat\" label=\"Từ ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"search.ThoiDiemGoiDuyetDenFormat\" #tiepnhanden\n                        id=\"ThoiDiemGoiDuyetDenFormat\" label=\"Đến ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datetimepicker>\n                </div>\n                <span style=\"text-align: right; width: 60%;\"\n                    [ngStyle]=\"{'color': (titleString == ChoKQChayLai ? 'red' : (titleString == ChoKQ ? 'orange' : (titleString == ChoDuyetKQ ? 'blue' : 'green') ) )}\">\n                    <b>{{titleString}}</b>\n                </span>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"padding-top: 0.1rem;\">\n                <app-ket-qua-xet-nghiem-new-shared (trangThaiIn)=\"getTrangThaiIn($event)\">\n                </app-ket-qua-xet-nghiem-new-shared>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n}\n\n.container-iframe iframe {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhLW5ldy9rZXQtcXVhLXBoaWV1LW5ldy1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHhldC1uZ2hpZW1cXHhldC1uZ2hpZW0ta2V0LXF1YS1uZXdcXGtldC1xdWEtcGhpZXUtbmV3LXBvcHVwXFxrZXQtcXVhLXBoaWV1LW5ldy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhLW5ldy9rZXQtcXVhLXBoaWV1LW5ldy1wb3B1cC9rZXQtcXVhLXBoaWV1LW5ldy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS94ZXQtbmdoaWVtLWtldC1xdWEtbmV3L2tldC1xdWEtcGhpZXUtbmV3LXBvcHVwL2tldC1xdWEtcGhpZXUtbmV3LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: KetQuaPhieuNewPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaPhieuNewPopupComponent", function() { return KetQuaPhieuNewPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");








let KetQuaPhieuNewPopupComponent = class KetQuaPhieuNewPopupComponent {
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
KetQuaPhieuNewPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
KetQuaPhieuNewPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-qua-phieu-new-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-phieu-new-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-phieu-new-popup.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], KetQuaPhieuNewPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS1uZXcva2V0LXF1YS14ZXQtbmdoaWVtLW5ldy1kZXRhaWwva2V0LXF1YS14ZXQtbmdoaWVtLW5ldy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemNewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemNewDetailComponent", function() { return KetQuaXetNghiemNewDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KetQuaXetNghiemNewDetailComponent = class KetQuaXetNghiemNewDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
KetQuaXetNghiemNewDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-new-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-new-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-new-detail.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.scss")).default]
    })
], KetQuaXetNghiemNewDetailComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS1uZXcva2V0LXF1YS14ZXQtbmdoaWVtLW5ldy1saXN0L2tldC1xdWEteGV0LW5naGllbS1uZXctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemNewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemNewListComponent", function() { return KetQuaXetNghiemNewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _xet_nghiem_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xet-nghiem-ket-qua-new.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9__);
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
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/constants/xet-nghiem-constant */ "./src/app/shared/constants/xet-nghiem-constant.ts");
/* harmony import */ var _duyet_ket_qua_duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../duyet-ket-qua/duyet-ket-qua.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _ket_qua_phieu_new_popup_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.ts");
/* harmony import */ var _duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component.ts");






























let KetQuaXetNghiemNewListComponent = class KetQuaXetNghiemNewListComponent {
    constructor(dialog, router, route, authService, notificationService, location, renderer, apiService) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.notificationService = notificationService;
        this.location = location;
        this.renderer = renderer;
        this.apiService = apiService;
        this.baseRoute = "/xet-nghiem/ket-qua-new";
        this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9___default.a;
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
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KetQuaXetNghiem;
        this.ketQuaXetNghiemSearch = new _xet_nghiem_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_2__["KetQuaXetNghiemNewSearch"]();
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"];
        this.addtionStringDefault = null;
        this.query = null;
        this.additionalSearchString = null;
        this.displayToolTipGridNguoiYeuCau = null;
        this.displayToolTipGridNgayYeuCau = null;
        this.displayToolTipGridLyDoYeuCau = null;
        this.displayToolTipGridNguoiDuyet = null;
        this.displayToolTipGridNgayDuyet = null;
        this.inPhieuDuyetKetQua = new _duyet_ket_qua_duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_25__["PhieuDuyetKetQua"]();
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
        this.ketQuaXetNghiemSearch = new _xet_nghiem_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_2__["KetQuaXetNghiemNewSearch"]();
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
                this.router.navigate(["/xet-nghiem/ket-qua-new" + "/cap-nhat/" + dataItem.Id + "/1/" + dataItem.YeuCauTiepNhanId]);
            }
            else if (dataItem.TrangThai == 1) {
                this.router.navigate(["/xet-nghiem/ket-qua-new" + "/cap-nhat/" + dataItem.Id + "/2/" + dataItem.YeuCauTiepNhanId]);
            }
            else if (dataItem.TrangThai == 3) {
                this.router.navigate(["/xet-nghiem/ket-qua-new" + "/cap-nhat/" + dataItem.Id + "/3/" + dataItem.YeuCauTiepNhanId]);
            }
            else if (dataItem.TrangThai == 4) {
                this.router.navigate(["/xet-nghiem/ket-qua-new" + "/cap-nhat/" + dataItem.Id + "/4/" + dataItem.YeuCauTiepNhanId]);
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    CheckboxChange(event, text) {
        if (text === 'choKetQua') {
            this.ketQuaXetNghiemSearch.ChoKetQua = event;
        }
        if (text === 'choDuyetKetQua') {
            this.ketQuaXetNghiemSearch.ChoDuyetKetQua = event;
        }
        if (text === 'daCoKetQua') {
            this.ketQuaXetNghiemSearch.DaCoKetQua = event;
        }
        //this.Timkiem();
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
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].getItem("additionalSearchStringKetQuaXetNghiemNew");
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
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].removeItem("additionalSearchStringKetQuaXetNghiemNew");
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
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].setItem("additionalSearchStringKetQuaXetNghiemNew", queryString);
        this.gridParent.search();
    }
    exportExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"], {
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
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"], {
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
                dialogRef = this.dialog.open(_duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_29__["ChonLoaiKetQuaXetNghiemPopupComponent"], {
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
                            this.apiService.post('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', this.inPhieuDuyetKetQua).subscribe(arrHtml => {
                                this.dialog.open(_ket_qua_phieu_new_popup_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_28__["KetQuaPhieuNewPopupComponent"], {
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
};
KetQuaXetNghiemNewListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('actionDanhSachXetNghiemTemplate', { static: true })
], KetQuaXetNghiemNewListComponent.prototype, "actionDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('barcodeTemplate', { static: true })
], KetQuaXetNghiemNewListComponent.prototype, "barcodeTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('trangThaiTemplate', { static: true })
], KetQuaXetNghiemNewListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ngayThucHienTemplate', { static: true })
], KetQuaXetNghiemNewListComponent.prototype, "ngayThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ngayDuyetKQTemplate', { static: true })
], KetQuaXetNghiemNewListComponent.prototype, "ngayDuyetKQTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('gridParent', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_19__["GridComponent"], static: true })
], KetQuaXetNghiemNewListComponent.prototype, "gridParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], KetQuaXetNghiemNewListComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('document:keydown', ['$event'])
], KetQuaXetNghiemNewListComponent.prototype, "keyEvent", null);
KetQuaXetNghiemNewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-new-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-new-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-new-list.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.scss")).default]
    })
], KetQuaXetNghiemNewListComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-title-bottom {\n  margin-top: 30px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhLW5ldy9rZXQtcXVhLXhldC1uZ2hpZW0tbmV3LXBvcHVwLWdvaS1kdXlldC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHhldC1uZ2hpZW1cXHhldC1uZ2hpZW0ta2V0LXF1YS1uZXdcXGtldC1xdWEteGV0LW5naGllbS1uZXctcG9wdXAtZ29pLWR1eWV0XFxrZXQtcXVhLXhldC1uZ2hpZW0tbmV3LXBvcHVwLWdvaS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhLW5ldy9rZXQtcXVhLXhldC1uZ2hpZW0tbmV3LXBvcHVwLWdvaS1kdXlldC9rZXQtcXVhLXhldC1uZ2hpZW0tbmV3LXBvcHVwLWdvaS1kdXlldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS1uZXcva2V0LXF1YS14ZXQtbmdoaWVtLW5ldy1wb3B1cC1nb2ktZHV5ZXQva2V0LXF1YS14ZXQtbmdoaWVtLW5ldy1wb3B1cC1nb2ktZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LXRpdGxlLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSIsIi5kaXYtdGl0bGUtYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemNewPopupGoiDuyetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemNewPopupGoiDuyetComponent", function() { return KetQuaXetNghiemNewPopupGoiDuyetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let KetQuaXetNghiemNewPopupGoiDuyetComponent = class KetQuaXetNghiemNewPopupGoiDuyetComponent {
    constructor(data, dialog, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.lstData = new Array();
        this.lstData = data;
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
KetQuaXetNghiemNewPopupGoiDuyetComponent.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
KetQuaXetNghiemNewPopupGoiDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-new-popup-goi-duyet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-new-popup-goi-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-new-popup-goi-duyet.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], KetQuaXetNghiemNewPopupGoiDuyetComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".span-result-information {\n  font-weight: bold;\n}\n\n.content-2 {\n  margin-top: 5px !important;\n}\n\n.content-1 {\n  border-bottom: 1px solid var(--foreground-divider);\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\ntable {\n  width: 100%;\n  background-color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ntable th {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\ntable th.w-250 {\n  width: 250px;\n}\n\ntable tr.bg-light-red {\n  background-color: #eaa3a3;\n}\n\n.order-color {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.order-color .set-color {\n  padding: 10px 40px;\n}\n\n.order-color .set-color.black {\n  background-color: black;\n}\n\n.order-color .set-color.red {\n  background-color: red;\n}\n\n.order-color .set-color.blue {\n  background-color: blue;\n}\n\n.order-color .set-color.deepskyblue {\n  background-color: deepskyblue;\n}\n\n.order-color .set-color.bluelight {\n  background-color: #b3e5fc;\n}\n\n.div-header {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhLW5ldy9rZXQtcXVhLXhldC1uZ2hpZW0tbmV3LXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHhldC1uZ2hpZW1cXHhldC1uZ2hpZW0ta2V0LXF1YS1uZXdcXGtldC1xdWEteGV0LW5naGllbS1uZXctc2hhcmVkXFxrZXQtcXVhLXhldC1uZ2hpZW0tbmV3LXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1rZXQtcXVhLW5ldy9rZXQtcXVhLXhldC1uZ2hpZW0tbmV3LXNoYXJlZC9rZXQtcXVhLXhldC1uZ2hpZW0tbmV3LXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0RBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS94ZXQtbmdoaWVtLWtldC1xdWEtbmV3L2tldC1xdWEteGV0LW5naGllbS1uZXctc2hhcmVkL2tldC1xdWEteGV0LW5naGllbS1uZXctc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYW4tcmVzdWx0LWluZm9ybWF0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50LTIge1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG50YWJsZSB0aC53LTI1MCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxudGFibGUgdHIuYmctbGlnaHQtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYTNhMztcbn1cblxuLm9yZGVyLWNvbG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvciB7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuZGVlcHNreWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuYmx1ZWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmYztcbn1cblxuLmRpdi1oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn0iLCIuc3Bhbi1yZXN1bHQtaW5mb3JtYXRpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQtMiB7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRhYmxlIHRoLnctMjUwIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG50YWJsZSB0ci5iZy1saWdodC1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFhM2EzO1xufVxuXG4ub3JkZXItY29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yIHtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5vcmRlci1jb2xvciAuc2V0LWNvbG9yLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5kZWVwc2t5Ymx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibHVlbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZjO1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemNewSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemNewSharedComponent", function() { return KetQuaXetNghiemNewSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/constants/xet-nghiem-constant */ "./src/app/shared/constants/xet-nghiem-constant.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _xet_nghiem_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../xet-nghiem-ket-qua-new.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.model.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");



















let KetQuaXetNghiemNewSharedComponent = class KetQuaXetNghiemNewSharedComponent {
    constructor(cdRef, dialog, baseService, route, notificationService, router, apiService, authService, errorService) {
        this.cdRef = cdRef;
        this.dialog = dialog;
        this.baseService = baseService;
        this.route = route;
        this.notificationService = notificationService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.errorService = errorService;
        this.ChoKQChayLai = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_9__["TrangThaiKetQuaXetNghiemConst"].ChoKQChayLai;
        this.ChoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_9__["TrangThaiKetQuaXetNghiemConst"].ChoKQ;
        this.ChoDuyetKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_9__["TrangThaiKetQuaXetNghiemConst"].ChoDuyetKQ;
        this.DaCoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_9__["TrangThaiKetQuaXetNghiemConst"].DaCoKQ;
        this.kqNhapTay = null;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"];
        this.showToastNotifyError = false;
        this.gridColumns = [];
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KetQuaXetNghiem;
        this.disableNhom = false;
        this.urlGetDataParent = "";
        this.urlGetTotalPageParent = "";
        this.ketQuaXetNghiem = new _xet_nghiem_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_12__["KetQuaXetNghiemViewKetQuaNewViewModel"]();
        this.isSelectDuocPham = false;
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
        this.phongLookupItemVos = [];
        this.checkAll = null;
        this.checkBoxNhom = null;
        this.groups = [{ field: 'Nhom' }];
        this.currentCellFocused = null;
        this.ngayDuyet = null;
        this.id = this.route.snapshot.params.id;
        this.type = this.route.snapshot.params.type;
        //console.log("constructor = ", this.id, this.type);
    }
    ngOnInit() {
        this.gridColumns = [
            { Field: "Nhom", Title: "", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
            // { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },//, Hidden: this.type == 4
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
        this.getDataMayXN();
    }
    ngAfterContentInit() {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
    }
    getDataMayXN() {
        let queryInfo = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_18__["LookupQueryInfo"]();
        this.apiService.post("KetQuaXetNghiem/GetListLookupMayXetNghiem", queryInfo)
            .subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.phongLookupItemVos = resultData;
            }
        });
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
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
            let search = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].removeVietnamese(this.searchString).toLowerCase().trim().replace(/đ/g, 'd');
            this.dataChildDisplay = [...this.ketQuaXetNghiem.dataChild].filter(o => (o.Ten != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].removeVietnamese(o.Ten).toLocaleLowerCase().trim().indexOf(search) != -1)
                || (o.DonVi != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].removeVietnamese(o.DonVi).toLocaleLowerCase().trim().indexOf(search) != -1)
                || (o.TenMayXetNghiem != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].removeVietnamese(o.TenMayXetNghiem).toLocaleLowerCase().trim().indexOf(search) != -1)
                || (o.NguoiDuyet != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].removeVietnamese(o.NguoiDuyet).toLocaleLowerCase().trim().indexOf(search) != -1)
                || (o.NgayDuyetDisplay != null && src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].removeVietnamese(o.NgayDuyetDisplay).toLocaleLowerCase().trim().indexOf(search) != -1));
        }
        this.ketQuaXetNghiem.dataChild.forEach(dataItem => {
            if ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')
                && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) {
                if (dataItem.Level == 1 && dataItem.IdChilds.length == 0) {
                    dataItem.HighLightClass =
                        ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                            && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                }
                else if (dataItem.Level == 1 && dataItem.IdChilds.length > 0) {
                    dataItem.HighLightClass = null;
                }
                if (dataItem.Level != 1) {
                    dataItem.HighLightClass =
                        ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                            && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                }
            }
            else {
                if (dataItem.DaDuyet != true) {
                    dataItem.HighLightClass = 'bg-row-lightblue2';
                }
            }
        });
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
        // console.log("gridDataSource = ", this.gridDataSource);
        if (!this.cdRef.destroyed) {
            this.cdRef.detectChanges();
        }
        if (this.gridChiTietKetQuaXn != undefined) {
            this.gridChiTietKetQuaXn._gridDataSource = Object.assign({}, this.gridDataSource);
            this.gridChiTietKetQuaXn.setDataSource();
            //this.cdRef.detectChanges();
        }
    }
    getSharedDataGoiDuyet() {
        let lstDataCheckBoxCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
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
    setUpDataTooltip(dataItem) {
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
        let giaTriNhap = Number(currentValue);
        if (!isNaN(giaTriNhap) || currentValue == '') {
            if ((dataItem.GiaTriMin == null || dataItem.GiaTriMin == '') && (dataItem.GiaTriMax == null || dataItem.GiaTriMax == '') || currentValue == '') {
                dataItem.ToDamGiaTri = false;
            }
            else if (dataItem.GiaTriMin != null && dataItem.GiaTriMax == null) {
                let min = Number(dataItem.GiaTriMin);
                if (giaTriNhap < min) {
                    dataItem.ToDamGiaTri = true;
                }
                else {
                    dataItem.ToDamGiaTri = false;
                }
            }
            else if (dataItem.GiaTriMin == null && dataItem.GiaTriMax != null) {
                let max = Number(dataItem.GiaTriMax);
                if (giaTriNhap > max) {
                    dataItem.ToDamGiaTri = true;
                }
                else {
                    dataItem.ToDamGiaTri = false;
                }
            }
            else {
                let min = Number(dataItem.GiaTriMin);
                let max = Number(dataItem.GiaTriMax);
                if (giaTriNhap < min || giaTriNhap > max) {
                    dataItem.ToDamGiaTri = true;
                }
                else {
                    dataItem.ToDamGiaTri = false;
                }
            }
        }
        else {
            dataItem.ToDamGiaTri = false;
        }
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
            let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
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
            this.gridChiTietKetQuaXn._gridDataSource = Object.assign({}, lstDataCurrent);
            this.gridChiTietKetQuaXn.setDataSource();
        }
    }
    checkBoxChange(event, dataItem) {
        let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
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
        this.gridChiTietKetQuaXn._gridDataSource = Object.assign({}, lstDataCurrent);
        this.gridChiTietKetQuaXn.setDataSource();
    }
    checkBoxAllChange(event) {
        let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
        this.checkAll = event;
        lstDataCurrent.forEach(element => {
            if (element.DaGoiDuyet != true) {
                element.CheckBox = event;
                element.CheckBoxParent = event;
            }
        });
        this.gridChiTietKetQuaXn._gridDataSource = Object.assign({}, lstDataCurrent);
        this.gridChiTietKetQuaXn.setDataSource();
    }
    checkBoxNhomChange(event, data) {
        data.items.forEach(element => {
            if (element.Level == 1 && element.DaGoiDuyet == null) {
                element.CheckBox = event;
                element.CheckBoxParent = event;
            }
        });
        let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
        if (lstDataCurrent.some(x => x.CheckBoxParent != true && x.Level == 1)) {
            this.checkAll = false;
        }
        else {
            this.checkAll = true;
        }
        this.gridChiTietKetQuaXn._gridDataSource = Object.assign({}, lstDataCurrent);
        this.gridChiTietKetQuaXn.setDataSource();
    }
    TooltipCustom(dataItem) {
        if (dataItem != null && dataItem != '') {
            this.kqNhapTay = dataItem;
        }
        else {
            this.kqNhapTay = null;
        }
    }
    updateDataSauKhiLuu(dataChilds) {
        let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
        lstDataCurrent.forEach(element => {
            let dataChild = dataChilds.find(o => o.Id == element.Id);
            if (dataChild) {
                element.ThoiDiemNhanKetQuaDisplay = dataChild.ThoiDiemNhanKetQuaDisplay;
            }
        });
        this.gridChiTietKetQuaXn._gridDataSource = Object.assign({}, lstDataCurrent);
        this.gridChiTietKetQuaXn.setDataSource();
    }
    luu() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
            self.validationErrors = null;
            self.baseService.update(self.ketQuaXetNghiem).subscribe((resData) => {
                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                self.updateDataSauKhiLuu(resData);
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (self.showToastNotifyError == true) {
                    var mess = self.errorService.getValidationErrors(err);
                    if (mess != null) {
                        self.notificationService.showError(mess);
                    }
                }
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
        }
    }
    onKeydownGrid(obj) {
        var self = this;
        if (obj.FocusGridContent == true && obj.Event.code === "Enter" || obj.Event.code === "NumpadEnter" || obj.Event.code === 'ArrowRight' || obj.Event.code === 'ArrowLeft'
        //||e.code === 'ArrowDown'||e.code === 'ArrowUp'
        ) {
            setTimeout(function () {
                var cellFocused = obj.Sender.focusCell();
                if (obj.Event.code === "Enter" || obj.Event.code === "NumpadEnter") {
                    if (obj.Event.target.id.indexOf('GiaTriNhapTay-') >= 0) {
                        let id = Number(obj.Event.target.id.replace('GiaTriNhapTay-', ''));
                        let dataAll = [];
                        obj.Sender.data.data.forEach(item => {
                            item.items.filter(z => !z.DaDuyet).forEach(e => {
                                dataAll.push(e);
                            });
                        });
                        let index = dataAll.findIndex((z => z.Id == id));
                        let dataNext = dataAll[index + 1];
                        if (dataNext != undefined && dataNext != null) {
                            let idNext = null;
                            if (dataNext.IdChilds.length > 0 && dataNext.Level != 2 && dataNext.Level != 3) {
                                idNext = dataAll[index + 2].Id;
                            }
                            else {
                                idNext = dataAll[index + 1].Id;
                            }
                            // document.getElementById("GiaTriNhapTay-" + dataNext).focus();
                            $(document).ready(function () {
                                // $('#introdukt').focus()
                                // $('#introdukt').select()
                                //or if you want to be more efficient and use less characters, chain it
                                $("#GiaTriNhapTay-" + idNext).focus().select();
                            });
                        }
                    }
                    //Action on Đậm KQ
                    if (cellFocused != undefined && cellFocused.dataItem != null) {
                        if (cellFocused.colIndex == 4) {
                            cellFocused.dataItem.ToDamGiaTri = cellFocused.dataItem.ToDamGiaTri == true ? false : true;
                        }
                    }
                    //Action on Máy XN
                    if (cellFocused != undefined && cellFocused.dataItem != null) {
                        if (cellFocused.colIndex == 9) {
                            let id = cellFocused.dataItem.Id;
                            let dataAll = [];
                            obj.Sender.data.data.forEach(item => {
                                item.items.filter(z => !z.DaDuyet).forEach(e => {
                                    dataAll.push(e);
                                });
                            });
                            let index = dataAll.findIndex((z => z.Id == id));
                            let dataNext = dataAll[index + 1];
                            if (dataNext != undefined && dataNext != null) {
                                let idNext = null;
                                if (dataNext.IdChilds.length > 0 && dataNext.Level != 2 && dataNext.Level != 3) {
                                    idNext = dataAll[index + 2].Id;
                                }
                                else {
                                    idNext = dataAll[index + 1].Id;
                                }
                                // document.getElementById("GiaTriNhapTay-" + dataNext).focus();
                                $(document).ready(function () {
                                    $("#MayXetNghiemId-" + idNext + " input").focus();
                                });
                            }
                        }
                    }
                }
                else {
                    if (obj.Event.code === 'ArrowRight' || obj.Event.code === 'ArrowLeft' || obj.Event.code === 'ArrowDown' || obj.Event.code === 'ArrowUp') {
                        if (cellFocused != undefined && cellFocused.dataItem != null) {
                            //Action on KQ nhập tay
                            if (cellFocused.colIndex == 3 || cellFocused.colIndex == 9) {
                                //Đang focus vào input mà di chuyển phím thì nó phải nhấn 2 lần mới ra khỏi input dc, chỗ này xứ lý vấn đề đó
                                if (self.currentCellFocused != null && (self.currentCellFocused.colIndex != cellFocused.colIndex || self.currentCellFocused.rowIndex != cellFocused.rowIndex)) {
                                    if (cellFocused.colIndex == 3) {
                                        $("#GiaTriNhapTay-" + cellFocused.dataItem.Id).focus().select();
                                    }
                                    else if (cellFocused.colIndex == 9) {
                                        $("#MayXetNghiemId-" + cellFocused.dataItem.Id + " input").focus();
                                    }
                                }
                                else {
                                    var nextCellFocus = null;
                                    if (obj.Event.code === 'ArrowRight') {
                                        nextCellFocus = self.gridChiTietKetQuaXn.grid.focusCell(cellFocused.rowIndex, cellFocused.colIndex + 1);
                                    }
                                    if (obj.Event.code === 'ArrowLeft') {
                                        nextCellFocus = self.gridChiTietKetQuaXn.grid.focusCell(cellFocused.rowIndex, cellFocused.colIndex - 1);
                                    }
                                    if (obj.Event.code === 'ArrowDown') {
                                        nextCellFocus = self.gridChiTietKetQuaXn.grid.focusCell(cellFocused.rowIndex + 1, cellFocused.colIndex);
                                    }
                                    if (obj.Event.code === 'ArrowUp') {
                                        nextCellFocus = self.gridChiTietKetQuaXn.grid.focusCell(cellFocused.rowIndex - 1, cellFocused.colIndex);
                                    }
                                    if (nextCellFocus != undefined && nextCellFocus.dataItem != null) {
                                        if (cellFocused.colIndex == 3) {
                                            $("#GiaTriNhapTay-" + nextCellFocus.dataItem.Id).focus().select();
                                        }
                                        else if (cellFocused.colIndex == 9) {
                                            $("#MayXetNghiemId-" + nextCellFocus.dataItem.Id + " input").focus();
                                        }
                                        cellFocused = nextCellFocus;
                                    }
                                }
                            }
                        }
                    }
                }
                self.cdRef.detectChanges();
                self.currentCellFocused = cellFocused;
            });
        }
    }
    openCombobox(event) {
        if (event) {
            this.isSelectDuocPham = true;
        }
        else {
            this.isSelectDuocPham = false;
        }
    }
    TooltipCustomNgayDuyet(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            let valueObj = {
                YeuCauTiepNhanId: dataItem.YeuCauTiepNhanId,
                DichVuXetNghiemId: dataItem.DichVuXetNghiemId,
                DichVuXetNghiemTen: dataItem.Ten,
                KetQuaXetNghiemChiTietId: dataItem.Id
            };
            this.apiService.post("DuyetKetQuaXetNghiem/GetNgayDuyetKetQuaCu", valueObj).subscribe(resultData => {
                if (resultData != null && resultData != undefined) {
                    this.ngayDuyet = resultData;
                }
            }, () => {
            });
        }
        else {
            this.ngayDuyet = null;
        }
    }
    getSharedDataLuu() {
        return this.ketQuaXetNghiem;
    }
};
KetQuaXetNghiemNewSharedComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_15__["ErrorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], KetQuaXetNghiemNewSharedComponent.prototype, "trangThaiIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "tenTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqCuTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "kqCuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqTuMayTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "kqTuMayTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqNhapTayTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "kqNhapTayTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kqDuyetTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "kqDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('damKQTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "damKQTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiSoBinhThuongTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "chiSoBinhThuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donViTinhTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "donViTinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioTiepNhanTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "gioTiepNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioNhanMauTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "gioNhanMauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mayXNTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "mayXNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiDuyetTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "nguoiDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "checkBoxTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "checkBoxHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChiTietKetQuaXn', { static: false })
], KetQuaXetNghiemNewSharedComponent.prototype, "gridChiTietKetQuaXn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomTemplate', { static: true })
], KetQuaXetNghiemNewSharedComponent.prototype, "nhomTemplate", void 0);
KetQuaXetNghiemNewSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-new-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-new-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-new-shared.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.scss")).default]
    })
], KetQuaXetNghiemNewSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0ta2V0LXF1YS1uZXcva2V0LXF1YS14ZXQtbmdoaWVtLW5ldy11cGRhdGUva2V0LXF1YS14ZXQtbmdoaWVtLW5ldy11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: KetQuaXetNghiemNewUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemNewUpdateComponent", function() { return KetQuaXetNghiemNewUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/constants/xet-nghiem-constant */ "./src/app/shared/constants/xet-nghiem-constant.ts");
/* harmony import */ var _duyet_ket_qua_duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../duyet-ket-qua/duyet-ket-qua.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.model.ts");
/* harmony import */ var _ket_qua_xet_nghiem_new_shared_ket_qua_xet_nghiem_new_shared_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.ts");
/* harmony import */ var _duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component.ts");
/* harmony import */ var _ket_qua_phieu_new_popup_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _duyet_ket_qua_new_duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../duyet-ket-qua-new/duyet-ket-qua-new.model */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _xet_nghiem_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../xet-nghiem-ket-qua-new.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.model.ts");























let KetQuaXetNghiemNewUpdateComponent = class KetQuaXetNghiemNewUpdateComponent {
    constructor(router, route, baseService, apiService, authService, dialog, notificationService, errorService) {
        this.router = router;
        this.route = route;
        this.baseService = baseService;
        this.apiService = apiService;
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.errorService = errorService;
        this.ketQuaXetNghiem = new _xet_nghiem_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_22__["KetQuaXetNghiemViewKetQuaNewViewModel"]();
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].KetQuaXetNghiem;
        this.loading = false;
        this.showToastNotifyError = false;
        this.baseRoute = 'xet-nghiem/ket-qua-new';
        this.trangThaiIn = false;
        this.ChoKQChayLai = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_13__["TrangThaiKetQuaXetNghiemConst"].ChoKQChayLai;
        this.ChoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_13__["TrangThaiKetQuaXetNghiemConst"].ChoKQ;
        this.ChoDuyetKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_13__["TrangThaiKetQuaXetNghiemConst"].ChoDuyetKQ;
        this.DaCoKQ = src_app_shared_constants_xet_nghiem_constant__WEBPACK_IMPORTED_MODULE_13__["TrangThaiKetQuaXetNghiemConst"].DaCoKQ;
        this.search = new _duyet_ket_qua_new_duyet_ket_qua_new_model__WEBPACK_IMPORTED_MODULE_19__["SearchNew"]();
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControl"]();
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.titleString = null;
        this.inPhieuDuyetKetQua = new _duyet_ket_qua_duyet_ket_qua_model__WEBPACK_IMPORTED_MODULE_14__["PhieuDuyetKetQua"]();
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
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
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
                    dialogRef = this.dialog.open(_duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_16__["ChonLoaiKetQuaXetNghiemPopupComponent"], {
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
                                    this.dialog.open(_ket_qua_phieu_new_popup_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_17__["KetQuaPhieuNewPopupComponent"], {
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
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupDownloadData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
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
    searchChangesNangCao($event) {
    }
    changeQR($event) {
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.TimkiemNangCao();
        }
    }
    QuetMaQRCodeClick() {
        let elementBarcode = document.getElementById("barcodeActive");
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }
    TimkiemNangCao() {
        if (this.search.ThoiDiemGoiDuyetTuFormat != null) {
            this.search.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.search.ThoiDiemGoiDuyetTuFormat, "dd/mm/yyyy");
        }
        else {
            this.search.FromDate = null;
        }
        if (this.search.ThoiDiemGoiDuyetDenFormat != null) {
            this.search.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.search.ThoiDiemGoiDuyetDenFormat, "dd/mm/yyyy");
        }
        else {
            this.search.ToDate = null;
        }
        let data = this.shared.getSharedDataLuu();
        this.apiService.post("DuyetKetQuaXetNghiem/TimKiemPhienXetNghiemGanNhat", this.search).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.apiService.post("KetQuaXetNghiem/TrangThaiPhienXetNghiemGanNhat?phienXetNghiemId=" + resultData).subscribe(type => {
                    if (type == 1) {
                        this.titleString = this.ChoKQ;
                    }
                    else if (type == 2) {
                        this.titleString = this.ChoKQChayLai;
                    }
                    else if (type == 3) {
                        this.titleString = this.ChoDuyetKQ;
                    }
                    else if (type == 4) {
                        this.titleString = this.DaCoKQ;
                    }
                    this.router.navigate([this.baseRoute + "/cap-nhat/" + resultData + "/" + type + "/" + data.YeuCauTiepNhanId]);
                    this.shared.getById(resultData);
                });
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    quayLai() {
        this.router.navigateByUrl('xet-nghiem/ket-qua-new?holdQuery=true');
    }
    luu() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            var self = this;
            self.shared.validationErrors = null;
            self.loading = true;
            self.ketQuaXetNghiem = self.shared.getSharedDataLuu();
            self.baseService.update(self.ketQuaXetNghiem).subscribe((resData) => {
                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
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
};
KetQuaXetNghiemNewUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ket_qua_xet_nghiem_new_shared_ket_qua_xet_nghiem_new_shared_component__WEBPACK_IMPORTED_MODULE_15__["KetQuaXetNghiemNewSharedComponent"], { static: true })
], KetQuaXetNghiemNewUpdateComponent.prototype, "shared", void 0);
KetQuaXetNghiemNewUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-qua-xet-nghiem-new-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-xet-nghiem-new-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-xet-nghiem-new-update.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.scss")).default]
    })
], KetQuaXetNghiemNewUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: XetNghiemKetQuaNEWRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemKetQuaNEWRoutingModule", function() { return XetNghiemKetQuaNEWRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _ket_qua_xet_nghiem_new_list_ket_qua_xet_nghiem_new_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_new_update_ket_qua_xet_nghiem_new_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_new_detail_ket_qua_xet_nghiem_new_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.ts");









const routes = [
    {
        path: '',
        component: _ket_qua_xet_nghiem_new_list_ket_qua_xet_nghiem_new_list_component__WEBPACK_IMPORTED_MODULE_6__["KetQuaXetNghiemNewListComponent"],
        data: {
            title: 'Kết Quả Xét Nghiệm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KetQuaXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'cap-nhat/:id/:type/:yctn',
        component: _ket_qua_xet_nghiem_new_update_ket_qua_xet_nghiem_new_update_component__WEBPACK_IMPORTED_MODULE_7__["KetQuaXetNghiemNewUpdateComponent"],
        data: {
            title: 'Cập Nhật Kết Quả Xét Nghiệm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KetQuaXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet/:id',
        component: _ket_qua_xet_nghiem_new_detail_ket_qua_xet_nghiem_new_detail_component__WEBPACK_IMPORTED_MODULE_8__["KetQuaXetNghiemNewDetailComponent"],
        data: {
            title: 'Xem Kết Quả Xét Nghiệm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KetQuaXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let XetNghiemKetQuaNEWRoutingModule = class XetNghiemKetQuaNEWRoutingModule {
};
XetNghiemKetQuaNEWRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], XetNghiemKetQuaNEWRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.model.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.model.ts ***!
  \************************************************************************************************/
/*! exports provided: KetQuaXetNghiemNew, KetQuaXetNghiemNewSearch, KetQuaXetNghiemViewKetQuaNewViewModel, ListDataChildNew, PhieuDuyetKetQuaNew */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemNew", function() { return KetQuaXetNghiemNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemNewSearch", function() { return KetQuaXetNghiemNewSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemViewKetQuaNewViewModel", function() { return KetQuaXetNghiemViewKetQuaNewViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataChildNew", function() { return ListDataChildNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuDuyetKetQuaNew", function() { return PhieuDuyetKetQuaNew; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KetQuaXetNghiemNew {
}
class KetQuaXetNghiemNewSearch {
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
class KetQuaXetNghiemViewKetQuaNewViewModel {
    constructor() {
        this.BarCodeID = null;
        this.MaSoBHYT = null;
        this.MaBN = null;
        this.MaYeuCauTiepNhan = null;
        this.HoTen = null;
        this.NamSinhDisplay = null;
        this.GioiTinhDisplay = null;
        this.BHYTMucHuong = null;
        this.DiaChi = null;
        this.ChanDoan = null;
        this.KhoaChiDinh = null;
        this.Phong = null;
        this.SoDienThoai = null;
        this.NhanVienThucHienId = null;
        this.ChanDoanDuoi = null;
        this.GhiChu = null;
        this.DoiTuong = null;
        this.YeuCauChayLai = null;
        this.DaDuyet = null;
        this.NgayYeuCauDisplay = null;
        this.LyDoYeuCau = null;
        this.NgayDuyetDisplay = null;
        this.dataChild = new Array();
        this.LaCapCuu = null;
    }
}
class ListDataChildNew {
    constructor() {
        this.Ten = null;
        this.GiaTriCu = null;
        this.GiaTriTuMay = null;
        this.GiaTriNhapTay = null;
        this.GiaTriDuyet = null;
        this.GiaTriMin = null;
        this.GiaTriMax = null;
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
class PhieuDuyetKetQuaNew {
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

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: XetNghiemKetQuaNEWModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemKetQuaNEWModule", function() { return XetNghiemKetQuaNEWModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _xet_nghiem_ket_qua_new_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xet-nghiem-ket-qua-new-routing.module */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new-routing.module.ts");
/* harmony import */ var _ket_qua_xet_nghiem_new_list_ket_qua_xet_nghiem_new_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_new_shared_ket_qua_xet_nghiem_new_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_new_detail_ket_qua_xet_nghiem_new_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component.ts");
/* harmony import */ var _ket_qua_phieu_new_popup_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_new_update_ket_qua_xet_nghiem_new_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component.ts");
/* harmony import */ var _ket_qua_xet_nghiem_new_popup_goi_duyet_ket_qua_xet_nghiem_new_popup_goi_duyet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component.ts");
/* harmony import */ var _duyet_ket_qua_duyet_ket_qua_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../duyet-ket-qua/duyet-ket-qua.module */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/duyet-ket-qua.module.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _xet_nghiem_ket_qua_new_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./xet-nghiem-ket-qua-new.service */ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.service.ts");
























let XetNghiemKetQuaNEWModule = class XetNghiemKetQuaNEWModule {
};
XetNghiemKetQuaNEWModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ket_qua_xet_nghiem_new_list_ket_qua_xet_nghiem_new_list_component__WEBPACK_IMPORTED_MODULE_4__["KetQuaXetNghiemNewListComponent"],
            _ket_qua_xet_nghiem_new_shared_ket_qua_xet_nghiem_new_shared_component__WEBPACK_IMPORTED_MODULE_5__["KetQuaXetNghiemNewSharedComponent"],
            _ket_qua_xet_nghiem_new_detail_ket_qua_xet_nghiem_new_detail_component__WEBPACK_IMPORTED_MODULE_6__["KetQuaXetNghiemNewDetailComponent"],
            _ket_qua_phieu_new_popup_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_7__["KetQuaPhieuNewPopupComponent"],
            _ket_qua_xet_nghiem_new_update_ket_qua_xet_nghiem_new_update_component__WEBPACK_IMPORTED_MODULE_8__["KetQuaXetNghiemNewUpdateComponent"],
            _ket_qua_xet_nghiem_new_popup_goi_duyet_ket_qua_xet_nghiem_new_popup_goi_duyet_component__WEBPACK_IMPORTED_MODULE_9__["KetQuaXetNghiemNewPopupGoiDuyetComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _xet_nghiem_ket_qua_new_routing_module__WEBPACK_IMPORTED_MODULE_3__["XetNghiemKetQuaNEWRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_20__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["InputsModule"],
            _duyet_ket_qua_duyet_ket_qua_module__WEBPACK_IMPORTED_MODULE_10__["DuyetKetQuaXetNghiemModule"]
        ],
        providers: [
            _xet_nghiem_ket_qua_new_service__WEBPACK_IMPORTED_MODULE_23__["XetNghiemKetQuaNewService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_21__["BaseService"], useClass: _xet_nghiem_ket_qua_new_service__WEBPACK_IMPORTED_MODULE_23__["XetNghiemKetQuaNewService"] },
        ],
        entryComponents: [
            _ket_qua_xet_nghiem_new_popup_goi_duyet_ket_qua_xet_nghiem_new_popup_goi_duyet_component__WEBPACK_IMPORTED_MODULE_9__["KetQuaXetNghiemNewPopupGoiDuyetComponent"],
            _ket_qua_phieu_new_popup_ket_qua_phieu_new_popup_component__WEBPACK_IMPORTED_MODULE_7__["KetQuaPhieuNewPopupComponent"]
        ]
    })
], XetNghiemKetQuaNEWModule);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.service.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: XetNghiemKetQuaNewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemKetQuaNewService", function() { return XetNghiemKetQuaNewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let XetNghiemKetQuaNewService = class XetNghiemKetQuaNewService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'KetQuaXetNghiem';
    }
};
XetNghiemKetQuaNewService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
XetNghiemKetQuaNewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XetNghiemKetQuaNewService);



/***/ })

}]);
//# sourceMappingURL=xet-nghiem-xet-nghiem-ket-qua-new-xet-nghiem-ket-qua-new-module-es2015.js.map