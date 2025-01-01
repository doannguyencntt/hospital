(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-mau-mau-module"],{

/***/ "./node_modules/@iconify/icons-ic/add-circle.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/add-circle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/sharp-edit.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/sharp-edit.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[ {Title:'Nhập Xuất',Path:''}\n        ,{Title:'Máu',Path:''}\n        ,{Title:'DS Nhập Kho Máu', Path: '/nhap-xuat/mau/nhap-kho', queryParams: {holdQuery : true}}\n        ,{Title:'Nhập Máu',Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Nhập Máu</h2>\n                <!-- <b *ngIf=\"trangThai != undefined\" class=\"status-nhap-kho-mau {{trangThai.DuocDuyet == null ? 'nkm-cho-duyet': trangThai.DuocDuyet == false ? 'nkm-tu-choi' : 'nkm-da-duyet'}}\">{{trangThai.TenTrangThai}}</b> -->\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-nhap-kho-mau-shared (trangThaiYeuCau)=\"getTrangThaiYeuCau($event)\" [validationErrors]=\"validationErrors\"></app-nhap-kho-mau-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                    <button type=\"button\" mat-button class=\"mr-1 align-right-fx\" (click)=\"huy()\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                    <button type=\"button\" *ngIf=\"!loading\" color=\"primary\" mat-raised-button (click)=\"xuLyLuu()\">\n                        <i class=\"ft-save\"></i>Lưu</button>\n                    <button type=\"button\" *ngIf=\"!loading\" color=\"primary\" mat-raised-button (click)=\"xuLyLuu(true)\">\n                        <i class=\"ft-save\"></i>Lưu & In phiếu truyền máu</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                            alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU TRUYỀN MÁU</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <!-- typeLayout=\"landscape\" typeSize=\"A5\" -->\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\" typeSize=\"A4\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Nhập Xuất',Path:''},\n                        {Title:'Máu',Path:''},\n                        {Title:'DS Nhập Kho Máu',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n                <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                    [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\" \n                    [headerTemplate]=\"headerTemplate\" [searchString]=\"timKiemObj.SearchString\" [showStt]=\"true\" [sort]=\"sort\"\n                    urlGetData=\"NhapKhoMau/GetDataForGridNhapKhoMau\"\n                    urlGetTotalPage=\"NhapKhoMau/GetTotalPageForGridNhapKhoMau\"\n                    [detailTemplate]=\"gridChildTemplate\">\n                    <ng-template #gridChildTemplate let-dataItem>\n                        <app-grid [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                            [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\"\n                            [showStt]=\"true\" additionalSearchString={{dataItem.Id}} [autoHeight]=\"true\"\n                            urlGetData=\"NhapKhoMau/GetDataForGridNhapKhoMauChiTiet\"\n                            urlGetTotalPage=\"NhapKhoMau/GetTotalPageForGridNhapKhoMauChiTiet\">\n                        </app-grid>\n                    </ng-template>\n                </app-grid>\n\n                <ng-template #headerTemplate>\n                    <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        \n                        <app-checkbox [(model)]=\"timKiemObj.TrangThai.ChoNhapGia\" \n                            id=\"choNhapGia\" label=\"Chờ nhập giá\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\"> \n                        </app-checkbox>\n                        <app-checkbox [(model)]=\"timKiemObj.TrangThai.DaNhapGia\" \n                            id=\"daNhapGia\" label=\"Đã nhập giá\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                        </app-checkbox>\n                        <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                            [(model)]=\"timKiemObj.TuNgayDenNgay\" \n                            label=\"Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                        </app-daterangepicker>\n        \n                        <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                        </div>\n                        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                        </button>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of _gridColumnsFilter\">\n                                <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                    <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n\n                        <button class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\" \n                            (click)=\"xuLyXuatExcel()\">\n                            <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                        </button>\n\n                        <button (click)=\"themNhapKhoMau()\" class=\"ml-3 mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                        </button>\n                    </div>\n                </ng-template>\n        \n                <ng-template #soPhieuTemplate let-dataItem>\n                    <a (click)=\"xemChiTiet(dataItem)\"><p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">{{dataItem.SoPhieu}}</p></a>\n                </ng-template>\n\n                <ng-template #trangThaiTemplate let-dataItem>\n                    <div style=\"position: relative;\">\n                        <span [ngClass]=\"{'orangeText': dataItem.TinhTrang == 1,\n                                'greenText': dataItem.TinhTrang == 2}\">\n                            {{dataItem.TenTinhTrang}}\n                        </span>\n                    </div>\n                </ng-template>\n\n                <ng-template #ngayHoaDonTemplate let-dataItem>\n                    {{dataItem.NgayHoaDonDisplay}}\n                </ng-template>\n                <ng-template #ngayNhapTemplate let-dataItem>\n                    {{dataItem.NgayNhapDisplay}}\n                </ng-template>\n                <ng-template #ngayDuyetTemplate let-dataItem>\n                    {{dataItem.NgayDuyetDisplay}}\n                </ng-template>\n                <ng-template #ngaySanXuatTemplate let-dataItem>\n                    {{dataItem.NgaySanXuatDisplay}}\n                </ng-template>\n                <ng-template #hanSuDungTemplate let-dataItem>\n                    {{dataItem.HanSuDungDisplay}}\n                </ng-template>\n\n                <ng-template #donGiaDVTemplate let-dataItem>\n                    {{dataItem.DonGiaDichVu | number:'0.2-2':'vi-VN'}}\n                </ng-template>\n                <ng-template #donGiaBHTemplate let-dataItem>\n                    {{dataItem.DonGiaBaoHiem | number:'0.2-2':'vi-VN'}}\n                </ng-template>\n\n                <ng-template #actionTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip >\n                        <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xoaNhapKhoMau(dataItem.Id)\">\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                        </button>\n                    </div>\n                </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border-b\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-textbox [disabled]=\"phieuNhapKhoMau.DuocKeToanDuyet\" id=\"soHoaDon\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Số HĐ\"\n        [(model)]=\"phieuNhapKhoMau.SoHoaDon\" [maxlength]=\"50\"\n        [validationerror]=\"'SoHoaDon' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-datepicker id=\"NgayHoaDon\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày HĐ\" [(model)]=\"phieuNhapKhoMau.NgayHoaDon\"\n        [disabled]=\"phieuNhapKhoMau.DuocKeToanDuyet\"\n        [validationerror]=\"'NgayHoaDon' | validationerror:validationErrors\">\n    </app-datepicker>\n    <app-combobox id=\"nhaCungCap\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Nhà cung cấp\"\n        url=\"HopDongThauDuocPham/GetListNhaThau\" [disabled]=\"phieuNhapKhoMau.DuocKeToanDuyet\"\n        [(model)]=\"phieuNhapKhoMau.NhaThauId\" [modelText]=\"phieuNhapKhoMau.TenNhaThau\" class=\"item-no-padding\"\n        [required]=\"true\" [template]=\"nhaCungCapTemplate\" [templateHeader]=\"nhaCungCapTemplateHeader\"\n        [validationerror]=\"'NhaThauId' | validationerror:validationErrors\">\n        <ng-template #nhaCungCapTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"30%\">Tên</th>\n                    <th>Địa Chỉ</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #nhaCungCapTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"30%\">{{dataItem.Ten}}</td>\n                    <td>{{dataItem.DiaChi}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n    <app-combobox id=\"nguoiNhap\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [required]=\"true\" [disabled]=\"true\"\n        [(model)]=\"phieuNhapKhoMau.NguoiNhapId\" [bind]=\"true\" [reloadForGrid]=\"true\"\n        [modelText]=\"phieuNhapKhoMau.TenNguoiNhap\" url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người nhập\"\n        [validationerror]=\"'NguoiNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-datepicker id=\"NgayNhap\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày Nhập\" [required]=\"true\"\n        [(model)]=\"phieuNhapKhoMau.NgayNhap\" [required]=\"true\" [disabled]=\"true\"\n        [validationerror]=\"'NgayNhap' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <app-radio fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"LoaiNguoiGiao\" name=\"LoaiNguoiGiao\"\n        [items]=\"[{Value:1,Text:'Trong hệ thống'},{Value:2,Text:'Ngoài hệ thống'}]\"\n        (modelChange)=\"changeLoaiNguoiGiao()\" [(model)]=\"phieuNhapKhoMau.LoaiNguoiGiao\" label=\"Loại người giao\"\n        [disabled]=\"phieuNhapKhoMau.DuocKeToanDuyet\"\n        [validationerror]=\"'LoaiNguoiGiao' | validationerror:validationErrors\">\n    </app-radio>\n    <app-combobox *ngIf=\"phieuNhapKhoMau.LoaiNguoiGiao == 1\" id=\"nguoiGiao\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [(model)]=\"phieuNhapKhoMau.NguoiGiaoId\" [bind]=\"true\" [reloadForGrid]=\"true\"\n        [disabled]=\"phieuNhapKhoMau.DuocKeToanDuyet\" [modelText]=\"phieuNhapKhoMau.TenNguoiGiao\"\n        url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người giao\">\n    </app-combobox>\n    <app-textbox *ngIf=\"phieuNhapKhoMau.LoaiNguoiGiao == 2\" id=\"TenLoaiNguoiGiao\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        label=\"Người giao\" [(model)]=\"phieuNhapKhoMau.TenNguoiGiao\" [maxlength]=\"100\"\n        [disabled]=\"phieuNhapKhoMau.DuocKeToanDuyet\">\n    </app-textbox>\n    <app-textarea fxFlex=\"50%\" fxFlex.sm=\"50%\" id=\"ghiChu\" label=\"Ghi Chú\" maxlength=\"1000\"\n        [(model)]=\"phieuNhapKhoMau.GhiChu\" minHeight=\"20\" [disabled]=\"phieuNhapKhoMau.DuocKeToanDuyet\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title\">Thông Tin Máu</h3>\n    <ng-container *ngIf=\"!phieuNhapKhoMau.DuocKeToanDuyet\">\n        <app-combobox id=\"XuatChoBenhNhan\" fxFlex=\"35%\" fxFlex.sm=\"35%\" [required]=\"true\" class=\"item-no-padding\"\n            [broadcastAfterLoaded]=\"true\" [reloadForGrid]=\"true\" [bind]=\"true\"\n            [(model)]=\"phieuNhapKhoMauChiTiet.YeuCauTruyenMauId\"\n            [modelText]=\"phieuNhapKhoMauChiTiet.TenBenhNhanTruyenMau\" [disabled]=\"phieuNhapKhoMauChiTiet.Index != null\"\n            url=\"NhapKhoMau/GetListYeuCauTruyenMau\" (selectionChange)=\"chonYeuCauTruyenMau($event)\"\n            hierarchyKeyToListen=\"MauVaChePhamId\" label=\"Xuất cho người bệnh\" [template]=\"yeuCauTruyenMauTemplate\"\n            [templateHeader]=\"yeuCauTruyenMauTemplateHeader\"\n            [validationerror]=\"'YeuCauTruyenMauId' | validationerror:validationErrorsChiTiet\">\n            <ng-template #yeuCauTruyenMauTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"15%\">Mã TN</th>\n                        <th width=\"15%\">Mã NB</th>\n                        <th width=\"15%\">Họ Tên</th>\n                        <th width=\"25%\">Tên Chế Phẩm Máu</th>\n                        <th width=\"15%\">Nhóm Máu</th>\n                        <th width=\"15%\">Thể Tích</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #yeuCauTruyenMauTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr style=\"font-weight: lighter !important;\">\n                        <th width=\"15%\">{{dataItem.MaYeuCauTiepNhan}}</th>\n                        <th width=\"15%\">{{dataItem.MaBenhNhan}}</th>\n                        <th width=\"15%\">{{dataItem.HoTen}}</th>\n                        <th width=\"25%\">{{dataItem.TenChePhamMau}}</th>\n                        <th width=\"15%\">{{dataItem.NhomMau}}</th>\n                        <th width=\"15%\">{{dataItem.TheTichDisplay}}</th>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-combobox id=\"chePhamMau\" fxFlex=\"40%\" fxFlex.sm=\"40%\" [required]=\"true\" class=\"item-no-padding\"\n            [disabled]=\"phieuNhapKhoMauChiTiet.Index != null\" [(model)]=\"phieuNhapKhoMauChiTiet.MauVaChePhamId\"\n            [modelText]=\"phieuNhapKhoMauChiTiet.TenDichVu\" [broadcastAfterLoaded]=\"true\" [bind]=\"true\"\n            [readonly]=\"true\"\n            url=\"DieuTriNoiTru/GetMauVaChePham\" label=\"Chế phẩm máu\" popupSettings=\"null\"\n            (selectionChange)=\"chonChePhamMau($event)\" [template]=\"mauChePhamTemplate\"\n            [templateHeader]=\"mauChePhamTemplateHeader\" hierarchyKeyToSend=\"MauVaChePhamId\"\n            [validationerror]=\"'MauVaChePhamId' | validationerror:validationErrorsChiTiet\">\n            <ng-template #mauChePhamTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"30%\">Mã</th>\n                        <th width=\"70%\">Tên</th>\n                        <!-- <th style=\"text-align: center;\" width=\"20%\">Thể tích</th> -->\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #mauChePhamTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"30%\">{{dataItem.Ma}}</td>\n                        <td width=\"70%\">{{dataItem.Ten}}</td>\n                        <!-- <td style=\"text-align: right; right: 10px;\" width=\"20%\">{{dataItem.TheTich}}</td> -->\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-textbox id=\"MaTuiMau\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Mã túi máu\"\n            [(model)]=\"phieuNhapKhoMauChiTiet.MaTuiMau\" [maxlength]=\"50\" [required]=\"true\"\n            [validationerror]=\"'MaTuiMau' | validationerror:validationErrorsChiTiet\">\n        </app-textbox>\n        <app-combobox id=\"nhomMau\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"phieuNhapKhoMauChiTiet.NhomMau\" [bind]=\"true\"\n            url=\"NhapKhoMau/GetListNhomMau\" label=\"Nhóm máu túi máu\" (selectionChange)=\"chonNhomMau($event)\">\n        </app-combobox>\n        <app-dropdownlist id=\"yeuToRh\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"phieuNhapKhoMauChiTiet.YeuToRh\"\n            [bind]=\"true\" url=\"NhapKhoMau/GetListYeuToRh\" label=\"Yếu tố Rh\" (selectionChange)=\"chonYeuToRh($event)\">\n        </app-dropdownlist>\n        <app-datepicker id=\"NgaySanXuat\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày Sản xuất\" [required]=\"true\"\n            [(model)]=\"phieuNhapKhoMauChiTiet.NgaySanXuat\" [required]=\"true\"\n            [validationerror]=\"'NgaySanXuat' | validationerror:validationErrorsChiTiet\">\n        </app-datepicker>\n        <app-datepicker id=\"HanSuDung\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"HSD\" [required]=\"true\"\n            [(model)]=\"phieuNhapKhoMauChiTiet.HanSuDung\" [required]=\"true\"\n            [validationerror]=\"'HanSuDung' | validationerror:validationErrorsChiTiet\">\n        </app-datepicker>\n        <app-datepicker id=\"NgayLamXNHoaHop\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày làm XN hòa hợp\"\n            [(model)]=\"phieuNhapKhoMauChiTiet.NgayLamXetNghiemHoaHop\">\n        </app-datepicker>\n        <app-combobox id=\"NguoiLamXetNghiemHoaHop\" fxFlex=\"25%\" url=\"Marketing/GetNhanVienTaiBenhVien\"\n            [(model)]=\"phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHopId\" label=\"Người làm XN hòa hợp\"\n            (selectionChange)=\"chonNguoiLamXNHP($event)\"  [modelText]=\"phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHop\"\n            class=\"item-no-padding\" [validationerror]=\"'NguoiLamXetNghiemHoaHopId' | validationerror:validationErrors\">\n        </app-combobox>\n        <div fxFlex=\"100%\">\n            <fieldset>\n                <legend style=\"display: flex;\">\n                    KQ xét nghiệm máu từ NCC\n                    <button class=\"po-h\" color=\"primary\" (click)=\"themKetQuaXetNghiemKhac()\">\n                        <mat-icon [icIcon]=\"icAddCircle\"></mat-icon>\n                    </button>\n                </legend>\n                <div fxFlex=\"100%\" class=\"ml-2\">\n                    <!-- <ul class=\"five-col\"> -->\n                    <ul class=\"five-col\">\n                        <li>\n                            <app-radio id=\"sotRet\" name=\"sotRet\"\n                                [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaXetNghiemSotRet\" label=\"Sốt rét\">\n                            </app-radio>\n                        </li>\n                        <!-- <li>\n                            <app-radio id=\"phanUngCheoOng1\" name=\"phanUngCheoOng1\"\n                                [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaPhanUngCheoOngI\" label=\"KQ phản ứng chéo ống I\">\n                            </app-radio>\n                        </li> -->\n\n                        <li>\n                            <app-radio id=\"giangMai\" name=\"giangMai\"\n                                [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaXetNghiemGiangMai\" label=\"Giang mai\">\n                            </app-radio>\n                        </li>\n                        <!-- <li>\n                            <app-radio id=\"phanUngCheoOng2\" name=\"phanUngCheoOng2\"\n                                [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaPhanUngCheoOngII\" label=\"KQ phản ứng chéo ống II\">\n                            </app-radio>\n                        </li> -->\n\n                        <li>\n                            <app-radio id=\"hcv\" name=\"hcv\"\n                                [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaXetNghiemHCV\" label=\"HCV\">\n                            </app-radio>\n                        </li>\n                        <!-- <li>\n                            <app-radio id=\"moiTruongMuoi\" name=\"moiTruongMuoi\"\n                                [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaXetNghiemMoiTruongMuoi\" label=\"Môi trường muối\">\n                            </app-radio>\n                        </li> -->\n\n                        <li>\n                            <app-radio id=\"hbv\" name=\"hbv\"\n                                [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaXetNghiemHBV\" label=\"HBV\">\n                            </app-radio>\n                        </li>\n                        <!-- <li>\n                            <app-radio id=\"37oCKhamGlubulin\" name=\"37oCKhamGlubulin\"\n                                [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaXetNghiem37oCKhangGlubulin\"\n                                label=\"37oC/Kháng glubulin\">\n                            </app-radio>\n                        </li> -->\n\n                        <li>\n                            <app-radio id=\"hiv\" name=\"hiv\"\n                                [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaXetNghiemHIV\" label=\"HIV\">\n                            </app-radio>\n                        </li>\n                        <!-- <li>\n                            <app-radio id=\"nat\" name=\"nat\" [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                [(model)]=\"phieuNhapKhoMauChiTiet.KetQuaXetNghiemNAT\" label=\"NAT\">\n                            </app-radio>\n                        </li> -->\n                    </ul>\n\n                    <ng-container\n                        *ngFor=\"let ketQuaXetNghiemKhac of phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs, let i = index\">\n                        <ul class=\"five-col\">\n                            <li>\n                                <app-combobox id=\"loaiXetNgiemKhac{{i}}\" [required]=\"true\" class=\"item-no-padding mr-2\"\n                                    [broadcastAfterLoaded]=\"true\" [reloadForGrid]=\"true\" [bind]=\"true\"\n                                    popupSettings=\"null\" [(model)]=\"ketQuaXetNghiemKhac.LoaiXetNghiem\"\n                                    [modelText]=\"ketQuaXetNghiemKhac.TenLoaiXetNghiem\"\n                                    url=\"NhapKhoMau/GetListLoaiXetNghiemMauNhapThem\" label=\"Xét nghiệm\"\n                                    [validationerror]=\"'KetQuaXetNghiemKhacs['+i+'].LoaiXetNghiem' | validationerror:validationErrorsChiTiet\">\n                                </app-combobox>\n                            </li>\n                            <li>\n                                <app-radio id=\"ketQuaXetNghiemKhac{{i}}\" name=\"ketQuaXetNghiemKhacName{{i}}\"\n                                    [items]=\"[{Value:1,Text:'Âm tính'},{Value:2,Text:'Dương tính'}]\"\n                                    [(model)]=\"ketQuaXetNghiemKhac.KetQua\" label=\"Kết quả\">\n                                </app-radio>\n                            </li>\n                            <li>\n                                <button style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                                    (click)=\"xoaKetQuaXetNghiemKhac(phieuNhapKhoMauChiTiet, i)\">\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                            </li>\n\n                            <!-- //tạm thời -->\n                            <!-- <li class=\"d-empty\"></li> -->\n                            <li class=\"d-empty\"></li>\n                            <li class=\"d-empty\"></li>\n                        </ul>\n                    </ng-container>\n                    <!-- <ng-container *ngIf=\"phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs != undefined \n                                                && phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs != null \n                                                && phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs.length % 5 != 0\">\n                                <li *ngFor=\"let number of getLength()\" class=\"d-empty\"></li>\n                            </ng-container> -->\n\n                    <!-- <ul class=\"five-col\">\n                        <li>\n                            <div style=\"display: inline-block;width: 100%;\">\n                                <app-textbox id=\"NguoiThucHien1\" label=\"Người thực hiện 1\"\n                                    [(model)]=\"phieuNhapKhoMauChiTiet.NguoiThucHien1\" [maxlength]=\"100\">\n                                </app-textbox>\n                            </div>\n                        </li>\n    \n                        <li>\n                            <div style=\"display: inline-block;width: 100%;\">\n                                <app-textbox id=\"NguoiThucHien2\" label=\"Người thực hiện 2\"\n                                    [(model)]=\"phieuNhapKhoMauChiTiet.NguoiThucHien2\" [maxlength]=\"100\">\n                                </app-textbox>\n                            </div>\n                        </li>\n                        <li class=\"d-empty\"></li>\n                        <li class=\"d-empty\"></li>\n                        <li class=\"d-empty\"></li>\n                    </ul> -->\n                </div>\n            </fieldset>\n        </div>\n        <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n            <button type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1\" (click)=\"huyThongTinMau()\"\n                title=\"Phím tắt: Esc\">Hủy</button>\n            <button *ngIf=\"phieuNhapKhoMauChiTiet.Index == null\" type=\"button\" color=\"primary\" mat-raised-button\n                mat-button class=\"mr-1\" (click)=\"themThongTinMau()\" title=\"Phím tắt: Ctrl + S\">Thêm</button>\n            <button *ngIf=\"phieuNhapKhoMauChiTiet.Index != null\" type=\"button\" color=\"primary\" mat-raised-button\n                mat-button class=\"mr-1\" (click)=\"capNhatThongTinMau()\" title=\"Phím tắt: Ctrl + S\">Lưu</button>\n        </div>\n    </ng-container>\n\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\"\n        [documentType]=\"documentype\" [useAddDeault]=\"false\" [showStt]=\"true\" [useHeaderDefault]=\"false\"\n        [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n        [gridDataSource]=\"gridDataSource\">\n    </app-grid>\n\n    <ng-template #maTuiMauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <span class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.MaTuiMau}}\">\n            <p>{{dataItem.MaTuiMau}}</p>\n            <app-validationerrorother\n                [validationerror]=\"'NhapKhoMauChiTiets['+rowIndex+'].MaTuiMau' | validationerror:validationErrors\"\n                (clearValidateErrorOtherCallback)=\"clearValidateErrorOtherCallback($event)\">\n            </app-validationerrorother>\n        </span>\n    </ng-template>\n    <ng-template #ngaySanXuatTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <span class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgaySanXuat | date:'dd/MM/yyyy'}}\">\n            <p>{{dataItem.NgaySanXuat | date:'dd/MM/yyyy'}}</p>\n            <app-validationerrorother\n                [validationerror]=\"'NhapKhoMauChiTiets['+rowIndex+'].NgaySanXuat' | validationerror:validationErrors\"\n                (clearValidateErrorOtherCallback)=\"clearValidateErrorOtherCallback($event)\">\n            </app-validationerrorother>\n        </span>\n    </ng-template>\n    <ng-template #ngayLamXNHoaHopTemplate let-dataItem>\n        {{dataItem.NgayLamXetNghiemHoaHop | date:'dd/MM/yyyy'}}\n    </ng-template>\n    <ng-template #hanSuDungTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <span class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.HanSuDung | date:'dd/MM/yyyy'}}\">\n            <p>{{dataItem.HanSuDung | date:'dd/MM/yyyy'}}</p>\n            <app-validationerrorother\n                [validationerror]=\"'NhapKhoMauChiTiets['+rowIndex+'].HanSuDung' | validationerror:validationErrors\"\n                (clearValidateErrorOtherCallback)=\"clearValidateErrorOtherCallback($event)\">\n            </app-validationerrorother>\n        </span>\n    </ng-template>\n\n    <ng-template #benhNhanTuyenMauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <span class=\"reverse-ellipsis r\">\n            <p><a kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n                    [tooltipTemplate]=\"thongTinYeuCauTruyenMauTemplate\" filter=\"*\">{{dataItem.TenBenhNhanTruyenMau}}</a>\n            </p>\n            <app-validationerrorother\n                [validationerror]=\"'NhapKhoMauChiTiets['+rowIndex+'].YeuCauTruyenMauId' | validationerror:validationErrors\"\n                (clearValidateErrorOtherCallback)=\"clearValidateErrorOtherCallback($event)\">\n            </app-validationerrorother>\n        </span>\n        <ng-template #thongTinYeuCauTruyenMauTemplate>\n            <table class=\"table table-border\" width=\"100%\">\n                <tr>\n                    <td>Mã TN: <b>{{dataItem.ThongTinYeuCauTruyenMau.MaYeuCauTiepNhan}}</b></td>\n                </tr>\n                <tr>\n                    <td>Mã BA: <b>{{dataItem.ThongTinYeuCauTruyenMau.MaBenhAn}}</b></td>\n                </tr>\n                <tr>\n                    <td>Mã NB: <b>{{dataItem.ThongTinYeuCauTruyenMau.MaBenhNhan}}</b></td>\n                </tr>\n                <tr>\n                    <td>Họ Tên: <b>{{dataItem.ThongTinYeuCauTruyenMau.HoTen}}</b></td>\n                </tr>\n                <tr>\n                    <td>Tên chế phẩm máu: <b>{{dataItem.ThongTinYeuCauTruyenMau.TenChePhamMau}}</b></td>\n                </tr>\n                <tr>\n                    <td>Nhóm máu: <b>{{dataItem.ThongTinYeuCauTruyenMau.NhomMau}}</b></td>\n                </tr>\n                <tr>\n                    <td>Thể tích: <b>{{dataItem.ThongTinYeuCauTruyenMau.TheTich}}</b></td>\n                </tr>\n            </table>\n        </ng-template>\n    </ng-template>\n\n    <ng-template #ketQuaKhacTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <ng-container *ngFor=\"let item of dataItem.KetQuaXetNghiemKhacs\">\n            {{item.HienThiKetQuaKhac + \"; \"}}\n        </ng-container>\n    </ng-template>\n\n    <ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <div class=\"text-center\" *ngIf=\"!phieuNhapKhoMau.DuocKeToanDuyet\" kendoTooltip>\n            <button color=\"primary\" mat-icon-button kendoTooltip title=\"Sửa\" type=\"button\"\n                (click)=\"suaNhapMauChiTiet(dataItem, rowIndex)\">\n                <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n            </button>\n            <button class=\"ml-2\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                (click)=\"xoaNhapMauChiTiet(rowIndex)\">\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[ {Title:'Nhập Xuất',Path:''}\n        ,{Title:'Máu',Path:''}\n        ,{Title:'DS Nhập Kho Máu', Path: '/nhap-xuat/mau/nhap-kho', queryParams: {holdQuery : true}}\n        ,{Title:'Chi Tiết Phiếu Nhập Máu',Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi Tiết Phiếu Nhập Máu</h2>\n                <!-- <b *ngIf=\"trangThai != undefined\" class=\"status-nhap-kho-mau {{trangThai.DuocDuyet == null ? 'nkm-cho-duyet': (trangThai.DuocDuyet == false ? 'nkm-tu-choi' : 'nkm-da-duyet')}}\">{{trangThai.TenTrangThai}}</b> -->\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n            \n                <app-nhap-kho-mau-shared (trangThaiYeuCau)=\"getTrangThaiYeuCau($event)\" [validationErrors]=\"validationErrors\">\n                </app-nhap-kho-mau-shared>\n            \n                <div fxLayout=\"row\" fxLayoutGap=\"8px\" class=\"mt-6\">\n                    <ng-container *ngIf=\"trangThai != undefined\">\n                        <ng-container *ngIf=\"trangThai.DuocDuyet == null\">\n                            <button type=\"button\" mat-button class=\"mr-1\" (click)=\"huy()\"><i class=\"ft-arrow-left\"></i>\n                                Hủy</button>\n                            <button type=\"button\" class=\"ml-auto\" *ngIf=\"!loading\" color=\"primary\" mat-raised-button (click)=\"xuLyLuu()\">\n                                <i class=\"ft-save\"></i>Lưu</button>\n                            <button type=\"button\" *ngIf=\"!loading\" color=\"primary\" mat-raised-button (click)=\"xuLyLuu(true)\">\n                                <i class=\"ft-save\"></i>Lưu & In phiếu truyền máu</button>\n                        </ng-container>\n                        <ng-container *ngIf=\"trangThai.DuocDuyet == true\">\n                            <button type=\"button\" mat-button (click)=\"huy()\"><i class=\"ft-arrow-left\"></i>\n                                Quay lại</button>\n                            <button type=\"button\" class=\"ml-auto\" *ngIf=\"!loading\" color=\"primary\" mat-raised-button (click)=\"xuLyInPhieu()\">\n                                <i class=\"ft-save\"></i>In phiếu truyền máu</button>\n                        </ng-container>\n\n                        <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                alt=\"Loading\" /></button>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/mau-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/mau-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MauRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauRoutingModule", function() { return MauRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _nhap_kho_mau_create_nhap_kho_mau_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nhap-kho-mau-create/nhap-kho-mau-create.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.ts");
/* harmony import */ var _nhap_kho_mau_list_nhap_kho_mau_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nhap-kho-mau-list/nhap-kho-mau-list.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.ts");
/* harmony import */ var _nhap_kho_mau_update_nhap_kho_mau_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nhap-kho-mau-update/nhap-kho-mau-update.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.ts");









const routes = [
    {
        path: '',
        component: _nhap_kho_mau_list_nhap_kho_mau_list_component__WEBPACK_IMPORTED_MODULE_7__["NhapKhoMauListComponent"],
        data: {
            title: 'Danh sách nhập kho máu',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoMau,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _nhap_kho_mau_create_nhap_kho_mau_create_component__WEBPACK_IMPORTED_MODULE_6__["NhapKhoMauCreateComponent"],
        data: {
            title: 'Nhập máu',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoMau,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _nhap_kho_mau_update_nhap_kho_mau_update_component__WEBPACK_IMPORTED_MODULE_8__["NhapKhoMauUpdateComponent"],
        data: {
            title: 'Chi tiết phiếu nhập máu',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoMau,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let MauRoutingModule = class MauRoutingModule {
};
MauRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MauRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/mau.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/mau.module.ts ***!
  \**********************************************************/
/*! exports provided: MauModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauModule", function() { return MauModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mau_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mau-routing.module */ "./src/app/modules/main/nhap-xuat/mau/mau-routing.module.ts");
/* harmony import */ var _nhap_kho_mau_list_nhap_kho_mau_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nhap-kho-mau-list/nhap-kho-mau-list.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.ts");
/* harmony import */ var _nhap_kho_mau_shared_nhap_kho_mau_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nhap-kho-mau-shared/nhap-kho-mau-shared.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.ts");
/* harmony import */ var _nhap_kho_mau_create_nhap_kho_mau_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nhap-kho-mau-create/nhap-kho-mau-create.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.ts");
/* harmony import */ var _nhap_kho_mau_update_nhap_kho_mau_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nhap-kho-mau-update/nhap-kho-mau-update.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.ts");
/* harmony import */ var _nhap_kho_mau_in_phieu_popup_nhap_kho_mau_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");





















let MauModule = class MauModule {
};
MauModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _nhap_kho_mau_list_nhap_kho_mau_list_component__WEBPACK_IMPORTED_MODULE_4__["NhapKhoMauListComponent"],
            _nhap_kho_mau_shared_nhap_kho_mau_shared_component__WEBPACK_IMPORTED_MODULE_5__["NhapKhoMauSharedComponent"],
            _nhap_kho_mau_create_nhap_kho_mau_create_component__WEBPACK_IMPORTED_MODULE_6__["NhapKhoMauCreateComponent"],
            _nhap_kho_mau_update_nhap_kho_mau_update_component__WEBPACK_IMPORTED_MODULE_7__["NhapKhoMauUpdateComponent"],
            _nhap_kho_mau_in_phieu_popup_nhap_kho_mau_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_8__["NhapKhoMauInPhieuPopupComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _mau_routing_module__WEBPACK_IMPORTED_MODULE_3__["MauRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_11__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"],
            _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_17__["IntlModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__["PdfViewerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"]
        ],
        entryComponents: [
            _nhap_kho_mau_in_phieu_popup_nhap_kho_mau_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_8__["NhapKhoMauInPhieuPopupComponent"]
        ]
    })
], MauModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvbWF1L25oYXAta2hvLW1hdS1jcmVhdGUvbmhhcC1raG8tbWF1LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NhapKhoMauCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoMauCreateComponent", function() { return NhapKhoMauCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _nhap_kho_mau_shared_nhap_kho_mau_shared_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nhap-kho-mau-shared/nhap-kho-mau-shared.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nhap_kho_mau_in_phieu_popup_nhap_kho_mau_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");















let NhapKhoMauCreateComponent = class NhapKhoMauCreateComponent {
    constructor(notificationService, authService, apiService, router, dialog, location) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.apiService = apiService;
        this.router = router;
        this.dialog = dialog;
        this.location = location;
        this.loading = false;
        this.baseRoute = "/nhap-xuat/mau/nhap-kho";
    }
    ngOnInit() {
        this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].NhapKhoMau;
    }
    getTrangThaiYeuCau(event) {
        if (event != undefined && event != null) {
            this.trangThai = event;
        }
    }
    xuLyLuu(inPhieu = false) {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add)) {
            this.dialog
                .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có chắc chắn muốn lưu phiếu nhập máu này không?",
                },
            })
                .afterClosed()
                .subscribe((result) => {
                if (result == "Yes") {
                    this.validationErrors = [];
                    var phieuNhapKho = this.shared.getData();
                    phieuNhapKho.InPhieu = inPhieu;
                    this.apiService.post("NhapKhoMau/XuLyTaoPhieuNhapKhoMau", phieuNhapKho).subscribe(res => {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_3__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_4__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        if (inPhieu) {
                            this.dialog.open(_nhap_kho_mau_in_phieu_popup_nhap_kho_mau_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_11__["NhapKhoMauInPhieuPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: res,
                            }).afterClosed().subscribe(result => {
                                this.huy();
                            });
                        }
                        else {
                            this.huy();
                        }
                    }, err => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_4__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    huy() {
        //this.router.navigate([this.baseRoute]);
        this.location.back();
    }
};
NhapKhoMauCreateComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhap_kho_mau_shared_nhap_kho_mau_shared_component__WEBPACK_IMPORTED_MODULE_9__["NhapKhoMauSharedComponent"], { static: true })
], NhapKhoMauCreateComponent.prototype, "shared", void 0);
NhapKhoMauCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-mau-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-mau-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-mau-create.component.scss */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-create/nhap-kho-mau-create.component.scss")).default]
    })
], NhapKhoMauCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvbWF1L25oYXAta2hvLW1hdS1pbi1waGlldS1wb3B1cC9uaGFwLWtoby1tYXUtaW4tcGhpZXUtcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: NhapKhoMauInPhieuPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoMauInPhieuPopupComponent", function() { return NhapKhoMauInPhieuPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let NhapKhoMauInPhieuPopupComponent = class NhapKhoMauInPhieuPopupComponent {
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
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, "g"), replace);
    }
    getSharedPrintForm() {
        // this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU TRUYỀN MÁU</th></p>", "");
        return new Promise(resolve => {
            let source = this.replaceAll(this.data, "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU TRUYỀN MÁU</th></p>", "");
            source = this.replaceAll(source, "zoom:100%;", "zoom:80%;");
            setTimeout(function () {
                resolve(source);
            }, 100);
            this.close();
        });
    }
};
NhapKhoMauInPhieuPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
NhapKhoMauInPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-mau-in-phieu-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-mau-in-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-mau-in-phieu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], NhapKhoMauInPhieuPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9tYXUvbmhhcC1raG8tbWF1LWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXG1hdVxcbmhhcC1raG8tbWF1LWxpc3RcXG5oYXAta2hvLW1hdS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L21hdS9uaGFwLWtoby1tYXUtbGlzdC9uaGFwLWtoby1tYXUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvbWF1L25oYXAta2hvLW1hdS1saXN0L25oYXAta2hvLW1hdS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufSIsIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NhapKhoMauListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoMauListComponent", function() { return NhapKhoMauListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mau_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mau.model */ "./src/app/modules/main/nhap-xuat/mau/mau.model.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");






















