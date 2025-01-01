(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-doan-kham-doan-giam-doc-duyet-kham-doan-giam-doc-duyet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[ {Title:'Khám Đoàn',Path:''}\n        ,{Title:'DS Duyệt Yêu Cầu Nhân Sự Khám Sức Khỏe - Giám Đốc', Path: '/kham-doan/giam-doc-duyet', queryParams: {holdQuery : true}}\n        ,{Title: 'Chi Tiết Duyệt Yêu Cầu Nhân Sự Khám Sức Khỏe',Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"space-between\">\n                <h2 class=\"title m-0\">{{title}}</h2>\n                <label [ngClass]=\"{'orangeText': khamDoanNhanSuDetail.TrangThai == 1,\n                        'greenText': khamDoanNhanSuDetail.TrangThai == 2,\n                        'redText': khamDoanNhanSuDetail.TrangThai == 3}\">\n                    {{khamDoanNhanSuDetail.TenTinhTrang}}\n                </label>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-combobox id=\"congTy\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n                        [(model)]=\"khamDoanNhanSuDetail.CongTyId\" [modelText]=\"khamDoanNhanSuDetail.CongTy\"\n                        url=\"KhamDoan/GetCongTys\" hierarchyKeyToSend=\"CongTyId\" [disabled]=\"true\"\n                        [validationerror]=\"'CongTyId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-combobox id=\"hopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hợp đồng\"\n                        url=\"KhamDoan/GetHopDongKhamSucKhoes\" [required]=\"true\" hierarchyKeyToListen=\"CongTyId\"\n                        [(model)]=\"khamDoanNhanSuDetail.HopDongKhamSucKhoeId\" [disabled]=\"true\"\n                        [validationerror]=\"'HopDongKhamSucKhoeId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-textboxnumeric id=\"soLuongBenhNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"SL NB \"\n                        [(model)]=\"khamDoanNhanSuDetail.SoNguoiKham\" [decimals]=\"0\" [disabled]=\"true\">\n                    </app-textboxnumeric>\n                    <app-datepicker id=\"ngayBatDauKham\" [(model)]=\"khamDoanNhanSuDetail.NgayHieuLuc\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" label=\"Ngày BĐ khám\" [disabled]=\"true\">\n                    </app-datepicker>\n                    <app-datepicker id=\"NgayKetThucKham\" [(model)]=\"khamDoanNhanSuDetail.NgayKetThuc\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" label=\"Ngày KT khám\" [disabled]=\"true\">\n                    </app-datepicker>\n\n                    <app-grid *ngIf=\"diaDiemKhamDisplay==true\" fxFlex=\"100%\" fxFlex.sm=\"100%\" masterName=\"diaDiemKham\"\n                        [gridColumns]=\"gridDiaDiemKhamColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                        class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [checkboxAble]=\"false\" [maxHeight]=\"200\" [lazyLoadPage]=\"true\"\n                        [gridDataSource]=\"gridDiaDiemKhamDatasource\" style=\"width: 1px;\" [pageable]=\"false\">\n                    </app-grid>\n                    <ng-template #ngayKhamTemplate let-dataItem>\n                        {{dataItem.NgayDisplay}}\n                    </ng-template>\n\n                    <app-textboxnumeric id=\"tongSoLuongBacSi\" [(model)]=\"khamDoanNhanSuDetail.TongSoBs\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng SL BS\" [decimals]=\"0\" [disabled]=\"true\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"tongSoLuongDieuDuong\" [(model)]=\"khamDoanNhanSuDetail.TongSoDd\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng SL ĐD\" [decimals]=\"0\" [disabled]=\"true\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"tongSoLuongNhanVienKhac\" [(model)]=\"khamDoanNhanSuDetail.TongNvKhac\"\n                        fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng NV khác\" [decimals]=\"0\"\n                        [disabled]=\"true\">\n                    </app-textboxnumeric>\n\n                    <ng-container *ngIf=\"id!=0\">\n                        <app-combobox id=\"nguoiGuiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Người gửi\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienGuiYeuCauId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienGui\" url=\"KhamDoan/GetListNguoiGui\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"ngayGui\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày gửi\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayGuiYeuCau\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet == true\">\n                        <app-combobox id=\"KHTHDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"KHTH duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienKHTHDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienKhthDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"ngayKHTHDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày KHTH duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayKHTHDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet == false\">\n                        <app-combobox id=\"KHTHTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"KHTH từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienKHTHDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienKhthDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"ngayKHTHTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày KHTH từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayKHTHDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                        <app-textarea id=\"lyDoKHTHTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                            [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                            label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoKHTHKhongDuyet\">\n                        </app-textarea>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocNhanSuDuyet == true\">\n                        <app-combobox id=\"NhanVienNhanSuDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"NS duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"NgayNhanSuDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày NS duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayNhanSuDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocNhanSuDuyet == false\">\n                        <app-combobox id=\"NSTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"NS từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"NgayNhanSuDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày NS từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayNhanSuDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                        <app-textarea id=\"lyDoNSTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                            [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                            label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoNhanSuKhongDuyet\">\n                        </app-textarea>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocGiamDocDuyet == true\">\n                        <app-combobox id=\"GiamDocId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"GĐ duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.GiamDocId\" [modelText]=\"khamDoanNhanSuDetail.GiamDoc\"\n                            url=\"KhamDoan/GetListNguoiDuyet\" [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"NgayGiamDocDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày GĐ duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayGiamDocDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocGiamDocDuyet == false\">\n                        <app-combobox id=\"GDTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"GĐ từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.GiamDocId\" [modelText]=\"khamDoanNhanSuDetail.GiamDoc\"\n                            url=\"KhamDoan/GetListNguoiDuyet\" [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"NgayGDDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày GĐ từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayGiamDocDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                        <app-textarea id=\"lyDoNSTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                            [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                            label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoGiamDocKhongDuyet\">\n                        </app-textarea>\n                    </ng-container>\n\n                    <h3 fxFlex=\"100%\" class=\"sub-title\">Danh Sách Nhân Sự</h3>\n\n\n                    <app-grid #gridNhanSu fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n                        [gridColumns]=\"gridNhanSuColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\"\n                        [useAddDeault]=\"false\" [showStt]=\"true\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n                        [gridDataSource]=\"gridNhanSuDatasource\">\n                    </app-grid>\n\n                    <ng-template #taiLieuTemplate let-dataItem>\n                        <a *ngIf=\"dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{getTenTaiLieuDinhKem(dataItem)}}\">\n                                {{getTenTaiLieuDinhKem(dataItem)}}\n                            </p>\n                        </a>\n                    </ng-template>\n                </div>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n                    (click)=\"quayLai()\">Hủy</button>\n                <button *ngIf=\"khamDoanNhanSuDetail.DuocGiamDocDuyet != true  && khamDoanNhanSuDetail.TrangThai==1\" mat-raised-button mat-button color=\"primary\"\n                    (click)=\"xuLyDuyet()\">Duyệt</button>\n                <button *ngIf=\"khamDoanNhanSuDetail.DuocGiamDocDuyet != true  && khamDoanNhanSuDetail.TrangThai==1\" mat-raised-button mat-button color=\"warn\"\n                    (click)=\"xuLyTuChoi()\">Từ chối</button>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Duyệt Yêu Cầu Nhân Sự Khám Sức Khỏe - Giám Đốc',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [searchString]=\"timKiemObj.SearchString\" [showStt]=\"true\"\n                [sort]=\"sort\" [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlTotalPage\">\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox [(model)]=\"timKiemObj.TrangThai.ChoDuyet\" id=\"choDuyet\" label=\"Chờ duyệt\"\n                        class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                    </app-checkbox>\n                    <app-checkbox [(model)]=\"timKiemObj.TrangThai.DaDuyet\" id=\"daDuyet\" label=\"Đã duyệt\" class=\"ml-2\"\n                        (modelChange)=\"timKiemNangCao()\">\n                    </app-checkbox>\n                    <app-checkbox [(model)]=\"timKiemObj.TrangThai.TuChoi\" id=\"tuChoi\" label=\"Từ chối\" class=\"ml-2\"\n                        (modelChange)=\"timKiemNangCao()\">\n                    </app-checkbox>\n                    <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                        [(model)]=\"timKiemObj.NgayGui\" label=\"Ngày gửi: Từ ngày - đến ngày\"\n                        (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n                    <app-daterangepicker id=\"KHTHTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        class=\"mt-1 ml-2 on-header\" [(model)]=\"timKiemObj.NgayKHTHDuyet\"\n                        label=\"Ngày KHTH duyệt: Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n                    <app-daterangepicker id=\"NhanSuTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        class=\"mt-1 ml-2 on-header\" [(model)]=\"timKiemObj.NgayNhanSuDuyet\"\n                        label=\"Ngày NS duyệt: Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n                    <app-daterangepicker id=\"GiamDocTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        class=\"mt-1 ml-2 on-header\" [(model)]=\"timKiemObj.NgayGiamDocDuyet\"\n                        label=\"Ngày GĐ duyệt: Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"280px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\"\n                                    color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"mr-6\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\"\n                        (click)=\"xuLyXuatExcel()\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n\n            <ng-template #tenHopDongTemplate let-dataItem>\n                <a (click)=\"xemChiTiet(dataItem.Id)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.HopDong}}\">{{dataItem.HopDong}}</p>\n                </a>\n            </ng-template>\n\n            <ng-template #trangThaiTemplate let-dataItem>\n                <div style=\"position: relative;\">\n                    <span [ngClass]=\"{'orangeText': dataItem.TrangThai == 1,\n                      'greenText': dataItem.TrangThai == 2,\n                      'redText': dataItem.TrangThai == 3}\">\n                        {{dataItem.TenTinhTrang}}\n                    </span>\n                </div>\n            </ng-template>\n\n            <ng-template #ngayBatDauKhamTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayBatDauKhamDisplay}}\">\n                    {{dataItem.NgayBatDauKhamDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayKetThucKhamTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayKetThucKhamDisplay}}\">\n                    {{dataItem.NgayKetThucKhamDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayGuiTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayGuiDisplay}}\">{{dataItem.NgayGuiDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayKHTHDuyetTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayKhthDuyetDisplay}}\">\n                    {{dataItem.NgayKhthDuyetDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayNhanSuDuyetTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayNsDuyetDisplay}}\">\n                    {{dataItem.NgayNsDuyetDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayGiamDocDuyetTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayGdDuyetDisplay}}\">{{dataItem.NgayGdDuyetDisplay}}\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.scss ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n\n.space-between {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tZ2lhbS1kb2MtZHV5ZXQva2hhbS1kb2FuLWdpYW0tZG9jLWR1eWV0LWRldGFpbC1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLWdpYW0tZG9jLWR1eWV0XFxraGFtLWRvYW4tZ2lhbS1kb2MtZHV5ZXQtZGV0YWlsLXBvcHVwXFxraGFtLWRvYW4tZ2lhbS1kb2MtZHV5ZXQtZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1naWFtLWRvYy1kdXlldC9raGFtLWRvYW4tZ2lhbS1kb2MtZHV5ZXQtZGV0YWlsLXBvcHVwL2toYW0tZG9hbi1naWFtLWRvYy1kdXlldC1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tZ2lhbS1kb2MtZHV5ZXQva2hhbS1kb2FuLWdpYW0tZG9jLWR1eWV0LWRldGFpbC1wb3B1cC9raGFtLWRvYW4tZ2lhbS1kb2MtZHV5ZXQtZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59IiwiLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: KhamDoanGiamDocDuyetDetailPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGiamDocDuyetDetailPopupComponent", function() { return KhamDoanGiamDocDuyetDetailPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
/* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kham_doan_giam_doc_duyet_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../kham-doan-giam-doc-duyet.model */ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet.model.ts");


















let KhamDoanGiamDocDuyetDetailPopupComponent = class KhamDoanGiamDocDuyetDetailPopupComponent {
    constructor(authService, dialog, notificationService, apiService, router, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.validationErrors = [];
        this.format = 'n2';
        this.gridDiaDiemKhamColumns = [];
        this.gridNhanSuColumns = [];
        this.gridDiaDiemKhamDatasource = {
            data: [],
            total: 0
        };
        this.gridNhanSuDatasource = {
            data: [],
            total: 0
        };
        this.title = 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe';
        this.khamDoanNhanSuDetail = new _kham_doan_giam_doc_duyet_model__WEBPACK_IMPORTED_MODULE_16__["YeuCauNhanSuKhamSucKhoeDetail"]();
        this.diaDiemKhamDisplay = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoeGiamDoc;
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
            { Field: 'HoTen', Title: 'Họ tên', Width: 120 },
            { Field: 'DonVi', Title: 'Đơn vị', Width: 244 },
            { Field: 'ViTriLamViec', Title: 'Vị trí làm việc', Width: 90 },
            { Field: 'SoDienThoai', Title: 'SĐT', Width: 90 },
            { Field: 'DoiTuongLamViecDisplay', Title: 'Đối tượng', Width: 90 },
            { Field: 'NguoiGioiThieu', Title: 'Người giới thiệu', Width: 120 },
            { Field: '', Title: 'Tài liệu ĐK', Width: 209, Template: this.taiLieuTemplate },
            { Field: 'GhiChu', Title: 'Ghi chú', Width: 100 }
        ];
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }
    getData(id) {
        this.showPopupLoadingData();
        this.apiService
            .get('KhamDoan/GetThongTinYeuCauNhanSuKhamSucKhoe?id=' + id)
            // tslint:disable-next-line: deprecation
            .subscribe((resultData) => {
            if (resultData.HopDongKhamSucKhoeDiaDiems && resultData.HopDongKhamSucKhoeDiaDiems.some(x => x)) {
                this.diaDiemKhamDisplay = true;
                this.gridDiaDiemKhamDatasource.data = Array.from(resultData.HopDongKhamSucKhoeDiaDiems);
                this.gridDiaDiemKhamDatasource.total = resultData.HopDongKhamSucKhoeDiaDiems.length;
            }
            this.khamDoanNhanSuDetail = JSON.parse(JSON.stringify(resultData));
            this.gridNhanSuDatasource.data = Array.from(resultData.YeuCauNhanSuKhamSucKhoeChiTiets);
            this.gridNhanSuDatasource.total = resultData.YeuCauNhanSuKhamSucKhoeChiTiets.length;
            this.closePopupLoadingData();
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message !== 'Validation Failed') {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    xuLyDuyet() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn duyệt yêu cầu nhân sự khám sức khỏe này không?' }
            }).afterClosed()
                // tslint:disable-next-line: deprecation
                .subscribe(result => {
                if (result === 'Yes') {
                    this.apiService
                        .get(`KhamDoan/DuyetGiamDoc?id=${this.id}`)
                        // tslint:disable-next-line: deprecation
                        .subscribe(() => {
                        this.notificationService.showSuccess('Đã duyệt nhân sự thành công');
                        this.quayLai();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xuLyTuChoi() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            this.dialog.open(_kham_doan_khth_duyet_kham_doan_khth_duyet_tu_choi_popup_kham_doan_khth_duyet_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_14__["KhamDoanKhthDuyetTuChoiPopupComponent"], {
                disableClose: false,
                width: '600px',
                data: { Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn từ chối yêu cầu nhân sự khám sức khỏe này không?' }
            }).afterClosed()
                // tslint:disable-next-line: deprecation
                .subscribe(result => {
                if (result) {
                    const requestTuChoi = {
                        Id: this.id,
                        LyDo: result
                    };
                    this.apiService
                        .post('KhamDoan/TuChoiDuyetGiamDoc', requestTuChoi)
                        // tslint:disable-next-line: deprecation
                        .subscribe(() => {
                        this.notificationService.showSuccess('Đã từ chối nhân sự thành công');
                        this.quayLai();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    getTenTaiLieuDinhKem(dataItem) {
        return dataItem != null ?
            dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null && dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem[0].Ten : '' : '';
    }
    quayLai() {
        this.router.navigateByUrl('/kham-doan/giam-doc-duyet?holdQuery=true');
    }
};
KhamDoanGiamDocDuyetDetailPopupComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhamTemplate', { static: true })
], KhamDoanGiamDocDuyetDetailPopupComponent.prototype, "ngayKhamTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taiLieuTemplate', { static: true })
], KhamDoanGiamDocDuyetDetailPopupComponent.prototype, "taiLieuTemplate", void 0);
KhamDoanGiamDocDuyetDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-kham-doan-giam-doc-duyet-detail-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-giam-doc-duyet-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-giam-doc-duyet-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.scss")).default]
    })
], KhamDoanGiamDocDuyetDetailPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tZ2lhbS1kb2MtZHV5ZXQva2hhbS1kb2FuLWdpYW0tZG9jLWR1eWV0LWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi1naWFtLWRvYy1kdXlldFxca2hhbS1kb2FuLWdpYW0tZG9jLWR1eWV0LWxpc3RcXGtoYW0tZG9hbi1naWFtLWRvYy1kdXlldC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1naWFtLWRvYy1kdXlldC9raGFtLWRvYW4tZ2lhbS1kb2MtZHV5ZXQtbGlzdC9raGFtLWRvYW4tZ2lhbS1kb2MtZHV5ZXQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWdpYW0tZG9jLWR1eWV0L2toYW0tZG9hbi1naWFtLWRvYy1kdXlldC1saXN0L2toYW0tZG9hbi1naWFtLWRvYy1kdXlldC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59IiwiLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: KhamDoanGiamDocDuyetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGiamDocDuyetListComponent", function() { return KhamDoanGiamDocDuyetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _kham_doan_giam_doc_duyet_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../kham-doan-giam-doc-duyet.model */ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");




















let KhamDoanGiamDocDuyetListComponent = class KhamDoanGiamDocDuyetListComponent {
    constructor(authService, notificationService, route, location, dialog, apiService, router) {
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
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.baseRoute = '/kham-doan/giam-doc-duyet';
        this.gridColumns = [];
        this._gridColumnsFilter = [];
        this._isCheckColumnFilter = true;
        this.strAdditionalSearchString = '';
        this.sort = [{
                field: 'TrangThai',
                dir: 'asc'
            }];
        this.urlGetData = 'KhamDoan/GetDataForYeuCauNhanSuKhamSucKhoeGiamDocGridAsync';
        this.urlTotalPage = 'KhamDoan/GetTotalPageForYeuCauNhanSuKhamSucKhoeGiamDocGridAsync';
        this.timKiemObj = new _kham_doan_giam_doc_duyet_model__WEBPACK_IMPORTED_MODULE_18__["KhamDoanGiamDocDuyetTimKiem"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoeGiamDoc;
        let holdQuery;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (holdQuery && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].getItem('additionalSearchStringDanhSachGiamDocDuyetYeuCauNhanSuKhamSucKhoe')) {
            const additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].getItem('additionalSearchStringDanhSachGiamDocDuyetYeuCauNhanSuKhamSucKhoe');
            if (additionalSearchString != null) {
                this.timKiemObj = JSON.parse(additionalSearchString);
                if (this.timKiemObj.NgayGui != null) {
                    if (this.timKiemObj.NgayGui.startDate != null) {
                        const startDate = new Date(this.timKiemObj.NgayGui.startDate);
                        this.timKiemObj.NgayGui.startDate = new Date(startDate);
                    }
                    if (this.timKiemObj.NgayGui.endDate != null) {
                        const endDate = new Date(this.timKiemObj.NgayGui.endDate);
                        this.timKiemObj.NgayGui.endDate = new Date(endDate);
                    }
                }
                if (this.timKiemObj.NgayKHTHDuyet != null) {
                    if (this.timKiemObj.NgayKHTHDuyet.startDate != null) {
                        const startDate = new Date(this.timKiemObj.NgayKHTHDuyet.startDate);
                        this.timKiemObj.NgayKHTHDuyet.startDate = new Date(startDate);
                    }
                    if (this.timKiemObj.NgayKHTHDuyet.endDate != null) {
                        const endDate = new Date(this.timKiemObj.NgayKHTHDuyet.endDate);
                        this.timKiemObj.NgayKHTHDuyet.endDate = new Date(endDate);
                    }
                }
                if (this.timKiemObj.NgayNhanSuDuyet != null) {
                    if (this.timKiemObj.NgayNhanSuDuyet.startDate != null) {
                        const startDate = new Date(this.timKiemObj.NgayNhanSuDuyet.startDate);
                        this.timKiemObj.NgayNhanSuDuyet.startDate = new Date(startDate);
                    }
                    if (this.timKiemObj.NgayNhanSuDuyet.endDate != null) {
                        const endDate = new Date(this.timKiemObj.NgayNhanSuDuyet.endDate);
                        this.timKiemObj.NgayNhanSuDuyet.endDate = new Date(endDate);
                    }
                }
                if (this.timKiemObj.NgayGiamDocDuyet != null) {
                    if (this.timKiemObj.NgayGiamDocDuyet.startDate != null) {
                        const startDate = new Date(this.timKiemObj.NgayGiamDocDuyet.startDate);
                        this.timKiemObj.NgayGiamDocDuyet.startDate = new Date(startDate);
                    }
                    if (this.timKiemObj.NgayGiamDocDuyet.endDate != null) {
                        const endDate = new Date(this.timKiemObj.NgayGiamDocDuyet.endDate);
                        this.timKiemObj.NgayGiamDocDuyet.endDate = new Date(endDate);
                    }
                }
                this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
            }
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachGiamDocDuyetYeuCauNhanSuKhamSucKhoe");
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
        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
    }
    searchChanges(event) {
        if ((event == null || event == '') && this.strAdditionalSearchString != '') {
            this.timKiemNangCao();
        }
    }
    onKey(event) {
        if (event.key == 'Enter') {
            this.timKiemNangCao();
        }
    }
    clearSearch() {
        this.timKiemObj.SearchString = null;
        this.gridChild.searchString = null;
        this.timKiemNangCao();
    }
    timKiemNangCao() {
        this.router.navigateByUrl(`${this.baseRoute}?holdQuery=true`);
        const searchClone = JSON.parse(JSON.stringify(this.timKiemObj));
        if (searchClone.NgayGui.startDate != null) {
            const startDate = new Date(searchClone.NgayGui.startDate);
            searchClone.NgayGui.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }
        if (searchClone.NgayGui.endDate != null) {
            const endDate = new Date(searchClone.NgayGui.endDate);
            searchClone.NgayGui.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        if (searchClone.NgayKHTHDuyet.startDate != null) {
            const startDate = new Date(searchClone.NgayKHTHDuyet.startDate);
            searchClone.NgayKHTHDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }
        if (searchClone.NgayKHTHDuyet.endDate != null) {
            const endDate = new Date(searchClone.NgayKHTHDuyet.endDate);
            searchClone.NgayKHTHDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        if (searchClone.NgayNhanSuDuyet.startDate != null) {
            const startDate = new Date(searchClone.NgayNhanSuDuyet.startDate);
            searchClone.NgayNhanSuDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }
        if (searchClone.NgayNhanSuDuyet.endDate != null) {
            const endDate = new Date(searchClone.NgayNhanSuDuyet.endDate);
            searchClone.NgayNhanSuDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        if (searchClone.NgayGiamDocDuyet.startDate != null) {
            const startDate = new Date(searchClone.NgayGiamDocDuyet.startDate);
            searchClone.NgayGiamDocDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }
        if (searchClone.NgayGiamDocDuyet.endDate != null) {
            const endDate = new Date(searchClone.NgayGiamDocDuyet.endDate);
            searchClone.NgayGiamDocDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        this.strAdditionalSearchString = JSON.stringify(searchClone);
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].setItem('additionalSearchStringDanhSachGiamDocDuyetYeuCauNhanSuKhamSucKhoe', this.strAdditionalSearchString);
        this.gridChild._additionalSearchString = this.strAdditionalSearchString;
        this.gridChild.search();
    }
    xuLyXuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel('KhamDoan/ExportDanhSachYeuCauNhanSuKhamSucKhoe', this.gridChild._gridQueryInfo)
                // tslint:disable-next-line: deprecation
                .subscribe(res => {
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'YeuCauNhanSuKhamSucKhoe' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xemChiTiet(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
            this.router.navigate([this.baseRoute + '/chi-tiet/' + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
KhamDoanGiamDocDuyetListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenHopDongTemplate', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "tenHopDongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayBatDauKhamTemplate', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "ngayBatDauKhamTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucKhamTemplate', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "ngayKetThucKhamTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGuiTemplate', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "ngayGuiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKHTHDuyetTemplate', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "ngayKHTHDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhanSuDuyetTemplate', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "ngayNhanSuDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDuyetTemplate', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "ngayGiamDocDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
], KhamDoanGiamDocDuyetListComponent.prototype, "gridChild", void 0);
KhamDoanGiamDocDuyetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-kham-doan-giam-doc-duyet-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-giam-doc-duyet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-giam-doc-duyet-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.scss")).default]
    })
], KhamDoanGiamDocDuyetListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: KhamDoanGiamDocDuyetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGiamDocDuyetRoutingModule", function() { return KhamDoanGiamDocDuyetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _kham_doan_giam_doc_duyet_detail_popup_kham_doan_giam_doc_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.ts");
/* harmony import */ var _kham_doan_giam_doc_duyet_list_kham_doan_giam_doc_duyet_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component */ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.ts");








const routes = [
    {
        path: '',
        component: _kham_doan_giam_doc_duyet_list_kham_doan_giam_doc_duyet_list_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanGiamDocDuyetListComponent"],
        data: {
            title: "Duyệt yêu cầu nhân sự khám sức khỏe - giám đốc",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoeGiamDoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet/:id',
        component: _kham_doan_giam_doc_duyet_detail_popup_kham_doan_giam_doc_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanGiamDocDuyetDetailPopupComponent"],
        data: {
            title: 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe - giám đốc',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoeGiamDoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let KhamDoanGiamDocDuyetRoutingModule = class KhamDoanGiamDocDuyetRoutingModule {
};
KhamDoanGiamDocDuyetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KhamDoanGiamDocDuyetRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet.model.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet.model.ts ***!
  \***************************************************************************************************/
/*! exports provided: KhamDoanGiamDocDuyetTimKiem, KhamDoanGiamDocDuyetTimKiemTrangThai, KhamDoanGiamDocDuyetTimKiemDateRange, YeuCauNhanSuKhamSucKhoeDetail, YeuCauNhanSuKhamSucKhoeChiTiet, FileTaiLieu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGiamDocDuyetTimKiem", function() { return KhamDoanGiamDocDuyetTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGiamDocDuyetTimKiemTrangThai", function() { return KhamDoanGiamDocDuyetTimKiemTrangThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGiamDocDuyetTimKiemDateRange", function() { return KhamDoanGiamDocDuyetTimKiemDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauNhanSuKhamSucKhoeDetail", function() { return YeuCauNhanSuKhamSucKhoeDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauNhanSuKhamSucKhoeChiTiet", function() { return YeuCauNhanSuKhamSucKhoeChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTaiLieu", function() { return FileTaiLieu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KhamDoanGiamDocDuyetTimKiem {
    constructor(SearchString = null, TrangThai = new KhamDoanGiamDocDuyetTimKiemTrangThai(), NgayGui = new KhamDoanGiamDocDuyetTimKiemDateRange(), NgayKHTHDuyet = new KhamDoanGiamDocDuyetTimKiemDateRange(), NgayNhanSuDuyet = new KhamDoanGiamDocDuyetTimKiemDateRange(), NgayGiamDocDuyet = new KhamDoanGiamDocDuyetTimKiemDateRange()) {
        this.SearchString = SearchString;
        this.TrangThai = TrangThai;
        this.NgayGui = NgayGui;
        this.NgayKHTHDuyet = NgayKHTHDuyet;
        this.NgayNhanSuDuyet = NgayNhanSuDuyet;
        this.NgayGiamDocDuyet = NgayGiamDocDuyet;
    }
}
class KhamDoanGiamDocDuyetTimKiemTrangThai {
    constructor(ChoDuyet = true, DaDuyet = true, TuChoi = true) {
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuChoi = TuChoi;
    }
}
class KhamDoanGiamDocDuyetTimKiemDateRange {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class YeuCauNhanSuKhamSucKhoeDetail {
    constructor(Id = null, HopDongKhamSucKhoeId = null, CongTyId = null, CongTy = null, SoNguoiKham = null, NgayHieuLuc = null, NgayHieuLucDisplay = null, NgayKetThuc = null, NgayKetThucDisplay = null, TongSoBs = 0, TongSoDd = 0, TongNvKhac = 0, NhanVienGuiYeuCauId = null, NhanVienGui = null, NgayGuiYeuCau = null, DuocKHTHDuyet = null, NgayKHTHDuyet = null, NgayKhthDuyetDisplay = null, NhanVienKHTHDuyetId = null, NhanVienKhthDuyet = null, LyDoKHTHKhongDuyet = null, DuocNhanSuDuyet = null, NgayNhanSuDuyet = null, NgayNhanSuDuyetDisplay = null, NhanVienNhanSuDuyetId = null, NhanVienNhanSuDuyet = null, LyDoNhanSuKhongDuyet = null, DuocGiamDocDuyet = null, NgayGiamDocDuyet = null, NgayGiamDocDuyetDisplay = null, GiamDocId = null, GiamDoc = null, LyDoGiamDocKhongDuyet = null, TrangThai = null, TenTinhTrang = null, YeuCauNhanSuKhamSucKhoeChiTiets = []) {
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
}
class YeuCauNhanSuKhamSucKhoeChiTiet {
    constructor(Id = null, NguonNhanSu = null, HoTen = null, NhanVienId = null, DonVi = null, ViTriLamViec = null, SoDienThoai = null, DoiTuongLamViec = null, DoiTuongLamViecDisplay = null, NguoiGioiThieuId = null, NguoiGioiThieu = null, NhanSuKhamSucKhoeTaiLieuDinhKem = [], NhanSuKhamSucKhoeTaiLieuDinhKemId = null, LoaiNhanVien = null, GhiChu = null, IsCreate = null, IsUpdate = null) {
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
}
class FileTaiLieu {
    constructor(Id = 0, Ma = null, Ten = null, TenGuid = null, DuongDan = null, MoTa = null, KichThuoc = 0, LoaiTapTin = null) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.DuongDan = DuongDan;
        this.MoTa = MoTa;
        this.KichThuoc = KichThuoc;
        this.LoaiTapTin = LoaiTapTin;
    }
}


/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: KhamDoanGiamDocDuyetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGiamDocDuyetModule", function() { return KhamDoanGiamDocDuyetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kham_doan_giam_doc_duyet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-giam-doc-duyet-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-routing.module.ts");
/* harmony import */ var _kham_doan_giam_doc_duyet_list_kham_doan_giam_doc_duyet_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component */ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component.ts");
/* harmony import */ var _kham_doan_giam_doc_duyet_detail_popup_kham_doan_giam_doc_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component.ts");
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



















let KhamDoanGiamDocDuyetModule = class KhamDoanGiamDocDuyetModule {
};
KhamDoanGiamDocDuyetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _kham_doan_giam_doc_duyet_list_kham_doan_giam_doc_duyet_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanGiamDocDuyetListComponent"],
            _kham_doan_giam_doc_duyet_detail_popup_kham_doan_giam_doc_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanGiamDocDuyetDetailPopupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kham_doan_giam_doc_duyet_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanGiamDocDuyetRoutingModule"],
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
            _kham_doan_giam_doc_duyet_detail_popup_kham_doan_giam_doc_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanGiamDocDuyetDetailPopupComponent"]
        ]
    })
], KhamDoanGiamDocDuyetModule);



/***/ })

}]);
//# sourceMappingURL=kham-doan-kham-doan-giam-doc-duyet-kham-doan-giam-doc-duyet-module-es2015.js.map