(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-vien-dich-vu-giuong-benh-vien-dich-vu-giuong-benh-vien-module"],{

/***/ "./node_modules/@iconify/icons-ic/delete.js":
/*!**************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/delete.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Dịch Vụ Giường Tại Bệnh Viện',Path:'/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Dịch Vụ Giường Tại Bệnh Viện</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-dich-vu-giuong-benh-vien-shared>\n                </app-dich-vu-giuong-benh-vien-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.html":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Danh Mục',Path:''}\n                ,{Title:'Nhóm Hệ Thống',Path:''}\n                ,{Title:'Bệnh Viện',Path:''}\n                ,{Title:'Dịch Vụ Giường Tại Bệnh Viện',Path:'/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien\"\n                [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useHeaderDefault]=\"true\"\n                [useActionDefault]=\"true\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\"\n                [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\" #gridDichVuGiuongCha></app-grid>\n            <ng-template #detailTemplate let-dataItem>\n                <p style=\"text-align: center;width: 80%;\"><b>GIÁ BẢO HIỂM</b></p>\n                <app-grid baseRoute=\"/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien\"\n                    [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\" [pageable]=\"false\">\n                </app-grid>\n                <p style=\"text-align: center;width: 80%; padding-top: 10px;\"><b>GIÁ BỆNH VIỆN</b></p>\n                <app-grid baseRoute=\"/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien\"\n                    [gridColumns]=\"gridChildColumns2\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild2\" [urlGetTotalPage]=\"urlGetTotalPageGridChild2\" [groups]=\"groups\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\" [pageable]=\"false\">\n                </app-grid>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"12%\" fxFlex.sm=\"12%\">\n        <div class=\"container-custom no-label\">\n            <label>&nbsp;</label>\n            <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                <app-checkbox fxFlex=\"100%\" value=\"true\" id=\"AnhXa\" label=\"Ánh xạ\"\n                    [(model)]=\"dichVuGiuongBenhVien.AnhXa\" (modelChange)=\"XuLyAnhXa($event)\"></app-checkbox>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"!dichVuGiuongBenhVien.AnhXa\" fxFlex=\"88%\"></div>\n    <ng-container *ngIf=\"dichVuGiuongBenhVien.AnhXa\">\n        <app-combobox id=\"DichVuGiuong\" fxFlex=\"50%\" fxFlex.sm=\"50%\" [(model)]=\"dichVuGiuongBenhVien.DichVuGiuongId\"\n            [required]=\"true\" [modelText]=\"dichVuGiuongBenhVien.DichVuGiuongModelText\" label=\"Dịch Vụ Giường\"\n            class=\"item-no-padding\" [template]=\"dichVuGiuongTemplate\" [templateHeader]=\"dichVuGiuongTemplateHeader\"\n            url=\"DichVuGiuongBenhVien/GetListDichVuGiuong\" (selectionChange)=\"ChonDichVu($event)\"\n            [validationerror]=\"'DichVuGiuongId' | validationerror:validationErrors\">\n            <ng-template #dichVuGiuongTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #dichVuGiuongTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <div fxFlex=\"38%\"></div>\n    </ng-container>\n\n    <fieldset *ngIf=\"dichVuGiuongBenhVien.AnhXa\" fxFlex=\"99%\">\n        <legend>Thông tin dịch vụ giường ánh xạ</legend>\n        <div fxFlex=\"100%\" class=\"mt-4 ml-4\">\n            <ul class=\"inline\">\n                <li>Mã dịch vụ:\n                    <strong>{{dichVuGiuongBenhVien.DichVuGiuong.MaChung}}</strong>\n                </li>\n                <li>Tên dịch vụ:\n                    <strong>{{dichVuGiuongBenhVien.DichVuGiuong.TenChung}}</strong>\n                </li>\n                <li>Mã TT37:\n                    <strong>{{dichVuGiuongBenhVien.DichVuGiuong.MaTT37}}</strong>\n                </li>\n                <li>Mô tả:\n                    <strong>{{dichVuGiuongBenhVien.DichVuGiuong.MoTa}}</strong>\n                </li>\n            </ul>\n        </div>\n    </fieldset>\n\n    <app-textbox id=\"Ma\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Mã\" [required]=\"true\"\n        [(model)]=\"dichVuGiuongBenhVien.Ma\" [maxlength]=\"50\"\n        [validationerror]=\"'Ma' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-textbox id=\"Ten\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Tên\" [required]=\"true\"\n        [(model)]=\"dichVuGiuongBenhVien.Ten\" [maxlength]=\"250\"\n        [validationerror]=\"'Ten' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-dropdownlist id=\"LoaiGiuong\" fxFlex=\"10%\" fxFlex.sm=\"50%\" [(model)]=\"dichVuGiuongBenhVien.LoaiGiuong\"\n        [required]=\"true\" [validationerror]=\"'LoaiGiuong' | validationerror:validationErrors\"\n        [modelText]=\"dichVuGiuongBenhVien.LoaiGiuongText\" label=\"Loại Giường\" url=\"DichVuGiuongBenhVien/GetLoaiGiuong\">\n    </app-dropdownlist>\n\n    <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n        <div class=\"container-custom no-label\">\n            <label>&nbsp;</label>\n            <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                <app-checkbox fxFlex=\"100%\" value=\"true\" id=\"HieuLuc\" label=\"Hiệu lực\"\n                    [(model)]=\"dichVuGiuongBenhVien.HieuLuc\"></app-checkbox>\n            </div>\n        </div>\n    </div>\n\n    <app-textbox id=\"MoTa\" fxFlex=\"30%\" fxFlex.sm=\"50%\" maxlength=\"4000\" [(model)]=\"dichVuGiuongBenhVien.MoTa\"\n        label=\"Mô Tả\" [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <!-- <app-multiselect fxFlex=\"50%\" [(model)]=\"dichVuGiuongBenhVien.KhoaPhongIds\" [modelText]=\"\" label=\"Khoa\"\n        class=\"item-no-padding\" [template]=\"khoaPhongTemplate\" (modelChange)=\"changeKhoa($event)\"\n        [templateHeader]=\"khoaPhongTemplateHeader\" url=\"DichVuGiuongBenhVien/GetKhoaKhamTheoDichVuGiuongBenhVien\"\n        [validationerror]=\"'KhoaPhongIds' | validationerror:validationErrors\" required=\"true\">\n        <ng-template #khoaPhongTemplateHeader let-dataItem>\n\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #khoaPhongTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-multiselect> -->\n\n    <!-- <app-multiselect fxFlex=\"50%\" [(model)]=\"dichVuGiuongBenhVien.PhongBenhVienIds\" idWhere=\"{{id}}\"\n        [modelText]=\"\" label=\"Phòng bệnh viện\" class=\"item-no-padding\" [template]=\"phongBenhVienTemplate\"\n        [templateHeader]=\"phongBenhVienTemplateHeader\" url=\"DichVuGiuongBenhVien/GetPhongKhamTheoDichVuGiuongBenhVien\"\n        [validationerror]=\"'KhoaIds' | validationerror:validationErrors\">\n        <ng-template #phongBenhVienTemplateHeader let-dataItem>\n\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #phongBenhVienTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-multiselect>   -->\n\n\n    <!-- <app-multiselect #noiThucHien fxFlex=\"50%\" [(model)]=\"dichVuGiuongBenhVien.NoiThucHienIds\" idWhere=\"{{id}}\"\n        [modelText]=\"\" label=\"Nơi thực hiện\" class=\"item-no-padding\" [template]=\"phongBenhVienTemplate\"\n        [queryInfo]=\"queryNoiThucHien\" url=\"DichVuGiuongBenhVien/GetPhongKhamTheoDichVuGiuongBenhVien\"\n        [autoClose]=\"false\" [validationerror]=\"'NoiThucHienIds' | validationerror:validationErrors\" required=\"true\"\n        [popupSettings]=\"null\">\n        <ng-template #phongBenhVienTemplate let-dataItem>\n            <div>\n                <input type=\"checkbox\" class=\"k-checkbox\" [checked]=\"isItemSelected(dataItem)\">\n                <label [ngClass]=\"dataItem.KhoaId !== null ? 'item-child' : 'item-parent'\"\n                    class=\"k-checkbox-label\">{{dataItem.DisplayName}}</label>\n            </div>\n        </ng-template>\n    </app-multiselect> -->\n    <!-- [style.marginLeft.px]=\"dataItem.KhoaId !== null ? 30 : 0\" -->\n\n\n    <ng-container *ngIf=\"dichVuGiuongBenhVien.AnhXa\">\n        <h4 class=\"sub-title\" fxFlex=\"100%\">Giá bảo hiểm</h4>\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\"\n            *ngFor=\"let item of dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems;let i = index\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-textboxnumeric [disabled]=\"!isDisplay\" id=\"GiaBH{{i}}\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n                    [required]=\"true\" min=\"0\" max=\"999999999\" [(model)]=\"item.Gia\" label=\"Giá\" \n                    [validationerror]=\"'DichVuGiuongBenhVienGiaBaoHiems['+i+'].Gia' | validationerror:validationErrors\">\n                </app-textboxnumeric>\n\n                <app-textboxnumeric [disabled]=\"!isDisplay\" id=\"TiLeBaoHiemThanhToanBH{{i}}\" fxFlex=\"25%\"\n                    fxFlex.sm=\"25%\" [required]=\"true\" min=\"1\" max=\"9999999\" [spinners]=\"false\"\n                    [(model)]=\"item.TiLeBaoHiemThanhToan\" label=\"Tỉ lệ thanh toán\" max=\"100\" min=\"0\"\n                    [validationerror]=\"'DichVuGiuongBenhVienGiaBaoHiems['+i+'].TiLeBaoHiemThanhToan' | validationerror:validationErrors\">\n                </app-textboxnumeric>\n                <app-datepicker [disabled]=\"!isDisplay\" id=\"TuNgayBH{{i}}\" fxFlex=\"23%\" fxFlex.sm=\"23%\"\n                    label=\"Từ ngày\" [required]=\"true\" [(model)]=\"item.TuNgay\" [required]=\"true\"\n                    [validationerror]=\"'DichVuGiuongBenhVienGiaBaoHiems['+i+'].TuNgay' | validationerror:validationErrors\">\n                </app-datepicker>\n\n                <app-datepicker *ngIf=\"item.DenNgay!=null\" [disabled]=\"true\" id=\"DenNgayBH{{i}}\" fxFlex=\"23%\"\n                    fxFlex.sm=\"23%\" label=\"Đến Ngày\" [(model)]=\"item.DenNgay\">\n                </app-datepicker>\n\n                <div fxFlex=\"4%\" fxFlex.sm=\"4%\">\n                    <button mat-icon-button class=\"mt-3\" (click)=\"XoaBaoHiem(i)\">\n                        <mat-icon [icIcon]=\"icRemove\" color=\"warn\"></mat-icon>\n                    </button>\n                </div>\n\n            </div>\n        </div>\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n            <button mat-mini-fab color=\"primary\" (click)=\"ThemBaoHiem()\">\n                <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n            </button>\n        </div>\n    </ng-container>\n    <h4 class=\"sub-title\" fxFlex=\"100%\">Giá bệnh viện</h4>\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\"\n        *ngFor=\"let item of dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBenhViens;let i = index\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            <app-dropdownlist label=\"Loại Giá\" fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"LoaiGiaBV{{i}}\" required=\"true\"\n                [(model)]=\"item.NhomGiaDichVuGiuongBenhVienId\" [modelText]=\"item.NhomGiaDichVuGiuongBenhVienText\"\n                url=\"DichVuGiuongBenhVien/GetNhomDichVu\"\n                [validationerror]=\"'DichVuGiuongBenhVienGiaBenhViens['+i+'].NhomGiaDichVuGiuongBenhVienId' | validationerror:validationErrors\">\n            </app-dropdownlist>\n\n            <app-textboxnumeric [disabled]=\"!isDisplay\" id=\"GiaBV{{i}}\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n                min=\"0\" max=\"999999999\" [(model)]=\"item.Gia\" label=\"Giá\"           \n                [validationerror]=\"'DichVuGiuongBenhVienGiaBenhViens['+i+'].Gia' | validationerror:validationErrors\">\n            </app-textboxnumeric>\n\n\n            <app-datepicker [disabled]=\"!isDisplay\" id=\"TuNgayBV{{i}}\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Từ ngày\"\n                [required]=\"true\" [(model)]=\"item.TuNgay\" [required]=\"true\"\n                [validationerror]=\"'DichVuGiuongBenhVienGiaBenhViens['+i+'].TuNgay' | validationerror:validationErrors\">\n            </app-datepicker>\n\n            <app-datepicker *ngIf=\"item.DenNgay!=null\" [disabled]=\"true\" id=\"DenNgayBV{{i}}\" fxFlex=\"22%\"\n                fxFlex.sm=\"22%\" label=\"Đến Ngày\" [(model)]=\"item.DenNgay\">\n            </app-datepicker>\n\n            <!-- <div fxFlex=\"9%\" fxFlex.sm=\"9%\">\n                <div class=\"container-custom no-label\">\n                    <label>&nbsp;</label>\n                    <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                        <app-checkbox fxFlex=\"100%\" value=\"true\" id=\"baoPhong{{i}}\" label=\"Bao Phòng\"\n                            [(model)]=\"item.BaoPhong\"></app-checkbox>\n                    </div>\n                </div>\n            </div> -->\n\n            <div fxFlex=\"3%\" fxFlex.sm=\"3%\">\n                <button mat-icon-button class=\"mt-3\" (click)=\"XoaBenhVien(i)\">\n                    <mat-icon [icIcon]=\"icRemove\" color=\"warn\"></mat-icon>\n                </button>\n            </div>\n\n        </div>\n    </div>\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n        <button mat-mini-fab color=\"primary\" (click)=\"ThemBenhVien()\">\n            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n        </button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Dịch Vụ Giường Tại Bệnh Viện',Path:'/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Dịch Vụ Giường Tại Bệnh Viện</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-dich-vu-giuong-benh-vien-shared></app-dich-vu-giuong-benh-vien-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.scss ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kaWNoLXZ1LWdpdW9uZy1iZW5oLXZpZW4vZGljaC12dS1naXVvbmctYmVuaC12aWVuLWNyZWF0ZS9kaWNoLXZ1LWdpdW9uZy1iZW5oLXZpZW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: DichVuGiuongBenhVienCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVienCreateComponent", function() { return DichVuGiuongBenhVienCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dich_vu_giuong_benh_vien_shared_dich_vu_giuong_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.ts");




let DichVuGiuongBenhVienCreateComponent = class DichVuGiuongBenhVienCreateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien']);
    }
};
DichVuGiuongBenhVienCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_dich_vu_giuong_benh_vien_shared_dich_vu_giuong_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__["DichVuGiuongBenhVienSharedComponent"], { static: true })
], DichVuGiuongBenhVienCreateComponent.prototype, "shared", void 0);
DichVuGiuongBenhVienCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dich-vu-giuong-benh-vien-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dich-vu-giuong-benh-vien-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dich-vu-giuong-benh-vien-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.scss")).default]
    })
], DichVuGiuongBenhVienCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.scss ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kaWNoLXZ1LWdpdW9uZy1iZW5oLXZpZW4vZGljaC12dS1naXVvbmctYmVuaC12aWVuLWxpc3QvZGljaC12dS1naXVvbmctYmVuaC12aWVuLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: DichVuGiuongBenhVienListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVienListComponent", function() { return DichVuGiuongBenhVienListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");











let DichVuGiuongBenhVienListComponent = class DichVuGiuongBenhVienListComponent {
    constructor(notificationService, authService, dialog, apiService) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.gridChildColumns2 = [];
        this.urlGetDataGridChild = 'DichVuGiuongBenhVien/GetDataForGridChildAsync';
        this.urlGetTotalPageGridChild = 'DichVuGiuongBenhVien/GetTotalPageForGridChildAsync';
        this.urlGetDataGridChild2 = 'DichVuGiuongBenhVien/GetDataForGridChildBenhVienAsync';
        this.urlGetTotalPageGridChild2 = 'DichVuGiuongBenhVien/GetTotalPageForGridChildBenhVienAsync';
        this.groups = [{ field: 'LoaiGia' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhMucDichVuGiuongTaiBenhVien;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 100, Sortable: true, LinkDetail: true },
            { Field: 'MaTT37', Title: 'Mã TT37', Width: 120, Sortable: true },
            { Field: 'Ten', Title: 'Tên', MinWidth: 300, Sortable: true },
            { Field: 'TenNoiThucHien', Title: 'Nơi thực hiện', Width: 250, Sortable: true },
            { Field: 'HangBenhVienDisplay', Title: 'Hạng Bệnh Viện', Width: 130, Sortable: true },
            { Field: 'LoaiGiuongDisplay', Title: 'Loại giường', Width: 100, Sortable: true },
            { Field: 'MoTa', Title: 'Mô tả', Width: 250, Sortable: true },
            { Field: 'HieuLucHienThi', Title: 'Hiệu lực', Width: 150, Sortable: true }
        ];
        this.gridChildColumns = [
            { Field: 'GiaHienThi', Title: 'Giá', Width: 50, Sortable: true, LinkDetail: false },
            { Field: 'TiLeBaoHiemThanhToan', Title: 'TLTT(%)', Width: 50, Sortable: true },
            { Field: 'TuNgayHienThi', Title: 'Từ ngày', Width: 100, Sortable: true, Dir: 'desc', DefaultSort: true },
            { Field: 'DenNgayHienThi', Title: 'Đến ngày', Width: 100, Sortable: true }
        ];
        this.gridChildColumns2 = [
            { Field: 'LoaiGia', Title: 'Loại Giá', Width: 217, Sortable: true, LinkDetail: false },
            { Field: 'GiaHienThi', Title: 'Giá', Width: 260, Sortable: true },
            { Field: 'TuNgayHienThi', Title: 'Từ ngày', Width: 500, Sortable: true, Dir: 'desc', DefaultSort: true },
            { Field: 'DenNgayHienThi', Title: 'Đến ngày', Width: 500, Sortable: true }
        ];
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('DichVuGiuongBenhVien/ExportDichVuGiuongBenhVien', self.gridDichVuGiuongCha._gridQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DichVuGiuongBenhVien' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
};
DichVuGiuongBenhVienListComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDichVuGiuongCha', { static: false })
], DichVuGiuongBenhVienListComponent.prototype, "gridDichVuGiuongCha", void 0);
DichVuGiuongBenhVienListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-dich-vu-giuong-benh-vien-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dich-vu-giuong-benh-vien-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dich-vu-giuong-benh-vien-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.scss")).default]
    })
], DichVuGiuongBenhVienListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-routing.module.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-routing.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: DichVuGiuongBenhVienRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVienRoutingModule", function() { return DichVuGiuongBenhVienRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dich_vu_giuong_benh_vien_list_dich_vu_giuong_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.ts");
/* harmony import */ var _dich_vu_giuong_benh_vien_create_dich_vu_giuong_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.ts");
/* harmony import */ var _dich_vu_giuong_benh_vien_update_dich_vu_giuong_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");









const routes = [
    {
        path: '',
        component: _dich_vu_giuong_benh_vien_list_dich_vu_giuong_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_3__["DichVuGiuongBenhVienListComponent"],
        data: {
            title: 'Danh Mục Dịch Vụ Giường Tại Bệnh Viện',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucDichVuGiuongTaiBenhVien,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _dich_vu_giuong_benh_vien_create_dich_vu_giuong_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_4__["DichVuGiuongBenhVienCreateComponent"],
        data: {
            title: 'Thêm Dịch Vụ Giường Tại Bệnh Viện',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucDichVuGiuongTaiBenhVien,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _dich_vu_giuong_benh_vien_update_dich_vu_giuong_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_5__["DichVuGiuongBenhVienUpdateComponent"],
        data: {
            title: 'Chỉnh Sửa Dịch Vụ Giường Tại Bệnh Viện',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucDichVuGiuongTaiBenhVien,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    }
];
let DichVuGiuongBenhVienRoutingModule = class DichVuGiuongBenhVienRoutingModule {
};
DichVuGiuongBenhVienRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DichVuGiuongBenhVienRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.scss ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-bottom: 16px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\n.item-parent {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.item-child {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20taGUtdGhvbmcvYmVuaC12aWVuL2RpY2gtdnUtZ2l1b25nLWJlbmgtdmllbi9kaWNoLXZ1LWdpdW9uZy1iZW5oLXZpZW4tc2hhcmVkL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcZGFuaC1tdWNcXG5ob20taGUtdGhvbmdcXGJlbmgtdmllblxcZGljaC12dS1naXVvbmctYmVuaC12aWVuXFxkaWNoLXZ1LWdpdW9uZy1iZW5oLXZpZW4tc2hhcmVkXFxkaWNoLXZ1LWdpdW9uZy1iZW5oLXZpZW4tc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vZGFuaC1tdWMvbmhvbS1oZS10aG9uZy9iZW5oLXZpZW4vZGljaC12dS1naXVvbmctYmVuaC12aWVuL2RpY2gtdnUtZ2l1b25nLWJlbmgtdmllbi1zaGFyZWQvZGljaC12dS1naXVvbmctYmVuaC12aWVuLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vZGFuaC1tdWMvbmhvbS1oZS10aG9uZy9iZW5oLXZpZW4vZGljaC12dS1naXVvbmctYmVuaC12aWVuL2RpY2gtdnUtZ2l1b25nLWJlbmgtdmllbi1zaGFyZWQvZGljaC12dS1naXVvbmctYmVuaC12aWVuLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tcGFyZW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLml0ZW0tY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn0iLCJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLXBhcmVudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5pdGVtLWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: DichVuGiuongBenhVienSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVienSharedComponent", function() { return DichVuGiuongBenhVienSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dich_vu_giuong_benh_vien_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dich-vu-giuong-benh-vien.model */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/delete */ "./node_modules/@iconify/icons-ic/delete.js");
/* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bao_hiem_y_te_dich_vu_giuong_dich_vu_giuong_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.model */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");










let DichVuGiuongBenhVienSharedComponent = class DichVuGiuongBenhVienSharedComponent {
    constructor(route, baseService, apiService, cdr) {
        this.route = route;
        this.baseService = baseService;
        this.apiService = apiService;
        this.cdr = cdr;
        this.dichvuGiuongId = 0;
        this.isCreate = true;
        this.isDisplay = true;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icRemove = _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.queryNoiThucHien = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_9__["LookupQueryInfo"]();
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.dichVuGiuongBenhVien = new _dich_vu_giuong_benh_vien_model__WEBPACK_IMPORTED_MODULE_2__["DichVuGiuongBenhVien"]();
        this.dichVuGiuongBenhVien.DichVuGiuong = new _bao_hiem_y_te_dich_vu_giuong_dich_vu_giuong_model__WEBPACK_IMPORTED_MODULE_7__["DichVuGiuong"]();
        this.giaBenhVien = new _dich_vu_giuong_benh_vien_model__WEBPACK_IMPORTED_MODULE_2__["DichVuGiuongBenhVienGiaBenhViens"]();
        this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBenhViens.push(this.giaBenhVien);
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
            this.isCreate = false;
        }
    }
    // onChange(): void {
    //   this.cdr.detectChanges();
    // }
    getSharedData() {
        return this.dichVuGiuongBenhVien;
    }
    XoaBaoHiem(position) {
        // if(this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems.length>1){
        this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems.splice(position, 1);
        // }
    }
    ThemBaoHiem() {
        const viTriNew = new _dich_vu_giuong_benh_vien_model__WEBPACK_IMPORTED_MODULE_2__["DichVuGiuongBenhVienGiaBaoHiems"]();
        this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems.push(viTriNew);
    }
    XoaBenhVien(position) {
        if (this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBenhViens.length > 1) {
            this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBenhViens.splice(position, 1);
        }
    }
    ThemBenhVien() {
        const viTriNew = new _dich_vu_giuong_benh_vien_model__WEBPACK_IMPORTED_MODULE_2__["DichVuGiuongBenhVienGiaBenhViens"]();
        this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBenhViens.push(viTriNew);
    }
    getById(id) {
        this.baseService.getById(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.dichVuGiuongBenhVien = resultData;
                this.dichvuGiuongId = resultData.DichVuGiuongId;
                if (this.dichVuGiuongBenhVien.DichVuGiuong == null) {
                    this.dichVuGiuongBenhVien.DichVuGiuong = new _bao_hiem_y_te_dich_vu_giuong_dich_vu_giuong_model__WEBPACK_IMPORTED_MODULE_7__["DichVuGiuong"]();
                }
                this.getObjKhoaId(this.dichVuGiuongBenhVien.KhoaPhongIds);
                if (this.queryNoiThucHien.ParameterDependencies != '') {
                    this.noiThucHien.getDataForLookup();
                }
            }
        });
    }
    XuLyAnhXa(event) {
        if (!event) {
            this.dichVuGiuongBenhVien.DichVuGiuongId = null;
            this.dichVuGiuongBenhVien.DichVuGiuong = new _bao_hiem_y_te_dich_vu_giuong_dich_vu_giuong_model__WEBPACK_IMPORTED_MODULE_7__["DichVuGiuong"]();
            this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems = [];
        }
        else {
            this.dichVuGiuongBenhVien.HieuLuc = true;
            // if(this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems == undefined ||
            // this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems == null
            //   || this.dichVuGiuongBenhVien.DichVuGiuongBenhVienGiaBaoHiems.length == 0)
            //   {
            //     this.ThemBaoHiem();
            //   }
        }
    }
    ChonDichVu(event) {
        if (event != undefined && event != null) {
            if (this.id == undefined) {
                this.dichVuGiuongBenhVien.Ten = event.Ten;
                this.dichVuGiuongBenhVien.Ma = event.Ma;
            }
            this.apiService.get('DichVuGiuongBenhVien/GetThongTinDichVuGiuong?dichVuGiuongId=' + event.KeyId).subscribe(resultData => {
                if (resultData !== null && resultData !== undefined) {
                    this.dichVuGiuongBenhVien.DichVuGiuong = resultData;
                }
            }, () => {
            });
        }
        else {
            this.dichVuGiuongBenhVien.DichVuGiuong = new _bao_hiem_y_te_dich_vu_giuong_dich_vu_giuong_model__WEBPACK_IMPORTED_MODULE_7__["DichVuGiuong"]();
        }
    }
    changeKhoa(event) {
        if (event == undefined || event == null || event.length == 0) {
            this.dichVuGiuongBenhVien.NoiThucHienIds = [];
        }
        else {
            const arrNoiThucHienHienTai = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
            const arrNoiThucHienNew = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
            arrNoiThucHienHienTai.forEach((element, index) => {
                const elementObj = JSON.parse(element);
                const indexKhoa = event.findIndex(x => x === elementObj.KhoaId);
                if (indexKhoa === -1) {
                    const indexNoiThucHien = arrNoiThucHienNew.findIndex(x => x === element);
                    arrNoiThucHienNew.splice(indexNoiThucHien, 1);
                }
            });
            this.dichVuGiuongBenhVien.NoiThucHienIds = arrNoiThucHienNew.slice();
        }
        this.getObjKhoaId(event);
    }
    getObjKhoaId(arr) {
        if (arr != undefined && arr != null && arr.length != 0) {
            let objParam = '[';
            arr.forEach(element => {
                objParam += '{\'KhoaId\':' + element + '},';
            });
            objParam += ']';
            this.queryNoiThucHien.ParameterDependencies = objParam;
        }
        else {
            this.queryNoiThucHien.ParameterDependencies = '';
        }
    }
    isItemSelected(dataItem) {
        //this.cdr.detectChanges();
        if (this.dichVuGiuongBenhVien.NoiThucHienIds != undefined && this.dichVuGiuongBenhVien.NoiThucHienIds.length > 0) {
            const currentItemValue = JSON.parse(dataItem.KeyId);
            // if parent
            if (dataItem.KhoaId === null || dataItem.KhoaId === '') {
                const index = this.dichVuGiuongBenhVien.NoiThucHienIds.findIndex(x => x == dataItem.KeyId);
                if (index !== -1) // đang chọn khoa
                 {
                    if (index == this.dichVuGiuongBenhVien.NoiThucHienIds.length - 1) { // nếu vừa chọn khoa
                        // this.dichVuGiuongBenhVien.NoiThucHienIds.forEach((element, index) => {
                        //   let elementObj = JSON.parse(element);
                        //   if (elementObj.PhongId != null && elementObj.PhongId != "" && elementObj.KhoaId === currentItemValue.KhoaId) {
                        //   console.log('============================> parent exists element', elementObj);
                        //     this.dichVuGiuongBenhVien.NoiThucHienIds.splice(index, 1);
                        //   }
                        // });
                        if (this.dichVuGiuongBenhVien.NoiThucHienIds.length > 1) {
                            var arrNoiThucHienTemp = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
                            arrNoiThucHienTemp.forEach(element => {
                                let elementObj = JSON.parse(element);
                                if (elementObj.KhoaId === currentItemValue.KhoaId && elementObj.PhongId != null && elementObj.PhongId != "") {
                                    const indexNoiThucHienXoa = this.dichVuGiuongBenhVien.NoiThucHienIds.findIndex(x => x == element);
                                    if (indexNoiThucHienXoa != -1) {
                                        this.dichVuGiuongBenhVien.NoiThucHienIds.splice(indexNoiThucHienXoa, 1);
                                        this.cdr.detectChanges();
                                    }
                                }
                            });
                        }
                        return true;
                    }
                    else // nếu vừa chọn phòng
                     {
                        let itemCuoiCung = this.dichVuGiuongBenhVien.NoiThucHienIds[this.dichVuGiuongBenhVien.NoiThucHienIds.length - 1];
                        let itemCuoiCungObj = JSON.parse(itemCuoiCung);
                        if (itemCuoiCungObj.PhongId != null && itemCuoiCungObj.PhongId != '' && itemCuoiCungObj.KhoaId == currentItemValue.KhoaId) {
                            let indexParentItemCuoiCung = -1;
                            this.dichVuGiuongBenhVien.NoiThucHienIds.forEach((element, index) => {
                                let itemObj = JSON.parse(element);
                                if ((itemObj.PhongId == null || itemObj.PhongId == '') && itemObj.KhoaId == itemCuoiCungObj.KhoaId && indexParentItemCuoiCung == -1) {
                                    indexParentItemCuoiCung = index;
                                }
                            });
                            if (indexParentItemCuoiCung != -1) // nếu đã chọn khoa trước đó
                             {
                                // gán lại arr
                                var arrItems = dataItem.Items.slice();
                                var arrNoiThucHienDangChon = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
                                arrItems.forEach(element => {
                                    let indexElement = arrNoiThucHienDangChon.findIndex(x => x == element.KeyId);
                                    if (element.KeyId == itemCuoiCung) {
                                        arrNoiThucHienDangChon.splice(indexElement, 1);
                                    }
                                    if (indexElement == -1) {
                                        arrNoiThucHienDangChon.push(element.KeyId);
                                    }
                                });
                                arrNoiThucHienDangChon.splice(indexParentItemCuoiCung, 1);
                                this.dichVuGiuongBenhVien.NoiThucHienIds = arrNoiThucHienDangChon.slice();
                                this.cdr.detectChanges();
                                return false;
                            }
                            else // nếu chưa chọn khoa trước đó
                             {
                                return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
                            }
                        }
                        else {
                            return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
                        }
                    }
                }
                else {
                    return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
                }
            }
            else { // if child
                let indexParent = this.dichVuGiuongBenhVien.NoiThucHienIds.findIndex(item => item == dataItem.KhoaKeyId);
                if (indexParent != -1) {
                    return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => this.checkedValue(item, dataItem.KeyId));
                }
                else {
                    // kiểm tra số lượng phòng thuộc khoa đang chọn, nếu bằng tổng số
                    // phòng thì thêm khoa vào model, xóa tất cả phòng thuộc khoa trong model
                    let count = 0;
                    const arrNoiThucHien = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
                    arrNoiThucHien.forEach(element => {
                        const elementObj = JSON.parse(element);
                        if (elementObj.PhongId != null && elementObj.PhongId != '' && elementObj.KhoaId === dataItem.KhoaId) {
                            count++;
                        }
                    });
                    // nếu số lượng phòng select = tổng phòng trong khoa -> xóa tất cả phòng, thêm khoa vào model
                    if (count == dataItem.CountItems) {
                        let arr = this.dichVuGiuongBenhVien.NoiThucHienIds.slice();
                        let isPush = false;
                        arr.forEach((element, indexPhong) => {
                            const elementObj = JSON.parse(element);
                            if (elementObj.PhongId != null && elementObj.PhongId != '' && elementObj.KhoaId === currentItemValue.KhoaId) {
                                arr.splice(indexPhong, 1);
                                if (!isPush) {
                                    isPush = true;
                                    arr.push(dataItem.KhoaKeyId);
                                }
                            }
                        });
                        this.dichVuGiuongBenhVien.NoiThucHienIds = arr.slice();
                        this.cdr.detectChanges();
                        // this.dichVuGiuongBenhVien.NoiThucHienIds.push(dataItem.KhoaKeyId);
                        return true;
                    }
                    else {
                        return this.dichVuGiuongBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
                    }
                }
            }
        }
    }
    checkedValue(itemInList, currentItem) {
        let itemInListValue = JSON.parse(itemInList);
        let currentItemValue = JSON.parse(currentItem);
        return itemInListValue.KhoaId === currentItemValue.KhoaId;
    }
};
DichVuGiuongBenhVienSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHien', { static: true })
], DichVuGiuongBenhVienSharedComponent.prototype, "noiThucHien", void 0);
DichVuGiuongBenhVienSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-dich-vu-giuong-benh-vien-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dich-vu-giuong-benh-vien-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dich-vu-giuong-benh-vien-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.scss")).default]
    })
], DichVuGiuongBenhVienSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.scss ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kaWNoLXZ1LWdpdW9uZy1iZW5oLXZpZW4vZGljaC12dS1naXVvbmctYmVuaC12aWVuLXVwZGF0ZS9kaWNoLXZ1LWdpdW9uZy1iZW5oLXZpZW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: DichVuGiuongBenhVienUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVienUpdateComponent", function() { return DichVuGiuongBenhVienUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dich_vu_giuong_benh_vien_shared_dich_vu_giuong_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.ts");