let NhapKhoMauListComponent = class NhapKhoMauListComponent {
    constructor(authService, notificationService, route, location, dialog, apiService, router) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.route = route;
        this.location = location;
        this.dialog = dialog;
        this.apiService = apiService;
        this.router = router;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.baseRoute = "/nhap-xuat/mau/nhap-kho";
        this.gridColumns = [];
        this.gridChildColumns = [];
        this._gridColumnsFilter = [];
        this._isCheckColumnFilter = true;
        this.strAdditionalSearchString = "";
        this.sort = [{
                field: 'TinhTrang',
                dir: 'asc'
            }];
        this.timKiemObj = new _mau_model__WEBPACK_IMPORTED_MODULE_9__["NhapKhoMauTimKiem"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].NhapKhoMau;
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachNhapKhoMau");
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
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachNhapKhoMau");
        }
        this.gridColumns = [
            { Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true, Template: this.soPhieuTemplate },
            { Field: "SoHoaDon", Title: "Số Hóa Đơn", Width: 100, Sortable: true },
            { Field: "NgayHoaDon", Title: "Ngày Hóa Đơn", Width: 120, Sortable: true, Template: this.ngayHoaDonTemplate },
            { Field: "NhaCungCap", Title: "Nhà cung cấp", Width: 180, Sortable: true },
            { Field: "GhiChu", Title: "Ghi chú", Width: 160, Sortable: true },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Sortable: true, Template: this.trangThaiTemplate },
            { Field: "NguoiNhap", Title: "Người nhập", Width: 140, Sortable: true },
            { Field: "NgayNhap", Title: "Ngày nhập", Width: 120, Sortable: true, Template: this.ngayNhapTemplate },
            { Field: "NguoiDuyet", Title: "Người duyệt", Width: 140, Sortable: false },
            { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 120, Sortable: true, Template: this.ngayDuyetTemplate },
            { Field: "Action", Title: "", Width: 40, Sortable: false, Template: this.actionTemplate }
        ];
        this.gridChildColumns = [
            { Field: "NhomMauNguoiBenh", Title: "Nhóm máu người bệnh", Width: 120, Sortable: true },
            { Field: "MaTuiMau", Title: "Mã túi máu", Width: 80, Sortable: true },
            { Field: "ChePhamMau", Title: "Chế phẩm máu", Width: 180, Sortable: true },
            { Field: "NgaySanXuat", Title: "Ngày sản xuất", Width: 120, Sortable: true, Template: this.ngaySanXuatTemplate },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 120, Sortable: true, Template: this.hanSuDungTemplate },
            { Field: "DonGiaDichVu", Title: "Đơn giá DV", Width: 140, Sortable: true, Template: this.donGiaDVTemplate },
            { Field: "DonGiaBaoHiem", Title: "Đơn giá BH", Width: 140, Sortable: true, Template: this.donGiaBHTemplate }
        ];
        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
    }
    searchChanges(event) {
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
            this.timKiemObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].formatDateTime(this.timKiemObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
        }
        else {
            this.timKiemObj.TuNgayDenNgay.TuNgay = null;
        }
        if (this.timKiemObj.TuNgayDenNgay != null && this.timKiemObj.TuNgayDenNgay.endDate != null) {
            this.timKiemObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].formatDateTime(this.timKiemObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
        }
        else {
            this.timKiemObj.TuNgayDenNgay.DenNgay = null;
        }
        var queryString = JSON.stringify(this.timKiemObj);
        this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachNhapKhoMau", queryString);
        this.gridChild.search();
    }
    themNhapKhoMau() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update)) {
            this.router.navigate([this.baseRoute + "/them"]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xuLyXuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("NhapKhoMau/ExportDanhSachNhapKhoMau", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "NhapKhoMau" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xemChiTiet(dataItem) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update)) {
            this.router.navigate([this.baseRoute + "/chinh-sua/" + dataItem.Id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoaNhapKhoMau(nhapKhoMauId) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].MessConfirm, ["xóa"]) }
            }).afterClosed().subscribe(result => {
                if (result == "Yes") {
                    this.apiService.delete("NhapKhoMau/XuLyXoaPhieuNhapKhoMau?id=" + nhapKhoMauId).subscribe(res => {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                        this.gridChild.search();
                    }, err => {
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
NhapKhoMauListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "soPhieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHoaDonTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "ngayHoaDonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhapTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "ngayNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngaySanXuatTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "ngaySanXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hanSuDungTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "hanSuDungTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaDVTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "donGiaDVTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBHTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "donGiaBHTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], NhapKhoMauListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
], NhapKhoMauListComponent.prototype, "gridChild", void 0);
NhapKhoMauListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-mau-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-mau-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-mau-list.component.scss */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-list/nhap-kho-mau-list.component.scss")).default]
    })
], NhapKhoMauListComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 5px;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n  white-space: break-spaces;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\nfieldset ul.inline > li:last-child {\n  margin-right: -20px;\n  float: right;\n}\n\nfieldset ul.five-col {\n  -moz-column-count: 5;\n  column-count: 5;\n  list-style-position: inside;\n  display: flex;\n}\n\nfieldset ul.five-col li {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  width: 20%;\n}\n\nfieldset ul.five-col li.d-empty {\n  width: 20%;\n  height: 50px;\n}\n\n.po-h {\n  color: #005dab;\n  position: relative;\n  left: 5px;\n  right: 2px;\n}\n\n.po-h mat-icon {\n  display: contents;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9tYXUvbmhhcC1raG8tbWF1LXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcbWF1XFxuaGFwLWtoby1tYXUtc2hhcmVkXFxuaGFwLWtoby1tYXUtc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L21hdS9uaGFwLWtoby1tYXUtc2hhcmVkL25oYXAta2hvLW1hdS1zaGFyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFFRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L21hdS9uaGFwLWtoby1tYXUtc2hhcmVkL25oYXAta2hvLW1hdS1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwuZml2ZS1jb2wge1xuICAtd2Via2l0LWNvbHVtbi1jb3VudDogNTtcbiAgLW1vei1jb2x1bW4tY291bnQ6IDU7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5maWVsZHNldCB1bC5maXZlLWNvbCBsaSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAyMCU7XG59XG5cbmZpZWxkc2V0IHVsLmZpdmUtY29sIGxpLmQtZW1wdHkge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5wby1oIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xuICByaWdodDogMnB4O1xufVxuXG4ucG8taCBtYXQtaWNvbiB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bC5maXZlLWNvbCB7XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiA1O1xuICAtbW96LWNvbHVtbi1jb3VudDogNTtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmZpZWxkc2V0IHVsLmZpdmUtY29sIGxpIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgd2lkdGg6IDIwJTtcbn1cblxuZmllbGRzZXQgdWwuZml2ZS1jb2wgbGkuZC1lbXB0eSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnBvLWgge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1cHg7XG4gIHJpZ2h0OiAycHg7XG59XG5cbi5wby1oIG1hdC1pY29uIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NhapKhoMauSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoMauSharedComponent", function() { return NhapKhoMauSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _mau_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mau.model */ "./src/app/modules/main/nhap-xuat/mau/mau.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/add-circle */ "./node_modules/@iconify/icons-ic/add-circle.js");
/* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");

















let NhapKhoMauSharedComponent = class NhapKhoMauSharedComponent {
    constructor(apiService, route, notificationService, authService, cdRef, dialog) {
        this.apiService = apiService;
        this.route = route;
        this.notificationService = notificationService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.dialog = dialog;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icAddCircle = _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.baseRoute = "/nhap-xuat/mau/nhap-kho";
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.gridColumns = [];
        this.phieuNhapKhoMau = new _mau_model__WEBPACK_IMPORTED_MODULE_10__["PhieuNhapKhoMau"]();
        this.phieuNhapKhoMauChiTiet = new _mau_model__WEBPACK_IMPORTED_MODULE_10__["NhapKhoMauChiTiet"]();
        this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].NhapKhoMau;
        this.phieuNhapKhoMau.NhapKhoMauChiTiets = new Array();
        this.huyThongTinMau();
        let id = this.route.snapshot.params.id;
        id = (id === undefined || id === null) ? 0 : id;
        this.getById(id);
        this.gridColumns = [
            { Field: "MaTuiMau", Title: "Mã túi máu", Width: 80, Template: this.maTuiMauTemplate },
            { Field: "TenDichVu", Title: "Chế phẩm máu", Width: 120 },
            { Field: "TenNhomMau", Title: "Nhóm máu túi máu", Width: 70 },
            { Field: "NgaySanXuat", Title: "Ngày sản xuất", Width: 90, Template: this.ngaySanXuatTemplate },
            { Field: "NgayLamXetNghiemHoaHop", Title: "Ngày làm XN hòa hợp", Width: 90, Template: this.ngayLamXNHoaHopTemplate },
            { Field: "NguoiLamXetNghiemHoaHop", Title: "Người làm XN hòa hợp", Width: 90 },
            { Field: "HanSuDung", Title: "HSD", Width: 90, Template: this.hanSuDungTemplate },
            { Field: "TenKetQuaXetNghiemSotRet", Title: "Sốt rét", Width: 60 },
            { Field: "TenKetQuaXetNghiemGiangMai", Title: "Giang mai", Width: 60 },
            { Field: "TenKetQuaXetNghiemHCV", Title: "HCV", Width: 60 },
            { Field: "TenKetQuaXetNghiemHBV", Title: "HBV", Width: 60 },
            { Field: "TenKetQuaXetNghiemHIV", Title: "HIV", Width: 60 },
            // { Field: "TenKetQuaPhanUngCheoOngI", Title: "KQ phản ứng chéo ống I", Width: 60},
            // { Field: "TenKetQuaPhanUngCheoOngII", Title: "KQ phản ứng chéo ống II", Width: 60},
            // { Field: "TenKetQuaXetNghiemMoiTruongMuoi", Title: "Môi trường muối", Width: 60},
            // { Field: "TenKetQuaXetNghiem37oCKhangGlubulin", Title: "37o C/Kháng glubin", Width: 60},
            // { Field: "TenKetQuaXetNghiemNAT", Title: "NAT", Width: 60},
            { Field: "KetQuaXetNghiemKhacs", Title: "Kết quả khác", Width: 240, Template: this.ketQuaKhacTemplate },
            // { Field: "NguoiThucHien1", Title: "Người thực hiện 1", Width: 90 },
            // { Field: "NguoiThucHien2", Title: "Người thực hiện 2", Width: 90 },
            { Field: "TenBenhNhanTruyenMau", Title: "Xuất cho người bệnh", Width: 120, Template: this.benhNhanTuyenMauTemplate },
            { Field: "Action", Title: "", Width: 70, Template: this.actionTemplate }
        ];
    }
    getById(id) {
        this.showPopupLoadingData();
        this.apiService.get("NhapKhoMau/GetPhieuNhapKhoMau?id=" + id)
            .subscribe((resultData) => {
            if (resultData !== undefined && resultData != null) {
                this.phieuNhapKhoMau = resultData;
                this.trangThaiYeuCau.emit(new _mau_model__WEBPACK_IMPORTED_MODULE_10__["TrangThaiDuyetNhapKhoMau"](this.phieuNhapKhoMau.TenTrangThai, this.phieuNhapKhoMau.DuocKeToanDuyet));
                this.gridDataSource.data = this.phieuNhapKhoMau.NhapKhoMauChiTiets;
                this.closePopupLoadingData();
            }
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
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
    getData() {
        this.phieuNhapKhoMau.NhapKhoMauChiTiets.forEach((element, index) => {
            element.MaTuiMauDangNhaps = this.phieuNhapKhoMau.NhapKhoMauChiTiets.filter(x => x != element).map(({ MaTuiMau }) => MaTuiMau);
            element.YeuCauTruyenMauIdDangChons = this.phieuNhapKhoMau.NhapKhoMauChiTiets.filter(x => x != element).map(({ YeuCauTruyenMauId }) => YeuCauTruyenMauId);
        });
        return this.phieuNhapKhoMau;
    }
    changeLoaiNguoiGiao() {
        this.phieuNhapKhoMau.NguoiGiaoId = this.phieuNhapKhoMau.TenNguoiGiao = null;
    }
    huyThongTinMau() {
        this.phieuNhapKhoMauChiTiet = new _mau_model__WEBPACK_IMPORTED_MODULE_10__["NhapKhoMauChiTiet"]();
        this.phieuNhapKhoMauChiTiet.NgayNhap = new Date();
        this.phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs = new Array();
        this.validationErrorsChiTiet = [];
    }
    themKetQuaXetNghiemKhac() {
        this.phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs.push(new _mau_model__WEBPACK_IMPORTED_MODULE_10__["KetQuaXetNghiemKhac"]());
    }
    getLength() {
        return Array(this.phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs.length % 5);
    }
    chonChePhamMau(event) {
        if (event != undefined && event != null) {
            this.phieuNhapKhoMauChiTiet.TenMauVaChePham = event.DisplayName;
        }
        else {
            this.phieuNhapKhoMauChiTiet.TenMauVaChePham = null;
        }
    }
    chonNhomMau(event) {
        if (event != undefined && event != null) {
            this.phieuNhapKhoMauChiTiet.TenNhomMau = event.DisplayName;
        }
        else {
            this.phieuNhapKhoMauChiTiet.TenNhomMau = null;
        }
    }
    chonYeuToRh(event) {
        if (event != undefined && event != null) {
            this.phieuNhapKhoMauChiTiet.TenYeuToTh = event.DisplayName;
        }
        else {
            this.phieuNhapKhoMauChiTiet.TenYeuToTh = null;
        }
    }
    chonYeuCauTruyenMau(event) {
        if (event != undefined && event != null) {
            this.phieuNhapKhoMauChiTiet.ThongTinYeuCauTruyenMau = event;
            this.phieuNhapKhoMauChiTiet.TenBenhNhanTruyenMau = event.HoTen;
            this.phieuNhapKhoMauChiTiet.MaDichVu = event.MaChePhamMau;
            this.phieuNhapKhoMauChiTiet.TenDichVu = event.TenChePhamMau;
            this.phieuNhapKhoMauChiTiet.MauVaChePhamId = event.ChePhamMauId;
            this.phieuNhapKhoMauChiTiet.PhanLoaiMau = event.PhanLoaiMau;
            this.phieuNhapKhoMauChiTiet.TheTich = event.TheTich;
        }
        else {
            this.phieuNhapKhoMauChiTiet.ThongTinYeuCauTruyenMau = null;
            this.phieuNhapKhoMauChiTiet.TenBenhNhanTruyenMau = null;
            this.phieuNhapKhoMauChiTiet.MaDichVu = null;
            this.phieuNhapKhoMauChiTiet.TenDichVu = null;
            this.phieuNhapKhoMauChiTiet.MauVaChePhamId = null;
            this.phieuNhapKhoMauChiTiet.PhanLoaiMau = null;
            this.phieuNhapKhoMauChiTiet.TheTich = null;
        }
    }
    chonNguoiLamXNHP(event) {
        if (event != undefined && event != null) {
            this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHopId = event.KeyId;
            this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHop = event.DisplayName;
        }
        else {
            this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHopId = null;
            this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHop = null;
        }
    }
    themThongTinMau() {
        this.validationErrorsChiTiet = [];
        this.cdRef.detectChanges;
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Add)) {
            this.phieuNhapKhoMauChiTiet.MaTuiMauDangNhaps = this.phieuNhapKhoMau.NhapKhoMauChiTiets.map(({ MaTuiMau }) => MaTuiMau);
            this.phieuNhapKhoMauChiTiet.YeuCauTruyenMauIdDangChons = this.phieuNhapKhoMau.NhapKhoMauChiTiets.map(({ YeuCauTruyenMauId }) => YeuCauTruyenMauId);
            this.apiService.post("NhapKhoMau/KiemTraValidationThemMauVaChePham", this.phieuNhapKhoMauChiTiet).subscribe(res => {
                this.phieuNhapKhoMau.NhapKhoMauChiTiets.push(res);
                this.huyThongTinMau();
            }, err => {
                this.validationErrorsChiTiet = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    capNhatThongTinMau() {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
            let index = this.phieuNhapKhoMauChiTiet.Index;
            let chiTiet = this.phieuNhapKhoMau.NhapKhoMauChiTiets[index];
            if (chiTiet != undefined && chiTiet != null) {
                this.phieuNhapKhoMauChiTiet.MaTuiMauDangNhaps = this.phieuNhapKhoMau.NhapKhoMauChiTiets.filter(x => x.Index != index).map(({ MaTuiMau }) => MaTuiMau);
                this.phieuNhapKhoMauChiTiet.YeuCauTruyenMauIdDangChons = this.phieuNhapKhoMau.NhapKhoMauChiTiets.filter(x => x.Index != index).map(({ YeuCauTruyenMauId }) => YeuCauTruyenMauId);
                this.apiService.post("NhapKhoMau/KiemTraValidationThemMauVaChePham", this.phieuNhapKhoMauChiTiet).subscribe(res => {
                    this.phieuNhapKhoMau.NhapKhoMauChiTiets[index] = Object.assign({}, res);
                    this.huyThongTinMau();
                }, err => {
                    this.validationErrorsChiTiet = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoaNhapMauChiTiet(index) {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Delete)) {
            if (this.phieuNhapKhoMau.NhapKhoMauChiTiets != null && this.phieuNhapKhoMau.NhapKhoMauChiTiets.length > 0) {
                this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, ["xóa"]) }
                }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                        this.phieuNhapKhoMau.NhapKhoMauChiTiets.splice(index, 1);
                    }
                });
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    suaNhapMauChiTiet(dataItem, index) {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
            if (this.phieuNhapKhoMau.NhapKhoMauChiTiets != null && this.phieuNhapKhoMau.NhapKhoMauChiTiets.length > 0) {
                this.validationErrorsChiTiet = [];
                dataItem.Index = index;
                this.phieuNhapKhoMauChiTiet.MauVaChePhamId = dataItem.MauVaChePhamId;
                setTimeout(() => {
                    this.phieuNhapKhoMauChiTiet = Object.assign({}, dataItem);
                    this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHopId = dataItem.NguoiLamXetNghiemHoaHopId;
                    this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHop = dataItem.NguoiLamXetNghiemHoaHop;
                    this.phieuNhapKhoMauChiTiet.TenMauVaChePham = dataItem.TenMauVaChePham;
                }, 300);
                // this.phieuNhapKhoMauChiTiet.YeuCauTruyenMauId = dataItem.YeuCauTruyenMauId;
                // this.phieuNhapKhoMauChiTiet.TenBenhNhanTruyenMau = dataItem.TenBenhNhanTruyenMau;
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoaKetQuaXetNghiemKhac(phieuNhapKhoMauChiTiet, index) {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Delete)) {
            if (phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs != null && phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs.length > 0) {
                this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, ["xóa"]) }
                }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                        phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs.splice(index, 1);
                    }
                });
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    clearValidateErrorOtherCallback(event) {
        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].clearValidateErrorOtherCallback(this, event);
    }
};
NhapKhoMauSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTuiMauTemplate', { static: true })
], NhapKhoMauSharedComponent.prototype, "maTuiMauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngaySanXuatTemplate', { static: true })
], NhapKhoMauSharedComponent.prototype, "ngaySanXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayLamXNHoaHopTemplate', { static: true })
], NhapKhoMauSharedComponent.prototype, "ngayLamXNHoaHopTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hanSuDungTemplate', { static: true })
], NhapKhoMauSharedComponent.prototype, "hanSuDungTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhanTuyenMauTemplate', { static: true })
], NhapKhoMauSharedComponent.prototype, "benhNhanTuyenMauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ketQuaKhacTemplate', { static: true })
], NhapKhoMauSharedComponent.prototype, "ketQuaKhacTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], NhapKhoMauSharedComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhapKhoMauSharedComponent.prototype, "validationErrors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NhapKhoMauSharedComponent.prototype, "trangThaiYeuCau", void 0);
NhapKhoMauSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-mau-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-mau-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-mau-shared.component.scss */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.scss")).default]
    })
], NhapKhoMauSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvbWF1L25oYXAta2hvLW1hdS11cGRhdGUvbmhhcC1raG8tbWF1LXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NhapKhoMauUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoMauUpdateComponent", function() { return NhapKhoMauUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _nhap_kho_mau_in_phieu_popup_nhap_kho_mau_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component.ts");
/* harmony import */ var _nhap_kho_mau_shared_nhap_kho_mau_shared_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../nhap-kho-mau-shared/nhap-kho-mau-shared.component */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-shared/nhap-kho-mau-shared.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");















