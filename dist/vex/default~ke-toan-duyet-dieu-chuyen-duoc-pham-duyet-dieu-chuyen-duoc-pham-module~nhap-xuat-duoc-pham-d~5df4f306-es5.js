(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ke-toan-duyet-dieu-chuyen-duoc-pham-duyet-dieu-chuyen-duoc-pham-module~nhap-xuat-duoc-pham-d~5df4f306"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.html": 
        /*!******************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.html ***!
          \******************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <label *ngIf=\"yeuCauLinh.DuocDuyet == false\" fxFlex=\"100\" class=\"status-yeu-cau-linh ycl-tu-choi\">Lý do: {{yeuCauLinh.LyDoKhongDuyet}}</label>\n\n    <app-textbox id=\"loai\" fxFlex=\"10\" fxFlex.sm=\"10\"  [(model)]=\"yeuCauLinh.TenLoaiPhieuLinh\"\n        maxlength=\"250\" label=\"Loại\" disabled={{true}}\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-combobox id=\"linhTuKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\"\n        label=\"Lĩnh từ kho\" disabled={{true}}\n        [(model)]=\"yeuCauLinh.KhoXuatId\" [modelText]=\"yeuCauLinh.TenKhoXuat\"\n        [validationerror]=\"'LinhTuKho' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox id=\"linhVeKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\"\n        [(model)]=\"yeuCauLinh.KhoNhapId\" [modelText]=\"yeuCauLinh.TenKhoNhap\"\n        label=\"Lĩnh về kho\" disabled={{true}}\n        [validationerror]=\"'LinhVeKho' | validationerror:validationErrors\">\n    </app-combobox>\n    \n\n    <app-combobox id=\"nguoiYeuCau\" \n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [(model)]=\"yeuCauLinh.NhanVienYeuCauId\" [modelText]=\"yeuCauLinh.TenNhanVienYeuCau\"\n        url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người yêu cầu\" disabled={{true}}\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-datepicker id=\"ngayYeuCau\" \n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [(model)]=\"yeuCauLinh.NgayYeuCau\"\n        [required]=\"true\" label=\"Ngày yêu cầu\" disabled={{true}}\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <ng-container *ngIf=\"yeuCauLinh.DuocDuyet != null\">\n        <app-combobox id=\"nguoiPheDuyet\" fxFlex=\"15%\" fxFlex.sm=\"15%\" maxlength=\"250\" [label]=\"yeuCauLinh.DuocDuyet == true ? 'Người phê duyệt' : 'Người từ chối duyệt'\"\n            disabled={{true}} [(model)]=\"yeuCauLinh.NhanVienDuyetId\" [modelText]=\"yeuCauLinh.TenNhanVienDuyet\"\n            url=\"YeuCauLinhDuocPham/GetListNhanVien\" [required]=\"true\"\n            [validationerror]=\"'NguoiPheDuyet' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-datepicker id=\"ngayDuyet\" fxFlex=\"10\" fxFlex.sm=\"10\" [(model)]=\"yeuCauLinh.NgayDuyet\" [required]=\"true\"\n            [label]=\"yeuCauLinh.DuocDuyet == true ? 'Ngày duyệt' : 'Ngày từ chối duyệt'\" \n            disabled={{true}} [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\">\n        </app-datepicker>\n    </ng-container>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\"\n        disabled={{true}} [(model)]=\"yeuCauLinh.GhiChu\"\n        label=\"Ghi chú\" minHeight=\"20\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin dược phẩm</h3>\n    <app-grid *ngIf=\"yeuCauLinh.Id != null && yeuCauLinh.DuocDuyet != false\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n        [allowSortDefault]=\"true\" [documentType]=\"documentype\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n        [pageable]=\"false\" [detailTemplate]=\"detailTemplate\" [additionalSearchString]=\"yeuCauLinhId\"\n        [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\" >\n    </app-grid>\n    <ng-template #detailTemplate let-dataItem>\n        <app-grid style=\"width: 1px;\" [gridColumns]=\"gridChildColumns\" [allowSortDefault]=\"true\"\n            [documentType]=\"documentype\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n            [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"true\" [pageSize]=\"5\"\n            [additionalSearchString]=\"dataItem.YeuCauLinhDuocPhamId + ';' + dataItem.DuocPhamBenhVienId + ';' + dataItem.LaBHYT\"\n            [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [sort]=\"sortChild\">\n        </app-grid>\n    </ng-template>\n\n    <app-grid *ngIf=\"yeuCauLinh.Id != null && yeuCauLinh.DuocDuyet == false\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n        [allowSortDefault]=\"true\" [documentType]=\"documentype\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n        [pageable]=\"false\" [additionalSearchString]=\"yeuCauLinhId\"\n        [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\" >\n    </app-grid>\n\n    <ng-template #slXuatTemplate let-dataItem>\n        <app-textboxnumeric [decimals]=\"1\" class=\"no-label\" [max]=\"9999\">\n        </app-textboxnumeric>\n    </ng-template>\n\n    <ng-container *ngIf=\"yeuCauLinh.Id != null &&  yeuCauLinh.DuocDuyet != false\">\n        <app-combobox id=\"nguoiXuat\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiXuatKhoId\" [idWhere]=\"yeuCauLinh.NguoiXuatKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiXuatKho\" url=\"YeuCauLinhDuocPham/GetListNhanVien\"\n            label=\"Người xuất\" [validationerror]=\"'NguoiXuatKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-combobox id=\"nguoiNhan\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiNhapKhoId\" [idWhere]=\"yeuCauLinh.NguoiNhapKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiNhapKho\" url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người nhận\"\n            [validationerror]=\"'NguoiNhapKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n    </ng-container>\n\n    <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n        <strong>{{rowIndex + 1}}</strong>\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.html": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.html ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập Xuất',Path:''}\n                ,{Title:'Dược Phẩm',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Duyệt Yêu Cầu Lĩnh',Path:'/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Duyệt yêu cầu lĩnh bù</h2>\n                <b *ngIf=\"trangThai != undefined\" class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">{{trangThai.TenTrangThai}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-duyet-yeu-cau-linh-thuoc-bu-shared [documentype]=\"documentype\" \n                    (trangThaiYeuCau)=\"getTrangThaiYeuCau($event)\"\n                    [validationErrors]=\"validationErrors\">\n                </app-duyet-yeu-cau-linh-thuoc-bu-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                    <ng-container *ngIf=\"trangThai != undefined && trangThai.DuocDuyet == null\">\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"duyet()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i>Duyệt</button>\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"khongDuyet()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i>Không duyệt</button>\n                    </ng-container>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                            alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''}\n            ,{Title:'Dược Phẩm',Path:''}\n            ,{Title:'Dự Trù Lĩnh',Path:''}\n            ,{Title:'Duyệt Yêu Cầu Lĩnh',Path:'/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [checkboxAble]=\"false\" pageSize=\"50\"\n                urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageDSLinhDuocPhamForGridAsync\"\n                [detailTemplate]=\"detailTemplate\" [allowSortDefault]=\"true\">\n                <!-- [detailTemplate]=\"detailTemplate\"> -->\n            </app-grid>\n        </div>\n        <span fxFlex=\"20px\"></span>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <!-- <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,1)\" class=\"ml-2\"\n                    [(model)]=\"kiemTraDanhSachDaChoGoi\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                    value=\"dangthanhtoan\" label=\"Đang chờ gởi\">\n                </app-checkbox> -->\n                <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,2)\" class=\"ml-2\"\n                    [(model)]=\"kiemTraDanhSachDangChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                    value=\"dangthanhtoan\" label=\"Đang chờ duyệt\">\n                </app-checkbox>\n                <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,3)\" class=\"ml-2\"\n                    [(model)]=\"kiemTraDanhSachTuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                    value=\"dangthanhtoan\" label=\"Từ chối duyệt\">\n                </app-checkbox>\n                <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,4)\" class=\"ml-2\"\n                    [(model)]=\"kiemTraDanhSachDaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                    value=\"dangthanhtoan\" label=\"Đã duyệt\">\n                </app-checkbox>\n                <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                        (ngModelChange)=\"searchChanges()\"\n                        placeholder=\"Nhập từ khóa(Người yêu cầu,Lĩnh từ kho,Lĩnh về kho,Người duyệt)\" />\n                </div>\n                <span fxFlex=\"5px\"></span>\n                <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" class=\"mt-1 on-header\" (blur)=\"blur($event)\"\n                    [(model)]=\"timKiemTuNgay.NgayYeuCauRangDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n                    (keyup)=\"onKeyDateRange($event)\" (modelChange)=\"changRange($event)\">\n                </app-daterangepicker>\n                <span fxFlex=\"5px\"></span>\n                <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" label=\"Duyệt từ ngày - đến ngày\"\n                    class=\"mt-1 on-header\" (blur)=\"blur($event)\" (keyup)=\"onKeyDateRange($event)\"\n                    [(model)]=\"timKiemTuNgay.NgayDuyetRangDate\" (modelChange)=\"changRange($event)\">\n                </app-daterangepicker>\n                <!-- <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button> -->\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" style=\"margin-left: auto;\" fxFlex=\"none\" class=\"mr-2\"\n                    mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n                <button (click)=\"exportExcel()\" fxFlex=\"2%\" fxFlex.sm=\"2%\" mat-icon-button kendoTooltip\n                    title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n            </div>\n        </ng-template>\n        <ng-template #TinhTrangTemplate let-dataItem>\n            <span *ngIf=\"dataItem.DuocDuyet == null\" style=\"color: orange;\">{{dataItem.TinhTrang}}</span>\n            <span *ngIf=\"dataItem.DuocDuyet == false\" style=\"color: red;\">{{dataItem.TinhTrang}}</span>\n            <span *ngIf=\"dataItem.DuocDuyet == true\" style=\"color: green;\">{{dataItem.TinhTrang}}</span>\n        </ng-template>\n\n        <ng-template #ngayYeuCauTemplate let-dataItem>\n            {{dataItem.NgayYeuCauHienThi}}\n        </ng-template>\n        <ng-template #ngayDuyetTemplate let-dataItem>\n            {{dataItem.NgayDuyetHienThi}}\n        </ng-template>\n        <ng-template #maTNTemplate let-dataItem>\n            <a (click)=\"xemChiTietYeuCauLinh(dataItem.Id, dataItem.LoaiPhieuLinh)\">{{dataItem.MaPL}}</a>\n        </ng-template>\n        <ng-template #groupTemplate let-dataItem>\n            <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n                *ngIf=\"dataItem.DuocDuyet == true\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button (click)=\"InDuocPham(dataItem.Id,dataItem.LoaiPhieuLinh)\" mat-menu-item\n                        *ngIf=\"dataItem.DuocDuyet == true\">\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n        <ng-template #detailTemplate let-dataItem>\n            <!-- 1 linh du tru null , (true , false) -> # null-->\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruChuaDuyetColumns\" *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet == null\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.DuocDuyet}}\"\n                [autoHeight]=\"true\" [groups]=\"groups\">\n            </app-grid>\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruDaDuyetColumns\" *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet != null\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.DuocDuyet}}\"\n                [autoHeight]=\"true\" [groups]=\"groups\">\n            </app-grid>\n            <!-- 2 linh bu -->\n            <!-- null, true, false -->\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuChuaDuyetColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == null\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\" [autoHeight]=\"true\"\n                [detailTemplate]=\"detailTemplateDuocPhamLinhBu\">\n            </app-grid>\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuDaDuyetColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == true\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\"  [detailTemplate]=\"detailTemplateDuocPhamLinhBu\">\n            </app-grid>\n            <!-- 2 linh bu -->\n            <!-- Từ chối duyệt -->\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuDaDuyetColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet ==false\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\" >\n            </app-grid>\n            <!-- 3 linh người bệnh -->\n            <app-grid #gridA baseRoute=\"\" [gridColumns]=\"gridChildLinhBenhNhanColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 3 && dataItem.DuocDuyet != false\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildForGridAsync\" \n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.DuocDuyet}}-{{dataItem.DaGui}}\"\n                [autoHeight]=\"true\" [detailTemplate]=\"detailTemplateDuocPhamLinhBenhNhan\">\n            </app-grid>\n\n            <app-grid #gridB baseRoute=\"\" [gridColumns]=\"gridChildChildLinhBenhNhanTuChoiColumns\"\n                *ngIf=\"dataItem.LoaiPhieuLinh == 3 && dataItem.DuocDuyet == false\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.DuocDuyet}}\"\n                [autoHeight]=\"true\" >\n            </app-grid>\n        </ng-template>\n        <!-- child linh người bệnh -->\n        <ng-template #detailTemplateDuocPhamLinhBenhNhan let-dataItem>\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChildChildLinhBenhNhanColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildChildForGridAsync\" \n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}-{{dataItem.YeuCauTiepNhanId}}-{{dataItem.DuocDuyet}}-{{dataItem.KhoLinhId}}\"\n                [autoHeight]=\"true\">\n            </app-grid>\n        </ng-template>\n        <!-- child linh bu -->\n        <ng-template #detailTemplateDuocPhamLinhBu let-dataItem>\n            <app-grid baseRoute=\"\"   [gridColumns]=\"gridChildChildLinhBuDaDuyetColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\">\n            </app-grid>\n            <!-- <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == true\" [gridColumns]=\"gridChildChildLinhBuDaDuyetColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhDuocPham/GetDataDSDuyetLinhDuocPhamChildChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSLinhDuocPhamChildChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}\"\n                [autoHeight]=\"true\">\n            </app-grid> -->\n        </ng-template>\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n        <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.html": 
        /*!**************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.html ***!
          \**************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <label *ngIf=\"yeuCauLinh.DuocDuyet == false\" fxFlex=\"100\" class=\"status-yeu-cau-linh ycl-tu-choi\">Lý do: {{yeuCauLinh.LyDoKhongDuyet}}</label>\n\n    <app-textbox id=\"loai\" fxFlex=\"10\" fxFlex.sm=\"10\"\n        maxlength=\"250\" label=\"Loại\" disabled={{true}} [(model)]=\"yeuCauLinh.TenLoaiPhieuLinh\"\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-combobox id=\"linhTuKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\"\n        [(model)]=\"yeuCauLinh.KhoXuatId\" [modelText]=\"yeuCauLinh.TenKhoXuat\"\n        url=\"DonViTinh/GetDanhSachDonViTinh\" disabled={{true}}\n        label=\"Lĩnh từ kho\"\n        [validationerror]=\"'LinhTuKho' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox id=\"linhVeKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\"\n        [(model)]=\"yeuCauLinh.KhoNhapId\" [modelText]=\"yeuCauLinh.TenKhoNhap\"\n        url=\"DonViTinh/GetDanhSachDonViTinh\" disabled={{true}}\n        label=\"Lĩnh về kho\"\n        [validationerror]=\"'LinhVeKho' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox id=\"nguoiYeuCau\"\n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [(model)]=\"yeuCauLinh.NhanVienYeuCauId\" [modelText]=\"yeuCauLinh.TenNhanVienYeuCau\"\n        url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người yêu cầu\" disabled={{true}}\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-datepicker id=\"ngayYeuCau\"  disabled={{true}}\n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [(model)]=\"yeuCauLinh.NgayYeuCau\"\n        [required]=\"true\" label=\"Ngày yêu cầu\"\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <ng-container *ngIf=\"yeuCauLinh.DuocDuyet != null\">\n        <app-combobox id=\"nguoiPheDuyet\" fxFlex=\"15%\" fxFlex.sm=\"15%\" maxlength=\"250\" [label]=\"yeuCauLinh.DuocDuyet == true ? 'Người phê duyệt' : 'Người từ chối duyệt'\"\n            disabled={{true}} [(model)]=\"yeuCauLinh.NhanVienDuyetId\" [modelText]=\"yeuCauLinh.TenNhanVienDuyet\"\n            url=\"YeuCauLinhDuocPham/GetListNhanVien\" [required]=\"true\"\n            [validationerror]=\"'NguoiPheDuyet' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-datepicker id=\"ngayDuyet\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [required]=\"true\" [label]=\"yeuCauLinh.DuocDuyet == true ? 'Ngày duyệt' : 'Ngày từ chối duyệt'\" disabled={{true}}\n            [(model)]=\"yeuCauLinh.NgayDuyet\" [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\">\n        </app-datepicker>\n    </ng-container>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\"\n        [(model)]=\"yeuCauLinh.GhiChu\" disabled={{true}}\n        label=\"Ghi chú\" minHeight=\"20\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n        <!-- [disabled]=\"yeuCauLinh.DuocDuyet != null\" -->\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Danh sách dược phẩm</h3>\n\n    <app-grid *ngIf=\"yeuCauLinh.Id != null\" #gridDuocPham fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n        [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n        [pageable]=\"false\" [groups]=\"groups\">\n    </app-grid>\n\n    <ng-template #actionTemplate let-dataItem>\n        <div class=\"text-center\" kendoTooltip>\n            <button color=\"primary\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\" mat-icon-button kendoTooltip title=\"Sửa\" type=\"button\">\n                <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n            </button>\n            <button color=\"primary\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\">\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n    <ng-template #slXuatTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric *ngIf=\"!dataItem.isTuChoi\" class=\"no-label\" [min]=\"0\" [max]=\"dataItem.SoLuong\" [disabled]=\"yeuCauLinh.DuocDuyet != null\"\n            class=\"no-label\" label=\" \" [(model)]=\"dataItem.SoLuongCoTheXuat\" required=\"true\" label=\" \"\n            (modelChange)=\"changeSoLuongCoTheXuat($event, dataItem)\"\n            [validationerror]=\"'DuyetYeuCauLinhDuocPhamChiTiets['+rowIndex+'].SoLuongCoTheXuat' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <ng-container *ngIf=\"dataItem.isTuChoi\">{{dataItem.SoLuongCoTheXuat}}</ng-container>\n    </ng-template>\n\n    <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n        <strong>{{rowIndex + 1}}</strong>\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n    <ng-container *ngIf=\"yeuCauLinh.DuocDuyet != false\">\n        <app-combobox id=\"nguoiXuat\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiXuatKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiXuatKho\" url=\"YeuCauLinhDuocPham/GetListNhanVien\" [idWhere]=\"yeuCauLinh.NguoiXuatKhoId\"\n            label=\"Người xuất\" [validationerror]=\"'NguoiXuatKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-combobox id=\"nguoiNhan\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiNhapKhoId\" [idWhere]=\"yeuCauLinh.NguoiNhapKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiNhapKho\" url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người nhận\"\n            [validationerror]=\"'NguoiNhapKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n    </ng-container>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.html": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.html ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập Xuất',Path:''}\n                ,{Title:'Dược Phẩm',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Duyệt Yêu Cầu Lĩnh',Path:'/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Duyệt yêu cầu lĩnh thường</h2>\n                <b *ngIf=\"trangThai != undefined\" class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">{{trangThai.TenTrangThai}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-duyet-yeu-cau-linh-thuoc-thuong-shared [documentype]=\"documentype\" \n                    (trangThaiYeuCau)=\"getTrangThaiYeuCau($event)\" (hideDuyetbtn)=\"anHienButtonDuyet($event)\"\n                    [validationErrors]=\"validationErrors\">\n                </app-duyet-yeu-cau-linh-thuoc-thuong-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                    <ng-container *ngIf=\"trangThai != undefined && trangThai.DuocDuyet == null\">\n                        <button type=\"button\" *ngIf=\"!loading\" [disabled]=\"isHideDuyet\" (click)=\"duyet()\" color=\"primary\"\n                            mat-raised-button><i class=\"ft-save\"></i>Duyệt</button>\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"khongDuyet()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i>Không duyệt</button>\n                    </ng-container>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.html": 
        /*!********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.html ***!
          \********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <label *ngIf=\"yeuCauLinh.DuocDuyet == false\" fxFlex=\"100\" class=\"status-yeu-cau-linh ycl-tu-choi\">Lý do: {{yeuCauLinh.LyDoKhongDuyet}}</label>\n\n    <app-textbox id=\"loai\" fxFlex=\"10\" fxFlex.sm=\"10\" \n        maxlength=\"250\" label=\"Loại\" disabled={{true}} [(model)]=\"yeuCauLinh.TenLoaiPhieuLinh\"\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-combobox id=\"linhTuKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\" disabled={{true}}\n        [(model)]=\"yeuCauLinh.KhoXuatId\" [modelText]=\"yeuCauLinh.TenKhoXuat\"\n        url=\"DonViTinh/GetDanhSachDonViTinh\" label=\"Lĩnh từ kho\"\n        [validationerror]=\"'LinhTuKho' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox id=\"linhVeKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\"\n        [(model)]=\"yeuCauLinh.KhoNhapId\" [modelText]=\"yeuCauLinh.TenKhoNhap\"\n        label=\"Lĩnh về khoa\" disabled={{true}}\n        [validationerror]=\"'LinhVeKho' | validationerror:validationErrors\">\n    </app-combobox>\n    \n\n    <app-combobox id=\"nguoiYeuCau\"\n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [(model)]=\"yeuCauLinh.NhanVienYeuCauId\" [modelText]=\"yeuCauLinh.TenNhanVienYeuCau\"\n        url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người yêu cầu\" disabled={{true}}\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-datepicker id=\"ngayYeuCau\"\n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [(model)]=\"yeuCauLinh.NgayYeuCau\"\n        [required]=\"true\" label=\"Ngày yêu cầu\" disabled={{true}}\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <ng-container *ngIf=\"yeuCauLinh.DuocDuyet != null\">\n        <app-combobox id=\"nguoiPheDuyet\" fxFlex=\"15%\" fxFlex.sm=\"15%\" maxlength=\"250\" [label]=\"yeuCauLinh.DuocDuyet == true ? 'Người phê duyệt' : 'Người từ chối duyệt'\"\n            disabled={{true}} [(model)]=\"yeuCauLinh.NhanVienDuyetId\" [modelText]=\"yeuCauLinh.TenNhanVienDuyet\"\n            url=\"YeuCauLinhDuocPham/GetListNhanVien\" [required]=\"true\"\n            [validationerror]=\"'NguoiPheDuyet' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-datepicker id=\"ngayDuyet\" fxFlex=\"10\" fxFlex.sm=\"10\" [(model)]=\"yeuCauLinh.NgayDuyet\" [required]=\"true\"\n            [label]=\"yeuCauLinh.DuocDuyet == true ? 'Ngày duyệt' : 'Ngày từ chối duyệt'\"  \n            disabled={{true}} [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\">\n        </app-datepicker>\n    </ng-container>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\"\n        disabled={{true}} [(model)]=\"yeuCauLinh.GhiChu\"\n        label=\"Ghi chú\" minHeight=\"20\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin dược phẩm</h3>\n    <app-grid *ngIf=\"yeuCauLinh.Id != null && yeuCauLinh.DuocDuyet != false\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridChildColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentype\"\n        [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"true\" [pageSize]=\"5\" [additionalSearchString]=\"yeuCauLinhId\"\n        [urlGetData]=\"urlGetDataGridBenhNhan\" [urlGetTotalPage]=\"urlGetTotalPageGridBenhNhan\" [sort]=\"sortChild\"\n        [detailTemplate]=\"detailTemplate\" >\n    </app-grid>\n    \n    <ng-template #detailTemplate let-dataItem>\n        <app-grid style=\"width: 1px;\" [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\"\n            [documentType]=\"documentype\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n            [additionalSearchString]=\"yeuCauLinhId + '|' + dataItem.YeuCauTiepNhanId\" [urlGetData]=\"urlGetDataGrid\"\n            [urlGetTotalPage]=\"urlGetTotalPageGrid\" >\n        </app-grid>\n    </ng-template>\n\n    <app-grid *ngIf=\"yeuCauLinh.Id != null && yeuCauLinh.DuocDuyet == false\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n        style=\"width: 1px;\" [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentype\"\n        [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\" [additionalSearchString]=\"yeuCauLinhId + ';FALSE'\"\n        [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\"\n        >\n    </app-grid>\n\n    <ng-container *ngIf=\"yeuCauLinh.DuocDuyet != false\">\n        <app-combobox id=\"nguoiXuat\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiXuatKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiXuatKho\" url=\"YeuCauLinhDuocPham/GetListNhanVien\" [idWhere]=\"yeuCauLinh.NguoiXuatKhoId\"\n            label=\"Người xuất\" [validationerror]=\"'NguoiXuatKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-combobox id=\"nguoiNhan\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiNhapKhoId\" [idWhere]=\"yeuCauLinh.NguoiNhapKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiNhapKho\" url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người nhận\"\n            [validationerror]=\"'NguoiNhapKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n    </ng-container>\n    \n    <ng-template #slXuatTemplate let-dataItem>\n        <app-textboxnumeric [decimals]=\"1\" class=\"no-label\" [max]=\"9999\">\n        </app-textboxnumeric>\n    </ng-template>\n    <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n        <strong>{{rowIndex + 1}}</strong>\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.html": 
        /*!******************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.html ***!
          \******************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập Xuất',Path:''}\n                ,{Title:'Dược Phẩm',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Duyệt Yêu Cầu Lĩnh',Path:'/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Duyệt yêu cầu lĩnh trực tiếp</h2>\n                <b *ngIf=\"trangThai != undefined\" class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">{{trangThai.TenTrangThai}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-duyet-yeu-cau-linh-thuoc-truc-tiep-shared [documentype]=\"documentype\" \n                    (trangThaiYeuCau)=\"getTrangThaiYeuCau($event)\"\n                    [validationErrors]=\"validationErrors\"></app-duyet-yeu-cau-linh-thuoc-truc-tiep-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button *ngIf=\"trangThai != undefined && trangThai.DuocDuyet == null\" type=\"button\" (click)=\"xemPhieuLinh()\" color=\"primary\" mat-raised-button><i\n                        class=\"ft-save\"></i>Xem phiếu lĩnh</button>\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                    <ng-container *ngIf=\"trangThai != undefined && trangThai.DuocDuyet == null\">\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"duyet()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i>Duyệt</button>\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"khongDuyet()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i>Không duyệt</button>\n                    </ng-container>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                            alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\" [innerHtml]=\"Message\"></div>\n    \n        <app-textarea id=\"lyDo\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\"\n            minHeight=\"20\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close(null)\">Không</button>\n    <button mat-button color=\"primary\" [disabled]=\"!lyDo\" (click)=\"close('ok')\">Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.html": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.html ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU XUẤT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
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
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.scss": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.scss ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MtYnUtc2hhcmVkL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy1idS1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.ts": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.ts ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuocBuSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuocBuSharedComponent", function () { return DuyetYeuCauLinhThuocBuSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var DuyetYeuCauLinhThuocBuSharedComponent = /** @class */ (function () {
                function DuyetYeuCauLinhThuocBuSharedComponent(apiService, route, notificationService) {
                    this.apiService = apiService;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.yeuCauLinhId = null;
                    this.gridDataSource = {};
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.groups = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
                    this.sortChild = [{ field: 'STT', dir: 'asc' }];
                    this.urlGetDataGrid = "YeuCauLinhDuocPham/GetDuocPhamYeuCauLinhBuDataForGrid";
                    this.urlGetTotalPageGrid = "YeuCauLinhDuocPham/GetDuocPhamYeuCauLinhBuTotalPageForGrid";
                    this.urlGetDataGridChild = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamCanLinhBuDataForGrid";
                    this.urlGetTotalPageGridChild = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamCanLinhBuTotalPageForGrid";
                    this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                DuyetYeuCauLinhThuocBuSharedComponent.prototype.ngOnInit = function () {
                    this.yeuCauLinh = new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["DuyetYeuCauLinhDuocPham"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.yeuCauLinhId = id;
                        this.getById(id);
                    }
                    // this.gridColumns = [
                    //   { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                    //   { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                    //   { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                    //   { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
                    //   { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                    //   { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                    //   { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                    //   { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
                    //   { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                    //   { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
                    //   { Field: "SoLuongCanBu", Title: "SL Cần bù", Width: 100 }
                    // ]
                    this.gridChildColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120 },
                        { Field: "MaBenhNhan", Title: "Mã NB", Width: 120 },
                        { Field: "HoTen", Title: "Họ tên", Width: 180 },
                        { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
                        { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
                        { Field: "SoLuong", Title: "SL", Width: 80 }
                    ];
                };
                DuyetYeuCauLinhThuocBuSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.apiService.get("YeuCauLinhDuocPham/GetYeuCauLinhDuocPhamBu?id=" + id)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.yeuCauLinh = resultData;
                            _this.trangThaiYeuCau.emit(new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["TrangThaiDuyetYeuCauLinh"](_this.yeuCauLinh.TenTrangThai, _this.yeuCauLinh.DuocDuyet));
                            _this.gridColumns = [
                                { Field: "STT", Title: "#", Width: 60, Template: _this.sttTemplate },
                                { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                                { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: _this.nhomGroupHeaderTemplate },
                                { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
                                { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                                { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                                { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                                { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
                                { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                                { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Hidden: _this.yeuCauLinh.DuocDuyet != null },
                                { Field: "SoLuongCanBu", Title: "SL Cần bù", Width: 100 }
                            ];
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                DuyetYeuCauLinhThuocBuSharedComponent.prototype.getData = function () {
                    return this.yeuCauLinh;
                };
                return DuyetYeuCauLinhThuocBuSharedComponent;
            }());
            DuyetYeuCauLinhThuocBuSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetYeuCauLinhThuocBuSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetYeuCauLinhThuocBuSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhThuocBuSharedComponent.prototype, "documentype", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhThuocBuSharedComponent.prototype, "validationErrors", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetYeuCauLinhThuocBuSharedComponent.prototype, "hideDuyetbtn", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetYeuCauLinhThuocBuSharedComponent.prototype, "trangThaiYeuCau", void 0);
            DuyetYeuCauLinhThuocBuSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-thuoc-bu-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-thuoc-bu-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-bu-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.scss")).default]
                })
            ], DuyetYeuCauLinhThuocBuSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.scss": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.scss ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQteWV1LWNhdS1saW5oLXRodW9jL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy1idS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFxkdXlldC15ZXUtY2F1LWxpbmgtdGh1b2NcXGR1eWV0LXlldS1jYXUtbGluaC10aHVvYy1idVxcZHV5ZXQteWV1LWNhdS1saW5oLXRodW9jLWJ1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MvZHV5ZXQteWV1LWNhdS1saW5oLXRodW9jLWJ1L2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy1idS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MvZHV5ZXQteWV1LWNhdS1saW5oLXRodW9jLWJ1L2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy1idS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn0iLCIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.ts": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.ts ***!
          \************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuocBuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuocBuComponent", function () { return DuyetYeuCauLinhThuocBuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _khong_duyet_popup_khong_duyet_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../khong-duyet-popup/khong-duyet-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.ts");
            /* harmony import */ var _phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_bu_shared_duyet_yeu_cau_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var DuyetYeuCauLinhThuocBuComponent = /** @class */ (function () {
                function DuyetYeuCauLinhThuocBuComponent(dialog, apiService, location, notificationService, router, route) {
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.location = location;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.loading = false;
                    this.baseRoute = "/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc";
                    this.yeuCauLinhThuoc = new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_9__["DuyetYeuCauLinhDuocPham"]();
                }
                DuyetYeuCauLinhThuocBuComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].DuyetYeuCauLinhDuocPham;
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThaiDanhSach = v;
                    });
                };
                DuyetYeuCauLinhThuocBuComponent.prototype.duyet = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn phê duyệt cho lần lĩnh bù dược phẩm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.yeuCauLinhThuoc = _this.shared.getData();
                            _this.apiService.post("YeuCauLinhDuocPham/XuLyDuyetYeuCauLinhDuocPhamBu", _this.yeuCauLinhThuoc)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                if (resultData != undefined && resultData != null) {
                                    _this.dialog.open(_phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_8__["PhieuXuatLinhThuocPopupComponent"], {
                                        disableClose: false,
                                        width: '1200px',
                                        data: resultData,
                                    }).afterClosed().subscribe(function (result) {
                                        _this.quayVeDanhSach();
                                    });
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetYeuCauLinhThuocBuComponent.prototype.khongDuyet = function () {
                    var _this = this;
                    this.dialog.open(_khong_duyet_popup_khong_duyet_popup_component__WEBPACK_IMPORTED_MODULE_7__["KhongDuyetPopupComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc từ chối duyệt cho lần lĩnh bù dược phẩm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== null) {
                            _this.yeuCauLinhThuoc = _this.shared.getData();
                            _this.yeuCauLinhThuoc.LyDoKhongDuyet = result;
                            // xử lý ko duyệt
                            _this.apiService.post("YeuCauLinhDuocPham/XuLyKhongDuyetYeuCauLinhDuocPhamBu", _this.yeuCauLinhThuoc)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Không duyệt"]));
                                _this.quayVeDanhSach();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetYeuCauLinhThuocBuComponent.prototype.cancel = function () {
                    this.router.navigate(['/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc'], { queryParams: { holdQuery: true } });
                    // this.quayVeDanhSach();
                };
                DuyetYeuCauLinhThuocBuComponent.prototype.getTrangThaiYeuCau = function (event) {
                    if (event != undefined && event != null) {
                        this.trangThai = event;
                    }
                };
                DuyetYeuCauLinhThuocBuComponent.prototype.quayVeDanhSach = function () {
                    this.location.back();
                };
                return DuyetYeuCauLinhThuocBuComponent;
            }());
            DuyetYeuCauLinhThuocBuComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_duyet_yeu_cau_linh_thuoc_bu_shared_duyet_yeu_cau_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_10__["DuyetYeuCauLinhThuocBuSharedComponent"], { static: true })
            ], DuyetYeuCauLinhThuocBuComponent.prototype, "shared", void 0);
            DuyetYeuCauLinhThuocBuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-thuoc-bu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-thuoc-bu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-bu.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.scss")).default]
                })
            ], DuyetYeuCauLinhThuocBuComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MtbGlzdC9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuocListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuocListComponent", function () { return DuyetYeuCauLinhThuocListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/linh-vat-tu-thuoc.enum */ "./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            var DuyetYeuCauLinhThuocListComponent = /** @class */ (function () {
                function DuyetYeuCauLinhThuocListComponent(dialog, router, apiService, authService, notificationService, cd, location, route) {
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.cd = cd;
                    this.location = location;
                    this.route = route;
                    this.gridColumns = [];
                    this.gridChildLinhDuTruChuaDuyetColumns = [];
                    this.gridChildLinhDuTruDaDuyetColumns = [];
                    this.gridChildLinhBuColumns = [];
                    this.gridChildLinhBuDaDuyetColumns = [];
                    this.gridChildLinhBuChuaDuyetColumns = [];
                    this.gridChildChildLinhBuColumns = [];
                    this.gridChildChildLinhBuDaDuyetColumns = [];
                    this.gridChildLinhBenhNhanColumns = [];
                    this.gridChildChildLinhBenhNhanColumns = [];
                    this.gridChildChildLinhBenhNhanTuChoiColumns = [];
                    // searchInfo: searchLoaiCauHinh;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
                    this.urlGetData = "";
                    this.urlGetTotalPage = "";
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.validationErrors = [];
                    this.timKiemTuNgay = new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["SearchNgay"]();
                    this.kiemTraDanhSachDangChoDuyet = true;
                    this.kiemTraDanhSachTuChoiDuyet = false;
                    this.kiemTraDanhSachDaDuyet = false;
                    this.trangThaiCheck = 4;
                    this.exportQueryInfoQueryInfo = new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["ExportQueryInfoQueryInfo"]();
                    this.stringAdditionalSearchString = "";
                    this.groups = [{ field: 'Nhom' }];
                    this.groupsYCTN = [{ field: 'MaYeuCauTiepNhan' }];
                    this.baseRoute = "/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc";
                    this.holdQuery = null;
                }
                DuyetYeuCauLinhThuocListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DuyetYeuCauLinhDuocPham;
                    var start = new Date();
                    start.setHours(0, 0, 0, 0);
                    var end = new Date();
                    this.timKiemTuNgay.NgayYeuCauRangDate.startDate = start;
                    this.timKiemTuNgay.NgayYeuCauRangDate.endDate = end;
                    window.onbeforeunload = function (event) {
                        var message = 'Important: Please click on \'Save\' button to leave this page.';
                        if (typeof event == 'undefined') {
                            event = window.event;
                        }
                        if (event) {
                            event.returnValue = message;
                        }
                        return message;
                    };
                    this.gridChild.sort = [{
                            field: 'DuocDuyet',
                            dir: 'asc'
                        }];
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThai = v;
                    });
                    this.linhVatTuGridVo = new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["LinhVatTuGridVo"]();
                    //-------- Grid-------------------------------------------------------------------------------------------
                    this.gridColumns = [
                        { Field: "MaPL", Title: "Mã PL", Width: 90, Sortable: true, Template: this.PLTemplate },
                        { Field: "Loai", Title: "Loại", MinWidth: 120, Sortable: true },
                        { Field: "LinhTuKho", Title: "Lĩnh từ kho", Width: 200, Sortable: true },
                        { Field: "LinhVeKho", Title: "Lĩnh về kho", Width: 200, Sortable: true },
                        { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
                        { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: false, Template: this.TinhTrangTemplate },
                        { Field: "Nguoiduyet", Title: "Người duyệt", Width: 150, Sortable: true },
                        { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
                        { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate }
                    ];
                    //--------end  Grid-------------------------------------------------------------------------------------------
                    //-------- bù-------------------------------------------------------------------------------------------------
                    this.gridChildLinhBuDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "SoLuongYeuCauDaDuyet", Title: "SL Cần bù", Width: 100 } // số lượng sum yêu cầu lĩnh dược phẩm chi tiết 
                    ];
                    this.gridChildLinhBuChuaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
                        { Field: "SoLuongYeuCauDaDuyet", Title: "SL Cần bù", Width: 100 } // số lượng sum yêu cầu lĩnh dược phẩm chi tiết 
                    ];
                    this.gridChildChildLinhBuDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "MaTN", Title: "Mã TN", Width: 120 },
                        { Field: "MaBN", Title: "Mã NB", Width: 120 },
                        { Field: "HoTen", Title: "Họ tên", Width: 180 },
                        { Field: "DVKham", Title: "DV Khám", Width: 180 },
                        { Field: "BSKeToa", Title: "BS kê toa", Width: 120 },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
                        { Field: "SLDanhSachDuyet", Title: "SL", Width: 80 } // số lượng sum yêu cầu lĩnh dược phẩm chi tiết 
                    ];
                    //-------- end bù-------------------------------------------------------------------------------------------------
                    //-------- dự trù-------------------------------------------------------------------------------------------------
                    this.gridChildLinhDuTruChuaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 120, Sortable: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 50 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/hàm lượng", Width: 50 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 50 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
                        { Field: "SLTon", Title: "SL Tồn", Width: 100, Sortable: true },
                        { Field: "SoLuongYc", Title: "SL yêu cầu", Width: 120, Sortable: true }
                    ];
                    this.gridChildLinhDuTruDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 120, Sortable: true },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 50 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/hàm lượng", Width: 50 },
                        { Field: "DuongDung", Title: "Đường dùng", Width: 50 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
                        { Field: "SoLuongYc", Title: "SL yêu cầu", Width: 120, Sortable: true }
                    ];
                    //--------end  dự trù-------------------------------------------------------------------------------------------------
                    //--------  trực tiếp------------------------------------------------------------------------------------------- 
                    this.gridChildLinhBenhNhanColumns = [
                        { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120 },
                        { Field: "MaBenhNhan", Title: "Mã NB", Width: 120, Sortable: true },
                        { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
                        { Field: "SoLuong", Title: "SL", Width: 80, Sortable: true }
                    ];
                    this.gridChildChildLinhBenhNhanColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                        { Field: "DuongDung", Title: "ĐD", Width: 80 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
                        { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKetString", Title: "Ngày kê", Width: 120 },
                        { Field: "SoLuongTon", Title: "SL Tồn", Width: 90 },
                        { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
                    ];
                    this.gridChildChildLinhBenhNhanTuChoiColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                        { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                        { Field: "DuongDung", Title: "ĐD", Width: 80 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                        { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
                    ];
                    //--------end  trực tiếp------------------------------------------------------------------------------------------- 
                    if (this.route.snapshot.queryParams.holdQuery != null) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null &&
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__["LocalStorageHelper"].getItem('additionalSearchStringLDP') != null) {
                        this.TimKiemId();
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__["LocalStorageHelper"].setItem('additionalSearchStringLDP', null);
                        if (this.timKiemTuNgay.NgayYeuCauRangDate.startDate != null) {
                            this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
                        }
                        else {
                            this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = null;
                        }
                        if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
                            this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
                        }
                        else {
                            this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = null;
                        }
                        var NgayDuyetRangDateStartDate = null;
                        var NgayDuyetRangDateEndDate = null;
                        var NgayYeuCauRangDateStartDate = "\"" + this.linhVatTuGridVo.NgayYeuCauRangDateStartDate + "\"";
                        var NgayYeuCauRangDateEndDate = "\"" + this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd + "\"";
                        var Searching = null;
                        var queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
                            + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoDuyet\":" + this.linhVatTuGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhVatTuGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhVatTuGridVo.DaDuyet + " }";
                        this.gridChild.additionalSearchString = queryString;
                    }
                };
                DuyetYeuCauLinhThuocListComponent.prototype.TimKiemId = function () {
                    var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__["LocalStorageHelper"].getItem("additionalSearchStringLDP");
                    var KiemTraLoCalAdditonalExit;
                    if (searching != null || searching != undefined || searching != "") {
                        KiemTraLoCalAdditonalExit = JSON.parse(searching);
                    }
                    if (searching == null || searching == undefined || searching == "") {
                        var NgayDuyetRangDateStartDate = null;
                        var NgayDuyetRangDateEndDate = null;
                        var NgayYeuCauRangDateStartDate = null;
                        var NgayYeuCauRangDateEndDate = null;
                        var Searching = null;
                        var queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
                            + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoDuyet\":" + this.linhVatTuGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhVatTuGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhVatTuGridVo.DaDuyet + " }";
                        this.gridChild.additionalSearchString = queryString;
                    }
                    else {
                        if (KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartDate != null) {
                            this.timKiemTuNgay.NgayYeuCauRangDate.startDate = new Date(KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartDate);
                        }
                        else {
                            this.timKiemTuNgay.NgayYeuCauRangDate.startDate = null;
                        }
                        if (KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartEnd != null) {
                            this.timKiemTuNgay.NgayYeuCauRangDate.endDate = new Date(KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartEnd);
                        }
                        else {
                            this.timKiemTuNgay.NgayYeuCauRangDate.endDate = null;
                        }
                        if (KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartDate != null) {
                            this.timKiemTuNgay.NgayDuyetRangDate.startDate = new Date(KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartDate);
                        }
                        else {
                            this.timKiemTuNgay.NgayDuyetRangDate.startDate = null;
                        }
                        if (KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartEnd != null) {
                            this.timKiemTuNgay.NgayDuyetRangDate.endDate = new Date(KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartEnd);
                        }
                        else {
                            this.timKiemTuNgay.NgayDuyetRangDate.endDate = null;
                        }
                        if (KiemTraLoCalAdditonalExit.Searching != null) {
                            this.searchString = KiemTraLoCalAdditonalExit.Searching;
                        }
                        else {
                            this.searchString = "";
                        }
                        this.kiemTraDanhSachDangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
                        this.kiemTraDanhSachTuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
                        this.kiemTraDanhSachDaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
                        this.linhVatTuGridVo.DangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
                        this.linhVatTuGridVo.TuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
                        this.linhVatTuGridVo.DaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
                        this.gridChild.additionalSearchString = searching;
                    }
                };
                DuyetYeuCauLinhThuocListComponent.prototype.blur = function (event) {
                    this.TimkiemNangCao();
                };
                DuyetYeuCauLinhThuocListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.TimkiemNangCao();
                    }
                    if (event.key == "Backspace") {
                        this.TimkiemNangCao();
                    }
                };
                DuyetYeuCauLinhThuocListComponent.prototype.onKeyDateRange = function (event) {
                    if (event.key == 'Enter') {
                        this.TimkiemNangCao();
                    }
                };
                DuyetYeuCauLinhThuocListComponent.prototype.changRange = function (event) {
                    this.TimkiemNangCao();
                };
                DuyetYeuCauLinhThuocListComponent.prototype.searchChanges = function () {
                    if (this.searchString == null || this.searchString == "") {
                        if (this.holdQuery != null) {
                            this.TimkiemNangCao();
                        }
                    }
                };
                DuyetYeuCauLinhThuocListComponent.prototype.TimkiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.timKiemTuNgay.NgayYeuCauRangDate.startDate != null) {
                        this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = null;
                    }
                    if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
                        this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = null;
                    }
                    if (this.timKiemTuNgay.NgayDuyetRangDate.startDate != null) {
                        this.linhVatTuGridVo.NgayDuyetRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.linhVatTuGridVo.NgayDuyetRangDateStartDate = null;
                    }
                    if (this.timKiemTuNgay.NgayDuyetRangDate.endDate != null) {
                        this.linhVatTuGridVo.NgayDuyetRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.linhVatTuGridVo.NgayDuyetRangDateStartEnd = null;
                    }
                    if (this.timKiemTuNgay.TrangThaiCheck != null) {
                        this.linhVatTuGridVo.TrangThaiCheck = this.timKiemTuNgay.TrangThaiCheck;
                    }
                    if (this.searchString != null || this.searchString != undefined) {
                        this.linhVatTuGridVo.Searching = this.searchString;
                    }
                    else {
                        this.linhVatTuGridVo.Searching = null;
                    }
                    var queryStringSearch = JSON.stringify(this.linhVatTuGridVo);
                    this.stringAdditionalSearchString = queryStringSearch;
                    this.gridChild._additionalSearchString = queryStringSearch;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__["LocalStorageHelper"].setItem("additionalSearchStringLDP", queryStringSearch);
                    this.gridChild.search();
                };
                DuyetYeuCauLinhThuocListComponent.prototype.checkTrangThaiDCT = function (event, type) {
                    this.cd.detectChanges();
                    if (type == 2) {
                        this.linhVatTuGridVo.DangChoDuyet = event;
                    }
                    if (type == 3) {
                        this.linhVatTuGridVo.TuChoiDuyet = event;
                    }
                    if (type == 4) {
                        this.linhVatTuGridVo.DaDuyet = event;
                    }
                    this.TimkiemNangCao();
                };
                DuyetYeuCauLinhThuocListComponent.prototype.xemChiTietYeuCauLinh = function (id, loaiPhieuLinh) {
                    switch (loaiPhieuLinh) {
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_15__["EnumLoaiPhieuLinh"].LinhDuTru:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhThuongDuocPham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                                this.router.navigate([this.baseRoute + "/duyet-phieu-linh-thuoc-thuong/" + id], { queryParams: { holdQuery: true } });
                                break;
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                            }
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_15__["EnumLoaiPhieuLinh"].LinhBu:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhBuDuocPham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                                this.router.navigate([this.baseRoute + "/duyet-phieu-linh-thuoc-bu/" + id], { queryParams: { holdQuery: true } });
                                break;
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                            }
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_15__["EnumLoaiPhieuLinh"].LinhChoBenhNhan:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhTrucTiepDuocPham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                                this.router.navigate([this.baseRoute + "/duyet-phieu-linh-thuoc-truc-tiep/" + id], { queryParams: { holdQuery: true } });
                                break;
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                            }
                    }
                };
                DuyetYeuCauLinhThuocListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    self.exportQueryInfoQueryInfo.Sort = this.gridChild.sort.map(function (item) {
                        return new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_25__["Sort"](item.field, item.dir);
                    });
                    self.exportQueryInfoQueryInfo.AdditionalSearchString = this.stringAdditionalSearchString;
                    self.apiService.postExportExcel('YeuCauLinhDuocPham/ExportDanhSachDuyetLinhDuocPham', self.exportQueryInfoQueryInfo).subscribe(function (resultData) {
                        self.closePopupLoadingData();
                        var dateTimeNow = new Date();
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DanhSachDuyetLinhDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
                    }, function (err) {
                        self.notificationService.showError(err.Message);
                    });
                };
                DuyetYeuCauLinhThuocListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DuyetYeuCauLinhThuocListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DuyetYeuCauLinhThuocListComponent.prototype.clearSearch = function () {
                    this.searchString = "";
                    this.gridChild.search();
                };
                DuyetYeuCauLinhThuocListComponent.prototype.InDuocPham = function (dataItem, loaiPhieuLinh) {
                    var _this = this;
                    this.apiService.post("YeuCauLinhDuocPham/InYeuCauLinhDuocPhamTrucTiep?yeuCauLinhId=" + dataItem + "&loaiPhieuLinh=" + loaiPhieuLinh)
                        .subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.dialog.open(_phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_23__["PhieuXuatLinhThuocPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: resultData,
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                DuyetYeuCauLinhThuocListComponent.prototype.quayVeDanhSach = function () {
                    this.location.back();
                };
                return DuyetYeuCauLinhThuocListComponent;
            }());
            DuyetYeuCauLinhThuocListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangTemplate', { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "TinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupTemplate', { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "groupTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "PLTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridB", { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "gridB", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridA", { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "gridA", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
            ], DuyetYeuCauLinhThuocListComponent.prototype, "ngayDuyetTemplate", void 0);
            DuyetYeuCauLinhThuocListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-thuoc-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-thuoc-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-list.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.scss")).default]
                })
            ], DuyetYeuCauLinhThuocListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-routing.module.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-routing.module.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuocRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuocRoutingModule", function () { return DuyetYeuCauLinhThuocRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_list_duyet_yeu_cau_linh_thuoc_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_thuong_duyet_yeu_cau_linh_thuoc_thuong_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_bu_duyet_yeu_cau_linh_thuoc_bu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_truc_tiep_duyet_yeu_cau_linh_thuoc_truc_tiep_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.ts");
            var routes = [
                {
                    path: '',
                    component: _duyet_yeu_cau_linh_thuoc_list_duyet_yeu_cau_linh_thuoc_list_component__WEBPACK_IMPORTED_MODULE_3__["DuyetYeuCauLinhThuocListComponent"],
                    data: {
                        title: 'Danh Sách Duyệt Yêu Cầu Lĩnh Thuốc',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetYeuCauLinhDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'duyet-phieu-linh-thuoc-thuong/:id',
                    component: _duyet_yeu_cau_linh_thuoc_thuong_duyet_yeu_cau_linh_thuoc_thuong_component__WEBPACK_IMPORTED_MODULE_7__["DuyetYeuCauLinhThuocThuongComponent"],
                    data: {
                        title: 'Duyệt Phiếu Lĩnh Thường',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetYeuCauLinhDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'duyet-phieu-linh-thuoc-bu/:id',
                    component: _duyet_yeu_cau_linh_thuoc_bu_duyet_yeu_cau_linh_thuoc_bu_component__WEBPACK_IMPORTED_MODULE_8__["DuyetYeuCauLinhThuocBuComponent"],
                    data: {
                        title: 'Duyệt Phiếu Lĩnh Bù',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetYeuCauLinhDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'duyet-phieu-linh-thuoc-truc-tiep/:id',
                    component: _duyet_yeu_cau_linh_thuoc_truc_tiep_duyet_yeu_cau_linh_thuoc_truc_tiep_component__WEBPACK_IMPORTED_MODULE_9__["DuyetYeuCauLinhThuocTrucTiepComponent"],
                    data: {
                        title: 'Duyệt Phiếu Lĩnh Trực tiếp',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetYeuCauLinhDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                }
            ];
            var DuyetYeuCauLinhThuocRoutingModule = /** @class */ (function () {
                function DuyetYeuCauLinhThuocRoutingModule() {
                }
                return DuyetYeuCauLinhThuocRoutingModule;
            }());
            DuyetYeuCauLinhThuocRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuyetYeuCauLinhThuocRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.scss": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.scss ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MtdGh1b25nLXNoYXJlZC9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MtdGh1b25nLXNoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.ts": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.ts ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuocThuongSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuocThuongSharedComponent", function () { return DuyetYeuCauLinhThuocThuongSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var DuyetYeuCauLinhThuocThuongSharedComponent = /** @class */ (function () {
                function DuyetYeuCauLinhThuocThuongSharedComponent(apiService, route, notificationService) {
                    this.apiService = apiService;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.gridDataSource = {};
                    this.gridColumns = [];
                    // groups: GroupDescriptor[] = [{ field: 'Nhom' }];
                    this.groups = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
                    this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                DuyetYeuCauLinhThuocThuongSharedComponent.prototype.ngOnInit = function () {
                    this.yeuCauLinh = new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_6__["DuyetYeuCauLinhDuocPham"]();
                    this.yeuCauLinh.DuyetYeuCauLinhDuocPhamChiTiets = new Array();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                    }
                    // this.gridColumns = [
                    //   { Field: "STT", Title: "#", Width: 50 , Template: this.sttTemplate},
                    //   { Field: "TenDuocPham", Title: "Tên dược phẩm", MinWidth: 120 },
                    //   { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                    //   { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                    //   { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 200 },
                    //   { Field: "DuongDung", Title: "Đường dùng", Width: 120 },
                    //   { Field: "DVT", Title: "ĐVT", Width: 100 },
                    //   { Field: "HangSanXuat", Title: "Hãng SX", Width: 200 },
                    //   { Field: "NuocSanXuat", Title: "Nước SX", Width: 120 },
                    //   { Field: "SLTon", Title: "SL Tồn", Width: 120 },
                    //   { Field: "SoLuong", Title: "SL Yêu Cầu", Width: 120 },
                    //   { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Template: this.slXuatTemplate }
                    // ]
                };
                DuyetYeuCauLinhThuocThuongSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.apiService.get("YeuCauLinhDuocPham/GetYeuCauLinhDuocPhamThuong?id=" + id)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.yeuCauLinh = resultData;
                            _this.gridColumns = [
                                { Field: "STT", Title: "#", Width: 50, Template: _this.sttTemplate },
                                { Field: "TenDuocPham", Title: "Tên dược phẩm", MinWidth: 120 },
                                { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: _this.nhomGroupHeaderTemplate },
                                { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                                { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 200 },
                                { Field: "DuongDung", Title: "Đường dùng", Width: 120 },
                                { Field: "DVT", Title: "ĐVT", Width: 100 },
                                { Field: "HangSanXuat", Title: "Hãng SX", Width: 200 },
                                { Field: "NuocSanXuat", Title: "Nước SX", Width: 120 },
                                { Field: "SLTon", Title: "SL Tồn", Width: 120, Hidden: _this.yeuCauLinh.DuocDuyet != null },
                                { Field: "SoLuong", Title: "SL Yêu Cầu", Width: 120 },
                                { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Template: _this.slXuatTemplate }
                            ];
                            _this.trangThaiYeuCau.emit(new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_6__["TrangThaiDuyetYeuCauLinh"](_this.yeuCauLinh.TenTrangThai, _this.yeuCauLinh.DuocDuyet));
                            _this.gridDataSource = {
                                data: _this.yeuCauLinh.DuyetYeuCauLinhDuocPhamChiTiets,
                                total: _this.yeuCauLinh.DuyetYeuCauLinhDuocPhamChiTiets.length
                            };
                            if (_this.gridDuocPham != undefined) {
                                _this.gridDuocPham.gridDataSource = _this.gridDataSource;
                                _this.gridDuocPham.setDataSource();
                            }
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                DuyetYeuCauLinhThuocThuongSharedComponent.prototype.getData = function () {
                    return this.yeuCauLinh;
                };
                DuyetYeuCauLinhThuocThuongSharedComponent.prototype.changeSoLuongCoTheXuat = function (event, dataItem) {
                    if (event != undefined && event != null) {
                        if (event < dataItem.SoLuong) {
                            //update 05/15/2021 cho phep SL duyet nho hon SL yeu cau
                            //this.hideDuyetbtn.emit(true);
                        }
                        else if (event > dataItem.SoLuong) {
                            dataItem.SoLuongCoTheXuat = dataItem.SoLuong;
                        }
                        // else
                        // {
                        //   var index = this.gridDataSource.data.findIndex(x => x.SoLuongCoTheXuat < x.SoLuong);
                        //   this.hideDuyetbtn.emit(index != -1);
                        // }
                    }
                };
                return DuyetYeuCauLinhThuocThuongSharedComponent;
            }());
            DuyetYeuCauLinhThuocThuongSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slXuatTemplate', { static: true })
            ], DuyetYeuCauLinhThuocThuongSharedComponent.prototype, "slXuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetYeuCauLinhThuocThuongSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetYeuCauLinhThuocThuongSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPham', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], static: false })
            ], DuyetYeuCauLinhThuocThuongSharedComponent.prototype, "gridDuocPham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhThuocThuongSharedComponent.prototype, "documentype", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhThuocThuongSharedComponent.prototype, "validationErrors", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetYeuCauLinhThuocThuongSharedComponent.prototype, "hideDuyetbtn", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetYeuCauLinhThuocThuongSharedComponent.prototype, "trangThaiYeuCau", void 0);
            DuyetYeuCauLinhThuocThuongSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-thuoc-thuong-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-thuoc-thuong-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-thuong-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.scss")).default]
                })
            ], DuyetYeuCauLinhThuocThuongSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.scss": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.scss ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MtdGh1b25nL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy10aHVvbmcuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.ts": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.ts ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuocThuongComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuocThuongComponent", function () { return DuyetYeuCauLinhThuocThuongComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _khong_duyet_popup_khong_duyet_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../khong-duyet-popup/khong-duyet-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.ts");
            /* harmony import */ var _phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_thuong_shared_duyet_yeu_cau_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var DuyetYeuCauLinhThuocThuongComponent = /** @class */ (function () {
                function DuyetYeuCauLinhThuocThuongComponent(dialog, location, apiService, notificationService, router, route) {
                    this.dialog = dialog;
                    this.location = location;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.loading = false;
                    this.isHideDuyet = false;
                    this.baseRoute = "/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc";
                    this.yeuCauLinhThuoc = new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_8__["DuyetYeuCauLinhDuocPham"]();
                }
                DuyetYeuCauLinhThuocThuongComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].DuyetYeuCauLinhDuocPham;
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThaiDanhSach = v;
                    });
                };
                DuyetYeuCauLinhThuocThuongComponent.prototype.duyet = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn phê duyệt cho lần lĩnh dược phẩm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.yeuCauLinhThuoc = _this.shared.getData();
                            _this.yeuCauLinhThuoc.DuyetYeuCauLinhDuocPhamChiTiets = _this.yeuCauLinhThuoc.DuyetYeuCauLinhDuocPhamChiTiets.sort(function (a, b) { return (a.Nhom > b.Nhom || a.Index > b.Index) ? 1 : -1; });
                            _this.apiService.post("YeuCauLinhDuocPham/XuLyDuyetYeuCauLinhDuocPhamThuong", _this.yeuCauLinhThuoc)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                if (resultData != undefined && resultData != null) {
                                    _this.dialog.open(_phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_7__["PhieuXuatLinhThuocPopupComponent"], {
                                        disableClose: false,
                                        width: '1200px',
                                        data: resultData,
                                    }).afterClosed().subscribe(function (result) {
                                        _this.quayVeDanhSach();
                                    });
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetYeuCauLinhThuocThuongComponent.prototype.khongDuyet = function () {
                    var _this = this;
                    this.dialog.open(_khong_duyet_popup_khong_duyet_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhongDuyetPopupComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc từ chối duyệt cho lần lĩnh dược phẩm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== null) {
                            _this.yeuCauLinhThuoc = _this.shared.getData();
                            _this.yeuCauLinhThuoc.LyDoKhongDuyet = result;
                            // xử lý ko duyệt
                            _this.apiService.post("YeuCauLinhDuocPham/XuLyKhongDuyetYeuCauLinhDuocPhamThuong", _this.yeuCauLinhThuoc)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Không duyệt"]));
                                _this.quayVeDanhSach();
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetYeuCauLinhThuocThuongComponent.prototype.cancel = function () {
                    this.router.navigate(['/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc'], { queryParams: { holdQuery: true } });
                    //this.quayVeDanhSach();
                };
                DuyetYeuCauLinhThuocThuongComponent.prototype.getTrangThaiYeuCau = function (event) {
                    if (event != undefined && event != null) {
                        this.trangThai = event;
                    }
                };
                DuyetYeuCauLinhThuocThuongComponent.prototype.anHienButtonDuyet = function (event) {
                    if (event) {
                        this.isHideDuyet = true;
                    }
                    else {
                        this.isHideDuyet = false;
                    }
                };
                DuyetYeuCauLinhThuocThuongComponent.prototype.quayVeDanhSach = function () {
                    this.location.back();
                };
                return DuyetYeuCauLinhThuocThuongComponent;
            }());
            DuyetYeuCauLinhThuocThuongComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duyet_yeu_cau_linh_thuoc_thuong_shared_duyet_yeu_cau_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_9__["DuyetYeuCauLinhThuocThuongSharedComponent"], { static: true })
            ], DuyetYeuCauLinhThuocThuongComponent.prototype, "shared", void 0);
            DuyetYeuCauLinhThuocThuongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-thuoc-thuong',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-thuoc-thuong.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-thuong.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.scss")).default]
                })
            ], DuyetYeuCauLinhThuocThuongComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.scss": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.scss ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MtdHJ1Yy10aWVwLXNoYXJlZC9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MtdHJ1Yy10aWVwLXNoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.ts": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.ts ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuocTrucTiepSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuocTrucTiepSharedComponent", function () { return DuyetYeuCauLinhThuocTrucTiepSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var DuyetYeuCauLinhThuocTrucTiepSharedComponent = /** @class */ (function () {
                function DuyetYeuCauLinhThuocTrucTiepSharedComponent(apiService, route, notificationService) {
                    this.apiService = apiService;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.yeuCauLinhId = null;
                    this.gridDataSource = {};
                    this.gridColumns = [];
                    this.gridChildColumns = [];
                    this.groups = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
                    this.sortChild = [{ field: 'STT', dir: 'asc' }];
                    this.urlGetDataGrid = "YeuCauLinhDuocPham/GetDuocPhamYeuCauLinhTrucTiepDataForGrid";
                    this.urlGetTotalPageGrid = "YeuCauLinhDuocPham/GetDuocPhamYeuCauLinhTrucTiepTotalPageForGrid";
                    this.urlGetDataGridBenhNhan = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamCanLinhTrucTiepDataForGrid";
                    this.urlGetTotalPageGridBenhNhan = "YeuCauLinhDuocPham/GetBenhNhanTheoDuocPhamCanLinhTrucTiepTotalPageForGrid";
                    this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                DuyetYeuCauLinhThuocTrucTiepSharedComponent.prototype.ngOnInit = function () {
                    this.yeuCauLinh = new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_4__["DuyetYeuCauLinhDuocPham"]();
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.yeuCauLinhId = id;
                        this.getById(id);
                    }
                    // this.gridColumns = [
                    //   { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                    //   { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                    //   { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                    //   { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                    //   { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                    //   { Field: "DuongDung", Title: "ĐD", Width: 80 },
                    //   { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
                    //   { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
                    //   { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                    //   { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
                    //   { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
                    //   { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
                    //   { Field: "SoLuongTon", Title: "SL Tồn", Width: 90 },
                    //   { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
                    // ]
                    this.gridChildColumns = [
                        { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120 },
                        { Field: "MaBenhNhan", Title: "Mã NB", Width: 120 },
                        { Field: "HoTen", Title: "Họ tên", Width: 180 },
                        // { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
                        // { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
                        // { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
                        { Field: "SoLuong", Title: "SL", Width: 80 }
                    ];
                };
                DuyetYeuCauLinhThuocTrucTiepSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.apiService.get("YeuCauLinhDuocPham/GetYeuCauLinhDuocPhamTrucTiep?id=" + id)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.yeuCauLinh = resultData;
                            _this.trangThaiYeuCau.emit(new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_4__["TrangThaiDuyetYeuCauLinh"](_this.yeuCauLinh.TenTrangThai, _this.yeuCauLinh.DuocDuyet));
                            if (_this.yeuCauLinh.DuocDuyet == false) {
                                _this.gridColumns = [
                                    { Field: "STT", Title: "#", Width: 60, Template: _this.sttTemplate },
                                    { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                                    { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: _this.nhomGroupHeaderTemplate },
                                    { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                                    { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                                    { Field: "DuongDung", Title: "Đường dùng", Width: 80 },
                                    { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
                                    { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
                                    { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                                    // { Field: "SoLuongTon", Title: "SL Tồn", Width: 90 },
                                    { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
                                ];
                            }
                            else {
                                _this.gridColumns = [
                                    { Field: "STT", Title: "#", Width: 60, Template: _this.sttTemplate },
                                    { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
                                    { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: _this.nhomGroupHeaderTemplate },
                                    { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
                                    { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
                                    { Field: "DuongDung", Title: "Đường dùng", Width: 80 },
                                    { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
                                    { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
                                    { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                                    { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
                                    { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
                                    { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                                    { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
                                    { Field: "SoLuongTon", Title: "SL Tồn", Width: 90, Hidden: _this.yeuCauLinh.DuocDuyet == true },
                                    { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
                                ];
                            }
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                DuyetYeuCauLinhThuocTrucTiepSharedComponent.prototype.getData = function () {
                    return this.yeuCauLinh;
                };
                return DuyetYeuCauLinhThuocTrucTiepSharedComponent;
            }());
            DuyetYeuCauLinhThuocTrucTiepSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slXuatTemplate', { static: true })
            ], DuyetYeuCauLinhThuocTrucTiepSharedComponent.prototype, "slXuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetYeuCauLinhThuocTrucTiepSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetYeuCauLinhThuocTrucTiepSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhThuocTrucTiepSharedComponent.prototype, "documentype", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhThuocTrucTiepSharedComponent.prototype, "validationErrors", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetYeuCauLinhThuocTrucTiepSharedComponent.prototype, "trangThaiYeuCau", void 0);
            DuyetYeuCauLinhThuocTrucTiepSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-thuoc-truc-tiep-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.scss")).default]
                })
            ], DuyetYeuCauLinhThuocTrucTiepSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.scss": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.scss ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MtdHJ1Yy10aWVwL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy10cnVjLXRpZXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.ts": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.ts ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuocTrucTiepComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuocTrucTiepComponent", function () { return DuyetYeuCauLinhThuocTrucTiepComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _khong_duyet_popup_khong_duyet_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../khong-duyet-popup/khong-duyet-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.ts");
            /* harmony import */ var _phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.model.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_truc_tiep_shared_duyet_yeu_cau_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var DuyetYeuCauLinhThuocTrucTiepComponent = /** @class */ (function () {
                function DuyetYeuCauLinhThuocTrucTiepComponent(dialog, location, apiService, notificationService, router, route) {
                    this.dialog = dialog;
                    this.location = location;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.loading = false;
                    this.baseRoute = "/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc";
                    this.yeuCauLinhThuoc = new _duyet_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_8__["DuyetYeuCauLinhDuocPham"]();
                }
                DuyetYeuCauLinhThuocTrucTiepComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].DuyetYeuCauLinhDuocPham;
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThaiDanhSach = v;
                    });
                };
                DuyetYeuCauLinhThuocTrucTiepComponent.prototype.duyet = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn phê duyệt cho lần lĩnh trực tiếp dược phẩm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.yeuCauLinhThuoc = _this.shared.getData();
                            _this.apiService.post("YeuCauLinhDuocPham/XuLyDuyetYeuCauLinhDuocPhamTrucTiep", _this.yeuCauLinhThuoc)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                if (resultData != undefined && resultData != null) {
                                    _this.dialog.open(_phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_7__["PhieuXuatLinhThuocPopupComponent"], {
                                        disableClose: false,
                                        width: '1200px',
                                        data: resultData,
                                    }).afterClosed().subscribe(function (result) {
                                        _this.quayVeDanhSach();
                                    });
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetYeuCauLinhThuocTrucTiepComponent.prototype.khongDuyet = function () {
                    var _this = this;
                    this.dialog.open(_khong_duyet_popup_khong_duyet_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhongDuyetPopupComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc từ chối duyệt cho lần lĩnh trực tiếp dược phẩm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== null) {
                            _this.yeuCauLinhThuoc = _this.shared.getData();
                            _this.yeuCauLinhThuoc.LyDoKhongDuyet = result;
                            // xử lý ko duyệt
                            _this.apiService.post("YeuCauLinhDuocPham/XuLyKhongDuyetYeuCauLinhDuocPhamTrucTiep", _this.yeuCauLinhThuoc)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Không duyệt"]));
                                _this.quayVeDanhSach();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetYeuCauLinhThuocTrucTiepComponent.prototype.cancel = function () {
                    this.router.navigate(['/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc'], { queryParams: { holdQuery: true } });
                    // this.quayVeDanhSach();
                };
                DuyetYeuCauLinhThuocTrucTiepComponent.prototype.getTrangThaiYeuCau = function (event) {
                    if (event != undefined && event != null) {
                        this.trangThai = event;
                    }
                };
                DuyetYeuCauLinhThuocTrucTiepComponent.prototype.quayVeDanhSach = function () {
                    this.location.back();
                };
                DuyetYeuCauLinhThuocTrucTiepComponent.prototype.xemPhieuLinh = function () {
                    var _this = this;
                    this.yeuCauLinhThuoc = this.shared.getData();
                    this.apiService.post("YeuCauLinhDuocPham/InYeuCauLinhDuocPhamTrucTiep?yeuCauLinhId=" + this.yeuCauLinhThuoc.Id + "&loaiPhieuLinh=" + 3)
                        .subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.dialog.open(_phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_7__["PhieuXuatLinhThuocPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: resultData,
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                return DuyetYeuCauLinhThuocTrucTiepComponent;
            }());
            DuyetYeuCauLinhThuocTrucTiepComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duyet_yeu_cau_linh_thuoc_truc_tiep_shared_duyet_yeu_cau_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_9__["DuyetYeuCauLinhThuocTrucTiepSharedComponent"], { static: true })
            ], DuyetYeuCauLinhThuocTrucTiepComponent.prototype, "shared", void 0);
            DuyetYeuCauLinhThuocTrucTiepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-thuoc-truc-tiep',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-thuoc-truc-tiep.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-truc-tiep.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.scss")).default]
                })
            ], DuyetYeuCauLinhThuocTrucTiepComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.model.ts": 
        /*!*************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.model.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuoc, SearchNgay, rangeDate, DuyetYeuCauLinhDuocPham, DuyetYeuCauLinhDuocPhamChiTiet, TrangThaiDuyetYeuCauLinh, ExportQueryInfoQueryInfo, LinhVatTuGridVo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuoc", function () { return DuyetYeuCauLinhThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNgay", function () { return SearchNgay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhDuocPham", function () { return DuyetYeuCauLinhDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhDuocPhamChiTiet", function () { return DuyetYeuCauLinhDuocPhamChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiDuyetYeuCauLinh", function () { return TrangThaiDuyetYeuCauLinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function () { return ExportQueryInfoQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhVatTuGridVo", function () { return LinhVatTuGridVo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DuyetYeuCauLinhThuoc = /** @class */ (function () {
                function DuyetYeuCauLinhThuoc() {
                }
                return DuyetYeuCauLinhThuoc;
            }());
            var SearchNgay = /** @class */ (function () {
                function SearchNgay(NgayYeuCauRangDate, NgayDuyetRangDate, TrangThaiCheck) {
                    if (NgayYeuCauRangDate === void 0) { NgayYeuCauRangDate = new rangeDate; }
                    if (NgayDuyetRangDate === void 0) { NgayDuyetRangDate = new rangeDate; }
                    if (TrangThaiCheck === void 0) { TrangThaiCheck = 4; }
                    this.NgayYeuCauRangDate = NgayYeuCauRangDate;
                    this.NgayDuyetRangDate = NgayDuyetRangDate;
                    this.TrangThaiCheck = TrangThaiCheck;
                }
                return SearchNgay;
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
            var DuyetYeuCauLinhDuocPham = /** @class */ (function () {
                function DuyetYeuCauLinhDuocPham(Id, KhoXuatId, TenKhoXuat, KhoNhapId, TenKhoNhap, LoaiPhieuLinh, TenLoaiPhieuLinh, NhanVienYeuCauId, TenNhanVienYeuCau, NhanVienDuyetId, TenNhanVienDuyet, NgayYeuCau, NgayDuyet, GhiChu, NguoiXuatKhoId, TenNguoiXuatKho, NguoiNhapKhoId, TenNguoiNhapKho, isHideDuyet, DuocDuyet, TenTrangThai, LyDoKhongDuyet, DuyetYeuCauLinhDuocPhamChiTiets, LastModified) {
                    if (Id === void 0) { Id = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (TenKhoXuat === void 0) { TenKhoXuat = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (TenKhoNhap === void 0) { TenKhoNhap = null; }
                    if (LoaiPhieuLinh === void 0) { LoaiPhieuLinh = null; }
                    if (TenLoaiPhieuLinh === void 0) { TenLoaiPhieuLinh = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NhanVienDuyetId === void 0) { NhanVienDuyetId = null; }
                    if (TenNhanVienDuyet === void 0) { TenNhanVienDuyet = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (NguoiXuatKhoId === void 0) { NguoiXuatKhoId = null; }
                    if (TenNguoiXuatKho === void 0) { TenNguoiXuatKho = null; }
                    if (NguoiNhapKhoId === void 0) { NguoiNhapKhoId = null; }
                    if (TenNguoiNhapKho === void 0) { TenNguoiNhapKho = null; }
                    if (isHideDuyet === void 0) { isHideDuyet = false; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    if (TenTrangThai === void 0) { TenTrangThai = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (DuyetYeuCauLinhDuocPhamChiTiets === void 0) { DuyetYeuCauLinhDuocPhamChiTiets = []; }
                    if (LastModified === void 0) { LastModified = null; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.TenKhoXuat = TenKhoXuat;
                    this.KhoNhapId = KhoNhapId;
                    this.TenKhoNhap = TenKhoNhap;
                    this.LoaiPhieuLinh = LoaiPhieuLinh;
                    this.TenLoaiPhieuLinh = TenLoaiPhieuLinh;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.NhanVienDuyetId = NhanVienDuyetId;
                    this.TenNhanVienDuyet = TenNhanVienDuyet;
                    this.NgayYeuCau = NgayYeuCau;
                    this.NgayDuyet = NgayDuyet;
                    this.GhiChu = GhiChu;
                    this.NguoiXuatKhoId = NguoiXuatKhoId;
                    this.TenNguoiXuatKho = TenNguoiXuatKho;
                    this.NguoiNhapKhoId = NguoiNhapKhoId;
                    this.TenNguoiNhapKho = TenNguoiNhapKho;
                    this.isHideDuyet = isHideDuyet;
                    this.DuocDuyet = DuocDuyet;
                    this.TenTrangThai = TenTrangThai;
                    this.LyDoKhongDuyet = LyDoKhongDuyet;
                    this.DuyetYeuCauLinhDuocPhamChiTiets = DuyetYeuCauLinhDuocPhamChiTiets;
                    this.LastModified = LastModified;
                }
                return DuyetYeuCauLinhDuocPham;
            }());
            var DuyetYeuCauLinhDuocPhamChiTiet = /** @class */ (function () {
                function DuyetYeuCauLinhDuocPhamChiTiet(DuocPhamBenhVienId, LaDuocPhamBHYT, TenDuocPham, NongDoHamLuong, HoatChat, DuongDung, DVT, HangSanXuat, NuocSanXuat, SLTon, SoLuong, SoLuongCoTheXuat, Nhom, Index) {
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (NongDoHamLuong === void 0) { NongDoHamLuong = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (HangSanXuat === void 0) { HangSanXuat = null; }
                    if (NuocSanXuat === void 0) { NuocSanXuat = null; }
                    if (SLTon === void 0) { SLTon = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (SoLuongCoTheXuat === void 0) { SoLuongCoTheXuat = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (Index === void 0) { Index = null; }
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                    this.TenDuocPham = TenDuocPham;
                    this.NongDoHamLuong = NongDoHamLuong;
                    this.HoatChat = HoatChat;
                    this.DuongDung = DuongDung;
                    this.DVT = DVT;
                    this.HangSanXuat = HangSanXuat;
                    this.NuocSanXuat = NuocSanXuat;
                    this.SLTon = SLTon;
                    this.SoLuong = SoLuong;
                    this.SoLuongCoTheXuat = SoLuongCoTheXuat;
                    this.Nhom = Nhom;
                    this.Index = Index;
                }
                return DuyetYeuCauLinhDuocPhamChiTiet;
            }());
            var TrangThaiDuyetYeuCauLinh = /** @class */ (function () {
                function TrangThaiDuyetYeuCauLinh(TenTrangThai, DuocDuyet) {
                    if (TenTrangThai === void 0) { TenTrangThai = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    this.TenTrangThai = TenTrangThai;
                    this.DuocDuyet = DuocDuyet;
                }
                return TrangThaiDuyetYeuCauLinh;
            }());
            var ExportQueryInfoQueryInfo = /** @class */ (function () {
                function ExportQueryInfoQueryInfo(Skip, Take, PageSize, SearchString, AdditionalSearchString, 
                // public searchTerms: string = "",
                Sort) {
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return ExportQueryInfoQueryInfo;
            }());
            var LinhVatTuGridVo = /** @class */ (function () {
                function LinhVatTuGridVo(NgayYeuCauRangDateStartDate, NgayYeuCauRangDateStartEnd, NgayDuyetRangDateStartDate, NgayDuyetRangDateStartEnd, Searching, TrangThaiCheck, 
                // public DangChoGoi: boolean = true,
                DangChoDuyet, TuChoiDuyet, DaDuyet) {
                    if (NgayYeuCauRangDateStartDate === void 0) { NgayYeuCauRangDateStartDate = null; }
                    if (NgayYeuCauRangDateStartEnd === void 0) { NgayYeuCauRangDateStartEnd = null; }
                    if (NgayDuyetRangDateStartDate === void 0) { NgayDuyetRangDateStartDate = null; }
                    if (NgayDuyetRangDateStartEnd === void 0) { NgayDuyetRangDateStartEnd = null; }
                    if (Searching === void 0) { Searching = null; }
                    if (TrangThaiCheck === void 0) { TrangThaiCheck = null; }
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = null; }
                    if (DaDuyet === void 0) { DaDuyet = null; }
                    this.NgayYeuCauRangDateStartDate = NgayYeuCauRangDateStartDate;
                    this.NgayYeuCauRangDateStartEnd = NgayYeuCauRangDateStartEnd;
                    this.NgayDuyetRangDateStartDate = NgayDuyetRangDateStartDate;
                    this.NgayDuyetRangDateStartEnd = NgayDuyetRangDateStartEnd;
                    this.Searching = Searching;
                    this.TrangThaiCheck = TrangThaiCheck;
                    this.DangChoDuyet = DangChoDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.DaDuyet = DaDuyet;
                }
                return LinhVatTuGridVo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.module.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.module.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhThuocModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhThuocModule", function () { return DuyetYeuCauLinhThuocModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-routing.module.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_list_duyet_yeu_cau_linh_thuoc_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_thuong_duyet_yeu_cau_linh_thuoc_thuong_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_bu_duyet_yeu_cau_linh_thuoc_bu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_thuong_shared_duyet_yeu_cau_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_bu_shared_duyet_yeu_cau_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component.ts");
            /* harmony import */ var _khong_duyet_popup_khong_duyet_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./khong-duyet-popup/khong-duyet-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_truc_tiep_shared_duyet_yeu_cau_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_thuoc_truc_tiep_duyet_yeu_cau_linh_thuoc_truc_tiep_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component.ts");
            /* harmony import */ var _phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.ts");
            var DuyetYeuCauLinhThuocModule = /** @class */ (function () {
                function DuyetYeuCauLinhThuocModule() {
                }
                return DuyetYeuCauLinhThuocModule;
            }());
            DuyetYeuCauLinhThuocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _duyet_yeu_cau_linh_thuoc_list_duyet_yeu_cau_linh_thuoc_list_component__WEBPACK_IMPORTED_MODULE_4__["DuyetYeuCauLinhThuocListComponent"],
                        _duyet_yeu_cau_linh_thuoc_thuong_duyet_yeu_cau_linh_thuoc_thuong_component__WEBPACK_IMPORTED_MODULE_5__["DuyetYeuCauLinhThuocThuongComponent"],
                        _duyet_yeu_cau_linh_thuoc_bu_duyet_yeu_cau_linh_thuoc_bu_component__WEBPACK_IMPORTED_MODULE_6__["DuyetYeuCauLinhThuocBuComponent"],
                        _duyet_yeu_cau_linh_thuoc_thuong_shared_duyet_yeu_cau_linh_thuoc_thuong_shared_component__WEBPACK_IMPORTED_MODULE_15__["DuyetYeuCauLinhThuocThuongSharedComponent"],
                        _duyet_yeu_cau_linh_thuoc_bu_shared_duyet_yeu_cau_linh_thuoc_bu_shared_component__WEBPACK_IMPORTED_MODULE_16__["DuyetYeuCauLinhThuocBuSharedComponent"],
                        _khong_duyet_popup_khong_duyet_popup_component__WEBPACK_IMPORTED_MODULE_17__["KhongDuyetPopupComponent"],
                        _duyet_yeu_cau_linh_thuoc_truc_tiep_shared_duyet_yeu_cau_linh_thuoc_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_18__["DuyetYeuCauLinhThuocTrucTiepSharedComponent"],
                        _duyet_yeu_cau_linh_thuoc_truc_tiep_duyet_yeu_cau_linh_thuoc_truc_tiep_component__WEBPACK_IMPORTED_MODULE_19__["DuyetYeuCauLinhThuocTrucTiepComponent"],
                        _phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_20__["PhieuXuatLinhThuocPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _duyet_yeu_cau_linh_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__["DuyetYeuCauLinhThuocRoutingModule"]
                    ],
                    entryComponents: [
                        _khong_duyet_popup_khong_duyet_popup_component__WEBPACK_IMPORTED_MODULE_17__["KhongDuyetPopupComponent"],
                        _phieu_xuat_linh_thuoc_popup_phieu_xuat_linh_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_20__["PhieuXuatLinhThuocPopupComponent"]
                    ]
                })
            ], DuyetYeuCauLinhThuocModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.scss": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.scss ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2R1eWV0LXlldS1jYXUtbGluaC10aHVvYy9raG9uZy1kdXlldC1wb3B1cC9raG9uZy1kdXlldC1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: KhongDuyetPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhongDuyetPopupComponent", function () { return KhongDuyetPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var KhongDuyetPopupComponent = /** @class */ (function () {
                function KhongDuyetPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.Title = null;
                    this.Message = null;
                    this.lyDo = null;
                }
                KhongDuyetPopupComponent.prototype.ngOnInit = function () {
                    this.Title = this.data.Title;
                    this.Message = this.data.Message;
                };
                KhongDuyetPopupComponent.prototype.close = function (data) {
                    if (data == 'ok') {
                        this.dialogRef.close(this.lyDo);
                    }
                    else {
                        this.dialogRef.close(null);
                    }
                };
                return KhongDuyetPopupComponent;
            }());
            KhongDuyetPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            KhongDuyetPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-khong-duyet-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./khong-duyet-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./khong-duyet-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], KhongDuyetPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.scss": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.scss ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQteWV1LWNhdS1saW5oLXRodW9jL3BoaWV1LXh1YXQtbGluaC10aHVvYy1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFxkdXlldC15ZXUtY2F1LWxpbmgtdGh1b2NcXHBoaWV1LXh1YXQtbGluaC10aHVvYy1wb3B1cFxccGhpZXUteHVhdC1saW5oLXRodW9jLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUteHVhdC1saW5oLXRodW9jLXBvcHVwL3BoaWV1LXh1YXQtbGluaC10aHVvYy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC15ZXUtY2F1LWxpbmgtdGh1b2MvcGhpZXUteHVhdC1saW5oLXRodW9jLXBvcHVwL3BoaWV1LXh1YXQtbGluaC10aHVvYy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.ts": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.ts ***!
          \************************************************************************************************************************************************/
        /*! exports provided: PhieuXuatLinhThuocPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuXuatLinhThuocPopupComponent", function () { return PhieuXuatLinhThuocPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var PhieuXuatLinhThuocPopupComponent = /** @class */ (function () {
                function PhieuXuatLinhThuocPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                PhieuXuatLinhThuocPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                PhieuXuatLinhThuocPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                PhieuXuatLinhThuocPopupComponent.prototype.getSharedPrintForm = function () {
                    //   let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
                    //   return new Promise(resolve => {
                    //     resolve(source);
                    //     this.close();
                    //   });
                    // }
                    var dataReplaceemplateHeaderGayNghien = "";
                    var templateHeaderGayNghien = "<div class=\'wrap\'><div class=\'content\'>PHIẾU XUẤT THUỐC</div></div>";
                    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.data, templateHeaderGayNghien, '');
                    return new Promise(function (resolve) {
                        resolve(dataReplaceemplateHeaderGayNghien);
                    });
                };
                PhieuXuatLinhThuocPopupComponent.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                return PhieuXuatLinhThuocPopupComponent;
            }());
            PhieuXuatLinhThuocPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PhieuXuatLinhThuocPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-xuat-linh-thuoc-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-xuat-linh-thuoc-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-xuat-linh-thuoc-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuXuatLinhThuocPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts ***!
          \*******************************************************/
        /*! exports provided: EnumLoaiPhieuLinh */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumLoaiPhieuLinh", function () { return EnumLoaiPhieuLinh; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EnumLoaiPhieuLinh;
            (function (EnumLoaiPhieuLinh) {
                EnumLoaiPhieuLinh[EnumLoaiPhieuLinh["LinhDuTru"] = 1] = "LinhDuTru";
                EnumLoaiPhieuLinh[EnumLoaiPhieuLinh["LinhBu"] = 2] = "LinhBu";
                EnumLoaiPhieuLinh[EnumLoaiPhieuLinh["LinhChoBenhNhan"] = 3] = "LinhChoBenhNhan";
            })(EnumLoaiPhieuLinh || (EnumLoaiPhieuLinh = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=default~ke-toan-duyet-dieu-chuyen-duoc-pham-duyet-dieu-chuyen-duoc-pham-module~nhap-xuat-duoc-pham-d~5df4f306-es2015.js.map
//# sourceMappingURL=default~ke-toan-duyet-dieu-chuyen-duoc-pham-duyet-dieu-chuyen-duoc-pham-module~nhap-xuat-duoc-pham-d~5df4f306-es5.js.map
//# sourceMappingURL=default~ke-toan-duyet-dieu-chuyen-duoc-pham-duyet-dieu-chuyen-duoc-pham-module~nhap-xuat-duoc-pham-d~5df4f306-es5.js.map