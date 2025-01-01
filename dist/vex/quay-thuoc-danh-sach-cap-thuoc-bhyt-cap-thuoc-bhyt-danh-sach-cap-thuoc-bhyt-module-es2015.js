(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quay-thuoc-danh-sach-cap-thuoc-bhyt-cap-thuoc-bhyt-danh-sach-cap-thuoc-bhyt-module"],{

/***/ "./node_modules/@iconify/icons-ic/done.js":
/*!************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/done.js ***!
  \************************************************/
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

/***/ "./node_modules/@iconify/icons-ic/twotone-info.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-info.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z\" fill=\"currentColor\"/><path d=\"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n                    [\n                    {Title:'Cấp phát thuốc bhyt',Path:''},\n                    {Title:'DS Đơn Thuốc cấp phát',Path:'/nha-thuoc', Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <app-hot-key style=\"position: absolute;right: 180px;top: 7px;\" [keys]=\"[\n            {Key:'Ctrl + Q',Description:'Quét mã vạch',End:true}\n            ]\">\n            </app-hot-key>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n\n                        <fieldset class=\"m-0\">\n                            <legend>TÌM NGƯỜI BỆNH</legend>\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\">\n                                <div fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"position: relative;\">\n                                    <app-textbox id=\"SoTheBHYT\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Mã NB\"\n                                        [(model)]=\"timKiem.MaBenhNhan\" (keyup)=\"onKey($event)\" [isAutoFocus]=\"true\"\n                                        (modelChange)=\"searchChangeMaBN($event)\">\n                                    </app-textbox>\n                                    <button style=\"position: absolute;right: 21px;margin-top: 10px;\"\n                                        (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n                                        kendoTooltip title=\"Quét mã vạch thẻ BHYT\">\n                                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                    </button>\n                                </div>\n\n                                <app-textbox id=\"MaTN\" fxFlex=\"10%\" fxFlex.sm=\"15%\" maxlength=\"4000\"\n                                    [(model)]=\"timKiem.MaTiepNhan\" style=\"padding-left: 10px;\" (keyup)=\"onKey($event)\"\n                                    label=\"Mã TN\" (modelChange)=\"searchChangeMaTN($event)\"\n                                    [validationerror]=\"'MaTN' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <app-textbox id=\"HoTen\" fxFlex=\"30%\" fxFlex.sm=\"30%\" maxlength=\"4000\"\n                                    [(model)]=\"timKiem.HoTen\" style=\"padding-left: 10px;\" (keyup)=\"onKey($event)\"\n                                    label=\"Họ Tên\" [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <app-textboxmask id=\"SoDienThoai\" onlynumber=\"true\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                                    label=\"Số điện thoại\" (keyup)=\"onKey($event)\" maxlength=\"10\"\n                                    [(model)]=\"timKiem.SoDienThoai\" mask=\"000 000 0000\">\n                                </app-textboxmask>\n\n                                <app-daterangepicker id=\"Daterange\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    [(model)]=\"timKiem.RangeDate\" label=\"Từ ngày - Đến ngày\" (keyup)=\"onKey($event)\">\n                                </app-daterangepicker>\n\n                                <div fxFlex=\"209px\">\n                                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-5\"\n                                        (click)=\"TimKiemChoCapThuocBHYT()\">Tìm\n                                        kiếm</button>\n                                    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"exportExcel()\">Xuất\n                                        Excel</button>\n\n                                </div>\n\n                                <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\"\n                                    style=\"display: none;\"></app-barcode>\n                            </div>\n                        </fieldset>\n\n                        <!-- Begin danh sách đơn thuốc chờ cấp phát -->\n\n                        <app-grid #gridList [gridColumns]=\"gridParentColumnsDSChoCapThuoc\" [documentType]=\"documentType\"\n                            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [sort]=\"sortConfig\"\n                            [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                            heightToolbar=\"272\" [additionalSearchString]=\"queryStringSearchUuTien\"\n                            [detailTemplate]=\"detailTemplate\">\n                        </app-grid>\n                        <ng-template #TongGiaTriDonThuocTemplate let-dataItem>\n                            <strong class=\"text-color\" style=\"color:red\"\n                                *ngIf=\"dataItem.TrangThaiHienThi=='Chưa thanh toán'\">\n                                {{dataItem.TongGiaTriDonThuoc | number:'0.2-2':'vi-VN'}}</strong>\n                            <strong class=\"text-color\" style=\"color:blue\"\n                                *ngIf=\"dataItem.TrangThaiHienThi=='Đã thanh toán'\">\n                                {{dataItem.TongGiaTriDonThuoc | number:'0.2-2':'vi-VN'}}</strong>\n                        </ng-template>\n                        <ng-template #SoTienChoThanhToanTemplate let-dataItem>\n                            <strong class=\"text-color\" style=\"color:red\"\n                                *ngIf=\"dataItem.TrangThaiHienThi=='Chưa thanh toán'\">\n                                {{dataItem.SoTienChoThanhToan | number:'0.2-2':'vi-VN'}}</strong>\n                            <strong class=\"text-color\" style=\"color:blue\"\n                                *ngIf=\"dataItem.TrangThaiHienThi=='Đã thanh toán'\">\n                                {{dataItem.SoTienChoThanhToan | number:'0.2-2':'vi-VN'}}</strong>\n                        </ng-template>\n                        <ng-template #actionTemplate let-dataItem>\n                            <div class=\"text-center\" kendoTooltip>\n                                <button type=\"button\" color=\"primary\" (click)=\"xemChoCapThuocBHYT(dataItem)\" class=\"mr-1 float-right\"\n                                    mat-raised-button>\n                                    Xem</button>\n                            </div>\n                        </ng-template>\n                        <ng-template #maTNTemplate let-dataItem>\n                            <a (click)=\"xemChoCapThuocBHYT(dataItem)\">{{dataItem.MaTN}}</a>\n                        </ng-template>\n                        <ng-template #detailTemplate let-dataItem>\n                            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildColumnsDSChoCapThuoc\"\n                                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                                [urlGetData]=\"urlGetDataChild\"\n                                [additionalSearchString]=\"dataItem.Id + '-' +dataItem.DateStart + '-' + dataItem.DateEnd\"\n                                [autoHeight]=\"true\" [pageable]=\"false\">\n                            </app-grid>\n                        </ng-template>\n                        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                            <strong>{{value}}</strong>\n                        </ng-template>\n                        <ng-template #templatePrint let-dataItem>\n                            <span *ngIf=\"dataItem.DonThuocBacSiKeToa == false\">\n                                <button kendoTooltip title=\"In phiếu\"\n                                    (click)=\"PrinAllDonThuocBenhNhan(dataItem.DonThuocThanhToanId, dataItem.LoaiDonThuoc , dataItem.YeuCauKhambenhId)\"\n                                    mat-icon-button type=\"button\">\n                                    <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                                </button>\n                            </span>\n                        </ng-template>\n                        <ng-template #SoTienThuoctemplate let-dataItem>\n                            <span style=\"color:red\"> {{dataItem.SoTienDisPlay}}</span>\n                        </ng-template>\n                        <ng-template #TinhTrangThuoctemplate let-dataItem>\n                            <span style=\"color:red\"\n                                *ngIf=\"dataItem.TinhTrang =='Chưa xuất thuốc' || dataItem.TinhTrang =='Chưa thanh toán'\">\n                                {{dataItem.TinhTrang}}</span>\n                            <span style=\"color:blue\" *ngIf=\"dataItem.TinhTrang =='Đã thanh toán'\">\n                                {{dataItem.TinhTrang}}</span>\n                            <span style=\"color: blue;\" *ngIf=\"dataItem.TinhTrang =='Đã xuất thuốc'\">\n                                {{dataItem.TinhTrang}}</span>\n                        </ng-template>\n\n                        <!-- End danh sách đơn thuốc chờ cấp phát -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.html":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n                    [\n                    {Title:'Cấp phát thuốc bhyt',Path:''},\n                    {Title:'Chờ cấp thuốc chi tiết bhyt',Path:'/nha-thuoc', queryParams: { holdQuery:true},Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[{Key:'Esc',Description:'Quay lại', End:true}]\">\n            </app-hot-key>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n                        <div class=\"row\">\n                            <fieldset fxFlex=\"100%\" *ngIf=\"benhNhanId == null\">\n                                <legend>THÔNG TIN HÀNH CHÍNH</legend>\n                                <div fxFlex=\"100%\">\n                                    <ul class=\"inline\">\n                                        <li>Mã TN:\n                                            <strong>{{benhnhanThongTin.MaYeuCauTiepNhan}}</strong>\n                                        </li>\n                                        <li>Mã NB:\n\n                                            <strong>{{benhnhanThongTin.MaBN}}</strong>\n                                        </li>\n                                        <li>Họ tên:\n                                            <strong>{{benhnhanThongTin.HoTen}}</strong>\n                                        </li>\n                                        <li>Giới tính:\n                                            <strong>{{benhnhanThongTin.GioiTinhHienThi}}</strong>\n                                        </li>\n                                        <li>Năm sinh:\n                                            <strong>{{benhnhanThongTin.NamSinh}}</strong>\n                                        </li>\n                                        <li>Địa chỉ:\n                                            <strong>{{benhnhanThongTin.DiaChiDayDu}}</strong>\n                                        </li>\n\n                                        <li>SĐT:\n                                            <strong>{{benhnhanThongTin.SoDienThoai}}</strong>\n                                        </li>\n                                        <li>Email:\n                                            <strong>{{benhnhanThongTin.Email}}</strong>\n                                        </li>\n\n                                    </ul>\n                                </div>\n                            </fieldset>\n                            <fieldset fxFlex=\"100%\" *ngIf=\"benhNhanId != null\">\n                                <legend>THÔNG TIN HÀNH CHÍNH</legend>\n                                <div fxFlex=\"100%\">\n                                    <ul class=\"inline\">\n                                        <li>Mã NB:\n                                            <strong>{{benhnhanThongTin.MaBN}}</strong>\n                                        </li>\n                                        <li>Họ tên:\n                                            <strong>{{benhnhanThongTin.HoTen}}</strong>\n                                        </li>\n                                        <li>Giới tính:\n                                            <strong>{{benhnhanThongTin.GioiTinhHienThi}}</strong>\n                                        </li>\n                                        <li>Năm sinh:\n                                            <strong>{{benhnhanThongTin.NamSinh}}</strong>\n                                        </li>\n                                        <li>Địa chỉ:\n                                            <strong>{{benhnhanThongTin.DiaChiDayDu}}</strong>\n                                        </li>\n\n                                        <li>SĐT:\n                                            <strong>{{benhnhanThongTin.SoDienThoai}}</strong>\n                                        </li>\n                                        <li>Email:\n                                            <strong>{{benhnhanThongTin.Email}}</strong>\n                                        </li>\n\n                                    </ul>\n                                </div>\n                            </fieldset>\n                        </div>\n                        <kendo-tabstrip fxFlex=\"100%\" class=\"content-has-border has-padding mt-3\"\n                             [keepTabContent]=\"true\" #tabQuayThuoc>\n                            <kendo-tabstrip-tab [selected]=\"true\">\n                                <ng-template kendoTabContent>\n\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                        fxLayoutGap.lt-sm=\"0\">\n                                        <app-grid *ngIf=\"dataSourcedanhsachThuocBHYT.data.length>0\" fxFlex=\"100%\"\n                                            [gridColumns]=\"gridColumns\" [gridDataSource]=\"dataSourcedanhsachThuocBHYT\"\n                                            [autoHeight]=\"true\" [lazyLoadPage]=\"false\" [useActionDefault]=\"false\"\n                                            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"false\"\n                                            [pageable]=\"false\" [headerTemplate]=\"headerTemplate\"\n                                            useActionDefault=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\">\n                                            <ng-template #headerTemplate>\n                                                <div class=\"px-2 py-2\" style=\"background: burlywood;overflow: hidden;\">\n                                                    <h4 style=\"font-weight: bold;float: left;line-height: 36px;\">THUỐC\n                                                        BHYT- VẬT TƯ</h4>\n                                                    <button type=\"button\" (click)=\"KeThuoc()\" style=\"float: right;\"\n                                                        mat-raised-button>\n                                                        In kê thuốc</button>\n                                                </div>\n                                            </ng-template>\n                                        </app-grid>\n                                        <app-grid *ngIf=\"dataSourcedanhsachThuocKhongBHYT.data.length>0\" fxFlex=\"100%\"\n                                            [gridColumns]=\"gridColumns\"\n                                            [gridDataSource]=\"dataSourcedanhsachThuocKhongBHYT\" [autoHeight]=\"true\"\n                                            [lazyLoadPage]=\"false\" [useActionDefault]=\"false\"\n                                            [headerTemplate]=\"headerTemplate1\" [useAddDeault]=\"false\"\n                                            [useHeaderDefault]=\"false\" [allowSortDefault]=\"false\" [pageable]=\"false\"\n                                            useActionDefault=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\">\n                                            <ng-template #headerTemplate1>\n                                                <div class=\"px-2 py-2\" style=\"background: lightblue;\">\n                                                    <h4 style=\"font-weight: bold;\">THUỐC KHÔNG BHYT-VẬT TƯ</h4>\n\n                                                </div>\n                                            </ng-template>\n                                        </app-grid>\n                                        <p *ngIf=\"dataSourcedanhsachThuocKhongBHYT.data.length == 0 && dataSourcedanhsachThuocBHYT.data.length == 0\"\n                                            class=\"m-0 p-0\"><strong>Không có dược phẩm nào chờ xuất</strong></p>\n                                        <ng-template #donGiaTemplate let-dataItem>\n                                            <span> {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}</span>\n                                        </ng-template>\n\n                                        <ng-template #thanhTienTemplate let-dataItem>\n                                            <span> {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}</span>\n                                        </ng-template>\n\n                                    </div>\n                                    <br>\n                                    <div\n                                        *ngIf=\"dataSourcedanhsachThuocBHYT.data.length>0 || dataSourcedanhsachThuocKhongBHYT.data.length>0\">\n                                        <button type=\"button\" color=\"primary\" (click)=\"GuiData()\"\n                                            class=\"mr-1 float-right\" mat-raised-button>\n                                            Xuất thuốc</button>\n                                    </div>\n\n                                </ng-template>\n                                <ng-template kendoTabTitle>\n                                    <div kendoTooltip title=\"Phím tắt: Ctrl + F2\">\n                                        Chờ xuất thuốc-vật tư\n                                    </div>\n                                </ng-template>\n                            </kendo-tabstrip-tab>\n                        </kendo-tabstrip>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n                            <button type=\"button\" (click)=\"inXemTruocBangKeThuoc()\" mat-raised-button\n                                title=\"In Bảng Kê\">\n                                In Bảng Kê\n                            </button>\n                            <button type=\"button\" (click)=\"Huy()\" mat-raised-button title=\"Phím tắt: ESC\">\n                                Quay lại\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt-routing.module.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt-routing.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DanhSachCapThuocBHYTRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachCapThuocBHYTRoutingModule", function() { return DanhSachCapThuocBHYTRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _danh_sach_don_thuoc_cho_cap_thuoc_danh_sach_don_thuoc_cho_cap_thuoc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.ts");
/* harmony import */ var _don_thuoc_cap_thuoc_chi_tiet_don_thuoc_cap_thuoc_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.ts");








const routes = [
    {
        path: '',
        component: _danh_sach_don_thuoc_cho_cap_thuoc_danh_sach_don_thuoc_cho_cap_thuoc_component__WEBPACK_IMPORTED_MODULE_6__["DanhSachDonThuocChoCapThuocComponent"],
        data: {
            title: 'Danh sách đơn thuốc chờ cấp thuốc',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachDonThuocChoCapThuocBHYT,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'cho-cap-thuoc-bhyt/:id/:idsub/:tt',
        component: _don_thuoc_cap_thuoc_chi_tiet_don_thuoc_cap_thuoc_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__["ChoCapThuocBHYTChiTietComponent"],
        data: {
            title: 'Chờ cấp thuốc chi tiết bhyt',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachDonThuocChoCapThuocBHYT,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let DanhSachCapThuocBHYTRoutingModule = class DanhSachCapThuocBHYTRoutingModule {
};
DanhSachCapThuocBHYTRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DanhSachCapThuocBHYTRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.model.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.model.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: QuayXuatThuoc, TagItem, BenhNhanThongTin, DanhSachThuoc, XacNhanInViewModel, XacNhanInThuocViewModel, ExportQueryInfoQueryInfo, TimBenhNhanChoCapThuoc, rangeDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayXuatThuoc", function() { return QuayXuatThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return TagItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanThongTin", function() { return BenhNhanThongTin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachThuoc", function() { return DanhSachThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanInViewModel", function() { return XacNhanInViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanInThuocViewModel", function() { return XacNhanInThuocViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function() { return ExportQueryInfoQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimBenhNhanChoCapThuoc", function() { return TimBenhNhanChoCapThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class QuayXuatThuoc {
    constructor(ThoiDiemTiepNhanTuFormat = null, ThoiDiemTiepNhanDenFormat = null, FromDate = null, ToDate = null) {
        this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
        this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
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
class BenhNhanThongTin {
    constructor(Id = null, MaBN = null, MaYeuCauTiepNhan = null, HoTen = null, GioiTinh = null, GioiTinhHienThi = null, NamSinh = null, DiaChi = null, DiaChiDayDu = null, SoDienThoai = null, Email = null, SoDuTaiKhoan = 0) {
        this.Id = Id;
        this.MaBN = MaBN;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.HoTen = HoTen;
        this.GioiTinh = GioiTinh;
        this.GioiTinhHienThi = GioiTinhHienThi;
        this.NamSinh = NamSinh;
        this.DiaChi = DiaChi;
        this.DiaChiDayDu = DiaChiDayDu;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.SoDuTaiKhoan = SoDuTaiKhoan;
    }
}
class DanhSachThuoc {
    constructor(Id = 0, ThuocBHYT = [], ThuocKhongBHYT = []) {
        this.Id = Id;
        this.ThuocBHYT = ThuocBHYT;
        this.ThuocKhongBHYT = ThuocKhongBHYT;
    }
}
class XacNhanInViewModel {
    constructor(TaiKhoanBenhNhanThuId = null, InPhieuThu = null, InBangKe = null, Hosting = null) {
        this.TaiKhoanBenhNhanThuId = TaiKhoanBenhNhanThuId;
        this.InPhieuThu = InPhieuThu;
        this.InBangKe = InBangKe;
        this.Hosting = Hosting;
    }
}
class XacNhanInThuocViewModel {
    constructor(TiepNhanId = null, Hosting = null, IsBhyt = null) {
        this.TiepNhanId = TiepNhanId;
        this.Hosting = Hosting;
        this.IsBhyt = IsBhyt;
    }
}
class ExportQueryInfoQueryInfo {
    constructor(Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class TimBenhNhanChoCapThuoc {
    constructor(MaBenhNhan = null, MaTiepNhan = null, HoTen = null, SoDienThoai = null, RangeDate = new rangeDate) {
        this.MaBenhNhan = MaBenhNhan;
        this.MaTiepNhan = MaTiepNhan;
        this.HoTen = HoTen;
        this.SoDienThoai = SoDienThoai;
        this.RangeDate = RangeDate;
    }
}
class rangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DanhSachCapThuocBHYTModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachCapThuocBHYTModule", function() { return DanhSachCapThuocBHYTModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _danh_sach_cap_thuoc_bhyt_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./danh-sach-cap-thuoc-bhyt-routing.module */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt-routing.module.ts");
/* harmony import */ var _danh_sach_don_thuoc_cho_cap_thuoc_danh_sach_don_thuoc_cho_cap_thuoc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.ts");
/* harmony import */ var _danh_sach_cap_thuoc_bhyt_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./danh-sach-cap-thuoc-bhyt.service */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.service.ts");
/* harmony import */ var _don_thuoc_cap_thuoc_chi_tiet_don_thuoc_cap_thuoc_chi_tiet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.ts");
/* harmony import */ var _quay_thuoc_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../quay-thuoc.module */ "./src/app/modules/main/quay-thuoc/quay-thuoc.module.ts");





















let DanhSachCapThuocBHYTModule = class DanhSachCapThuocBHYTModule {
};
DanhSachCapThuocBHYTModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _danh_sach_don_thuoc_cho_cap_thuoc_danh_sach_don_thuoc_cho_cap_thuoc_component__WEBPACK_IMPORTED_MODULE_16__["DanhSachDonThuocChoCapThuocComponent"],
            _don_thuoc_cap_thuoc_chi_tiet_don_thuoc_cap_thuoc_chi_tiet_component__WEBPACK_IMPORTED_MODULE_18__["ChoCapThuocBHYTChiTietComponent"]
        ], imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _danh_sach_cap_thuoc_bhyt_routing_module__WEBPACK_IMPORTED_MODULE_15__["DanhSachCapThuocBHYTRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _quay_thuoc_module__WEBPACK_IMPORTED_MODULE_19__["QuayThuocModule"]
        ], providers: [
            _danh_sach_cap_thuoc_bhyt_service__WEBPACK_IMPORTED_MODULE_17__["DanhSachCapThuocBHYTService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_14__["BaseService"], useClass: _danh_sach_cap_thuoc_bhyt_service__WEBPACK_IMPORTED_MODULE_17__["DanhSachCapThuocBHYTService"] },
        ]
    })
], DanhSachCapThuocBHYTModule);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.service.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: DanhSachCapThuocBHYTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachCapThuocBHYTService", function() { return DanhSachCapThuocBHYTService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let DanhSachCapThuocBHYTService = class DanhSachCapThuocBHYTService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
    }
};
DanhSachCapThuocBHYTService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DanhSachCapThuocBHYTService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DanhSachCapThuocBHYTService);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.scss ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL2Rhbmgtc2FjaC1jYXAtdGh1b2MtYmh5dC9jYXAtdGh1b2MtYmh5dC9kYW5oLXNhY2gtZG9uLXRodW9jLWNoby1jYXAtdGh1b2MvZGFuaC1zYWNoLWRvbi10aHVvYy1jaG8tY2FwLXRodW9jLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: DanhSachDonThuocChoCapThuocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachDonThuocChoCapThuocComponent", function() { return DanhSachDonThuocChoCapThuocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_modules_main_quay_thuoc_quay_thuoc_list_quay_thuoc_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _danh_sach_cap_thuoc_bhyt_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../danh-sach-cap-thuoc-bhyt.model */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _in_don_thuoc_pop_up_in_don_thuoc_pop_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../in-don-thuoc-pop-up/in-don-thuoc-pop-up.component */ "./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.ts");



















let DanhSachDonThuocChoCapThuocComponent = class DanhSachDonThuocChoCapThuocComponent {
    constructor(router, location, authService, apiService, notificationService, route, cd, dialog) {
        this.router = router;
        this.location = location;
        this.authService = authService;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.route = route;
        this.cd = cd;
        this.dialog = dialog;
        this.timKiem = new _danh_sach_cap_thuoc_bhyt_model__WEBPACK_IMPORTED_MODULE_7__["TimBenhNhanChoCapThuoc"]();
        this.exportQueryInfoQueryInfo = new _danh_sach_cap_thuoc_bhyt_model__WEBPACK_IMPORTED_MODULE_7__["ExportQueryInfoQueryInfo"]();
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.id = 0;
        this.typeDanhSachThanhToan = 0;
        this.xacNhanIn = false;
        this.sortConfig = [
            {
                field: "Id",
                dir: "asc",
            },
        ];
        //End Khai báo viewChild
        this.baseRoute = "/danh-sach-don-thuoc-cho-cap-thuoc";
        this.urlGetDataGridChild = "QuayThuoc/GetDataChoCapThuocBHYTForGridAsync";
        this.urlGetTotalPageGridChild = "QuayThuoc/GetTotalChoCapThuocBHYTPageForGridAsync";
        this.urlGetDataChild = "QuayThuoc/GetDanhSachThuocBenhNhanChild";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].DanhSachDonThuocChoCapThuocBHYT;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_5__["LocalStorageHelper"].getItem("additionalSearchStringDSChoCapThuoc");
                if (additionalSearchString != null) {
                    this.timKiem = JSON.parse(additionalSearchString);
                }
            }
        }
        else {
            let dateNow = new Date();
            if (this.timKiem.RangeDate.startDate == null) {
                this.timKiem.RangeDate.startDate = dateNow;
            }
            if (this.timKiem.RangeDate.endDate == null) {
                this.timKiem.RangeDate.endDate = dateNow;
            }
        }
        this.gridParentColumnsDSChoCapThuoc = [
            { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
            { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 120, Sortable: true },
            { Field: "SoDienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true },
            { Field: "TongGiaTriDonThuoc", Title: "Tổng giá trị đơn thuốc", Width: 200, Sortable: true, Template: this.TongGiaTriDonThuocTemplate },
        ];
        this.gridChildColumnsDSChoCapThuoc = [
            { Field: "STT", Title: "#", Width: 100, Sortable: true },
            { Field: "LoaiDonThuoc", Title: "", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "MaDon", Title: "Mã Đơn", Width: 100, Sortable: true },
            { Field: "NgayKeDon", Title: "Ngày kê đơn", Width: 200, Sortable: true },
            { Field: "DVKham", Title: "Dịch vụ khám", minWidth: 200, Sortable: true },
            { Field: "BSKham", Title: "Bác sĩ khám", Width: 200, Sortable: true },
            { Field: "SoTienDisPlay", Title: "Số tiền ", Width: 80, Sortable: true, TemplateFooter: this.TongCongDonThuocFooter, Template: this.SoTienThuoctemplate },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Sortable: true, Template: this.TinhTrangThuoctemplate },
            { Field: "", Title: "", Width: 120, Sortable: true, Template: this.templatePrint },
        ];
        this.queryStringSearchUuTien = JSON.stringify(this.timKiem);
        this.TimKiemChoCapThuocBHYT();
    }
    TimKiemChoCapThuocBHYT() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        let timKiemChoCapThuocBHYTJSon = JSON.stringify(this.timKiem);
        this.convertDateTimeToUTC();
        if (this.gridList != undefined) {
            this.gridList.searchString = timKiemChoCapThuocBHYTJSon;
            this.gridList._additionalSearchString = timKiemChoCapThuocBHYTJSon;
            this.gridList.search();
        }
        this.reverseDateTime();
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_5__["LocalStorageHelper"].setItem("additionalSearchStringDSChoCapThuoc", timKiemChoCapThuocBHYTJSon);
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.TimKiemChoCapThuocBHYT();
        }
    }
    searchChangeMaBN(event) {
        var self = this;
        if (this.timeoutSearchChange != null) {
            clearTimeout(this.timeoutSearchChange);
            this.timeoutSearchChange = null;
        }
        this.timeoutSearchChange = setTimeout(function () {
            if (event !== undefined && event.endsWith("@")) {
                var dataTimKiem = event.split("|");
                if (dataTimKiem.length > 1) {
                    self.timKiem.MaBenhNhan = dataTimKiem[0];
                    self.TimKiemChoCapThuocBHYT();
                }
                else {
                    self.timKiem.MaBenhNhan = null;
                    self.timKiem.MaTiepNhan = event.slice(0, -1);
                    self.TimKiemChoCapThuocBHYT();
                }
            }
        }, 100);
    }
    convertDateTimeToUTC() {
        if (this.timKiem.RangeDate.startDate) {
            this.danhSachDieuTriNoiTruTuNgay = new Date(this.timKiem.RangeDate.startDate);
            this.timKiem.RangeDate.startDate = new Date(Date.UTC(this.danhSachDieuTriNoiTruTuNgay.getFullYear(), this.danhSachDieuTriNoiTruTuNgay.getMonth(), this.danhSachDieuTriNoiTruTuNgay.getDate(), this.danhSachDieuTriNoiTruTuNgay.getHours(), this.danhSachDieuTriNoiTruTuNgay.getMinutes()));
        }
        if (this.timKiem.RangeDate.endDate) {
            this.danhSachDieuTriNoiTruDenNgay = new Date(this.timKiem.RangeDate.endDate);
            this.timKiem.RangeDate.endDate = new Date(Date.UTC(this.danhSachDieuTriNoiTruDenNgay.getFullYear(), this.danhSachDieuTriNoiTruDenNgay.getMonth(), this.danhSachDieuTriNoiTruDenNgay.getDate(), this.danhSachDieuTriNoiTruDenNgay.getHours(), this.danhSachDieuTriNoiTruDenNgay.getMinutes()));
        }
    }
    reverseDateTime() {
        if (this.timKiem.RangeDate.startDate) {
            this.timKiem.RangeDate.startDate = new Date(this.danhSachDieuTriNoiTruTuNgay.getFullYear(), this.danhSachDieuTriNoiTruTuNgay.getMonth(), this.danhSachDieuTriNoiTruTuNgay.getDate(), this.danhSachDieuTriNoiTruTuNgay.getHours(), this.danhSachDieuTriNoiTruTuNgay.getMinutes());
        }
        if (this.timKiem.RangeDate.endDate) {
            this.timKiem.RangeDate.endDate = new Date(this.danhSachDieuTriNoiTruDenNgay.getFullYear(), this.danhSachDieuTriNoiTruDenNgay.getMonth(), this.danhSachDieuTriNoiTruDenNgay.getDate(), this.danhSachDieuTriNoiTruDenNgay.getHours(), this.danhSachDieuTriNoiTruDenNgay.getMinutes());
        }
    }
    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }
    xemChoCapThuocBHYT(event) {
        this.router.navigate(['danh-sach-don-thuoc-cho-cap-thuoc/cho-cap-thuoc-bhyt/' + event.YeuCauTiepNhanId + '/' + event.BenhNhanId + '/' + event.TrangThai]);
    }
    exportExcel() {
        const self = this;
        self.showLoadingPopup();
        let timKiemChoCapThuocBHYTJSon = JSON.stringify(self.timKiem);
        self.exportQueryInfoQueryInfo.AdditionalSearchString = timKiemChoCapThuocBHYTJSon;
        self.convertDateTimeToUTC();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('QuayThuoc/ExportDonThuocChoCapThuocBHYT', self.exportQueryInfoQueryInfo).subscribe(resultData => {
                self.closeAllDialogs();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DanhSachDonThuocChoCapThuocBHYT' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showSavingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
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
    PrinAllDonThuocBenhNhan(donThuocThanhToanId, LoaiDonThuoc, YeuCauKhambenhId) {
        var data = {
            LoaiDonThuoc: LoaiDonThuoc,
            YeuCauKhambenhId: YeuCauKhambenhId,
            Hosting: null,
            TiepNhanId: donThuocThanhToanId
        };
        if (window.location.protocol == "http:") {
            data.Hosting = "http://" + window.location.host;
        }
        else {
            data.Hosting = "https://" + window.location.host;
        }
        this.apiService.post("QuayThuoc/InThuocBenhNhan", data).subscribe(resultData => {
            let dialogRef = this.dialog.open(_in_don_thuoc_pop_up_in_don_thuoc_pop_up_component__WEBPACK_IMPORTED_MODULE_18__["InDonThuocPopUpComponent"], {
                width: '1000px',
                data: { Model: resultData, InDonThuocDanhSachList: false, InBangKe: true, InPhieuThu: false }
            }).afterClosed().subscribe(() => { });
        }, () => { });
    }
    QuetMaQRCodeClick() {
        let elementBarcode = document.getElementById('barcodeActive');
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }
    searchChangeMaTN(event) {
        //xóa sreach trước đó
        var self = this;
        if (this.timeoutSearchChange != null) {
            clearTimeout(this.timeoutSearchChange);
            this.timeoutSearchChange = null;
        }
        this.timeoutSearchChange = setTimeout(function () {
            if (event !== undefined && event.endsWith("@")) {
                var dataTimKiem = event.split("|");
                if (dataTimKiem.length > 1) {
                    self.timKiem.MaTiepNhan = dataTimKiem[0];
                    self.TimKiemChoCapThuocBHYT();
                }
                else {
                    self.timKiem.MaTiepNhan = null;
                    self.timKiem.MaBenhNhan = event.slice(0, -1);
                    self.TimKiemChoCapThuocBHYT();
                }
            }
        }, 100);
    }
    changeQR($event) {
        if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
            this.modelQRCode = $event;
            var dataTimKiem = $event.split("|");
            if (dataTimKiem.length > 1) {
                this.timKiem.MaBenhNhan = dataTimKiem[0];
                this.TimKiemChoCapThuocBHYT();
            }
            else {
                this.timKiem.MaTiepNhan = $event.slice(0, -1); // Mã tiếp nhận @
                this.TimKiemChoCapThuocBHYT();
            }
        }
        else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScanF1 = false;
    }
};
DanhSachDonThuocChoCapThuocComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "gridList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_modules_main_quay_thuoc_quay_thuoc_list_quay_thuoc_list_component__WEBPACK_IMPORTED_MODULE_4__["QuayThuocListComponent"], { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "gridQuayThuocList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TongGiaTriDonThuocTemplate', { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "TongGiaTriDonThuocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiChoXuatThuocTemplate', { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "trangThaiChoXuatThuocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TongCongDonThuocFooter', { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "TongCongDonThuocFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangThuoctemplate', { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "TinhTrangThuoctemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templatePrint', { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "templatePrint", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SoTienThuoctemplate', { static: true })
], DanhSachDonThuocChoCapThuocComponent.prototype, "SoTienThuoctemplate", void 0);
DanhSachDonThuocChoCapThuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-don-thuoc-cho-cap-thuoc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-don-thuoc-cho-cap-thuoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-don-thuoc-cho-cap-thuoc.component.scss */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component.scss")).default]
    })
], DanhSachDonThuocChoCapThuocComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL2Rhbmgtc2FjaC1jYXAtdGh1b2MtYmh5dC9jYXAtdGh1b2MtYmh5dC9kb24tdGh1b2MtY2FwLXRodW9jLWNoaS10aWV0L2Rvbi10aHVvYy1jYXAtdGh1b2MtY2hpLXRpZXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: ChoCapThuocBHYTChiTietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoCapThuocBHYTChiTietComponent", function() { return ChoCapThuocBHYTChiTietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _danh_sach_cap_thuoc_bhyt_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../danh-sach-cap-thuoc-bhyt.model */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts");











