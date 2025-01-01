(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~0a76087b"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-chevron-left.js":
/*!****************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-chevron-left.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Nội Trú',Path:''},\n        {Title:'Tổng Hợp Y Lệnh',Path:'/noi-tru/tong-hop-y-lenh', queryParams: {holdQuery : true}},\n        {Title:'Chi Tiết Tổng Hợp Y Lệnh',Path:'', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết tổng hợp y lệnh</h2>\n            </div>\n\n            <!-- <div class=\"px-6 py-4\" fxLayout=\"column\"> -->\n                <app-tong-hop-y-lenh-detail></app-tong-hop-y-lenh-detail>\n            <!-- </div> -->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header-form [crumbs]=\"[\n        {Title:'Nội Trú',Path:''},\n        {Title:'Tổng Hợp Y Lệnh',Path:'/noi-tru/tong-hop-y-lenh', queryParams: {holdQuery : true}},\n        {Title:'Chi Tiết Tổng Hợp Y Lệnh',Path:'', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết tổng hợp y lệnh</h2>\n            </div> -->\n\n            <div [class]=\"!IsDieuTriNoiTru ? 'px-6 py-4' : ''\" fxLayout=\"column\">\n                <!-- style=\"background: #e1f5fe;\"  -->\n                <fieldset *ngIf=\"!IsDieuTriNoiTru\" fxFlex=\"100%\" class=\"{{(thongTinHanhChinh != null && thongTinHanhChinh.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n                    <legend>Thông tin hành chính</legend>\n                        <div fxFlex=\"100%\">\n                            <ul class=\"inline\">\n                                <li>Mã TN:\n                                    <strong>{{thongTinHanhChinh.MaTiepNhan}}</strong>\n                                </li>\n                                <li>Mã NB:\n                                    <strong>{{thongTinHanhChinh.MaBenhNhan}}</strong>\n                                </li>\n                                <li>Họ tên:\n                                    <strong>{{thongTinHanhChinh.HoTen}}</strong>\n                                </li>\n                                <li >Tuổi:\n                                    <strong *ngIf=\"!isDuoi6Tuoi\">{{thongTinHanhChinh.Tuoi}}</strong>\n                                    <strong *ngIf=\"isDuoi6Tuoi\">{{Duoi6TuoiDisplay}}</strong>\n                                </li>\n                                <li>\n                                    Giới tính:\n                                    <strong>{{thongTinHanhChinh.TenGioiTinh}}</strong>\n                                </li>\n                                <li>\n                                    Địa chỉ:\n                                    <strong>{{thongTinHanhChinh.DiaChi}}</strong>\n                                </li>\n                                <li>\n                                    Nghề nghiệp:\n                                    <strong>{{thongTinHanhChinh.NgheNghiep}}</strong>\n                                </li>\n                                <li>\n                                    Số BA:\n                                    <strong>{{thongTinHanhChinh.SoBenhAn}}</strong>\n                                </li>\n                                <li>\n                                    Loại BA:\n                                    <strong>{{thongTinHanhChinh.LoaiBenhAn}}</strong>\n                                </li>\n                                <li>\n                                    Khoa:\n                                    <strong>{{thongTinHanhChinh.Khoa}}</strong>\n                                </li>\n                                <li>\n                                    BS điều trị:\n                                    <strong>{{thongTinHanhChinh.BacSiDieuTri}}</strong>\n                                </li>\n                                <li>\n                                    Phòng:\n                                    <strong>{{thongTinHanhChinh.Phong}}</strong>\n                                </li>\n                                <li>\n                                    Giường:\n                                    <strong>{{thongTinHanhChinh.Giuong}}</strong>\n                                </li>\n                                <li>\n                                    Đối tượng: <strong style=\"color: blue;\">{{thongTinHanhChinh.DoiTuong}}</strong>\n                                </li>\n                            </ul>\n                        </div>\n                    </fieldset>\n\n                    <fieldset fxFlex=\"100%\" [class]=\"!IsDieuTriNoiTru ? 'mt-4' : 'fieldset_noi_tru'\">\n                        <legend *ngIf=\"!IsDieuTriNoiTru\">Thông tin y lệnh</legend>\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <div fxFlex=\"15%\">\n                                <mat-button-toggle-group fxFlex=\"100%\"> \n                                    <mat-button-toggle class=\"mat-btn-p0\" fxFlex=\"20%\" (click)=\"prevDateLink()\">\n                                        <mat-icon [icIcon]=\"icChevronLeft\"></mat-icon>\n                                    </mat-button-toggle>\n                                    <mat-button-toggle fxFlex=\"60%\" (click)=\"datepicker.toggle()\">\n                                        <kendo-datepicker #datepicker [weekNumber]=\"true\" style=\"visibility: hidden;width: 0;height: 0;\"\n                                            (ngModelChange)=\"changeDateLink($event)\" [(ngModel)]=\"tongHopYLenhPhieuDieuTri.NgayYLenh\"\n                                            [value]=\"tongHopYLenhPhieuDieuTri.NgayYLenh\">\n                                        </kendo-datepicker>\n                                        <span class=\"reverse-ellipsis r\" [innerHTML]=\"tongHopYLenhPhieuDieuTri.NgayYLenhDisplay\"></span>\n                                    </mat-button-toggle>\n                                    <mat-button-toggle  class=\"mat-btn-p0\" fxFlex=\"20%\" (click)=\"nextDateLink()\">\n                                        <mat-icon [icIcon]=\"icChevronRight\"></mat-icon>\n                                    </mat-button-toggle>\n                                </mat-button-toggle-group>\n                            </div>\n                            <ng-container *ngIf=\"!IsDisableEdit\">\n                                <app-timepicker id=\"gioYLenh\" fxFlex=\"15%\" [(model)]=\"tongHopYLenhThem.GioYLenh\" moreClass=\"pl-0\"\n                                    style=\"padding-bottom: 0px;\" label=\"Giờ y lệnh\" [required]=\"true\" [modelIsNumber]=\"true\" (modelChange)=\"changeGioYLenh($event)\"\n                                    [validationerror]=\"'GioYLenh' | validationerror:validationErrors\">\n                                </app-timepicker>\n                                <app-textarea fxFlex=\"70%\" id=\"dienBien\" label=\"Theo dõi diễn biến\" maxlength=\"4000\"\n                                    [(model)]=\"tongHopYLenhThem.DienBien\" minHeight=\"21\">\n                                </app-textarea>\n                                <app-textarea fxFlex=\"50%\" id=\"moTa\" label=\"Thực hiện y lệnh/ chăm sóc\" maxlength=\"1000\"\n                                    [(model)]=\"tongHopYLenhThem.MoTaYLenh\" minHeight=\"21\" [required]=\"true\"\n                                    [validationerror]=\"'MoTaYLenh' | validationerror:validationErrors\">\n                                </app-textarea>\n                                <app-combobox id=\"nguoiNhap\" fxFlex=\"25%\" fxFlex.sm=\"15%\"\n                                    [(model)]=\"tongHopYLenhThem.NhanVienXacNhanThucHienId\" [modelText]=\"tongHopYLenhThem.NhanVienXacNhanThucHienDisplay\"\n                                    url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người thực hiện\" (selectionChange)=\"chonYTaThucHien($event)\"\n                                    [validationerror]=\"'NhanVienXacNhanThucHienId' | validationerror:validationErrors\">\n                                </app-combobox>\n                                <app-timepicker id=\"gioThucHien\" fxFlex=\"15%\" [(model)]=\"tongHopYLenhThem.GioThucHien\" moreClass=\"pl-0\"\n                                    style=\"padding-bottom: 0px;\" label=\"Giờ thực hiện\" [modelIsNumber]=\"true\"\n                                    [validationerror]=\"'GioThucHien' | validationerror:validationErrors\">\n                                </app-timepicker>\n                                <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                                    <div class=\"container-custom no-label\">\n                                        <label>&nbsp;</label>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                            <app-checkbox fxFlex=\"100%\" value=\"true\" id=\"daThucHien\" label=\"Đã thực hiện\"\n                                                [(model)]=\"tongHopYLenhThem.XacNhanThucHien\"></app-checkbox>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n                                    <button type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1\"\n                                        (click)=\"huyThemYLenh()\">Hủy</button>\n                                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n                                        (click)=\"xuLyThemYLenh()\">Thêm</button>\n                                </div>\n                            </ng-container>\n\n                            <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\"\n                                [documentType]=\"documentype\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n                                [gridDataSource]=\"gridDataSource\">\n                            </app-grid>\n\n                            <div style=\"width: 100%; padding: 0px 16px 16px 0px; display: flex\">\n                                <button *ngIf=\"IsDieuTriNoiTru\" type=\"button\" color=\"primary\" mat-stroked-button mat-button\n                                    [style.margin-left]=\"'auto'\"  (click)=\"xuLyKiemTraInPhieu(true)\" class=\"mr-1\">In phiếu chăm sóc tất cả</button>\n                                <button *ngIf=\"IsShowButtonIn\" type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1\"\n                                    (click)=\"xuLyKiemTraInPhieu()\">In phiếu chăm sóc</button>\n\n                                <button *ngIf=\"!IsDieuTriNoiTru\" type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1\"\n                                    [style.margin-left]=\"'auto'\" (click)=\"quayLai()\">Hủy</button>\n                                <button *ngIf=\"IsDieuTriNoiTru\" type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1\"\n                                    (click)=\"getById(id)\">Hủy</button>\n                                <button *ngIf=\"!IsDisableEdit\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n                                    (click)=\"showPopupXacNhanLuu()\">Lưu</button>\n                            </div>\n\n                            <ng-template #gioYLenhTemplate let-dataItem>\n                                <p [style.marginBottom.px]=\"dataItem.TongHopYLenhDienBienChiTiets.length == 1 ? 21 : 47*dataItem.TongHopYLenhDienBienChiTiets.length\">{{dataItem.GioYLenhDisplay}}</p>\n                            </ng-template>\n                            <ng-template #dienBienTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <app-textarea *ngIf=\"dataItem.TongHopYLenhDienBienChiTiets != undefined\" (modelChange)=\"changeData()\"\n                                    id=\"dienBien{{rowIndex}}\" class=\"no-label\" label=\"\" maxlength=\"1000\" [disabled]=\"tongHopYLenhPhieuDieuTri.IsDisableEdit\"\n                                    [(model)]=\"dataItem.DienBien\" [minHeight]=\"dataItem.TongHopYLenhDienBienChiTiets.length == 1 ? 21 : 47*dataItem.TongHopYLenhDienBienChiTiets.length\">\n                                </app-textarea> \n                            </ng-template>\n\n                            <ng-template #yLenhTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n                                    <ng-container *ngFor=\"let item of dataItem.TongHopYLenhDienBienChiTiets, let i = index\">\n                                        <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                                            <div fxLayout=\"row\" *ngIf=\"!item.IsEdit\">\n                                                <app-checkbox value=\"true\" id=\"yLenh{{rowIndex}}{{i}}\" (modelChange)=\"changeXacNhanThucHien($event, item)\" [(model)]=\"item.XacNhanThucHien\"\n                                                    [disabled]=\"item.IsDisabled || tongHopYLenhPhieuDieuTri.IsDisableEdit\">\n                                                </app-checkbox>\n                                                <div style=\"margin-left: 15px;min-height: 43px;\" class=\"container-custom no-label\">\n                                                    <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                                        <label class=\"pb-2 reverse-ellipsis r\" [style.color]=\"(item.IsQuaThoiGianYLenh && !item.XacNhanThucHien) ? 'red': ''\" fxFlex=\"auto\" class=\"reverse-ellipsis r\">\n                                                            {{item.MoTaYLenh}}\n                                                        </label>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div fxLayout=\"row\" fxLayoutGap=\"16px\" *ngIf=\"item.IsEdit\" class=\"position: relative\">\n                                                <app-checkbox value=\"true\" id=\"yLenh{{rowIndex}}{{i}}\" (modelChange)=\"changeXacNhanThucHien($event, item)\"\n                                                    [(model)]=\"item.XacNhanThucHien\" [disabled]=\"item.IsDisabled || tongHopYLenhPhieuDieuTri.IsDisableEdit\">\n                                                </app-checkbox>\n                                                <app-textarea *ngIf=\"!item.IsQuaNgayThucHien\" id=\"moTaYLenh{{rowIndex}}{{i}}\" class=\"no-label\" \n                                                    fxFlex=\"auto\" (modelChange)=\"changeData()\" [style.color]=\"(item.IsQuaThoiGianYLenh && !item.XacNhanThucHien) ? 'red': ''\"\n                                                    [disabled]=\"item.IsDisabled || tongHopYLenhPhieuDieuTri.IsDisableEdit\"\n                                                    label=\"\" maxlength=\"1000\" [(model)]=\"item.MoTaYLenh\" [minHeight]=\"21\">\n                                                </app-textarea>\n                                                <div *ngIf=\"item.IsQuaNgayThucHien\" style=\"margin-left: 15px;min-height: 43px;\" class=\"container-custom no-label\">\n                                                    <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                                        <label class=\"pb-2 reverse-ellipsis r\" [style.color]=\"(item.IsQuaThoiGianYLenh && !item.XacNhanThucHien) ? 'red': ''\" fxFlex=\"auto\" class=\"reverse-ellipsis r\">\n                                                            {{item.MoTaYLenh}}\n                                                        </label>\n                                                    </div>\n                                                </div>\n                                                <!-- [style.color]=\"(item.IsQuaThoiGianYLenh && !item.XacNhanThucHien) ? 'red': ''\" -->\n                                                <button *ngIf=\"!item.IsDisabled && !tongHopYLenhPhieuDieuTri.IsDisableEdit && item.IsYLenhThemMoi\"\n                                                    kendoTooltip title=\"Xóa\" (click)=\"xuLyXoaYLenh(dataItem, item)\" class=\"icon-action-ylenh\">\n                                                    <mat-icon style=\"color: red;\" [icIcon]=\"icDelete\"></mat-icon>\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </ng-template>\n                            <ng-template #yTaThucHienTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n                                    <ng-container *ngFor=\"let item of dataItem.TongHopYLenhDienBienChiTiets, let i = index\">\n                                        <app-combobox fxFlex=\"100%\" label=\"\" id=\"yTaThucHien{{rowIndex}}{{i}}\" url=\"YeuCauLinhDuocPham/GetListNhanVien\" popupSettings=\"null\"\n                                            [(model)]=\"item.NhanVienXacNhanThucHienId\" [modelText]=\"item.NhanVienXacNhanThucHienDisplay\"  (modelChange)=\"changeData()\"\n                                            class=\"no-label item-no-padding\" label=\" \" [bind]=\"true\"  [reloadForGrid]=\"true\" [disabled]=\"item.IsDisabled || tongHopYLenhPhieuDieuTri.IsDisableEdit\" [popupSettings]=\"null\"\n                                            [validationerror]=\"'TongHopYLenhDienBiens['+rowIndex+'].TongHopYLenhDienBienChiTiets['+i+'].NhanVienXacNhanThucHienId' | validationerror:validationErrors\">\n                                        </app-combobox>\n                                    </ng-container>\n                                    <!-- [reloadForGrid]=\"true\" -->\n                                </div>\n                            </ng-template>\n                            <ng-template #gioThucHienTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n                                    <ng-container *ngFor=\"let item of dataItem.TongHopYLenhDienBienChiTiets, let i = index\">\n                                        <app-timepicker id=\"gioThucHien{{rowIndex}}{{i}}\" fxFlex=\"100%\" [(model)]=\"item.GioThucHien\" moreClass=\"pl-0\"\n                                            class=\"no-label\" style=\"padding-bottom: 0px;\" label=\"\" [modelIsNumber]=\"true\" \n                                            (modelChange)=\"changeData()\" [disabled]=\"item.IsDisabled || tongHopYLenhPhieuDieuTri.IsDisableEdit\"\n                                            [validationerror]=\"'TongHopYLenhDienBiens['+rowIndex+'].TongHopYLenhDienBienChiTiets['+i+'].GioThucHien' | validationerror:validationErrors\">\n                                        </app-timepicker>\n                                    </ng-container>\n                                </div>\n                            </ng-template>\n                            <ng-template #nguoiRaYLenhTemplate let-dataItem>\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n                                    <!-- <label *ngFor=\"let item of dataItem.TongHopYLenhDienBienChiTiets, let i = index\" \n                                        fxFlex=\"100%\" class=\"pb-5 mb-2\">\n                                        {{item.NhanVienChiDinhDisplay}}\n                                    </label> -->\n                                    <ng-container *ngFor=\"let item of dataItem.TongHopYLenhDienBienChiTiets, let i = index\">\n                                        <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                                            <div style=\"height: 43px;\" class=\"container-custom no-label\">\n                                                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                                    <label class=\"pb-2 reverse-ellipsis r\" fxFlex=\"100%\">\n                                                        {{item.NhanVienChiDinhDisplay}}\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </ng-template>\n                            <ng-template #nguoiCapNhatTemplate let-dataItem>\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n                                    <!-- <label *ngFor=\"let item of dataItem.TongHopYLenhDienBienChiTiets, let i = index\" \n                                        fxFlex=\"100%\" class=\"pb-5\">\n                                        {{item.NhanVienCapNhatDisplay}}\n                                    </label> -->\n                                    <ng-container *ngFor=\"let item of dataItem.TongHopYLenhDienBienChiTiets, let i = index\">\n                                        <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                                            <div style=\"height: 43px;\" class=\"container-custom no-label\">\n                                                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                                    <label class=\"pb-2 reverse-ellipsis r\" fxFlex=\"100%\">\n                                                        {{item.NhanVienCapNhatDisplay}}\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </ng-template>\n                            <ng-template #ngayCapNhatTemplate let-dataItem>\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n                                    <!-- <label *ngFor=\"let item of dataItem.TongHopYLenhDienBienChiTiets, let i = index\" \n                                        fxFlex=\"100%\" class=\"pb-5\">\n                                        {{item.ThoiDiemCapNhatDisplay}}\n                                    </label> -->\n\n                                    <ng-container *ngFor=\"let item of dataItem.TongHopYLenhDienBienChiTiets, let i = index\">\n                                        <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                                            <div style=\"height: 43px;\" class=\"container-custom no-label\">\n                                                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                                    <label class=\"pb-2 reverse-ellipsis r\" fxFlex=\"100%\">\n                                                        {{item.ThoiDiemCapNhatDisplay}}\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </fieldset>\n            </div>\n        <!-- </div>\n    </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU CHĂM SÓC</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" class=\"mr-1\" mat-stroked-button [mat-dialog-close]=\"null\">Hủy</button>\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Nội Trú',Path:''},\n                        {Title:'Tổng Hợp Y Lệnh',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\" [groups]=\"groups\"\n                [headerTemplate]=\"headerTemplate\" [searchString]=\"tongHopYLenhTimKiem.SearchString\" [showStt]=\"true\"\n                urlGetData=\"DieuTriNoiTru/GetDataForGridTongHopYLenh\" urlGetTotalPage=\"DieuTriNoiTru/GetTotalPageForGridTongHopYLenh\">\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div fxFlex=\"200px\" class=\"mr-2\">\n                        <mat-button-toggle-group>\n                            <mat-button-toggle (click)=\"prevDateLink()\">\n                                <mat-icon [icIcon]=\"icChevronLeft\"></mat-icon>\n                            </mat-button-toggle>\n                            <mat-button-toggle (click)=\"datepicker.toggle()\">\n                                <kendo-datepicker #datepicker [weekNumber]=\"true\" style=\"visibility: hidden;width: 0;height: 0;\"\n                                    (ngModelChange)=\"changeDateLink($event)\" [(ngModel)]=\"tongHopYLenhTimKiem.NgayYLenh\" [value]=\"tongHopYLenhTimKiem.NgayYLenh\">\n                                </kendo-datepicker>\n                                <span [innerHTML]=\"dateLinkText\"></span>\n                            </mat-button-toggle>\n                            <mat-button-toggle (click)=\"nextDateLink()\">\n                                <mat-icon [icIcon]=\"icChevronRight\"></mat-icon>\n                            </mat-button-toggle>\n                        </mat-button-toggle-group>\n                    </div>\n\n                    <app-combobox fxFlex=\"200px\" label=\"Khoa\" id=\"KhoaId\" class=\"mt-6 mr-2 on-header\" url=\"KhamBenh/GetListKhoaBenhVien\" \n                        [(model)]=\"tongHopYLenhTimKiem.KhoaId\" hierarchyKeyToSend=\"KhoaId\"\n                        (modelChange)=\"timKiemNangCao()\" popupSettings=\"null\" [reloadForGrid]=\"true\"\n                        [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" [broadcastAfterLoaded]=\"true\">\n                        <ng-template #khoaTemplateHeader let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <th width=\"20%\">Mã</th>\n                                    <th>Dịch vụ</th>\n                                </tr>\n                            </table>\n                        </ng-template>\n                        <ng-template #khoaTemplate let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                                    <td>{{dataItem.Ten}}</td>\n                                </tr>\n                            </table>\n                        </ng-template>\n                    </app-combobox>\n                    <app-combobox fxFlex=\"200px\" label=\"Phòng\" id=\"PhongId\" class=\"mt-6 mr-2 on-header\" url=\"KhamBenh/GetListPhongBenhVien\" \n                        [(model)]=\"tongHopYLenhTimKiem.PhongId\" hierarchyKeyToListen=\"KhoaId\"\n                        (modelChange)=\"timKiemNangCao()\" popupSettings=\"null\" [reloadForGrid]=\"true\"\n                        [templateHeader]=\"phongTemplateHeader\" [template]=\"phongTemplate\" [broadcastAfterLoaded]=\"true\">\n                        <ng-template #phongTemplateHeader let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <th width=\"20%\">Mã</th>\n                                    <th>Dịch vụ</th>\n                                </tr>\n                            </table>\n                        </ng-template>\n                        <ng-template #phongTemplate let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                                    <td>{{dataItem.Ten}}</td>\n                                </tr>\n                            </table>\n                        </ng-template>\n                    </app-combobox>\n                    <app-checkbox [(model)]=\"tongHopYLenhTimKiem.ChuaHoanThanh\" (modelChange)=\"timKiemNangCao()\"\n                        id=\"choGuiMau\" label=\"Chưa hoàn thành\" class=\"ml-2\">\n                    </app-checkbox>\n\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"300px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                            name=\"searchString\" [(ngModel)]=\"tongHopYLenhTimKiem.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"searchChanges($event)\" placeholder=\"Tìm kiếm ...\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <!-- <button class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\" \n                        (click)=\"xuLyXuatExcel()\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button> -->\n                </div>\n            </ng-template>\n\n            <ng-template #maBenhAnTemplate let-dataItem>\n                <a (click)=\"xemChiTiet(dataItem)\"><p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaBenhAn}}\">{{dataItem.MaBenhAn}}</p></a>\n            </ng-template>\n            <ng-template #hoanThanhTemplate let-dataItem>\n                <app-checkbox id=\"done{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.IsDone\">\n                </app-checkbox>\n            </ng-template>\n            <ng-template #ngaySinhTemplate let-dataItem>\n                {{dataItem.NgaySinhDisplay}}\n            </ng-template>\n            <ng-template #ngayYLenhTemplate let-dataItem>\n                {{dataItem.NgayYLenhDisplay}}\n            </ng-template>\n            <ng-template #ngayCapNhatTemplate let-dataItem>\n                {{dataItem.NgayCapNhatDisplay}}\n            </ng-template>\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                <strong>{{value}}</strong>\n            </ng-template>\n    </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/lich-phan-cong/lich-phan-cong-ngoai-tru/lich-phan-cong-ngoai-tru.model.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/lich-phan-cong/lich-phan-cong-ngoai-tru/lich-phan-cong-ngoai-tru.model.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: LichPhanCongNgoaiTru, NhanVienLichPhanCong, Phong, ThoiGianTrucNhanVien, ShowDateTime, LookupBacSisYta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichPhanCongNgoaiTru", function() { return LichPhanCongNgoaiTru; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanVienLichPhanCong", function() { return NhanVienLichPhanCong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phong", function() { return Phong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThoiGianTrucNhanVien", function() { return ThoiGianTrucNhanVien; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDateTime", function() { return ShowDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupBacSisYta", function() { return LookupBacSisYta; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LichPhanCongNgoaiTru {
    constructor(PhongNgoaiTruId = 0, NhanVienId = 0, khoaPhongId = 0, NgayPhanCong = null, LoaiThoiGianPhanCong = 1, Tuan1Display = "", Tuan2Display = "", Tuan3Display = "", Tuan4Display = "", Tuan5Display = "", Tuan6Display = "") {
        this.PhongNgoaiTruId = PhongNgoaiTruId;
        this.NhanVienId = NhanVienId;
        this.khoaPhongId = khoaPhongId;
        this.NgayPhanCong = NgayPhanCong;
        this.LoaiThoiGianPhanCong = LoaiThoiGianPhanCong;
        this.Tuan1Display = Tuan1Display;
        this.Tuan2Display = Tuan2Display;
        this.Tuan3Display = Tuan3Display;
        this.Tuan4Display = Tuan4Display;
        this.Tuan5Display = Tuan5Display;
        this.Tuan6Display = Tuan6Display;
    }
}
class NhanVienLichPhanCong {
    constructor(Id = 0, PhongNgoaiTruId = 0, NhanVienId = 0, NgayPhanCong = new Date, LoaiThoiGianPhanCong = 1, TenNhanVien = null, IsBacSi = false, IsUpdate = false, IsDelete = false, Thu = 0, IndexNV = 0, IsDeleteHiden = false, ListIdValidator = []) {
        this.Id = Id;
        this.PhongNgoaiTruId = PhongNgoaiTruId;
        this.NhanVienId = NhanVienId;
        this.NgayPhanCong = NgayPhanCong;
        this.LoaiThoiGianPhanCong = LoaiThoiGianPhanCong;
        this.TenNhanVien = TenNhanVien;
        this.IsBacSi = IsBacSi;
        this.IsUpdate = IsUpdate;
        this.IsDelete = IsDelete;
        this.Thu = Thu;
        this.IndexNV = IndexNV;
        this.IsDeleteHiden = IsDeleteHiden;
        this.ListIdValidator = ListIdValidator;
    }
}
class Phong {
    constructor(Id = 0, TenPhong = null, // TenPhong
    PhongNgoaiTruId = 0, // PhongId
    ThoiGianTrucNhanVienBuoiSangs = null, ThoiGianTrucNhanVienBuoiChieus = null, NhanVienTrucDelete = [], IsPrint = false, IsCopy = false, CopyForWeek = 0, CaTruc = null, CaTrucInt = 0, BacSis = [], YTas = [], ToDate = null, FromDate = null, HostingPrint = null, LookupDataYta = null, LookupDataBacsi = null, IsShowCopyForWeek = true, TenKhoa = null) {
        this.Id = Id;
        this.TenPhong = TenPhong;
        this.PhongNgoaiTruId = PhongNgoaiTruId;
        this.ThoiGianTrucNhanVienBuoiSangs = ThoiGianTrucNhanVienBuoiSangs;
        this.ThoiGianTrucNhanVienBuoiChieus = ThoiGianTrucNhanVienBuoiChieus;
        this.NhanVienTrucDelete = NhanVienTrucDelete;
        this.IsPrint = IsPrint;
        this.IsCopy = IsCopy;
        this.CopyForWeek = CopyForWeek;
        this.CaTruc = CaTruc;
        this.CaTrucInt = CaTrucInt;
        this.BacSis = BacSis;
        this.YTas = YTas;
        this.ToDate = ToDate;
        this.FromDate = FromDate;
        this.HostingPrint = HostingPrint;
        this.LookupDataYta = LookupDataYta;
        this.LookupDataBacsi = LookupDataBacsi;
        this.IsShowCopyForWeek = IsShowCopyForWeek;
        this.TenKhoa = TenKhoa;
    }
}
class ThoiGianTrucNhanVien {
    constructor(NhanVienTrucT2 = [], NhanVienTrucT3 = [], NhanVienTrucT4 = [], NhanVienTrucT5 = [], NhanVienTrucT6 = [], NhanVienTrucT7 = [], NhanVienTrucT8 = []) {
        this.NhanVienTrucT2 = NhanVienTrucT2;
        this.NhanVienTrucT3 = NhanVienTrucT3;
        this.NhanVienTrucT4 = NhanVienTrucT4;
        this.NhanVienTrucT5 = NhanVienTrucT5;
        this.NhanVienTrucT6 = NhanVienTrucT6;
        this.NhanVienTrucT7 = NhanVienTrucT7;
        this.NhanVienTrucT8 = NhanVienTrucT8;
    }
}
class ShowDateTime {
    constructor(DateTimeT2 = new Date, DateTimeT3 = new Date, DateTimeT4 = new Date, DateTimeT5 = new Date, DateTimeT6 = new Date, DateTimeT7 = new Date, DateTimeT8 = new Date) {
        this.DateTimeT2 = DateTimeT2;
        this.DateTimeT3 = DateTimeT3;
        this.DateTimeT4 = DateTimeT4;
        this.DateTimeT5 = DateTimeT5;
        this.DateTimeT6 = DateTimeT6;
        this.DateTimeT7 = DateTimeT7;
        this.DateTimeT8 = DateTimeT8;
    }
}
class LookupBacSisYta {
    constructor(DisplayName = "", KeyId = 0) {
        this.DisplayName = DisplayName;
        this.KeyId = KeyId;
    }
}


/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RvbmctaG9wLXktbGVuaC90b25nLWhvcC15LWxlbmgtZGV0YWlsLWJhY2tncm91bmQvdG9uZy1ob3AteS1sZW5oLWRldGFpbC1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: TongHopYLenhDetailBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhDetailBackgroundComponent", function() { return TongHopYLenhDetailBackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TongHopYLenhDetailBackgroundComponent = class TongHopYLenhDetailBackgroundComponent {
    constructor() { }
    ngOnInit() {
    }
};
TongHopYLenhDetailBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-y-lenh-detail-background',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-y-lenh-detail-background.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-y-lenh-detail-background.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.scss")).default]
    })
], TongHopYLenhDetailBackgroundComponent);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\n.fieldset_noi_tru {\n  margin: 20px 0px;\n  padding: 0px;\n  border: none;\n}\n\nmat-button-toggle.mat-btn-p0 button.mat-button-toggle-button > div.mat-button-toggle-label-content {\n  padding: 0px;\n}\n\napp-textarea.red-text {\n  color: red;\n}\n\n.icon-action-ylenh {\n  top: 10px;\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvdG9uZy1ob3AteS1sZW5oL3RvbmctaG9wLXktbGVuaC1kZXRhaWwvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxkaWV1LXRyaS1ub2ktdHJ1XFx0b25nLWhvcC15LWxlbmhcXHRvbmctaG9wLXktbGVuaC1kZXRhaWxcXHRvbmctaG9wLXktbGVuaC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RvbmctaG9wLXktbGVuaC90b25nLWhvcC15LWxlbmgtZGV0YWlsL3RvbmctaG9wLXktbGVuaC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RvbmctaG9wLXktbGVuaC90b25nLWhvcC15LWxlbmgtZGV0YWlsL3RvbmctaG9wLXktbGVuaC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5maWVsZHNldF9ub2lfdHJ1IHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbm1hdC1idXR0b24tdG9nZ2xlLm1hdC1idG4tcDAgYnV0dG9uLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiA+IGRpdi5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5hcHAtdGV4dGFyZWEucmVkLXRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uaWNvbi1hY3Rpb24teWxlbmgge1xuICB0b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59IiwiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG4uZmllbGRzZXRfbm9pX3RydSB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5tYXQtYnV0dG9uLXRvZ2dsZS5tYXQtYnRuLXAwIGJ1dHRvbi5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24gPiBkaXYubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYXBwLXRleHRhcmVhLnJlZC10ZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmljb24tYWN0aW9uLXlsZW5oIHtcbiAgdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: TongHopYLenhDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhDetailComponent", function() { return TongHopYLenhDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-date-math */ "./node_modules/@progress/kendo-date-math/dist/es2015/main.js");
/* harmony import */ var _tong_hop_y_lenh_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tong-hop-y-lenh.model */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-left */ "./node_modules/@iconify/icons-ic/twotone-chevron-left.js");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-right */ "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/cancel */ "./node_modules/@iconify/icons-ic/cancel.js");
/* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _tong_hop_y_lenh_in_phieu_popup_tong_hop_y_lenh_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.ts");























let TongHopYLenhDetailComponent = class TongHopYLenhDetailComponent {
    constructor(intl, location, dialog, apiService, notificationService, authService, route) {
        this.intl = intl;
        this.location = location;
        this.dialog = dialog;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.route = route;
        this.icChevronLeft = _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icCancel = _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.tongHopYLenhPhieuDieuTri = new _tong_hop_y_lenh_model__WEBPACK_IMPORTED_MODULE_4__["TongHopYLenhPhieuDieuTri"]();
        this.thongTinHanhChinh = new _tong_hop_y_lenh_model__WEBPACK_IMPORTED_MODULE_4__["TongHopYLenhThongTinBenhAn"]();
        this.tongHopYLenhThem = new _tong_hop_y_lenh_model__WEBPACK_IMPORTED_MODULE_4__["TongHopYLenhThem"]();
        this.isDuoi6Tuoi = false;
        this.Duoi6TuoiDisplay = "";
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.IsDisableEdit = false;
        this.IsChangeData = false;
        this.IsShowButtonIn = true;
        this.IsDieuTriNoiTru = false;
    }
    ngOnInit() {
        this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].TongHopYLenh;
        if (this.IsDieuTriNoiTru) {
            this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id;
            this.yeuCauTiepNhanId = (this.yeuCauTiepNhanId === undefined || this.yeuCauTiepNhanId === null) ? 0 : this.yeuCauTiepNhanId;
            this.id = this.yeuCauTiepNhanId;
            this.strNgayDieuTri = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(new Date(), "mm/dd/yyyy");
            //this.getById(this.id);
            this.ganVaKiemTraPhieuDieuTriTheoNgay(new Date());
        }
        else {
            // this.id = this.route.snapshot.params.id;
            // this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
            let fullNgayDieuTri = new Date();
            this.route.queryParams.subscribe(param => {
                this.id = param['NoiTruBenhAnId'];
                var strFullNgayDieuTri = param['strNgayDieuTri'].split('.').join('/');
                fullNgayDieuTri = new Date(strFullNgayDieuTri);
                this.strNgayDieuTri = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(fullNgayDieuTri, "mm/dd/yyyy"); //param['strNgayDieuTri'].split('.').join('/');
            });
            //this.getById(this.id);
            this.ganVaKiemTraPhieuDieuTriTheoNgay(fullNgayDieuTri);
        }
        this.gridColumns = [
            { Field: "GioYLenh", Title: "Giờ y lệnh", Width: 80, Template: this.gioYLenhTemplate },
            { Field: "DienBien", Title: "Theo dõi diễn biến", Width: 180, Template: this.dienBienTemplate },
            { Field: "YLenh", Title: "Thực hiện y lệnh/chăm sóc", Width: 220, Template: this.yLenhTemplate },
            { Field: "NhanVienChiDinhId", Title: "Người ra y lệnh", Width: 120, Template: this.nguoiRaYLenhTemplate },
            { Field: "NhanVienXacNhanThucHienId", Title: "Người thực hiện", Width: 120, Template: this.yTaThucHienTemplate },
            { Field: "GioThucHien", Title: "Giờ thực hiện", Width: 80, Template: this.gioThucHienTemplate },
            { Field: "NhanVienCapNhatId", Title: "Người cập nhật", Width: 120, Template: this.nguoiCapNhatTemplate },
            { Field: "ThoiDiemCapNhat", Title: "Ngày cập nhật", Width: 100, Template: this.ngayCapNhatTemplate }
        ];
    }
    // kiemTraPhieuDieuTriNgayHienTaiTheoYeuCauTiepNhan(yeuCauTiepNhanId: number) {
    //   if (this.authService.hasPermission(this.documentype, SecurityOperation.View) || this.authService.hasPermission(DocumentType.DanhSachDieuTriNoiTru, SecurityOperation.View)) {
    //     this.showPopupLoadingData();
    //     this.apiService.get<any>("DieuTriNoiTru/KiemTraPhieuDieuTriNgayHienTaiTheoYeuCauTiepNhan?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
    //       .subscribe(res => {
    //         this.id = res;
    //         this.getById(res, false);
    //       }, err => {
    //         this.IsShowButtonIn = false;
    //         this.IsDisableEdit = true;
    //         this.ganGiaTriNgayYLenh();
    //         if (err.Message != "Validation Failed") {
    //           this.notificationService.showError(err.Message);
    //         }
    //         this.closePopupLoadingData();
    //       });
    //   } else {
    //     this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    //   }
    // }
    getById(id, showLoadingPopup = true, inphieu = null) {
        if (showLoadingPopup) {
            this.showPopupLoadingData();
        }
        let obj = {
            NoiTruBenhAnId: id,
            NgayDieuTriStr: this.strNgayDieuTri
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["forkJoin"])(
        // this.apiService.get<TongHopYLenhThongTinBenhAn>("DieuTriNoiTru/GetTongHopYLenhThongTinHanhChinh?phieuDieuTriId=" + id),
        // this.apiService.get<TongHopYLenhPhieuDieuTri>("DieuTriNoiTru/GetThongTinChiTietYLenhPhieuDieuTri?phieuDieuTriId=" + id)
        this.apiService.post("DieuTriNoiTru/GetTongHopYLenhThongTinHanhChinh", obj), this.apiService.post("DieuTriNoiTru/GetThongTinChiTietYLenhPhieuDieuTri", obj)).subscribe((res) => {
            this.IsDisableEdit = false;
            this.IsChangeData = false;
            this.thongTinHanhChinh = res[0];
            if (this.thongTinHanhChinh.NamSinh != null &&
                this.thongTinHanhChinh.ThangSinh != null &&
                this.thongTinHanhChinh.NgaySinh != null) {
                var ngaySinh = new Date(this.thongTinHanhChinh.ThangSinh +
                    "/" +
                    this.thongTinHanhChinh.NgaySinh +
                    "/" +
                    this.thongTinHanhChinh.NamSinh +
                    "/");
                this.getAge(ngaySinh, new Date());
            }
            if (res[1].NgayYLenh != undefined) {
                res[1].NgayYLenh = new Date(res[1].NgayYLenh);
            }
            this.tongHopYLenhPhieuDieuTri = res[1];
            this.IsDisableEdit = this.tongHopYLenhPhieuDieuTri.IsDisableEdit;
            this.tongHopYLenhThem.NgayYLenh = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.tongHopYLenhPhieuDieuTri.NgayYLenh, "mm/dd/yyyy");
            this.gridDataSource.data = this.tongHopYLenhPhieuDieuTri.TongHopYLenhDienBiens;
            this.gridDataSource.data.sort((n1, n2) => n1.GioYLenh - n2.GioYLenh);
            // if(this.tongHopYLenhPhieuDieuTri.TongHopYLenhDienBiens.length > 0)
            // {
            //   this.IsShowButtonIn = true;
            // }
            // else
            // {
            //   this.IsShowButtonIn = false;
            // }
            this.IsShowButtonIn = this.tongHopYLenhPhieuDieuTri.CoYLenhThemMoi;
            this.ganGiaTriNgayYLenh();
            if (inphieu != null) {
                this.InPhieu(inphieu, false);
            }
            else {
                this.closePopupLoadingData();
            }
        }, (err) => {
            this.IsShowButtonIn = false;
            this.IsDisableEdit = true;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    xuLyXoaYLenh(itemDienBien, itemYLenh) {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete) || this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].DanhSachDieuTriNoiTru, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"], {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].MessConfirm, [
                        "xóa",
                    ]),
                },
            }).afterClosed().subscribe((result) => {
                if (result == "Yes") {
                    let indexDienBien = this.gridDataSource.data.findIndex(x => x == itemDienBien);
                    if (indexDienBien != -1) {
                        if (itemDienBien.TongHopYLenhDienBienChiTiets.length == 1) {
                            this.gridDataSource.data.splice(indexDienBien, 1);
                        }
                        else {
                            // this.gridDataSource.data = this.gridDataSource.data.filter(x => x.TongHopYLenhDienBienChiTiets.findIndex(y => y == itemYLenh) == -1);
                            // let dienBien = this.gridDataSource.data.find(x => x.TongHopYLenhDienBienChiTiets.findIndex(y => y == itemYLenh) != -1);
                            // dienBien.TongHopYLenhDienBienChiTiets = dienBien.TongHopYLenhDienBienChiTiets.filter(x => x != itemYLenh);
                            itemDienBien.TongHopYLenhDienBienChiTiets = itemDienBien.TongHopYLenhDienBienChiTiets.filter(x => x != itemYLenh);
                        }
                        this.IsChangeData = true;
                        //this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                    }
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xuLyThemYLenh() {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Add) || this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].DanhSachDieuTriNoiTru, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Add)) {
            this.validationErrors = [];
            //this.tongHopYLenhThem.NoiTruPhieuDieuTriId = this.tongHopYLenhPhieuDieuTri.NoiTruPhieuDieuTriId;
            this.tongHopYLenhThem.NoiTruBenhAnId = this.tongHopYLenhPhieuDieuTri.NoiTruBenhAnId;
            this.apiService.post("DieuTriNoiTru/KiemTraThemYLenh", this.tongHopYLenhThem).subscribe(res => {
                this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                // xử lý thêm vào grid
                // kiểm tra tồn tại diễn biến
                var itemDienBien = this.gridDataSource.data.find(x => x.GioYLenh == res.GioYLenh);
                if (itemDienBien == undefined || itemDienBien == null) {
                    this.gridDataSource.data.push(res);
                }
                else {
                    if (res.DienBien != null && res.DienBien != "") {
                        itemDienBien.DienBien = (itemDienBien.DienBien == null ? "" : itemDienBien.DienBien + " ") + res.DienBien;
                    }
                    itemDienBien.TongHopYLenhDienBienChiTiets.push(res.TongHopYLenhDienBienChiTiets[0]);
                }
                this.gridDataSource.data.sort((n1, n2) => n1.GioYLenh - n2.GioYLenh);
                this.IsChangeData = true;
                this.closePopupLoadingData();
                this.huyThemYLenh();
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xuLyLuuYLenh(backToGrid = true, date = new Date(), inPhieu = null) {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update) || this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].DanhSachDieuTriNoiTru, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update)) {
            this.validationErrors = [];
            this.apiService.put("DieuTriNoiTru/KiemTraLuuDienBienYLenh", this.tongHopYLenhPhieuDieuTri).subscribe(res => {
                this.apiService.put("DieuTriNoiTru/XuLyLuuDienBienYLenh", this.tongHopYLenhPhieuDieuTri).subscribe(result => {
                    if (inPhieu == null) {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                    }
                    this.closePopupLoadingData();
                    if (!this.IsDieuTriNoiTru) {
                        if (backToGrid) {
                            this.quayLai();
                        }
                        else {
                            this.ganVaKiemTraPhieuDieuTriTheoNgay(date, inPhieu);
                        }
                    }
                    else {
                        this.ganVaKiemTraPhieuDieuTriTheoNgay(this.tongHopYLenhPhieuDieuTri.NgayYLenh, inPhieu);
                    }
                }, err => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                });
            }, err => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupXacNhanLuu(backToGrid = true, date = new Date(), inPhieu = null) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"], {
            disableClose: false,
            width: "400px",
            data: {
                Title: "Xác nhận",
                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].MessConfirm, ["lưu"])
            },
        }).afterClosed().subscribe((result) => {
            if (result == "Yes") {
                this.xuLyLuuYLenh(backToGrid, date, inPhieu);
            }
        });
    }
    huyThemYLenh() {
        this.validationErrors = [];
        this.tongHopYLenhThem = new _tong_hop_y_lenh_model__WEBPACK_IMPORTED_MODULE_4__["TongHopYLenhThem"]();
        this.tongHopYLenhThem.NgayYLenh = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.tongHopYLenhPhieuDieuTri.NgayYLenh, "mm/dd/yyyy");
        ;
    }
    kiemTraPhieuDieuTriTheoNgay(id, ngay, inphieu = null) {
        this.showPopupLoadingData();
        var obj = {
            "NoiTruBenhAnId": id,
            "NgayDieuTri": src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(ngay, "mm/dd/yyyy"),
            "YeuCauTiepNhanId": this.yeuCauTiepNhanId
        };
        this.apiService.post("DieuTriNoiTru/KiemTraPhieuDieuTriNoiTruByNgayDieuTri", obj)
            .subscribe((resultData) => {
            // this.id = resultData;
            this.getById(id, false, inphieu);
        }, (err) => {
            this.IsDisableEdit = true;
            this.IsShowButtonIn = false;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.gridDataSource.data.splice(0, this.gridDataSource.data.length);
            this.closePopupLoadingData();
        });
    }
    getAge(date_1, date_2) {
        let yAppendix, mAppendix, dAppendix;
        // let days = date_2.getDate() - date_1.getDate() + 1;
        let days = date_2.getDate() - date_1.getDate(); //Thach edit
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
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
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
    chonYTaThucHien(event) {
        if (event) {
            this.tongHopYLenhThem.NhanVienXacNhanThucHienDisplay = event.DisplayName;
        }
        else {
            this.tongHopYLenhThem.NhanVienXacNhanThucHienDisplay = null;
        }
    }
    clearValidateErrorOtherCallback(event) {
        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].clearValidateErrorOtherCallback(this, event);
    }
    changeData() {
        this.IsChangeData = true;
    }
    changeXacNhanThucHien(event, item) {
        if (event && (item.NhanVienXacNhanThucHienId == null || item.GioThucHien == null)) {
            this.showPopupLoadingData();
            this.apiService.get("DieuTriNoiTru/GetThongTinYLenhNhanVienDangLogin").subscribe(res => {
                if (item.NhanVienXacNhanThucHienId == null) {
                    item.NhanVienXacNhanThucHienId = res.NhanVienXacNhanThucHienId;
                }
                if (item.GioThucHien == null) {
                    item.GioThucHien = res.GioThucHien;
                }
                this.closePopupLoadingData();
            }, err => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
        }
        else {
            item.NhanVienXacNhanThucHienId = null;
            item.GioThucHien = null;
        }
        this.changeData();
    }
    // xử lý date
    ganGiaTriNgayYLenh() {
        this.tongHopYLenhPhieuDieuTri.NgayYLenh = this.tongHopYLenhPhieuDieuTri.NgayYLenh == null ? new Date() : this.tongHopYLenhPhieuDieuTri.NgayYLenh;
        this.tongHopYLenhPhieuDieuTri.NgayYLenhDisplay = this.formatDateLink(this.tongHopYLenhPhieuDieuTri.NgayYLenh);
        this.strNgayDieuTri = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.tongHopYLenhPhieuDieuTri.NgayYLenh, "mm/dd/yyyy");
    }
    changeDateLink(event) {
        // this.tongHopYLenhPhieuDieuTri.NgayYLenh=event;
        // this.ganGiaTriNgayYLenh();
        // this.kiemTraPhieuDieuTriTheoNgay(this.id, event);
        this.changeDateDieuTriNoiTru(event);
    }
    prevDateLink() {
        // this.tongHopYLenhPhieuDieuTri.NgayYLenh=addDays(this.tongHopYLenhPhieuDieuTri.NgayYLenh,-1);
        // this.ganGiaTriNgayYLenh();
        // this.kiemTraPhieuDieuTriTheoNgay(this.id, this.tongHopYLenhPhieuDieuTri.NgayYLenh);
        let dateChange = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addDays"])(this.tongHopYLenhPhieuDieuTri.NgayYLenh, -1);
        this.changeDateDieuTriNoiTru(dateChange);
    }
    nextDateLink() {
        // this.tongHopYLenhPhieuDieuTri.NgayYLenh=addDays(this.tongHopYLenhPhieuDieuTri.NgayYLenh,1);
        // this.ganGiaTriNgayYLenh();
        // this.kiemTraPhieuDieuTriTheoNgay(this.id, this.tongHopYLenhPhieuDieuTri.NgayYLenh);
        let dateChange = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addDays"])(this.tongHopYLenhPhieuDieuTri.NgayYLenh, 1);
        this.changeDateDieuTriNoiTru(dateChange);
    }
    changeDateDieuTriNoiTru(date) {
        if (this.IsChangeData) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"], {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: "Dữ liệu có thay đổi, bạn có lưu không?",
                },
            }).afterClosed().subscribe((result) => {
                if (result == "Yes") {
                    this.showPopupXacNhanLuu(false, date);
                }
                else {
                    this.ganVaKiemTraPhieuDieuTriTheoNgay(date);
                }
            });
        }
        else {
            this.ganVaKiemTraPhieuDieuTriTheoNgay(date);
        }
    }
    ganVaKiemTraPhieuDieuTriTheoNgay(date, inphieu = null) {
        this.IsChangeData = false;
        this.tongHopYLenhPhieuDieuTri.NgayYLenh = date;
        this.ganGiaTriNgayYLenh();
        this.kiemTraPhieuDieuTriTheoNgay(this.id, date, inphieu);
    }
    formatDateLink(date) {
        return "<strong>" + this.intl.formatDate(date, "dd/MM/yyyy") + "</strong>";
    }
    quayLai() {
        this.location.back();
    }
    xuLyKiemTraInPhieu(loaiIn = false) {
        if (this.IsDisableEdit) {
            this.InPhieu(loaiIn);
        }
        else {
            this.xuLyLuuYLenh(false, this.tongHopYLenhPhieuDieuTri.NgayYLenh, loaiIn);
        }
    }
    InPhieu(inTatCa = false, showPopupLoadingData = true) {
        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].View) || this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].DanhSachDieuTriNoiTru, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].View)) {
            if (showPopupLoadingData) {
                this.showPopupLoadingData();
            }
            var obj = {
                "BenhNhanId": this.thongTinHanhChinh.BenhNhanId,
                //"PhieuDieuTriId": this.tongHopYLenhPhieuDieuTri.NoiTruPhieuDieuTriId,
                "NoiTruBenhAnId": this.tongHopYLenhPhieuDieuTri.NoiTruBenhAnId,
                "NgayDieuTriStr": inTatCa ? null : this.strNgayDieuTri,
                "YeuCauTiepNhanId": this.yeuCauTiepNhanId,
                "InTatCa": inTatCa
            };
            this.apiService.post("DieuTriNoiTru/InPhieuChamSoc", obj).subscribe(resultData => {
                this.closePopupLoadingData();
                if (resultData != undefined && resultData != null) {
                    this.dialog.open(_tong_hop_y_lenh_in_phieu_popup_tong_hop_y_lenh_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_22__["TongHopYLenhInPhieuPopupComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: resultData,
                    }).afterClosed().subscribe(result => {
                        if (!this.IsDieuTriNoiTru) {
                            this.quayLai();
                        }
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
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    changeGioYLenh(event) {
        if (event) {
            this.tongHopYLenhThem.GioThucHien = event;
        }
    }
};
TongHopYLenhDetailComponent.ctorParameters = () => [
    { type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_2__["IntlService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioYLenhTemplate', { static: true })
], TongHopYLenhDetailComponent.prototype, "gioYLenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dienBienTemplate', { static: true })
], TongHopYLenhDetailComponent.prototype, "dienBienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('yLenhTemplate', { static: true })
], TongHopYLenhDetailComponent.prototype, "yLenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('yTaThucHienTemplate', { static: true })
], TongHopYLenhDetailComponent.prototype, "yTaThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioThucHienTemplate', { static: true })
], TongHopYLenhDetailComponent.prototype, "gioThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayCapNhatTemplate', { static: true })
], TongHopYLenhDetailComponent.prototype, "ngayCapNhatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiCapNhatTemplate', { static: true })
], TongHopYLenhDetailComponent.prototype, "nguoiCapNhatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiRaYLenhTemplate', { static: true })
], TongHopYLenhDetailComponent.prototype, "nguoiRaYLenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopYLenhDetailComponent.prototype, "dieuTriNoiTruModel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopYLenhDetailComponent.prototype, "IsDieuTriNoiTru", void 0);
TongHopYLenhDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-y-lenh-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-y-lenh-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-y-lenh-detail.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component.scss")).default]
    })
], TongHopYLenhDetailComponent);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RvbmctaG9wLXktbGVuaC90b25nLWhvcC15LWxlbmgtaW4tcGhpZXUtcG9wdXAvdG9uZy1ob3AteS1sZW5oLWluLXBoaWV1LXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: TongHopYLenhInPhieuPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhInPhieuPopupComponent", function() { return TongHopYLenhInPhieuPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let TongHopYLenhInPhieuPopupComponent = class TongHopYLenhInPhieuPopupComponent {
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
        let source = this.replaceAll(this.data, "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU CHĂM SÓC</th></p>", "");
        return new Promise(resolve => {
            setTimeout(function () {
                resolve(source);
            }, 100);
            this.close();
        });
    }
};
TongHopYLenhInPhieuPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
TongHopYLenhInPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-y-lenh-in-phieu-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-y-lenh-in-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-y-lenh-in-phieu-popup.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], TongHopYLenhInPhieuPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".linkdatepicker {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvdG9uZy1ob3AteS1sZW5oL3RvbmctaG9wLXktbGVuaC1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcZGlldS10cmktbm9pLXRydVxcdG9uZy1ob3AteS1sZW5oXFx0b25nLWhvcC15LWxlbmgtbGlzdFxcdG9uZy1ob3AteS1sZW5oLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RvbmctaG9wLXktbGVuaC90b25nLWhvcC15LWxlbmgtbGlzdC90b25nLWhvcC15LWxlbmgtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RvbmctaG9wLXktbGVuaC90b25nLWhvcC15LWxlbmgtbGlzdC90b25nLWhvcC15LWxlbmgtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rZGF0ZXBpY2tlciB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi5saW5rZGF0ZXBpY2tlciB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: TongHopYLenhListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhListComponent", function() { return TongHopYLenhListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-left */ "./node_modules/@iconify/icons-ic/twotone-chevron-left.js");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-right */ "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _tong_hop_y_lenh_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tong-hop-y-lenh.model */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh.model.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var _danh_muc_lich_phan_cong_lich_phan_cong_ngoai_tru_lich_phan_cong_ngoai_tru_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../danh-muc/lich-phan-cong/lich-phan-cong-ngoai-tru/lich-phan-cong-ngoai-tru.model */ "./src/app/modules/main/danh-muc/lich-phan-cong/lich-phan-cong-ngoai-tru/lich-phan-cong-ngoai-tru.model.ts");
/* harmony import */ var _progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-date-math */ "./node_modules/@progress/kendo-date-math/dist/es2015/main.js");























