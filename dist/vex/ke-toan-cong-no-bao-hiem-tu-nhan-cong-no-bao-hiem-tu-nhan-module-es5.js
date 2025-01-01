(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ke-toan-cong-no-bao-hiem-tu-nhan-cong-no-bao-hiem-tu-nhan-module"], {
        /***/ "./node_modules/@iconify/icons-ic/delete.js": 
        /*!**************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/delete.js ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\" fill=\"currentColor\"/>",
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.html": 
        /*!******************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.html ***!
          \******************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Người bệnh</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close (click)=\"chonBenhNhan(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n        [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [pageable]=\"true\" [height]=\"550\"\n        [headerTemplate]=\"headerTemplate\"\n        urlGetData=\"GachNo/GetDataBenhNhanForGrid\" urlGetTotalPage=\"GachNo/GetTotalPageBenhNhanForGrid\">\n    </app-grid>\n    <ng-template #headerTemplate>\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\" class=\"m-0\">\n            <app-textbox #ma id=\"Ma\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Mã\" [maxlength]=\"50\"\n                [(model)]=\"benhNhanTimKiemObj.MaBN\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, ma)\">\n            </app-textbox>\n            <app-textbox #ten id=\"Ten\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Họ tên\" [maxlength]=\"250\"\n                [(model)]=\"benhNhanTimKiemObj.HoTen\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, ten)\">\n            </app-textbox>\n            <app-textbox #diaChi id=\"DiaChi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Địa chỉ\" [maxlength]=\"500\"\n                [(model)]=\"benhNhanTimKiemObj.DiaChiDayDu\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, diaChi)\">\n            </app-textbox>\n            <app-textboxmask #dienThoai id=\"DienThoai\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"benhNhanTimKiemObj.SoDienThoai\" label=\"Điện thoại\"\n                mask=\"000 000 0000\" maxlength=\"12\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, dienThoai)\">\n            </app-textboxmask>\n            <app-textbox #cmt id=\"CMT\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"CMND\" [maxlength]=\"50\"\n                [(model)]=\"benhNhanTimKiemObj.SoChungMinhThu\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, cmt)\">\n            </app-textbox>\n\n            <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                <button mat-flat-button color=\"primary\" style=\"margin-top: 13px;\" (click)=\"timKiem()\">Tìm kiếm</button>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #soDienThoaiTemplate let-dataItem>\n        {{dataItem.SoDienThoaiDisplay}}\n    </ng-template>\n    <ng-template #actionTemplate let-dataItem>\n        <div class=\"text-center\" kendoTooltip>\n            <button color=\"primary\" mat-flat-button type=\"button\" (click)=\"chonBenhNhan(dataItem)\">\n                Chọn\n            </button>\n        </div>\n    </ng-template>\n</mat-dialog-content>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.html": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.html ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Công ty BHTN</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close (click)=\"chonCongTy(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n        [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [pageable]=\"true\" [height]=\"550\"\n        [headerTemplate]=\"headerTemplate\"\n        urlGetData=\"GachNo/GetDataCongTyBaoHiemTuNhanForGrid\" urlGetTotalPage=\"GachNo/GetTotalPageCongTyBaoHiemTuNhanForGrid\">\n    </app-grid>\n    <ng-template #headerTemplate>\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\" class=\"m-0\">\n            <app-textbox #ma id=\"Ma\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Mã\" [maxlength]=\"50\"\n                [(model)]=\"congTyBaoHiemTuNhanTimKiemObj.Ma\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, ma)\">\n            </app-textbox>\n            <app-textbox #ten id=\"Ten\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Tên\" [maxlength]=\"250\"\n                [(model)]=\"congTyBaoHiemTuNhanTimKiemObj.Ten\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, ten)\">\n            </app-textbox>\n            <app-textbox #diaChi id=\"DiaChi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Địa chỉ\" [maxlength]=\"500\"\n                [(model)]=\"congTyBaoHiemTuNhanTimKiemObj.DiaChi\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, diaChi)\">\n            </app-textbox>\n            <app-textbox #dienThoai id=\"DienThoai\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Điện thoại\" [maxlength]=\"50\"\n                [(model)]=\"congTyBaoHiemTuNhanTimKiemObj.DienThoai\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, dienThoai)\">\n            </app-textbox>\n            <app-textbox #mst id=\"MST\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"MST\" [maxlength]=\"50\"\n                [(model)]=\"congTyBaoHiemTuNhanTimKiemObj.MaSoThue\"\n                (keyup)=\"onKey($event)\" (modelChange)=\"searchChanges($event, mst)\">\n            </app-textbox>\n\n            <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                <button mat-flat-button color=\"primary\" style=\"margin-top: 13px;\" (click)=\"timKiem()\">Tìm kiếm</button>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #actionTemplate let-dataItem>\n        <div class=\"text-center\" kendoTooltip>\n            <button color=\"primary\" mat-flat-button type=\"button\" (click)=\"chonCongTy(dataItem)\">\n                Chọn\n            </button>\n        </div>\n    </ng-template>\n</mat-dialog-content>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.html": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.html ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Lịch sử</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <blockquote class=\"blockquote pl-2 pt-2 mb-2 audit break-line-audit\">\n        <div *ngFor=\"let item of historys\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"grid\"\n            fxLayoutGap.lt-sm=\"0\">\n            <ng-container *ngIf=\"item.Action == actionAdd\">\n                <div fxFlex=\"20%\">{{item.ThoiGianThucHienDisplay}}</div>\n                <blockquote fxFlex=\"80%\" class=\"blockquote add-item pl-2 pt-0 mb-1\">\n                    <div class=\"title-item\">\n                        <strong>Thêm mới:</strong>\n                        <p style=\"margin-left: auto;\">{{item.TenNhanVienThucHien}}</p>\n                    </div>\n                    <div *ngIf=\"item.NewValue.SoChungTu != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Số chứng từ</i></u>: <strong>{{item.NewValue.SoChungTu}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.NgayChungTu != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Ngày chứng từ</i></u>: <strong>{{item.NewValue.NgayChungTuDisplay}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.LoaiChungTu != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Loại chứng từ</i></u>: <strong>{{item.NewValue.TenLoaiChungTu}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.KyKeToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Kỳ kế toán</i></u>: <strong>{{item.NewValue.KyKeToan}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TrangThai != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Trạng thái</i></u>: <strong>{{item.NewValue.TenTrangThai}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.LoaiTienTe != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Loại tiền</i></u>: <strong>{{item.NewValue.TenLoaiTienTe}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TyGia != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tỷ giá</i></u>: <strong>{{item.NewValue.TyGia | number:'0.2-2':'vi-VN'}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.NgayThucThu != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Ngày thực thu</i></u>: <strong>{{item.NewValue.NgayThucThuDisplay}}</strong>\n                    </div>\n\n                    <div *ngIf=\"item.NewValue.LoaiDoiTuong != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Loại đối tượng</i></u>: <strong>{{item.NewValue.TenLoaiDoiTuong}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.MaDoiTuong != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Mã đối tượng</i></u>: <strong>{{item.NewValue.MaDoiTuong}}</strong>\n                    </div>\n\n                    <div *ngIf=\"item.NewValue.TaiKhoan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tài khoản</i></u>: <strong>{{item.NewValue.TaiKhoan}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.NguoiNop != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Người nộp</i></u>: <strong>{{item.NewValue.NguoiNop}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.ChungTuGoc != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Chứng từ gốc</i></u>: <strong>{{item.NewValue.ChungTuGoc}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.DienGiaiChung != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Diễn giải chung</i></u>: <strong>{{item.NewValue.DienGiaiChung}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.SoTaiKhoanNganHang != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Số TK NH</i></u>: <strong>{{item.NewValue.SoTaiKhoanNganHang}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.NguyenTe != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Nguyên tệ</i></u>: <strong>{{item.NewValue.NguyenTe}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.ThueNguyenTe != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Thuế nguyên tệ</i></u>: <strong>{{item.NewValue.ThueNguyenTe}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TongNguyenTe != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tổng nguyên tệ</i></u>: <strong>{{item.NewValue.TongNguyenTe}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.HachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Hạch toán</i></u>: <strong>{{item.NewValue.HachToan}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.ThueHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Thuế hạch toán</i></u>: <strong>{{item.NewValue.ThueHachToan}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TongHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tổng hạch toán</i></u>: <strong>{{item.NewValue.TongHachToan}}</strong>\n                    </div>\n\n                    <div *ngIf=\"item.NewValue.LoaiThuChi != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Loại T/C</i></u>: <strong>{{item.NewValue.LoaiThuChi}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.VAT != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>VAT(%)</i></u>: <strong>{{item.NewValue.VAT}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TienHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tiền HT({{item.NewValue.TienTeDisplay}})</i></u>: \n                        <!-- <strong>{{item.NewValue.TienHachToan | number:'0.2-2':'vi-VN'}}</strong> -->\n                        <strong>{{item.NewValue.LoaiTienTeDisplay == loaiTienTeUSD ? (item.NewValue.TienHachToan | currency:'USD': '$') : (item.NewValue.TienHachToan | number:'0.2-2':'vi-VN')}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TienThueHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tiền thuế HT({{item.NewValue.TienTeDisplay}})</i></u>: \n                        <!-- <strong>{{item.NewValue.TienThueHachToan | number:'0.2-2':'vi-VN'}}</strong> -->\n                        <strong>{{item.NewValue.LoaiTienTeDisplay == loaiTienTeUSD ? (item.NewValue.TienThueHachToan | currency:'USD': '$') : (item.NewValue.TienThueHachToan | number:'0.2-2':'vi-VN')}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TongTienHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tổng tiền HT(VNĐ)</i></u>: <strong>{{item.NewValue.TongTienHachToan | number:'0.2-2':'vi-VN'}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.KhoanMucPhi != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Khoản mục phí</i></u>: <strong>{{item.NewValue.KhoanMucPhi}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.SoHoaDon != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Số HĐ</i></u>: <strong>{{item.NewValue.SoHoaDon}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.NgayHoaDon != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Ngày HĐ</i></u>: <strong>{{item.NewValue.NgayHoaDonDisplay}}</strong>\n                    </div>\n                </blockquote>\n            </ng-container>\n    \n            <ng-container *ngIf=\"item.Action == actionUpdate\">\n                <div fxFlex=\"20%\">{{item.ThoiGianThucHienDisplay}}</div>\n                <blockquote fxFlex=\"80%\" class=\"blockquote update-item pl-2 pt-0 mb-1\">\n                    <div class=\"title-item\">\n                        <strong>Cập nhật:</strong>\n                        <p style=\"margin-left: auto;\">{{item.TenNhanVienThucHien}}</p>\n                    </div>\n                    <div *ngIf=\"item.NewValue.SoChungTu != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Số chứng từ</i></u>: <strong>{{item.OldValue.SoChungTu}}</strong> =>\n                        <strong>{{item.NewValue.SoChungTu}}</strong>\n                    </div>\n\n                    <div *ngIf=\"item.NewValue.NgayChungTu != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Ngày chứng từ</i></u>: <strong>{{item.OldValue.NgayChungTuDisplay}}</strong> =>\n                        <strong>{{item.NewValue.NgayChungTuDisplay}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.LoaiChungTu != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Loại chứng từ</i></u>: <strong>{{item.OldValue.TenLoaiChungTu}}</strong> =>\n                        <strong>{{item.NewValue.TenLoaiChungTu}}</strong>\n                    </div>\n\n                    <div *ngIf=\"item.NewValue.KyKeToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Kỳ kế toán</i></u>: <strong>{{item.OldValue.KyKeToan}}</strong> => \n                        <strong>{{item.NewValue.KyKeToan}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TrangThai != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Trạng thái</i></u>: <strong>{{item.OldValue.TenTrangThai}}</strong> =>\n                        <strong>{{item.NewValue.TenTrangThai}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.LoaiTienTe != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Loại tiền</i></u>: <strong>{{item.OldValue.TenLoaiTienTe}}</strong> =>\n                        <strong>{{item.NewValue.TenLoaiTienTe}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TyGia != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tỷ giá</i></u>: <strong>{{item.OldValue.TyGia | number:'0.2-2':'vi-VN'}}</strong> => \n                        <strong>{{item.NewValue.TyGia | number:'0.2-2':'vi-VN'}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.NgayThucThu != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Ngày thực thu</i></u>: <strong>{{item.OldValue.NgayThucThuDisplay}}</strong> =>\n                        <strong>{{item.NewValue.NgayThucThuDisplay}}</strong>\n                    </div>\n\n                    <div *ngIf=\"item.NewValue.LoaiDoiTuong != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Loại đối tượng</i></u>: <strong>{{item.OldValue.TenLoaiDoiTuong}}</strong> => \n                        <strong>{{item.NewValue.TenLoaiDoiTuong}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.MaDoiTuong != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Mã đối tượng</i></u>: <strong>{{item.OldValue.MaDoiTuong}}</strong> => \n                        <strong>{{item.NewValue.MaDoiTuong}}</strong>\n                    </div>\n\n                    <div *ngIf=\"item.NewValue.TaiKhoan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tài khoản</i></u>: <strong>{{item.OldValue.TaiKhoan}}</strong> => \n                        <strong>{{item.NewValue.TaiKhoan}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.NguoiNop != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Người nộp</i></u>: <strong>{{item.OldValue.NguoiNop}}</strong> => \n                        <strong>{{item.NewValue.NguoiNop}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.ChungTuGoc != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Chứng từ gốc</i></u>: <strong>{{item.OldValue.ChungTuGoc}}</strong> => \n                        <strong>{{item.NewValue.ChungTuGoc}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.DienGiaiChung != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Diễn giải chung</i></u>: <strong>{{item.OldValue.DienGiaiChung}}</strong> =>\n                        <strong>{{item.NewValue.DienGiaiChung}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.SoTaiKhoanNganHang != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Số TK NH</i></u>: <strong>{{item.OldValue.SoTaiKhoanNganHang}}</strong> => \n                        <strong>{{item.NewValue.SoTaiKhoanNganHang}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.NguyenTe != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Nguyên tệ</i></u>: <strong>{{item.OldValue.NguyenTe}}</strong> => \n                        <strong>{{item.NewValue.NguyenTe}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.ThueNguyenTe != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Thuế nguyên tệ</i></u>: <strong>{{item.OldValue.ThueNguyenTe}}</strong> => \n                        <strong>{{item.NewValue.ThueNguyenTe}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TongNguyenTe != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tổng nguyên tệ</i></u>: <strong>{{item.OldValue.TongNguyenTe}}</strong> => \n                        <strong>{{item.NewValue.TongNguyenTe}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.HachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Hạch toán</i></u>: <strong>{{item.OldValue.HachToan}}</strong> => \n                        <strong>{{item.NewValue.HachToan}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.ThueHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Thuế hạch toán</i></u>: <strong>{{item.OldValue.ThueHachToan}}</strong> => \n                        <strong>{{item.NewValue.ThueHachToan}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TongHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tổng hạch toán</i></u>: <strong>{{item.OldValue.TongHachToan}}</strong> => \n                        <strong>{{item.NewValue.TongHachToan}}</strong>\n                    </div>\n\n                    <div *ngIf=\"item.NewValue.LoaiThuChi != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Loại T/C</i></u>: <strong>{{item.OldValue.LoaiThuChi}}</strong> => \n                        <strong>{{item.NewValue.LoaiThuChi}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.VAT != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>VAT(%)</i></u>: <strong>{{item.OldValue.VAT}}</strong> => \n                        <strong>{{item.NewValue.VAT}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TienHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tiền HT({{item.NewValue.TienTeDisplay}})</i></u>: \n                        <strong>{{item.OldValue.LoaiTienTeDisplay == loaiTienTeUSD ? (item.OldValue.TienHachToan | currency:'USD': '$') : (item.OldValue.TienHachToan | number:'0.2-2':'vi-VN')}}</strong> =>\n                        <strong>{{item.NewValue.LoaiTienTeDisplay == loaiTienTeUSD ? (item.NewValue.TienHachToan | currency:'USD': '$') : (item.NewValue.TienHachToan | number:'0.2-2':'vi-VN')}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TienThueHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tiền thuế HT({{item.NewValue.TienTeDisplay}})</i></u>: \n                        <strong>{{item.OldValue.LoaiTienTeDisplay == loaiTienTeUSD ? (item.OldValue.TienThueHachToan | currency:'USD': '$') : (item.OldValue.TienThueHachToan | number:'0.2-2':'vi-VN')}}</strong> => \n                        <strong>{{item.OldValue.LoaiTienTeDisplay == loaiTienTeUSD ? (item.NewValue.TienThueHachToan | currency:'USD': '$') : (item.NewValue.TienThueHachToan | number:'0.2-2':'vi-VN')}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.TongTienHachToan != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Tổng tiền HT(VNĐ)</i></u>: \n                        <strong>{{item.OldValue.LoaiTienTeDisplay == loaiTienTeUSD ? (item.OldValue.TongTienHachToan | currency:'USD': '$') : (item.OldValue.TongTienHachToan | number:'0.2-2':'vi-VN')}}</strong> => \n                        <strong>{{item.OldValue.LoaiTienTeDisplay == loaiTienTeUSD ? (item.NewValue.TongTienHachToan | currency:'USD': '$') : (item.NewValue.TongTienHachToan | number:'0.2-2':'vi-VN')}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.KhoanMucPhi != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Khoản mục phí</i></u>: <strong>{{item.OldValue.KhoanMucPhi}}</strong> => \n                        <strong>{{item.NewValue.KhoanMucPhi}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.SoHoaDon != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Số HĐ</i></u>: <strong>{{item.OldValue.SoHoaDon}}</strong> => \n                        <strong>{{item.NewValue.SoHoaDon}}</strong>\n                    </div>\n                    <div *ngIf=\"item.NewValue.NgayHoaDon != null\">\n                        &nbsp; <i class=\"ft-chevron-right\"></i><u><i>Ngày HĐ</i></u>: <strong>{{item.OldValue.NgayHoaDonDisplay}}</strong> => \n                        <strong>{{item.NewValue.NgayHoaDonDisplay}}</strong>\n                    </div>\n                </blockquote>\n            </ng-container>\n        </div>\n    </blockquote>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\">Đóng</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.html": 
        /*!********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.html ***!
          \********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Kế Toán',Path:''}  ,\n                        {Title:'Cập Nhật Công Nợ',Path:'', Active:true}          \n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [searchString]=\"timKiemNangCaoObj.SearchString\"\n                [checkboxAble]=\"false\" [headerTemplate]=\"headerTemplate\"\n                urlGetData=\"GachNo/GetDataGachNoForGrid\" urlGetTotalPage=\"GachNo/GetTotalPageGachNoForGrid\">\n            </app-grid>\n\n            <ng-template #soChungTuTemplate let-dataItem>\n                <a (click)=\"showPopupThongTinThuNo(dataItem.Id)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoChungTu}}\">{{dataItem.SoChungTu}}\n                    </p>\n                </a>\n            </ng-template>\n            <ng-template #ngayChungTuTemplate let-dataItem>\n                {{dataItem.NgayChungTuDisplay}}\n            </ng-template>\n            <ng-template #ngayHoaDonTemplate let-dataItem>\n                {{dataItem.NgayHoaDonDisplay}}\n            </ng-template>\n            <ng-template #ngayXacNhanNhapLieuTemplate let-dataItem>\n                <p kendoTooltip class=\"reverse-ellipsis r\" title=\"{{dataItem.NgayXacNhanNhapLieuDisplay}}\">\n                    {{dataItem.NgayXacNhanNhapLieuDisplay}}\n                </p>\n            </ng-template>\n            <ng-template #tienHachToanTemplate let-dataItem>\n                <ng-container [ngSwitch]=\"dataItem.LoaiTienTe\">\n                    <div *ngSwitchCase=\"loaiTienTeUSD\">{{dataItem.TienHachToan | currency:'USD': '$'}}</div>\n                    <div *ngSwitchDefault>{{dataItem.TienHachToan | number:'0.2-2':'vi-VN'}}</div>\n                </ng-container>\n            </ng-template>\n            <ng-template #tienThueHachToanTemplate let-dataItem>\n                <ng-container [ngSwitch]=\"dataItem.LoaiTienTe\">\n                    <div *ngSwitchCase=\"loaiTienTeUSD\">{{dataItem.TienThueHachToan | currency:'USD': '$'}}</div>\n                    <div *ngSwitchDefault>{{dataItem.TienThueHachToan | number:'0.2-2':'vi-VN'}}</div>\n                </ng-container>\n            </ng-template>\n            <ng-template #tongTienHachToanTemplate let-dataItem>\n                {{dataItem.TongTienHachToan | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n            <ng-template #trangThaiTemplate let-dataItem>\n                <span [ngClass]=\"{'redText': dataItem.TrangThai == trangThaiNhapLieu,\n                                  'greenText': dataItem.TrangThai == trangThaiXacNhanNhapLieu}\">\n                    {{dataItem.TenTrangThai}}\n                </span>\n            </ng-template>\n\n            <ng-template #actionTemplate let-dataItem>\n                <div class=\"text-center\" kendoTooltip>\n                    <button *ngIf=\"dataItem.TrangThai != trangThaiXacNhanNhapLieu\" color=\"primary\" mat-icon-button kendoTooltip title=\"Xóa\" color=\"warn\" type=\"button\">\n                        <mat-icon [icIcon]=\"icDelete\" (click)=\"xoaGachNo(dataItem.Id)\"></mat-icon>\n                    </button>\n                    <button color=\"primary\" mat-icon-button kendoTooltip title=\"Lịch sử\" type=\"button\">\n                        <mat-icon [icIcon]=\"icRestore\" (click)=\"showPopupLichSu(dataItem.Id)\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-combobox fxFlex=\"200px\" label=\"Loại T/C\" id=\"LoaiThuChi\" class=\"ml-2 mt-5 on-header\" url=\"GachNo/GetListLoaiThuChi\" \n                        [(model)]=\"timKiemNangCaoObj.LoaiThuChi\" [modelText]=\"timKiemNangCaoObj.LoaiThuChi\"\n                        (modelChange)=\"timKiemNangCao()\" popupSettings=\"null\" [reloadForGrid]=\"true\" [broadcastAfterLoaded]=\"true\">\n                    </app-combobox>\n                    <app-daterangepicker id=\"tuNgayDenNgayCT\" fxFlex=\"230px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                        [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayCT\" label=\"CT từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n                    <app-daterangepicker id=\"tuNgayDenNgayHD\" fxFlex=\"230px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 mr-2 on-header\"\n                        [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayHD\" label=\"HĐ từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                    </app-daterangepicker>\n                    \n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"320px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa tìm...\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto mr-2\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    \n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                    <button (click)=\"exportExcel()\" class=\"mr-2\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <button class=\"mr-2\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\" (click)=\"showPopupThongTinThuNo()\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.html": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.html ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">\n        <ng-container *ngIf=\"gachNo.Id == 0\">Tạo Cập Nhật Công Nợ</ng-container>\n        <ng-container *ngIf=\"gachNo.Id != null && gachNo.Id != 0\">Chi Tiết Cập Nhật Công Nợ</ng-container>\n    </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" (click)=\"close()\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-textbox *ngIf=\"gachNo.Id != null && gachNo.Id != 0\" id=\"SoChungTu\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Số chứng từ\" \n            [required]=\"true\" [maxlength]=\"50\" [disabled]=\"true\"\n            [(model)]=\"gachNo.SoChungTu\" \n            [validationerror]=\"'SoChungTu' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-datepicker id=\"NgayChungTu\" [fxFlex]=\"(gachNo.Id != null && gachNo.Id != 0) ? '15%' : '25%'\" [fxFlex.sm]=\"(gachNo.Id != null && gachNo.Id != 0) ? '15%' : '25%'\" \n            [required]=\"true\" label=\"Ngày chứng từ\"\n            [(model)]=\"gachNo.NgayChungTu\" (modelChange)=\"changeNgayChungTu($event)\" [disabled]=\"gachNo.IsDisabledView\"\n            [validationerror]=\"'NgayChungTu' | validationerror:validationErrors\">\n        </app-datepicker>\n        <app-dropdownlist id=\"LoaiChungTu\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Loại chứng từ\" [required]=\"true\"\n            [(model)]=\"gachNo.LoaiChungTu\" [modelText]=\"gachNo.TenLoaiChungTu\"\n            url=\"GachNo/GetListLoaiChungTu\" [bind]=\"true\" [disabled]=\"gachNo.IsDisabledView\"\n            [validationerror]=\"'LoaiChungTu' | validationerror:validationErrors\">\n        </app-dropdownlist>\n        <app-textbox id=\"KyKeToan\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Kỳ kế toán\" [maxlength]=\"50\" [disabled]=\"true\"\n            [(model)]=\"gachNo.KyKeToan\"\n            [validationerror]=\"'KyKeToan' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-textbox id=\"TrangThai\" [fxFlex]=\"(gachNo.Id != null && gachNo.Id != 0) ? '20%' : '25%'\" [fxFlex.sm]=\"(gachNo.Id != null && gachNo.Id != 0) ? '20%' : '25%'\" \n            label=\"Trạng thái\" [maxlength]=\"50\" [disabled]=\"true\"\n            [(model)]=\"gachNo.TenTrangThai\"\n            [validationerror]=\"'TrangThai' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-dropdownlist id=\"LoaiTienTe\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Loại tiền tệ\" [required]=\"true\"\n            [(model)]=\"gachNo.LoaiTienTe\" [modelText]=\"gachNo.TenLoaiTienTe\" [bind]=\"true\" [disabled]=\"gachNo.IsDisabledView\"\n            url=\"GachNo/GetListLoaiTienTe\" (selectionChange)=\"chonLoaiTienTe($event)\" (modelChange)=\"changeLoaiTienTe($event)\"\n            [validationerror]=\"'LoaiTienTe' | validationerror:validationErrors\">\n        </app-dropdownlist>\n        <app-textboxnumeric id=\"TyGia\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [max]=\"100000\" label=\"Tỷ giá\" [decimals]=\"2\" [format]=\"format\"\n            [(model)]=\"gachNo.TyGia\" [disabled]=\"isDisabledTyGia\" (modelChange)=\"tinhTongTienHachToan()\"  [required]=\"true\"\n            [validationerror]=\"'TyGia' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <app-datepicker id=\"NgayThucThu\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [required]=\"true\" label=\"Ngày thực thu\"\n            [(model)]=\"gachNo.NgayThucThu\" [disabled]=\"gachNo.IsDisabledView\" (modelChange)=\"changeNgayThucThu($event)\"\n            [validationerror]=\"'NgayThucThu' | validationerror:validationErrors\"> \n        </app-datepicker>\n        <hr class=\"line-hr\" fxFlex=\"100%\">\n\n        <app-dropdownlist id=\"LoaiDoiTuong\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Loại đối tượng\" [required]=\"true\"\n            [(model)]=\"gachNo.LoaiDoiTuong\" [modelText]=\"gachNo.TenLoaiDoiTuong\" [bind]=\"true\" [autoSelectFirstItem]=\"true\"\n            url=\"GachNo/GetListDoiTuong\" (selectionChange)=\"chonLoaiDoiTuong($event)\" [disabled]=\"gachNo.IsDisabledView\"\n            [validationerror]=\"'LoaiDoiTuong' | validationerror:validationErrors\">\n        </app-dropdownlist>\n\n        <ng-container *ngIf=\"gachNo.LoaiDoiTuong == null || gachNo.LoaiDoiTuong == 1\">\n            <app-combobox id=\"congtyBHTN\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Mã đối tượng\" [required]=\"true\"\n                [(model)]=\"gachNo.CongTyBaoHiemTuNhanId\" [modelText]=\"gachNo.CongTyBaoHiemTuNhan.Ma\" [disabled]=\"gachNo.IsDisabledView\"\n                url=\"GachNo/GetListMaCongTyBaoHiemTuNhan\" (selectionChange)=\"chonCongTyBaoHiemTuNhan($event)\"\n                [validationerror]=\"'CongTyBaoHiemTuNhanId' | validationerror:validationErrors\">\n            </app-combobox>\n            <button fxFlex=\"5%\" fxFlex.sm=\"8%\" type=\"button\" title=\"Tìm kiếm\" class=\"icon-color-button\" (click)=\"timKiemDoiTuongCongTy()\"\n                [disabled]=\"gachNo.IsDisabledView\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n            <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                <div class=\"container-custom no-label\">\n                    <label>&nbsp;</label>\n                    <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                        <app-checkbox fxFlex=\"100%\" value=\"true\" id=\"AnhXa\" label=\"Sử dụng gói\"\n                            [(model)]=\"gachNo.SuDungGoi\" [disabled]=\"gachNo.IsDisabledView\"></app-checkbox>\n                    </div>\n                </div>\n            </div>\n            <app-textbox id=\"tenDoiTuong\" fxFlex=\"30%\" fxFlex.sm=\"30%\" label=\"Tên đối tượng\" [disabled]=\"true\"\n                [(model)]=\"gachNo.CongTyBaoHiemTuNhan.Ten\">\n            </app-textbox>\n            <app-textbox id=\"mst\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"MST\" [disabled]=\"true\"\n                [(model)]=\"gachNo.CongTyBaoHiemTuNhan.MaSoThue\">\n            </app-textbox>\n            <app-textbox id=\"donVi\" fxFlex=\"50%\" fxFlex.sm=\"50%\" label=\"Đơn vị\" [disabled]=\"true\"\n                [(model)]=\"gachNo.CongTyBaoHiemTuNhan.DonVi\">\n            </app-textbox>\n            <app-textbox id=\"diaChi\" fxFlex=\"50%\" fxFlex.sm=\"50%\" label=\"Địa chỉ\" [disabled]=\"true\"\n                [(model)]=\"gachNo.CongTyBaoHiemTuNhan.DiaChi\">\n            </app-textbox>\n        </ng-container>\n        \n        <ng-container *ngIf=\"gachNo.LoaiDoiTuong == 2\">\n            <app-combobox id=\"maBenhNhan\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Mã đối tượng\" [required]=\"true\"\n                [(model)]=\"gachNo.BenhNhanId\" [modelText]=\"gachNo.BenhNhan.MaBN\" (selectionChange)=\"chonBenhNhan($event)\"\n                url=\"GachNo/GetListMaBenhNhan\" [disabled]=\"gachNo.IsDisabledView\"\n                [validationerror]=\"'BenhNhanId' | validationerror:validationErrors\">\n            </app-combobox>\n            <button fxFlex=\"5%\" fxFlex.sm=\"5%\" type=\"button\" title=\"Tìm kiếm\" class=\"icon-color-button\" (click)=\"timKiemDoiTuongBenhNhan()\" \n                [disabled]=\"gachNo.IsDisabledView\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n            <div fxFlex=\"10%\" fxFlex.sm=\"10%\">\n                <div class=\"container-custom no-label\">\n                    <label>&nbsp;</label>\n                    <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                        <app-checkbox fxFlex=\"100%\" value=\"true\" id=\"AnhXa\" label=\"Sử dụng gói\"\n                            [(model)]=\"gachNo.SuDungGoi\" [disabled]=\"gachNo.IsDisabledView\"></app-checkbox>\n                    </div>\n                </div>\n            </div>\n            <app-textbox id=\"tenDoiTuong\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Tên đối tượng\" [disabled]=\"true\"\n                [(model)]=\"gachNo.BenhNhan.HoTen\">\n            </app-textbox>\n            <app-textbox id=\"ngaySinh\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày sinh\" [disabled]=\"true\"\n                [(model)]=\"gachNo.BenhNhan.NgayThangNamSinh\">\n            </app-textbox>\n            <app-textbox id=\"gioiTinh\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Giới tính\" [disabled]=\"true\"\n                [(model)]=\"gachNo.BenhNhan.TenGioiTinh\">\n            </app-textbox>\n\n            <app-textbox id=\"cmnd\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"CMND\" [disabled]=\"true\"\n                [(model)]=\"gachNo.BenhNhan.SoChungMinhThu\">\n            </app-textbox>\n            <app-textbox id=\"dienThoai\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Điện thoại\" [disabled]=\"true\"\n                [(model)]=\"gachNo.BenhNhan.SoDienThoaiDisplay\">\n            </app-textbox>\n            <app-textbox id=\"diaChi\" fxFlex=\"50%\" fxFlex.sm=\"50%\" label=\"Địa chỉ\" [disabled]=\"true\"\n                [(model)]=\"gachNo.BenhNhan.DiaChiDayDu\">\n            </app-textbox>\n        </ng-container>\n        <hr class=\"line-hr\" fxFlex=\"100%\">\n\n        <app-dropdownlist id=\"TaiKhoan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tài khoản\"\n            [(model)]=\"gachNo.TaiKhoan\" [modelText]=\"gachNo.TaiKhoan\" [queryInfo]=\"{ParameterDependencies:'{KeyId:\\'' + gachNo.TaiKhoan +'\\', GhiChu:\\'' + gachNo.TaiKhoanLoaiTien +'\\'}', Take: 50}\"\n            url=\"GachNo/GetListTaiKhoan\" (selectionChange)=\"chonTaiKhoan($event)\" [disabled]=\"gachNo.IsDisabledView\"\n            [validationerror]=\"'TaiKhoan' | validationerror:validationErrors\">\n        </app-dropdownlist>\n        <app-textbox [disabled]=\"true\" id=\"LoaiTienTeTheoTaiKhoan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên tài khoản\"\n            [(model)]=\"gachNo.TaiKhoanLoaiTien\">\n        </app-textbox>\n        <app-textbox id=\"nguoiNop\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Người nộp\" [maxlength]=\"150\"\n            [(model)]=\"gachNo.NguoiNop\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <app-textbox id=\"chungTuGoc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Chứng từ gốc\" [maxlength]=\"250\"\n            [(model)]=\"gachNo.ChungTuGoc\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <app-textbox id=\"dienGiaiChung\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Diễn giải chung\" [maxlength]=\"250\"\n            [(model)]=\"gachNo.DienGiaiChung\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n\n        <app-dropdownlist id=\"soTaiKhoanNganHang\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số TK NH\"\n            [(model)]=\"gachNo.SoTaiKhoanNganHang\" [modelText]=\"gachNo.SoTaiKhoanNganHang\"\n            url=\"GachNo/GetListSoTaiKhoanNganHang\" [disabled]=\"gachNo.IsDisabledView\" [queryInfo]=\"{ParameterDependencies:'{soTaiKhoanNganHangDangChon:\\'' + gachNo.SoTaiKhoanNganHang +'\\'}', Take: 50}\"\n            [validationerror]=\"'SoTaiKhoanNganHang' | validationerror:validationErrors\">\n        </app-dropdownlist>\n        <app-textbox id=\"NguyenTe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nguyên tệ\" [maxlength]=\"150\"\n            [(model)]=\"gachNo.NguyenTe\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <app-textbox id=\"ThueNguyenTe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Thuế nguyên tệ\" [maxlength]=\"150\"\n            [(model)]=\"gachNo.ThueNguyenTe\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <app-textbox id=\"TongNguyenTe\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tổng nguyên tệ\" [maxlength]=\"150\"\n            [(model)]=\"gachNo.TongNguyenTe\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <div fxFlex=\"20%\"></div>\n        <div fxFlex=\"20%\"></div>\n        <app-textbox id=\"HachToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hạch toán\" [maxlength]=\"150\"\n            [(model)]=\"gachNo.HachToan\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <app-textbox id=\"ThueHachToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Thuế hạch toán\" [maxlength]=\"150\"\n            [(model)]=\"gachNo.ThueHachToan\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <app-textbox id=\"TongHachToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tổng hạch toán\" [maxlength]=\"150\"\n            [(model)]=\"gachNo.TongHachToan\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <hr class=\"line-hr\" fxFlex=\"100%\">\n\n        <app-dropdownlist id=\"loaiThuChi\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Loại T/C\" [required]=\"true\"\n            [(model)]=\"gachNo.LoaiThuChi\" [modelText]=\"gachNo.LoaiThuChi\" url=\"GachNo/GetListLoaiThuChi\" [disabled]=\"gachNo.IsDisabledView\"\n            [bind]=\"true\" [autoSelectFirstItem]=\"true\" popupSettings=\"null\" [queryInfo]=\"{ParameterDependencies:'{LoaiThuChiDangChon:\\'' + gachNo.LoaiThuChi +'\\'}', Take: 50}\"\n            [validationerror]=\"'LoaiThuChi' | validationerror:validationErrors\">\n        </app-dropdownlist>\n        <app-textboxnumeric id=\"VAT\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"VAT(%)\" [max]=\"100\"\n            [(model)]=\"gachNo.VAT\" [disabled]=\"isDisabledVAT || gachNo.IsDisabledView\" (modelChange)=\"changeVAT($event)\">\n        </app-textboxnumeric>\n        <app-textboxnumeric id=\"TienHachToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"gachNo.LoaiTienTe == loaiTienUSD ? 9999999 : 999999999\" label=\"Tiền HT ({{gachNo.TenLoaiTienTe}})\" [decimals]=\"2\" [format]=\"format\" [required]=\"true\"\n            [(model)]=\"gachNo.TienHachToan\" (modelChange)=\"changeTienHachToan($event)\" [disabled]=\"gachNo.IsDisabledView\"\n            [validationerror]=\"'TienHachToan' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <app-textboxnumeric id=\"TienThueHachToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"gachNo.LoaiTienTe == loaiTienUSD ? 9999999 : 999999999\" label=\"Tiền thuế HT ({{gachNo.TenLoaiTienTe}})\" [decimals]=\"2\" [format]=\"format\"\n            [(model)]=\"gachNo.TienThueHachToan\" [disabled]=\"true\">\n        </app-textboxnumeric>\n        <app-textboxnumeric id=\"TongTienHachToan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"99999999999999999\" label=\"Tổng tiền HT(VND)\" [decimals]=\"2\" [format]=\"format\"\n            [(model)]=\"gachNo.TongTienHachToan\" [disabled]=\"true\">\n        </app-textboxnumeric>\n\n        <app-textbox id=\"khoanMucPhi\" fxFlex=\"60%\" fxFlex.sm=\"60%\" label=\"Khoản mục phí\" [maxlength]=\"250\"\n            [(model)]=\"gachNo.KhoanMucPhi\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <app-textbox id=\"soHoaDon\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số HĐ\" [maxlength]=\"150\"\n            [(model)]=\"gachNo.SoHoaDon\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-textbox>\n        <app-datepicker id=\"NgayHoaDon\" fxFlex=\"20%\" fxFlex.sm=\"20%\"  label=\"Ngày HĐ\"\n            [(model)]=\"gachNo.NgayHoaDon\" [disabled]=\"gachNo.IsDisabledView\">\n        </app-datepicker>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button *ngIf=\"gachNo.IsShowXacNhanNhapLieu\" mat-raised-button mat-button color=\"primary\" (click)=\"xacNhanNhapLieu()\">Xác nhận nhập liệu</button>\n\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\">Hủy</button>\n    <button *ngIf=\"id == 0\" mat-raised-button mat-button color=\"primary\" (click)=\"xuLyThem()\">Thêm</button>\n    <button *ngIf=\"id != undefined && id > 0\" [disabled]=\"gachNo.IsDisabledView\" mat-raised-button mat-button color=\"primary\" (click)=\"xuLyLuu()\">Lưu</button>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.scss": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.scss ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9rZS10b2FuL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tYmVuaC1uaGFuLXBvcHVwL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi1iZW5oLW5oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.ts": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.ts ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: CongNoBaoHiemTuNhanBenhNhanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoBaoHiemTuNhanBenhNhanPopupComponent", function () { return CongNoBaoHiemTuNhanBenhNhanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cong-no-bao-hiem-tu-nhan.model */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.model.ts");
            var CongNoBaoHiemTuNhanBenhNhanPopupComponent = /** @class */ (function () {
                function CongNoBaoHiemTuNhanBenhNhanPopupComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.gridColumns = [];
                    this.benhNhanTimKiemObj = new _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_6__["GachNoBenhNhan"]();
                }
                CongNoBaoHiemTuNhanBenhNhanPopupComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].CongNoBhtn;
                    this.gridColumns = [
                        { Field: "STT", Title: "#", Width: 30, Sortable: false, Template: this.sttTemplate },
                        { Field: "MaBN", Title: "Mã", Width: 70, Sortable: true },
                        { Field: "HoTen", Title: "Tên", Width: 150, Sortable: true },
                        { Field: "NgayThangNamSinh", Title: "Ngày sinh", Width: 100, Sortable: true },
                        { Field: "TenGioiTinh", Title: "Giới Tính", Width: 80, Sortable: true },
                        { Field: "SoChungMinhThu", Title: "CMND", Width: 100, Sortable: true },
                        { Field: "DienThoai", Title: "Điện thoại", Width: 100, Sortable: true, Template: this.soDienThoaiTemplate },
                        { Field: "DiaChiDayDu", Title: "Địa chỉ", Width: 150, Sortable: true },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate }
                    ];
                };
                CongNoBaoHiemTuNhanBenhNhanPopupComponent.prototype.timKiem = function () {
                    var queryString = JSON.stringify(this.benhNhanTimKiemObj);
                    this.gridChild._additionalSearchString = queryString;
                    this.gridChild.search();
                };
                CongNoBaoHiemTuNhanBenhNhanPopupComponent.prototype.searchChanges = function (event, col) {
                    if (event != undefined && (event == null || event == "")) {
                        if (col.Id == "Ma") {
                            this.benhNhanTimKiemObj.MaBN = null;
                        }
                        if (col.Id == "Ten") {
                            this.benhNhanTimKiemObj.HoTen = null;
                        }
                        if (col.Id == "DiaChi") {
                            this.benhNhanTimKiemObj.DiaChiDayDu = null;
                        }
                        if (col.Id == "DienThoai") {
                            this.benhNhanTimKiemObj.SoDienThoai = null;
                        }
                        if (col.Id == "CMT") {
                            this.benhNhanTimKiemObj.SoChungMinhThu = null;
                        }
                        this.timKiem();
                    }
                };
                CongNoBaoHiemTuNhanBenhNhanPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiem();
                    }
                };
                CongNoBaoHiemTuNhanBenhNhanPopupComponent.prototype.chonBenhNhan = function (dataItem) {
                    this.dialogRef.close(dataItem);
                };
                return CongNoBaoHiemTuNhanBenhNhanPopupComponent;
            }());
            CongNoBaoHiemTuNhanBenhNhanPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], CongNoBaoHiemTuNhanBenhNhanPopupComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soDienThoaiTemplate', { static: true })
            ], CongNoBaoHiemTuNhanBenhNhanPopupComponent.prototype, "soDienThoaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], CongNoBaoHiemTuNhanBenhNhanPopupComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], { static: true, read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"] })
            ], CongNoBaoHiemTuNhanBenhNhanPopupComponent.prototype, "gridChild", void 0);
            CongNoBaoHiemTuNhanBenhNhanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cong-no-bao-hiem-tu-nhan-benh-nhan-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.scss */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.scss")).default]
                })
            ], CongNoBaoHiemTuNhanBenhNhanPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.scss": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.scss ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9rZS10b2FuL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tY29uZy10eS1wb3B1cC9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tY29uZy10eS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.ts": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.ts ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: CongNoBaoHiemTuNhanCongTyPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoBaoHiemTuNhanCongTyPopupComponent", function () { return CongNoBaoHiemTuNhanCongTyPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cong-no-bao-hiem-tu-nhan.model */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.model.ts");
            var CongNoBaoHiemTuNhanCongTyPopupComponent = /** @class */ (function () {
                function CongNoBaoHiemTuNhanCongTyPopupComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.gridColumns = [];
                    this.congTyBaoHiemTuNhanTimKiemObj = new _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_6__["CongTyBaoHiemTuNhanTimKiem"]();
                }
                CongNoBaoHiemTuNhanCongTyPopupComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].CongNoBhtn;
                    this.gridColumns = [
                        { Field: "STT", Title: "#", Width: 20, Sortable: false, Template: this.sttTemplate },
                        { Field: "Ma", Title: "Mã", Width: 60, Sortable: true },
                        { Field: "Ten", Title: "Tên", Width: 150, Sortable: true },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 150, Sortable: true },
                        { Field: "DienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
                        { Field: "MaSoThue", Title: "Mã số thuế", Width: 100, Sortable: true },
                        { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate }
                    ];
                };
                CongNoBaoHiemTuNhanCongTyPopupComponent.prototype.timKiem = function () {
                    var queryString = JSON.stringify(this.congTyBaoHiemTuNhanTimKiemObj);
                    this.gridChild._additionalSearchString = queryString;
                    this.gridChild.search();
                };
                CongNoBaoHiemTuNhanCongTyPopupComponent.prototype.searchChanges = function (event, col) {
                    if (event != undefined && (event == null || event == "")) {
                        if (col.Id == "Ma") {
                            this.congTyBaoHiemTuNhanTimKiemObj.Ma = null;
                        }
                        if (col.Id == "Ten") {
                            this.congTyBaoHiemTuNhanTimKiemObj.Ten = null;
                        }
                        if (col.Id == "DiaChi") {
                            this.congTyBaoHiemTuNhanTimKiemObj.DiaChi = null;
                        }
                        if (col.Id == "DienThoai") {
                            this.congTyBaoHiemTuNhanTimKiemObj.DienThoai = null;
                        }
                        if (col.Id == "MST") {
                            this.congTyBaoHiemTuNhanTimKiemObj.MaSoThue = null;
                        }
                        this.timKiem();
                    }
                };
                CongNoBaoHiemTuNhanCongTyPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiem();
                    }
                };
                CongNoBaoHiemTuNhanCongTyPopupComponent.prototype.chonCongTy = function (dataItem) {
                    this.dialogRef.close(dataItem);
                };
                return CongNoBaoHiemTuNhanCongTyPopupComponent;
            }());
            CongNoBaoHiemTuNhanCongTyPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], CongNoBaoHiemTuNhanCongTyPopupComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], CongNoBaoHiemTuNhanCongTyPopupComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], { static: true, read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"] })
            ], CongNoBaoHiemTuNhanCongTyPopupComponent.prototype, "gridChild", void 0);
            CongNoBaoHiemTuNhanCongTyPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cong-no-bao-hiem-tu-nhan-cong-ty-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.scss */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.scss")).default]
                })
            ], CongNoBaoHiemTuNhanCongTyPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.scss": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.scss ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".break-line-audit {\n  white-space: pre-wrap;\n  /* CSS3 */\n  white-space: -moz-pre-wrap;\n  /* Firefox */\n  white-space: -pre-wrap;\n  /* Opera <7 */\n  white-space: -o-pre-wrap;\n  /* Opera 7 */\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2tlLXRvYW4vY29uZy1uby1iYW8taGllbS10dS1uaGFuL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi1saWNoLXN1LXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2UtdG9hblxcY29uZy1uby1iYW8taGllbS10dS1uaGFuXFxjb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGljaC1zdS1wb3B1cFxcY29uZy1uby1iYW8taGllbS10dS1uaGFuLWxpY2gtc3UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9rZS10b2FuL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGljaC1zdS1wb3B1cC9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGljaC1zdS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2UtdG9hbi9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4vY29uZy1uby1iYW8taGllbS10dS1uaGFuLWxpY2gtc3UtcG9wdXAvY29uZy1uby1iYW8taGllbS10dS1uaGFuLWxpY2gtc3UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWstbGluZS1hdWRpdCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgLyogQ1NTMyAqL1xuICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDtcbiAgLyogRmlyZWZveCAqL1xuICB3aGl0ZS1zcGFjZTogLXByZS13cmFwO1xuICAvKiBPcGVyYSA8NyAqL1xuICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7XG4gIC8qIE9wZXJhIDcgKi9cbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufSIsIi5icmVhay1saW5lLWF1ZGl0IHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAvKiBDU1MzICovXG4gIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwO1xuICAvKiBGaXJlZm94ICovXG4gIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7XG4gIC8qIE9wZXJhIDw3ICovXG4gIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDtcbiAgLyogT3BlcmEgNyAqL1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.ts": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.ts ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: CongNoBaoHiemTuNhanLichSuPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoBaoHiemTuNhanLichSuPopupComponent", function () { return CongNoBaoHiemTuNhanLichSuPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_enum_audit_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/audit.enum */ "./src/app/shared/enum/audit.enum.ts");
            /* harmony import */ var src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/gach-no.enum */ "./src/app/shared/enum/gach-no.enum.ts");
            var CongNoBaoHiemTuNhanLichSuPopupComponent = /** @class */ (function () {
                function CongNoBaoHiemTuNhanLichSuPopupComponent(data, apiService, notificationService) {
                    this.data = data;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.actionAdd = src_app_shared_enum_audit_enum__WEBPACK_IMPORTED_MODULE_6__["EnumAudit"].Added;
                    this.actionUpdate = src_app_shared_enum_audit_enum__WEBPACK_IMPORTED_MODULE_6__["EnumAudit"].Modified;
                    this.loaiTienTeUSD = src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_7__["LoaiTienTe"].USD;
                }
                CongNoBaoHiemTuNhanLichSuPopupComponent.prototype.ngOnInit = function () {
                    this.getHistory(this.data.Id);
                };
                CongNoBaoHiemTuNhanLichSuPopupComponent.prototype.getHistory = function (id) {
                    var _this = this;
                    this.apiService
                        .get("GachNo/GetLichSuGachNo?id=" + id)
                        .subscribe(function (resultData) {
                        _this.historys = resultData;
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                return CongNoBaoHiemTuNhanLichSuPopupComponent;
            }());
            CongNoBaoHiemTuNhanLichSuPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            CongNoBaoHiemTuNhanLichSuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cong-no-bao-hiem-tu-nhan-lich-su-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cong-no-bao-hiem-tu-nhan-lich-su-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-lich-su-popup.component.scss */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], CongNoBaoHiemTuNhanLichSuPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.scss": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.scss ***!
          \******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2tlLXRvYW4vY29uZy1uby1iYW8taGllbS10dS1uaGFuL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2UtdG9hblxcY29uZy1uby1iYW8taGllbS10dS1uaGFuXFxjb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGlzdFxcY29uZy1uby1iYW8taGllbS10dS1uaGFuLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9rZS10b2FuL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGlzdC9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9rZS10b2FuL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGlzdC9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn0iLCIucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.ts": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.ts ***!
          \****************************************************************************************************************************************/
        /*! exports provided: CongNoBaoHiemTuNhanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoBaoHiemTuNhanListComponent", function () { return CongNoBaoHiemTuNhanListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_restore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/restore */ "./node_modules/@iconify/icons-ic/restore.js");
            /* harmony import */ var _iconify_icons_ic_restore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_restore__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/delete */ "./node_modules/@iconify/icons-ic/delete.js");
            /* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../cong-no-bao-hiem-tu-nhan.model */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.model.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_lich_su_popup_cong_no_bao_hiem_tu_nhan_lich_su_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_thu_no_popup_cong_no_bao_hiem_tu_nhan_thu_no_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/enum/gach-no.enum */ "./src/app/shared/enum/gach-no.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var CongNoBaoHiemTuNhanListComponent = /** @class */ (function () {
                function CongNoBaoHiemTuNhanListComponent(authService, notificationService, router, route, location, dialog, apiService) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icRestore = _iconify_icons_ic_restore__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icDelete = _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.gridColumns = [];
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
                    this.timKiemNangCaoObj = new _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_18__["CongNoBaoHiemTuNhanTimKiem"]();
                    this.baseRoute = "/ke-toan/cong-no-bhtn";
                    this.loaiTienTeUSD = src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_24__["LoaiTienTe"].USD;
                    this.trangThaiNhapLieu = src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_24__["TrangThaiGachNo"].NhapLieu;
                    this.trangThaiXacNhanNhapLieu = src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_24__["TrangThaiGachNo"].XacNhanNhapLieu;
                    this._gridColumnsFilter = [];
                    this._isCheckColumnFilter = true;
                }
                CongNoBaoHiemTuNhanListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_17__["DocumentType"].CongNoBhtn;
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringCongNoBaoHiemTuNhanList");
                            if (additionalSearchString != null) {
                                hasLocalSearchString = true;
                                this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                                // kiểm tra ngày CT
                                if (this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate);
                                }
                                if (this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate);
                                }
                                // kiểm tra ngày HD
                                if (this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate);
                                }
                                if (this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate);
                                }
                                this.gridChild.additionalSearchString = additionalSearchString;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringCongNoBaoHiemTuNhanList");
                    }
                    this.gridColumns = [
                        { Field: "SoChungTu", Title: "Số CT", Width: 80, Sortable: true, Template: this.soChungTuTemplate },
                        { Field: "TenLoaiDoiTuong", Title: "Loại ĐT", Width: 90, Sortable: true },
                        { Field: "LoaiThuChi", Title: "Loại T/C", Width: 90, Sortable: true, ShowTooltip: true },
                        { Field: "NgayChungTu", Title: "Ngày CT", Width: 80, Sortable: true, Template: this.ngayChungTuTemplate },
                        { Field: "TaiKhoan", Title: "Tài khoản", Width: 90, Sortable: true },
                        { Field: "DienGiai", Title: "Diễn giải", Width: 120, Sortable: true, ShowTooltip: true },
                        { Field: "VAT", Title: "VAT", Width: 50, Sortable: true },
                        { Field: "KhoanMucPhi", Title: "Khoản mục phí", Width: 100, Sortable: true, ShowTooltip: true },
                        { Field: "TienHachToan", Title: "Tiền HT", Width: 120, Sortable: true, Template: this.tienHachToanTemplate },
                        { Field: "TienThueHachToan", Title: "Tiền thuế HT", Width: 120, Sortable: true, Template: this.tienThueHachToanTemplate },
                        { Field: "TongTienHachToan", Title: "Tổng tiền HT", Width: 120, Sortable: true, Template: this.tongTienHachToanTemplate },
                        { Field: "SoHoaDon", Title: "Số HĐ", Width: 90, Sortable: true },
                        { Field: "NgayHoaDon", Title: "Ngày HĐ", Width: 80, Sortable: true, Template: this.ngayHoaDonTemplate },
                        { Field: "MaKhachHang", Title: "Mã ĐT", Width: 90, Sortable: true },
                        { Field: "TenKhachHang", Title: "Tên ĐT", Width: 130, Sortable: true, ShowTooltip: true },
                        { Field: "MaSoThue", Title: "MST", Width: 80, Sortable: true, ShowTooltip: true },
                        { Field: "TenTrangThai", Title: "Trạng thái", Width: 125, Sortable: true, Template: this.trangThaiTemplate },
                        { Field: "NguoiXacNhanNhapLieu", Title: "Người xác nhận nhập liệu", Width: 90, Sortable: true, ShowTooltip: true },
                        { Field: "NgayXacNhanNhapLieu", Title: "Ngày xác nhận nhập liệu", Width: 80, Sortable: true, Template: this.ngayXacNhanNhapLieuTemplate },
                        { Field: "Action", Title: "", Width: 80, Sortable: true, Template: this.actionTemplate }
                    ];
                    this._gridColumnsFilter = this.gridColumns.filter(function (p) { return p.Title != ''; });
                };
                CongNoBaoHiemTuNhanListComponent.prototype.searchChanges = function (event) {
                    if (event != undefined && (event == null || event == "")) {
                        this.gridChild.searchString = null;
                        this.timKiemNangCao();
                    }
                };
                CongNoBaoHiemTuNhanListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                CongNoBaoHiemTuNhanListComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    this.gridChild.searchString = null;
                    this.timKiemNangCao();
                };
                CongNoBaoHiemTuNhanListComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    // kiểm tra ngày CT
                    if (this.timKiemNangCaoObj.TuNgayDenNgayCT != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgayCT != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay = null;
                    }
                    // kiểm tra ngày HD
                    if (this.timKiemNangCaoObj.TuNgayDenNgayHD != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgayHD != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    this.gridChild._additionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringCongNoBaoHiemTuNhanList", queryString);
                    this.gridChild.search();
                };
                CongNoBaoHiemTuNhanListComponent.prototype.showPopupLichSu = function (id) {
                    if (id === void 0) { id = 0; }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].View)) {
                        this.dialog.open(_cong_no_bao_hiem_tu_nhan_lich_su_popup_cong_no_bao_hiem_tu_nhan_lich_su_popup_component__WEBPACK_IMPORTED_MODULE_21__["CongNoBaoHiemTuNhanLichSuPopupComponent"], {
                            disableClose: false,
                            width: '1200px',
                            data: { Id: id }
                        }).afterClosed().subscribe(function (result) {
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                CongNoBaoHiemTuNhanListComponent.prototype.showPopupThongTinThuNo = function (id) {
                    var _this = this;
                    if (id === void 0) { id = 0; }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Add)) {
                        this.dialog.open(_cong_no_bao_hiem_tu_nhan_thu_no_popup_cong_no_bao_hiem_tu_nhan_thu_no_popup_component__WEBPACK_IMPORTED_MODULE_23__["CongNoBaoHiemTuNhanThuNoPopupComponent"], {
                            disableClose: false,
                            width: '1600px',
                            data: { Id: id }
                        }).afterClosed().subscribe(function (result) {
                            _this.gridChild.search();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                CongNoBaoHiemTuNhanListComponent.prototype.xoaGachNo = function (id) {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete)) {
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].MessConfirm, ['xóa']) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == 'Yes') {
                                self.apiService.delete("GachNo/XuLyXoaThongTinThuNo?id=" + id)
                                    .subscribe(function () {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].ActionSuccessfully, ['Xóa']));
                                    _this.gridChild.search();
                                }, function (err) {
                                    self.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                CongNoBaoHiemTuNhanListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("GachNo/ExportGachNo", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "GachNo" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return CongNoBaoHiemTuNhanListComponent;
            }());
            CongNoBaoHiemTuNhanListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_26__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('soChungTuTemplate', { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "soChungTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngayChungTuTemplate', { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "ngayChungTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngayHoaDonTemplate', { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "ngayHoaDonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tienHachToanTemplate', { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "tienHachToanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tienThueHachToanTemplate', { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "tienThueHachToanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongTienHachToanTemplate', { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "tongTienHachToanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngayXacNhanNhapLieuTemplate', { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "ngayXacNhanNhapLieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trangThaiTemplate', { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "trangThaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('actionTemplate', { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_16__["GridComponent"], { static: true })
            ], CongNoBaoHiemTuNhanListComponent.prototype, "gridChild", void 0);
            CongNoBaoHiemTuNhanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-cong-no-bao-hiem-tu-nhan-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cong-no-bao-hiem-tu-nhan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-list.component.scss */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.scss")).default]
                })
            ], CongNoBaoHiemTuNhanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-routing.module.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-routing.module.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: CongNoBaoHiemTuNhanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoBaoHiemTuNhanRoutingModule", function () { return CongNoBaoHiemTuNhanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_list_cong_no_bao_hiem_tu_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _cong_no_bao_hiem_tu_nhan_list_cong_no_bao_hiem_tu_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__["CongNoBaoHiemTuNhanListComponent"],
                    data: {
                        title: 'Công nợ bảo hiểm tư nhân',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].CongNoBhtn,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var CongNoBaoHiemTuNhanRoutingModule = /** @class */ (function () {
                function CongNoBaoHiemTuNhanRoutingModule() {
                }
                return CongNoBaoHiemTuNhanRoutingModule;
            }());
            CongNoBaoHiemTuNhanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], CongNoBaoHiemTuNhanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.scss": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.scss ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".line-hr {\n  border-top: 1px solid lightgray;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2tlLXRvYW4vY29uZy1uby1iYW8taGllbS10dS1uaGFuL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi10aHUtbm8tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxrZS10b2FuXFxjb25nLW5vLWJhby1oaWVtLXR1LW5oYW5cXGNvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi10aHUtbm8tcG9wdXBcXGNvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi10aHUtbm8tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9rZS10b2FuL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tdGh1LW5vLXBvcHVwL2Nvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi10aHUtbm8tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2UtdG9hbi9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4vY29uZy1uby1iYW8taGllbS10dS1uaGFuLXRodS1uby1wb3B1cC9jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tdGh1LW5vLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmUtaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59IiwiLmxpbmUtaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.ts": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.ts ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: CongNoBaoHiemTuNhanThuNoPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoBaoHiemTuNhanThuNoPopupComponent", function () { return CongNoBaoHiemTuNhanThuNoPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/search */ "./node_modules/@iconify/icons-ic/search.js");
            /* harmony import */ var _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_cong_ty_popup_cong_no_bao_hiem_tu_nhan_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cong-no-bao-hiem-tu-nhan.model */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.model.ts");
            /* harmony import */ var src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/gach-no.enum */ "./src/app/shared/enum/gach-no.enum.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_benh_nhan_popup_cong_no_bao_hiem_tu_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var CongNoBaoHiemTuNhanThuNoPopupComponent = /** @class */ (function () {
                function CongNoBaoHiemTuNhanThuNoPopupComponent(authService, dialog, notificationService, apiService, data, dialogRef) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icSearch = _iconify_icons_ic_search__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.validationErrors = [];
                    this.format = 'n2';
                    this.gachNo = new _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_13__["GachNo"]();
                    this.isDisabledTyGia = true;
                    this.loaiDoiTuongBenhNhan = src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_14__["LoaiDoiTuong"].BenhNhan;
                    this.isDisabledVAT = false;
                    this.trangThaiDaXacNhan = src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_14__["TrangThaiGachNo"].XacNhanNhapLieu;
                    this.loaiTienUSD = src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_14__["LoaiTienTe"].USD;
                }
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].CongNoBhtn;
                    this.id = this.data.Id;
                    this.getThongTinThuNo(this.id);
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.getThongTinThuNo = function (id) {
                    var _this = this;
                    this.apiService
                        .get("GachNo/GetThongTinThuNo?id=" + id)
                        .subscribe(function (resultData) {
                        _this.gachNo = resultData;
                        if (_this.gachNo.LoaiDoiTuong == _this.loaiDoiTuongBenhNhan) {
                            _this.isDisabledVAT = true;
                        }
                        else {
                            _this.isDisabledVAT = false;
                        }
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.chonLoaiTienTe = function (event) {
                    this.gachNo.TyGia = event.TyGia;
                    this.gachNo.TenLoaiTienTe = event.DisplayName;
                    this.tinhTongTienHachToan();
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.changeLoaiTienTe = function (event) {
                    if (event == src_app_shared_enum_gach_no_enum__WEBPACK_IMPORTED_MODULE_14__["LoaiTienTe"].VND) {
                        this.isDisabledTyGia = true;
                    }
                    else {
                        this.isDisabledTyGia = false;
                    }
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.chonLoaiDoiTuong = function (event) {
                    this.gachNo.CongTyBaoHiemTuNhanId = null;
                    this.gachNo.CongTyBaoHiemTuNhan = new _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_13__["GachNoCongTyBaoHiemTuNhan"]();
                    this.gachNo.BenhNhanId = null;
                    this.gachNo.BenhNhan = new _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_13__["GachNoBenhNhan"]();
                    if (event.KeyId == this.loaiDoiTuongBenhNhan) {
                        this.isDisabledVAT = true;
                        this.gachNo.VAT = 0;
                    }
                    else {
                        this.isDisabledVAT = false;
                    }
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.changeVAT = function (event) {
                    if (event) {
                        this.gachNo.TienThueHachToan = this.gachNo.TienHachToan * event / 100;
                    }
                    else {
                        this.gachNo.TienThueHachToan = 0;
                    }
                    this.tinhTongTienHachToan();
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.changeTienHachToan = function (event) {
                    if (event) {
                        this.gachNo.TienThueHachToan = event * this.gachNo.VAT / 100;
                    }
                    else {
                        this.gachNo.TienThueHachToan = 0;
                    }
                    this.tinhTongTienHachToan();
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.tinhTongTienHachToan = function () {
                    if (this.gachNo.TyGia != undefined && this.gachNo.TyGia != null && this.validationErrors != undefined && this.validationErrors.length != 0) {
                        this.validationErrors = this.validationErrors.filter(function (x) { return x.Field != "TyGia"; });
                    }
                    this.gachNo.TongTienHachToan = (this.gachNo.TienHachToan + this.gachNo.TienThueHachToan) * this.gachNo.TyGia;
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.changeNgayThucThu = function (event) {
                    if (event != undefined && event != null && this.validationErrors != undefined && this.validationErrors.length != 0) {
                        this.validationErrors = this.validationErrors.filter(function (x) { return x.Field != "NgayThucThu"; });
                    }
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.chonCongTyBaoHiemTuNhan = function (event) {
                    if (event) {
                        this.gachNo.CongTyBaoHiemTuNhan.Ten = event.Ten;
                        this.gachNo.CongTyBaoHiemTuNhan.MaSoThue = event.MaSoThue;
                        this.gachNo.CongTyBaoHiemTuNhan.DonVi = event.DonVi;
                        this.gachNo.CongTyBaoHiemTuNhan.DiaChi = event.DiaChi;
                    }
                    else {
                        this.gachNo.CongTyBaoHiemTuNhan = new _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_13__["GachNoCongTyBaoHiemTuNhan"]();
                    }
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.chonBenhNhan = function (event) {
                    if (event) {
                        this.gachNo.BenhNhan.HoTen = event.HoTen;
                        this.gachNo.BenhNhan.NgayThangNamSinh = event.NgayThangNamSinh;
                        this.gachNo.BenhNhan.TenGioiTinh = event.TenGioiTinh;
                        this.gachNo.BenhNhan.SoChungMinhThu = event.SoChungMinhThu;
                        this.gachNo.BenhNhan.SoDienThoaiDisplay = event.SoDienThoaiDisplay;
                        this.gachNo.BenhNhan.DiaChiDayDu = event.DiaChiDayDu;
                    }
                    else {
                        this.gachNo.BenhNhan = new _cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_13__["GachNoBenhNhan"]();
                    }
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.chonTaiKhoan = function (event) {
                    this.gachNo.TaiKhoanLoaiTien = event.GhiChu;
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.changeNgayChungTu = function (event) {
                    this.gachNo.NgayThucThu = event;
                    this.changeNgayThucThu(event);
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.timKiemDoiTuongCongTy = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View) || this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].CongNoBhtnXacNhanNhapLieu, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
                        this.dialog.open(_cong_no_bao_hiem_tu_nhan_cong_ty_popup_cong_no_bao_hiem_tu_nhan_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_12__["CongNoBaoHiemTuNhanCongTyPopupComponent"], {
                            disableClose: false,
                            width: '1200px'
                        }).afterClosed().subscribe(function (result) {
                            if (result != undefined && result != null) {
                                _this.gachNo.CongTyBaoHiemTuNhanId = result.Id;
                                _this.gachNo.CongTyBaoHiemTuNhan = result;
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.timKiemDoiTuongBenhNhan = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View) || this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].CongNoBhtnXacNhanNhapLieu, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
                        this.dialog.open(_cong_no_bao_hiem_tu_nhan_benh_nhan_popup_cong_no_bao_hiem_tu_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_15__["CongNoBaoHiemTuNhanBenhNhanPopupComponent"], {
                            disableClose: false,
                            width: '1400px',
                        }).afterClosed().subscribe(function (result) {
                            if (result != undefined && result != null) {
                                _this.gachNo.BenhNhanId = result.Id;
                                _this.gachNo.BenhNhan = result;
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.xuLyThem = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add) || this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].CongNoBhtnXacNhanNhapLieu, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format("Bạn có chắc chắn xác nhận đã thu nợ của {0} này?", [this.gachNo.LoaiDoiTuong == this.loaiDoiTuongBenhNhan ? "người bệnh" : "công ty"])
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.validationErrors = [];
                                _this.apiService.post("GachNo/XuLyTaoThongTinThuNo", _this.gachNo)
                                    .subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
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
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.xuLyLuu = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update) || this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].CongNoBhtnXacNhanNhapLieu, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessConfirm, ["chỉnh sửa"]) }
                        }).afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.validationErrors = [];
                                _this.apiService.put("GachNo/XuLyCapNhatThongTinThuNo", _this.gachNo)
                                    .subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Chỉnh sửa"]));
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
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.xacNhanNhapLieu = function () {
                    var _this = this;
                    if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].CongNoBhtnXacNhanNhapLieu, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn chắc chắn xác nhận nhập liệu này đã đúng không?" }
                        }).afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.validationErrors = [];
                                _this.apiService.put("GachNo/XuLyXacNhanNhapLieu", _this.gachNo)
                                    .subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Xác nhận nhập liệu"]));
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
                CongNoBaoHiemTuNhanThuNoPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return CongNoBaoHiemTuNhanThuNoPopupComponent;
            }());
            CongNoBaoHiemTuNhanThuNoPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"] }
            ]; };
            CongNoBaoHiemTuNhanThuNoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cong-no-bao-hiem-tu-nhan-thu-no-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cong-no-bao-hiem-tu-nhan-thu-no-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-thu-no-popup.component.scss */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]))
            ], CongNoBaoHiemTuNhanThuNoPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.module.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.module.ts ***!
          \**************************************************************************************************/
        /*! exports provided: CongNoBaoHiemTuNhanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoBaoHiemTuNhanModule", function () { return CongNoBaoHiemTuNhanModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-routing.module */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-routing.module.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_list_cong_no_bao_hiem_tu_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_thu_no_popup_cong_no_bao_hiem_tu_nhan_thu_no_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_lich_su_popup_cong_no_bao_hiem_tu_nhan_lich_su_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component.ts");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_cong_ty_popup_cong_no_bao_hiem_tu_nhan_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _cong_no_bao_hiem_tu_nhan_benh_nhan_popup_cong_no_bao_hiem_tu_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.ts");
            var CongNoBaoHiemTuNhanModule = /** @class */ (function () {
                function CongNoBaoHiemTuNhanModule() {
                }
                return CongNoBaoHiemTuNhanModule;
            }());
            CongNoBaoHiemTuNhanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _cong_no_bao_hiem_tu_nhan_list_cong_no_bao_hiem_tu_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__["CongNoBaoHiemTuNhanListComponent"],
                        _cong_no_bao_hiem_tu_nhan_thu_no_popup_cong_no_bao_hiem_tu_nhan_thu_no_popup_component__WEBPACK_IMPORTED_MODULE_5__["CongNoBaoHiemTuNhanThuNoPopupComponent"],
                        _cong_no_bao_hiem_tu_nhan_lich_su_popup_cong_no_bao_hiem_tu_nhan_lich_su_popup_component__WEBPACK_IMPORTED_MODULE_6__["CongNoBaoHiemTuNhanLichSuPopupComponent"],
                        _cong_no_bao_hiem_tu_nhan_cong_ty_popup_cong_no_bao_hiem_tu_nhan_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_7__["CongNoBaoHiemTuNhanCongTyPopupComponent"], _cong_no_bao_hiem_tu_nhan_benh_nhan_popup_cong_no_bao_hiem_tu_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_17__["CongNoBaoHiemTuNhanBenhNhanPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _cong_no_bao_hiem_tu_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__["CongNoBaoHiemTuNhanRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]
                    ],
                    entryComponents: [
                        _cong_no_bao_hiem_tu_nhan_lich_su_popup_cong_no_bao_hiem_tu_nhan_lich_su_popup_component__WEBPACK_IMPORTED_MODULE_6__["CongNoBaoHiemTuNhanLichSuPopupComponent"],
                        _cong_no_bao_hiem_tu_nhan_thu_no_popup_cong_no_bao_hiem_tu_nhan_thu_no_popup_component__WEBPACK_IMPORTED_MODULE_5__["CongNoBaoHiemTuNhanThuNoPopupComponent"],
                        _cong_no_bao_hiem_tu_nhan_cong_ty_popup_cong_no_bao_hiem_tu_nhan_cong_ty_popup_component__WEBPACK_IMPORTED_MODULE_7__["CongNoBaoHiemTuNhanCongTyPopupComponent"],
                        _cong_no_bao_hiem_tu_nhan_benh_nhan_popup_cong_no_bao_hiem_tu_nhan_benh_nhan_popup_component__WEBPACK_IMPORTED_MODULE_17__["CongNoBaoHiemTuNhanBenhNhanPopupComponent"]
                    ]
                })
            ], CongNoBaoHiemTuNhanModule);
            /***/ 
        }),
        /***/ "./src/app/shared/enum/audit.enum.ts": 
        /*!*******************************************!*\
          !*** ./src/app/shared/enum/audit.enum.ts ***!
          \*******************************************/
        /*! exports provided: EnumAudit */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumAudit", function () { return EnumAudit; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EnumAudit;
            (function (EnumAudit) {
                EnumAudit[EnumAudit["Added"] = 4] = "Added";
                EnumAudit[EnumAudit["Deleted"] = 2] = "Deleted";
                EnumAudit[EnumAudit["Modified"] = 3] = "Modified";
            })(EnumAudit || (EnumAudit = {}));
            /***/ 
        }),
        /***/ "./src/app/shared/enum/gach-no.enum.ts": 
        /*!*********************************************!*\
          !*** ./src/app/shared/enum/gach-no.enum.ts ***!
          \*********************************************/
        /*! exports provided: LoaiTienTe, TrangThaiGachNo, LoaiDoiTuong */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiTienTe", function () { return LoaiTienTe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiGachNo", function () { return TrangThaiGachNo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiDoiTuong", function () { return LoaiDoiTuong; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LoaiTienTe;
            (function (LoaiTienTe) {
                LoaiTienTe[LoaiTienTe["VND"] = 1] = "VND";
                LoaiTienTe[LoaiTienTe["USD"] = 2] = "USD";
            })(LoaiTienTe || (LoaiTienTe = {}));
            var TrangThaiGachNo;
            (function (TrangThaiGachNo) {
                TrangThaiGachNo[TrangThaiGachNo["NhapLieu"] = 1] = "NhapLieu";
                TrangThaiGachNo[TrangThaiGachNo["XacNhanNhapLieu"] = 2] = "XacNhanNhapLieu";
            })(TrangThaiGachNo || (TrangThaiGachNo = {}));
            var LoaiDoiTuong;
            (function (LoaiDoiTuong) {
                LoaiDoiTuong[LoaiDoiTuong["BHTN"] = 1] = "BHTN";
                LoaiDoiTuong[LoaiDoiTuong["BenhNhan"] = 2] = "BenhNhan";
            })(LoaiDoiTuong || (LoaiDoiTuong = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=ke-toan-cong-no-bao-hiem-tu-nhan-cong-no-bao-hiem-tu-nhan-module-es2015.js.map
//# sourceMappingURL=ke-toan-cong-no-bao-hiem-tu-nhan-cong-no-bao-hiem-tu-nhan-module-es5.js.map
//# sourceMappingURL=ke-toan-cong-no-bao-hiem-tu-nhan-cong-no-bao-hiem-tu-nhan-module-es5.js.map