(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-doan-kham-doan-nhan-su-kham-suc-khoe-kham-doan-nhan-su-kham-suc-khoe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.html ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[ {Title:'Khám Đoàn',Path:''}\n        ,{Title:'DS Yêu Cầu Nhân Sự Khám Sức Khỏe', Path: '/kham-doan/nhan-su-kham', queryParams: {holdQuery : true}}\n        ,{Title: header,Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div>\n                <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"space-between\">\n                    <h2 class=\"title m-0\">{{title}}</h2>\n                    <label [ngClass]=\"{'orangeText': khamDoanNhanSuDetail.TrangThai == 1,\n                                    'greenText': khamDoanNhanSuDetail.TrangThai == 2,\n                                    'redText': khamDoanNhanSuDetail.TrangThai == 3}\">\n                        {{khamDoanNhanSuDetail.TenTinhTrang}}\n                    </label>\n                </div>\n                <div class=\"px-6 py-4\" fxLayout=\"column\" [ngClass]=\"{'disableDiv':khamDoanNhanSuDetail.IsDuyet}\">\n                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                        <app-combobox id=\"congTy\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n                            [(model)]=\"khamDoanNhanSuDetail.CongTyId\" [modelText]=\"khamDoanNhanSuDetail.CongTy\"\n                            url=\"KhamDoan/GetCongTys\" hierarchyKeyToSend=\"CongTyId\"\n                            [validationerror]=\"'CongTyId' | validationerror:validationErrors\">\n                        </app-combobox>\n                        <app-combobox id=\"hopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hợp đồng\"\n                            url=\"KhamDoan/GetHopDongKhamSucKhoes\" [required]=\"true\" hierarchyKeyToListen=\"CongTyId\"\n                            [(model)]=\"khamDoanNhanSuDetail.HopDongKhamSucKhoeId\"\n                            (modelChange)=\"DisplayContagiousInfo($event)\"\n                            [validationerror]=\"'HopDongKhamSucKhoeId' | validationerror:validationErrors\">\n                        </app-combobox>\n                        <app-textboxnumeric id=\"soLuongBenhNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\"\n                            label=\"SL NB \" [(model)]=\"khamDoanNhanSuDetail.SoNguoiKham\" [decimals]=\"0\" [disabled]=\"true\">\n                        </app-textboxnumeric>\n                        <app-datepicker id=\"ngayBatDauKham\" [(model)]=\"khamDoanNhanSuDetail.NgayHieuLuc\" fxFlex=\"20%\"\n                            fxFlex.sm=\"20%\" label=\"Ngày BĐ khám\" [disabled]=\"true\">\n                        </app-datepicker>\n                        <app-datepicker id=\"NgayKetThucKham\" [(model)]=\"khamDoanNhanSuDetail.NgayKetThuc\" fxFlex=\"20%\"\n                            fxFlex.sm=\"20%\" label=\"Ngày KT khám\" [disabled]=\"true\">\n                        </app-datepicker>\n\n                        <app-grid *ngIf=\"diaDiemKhamDisplay==true\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                            masterName=\"diaDiemKham\" [gridColumns]=\"gridDiaDiemKhamColumns\"\n                            [documentType]=\"documentType\" [useAddDeault]=\"false\" class=\"k-grid-border\"\n                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                            [maxHeight]=\"200\" [lazyLoadPage]=\"true\" [gridDataSource]=\"gridDiaDiemKhamDatasource\"\n                            style=\"width: 1px;\" [pageable]=\"false\">\n                        </app-grid>\n                        <ng-template #ngayKhamTemplate let-dataItem>\n                            {{dataItem.NgayDisplay}}\n                        </ng-template>\n\n                        <app-textboxnumeric id=\"tongSoLuongBacSi\" [(model)]=\"khamDoanNhanSuDetail.TongSoBs\" fxFlex=\"20%\"\n                            fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng SL BS\" [decimals]=\"0\" [disabled]=\"true\">\n                        </app-textboxnumeric>\n                        <app-textboxnumeric id=\"tongSoLuongDieuDuong\" [(model)]=\"khamDoanNhanSuDetail.TongSoDd\"\n                            fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng SL ĐD\" [decimals]=\"0\"\n                            [disabled]=\"true\">\n                        </app-textboxnumeric>\n                        <app-textboxnumeric id=\"tongSoLuongNhanVienKhac\" [(model)]=\"khamDoanNhanSuDetail.TongNvKhac\"\n                            fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Tổng NV khác\" [decimals]=\"0\"\n                            [disabled]=\"true\">\n                        </app-textboxnumeric>\n\n                        <ng-container *ngIf=\"id!=0\">\n                            <app-combobox id=\"nguoiGuiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Người gửi\"\n                                [(model)]=\"khamDoanNhanSuDetail.NhanVienGuiYeuCauId\"\n                                [modelText]=\"khamDoanNhanSuDetail.NhanVienGui\" url=\"KhamDoan/GetListNguoiGui\"\n                                [disabled]=\"true\">\n                            </app-combobox>\n                            <app-datepicker id=\"ngayGui\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày gửi\"\n                                [(model)]=\"khamDoanNhanSuDetail.NgayGuiYeuCau\" [disabled]=\"true\">\n                            </app-datepicker>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet == true\">\n                            <app-combobox id=\"KHTHDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"KHTH duyệt\"\n                                [(model)]=\"khamDoanNhanSuDetail.NhanVienKHTHDuyetId\"\n                                [modelText]=\"khamDoanNhanSuDetail.NhanVienKhthDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                                [disabled]=\"true\">\n                            </app-combobox>\n                            <app-datepicker id=\"ngayKHTHDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày KHTH duyệt\"\n                                [(model)]=\"khamDoanNhanSuDetail.NgayKHTHDuyet\" [disabled]=\"true\">\n                            </app-datepicker>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocKHTHDuyet == false\">\n                            <app-combobox id=\"KHTHTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"KHTH từ chối\"\n                                [(model)]=\"khamDoanNhanSuDetail.NhanVienKHTHDuyetId\"\n                                [modelText]=\"khamDoanNhanSuDetail.NhanVienKhthDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                                [disabled]=\"true\">\n                            </app-combobox>\n                            <app-datepicker id=\"ngayKHTHTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày KHTH từ chối\"\n                                [(model)]=\"khamDoanNhanSuDetail.NgayKHTHDuyet\" [disabled]=\"true\">\n                            </app-datepicker>\n                            <app-textarea id=\"lyDoKHTHTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                                label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoKHTHKhongDuyet\">\n                            </app-textarea>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocNhanSuDuyet == true\">\n                            <app-combobox id=\"NhanVienNhanSuDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"NS duyệt\"\n                                [(model)]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyetId\"\n                                [modelText]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                                [disabled]=\"true\">\n                            </app-combobox>\n                            <app-datepicker id=\"NgayNhanSuDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày NS duyệt\"\n                                [(model)]=\"khamDoanNhanSuDetail.NgayNhanSuDuyet\" [disabled]=\"true\">\n                            </app-datepicker>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocNhanSuDuyet == false\">\n                            <app-combobox id=\"NSTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"NS từ chối\"\n                                [(model)]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyetId\"\n                                [modelText]=\"khamDoanNhanSuDetail.NhanVienNhanSuDuyet\" url=\"KhamDoan/GetListNguoiDuyet\"\n                                [disabled]=\"true\">\n                            </app-combobox>\n                            <app-datepicker id=\"NgayNhanSuDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày NS từ chối\"\n                                [(model)]=\"khamDoanNhanSuDetail.NgayNhanSuDuyet\" [disabled]=\"true\">\n                            </app-datepicker>\n                            <app-textarea id=\"lyDoNSTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                                label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoNhanSuKhongDuyet\">\n                            </app-textarea>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocGiamDocDuyet == true\">\n                            <app-combobox id=\"GiamDocId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"GĐ duyệt\"\n                                [(model)]=\"khamDoanNhanSuDetail.GiamDocId\" [modelText]=\"khamDoanNhanSuDetail.GiamDoc\"\n                                url=\"KhamDoan/GetListNguoiDuyet\" [disabled]=\"true\">\n                            </app-combobox>\n                            <app-datepicker id=\"NgayGiamDocDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày GĐ duyệt\"\n                                [(model)]=\"khamDoanNhanSuDetail.NgayGiamDocDuyet\" [disabled]=\"true\">\n                            </app-datepicker>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"khamDoanNhanSuDetail.DuocGiamDocDuyet == false\">\n                            <app-combobox id=\"GDTuChoiId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"GĐ từ chối\"\n                                [(model)]=\"khamDoanNhanSuDetail.GiamDocId\" [modelText]=\"khamDoanNhanSuDetail.GiamDoc\"\n                                url=\"KhamDoan/GetListNguoiDuyet\" [disabled]=\"true\">\n                            </app-combobox>\n                            <app-datepicker id=\"NgayGDDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày GĐ từ chối\"\n                                [(model)]=\"khamDoanNhanSuDetail.NgayGiamDocDuyet\" [disabled]=\"true\">\n                            </app-datepicker>\n                            <app-textarea id=\"lyDoNSTuChoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                [style.color]=\"khamDoanNhanSuDetail.TrangThai == 3 ? 'red' : ''\" [disabled]=\"true\"\n                                label=\"Lý do\" [minHeight]=\"21\" [(model)]=\"khamDoanNhanSuDetail.LyDoGiamDocKhongDuyet\">\n                            </app-textarea>\n                        </ng-container>\n\n                        <h3 fxFlex=\"100%\" class=\"sub-title\">Danh Sách Nhân Sự</h3>\n\n                        <div *ngIf=\"id == 0 || khamDoanNhanSuDetail.TrangThai==1\" fxFlex=\"100%\" class=\"po-h-radio\">\n                            <app-radio id=\"chon-loai-dv\" name=\"select\" class=\"no-format-css pl-4 temp\"\n                                (modelChange)=\"Reset($event)\" [(model)]=\"selection\"\n                                [items]=\"[{Value:1,Text:'Nội viện'},{Value:2,Text:'Ngoại viện'}]\">\n                            </app-radio>\n                        </div>\n\n                        <ng-container *ngIf=\"selection == 1\">\n                            <app-combobox id=\"hoTen\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Họ tên\"\n                                (modelChange)=\"DisplayNhanVienRelatedInfo($event)\"\n                                [disabled]=\"id != 0 && khamDoanNhanSuDetail.TrangThai!=1\"\n                                [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanVienId\"\n                                [modelText]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.HoTen\" url=\"KhamDoan/GetListBacSi\">\n                            </app-combobox>\n                            <app-textbox id=\"donVi\" fxFlex=\"20%\" fxFlex.sm=\"100%\"\n                                [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.DonVi\" label=\"Đơn vị\"\n                                [disabled]=\"true\">\n                            </app-textbox>\n                            <app-autocomplete id=\"vitriLamViec\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Vị trí LV\"\n                                [required]=\"true\" url=\"KhamDoan/GetListViTriLamViec\"\n                                [disabled]=\"id != 0 && khamDoanNhanSuDetail.TrangThai!=1\"\n                                [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.ViTriLamViec\" maxlength=\"100\"\n                                [validationerror]=\"'ViTriLamViec' | validationerror:validationErrorsThemNhanSu\">\n                            </app-autocomplete>\n                            <app-textboxmask id=\"soDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"SĐT\"\n                                [disabled]=\"id != 0 && khamDoanNhanSuDetail.TrangThai!=1\"\n                                [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.SoDienThoai\" mask=\"000 000-0000\">\n                            </app-textboxmask>\n                            <app-combobox id=\"doiTuong\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Đối tượng\"\n                                [required]=\"true\" url=\"KhamDoan/GetListDoiTuong\"\n                                [disabled]=\"id != 0 && khamDoanNhanSuDetail.TrangThai!=1\"\n                                [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec\"\n                                [modelText]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViecDisplay\"\n                                [validationerror]=\"'DoiTuongLamViec' | validationerror:validationErrorsThemNhanSu\">\n                            </app-combobox>\n\n                            <app-combobox id=\"nguoiGioiThieu\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Người giới thiệu\"\n                                [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguoiGioiThieuId\"\n                                [modelText]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguoiGioiThieu\"\n                                url=\"KhamDoan/GetListBacSi\" [disabled]=\"id != 0 && khamDoanNhanSuDetail.TrangThai!=1\">\n                            </app-combobox>\n                            <app-upload id=\"upload\" #taiLieuDinhKiem fxFlex=\"40%\" fxFlex.sm=\"100%\"\n                                [allowedExtensions]=\"allowedExtensions\"\n                                [disabled]=\"id != 0 && khamDoanNhanSuDetail.TrangThai!=1\"\n                                [invalidFileExtensionMess]=\"invalidFileExtensionMess\" label=\"TL ĐK\"\n                                [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem[0]\"\n                                [template]=\"template\" (uploadFileDone)=\"uploadFileDone($event)\">\n                            </app-upload>\n\n                            <app-textbox id=\"ghiChu\" [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.GhiChu\"\n                                fxFlex=\"40%\" fxFlex.sm=\"100%\" label=\"Ghi chú\" [maxlength]=\"50\"\n                                [disabled]=\"id != 0 && khamDoanNhanSuDetail.TrangThai!=1\">\n                            </app-textbox>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"selection == 2\">\n                            <app-autocomplete id=\"vitriLamViec\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Vị trí LV\"\n                                [required]=\"true\" url=\"KhamDoan/GetListViTriLamViec\"\n                                [disabled]=\"id != 0 && khamDoanNhanSuDetail.TrangThai!=1\"\n                                [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.ViTriLamViec\" maxlength=\"100\"\n                                [validationerror]=\"'ViTriLamViec' | validationerror:validationErrorsThemNhanSu\">\n                            </app-autocomplete>\n                            <app-combobox id=\"doiTuong\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Đối tượng\"\n                                [disabled]=\"true\" [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec\"\n                                [modelText]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViecDisplay\"\n                                [required]=\"true\" url=\"KhamDoan/GetListDoiTuong\"\n                                [validationerror]=\"'DoiTuongLamViec' | validationerror:validationErrorsThemNhanSu\">\n                            </app-combobox>\n                            <app-textbox id=\"ghiChu\" fxFlex=\"40%\" fxFlex.sm=\"100%\" label=\"Ghi chú\"\n                                [disabled]=\"id != 0 && khamDoanNhanSuDetail.TrangThai!=1\"\n                                [(model)]=\"yeuCauNhanSuKhamSucKhoeChiTietCurrent.GhiChu\" [maxlength]=\"50\">\n                            </app-textbox>\n                        </ng-container>\n\n                        <ng-template #template let-files>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <td>\n                                        <a *ngIf=\"files[0].error\" title=\"{{'Tải file bị lỗi: '+files[0].error}}\"\n                                            (click)=\"taiLieuDinhKiem.viewFile(files[0])\"\n                                            class=\"custom-name red\">{{files[0].name}}</a>\n                                        <a *ngIf=\"!files[0].error\" title=\"{{files[0].name}}\"\n                                            (click)=\"taiLieuDinhKiem.viewFile(files[0])\" class=\"green\"\n                                            class=\"custom-name green\">{{files[0].name}}</a>\n                                    </td>\n                                    <td style=\"width:25px\">\n                                        <a type=\"button\" (click)=\"taiLieuDinhKiem.remove(files[0].uid)\" mat-icon-button>\n                                            <mat-icon [icIcon]=\"icClear\"></mat-icon>\n                                        </a>\n                                    </td>\n                                </tr>\n                            </table>\n                        </ng-template>\n\n                        <div *ngIf=\"id == 0 || khamDoanNhanSuDetail.TrangThai==1\" fxFlex=\"100%\"\n                            fxLayoutAlign=\"end center\" kendoTooltip>\n                            <button type=\"button\" (click)=\"Reset()\" color=\"primary\" mat-stroked-button mat-button\n                                class=\"mr-1\">Hủy</button>\n                            <button type=\"button\" (click)=\"xuLyThem()\" color=\"primary\" mat-raised-button mat-button\n                                class=\"mr-1\">{{operationCommand}}</button>\n                        </div>\n\n\n                        <app-grid #gridNhanSu fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n                            [gridColumns]=\"gridNhanSuColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\"\n                            [useAddDeault]=\"false\" [showStt]=\"true\" [useHeaderDefault]=\"false\"\n                            [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n                            [pageable]=\"false\" [gridDataSource]=\"gridNhanSuDatasource\">\n                        </app-grid>\n                        <!-- dùng HighLightClass = bg-row-lightred để tô màu row -->\n                        <ng-template #hoTenTemplate let-dataItem>\n                            <a (click)=\"ShowToControl(dataItem)\"\n                                *ngIf=\"khamDoanNhanSuDetail.TrangThai==1||khamDoanNhanSuDetail.TrangThai==null\">\n                                <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.HoTen}}\">{{dataItem.HoTen}}\n                                </p>\n                            </a>\n                            <a (click)=\"ShowToControl(dataItem)\" *ngIf=\"khamDoanNhanSuDetail.TrangThai == 3\">\n                                <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.HoTen}}\">{{dataItem.HoTen}}\n                                </p>\n                            </a>\n                        </ng-template>\n                        <ng-template #taiLieuTemplate let-dataItem>\n                            <a (click)=\"viewFile(dataItem)\" *ngIf=\"dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null\">\n                                <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{getTenTaiLieuDinhKem(dataItem)}}\">\n                                    {{getTenTaiLieuDinhKem(dataItem)}}\n                                </p>\n                            </a>\n                        </ng-template>\n                        <ng-template #actionTemplate let-dataItem>\n                            <div class=\"text-center\" kendoTooltip\n                                *ngIf=\"khamDoanNhanSuDetail.TrangThai==1||khamDoanNhanSuDetail.TrangThai==null\">\n                                <button style=\"color: red;\" (click)=\"delete(dataItem)\" mat-icon-button kendoTooltip\n                                    title=\"Xóa\" type=\"button\">\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                            </div>\n                        </ng-template>\n                    </div>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                    <button style=\"margin-right: 22px;margin-bottom: 20px;\" type=\"button\" mat-stroked-button\n                        color=\"primary\" (click)=\"quayLai()\">Hủy</button>\n                    <button *ngIf=\"gridNhanSuDatasource.data.length > 0  && id==0\" mat-raised-button mat-button color=\"primary\" (click)=\"GuiYeuCauNhanSu()\">\n                        Gửi yêu cầu\n                    </button>\n                    <button\n                        *ngIf=\"gridNhanSuDatasource.data.length > 0  &&  khamDoanNhanSuDetail.TrangThai==1 && khamDoanNhanSuDetail.IsDuyet !== true\"\n                        mat-raised-button mat-button color=\"primary\" (click)=\"Save()\">Lưu</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.html":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.html ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Yêu Cầu Nhân Sự Khám Sức Khỏe',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n                <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                    [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\"\n                    [headerTemplate]=\"headerTemplate\" [searchString]=\"timKiemObj.SearchString\" [showStt]=\"true\" [sort]=\"sort\"\n                    [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlTotalPage\">\n                </app-grid>\n                <!-- urlGetData=\"NhapKhoMau/GetDataForGridDuyetNhapKhoMau\"\n                    urlGetTotalPage=\"NhapKhoMau/GetTotalPageForGridDuyetNhapKhoMau\" -->\n\n                <ng-template #headerTemplate>\n                    <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                        <app-checkbox [(model)]=\"timKiemObj.TrangThai.ChoDuyet\"\n                            id=\"choDuyet\" label=\"Chờ duyệt\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                        </app-checkbox>\n                        <app-checkbox [(model)]=\"timKiemObj.TrangThai.DaDuyet\"\n                            id=\"daDuyet\" label=\"Đã duyệt\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                        </app-checkbox>\n                        <app-checkbox [(model)]=\"timKiemObj.TrangThai.TuChoi\"\n                            id=\"tuChoi\" label=\"Từ chối\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                        </app-checkbox>\n                        <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                            [(model)]=\"timKiemObj.NgayGui\"\n                            label=\"Ngày gửi: Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                        </app-daterangepicker>\n                        <app-daterangepicker id=\"KHTHTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                            [(model)]=\"timKiemObj.NgayKHTHDuyet\"\n                            label=\"Ngày KHTH duyệt: Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                        </app-daterangepicker>\n                        <app-daterangepicker id=\"NhanSuTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                            [(model)]=\"timKiemObj.NgayNhanSuDuyet\"\n                            label=\"Ngày NS duyệt: Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                        </app-daterangepicker>\n                        <app-daterangepicker id=\"GiamDocTuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                            [(model)]=\"timKiemObj.NgayGiamDocDuyet\"\n                            label=\"Ngày GĐ duyệt: Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                        </app-daterangepicker>\n\n                        <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"280px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                        </div>\n                        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                        </button>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of _gridColumnsFilter\">\n                                <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                    <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n\n                        <button fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\"\n                            (click)=\"xuLyXuatExcel()\">\n                            <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                        </button>\n\n                        <button (click)=\"xemChiTiet()\" class=\"ml-3 mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                        </button>\n                    </div>\n                </ng-template>\n\n                <ng-template #tenHopDongTemplate let-dataItem>\n                    <a (click)=\"xemChiTiet(dataItem.Id)\"><p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.HopDong}}\">{{dataItem.HopDong}}</p></a>\n                </ng-template>\n\n                <ng-template #trangThaiTemplate let-dataItem>\n                    <div style=\"position: relative;\">\n                        <span [ngClass]=\"{'orangeText': dataItem.TrangThai == 1,\n                                'greenText': dataItem.TrangThai == 2,\n                                'redText': dataItem.TrangThai == 3}\">\n                            {{dataItem.TenTinhTrang}}\n                        </span>\n                    </div>\n                </ng-template>\n\n                <ng-template #ngayBatDauKhamTemplate let-dataItem>\n                    <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayBatDauKhamDisplay}}\">\n                        {{dataItem.NgayBatDauKhamDisplay}} </div>\n                </ng-template>\n                <ng-template #ngayKetThucKhamTemplate let-dataItem>\n                    <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayKetThucKhamDisplay}}\">\n                        {{dataItem.NgayKetThucKhamDisplay}} </div>\n                </ng-template>\n                <ng-template #ngayGuiTemplate let-dataItem>\n                    <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayGuiDisplay}}\">{{dataItem.NgayGuiDisplay}} </div>\n                </ng-template>\n                <ng-template #ngayKHTHDuyetTemplate let-dataItem>\n                    <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayKhthDuyetDisplay}}\">\n                        {{dataItem.NgayKhthDuyetDisplay}} </div>\n                </ng-template>\n                <ng-template #ngayNhanSuDuyetTemplate let-dataItem>\n                    <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayNsDuyetDisplay}}\">\n                        {{dataItem.NgayNsDuyetDisplay}} </div>\n                </ng-template>\n                <ng-template #ngayGiamDocDuyetTemplate let-dataItem>\n                    <div class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.NgayGdDuyetDisplay}}\">{{dataItem.NgayGdDuyetDisplay}}\n                    </div>\n                </ng-template>\n\n                <ng-template #actionTemplate let-dataItem>\n                        <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xoa(dataItem.Id)\">\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                        </button>\n                </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n\n.space-between {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1uaGFuLXN1LWtoYW0tc3VjLWtob2UtZGV0YWlsLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lXFxraGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lLWRldGFpbC1wb3B1cFxca2hhbS1kb2FuLW5oYW4tc3Uta2hhbS1zdWMta2hvZS1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLW5oYW4tc3Uta2hhbS1zdWMta2hvZS9raGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lLWRldGFpbC1wb3B1cC9raGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lLWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1uaGFuLXN1LWtoYW0tc3VjLWtob2Uva2hhbS1kb2FuLW5oYW4tc3Uta2hhbS1zdWMta2hvZS1kZXRhaWwtcG9wdXAva2hhbS1kb2FuLW5oYW4tc3Uta2hhbS1zdWMta2hvZS1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn0iLCIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.ts":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: KhamDoanNhanSuKhamSucKhoeDetailPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuKhamSucKhoeDetailPopupComponent", function() { return KhamDoanNhanSuKhamSucKhoeDetailPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
/* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/file-download.helper */ "./src/app/core/utilities/file-download.helper.ts");
/* harmony import */ var _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../kham-doan-nhan-su-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");




















let KhamDoanNhanSuKhamSucKhoeDetailPopupComponent = class KhamDoanNhanSuKhamSucKhoeDetailPopupComponent {
    constructor(dialog, router, authService, notificationService, apiService, route, cdRef, http) {
        this.dialog = dialog;
        this.router = router;
        this.authService = authService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.route = route;
        this.cdRef = cdRef;
        this.http = http;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.validationErrors = [];
        this.validationErrorsThemNhanSu = [];
        this.gridNhanSuColumns = [];
        this.gridDiaDiemKhamColumns = [];
        this.gridNhanSuDatasource = {
            data: [],
            total: 0
        };
        this.gridDiaDiemKhamDatasource = {
            data: [],
            total: 0
        };
        this.title = '';
        this.header = '';
        this.selection = 1;
        this.allowedExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
        this.invalidFileExtensionMess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].InvalidFileExtension, [this.allowedExtensions.toString()]);
        this.fileTaiLieu = null;
        this.khamDoanNhanSuDetail = new _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauNhanSuKhamSucKhoeDetail"]();
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent = new _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauNhanSuKhamSucKhoeChiTiet"]();
        this.diaDiemKhamDisplay = false;
        this.operationCommand = _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["CommandName"].Add;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].KhamDoanYeuCauNhanSuKhamSucKhoe;
        this.id = this.route.snapshot.params.id;
        this.id = (this.id == null) ? 0 : this.id;
        if (this.id === 0) {
            this.title = 'Tạo yêu cầu nhân sự khám sức khỏe';
            this.header = 'Tạo Yêu Cầu Nhân Sự Khám Sức Khỏe';
        }
        else {
            this.title = 'Chi tiết yêu cầu nhân sự khám sức khỏe';
            this.header = 'Chi Tiết Yêu Cầu Nhân Sự Khám Sức Khỏe';
            this.getData(this.id);
        }
        this.gridDiaDiemKhamColumns = [
            { Field: 'DiaDiem', Title: 'Địa điểm khám', Width: 220 },
            { Field: 'CongViec', Title: 'Công việc', Width: 120 },
            { Field: 'Ngay', Title: 'Ngày', Width: 100, Template: this.ngayKhamTemplate },
            { Field: 'GhiChu', Title: 'Ghi chú', Width: 193 }
        ];
        this.gridNhanSuColumns = [
            { Field: 'HoTen', Title: 'Họ tên', Width: 120, Template: this.hoTenTemplate },
            { Field: 'DonVi', Title: 'Đơn vị', Width: 244, ShowTooltip: true },
            { Field: 'ViTriLamViec', Title: 'Vị trí làm việc', Width: 90 },
            { Field: 'SoDienThoai', Title: 'SĐT', Width: 90 },
            { Field: 'DoiTuongLamViecDisplay', Title: 'Đối tượng', Width: 90 },
            { Field: 'NguoiGioiThieu', Title: 'Người giới thiệu', Width: 120 },
            { Field: '', Title: 'Tài liệu ĐK', Width: 209, Template: this.taiLieuTemplate },
            { Field: 'GhiChu', Title: 'Ghi chú', Width: 100 },
            { Field: 'Action', Title: '', Width: 40, Template: this.actionTemplate }
        ];
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec = 1;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViecDisplay = _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["DoiTuongLamViec"].Fulltime;
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
        }
    }
    DisplayContagiousInfo(currentEvent) {
        if (!currentEvent) {
            this.khamDoanNhanSuDetail.SoNguoiKham = null;
            this.khamDoanNhanSuDetail.NgayHieuLuc = null;
            this.khamDoanNhanSuDetail.NgayKetThuc = null;
            this.gridDiaDiemKhamDatasource.data = [];
            this.gridDiaDiemKhamDatasource.total = 0;
            this.diaDiemKhamDisplay = false;
        }
        if (currentEvent) {
            this.apiService
                .get('KhamDoan/GetHdKhamVaDiaDiem?id=' + currentEvent)
                // tslint:disable-next-line: deprecation
                .subscribe((resultData) => {
                this.khamDoanNhanSuDetail.SoNguoiKham = resultData.SoNguoiKham;
                this.khamDoanNhanSuDetail.NgayHieuLuc = resultData.NgayHieuLuc;
                this.khamDoanNhanSuDetail.NgayKetThuc = resultData.NgayKetThuc;
                if (resultData.KhamDoanHopDongDiaDiems && resultData.KhamDoanHopDongDiaDiems.some(x => x)) {
                    this.diaDiemKhamDisplay = true;
                    this.gridDiaDiemKhamDatasource.data = Array.from(resultData.KhamDoanHopDongDiaDiems);
                    this.gridDiaDiemKhamDatasource.total = resultData.KhamDoanHopDongDiaDiems.length;
                }
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message !== 'Validation Failed') {
                    this.notificationService.showError(err.Message);
                }
            });
        }
    }
    DisplayNhanVienRelatedInfo(currentEvent) {
        if (!currentEvent) {
            this.yeuCauNhanSuKhamSucKhoeChiTietCurrent = new _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauNhanSuKhamSucKhoeChiTiet"]();
        }
        if (currentEvent) {
            this.apiService
                .get('KhamDoan/GetNhanVienRelatedInfo?id=' + currentEvent)
                // tslint:disable-next-line: deprecation
                .subscribe((resultData) => {
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DonVi = resultData.DonVi;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.SoDienThoai = resultData.SoDienThoai;
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message !== 'Validation Failed') {
                    this.notificationService.showError(err.Message);
                }
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
            this.selection = this.khamDoanNhanSuDetail.TrangThai === 1 ? 1 : null;
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
    getTenTaiLieuDinhKem(dataItem) {
        return dataItem != null ?
            dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null && dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem[0].Ten : '' : '';
    }
    ShowToControl(dataItem) {
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent = JSON.parse(JSON.stringify(dataItem));
        this.operationCommand = _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["CommandName"].Update;
    }
    xuLyThem() {
        this.validateWhenThemNhanSu();
        if (this.validationErrorsThemNhanSu && this.validationErrorsThemNhanSu.some(x => x)) {
            return;
        }
        if (this.operationCommand === _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["CommandName"].Update) {
            const currentIndex = this.gridNhanSuDatasource.data.map(x => x.Id).indexOf(this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.Id);
            this.gridNhanSuDatasource.data[currentIndex] = JSON.parse(JSON.stringify(this.yeuCauNhanSuKhamSucKhoeChiTietCurrent));
            this.gridNhanSuDatasource.data[currentIndex].NguonNhanSu = this.selection;
            this.gridNhanSuDatasource.data[currentIndex].IsCreate =
                this.gridNhanSuDatasource.data[currentIndex].IsCreate === true ? true : null;
            this.gridNhanSuDatasource.data[currentIndex].IsUpdate =
                this.gridNhanSuDatasource.data[currentIndex].IsCreate === true ? null : true;
            this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKemId =
                this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                    this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKemId : null;
            this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKem =
                this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                    this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKem.reduce((a, v) => a.concat(v), []) : [];
            this.apiService
                .post('KhamDoan/GetThongTinNhanSuConLai', this.gridNhanSuDatasource.data[currentIndex])
                // tslint:disable-next-line: deprecation
                .subscribe((resultData) => {
                if (resultData.LoaiNhanVien) {
                    this.khamDoanNhanSuDetail.TongSoBs = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 1).length;
                    this.khamDoanNhanSuDetail.TongSoDd = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 2).length;
                    this.khamDoanNhanSuDetail.TongNvKhac = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 3).length;
                }
                this.gridNhanSuDatasource.data[currentIndex].DoiTuongLamViecDisplay =
                    resultData.DoiTuongLamViecDisplay;
                this.gridNhanSuDatasource.data[currentIndex].NguoiGioiThieu =
                    resultData.NguoiGioiThieu;
                this.gridNhanSuDatasource.data[currentIndex].HoTen =
                    resultData.HoTen;
                this.khamDoanNhanSuDetail.YeuCauNhanSuKhamSucKhoeChiTiets
                    = JSON.parse(JSON.stringify(this.gridNhanSuDatasource.data));
                this.gridNhanSu._gridDataSource = JSON.parse(JSON.stringify(this.gridNhanSuDatasource));
                this.gridNhanSu.setDataSource();
                this.Reset();
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message !== 'Validation Failed') {
                    this.notificationService.showError(err.Message);
                }
            });
            return;
        }
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguonNhanSu = this.selection;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.IsCreate = true;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.Id = Math.round(Math.random() * 1000000000);
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKemId =
            this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ? 0 : null;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem =
            this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem.reduce((a, v) => a.concat(v), []) : [];
        this.gridNhanSuDatasource.data.push(this.yeuCauNhanSuKhamSucKhoeChiTietCurrent);
        this.gridNhanSuDatasource.total++;
        this.gridNhanSu._gridDataSource = JSON.parse(JSON.stringify(this.gridNhanSuDatasource.data));
        this.gridNhanSu.setDataSource();
        this.apiService
            .post('KhamDoan/GetThongTinNhanSuConLai', this.yeuCauNhanSuKhamSucKhoeChiTietCurrent)
            // tslint:disable-next-line: deprecation
            .subscribe((resultData) => {
            if (resultData.LoaiNhanVien) {
                this.khamDoanNhanSuDetail.TongSoBs = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 1).length;
                this.khamDoanNhanSuDetail.TongSoDd = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 2).length;
                this.khamDoanNhanSuDetail.TongNvKhac = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 3).length;
            }
            this.gridNhanSuDatasource.data[this.gridNhanSuDatasource.data.length - 1].DoiTuongLamViecDisplay =
                resultData.DoiTuongLamViecDisplay;
            this.gridNhanSuDatasource.data[this.gridNhanSuDatasource.data.length - 1].NguoiGioiThieu =
                resultData.NguoiGioiThieu;
            this.gridNhanSuDatasource.data[this.gridNhanSuDatasource.data.length - 1].HoTen =
                resultData.HoTen;
            this.khamDoanNhanSuDetail.YeuCauNhanSuKhamSucKhoeChiTiets
                = JSON.parse(JSON.stringify(this.gridNhanSuDatasource.data));
            this.gridNhanSu._gridDataSource = JSON.parse(JSON.stringify(this.gridNhanSuDatasource));
            this.gridNhanSu.setDataSource();
            this.Reset();
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message !== 'Validation Failed') {
                this.notificationService.showError(err.Message);
            }
        });
    }
    validateWhenThemNhanSu() {
        this.validationErrorsThemNhanSu = [];
        if (this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.ViTriLamViec == null) {
            const validate = {
                Field: 'ViTriLamViec',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["YeuCauNhanSuMessage"].MessageViTriLamViecNotNull
            };
            this.validationErrorsThemNhanSu.push(validate);
        }
        if (this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec == null) {
            const validate = {
                Field: 'DoiTuongLamViec',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["YeuCauNhanSuMessage"].MessageDoiTuongNotNull
            };
            this.validationErrorsThemNhanSu.push(validate);
        }
    }
    validateWhenYeuCauNhanSu() {
        this.validationErrors = [];
        if (this.khamDoanNhanSuDetail.CongTyId == null) {
            const validate = {
                Field: 'CongTyId',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["YeuCauNhanSuMessage"].MessageCongTyNotNull
            };
            this.validationErrors.push(validate);
        }
        if (this.khamDoanNhanSuDetail.HopDongKhamSucKhoeId == null) {
            const validate = {
                Field: 'HopDongKhamSucKhoeId',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["YeuCauNhanSuMessage"].MessageHopDongNotNull
            };
            this.validationErrors.push(validate);
        }
    }
    GuiYeuCauNhanSu() {
        this.validateWhenYeuCauNhanSu();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        this.khamDoanNhanSuDetail.Id = 0;
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn gởi yêu cầu nhân sự khám sức khỏe này không?' }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.apiService
                        .post('KhamDoan/ThemYeuCauNhanSu', this.khamDoanNhanSuDetail)
                        // tslint:disable-next-line: deprecation
                        .subscribe(() => {
                        this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["YeuCauNhanSuMessage"].MessageXnThanhCong);
                        this.router.navigate(['/kham-doan/nhan-su-kham'], {
                            queryParamsHandling: 'preserve',
                        });
                        return;
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
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    Save() {
        this.validateWhenYeuCauNhanSu();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn gởi yêu cầu nhân sự khám sức khỏe này không?' }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.apiService
                        .post('KhamDoan/UpdateYeuCauNhanSu', this.khamDoanNhanSuDetail)
                        // tslint:disable-next-line: deprecation
                        .subscribe(() => {
                        this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["YeuCauNhanSuMessage"].MessageCapNhatThanhCong);
                        this.router.navigate(['/kham-doan/nhan-su-kham'], {
                            queryParamsHandling: 'preserve',
                        });
                        return;
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
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    Reset(currentEvent = null) {
        if (this.operationCommand === _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["CommandName"].Update && currentEvent != null) {
            if (currentEvent === 2) {
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguonNhanSu = currentEvent;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.HoTen = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanVienId = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DonVi = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.SoDienThoai = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec = 2;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViecDisplay = _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["DoiTuongLamViec"].Parttime;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguoiGioiThieuId = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguoiGioiThieu = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem = [];
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKemId = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.LoaiNhanVien = null;
            }
            return;
        }
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent = new _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauNhanSuKhamSucKhoeChiTiet"]();
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguonNhanSu = currentEvent;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec = currentEvent === 2 ? 2 : 1;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViecDisplay = currentEvent === 2 ? _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["DoiTuongLamViec"].Parttime : _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["DoiTuongLamViec"].Fulltime;
        if (currentEvent == null) {
            this.operationCommand = _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["CommandName"].Add;
        }
    }
    uploadFileDone(event) {
        this.fileTaiLieu = event;
        this.cdRef.detectChanges();
    }
    delete(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
            disableClose: false,
            width: '500px',
            data: {
                Title: _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["DeleteDialog"].Title,
                Message: _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_17__["DeleteDialog"].Message,
            },
        }).afterClosed()
            // tslint:disable-next-line: deprecation
            .subscribe((res) => {
            if (res === 'Yes') {
                if (dataItem.IsCreate !== true) {
                    this.khamDoanNhanSuDetail.NhanSuBiLoaiBo.push(dataItem.Id);
                }
                this.gridNhanSuDatasource.data.splice(this.gridNhanSuDatasource.data.indexOf(dataItem), 1);
                this.gridNhanSu._gridDataSource = JSON.parse(JSON.stringify(this.gridNhanSuDatasource));
                this.gridNhanSu.setDataSource();
            }
        });
    }
    quayLai() {
        this.router.navigateByUrl('/kham-doan/nhan-su-kham?holdQuery=true');
    }
    viewFile(dataItem) {
        //console.log(file);
        var file = dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem[0];
        let duongDan = file.DuongDan;
        if (file.IsExistingFile !== true) { //save tmp
            duongDan = file.DuongDanTmp;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpParams"]({
            fromObject: {
                tenGuid: file.TenGuid,
                duongDan: duongDan,
            }
        });
        // let response = await this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).toPromise();
        this.apiService.get('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe((resp) => {
            if (resp) {
                if (file.validationErrors == null || file.validationErrors.length <= 0) {
                    if (file.LoaiTapTin == 2) {
                        var html = "<div class=\"showFile\">";
                        html += "<div class=\"overlay\"></div>";
                        html += "<div class=\"middle\">";
                        html += "<div class=\"inner\">";
                        html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                        html += "<iframe src='" + resp + "' style=\"width:770px; height:570px;\" frameborder=\"0\"></iframe>";
                        html += "</div>";
                        html += "</div>";
                        html += "</div>";
                        $(html).appendTo('app-main');
                    }
                    else {
                        if (file.LoaiTapTin == 1) {
                            var html = "<div class=\"showFile\">";
                            html += "<div class=\"overlay\"></div>";
                            html += "<div class=\"middle\">";
                            html += "<div class=\"inner\">";
                            html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                            html += "<img src='" + resp + "' alt='' style=\"max-width: 770px;max-height: 570px;\"/>";
                            html += "</div>";
                            html += "</div>";
                            html += "</div>";
                            $(html).appendTo('app-main');
                        }
                        else {
                            this.downloadFile(resp, file.name);
                            // var a = document.createElement("a");
                            // a.href = resp;
                            // a.target = "_blank";
                            // //console.log(a)
                            // a.click();
                        }
                    }
                }
                else {
                    this.notificationService.showError("Tải file bị lỗi: " + file.error);
                }
            }
        });
    }
    downloadFile(url, fileName) {
        const options = new _angular_http__WEBPACK_IMPORTED_MODULE_19__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_19__["ResponseContentType"].Blob });
        // Process the file downloaded
        this.http.get(url, options).subscribe(res => {
            //const fileName = getFileNameFromResponseContentDisposition(res);
            Object(src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_16__["saveFile"])(res.blob(), fileName);
        });
    }
};
KhamDoanNhanSuKhamSucKhoeDetailPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_19__["Http"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhamTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeDetailPopupComponent.prototype, "ngayKhamTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hoTenTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeDetailPopupComponent.prototype, "hoTenTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taiLieuTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeDetailPopupComponent.prototype, "taiLieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeDetailPopupComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridNhanSu', { static: false })
], KhamDoanNhanSuKhamSucKhoeDetailPopupComponent.prototype, "gridNhanSu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taiLieuDinhKiem', { static: false })
], KhamDoanNhanSuKhamSucKhoeDetailPopupComponent.prototype, "taiLieuDinhKiem", void 0);
KhamDoanNhanSuKhamSucKhoeDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-kham-doan-nhan-su-kham-suc-khoe-detail-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.scss")).default]
    })
], KhamDoanNhanSuKhamSucKhoeDetailPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.scss ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1uaGFuLXN1LWtoYW0tc3VjLWtob2UtbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLW5oYW4tc3Uta2hhbS1zdWMta2hvZVxca2hhbS1kb2FuLW5oYW4tc3Uta2hhbS1zdWMta2hvZS1saXN0XFxraGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLW5oYW4tc3Uta2hhbS1zdWMta2hvZS9raGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lLWxpc3Qva2hhbS1kb2FuLW5oYW4tc3Uta2hhbS1zdWMta2hvZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lL2toYW0tZG9hbi1uaGFuLXN1LWtoYW0tc3VjLWtob2UtbGlzdC9raGFtLWRvYW4tbmhhbi1zdS1raGFtLXN1Yy1raG9lLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn0iLCIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.ts":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: KhamDoanNhanSuKhamSucKhoeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuKhamSucKhoeListComponent", function() { return KhamDoanNhanSuKhamSucKhoeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kham-doan-nhan-su-kham-suc-khoe.model */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe.model.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");






















let KhamDoanNhanSuKhamSucKhoeListComponent = class KhamDoanNhanSuKhamSucKhoeListComponent {
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
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.baseRoute = '/kham-doan/nhan-su-kham';
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
        this.timKiemObj = new _kham_doan_nhan_su_kham_suc_khoe_model__WEBPACK_IMPORTED_MODULE_9__["KhamDoanNhanSuKhamSucKhoeTimKiem"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].KhamDoanYeuCauNhanSuKhamSucKhoe;
        let holdQuery;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (holdQuery && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem('additionalSearchStringDanhSachYeuCauNhanSuKhamSucKhoe')) {
            const additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem('additionalSearchStringDanhSachYeuCauNhanSuKhamSucKhoe');
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
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachYeuCauNhanSuKhamSucKhoe");
            var queryString = JSON.stringify(this.timKiemObj);
            // this.strAdditionalSearchString = JSON.stringify(this.timKiemObj);
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
            { Field: 'TrangThai', Title: 'Trạng thái', Width: 121, Sortable: true, Template: this.trangThaiTemplate },
            { Field: 'Action', Title: '', Width: 50, Sortable: false, Template: this.actionTemplate }
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
        let searchClone = JSON.parse(JSON.stringify(this.timKiemObj));
        if (searchClone.NgayGui.startDate != null) {
            const startDate = new Date(searchClone.NgayGui.startDate);
            searchClone.NgayGui.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
        }
        if (searchClone.NgayGui.endDate != null) {
            const endDate = new Date(searchClone.NgayGui.endDate);
            searchClone.NgayGui.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
        }
        if (searchClone.NgayKHTHDuyet.startDate != null) {
            const startDate = new Date(searchClone.NgayKHTHDuyet.startDate);
            searchClone.NgayKHTHDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
        }
        if (searchClone.NgayKHTHDuyet.endDate != null) {
            const endDate = new Date(searchClone.NgayKHTHDuyet.endDate);
            searchClone.NgayKHTHDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
        }
        if (searchClone.NgayNhanSuDuyet.startDate != null) {
            const startDate = new Date(searchClone.NgayNhanSuDuyet.startDate);
            searchClone.NgayNhanSuDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
        }
        if (searchClone.NgayNhanSuDuyet.endDate != null) {
            const endDate = new Date(searchClone.NgayNhanSuDuyet.endDate);
            searchClone.NgayNhanSuDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
        }
        if (searchClone.NgayGiamDocDuyet.startDate != null) {
            const startDate = new Date(searchClone.NgayGiamDocDuyet.startDate);
            searchClone.NgayGiamDocDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
        }
        if (searchClone.NgayGiamDocDuyet.endDate != null) {
            const endDate = new Date(searchClone.NgayGiamDocDuyet.endDate);
            searchClone.NgayGiamDocDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
        }
        this.strAdditionalSearchString = JSON.stringify(searchClone);
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem('additionalSearchStringDanhSachYeuCauNhanSuKhamSucKhoe', this.strAdditionalSearchString);
        this.gridChild._additionalSearchString = this.strAdditionalSearchString;
        this.gridChild.search();
    }
    xuLyXuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel('KhamDoan/ExportDanhSachYeuCauNhanSuKhamSucKhoe', this.gridChild._gridQueryInfo).subscribe(res => {
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'YeuCauNhanSuKhamSucKhoe' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xemChiTiet(id = null) {
        let securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Add;
        let url = '/them/';
        if (id != null) {
            securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Update;
            url = '/chi-tiet/';
        }
        if (this.authService.hasPermission(this.documentType, securityOperation)) {
            this.router.navigate([this.baseRoute + url + (id == null ? '' : id)]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoa(Id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].MessConfirm, ['xóa']) }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.apiService.delete('KhamDoan/XuLyXoaYeuCauNhanSuKhamSucKhoe?id=' + Id).subscribe(res => {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].ActionSuccessfully, ['Xóa']));
                        this.gridChild.search();
                    }, err => {
                        if (err.Message != 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
KhamDoanNhanSuKhamSucKhoeListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenHopDongTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "tenHopDongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayBatDauKhamTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "ngayBatDauKhamTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucKhamTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "ngayKetThucKhamTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGuiTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "ngayGuiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKHTHDuyetTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "ngayKHTHDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhanSuDuyetTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "ngayNhanSuDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDuyetTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "ngayGiamDocDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
], KhamDoanNhanSuKhamSucKhoeListComponent.prototype, "gridChild", void 0);
KhamDoanNhanSuKhamSucKhoeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-kham-doan-nhan-su-kham-suc-khoe-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-nhan-su-kham-suc-khoe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-nhan-su-kham-suc-khoe-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.scss")).default]
    })
], KhamDoanNhanSuKhamSucKhoeListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: KhamDoanNhanSuKhamSucKhoeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuKhamSucKhoeRoutingModule", function() { return KhamDoanNhanSuKhamSucKhoeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _kham_doan_nhan_su_kham_suc_khoe_detail_popup_kham_doan_nhan_su_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.ts");
/* harmony import */ var _kham_doan_nhan_su_kham_suc_khoe_list_kham_doan_nhan_su_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.ts");