let NhapKhoMauUpdateComponent = class NhapKhoMauUpdateComponent {
    constructor(notificationService, authService, apiService, router, dialog, location) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.apiService = apiService;
        this.router = router;
        this.dialog = dialog;
        this.location = location;
        this.loading = false;
        this.baseRoute = "/nhap-xuat/mau/nhap-kho";
    }
    ngOnInit() {
        this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].NhapKhoMau;
    }
    getTrangThaiYeuCau(event) {
        if (event != undefined && event != null) {
            this.trangThai = event;
        }
    }
    xuLyLuu(inPhieu = false) {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
            this.dialog
                .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có chắc chắn muốn lưu phiếu nhập máu này không?",
                },
            })
                .afterClosed()
                .subscribe((result) => {
                if (result == "Yes") {
                    this.validationErrors = [];
                    var phieuNhapKho = this.shared.getData();
                    phieuNhapKho.InPhieu = inPhieu;
                    this.apiService.put("NhapKhoMau/XuLyCapNhatPhieuNhapKhoMau", phieuNhapKho).subscribe(res => {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        if (inPhieu) {
                            this.dialog.open(_nhap_kho_mau_in_phieu_popup_nhap_kho_mau_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_12__["NhapKhoMauInPhieuPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: res,
                            }).afterClosed().subscribe(result => {
                                this.huy();
                            });
                        }
                        else {
                            this.huy();
                        }
                    }, err => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xuLyInPhieu() {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
            var phieuNhapKho = this.shared.getData();
            this.apiService.get("NhapKhoMau/XuLyInPhieuTruyenMau?phieuTruyenMauId=" + phieuNhapKho.Id).subscribe(res => {
                this.dialog.open(_nhap_kho_mau_in_phieu_popup_nhap_kho_mau_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_12__["NhapKhoMauInPhieuPopupComponent"], {
                    disableClose: false,
                    width: '1200px',
                    data: res,
                }).afterClosed().subscribe(result => {
                });
            }, err => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    huy() {
        //this.router.navigate([this.baseRoute]);
        this.location.back();
    }
};
NhapKhoMauUpdateComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_nhap_kho_mau_shared_nhap_kho_mau_shared_component__WEBPACK_IMPORTED_MODULE_13__["NhapKhoMauSharedComponent"], { static: true })
], NhapKhoMauUpdateComponent.prototype, "shared", void 0);
NhapKhoMauUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nhap-kho-mau-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-mau-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-mau-update.component.scss */ "./src/app/modules/main/nhap-xuat/mau/nhap-kho-mau-update/nhap-kho-mau-update.component.scss")).default]
    })
], NhapKhoMauUpdateComponent);



/***/ })

}]);
//# sourceMappingURL=nhap-xuat-mau-mau-module-es2015.js.map