let DichVuGiuongBenhVienUpdateComponent = class DichVuGiuongBenhVienUpdateComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien']);
    }
};
DichVuGiuongBenhVienUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_dich_vu_giuong_benh_vien_shared_dich_vu_giuong_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__["DichVuGiuongBenhVienSharedComponent"], { static: true })
], DichVuGiuongBenhVienUpdateComponent.prototype, "shared", void 0);
DichVuGiuongBenhVienUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-dich-vu-giuong-benh-vien-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dich-vu-giuong-benh-vien-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dich-vu-giuong-benh-vien-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.scss")).default]
    })
], DichVuGiuongBenhVienUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien.model.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien.model.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DichVuGiuongBenhVien, DichVuGiuongBenhVienGiaBaoHiems, DichVuGiuongBenhVienGiaBenhViens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVien", function() { return DichVuGiuongBenhVien; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVienGiaBaoHiems", function() { return DichVuGiuongBenhVienGiaBaoHiems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVienGiaBenhViens", function() { return DichVuGiuongBenhVienGiaBenhViens; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DichVuGiuongBenhVien {
    constructor(DichVuGiuongId = null, Ten = null, Ma = null, KhoaPhongIds = [], NoiThucHienIds = [], LoaiGiuong = null, LoaiGiuongText = null, DichVuGiuongModelText = null, MoTa = null, HieuLuc = false, AnhXa = null, DichVuGiuong = null, DichVuGiuongBenhVienGiaBaoHiems = [], DichVuGiuongBenhVienGiaBenhViens = []) {
        this.DichVuGiuongId = DichVuGiuongId;
        this.Ten = Ten;
        this.Ma = Ma;
        this.KhoaPhongIds = KhoaPhongIds;
        this.NoiThucHienIds = NoiThucHienIds;
        this.LoaiGiuong = LoaiGiuong;
        this.LoaiGiuongText = LoaiGiuongText;
        this.DichVuGiuongModelText = DichVuGiuongModelText;
        this.MoTa = MoTa;
        this.HieuLuc = HieuLuc;
        this.AnhXa = AnhXa;
        this.DichVuGiuong = DichVuGiuong;
        this.DichVuGiuongBenhVienGiaBaoHiems = DichVuGiuongBenhVienGiaBaoHiems;
        this.DichVuGiuongBenhVienGiaBenhViens = DichVuGiuongBenhVienGiaBenhViens;
    }
}
class DichVuGiuongBenhVienGiaBaoHiems {
    constructor(DichVuGiuongBenhVienId = 0, Gia = null, TuNgay = null, DenNgay = null, TiLeBaoHiemThanhToan = null) {
        this.DichVuGiuongBenhVienId = DichVuGiuongBenhVienId;
        this.Gia = Gia;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.TiLeBaoHiemThanhToan = TiLeBaoHiemThanhToan;
    }
}
class DichVuGiuongBenhVienGiaBenhViens {
    constructor(NhomGiaDichVuGiuongBenhVienId = null, NhomGiaDichVuGiuongBenhVienText = null, DichVuGiuongBenhVienId = 0, Gia = null, TuNgay = null, DenNgay = null, BaoPhong = null) {
        this.NhomGiaDichVuGiuongBenhVienId = NhomGiaDichVuGiuongBenhVienId;
        this.NhomGiaDichVuGiuongBenhVienText = NhomGiaDichVuGiuongBenhVienText;
        this.DichVuGiuongBenhVienId = DichVuGiuongBenhVienId;
        this.Gia = Gia;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.BaoPhong = BaoPhong;
    }
}


