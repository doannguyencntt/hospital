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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ke-toan-duyet-nhap-kho-vat-tu-duyet-nhap-kho-module~nhap-xuat-vat-tu-nhap-kho-nhap-kho-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.html": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.html ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Danh Sách Vật Tư Đã Tạo Từ Các Nhà Cung Cấp</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"py-1\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\" #gridVatTuNCC\n            [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\">\n        </app-grid>\n        <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #giaTemplate let-dataItem>\n            {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n\n        <ng-template #thanhTienTruocVatTemplate let-dataItem>\n            {{dataItem.ThanhTienTruocVat | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n        <ng-template #thanhTienSauVatTemplate let-dataItem>\n            {{dataItem.ThanhTienSauVat | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n    </div>\n    <ng-template #nhomDisplayGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n</mat-dialog-content>\n<!-- \n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" (click)=\"close()\" mat-stroked-button color=\"primary\" mat-dialog-close>Đóng</button>\n</mat-dialog-actions> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.html": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.html ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''},\n            {Title:'Vật Tư',Path:''},\n            {Title:'Nhập Kho',Path:'/nhap-xuat/vat-tu/nhap-kho', queryParams: {holdQuery : true}, Active: true}\n        ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<!-- <app-nhap-kho-share [isUpdate]=\"false\"></app-nhap-kho-share> -->\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Nhập Kho Vật Tư</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-nhap-kho-share [isUpdate]=\"false\" [validationErrors]=\"validationErrors\"></app-nhap-kho-share>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"create()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.html": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.html ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs\n                [crumbs]=\"[ {Title:'Nhập Xuất',Path:''},{Title:'Vật Tư',Path:''},{Title:'Nhập Kho',Path:'/nhap-xuat/vat-tu/nhap-kho', Active: true}]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #parentGrid baseRoute=\"nhap-xuat/vat-tu/nhap-kho\" [sort]=\"sortNhapKho\" [gridColumns]=\"gridColumns\"\n                [lazyLoadPage]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [useActionDefault]=\"false\"\n                [detailTemplate]=\"detailTemplate\" [additionalSearchString]=\"additionalSearchString\">\n            </app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"nhap-xuat/duoc-pham/nhap-kho\" [groups]=\"groups\" [gridColumns]=\"gridChildColumns\"\n                    pageSize=\"5\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [sort]=\"sortNhapKhoChild\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [urlGetData]=\"urlGetDataGridChild\"\n                    [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [additionalSearchString]=\"dataItem.Id\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, true)\" id=\"DangChoDuyetId\"\n                        [(model)]=\"nhapKho.DangChoDuyet\" class=\"ml-2\" label=\"Đang chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, true)\" id=\"TuChoiDuyetId\"\n                        [(model)]=\"nhapKho.TuChoiDuyet\" class=\"ml-2\" label=\"Từ chối duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, false, true)\" id=\"DaDuyetId\"\n                        [(model)]=\"nhapKho.DaDuyet\" class=\"ml-2\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n                    <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"nhapKho.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                    </div>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeNhap\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"nhapKho.RangeNhap\" label=\"Ngày nhập từ ngày - Đến ngày\"\n                        (keyup)=\"onKeyNgayNhap($event)\" (modelChange)=\"changeNgayNhapRange($event)\"\n                        (blur)=\"blur($event)\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeDuyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        (blur)=\"blur($event)\" [(model)]=\"nhapKho.RangeDuyet\" label=\"Ngày duyệt từ ngày - Đến ngày\"\n                        (keyup)=\"onKeyNgayDuyet($event)\" (modelChange)=\"changeNgayDuyetRange($event)\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                        title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button (click)=\"themMoiNhapKho()\" class=\"mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab\n                        kendoTooltip title=\"Thêm\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n\n                </div>\n            </ng-template>\n\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>\n\n<ng-template #soChungTuTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">\n        {{dataItem.SoChungTu}}</a>\n</ng-template>\n\n<ng-template #soPhieuTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">\n        {{dataItem.SoPhieu}}</a>\n</ng-template>\n\n<ng-template #ngayNhapTemplate let-dataItem>\n    {{dataItem.NgayNhapDisplay}}\n</ng-template>\n\n<ng-template #ngayhdTemplate let-dataItem>\n    {{dataItem.NgayHoaDonDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetTemplate let-dataItem>\n    {{dataItem.NgayDuyetDisplay}}\n</ng-template>\n\n<ng-template #giaTemplate let-dataItem>\n    {{dataItem.GiaNhap | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n\n<!-- <ng-template #actionTemplate let-dataItem>\n    <div class=\"form-footer\" style=\"text-align: center;\">\n        <button (click)=\"xemChiTiet(dataItem.Id, dataItem)\" color=\"primary\" type=\"button\" mat-raised-button>\n            Xem chi tiết\n        </button>\n    </div>\n    <button (click)=\"inPhieu(dataItem.Id)\" mat-menu-item>\n        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n        <span>In phiếu</span>\n    </button>\n</ng-template> -->\n\n\n<ng-template #actionTemplate let-dataItem>\n    <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n            <!-- <button *ngIf=\"dataItem.DuocKeToanDuyet == null\" (click)=\"chinhSua(dataItem.Id)\"\n                mat-menu-item>\n                <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                <span>Sửa</span>\n            </button> -->\n            <button (click)=\"inPhieu(dataItem.Id)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                <span>In phiếu</span>\n            </button>\n            <button *ngIf=\"dataItem.DuocKeToanDuyet == null\" (click)=\"xoa(dataItem.Id)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                <span>Xóa</span>\n            </button>\n\n        </ng-template>\n    </mat-menu>\n</ng-template>\n\n\n\n<ng-template #tinhTrangTemplate let-dataItem>\n    <div *ngIf=\"dataItem.TinhTrang == 2\" style=\"color: red;\">\n        {{dataItem.TinhTrangDisplay}}\n    </div>\n    <div *ngIf=\"dataItem.TinhTrang == 0\" style=\"color: orange;\">\n        {{dataItem.TinhTrangDisplay}}\n    </div>\n    <div *ngIf=\"dataItem.TinhTrang == 1\" style=\"color: green;\">\n        {{dataItem.TinhTrangDisplay}}\n    </div>\n</ng-template>\n\n<ng-template #ngayHoaDonTemplate let-dataItem>\n    {{dataItem.NgayHoaDonDisplay}}\n</ng-template>\n\n<ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <strong>{{value}}</strong>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.html": 
        /*!*******************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.html ***!
          \*******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div *ngIf=\"tuChoiDuyet\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"color: red;\">Lí do: {{nhapKho.LyDoKhongDuyet}}</div>\n\n    <app-textbox [disabled]=\"daDuyet == true\" id=\"KyHieuHoaDon\" fxFlex=\"10%\" fxFlex.sm=\"17%\" [required]=\"true\"\n        [(model)]=\"nhapKho.KyHieuHoaDon\" label=\"Ký hiệu HĐ\" maxlength=\"50\"\n        [validationerror]=\"'KyHieuHoaDon' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textbox [disabled]=\"daDuyet == true\" id=\"SoChungTuId\" fxFlex=\"10%\" fxFlex.sm=\"17%\" [required]=\"true\"\n        [(model)]=\"nhapKho.SoChungTu\" label=\"Số hóa đơn\" [onlynumber]=\"true\" maxlength=\"8\"\n        [validationerror]=\"'SoChungTu' | validationerror:validationErrors\">\n        <!-- (blurChange)=\"blurChangeSoChungTu($event)\" -->\n    </app-textbox>\n\n    <app-combobox fxFlex=\"14%\" fxFlex.sm=\"14%\" id=\"NguoiNhapId\" label=\"Người nhập\" url=\"NhanVien/GetListLookupNhanVien\"\n        [(model)]=\"nhapKho.NguoiNhapId\" disabled=\"true\" bind=\"true\" [required]=\"true\"\n        [validationerror]=\"'NguoiNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-radio [disabled]=\"daDuyet == true\" fxFlex=\"21%\" fxFlex.sm=\"21%\" id=\"LoaiNguoiGiaoId\" name=\"LoaiNguoiGiao\"\n        (modelChange)=\"loaiNguoiGiaoChange($event)\"\n        [items]=\"[{Value:1,Text:'Trong hệ thống'},{Value:2,Text:'Ngoài hệ thống'}]\" [(model)]=\"nhapKho.LoaiNguoiGiao\"\n        label=\"Loại người giao\" [required]=\"true\"\n        [validationerror]=\"'LoaiNguoiGiao' | validationerror:validationErrors\">\n    </app-radio>\n\n    <!-- *ngIf=\"nhapKho.LoaiNguoiGiao == 2\"  -->\n    <app-textbox [disabled]=\"daDuyet == true\" *ngIf=\"nhapKho.LoaiNguoiGiao == 2\" id=\"NguoiGiaoNgoaiHeThongId\"\n        fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"nhapKho.TenNguoiGiao\" label=\"Tên người giao\" maxlength=\"100\"\n        [validationerror]=\"'TenNguoiGiao' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-combobox [disabled]=\"daDuyet == true\" *ngIf=\"nhapKho.LoaiNguoiGiao == 1\" id=\"NguoiGiaoTrongHeThongId\"\n        fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Người giao\" [(model)]=\"nhapKho.NguoiGiaoId\"\n        url=\"NhanVien/GetListLookupNhanVien\" bind=\"true\"\n        [validationerror]=\"'NguoiGiaoId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-datepicker [disabled]=\"daDuyet == true\" id=\"NgayHoaDon\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n        [(model)]=\"nhapKho.NgayHoaDon\" label=\"Ngày hóa đơn\"\n        [validationerror]=\"'NgayHoaDon' | validationerror:validationErrors\" [disabled]=\"isDisabled\">\n    </app-datepicker>\n    <app-datepicker [disabled]=\"daDuyet == true\" id=\"NgayNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [required]=\"true\"\n        [(model)]=\"nhapKho.NgayNhap\" label=\"Ngày nhập\" [validationerror]=\"'NgayNhap' | validationerror:validationErrors\"\n        [disabled]=\"isDisabled\">\n    </app-datepicker>\n\n    <app-combobox *ngIf=\"daDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"NhanVienDuyetId\" label=\"Người duyệt\"\n        url=\"NhanVien/GetListLookupNhanVien\" [(model)]=\"nhapKho.NhanVienDuyetId\" disabled=\"true\" bind=\"true\">\n    </app-combobox>\n\n    <app-datepicker *ngIf=\"daDuyet\" [disabled]=\"daDuyet == true\" id=\"NgayDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"nhapKho.NgayDuyet\" label=\"Ngày duyệt\"\n        [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\" disabled=\"true\">\n    </app-datepicker>\n\n    <app-combobox *ngIf=\"tuChoiDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"NhanVienDuyetId\" label=\"Người từ chối\"\n        url=\"NhanVien/GetListLookupNhanVien\" [(model)]=\"nhapKho.NhanVienDuyetId\" disabled=\"true\" bind=\"true\">\n    </app-combobox>\n\n    <app-datepicker *ngIf=\"tuChoiDuyet\" disabled=\"true\" id=\"NgayDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"nhapKho.NgayDuyet\" label=\"Ngày từ chối\"\n        [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\" disabled=\"true\">\n    </app-datepicker>\n\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN VẬT TƯ\n    </h3>\n\n    <div fxFlex=\"87%\" class=\"po-h-radio\">\n        <app-radio id=\"chon-loai-nhap\" [disabled]=\"blockLoaiNhap\" name=\"select\" class=\"no-format-css pl-4 temp\"\n            (modelChange)=\"onChangeLoaiNhap($event)\" [(model)]=\"loaiNhap\"\n            [items]=\"[{Value:1,Text:'Nhập từ HĐ thầu'},{Value:2,Text:'Nhập từ NCC'}]\">\n        </app-radio>\n    </div>\n\n    <ng-container *ngIf=\"loaiNhap==1\">\n        <app-combobox (openCombobox)=\"openComboboxHopDong($event)\" (keyup)=\"onKeyHopDong($event)\"\n            [disabled]=\"daDuyet == true\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hợp đồng\" id=\"HopDongThauVatTuId\"\n            [(model)]=\"nhapKhoChiTiet.HopDongThauVatTuId\" [modelText]=\"nhapKhoChiTiet.HopDongThauDisplay\"\n            (modelChange)=\"onChangeHopDongThau($event)\" class=\"item-no-padding\" [template]=\"hopDongThauTemplate\"\n            bind=\"true\" [templateHeader]=\"hopDongThauTemplateHeader\" [required]=\"true\"\n            url=\"NhapKhoVatTu/GetListNhaThauNhapKho\"\n            [validationerror]=\"'HopDongThauVatTuId' | validationerror:validationErrors\"\n            [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n            <ng-template #hopDongThauTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"10%\">SHĐ</th>\n                        <th width=\"30%\">NCC</th>\n                        <th width=\"60%\">Địa chỉ</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #hopDongThauTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"10%\">{{dataItem.SoHopDong}}</td>\n                        <td width=\"30%\">{{dataItem.Ten}}</td>\n                        <td width=\"60%\">{{dataItem.DiaChi}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-combobox #duocPhamCombobox (openCombobox)=\"openComboboxDuocPham($event)\" (keyup)=\"onKeyDuocPham($event)\"\n            [disabled]=\"daDuyet == true || isUpdate == true\" fxFlex=\"50%\" fxFlex.sm=\"40%\" label=\"Vật tư\"\n            [queryInfo]=\"{ParameterDependencies:'{HopDongThauVatTuId:' + nhapKhoChiTiet.HopDongThauVatTuId+', KhoId: ' + nhapKhoChiTiet.KhoNhapSauKhiDuyetId +', LaVatTuBHYT: ' + nhapKhoChiTiet.LaVatTuBHYT +'}', Take: 50}\"\n            id=\"VatTuId\" [(model)]=\"nhapKhoChiTiet.VatTuBenhVienId\" class=\"item-no-padding\" [template]=\"vatTuTemplate\"\n            url=\"NhapKhoVatTu/GetListVatTuNhapKho\" [templateHeader]=\"vatTuTemplateHeader\" [required]=\"true\"\n            (selectionChange)=\"onChangeVatTu($event)\"\n            [validationerror]=\"'VatTuBenhVienId' | validationerror:validationErrors\">\n            <ng-template #vatTuTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"40%\">Tên</th>\n                        <th width=\"15%\">Mã Vật tư</th>\n                        <th width=\"15%\">Nhóm Vật tư</th>\n                        <th width=\"10%\">ĐVT</th>\n                        <th width=\"10%\">SL Tồn</th>\n                        <th width=\"10%\">SL C.Nhập</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #vatTuTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"40%\">{{dataItem.Ten}}</td>\n                        <td width=\"15%\">{{dataItem.Ma}}</td>\n                        <td width=\"15%\">{{dataItem.TenNhomVatTu}}</td>\n                        <th width=\"10%\">{{dataItem.DVT}}</th>\n                        <td width=\"10%\">{{dataItem.SLTon | number}}</td>\n                        <td width=\"10%\">{{dataItem.SoLuongChuaNhap | number}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-textbox [disabled]=\"true\" id=\"DonViTinh\" fxFlex=\"10%\" fxFlex.sm=\"20%\" [(model)]=\"nhapKhoChiTiet.DVT\"\n            label=\"ĐVT\">\n        </app-textbox>\n\n        <app-radio (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"LaVatTuBHYT\"\n            name=\"Loai\" [required]=\"true\" (modelChange)=\"loaiChange($event)\"\n            [items]=\"[{Value:false,Text:'Không BHYT'},{Value:true,Text:'BHYT'}]\" [(model)]=\"nhapKhoChiTiet.LaVatTuBHYT\"\n            label=\"Loại\" [validationerror]=\"'LaVatTuBHYT' | validationerror:validationErrors\">\n        </app-radio>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLuongNhapId\" fxFlex=\"10%\"\n            fxFlex.sm=\"20%\" min=\"1\" max=\"999999\" [(model)]=\"nhapKhoChiTiet.SoLuongNhap\" label=\"Số lượng\"\n            [required]=\"true\" [validationerror]=\"'SoLuongNhap' | validationerror:validationErrors\"\n            (modelChange)=\"modelChangeSoLuongNhap($event)\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" id=\"DonGiaNhapId\" fxFlex=\"10%\" fxFlex.sm=\"20%\" decimals=\"2\"\n            [format]=\"format\" min=\"0\" max=\"9999999999\" [(model)]=\"nhapKhoChiTiet.DonGiaNhap\" label=\"Đơn giá\"\n            [required]=\"true\" [disabled]=\"daDuyet == true\" (modelChange)=\"modelChangeDonGiaNhap($event)\"\n            [validationerror]=\"'DonGiaNhap' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric [disabled]=\"daDuyet == true\" id=\"ThanhTienTruocVat\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n            decimals=\"2\" (modelChange)=\"modelChangeThanhTienTruocVat($event)\" [format]=\"format\" [required]=\"true\"\n            [(model)]=\"nhapKhoChiTiet.ThanhTienTruocVat\" label=\"Thanh toán\"\n            [validationerror]=\"'ThanhTienTruocVat' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLoId\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [required]=\"true\" [(model)]=\"nhapKhoChiTiet.Solo\" label=\"Số lô\" maxlength=\"50\" [upperCase]=\"true\"\n            [validationerror]=\"'Solo' | validationerror:validationErrors\">\n        </app-textbox>\n\n\n        <app-datepicker (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"HanSuDungId\" fxFlex=\"20%\"\n            fxFlex.sm=\"20%\" [required]=\"true\" [(model)]=\"nhapKhoChiTiet.HanSuDung\" label=\"HSD\"\n            (modelChange)=\"onChangeHanSuDung($event)\"\n            [validationerror]=\"'HanSuDung' | validationerror:validationErrors\">\n        </app-datepicker>\n\n        <app-textboxnumeric *ngIf=\"nhapKhoChiTiet.LaVatTuBHYT\" (keyup)=\"onKey($event)\" id=\"TiLeBHYTThanhToan\"\n            fxFlex=\"10%\" fxFlex.sm=\"20%\" [format]=\"format\" min=1 max=\"100\" label=\"Tỷ lệ BHTT\" [required]=\"true\"\n            [(model)]=\"nhapKhoChiTiet.TiLeBHYTThanhToan\" [disabled]=\"daDuyet == true\"\n            [validationerror]=\"'TiLeBHYTThanhToan' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-combobox [disabled]=\"daDuyet == true\" id=\"KhoNhapSauKhiDuyetId\" fxFlex.sm=\"20%\"\n            [fxFlex]=\"nhapKhoChiTiet.LaVatTuBHYT ? '20%' : '30%'\" label=\"Xuất về kho sau khi duyệt\"\n            [(model)]=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetId\" [required]=\"true\"\n            [modelText]=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetDisplayName\"\n            [validationerror]=\"'KhoNhapSauKhiDuyetId' | validationerror:validationErrors\"\n            url=\"NhapKhoDuocPham/GetKhoLoaiVatTus\" bind=\"true\">\n        </app-combobox>\n        <app-combobox *ngIf=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetId>0\" id=\"NguoiNhapSauKhiDuyetId\" fxFlex=\"20%\"\n            fxFlex.sm=\"20%\" [(model)]=\"nhapKhoChiTiet.NguoiNhapSauKhiDuyetId\" label=\"Người nhận sau khi duyệt\"\n            url=\"NhanVien/GetListLookupNhanVien\" bind=\"true\" [required]=\"true\"\n            [validationerror]=\"'NguoiNhapSauKhiDuyetId' | validationerror:validationErrors\">\n        </app-combobox>\n\n        <app-textboxnumeric [disabled]=\"true\" (keyup)=\"onKey($event)\" id=\"gia-ap-thau\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            decimals=\"2\" [format]=\"format\" [(model)]=\"nhapKhoChiTiet.GiaApThau\" label=\"Giá áp thầu\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"MaVachId\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.MaVach\" label=\"Mã vạch\" maxlength=\"100\" onlynumber=\"true\">\n        </app-textbox>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"MaRef\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.MaRef\" label=\"REF\" maxlength=\"200\">\n        </app-textbox>\n\n        <app-textboxnumeric [disabled]=\"true\" id=\"HeSoDinhMucDonViTinh\" fxFlex=\"10%\" fxFlex.sm=\"20%\" min=\"1\"\n            max=\"999999\" [(model)]=\"nhapKhoChiTiet.HeSoDinhMucDonViTinh\" label=\"Hệ số định mức\">\n        </app-textboxnumeric>\n        <app-textboxnumeric (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLuongNhapSoCap\" fxFlex=\"10%\"\n            fxFlex.sm=\"20%\" min=\"1\" max=\"999999\" [(model)]=\"nhapKhoChiTiet.SoLuongNhapSoCap\" label=\"Số lượng sơ cấp\"\n            (modelChange)=\"modelChangeSoLuongNhapSoCap($event)\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"GhiChu\" fxFlex=\"auto\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.GhiChu\" label=\"Ghi Chú\" maxlength=\"1000\">\n        </app-textbox>\n    </ng-container>\n\n    <ng-container *ngIf=\"loaiNhap==2\">\n        <app-combobox (openCombobox)=\"openComboboxHopDong($event)\" (keyup)=\"onKeyHopDong($event)\"\n            [disabled]=\"daDuyet == true  || disableNCC\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nhà cung cấp\"\n            id=\"nha-cung-cap\" [(model)]=\"nhapKhoChiTiet.NhaThauId\" [modelText]=\"nhapKhoChiTiet.NhaThauDisplay\"\n            class=\"item-no-padding\" (modelChange)=\"nhaThauChange()\" [template]=\"nhaThauTemplate\" bind=\"true\"\n            [templateHeader]=\"nhaThauTemplateHeader\" [required]=\"true\" url=\"HopDongThauDuocPham/GetListNhaThau\"\n            [validationerror]=\"'NhaThauId' | validationerror:validationErrors\"\n            [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n            <ng-template #nhaThauTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"30%\">NCC</th>\n                        <th width=\"70%\">Địa chỉ</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #nhaThauTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"30%\">{{dataItem.Ten}}</td>\n                        <td width=\"70%\">{{dataItem.DiaChi}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-combobox bind=\"true\" #duocPhamCombobox (openCombobox)=\"openComboboxDuocPham($event)\"\n            (keyup)=\"onKeyDuocPham($event)\" [disabled]=\"daDuyet == true || isUpdate == true\" fxFlex=\"60%\"\n            fxFlex.sm=\"50%\" label=\"Vật tư\" id=\"VatTuId\" [(model)]=\"nhapKhoChiTiet.VatTuBenhVienId\"\n            class=\"item-no-padding\" [template]=\"vatTuTemplate\" url=\"NhapKhoVatTu/GetDropDownListVatTuFromNhaThau\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoNhapSauKhiDuyetId:' + nhapKhoChiTiet.KhoNhapSauKhiDuyetId +'}', Take: 50}\"\n            [templateHeader]=\"vatTuTemplateHeader\" [required]=\"true\" (selectionChange)=\"onChangeVatTu($event)\"\n            [validationerror]=\"'VatTuBenhVienId' | validationerror:validationErrors\">\n            <ng-template #vatTuTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"40%\">Tên</th>\n                        <th width=\"20%\">Mã Vật tư</th>\n                        <th width=\"20%\">Nhóm Vật tư</th>\n                        <th width=\"10%\">ĐVT</th>\n                        <th width=\"10%\">SL tồn</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #vatTuTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"40%\">{{dataItem.Ten}}</td>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td width=\"20%\">{{dataItem.TenNhomVatTu}}</td>\n                        <th width=\"10%\">{{dataItem.DVT}}</th>\n                        <th width=\"10%\">{{dataItem.SLTon | number:'1.0-2':'vi-VN'}}</th>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-textbox [disabled]=\"true\" id=\"DonViTinh\" fxFlex=\"10%\" fxFlex.sm=\"20%\" [(model)]=\"nhapKhoChiTiet.DVT\"\n            label=\"ĐVT\">\n        </app-textbox>\n\n        <app-radio (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" fxFlex=\"10%\" fxFlex.sm=\"10%\" id=\"LaVatTuBHYT\"\n            name=\"Loai\" [required]=\"true\" (modelChange)=\"loaiChange($event)\" [items]=\"[{Value:false,Text:'Không BHYT'}]\"\n            [(model)]=\"nhapKhoChiTiet.LaVatTuBHYT\" label=\"Loại\"\n            [validationerror]=\"'LaVatTuBHYT' | validationerror:validationErrors\">\n        </app-radio>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLuongNhapId\" fxFlex=\"10%\"\n            fxFlex.sm=\"20%\" min=\"1\" max=\"999999\" [(model)]=\"nhapKhoChiTiet.SoLuongNhap\" label=\"Số lượng\"\n            [required]=\"true\" [validationerror]=\"'SoLuongNhap' | validationerror:validationErrors\"\n            (modelChange)=\"modelChangeSoLuongNhap($event)\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" id=\"DonGiaNhapId\" fxFlex=\"10%\" fxFlex.sm=\"20%\" decimals=\"2\"\n            [format]=\"format\" min=\"0\" max=\"9999999999\" [(model)]=\"nhapKhoChiTiet.DonGiaNhap\" label=\"Đơn giá\"\n            [required]=\"true\" [disabled]=\"daDuyet == true\" (modelChange)=\"modelChangeDonGiaNhap($event)\"\n            [validationerror]=\"'DonGiaNhap' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" id=\"VAT\" fxFlex=\"10%\" fxFlex.sm=\"20%\" [format]=\"format\" decimals=\"2\"\n            min=\"0\" max=\"100\" label=\"VAT\" [required]=\"true\" [(model)]=\"nhapKhoChiTiet.VAT\" [disabled]=\"daDuyet == true\"\n            (modelChange)=\"modelChangeVAT($event)\" *ngIf=\"!nhapKhoChiTiet.LaVatTuBHYT\"\n            [validationerror]=\"'VAT' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric [disabled]=\"daDuyet == true\" id=\"ThanhTienSauVat\" fxFlex=\"20%\" fxFlex.sm=\"20%\" decimals=\"2\"\n            [format]=\"format\" *ngIf=\"!nhapKhoChiTiet.LaVatTuBHYT\" [(model)]=\"nhapKhoChiTiet.ThanhTienSauVat\"\n            [required]=\"true\" (modelChange)=\"modelThanhTienSauVat($event)\" label=\"Thanh toán\"\n            [validationerror]=\"'ThanhTienSauVat' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLoId\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [required]=\"true\" [(model)]=\"nhapKhoChiTiet.Solo\" label=\"Số lô\" maxlength=\"50\" [upperCase]=\"true\"\n            [validationerror]=\"'Solo' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-datepicker (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"HanSuDungId\" fxFlex=\"20%\"\n            fxFlex.sm=\"20%\" [required]=\"true\" [(model)]=\"nhapKhoChiTiet.HanSuDung\" label=\"HSD\"\n            (modelChange)=\"onChangeHanSuDung($event)\"\n            [validationerror]=\"'HanSuDung' | validationerror:validationErrors\">\n        </app-datepicker>\n\n        <app-combobox [disabled]=\"daDuyet == true\" id=\"KhoNhapSauKhiDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n            label=\"Xuất về kho sau khi duyệt\" [(model)]=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetId\" [required]=\"true\"\n            [modelText]=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetDisplayName\"\n            [validationerror]=\"'KhoNhapSauKhiDuyetId' | validationerror:validationErrors\"\n            url=\"NhapKhoDuocPham/GetKhoLoaiVatTus\" bind=\"true\">\n        </app-combobox>\n        <app-combobox *ngIf=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetId>0\" id=\"NguoiNhapSauKhiDuyetId\" fxFlex=\"20%\"\n            fxFlex.sm=\"20%\" [(model)]=\"nhapKhoChiTiet.NguoiNhapSauKhiDuyetId\" label=\"Người nhận sau khi duyệt\"\n            url=\"NhanVien/GetListLookupNhanVien\" bind=\"true\" [required]=\"true\"\n            [validationerror]=\"'NguoiNhapSauKhiDuyetId' | validationerror:validationErrors\">\n        </app-combobox>\n\n        <app-textboxnumeric [disabled]=\"daDuyet == true\" id=\"ThanhTienTruocVat\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            decimals=\"2\" [format]=\"format\" [(model)]=\"nhapKhoChiTiet.ThanhTienTruocVat\" label=\"Thành tiền (chưa VAT)\"\n            (modelChange)=\"modelChangeThanhTienTruocVat($event)\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric [disabled]=\"daDuyet == true\" id=\"ThueVatLamTron\" fxFlex=\"10%\" fxFlex.sm=\"20%\" decimals=\"2\"\n            [format]=\"format\" [(model)]=\"nhapKhoChiTiet.ThueVatLamTron\" label=\"Thuế VAT làm tròn\">\n        </app-textboxnumeric>\n        <app-textboxnumeric [disabled]=\"true\" id=\"HeSoDinhMucDonViTinh\" fxFlex=\"10%\" fxFlex.sm=\"20%\" min=\"1\"\n            max=\"999999\" [(model)]=\"nhapKhoChiTiet.HeSoDinhMucDonViTinh\" label=\"Hệ số định mức\">\n        </app-textboxnumeric>\n        <app-textboxnumeric (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLuongNhapSoCap\" fxFlex=\"10%\"\n            fxFlex.sm=\"20%\" min=\"1\" max=\"999999\" [(model)]=\"nhapKhoChiTiet.SoLuongNhapSoCap\" label=\"Số lượng sơ cấp\"\n            (modelChange)=\"modelChangeSoLuongNhapSoCap($event)\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"MaVachId\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.MaVach\" label=\"Mã vạch\" maxlength=\"100\" onlynumber=\"true\"\n            [validationerror]=\"'MaVach' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"MaRef\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.MaRef\" label=\"REF\" maxlength=\"200\">\n        </app-textbox>\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"GhiChu\" fxFlex=\"auto\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.GhiChu\" label=\"Ghi Chú\" maxlength=\"1000\">\n        </app-textbox>\n    </ng-container>\n    <div *ngIf=\"daDuyet != true\" fxFlex=\"100%\" fxFlex.sm=\"100%\">\n        <button *ngIf=\"isUpdate == false\" (click)=\"AddRow()\" style=\"float: right\" type=\"button\" color=\"primary\"\n            mat-raised-button>Thêm</button>\n        <button *ngIf=\"isUpdate == true\" (click)=\"UpdateRow()\" style=\"float: right\" type=\"button\" color=\"primary\"\n            mat-raised-button> Cập Nhật</button>\n        <button (click)=\"Huy()\" style=\"float: right\" type=\"button\" mat-button>Hủy</button>\n    </div>\n\n    <app-grid [groups]=\"groups\" #grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridDataSource]=\"gridDataSource\"\n        [gridColumns]=\"gridColumns\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n        [useActionDefault]=\"actionTemplate\" maxHeight=\"500\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"false\" [pageable]=\"false\" [autoHeight]=\"true\" (extOnDataBound)=\"onDataBound($event)\">\n    </app-grid>\n\n    <ng-template #giaTemplate let-dataItem>\n        {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #nhomDisplayGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n    <ng-template #thanhTienTruocVatTemplate let-dataItem>\n        {{dataItem.ThanhTienTruocVat | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienSauVatTemplate let-dataItem>\n        {{dataItem.ThanhTienSauVat | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #tongThanhTienTruocVatFooterTemplate let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalTongThanhTien('ThanhTienTruocVat') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #tongThanhTienVatFooterTemplate let-dataItem>\n        <p style=\"color: red; font-weight: bold;\">\n            <span>{{totalTongThanhTien('VAT') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #tongThanhTienSauVatFooterTemplate let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalTongThanhTien('ThanhTienSauVat') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #actionTemplate let-dataItem>\n\n        <button [disabled]=\"daDuyet == true\" (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n            [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n        </button>\n        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <ng-template let-customer=\"customer\" matMenuContent>\n                <button (click)=\"UpdateRowGripView(dataItem)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                    <span>Sửa</span>\n                </button>\n                <button (click)=\"DeleteRowGripView(dataItem.IdView)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    <span>Xóa</span>\n                </button>\n            </ng-template>\n        </mat-menu>\n    </ng-template>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.html": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.html ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''},\n            {Title:'Vật Tư',Path:''},\n            {Title:'Nhập Kho',Path:'/nhap-xuat/vat-tu/nhap-kho', queryParams: {holdQuery : true}, Active: true}\n        ]\" \n    [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 style=\"width: 50%;\" class=\"title m-0\">Nhập Kho Vật Tư</h2>\n                <span class=\"title-alert\">Từ chối duyệt</span>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-nhap-kho-share [tuChoiDuyet]=\"true\"></app-nhap-kho-share>\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"luu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu</button>\n                    <button type=\"button\" (click)=\"luuVaDuyetLai()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu & Gửi duyệt lại</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.html": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.html ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''},\n            {Title:'Vật Tư',Path:''},\n            {Title:'Nhập Kho',Path:'/nhap-xuat/vat-tu/nhap-kho', queryParams: {holdQuery : true}, Active: true}\n        ]\" \n    [isicMoreVert]=\"false\">\n</app-header-form>\n\n<!-- <app-nhap-kho-share [isUpdate]=\"true\"></app-nhap-kho-share> -->\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 style=\"width: 50%;\" class=\"title m-0\">Nhập Kho Vật Tư</h2>\n                <span class=\"title-alert-green\">Đã duyệt</span>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-nhap-kho-share [daDuyet]=\"true\"></app-nhap-kho-share>\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.html": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.html ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''},\n            {Title:'Vật tư',Path:''},\n            {Title:'Nhập Kho',Path:'/nhap-xuat/vat-tu/nhap-kho', queryParams: {holdQuery : true}, Active: true}\n        ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Nhập Kho Vật Tư</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-nhap-kho-share [isUpdate]=\"true\" [validationErrors]=\"validationErrors\"></app-nhap-kho-share>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n\n                    <button type=\"button\" (click)=\"update()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.html": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.html ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU NHẬP KHO</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu nhập kho\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.html": 
        /*!*************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.html ***!
          \*************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Xác Nhận</div>\n</div>\n\n<ng-container>\n    <p class=\"mb-3\"> Thực hiện in phiếu : </p>\n\n    <div>\n        <app-checkbox id=\"inPhieuNhapKhoVatTu.CoTheoBenhVien\" [(model)]=\"inPhieuNhapKhoVatTu.CoTheoBenhVien\"\n            label=\"In phiếu nhập vật tư bệnh viện\" class=\"pb-0\"></app-checkbox>\n    </div>\n\n    <div>\n        <app-checkbox id=\"inPhieuNhapKhoVatTu.CoTheoThongTu\" [(model)]=\"inPhieuNhapKhoVatTu.CoTheoThongTu\"\n            label=\"In phiếu nhập vật tư theo thông tư\" class=\"pb-0\">\n        </app-checkbox>\n    </div>\n\n    <div style=\"float: right;\">\n        <button type=\"button\" style=\"margin-right: 10px\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n            (click)=\"close()\">Không</button>\n        <button [disabled]=\"!inPhieuNhapKhoVatTu.CoTheoBenhVien && !inPhieuNhapKhoVatTu.CoTheoThongTu\" type=\"button\"\n            color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"inPhieu()\">In phiếu</button>\n    </div>\n</ng-container>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.scss": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.scss ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L25oYXAta2hvL2RzLXZhdC10dS10cnVuZy1uY2MtcG9wdXAvZHMtdmF0LXR1LXRydW5nLW5jYy1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: DsVatTuTrungNccPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsVatTuTrungNccPopupComponent", function () { return DsVatTuTrungNccPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var DsVatTuTrungNccPopupComponent = /** @class */ (function () {
                function DsVatTuTrungNccPopupComponent(dialog, data) {
                    this.dialog = dialog;
                    this.data = data;
                    this.groups = [{ field: 'LoaiSuDungDisplay' }];
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoVatTu;
                }
                DsVatTuTrungNccPopupComponent.prototype.ngOnInit = function () {
                    this.gridColumns = [
                        { Field: "LoaiSuDungDisplay", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomDisplayGroupHeaderTemplate },
                        { Field: "NhaThauDisplay", Title: "NCC", Width: 120, ShowTooltip: true, Sortable: false },
                        { Field: "HopDongThauDisplay", Title: "Hợp Đồng Thầu", ShowTooltip: true, Width: 50, Sortable: false },
                        { Field: "VatTuDisplay", Title: "Vật Tư", Width: 100, Sortable: false },
                        { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false },
                        { Field: "LoaiDisplay", Title: "Loại", Width: 40, Sortable: false, ShowTooltip: true },
                        { Field: "Solo", Title: "Số Lô", Width: 40, Sortable: false },
                        { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 80, Sortable: false, ShowTooltip: true },
                        { Field: "SoLuongNhapDisplay", Title: "SL", Width: 40, Sortable: false },
                        { Field: "DonGiaNhap", Title: "Đơn Giá", Width: 100, Sortable: false, Template: this.giaTemplate },
                        { Field: "ThanhTienTruocVat", Title: "Thành tiền (trước VAT)", Width: 100, Sortable: false, Template: this.thanhTienTruocVatTemplate },
                        { Field: "VAT", Title: "VAT(%)", Width: 40, Sortable: false },
                        { Field: "ThanhTienSauVat", Title: "Thanh toán", Width: 100, Sortable: false, Template: this.thanhTienSauVatTemplate },
                        { Field: "MaRef", Title: "Mã REF", Width: 40, Sortable: false },
                        { Field: "MaVach", Title: "Mã Vạch", Width: 40, Sortable: false },
                        { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 40, Sortable: false },
                        { Field: "TenKhoNhapSauKhiDuyet", Title: "Xuất về kho", Width: 40, Sortable: false, ShowTooltip: true },
                        { Field: "TenNguoiNhapSauKhiDuyet", Title: "Người nhận", Width: 40, Sortable: false, ShowTooltip: true },
                    ];
                    this.setDataSourceGrid();
                };
                DsVatTuTrungNccPopupComponent.prototype.setDataSourceGrid = function () {
                    this.gridDataSource = {
                        data: this.data,
                        total: this.data.length
                    };
                    if (this.gridVatTuNCC != undefined) {
                        this.gridVatTuNCC.gridDataSource = this.gridDataSource;
                        // this.gridVatTuNCC.setDataSource();
                    }
                };
                return DsVatTuTrungNccPopupComponent;
            }());
            DsVatTuTrungNccPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
            ], DsVatTuTrungNccPopupComponent.prototype, "STTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDisplayGroupHeaderTemplate', { static: true })
            ], DsVatTuTrungNccPopupComponent.prototype, "nhomDisplayGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTuNCC', { static: true })
            ], DsVatTuTrungNccPopupComponent.prototype, "gridVatTuNCC", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
            ], DsVatTuTrungNccPopupComponent.prototype, "giaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTruocVatTemplate', { static: true })
            ], DsVatTuTrungNccPopupComponent.prototype, "thanhTienTruocVatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienSauVatTemplate', { static: true })
            ], DsVatTuTrungNccPopupComponent.prototype, "thanhTienSauVatTemplate", void 0);
            DsVatTuTrungNccPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ds-vat-tu-trung-ncc-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-vat-tu-trung-ncc-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-vat-tu-trung-ncc-popup.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], DsVatTuTrungNccPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.scss": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.scss ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vbmhhcC1raG8tY3JlYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXG5oYXAta2hvXFxuaGFwLWtoby1jcmVhdGVcXG5oYXAta2hvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vbmhhcC1raG8tY3JlYXRlL25oYXAta2hvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L25oYXAta2hvL25oYXAta2hvLWNyZWF0ZS9uaGFwLWtoby1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: NhapKhoCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoCreateComponent", function () { return NhapKhoCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _nhap_kho__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nhap-kho */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _ds_vat_tu_trung_ncc_popup_ds_vat_tu_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.ts");
            /* harmony import */ var _xac_nhan_chon_phieu_in_vat_tu_popup_xac_nhan_chon_phieu_in_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.ts");
            var NhapKhoCreateComponent = /** @class */ (function () {
                function NhapKhoCreateComponent(apiService, dialog, notificationService, authService, router, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.ref = ref;
                    this.location = location;
                    this.nhapKhoVatTu = new _nhap_kho__WEBPACK_IMPORTED_MODULE_4__["NhapKhoVatTu"]();
                    this.inPhieuNhapKhoVatTu = new _nhap_kho__WEBPACK_IMPORTED_MODULE_4__["InPhieuNhapKhoVatTu"]();
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].NhapKhoVatTu;
                }
                NhapKhoCreateComponent.prototype.ngOnInit = function () {
                };
                NhapKhoCreateComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                NhapKhoCreateComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                NhapKhoCreateComponent.prototype.cancel = function () {
                    this.location.back();
                };
                NhapKhoCreateComponent.prototype.create = function () {
                    var _this = this;
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn thêm dữ liệu này không?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.nhapKhoVatTu = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add)) {
                                self.loadingPage();
                                self.apiService.post("NhapKhoVatTu/ThemYeuCauNhapKhoVatTu", self.nhapKhoVatTu).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        if (result.length > 0) {
                                            self.dialog.open(_ds_vat_tu_trung_ncc_popup_ds_vat_tu_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_16__["DsVatTuTrungNccPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: result,
                                            }).afterClosed().subscribe(function () {
                                                self.closePopupLoadingData();
                                            });
                                        }
                                        else {
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                            self.closePopupLoadingData();
                                            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
                                                disableClose: false,
                                                width: "500px",
                                                data: {
                                                    Title: "Xác nhận in",
                                                    Message: "Bạn có muốn in phiếu nhập kho này không ?",
                                                },
                                            }).afterClosed().subscribe(function (res) {
                                                if (res == "Yes") {
                                                    self.loadingPage();
                                                    self.inPhieuNhapKhoVatTu.HostingName = window.location.protocol + "//" + window.location.host;
                                                    self.inPhieuNhapKhoVatTu.YeuCauNhapKhoVatTuId = result;
                                                    self.inPhieuNhapKhoVatTu.CoTheoBenhVien = true;
                                                    self.inPhieuNhapKhoVatTu.CoTheoThongTu = true;
                                                    self.dialog.open(_xac_nhan_chon_phieu_in_vat_tu_popup_xac_nhan_chon_phieu_in_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_17__["XacNhanChonPhieuInVatTuPopupComponent"], {
                                                        disableClose: false,
                                                        width: "400px",
                                                        data: self.inPhieuNhapKhoVatTu,
                                                    }).afterClosed().subscribe(function () {
                                                        self.closePopupLoadingData();
                                                        _this.router.navigateByUrl('/nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                                                    });
                                                    // self.apiService.post<any>("NhapKhoVatTu/InPhieuYeuCauNhapKhoVatTu", self.inPhieuNhapKhoVatTu).subscribe(
                                                    //   resData => {
                                                    //     if (resData != undefined && resData != null) {
                                                    //       self.closePopupLoadingData();
                                                    //       self.dialog.open(PhieuNhapKhoVatTuPopupComponent, {
                                                    //         disableClose: false,
                                                    //         width: '1200px',
                                                    //         data: resData,
                                                    //       }).afterClosed().subscribe(() => {
                                                    //         self.closePopupLoadingData();
                                                    //         this.router.navigate(['/nhap-xuat/vat-tu/nhap-kho']);
                                                    //       });
                                                    //     }
                                                    //   },
                                                    //   (err: ApiError) => {
                                                    //     self.validationErrors = err.ValidationErrors;
                                                    //     if (err.Message != "Validation Failed") {
                                                    //       self.notificationService.showError(err.Message);
                                                    //     }
                                                    //     self.closePopupLoadingData();
                                                    //   }
                                                    // );
                                                }
                                                else {
                                                    _this.router.navigate(['/nhap-xuat/vat-tu/nhap-kho']);
                                                }
                                            });
                                        }
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupLoadingData();
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                NhapKhoCreateComponent.prototype.onCreated = function () {
                    //this.router.navigate(['nhap-xuat/vat-tu/nhap-kho/']);
                    this.router.navigateByUrl('nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                };
                return NhapKhoCreateComponent;
            }());
            NhapKhoCreateComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_2__["NhapKhoShareComponent"], { static: true })
            ], NhapKhoCreateComponent.prototype, "shared", void 0);
            NhapKhoCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhap-kho-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-create.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.scss")).default]
                })
            ], NhapKhoCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.scss": 
        /*!***************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.scss ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L25oYXAta2hvL25oYXAta2hvLWxpc3QvbmhhcC1raG8tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.ts ***!
          \*************************************************************************************************/
        /*! exports provided: NhapKhoListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoListComponent", function () { return NhapKhoListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var _nhap_kho__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../nhap-kho */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_28__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_29__);
            /* harmony import */ var _xac_nhan_chon_phieu_in_vat_tu_popup_xac_nhan_chon_phieu_in_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.ts");
            var NhapKhoListComponent = /** @class */ (function () {
                function NhapKhoListComponent(authService, dialog, elem, notificationService, location, apiService, router, route) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.elem = elem;
                    this.notificationService = notificationService;
                    this.location = location;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.sort = [{
                            field: 'Id',
                            dir: 'desc'
                        }];
                    this.baseRoute = "/nhap-xuat/vat-tu/nhap-kho";
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16___default.a;
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_29___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_24___default.a;
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_28___default.a;
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.urlGetDataGridChild = "NhapKhoVatTu/GetDataForGridChildAsync";
                    this.urlGetTotalPageGridChild = "NhapKhoVatTu/GetTotalPageForGridChildAsync";
                    this.inPhieuNhapKhoVatTu = new _nhap_kho__WEBPACK_IMPORTED_MODULE_25__["InPhieuNhapKhoVatTu"]();
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"];
                    this.ListVitri = [];
                    this.groups = [{ field: 'LoaiSuDung' }];
                    this.sortNhapKho = [{
                            field: "NgayNhap",
                            dir: "desc"
                        },
                        {
                            field: "Id",
                            dir: "asc"
                        }];
                    this.sortNhapKhoChild = [
                        {
                            field: "Id",
                            dir: "asc"
                        }
                    ];
                    this.holdQuery = null;
                    this.query = null;
                    this.additionalSearchString = null;
                }
                NhapKhoListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].NhapKhoVatTu;
                    this.nhapKho = new _nhap_kho__WEBPACK_IMPORTED_MODULE_25__["NhapKhoVatTuSearch"]();
                    this.inPhieuNhapKhoVatTu.HostingName = window.location.protocol + "//" + window.location.host;
                    //
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null &&
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem('additionalSearchStringNhapKhoVT') != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem('additionalSearchStringNhapKhoVT');
                        this.backWithSearch();
                        // this.xacNhanBhyt = new XacNhanBhyt();
                        // this.xacNhanBhyt = JSON.parse(this.additionalSearchString);
                        //this.nhapKho = JSON.parse(this.additionalSearchString);
                        //console.log("additionalSearchString = ", this.additionalSearchString);
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringNhapKhoVT', null);
                        this.additionalSearchString = JSON.stringify(this.nhapKho);
                    }
                    this.gridColumns = [
                        { Field: "SoPhieu", Title: "Số Chứng Từ", Width: 120, Sortable: true, Template: this.soPhieuTemplate },
                        { Field: "SoChungTu", Title: "Số Hóa Đơn", MinWidth: 200, Sortable: true, Template: this.soChungTuTemplate },
                        // { Field: "LoaiNguoiGiaoDisplay", Title: "Loại Người Giao", Width: 120, Sortable: false },
                        { Field: "NgayHoaDon", Title: "Ngày hóa đơn", Width: 150, Sortable: true, Template: this.ngayHoaDonTemplate },
                        { Field: "TenKho", Title: "Kho Nhập", Width: 150, Sortable: true, ShowTooltip: true },
                        // { Field: "TenNguoiGiao", Title: "Tên Người Giao", Width: 150, Sortable: true },
                        { Field: "TenNguoiNhap", Title: "Người Nhập", Width: 150, Sortable: true },
                        { Field: "NgayNhap", Title: "Ngày Nhập", Width: 150, Sortable: true, Template: this.ngayNhapTemplate },
                        { Field: "TinhTrang", Title: "Tình Trạng", Width: 120, Sortable: true, Template: this.tinhTrangTemplate },
                        { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: true },
                        { Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
                        { Field: "Action", Title: "", Width: 100, Template: this.actionTemplate }
                    ];
                    this.gridChildColumns = [
                        { Field: "LoaiSuDung", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
                        { Field: "NhaThauDisplay", Title: "NCC", Width: 264, ShowTooltip: true, Sortable: false },
                        { Field: "TenHDThau", Title: "HĐ Thầu", MinWidth: 150, Sortable: false },
                        { Field: "TenVatTu", Title: "Vật Tư", Width: 150, Sortable: false },
                        { Field: "Loai", Title: "Loại", Width: 120, Sortable: false },
                        { Field: "SoLo", Title: "Số Lô", Width: 100, Sortable: false },
                        { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 140, Sortable: false },
                        { Field: "MaVach", Title: "Mã Vạch", Width: 120, Sortable: false },
                        { Field: "SLDisplay", Title: "SL", Width: 100, Sortable: false },
                        { Field: "GiaNhap", Title: "Giá nhập", Width: 120, Sortable: false, Template: this.giaTemplate },
                        { Field: "VAT", Title: "VAT(%)", Width: 100, Sortable: false },
                        { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 140, Sortable: false },
                    ];
                    this.theFirstSearch = JSON.stringify(this.nhapKho);
                };
                NhapKhoListComponent.prototype.backWithSearch = function () {
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem("additionalSearchStringNhapKhoVT");
                            if (additionalSearchString != null) {
                                var nhapKhoClone = JSON.parse(additionalSearchString);
                                if (nhapKhoClone.RangeNhap.startDate != null && nhapKhoClone.RangeNhap.startDate != undefined) {
                                    var startDate = new Date(nhapKhoClone.RangeNhap.startDate);
                                    //let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
                                    nhapKhoClone.RangeNhap.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                                    // nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                                    // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                                }
                                if (nhapKhoClone.RangeNhap.endDate != null && nhapKhoClone.RangeNhap.endDate != undefined) {
                                    var endDate = new Date(nhapKhoClone.RangeNhap.endDate);
                                    nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                                }
                                if (nhapKhoClone.RangeDuyet.startDate != null && nhapKhoClone.RangeDuyet.startDate != undefined) {
                                    var startDate = new Date(nhapKhoClone.RangeDuyet.startDate);
                                    //let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
                                    nhapKhoClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                                    // nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                                    // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                                }
                                if (nhapKhoClone.RangeDuyet.endDate != null && nhapKhoClone.RangeDuyet.endDate != undefined) {
                                    var endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
                                    nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                                }
                                this.nhapKho = JSON.parse(additionalSearchString);
                                this.gridChild.additionalSearchString = JSON.stringify(nhapKhoClone);
                                this.gridChild.searchString = this.nhapKho.SearchString;
                            }
                        }
                    }
                };
                NhapKhoListComponent.prototype.themMoiNhapKho = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Add)) {
                        this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/them"]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                NhapKhoListComponent.prototype.xemChiTiet = function (id, dataItem) {
                    //console.log("xemChiTiet = ", dataItem);
                    //return;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
                        if (dataItem.DuocKeToanDuyet == null) {
                            this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/chinh-sua/" + id]);
                        }
                        else if (dataItem.DuocKeToanDuyet == false) {
                            this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/tu-choi-duyet/" + id]);
                        }
                        else {
                            this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/da-duyet/" + id]);
                        }
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                NhapKhoListComponent.prototype.onKey = function (event) {
                    if (event.keyCode == 13) {
                        this.Timkiem();
                    }
                };
                NhapKhoListComponent.prototype.clearSearch = function () {
                    if (this.nhapKho.SearchString == "" || this.nhapKho.SearchString == null) {
                        this.gridChild.searchString = "";
                        //LocalStorageHelper.setItem("additionalSearchStringNhapKho", null);
                        var xuatKhoClone = JSON.parse(JSON.stringify(this.nhapKho));
                        var queryForHole = JSON.parse(JSON.stringify(xuatKhoClone));
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringNhapKhoVT', JSON.stringify(queryForHole));
                        console.log(this.nhapKho);
                        this.gridChild._additionalSearchString = JSON.stringify(this.nhapKho);
                        this.gridChild.search();
                    }
                };
                NhapKhoListComponent.prototype.Timkiem = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    var QueryString = null;
                    this.gridChild._additionalSearchString = null;
                    QueryString = this.nhapKho.SearchString;
                    var nhapKhoClone = JSON.parse(JSON.stringify(this.nhapKho));
                    if (nhapKhoClone.RangeNhap.startDate != null && nhapKhoClone.RangeNhap.startDate != undefined) {
                        var startDate = new Date(nhapKhoClone.RangeNhap.startDate);
                        // let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
                        nhapKhoClone.RangeNhap.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                        // nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                        // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (nhapKhoClone.RangeNhap.endDate != null && nhapKhoClone.RangeNhap.endDate != undefined) {
                        var endDate = new Date(nhapKhoClone.RangeNhap.endDate);
                        nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (nhapKhoClone.RangeDuyet.startDate != null && nhapKhoClone.RangeDuyet.startDate != undefined) {
                        var startDate = new Date(nhapKhoClone.RangeDuyet.startDate);
                        //let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
                        nhapKhoClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                        // nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                        // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (nhapKhoClone.RangeDuyet.endDate != null && nhapKhoClone.RangeDuyet.endDate != undefined) {
                        var endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
                        nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    this.query = JSON.stringify(nhapKhoClone);
                    var queryForHole = JSON.parse(JSON.stringify(nhapKhoClone));
                    // queryForHole.RangeNhap = new rangeDate();
                    // queryForHole.RangeDuyet = new rangeDate();
                    // queryForHole.SearchString = null;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringNhapKhoVT', JSON.stringify(this.nhapKho));
                    this.gridChild._additionalSearchString = this.query;
                    this.gridChild.searchString = QueryString;
                    this.gridChild.search();
                };
                NhapKhoListComponent.prototype.exportExcel = function () {
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        self.showPopupLoadingData();
                        self.apiService.postExportExcel('NhapKhoVatTu/ExportNhapKhoVatTu', self.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'NhapKhoVatTu' + dateTimeNow.getFullYear() + '.xlsx');
                            self.closePopupLoadingData();
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                NhapKhoListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                NhapKhoListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                NhapKhoListComponent.prototype.onKeyNgayNhap = function ($event) {
                    //console.log("onKeyNgayNhap = ", $event);
                    if ($event.keyCode == 13) {
                        this.Timkiem();
                    }
                };
                NhapKhoListComponent.prototype.changeNgayNhapRange = function ($event) {
                    //console.log("changeNgayNhapRange = ", $event);
                    this.Timkiem();
                };
                NhapKhoListComponent.prototype.blur = function ($event) {
                    //console.log("blur = ", $event);
                    this.Timkiem();
                };
                NhapKhoListComponent.prototype.onKeyNgayDuyet = function ($event) {
                    if ($event.keyCode == 13) {
                        this.Timkiem();
                    }
                };
                NhapKhoListComponent.prototype.changeNgayDuyetRange = function ($event) {
                    this.Timkiem();
                };
                NhapKhoListComponent.prototype.CheckboxChange = function ($event, dangChoDuyet, tuChoiDuyet, daDuyet) {
                    if (dangChoDuyet === void 0) { dangChoDuyet = false; }
                    if (tuChoiDuyet === void 0) { tuChoiDuyet = false; }
                    if (daDuyet === void 0) { daDuyet = false; }
                    this.router.navigateByUrl('/nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                    if (dangChoDuyet) {
                        this.nhapKho.DangChoDuyet = $event;
                    }
                    else if (tuChoiDuyet) {
                        this.nhapKho.TuChoiDuyet = $event;
                    }
                    else if (daDuyet) {
                        this.nhapKho.DaDuyet = $event;
                    }
                    this.Timkiem();
                };
                NhapKhoListComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                NhapKhoListComponent.prototype.closePopupLoadingDatas = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                NhapKhoListComponent.prototype.inPhieu = function (id) {
                    var _this = this;
                    var self = this;
                    self.loadingPage();
                    self.inPhieuNhapKhoVatTu.YeuCauNhapKhoVatTuId = id;
                    self.inPhieuNhapKhoVatTu.CoTheoBenhVien = true;
                    self.inPhieuNhapKhoVatTu.CoTheoThongTu = true;
                    self.dialog.open(_xac_nhan_chon_phieu_in_vat_tu_popup_xac_nhan_chon_phieu_in_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_30__["XacNhanChonPhieuInVatTuPopupComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: self.inPhieuNhapKhoVatTu,
                    }).afterClosed().subscribe(function () {
                        _this.router.navigateByUrl('/nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                    });
                };
                NhapKhoListComponent.prototype.xoa = function (id) {
                    var _this = this;
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Delete)) {
                                _this.apiService.post("NhapKhoVatTu/XoaYeuCauNhapKhoVatTu?id=" + id).subscribe(function () {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                    _this.Timkiem();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                return NhapKhoListComponent;
            }());
            NhapKhoListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_27__["Location"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: true })
            ], NhapKhoListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], { static: false })
            ], NhapKhoListComponent.prototype, "windowChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], { static: false })
            ], NhapKhoListComponent.prototype, "confirm", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "trangThaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "headerTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhapTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "ngayNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayhdTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "ngayhdTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soChungTuTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "soChungTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "soPhieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "giaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHoaDonTemplate', { static: true })
            ], NhapKhoListComponent.prototype, "ngayHoaDonTemplate", void 0);
            NhapKhoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhap-kho-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-list.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.scss")).default]
                })
            ], NhapKhoListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-routing.module.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-routing.module.ts ***!
          \***********************************************************************************/
        /*! exports provided: NhapKhoRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoRoutingModule", function () { return NhapKhoRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _nhap_kho_list_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nhap-kho-list/nhap-kho-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _nhap_kho_create_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nhap-kho-create/nhap-kho-create.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.ts");
            /* harmony import */ var _nhap_kho_update_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nhap-kho-update/nhap-kho-update.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.ts");
            /* harmony import */ var _nhap_kho_tu_choi_duyet_nhap_kho_tu_choi_duyet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.ts");
            /* harmony import */ var _nhap_kho_tu_da_duyet_nhap_kho_tu_da_duyet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.ts");
            var routes = [
                {
                    path: '',
                    component: _nhap_kho_list_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_3__["NhapKhoListComponent"],
                    data: {
                        title: 'Danh Sách Nhập Kho Vật Tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].NhapKhoVatTu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _nhap_kho_create_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_7__["NhapKhoCreateComponent"],
                    data: {
                        title: 'Thêm Nhập Kho Vật Tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].NhapKhoVatTu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _nhap_kho_update_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_8__["NhapKhoUpdateComponent"],
                    data: {
                        title: 'Chỉnh Sửa Nhập Kho Vật Tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].NhapKhoVatTu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
                },
                {
                    path: 'tu-choi-duyet/:id',
                    component: _nhap_kho_tu_choi_duyet_nhap_kho_tu_choi_duyet_component__WEBPACK_IMPORTED_MODULE_9__["NhapKhoTuChoiDuyetComponent"],
                    data: {
                        title: 'Chỉnh Sửa Nhập Kho Vật Tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].NhapKhoVatTu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
                },
                {
                    path: 'da-duyet/:id',
                    component: _nhap_kho_tu_da_duyet_nhap_kho_tu_da_duyet_component__WEBPACK_IMPORTED_MODULE_10__["NhapKhoTuDaDuyetComponent"],
                    data: {
                        title: 'Chỉnh Sửa Nhập Kho Vật Tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].NhapKhoVatTu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
                },
            ];
            var NhapKhoRoutingModule = /** @class */ (function () {
                function NhapKhoRoutingModule() {
                }
                return NhapKhoRoutingModule;
            }());
            NhapKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], NhapKhoRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.scss": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.scss ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L25oYXAta2hvL25oYXAta2hvLXNoYXJlL25oYXAta2hvLXNoYXJlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts": 
        /*!***************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts ***!
          \***************************************************************************************************/
        /*! exports provided: NhapKhoShareComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoShareComponent", function () { return NhapKhoShareComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _nhap_kho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nhap-kho */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            var NhapKhoShareComponent = /** @class */ (function () {
                function NhapKhoShareComponent(intl, route, baseService, apiService, dialog, notificationService, authService, cdRef, router) {
                    this.intl = intl;
                    this.route = route;
                    this.baseService = baseService;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.cdRef = cdRef;
                    this.router = router;
                    this.isUpdate = false;
                    this.daDuyet = null;
                    this.tuChoiDuyet = null;
                    this.chuaDuyet = null;
                    this.nhapKho = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTu"]();
                    this.nhapKhoChiTiet = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTuChiTiet"]();
                    this.nhapKhoChiTietEdit = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTuChiTiet"]();
                    this.nhapKhoSource = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTu"]();
                    this.nhapKhoChiTietSource = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTuChiTiet"]();
                    this.ListIdUpdate = [];
                    this.gridColumns = [];
                    this.nhapKhoSearch = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTu"]();
                    this.nhapKhoChiTietSearch = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTuChiTiet"]();
                    this.format = 'n2';
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.giaNhapInDB = null;
                    this.searchString = "";
                    //
                    this.hopDongDisabled = false;
                    this.duocPhamDisabled = false;
                    this.nhomDisabled = false;
                    //
                    this.groups = [{ field: 'LoaiSuDungDisplay' }];
                    this.data = [];
                    this.loaiNhap = 1; // 1 là hdt, 2 là ncc
                    this.blockLoaiNhap = false;
                    this.disableNCC = false;
                    this.rowIndex = null;
                }
                NhapKhoShareComponent.prototype.totalTongThanhTien = function (field) {
                    switch (field) {
                        case 'ThanhTienTruocVat':
                            return this.data.reduce(function (sum, item) { return sum + item.ThanhTienTruocVat; }, 0);
                        case 'ThanhTienSauVat':
                            return this.data.reduce(function (sum, item) { return sum + item.ThanhTienSauVat; }, 0);
                        case 'VAT':
                            // return this.data.reduce((sum: any, item: { ThanhTienTruocVat: any; VAT: any }) => sum + (item.ThanhTienTruocVat * item.VAT / 100), 0);
                            return this.data.reduce(function (sum, item) { return sum + item.ThueVatLamTron; }, 0);
                    }
                };
                ;
                NhapKhoShareComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].NhapKhoVatTu;
                    this.id = this.route.snapshot.params.id;
                    this.nhapKho = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTu"]();
                    this.nhapKhoChiTiet = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTuChiTiet"]();
                    this.nhapKhoSource = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTu"]();
                    this.nhapKhoChiTietSource = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTuChiTiet"]();
                    var nhapKhoChiTietDataSource = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTuChiTiet"]();
                    this.nhapKhoSource.NhapKhoVatTuChiTiets.push(nhapKhoChiTietDataSource);
                    this.nhapKhoSource.NhapKhoVatTuChiTiets.splice(0, 1);
                    this.gridColumns = [
                        { Field: "LoaiSuDungDisplay", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomDisplayGroupHeaderTemplate },
                        { Field: "NhaThauDisplay", Title: "NCC", Width: 50, ShowTooltip: true, Sortable: false },
                        { Field: "HopDongThauDisplay", Title: "Hợp Đồng Thầu", ShowTooltip: true, Width: 50, Sortable: false },
                        { Field: "VatTuDisplay", Title: "Vật Tư", Width: 100, Sortable: false },
                        { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false },
                        { Field: "LoaiDisplay", Title: "Loại", Width: 40, Sortable: false, ShowTooltip: true },
                        { Field: "Solo", Title: "Số Lô", Width: 40, Sortable: false },
                        { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 80, Sortable: false, ShowTooltip: true },
                        { Field: "SoLuongNhapDisplay", Title: "SL", Width: 40, Sortable: false },
                        { Field: "DonGiaNhap", Title: "Đơn Giá", Width: 100, Sortable: false, Template: this.giaTemplate },
                        { Field: "ThanhTienTruocVat", Title: "Thành tiền (trước VAT)", Width: 100, Sortable: false, Template: this.thanhTienTruocVatTemplate, TemplateFooter: this.tongThanhTienTruocVatFooterTemplate },
                        { Field: "VAT", Title: "VAT(%)", Width: 40, Sortable: false, TemplateFooter: this.tongThanhTienVatFooterTemplate },
                        { Field: "ThanhTienSauVat", Title: "Thanh toán", Width: 100, Sortable: false, Template: this.thanhTienSauVatTemplate, TemplateFooter: this.tongThanhTienSauVatFooterTemplate },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 30, Sortable: false, ShowTooltip: true },
                        { Field: "MaRef", Title: "Mã REF", Width: 40, Sortable: false },
                        { Field: "MaVach", Title: "Mã Vạch", Width: 40, Sortable: false },
                        { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 40, Sortable: false },
                        { Field: "TenKhoNhapSauKhiDuyet", Title: "Xuất về kho", Width: 40, Sortable: false, ShowTooltip: true },
                        { Field: "TenNguoiNhapSauKhiDuyet", Title: "Người nhận", Width: 40, Sortable: false, ShowTooltip: true },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate }
                    ];
                    this.setDataGridView(this.nhapKhoSource.NhapKhoVatTuChiTiets);
                    if (this.id !== undefined && this.id !== null) {
                        this.getById(this.id);
                    }
                    else {
                        this.setNhanVienId();
                        this.getKhoVatTuYTe();
                    }
                    this.nhapKhoSearch = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTu"]();
                    this.nhapKhoChiTietSearch = new _nhap_kho__WEBPACK_IMPORTED_MODULE_2__["NhapKhoVatTuChiTiet"]();
                };
                NhapKhoShareComponent.prototype.getById = function (id) {
                    var _this = this;
                    //console.log("getById = ", window.location.href);
                    this.baseService.getById(id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.nhapKho = resultData;
                            _this.isCheckUrl(resultData.DuocKeToanDuyet);
                        }
                    });
                    var self = this;
                    self.grid._isLoading = true;
                    self.apiService.post("NhapKhoVatTu/GetGrid?id=" + id).subscribe(function (resultDataGrid) {
                        self.nhapKhoSource.NhapKhoVatTuChiTiets = resultDataGrid.NhapKhoVatTuChiTiets;
                        self.nhapKhoSource.NhapKhoVatTuChiTiets.forEach(function (e) {
                            e.IdView = Math.random();
                            _this.nhapKhoChiTiet.HopDongThauVatTuId = e.HopDongThauVatTuId;
                            _this.nhapKhoChiTiet.HopDongThauDisplay = e.HopDongThauDisplay;
                            _this.HopDongthauId = e.HopDongThauVatTuId;
                            _this.HopDongthauDisplay = e.HopDongThauDisplay;
                            _this.NhathauId = e.NhaThauId;
                            _this.NhathauDisplay = e.NhaThauDisplay;
                            _this.nhapKhoChiTiet.NhaThauId = e.NhaThauId;
                            _this.nhapKhoChiTiet.NhaThauDisplay = e.NhaThauDisplay;
                        });
                        self.nhapKhoSource.OldNhapKhoVatTuChiTiets = self.nhapKhoSource.NhapKhoVatTuChiTiets.slice();
                        self.ClearData();
                        self.setDataGridView(self.nhapKhoSource.NhapKhoVatTuChiTiets);
                        self.grid._isLoading = false;
                    }, function (err) {
                        self.grid._isLoading = false;
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                NhapKhoShareComponent.prototype.getKhoVatTuYTe = function () {
                    var _this = this;
                    this.apiService.get("NhapKhoVatTu/GetKhoVatTuYTe").subscribe(function (result) {
                        _this.nhapKhoChiTiet.KhoNhapSauKhiDuyetId = result.KeyId;
                        _this.nhapKhoChiTiet.KhoNhapSauKhiDuyetDisplayName = result.DisplayName;
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                    });
                };
                NhapKhoShareComponent.prototype.onDataBound = function (data) {
                    this.data = data.Data;
                };
                NhapKhoShareComponent.prototype.isCheckUrl = function (duocKeToanDuyet) {
                    var currentUrl = window.location.href;
                    if (duocKeToanDuyet == null) {
                        if (currentUrl.indexOf("/nhap-xuat/vat-tu/nhap-kho/chinh-sua/") == -1) {
                            this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/chinh-sua/" + this.id]);
                        }
                    }
                    else if (duocKeToanDuyet == false) {
                        if (currentUrl.indexOf("/nhap-xuat/vat-tu/nhap-kho/tu-choi-duyet/") == -1) {
                            this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/tu-choi-duyet/" + this.id]);
                        }
                    }
                    else {
                        if (currentUrl.indexOf("/nhap-xuat/vat-tu/nhap-kho/da-duyet/") == -1) {
                            this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/da-duyet/" + this.id]);
                        }
                    }
                };
                NhapKhoShareComponent.prototype.Huy = function () {
                    this.validationErrors = [];
                    this.ClearData();
                };
                NhapKhoShareComponent.prototype.ClearData = function (isIgnore) {
                    if (isIgnore === void 0) { isIgnore = false; }
                    this.isUpdate = false;
                    this.blockLoaiNhap = false;
                    this.nhapKhoChiTiet.VatTuBenhVienId = null;
                    this.nhapKhoChiTiet.DVT = null;
                    this.nhapKhoChiTiet.SoLuongNhap = null;
                    this.nhapKhoChiTiet.DonGiaNhap = null;
                    this.nhapKhoChiTiet.VAT = 0 /*this.nhapKhoChiTiet.LaVatTuBHYT ? 0 : null*/;
                    this.nhapKhoChiTiet.TiLeBHYTThanhToan = this.nhapKhoChiTiet.LaVatTuBHYT ? 100 : null;
                    this.nhapKhoChiTiet.Solo = null;
                    this.nhapKhoChiTiet.HanSuDung = null;
                    this.nhapKhoChiTiet.MaRef = null;
                    this.nhapKhoChiTiet.ThanhTienSauVat = null;
                    this.nhapKhoChiTiet.ThanhTienTruocVat = null;
                    this.nhapKhoChiTiet.ThueVatLamTron = null;
                    this.nhapKhoChiTiet.SoLuongNhapSoCap = null;
                    this.nhapKhoChiTiet.MaVach = null;
                    this.nhapKhoChiTiet.GhiChu = null;
                };
                NhapKhoShareComponent.prototype.nhaThauChange = function () {
                    this.nhapKhoChiTiet.KhoNhapSauKhiDuyetId = null;
                    this.nhapKhoChiTiet.NguoiNhapSauKhiDuyetId = null;
                };
                NhapKhoShareComponent.prototype.getSharedData = function () {
                    //return this.setFormAddNewSer();
                    this.nhapKho.NhapKhoVatTuChiTiets = this.nhapKhoSource.NhapKhoVatTuChiTiets;
                    this.nhapKho.OldNhapKhoVatTuChiTiets = this.nhapKhoSource.OldNhapKhoVatTuChiTiets.slice();
                    return this.nhapKho;
                };
                NhapKhoShareComponent.prototype.setNhanVienId = function () {
                    //vì user la nhân viên nên lấy id của nhau
                    var user = this.authService.getAccessUser();
                    this.nhapKho.NguoiNhapId = user.Id;
                };
                NhapKhoShareComponent.prototype.setDataGridView = function (dataSource) {
                    this.gridDataSource = null;
                    this.dataSourceCache = dataSource;
                    this.gridDataSource = {
                        data: this.dataSourceCache,
                        total: this.dataSourceCache.length
                    };
                    this.data = this.dataSourceCache;
                    //console.log("setDataGridView = ", this.gridDataSource, this.grid);
                    if (this.gridDataSource != undefined
                        && this.gridDataSource != null
                        && this.gridDataSource.total > 0) {
                        this.disableNCC = true;
                    }
                    else {
                        this.disableNCC = false;
                    }
                    if (!this.cdRef.destroyed) {
                        this.cdRef.detectChanges();
                    }
                    if (this.grid != undefined) {
                        this.grid.setDataSource();
                    }
                };
                NhapKhoShareComponent.prototype.UpdateRow = function () {
                    var _this = this;
                    this.nhapKhoChiTiet.LoaiNhap = this.loaiNhap;
                    // this.nhapKhoChiTiet = this.nhapKhoChiTietEdit;
                    var nhapKhoChiTietDataSource = this.nhapKhoChiTiet;
                    this.rowIndex = this.nhapKhoSource.NhapKhoVatTuChiTiets.findIndex(function (x) { return x.IdView == _this.nhapKhoChiTiet.IdView; });
                    //this.kiemTraSoLuongNhapDuocPhamTheoHopDongThau(nhapKhoChiTietDataSource, nhapKhoChiTietDataSource.IdView);
                    this.validationErrors = [];
                    var self = this;
                    if (self.validationErrors && !self.validationErrors.some(function (x) { return x; })) {
                        self.apiService.post("NhapKhoVatTu/ThemVatTuNhapKho", nhapKhoChiTietDataSource).subscribe(function (resultData) {
                            // update
                            _this.nhapKhoSource.NhapKhoVatTuChiTiets[_this.rowIndex] = resultData;
                            _this.setDataGridView(_this.nhapKhoSource.NhapKhoVatTuChiTiets);
                            // update
                            //this.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();
                            _this.duocPhamCombobox.focusManual();
                            _this.ClearData();
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                };
                NhapKhoShareComponent.prototype.UpdateRowGripView = function (dataItem) {
                    this.validationErrors = [];
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Update)) {
                        var self = this;
                        self.blockLoaiNhap = true;
                        self.isUpdate = true;
                        self.nhapKhoChiTiet = Object.assign({}, dataItem);
                        ;
                        self.loaiNhap = dataItem.LoaiNhap;
                        self.duocPhamCombobox.model = self.nhapKhoChiTiet.VatTuBenhVienId;
                        self.duocPhamCombobox.getDataForLookup();
                        // setTimeout(() => {
                        //     if (self.duocPhamCombobox && this.loaiNhap === 1) {
                        //         self.duocPhamCombobox.queryInfo.ParameterDependencies =
                        //             '{' + self.duocPhamCombobox.hierarchyKeyToListen + ':' + self.nhapKhoChiTiet.HopDongThauVatTuId + '}';
                        //         self.duocPhamCombobox.getDataForLookup();
                        //     }
                        // }, 100);
                        if (self.nhapKhoChiTiet.HopDongThauVatTuId) {
                            self.apiService.get("NhapKhoVatTu/GetPriceOnContract?hopDongThauId="
                                + self.nhapKhoChiTiet.HopDongThauVatTuId + "&vatTuId=" + self.nhapKhoChiTiet.VatTuBenhVienId).subscribe(function (result) {
                                self.giaNhapInDB = result;
                                self.nhapKhoChiTiet.GiaApThau = result;
                            }, function (err) {
                                self.notificationService.showError(err.Message);
                            });
                        }
                        else {
                            self.giaNhapInDB = self.nhapKhoChiTiet.DonGiaNhap;
                        }
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                NhapKhoShareComponent.prototype.DeleteRowGripView = function (IdView) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false, width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].MessLockTemplate, ["xóa dữ liệu ", ""]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            _this.nhapKhoSource.NhapKhoVatTuChiTiets.forEach(function (value, index) {
                                if (IdView == value.IdView) {
                                    _this.nhapKhoSource.NhapKhoVatTuChiTiets.splice(index, 1);
                                    if (_this.nhapKhoSource.NhapKhoVatTuChiTiets.length == 0)
                                        _this.isUpdate = false;
                                    _this.setDataGridView(_this.nhapKhoSource.NhapKhoVatTuChiTiets);
                                    _this.Huy();
                                    _this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["NhapXuatKhoMessage"].MessageRemoveItemGrid);
                                }
                            });
                        }
                    });
                };
                NhapKhoShareComponent.prototype.AddRow = function () {
                    var _this = this;
                    this.nhapKhoChiTiet.LoaiNhap = this.loaiNhap;
                    this.nhapKhoChiTiet.IdView = Math.random();
                    var nhapKhoChiTietDataSource = this.nhapKhoChiTiet;
                    this.validationErrors = [];
                    var self = this;
                    if (self.validationErrors && !self.validationErrors.some(function (x) { return x; })) {
                        self.apiService.post("NhapKhoVatTu/ThemVatTuNhapKho", nhapKhoChiTietDataSource).subscribe(function (resultData) {
                            _this.nhapKhoSource.NhapKhoVatTuChiTiets.unshift(resultData);
                            _this.setDataGridView(_this.nhapKhoSource.NhapKhoVatTuChiTiets);
                            //this.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();
                            _this.duocPhamCombobox.focusManual();
                            _this.ClearData();
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                };
                NhapKhoShareComponent.prototype.onChangeHanSuDung = function (event) {
                };
                NhapKhoShareComponent.prototype.onChangeLoaiNhap = function (event) {
                    this.ClearData(true);
                    this.nhapKhoChiTiet.TiLeBHYTThanhToan = event == 1 ? 100 : null;
                    this.nhapKhoChiTiet.LaVatTuBHYT = false;
                    this.cdRef.detectChanges();
                    if (this.id === undefined) {
                        this.getKhoVatTuYTe();
                    }
                };
                NhapKhoShareComponent.prototype.onChangeHopDongThau = function (event) {
                    if (event !== null && event !== undefined) {
                        this.nhapKhoChiTiet.VatTuBenhVienId = null;
                        this.nhapKhoChiTiet.DonGiaNhap = null;
                        this.giaNhapInDB = null;
                        this.nhapKhoChiTiet.HopDongThauVatTuId = event;
                    }
                    else {
                        this.nhapKhoChiTiet.HopDongThauVatTuId = 0;
                        this.nhapKhoChiTiet.DonGiaNhap = null;
                        this.giaNhapInDB = null;
                    }
                    this.nhapKhoChiTiet.LoaiSuDung = null;
                };
                NhapKhoShareComponent.prototype.onChangeVatTu = function (event) {
                    var _this = this;
                    if (event !== null && event !== undefined) {
                        if (this.validationErrors && this.validationErrors.some(function (x) { return x.Field.includes('DonGiaNhap'); }) && this.loaiNhap === 1) {
                            for (var _i = 0, _a = this.validationErrors.filter(function (x) { return x.Field.includes('DonGiaNhap'); }); _i < _a.length; _i++) {
                                var validateItem = _a[_i];
                                this.validationErrors.splice(this.validationErrors.indexOf(validateItem), 1);
                            }
                        }
                        this.nhapKhoChiTiet.DonGiaNhap = event.Gia;
                        this.nhapKhoChiTiet.GiaApThau = event.Gia;
                        this.nhapKhoChiTiet.DVT = event.DVT;
                        this.nhapKhoChiTiet.HeSoDinhMucDonViTinh = event.HeSoDinhMucDonViTinh;
                        this.giaNhapInDB = event.Gia;
                        //suggest nhom
                        var self_1 = this;
                        this.apiService.post("NhapKhoVatTu/SuggestLoaiSuDung?id=" + event.KeyId).subscribe(function (resultData) {
                            if (resultData != null && resultData != undefined) {
                                self_1.nhapKhoChiTiet.LoaiSuDung = resultData;
                            }
                            else {
                                self_1.nhapKhoChiTiet.LoaiSuDung = null;
                            }
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                                self_1.nhapKhoChiTiet.LoaiSuDung = null;
                            }
                        });
                    }
                    else {
                        this.nhapKhoChiTiet.DonGiaNhap = null;
                        this.nhapKhoChiTiet.GiaApThau = null;
                        this.giaNhapInDB = null;
                        this.nhapKhoChiTiet.LoaiSuDung = null;
                        this.nhapKhoChiTiet.SoLuongNhap = null;
                        this.nhapKhoChiTiet.DonGiaNhap = null;
                        this.nhapKhoChiTiet.VAT = 0;
                        this.nhapKhoChiTiet.ThanhTienSauVat = null;
                        this.nhapKhoChiTiet.ThanhTienTruocVat = null;
                        this.nhapKhoChiTiet.ThueVatLamTron = null;
                        this.nhapKhoChiTiet.DVT = null;
                    }
                };
                NhapKhoShareComponent.prototype.loaiNguoiGiaoChange = function ($event) {
                    this.nhapKho.NguoiGiaoId = null;
                    this.nhapKho.TenNguoiGiao = null;
                };
                NhapKhoShareComponent.prototype.loaiChange = function ($event) {
                    //console.log("loaiChange = ", $event);
                    if ($event == true) {
                        this.nhapKhoChiTiet.VAT = 0;
                        this.nhapKhoChiTiet.TiLeBHYTThanhToan = 100;
                    }
                    else {
                        this.nhapKhoChiTiet.TiLeBHYTThanhToan = null;
                    }
                };
                NhapKhoShareComponent.prototype.onKey = function (event) {
                    if (event.keyCode == 13) {
                        this.buttonThemAction();
                    }
                };
                NhapKhoShareComponent.prototype.onKeyHopDong = function (event) {
                    if (event.keyCode == 13) {
                        if (this.hopDongDisabled != true) {
                            this.buttonThemAction();
                        }
                        else {
                            this.hopDongDisabled = false;
                        }
                    }
                };
                NhapKhoShareComponent.prototype.openComboboxHopDong = function ($event) {
                    if ($event) {
                        this.hopDongDisabled = true;
                    }
                    else {
                        this.hopDongDisabled = false;
                    }
                };
                NhapKhoShareComponent.prototype.onKeyDuocPham = function (event) {
                    if (event.keyCode == 13) {
                        if (this.duocPhamDisabled != true) {
                            this.buttonThemAction();
                        }
                        else {
                            this.duocPhamDisabled = false;
                        }
                    }
                };
                NhapKhoShareComponent.prototype.openComboboxDuocPham = function ($event) {
                    if ($event) {
                        this.duocPhamDisabled = true;
                    }
                    else {
                        this.duocPhamDisabled = false;
                    }
                };
                NhapKhoShareComponent.prototype.onKeyNhom = function (event) {
                    if (event.keyCode == 13) {
                        if (this.nhomDisabled != true) {
                            this.buttonThemAction();
                        }
                        else {
                            this.nhomDisabled = false;
                        }
                    }
                };
                NhapKhoShareComponent.prototype.openComboboxNhom = function ($event) {
                    if ($event) {
                        this.nhomDisabled = true;
                    }
                    else {
                        this.nhomDisabled = false;
                    }
                };
                NhapKhoShareComponent.prototype.buttonThemAction = function () {
                    if (this.isUpdate == false) {
                        this.AddRow();
                    }
                    else {
                        this.UpdateRow();
                    }
                };
                NhapKhoShareComponent.prototype.modelChangeSoLuongNhapSoCap = function (event) {
                    if (this.nhapKhoChiTiet.HeSoDinhMucDonViTinh != null && this.nhapKhoChiTiet.HeSoDinhMucDonViTinh > 0) {
                        this.nhapKhoChiTiet.SoLuongNhap = event * this.nhapKhoChiTiet.HeSoDinhMucDonViTinh;
                    }
                };
                NhapKhoShareComponent.prototype.modelChangeSoLuongNhap = function (event) {
                    this.nhapKhoChiTiet.SoLuongNhap = event;
                    this.nhapKhoChiTiet.ThanhTienTruocVat = (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                        (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0);
                    var thanhTien = 0;
                    if (!this.nhapKhoChiTiet.LaVatTuBHYT) {
                        if (this.nhapKhoChiTiet.VAT != null) {
                            thanhTien = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                                (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * (this.nhapKhoChiTiet.VAT / 100));
                        }
                        else {
                            thanhTien = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0));
                        }
                    }
                    else {
                        thanhTien = ((event != null ? event : 0) *
                            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                            (event != null ? event : 0) *
                                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100));
                    }
                    var numberStr = thanhTien.toString().split(".");
                    if (numberStr.length > 1) {
                        var number = Number(numberStr[1]);
                        if (number < 10) {
                            if (number >= 5) {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                            }
                            else {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                            }
                        }
                        else {
                            if (number >= 50) {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                            }
                            else {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                            }
                        }
                    }
                    else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
                    }
                    this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
                };
                NhapKhoShareComponent.prototype.modelChangeDonGiaNhap = function (event) {
                    this.nhapKhoChiTiet.DonGiaNhap = event;
                    this.nhapKhoChiTiet.ThanhTienTruocVat = (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                        (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0);
                    var thanhTien = 0;
                    if (!this.nhapKhoChiTiet.LaVatTuBHYT) {
                        if (this.nhapKhoChiTiet.VAT != null) {
                            thanhTien = (
                            // (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                            // (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                            (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                                (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * (this.nhapKhoChiTiet.VAT / 100));
                        }
                        else {
                            thanhTien = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0));
                        }
                    }
                    var numberStr = thanhTien.toString().split(".");
                    if (numberStr.length > 1) {
                        var number = Number(numberStr[1]);
                        if (number < 10) {
                            if (number >= 5) {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                            }
                            else {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                            }
                        }
                        else {
                            if (number >= 50) {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                            }
                            else {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                            }
                        }
                    }
                    else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
                    }
                    this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
                };
                NhapKhoShareComponent.prototype.modelChangeVAT = function (event) {
                    var thanhTien = (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                        (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                        (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((event != null ? event : 0) / 100);
                    var numberStr = thanhTien.toString().split(".");
                    if (numberStr.length > 1) {
                        var number = Number(numberStr[1]);
                        if (number < 10) {
                            if (number >= 5) {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                            }
                            else {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                            }
                        }
                        else {
                            if (number >= 50) {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                            }
                            else {
                                this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                            }
                        }
                    }
                    else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
                    }
                    this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
                };
                NhapKhoShareComponent.prototype.modelChangeThanhTienTruocVat = function (event) {
                    this.nhapKhoChiTiet.ThanhTienTruocVat = event;
                    this.nhapKhoChiTiet.DonGiaNhap = (this.nhapKhoChiTiet.ThanhTienTruocVat != null ? this.nhapKhoChiTiet.ThanhTienTruocVat : 0) / (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0);
                    if (!this.nhapKhoChiTiet.LaVatTuBHYT) {
                        var thanhTien = 0;
                        if (this.nhapKhoChiTiet.VAT != null) {
                            thanhTien = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                                (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * (this.nhapKhoChiTiet.VAT / 100));
                        }
                        else {
                            thanhTien = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0));
                        }
                        var numberStr = thanhTien.toString().split(".");
                        if (numberStr.length > 1) {
                            var number = Number(numberStr[1]);
                            if (number < 10) {
                                if (number >= 5) {
                                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat + Math.ceil(thanhTien);
                                }
                                else {
                                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat + Math.floor(thanhTien);
                                }
                            }
                            else {
                                if (number >= 50) {
                                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat + Math.ceil(thanhTien);
                                }
                                else {
                                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat + Math.floor(thanhTien);
                                }
                            }
                        }
                        else {
                            this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
                        }
                    }
                    else {
                        var thanhTien = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                            (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100));
                        var numberStr = thanhTien.toString().split(".");
                        if (numberStr.length > 1) {
                            var number = Number(numberStr[1]);
                            if (number < 10) {
                                if (number >= 5) {
                                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                                }
                                else {
                                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                                }
                            }
                            else {
                                if (number >= 50) {
                                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                                }
                                else {
                                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                                }
                            }
                        }
                        else {
                            this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
                        }
                    }
                    this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
                };
                NhapKhoShareComponent.prototype.modelThanhTienSauVat = function (event) {
                    if (event != undefined && event != null) {
                        var thanhTienVAT = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100));
                        var numberFixed = thanhTienVAT.toFixed(2);
                        var numberStr = numberFixed.split(".");
                        if (numberStr.length > 1) {
                            var number = Number(numberStr[1]);
                            if (number < 10) {
                                if (number >= 5) {
                                    this.nhapKhoChiTiet.ThueVatLamTron = Math.ceil(Number(numberFixed));
                                }
                                else {
                                    this.nhapKhoChiTiet.ThueVatLamTron = Math.floor(Number(numberFixed));
                                }
                            }
                            else {
                                if (number >= 50) {
                                    this.nhapKhoChiTiet.ThueVatLamTron = Math.ceil(Number(numberFixed));
                                }
                                else {
                                    this.nhapKhoChiTiet.ThueVatLamTron = Math.floor(Number(numberFixed));
                                }
                            }
                        }
                        else {
                            if (this.nhapKhoChiTiet.VAT == undefined || this.nhapKhoChiTiet.VAT == null) {
                                this.nhapKhoChiTiet.ThueVatLamTron = 0;
                            }
                        }
                    }
                    else {
                        this.nhapKhoChiTiet.ThueVatLamTron = 0;
                    }
                };
                NhapKhoShareComponent.prototype.blurChangeSoChungTu = function (event) {
                    if (this.nhapKho.SoChungTu != null && this.nhapKho.SoChungTu != "") {
                        if (this.nhapKho.SoChungTu.length < 7) {
                            var str = "";
                            for (var i = 0; i < 7 - this.nhapKho.SoChungTu.length; i++) {
                                str += "0";
                            }
                            this.nhapKho.SoChungTu = str + this.nhapKho.SoChungTu;
                        }
                    }
                };
                return NhapKhoShareComponent;
            }());
            NhapKhoShareComponent.ctorParameters = function () { return [
                { type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_11__["IntlService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_13__["BaseService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NhapKhoShareComponent.prototype, "isUpdate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NhapKhoShareComponent.prototype, "daDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NhapKhoShareComponent.prototype, "tuChoiDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NhapKhoShareComponent.prototype, "chuaDuyet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NhapKhoShareComponent.prototype, "validationErrors", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], NhapKhoShareComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerTemplate', { static: true })
            ], NhapKhoShareComponent.prototype, "headerTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
            ], NhapKhoShareComponent.prototype, "giaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTruocVatTemplate', { static: true })
            ], NhapKhoShareComponent.prototype, "thanhTienTruocVatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienSauVatTemplate', { static: true })
            ], NhapKhoShareComponent.prototype, "thanhTienSauVatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongThanhTienTruocVatFooterTemplate', { static: true })
            ], NhapKhoShareComponent.prototype, "tongThanhTienTruocVatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongThanhTienVatFooterTemplate', { static: true })
            ], NhapKhoShareComponent.prototype, "tongThanhTienVatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongThanhTienSauVatFooterTemplate', { static: true })
            ], NhapKhoShareComponent.prototype, "tongThanhTienSauVatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false })
            ], NhapKhoShareComponent.prototype, "grid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocPhamCombobox', { static: false })
            ], NhapKhoShareComponent.prototype, "duocPhamCombobox", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDisplayGroupHeaderTemplate', { static: true })
            ], NhapKhoShareComponent.prototype, "nhomDisplayGroupHeaderTemplate", void 0);
            NhapKhoShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhap-kho-share',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-share.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-share.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.scss")).default]
                })
            ], NhapKhoShareComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.scss": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.scss ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.title-alert {\n  color: red;\n  text-align: right;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vbmhhcC1raG8tdHUtY2hvaS1kdXlldC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFxuaGFwLWtob1xcbmhhcC1raG8tdHUtY2hvaS1kdXlldFxcbmhhcC1raG8tdHUtY2hvaS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vbmhhcC1raG8tdHUtY2hvaS1kdXlldC9uaGFwLWtoby10dS1jaG9pLWR1eWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L25oYXAta2hvL25oYXAta2hvLXR1LWNob2ktZHV5ZXQvbmhhcC1raG8tdHUtY2hvaS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLnRpdGxlLWFsZXJ0IHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG59IiwiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4udGl0bGUtYWxlcnQge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: NhapKhoTuChoiDuyetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoTuChoiDuyetComponent", function () { return NhapKhoTuChoiDuyetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_modules_main_ke_toan_duyet_nhap_kho_vat_tu_duyet_nhap_kho_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modules/main/ke-toan/duyet-nhap-kho-vat-tu/duyet-nhap-kho.model */ "./src/app/modules/main/ke-toan/duyet-nhap-kho-vat-tu/duyet-nhap-kho.model.ts");
            var NhapKhoTuChoiDuyetComponent = /** @class */ (function () {
                function NhapKhoTuChoiDuyetComponent(router, route, baseService, apiService, authService, dialog, notificationService, errorService) {
                    this.router = router;
                    this.route = route;
                    this.baseService = baseService;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.errorService = errorService;
                    this.nhapKhoVatTu = new src_app_modules_main_ke_toan_duyet_nhap_kho_vat_tu_duyet_nhap_kho_model__WEBPACK_IMPORTED_MODULE_17__["NhapKhoVatTu"]();
                    this.showToastNotifyError = false;
                    this.loading = false;
                }
                NhapKhoTuChoiDuyetComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoVatTu;
                    this.id = this.route.snapshot.params.id;
                };
                NhapKhoTuChoiDuyetComponent.prototype.huy = function () {
                    this.router.navigateByUrl('nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                };
                NhapKhoTuChoiDuyetComponent.prototype.luu = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        var self = this;
                        self.shared.validationErrors = null;
                        self.loading = true;
                        self.nhapKhoVatTu = self.shared.getSharedData();
                        self.apiService.post("NhapKhoVatTu/CapNhatYeuCauNhapKhoVatTu", self.nhapKhoVatTu).subscribe(function (resultData) {
                            //self.router.navigate(['nhap-xuat/vat-tu/nhap-kho']);
                            self.router.navigateByUrl('nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Chỉnh sửa"]));
                            self.loading = false;
                        }, function (err) {
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
                };
                NhapKhoTuChoiDuyetComponent.prototype.luuVaDuyetLai = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        var self = this;
                        self.shared.validationErrors = null;
                        self.loading = true;
                        self.nhapKhoVatTu = self.shared.getSharedData();
                        self.apiService.post("NhapKhoVatTu/CapNhatYeuCauNhapKhoVatTu", self.nhapKhoVatTu).subscribe(function (resultData) {
                            // self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                            // self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            // self.loading = false;
                            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                                disableClose: false,
                                width: '400px',
                                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["NhapKhoMessage"].MessageLuuVaGoiDuyet }
                            }).afterClosed().subscribe(function (result) {
                                if (result == "Yes") {
                                    self.apiService.post("NhapKhoVatTu/GoiDuyetLai?id=" + self.id).subscribe(function (result) {
                                        //self.router.navigate(['nhap-xuat/vat-tu/nhap-kho']);
                                        self.router.navigateByUrl('nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Lưu và gửi duyệt lại"]));
                                    }, function (err) {
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
                                    //self.router.navigate(['tiep-nhan-trong-ngay/']);
                                    //self.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
                                }
                                else {
                                    //self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                                    //self.ngOnInit();
                                }
                            });
                        }, function (err) {
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
                };
                return NhapKhoTuChoiDuyetComponent;
            }());
            NhapKhoTuChoiDuyetComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
                { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_5__["NhapKhoShareComponent"], { static: true })
            ], NhapKhoTuChoiDuyetComponent.prototype, "shared", void 0);
            NhapKhoTuChoiDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhap-kho-tu-choi-duyet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-tu-choi-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-tu-choi-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.scss")).default]
                })
            ], NhapKhoTuChoiDuyetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.scss": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.scss ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.title-alert-green {\n  color: green;\n  text-align: right;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vbmhhcC1raG8tdHUtZGEtZHV5ZXQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXHZhdC10dVxcbmhhcC1raG9cXG5oYXAta2hvLXR1LWRhLWR1eWV0XFxuaGFwLWtoby10dS1kYS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vbmhhcC1raG8tdHUtZGEtZHV5ZXQvbmhhcC1raG8tdHUtZGEtZHV5ZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vbmhhcC1raG8tdHUtZGEtZHV5ZXQvbmhhcC1raG8tdHUtZGEtZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi50aXRsZS1hbGVydC1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG59IiwiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4udGl0bGUtYWxlcnQtZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.ts": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: NhapKhoTuDaDuyetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoTuDaDuyetComponent", function () { return NhapKhoTuDaDuyetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            var NhapKhoTuDaDuyetComponent = /** @class */ (function () {
                function NhapKhoTuDaDuyetComponent(router, route, apiService, authService, dialog) {
                    this.router = router;
                    this.route = route;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.dialog = dialog;
                }
                NhapKhoTuDaDuyetComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].NhapKhoVatTu;
                    var id = this.route.snapshot.params.id;
                };
                NhapKhoTuDaDuyetComponent.prototype.huy = function () {
                    this.router.navigateByUrl('nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                };
                return NhapKhoTuDaDuyetComponent;
            }());
            NhapKhoTuDaDuyetComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_2__["NhapKhoShareComponent"], { static: true })
            ], NhapKhoTuDaDuyetComponent.prototype, "shared", void 0);
            NhapKhoTuDaDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhap-kho-tu-da-duyet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-tu-da-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-tu-da-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.scss")).default]
                })
            ], NhapKhoTuDaDuyetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.scss": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.scss ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vbmhhcC1raG8tdXBkYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXG5oYXAta2hvXFxuaGFwLWtoby11cGRhdGVcXG5oYXAta2hvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vbmhhcC1raG8tdXBkYXRlL25oYXAta2hvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L25oYXAta2hvL25oYXAta2hvLXVwZGF0ZS9uaGFwLWtoby11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: NhapKhoUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoUpdateComponent", function () { return NhapKhoUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _nhap_kho__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nhap-kho */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _ds_vat_tu_trung_ncc_popup_ds_vat_tu_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.ts");
            /* harmony import */ var _xac_nhan_chon_phieu_in_vat_tu_popup_xac_nhan_chon_phieu_in_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.ts");
            var NhapKhoUpdateComponent = /** @class */ (function () {
                function NhapKhoUpdateComponent(apiService, dialog, notificationService, authService, router, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.ref = ref;
                    this.location = location;
                    this.inPhieuNhapKhoVatTu = new _nhap_kho__WEBPACK_IMPORTED_MODULE_7__["InPhieuNhapKhoVatTu"]();
                    this.nhapKhoVatTu = new _nhap_kho__WEBPACK_IMPORTED_MODULE_7__["NhapKhoVatTu"]();
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].NhapKhoVatTu;
                }
                NhapKhoUpdateComponent.prototype.ngOnInit = function () {
                };
                NhapKhoUpdateComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                NhapKhoUpdateComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                NhapKhoUpdateComponent.prototype.cancel = function () {
                    this.location.back();
                };
                NhapKhoUpdateComponent.prototype.update = function () {
                    var _this = this;
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn lưu dữ liệu này không?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.nhapKhoVatTu = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                                self.loadingPage();
                                self.apiService.post("NhapKhoVatTu/CapNhatYeuCauNhapKhoVatTu", self.nhapKhoVatTu).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        if (result.length > 0) {
                                            self.dialog.open(_ds_vat_tu_trung_ncc_popup_ds_vat_tu_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_18__["DsVatTuTrungNccPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: result,
                                            }).afterClosed().subscribe(function () {
                                            });
                                        }
                                        else {
                                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                            self.closePopupLoadingData();
                                            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
                                                disableClose: false,
                                                width: "500px",
                                                data: {
                                                    Title: "Xác nhận in",
                                                    Message: "Bạn có muốn in phiếu nhập kho này không ?",
                                                },
                                            }).afterClosed().subscribe(function (res) {
                                                if (res == "Yes") {
                                                    self.inPhieuNhapKhoVatTu.HostingName = window.location.protocol + "//" + window.location.host;
                                                    self.inPhieuNhapKhoVatTu.YeuCauNhapKhoVatTuId = result;
                                                    self.inPhieuNhapKhoVatTu.CoTheoBenhVien = true;
                                                    self.inPhieuNhapKhoVatTu.CoTheoThongTu = true;
                                                    self.dialog.open(_xac_nhan_chon_phieu_in_vat_tu_popup_xac_nhan_chon_phieu_in_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_19__["XacNhanChonPhieuInVatTuPopupComponent"], {
                                                        disableClose: false,
                                                        width: "400px",
                                                        data: self.inPhieuNhapKhoVatTu,
                                                    }).afterClosed().subscribe(function () {
                                                        _this.router.navigateByUrl('/nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                                                    });
                                                    // self.loadingPage();
                                                    // self.apiService.post<any>("NhapKhoVatTu/InPhieuYeuCauNhapKhoVatTu", self.inPhieuNhapKhoVatTu).subscribe(
                                                    //   resData => {
                                                    //     if (resData != undefined && resData != null) {
                                                    //       self.closePopupLoadingData();
                                                    //       self.dialog.open(PhieuNhapKhoVatTuPopupComponent, {
                                                    //         disableClose: false,
                                                    //         width: '1200px',
                                                    //         data: resData,
                                                    //       }).afterClosed().subscribe(() => {
                                                    //         self.closePopupLoadingData();
                                                    //         this.location.back();
                                                    //       });
                                                    //     }
                                                    //   },
                                                    //   (err: ApiError) => {
                                                    //     self.validationErrors = err.ValidationErrors;
                                                    //     if (err.Message != "Validation Failed") {
                                                    //       self.notificationService.showError(err.Message);
                                                    //     }
                                                    //     self.closePopupLoadingData();
                                                    //   }
                                                    // );
                                                }
                                                else {
                                                    // this.location.back();
                                                    _this.router.navigateByUrl('/nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                                                }
                                            });
                                        }
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupLoadingData();
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                NhapKhoUpdateComponent.prototype.onUpdated = function () {
                    //this.router.navigate(['nhap-xuat/vat-tu/nhap-kho']);
                    this.router.navigateByUrl('nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
                };
                return NhapKhoUpdateComponent;
            }());
            NhapKhoUpdateComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_2__["NhapKhoShareComponent"], { static: true })
            ], NhapKhoUpdateComponent.prototype, "shared", void 0);
            NhapKhoUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nhap-kho-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-update.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.scss")).default]
                })
            ], NhapKhoUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.module.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.module.ts ***!
          \***************************************************************************/
        /*! exports provided: NhapKhoModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoModule", function () { return NhapKhoModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _nhap_kho_list_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nhap-kho-list/nhap-kho-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-list/nhap-kho-list.component.ts");
            /* harmony import */ var _nhap_kho_create_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nhap-kho-create/nhap-kho-create.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-create/nhap-kho-create.component.ts");
            /* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
            /* harmony import */ var _nhap_kho_tu_choi_duyet_nhap_kho_tu_choi_duyet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.ts");
            /* harmony import */ var _nhap_kho_tu_da_duyet_nhap_kho_tu_da_duyet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.ts");
            /* harmony import */ var _nhap_kho_update_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nhap-kho-update/nhap-kho-update.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-update/nhap-kho-update.component.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _nhap_kho_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./nhap-kho-routing.module */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho-routing.module.ts");
            /* harmony import */ var _nhap_kho_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./nhap-kho.service */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _phieu_nhap_kho_vat_tu_popup_phieu_nhap_kho_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.ts");
            /* harmony import */ var _ds_vat_tu_trung_ncc_popup_ds_vat_tu_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component.ts");
            /* harmony import */ var _xac_nhan_chon_phieu_in_vat_tu_popup_xac_nhan_chon_phieu_in_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.ts");
            var NhapKhoModule = /** @class */ (function () {
                function NhapKhoModule() {
                }
                return NhapKhoModule;
            }());
            NhapKhoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _nhap_kho_list_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_13__["NhapKhoListComponent"],
                        _nhap_kho_create_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_14__["NhapKhoCreateComponent"],
                        _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_15__["NhapKhoShareComponent"],
                        _nhap_kho_tu_choi_duyet_nhap_kho_tu_choi_duyet_component__WEBPACK_IMPORTED_MODULE_16__["NhapKhoTuChoiDuyetComponent"],
                        _nhap_kho_tu_da_duyet_nhap_kho_tu_da_duyet_component__WEBPACK_IMPORTED_MODULE_17__["NhapKhoTuDaDuyetComponent"],
                        _nhap_kho_update_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_18__["NhapKhoUpdateComponent"],
                        _phieu_nhap_kho_vat_tu_popup_phieu_nhap_kho_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_26__["PhieuNhapKhoVatTuPopupComponent"],
                        _ds_vat_tu_trung_ncc_popup_ds_vat_tu_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_27__["DsVatTuTrungNccPopupComponent"],
                        _xac_nhan_chon_phieu_in_vat_tu_popup_xac_nhan_chon_phieu_in_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_28__["XacNhanChonPhieuInVatTuPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                        _nhap_kho_routing_module__WEBPACK_IMPORTED_MODULE_23__["NhapKhoRoutingModule"]
                    ],
                    providers: [
                        _nhap_kho_service__WEBPACK_IMPORTED_MODULE_24__["NhapKhoService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_25__["BaseService"], useClass: _nhap_kho_service__WEBPACK_IMPORTED_MODULE_24__["NhapKhoService"] },
                    ],
                    entryComponents: [
                        _phieu_nhap_kho_vat_tu_popup_phieu_nhap_kho_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_26__["PhieuNhapKhoVatTuPopupComponent"],
                        _ds_vat_tu_trung_ncc_popup_ds_vat_tu_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_27__["DsVatTuTrungNccPopupComponent"],
                        _xac_nhan_chon_phieu_in_vat_tu_popup_xac_nhan_chon_phieu_in_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_28__["XacNhanChonPhieuInVatTuPopupComponent"],
                    ]
                })
            ], NhapKhoModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.service.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.service.ts ***!
          \****************************************************************************/
        /*! exports provided: NhapKhoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoService", function () { return NhapKhoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var NhapKhoService = /** @class */ (function (_super) {
                __extends(NhapKhoService, _super);
                function NhapKhoService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'NhapKhoVatTu';
                    return _this;
                }
                return NhapKhoService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            NhapKhoService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            NhapKhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NhapKhoService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.ts ***!
          \********************************************************************/
        /*! exports provided: NhapKhoVatTuSearch, rangeDate, LookupItemViTriVo, NhapKhoVatTu, NhapKhoVatTuChiTiet, InPhieuNhapKhoVatTu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuSearch", function () { return NhapKhoVatTuSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupItemViTriVo", function () { return LookupItemViTriVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTu", function () { return NhapKhoVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuChiTiet", function () { return NhapKhoVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuNhapKhoVatTu", function () { return InPhieuNhapKhoVatTu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var NhapKhoVatTuSearch = /** @class */ (function () {
                function NhapKhoVatTuSearch(DangChoDuyet, TuChoiDuyet, DaDuyet, SearchString, RangeNhap, RangeDuyet) {
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeNhap === void 0) { RangeNhap = new rangeDate; }
                    if (RangeDuyet === void 0) { RangeDuyet = new rangeDate; }
                    this.DangChoDuyet = DangChoDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.DaDuyet = DaDuyet;
                    this.SearchString = SearchString;
                    this.RangeNhap = RangeNhap;
                    this.RangeDuyet = RangeDuyet;
                }
                return NhapKhoVatTuSearch;
            }());
            var rangeDate = /** @class */ (function () {
                function rangeDate(startDate, endDate) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return rangeDate;
            }());
            var LookupItemViTriVo = /** @class */ (function () {
                function LookupItemViTriVo(KeyId, DisplayName, KhoVatTuId) {
                    this.KeyId = KeyId;
                    this.DisplayName = DisplayName;
                    this.KhoVatTuId = KhoVatTuId;
                }
                return LookupItemViTriVo;
            }());
            var NhapKhoVatTu = /** @class */ (function () {
                function NhapKhoVatTu(Id, SoChungTu, NgayDuyet, NhanVienDuyetId, 
                //public LoaiNhapKho: number = 1,
                //public TenLoaiNhapKho: string = null,
                NguoiGiaoId, TenNguoiGiao, NguoiNhapId, 
                //public TenNguoiNhap: string = null,
                LoaiNguoiGiao, NhapKhoVatTuChiTiets, OldNhapKhoVatTuChiTiets, NgayNhap, NgayHoaDon, DaXuatKho, LyDoKhongDuyet, DuocKeToanDuyet, KyHieuHoaDon, KhoVatTuYTeId, KhoVatTuYTeDisplayName) {
                    if (Id === void 0) { Id = 0; }
                    if (SoChungTu === void 0) { SoChungTu = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (NhanVienDuyetId === void 0) { NhanVienDuyetId = null; }
                    if (NguoiGiaoId === void 0) { NguoiGiaoId = null; }
                    if (TenNguoiGiao === void 0) { TenNguoiGiao = null; }
                    if (NguoiNhapId === void 0) { NguoiNhapId = null; }
                    if (LoaiNguoiGiao === void 0) { LoaiNguoiGiao = 1; }
                    if (NhapKhoVatTuChiTiets === void 0) { NhapKhoVatTuChiTiets = []; }
                    if (OldNhapKhoVatTuChiTiets === void 0) { OldNhapKhoVatTuChiTiets = []; }
                    if (NgayNhap === void 0) { NgayNhap = new Date(); }
                    if (NgayHoaDon === void 0) { NgayHoaDon = new Date(); }
                    if (DaXuatKho === void 0) { DaXuatKho = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (DuocKeToanDuyet === void 0) { DuocKeToanDuyet = null; }
                    if (KyHieuHoaDon === void 0) { KyHieuHoaDon = null; }
                    if (KhoVatTuYTeId === void 0) { KhoVatTuYTeId = null; }
                    if (KhoVatTuYTeDisplayName === void 0) { KhoVatTuYTeDisplayName = null; }
                    this.Id = Id;
                    this.SoChungTu = SoChungTu;
                    this.NgayDuyet = NgayDuyet;
                    this.NhanVienDuyetId = NhanVienDuyetId;
                    this.NguoiGiaoId = NguoiGiaoId;
                    this.TenNguoiGiao = TenNguoiGiao;
                    this.NguoiNhapId = NguoiNhapId;
                    this.LoaiNguoiGiao = LoaiNguoiGiao;
                    this.NhapKhoVatTuChiTiets = NhapKhoVatTuChiTiets;
                    this.OldNhapKhoVatTuChiTiets = OldNhapKhoVatTuChiTiets;
                    this.NgayNhap = NgayNhap;
                    this.NgayHoaDon = NgayHoaDon;
                    this.DaXuatKho = DaXuatKho;
                    this.LyDoKhongDuyet = LyDoKhongDuyet;
                    this.DuocKeToanDuyet = DuocKeToanDuyet;
                    this.KyHieuHoaDon = KyHieuHoaDon;
                    this.KhoVatTuYTeId = KhoVatTuYTeId;
                    this.KhoVatTuYTeDisplayName = KhoVatTuYTeDisplayName;
                }
                return NhapKhoVatTu;
            }());
            var NhapKhoVatTuChiTiet = /** @class */ (function () {
                function NhapKhoVatTuChiTiet(
                // public Id: number =0,
                // public IdView: number = Math.random(),
                // public NhapKhoVatTuId: number = 0,
                // public VatTuBenhVienId: number = null,
                // public TenVatTu: string = null,
                // public HopDongThauVatTuId: number = 0,
                // public TenHopDongThau: string = null,
                // public KhoVatTuViTriId: number = null,
                // public ViTri: string = null,
                // public DatChatLuong: boolean = true,
                // public TenDatChatLuong: string = "Đạt",
                // public HanSuDung: Date = null,
                // public TextHanSuDung: string = null,
                // public Solo: string = null,
                // public SoLuongNhap:  number = null,
                // public SoLuongNhapTrongGrid: number = 0,
                // public SoLuongHienTaiVatTuTheoHopDongThauDaLuu: number = 0,
                // public DonGiaNhap: number = null,
                // public DonGiaBan: number = null,
                // public TextDonGiaNhap: string = null,
                // public TextDonGiaBan: string  = null,
                // public TextChietKhau: string = null,
                // public TextSoLuongNhap: string = null,
                // public TextVAT: string = null,
                // public VAT: number = null,
                // public ChietKhau: number = null,
                // public MaVach: string = null,
                // public NgayNhap: Date = null,
                TiLeBHYTThanhToan, Id, IdView, HopDongThauVatTuId, VatTuBenhVienId, LaVatTuBHYT, 
                //public DuocPhamBenhVienPhanNhomId: number = null,
                Solo, HanSuDung, MaVach, SoLuongNhapSoCap, SoLuongNhap, HeSoDinhMucDonViTinh, GiaApThau, DonGiaNhap, VAT, KhoViTriId, LoaiNhap, // 1 là hdt, 2 là ncc
                NhaThauId, NhaThauDisplay, DVT, LoaiSuDung, 
                //for grid
                HopDongThauDisplay, VatTuDisplay, LoaiDisplay, NhomDisplay, HanSuDungDisplay, SoLuongNhapDisplay, ViTriDisplay, MaRef, KhoNhapSauKhiDuyetId, KhoNhapSauKhiDuyetDisplayName, NguoiNhapSauKhiDuyetId, ThanhTienTruocVat, ThanhTienSauVat, ThueVatLamTron, GhiChu) {
                    if (TiLeBHYTThanhToan === void 0) { TiLeBHYTThanhToan = null; }
                    if (Id === void 0) { Id = 0; }
                    if (IdView === void 0) { IdView = Math.random(); }
                    if (HopDongThauVatTuId === void 0) { HopDongThauVatTuId = null; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = false; }
                    if (Solo === void 0) { Solo = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (MaVach === void 0) { MaVach = null; }
                    if (SoLuongNhapSoCap === void 0) { SoLuongNhapSoCap = null; }
                    if (SoLuongNhap === void 0) { SoLuongNhap = null; }
                    if (HeSoDinhMucDonViTinh === void 0) { HeSoDinhMucDonViTinh = null; }
                    if (GiaApThau === void 0) { GiaApThau = null; }
                    if (DonGiaNhap === void 0) { DonGiaNhap = null; }
                    if (VAT === void 0) { VAT = 0; }
                    if (KhoViTriId === void 0) { KhoViTriId = null; }
                    if (LoaiNhap === void 0) { LoaiNhap = 1; }
                    if (NhaThauId === void 0) { NhaThauId = null; }
                    if (NhaThauDisplay === void 0) { NhaThauDisplay = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (LoaiSuDung === void 0) { LoaiSuDung = null; }
                    if (HopDongThauDisplay === void 0) { HopDongThauDisplay = null; }
                    if (VatTuDisplay === void 0) { VatTuDisplay = null; }
                    if (LoaiDisplay === void 0) { LoaiDisplay = null; }
                    if (NhomDisplay === void 0) { NhomDisplay = null; }
                    if (HanSuDungDisplay === void 0) { HanSuDungDisplay = null; }
                    if (SoLuongNhapDisplay === void 0) { SoLuongNhapDisplay = null; }
                    if (ViTriDisplay === void 0) { ViTriDisplay = null; }
                    if (MaRef === void 0) { MaRef = null; }
                    if (KhoNhapSauKhiDuyetId === void 0) { KhoNhapSauKhiDuyetId = null; }
                    if (KhoNhapSauKhiDuyetDisplayName === void 0) { KhoNhapSauKhiDuyetDisplayName = null; }
                    if (NguoiNhapSauKhiDuyetId === void 0) { NguoiNhapSauKhiDuyetId = null; }
                    if (ThanhTienTruocVat === void 0) { ThanhTienTruocVat = 0; }
                    if (ThanhTienSauVat === void 0) { ThanhTienSauVat = 0; }
                    if (ThueVatLamTron === void 0) { ThueVatLamTron = 0; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    this.TiLeBHYTThanhToan = TiLeBHYTThanhToan;
                    this.Id = Id;
                    this.IdView = IdView;
                    this.HopDongThauVatTuId = HopDongThauVatTuId;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.Solo = Solo;
                    this.HanSuDung = HanSuDung;
                    this.MaVach = MaVach;
                    this.SoLuongNhapSoCap = SoLuongNhapSoCap;
                    this.SoLuongNhap = SoLuongNhap;
                    this.HeSoDinhMucDonViTinh = HeSoDinhMucDonViTinh;
                    this.GiaApThau = GiaApThau;
                    this.DonGiaNhap = DonGiaNhap;
                    this.VAT = VAT;
                    this.KhoViTriId = KhoViTriId;
                    this.LoaiNhap = LoaiNhap;
                    this.NhaThauId = NhaThauId;
                    this.NhaThauDisplay = NhaThauDisplay;
                    this.DVT = DVT;
                    this.LoaiSuDung = LoaiSuDung;
                    this.HopDongThauDisplay = HopDongThauDisplay;
                    this.VatTuDisplay = VatTuDisplay;
                    this.LoaiDisplay = LoaiDisplay;
                    this.NhomDisplay = NhomDisplay;
                    this.HanSuDungDisplay = HanSuDungDisplay;
                    this.SoLuongNhapDisplay = SoLuongNhapDisplay;
                    this.ViTriDisplay = ViTriDisplay;
                    this.MaRef = MaRef;
                    this.KhoNhapSauKhiDuyetId = KhoNhapSauKhiDuyetId;
                    this.KhoNhapSauKhiDuyetDisplayName = KhoNhapSauKhiDuyetDisplayName;
                    this.NguoiNhapSauKhiDuyetId = NguoiNhapSauKhiDuyetId;
                    this.ThanhTienTruocVat = ThanhTienTruocVat;
                    this.ThanhTienSauVat = ThanhTienSauVat;
                    this.ThueVatLamTron = ThueVatLamTron;
                    this.GhiChu = GhiChu;
                }
                return NhapKhoVatTuChiTiet;
            }());
            var InPhieuNhapKhoVatTu = /** @class */ (function () {
                function InPhieuNhapKhoVatTu(YeuCauNhapKhoVatTuId, CoTheoBenhVien, CoTheoThongTu, HostingName) {
                    if (YeuCauNhapKhoVatTuId === void 0) { YeuCauNhapKhoVatTuId = null; }
                    if (CoTheoBenhVien === void 0) { CoTheoBenhVien = true; }
                    if (CoTheoThongTu === void 0) { CoTheoThongTu = true; }
                    if (HostingName === void 0) { HostingName = null; }
                    this.YeuCauNhapKhoVatTuId = YeuCauNhapKhoVatTuId;
                    this.CoTheoBenhVien = CoTheoBenhVien;
                    this.CoTheoThongTu = CoTheoThongTu;
                    this.HostingName = HostingName;
                }
                return InPhieuNhapKhoVatTu;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.scss": 
        /*!*******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.scss ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vcGhpZXUtbmhhcC1raG8tdmF0LXR1LXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXG5oYXAta2hvXFxwaGlldS1uaGFwLWtoby12YXQtdHUtcG9wdXBcXHBoaWV1LW5oYXAta2hvLXZhdC10dS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvbmhhcC1raG8vcGhpZXUtbmhhcC1raG8tdmF0LXR1LXBvcHVwL3BoaWV1LW5oYXAta2hvLXZhdC10dS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS9uaGFwLWtoby9waGlldS1uaGFwLWtoby12YXQtdHUtcG9wdXAvcGhpZXUtbmhhcC1raG8tdmF0LXR1LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.ts": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.ts ***!
          \*****************************************************************************************************************************/
        /*! exports provided: PhieuNhapKhoVatTuPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuNhapKhoVatTuPopupComponent", function () { return PhieuNhapKhoVatTuPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var PhieuNhapKhoVatTuPopupComponent = /** @class */ (function () {
                function PhieuNhapKhoVatTuPopupComponent(dialog, sanitizer, dialogRef, data) {
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                PhieuNhapKhoVatTuPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                PhieuNhapKhoVatTuPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                PhieuNhapKhoVatTuPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        resolve(_this.data);
                    });
                };
                return PhieuNhapKhoVatTuPopupComponent;
            }());
            PhieuNhapKhoVatTuPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PhieuNhapKhoVatTuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-nhap-kho-vat-tu-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-nhap-kho-vat-tu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-nhap-kho-vat-tu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuNhapKhoVatTuPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.scss": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.scss ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L25oYXAta2hvL3hhYy1uaGFuLWNob24tcGhpZXUtaW4tdmF0LXR1LXBvcHVwL3hhYy1uaGFuLWNob24tcGhpZXUtaW4tdmF0LXR1LXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.ts": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.ts ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: XacNhanChonPhieuInVatTuPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanChonPhieuInVatTuPopupComponent", function () { return XacNhanChonPhieuInVatTuPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _nhap_kho__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nhap-kho */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/nhap-kho.ts");
            /* harmony import */ var _phieu_nhap_kho_vat_tu_popup_phieu_nhap_kho_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component.ts");
            var XacNhanChonPhieuInVatTuPopupComponent = /** @class */ (function () {
                function XacNhanChonPhieuInVatTuPopupComponent(dialog, apiService, notificationService, data) {
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.data = data;
                    this.popupLoadingData = null;
                    this.inPhieuNhapKhoVatTu = new _nhap_kho__WEBPACK_IMPORTED_MODULE_6__["InPhieuNhapKhoVatTu"]();
                }
                XacNhanChonPhieuInVatTuPopupComponent.prototype.ngOnInit = function () {
                    this.inPhieuNhapKhoVatTu = this.data;
                };
                XacNhanChonPhieuInVatTuPopupComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                XacNhanChonPhieuInVatTuPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                XacNhanChonPhieuInVatTuPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                XacNhanChonPhieuInVatTuPopupComponent.prototype.inPhieu = function () {
                    var self = this;
                    self.loadingPage();
                    self.apiService.post("NhapKhoVatTu/InPhieuYeuCauNhapKhoVatTu", self.inPhieuNhapKhoVatTu).subscribe(function (resData) {
                        if (resData != undefined && resData != null) {
                            self.closePopupLoadingData();
                            self.dialog.open(_phieu_nhap_kho_vat_tu_popup_phieu_nhap_kho_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_7__["PhieuNhapKhoVatTuPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: resData,
                            }).afterClosed().subscribe(function () {
                            });
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                };
                return XacNhanChonPhieuInVatTuPopupComponent;
            }());
            XacNhanChonPhieuInVatTuPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            XacNhanChonPhieuInVatTuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xac-nhan-chon-phieu-in-vat-tu-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xac-nhan-chon-phieu-in-vat-tu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xac-nhan-chon-phieu-in-vat-tu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], XacNhanChonPhieuInVatTuPopupComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~ke-toan-duyet-nhap-kho-vat-tu-duyet-nhap-kho-module~nhap-xuat-vat-tu-nhap-kho-nhap-kho-module-es2015.js.map
//# sourceMappingURL=default~ke-toan-duyet-nhap-kho-vat-tu-duyet-nhap-kho-module~nhap-xuat-vat-tu-nhap-kho-nhap-kho-module-es5.js.map
//# sourceMappingURL=default~ke-toan-duyet-nhap-kho-vat-tu-duyet-nhap-kho-module~nhap-xuat-vat-tu-nhap-kho-nhap-kho-module-es5.js.map