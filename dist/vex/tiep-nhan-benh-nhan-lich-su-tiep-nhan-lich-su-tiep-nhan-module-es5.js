var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiep-nhan-benh-nhan-lich-su-tiep-nhan-lich-su-tiep-nhan-module"], {
        /***/ "./node_modules/@iconify/icons-ic/edit.js": 
        /*!************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/edit.js ***!
          \************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tai-kham/lich-su-tai-kham.component.html": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tai-kham/lich-su-tai-kham.component.html ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>lich-su-tai-kham works!</p> -->\n\n<app-grid baseRoute=\"/danh-sanh-tiep-nhan\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n    [useAddDeault]=\"false\" [useHeaderDefault]=\"true\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n    [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\"\n    [additionalSearchString]=\"benhNhanId\" [autoHeight]=true>\n</app-grid>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Tiếp Nhận Người Bệnh',Path:''}\n                    ,{Title:'Lịch Sử Tiếp Nhận',Path:'/lich-su-tiep-nhan', queryParams: {holdQuery : true}}\n                    ,{Title:'Chi Tiết Yêu Cầu Tiếp Nhận',Path:'',Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div @fadeInUp class=\"overflow-auto -mt-15\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <h3 style=\"display: flex; align-items: flex-end;\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông\n                                Tin Bảo Hiểm Y Tế &nbsp;\n                                <app-checkbox [(model)]=\"tiepNhanBenhNhan.CoBHYT\" id=\"CheckboxIsHaveBHYT\"\n                                    [disabled]=\"true\" label=\"Có\">\n                                </app-checkbox>&nbsp;&nbsp;&nbsp;&nbsp;\n                                <app-checkbox [(model)]=\"tiepNhanBenhNhan.TuNhap\" id=\"TuNhap\" [disabled]=\"true\"\n                                    label=\"Nhập tay\">\n                                </app-checkbox>\n                            </h3>\n\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\" *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\">\n                                <div fxFlex=\"20%\" fxFlex.sm=\"20%\" style=\"position: relative;\">\n                                    <app-textbox id=\"SoTheBHYT\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Số thẻ BHYT\"\n                                        [(model)]=\"tiepNhanBenhNhan.BHYTMaSoThe\" [isAutoFocus]=\"true\" [disabled]=\"true\"\n                                        [required]=\"true\"\n                                        [validationerror]=\"'BHYTMaSoThe' | validationerror:validationErrors\">\n                                    </app-textbox>\n\n                                    <button [disabled]=\"true\" style=\"position: absolute;right: 21px;margin-top: 10px;\"\n                                        color=\"primary\" mat-mini-fab type=\"button\" kendoTooltip\n                                        title=\"Quét mã vạch thẻ BHYT\">\n                                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                    </button>\n                                </div>\n\n                                <app-textbox id=\"BHYTMaDKBD\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mã nơi ĐKBH\"\n                                    maxlength=\"200\" [(model)]=\"tiepNhanBenhNhan.BHYTMaDKBD\" [required]=\"true\"\n                                    [disabled]=\"true\"\n                                    [validationerror]=\"'BHYTMaDKBD' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <app-textbox id=\"NoiDangKyBHYT\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nơi ĐKBH\"\n                                    maxlength=\"200\" [(model)]=\"tiepNhanBenhNhan.NoiDangKyBHYT\" [required]=\"true\"\n                                    [disabled]=\"true\"\n                                    [validationerror]=\"'NoiDangKyBHYT' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <app-textboxnumeric [(model)]=\"tiepNhanBenhNhan.BHYTMucHuong\" id=\"BHYTMucHuong\"\n                                    fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Mức hưởng (%)\" format=\"0\" [required]=\"true\"\n                                    [disabled]=\"true\"\n                                    [validationerror]=\"'BHYTMucHuong' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n\n                                <app-textbox id=\"BHYTDiaChi\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Địa chỉ\"\n                                    maxlength=\"200\" [(model)]=\"tiepNhanBenhNhan.BHYTDiaChi\" [required]=\"true\"\n                                    [disabled]=\"true\"\n                                    [validationerror]=\"'BHYTDiaChi' | validationerror:validationErrors\">\n                                </app-textbox>\n\n                                <app-radio id=\"LyDoVaoVien\" label=\"Tuyến khám\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                    [(model)]=\"tiepNhanBenhNhan.LyDoVaoVien\" [disabled]=\"true\"\n                                    [items]=\"[{Value:1,Text:'Đúng tuyến'},{Value:3,Text:'Trái tuyến'}]\">\n                                </app-radio>\n\n                                <app-datepicker id=\"BHYTNgayHieuLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [disabled]=\"true\"\n                                    label=\"Ngày có hiệu lực\" [(model)]=\"tiepNhanBenhNhan.BHYTNgayHieuLuc\"\n                                    [required]=\"true\"\n                                    [validationerror]=\"'BHYTNgayHieuLuc' | validationerror:validationErrors\">\n                                </app-datepicker>\n\n                                <app-datepicker id=\"BHYTNgayHetHan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [disabled]=\"true\"\n                                    label=\"Ngày hết hiệu lực\" [(model)]=\"tiepNhanBenhNhan.BHYTNgayHetHan\"\n                                    [required]=\"true\"\n                                    [validationerror]=\"'BHYTNgayHetHan' | validationerror:validationErrors\">\n                                </app-datepicker>\n\n                                <app-datepicker id=\"BHYTNgayDu5Nam\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [disabled]=\"true\"\n                                    label=\"Ngày đủ 5 năm\" [(model)]=\"tiepNhanBenhNhan.BHYTNgayDu5Nam\">\n                                </app-datepicker>\n\n                            </div>\n\n                        </div>\n\n                        <div style=\"height: 30px;\">\n\n                        </div>\n\n                        <div id=\"test\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                            fxLayoutGap.lt-sm=\"0\">\n                            <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Hành Chính\n                                <span class=\"thong-tin-tai-khoan-benh-nhan\">\n                                    Mã TN: <span style=\"font-weight: bold;\">{{tiepNhanBenhNhan.MaYeuCauTiepNhan}}\n                                    </span> - Mã NB:\n                                    <span style=\"font-weight: bold;\">{{tiepNhanBenhNhan.BenhNhan.MaBN}}</span>\n                                </span>\n\n                            </h3>\n                            <app-textbox id=\"HoTen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Họ và tên\"\n                                [(model)]=\"tiepNhanBenhNhan.HoTen\" maxlength=\"100\"  [upperCase]=\"true\"\n                                [disabled]=\"tiepNhanBenhNhan.CoBHYT == true && tiepNhanBenhNhan.BHYTMucHuong != null\"\n                                [required]=\"true\" [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n                                <!-- (blurChange)=\"blur($event, false)\" -->\n                            </app-textbox>\n\n                            <app-datepicker *ngIf=\"tiepNhanBenhNhan.CoBHYT == true\" id=\"NgaySinh\" fxFlex=\"13%\"\n                                fxFlex.sm=\"13%\" label=\"Ngày sinh\" [disabled]=\"true\"\n                                [(model)]=\"tiepNhanBenhNhan.NgayThangNamSinh\" [required]=\"true\"\n                                [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n                            <app-datepicker *ngIf=\"tiepNhanBenhNhan.CoBHYT != true\" id=\"NgaySinh\" fxFlex=\"13%\"\n                                fxFlex.sm=\"13%\" label=\"Ngày sinh\" [(model)]=\"tiepNhanBenhNhan.NgayThangNamSinh\"\n                                [disabled]=\"true\"\n                                [validationerror]=\"'NgayThangNamSinh' | validationerror:validationErrors\">\n                            </app-datepicker>\n\n                            <app-textboxnumeric [(model)]=\"tiepNhanBenhNhan.NamSinh\" id=\"Numerictextbox\" fxFlex=\"7%\"\n                                [disabled]=\"true\" fxFlex.sm=\"7%\" label=\"Năm sinh\" format=\"0\">\n                            </app-textboxnumeric>\n\n                            <span class=\"so-tuoi\" *ngIf=\"under6yearsold\" fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                                Số tuổi: &nbsp; <strong>{{soTuoiDisplay}}</strong>\n                            </span>\n\n                            <app-textboxmask id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số điện thoại\"\n                                [disabled]=\"true\" onlynumber=\"true\" maxlength=\"10\"\n                                [(model)]=\"tiepNhanBenhNhan.SoDienThoai\" mask=\"000 000 0000\">\n                            </app-textboxmask>\n\n\n\n                            <!-- <app-textbox *ngIf=\"under6yearsold\" id=\"SoTuoi\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                label=\"Số tuổi\" [disabled]=\"true\" [(model)]=\"soTuoiDisplay\">\n                            </app-textbox> -->\n\n\n                            <app-dropdownlist id=\"Dropdownlist\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Giới tính\"\n                                [disabled]=\"true\" url=\"TiepNhanBenhNhan/GetGioiTinh\"\n                                [(model)]=\"tiepNhanBenhNhan.GioiTinh\" bind=\"true\"\n                                [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n                            </app-dropdownlist>\n\n                            <app-combobox id=\"NgheNghiep\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề Nghiệp\" bind=\"true\"\n                                [disabled]=\"true\" url=\"TiepNhanBenhNhan/GetNgheNghiep\"\n                                [(model)]=\"tiepNhanBenhNhan.NgheNghiepId\">\n                            </app-combobox>\n\n                            <app-combobox id=\"GetQuocTich\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quốc tịch\" bind=\"true\"\n                                [disabled]=\"true\" url=\"TiepNhanBenhNhan/GetQuocTich\"\n                                [(model)]=\"tiepNhanBenhNhan.QuocTichId\">\n                            </app-combobox>\n\n                            <app-combobox id=\"TinhThanhPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" bind=\"true\"\n                                label=\"Tỉnh/Thành Phố\" url=\"TiepNhanBenhNhan/GetTinhThanh\" [disabled]=\"true\"\n                                hierarchyKeyToSend=\"tinhThanh\" [(model)]=\"tiepNhanBenhNhan.TinhThanhId\"\n                                class=\"item-no-padding\">\n                            </app-combobox>\n\n                            <app-combobox id=\"QuanHuyen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quận/Huyện\"\n                                url=\"TiepNhanBenhNhan/GetQuanHuyen\" hierarchyKeyToListen=\"tinhThanh\"\n                                hierarchyKeyToSend=\"quanHuyen\" [(model)]=\"tiepNhanBenhNhan.QuanHuyenId\"\n                                class=\"item-no-padding\" [disabled]=\"true\">\n                            </app-combobox>\n\n                            <app-combobox id=\"PhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Phường/Xã\"\n                                url=\"TiepNhanBenhNhan/GetPhuongXa\" hierarchyKeyToListen=\"quanHuyen\"\n                                [(model)]=\"tiepNhanBenhNhan.PhuongXaId\" class=\"item-no-padding\" [disabled]=\"true\">\n                            </app-combobox>\n\n                            <app-textbox id=\"SoNhaDuongPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\"\n                                [disabled]=\"true\" label=\"Số nhà/Đường phố\" [(model)]=\"tiepNhanBenhNhan.DiaChi\">\n                            </app-textbox>\n\n                            <app-textbox *ngIf=\"!under6yearsold\" id=\"SoCMND\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                label=\"Số CMND\" [disabled]=\"true\" [(model)]=\"tiepNhanBenhNhan.SoChungMinhThu\"\n                                maxlength=\"20\" onlynumber=\"true\"\n                                [validationerror]=\"'SoChungMinhThu' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-textbox id=\"Email\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" maxlength=\"200\"\n                                [disabled]=\"true\" [(model)]=\"tiepNhanBenhNhan.Email\"\n                                [validationerror]=\"'Email' | validationerror:validationErrors\">\n                            </app-textbox>\n\n                            <app-textbox id=\"NoiLamViec\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\" [disabled]=\"true\"\n                                label=\"Nơi làm việc\" [(model)]=\"tiepNhanBenhNhan.NoiLamViec\">\n                            </app-textbox>\n\n                            <app-combobox bind=\"true\" id=\"DanToc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Dân tộc\"\n                                [disabled]=\"true\" url=\"TiepNhanBenhNhan/GetDanToc\"\n                                [(model)]=\"tiepNhanBenhNhan.DanTocId\">\n                            </app-combobox>\n\n                            <div fxLayout=\"row wrap\" fxFlex=\"100%\" fxFlex.sm=\"100%\" fxLayout.lt-sm=\"column\"\n                                fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                                <app-checkbox [(model)]=\"tiepNhanBenhNhan.DuocUuDai\" id=\"CheckboxUuDai\"\n                                    [disabled]=\"true\" label=\"Có miễn giảm\" fxFlex=\"10%\" fxFlex.sm=\"10%\"></app-checkbox>\n\n                                <div style=\"margin-top: 3px;\" *ngIf=\"tiepNhanBenhNhan.DuocUuDai == true\" fxFlex=\"90%\"\n                                    fxFlex.sm=\"90%\">\n                                    <!-- <div fxLayout=\"row\" fxFlex=\"100%\" fxFlex.sm=\"100%\" fxLayoutGap=\"16px grid\"> \n                                                                    \n                                                                </div> -->\n\n                                    <!-- <label fxFlex=\"10%\" fxFlex.sm=\"10%\" style=\"margin-right: 10px\">Loại miễn giảm:\n                                    </label>\n                                    <app-radio fxFlex=\"85%\" fxFlex.sm=\"85%\" id=\"LoaiMienGiam\" class=\"no-format-css\"\n                                        [(model)]=\"tiepNhanBenhNhan.LoaiMienGiam\" [disabled]=\"true\"\n                                        [items]=\"[{Value:1,Text:'Đối tượng ưu đãi'},{Value:2,Text:'Voucher'}]\">\n                                    </app-radio> -->\n\n\n                                </div>\n                                <div *ngIf=\"tiepNhanBenhNhan.DuocUuDai == true\" fxFlex=\"100%\">\n                                    <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\" fxLayout.lt-sm=\"column\"\n                                        style=\"width: 100%;\">\n                                        <app-combobox id=\"DoiTuongKhamChuaBenh\" fxFlex=\"30%\" required=\"true\"\n                                            fxFlex.sm=\"30%\" label=\"Đối tượng ưu đãi\" bind=\"true\"\n                                            url=\"TiepNhanBenhNhan/GetDoiTuongUuDai\" [disabled]=\"true\"\n                                            [(model)]=\"tiepNhanBenhNhan.DoiTuongUuDaiId\"\n                                            [validationerror]=\"'DoiTuongUuDaiId' | validationerror:validationErrors\">\n                                        </app-combobox>\n\n                                        <app-combobox id=\"CongTyUuDai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" required=\"true\"\n                                            bind=\"true\" url=\"TiepNhanBenhNhan/GetCongTyUuDai\" [disabled]=\"true\"\n                                            [(model)]=\"tiepNhanBenhNhan.CongTyUuDaiId\" label=\"Công ty ưu đãi\"\n                                            [validationerror]=\"'CongTyUuDaiId' | validationerror:validationErrors\">\n                                        </app-combobox>\n\n                                        <div class=\"div-voucher\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                                            kendoTooltip fxFlex=\"50%\" fxFlex.sm=\"50%\">\n                                            <!-- [data]=\"listVoucherItem\" -->\n                                            <kendo-multiselect #multiselect data-placeholder=\"Mã voucher\"\n                                                [disabled]=\"true\" [(ngModel)]=\"value\">\n                                            </kendo-multiselect>\n                                            <button color=\"primary\" mat-mini-fab type=\"button\" [disabled]=\"true\"\n                                                class=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\">\n                                                <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                            </button>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div style=\"height: 30px;\">\n\n                        </div>\n                        <div style=\"width: 100%;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                            fxLayoutGap.lt-sm=\"0\" kendoTooltip>\n\n                            <app-checkbox [(model)]=\"tiepNhanBenhNhan.DuocChuyenVien\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                [disabled]=\"true\" id=\"CheckboxA\" label=\"Có giấy chuyển viện\"></app-checkbox>\n\n                            <app-datepicker *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"ThoiGianChuyenVien\"\n                                fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày chuyển tuyến\" [disabled]=\"true\"\n                                [(model)]=\"tiepNhanBenhNhan.ThoiGianChuyenVien\">\n                            </app-datepicker>\n\n                            <app-textbox *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"SoChuyenTuyen\" fxFlex=\"20%\"\n                                [disabled]=\"true\" fxFlex.sm=\"20%\" label=\"Số tuyến chuyển\" maxlength=\"20\"\n                                [(model)]=\"tiepNhanBenhNhan.SoChuyenTuyen\">\n                            </app-textbox>\n\n                            <app-combobox *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"NoiChuyenId\" fxFlex=\"20%\"\n                                [disabled]=\"true\" fxFlex.sm=\"20%\" label=\"Tuyến chuyển\"\n                                url=\"TiepNhanBenhNhan/GetTuyenChuyen\" bind=\"true\"\n                                [(model)]=\"tiepNhanBenhNhan.NoiChuyenId\">\n                            </app-combobox>\n\n                            <app-textbox *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" id=\"LyDoChuyen\" fxFlex=\"20%\"\n                                [disabled]=\"true\" fxFlex.sm=\"20%\" label=\"Lý do chuyển\" maxlength=\"200\"\n                                [(model)]=\"tiepNhanBenhNhan.LyDoChuyen\">\n                            </app-textbox>\n\n                            <div *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" fxFlex=\"20%\" fxFlex.sm=\"20%\">\n\n                            </div>\n\n                            <app-upload *ngIf=\"tiepNhanBenhNhan.DuocChuyenVien == true\" fxFlex=\"80%\" fxFlex.sm=\"80%\"\n                                [disabled]=\"true\" id=\"Upload\" label=\"Giấy chuyển viện đính kèm\"\n                                [model]=\"tiepNhanBenhNhan.GiayChuyenVien\">\n                            </app-upload>\n                        </div>\n\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <h3 style=\"margin-top:10px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Bảo\n                                Hiểm Tư Nhân &nbsp; <app-checkbox id=\"CheckboxIsHaveBHTN\" [disabled]=\"true\"\n                                    [(model)]=\"tiepNhanBenhNhan.CoBHTN\" label=\"Có\"></app-checkbox>\n                            </h3>\n\n                            <app-grid [gridDataSource]=\"gridDataSourceBHTN\" [gridColumns]=\"gridColumns\" #gridBHTN\n                                [documentType]=\"documentType\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"5\" [autoHeight]=\"true\"\n                                [pageable]=\"false\">\n                            </app-grid>\n                        </div>\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" *ngIf=\"showbuttonLuuVaInPhieuXetNghiem == true\">\n                            <h3 style=\"margin-top:10px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin SARS-CoV\n                            </h3>\n                            <div fxFlex=\"100%\">\n                                <app-textarea fxFlex=\"45%\" id=\"BieuHienLamSang\" [(model)]=\"tiepNhanBenhNhan.BieuHienLamSang\" label=\"Biểu hiện lâm sàng\"\n                                    minHeight=\"20\" style=\"margin-right: 5px;\">\n                                </app-textarea>\n                                <app-textarea id=\"DichTeSarsCoV2\" [(model)]=\"tiepNhanBenhNhan.DichTeSarsCoV2\" fxFlex=\"45%\" label=\"Dịch tễ SARS-CoV 2\"\n                                    minHeight=\"20\">\n                                </app-textarea>\n                            </div>\n                        </div>\n\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <h3 style=\"margin-top:20px !important\" fxFlex=\"100%\" class=\"sub-title mt-0\">Thông Tin Tiếp\n                                Nhận\n                            </h3>\n\n                            <app-datetimepicker id=\"TiepNhanLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tiếp nhận lúc\"\n                                [(model)]=\"tiepNhanBenhNhan.ThoiGianTiepNhan\" [disabled]=\"true\"\n                                [validationerror]=\"'ThoiGianTiepNhan' | validationerror:validationErrors\">\n                            </app-datetimepicker>\n\n                            <app-combobox id=\"DoiTuongKhamChuaBenh\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                label=\"Đối tượng khám chữa bệnh ưu tiên\" [disabled]=\"true\"\n                                url=\"TiepNhanBenhNhan/GetDoiTuongKhamChuaBenhUuTien\"\n                                [(model)]=\"tiepNhanBenhNhan.DoiTuongUuTienKhamChuaBenhId\">\n                            </app-combobox>\n\n                            <app-combobox id=\"LyDoTiepNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Lý do khám bệnh\"\n                                [(model)]=\"tiepNhanBenhNhan.LyDoTiepNhanId\" [disabled]=\"true\"\n                                [modelText]=\"tiepNhanBenhNhan.LyDoTiepNhanText\" url=\"TiepNhanBenhNhan/GetLyDoTiepNhan\"\n                                required=\"true\" [validationerror]=\"'LyDoTiepNhanId' | validationerror:validationErrors\">\n                            </app-combobox>\n\n                            <app-combobox id=\"HinhThucDen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hình thức đến\"\n                                bind=\"true\" [(model)]=\"tiepNhanBenhNhan.HinhThucDenId\"\n                                url=\"TiepNhanBenhNhan/GetHinhThucDen\" [disabled]=\"true\"\n                                [validationerror]=\"'HinhThucDenId' | validationerror:validationErrors\">\n                            </app-combobox>\n\n                            <app-combobox id=\"NoiGioiThieu\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nơi giới thiệu\"\n                                bind=\"true\" [(model)]=\"tiepNhanBenhNhan.NoiGioiThieuId\" [disabled]=\"true\"\n                                url=\"TiepNhanBenhNhan/GetNoiGioiThieu\" *ngIf=\"tiepNhanBenhNhan.HinhThucDenId == 2\"\n                                [validationerror]=\"'NoiGioiThieuId' | validationerror:validationErrors\">\n                            </app-combobox>\n\n                            <app-autocomplete id=\"TrieuChungTiepNhan\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"250\"\n                                [(model)]=\"tiepNhanBenhNhan.TrieuChungTiepNhan\" [dataList]=\"TrieuChungTiepNhanResource\"\n                                label=\"Lý do khám bệnh\" [disabled]=\"true\"\n                                [validationerror]=\"'TrieuChungTiepNhan' | validationerror:validationErrors\">\n                            </app-autocomplete>\n\n                            <kendo-tabstrip fxFlex=\"100%\" class=\"content-has-border\" (tabSelect)=\"onTabSelect($event)\">\n                                <kendo-tabstrip-tab [title]=\"'Chỉ định dịch vụ'\" [selected]=\"true\">\n                                    <ng-template kendoTabContent>\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                            fxLayoutGap.lt-sm=\"0\" class=\"m-0\">\n                                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                                fxLayoutGap.lt-sm=\"0\" class=\"m-0 pb-0\" style=\"width: 100%;\">\n                                            </div>\n\n                                            <div\n                                                *ngIf=\"gridDataKhacCoChietKhauDisplay != null && gridDataKhacCoChietKhauDisplay.length != 0\">\n                                                <div class=\"header-grid\">GÓI CÓ CHIẾT KHẤU</div>\n                                                <div\n                                                    *ngIf=\"gridDataKhacCoChietKhauArray != undefined && gridDataKhacCoChietKhauArray != null\">\n\n                                                    <div *ngFor=\"let item of gridDataKhacCoChietKhauArray; let i = index\"\n                                                        fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\"\n                                                        fxLayoutGap.lt-sm=\"0\">\n                                                        <div fxFlex=\"100%\" style=\"background: #ebeced;\">\n                                                            <span class=\"header-span-grid\">\n                                                                {{item.data[0].items[0].TenGoiChietKhau}}\n                                                            </span>\n\n                                                        </div>\n                                                        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" #gridCoChietKhau\n                                                            masterName=\"{{item.data[0].items[0].GoiCoChietKhauId}}\"\n                                                            [gridColumns]=\"gridCoChietKhauColumns\"\n                                                            [gridDataSource]=\"item\" [documentType]=\"documentType\"\n                                                            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                                                            [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                                            [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n                                                            [groups]=\"groupChietKhau\">\n                                                        </app-grid>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div\n                                                *ngIf=\"gridDataKhacDisplay != null && gridDataKhacDisplay.length != 0 && gridDataKhacDisplay.total != 0\">\n                                                <div *ngIf=\"gridDataKhacCoChietKhauDisplay != null && gridDataKhacCoChietKhauDisplay.length != 0\"\n                                                    class=\"header-grid\">DỊCH VỤ KHÁC</div>\n                                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\"\n                                                    fxLayoutGap.lt-sm=\"0\">\n                                                    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" #gridKhongChietKhau\n                                                        [gridColumns]=\"gridKhongChietKhauColumns\" masterName=\"goiKhac\"\n                                                        [removeGroupFooterIfIsOnlyOne]=\"true\"\n                                                        [gridDataSource]=\"gridDataKhacDisplay\"\n                                                        [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                                                        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n                                                        [pageable]=\"false\" [groups]=\"groupKhongChietKhau\">\n                                                    </app-grid>\n                                                </div>\n\n                                            </div>\n                                            <div fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                                                *ngIf=\"this.tiepNhanBenhNhan.YeuCauKhacGrid != null \n                                                && this.tiepNhanBenhNhan.YeuCauKhacGrid != undefined \n                                                && this.tiepNhanBenhNhan.YeuCauKhacGrid.length > 0 \n                                                && gridDataKhacCoChietKhauDisplay != null && gridDataKhacCoChietKhauDisplay.length != 0\">\n                                                <div class=\"styleTinhTong\">\n                                                    <ul class=\"inline\">\n                                                        <li>Tổng cộng: <strong\n                                                                style=\"color: blue;\">{{totalKhac('TongThanhTienGoi', 1)\n                                                                | number:'0.2-2':'vi-VN'}}</strong>\n                                                        </li>\n                                                        <li>Tổng tiền NB thanh toán: <strong\n                                                                style=\"color:red;\">{{totalKhac('TongThanhTienBNTra', 1)\n                                                                | number:'0.2-2':'vi-VN'}}</strong>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n\n                                        </div>\n\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab [title]=\"'Tài liệu đính kèm'\">\n                                    <ng-template kendoTabContent>\n                                        <!-- grid -->\n                                        <app-grid [gridColumns]=\"gridTaiLieuDinhKemColumns\"\n                                            [gridDataSource]=\"gridDataTaiLieuDinhKem\" [documentType]=\"documentType\"\n                                            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                                            #gridTaiLieuDinhKem [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                            [autoHeight]=\"true\">\n                                        </app-grid>\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab [title]=\"'Người giám hộ'\">\n                                    <ng-template kendoTabContent>\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                            fxLayoutGap.lt-sm=\"0\" class=\"m-0\">\n\n                                            <app-textbox id=\"NguoiLienHeHoTen\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                maxlength=\"100\" label=\"Họ và tên\" [disabled]=\"true\"  [upperCase]=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeHoTen\">\n                                            </app-textbox>\n                                            <app-combobox id=\"NguoiLienHeQuanHeNhanThan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Quan hệ\" url=\"TiepNhanBenhNhan/GetQuanHe\" bind=\"true\"\n                                                [disabled]=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHeNhanThanId\">\n                                            </app-combobox>\n\n                                            <app-textboxmask id=\"NguoiLienHeSoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Số điện thoại\" maxlength=\"12\" [disabled]=\"true\"\n                                                mask=\"000 000 0000\" [(model)]=\"tiepNhanBenhNhan.NguoiLienHeSoDienThoai\">\n                                            </app-textboxmask>\n\n                                            <app-textbox id=\"NguoiLienHeEmail\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Email\" maxlength=\"200\" [disabled]=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeEmail\">\n                                            </app-textbox>\n\n                                            <app-combobox id=\"NguoiLienHeTinhThanhId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Tỉnh/Thành Phố\" url=\"TiepNhanBenhNhan/GetTinhThanh\"\n                                                hierarchyKeyToSend=\"tinhThanhLienHe\" [disabled]=\"true\" bind=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeTinhThanhId\"\n                                                class=\"item-no-padding\">\n                                            </app-combobox>\n\n                                            <app-combobox id=\"NguoiLienHeQuanHuyenId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Quận/Huyện\" url=\"TiepNhanBenhNhan/GetQuanHuyen\"\n                                                hierarchyKeyToListen=\"tinhThanhLienHe\"\n                                                hierarchyKeyToSend=\"quanHuyenLienHe\" [disabled]=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeQuanHuyenId\"\n                                                class=\"item-no-padding\">\n\n                                            </app-combobox>\n\n                                            <app-combobox id=\"NguoiLienHePhuongXaId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                                label=\"Phường/Xã\" url=\"TiepNhanBenhNhan/GetPhuongXa\" bind=\"true\"\n                                                hierarchyKeyToListen=\"quanHuyenLienHe\" [disabled]=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHePhuongXaId\"\n                                                class=\"item-no-padding\">\n                                            </app-combobox>\n\n                                            <app-textbox id=\"SoNhaDuongPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" maxlength=\"200\"\n                                                label=\"Số nhà/Đường phố\" [disabled]=\"true\"\n                                                [(model)]=\"tiepNhanBenhNhan.NguoiLienHeDiaChi\">\n                                            </app-textbox>\n                                        </div>\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab>\n                                    <ng-template kendoTabTitle>\n                                        <div kendoTooltip>\n                                            Lịch Hẹn\n                                        </div>\n                                    </ng-template>\n                                    <ng-template kendoTabContent>\n                                        <app-lich-su-tai-kham [(benhNhanId)]=\"this.tiepNhanBenhNhan.BenhNhanId\">\n                                        </app-lich-su-tai-kham>\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                                <kendo-tabstrip-tab [title]=\"'Lịch Sử Khám Bệnh'\">\n                                    <ng-template kendoTabContent>\n                                        <app-kham-benh-lich-su-kham-list\n                                            [(BenhNhan)]=\"this.tiepNhanBenhNhan.BenhNhanId\">\n                                        </app-kham-benh-lich-su-kham-list>\n                                        <!-- <app-tiep-nhan-benh-nhan-lich-su [(benhNhanId)]=\"benhNhanId\"></app-tiep-nhan-benh-nhan-lich-su> -->\n                                    </ng-template>\n                                </kendo-tabstrip-tab>\n                            </kendo-tabstrip>\n\n                            <ng-template #tinhTrangTemplate let-dataItem>\n                                <span *ngIf=\"dataItem.TrangThaiYeuCauKhamBenh != null\" kendoTooltip\n                                    title=\"{{dataItem.LyDoHuyDichVu}}\"\n                                    [ngStyle]=\"{'color': dataItem.TrangThaiYeuCauKhamBenh == 6 ? 'red' : '' }\">{{dataItem.TinhTrangDisplay}}</span>\n                                <span *ngIf=\"dataItem.TrangThaiYeuCauDichVuKyThuat != null\" kendoTooltip\n                                    title=\"{{dataItem.LyDoHuyDichVu}}\"\n                                    [ngStyle]=\"{'color': dataItem.TrangThaiYeuCauDichVuKyThuat == 6 ? 'red' : '' }\">{{dataItem.TinhTrangDisplay}}</span>\n                            </ng-template>\n\n                            <ng-template #donGiaKhamBenhTemplate let-dataItem>\n                                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #donGiaKhamBenhFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Tổng cộng:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienKhamBenhTemplate let-dataItem>\n                                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhamBenhFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span style=\"color:blue;\">{{totalKhamBenh('ThanhTien') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhamBenhTemplate let-dataItem>\n                                {{dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhamBenhFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span>{{totalKhamBenh('BHYTThanhToan') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.BHYTThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n\n                            <ng-template #bnThanhToanKhamBenhTemplate let-dataItem>\n                                {{dataItem.BnThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhamBenhGroupFooterTemplate let-aggregates>\n                                {{aggregates.BnThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhamBenhFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span\n                                            style=\"color:red;\">{{totalKhamBenh('BnThanhToan') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n\n                            <ng-template #donGiaKyThuatTemplate let-dataItem>\n                                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #donGiaKyThuatFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Tổng cộng:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienKyThuatTemplate let-dataItem>\n                                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKyThuatGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKyThuatFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span style=\"color:blue;\">{{totalKyThuat('ThanhTien') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n\n                            <ng-template #bnThanhToanKyThuatTemplate let-dataItem>\n                                {{dataItem.BnThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKyThuatFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <!-- <span style=\"color:red;\">{{totalKyThuat('BnThanhToan') | number:'0.2-2':'vi-VN'}}</span> -->\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKyThuatGroupFooterTemplate let-aggregates>\n                                {{aggregates.BnThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n\n                            <ng-template #donGiaKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #donGiaKhongChietKhauFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Tổng cộng:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #thanhTienKhongChietKhauFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span style=\"color:blue;\">{{totalKhac('ThanhTien', 1) | number:'0.2-2':'vi-VN'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #congNoTemplate let-dataItem>\n                                {{dataItem.CongNo | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #soTienMGTemplate let-dataItem>\n                                {{dataItem.SoTienMienGiam | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.BHYTThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bhytThanhToanKhongChietKhauFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span>{{totalKhac('BHYTThanhToan', 0) | number:'0.2-2':'vi-VN'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #congNoFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span>{{totalKhac('CongNo', 0) | number:'0.2-2':'vi-VN'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #soTienMGFooterTemplate let-dataItem>\n                                <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                                    <div>\n                                        <span>{{totalKhac('SoTienMienGiam', 0) | number:'0.2-2':'vi-VN'}}</span>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #congNoGroupFooterTemplate let-aggregates>\n                                {{aggregates.CongNo.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #soTienMGGroupFooterTemplate let-aggregates>\n                                {{aggregates.SoTienMienGiam.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n\n\n\n                            <ng-template #bnThanhToanKhongChietKhauTemplate let-dataItem>\n                                {{dataItem.BnThanhToan | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhongChietKhauGroupFooterTemplate let-aggregates>\n                                {{aggregates.BnThanhToan.sum | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #bnThanhToanKhongChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:red;\">{{totalKhac('BnThanhToan', masterName) |\n                                    number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                                <strong>{{value}}</strong>\n                            </ng-template>\n                            <ng-template #sttKhongChietKhauTemplate let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n                            <ng-template #sttCoChietKhauTemplate let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n\n                            <ng-template #duocHuongBHYTTemplate let-dataItem>\n                                <app-checkbox [disabled]=\"true\"\n                                    (modelChange)=\"duocHuongBHYTChange($event, dataItem.Id, dataItem.Nhom)\"\n                                    [(model)]=\"dataItem.DuocHuongBHYT\"\n                                    id=\"DuocHuongBHYT{{dataItem.MaDichVuId}}{{dataItem.Nhom}}\" label=\"Có\">\n                                </app-checkbox>\n                            </ng-template>\n\n                            <ng-template #noiThucHienKhongChietKhauTemplate let-dataItem>\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ GIƯỜNG'\">\n                                    <span>\n                                        {{dataItem.NoiThucHienModelText}}\n                                    </span>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH'\">\n                                    <span>\n                                        {{dataItem.NoiThucHienModelText}}\n                                    </span>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KỸ THUẬT'\">\n                                    <span>\n                                        {{dataItem.NoiThucHienModelText}}\n                                    </span>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #donGiaChietKhauTemplate let-dataItem>\n                                {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n\n                            <ng-template #thanhTienChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n                            <ng-template #thanhTienTrongGoiChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTienTrongGoi | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #donGiaChietKhauFooterTemplate let-dataItem>\n                                <span style=\"float:right\">Giá trước CK:</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienTrongGoiChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:red;\">{{totalKhac('ThanhTienTrongGoi', masterName) |\n                                    number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienChietKhauFooterTemplate let-masterName>\n                                <span style=\"color:blue\">{{totalKhac('ThanhTienGoiChietKhau', masterName) |\n                                    number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                            <ng-template #thanhTienTrongGoiChietKhauTemplate let-dataItem>\n                                {{dataItem.ThanhTienTrongGoi | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #tyLeChietKhauCoChietKhauTemplate let-dataItem>\n                                {{dataItem.TyLeChietKhauDisplay}}\n                            </ng-template>\n\n                            <ng-template #duocGiamTrongGoiCoChietKhauTemplate let-dataItem>\n                                {{dataItem.DuocGiamTrongGoi | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template #duocGiamTrongGoiCoChietKhauFooterTemplate let-dataItem>\n                                <div>\n                                    <span style=\"float:right\">Giá sau CK:</span>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #noiThucHienChietKhauTemplate let-dataItem>\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ GIƯỜNG'\">\n                                    <span>\n                                        {{dataItem.NoiThucHienModelText}}\n                                    </span>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KHÁM BỆNH'\">\n                                    <span>\n                                        {{dataItem.NoiThucHienModelText}}\n                                    </span>\n                                </div>\n\n                                <div *ngIf=\"dataItem.Nhom == 'DỊCH VỤ KỸ THUẬT'\">\n                                    <span>\n                                        {{dataItem.NoiThucHienModelText}}\n                                    </span>\n                                </div>\n                            </ng-template>\n\n\n                            <!-- template grid -->\n                            <ng-template #taiLieuTemplate let-dataItem>\n                                <a (click)=\"viewTaiLieu(dataItem)\">\n                                    {{dataItem.Ten}}\n                                </a>\n                            </ng-template>\n\n\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- </div> -->\n        </div>\n\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"grid\" fxLayoutGap.lt-sm=\"0\" class=\"pt-4 float-right\">\n    <button type=\"button\" color=\"primary\" title=\"Phím tắt: Esc\" (click)=\"quayLai()\" mat-raised-button mat-button\n        style=\"top:-15px;right:23px;\">\n        Quay lại</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.html": 
        /*!***********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.html ***!
          \***********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Tiếp Nhận Người Bệnh',Path:''},\n                        {Title:'Lịch Sử Tiếp Nhận',Path:'', Active:true}           \n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/lich-su-tiep-nhan\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [searchString]=\"lichSuTiepNhan.SearchString\"\n                [additionalSearchString]=\"addtionStringDefault\" [showStt]=\"true\"\n                urlGetData=\"LichSuTiepNhan/GetDataForGridAsyncLichSuTiepNhan\"\n                urlGetTotalPage=\"LichSuTiepNhan/GetTotalPageForGridAsyncLichSuTiepNhan\" [useHeaderDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\" [sort]=\"sort\">\n                <ng-template #thoiDiemTiepNhanTemplate let-dataItem>\n                    {{dataItem.ThoiDiemTiepNhanDisplay}}\n                </ng-template>\n                <ng-template #chiTietTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"view(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaYeuCauTiepNhan}}\">\n                                {{dataItem.MaYeuCauTiepNhan}}</p>\n                        </a>\n                    </div>\n                </ng-template>\n                <ng-template #hienThiNgayThangNamTemplate let-dataItem>\n                    {{dataItem.NgayThangNam}}\n                </ng-template>\n                <ng-template #trangThaiTemplate let-dataItem>\n                    <label *ngIf=\"dataItem.TrangThaiYeuCauTiepNhan == 2\" class=\"green\">\n                        <strong><span>Đã hoàn tất</span></strong>\n                    </label>\n                    <label *ngIf=\"dataItem.TrangThaiYeuCauTiepNhan == 3\" class=\"red\">\n                        <strong><span>Đã hủy</span></strong>\n                    </label>\n                </ng-template>\n            </app-grid>\n        </div>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"lichSuTiepNhan.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n                <app-datetimepicker fxFlex=\"250px\" [(model)]=\"lichSuTiepNhan.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n                    id=\"ThoiDiemTiepNhanTuFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Tiếp nhận từ\"\n                    class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n                <app-datetimepicker fxFlex=\"250px\" [(model)]=\"lichSuTiepNhan.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n                    id=\"ThoiDiemTiepNhanDenFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Tiếp nhận đến\"\n                    class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n                <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button>\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n                <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"XuatExcel()\"\n                    kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n                <!-- <mat-menu #appMenu=\"matMenu\" class=\"menu-form-wrapper\" [hasBackdrop]=\"false\">\n                    <div (click)=\"$event.stopPropagation()\" class=\"pl-1 pr-1\" fxFlex=\"280px\">\n                        <div fxLayout=\"column\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2px grid\"\n                            style=\"max-height: 400px;overflow-y: auto;\" fxLayoutGap.lt-sm=\"0\">\n                            <app-textbox fxFlex=\"100%\" [(model)]=\"lichSuTiepNhan.HoTen\" #benhnhan id=\"BenhNhanId\"\n                                (modelChange)=\"getInputSearchValue($event, benhnhan.id, benhnhan.label)\" maxlength=\"100\"\n                                label=\"Tên người bệnh\">\n                            </app-textbox>\n                            <app-textboxnumeric fxFlex=\"100%\" [(model)]=\"lichSuTiepNhan.NamSinh\" format=\"#\" #namsinh\n                                max=9999 id=\"NamSinh\"\n                                (modelChange)=\"getInputSearchValue($event, namsinh.id, namsinh.label)\" label=\"Năm sinh\">\n                            </app-textboxnumeric>\n                            <app-textbox fxFlex=\"100%\" [(model)]=\"lichSuTiepNhan.DiaChi\" #diachi id=\"DiaChi\"\n                                maxlength=\"200\" (modelChange)=\"getInputSearchValue($event, diachi.id, diachi.label)\"\n                                label=\"Địa chỉ\">\n                            </app-textbox>\n                            <app-datetimepicker fxFlex=\"100%\" [(model)]=\"lichSuTiepNhan.ThoiDiemTiepNhanTuFormat\"\n                                #tiepnhantu id=\"ThoiDiemTiepNhanTuFormat\"\n                                (modelChange)=\"getInputSearchValue($event, tiepnhantu.id, tiepnhantu.label)\"\n                                label=\"Tiếp nhận từ\">\n                            </app-datetimepicker>\n                            <app-datetimepicker fxFlex=\"100%\" [(model)]=\"lichSuTiepNhan.ThoiDiemTiepNhanDenFormat\"\n                                #tiepnhanden id=\"ThoiDiemTiepNhanDenFormat\"\n                                (modelChange)=\"getInputSearchValue($event, tiepnhanden.id, tiepnhanden.label)\"\n                                label=\"Tiếp nhận đến\">\n                            </app-datetimepicker>\n                            <app-textbox fxFlex=\"100%\" [(model)]=\"lichSuTiepNhan.TrieuChungTiepNhan\" #lydo\n                                maxlength=\"50\" id=\"LyDoKham\"\n                                (modelChange)=\"getInputSearchValue($event, lydo.id, lydo.label)\" label=\"Lý do khám bệnh\">\n                            </app-textbox>\n                            <app-textbox fxFlex=\"100%\" [(model)]=\"lichSuTiepNhan.DoiTuong\" #doituong id=\"DoiTuong\"\n                                (modelChange)=\"getInputSearchValue($event, doituong.id, doituong.label)\" maxlength=\"50\"\n                                label=\"Đối tượng\">\n                            </app-textbox>\n                        </div>\n\n                        <div fxLayout=\"column wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2px grid\"\n                            fxLayoutGap.lt-sm=\"0\">\n                            <div fxFlex=\"100%\" style=\"margin-top: 10px;\">\n                                <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\"\n                                    class=\"mr-1 float-right\" mat-raised-button>\n                                    Tìm</button>\n                                <button type=\"button\" (click)=\"cancelSearch()\" mat-button class=\"mr-1 float-right\"><i\n                                        class=\"ft-arrow-left\"></i>\n                                    Xóa tìm</button>\n                                <button type=\"button\" (click)=\"closeMenu()\" mat-button class=\"mr-1 float-left\"><i\n                                        class=\"ft-arrow-left\"></i>\n                                    Đóng</button>\n                            </div>\n                        </div>\n                    </div>\n                </mat-menu>\n                <button [matMenuTriggerFor]=\"appMenu\" mat-flat-button color=\"primary\"\n                    style=\"width: 245px; margin-left: 10px;\" #trigger=\"matMenuTrigger\">\n                    Tìm kiếm nâng cao\n                </button>\n                <div class=\"tag-item-group\" kendoTooltip style=\"overflow-x: scroll;\n                            overflow-y: hidden;\n                            height: 55px;\n                            width: 100%;\n                            white-space: nowrap;\n                            margin-left: 8px;\n                            margin-top: 4px;\">\n                    <button *ngFor=\"let item of listTagShowOnHeader\" [hidden]=\"!showCancelSearch\" id=\"{{item.Key}}\"\n                        value=\"{{item.Key}}\" style=\"margin-left: 2px;margin-top: 7px;\" #tagItem\n                        title=\"{{item.Title}}: {{item.Value}}\" (click)=\"cancelTagSearch(tagItem.id)\"\n                        class=\"mat-stroked-button\">\n                        <div *ngIf=\"showCancelSearch === true\">\n                            {{item.Title}}: <b>{{item.Value}}</b>\n                            <mat-icon style=\"margin: 5px 0 0 10px; float: right;\n                                        clear: both;\" [icIcon]=\"icicclose\" color=\"warn\">\n                            </mat-icon>\n                        </div>\n                    </button>\n                </div>\n                <button *ngIf=\"showCancelSearch === true\" (click)=\"cancelSearch()\"\n                    style=\"margin-left: 15px; border: 1px;\" mat-stroked-button color=\"warn\"\n                    [hidden]=\"!showCancelSearch\">Hủy\n                </button> -->\n            </div>\n        </ng-template>\n        <ng-template #actionTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button (click)=\"InBangKeChiPhiKhamBenh(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>Bảng Kê Chi Phí Khám Bệnh</span>\n                    </button>\n                    <button (click)=\"InHoSoLichSuKhamBenh(dataItem.Id, true)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>Hồ Sơ Khám Bệnh</span>\n                    </button>\n                    <button *ngIf=\"dataItem.CoYeuCauKhamBenhNhapVien == true\"\n                        (click)=\"InHoSoLichSuKhamBenh(dataItem.Id, false)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>Phiếu Khám Bệnh Vào Viện</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.html": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.html ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Phiếu khám bệnh ({{length}} file)</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 550px;\">\n    <div class=\"container-iframe\">\n\n        <div *ngIf=\"fileUrl != null && fileUrl != ''\" class=\"container-iframe\">\n            <iframe width=\"100%\" height=\"550px\" frameborder=\"0\" [src]=\"fileUrl | safe\" type=\"application/pdf\"\n                allowTransparency=\"true\" background=\"transparent\"></iframe>\n        </div>\n        <div *ngIf=\"length==0\">Không có dữ liệu</div>\n\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n            class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" *ngIf=\"length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\"\n        class=\"mr-1 mt-4\">Tải tất cả</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.html": 
        /*!***********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.html ***!
          \***********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n\n    <div style=\"overflow-y: auto;max-height: 553px;\">\n\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngIf=\"isBHYT\" style=\"background: #005dab;color:#fff;\">\n                <th>BẢNG KÊ CHI PHÍ KHÁM BỆNH CHO BẢO HIỂM Y TẾ</th>\n            </tr>\n            <tr *ngIf=\"isBHYT\">\n                <td style=\"padding: 0;\">\n                    <div class=\"container-iframe\">\n                        <iframe width=\"100%\"  \n                            [src]=\"srcBangKeChiPhiKhamBenhCoBHYT | safe\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n                    </div>\n                </td>\n            </tr>\n            <tr></tr>\n            <tr *ngIf=\"iskhongBHYT\" style=\"background: #005dab;color:#fff;\">\n                <th>BẢNG KÊ CHI PHÍ KHÁM BỆNH CHO BỆNH VIỆN</th>\n            </tr>\n            <tr *ngIf=\"iskhongBHYT\">\n                <td style=\"padding: 0;\">\n                    <div class=\"container-iframe\">\n                        <iframe width=\"100%\" \n                            [src]=\"this.srcBangKeChiPhiKhamBenh | safe\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n                    </div>\n\n                </td>\n            </tr>\n            <tr *ngIf=\"isBHYT=== false && iskhongBHYT=== false\" style=\"background: #005dab;color:#fff;\">\n                <th>Chưa có dịch vụ</th>\n            </tr>\n            <tr></tr>\n        </table>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\" *ngIf=\"isBHYT !== false || iskhongBHYT !== false\">\n    <app-print-form typeSize=\"A4\" textPrint=\"In Phiếu Bảng Kê Chi Phí Khám Bệnh\" type=\"PDF\" [event]=\"19\" style=\"text-align: right;\"\n        [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tai-kham/lich-su-tai-kham.component.scss": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tai-kham/lich-su-tai-kham.component.scss ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2xpY2gtc3UtdGllcC1uaGFuL2xpY2gtc3UtdGFpLWtoYW0vbGljaC1zdS10YWkta2hhbS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tai-kham/lich-su-tai-kham.component.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tai-kham/lich-su-tai-kham.component.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: LichSuTaiKhamComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuTaiKhamComponent", function () { return LichSuTaiKhamComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var LichSuTaiKhamComponent = /** @class */ (function () {
                function LichSuTaiKhamComponent() {
                    this.gridColumns = [];
                    this.urlGetDataGrid = "TiepNhanBenhNhan/GetDataForGridAsyncTaiKham";
                    this.urlGetTotalPageGrid = "TiepNhanBenhNhan/GetTotalPageForGridAsyncTaiKham";
                    this.benhNhanId = null;
                }
                LichSuTaiKhamComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].YeuCauTiepNhan;
                    this.gridColumns = [
                        { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150, Sortable: false },
                        { Field: "BacSiThucHien", Title: "Bác sĩ thực hiện", Width: 150, Sortable: false },
                        { Field: "NgayTaiKhamDisplay", Title: "Ngày tái khám", Width: 150, Sortable: false },
                        { Field: "GhiChuTaiKham", Title: "Ghi chú tái khám", Width: 150, Sortable: false },
                    ];
                };
                return LichSuTaiKhamComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
            ], LichSuTaiKhamComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LichSuTaiKhamComponent.prototype, "benhNhanId", void 0);
            LichSuTaiKhamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lich-su-tai-kham',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-tai-kham.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tai-kham/lich-su-tai-kham.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-tai-kham.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tai-kham/lich-su-tai-kham.component.scss")).default]
                })
            ], LichSuTaiKhamComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".so-tuoi {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.thong-tin-tai-khoan-benh-nhan {\n  float: right;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vbGljaC1zdS10aWVwLW5oYW4vbGljaC1zdS10aWVwLW5oYW4tY2hpLXRpZXQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxsaWNoLXN1LXRpZXAtbmhhblxcbGljaC1zdS10aWVwLW5oYW4tY2hpLXRpZXRcXGxpY2gtc3UtdGllcC1uaGFuLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9saWNoLXN1LXRpZXAtbmhhbi9saWNoLXN1LXRpZXAtbmhhbi1jaGktdGlldC9saWNoLXN1LXRpZXAtbmhhbi1jaGktdGlldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2xpY2gtc3UtdGllcC1uaGFuL2xpY2gtc3UtdGllcC1uaGFuLWNoaS10aWV0L2xpY2gtc3UtdGllcC1uaGFuLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvLXR1b2kge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRob25nLXRpbi10YWkta2hvYW4tYmVuaC1uaGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufSIsIi5zby10dW9pIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aG9uZy10aW4tdGFpLWtob2FuLWJlbmgtbmhhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: LichSuTiepNhanChiTietComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuTiepNhanChiTietComponent", function () { return LichSuTiepNhanChiTietComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tiep-nhan-benh-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/tinh-trang-the.enum */ "./src/app/shared/enum/tinh-trang-the.enum.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model */ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var LichSuTiepNhanChiTietComponent = /** @class */ (function () {
                function LichSuTiepNhanChiTietComponent(apiService, router, cdRef, route, dialog, location) {
                    this.apiService = apiService;
                    this.router = router;
                    this.cdRef = cdRef;
                    this.route = route;
                    this.dialog = dialog;
                    this.location = location;
                    this.loaiVoucher = 0;
                    this.soPhanTramHuongBHYT = null;
                    this.themChiDinhDichVuModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemChiDinhDichVu"]();
                    this.themChiDinhGoiModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemChiDinhDichVu"]();
                    this.themBaoHiemTuNhanModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemBaoHiemTuNhan"]();
                    this.lstBHTN = [];
                    this.isHaveBHYTUpdated = false;
                    this.duocHuongBHYT = false;
                    this.gridDataKhacCoChietKhauArray = [];
                    this.soLuongGoiCoChietKhau = 0;
                    this.soTienBHYTSeThanhToan = 0;
                    this.yeuCauTiepNhanId = null;
                    this.lichSuKCB = new Array();
                    this.gridColumns = [];
                    this.gridKhamBenhColumns = [];
                    this.gridKyThuatColumns = [];
                    this.gridKhongChietKhauColumns = [];
                    this.gridCoChietKhauColumns = [];
                    this.gridTaiLieuDinhKemColumns = [];
                    this.isUpdateGrid = false;
                    this.themTaiLieu = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemTaiLieuDinhKem"]();
                    this.isDungTuyenDisplay = null;
                    this.isDungTuyen = false;
                    this.isOutOfDate = false;
                    this.isSearchQRCodeEnable = true;
                    this.totalBenhNhan = 0;
                    this.listVoucherItem = [];
                    this.value = [];
                    this.lstBenhNhan = new Array();
                    this.modelTimKiemBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["TimKiemBenhNhanGridVo"]();
                    this.under6yearsold = false;
                    this.groupChietKhau = [
                        {
                            field: 'Nhom', aggregates: [
                                { field: 'ThanhTien', aggregate: 'sum' },
                                { field: 'CongNo', aggregate: 'sum' },
                                { field: 'SoTienMienGiam', aggregate: 'sum' },
                                { field: 'ThanhTienTrongGoi', aggregate: 'sum' }
                            ]
                        }
                    ];
                    // group
                    this.groupKhongChietKhau = [
                        {
                            field: 'Nhom', aggregates: [
                                { field: 'ThanhTien', aggregate: 'sum' },
                                { field: 'BHYTThanhToan', aggregate: 'sum' },
                                { field: 'SoTienMG', aggregate: 'sum' },
                                { field: 'BnThanhToan', aggregate: 'sum' },
                                { field: 'CongNo', aggregate: 'sum' },
                                { field: 'SoTienMienGiam', aggregate: 'sum' },
                            ]
                        }
                    ];
                    //1 kham benh, 2 ky thuat, 3 giuong
                    this.loaiTiepNhan = 1;
                    this.isGoiCoChietKhau = null;
                    this.dichVuSarsCoVs = [];
                    this.loaiBenhPhamText = null;
                    this.loaiBenhPham = null;
                    this.showbuttonLuuVaInPhieuXetNghiem = false;
                    this.aggregatesKhamBenh = [{ field: 'ThanhTien', aggregate: 'sum' },
                        { field: 'BHYTThanhToan', aggregate: 'sum' },
                        { field: 'BnThanhToan', aggregate: 'sum' }];
                    this.stateKhamBenh = {
                        skip: 0,
                        take: 200,
                        group: [{ field: 'Nhom', aggregates: this.aggregatesKhamBenh }]
                    };
                }
                LichSuTiepNhanChiTietComponent.prototype.ngOnInit = function () {
                    this.yeuCauTiepNhanId = this.route.snapshot.params.id;
                    this.getListDichVuSarsCoVs();
                    this.getBenhNhan(this.yeuCauTiepNhanId);
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].LichSuTiepNhan;
                    this.getSoTienBHYTSeThanhToan();
                    this.getListTenTrieuChungKham();
                    this.setDefaultData();
                    this.thongTinBenhNhan = new _danh_muc_bao_hiem_y_te_bao_hiem_y_te_model__WEBPACK_IMPORTED_MODULE_8__["ThongTinBenhNhan"]();
                    this.lichSuKCB = new Array();
                    this.gridTaiLieuDinhKemColumns = [
                        { Field: "LoaiDisplay", Title: "Loại", Width: 200 },
                        { Field: "Ten", Title: "Tài liệu", MinWidth: 200, Template: this.taiLieuTemplate },
                        { Field: "MoTa", Title: "Mô tả", Width: 200 },
                    ];
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 50 },
                        { Field: "CongTyDisplay", Title: "Công ty", Width: 250 },
                        { Field: "MaSoThe", Title: "Số thẻ", Width: 150 },
                        { Field: "NgayHieuLucDisplay", Title: "Từ ngày", Width: 100 },
                        { Field: "NgayHetHanDisplay", Title: "Đến ngày", Width: 100 },
                        { Field: "SoDienThoai", Title: "Điện thoại", Width: 100 },
                        { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 200 },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
                    ];
                    this.gridKhamBenhColumns = [
                        { Field: "Ma", Title: "Mã", Width: 80 },
                        { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140 },
                        { Field: "LoaiGia", Title: "Loại Giá", Width: 80 },
                        { Field: "SoLuong", Title: "SL", Width: 30 },
                        { Field: "DonGia", Title: "Đơn Giá", Width: 100, Template: this.donGiaKhamBenhTemplate, TemplateFooter: this.donGiaKhamBenhFooterTemplate },
                        { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienKhamBenhTemplate, TemplateFooter: this.thanhTienKhamBenhFooterTemplate, TemplateGroupFooter: this.thanhTienKhamBenhGroupFooterTemplate },
                        { Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100, Template: this.bhytThanhToanKhamBenhTemplate, TemplateFooter: this.bhytThanhToanKhamBenhFooterTemplate, TemplateGroupFooter: this.bhytThanhToanKhamBenhGroupFooterTemplate },
                        {
                            Field: "CongNo", Title: "Công Nợ", Width: 100,
                            Template: this.congNoTemplate,
                            TemplateFooter: this.congNoFooterTemplate,
                            TemplateGroupFooter: this.congNoGroupFooterTemplate
                        },
                        {
                            Field: "SoTienMienGiam", Title: "Miễn Giảm", Width: 100,
                            Template: this.soTienMGTemplate,
                            TemplateFooter: this.soTienMGFooterTemplate,
                            TemplateGroupFooter: this.soTienMGGroupFooterTemplate
                        },
                        { Field: "BnThanhToan", Title: "BN thanh toán", Width: 150, Template: this.bnThanhToanKhamBenhTemplate, TemplateFooter: this.bnThanhToanKhamBenhFooterTemplate, TemplateGroupFooter: this.bnThanhToanKhamBenhGroupFooterTemplate },
                        {
                            Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230,
                        },
                    ];
                    this.gridKyThuatColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 80 },
                        { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 140 },
                        { Field: "LoaiGia", Title: "Loại Giá", Width: 80 },
                        { Field: "SoLuong", Title: "SL", Width: 30 },
                        {
                            Field: "DonGia", Title: "Đơn Giá", Width: 100,
                            Template: this.donGiaKyThuatTemplate,
                            TemplateFooter: this.donGiaKyThuatFooterTemplate
                        },
                        {
                            Field: "ThanhTien", Title: "Thành Tiền", Width: 100,
                            Template: this.thanhTienKyThuatTemplate,
                            TemplateFooter: this.thanhTienKyThuatFooterTemplate,
                            TemplateGroupFooter: this.thanhTienKyThuatGroupFooterTemplate
                        },
                        {
                            Field: "BnThanhToan", Title: "BN thanh toán", Width: 100,
                            Template: this.bnThanhToanKyThuatTemplate,
                            TemplateFooter: this.bnThanhToanKyThuatFooterTemplate,
                            TemplateGroupFooter: this.bnThanhToanKyThuatGroupFooterTemplate
                        },
                        {
                            Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230
                        },
                    ];
                    this.gridKhongChietKhauColumns = [
                        {
                            Field: "id", Title: "#", Width: 45, Sortable: true,
                            Template: this.sttKhongChietKhauTemplate
                        },
                        { Field: "Ma", Title: "Mã", Width: 80 },
                        { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        {
                            Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 200,
                            TemplateFooter: this.donGiaKhongChietKhauFooterTemplate
                        },
                        { Field: "LoaiGia", Title: "Loại Giá", Width: 80 },
                        { Field: "SoLuong", Title: "SL", Width: 30 },
                        {
                            Field: "DonGia", Title: "Đơn Giá", Width: 100,
                            Template: this.donGiaKhongChietKhauTemplate
                        },
                        {
                            Field: "ThanhTien", Title: "Thành Tiền", Width: 100,
                            Template: this.thanhTienKhongChietKhauTemplate,
                            TemplateGroupFooter: this.thanhTienKhongChietKhauGroupFooterTemplate,
                            TemplateFooter: this.thanhTienKhongChietKhauFooterTemplate,
                        },
                        {
                            Field: "DuocHuongBHYT", Title: "ĐH BHYT", Width: 60,
                            Template: this.duocHuongBHYTTemplate
                        },
                        {
                            Field: "BHYTThanhToan", Title: "BHYT Thanh Toán", Width: 100,
                            Template: this.bhytThanhToanKhongChietKhauTemplate,
                            TemplateFooter: this.bhytThanhToanKhongChietKhauFooterTemplate,
                            TemplateGroupFooter: this.bhytThanhToanKhongChietKhauGroupFooterTemplate
                        },
                        {
                            Field: "CongNo", Title: "Công Nợ", Width: 100,
                            Template: this.congNoTemplate,
                            TemplateFooter: this.congNoFooterTemplate,
                            TemplateGroupFooter: this.congNoGroupFooterTemplate
                        },
                        {
                            Field: "SoTienMienGiam", Title: "Miễn Giảm", Width: 100,
                            Template: this.soTienMGTemplate,
                            TemplateFooter: this.soTienMGFooterTemplate,
                            TemplateGroupFooter: this.soTienMGGroupFooterTemplate
                        },
                        // { Field: "TLMGDisplay", Title: "TL MG", Width: 60 },
                        {
                            Field: "BnThanhToan", Title: "BN thanh toán", Width: 100,
                            Template: this.bnThanhToanKhongChietKhauTemplate,
                            TemplateFooter: this.bnThanhToanKhongChietKhauFooterTemplate,
                            TemplateGroupFooter: this.bnThanhToanKhongChietKhauGroupFooterTemplate
                        },
                        {
                            Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230,
                            Template: this.noiThucHienKhongChietKhauTemplate
                        },
                        {
                            Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 100,
                            Template: this.tinhTrangTemplate,
                        },
                    ];
                    this.gridCoChietKhauColumns = [
                        {
                            Field: "id", Title: "#", Width: 45, Sortable: true,
                            Template: this.sttCoChietKhauTemplate
                        },
                        { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 80 },
                        { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 200 },
                        { Field: "LoaiGia", Title: "Loại Giá", Width: 80 },
                        { Field: "SoLuong", Title: "SL", Width: 30 },
                        {
                            Field: "DonGia", Title: "Đơn Giá", Width: 100,
                            Template: this.donGiaChietKhauTemplate,
                            TemplateFooter: this.donGiaChietKhauFooterTemplate
                        },
                        {
                            Field: "ThanhTien", Title: "Thành Tiền", Width: 100,
                            Template: this.thanhTienChietKhauTemplate,
                            TemplateFooter: this.thanhTienChietKhauFooterTemplate,
                            TemplateGroupFooter: this.thanhTienChietKhauGroupFooterTemplate
                        },
                        {
                            Field: "TyLeChietKhauDisplay", Title: "TL CK", Width: 100,
                            Template: this.tyLeChietKhauCoChietKhauTemplate,
                        },
                        {
                            Field: "DuocGiamTrongGoi", Title: "DG Trong Gói", Width: 100,
                            Template: this.duocGiamTrongGoiCoChietKhauTemplate,
                            TemplateFooter: this.duocGiamTrongGoiCoChietKhauFooterTemplate
                        },
                        {
                            Field: "ThanhTienTrongGoi", Title: "TT Trong Gói", Width: 100,
                            Template: this.thanhTienTrongGoiChietKhauTemplate,
                            TemplateFooter: this.thanhTienTrongGoiChietKhauFooterTemplate,
                            TemplateGroupFooter: this.thanhTienTrongGoiChietKhauGroupFooterTemplate
                        },
                        {
                            Field: "NoiThucHienDisplay", Title: "Nơi thực hiện", Width: 230,
                            Template: this.noiThucHienChietKhauTemplate
                        },
                        {
                            Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 100,
                            Template: this.tinhTrangTemplate,
                        }
                    ];
                    //chua co documenttype
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].DanhMucBenhVien;
                    this.tiepNhanBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["TiepNhanBenhNhanViewModel"];
                    this.tiepNhanBenhNhan.BenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["BenhNhanTiepNhanBenhNhanViewModel"]();
                    this.lstBHTN = new Array();
                    this.setValueForGridBHTN();
                    this.huyBHTN();
                    this.refreshGrid();
                    this.themChiDinhDichVuModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemChiDinhDichVu"]();
                    this.themChiDinhGoiModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemChiDinhDichVu"]();
                    //this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                    //this.themChiDinhDichVuModel.DoiTuongUuDaiId = this.tiepNhanBenhNhan.DoiTuongUuDaiId;
                    this.clearThongTinTaiKhoanBenhNhan();
                    this.clearThemTaiLieu();
                };
                LichSuTiepNhanChiTietComponent.prototype.getSoTienBHYTSeThanhToan = function () {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/GetSoTienBHYTSeThanhToan").subscribe(function (resultData) {
                        _this.soTienBHYTSeThanhToan = resultData;
                        //console.log("getSoTienBHYTSeThanhToan = ", this.soTienBHYTSeThanhToan);
                    });
                };
                LichSuTiepNhanChiTietComponent.prototype.getListTenTrieuChungKham = function () {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/GetListTenTrieuChungKhamAsync").subscribe(function (resultData) {
                        _this.TrieuChungTiepNhanResource = resultData;
                    });
                };
                LichSuTiepNhanChiTietComponent.prototype.huyBHTN = function () {
                    this.isUpdateGrid = false;
                    this.clearThemBHTN();
                };
                LichSuTiepNhanChiTietComponent.prototype.clearThemBHTN = function () {
                    this.themBaoHiemTuNhanModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemBaoHiemTuNhan"]();
                };
                LichSuTiepNhanChiTietComponent.prototype.clearThongTinTaiKhoanBenhNhan = function () {
                    this.thongTinTaiKhoanBenhNhan = null;
                };
                LichSuTiepNhanChiTietComponent.prototype.clearThemTaiLieu = function () {
                    this.themTaiLieu = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemTaiLieuDinhKem"]();
                };
                LichSuTiepNhanChiTietComponent.prototype.setDefaultData = function () {
                    this.isDungTuyenDisplay = null;
                    this.isDungTuyen = false;
                    this.isSearchQRCodeEnable = true;
                    this.soTuoiDisplay = null;
                    this.hoTenDaTimKiem = null;
                    this.maSoTheDaTimKiem = null;
                    this.ngaySinhDaTimKiem = null;
                    this.soPhanTramHuongBHYT = null;
                    this.totalBenhNhan = 0;
                    this.lstBenhNhan = new Array();
                    this.modelTimKiemBenhNhan = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["TimKiemBenhNhanGridVo"]();
                    this.isOutOfDate = false;
                };
                LichSuTiepNhanChiTietComponent.prototype.getBenhNhan = function (id) {
                    var _this = this;
                    this.showPopupLoadingData();
                    this.apiService.post("TiepNhanBenhNhan/GetYeuCauKhamBenh?id=" + id).subscribe(function (resultData) {
                        if (resultData == null || resultData == undefined)
                            return;
                        _this.tiepNhanBenhNhan = resultData;
                        console.log("getBenhNhan", _this.tiepNhanBenhNhan);
                        var ngaySinh = Object(_progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_15__["parseDate"])(_this.tiepNhanBenhNhan.NgayThangNamSinh);
                        if (ngaySinh != null) {
                            _this.ThongTinBenhNhanNgaySinhChange(ngaySinh);
                        }
                        _this.closePopupLoadingData();
                        if (resultData.LoaiVoucher == null) {
                            _this.loaiVoucher = 0;
                        }
                        else {
                            _this.loaiVoucher = resultData.LoaiVoucher;
                        }
                        // thong tin BHYT
                        if (resultData.BHYTNgayHieuLuc != null && resultData.BHYTNgayHieuLuc != undefined) {
                            var ngayCoHieuLuc = new Date(resultData.BHYTNgayHieuLuc);
                            _this.tiepNhanBenhNhan.NgayCoHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDate(ngayCoHieuLuc, "dd/mm/yyyy");
                        }
                        if (resultData.BHYTNgayHetHan != null && resultData.BHYTNgayHetHan != undefined) {
                            var ngayHetHan = new Date(resultData.BHYTNgayHetHan);
                            _this.tiepNhanBenhNhan.NgayHetHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDate(ngayHetHan, "dd/mm/yyyy");
                        }
                        if (resultData.BHYTNgayDu5Nam != null && resultData.BHYTNgayDu5Nam != undefined) {
                            var ngayDu5Nam = new Date(resultData.BHYTNgayDu5Nam);
                            _this.tiepNhanBenhNhan.NgayDu5NamDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDate(ngayDu5Nam, "dd/mm/yyyy");
                        }
                        if (resultData.BHYTMaDKBD != null && resultData.BHYTMaDKBD != undefined) {
                            _this.setSoPhanTramHuongBHYT(resultData.BHYTMaSoThe);
                            _this.apiService.post("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + resultData.BHYTMaDKBD).subscribe(function (resultData) {
                                _this.tiepNhanBenhNhan.NoiDangKyBHYT = resultData;
                            }, function () {
                            });
                        }
                        // BHTN
                        if (resultData.BaoHiemTuNhans != undefined && resultData.BaoHiemTuNhans != null) {
                            resultData.BaoHiemTuNhans.forEach(function (item) {
                                var model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemBaoHiemTuNhanGridVo"]();
                                model.Id = item.Id;
                                model.CongTyBaoHiemTuNhanId = item.BHTNCongTyBaoHiemId;
                                model.CongTyDisplay = item.CongTyDisplay;
                                model.DiaChi = item.BHTNDiaChi;
                                model.MaSoThe = item.BHTNMaSoThe;
                                model.SoDienThoai = item.BHTNSoDienThoai;
                                model.NgayHetHan = item.BHTNNgayHetHan;
                                if (item.BHTNNgayHetHan != null) {
                                    var dateNgayHetHan = new Date(model.NgayHetHan);
                                    model.NgayHetHanDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDate(dateNgayHetHan, "dd/mm/yyyy");
                                }
                                else {
                                    model.NgayHetHanDisplay = null;
                                }
                                model.NgayHieuLuc = item.BHTNNgayHieuLuc;
                                if (item.BHTNNgayHieuLuc != null) {
                                    var dateNgayHieuLuc = new Date(model.NgayHieuLuc);
                                    model.NgayHieuLucDisplay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDate(dateNgayHieuLuc, "dd/mm/yyyy");
                                }
                                else {
                                    model.NgayHieuLucDisplay = null;
                                }
                                _this.lstBHTN.push(model);
                            });
                            _this.setValueForGridBHTN();
                        }
                        // BHTN
                        _this.isHaveBHYTUpdated = resultData.CoBHYT;
                        _this.tiepNhanBenhNhan.BenhNhan.GioiTinhDisplay = resultData.BenhNhan.GioiTinh == 1 ? "Nam" : "Nữ";
                        if (_this.tiepNhanBenhNhan.BHYTMucHuong == null) {
                            _this.tiepNhanBenhNhan.IsCheckedBHYT = false;
                        }
                        if (_this.tiepNhanBenhNhan.IsCheckedBHYT) {
                        }
                        else {
                            _this.tiepNhanBenhNhan.TinhTrangThe = src_app_shared_enum_tinh_trang_the_enum__WEBPACK_IMPORTED_MODULE_6__["TinhTrangThe"].KhongXacDinh;
                        }
                        _this.setDuocHuongBHYT(_this.tiepNhanBenhNhan.CoBHYT, _this.tiepNhanBenhNhan.LyDoVaoVien);
                        _this.setDataForDichVuKhac();
                        _this.setDataForTaiLieuDinhKem();
                        _this.refreshGrid();
                    }, function () {
                        //console.log("error")
                    });
                };
                LichSuTiepNhanChiTietComponent.prototype.setDuocHuongBHYT = function (CoBHYT, LyDoVaoVien) {
                    if (CoBHYT === void 0) { CoBHYT = false; }
                    if (LyDoVaoVien === void 0) { LyDoVaoVien = 1; }
                    var dateNow = new Date();
                    var dateNgayHetHan = new Date(this.tiepNhanBenhNhan.BHYTNgayHetHan);
                    if (CoBHYT && LyDoVaoVien == 1 && dateNgayHetHan > dateNow) {
                        this.themChiDinhDichVuModel.DuocHuongBHYT = true;
                        this.themChiDinhGoiModel.DuocHuongBHYT = true;
                        this.duocHuongBHYT = true;
                        this.themChiDinhDichVuModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                        this.themChiDinhGoiModel.BHYTMucHuong = this.tiepNhanBenhNhan.BHYTMucHuong;
                        this.addBHYTForGridChiDinhDichVu();
                    }
                    else {
                        this.themChiDinhDichVuModel.DuocHuongBHYT = false;
                        this.themChiDinhGoiModel.DuocHuongBHYT = false;
                        this.duocHuongBHYT = false;
                        this.themChiDinhDichVuModel.BHYTMucHuong = null;
                        this.themChiDinhGoiModel.BHYTMucHuong = null;
                        //this.removeBHYTForGridChiDinhDichVu();
                    }
                };
                LichSuTiepNhanChiTietComponent.prototype.removeBHYTForGridChiDinhDichVu = function () {
                    //khac
                    for (var index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                        var item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                        if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0) {
                            item.DuocHuongBHYT = false;
                        }
                    }
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                };
                LichSuTiepNhanChiTietComponent.prototype.setDataForDichVuKhac = function () {
                    var _this = this;
                    if (this.tiepNhanBenhNhan.YeuCauKhacGrid != null) {
                        if (this.tiepNhanBenhNhan.YeuCauKhacGrid.length == 0) {
                            this.showbuttonLuuVaInPhieuXetNghiem = false;
                        }
                        else {
                            if (this.showbuttonLuuVaInPhieuXetNghiem == false) {
                                this.tiepNhanBenhNhan.YeuCauKhacGrid.forEach(function (element) {
                                    _this.showbuttonLuuVaInPhieuXetNghiem = _this.dichVuSarsCoVs.includes(element.MaDichVuId);
                                });
                            }
                        }
                    }
                    this.gridDataKhacCoChietKhauArray = [];
                    this.gridDataKhacDisplay = {
                        data: this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (obj) { return obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null; }),
                        total: this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (obj) { return obj.IsGoiCoChietKhau == false || obj.IsGoiCoChietKhau == null; }).length
                    };
                    var arrayNhomGoiCoChietKhau = [];
                    this.gridDataKhacCoChietKhauDisplay = this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (obj) { return obj.IsGoiCoChietKhau == true; });
                    this.gridDataKhacCoChietKhauDisplay.forEach(function (e) {
                        if (!arrayNhomGoiCoChietKhau.some(function (o) { return o == e.TenGoiChietKhau; })) {
                            arrayNhomGoiCoChietKhau.push(e.TenGoiChietKhau);
                        }
                    });
                    arrayNhomGoiCoChietKhau.forEach(function (e) {
                        var resultArray = [];
                        _this.gridDataKhacCoChietKhauDisplay.forEach(function (o) {
                            if (e == o.TenGoiChietKhau) {
                                resultArray.push(o);
                            }
                        });
                        _this.gridDataKhacCoChietKhauArray.push(Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_7__["process"])(resultArray, _this.stateKhamBenh));
                    });
                    this.setSoLuongChoGridKhac();
                };
                LichSuTiepNhanChiTietComponent.prototype.checkValidAddGoiCoChietKhau = function (id) {
                    var model = this.tiepNhanBenhNhan.YeuCauKhacGrid
                        .find(function (obj) { return obj.GoiCoChietKhauId == id; });
                    if (model != undefined) {
                        return false;
                    }
                    return true;
                };
                LichSuTiepNhanChiTietComponent.prototype.setSoLuongChoGridKhac = function () {
                    this.soLuongGoiCoChietKhau = this.gridDataKhacCoChietKhauArray.length - 1;
                };
                LichSuTiepNhanChiTietComponent.prototype.setDataForTaiLieuDinhKem = function () {
                    //console.log("abc = ", this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length);
                    this.gridDataTaiLieuDinhKem = {
                        data: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans,
                        total: this.tiepNhanBenhNhan.HoSoYeuCauTiepNhans.length
                    };
                };
                LichSuTiepNhanChiTietComponent.prototype.refreshGrid = function () {
                    if (!this.cdRef.destroyed) {
                        this.cdRef.detectChanges();
                    }
                    if (this.gridChildBHTN != undefined) {
                        this.gridChildBHTN.setDataSource();
                    }
                    if (this.gridChildCoChietKhau != undefined) {
                        this.gridChildCoChietKhau.setDataSource();
                    }
                    //console.log("grid ko chiet khau ", this.gridChildKhongChietKhau)
                    if (this.gridChildKhongChietKhau != undefined) {
                        this.gridChildKhongChietKhau.setDataSource();
                    }
                    if (this.gridTaiLieuDinhKem != undefined) {
                        this.gridTaiLieuDinhKem.setDataSource();
                    }
                    //this.cdRef.detectChanges();
                };
                LichSuTiepNhanChiTietComponent.prototype.addBHYTForGridChiDinhDichVu = function () {
                    //khac
                    for (var index = 0; index < this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                        var item = this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                    }
                    //this.setGiaBHYT();
                    this.setDataForDichVuKhac();
                    this.refreshGrid();
                };
                LichSuTiepNhanChiTietComponent.prototype.setValueForGridBHTN = function () {
                    var index = 1;
                    this.lstBHTN.forEach(function (obj) {
                        obj.STT = index;
                        index = index + 1;
                    });
                    this.updateBHTN();
                    this.gridDataSourceBHTN = {
                        data: this.lstBHTN,
                        total: this.lstBHTN.length
                    };
                };
                LichSuTiepNhanChiTietComponent.prototype.updateBHTN = function () {
                    var _this = this;
                    this.tiepNhanBenhNhan.BaoHiemTuNhans = new Array();
                    this.lstBHTN.forEach(function (obj) {
                        var model = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["BaoHiemTuNhanViewModel"]();
                        model.Id = obj.Id;
                        model.BHTNCongTyBaoHiemId = obj.CongTyBaoHiemTuNhanId;
                        model.BHTNDiaChi = obj.DiaChi;
                        model.BHTNMaSoThe = obj.MaSoThe;
                        model.BHTNNgayHetHan = obj.NgayHetHan;
                        model.BHTNNgayHieuLuc = obj.NgayHieuLuc;
                        model.BHTNSoDienThoai = obj.SoDienThoai;
                        _this.tiepNhanBenhNhan.BaoHiemTuNhans.push(model);
                    });
                };
                LichSuTiepNhanChiTietComponent.prototype.setSoPhanTramHuongBHYT = function (maThe) {
                    var maTheArray = maThe.split("");
                    if (maTheArray[2] == '1') {
                        this.soPhanTramHuongBHYT = 100;
                    }
                    else if (maTheArray[2] == '2') {
                        this.soPhanTramHuongBHYT = 100;
                    }
                    else if (maTheArray[2] == '3') {
                        this.soPhanTramHuongBHYT = 95;
                    }
                    else if (maTheArray[2] == '4') {
                        this.soPhanTramHuongBHYT = 80;
                    }
                    else {
                        this.soPhanTramHuongBHYT = 100;
                    }
                    this.tiepNhanBenhNhan.BHYTMucHuong = this.soPhanTramHuongBHYT;
                    this.themChiDinhDichVuModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
                    this.themChiDinhGoiModel.BHYTMucHuong = this.soPhanTramHuongBHYT;
                };
                LichSuTiepNhanChiTietComponent.prototype.duocHuongBHYTChange = function ($event, maDichVuId, nhom) {
                    var item = this.tiepNhanBenhNhan.YeuCauKhacGrid
                        .filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                        .find(function (obj) { return obj.MaDichVuId == maDichVuId && obj.Nhom == nhom; });
                    //console.log("duocHuongBHYTChange = ", maDichVuId, nhom, $event, item);
                    item.DuocHuongBHYT = $event;
                    if ($event) {
                        item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100;
                        item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                        item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                    }
                    else {
                        item.BHYTThanhToan = 0;
                        item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                        item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                    }
                    this.setGiaBHYT();
                    //this.setDataForDichVuKhac();
                    //this.refreshGrid();
                };
                LichSuTiepNhanChiTietComponent.prototype.setGiaBHYT = function () {
                    var _this = this;
                    //console.log("setGiaBHYT = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                    //this.setGiaBHYTSoLanKham();
                    var soLanKham = 1;
                    var tyLeLan1 = 0;
                    var tyLeLan2 = 0;
                    var tyLeLan3 = 0;
                    var tyLeLan4 = 0;
                    var tyLeLan5 = 0;
                    ;
                    this.apiService.get("TiepNhanBenhNhan/GetTyLeSoLanHuongBHYTDichVu").subscribe(function (resultData) {
                        if (resultData != null && resultData != undefined) {
                            //console.log("setGiaBHYTSoLanKham = ", resultData, resultData[0],  resultData[1]);
                            tyLeLan1 = resultData[0];
                            tyLeLan2 = resultData[1];
                            tyLeLan3 = resultData[2];
                            tyLeLan4 = resultData[3];
                            tyLeLan5 = resultData[4];
                            //console.log("Trươc = ", this.tiepNhanBenhNhan.YeuCauKhacGrid);
                            if (_this.tiepNhanBenhNhan.YeuCauKhacGrid != null && _this.tiepNhanBenhNhan.YeuCauKhacGrid != undefined) {
                                for (var index = 0; index < _this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                                    var item = _this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                                    //console.log("index = ", item, soLanKham);
                                    if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && item.GiaBHYT != 0) {
                                        if (item.Nhom == 'DỊCH VỤ KHÁM BỆNH') {
                                            if (soLanKham == 1) {
                                                item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan1 / 100;
                                                soLanKham = soLanKham + 1;
                                            }
                                            else if (soLanKham == 2) {
                                                item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan2 / 100;
                                                soLanKham = soLanKham + 1;
                                            }
                                            else if (soLanKham == 3) {
                                                item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan3 / 100;
                                                soLanKham = soLanKham + 1;
                                            }
                                            else if (soLanKham == 4) {
                                                item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan4 / 100;
                                                soLanKham = soLanKham + 1;
                                            }
                                            else if (soLanKham == 5) {
                                                item.BHYTThanhToan = item.GiaBHYT * item.SoLuong * item.TiLeBaoHiemThanhToan / 100 * tyLeLan5 / 100;
                                                soLanKham = soLanKham + 1;
                                            }
                                            else {
                                                item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100 * 0 / 100;
                                                soLanKham = soLanKham + 1;
                                            }
                                        }
                                        else {
                                            item.BHYTThanhToan = item.GiaBHYT * item.TiLeBaoHiemThanhToan / 100;
                                        }
                                        item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                                        item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                    }
                                }
                            }
                        }
                        var bhytKhacKhamBenh = _this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                            .reduce(function (sum, item) { return sum + item.BHYTThanhToan; }, 0);
                        if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh < _this.soTienBHYTSeThanhToan) {
                            for (var index = 0; index < _this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                                var item = _this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                                if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && _this.tiepNhanBenhNhan.BHYTMucHuong != null) {
                                    item.BHYTThanhToan = item.BHYTThanhToan;
                                    item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                                    item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                }
                            }
                        }
                        else if (bhytKhacKhamBenh != 0 && bhytKhacKhamBenh >= _this.soTienBHYTSeThanhToan) {
                            for (var index = 0; index < _this.tiepNhanBenhNhan.YeuCauKhacGrid.length; index++) {
                                var item = _this.tiepNhanBenhNhan.YeuCauKhacGrid[index];
                                if (item.DuocHuongBHYT == true && item.BHYTThanhToan != 0 && _this.tiepNhanBenhNhan.BHYTMucHuong != null) {
                                    item.BHYTThanhToan = item.BHYTThanhToan * _this.tiepNhanBenhNhan.BHYTMucHuong / 100;
                                    item.SoTienMG = (item.ThanhTien - item.BHYTThanhToan) * item.TLMG / 100;
                                    item.BnThanhToan = item.ThanhTien - item.BHYTThanhToan - item.SoTienMG;
                                }
                            }
                        }
                        _this.setDataForDichVuKhac();
                        _this.refreshGrid();
                    });
                };
                LichSuTiepNhanChiTietComponent.prototype.totalKhac = function (field, goiCoChietkhauId) {
                    if (goiCoChietkhauId === void 0) { goiCoChietkhauId = 0; }
                    switch (field) {
                        case 'TongThanhTien':
                            return (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == true; })
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0));
                        case 'ThanhTien':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'CongNo':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                                .reduce(function (sum, item) { return sum + item.CongNo; }, 0);
                        case 'SoTienMienGiam':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                                .reduce(function (sum, item) { return sum + item.SoTienMienGiam; }, 0);
                        case 'ThanhTienGoiChietKhau':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.GoiCoChietKhauId == goiCoChietkhauId; })
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'TongThanhTienGoiChietKhau':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == true; })
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'BHYTThanhToan':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                                .reduce(function (sum, item) { return sum + item.BHYTThanhToan; }, 0);
                        case 'SoTienMG':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                                .reduce(function (sum, item) { return sum + item.SoTienMG; }, 0);
                        case 'BnThanhToan':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                                .reduce(function (sum, item) { return sum + item.BnThanhToan; }, 0);
                        case 'TongBnThanhToan':
                            return (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                                .reduce(function (sum, item) { return sum + item.BnThanhToan; }, 0)) + (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == true; })
                                .reduce(function (sum, item) { return sum + item.ThanhTienTrongGoi; }, 0));
                        case 'ThanhTienTrongGoi':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.GoiCoChietKhauId == goiCoChietkhauId; })
                                .reduce(function (sum, item) { return sum + item.ThanhTienTrongGoi; }, 0);
                        case 'TongThanhTienTrongGoi':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == true; })
                                .reduce(function (sum, item) { return sum + item.ThanhTienTrongGoi; }, 0);
                        case 'TongThanhTienGoi':
                            return this.tiepNhanBenhNhan.YeuCauKhacGrid
                                .reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        case 'TongThanhTienBNTra':
                            return (this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == false || o.IsGoiCoChietKhau == null; })
                                .reduce(function (sum, item) { return sum + item.BnThanhToan; }, 0)) + this.tiepNhanBenhNhan.YeuCauKhacGrid.filter(function (o) { return o.IsGoiCoChietKhau == true; })
                                .reduce(function (sum, item) { return sum + item.ThanhTienTrongGoi; }, 0);
                    }
                };
                ;
                LichSuTiepNhanChiTietComponent.prototype.onTabSelect = function (event) {
                    this.removeThemDichVuValue();
                    this.removeThemGoiValue();
                };
                LichSuTiepNhanChiTietComponent.prototype.removeThemDichVuValue = function () {
                    this.themChiDinhDichVuModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemChiDinhDichVu"]();
                    this.themChiDinhDichVuModel.ThanhTien = null;
                    this.loaiTiepNhan = 1;
                    this.isGoiCoChietKhau = null;
                    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                };
                LichSuTiepNhanChiTietComponent.prototype.removeThemGoiValue = function () {
                    this.themChiDinhGoiModel = new _tiep_nhan_benh_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ThemChiDinhDichVu"]();
                    this.themChiDinhGoiModel.ThanhTien = null;
                    this.loaiTiepNhan = 1;
                    this.isGoiCoChietKhau = null;
                    this.setDuocHuongBHYT(this.tiepNhanBenhNhan.CoBHYT, this.tiepNhanBenhNhan.LyDoVaoVien);
                };
                LichSuTiepNhanChiTietComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                };
                LichSuTiepNhanChiTietComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                LichSuTiepNhanChiTietComponent.prototype.viewTaiLieu = function (file) {
                    var duongDan = file.DuongDan;
                    if (file.AddNew) {
                        duongDan = file.DuongDanTmp;
                    }
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpParams"]({
                        fromObject: {
                            tenGuid: file.TenGuid,
                            duongDan: duongDan,
                        }
                    });
                    this.apiService.get('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe(function (resp) {
                        if (resp) {
                            if (file.TenGuid.indexOf(".pdf") != -1 || file.TenGuid.indexOf(".PDF") != -1) {
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
                        }
                    });
                };
                LichSuTiepNhanChiTietComponent.prototype.quayLai = function () {
                    // this.router.navigate(['/lich-su-tiep-nhan']);
                    this.location.back();
                };
                LichSuTiepNhanChiTietComponent.prototype.ThongTinBenhNhanNgaySinhChange = function (event) {
                    if (this.hoTenDaTimKiem == this.tiepNhanBenhNhan.HoTen && this.ngaySinhDaTimKiem == event
                        && this.maSoTheDaTimKiem == this.tiepNhanBenhNhan.BHYTMaSoThe) {
                        this.isSearchQRCodeEnable = false;
                    }
                    else {
                        this.isSearchQRCodeEnable = true;
                    }
                    // if (this.tiepNhanBenhNhan.NgayThangNamSinh != null) {
                    //   this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
                    // }
                    if (event == null || event == undefined) {
                        this.under6yearsold = false;
                        this.tiepNhanBenhNhan.NamSinh = null;
                    }
                    //console.log("ThongTinBenhNhanNgaySinhChange = ", $event);
                    this.getAge(event, new Date);
                };
                LichSuTiepNhanChiTietComponent.prototype.DaysInMonth = function (date2_UTC) {
                    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
                    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
                    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
                    return monthLength;
                };
                LichSuTiepNhanChiTietComponent.prototype.getAge = function (date_1, date_2) {
                    //convert to UTC
                    var date2_UTC = new Date(Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate()));
                    var date1_UTC = new Date(Date.UTC(date_1.getUTCFullYear(), date_1.getUTCMonth(), date_1.getUTCDate()));
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
                    }
                    else {
                        this.under6yearsold = false;
                    }
                    this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
                    //console.log(years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix);
                };
                LichSuTiepNhanChiTietComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.quayLai();
                        event.preventDefault();
                    }
                };
                // BVHD-3761
                //================================================================================================
                LichSuTiepNhanChiTietComponent.prototype.getListDichVuSarsCoVs = function () {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/GetSarsCoVs").subscribe(function (resultData) {
                        _this.dichVuSarsCoVs = [];
                        _this.dichVuSarsCoVs = resultData.Ids;
                        _this.loaiBenhPham = resultData.LoaiMauXetNghiem;
                        _this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText;
                    });
                };
                return LichSuTiepNhanChiTietComponent;
            }());
            LichSuTiepNhanChiTietComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridBHTN', { static: false })
            ], LichSuTiepNhanChiTietComponent.prototype, "gridChildBHTN", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCoChietKhau', { static: false })
            ], LichSuTiepNhanChiTietComponent.prototype, "gridChildCoChietKhau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKhongChietKhau', { static: false })
            ], LichSuTiepNhanChiTietComponent.prototype, "gridChildKhongChietKhau", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridTaiLieuDinhKem', { static: false })
            ], LichSuTiepNhanChiTietComponent.prototype, "gridTaiLieuDinhKem", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taiLieuTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "taiLieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTaiLieuTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "actionTaiLieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "noiThucHienChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhamBenhFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "donGiaKhamBenhFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhamBenhTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "donGiaKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhamBenhTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhamBenhFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienKhamBenhFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhamBenhGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienKhamBenhGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhamBenhTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bhytThanhToanKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhamBenhFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bhytThanhToanKhamBenhFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhamBenhGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bhytThanhToanKhamBenhGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhamBenhTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bnThanhToanKhamBenhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhamBenhFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bnThanhToanKhamBenhFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhamBenhGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bnThanhToanKhamBenhGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKyThuatFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "donGiaKyThuatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKyThuatTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "donGiaKyThuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKyThuatTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienKyThuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKyThuatFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienKyThuatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKyThuatGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienKyThuatGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKyThuatTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bnThanhToanKyThuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKyThuatFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bnThanhToanKyThuatFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKyThuatGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bnThanhToanKyThuatGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhongChietKhauFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "donGiaKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKhongChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "donGiaKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongChietKhauFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongChietKhauGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienKhongChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhongChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bhytThanhToanKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhongChietKhauFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bhytThanhToanKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytThanhToanKhongChietKhauGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bhytThanhToanKhongChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhongChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bnThanhToanKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhongChietKhauFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bnThanhToanKhongChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanKhongChietKhauGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "bnThanhToanKhongChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienKhongChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "noiThucHienKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocHuongBHYTTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "duocHuongBHYTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "donGiaChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaChietKhauFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "donGiaChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienChietKhauFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienChietKhauGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tyLeChietKhauCoChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "tyLeChietKhauCoChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocGiamTrongGoiCoChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "duocGiamTrongGoiCoChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocGiamTrongGoiCoChietKhauFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "duocGiamTrongGoiCoChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTrongGoiChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienTrongGoiChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTrongGoiChietKhauFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienTrongGoiChietKhauFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTrongGoiChietKhauGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "thanhTienTrongGoiChietKhauGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNoTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "congNoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMGTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "soTienMGTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNoFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "congNoFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMGFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "soTienMGFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNoGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "congNoGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMGGroupFooterTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "soTienMGGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttKhongChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "sttKhongChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttCoChietKhauTemplate', { static: true })
            ], LichSuTiepNhanChiTietComponent.prototype, "sttCoChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], LichSuTiepNhanChiTietComponent.prototype, "keyEvent", null);
            LichSuTiepNhanChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lich-su-tiep-nhan-chi-tiet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-tiep-nhan-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-tiep-nhan-chi-tiet.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.scss")).default]
                })
            ], LichSuTiepNhanChiTietComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.scss": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.scss ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aWVwLW5oYW4tYmVuaC1uaGFuL2xpY2gtc3UtdGllcC1uaGFuL2xpY2gtc3UtdGllcC1uaGFuLWxpc3QvbGljaC1zdS10aWVwLW5oYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.ts": 
        /*!*******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.ts ***!
          \*******************************************************************************************************************************/
        /*! exports provided: LichSuTiepNhanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuTiepNhanListComponent", function () { return LichSuTiepNhanListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _lich_su_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lich-su-tiep-nhan.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-block */ "./node_modules/@iconify/icons-ic/twotone-block.js");
            /* harmony import */ var _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _lich_su_tiep_nhan_popup_lich_su_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _xem_truoc_bang_ke_chi_phi_poup_xem_truoc_bang_ke_chi_phi_poup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component.ts");
            var LichSuTiepNhanListComponent = /** @class */ (function () {
                function LichSuTiepNhanListComponent(authService, router, notificationService, dialog, apiService, location, route) {
                    this.authService = authService;
                    this.router = router;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.location = location;
                    this.route = route;
                    this.expression = false;
                    this.gridColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icBlock = _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.soPhanTramHuongBHYT = null;
                    this._gridColumns = [];
                    this.showCancelSearch = false;
                    this.addtionStringDefault = null;
                    this.sort = [{
                            field: "ThoiDiemTiepNhan",
                            dir: 'desc'
                        }
                    ];
                    this.baseRoute = "/lich-su-tiep-nhan";
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"];
                }
                LichSuTiepNhanListComponent.prototype.ngOnInit = function () {
                    this.lichSuTiepNhan = new _lich_su_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_10__["LichSuTiepNhan"]();
                    var dateNow = new Date();
                    this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                    this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
                    if (this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != null) {
                        this.lichSuTiepNhan.ThoiDiemTiepNhanTu = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.lichSuTiepNhan.ThoiDiemTiepNhanTu = null;
                    }
                    if (this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != null) {
                        this.lichSuTiepNhan.ThoiDiemTiepNhanDen = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.lichSuTiepNhan.ThoiDiemTiepNhanDen = null;
                    }
                    var queryString = JSON.stringify(this.lichSuTiepNhan);
                    this.addtionStringDefault = queryString;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].LichSuTiepNhan;
                    this.backWithSearch();
                    this.gridColumns = [
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.chiTietTemplate },
                        { Field: "MaBenhNhan", Title: "Mã NB", Width: 100, Sortable: true },
                        { Field: "HoTen", Title: "Tên Người Bệnh", Width: 180, Sortable: true },
                        { Field: "NamSinh", Title: "Năm Sinh", Width: 135, Sortable: true, Template: this.hienThiNgayThangNamTemplate },
                        { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 150, Sortable: true },
                        { Field: "TenNhanVienTiepNhan", Title: "Người tiếp nhận", Width: 180, Sortable: true },
                        { Field: "ThoiDiemTiepNhan", Title: "Tiếp Nhận Lúc", Width: 190, Sortable: true, Template: this.thoiDiemTiepNhanTemplate },
                        { Field: "TrieuChungTiepNhan", Title: "Lý Do Khám Bệnh", Width: 145, Sortable: true },
                        { Field: "DoiTuong", Title: "Đối Tượng", Width: 140, Sortable: true },
                        { Field: "CoBaoHiemTuNhan", Title: "Bảo Hiểm Tư Nhân", Width: 140, Sortable: true },
                        { Field: "TrangThaiYeuCauTiepNhan", Title: "Trạng Thái", Width: 140, Sortable: true, Template: this.trangThaiTemplate },
                        { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }
                    ];
                };
                LichSuTiepNhanListComponent.prototype.backWithSearch = function () {
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].getItem("additionalSearchStringLichSuTiepNhan");
                            if (additionalSearchString != null) {
                                this.lichSuTiepNhan = JSON.parse(additionalSearchString);
                                if (this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != undefined && this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != null && this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != "") {
                                    this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat = new Date(this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat);
                                }
                                else {
                                    this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat = null;
                                }
                                if (this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != undefined && this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != null && this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != "") {
                                    this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat = new Date(this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat);
                                }
                                else {
                                    this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat = null;
                                }
                                this.addtionStringDefault = additionalSearchString;
                                this.gridChild.additionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].removeItem("additionalSearchStringLichSuTiepNhan");
                    }
                };
                LichSuTiepNhanListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.TimkiemNangCao();
                    }
                };
                LichSuTiepNhanListComponent.prototype.clearSearch = function () {
                    this.searchString = "";
                    this.lichSuTiepNhan.SearchString = null;
                    this.gridChild.search();
                };
                LichSuTiepNhanListComponent.prototype.Timkiem = function () {
                    var QueryString = null;
                    this.gridChild._additionalSearchString = null;
                    if (this.searchString != null) {
                        QueryString = this.searchString;
                    }
                    this.gridChild.searchString = QueryString;
                    this.gridChild.search();
                };
                LichSuTiepNhanListComponent.prototype.TimkiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != null) {
                        this.lichSuTiepNhan.ThoiDiemTiepNhanTu = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.lichSuTiepNhan.ThoiDiemTiepNhanTu = null;
                    }
                    if (this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != null) {
                        this.lichSuTiepNhan.ThoiDiemTiepNhanDen = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.lichSuTiepNhan.ThoiDiemTiepNhanDen = null;
                    }
                    if (this.lichSuTiepNhan.NamSinh != null)
                        this.lichSuTiepNhan.NamSinh = Math.round(this.lichSuTiepNhan.NamSinh);
                    var queryString = JSON.stringify(this.lichSuTiepNhan);
                    //this.gridChild.searchString = null;
                    this.gridChild._additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].setItem("additionalSearchStringLichSuTiepNhan", queryString);
                    this.gridChild.search();
                };
                LichSuTiepNhanListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.gridChild.searchString = null;
                        // self.gridChild._additionalSearchString = null;
                        self.TimkiemNangCao();
                    }
                };
                LichSuTiepNhanListComponent.prototype.thoiDiemTNChange = function () {
                    this.TimkiemNangCao();
                };
                LichSuTiepNhanListComponent.prototype.view = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].View)) {
                        this.router.navigate(["/lich-su-tiep-nhan/chi-tiet/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                LichSuTiepNhanListComponent.prototype.InBangKeChiPhiKhamBenh = function (id) {
                    this.dialog.open(_xem_truoc_bang_ke_chi_phi_poup_xem_truoc_bang_ke_chi_phi_poup_component__WEBPACK_IMPORTED_MODULE_28__["XemTruocBangKeChiPhiPopupComponent"], {
                        disableClose: false,
                        width: "1000px",
                        data: id,
                    })
                        .afterClosed()
                        .subscribe(function (result) { });
                };
                LichSuTiepNhanListComponent.prototype.InHoSoLichSuKhamBenh = function (id, laPhieuKhamBenh) {
                    var _this = this;
                    // this.dialog
                    //   .open(LichSuTiepNhanPopupComponent, {
                    //     disableClose: true,
                    //     width: "1200px",
                    //     data: { id, laPhieuKhamBenh },
                    //   });
                    this.hostingName = "http://" + "//" + window.location.host;
                    this.apiService.get("LichSuTiepNhan/InPhieuLichSuCacDichVuKhamBenh?yeuCauTiepNhanId=" + id
                        + "&hostingName=" + this.hostingName
                        + "&header=false"
                        + "&laPhieuKhamBenh=" + laPhieuKhamBenh).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null && resultData != "") {
                            _this.dialog
                                .open(_lich_su_tiep_nhan_popup_lich_su_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_24__["LichSuTiepNhanPopupComponent"], {
                                disableClose: true,
                                width: "1000px",
                                data: { html: resultData, Title: "THÔNG TIN LỊCH SỬ PHIẾU KHÁM BỆNH CÁC DỊCH VỤ" },
                            })
                                .afterClosed()
                                .subscribe(function () {
                            });
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        ;
                    });
                };
                LichSuTiepNhanListComponent.prototype.XuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("LichSuTiepNhan/ExportLichSuTiepNhan", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "LichSuTiepNhan" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return LichSuTiepNhanListComponent;
            }());
            LichSuTiepNhanListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_26__["ApiService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LichSuTiepNhanListComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
            ], LichSuTiepNhanListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemTiepNhanTemplate', { static: true })
            ], LichSuTiepNhanListComponent.prototype, "thoiDiemTiepNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiTietTemplate', { static: true })
            ], LichSuTiepNhanListComponent.prototype, "chiTietTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], { static: false })
            ], LichSuTiepNhanListComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], LichSuTiepNhanListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
            ], LichSuTiepNhanListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hienThiNgayThangNamTemplate', { static: true })
            ], LichSuTiepNhanListComponent.prototype, "hienThiNgayThangNamTemplate", void 0);
            LichSuTiepNhanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lich-su-tiep-nhan-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-tiep-nhan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-tiep-nhan-list.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.scss")).default]
                })
            ], LichSuTiepNhanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.scss": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.scss ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vbGljaC1zdS10aWVwLW5oYW4vbGljaC1zdS10aWVwLW5oYW4tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aWVwLW5oYW4tYmVuaC1uaGFuXFxsaWNoLXN1LXRpZXAtbmhhblxcbGljaC1zdS10aWVwLW5oYW4tcG9wdXBcXGxpY2gtc3UtdGllcC1uaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9saWNoLXN1LXRpZXAtbmhhbi9saWNoLXN1LXRpZXAtbmhhbi1wb3B1cC9saWNoLXN1LXRpZXAtbmhhbi1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9saWNoLXN1LXRpZXAtbmhhbi9saWNoLXN1LXRpZXAtbmhhbi1wb3B1cC9saWNoLXN1LXRpZXAtbmhhbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: LichSuTiepNhanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuTiepNhanPopupComponent", function () { return LichSuTiepNhanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var LichSuTiepNhanPopupComponent = /** @class */ (function () {
                function LichSuTiepNhanPopupComponent(dialogRef, sanitizer, apiService, dialog, notificationService, data) {
                    this.dialogRef = dialogRef;
                    this.sanitizer = sanitizer;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                    this.title = "";
                    this.length = 0;
                }
                LichSuTiepNhanPopupComponent.prototype.ngOnInit = function () {
                    this.getALlFilePDFFromHtml(this.data.html);
                };
                LichSuTiepNhanPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                LichSuTiepNhanPopupComponent.prototype.getALlFilePDFFromHtml = function (arrHtml) {
                    var _this = this;
                    this.length = arrHtml.length;
                    this.showPopupLoadingData();
                    var obj = {
                        Htmls: arrHtml,
                        TenFile: 'PhieuKhamBenh',
                        LaPhieuKhamBenh: true
                    };
                    this.apiService.postExportPdf('KhamBenh/GetFilePDFFromHtmls', obj).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: 'application/pdf' });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        _this.fileUrl = datalocalURL;
                        _this.file = file;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message !== 'Validation Failed') {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                LichSuTiepNhanPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == null
                        || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' },
                        });
                    }
                };
                LichSuTiepNhanPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData) {
                        this.popupLoadingData.close();
                    }
                };
                LichSuTiepNhanPopupComponent.prototype.downloadAllFile = function () {
                    var dateTimeNow = new Date();
                    src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(this.file, 'application/pdf', 'PhieuKhamBenh' + dateTimeNow.getFullYear() + '.pdf');
                };
                return LichSuTiepNhanPopupComponent;
            }());
            LichSuTiepNhanPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            LichSuTiepNhanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lich-su-tiep-nhan-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-tiep-nhan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-tiep-nhan-popup.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], LichSuTiepNhanPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-routing.module.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-routing.module.ts ***!
          \********************************************************************************************************/
        /*! exports provided: LichSuTiepNhanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuTiepNhanRoutingModule", function () { return LichSuTiepNhanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _lich_su_tiep_nhan_list_lich_su_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.ts");
            /* harmony import */ var _lich_su_tiep_nhan_chi_tiet_lich_su_tiep_nhan_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.ts");
            var routes = [
                {
                    path: '',
                    component: _lich_su_tiep_nhan_list_lich_su_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__["LichSuTiepNhanListComponent"],
                    data: {
                        title: 'Lịch Sử Tiếp Nhận',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuTiepNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _lich_su_tiep_nhan_chi_tiet_lich_su_tiep_nhan_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__["LichSuTiepNhanChiTietComponent"],
                    data: {
                        title: "Lịch Sử Tiếp Nhận Chi Tiết",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuTiepNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var LichSuTiepNhanRoutingModule = /** @class */ (function () {
                function LichSuTiepNhanRoutingModule() {
                }
                return LichSuTiepNhanRoutingModule;
            }());
            LichSuTiepNhanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], LichSuTiepNhanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan.model.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan.model.ts ***!
          \***********************************************************************************************/
        /*! exports provided: LichSuTiepNhan */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuTiepNhan", function () { return LichSuTiepNhan; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LichSuTiepNhan = /** @class */ (function () {
                function LichSuTiepNhan(DoiTuongId, DoiTuongBHYT, DoiTuong, TenBenh, BenhNhanId, HoTen, NamSinh, DiaChi, BhytmaSoThe, MaYeuCauTiepNhan, ThoiDiemTiepNhan, ThoiDiemTiepNhanTuFormat, ThoiDiemTiepNhanDenFormat, ThoiDiemTiepNhanTu, ThoiDiemTiepNhanDen, NhanVienTiepNhanId, NoiTiepNhanId, TrieuChungId, TrieuChungTiepNhan, TrangThaiYeuCauTiepNhan, ThoiDiemCapNhatTrangThai, SearchString) {
                    if (DoiTuongId === void 0) { DoiTuongId = null; }
                    if (DoiTuongBHYT === void 0) { DoiTuongBHYT = null; }
                    if (DoiTuong === void 0) { DoiTuong = null; }
                    if (TenBenh === void 0) { TenBenh = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (BhytmaSoThe === void 0) { BhytmaSoThe = null; }
                    if (MaYeuCauTiepNhan === void 0) { MaYeuCauTiepNhan = null; }
                    if (ThoiDiemTiepNhan === void 0) { ThoiDiemTiepNhan = null; }
                    if (ThoiDiemTiepNhanTuFormat === void 0) { ThoiDiemTiepNhanTuFormat = null; }
                    if (ThoiDiemTiepNhanDenFormat === void 0) { ThoiDiemTiepNhanDenFormat = null; }
                    if (ThoiDiemTiepNhanTu === void 0) { ThoiDiemTiepNhanTu = null; }
                    if (ThoiDiemTiepNhanDen === void 0) { ThoiDiemTiepNhanDen = null; }
                    if (NhanVienTiepNhanId === void 0) { NhanVienTiepNhanId = null; }
                    if (NoiTiepNhanId === void 0) { NoiTiepNhanId = null; }
                    if (TrieuChungId === void 0) { TrieuChungId = null; }
                    if (TrieuChungTiepNhan === void 0) { TrieuChungTiepNhan = null; }
                    if (TrangThaiYeuCauTiepNhan === void 0) { TrangThaiYeuCauTiepNhan = null; }
                    if (ThoiDiemCapNhatTrangThai === void 0) { ThoiDiemCapNhatTrangThai = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.DoiTuongId = DoiTuongId;
                    this.DoiTuongBHYT = DoiTuongBHYT;
                    this.DoiTuong = DoiTuong;
                    this.TenBenh = TenBenh;
                    this.BenhNhanId = BenhNhanId;
                    this.HoTen = HoTen;
                    this.NamSinh = NamSinh;
                    this.DiaChi = DiaChi;
                    this.BhytmaSoThe = BhytmaSoThe;
                    this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
                    this.ThoiDiemTiepNhan = ThoiDiemTiepNhan;
                    this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
                    this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
                    this.ThoiDiemTiepNhanTu = ThoiDiemTiepNhanTu;
                    this.ThoiDiemTiepNhanDen = ThoiDiemTiepNhanDen;
                    this.NhanVienTiepNhanId = NhanVienTiepNhanId;
                    this.NoiTiepNhanId = NoiTiepNhanId;
                    this.TrieuChungId = TrieuChungId;
                    this.TrieuChungTiepNhan = TrieuChungTiepNhan;
                    this.TrangThaiYeuCauTiepNhan = TrangThaiYeuCauTiepNhan;
                    this.ThoiDiemCapNhatTrangThai = ThoiDiemCapNhatTrangThai;
                    this.SearchString = SearchString;
                }
                return LichSuTiepNhan;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan.module.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan.module.ts ***!
          \************************************************************************************************/
        /*! exports provided: LichSuTiepNhanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuTiepNhanModule", function () { return LichSuTiepNhanModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _lich_su_tiep_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lich-su-tiep-nhan-routing.module */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-routing.module.ts");
            /* harmony import */ var _lich_su_tiep_nhan_list_lich_su_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component.ts");
            /* harmony import */ var _lich_su_tiep_nhan_chi_tiet_lich_su_tiep_nhan_chi_tiet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _lich_su_tiep_nhan_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lich-su-tiep-nhan.service */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan.service.ts");
            /* harmony import */ var _popup_in_bang_ke_chi_phi_kham_benh_popup_in_bang_ke_chi_phi_kham_benh_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.ts");
            /* harmony import */ var _lich_su_tiep_nhan_popup_lich_su_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component.ts");
            /* harmony import */ var _lich_su_tai_kham_lich_su_tai_kham_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lich-su-tai-kham/lich-su-tai-kham.component */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tai-kham/lich-su-tai-kham.component.ts");
            /* harmony import */ var _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../kham-benh/kham-benh.module */ "./src/app/modules/main/kham-benh/kham-benh.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm2015/index.js");
            /* harmony import */ var _thu_chi_thu_chi_vien_phi_noi_tru_cho_thu_tien_cho_thu_tien_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module.ts");
            /* harmony import */ var _tiep_nhan_benh_nhan_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../tiep-nhan-benh-nhan.module */ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.module.ts");
            var LichSuTiepNhanModule = /** @class */ (function () {
                function LichSuTiepNhanModule() {
                }
                return LichSuTiepNhanModule;
            }());
            LichSuTiepNhanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_lich_su_tiep_nhan_list_lich_su_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__["LichSuTiepNhanListComponent"], _lich_su_tiep_nhan_chi_tiet_lich_su_tiep_nhan_chi_tiet_component__WEBPACK_IMPORTED_MODULE_5__["LichSuTiepNhanChiTietComponent"], _popup_in_bang_ke_chi_phi_kham_benh_popup_in_bang_ke_chi_phi_kham_benh_component__WEBPACK_IMPORTED_MODULE_22__["InBangKeChiPhiLSKhamBenhComponent"], _lich_su_tiep_nhan_popup_lich_su_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_23__["LichSuTiepNhanPopupComponent"], _lich_su_tai_kham_lich_su_tai_kham_component__WEBPACK_IMPORTED_MODULE_24__["LichSuTaiKhamComponent"],],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _lich_su_tiep_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__["LichSuTiepNhanRoutingModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
                        _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_25__["KhamBenhModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                        _thu_chi_thu_chi_vien_phi_noi_tru_cho_thu_tien_cho_thu_tien_module__WEBPACK_IMPORTED_MODULE_29__["ChoThuTienNoiTruModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__["GridModule"],
                        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_27__["InputsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                        _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__["DropDownsModule"],
                        _tiep_nhan_benh_nhan_module__WEBPACK_IMPORTED_MODULE_30__["TiepNhanBenhNhanModule"]
                    ], providers: [
                        _lich_su_tiep_nhan_service__WEBPACK_IMPORTED_MODULE_21__["LichSuTiepNhanService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _lich_su_tiep_nhan_service__WEBPACK_IMPORTED_MODULE_21__["LichSuTiepNhanService"] },
                    ],
                    exports: [
                        _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_25__["KhamBenhModule"]
                    ],
                    entryComponents: [
                        _popup_in_bang_ke_chi_phi_kham_benh_popup_in_bang_ke_chi_phi_kham_benh_component__WEBPACK_IMPORTED_MODULE_22__["InBangKeChiPhiLSKhamBenhComponent"],
                        _lich_su_tiep_nhan_popup_lich_su_tiep_nhan_popup_component__WEBPACK_IMPORTED_MODULE_23__["LichSuTiepNhanPopupComponent"]
                    ]
                })
            ], LichSuTiepNhanModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan.service.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan.service.ts ***!
          \*************************************************************************************************/
        /*! exports provided: LichSuTiepNhanService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuTiepNhanService", function () { return LichSuTiepNhanService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var LichSuTiepNhanService = /** @class */ (function (_super) {
                __extends(LichSuTiepNhanService, _super);
                function LichSuTiepNhanService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'LichSuTiepNhan';
                    return _this;
                }
                return LichSuTiepNhanService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            LichSuTiepNhanService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            LichSuTiepNhanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LichSuTiepNhanService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.scss": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.scss ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RpZXAtbmhhbi1iZW5oLW5oYW4vbGljaC1zdS10aWVwLW5oYW4vcG9wdXAtaW4tYmFuZy1rZS1jaGktcGhpLWtoYW0tYmVuaC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRpZXAtbmhhbi1iZW5oLW5oYW5cXGxpY2gtc3UtdGllcC1uaGFuXFxwb3B1cC1pbi1iYW5nLWtlLWNoaS1waGkta2hhbS1iZW5oXFxwb3B1cC1pbi1iYW5nLWtlLWNoaS1waGkta2hhbS1iZW5oLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9saWNoLXN1LXRpZXAtbmhhbi9wb3B1cC1pbi1iYW5nLWtlLWNoaS1waGkta2hhbS1iZW5oL3BvcHVwLWluLWJhbmcta2UtY2hpLXBoaS1raGFtLWJlbmguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGllcC1uaGFuLWJlbmgtbmhhbi9saWNoLXN1LXRpZXAtbmhhbi9wb3B1cC1pbi1iYW5nLWtlLWNoaS1waGkta2hhbS1iZW5oL3BvcHVwLWluLWJhbmcta2UtY2hpLXBoaS1raGFtLWJlbmguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.ts": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.ts ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: InBangKeChiPhiLSKhamBenhComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBangKeChiPhiLSKhamBenhComponent", function () { return InBangKeChiPhiLSKhamBenhComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var InBangKeChiPhiLSKhamBenhComponent = /** @class */ (function () {
                function InBangKeChiPhiLSKhamBenhComponent(data, sanitizer, apiService, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.src = "";
                    this.srcBangKeChiPhiKhamBenhCoBHYT = "";
                    this.srcBangKeChiPhiKhamBenh = "";
                    this.isBHYT = false;
                    this.iskhongBHYT = false;
                    this.srcBangKeChiPhiKhamBenhCoBHYTHtml = "";
                    this.srcBangKeChiPhiKhamBenhHtml = "";
                    this.typeLayout = "landscape";
                    // this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                }
                InBangKeChiPhiLSKhamBenhComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (window.location.protocol == "http:") {
                        this.hostingName = "http://" + window.location.host;
                    }
                    else {
                        this.hostingName = "https://" + window.location.host;
                    }
                    var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: {},
                    });
                    this.apiService
                        .get("TiepNhanBenhNhan/GetHtmlPhieuChiPhiKhamBenhCoBHYT?yeuCauTiepNhanId=" +
                        this.data.id +
                        "&hostingName=" +
                        this.hostingName)
                        .subscribe(function (res) {
                        if (res != "") {
                            _this.isBHYT = true;
                        }
                        _this.srcBangKeChiPhiKhamBenhCoBHYTHtml = res;
                        _this.srcBangKeChiPhiKhamBenhCoBHYT =
                            "data:text/html;charset=utf-8," + encodeURIComponent(res);
                        loading.close();
                    });
                    this.apiService
                        .get("TiepNhanBenhNhan/GetHtmlPhieuChiPhiKhamBenh?yeuCauTiepNhanId=" +
                        this.data.id +
                        "&hostingName=" +
                        this.hostingName)
                        .subscribe(function (res) {
                        if (res != "") {
                            _this.iskhongBHYT = true;
                        }
                        _this.srcBangKeChiPhiKhamBenhHtml = res;
                        _this.srcBangKeChiPhiKhamBenh =
                            "data:text/html;charset=utf-8," + encodeURIComponent(res);
                        loading.close();
                    });
                };
                InBangKeChiPhiLSKhamBenhComponent.prototype.getSharedPrintForm = function (id) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        if (_this.data.id != null) {
                            _this.apiService
                                .get("TiepNhanBenhNhan/InBangKeChiPhiKhamBenh?yeuCauTiepNhanId=" +
                                _this.data.id +
                                "&hostingName=" +
                                _this.hostingName)
                                .subscribe(function (inPhieu) {
                                resolve(inPhieu);
                            });
                        }
                    });
                };
                InBangKeChiPhiLSKhamBenhComponent.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                InBangKeChiPhiLSKhamBenhComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return InBangKeChiPhiLSKhamBenhComponent;
            }());
            InBangKeChiPhiLSKhamBenhComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            InBangKeChiPhiLSKhamBenhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "popup-in-bang-ke-chi-phi-kham-benh",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-in-bang-ke-chi-phi-kham-benh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-in-bang-ke-chi-phi-kham-benh.component.scss */ "./src/app/modules/main/tiep-nhan-benh-nhan/lich-su-tiep-nhan/popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], InBangKeChiPhiLSKhamBenhComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=tiep-nhan-benh-nhan-lich-su-tiep-nhan-lich-su-tiep-nhan-module-es2015.js.map
//# sourceMappingURL=tiep-nhan-benh-nhan-lich-su-tiep-nhan-lich-su-tiep-nhan-module-es5.js.map
//# sourceMappingURL=tiep-nhan-benh-nhan-lich-su-tiep-nhan-lich-su-tiep-nhan-module-es5.js.map