(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-doan-kham-doan-ls-tiep-nhan-kham-suc-khoe-kham-doan-ls-tiep-nhan-kham-suc-khoe-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.html": 
        /*!**********************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.html ***!
          \**********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Khám Đoàn', Path: '/kham-doan'}\n        ,{Title:'DS Lịch Sử Tiếp Nhận Khám Sức Khỏe', Path: '/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe', queryParams: {holdQuery : true}}\n        ,{Title:'Chi Tiết Hợp Đồng Khám Sức Khỏe',Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi Tiết Hợp Đồng Khám Sức Khỏe</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <div class=\"border-b\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                    fxLayoutGap.lt-sm=\"0\">\n                    <app-combobox id=\"congTy\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n                        bind=\"true\" [disabled]=\"true\" url=\"KhamDoan/GetCongTys\"  \n                        [(model)]=\"chiTietHopDongKhamSucKhoe.CongTyId\" \n                        >\n                    </app-combobox>\n                    <app-combobox id=\"hopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số hợp đồng\" [required]=\"true\"  \n                         bind=\"true\" [disabled]=\"true\" url=\"KhamDoan/GetHopDong\"  [queryInfo]=\"queryInfoCongTy\"\n                        [(model)]=\"chiTietHopDongKhamSucKhoe.HopDongId\"\n                        >\n                    </app-combobox>\n                    <app-datepicker id=\"NgayHopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày hợp đồng\"\n                        [required]=\"true\" [disabled]=\"true\" [(model)]=\"chiTietHopDongKhamSucKhoe.NgayHopDong\"\n                        >\n                    </app-datepicker>\n                    <app-dropdownlist id=\"loaiHopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Loại hợp đồng\"\n                        url=\"KhamDoan/GetLoaiHopDongs\" [required]=\"true\" [queryInfo]=\"queryInfoLoaihopDong\"\n                        [(model)]=\"chiTietHopDongKhamSucKhoe.LoaiHopDong\" bind=\"true\" [disabled]=\"true\" \n                        >\n                    </app-dropdownlist>\n                    <app-dropdownlist id=\"trangThai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Trạng thái\"\n                        url=\"KhamDoan/GetTrangThaiHopDongs\" bind=\"true\" [disabled]=\"true\" [queryInfo]=\"queryInfoTrangThai\"\n                        [(model)]=\"chiTietHopDongKhamSucKhoe.TrangThai\" [required]=\"true\"\n                        >\n                    </app-dropdownlist>\n\n                    <app-textboxnumeric id=\"soBenhNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Số người bệnh\"\n                        [decimals]=\"0\" [format]=\"format\" [required]=\"true\" [disabled]=\"true\"\n                        [(model)]=\"chiTietHopDongKhamSucKhoe.SoBenhNhan\"\n                        >\n                    </app-textboxnumeric>\n                    <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày hiệu lực\"\n                        [required]=\"true\" [disabled]=\"true\" [(model)]=\"chiTietHopDongKhamSucKhoe.NgayHieuLuc\"\n                        >\n                    </app-datepicker>\n                    <app-datepicker id=\"NgayKetThuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày kết thúc\"\n                        [required]=\"true\" [disabled]=\"true\" [(model)]=\"chiTietHopDongKhamSucKhoe.NgayKetThuc\"\n                        >\n                    </app-datepicker>\n\n                    <h3 fxFlex=\"100%\" class=\"sub-title\">Danh Sách Nhân Viên</h3>\n                    <div fxFlex=\"100%\">\n                        <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\">\n                            <app-checkbox [(model)]=\"timKiemObj.TrangThai.HuyKham\" id=\"HuyKham\" label=\"Hủy khám\"\n                                class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                            </app-checkbox>\n                            <app-checkbox [(model)]=\"timKiemObj.TrangThai.DaKham\" id=\"daKham\" label=\"Đã khám\"\n                                class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                            </app-checkbox>\n                            <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\"\n                                fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                <input [formControl]=\"searchCtrl\"\n                                    class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                    name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\" (keyup)=\"onKey($event)\"\n                                    (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                            </div>\n                            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                                (click)=\"clearSearch()\">\n                                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                            </button>\n                        </div>\n                    </div>\n                    <app-grid #gridNhanVien fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [sort]=\"sort\"\n                        [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentype\"\n                        [useAddDeault]=\"false\" [showStt]=\"true\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"true\"\n                        urlGetData=\"KhamDoan/GetDataNhanVienTheoHopDongForGrid\"  \n                        urlGetTotalPage=\"KhamDoan/GetTotalNhanVienTheoHopDongForGrid\" [additionalSearchString]=\"additionalSearchString\">\n                    </app-grid>\n\n                    <ng-template #tenNhanVienTemplate let-dataItem>\n                        <a (click)=\"showPopupChiTietNhanVien(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaNhanVien}}\">\n                                {{dataItem.TenNhanVien}}</p>\n                        </a>\n                    </ng-template>\n                    <ng-template #tinhTrangTemplate let-dataItem>\n                        <div style=\"position: relative;\">\n                            <span [ngClass]=\"{'orangeText': dataItem.TinhTrang == 1,\n                                    'greenText': dataItem.TinhTrang == 5,\n                                    'redText': dataItem.TinhTrang == 6}\">\n                              {{dataItem.TenTinhTrang}}\n                            </span>\n                        </div>\n                    </ng-template>\n               \n                    <ng-template #actionTemplate let-dataItem>\n                        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                            [matMenuTriggerFor]=\"actionsMenu\" color=\"primary\" mat-icon-button kendoTooltip title=\"In hồ sơ\" type=\"button\">\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        </button>\n                        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <ng-template let-customer=\"customer\" matMenuContent>\n                                <!-- <button (click)=\"Xem(dataItem.Id, dataItem.LoaiPhieuLinh)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                                    <span>Sửa</span>\n                                </button> -->\n                                <button (click)=\"inHoSo(1,dataItem.Id)\" mat-menu-item >\n                                    <span>Sổ KSK định kỳ</span>\n                                </button>\n                                <button (click)=\"inHoSo(2,dataItem.Id)\" mat-menu-item>\n                                    <span>Phiếu đăng ký KSK</span>\n                                </button>\n                                <button (click)=\"inHoSo(3,dataItem.Id)\" mat-menu-item [style.display]=\"dataItem.TinhTrang != 6?'block':'none'\">\n                                    <span>Kết quả KSK</span>\n                                </button>\n                            </ng-template>\n                        </mat-menu>\n                    </ng-template>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                    <button type=\"button\" mat-button class=\"mr-1 align-right-fx\" (click)=\"quayLai()\"><i\n                            class=\"ft-arrow-left\"></i>Quay lại</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component.html": 
        /*!**************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component.html ***!
          \**************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Lựa chọn</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 120px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        Bạn muốn in hồ sơ nào:\n        <ul fxFlex=\"100%\">\n            <li>\n                <app-checkbox id=\"hoSoKham\" name=\"hoSoKham\" fxFlex.lt-md=\"auto\" label=\"Giấy KSK\">\n                </app-checkbox>\n            </li>\n            <li>\n                <app-checkbox id =\"phieuChiDinh\" name=\"phieuChiDinh\" fxFlex.lt-md=\"auto\" label=\"Phiếu đăng ký KSK\">\n                </app-checkbox>\n            </li>\n            <li>\n                <app-checkbox id =\"phieuHuongDan\" name=\"phieuHuongDan\" fxFlex.lt-md=\"auto\" label=\"Bảng hướng dẫn KSK\">\n                </app-checkbox>\n            </li>\n        </ul>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\">Không</button>\n    <!-- // xử lý xuất file pdf -->\n    <button mat-raised-button mat-button color=\"primary\">In</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.html": 
        /*!**********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.html ***!
          \**********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Lịch Sử Tiếp Nhận Khám Sức Khỏe',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridDaHoanThanhKham [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\"\n                [allowSortDefault]=\"false\" [searchString]=\"timKiemObj.SearchString\" [showStt]=\"true\"\n                urlGetData=\"KhamDoan/GetDataLichSuTiepNhanKhamSucKhoeForGridAsync\" [headerTemplate]=\"headerTemplate\"\n                urlGetTotalPage=\"KhamDoan/GetTotalPageLichSuTiepNhanKhamSucKhoeForGridAsync\">\n            </app-grid>\n        </div>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"100%\" class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\">\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <!-- <app-datepicker fxFlex=\"220px\" [(model)]=\"timKiemObj.NgayBatDau\" id=\"NgayBatDau\"\n                        (modelChange)=\"thoiDiemTNChange()\" label=\"Ngày bắt đầu\" class=\"ml-2 on-header\"\n                        (keyup)=\"onKey($event)\">\n                    </app-datepicker>\n                    <app-datepicker fxFlex=\"220px\" [(model)]=\"timKiemObj.NgayKetThuc\" #tiepnhanden\n                        id=\"ThoiDiemTiepNhanDenFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Ngày kết thúc\"\n                        class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                    </app-datepicker> -->\n                    <app-daterangepicker id=\"NgayBatDauDenNgayKetThuc\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\" [(model)]=\"timKiemObj.FromToDate\" label=\"Ngày bắt đầu - ngày kết thúc\" (modelChange)=\"changeDateSearch($event)\">\n                    </app-daterangepicker>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n                    <!-- <button type=\"button\" color=\"primary\" (click)=\"timKiemNangCao()\" class=\"ml-2\"\n                        mat-raised-button>Tìm</button> -->\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\"\n                                    color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"mr-6\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\"\n                        (click)=\"xuLyXuatExcel()\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #tenHopDongTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem)\">\n                <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.TenHopDong}}\">{{dataItem.TenHopDong}}\n                </p>\n            </a>\n        </ng-template>\n\n        <ng-template #soLuongBenhNhanTemplate let-dataItem>\n            {{dataItem.SoLuongBenhNhan | number}}\n        </ng-template>\n        <ng-template #soLuongBenhNhanDaDenTemplate let-dataItem>\n            {{dataItem.SoBenhNhanDaDen | number}}\n        </ng-template>\n        <ng-template #ngayBatDauKhamTemplate let-dataItem>\n            {{dataItem.NgayBatDauKhamDisplay}}\n        </ng-template>\n        <ng-template #ngayKetThucKhamTemplate let-dataItem>\n            {{dataItem.NgayKetThucKhamDisplay}}\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.html": 
        /*!******************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.html ***!
          \******************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.scss": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.scss ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbHMtdGllcC1uaGFuLWtoYW0tc3VjLWtob2Uva2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1kZXRhaWwtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi1scy10aWVwLW5oYW4ta2hhbS1zdWMta2hvZVxca2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1kZXRhaWwtcG9wdXBcXGtoYW0tZG9hbi1scy10aWVwLW5oYW4tZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1scy10aWVwLW5oYW4ta2hhbS1zdWMta2hvZS9raGFtLWRvYW4tbHMtdGllcC1uaGFuLWRldGFpbC1wb3B1cC9raGFtLWRvYW4tbHMtdGllcC1uaGFuLWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1scy10aWVwLW5oYW4tZGV0YWlsLXBvcHVwL2toYW0tZG9hbi1scy10aWVwLW5oYW4tZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59IiwiLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.ts": 
        /*!******************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.ts ***!
          \******************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanLsTiepNhanDetailPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanLsTiepNhanDetailPopupComponent", function () { return KhamDoanLsTiepNhanDetailPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _iconify_icons_ic_check__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/check */ "./node_modules/@iconify/icons-ic/check.js");
            /* harmony import */ var _iconify_icons_ic_check__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_check__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_print__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/print */ "./node_modules/@iconify/icons-ic/print.js");
            /* harmony import */ var _iconify_icons_ic_print__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_print__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../kham-doan-ls-tiep-nhan-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe.model.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_phieu_dang_ky_kham_suc_khoe_popup_phieu_dang_ky_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.ts");
            var KhamDoanLsTiepNhanDetailPopupComponent = /** @class */ (function () {
                function KhamDoanLsTiepNhanDetailPopupComponent(apiService, route, notificationService, authService, dialog, location, router) {
                    this.apiService = apiService;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.location = location;
                    this.router = router;
                    this.chiTietHopDongKhamSucKhoe = {};
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icCheck = _iconify_icons_ic_check__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icPrint = _iconify_icons_ic_print__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.loading = false;
                    this.baseRoute = "/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe";
                    this.format = 'n2';
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]();
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.sort = [{
                            field: 'TinhTrang',
                            dir: 'asc'
                        }];
                    this.exportQueryInfoQueryInfo = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["ExportQueryInfoQueryInfo"];
                    this.gridColumns = [];
                    this.timKiemObj = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["KhamDoanLSTiepNhanNhanVienTimKiem"]();
                    // đây là biến tạm, cần cập nhật lại
                    this.isHoanThanhKham = false;
                    this.tenHopDong = null;
                    //-------------------------------
                    this.queryInfoLoaihopDong = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["LookupQueryInfo"]();
                    this.queryInfoTrangThai = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["LookupQueryInfo"]();
                    this.queryInfoCongTy = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["LookupQueryInfo"]();
                    this.additionalSearchString = "";
                }
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.ngOnInit = function () {
                    this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].KhamDoanLichSuTiepNhanKhamSucKhoe; // cần cập nhật lại
                    var idCongTy = this.route.snapshot.params.idCongTy;
                    var idHopDong = this.route.snapshot.params.idHopDong;
                    idCongTy = (idCongTy === undefined || idCongTy === null) ? 0 : idCongTy;
                    idHopDong = (idHopDong === undefined || idHopDong === null) ? 0 : idHopDong;
                    this.chiTietHopDongKhamSucKhoe.CongTyId = idCongTy;
                    this.queryInfoCongTy.Id = this.chiTietHopDongKhamSucKhoe.CongTyId;
                    this.chiTietHopDongKhamSucKhoe.HopDongId = idHopDong;
                    var modelgrid = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["TiepNhanNhanVienTheoHopDongTimKiemNangCapVo"]();
                    modelgrid.CongTyId = idCongTy;
                    modelgrid.HopDongId = idHopDong;
                    modelgrid.IsLichSu = true;
                    modelgrid.TrangThai = this.timKiemObj.TrangThai;
                    this.additionalSearchString = JSON.stringify(modelgrid);
                    this.getById(idHopDong, idCongTy);
                    this.gridColumns = [
                        { Field: "MaNhanVien", Title: "Mã NV", Width: 80 },
                        { Field: "TenNhanVien", Title: "Tên NV", Width: 220, Template: this.tenNhanVienTemplate },
                        { Field: "DonViBoPhan", Title: "ĐV/BP", Width: 90 },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 90 },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 90 },
                        { Field: "SoDienThoai", Title: "SĐT", Width: 90 },
                        { Field: "Email", Title: "Email", Width: 90 },
                        { Field: "ChungMinhThu", Title: "CMT", Width: 90 },
                        { Field: "SHC", Title: "SHC", Width: 90 },
                        { Field: "DanToc", Title: "Dân tộc", Width: 90 },
                        { Field: "TinhThanh", Title: "Tỉnh/TP", Width: 90 },
                        { Field: "NhomKham", Title: "Nhóm khám", Width: 90 },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 90 },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Template: this.tinhTrangTemplate },
                        { Field: "Action", Title: "", Width: 80, Template: this.actionTemplate }
                    ];
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.getById = function (idHopDong, idCongTy) {
                    var _this = this;
                    // fisrt data DS nhân viên
                    this.showPopupLoadingData();
                    var model = {
                        HopDongId: idHopDong,
                        CongTyId: idCongTy
                    };
                    this.apiService.post("KhamDoan/TimKiemThongTinHopDongKhamTheoCongTy", model)
                        .subscribe(function (resultData) {
                        _this.chiTietHopDongKhamSucKhoe = resultData;
                        _this.queryInfoLoaihopDong.Id = _this.chiTietHopDongKhamSucKhoe.LoaiHopDong;
                        _this.queryInfoTrangThai.Id = _this.chiTietHopDongKhamSucKhoe.TrangThai;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.clearValidateErrorOtherCallback = function (event) {
                    src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].clearValidateErrorOtherCallback(this, event);
                };
                // tìm kiếm nhân viên
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.searchChanges = function (event) {
                    if (event == null || event == "") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.clearSearch = function () {
                    this.timKiemObj.SearchString = null;
                    this.gridNhanVien.searchString = null;
                    this.timKiemNangCao();
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.timKiemNangCao = function () {
                    var queryString = JSON.stringify(this.timKiemObj);
                    if (this.gridNhanVien != undefined && this.gridNhanVien != null) {
                        var modelgrid = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["TiepNhanNhanVienTheoHopDongTimKiemNangCapVo"]();
                        modelgrid.CongTyId = this.chiTietHopDongKhamSucKhoe.CongTyId;
                        modelgrid.HopDongId = this.chiTietHopDongKhamSucKhoe.HopDongId;
                        modelgrid.IsLichSu = true;
                        modelgrid.TrangThai = this.timKiemObj.TrangThai;
                        modelgrid.SearchString = this.timKiemObj.SearchString;
                        this.gridNhanVien._additionalSearchString = JSON.stringify(modelgrid);
                        this.gridNhanVien.search();
                    }
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.inHoSo = function (phieuIn, id) {
                    if (phieuIn == 1) {
                        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].View)) {
                            this.dialog.open(_kham_doan_tiep_nhan_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_20__["SoKhamSucKhoeDinhKyPopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    if (phieuIn == 2) {
                        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].View)) {
                            this.dialog.open(_kham_doan_tiep_nhan_phieu_dang_ky_kham_suc_khoe_popup_phieu_dang_ky_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuDangKyKhamSucKhoePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    if (phieuIn == 3) {
                        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].View)) {
                            this.dialog.open(_kham_doan_tiep_nhan_ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_19__["KetQuaKhamSucKhoePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.showPopupChiTietNhanVien = function (id) {
                    if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Update)) {
                        this.router.navigate([this.baseRoute + '/nhan-vien/' + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanLsTiepNhanDetailPopupComponent.prototype.quayLai = function () {
                    this.location.back();
                };
                return KhamDoanLsTiepNhanDetailPopupComponent;
            }());
            KhamDoanLsTiepNhanDetailPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tenNhanVienTemplate', { static: true })
            ], KhamDoanLsTiepNhanDetailPopupComponent.prototype, "tenNhanVienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], KhamDoanLsTiepNhanDetailPopupComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanLsTiepNhanDetailPopupComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridNhanVien', { static: false })
            ], KhamDoanLsTiepNhanDetailPopupComponent.prototype, "gridNhanVien", void 0);
            KhamDoanLsTiepNhanDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-kham-doan-ls-tiep-nhan-detail-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-ls-tiep-nhan-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-ls-tiep-nhan-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.scss")).default]
                })
            ], KhamDoanLsTiepNhanDetailPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component.scss": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component.scss ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1scy10aWVwLW5oYW4taW4taG8tc28tcG9wdXAva2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1pbi1oby1zby1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component.ts": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component.ts ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanLsTiepNhanInHoSoPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanLsTiepNhanInHoSoPopupComponent", function () { return KhamDoanLsTiepNhanInHoSoPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _kham_doan_tiep_nhan_kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../kham-doan-tiep-nhan/kham-doan-tiep-nhan.model */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts");
            var KhamDoanLsTiepNhanInHoSoPopupComponent = /** @class */ (function () {
                function KhamDoanLsTiepNhanInHoSoPopupComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.chonPhieuInKhamSucKhoe = new _kham_doan_tiep_nhan_kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ChonPhieuInKhamSucKhoe"]();
                }
                KhamDoanLsTiepNhanInHoSoPopupComponent.prototype.ngOnInit = function () {
                };
                KhamDoanLsTiepNhanInHoSoPopupComponent.prototype.close = function (data) {
                    if (data == 'ok') {
                        this.dialogRef.close(this.chonPhieuInKhamSucKhoe);
                    }
                    else {
                        this.dialogRef.close(null);
                    }
                };
                return KhamDoanLsTiepNhanInHoSoPopupComponent;
            }());
            KhamDoanLsTiepNhanInHoSoPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            KhamDoanLsTiepNhanInHoSoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-ls-tiep-nhan-in-ho-so-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-ls-tiep-nhan-in-ho-so-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-ls-tiep-nhan-in-ho-so-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component.scss")).default]
                })
            ], KhamDoanLsTiepNhanInHoSoPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.scss": 
        /*!********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.scss ***!
          \********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1scy10aWVwLW5oYW4ta2hhbS1zdWMta2hvZS1saXN0L2toYW0tZG9hbi1scy10aWVwLW5oYW4ta2hhbS1zdWMta2hvZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.ts": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.ts ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanLsTiepNhanKhamSucKhoeListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanLsTiepNhanKhamSucKhoeListComponent", function () { return KhamDoanLsTiepNhanKhamSucKhoeListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../kham-doan-ls-tiep-nhan-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe.model.ts");
            var KhamDoanLsTiepNhanKhamSucKhoeListComponent = /** @class */ (function () {
                function KhamDoanLsTiepNhanKhamSucKhoeListComponent(authService, notificationService, route, location, dialog, apiService, router) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.router = router;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.baseRoute = "/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe";
                    this.gridColumns = [];
                    this._gridColumnsFilter = [];
                    this._isCheckColumnFilter = true;
                    this.strAdditionalSearchString = "";
                    this.timKiemObj = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_19__["KhamDoanLSTiepNhanTimKiem"]();
                    this.searchDateRange = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_19__["SearchDateRange"]();
                }
                KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].KhamDoanLichSuTiepNhanKhamSucKhoe;
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery && this.gridDaHoanThanhKham != undefined && this.gridDaHoanThanhKham != null) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachLichSuTiepNanKhamSucKhoe");
                            this.gridDaHoanThanhKham.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                            if (additionalSearchString != undefined && additionalSearchString != null && additionalSearchString != "") {
                                var stringObjBack = void 0;
                                stringObjBack = JSON.parse(additionalSearchString);
                                this.timKiemObj = stringObjBack;
                            }
                            hasLocalSearchString = true;
                        }
                    }
                    if (!hasLocalSearchString && this.gridDaHoanThanhKham != undefined && this.gridDaHoanThanhKham != null) {
                        this.gridDaHoanThanhKham.additionalSearchString = null;
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachLichSuTiepNanKhamSucKhoe");
                    }
                    this.gridColumns = [
                        { Field: "TenHopDong", Title: "Hợp đồng", Width: 100, Sortable: true, Template: this.tenHopDongTemplate },
                        { Field: "TenCongTy", Title: "Tên công ty", Width: 180, Sortable: true },
                        { Field: "SoLuongBenhNhan", Title: "SL NB ", Width: 60, Sortable: true, Template: this.soLuongBenhNhanTemplate },
                        { Field: "SoBenhNhanDaDen", Title: "SL NB Đã đến", Width: 60, Sortable: true, Template: this.soLuongBenhNhanDaDenTemplate },
                        { Field: "NgayBatDauKham", Title: "Ngày BĐ khám", Width: 80, Sortable: true, Template: this.ngayBatDauKhamTemplate },
                        { Field: "NgayKetThucKham", Title: "Ngày KT khám", Width: 80, Sortable: true, Template: this.ngayKetThucKhamTemplate }
                    ];
                    this._gridColumnsFilter = this.gridColumns.filter(function (p) { return p.Title != ''; });
                };
                KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype.changeDateSearch = function (event) {
                    if (event != undefined && event != null && event != "") {
                        this.timKiemObj.FromToDate = event;
                        if (this.timKiemObj.FromToDate != null && this.timKiemObj.FromToDate.startDate != null) {
                            this.timKiemObj.NgayBatDau = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].formatDateTime(this.timKiemObj.FromToDate.startDate, 'mm/dd/yyyy');
                        }
                        else {
                            this.timKiemObj.NgayBatDau = null;
                        }
                        if (this.timKiemObj.FromToDate != null && this.timKiemObj.FromToDate.endDate != null) {
                            this.timKiemObj.NgayKetThuc = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].formatDateTime(this.timKiemObj.FromToDate.endDate, 'mm/dd/yyyy');
                        }
                        else {
                            this.timKiemObj.NgayKetThuc = null;
                        }
                        this.timKiemNangCao();
                    }
                    else {
                        this.timKiemObj.FromToDate = null;
                        if (this.timKiemObj.FromToDate = null) {
                            this.timKiemObj.NgayBatDau = null;
                            this.timKiemObj.NgayKetThuc = null;
                        }
                        this.timKiemNangCao();
                    }
                };
                // chức năng tìm kiếm cần cập nhật lại theo tab đang chọn
                KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype.searchChanges = function (event) {
                    this.timKiemObj.SearchString = event;
                    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype.thoiDiemTNChange = function () {
                    // this.timKiemNangCao();
                };
                KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype.clearSearch = function () {
                    this.timKiemObj.SearchString = null;
                    this.gridDaHoanThanhKham.searchString = null;
                    this.timKiemNangCao();
                };
                KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    var queryString = JSON.stringify(this.timKiemObj);
                    this.gridDaHoanThanhKham._additionalSearchString = this.strAdditionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachLichSuTiepNanKhamSucKhoe", queryString);
                    this.gridDaHoanThanhKham.search();
                };
                KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype.xuLyXuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("KhamDoan/ExportLichSuTiepNhanKhamSucKhoeDoan", this.gridDaHoanThanhKham._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "LichSuTiepNhanKhamSucKhoeDoan" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype.xemChiTiet = function (dataItem) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View)) {
                        this.router.navigate([this.baseRoute + "/hop-dong/" + dataItem.HopDongId + "/" + dataItem.CongTyId]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return KhamDoanLsTiepNhanKhamSucKhoeListComponent;
            }());
            KhamDoanLsTiepNhanKhamSucKhoeListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenHopDongTemplate', { static: true })
            ], KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype, "tenHopDongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayBatDauKhamTemplate', { static: true })
            ], KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype, "ngayBatDauKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucKhamTemplate', { static: true })
            ], KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype, "ngayKetThucKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongBenhNhanTemplate', { static: true })
            ], KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype, "soLuongBenhNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongBenhNhanDaDenTemplate', { static: true })
            ], KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype, "soLuongBenhNhanDaDenTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDaHoanThanhKham', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], static: true })
            ], KhamDoanLsTiepNhanKhamSucKhoeListComponent.prototype, "gridDaHoanThanhKham", void 0);
            KhamDoanLsTiepNhanKhamSucKhoeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-ls-tiep-nhan-kham-suc-khoe-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.scss")).default]
                })
            ], KhamDoanLsTiepNhanKhamSucKhoeListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-routing.module.ts": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-routing.module.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: KhamDoanLsTiepNhanKhamSucKhoeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanLsTiepNhanKhamSucKhoeRoutingModule", function () { return KhamDoanLsTiepNhanKhamSucKhoeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_kham_doan_tiep_nhan_nhan_vien_detail_popup_kham_doan_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_detail_popup_kham_doan_ls_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_kham_suc_khoe_list_kham_doan_ls_tiep_nhan_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _kham_doan_ls_tiep_nhan_kham_suc_khoe_list_kham_doan_ls_tiep_nhan_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_8__["KhamDoanLsTiepNhanKhamSucKhoeListComponent"],
                    data: {
                        title: "Tiếp nhận",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanLichSuTiepNhanKhamSucKhoe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'hop-dong/:idHopDong/:idCongTy',
                    component: _kham_doan_ls_tiep_nhan_detail_popup_kham_doan_ls_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanLsTiepNhanDetailPopupComponent"],
                    data: {
                        title: 'Chi tiết hợp đồng khám sức khỏe',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanLichSuTiepNhanKhamSucKhoe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'nhan-vien/:id',
                    component: _kham_doan_tiep_nhan_kham_doan_tiep_nhan_nhan_vien_detail_popup_kham_doan_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanTiepNhanNhanVienDetailPopupComponent"],
                    data: {
                        title: 'Chi tiết khám sức khỏe của nhân viên',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanTiepNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
            ];
            var KhamDoanLsTiepNhanKhamSucKhoeRoutingModule = /** @class */ (function () {
                function KhamDoanLsTiepNhanKhamSucKhoeRoutingModule() {
                }
                return KhamDoanLsTiepNhanKhamSucKhoeRoutingModule;
            }());
            KhamDoanLsTiepNhanKhamSucKhoeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], KhamDoanLsTiepNhanKhamSucKhoeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe.model.ts": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe.model.ts ***!
          \***************************************************************************************************************************/
        /*! exports provided: KhamDoanLSTiepNhanTimKiem, SearchDateRange, KhamDoanLSTiepNhanNhanVienTimKiem, KhamDoanLSTiepNhanNhanVienTrangThai, TiepNhanNhanVienTheoHopDongTimKiemNangCapVo, ExportQueryInfoQueryInfo, ChiTietHopDongKhamSucKhoe, LookupQueryInfo, TimKiemHopDongKhamTheoCongTy, ChiTietKhamSucKhoeCuaNhanVien, YeuCauTiepNhanKhamSucKhoe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanLSTiepNhanTimKiem", function () { return KhamDoanLSTiepNhanTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDateRange", function () { return SearchDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanLSTiepNhanNhanVienTimKiem", function () { return KhamDoanLSTiepNhanNhanVienTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanLSTiepNhanNhanVienTrangThai", function () { return KhamDoanLSTiepNhanNhanVienTrangThai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNhanVienTheoHopDongTimKiemNangCapVo", function () { return TiepNhanNhanVienTheoHopDongTimKiemNangCapVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function () { return ExportQueryInfoQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietHopDongKhamSucKhoe", function () { return ChiTietHopDongKhamSucKhoe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupQueryInfo", function () { return LookupQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemHopDongKhamTheoCongTy", function () { return TimKiemHopDongKhamTheoCongTy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietKhamSucKhoeCuaNhanVien", function () { return ChiTietKhamSucKhoeCuaNhanVien; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTiepNhanKhamSucKhoe", function () { return YeuCauTiepNhanKhamSucKhoe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var KhamDoanLSTiepNhanTimKiem = /** @class */ (function () {
                function KhamDoanLSTiepNhanTimKiem(SearchString, FromToDate, NgayBatDau, NgayKetThuc) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (FromToDate === void 0) { FromToDate = new SearchDateRange(); }
                    if (NgayBatDau === void 0) { NgayBatDau = null; }
                    if (NgayKetThuc === void 0) { NgayKetThuc = null; }
                    this.SearchString = SearchString;
                    this.FromToDate = FromToDate;
                    this.NgayBatDau = NgayBatDau;
                    this.NgayKetThuc = NgayKetThuc;
                }
                return KhamDoanLSTiepNhanTimKiem;
            }());
            var SearchDateRange = /** @class */ (function () {
                function SearchDateRange(startDate, endDate) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return SearchDateRange;
            }());
            var KhamDoanLSTiepNhanNhanVienTimKiem = /** @class */ (function () {
                function KhamDoanLSTiepNhanNhanVienTimKiem(SearchString, CongTyId, HopDongId, TrangThai) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (CongTyId === void 0) { CongTyId = null; }
                    if (HopDongId === void 0) { HopDongId = null; }
                    if (TrangThai === void 0) { TrangThai = new KhamDoanLSTiepNhanNhanVienTrangThai(); }
                    this.SearchString = SearchString;
                    this.CongTyId = CongTyId;
                    this.HopDongId = HopDongId;
                    this.TrangThai = TrangThai;
                }
                return KhamDoanLSTiepNhanNhanVienTimKiem;
            }());
            var KhamDoanLSTiepNhanNhanVienTrangThai = /** @class */ (function () {
                function KhamDoanLSTiepNhanNhanVienTrangThai(ChuaKham, DangKham, DaKham, HuyKham) {
                    if (ChuaKham === void 0) { ChuaKham = true; }
                    if (DangKham === void 0) { DangKham = true; }
                    if (DaKham === void 0) { DaKham = true; }
                    if (HuyKham === void 0) { HuyKham = true; }
                    this.ChuaKham = ChuaKham;
                    this.DangKham = DangKham;
                    this.DaKham = DaKham;
                    this.HuyKham = HuyKham;
                }
                return KhamDoanLSTiepNhanNhanVienTrangThai;
            }());
            var TiepNhanNhanVienTheoHopDongTimKiemNangCapVo = /** @class */ (function () {
                function TiepNhanNhanVienTheoHopDongTimKiemNangCapVo(CongTyId, HopDongId, IsDangKham, IsLichSu, TrangThai, SearchString) {
                    if (CongTyId === void 0) { CongTyId = null; }
                    if (HopDongId === void 0) { HopDongId = null; }
                    if (IsDangKham === void 0) { IsDangKham = false; }
                    if (IsLichSu === void 0) { IsLichSu = false; }
                    if (TrangThai === void 0) { TrangThai = new KhamDoanLSTiepNhanNhanVienTrangThai(); }
                    if (SearchString === void 0) { SearchString = null; }
                    this.CongTyId = CongTyId;
                    this.HopDongId = HopDongId;
                    this.IsDangKham = IsDangKham;
                    this.IsLichSu = IsLichSu;
                    this.TrangThai = TrangThai;
                    this.SearchString = SearchString;
                }
                return TiepNhanNhanVienTheoHopDongTimKiemNangCapVo;
            }());
            var ExportQueryInfoQueryInfo = /** @class */ (function () {
                function ExportQueryInfoQueryInfo(Skip, Take, PageSize, Search, AdditionalSearchString, 
                // public searchTerms:  = "",
                Sort) {
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (Search === void 0) { Search = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.Search = Search;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return ExportQueryInfoQueryInfo;
            }());
            var ChiTietHopDongKhamSucKhoe = /** @class */ (function () {
                function ChiTietHopDongKhamSucKhoe(TenCongTy, CongTyId, SoHopDong, HopDongId, NgayHopDong, LoaiHopDong, TrangThai, SoBenhNhan, NgayHieuLuc, NgayKetThuc) {
                    if (TenCongTy === void 0) { TenCongTy = ""; }
                    if (CongTyId === void 0) { CongTyId = null; }
                    if (SoHopDong === void 0) { SoHopDong = ""; }
                    if (HopDongId === void 0) { HopDongId = null; }
                    if (NgayHopDong === void 0) { NgayHopDong = null; }
                    if (LoaiHopDong === void 0) { LoaiHopDong = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (SoBenhNhan === void 0) { SoBenhNhan = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayKetThuc === void 0) { NgayKetThuc = null; }
                    this.TenCongTy = TenCongTy;
                    this.CongTyId = CongTyId;
                    this.SoHopDong = SoHopDong;
                    this.HopDongId = HopDongId;
                    this.NgayHopDong = NgayHopDong;
                    this.LoaiHopDong = LoaiHopDong;
                    this.TrangThai = TrangThai;
                    this.SoBenhNhan = SoBenhNhan;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayKetThuc = NgayKetThuc;
                }
                return ChiTietHopDongKhamSucKhoe;
            }());
            var LookupQueryInfo = /** @class */ (function () {
                function LookupQueryInfo(Take, Id, Query, ParameterDependencies) {
                    if (Take === void 0) { Take = 50; }
                    if (Id === void 0) { Id = 0; }
                    if (Query === void 0) { Query = null; }
                    if (ParameterDependencies === void 0) { ParameterDependencies = null; }
                    this.Take = Take;
                    this.Id = Id;
                    this.Query = Query;
                    this.ParameterDependencies = ParameterDependencies;
                }
                return LookupQueryInfo;
            }());
            var TimKiemHopDongKhamTheoCongTy = /** @class */ (function () {
                function TimKiemHopDongKhamTheoCongTy(CongTyId, HopDongId, NgayHopDong, LoaiHopDong, TrangThai, SoBenhNhan, NgayHieuLuc, NgayKetThuc) {
                    if (CongTyId === void 0) { CongTyId = null; }
                    if (HopDongId === void 0) { HopDongId = null; }
                    if (NgayHopDong === void 0) { NgayHopDong = null; }
                    if (LoaiHopDong === void 0) { LoaiHopDong = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (SoBenhNhan === void 0) { SoBenhNhan = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayKetThuc === void 0) { NgayKetThuc = null; }
                    this.CongTyId = CongTyId;
                    this.HopDongId = HopDongId;
                    this.NgayHopDong = NgayHopDong;
                    this.LoaiHopDong = LoaiHopDong;
                    this.TrangThai = TrangThai;
                    this.SoBenhNhan = SoBenhNhan;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayKetThuc = NgayKetThuc;
                }
                return TimKiemHopDongKhamTheoCongTy;
            }());
            var ChiTietKhamSucKhoeCuaNhanVien = /** @class */ (function () {
                function ChiTietKhamSucKhoeCuaNhanVien(Id, HopDongKhamSucKhoeId, BenhNhanId, MaNhanVien, HoTen, HoTenKhac, NgaySinh, ThangSinh, NamSinh, NgayThangNamSinh, Tuoi, SoDienThoai, SoChungMinhThu, GioiTinh, NgheNghiepId, QuocTichId, DanTocId, DiaChi, PhuongXaId, QuanHuyenId, TinhThanhId, NhomMau, YeuToRh, Email, TenDonViHoacBoPhan, NhomDoiTuongKhamSucKhoe, GoiKhamSucKhoeId, TenGoiKhamSucKhoe, TinhTrangHonNhan, CoMangThai, GhiChuTienSuBenh, GhiChuDiUngThuoc, HuyKham, YeuCauTiepNhan) {
                    if (Id === void 0) { Id = 0; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (MaNhanVien === void 0) { MaNhanVien = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (HoTenKhac === void 0) { HoTenKhac = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (Tuoi === void 0) { Tuoi = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (NgheNghiepId === void 0) { NgheNghiepId = null; }
                    if (QuocTichId === void 0) { QuocTichId = null; }
                    if (DanTocId === void 0) { DanTocId = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (PhuongXaId === void 0) { PhuongXaId = null; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = null; }
                    if (TinhThanhId === void 0) { TinhThanhId = null; }
                    if (NhomMau === void 0) { NhomMau = null; }
                    if (YeuToRh === void 0) { YeuToRh = null; }
                    if (Email === void 0) { Email = null; }
                    if (TenDonViHoacBoPhan === void 0) { TenDonViHoacBoPhan = null; }
                    if (NhomDoiTuongKhamSucKhoe === void 0) { NhomDoiTuongKhamSucKhoe = null; }
                    if (GoiKhamSucKhoeId === void 0) { GoiKhamSucKhoeId = null; }
                    if (TenGoiKhamSucKhoe === void 0) { TenGoiKhamSucKhoe = null; }
                    if (TinhTrangHonNhan === void 0) { TinhTrangHonNhan = null; }
                    if (CoMangThai === void 0) { CoMangThai = null; }
                    if (GhiChuTienSuBenh === void 0) { GhiChuTienSuBenh = null; }
                    if (GhiChuDiUngThuoc === void 0) { GhiChuDiUngThuoc = null; }
                    if (HuyKham === void 0) { HuyKham = null; }
                    if (YeuCauTiepNhan === void 0) { YeuCauTiepNhan = null; }
                    this.Id = Id;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.BenhNhanId = BenhNhanId;
                    this.MaNhanVien = MaNhanVien;
                    this.HoTen = HoTen;
                    this.HoTenKhac = HoTenKhac;
                    this.NgaySinh = NgaySinh;
                    this.ThangSinh = ThangSinh;
                    this.NamSinh = NamSinh;
                    this.NgayThangNamSinh = NgayThangNamSinh;
                    this.Tuoi = Tuoi;
                    this.SoDienThoai = SoDienThoai;
                    this.SoChungMinhThu = SoChungMinhThu;
                    this.GioiTinh = GioiTinh;
                    this.NgheNghiepId = NgheNghiepId;
                    this.QuocTichId = QuocTichId;
                    this.DanTocId = DanTocId;
                    this.DiaChi = DiaChi;
                    this.PhuongXaId = PhuongXaId;
                    this.QuanHuyenId = QuanHuyenId;
                    this.TinhThanhId = TinhThanhId;
                    this.NhomMau = NhomMau;
                    this.YeuToRh = YeuToRh;
                    this.Email = Email;
                    this.TenDonViHoacBoPhan = TenDonViHoacBoPhan;
                    this.NhomDoiTuongKhamSucKhoe = NhomDoiTuongKhamSucKhoe;
                    this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
                    this.TenGoiKhamSucKhoe = TenGoiKhamSucKhoe;
                    this.TinhTrangHonNhan = TinhTrangHonNhan;
                    this.CoMangThai = CoMangThai;
                    this.GhiChuTienSuBenh = GhiChuTienSuBenh;
                    this.GhiChuDiUngThuoc = GhiChuDiUngThuoc;
                    this.HuyKham = HuyKham;
                    this.YeuCauTiepNhan = YeuCauTiepNhan;
                }
                return ChiTietKhamSucKhoeCuaNhanVien;
            }());
            var YeuCauTiepNhanKhamSucKhoe = /** @class */ (function () {
                function YeuCauTiepNhanKhamSucKhoe(Id, HopDongKhamSucKhoeNhanVien, TrangThaiYeuCauTiepNhan) {
                    if (Id === void 0) { Id = 0; }
                    if (HopDongKhamSucKhoeNhanVien === void 0) { HopDongKhamSucKhoeNhanVien = null; }
                    if (TrangThaiYeuCauTiepNhan === void 0) { TrangThaiYeuCauTiepNhan = null; }
                    this.Id = Id;
                    this.HopDongKhamSucKhoeNhanVien = HopDongKhamSucKhoeNhanVien;
                    this.TrangThaiYeuCauTiepNhan = TrangThaiYeuCauTiepNhan;
                }
                return YeuCauTiepNhanKhamSucKhoe;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe.module.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe.module.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: KhamDoanLsTiepNhanKhamSucKhoeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanLsTiepNhanKhamSucKhoeModule", function () { return KhamDoanLsTiepNhanKhamSucKhoeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_kham_suc_khoe_list_kham_doan_ls_tiep_nhan_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_kham_suc_khoe_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./kham-doan-ls-tiep-nhan-kham-suc-khoe-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe-routing.module.ts");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_detail_popup_kham_doan_ls_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_in_ho_so_popup_kham_doan_ls_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component.ts");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_nhan_vien_detail_popup_kham_doan_ls_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_kham_doan_tiep_nhan_nhan_vien_detail_popup_kham_doan_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_kham_doan_tiep_nhan_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../kham-doan-tiep-nhan/kham-doan-tiep-nhan.module */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.module.ts");
            var KhamDoanLsTiepNhanKhamSucKhoeModule = /** @class */ (function () {
                function KhamDoanLsTiepNhanKhamSucKhoeModule() {
                }
                return KhamDoanLsTiepNhanKhamSucKhoeModule;
            }());
            KhamDoanLsTiepNhanKhamSucKhoeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_kham_doan_ls_tiep_nhan_kham_suc_khoe_list_kham_doan_ls_tiep_nhan_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_3__["KhamDoanLsTiepNhanKhamSucKhoeListComponent"], _kham_doan_ls_tiep_nhan_detail_popup_kham_doan_ls_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_17__["KhamDoanLsTiepNhanDetailPopupComponent"], _kham_doan_ls_tiep_nhan_in_ho_so_popup_kham_doan_ls_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_18__["KhamDoanLsTiepNhanInHoSoPopupComponent"], _kham_doan_ls_tiep_nhan_nhan_vien_detail_popup_kham_doan_ls_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_19__["KhamDoanLsTiepNhanNhanVienDetailPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _kham_doan_ls_tiep_nhan_kham_suc_khoe_routing_module__WEBPACK_IMPORTED_MODULE_16__["KhamDoanLsTiepNhanKhamSucKhoeRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_12__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                        _kham_doan_tiep_nhan_kham_doan_tiep_nhan_module__WEBPACK_IMPORTED_MODULE_21__["KhamDoanTiepNhanModule"]
                    ],
                    entryComponents: [
                        _kham_doan_ls_tiep_nhan_detail_popup_kham_doan_ls_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_17__["KhamDoanLsTiepNhanDetailPopupComponent"],
                        _kham_doan_ls_tiep_nhan_nhan_vien_detail_popup_kham_doan_ls_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_19__["KhamDoanLsTiepNhanNhanVienDetailPopupComponent"],
                        _kham_doan_ls_tiep_nhan_in_ho_so_popup_kham_doan_ls_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_18__["KhamDoanLsTiepNhanInHoSoPopupComponent"],
                        _kham_doan_tiep_nhan_kham_doan_tiep_nhan_nhan_vien_detail_popup_kham_doan_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_20__["KhamDoanTiepNhanNhanVienDetailPopupComponent"]
                    ]
                })
            ], KhamDoanLsTiepNhanKhamSucKhoeModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.scss": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.scss ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n\n.blueText {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbHMtdGllcC1uaGFuLWtoYW0tc3VjLWtob2Uva2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1uaGFuLXZpZW4tZGV0YWlsLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4tbHMtdGllcC1uaGFuLWtoYW0tc3VjLWtob2VcXGtoYW0tZG9hbi1scy10aWVwLW5oYW4tbmhhbi12aWVuLWRldGFpbC1wb3B1cFxca2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1uaGFuLXZpZW4tZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1scy10aWVwLW5oYW4ta2hhbS1zdWMta2hvZS9raGFtLWRvYW4tbHMtdGllcC1uaGFuLW5oYW4tdmllbi1kZXRhaWwtcG9wdXAva2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1uaGFuLXZpZW4tZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbHMtdGllcC1uaGFuLWtoYW0tc3VjLWtob2Uva2hhbS1kb2FuLWxzLXRpZXAtbmhhbi1uaGFuLXZpZW4tZGV0YWlsLXBvcHVwL2toYW0tZG9hbi1scy10aWVwLW5oYW4tbmhhbi12aWVuLWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogYmx1ZTtcbn0iLCIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJsdWVUZXh0IHtcbiAgY29sb3I6IGJsdWU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.ts": 
        /*!**************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.ts ***!
          \**************************************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanLsTiepNhanNhanVienDetailPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanLsTiepNhanNhanVienDetailPopupComponent", function () { return KhamDoanLsTiepNhanNhanVienDetailPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../kham-doan-ls-tiep-nhan-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe.model.ts");
            /* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");
            var KhamDoanLsTiepNhanNhanVienDetailPopupComponent = /** @class */ (function () {
                function KhamDoanLsTiepNhanNhanVienDetailPopupComponent(authService, dialog, notificationService, apiService, data, dialogRef) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].KhamDoanTiepNhan;
                    this.validationErrors = [];
                    this.validationDichVuErrors = [];
                    this.format = 'n2';
                    this.gridColumns = [];
                    this.gridColumnDichVuThems = [];
                    this.groupThemDichVus = [{ field: 'NhomDichVu', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
                    this.groups = [{ field: 'NhomDichVu', dir: null }];
                    this.thongTinHanhChinhNhanVien = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_10__["YeuCauTiepNhanKhamSucKhoe"]();
                    this.yeuCauTiepNhanHoanThanh = src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_11__["TrangThaiYeuCauTiepNhan"].DaHoanTat;
                    this.isHoanThanhKham = true;
                    // đây là biến tạm, cần cập nhật lại
                    this.daBatDauKham = false;
                }
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.ngOnInit = function () {
                    this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien = new _kham_doan_ls_tiep_nhan_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_10__["ChiTietKhamSucKhoeCuaNhanVien"]();
                    this.getDataNhanVien(this.data.Id);
                    this.gridColumnDichVuThems = [
                        { Field: "MaDichVu", Title: "Mã DV", Width: 70 },
                        { Field: "NhomDichVu", Title: "Nhóm dịch vụ", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "TenDichVu", Title: "Tên DV", Width: 160 },
                        { Field: "LoaiGia", Title: "Loại giá", Width: 90, Template: this.loaiGiaTemplate },
                        { Field: "SoLuong", Title: "SL", Width: 90, Template: this.soLuongTemplate },
                        { Field: "DonGia", Title: "Đơn giá", Width: 120, TemplateFooter: this.donGiaGroupFooterTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 120, TemplateFooter: this.thanhTienGroupFooterTemplate },
                        { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 100, Template: this.noiThucHienThemDichVuTemplate },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Template: this.tinhTrangTemplate },
                        { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate }
                    ];
                    this.gridColumns = [
                        { Field: "MaDichVu", Title: "Mã DV", Width: 70 },
                        { Field: "NhomDichVu", Title: "Nhóm dịch vụ", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "TenDichVu", Title: "Tên DV", Width: 160 },
                        { Field: "LoaiGia", Title: "Loại giá", Width: 90 },
                        { Field: "SoLuong", Title: "SL", Width: 90 },
                        { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 100, Template: this.noiThucHienTemplate },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Template: this.tinhTrangTemplate },
                        { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate }
                    ];
                };
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.getDataNhanVien = function (id) {
                    var _this = this;
                    this.showPopupLoadingData();
                    this.apiService
                        .get("KhamDoan/GetThongTinHanhChinhNhanVien?hopDongKhamNhanVienId=" + id)
                        .subscribe(function (resultData) {
                        _this.thongTinHanhChinhNhanVien = resultData;
                        _this.isHoanThanhKham = _this.thongTinHanhChinhNhanVien.TrangThaiYeuCauTiepNhan == src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_11__["TrangThaiYeuCauTiepNhan"].DaHoanTat;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.xuLyInHoSo = function () {
                    this.close(1);
                };
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.TinhThanhPhoChange = function (event) {
                    if (event == undefined || event == null) {
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = null;
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = null;
                    }
                };
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.QuanHuyenChange = function (event) {
                    if (event == undefined || event == null) {
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = null;
                    }
                };
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.PhuongXaChange = function (event) {
                    var _this = this;
                    this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = event;
                    if (event != null && event != undefined) {
                        this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(function (resultData) {
                            _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhThanhId = resultData.TinhThanhId;
                            _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = resultData.QuanHuyenId;
                            _this.comboboxQuanHuyen.getDataForLookup();
                        }, function (err) {
                        });
                    }
                    else {
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhThanhId = null;
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = null;
                    }
                };
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.ThongTinBenhNhanNgaySinhChange = function (event) {
                    if (this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh != null) {
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh.getFullYear();
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Tuoi = new Date().getFullYear() - this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
                    }
                };
                KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype.close = function (result) {
                    if (result === void 0) { result = null; }
                    this.dialogRef.close(result);
                };
                return KhamDoanLsTiepNhanNhanVienDetailPopupComponent;
            }());
            KhamDoanLsTiepNhanNhanVienDetailPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiGiaTemplate', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "loaiGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "soLuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienTemplate', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "noiThucHienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienThemDichVuTemplate', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "noiThucHienThemDichVuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaGroupFooterTemplate', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "donGiaGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxQuanHuyen', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "comboboxQuanHuyen", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxPhuongXa', { static: true })
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent.prototype, "comboboxPhuongXa", void 0);
            KhamDoanLsTiepNhanNhanVienDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-ls-tiep-nhan-nhan-vien-detail-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], KhamDoanLsTiepNhanNhanVienDetailPopupComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=kham-doan-kham-doan-ls-tiep-nhan-kham-suc-khoe-kham-doan-ls-tiep-nhan-kham-suc-khoe-module-es2015.js.map
//# sourceMappingURL=kham-doan-kham-doan-ls-tiep-nhan-kham-suc-khoe-kham-doan-ls-tiep-nhan-kham-suc-khoe-module-es5.js.map
//# sourceMappingURL=kham-doan-kham-doan-ls-tiep-nhan-kham-suc-khoe-kham-doan-ls-tiep-nhan-kham-suc-khoe-module-es5.js.map