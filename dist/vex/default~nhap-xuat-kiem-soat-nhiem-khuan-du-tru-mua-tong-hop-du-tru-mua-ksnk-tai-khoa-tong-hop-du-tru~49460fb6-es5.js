(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-ksnk-tai-khoa-tong-hop-du-tru~49460fb6"], {
        /***/ "./node_modules/@iconify/icons-ic/cancel.js": 
        /*!**************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/cancel.js ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
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
        /***/ "./node_modules/@iconify/icons-ic/twotone-info.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-info.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path opacity=\".3\" d=\"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z\" fill=\"currentColor\"/><path d=\"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/warning.js": 
        /*!***************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/warning.js ***!
          \***************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.html": 
        /*!***************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.html ***!
          \***************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Hành chính - KSNK',Path:''}\n            ,{Title:'Dự trù mua',Path:''}\n            ,{Title:'Yêu cầu dự trù mua kiểm soát nhiễm khuẩn',Path:'', Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                pageSize=\"50\" urlGetData=\"YeuCauMuaKSNK/GetYeuCauMuaKSNKDataForGridAsync\"\n                urlGetTotalPage=\"YeuCauMuaKSNK/GetYeuCauMuaKSNKTotalPageForGridAsync\" [sort]=\"sort\"\n                [headerTemplate]=\"headerTemplate\" [additionalSearchString]=\"additionalSearchString\">\n\n                <ng-template #ngayYeuCauTemplate let-dataItem>\n                    {{dataItem.NgayYeuCauDisplay}}\n                </ng-template>\n                <ng-template #ngayTaiKhoaTemplate let-dataItem>\n                    {{dataItem.NgayTaiKhoaDisplay}}\n                </ng-template>\n                <ng-template #ngayTaiKhoDuocTemplate let-dataItem>\n                    {{dataItem.NgayTaiKhoDuocDisplay}}\n                </ng-template>\n                <ng-template #ngayTaiGiamDocTemplate let-dataItem>\n                    {{dataItem.NgayTaiGiamDocDisplay}}\n                </ng-template>\n\n                <ng-template #tinhTrangTemplate let-dataItem>\n                    <label *ngIf=\"dataItem.TinhTrang == 0\" class=\"orange\">\n                        <span>Chờ duyệt</span>\n                    </label>\n                    <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                        <span>Đã duyệt</span>\n                    </label>\n                    <label *ngIf=\"dataItem.TinhTrang == 2\" class=\"red\">\n                        <span>Từ chối</span>\n                    </label>\n                </ng-template>\n                <ng-template #soPhieuTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"chinhSua(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                                {{dataItem.SoPhieu}}</p>\n                        </a>\n                    </div>\n                </ng-template>\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauMuaVatTu.ChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauMuaVatTu.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã duyệt\">\n                    </app-checkbox>\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'tuchoi')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauMuaVatTu.TuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Từ chối\">\n                    </app-checkbox>\n\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"danhSachYeuCauMuaVatTu.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\"\n                        fxFlex.sm=\"auto\" [(model)]=\"danhSachYeuCauMuaVatTu.RangeFromDate\"\n                        label=\"Yêu cầu từ ngày - đến ngày\" (keyup)=\"onKey($event)\"\n                        (modelChange)=\"changeNgayBatDauRange()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"XuatExcel()\"\n                        kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <button (click)=\"taoPhieuMuaVatTu()\" class=\"ml-4 right\" style=\"right: 20px;\" color=\"primary\"\n                        fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Tạo phiếu\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n\n                </div>\n            </ng-template>\n\n            <ng-template #actionTemplate let-dataItem>\n                <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button *ngIf=\"dataItem.TinhTrang == 0 && dataItem.IsKhoaDuyet == null\"\n                            (click)=\"chinhSua(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                            <span>Sửa</span>\n                        </button>\n                        <button *ngIf=\"dataItem.TinhTrang == 0 && dataItem.IsKhoaDuyet == null\"\n                            (click)=\"xoa(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                        <button (click)=\"inPhieu(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In phiếu</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.html": 
        /*!*****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.html ***!
          \*****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div [innerHtml]=\"Message\"></div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close('No')\">{{ButtonNo}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('YesAndPrint')\">{{ButtonYesAndPrint}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('Yes')\">{{ButtonYes}}</button>\n\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.html": 
        /*!*****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.html ***!
          \*****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Hành chính - KSNK',Path:''}\n                ,{Title:'Dự trù mua',Path:''}\n                ,{Title:'Yêu cầu dự trù kiểm soát nhiễm khuẩn',Path:'/nhap-xuat/ksnk/yeu-cau-mua-ksnk' , queryParams: {holdQuery : true},Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 *ngIf=\"trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n                    class=\"title m-0\">Chi tiết dự trù kiểm soát nhiễm khuẩn</h2>\n                <h2 *ngIf=\"trangThaiVo != null && (trangThaiVo.TrangThai == null)\" class=\"title m-0\">Lập dự trù mua kiểm soát nhiễm khuẩn</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-lap-phieu-mua-ksnk-shared [validationErrorsVatTu]=\"validationErrors\" #temp\n                    *ngIf=\"trangThaiVo!=null\" [isCreate]=\"trangThaiVo.TrangThai==null\"\n                    (hideGuibtn)=\"anHienButtonDuyet($event)\" [trangThaiVo]=\"trangThaiVo\">\n                </app-lap-phieu-mua-ksnk-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" [disabled]=\"!isHideDuyet\" (click)=\"inPhieuMuaVatTu()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu </button>\n\n                    <button *ngIf=\"trangThaiVo != null && trangThaiVo.IsKhoaDuyet == null \n                                && trangThaiVo.IsKhoDuocDuyet == null && trangThaiVo.IsGiamDocDuyet == null \n                                && trangThaiVo.TrangThai == null\" type=\"button\" title=\"Phím tắt: Esc\"\n                        (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                    <button *ngIf=\"trangThaiVo != null && trangThaiVo.IsKhoaDuyet == null \n                                && trangThaiVo.IsKhoDuocDuyet == null && trangThaiVo.IsGiamDocDuyet == null \n                                && trangThaiVo.TrangThai == null\" type=\"button\" (click)=\"guiLaiPhieuMuaVatTu()\"\n                        color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                    <button\n                        *ngIf=\"trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n                        type=\"button\" (click)=\"cancel()\" class=\"mr-1 align-right-fx\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Quay Lại</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.html": 
        /*!***************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.html ***!
          \***************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauMuaVatTu.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n\n    <app-combobox id=\"KhoId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\" [(model)]=\"yeuCauMuaVatTu.KhoId\"\n        [modelText]=\"yeuCauMuaVatTu.TenKho\" label=\"Kho\" (modelChange)=\"clearGridVatTu()\"\n        (openCombobox)=\"openCombobox($event)\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        url=\"YeuCauMuaDuocPham/GetKho\" [validationerror]=\"'KhoId' | validationerror:validationErrorsVatTu\">\n    </app-combobox>\n\n    <app-combobox id=\"duTruTheo\" fxFlex=\"20\" [required]=\"true\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n        [(model)]=\"yeuCauMuaVatTu.KyDuTruMuaDuocPhamVatTuId\" [modelText]=\"yeuCauMuaVatTu.TenKyDuTru\" label=\"Kỳ dự trù\"\n        url=\"YeuCauMuaKSNK/GetKyDuTruKSNK\" (openCombobox)=\"openCombobox($event)\"\n        [validationerror]=\"'KyDuTruMuaDuocPhamVatTuId' | validationerror:validationErrorsVatTu\">\n    </app-combobox>\n\n    <app-textbox id=\"nguoiYeuCau\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaVatTu.TenNhanVienYeuCau\"\n        [required]=\"true\" maxlength=\"250\" label=\"Người yêu cầu\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datetimepicker id=\"ngayYeuCau\"\n        [fxFlex]=\"trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null ||trangThaiVo.TrangThai == null) ? 'auto' :'20' \"\n        [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaVatTu.NgayYeuCau\" [disabled]=\"true\" [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datetimepicker>\n\n    <app-textbox\n        *ngIf=\"trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true ||trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n        id=\"khoaduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaVatTu.TenTruongKhoa\" [required]=\"true\"\n        maxlength=\"250\" label=\"T.Khoa duyệt\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datetimepicker\n        *ngIf=\"trangThaiVo != null && ( trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n        id=\"ngaykhoaduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaVatTu.NgayTruongKhoaDuyet\"\n        [disabled]=\"true\" [required]=\"true\" label=\"Ngày t.Khoa duyệt\">\n    </app-datetimepicker>\n\n    <app-textbox\n        *ngIf=\"trangThaiVo != null && ((trangThaiVo.IsKhoaDuyet == true && trangThaiVo.IsKhoDuocDuyet == true) || trangThaiVo.TrangThai == true \n            || (trangThaiVo.IsKhoDuocDuyet == false || (trangThaiVo.IsKhoDuocDuyet == false && trangThaiVo.TrangThai == false)))\"\n        id=\"khoaduocduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaVatTu.TenNhanVienKhoDuoc\"\n        [required]=\"true\" maxlength=\"250\" label=\"K.dược duyệt\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datetimepicker\n        *ngIf=\"trangThaiVo != null && ((trangThaiVo.IsKhoaDuyet == true && trangThaiVo.IsKhoDuocDuyet == true) || trangThaiVo.TrangThai == true \n    || (trangThaiVo.IsKhoDuocDuyet == false || (trangThaiVo.IsKhoDuocDuyet == false && trangThaiVo.TrangThai == false)))\"\n        id=\"ngaykhoaduocduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaVatTu.NgayKhoDuocDuyet\"\n        [disabled]=\"true\" [required]=\"true\" label=\"Ngày k.dược duyệt\">\n    </app-datetimepicker>\n\n    <app-textbox\n        *ngIf=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true \n    || (trangThaiVo.IsGiamDocDuyet == false || (trangThaiVo.IsGiamDocDuyet == false && trangThaiVo.TrangThai == false)))\"\n        id=\"giamdocduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaVatTu.TenGiamDoc\" [required]=\"true\"\n        maxlength=\"250\" label=\"Giám đốc duyệt\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datetimepicker *ngIf=\"!isCreate && trangThaiVo != null \n                                        && (trangThaiVo.TrangThai == true \n                                        || trangThaiVo.IsGiamDocDuyet == false \n                                        || (trangThaiVo.IsGiamDocDuyet == false && trangThaiVo.TrangThai == false))\"\n        id=\"ngaygiamdocduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaVatTu.NgayGiamDocDuyet\"\n        [disabled]=\"true\" [required]=\"true\" label=\"Ngày g.đốc duyệt\">\n    </app-datetimepicker>\n\n    <app-textarea id=\"ghiChu\"\n        [fxFlex]=\"trangThaiVo != null && ((trangThaiVo.IsKhoaDuyet == null && trangThaiVo.IsKhoaDuyet == null) || trangThaiVo.IsKhoaDuyet == null) ? '100%' :'auto'\"\n        fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n        [(model)]=\"yeuCauMuaVatTu.GhiChu\">\n    </app-textarea>\n\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin chi tiết</h3>\n    <ng-container>\n        <app-radio\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            id=\"loai\" label=\"Loại\" fxFlex=\"20%\" fxFlex.sm=\"15%\" [(model)]=\"vatTuGrid.LoaiVatTu\" (modelChange)=\"huy()\"\n            [disabled]=\"yeuCauMuaVatTu.KhoId == undefined || yeuCauMuaVatTu.KhoId == null\"\n            [items]=\"[{Value:1,Text:'Không BHYT'},{Value:2,Text:'BHYT'}]\">\n        </app-radio>\n\n        <app-combobox\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            id=\"vatTu\" fxFlex=\"35%\" fxFlex.sm=\"35%\" [required]=\"true\" url=\"YeuCauMuaKSNK/GetKSNKMuaDuTru\"\n            [(model)]=\"vatTuGrid.VatTuId\" (selectionChange)=\"chonVatTu($event)\" [template]=\"vatTuTemplate\"\n            (keyup)=\"onKey($event)\" (openCombobox)=\"openCombobox($event)\" [templateHeader]=\"vatTuTemplateHeader\"\n            [disabled]=\"yeuCauMuaVatTu.KhoId == undefined || yeuCauMuaVatTu.KhoId == null\" label=\"Vật tư\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauMuaVatTu.KhoId +', LaVatTuBHYT: '+ vatTuGrid.LoaiVatTu+'}', Take: 50}\"\n            class=\"item-no-padding\" [validationerror]=\"'VatTuId' | validationerror:validationErrors\"\n            [popupSettings]=\"{width: 800,popupClass:'item-no-padding'}\">\n            <ng-template #vatTuTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"15%\">Mã</th>\n                        <th>Tên</th>\n                        <th width=\"5%\">ĐVT</th>\n                        <th width=\"20%\">Quy Cách</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #vatTuTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"15%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                        <td width=\"5%\">{{dataItem.DVT}}</td>\n                        <td width=\"20%\">{{dataItem.QuyCach}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <div fxFlex=\"5%\" class=\"mt-2\" fxLayoutAlign=\"start center\">\n            <button\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                (click)=\"themVatTuBV()\" class=\"right\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip\n                title=\"Thêm kiểm soát nhiễm khuẩn\" type=\"button\"\n                [disabled]=\"yeuCauMuaVatTu.KhoId == undefined || yeuCauMuaVatTu.KhoId == null\">\n                <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n            </button>\n        </div>\n\n        <app-textboxnumeric\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            [fxFlex]=\"20\" id=\"slDuTru\" label=\"SL dự trù\" [(model)]=\"vatTuGrid.SoLuongDuTru\" [required]=\"true\"\n            (keyup)=\"onKey($event)\" max=\"999999999\"\n            [disabled]=\"yeuCauMuaVatTu.KhoId == undefined ||yeuCauMuaVatTu.KhoId == null\" min=\"1\"\n            [validationerror]=\"'SoLuongDuTru' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            [fxFlex]=\"20\" id=\"slDuKienTrongKy\" label=\"D.kiến s.dụng trong kỳ\" [required]=\"true\" max=\"999999999\" min=\"1\"\n            (keyup)=\"onKey($event)\" [(model)]=\"vatTuGrid.SoLuongDuKienSuDung\"\n            [disabled]=\"yeuCauMuaVatTu.KhoId == undefined || yeuCauMuaVatTu.KhoId == null\"\n            [validationerror]=\"'SoLuongDuKienSuDung' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textarea id=\"ghiChuChiTiet\" fxFlex=\"100%\" fxFlex.sm=\"100\" maxlength=\"2000\" label=\"Ghi chú\" minHeight=\"20\"\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            (keyup)=\"onKey($event)\" [disabled]=\"yeuCauMuaVatTu.KhoId == undefined ||yeuCauMuaVatTu.KhoId == null\"\n            [(model)]=\"vatTuGrid.GhiChu\">\n        </app-textarea>\n\n\n        <ng-container *ngIf=\"vatTuGrid.VatTuId != undefined && vatTuGrid.VatTuId != null\">\n            <ng-template #templateInfo let-dataItem>\n                <table class=\"tablecolor \" width=\"100%\">\n                    <tr *ngFor=\"let khoTong of thongTinVatTu.ThongTinChiTietTonKhoTongs\">\n                        <td>{{khoTong.Ten}}: {{khoTong.SoLuongTon}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n\n            <ng-template #templateInfoHDT let-dataItem>\n                <table class=\"tablecolor \" width=\"100%\">\n                    <tr *ngFor=\"let hdt of thongTinVatTu.ThongTinChiTietTonHDTs\">\n                        <td>{{hdt.Ten}}: {{hdt.SoLuongTon}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\" fxFlex=\"100%\"\n                style=\"padding-top: 10px;\">\n                <div fxFlex=\"100%\" kendoTooltip>\n                    <fieldset\n                        style=\"border:1px solid #ccc;border-radius: 5px;padding: 7px 15px 8px 15px;background: #e3f2fd;\">\n                        <div fxFlex=\"100%\">\n                            <ul class=\"inline\">\n                                <li>Đơn vị tính: <strong>{{thongTinVatTu.DVT}}</strong></li>\n                                <li>Quy cách: <strong>{{thongTinVatTu.QuyCach}}</strong></li>\n                                <li>Nhà SX: <strong>{{thongTinVatTu.NhaSX}}</strong></li>\n                                <li>Nước SX: <strong>{{thongTinVatTu.NuocSX}}</strong></li>\n\n\n                                <!-- </ul><br>\n                            <ul class=\"inline\"> -->\n                                <li *ngIf=\"thongTinVatTu.SLTonDuTru > 0\" style=\"color:red\">\n                                    Số lượng tồn trong kho dự trù:\n                                    <strong>{{thongTinVatTu.SoLuongTonDuTru}}</strong>\n                                </li>\n\n                                <li *ngIf=\"thongTinVatTu.SLTonDuTru == 0 || thongTinVatTu.SLTonDuTru == null\"\n                                    style=\"color:red\">\n                                    Số lượng tồn trong kho dự trù:\n                                    <strong>0</strong>\n                                </li>\n\n                                <li *ngIf=\"thongTinVatTu.SLTonKhoTong > 0\">\n                                    <span fxFlex=\"90%\" style=\"color:green\">Số lượng tồn trong kho tổng:\n                                        <strong>{{thongTinVatTu.SoLuongTonKhoTong}}</strong>\n                                    </span>\n                                    <span fxFlex=\"10%\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" kendoTooltip\n                                        [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n                                        <mat-icon [icIcon]=\"icInfo\" class=\"info\">\n                                        </mat-icon>\n                                    </span>\n                                </li>\n                                <li *ngIf=\"thongTinVatTu.SLTonKhoTong == 0 || thongTinVatTu.SLTonKhoTong == null\">\n                                    <span style=\"color:green\">Số lượng tồn trong kho tổng:\n                                        <strong>0</strong>\n                                    </span>\n                                </li>\n\n                                <li *ngIf=\"thongTinVatTu.SLChuaNhapVeHDT > 0\">\n                                    <span fxFlex=\"95%\" style=\"color:blue\">Số lượng chưa nhập về trong HĐ thầu:\n                                        <strong>{{thongTinVatTu.SoLuongChuaNhapVeHDT}}</strong>\n                                    </span>\n                                    <span fxFlex=\"5%\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" kendoTooltip\n                                        [tooltipTemplate]=\"templateInfoHDT\" filter=\"*\">\n                                        <mat-icon [icIcon]=\"icInfo\" class=\"info\">\n                                        </mat-icon>\n                                    </span>\n                                </li>\n\n                                <li *ngIf=\"thongTinVatTu.SLChuaNhapVeHDT == 0 || thongTinVatTu.SLChuaNhapVeHDT == null\">\n                                    <span style=\"color:blue\">Số lượng chưa nhập về trong HĐ thầu:\n                                        <strong>0</strong>\n                                    </span>\n                                </li>\n\n                            </ul>\n                        </div>\n                    </fieldset>\n                </div>\n            </div>\n        </ng-container>\n\n\n\n        <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n            <button\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                type=\"button\" color=\"primary\" (click)=\"huy()\"\n                [disabled]=\"yeuCauMuaVatTu.KhoId == undefined ||yeuCauMuaVatTu.KhoId == null\" mat-stroked-button\n                mat-button class=\"mr-1\">Hủy</button>\n\n            <button\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                type=\"button\" color=\"primary\" (click)=\"themVatTu()\"\n                [disabled]=\"yeuCauMuaVatTu.KhoId == undefined || yeuCauMuaVatTu.KhoId == null\" mat-raised-button\n                mat-button>Thêm</button>\n        </div>\n    </ng-container>\n    <div fxFlex=\"100%\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\" #gridVatTu\n            [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\">\n        </app-grid>\n        <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n        <ng-template #actionTemplate let-dataItem>\n            <div class=\"text-center\" kendoTooltip>\n                <button color=\"primary\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                    *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null\"\n                    (click)=\"xoaVatTu(dataItem)\">\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                </button>\n            </div>\n        </ng-template>\n\n        <ng-template #slDuTruVatTuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <app-textboxnumeric [(model)]=\"dataItem.SoLuongDuTru\" [required]=\"true\" class=\"no-label\" min=\"1\"\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                [max]=\"999999999\" label=\" \"\n                [validationerror]=\"'DuTruMuaVatTuChiTiets['+rowIndex+'].SoLuongDuTru' | validationerror:validationErrorsVatTu\">\n            </app-textboxnumeric>\n\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true ||trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.SoLuongDuTru}}\n            </span>\n        </ng-template>\n\n        <ng-template #slDuKienVatTuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <app-textboxnumeric\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                [(model)]=\"dataItem.SoLuongDuKienSuDung\" [required]=\"true\" class=\"no-label\" min=\"1\" [max]=\"999999999\"\n                label=\" \"\n                [validationerror]=\"'DuTruMuaVatTuChiTiets['+rowIndex+'].SoLuongDuKienSuDung' | validationerror:validationErrorsVatTu\">\n            </app-textboxnumeric>\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.SoLuongDuKienSuDung}}\n            </span>\n        </ng-template>\n\n        <ng-template #ghiChuChiTietTemplate let-dataItem>\n            <app-textarea\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                minHeight=\"20\" [(model)]=\"dataItem.GhiChu\" class=\"no-label\" label=\" \" maxlength=\"2000\">\n            </app-textarea>\n\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.GhiChu}}\n            </span>\n        </ng-template>\n    </div>\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.html": 
        /*!*************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.html ***!
          \*************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Hành chính - KSNK',Path:''}\n                ,{Title:'Dự trù mua',Path:''}\n                ,{Title:'Yêu cầu dự trù mua kiểm Soát Nhiễm Khuẩn',Path:'/nhap-xuat/ksnk/yeu-cau-mua-ksnk' , queryParams: {holdQuery : true}}\n                ,{Title:'Tạo phiếu mua kiểm Soát Nhiễm Khuẩn dự trù',Path:'',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Lập dự trù mua kiểm soát nhiễm khuẩn</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-lap-phieu-mua-ksnk-shared [trangThaiVo]=\"trangThaiVo\"\n                    [validationErrorsVatTu]=\"validationErrors\" [isCreate]=\"true\">\n                </app-lap-phieu-mua-ksnk-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"guiPhieuMuaVatTu()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Gửi</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.html": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.html ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>IN PHIẾU DỰ TRÙ MUA KIỂM SOÁT NHIỄM KHUẨN</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.html": 
        /*!*****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.html ***!
          \*****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div fxFlex=\"100%\">\n        <h3 class=\"sub-title\" style=\"text-transform: none;\">THÊM KIỄM SOÁT NHIỄM KHUẨN</h3>\n    </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow: hidden;\">\n    <div class=\"px-2 py-2\" fxLayout=\"column\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n            fxLayoutAlign=\"space-between\">\n            <!-- (openCombobox)=\"openCombobox($event)\"  -->\n            <app-combobox-tree id=\"NhomVatTuId\" fxFlex=\"40%\" label=\"Nhóm kiễm soát nhiễm khuẩn\" (keyup)=\"onKey($event)\"\n                url=\"YeuCauMuaKSNK/GetNhomKSNKTreeView\" [(model)]=\"vatTu.NhomVatTuId\" required=\"true\"\n                [validationerror]=\"'NhomVatTuId' | validationerror:validationErrors\">\n            </app-combobox-tree>\n\n            <app-textbox id=\"Ten\" fxFlex=\"60%\" [required]=\"true\" maxlength=\"250\" [(model)]=\"vatTu.Ten\"\n                (keyup)=\"onKey($event)\" label=\"Tên kiễm soát nhiễm khuẩn\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n            </app-textbox>\n\n            <app-textbox id=\"DVT\" fxFlex=\"40%\" maxlength=\"50\" [(model)]=\"vatTu.DVT\" (keyup)=\"onKey($event)\"\n                label=\"Đơn vị tính\">\n            </app-textbox>\n\n            <app-textboxnumeric fxFlex=\"30%\" id=\"slDuTru\" label=\"SL dự trù\" [(model)]=\"vatTu.SoLuongDuTru\"\n                [required]=\"true\" max=\"999999999\" min=\"1\" (keyup)=\"onKey($event)\"\n                [validationerror]=\"'SoLuongDuTru' | validationerror:validationErrors\">\n            </app-textboxnumeric>\n\n            <app-textboxnumeric fxFlex=\"30%\" id=\"slDuKienTrongKy\" label=\"D.kiến s.dụng trong kỳ\" [required]=\"true\"\n                max=\"999999999\" min=\"1\" (keyup)=\"onKey($event)\" [(model)]=\"vatTu.SoLuongDuKienSuDung\"\n                [validationerror]=\"'SoLuongDuKienSuDung' | validationerror:validationErrors\">\n            </app-textboxnumeric>\n        </div>\n    </div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" style=\"margin-top:10px\">\n    <button mat-stroked-button color=\"primary\" (click)=\"huy()\" mat-dialog-close>Hủy</button>\n    <button type=\"button\" (click)=\"themVatTu()\" cdkFocusInitial mat-raised-button mat-button\n        color=\"primary\">Thêm</button>\n</mat-dialog-actions>");
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
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.scss": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.scss ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEveWV1LWNhdS1tdWEta3Nuay9kYW5oLXNhY2gtZHUtdHJ1LW11YS1rc25rL2Rhbmgtc2FjaC1kdS10cnUtbXVhLWtzbmsuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.ts": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.ts ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: DanhSachDuTruMuaKSNKComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachDuTruMuaKSNKComponent", function () { return DanhSachDuTruMuaKSNKComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/cancel */ "./node_modules/@iconify/icons-ic/cancel.js");
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_22__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_23__);
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_26__);
            /* harmony import */ var _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../yeu-cau-mua-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.model.ts");
            /* harmony import */ var _phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../phieu-mua-ksnk/phieu-mua-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.ts");
            var DanhSachDuTruMuaKSNKComponent = /** @class */ (function () {
                function DanhSachDuTruMuaKSNKComponent(dialog, router, apiService, authService, notificationService, route, location) {
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.location = location;
                    this.inPhieuVatTu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_27__["PhieuYeuCauMuaVatTu"]();
                    this.baseRoute = "/nhap-xuat/ksnk/yeu-cau-mua-ksnk";
                    this.urlGetData = "YeuCauMuaKSNK/GetYeuCauMuaKSNKDataForGridAsync";
                    this.urlGetTotalPage = "YeuCauMuaKSNK/GetYeuCauMuaKSNKTotalPageForGridAsync";
                    this.popupLoadingData = null;
                    this.addtionStringDefault = null;
                    this.gridColumns = [];
                    this.validationErrors = [];
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_23___default.a;
                    this.icCancel = _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_22___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_26___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.holdQuery = null;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.additionalSearchString = null;
                    this.sort = [
                        {
                            field: "TinhTrang",
                            dir: "asc",
                        },
                    ];
                }
                DanhSachDuTruMuaKSNKComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].YeuCauDuTruMuaNhomKSNK;
                    this.danhSachYeuCauMuaVatTu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_27__["YeuCauMuaVatTuGridVo"]();
                    this.backWithSearch();
                    this.gridColumns = [
                        { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuTemplate },
                        { Field: "TenKho", Title: "Kho", MinWidth: 150, Sortable: true },
                        { Field: "KyDuTru", Title: "Kỳ dự trù", Width: 170, Sortable: true },
                        { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
                        { Field: "NhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.tinhTrangTemplate },
                        { Field: "NgayTaiKhoa", Title: "Ngày T.Khoa Duyệt", Width: 150, Sortable: true, Template: this.ngayTaiKhoaTemplate },
                        { Field: "NgayTaiKhoDuoc", Title: "Ngày K.Dược Duyệt", Width: 150, Sortable: true, Template: this.ngayTaiKhoDuocTemplate },
                        { Field: "NgayTaiGiamDoc", Title: "Ngày G.Đốc Duyệt", Width: 150, Sortable: true, Template: this.ngayTaiGiamDocTemplate },
                        { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
                    ];
                };
                DanhSachDuTruMuaKSNKComponent.prototype.backWithSearch = function () {
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachYeuCauMuaNhomKSNK");
                            if (this.additionalSearchString != null) {
                                this.danhSachYeuCauMuaVatTu = JSON.parse(this.additionalSearchString);
                                if (this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay != null
                                    && this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay != 'null' && this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay != '') {
                                    this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate = new Date(this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate);
                                }
                                else {
                                    this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate = null;
                                }
                                if (this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay != null
                                    && this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay != 'null' && this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay != '') {
                                    this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate = new Date(this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate);
                                }
                                else {
                                    this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate = null;
                                }
                                this.addtionStringDefault = this.additionalSearchString;
                                this.gridChild.additionalSearchString = this.additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachYeuCauMuaNhomKSNK");
                    }
                };
                DanhSachDuTruMuaKSNKComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiem();
                    }
                };
                DanhSachDuTruMuaKSNKComponent.prototype.clearSearch = function () {
                    this.danhSachYeuCauMuaVatTu.SearchString = null;
                    this.gridChild.search();
                };
                DanhSachDuTruMuaKSNKComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.gridChild.searchString = null;
                        self.timKiem();
                    }
                };
                DanhSachDuTruMuaKSNKComponent.prototype.changeNgayBatDauRange = function () {
                    this.timKiem();
                };
                DanhSachDuTruMuaKSNKComponent.prototype.blur = function () {
                    this.timKiem();
                };
                DanhSachDuTruMuaKSNKComponent.prototype.trangThaiCheckBox = function (event, tinhTrang) {
                    if (tinhTrang == "choduyet") {
                        this.danhSachYeuCauMuaVatTu.ChoDuyet = event;
                    }
                    if (tinhTrang == "daduyet") {
                        this.danhSachYeuCauMuaVatTu.DaDuyet = event;
                    }
                    if (tinhTrang == "tuchoi") {
                        this.danhSachYeuCauMuaVatTu.TuChoiDuyet = event;
                    }
                    this.timKiem();
                };
                DanhSachDuTruMuaKSNKComponent.prototype.timKiem = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.danhSachYeuCauMuaVatTu.RangeFromDate != null && this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate != null) {
                        this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay = null;
                    }
                    if (this.danhSachYeuCauMuaVatTu.RangeFromDate != null && this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate != null) {
                        this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.danhSachYeuCauMuaVatTu);
                    this.gridChild._additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachYeuCauMuaNhomKSNK", queryString);
                    this.gridChild.search();
                };
                DanhSachDuTruMuaKSNKComponent.prototype.taoPhieuMuaVatTu = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
                        this.router.navigate(["/nhap-xuat/ksnk/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/them"]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachDuTruMuaKSNKComponent.prototype.chinhSua = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.router.navigate(["/nhap-xuat/ksnk/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachDuTruMuaKSNKComponent.prototype.xoa = function (id) {
                    var _this = this;
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn xóa phiếu dự trù này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Delete)) {
                                _this.apiService.post("YeuCauMuaKSNK/XoaYeuCauMuaDuTruKSNK?id=" + id).subscribe(function () {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                    _this.timKiem();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                DanhSachDuTruMuaKSNKComponent.prototype.inPhieu = function (id) {
                    var self = this;
                    self.loadingPage();
                    self.dialog.open(_phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_28__["PhieuMuaKSNKComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { Id: id },
                    }).afterClosed().subscribe(function () {
                        self.closePopupLoadingData();
                    });
                };
                DanhSachDuTruMuaKSNKComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                DanhSachDuTruMuaKSNKComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                DanhSachDuTruMuaKSNKComponent.prototype.XuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("YeuCauMuaKSNK/ExportYeuCauMuaVatTu", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "YeuCauDuTruMuaVatTu" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return DanhSachDuTruMuaKSNKComponent;
            }());
            DanhSachDuTruMuaKSNKComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
            ], DanhSachDuTruMuaKSNKComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DanhSachDuTruMuaKSNKComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], DanhSachDuTruMuaKSNKComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayYeuCauTemplate", { static: true })
            ], DanhSachDuTruMuaKSNKComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTaiKhoaTemplate", { static: true })
            ], DanhSachDuTruMuaKSNKComponent.prototype, "ngayTaiKhoaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTaiKhoDuocTemplate", { static: true })
            ], DanhSachDuTruMuaKSNKComponent.prototype, "ngayTaiKhoDuocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTaiGiamDocTemplate", { static: true })
            ], DanhSachDuTruMuaKSNKComponent.prototype, "ngayTaiGiamDocTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
            ], DanhSachDuTruMuaKSNKComponent.prototype, "soPhieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DanhSachDuTruMuaKSNKComponent.prototype, "sort", void 0);
            DanhSachDuTruMuaKSNKComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-danh-sach-du-tru-mua-ksnk',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-du-tru-mua-ksnk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-du-tru-mua-ksnk.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.scss")).default]
                })
            ], DanhSachDuTruMuaKSNKComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.scss": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.scss ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEveWV1LWNhdS1tdWEta3Nuay9ndWktcGhpZXUtbXVhLWtzbmstY29uZmlybS9ndWktcGhpZXUtbXVhLWtzbmstY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.ts": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.ts ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: GuiPhieuMuaKSNKConfirmComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiPhieuMuaKSNKConfirmComponent", function () { return GuiPhieuMuaKSNKConfirmComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var GuiPhieuMuaKSNKConfirmComponent = /** @class */ (function () {
                function GuiPhieuMuaKSNKConfirmComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.Title = null;
                    this.Message = null;
                    this.ButtonYes = "Có";
                    this.ButtonYesAndPrint = "Có & In Phiếu";
                    this.ButtonNo = "Không";
                }
                GuiPhieuMuaKSNKConfirmComponent.prototype.ngOnInit = function () {
                    this.Title = this.data.Title;
                    this.Message = this.data.Message;
                };
                GuiPhieuMuaKSNKConfirmComponent.prototype.close = function (result) {
                    this.dialogRef.close(result);
                };
                return GuiPhieuMuaKSNKConfirmComponent;
            }());
            GuiPhieuMuaKSNKConfirmComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            GuiPhieuMuaKSNKConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-gui-phieu-mua-ksnk-confirm',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gui-phieu-mua-ksnk-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gui-phieu-mua-ksnk-confirm.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], GuiPhieuMuaKSNKConfirmComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.scss": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.scss ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS95ZXUtY2F1LW11YS1rc25rL2xhcC1waGlldS1tdWEta3Nuay1ndWktbGFpL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxraWVtLXNvYXQtbmhpZW0ta2h1YW5cXGR1LXRydS1tdWFcXHlldS1jYXUtbXVhLWtzbmtcXGxhcC1waGlldS1tdWEta3Nuay1ndWktbGFpXFxsYXAtcGhpZXUtbXVhLWtzbmstZ3VpLWxhaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS95ZXUtY2F1LW11YS1rc25rL2xhcC1waGlldS1tdWEta3Nuay1ndWktbGFpL2xhcC1waGlldS1tdWEta3Nuay1ndWktbGFpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi9kdS10cnUtbXVhL3lldS1jYXUtbXVhLWtzbmsvbGFwLXBoaWV1LW11YS1rc25rLWd1aS1sYWkvbGFwLXBoaWV1LW11YS1rc25rLWd1aS1sYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.ts": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.ts ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: LapPhieuMuaKSNKGuiLaiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LapPhieuMuaKSNKGuiLaiComponent", function () { return LapPhieuMuaKSNKGuiLaiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../yeu-cau-mua-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.model.ts");
            /* harmony import */ var _lap_phieu_mua_ksnk_shared_lap_phieu_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.ts");
            /* harmony import */ var _gui_phieu_mua_ksnk_confirm_gui_phieu_mua_ksnk_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.ts");
            /* harmony import */ var _phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-mua-ksnk/phieu-mua-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.ts");
            var LapPhieuMuaKSNKGuiLaiComponent = /** @class */ (function () {
                function LapPhieuMuaKSNKGuiLaiComponent(apiService, dialog, notificationService, authService, router, route, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.ref = ref;
                    this.location = location;
                    this.inPhieu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_15__["PhieuYeuCauMuaVatTu"]();
                    this.isHideDuyet = false;
                    this.trangThaiVo = null;
                    this.isCreate = false;
                    this.phieuMuaVatTuId = null;
                }
                LapPhieuMuaKSNKGuiLaiComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].YeuCauDuTruMuaNhomKSNK;
                    this.yeuCauMuaVatTu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauMuaVatTu"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.GetTrangThaiPhieuMuaDuTru(id);
                        this.phieuMuaVatTuId = id;
                    }
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.GetTrangThaiPhieuMuaDuTru = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauMuaKSNK/GetTrangThaiPhieuMuaKSNK?phieuMuaKSNKId=" + id).subscribe(function (result) {
                            _this.trangThaiVo = result;
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.closePopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.guiLaiPhieuMuaVatTu = function () {
                    var self = this;
                    self.dialog.open(_gui_phieu_mua_ksnk_confirm_gui_phieu_mua_ksnk_confirm_component__WEBPACK_IMPORTED_MODULE_17__["GuiPhieuMuaKSNKConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn lưu phiếu mua kiểm soát nhiễm khuẩn dự trù này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.yeuCauMuaVatTu = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                self.savingPage();
                                self.apiService.post("YeuCauMuaKSNK/GuiLaiPhieuMuaKSNKDuTru", self.yeuCauMuaVatTu).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                        self.router.navigate(['/nhap-xuat/ksnk/yeu-cau-mua-ksnk']);
                                        self.closePopupSavingData();
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupSavingData();
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                        else if (res == "YesAndPrint") {
                            self.yeuCauMuaVatTu = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                self.savingPage();
                                self.apiService.post("YeuCauMuaKSNK/GuiLaiPhieuMuaKSNKDuTru", self.yeuCauMuaVatTu).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                        self.closePopupSavingData();
                                        self.dialog.open(_phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaKSNKComponent"], {
                                            disableClose: false,
                                            width: '1200px',
                                            data: { Id: self.phieuMuaVatTuId },
                                        }).afterClosed().subscribe(function () {
                                            self.router.navigate(['/nhap-xuat/ksnk/yeu-cau-mua-ksnk']);
                                        });
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupSavingData();
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.inPhieuMuaVatTu = function () {
                    var self = this;
                    if (this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null) {
                        self.yeuCauMuaVatTu = self.shared.getSharedData();
                        self.validationErrors = [];
                        self.ref.detectChanges();
                        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                            self.apiService.post("YeuCauMuaKSNK/GuiLaiPhieuMuaKSNKDuTru", self.yeuCauMuaVatTu).subscribe(function (result) {
                                if (result != undefined && result != null) {
                                    self.loadingPage();
                                    self.dialog.open(_phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaKSNKComponent"], {
                                        disableClose: false,
                                        width: '1200px',
                                        data: { Id: self.phieuMuaVatTuId },
                                    }).afterClosed().subscribe(function () {
                                        self.closePopupLoadingData();
                                    });
                                }
                            }, function (err) {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                            });
                        }
                        else {
                            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    else {
                        self.loadingPage();
                        self.dialog.open(_phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaKSNKComponent"], {
                            disableClose: false,
                            width: '1200px',
                            data: { Id: self.phieuMuaVatTuId },
                        }).afterClosed().subscribe(function () {
                            self.closePopupLoadingData();
                        });
                    }
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.anHienButtonDuyet = function (event) {
                    if (event) {
                        this.isHideDuyet = true;
                    }
                    else {
                        this.isHideDuyet = false;
                    }
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.cancel = function () {
                    this.location.back();
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                LapPhieuMuaKSNKGuiLaiComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return LapPhieuMuaKSNKGuiLaiComponent;
            }());
            LapPhieuMuaKSNKGuiLaiComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('temp', { read: _lap_phieu_mua_ksnk_shared_lap_phieu_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_16__["LapPhieuMuaKSNKSharedComponent"], static: false })
            ], LapPhieuMuaKSNKGuiLaiComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
            ], LapPhieuMuaKSNKGuiLaiComponent.prototype, "keyEvent", null);
            LapPhieuMuaKSNKGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-lap-phieu-mua-ksnk-gui-lai',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lap-phieu-mua-ksnk-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lap-phieu-mua-ksnk-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.scss")).default]
                })
            ], LapPhieuMuaKSNKGuiLaiComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.scss": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.scss ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: -9px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\n.po-h-radio {\n  margin-top: -2px;\n}\n\n.xac-nhan-ng-template {\n  display: inline;\n  white-space: nowrap;\n  position: relative;\n  right: -10px;\n  background-color: white;\n}\n\n.info {\n  margin-bottom: -5px;\n  margin-top: 0px;\n}\n\n.tablecolor {\n  background-color: gray;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS95ZXUtY2F1LW11YS1rc25rL2xhcC1waGlldS1tdWEta3Nuay1zaGFyZWQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxcZHUtdHJ1LW11YVxceWV1LWNhdS1tdWEta3Nua1xcbGFwLXBoaWV1LW11YS1rc25rLXNoYXJlZFxcbGFwLXBoaWV1LW11YS1rc25rLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS95ZXUtY2F1LW11YS1rc25rL2xhcC1waGlldS1tdWEta3Nuay1zaGFyZWQvbGFwLXBoaWV1LW11YS1rc25rLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS95ZXUtY2F1LW11YS1rc25rL2xhcC1waGlldS1tdWEta3Nuay1zaGFyZWQvbGFwLXBoaWV1LW11YS1rc25rLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogLTlweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5wby1oLXJhZGlvIHtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLnhhYy1uaGFuLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udGFibGVjb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiBibGFjaztcbn0iLCJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IC05cHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4ucG8taC1yYWRpbyB7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi54YWMtbmhhbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRhYmxlY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.ts": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.ts ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: LapPhieuMuaKSNKSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LapPhieuMuaKSNKSharedComponent", function () { return LapPhieuMuaKSNKSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/warning */ "./node_modules/@iconify/icons-ic/warning.js");
            /* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-info */ "./node_modules/@iconify/icons-ic/twotone-info.js");
            /* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../yeu-cau-mua-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.model.ts");
            /* harmony import */ var _them_ksnk_du_tru_mua_popup_them_ksnk_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.ts");
            var LapPhieuMuaKSNKSharedComponent = /** @class */ (function () {
                function LapPhieuMuaKSNKSharedComponent(apiService, notificationService, authService, ref, route, dialog) {
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.ref = ref;
                    this.route = route;
                    this.dialog = dialog;
                    this.vatTuGrid = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_17__["ThongTinVatTuChiTiet"]();
                    this.thongTinVatTu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_17__["ThongTinVatTuChiTiet"]();
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icWarning = _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icInfo = _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icDisable = null;
                    this.isSelectDuocPham = false;
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridColumns = [];
                    this.dataVatTuGrid = null;
                    this.lstVatTuGrid = [];
                    this.phieuMuaVatTuDuTruId = null;
                    this.groups = [{ field: 'TenLoaiVatTu' }];
                    this.hideGuibtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.dangXuLy = false;
                }
                LapPhieuMuaKSNKSharedComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].YeuCauDuTruMuaNhomKSNK;
                    this.yeuCauMuaVatTu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauMuaVatTu"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                        this.phieuMuaVatTuDuTruId = id;
                    }
                    if (this.isCreate) {
                        this.getCurrentUser();
                    }
                    this.gridColumns = [
                        { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
                        // { Field: "TenLoaiVatTu", Title: "Loại", Width: 60, ShowTooltip: true },
                        { Field: "TenLoaiVatTu", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ten", Title: "Tên", MinWidth: 100, ShowTooltip: true },
                        { Field: "DVT", Title: "ĐVT", Width: 50 },
                        { Field: "QuyCach", Title: "Quy cách", Width: 50 },
                        { Field: "NhaSX", Title: "Nhà SX", Width: 100 },
                        { Field: "NuocSX", Title: "Nước SX", Width: 100 },
                        {
                            Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100,
                            Template: this.slDuTruVatTuTemplate
                        },
                        {
                            Field: "SoLuongDuKienSuDungTrongKy", Title: "SL D.Kiến Sử Dụng", Width: 100,
                            Template: this.slDuKienVatTuTemplate
                        },
                        {
                            Field: "SoLuongDuTruTruongKhoaDuyet", Title: "t.khoa duyệt", Width: 100,
                            Hidden: (this.trangThaiVo != null && !(this.trangThaiVo.IsKhoaDuyet == true || this.trangThaiVo.TrangThai == true || this.trangThaiVo.TrangThai == false))
                        },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 150, ShowTooltip: true, Template: this.ghiChuChiTietTemplate },
                        {
                            Field: "Action", Title: "", Width: 80, Template: this.actionTemplate,
                            Hidden: !(this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null)
                        },
                    ];
                };
                LapPhieuMuaKSNKSharedComponent.prototype.getCurrentUser = function () {
                    var _this = this;
                    this.vatTuGrid.LoaiVatTu = 1;
                    if (this.isCreate) {
                        var dateNow = new Date();
                        this.yeuCauMuaVatTu.NgayYeuCau = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), dateNow.getHours(), dateNow.getMinutes());
                    }
                    this.apiService.get("YeuCauLinhDuocPham/GetCurrentUser").subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.yeuCauMuaVatTu.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                            _this.yeuCauMuaVatTu.TenNhanVienYeuCau = resultData.HoTen;
                        }
                    });
                };
                LapPhieuMuaKSNKSharedComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        if (this.isSelectDuocPham != true) {
                            this.themVatTu();
                        }
                        else {
                            this.isSelectDuocPham = false;
                        }
                    }
                };
                LapPhieuMuaKSNKSharedComponent.prototype.openCombobox = function (event) {
                    if (event) {
                        this.isSelectDuocPham = true;
                    }
                    else {
                        this.isSelectDuocPham = false;
                    }
                };
                LapPhieuMuaKSNKSharedComponent.prototype.chonVatTu = function (dataItem) {
                    var _this = this;
                    if (dataItem != undefined && dataItem != null) {
                        this.validationErrors = [];
                        this.validationErrorsVatTu = [];
                        this.vatTuGrid.KhoId = this.yeuCauMuaVatTu.KhoId;
                        this.vatTuGrid.VatTuId = dataItem.KeyId;
                        this.vatTuGrid.Ten = dataItem.Ten;
                        this.vatTuGrid.Ma = dataItem.Ma;
                        this.vatTuGrid.DVT = dataItem.DVT;
                        this.vatTuGrid.NhaSX = dataItem.NhaSX;
                        this.vatTuGrid.NuocSX = dataItem.NuocSX;
                        this.apiService.post("YeuCauMuaKSNK/ThongTinKSNK", this.vatTuGrid).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.thongTinVatTu = resultData;
                            }
                        });
                    }
                    else {
                        this.huy();
                        this.thongTinVatTu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_17__["ThongTinVatTuChiTiet"]();
                    }
                };
                LapPhieuMuaKSNKSharedComponent.prototype.xoaVatTu = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, ["xóa"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.lstVatTuGrid.splice(_this.lstVatTuGrid.findIndex(function (x) { return x == dataItem; }), 1);
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                            _this.validationErrorsVatTu = [];
                            _this.setValueForGridVatTu();
                        }
                    });
                };
                LapPhieuMuaKSNKSharedComponent.prototype.themVatTu = function () {
                    if (this.dangXuLy)
                        return;
                    this.dangXuLy = true;
                    var self = this;
                    self.validationErrors = [];
                    self.validationErrorsVatTu = [];
                    if (self.vatTuGrid.LoaiVatTu == 1) {
                        self.vatTuGrid.LaVatTuBHYT = false;
                    }
                    else {
                        self.vatTuGrid.LaVatTuBHYT = true;
                    }
                    self.ref.detectChanges();
                    self.apiService.post("YeuCauMuaKSNK/ThemKSNKChiTietGridVo", self.vatTuGrid).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            //console.log(resultData)
                            self.lstVatTuGrid.push(resultData);
                            self.setValueForGridVatTu();
                            self.huy();
                        }
                        self.dangXuLy = false;
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.dangXuLy = false;
                    });
                };
                LapPhieuMuaKSNKSharedComponent.prototype.setValueForGridVatTu = function () {
                    this.gridDataSource = {
                        data: this.lstVatTuGrid,
                        total: this.lstVatTuGrid.length
                    };
                    var STT = 1;
                    this.lstVatTuGrid.forEach(function (element) {
                        element.STT = STT;
                        STT++;
                    });
                    this.kiemTraValidators();
                    this.gridVatTu.gridDataSource = this.gridDataSource;
                    this.gridVatTu.setDataSource();
                    this.pushDataVatTu();
                    //console.log("this.list: ", this.lstDuocPhamGrid);
                    if (this.lstVatTuGrid.length > 0) {
                        this.hideGuibtn.emit(true);
                        this.icDisable = true;
                    }
                    else {
                        this.hideGuibtn.emit(false);
                        this.icDisable = false;
                    }
                };
                //Validators
                LapPhieuMuaKSNKSharedComponent.prototype.kiemTraValidators = function () {
                    var _this = this;
                    this.vatTuGrid.YeuCauMuaVatTuChiTietValidators = new Array();
                    this.lstVatTuGrid.forEach(function (element) {
                        var vatTu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauMuaVatTuChiTietValidator"]();
                        vatTu.VatTuId = element.VatTuId;
                        vatTu.LaVatTuBHYT = element.LaVatTuBHYT;
                        _this.vatTuGrid.YeuCauMuaVatTuChiTietValidators.push(vatTu);
                    });
                };
                LapPhieuMuaKSNKSharedComponent.prototype.pushDataVatTu = function () {
                    var _this = this;
                    this.yeuCauMuaVatTu.DuTruMuaVatTuChiTiets = new Array();
                    this.lstVatTuGrid.forEach(function (obj) {
                        var model = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauMuaVatTuChiTiet"]();
                        model.VatTuId = obj.VatTuId;
                        model.LaVatTuBHYT = obj.LaVatTuBHYT;
                        model.SoLuongDuTru = obj.SoLuongDuTru;
                        model.SoLuongDuKienSuDung = obj.SoLuongDuKienSuDung;
                        model.GhiChu = obj.GhiChu;
                        model.STT = obj.STT;
                        _this.yeuCauMuaVatTu.DuTruMuaVatTuChiTiets.push(model);
                        //console.log("this.yeuCauMuaVatTu.YeuCauMuaVatTuChiTiets: ", this.yeuCauMuaVatTu.DuTruMuaDuocPhamChiTiets)
                    });
                };
                LapPhieuMuaKSNKSharedComponent.prototype.getSharedData = function () {
                    this.setValueForGridVatTu();
                    return this.yeuCauMuaVatTu;
                };
                LapPhieuMuaKSNKSharedComponent.prototype.clearGridVatTu = function () {
                    this.huy();
                    this.lstVatTuGrid = [];
                    this.gridDataSource = {
                        data: this.lstVatTuGrid,
                        total: 0
                    };
                    this.gridVatTu.gridDataSource = this.gridDataSource;
                    this.gridVatTu.setDataSource();
                    this.yeuCauMuaVatTu.DuTruMuaVatTuChiTiets = [];
                };
                LapPhieuMuaKSNKSharedComponent.prototype.huy = function () {
                    this.validationErrors = [];
                    this.validationErrorsVatTu = [];
                    this.vatTuGrid.Ten = null;
                    this.vatTuGrid.VatTuId = null;
                    this.vatTuGrid.SoLuongDuTru = null;
                    this.vatTuGrid.SoLuongDuKienSuDung = null;
                    this.vatTuGrid.DVT = null;
                    this.vatTuGrid.QuyCach = null;
                    this.vatTuGrid.NhaSX = null;
                    this.vatTuGrid.NuocSX = null;
                    this.vatTuGrid.LaVatTuBHYT = null;
                    this.vatTuGrid.GhiChu = null;
                };
                LapPhieuMuaKSNKSharedComponent.prototype.themVatTuBV = function () {
                    var self = this;
                    self.dialog.open(_them_ksnk_du_tru_mua_popup_them_ksnk_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_18__["ThemKSNKDuTruMuaPopupComponent"], {
                        disableClose: false,
                        width: '900px',
                        data: { LoaiVatTu: this.vatTuGrid.LoaiVatTu }
                    }).afterClosed().subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null && resultData.trangThai == "Them") {
                            self.lstVatTuGrid.push(resultData.data);
                            self.setValueForGridVatTu();
                        }
                    });
                };
                LapPhieuMuaKSNKSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauMuaKSNK/GetPhieuMuaKSNKDuTru?id=" + id).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                //console.log(resultData)
                                _this.yeuCauMuaVatTu = resultData;
                                if (_this.yeuCauMuaVatTu.TruongKhoaDuyet == null) {
                                    _this.isCreate = true;
                                }
                                _this.lstVatTuGrid = [];
                                resultData.DuTruMuaVatTuChiTiets.forEach(function (element) {
                                    _this.lstVatTuGrid.push(element);
                                });
                                _this.setValueForGridVatTu();
                            }
                        }, function (err) {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return LapPhieuMuaKSNKSharedComponent;
            }());
            LapPhieuMuaKSNKSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], LapPhieuMuaKSNKSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
            ], LapPhieuMuaKSNKSharedComponent.prototype, "STTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTu', { static: true })
            ], LapPhieuMuaKSNKSharedComponent.prototype, "gridVatTu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], LapPhieuMuaKSNKSharedComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slDuTruVatTuTemplate', { static: true })
            ], LapPhieuMuaKSNKSharedComponent.prototype, "slDuTruVatTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slDuKienVatTuTemplate', { static: true })
            ], LapPhieuMuaKSNKSharedComponent.prototype, "slDuKienVatTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ghiChuChiTietTemplate', { static: true })
            ], LapPhieuMuaKSNKSharedComponent.prototype, "ghiChuChiTietTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LapPhieuMuaKSNKSharedComponent.prototype, "trangThaiVo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LapPhieuMuaKSNKSharedComponent.prototype, "validationErrorsVatTu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LapPhieuMuaKSNKSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], LapPhieuMuaKSNKSharedComponent.prototype, "hideGuibtn", void 0);
            LapPhieuMuaKSNKSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lap-phieu-mua-ksnk-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lap-phieu-mua-ksnk-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lap-phieu-mua-ksnk-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.scss")).default]
                })
            ], LapPhieuMuaKSNKSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.scss": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.scss ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS95ZXUtY2F1LW11YS1rc25rL2xhcC1waGlldS1tdWEta3Nuay9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxca2llbS1zb2F0LW5oaWVtLWtodWFuXFxkdS10cnUtbXVhXFx5ZXUtY2F1LW11YS1rc25rXFxsYXAtcGhpZXUtbXVhLWtzbmtcXGxhcC1waGlldS1tdWEta3Nuay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS95ZXUtY2F1LW11YS1rc25rL2xhcC1waGlldS1tdWEta3Nuay9sYXAtcGhpZXUtbXVhLWtzbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEveWV1LWNhdS1tdWEta3Nuay9sYXAtcGhpZXUtbXVhLWtzbmsvbGFwLXBoaWV1LW11YS1rc25rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.ts": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.ts ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: LapPhieuMuaKSNKComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LapPhieuMuaKSNKComponent", function () { return LapPhieuMuaKSNKComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../yeu-cau-mua-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.model.ts");
            /* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
            /* harmony import */ var _gui_phieu_mua_ksnk_confirm_gui_phieu_mua_ksnk_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.ts");
            /* harmony import */ var _phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-mua-ksnk/phieu-mua-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.ts");
            /* harmony import */ var _lap_phieu_mua_ksnk_shared_lap_phieu_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.ts");
            var LapPhieuMuaKSNKComponent = /** @class */ (function () {
                function LapPhieuMuaKSNKComponent(apiService, dialog, notificationService, authService, router, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.ref = ref;
                    this.location = location;
                    this.isCreate = false;
                    this.inPhieu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_15__["PhieuYeuCauMuaVatTu"]();
                    this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_16__["TrangThaiTaoPhieuLinh"]();
                }
                LapPhieuMuaKSNKComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].YeuCauDuTruMuaNhomKSNK;
                    this.yeuCauMuaVatTu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauMuaVatTu"]();
                    this.trangThaiVo.TrangThai = null;
                };
                LapPhieuMuaKSNKComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                LapPhieuMuaKSNKComponent.prototype.closePopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                LapPhieuMuaKSNKComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                LapPhieuMuaKSNKComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                LapPhieuMuaKSNKComponent.prototype.guiPhieuMuaVatTu = function () {
                    var self = this;
                    self.dialog.open(_gui_phieu_mua_ksnk_confirm_gui_phieu_mua_ksnk_confirm_component__WEBPACK_IMPORTED_MODULE_17__["GuiPhieuMuaKSNKConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn tạo phiếu kiểm soát nhiễm khuẩn dự trù này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.yeuCauMuaVatTu = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Add)) {
                                self.savingPage();
                                self.apiService.post("YeuCauMuaKSNK/GuiPhieuMuaKSNKDuTru", self.yeuCauMuaVatTu).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                        self.router.navigate(['/nhap-xuat/ksnk/yeu-cau-mua-ksnk']);
                                        self.closePopupSavingData();
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupSavingData();
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                        else if (res == "YesAndPrint") {
                            self.yeuCauMuaVatTu = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Add)) {
                                self.savingPage();
                                self.apiService.post("YeuCauMuaKSNK/GuiPhieuMuaKSNKDuTru", self.yeuCauMuaVatTu).subscribe(function (result) {
                                    if (result != undefined && result != null) {
                                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                        self.closePopupSavingData();
                                        self.dialog.open(_phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaKSNKComponent"], {
                                            disableClose: false,
                                            width: '1200px',
                                            data: { Id: result },
                                        }).afterClosed().subscribe(function () {
                                            self.router.navigate(['/nhap-xuat/ksnk/yeu-cau-mua-ksnk']);
                                        });
                                    }
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupSavingData();
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                LapPhieuMuaKSNKComponent.prototype.cancel = function () {
                    this.location.back();
                };
                LapPhieuMuaKSNKComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return LapPhieuMuaKSNKComponent;
            }());
            LapPhieuMuaKSNKComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_lap_phieu_mua_ksnk_shared_lap_phieu_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_19__["LapPhieuMuaKSNKSharedComponent"], { static: true })
            ], LapPhieuMuaKSNKComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
            ], LapPhieuMuaKSNKComponent.prototype, "keyEvent", null);
            LapPhieuMuaKSNKComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-lap-phieu-mua-ksnk',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lap-phieu-mua-ksnk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lap-phieu-mua-ksnk.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.scss")).default]
                })
            ], LapPhieuMuaKSNKComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.scss": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.scss ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS95ZXUtY2F1LW11YS1rc25rL3BoaWV1LW11YS1rc25rL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxraWVtLXNvYXQtbmhpZW0ta2h1YW5cXGR1LXRydS1tdWFcXHlldS1jYXUtbXVhLWtzbmtcXHBoaWV1LW11YS1rc25rXFxwaGlldS1tdWEta3Nuay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4vZHUtdHJ1LW11YS95ZXUtY2F1LW11YS1rc25rL3BoaWV1LW11YS1rc25rL3BoaWV1LW11YS1rc25rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEveWV1LWNhdS1tdWEta3Nuay9waGlldS1tdWEta3Nuay9waGlldS1tdWEta3Nuay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: PhieuMuaKSNKComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuMuaKSNKComponent", function () { return PhieuMuaKSNKComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../yeu-cau-mua-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.model.ts");
            var PhieuMuaKSNKComponent = /** @class */ (function () {
                function PhieuMuaKSNKComponent(dialogRef, apiService, notificationService, data, ref) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.data = data;
                    this.ref = ref;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.inPhieu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_6__["PhieuYeuCauMuaVatTu"]();
                    this.src = "";
                    this.dataHTML = "";
                }
                PhieuMuaKSNKComponent.prototype.ngOnInit = function () {
                    this.xemPhieuVatTu();
                };
                PhieuMuaKSNKComponent.prototype.xemPhieuVatTuVaDuocPham = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieu.DuTruMuaVatTuId = self.data.Id;
                    self.inPhieu.DuTruMuaDuocPhamId = self.data.Id;
                    self.inPhieu.Header = true;
                    self.apiService.post('YeuCauMuaKSNK/InPhieuMuaDuTruVatTuVaDuocPhamKSNK', self.inPhieu).subscribe(function (resData) {
                        if (resData) {
                            self.inPhieu.Header = false;
                            self.dataHTML = resData;
                            self.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(resData);
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuMuaKSNKComponent.prototype.xemPhieuVatTu = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieu.DuTruMuaVatTuId = self.data.Id;
                    self.inPhieu.Header = false;
                    self.apiService.post("YeuCauMuaKSNK/InPhieuMuaDuTruKSNK", self.inPhieu).subscribe(function (resData) {
                        if (resData != undefined && resData != null) {
                            self.inPhieu.Header = false;
                            self.dataHTML = resData;
                            self.src = "data:text/html;charset=utf-8," + encodeURIComponent(resData);
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuMuaKSNKComponent.prototype.xemPhieuDuocPham = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.inPhieu.DuTruMuaDuocPhamId = self.data.Id;
                    self.inPhieu.Header = false;
                    self.apiService.post("YeuCauMuaKSNK/InPhieuMuaDuTruDuocPhamKSNK", self.inPhieu).subscribe(function (resData) {
                        if (resData != undefined && resData != null) {
                            self.inPhieu.Header = false;
                            self.dataHTML = resData;
                            self.src = "data:text/html;charset=utf-8," + encodeURIComponent(resData);
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                };
                PhieuMuaKSNKComponent.prototype.getSharedPrintForm = function () {
                    var template = this.dataHTML.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
                        "<th>PHIẾU DỰ TRÙ KIỄM SOÁT NHIỄM KHUẨN</th>" +
                        "</p>", "");
                    return new Promise(function (resolve) {
                        resolve(template);
                        //this.close();
                    });
                };
                PhieuMuaKSNKComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return PhieuMuaKSNKComponent;
            }());
            PhieuMuaKSNKComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            PhieuMuaKSNKComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-mua-ksnk',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-mua-ksnk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-mua-ksnk.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], PhieuMuaKSNKComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.scss": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.scss ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1LXRydS1tdWEveWV1LWNhdS1tdWEta3Nuay90aGVtLWtzbmstZHUtdHJ1LW11YS1wb3B1cC90aGVtLWtzbmstZHUtdHJ1LW11YS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.ts": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.ts ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: ThemKSNKDuTruMuaPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemKSNKDuTruMuaPopupComponent", function () { return ThemKSNKDuTruMuaPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../yeu-cau-mua-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.model.ts");
            var ThemKSNKDuTruMuaPopupComponent = /** @class */ (function () {
                function ThemKSNKDuTruMuaPopupComponent(apiService, dialog, notificationService, ref, authService, dialogRef, data) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.ref = ref;
                    this.authService = authService;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.isSelectDuocPham = false;
                    this.popupLoadingData = null;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default.a;
                }
                ThemKSNKDuTruMuaPopupComponent.prototype.ngOnInit = function () {
                    this.vatTu = new _yeu_cau_mua_ksnk_model__WEBPACK_IMPORTED_MODULE_11__["ThongTinVatTuChiTiet"]();
                    this.vatTu.LoaiVatTu = this.data.LoaiVatTu;
                    if (this.data.LoaiVatTu == 1) {
                        this.vatTu.LaVatTuBHYT == false;
                    }
                    else {
                        this.vatTu.LaVatTuBHYT == true;
                    }
                };
                ThemKSNKDuTruMuaPopupComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang thêm dữ liệu..." },
                    });
                };
                ThemKSNKDuTruMuaPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                ThemKSNKDuTruMuaPopupComponent.prototype.closePopup = function (result) {
                    this.dialogRef.close(result);
                };
                ThemKSNKDuTruMuaPopupComponent.prototype.huy = function () {
                    this.dialog.closeAll();
                };
                ThemKSNKDuTruMuaPopupComponent.prototype.themVatTu = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                        disableClose: false,
                        width: '500px',
                        data: { Title: "Xác nhận", Message: "Bạn có muốn thêm kiễm xoát nhiễm khuẩn này vào phiếu dự trù không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            self.loadingPage();
                            self.vatTu.IsThemVatTu = true;
                            self.apiService.post("YeuCauMuaKSNK/ThemKSNKChiTietGridVo", self.vatTu).subscribe(function (resultData) {
                                self.closePopupLoadingData();
                                if (resultData != undefined && resultData != null) {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                    self.vatTu.IsThemVatTu = false;
                                    var dataObj = {
                                        data: resultData,
                                        trangThai: "Them"
                                    };
                                    self.closePopup(dataObj);
                                }
                            }, function (err) {
                                self.vatTu.IsThemVatTu = false;
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                                console.log("validationErrors: ", self.validationErrors);
                                self.closePopupLoadingData();
                            });
                        }
                    });
                };
                ThemKSNKDuTruMuaPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        if (this.isSelectDuocPham != true) {
                            this.themVatTu();
                        }
                        else {
                            this.isSelectDuocPham = false;
                        }
                    }
                };
                ThemKSNKDuTruMuaPopupComponent.prototype.openCombobox = function (event) {
                    if (event) {
                        this.isSelectDuocPham = true;
                    }
                    else {
                        this.isSelectDuocPham = false;
                    }
                };
                return ThemKSNKDuTruMuaPopupComponent;
            }());
            ThemKSNKDuTruMuaPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            ThemKSNKDuTruMuaPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-them-ksnk-du-tru-mua-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./them-ksnk-du-tru-mua-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./them-ksnk-du-tru-mua-popup.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], ThemKSNKDuTruMuaPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk-routing.module.ts": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk-routing.module.ts ***!
          \*****************************************************************************************************************************/
        /*! exports provided: YeuCauMuaKSNKRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaKSNKRoutingModule", function () { return YeuCauMuaKSNKRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _danh_sach_du_tru_mua_ksnk_danh_sach_du_tru_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.ts");
            /* harmony import */ var _lap_phieu_mua_ksnk_lap_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.ts");
            /* harmony import */ var _lap_phieu_mua_ksnk_gui_lai_lap_phieu_mua_ksnk_gui_lai_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.ts");
            var routes = [
                {
                    path: '',
                    component: _danh_sach_du_tru_mua_ksnk_danh_sach_du_tru_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_6__["DanhSachDuTruMuaKSNKComponent"],
                    data: {
                        title: 'Danh Sách Yêu Cầu Mua Kiểm Soát Nhiễm Khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauDuTruMuaNhomKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'lap-phieu-mua-ksnk/them',
                    component: _lap_phieu_mua_ksnk_lap_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_7__["LapPhieuMuaKSNKComponent"],
                    data: {
                        title: 'Lập Dự Trù Mua Kiểm Soát Nhiễm Khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauDuTruMuaNhomKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'lap-phieu-mua-ksnk-gui-lai/:id',
                    component: _lap_phieu_mua_ksnk_gui_lai_lap_phieu_mua_ksnk_gui_lai_component__WEBPACK_IMPORTED_MODULE_8__["LapPhieuMuaKSNKGuiLaiComponent"],
                    data: {
                        title: 'Lập Dự Trù Mua Kiểm Soát Nhiễm Khuẩn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauDuTruMuaNhomKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
            ];
            var YeuCauMuaKSNKRoutingModule = /** @class */ (function () {
                function YeuCauMuaKSNKRoutingModule() {
                }
                return YeuCauMuaKSNKRoutingModule;
            }());
            YeuCauMuaKSNKRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], YeuCauMuaKSNKRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.model.ts": 
        /*!********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.model.ts ***!
          \********************************************************************************************************************/
        /*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator, ThongTinChiTietTonKho */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuGridVo", function () { return YeuCauMuaVatTuGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTu", function () { return YeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTiet", function () { return YeuCauMuaVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaVatTu", function () { return PhieuYeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinVatTuChiTiet", function () { return ThongTinVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTietValidator", function () { return YeuCauMuaVatTuChiTietValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietTonKho", function () { return ThongTinChiTietTonKho; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var YeuCauMuaVatTuGridVo = /** @class */ (function () {
                function YeuCauMuaVatTuGridVo(SoPhieu, TenNhanVienYeuCau, NgayYeuCauTuFormat, NgayYeuCauDenFormat, RangeFromDate, FromDate, ToDate, ChoDuyet, DaDuyet, TuChoiDuyet, TuNgay, DenNgay, SearchString) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NgayYeuCauTuFormat === void 0) { NgayYeuCauTuFormat = null; }
                    if (NgayYeuCauDenFormat === void 0) { NgayYeuCauDenFormat = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new RangeDate(); }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.SoPhieu = SoPhieu;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
                    this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
                    this.RangeFromDate = RangeFromDate;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.SearchString = SearchString;
                }
                return YeuCauMuaVatTuGridVo;
            }());
            var RangeDate = /** @class */ (function () {
                function RangeDate(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return RangeDate;
            }());
            var YeuCauMuaVatTu = /** @class */ (function () {
                function YeuCauMuaVatTu(Id, SoPhieu, KhoId, NhanVienYeuCauId, NgayYeuCau, KyDuTruMuaDuocPhamVatTuId, GhiChu, TruongKhoaId, TruongKhoaDuyet, TenKho, TenNhanVienYeuCau, TenNhomDuTru, TenKyDuTru, NgayTaiKhoa, NgayKhoDuoc, NgayGiamDoc, TrangThai, TenTruongKhoa, NgayTruongKhoaDuyet, TenNhanVienKhoDuoc, NgayKhoDuocDuyet, TenGiamDoc, NgayGiamDocDuyet, LyDoTruongKhoaTuChoi, DuTruMuaVatTuChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (KyDuTruMuaDuocPhamVatTuId === void 0) { KyDuTruMuaDuocPhamVatTuId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TruongKhoaId === void 0) { TruongKhoaId = null; }
                    if (TruongKhoaDuyet === void 0) { TruongKhoaDuyet = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (TenNhomDuTru === void 0) { TenNhomDuTru = null; }
                    if (TenKyDuTru === void 0) { TenKyDuTru = null; }
                    if (NgayTaiKhoa === void 0) { NgayTaiKhoa = null; }
                    if (NgayKhoDuoc === void 0) { NgayKhoDuoc = null; }
                    if (NgayGiamDoc === void 0) { NgayGiamDoc = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TenTruongKhoa === void 0) { TenTruongKhoa = null; }
                    if (NgayTruongKhoaDuyet === void 0) { NgayTruongKhoaDuyet = null; }
                    if (TenNhanVienKhoDuoc === void 0) { TenNhanVienKhoDuoc = null; }
                    if (NgayKhoDuocDuyet === void 0) { NgayKhoDuocDuyet = null; }
                    if (TenGiamDoc === void 0) { TenGiamDoc = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (LyDoTruongKhoaTuChoi === void 0) { LyDoTruongKhoaTuChoi = null; }
                    if (DuTruMuaVatTuChiTiets === void 0) { DuTruMuaVatTuChiTiets = []; }
                    this.Id = Id;
                    this.SoPhieu = SoPhieu;
                    this.KhoId = KhoId;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.NgayYeuCau = NgayYeuCau;
                    this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
                    this.GhiChu = GhiChu;
                    this.TruongKhoaId = TruongKhoaId;
                    this.TruongKhoaDuyet = TruongKhoaDuyet;
                    this.TenKho = TenKho;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.TenNhomDuTru = TenNhomDuTru;
                    this.TenKyDuTru = TenKyDuTru;
                    this.NgayTaiKhoa = NgayTaiKhoa;
                    this.NgayKhoDuoc = NgayKhoDuoc;
                    this.NgayGiamDoc = NgayGiamDoc;
                    this.TrangThai = TrangThai;
                    this.TenTruongKhoa = TenTruongKhoa;
                    this.NgayTruongKhoaDuyet = NgayTruongKhoaDuyet;
                    this.TenNhanVienKhoDuoc = TenNhanVienKhoDuoc;
                    this.NgayKhoDuocDuyet = NgayKhoDuocDuyet;
                    this.TenGiamDoc = TenGiamDoc;
                    this.NgayGiamDocDuyet = NgayGiamDocDuyet;
                    this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
                    this.DuTruMuaVatTuChiTiets = DuTruMuaVatTuChiTiets;
                }
                return YeuCauMuaVatTu;
            }());
            var YeuCauMuaVatTuChiTiet = /** @class */ (function () {
                function YeuCauMuaVatTuChiTiet(STT, Id, VatTuId, LaVatTuBHYT, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongDuTruTaiKhoaDuyet, NhomDieuTriDuPhong, GhiChu, DuTruMuaVatTuTheoKhoaChiTietId, DuTruMuaVatTuKhoDuocChiTietId) {
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = 0; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (NhomDieuTriDuPhong === void 0) { NhomDieuTriDuPhong = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (DuTruMuaVatTuTheoKhoaChiTietId === void 0) { DuTruMuaVatTuTheoKhoaChiTietId = null; }
                    if (DuTruMuaVatTuKhoDuocChiTietId === void 0) { DuTruMuaVatTuKhoDuocChiTietId = null; }
                    this.STT = STT;
                    this.Id = Id;
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
                    this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
                    this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
                    this.GhiChu = GhiChu;
                    this.DuTruMuaVatTuTheoKhoaChiTietId = DuTruMuaVatTuTheoKhoaChiTietId;
                    this.DuTruMuaVatTuKhoDuocChiTietId = DuTruMuaVatTuKhoDuocChiTietId;
                }
                return YeuCauMuaVatTuChiTiet;
            }());
            var PhieuYeuCauMuaVatTu = /** @class */ (function () {
                function PhieuYeuCauMuaVatTu(DuTruMuaVatTuId, DuTruMuaDuocPhamId, HostingName, Header, TrangThai) {
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = null; }
                    if (DuTruMuaDuocPhamId === void 0) { DuTruMuaDuocPhamId = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.DuTruMuaDuocPhamId = DuTruMuaDuocPhamId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.TrangThai = TrangThai;
                }
                return PhieuYeuCauMuaVatTu;
            }());
            var ThongTinVatTuChiTiet = /** @class */ (function () {
                function ThongTinVatTuChiTiet(STT, Id, NhomVatTuId, VatTuId, LaVatTuBHYT, Ma, DVT, QuyCach, NhaSX, NuocSX, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongTonDuTru, SoLuongTonKhoTong, SoLuongChuaNhapVeHDT, ThongTinChiTietTonKhoTongs, ThongTinChiTietTonHDTs, LoaiVatTu, TenLoaiVatTu, Ten, SLTonDuTru, SLTonKhoTong, SLChuaNhapVeHDT, SoLuongDuTruTaiKhoaDuyet, SoLuongDuTruKhoaDuocDuyet, SoLuongDuTruGiamDocDuyet, KhoId, IsThemVatTu, GhiChu, YeuCauMuaVatTuChiTietValidators) {
                    if (STT === void 0) { STT = 0; }
                    if (Id === void 0) { Id = 0; }
                    if (NhomVatTuId === void 0) { NhomVatTuId = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (QuyCach === void 0) { QuyCach = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongTonDuTru === void 0) { SoLuongTonDuTru = null; }
                    if (SoLuongTonKhoTong === void 0) { SoLuongTonKhoTong = null; }
                    if (SoLuongChuaNhapVeHDT === void 0) { SoLuongChuaNhapVeHDT = null; }
                    if (ThongTinChiTietTonKhoTongs === void 0) { ThongTinChiTietTonKhoTongs = []; }
                    if (ThongTinChiTietTonHDTs === void 0) { ThongTinChiTietTonHDTs = []; }
                    if (LoaiVatTu === void 0) { LoaiVatTu = null; }
                    if (TenLoaiVatTu === void 0) { TenLoaiVatTu = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (SLTonDuTru === void 0) { SLTonDuTru = null; }
                    if (SLTonKhoTong === void 0) { SLTonKhoTong = null; }
                    if (SLChuaNhapVeHDT === void 0) { SLChuaNhapVeHDT = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (SoLuongDuTruKhoaDuocDuyet === void 0) { SoLuongDuTruKhoaDuocDuyet = null; }
                    if (SoLuongDuTruGiamDocDuyet === void 0) { SoLuongDuTruGiamDocDuyet = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (IsThemVatTu === void 0) { IsThemVatTu = false; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (YeuCauMuaVatTuChiTietValidators === void 0) { YeuCauMuaVatTuChiTietValidators = []; }
                    this.STT = STT;
                    this.Id = Id;
                    this.NhomVatTuId = NhomVatTuId;
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.Ma = Ma;
                    this.DVT = DVT;
                    this.QuyCach = QuyCach;
                    this.NhaSX = NhaSX;
                    this.NuocSX = NuocSX;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
                    this.SoLuongTonDuTru = SoLuongTonDuTru;
                    this.SoLuongTonKhoTong = SoLuongTonKhoTong;
                    this.SoLuongChuaNhapVeHDT = SoLuongChuaNhapVeHDT;
                    this.ThongTinChiTietTonKhoTongs = ThongTinChiTietTonKhoTongs;
                    this.ThongTinChiTietTonHDTs = ThongTinChiTietTonHDTs;
                    this.LoaiVatTu = LoaiVatTu;
                    this.TenLoaiVatTu = TenLoaiVatTu;
                    this.Ten = Ten;
                    this.SLTonDuTru = SLTonDuTru;
                    this.SLTonKhoTong = SLTonKhoTong;
                    this.SLChuaNhapVeHDT = SLChuaNhapVeHDT;
                    this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
                    this.SoLuongDuTruKhoaDuocDuyet = SoLuongDuTruKhoaDuocDuyet;
                    this.SoLuongDuTruGiamDocDuyet = SoLuongDuTruGiamDocDuyet;
                    this.KhoId = KhoId;
                    this.IsThemVatTu = IsThemVatTu;
                    this.GhiChu = GhiChu;
                    this.YeuCauMuaVatTuChiTietValidators = YeuCauMuaVatTuChiTietValidators;
                }
                return ThongTinVatTuChiTiet;
            }());
            var YeuCauMuaVatTuChiTietValidator = /** @class */ (function () {
                function YeuCauMuaVatTuChiTietValidator(VatTuId, LaVatTuBHYT) {
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                }
                return YeuCauMuaVatTuChiTietValidator;
            }());
            var ThongTinChiTietTonKho = /** @class */ (function () {
                function ThongTinChiTietTonKho(Ten, SLTon, SoLuongTon) {
                    if (Ten === void 0) { Ten = null; }
                    if (SLTon === void 0) { SLTon = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    this.Ten = Ten;
                    this.SLTon = SLTon;
                    this.SoLuongTon = SoLuongTon;
                }
                return ThongTinChiTietTonKho;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.module.ts": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.module.ts ***!
          \*********************************************************************************************************************/
        /*! exports provided: YeuCauMuaKSNKSModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaKSNKSModule", function () { return YeuCauMuaKSNKSModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
            /* harmony import */ var _danh_sach_du_tru_mua_ksnk_danh_sach_du_tru_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component.ts");
            /* harmony import */ var _lap_phieu_mua_ksnk_shared_lap_phieu_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-shared/lap-phieu-mua-ksnk-shared.component.ts");
            /* harmony import */ var _lap_phieu_mua_ksnk_lap_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component.ts");
            /* harmony import */ var _lap_phieu_mua_ksnk_gui_lai_lap_phieu_mua_ksnk_gui_lai_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component.ts");
            /* harmony import */ var _gui_phieu_mua_ksnk_confirm_gui_phieu_mua_ksnk_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/gui-phieu-mua-ksnk-confirm/gui-phieu-mua-ksnk-confirm.component.ts");
            /* harmony import */ var _them_ksnk_du_tru_mua_popup_them_ksnk_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/them-ksnk-du-tru-mua-popup/them-ksnk-du-tru-mua-popup.component.ts");
            /* harmony import */ var _phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./phieu-mua-ksnk/phieu-mua-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/phieu-mua-ksnk/phieu-mua-ksnk.component.ts");
            /* harmony import */ var _yeu_cau_mua_ksnk_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./yeu-cau-mua-ksnk-routing.module */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk-routing.module.ts");
            var YeuCauMuaKSNKSModule = /** @class */ (function () {
                function YeuCauMuaKSNKSModule() {
                }
                return YeuCauMuaKSNKSModule;
            }());
            YeuCauMuaKSNKSModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _danh_sach_du_tru_mua_ksnk_danh_sach_du_tru_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_13__["DanhSachDuTruMuaKSNKComponent"],
                        _lap_phieu_mua_ksnk_shared_lap_phieu_mua_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_14__["LapPhieuMuaKSNKSharedComponent"],
                        _lap_phieu_mua_ksnk_lap_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_15__["LapPhieuMuaKSNKComponent"],
                        _lap_phieu_mua_ksnk_gui_lai_lap_phieu_mua_ksnk_gui_lai_component__WEBPACK_IMPORTED_MODULE_16__["LapPhieuMuaKSNKGuiLaiComponent"],
                        _gui_phieu_mua_ksnk_confirm_gui_phieu_mua_ksnk_confirm_component__WEBPACK_IMPORTED_MODULE_17__["GuiPhieuMuaKSNKConfirmComponent"],
                        _them_ksnk_du_tru_mua_popup_them_ksnk_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_18__["ThemKSNKDuTruMuaPopupComponent"],
                        _phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_19__["PhieuMuaKSNKComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _yeu_cau_mua_ksnk_routing_module__WEBPACK_IMPORTED_MODULE_20__["YeuCauMuaKSNKRoutingModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_12__["DropDownButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"]
                    ],
                    exports: [],
                    entryComponents: [
                        _gui_phieu_mua_ksnk_confirm_gui_phieu_mua_ksnk_confirm_component__WEBPACK_IMPORTED_MODULE_17__["GuiPhieuMuaKSNKConfirmComponent"],
                        _them_ksnk_du_tru_mua_popup_them_ksnk_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_18__["ThemKSNKDuTruMuaPopupComponent"],
                        _phieu_mua_ksnk_phieu_mua_ksnk_component__WEBPACK_IMPORTED_MODULE_19__["PhieuMuaKSNKComponent"]
                    ]
                })
            ], YeuCauMuaKSNKSModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-ksnk-tai-khoa-tong-hop-du-tru~49460fb6-es2015.js.map
//# sourceMappingURL=default~nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-ksnk-tai-khoa-tong-hop-du-tru~49460fb6-es5.js.map
//# sourceMappingURL=default~nhap-xuat-kiem-soat-nhiem-khuan-du-tru-mua-tong-hop-du-tru-mua-ksnk-tai-khoa-tong-hop-du-tru~49460fb6-es5.js.map