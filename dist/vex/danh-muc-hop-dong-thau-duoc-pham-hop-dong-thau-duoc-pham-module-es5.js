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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-hop-dong-thau-duoc-pham-hop-dong-thau-duoc-pham-module"], {
        /***/ "./node_modules/@iconify/icons-ic/sharp-edit.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/sharp-edit.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.html": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.html ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Hợp Đồng Thầu',Path:''}\n    ,{Title:'Dược Phẩm',Path:''}\n    ,{Title:'Hợp Đồng Thầu Dược Phẩm',Path:'/danh-muc/hop-dong-thau/duoc-pham', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Hợp Đồng Thầu Dược Phẩm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-hop-dong-thau-duoc-pham-shared>\n                </app-hop-dong-thau-duoc-pham-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.html": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.html ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục', Path:''}\n                    ,{Title:'Hợp Đồng Thầu', Path:''}\n                    ,{Title:'Dược Phẩm', Path:''}\n                    ,{Title:'Hợp Đồng Thầu Dược Phẩm', Path:'/danh-muc/hop-dong-thau/duoc-pham', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/hop-dong-thau/duoc-pham\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"true\" [lazyLoadPage]=\"true\"\n                [detailTemplate]=\"detailTemplate\" [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\" #gridHdtCha>\n            </app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"/danh-muc/hop-dong-thau/duoc-pham\" [gridColumns]=\"gridChildColumns\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    additionalSearchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n            <ng-template #giaTemplate let-dataItem>\n                {{dataItem.Gia | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.html": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.html ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN CHUNG\n    </h3>\n\n    <app-combobox id=\"NhaThau\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Nhà Cung Cấp\"\n        url=\"HopDongThauDuocPham/GetListNhaThau\" [(model)]=\"hopDongThauDuocPham.NhaThauId\"\n        [modelText]=\"hopDongThauDuocPham.NhaThau\" class=\"item-no-padding\" [template]=\"nhaThauTemplate\"\n        [templateHeader]=\"nhaThauTemplateHeader\" [required]=\"true\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'NhaThauId' | validationerror:validationErrors\">\n        <ng-template #nhaThauTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"30%\">Tên</th>\n                    <th>Địa Chỉ</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #nhaThauTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"30%\">{{dataItem.Ten}}</td>\n                    <td>{{dataItem.DiaChi}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-textbox id=\"SoHopDong\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauDuocPham.SoHopDong\"\n        label=\"Số Hợp Đồng\" maxlength=\"50\" [disabled]=\"isDisableUpdate\">\n    </app-textbox>\n\n    <app-textbox id=\"SoQuyetDinh\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauDuocPham.SoQuyetDinh\"\n        [required]=\"true\" label=\"Số Quyết Định\" maxlength=\"25\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'SoQuyetDinh' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-datepicker id=\"CongBo\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" [(model)]=\"hopDongThauDuocPham.CongBo\"\n        (modelChange)=\"ngayChange($event, true)\" label=\"Công Bố\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'CongBo' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <app-datepicker id=\"NgayKy\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauDuocPham.NgayKy\" label=\"Ngày Ký\"\n        [disabled]=\"isDisableUpdate\" [validationerror]=\"'NgayKy' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n        [(model)]=\"hopDongThauDuocPham.NgayHieuLuc\" label=\"Ngày Hiệu Lực\" [disabled]=\"isDisableUpdate\"\n        (modelChange)=\"ngayChange($event, false)\" [validationerror]=\"'NgayHieuLuc' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <app-datepicker id=\"NgayHetHan\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n        [(model)]=\"hopDongThauDuocPham.NgayHetHan\" label=\"Ngày Hết Hạn\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'NgayHetHan' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <app-textboxnumeric id=\"Nam\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauDuocPham.Nam\" [required]=\"true\"\n        label=\"Năm\" [min]=\"minYear\" [max]=\"maxYear\" [format]=\"'0'\" [spinners]=\"false\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'Nam' | validationerror:validationErrors\">\n    </app-textboxnumeric>\n\n\n\n    <app-combobox id=\"LoaiThau\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauDuocPham.LoaiThau\" [required]=\"true\"\n        [modelText]=\"hopDongThauDuocPham.TenLoaiThau\" label=\"Loại Thầu\" [disabled]=\"isDisableUpdate\"\n        [autoSelectFirstItem]=\"true\" bind=\"true\" url=\"HopDongThauDuocPham/GetListLoaiThau\"\n        [validationerror]=\"'LoaiThau' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox id=\"LoaiThuocThau\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauDuocPham.LoaiThuocThau\"\n        [required]=\"true\" [modelText]=\"hopDongThauDuocPham.TenLoaiThuocThau\" label=\"Loại Thuốc Thầu\"\n        [autoSelectFirstItem]=\"true\" bind=\"true\" [disabled]=\"isDisableUpdate\"\n        url=\"HopDongThauDuocPham/GetListLoaiThuocThau\"\n        [validationerror]=\"'LoaiThuocThau' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-textbox id=\"NhomThau\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauDuocPham.NhomThau\" [required]=\"true\"\n        [disabled]=\"isDisableUpdate\" label=\"Nhóm Thầu\" maxlength=\"50\"\n        [validationerror]=\"'NhomThau' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textbox id=\"GoiThau\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauDuocPham.GoiThau\" [required]=\"true\"\n        [disabled]=\"isDisableUpdate\" label=\"Gói Thầu\" maxlength=\"2\"\n        [validationerror]=\"'GoiThau' | validationerror:validationErrors\">\n    </app-textbox>\n\n\n\n    <h3 fxFlex=\"100%\" class=\"sub-title\">THÔNG TIN CHI TIẾT\n    </h3>\n\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"showFormDetail\">\n        <button (click)=\"ThemDuocPham()\" type=\"button\" color=\"primary\" [disabled]=\"isDisableUpdate\" mat-raised-button>\n            Thêm Dược Phẩm</button>\n    </div>\n\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"!showFormDetail\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            <app-combobox id=\"DuocPham\" fxFlex=\"50%\" fxFlex.sm=\"50%\" label=\"Dược Phẩm\" (keyup)=\"onKeyAddDp($event)\"\n                (openCombobox)=\"openComboboxHdt($event)\" url=\"HopDongThauDuocPham/GetListDuocPham\" [reloadForGrid]=\"true\"\n                [queryInfo]=\"{ParameterDependencies:'{DuocPhamId:' + hopDongThauDuocPhamChiTiet.DuocPhamId +'}', Take: 50}\"\n                [(model)]=\"hopDongThauDuocPhamChiTiet.DuocPhamId\" [modelText]=\"hopDongThauDuocPhamChiTiet.DuocPham\"\n                class=\"item-no-padding\" [template]=\"duocPhamTemplate\" [templateHeader]=\"duocPhamTemplateHeader\"\n                [required]=\"true\" [validationerror]=\"'DuocPhamId' | validationerror:validationErrorsForDetail\"\n                (selectionChange)=\"onChangeDuocPham($event)\">\n                <ng-template #duocPhamTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"30%\">Tên</th>\n                            <th width=\"30%\">Hoạt Chất</th>\n                            <th>Nhà Sản Xuất</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #duocPhamTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"30%\">{{dataItem.Ten}}</td>\n                            <td width=\"30%\">{{dataItem.HoatChat}}</td>\n                            <td>{{dataItem.NhaSanXuat}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n            </app-combobox>\n\n            <app-textboxnumeric id=\"Gia\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"hopDongThauDuocPhamChiTiet.Gia\"\n                [step]=\"100\" [required]=\"true\" label=\"Giá\" decimals=\"2\" format=\"n2\" (keyup)=\"onKeyAddDp($event)\"\n                [validationerror]=\"'Gia' | validationerror:validationErrorsForDetail\">\n            </app-textboxnumeric>\n\n            <app-textboxnumeric id=\"SoLuong\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"hopDongThauDuocPhamChiTiet.SoLuong\"\n                [spinners]=\"false\" [required]=\"true\" label=\"Số Lượng\" [decimals]=\"2\" [format]=\"format\"\n                (keyup)=\"onKeyAddDp($event)\" [validationerror]=\"'SoLuong' | validationerror:validationErrorsForDetail\">\n            </app-textboxnumeric>\n            <app-checkbox [disabled]=\"disabledSuDungTaiBenhVien==true\" id=\"SuDungTaiBenhVien\" fxFlex=\"15%\"\n                fxFlex.sm=\"15%\" class=\"mt-4\" [(model)]=\"hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien\"\n                label=\"Sử dụng tại bệnh viện\" (modelChange)=\"modelChangeSuDungTaiBenhVien($event)\">\n            </app-checkbox>\n\n            <ng-container *ngIf=\"hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien == true\">\n                <app-combobox id=\"DuocPhamBenhVienPhanNhomChaId\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n                    [disabled]=\"hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId != null && hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId != 0\"\n                    [(model)]=\"hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId\"\n                    url=\"DuocPhamBenhVien/DuocPhamBenhVienChaPhanNhoms\"\n                    [modelText]=\"hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha\" label=\"Loại thuốc hoặc hoạt chất\"\n                    required=\"true\" [autoSelectFirstItem]=\"true\" bind=\"true\" (modelChange)=\"nhomChaChange($event)\"\n                    (keyup)=\"onKeyAddDp($event)\" (openCombobox)=\"openComboboxHdt($event)\"\n                    [validationerror]=\"'DuocPhamBenhVienPhanNhomChaId' | validationerror:validationErrorsForDetail\">\n                </app-combobox>\n            \n                <app-combobox-tree #cboPhanNhomCon fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Phân loại theo tác dụng Dược lý\"\n                    [(model)]=\"hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId\" id=\"DuocPhamBenhVienPhanNhomConId\"\n                    [disabled]=\"(hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId != null && hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId != 0) || hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId == undefined ||  hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId == null\"\n                    [popupSettings]=\"{width: 1000,popupClass:'item-no-padding'}\" [bind]=\"true\"\n                    [queryInfo]=\"{ParameterDependencies:'{DuocPhamBenhVienPhanNhomChaId:' + hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId + '}', Take: 50}\"\n                    [modelText]=\"hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon\"\n                    (keyup)=\"onKeyAddDp($event)\" (openCombobox)=\"openComboboxHdt($event)\"\n                    url=\"DuocPhamBenhVien/DichVuBenhVienPhanNhomsLv2VaLv3\" (modelChange)=\"nhomConChange($event)\">\n                </app-combobox-tree>\n            </ng-container>\n\n            <app-textbox [disabled]=\"disabledSuDungTaiBenhVien==true\" fxFlex=\"25%\" id=\"MaDuocPhamBenhVien\"\n                label=\"Mã dược phẩm bệnh viện\" maxlength=\"250\" [(model)]=\"hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien\"\n                [required]=\"true\" [validationerror]=\"'MaDuocPhamBenhVien' | validationerror:validationErrorsForDetail\"\n                *ngIf=\"hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien == true\">\n            </app-textbox>\n            <!-- <app-combobox-tree fxFlex=\"15%\" label=\"Nhóm dịch vụ\" [(model)]=\"hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId\"\n                [disabled]=\"disabledSuDungTaiBenhVien==true\" [modelText]=\"hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomModelText\"\n                url=\"DuocPhamBenhVien/GetListDichVuBenhVienPhanNhomAsync\" *ngIf=\"hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien == true\"\n                [validationerror]=\"'DuocPhamBenhVienPhanNhomId' | validationerror:validationErrorsForDetail\">\n            </app-combobox-tree> -->\n            <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <div class=\"form-footer\">\n                        <button type=\"button\" class=\"mr-1\" mat-button (click)=\"ClearData()\">\n                            Hủy</button>\n                        <button *ngIf=\"!isUpdate\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"Add()\">\n                            Thêm</button>\n                        <button *ngIf=\"isUpdate\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"Update()\">\n                            Cập Nhật</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" *ngIf=\"showGrid\" [height]=\"300\" [gridDataSource]=\"gridDataSource\"\n        [useHeaderDefault]=\"false\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n        [useAddDeault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\" style=\"width: 1px;\"\n        [pageable]=\"false\" #gridHdtDp>\n    </app-grid>\n\n    <ng-template #giaTemplate let-dataItem>\n        {{dataItem.Gia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #maDuocPhamTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <p>{{dataItem.MaDuocPhamBenhVien}}</p>\n        <app-validationerrorother [validationerror]=\"'HopDongThauDuocPhamChiTiets['+rowIndex+'].MaDuocPhamBenhVien' | validationerror:validationErrors\">\n        </app-validationerrorother>\n    </ng-template>\n\n    <ng-template #duocPhamThauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <p>{{dataItem.DuocPham}}</p>\n        <app-validationerrorother [validationerror]=\"'HopDongThauDuocPhamChiTiets['+rowIndex+'].DuocPhamId' | validationerror:validationErrors\">\n        </app-validationerrorother>\n    </ng-template>\n\n    <ng-template #trangThaiTemplate let-dataItem>\n\n        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n            mat-icon-button type=\"button\" [disabled]=\"isDisableUpdate\">\n            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n        </button>\n        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <ng-template let-customer=\"customer\" matMenuContent>\n                <button (click)=\"BindValue(dataItem)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                    <span>Sửa</span>\n                </button>\n                <button (click)=\"ConfirmDelete(dataItem)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    <span>Xóa</span>\n                </button>\n            </ng-template>\n        </mat-menu>\n    </ng-template>\n</div>\n\n<div *ngIf=\"!isCreate\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-formfooter [bodyComponent]=\"this\" type=\"update\" [read]=\"isDisableUpdate\" (updated)=\"onUpdated()\">\n    </app-formfooter>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.html": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.html ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Hợp Đồng Thầu',Path:''}\n    ,{Title:'Dược Phẩm',Path:''}\n    ,{Title:'Hợp Đồng Thầu Dược Phẩm',Path:'/danh-muc/hop-dong-thau/duoc-pham', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Hợp Đồng Thầu Dược Phẩm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-hop-dong-thau-duoc-pham-shared></app-hop-dong-thau-duoc-pham-shared>\n\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.scss": 
        /*!********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.scss ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9ob3AtZG9uZy10aGF1L2R1b2MtcGhhbS9ob3AtZG9uZy10aGF1LWR1b2MtcGhhbS1jcmVhdGUvaG9wLWRvbmctdGhhdS1kdW9jLXBoYW0tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: HopDongThauDuocPhamCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauDuocPhamCreateComponent", function () { return HopDongThauDuocPhamCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _hop_dong_thau_duoc_pham_shared_hop_dong_thau_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.ts");
            var HopDongThauDuocPhamCreateComponent = /** @class */ (function () {
                function HopDongThauDuocPhamCreateComponent(router) {
                    this.router = router;
                }
                HopDongThauDuocPhamCreateComponent.prototype.ngOnInit = function () {
                };
                HopDongThauDuocPhamCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/hop-dong-thau/duoc-pham']);
                };
                return HopDongThauDuocPhamCreateComponent;
            }());
            HopDongThauDuocPhamCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_hop_dong_thau_duoc_pham_shared_hop_dong_thau_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_3__["HopDongThauDuocPhamSharedComponent"], { static: true })
            ], HopDongThauDuocPhamCreateComponent.prototype, "shared", void 0);
            HopDongThauDuocPhamCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hop-dong-thau-duoc-pham-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hop-dong-thau-duoc-pham-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hop-dong-thau-duoc-pham-create.component.scss */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.scss")).default]
                })
            ], HopDongThauDuocPhamCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.scss": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.scss ***!
          \****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9ob3AtZG9uZy10aGF1L2R1b2MtcGhhbS9ob3AtZG9uZy10aGF1LWR1b2MtcGhhbS1saXN0L2hvcC1kb25nLXRoYXUtZHVvYy1waGFtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: HopDongThauDuocPhamListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauDuocPhamListComponent", function () { return HopDongThauDuocPhamListComponent; });
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
            var HopDongThauDuocPhamListComponent = /** @class */ (function () {
                function HopDongThauDuocPhamListComponent(notificationService, authService, dialog, apiService) {
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.urlGetDataGridChild = 'HopDongThauDuocPham/GetDataForGridChildAsync';
                    this.urlGetTotalPageGridChild = 'HopDongThauDuocPham/GetTotalPageForGridChildAsync';
                }
                HopDongThauDuocPhamListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhMucHopDongThauDuocPham;
                    this.gridColumns = [
                        { Field: 'NhaThau', Title: 'Nhà Cung Cấp', Width: 150, Sortable: true, ShowTooltip: true, LinkDetail: true },
                        { Field: 'SoHopDong', Title: 'Số Hợp Đồng', Width: 150, Sortable: true },
                        { Field: 'SoQuyetDinh', Title: 'Số Quyết Định', Width: 150, Sortable: true },
                        { Field: 'CongBoDisplay', Title: 'Ngày Công Bố', Width: 150, Sortable: true },
                        { Field: 'NgayKyDisplay', Title: 'Ngày Ký', Width: 150, Sortable: true },
                        { Field: 'NgayHieuLucDisplay', Title: 'Ngày Hiệu Lực', Width: 150, Sortable: true },
                        { Field: 'NgayHetHanDisplay', Title: 'Ngày Hết Hạn', Width: 150, Sortable: true },
                        { Field: 'TenLoaiThau', Title: 'Loại Thầu', Width: 140, Sortable: true },
                        { Field: 'TenLoaiThuocThau', Title: 'Loại Thuốc Thầu', Width: 170, Sortable: true },
                        { Field: 'NhomThau', Title: 'Nhóm Thầu', Width: 150, Sortable: true },
                        { Field: 'GoiThau', Title: 'Gói Thầu', Width: 150, Sortable: true },
                        { Field: 'Nam', Title: 'Năm', Width: 120, Sortable: true }
                    ];
                    this.gridChildColumns = [
                        { Field: 'DuocPham', Title: 'Dược Phẩm', Width: 200, Sortable: true },
                        { Field: 'Gia', Title: 'Giá', Width: 150, Sortable: true, Template: this.giaTemplate },
                        { Field: 'SoLuongDisplay', Title: 'Số Lượng', Width: 100, Sortable: true },
                        { Field: 'SoLuongCungCapDisplay', Title: 'Số Lượng Đã Cung Cấp', Width: 100, Sortable: true }
                    ];
                };
                HopDongThauDuocPhamListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('HopDongThauDuocPham/ExportHopDongThauDuocPham', self.gridHdtCha._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'HopDongThauDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                HopDongThauDuocPhamListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                HopDongThauDuocPhamListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return HopDongThauDuocPhamListComponent;
            }());
            HopDongThauDuocPhamListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridHdtCha', { static: false })
            ], HopDongThauDuocPhamListComponent.prototype, "gridHdtCha", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
            ], HopDongThauDuocPhamListComponent.prototype, "giaTemplate", void 0);
            HopDongThauDuocPhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-hop-dong-thau-duoc-pham-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hop-dong-thau-duoc-pham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hop-dong-thau-duoc-pham-list.component.scss */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.scss")).default]
                })
            ], HopDongThauDuocPhamListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-routing.module.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-routing.module.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: HopDongThauDuocPhamRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauDuocPhamRoutingModule", function () { return HopDongThauDuocPhamRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _hop_dong_thau_duoc_pham_list_hop_dong_thau_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.ts");
            /* harmony import */ var _hop_dong_thau_duoc_pham_create_hop_dong_thau_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.ts");
            /* harmony import */ var _hop_dong_thau_duoc_pham_update_hop_dong_thau_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _hop_dong_thau_duoc_pham_list_hop_dong_thau_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_3__["HopDongThauDuocPhamListComponent"],
                    data: {
                        title: 'Danh Mục Hợp Đồng Thầu Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucHopDongThauDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _hop_dong_thau_duoc_pham_create_hop_dong_thau_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_4__["HopDongThauDuocPhamCreateComponent"],
                    data: {
                        title: 'Thêm Hợp Đồng Thầu Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucHopDongThauDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _hop_dong_thau_duoc_pham_update_hop_dong_thau_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_5__["HopDongThauDuocPhamUpdateComponent"],
                    data: {
                        title: 'Chỉnh Sửa Hợp Đồng Thầu Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucHopDongThauDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                }
            ];
            var HopDongThauDuocPhamRoutingModule = /** @class */ (function () {
                function HopDongThauDuocPhamRoutingModule() {
                }
                return HopDongThauDuocPhamRoutingModule;
            }());
            HopDongThauDuocPhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], HopDongThauDuocPhamRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.scss": 
        /*!********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.scss ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9ob3AtZG9uZy10aGF1L2R1b2MtcGhhbS9ob3AtZG9uZy10aGF1LWR1b2MtcGhhbS1zaGFyZWQvaG9wLWRvbmctdGhhdS1kdW9jLXBoYW0tc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: HopDongThauDuocPhamSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauDuocPhamSharedComponent", function () { return HopDongThauDuocPhamSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _hop_dong_thau_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hop-dong-thau-duoc-pham.model */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dropdowns_combobox_tree_combobox_tree_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dropdowns/combobox-tree/combobox-tree.component */ "./src/app/shared/component/dropdowns/combobox-tree/combobox-tree.component.ts");
            var HopDongThauDuocPhamSharedComponent = /** @class */ (function () {
                function HopDongThauDuocPhamSharedComponent(router, route, baseService, dialog, apiService, notificationService) {
                    this.router = router;
                    this.route = route;
                    this.baseService = baseService;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.gridColumns = [];
                    this.hopDongThauDuocPham = {};
                    this.hopDongThauDuocPhamChiTiet = {};
                    this.hopDongThauDuocPhamSource = {};
                    this.isUpdate = false;
                    this.format = 'n2';
                    this.showFormDetail = false;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.isDisableUpdate = false;
                    this.isCreate = false;
                    this.duocPhamDisabled = false;
                    this.disabledSuDungTaiBenhVien = false;
                    this.minYear = 1900;
                    this.maxYear = 9999;
                    this.arrayMaDuocPhamTemp = new Array();
                    this.isGetDuocPhamDaTao = false;
                }
                HopDongThauDuocPhamSharedComponent.prototype.ngOnInit = function () {
                    this.showGrid = false;
                    this._idHopDongThauChiTiet = 0;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhMucHopDongThauDuocPham;
                    var id = this.route.snapshot.params.id;
                    this.hopDongThauDuocPham = new _hop_dong_thau_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauDuocPham"]();
                    this.hopDongThauDuocPhamChiTiet = new _hop_dong_thau_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauDuocPhamChiTiet"]();
                    this.hopDongThauDuocPhamSource = new _hop_dong_thau_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauDuocPham"]();
                    var hopDongThauDuocPhamChiTietDataSource = new _hop_dong_thau_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauDuocPhamChiTiet"]();
                    this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.push(hopDongThauDuocPhamChiTietDataSource);
                    this.ClearData();
                    if (id) {
                        this.getById(id);
                    }
                    else {
                        this.showGrid = true;
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.splice(0, 1);
                        this.setDataGridView(this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets);
                        this.isCreate = true;
                    }
                    this.gridColumns = [
                        { Field: "DuocPham", Title: "Dược Phẩm", MinWidth: 150, Template: this.duocPhamThauTemplate },
                        { Field: "Gia", Title: "Giá", Width: 150, Template: this.giaTemplate },
                        { Field: "SoLuongDisplay", Title: "Số Lượng", Width: 150 },
                        { Field: 'SuDungTaiBenhVienDisplay', Title: 'Sử Dụng tại BV', Width: 150 },
                        { Field: 'MaDuocPhamBenhVien', Title: 'Mã tại BV', Width: 150, Template: this.maDuocPhamTemplate },
                        // { Field: 'DuocPhamBenhVienPhanNhomId', Title: 'Nhóm dịch vụ', Width: 150 },
                        { Field: "Action", Title: "", Width: 150, Template: this.trangThaiTemplate }
                    ];
                };
                HopDongThauDuocPhamSharedComponent.prototype.setDataGridView = function (dataSource) {
                    this.dataSourceCache = dataSource;
                    this.gridDataSource = {
                        data: this.dataSourceCache,
                        total: 1
                    };
                    if (this.gridHdtDp) {
                        this.gridHdtDp.gridDataSource = Object.assign({}, this.gridDataSource);
                        this.gridHdtDp.setDataSource();
                    }
                };
                HopDongThauDuocPhamSharedComponent.prototype.getSharedData = function () {
                    return this.hopDongThauDuocPham;
                };
                HopDongThauDuocPhamSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        if (resultData.NhapKhoDuocPhamChiTiets.length != 0) {
                            _this.isDisableUpdate = true;
                        }
                        _this.showGrid = true;
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.splice(0, 1);
                        _this.hopDongThauDuocPham = resultData;
                        var len = _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.length;
                        if (len > 0) {
                            for (var i = 0; i < len; i++) {
                                var hopDongChiTietDataSource = _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[i];
                                hopDongChiTietDataSource.SoLuongDisplay =
                                    _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[i].SoLuong.toLocaleString("vi-VI");
                                _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[i].IdGrid = Math.random();
                                hopDongChiTietDataSource.IdGrid = _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[i].IdGrid;
                                if (hopDongChiTietDataSource.SuDungTaiBenhVien == true) {
                                    hopDongChiTietDataSource.SuDungTaiBenhVienDisplay = "Có";
                                }
                                else {
                                    hopDongChiTietDataSource.SuDungTaiBenhVienDisplay = "Không";
                                }
                                _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.push(hopDongChiTietDataSource);
                            }
                            _this._idHopDongThauChiTiet = _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[len - 1].Id + 1;
                            _this.setDataGridView(_this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets);
                        }
                        else {
                            _this.setDataGridView([]);
                        }
                    });
                };
                HopDongThauDuocPhamSharedComponent.prototype.onChangeDuocPham = function (event) {
                    var _this = this;
                    if (event) {
                        this.hopDongThauDuocPhamChiTiet.DuocPham = event.DisplayName;
                        this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien = event.SuDungTaiBenhVien;
                        this.disabledSuDungTaiBenhVien = event.SuDungTaiBenhVien == true;
                        this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = event.MaDuocPhamBenhVien;
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = null;
                        this.isGetDuocPhamDaTao = false;
                        if (event.DuocPhamBenhVienId != null && event.DuocPhamBenhVienId != 0 && event.SuDungTaiBenhVien == true) {
                            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = event.DuocPhamBenhVienId;
                            var phanNhomConId_1 = null;
                            var tenPhanNhomCon_1 = null;
                            this.apiService.get("HopDongThauDuocPham/GetThongTinPhanNhomDuocPhamBenhVien?id=" + event.DuocPhamBenhVienId).subscribe(function (resultData) {
                                if (resultData) {
                                    _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = resultData.DuocPhamBenhVienPhanNhomChaId;
                                    _this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = resultData.TenDuocPhamBenhVienPhanNhomCha;
                                    _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = resultData.DuocPhamBenhVienPhanNhomId;
                                    // this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = resultData.DuocPhamBenhVienPhanNhomConId;
                                    // this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = resultData.TenDuocPhamBenhVienPhanNhomCon;
                                    // this.cboPhanNhomCon.setValueDefaultWhenUpdateDatasource();
                                    phanNhomConId_1 = resultData.DuocPhamBenhVienPhanNhomConId;
                                    tenPhanNhomCon_1 = resultData.TenDuocPhamBenhVienPhanNhomCon;
                                    _this.isGetDuocPhamDaTao = true;
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            }, function () {
                                var self = _this;
                                self.cboPhanNhomCon.queryInfo.ParameterDependencies = "{DuocPhamBenhVienPhanNhomChaId:" + _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId + "}";
                                self.cboPhanNhomCon.getDataForLookup();
                                setTimeout(function () {
                                    self.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = phanNhomConId_1;
                                    self.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = tenPhanNhomCon_1;
                                }, 500);
                            });
                        }
                        else {
                            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = null;
                            this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = null;
                            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = null;
                            this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = null;
                            this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = null;
                        }
                    }
                };
                HopDongThauDuocPhamSharedComponent.prototype.modelChangeSuDungTaiBenhVien = function (event) {
                    this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = null;
                    this.getMaTaoMoiDuocPham();
                };
                HopDongThauDuocPhamSharedComponent.prototype.ConfirmDelete = function (dataItem) {
                    var _this = this;
                    this.validationErrors = [];
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessConfirm, ["xóa"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            if (_this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.length === 1) {
                                _this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                                    disableClose: false,
                                    width: '400px',
                                    data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessConfirm, ["xóa hết"]) }
                                }).afterClosed().subscribe(function (result) {
                                    if (result === 'Yes') {
                                        _this.Delete(dataItem.IdGrid);
                                    }
                                });
                            }
                            else {
                                _this.Delete(dataItem.IdGrid);
                            }
                        }
                    });
                };
                HopDongThauDuocPhamSharedComponent.prototype.Delete = function (id) {
                    this.ClearData();
                    // find position
                    var hopDongThauDuocPhamChiTiet = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets;
                    var maDuocPham = null;
                    for (var _i = 0, hopDongThauDuocPhamChiTiet_1 = hopDongThauDuocPhamChiTiet; _i < hopDongThauDuocPhamChiTiet_1.length; _i++) {
                        var chiTiet = hopDongThauDuocPhamChiTiet_1[_i];
                        if (chiTiet.IdGrid === id) {
                            var position = hopDongThauDuocPhamChiTiet.indexOf(chiTiet);
                            if (chiTiet.DuocPhamBenhVienId == null || chiTiet.DuocPhamBenhVienId == null) {
                                maDuocPham = chiTiet.MaDuocPhamBenhVien;
                            }
                            break;
                        }
                    }
                    // delete by its position
                    this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.splice(position, 1);
                    this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.splice(position, 1);
                    if (maDuocPham != null && maDuocPham != "") {
                        this.arrayMaDuocPhamTemp = this.arrayMaDuocPhamTemp.filter(function (x) { return x != maDuocPham; });
                    }
                    this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["NhapXuatKhoMessage"].MessageRemoveItemGrid);
                };
                HopDongThauDuocPhamSharedComponent.prototype.ThemDuocPham = function () {
                    this.showFormDetail = !this.showFormDetail;
                    if (this.validationErrors == null) {
                        this.validationErrors = [];
                    }
                    else {
                        if (this.validationErrors != null && this.validationErrors.length != 0) {
                            this.validationErrors = [];
                        }
                    }
                };
                HopDongThauDuocPhamSharedComponent.prototype.BindValue = function (dataItem) {
                    this.hopDongThauDuocPhamChiTiet = new _hop_dong_thau_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauDuocPhamChiTiet"]();
                    if (this.validationErrors == null) {
                        this.validationErrors = [];
                    }
                    else {
                        if (this.validationErrors != null && this.validationErrors.length != 0) {
                            this.validationErrors = [];
                        }
                    }
                    this.hopDongThauDuocPhamChiTiet.DuocPhamId = dataItem.DuocPhamId;
                    this.hopDongThauDuocPhamChiTiet.DuocPham = dataItem.DuocPham;
                    this.hopDongThauDuocPhamChiTiet.Gia = dataItem.Gia;
                    this.hopDongThauDuocPhamChiTiet.SoLuong = dataItem.SoLuong;
                    this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien = dataItem.SuDungTaiBenhVien;
                    if (this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien == true) {
                        this.disabledSuDungTaiBenhVien = true;
                        //BVHD-3454
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = dataItem.DuocPhamBenhVienId;
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = dataItem.DuocPhamBenhVienPhanNhomId;
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = dataItem.DuocPhamBenhVienPhanNhomChaId;
                        this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = dataItem.TenDuocPhamBenhVienPhanNhomCha;
                        var self = this;
                        setTimeout(function () {
                            self.cboPhanNhomCon.getDataForLookup();
                            self.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = dataItem.DuocPhamBenhVienPhanNhomConId;
                            self.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = dataItem.TenDuocPhamBenhVienPhanNhomCon;
                        }, 200);
                    }
                    else {
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = null;
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = null;
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = null;
                        this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = null;
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = null;
                        this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = null;
                    }
                    this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = dataItem.MaDuocPhamBenhVien;
                    this.idUpdate = dataItem.IdGrid;
                    this.isUpdate = true;
                    this.showFormDetail = true;
                };
                HopDongThauDuocPhamSharedComponent.prototype.ClearData = function () {
                    this.hopDongThauDuocPham.Nam = (new Date()).getFullYear();
                    this.showFormDetail = false;
                    this.hopDongThauDuocPhamChiTiet.DuocPhamId = null;
                    this.hopDongThauDuocPhamChiTiet.DuocPham = null;
                    this.hopDongThauDuocPhamChiTiet.Gia = null;
                    this.hopDongThauDuocPhamChiTiet.SoLuong = null;
                    this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien = false;
                    this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = null;
                    //BVHD-3454
                    this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId = null;
                    this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = null;
                    this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = null;
                    this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = null;
                    this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId = null;
                    this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha = null;
                    this.isUpdate = false;
                };
                HopDongThauDuocPhamSharedComponent.prototype.Add = function () {
                    var _this = this;
                    // add into grid
                    this._idHopDongThauChiTiet = this._idHopDongThauChiTiet + 1;
                    var hopDongChiTietDataSource = this.hopDongThauDuocPhamChiTiet;
                    //this.validationFormClient(hopDongChiTietDataSource, 0, 0);
                    if (this.hopDongThauDuocPhamChiTiet.DuocPhamId != null
                        && this.hopDongThauDuocPhamChiTiet.DuocPhamId != 0
                        && this.checkExist(this.hopDongThauDuocPhamChiTiet.DuocPhamId)) {
                        this.notificationService.showError("Dược phẩm này đã có trong danh sách thầu chi tiết");
                        return;
                    }
                    //if (hopDongChiTietDataSource.DuocPhamId != null) {
                    this.validationErrorsForDetail = [];
                    this.hopDongThauDuocPhamChiTiet.MaDuocPhamTemps = [];
                    this.arrayMaDuocPhamTemp.forEach(function (element) {
                        _this.hopDongThauDuocPhamChiTiet.MaDuocPhamTemps.push(element);
                    });
                    this.apiService.post("HopDongThauDuocPham/KiemTraHopDongThauDuocPhamChiTiet", this.hopDongThauDuocPhamChiTiet).subscribe(function (resultValid) {
                        // this.apiService.post<any>("HopDongThauDuocPham/GetHieuLucDuocPham?id=" + hopDongChiTietDataSource.DuocPhamId).subscribe(resultData => {
                        //     if (resultData) {
                        //         if (resultData === false) {
                        //             if (this.validationErrorsForDetail == null) {
                        //                 this.validationErrorsForDetail = [];
                        //             }
                        //             this.validationErrorsForDetail.push({ Field: "DuocPhamId", Message: "Dược phẩm này đã hết hiệu lực" });
                        //         }
                        hopDongChiTietDataSource.HopDongThauDuocPhamId = _this.hopDongThauDuocPham.Id;
                        // update Id cho row, rất quan trọng, nếu ko có dòng này thì row sẽ bị xử lý bậy bạ
                        hopDongChiTietDataSource.Id = _this._idHopDongThauChiTiet;
                        //if (!this.validationErrorsForDetail) {
                        hopDongChiTietDataSource.GiaDisplay = hopDongChiTietDataSource.Gia.toLocaleString("vi-VI");
                        hopDongChiTietDataSource.SoLuongDisplay = hopDongChiTietDataSource.SoLuong.toLocaleString("vi-VI");
                        hopDongChiTietDataSource.IdGrid = Math.random();
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.push(hopDongChiTietDataSource);
                        // add into data
                        var hopDongChiTiet = new _hop_dong_thau_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauDuocPhamChiTiet"]();
                        hopDongChiTiet.HopDongThauDuocPhamId = _this.hopDongThauDuocPham.Id;
                        hopDongChiTiet.DuocPhamId = _this.hopDongThauDuocPhamChiTiet.DuocPhamId;
                        hopDongChiTiet.DuocPham = hopDongChiTietDataSource.DuocPham;
                        hopDongChiTiet.Gia = _this.hopDongThauDuocPhamChiTiet.Gia;
                        hopDongChiTiet.GiaDisplay = hopDongChiTietDataSource.GiaDisplay;
                        hopDongChiTiet.SoLuong = _this.hopDongThauDuocPhamChiTiet.SoLuong;
                        hopDongChiTiet.SoLuongDisplay = hopDongChiTietDataSource.SoLuongDisplay;
                        hopDongChiTiet.SuDungTaiBenhVien = hopDongChiTietDataSource.SuDungTaiBenhVien;
                        if (hopDongChiTiet.SuDungTaiBenhVien == true) {
                            hopDongChiTiet.SuDungTaiBenhVienDisplay = "Có";
                            hopDongChiTiet.DuocPhamBenhVienId = _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId;
                            hopDongChiTiet.DuocPhamBenhVienPhanNhomId = _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId;
                            hopDongChiTiet.DuocPhamBenhVienPhanNhomConId = _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId;
                            hopDongChiTiet.TenDuocPhamBenhVienPhanNhomCon = _this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon;
                            hopDongChiTiet.DuocPhamBenhVienPhanNhomChaId = _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId;
                            hopDongChiTiet.TenDuocPhamBenhVienPhanNhomCha = _this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha;
                            _this.arrayMaDuocPhamTemp.push(_this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien);
                        }
                        else {
                            hopDongChiTiet.SuDungTaiBenhVienDisplay = "Không";
                        }
                        hopDongChiTiet.MaDuocPhamBenhVien = hopDongChiTietDataSource.MaDuocPhamBenhVien;
                        hopDongChiTiet.SoLuongDaCap = 0;
                        hopDongChiTiet.IdGrid = hopDongChiTietDataSource.IdGrid;
                        if (_this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.length > 0) {
                            if (_this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[0].DuocPham === null) {
                                _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.splice(0, 1);
                            }
                        }
                        _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.push(hopDongChiTiet);
                        for (var _i = 0, _a = _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets; _i < _a.length; _i++) {
                            var chiTiet = _a[_i];
                            if (chiTiet.Id === _this._idHopDongThauChiTiet) {
                                var position = _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.indexOf(chiTiet);
                                _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].Id = 0;
                                break;
                            }
                        }
                        _this.RemoveRedundantItem();
                        // clear data on screen
                        _this.setDataGridView(_this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets);
                        _this.hopDongThauDuocPhamChiTiet = new _hop_dong_thau_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauDuocPhamChiTiet"]();
                        _this.ClearData();
                        //}
                        //     }
                        // },
                        //     (err: any) => {
                        //         this.notificationService.showError(err.Message);
                        //     });
                    }, function (err) {
                        _this.validationErrorsForDetail = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                    //}
                };
                HopDongThauDuocPhamSharedComponent.prototype.Update = function () {
                    var _this = this;
                    // update into grid
                    this.hopDongThauDuocPhamChiTiet.GiaDisplay = this.hopDongThauDuocPhamChiTiet.Gia.toLocaleString("vi-VI");
                    this.hopDongThauDuocPhamChiTiet.SoLuongDisplay = this.hopDongThauDuocPhamChiTiet.SoLuong.toLocaleString("vi-VI");
                    var id = this.idUpdate;
                    for (var _i = 0, _a = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets; _i < _a.length; _i++) {
                        var chiTiet = _a[_i];
                        if (chiTiet.IdGrid === id) {
                            var position = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.indexOf(chiTiet);
                            break;
                        }
                    }
                    var hopDongChiTietDataSource = this.hopDongThauDuocPhamChiTiet;
                    //this.validationFormClient(hopDongChiTietDataSource, 1, position);
                    if (this.hopDongThauDuocPhamChiTiet.DuocPhamId != null
                        && this.hopDongThauDuocPhamChiTiet.DuocPhamId != 0
                        && this.checkExistOnAmendation(this.hopDongThauDuocPhamChiTiet.DuocPhamId, position)) {
                        this.notificationService.showError("Dược phẩm này đã có trong danh sách thầu chi tiết");
                        return;
                    }
                    //if (hopDongChiTietDataSource.DuocPhamId) {
                    this.apiService.post("HopDongThauDuocPham/KiemTraHopDongThauDuocPhamChiTiet", this.hopDongThauDuocPhamChiTiet).subscribe(function (resultValid) {
                        // this.apiService.post<any>("HopDongThauDuocPham/GetHieuLucDuocPham?id=" + hopDongChiTietDataSource.DuocPhamId).subscribe(resultData => {
                        //     if (resultData) {
                        //         if (resultData === false) {
                        //             if (this.validationErrors == null) {
                        //                 this.validationErrors = [];
                        //             }
                        //             this.validationErrors.push({ Field: "DuocPhamId", Message: "Dược phẩm này đã hết hiệu lực" });
                        //         }
                        //         if (!this.validationErrors) {
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPham = hopDongChiTietDataSource.DuocPham;
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamId =
                            hopDongChiTietDataSource.DuocPhamId;
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].Gia = hopDongChiTietDataSource.Gia;
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].GiaDisplay =
                            _this.hopDongThauDuocPhamChiTiet.GiaDisplay;
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SoLuong = hopDongChiTietDataSource.SoLuong;
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SoLuongDisplay =
                            _this.hopDongThauDuocPhamChiTiet.SoLuongDisplay;
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SuDungTaiBenhVien = hopDongChiTietDataSource.SuDungTaiBenhVien;
                        if (_this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SuDungTaiBenhVien == true) {
                            _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SuDungTaiBenhVienDisplay = "Có";
                            _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamBenhVienId = _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId;
                            _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamBenhVienPhanNhomId = _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId;
                            _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamBenhVienPhanNhomConId = _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId;
                            _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].TenDuocPhamBenhVienPhanNhomCon = _this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon;
                            _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].DuocPhamBenhVienPhanNhomChaId = _this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId;
                            _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].TenDuocPhamBenhVienPhanNhomCha = _this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCha;
                            _this.arrayMaDuocPhamTemp.push(_this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien);
                        }
                        else {
                            _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].SuDungTaiBenhVienDisplay = "Không";
                        }
                        _this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[position].MaDuocPhamBenhVien = hopDongChiTietDataSource.MaDuocPhamBenhVien;
                        _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].DuocPham = hopDongChiTietDataSource.DuocPham;
                        _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].DuocPhamId = hopDongChiTietDataSource.DuocPhamId;
                        _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].Gia = hopDongChiTietDataSource.Gia;
                        _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].GiaDisplay = hopDongChiTietDataSource.GiaDisplay;
                        _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].SoLuong = hopDongChiTietDataSource.SoLuong;
                        _this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[position].SoLuongDisplay =
                            hopDongChiTietDataSource.SoLuongDisplay;
                        // update into data
                        // let hopDongChiTiets = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets;
                        // let hopDongThauDuocPhamChiTiet = new HopDongThauDuocPhamChiTiet();
                        // let hopDongThauDuocPham = new HopDongThauDuocPham();
                        // hopDongThauDuocPham = this.hopDongThauDuocPham;
                        // hopDongThauDuocPhamChiTiet = this.hopDongThauDuocPhamChiTiet;
                        // hopDongChiTiets.forEach(hopDongChiTiet => {
                        //     if (hopDongChiTiet.IdGrid === id) {
                        //         hopDongChiTiet.HopDongThauDuocPhamId = hopDongThauDuocPham.Id;
                        //         hopDongChiTiet.DuocPhamId = hopDongThauDuocPhamChiTiet.DuocPhamId;
                        //         hopDongChiTiet.Gia = hopDongThauDuocPhamChiTiet.Gia;
                        //         hopDongChiTiet.SoLuong = hopDongThauDuocPhamChiTiet.SoLuong;
                        //     }
                        // });
                        // this.RemoveRedundantItem();
                        _this.setDataGridView(_this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets);
                        // clear
                        _this.ClearData();
                        //}
                        //     }
                        // },
                        //     (err: any) => {
                        //         this.notificationService.showError(err.Message);
                        //     });
                    }, function (err) {
                        _this.validationErrorsForDetail = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                    //}
                };
                HopDongThauDuocPhamSharedComponent.prototype.RemoveRedundantItem = function () {
                    var len = this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.length;
                    if (this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[len - 1].Id === 0
                        && this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets[len - 1].DuocPham === null) {
                        this.hopDongThauDuocPham.HopDongThauDuocPhamChiTiets.splice(len - 1, 1);
                    }
                    var lenDataSource = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.length;
                    if (this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[lenDataSource - 1].Id === 0
                        && this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[lenDataSource - 1].DuocPham === null) {
                        this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.splice(lenDataSource - 1, 1);
                    }
                };
                HopDongThauDuocPhamSharedComponent.prototype.validationFormClient = function (dataval, type, position) {
                    // type = 0 là add, type = 1 là update
                    this.validationErrors = null;
                    var array = [];
                    if (dataval) {
                        if (dataval.DuocPhamId == null || dataval.DuocPhamId == 0)
                            array.push({ Field: "DuocPhamId", Message: "Yêu cầu chọn dược phẩm" });
                        if (dataval.Gia == null || dataval.Gia == 0)
                            array.push({ Field: "Gia", Message: "Giá yêu cầu nhập" });
                        if (dataval.SoLuong == null || dataval.SoLuong == 0)
                            array.push({ Field: "SoLuong", Message: "Số lượng yêu cầu nhập" });
                    }
                    if (type === 0) {
                        if (this.checkExist(dataval.DuocPhamId)) {
                            array.push({ Field: "DuocPhamId", Message: "Dược phẩm này đã có trong danh sách thầu chi tiết" });
                        }
                    }
                    if (type === 1) {
                        if (this.checkExistOnAmendation(dataval.DuocPhamId, position)) {
                            array.push({ Field: "DuocPhamId", Message: "Dược phẩm này đã có trong danh sách thầu chi tiết" });
                        }
                    }
                    if (this.disabledSuDungTaiBenhVien == false && this.hopDongThauDuocPhamChiTiet.SuDungTaiBenhVien == true) {
                        if (this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien == null || this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien == "") {
                            this.validationErrorsForDetail.push({ Field: 'MaDuocPhamBenhVien', Message: 'Yêu cầu nhập Mã dược phẩm bệnh viện' });
                            // this.apiService.post<any>("HopDongThauDuocPham/ValidateHopDongThauDuocPham",this.hopDongThauDuocPhamChiTiet).subscribe(resultData => {
                            //     if (resultData) {
                            //     }
                            //       this.validationErrorsForDetail.push({ Field: 'MaDuocPhamBenhVien', Message: 'Yêu cầu nhập Mã dược phẩm bệnh viện' });
                            //     });
                        }
                    }
                    if (array.length > 0)
                        this.validationErrors = array;
                };
                HopDongThauDuocPhamSharedComponent.prototype.checkExist = function (duocPhamId) {
                    var len = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.length;
                    for (var i = 0; i < len; i++) {
                        if (this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[i].DuocPhamId === duocPhamId) {
                            return true;
                        }
                    }
                    return false;
                };
                HopDongThauDuocPhamSharedComponent.prototype.checkExistOnAmendation = function (duocPhamId, position) {
                    var len = this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets.length;
                    for (var i = 0; i < len; i++) {
                        if (i === position) {
                            continue;
                        }
                        if (this.hopDongThauDuocPhamSource.HopDongThauDuocPhamChiTiets[i].DuocPhamId === duocPhamId) {
                            return true;
                        }
                    }
                    return false;
                };
                HopDongThauDuocPhamSharedComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/hop-dong-thau/duoc-pham']);
                };
                HopDongThauDuocPhamSharedComponent.prototype.onKeyAddDp = function (keyInput) {
                    if (keyInput.keyCode === 13) {
                        if (!this.isUpdate) {
                            if (this.duocPhamDisabled !== true) {
                                this.Add();
                            }
                            else {
                                this.duocPhamDisabled = false;
                            }
                        }
                        else {
                            if (this.duocPhamDisabled !== true) {
                                this.Update();
                            }
                            else {
                                this.duocPhamDisabled = false;
                            }
                        }
                    }
                };
                HopDongThauDuocPhamSharedComponent.prototype.openComboboxHdt = function (isOpen) {
                    this.duocPhamDisabled = isOpen;
                };
                HopDongThauDuocPhamSharedComponent.prototype.ngayChange = function (dataItem, laCongBo) {
                    this.validationErrors = [];
                    if (laCongBo) {
                        if (dataItem != undefined && dataItem != null) {
                            this.hopDongThauDuocPham.NgayHieuLuc = dataItem;
                        }
                        else {
                            this.hopDongThauDuocPham.NgayHieuLuc = null;
                        }
                    }
                    else {
                        if (dataItem != undefined && dataItem != null) {
                            this.hopDongThauDuocPham.CongBo = dataItem;
                        }
                        else {
                            this.hopDongThauDuocPham.CongBo = null;
                        }
                    }
                };
                // BVHD-3454
                HopDongThauDuocPhamSharedComponent.prototype.nhomChaChange = function (duocPhamBenhVienPhanNhomChaId) {
                    if (!this.isGetDuocPhamDaTao) {
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomConId = null;
                        this.hopDongThauDuocPhamChiTiet.TenDuocPhamBenhVienPhanNhomCon = null;
                    }
                    else {
                        this.isGetDuocPhamDaTao = false;
                    }
                    if (duocPhamBenhVienPhanNhomChaId != undefined && duocPhamBenhVienPhanNhomChaId != null) {
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = duocPhamBenhVienPhanNhomChaId;
                    }
                    else {
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = null;
                    }
                    this.cboPhanNhomCon.queryInfo.ParameterDependencies = "{DuocPhamBenhVienPhanNhomChaId:" + this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId + "}";
                    this.cboPhanNhomCon.getDataForLookup();
                    this.getMaTaoMoiDuocPham(null, this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId);
                };
                HopDongThauDuocPhamSharedComponent.prototype.nhomConChange = function (duocPhamBenhVienPhanNhomConId) {
                    if (duocPhamBenhVienPhanNhomConId != undefined && duocPhamBenhVienPhanNhomConId != null) {
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = duocPhamBenhVienPhanNhomConId;
                    }
                    else {
                        this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId = this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomChaId;
                    }
                    this.getMaTaoMoiDuocPham(null, this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId);
                };
                HopDongThauDuocPhamSharedComponent.prototype.getMaTaoMoiDuocPham = function (tenDuocPham, phanNhomId) {
                    var _this = this;
                    if (tenDuocPham === void 0) { tenDuocPham = null; }
                    if (phanNhomId === void 0) { phanNhomId = null; }
                    if ((this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId == null || this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienId == 0)) { //&& !this.disabledSuDungTaiBenhVien
                        var tenDuocPhamTemp = tenDuocPham == null ? this.hopDongThauDuocPhamChiTiet.DuocPham : tenDuocPham;
                        var phanNhomIdTemp = phanNhomId == null ? this.hopDongThauDuocPhamChiTiet.DuocPhamBenhVienPhanNhomId : phanNhomId;
                        if (tenDuocPhamTemp != null && phanNhomIdTemp != null) {
                            var obj = {
                                TenDuocPham: tenDuocPhamTemp,
                                PhanNhomId: phanNhomIdTemp,
                                MaDuocPhamTemps: this.arrayMaDuocPhamTemp
                            };
                            this.apiService.post("DuocPhamBenhVien/GetMaTaoMoiDuocPham", obj).subscribe(function (resultData) {
                                if (resultData) {
                                    _this.hopDongThauDuocPhamChiTiet.MaDuocPhamBenhVien = resultData;
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    }
                };
                return HopDongThauDuocPhamSharedComponent;
            }());
            HopDongThauDuocPhamSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridHdtDp', { static: false })
            ], HopDongThauDuocPhamSharedComponent.prototype, "gridHdtDp", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], HopDongThauDuocPhamSharedComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
            ], HopDongThauDuocPhamSharedComponent.prototype, "giaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocPhamThauTemplate', { static: true })
            ], HopDongThauDuocPhamSharedComponent.prototype, "duocPhamThauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maDuocPhamTemplate', { static: true })
            ], HopDongThauDuocPhamSharedComponent.prototype, "maDuocPhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cboPhanNhomCon', { read: src_app_shared_component_dropdowns_combobox_tree_combobox_tree_component__WEBPACK_IMPORTED_MODULE_15__["ComboboxTreeComponent"], static: false })
            ], HopDongThauDuocPhamSharedComponent.prototype, "cboPhanNhomCon", void 0);
            HopDongThauDuocPhamSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hop-dong-thau-duoc-pham-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hop-dong-thau-duoc-pham-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hop-dong-thau-duoc-pham-shared.component.scss */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.scss")).default]
                })
            ], HopDongThauDuocPhamSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.scss": 
        /*!********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.scss ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9ob3AtZG9uZy10aGF1L2R1b2MtcGhhbS9ob3AtZG9uZy10aGF1LWR1b2MtcGhhbS11cGRhdGUvaG9wLWRvbmctdGhhdS1kdW9jLXBoYW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: HopDongThauDuocPhamUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauDuocPhamUpdateComponent", function () { return HopDongThauDuocPhamUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HopDongThauDuocPhamUpdateComponent = /** @class */ (function () {
                function HopDongThauDuocPhamUpdateComponent() {
                }
                HopDongThauDuocPhamUpdateComponent.prototype.ngOnInit = function () {
                };
                return HopDongThauDuocPhamUpdateComponent;
            }());
            HopDongThauDuocPhamUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hop-dong-thau-duoc-pham-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hop-dong-thau-duoc-pham-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hop-dong-thau-duoc-pham-update.component.scss */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.scss")).default]
                })
            ], HopDongThauDuocPhamUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham.model.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham.model.ts ***!
          \************************************************************************************************/
        /*! exports provided: HopDongThauDuocPham, HopDongThauDuocPhamChiTiet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauDuocPham", function () { return HopDongThauDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauDuocPhamChiTiet", function () { return HopDongThauDuocPhamChiTiet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var HopDongThauDuocPham = /** @class */ (function () {
                function HopDongThauDuocPham(Id, NhaThauId, NhaThau, SoHopDong, SoQuyetDinh, CongBo, NgayKy, NgayHieuLuc, NgayHetHan, LoaiThau, TenLoaiThau, LoaiThuocThau, TenLoaiThuocThau, NhomThau, GoiThau, Nam, HopDongThauDuocPhamChiTiets, NhapKhoDuocPhamChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (NhaThauId === void 0) { NhaThauId = 0; }
                    if (NhaThau === void 0) { NhaThau = null; }
                    if (SoHopDong === void 0) { SoHopDong = null; }
                    if (SoQuyetDinh === void 0) { SoQuyetDinh = null; }
                    if (CongBo === void 0) { CongBo = null; }
                    if (NgayKy === void 0) { NgayKy = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayHetHan === void 0) { NgayHetHan = null; }
                    if (LoaiThau === void 0) { LoaiThau = null; }
                    if (TenLoaiThau === void 0) { TenLoaiThau = null; }
                    if (LoaiThuocThau === void 0) { LoaiThuocThau = null; }
                    if (TenLoaiThuocThau === void 0) { TenLoaiThuocThau = null; }
                    if (NhomThau === void 0) { NhomThau = null; }
                    if (GoiThau === void 0) { GoiThau = null; }
                    if (Nam === void 0) { Nam = 0; }
                    if (HopDongThauDuocPhamChiTiets === void 0) { HopDongThauDuocPhamChiTiets = []; }
                    if (NhapKhoDuocPhamChiTiets === void 0) { NhapKhoDuocPhamChiTiets = []; }
                    this.Id = Id;
                    this.NhaThauId = NhaThauId;
                    this.NhaThau = NhaThau;
                    this.SoHopDong = SoHopDong;
                    this.SoQuyetDinh = SoQuyetDinh;
                    this.CongBo = CongBo;
                    this.NgayKy = NgayKy;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayHetHan = NgayHetHan;
                    this.LoaiThau = LoaiThau;
                    this.TenLoaiThau = TenLoaiThau;
                    this.LoaiThuocThau = LoaiThuocThau;
                    this.TenLoaiThuocThau = TenLoaiThuocThau;
                    this.NhomThau = NhomThau;
                    this.GoiThau = GoiThau;
                    this.Nam = Nam;
                    this.HopDongThauDuocPhamChiTiets = HopDongThauDuocPhamChiTiets;
                    this.NhapKhoDuocPhamChiTiets = NhapKhoDuocPhamChiTiets;
                }
                return HopDongThauDuocPham;
            }());
            var HopDongThauDuocPhamChiTiet = /** @class */ (function () {
                function HopDongThauDuocPhamChiTiet(HopDongThauDuocPhamId, DuocPhamId, DuocPham, Gia, GiaDisplay, SoLuong, SoLuongDisplay, SoLuongDaCap, Id, IdGrid, SuDungTaiBenhVien, SuDungTaiBenhVienDisplay, //SuDungTaiBenhVien ==true ?"Có":"Không",
                MaDuocPhamBenhVien, 
                // public DuocPhamBenhVienPhanNhomId : number = null  ,
                // public DuocPhamBenhVienPhanNhomModelText: string = null,
                // BVHD-3454
                DuocPhamBenhVienId, DuocPhamBenhVienPhanNhomId, DuocPhamBenhVienPhanNhomConId, TenDuocPhamBenhVienPhanNhomCon, DuocPhamBenhVienPhanNhomChaId, TenDuocPhamBenhVienPhanNhomCha, MaDuocPhamTemps) {
                    if (HopDongThauDuocPhamId === void 0) { HopDongThauDuocPhamId = 0; }
                    if (DuocPhamId === void 0) { DuocPhamId = 0; }
                    if (DuocPham === void 0) { DuocPham = null; }
                    if (Gia === void 0) { Gia = 0; }
                    if (GiaDisplay === void 0) { GiaDisplay = null; }
                    if (SoLuong === void 0) { SoLuong = 0; }
                    if (SoLuongDisplay === void 0) { SoLuongDisplay = null; }
                    if (SoLuongDaCap === void 0) { SoLuongDaCap = 0; }
                    if (Id === void 0) { Id = 0; }
                    if (IdGrid === void 0) { IdGrid = null; }
                    if (SuDungTaiBenhVien === void 0) { SuDungTaiBenhVien = false; }
                    if (SuDungTaiBenhVienDisplay === void 0) { SuDungTaiBenhVienDisplay = null; }
                    if (MaDuocPhamBenhVien === void 0) { MaDuocPhamBenhVien = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (DuocPhamBenhVienPhanNhomId === void 0) { DuocPhamBenhVienPhanNhomId = null; }
                    if (DuocPhamBenhVienPhanNhomConId === void 0) { DuocPhamBenhVienPhanNhomConId = null; }
                    if (TenDuocPhamBenhVienPhanNhomCon === void 0) { TenDuocPhamBenhVienPhanNhomCon = null; }
                    if (DuocPhamBenhVienPhanNhomChaId === void 0) { DuocPhamBenhVienPhanNhomChaId = null; }
                    if (TenDuocPhamBenhVienPhanNhomCha === void 0) { TenDuocPhamBenhVienPhanNhomCha = null; }
                    if (MaDuocPhamTemps === void 0) { MaDuocPhamTemps = []; }
                    this.HopDongThauDuocPhamId = HopDongThauDuocPhamId;
                    this.DuocPhamId = DuocPhamId;
                    this.DuocPham = DuocPham;
                    this.Gia = Gia;
                    this.GiaDisplay = GiaDisplay;
                    this.SoLuong = SoLuong;
                    this.SoLuongDisplay = SoLuongDisplay;
                    this.SoLuongDaCap = SoLuongDaCap;
                    this.Id = Id;
                    this.IdGrid = IdGrid;
                    this.SuDungTaiBenhVien = SuDungTaiBenhVien;
                    this.SuDungTaiBenhVienDisplay = SuDungTaiBenhVienDisplay;
                    this.MaDuocPhamBenhVien = MaDuocPhamBenhVien;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
                    this.DuocPhamBenhVienPhanNhomConId = DuocPhamBenhVienPhanNhomConId;
                    this.TenDuocPhamBenhVienPhanNhomCon = TenDuocPhamBenhVienPhanNhomCon;
                    this.DuocPhamBenhVienPhanNhomChaId = DuocPhamBenhVienPhanNhomChaId;
                    this.TenDuocPhamBenhVienPhanNhomCha = TenDuocPhamBenhVienPhanNhomCha;
                    this.MaDuocPhamTemps = MaDuocPhamTemps;
                }
                return HopDongThauDuocPhamChiTiet;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham.module.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham.module.ts ***!
          \*************************************************************************************************/
        /*! exports provided: HopDongThauDuocPhamModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauDuocPhamModule", function () { return HopDongThauDuocPhamModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _hop_dong_thau_duoc_pham_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hop-dong-thau-duoc-pham.service */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _hop_dong_thau_duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hop-dong-thau-duoc-pham-routing.module */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-routing.module.ts");
            /* harmony import */ var _hop_dong_thau_duoc_pham_list_hop_dong_thau_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component.ts");
            /* harmony import */ var _hop_dong_thau_duoc_pham_create_hop_dong_thau_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component.ts");
            /* harmony import */ var _hop_dong_thau_duoc_pham_update_hop_dong_thau_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component.ts");
            /* harmony import */ var _hop_dong_thau_duoc_pham_shared_hop_dong_thau_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham-shared/hop-dong-thau-duoc-pham-shared.component.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            var HopDongThauDuocPhamModule = /** @class */ (function () {
                function HopDongThauDuocPhamModule() {
                }
                return HopDongThauDuocPhamModule;
            }());
            HopDongThauDuocPhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _hop_dong_thau_duoc_pham_list_hop_dong_thau_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_9__["HopDongThauDuocPhamListComponent"],
                        _hop_dong_thau_duoc_pham_create_hop_dong_thau_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_10__["HopDongThauDuocPhamCreateComponent"],
                        _hop_dong_thau_duoc_pham_update_hop_dong_thau_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_11__["HopDongThauDuocPhamUpdateComponent"],
                        _hop_dong_thau_duoc_pham_shared_hop_dong_thau_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_12__["HopDongThauDuocPhamSharedComponent"]
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
                        _hop_dong_thau_duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_8__["HopDongThauDuocPhamRoutingModule"]
                    ],
                    providers: [
                        _hop_dong_thau_duoc_pham_service__WEBPACK_IMPORTED_MODULE_5__["HopDongThauDuocPhamService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _hop_dong_thau_duoc_pham_service__WEBPACK_IMPORTED_MODULE_5__["HopDongThauDuocPhamService"] },
                    ]
                })
            ], HopDongThauDuocPhamModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham.service.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham.service.ts ***!
          \**************************************************************************************************/
        /*! exports provided: HopDongThauDuocPhamService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauDuocPhamService", function () { return HopDongThauDuocPhamService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var HopDongThauDuocPhamService = /** @class */ (function (_super) {
                __extends(HopDongThauDuocPhamService, _super);
                function HopDongThauDuocPhamService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'HopDongThauDuocPham';
                    return _this;
                }
                return HopDongThauDuocPhamService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            HopDongThauDuocPhamService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            HopDongThauDuocPhamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], HopDongThauDuocPhamService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-hop-dong-thau-duoc-pham-hop-dong-thau-duoc-pham-module-es2015.js.map
//# sourceMappingURL=danh-muc-hop-dong-thau-duoc-pham-hop-dong-thau-duoc-pham-module-es5.js.map
//# sourceMappingURL=danh-muc-hop-dong-thau-duoc-pham-hop-dong-thau-duoc-pham-module-es5.js.map