let TongHopYLenhListComponent = class TongHopYLenhListComponent {
    constructor(authService, notificationService, route, location, dialog, intl, router) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.route = route;
        this.location = location;
        this.dialog = dialog;
        this.intl = intl;
        this.router = router;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icChevronLeft = _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.gridColumns = [];
        this._gridColumnsFilter = [];
        this._isCheckColumnFilter = true;
        this.strAdditionalSearchString = "";
        this.groups = [{ field: 'Phong', dir: null }];
        this.baseRoute = "/noi-tru/tong-hop-y-lenh";
        this.tongHopYLenhTimKiem = new _tong_hop_y_lenh_model__WEBPACK_IMPORTED_MODULE_9__["TongHopYLenhTimKiem"]();
        this.dateLinkText = "";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].TongHopYLenh;
        this.showDateTime = new _danh_muc_lich_phan_cong_lich_phan_cong_ngoai_tru_lich_phan_cong_ngoai_tru_model__WEBPACK_IMPORTED_MODULE_21__["ShowDateTime"]();
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachTongHopYLenh");
                if (additionalSearchString != null) {
                    this.tongHopYLenhTimKiem = JSON.parse(additionalSearchString);
                    if (this.tongHopYLenhTimKiem.strNgayYLenh != null && this.tongHopYLenhTimKiem.strNgayYLenh != 'null' && this.tongHopYLenhTimKiem.strNgayYLenh != '') {
                        this.tongHopYLenhTimKiem.NgayYLenh = new Date(this.tongHopYLenhTimKiem.NgayYLenh);
                    }
                    this.ganGiaTriNgayYLenh();
                    this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachTongHopYLenh");
            this.tongHopYLenhTimKiem.NgayYLenh = new Date();
            this.tongHopYLenhTimKiem.strNgayYLenh = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.tongHopYLenhTimKiem.NgayYLenh, "mm/dd/yyyy");
            var queryString = JSON.stringify(this.tongHopYLenhTimKiem);
            this.gridChild.additionalSearchString = queryString;
            this.ganGiaTriNgayYLenh();
        }
        // tô màu dòng chưa done ở api
        this.gridColumns = [
            { Field: "Giuong", Title: "Giường", Width: 120, Sortable: true },
            { Field: "Phong", Title: "Phòng", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "MaBenhAn", Title: "Mã BA", Width: 80, Sortable: true, Template: this.maBenhAnTemplate },
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
            { Field: "NgaySinh", Title: "Ngày sinh", Width: 80, Sortable: true, Template: this.ngaySinhTemplate },
            { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
            // { Field: "NgayYLenh", Title: "Ngày sinh", Width: 80, Sortable: true, Template: this.ngayYLenhTemplate},
            { Field: "BacSi", Title: "Bác sĩ", Width: 120, Sortable: true },
            { Field: "YTa", Title: "Y tá", Width: 120, Sortable: true },
            { Field: "SoLuong", Title: "Sl (Hoàn thành/tổng)", Width: 120, Sortable: false }
        ];
        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '' && !p.Hidden);
    }
    ganGiaTriNgayYLenh() {
        this.tongHopYLenhTimKiem.NgayYLenh = this.tongHopYLenhTimKiem.NgayYLenh == null ? new Date() : this.tongHopYLenhTimKiem.NgayYLenh;
        this.dateLinkText = this.formatDateLink(this.tongHopYLenhTimKiem.NgayYLenh);
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
        this.tongHopYLenhTimKiem.SearchString = null;
        this.gridChild.searchString = null;
        this.timKiemNangCao();
    }
    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.tongHopYLenhTimKiem.NgayYLenh != null) {
            this.tongHopYLenhTimKiem.strNgayYLenh = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.tongHopYLenhTimKiem.NgayYLenh, "mm/dd/yyyy");
        }
        else {
            this.tongHopYLenhTimKiem.strNgayYLenh = null;
        }
        var queryString = JSON.stringify(this.tongHopYLenhTimKiem);
        this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachTongHopYLenh", queryString);
        this.gridChild.search();
    }
    xuLyXuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Process)) {
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xemChiTiet(dataItem) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Update)) {
            //this.router.navigate([this.baseRoute + "/chi-tiet/" + dataItem.Id]);
            var ngayYLenh = new Date(dataItem.NgayYLenh);
            var ngayYLenhDate = ngayYLenh.getDate();
            var ngayYLenhMonth = ngayYLenh.getMonth() + 1;
            var ngayYLenhYear = ngayYLenh.getFullYear();
            var strNgayYLenh = ngayYLenhMonth + "." + ngayYLenhDate + "." + ngayYLenhYear; //CommonService.formatDateTime(new Date(ngayYLenhYear, ngayYLenhMonth, ngayYLenhDate), "mm/dd/yyyy");
            //let ngayYLenh = CommonService.formatDateTime(, "mm/dd/yyyy");
            this.router.navigate([this.baseRoute + "/chi-tiet"], { queryParams: { NoiTruBenhAnId: dataItem.Id, strNgayDieuTri: strNgayYLenh } });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    // xử lý date
    changeDateLink(event) {
        this.tongHopYLenhTimKiem.NgayYLenh = event;
        //this.dateLinkText=this.formatDateLink(event);
        this.ganGiaTriNgayYLenh();
        this.timKiemNangCao();
    }
    prevDateLink() {
        this.tongHopYLenhTimKiem.NgayYLenh = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_22__["addDays"])(this.tongHopYLenhTimKiem.NgayYLenh, -1);
        //this.dateLinkText=this.formatDateLink(this.tongHopYLenhTimKiem.NgayYLenh);
        this.ganGiaTriNgayYLenh();
        this.timKiemNangCao();
    }
    nextDateLink() {
        this.tongHopYLenhTimKiem.NgayYLenh = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_22__["addDays"])(this.tongHopYLenhTimKiem.NgayYLenh, 1);
        //this.dateLinkText=this.formatDateLink(this.tongHopYLenhTimKiem.NgayYLenh);
        this.ganGiaTriNgayYLenh();
        this.timKiemNangCao();
    }
    formatDateLink(date) {
        return "<strong>" + this.intl.formatDate(date, "dd/MM/yyyy") + "</strong>";
    }
};
TongHopYLenhListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
    { type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_20__["IntlService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maBenhAnTemplate', { static: true })
], TongHopYLenhListComponent.prototype, "maBenhAnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], TongHopYLenhListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngaySinhTemplate', { static: true })
], TongHopYLenhListComponent.prototype, "ngaySinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYLenhTemplate', { static: true })
], TongHopYLenhListComponent.prototype, "ngayYLenhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hoanThanhTemplate', { static: true })
], TongHopYLenhListComponent.prototype, "hoanThanhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayCapNhatTemplate', { static: true })
], TongHopYLenhListComponent.prototype, "ngayCapNhatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
], TongHopYLenhListComponent.prototype, "gridChild", void 0);
TongHopYLenhListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-y-lenh-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-y-lenh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-y-lenh-list.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.scss")).default]
    })
], TongHopYLenhListComponent);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: TongHopYLenhRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhRoutingModule", function() { return TongHopYLenhRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _tong_hop_y_lenh_detail_background_tong_hop_y_lenh_detail_background_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.ts");
/* harmony import */ var _tong_hop_y_lenh_list_tong_hop_y_lenh_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tong-hop-y-lenh-list/tong-hop-y-lenh-list.component */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.ts");








