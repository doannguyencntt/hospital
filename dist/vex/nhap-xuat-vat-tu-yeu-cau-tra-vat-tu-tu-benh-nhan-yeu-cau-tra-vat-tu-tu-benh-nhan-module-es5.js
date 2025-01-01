(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-vat-tu-yeu-cau-tra-vat-tu-tu-benh-nhan-yeu-cau-tra-vat-tu-tu-benh-nhan-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component.html": 
        /*!************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component.html ***!
          \************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU HOÀN TRẢ VẬT TƯ</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.html": 
        /*!******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.html ***!
          \******************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Hoàn trả',Path:''}\n                ,{Title:'Từ người bệnh',Path:''}\n                ,{Title:'Yêu cầu trả',Path:''}\n                ,{Title:'Tạo phiếu trả vật tư',Path:'/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu trả vật tư từ người bệnh nội trú</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-yeu-cau-tra-vat-tu-tu-benh-nhan-shared [validationErrors]=\"validationErrors\" [isCreate]=\"true\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-yeu-cau-tra-vat-tu-tu-benh-nhan-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"guiPhieuTraVatTu()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Gửi</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.html": 
        /*!**************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.html ***!
          \**************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Vật tư',Path:''}\n            ,{Title:'Hoàn trả',Path:''}\n            ,{Title:'Từ người bệnh',Path:''}\n            ,{Title:'Yêu cầu trả',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                pageSize=\"50\" urlGetData=\"YeuCauTraVatTuTuBenhNhan/GetDataForGridAsync\"\n                [additionalSearchString]=\"addtionStringDefault\"\n                urlGetTotalPage=\"YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsync\" [sort]=\"sort\"\n                [headerTemplate]=\"headerTemplate\" [detailTemplate]=\"detailTemplate\">\n\n                <ng-template #ngayYeuCauTemplate let-dataItem>\n                    {{dataItem.NgayYeuCauDisplay}}\n                </ng-template>\n\n                <ng-template #ngayDuyetTemplate let-dataItem>\n                    {{dataItem.NgayDuyetDisplay}}\n                </ng-template>\n\n                <ng-template #tinhTrangTemplate let-dataItem>\n                    <label *ngIf=\"dataItem.TinhTrang == 0\" class=\"orange\">\n                        <span>Chờ duyệt</span>\n                    </label>\n                    <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                        <span>Đã duyệt</span>\n                    </label>\n                    <label *ngIf=\"dataItem.TinhTrang == 2\" class=\"red\">\n                        <span>Từ chối</span>\n                    </label>\n                </ng-template>\n                <ng-template #soPhieuTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"chinhSua(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                                {{dataItem.SoPhieu}}</p>\n                        </a>\n                    </div>\n                </ng-template>\n            </app-grid>\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid [gridColumns]=\"gridVatTuColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataVatTu\" [groups]=\"groups\" [urlGetTotalPage]=\"urlGetTotalPageVatTu\"\n                    [detailTemplate]=\"detailTemplateBenhNhan\" additionalSearchString=\"{{dataItem.Id}}\"\n                    [autoHeight]=\"true\" [pageable]=\"false\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #detailTemplateBenhNhan let-dataItem>\n                <app-grid [gridColumns]=\"gridYeuCauChiTietColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataBenhNhan\" [urlGetTotalPage]=\"urlGetTotalPageBenhNhan\"\n                    [groups]=\"groupBenhNhan\"\n                    additionalSearchString=\"{{dataItem.YeuCauTraVatTuTuBenhNhanId}};{{dataItem.VatTuBenhVienId}}\"\n                    [autoHeight]=\"true\" [pageable]=\"false\">\n                </app-grid>\n            </ng-template>\n            <ng-template #ngayDieuTriTemplate let-dataItem>\n                {{dataItem.NgayDieuTriDisplay}}\n            </ng-template>\n\n            <ng-template #ngayTraTemplate let-dataItem>\n                {{dataItem.NgayTraDisplay}}\n            </ng-template>\n\n            <ng-template #donGiaTemplate let-dataItem>\n                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n            <ng-template #thanhTienTemplate let-dataItem>\n                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                <strong>{{value}}</strong>\n            </ng-template>\n\n            <ng-template #benhNhanGroupHeaderTemplate let-value=\"value\">\n                <div [innerHTML]=\"value\" style=\"font-weight: normal;\"></div>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauTraVatTu.ChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauTraVatTu.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"danhSachYeuCauTraVatTu.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\"\n                        fxFlex.sm=\"auto\" [(model)]=\"danhSachYeuCauTraVatTu.RangeFromDate\"\n                        label=\"Yêu cầu từ ngày - đến ngày\" (keyup)=\"onKey($event)\"\n                        (modelChange)=\"changeNgayBatDauRange()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"xuatExcel()\"\n                        kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <button (click)=\"taoPhieuMuaVatTu()\" class=\"ml-4 right\" style=\"right: 20px;\" color=\"primary\"\n                        fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Tạo phiếu\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n\n                </div>\n            </ng-template>\n\n            <ng-template #actionTemplate let-dataItem>\n                <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"inPhieu(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In phiếu</span>\n                        </button>\n                        <button *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"chinhSua(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                            <span>Sửa</span>\n                        </button>\n                        <button *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"xoa(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.html": 
        /*!******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.html ***!
          \******************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauTraVatTu.LyDoKhongDuyet}}</h4>\n    </div>\n\n    <app-textbox id=\"SoPhieu\" *ngIf=\"!isCreate\" fxFlex=\"15%\" maxlength=\"250\" label=\"Số phiếu\"\n        [(model)]=\"yeuCauTraVatTu.SoPhieu\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-combobox id=\"KhoaHoanTraId\" fxFlex=\"25%\" url=\"YeuCauTraThuocTuBenhNhan/GetKhoaPhong\"\n        [(model)]=\"yeuCauTraVatTu.KhoaHoanTraId\" [modelText]=\"yeuCauTraVatTu.TenKhoaTra\" label=\"Khoa hoàn trả\"\n        class=\"item-no-padding\" [disabled]=\"true\">\n    </app-combobox>\n\n    <app-combobox id=\"KhoTraId\" fxFlex=\"25%\" [required]=\"true\" [(model)]=\"yeuCauTraVatTu.KhoTraId\"\n        [disabled]=\"!isCreate\" [modelText]=\"yeuCauTraVatTu.TenKhoTra\" url=\"YeuCauTraVatTuTuBenhNhan/GetKhoVatTuCap2\"\n        label=\"Hoàn trả về kho\" (modelChange)=\"khoTraChange($event)\" class=\"item-no-padding\"\n        [validationerror]=\"'KhoTraId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-textbox id=\"TenNhanVienYeuCau\" [fxFlex]=\"!isCreate ? '18%' : '25%'\" [required]=\"true\"\n        [fxFlex.sm]=\"!isCreate ? '18%' : '25%'\" [(model)]=\"yeuCauTraVatTu.TenNhanVienYeuCau\" maxlength=\"250\"\n        label=\"Người yêu cầu\" disabled={{true}}>\n    </app-textbox>\n\n    <app-datepicker id=\"NgayYeuCau\" [fxFlex]=\"!isCreate? '17%' : '25%'\" [fxFlex.sm]=\"!isCreate ? '17%' : '25%'\"\n        [(model)]=\"yeuCauTraVatTu.NgayYeuCau\" disabled={{true}} [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datepicker>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) \"\n        [(model)]=\"yeuCauTraVatTu.GhiChu\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin vật tư</h3>\n\n    <app-daterangepicker *ngIf=\"isCreate\" style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\"\n        fxFlex.sm=\"auto\" [(model)]=\"yeuCauTraVatTu.RangeFromDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n        (modelChange)=\"changeNgayBatDauRange()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n    </app-daterangepicker>\n\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\">\n        <app-grid #gridChild [gridColumns]=\"gridVatTuColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [urlGetData]=\"urlGetDataVatTu\" [groups]=\"groups\" [urlGetTotalPage]=\"urlGetTotalPageVatTu\"\n            (extOnDataBound)=\"onDataBoundGrid($event)\" [detailTemplate]=\"detailTemplate\" [autoHeight]=\"true\"\n            [pageable]=\"false\">\n        </app-grid>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid *ngIf=\"isCreate\" [gridColumns]=\"gridYeuCauChiTietColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataBenhNhan\" [urlGetTotalPage]=\"urlGetTotalPageBenhNhan\"\n                [groups]=\"groupBenhNhan\" additionalSearchString=\"0;{{dataItem.VatTuBenhVienId}};true;{{dataItem.KhoTraId}};{{dataItem.LaVatTuBHYT}};{{yeuCauTraVatTu.KhoaHoanTraId}}\"\n                [autoHeight]=\"true\" [pageable]=\"false\">\n            </app-grid>\n            <app-grid *ngIf=\"!isCreate\" [gridColumns]=\"gridYeuCauChiTietColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataBenhNhan\" [urlGetTotalPage]=\"urlGetTotalPageBenhNhan\"\n                [groups]=\"groupBenhNhan\"\n                additionalSearchString=\"{{dataItem.YeuCauTraVatTuTuBenhNhanId}};{{dataItem.VatTuBenhVienId}};false;{{dataItem.KhoTraId}};{{dataItem.LaVatTuBHYT}};{{yeuCauTraVatTu.KhoaHoanTraId}}\"\n                [autoHeight]=\"true\" [pageable]=\"false\">\n            </app-grid>\n        </ng-template>\n    </div>\n\n    <ng-template #benhNhanGroupHeaderTemplate let-value=\"value\">\n        <div [innerHTML]=\"value\" style=\"font-weight: normal;\"></div>\n    </ng-template>\n\n    <ng-template #ngayDieuTriTemplate let-dataItem>\n        {{dataItem.NgayDieuTriDisplay}}\n    </ng-template>\n\n    <ng-template #ngayTraTemplate let-dataItem>\n        {{dataItem.NgayTraDisplay}}\n    </ng-template>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.html": 
        /*!******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.html ***!
          \******************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Hoàn trả',Path:''}\n                ,{Title:'Từ người bệnh',Path:''}\n                ,{Title:'Yêu cầu trả',Path:''}\n                ,{Title:'Chi tiết phiếu trả vật tư',Path:'/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham',queryParams: {holdQuery : true},Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết phiếu trả vật tư từ người bệnh nội trú</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-yeu-cau-tra-vat-tu-tu-benh-nhan-shared #temp *ngIf=\"trangThaiVo!=null\" [isCreate]=\"false\"\n                    (hideDuyetbtn)=\"anHienButtonDuyet($event)\" [validationErrors]=\"validationErrors\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-yeu-cau-tra-vat-tu-tu-benh-nhan-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay lại</button>\n                    <button type=\"button\" *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai== null\"\n                        (click)=\"luuPhieuLinhTraVatTu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
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
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts ***!
          \**********************************************************************************************/
        /*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator */
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
                function PhieuYeuCauMuaVatTu(DuTruMuaVatTuId, HostingName, Header, TrangThai) {
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.TrangThai = TrangThai;
                }
                return PhieuYeuCauMuaVatTu;
            }());
            var ThongTinVatTuChiTiet = /** @class */ (function () {
                function ThongTinVatTuChiTiet(STT, Id, NhomVatTuId, VatTuId, LaVatTuBHYT, Ma, DVT, QuyCach, NhaSX, NuocSX, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongTonDuTru, SoLuongTonKhoTong, SoLuongChuaNhapVeHDT, // Hợp đồng thầu
                ThongTinChiTietTonKhoTongs, ThongTinChiTietTonHDTs, LoaiVatTu, TenLoaiVatTu, Ten, SLTonDuTru, SLTonKhoTong, SLChuaNhapVeHDT, SoLuongDuTruTaiKhoaDuyet, SoLuongDuTruKhoaDuocDuyet, SoLuongDuTruGiamDocDuyet, KhoId, IsThemVatTu, GhiChu, YeuCauMuaVatTuChiTietValidators) {
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component.scss": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component.scss ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi9waGlldS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFx5ZXUtY2F1LXRyYS12YXQtdHUtdHUtYmVuaC1uaGFuXFxwaGlldS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1wb3B1cFxccGhpZXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4vcGhpZXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4tcG9wdXAvcGhpZXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi9waGlldS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1wb3B1cC9waGlldS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component.ts": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component.ts ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: PhieuTraVatTuTuBenhNhanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuTraVatTuTuBenhNhanPopupComponent", function () { return PhieuTraVatTuTuBenhNhanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var PhieuTraVatTuTuBenhNhanPopupComponent = /** @class */ (function () {
                function PhieuTraVatTuTuBenhNhanPopupComponent(dialog, sanitizer, dialogRef, data) {
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                PhieuTraVatTuTuBenhNhanPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                PhieuTraVatTuTuBenhNhanPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                PhieuTraVatTuTuBenhNhanPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        resolve(_this.data);
                    });
                };
                return PhieuTraVatTuTuBenhNhanPopupComponent;
            }());
            PhieuTraVatTuTuBenhNhanPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PhieuTraVatTuTuBenhNhanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-tra-vat-tu-tu-benh-nhan-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-tra-vat-tu-tu-benh-nhan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-tra-vat-tu-tu-benh-nhan-popup.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuTraVatTuTuBenhNhanPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.scss": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.scss ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi95ZXUtY2F1LXRyYS12YXQtdHUtdHUtYmVuaC1uaGFuLWNyZWF0ZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFx5ZXUtY2F1LXRyYS12YXQtdHUtdHUtYmVuaC1uaGFuXFx5ZXUtY2F1LXRyYS12YXQtdHUtdHUtYmVuaC1uaGFuLWNyZWF0ZVxceWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4veWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1jcmVhdGUveWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS95ZXUtY2F1LXRyYS12YXQtdHUtdHUtYmVuaC1uaGFuL3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4tY3JlYXRlL3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.ts": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.ts ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: YeuCauTraVatTuTuBenhNhanCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraVatTuTuBenhNhanCreateComponent", function () { return YeuCauTraVatTuTuBenhNhanCreateComponent; });
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
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_shared_yeu_cau_tra_vat_tu_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../yeu-cau-tra-vat-tu-tu-benh-nhan.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var YeuCauTraVatTuTuBenhNhanCreateComponent = /** @class */ (function () {
                function YeuCauTraVatTuTuBenhNhanCreateComponent(apiService, dialog, notificationService, authService, router, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.ref = ref;
                    this.location = location;
                    this.isCreate = false;
                    this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__["TrangThaiTaoPhieuLinh"]();
                }
                YeuCauTraVatTuTuBenhNhanCreateComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].TraVatTuTuBenhNhan;
                    this.yeuCauTraVatTu = new _yeu_cau_tra_vat_tu_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauTraVatTuTuBenhNhan"]();
                    this.trangThaiVo.TrangThai = null;
                };
                YeuCauTraVatTuTuBenhNhanCreateComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                YeuCauTraVatTuTuBenhNhanCreateComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                YeuCauTraVatTuTuBenhNhanCreateComponent.prototype.addingPage = function () {
                    this.popupAddingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                YeuCauTraVatTuTuBenhNhanCreateComponent.prototype.closePopupAddingData = function () {
                    if (this.popupAddingData != undefined && this.popupAddingData != null) {
                        this.popupAddingData.close();
                    }
                };
                YeuCauTraVatTuTuBenhNhanCreateComponent.prototype.guiPhieuTraVatTu = function () {
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn tạo phiếu trả vật tư này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.yeuCauTraVatTu = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Add)) {
                                self.addingPage();
                                self.apiService.post("YeuCauTraVatTuTuBenhNhan/GuiPhieuTraVatTu", self.yeuCauTraVatTu).subscribe(function (resultData) {
                                    self.closePopupAddingData();
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                    // self.loadingPage();
                                    // let objIn = {
                                    //   YeuCauTraVatTuTuBenhNhanId: resultData,
                                    //   HostingName: window.location.protocol + "//" + window.location.host,
                                    // };
                                    // self.apiService.post<any>("YeuCauTraVatTuTuBenhNhan/InPhieuYeuCauTraVatTuTuBenhNhan", objIn).subscribe(
                                    //   resData => {
                                    //     if (resData != undefined && resData != null) {
                                    //       self.closePopupLoadingData();
                                    //       self.dialog.open(PhieuTraVatTuTuBenhNhanPopupComponent, {
                                    //         disableClose: true,
                                    //         width: "1200px",
                                    //         data: resData,
                                    //       }).afterClosed().subscribe(() => {
                                    //         self.router.navigate(['/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu']);
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
                                    // )
                                    self.dialog.open(_duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_19__["InPhieuHoanTraCompoment"], {
                                        disableClose: true,
                                        width: "1200px",
                                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: resultData, LaDuocPham: false, LaTuTruc: false, DuocDuyet: false },
                                    }).afterClosed().subscribe(function (result) {
                                        self.router.navigate(['/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu']);
                                    });
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupAddingData();
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                YeuCauTraVatTuTuBenhNhanCreateComponent.prototype.cancel = function () {
                    this.location.back();
                };
                YeuCauTraVatTuTuBenhNhanCreateComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return YeuCauTraVatTuTuBenhNhanCreateComponent;
            }());
            YeuCauTraVatTuTuBenhNhanCreateComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_yeu_cau_tra_vat_tu_tu_benh_nhan_shared_yeu_cau_tra_vat_tu_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_16__["YeuCauTraVatTuTuBenhNhanSharedComponent"], { static: true })
            ], YeuCauTraVatTuTuBenhNhanCreateComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
            ], YeuCauTraVatTuTuBenhNhanCreateComponent.prototype, "keyEvent", null);
            YeuCauTraVatTuTuBenhNhanCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-yeu-cau-tra-vat-tu-tu-benh-nhan-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.scss")).default]
                })
            ], YeuCauTraVatTuTuBenhNhanCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.scss": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.scss ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4veWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1saXN0L3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.ts": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.ts ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: YeuCauTraVatTuTuBenhNhanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraVatTuTuBenhNhanListComponent", function () { return YeuCauTraVatTuTuBenhNhanListComponent; });
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
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../yeu-cau-tra-vat-tu-tu-benh-nhan.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan.model.ts");
            /* harmony import */ var _duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var YeuCauTraVatTuTuBenhNhanListComponent = /** @class */ (function () {
                function YeuCauTraVatTuTuBenhNhanListComponent(dialog, router, apiService, authService, notificationService, route, location) {
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.location = location;
                    this.baseRoute = "/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu";
                    this.urlGetData = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsync";
                    this.urlGetTotalPage = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsync";
                    this.urlGetDataVatTu = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncVatTuChild";
                    this.urlGetTotalPageVatTu = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsyncVatTuChild";
                    this.urlGetDataBenhNhan = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncBenhNhanChild";
                    this.urlGetTotalPageBenhNhan = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsyncBenhNhanChild";
                    this.popupLoadingData = null;
                    this.addtionStringDefault = null;
                    this.gridColumns = [];
                    this.gridVatTuColumns = [];
                    this.gridYeuCauChiTietColumns = [];
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
                    this.groups = [{ field: 'Nhom' }];
                    this.groupBenhNhan = [{ field: 'BenhNhan' }];
                    this.sort = [
                        {
                            field: "TinhTrang",
                            dir: "asc",
                        },
                    ];
                }
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachYeuCauDuTruMuaVatTu;
                    this.danhSachYeuCauTraVatTu = new _yeu_cau_tra_vat_tu_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_27__["YeuCauTraVatTuTuBenhNhanGrid"]();
                    this.backWithSearch();
                    this.gridColumns = [
                        { Field: "SoPhieu", Title: "Số Phiếu", Width: 100, Sortable: true, Template: this.soPhieuTemplate },
                        { Field: "TenKhoa", Title: "Khoa Hoàn Trả", Width: 150, Sortable: true },
                        { Field: "TenKho", Title: "Hoàn Trả Về Kho", Width: 170, Sortable: true },
                        { Field: "NhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
                        { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate },
                        { Field: "NhanVienDuyet", Title: "Người duyệt", Width: 150, Sortable: true },
                        { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
                        { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
                    ];
                    this.gridVatTuColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ten", Title: "Vật tư", Width: 120, Sortable: true },
                        { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
                        { Field: "TongSoLuongChiDinh", Title: "Tổng SL chỉ định", Width: 150, Sortable: false },
                        { Field: "TongSoLuongDaTra", Title: "Tổng SL đã trả", Width: 150, Sortable: false, },
                        { Field: "TongSoLuongTraLanNay", Title: "Tổng SL trả lần này", Width: 150, Sortable: false },
                    ];
                    this.gridYeuCauChiTietColumns = [
                        { Field: "NgayDieuTri", Title: "Ngày Điều Trị", Width: 120, Sortable: false, Template: this.ngayDieuTriTemplate },
                        { Field: "NgayTra", Title: "Ngày Trả", Width: 150, Sortable: false, Template: this.ngayTraTemplate },
                        { Field: "BenhNhan", Title: "", Width: 150, Sortable: false, Hidden: true, TemplateGroupHeader: this.benhNhanGroupHeaderTemplate },
                        { Field: "NhanVienYeuCau", Title: "Người trả", Width: 150, Sortable: false },
                        // { Field: "SoLuongChiDinh", Title: "SL chỉ định", Width: 150, Sortable: false },
                        //{ Field: "SoLuongDaTra", Title: "SL đã trả", Width: 150, Sortable: false, },
                        { Field: "SoLuongTraLanNay", Title: "SL trả lần này", Width: 150, Sortable: false },
                        { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: false, Template: this.donGiaTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: false, Template: this.thanhTienTemplate },
                    ];
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.backWithSearch = function () {
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachYeuCauTraVatTu");
                            if (additionalSearchString != null) {
                                this.danhSachYeuCauTraVatTu = JSON.parse(additionalSearchString);
                                if (this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay != null
                                    && this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay != 'null' && this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay != '') {
                                    this.danhSachYeuCauTraVatTu.RangeFromDate.startDate = new Date(this.danhSachYeuCauTraVatTu.RangeFromDate.startDate);
                                }
                                else {
                                    this.danhSachYeuCauTraVatTu.RangeFromDate.startDate = null;
                                }
                                if (this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay != null
                                    && this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay != 'null' && this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay != '') {
                                    this.danhSachYeuCauTraVatTu.RangeFromDate.endDate = new Date(this.danhSachYeuCauTraVatTu.RangeFromDate.endDate);
                                }
                                else {
                                    this.danhSachYeuCauTraVatTu.RangeFromDate.endDate = null;
                                }
                                this.addtionStringDefault = additionalSearchString;
                                this.gridChild.additionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    else {
                        this.addtionStringDefault = JSON.stringify(this.danhSachYeuCauTraVatTu);
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachYeuCauTraVatTu");
                    }
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiem();
                    }
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.clearSearch = function () {
                    this.danhSachYeuCauTraVatTu.SearchString = null;
                    this.gridChild.search();
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.gridChild.searchString = null;
                        self.timKiem();
                    }
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.taoPhieuMuaVatTu = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
                        this.router.navigate(["/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu/them"]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.timKiem = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.danhSachYeuCauTraVatTu.RangeFromDate != null && this.danhSachYeuCauTraVatTu.RangeFromDate.startDate != null) {
                        this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachYeuCauTraVatTu.RangeFromDate.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay = null;
                    }
                    if (this.danhSachYeuCauTraVatTu.RangeFromDate != null && this.danhSachYeuCauTraVatTu.RangeFromDate.endDate != null) {
                        this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachYeuCauTraVatTu.RangeFromDate.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.danhSachYeuCauTraVatTu);
                    this.gridChild._additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachYeuCauTraVatTu", queryString);
                    this.gridChild.search();
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.chinhSua = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.router.navigate(["/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu/chi-tiet/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.xoa = function (id) {
                    var _this = this;
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn xóa phiếu trả thuốc này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Delete)) {
                                _this.apiService.post("YeuCauTraVatTuTuBenhNhan/XoaPhieuTraVatTu?id=" + id).subscribe(function () {
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
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.trangThaiCheckBox = function (event, tinhTrang) {
                    if (tinhTrang == "choduyet") {
                        this.danhSachYeuCauTraVatTu.ChoDuyet = event;
                    }
                    if (tinhTrang == "daduyet") {
                        this.danhSachYeuCauTraVatTu.DaDuyet = event;
                    }
                    this.timKiem();
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.changeNgayBatDauRange = function () {
                    this.timKiem();
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.blur = function () {
                    this.timKiem();
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.xuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("YeuCauTraVatTuTuBenhNhan/ExportPhieuTraVatTuTuBenhNhanNoiTru", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "DSPhieuTraVatTuTuBenhNhanNoiTru" + dateTimeNow.getFullYear() + ".xlsx");
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
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                YeuCauTraVatTuTuBenhNhanListComponent.prototype.inPhieu = function (id) {
                    // var self = this;
                    // let objIn = {
                    //   YeuCauTraVatTuTuBenhNhanId: id,
                    //   HostingName: window.location.protocol + "//" + window.location.host,
                    // };
                    // self.loadingPage();
                    // self.apiService.post<any>("YeuCauTraVatTuTuBenhNhan/InPhieuYeuCauTraVatTuTuBenhNhan", objIn).subscribe(
                    //   resData => {
                    //     self.closePopupLoadingData();
                    //     if (resData != undefined && resData != null) {
                    //       self.dialog.open(PhieuTraVatTuTuBenhNhanPopupComponent, {
                    //         disableClose: true,
                    //         width: "1200px",
                    //         data: resData,
                    //       }).afterClosed().subscribe(() => {
                    //       });
                    //     }
                    //   }, (err: ApiError) => {
                    //     this.validationErrors = err.ValidationErrors;
                    //     if (err.Message != "Validation Failed") {
                    //       this.notificationService.showError(err.Message);
                    //     }
                    //     self.closePopupLoadingData();
                    //   }
                    // )
                    this.dialog.open(_duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_28__["InPhieuHoanTraCompoment"], {
                        disableClose: true,
                        width: "1200px",
                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: id, LaDuocPham: false, LaTuTruc: false, DuocDuyet: false },
                    }).afterClosed().subscribe(function (result) {
                    });
                };
                return YeuCauTraVatTuTuBenhNhanListComponent;
            }());
            YeuCauTraVatTuTuBenhNhanListComponent.ctorParameters = function () { return [
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
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "soPhieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayYeuCauTemplate", { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayDuyetTemplate", { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayDieuTriTemplate", { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "ngayDieuTriTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTraTemplate", { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "ngayTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhanGroupHeaderTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "benhNhanGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], YeuCauTraVatTuTuBenhNhanListComponent.prototype, "sort", void 0);
            YeuCauTraVatTuTuBenhNhanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-yeu-cau-tra-vat-tu-tu-benh-nhan-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.scss")).default]
                })
            ], YeuCauTraVatTuTuBenhNhanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-routing.module.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-routing.module.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: YeuCauTraVatTuTuBenhNhanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraVatTuTuBenhNhanRoutingModule", function () { return YeuCauTraVatTuTuBenhNhanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_create_yeu_cau_tra_vat_tu_tu_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_list_yeu_cau_tra_vat_tu_tu_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_update_yeu_cau_tra_vat_tu_tu_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.ts");
            var routes = [
                {
                    path: '',
                    component: _yeu_cau_tra_vat_tu_tu_benh_nhan_list_yeu_cau_tra_vat_tu_tu_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_7__["YeuCauTraVatTuTuBenhNhanListComponent"],
                    data: {
                        title: 'Phiếu Trả Vật Tư Từ Người Bệnh Nội Trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TraVatTuTuBenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _yeu_cau_tra_vat_tu_tu_benh_nhan_create_yeu_cau_tra_vat_tu_tu_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_6__["YeuCauTraVatTuTuBenhNhanCreateComponent"],
                    data: {
                        title: 'Tạo Phiếu Trả Vật Tư Từ Người Bệnh Nội Trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TraVatTuTuBenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _yeu_cau_tra_vat_tu_tu_benh_nhan_update_yeu_cau_tra_vat_tu_tu_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_8__["YeuCauTraVatTuTuBenhNhanUpdateComponent"],
                    data: {
                        title: 'Chi Tiết Phiếu Trả Vật Tư Từ Người Bệnh Nội Trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TraVatTuTuBenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
            ];
            var YeuCauTraVatTuTuBenhNhanRoutingModule = /** @class */ (function () {
                function YeuCauTraVatTuTuBenhNhanRoutingModule() {
                }
                return YeuCauTraVatTuTuBenhNhanRoutingModule;
            }());
            YeuCauTraVatTuTuBenhNhanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], YeuCauTraVatTuTuBenhNhanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.scss": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.scss ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4veWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1zaGFyZWQveWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.ts": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.ts ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: YeuCauTraVatTuTuBenhNhanSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraVatTuTuBenhNhanSharedComponent", function () { return YeuCauTraVatTuTuBenhNhanSharedComponent; });
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
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../yeu-cau-tra-vat-tu-tu-benh-nhan.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan.model.ts");
            var YeuCauTraVatTuTuBenhNhanSharedComponent = /** @class */ (function () {
                function YeuCauTraVatTuTuBenhNhanSharedComponent(apiService, notificationService, authService, ref, dialog, route) {
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.ref = ref;
                    this.dialog = dialog;
                    this.route = route;
                    this.urlGetDataVatTu = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncVatTuTheoKho";
                    this.urlGetTotalPageVatTu = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsyncVatTuTheoKho";
                    this.urlGetDataBenhNhan = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncBenhNhanTheoKhoChild";
                    this.urlGetTotalPageBenhNhan = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsyncBenhNhanTheoKhoChild";
                    this.gridVatTuColumns = [];
                    this.gridYeuCauChiTietColumns = [];
                    this.groups = [{ field: 'Nhom' }];
                    this.groupBenhNhan = [{ field: 'BenhNhan' }];
                    this.additionalSearchString = null;
                }
                YeuCauTraVatTuTuBenhNhanSharedComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].TraVatTuTuBenhNhan;
                    this.yeuCauTraVatTu = new _yeu_cau_tra_vat_tu_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_11__["YeuCauTraVatTuTuBenhNhan"]();
                    this.yeuCauTraVatTu.IsCreate = this.isCreate;
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                        //this.phieuLinhId = id;
                    }
                    this.gridVatTuColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ten", Title: "Vật tư", Width: 120, Sortable: true },
                        { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
                        { Field: "TongSoLuongChiDinh", Title: "Tổng SL chỉ định", Width: 150, Sortable: false },
                        { Field: "TongSoLuongDaTra", Title: "Tổng SL đã trả", Width: 150, Sortable: false, },
                        { Field: "TongSoLuongTraLanNay", Title: "Tổng SL trả lần này", Width: 150, Sortable: false },
                    ];
                    this.gridYeuCauChiTietColumns = [
                        { Field: "NgayDieuTri", Title: "Ngày Điều Trị", Width: 120, Sortable: false, Template: this.ngayDieuTriTemplate },
                        { Field: "NgayTra", Title: "Ngày Trả", Width: 150, Sortable: false, Template: this.ngayTraTemplate },
                        { Field: "BenhNhan", Title: "", Width: 150, Sortable: false, Hidden: true, TemplateGroupHeader: this.benhNhanGroupHeaderTemplate },
                        { Field: "NhanVienYeuCau", Title: "Người trả", Width: 150, Sortable: false },
                        //{ Field: "SoLuongDaTra", Title: "SL đã trả", Width: 150, Sortable: false, },
                        { Field: "SoLuongTraLanNay", Title: "SL trả lần này", Width: 150, Sortable: false },
                        { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: false, Template: this.donGiaTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: false, Template: this.thanhTienTemplate },
                    ];
                    // console.log("trangThai: ", this.trangThaiVo)
                    // console.log("isCreate: ", this.isCreate)
                    this.getThongTinKhoaHoanTra();
                };
                YeuCauTraVatTuTuBenhNhanSharedComponent.prototype.getThongTinKhoaHoanTra = function () {
                    var _this = this;
                    if (this.yeuCauTraVatTu.NgayYeuCau == null) {
                        this.yeuCauTraVatTu.NgayYeuCau = new Date();
                    }
                    if (this.yeuCauTraVatTu.NhanVienYeuCauId == null) {
                        this.apiService.get("YeuCauTraThuocTuBenhNhan/ThongTinKhoaHoanTra").subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.yeuCauTraVatTu.KhoaHoanTraId = resultData.KhoaHoanTraId;
                                _this.yeuCauTraVatTu.TenKhoaTra = resultData.TenKhoaTra;
                                _this.yeuCauTraVatTu.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                                _this.yeuCauTraVatTu.TenNhanVienYeuCau = resultData.TenNhanVienYeuCau;
                            }
                        });
                    }
                };
                YeuCauTraVatTuTuBenhNhanSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauTraVatTuTuBenhNhan/GetPhieuTraVatTu?id=" + id).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.yeuCauTraVatTu = resultData;
                                _this.gridChild._additionalSearchString = JSON.stringify(_this.yeuCauTraVatTu);
                                _this.gridChild.search();
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
                YeuCauTraVatTuTuBenhNhanSharedComponent.prototype.blur = function () {
                    this.timKiem();
                };
                YeuCauTraVatTuTuBenhNhanSharedComponent.prototype.changeNgayBatDauRange = function () {
                    this.timKiem();
                };
                YeuCauTraVatTuTuBenhNhanSharedComponent.prototype.khoTraChange = function (khoId) {
                    this.yeuCauTraVatTu.KhoTraId = khoId;
                    this.timKiem();
                };
                YeuCauTraVatTuTuBenhNhanSharedComponent.prototype.timKiem = function () {
                    if (this.yeuCauTraVatTu.RangeFromDate != null && this.yeuCauTraVatTu.RangeFromDate.startDate != null) {
                        this.yeuCauTraVatTu.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.yeuCauTraVatTu.RangeFromDate.startDate, "mm/dd/yyyy");
                        this.yeuCauTraVatTu.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.yeuCauTraVatTu.RangeFromDate.startDate, "dd/mm/yyyy");
                    }
                    else {
                        this.yeuCauTraVatTu.RangeFromDate.TuNgay = null;
                        this.yeuCauTraVatTu.TuNgay = null;
                    }
                    if (this.yeuCauTraVatTu.RangeFromDate != null && this.yeuCauTraVatTu.RangeFromDate.endDate != null) {
                        this.yeuCauTraVatTu.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.yeuCauTraVatTu.RangeFromDate.endDate, "mm/dd/yyyy");
                        this.yeuCauTraVatTu.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.yeuCauTraVatTu.RangeFromDate.endDate, "dd/mm/yyyy");
                    }
                    else {
                        this.yeuCauTraVatTu.RangeFromDate.DenNgay = null;
                        this.yeuCauTraVatTu.TuNgay = null;
                    }
                    var queryString = JSON.stringify(this.yeuCauTraVatTu);
                    this.gridChild._additionalSearchString = queryString;
                    this.gridChild.search();
                };
                YeuCauTraVatTuTuBenhNhanSharedComponent.prototype.onDataBoundGrid = function (event) {
                    var _this = this;
                    if (event != undefined && event != null) {
                        // console.log("data: ", event.Data)
                        this.yeuCauTraVatTu.YeuCauTraVatTuTuBenhNhanChiTiets = [];
                        event.Data.forEach(function (element) {
                            var yeuCauVatTuBenhVienIds = element.YeuCauVatTuBenhVienIds.trim().split(",");
                            yeuCauVatTuBenhVienIds.forEach(function (id) {
                                var yeuCauTraVatTuTuBenhNhanChiTiet = new _yeu_cau_tra_vat_tu_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_11__["YeuCauTraVatTuTuBenhNhanChiTiet"]();
                                yeuCauTraVatTuTuBenhNhanChiTiet.VatTuBenhVienId = element.VatTuBenhVienId;
                                yeuCauTraVatTuTuBenhNhanChiTiet.YeuCauVatTuBenhVienId = id;
                                _this.yeuCauTraVatTu.YeuCauTraVatTuTuBenhNhanChiTiets.push(yeuCauTraVatTuTuBenhNhanChiTiet);
                            });
                        });
                    }
                };
                YeuCauTraVatTuTuBenhNhanSharedComponent.prototype.getSharedData = function () {
                    return this.yeuCauTraVatTu;
                };
                return YeuCauTraVatTuTuBenhNhanSharedComponent;
            }());
            YeuCauTraVatTuTuBenhNhanSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChild', { static: true })
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhanGroupHeaderTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "benhNhanGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayDieuTriTemplate", { static: true })
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "ngayDieuTriTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTraTemplate", { static: true })
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "ngayTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "validationErrors", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], YeuCauTraVatTuTuBenhNhanSharedComponent.prototype, "trangThaiVo", void 0);
            YeuCauTraVatTuTuBenhNhanSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-yeu-cau-tra-vat-tu-tu-benh-nhan-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.scss")).default]
                })
            ], YeuCauTraVatTuTuBenhNhanSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.scss": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.scss ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi95ZXUtY2F1LXRyYS12YXQtdHUtdHUtYmVuaC1uaGFuLXVwZGF0ZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFx5ZXUtY2F1LXRyYS12YXQtdHUtdHUtYmVuaC1uaGFuXFx5ZXUtY2F1LXRyYS12YXQtdHUtdHUtYmVuaC1uaGFuLXVwZGF0ZVxceWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4veWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi11cGRhdGUveWV1LWNhdS10cmEtdmF0LXR1LXR1LWJlbmgtbmhhbi11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS95ZXUtY2F1LXRyYS12YXQtdHUtdHUtYmVuaC1uaGFuL3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4tdXBkYXRlL3lldS1jYXUtdHJhLXZhdC10dS10dS1iZW5oLW5oYW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.ts": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.ts ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: YeuCauTraVatTuTuBenhNhanUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraVatTuTuBenhNhanUpdateComponent", function () { return YeuCauTraVatTuTuBenhNhanUpdateComponent; });
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
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../yeu-cau-tra-vat-tu-tu-benh-nhan.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan.model.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_shared_yeu_cau_tra_vat_tu_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.ts");
            /* harmony import */ var _duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var YeuCauTraVatTuTuBenhNhanUpdateComponent = /** @class */ (function () {
                function YeuCauTraVatTuTuBenhNhanUpdateComponent(apiService, dialog, notificationService, authService, router, route, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.ref = ref;
                    this.location = location;
                    this.isHideDuyet = false;
                    this.popupSavingData = null;
                    this.isCreate = false;
                    this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__["TrangThaiTaoPhieuLinh"]();
                }
                YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].TraVatTuTuBenhNhan;
                    this.yeuCauTraVatTu = new _yeu_cau_tra_vat_tu_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauTraVatTuTuBenhNhan"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getTrangThaiPhieuTraVatTu(id);
                    }
                };
                YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype.getTrangThaiPhieuTraVatTu = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauTraVatTuTuBenhNhan/GetTrangThaiPhieuTraVatTu?phieuTraId=" + id).subscribe(function (result) {
                            _this.trangThaiVo = result;
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype.closepopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype.luuPhieuLinhTraVatTu = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.yeuCauTraVatTu = self.shared.getSharedData();
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn lưu phiếu trả vật tư này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                self.savingPage();
                                self.apiService.post("YeuCauTraVatTuTuBenhNhan/GuiLaiPhieuTraVatTu", self.yeuCauTraVatTu).subscribe(function (resultData) {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                    self.closepopupSavingData();
                                    // let objIn = {
                                    //   YeuCauTraVatTuTuBenhNhanId: resultData,
                                    //   HostingName: window.location.protocol + "//" + window.location.host,
                                    // };
                                    // self.apiService.post<any>("YeuCauTraVatTuTuBenhNhan/InPhieuYeuCauTraVatTuTuBenhNhan", objIn).subscribe(
                                    //   resData => {
                                    //     if (resData != undefined && resData != null) {
                                    //       self.dialog.open(PhieuTraVatTuTuBenhNhanPopupComponent, {
                                    //         disableClose: true,
                                    //         width: "1200px",
                                    //         data: resData,
                                    //       }).afterClosed().subscribe(() => {
                                    //         self.router.navigate(['/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu']);
                                    //       });
                                    //     }
                                    //   })
                                    self.dialog.open(_duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_19__["InPhieuHoanTraCompoment"], {
                                        disableClose: true,
                                        width: "1200px",
                                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: resultData, LaDuocPham: false, LaTuTruc: false, DuocDuyet: false },
                                    }).afterClosed().subscribe(function (result) {
                                        self.router.navigate(['/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu']);
                                    });
                                }, function (err) {
                                    self.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closepopupSavingData();
                                });
                            }
                            else {
                                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype.anHienButtonDuyet = function (event) {
                    if (event) {
                        this.isHideDuyet = true;
                    }
                    else {
                        this.isHideDuyet = false;
                    }
                };
                YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype.cancel = function () {
                    this.location.back();
                };
                YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return YeuCauTraVatTuTuBenhNhanUpdateComponent;
            }());
            YeuCauTraVatTuTuBenhNhanUpdateComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('temp', { read: _yeu_cau_tra_vat_tu_tu_benh_nhan_shared_yeu_cau_tra_vat_tu_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_18__["YeuCauTraVatTuTuBenhNhanSharedComponent"], static: false })
            ], YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
            ], YeuCauTraVatTuTuBenhNhanUpdateComponent.prototype, "keyEvent", null);
            YeuCauTraVatTuTuBenhNhanUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-yeu-cau-tra-vat-tu-tu-benh-nhan-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.scss")).default]
                })
            ], YeuCauTraVatTuTuBenhNhanUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan.model.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan.model.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: YeuCauTraVatTuTuBenhNhanGrid, YeuCauTraVatTuTuBenhNhan, YeuCauTraVatTuTuBenhNhanChiTiet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraVatTuTuBenhNhanGrid", function () { return YeuCauTraVatTuTuBenhNhanGrid; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraVatTuTuBenhNhan", function () { return YeuCauTraVatTuTuBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraVatTuTuBenhNhanChiTiet", function () { return YeuCauTraVatTuTuBenhNhanChiTiet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var YeuCauTraVatTuTuBenhNhanGrid = /** @class */ (function () {
                function YeuCauTraVatTuTuBenhNhanGrid(NgayYeuCauTuFormat, NgayYeuCauDenFormat, ChoDuyet, DaDuyet, TuNgay, DenNgay, SearchString, RangeFromDate) {
                    if (NgayYeuCauTuFormat === void 0) { NgayYeuCauTuFormat = null; }
                    if (NgayYeuCauDenFormat === void 0) { NgayYeuCauDenFormat = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
                    this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.SearchString = SearchString;
                    this.RangeFromDate = RangeFromDate;
                }
                return YeuCauTraVatTuTuBenhNhanGrid;
            }());
            var YeuCauTraVatTuTuBenhNhan = /** @class */ (function () {
                function YeuCauTraVatTuTuBenhNhan(SoPhieu, KhoaHoanTraId, TenKhoaTra, KhoTraId, TenKhoTra, NhanVienYeuCauId, TenNhanVienYeuCau, NgayYeuCau, YeuCauVatTuBenhVienId, VatTuBenhVienId, LaVatTuBHYT, GhiChu, LyDoKhongDuyet, IsCreate, RangeFromDate, TuNgay, DenNgay, YeuCauTraVatTuTuBenhNhanChiTiets) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KhoaHoanTraId === void 0) { KhoaHoanTraId = null; }
                    if (TenKhoaTra === void 0) { TenKhoaTra = null; }
                    if (KhoTraId === void 0) { KhoTraId = null; }
                    if (TenKhoTra === void 0) { TenKhoTra = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (YeuCauVatTuBenhVienId === void 0) { YeuCauVatTuBenhVienId = null; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (IsCreate === void 0) { IsCreate = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (YeuCauTraVatTuTuBenhNhanChiTiets === void 0) { YeuCauTraVatTuTuBenhNhanChiTiets = []; }
                    this.SoPhieu = SoPhieu;
                    this.KhoaHoanTraId = KhoaHoanTraId;
                    this.TenKhoaTra = TenKhoaTra;
                    this.KhoTraId = KhoTraId;
                    this.TenKhoTra = TenKhoTra;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.NgayYeuCau = NgayYeuCau;
                    this.YeuCauVatTuBenhVienId = YeuCauVatTuBenhVienId;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.GhiChu = GhiChu;
                    this.LyDoKhongDuyet = LyDoKhongDuyet;
                    this.IsCreate = IsCreate;
                    this.RangeFromDate = RangeFromDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.YeuCauTraVatTuTuBenhNhanChiTiets = YeuCauTraVatTuTuBenhNhanChiTiets;
                }
                return YeuCauTraVatTuTuBenhNhan;
            }());
            var YeuCauTraVatTuTuBenhNhanChiTiet = /** @class */ (function () {
                function YeuCauTraVatTuTuBenhNhanChiTiet(YeuCauVatTuBenhVienId, VatTuBenhVienId) {
                    if (YeuCauVatTuBenhVienId === void 0) { YeuCauVatTuBenhVienId = null; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = null; }
                    this.YeuCauVatTuBenhVienId = YeuCauVatTuBenhVienId;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                }
                return YeuCauTraVatTuTuBenhNhanChiTiet;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan.module.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan.module.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: YeuCauTraVatTuTuBenhNhanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraVatTuTuBenhNhanModule", function () { return YeuCauTraVatTuTuBenhNhanModule; });
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
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-routing.module */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-routing.module.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_list_yeu_cau_tra_vat_tu_tu_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_create_yeu_cau_tra_vat_tu_tu_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_update_yeu_cau_tra_vat_tu_tu_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component.ts");
            /* harmony import */ var _yeu_cau_tra_vat_tu_tu_benh_nhan_shared_yeu_cau_tra_vat_tu_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan-shared/yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.ts");
            /* harmony import */ var _phieu_tra_vat_tu_tu_benh_nhan_popup_phieu_tra_vat_tu_tu_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component.ts");
            /* harmony import */ var _duoc_pham_duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module.ts");
            var YeuCauTraVatTuTuBenhNhanModule = /** @class */ (function () {
                function YeuCauTraVatTuTuBenhNhanModule() {
                }
                return YeuCauTraVatTuTuBenhNhanModule;
            }());
            YeuCauTraVatTuTuBenhNhanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _yeu_cau_tra_vat_tu_tu_benh_nhan_list_yeu_cau_tra_vat_tu_tu_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_14__["YeuCauTraVatTuTuBenhNhanListComponent"],
                        _yeu_cau_tra_vat_tu_tu_benh_nhan_create_yeu_cau_tra_vat_tu_tu_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_15__["YeuCauTraVatTuTuBenhNhanCreateComponent"],
                        _yeu_cau_tra_vat_tu_tu_benh_nhan_update_yeu_cau_tra_vat_tu_tu_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_16__["YeuCauTraVatTuTuBenhNhanUpdateComponent"],
                        _yeu_cau_tra_vat_tu_tu_benh_nhan_shared_yeu_cau_tra_vat_tu_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_17__["YeuCauTraVatTuTuBenhNhanSharedComponent"],
                        _phieu_tra_vat_tu_tu_benh_nhan_popup_phieu_tra_vat_tu_tu_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuTraVatTuTuBenhNhanPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _yeu_cau_tra_vat_tu_tu_benh_nhan_routing_module__WEBPACK_IMPORTED_MODULE_13__["YeuCauTraVatTuTuBenhNhanRoutingModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_12__["DropDownButtonModule"],
                        _duoc_pham_duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_module__WEBPACK_IMPORTED_MODULE_19__["DuyetHoanTraDuocPhamModule"]
                    ],
                    entryComponents: [
                        _phieu_tra_vat_tu_tu_benh_nhan_popup_phieu_tra_vat_tu_tu_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuTraVatTuTuBenhNhanPopupComponent"]
                    ]
                })
            ], YeuCauTraVatTuTuBenhNhanModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=nhap-xuat-vat-tu-yeu-cau-tra-vat-tu-tu-benh-nhan-yeu-cau-tra-vat-tu-tu-benh-nhan-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-vat-tu-yeu-cau-tra-vat-tu-tu-benh-nhan-yeu-cau-tra-vat-tu-tu-benh-nhan-module-es5.js.map
//# sourceMappingURL=nhap-xuat-vat-tu-yeu-cau-tra-vat-tu-tu-benh-nhan-yeu-cau-tra-vat-tu-tu-benh-nhan-module-es5.js.map