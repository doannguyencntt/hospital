(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~ab4e0e57"], {
        /***/ "./node_modules/@iconify/icons-ic/highlight-off.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/highlight-off.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/search.js": 
        /*!**************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/search.js ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.html": 
        /*!**************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.html ***!
          \**************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div fxFlex=\"50%\" style=\"text-transform: uppercase;\">\n        <ng-container *ngIf=\"dataYeuCauTiepNhan.NoiTruBenhAn.Id == 0\">Tạo Bệnh án</ng-container>\n        <ng-container *ngIf=\"dataYeuCauTiepNhan.NoiTruBenhAn.Id !== 0\">Cập nhật bệnh án</ng-container>\n    </div>\n    <div fxFlex=\"50%\" style=\"text-align: right; font-size: 14px;\">\n        Tạm ứng: <b style=\"color: green;\">{{dataYeuCauTiepNhan.SoDuTaiKhoan | number:'0.2-2':'vi-VN'}}</b> - Còn lại: <b style=\"color: red;\">{{dataYeuCauTiepNhan.SoDuTaiKhoanConLai | number:'0.2-2':'vi-VN'}}</b>\n    </div>\n</div>\n<mat-dialog-content style=\"height:305px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <!-- style=\"background: #e1f5fe;\"  -->\n        <fieldset fxFlex=\"100%\" class=\"{{(dataYeuCauTiepNhan != null && dataYeuCauTiepNhan.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n            <legend>Thông tin hành chính</legend>\n            <div fxFlex=\"100%\" class=\"ml-2\">\n                <ul class=\"inline\">\n                    <li>Mã NB:\n                        <strong>{{dataYeuCauTiepNhan.MaBenhNhan}}</strong>\n                    </li>\n                    <li>Mã TN:\n                        <strong>{{dataYeuCauTiepNhan.MaYeuCauTiepNhan}}</strong>\n                    </li>\n                    <li>Họ tên:\n                        <strong>{{dataYeuCauTiepNhan.HoTen}}</strong>\n                    </li>\n                    <li >Tuổi:\n                        <strong *ngIf=\"!isDuoi6Tuoi\">{{dataYeuCauTiepNhan.Tuoi}}</strong>\n                        <strong *ngIf=\"isDuoi6Tuoi\">{{Duoi6TuoiDisplay}}</strong>\n                    </li>\n                    <li>\n                        Giới tính:\n                        <strong>{{dataYeuCauTiepNhan.TenGioiTinh}}</strong>\n                    </li>\n                    <li>\n                        Tuyến: <strong style=\"color: green;\">{{dataYeuCauTiepNhan.Tuyen}}</strong>\n                    </li>\n                    <li>Dân tộc:\n                        <strong>{{dataYeuCauTiepNhan.DanToc}}</strong>\n                    </li>\n                    <li>\n                        Địa chỉ:\n                        <strong>{{dataYeuCauTiepNhan.DiaChiDayDu}}</strong>\n                    </li>\n                    <li>\n                        Nghề nghiệp:\n                        <strong>{{dataYeuCauTiepNhan.NgheNghiep}}</strong>\n                    </li>\n                    <li>\n                        Đối tượng: <strong>{{dataYeuCauTiepNhan.DoiTuong}}</strong>\n                    </li>\n                    <li>\n                        Mức hưởng: <strong style=\"color: blue;\">{{dataYeuCauTiepNhan.BHYTMucHuong == null ? \"\" : dataYeuCauTiepNhan.BHYTMucHuong + \" %\"}}</strong>\n                    </li>\n                    <li *ngIf=\"dataYeuCauTiepNhan.ThongTinNhapVien.TrangThaiDieuTri == 1 || dataYeuCauTiepNhan.ThongTinNhapVien.TrangThaiDieuTri == 2\">\n                        <a style=\"text-decoration: underline; color: blue;\" (click)=\"capNhatDoiTuong()\"><i>Cập nhật đối tượng</i></a>\n                    </li>\n                </ul>\n            </div>\n        </fieldset>\n        <fieldset fxFlex=\"100%\" class=\"mt-2\">\n            <legend>Thông tin nhập viện</legend>\n            <div fxFlex=\"100%\" class=\"ml-2\">\n                <ul class=\"three-col\">\n                    <!-- col 1 -->\n                    <li>Khoa nhập viện:\n                        <strong>{{dataYeuCauTiepNhan.ThongTinNhapVien.KhoaNhapVien}}</strong>\n                    </li>\n                    <li>Chẩn đoán nhập viện:\n                        <strong>{{dataYeuCauTiepNhan.ThongTinNhapVien.ChanDoanNhapVien}}</strong>\n                    </li>\n                    <li>Trạng thái điều trị:\n                        <strong>\n                            <span [ngClass]=\"{'orangeText': dataYeuCauTiepNhan.ThongTinNhapVien.TrangThaiDieuTri == 1,\n                                                'blueText': dataYeuCauTiepNhan.ThongTinNhapVien.TrangThaiDieuTri == 2}\">\n                                                {{dataYeuCauTiepNhan.ThongTinNhapVien.TenTrangThaiDieuTri}}\n                            </span>\n                        </strong>\n                    </li>\n                    \n\n                    <!-- col 2 -->\n                    <li>Nơi chỉ định:\n                        <strong>{{dataYeuCauTiepNhan.ThongTinNhapVien.NoiChiDinh}}</strong>\n                    </li>\n                    <li>Chẩn đoán kèm theo:\n                        <strong>{{dataYeuCauTiepNhan.ThongTinNhapVien.ChanDoanKemTheo}}</strong>\n                    </li>\n                    <li>Người tiếp nhận:\n                        <strong>{{dataYeuCauTiepNhan.ThongTinNhapVien.NguoiTiepNhan}}</strong>\n                    </li>\n                    \n\n                    <!-- col 3 -->\n                    <li>BS chỉ định:\n                        <strong>{{dataYeuCauTiepNhan.ThongTinNhapVien.BacSiChiDinh}}</strong>\n                    </li>\n                    <li>Lý do nhập viện:\n                        <strong>{{dataYeuCauTiepNhan.ThongTinNhapVien.LyDoNhapVien}}</strong>\n                    </li>\n                    <li>Cấp cứu:\n                        <mat-checkbox color=\"primary\"\n                            [(ngModel)]=\"dataYeuCauTiepNhan.NoiTruBenhAn.LaCapCuu\">\n                        </mat-checkbox>\n                    </li>\n                    \n                </ul>\n                <ul class=\"three-col\">\n                    <li>\n                        <div style=\"display: flex;\">\n                            <div *ngIf=\"dataYeuCauTiepNhan.NoiTruBenhAn.Id !== 0\"\n                                style=\"display: flex; align-items: center; margin-right: 10px; min-width: 25%; max-width: 40%;\">Số BA:\n                                <p class=\"greenText\" style=\"word-break: break-all;\"> {{dataYeuCauTiepNhan.NoiTruBenhAn.SoBenhAn}}</p>\n                            </div>\n                            <app-dropdownlist [disabled]=\"IsTreSoSinh\" fxFlex=\"auto\" label=\"Loại BA\" id=\"loaiBenhAnId\" url=\"DieuTriNoiTru/GetListLoaiBenhAn\"\n                                [(model)]=\"dataYeuCauTiepNhan.NoiTruBenhAn.LoaiBenhAn\" style=\"padding-bottom: 0px;\"\n                                [modelText]=\"dataYeuCauTiepNhan.NoiTruBenhAn.TenLoaiBenhAn\" popupSettings=\"null\" [required]=\"true\"\n                                [validationerror]=\"'NoiTruBenhAn.LoaiBenhAn' | validationerror:validationErrors\">\n                            </app-dropdownlist>\n                        </div>\n                    </li>\n                    <li>\n                        <app-datetimepicker label=\"Thời gian tiếp nhận\" [required]=\"true\"\n                            [(model)]=\"dataYeuCauTiepNhan.NoiTruBenhAn.ThoiDiemTaoBenhAn\"\n                            [validationerror]=\"'NoiTruBenhAn.ThoiDiemTaoBenhAn' | validationerror:validationErrors\">\n                        </app-datetimepicker>\n                    </li>\n                    <li>\n                        <app-datetimepicker label=\"Thời gian nhập viện\" [required]=\"true\"\n                            [(model)]=\"dataYeuCauTiepNhan.NoiTruBenhAn.ThoiDiemNhapVien\"\n                            [validationerror]=\"'NoiTruBenhAn.ThoiDiemNhapVien' | validationerror:validationErrors\">\n                        </app-datetimepicker>\n                    </li>\n                </ul>\n            </div>\n        </fieldset>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button mat-raised-button mat-button style=\"background-color: red; color: white\" *ngIf=\"IsShowHuyNhapVien\" (click)=\"xuLyHuyNhapVien()\">Hủy nhập viện</button>\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"true\">Hủy</button>\n    <button mat-raised-button mat-button color=\"primary\" *ngIf=\"dataYeuCauTiepNhan.NoiTruBenhAn.Id == 0\" (click)=\"xuLyThem()\">Lưu & Tạo BA</button>\n    <button mat-raised-button mat-button color=\"primary\" *ngIf=\"dataYeuCauTiepNhan.NoiTruBenhAn.Id !== 0\" (click)=\"xuLyLuu()\">Lưu</button>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.html": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.html ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">\n        Chỉ định bác sĩ & giường\n    </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" (click)=\"close()\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 220px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-combobox fxFlex=\"25%\" label=\"BS điều trị\" id=\"bacSiDieuTriId\" url=\"DieuTriNoiTru/GetListBacSiDieuTri\"\n            popupSettings=\"null\" required=\"{{true}}\"\n            [(model)]=\"chiDinh.BacSiDieuTriId\"\n            [validationerror]=\"'BacSiDieuTriId' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-combobox fxFlex=\"25%\" label=\"Điều dưỡng\" id=\"Điều dưỡng\" url=\"DieuTriNoiTru/GetListDieuDuong\"\n            popupSettings=\"null\" required=\"{{true}}\"\n            [(model)]=\"chiDinh.DieuDuongId\"\n            [validationerror]=\"'DieuDuongId' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-datetimepicker fxFlex=\"25%\" label=\"Từ ngày\" required=\"{{true}}\"\n            [(model)]=\"chiDinh.TuNgay\" [disabled]=\"true\"\n            [validationerror]=\"'TuNgay' | validationerror:validationErrors\">\n        </app-datetimepicker>\n        <div fxFlex=\"25%\">\n            <a class=\"ml-4\" style=\"color:green; text-decoration: underline; font-weight: bold; bottom: 20px;\"\n                (click)=\"xemGoiDichVu()\">\n                Dịch vụ giường trong gói\n            </a>\n        </div>\n\n        <app-combobox fxFlex=\"75%\" label=\"Dịch vụ giường\" id=\"dichVuGiuongId\" url=\"KhamBenh/GetDichVuGiuongBenhVien\"\n            popupSettings=\"null\" [required]=\"!chiDinh.KhongCanChiDinhGiuong\" (modelChange)=\"changeDichVuGiuong($event)\"\n            [(model)]=\"chiDinh.DichVuGiuongId\" [modelText]=\"chiDinh.DichVuGiuongDisplay\" [template]=\"dichVuGiuongTemplate\" [templateHeader]=\"dichVuGiuongTemplateHeader\"\n            (selectionChange)=\"chonDichVuGiuong($event)\" [queryInfo]=\"getDichVuGiuongQueryInfo()\"\n            [validationerror]=\"'DichVuGiuongId' | validationerror:validationErrors\">\n            <ng-template #dichVuGiuongTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th width=\"80%\">Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #dichVuGiuongTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td width=\"80%\">{{dataItem.DichVu}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-checkbox style=\"margin-top: 30px;\" name=\"baoPhong\" fxFlex.lt-md=\"25%\" \n            label=\"Bao Phòng\" value=\"true\" [disabled]=\"isDisabledBaoPhong\"\n            (modelChange)=\"clearGiuongBenh()\"\n            [(model)]=\"chiDinh.BaoPhong\">\n        </app-checkbox>\n        <div fxFlex=\"50%\" fxFlex.sm=\"50%\">\n            <div class=\"container-custom\">\n                <label style=\"display: flex;\">Giường chuyển đến <p style=\"color: red; margin-left: 5px;\">{{chiDinh.KhongCanChiDinhGiuong ? '' : '*'}}</p></label>\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" style=\"padding-bottom: 8px;\"\n                    [style.cursor]=\"chiDinh.DichVuGiuongId != undefined && chiDinh.DichVuGiuongId != null ? '' : 'not-allowed'\">\n                    <a \n                        [style.pointer-events]=\"chiDinh.DichVuGiuongId != undefined && chiDinh.DichVuGiuongId != null ? '' : 'none'\"\n                        style=\"text-decoration: underline; color: blue;\" (click)=\"chonGiuong()\">\n                        <i>\n                            <ng-container *ngIf=\"chiDinh.GiuongId == null\">Chọn</ng-container>\n                            <ng-container *ngIf=\"chiDinh.GiuongId != null\">{{chiDinh.TenGiuong}}</ng-container>\n                        </i>\n                    </a>\n                </div>\n                <app-validationerrorother\n                    [validationerror]=\"'GiuongId' | validationerror:validationErrors\">\n                </app-validationerrorother>\n            </div>\n        </div>\n        <app-combobox fxFlex=\"25%\" label=\"Loại giường\" id=\"loaiGiuong\" url=\"DichVuGiuongBenhVien/GetListLoaiGiuong\"\n            popupSettings=\"null\" [required]=\"!chiDinh.KhongCanChiDinhGiuong\" [disabled]=\"true\"\n            [(model)]=\"chiDinh.LoaiGiuong\" [bind]=\"true\"\n            [validationerror]=\"'LoaiGiuong' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-datetimepicker fxFlex=\"25%\" label=\"Thời gian nhận\" [required]=\"!chiDinh.KhongCanChiDinhGiuong\"\n            [(model)]=\"chiDinh.ThoiGianNhan\" [disabled]=\"true\"\n            [validationerror]=\"'ThoiGianNhan' | validationerror:validationErrors\">\n        </app-datetimepicker>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\">Hủy</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"xuLyLuuChiDinh()\">Lưu</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.html": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.html ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Xác nhận hủy nhận viện</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\">Bạn có chắc chắn muốn hủy yêu nhập viện này không?</div>\n    \n        <app-textarea id=\"lyDo\" [required]=\"true\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"2000\" label=\"Lý do\"\n            minHeight=\"20\"\n            [validationerror]=\"'LyDo' | validationerror:validationErrors\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close(null)\">Không</button>\n    <button mat-button color=\"primary\" (click)=\"XuLyHuyNhapVien()\">Có</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Nội Trú',Path:''},\n                        {Title:'DS Tiếp Nhận Điều Trị Nội Trú',Path:'', Active:true}\n                    ]\">\n                    <!-- {Title:'Danh Sách Tiếp Nhận Điều Trị Nội Trú',Path:'/noi-tru/tiep-nhan', Active:true} -->\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n                <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                    [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"true\" [sort]=\"sort\"\n                    [headerTemplate]=\"headerTemplate\" [searchString]=\"tiepNhanNoiTruTimKiem.SearchString\" [showStt]=\"true\"\n                    urlGetData=\"DieuTriNoiTru/GetDataForGridTiepNhanNoiTru\" urlGetTotalPage=\"DieuTriNoiTru/GetTotalPageForGridTiepNhanNoiTru\">\n                </app-grid>\n\n                <ng-template #headerTemplate>\n                    <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <app-checkbox [(model)]=\"tiepNhanNoiTruTimKiem.TrangThai.ChoQuyetToan\" id=\"choQuyetToan\" label=\"Chờ quyết toán\"\n                            class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                        </app-checkbox>\n                        <app-checkbox [(model)]=\"tiepNhanNoiTruTimKiem.TrangThai.ChuaTaoBenhAn\" \n                            id=\"chuaTaoBenhAn\" label=\"Chưa tạo BA\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\"> \n                        </app-checkbox>\n                        <app-checkbox [(model)]=\"tiepNhanNoiTruTimKiem.TrangThai.DaTaoBenhAn\" \n                            id=\"daTaoBenhAn\" label=\"Đã tạo BA\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                        </app-checkbox>\n\n                        <!-- <app-combobox fxFlex=\"300px\" label=\"Khoa\" id=\"KhoaPhongId\" class=\"mt-6 ml-2 on-header\"\n                            url=\"KhamBenh/GetListKhoaBenhVien\" [(model)]=\"tiepNhanNoiTruTimKiem.KhoaPhongId\" hierarchyKeyToSend=\"KhoaPhongId\"\n                            (modelChange)=\"timKiemNangCao()\" popupSettings=\"null\" [reloadForGrid]=\"true\" [templateHeader]=\"khoaTemplateHeader\"\n                            [template]=\"khoaTemplate\" [broadcastAfterLoaded]=\"true\">\n                            <ng-template #khoaTemplateHeader let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <th width=\"20%\">Mã</th>\n                                        <th>Dịch vụ</th>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                            <ng-template #khoaTemplate let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                                        <td>{{dataItem.Ten}}</td>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                        </app-combobox> -->\n\n                        <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                            [(model)]=\"tiepNhanNoiTruTimKiem.TuNgayDenNgay\" \n                            label=\"Từ ngày - đến ngày\"  (modelChange)=\"timKiemNangCao()\">\n                        </app-daterangepicker>\n        \n                        <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"tiepNhanNoiTruTimKiem.SearchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Tìm kiếm theo Mã NB, Mã TN, Họ tên\" />\n                            <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\"\n                                kendoTooltip title=\"Phím tắt: Ctrl + Q\">\n                                <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                            </button>\n                            <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>\n                        </div>\n                        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                        </button>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of _gridColumnsFilter\">\n                                <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                    <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n\n                        <button class=\"ml-3 mr-6\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\" \n                            (click)=\"xuLyXuatExcel()\">\n                            <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                        </button>\n                    </div>\n                </ng-template>\n        \n                <ng-template #maTNTemplate let-dataItem>\n                    <a (click)=\"xemChiTiet(dataItem)\"><p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTiepNhan}}\">{{dataItem.MaTiepNhan}}</p></a>\n                </ng-template>\n                <ng-template #trangThaiTemplate let-dataItem>\n                    <div style=\"position: relative;\">\n                        <span [ngClass]=\"{'redText': dataItem.TrangThai == 1,\n                                'orangeText': dataItem.TrangThai == 2,\n                                'greenText': dataItem.TrangThai == 3}\">\n                            {{dataItem.TenTrangThai}}\n                        </span>\n                    </div>\n                </ng-template>\n                <ng-template #capCuuTemplate let-dataItem>\n                    <app-checkbox id=\"capCuu{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.CapCuu\" disabled=\"{{true}}\">\n                    </app-checkbox>\n                </ng-template>\n                <ng-template #thoiGianTiepNhanTemplate let-dataItem>\n                    {{dataItem.ThoiGianTiepNhanDisplay}}\n                </ng-template>\n                <ng-template #thoiGianNhapVienTemplate let-dataItem>\n                    {{dataItem.ThoiGianNhapVienDisplay}}\n                </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.html": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.html ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">\n        Sơ đồ giường bệnh tại: {{data.TenKhoa}}\n    </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"\"></mat-icon>\n    </button>\n    <!-- (click)=\"close()\" -->\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-combobox fxFlex=\"25%\" id=\"phongThucHienGB\" label=\"Phòng\" url=\"GiuongBenh/GetListPhong\" class=\"item-no-padding\"\n            [template]=\"phongKhamTemplate\" [templateHeader]=\"phongKhamTemplateHeader\" [(model)]=\"soDoGiuongFillter.PhongBenhVienId\"\n            (modelChange)=\"getSoDoGiuong()\" popupSettings=\"null\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoaPhongId:' +this.data.KhoaId +'}', Take: 50}\">\n            <ng-template #phongKhamTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th width=\"80%\">Tên phòng</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #phongKhamTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td width=\"80%\">{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <div fxFlex=\"35%\" fxFlex.sm=\"35%\">\n            <div class=\"container-custom no-label\">\n                <label>Tình trạng</label>\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                    <app-checkbox fxFlex=\"50%\" style=\"color: green;\" value=\"true\" id=\"giuongTrong\" label=\"Giường trống\"\n                        [(model)]=\"soDoGiuongFillter.GiuongTrong\" (modelChange)=\"getSoDoGiuong()\"></app-checkbox>\n                    <app-checkbox fxFlex=\"50%\" style=\"color: red;\" value=\"true\" id=\"giuongCoBenhNhan\" label=\"Giường đã có NB\"\n                        [(model)]=\"soDoGiuongFillter.GiuongDaCoBenhNhan\" (modelChange)=\"getSoDoGiuong()\"></app-checkbox>\n                </div>\n            </div>\n        </div>\n\n        <div fxFlex=\"100%\">\n            <app-grid #gridSoDoGiuong\n                [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" class=\"k-grid-border\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" height=\"400\" [lazyLoadPage]=\"true\"\n                style=\"width: 1px;\" [pageable]=\"false\" (extOnDataBound)=\"onDataBoundSoDoGiuong($event)\"\n                [additionalSearchString]=\"additionalSearchString\"\n                urlGetData=\"DieuTriNoiTru/GetDataForGridSoDoGiuongTiepNhanNoiTru\" urlGetTotalPage=\"DieuTriNoiTru/GetTotalPageForGridSoDoGiuongTiepNhanNoiTru\">\n            </app-grid>\n        </div>\n\n        <ng-template #baoPhongTemplate let-dataItem>\n            <app-checkbox id=\"baoPhong{{dataItem.Id}}\" label=\"\" [disabled]=\"true\" [(model)]=\"dataItem.BaoPhong\">\n            </app-checkbox>\n            <!-- <input type=\"checkbox\" id=\"baoPhong{{dataItem.Id}}\" [(ngModel)]=\"dataItem.BaoPhong\"> -->\n        </ng-template>\n        <ng-template #giuongTemplate let-dataItem>\n                <ng-container *ngFor=\"let giuong of dataItem.GiuongBenhDisplays\">\n                    <ng-template #giuongInfoTemplate let-dataItem>\n                        <ng-container *ngFor=\"let benhNhan of giuong.BenhNhans, let i = index\">\n                            <!-- <table class=\"table table-border\" width=\"100%\">\n                                <tr>\n                                    <td>DV giường: <b>{{benhNhan.DichVuGiuong}}</b></td>\n                                </tr>\n                                <tr>\n                                    <td>Mã giường: <b>{{benhNhan.MaGiuong}}</b></td>\n                                </tr>\n                                <tr>\n                                    <td>Phòng: <b>{{benhNhan.Phong}}</b></td>\n                                </tr>\n                                <tr>\n                                    <td>Tầng: <b>{{benhNhan.Tang}}</b></td>\n                                </tr>\n                                <tr>\n                                    <td>Số BA: <b>{{benhNhan.SoBenhAn}}</b></td>\n                                </tr>\n                                <tr>\n                                    <td>Người bệnh: <b>{{benhNhan.TenBenhNhan}}</b></td>\n                                </tr>\n                                <tr>\n                                    <td>Ngày vào: <b>{{benhNhan.NgayVao}}</b></td>\n                                </tr>\n                            </table> -->\n                            <ul class=\"tooltip-detail\" width=\"100%\">\n                                <li>\n                                    <label>DV giường: <b>{{benhNhan.DichVuGiuong}}</b></label>\n                                </li>\n                                <li>\n                                    <label>Mã giường: <b>{{benhNhan.MaGiuong}}</b></label>\n                                </li>\n                                <li>\n                                    <label>Phòng: <b>{{benhNhan.Phong}}</b></label>\n                                </li>\n                                <li>\n                                    <label>Tầng: <b>{{benhNhan.Tang}}</b></label>\n                                </li>\n                                <li>\n                                    <label>Số BA: <b>{{benhNhan.SoBenhAn}}</b></label>\n                                </li>\n                                <li>\n                                    <label>Người bệnh: <b>{{benhNhan.TenBenhNhan}}</b></label>\n                                </li>\n                                <li>\n                                    <label>Ngày vào: <b>{{benhNhan.NgayVao}}</b></label>\n                                </li>\n                                <li>\n                                    <label>Ngày ra: <b>{{benhNhan.NgayRa}}</b></label>\n                                </li>\n                                <li>\n                                    <label>Bao phòng: <b>{{benhNhan.CoBaoPhong}}</b></label>\n                                </li>\n                            </ul>\n                            <hr *ngIf=\"i >= 0 && i < giuong.BenhNhans.length\" style=\"border-top: 1px dotted\">\n                        </ng-container>\n                        <ng-container *ngIf=\"giuong.BenhNhans.length == 0\">\n                            Giường trống\n                        </ng-container>\n                    </ng-template>\n\n                    <!-- <button *ngIf=\"giuong.IsEmpty\" type=\"button\" style=\"border-color: #ccc;\" mat-stroked-button [disabled]=\"!dataItem.CoTheBaoPhong && this.data.BaoPhong\"\n                        (click)=\"chonGiuong(dataItem, giuong)\" [ngClass]=\"{'select':this.dataYeuCau.GiuongId==giuong.GiuongId}\"\n                        class=\"mr-1 btn-select\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n                        [tooltipTemplate]=\"giuongInfoTemplate\" filter=\"*\" position=\"right\">{{giuong.TenGiuong + ' | ' +\n                        (giuong.SoLuongBenhNhan | number: '2.0-0')}}</button> -->\n                    <!-- <button *ngIf=\"giuong.IsHalf\" type=\"button\" style=\"border-color: #ccc;\" mat-stroked-button [disabled]=\"!dataItem.CoTheBaoPhong && this.data.BaoPhong\"\n                        (click)=\"chonGiuong(dataItem, giuong)\"\n                        [ngClass]=\"{'select':this.dataYeuCau.GiuongId==giuong.GiuongId, 'orange-button' : this.dataYeuCau.GiuongId!=giuong.GiuongId}\"\n                        class=\"mr-1 btn-select\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n                        [tooltipTemplate]=\"giuongInfoTemplate\" filter=\"*\" position=\"right\">{{giuong.TenGiuong + ' | ' +\n                        (giuong.SoLuongBenhNhan | number: '2.0-0')}}</button> -->\n\n                    <label *ngIf=\"giuong.IsEmpty\" class=\"d-inline-block\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n                        [tooltipTemplate]=\"giuongInfoTemplate\" filter=\"*\" position=\"right\">\n                        <button type=\"button\" style=\"border-color: #ccc;\" mat-stroked-button\n                            [disabled]=\"(!dataItem.CoTheBaoPhong && this.data.BaoPhong) || dataItem.DisabledPhong\" (click)=\"chonGiuong(dataItem, giuong)\"\n                            [ngClass]=\"{'select':this.dataYeuCau.GiuongId==giuong.GiuongId}\" \n                            class=\"mr-1 btn-select\">{{giuong.TenGiuong + ' | ' +\n                            (giuong.SoLuongBenhNhan | number: '2.0-0')}}</button>\n                    </label>\n\n                    <label *ngIf=\"giuong.IsHalf\" class=\"d-inline-block\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n                        [tooltipTemplate]=\"giuongInfoTemplate\" filter=\"*\" position=\"right\">\n                        <button type=\"button\" style=\"border-color: #ccc;\" mat-stroked-button\n                            [disabled]=\"(!dataItem.CoTheBaoPhong && this.data.BaoPhong) || dataItem.DisabledPhong\" (click)=\"chonGiuong(dataItem, giuong)\"\n                            [ngClass]=\"{'select':this.dataYeuCau.GiuongId==giuong.GiuongId, 'orange-button' : this.dataYeuCau.GiuongId!=giuong.GiuongId}\"\n                            class=\"mr-1 btn-select\">{{giuong.TenGiuong + ' | ' +\n                            (giuong.SoLuongBenhNhan | number: '2.0-0')}}</button>\n                    </label>\n                    \n                    <label *ngIf=\"giuong.IsFull\" class=\"d-inline-block\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\"\n                        [tooltipTemplate]=\"giuongInfoTemplate\" filter=\"*\" position=\"right\">\n                        <button type=\"button\" mat-stroked-button (click)=\"chonGiuong(dataItem, giuong)\" [disabled]=\"true\"\n                            [ngClass]=\"{'not-available-select':this.dataYeuCau.GiuongId==giuong.GiuongId}\"\n                            class=\"mr-1 red-button\">{{giuong.TenGiuong + ' | ' + (giuong.SoLuongBenhNhan | number: '2.0-0')}}</button>\n                    </label>\n                </ng-container>\n        </ng-template>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <div style=\"margin-left: auto !important;\">\n        <ng-container *ngIf=\"this.dataYeuCau.TenGiuong != null && this.dataYeuCau.TenGiuong!=''\">\n            <span>Giường đang chọn: \n                Giường <strong style=\"color:green\">{{this.dataYeuCau.TenGiuong}}</strong> \n                - Phòng: <strong style=\"color:green\">{{this.dataYeuCau.TenPhong}}</strong>\n                - Tầng: <strong style=\"color:green\">{{this.dataYeuCau.Tang}}</strong>\n                - Bao Phòng: <strong style=\"color:green\">{{this.data.BaoPhong == true ? 'Có' : 'Không'}}</strong>\n            </span>\n        </ng-container>\n        <ng-container *ngIf=\"this.dataYeuCau.TenGiuong == null || this.dataYeuCau.TenGiuong==''\">\n            Chưa chọn giường\n        </ng-container>\n    </div>\n    <!-- [mat-dialog-close]=\"\" -->\n    <button mat-stroked-button mat-button color=\"primary\" (click)=\"close()\">Hủy</button>\n    <button type=\"button\" color=\"primary\" mat-raised-button mat-button (click)=\"xuLyChonGiuong()\">Xác nhận</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.html": 
        /*!**************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.html ***!
          \**************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">\n        Cập nhật thông tin đối tượng\n    </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" (click)=\"close()\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 650px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <h3 style=\"display: flex;\" fxFlex=\"100%\" class=\"mt-0\">\n            Thông tin bảo hiểm y tế\n            <div style=\"display: flex;font-size: 14px;text-transform: initial; margin-left: 10px\">\n                <app-checkbox class=\"ml-2\" id=\"coBHYT\" label=\"Có\" \n                    [(model)]=\"tiepNhanBenhNhan.CoBHYT\" [disabled]=\"tiepNhanBenhNhan.TuNhap == true\" (modelChange)=\"changeBoxCoTheBHYT($event)\"></app-checkbox>\n                <app-checkbox class=\"ml-2\" id=\"nhapTay\" label=\"Nhập tay\"\n                    [(model)]=\"tiepNhanBenhNhan.TuNhap\" [disabled]=\"tiepNhanBenhNhan.CoBHYT != true\" (modelChange)=\"clearValidationBHYT()\"></app-checkbox>\n            </div>\n            <button *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\" class=\"po-h-tn\" color=\"primary\" kendoTooltip title=\"Thêm thẻ BHYT\"\n                (click)=\"themTheBHYT()\">\n                <mat-icon [icIcon]=\"icAddCircle\"></mat-icon>\n            </button>\n        </h3>\n\n        <ng-container *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\">\n            <!-- <div style=\"position: relative;\" fxFlex=\"20%\" fxFlex.sm=\"20%\" kendoTooltip>\n                <app-textbox id=\"SoTheBHYT\" label=\"Số thẻ BHYT\" [isAutoFocus]=\"true\" [required]=\"true\"\n                    [(model)]=\"tiepNhanBenhNhan.BHYTMaSoThe\" (modelChange)=\"changeThongTinGetBHYT()\"\n                    [maxlength]=\"20\"\n                    [validationerror]=\"'BHYTMaSoThe' | validationerror:validationErrors\">\n                </app-textbox>\n                <button (click)=\"QuetMaQRCodeClick()\" [disabled]=\"tiepNhanBenhNhan.TuNhap\"\n                    style=\"position: absolute;right: 21px;margin-top: 10px;\" color=\"primary\" (keyup)=\"onKeyScanner($event)\" mat-mini-fab\n                    type=\"button\" kendoTooltip title=\"Quét mã vạch thẻ BHYT\" title=\"Phím tắt: Ctrl + Q\">\n                    <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                </button>\n            </div>\n            <app-textbox id=\"BHYTMaDKBD\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mã nơi ĐKBH\" [maxlength]=\"20\" [required]=\"true\"\n                [(model)]=\"tiepNhanBenhNhan.BHYTMaDKBD\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                (blurChange)=\"blurMaNoiDKBD($event)\" (keyup)=\"onKeyMaNoiDKBD($event)\" (modelChange)=\"onChangeMaNoiDKBD($event)\"\n                [validationerror]=\"'BHYTMaDKBD' | validationerror:validationErrors\">\n            </app-textbox>\n            <app-textbox id=\"NoiDangKyBHYT\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nơi ĐKBH\" [required]=\"true\"\n                [(model)]=\"tiepNhanBenhNhan.NoiDangKyBHYT\" [disabled]=\"true\"\n                [validationerror]=\"'NoiDangKyBHYT' | validationerror:validationErrors\">\n            </app-textbox>\n            <app-textboxnumeric id=\"BHYTMucHuong\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mức hưởng (%)\" format=\"0\"\n                [(model)]=\"tiepNhanBenhNhan.BHYTMucHuong\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                [required]=\"true\" min=\"1\" max=\"100\" [validationerror]=\"'BHYTMucHuong' | validationerror:validationErrors\">\n            </app-textboxnumeric>\n            <app-textbox id=\"BHYTDiaChi\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Địa chỉ\" [maxlength]=\"200\"\n                (blurChange)=\"blurDiaChi($event)\" (keyup)=\"onKeyDiaChi($event)\"\n                placeHolder=\"Địa chỉ (Số nhà/đường phố, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố)\" [required]=\"true\"\n                [(model)]=\"tiepNhanBenhNhan.BHYTDiaChi\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                [validationerror]=\"'BHYTDiaChi' | validationerror:validationErrors\">\n            </app-textbox>\n        \n            <app-radio id=\"LyDoVaoVien\" label=\"Tuyến khám\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                [(model)]=\"tiepNhanBenhNhan.LyDoVaoVien\"\n                [items]=\"[{Value:1,Text:'Đúng tuyến'},{Value:3,Text:'Trái tuyến'}]\">\n            </app-radio>\n        \n            <app-datepicker id=\"BHYTNgayHieuLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày có hiệu lực\" [required]=\"true\"\n                [(model)]=\"tiepNhanBenhNhan.BHYTNgayHieuLuc\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                (modelChange)=\"ngayCoHieuLucChange($event)\"\n                [validationerror]=\"'BHYTNgayHieuLuc' | validationerror:validationErrors\">\n            </app-datepicker>\n        \n            <app-datepicker id=\"BHYTNgayHetHan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày hết hiệu lực\" [required]=\"true\"\n                [(model)]=\"tiepNhanBenhNhan.BHYTNgayHetHan\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                [validationerror]=\"'BHYTNgayHetHan' | validationerror:validationErrors\">\n            </app-datepicker>\n        \n            <app-datepicker id=\"BHYTNgayDu5Nam\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày đủ 5 năm\"\n                [(model)]=\"tiepNhanBenhNhan.BHYTNgayDu5Nam\" [disabled]=\"true\">\n            </app-datepicker>\n\n            <ng-container *ngIf=\"tiepNhanBenhNhan.TuNhap != true\">\n                <app-textbox *ngIf=\"IsCheckBHYT == true && this.tiepNhanBenhNhan.BHYTMucHuong != null\"\n                    id=\"messageThanhCong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\" maxlength=\"200\" [disabled]=\"true\"\n                    [(model)]=\"messageThanhCong\" class=\"green\">\n                </app-textbox>\n            \n                <app-textbox *ngIf=\"IsCheckBHYT == false && this.tiepNhanBenhNhan.BHYTMucHuong != null\"\n                    id=\"messageKhongThanhCong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\" maxlength=\"200\"\n                    [disabled]=\"true\" [(model)]=\"messageKhongThanhCong\" class=\"red\">\n                </app-textbox>\n            \n                <app-textbox *ngIf=\"IsCheckBHYT == null && this.tiepNhanBenhNhan.TuNhap == false\" id=\"messageNULL\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                    label=\"Kiểm tra trên BHYT\" maxlength=\"200\" [disabled]=\"true\">\n                </app-textbox>\n            </ng-container> -->\n\n            <ng-container *ngFor=\"let theBHYT of tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs, let index = index\">\n                <div *ngIf=\"index > 0\" fxFlex=\"100%\" style=\"flex:1;display:flex;justify-content: center;\">\n                    <hr width=\"60%\" style=\"border-style: groove;\">\n                </div>\n\n                <div style=\"position: relative;\" fxFlex=\"20%\" fxFlex.sm=\"20%\" kendoTooltip>\n                    <app-textbox id=\"SoTheBHYT{{index}}\" label=\"Số thẻ BHYT\" [required]=\"true\"\n                        [(model)]=\"theBHYT.MaSoThe\" (modelChange)=\"changeSoTheBHYT($event, theBHYT)\"\n                        [maxlength]=\"20\" (blurChange)=\"changeThongTinGetBHYT($event, theBHYT, isLoadingDataBHYT, index)\" (keyup)=\"onKeySoTheBHYT($event, theBHYT,isLoadingDataBHYT, index)\"\n                        [validationerror]=\"'YeuCauTiepNhanTheBHYTs['+index+'].MaSoThe' | validationerror:validationErrors\">\n                    </app-textbox>\n                    <!-- (modelChange)=\"changeThongTinGetBHYT($event, theBHYT)\" -->\n                    <button (click)=\"QuetMaQRCodeClick()\" [disabled]=\"tiepNhanBenhNhan.TuNhap\"\n                        style=\"position: absolute;right: 21px;top: 8px;\" color=\"primary\" (keyup)=\"onKeyScanner($event)\" mat-mini-fab\n                        type=\"button\" kendoTooltip title=\"Quét mã vạch thẻ BHYT\" title=\"Phím tắt: Ctrl + Q\">\n                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                    </button>\n                </div>\n                <app-textbox id=\"BHYTMaDKBD{{index}}\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mã nơi ĐKBH\" [maxlength]=\"20\" [required]=\"true\"\n                    [(model)]=\"theBHYT.MaDKBD\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                    (blurChange)=\"blurMaNoiDKBD(theBHYT)\" (keyup)=\"onKeyMaNoiDKBD($event, theBHYT)\" (modelChange)=\"onChangeMaNoiDKBD($event, theBHYT)\"\n                    [validationerror]=\"'YeuCauTiepNhanTheBHYTs['+index+'].MaDKBD' | validationerror:validationErrors\">\n                </app-textbox>\n                <app-textbox id=\"NoiDangKyBHYT{{index}}\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nơi ĐKBH\"\n                    [(model)]=\"theBHYT.NoiDangKyBHYT\" [disabled]=\"true\">\n                </app-textbox>\n                <app-textboxnumeric id=\"BHYTMucHuong{{index}}\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mức hưởng (%)\" format=\"0\"\n                    [(model)]=\"theBHYT.MucHuong\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                    [required]=\"true\" min=\"1\" max=\"100\" \n                    [validationerror]=\"'YeuCauTiepNhanTheBHYTs['+index+'].MucHuong' | validationerror:validationErrors\">\n                </app-textboxnumeric>\n                <app-textbox id=\"BHYTDiaChi{{index}}\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Địa chỉ\" [maxlength]=\"200\"\n                    (blurChange)=\"blurDiaChi(theBHYT.DiaChi)\" (keyup)=\"onKeyDiaChi($event, theBHYT.DiaChi)\"\n                    placeHolder=\"Địa chỉ (Số nhà/đường phố, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố)\" [required]=\"true\"\n                    [(model)]=\"theBHYT.DiaChi\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                    [validationerror]=\"'YeuCauTiepNhanTheBHYTs['+index+'].DiaChi' | validationerror:validationErrors\">\n                </app-textbox>\n                <!-- <app-radio id=\"LyDoVaoVien\" label=\"Tuyến khám\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                    [(model)]=\"tiepNhanBenhNhan.LyDoVaoVien\"\n                    [items]=\"[{Value:1,Text:'Đúng tuyến'},{Value:3,Text:'Trái tuyến'}]\">\n                </app-radio> -->\n                <app-datepicker id=\"BHYTNgayHieuLuc{{index}}\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày có hiệu lực\" [required]=\"true\"\n                    [(model)]=\"theBHYT.NgayHieuLuc\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                    (modelChange)=\"ngayCoHieuLucChange($event, theBHYT)\"\n                    [validationerror]=\"'YeuCauTiepNhanTheBHYTs['+index+'].NgayHieuLuc' | validationerror:validationErrors\">\n                </app-datepicker>\n            \n                <app-datepicker id=\"BHYTNgayHetHan{{index}}\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày hết hiệu lực\" [required]=\"true\"\n                    [(model)]=\"theBHYT.NgayHetHan\" [disabled]=\"tiepNhanBenhNhan.TuNhap != true\"\n                    (modelChange)=\"changeNgayHetHan($event, theBHYT)\"  [class]=\"theBHYT.IsQuaHanTheBHYT ? 'warning-value' : ''\"\n                    [validationerror]=\"'YeuCauTiepNhanTheBHYTs['+index+'].NgayHetHan' | validationerror:validationErrors\">\n                </app-datepicker>\n            \n                <app-datepicker id=\"BHYTNgayDu5Nam{{index}}\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày đủ 5 năm\"\n                    [(model)]=\"theBHYT.NgayDu5Nam\" [disabled]=\"true\">\n                </app-datepicker>\n    \n                <ng-container *ngIf=\"tiepNhanBenhNhan.TuNhap != true\">\n                    <app-textbox *ngIf=\"theBHYT.IsCheckedBHYT == true && theBHYT.MucHuong != null\"\n                        id=\"messageThanhCong{{index}}\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\" maxlength=\"200\" [disabled]=\"true\"\n                        [(model)]=\"messageThanhCong\" class=\"green\">\n                    </app-textbox>\n                \n                    <app-textbox *ngIf=\"theBHYT.IsCheckedBHYT == false && theBHYT.MucHuong != null\"\n                        id=\"messageKhongThanhCong{{index}}\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Kiểm tra trên BHYT\" maxlength=\"200\"\n                        [disabled]=\"true\" [(model)]=\"messageKhongThanhCong\" class=\"red\">\n                    </app-textbox>\n                \n                    <app-textbox *ngIf=\"theBHYT.IsCheckedBHYT == null && this.tiepNhanBenhNhan.TuNhap == false\" id=\"messageNULL{{index}}\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                        label=\"Kiểm tra trên BHYT\" maxlength=\"200\" [disabled]=\"true\">\n                    </app-textbox>\n                </ng-container>\n\n                <app-datepicker id=\"NgayBatDauMienDongChiTra{{index}}\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày bắt đầu miễn đồng chi trả\"\n                    [(model)]=\"theBHYT.NgayDuocMienCungChiTra\">\n                </app-datepicker>\n                <app-upload id=\"upload{{index}}\" #fileMienDongChiTra [allowedExtensions]=\"allowedExtensions\" fxFlex=\"40%\" fxFlex.sm=\"40%\"\n                    label=\"Giấy miễn đồng chi trả đính kèm\" [template]=\"templateFile\" [(model)]=\"files[index]\"\n                    (uploadFileDone)=\"uploadFileDone($event, theBHYT)\">\n                </app-upload>\n                <ng-template #templateFile let-files>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td>\n                                <a *ngIf=\"files[0].error\" title=\"{{'Tải file bị lỗi: '+files[0].error}}\"\n                                    (click)=\"fileMienDongChiTra.viewFile(files[0])\"\n                                    class=\"custom-name red\">{{files[0].name}}</a>\n                                <a *ngIf=\"!files[0].error\" title=\"{{files[0].name}}\"\n                                    (click)=\"fileMienDongChiTra.viewFile(files[0])\" class=\"green\"\n                                    class=\"custom-name green\">{{files[0].name}}</a>\n                            </td>\n                            <td style=\"width:25px\">\n                                <a type=\"button\" (click)=\"fileMienDongChiTra.remove(files[0].uid)\" mat-icon-button>\n                                    <mat-icon [icIcon]=\"icClear\"></mat-icon>\n                                </a>\n                            </td>\n                        </tr>\n                    </table>\n                </ng-template>\n\n                <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                    <div class=\"container-custom no-label\">\n                        <label>&nbsp;</label>\n                        <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                            <app-checkbox fxFlex=\"100%\" id=\"giaHanTheBHYT{{index}}\" label=\"Gia hạn thẻ\" \n                                [disabled]=\"theBHYT.DisableGiaHanThe == true || theBHYT.DisabledGiaHanView\"\n                                [(model)]=\"theBHYT.DuocGiaHanThe\"></app-checkbox>\n                        </div>\n                    </div>\n                </div>\n\n                <button *ngIf=\"index > 0\" class=\"po-h-tn\" style=\"color: red;\" kendoTooltip title=\"Xóa thẻ BHYT\"\n                    (click)=\"xoaTheBHYT(theBHYT)\">\n                    <mat-icon [icIcon]=\"icHighlightOff\"></mat-icon>\n                </button>\n            </ng-container>\n        </ng-container>\n\n        <h3 fxFlex=\"100%\" class=\"mt-0\">Thông tin hành chính</h3>\n        <app-textbox class=\"text-transform-uppercase\" #HoVaTenTextbox id=\"HoTen\" fxFlex=\"20%\"\n            fxFlex.sm=\"20%\" label=\"Họ và tên\" maxlength=\"100\" [required]=\"true\" [isAutoFocus]=\"true\"\n            [(model)]=\"tiepNhanBenhNhan.HoTen\"  [upperCase]=\"true\"\n            [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n        </app-textbox>\n        <!-- (modelChange)=\"changeThongTinGetBHYT()\" -->\n        <app-datepicker id=\"NgaySinh\"\n            fxFlex=\"13%\" fxFlex.sm=\"13%\" label=\"Ngày sinh\" [required]=\"true\"\n            [(model)]=\"tiepNhanBenhNhan.NgayThangNamSinh\"\n            (modelChange)=\"ThongTinBenhNhanNgaySinhChange($event)\"\n            [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n        </app-datepicker>\n        <!-- (blur)=\"getThongTinTheBHYT()\"  -->\n        <app-textboxnumeric id=\"Numerictextbox\" fxFlex=\"7%\" fxFlex.sm=\"7%\" \n            label=\"Năm sinh\" format=\"0\" min=\"1\" max=\"9999\"\n            [(model)]=\"tiepNhanBenhNhan.NamSinh\" [disabled]=\"tiepNhanBenhNhan.NgayThangNamSinh != null\"\n           >\n        </app-textboxnumeric>\n        <!-- (modelChange)=\"changeThongTinGetBHYT()\" -->\n        <app-textbox *ngIf=\"under6yearsold\" id=\"SoTuoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số tuổi\" [disabled]=\"true\"\n            [(model)]=\"soTuoiDisplay\">\n        </app-textbox>\n        <app-textboxmask id=\"SoDienThoai\" onlynumber=\"true\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số điện thoại\"\n            maxlength=\"10\" [(model)]=\"tiepNhanBenhNhan.SoDienThoai\" mask=\"000 000 0000\">\n        </app-textboxmask>\n        <app-dropdownlist id=\"gioiTinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Giới tính\" \n            url=\"TiepNhanBenhNhan/GetGioiTinh\" [(model)]=\"tiepNhanBenhNhan.GioiTinh\" bind=\"true\" bind=\"true\">\n        </app-dropdownlist>\n        <app-combobox id=\"NgheNghiep\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề Nghiệp\" bind=\"true\" \n            url=\"TiepNhanBenhNhan/GetNgheNghiep\" popupSettings=\"null\" [(model)]=\"tiepNhanBenhNhan.NgheNghiepId\">\n        </app-combobox>\n\n        <app-combobox id=\"GetQuocTich\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quốc tịch\" bind=\"true\" popupSettings=\"null\"\n            url=\"TiepNhanBenhNhan/GetQuocTich\" [(model)]=\"tiepNhanBenhNhan.QuocTichId\">\n        </app-combobox>\n        <app-combobox id=\"TinhThanhPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" bind=\"true\" popupSettings=\"null\"\n            label=\"Tỉnh/Thành Phố\" class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n            [templateHeader]=\"tinhThanhTemplateHeader\" [(model)]=\"tiepNhanBenhNhan.TinhThanhId\"\n            url=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{tiepNhanBenhNhan.QuanHuyenId}}\" hierarchyKeyToSend=\"tinhThanh\"\n            (modelChange)=\"TinhThanhPhoChange($event)\" (selectionChange)=\"cloneDiaChiNguoiGiamHo(true)\">\n            <ng-template #tinhThanhTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #tinhThanhTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-combobox #comboboxQuanHuyen id=\"QuanHuyen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quận/Huyện\" bind=\"true\" popupSettings=\"null\"\n            class=\"item-no-padding\" [template]=\"quanHuyenTemplate\" [templateHeader]=\"quanHuyenTemplateHeader\"\n            [(model)]=\"tiepNhanBenhNhan.QuanHuyenId\" (modelChange)=\"QuanHuyenChange($event)\" (selectionChange)=\"cloneDiaChiNguoiGiamHo(true)\"\n            url=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{tiepNhanBenhNhan.PhuongXaId}}\"\n            hierarchyKeyToListen=\"tinhThanh\"  hierarchyKeyToSend=\"quanHuyen\">\n            <ng-template #quanHuyenTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #quanHuyenTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-combobox id=\"PhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Phường/Xã\" class=\"item-no-padding\" popupSettings=\"null\"\n            #comboboxPhuongXa url=\"TiepNhanBenhNhan/GetPhuongXa\" hierarchyKeyToListen=\"quanHuyen\" (selectionChange)=\"cloneDiaChiNguoiGiamHo(true)\"\n            [template]=\"phuongXaTemplate\" [templateHeader]=\"phuongXaTemplateHeader\"\n            [(model)]=\"tiepNhanBenhNhan.PhuongXaId\"\n            (modelChange)=\"PhuongXaChange($event)\">\n            <ng-template #phuongXaTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #phuongXaTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-textbox class=\"text-transform-capitalize\" id=\"SoNhaDuongPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\"\n            label=\"Số nhà/Đường phố\" [(model)]=\"tiepNhanBenhNhan.DiaChi\">\n        </app-textbox>\n\n        <app-textbox id=\"soCMND\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số CMND\" maxlength=\"12\" digitOnly\n            [(model)]=\"tiepNhanBenhNhan.SoChungMinhThu\">\n        </app-textbox>\n        <app-textbox id=\"Email\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" maxlength=\"200\"\n            [(model)]=\"tiepNhanBenhNhan.Email\"\n            [validationerror]=\"'Email' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-textbox id=\"NoiLamViec\" fxFlex=\"40%\" fxFlex.sm=\"40%\" maxlength=\"300\" label=\"Nơi làm việc\"\n            [(model)]=\"tiepNhanBenhNhan.NoiLamViec\">\n        </app-textbox>\n\n        <app-combobox bind=\"true\" id=\"DanToc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Dân tộc\" url=\"DieuTriNoiTru/GetDanToc\"\n            [reloadForGrid]=\"true\"\n            [(model)]=\"tiepNhanBenhNhan.DanTocId\">\n        </app-combobox>\n\n        <ng-container *ngIf=\"isBenhAnNhiKhoa\">\n            <app-textbox id=\"HoTenBo\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"100\" label=\"Họ tên bố\"\n                [(model)]=\"tiepNhanBenhNhan.HoTenBo\">\n            </app-textbox>\n            <app-textbox id=\"trinhDoHocVanCuaBo\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"150\" label=\"Trình độ VH của bố\"\n                [(model)]=\"tiepNhanBenhNhan.TrinhDoVanHoaCuaBo\">\n            </app-textbox>\n            <app-combobox id=\"ngheNghiepCuaBo\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề Nghiệp của bố\" bind=\"true\"\n                url=\"TiepNhanBenhNhan/GetNgheNghiep\" popupSettings=\"null\" [(model)]=\"tiepNhanBenhNhan.NgheNghiepCuaBoId\">\n            </app-combobox>\n        \n            <app-textbox id=\"HoTenMe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"100\" label=\"Họ tên mẹ\"\n                [(model)]=\"tiepNhanBenhNhan.HoTenMe\">\n            </app-textbox>\n            <app-textbox id=\"trinhDoHocVanCuaMe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"150\" label=\"Trình độ VH của mẹ\"\n                [(model)]=\"tiepNhanBenhNhan.TrinhDoVanHoaCuaMe\">\n            </app-textbox>\n            <app-combobox id=\"ngheNghiepCuaMe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề Nghiệp của mẹ\" bind=\"true\"\n                url=\"TiepNhanBenhNhan/GetNgheNghiep\" popupSettings=\"null\" [(model)]=\"tiepNhanBenhNhan.NgheNghiepCuaMeId\">\n            </app-combobox>\n        </ng-container>\n        <ng-container *ngIf=\"isBenhAnNhiKhoa || isBenhAnSoSinh\">\n            <app-combobox fxFlex=\"20%\" label=\"Gói dịch vụ\" id=\"yeuCauGoiDichVuId\" url=\"DieuTriNoiTru/GetYeuCauGoiDichVuSoSinhCuaMe\"\n                popupSettings=\"null\" [reloadForGrid]=\"true\" [(model)]=\"tiepNhanBenhNhan.YeuCauGoiDichVuId\"\n                [queryInfo]=\"{ParameterDependencies:'{YeuCauTiepNhanMeId:' + tiepNhanBenhNhan.YeuCauTiepNhanMeId +'}', Take: 50}\"\n                [validationerror]=\"'YeuCauGoiDichVuId' | validationerror:validationErrors\">\n            </app-combobox>\n        </ng-container>\n\n        <h3 style=\"display: flex;\" fxFlex=\"100%\" class=\"mt-0\">Thông Tin Bảo Hiểm Tư Nhân\n            <div style=\"display: flex;font-size: 14px;text-transform: initial; margin-left: 10px\">\n                <app-checkbox id=\"CheckboxIsHaveBHTN\" [(model)]=\"tiepNhanBenhNhan.CoBHTN\" label=\"Có\" (modelChange)=\"changeCoBaoHiemTuNhan($event)\">\n                </app-checkbox>\n            </div>\n        </h3>\n        <ng-container *ngIf=\"tiepNhanBenhNhan.CoBHTN == true\">\n            <app-combobox id=\"CongTyBaoHiemTuNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                [(model)]=\"themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId\" label=\"Công ty\"\n                url=\"DieuTriNoiTru/GetCongTyBaoHiemTuNhan\" bind=\"true\" (selectionChange)=\"congTyBaoHiemChange($event)\"\n                required=\"true\" [required]=\"true\"\n                [validationerror]=\"'CongTyBaoHiemTuNhanId' | validationerror:validationCongTyBHTNErrors\">\n            </app-combobox>\n        \n            <app-textbox id=\"MaSoThe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số thẻ\" [(model)]=\"themBaoHiemTuNhanModel.MaSoThe\"\n                maxlength=\"30\">\n            </app-textbox>\n        \n            <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Từ ngày\"\n                [(model)]=\"themBaoHiemTuNhanModel.NgayHieuLuc\">\n            </app-datepicker>\n        \n            <app-datepicker id=\"NgayHetHan\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Đến ngày\"\n                [(model)]=\"themBaoHiemTuNhanModel.NgayHetHan\"\n                [validationerror]=\"'NgayHetHan' | validationerror:validationCongTyBHTNErrors\">\n            </app-datepicker>\n        \n            <app-textboxmask id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Điện thoại\" readonly=\"true\" maxlength=\"100\"\n                [(model)]=\"themBaoHiemTuNhanModel.SoDienThoai\">\n            </app-textboxmask>\n        \n            <app-textbox id=\"DiaChi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Địa chỉ\" readonly=\"true\" maxlength=\"200\"\n                [(model)]=\"themBaoHiemTuNhanModel.DiaChi\">\n            </app-textbox>\n        \n            <div style=\"margin-bottom: 20px;\" fxLayoutAlign=\"end right\" fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"mr-4\">\n                <button (click)=\"huyBHTN()\" mat-button class=\"mr-1 px-6 py-0\"><i class=\"ft-arrow-left \"></i>Hủy</button>\n                <button *ngIf=\"isUpdateGrid == false\" (click)=\"ThemBHTN()\" color=\"primary\" mat-raised-button\n                    class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Thêm</button>\n                <button *ngIf=\"isUpdateGrid == true\" (click)=\"LuuBHTN()\" color=\"primary\" mat-raised-button\n                    class=\"mr-1 px-6 py-o\"><i class=\"ft-save\"></i>Cập\n                    nhật</button>\n            </div>\n        \n            <app-grid fxFlex=\"100%\" [gridDataSource]=\"gridDataSourceBHTN\" [gridColumns]=\"gridCongTyBHTNColumns\" #gridBHTN\n                [documentType]=\"documentType\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                [checkboxAble]=\"false\" pageSize=\"5\" [autoHeight]=\"true\" [pageable]=\"false\" [showStt]=\"true\">\n            </app-grid>\n        \n        </ng-container>\n        <ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button (click)=\"SuaBHTN(dataItem, rowIndex)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                        <span>Sửa</span>\n                    </button>\n                    <button (click)=\"xoaCongTyBHTN(dataItem)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                        <span>Xóa</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n\n        <h3 fxFlex=\"100%\" class=\"mt-0\">Thông tin người giám hộ/đi cùng</h3>\n        <app-textbox id=\"hoTenNguoiGiamHo\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Họ và tên\" maxlength=\"100\"\n            [(model)]=\"tiepNhanBenhNhan.NguoiLienHeHoTen\"  [upperCase]=\"true\"\n            [validationerror]=\"'NguoiLienHeHoTen' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-combobox fxFlex=\"25%\" label=\"Quan hệ\" id=\"quanHe\" url=\"TiepNhanBenhNhan/GetQuanHe\"\n            popupSettings=\"null\" bind=\"true\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHeNhanThanId\"\n            [validationerror]=\"'NguoiLienHeQuanHeNhanThanId' | validationerror:validationErrors\">\n        </app-combobox>\n        <app-textboxmask id=\"NguoiLienHeSoDienThoai\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Điện thoại\" maxlength=\"10\"\n            [(model)]=\"tiepNhanBenhNhan.NguoiLienHeSoDienThoai\" mask=\"000 000 0000\"\n            [validationerror]=\"'NguoiLienHeSoDienThoai' | validationerror:validationErrors\">\n        </app-textboxmask>\n        <app-textbox id=\"EmailNguoiGiamHo\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Email\"\n            maxlength=\"200\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHeEmail\"\n            [validationerror]=\"'NguoiLienHeEmail' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-combobox id=\"TinhThanhPhoNguoiLienHe\" fxFlex=\"25%\" fxFlex.sm=\"25%\" popupSettings=\"null\" bind=\"true\"\n            label=\"Tỉnh/Thành Phố\" class=\"item-no-padding\" [template]=\"tinhThanhTemplate\" [templateHeader]=\"tinhThanhTemplateHeader\"\n            [(model)]=\"tiepNhanBenhNhan.NguoiLienHeTinhThanhId\" \n            url=\"TiepNhanBenhNhan/GetTinhThanh?quanHuyenId={{tiepNhanBenhNhan.NguoiLienHeQuanHuyenId}}\" hierarchyKeyToSend=\"tinhThanhLienHe\"\n            (modelChange)=\"TinhThanhPhoNguoiLienHeChange($event)\">\n            <ng-template #tinhThanhTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #tinhThanhTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-combobox #cboQuanHuyenNguoiLienHe  id=\"QuanHuyenNguoiLienHe\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Quận/Huyện\" popupSettings=\"null\" bind=\"true\"\n            class=\"item-no-padding\" [template]=\"quanHuyenTemplate\" [templateHeader]=\"quanHuyenTemplateHeader\"\n            [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHuyenId\"\n            (modelChange)=\"QuanHuyenNguoiLienHeChange($event)\"\n            url=\"TiepNhanBenhNhan/GetQuanHuyen?phuongXaId={{tiepNhanBenhNhan.NguoiLienHePhuongXaId}}\" [queryInfo]=\"{ParameterDependencies:'{tinhThanhLienHe:' + this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId +'}', Take: 50}\"\n            hierarchyKeyToListen=\"tinhThanhLienHe\" hierarchyKeyToSend=\"quanHuyenLienHe\">\n            <ng-template #quanHuyenTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #quanHuyenTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        \n        <app-combobox id=\"PhuongXaNguoiLienHe\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Phường/Xã\" class=\"item-no-padding\"\n            [template]=\"phuongXaTemplate\" [templateHeader]=\"phuongXaTemplateHeader\" popupSettings=\"null\"\n            [(model)]=\"tiepNhanBenhNhan.NguoiLienHePhuongXaId\"  url=\"TiepNhanBenhNhan/GetPhuongXa\"\n            hierarchyKeyToListen=\"quanHuyenLienHe\" (modelChange)=\"PhuongXaNguoiLienHeChange($event)\"\n            [queryInfo]=\"{ParameterDependencies:'{quanHuyenLienHe:' + this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId +'}', Take: 50}\">\n            <ng-template #phuongXaTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #phuongXaTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.Ten}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-textbox class=\"text-transform-capitalize\" id=\"SoNhaDuongPhoNguoiGiamHo\" fxFlex=\"25%\" fxFlex.sm=\"25%\" maxlength=\"200\"\n            label=\"Số nhà/Đường phố\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHeDiaChi\">\n        </app-textbox>\n\n        <h3 fxFlex=\"100%\" class=\"mt-0\">Thông Tin SARS-CoV</h3>\n        <app-textarea fxFlex=\"45%\" id=\"BieuHienLamSang\" [(model)]=\"tiepNhanBenhNhan.BieuHienLamSang\" label=\"Biểu hiện lâm sàng\"\n            minHeight=\"20\" style=\"margin-right: 5px;\">\n        </app-textarea>\n        <app-textarea id=\"DichTeSarsCoV2\" [(model)]=\"tiepNhanBenhNhan.DichTeSarsCoV2\" fxFlex=\"45%\" label=\"Dịch tễ SARS-CoV 2\"\n            minHeight=\"20\">\n        </app-textarea>\n\n        <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n            <button type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1\" [mat-dialog-close]=\"null\">Hủy</button>\n            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" (click)=\"xuLyCapNhatThongTin()\">Lưu</button>\n        </div>\n\n        <h3 fxFlex=\"100%\" class=\"mt-0\">Lịch sử chuyển đối tượng</h3>\n        <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [allowSortDefault]=\"false\" [autoHeight]=\"true\" [pageable]=\"true\" [showStt]=\"true\" [pageSize]=\"10\"\n            [additionalSearchString]=\"tiepNhanBenhNhan.Id\"\n            urlGetData=\"DieuTriNoiTru/GetDataLichSuChuyenDoiTuongForGrid\" urlGetTotalPage=\"DieuTriNoiTru/GetTotalPageLichSuChuyenDoiTuongForGrid\">\n        </app-grid>\n\n        <ng-template #tuNgayTemplate let-dataItem>\n            {{dataItem.TuNgayDisplay}}\n        </ng-template>\n        <ng-template #denNgayTemplate let-dataItem>\n            {{dataItem.DenNgayDisplay}}\n        </ng-template>\n        <ng-template #ngayNhapTemplate let-dataItem>\n            {{dataItem.NgayNhapDisplay}}\n        </ng-template>\n        <ng-template #thoiGianMienDongChiTraTemplate let-dataItem>\n            {{dataItem.ThoiGianMienDongChiTraDisplay}}\n        </ng-template>\n        <ng-template #giaHanTheTemplate let-dataItem>\n            <app-checkbox *ngIf=\"dataItem.SoTheBaoHiem != null && dataItem.SoTheBaoHiem !=''\" \n                id=\"giaHanThe{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.GiaHanThe\" disabled=\"{{true}}\">\n            </app-checkbox>\n        </ng-template>\n        <ng-template #trangThaiTemplate let-dataItem>\n            <div style=\"position: relative;\">\n                <span [ngClass]=\"{'redText': dataItem.DaHuy == true,\n                        'greenText': dataItem.DaHuy != true}\">\n                    {{dataItem.TinhTrang}}\n                </span>\n            </div>\n        </ng-template>\n        <ng-template #ngayHieuLucTemplate let-dataItem>\n            {{dataItem.NgayHieuLuc | date:'dd/MM/yyy'}}\n        </ng-template>\n        <ng-template #ngayDenHanTemplate let-dataItem>\n            {{dataItem.NgayHetHan | date:'dd/MM/yyy'}}\n        </ng-template>\n    </div>\n</mat-dialog-content>\n<!-- <mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\">Hủy</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"xuLyCapNhatThongTin()\">Lưu</button>\n</mat-dialog-actions> -->");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.scss": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.scss ***!
          \************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n  white-space: break-spaces;\n}\n\nfieldset legend {\n  margin-left: 15px;\n  text-transform: uppercase;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\nfieldset ul.inline > li:last-child {\n  margin-right: -20px;\n  float: right;\n}\n\nfieldset ul.three-col {\n  -moz-column-count: 3;\n  column-count: 3;\n}\n\nfieldset ul.three-col li {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.greenText {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvdGllcC1uaGFuLW5vaS10cnUvdGllcC1uaGFuLW5vaS10cnUtYmVuaC1hbi1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGRpZXUtdHJpLW5vaS10cnVcXHRpZXAtbmhhbi1ub2ktdHJ1XFx0aWVwLW5oYW4tbm9pLXRydS1iZW5oLWFuLXBvcHVwXFx0aWVwLW5oYW4tbm9pLXRydS1iZW5oLWFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vZGlldS10cmktbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS1iZW5oLWFuLXBvcHVwL3RpZXAtbmhhbi1ub2ktdHJ1LWJlbmgtYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFFRSxvQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1LWJlbmgtYW4tcG9wdXAvdGllcC1uaGFuLW5vaS10cnUtYmVuaC1hbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsLnRocmVlLWNvbCB7XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xuICAtbW96LWNvbHVtbi1jb3VudDogMztcbiAgY29sdW1uLWNvdW50OiAzO1xufVxuXG5maWVsZHNldCB1bC50aHJlZS1jb2wgbGkge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsLnRocmVlLWNvbCB7XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xuICAtbW96LWNvbHVtbi1jb3VudDogMztcbiAgY29sdW1uLWNvdW50OiAzO1xufVxuXG5maWVsZHNldCB1bC50aHJlZS1jb2wgbGkge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.ts": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.ts ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: TiepNhanNoiTruBenhAnPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruBenhAnPopupComponent", function () { return TiepNhanNoiTruBenhAnPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_dieu_tri_noi_tru_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/dieu-tri-noi-tru.enum */ "./src/app/shared/enum/dieu-tri-noi-tru.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_chi_dinh_popup_tiep_nhan_noi_tru_chi_dinh_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_huy_nhap_vien_popup_tiep_nhan_noi_tru_huy_nhap_vien_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../tiep-nhan-noi-tru.model */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts");
            var TiepNhanNoiTruBenhAnPopupComponent = /** @class */ (function () {
                function TiepNhanNoiTruBenhAnPopupComponent(authService, dialog, notificationService, apiService, data, dialogRef) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.tenBenhNhan = "";
                    this.validationErrors = [];
                    this.dataYeuCauTiepNhan = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_17__["ThongTinYeuCauTiepNoiTru"]();
                    this.isDuoi6Tuoi = false;
                    this.Duoi6TuoiDisplay = "";
                    this.IsTreSoSinh = false;
                    this.IsShowHuyNhapVien = false;
                }
                TiepNhanNoiTruBenhAnPopupComponent.prototype.ngOnInit = function () {
                    this.id = this.data.Id;
                    this.tenBenhNhan = this.data.TenBenhNhan;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].TiepNhanNoiTru;
                    if (this.id != undefined && this.id != null) {
                        this.getThongTinBenhAn(this.id);
                    }
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.showPopupLoadingData = function () {
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
                TiepNhanNoiTruBenhAnPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.getThongTinBenhAn = function (yeuCauTiepNhanId) {
                    var _this = this;
                    this.showPopupLoadingData();
                    this.apiService
                        .get("DieuTriNoiTru/GetThongTinBenhAn?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
                        .subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.dataYeuCauTiepNhan = resultData;
                            if (_this.dataYeuCauTiepNhan.NoiTruBenhAn.Id == 0) {
                                _this.IsShowHuyNhapVien = true;
                            }
                            if (_this.dataYeuCauTiepNhan.NoiTruBenhAn.LoaiBenhAn == src_app_shared_enum_dieu_tri_noi_tru_enum__WEBPACK_IMPORTED_MODULE_11__["LoaiBenhAn"].TreSoSinh) {
                                _this.IsTreSoSinh = true;
                            }
                            var ngaySinh = new Date(_this.dataYeuCauTiepNhan.ThangSinh +
                                "/" +
                                _this.dataYeuCauTiepNhan.NgaySinh +
                                "/" +
                                _this.dataYeuCauTiepNhan.NamSinh +
                                "/");
                            _this.getAge(ngaySinh, new Date());
                            _this.closePopupLoadingData();
                        }
                        else {
                            _this.dataYeuCauTiepNhan = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_17__["ThongTinYeuCauTiepNoiTru"]();
                            _this.closePopupLoadingData();
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.getAge = function (date_1, date_2) {
                    var yAppendix, mAppendix, dAppendix;
                    var days = date_2.getDate() - date_1.getDate(); //Thach edit
                    if (days < 0) {
                        date_2.setMonth(date_2.getMonth() - 1);
                        days += this.DaysInMonth(date_2);
                    }
                    var months = date_2.getMonth() - date_1.getMonth();
                    if (months < 0) {
                        date_2.setFullYear(date_2.getFullYear() - 1);
                        months += 12;
                    }
                    var years = date_2.getFullYear() - date_1.getFullYear();
                    if (years > 1)
                        yAppendix = " years";
                    else
                        yAppendix = " year";
                    if (months > 1)
                        mAppendix = " months";
                    else
                        mAppendix = " month";
                    if (days > 1)
                        dAppendix = " days";
                    else
                        dAppendix = " day";
                    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
                        this.isDuoi6Tuoi = true;
                    }
                    else {
                        this.isDuoi6Tuoi = false;
                    }
                    this.Duoi6TuoiDisplay =
                        years + " Tuổi " + months + " Tháng " + days + " Ngày ";
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.DaysInMonth = function (date2_UTC) {
                    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
                    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
                    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
                    return monthLength;
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.xuLyThem = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format("Bạn có chắc chắn muốn tạo bệnh án cho người bệnh {0} không?", [this.tenBenhNhan])
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.validationErrors = [];
                                _this.apiService.post("DieuTriNoiTru/XuLyTaoBenhAn", _this.dataYeuCauTiepNhan)
                                    .subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Tạo bệnh án"]));
                                    _this.xuLyChiDinhEkipVaDichVuGiuong();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.xuLyLuu = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].MessConfirm, ["chỉnh sửa"]) }
                        }).afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.validationErrors = [];
                                _this.apiService.put("DieuTriNoiTru/XuLyCapNhatBenhAn", _this.dataYeuCauTiepNhan)
                                    .subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].ActionSuccessfully, ["Chỉnh sửa"]));
                                    _this.close(true);
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.capNhatDoiTuong = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        this.dialog.open(_tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_component__WEBPACK_IMPORTED_MODULE_16__["TiepNhanNoiTruThongTinDoiTuongPopupComponent"], {
                            disableClose: false,
                            width: '1600px',
                            data: {
                                "YeuCauTiepNhanId": this.id,
                                "IsBenhAnNhiKhoa": this.dataYeuCauTiepNhan.NoiTruBenhAn.LoaiBenhAn == src_app_shared_enum_dieu_tri_noi_tru_enum__WEBPACK_IMPORTED_MODULE_11__["LoaiBenhAn"].NhiKhoa,
                                "IsBenhAnSoSinh": this.dataYeuCauTiepNhan.NoiTruBenhAn.LoaiBenhAn == src_app_shared_enum_dieu_tri_noi_tru_enum__WEBPACK_IMPORTED_MODULE_11__["LoaiBenhAn"].TreSoSinh
                            }
                        }).afterClosed().subscribe(function (result) {
                            if (result) {
                                // xử lý load lại thông tin đối tượng
                                _this.getThongTinBenhAn(_this.id);
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.close = function (result) {
                    if (result === void 0) { result = null; }
                    this.dialogRef.close(result);
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.xuLyChiDinhEkipVaDichVuGiuong = function () {
                    var _this = this;
                    this.dialog.open(_tiep_nhan_noi_tru_chi_dinh_popup_tiep_nhan_noi_tru_chi_dinh_popup_component__WEBPACK_IMPORTED_MODULE_14__["TiepNhanNoiTruChiDinhPopupComponent"], {
                        disableClose: false,
                        width: '1300px',
                        data: {
                            KhoaId: this.dataYeuCauTiepNhan.ThongTinNhapVien.KhoaNhapVienId,
                            TenKhoa: this.dataYeuCauTiepNhan.ThongTinNhapVien.KhoaNhapVien,
                            YeuCauTiepNhanId: this.id,
                            ThoiDiemNhapVien: this.dataYeuCauTiepNhan.NoiTruBenhAn.ThoiDiemNhapVien,
                            BenhNhanId: this.dataYeuCauTiepNhan.BenhNhanId
                        }
                    }).afterClosed().subscribe(function (result) {
                        _this.close(true);
                    });
                };
                TiepNhanNoiTruBenhAnPopupComponent.prototype.xuLyHuyNhapVien = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        this.dialog.open(_tiep_nhan_noi_tru_huy_nhap_vien_popup_tiep_nhan_noi_tru_huy_nhap_vien_popup_component__WEBPACK_IMPORTED_MODULE_15__["TiepNhanNoiTruHuyNhapVienPopupComponent"], {
                            disableClose: false,
                            width: '450px',
                            data: {
                                YeuCauTiepNhanId: this.id
                            }
                        }).afterClosed().subscribe(function (result) {
                            if (result != undefined && result != null) {
                                _this.close(true);
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return TiepNhanNoiTruBenhAnPopupComponent;
            }());
            TiepNhanNoiTruBenhAnPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            TiepNhanNoiTruBenhAnPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-noi-tru-benh-an-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-noi-tru-benh-an-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-noi-tru-benh-an-popup.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanNoiTruBenhAnPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.scss": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.scss ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1LWNoaS1kaW5oLXBvcHVwL3RpZXAtbmhhbi1ub2ktdHJ1LWNoaS1kaW5oLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.ts": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.ts ***!
          \************************************************************************************************************************************************/
        /*! exports provided: TiepNhanNoiTruChiDinhPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruChiDinhPopupComponent", function () { return TiepNhanNoiTruChiDinhPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            /* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_su_dung_goi_dich_vu_popup_lan_kham_hien_tai_su_dung_goi_dich_vu_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_so_do_giuong_popup_tiep_nhan_noi_tru_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tiep-nhan-noi-tru.model */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts");
            var TiepNhanNoiTruChiDinhPopupComponent = /** @class */ (function () {
                function TiepNhanNoiTruChiDinhPopupComponent(authService, dialog, notificationService, apiService, data, dialogRef) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.validationErrors = [];
                    this.chiDinh = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_15__["TiepNhanNoiTruChiDinh"]();
                    this.dataPhong = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_15__["TiepNhanNoiTruChiDinhChonGiuong"]();
                    this.isDisabledBaoPhong = true;
                    this.dichVuGiuongQueryInfo = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_12__["LookupQueryInfo"]();
                    this.benhNhanId = null;
                }
                TiepNhanNoiTruChiDinhPopupComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].TiepNhanNoiTru;
                    this.chiDinh.YeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
                    this.chiDinh.TuNgay = this.chiDinh.ThoiGianNhan = this.data.ThoiDiemNhapVien;
                    this.chiDinh.KhongCanChiDinhGiuong = this.data.KhongCanChiDinhGiuong;
                    this.benhNhanId = this.data.BenhNhanId;
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.xuLyLuuChiDinh = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessConfirm, ["Lưu"])
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.validationErrors = [];
                                _this.apiService.post("DieuTriNoiTru/XuLyChiDinhEkipVaDichVuGiuongNoiTru", _this.chiDinh)
                                    .subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                    _this.dialogRef.close();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.chonDichVuGiuong = function (event) {
                    if (event != undefined && event != null) {
                        this.isDisabledBaoPhong = event.LoaiGiaCoHieuLuc <= 1; //!this.chiDinh.BaoPhong || 
                        this.chiDinh.LoaiGiuong = event.LoaiGiuong;
                        this.chiDinh.BaoPhong = this.dataPhong.BaoPhong = event.BaoPhong;
                        this.clearValidation('LoaiGiuong');
                    }
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.chonGiuong = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
                        this.dataPhong.KhoaId = this.data.KhoaId;
                        this.dataPhong.TenKhoa = this.data.TenKhoa;
                        this.dataPhong.BaoPhong = this.chiDinh.BaoPhong;
                        this.dataPhong.ThoiGianNhan = this.chiDinh.ThoiGianNhan;
                        this.dialog.open(_tiep_nhan_noi_tru_so_do_giuong_popup_tiep_nhan_noi_tru_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_14__["TiepNhanNoiTruSoDoGiuongPopupComponent"], {
                            disableClose: false,
                            width: '1200px',
                            data: Object.assign({}, this.dataPhong)
                        }).afterClosed().subscribe(function (result) {
                            if (result != undefined && result != null) {
                                _this.dataPhong = Object.assign({}, result);
                                _this.chiDinh.GiuongId = result.GiuongId;
                                _this.chiDinh.TenGiuong = result.TenGiuong + " - " + result.TenPhong;
                                _this.clearValidation('GiuongId');
                            }
                            // nhấn nút hủy
                            // else if(result == null)
                            // {
                            // }
                            // else
                            // {
                            //   // this.dataPhong = new TiepNhanNoiTruChiDinhChonGiuong();
                            //   // this.dataPhong.KhoaId = this.data.KhoaId;
                            //   // this.dataPhong.TenKhoa = this.data.TenKhoa;
                            //   // this.dataPhong.BaoPhong = this.chiDinh.BaoPhong;
                            //   this.clearObjThongTinTamGiuong();
                            // }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.clearValidation = function (fieldName) {
                    if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
                        this.validationErrors = this.validationErrors.filter(function (x) { return x.Field != fieldName; });
                    }
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.changeDichVuGiuong = function (event) {
                    this.chiDinh.GiuongId = null;
                    this.chiDinh.TenGiuong = null;
                    if (!event) {
                        this.chiDinh.BaoPhong = null;
                        this.chiDinh.LoaiGiuong = null;
                    }
                    this.clearObjThongTinTamGiuong();
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.clearObjThongTinTamGiuong = function () {
                    this.dataPhong = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_15__["TiepNhanNoiTruChiDinhChonGiuong"]();
                    this.dataPhong.KhoaId = this.data.KhoaId;
                    this.dataPhong.TenKhoa = this.data.TenKhoa;
                    this.dataPhong.BaoPhong = this.chiDinh.BaoPhong;
                    this.dataPhong.ThoiGianNhan = this.chiDinh.ThoiGianNhan;
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.close = function (result) {
                    if (result === void 0) { result = null; }
                    this.dialogRef.close(result);
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.getDichVuGiuongQueryInfo = function () {
                    var thoiGianNhanTemp = this.convertToUTCDateTime();
                    this.dichVuGiuongQueryInfo.ParameterDependencies = JSON.stringify({
                        ThoiGianNhan: thoiGianNhanTemp
                    });
                    return this.dichVuGiuongQueryInfo;
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.convertToUTCDateTime = function () {
                    if (this.chiDinh.TuNgay) {
                        var chiDinhTuNgayTemp = new Date(this.chiDinh.TuNgay);
                        return new Date(Date.UTC(chiDinhTuNgayTemp.getFullYear(), chiDinhTuNgayTemp.getMonth(), chiDinhTuNgayTemp.getDate(), chiDinhTuNgayTemp.getHours(), chiDinhTuNgayTemp.getMinutes()));
                    }
                };
                TiepNhanNoiTruChiDinhPopupComponent.prototype.clearGiuongBenh = function () {
                    this.chiDinh.GiuongId = null;
                    this.chiDinh.TenGiuong = null;
                };
                // cập nhật xem giuonfg trong gói dv
                TiepNhanNoiTruChiDinhPopupComponent.prototype.xemGoiDichVu = function () {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                        self.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_su_dung_goi_dich_vu_popup_lan_kham_hien_tai_su_dung_goi_dich_vu_popup_component__WEBPACK_IMPORTED_MODULE_13__["LanKhamHienTaiSuDungGoiDichVuPopupComponent"], {
                            disableClose: false,
                            width: '1800px',
                            data: { DocumentType: self.documentType, BenhNhanId: self.benhNhanId, IsPTTT: false, IsNoiTru: true, IsCapGiuong: true }
                        }).afterClosed().subscribe(function (dichVuGiuong) {
                            if (dichVuGiuong) {
                                var query = _this.getDichVuGiuongQueryInfo();
                                console.log('query', query);
                                _this.apiService.post("KhamBenh/GetDichVuGiuongBenhVien", query).subscribe(function (res) {
                                    var dichVuBenhVien = res.find(function (x) { return x.KeyId == dichVuGiuong.DichVuBenhVienId; });
                                    console.log('dichVuBenhVien', dichVuBenhVien);
                                    if (dichVuBenhVien) {
                                        _this.chiDinh.YeuCauGoiDichVuId = dichVuGiuong.YeuCauGoiDichVuId;
                                        _this.chiDinh.DichVuGiuongId = dichVuBenhVien.KeyId;
                                        _this.chiDinh.DichVuGiuongDisplay = dichVuBenhVien.DisplayName;
                                        _this.chiDinh.LoaiGiuong = dichVuBenhVien.LoaiGiuong;
                                        _this.chiDinh.BaoPhong = dichVuBenhVien.BaoPhong;
                                        _this.isDisabledBaoPhong = dichVuBenhVien.LoaiGiaCoHieuLuc <= 1;
                                        var loaiGiuongError = _this.validationErrors.find(function (p) { return p.Field.includes('LoaiGiuong'); });
                                        if (loaiGiuongError) {
                                            _this.validationErrors.splice(loaiGiuongError, 1);
                                        }
                                    }
                                    else {
                                        _this.notificationService.showError("Dịch vụ giường này không còn sử dụng, hoặc không có giá có hiệu lực.");
                                    }
                                }, function (err) {
                                    _this.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return TiepNhanNoiTruChiDinhPopupComponent;
            }());
            TiepNhanNoiTruChiDinhPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            TiepNhanNoiTruChiDinhPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-noi-tru-chi-dinh-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-noi-tru-chi-dinh-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-noi-tru-chi-dinh-popup.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanNoiTruChiDinhPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.scss": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.scss ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1LWh1eS1uaGFwLXZpZW4tcG9wdXAvdGllcC1uaGFuLW5vaS10cnUtaHV5LW5oYXAtdmllbi1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.ts": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.ts ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: TiepNhanNoiTruHuyNhapVienPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruHuyNhapVienPopupComponent", function () { return TiepNhanNoiTruHuyNhapVienPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            var TiepNhanNoiTruHuyNhapVienPopupComponent = /** @class */ (function () {
                function TiepNhanNoiTruHuyNhapVienPopupComponent(dialogRef, data, authService, notificationService, apiService, dialog) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].TiepNhanNoiTru;
                    this.lyDo = null;
                }
                TiepNhanNoiTruHuyNhapVienPopupComponent.prototype.ngOnInit = function () {
                };
                TiepNhanNoiTruHuyNhapVienPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang hủy dữ liệu..." },
                        });
                    }
                };
                TiepNhanNoiTruHuyNhapVienPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                TiepNhanNoiTruHuyNhapVienPopupComponent.prototype.XuLyHuyNhapVien = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
                        this.showPopupLoadingData();
                        this.validationErrors = [];
                        var obj = {
                            "Id": this.data.YeuCauTiepNhanId,
                            "LyDo": this.lyDo
                        };
                        this.apiService.put("DieuTriNoiTru/XuLyHuyNhapVien", obj)
                            .subscribe(function () {
                            _this.closePopupLoadingData();
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Hủy nhập viện"]));
                            _this.close('ok');
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanNoiTruHuyNhapVienPopupComponent.prototype.close = function (data) {
                    if (data == 'ok') {
                        this.dialogRef.close(this.lyDo);
                    }
                    else {
                        this.dialogRef.close(null);
                    }
                };
                return TiepNhanNoiTruHuyNhapVienPopupComponent;
            }());
            TiepNhanNoiTruHuyNhapVienPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            TiepNhanNoiTruHuyNhapVienPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-noi-tru-huy-nhap-vien-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-noi-tru-huy-nhap-vien-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-noi-tru-huy-nhap-vien-popup.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanNoiTruHuyNhapVienPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.scss": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.scss ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvdGllcC1uaGFuLW5vaS10cnUvdGllcC1uaGFuLW5vaS10cnUtbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGRpZXUtdHJpLW5vaS10cnVcXHRpZXAtbmhhbi1ub2ktdHJ1XFx0aWVwLW5oYW4tbm9pLXRydS1saXN0XFx0aWVwLW5oYW4tbm9pLXRydS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vZGlldS10cmktbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS1saXN0L3RpZXAtbmhhbi1ub2ktdHJ1LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vZGlldS10cmktbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS1saXN0L3RpZXAtbmhhbi1ub2ktdHJ1LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn0iLCIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: TiepNhanNoiTruListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruListComponent", function () { return TiepNhanNoiTruListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tiep-nhan-noi-tru.model */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _tiep_nhan_noi_tru_benh_an_popup_tiep_nhan_noi_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.ts");
            var TiepNhanNoiTruListComponent = /** @class */ (function () {
                function TiepNhanNoiTruListComponent(authService, notificationService, route, location, dialog, apiService) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormControl"]();
                    this.gridColumns = [];
                    this._gridColumnsFilter = [];
                    this._isCheckColumnFilter = true;
                    this.strAdditionalSearchString = "";
                    this.isScanF1 = false;
                    this.sort = [{
                            field: 'TrangThai',
                            dir: 'asc'
                        }];
                    this.baseRoute = "/noi-tru/tiep-nhan";
                    this.tiepNhanNoiTruTimKiem = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_5__["TiepNhanNoiTruTimKiem"]();
                }
                TiepNhanNoiTruListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__["DocumentType"].TiepNhanNoiTru;
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_7__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachTiepNhanNoiTru");
                            if (additionalSearchString != null) {
                                this.tiepNhanNoiTruTimKiem = JSON.parse(additionalSearchString);
                                if (this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay != null && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay != 'null' && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay != '') {
                                    this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.startDate = new Date(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.startDate);
                                }
                                if (this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay != null && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay != 'null' && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay != '') {
                                    this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.endDate = new Date(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.endDate);
                                }
                                this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        var queryString = JSON.stringify(this.tiepNhanNoiTruTimKiem);
                        this.gridChild.additionalSearchString = queryString;
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_7__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachTiepNhanNoiTru");
                    }
                    this.gridColumns = [
                        { Field: "MaTiepNhan", Title: "Mã TN", Width: 60, Sortable: true, Template: this.maTNTemplate },
                        { Field: "MaBenhNhan", Title: "Mã NB", Width: 60, Sortable: true },
                        { Field: "HoTen", Title: "Họ tên", Width: 160, Sortable: true },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
                        //{ Field: "KhoaNhapVien", Title: "Khoa nhập viện", Width: 120, Sortable: true },
                        { Field: "ThoiGianTiepNhan", Title: "Thời gian tiếp nhận", Width: 100, Sortable: true, Template: this.thoiGianTiepNhanTemplate },
                        { Field: "ThoiGianNhapVien", Title: "Thời gian nhập viện", Width: 100, Sortable: true, Template: this.thoiGianNhapVienTemplate },
                        { Field: "SoBenhAn", Title: "Số BA", Width: 60, Sortable: true },
                        { Field: "NoiChiDinh", Title: "Nơi chỉ định", Width: 100, Sortable: true },
                        { Field: "ChanDoan", Title: "Chẩn đoán", Width: 120, Sortable: true },
                        { Field: "DoiTuong", Title: "Đối tượng", Width: 60, Sortable: true },
                        { Field: "CapCuu", Title: "Cấp cứu", Width: 50, Sortable: true, Template: this.capCuuTemplate },
                        { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate }
                    ];
                    this._gridColumnsFilter = this.gridColumns.filter(function (p) { return p.Title != ''; });
                };
                TiepNhanNoiTruListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        self.timeoutSearchChange = setTimeout(function () {
                            self.modelQRCode = event;
                            self.changeQR(self.modelQRCode);
                        }, 10);
                    }
                    else if ((event == null || event == "") && this.strAdditionalSearchString != "") {
                        this.modelQRCode = null;
                        this.timKiemNangCao();
                    }
                };
                TiepNhanNoiTruListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                TiepNhanNoiTruListComponent.prototype.clearSearch = function () {
                    this.tiepNhanNoiTruTimKiem.SearchString = null;
                    this.gridChild.searchString = null;
                    this.timKiemNangCao();
                };
                TiepNhanNoiTruListComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.tiepNhanNoiTruTimKiem.TuNgayDenNgay != null && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.startDate != null) {
                        this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay = null;
                    }
                    if (this.tiepNhanNoiTruTimKiem.TuNgayDenNgay != null && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.endDate != null) {
                        this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.tiepNhanNoiTruTimKiem);
                    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_7__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachTiepNhanNoiTru", queryString);
                    this.gridChild.search();
                };
                TiepNhanNoiTruListComponent.prototype.xuLyXuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("DieuTriNoiTru/ExportDanhSachTiepNhanNoiTru", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "TiepNhanNoiTru" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanNoiTruListComponent.prototype.xemChiTiet = function (dataItem) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                        this.dialog.open(_tiep_nhan_noi_tru_benh_an_popup_tiep_nhan_noi_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_19__["TiepNhanNoiTruBenhAnPopupComponent"], {
                            disableClose: false,
                            width: '1400px',
                            height: '455px',
                            data: { Id: dataItem.YeuCauTiepNhanId, TenBenhNhan: dataItem.HoTen }
                        }).afterClosed().subscribe(function (result) {
                            if (result == true) {
                                _this.gridChild.search();
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanNoiTruListComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                TiepNhanNoiTruListComponent.prototype.changeQR = function (event) {
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        var dataTimKiem = event.split("|");
                        if (dataTimKiem.length > 1) {
                            this.tiepNhanNoiTruTimKiem.SearchString = dataTimKiem[0];
                        }
                        else {
                            this.tiepNhanNoiTruTimKiem.SearchString = event.slice(0, -1);
                        }
                        this.timKiemNangCao();
                    }
                    else {
                        this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
                    }
                    this.isScanF1 = false;
                };
                TiepNhanNoiTruListComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                        this.isScanF1 = true;
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                };
                return TiepNhanNoiTruListComponent;
            }());
            TiepNhanNoiTruListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
            ], TiepNhanNoiTruListComponent.prototype, "maTNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianTiepNhanTemplate', { static: true })
            ], TiepNhanNoiTruListComponent.prototype, "thoiGianTiepNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('capCuuTemplate', { static: true })
            ], TiepNhanNoiTruListComponent.prototype, "capCuuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], TiepNhanNoiTruListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianNhapVienTemplate', { static: true })
            ], TiepNhanNoiTruListComponent.prototype, "thoiGianNhapVienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
            ], TiepNhanNoiTruListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], TiepNhanNoiTruListComponent.prototype, "keyEvent", null);
            TiepNhanNoiTruListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-noi-tru-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-noi-tru-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-noi-tru-list.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.scss")).default]
                })
            ], TiepNhanNoiTruListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-routing.module.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-routing.module.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: TiepNhanNoiTruRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruRoutingModule", function () { return TiepNhanNoiTruRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_list_tiep_nhan_noi_tru_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _tiep_nhan_noi_tru_list_tiep_nhan_noi_tru_list_component__WEBPACK_IMPORTED_MODULE_6__["TiepNhanNoiTruListComponent"],
                    data: {
                        title: 'Danh sách tiếp nhận nội trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TiepNhanNoiTru,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var TiepNhanNoiTruRoutingModule = /** @class */ (function () {
                function TiepNhanNoiTruRoutingModule() {
                }
                return TiepNhanNoiTruRoutingModule;
            }());
            TiepNhanNoiTruRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TiepNhanNoiTruRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.scss": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.scss ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-select {\n  min-width: 100px;\n  color: #fff;\n  background-color: #005dab;\n  border: 1px #005dab;\n}\n\n.select {\n  background-color: green;\n  border: 1px solid green;\n  color: #fff;\n}\n\n.not-available-select {\n  border: 1px solid green;\n}\n\n.orange-button {\n  background-color: orange;\n  border: 1px solid orange;\n}\n\n.red-button {\n  min-width: 100px;\n  color: #fff !important;\n  background-color: red;\n  border: 1px solid red;\n}\n\nul.tooltip-detail > li {\n  padding-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvdGllcC1uaGFuLW5vaS10cnUvdGllcC1uaGFuLW5vaS10cnUtc28tZG8tZ2l1b25nLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcZGlldS10cmktbm9pLXRydVxcdGllcC1uaGFuLW5vaS10cnVcXHRpZXAtbmhhbi1ub2ktdHJ1LXNvLWRvLWdpdW9uZy1wb3B1cFxcdGllcC1uaGFuLW5vaS10cnUtc28tZG8tZ2l1b25nLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vZGlldS10cmktbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS1zby1kby1naXVvbmctcG9wdXAvdGllcC1uaGFuLW5vaS10cnUtc28tZG8tZ2l1b25nLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1LXNvLWRvLWdpdW9uZy1wb3B1cC90aWVwLW5oYW4tbm9pLXRydS1zby1kby1naXVvbmctcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXI6IDFweCAjMDA1ZGFiO1xufVxuXG4uc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5vdC1hdmFpbGFibGUtc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG59XG5cbi5yZWQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbnVsLnRvb2x0aXAtZGV0YWlsID4gbGkge1xuICBwYWRkaW5nLXRvcDogMXB4O1xufSIsIi5idG4tc2VsZWN0IHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWI7XG4gIGJvcmRlcjogMXB4ICMwMDVkYWI7XG59XG5cbi5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubm90LWF2YWlsYWJsZS1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcbn1cblxuLnJlZC1idXR0b24ge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxudWwudG9vbHRpcC1kZXRhaWwgPiBsaSB7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.ts": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.ts ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: TiepNhanNoiTruSoDoGiuongPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruSoDoGiuongPopupComponent", function () { return TiepNhanNoiTruSoDoGiuongPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tiep-nhan-noi-tru.model */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts");
            var TiepNhanNoiTruSoDoGiuongPopupComponent = /** @class */ (function () {
                function TiepNhanNoiTruSoDoGiuongPopupComponent(dialog, apiService, data, notificationService, dialogRef) {
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.data = data;
                    this.notificationService = notificationService;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.dataYeuCau = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_6__["TiepNhanNoiTruChiDinhChonGiuong"]();
                    this.gridColumns = [];
                    this.soDoGiuongFillter = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_6__["SoDoGiuongTiepNhanNoiTruFillter"]();
                    this.additionalSearchString = null;
                }
                TiepNhanNoiTruSoDoGiuongPopupComponent.prototype.ngOnInit = function () {
                    this.dataYeuCau = this.data;
                    this.soDoGiuongFillter.KhoaPhongId = this.data.KhoaId;
                    this.soDoGiuongFillter.ThoiGianNhan = this.data.ThoiGianNhan;
                    this.soDoGiuongFillter.ThoiGianTra = this.data.ThoiGianTra;
                    this.soDoGiuongFillter.YeuCauDichVuGiuongBenhVienId = this.data.YeuCauDichVuGiuongBenhVienId;
                    this.soDoGiuongFillter.BaoPhong = this.data.BaoPhong;
                    this.soDoGiuongFillter.YeuCauTiepNhanNoiTruId = this.data.YeuCauTiepNhanNoiTruId;
                    this.gridColumns = [
                        { Field: "Tang", Title: "TẦNG", Width: 80, Sortable: true, LockColumn: true },
                        { Field: "Phong", Title: "PHÒNG", Width: 160, Sortable: true, LockColumn: true },
                        //{ Field: "BaoPhong", Title: "BAO PHÒNG", Width: 80, Sortable: false, LockColumn: true, Template: this.baoPhongTemplate },
                        { Field: "Giuong", Title: "GIƯỜNG", MinWidth: 100, Sortable: false, Template: this.giuongTemplate }
                    ];
                    this.getSoDoGiuong();
                };
                TiepNhanNoiTruSoDoGiuongPopupComponent.prototype.getSoDoGiuong = function () {
                    this.convertToUTC();
                    var queryString = JSON.stringify(this.soDoGiuongFillter);
                    this.reverseFromUTC();
                    this.gridSoDoGiuong._additionalSearchString = this.additionalSearchString = queryString;
                    this.gridSoDoGiuong.search();
                };
                TiepNhanNoiTruSoDoGiuongPopupComponent.prototype.convertToUTC = function () {
                    if (this.soDoGiuongFillter.ThoiGianNhan) {
                        this.thoiGianNhanTemp = new Date(this.soDoGiuongFillter.ThoiGianNhan);
                        this.soDoGiuongFillter.ThoiGianNhan = new Date(Date.UTC(this.thoiGianNhanTemp.getFullYear(), this.thoiGianNhanTemp.getMonth(), this.thoiGianNhanTemp.getDate(), this.thoiGianNhanTemp.getHours(), this.thoiGianNhanTemp.getMinutes()));
                    }
                    if (this.soDoGiuongFillter.ThoiGianTra) {
                        this.thoiGianTraTemp = new Date(this.soDoGiuongFillter.ThoiGianTra);
                        this.soDoGiuongFillter.ThoiGianTra = new Date(Date.UTC(this.thoiGianTraTemp.getFullYear(), this.thoiGianTraTemp.getMonth(), this.thoiGianTraTemp.getDate(), this.thoiGianTraTemp.getHours(), this.thoiGianTraTemp.getMinutes()));
                    }
                };
                TiepNhanNoiTruSoDoGiuongPopupComponent.prototype.reverseFromUTC = function () {
                    if (this.soDoGiuongFillter.ThoiGianNhan) {
                        this.soDoGiuongFillter.ThoiGianNhan = new Date(this.thoiGianNhanTemp.getFullYear(), this.thoiGianNhanTemp.getMonth(), this.thoiGianNhanTemp.getDate(), this.thoiGianNhanTemp.getHours(), this.thoiGianNhanTemp.getMinutes());
                    }
                    if (this.soDoGiuongFillter.ThoiGianTra) {
                        this.soDoGiuongFillter.ThoiGianTra = new Date(this.thoiGianTraTemp.getFullYear(), this.thoiGianTraTemp.getMonth(), this.thoiGianTraTemp.getDate(), this.thoiGianTraTemp.getHours(), this.thoiGianTraTemp.getMinutes());
                    }
                };
                TiepNhanNoiTruSoDoGiuongPopupComponent.prototype.chonGiuong = function (phong, giuong) {
                    if (phong != undefined && giuong != undefined) {
                        this.dataYeuCau.PhongId = phong.Id;
                        this.dataYeuCau.TenPhong = phong.Phong;
                        this.dataYeuCau.Tang = phong.Tang;
                        this.dataYeuCau.GiuongId = giuong.GiuongId;
                        this.dataYeuCau.TenGiuong = giuong.TenGiuong;
                        phong.BaoPhong = this.dataYeuCau.BaoPhong;
                        // this.gridSoDoGiuong._gridDataSource.data.forEach(element => {
                        //   if(element.Id != phong.Id)
                        //   {
                        //     element.BaoPhong = false;
                        //   }
                        // });
                    }
                };
                TiepNhanNoiTruSoDoGiuongPopupComponent.prototype.onDataBoundSoDoGiuong = function (event) {
                    var _this = this;
                    if (event != undefined && event != null && this.dataYeuCau.PhongId != undefined && this.dataYeuCau.PhongId != null && this.dataYeuCau.BaoPhong) {
                        event.Data.forEach(function (element) {
                            if (element.Id == _this.dataYeuCau.PhongId) {
                                element.BaoPhong = true;
                            }
                        });
                    }
                };
                TiepNhanNoiTruSoDoGiuongPopupComponent.prototype.xuLyChonGiuong = function () {
                    var _this = this;
                    this.apiService.post("DieuTriNoiTru/KiemTraPhongChiDinhTiepNhanNoiTru", {
                        "GiuongId": this.dataYeuCau.GiuongId,
                        "BaoPhong": this.dataYeuCau.BaoPhong,
                        "ThoiGianNhan": this.dataYeuCau.ThoiGianNhan,
                        "ThoiGianTra": this.dataYeuCau.ThoiGianTra,
                        "YeuCauDichVuGiuongBenhVienId": this.dataYeuCau.YeuCauDichVuGiuongBenhVienId,
                        "YeuCauTiepNhanNoiTruId": this.data.YeuCauTiepNhanNoiTruId
                    })
                        .subscribe(function () {
                        _this.dialogRef.close(_this.dataYeuCau);
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                TiepNhanNoiTruSoDoGiuongPopupComponent.prototype.close = function () {
                    this.dialogRef.close(null);
                };
                return TiepNhanNoiTruSoDoGiuongPopupComponent;
            }());
            TiepNhanNoiTruSoDoGiuongPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoPhongTemplate', { static: true })
            ], TiepNhanNoiTruSoDoGiuongPopupComponent.prototype, "baoPhongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giuongTemplate', { static: true })
            ], TiepNhanNoiTruSoDoGiuongPopupComponent.prototype, "giuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridSoDoGiuong', { static: true })
            ], TiepNhanNoiTruSoDoGiuongPopupComponent.prototype, "gridSoDoGiuong", void 0);
            TiepNhanNoiTruSoDoGiuongPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-noi-tru-so-do-giuong-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-noi-tru-so-do-giuong-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-noi-tru-so-do-giuong-popup.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanNoiTruSoDoGiuongPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.scss": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.scss ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  text-transform: uppercase;\n  padding-bottom: 0px !important;\n  margin-bottom: 16px;\n  border-bottom: 1px solid #c8c8c8;\n}\n\n.po-h-tn {\n  margin-left: auto;\n  color: #005dab;\n  position: relative;\n  left: 5px;\n}\n\n.po-h-tn mat-icon {\n  display: contents;\n  font-size: 35px;\n}\n\napp-datepicker.warning-value kendo-datepicker .k-picker-wrap kendo-dateinput .k-dateinput-wrap > input {\n  color: red;\n}\n\napp-datepicker.warning-value kendo-datepicker .k-state-disabled .k-dateinput-wrap input {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.redText {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvdGllcC1uaGFuLW5vaS10cnUvdGllcC1uaGFuLW5vaS10cnUtdGhvbmctdGluLWRvaS10dW9uZy1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGRpZXUtdHJpLW5vaS10cnVcXHRpZXAtbmhhbi1ub2ktdHJ1XFx0aWVwLW5oYW4tbm9pLXRydS10aG9uZy10aW4tZG9pLXR1b25nLXBvcHVwXFx0aWVwLW5oYW4tbm9pLXRydS10aG9uZy10aW4tZG9pLXR1b25nLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vZGlldS10cmktbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS90aWVwLW5oYW4tbm9pLXRydS10aG9uZy10aW4tZG9pLXR1b25nLXBvcHVwL3RpZXAtbmhhbi1ub2ktdHJ1LXRob25nLXRpbi1kb2ktdHVvbmctcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1L3RpZXAtbmhhbi1ub2ktdHJ1LXRob25nLXRpbi1kb2ktdHVvbmctcG9wdXAvdGllcC1uaGFuLW5vaS10cnUtdGhvbmctdGluLWRvaS10dW9uZy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M4YzhjODtcbn1cblxuLnBvLWgtdG4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xufVxuXG4ucG8taC10biBtYXQtaWNvbiB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbmFwcC1kYXRlcGlja2VyLndhcm5pbmctdmFsdWUga2VuZG8tZGF0ZXBpY2tlciAuay1waWNrZXItd3JhcCBrZW5kby1kYXRlaW5wdXQgLmstZGF0ZWlucHV0LXdyYXAgPiBpbnB1dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmFwcC1kYXRlcGlja2VyLndhcm5pbmctdmFsdWUga2VuZG8tZGF0ZXBpY2tlciAuay1zdGF0ZS1kaXNhYmxlZCAuay1kYXRlaW5wdXQtd3JhcCBpbnB1dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn0iLCJoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGM4Yzg7XG59XG5cbi5wby1oLXRuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbn1cblxuLnBvLWgtdG4gbWF0LWljb24ge1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG5hcHAtZGF0ZXBpY2tlci53YXJuaW5nLXZhbHVlIGtlbmRvLWRhdGVwaWNrZXIgLmstcGlja2VyLXdyYXAga2VuZG8tZGF0ZWlucHV0IC5rLWRhdGVpbnB1dC13cmFwID4gaW5wdXQge1xuICBjb2xvcjogcmVkO1xufVxuXG5hcHAtZGF0ZXBpY2tlci53YXJuaW5nLXZhbHVlIGtlbmRvLWRhdGVwaWNrZXIgLmstc3RhdGUtZGlzYWJsZWQgLmstZGF0ZWlucHV0LXdyYXAgaW5wdXQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.ts": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.ts ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: TiepNhanNoiTruThongTinDoiTuongPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruThongTinDoiTuongPopupComponent", function () { return TiepNhanNoiTruThongTinDoiTuongPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/search */ "./node_modules/@iconify/icons-ic/search.js");
            /* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/add-circle */ "./node_modules/@iconify/icons-ic/add-circle.js");
            /* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/highlight-off */ "./node_modules/@iconify/icons-ic/highlight-off.js");
            /* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../tiep-nhan-noi-tru.model */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/enum/tinh-trang-the.enum */ "./src/app/shared/enum/tinh-trang-the.enum.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/enum/kham-benh.enum */ "./src/app/shared/enum/kham-benh.enum.ts");
            var TiepNhanNoiTruThongTinDoiTuongPopupComponent = /** @class */ (function () {
                function TiepNhanNoiTruThongTinDoiTuongPopupComponent(authService, dialog, notificationService, apiService, data, dialogRef, router, cdRef, el) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.router = router;
                    this.cdRef = cdRef;
                    this.el = el;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icFind = _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icAddCircle = _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icHighlightOff = _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.isDisabledGiaHan = false;
                    this.files = [];
                    this.allowedExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
                    this.tiepNhanBenhNhan = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_19__["ThongTinDoiTuongTiepNhan"]();
                    this.themBaoHiemTuNhanModel = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_19__["ThongTinBaoHiemTuNhan"]();
                    this.isUpdateGrid = false;
                    this.gridDataSourceBHTN = {
                        data: [],
                        total: 0,
                    };
                    this.indexItemBHTNUpdate = null;
                    //message kiem tra tren BHYT
                    this.messageThanhCong = "Kiểm tra thành công";
                    this.messageKhongThanhCong = "Kiểm tra không thành công";
                    //ngay thang nam sinh
                    this.under6yearsold = false;
                    this.isScanF1 = false;
                    this.IsCheckBHYT = null;
                    this.isBenhAnNhiKhoa = false;
                    this.isBenhAnSoSinh = false;
                    this.isLoadingDataBHYT = false;
                    this.gridColumns = [];
                    this.gridCongTyBHTNColumns = [];
                    this.timeoutNoiDKBD = null;
                    this.timeout = null;
                }
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__["DocumentType"].TiepNhanNoiTru;
                    this.tiepNhanBenhNhan.Id = this.data.YeuCauTiepNhanId;
                    this.isBenhAnNhiKhoa = this.data.IsBenhAnNhiKhoa;
                    this.isBenhAnSoSinh = this.data.IsBenhAnSoSinh;
                    this.getThongTinTiepNhan(this.data.YeuCauTiepNhanId);
                    this.gridColumns = [
                        { Field: "DoiTuong", Title: "Đối tượng", Width: 70 },
                        { Field: "SoTheBaoHiem", Title: "Số thẻ BH", Width: 100 },
                        { Field: "DiaChiThe", Title: "Địa chỉ thẻ", Width: 100 },
                        { Field: "MucHuong", Title: "Mức hưởng", Width: 60, },
                        { Field: "TuNgay", Title: "Từ ngày", Width: 90, Template: this.tuNgayTemplate },
                        { Field: "DenNgay", Title: "Đến ngày", Width: 90, Template: this.denNgayTemplate },
                        { Field: "NoiDangKyBaoHiem", Title: "Nơi đăng ký BH", Width: 180 },
                        { Field: "NgayNhap", Title: "Ngày nhập", Width: 90, Template: this.ngayNhapTemplate },
                        { Field: "ThoiGianMienDongChiTra", Title: "TG miễn đồng chi trả", Width: 90, Template: this.thoiGianMienDongChiTraTemplate },
                        { Field: "GiaHanThe", Title: "Gia hạn thẻ", Width: 70, Template: this.giaHanTheTemplate },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 80, Template: this.trangThaiTemplate }
                    ];
                    this.gridCongTyBHTNColumns = [
                        { Field: "TenCongTyBaoHiemTuNhan", Title: "Công ty", Width: 180, Sortable: true },
                        { Field: "MaSoThe", Title: "Số thẻ", Width: 100, Sortable: true },
                        { Field: "NgayHieuLuc", Title: "Từ ngày", Width: 90, Sortable: true, Template: this.ngayHieuLucTemplate },
                        { Field: "NgayHetHan", Title: "Đến ngày", Width: 90, Sortable: true, Template: this.ngayDenHanTemplate },
                        { Field: "SoDienThoai", Title: "Điện thoại", Width: 100, Sortable: true },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 200, Sortable: true },
                        { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate },
                    ];
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.closePopupLoadingData = function (elementType, strId) {
                    var _this = this;
                    if (elementType === void 0) { elementType = null; }
                    if (strId === void 0) { strId = null; }
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                    if (elementType != null) {
                        this.popupLoadingData.afterClosed().subscribe(function (result) {
                            var invalidControl = _this.el.nativeElement.querySelector('#' + strId);
                            console.log('invalidControl', invalidControl, strId);
                            if (invalidControl) {
                                invalidControl.focus();
                            }
                        });
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.resetFocus = function () {
                    var $focused = jQuery(':focus');
                    jQuery(".k-input").blur();
                    setTimeout(function () {
                        if ($focused.length > 0) {
                            $focused.focus();
                        }
                    }, 100);
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.getThongTinTiepNhan = function (yeuCauTiepNhanId) {
                    var _this = this;
                    this.showPopupLoadingData();
                    this.apiService
                        .get("DieuTriNoiTru/GetThongTinDoiTuongTiepNhan?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
                        .subscribe(function (resultData) {
                        _this.tiepNhanBenhNhan = resultData;
                        _this.gridDataSourceBHTN.data = _this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans;
                        if (_this.tiepNhanBenhNhan.NamSinh != null &&
                            _this.tiepNhanBenhNhan.ThangSinh != null &&
                            _this.tiepNhanBenhNhan.NgaySinh != null) {
                            var ngaySinh = new Date(_this.tiepNhanBenhNhan.ThangSinh +
                                "/" +
                                _this.tiepNhanBenhNhan.NgaySinh +
                                "/" +
                                _this.tiepNhanBenhNhan.NamSinh +
                                "/");
                            _this.getAge(ngaySinh, new Date());
                        }
                        // if (this.tiepNhanBenhNhan.BHYTMaDKBD != null && this.tiepNhanBenhNhan.BHYTMaDKBD != "") {
                        //   this.setNoiDKBD(this.tiepNhanBenhNhan.BHYTMaDKBD);
                        // }
                        if (_this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs == null) {
                            _this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs = [];
                        }
                        //files
                        _this.files = [];
                        _this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs.forEach(function (element) {
                            _this.files.push(element.GiayMienCungChiTra);
                            _this.changeNgayHetHan(element.NgayHetHan, element, true);
                        });
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.xuLyCapNhatThongTin = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Add)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].MessConfirm, ["lưu"])
                            },
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.showPopupLoadingData();
                                _this.validationErrors = [];
                                if (_this.tiepNhanBenhNhan.CoBHYT == true
                                    && _this.tiepNhanBenhNhan.TuNhap != true
                                    // && this.tiepNhanBenhNhan.BHYTMaSoThe
                                    && _this.tiepNhanBenhNhan.HoTen
                                    && (_this.tiepNhanBenhNhan.NamSinh != null || _this.tiepNhanBenhNhan.NgayThangNamSinh != null)
                                    && !_this.tiepNhanBenhNhan.TuNhap) {
                                    // let thongTinBenhNhan: ThongTinBenhNhanTimKiemBHYT = new ThongTinBenhNhanTimKiemBHYT(
                                    //   this.tiepNhanBenhNhan.BHYTMaSoThe,
                                    //   this.tiepNhanBenhNhan.HoTen,
                                    //   this.tiepNhanBenhNhan.NgayThangNamSinh,
                                    //   null,
                                    //   this.tiepNhanBenhNhan.NamSinh
                                    // );
                                    // this.apiService
                                    //   .post<any>("BHYT/GetLichSuKhamChuaBenh", thongTinBenhNhan)
                                    //   .subscribe(
                                    //     (resultData) => {
                                    //       this.xuLyCapNhatDoiTuong();
                                    //     },
                                    //     (err: ApiError) => {
                                    //       if (err.Message != "Validation Failed") {
                                    //         this.notificationService.showError(err.Message);
                                    //       }
                                    //       this.closePopupLoadingData();
                                    //     }
                                    //   );
                                    var indexTheChuaNhap = _this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs
                                        .findIndex(function (x) { return x.MaSoThe == null || x.MaSoThe == ''
                                        || x.MaDKBD == null || x.MaDKBD == ''
                                        || x.MucHuong == null
                                        || x.DiaChi == null || x.DiaChi == ''
                                        || x.NgayHieuLuc == null || x.NgayHetHan == null; });
                                    if (indexTheChuaNhap == -1) {
                                        var length = _this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs.length;
                                        var count = 0;
                                        _this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs.forEach(function (element) {
                                            var thongTinBenhNhan = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_19__["ThongTinBenhNhanTimKiemBHYT"](element.MaSoThe, _this.tiepNhanBenhNhan.HoTen, _this.tiepNhanBenhNhan.NgayThangNamSinh, null, _this.tiepNhanBenhNhan.NamSinh);
                                            _this.apiService
                                                .post("BHYT/GetLichSuKhamChuaBenh", thongTinBenhNhan)
                                                .subscribe(function (resultData) {
                                                count++;
                                                if (count == length) {
                                                    _this.xuLyCapNhatDoiTuong();
                                                }
                                            }, function (err) {
                                                if (err.Message != "Validation Failed") {
                                                    _this.notificationService.showError(err.Message);
                                                }
                                                _this.closePopupLoadingData();
                                            });
                                        });
                                    }
                                    else {
                                        _this.xuLyCapNhatDoiTuong();
                                    }
                                }
                                else {
                                    _this.xuLyCapNhatDoiTuong();
                                }
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.xuLyCapNhatDoiTuong = function () {
                    var _this = this;
                    if (this.tiepNhanBenhNhan.TuNhap) {
                        this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs.forEach(function (element) {
                            element.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_22__["TinhTrangThe"].KhongXacDinh;
                        });
                    }
                    this.apiService.put("DieuTriNoiTru/XuLyCapNhatThongTinDoiTuong", this.tiepNhanBenhNhan)
                        .subscribe(function (resultMess) {
                        if (resultMess != undefined && resultMess != null && resultMess != '') {
                            _this.notificationService.showWarning(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].ActionSuccessfully, ["Lưu"]) + " " + resultMess);
                        }
                        else {
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        }
                        _this.closePopupLoadingData();
                        _this.close(true);
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.TinhThanhPhoNguoiLienHeChange = function (event) {
                    if (event == undefined || event == null) {
                        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
                        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.QuanHuyenNguoiLienHeChange = function (event) {
                    if (event == undefined || event == null) {
                        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.PhuongXaNguoiLienHeChange = function (event) {
                    var _this = this;
                    if (event != null && event != undefined) {
                        this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(function (resultData) {
                            _this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = resultData.TinhThanhId;
                            _this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = resultData.QuanHuyenId;
                            _this.cboQuanHuyenNguoiLienHe.getDataForLookup();
                        }, function (err) {
                        });
                    }
                    // else {
                    //   this.tiepNhanBenhNhan.TinhThanhId = null;
                    //   this.tiepNhanBenhNhan.QuanHuyenId = null;
                    // }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.cloneDiaChiNguoiGiamHo = function (important) {
                    if (important === void 0) { important = false; }
                    console.log("cloneDiaChiNguoiGiamHo", "");
                    if (important || !this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId) {
                        this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = this.tiepNhanBenhNhan.TinhThanhId;
                    }
                    if (important || !this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId) {
                        this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = this.tiepNhanBenhNhan.QuanHuyenId;
                    }
                    if (important || !this.tiepNhanBenhNhan.NguoiLienHePhuongXaId) {
                        this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = this.tiepNhanBenhNhan.PhuongXaId;
                    }
                    if (important || !this.tiepNhanBenhNhan.NguoiLienHeDiaChi) {
                        this.tiepNhanBenhNhan.NguoiLienHeDiaChi = this.tiepNhanBenhNhan.DiaChi;
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.coBHYTChange = function (event) {
                    if (event != true) {
                        this.tiepNhanBenhNhan.TuNhap = false;
                        this.HoVaTenTextbox.focus();
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.tuNhapChange = function (event) {
                    if (event == true) {
                        this.tiepNhanBenhNhan.CoBHYT = true;
                        this.tiepNhanBenhNhan.IsCheckedBHYT = null;
                    }
                    if (event == false) {
                        this.tiepNhanBenhNhan.CoBHYT = false;
                        this.coBHYTChange(false);
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.getAge = function (date_1, date_2) {
                    date_1 = new Date(date_1);
                    date_2 = new Date(date_2);
                    //convert to UTC
                    var date2_UTC = new Date(Date.UTC(date_2.getFullYear(), date_2.getMonth(), date_2.getDate()));
                    var date1_UTC = new Date(Date.UTC(date_1.getFullYear(), date_1.getMonth(), date_1.getDate()));
                    //console.log(date1_UTC, date2_UTC, date_1, date_2);
                    var yAppendix, mAppendix, dAppendix;
                    //--------------------------------------------------------------
                    var days = date2_UTC.getDate() - date1_UTC.getDate();
                    if (days < 0) {
                        date2_UTC.setMonth(date2_UTC.getMonth() - 1);
                        days += this.DaysInMonth(date2_UTC);
                    }
                    //--------------------------------------------------------------
                    var months = date2_UTC.getMonth() - date1_UTC.getMonth();
                    if (months < 0) {
                        date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
                        months += 12;
                    }
                    //--------------------------------------------------------------
                    var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();
                    if (years > 1)
                        yAppendix = " years";
                    else
                        yAppendix = " year";
                    if (months > 1)
                        mAppendix = " months";
                    else
                        mAppendix = " month";
                    if (days > 1)
                        dAppendix = " days";
                    else
                        dAppendix = " day";
                    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
                        this.under6yearsold = true;
                        this.cloneDiaChiNguoiGiamHo();
                    }
                    else {
                        this.under6yearsold = false;
                    }
                    this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.DaysInMonth = function (date2_UTC) {
                    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
                    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
                    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
                    return monthLength;
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.bindMucHuongFromSoTheBHYT = function (soTheBHYT, theBHYT) {
                    if (soTheBHYT != undefined && soTheBHYT != null && soTheBHYT.length >= 3) {
                        var maTheArray = soTheBHYT.split("");
                        if (maTheArray[2] == '1') {
                            theBHYT.MucHuong = 100;
                        }
                        else if (maTheArray[2] == '2') {
                            theBHYT.MucHuong = 100;
                        }
                        else if (maTheArray[2] == '3') {
                            theBHYT.MucHuong = 95;
                        }
                        else if (maTheArray[2] == '4') {
                            theBHYT.MucHuong = 80;
                        }
                        else {
                            theBHYT.MucHuong = 100;
                        }
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById('barcodeActive');
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                        this.isScanF1 = true;
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.onKeyScanner = function (event) {
                    if (event.keyCode === 9) {
                        this.HoVaTenTextbox.focus();
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.blurMaNoiDKBD = function (theBHYT) {
                    this.setNoiDKBD(theBHYT);
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.onKeyMaNoiDKBD = function (event, theBHYT) {
                    if (event.keyCode === 13) {
                        this.setNoiDKBD(theBHYT);
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.onChangeMaNoiDKBD = function (event, theBHYT) {
                    var self = this;
                    clearTimeout(self.timeoutNoiDKBD);
                    self.timeoutNoiDKBD = setTimeout(function () {
                        self.setNoiDKBD(theBHYT);
                    }, 1000);
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.setNoiDKBD = function (theBHYT) {
                    this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + theBHYT.MaDKBD).subscribe(function (resultData) {
                        theBHYT.NoiDangKyBHYT = resultData;
                    }, function () {
                        //return null;
                        //console.log("error")
                    });
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.blurDiaChi = function (diaChi) {
                    this.setDiaChiBHYTForModel(diaChi);
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.onKeyDiaChi = function ($event, diaChi) {
                    if ($event.keyCode === 13) {
                        this.setDiaChiBHYTForModel(diaChi);
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.setDiaChiBHYTForModel = function (diaChi) {
                    var _this = this;
                    var self = this;
                    if (diaChi == null || diaChi == undefined) {
                        this.tiepNhanBenhNhan.TinhThanhId = null;
                        this.tiepNhanBenhNhan.QuanHuyenId = null;
                        this.tiepNhanBenhNhan.PhuongXaId = null;
                        this.tiepNhanBenhNhan.DiaChi = null;
                        return;
                    }
                    var lstDiaChi = diaChi.split(",");
                    if (lstDiaChi.length < 3)
                        return;
                    var tinhThanhPho = lstDiaChi[lstDiaChi.length - 1].trim();
                    var quanHuyen = lstDiaChi[lstDiaChi.length - 2].trim();
                    var phuongXa = lstDiaChi[lstDiaChi.length - 3].trim();
                    var soNha = null;
                    if (lstDiaChi.length >= 4) {
                        var index = diaChi.indexOf(lstDiaChi[lstDiaChi.length - 3]);
                        soNha = diaChi.slice(0, index - 1);
                    }
                    var model = new _tiep_nhan_benh_nhan_tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_23__["DiaChiBHYT"]();
                    model.TinhThanh = tinhThanhPho;
                    model.QuanHuyen = quanHuyen;
                    model.PhuongXa = phuongXa;
                    this.apiService.post("TiepNhanBenhNhan/GetDiaChiBHYT", model).subscribe(function (resultData) {
                        //cheat cho combobox hoat dong
                        _this.tiepNhanBenhNhan.PhuongXaId = null;
                        _this.tiepNhanBenhNhan.QuanHuyenId = null;
                        _this.tiepNhanBenhNhan.TinhThanhId = null;
                        setTimeout(function () {
                            self.tiepNhanBenhNhan.PhuongXaId = resultData.PhuongXaId;
                            self.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                            self.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                            self.tiepNhanBenhNhan.DiaChi = soNha;
                            if (self.under6yearsold) {
                                self.cloneDiaChiNguoiGiamHo();
                            }
                        }, 500);
                        _this.tiepNhanBenhNhan.DiaChi = soNha;
                    }, function () {
                        //return null;
                        //console.log("error")
                    });
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.close = function (result) {
                    if (result === void 0) { result = null; }
                    this.dialogRef.close(result);
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.focusElementById = function (tagId) {
                    var $focused = jQuery('#' + tagId).find(".k-input");
                    jQuery(".k-input").blur();
                    setTimeout(function () {
                        if ($focused.length > 0) {
                            $focused.focus();
                        }
                    }, 100);
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.getThongTinTheBHYT = function (theBHYT, index) {
                    var _this = this;
                    if (theBHYT.MaSoThe
                        && this.tiepNhanBenhNhan.HoTen
                        && (this.tiepNhanBenhNhan.NamSinh != null || this.tiepNhanBenhNhan.NgayThangNamSinh != null)
                        && !this.tiepNhanBenhNhan.TuNhap) {
                        this.showPopupLoadingData();
                        var thongTinBenhNhan = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_19__["ThongTinBenhNhanTimKiemBHYT"](theBHYT.MaSoThe, this.tiepNhanBenhNhan.HoTen, this.tiepNhanBenhNhan.NgayThangNamSinh, null, this.tiepNhanBenhNhan.NamSinh);
                        this.apiService
                            .post("BHYT/GetLichSuKhamChuaBenh", thongTinBenhNhan)
                            .subscribe(function (resultData) {
                            if (resultData == null || (resultData != null && resultData.maKetQua == "050")) {
                                _this.notificationService.showError('Thẻ BHYT này không tồn tại');
                                _this.clearThongTinTheBHYT(theBHYT);
                                // let dialogRef = this.dialog.open(TiepNhanBenhNhanErrorComponent, {
                                //   disableClose: false,
                                //   width: '700px',
                                //   height: '300px',
                                //   data: this.tiepNhanBenhNhan,
                                // });
                                // dialogRef.afterClosed().subscribe(result => {
                                //   if (result == 2) {
                                //     theBHYT.IsCheckedBHYT = null;
                                //     theBHYT.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                                //     this.tiepNhanBenhNhan.TuNhap = true;
                                //   }
                                //   else if (result == 1) {
                                //     theBHYT.CoBHYT = false;
                                //     theBHYT.TinhTrangThe = TinhTrangThe.KhongXacDinh;
                                //     theBHYT.IsCheckedBHYT = false;
                                //   }
                                //   else if (result != undefined) {
                                //     this.setValueBHYT(result);
                                //   }
                                // });
                                theBHYT.IsChange = false;
                                _this.isLoadingDataBHYT = false;
                                _this.closePopupLoadingData(src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_24__["EnumTypeComponent"].KTextBox, 'SoTheBHYT' + index);
                            }
                            else {
                                theBHYT.IsCheckedBHYT = _this.IsCheckBHYT = true;
                                theBHYT.MaDKBD = resultData.maDKBD;
                                theBHYT.DiaChi = resultData.diaChi;
                                theBHYT.CoQuanBHXH = resultData.cqBHXH;
                                theBHYT.MaKhuVuc = resultData.maKV;
                                // this.tiepNhanBenhNhan.BHYTNgayHieuLuc = resultData.gtTheTu;
                                // this.tiepNhanBenhNhan.BHYTNgayHetHan = resultData.gtTheDen;
                                theBHYT.NgayHieuLuc = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].FormatDateStringToDate(resultData.gtTheTu);
                                theBHYT.NgayHetHan = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].FormatDateStringToDate(resultData.gtTheDen);
                                _this.changeNgayHetHan(theBHYT.NgayHetHan, theBHYT);
                                // if (theBHYT.NgayHetHan > new Date()) {
                                //   theBHYT.DisabledGiaHanView = true;
                                //   theBHYT.DisableGiaHanThe = true;
                                //   //if(theBHYT.Id == 0)
                                //   //{
                                //     theBHYT.DuocGiaHanThe = null;
                                //   //}
                                //   theBHYT.TinhTrangThe = TinhTrangThe.ConHieuLuc;
                                // }
                                // else{
                                //   theBHYT.DisabledGiaHanView = false;
                                //   theBHYT.DisableGiaHanThe = false;
                                // }
                                // if (theBHYT.NgayHetHan >= new Date()) {
                                //   theBHYT.TinhTrangThe = TinhTrangThe.ConHieuLuc;
                                // }
                                // else {
                                //   theBHYT.TinhTrangThe = TinhTrangThe.HetHieuLuc;
                                // }
                                theBHYT.NgayDu5Nam = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].FormatDateStringToDate(resultData.ngayDu5Nam);
                                if (theBHYT.MaDKBD != null && theBHYT.MaDKBD != "") {
                                    _this.setNoiDKBD(theBHYT);
                                }
                                theBHYT.IsChange = false;
                                _this.isLoadingDataBHYT = false;
                                _this.closePopupLoadingData();
                            }
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.clearThongTinTheBHYT(theBHYT);
                            theBHYT.IsChange = false;
                            _this.isLoadingDataBHYT = false;
                            _this.closePopupLoadingData(src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_24__["EnumTypeComponent"].KTextBox, 'SoTheBHYT' + index);
                        });
                    }
                    else {
                        this.isLoadingDataBHYT = false;
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.clearThongTinTheBHYT = function (theBHYT) {
                    theBHYT.IsCheckedBHYT = false;
                    theBHYT.MaDKBD = null;
                    theBHYT.DiaChi = null;
                    theBHYT.CoQuanBHXH = null;
                    theBHYT.MaKhuVuc = null;
                    theBHYT.NgayHieuLuc = null;
                    theBHYT.NgayHetHan = null;
                    theBHYT.TinhTrangThe = null;
                    theBHYT.NgayDu5Nam = null;
                    theBHYT.NoiDangKyBHYT = null;
                    theBHYT.MucHuong = null;
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.changeThongTinGetBHYT = function (event, theBHYT, isLoadingDataBHYT, index) {
                    var self = this;
                    self.bindMucHuongFromSoTheBHYT(theBHYT.MaSoThe, theBHYT);
                    if (!isLoadingDataBHYT && theBHYT.IsChange) {
                        self.isLoadingDataBHYT = true;
                        theBHYT.IsCheckedBHYT = null;
                        clearTimeout(self.timeout);
                        self.timeout = setTimeout(function () {
                            self.getThongTinTheBHYT(theBHYT, index);
                        }, 1000);
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.onKeySoTheBHYT = function (event, theBHYT, isLoadingDataBHYT, index) {
                    if (event.keyCode == 13) {
                        this.changeThongTinGetBHYT(event, theBHYT, isLoadingDataBHYT, index);
                        this.HoVaTenTextbox.focus();
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.changeSoTheBHYT = function ($event, theBHYT) {
                    if (!this.tiepNhanBenhNhan.TuNhap) {
                        theBHYT.IsChange = true;
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.TinhThanhPhoChange = function (event) {
                    if (event == undefined || event == null) {
                        // this.tiepNhanBenhNhan.TinhThanhId = event;
                        this.tiepNhanBenhNhan.QuanHuyenId = null;
                        this.tiepNhanBenhNhan.PhuongXaId = null;
                    }
                    if (this.under6yearsold) {
                        this.cloneDiaChiNguoiGiamHo();
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.QuanHuyenChange = function (event) {
                    if (event == undefined || event == null) {
                        // this.tiepNhanBenhNhan.QuanHuyenId = event;
                        this.tiepNhanBenhNhan.PhuongXaId = null;
                    }
                    if (this.under6yearsold) {
                        this.cloneDiaChiNguoiGiamHo();
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.PhuongXaChange = function ($event) {
                    var _this = this;
                    this.tiepNhanBenhNhan.PhuongXaId = $event;
                    if ($event != null && $event != undefined) {
                        this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(function (resultData) {
                            _this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
                            _this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
                            _this.comboboxQuanHuyen.getDataForLookup();
                        }, function (err) {
                        });
                    }
                    else {
                        this.tiepNhanBenhNhan.TinhThanhId = null;
                        this.tiepNhanBenhNhan.QuanHuyenId = null;
                    }
                    if (this.under6yearsold) {
                        this.cloneDiaChiNguoiGiamHo();
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                    else if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 == true) {
                        event.preventDefault();
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.changeBoxCoTheBHYT = function (event) {
                    var _this = this;
                    this.clearValidationBHYT();
                    if (!event) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có chắc chắn muốn xóa tất cả thẻ BHYT của người bệnh?"
                            },
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs = [];
                                _this.files = [];
                            }
                            else {
                                _this.tiepNhanBenhNhan.CoBHYT = true;
                            }
                        });
                    }
                    else {
                        this.themTheBHYT();
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.clearValidationBHYT = function () {
                    if (this.validationErrors != undefined && this.validationErrors.length != 0) {
                        this.validationErrors = this.validationErrors.filter(function (x) { return x.Field != "BHYTMaSoThe" && x.Field != "BHYTMaDKBD"
                            && x.Field != "NoiDangKyBHYT" && x.Field != "BHYTMucHuong"
                            && x.Field != "BHYTDiaChi" && x.Field != "BHYTNgayHieuLuc"
                            && x.Field != "BHYTNgayHetHan"; });
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.ThongTinBenhNhanNgaySinhChange = function (event) {
                    if (this.tiepNhanBenhNhan.NgayThangNamSinh != null) {
                        this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
                    }
                    if (event == null || event == undefined) {
                        this.under6yearsold = false;
                        this.tiepNhanBenhNhan.NamSinh = null;
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.ngayCoHieuLucChange = function (event, theBHYT) {
                    if (event != null && event != undefined) {
                        var dateFormat = new Date(event);
                        theBHYT.NgayHetHan = new Date(dateFormat.getFullYear() + 1, dateFormat.getMonth(), dateFormat.getDate());
                        this.changeNgayHetHan(theBHYT.NgayHetHan, theBHYT);
                    }
                    else {
                        theBHYT.NgayHetHan = null;
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.themTheBHYT = function () {
                    var _this = this;
                    // let newYeuCauTiepNhanTheBHYT = new YeuCauTiepNhanTheBHYT();
                    // newYeuCauTiepNhanTheBHYT.BenhNhanId = this.tiepNhanBenhNhan.BenhNhanId;
                    // this.files.push(null);
                    // this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs.push(newYeuCauTiepNhanTheBHYT);
                    this.showPopupLoadingData();
                    this.apiService
                        .post("DieuTriNoiTru/KiemTraValidationListTheBHYT", this.tiepNhanBenhNhan)
                        .subscribe(function (resultData) {
                        var newYeuCauTiepNhanTheBHYT = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_19__["YeuCauTiepNhanTheBHYT"]();
                        newYeuCauTiepNhanTheBHYT.BenhNhanId = _this.tiepNhanBenhNhan.BenhNhanId;
                        _this.files.push(null);
                        _this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs.push(newYeuCauTiepNhanTheBHYT);
                        _this.closePopupLoadingData();
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.xoaTheBHYT = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn xóa tất thẻ BHYT này của người bệnh?"
                        },
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            var index = _this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs.findIndex(function (x) { return x == dataItem; });
                            if (index !== -1) {
                                _this.tiepNhanBenhNhan.YeuCauTiepNhanTheBHYTs.splice(index, 1);
                                _this.files.splice(index, 1);
                            }
                        }
                    });
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.uploadFileDone = function (event, dataItem) {
                    dataItem.GiayMienCungChiTra = event;
                    this.cdRef.detectChanges();
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.changeNgayHetHan = function (event, theBHYT, isFirstLoad) {
                    if (isFirstLoad === void 0) { isFirstLoad = false; }
                    var dateFormat = new Date();
                    var currentDate = new Date(dateFormat.getFullYear(), dateFormat.getMonth(), dateFormat.getDate());
                    var ngayHetHan = new Date(event);
                    var ngayHetHanDate = new Date(ngayHetHan.getFullYear(), ngayHetHan.getMonth(), ngayHetHan.getDate());
                    if (currentDate > ngayHetHanDate) {
                        theBHYT.IsQuaHanTheBHYT = true;
                    }
                    else {
                        theBHYT.IsQuaHanTheBHYT = false;
                    }
                    if (ngayHetHanDate > currentDate) {
                        theBHYT.DisabledGiaHanView = true;
                        if (!isFirstLoad)
                            theBHYT.DisableGiaHanThe = true;
                        // if(theBHYT.Id == 0)
                        // {
                        theBHYT.DuocGiaHanThe = null;
                        //}
                    }
                    else {
                        theBHYT.DisabledGiaHanView = false;
                        if (!isFirstLoad)
                            theBHYT.DisableGiaHanThe = false;
                    }
                    if (ngayHetHanDate >= currentDate) {
                        theBHYT.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_22__["TinhTrangThe"].ConHieuLuc;
                    }
                    else {
                        theBHYT.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_22__["TinhTrangThe"].HetHieuLuc;
                    }
                };
                // công ty BHTN
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.congTyBaoHiemChange = function (event) {
                    if (event != undefined && event != null) {
                        this.themBaoHiemTuNhanModel.DiaChi = event.DiaChi;
                        this.themBaoHiemTuNhanModel.SoDienThoai = event.SoDienThoai;
                        this.themBaoHiemTuNhanModel.TenCongTyBaoHiemTuNhan = event.DisplayName;
                    }
                    else {
                        this.themBaoHiemTuNhanModel.DiaChi = null;
                        this.themBaoHiemTuNhanModel.SoDienThoai = null;
                        this.themBaoHiemTuNhanModel.TenCongTyBaoHiemTuNhan = null;
                    }
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.clearThemBHTN = function () {
                    this.themBaoHiemTuNhanModel = new _tiep_nhan_noi_tru_model__WEBPACK_IMPORTED_MODULE_19__["ThongTinBaoHiemTuNhan"]();
                    this.indexItemBHTNUpdate = null;
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.huyBHTN = function () {
                    this.isUpdateGrid = false;
                    this.clearThemBHTN();
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.checkValidAddBHTN = function (id) {
                    var itemByIndex = this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans[this.indexItemBHTNUpdate];
                    var model = this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans
                        .find(function (obj) { return (itemByIndex == undefined || obj != itemByIndex)
                        && obj.CongTyBaoHiemTuNhanId == id; });
                    return model == undefined;
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.ThemBHTN = function () {
                    var _this = this;
                    //KiemTraThemCongTyBHTN
                    this.validationCongTyBHTNErrors = [];
                    this.apiService.post("DieuTriNoiTru/KiemTraThemCongTyBHTN", this.themBaoHiemTuNhanModel).subscribe(function (resultData) {
                        var isValid = _this.checkValidAddBHTN(_this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
                        if (isValid == false) {
                            _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["TiepNhanBenhNhanMessage"].MessageThemBHTN);
                        }
                        else {
                            _this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans.push(_this.themBaoHiemTuNhanModel);
                            _this.clearThemBHTN();
                        }
                    }, function (err) {
                        if (err != undefined && err.ValidationErrors != null) {
                            _this.validationCongTyBHTNErrors = err.ValidationErrors;
                        }
                        else {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.SuaBHTN = function (dataItem, index) {
                    this.isUpdateGrid = true;
                    this.themBaoHiemTuNhanModel = Object.assign({}, dataItem);
                    this.indexItemBHTNUpdate = index;
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.LuuBHTN = function () {
                    var _this = this;
                    this.validationCongTyBHTNErrors = null;
                    this.apiService.post("DieuTriNoiTru/KiemTraThemCongTyBHTN", this.themBaoHiemTuNhanModel).subscribe(function (resultData) {
                        var isValid = _this.checkValidAddBHTN(_this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
                        if (isValid == false) {
                            _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["TiepNhanBenhNhanMessage"].MessageThemBHTN);
                        }
                        else {
                            var item = _this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans[_this.indexItemBHTNUpdate];
                            if (item != undefined && item != null) {
                                _this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans[_this.indexItemBHTNUpdate] = Object.assign({}, _this.themBaoHiemTuNhanModel);
                            }
                            _this.clearThemBHTN();
                        }
                    }, function (err) {
                        if (err != undefined && err.ValidationErrors != null) {
                            _this.validationCongTyBHTNErrors = err.ValidationErrors;
                        }
                        else {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.xoaCongTyBHTN = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có chắc chắn muốn xóa công ty bảo hiểm tư nhân này không?"
                        },
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            var index = _this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans.findIndex(function (x) { return x == dataItem; });
                            if (index != -1) {
                                _this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans.splice(index, 1);
                            }
                        }
                    });
                };
                TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype.changeCoBaoHiemTuNhan = function (event) {
                    var _this = this;
                    if (!event) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có chắc chắn muốn xóa công ty bảo hiểm tư nhân này không?"
                            },
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                _this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans = [];
                            }
                            else {
                                _this.tiepNhanBenhNhan.CoBHTN = true;
                            }
                        });
                    }
                };
                return TiepNhanNoiTruThongTinDoiTuongPopupComponent;
            }());
            TiepNhanNoiTruThongTinDoiTuongPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('HoVaTenTextbox', { static: false })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "HoVaTenTextbox", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxQuanHuyen', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "comboboxQuanHuyen", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxPhuongXa', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "comboboxPhuongXa", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cboQuanHuyenNguoiLienHe', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "cboQuanHuyenNguoiLienHe", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tuNgayTemplate', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "tuNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('denNgayTemplate', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "denNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhapTemplate', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "ngayNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianMienDongChiTraTemplate', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "thoiGianMienDongChiTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaHanTheTemplate', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "giaHanTheTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHieuLucTemplate', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "ngayHieuLucTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDenHanTemplate', { static: true })
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "ngayDenHanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent.prototype, "keyEvent", null);
            TiepNhanNoiTruThongTinDoiTuongPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiep-nhan-noi-tru-thong-tin-doi-tuong-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TiepNhanNoiTruThongTinDoiTuongPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.module.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.module.ts ***!
          \*********************************************************************************************/
        /*! exports provided: TiepNhanNoiTruModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruModule", function () { return TiepNhanNoiTruModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _tiep_nhan_noi_tru_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiep-nhan-noi-tru-routing.module */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-routing.module.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_list_tiep_nhan_noi_tru_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_benh_an_popup_tiep_nhan_noi_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_chi_dinh_popup_tiep_nhan_noi_tru_chi_dinh_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_so_do_giuong_popup_tiep_nhan_noi_tru_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component.ts");
            /* harmony import */ var _tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _tiep_nhan_noi_tru_huy_nhap_vien_popup_tiep_nhan_noi_tru_huy_nhap_vien_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component.ts");
            /* harmony import */ var _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../kham-benh/kham-benh.module */ "./src/app/modules/main/kham-benh/kham-benh.module.ts");
            var TiepNhanNoiTruModule = /** @class */ (function () {
                function TiepNhanNoiTruModule() {
                }
                return TiepNhanNoiTruModule;
            }());
            TiepNhanNoiTruModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _tiep_nhan_noi_tru_list_tiep_nhan_noi_tru_list_component__WEBPACK_IMPORTED_MODULE_4__["TiepNhanNoiTruListComponent"],
                        _tiep_nhan_noi_tru_benh_an_popup_tiep_nhan_noi_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_5__["TiepNhanNoiTruBenhAnPopupComponent"],
                        _tiep_nhan_noi_tru_chi_dinh_popup_tiep_nhan_noi_tru_chi_dinh_popup_component__WEBPACK_IMPORTED_MODULE_6__["TiepNhanNoiTruChiDinhPopupComponent"],
                        _tiep_nhan_noi_tru_so_do_giuong_popup_tiep_nhan_noi_tru_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_7__["TiepNhanNoiTruSoDoGiuongPopupComponent"],
                        _tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_component__WEBPACK_IMPORTED_MODULE_8__["TiepNhanNoiTruThongTinDoiTuongPopupComponent"], _tiep_nhan_noi_tru_huy_nhap_vien_popup_tiep_nhan_noi_tru_huy_nhap_vien_popup_component__WEBPACK_IMPORTED_MODULE_21__["TiepNhanNoiTruHuyNhapVienPopupComponent"]
                    ],
                    exports: [
                        _tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_component__WEBPACK_IMPORTED_MODULE_8__["TiepNhanNoiTruThongTinDoiTuongPopupComponent"],
                        _tiep_nhan_noi_tru_so_do_giuong_popup_tiep_nhan_noi_tru_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_7__["TiepNhanNoiTruSoDoGiuongPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _tiep_nhan_noi_tru_routing_module__WEBPACK_IMPORTED_MODULE_3__["TiepNhanNoiTruRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_11__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_17__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                        _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_22__["KhamBenhModule"]
                    ],
                    entryComponents: [
                        _tiep_nhan_noi_tru_benh_an_popup_tiep_nhan_noi_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_5__["TiepNhanNoiTruBenhAnPopupComponent"],
                        _tiep_nhan_noi_tru_chi_dinh_popup_tiep_nhan_noi_tru_chi_dinh_popup_component__WEBPACK_IMPORTED_MODULE_6__["TiepNhanNoiTruChiDinhPopupComponent"],
                        _tiep_nhan_noi_tru_so_do_giuong_popup_tiep_nhan_noi_tru_so_do_giuong_popup_component__WEBPACK_IMPORTED_MODULE_7__["TiepNhanNoiTruSoDoGiuongPopupComponent"],
                        _tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_tiep_nhan_noi_tru_thong_tin_doi_tuong_popup_component__WEBPACK_IMPORTED_MODULE_8__["TiepNhanNoiTruThongTinDoiTuongPopupComponent"],
                        _tiep_nhan_noi_tru_huy_nhap_vien_popup_tiep_nhan_noi_tru_huy_nhap_vien_popup_component__WEBPACK_IMPORTED_MODULE_21__["TiepNhanNoiTruHuyNhapVienPopupComponent"]
                    ]
                })
            ], TiepNhanNoiTruModule);
            /***/ 
        }),
        /***/ "./src/app/shared/enum/dieu-tri-noi-tru.enum.ts": 
        /*!******************************************************!*\
          !*** ./src/app/shared/enum/dieu-tri-noi-tru.enum.ts ***!
          \******************************************************/
        /*! exports provided: GiamCan, SoKgGiam, AnUongKem, TinhTrangBenhLyNang, KeHoachDinhDuong, TocDoTangCan, BenhKemTheo, LoaiBenhAn */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiamCan", function () { return GiamCan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoKgGiam", function () { return SoKgGiam; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnUongKem", function () { return AnUongKem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinhTrangBenhLyNang", function () { return TinhTrangBenhLyNang; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeHoachDinhDuong", function () { return KeHoachDinhDuong; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocDoTangCan", function () { return TocDoTangCan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhKemTheo", function () { return BenhKemTheo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiBenhAn", function () { return LoaiBenhAn; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            //#region Phiếu sàng lọc dinh dưỡng
            var GiamCan;
            (function (GiamCan) {
                GiamCan[GiamCan["Khong"] = 0] = "Khong";
                GiamCan[GiamCan["KhongRo"] = 1] = "KhongRo";
            })(GiamCan || (GiamCan = {}));
            var SoKgGiam;
            (function (SoKgGiam) {
                SoKgGiam[SoKgGiam["MotDenNamKg"] = 0] = "MotDenNamKg";
                SoKgGiam[SoKgGiam["SauDenMuoiKg"] = 1] = "SauDenMuoiKg";
                SoKgGiam[SoKgGiam["MuoiMotDenMuoiLamKg"] = 2] = "MuoiMotDenMuoiLamKg";
                SoKgGiam[SoKgGiam["MuoiLamKgTroLen"] = 3] = "MuoiLamKgTroLen";
                SoKgGiam[SoKgGiam["KhongRoSoKgGiam"] = 4] = "KhongRoSoKgGiam";
            })(SoKgGiam || (SoKgGiam = {}));
            var AnUongKem;
            (function (AnUongKem) {
                AnUongKem[AnUongKem["Khong"] = 0] = "Khong";
                AnUongKem[AnUongKem["Co"] = 1] = "Co";
            })(AnUongKem || (AnUongKem = {}));
            var TinhTrangBenhLyNang;
            (function (TinhTrangBenhLyNang) {
                TinhTrangBenhLyNang[TinhTrangBenhLyNang["Khong"] = 0] = "Khong";
                TinhTrangBenhLyNang[TinhTrangBenhLyNang["PhauThuatDacBiet"] = 1] = "PhauThuatDacBiet";
                TinhTrangBenhLyNang[TinhTrangBenhLyNang["GhepTangViemPhucMac"] = 2] = "GhepTangViemPhucMac";
                TinhTrangBenhLyNang[TinhTrangBenhLyNang["PhuBangBungViemTuyCap"] = 3] = "PhuBangBungViemTuyCap";
                TinhTrangBenhLyNang[TinhTrangBenhLyNang["GiamAn"] = 4] = "GiamAn";
            })(TinhTrangBenhLyNang || (TinhTrangBenhLyNang = {}));
            var KeHoachDinhDuong;
            (function (KeHoachDinhDuong) {
                KeHoachDinhDuong[KeHoachDinhDuong["DuongMieng"] = 0] = "DuongMieng";
                KeHoachDinhDuong[KeHoachDinhDuong["QuaOngThong"] = 1] = "QuaOngThong";
                KeHoachDinhDuong[KeHoachDinhDuong["QuaTinhMach"] = 2] = "QuaTinhMach";
            })(KeHoachDinhDuong || (KeHoachDinhDuong = {}));
            var TocDoTangCan;
            (function (TocDoTangCan) {
                TocDoTangCan[TocDoTangCan["TheoKhuyenNghi"] = 0] = "TheoKhuyenNghi";
                TocDoTangCan[TocDoTangCan["TrenDuoiMucKhuyenNghi"] = 1] = "TrenDuoiMucKhuyenNghi";
            })(TocDoTangCan || (TocDoTangCan = {}));
            var BenhKemTheo;
            (function (BenhKemTheo) {
                BenhKemTheo[BenhKemTheo["Khong"] = 0] = "Khong";
                BenhKemTheo[BenhKemTheo["TangHuyetAp"] = 1] = "TangHuyetAp";
            })(BenhKemTheo || (BenhKemTheo = {}));
            //#endregion
            var LoaiBenhAn;
            (function (LoaiBenhAn) {
                LoaiBenhAn[LoaiBenhAn["NoiKhoa"] = 1] = "NoiKhoa";
                LoaiBenhAn[LoaiBenhAn["NhiKhoa"] = 2] = "NhiKhoa";
                LoaiBenhAn[LoaiBenhAn["PhuKhoa"] = 3] = "PhuKhoa";
                LoaiBenhAn[LoaiBenhAn["SanKhoaMo"] = 4] = "SanKhoaMo";
                LoaiBenhAn[LoaiBenhAn["SanKhoaThuong"] = 5] = "SanKhoaThuong";
                LoaiBenhAn[LoaiBenhAn["NgoaiKhoa"] = 6] = "NgoaiKhoa";
                LoaiBenhAn[LoaiBenhAn["ThamMy"] = 7] = "ThamMy";
                LoaiBenhAn[LoaiBenhAn["TreSoSinh"] = 8] = "TreSoSinh";
            })(LoaiBenhAn || (LoaiBenhAn = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~ab4e0e57-es2015.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~ab4e0e57-es5.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~ab4e0e57-es5.js.map