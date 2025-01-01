(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-kiem-soat-nhiem-khuan-duyet-yeu-cau-linh-ksnk-duyet-yeu-cau-linh-ksnk-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.html": 
        /*!***************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.html ***!
          \***************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <label *ngIf=\"yeuCauLinh.DuocDuyet == false\" fxFlex=\"100\" class=\"status-yeu-cau-linh ycl-tu-choi\">Lý do: {{yeuCauLinh.LyDoKhongDuyet}}</label>\n\n    <app-textbox id=\"loai\" fxFlex=\"10\" fxFlex.sm=\"10\"  [(model)]=\"yeuCauLinh.TenLoaiPhieuLinh\"\n        maxlength=\"250\" label=\"Loại\" disabled={{true}}\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-combobox id=\"linhTuKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\"\n        label=\"Lĩnh từ kho\" disabled={{true}}\n        [(model)]=\"yeuCauLinh.KhoXuatId\" [modelText]=\"yeuCauLinh.TenKhoXuat\"\n        [validationerror]=\"'LinhTuKho' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox id=\"linhVeKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\"\n        [(model)]=\"yeuCauLinh.KhoNhapId\" [modelText]=\"yeuCauLinh.TenKhoNhap\"\n        label=\"Lĩnh về kho\" disabled={{true}}\n        [validationerror]=\"'LinhVeKho' | validationerror:validationErrors\">\n    </app-combobox>\n    \n\n    <app-combobox id=\"nguoiYeuCau\" \n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [(model)]=\"yeuCauLinh.NhanVienYeuCauId\" [modelText]=\"yeuCauLinh.TenNhanVienYeuCau\"\n        url=\"YeuCauLinhVatTu/GetListNhanVien\" label=\"Người yêu cầu\" disabled={{true}}\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-datepicker id=\"ngayYeuCau\" \n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [(model)]=\"yeuCauLinh.NgayYeuCau\"\n        [required]=\"true\" label=\"Ngày yêu cầu\" disabled={{true}}\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <ng-container *ngIf=\"yeuCauLinh.DuocDuyet != null\">\n        <app-combobox id=\"nguoiPheDuyet\" fxFlex=\"15%\" fxFlex.sm=\"15%\" maxlength=\"250\" [label]=\"yeuCauLinh.DuocDuyet == true ? 'Người phê duyệt' : 'Người từ chối duyệt'\"\n            disabled={{true}} [(model)]=\"yeuCauLinh.NhanVienDuyetId\" [modelText]=\"yeuCauLinh.TenNhanVienDuyet\"\n            url=\"YeuCauLinhVatTu/GetListNhanVien\" [required]=\"true\"\n            [validationerror]=\"'NguoiPheDuyet' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-datepicker id=\"ngayDuyet\" fxFlex=\"10\" fxFlex.sm=\"10\" [(model)]=\"yeuCauLinh.NgayDuyet\" [required]=\"true\"\n            [label]=\"yeuCauLinh.DuocDuyet == true ? 'Ngày duyệt' : 'Ngày từ chối duyệt'\" \n            disabled={{true}} [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\">\n        </app-datepicker>\n    </ng-container>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\"\n        disabled={{true}} [(model)]=\"yeuCauLinh.GhiChu\"\n        label=\"Ghi chú\" minHeight=\"20\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin vật tư</h3>\n    \n    <app-grid *ngIf=\"yeuCauLinh.Id != null && yeuCauLinh.DuocDuyet != false\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n        [allowSortDefault]=\"true\" [documentType]=\"documentype\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n        [pageable]=\"false\" [detailTemplate]=\"detailTemplate\" [additionalSearchString]=\"yeuCauLinhId + '-' + loai\"\n        [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\" #gridKSNK>\n    </app-grid>\n    <ng-template #detailTemplate let-dataItem>\n        <app-grid style=\"width: 1px;\" [gridColumns]=\"gridChildColumns\" [allowSortDefault]=\"true\"\n            [documentType]=\"documentype\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n            [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"true\" [pageSize]=\"5\"\n            [additionalSearchString]=\"dataItem.YeuCauLinhVatTuId + ';' + dataItem.VatTuBenhVienId + ';' + dataItem.LaBHYT + ';' + loai\"\n            [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [sort]=\"sortChild\">\n        </app-grid>\n    </ng-template>\n    <app-grid *ngIf=\"yeuCauLinh.Id != null && yeuCauLinh.DuocDuyet == false\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n        [allowSortDefault]=\"true\" [documentType]=\"documentype\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n        [pageable]=\"false\" [additionalSearchString]=\"yeuCauLinhId + '-' + loai\"\n        [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\" >\n    </app-grid>\n\n    <ng-template #slXuatTemplate let-dataItem>\n        <app-textboxnumeric [decimals]=\"1\" class=\"no-label\" [max]=\"9999\">\n        </app-textboxnumeric>\n    </ng-template>\n\n    <ng-container *ngIf=\"yeuCauLinh.Id != null &&  yeuCauLinh.DuocDuyet != false\">\n        <app-combobox id=\"nguoiXuat\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiXuatKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiXuatKho\" [idWhere]=\"yeuCauLinh.NguoiXuatKhoId\"\n            url=\"YeuCauLinhVatTu/GetListNhanVien\" label=\"Người xuất\"\n            [validationerror]=\"'NguoiXuatKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-combobox id=\"nguoiNhan\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiNhapKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiNhapKho\" [idWhere]=\"yeuCauLinh.NguoiNhapKhoId\"\n            url=\"YeuCauLinhVatTu/GetListNhanVien\" label=\"Người nhận\"\n            [validationerror]=\"'NguoiNhapKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n    </ng-container>\n\n    <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n        <strong>{{rowIndex + 1}}</strong>\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.html": 
        /*!*************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.html ***!
          \*************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập Xuất',Path:''}\n                ,{Title:'KSNK',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Duyệt Yêu Cầu Lĩnh',Path:'/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Duyệt yêu cầu lĩnh bù</h2>\n                <b *ngIf=\"trangThai != undefined\" class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">{{trangThai.TenTrangThai}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-duyet-yeu-cau-linh-ksnk-bu-shared [documentype]=\"documentype\" \n                    (trangThaiYeuCau)=\"getTrangThaiYeuCau($event)\"\n                    [validationErrors]=\"validationErrors\">\n                </app-duyet-yeu-cau-linh-ksnk-bu-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                    <ng-container *ngIf=\"trangThai != undefined && trangThai.DuocDuyet == null\">\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"duyet()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i>Duyệt</button>\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"khongDuyet()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i>Không duyệt</button>\n                    </ng-container>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                            alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.html": 
        /*!*****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.html ***!
          \*****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''}\n            ,{Title:'KSNK',Path:''}\n            ,{Title:'Dự Trù Lĩnh',Path:''}\n            ,{Title:'Duyệt Yêu Cầu Lĩnh',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [checkboxAble]=\"false\" pageSize=\"50\" urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageDSLinhKSNKForGridAsync\" [detailTemplate]=\"detailTemplate\"\n                [allowSortDefault]=\"true\">\n                <!--  -->\n            </app-grid>\n        </div>\n        <span fxFlex=\"20px\"></span>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <!-- <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,1)\" class=\"ml-2\"\n                    [(model)]=\"kiemTraDanhSachDaChoGoi\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đang chờ gởi\">\n                </app-checkbox> -->\n                <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,2)\" class=\"ml-2\"\n                    [(model)]=\"kiemTraDanhSachDangChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đang chờ duyệt\">\n                </app-checkbox>\n                <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,3)\" class=\"ml-2\"\n                    [(model)]=\"kiemTraDanhSachTuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Từ chối duyệt\">\n                </app-checkbox>\n                <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,4)\" class=\"ml-2\"\n                    [(model)]=\"kiemTraDanhSachDaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đã duyệt\">\n                </app-checkbox>\n                <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                        (ngModelChange)=\"searchChanges()\"\n                        placeholder=\"Nhập từ khóa(Người yêu cầu,Lĩnh từ kho,Lĩnh về kho,Người duyệt)\" />\n                </div>\n                <span fxFlex=\"5px\"></span>\n                <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" class=\"mt-1 on-header\" (blur)=\"blur($event)\"\n                    [(model)]=\"timKiemTuNgay.NgayYeuCauRangDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n                    (keyup)=\"onKeyDateRange($event)\" (modelChange)=\"changRange($event)\">\n                </app-daterangepicker>\n                <span fxFlex=\"5px\"></span>\n                <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" label=\"Duyệt từ ngày - đến ngày\"\n                    class=\"mt-1 on-header\" (blur)=\"blur($event)\" (keyup)=\"onKeyDateRange($event)\"\n                    [(model)]=\"timKiemTuNgay.NgayDuyetRangDate\" (modelChange)=\"changRange($event)\">\n                </app-daterangepicker>\n                <!-- <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button> -->\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" style=\"margin-left: auto;\" fxFlex=\"none\" class=\"mr-2\"\n                    mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n                <button (click)=\"exportExcel()\" fxFlex=\"2%\" fxFlex.sm=\"2%\" mat-icon-button kendoTooltip\n                    title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n            </div>\n        </ng-template>\n        <ng-template #actionTemplate let-dataItem>\n            <div kendoTooltip>\n                <button type=\"button\" mat-raised-button mat-button\n                    (click)=\"xemChiTietYeuCauLinh(dataItem.Id, dataItem.LoaiPhieuLinh,dataItem.DaGui,dataItem.LoaiDuocPhamHayVatTu)\" style=\"margin: 1px;\">\n                    Xem chi tiết\n                </button>\n            </div>\n        </ng-template>\n        <ng-template #TinhTrangTemplate let-dataItem>\n            <span *ngIf=\"dataItem.DuocDuyet == null\" style=\"color: orange;\">{{dataItem.TinhTrang}}</span>\n            <span *ngIf=\"dataItem.DuocDuyet == false\" style=\"color: red;\">{{dataItem.TinhTrang}}</span>\n            <span *ngIf=\"dataItem.DuocDuyet == true\" style=\"color: green;\">{{dataItem.TinhTrang}}</span>\n        </ng-template>\n        <ng-template #ngayYeuCauTemplate let-dataItem>\n            {{dataItem.NgayYeuCauHienThi}}\n        </ng-template>\n        <ng-template #ngayDuyetTemplate let-dataItem>\n            {{dataItem.NgayDuyetHienThi}}\n        </ng-template>\n        <ng-template #maTNTemplate let-dataItem>\n            <a (click)=\"xemChiTietYeuCauLinh(dataItem.Id, dataItem.LoaiPhieuLinh,dataItem.DaGui,dataItem.LoaiDuocPhamHayVatTu)\">{{dataItem.MaPL}}</a>\n        </ng-template>\n        <ng-template #groupTemplate let-dataItem>\n            <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n                *ngIf=\"dataItem.DuocDuyet == true\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button (click)=\"InDuocPham(dataItem.Id,dataItem.LoaiPhieuLinh,dataItem.Loai)\" mat-menu-item\n                        *ngIf=\"dataItem.DuocDuyet == true\">\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n        <ng-template #detailTemplate let-dataItem>\n             <!-- 1 linh du tru null ,(true,fale)-> # null-->\n                <!-- Vật tư -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruChuaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet == null && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruDaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet != null && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n                <!-- end vật tư -->\n                <!-- Dược phẩm -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruChuaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet == null && dataItem.LoaiDuocPhamHayVatTu == true\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhKSNK/GetDataDSYeuCauLinhDuocPhamKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSYeuCauLinhDuocPhamKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruDaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet != null && dataItem.LoaiDuocPhamHayVatTu == true\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhKSNK/GetDataDSYeuCauLinhDuocPhamKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSYeuCauLinhDuocPhamKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n                <!--end Dược phẩm -->\n                <!-- end linh du tru null ,(true,fale)-> # null-->\n              \n                <!-- 2 linh bu vật tu -->\n                <!-- cho duyet -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == null && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" [detailTemplate]=\"detailTemplateKSNKLinhBu\">\n                </app-grid>\n                <!-- da duyet vật tu-->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuDaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == true && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" [detailTemplate]=\"detailTemplateKSNKLinhBu\">\n                </app-grid>\n                <!-- tù chối vật tu-->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuTuChoiColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == false && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n\n\n                <!-- 2 linh bu DP-->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == null && dataItem.LoaiDuocPhamHayVatTu == true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" >\n                </app-grid>\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuDaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == true && dataItem.LoaiDuocPhamHayVatTu == true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" >\n                </app-grid>\n                <!-- <span *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet ==false && dataItem.LoaiDuocPhamHayVatTu == true\"> ba ba</span> -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuTuChoiColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet ==false && dataItem.LoaiDuocPhamHayVatTu == true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n                <!-- 2 linh bu DP-->\n        </ng-template> \n         <!-- child linh bu -->\n         <ng-template #detailTemplateKSNKLinhBu let-dataItem>\n            <!-- vật tư -->\n            <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == null && dataItem.LoaiDuocPhamHayVatTu == false\" [gridColumns]=\"gridChildChildLinhBuColumns\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.KSNKBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhveKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                [autoHeight]=\"true\">\n            </app-grid>\n            <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == true && dataItem.LoaiDuocPhamHayVatTu == false\"\n                [gridColumns]=\"gridChildChildLinhBuDaDuyetColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhKSNK/GetDataDSYeuCauLinhKSNKChildChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSYeuCauLinhKSNKChildChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.KSNKBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhveKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                [autoHeight]=\"true\">\n            </app-grid>\n               <!-- vật tư -->\n            <!-- dược Phẩm -->\n            <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == null && dataItem.LoaiDuocPhamHayVatTu == true\" [gridColumns]=\"gridChildChildLinhBuColumns\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                [autoHeight]=\"true\">\n            </app-grid>\n            <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == true && dataItem.LoaiDuocPhamHayVatTu == true\"\n                [gridColumns]=\"gridChildChildLinhBuDaDuyetColumns\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\"\n                urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhKSNKChildChildForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhKSNKChildChildForGridAsync\"\n                additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                [autoHeight]=\"true\">\n            </app-grid>\n            <!-- dược Phẩm -->\n        </ng-template>\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n        <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.html": 
        /*!***********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.html ***!
          \***********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <label *ngIf=\"yeuCauLinh.DuocDuyet == false\" fxFlex=\"100\" class=\"status-yeu-cau-linh ycl-tu-choi\">Lý do: {{yeuCauLinh.LyDoKhongDuyet}}</label>\n\n    <app-textbox id=\"loai\" fxFlex=\"10\" fxFlex.sm=\"10\" \n        maxlength=\"250\" label=\"Loại\" disabled={{true}} [(model)]=\"yeuCauLinh.TenLoaiPhieuLinh\"\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-combobox id=\"linhTuKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\"\n        [(model)]=\"yeuCauLinh.KhoXuatId\" [modelText]=\"yeuCauLinh.TenKhoXuat\"\n        url=\"DonViTinh/GetDanhSachDonViTinh\" disabled={{true}}\n        label=\"Lĩnh từ kho\"\n        [validationerror]=\"'LinhTuKho' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox id=\"linhVeKho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\"\n        [(model)]=\"yeuCauLinh.KhoNhapId\" [modelText]=\"yeuCauLinh.TenKhoNhap\"\n        url=\"DonViTinh/GetDanhSachDonViTinh\" disabled={{true}}\n        label=\"Lĩnh về kho\"\n        [validationerror]=\"'LinhVeKho' | validationerror:validationErrors\">\n    </app-combobox>\n    \n    <app-combobox id=\"nguoiYeuCau\"\n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '30%' : '15%'\"\n        [(model)]=\"yeuCauLinh.NhanVienYeuCauId\" [modelText]=\"yeuCauLinh.TenNhanVienYeuCau\"\n        url=\"YeuCauLinhVatTu/GetListNhanVien\" label=\"Người yêu cầu\" disabled={{true}}\n        [required]=\"true\" [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-datepicker id=\"ngayYeuCau\"  disabled={{true}}\n        [fxFlex]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [fxFlex.sm]=\"yeuCauLinh.DuocDuyet == null ? '20%' : '10%'\"\n        [(model)]=\"yeuCauLinh.NgayYeuCau\"\n        [required]=\"true\" label=\"Ngày yêu cầu\"\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <ng-container *ngIf=\"yeuCauLinh.DuocDuyet != null\">\n        <app-combobox id=\"nguoiPheDuyet\" fxFlex=\"15%\" fxFlex.sm=\"15%\" maxlength=\"250\" [label]=\"yeuCauLinh.DuocDuyet == true ? 'Người phê duyệt' : 'Người từ chối duyệt'\"\n            disabled={{true}} [(model)]=\"yeuCauLinh.NhanVienDuyetId\" [modelText]=\"yeuCauLinh.TenNhanVienDuyet\"\n            url=\"YeuCauLinhVatTu/GetListNhanVien\" [required]=\"true\"\n            [validationerror]=\"'NguoiPheDuyet' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-datepicker id=\"ngayDuyet\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [required]=\"true\" [label]=\"yeuCauLinh.DuocDuyet == true ? 'Ngày duyệt' : 'Ngày từ chối duyệt'\" disabled={{true}}\n            [(model)]=\"yeuCauLinh.NgayDuyet\" [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\">\n        </app-datepicker>\n    </ng-container>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\"\n        [(model)]=\"yeuCauLinh.GhiChu\" disabled={{true}}\n        label=\"Ghi chú\" minHeight=\"20\" \n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n        <!-- [disabled]=\"yeuCauLinh.DuocDuyet != null\" -->\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Danh sách KSNK</h3>\n\n    <app-grid *ngIf=\"yeuCauLinh.Id != null\" #gridKSNK fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n        [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n        [pageable]=\"false\" [groups]=\"groups\">\n    </app-grid>\n\n    <ng-template #actionTemplate let-dataItem>\n        <div class=\"text-center\" kendoTooltip>\n            <button color=\"primary\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\" mat-icon-button kendoTooltip title=\"Sửa\" type=\"button\">\n                <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n            </button>\n            <button color=\"primary\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\">\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n    <ng-template #slXuatTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric *ngIf=\"!dataItem.isTuChoi\" class=\"no-label\" [min]=\"1\" [max]=\"dataItem.SoLuong\" [disabled]=\"yeuCauLinh.DuocDuyet != null\"\n            class=\"no-label\" label=\" \" [(model)]=\"dataItem.SoLuongCoTheXuat\" required=\"true\" label=\" \"\n            (modelChange)=\"changeSoLuongCoTheXuat($event, dataItem)\"\n            [validationerror]=\"'DuyetYeuCauLinhVatTuChiTiets['+rowIndex+'].SoLuongCoTheXuat' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <ng-container *ngIf=\"dataItem.isTuChoi\">{{dataItem.SoLuongCoTheXuat}}</ng-container>\n    </ng-template>\n\n    <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n        <strong>{{rowIndex + 1}}</strong>\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-container *ngIf=\"yeuCauLinh.Id != null &&  yeuCauLinh.DuocDuyet != false\">\n        <app-combobox id=\"nguoiXuat\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiXuatKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiXuatKho\" [idWhere]=\"yeuCauLinh.NguoiXuatKhoId\"\n            url=\"YeuCauLinhVatTu/GetListNhanVien\" label=\"Người xuất\"\n            [validationerror]=\"'NguoiXuatKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-combobox id=\"nguoiNhan\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"\n            [disabled]=\"yeuCauLinh.DuocDuyet != null\" [(model)]=\"yeuCauLinh.NguoiNhapKhoId\"\n            [modelText]=\"yeuCauLinh.TenNguoiNhapKho\" [idWhere]=\"yeuCauLinh.NguoiNhapKhoId\"\n            url=\"YeuCauLinhVatTu/GetListNhanVien\" label=\"Người nhận\"\n            [validationerror]=\"'NguoiNhapKhoId' | validationerror:validationErrors\">\n        </app-combobox>\n    </ng-container>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.html": 
        /*!*********************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.html ***!
          \*********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập Xuất',Path:''}\n                ,{Title:'KSNK',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Duyệt Yêu Cầu Lĩnh',Path:'/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Duyệt yêu cầu lĩnh thường</h2>\n                <b *ngIf=\"trangThai != undefined\" class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">{{trangThai.TenTrangThai}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-duyet-yeu-cau-linh-ksnk-thuong-shared [documentype]=\"documentype\" \n                    (trangThaiYeuCau)=\"getTrangThaiYeuCau($event)\" (hideDuyetbtn)=\"anHienButtonDuyet($event)\"\n                    [validationErrors]=\"validationErrors\">\n                </app-duyet-yeu-cau-linh-ksnk-thuong-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                    <ng-container *ngIf=\"trangThai != undefined && trangThai.DuocDuyet == null\">\n                        <button type=\"button\" *ngIf=\"!loading\" [disabled]=\"isHideDuyet\" (click)=\"duyet()\" color=\"primary\"\n                            mat-raised-button><i class=\"ft-save\"></i>Duyệt</button>\n                        <button type=\"button\" *ngIf=\"!loading\" (click)=\"khongDuyet()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i>Không duyệt</button>\n                    </ng-container>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.html": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.html ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\" [innerHtml]=\"Message\"></div>\n    \n        <app-textarea id=\"lyDo\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\"\n            minHeight=\"20\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close(null)\">Không</button>\n    <button mat-button color=\"primary\" [disabled]=\"!lyDo\" (click)=\"close('ok')\">Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.html": 
        /*!*************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.html ***!
          \*************************************************************************************************************************************************************************************************/
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
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.scss": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.scss ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1eWV0LXlldS1jYXUtbGluaC1rc25rL2R1eWV0LXlldS1jYXUtbGluaC1rc25rLWJ1LXNoYXJlZC9kdXlldC15ZXUtY2F1LWxpbmgta3Nuay1idS1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.ts": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.ts ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhKSNKBuSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhKSNKBuSharedComponent", function () { return DuyetYeuCauLinhKSNKBuSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.model.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var DuyetYeuCauLinhKSNKBuSharedComponent = /** @class */ (function () {
                function DuyetYeuCauLinhKSNKBuSharedComponent(apiService, route, notificationService) {
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
                    this.urlGetDataGrid = "YeuCauLinhKSNK/GetKSNKYeuCauLinhBuDataForGrid";
                    this.urlGetTotalPageGrid = "YeuCauLinhKSNK/GetKSNKYeuCauLinhBuTotalPageForGrid";
                    this.urlGetDataGridChild = "YeuCauLinhKSNK/GetBenhNhanTheoKSNKCanLinhBuDataForGrid";
                    this.urlGetTotalPageGridChild = "YeuCauLinhKSNK/GetBenhNhanTheoKSNKCanLinhBuTotalPageForGrid";
                    this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.loai = false;
                }
                DuyetYeuCauLinhKSNKBuSharedComponent.prototype.ngOnInit = function () {
                    this.yeuCauLinh = new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_5__["DuyetYeuCauLinhKSNK"]();
                    var loai = this.route.snapshot.params.value;
                    if (loai !== undefined && loai !== null) {
                        this.loai = loai;
                    }
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.yeuCauLinhId = id;
                        this.getById(id);
                    }
                    // this.gridColumns = [
                    //   { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                    //   { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
                    //   { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
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
                        { Field: "NgayDieuTriString", Title: "Ngày điều  trị", Width: 120 },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
                        { Field: "SoLuong", Title: "SL", Width: 80 }
                    ];
                };
                DuyetYeuCauLinhKSNKBuSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    var model = {
                        YeuCauLinhId: id,
                        LoaiDuocPhamHayVatTu: this.loai
                    };
                    this.apiService.post("YeuCauLinhKSNK/GetYeuCauLinhKSNKBu", model)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            debugger;
                            _this.yeuCauLinh = resultData;
                            _this.trangThaiYeuCau.emit(new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_5__["TrangThaiDuyetYeuCauLinh"](_this.yeuCauLinh.TenTrangThai, _this.yeuCauLinh.DuocDuyet));
                            _this.gridColumns = [
                                { Field: "STT", Title: "#", Width: 60, Template: _this.sttTemplate },
                                { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
                                { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: _this.nhomGroupHeaderTemplate },
                                { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                                { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
                                { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
                                { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Hidden: _this.yeuCauLinh.DuocDuyet != null },
                                { Field: "SoLuongCanBu", Title: "SL Cần bù", Width: 100 }
                            ];
                            _this.trangThaiYeuCau.emit(new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_5__["TrangThaiDuyetYeuCauLinh"](_this.yeuCauLinh.TenTrangThai, _this.yeuCauLinh.DuocDuyet));
                            _this.gridDataSource = {
                                data: _this.yeuCauLinh.DuyetYeuCauLinhVatTuChiTiets,
                                total: _this.yeuCauLinh.DuyetYeuCauLinhVatTuChiTiets.length
                            };
                            if (_this.gridKSNK != undefined) {
                                _this.gridKSNK.gridDataSource = _this.gridDataSource;
                                _this.gridKSNK.setDataSource();
                            }
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                DuyetYeuCauLinhKSNKBuSharedComponent.prototype.getData = function () {
                    return this.yeuCauLinh;
                };
                return DuyetYeuCauLinhKSNKBuSharedComponent;
            }());
            DuyetYeuCauLinhKSNKBuSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKBuSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKBuSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhKSNKBuSharedComponent.prototype, "documentype", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhKSNKBuSharedComponent.prototype, "validationErrors", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetYeuCauLinhKSNKBuSharedComponent.prototype, "hideDuyetbtn", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetYeuCauLinhKSNKBuSharedComponent.prototype, "trangThaiYeuCau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKSNK', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
            ], DuyetYeuCauLinhKSNKBuSharedComponent.prototype, "gridKSNK", void 0);
            DuyetYeuCauLinhKSNKBuSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-ksnk-bu-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-ksnk-bu-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-bu-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.scss")).default]
                })
            ], DuyetYeuCauLinhKSNKBuSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.scss": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.scss ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1eWV0LXlldS1jYXUtbGluaC1rc25rL2R1eWV0LXlldS1jYXUtbGluaC1rc25rLWJ1L2R1eWV0LXlldS1jYXUtbGluaC1rc25rLWJ1LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.ts": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.ts ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhKSNKBuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhKSNKBuComponent", function () { return DuyetYeuCauLinhKSNKBuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _khong_duyet_popup_khong_duyet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../khong-duyet-popup/khong-duyet.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.ts");
            /* harmony import */ var _phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.model.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_bu_shared_duyet_yeu_cau_linh_ksnk_bu_shared_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var DuyetYeuCauLinhKSNKBuComponent = /** @class */ (function () {
                function DuyetYeuCauLinhKSNKBuComponent(dialog, location, apiService, notificationService, router, route) {
                    this.dialog = dialog;
                    this.location = location;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.loading = false;
                    this.baseRoute = "/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-ksnk";
                    this.yeuCauLinhKSNK = new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_8__["DuyetYeuCauLinhKSNK"]();
                    this.loai = false;
                }
                DuyetYeuCauLinhKSNKBuComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].DuyetYeuCauLinhKSNK;
                    var loai = this.route.snapshot.params.value;
                    if (loai !== undefined && loai !== null) {
                        this.loai = loai;
                        this.yeuCauLinhKSNK.LoaiDuocPhamHayVatTu = this.loai;
                    }
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThaiDanhSach = v;
                    });
                };
                DuyetYeuCauLinhKSNKBuComponent.prototype.duyet = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn phê duyệt cho lần lĩnh bù vật tư này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.yeuCauLinhKSNK = _this.shared.getData();
                            _this.yeuCauLinhKSNK.LoaiDuocPhamHayVatTu = _this.loai;
                            _this.apiService.post("YeuCauLinhKSNK/XuLyDuyetYeuCauLinhKSNKBu", _this.yeuCauLinhKSNK)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                if (resultData != undefined && resultData != null) {
                                    _this.dialog.open(_phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_7__["PhieuXuatLinhKSNKPopupComponent"], {
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
                DuyetYeuCauLinhKSNKBuComponent.prototype.khongDuyet = function () {
                    var _this = this;
                    this.dialog.open(_khong_duyet_popup_khong_duyet_component__WEBPACK_IMPORTED_MODULE_6__["KhongDuyetComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc từ chối duyệt cho lần lĩnh bù vật tư này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== null) {
                            _this.yeuCauLinhKSNK = _this.shared.getData();
                            _this.yeuCauLinhKSNK.LyDoKhongDuyet = result;
                            _this.yeuCauLinhKSNK.LoaiDuocPhamHayVatTu = _this.loai;
                            // xử lý ko duyệt
                            _this.apiService.post("YeuCauLinhKSNK/XuLyKhongDuyetYeuCauLinhKSNKBu", _this.yeuCauLinhKSNK)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Không duyệt"]));
                                _this.quayVeDanhSach();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                DuyetYeuCauLinhKSNKBuComponent.prototype.cancel = function () {
                    this.router.navigate(['/nhap-xuat/ksnk/duyet-yeu-cau-linh-ksnk'], { queryParams: { holdQuery: true } });
                };
                DuyetYeuCauLinhKSNKBuComponent.prototype.getTrangThaiYeuCau = function (event) {
                    if (event != undefined && event != null) {
                        this.trangThai = event;
                    }
                };
                DuyetYeuCauLinhKSNKBuComponent.prototype.quayVeDanhSach = function () {
                    this.location.back();
                };
                return DuyetYeuCauLinhKSNKBuComponent;
            }());
            DuyetYeuCauLinhKSNKBuComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duyet_yeu_cau_linh_ksnk_bu_shared_duyet_yeu_cau_linh_ksnk_bu_shared_component__WEBPACK_IMPORTED_MODULE_9__["DuyetYeuCauLinhKSNKBuSharedComponent"], { static: true })
            ], DuyetYeuCauLinhKSNKBuComponent.prototype, "shared", void 0);
            DuyetYeuCauLinhKSNKBuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-ksnk-bu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-ksnk-bu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-bu.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.scss")).default]
                })
            ], DuyetYeuCauLinhKSNKBuComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.scss": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.scss ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1eWV0LXlldS1jYXUtbGluaC1rc25rL2R1eWV0LXlldS1jYXUtbGluaC1rc25rLWxpc3QvZHV5ZXQteWV1LWNhdS1saW5oLWtzbmstbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.ts": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.ts ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhKSNKListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhKSNKListComponent", function () { return DuyetYeuCauLinhKSNKListComponent; });
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
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/linh-vat-tu-thuoc.enum */ "./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            var DuyetYeuCauLinhKSNKListComponent = /** @class */ (function () {
                function DuyetYeuCauLinhKSNKListComponent(dialog, router, apiService, authService, notificationService, cd, route, location) {
                    this.dialog = dialog;
                    this.router = router;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.cd = cd;
                    this.route = route;
                    this.location = location;
                    this.baseRoute = "/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk";
                    this.gridColumns = [];
                    this.gridChildLinhDuTruColumns = [];
                    this.gridChildLinhDuTruChuaDuyetColumns = [];
                    this.gridChildLinhDuTruDaDuyetColumns = [];
                    this.gridChildLinhBuColumns = [];
                    this.gridChildLinhBuDaDuyetColumns = [];
                    this.gridChildLinhBuTuChoiColumns = [];
                    this.gridChildChildLinhBuColumns = [];
                    this.gridChildLinhBenhNhanColumns = [];
                    this.gridChildChildLinhBenhNhanColumns = [];
                    this.gridChildChildLinhBenhNhanDaDuyetColumns = [];
                    this.gridChildChildLinhBenhNhanTuChoiColumns = [];
                    this.gridChildChildLinhBuDaDuyetColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
                    this.urlGetData = "";
                    this.urlGetTotalPage = "";
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.validationErrors = [];
                    this.timKiemTuNgay = new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["SearchNgay"]();
                    this.trangThaiCheck = 4;
                    this.kiemTraDanhSachDangChoDuyet = true;
                    this.kiemTraDanhSachTuChoiDuyet = false;
                    this.kiemTraDanhSachDaDuyet = false;
                    this.exportQueryInfoQueryInfo = new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["ExportQueryInfoQueryInfo"]();
                    this.stringAdditionalSearchString = "";
                    this.holdQuery = null;
                    this.groups = [{ field: 'TenKhoLinh' }];
                    this.groupsYCTN = [{ field: 'MaYeuCauTiepNhan' }];
                }
                DuyetYeuCauLinhKSNKListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DuyetYeuCauLinhKSNK;
                    var start = new Date();
                    start.setHours(0, 0, 0, 0);
                    var end = new Date();
                    this.timKiemTuNgay.NgayYeuCauRangDate.startDate = start;
                    this.timKiemTuNgay.NgayYeuCauRangDate.endDate = end;
                    this.gridChild.sort = [{
                            field: 'DuocDuyet',
                            dir: 'asc'
                        }];
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThai = v;
                    });
                    this.linhKSNKGridVo = new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["LinhKSNKGridVo"]();
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
                        { Field: "", Title: "", Width: 50, Sortable: true, Template: this.groupTemplate },
                    ];
                    //------------lĩnh bù-----------------------------------------------------------------------------
                    this.gridChildLinhBuColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 180, ShowTooltip: true },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
                        { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
                        { Field: "SoLuongYeuCauDaDuyet", Title: "SL cần bù", Width: 60 }
                    ];
                    this.gridChildLinhBuDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 180, ShowTooltip: true },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
                        { Field: "SoLuongYeuCauDaDuyet", Title: "SL cần bù", Width: 60 }
                    ];
                    this.gridChildLinhBuTuChoiColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
                        //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
                        { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
                        { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
                        { Field: "SoLuongCanBu", Title: "SL yêu cầu", Width: 100 },
                    ];
                    //------------lĩnh bù-----------------------------------------------------------------------------
                    this.gridChildChildLinhBuColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: true },
                        { Field: "MaBN", Title: "Mã người bệnh", Width: 120 },
                        { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
                        { Field: "DVKham", Title: "DV khám", Width: 200, Sortable: true },
                        { Field: "BSKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKe", Title: "ngày kê", Width: 100 },
                        { Field: "SLDanhSachDuyet", Title: "Sl", Width: 120, Sortable: true }
                    ];
                    this.gridChildChildLinhBuDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "MaTN", Title: "Mã tiếp nhận", Width: 120, Sortable: true },
                        { Field: "MaBN", Title: "Mã bệnh nhân", Width: 120 },
                        { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
                        { Field: "DVKham", Title: "Dịch vụ khám", Width: 200, Sortable: true },
                        { Field: "BSKeToa", Title: "Bs kê vật tư", Width: 120, Sortable: true },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120, Sortable: true },
                        { Field: "NgayKe", Title: "Ngày kê", Width: 120, Sortable: true },
                        { Field: "SLCanBu", Title: "SL cần bù", Width: 60 },
                        { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
                        { Field: "SL", Title: "SL được duyệt", Width: 120, Sortable: true }
                    ];
                    //------------------------------lĩnh dự trù-------------------------------------------------------------------------
                    this.gridChildLinhDuTruChuaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "TenKhoLinh", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Nhom", Title: "Loại", Width: 80, ShowTooltip: true },
                        { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 120, Sortable: true },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
                        { Field: "SLTon", Title: "SL tồn", Width: 120 },
                        { Field: "SoLuongYc", Title: "Số lượng yêu cầu", Width: 120 }
                    ];
                    this.gridChildLinhDuTruDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
                        { Field: "TenKhoLinh", Title: "", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Nhom", Title: "Loại", Width: 80, ShowTooltip: true },
                        { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 120, Sortable: true },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
                        // { Field: "SLTon", Title: "SL tồn", Width: 120 },
                        { Field: "SoLuongYc", Title: "Số lượng yêu cầu", Width: 120 }
                    ];
                    //--------------------------end lĩnh dự trù--------------------------------------------------------------------------------
                    //---------------end dự trù----------------------------------------------------------------------------
                    this.gridChildLinhBenhNhanColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120, Sortable: true },
                        { Field: "MaBenhNhan", Title: "Mã NB", Width: 120, Sortable: true },
                        { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
                        { Field: "SoLuong", Title: "SL", Width: 80, Sortable: true }
                    ];
                    this.gridChildChildLinhBenhNhanColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, Sortable: true },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
                        { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
                        { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
                        { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
                        { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
                    ];
                    this.gridChildChildLinhBenhNhanDaDuyetColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, Sortable: true },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
                        { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
                        { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
                        { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
                        { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
                        //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
                        { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
                    ];
                    this.gridChildChildLinhBenhNhanTuChoiColumns = [
                        { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
                        { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, Sortable: true },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
                        { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
                        { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
                        //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
                        { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
                    ];
                    if (this.route.snapshot.queryParams.holdQuery != null) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null &&
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].getItem('additionalSearchStringLVT') != null) {
                        this.TimKiemId();
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].setItem('additionalSearchStringLVT', null);
                        if (this.timKiemTuNgay.NgayYeuCauRangDate.startDate != null) {
                            this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
                        }
                        else {
                            this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = null;
                        }
                        if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
                            this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
                        }
                        else {
                            this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = null;
                        }
                        var NgayDuyetRangDateStartDate = null;
                        var NgayDuyetRangDateEndDate = null;
                        var NgayYeuCauRangDateStartDate = "\"" + this.linhKSNKGridVo.NgayYeuCauRangDateStartDate + "\"";
                        var NgayYeuCauRangDateEndDate = "\"" + this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd + "\"";
                        var Searching = null;
                        var queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
                            + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoDuyet\":" + this.linhKSNKGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhKSNKGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhKSNKGridVo.DaDuyet + " }";
                        this.gridChild.additionalSearchString = queryString;
                    }
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.TimKiemId = function () {
                    var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].getItem("additionalSearchStringLVT");
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
                            + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoDuyet\":" + this.linhKSNKGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhKSNKGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhKSNKGridVo.DaDuyet + " }";
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
                        this.linhKSNKGridVo.DangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
                        this.linhKSNKGridVo.TuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
                        this.linhKSNKGridVo.DaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
                        this.gridChild.additionalSearchString = searching;
                        this.gridChild.additionalSearchString = searching;
                    }
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.blur = function (event) {
                    this.TimkiemNangCao();
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.TimkiemNangCao();
                    }
                    if (event.key == "Backspace") {
                        this.TimkiemNangCao();
                    }
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.onKeyDateRange = function (event) {
                    if (event.key == 'Enter') {
                        this.TimkiemNangCao();
                    }
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.changRange = function (event) {
                    this.TimkiemNangCao();
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.searchChanges = function () {
                    if (this.searchString == null || this.searchString == "") {
                        if (this.holdQuery != null) {
                            this.TimkiemNangCao();
                        }
                    }
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.TimkiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.timKiemTuNgay.NgayYeuCauRangDate.startDate != null) {
                        this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = null;
                    }
                    if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
                        this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = null;
                    }
                    if (this.timKiemTuNgay.NgayDuyetRangDate.startDate != null) {
                        this.linhKSNKGridVo.NgayDuyetRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.linhKSNKGridVo.NgayDuyetRangDateStartDate = null;
                    }
                    if (this.timKiemTuNgay.NgayDuyetRangDate.endDate != null) {
                        this.linhKSNKGridVo.NgayDuyetRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.linhKSNKGridVo.NgayDuyetRangDateStartEnd = null;
                    }
                    if (this.timKiemTuNgay.TrangThaiCheck != null) {
                        this.linhKSNKGridVo.TrangThaiCheck = this.timKiemTuNgay.TrangThaiCheck;
                    }
                    if (this.searchString != null || this.searchString != undefined) {
                        this.linhKSNKGridVo.Searching = this.searchString;
                    }
                    else {
                        this.linhKSNKGridVo.Searching = null;
                    }
                    var queryStringSearch = JSON.stringify(this.linhKSNKGridVo);
                    this.stringAdditionalSearchString = queryStringSearch;
                    this.gridChild._additionalSearchString = queryStringSearch;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].setItem("additionalSearchStringLVT", queryStringSearch);
                    this.gridChild.search();
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.checkTrangThaiDCT = function (event, type) {
                    this.cd.detectChanges();
                    if (type == 2) {
                        this.linhKSNKGridVo.DangChoDuyet = event;
                    }
                    if (type == 3) {
                        this.linhKSNKGridVo.TuChoiDuyet = event;
                    }
                    if (type == 4) {
                        this.linhKSNKGridVo.DaDuyet = event;
                    }
                    this.TimkiemNangCao();
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.xemChiTietYeuCauLinh = function (id, loaiPhieuLinh, daGui, loai) {
                    switch (loaiPhieuLinh) {
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_17__["EnumLoaiPhieuLinh"].LinhDuTru:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DuyetYeuCauLinhKSNK, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update)) {
                                this.router.navigate([this.baseRoute + "/duyet-phieu-linh-ksnk-thuong/" + id + "/" + loai], { queryParams: { holdQuery: true } });
                                break;
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                            }
                        case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_17__["EnumLoaiPhieuLinh"].LinhBu:
                            if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DuyetYeuCauLinhKSNK, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update)) {
                                this.router.navigate([this.baseRoute + "/duyet-phieu-linh-ksnk-bu/" + id + "/" + loai], { queryParams: { holdQuery: true } });
                                break;
                            }
                            else {
                                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                            }
                    }
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    self.exportQueryInfoQueryInfo.Sort = this.gridChild.sort.map(function (item) {
                        return new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_23__["Sort"](item.field, item.dir);
                    });
                    self.exportQueryInfoQueryInfo.AdditionalSearchString = this.stringAdditionalSearchString;
                    // if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
                    self.apiService.postExportExcel('YeuCauLinhKSNK/ExportDanhSachDuyetLinhKSNK', self.exportQueryInfoQueryInfo).subscribe(function (resultData) {
                        self.closePopupLoadingData();
                        var dateTimeNow = new Date();
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DanhSachDuyetLinhKSNK' + dateTimeNow.getFullYear() + '.xlsx');
                    }, function (err) {
                        self.notificationService.showError(err.Message);
                    });
                    // } else {
                    //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    // }
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_22__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DuyetYeuCauLinhKSNKListComponent.prototype.clearSearch = function () { };
                DuyetYeuCauLinhKSNKListComponent.prototype.InDuocPham = function (dataItem, loaiPhieuLinh, loai) {
                    var _this = this;
                    // [Description("Lĩnh dự trù")]
                    // LinhDuTru = 1,
                    // [Description("Lĩnh bù")]
                    // LinhBu = 2,
                    // [Description("Lĩnh cho người bệnh")]
                    // LinhChoBenhNhan = 3,
                    if (loai == true) {
                        this.apiService.post("YeuCauLinhDuocPham/InYeuCauLinhDuocPhamTrucTiep?yeuCauLinhId=" + dataItem + "&loaiPhieuLinh=" + 1)
                            .subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.dialog.open(_phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_21__["PhieuXuatLinhKSNKPopupComponent"], {
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
                    }
                    else {
                        this.apiService.post("YeuCauLinhVatTu/InYeuCauLinhVatTuTrucTiep?yeuCauLinhId=" + dataItem + "&loaiPhieuLinh=" + 1)
                            .subscribe(function (resultData) {
                            if (resultData != undefined && resultData != null) {
                                _this.dialog.open(_phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_21__["PhieuXuatLinhKSNKPopupComponent"], {
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
                    }
                };
                return DuyetYeuCauLinhKSNKListComponent;
            }());
            DuyetYeuCauLinhKSNKListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_24__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "TinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "groupTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "PLTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slXuatTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "slXuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
            ], DuyetYeuCauLinhKSNKListComponent.prototype, "gridChild", void 0);
            DuyetYeuCauLinhKSNKListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-ksnk-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-ksnk-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-list.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.scss")).default]
                })
            ], DuyetYeuCauLinhKSNKListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-routing.module.ts": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-routing.module.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhKSNKRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhKSNKRoutingModule", function () { return DuyetYeuCauLinhKSNKRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_list_duyet_yeu_cau_linh_ksnk_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_thuong_duyet_yeu_cau_linh_ksnk_thuong_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_bu_duyet_yeu_cau_linh_ksnk_bu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.ts");
            var routes = [
                {
                    path: '',
                    component: _duyet_yeu_cau_linh_ksnk_list_duyet_yeu_cau_linh_ksnk_list_component__WEBPACK_IMPORTED_MODULE_3__["DuyetYeuCauLinhKSNKListComponent"],
                    data: {
                        title: 'Danh Sách Duyệt Yêu Cầu Lĩnh Vật Tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetYeuCauLinhKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'duyet-phieu-linh-ksnk-thuong/:id/:value',
                    component: _duyet_yeu_cau_linh_ksnk_thuong_duyet_yeu_cau_linh_ksnk_thuong_component__WEBPACK_IMPORTED_MODULE_7__["DuyetYeuCauLinhKSNKThuongComponent"],
                    data: {
                        title: 'Duyệt Phiếu Lĩnh Thường',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetYeuCauLinhKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                },
                {
                    path: 'duyet-phieu-linh-ksnk-bu/:id/:value',
                    component: _duyet_yeu_cau_linh_ksnk_bu_duyet_yeu_cau_linh_ksnk_bu_component__WEBPACK_IMPORTED_MODULE_8__["DuyetYeuCauLinhKSNKBuComponent"],
                    data: {
                        title: 'Duyệt Phiếu Lĩnh Bù',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetYeuCauLinhKSNK,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                }
            ];
            var DuyetYeuCauLinhKSNKRoutingModule = /** @class */ (function () {
                function DuyetYeuCauLinhKSNKRoutingModule() {
                }
                return DuyetYeuCauLinhKSNKRoutingModule;
            }());
            DuyetYeuCauLinhKSNKRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuyetYeuCauLinhKSNKRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.scss": 
        /*!*********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.scss ***!
          \*********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1eWV0LXlldS1jYXUtbGluaC1rc25rL2R1eWV0LXlldS1jYXUtbGluaC1rc25rLXRodW9uZy1zaGFyZWQvZHV5ZXQteWV1LWNhdS1saW5oLWtzbmstdGh1b25nLXNoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.ts": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.ts ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhKSNKThuongSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhKSNKThuongSharedComponent", function () { return DuyetYeuCauLinhKSNKThuongSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
            /* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.model.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var DuyetYeuCauLinhKSNKThuongSharedComponent = /** @class */ (function () {
                function DuyetYeuCauLinhKSNKThuongSharedComponent(apiService, route, notificationService) {
                    this.apiService = apiService;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.gridDataSource = {};
                    this.gridColumns = [];
                    // groups: GroupDescriptor[] = [{ field: 'Nhom' }];
                    this.groups = [{ field: 'TenKhoLinh', dir: 'asc', aggregates: [] }];
                    this.loai = false;
                    this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                DuyetYeuCauLinhKSNKThuongSharedComponent.prototype.ngOnInit = function () {
                    this.yeuCauLinh = new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_6__["DuyetYeuCauLinhKSNK"]();
                    this.yeuCauLinh.DuyetYeuCauLinhVatTuChiTiets = new Array();
                    var loai = this.route.snapshot.params.value;
                    if (loai !== undefined && loai !== null) {
                        this.loai = loai;
                    }
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                    }
                    // this.gridColumns = [
                    //   { Field: "STT", Title: "#", Width: 50 , Template: this.sttTemplate},
                    //   { Field: "TenKSNK", Title: "Tên vật tư", MinWidth: 120 },
                    //   { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },     
                    //   { Field: "DVT", Title: "ĐVT", Width: 100 },
                    //   { Field: "HangSanXuat", Title: "Hãng SX", Width: 200 },
                    //   { Field: "NuocSanXuat", Title: "Nước SX", Width: 120 },
                    //   { Field: "SLTon", Title: "SL Tồn", Width: 120 },
                    //   { Field: "SoLuong", Title: "SL Yêu Cầu", Width: 120 },
                    //   { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Template: this.slXuatTemplate }
                    // ]
                };
                DuyetYeuCauLinhKSNKThuongSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    var model = {
                        YeuCauLinhId: id,
                        LoaiDuocPhamHayVatTu: this.loai
                    };
                    this.apiService.post("YeuCauLinhKSNK/GetYeuCauLinhKSNKThuong", model)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.yeuCauLinh = resultData;
                            _this.gridColumns = [
                                { Field: "STT", Title: "#", Width: 50, Template: _this.sttTemplate },
                                { Field: "TenKhoLinh", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: _this.nhomGroupHeaderTemplate },
                                { Field: "NhomKSNK", Title: "Loại", Width: 100 },
                                { Field: "TenVatTu", Title: "DP/VT/KSNK", MinWidth: 120 },
                                { Field: "DVT", Title: "ĐVT", Width: 100 },
                                { Field: "HangSanXuat", Title: "Hãng SX", Width: 200 },
                                { Field: "NuocSanXuat", Title: "Nước SX", Width: 120 },
                                { Field: "SLTon", Title: "SL Tồn", Width: 120, Hidden: _this.yeuCauLinh.DuocDuyet != null },
                                { Field: "SoLuong", Title: "SL Yêu Cầu", Width: 120 },
                                { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Template: _this.slXuatTemplate }
                            ];
                            _this.trangThaiYeuCau.emit(new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_6__["TrangThaiDuyetYeuCauLinh"](_this.yeuCauLinh.TenTrangThai, _this.yeuCauLinh.DuocDuyet));
                            _this.gridDataSource = {
                                data: _this.yeuCauLinh.DuyetYeuCauLinhVatTuChiTiets,
                                total: _this.yeuCauLinh.DuyetYeuCauLinhVatTuChiTiets.length
                            };
                            if (_this.gridKSNK != undefined) {
                                _this.gridKSNK.gridDataSource = _this.gridDataSource;
                                _this.gridKSNK.setDataSource();
                            }
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                DuyetYeuCauLinhKSNKThuongSharedComponent.prototype.getData = function () {
                    return this.yeuCauLinh;
                };
                DuyetYeuCauLinhKSNKThuongSharedComponent.prototype.changeSoLuongCoTheXuat = function (event, dataItem) {
                    if (event != undefined && event != null) {
                        if (event < dataItem.SoLuong) {
                            this.hideDuyetbtn.emit(true);
                        }
                        else if (event > dataItem.SoLuong) {
                            dataItem.SoLuongCoTheXuat = dataItem.SoLuong;
                        }
                        else {
                            var index = this.gridDataSource.data.findIndex(function (x) { return x.SoLuongCoTheXuat < x.SoLuong; });
                            this.hideDuyetbtn.emit(index != -1);
                        }
                    }
                };
                return DuyetYeuCauLinhKSNKThuongSharedComponent;
            }());
            DuyetYeuCauLinhKSNKThuongSharedComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slXuatTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKThuongSharedComponent.prototype, "slXuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKThuongSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], DuyetYeuCauLinhKSNKThuongSharedComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKSNK', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], static: false })
            ], DuyetYeuCauLinhKSNKThuongSharedComponent.prototype, "gridKSNK", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhKSNKThuongSharedComponent.prototype, "documentype", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuyetYeuCauLinhKSNKThuongSharedComponent.prototype, "validationErrors", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetYeuCauLinhKSNKThuongSharedComponent.prototype, "hideDuyetbtn", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DuyetYeuCauLinhKSNKThuongSharedComponent.prototype, "trangThaiYeuCau", void 0);
            DuyetYeuCauLinhKSNKThuongSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-ksnk-thuong-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-ksnk-thuong-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-thuong-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.scss")).default]
                })
            ], DuyetYeuCauLinhKSNKThuongSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.scss": 
        /*!*******************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.scss ***!
          \*******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1eWV0LXlldS1jYXUtbGluaC1rc25rL2R1eWV0LXlldS1jYXUtbGluaC1rc25rLXRodW9uZy9kdXlldC15ZXUtY2F1LWxpbmgta3Nuay10aHVvbmcuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.ts": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.ts ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhKSNKThuongComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhKSNKThuongComponent", function () { return DuyetYeuCauLinhKSNKThuongComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _khong_duyet_popup_khong_duyet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../khong-duyet-popup/khong-duyet.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.ts");
            /* harmony import */ var _phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.model.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_thuong_shared_duyet_yeu_cau_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var DuyetYeuCauLinhKSNKThuongComponent = /** @class */ (function () {
                function DuyetYeuCauLinhKSNKThuongComponent(dialog, location, apiService, notificationService, router, route) {
                    this.dialog = dialog;
                    this.location = location;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.loading = false;
                    this.isHideDuyet = false;
                    this.baseRoute = "/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk";
                    this.yeuCauLinhKSNK = new _duyet_yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_8__["DuyetYeuCauLinhKSNK"]();
                }
                DuyetYeuCauLinhKSNKThuongComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].DuyetYeuCauLinhKSNK;
                    this.route
                        .queryParams
                        .subscribe(function (v) {
                        _this.trangThaiDanhSach = v;
                    });
                };
                DuyetYeuCauLinhKSNKThuongComponent.prototype.duyet = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn phê duyệt cho lần lĩnh dược phẩm này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.yeuCauLinhKSNK = _this.shared.getData();
                            _this.yeuCauLinhKSNK.DuyetYeuCauLinhVatTuChiTiets = _this.yeuCauLinhKSNK.DuyetYeuCauLinhVatTuChiTiets.sort(function (a, b) { return (a.Nhom > b.Nhom || a.Index > b.Index) ? 1 : -1; });
                            _this.apiService.post("YeuCauLinhKSNK/XuLyDuyetYeuCauLinhKSNKThuong", _this.yeuCauLinhKSNK)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                if (resultData != undefined && resultData != null) {
                                    _this.dialog.open(_phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_7__["PhieuXuatLinhKSNKPopupComponent"], {
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
                DuyetYeuCauLinhKSNKThuongComponent.prototype.khongDuyet = function () {
                    var _this = this;
                    this.dialog.open(_khong_duyet_popup_khong_duyet_component__WEBPACK_IMPORTED_MODULE_6__["KhongDuyetComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Bạn có chắc từ chối duyệt cho lần lĩnh vật tư này không?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result !== null) {
                            _this.yeuCauLinhKSNK = _this.shared.getData();
                            _this.yeuCauLinhKSNK.LyDoKhongDuyet = result;
                            // xử lý ko duyệt
                            _this.apiService.post("YeuCauLinhKSNK/XuLyKhongDuyetYeuCauLinhKSNKThuong", _this.yeuCauLinhKSNK)
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
                DuyetYeuCauLinhKSNKThuongComponent.prototype.cancel = function () {
                    this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk'], { queryParams: { holdQuery: true } });
                };
                DuyetYeuCauLinhKSNKThuongComponent.prototype.getTrangThaiYeuCau = function (event) {
                    if (event != undefined && event != null) {
                        this.trangThai = event;
                    }
                };
                DuyetYeuCauLinhKSNKThuongComponent.prototype.anHienButtonDuyet = function (event) {
                    if (event) {
                        this.isHideDuyet = true;
                    }
                    else {
                        this.isHideDuyet = false;
                    }
                };
                DuyetYeuCauLinhKSNKThuongComponent.prototype.quayVeDanhSach = function () {
                    this.location.back();
                };
                return DuyetYeuCauLinhKSNKThuongComponent;
            }());
            DuyetYeuCauLinhKSNKThuongComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duyet_yeu_cau_linh_ksnk_thuong_shared_duyet_yeu_cau_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_9__["DuyetYeuCauLinhKSNKThuongSharedComponent"], { static: true })
            ], DuyetYeuCauLinhKSNKThuongComponent.prototype, "shared", void 0);
            DuyetYeuCauLinhKSNKThuongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-yeu-cau-linh-ksnk-thuong',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-yeu-cau-linh-ksnk-thuong.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-thuong.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.scss")).default]
                })
            ], DuyetYeuCauLinhKSNKThuongComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.model.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.model.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: SearchNgay, rangeDate, DuyetYeuCauLinhKSNK, DuyetYeuCauLinhVatTuChiTiet, TrangThaiDuyetYeuCauLinh, ExportQueryInfoQueryInfo, LinhKSNKGridVo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNgay", function () { return SearchNgay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhKSNK", function () { return DuyetYeuCauLinhKSNK; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhVatTuChiTiet", function () { return DuyetYeuCauLinhVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiDuyetYeuCauLinh", function () { return TrangThaiDuyetYeuCauLinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function () { return ExportQueryInfoQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhKSNKGridVo", function () { return LinhKSNKGridVo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            var DuyetYeuCauLinhKSNK = /** @class */ (function () {
                function DuyetYeuCauLinhKSNK(Id, KhoXuatId, TenKhoXuat, KhoNhapId, TenKhoNhap, LoaiPhieuLinh, TenLoaiPhieuLinh, NhanVienYeuCauId, TenNhanVienYeuCau, NhanVienDuyetId, TenNhanVienDuyet, NgayYeuCau, NgayDuyet, GhiChu, SlYeuCau, NguoiXuatKhoId, TenNguoiXuatKho, NguoiNhapKhoId, TenNguoiNhapKho, isHideDuyet, DuocDuyet, TenTrangThai, LyDoKhongDuyet, DuyetYeuCauLinhVatTuChiTiets, LastModified, LoaiDuocPhamHayVatTu) {
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
                    if (SlYeuCau === void 0) { SlYeuCau = null; }
                    if (NguoiXuatKhoId === void 0) { NguoiXuatKhoId = null; }
                    if (TenNguoiXuatKho === void 0) { TenNguoiXuatKho = null; }
                    if (NguoiNhapKhoId === void 0) { NguoiNhapKhoId = null; }
                    if (TenNguoiNhapKho === void 0) { TenNguoiNhapKho = null; }
                    if (isHideDuyet === void 0) { isHideDuyet = false; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    if (TenTrangThai === void 0) { TenTrangThai = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (DuyetYeuCauLinhVatTuChiTiets === void 0) { DuyetYeuCauLinhVatTuChiTiets = []; }
                    if (LastModified === void 0) { LastModified = null; }
                    if (LoaiDuocPhamHayVatTu === void 0) { LoaiDuocPhamHayVatTu = null; }
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
                    this.SlYeuCau = SlYeuCau;
                    this.NguoiXuatKhoId = NguoiXuatKhoId;
                    this.TenNguoiXuatKho = TenNguoiXuatKho;
                    this.NguoiNhapKhoId = NguoiNhapKhoId;
                    this.TenNguoiNhapKho = TenNguoiNhapKho;
                    this.isHideDuyet = isHideDuyet;
                    this.DuocDuyet = DuocDuyet;
                    this.TenTrangThai = TenTrangThai;
                    this.LyDoKhongDuyet = LyDoKhongDuyet;
                    this.DuyetYeuCauLinhVatTuChiTiets = DuyetYeuCauLinhVatTuChiTiets;
                    this.LastModified = LastModified;
                    this.LoaiDuocPhamHayVatTu = LoaiDuocPhamHayVatTu;
                }
                return DuyetYeuCauLinhKSNK;
            }());
            var DuyetYeuCauLinhVatTuChiTiet = /** @class */ (function () {
                function DuyetYeuCauLinhVatTuChiTiet(VatTuBenhVienId, LaVatTuBhyt, TenDuocPham, NongDoHamLuong, HoatChat, DuongDung, Dvt, HangSanXuat, NuocSanXuat, SlTon, SoLuong, Nhom, Index, LoaiDuocPhamHayVatTu) {
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = null; }
                    if (LaVatTuBhyt === void 0) { LaVatTuBhyt = null; }
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (NongDoHamLuong === void 0) { NongDoHamLuong = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
                    if (Dvt === void 0) { Dvt = null; }
                    if (HangSanXuat === void 0) { HangSanXuat = null; }
                    if (NuocSanXuat === void 0) { NuocSanXuat = null; }
                    if (SlTon === void 0) { SlTon = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (Index === void 0) { Index = null; }
                    if (LoaiDuocPhamHayVatTu === void 0) { LoaiDuocPhamHayVatTu = null; }
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.LaVatTuBhyt = LaVatTuBhyt;
                    this.TenDuocPham = TenDuocPham;
                    this.NongDoHamLuong = NongDoHamLuong;
                    this.HoatChat = HoatChat;
                    this.DuongDung = DuongDung;
                    this.Dvt = Dvt;
                    this.HangSanXuat = HangSanXuat;
                    this.NuocSanXuat = NuocSanXuat;
                    this.SlTon = SlTon;
                    this.SoLuong = SoLuong;
                    this.Nhom = Nhom;
                    this.Index = Index;
                    this.LoaiDuocPhamHayVatTu = LoaiDuocPhamHayVatTu;
                }
                return DuyetYeuCauLinhVatTuChiTiet;
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
            var LinhKSNKGridVo = /** @class */ (function () {
                function LinhKSNKGridVo(NgayYeuCauRangDateStartDate, NgayYeuCauRangDateStartEnd, NgayDuyetRangDateStartDate, NgayDuyetRangDateStartEnd, Searching, TrangThaiCheck, DangChoDuyet, TuChoiDuyet, DaDuyet) {
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
                return LinhKSNKGridVo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.module.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.module.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: DuyetYeuCauLinhKSNKModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetYeuCauLinhKSNKModule", function () { return DuyetYeuCauLinhKSNKModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-routing.module */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-routing.module.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_bu_duyet_yeu_cau_linh_ksnk_bu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_bu_shared_duyet_yeu_cau_linh_ksnk_bu_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_list_duyet_yeu_cau_linh_ksnk_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_thuong_duyet_yeu_cau_linh_ksnk_thuong_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component.ts");
            /* harmony import */ var _duyet_yeu_cau_linh_ksnk_thuong_shared_duyet_yeu_cau_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component.ts");
            /* harmony import */ var _khong_duyet_popup_khong_duyet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./khong-duyet-popup/khong-duyet.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.ts");
            var DuyetYeuCauLinhKSNKModule = /** @class */ (function () {
                function DuyetYeuCauLinhKSNKModule() {
                }
                return DuyetYeuCauLinhKSNKModule;
            }());
            DuyetYeuCauLinhKSNKModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _duyet_yeu_cau_linh_ksnk_bu_duyet_yeu_cau_linh_ksnk_bu_component__WEBPACK_IMPORTED_MODULE_4__["DuyetYeuCauLinhKSNKBuComponent"],
                        _duyet_yeu_cau_linh_ksnk_bu_shared_duyet_yeu_cau_linh_ksnk_bu_shared_component__WEBPACK_IMPORTED_MODULE_5__["DuyetYeuCauLinhKSNKBuSharedComponent"],
                        _duyet_yeu_cau_linh_ksnk_list_duyet_yeu_cau_linh_ksnk_list_component__WEBPACK_IMPORTED_MODULE_6__["DuyetYeuCauLinhKSNKListComponent"],
                        _duyet_yeu_cau_linh_ksnk_thuong_duyet_yeu_cau_linh_ksnk_thuong_component__WEBPACK_IMPORTED_MODULE_7__["DuyetYeuCauLinhKSNKThuongComponent"],
                        _duyet_yeu_cau_linh_ksnk_thuong_shared_duyet_yeu_cau_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_8__["DuyetYeuCauLinhKSNKThuongSharedComponent"],
                        _khong_duyet_popup_khong_duyet_component__WEBPACK_IMPORTED_MODULE_9__["KhongDuyetComponent"], _phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuXuatLinhKSNKPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_13__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                        _duyet_yeu_cau_linh_ksnk_routing_module__WEBPACK_IMPORTED_MODULE_3__["DuyetYeuCauLinhKSNKRoutingModule"]
                    ],
                    entryComponents: [
                        _khong_duyet_popup_khong_duyet_component__WEBPACK_IMPORTED_MODULE_9__["KhongDuyetComponent"],
                        _phieu_xuat_linh_ksnk_popup_phieu_xuat_linh_ksnk_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuXuatLinhKSNKPopupComponent"]
                    ]
                })
            ], DuyetYeuCauLinhKSNKModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.scss": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.scss ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1eWV0LXlldS1jYXUtbGluaC1rc25rL2tob25nLWR1eWV0LXBvcHVwL2tob25nLWR1eWV0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: KhongDuyetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhongDuyetComponent", function () { return KhongDuyetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var KhongDuyetComponent = /** @class */ (function () {
                function KhongDuyetComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.Title = null;
                    this.Message = null;
                    this.lyDo = null;
                }
                KhongDuyetComponent.prototype.ngOnInit = function () {
                    this.Title = this.data.Title;
                    this.Message = this.data.Message;
                };
                KhongDuyetComponent.prototype.close = function (data) {
                    if (data == 'ok') {
                        this.dialogRef.close(this.lyDo);
                    }
                    else {
                        this.dialogRef.close(null);
                    }
                };
                return KhongDuyetComponent;
            }());
            KhongDuyetComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            KhongDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-khong-duyet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./khong-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./khong-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/khong-duyet-popup/khong-duyet.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], KhongDuyetComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.scss": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.scss ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL2R1eWV0LXlldS1jYXUtbGluaC1rc25rL3BoaWV1LXh1YXQtbGluaC1rc25rLXBvcHVwL3BoaWV1LXh1YXQtbGluaC1rc25rLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.ts": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.ts ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: PhieuXuatLinhKSNKPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuXuatLinhKSNKPopupComponent", function () { return PhieuXuatLinhKSNKPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var PhieuXuatLinhKSNKPopupComponent = /** @class */ (function () {
                function PhieuXuatLinhKSNKPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                PhieuXuatLinhKSNKPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                PhieuXuatLinhKSNKPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                PhieuXuatLinhKSNKPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
                    var templateHeaderGayNghien = "<div class=\'wrap\'><div class=\'content\'>PHIẾU XUẤT THUỐC</div></div>";
                    source = source.replace(templateHeaderGayNghien, "");
                    return new Promise(function (resolve) {
                        resolve(source);
                        _this.close();
                    });
                };
                return PhieuXuatLinhKSNKPopupComponent;
            }());
            PhieuXuatLinhKSNKPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PhieuXuatLinhKSNKPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-xuat-linh-ksnk-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-xuat-linh-ksnk-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-xuat-linh-ksnk-popup.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuXuatLinhKSNKPopupComponent);
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
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-duyet-yeu-cau-linh-ksnk-duyet-yeu-cau-linh-ksnk-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-duyet-yeu-cau-linh-ksnk-duyet-yeu-cau-linh-ksnk-module-es5.js.map
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-duyet-yeu-cau-linh-ksnk-duyet-yeu-cau-linh-ksnk-module-es5.js.map