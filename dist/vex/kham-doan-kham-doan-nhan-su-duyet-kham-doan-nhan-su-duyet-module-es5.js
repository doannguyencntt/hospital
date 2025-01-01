(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-doan-kham-doan-nhan-su-duyet-kham-doan-nhan-su-duyet-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.html": 
        /*!***********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.html ***!
          \***********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[ {Title:'Khám Đoàn',Path:''}\n        ,{Title:'DS Duyệt Yêu Cầu Nhân Sự Khám Sức Khỏe - Nhân Sự', Path: '/kham-doan/nhan-su-duyet', queryParams: {holdQuery : true}}\n        ,{Title: 'Chi Tiết Duyệt Yêu Cầu Nhân Sự Khám Sức Khỏe',Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"space-between\">\n                <h2 class=\"title m-0\">{{title}}</h2>\n                <label [ngClass]=\"{'orangeText': khamDoanNhanSuDetail.TrangThai == 1,\n                        'greenText': khamDoanNhanSuDetail.TrangThai == 2,\n                        'redText': khamDoanNhanSuDetail.TrangThai == 3}\">\n                    {{khamDoanNhanSuDetail.TenTinhTrang}}\n                </label>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                    [ngClass]=\"{'disableDiv': khamDoanNhanSuDetail.TrangThai == 3 || khamDoanNhanSuDetail.TrangThai == 2}\">\n                    <app-combobox id=\"congTy\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n                        [(model)]=\"khamDoanNhanSuDetail.CongTyId\" [modelText]=\"khamDoanNhanSuDetail.CongTy\"\n                        url=\"KhamDoan/GetCongTys\" hierarchyKeyToSend=\"CongTyId\" [disabled]=\"true\"\n                        [validationerror]=\"'CongTyId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-combobox id=\"hopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hợp đồng\"\n                        url=\"KhamDoan/GetHopDongKhamSucKhoes\" [required]=\"true\" hierarchyKeyToListen=\"CongTyId\"\n                        [(model)]=\"khamDoanNhanSuDetail.HopDongKhamSucKhoeId\" [disabled]=\"true\"\n                        [validationerror]=\"'HopDongKhamSucKhoeId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-textboxnumeric id=\"soLuongBenhNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"SL NB \"\n                        [(model)]=\"khamDoanNhanSuDetail.SoNguoiKham\" [decimals]=\"0\" [disabled]=\"true\">\n                    </app-textboxnumeric>\n                    <app-datepicker id=\"ngayBatDauKham\" [(model)]=\"khamDoanNhanSuDetail.NgayHieuLuc\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" label=\"Ngày BĐ khám\" [disabled]=\"true\">\n                    </app-datepicker>\n                    <app-datepicker id=\"NgayKetThucKham\" [(model)]=\"khamDoanNhanSuDetail.NgayKetThuc\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" label=\"Ngày KT khám\" [disabled]=\"true\">\n                    </app-datepicker>\n\n                    <app-grid *ngIf=\"diaDiemKhamDisplay==true\" fxFlex=\"100%\" fxFlex.sm=\"100%\" masterName=\"diaDiemKham\"\n                        [gridColumns]=\"gridDiaDiemKhamColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                        class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [checkboxAble]=\"false\" [maxHeight]=\"200\" [lazyLoadPage]=\"true\"\n                        [gridDataSource]=\"gridDiaDiemKhamDatasource\" style=\"width: 1px;\" [pageable]=\"false\">\n                    </app-grid>\n                    <ng-template #ngayKhamTemplate let-dataItem>\n                        {{dataItem.NgayDisplay}}\n                    </ng-template>\n\n                    <app-textboxnumeric id=\"tongSoLuongBacSi\" [(model)]=\"khamDoanNhanSuDetail.TongSoBs\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng SL BS\" [decimals]=\"0\" [disabled]=\"true\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"tongSoLuongDieuDuong\" [(model)]=\"khamDoanNhanSuDetail.TongSoDd\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng SL ĐD\" [decimals]=\"0\" [disabled]=\"true\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"tongSoLuongNhanVienKhac\" [(model)]=\"khamDoanNhanSuDetail.TongNvKhac\"\n                        fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng NV khác\" [decimals]=\"0\"\n                        [disabled]=\"true\">\n                    </app-textboxnumeric>\n\n                    <ng-container *ngIf=\"id!=0\">\n                        <app-combobox id=\"nguoiGuiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Người gửi\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienGuiYeuCauId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienGui\" url=\"KhamDoan/GetListNguoiGui\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"ngayGui\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày gửi\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayGuiYeuCau\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet == true\">\n                        <app-combobox id=\"KHTHDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"KHTH duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienKHTHDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienKhthDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"ngayKHTHDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày KHTH duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayKHTHDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet == false\">\n                        <app-combobox id=\"KHTHTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"KHTH từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienKHTHDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienKhthDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"ngayKHTHTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày KHTH từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayKHTHDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                        <app-textarea id=\"lyDoKHTHTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                            [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                            label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoKHTHKhongDuyet\">\n                        </app-textarea>\n                    </ng-container>\n\n                    <h3 fxFlex=\"100%\" class=\"sub-title\">Danh Sách Nhân Sự</h3>\n\n\n                    <app-grid #gridNhanSu fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n                        [gridColumns]=\"gridNhanSuColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\"\n                        [useAddDeault]=\"false\" [showStt]=\"true\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n                        [gridDataSource]=\"gridNhanSuDatasource\">\n                    </app-grid>\n\n                    <ng-template #taiLieuTemplate let-dataItem>\n                        <a *ngIf=\"dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{getTenTaiLieuDinhKem(dataItem)}}\">\n                                {{getTenTaiLieuDinhKem(dataItem)}}\n                            </p>\n                        </a>\n                    </ng-template>\n                    <ng-template #hoTenTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <!-- hiển thị tùy theo điều kiện -->\n                        <app-textbox *ngIf=\"dataItem.NguonNhanSu == 2\" id=\"hoTen{{rowIndex}}\" label=\"\" class=\"no-label\"\n                            [maxlength]=\"50\" [(model)]=\"dataItem.HoTen\">\n                        </app-textbox>\n                        <span *ngIf=\"dataItem.NguonNhanSu == 1\">{{dataItem.HoTen}}</span>\n                    </ng-template>\n\n                    <ng-template #donViTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <app-textbox *ngIf=\"dataItem.NguonNhanSu == 2\" id=\"donVi{{rowIndex}}\" label=\"\" class=\"no-label\"\n                            [maxlength]=\"50\" [(model)]=\"dataItem.DonVi\">\n                        </app-textbox>\n                        <span *ngIf=\"dataItem.NguonNhanSu == 1\">{{dataItem.DonVi}}</span>\n                    </ng-template>\n\n                    <ng-template #sdtTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <app-textboxmask *ngIf=\"dataItem.NguonNhanSu == 2\" id=\"sdt{{rowIndex}}\" label=\" \"\n                            class=\"no-label\" [(model)]=\"dataItem.SoDienThoai\" mask=\"000 000-0000\">\n                        </app-textboxmask>\n                        <span *ngIf=\"dataItem.NguonNhanSu == 1\">{{dataItem.SoDienThoai}}</span>\n                    </ng-template>\n\n                    <ng-template #nguoiGioiThieuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <app-combobox *ngIf=\"dataItem.NguonNhanSu == 2\" id=\"nguoiGioiThieu{{rowIndex}}\" label=\" \"\n                            [(model)]=\"dataItem.NguoiGioiThieuId\" [modelText]=\"dataItem.NguoiGioiThieu\" popupSettings=\"\"\n                            url=\"KhamDoan/GetListBacSi\">\n                        </app-combobox>\n                        <span *ngIf=\"dataItem.NguonNhanSu == 1\">{{dataItem.NguoiGioiThieu}}</span>\n                    </ng-template>\n\n                    <ng-template #ghiChuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <app-textbox *ngIf=\"dataItem.NguonNhanSu == 2\" id=\"ghiChu{{rowIndex}}\" label=\"\" class=\"no-label\"\n                            [maxlength]=\"50\" [(model)]=\"dataItem.GhiChu\">\n                        </app-textbox>\n                        <span *ngIf=\"dataItem.NguonNhanSu == 1\">{{dataItem.GhiChu}}</span>\n                    </ng-template>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n                        (click)=\"quayLai()\">Hủy</button>\n                    <button *ngIf=\"khamDoanNhanSuDetail.DuocNhanSuDuyet != true  && khamDoanNhanSuDetail.TrangThai==1\" mat-raised-button mat-button color=\"primary\"\n                        (click)=\"xuLyDuyet()\">Duyệt</button>\n                    <button *ngIf=\"khamDoanNhanSuDetail.DuocNhanSuDuyet != true && khamDoanNhanSuDetail.TrangThai==1\" mat-raised-button mat-button color=\"warn\"\n                        (click)=\"xuLyTuChoi()\">Từ chối</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Duyệt Yêu Cầu Nhân Sự Khám Sức Khỏe - Nhân Sự',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [searchString]=\"timKiemObj.SearchString\" [showStt]=\"true\"\n                [sort]=\"sort\" [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlTotalPage\">\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox [(model)]=\"timKiemObj.TrangThai.ChoDuyet\" id=\"choDuyet\" label=\"Chờ duyệt\"\n                        class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                    </app-checkbox>\n                    <app-checkbox [(model)]=\"timKiemObj.TrangThai.DaDuyet\" id=\"daDuyet\" label=\"Đã duyệt\" class=\"ml-2\"\n                        (modelChange)=\"timKiemNangCao()\">\n                    </app-checkbox>\n                    <app-checkbox [(model)]=\"timKiemObj.TrangThai.TuChoi\" id=\"tuChoi\" label=\"Từ chối\" class=\"ml-2\"\n                        (modelChange)=\"timKiemNangCao()\">\n                    </app-checkbox>\n                    <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                        [(model)]=\"timKiemObj.NgayGui\" label=\"Ngày gửi: Từ ngày - đến ngày\"\n                        (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n                    <app-daterangepicker id=\"KHTHTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        class=\"mt-1 ml-2 on-header\" [(model)]=\"timKiemObj.NgayKHTHDuyet\"\n                        label=\"Ngày KHTH duyệt: Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n                    <app-daterangepicker id=\"NhanSuTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        class=\"mt-1 ml-2 on-header\" [(model)]=\"timKiemObj.NgayNhanSuDuyet\"\n                        label=\"Ngày NS duyệt: Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n                    <app-daterangepicker id=\"GiamDocTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        class=\"mt-1 ml-2 on-header\" [(model)]=\"timKiemObj.NgayGiamDocDuyet\"\n                        label=\"Ngày GĐ duyệt: Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"280px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\"\n                                    color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\"\n                        (click)=\"xuLyXuatExcel()\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n\n            <ng-template #tenHopDongTemplate let-dataItem>\n                <a (click)=\"xemChiTiet(dataItem.Id)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.HopDong}}\">{{dataItem.HopDong}}</p>\n                </a>\n            </ng-template>\n\n            <ng-template #trangThaiTemplate let-dataItem>\n                <div style=\"position: relative;\">\n                    <span [ngClass]=\"{'orangeText': dataItem.TrangThai == 1,\n                          'greenText': dataItem.TrangThai == 2,\n                          'redText': dataItem.TrangThai == 3}\">\n                        {{dataItem.TenTinhTrang}}\n                    </span>\n                </div>\n            </ng-template>\n\n            <ng-template #ngayBatDauKhamTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayBatDauKhamDisplay}}\">\n                    {{dataItem.NgayBatDauKhamDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayKetThucKhamTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayKetThucKhamDisplay}}\">\n                    {{dataItem.NgayKetThucKhamDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayGuiTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayGuiDisplay}}\">{{dataItem.NgayGuiDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayKHTHDuyetTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayKhthDuyetDisplay}}\">\n                    {{dataItem.NgayKhthDuyetDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayNhanSuDuyetTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayNsDuyetDisplay}}\">\n                    {{dataItem.NgayNsDuyetDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayGiamDocDuyetTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayGdDuyetDisplay}}\">{{dataItem.NgayGdDuyetDisplay}}\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.scss": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.scss ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n\n.space-between {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbmhhbi1zdS1kdXlldC9raGFtLWRvYW4tbmhhbi1zdS1kdXlldC1kZXRhaWwtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi1uaGFuLXN1LWR1eWV0XFxraGFtLWRvYW4tbmhhbi1zdS1kdXlldC1kZXRhaWwtcG9wdXBcXGtoYW0tZG9hbi1uaGFuLXN1LWR1eWV0LWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbmhhbi1zdS1kdXlldC9raGFtLWRvYW4tbmhhbi1zdS1kdXlldC1kZXRhaWwtcG9wdXAva2hhbS1kb2FuLW5oYW4tc3UtZHV5ZXQtZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLW5oYW4tc3UtZHV5ZXQva2hhbS1kb2FuLW5oYW4tc3UtZHV5ZXQtZGV0YWlsLXBvcHVwL2toYW0tZG9hbi1uaGFuLXN1LWR1eWV0LWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSIsIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.ts": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.ts ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: KhamDoanNhanSuDuyetDetailPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuDuyetDetailPopupComponent", function () { return KhamDoanNhanSuDuyetDetailPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _kham_doan_khth_duyet_kham_doan_khth_duyet_tu_choi_popup_kham_doan_khth_duyet_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _kham_doan_nhan_su_duyet_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../kham-doan-nhan-su-duyet.model */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet.model.ts");
            var KhamDoanNhanSuDuyetDetailPopupComponent = /** @class */ (function () {
                function KhamDoanNhanSuDuyetDetailPopupComponent(authService, dialog, notificationService, router, apiService, location, route) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.apiService = apiService;
                    this.location = location;
                    this.route = route;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.validationErrors = [];
                    this.format = 'n2';
                    this.gridDiaDiemKhamColumns = [];
                    this.gridNhanSuColumns = [];
                    this.title = 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe';
                    // cần cập nhật lại theo mdel
                    this.diaDiemKhamDisplay = false;
                    this.gridDiaDiemKhamDatasource = {
                        data: [],
                        total: 0
                    };
                    this.gridNhanSuDatasource = {
                        data: [],
                        total: 0
                    };
                    this.khamDoanNhanSuDetail = new _kham_doan_nhan_su_duyet_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauNhanSuKhamSucKhoeDetail"]();
                }
                KhamDoanNhanSuDuyetDetailPopupComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoePhongNhanSu;
                    this.id = this.route.snapshot.params.id;
                    this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
                    this.getData(this.id);
                    this.gridDiaDiemKhamColumns = [
                        { Field: 'DiaDiem', Title: 'Địa điểm khám', Width: 220 },
                        { Field: 'CongViec', Title: 'Công việc', Width: 120 },
                        { Field: 'Ngay', Title: 'Ngày', Width: 100, Template: this.ngayKhamTemplate },
                        { Field: 'GhiChu', Title: 'Ghi chú', Width: 193 }
                    ];
                    this.gridNhanSuColumns = [
                        { Field: 'HoTen', Title: 'Họ tên', Width: 120, Template: this.hoTenTemplate },
                        { Field: 'DonVi', Title: 'Đơn vị', Width: 244, Template: this.donViTemplate },
                        { Field: 'ViTriLamViec', Title: 'Vị trí làm việc', Width: 90 },
                        { Field: 'SoDienThoai', Title: 'SĐT', Width: 90, Template: this.sdtTemplate },
                        { Field: 'DoiTuongLamViecDisplay', Title: 'Đối tượng', Width: 90 },
                        { Field: 'NguoiGioiThieu', Title: 'Người giới thiệu', Width: 120, Template: this.nguoiGioiThieuTemplate },
                        { Field: '', Title: 'Tài liệu ĐK', Width: 209, Template: this.taiLieuTemplate },
                        { Field: 'GhiChu', Title: 'Ghi chú', Width: 100, Template: this.ghiChuTemplate }
                    ];
                };
                KhamDoanNhanSuDuyetDetailPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' },
                        });
                    }
                };
                KhamDoanNhanSuDuyetDetailPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanNhanSuDuyetDetailPopupComponent.prototype.getData = function (id) {
                    var _this = this;
                    this.showPopupLoadingData();
                    this.apiService
                        .get('KhamDoan/GetThongTinYeuCauNhanSuKhamSucKhoe?id=' + id)
                        // tslint:disable-next-line: deprecation
                        .subscribe(function (resultData) {
                        if (resultData.HopDongKhamSucKhoeDiaDiems && resultData.HopDongKhamSucKhoeDiaDiems.some(function (x) { return x; })) {
                            _this.diaDiemKhamDisplay = true;
                            _this.gridDiaDiemKhamDatasource.data = Array.from(resultData.HopDongKhamSucKhoeDiaDiems);
                            _this.gridDiaDiemKhamDatasource.total = resultData.HopDongKhamSucKhoeDiaDiems.length;
                        }
                        _this.khamDoanNhanSuDetail = JSON.parse(JSON.stringify(resultData));
                        _this.gridNhanSuDatasource.data = Array.from(resultData.YeuCauNhanSuKhamSucKhoeChiTiets);
                        _this.gridNhanSuDatasource.total = resultData.YeuCauNhanSuKhamSucKhoeChiTiets.length;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanNhanSuDuyetDetailPopupComponent.prototype.xuLyDuyet = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn duyệt yêu cầu nhân sự khám sức khỏe này không?' }
                        }).afterClosed().subscribe(function (result) {
                            if (result == 'Yes') {
                                var requestDuyet = {
                                    Id: _this.id,
                                    NhanSus: _this.gridNhanSuDatasource.data.filter(function (x) { return x.NguonNhanSu === 2; })
                                };
                                _this.apiService
                                    .post('KhamDoan/DuyetPhongNhanSu', requestDuyet)
                                    // tslint:disable-next-line: deprecation
                                    .subscribe(function () {
                                    _this.notificationService.showSuccess('Đã duyệt nhân sự thành công');
                                    _this.quayLai();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message !== 'Validation Failed') {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanNhanSuDuyetDetailPopupComponent.prototype.xuLyTuChoi = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.dialog.open(_kham_doan_khth_duyet_kham_doan_khth_duyet_tu_choi_popup_kham_doan_khth_duyet_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_14__["KhamDoanKhthDuyetTuChoiPopupComponent"], {
                            disableClose: false,
                            width: '600px',
                            data: { Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn từ chối yêu cầu nhân sự khám sức khỏe này không?' }
                        }).afterClosed().subscribe(function (result) {
                            if (result) {
                                var requestTuChoi = {
                                    Id: _this.id,
                                    LyDo: result
                                };
                                _this.apiService
                                    .post('KhamDoan/TuChoiDuyetPhongNhanSu', requestTuChoi)
                                    // tslint:disable-next-line: deprecation
                                    .subscribe(function () {
                                    _this.notificationService.showSuccess('Đã từ chối nhân sự thành công');
                                    _this.quayLai();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message !== 'Validation Failed') {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanNhanSuDuyetDetailPopupComponent.prototype.getTenTaiLieuDinhKem = function (dataItem) {
                    return dataItem != null ?
                        dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null && dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem.some(function (x) { return x; }) ?
                            dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem[0].Ten : '' : '';
                };
                KhamDoanNhanSuDuyetDetailPopupComponent.prototype.quayLai = function () {
                    this.router.navigateByUrl('/kham-doan/nhan-su-duyet?holdQuery=true');
                };
                return KhamDoanNhanSuDuyetDetailPopupComponent;
            }());
            KhamDoanNhanSuDuyetDetailPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhamTemplate', { static: true })
            ], KhamDoanNhanSuDuyetDetailPopupComponent.prototype, "ngayKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hoTenTemplate', { static: true })
            ], KhamDoanNhanSuDuyetDetailPopupComponent.prototype, "hoTenTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donViTemplate', { static: true })
            ], KhamDoanNhanSuDuyetDetailPopupComponent.prototype, "donViTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sdtTemplate', { static: true })
            ], KhamDoanNhanSuDuyetDetailPopupComponent.prototype, "sdtTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiGioiThieuTemplate', { static: true })
            ], KhamDoanNhanSuDuyetDetailPopupComponent.prototype, "nguoiGioiThieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taiLieuTemplate', { static: true })
            ], KhamDoanNhanSuDuyetDetailPopupComponent.prototype, "taiLieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ghiChuTemplate', { static: true })
            ], KhamDoanNhanSuDuyetDetailPopupComponent.prototype, "ghiChuTemplate", void 0);
            KhamDoanNhanSuDuyetDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-kham-doan-nhan-su-duyet-detail-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-nhan-su-duyet-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-nhan-su-duyet-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.scss")).default]
                })
            ], KhamDoanNhanSuDuyetDetailPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbmhhbi1zdS1kdXlldC9raGFtLWRvYW4tbmhhbi1zdS1kdXlldC1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4tbmhhbi1zdS1kdXlldFxca2hhbS1kb2FuLW5oYW4tc3UtZHV5ZXQtbGlzdFxca2hhbS1kb2FuLW5oYW4tc3UtZHV5ZXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbmhhbi1zdS1kdXlldC9raGFtLWRvYW4tbmhhbi1zdS1kdXlldC1saXN0L2toYW0tZG9hbi1uaGFuLXN1LWR1eWV0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1uaGFuLXN1LWR1eWV0L2toYW0tZG9hbi1uaGFuLXN1LWR1eWV0LWxpc3Qva2hhbS1kb2FuLW5oYW4tc3UtZHV5ZXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufSIsIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: KhamDoanNhanSuDuyetListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuDuyetListComponent", function () { return KhamDoanNhanSuDuyetListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _kham_doan_nhan_su_duyet_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../kham-doan-nhan-su-duyet.model */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var KhamDoanNhanSuDuyetListComponent = /** @class */ (function () {
                function KhamDoanNhanSuDuyetListComponent(authService, notificationService, route, dialog, apiService, router) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.router = router;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
                    this.baseRoute = '/kham-doan/nhan-su-duyet';
                    this.gridColumns = [];
                    this._gridColumnsFilter = [];
                    this._isCheckColumnFilter = true;
                    this.strAdditionalSearchString = '';
                    this.sort = [{
                            field: 'TrangThai',
                            dir: 'asc'
                        }];
                    this.urlGetData = 'KhamDoan/GetDataForYeuCauNhanSuKhamSucKhoePhongNhanSuGridAsync';
                    this.urlTotalPage = 'KhamDoan/GetTotalPageForYeuCauNhanSuKhamSucKhoePhongNhanSuGridAsync';
                    this.timKiemObj = new _kham_doan_nhan_su_duyet_model__WEBPACK_IMPORTED_MODULE_17__["KhamDoanNhanSuDuyetTimKiem"]();
                }
                KhamDoanNhanSuDuyetListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoePhongNhanSu;
                    var holdQuery;
                    if (this.route.snapshot.queryParams.holdQuery != null) {
                        holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (holdQuery && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_13__["LocalStorageHelper"].getItem('additionalSearchStringDanhSachNhanSuDuyetYeuCauNhanSuKhamSucKhoe')) {
                        var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_13__["LocalStorageHelper"].getItem('additionalSearchStringDanhSachNhanSuDuyetYeuCauNhanSuKhamSucKhoe');
                        if (additionalSearchString != null) {
                            this.timKiemObj = JSON.parse(additionalSearchString);
                            if (this.timKiemObj.NgayGui != null) {
                                if (this.timKiemObj.NgayGui.startDate != null) {
                                    var startDate = new Date(this.timKiemObj.NgayGui.startDate);
                                    this.timKiemObj.NgayGui.startDate = new Date(startDate);
                                }
                                if (this.timKiemObj.NgayGui.endDate != null) {
                                    var endDate = new Date(this.timKiemObj.NgayGui.endDate);
                                    this.timKiemObj.NgayGui.endDate = new Date(endDate);
                                }
                            }
                            if (this.timKiemObj.NgayKHTHDuyet != null) {
                                if (this.timKiemObj.NgayKHTHDuyet.startDate != null) {
                                    var startDate = new Date(this.timKiemObj.NgayKHTHDuyet.startDate);
                                    this.timKiemObj.NgayKHTHDuyet.startDate = new Date(startDate);
                                }
                                if (this.timKiemObj.NgayKHTHDuyet.endDate != null) {
                                    var endDate = new Date(this.timKiemObj.NgayKHTHDuyet.endDate);
                                    this.timKiemObj.NgayKHTHDuyet.endDate = new Date(endDate);
                                }
                            }
                            if (this.timKiemObj.NgayNhanSuDuyet != null) {
                                if (this.timKiemObj.NgayNhanSuDuyet.startDate != null) {
                                    var startDate = new Date(this.timKiemObj.NgayNhanSuDuyet.startDate);
                                    this.timKiemObj.NgayNhanSuDuyet.startDate = new Date(startDate);
                                }
                                if (this.timKiemObj.NgayNhanSuDuyet.endDate != null) {
                                    var endDate = new Date(this.timKiemObj.NgayNhanSuDuyet.endDate);
                                    this.timKiemObj.NgayNhanSuDuyet.endDate = new Date(endDate);
                                }
                            }
                            if (this.timKiemObj.NgayGiamDocDuyet != null) {
                                if (this.timKiemObj.NgayGiamDocDuyet.startDate != null) {
                                    var startDate = new Date(this.timKiemObj.NgayGiamDocDuyet.startDate);
                                    this.timKiemObj.NgayGiamDocDuyet.startDate = new Date(startDate);
                                }
                                if (this.timKiemObj.NgayGiamDocDuyet.endDate != null) {
                                    var endDate = new Date(this.timKiemObj.NgayGiamDocDuyet.endDate);
                                    this.timKiemObj.NgayGiamDocDuyet.endDate = new Date(endDate);
                                }
                            }
                            this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                        }
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_13__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachNhanSuDuyetYeuCauNhanSuKhamSucKhoe");
                        var queryString = JSON.stringify(this.timKiemObj);
                        this.gridChild.additionalSearchString = queryString;
                    }
                    this.gridColumns = [
                        { Field: 'HopDong', Title: 'Hợp đồng', Width: 165, Sortable: true, Template: this.tenHopDongTemplate },
                        { Field: 'TenCongTy', Title: 'Tên công ty', Width: 106, Sortable: true, ShowTooltip: true },
                        { Field: 'SoLuongBn', Title: 'SL NB ', Width: 65, Sortable: true },
                        { Field: 'SoLuongBs', Title: 'SL BS', Width: 65, Sortable: true },
                        { Field: 'SoLuongDd', Title: 'SL ĐD', Width: 65, Sortable: true },
                        { Field: 'NhanVienKhac', Title: 'NV Khác', Width: 85, Sortable: true },
                        { Field: 'NgayBatDauKham', Title: 'Ngày BĐ khám', Width: 118, Sortable: true, Template: this.ngayBatDauKhamTemplate },
                        { Field: 'NgayKetThucKham', Title: 'Ngày KT khám', Width: 119, Sortable: true, Template: this.ngayKetThucKhamTemplate },
                        { Field: 'NguoiGui', Title: 'Người gửi', Width: 87, Sortable: true },
                        { Field: 'NgayGui', Title: 'Ngày gửi', Width: 157, Sortable: true, Template: this.ngayGuiTemplate },
                        { Field: 'KhthDuyet', Title: 'KHTH duyệt', Width: 99, Sortable: true },
                        { Field: 'NgayKhthDuyet', Title: 'Ngày KHTH duyệt', Width: 141, Sortable: true, Template: this.ngayKHTHDuyetTemplate },
                        { Field: 'NsDuyet', Title: 'NS duyệt', Width: 85, Sortable: true },
                        { Field: 'NgayNsDuyet', Title: 'Ngày NS duyệt', Width: 120, Sortable: true, Template: this.ngayNhanSuDuyetTemplate },
                        { Field: 'GdDuyet', Title: 'GĐ duyệt', Width: 84, Sortable: true },
                        { Field: 'NgayGdDuyet', Title: 'Ngày GĐ duyệt', Width: 121, Sortable: true, Template: this.ngayGiamDocDuyetTemplate },
                        { Field: 'TrangThai', Title: 'Trạng thái', Width: 121, Sortable: true, Template: this.trangThaiTemplate }
                    ];
                    this._gridColumnsFilter = this.gridColumns.filter(function (p) { return p.Title != ''; });
                };
                KhamDoanNhanSuDuyetListComponent.prototype.searchChanges = function (event) {
                    if ((event == null || event == '') && this.strAdditionalSearchString != '') {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanNhanSuDuyetListComponent.prototype.onKey = function (event) {
                    if (event.key == 'Enter') {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanNhanSuDuyetListComponent.prototype.clearSearch = function () {
                    this.timKiemObj.SearchString = null;
                    this.gridChild.searchString = null;
                    this.timKiemNangCao();
                };
                KhamDoanNhanSuDuyetListComponent.prototype.timKiemNangCao = function () {
                    this.router.navigateByUrl(this.baseRoute + "?holdQuery=true");
                    var searchClone = JSON.parse(JSON.stringify(this.timKiemObj));
                    if (searchClone.NgayGui.startDate != null) {
                        var startDate = new Date(searchClone.NgayGui.startDate);
                        searchClone.NgayGui.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                    }
                    if (searchClone.NgayGui.endDate != null) {
                        var endDate = new Date(searchClone.NgayGui.endDate);
                        searchClone.NgayGui.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (searchClone.NgayKHTHDuyet.startDate != null) {
                        var startDate = new Date(searchClone.NgayKHTHDuyet.startDate);
                        searchClone.NgayKHTHDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                    }
                    if (searchClone.NgayKHTHDuyet.endDate != null) {
                        var endDate = new Date(searchClone.NgayKHTHDuyet.endDate);
                        searchClone.NgayKHTHDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (searchClone.NgayNhanSuDuyet.startDate != null) {
                        var startDate = new Date(searchClone.NgayNhanSuDuyet.startDate);
                        searchClone.NgayNhanSuDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                    }
                    if (searchClone.NgayNhanSuDuyet.endDate != null) {
                        var endDate = new Date(searchClone.NgayNhanSuDuyet.endDate);
                        searchClone.NgayNhanSuDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (searchClone.NgayGiamDocDuyet.startDate != null) {
                        var startDate = new Date(searchClone.NgayGiamDocDuyet.startDate);
                        searchClone.NgayGiamDocDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                    }
                    if (searchClone.NgayGiamDocDuyet.endDate != null) {
                        var endDate = new Date(searchClone.NgayGiamDocDuyet.endDate);
                        searchClone.NgayGiamDocDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    this.strAdditionalSearchString = JSON.stringify(searchClone);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_13__["LocalStorageHelper"].setItem('additionalSearchStringDanhSachNhanSuDuyetYeuCauNhanSuKhamSucKhoe', this.strAdditionalSearchString);
                    this.gridChild._additionalSearchString = this.strAdditionalSearchString;
                    this.gridChild.search();
                };
                KhamDoanNhanSuDuyetListComponent.prototype.xuLyXuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel('KhamDoan/ExportDanhSachYeuCauNhanSuKhamSucKhoe', this.gridChild._gridQueryInfo)
                            // tslint:disable-next-line: deprecation
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'YeuCauNhanSuKhamSucKhoe' + dateTimeNow.getFullYear() + '.xlsx');
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanNhanSuDuyetListComponent.prototype.xemChiTiet = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Update)) {
                        this.router.navigate([this.baseRoute + '/chi-tiet/' + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return KhamDoanNhanSuDuyetListComponent;
            }());
            KhamDoanNhanSuDuyetListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenHopDongTemplate', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "tenHopDongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayBatDauKhamTemplate', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "ngayBatDauKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucKhamTemplate', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "ngayKetThucKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGuiTemplate', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "ngayGuiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKHTHDuyetTemplate', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "ngayKHTHDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhanSuDuyetTemplate', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "ngayNhanSuDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDuyetTemplate', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "ngayGiamDocDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
            ], KhamDoanNhanSuDuyetListComponent.prototype, "gridChild", void 0);
            KhamDoanNhanSuDuyetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-kham-doan-nhan-su-duyet-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-nhan-su-duyet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-nhan-su-duyet-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.scss")).default]
                })
            ], KhamDoanNhanSuDuyetListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-routing.module.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-routing.module.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: KhamDoanNhanSuDuyetRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuDuyetRoutingModule", function () { return KhamDoanNhanSuDuyetRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_nhan_su_duyet_detail_popup_kham_doan_nhan_su_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_nhan_su_duyet_list_kham_doan_nhan_su_duyet_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _kham_doan_nhan_su_duyet_list_kham_doan_nhan_su_duyet_list_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanNhanSuDuyetListComponent"],
                    data: {
                        title: "Duyệt yêu cầu nhân sự khám sức khỏe - nhân sự",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoePhongNhanSu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    }
                },
                {
                    path: 'chi-tiet/:id',
                    component: _kham_doan_nhan_su_duyet_detail_popup_kham_doan_nhan_su_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanNhanSuDuyetDetailPopupComponent"],
                    data: {
                        title: 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe - nhân sự',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoePhongNhanSu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var KhamDoanNhanSuDuyetRoutingModule = /** @class */ (function () {
                function KhamDoanNhanSuDuyetRoutingModule() {
                }
                return KhamDoanNhanSuDuyetRoutingModule;
            }());
            KhamDoanNhanSuDuyetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], KhamDoanNhanSuDuyetRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet.model.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet.model.ts ***!
          \*************************************************************************************************/
        /*! exports provided: KhamDoanNhanSuDuyetTimKiem, KhamDoanNhanSuDuyetTimKiemTrangThai, KhamDoanNhanSuDuyetTimKiemDateRange, YeuCauNhanSuKhamSucKhoeDetail, YeuCauNhanSuKhamSucKhoeChiTiet, FileTaiLieu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuDuyetTimKiem", function () { return KhamDoanNhanSuDuyetTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuDuyetTimKiemTrangThai", function () { return KhamDoanNhanSuDuyetTimKiemTrangThai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuDuyetTimKiemDateRange", function () { return KhamDoanNhanSuDuyetTimKiemDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauNhanSuKhamSucKhoeDetail", function () { return YeuCauNhanSuKhamSucKhoeDetail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauNhanSuKhamSucKhoeChiTiet", function () { return YeuCauNhanSuKhamSucKhoeChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTaiLieu", function () { return FileTaiLieu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var KhamDoanNhanSuDuyetTimKiem = /** @class */ (function () {
                function KhamDoanNhanSuDuyetTimKiem(SearchString, TrangThai, NgayGui, NgayKHTHDuyet, NgayNhanSuDuyet, NgayGiamDocDuyet) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (TrangThai === void 0) { TrangThai = new KhamDoanNhanSuDuyetTimKiemTrangThai(); }
                    if (NgayGui === void 0) { NgayGui = new KhamDoanNhanSuDuyetTimKiemDateRange(); }
                    if (NgayKHTHDuyet === void 0) { NgayKHTHDuyet = new KhamDoanNhanSuDuyetTimKiemDateRange(); }
                    if (NgayNhanSuDuyet === void 0) { NgayNhanSuDuyet = new KhamDoanNhanSuDuyetTimKiemDateRange(); }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = new KhamDoanNhanSuDuyetTimKiemDateRange(); }
                    this.SearchString = SearchString;
                    this.TrangThai = TrangThai;
                    this.NgayGui = NgayGui;
                    this.NgayKHTHDuyet = NgayKHTHDuyet;
                    this.NgayNhanSuDuyet = NgayNhanSuDuyet;
                    this.NgayGiamDocDuyet = NgayGiamDocDuyet;
                }
                return KhamDoanNhanSuDuyetTimKiem;
            }());
            var KhamDoanNhanSuDuyetTimKiemTrangThai = /** @class */ (function () {
                function KhamDoanNhanSuDuyetTimKiemTrangThai(ChoDuyet, DaDuyet, TuChoi) {
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = true; }
                    if (TuChoi === void 0) { TuChoi = true; }
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuChoi = TuChoi;
                }
                return KhamDoanNhanSuDuyetTimKiemTrangThai;
            }());
            var KhamDoanNhanSuDuyetTimKiemDateRange = /** @class */ (function () {
                function KhamDoanNhanSuDuyetTimKiemDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return KhamDoanNhanSuDuyetTimKiemDateRange;
            }());
            var YeuCauNhanSuKhamSucKhoeDetail = /** @class */ (function () {
                function YeuCauNhanSuKhamSucKhoeDetail(Id, HopDongKhamSucKhoeId, CongTyId, CongTy, SoNguoiKham, NgayHieuLuc, NgayHieuLucDisplay, NgayKetThuc, NgayKetThucDisplay, TongSoBs, TongSoDd, TongNvKhac, NhanVienGuiYeuCauId, NhanVienGui, NgayGuiYeuCau, DuocKHTHDuyet, NgayKHTHDuyet, NgayKhthDuyetDisplay, NhanVienKHTHDuyetId, NhanVienKhthDuyet, LyDoKHTHKhongDuyet, DuocNhanSuDuyet, NgayNhanSuDuyet, NgayNhanSuDuyetDisplay, NhanVienNhanSuDuyetId, NhanVienNhanSuDuyet, LyDoNhanSuKhongDuyet, DuocGiamDocDuyet, NgayGiamDocDuyet, NgayGiamDocDuyetDisplay, GiamDocId, GiamDoc, LyDoGiamDocKhongDuyet, TrangThai, TenTinhTrang, YeuCauNhanSuKhamSucKhoeChiTiets) {
                    if (Id === void 0) { Id = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (CongTyId === void 0) { CongTyId = null; }
                    if (CongTy === void 0) { CongTy = null; }
                    if (SoNguoiKham === void 0) { SoNguoiKham = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayHieuLucDisplay === void 0) { NgayHieuLucDisplay = null; }
                    if (NgayKetThuc === void 0) { NgayKetThuc = null; }
                    if (NgayKetThucDisplay === void 0) { NgayKetThucDisplay = null; }
                    if (TongSoBs === void 0) { TongSoBs = 0; }
                    if (TongSoDd === void 0) { TongSoDd = 0; }
                    if (TongNvKhac === void 0) { TongNvKhac = 0; }
                    if (NhanVienGuiYeuCauId === void 0) { NhanVienGuiYeuCauId = null; }
                    if (NhanVienGui === void 0) { NhanVienGui = null; }
                    if (NgayGuiYeuCau === void 0) { NgayGuiYeuCau = null; }
                    if (DuocKHTHDuyet === void 0) { DuocKHTHDuyet = null; }
                    if (NgayKHTHDuyet === void 0) { NgayKHTHDuyet = null; }
                    if (NgayKhthDuyetDisplay === void 0) { NgayKhthDuyetDisplay = null; }
                    if (NhanVienKHTHDuyetId === void 0) { NhanVienKHTHDuyetId = null; }
                    if (NhanVienKhthDuyet === void 0) { NhanVienKhthDuyet = null; }
                    if (LyDoKHTHKhongDuyet === void 0) { LyDoKHTHKhongDuyet = null; }
                    if (DuocNhanSuDuyet === void 0) { DuocNhanSuDuyet = null; }
                    if (NgayNhanSuDuyet === void 0) { NgayNhanSuDuyet = null; }
                    if (NgayNhanSuDuyetDisplay === void 0) { NgayNhanSuDuyetDisplay = null; }
                    if (NhanVienNhanSuDuyetId === void 0) { NhanVienNhanSuDuyetId = null; }
                    if (NhanVienNhanSuDuyet === void 0) { NhanVienNhanSuDuyet = null; }
                    if (LyDoNhanSuKhongDuyet === void 0) { LyDoNhanSuKhongDuyet = null; }
                    if (DuocGiamDocDuyet === void 0) { DuocGiamDocDuyet = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (NgayGiamDocDuyetDisplay === void 0) { NgayGiamDocDuyetDisplay = null; }
                    if (GiamDocId === void 0) { GiamDocId = null; }
                    if (GiamDoc === void 0) { GiamDoc = null; }
                    if (LyDoGiamDocKhongDuyet === void 0) { LyDoGiamDocKhongDuyet = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TenTinhTrang === void 0) { TenTinhTrang = null; }
                    if (YeuCauNhanSuKhamSucKhoeChiTiets === void 0) { YeuCauNhanSuKhamSucKhoeChiTiets = []; }
                    this.Id = Id;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.CongTyId = CongTyId;
                    this.CongTy = CongTy;
                    this.SoNguoiKham = SoNguoiKham;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayHieuLucDisplay = NgayHieuLucDisplay;
                    this.NgayKetThuc = NgayKetThuc;
                    this.NgayKetThucDisplay = NgayKetThucDisplay;
                    this.TongSoBs = TongSoBs;
                    this.TongSoDd = TongSoDd;
                    this.TongNvKhac = TongNvKhac;
                    this.NhanVienGuiYeuCauId = NhanVienGuiYeuCauId;
                    this.NhanVienGui = NhanVienGui;
                    this.NgayGuiYeuCau = NgayGuiYeuCau;
                    this.DuocKHTHDuyet = DuocKHTHDuyet;
                    this.NgayKHTHDuyet = NgayKHTHDuyet;
                    this.NgayKhthDuyetDisplay = NgayKhthDuyetDisplay;
                    this.NhanVienKHTHDuyetId = NhanVienKHTHDuyetId;
                    this.NhanVienKhthDuyet = NhanVienKhthDuyet;
                    this.LyDoKHTHKhongDuyet = LyDoKHTHKhongDuyet;
                    this.DuocNhanSuDuyet = DuocNhanSuDuyet;
                    this.NgayNhanSuDuyet = NgayNhanSuDuyet;
                    this.NgayNhanSuDuyetDisplay = NgayNhanSuDuyetDisplay;
                    this.NhanVienNhanSuDuyetId = NhanVienNhanSuDuyetId;
                    this.NhanVienNhanSuDuyet = NhanVienNhanSuDuyet;
                    this.LyDoNhanSuKhongDuyet = LyDoNhanSuKhongDuyet;
                    this.DuocGiamDocDuyet = DuocGiamDocDuyet;
                    this.NgayGiamDocDuyet = NgayGiamDocDuyet;
                    this.NgayGiamDocDuyetDisplay = NgayGiamDocDuyetDisplay;
                    this.GiamDocId = GiamDocId;
                    this.GiamDoc = GiamDoc;
                    this.LyDoGiamDocKhongDuyet = LyDoGiamDocKhongDuyet;
                    this.TrangThai = TrangThai;
                    this.TenTinhTrang = TenTinhTrang;
                    this.YeuCauNhanSuKhamSucKhoeChiTiets = YeuCauNhanSuKhamSucKhoeChiTiets;
                }
                return YeuCauNhanSuKhamSucKhoeDetail;
            }());
            var YeuCauNhanSuKhamSucKhoeChiTiet = /** @class */ (function () {
                function YeuCauNhanSuKhamSucKhoeChiTiet(Id, NguonNhanSu, HoTen, NhanVienId, DonVi, ViTriLamViec, SoDienThoai, DoiTuongLamViec, DoiTuongLamViecDisplay, NguoiGioiThieuId, NguoiGioiThieu, NhanSuKhamSucKhoeTaiLieuDinhKem, NhanSuKhamSucKhoeTaiLieuDinhKemId, LoaiNhanVien, GhiChu, IsCreate, IsUpdate) {
                    if (Id === void 0) { Id = null; }
                    if (NguonNhanSu === void 0) { NguonNhanSu = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NhanVienId === void 0) { NhanVienId = null; }
                    if (DonVi === void 0) { DonVi = null; }
                    if (ViTriLamViec === void 0) { ViTriLamViec = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (DoiTuongLamViec === void 0) { DoiTuongLamViec = null; }
                    if (DoiTuongLamViecDisplay === void 0) { DoiTuongLamViecDisplay = null; }
                    if (NguoiGioiThieuId === void 0) { NguoiGioiThieuId = null; }
                    if (NguoiGioiThieu === void 0) { NguoiGioiThieu = null; }
                    if (NhanSuKhamSucKhoeTaiLieuDinhKem === void 0) { NhanSuKhamSucKhoeTaiLieuDinhKem = []; }
                    if (NhanSuKhamSucKhoeTaiLieuDinhKemId === void 0) { NhanSuKhamSucKhoeTaiLieuDinhKemId = null; }
                    if (LoaiNhanVien === void 0) { LoaiNhanVien = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (IsCreate === void 0) { IsCreate = null; }
                    if (IsUpdate === void 0) { IsUpdate = null; }
                    this.Id = Id;
                    this.NguonNhanSu = NguonNhanSu;
                    this.HoTen = HoTen;
                    this.NhanVienId = NhanVienId;
                    this.DonVi = DonVi;
                    this.ViTriLamViec = ViTriLamViec;
                    this.SoDienThoai = SoDienThoai;
                    this.DoiTuongLamViec = DoiTuongLamViec;
                    this.DoiTuongLamViecDisplay = DoiTuongLamViecDisplay;
                    this.NguoiGioiThieuId = NguoiGioiThieuId;
                    this.NguoiGioiThieu = NguoiGioiThieu;
                    this.NhanSuKhamSucKhoeTaiLieuDinhKem = NhanSuKhamSucKhoeTaiLieuDinhKem;
                    this.NhanSuKhamSucKhoeTaiLieuDinhKemId = NhanSuKhamSucKhoeTaiLieuDinhKemId;
                    this.LoaiNhanVien = LoaiNhanVien;
                    this.GhiChu = GhiChu;
                    this.IsCreate = IsCreate;
                    this.IsUpdate = IsUpdate;
                }
                return YeuCauNhanSuKhamSucKhoeChiTiet;
            }());
            var FileTaiLieu = /** @class */ (function () {
                function FileTaiLieu(Id, Ma, Ten, TenGuid, DuongDan, MoTa, KichThuoc, LoaiTapTin) {
                    if (Id === void 0) { Id = 0; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenGuid === void 0) { TenGuid = null; }
                    if (DuongDan === void 0) { DuongDan = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (KichThuoc === void 0) { KichThuoc = 0; }
                    if (LoaiTapTin === void 0) { LoaiTapTin = null; }
                    this.Id = Id;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.TenGuid = TenGuid;
                    this.DuongDan = DuongDan;
                    this.MoTa = MoTa;
                    this.KichThuoc = KichThuoc;
                    this.LoaiTapTin = LoaiTapTin;
                }
                return FileTaiLieu;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet.module.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet.module.ts ***!
          \**************************************************************************************************/
        /*! exports provided: KhamDoanNhanSuDuyetModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuDuyetModule", function () { return KhamDoanNhanSuDuyetModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _kham_doan_nhan_su_duyet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-nhan-su-duyet-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-routing.module.ts");
            /* harmony import */ var _kham_doan_nhan_su_duyet_list_kham_doan_nhan_su_duyet_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component.ts");
            /* harmony import */ var _kham_doan_nhan_su_duyet_detail_popup_kham_doan_nhan_su_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _kham_doan_khth_duyet_kham_doan_khth_duyet_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../kham-doan-khth-duyet/kham-doan-khth-duyet.module */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet.module.ts");
            var KhamDoanNhanSuDuyetModule = /** @class */ (function () {
                function KhamDoanNhanSuDuyetModule() {
                }
                return KhamDoanNhanSuDuyetModule;
            }());
            KhamDoanNhanSuDuyetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _kham_doan_nhan_su_duyet_list_kham_doan_nhan_su_duyet_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanNhanSuDuyetListComponent"],
                        _kham_doan_nhan_su_duyet_detail_popup_kham_doan_nhan_su_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanNhanSuDuyetDetailPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _kham_doan_nhan_su_duyet_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanNhanSuDuyetRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                        _kham_doan_khth_duyet_kham_doan_khth_duyet_module__WEBPACK_IMPORTED_MODULE_18__["KhamDoanKhthDuyetModule"]
                    ],
                    entryComponents: [
                        _kham_doan_nhan_su_duyet_detail_popup_kham_doan_nhan_su_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanNhanSuDuyetDetailPopupComponent"]
                    ]
                })
            ], KhamDoanNhanSuDuyetModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=kham-doan-kham-doan-nhan-su-duyet-kham-doan-nhan-su-duyet-module-es2015.js.map
//# sourceMappingURL=kham-doan-kham-doan-nhan-su-duyet-kham-doan-nhan-su-duyet-module-es5.js.map
//# sourceMappingURL=kham-doan-kham-doan-nhan-su-duyet-kham-doan-nhan-su-duyet-module-es5.js.map