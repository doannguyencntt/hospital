var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-nhan-benh-nhan-benh-nhan-module"], {
        /***/ "./node_modules/@iconify/icons-ic/twotone-cloud-download.js": 
        /*!******************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-cloud-download.js ***!
          \******************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path opacity=\".3\" d=\"M19.21 12.04l-1.53-.11-.3-1.5A5.484 5.484 0 0 0 12 6C9.94 6 8.08 7.14 7.12 8.96l-.5.95-1.07.11A3.99 3.99 0 0 0 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.22-2.86-2.79-2.96zM12 17l-4-4h2.55v-3h2.91v3H16l-4 4z\" fill=\"currentColor\"/><path d=\"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.html": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.html ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[{Title:'Danh Mục',Path:''},\n    {Title:'Nhóm Hệ Thống',Path:''},\n    {Title:'Người Bệnh',Path:''},\n    {Title:'Người Bệnh',Path:'/danh-muc/nhom-he-thong/benh-nhan/benh-nhan', Active : true}]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Người Bệnh</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-benh-nhan-shared></app-benh-nhan-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.html": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.html ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n  <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n    <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n      <div>\n        <vex-breadcrumbs [crumbs]=\"[\n          {Title:'Danh Mục',Path:''}\n          ,{Title:'Nhóm Hệ Thống',Path:''}\n          ,{Title:'Người Bệnh',Path:''}\n          ,{Title:'Người bệnh',Path:'/danh-muc/nhom-he-thong/benh-nhan/benh-nhan', Active: true}\n          ]\">\n        </vex-breadcrumbs>\n      </div>\n    </div>\n  </vex-page-layout-header>\n  <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n    <div class=\"card overflow-auto -mt-15\">\n      <!-- <app-grid baseRoute=\"danh-muc/nhom-he-thong/benh-nhan/benh-nhan\" [gridDataSource]=\"gridDataSource\"\n        [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [checkboxAble]=\"false\" [useActionDefault]=\"true\"\n        [lazyLoadPage]=\"true\"></app-grid> -->\n\n      <app-grid baseRoute=\"/benh-nhan\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n        [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" urlGetData=\"BenhNhan/GetDataForGridAsync\"\n        urlGetTotalPage=\"BenhNhan/GetTotalPageForGridAsync\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n        [checkboxAble]=\"false\">\n        <ng-template #chiTietTemplate let-dataItem>\n          <div class=\"text-center\" kendoTooltip>\n            <a (click)=\"view(dataItem.Id)\">\n              <p kendoTooltip class=\"reverse-ellipsis l\">\n                {{dataItem.HoTen}}</p>\n            </a>\n          </div>\n        </ng-template>\n      </app-grid>\n    </div>\n    <ng-template #headerTemplate>\n      <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n          fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n          <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n          <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n            name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges()\"\n            placeholder=\"Nhập từ khóa...\" />\n        </div>\n        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n          <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n        </button>\n        <span fxFlex></span>\n        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n          title=\"Lọc cột\" type=\"button\">\n          <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n        </button>\n\n        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n          <div *ngFor=\"let column of gridColumns\">\n            <button *ngIf=\"column.Title != ''\"\n              class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n              <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                {{ column.Title }}\n              </mat-checkbox>\n            </button>\n          </div>\n        </mat-menu>\n        \n        <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"XuatExcel()\" kendoTooltip\n          title=\"Xuất Excel\" fxFlex=\"none\">\n          <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n        </button>\n\n        <button (click)=\"add()\" class=\"ml-4 right\" style=\"right: 20px;\" color=\"primary\" fxFlex=\"none\" mat-mini-fab\n          kendoTooltip title=\"Thêm\" type=\"button\">\n          <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n        </button>\n      </div>\n    </ng-template>\n    <ng-template #acTionTemplate let-dataItem>\n      <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n      </button>\n      <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n          <button (click)=\"InTheBenhNhan(dataItem.Id)\" mat-menu-item>\n            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n            <span>Thẻ Người Bệnh</span>\n          </button>\n          <button (click)=\"edit(dataItem.Id)\" mat-menu-item>\n            <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n            <span>Sửa</span>\n          </button>\n          <button (click)=\"delete(dataItem.Id)\" mat-menu-item>\n            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n            <span>Xóa</span>\n          </button>\n        </ng-template>\n      </mat-menu>\n    </ng-template>\n  </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.html": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.html ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" id=\"bodyContent\"\n    style=\"position: relative;\">\n    <button *ngIf=\"!isCreate\" (click)=\"InTheBenhNhanBenhNhan()\" class=\"btn-in-the-bn\" type=\"button\" color=\"primary\"\n        mat-raised-button>\n        In Thẻ Người Bệnh</button>\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin hành chính\n    </h3>\n    <app-textbox id=\"HoTen\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"100\" [required]=\"true\" [(model)]=\"benhNhan.HoTen\"\n        label=\"Họ tên\" [validationerror]=\"'HoTen' | validationerror:validationErrors\"></app-textbox>\n\n\n    <app-datepicker id=\"NgayThangNamSinh\" fxFlex=\"14%\" fxFlex.sm=\"40%\" [(model)]=\"benhNhan.NgayThangNamSinh\"\n        (modelChange)=\"ThongTinBenhNhanNgaySinhChange($event)\" [required]=\"true\" label=\"Ngày sinh\"\n        [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <app-textboxnumeric [(model)]=\"benhNhan.NamSinh\" id=\"Numerictextbox\" fxFlex=\"6%\" fxFlex.sm=\"6%\" label=\"Năm sinh\"\n        format=\"0\" min=\"1\" max=\"9999\" (modelChange)=\"NamSinhChange($event)\"\n        [disabled]=\"benhNhan.NgayThangNamSinh!=null\">\n    </app-textboxnumeric>\n\n    <app-textbox *ngIf=\"under6yearsold\" id=\"SoTuoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số tuổi\" [disabled]=\"true\"\n        [(model)]=\"soTuoiDisplay\">\n    </app-textbox>\n\n    <app-textboxmask id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"benhNhan.SoDienThoai\"\n        label=\"Số điện thoại\" mask=\"000 000 0000\" maxlength=\"12\">\n    </app-textboxmask>\n\n    <app-dropdownlist id=\"GioiTinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Giới tính\" url=\"TiepNhanBenhNhan/GetGioiTinh\"\n        [modelText]=\"benhNhan.GioiTinhDisplay\" [(model)]=\"benhNhan.GioiTinh\"\n        [validationerror]=\"'GioiTinh' | validationerror:validationErrors\">\n    </app-dropdownlist>\n\n    <app-dropdownlist id=\"NhomMau\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"benhNhan.NhomMau\"\n        [modelText]=\"benhNhan.NhomMauText\" label=\"Nhóm máu\" url=\"KhamBenh/GetListNhomMau\"\n        [validationerror]=\"'NhomMau' | validationerror:validationErrors\"></app-dropdownlist>\n\n    <app-combobox id=\"NgheNghiep\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"benhNhan.NgheNghiepId\"\n        [modelText]=\"benhNhan.NgheNghiepText\" label=\"Nghề nghiệp\" url=\"TiepNhanBenhNhan/GetNgheNghiep\"\n        [validationerror]=\"'NgheNghiepId' | validationerror:validationErrors\"></app-combobox>\n\n\n    <app-combobox id=\"GetQuocTich\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quốc tịch\" url=\"TiepNhanBenhNhan/GetQuocTich\"\n        [(model)]=\"benhNhan.QuocTichId\" [modelText]=\"benhNhan.QuocTichText\">\n    </app-combobox>\n\n    <app-combobox id=\"TinhThanhPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" bind=\"true\" (modelChange)=\"TinhThanhPhoChange($event)\"\n        label=\"Tỉnh/Thành Phố\" url=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{benhNhan.QuanHuyenId}}\"\n        hierarchyKeyToSend=\"tinhThanh\" [(model)]=\"benhNhan.TinhThanhId\" class=\"item-no-padding\"\n        [template]=\"tinhThanhTemplate\" [templateHeader]=\"tinhThanhTemplateHeader\">\n        <ng-template #tinhThanhTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #tinhThanhTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-combobox id=\"QuanHuyen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quận/Huyện\"\n        (modelChange)=\"QuanHuyenChange($event)\" url=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{benhNhan.PhuongXaId}}\"\n        hierarchyKeyToListen=\"tinhThanh\" hierarchyKeyToSend=\"quanHuyen\" bind=\"true\" [(model)]=\"benhNhan.QuanHuyenId\"\n        class=\"item-no-padding\" [template]=\"quanHuyenTemplate\" [templateHeader]=\"quanHuyenTemplateHeader\">\n        <ng-template #quanHuyenTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #quanHuyenTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-combobox id=\"PhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Phường/Xã\" url=\"TiepNhanBenhNhan/GetPhuongXa\"\n        hierarchyKeyToListen=\"quanHuyen\" (modelChange)=\"PhuongXaChange($event)\" [(model)]=\"benhNhan.PhuongXaId\"\n        class=\"item-no-padding\" [template]=\"phuongXaTemplate\" [templateHeader]=\"phuongXaTemplateHeader\">\n        <ng-template #phuongXaTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #phuongXaTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-textbox id=\"DiaChi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" label=\"Số nhà/Đường phố\"\n        [(model)]=\"benhNhan.DiaChi\">\n    </app-textbox>\n\n    <app-textbox id=\"SoChungMinhThu\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"benhNhan.SoChungMinhThu\"\n        [validationerror]=\"'GioiTinh' | validationerror:validationErrors\" onlynumber=\"true\" label=\"Số CMND\"\n        maxlength=\"12\">\n    </app-textbox>\n    <app-textbox id=\"Email\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" maxlength=\"200\"\n        [validationerror]=\"'Email' | validationerror:validationErrors\" [(model)]=\"benhNhan.Email\">\n    </app-textbox>\n\n    <app-textbox id=\"NoiLamViec\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"benhNhan.NoiLamViec\" label=\"Nơi làm việc\"\n        maxlength=\"300\" [validationerror]=\"'NoiLamViec' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-combobox bind=\"true\" id=\"DanToc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Dân tộc\" url=\"TiepNhanBenhNhan/GetDanToc\"\n        [reloadForGrid]=\"true\"\n        [(model)]=\"benhNhan.DanTocId\">\n    </app-combobox>\n\n</div>\n<div style=\"height: 30px;\">\n\n</div>\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin người liên hệ\n\n    </h3>\n\n    <app-textbox id=\"NguoiLienHeHoTen\" fxFlex=\"20%\" fxFlex.sm=\"40%\" [(model)]=\"benhNhan.NguoiLienHeHoTen\" label=\"Họ tên\"\n        maxlength=\"100\" [validationerror]=\"'NguoiLienHeHoTen' | validationerror:validationErrors\"></app-textbox>\n\n    <app-combobox id=\"NguoiLienHeQuanHeNhanThanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quan hệ\"\n        [modelText]=\"benhNhan.NguoiLienHeQuanHeNhanThanText\" url=\"TiepNhanBenhNhan/GetQuanHe\"\n        [(model)]=\"benhNhan.NguoiLienHeQuanHeNhanThanId\">\n    </app-combobox>\n\n\n\n    <!-- <app-textbox id=\"NguoiLienHeSoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số điện thoại\" maxlength=\"12\"\n        onlynumber=\"true\" [(model)]=\"benhNhan.NguoiLienHeSoDienThoai\">\n    </app-textbox> -->\n\n    <app-textboxmask id=\"NguoiLienHeSoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số điện thoại\"\n        [(model)]=\"benhNhan.NguoiLienHeSoDienThoai\" mask=\"000 000 0000\" maxlength=\"12\">\n    </app-textboxmask>\n\n\n    <app-textbox id=\"NguoiLienHeEmail\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" maxlength=\"200\"\n        [(model)]=\"benhNhan.NguoiLienHeEmail\" [validationerror]=\"'NguoiLienHeEmail' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <!-- clone code -->\n\n    <app-combobox id=\"NguoiLienHeTinhThanhId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" bind=\"true\"\n        (modelChange)=\"TinhThanhPhoNguoiLienHeChange($event)\" label=\"Tỉnh/Thành Phố\"\n        url=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{benhNhan.QuanHuyenId}}\" hierarchyKeyToSend=\"tinhThanhLienHe\"\n        [(model)]=\"benhNhan.NguoiLienHeTinhThanhId\" bind=\"true\" class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n        [templateHeader]=\"tinhThanhTemplateHeader\">\n        <ng-template #tinhThanhTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #tinhThanhTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-combobox id=\"NguoiLienHeQuanHuyenId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quận/Huyện\"\n        (modelChange)=\"QuanHuyenNguoiLienHeChange($event)\"\n        url=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{benhNhan.PhuongXaId}}\" hierarchyKeyToListen=\"tinhThanhLienHe\"\n        hierarchyKeyToSend=\"quanHuyenLienHe\" bind=\"true\" [(model)]=\"benhNhan.NguoiLienHeQuanHuyenId\"\n        class=\"item-no-padding\" [template]=\"quanHuyenTemplate\" [templateHeader]=\"quanHuyenTemplateHeader\">\n        <ng-template #quanHuyenTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #quanHuyenTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-combobox id=\"NguoiLienHePhuongXaId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Phường/Xã\"\n        url=\"TiepNhanBenhNhan/GetPhuongXa\" hierarchyKeyToListen=\"quanHuyenLienHe\"\n        (modelChange)=\"PhuongXaNguoiLienHeChange($event)\" [(model)]=\"benhNhan.NguoiLienHePhuongXaId\"\n        class=\"item-no-padding\" [template]=\"phuongXaTemplate\" [templateHeader]=\"phuongXaTemplateHeader\">\n        <ng-template #phuongXaTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #phuongXaTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <!-- clone code -->\n\n\n\n\n\n    <app-textbox id=\"NguoiLienHeDiaChi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" label=\"Địa chỉ\"\n        [(model)]=\"benhNhan.NguoiLienHeDiaChi\">\n    </app-textbox>\n</div>\n<div style=\"height: 30px;\">\n\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin bảo hiểm y tế\n        <app-checkbox [(model)]=\"benhNhan.CoBHYT\" id=\"CheckboxIsHaveBHYT\" label=\"Có\"></app-checkbox>\n    </h3>\n    <div fxFlex=\"20%\" fxFlex.sm=\"20%\" style=\"position: relative;\" *ngIf=\"benhNhan.CoBHYT == true\">\n        <app-textbox id=\"SoTheBHYT\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Số thẻ BHYT\" [(model)]=\"benhNhan.BHYTMaSoThe\"\n            [required]=\"true\" (keyup)=\"getThongTinBHYTonKey(true)\" (modelChange)=\"changeSoTheBHYT(benhNhan)\"\n            (blurChange)=\"changeThongTinGetBHYT(benhNhan, isLoadingDataBHYT)\"\n            (keyup)=\"onKeySoTheBHYT($event, benhNhan,isLoadingDataBHYT)\"\n            [validationerror]=\"'BHYTMaSoThe' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" class=\"image-barcode\" mat-mini-fab type=\"button\"\n            kendoTooltip title=\"Lấy thông tin thẻ từ cổng BHYT\">\n            <mat-icon [icIcon]=\"icCloudDownload\"></mat-icon>\n            <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>\n        </button>\n    </div>\n\n    <app-textbox id=\"BHYTMaDKBD\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" label=\"Mã nơi ĐKBH\"\n        [(model)]=\"benhNhan.BHYTMaDKBD\" *ngIf=\"benhNhan.CoBHYT == true\" [disabled]=\"true\">\n    </app-textbox>\n    <app-textbox id=\"BHYTCoQuanBHXH\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" label=\"Nơi ĐKBH\"\n        [(model)]=\"benhNhan.BHYTCoQuanBHXH\" *ngIf=\"benhNhan.CoBHYT == true\" [disabled]=\"true\">\n    </app-textbox>\n\n\n    <app-datepicker id=\"BHYTNgayDu5Nam\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" label=\"Ngày đủ 5 năm\"\n        [(model)]=\"benhNhan.BHYTNgayDu5Nam\" *ngIf=\"benhNhan.CoBHYT == true\" [disabled]=\"true\">\n    </app-datepicker>\n\n    <app-datepicker id=\"BHYTNgayHieuLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" label=\"Ngày có hiệu lực\"\n        [(model)]=\"benhNhan.BHYTNgayHieuLuc\" *ngIf=\"benhNhan.CoBHYT == true\" [disabled]=\"true\">\n    </app-datepicker>\n\n    <app-datepicker id=\"BHYTNgayHetHan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" label=\"Ngày hết hiệu lực\"\n        [(model)]=\"benhNhan.BHYTNgayHetHan\" *ngIf=\"benhNhan.CoBHYT == true\" [disabled]=\"true\">\n    </app-datepicker>\n    <app-textbox id=\"BHYTDiaChi\" fxFlex=\"40%\" fxFlex.sm=\"40%\" maxlength=\"200\" label=\"Địa chỉ\"\n        [(model)]=\"benhNhan.BHYTDiaChi\" *ngIf=\"benhNhan.CoBHYT == true\" [disabled]=\"true\">\n    </app-textbox>\n</div>\n\n\n<!------------------------------------ THÔNG TIN BẢO HIỂM TƯ NHÂN -->\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <h3 style=\"margin-top:10px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Bảo\n        Hiểm Tư Nhân &nbsp;\n        <!-- <app-checkbox id=\"CheckboxIsHaveBHTN\" [(model)]=\"benhNhan.CoBHTN\" label=\"Có\"></app-checkbox> -->\n    </h3>\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"showFormDetailBaoHiemTuNhan\">\n        <button (click)=\"ThemTTBHNDetail()\" type=\"button\" color=\"primary\" mat-raised-button> Thêm Bảo Hiểm Tư\n            Nhân</button>\n    </div>\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"!showFormDetailBaoHiemTuNhan\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\" fxLayout.lt-sm=\"column\" style=\"width: 100%;\">\n            <app-combobox id=\"CongTyBaoHiemTuNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                [(model)]=\"baoHiemTuNhan.CongTyBaoHiemTuNhanId\" label=\"Công ty\"\n                (openCombobox)=\"openComboboxBHTN($event)\" url=\"TiepNhanBenhNhan/GetCongTyBaoHiemTuNhan\" bind=\"true\"\n                (modelChange)=\"congTyBaoHiemChange($event)\" [required]=\"true\" (keyup)=\"onKey($event)\"\n                [validationerror]=\"'CongTyBaoHiemTuNhanId' | validationerror:validationErrorsBHTN\">\n            </app-combobox>\n\n            <app-textbox id=\"MaSoThe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số thẻ\" [(model)]=\"baoHiemTuNhan.MaSoThe\"\n                (keyup)=\"onKey($event)\" maxlength=\"20\">\n            </app-textbox>\n\n            <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Từ ngày\" (keyup)=\"onKey($event)\"\n                [(model)]=\"baoHiemTuNhan.NgayHieuLuc\">\n            </app-datepicker>\n\n            <app-datepicker id=\"NgayHetHan\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Đến ngày\" (keyup)=\"onKey($event)\"\n                [validationerror]=\"'NgayHetHan' | validationerror:validationErrorsBHTN\"\n                [(model)]=\"baoHiemTuNhan.NgayHetHan\">\n            </app-datepicker>\n\n            <!-- <app-textbox id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Điện thoại\" readonly=\"true\" maxlength=\"20\"\n                [(model)]=\"baoHiemTuNhan.SoDienThoai\">\n            </app-textbox> -->\n\n            <app-textboxmask id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số điện thoại\" readonly=\"true\"\n                [(model)]=\"baoHiemTuNhan.SoDienThoai\" maxlength=\"100\">\n            </app-textboxmask>\n\n            <app-textbox id=\"DiaChiTN\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Địa chỉ\" readonly=\"true\" maxlength=\"200\"\n                [(model)]=\"baoHiemTuNhan.DiaChi\">\n            </app-textbox>\n\n            <div style=\"margin-bottom: 20px;\" fxLayoutAlign=\"end right\" fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"mr-4\">\n                <button (click)=\"huyBHTN()\" mat-button class=\"mr-1 px-6 py-0\"><i class=\"ft-arrow-left \"></i>Hủy</button>\n                <button *ngIf=\"isUpdateGrid == false\" (click)=\"themCongTyBHTN()\" color=\"primary\" mat-raised-button\n                    class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Thêm</button>\n                <!-- <button *ngIf=\"isUpdateGrid == true\" (click)=\"SuaBHTN()\" color=\"primary\" mat-raised-button\n                    class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Cập\n                    nhật</button> -->\n            </div>\n        </div>\n    </div>\n\n    <app-grid [gridDataSource]=\"gridDataSourceBHTN\" [gridColumns]=\"gridColumns\" #gridBHTNBenhNhan\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"5\"\n        [autoHeight]=\"true\" [pageable]=\"false\">\n    </app-grid>\n</div>\n\n<ng-template #actionTemplate let-dataItem let-index>\n    <button style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xoaCongTyBHTN(dataItem)\">\n        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n    </button>\n    <!-- <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n        mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n            <button (click)=\"updateGridBHTN(dataItem)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                <span>Sửa</span>\n            </button>\n            <button (click)=\"removeGridBHTN(dataItem.CongTyBaoHiemTuNhanId)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                <span>Xóa</span>\n            </button>\n        </ng-template>\n    </mat-menu> -->\n</ng-template>\n\n<!------------------------------------ TIỀN SỬ BỆNH -->\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <h3 style=\"margin-top:10px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Tiền Sử Bệnh &nbsp;\n        <!-- <app-checkbox id=\"CheckTienSuBenh\" [(model)]=\"benhNhan.CoTienSuBenh\" label=\"Có\"></app-checkbox> -->\n    </h3>\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"showFormDetailTienSuBenh\">\n        <button (click)=\"ThemTienSuBenhDetail()\" type=\"button\" color=\"primary\" mat-raised-button> Thêm Tiền Sử\n            Bệnh</button>\n    </div>\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"!showFormDetailTienSuBenh\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\" fxLayout.lt-sm=\"column\" style=\"width: 100%;\">\n            <app-dropdownlist id=\"LoaiTienSuBenh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Loại Tiền Sử Bệnh\"\n                [required]=\"true\" url=\"BenhNhan/GetLoaiTienSuBenh\" [modelText]=\"tienSuBenh.TenLoaiTienSuBenh\"\n                [(model)]=\"tienSuBenh.LoaiTienSuBenh\" (openDropDownList)=\"openDropDownListTSB($event)\"\n                (keyup)=\"onKey($event)\" [validationerror]=\"'LoaiTienSuBenh' | validationerror:validationErrorsTSB\">\n            </app-dropdownlist>\n\n            <app-textbox id=\"TenBenh\" fxFlex=\"40%\" fxFlex.sm=\"20%\" label=\"Tên Bệnh\" maxlength=\"200\" [required]=\"true\"\n                (keyup)=\"onKey($event)\" [validationerror]=\"'TenBenh' | validationerror:validationErrorsTSB\"\n                [(model)]=\"tienSuBenh.TenBenh\">\n            </app-textbox>\n            <div style=\"margin-bottom: 20px;\" fxLayoutAlign=\"end right\" fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"mr-4\">\n                <button (click)=\"huyTienSuBenh()\" mat-button class=\"mr-1 px-6 py-0\"><i\n                        class=\"ft-arrow-left \"></i>Hủy</button>\n                <button *ngIf=\"isUpdateGridTienSuBenh == false\" (click)=\"themTienSuBenh()\" color=\"primary\"\n                    mat-raised-button class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Thêm</button>\n                <!-- <button *ngIf=\"isUpdateGridTienSuBenh == true\" (click)=\"suaTienSuBenh()\" color=\"primary\"\n                    mat-raised-button class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Cập nhật</button> -->\n            </div>\n        </div>\n    </div>\n    <app-grid [gridDataSource]=\"gridDataSourceTienSuBenh\" [gridColumns]=\"gridColumnsTienSuBenh\" #gridTienSuBenh\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"5\"\n        [autoHeight]=\"true\" [pageable]=\"false\">\n    </app-grid>\n</div>\n\n<ng-template #actionTemplateTienSuBenh let-dataItem let-index>\n    <button style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xoaTienSuBenh(dataItem)\">\n        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n    </button>\n    <!-- <button (click)=\"removeGridTienSuBenh(dataItem)\" mat-menu-item>\n        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n        <span>Xóa</span>\n    </button>\n    <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button\n        type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n            <button (click)=\"updateTienSuBenh(dataItem)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                <span>Sửa</span>\n            </button>\n            <button (click)=\"removeGridTienSuBenh(dataItem)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                <span>Xóa</span>\n            </button>\n        </ng-template>\n    </mat-menu> -->\n</ng-template>\n\n<!------------------------------------ DỊ ỨNG THUỐC -->\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <h3 style=\"margin-top:10px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Dị Ứng&nbsp;\n        <!-- <app-checkbox id=\"CheckDiUngThuoc\" [(model)]=\"benhNhan.CoDiUngThuoc\" label=\"Có\"></app-checkbox> -->\n    </h3>\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"showFormDetailDiUngThuoc\">\n        <button (click)=\"ThemDiUngThuocDetail()\" type=\"button\" color=\"primary\" mat-raised-button> Thêm Dị Ứng</button>\n    </div>\n\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"!showFormDetailDiUngThuoc\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\" fxLayout.lt-sm=\"column\" style=\"width: 100%;\">\n            <app-dropdownlist [(model)]=\"diUngThuoc.LoaiDiUng\" label=\"Loại Dị Ứng\" [modelText]=\"diUngThuoc.TenDiUng\"\n                [template]=\"DiUngTemplate\" [templateHeader]=\"DiUngTemplateHeader\"\n                (openDropDownList)=\"openDropDownListDUT($event)\" (selectionChange)=\"onSelectLoaiDiUng()\"\n                (keyup)=\"onKey($event)\" url=\"KhamBenh/getListLoaiDiUng\" [required]=\"true\" fxFlex=\"20%\"\n                [validationerror]=\"'LoaiDiUng' | validationerror:validationErrorsDUT\" class=\"item-no-padding\">\n                <ng-template #DiUngTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"40%\">Loai Dị Ứng</th>\n                            <th>Tên Dị Ứng</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #DiUngTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"40%\">{{dataItem.KeyId}}</td>\n                            <td>{{dataItem.DisplayName}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n            </app-dropdownlist>\n\n            <app-combobox\n                *ngIf=\"diUngThuoc.LoaiDiUng != undefined && diUngThuoc.LoaiDiUng != null && diUngThuoc.LoaiDiUng == 1\"\n                [(model)]=\"diUngThuoc.ThuocId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [modelText]=\"diUngThuoc.TenThuoc\"\n                label=\"Tên Dị Ứng\" [popupSettings]=\"null\" (selectionChange)=\"onSelectThuoc($event)\"\n                [template]=\"DuocPhamTemplate\" [templateHeader]=\"DuocPhamTemplateHeader\" url=\"KhamBenh/GetListThuoc\"\n                [validationerror]=\"'ThuocId' | validationerror:validationErrorsDUT\" [required]=\"true\"\n                class=\"item-no-padding\">\n                <ng-template #DuocPhamTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"40%\">Mã </th>\n                            <th>Hoạt Chất</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #DuocPhamTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"40%\">{{dataItem.HoatChat}}</td>\n                            <td>{{dataItem.TenThuoc}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n            </app-combobox>\n            <app-textbox *ngIf=\"diUngThuoc.LoaiDiUng !=1\" id=\"TenDiUng\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên Dị Ứng\"\n                (keyup)=\"onKey($event)\" maxlength=\"200\" [required]=\"true\"\n                [validationerror]=\"'TenDiUng' | validationerror:validationErrorsDUT\" [(model)]=\"diUngThuoc.TenDiUng\">\n            </app-textbox>\n\n            <app-textbox id=\"BieuHienDiUng\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Biểu Hiện Dị Ứng\" maxlength=\"200\"\n                [(model)]=\"diUngThuoc.BieuHienDiUng\" (keyup)=\"onKey($event)\" [required]=\"true\"\n                [validationerror]=\"'BieuHienDiUng' | validationerror:validationErrorsDUT\">\n            </app-textbox>\n\n            <app-dropdownlist fxFlex=\"20%\" [(model)]=\"diUngThuoc.MucDo\" [modelText]=\"diUngThuoc.MucDoDisplay\"\n                class=\"item-no-padding\" [popupSettings]=\"null\" url=\"KhamBenh/GetListMucDoDiUng\" [required]=\"true\"\n                [validationerror]=\"'MucDo' | validationerror:validationErrorsDUT\" label=\"Mức độ\">\n            </app-dropdownlist>\n\n            <div style=\"margin-bottom: 20px;\" fxLayoutAlign=\"end right\" fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"mr-4\">\n                <button (click)=\"huyDiUngThuoc()\" mat-button class=\"mr-1 px-6 py-0\"><i\n                        class=\"ft-arrow-left \"></i>Hủy</button>\n                <button *ngIf=\"isUpdateGridDiUngThuoc == false\" (click)=\"ThemDiUngThuoc()\" color=\"primary\"\n                    mat-raised-button class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Thêm</button>\n                <!-- <button *ngIf=\"isUpdateGridDiUngThuoc == true\" (click)=\"suaDiUngThuoc()\" color=\"primary\"\n                    mat-raised-button class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Cập nhật</button> -->\n            </div>\n        </div>\n    </div>\n\n    <app-grid [gridDataSource]=\"gridDataSourceDiUngThuoc\" [gridColumns]=\"gridColumnsDiUngThuoc\" #gridDiUngThuoc\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"5\"\n        [autoHeight]=\"true\" [pageable]=\"false\">\n    </app-grid>\n</div>\n\n<ng-template #actionTemplateDiUngThuoc let-dataItem let-index>\n    <button style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xoaDiUngThuoc(dataItem)\">\n        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n    </button>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.html": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.html ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[{Title:'Danh Mục',Path:''},\n    {Title:'Nhóm Hệ Thống',Path:''},\n    {Title:'Người Bệnh',Path:''},\n    {Title:'Người Bệnh',Path:'/danh-muc/nhom-he-thong/benh-nhan/benh-nhan', Active : true}]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Người Bệnh</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-benh-nhan-shared></app-benh-nhan-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.html": 
        /*!******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.html ***!
          \******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>THẺ NGƯỜI BỆNH</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src|safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In thẻ người bệnh\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/@vex/animations/fade-in-up.animation.ts": 
        /*!*****************************************************!*\
          !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
          \*****************************************************/
        /*! exports provided: fadeInUpAnimation, fadeInUp400ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () { return fadeInUpAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () { return fadeInUp400ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function fadeInUpAnimation(duration) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(20px)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }))
                    ])
                ]);
            }
            var fadeInUp400ms = fadeInUpAnimation(400);
            /***/ 
        }),
        /***/ "./src/@vex/animations/stagger.animation.ts": 
        /*!**************************************************!*\
          !*** ./src/@vex/animations/stagger.animation.ts ***!
          \**************************************************/
        /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () { return staggerAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function () { return stagger80ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function () { return stagger60ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function () { return stagger40ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function () { return stagger20ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function staggerAnimation(timing) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
                    ])
                ]);
            }
            var stagger80ms = staggerAnimation(80);
            var stagger60ms = staggerAnimation(60);
            var stagger40ms = staggerAnimation(40);
            var stagger20ms = staggerAnimation(20);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.scss": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.scss ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtbmhhbi9iZW5oLW5oYW4vYmVuaC1uaGFuLWNyZWF0ZS9iZW5oLW5oYW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: BenhNhanCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanCreateComponent", function () { return BenhNhanCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _benh_nhan_shared_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../benh-nhan-shared/benh-nhan-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var BenhNhanCreateComponent = /** @class */ (function () {
                function BenhNhanCreateComponent(router) {
                    this.router = router;
                }
                BenhNhanCreateComponent.prototype.ngOnInit = function () {
                };
                BenhNhanCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-nhan/benh-nhan']);
                };
                return BenhNhanCreateComponent;
            }());
            BenhNhanCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_benh_nhan_shared_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_4__["BenhNhanSharedComponent"], { static: true })
            ], BenhNhanCreateComponent.prototype, "shared", void 0);
            BenhNhanCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-benh-nhan-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./benh-nhan-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./benh-nhan-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.scss")).default]
                })
            ], BenhNhanCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.scss": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.scss ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtbmhhbi9iZW5oLW5oYW4vYmVuaC1uaGFuLWxpc3QvYmVuaC1uaGFuLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.ts": 
        /*!********************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.ts ***!
          \********************************************************************************************************************/
        /*! exports provided: BenhNhanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanListComponent", function () { return BenhNhanListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _the_benh_nhan_benh_nhan_popup_the_benh_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var BenhNhanListComponent = /** @class */ (function () {
                function BenhNhanListComponent(apiService, authService, router, notificationService, dialog, baseService) {
                    this.apiService = apiService;
                    this.authService = authService;
                    this.router = router;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.baseService = baseService;
                    this.gridColumns = [];
                    this.mySelection = [];
                    this.groups = [{ field: 'MaSoThe' }];
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"];
                }
                BenhNhanListComponent.prototype.ngOnInit = function () {
                    if (window.location.protocol == "http:") {
                        this.hostingName = "http://" + window.location.host;
                    }
                    else {
                        this.hostingName = "https://" + window.location.host;
                    }
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].BenhNhan;
                    this.gridColumns = [
                        { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true, Template: this.chiTietTemplate },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 100, Sortable: true },
                        { Field: "SoChungMinhThu", Title: "Chứng minh thư", Width: 150, Sortable: true },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 100, Sortable: true },
                        { Field: "Email", Title: "Email", Width: 200, Sortable: true },
                        { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 200, Sortable: true },
                        { Field: "Action", Title: "", Width: 50, Template: this.acTionTemplate }
                    ];
                };
                BenhNhanListComponent.prototype.extDetailExpand = function (event) {
                    console.log(event);
                };
                BenhNhanListComponent.prototype.clearSearch = function () {
                    this.searchString = "";
                    this.gridChild.search();
                };
                BenhNhanListComponent.prototype.view = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update)) {
                        this.router.navigate(["/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/chinh-sua/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BenhNhanListComponent.prototype.add = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Add)) {
                        this.router.navigate(["/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/them"]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BenhNhanListComponent.prototype.edit = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update)) {
                        this.router.navigate(["/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/chinh-sua/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BenhNhanListComponent.prototype.delete = function (id) {
                    var _this = this;
                    var self = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].MessConfirm, ["xóa"]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                self.baseService.deleteById(id)
                                    .subscribe(function () {
                                    _this.gridChild.search();
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                }, function (err) {
                                    self.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BenhNhanListComponent.prototype.searchChanges = function () {
                    if (this.searchString == null || this.searchString == "") {
                        this.gridChild.searchString = "";
                        this.gridChild.search();
                    }
                };
                BenhNhanListComponent.prototype.Timkiem = function () {
                    var QueryString = null;
                    this.gridChild._additionalSearchString = null;
                    if (this.searchString != null) {
                        QueryString = this.searchString;
                    }
                    this.gridChild.searchString = QueryString;
                    this.gridChild.search();
                };
                BenhNhanListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.Timkiem();
                    }
                };
                BenhNhanListComponent.prototype.InTheBenhNhan = function (id) {
                    this.dialog
                        .open(_the_benh_nhan_benh_nhan_popup_the_benh_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_21__["TheBenhNhanBenhNhanPopupComponent"], {
                        disableClose: true,
                        width: "480px",
                        data: id,
                    }).afterClosed();
                };
                BenhNhanListComponent.prototype.XuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("BenhNhan/ExportBenhNhan", this.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            //console.log(resultData);
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "BenhNhan" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                    }
                    //window.location.href = environment.api_url + "/BenhNhan/ExportBenhNhan?queryInfo=" + this.gridChild._gridQueryInfo;
                };
                return BenhNhanListComponent;
            }());
            BenhNhanListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialog"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupTemplate', { static: true })
            ], BenhNhanListComponent.prototype, "groupTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('acTionTemplate', { static: true })
            ], BenhNhanListComponent.prototype, "acTionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_18__["GridComponent"], { static: true })
            ], BenhNhanListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"], { static: false })
            ], BenhNhanListComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiTietTemplate', { static: true })
            ], BenhNhanListComponent.prototype, "chiTietTemplate", void 0);
            BenhNhanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-benh-nhan-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./benh-nhan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./benh-nhan-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.scss")).default]
                })
            ], BenhNhanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-routing.module.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-routing.module.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: BenhNhanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanRoutingModule", function () { return BenhNhanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _benh_nhan_list_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./benh-nhan-list/benh-nhan-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.ts");
            /* harmony import */ var _benh_nhan_create_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./benh-nhan-create/benh-nhan-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.ts");
            /* harmony import */ var _benh_nhan_update_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./benh-nhan-update/benh-nhan-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.ts");
            var routes = [
                {
                    path: '',
                    component: _benh_nhan_list_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__["BenhNhanListComponent"],
                    data: {
                        title: 'Danh Mục Người Bệnh',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].BenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _benh_nhan_create_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_7__["BenhNhanCreateComponent"],
                    data: {
                        title: 'Thêm Người Bệnh',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].BenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _benh_nhan_update_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_8__["BenhNhanUpdateComponent"],
                    data: {
                        title: 'Chỉnh Sửa Người Bệnh',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].BenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var BenhNhanRoutingModule = /** @class */ (function () {
                function BenhNhanRoutingModule() {
                }
                return BenhNhanRoutingModule;
            }());
            BenhNhanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BenhNhanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.scss": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.scss ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-in-the-bn {\n  position: absolute;\n  right: 15px;\n  top: -63px;\n  padding: 0 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20taGUtdGhvbmcvYmVuaC1uaGFuL2Jlbmgtbmhhbi9iZW5oLW5oYW4tc2hhcmVkL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcZGFuaC1tdWNcXG5ob20taGUtdGhvbmdcXGJlbmgtbmhhblxcYmVuaC1uaGFuXFxiZW5oLW5oYW4tc2hhcmVkXFxiZW5oLW5oYW4tc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vZGFuaC1tdWMvbmhvbS1oZS10aG9uZy9iZW5oLW5oYW4vYmVuaC1uaGFuL2Jlbmgtbmhhbi1zaGFyZWQvYmVuaC1uaGFuLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20taGUtdGhvbmcvYmVuaC1uaGFuL2Jlbmgtbmhhbi9iZW5oLW5oYW4tc2hhcmVkL2Jlbmgtbmhhbi1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWluLXRoZS1ibiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogLTYzcHg7XG4gIHBhZGRpbmc6IDAgMTZweCAhaW1wb3J0YW50O1xufSIsIi5idG4taW4tdGhlLWJuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAtNjNweDtcbiAgcGFkZGluZzogMCAxNnB4ICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: BenhNhanSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanSharedComponent", function () { return BenhNhanSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../benh-nhan.model */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-cloud-download */ "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
            /* harmony import */ var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _the_benh_nhan_benh_nhan_popup_the_benh_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_modules_main_dieu_tri_noi_tru_tiep_nhan_noi_tru_tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts");
            var BenhNhanSharedComponent = /** @class */ (function () {
                function BenhNhanSharedComponent(route, apiService, intl, dialog, ref, notificationService, authService, router, baseService) {
                    this.route = route;
                    this.apiService = apiService;
                    this.intl = intl;
                    this.dialog = dialog;
                    this.ref = ref;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.baseService = baseService;
                    this.printSession = {};
                    this.isCreate = true;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icCloudDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.benhNhanId = 0;
                    this.isScanF1 = false;
                    this.isLoadingDataBHYT = false;
                    this.IsCheckBHYT = null;
                    this.isSearchQRCodeEnable = true;
                    //=============BẢO HIỂM TƯ NHÂN
                    this.baoHiemTuNhan = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanBaoHiemTuNhanViewModel"]();
                    this.lstBHTN = [];
                    this.gridDataSourceBHTN = {
                        data: [],
                        total: 0
                    };
                    this.gridColumns = [];
                    this.isUpdateGrid = false;
                    this.isIdNeedUpdate = null;
                    this.showFormDetailBaoHiemTuNhan = false;
                    //=============TIỀN SỬ BỆNH
                    this.tienSuBenh = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanTienSuBenhViewModel"]();
                    this.lstTienSuBenh = [];
                    this.gridDataSourceTienSuBenh = {
                        data: [],
                        total: 0
                    };
                    this.gridColumnsTienSuBenh = [];
                    this.tenBenh = null;
                    this.isUpdateGridTienSuBenh = false;
                    this.showFormDetailTienSuBenh = false;
                    //=============DỊ ỨNG THUỐC
                    this.diUngThuoc = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanDiUngThuocViewModel"]();
                    this.lstDiUngThuoc = [];
                    this.gridDataSourceDiUngThuoc = {
                        data: [],
                        total: 0
                    };
                    this.idLoaiDiUng = 0;
                    this.gridColumnsDiUngThuoc = [];
                    this.isUpdateGridDiUngThuoc = false;
                    this.showFormDetailDiUngThuoc = false;
                    this.isSelectBHTN = false;
                    this.isSelectTSB = false;
                    this.isSelectDUT = false;
                    this.under6yearsold = false;
                    this.isSetValue = false;
                    this.isCheckedBHYT = false;
                    this.isActivePopup = false;
                    this.timeout = null;
                    this.dangXuLy = false;
                }
                BenhNhanSharedComponent.prototype.ngOnInit = function () {
                    this.thongTinBenhNhan = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["ThongTinBenhNhan"]();
                    this.benhNhan = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhan"]();
                    this.baoHiemTuNhan = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanBaoHiemTuNhanViewModel"]();
                    this.baoHiemTuNhan.CongTyBHTNIds = new Array();
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_18__["DocumentType"].BenhNhan;
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.benhNhanId = id;
                        this.getById(id);
                        this.isCreate = false;
                    }
                    else {
                        this.benhNhan.CoBHYT = true;
                        this.setDefaultData();
                    }
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 60 },
                        { Field: "CongTyDisplay", Title: "Công ty", Width: 200 },
                        { Field: "MaSoThe", Title: "Số thẻ", Width: 150 },
                        { Field: "NgayHieuLucDisplay", Title: "Từ ngày", Width: 150 },
                        { Field: "NgayHetHanDisplay", Title: "Đến ngày", Width: 150 },
                        { Field: "SoDienThoai", Title: "Điện thoại", Width: 150 },
                        { Field: "DiaChi", Title: "Địa chỉ", minWidth: 150 },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
                    ];
                    this.gridColumnsTienSuBenh = [
                        { Field: "STT", Title: "STT", Width: 60 },
                        { Field: "TenLoaiTienSuBenh", Title: "Loại Tiền Sử Bệnh", Width: 250 },
                        { Field: "TenBenh", Title: "Tên Bệnh", minWidth: 200 },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplateTienSuBenh },
                    ];
                    this.gridColumnsDiUngThuoc = [
                        { Field: "STT", Title: "STT", Width: 60 },
                        { Field: "LoaiDiUngDisplay", Title: "Loại Dị Ứng", Width: 250 },
                        { Field: "TenDiUng", Title: "Tên Dị Ứng", Width: 300 },
                        { Field: "BieuHienDiUng", Title: "Biểu Hiện Dị Ứng", minWidth: 150 },
                        { Field: "MucDoDisplay", Title: "Mức độ", Width: 150 },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplateDiUngThuoc },
                    ];
                };
                BenhNhanSharedComponent.prototype.getSharedData = function () {
                    return this.benhNhan;
                };
                BenhNhanSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update)) {
                        var dialog = self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: "Đang tải dữ liệu..." }
                        });
                        self.baseService.getById(id).subscribe(function (resultData) {
                            self.benhNhan = resultData;
                            if (resultData.NamSinh != null && resultData.ThangSinh != null && resultData.NgaySinh != null) {
                                var ngayThangNamSinh = new Date(resultData.NgayThangNamSinh);
                                _this.getAge(ngayThangNamSinh, new Date);
                            }
                            if (self.benhNhan.BenhNhanTienSuBenhs != []) {
                                self.lstTienSuBenh = new Array();
                                self.lstTienSuBenh = self.benhNhan.BenhNhanTienSuBenhs;
                                self.gridDataSourceTienSuBenh.data = self.benhNhan.BenhNhanTienSuBenhs;
                                var indexs_1 = 1;
                                self.gridDataSourceTienSuBenh.data.forEach(function (obj) {
                                    obj.STT = indexs_1;
                                    indexs_1++;
                                });
                                self.setValueForGridTienSuBenh();
                            }
                            if (self.benhNhan.BenhNhanDiUngThuocs != []) {
                                self.lstDiUngThuoc = new Array();
                                self.lstDiUngThuoc = self.benhNhan.BenhNhanDiUngThuocs;
                                console.log("self.lstDiUngThuoc: ", self.lstDiUngThuoc);
                                self.gridDataSourceDiUngThuoc.data = self.benhNhan.BenhNhanDiUngThuocs;
                                var indexs_2 = 1;
                                self.gridDataSourceDiUngThuoc.data.forEach(function (obj) {
                                    obj.STT = indexs_2;
                                    indexs_2++;
                                });
                                self.setValueForGridDiUngThuoc();
                            }
                            if (self.benhNhan.BenhNhanCongTyBaoHiemTuNhans != []) {
                                self.lstBHTN = new Array();
                                self.lstBHTN = self.benhNhan.BenhNhanCongTyBaoHiemTuNhans;
                                self.gridDataSourceBHTN.data = self.benhNhan.BenhNhanCongTyBaoHiemTuNhans;
                                var index2_1 = 1;
                                self.gridDataSourceBHTN.data.forEach(function (obj) {
                                    obj.STT = index2_1;
                                    index2_1++;
                                });
                                self.setValueForGridCongTyBHTN();
                            }
                            dialog.close();
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            dialog.close();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                // Người bệnh
                BenhNhanSharedComponent.prototype.DaysInMonth = function (date2_UTC) {
                    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
                    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
                    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
                    return monthLength;
                };
                BenhNhanSharedComponent.prototype.getAge = function (date_1, date_2) {
                    date_1 = new Date(date_1);
                    date_2 = new Date(date_2);
                    // }
                    //convert to UTC
                    var date2_UTC = new Date(Date.UTC(date_2.getFullYear(), date_2.getMonth(), date_2.getDate()));
                    var date1_UTC = new Date(Date.UTC(date_1.getFullYear(), date_1.getMonth(), date_1.getDate()));
                    var yAppendix, mAppendix, dAppendix;
                    //--------------------------------------------------------------
                    var days = date2_UTC.getDate() - date1_UTC.getDate();
                    if (days < 0) {
                        date2_UTC.setMonth(date2_UTC.getMonth() - 1);
                        days += this.DaysInMonth(date2_UTC);
                    }
                    //--------------------------------------------------------------
                    var months = date2_UTC.getMonth() - date1_UTC.getMonth();
                    if (months < 0) {
                        date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
                        months += 12;
                    }
                    //--------------------------------------------------------------
                    var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();
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
                    }
                    else {
                        this.under6yearsold = false;
                    }
                    this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
                    //console.log(years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix);
                };
                BenhNhanSharedComponent.prototype.TinhThanhPhoChange = function (event) {
                    this.benhNhan.QuanHuyenId = null;
                    this.benhNhan.PhuongXaId = null;
                };
                BenhNhanSharedComponent.prototype.QuanHuyenChange = function (event) {
                    this.benhNhan.QuanHuyenId = event;
                    this.benhNhan.PhuongXaId = null;
                };
                BenhNhanSharedComponent.prototype.PhuongXaChange = function (event) {
                    var _this = this;
                    if (event != null && event != undefined) {
                        this.apiService.post("benhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(function (resultData) {
                            _this.benhNhan.TinhThanhId = resultData.TinhThanhId;
                            _this.benhNhan.QuanHuyenId = resultData.QuanHuyenId;
                        }, function (err) {
                        });
                    }
                    else {
                        this.benhNhan.TinhThanhId = null;
                        this.benhNhan.QuanHuyenId = null;
                    }
                };
                BenhNhanSharedComponent.prototype.TinhThanhPhoNguoiLienHeChange = function (event) {
                    this.benhNhan.NguoiLienHeQuanHuyenId = null;
                    this.benhNhan.NguoiLienHePhuongXaId = null;
                };
                BenhNhanSharedComponent.prototype.QuanHuyenNguoiLienHeChange = function (event) {
                    this.benhNhan.NguoiLienHeQuanHuyenId = event;
                    this.benhNhan.NguoiLienHePhuongXaId = null;
                };
                BenhNhanSharedComponent.prototype.PhuongXaNguoiLienHeChange = function (event) {
                    var _this = this;
                    if (event != null && event != undefined) {
                        this.apiService.post("benhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(function (resultData) {
                            _this.benhNhan.NguoiLienHeTinhThanhId = resultData.TinhThanhId;
                            _this.benhNhan.NguoiLienHeQuanHuyenId = resultData.QuanHuyenId;
                        }, function (err) {
                        });
                    }
                    else {
                        this.benhNhan.NguoiLienHeTinhThanhId = null;
                        this.benhNhan.NguoiLienHeQuanHuyenId = null;
                    }
                };
                BenhNhanSharedComponent.prototype.ThongTinBenhNhanMaSoTHeChange = function ($event) {
                    if (this.maSoTheDaTimKiem == $event && this.ngaySinhDaTimKiem == this.benhNhan.NgayThangNamSinh
                        && this.hoTenDaTimKiem == this.benhNhan.HoTen) {
                        this.isSearchQRCodeEnable = false;
                    }
                    else {
                        this.isSearchQRCodeEnable = true;
                    }
                };
                BenhNhanSharedComponent.prototype.ThongTinBenhNhanNgaySinhChange = function ($event) {
                    if (this.hoTenDaTimKiem == this.benhNhan.HoTen && this.ngaySinhDaTimKiem == $event
                        && this.maSoTheDaTimKiem == this.benhNhan.BHYTMaSoThe) {
                        this.isSearchQRCodeEnable = false;
                    }
                    else {
                        this.isSearchQRCodeEnable = true;
                    }
                    if (this.benhNhan.NgayThangNamSinh != null) {
                        this.benhNhan.NamSinh = this.benhNhan.NgayThangNamSinh.getFullYear();
                    }
                };
                BenhNhanSharedComponent.prototype.setDefaultData = function () {
                    this.isSearchQRCodeEnable = true;
                    this.hoTenDaTimKiem = null;
                    this.maSoTheDaTimKiem = null;
                    this.ngaySinhDaTimKiem = null;
                    // this.soPhanTramHuongBHYT = null;
                };
                BenhNhanSharedComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        if (this.isSelectBHTN != true) {
                            this.themCongTyBHTN();
                        }
                        else {
                            this.isSelectBHTN = false;
                        }
                        if (this.isSelectTSB != true) {
                            this.themTienSuBenh();
                        }
                        else {
                            this.isSelectTSB = false;
                        }
                        if (this.isSelectDUT != true) {
                            this.ThemDiUngThuoc();
                        }
                        else {
                            this.isSelectDUT = false;
                        }
                    }
                };
                BenhNhanSharedComponent.prototype.setValueBHYT = function (model) {
                    //console.log("setValueBHYT = ", model, this.isSetValue);
                    if (model != null && model.maSoBHXH == null && this.isSetValue == false && model != undefined || this.isActivePopup == true)
                        return;
                    this.isSetValue = true;
                    this.benhNhan.BHYTMaSoThe = model.maThe;
                    this.benhNhan.BHYTDiaChi = model.diaChi;
                    this.benhNhan.BHYTMaDKBD = model.maDKBD;
                    var dateParts2 = model.gtTheTu.split("/");
                    this.benhNhan.BHYTNgayHieuLuc = new Date(+dateParts2[2], +dateParts2[1] - 1, +dateParts2[0]);
                    if (model.gtTheDen != undefined && model.gtTheDen != null) {
                        var dateParts3 = model.gtTheDen.split("/");
                        this.benhNhan.BHYTNgayHetHan = new Date(+dateParts3[2], +dateParts3[1] - 1, +dateParts3[0]);
                    }
                    this.benhNhan.BHYTCoQuanBHXH = model.cqBHXH;
                    if (model.ngayDu5Nam != null && model.ngayDu5Nam != undefined && model.ngayDu5Nam != "") {
                        var dateParts4 = model.ngayDu5Nam.split("/");
                        this.benhNhan.BHYTNgayDu5Nam = new Date(+dateParts4[2], +dateParts4[1] - 1, +dateParts4[0]);
                    }
                    this.getAge(this.benhNhan.NgayThangNamSinh, new Date);
                    this.hoTenDaTimKiem = model.hoTen;
                    this.maSoTheDaTimKiem = model.maThe;
                    this.ngaySinhDaTimKiem = this.benhNhan.NgayThangNamSinh;
                    this.isSetValue = false;
                };
                BenhNhanSharedComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                BenhNhanSharedComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                BenhNhanSharedComponent.prototype.clearThongTinTheBHYT = function (benhNhan) {
                    benhNhan.BHYTMaSoThe = null;
                    benhNhan.BHYTDiaChi = null;
                    benhNhan.BHYTMaDKBD = null;
                    benhNhan.BHYTCoQuanBHXH = null;
                    benhNhan.BHYTNgayHieuLuc = null;
                    benhNhan.BHYTNgayHetHan = null;
                    benhNhan.BHYTNgayDu5Nam = null;
                };
                BenhNhanSharedComponent.prototype.setNoiDKBD = function (benhNhan) {
                    this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + benhNhan.MaDKBD).subscribe(function (resultData) {
                        benhNhan.NoiDangKyBHYT = resultData;
                    }, function () {
                    });
                };
                BenhNhanSharedComponent.prototype.changeThongTinGetBHYT = function (benhNhan, isLoadingDataBHYT) {
                    var self = this;
                    if (!isLoadingDataBHYT && benhNhan.IsChange) {
                        self.isLoadingDataBHYT = true;
                        benhNhan.IsCheckedBHYT = null;
                        clearTimeout(self.timeout);
                        self.timeout = setTimeout(function () {
                            self.getThongTinTheBHYT(benhNhan);
                        }, 1000);
                    }
                };
                BenhNhanSharedComponent.prototype.onKeySoTheBHYT = function (event, benhNhan, isLoadingDataBHYT) {
                    if (event.keyCode == 13) {
                        this.changeThongTinGetBHYT(benhNhan, isLoadingDataBHYT);
                    }
                };
                BenhNhanSharedComponent.prototype.changeSoTheBHYT = function (theBHYT) {
                    if (!this.benhNhan.TuNhap) {
                        theBHYT.IsChange = true;
                    }
                };
                BenhNhanSharedComponent.prototype.getThongTinTheBHYT = function (benhNhan) {
                    var _this = this;
                    if (benhNhan.BHYTMaSoThe
                        && this.benhNhan.HoTen
                        && (this.benhNhan.NamSinh != null || this.benhNhan.NgayThangNamSinh != null)
                        && !this.benhNhan.TuNhap) {
                        this.showPopupLoadingData();
                        var thongTinBenhNhan = new src_app_modules_main_dieu_tri_noi_tru_tiep_nhan_noi_tru_tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_20__["ThongTinBenhNhanTimKiemBHYT"](benhNhan.BHYTMaSoThe, this.benhNhan.HoTen, this.benhNhan.NgayThangNamSinh, null, this.benhNhan.NamSinh);
                        this.apiService
                            .post("BHYT/GetLichSuKhamChuaBenh", thongTinBenhNhan)
                            .subscribe(function (resultData) {
                            if (resultData == null || (resultData != null && resultData.maKetQua == "050")) {
                                _this.notificationService.showError('Thẻ BHYT này không tồn tại');
                                _this.clearThongTinTheBHYT(benhNhan);
                                _this.isLoadingDataBHYT = false;
                            }
                            else {
                                benhNhan.BHYTMaDKBD = resultData.maDKBD;
                                benhNhan.BHYTDiaChi = resultData.diaChi;
                                benhNhan.BHYTCoQuanBHXH = resultData.cqBHXH;
                                benhNhan.BHYTNgayHieuLuc = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].FormatDateStringToDate(resultData.gtTheTu);
                                benhNhan.BHYTNgayHetHan = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].FormatDateStringToDate(resultData.gtTheDen);
                                benhNhan.BHYTNgayDu5Nam = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].FormatDateStringToDate(resultData.ngayDu5Nam);
                                if (benhNhan.BHYTMaDKBD != null && benhNhan.BHYTMaDKBD != "") {
                                    _this.setNoiDKBD(benhNhan);
                                }
                                _this.isLoadingDataBHYT = false;
                                _this.closePopupLoadingData();
                            }
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.clearThongTinTheBHYT(benhNhan);
                            _this.isLoadingDataBHYT = false;
                            _this.closePopupLoadingData();
                        });
                    }
                    else {
                        this.isLoadingDataBHYT = false;
                    }
                };
                BenhNhanSharedComponent.prototype.changeQR = function ($event) {
                    if ($event != null) {
                        this.modelQRCode = $event;
                        this.setValueBHYT(this.modelQRCode);
                    }
                    else {
                    }
                    this.isScanF1 = false;
                };
                BenhNhanSharedComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById('barcodeActive');
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                        this.isScanF1 = true;
                    }
                };
                BenhNhanSharedComponent.prototype.inputQrCode = function (qrCode) {
                    var _this = this;
                    //console.log("qrCode:", qrCode)
                    this.apiService.post("BHYT/GetInfoFromURL/?model=" + qrCode).subscribe(function (resultData) {
                        if (resultData != undefined) {
                            _this.setValueBHYT(resultData);
                            //console.log("data trả về BHYT:", resultData)
                        }
                    }, function () {
                    });
                };
                BenhNhanSharedComponent.prototype.getThongTinBHYTonKey = function (isSoTheBHYT) {
                    if (isSoTheBHYT == true && this.benhNhan.BHYTMaSoThe != null
                        && this.benhNhan.BHYTMaSoThe.includes("$")) {
                        this.inputQrCode(this.benhNhan.BHYTMaSoThe);
                    }
                };
                BenhNhanSharedComponent.prototype.congTyBaoHiemChange = function (event) {
                    var _this = this;
                    if (event != undefined && event != null) {
                        this.validationErrors = null;
                        this.apiService.post("benhNhan/GetThongTinBHTN/?congTyBaoHiemTuNhanId=" + event).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.baoHiemTuNhan.DiaChi = resultData.DiaChi;
                                _this.baoHiemTuNhan.SoDienThoai = resultData.SoDienThoai;
                            }
                            else {
                                _this.baoHiemTuNhan.DiaChi = null;
                                _this.baoHiemTuNhan.SoDienThoai = null;
                            }
                        }, function () {
                            _this.baoHiemTuNhan.DiaChi = null;
                            _this.baoHiemTuNhan.SoDienThoai = null;
                        });
                    }
                    else {
                        this.baoHiemTuNhan.DiaChi = null;
                        this.baoHiemTuNhan.SoDienThoai = null;
                    }
                };
                //=====================THÔNG TIN BẢO HIỂM TƯ NHÂN
                BenhNhanSharedComponent.prototype.ThemTTBHNDetail = function () {
                    this.baoHiemTuNhan = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanBaoHiemTuNhanViewModel"]();
                    this.showFormDetailBaoHiemTuNhan = !this.showFormDetailBaoHiemTuNhan;
                    this.showFormDetailTienSuBenh = false;
                    this.showFormDetailDiUngThuoc = false;
                    if (this.validationErrorsBHTN == undefined) {
                        this.validationErrorsBHTN = [];
                    }
                    else {
                        if (this.validationErrorsBHTN != null && this.validationErrorsBHTN.length != 0) {
                            this.validationErrorsBHTN = [];
                        }
                    }
                };
                BenhNhanSharedComponent.prototype.enableUpdateGird = function (id) {
                    this.isUpdateGrid = true;
                    this.isIdNeedUpdate = id;
                };
                BenhNhanSharedComponent.prototype.updateGridBHTN = function (dataItem) {
                    this.isUpdateGrid = true;
                    this.showFormDetailBaoHiemTuNhan = true;
                    //set
                    this.baoHiemTuNhan.CongTyBaoHiemTuNhanId = dataItem.CongTyBaoHiemTuNhanId;
                    this.baoHiemTuNhan.DiaChi = dataItem.DiaChi;
                    this.baoHiemTuNhan.MaSoThe = dataItem.MaSoThe;
                    this.baoHiemTuNhan.NgayHetHan = dataItem.NgayHetHan;
                    this.baoHiemTuNhan.NgayHieuLuc = dataItem.NgayHieuLuc;
                    this.baoHiemTuNhan.SoDienThoai = dataItem.SoDienThoai;
                    //this.themBaoHiemTuNhanModel.STT = dataItem.STT; 
                    this.enableUpdateGird(this.baoHiemTuNhan.CongTyBaoHiemTuNhanId);
                };
                BenhNhanSharedComponent.prototype.clearThemBHTN = function () {
                    this.showFormDetailBaoHiemTuNhan = false;
                    this.baoHiemTuNhan = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanBaoHiemTuNhanViewModel"]();
                };
                BenhNhanSharedComponent.prototype.huyBHTN = function () {
                    this.validationErrorsBHTN = null;
                    this.isUpdateGrid = false;
                    this.clearThemBHTN();
                };
                BenhNhanSharedComponent.prototype.getArrayCongTyBHTNId = function () {
                    var _this = this;
                    this.baoHiemTuNhan.CongTyBHTNIds = new Array();
                    this.lstBHTN.forEach(function (element) {
                        var congTyBHTNId = element.CongTyBaoHiemTuNhanId;
                        _this.baoHiemTuNhan.CongTyBHTNIds.push(congTyBHTNId);
                    });
                };
                BenhNhanSharedComponent.prototype.themCongTyBHTN = function () {
                    if (this.dangXuLy)
                        return;
                    this.dangXuLy = true;
                    var self = this;
                    this.getArrayCongTyBHTNId();
                    self.baoHiemTuNhan.BenhNhanId = self.benhNhanId;
                    self.validationErrorsBHTN = [];
                    self.ref.detectChanges();
                    self.apiService.post("BenhNhan/ThemBHTN", self.baoHiemTuNhan).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            self.lstBHTN.push(resultData);
                            self.setValueForGridCongTyBHTN();
                            self.huyBHTN();
                        }
                        self.dangXuLy = false;
                    }, function (err) {
                        self.validationErrorsBHTN = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.dangXuLy = false;
                    });
                };
                BenhNhanSharedComponent.prototype.xoaCongTyBHTN = function (dataItem) {
                    this.lstBHTN.splice(this.lstBHTN.findIndex(function (x) { return x == dataItem; }), 1);
                    this.validationErrorsBHTN = [];
                    this.setValueForGridCongTyBHTN();
                };
                BenhNhanSharedComponent.prototype.setValueForGridCongTyBHTN = function () {
                    this.gridDataSourceBHTN = {
                        data: this.lstBHTN,
                        total: this.lstBHTN.length
                    };
                    var STT = 1;
                    this.lstBHTN.forEach(function (element) {
                        element.STT = STT;
                        STT++;
                    });
                    this.gridChildBHTN.gridDataSource = this.gridDataSourceBHTN;
                    this.gridChildBHTN.setDataSource();
                    this.pushDataCongTyBHTN();
                };
                BenhNhanSharedComponent.prototype.pushDataCongTyBHTN = function () {
                    var _this = this;
                    this.benhNhan.BenhNhanCongTyBaoHiemTuNhans = new Array();
                    this.lstBHTN.forEach(function (obj) {
                        var model = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanBaoHiemTuNhanViewModel"]();
                        model.BenhNhanId = obj.BenhNhanId;
                        model.CongTyBaoHiemTuNhanId = obj.CongTyBaoHiemTuNhanId;
                        model.MaSoThe = obj.MaSoThe;
                        model.DiaChi = obj.DiaChi;
                        model.SoDienThoai = obj.SoDienThoai;
                        model.NgayHieuLuc = obj.NgayHieuLuc;
                        model.NgayHetHan = obj.NgayHetHan;
                        _this.benhNhan.BenhNhanCongTyBaoHiemTuNhans.push(model);
                    });
                };
                //=====================TIỀN SỬ BỆNH
                BenhNhanSharedComponent.prototype.ThemTienSuBenhDetail = function () {
                    this.tienSuBenh = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanTienSuBenhViewModel"]();
                    this.showFormDetailTienSuBenh = !this.showFormDetailTienSuBenh;
                    this.showFormDetailBaoHiemTuNhan = false;
                    this.showFormDetailDiUngThuoc = false;
                    if (this.validationErrorsTSB == undefined) {
                        this.validationErrorsTSB = [];
                    }
                    else {
                        if (this.validationErrorsTSB != null && this.validationErrorsTSB.length != 0) {
                            this.validationErrorsTSB = [];
                        }
                    }
                };
                BenhNhanSharedComponent.prototype.clearThemTienSuBenh = function () {
                    this.showFormDetailTienSuBenh = false;
                    this.tienSuBenh = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanTienSuBenhViewModel"]();
                };
                BenhNhanSharedComponent.prototype.huyTienSuBenh = function () {
                    this.validationErrorsTSB = null;
                    this.isUpdateGridTienSuBenh = false;
                    this.clearThemTienSuBenh();
                };
                BenhNhanSharedComponent.prototype.getArrayTenTienSuBenh = function () {
                    var _this = this;
                    this.tienSuBenh.TenTienSuBenhs = new Array();
                    this.lstTienSuBenh.forEach(function (element) {
                        var model = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanTienSuBenhChiTiet"]();
                        model.LoaiTienSuBenh = element.LoaiTienSuBenh;
                        model.TenBenh = element.TenBenh;
                        _this.tienSuBenh.TenTienSuBenhs.push(model);
                    });
                };
                BenhNhanSharedComponent.prototype.themTienSuBenh = function () {
                    var self = this;
                    self.tienSuBenh.BenhNhanId = self.benhNhanId;
                    self.getArrayTenTienSuBenh();
                    self.validationErrorsTSB = [];
                    self.ref.detectChanges();
                    self.apiService.post("BenhNhan/ThemTienSuBenh", self.tienSuBenh).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            self.lstTienSuBenh.push(resultData);
                            self.setValueForGridTienSuBenh();
                            self.clearThemTienSuBenh();
                        }
                    }, function (err) {
                        self.validationErrorsTSB = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                BenhNhanSharedComponent.prototype.xoaTienSuBenh = function (dataItem) {
                    this.lstTienSuBenh.splice(this.lstTienSuBenh.findIndex(function (x) { return x == dataItem; }), 1);
                    this.validationErrorsTSB = [];
                    this.setValueForGridTienSuBenh();
                };
                BenhNhanSharedComponent.prototype.setValueForGridTienSuBenh = function () {
                    this.gridDataSourceTienSuBenh = {
                        data: this.lstTienSuBenh,
                        total: this.lstTienSuBenh.length
                    };
                    var STT = 1;
                    this.lstTienSuBenh.forEach(function (element) {
                        element.STT = STT;
                        STT++;
                    });
                    this.gridTienSuBenh.gridDataSource = this.gridDataSourceTienSuBenh;
                    this.gridTienSuBenh.setDataSource();
                    this.pushDataTienSuBenh();
                };
                BenhNhanSharedComponent.prototype.pushDataTienSuBenh = function () {
                    var _this = this;
                    this.benhNhan.BenhNhanTienSuBenhs = new Array();
                    this.lstTienSuBenh.forEach(function (obj) {
                        var model = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanTienSuBenhViewModel"]();
                        model.BenhNhanId = obj.BenhNhanId;
                        model.TenBenh = obj.TenBenh;
                        model.LoaiTienSuBenh = obj.LoaiTienSuBenh;
                        model.TenLoaiTienSuBenh = obj.TenLoaiTienSuBenh;
                        _this.benhNhan.BenhNhanTienSuBenhs.push(model);
                    });
                };
                //=====================DỊ ỨNG THUỐC
                BenhNhanSharedComponent.prototype.ThemDiUngThuocDetail = function () {
                    this.showFormDetailTienSuBenh = false;
                    this.showFormDetailBaoHiemTuNhan = false;
                    this.showFormDetailDiUngThuoc = !this.showFormDetailDiUngThuoc;
                    if (this.validationErrorsDUT == undefined) {
                        this.validationErrorsDUT = [];
                    }
                    else {
                        if (this.validationErrorsDUT != null && this.validationErrorsDUT.length != 0) {
                            this.validationErrorsDUT = [];
                        }
                    }
                };
                BenhNhanSharedComponent.prototype.clearThemDiUngThuoc = function () {
                    this.showFormDetailDiUngThuoc = false;
                    this.diUngThuoc = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanDiUngThuocViewModel"]();
                };
                BenhNhanSharedComponent.prototype.huyDiUngThuoc = function () {
                    this.validationErrorsDUT = null;
                    this.isUpdateGridDiUngThuoc = false;
                    this.clearThemDiUngThuoc();
                };
                BenhNhanSharedComponent.prototype.getArrayDiUngThuoc = function () {
                    var _this = this;
                    this.diUngThuoc.TenDiUngThuocs = new Array();
                    this.lstDiUngThuoc.forEach(function (element) {
                        var model = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanDiUngThuocChiTiet"]();
                        model.LoaiDiUng = element.LoaiDiUng;
                        model.TenDiUng = element.TenDiUng;
                        model.ThuocId = element.ThuocId;
                        _this.diUngThuoc.TenDiUngThuocs.push(model);
                    });
                    console.log("this.lstDiUngThuoc: ", this.lstDiUngThuoc);
                    console.log("this.diUngThuoc.TenDiUngThuocs: ", this.diUngThuoc.TenDiUngThuocs);
                };
                BenhNhanSharedComponent.prototype.ThemDiUngThuoc = function () {
                    var self = this;
                    self.diUngThuoc.BenhNhanId = self.benhNhanId;
                    self.getArrayDiUngThuoc();
                    self.validationErrorsDUT = [];
                    self.ref.detectChanges();
                    self.diUngThuoc.TenDiUng = self.tenDiUng;
                    self.apiService.post("BenhNhan/ThemDiUngThuoc", self.diUngThuoc).subscribe(function (resultData) {
                        self.tenDiUng = null;
                        if (resultData != undefined && resultData != null) {
                            self.lstDiUngThuoc.push(resultData);
                            self.setValueForGridDiUngThuoc();
                            self.clearThemDiUngThuoc();
                        }
                    }, function (err) {
                        self.validationErrorsDUT = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                BenhNhanSharedComponent.prototype.xoaDiUngThuoc = function (dataItem) {
                    this.lstDiUngThuoc.splice(this.lstDiUngThuoc.findIndex(function (x) { return x == dataItem; }), 1);
                    this.validationErrorsDUT = [];
                    this.setValueForGridDiUngThuoc();
                };
                BenhNhanSharedComponent.prototype.setValueForGridDiUngThuoc = function () {
                    this.gridDataSourceDiUngThuoc = {
                        data: this.lstDiUngThuoc,
                        total: this.lstDiUngThuoc.length
                    };
                    var STT = 1;
                    this.lstDiUngThuoc.forEach(function (element) {
                        element.STT = STT;
                        STT++;
                    });
                    this.gridDiUngThuoc.gridDataSource = this.gridDataSourceDiUngThuoc;
                    this.gridDiUngThuoc.setDataSource();
                    this.pushDataDiUngThuoc();
                };
                BenhNhanSharedComponent.prototype.pushDataDiUngThuoc = function () {
                    var _this = this;
                    this.benhNhan.BenhNhanDiUngThuocs = new Array();
                    this.lstDiUngThuoc.forEach(function (obj) {
                        var model = new _benh_nhan_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanDiUngThuocViewModel"]();
                        model.BenhNhanId = obj.BenhNhanId;
                        model.TenDiUng = obj.TenDiUng;
                        model.LoaiDiUng = obj.LoaiDiUng;
                        model.BieuHienDiUng = obj.BieuHienDiUng;
                        model.MucDo = obj.MucDo;
                        _this.benhNhan.BenhNhanDiUngThuocs.push(model);
                    });
                };
                // ----------------
                BenhNhanSharedComponent.prototype.onSelectLoaiDiUng = function () {
                    this.validationErrorsDUT = [];
                    this.diUngThuoc.ThuocId = null;
                    this.diUngThuoc.TenDiUng = null;
                    this.diUngThuoc.BieuHienDiUng = null;
                    this.diUngThuoc.MucDo = null;
                };
                BenhNhanSharedComponent.prototype.onSelectThuoc = function (dataItem) {
                    this.tenDiUng = dataItem.DisplayName;
                };
                BenhNhanSharedComponent.prototype.InTheBenhNhanBenhNhan = function () {
                    this.dialog
                        .open(_the_benh_nhan_benh_nhan_popup_the_benh_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_14__["TheBenhNhanBenhNhanPopupComponent"], {
                        disableClose: true,
                        width: "480px",
                        data: this.benhNhanId,
                    }).afterClosed();
                };
                BenhNhanSharedComponent.prototype.openComboboxBHTN = function (event) {
                    if (event) {
                        this.isSelectBHTN = true;
                    }
                    else {
                        this.isSelectBHTN = false;
                    }
                };
                BenhNhanSharedComponent.prototype.openDropDownListTSB = function (event) {
                    if (event) {
                        this.isSelectTSB = true;
                    }
                    else {
                        this.isSelectTSB = false;
                    }
                };
                BenhNhanSharedComponent.prototype.openDropDownListDUT = function (event) {
                    if (event) {
                        this.isSelectDUT = true;
                    }
                    else {
                        this.isSelectDUT = false;
                    }
                };
                BenhNhanSharedComponent.prototype.NamSinhChange = function (event) {
                    //console.log("NamSinhChange = ", event);
                    var dateNow = new Date();
                    if (event >= dateNow.getFullYear() - 6) {
                        this.under6yearsold = true;
                    }
                    else {
                        this.under6yearsold = false;
                    }
                    this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi " + 0 + " Tháng " + 0 + " Ngày ";
                };
                BenhNhanSharedComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                    else if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 == true) {
                        event.preventDefault();
                    }
                };
                return BenhNhanSharedComponent;
            }());
            BenhNhanSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_9__["IntlService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridBHTNBenhNhan', { static: true })
            ], BenhNhanSharedComponent.prototype, "gridChildBHTN", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridTienSuBenh', { static: false })
            ], BenhNhanSharedComponent.prototype, "gridTienSuBenh", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDiUngThuoc', { static: false })
            ], BenhNhanSharedComponent.prototype, "gridDiUngThuoc", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], BenhNhanSharedComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplateTienSuBenh', { static: true })
            ], BenhNhanSharedComponent.prototype, "actionTemplateTienSuBenh", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplateDiUngThuoc', { static: true })
            ], BenhNhanSharedComponent.prototype, "actionTemplateDiUngThuoc", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenThuocTemplate', { static: true })
            ], BenhNhanSharedComponent.prototype, "tenThuocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiDiUngTemplate', { static: true })
            ], BenhNhanSharedComponent.prototype, "loaiDiUngTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxQuanHuyen', { static: true })
            ], BenhNhanSharedComponent.prototype, "comboboxQuanHuyen", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxPhuongXa', { static: true })
            ], BenhNhanSharedComponent.prototype, "comboboxPhuongXa", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], BenhNhanSharedComponent.prototype, "keyEvent", null);
            BenhNhanSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-benh-nhan-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./benh-nhan-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./benh-nhan-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.scss")).default]
                })
            ], BenhNhanSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.scss": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.scss ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtbmhhbi9iZW5oLW5oYW4vYmVuaC1uaGFuLXVwZGF0ZS9iZW5oLW5oYW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: BenhNhanUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanUpdateComponent", function () { return BenhNhanUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _benh_nhan_shared_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../benh-nhan-shared/benh-nhan-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.ts");
            var BenhNhanUpdateComponent = /** @class */ (function () {
                function BenhNhanUpdateComponent(router) {
                    this.router = router;
                }
                BenhNhanUpdateComponent.prototype.ngOnInit = function () {
                };
                BenhNhanUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-nhan/benh-nhan']);
                };
                return BenhNhanUpdateComponent;
            }());
            BenhNhanUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_benh_nhan_shared_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_5__["BenhNhanSharedComponent"], { static: true })
            ], BenhNhanUpdateComponent.prototype, "shared", void 0);
            BenhNhanUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-benh-nhan-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./benh-nhan-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./benh-nhan-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.scss")).default]
                })
            ], BenhNhanUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan.model.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan.model.ts ***!
          \********************************************************************************************/
        /*! exports provided: BenhNhan, ThongTinBenhNhan, BenhNhanTienSuBenhViewModel, BenhNhanTienSuBenhChiTiet, BenhNhanDiUngThuocViewModel, BenhNhanDiUngThuocChiTiet, BenhNhanBaoHiemTuNhanViewModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhan", function () { return BenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhNhan", function () { return ThongTinBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanTienSuBenhViewModel", function () { return BenhNhanTienSuBenhViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanTienSuBenhChiTiet", function () { return BenhNhanTienSuBenhChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanDiUngThuocViewModel", function () { return BenhNhanDiUngThuocViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanDiUngThuocChiTiet", function () { return BenhNhanDiUngThuocChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanBaoHiemTuNhanViewModel", function () { return BenhNhanBaoHiemTuNhanViewModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BenhNhan = /** @class */ (function () {
                function BenhNhan(HoTen, NgayThangNamSinh, NgaySinh, ThangSinh, NamSinh, SoChungMinhThu, GioiTinh, GioiTinhDisplay, NgheNghiepId, NoiLamViec, QuocTichId, DanTocId, DiaChi, PhuongXaId, QuanHuyenId, TinhThanhId, SoDienThoai, Email, NguoiLienHeHoTen, NguoiLienHeQuanHeNhanThanId, NguoiLienHeSoDienThoai, NguoiLienHeEmail, NguoiLienHeDiaChi, NguoiLienHePhuongXaId, NguoiLienHeQuanHuyenId, NguoiLienHeTinhThanhId, BHYTMaSoThe, BHYTNgayHieuLuc, BHYTNgayHetHan, BHYTDiaChi, BHYTCoQuanBHXH, BHYTNgayDu5Nam, BHYTNgayDu5NamDisplay, BHYTMaDKBD, BHYTNgayHetHanDisplay, BHYTNgayHieuLucDisplay, NgheNghiepText, NhomMauText, NhomMau, QuocTichText, NguoiLienHeQuanHeNhanThanText, CoTienSuBenh, CoDiUngThuoc, CoBHYT, CoBHTN, BenhNhanTienSuBenhs, BenhNhanDiUngThuocs, BenhNhanCongTyBaoHiemTuNhans, TuNhap) {
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (GioiTinhDisplay === void 0) { GioiTinhDisplay = null; }
                    if (NgheNghiepId === void 0) { NgheNghiepId = null; }
                    if (NoiLamViec === void 0) { NoiLamViec = null; }
                    if (QuocTichId === void 0) { QuocTichId = null; }
                    if (DanTocId === void 0) { DanTocId = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (PhuongXaId === void 0) { PhuongXaId = null; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = null; }
                    if (TinhThanhId === void 0) { TinhThanhId = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (Email === void 0) { Email = null; }
                    if (NguoiLienHeHoTen === void 0) { NguoiLienHeHoTen = null; }
                    if (NguoiLienHeQuanHeNhanThanId === void 0) { NguoiLienHeQuanHeNhanThanId = null; }
                    if (NguoiLienHeSoDienThoai === void 0) { NguoiLienHeSoDienThoai = null; }
                    if (NguoiLienHeEmail === void 0) { NguoiLienHeEmail = null; }
                    if (NguoiLienHeDiaChi === void 0) { NguoiLienHeDiaChi = null; }
                    if (NguoiLienHePhuongXaId === void 0) { NguoiLienHePhuongXaId = null; }
                    if (NguoiLienHeQuanHuyenId === void 0) { NguoiLienHeQuanHuyenId = null; }
                    if (NguoiLienHeTinhThanhId === void 0) { NguoiLienHeTinhThanhId = null; }
                    if (BHYTMaSoThe === void 0) { BHYTMaSoThe = null; }
                    if (BHYTNgayHieuLuc === void 0) { BHYTNgayHieuLuc = null; }
                    if (BHYTNgayHetHan === void 0) { BHYTNgayHetHan = null; }
                    if (BHYTDiaChi === void 0) { BHYTDiaChi = null; }
                    if (BHYTCoQuanBHXH === void 0) { BHYTCoQuanBHXH = null; }
                    if (BHYTNgayDu5Nam === void 0) { BHYTNgayDu5Nam = null; }
                    if (BHYTNgayDu5NamDisplay === void 0) { BHYTNgayDu5NamDisplay = null; }
                    if (BHYTMaDKBD === void 0) { BHYTMaDKBD = null; }
                    if (BHYTNgayHetHanDisplay === void 0) { BHYTNgayHetHanDisplay = null; }
                    if (BHYTNgayHieuLucDisplay === void 0) { BHYTNgayHieuLucDisplay = null; }
                    if (NgheNghiepText === void 0) { NgheNghiepText = null; }
                    if (NhomMauText === void 0) { NhomMauText = null; }
                    if (NhomMau === void 0) { NhomMau = null; }
                    if (QuocTichText === void 0) { QuocTichText = null; }
                    if (NguoiLienHeQuanHeNhanThanText === void 0) { NguoiLienHeQuanHeNhanThanText = null; }
                    if (CoTienSuBenh === void 0) { CoTienSuBenh = null; }
                    if (CoDiUngThuoc === void 0) { CoDiUngThuoc = null; }
                    if (CoBHYT === void 0) { CoBHYT = null; }
                    if (CoBHTN === void 0) { CoBHTN = null; }
                    if (BenhNhanTienSuBenhs === void 0) { BenhNhanTienSuBenhs = []; }
                    if (BenhNhanDiUngThuocs === void 0) { BenhNhanDiUngThuocs = []; }
                    if (BenhNhanCongTyBaoHiemTuNhans === void 0) { BenhNhanCongTyBaoHiemTuNhans = []; }
                    if (TuNhap === void 0) { TuNhap = false; }
                    this.HoTen = HoTen;
                    this.NgayThangNamSinh = NgayThangNamSinh;
                    this.NgaySinh = NgaySinh;
                    this.ThangSinh = ThangSinh;
                    this.NamSinh = NamSinh;
                    this.SoChungMinhThu = SoChungMinhThu;
                    this.GioiTinh = GioiTinh;
                    this.GioiTinhDisplay = GioiTinhDisplay;
                    this.NgheNghiepId = NgheNghiepId;
                    this.NoiLamViec = NoiLamViec;
                    this.QuocTichId = QuocTichId;
                    this.DanTocId = DanTocId;
                    this.DiaChi = DiaChi;
                    this.PhuongXaId = PhuongXaId;
                    this.QuanHuyenId = QuanHuyenId;
                    this.TinhThanhId = TinhThanhId;
                    this.SoDienThoai = SoDienThoai;
                    this.Email = Email;
                    this.NguoiLienHeHoTen = NguoiLienHeHoTen;
                    this.NguoiLienHeQuanHeNhanThanId = NguoiLienHeQuanHeNhanThanId;
                    this.NguoiLienHeSoDienThoai = NguoiLienHeSoDienThoai;
                    this.NguoiLienHeEmail = NguoiLienHeEmail;
                    this.NguoiLienHeDiaChi = NguoiLienHeDiaChi;
                    this.NguoiLienHePhuongXaId = NguoiLienHePhuongXaId;
                    this.NguoiLienHeQuanHuyenId = NguoiLienHeQuanHuyenId;
                    this.NguoiLienHeTinhThanhId = NguoiLienHeTinhThanhId;
                    this.BHYTMaSoThe = BHYTMaSoThe;
                    this.BHYTNgayHieuLuc = BHYTNgayHieuLuc;
                    this.BHYTNgayHetHan = BHYTNgayHetHan;
                    this.BHYTDiaChi = BHYTDiaChi;
                    this.BHYTCoQuanBHXH = BHYTCoQuanBHXH;
                    this.BHYTNgayDu5Nam = BHYTNgayDu5Nam;
                    this.BHYTNgayDu5NamDisplay = BHYTNgayDu5NamDisplay;
                    this.BHYTMaDKBD = BHYTMaDKBD;
                    this.BHYTNgayHetHanDisplay = BHYTNgayHetHanDisplay;
                    this.BHYTNgayHieuLucDisplay = BHYTNgayHieuLucDisplay;
                    this.NgheNghiepText = NgheNghiepText;
                    this.NhomMauText = NhomMauText;
                    this.NhomMau = NhomMau;
                    this.QuocTichText = QuocTichText;
                    this.NguoiLienHeQuanHeNhanThanText = NguoiLienHeQuanHeNhanThanText;
                    this.CoTienSuBenh = CoTienSuBenh;
                    this.CoDiUngThuoc = CoDiUngThuoc;
                    this.CoBHYT = CoBHYT;
                    this.CoBHTN = CoBHTN;
                    this.BenhNhanTienSuBenhs = BenhNhanTienSuBenhs;
                    this.BenhNhanDiUngThuocs = BenhNhanDiUngThuocs;
                    this.BenhNhanCongTyBaoHiemTuNhans = BenhNhanCongTyBaoHiemTuNhans;
                    this.TuNhap = TuNhap;
                }
                return BenhNhan;
            }());
            var ThongTinBenhNhan = /** @class */ (function () {
                function ThongTinBenhNhan(MaThe, TenBenhNhan, NgaySinh, NgaySinhDisplay) {
                    if (MaThe === void 0) { MaThe = null; }
                    if (TenBenhNhan === void 0) { TenBenhNhan = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (NgaySinhDisplay === void 0) { NgaySinhDisplay = null; }
                    this.MaThe = MaThe;
                    this.TenBenhNhan = TenBenhNhan;
                    this.NgaySinh = NgaySinh;
                    this.NgaySinhDisplay = NgaySinhDisplay;
                }
                return ThongTinBenhNhan;
            }());
            var BenhNhanTienSuBenhViewModel = /** @class */ (function () {
                function BenhNhanTienSuBenhViewModel(STT, Id, BenhNhanId, TenBenh, LoaiTienSuBenh, TenLoaiTienSuBenh, TenTienSuBenhs) {
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = 0; }
                    if (BenhNhanId === void 0) { BenhNhanId = 0; }
                    if (TenBenh === void 0) { TenBenh = null; }
                    if (LoaiTienSuBenh === void 0) { LoaiTienSuBenh = null; }
                    if (TenLoaiTienSuBenh === void 0) { TenLoaiTienSuBenh = null; }
                    if (TenTienSuBenhs === void 0) { TenTienSuBenhs = []; }
                    this.STT = STT;
                    this.Id = Id;
                    this.BenhNhanId = BenhNhanId;
                    this.TenBenh = TenBenh;
                    this.LoaiTienSuBenh = LoaiTienSuBenh;
                    this.TenLoaiTienSuBenh = TenLoaiTienSuBenh;
                    this.TenTienSuBenhs = TenTienSuBenhs;
                }
                return BenhNhanTienSuBenhViewModel;
            }());
            var BenhNhanTienSuBenhChiTiet = /** @class */ (function () {
                function BenhNhanTienSuBenhChiTiet(LoaiTienSuBenh, TenBenh) {
                    if (LoaiTienSuBenh === void 0) { LoaiTienSuBenh = null; }
                    if (TenBenh === void 0) { TenBenh = null; }
                    this.LoaiTienSuBenh = LoaiTienSuBenh;
                    this.TenBenh = TenBenh;
                }
                return BenhNhanTienSuBenhChiTiet;
            }());
            var BenhNhanDiUngThuocViewModel = /** @class */ (function () {
                function BenhNhanDiUngThuocViewModel(STT, Id, BenhNhanId, ThuocId, TenThuoc, BieuHienDiUng, TenDiUng, LoaiDiUng, LoaiDiUngDisplay, MucDo, MucDoDisplay, TenDiUngThuocs) {
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = 0; }
                    if (BenhNhanId === void 0) { BenhNhanId = 0; }
                    if (ThuocId === void 0) { ThuocId = null; }
                    if (TenThuoc === void 0) { TenThuoc = null; }
                    if (BieuHienDiUng === void 0) { BieuHienDiUng = null; }
                    if (TenDiUng === void 0) { TenDiUng = null; }
                    if (LoaiDiUng === void 0) { LoaiDiUng = null; }
                    if (LoaiDiUngDisplay === void 0) { LoaiDiUngDisplay = null; }
                    if (MucDo === void 0) { MucDo = null; }
                    if (MucDoDisplay === void 0) { MucDoDisplay = null; }
                    if (TenDiUngThuocs === void 0) { TenDiUngThuocs = []; }
                    this.STT = STT;
                    this.Id = Id;
                    this.BenhNhanId = BenhNhanId;
                    this.ThuocId = ThuocId;
                    this.TenThuoc = TenThuoc;
                    this.BieuHienDiUng = BieuHienDiUng;
                    this.TenDiUng = TenDiUng;
                    this.LoaiDiUng = LoaiDiUng;
                    this.LoaiDiUngDisplay = LoaiDiUngDisplay;
                    this.MucDo = MucDo;
                    this.MucDoDisplay = MucDoDisplay;
                    this.TenDiUngThuocs = TenDiUngThuocs;
                }
                return BenhNhanDiUngThuocViewModel;
            }());
            var BenhNhanDiUngThuocChiTiet = /** @class */ (function () {
                function BenhNhanDiUngThuocChiTiet(LoaiDiUng, TenDiUng, ThuocId) {
                    if (LoaiDiUng === void 0) { LoaiDiUng = null; }
                    if (TenDiUng === void 0) { TenDiUng = null; }
                    if (ThuocId === void 0) { ThuocId = null; }
                    this.LoaiDiUng = LoaiDiUng;
                    this.TenDiUng = TenDiUng;
                    this.ThuocId = ThuocId;
                }
                return BenhNhanDiUngThuocChiTiet;
            }());
            var BenhNhanBaoHiemTuNhanViewModel = /** @class */ (function () {
                function BenhNhanBaoHiemTuNhanViewModel(STT, BenhNhanId, CongTyBaoHiemTuNhanId, CongTyDisplay, MaSoThe, NgayHieuLuc, NgayHieuLucDisplay, NgayHetHan, NgayHetHanDisplay, SoDienThoai, DiaChi, CongTyBHTNIds) {
                    if (STT === void 0) { STT = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = 0; }
                    if (CongTyBaoHiemTuNhanId === void 0) { CongTyBaoHiemTuNhanId = null; }
                    if (CongTyDisplay === void 0) { CongTyDisplay = null; }
                    if (MaSoThe === void 0) { MaSoThe = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayHieuLucDisplay === void 0) { NgayHieuLucDisplay = null; }
                    if (NgayHetHan === void 0) { NgayHetHan = null; }
                    if (NgayHetHanDisplay === void 0) { NgayHetHanDisplay = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (CongTyBHTNIds === void 0) { CongTyBHTNIds = null; }
                    this.STT = STT;
                    this.BenhNhanId = BenhNhanId;
                    this.CongTyBaoHiemTuNhanId = CongTyBaoHiemTuNhanId;
                    this.CongTyDisplay = CongTyDisplay;
                    this.MaSoThe = MaSoThe;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayHieuLucDisplay = NgayHieuLucDisplay;
                    this.NgayHetHan = NgayHetHan;
                    this.NgayHetHanDisplay = NgayHetHanDisplay;
                    this.SoDienThoai = SoDienThoai;
                    this.DiaChi = DiaChi;
                    this.CongTyBHTNIds = CongTyBHTNIds;
                }
                return BenhNhanBaoHiemTuNhanViewModel;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan.module.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan.module.ts ***!
          \*********************************************************************************************/
        /*! exports provided: BenhNhanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanModule", function () { return BenhNhanModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _benh_nhan_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./benh-nhan-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-routing.module.ts");
            /* harmony import */ var _benh_nhan_list_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./benh-nhan-list/benh-nhan-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-list/benh-nhan-list.component.ts");
            /* harmony import */ var _benh_nhan_update_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./benh-nhan-update/benh-nhan-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-update/benh-nhan-update.component.ts");
            /* harmony import */ var _benh_nhan_shared_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./benh-nhan-shared/benh-nhan-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-shared/benh-nhan-shared.component.ts");
            /* harmony import */ var _benh_nhan_create_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./benh-nhan-create/benh-nhan-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan-create/benh-nhan-create.component.ts");
            /* harmony import */ var _benh_nhan_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./benh-nhan.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan.service.ts");
            /* harmony import */ var _the_benh_nhan_benh_nhan_popup_the_benh_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.ts");
            // import { BenhNhanBhytComponent } from './benh-nhan-bhyt/benh-nhan-bhyt.component';
            // import { BenhNhanBhytErrorComponent } from './benh-nhan-bhyt-error/benh-nhan-bhyt-error.component';
            var BenhNhanModule = /** @class */ (function () {
                function BenhNhanModule() {
                }
                return BenhNhanModule;
            }());
            BenhNhanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_benh_nhan_list_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_16__["BenhNhanListComponent"], _benh_nhan_update_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_17__["BenhNhanUpdateComponent"], _benh_nhan_shared_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_18__["BenhNhanSharedComponent"], _benh_nhan_create_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_19__["BenhNhanCreateComponent"], _the_benh_nhan_benh_nhan_popup_the_benh_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_21__["TheBenhNhanBenhNhanPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"],
                        _benh_nhan_routing_module__WEBPACK_IMPORTED_MODULE_15__["BenhNhanRoutingModule"],
                        _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_9__["DateInputsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
                    ],
                    providers: [
                        _benh_nhan_service__WEBPACK_IMPORTED_MODULE_20__["BenhNhanService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"], useClass: _benh_nhan_service__WEBPACK_IMPORTED_MODULE_20__["BenhNhanService"] },
                    ],
                    entryComponents: [
                        _the_benh_nhan_benh_nhan_popup_the_benh_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_21__["TheBenhNhanBenhNhanPopupComponent"]
                    ]
                })
            ], BenhNhanModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan.service.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan.service.ts ***!
          \**********************************************************************************************/
        /*! exports provided: BenhNhanService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanService", function () { return BenhNhanService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var BenhNhanService = /** @class */ (function (_super) {
                __extends(BenhNhanService, _super);
                function BenhNhanService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BenhNhan';
                    return _this;
                }
                return BenhNhanService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            BenhNhanService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            BenhNhanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BenhNhanService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.scss": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.scss ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 271px;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RhbmgtbXVjL25ob20taGUtdGhvbmcvYmVuaC1uaGFuL2Jlbmgtbmhhbi90aGUtYmVuaC1uaGFuLWJlbmgtbmhhbi1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGRhbmgtbXVjXFxuaG9tLWhlLXRob25nXFxiZW5oLW5oYW5cXGJlbmgtbmhhblxcdGhlLWJlbmgtbmhhbi1iZW5oLW5oYW4tcG9wdXBcXHRoZS1iZW5oLW5oYW4tYmVuaC1uaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vZGFuaC1tdWMvbmhvbS1oZS10aG9uZy9iZW5oLW5oYW4vYmVuaC1uaGFuL3RoZS1iZW5oLW5oYW4tYmVuaC1uaGFuLXBvcHVwL3RoZS1iZW5oLW5oYW4tYmVuaC1uaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vZGFuaC1tdWMvbmhvbS1oZS10aG9uZy9iZW5oLW5oYW4vYmVuaC1uaGFuL3RoZS1iZW5oLW5oYW4tYmVuaC1uaGFuLXBvcHVwL3RoZS1iZW5oLW5oYW4tYmVuaC1uaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI3MXB4O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI3MXB4O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.ts": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.ts ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: TheBenhNhanBenhNhanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheBenhNhanBenhNhanPopupComponent", function () { return TheBenhNhanBenhNhanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var TheBenhNhanBenhNhanPopupComponent = /** @class */ (function () {
                function TheBenhNhanBenhNhanPopupComponent(apiService, dialogRef, dialog, sanitizer, data) {
                    this.apiService = apiService;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.loading = false;
                    this.src = "";
                }
                TheBenhNhanBenhNhanPopupComponent.prototype.ngOnInit = function () {
                    console.log("data:", this.data);
                    if (window.location.protocol == "http:") {
                        this.hostingName = "http://" + window.location.host;
                    }
                    else {
                        this.hostingName = "https://" + window.location.host;
                    }
                    this.xemTheBenhNhan();
                };
                TheBenhNhanBenhNhanPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                TheBenhNhanBenhNhanPopupComponent.prototype.xemTheBenhNhan = function () {
                    var _this = this;
                    var benhNhanId = this.data;
                    this.apiService.get("BenhNhan/InTheBenhNhanBenhNhan?benhNhanId=" + benhNhanId + "&hostingName=" + this.hostingName).subscribe(function (resultData) {
                        if (resultData != null) {
                            var html = resultData;
                            _this.src = "data:text/html;charset=utf-8," + encodeURIComponent(html);
                        }
                        else {
                            _this.src = "";
                        }
                        _this.loading = false;
                    }, function (err) {
                    });
                };
                TheBenhNhanBenhNhanPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var benhNhanId = this.data;
                    return new Promise(function (resolve) {
                        _this.apiService.get("BenhNhan/InTheBenhNhanBenhNhan?benhNhanId=" + benhNhanId + "&hostingName=" + _this.hostingName).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                        _this.close();
                    });
                };
                return TheBenhNhanBenhNhanPopupComponent;
            }());
            TheBenhNhanBenhNhanPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            TheBenhNhanBenhNhanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-the-benh-nhan-benh-nhan-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./the-benh-nhan-benh-nhan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./the-benh-nhan-benh-nhan-popup.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], TheBenhNhanBenhNhanPopupComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-nhan-benh-nhan-benh-nhan-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-nhan-benh-nhan-benh-nhan-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-nhan-benh-nhan-benh-nhan-module-es5.js.map