/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien.module.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: DichVuGiuongBenhVienModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVienModule", function() { return DichVuGiuongBenhVienModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _dich_vu_giuong_benh_vien_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dich-vu-giuong-benh-vien.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dich_vu_giuong_benh_vien_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dich-vu-giuong-benh-vien-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-routing.module.ts");
/* harmony import */ var _dich_vu_giuong_benh_vien_list_dich_vu_giuong_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component.ts");
/* harmony import */ var _dich_vu_giuong_benh_vien_create_dich_vu_giuong_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component.ts");
/* harmony import */ var _dich_vu_giuong_benh_vien_update_dich_vu_giuong_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component.ts");
/* harmony import */ var _dich_vu_giuong_benh_vien_shared_dich_vu_giuong_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");























let DichVuGiuongBenhVienModule = class DichVuGiuongBenhVienModule {
};
DichVuGiuongBenhVienModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dich_vu_giuong_benh_vien_list_dich_vu_giuong_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_9__["DichVuGiuongBenhVienListComponent"],
            _dich_vu_giuong_benh_vien_create_dich_vu_giuong_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_10__["DichVuGiuongBenhVienCreateComponent"],
            _dich_vu_giuong_benh_vien_update_dich_vu_giuong_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_11__["DichVuGiuongBenhVienUpdateComponent"],
            _dich_vu_giuong_benh_vien_shared_dich_vu_giuong_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_12__["DichVuGiuongBenhVienSharedComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            _dich_vu_giuong_benh_vien_routing_module__WEBPACK_IMPORTED_MODULE_8__["DichVuGiuongBenhVienRoutingModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__["GridModule"]
        ],
        providers: [
            _dich_vu_giuong_benh_vien_service__WEBPACK_IMPORTED_MODULE_5__["DichVuGiuongBenhVienService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _dich_vu_giuong_benh_vien_service__WEBPACK_IMPORTED_MODULE_5__["DichVuGiuongBenhVienService"] },
        ]
    })
], DichVuGiuongBenhVienModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien.service.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DichVuGiuongBenhVienService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongBenhVienService", function() { return DichVuGiuongBenhVienService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let DichVuGiuongBenhVienService = class DichVuGiuongBenhVienService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'DichVuGiuongBenhVien';
    }
};
DichVuGiuongBenhVienService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DichVuGiuongBenhVienService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DichVuGiuongBenhVienService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-dich-vu-giuong-benh-vien-dich-vu-giuong-benh-vien-module-es2015.js.map