const routes = [
    {
        path: '',
        component: _kham_doan_nhan_su_kham_suc_khoe_list_kham_doan_nhan_su_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanNhanSuKhamSucKhoeListComponent"],
        data: {
            title: "Yêu cầu nhân sự khám sức khỏe",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].User,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        }
    },
    {
        path: 'them',
        component: _kham_doan_nhan_su_kham_suc_khoe_detail_popup_kham_doan_nhan_su_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanNhanSuKhamSucKhoeDetailPopupComponent"],
        data: {
            title: 'Tạo yêu cầu nhân sự khám sức khỏe',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].User,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet/:id',
        component: _kham_doan_nhan_su_kham_suc_khoe_detail_popup_kham_doan_nhan_su_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanNhanSuKhamSucKhoeDetailPopupComponent"],
        data: {
            title: 'Chi tiết yêu cầu nhân sự khám sức khỏe',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].User,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let KhamDoanNhanSuKhamSucKhoeRoutingModule = class KhamDoanNhanSuKhamSucKhoeRoutingModule {
};
KhamDoanNhanSuKhamSucKhoeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KhamDoanNhanSuKhamSucKhoeRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe.model.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe.model.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: KhamDoanNhanSuKhamSucKhoeTimKiem, KhamDoanNhanSuKhamSucKhoeTimKiemTrangThai, KhamDoanNhanSuKhamSucKhoeTimKiemDateRange, YeuCauNhanSuKhamSucKhoeDetail, HopDongKhamSucKhoeDiaDiem, YeuCauNhanSuKhamSucKhoeChiTiet, FileTaiLieu, CommandName, DoiTuongLamViec, DeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuKhamSucKhoeTimKiem", function() { return KhamDoanNhanSuKhamSucKhoeTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuKhamSucKhoeTimKiemTrangThai", function() { return KhamDoanNhanSuKhamSucKhoeTimKiemTrangThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuKhamSucKhoeTimKiemDateRange", function() { return KhamDoanNhanSuKhamSucKhoeTimKiemDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauNhanSuKhamSucKhoeDetail", function() { return YeuCauNhanSuKhamSucKhoeDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongKhamSucKhoeDiaDiem", function() { return HopDongKhamSucKhoeDiaDiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauNhanSuKhamSucKhoeChiTiet", function() { return YeuCauNhanSuKhamSucKhoeChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTaiLieu", function() { return FileTaiLieu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandName", function() { return CommandName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoiTuongLamViec", function() { return DoiTuongLamViec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialog", function() { return DeleteDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KhamDoanNhanSuKhamSucKhoeTimKiem {
    constructor(SearchString = null, TrangThai = new KhamDoanNhanSuKhamSucKhoeTimKiemTrangThai(), NgayGui = new KhamDoanNhanSuKhamSucKhoeTimKiemDateRange(), NgayKHTHDuyet = new KhamDoanNhanSuKhamSucKhoeTimKiemDateRange(), NgayNhanSuDuyet = new KhamDoanNhanSuKhamSucKhoeTimKiemDateRange(), NgayGiamDocDuyet = new KhamDoanNhanSuKhamSucKhoeTimKiemDateRange()) {
        this.SearchString = SearchString;
        this.TrangThai = TrangThai;
        this.NgayGui = NgayGui;
        this.NgayKHTHDuyet = NgayKHTHDuyet;
        this.NgayNhanSuDuyet = NgayNhanSuDuyet;
        this.NgayGiamDocDuyet = NgayGiamDocDuyet;
    }
}
class KhamDoanNhanSuKhamSucKhoeTimKiemTrangThai {
    constructor(ChoDuyet = true, DaDuyet = true, TuChoi = true) {
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuChoi = TuChoi;
    }
}
class KhamDoanNhanSuKhamSucKhoeTimKiemDateRange {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class YeuCauNhanSuKhamSucKhoeDetail {
    constructor(Id = null, HopDongKhamSucKhoeId = null, CongTyId = null, CongTy = null, SoNguoiKham = null, NgayHieuLuc = null, NgayHieuLucDisplay = null, NgayKetThuc = null, NgayKetThucDisplay = null, TongSoBs = 0, TongSoDd = 0, TongNvKhac = 0, NhanVienGuiYeuCauId = null, NhanVienGui = null, NgayGuiYeuCau = null, DuocKHTHDuyet = null, NgayKHTHDuyet = null, NgayKhthDuyetDisplay = null, NhanVienKHTHDuyetId = null, NhanVienKhthDuyet = null, LyDoKHTHKhongDuyet = null, DuocNhanSuDuyet = null, NgayNhanSuDuyet = null, NgayNhanSuDuyetDisplay = null, NhanVienNhanSuDuyetId = null, NhanVienNhanSuDuyet = null, LyDoNhanSuKhongDuyet = null, DuocGiamDocDuyet = null, NgayGiamDocDuyet = null, NgayGiamDocDuyetDisplay = null, GiamDocId = null, GiamDoc = null, LyDoGiamDocKhongDuyet = null, TrangThai = null, TenTinhTrang = null, YeuCauNhanSuKhamSucKhoeChiTiets = [], NhanSuBiLoaiBo = [], IsDuyet = null) {
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
        this.NhanSuBiLoaiBo = NhanSuBiLoaiBo;
        this.IsDuyet = IsDuyet;
    }
}
class HopDongKhamSucKhoeDiaDiem {
    constructor(Id = null, DiaDiem = null, CongViec = null, Ngay = null, NgayDisplay = null, GhiChu = null) {
        this.Id = Id;
        this.DiaDiem = DiaDiem;
        this.CongViec = CongViec;
        this.Ngay = Ngay;
        this.NgayDisplay = NgayDisplay;
        this.GhiChu = GhiChu;
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
const CommandName = {
    Add: 'Thêm',
    Update: 'Cập nhật'
};
const DoiTuongLamViec = {
    Parttime: 'Parttime',
    Fulltime: 'Fulltime'
};
const DeleteDialog = {
    Title: 'Xác nhận xóa',
    Message: 'Bạn có muốn xóa người này không?'
};


/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: KhamDoanNhanSuKhamSucKhoeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanNhanSuKhamSucKhoeModule", function() { return KhamDoanNhanSuKhamSucKhoeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kham_doan_nhan_su_kham_suc_khoe_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-nhan-su-kham-suc-khoe-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-routing.module.ts");
/* harmony import */ var _kham_doan_nhan_su_kham_suc_khoe_list_kham_doan_nhan_su_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component.ts");
/* harmony import */ var _kham_doan_nhan_su_kham_suc_khoe_detail_popup_kham_doan_nhan_su_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.ts");
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


















let KhamDoanNhanSuKhamSucKhoeModule = class KhamDoanNhanSuKhamSucKhoeModule {
};
KhamDoanNhanSuKhamSucKhoeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _kham_doan_nhan_su_kham_suc_khoe_list_kham_doan_nhan_su_kham_suc_khoe_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanNhanSuKhamSucKhoeListComponent"],
            _kham_doan_nhan_su_kham_suc_khoe_detail_popup_kham_doan_nhan_su_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanNhanSuKhamSucKhoeDetailPopupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kham_doan_nhan_su_kham_suc_khoe_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanNhanSuKhamSucKhoeRoutingModule"],
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
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]
        ],
        entryComponents: [
            _kham_doan_nhan_su_kham_suc_khoe_detail_popup_kham_doan_nhan_su_kham_suc_khoe_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanNhanSuKhamSucKhoeDetailPopupComponent"]
        ]
    })
], KhamDoanNhanSuKhamSucKhoeModule);



/***/ })

}]);
//# sourceMappingURL=kham-doan-kham-doan-nhan-su-kham-suc-khoe-kham-doan-nhan-su-kham-suc-khoe-module-es2015.js.map