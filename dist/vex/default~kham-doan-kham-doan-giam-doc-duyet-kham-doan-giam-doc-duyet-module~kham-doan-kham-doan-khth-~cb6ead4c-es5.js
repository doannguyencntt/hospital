(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~kham-doan-kham-doan-giam-doc-duyet-kham-doan-giam-doc-duyet-module~kham-doan-kham-doan-khth-~cb6ead4c"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.html": 
        /*!**************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.html ***!
          \**************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[ {Title:'Khám Đoàn',Path:''}\n        ,{Title:'DS Duyệt Yêu Cầu Nhân Sự Khám Sức Khỏe - Kế Hoạch Tổng Hợp', Path: '/kham-doan/khth-duyet', queryParams: {holdQuery : true}}\n        ,{Title: 'Chi Tiết Duyệt Yêu Cầu Nhân Sự Khám Sức Khỏe',Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer >\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\"  >\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"space-between\" >\n                <h2 class=\"title m-0\">{{title}}</h2>\n                <label [ngClass]=\"{'orangeText': khamDoanNhanSuDetail.TrangThai == 1,\n                            'greenText': khamDoanNhanSuDetail.TrangThai == 2,\n                            'redText': khamDoanNhanSuDetail.TrangThai == 3}\">\n                    {{khamDoanNhanSuDetail.TenTinhTrang}}\n                </label>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\" [ngClass]=\"{'disableDiv': khamDoanNhanSuDetail.TrangThai == 2 || khamDoanNhanSuDetail.TrangThai == 3}\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-combobox id=\"congTy\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n                        [(model)]=\"khamDoanNhanSuDetail.CongTyId\" [modelText]=\"khamDoanNhanSuDetail.CongTy\"\n                        url=\"KhamDoan/GetCongTys\" hierarchyKeyToSend=\"CongTyId\" [disabled]=\"true\"\n                        [validationerror]=\"'CongTyId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-combobox id=\"hopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hợp đồng\"\n                        url=\"KhamDoan/GetHopDongKhamSucKhoes\" [required]=\"true\" hierarchyKeyToListen=\"CongTyId\"\n                        [(model)]=\"khamDoanNhanSuDetail.HopDongKhamSucKhoeId\" [disabled]=\"true\"\n                        [validationerror]=\"'HopDongKhamSucKhoeId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-textboxnumeric id=\"soLuongBenhNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"SL NB \"\n                        [(model)]=\"khamDoanNhanSuDetail.SoNguoiKham\" [decimals]=\"0\" [disabled]=\"true\">\n                    </app-textboxnumeric>\n                    <app-datepicker id=\"ngayBatDauKham\" [(model)]=\"khamDoanNhanSuDetail.NgayHieuLuc\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" label=\"Ngày BĐ khám\" [disabled]=\"true\">\n                    </app-datepicker>\n                    <app-datepicker id=\"NgayKetThucKham\" [(model)]=\"khamDoanNhanSuDetail.NgayKetThuc\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" label=\"Ngày KT khám\" [disabled]=\"true\">\n                    </app-datepicker>\n\n                    <app-grid *ngIf=\"diaDiemKhamDisplay==true\" fxFlex=\"100%\" fxFlex.sm=\"100%\" masterName=\"diaDiemKham\"\n                        [gridColumns]=\"gridDiaDiemKhamColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                        class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [checkboxAble]=\"false\" [maxHeight]=\"200\" [lazyLoadPage]=\"true\"\n                        [gridDataSource]=\"gridDiaDiemKhamDatasource\" style=\"width: 1px;\" [pageable]=\"false\">\n                    </app-grid>\n                    <ng-template #ngayKhamTemplate let-dataItem>\n                        {{dataItem.NgayDisplay}}\n                    </ng-template>\n\n                    <app-textboxnumeric id=\"tongSoLuongBacSi\" [(model)]=\"khamDoanNhanSuDetail.TongSoBs\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng SL BS\" [decimals]=\"0\" [disabled]=\"true\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"tongSoLuongDieuDuong\" [(model)]=\"khamDoanNhanSuDetail.TongSoDd\" fxFlex=\"20%\"\n                        fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng SL ĐD\" [decimals]=\"0\" [disabled]=\"true\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric id=\"tongSoLuongNhanVienKhac\" [(model)]=\"khamDoanNhanSuDetail.TongNvKhac\"\n                        fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng NV khác\" [decimals]=\"0\"\n                        [disabled]=\"true\">\n                    </app-textboxnumeric>\n\n                    <ng-container *ngIf=\"id!=0\">\n                        <app-combobox id=\"nguoiGuiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Người gửi\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienGuiYeuCauId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienGui\" url=\"KhamDoan/GetListNguoiGui\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"ngayGui\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày gửi\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayGuiYeuCau\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet == true\">\n                        <app-combobox id=\"KHTHDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"KHTH duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienKHTHDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienKhthDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"ngayKHTHDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày KHTH duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayKHTHDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet == false\">\n                        <app-combobox id=\"KHTHTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"KHTH từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienKHTHDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienKhthDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"ngayKHTHTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày KHTH từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayKHTHDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                        <app-textarea id=\"lyDoKHTHTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                            [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                            label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoKHTHKhongDuyet\">\n                        </app-textarea>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocNhanSuDuyet == true\">\n                        <app-combobox id=\"NhanVienNhanSuDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"NS duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"NgayNhanSuDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày NS duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayNhanSuDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocNhanSuDuyet == false\">\n                        <app-combobox id=\"NSTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"NS từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyetId\"\n                            [modelText]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                            [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"NgayNhanSuDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày NS từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayNhanSuDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                        <app-textarea id=\"lyDoNSTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                            [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                            label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoNhanSuKhongDuyet\">\n                        </app-textarea>\n                    </ng-container>\n\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocGiamDocDuyet == true\">\n                        <app-combobox id=\"GiamDocId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"GĐ duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.GiamDocId\" [modelText]=\"khamDoanNhanSuDetail.GiamDoc\"\n                            url=\"KhamDoan/GetListNguoiDuyet\" [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"NgayGiamDocDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày GĐ duyệt\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayGiamDocDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocGiamDocDuyet == false\">\n                        <app-combobox id=\"GDTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"GĐ từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.GiamDocId\" [modelText]=\"khamDoanNhanSuDetail.GiamDoc\"\n                            url=\"KhamDoan/GetListNguoiDuyet\" [disabled]=\"true\">\n                        </app-combobox>\n                        <app-datepicker id=\"NgayGDDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày GĐ từ chối\"\n                            [(model)]=\"khamDoanNhanSuDetail.NgayGiamDocDuyet\" [disabled]=\"true\">\n                        </app-datepicker>\n                        <app-textarea id=\"lyDoNSTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                            [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                            label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoGiamDocKhongDuyet\">\n                        </app-textarea>\n                    </ng-container>\n\n                    <h3 fxFlex=\"100%\" class=\"sub-title\">Danh Sách Nhân Sự</h3>\n\n\n                    <app-grid #gridNhanSu fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n                        [gridColumns]=\"gridNhanSuColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\"\n                        [useAddDeault]=\"false\" [showStt]=\"true\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n                        [gridDataSource]=\"gridNhanSuDatasource\">\n                    </app-grid>\n\n                    <ng-template #taiLieuTemplate let-dataItem>\n                        <a *ngIf=\"dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{getTenTaiLieuDinhKem(dataItem)}}\">\n                                {{getTenTaiLieuDinhKem(dataItem)}}\n                            </p>\n                        </a>\n                    </ng-template>\n                </div>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n                    (click)=\"quayLai()\">Hủy</button>\n                <button *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet != true  && khamDoanNhanSuDetail.TrangThai==1\" mat-raised-button mat-button color=\"primary\"\n                    (click)=\"xuLyDuyet()\">Duyệt</button>\n                <button *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet != true && khamDoanNhanSuDetail.TrangThai==1\" mat-raised-button mat-button color=\"warn\"\n                    (click)=\"xuLyTuChoi()\">Từ chối</button>\n            </div>\n        </div>\n    </div>\n</div> \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.html": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.html ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Duyệt Yêu Cầu Nhân Sự Khám Sức Khỏe - Kế Hoạch Tổng Hợp',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n      <div class=\"card overflow-auto -mt-15\">\n              <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                  [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\"\n                  [headerTemplate]=\"headerTemplate\" [searchString]=\"timKiemObj.SearchString\" [showStt]=\"true\" [sort]=\"sort\"\n                  [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlTotalPage\">\n              </app-grid>\n\n              <ng-template #headerTemplate>\n                  <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                      <app-checkbox [(model)]=\"timKiemObj.TrangThai.ChoDuyet\"\n                          id=\"choDuyet\" label=\"Chờ duyệt\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                      </app-checkbox>\n                      <app-checkbox [(model)]=\"timKiemObj.TrangThai.DaDuyet\"\n                          id=\"daDuyet\" label=\"Đã duyệt\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                      </app-checkbox>\n                      <app-checkbox [(model)]=\"timKiemObj.TrangThai.TuChoi\"\n                          id=\"tuChoi\" label=\"Từ chối\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                      </app-checkbox>\n                      <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                          [(model)]=\"timKiemObj.NgayGui\"\n                          label=\"Ngày gửi: Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                      </app-daterangepicker>\n                      <app-daterangepicker id=\"KHTHTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                          [(model)]=\"timKiemObj.NgayKHTHDuyet\"\n                          label=\"Ngày KHTH duyệt: Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                      </app-daterangepicker>\n                      <app-daterangepicker id=\"NhanSuTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                          [(model)]=\"timKiemObj.NgayNhanSuDuyet\"\n                          label=\"Ngày NS duyệt: Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                      </app-daterangepicker>\n                      <app-daterangepicker id=\"GiamDocTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                          [(model)]=\"timKiemObj.NgayGiamDocDuyet\"\n                          label=\"Ngày GĐ duyệt: Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                      </app-daterangepicker>\n\n                      <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"280px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                          fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                          <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                          <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                              name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\" (keyup)=\"onKey($event)\"\n                              (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                      </div>\n                      <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                          <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                      </button>\n\n                      <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                          <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                      </button>\n                      <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                          <div *ngFor=\"let column of _gridColumnsFilter\">\n                              <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                  <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                      {{ column.Title }}\n                                  </mat-checkbox>\n                              </button>\n                          </div>\n                      </mat-menu>\n\n                      <button fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\"\n                          (click)=\"xuLyXuatExcel()\">\n                          <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                      </button>\n                  </div>\n              </ng-template>\n\n              <ng-template #tenHopDongTemplate let-dataItem>\n                  <a (click)=\"xemChiTiet(dataItem.Id)\"><p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.HopDong}}\">{{dataItem.HopDong}}</p></a>\n              </ng-template>\n\n              <ng-template #trangThaiTemplate let-dataItem>\n                  <div style=\"position: relative;\">\n                      <span [ngClass]=\"{'orangeText': dataItem.TrangThai == 1,\n                              'greenText': dataItem.TrangThai == 2,\n                              'redText': dataItem.TrangThai == 3}\">\n                          {{dataItem.TenTinhTrang}}\n                      </span>\n                  </div>\n              </ng-template>\n\n            <ng-template #ngayBatDauKhamTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayBatDauKhamDisplay}}\">\n                    {{dataItem.NgayBatDauKhamDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayKetThucKhamTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayKetThucKhamDisplay}}\">\n                    {{dataItem.NgayKetThucKhamDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayGuiTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayGuiDisplay}}\">{{dataItem.NgayGuiDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayKHTHDuyetTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayKhthDuyetDisplay}}\">\n                    {{dataItem.NgayKhthDuyetDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayNhanSuDuyetTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayNsDuyetDisplay}}\">\n                    {{dataItem.NgayNsDuyetDisplay}} </div>\n            </ng-template>\n            <ng-template #ngayGiamDocDuyetTemplate let-dataItem>\n                <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayGdDuyetDisplay}}\">{{dataItem.NgayGdDuyetDisplay}}\n                </div>\n            </ng-template>\n      </div>\n  </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.html": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.html ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">{{Title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\" [innerHtml]=\"Message\"></div>\n    \n        <app-textarea id=\"lyDo\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\"\n            minHeight=\"20\" [required]=\"true\"\n            [validationerror]=\"'lyDo' | validationerror:validationErrors\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close(null)\">Không</button>\n    <button mat-button color=\"primary\" (click)=\"close('ok')\">Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.scss": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.scss ***!
          \************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n\n.space-between {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2h0aC1kdXlldC9raGFtLWRvYW4ta2h0aC1kdXlldC1kZXRhaWwtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi1raHRoLWR1eWV0XFxraGFtLWRvYW4ta2h0aC1kdXlldC1kZXRhaWwtcG9wdXBcXGtoYW0tZG9hbi1raHRoLWR1eWV0LWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2h0aC1kdXlldC9raGFtLWRvYW4ta2h0aC1kdXlldC1kZXRhaWwtcG9wdXAva2hhbS1kb2FuLWtodGgtZHV5ZXQtZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtodGgtZHV5ZXQva2hhbS1kb2FuLWtodGgtZHV5ZXQtZGV0YWlsLXBvcHVwL2toYW0tZG9hbi1raHRoLWR1eWV0LWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSIsIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.ts": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.ts ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: KhamDoanKhthDuyetDetailPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKhthDuyetDetailPopupComponent", function () { return KhamDoanKhthDuyetDetailPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_khth_duyet_tu_choi_popup_kham_doan_khth_duyet_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _kham_doan_khth_duyet_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../kham-doan-khth-duyet.model */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet.model.ts");
            var KhamDoanKhthDuyetDetailPopupComponent = /** @class */ (function () {
                function KhamDoanKhthDuyetDetailPopupComponent(authService, dialog, notificationService, apiService, router, route) {
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
                    this.title = 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe';
                    this.gridDiaDiemKhamDatasource = {
                        data: [],
                        total: 0
                    };
                    this.gridNhanSuDatasource = {
                        data: [],
                        total: 0
                    };
                    // cần cập nhật lại theo mdel
                    this.khamDoanNhanSuDetail = new _kham_doan_khth_duyet_model__WEBPACK_IMPORTED_MODULE_16__["YeuCauNhanSuKhamSucKhoeDetail"]();
                    this.diaDiemKhamDisplay = false;
                }
                KhamDoanKhthDuyetDetailPopupComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoeKhth;
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
                };
                KhamDoanKhthDuyetDetailPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' },
                        });
                    }
                };
                KhamDoanKhthDuyetDetailPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanKhthDuyetDetailPopupComponent.prototype.getData = function (id) {
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
                KhamDoanKhthDuyetDetailPopupComponent.prototype.xuLyDuyet = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn duyệt yêu cầu nhân sự khám sức khỏe này không?' }
                        }).afterClosed()
                            // tslint:disable-next-line: deprecation
                            .subscribe(function (result) {
                            if (result === 'Yes') {
                                _this.apiService
                                    .get("KhamDoan/DuyetKhth?id=" + _this.id)
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
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanKhthDuyetDetailPopupComponent.prototype.xuLyTuChoi = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        this.dialog.open(_kham_doan_khth_duyet_tu_choi_popup_kham_doan_khth_duyet_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_13__["KhamDoanKhthDuyetTuChoiPopupComponent"], {
                            disableClose: false,
                            width: '600px',
                            data: { Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn từ chối yêu cầu nhân sự khám sức khỏe này không?' }
                        }).afterClosed()
                            // tslint:disable-next-line: deprecation
                            .subscribe(function (result) {
                            if (result) {
                                var requestTuChoi = {
                                    Id: _this.id,
                                    LyDo: result
                                };
                                _this.apiService
                                    .post('KhamDoan/TuChoiDuyetKhth', requestTuChoi)
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
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanKhthDuyetDetailPopupComponent.prototype.getTenTaiLieuDinhKem = function (dataItem) {
                    return dataItem != null ?
                        dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null && dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem.some(function (x) { return x; }) ?
                            dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem[0].Ten : '' : '';
                };
                KhamDoanKhthDuyetDetailPopupComponent.prototype.quayLai = function () {
                    this.router.navigateByUrl('/kham-doan/khth-duyet?holdQuery=true');
                };
                return KhamDoanKhthDuyetDetailPopupComponent;
            }());
            KhamDoanKhthDuyetDetailPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhamTemplate', { static: true })
            ], KhamDoanKhthDuyetDetailPopupComponent.prototype, "ngayKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taiLieuTemplate', { static: true })
            ], KhamDoanKhthDuyetDetailPopupComponent.prototype, "taiLieuTemplate", void 0);
            KhamDoanKhthDuyetDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-kham-doan-khth-duyet-detail-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-khth-duyet-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-khth-duyet-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.scss")).default]
                })
            ], KhamDoanKhthDuyetDetailPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.scss": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.scss ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2h0aC1kdXlldC9raGFtLWRvYW4ta2h0aC1kdXlldC1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4ta2h0aC1kdXlldFxca2hhbS1kb2FuLWtodGgtZHV5ZXQtbGlzdFxca2hhbS1kb2FuLWtodGgtZHV5ZXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2h0aC1kdXlldC9raGFtLWRvYW4ta2h0aC1kdXlldC1saXN0L2toYW0tZG9hbi1raHRoLWR1eWV0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1raHRoLWR1eWV0L2toYW0tZG9hbi1raHRoLWR1eWV0LWxpc3Qva2hhbS1kb2FuLWtodGgtZHV5ZXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufSIsIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: KhamDoanKhthDuyetListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKhthDuyetListComponent", function () { return KhamDoanKhthDuyetListComponent; });
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
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _kham_doan_khth_duyet_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../kham-doan-khth-duyet.model */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet.model.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var KhamDoanKhthDuyetListComponent = /** @class */ (function () {
                function KhamDoanKhthDuyetListComponent(authService, notificationService, route, location, dialog, apiService, router) {
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
                    this.baseRoute = '/kham-doan/khth-duyet';
                    this.gridColumns = [];
                    this._gridColumnsFilter = [];
                    this._isCheckColumnFilter = true;
                    this.strAdditionalSearchString = '';
                    this.sort = [{
                            field: 'TrangThai',
                            dir: 'asc'
                        }];
                    this.urlGetData = 'KhamDoan/GetDataForYeuCauNhanSuKhamSucKhoeGridAsync';
                    this.urlTotalPage = 'KhamDoan/GetTotalPageForYeuCauNhanSuKhamSucKhoeGridAsync';
                    this.timKiemObj = new _kham_doan_khth_duyet_model__WEBPACK_IMPORTED_MODULE_14__["KhamDoanKhthDuyetTimKiem"]();
                }
                KhamDoanKhthDuyetListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoeKhth;
                    var holdQuery;
                    if (this.route.snapshot.queryParams.holdQuery != null) {
                        holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (holdQuery && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem('additionalSearchStringDanhSachKHTHDuyetYeuCauNhanSuKhamSucKhoe')) {
                        var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem('additionalSearchStringDanhSachKHTHDuyetYeuCauNhanSuKhamSucKhoe');
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
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachKHTHDuyetYeuCauNhanSuKhamSucKhoe");
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
                KhamDoanKhthDuyetListComponent.prototype.searchChanges = function (event) {
                    if ((event == null || event == '') && this.strAdditionalSearchString != '') {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanKhthDuyetListComponent.prototype.onKey = function (event) {
                    if (event.key == 'Enter') {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanKhthDuyetListComponent.prototype.clearSearch = function () {
                    this.timKiemObj.SearchString = null;
                    this.gridChild.searchString = null;
                    this.timKiemNangCao();
                };
                KhamDoanKhthDuyetListComponent.prototype.timKiemNangCao = function () {
                    this.router.navigateByUrl(this.baseRoute + "?holdQuery=true");
                    var searchClone = JSON.parse(JSON.stringify(this.timKiemObj));
                    if (searchClone.NgayGui.startDate != null) {
                        var startDate = new Date(searchClone.NgayGui.startDate);
                        searchClone.NgayGui.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
                    }
                    if (searchClone.NgayGui.endDate != null) {
                        var endDate = new Date(searchClone.NgayGui.endDate);
                        searchClone.NgayGui.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
                    }
                    if (searchClone.NgayKHTHDuyet.startDate != null) {
                        var startDate = new Date(searchClone.NgayKHTHDuyet.startDate);
                        searchClone.NgayKHTHDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
                    }
                    if (searchClone.NgayKHTHDuyet.endDate != null) {
                        var endDate = new Date(searchClone.NgayKHTHDuyet.endDate);
                        searchClone.NgayKHTHDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
                    }
                    if (searchClone.NgayNhanSuDuyet.startDate != null) {
                        var startDate = new Date(searchClone.NgayNhanSuDuyet.startDate);
                        searchClone.NgayNhanSuDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
                    }
                    if (searchClone.NgayNhanSuDuyet.endDate != null) {
                        var endDate = new Date(searchClone.NgayNhanSuDuyet.endDate);
                        searchClone.NgayNhanSuDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
                    }
                    if (searchClone.NgayGiamDocDuyet.startDate != null) {
                        var startDate = new Date(searchClone.NgayGiamDocDuyet.startDate);
                        searchClone.NgayGiamDocDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
                    }
                    if (searchClone.NgayGiamDocDuyet.endDate != null) {
                        var endDate = new Date(searchClone.NgayGiamDocDuyet.endDate);
                        searchClone.NgayGiamDocDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
                    }
                    this.strAdditionalSearchString = JSON.stringify(searchClone);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem('additionalSearchStringDanhSachKHTHDuyetYeuCauNhanSuKhamSucKhoe', this.strAdditionalSearchString);
                    this.gridChild._additionalSearchString = this.strAdditionalSearchString;
                    this.gridChild.search();
                };
                KhamDoanKhthDuyetListComponent.prototype.xuLyXuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel('KhamDoan/ExportDanhSachYeuCauNhanSuKhamSucKhoe', this.gridChild._gridQueryInfo)
                            // tslint:disable-next-line: deprecation
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'YeuCauNhanSuKhamSucKhoe' + dateTimeNow.getFullYear() + '.xlsx');
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanKhthDuyetListComponent.prototype.xemChiTiet = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Update)) {
                        this.router.navigate([this.baseRoute + '/chi-tiet/' + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return KhamDoanKhthDuyetListComponent;
            }());
            KhamDoanKhthDuyetListComponent.ctorParameters = function () { return [
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
            ], KhamDoanKhthDuyetListComponent.prototype, "tenHopDongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayBatDauKhamTemplate', { static: true })
            ], KhamDoanKhthDuyetListComponent.prototype, "ngayBatDauKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucKhamTemplate', { static: true })
            ], KhamDoanKhthDuyetListComponent.prototype, "ngayKetThucKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGuiTemplate', { static: true })
            ], KhamDoanKhthDuyetListComponent.prototype, "ngayGuiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKHTHDuyetTemplate', { static: true })
            ], KhamDoanKhthDuyetListComponent.prototype, "ngayKHTHDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhanSuDuyetTemplate', { static: true })
            ], KhamDoanKhthDuyetListComponent.prototype, "ngayNhanSuDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDuyetTemplate', { static: true })
            ], KhamDoanKhthDuyetListComponent.prototype, "ngayGiamDocDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], KhamDoanKhthDuyetListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
            ], KhamDoanKhthDuyetListComponent.prototype, "gridChild", void 0);
            KhamDoanKhthDuyetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-kham-doan-khth-duyet-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-khth-duyet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-khth-duyet-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.scss")).default]
                })
            ], KhamDoanKhthDuyetListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-routing.module.ts": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-routing.module.ts ***!
          \****************************************************************************************************/
        /*! exports provided: KhamDoanKhthDuyetRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKhthDuyetRoutingModule", function () { return KhamDoanKhthDuyetRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_doan_khth_duyet_detail_popup_kham_doan_khth_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_khth_duyet_list_kham_doan_khth_duyet_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _kham_doan_khth_duyet_list_kham_doan_khth_duyet_list_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanKhthDuyetListComponent"],
                    data: {
                        title: "Duyệt yêu cầu nhân sự khám sức khỏe - kế hoạch tổng hợp",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoeKhth,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _kham_doan_khth_duyet_detail_popup_kham_doan_khth_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanKhthDuyetDetailPopupComponent"],
                    data: {
                        title: 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanDuyetYeuCauNhanSuKhamSucKhoeKhth,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var KhamDoanKhthDuyetRoutingModule = /** @class */ (function () {
                function KhamDoanKhthDuyetRoutingModule() {
                }
                return KhamDoanKhthDuyetRoutingModule;
            }());
            KhamDoanKhthDuyetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], KhamDoanKhthDuyetRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.scss": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.scss ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtodGgtZHV5ZXQva2hhbS1kb2FuLWtodGgtZHV5ZXQtdHUtY2hvaS1wb3B1cC9raGFtLWRvYW4ta2h0aC1kdXlldC10dS1jaG9pLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.ts": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.ts ***!
          \************************************************************************************************************************************************/
        /*! exports provided: KhamDoanKhthDuyetTuChoiPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKhthDuyetTuChoiPopupComponent", function () { return KhamDoanKhthDuyetTuChoiPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var KhamDoanKhthDuyetTuChoiPopupComponent = /** @class */ (function () {
                function KhamDoanKhthDuyetTuChoiPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.Title = null;
                    this.Message = null;
                    this.lyDo = null;
                }
                KhamDoanKhthDuyetTuChoiPopupComponent.prototype.ngOnInit = function () {
                    this.Title = this.data.Title;
                    this.Message = this.data.Message;
                };
                KhamDoanKhthDuyetTuChoiPopupComponent.prototype.close = function (data) {
                    if (data == 'ok') {
                        this.validationErrors = [];
                        if (this.lyDo == undefined || this.lyDo == null || this.lyDo == '') {
                            this.validationErrors.push({ Message: 'Lý do yêu cầu nhập', Field: 'lyDo' });
                        }
                        else {
                            this.dialogRef.close(this.lyDo);
                        }
                    }
                    else {
                        this.dialogRef.close(null);
                    }
                };
                return KhamDoanKhthDuyetTuChoiPopupComponent;
            }());
            KhamDoanKhthDuyetTuChoiPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            KhamDoanKhthDuyetTuChoiPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-khth-duyet-tu-choi-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-khth-duyet-tu-choi-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-khth-duyet-tu-choi-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], KhamDoanKhthDuyetTuChoiPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet.model.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet.model.ts ***!
          \*******************************************************************************************/
        /*! exports provided: KhamDoanKhthDuyetTimKiem, KhamDoanKhthDuyetTimKiemTrangThai, KhamDoanKhthDuyetTimKiemDateRange, YeuCauNhanSuKhamSucKhoeDetail, YeuCauNhanSuKhamSucKhoeChiTiet, FileTaiLieu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKhthDuyetTimKiem", function () { return KhamDoanKhthDuyetTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKhthDuyetTimKiemTrangThai", function () { return KhamDoanKhthDuyetTimKiemTrangThai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKhthDuyetTimKiemDateRange", function () { return KhamDoanKhthDuyetTimKiemDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauNhanSuKhamSucKhoeDetail", function () { return YeuCauNhanSuKhamSucKhoeDetail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauNhanSuKhamSucKhoeChiTiet", function () { return YeuCauNhanSuKhamSucKhoeChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTaiLieu", function () { return FileTaiLieu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var KhamDoanKhthDuyetTimKiem = /** @class */ (function () {
                function KhamDoanKhthDuyetTimKiem(SearchString, TrangThai, NgayGui, NgayKHTHDuyet, NgayNhanSuDuyet, NgayGiamDocDuyet) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (TrangThai === void 0) { TrangThai = new KhamDoanKhthDuyetTimKiemTrangThai(); }
                    if (NgayGui === void 0) { NgayGui = new KhamDoanKhthDuyetTimKiemDateRange(); }
                    if (NgayKHTHDuyet === void 0) { NgayKHTHDuyet = new KhamDoanKhthDuyetTimKiemDateRange(); }
                    if (NgayNhanSuDuyet === void 0) { NgayNhanSuDuyet = new KhamDoanKhthDuyetTimKiemDateRange(); }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = new KhamDoanKhthDuyetTimKiemDateRange(); }
                    this.SearchString = SearchString;
                    this.TrangThai = TrangThai;
                    this.NgayGui = NgayGui;
                    this.NgayKHTHDuyet = NgayKHTHDuyet;
                    this.NgayNhanSuDuyet = NgayNhanSuDuyet;
                    this.NgayGiamDocDuyet = NgayGiamDocDuyet;
                }
                return KhamDoanKhthDuyetTimKiem;
            }());
            var KhamDoanKhthDuyetTimKiemTrangThai = /** @class */ (function () {
                function KhamDoanKhthDuyetTimKiemTrangThai(ChoDuyet, DaDuyet, TuChoi) {
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = true; }
                    if (TuChoi === void 0) { TuChoi = true; }
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuChoi = TuChoi;
                }
                return KhamDoanKhthDuyetTimKiemTrangThai;
            }());
            var KhamDoanKhthDuyetTimKiemDateRange = /** @class */ (function () {
                function KhamDoanKhthDuyetTimKiemDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return KhamDoanKhthDuyetTimKiemDateRange;
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
        /***/ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet.module.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet.module.ts ***!
          \********************************************************************************************/
        /*! exports provided: KhamDoanKhthDuyetModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKhthDuyetModule", function () { return KhamDoanKhthDuyetModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _kham_doan_khth_duyet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-khth-duyet-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-routing.module.ts");
            /* harmony import */ var _kham_doan_khth_duyet_list_kham_doan_khth_duyet_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component.ts");
            /* harmony import */ var _kham_doan_khth_duyet_detail_popup_kham_doan_khth_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_khth_duyet_tu_choi_popup_kham_doan_khth_duyet_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            var KhamDoanKhthDuyetModule = /** @class */ (function () {
                function KhamDoanKhthDuyetModule() {
                }
                return KhamDoanKhthDuyetModule;
            }());
            KhamDoanKhthDuyetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _kham_doan_khth_duyet_list_kham_doan_khth_duyet_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanKhthDuyetListComponent"],
                        _kham_doan_khth_duyet_detail_popup_kham_doan_khth_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanKhthDuyetDetailPopupComponent"],
                        _kham_doan_khth_duyet_tu_choi_popup_kham_doan_khth_duyet_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanKhthDuyetTuChoiPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _kham_doan_khth_duyet_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanKhthDuyetRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_15__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]
                    ],
                    entryComponents: [
                        _kham_doan_khth_duyet_detail_popup_kham_doan_khth_duyet_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanKhthDuyetDetailPopupComponent"],
                        _kham_doan_khth_duyet_tu_choi_popup_kham_doan_khth_duyet_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanKhthDuyetTuChoiPopupComponent"]
                    ]
                })
            ], KhamDoanKhthDuyetModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~kham-doan-kham-doan-giam-doc-duyet-kham-doan-giam-doc-duyet-module~kham-doan-kham-doan-khth-~cb6ead4c-es2015.js.map
//# sourceMappingURL=default~kham-doan-kham-doan-giam-doc-duyet-kham-doan-giam-doc-duyet-module~kham-doan-kham-doan-khth-~cb6ead4c-es5.js.map
//# sourceMappingURL=default~kham-doan-kham-doan-giam-doc-duyet-kham-doan-giam-doc-duyet-module~kham-doan-kham-doan-khth-~cb6ead4c-es5.js.map