const routes = [
    {
        path: '',
        component: _tong_hop_y_lenh_list_tong_hop_y_lenh_list_component__WEBPACK_IMPORTED_MODULE_7__["TongHopYLenhListComponent"],
        data: {
            title: 'Tổng hợp y lệnh',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TongHopYLenh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        // path: 'chi-tiet/:id',
        path: 'chi-tiet',
        component: _tong_hop_y_lenh_detail_background_tong_hop_y_lenh_detail_background_component__WEBPACK_IMPORTED_MODULE_6__["TongHopYLenhDetailBackgroundComponent"],
        data: {
            title: 'Tổng hợp y lệnh chi tiết',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TongHopYLenh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let TongHopYLenhRoutingModule = class TongHopYLenhRoutingModule {
};
TongHopYLenhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TongHopYLenhRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh.model.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh.model.ts ***!
  \****************************************************************************************/
/*! exports provided: TongHopYLenhTimKiem, TongHopYLenhThongTinBenhAn, TongHopYLenhThem, TongHopYLenhPhieuDieuTri, TongHopYLenhDienBien, TongHopYLenhDienBienChiTiet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhTimKiem", function() { return TongHopYLenhTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhThongTinBenhAn", function() { return TongHopYLenhThongTinBenhAn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhThem", function() { return TongHopYLenhThem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhPhieuDieuTri", function() { return TongHopYLenhPhieuDieuTri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhDienBien", function() { return TongHopYLenhDienBien; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhDienBienChiTiet", function() { return TongHopYLenhDienBienChiTiet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TongHopYLenhTimKiem {
    constructor(SearchString = null, KhoaId = null, PhongId = null, ChuaHoanThanh = false, NgayYLenh = null, strNgayYLenh = null) {
        this.SearchString = SearchString;
        this.KhoaId = KhoaId;
        this.PhongId = PhongId;
        this.ChuaHoanThanh = ChuaHoanThanh;
        this.NgayYLenh = NgayYLenh;
        this.strNgayYLenh = strNgayYLenh;
    }
}
class TongHopYLenhThongTinBenhAn {
    constructor(YeuCauTiepNhanId = null, BenhNhanId = null, MaBenhNhan = null, MaTiepNhan = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, Tuoi = null, TenGioiTinh = null, DiaChi = null, NgheNghiep = null, SoBenhAn = null, LoaiBenhAn = null, Khoa = null, BacSiDieuTri = null, Phong = null, Giuong = null, DoiTuong = null, NgayDieuTri = null, 
    //BVHD-3800
    LaCapCuu = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BenhNhanId = BenhNhanId;
        this.MaBenhNhan = MaBenhNhan;
        this.MaTiepNhan = MaTiepNhan;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.Tuoi = Tuoi;
        this.TenGioiTinh = TenGioiTinh;
        this.DiaChi = DiaChi;
        this.NgheNghiep = NgheNghiep;
        this.SoBenhAn = SoBenhAn;
        this.LoaiBenhAn = LoaiBenhAn;
        this.Khoa = Khoa;
        this.BacSiDieuTri = BacSiDieuTri;
        this.Phong = Phong;
        this.Giuong = Giuong;
        this.DoiTuong = DoiTuong;
        this.NgayDieuTri = NgayDieuTri;
        this.LaCapCuu = LaCapCuu;
    }
}
class TongHopYLenhThem {
    constructor(
    //public NoiTruPhieuDieuTriId: number = null,
    NoiTruBenhAnId = null, NgayYLenh = null, GioYLenh = null, DienBien = null, MoTaYLenh = null, NhanVienXacNhanThucHienId = null, NhanVienXacNhanThucHienDisplay = null, ThoiDiemXacNhanThucHien = null, GioThucHien = null, XacNhanThucHien = null) {
        this.NoiTruBenhAnId = NoiTruBenhAnId;
        this.NgayYLenh = NgayYLenh;
        this.GioYLenh = GioYLenh;
        this.DienBien = DienBien;
        this.MoTaYLenh = MoTaYLenh;
        this.NhanVienXacNhanThucHienId = NhanVienXacNhanThucHienId;
        this.NhanVienXacNhanThucHienDisplay = NhanVienXacNhanThucHienDisplay;
        this.ThoiDiemXacNhanThucHien = ThoiDiemXacNhanThucHien;
        this.GioThucHien = GioThucHien;
        this.XacNhanThucHien = XacNhanThucHien;
    }
}
class TongHopYLenhPhieuDieuTri {
    constructor(
    //public NoiTruPhieuDieuTriId: number = null,
    NoiTruBenhAnId = null, NgayYLenh = null, NgayYLenhDisplay = null, IsDisableEdit = true, CoYLenhThemMoi = null, TongHopYLenhDienBiens = Array()) {
        this.NoiTruBenhAnId = NoiTruBenhAnId;
        this.NgayYLenh = NgayYLenh;
        this.NgayYLenhDisplay = NgayYLenhDisplay;
        this.IsDisableEdit = IsDisableEdit;
        this.CoYLenhThemMoi = CoYLenhThemMoi;
        this.TongHopYLenhDienBiens = TongHopYLenhDienBiens;
    }
}
class TongHopYLenhDienBien {
    constructor(Id = null, GioYLenh = null, GioYLenhDisplay = null, DienBien = null, TongHopYLenhDienBienChiTiets = new Array()) {
        this.Id = Id;
        this.GioYLenh = GioYLenh;
        this.GioYLenhDisplay = GioYLenhDisplay;
        this.DienBien = DienBien;
        this.TongHopYLenhDienBienChiTiets = TongHopYLenhDienBienChiTiets;
    }
}
class TongHopYLenhDienBienChiTiet {
    constructor(Id = null, NoiTruPhieuDieuTriId = null, MoTaYLenh = null, GioYLenh = null, NhanVienXacNhanThucHienId = null, NhanVienXacNhanThucHienDisplay = null, GioThucHien = null, XacNhanThucHien = null, NhanVienCapNhatId = null, NhanVienCapNhatDisplay = null, ThoiDiemCapNhat = null, ThoiDiemCapNhatDisplay = null, NhanVienChiDinhId = null, NhanVienChiDinhDisplay = null, NoiChiDinhId = null) {
        this.Id = Id;
        this.NoiTruPhieuDieuTriId = NoiTruPhieuDieuTriId;
        this.MoTaYLenh = MoTaYLenh;
        this.GioYLenh = GioYLenh;
        this.NhanVienXacNhanThucHienId = NhanVienXacNhanThucHienId;
        this.NhanVienXacNhanThucHienDisplay = NhanVienXacNhanThucHienDisplay;
        this.GioThucHien = GioThucHien;
        this.XacNhanThucHien = XacNhanThucHien;
        this.NhanVienCapNhatId = NhanVienCapNhatId;
        this.NhanVienCapNhatDisplay = NhanVienCapNhatDisplay;
        this.ThoiDiemCapNhat = ThoiDiemCapNhat;
        this.ThoiDiemCapNhatDisplay = ThoiDiemCapNhatDisplay;
        this.NhanVienChiDinhId = NhanVienChiDinhId;
        this.NhanVienChiDinhDisplay = NhanVienChiDinhDisplay;
        this.NoiChiDinhId = NoiChiDinhId;
    }
}


/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TongHopYLenhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopYLenhModule", function() { return TongHopYLenhModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tong_hop_y_lenh_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tong-hop-y-lenh-routing.module */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-routing.module.ts");
/* harmony import */ var _tong_hop_y_lenh_list_tong_hop_y_lenh_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tong-hop-y-lenh-list/tong-hop-y-lenh-list.component */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-list/tong-hop-y-lenh-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm2015/index.js");
/* harmony import */ var _tong_hop_y_lenh_detail_tong_hop_y_lenh_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component.ts");
/* harmony import */ var _tong_hop_y_lenh_in_phieu_popup_tong_hop_y_lenh_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component.ts");
/* harmony import */ var _tong_hop_y_lenh_detail_background_tong_hop_y_lenh_detail_background_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component */ "./src/app/modules/main/dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component.ts");





















let TongHopYLenhModule = class TongHopYLenhModule {
};
TongHopYLenhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _tong_hop_y_lenh_detail_tong_hop_y_lenh_detail_component__WEBPACK_IMPORTED_MODULE_18__["TongHopYLenhDetailComponent"]
        ],
        declarations: [
            _tong_hop_y_lenh_list_tong_hop_y_lenh_list_component__WEBPACK_IMPORTED_MODULE_4__["TongHopYLenhListComponent"],
            _tong_hop_y_lenh_detail_tong_hop_y_lenh_detail_component__WEBPACK_IMPORTED_MODULE_18__["TongHopYLenhDetailComponent"],
            _tong_hop_y_lenh_in_phieu_popup_tong_hop_y_lenh_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_19__["TongHopYLenhInPhieuPopupComponent"],
            _tong_hop_y_lenh_detail_background_tong_hop_y_lenh_detail_background_component__WEBPACK_IMPORTED_MODULE_20__["TongHopYLenhDetailBackgroundComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tong_hop_y_lenh_routing_module__WEBPACK_IMPORTED_MODULE_3__["TongHopYLenhRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
            _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__["IntlModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__["PdfViewerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_17__["DateInputsModule"]
        ],
        entryComponents: [
            _tong_hop_y_lenh_in_phieu_popup_tong_hop_y_lenh_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_19__["TongHopYLenhInPhieuPopupComponent"]
        ]
    })
], TongHopYLenhModule);



/***/ })

}]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~0a76087b-es2015.js.map