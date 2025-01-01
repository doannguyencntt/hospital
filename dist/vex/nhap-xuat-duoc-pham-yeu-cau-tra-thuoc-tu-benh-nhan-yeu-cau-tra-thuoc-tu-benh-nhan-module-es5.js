(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-tu-benh-nhan-yeu-cau-tra-thuoc-tu-benh-nhan-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component.html": 
        /*!************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component.html ***!
          \************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU HOÀN TRẢ THUỐC, Y DỤNG CỤ</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.html": 
        /*!******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.html ***!
          \******************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Hoàn trả',Path:''}\n                ,{Title:'Từ người bệnh',Path:''}\n                ,{Title:'Yêu cầu trả',Path:''}\n                ,{Title:'Tạo phiếu trả thuốc',Path:'/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu trả thuốc từ người bệnh nội trú</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-yeu-cau-tra-thuoc-tu-benh-nhan-shared [validationErrors]=\"validationErrors\" [isCreate]=\"true\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-yeu-cau-tra-thuoc-tu-benh-nhan-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"guiPhieuTraDuocPham()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Gửi</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.html": 
        /*!**************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.html ***!
          \**************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Hoàn trả',Path:''}\n            ,{Title:'Từ người bệnh',Path:''}\n            ,{Title:'Yêu cầu trả',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                pageSize=\"50\" urlGetData=\"YeuCauTraThuocTuBenhNhan/GetDataForGridAsync\"\n                [additionalSearchString]=\"addtionStringDefault\" [showStt]=\"true\"\n                urlGetTotalPage=\"YeuCauTraThuocTuBenhNhan/GetTotalPageForGridAsync\" [sort]=\"sort\"\n                [headerTemplate]=\"headerTemplate\" [detailTemplate]=\"detailTemplate\">\n\n                <ng-template #ngayYeuCauTemplate let-dataItem>\n                    {{dataItem.NgayYeuCauDisplay}}\n                </ng-template>\n\n                <ng-template #ngayDuyetTemplate let-dataItem>\n                    {{dataItem.NgayDuyetDisplay}}\n                </ng-template>\n\n                <ng-template #tinhTrangTemplate let-dataItem>\n                    <label *ngIf=\"dataItem.TinhTrang == 0\" class=\"orange\">\n                        <span>Chờ duyệt</span>\n                    </label>\n                    <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                        <span>Đã duyệt</span>\n                    </label>\n                    <label *ngIf=\"dataItem.TinhTrang == 2\" class=\"red\">\n                        <span>Từ chối</span>\n                    </label>\n                </ng-template>\n                <ng-template #soPhieuTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"chinhSua(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                                {{dataItem.SoPhieu}}</p>\n                        </a>\n                    </div>\n                </ng-template>\n            </app-grid>\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid [gridColumns]=\"gridDuocPhamColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataDuocPham\" [groups]=\"groups\" [urlGetTotalPage]=\"urlGetTotalPageDuocPham\"\n                    [detailTemplate]=\"detailTemplateBenhNhan\" additionalSearchString=\"{{dataItem.Id}}\"\n                    [autoHeight]=\"true\" [pageable]=\"false\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #detailTemplateBenhNhan let-dataItem>\n                <app-grid [gridColumns]=\"gridYeuCauChiTietColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataBenhNhan\" [urlGetTotalPage]=\"urlGetTotalPageBenhNhan\"\n                    [groups]=\"groupBenhNhan\"\n                    additionalSearchString=\"{{dataItem.YeuCauTraDuocPhamTuBenhNhanId}};{{dataItem.DuocPhamBenhVienId}}\"\n                    [autoHeight]=\"true\" [pageable]=\"false\">\n                </app-grid>\n            </ng-template>\n            <ng-template #ngayDieuTriTemplate let-dataItem>\n                {{dataItem.NgayDieuTriDisplay}}\n            </ng-template>\n\n            <ng-template #ngayTraTemplate let-dataItem>\n                {{dataItem.NgayTraDisplay}}\n            </ng-template>\n\n            <ng-template #donGiaTemplate let-dataItem>\n                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n            <ng-template #thanhTienTemplate let-dataItem>\n                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                <strong>{{value}}</strong>\n            </ng-template>\n\n            <ng-template #benhNhanGroupHeaderTemplate let-value=\"value\">\n                <div [innerHTML]=\"value\" style=\"font-weight: normal;\"></div>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauTraThuoc.ChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauTraThuoc.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"danhSachYeuCauTraThuoc.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\"\n                        fxFlex.sm=\"auto\" [(model)]=\"danhSachYeuCauTraThuoc.RangeFromDate\"\n                        label=\"Yêu cầu từ ngày - đến ngày\" (keyup)=\"onKey($event)\"\n                        (modelChange)=\"changeNgayBatDauRange()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"xuatExcel()\"\n                        kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <button (click)=\"taoPhieuMuaThuoc()\" class=\"ml-4 right\" style=\"right: 20px;\" color=\"primary\"\n                        fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Tạo phiếu\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n\n                </div>\n            </ng-template>\n\n            <ng-template #actionTemplate let-dataItem>\n                <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"inPhieu(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In phiếu</span>\n                        </button>\n                        <button *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"chinhSua(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                            <span>Sửa</span>\n                        </button>\n                        <button *ngIf=\"dataItem.TinhTrang != 1\" (click)=\"xoa(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.html": 
        /*!******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.html ***!
          \******************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauTraThuoc.LyDoKhongDuyet}}</h4>\n    </div>\n\n    <app-textbox id=\"SoPhieu\" *ngIf=\"!isCreate\" fxFlex=\"15%\" maxlength=\"250\" label=\"Số phiếu\"\n        [(model)]=\"yeuCauTraThuoc.SoPhieu\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-combobox id=\"KhoaHoanTraId\" fxFlex=\"25%\" url=\"YeuCauTraThuocTuBenhNhan/GetKhoaPhong\"\n        [(model)]=\"yeuCauTraThuoc.KhoaHoanTraId\" [modelText]=\"yeuCauTraThuoc.TenKhoaTra\" label=\"Khoa hoàn trả\"\n        class=\"item-no-padding\" [disabled]=\"true\">\n    </app-combobox>\n\n    <app-combobox id=\"KhoTraId\" fxFlex=\"25%\" [required]=\"true\" [(model)]=\"yeuCauTraThuoc.KhoTraId\"\n        [disabled]=\"!isCreate\" [modelText]=\"yeuCauTraThuoc.TenKhoTra\" url=\"YeuCauTraThuocTuBenhNhan/GetKhoDuocPhamCap2\"\n        label=\"Hoàn trả về kho\" (modelChange)=\"khoTraChange($event)\" class=\"item-no-padding\"\n        [validationerror]=\"'KhoTraId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-textbox id=\"TenNhanVienYeuCau\" [fxFlex]=\"!isCreate ? '18%' : '25%'\" [required]=\"true\"\n        [fxFlex.sm]=\"!isCreate ? '18%' : '25%'\" [(model)]=\"yeuCauTraThuoc.TenNhanVienYeuCau\" maxlength=\"250\"\n        label=\"Người yêu cầu\" disabled={{true}}>\n    </app-textbox>\n\n    <app-datepicker id=\"NgayYeuCau\" [fxFlex]=\"!isCreate? '17%' : '25%'\" [fxFlex.sm]=\"!isCreate ? '17%' : '25%'\"\n        [(model)]=\"yeuCauTraThuoc.NgayYeuCau\" disabled={{true}} [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datepicker>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) \"\n        [(model)]=\"yeuCauTraThuoc.GhiChu\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin dược phẩm</h3>\n\n    <app-daterangepicker *ngIf=\"isCreate\" style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\"\n        fxFlex.sm=\"auto\" [(model)]=\"yeuCauTraThuoc.RangeFromDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n        (modelChange)=\"changeNgayBatDauRange()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n    </app-daterangepicker>\n\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\">\n        <app-grid #gridChild [gridColumns]=\"gridDuocPhamColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [urlGetData]=\"urlGetDataDuocPham\" [groups]=\"groups\" [urlGetTotalPage]=\"urlGetTotalPageDuocPham\"\n            (extOnDataBound)=\"onDataBoundGrid($event)\" [detailTemplate]=\"detailTemplate\" [autoHeight]=\"true\"\n            [pageable]=\"false\">\n        </app-grid>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid *ngIf=\"isCreate\" [gridColumns]=\"gridYeuCauChiTietColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataBenhNhan\" [urlGetTotalPage]=\"urlGetTotalPageBenhNhan\"\n                [groups]=\"groupBenhNhan\" [autoHeight]=\"true\" [pageable]=\"false\"\n                additionalSearchString=\"0;{{dataItem.DuocPhamBenhVienId}};true;{{dataItem.KhoTraId}};{{dataItem.LaDuocPhamBHYT}};{{yeuCauTraThuoc.KhoaHoanTraId}}\">\n            </app-grid>\n            <app-grid *ngIf=\"!isCreate\" [gridColumns]=\"gridYeuCauChiTietColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataBenhNhan\" [urlGetTotalPage]=\"urlGetTotalPageBenhNhan\"\n                [groups]=\"groupBenhNhan\" [autoHeight]=\"true\" [pageable]=\"false\"\n                additionalSearchString=\"{{dataItem.YeuCauTraDuocPhamTuBenhNhanId}};{{dataItem.DuocPhamBenhVienId}};false;{{dataItem.KhoTraId}};{{dataItem.LaDuocPhamBHYT}};{{yeuCauTraThuoc.KhoaHoanTraId}}\">\n            </app-grid>\n        </ng-template>\n    </div>\n\n    <ng-template #benhNhanGroupHeaderTemplate let-value=\"value\">\n        <div [innerHTML]=\"value\" style=\"font-weight: normal;\"></div>\n    </ng-template>\n\n    <ng-template #ngayDieuTriTemplate let-dataItem>\n        {{dataItem.NgayDieuTriDisplay}}\n    </ng-template>\n\n    <ng-template #ngayTraTemplate let-dataItem>\n        {{dataItem.NgayTraDisplay}}\n    </ng-template>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.html": 
        /*!******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.html ***!
          \******************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Hoàn trả',Path:''}\n                ,{Title:'Từ người bệnh',Path:''}\n                ,{Title:'Yêu cầu trả',Path:''}\n                ,{Title:'Chi tiết phiếu trả thuốc',Path:'/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham',queryParams: {holdQuery : true},Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết phiếu trả thuốc từ người bệnh nội trú</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-yeu-cau-tra-thuoc-tu-benh-nhan-shared #temp *ngIf=\"trangThaiVo!=null\" [isCreate]=\"false\"\n                    (hideDuyetbtn)=\"anHienButtonDuyet($event)\" [validationErrors]=\"validationErrors\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-yeu-cau-tra-thuoc-tu-benh-nhan-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay lại</button>\n                    <button type=\"button\" *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai== null\"\n                        (click)=\"luuPhieuLinhTraThuoc()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
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
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component.scss": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component.scss ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuL3BoaWV1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxceWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuXFxwaGlldS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuLXBvcHVwXFxwaGlldS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4vcGhpZXUtdHJhLXRodW9jLXR1LWJlbmgtbmhhbi1wb3B1cC9waGlldS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtdHJhLXRodW9jLXR1LWJlbmgtbmhhbi9waGlldS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuLXBvcHVwL3BoaWV1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component.ts": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component.ts ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: PhieuTraThuocTuBenhNhanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuTraThuocTuBenhNhanPopupComponent", function () { return PhieuTraThuocTuBenhNhanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var PhieuTraThuocTuBenhNhanPopupComponent = /** @class */ (function () {
                function PhieuTraThuocTuBenhNhanPopupComponent(dialog, sanitizer, dialogRef, data) {
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                PhieuTraThuocTuBenhNhanPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                PhieuTraThuocTuBenhNhanPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                // close() {
                //   this.dialog.closeAll();
                // }
                PhieuTraThuocTuBenhNhanPopupComponent.prototype.getSharedPrintForm = function () {
                    var dataReplaceemplateHeaderGayNghien = "";
                    var templateHeaderGayNghien = '<div style=\'width: 100%; height: 40px; background: #005dab;color:#fff;text-align: center;font-size: 23px\'> PHIẾU HOÀN TRẢ THUỐC</div>';
                    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.data, templateHeaderGayNghien, '');
                    return new Promise(function (resolve) {
                        resolve(dataReplaceemplateHeaderGayNghien);
                    });
                };
                PhieuTraThuocTuBenhNhanPopupComponent.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                return PhieuTraThuocTuBenhNhanPopupComponent;
            }());
            PhieuTraThuocTuBenhNhanPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PhieuTraThuocTuBenhNhanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-tra-thuoc-tu-benh-nhan-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-tra-thuoc-tu-benh-nhan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-tra-thuoc-tu-benh-nhan-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuTraThuocTuBenhNhanPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.scss": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.scss ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuL3lldS1jYXUtdHJhLXRodW9jLXR1LWJlbmgtbmhhbi1jcmVhdGUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxceWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuXFx5ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tY3JlYXRlXFx5ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4veWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuLWNyZWF0ZS95ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuL3lldS1jYXUtdHJhLXRodW9jLXR1LWJlbmgtbmhhbi1jcmVhdGUveWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59IiwiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.ts": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.ts ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: YeuCauTraThuocTuBenhNhanCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocTuBenhNhanCreateComponent", function () { return YeuCauTraThuocTuBenhNhanCreateComponent; });
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
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../yeu-cau-tra-thuoc-tu-benh-nhan.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan.model.ts");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_shared_yeu_cau_tra_thuoc_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var YeuCauTraThuocTuBenhNhanCreateComponent = /** @class */ (function () {
                function YeuCauTraThuocTuBenhNhanCreateComponent(apiService, dialog, notificationService, authService, router, ref, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.router = router;
                    this.ref = ref;
                    this.location = location;
                    this.isCreate = false;
                    this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_17__["TrangThaiTaoPhieuLinh"]();
                }
                YeuCauTraThuocTuBenhNhanCreateComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].TraThuocTuBenhNhan;
                    this.yeuCauTraThuoc = new _yeu_cau_tra_thuoc_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_14__["YeuCauTraThuocTuBenhNhan"]();
                    this.trangThaiVo.TrangThai = null;
                };
                YeuCauTraThuocTuBenhNhanCreateComponent.prototype.addingPage = function () {
                    this.popupAddingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                YeuCauTraThuocTuBenhNhanCreateComponent.prototype.closePopupAddingData = function () {
                    if (this.popupAddingData != undefined && this.popupAddingData != null) {
                        this.popupAddingData.close();
                    }
                };
                YeuCauTraThuocTuBenhNhanCreateComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                YeuCauTraThuocTuBenhNhanCreateComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                YeuCauTraThuocTuBenhNhanCreateComponent.prototype.guiPhieuTraDuocPham = function () {
                    var self = this;
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn gửi phê duyệt cho hoàn trả thuốc này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            self.yeuCauTraThuoc = self.shared.getSharedData();
                            self.validationErrors = [];
                            self.ref.detectChanges();
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Add)) {
                                self.addingPage();
                                self.apiService.post("YeuCauTraThuocTuBenhNhan/GuiPhieuTraDuocPham", self.yeuCauTraThuoc).subscribe(function (resultData) {
                                    self.closePopupAddingData();
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                    // self.loadingPage();
                                    // let objIn = {
                                    //   YeuCauTraDuocPhamTuBenhNhanId: resultData,
                                    //   HostingName: window.location.protocol + "//" + window.location.host,
                                    // };
                                    // self.apiService.post<any>("YeuCauTraThuocTuBenhNhan/InPhieuYeuCauTraThuocTuBenhNhan", objIn).subscribe(
                                    //   resData => {
                                    //     if (resData != undefined && resData != null) {
                                    //       self.closePopupLoadingData();
                                    //       self.dialog.open(PhieuTraThuocTuBenhNhanPopupComponent, {
                                    //         disableClose: true,
                                    //         width: "1200px",
                                    //         data: resData,
                                    //       }).afterClosed().subscribe(() => {
                                    //         self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
                                    //       });
                                    //     }
                                    //   },
                                    //   (err: ApiError) => {
                                    //     self.validationErrors = err.ValidationErrors;
                                    //     if (err.Message != "Validation Failed") {
                                    //       self.notificationService.showError(err.Message);
                                    //     }
                                    //     self.closePopupLoadingData();
                                    //   })
                                    self.dialog.open(_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_19__["InPhieuHoanTraCompoment"], {
                                        disableClose: true,
                                        width: "1200px",
                                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: resultData, LaDuocPham: true, LaTuTruc: false, DuocDuyet: false },
                                    }).afterClosed().subscribe(function (result) {
                                        self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
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
                YeuCauTraThuocTuBenhNhanCreateComponent.prototype.cancel = function () {
                    this.location.back();
                };
                YeuCauTraThuocTuBenhNhanCreateComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return YeuCauTraThuocTuBenhNhanCreateComponent;
            }());
            YeuCauTraThuocTuBenhNhanCreateComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_yeu_cau_tra_thuoc_tu_benh_nhan_shared_yeu_cau_tra_thuoc_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_15__["YeuCauTraThuocTuBenhNhanSharedComponent"], { static: true })
            ], YeuCauTraThuocTuBenhNhanCreateComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
            ], YeuCauTraThuocTuBenhNhanCreateComponent.prototype, "keyEvent", null);
            YeuCauTraThuocTuBenhNhanCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-yeu-cau-tra-thuoc-tu-benh-nhan-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yeu-cau-tra-thuoc-tu-benh-nhan-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-create.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.scss")).default]
                })
            ], YeuCauTraThuocTuBenhNhanCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.scss": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.scss ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtdHJhLXRodW9jLXR1LWJlbmgtbmhhbi95ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tbGlzdC95ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.ts": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.ts ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: YeuCauTraThuocTuBenhNhanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocTuBenhNhanListComponent", function () { return YeuCauTraThuocTuBenhNhanListComponent; });
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
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../yeu-cau-tra-thuoc-tu-benh-nhan.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan.model.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var YeuCauTraThuocTuBenhNhanListComponent = /** @class */ (function () {
                function YeuCauTraThuocTuBenhNhanListComponent(dialog, router, apiService, authService, notificationService, route, location) {
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.location = location;
                    this.baseRoute = "/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham";
                    this.urlGetData = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsync";
                    this.urlGetTotalPage = "YeuCauTraThuocTuBenhNhan/GetTotalPageForGridAsync";
                    this.urlGetDataDuocPham = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsyncDuocPhamChild";
                    this.urlGetTotalPageDuocPham = "YeuCauTraThuocTuBenhNhan/GetTotalPageForGridAsyncDuocPhamChild";
                    this.urlGetDataBenhNhan = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsyncBenhNhanChild";
                    this.urlGetTotalPageBenhNhan = "YeuCauTraThuocTuBenhNhan/GetTotalPageForGridAsyncBenhNhanChild";
                    this.addtionStringDefault = null;
                    this.gridColumns = [];
                    this.gridDuocPhamColumns = [];
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
                YeuCauTraThuocTuBenhNhanListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachYeuCauDuTruMuaDuocPham;
                    this.danhSachYeuCauTraThuoc = new _yeu_cau_tra_thuoc_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_27__["YeuCauTraThuocTuBenhNhanGrid"]();
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
                    this.gridDuocPhamColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ten", Title: "Dược phẩm", Width: 120, Sortable: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 150, Sortable: false },
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
                YeuCauTraThuocTuBenhNhanListComponent.prototype.backWithSearch = function () {
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachYeuCauTraThuoc");
                            if (additionalSearchString != null) {
                                this.danhSachYeuCauTraThuoc = JSON.parse(additionalSearchString);
                                if (this.danhSachYeuCauTraThuoc.RangeFromDate.TuNgay != null
                                    && this.danhSachYeuCauTraThuoc.RangeFromDate.TuNgay != 'null' && this.danhSachYeuCauTraThuoc.RangeFromDate.TuNgay != '') {
                                    this.danhSachYeuCauTraThuoc.RangeFromDate.startDate = new Date(this.danhSachYeuCauTraThuoc.RangeFromDate.startDate);
                                }
                                else {
                                    this.danhSachYeuCauTraThuoc.RangeFromDate.startDate = null;
                                }
                                if (this.danhSachYeuCauTraThuoc.RangeFromDate.DenNgay != null
                                    && this.danhSachYeuCauTraThuoc.RangeFromDate.DenNgay != 'null' && this.danhSachYeuCauTraThuoc.RangeFromDate.DenNgay != '') {
                                    this.danhSachYeuCauTraThuoc.RangeFromDate.endDate = new Date(this.danhSachYeuCauTraThuoc.RangeFromDate.endDate);
                                }
                                else {
                                    this.danhSachYeuCauTraThuoc.RangeFromDate.endDate = null;
                                }
                                this.addtionStringDefault = additionalSearchString;
                                this.gridChild.additionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    else {
                        this.addtionStringDefault = JSON.stringify(this.danhSachYeuCauTraThuoc);
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachYeuCauTraThuoc");
                    }
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiem();
                    }
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.clearSearch = function () {
                    this.danhSachYeuCauTraThuoc.SearchString = null;
                    this.gridChild.search();
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.gridChild.searchString = null;
                        self.timKiem();
                    }
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.taoPhieuMuaThuoc = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
                        this.router.navigate(["/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham/them"]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.timKiem = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.danhSachYeuCauTraThuoc.RangeFromDate != null && this.danhSachYeuCauTraThuoc.RangeFromDate.startDate != null) {
                        this.danhSachYeuCauTraThuoc.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachYeuCauTraThuoc.RangeFromDate.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachYeuCauTraThuoc.RangeFromDate.TuNgay = null;
                    }
                    if (this.danhSachYeuCauTraThuoc.RangeFromDate != null && this.danhSachYeuCauTraThuoc.RangeFromDate.endDate != null) {
                        this.danhSachYeuCauTraThuoc.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachYeuCauTraThuoc.RangeFromDate.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.danhSachYeuCauTraThuoc.RangeFromDate.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.danhSachYeuCauTraThuoc);
                    this.gridChild._additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachYeuCauTraThuoc", queryString);
                    this.gridChild.search();
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.chinhSua = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.router.navigate(["/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham/chi-tiet/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.xoa = function (id) {
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
                                _this.apiService.post("YeuCauTraThuocTuBenhNhan/XoaPhieuTraThuoc?id=" + id).subscribe(function () {
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
                YeuCauTraThuocTuBenhNhanListComponent.prototype.trangThaiCheckBox = function (event, tinhTrang) {
                    if (tinhTrang == "choduyet") {
                        this.danhSachYeuCauTraThuoc.ChoDuyet = event;
                    }
                    if (tinhTrang == "daduyet") {
                        this.danhSachYeuCauTraThuoc.DaDuyet = event;
                    }
                    this.timKiem();
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.changeNgayBatDauRange = function () {
                    this.timKiem();
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.blur = function () {
                    this.timKiem();
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.xuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("YeuCauTraThuocTuBenhNhan/ExportPhieuTraThuocTuBenhNhanNoiTru", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "DSPhieuTraThuocTuBenhNhanNoiTru" + dateTimeNow.getFullYear() + ".xlsx");
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
                YeuCauTraThuocTuBenhNhanListComponent.prototype.loadingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                YeuCauTraThuocTuBenhNhanListComponent.prototype.inPhieu = function (id) {
                    // var self = this;
                    // let objIn = {
                    //   YeuCauTraDuocPhamTuBenhNhanId: id,
                    //   HostingName: window.location.protocol + "//" + window.location.host,
                    // };
                    // self.loadingPage();
                    // self.apiService.post<any>("YeuCauTraThuocTuBenhNhan/InPhieuYeuCauTraThuocTuBenhNhan", objIn).subscribe(
                    //   resData => {
                    //     self.closePopupLoadingData();
                    //     if (resData != undefined && resData != null) {
                    //       self.dialog.open(PhieuTraThuocTuBenhNhanPopupComponent, {
                    //         disableClose: true,
                    //         width: "1200px",
                    //         data: resData,
                    //       }).afterClosed().subscribe(() => {
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
                    this.dialog.open(_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_28__["InPhieuHoanTraCompoment"], {
                        disableClose: true,
                        width: "1200px",
                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: id, LaDuocPham: true, LaTuTruc: false, DuocDuyet: false },
                    }).afterClosed().subscribe(function (result) {
                    });
                };
                return YeuCauTraThuocTuBenhNhanListComponent;
            }());
            YeuCauTraThuocTuBenhNhanListComponent.ctorParameters = function () { return [
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
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "soPhieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayYeuCauTemplate", { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayDuyetTemplate", { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayDieuTriTemplate", { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "ngayDieuTriTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTraTemplate", { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "ngayTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhanGroupHeaderTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "benhNhanGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], YeuCauTraThuocTuBenhNhanListComponent.prototype, "sort", void 0);
            YeuCauTraThuocTuBenhNhanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-yeu-cau-tra-thuoc-tu-benh-nhan-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yeu-cau-tra-thuoc-tu-benh-nhan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-list.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.scss")).default]
                })
            ], YeuCauTraThuocTuBenhNhanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-routing.module.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-routing.module.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: YeuCauTraThuocTuBenhNhanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocTuBenhNhanRoutingModule", function () { return YeuCauTraThuocTuBenhNhanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_create_yeu_cau_tra_thuoc_tu_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.ts");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_list_yeu_cau_tra_thuoc_tu_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.ts");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_update_yeu_cau_tra_thuoc_tu_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.ts");
            var routes = [
                {
                    path: '',
                    component: _yeu_cau_tra_thuoc_tu_benh_nhan_list_yeu_cau_tra_thuoc_tu_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_7__["YeuCauTraThuocTuBenhNhanListComponent"],
                    data: {
                        title: 'Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TraThuocTuBenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _yeu_cau_tra_thuoc_tu_benh_nhan_create_yeu_cau_tra_thuoc_tu_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_6__["YeuCauTraThuocTuBenhNhanCreateComponent"],
                    data: {
                        title: 'Tạo Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TraThuocTuBenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _yeu_cau_tra_thuoc_tu_benh_nhan_update_yeu_cau_tra_thuoc_tu_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_8__["YeuCauTraThuocTuBenhNhanUpdateComponent"],
                    data: {
                        title: 'Chi Tiết Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TraThuocTuBenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
            ];
            var YeuCauTraThuocTuBenhNhanRoutingModule = /** @class */ (function () {
                function YeuCauTraThuocTuBenhNhanRoutingModule() {
                }
                return YeuCauTraThuocTuBenhNhanRoutingModule;
            }());
            YeuCauTraThuocTuBenhNhanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], YeuCauTraThuocTuBenhNhanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.scss": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.scss ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtdHJhLXRodW9jLXR1LWJlbmgtbmhhbi95ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tc2hhcmVkL3lldS1jYXUtdHJhLXRodW9jLXR1LWJlbmgtbmhhbi1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.ts": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.ts ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: YeuCauTraThuocTuBenhNhanSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocTuBenhNhanSharedComponent", function () { return YeuCauTraThuocTuBenhNhanSharedComponent; });
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
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../yeu-cau-tra-thuoc-tu-benh-nhan.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            var YeuCauTraThuocTuBenhNhanSharedComponent = /** @class */ (function () {
                function YeuCauTraThuocTuBenhNhanSharedComponent(apiService, notificationService, authService, ref, dialog, route) {
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.ref = ref;
                    this.dialog = dialog;
                    this.route = route;
                    this.urlGetDataDuocPham = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsyncDuocPhamTheoKho";
                    this.urlGetTotalPageDuocPham = "YeuCauTraThuocTuBenhNhan/GetTotalPageForGridAsyncDuocPhamTheoKho";
                    this.urlGetDataBenhNhan = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsyncBenhNhanTheoKhoChild";
                    this.urlGetTotalPageBenhNhan = "YeuCauTraThuocTuBenhNhan/GetTotalPageForGridAsyncBenhNhanTheoKhoChild";
                    this.gridDuocPhamColumns = [];
                    this.gridYeuCauChiTietColumns = [];
                    this.groups = [{ field: 'Nhom' }];
                    this.groupBenhNhan = [{ field: 'BenhNhan' }];
                    this.additionalSearchString = null;
                }
                YeuCauTraThuocTuBenhNhanSharedComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].TraThuocTuBenhNhan;
                    this.yeuCauTraThuoc = new _yeu_cau_tra_thuoc_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_10__["YeuCauTraThuocTuBenhNhan"]();
                    this.yeuCauTraThuoc.IsCreate = this.isCreate;
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                        //this.phieuLinhId = id;
                    }
                    this.gridDuocPhamColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ten", Title: "Dược phẩm", Width: 120, Sortable: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 150, Sortable: false },
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
                    console.log("trangThai: ", this.trangThaiVo);
                    console.log("isCreate: ", this.isCreate);
                    this.getThongTinKhoaHoanTra();
                };
                YeuCauTraThuocTuBenhNhanSharedComponent.prototype.getThongTinKhoaHoanTra = function () {
                    var _this = this;
                    if (this.yeuCauTraThuoc.NgayYeuCau == null) {
                        this.yeuCauTraThuoc.NgayYeuCau = new Date();
                    }
                    if (this.yeuCauTraThuoc.NhanVienYeuCauId == null) {
                        this.apiService.get("YeuCauTraThuocTuBenhNhan/ThongTinKhoaHoanTra").subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.yeuCauTraThuoc.KhoaHoanTraId = resultData.KhoaHoanTraId;
                                _this.yeuCauTraThuoc.TenKhoaTra = resultData.TenKhoaTra;
                                _this.yeuCauTraThuoc.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                                _this.yeuCauTraThuoc.TenNhanVienYeuCau = resultData.TenNhanVienYeuCau;
                            }
                        });
                    }
                };
                YeuCauTraThuocTuBenhNhanSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauTraThuocTuBenhNhan/GetPhieuTraDuocPham?id=" + id).subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.yeuCauTraThuoc = resultData;
                                _this.gridChild._additionalSearchString = JSON.stringify(_this.yeuCauTraThuoc);
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
                YeuCauTraThuocTuBenhNhanSharedComponent.prototype.blur = function () {
                    this.timKiem();
                };
                YeuCauTraThuocTuBenhNhanSharedComponent.prototype.changeNgayBatDauRange = function () {
                    this.timKiem();
                };
                YeuCauTraThuocTuBenhNhanSharedComponent.prototype.khoTraChange = function (khoId) {
                    this.yeuCauTraThuoc.KhoTraId = khoId;
                    this.timKiem();
                };
                YeuCauTraThuocTuBenhNhanSharedComponent.prototype.timKiem = function () {
                    if (this.yeuCauTraThuoc.RangeFromDate != null && this.yeuCauTraThuoc.RangeFromDate.startDate != null) {
                        this.yeuCauTraThuoc.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.yeuCauTraThuoc.RangeFromDate.startDate, "mm/dd/yyyy");
                        this.yeuCauTraThuoc.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.yeuCauTraThuoc.RangeFromDate.startDate, "dd/mm/yyyy");
                    }
                    else {
                        this.yeuCauTraThuoc.RangeFromDate.TuNgay = null;
                        this.yeuCauTraThuoc.TuNgay = null;
                    }
                    if (this.yeuCauTraThuoc.RangeFromDate != null && this.yeuCauTraThuoc.RangeFromDate.endDate != null) {
                        this.yeuCauTraThuoc.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.yeuCauTraThuoc.RangeFromDate.endDate, "mm/dd/yyyy");
                        this.yeuCauTraThuoc.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.yeuCauTraThuoc.RangeFromDate.endDate, "dd/mm/yyyy");
                    }
                    else {
                        this.yeuCauTraThuoc.RangeFromDate.DenNgay = null;
                        this.yeuCauTraThuoc.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.yeuCauTraThuoc);
                    this.gridChild._additionalSearchString = queryString;
                    this.gridChild.search();
                };
                YeuCauTraThuocTuBenhNhanSharedComponent.prototype.onDataBoundGrid = function (event) {
                    var _this = this;
                    if (event != undefined && event != null) {
                        console.log("data: ", event.Data);
                        this.yeuCauTraThuoc.YeuCauTraThuocTuBenhNhanChiTiets = [];
                        event.Data.forEach(function (element) {
                            var yeuCauDuocPhamBenhVienIds = element.YeuCauDuocPhamBenhVienIds.trim().split(",");
                            yeuCauDuocPhamBenhVienIds.forEach(function (id) {
                                var yeuCauTraThuocTuBenhNhanChiTiet = new _yeu_cau_tra_thuoc_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_10__["YeuCauTraThuocTuBenhNhanChiTiet"]();
                                yeuCauTraThuocTuBenhNhanChiTiet.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
                                yeuCauTraThuocTuBenhNhanChiTiet.YeuCauDuocPhamBenhVienId = id;
                                _this.yeuCauTraThuoc.YeuCauTraThuocTuBenhNhanChiTiets.push(yeuCauTraThuocTuBenhNhanChiTiet);
                            });
                            console.log(_this.yeuCauTraThuoc.YeuCauTraThuocTuBenhNhanChiTiets);
                        });
                    }
                };
                YeuCauTraThuocTuBenhNhanSharedComponent.prototype.getSharedData = function () {
                    return this.yeuCauTraThuoc;
                };
                return YeuCauTraThuocTuBenhNhanSharedComponent;
            }());
            YeuCauTraThuocTuBenhNhanSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChild', { static: true })
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhanGroupHeaderTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "benhNhanGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayDieuTriTemplate", { static: true })
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "ngayDieuTriTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTraTemplate", { static: true })
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "ngayTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "isCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "validationErrors", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], YeuCauTraThuocTuBenhNhanSharedComponent.prototype, "trangThaiVo", void 0);
            YeuCauTraThuocTuBenhNhanSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-yeu-cau-tra-thuoc-tu-benh-nhan-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.scss")).default]
                })
            ], YeuCauTraThuocTuBenhNhanSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.scss": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.scss ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuL3lldS1jYXUtdHJhLXRodW9jLXR1LWJlbmgtbmhhbi11cGRhdGUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxceWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuXFx5ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tdXBkYXRlXFx5ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4veWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuLXVwZGF0ZS95ZXUtY2F1LXRyYS10aHVvYy10dS1iZW5oLW5oYW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuL3lldS1jYXUtdHJhLXRodW9jLXR1LWJlbmgtbmhhbi11cGRhdGUveWV1LWNhdS10cmEtdGh1b2MtdHUtYmVuaC1uaGFuLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59IiwiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.ts": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.ts ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: YeuCauTraThuocTuBenhNhanUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocTuBenhNhanUpdateComponent", function () { return YeuCauTraThuocTuBenhNhanUpdateComponent; });
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
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../yeu-cau-tra-thuoc-tu-benh-nhan.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan.model.ts");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_shared_yeu_cau_tra_thuoc_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var YeuCauTraThuocTuBenhNhanUpdateComponent = /** @class */ (function () {
                function YeuCauTraThuocTuBenhNhanUpdateComponent(apiService, dialog, notificationService, authService, router, route, ref, location) {
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
                    this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_17__["TrangThaiTaoPhieuLinh"]();
                }
                YeuCauTraThuocTuBenhNhanUpdateComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].TraThuocTuBenhNhan;
                    this.yeuCauTraThuoc = new _yeu_cau_tra_thuoc_tu_benh_nhan_model__WEBPACK_IMPORTED_MODULE_14__["YeuCauTraThuocTuBenhNhan"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getTrangThaiPhieuTraDuocPham(id);
                    }
                };
                YeuCauTraThuocTuBenhNhanUpdateComponent.prototype.getTrangThaiPhieuTraDuocPham = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].View)) {
                        self.apiService.get("YeuCauTraThuocTuBenhNhan/GetTrangThaiPhieuTraDuocPham?phieuTraId=" + id).subscribe(function (result) {
                            _this.trangThaiVo = result;
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                YeuCauTraThuocTuBenhNhanUpdateComponent.prototype.savingPage = function () {
                    this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang lưu dữ liệu..." },
                    });
                };
                YeuCauTraThuocTuBenhNhanUpdateComponent.prototype.closepopupSavingData = function () {
                    if (this.popupSavingData != undefined && this.popupSavingData != null) {
                        this.popupSavingData.close();
                    }
                };
                YeuCauTraThuocTuBenhNhanUpdateComponent.prototype.luuPhieuLinhTraThuoc = function () {
                    var self = this;
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.yeuCauTraThuoc = self.shared.getSharedData();
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn lưu phê duyệt cho hoàn trả thuốc này không ?",
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                                self.savingPage();
                                self.apiService.post("YeuCauTraThuocTuBenhNhan/GuiLaiPhieuTraDuocPham", self.yeuCauTraThuoc).subscribe(function (resultData) {
                                    self.closepopupSavingData();
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                    // let objIn = {
                                    //   YeuCauTraDuocPhamTuBenhNhanId: resultData,
                                    //   HostingName: window.location.protocol + "//" + window.location.host,
                                    // };
                                    // self.apiService.post<any>("YeuCauTraThuocTuBenhNhan/InPhieuYeuCauTraThuocTuBenhNhan", objIn).subscribe(
                                    //   resData => {
                                    //     if (resData != undefined && resData != null) {
                                    //       self.dialog.open(PhieuTraThuocTuBenhNhanPopupComponent, {
                                    //         disableClose: true,
                                    //         width: "1200px",
                                    //         data: resData,
                                    //       }).afterClosed().subscribe(() => {
                                    //         self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
                                    //       });
                                    //     }
                                    //   })
                                    self.dialog.open(_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_19__["InPhieuHoanTraCompoment"], {
                                        disableClose: true,
                                        width: "1200px",
                                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: resultData, LaDuocPham: true, LaTuTruc: false, DuocDuyet: false },
                                    }).afterClosed().subscribe(function (result) {
                                        self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
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
                YeuCauTraThuocTuBenhNhanUpdateComponent.prototype.anHienButtonDuyet = function (event) {
                    if (event) {
                        this.isHideDuyet = true;
                    }
                    else {
                        this.isHideDuyet = false;
                    }
                };
                YeuCauTraThuocTuBenhNhanUpdateComponent.prototype.cancel = function () {
                    this.location.back();
                };
                YeuCauTraThuocTuBenhNhanUpdateComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.cancel();
                        event.preventDefault();
                    }
                };
                return YeuCauTraThuocTuBenhNhanUpdateComponent;
            }());
            YeuCauTraThuocTuBenhNhanUpdateComponent.ctorParameters = function () { return [
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
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('temp', { read: _yeu_cau_tra_thuoc_tu_benh_nhan_shared_yeu_cau_tra_thuoc_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_15__["YeuCauTraThuocTuBenhNhanSharedComponent"], static: false })
            ], YeuCauTraThuocTuBenhNhanUpdateComponent.prototype, "shared", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
            ], YeuCauTraThuocTuBenhNhanUpdateComponent.prototype, "keyEvent", null);
            YeuCauTraThuocTuBenhNhanUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-yeu-cau-tra-thuoc-tu-benh-nhan-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yeu-cau-tra-thuoc-tu-benh-nhan-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-update.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.scss")).default]
                })
            ], YeuCauTraThuocTuBenhNhanUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan.model.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan.model.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: YeuCauTraThuocTuBenhNhanGrid, YeuCauTraThuocTuBenhNhan, YeuCauTraThuocTuBenhNhanChiTiet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocTuBenhNhanGrid", function () { return YeuCauTraThuocTuBenhNhanGrid; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocTuBenhNhan", function () { return YeuCauTraThuocTuBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocTuBenhNhanChiTiet", function () { return YeuCauTraThuocTuBenhNhanChiTiet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var YeuCauTraThuocTuBenhNhanGrid = /** @class */ (function () {
                function YeuCauTraThuocTuBenhNhanGrid(NgayYeuCauTuFormat, NgayYeuCauDenFormat, ChoDuyet, DaDuyet, TuNgay, DenNgay, SearchString, RangeFromDate) {
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
                return YeuCauTraThuocTuBenhNhanGrid;
            }());
            var YeuCauTraThuocTuBenhNhan = /** @class */ (function () {
                function YeuCauTraThuocTuBenhNhan(SoPhieu, KhoaHoanTraId, TenKhoaTra, KhoTraId, TenKhoTra, NhanVienYeuCauId, TenNhanVienYeuCau, NgayYeuCau, YeuCauDuocPhamBenhVienId, DuocPhamBenhVienId, LaDuocPhamBHYT, GhiChu, LyDoKhongDuyet, IsCreate, RangeFromDate, TuNgay, DenNgay, YeuCauTraThuocTuBenhNhanChiTiets) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KhoaHoanTraId === void 0) { KhoaHoanTraId = null; }
                    if (TenKhoaTra === void 0) { TenKhoaTra = null; }
                    if (KhoTraId === void 0) { KhoTraId = null; }
                    if (TenKhoTra === void 0) { TenKhoTra = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (YeuCauDuocPhamBenhVienId === void 0) { YeuCauDuocPhamBenhVienId = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (IsCreate === void 0) { IsCreate = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (YeuCauTraThuocTuBenhNhanChiTiets === void 0) { YeuCauTraThuocTuBenhNhanChiTiets = []; }
                    this.SoPhieu = SoPhieu;
                    this.KhoaHoanTraId = KhoaHoanTraId;
                    this.TenKhoaTra = TenKhoaTra;
                    this.KhoTraId = KhoTraId;
                    this.TenKhoTra = TenKhoTra;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.NgayYeuCau = NgayYeuCau;
                    this.YeuCauDuocPhamBenhVienId = YeuCauDuocPhamBenhVienId;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                    this.GhiChu = GhiChu;
                    this.LyDoKhongDuyet = LyDoKhongDuyet;
                    this.IsCreate = IsCreate;
                    this.RangeFromDate = RangeFromDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.YeuCauTraThuocTuBenhNhanChiTiets = YeuCauTraThuocTuBenhNhanChiTiets;
                }
                return YeuCauTraThuocTuBenhNhan;
            }());
            var YeuCauTraThuocTuBenhNhanChiTiet = /** @class */ (function () {
                function YeuCauTraThuocTuBenhNhanChiTiet(YeuCauDuocPhamBenhVienId, DuocPhamBenhVienId) {
                    if (YeuCauDuocPhamBenhVienId === void 0) { YeuCauDuocPhamBenhVienId = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    this.YeuCauDuocPhamBenhVienId = YeuCauDuocPhamBenhVienId;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                }
                return YeuCauTraThuocTuBenhNhanChiTiet;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan.module.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan.module.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: YeuCauTraThuocTuBenhNhanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocTuBenhNhanModule", function () { return YeuCauTraThuocTuBenhNhanModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-routing.module.ts");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_list_yeu_cau_tra_thuoc_tu_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component.ts");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_shared_yeu_cau_tra_thuoc_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-shared/yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.ts");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_create_yeu_cau_tra_thuoc_tu_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component.ts");
            /* harmony import */ var _yeu_cau_tra_thuoc_tu_benh_nhan_update_yeu_cau_tra_thuoc_tu_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
            /* harmony import */ var _phieu_tra_thuoc_tu_benh_nhan_popup_phieu_tra_thuoc_tu_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/phieu-tra-thuoc-tu-benh-nhan-popup/phieu-tra-thuoc-tu-benh-nhan-popup.component.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module.ts");
            var YeuCauTraThuocTuBenhNhanModule = /** @class */ (function () {
                function YeuCauTraThuocTuBenhNhanModule() {
                }
                return YeuCauTraThuocTuBenhNhanModule;
            }());
            YeuCauTraThuocTuBenhNhanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _yeu_cau_tra_thuoc_tu_benh_nhan_list_yeu_cau_tra_thuoc_tu_benh_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__["YeuCauTraThuocTuBenhNhanListComponent"],
                        _yeu_cau_tra_thuoc_tu_benh_nhan_shared_yeu_cau_tra_thuoc_tu_benh_nhan_shared_component__WEBPACK_IMPORTED_MODULE_5__["YeuCauTraThuocTuBenhNhanSharedComponent"],
                        _yeu_cau_tra_thuoc_tu_benh_nhan_create_yeu_cau_tra_thuoc_tu_benh_nhan_create_component__WEBPACK_IMPORTED_MODULE_6__["YeuCauTraThuocTuBenhNhanCreateComponent"],
                        _yeu_cau_tra_thuoc_tu_benh_nhan_update_yeu_cau_tra_thuoc_tu_benh_nhan_update_component__WEBPACK_IMPORTED_MODULE_7__["YeuCauTraThuocTuBenhNhanUpdateComponent"],
                        _phieu_tra_thuoc_tu_benh_nhan_popup_phieu_tra_thuoc_tu_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuTraThuocTuBenhNhanPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _yeu_cau_tra_thuoc_tu_benh_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__["YeuCauTraThuocTuBenhNhanRoutingModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_17__["DropDownButtonModule"],
                        _duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_module__WEBPACK_IMPORTED_MODULE_19__["DuyetHoanTraDuocPhamModule"]
                    ],
                    entryComponents: [
                        _phieu_tra_thuoc_tu_benh_nhan_popup_phieu_tra_thuoc_tu_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuTraThuocTuBenhNhanPopupComponent"]
                    ]
                })
            ], YeuCauTraThuocTuBenhNhanModule);
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
        })
    }]);
//# sourceMappingURL=nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-tu-benh-nhan-yeu-cau-tra-thuoc-tu-benh-nhan-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-tu-benh-nhan-yeu-cau-tra-thuoc-tu-benh-nhan-module-es5.js.map
//# sourceMappingURL=nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-tu-benh-nhan-yeu-cau-tra-thuoc-tu-benh-nhan-module-es5.js.map