let ChoCapThuocBHYTChiTietComponent = class ChoCapThuocBHYTChiTietComponent {
    constructor(route, notificationService, dialog, apiService, router, cdRef) {
        this.route = route;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.router = router;
        this.cdRef = cdRef;
        this.tabIndex = 0;
        this.tiepNhanId = 0;
        this.benhNhanId = 0;
        this.apDungCongNoThuoc = false;
        this.xemTruocBangKeThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__["XemTruocBangKeThuoc"]();
        this.gridColumns = [];
        this.dataSourcedanhsachThuocBHYT = {
            data: [],
            total: 0
        };
        this.dataSourcedanhsachThuocKhongBHYT = {
            data: [],
            total: 0
        };
    }
    ngOnInit() {
        this.tiepNhanId = this.route.snapshot.params.id;
        this.benhNhanId = this.route.snapshot.params.idsub;
        this.benhnhanThongTin = new _danh_sach_cap_thuoc_bhyt_model__WEBPACK_IMPORTED_MODULE_7__["BenhNhanThongTin"]();
        this.GetThongTinBenhNhan(this.benhNhanId, this.tiepNhanId);
        this.danhSachThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__["danhSachThuoc"]();
        this.GetThongTinDonThuoc(this.tiepNhanId);
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 40, Sortable: false },
            { Field: "TenDuocPham", Title: "Tên Thuốc", Width: 190, Sortable: false },
            { Field: "NongDoVaHamLuong", Title: "Nồng độ / hàm lượng", Width: 185, Sortable: false },
            { Field: "MaHoatChat", Title: "Hoạt chất", Width: 185, Sortable: false },
            { Field: "DonViTinh", Title: "ĐVT", Width: 94, Sortable: false },
            { Field: "SoLuongMua", Title: "SL Mua", Width: 110, Sortable: false },
            { Field: "DonGia", Title: "Đơn giá", Width: 129, Sortable: false, Template: this.donGiaTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 147, Sortable: false, Template: this.thanhTienTemplate },
            { Field: "Solo", Title: "Số lô", Width: 109, Sortable: false },
            { Field: "HanSuDungHientThi", Title: "Hạn sử dụng", Width: 146, Sortable: false },
        ];
    }
    GetThongTinBenhNhan(benhNhanId, tiepNhanId) {
        this.apiService.post("QuayThuoc/GetThongTinBenhNhan?benhNhanId=" + benhNhanId + "&tiepNhanId=" + tiepNhanId).subscribe(resultData => {
            this.benhnhanThongTin = resultData;
        }, () => { });
    }
    Huy() {
        this.router.navigate(['danh-sach-don-thuoc-cho-cap-thuoc'], { queryParams: { holdQuery: true } });
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    afterChangedCongNo() {
        this.cdRef.detectChanges();
        this.apDungCongNoThuoc = false;
    }
    afterChangedMienGiam() {
        this.cdRef.detectChanges();
    }
    changeTab() {
        this.tabQuayThuoc.selectTab(1);
    }
    inXemTruocBangKeThuoc() {
        this.showPopupLoadingIn();
        this.xemTruocBangKeThuoc.Hosting = window.location.protocol + '//' + window.location.host;
        this.xemTruocBangKeThuoc.YeuCauTiepNhanId = this.route.snapshot.params.id;
        if (this.xemTruocBangKeThuoc.DanhSachDonThuocs === undefined &&
            this.xemTruocBangKeThuoc.DanhSachDonThuocs === null && this.xemTruocBangKeThuoc.DanhSachDonThuocs.length === 0) {
            this.notificationService.showError("Không có thuốc và vật tư.");
            return;
        }
        else {
            this.apiService.postExportPdf('QuayThuoc/XemTruocBangKeThuoc', this.xemTruocBangKeThuoc).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.dialog.open(_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_10__["ThongTinPhieuPdfPopupComponent"], {
                        disableClose: true,
                        width: '1000px',
                        data: { Model: resultData }
                    }).afterClosed().subscribe(() => {
                        this.closePopupLoadingData();
                    });
                }
            }, (err) => {
                this.closePopupLoadingData();
            });
        }
    }
    showPopupLoadingIn() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang loading...' },
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    GetThongTinDonThuoc(id) {
        var self = this;
        var dialogRef = self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
        this.apiService.post("QuayThuoc/GetDanhSachXuatThuocBHYT?tiepNhanId=" + id).subscribe(resultData => {
            this.dataSourcedanhsachThuocBHYT.data = resultData;
            let index = 1;
            this.dataSourcedanhsachThuocBHYT.data.forEach(x => {
                x.STT = index;
                index++;
            });
            this.danhSachThuoc.ThuocBHYT = [...this.dataSourcedanhsachThuocBHYT.data];
        }, () => { });
        // this.apiService.post<Array<any>>("QuayThuoc/GetDanhSachXuatThuocKhongBHYT?tiepNhanId=" + id).subscribe(
        //     resultData => {
        //         this.dataSourcedanhsachThuocKhongBHYT.data = resultData;
        //         let index = 1;
        //         this.dataSourcedanhsachThuocKhongBHYT.data.forEach(x => {
        //             x.STT = index;
        //             index++;
        //         });
        //         this.danhSachThuoc.ThuocKhongBHYT = [...this.dataSourcedanhsachThuocKhongBHYT.data]
        //     },
        //     () => { });
        dialogRef.close();
    }
    GuiData() {
        this.danhSachThuoc.Id = this.tiepNhanId;
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn xuất đơn thuốc này?" }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.apiService.post("QuayThuoc/XuatDonThuocBHYT", this.danhSachThuoc).subscribe(resultData => {
                    if (resultData != null && resultData != undefined && resultData != "") {
                        this.notificationService.showError(resultData);
                    }
                    else {
                        this.router.navigate(['danh-sach-don-thuoc-cho-cap-thuoc'], { queryParams: { holdQuery: false } });
                    }
                }, (err) => {
                });
            }
        });
    }
    KeThuoc() {
        this.showPopupLoadingIn();
        var data = {
            Hosting: null,
            TiepNhanId: this.tiepNhanId
        };
        data.Hosting = window.location.protocol + '//' + window.location.host;
        this.apiService.postExportPdf("QuayThuoc/XacNhanInThuocCoBhyt", data).subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dialog.open(_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_10__["ThongTinPhieuPdfPopupComponent"], {
                    disableClose: true,
                    width: '1000px',
                    data: { Model: resultData }
                }).afterClosed().subscribe(() => {
                    this.closePopupLoadingData();
                });
            }
        }, (err) => {
            if (err.Message !== 'Validation Failed') {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    keyEvent(event) {
        if (event.keyCode == 112 && event.ctrlKey) {
            // ctrl + f1
            this.tabQuayThuoc.selectTab(0);
            event.preventDefault();
        }
        if (event.keyCode == 113 && event.ctrlKey) {
            // ctrl + f2
            this.tabQuayThuoc.selectTab(1);
            event.preventDefault();
        }
        if (event.keyCode == 27 && !event.ctrlKey) {
            // esc
            this.Huy();
            event.preventDefault();
        }
    }
};
ChoCapThuocBHYTChiTietComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabQuayThuoc', { static: true })
], ChoCapThuocBHYTChiTietComponent.prototype, "tabQuayThuoc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], ChoCapThuocBHYTChiTietComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], ChoCapThuocBHYTChiTietComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], ChoCapThuocBHYTChiTietComponent.prototype, "keyEvent", null);
ChoCapThuocBHYTChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-don-thuoc-cap-thuoc-chi-tiet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./don-thuoc-cap-thuoc-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./don-thuoc-cap-thuoc-chi-tiet.component.scss */ "./src/app/modules/main/quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component.scss")).default]
    })
], ChoCapThuocBHYTChiTietComponent);



/***/ })

}]);
//# sourceMappingURL=quay-thuoc-danh-sach-cap-thuoc-bhyt-cap-thuoc-bhyt-danh-sach-cap-thuoc-bhyt-module-es2015.js.map