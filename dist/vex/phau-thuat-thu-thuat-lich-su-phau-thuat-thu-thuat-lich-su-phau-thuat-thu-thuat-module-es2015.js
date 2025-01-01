(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-module"],{

/***/ "./node_modules/@iconify/icons-ic/baseline-cloud-download.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/baseline-cloud-download.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-done.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-done.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.html":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.html ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Danh sách PTTT không thực hiện\n    </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"py-1\">\n        <app-grid fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n            [urlGetData]=\"urlGetDataGrid\" [urlGetTotalPage]=\"urlGetTotalPageGrid\"\n            [additionalSearchString]=\"'{YeuCauTiepNhanId:' + data.YeuCauTiepNhanId +', LanThucHien: '+ data.LanThucHien +'}'\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [autoHeight]=\"true\" style=\"width: 1px;\" [pageable]=\"false\">\n        </app-grid>\n\n    </div>\n\n</mat-dialog-content>\n<!-- \n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" (click)=\"close()\" mat-stroked-button color=\"primary\" mat-dialog-close>Đóng</button>\n</mat-dialog-actions> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component.html":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component.html ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Kết Quả CLS</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n\n    <app-grid fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n        [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [gridDataSource]=\"gridDataSource\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\" style=\"width: 1px;\"\n        [pageable]=\"false\">\n    </app-grid>\n\n    <ng-template #downLoadAllTemplate>\n        <div class=\"text-center\">\n            <button type=\"button\" color=\"primary\" (click)=\"downloadFile()\" mat-button \n                class=\"mr-1 mt-2\">\n                <!-- <mat-icon [icIcon]=\"icDownward\"></mat-icon> -->\n                <span>Tải tất cả</span>\n\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #actionTemplate let-dataItem>\n        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" fxFlex=\"50%\"\n            *ngIf=\"dataItem.LoaiFile != 10\" (click)=\"Xem(dataItem)\">\n            <span>Xem</span>\n        </button>\n        <div fxFlex=\"50%\" *ngIf=\"dataItem.LoaiFile == 10\">\n        </div>\n        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" fxFlex=\"50%\"\n            (click)=\"Download(dataItem)\">\n            <span>Tải</span>\n        </button>\n    </ng-template>\n\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.html":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.html ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    { Title: 'Phẫu Thuật Thủ Thuật', Path: '' },\n                    { Title: 'Lịch Sử Phẫu Thuật Thủ Thuật', Path: '/lich-su-phau-thuat-thu-thuat' , queryParams: {holdQuery : true} },\n                    { Title: 'Lịch Sử Phẫu Thuật Thủ Thuật Chi Tiết', Path: '', Active: true }]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <div class=\"row mb-3\">\n                            <fieldset fxFlex=\"100%\">\n                                <legend class=\"sub-title\">Thông tin hành chính</legend>\n                                <div fxFlex=\"100%\">\n                                    <ul class=\"inline\">\n                                        <li>Mã TN:\n                                            <strong>{{thongTinBenhNhan.MaYeuCauTiepNhan}}</strong>\n                                        </li>\n                                        <li>Mã NB:\n                                            <strong>{{thongTinBenhNhan.MaBN}}</strong>\n                                        </li>\n                                        <li>Họ tên:\n                                            <strong>{{thongTinBenhNhan.HoTen}}</strong>\n                                        </li>\n                                        <li>Giới tính:\n                                            <strong>{{thongTinBenhNhan.TenGioiTinh}}</strong>\n                                        </li>\n                                        <li>Tuổi:\n                                            <strong>{{thongTinBenhNhan.TuoiThoiDiemHienTai}}</strong>\n                                        </li>\n                                        <li>SĐT:\n                                            <strong>{{thongTinBenhNhan.SoDienThoai}}</strong>\n                                        </li>\n                                        <li>Dân tộc:\n                                            <strong>{{thongTinBenhNhan.DanToc}}</strong>\n                                        </li>\n                                        <li>Địa chỉ:\n                                            <strong>{{thongTinBenhNhan.DiaChi}}</strong>\n                                        </li>\n                                    </ul><br>\n                                    <ul class=\"inline\">\n                                        <li>Nghề nghiệp:\n                                            <strong>{{thongTinBenhNhan.NgheNghiep}}</strong>\n                                        </li>\n                                        <li>Tuyến khám:\n                                            <strong style=\"color: green;\">{{thongTinBenhNhan.TuyenKham}}</strong>\n                                        </li>\n                                        <li>Số BHYT:\n                                            <strong>{{thongTinBenhNhan.SoBHYT}}</strong>\n                                        </li>\n                                        <li>Mức hưởng:\n                                            <strong *ngIf=\"thongTinBenhNhan.BHYTMucHuong != null\"\n                                                style=\"color: blue;\">{{thongTinBenhNhan.BHYTMucHuong}}%</strong>\n                                        </li>\n                                        <li>Ngày hiệu lực:\n                                            <strong [style.color]=\"thongTinBenhNhan.IsBHYTHetHan ? 'red' : ''\">\n                                                {{thongTinBenhNhan.BHYTThoiGianHieuLucDisplay}}</strong>\n                                        </li>\n                                        <li>Lý do TN:\n                                            <strong>{{thongTinBenhNhan.TenLyDoTiepNhan}}</strong>\n                                        </li>\n                                        <li>Thời điểm TN:\n                                            <strong>{{thongTinBenhNhan.ThoiDiemTiepNhanDisplay}}</strong>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </fieldset>\n                        </div>\n\n                        <div class=\"row\">\n                            <div fxFlex=\"100%\">\n                                <kendo-tabstrip fxFlex=\"100%\" class=\"content-has-border tabstrip-pad tabstrip-on-popup\">\n                                    <!-- ({{dichVuKyThuatHoanThanh.DichVuKyThuatDaHoanThanh}}/{{dichVuKyThuatHoanThanh.TongDichVuKyThuat}}) -->\n                                    <kendo-tabstrip-tab [selected]=\"true\">\n                                        <ng-template kendoTabTitle>\n                                            <div kendoTooltip *ngIf=\"dichVuKyThuatHoanThanh != null\">\n                                                CẬN LÂM SÀNG\n                                                ({{dichVuKyThuatHoanThanh.DichVuKyThuatDaHoanThanh}}/{{dichVuKyThuatHoanThanh.TongDichVuKyThuat}})\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoTabContent>\n                                            <app-lich-su-pttt-cls\n                                                [yeuCauTiepNhanId]=\"thongTinBenhNhan.YeuCauTiepNhanId\">\n                                            </app-lich-su-pttt-cls>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n                                    <kendo-tabstrip-tab>\n                                        <ng-template kendoTabTitle>\n                                            <div kendoTooltip *ngIf=\"dichVuKyThuatTuongTrinh != null\">\n                                                TƯỜNG TRÌNH PT/TT\n                                                ({{dichVuKyThuatTuongTrinh.DichVuKyThuatDaTuongTrinh}}/{{dichVuKyThuatTuongTrinh.TongDichVuKyThuat}})\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoTabContent>\n                                            <app-lich-su-pttt-tuong-trinh-pttt\n                                                [lanThucHien]=\"thongTinBenhNhan.LanThucThien\"\n                                                [yeuCauTiepNhanId]=\"thongTinBenhNhan.YeuCauTiepNhanId\"\n                                                [laKhongThucHien]=\"laKhongThucHien\">\n                                            </app-lich-su-pttt-tuong-trinh-pttt>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n\n                                    <kendo-tabstrip-tab [title]=\"'KẾT LUẬN'\"\n                                        *ngIf=\"thongTinBenhNhan.TheoDoiSauPhauThuatThuThuatId != null && thongTinBenhNhan.CoPhauThuat\">\n                                        <ng-template kendoTabContent>\n                                            <app-lich-su-pttt-ket-luan [yeuCauDichVuKyThuatId]=\"yeuCauDichVuKyThuatId\">\n                                            </app-lich-su-pttt-ket-luan>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n\n                                    <kendo-tabstrip-tab [title]=\"'THEO DÕI'\"\n                                        *ngIf=\"thongTinBenhNhan.TheoDoiSauPhauThuatThuThuatId != null && thongTinBenhNhan.ThongTinKhamKhacChiTiet.length > 0\">\n                                        <ng-template kendoTabContent>\n                                            <app-lich-su-pttt-hoi-tinh\n                                                [yeuCauTiepNhanId]=\"thongTinBenhNhan.YeuCauTiepNhanId\"\n                                                [thongTinKhamKhacPTTT]=\"thongTinBenhNhan.ThongTinKhamKhacChiTiet\">\n                                            </app-lich-su-pttt-hoi-tinh>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n                                </kendo-tabstrip>\n                            </div>\n                        </div>\n\n                        <div class=\"row pt-4\">\n                            <button type=\"button\" color=\"default\" class=\"float-right\" mat-raised-button mat-button\n                                title=\"Phím tắt: Esc\" (click)=\"quayLai()\">Quay lại</button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div fxFlex=\"100%\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            <app-grid *ngIf=\"yeuCauTiepNhanId != null\" #dichVuKyThuat fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n                [gridColumns]=\"gridColumns\" urlGetData=\"PhauThuatThuThuat/GetDataForGridAsyncLichSuCLS\"\n                urlGetTotalPage=\"PhauThuatThuThuat/GetTotalPageForGridAsyncLichSuCLS\"\n                [additionalSearchString]=\"yeuCauTiepNhanId\" [allowSortDefault]=\"true\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\" [groups]=\"groups\"\n                (extOnDataBound)=\"onDataBoundChild($event)\" masterName=\"gridDichVuKyThuat\"\n                [removeGroupFooterIfIsOnlyOne]=\"true\">\n            </app-grid>\n\n            <div class=\"gripViewGoiDichViKhacTemplate\">\n                <ng-template #donGiaTemplate let-dataItem>\n                    {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                </ng-template>\n\n                <ng-template #thanhTienTemplate let-dataItem>\n                    {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                </ng-template>\n\n                <ng-template #thanhTienGroupFooterTemplate let-aggregates>\n                    {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n                </ng-template>\n\n                <ng-template #thanhTienFooterTemplate let-dataItem>\n                    <p style=\"color: blue; font-weight: bold;\">\n                        <span>{{totalThanhTien('ThanhTien') | number:'0.2-2':'vi-VN'}}</span>\n                </ng-template>\n\n                <ng-template #donGiaBaoHiemTemplate let-dataItem>\n                    {{dataItem.DonGiaBaoHiem | number:'0.2-2':'vi-VN'}}\n                </ng-template>\n\n                <ng-template #congTienGroupFooterTemplate let-dataItem>\n                    <span>Cộng:</span>\n                </ng-template>\n\n                <ng-template #duocHuongBaoHiemTemplate let-dataItem>\n                    <app-checkbox id=\"duocHuongBaoHiem{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.DHBH\"\n                        disabled=\"{{true}}\">\n                    </app-checkbox>\n                </ng-template>\n\n                <ng-template #sTTTemplate let-rowIndex=\"rowIndex\">\n                    {{rowIndex + 1}}\n                </ng-template>\n\n                <ng-template #noiThucHienTemplate let-dataItem>\n                    <span style=\"color:red;\">\n                        {{dataItem.NoiThucHien}}\n                    </span>\n                </ng-template>\n                <ng-template #trangThaiTemplate let-dataItem>\n                    <ng-container [ngSwitch]=\"dataItem.NhomId\">\n                        <span *ngSwitchCase=\"1\" [ngClass]=\"{\n                                'blackText': dataItem.TrangThaiDichVuId == trangThaiDichVuKyThuat.ChuaThucHien, \n                                'orangeText': dataItem.TrangThaiDichVuId == trangThaiDichVuKyThuat.DangThucHien,\n                                'greenText': dataItem.TrangThaiDichVuId == trangThaiDichVuKyThuat.DaThucHien,\n                                'redText': dataItem.TrangThaiDichVuId == trangThaiDichVuKyThuat.DaHuy}\">\n                            {{dataItem.TrangThai}}\n                        </span>\n\n                        <span *ngSwitchDefault [ngClass]=\"{\n                                    'blackText': dataItem.TrangThaiDichVuId == trangThaiDichVuKyThuat.ChuaThucHien, \n                                    'orangeText': dataItem.TrangThaiDichVuId == trangThaiDichVuKyThuat.DangThucHien,\n                                    'greenText': dataItem.TrangThaiDichVuId == trangThaiDichVuKyThuat.DaThucHien }\">\n                            {{dataItem.TrangThai}}\n                        </span>\n                    </ng-container>\n                </ng-template>\n\n                <ng-template #tongTienFooterTemplate let-dataItem>\n                    <span>Tổng cộng:</span>\n                </ng-template>\n\n                <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-aggregates>\n                    <strong fxFlex=\"89%\">\n                        {{value}}\n                    </strong>\n\n                    <div fxFlex=\"11%\">                      \n                        <button *ngIf=\"kiemTraCoKetQuaCLSXetNghiem(aggregates.items)\" fileName=\"KetQuaXetNghiem\"\n                        (click)=\"InPhieuXn()\" color=\"primary\" mat-raised-button>Xem và tải\n                        về</button>\n                    </div>\n                </ng-template>\n                <ng-template #xemKQTemplate let-dataItem>\n                    <div kendoTooltip\n                        *ngIf=\"dataItem.TrangThai !== 3 && dataItem.LoaiDichVuKyThuat !== 2\">\n                        <div class=\"text-center\">\n                            <button type=\"button\" (click)=\"xemKetQuaCLS(dataItem) \" color=\"primary\" mat-raised-button\n                                class=\"mr-2\">Xem</button>\n                        </div>\n\n                        <!-- <button type=\"button\" (click)=\"downloadFile(dataItem)\" color=\"primary\" mat-raised-button>Tải\n                            về</button> -->\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component.html":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Khoa phòng</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.TenKhoaPhong != null\">{{dataThongTinLichSuEkipPTTT.TenKhoaPhong}}</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Chẩn đoán vào khoa</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanVaoKhoa != null\">{{dataThongTinLichSuEkipPTTT.ChanDoanVaoKhoa}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanVaoKhoa == null\">Không có chẩn đoán vào khoa.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Mô tả</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.MoTaChanDoan != null\">{{dataThongTinLichSuEkipPTTT.MoTaChanDoan}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.MoTaChanDoan == null\">Không có mô tả chẩn đoán.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">CĐ trước phẫu thuật</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanTruocPT != null\">{{dataThongTinLichSuEkipPTTT.ChanDoanTruocPT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanTruocPT == null\">Không có chẩn đoán trước phẫu\n                thuật.</label>\n        </ng-container>\n    </div>\n\n    <!-- <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thời gian PT</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.ThoiGianTruocPT != null\">{{dataThongTinLichSuEkipPTTT.ThoiGianTruocPT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.ThoiGianTruocPT == null\">Không có thời gian trước phẫu thuật.</label>\n        </ng-container>\n    </div> -->\n\n    <!-- Người thực hiện -->\n    <app-lich-su-pttt-nth fxFlex=\"100%\" [yeuCauDichVuKyThuatId]=\"yeuCauDichVuKyThuatId\"></app-lich-su-pttt-nth>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Ghi chú</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.GhiChuCaPTTT != null\">{{dataThongTinLichSuEkipPTTT.GhiChuCaPTTT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.GhiChuCaPTTT == null\">Không có ghi chú.</label>\n        </ng-container>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component.html":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"sub-title\">Người thực hiện</h3>\n<app-grid *ngIf=\"yeuCauDichVuKyThuatId != undefined && yeuCauDichVuKyThuatId != null\" #gridPttt masterName=\"gridPttt\"\n    [gridColumns]=\"gridNguoiThucHienColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n    urlGetData=\"PhauThuatThuThuat/GetDataForGridAsyncLichSuEkipBacSi\"\n    urlGetTotalPage=\"PhauThuatThuThuat/GetTotalPageForGridAsyncLichSuEkipBacSi\" class=\"k-grid-border\"\n    [additionalSearchString]=\"yeuCauDichVuKyThuatId\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n    [checkboxAble]=\"false\" [maxHeight]=\"200\" [lazyLoadPage]=\"true\" [pageable]=\"false\">\n</app-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component.html":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-grid #gridVTTHThuoc fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridVTTHThuocColumns\"\n    [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSourceVTTHThuoc\" [documentType]=\"documentType\"\n    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n    [lazyLoadPage]=\"true\" [pageable]=\"false\" [groups]=\"groupsGhiNhanVTHHThuoc\" [showStt]=\"true\"\n    masterName=\"gridVTTHThuoc\" [removeGroupFooterIfIsOnlyOne]=\"true\" reorderRowsMoveItemData=\"true\">\n</app-grid>\n<!-- ghi nhận thuốc vật tư -->\n<div class=\"gripViewGoiDichViKhacTemplate\">\n    <!-- <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template> -->\n\n    <ng-template #nhomGroupHeaderVTTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        <p *ngFor=\"let item of dataItem.ThongTinGias\">\n            {{item.DonGia | number:'0.2-2':'vi-VN'}}\n        </p>\n    </ng-template>\n\n    <ng-template #soLuongGhiNhanVTTHThuocTemplate let-dataItem>\n        <!-- <app-textboxnumeric [disabled]=\"(dataItem.PhieuLinh != null && dataItem.PhieuLinh != '') || (dataItem.PhieuXuat != null && dataItem.PhieuXuat != '')\" [(model)]=\"dataItem.SoLuong\" class=\"no-label\" [format]=\"format\" [decimals]=\"2\" label=\" \" min=\"1\" max=\"9999999\"\n            (modelChange)=\"CapNhatGridItemGhiNhanVTTHThuoc($event, dataItem)\"> \n        </app-textboxnumeric> -->\n\n        <!-- <div *ngIf=\"dataItem.LoaiKho == 5\">{{dataItem.SoLuong | number:'0.2'}}</div>\n        <div *ngIf=\"dataItem.LoaiKho != 5\">{{dataItem.SoLuong | number}}</div> -->\n\n        <p *ngFor=\"let item of dataItem.ThongTinGias\">\n            <ng-container *ngIf=\"dataItem.LoaiKho == 5\">{{item.SoLuong | number:'0.2'}}</ng-container>\n            <ng-container *ngIf=\"dataItem.LoaiKho != 5\">{{item.SoLuong | number}}</ng-container>\n        </p>\n\n        <!-- <app-textboxnumeric [disabled]=\"(dataItem.PhieuLinh != null && dataItem.PhieuLinh != '') || (dataItem.PhieuXuat != null && dataItem.PhieuXuat != '')\" [(model)]=\"dataItem.SoLuong\" class=\"no-label\" label=\" \" min=\"1\" max=\"9999999\"\n            (blur)=\"CapNhatGridItemGhiNhanVTTHThuoc($event, dataItem)\"> \n        </app-textboxnumeric> -->\n    </ng-template>\n\n    <ng-template #thanhTienTemplate let-dataItem>\n        <p *ngFor=\"let item of dataItem.ThongTinGias\">\n            {{item.ThanhTien | number:'0.2-2':'vi-VN'}}\n        </p>\n    </ng-template>\n\n    <ng-template #thanhTienGhiNhanVTTHThuocFooterTemplate let-dataItem>\n        <span style=\"color:blue\">{{totalGhiNhanVTTHThuoc('ThanhTien') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #thanhTienGhiNhanVTTHThuocGroupFooterTemplate let-aggregates>\n        {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #donGiaBaoHiemTemplate let-dataItem>\n        <!-- {{dataItem.DonGiaBaoHiem | number:'0.2-2':'vi-VN'}} -->\n        <ng-container *ngIf=\"dataItem.DonGiaBaoHiem != null\">\n            {{dataItem.DonGiaBaoHiem | number:'0.2-2':'vi-VN'}}\n        </ng-container>\n        <ng-container *ngIf=\"dataItem.DonGiaBaoHiem == null\">\n            <p *ngFor=\"let item of dataItem.ThongTinGias\">\n                {{item.DonGiaBaoHiem | number:'0.2-2':'vi-VN'}}\n            </p>\n        </ng-container>\n    </ng-template>\n\n    <ng-template #tinhPhiGhiNhanVHTTTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-checkbox id=\"tinhPhiGhiNhanVTTH{{rowIndex}}\" label=\"\" [(model)]=\"dataItem.TinhPhi\"\n            disabled=\"{{true}}\">\n        </app-checkbox>\n    </ng-template>\n    \n    <ng-template #duocHuongBaoHiemGhiNhanVHTTTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-checkbox id=\"duocHuongBaoHiem{{rowIndex}}\" label=\"\" [(model)]=\"dataItem.DuocHuongBaoHiem\"\n            disabled=\"{{true}}\">\n        </app-checkbox>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component.html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component.html ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <app-ls-ptt-cs-sinh-ton [yeuCauTiepNhanId]=\"yeuCauTiepNhanId\">\n    </app-ls-ptt-cs-sinh-ton>\n\n    <div fxFlex=\"100%\">\n        <kendo-tabstrip fxFlex=\"100%\" class=\"content-has-border tabstrip-pad sticky-kendotab-item tabstrip-on-popup\"\n            (tabSelect)=\"onTabSelect($event)\">\n            <ng-container *ngFor=\"let item of thongTinKhamKhacPTTT; index as i\">\n                <kendo-tabstrip-tab [selected]=\"i === 0\">\n                    <ng-template kendoTabTitle>\n                        <div kendoTooltip>\n                            LẦN KHÁM {{i+1}}\n                        </div>\n                    </ng-template>\n                    <ng-template kendoTabContent>\n                        <div class=\"p-2\">\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                fxLayoutGap.lt-sm=\"0\">\n                                <div fxFlex=\"100%\">\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                        fxLayoutGap.lt-sm=\"0\">\n                                        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Khám toàn thân </h3>\n                                        <label>{{item.KhamToanThan}}</label>\n\n                                        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Khám các cơ quan khác </h3>\n                                        <ng-container\n                                            *ngIf=\"thongTinKhamTheoDoiTemplateObj == undefined || thongTinKhamTheoDoiTemplateObj == null\">\n                                            <label fxFlex=\"100%\" class=\"font-weight-bold\">Không có khám các cơ quan\n                                                khác.</label>\n                                        </ng-container>\n                                        <ng-container\n                                            *ngIf=\"thongTinKhamTheoDoiTemplateObj != undefined && thongTinKhamTheoDoiTemplateObj != null && thongTinKhamTheoDoiTemplateObj.ComponentDynamics!=null && thongTinKhamTheoDoiTemplateObj.ComponentDynamics.length>0\">\n                                            <ng-container\n                                                *ngFor=\"let item of thongTinKhamTheoDoiTemplateObj.ComponentDynamics\">\n                                                <ng-container\n                                                    *ngIf=\"item.Type == 4 && item.groupItems != undefined && item.groupItems.length > 0\">\n                                                    <div fxFlex=\"100%\" class=\"row ml-1 mb-2\">\n                                                        <fieldset fxFlex=\"100%\">\n                                                            <legend>{{item.Label}}</legend>\n                                                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                                                fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                                                                <ng-container\n                                                                    *ngFor=\"let itemInGroup of item.groupItems\">\n                                                                    <h3 *ngIf=\"itemInGroup.Type==1\" fxFlex=\"20%\"\n                                                                        class=\"sub-title\">{{itemInGroup.Label}}\n                                                                    </h3>\n                                                                    <label fxFlex=\"100%\"\n                                                                        *ngIf=\"itemInGroup.Type==2\"><span\n                                                                            style=\"font-weight: bold;\">{{itemInGroup.Label}}\n                                                                        </span>:\n                                                                        {{itemInGroup.Value}}</label>\n                                                                    <label fxFlex=\"100%\"\n                                                                        *ngIf=\"itemInGroup.Type==3\"><span\n                                                                            style=\"font-weight: bold;\">{{itemInGroup.Label}}</span>\n                                                                        :\n                                                                        {{itemInGroup.Value}}</label>\n                                                                </ng-container>\n                                                            </div>\n                                                        </fieldset>\n                                                    </div>\n                                                </ng-container>\n                                                <ng-container\n                                                    *ngIf=\"item.groupItems == undefined || item.groupItems == null || item.groupItems.length == 0\">\n                                                    <h3 *ngIf=\"item.Type==1\" fxFlex=\"20%\" class=\"sub-title\">\n                                                        {{item.Label}}\n                                                    </h3>\n                                                    <label fxFlex=\"100%\" *ngIf=\"item.Type==2\"><span\n                                                            style=\"font-weight: bold;\">{{item.Label}} :</span>\n                                                        {{item.Value}}</label>\n                                                    <label fxFlex=\"100%\" *ngIf=\"item.Type==3\"><span\n                                                            style=\"font-weight: bold;\">{{item.Label}} :</span>\n                                                        {{item.Value}}</label>\n                                                </ng-container>\n                                            </ng-container>\n                                        </ng-container>\n                                    </div>\n\n                                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                        fxLayoutGap.lt-sm=\"0\">\n                                        <h3 fxFlex=\"50%\" class=\"sub-title mr-4\"> Khám khác</h3>\n                                        <app-grid [gridColumns]=\"gridKhamKhacColumns\" [documentType]=\"documentType\"\n                                            [useAddDeault]=\"false\"\n                                            urlGetData=\"PhauThuatThuThuat/GetDataForGridAsyncLichSuKhamCacCoQuan\"\n                                            urlGetTotalPage=\"PhauThuatThuThuat/GetTotalPageForGridAsyncLichSuKhamCacCoQuan\"\n                                            [additionalSearchString]=\"item.Id\" class=\"k-grid-border\"\n                                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                            [maxHeight]=\"200\" [lazyLoadPage]=\"true\" [pageable]=\"false\">\n                                        </app-grid>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n            </ng-container>\n        </kendo-tabstrip>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component.html":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component.html ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <h3 fxFlex=\"100%\" class=\"sub-title mr-4\"> CHỈ SỐ SINH TỒN </h3>\n    <app-grid [gridColumns]=\"gridChiSoSinhTonColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        urlGetData=\"PhauThuatThuThuat/GetDataForGridAsyncChiSoSinhHieuPTTT\"\n        urlGetTotalPage=\"PhauThuatThuThuat/GetTotalPageForGridAsyncChiSoSinhHieuPTTT\" [additionalSearchString]=\"yeuCauTiepNhanId\"\n        class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [maxHeight]=\"200\" [lazyLoadPage]=\"true\" [pageable]=\"false\">\n    </app-grid>\n\n    <ng-template #nhipTimTemplate let-dataItem>\n        <app-textboxnumeric *ngIf=\"dataItem.Id == 0\" [(model)]=\"dataItem.NhipTim\" class=\"no-label\">\n        </app-textboxnumeric>\n        <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0\">{{dataItem.NhipTim}}</p>\n    </ng-template>\n    <ng-template #huyetApTemplate let-dataItem>\n        <div style=\"width:100%;display: block;overflow: hidden;\">\n            <div *ngIf=\"dataItem.Id == 0\" style=\"width: calc(50% - 10px);float: left;\">\n                <app-textboxnumeric *ngIf=\"dataItem.Id == 0\" [(model)]=\"huyetApTamThu\" class=\"no-label\" [min]=\"90\"\n                    [max]=\"140\">\n                </app-textboxnumeric>\n            </div>\n            <div *ngIf=\"dataItem.Id == 0\" style=\"width: 20px;text-align: center;float: left;line-height: 43px;\">/</div>\n            <div *ngIf=\"dataItem.Id == 0\" style=\"width: calc(50% - 10px);float: left;\">\n                <app-textboxnumeric *ngIf=\"dataItem.Id == 0\" [(model)]=\"huyetApTamTruong\" class=\"no-label\" [min]=\"60\"\n                    [max]=\"90\">\n                </app-textboxnumeric>\n            </div>\n        </div>\n        <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0\">{{dataItem.HuyetAp}} </p>\n    </ng-template>\n    <ng-template #thanNhietTemplate let-dataItem>\n        <app-textboxnumeric [format]=\"format\" *ngIf=\"dataItem.Id == 0\" [(model)]=\"dataItem.ThanNhiet\" class=\"no-label\">\n        </app-textboxnumeric>\n        <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0\">{{dataItem.ThanNhiet | number}}</p>\n    </ng-template>\n    <ng-template #nhipThoTemplate let-dataItem>\n        <app-textboxnumeric *ngIf=\"dataItem.Id == 0\" [(model)]=\"dataItem.NhipTho\" class=\"no-label\">\n        </app-textboxnumeric>\n        <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0\">{{dataItem.NhipTho | number}} </p>\n    </ng-template>\n    <ng-template #canNangTemplate let-dataItem>\n        <app-textboxnumeric *ngIf=\"dataItem.Id == 0\" [format]=\"format\" [(model)]=\"dataItem.CanNang\" class=\"no-label\"\n            [min]=\"2.0\" [max]=\"222.0\">\n        </app-textboxnumeric>\n        <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0\">{{dataItem.CanNang | number}} </p>\n    </ng-template>\n    <ng-template #BMITemplate let-dataItem>\n        <app-textboxnumeric *ngIf=\"dataItem.Id == 0\" [format]=\"format\" [(model)]=\"dataItem.BMI\" class=\"no-label\">\n        </app-textboxnumeric>\n        <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0\">{{dataItem.BMI  | number: '1.2-2'}}</p>\n    </ng-template>\n    <ng-template #chieuCaoTemplate let-dataItem>\n        <app-textboxnumeric *ngIf=\"dataItem.Id == 0\" [format]=\"format\" [(model)]=\"dataItem.ChieuCao\" class=\"no-label\"\n            [min]=\"100.0\" [max]=\"250.0\">\n        </app-textboxnumeric>\n        <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0\">{{dataItem.ChieuCao}} </p>\n    </ng-template>\n    <ng-template #glassgowTemplate let-dataItem>\n        <app-textboxnumeric *ngIf=\"dataItem.Id == 0\" [format]=\"format\" [spinners]=\"false\" [(model)]=\"dataItem.Glassgow\"\n            [decimals]=\"1\" class=\"no-label\">\n        </app-textboxnumeric>\n        <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0\">{{dataItem.Glassgow | number}}</p>\n    </ng-template>\n\n    <ng-template #sPO2Template let-dataItem>\n        <app-textboxnumeric *ngIf=\"dataItem.Id == 0\" [format]=\"format\" [spinners]=\"false\" [(model)]=\"dataItem.SpO2\"\n            [decimals]=\"1\" class=\"no-label\">\n        </app-textboxnumeric>\n        <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0\">{{dataItem.SpO2 | number}}</p>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component.html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component.html ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Tình Trạng</h3>\n    <label *ngIf=\"thongTinLichSuKetLuanPTTT != null\">{{thongTinLichSuKetLuanPTTT.TinhTrangDisplay}}</label>\n\n    <label *ngIf=\"thongTinLichSuKetLuanPTTT == null\">Không có tình trạng theo dõi.</label>\n\n    <div *ngIf=\"thongTinLichSuKetLuanPTTT != null\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n        fxLayoutGap.lt-sm=\"0\" fxFlex=\"100%\">\n        <h3 fxFlex=\"100%\"\n            *ngIf=\"thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.BacSiPhuTrachTheoDoi != null\"\n            class=\"sub-title mt-0\">Bác sĩ phụ trách</h3>\n        <label *ngIf=\"thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.BacSiPhuTrachTheoDoi != null\">\n            {{thongTinLichSuKetLuanPTTT.BacSiPhuTrachTheoDoi}}</label>\n        <!-- <label\n            *ngIf=\"thongTinLichSuKetLuanPTTT == null ||(thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.BacSiPhuTrachTheoDoi == null)\">\n            Không có bác sĩ phụ trách theo dõi.</label> -->\n\n        <h3 fxFlex=\"100%\"\n            *ngIf=\"thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.DieuDuongPhuTrachTheoDoi != null\"\n            class=\"sub-title mt-0\">Điều dưỡng phụ trách</h3>\n        <label *ngIf=\"thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.DieuDuongPhuTrachTheoDoi != null\">\n            {{thongTinLichSuKetLuanPTTT.DieuDuongPhuTrachTheoDoi}}</label>\n        <!-- <label *ngIf=\"thongTinLichSuKetLuanPTTT == null ||(thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.DieuDuongPhuTrachTheoDoi == null)\">\n            Không có điều dưỡng phụ trách theo dõi.</label> -->\n\n\n        <h3 fxFlex=\"100%\" *ngIf=\"thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.BacSiPhuTrachTheoDoi != null\"\n            class=\"sub-title mt-0\">Thời gian theo dõi đến</h3>\n        <label *ngIf=\"thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.BacSiPhuTrachTheoDoi != null\">\n            {{thongTinLichSuKetLuanPTTT.ThoiDiemTheoDoi}}</label>\n        <!-- <label\n            *ngIf=\"thongTinLichSuKetLuanPTTT == null ||(thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.ThoiDiemTheoDoi == null)\">\n            Không có thời gian theo dõi.</label> -->\n\n        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Ghi chú</h3>\n        <label *ngIf=\"thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.GhiChuTheoDoi != null\">\n            {{thongTinLichSuKetLuanPTTT.GhiChuTheoDoi}}</label>\n        <label\n            *ngIf=\"thongTinLichSuKetLuanPTTT == null ||(thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.GhiChuTheoDoi == null)\">\n            Không có ghi chú.</label>\n    </div>\n\n    <!-- <div *ngIf=\"thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.TinhTrang == 2\" fxLayout=\"row wrap\"\n        fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" fxFlex=\"100%\">\n        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Ghi chú</h3>\n        <label *ngIf=\"thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.GhiChuTheoDoi != null\">\n            {{thongTinLichSuKetLuanPTTT.GhiChuTheoDoi}}</label>\n        <label\n            *ngIf=\"thongTinLichSuKetLuanPTTT == null ||(thongTinLichSuKetLuanPTTT != null && thongTinLichSuKetLuanPTTT.GhiChuTheoDoi == null)\">\n            Không có ghi chú.</label>\n    </div> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component.html":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component.html ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap.lt-sm=\"0\">\n\n    <!-- <div fxFlex=\"100%\" class=\"sub-title mt-0\">Dịch vụ:\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label><b>{{dataThongTinLichSuEkipPTTT.TenDichVu}}</b></label>\n        </ng-container>\n    </div> -->\n\n    <app-combobox fxFlex=\"50%\" id=\"dichVuPTTT\" label=\"Dịch Vụ PTTT\" url=\"PhauThuatThuThuat/GetDichVuPTTTs\"\n        [(model)]=\"dichVu.YeuCauDichVuKyThuatId\" bind=\"true\" [autoSelectFirstItem]=\"true\"\n        [queryInfo]=\"{ParameterDependencies:'{YeuCauTiepNhanId:' + yeuCauTiepNhanId +', LanThucHien: '+lanThucHien+'}', Take: 50}\"\n        [template]=\"DichVuPTTTTemplate\" [templateHeader]=\"DichVuPTTTTemplateHeader\" (modelChange)=\"chonDichVu($event)\"\n        class=\"item-no-padding\">\n        <ng-template #DichVuPTTTTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"10%\">Loại</th>\n                    <th width=\"15%\">Mã DV</th>\n                    <th width=\"40%\">Tên DV</th>\n                    <th width=\"20%\">Bác sĩ chính</th>\n                    <th width=\"15%\">Trạng thái</th>\n\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #DichVuPTTTTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"10%\">{{dataItem.LoaiPTTT}}</td>\n                    <td width=\"15%\">{{dataItem.MaDichVu}}</td>\n                    <td width=\"40%\">{{dataItem.TenDichVu}}</td>\n                    <td width=\"20%\">{{dataItem.BacSiChinh}}</td>\n                    <td *ngIf=\"dataItem.TrangThai\" width=\"15%\"><span\n                            style=\"color:green;\">{{dataItem.TrangThaiDisplay}}</span>\n                    </td>\n                    <td *ngIf=\"!dataItem.TrangThai\" width=\"15%\">{{dataItem.TrangThaiDisplay}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <a *ngIf=\"coDichVuHuy == true\" (click)=\"hienThiDichVuKhongThucHien()\" id=\"show-khong-thuc-hien\">\n        <span style=\"color:#005dab; text-decoration: underline; font-weight: bold; margin: 15px\">\n            Dv không thực hiện\n        </span>\n    </a>\n\n    <div fxFlex=\"100%\" *ngIf=\"dichVu.YeuCauDichVuKyThuatId != null && dataThongTinLichSuEkipPTTT != null\">\n        <kendo-tabstrip fxFlex=\"100%\" [tabPosition]=\"'left'\" class=\"tab-strip-lich-su\" [keepTabContent]=\"true\"\n            (tabSelect)=\"onTabSelect($event)\">\n            <kendo-tabstrip-tab [selected]=\"true\">\n                <ng-template kendoTabTitle>\n                    <div kendoTooltip>\n                        EKIP <br />THỰC HIỆN\n                    </div>\n                </ng-template>\n                <ng-template kendoTabContent>\n                    <div class=\"p-2\">\n                        <app-lich-su-pttt-ekip-thuc-hien [dataThongTinLichSuEkipPTTT]=\"dataThongTinLichSuEkipPTTT\"\n                            [yeuCauDichVuKyThuatId]=\"dataThongTinLichSuEkipPTTT.Id\">\n                        </app-lich-su-pttt-ekip-thuc-hien>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n\n            <kendo-tabstrip-tab\n                *ngIf=\"dataThongTinLichSuEkipPTTT != null && dataThongTinLichSuEkipPTTT.PTTTVienChinh != null\">\n                <ng-template kendoTabTitle>\n                    <div kendoTooltip>\n                        TƯỜNG TRÌNH<br /> PT/TT\n                    </div>\n                </ng-template>\n                <ng-template kendoTabContent>\n                    <div class=\"p-2\">\n                        <app-lich-su-pttt-tuong-trinh [dataThongTinLichSuEkipPTTT]=\"dataThongTinLichSuEkipPTTT\"\n                            [yeuCauDichVuKyThuatId]=\"dichVu.YeuCauDichVuKyThuatId\">\n                        </app-lich-su-pttt-tuong-trinh>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n\n            <kendo-tabstrip-tab\n                *ngIf=\"dataThongTinLichSuEkipPTTT != null &&dataThongTinLichSuEkipPTTT.PTTTVienChinh != null\">\n                <ng-template kendoTabTitle>\n                    <div kendoTooltip>\n                        GHI NHẬN<br /> VT/THUỐC\n                    </div>\n                </ng-template>\n                <ng-template kendoTabContent>\n                    <div class=\"p-2\">\n                        <app-lich-su-pttt-ghi-nhan-vt-thuoc [yeuCauDichVuKyThuatId]=\"dichVu.YeuCauDichVuKyThuatId\">\n                        </app-lich-su-pttt-ghi-nhan-vt-thuoc>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n\n            <kendo-tabstrip-tab\n                *ngIf=\"dataThongTinLichSuEkipPTTT != null && dataThongTinLichSuEkipPTTT.PTTTVienChinh != null\">\n                <ng-template kendoTabTitle>\n                    <div kendoTooltip>\n                        CHỈ SỐ <br />SINH TỒN\n                    </div>\n                </ng-template>\n                <ng-template kendoTabContent>\n                    <div class=\"p-2\" *ngIf=\"yeuCauTiepNhanId != undefined\">\n                        <app-ls-ptt-cs-sinh-ton [yeuCauTiepNhanId]=\"yeuCauTiepNhanId\">\n                        </app-ls-ptt-cs-sinh-ton>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n        </kendo-tabstrip>\n    </div>\n    <div fxFlex=\"100%\"\n        *ngIf=\"dichVu.YeuCauDichVuKyThuatId == undefined && dichVu.YeuCauDichVuKyThuatId == null && dataThongTinLichSuEkipPTTT != null\">\n\n    </div>\n</div>\n\n<!-- <app-lich-su-pttt-ghi-nhan-vt-thuoc>\n                    </app-lich-su-pttt-ghi-nhan-vt-thuoc> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component.html":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Khoa phòng</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.TenKhoaPhong != null\">{{dataThongTinLichSuEkipPTTT.TenKhoaPhong}}</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Chẩn đoán vào khoa</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanVaoKhoa != null\">{{dataThongTinLichSuEkipPTTT.ChanDoanVaoKhoa}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanVaoKhoa == null\">Không có chẩn đoán vào khoa.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Mô tả</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.MoTaChanDoan != null\">{{dataThongTinLichSuEkipPTTT.MoTaChanDoan}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.MoTaChanDoan == null\">Không có mô tả chẩn đoán.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thời gian bắt đầu gây mê</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.ThoiGianBatDauGayMe != null\">{{dataThongTinLichSuEkipPTTT.ThoiGianBatDauGayMe}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.ThoiGianBatDauGayMe == null\">Không có thời gian bắt đầu gây\n                mê.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thời gian bắt đầu PT</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.ThoiDiemPhauThuat != null\">{{dataThongTinLichSuEkipPTTT.ThoiDiemPhauThuat}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.ThoiDiemPhauThuat == null\">Không có thời gian bắt đầu PT.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thời gian kết thúc PT</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.ThoiDiemKetThucPhauThuat != null\">{{dataThongTinLichSuEkipPTTT.ThoiDiemKetThucPhauThuat}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.ThoiDiemKetThucPhauThuat == null\">Không có thời gian kết thúc\n                PT.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">CĐ trước phẫu thuật</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanTruocPT != null\">{{dataThongTinLichSuEkipPTTT.ChanDoanTruocPT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanTruocPT == null\">Không có chẩn đoán trước phẫu\n                thuật.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Mô tả</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.MoTaTruocPT != null\">{{dataThongTinLichSuEkipPTTT.MoTaTruocPT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.MoTaTruocPT == null\">Không có mô tả trước phẫu thuật.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">CĐ sau phẫu thuật</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanSauPT != null\">{{dataThongTinLichSuEkipPTTT.ChanDoanSauPT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.ChanDoanSauPT == null\">Không có chẩn đoán sau phẫu thuật.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Mô tả</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.MoTaSauPT != null\">{{dataThongTinLichSuEkipPTTT.MoTaSauPT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.MoTaSauPT == null\">Không có mô tả sau phẫu thuật.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Phương pháp PTTT</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.PhuongPhapPTTT != null\">{{dataThongTinLichSuEkipPTTT.PhuongPhapPTTT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.PhuongPhapPTTT == null\">Không có phương pháp phẫu thuật thủ\n                thuật.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Loại PTTT</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.LoaiPhauThuatThuThuat != null\">{{dataThongTinLichSuEkipPTTT.LoaiPhauThuatThuThuat}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.LoaiPhauThuatThuThuat == null\">Không có loại phương pháp phẫu thuật\n                thủ thuật.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Phương pháp vô cảm</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.PhuongPhapVoCam != null\">{{dataThongTinLichSuEkipPTTT.PhuongPhapVoCam}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.PhuongPhapVoCam == null\">Không có phương pháp vô cảm.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">PTTT viên chính</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.PTTTVienChinh != null\">{{dataThongTinLichSuEkipPTTT.PTTTVienChinh}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.PTTTVienChinh == null\">Không có PTTT viên chính.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Tình hình PTTT</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.TinhHinhPTTT != null\">{{dataThongTinLichSuEkipPTTT.TinhHinhPTTT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.TinhHinhPTTT == null\">Không có tình hình PTTT.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Tai biến PTTT</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label\n                *ngIf=\"dataThongTinLichSuEkipPTTT.TaiBienPTTT != null\">{{dataThongTinLichSuEkipPTTT.TaiBienPTTT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.TaiBienPTTT == null\">Không có tai biến PTTT.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Trình tự phẫu thuật</h3>\n    <div fxFlex=\"100%\">\n        <ng-container *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\">\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.TrinhTuPT != null\">{{dataThongTinLichSuEkipPTTT.TrinhTuPT}}</label>\n            <label *ngIf=\"dataThongTinLichSuEkipPTTT.TrinhTuPT == null\">Không có trình tự phẫu thuật.</label>\n        </ng-container>\n    </div>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Lược đồ</h3>\n    <div fxFlex=\"100%\" *ngIf=\"dataThongTinLichSuEkipPTTT != undefined && dataThongTinLichSuEkipPTTT != null\"\n        class=\"mb-3\">\n        <div fxFlex=\"100%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            <div fxFlex=\"25%\" *ngFor=\"let item of dataThongTinLichSuEkipPTTT.ImgLuocDoPT\">\n                <div class=\"card overflow-hidden\" style=\"border: 1px solid #ccc;position: relative;\">\n                    <div class=\"mat-ripple p-4 text-center hover:bg-hover trans-ease-out cursor-pointer relative\">\n                        <img (click)=\"xemHinhAnhBoPhanTonThuong(item)\" src=\"{{item.LuocDo}}\" class=\"mx-auto\" />\n                    </div>\n                    <div class=\"bg-app-bar p-2\">\n                        <p>{{item.MoTa}}</p>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"dataThongTinLichSuEkipPTTT.ImgLuocDoPT.length == 0\">\n                <label>Không có lược đồ.</label>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.html":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        { Title: 'Phẫu Thuật Thủ Thuật', Path: '' },\n                        { Title: 'Lịch Sử Phẫu Thuật Thủ Thuật', Path: '/lich-su-phau-thuat-thu-thuat', Active: true }           \n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [urlGetData]=\"'PhauThuatThuThuat/GetDataForGridAsyncLichSuPhauThuatThuThuat'\"\n                [urlGetTotalPage]=\"'PhauThuatThuThuat/GetTotalPageForGridAsyncLichSuPhauThuatThuThuat'\"\n                [searchString]=\"lichSuPTTT.SearchString\" [additionalSearchString]=\"addtionStringDefault\"\n                [showStt]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\" [sort]=\"sort\">\n                <ng-template #thoiDiemTiepNhanTemplate let-dataItem>\n                    {{dataItem.ThoiDiemTiepNhanDisplay}}\n                </ng-template>\n                <ng-template #thoiDiemThucHienTemplate let-dataItem>\n                    {{dataItem.ThoiDiemThucHienDisplay}}\n                </ng-template>\n                <ng-template #thoiDiemHoanThanhTemplate let-dataItem>\n                    {{dataItem.ThoiDiemHoanThanhDisplay}}\n                </ng-template>\n                <ng-template #chiTietTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"view(dataItem.Id, dataItem.LaKhongThucHien)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaYeuCauTiepNhan}}\">\n                                {{dataItem.MaYeuCauTiepNhan}}\n                            </p>\n                        </a>\n                    </div>\n                </ng-template>\n                <ng-template #trangThaiTemplate let-dataItem>\n                    <label *ngIf=\"dataItem.TrangThaiPTTTSearch === 'Đã chuyển giao'\" class=\"green\">\n                        <strong><span>Đã chuyển giao</span></strong>\n                    </label>\n                    <label *ngIf=\"dataItem.TrangThaiPTTTSearch === 'Đã tử vong'\" class=\"red\">\n                        <strong><span>Đã tử vong</span></strong>\n                    </label>\n                </ng-template>\n            </app-grid>\n        </div>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                        name=\"searchString\" [(ngModel)]=\"lichSuPTTT.SearchString\" (keyup)=\"onKey($event)\"\n                        (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n                <app-datetimepicker fxFlex=\"245px\" #tiepnhantu id=\"ThoiDiemTiepNhanTuFormat\"\n                    [(model)]=\"lichSuPTTT.ThoiDiemTiepNhanTuFormat\"\n                    label=\"Hoàn thành từ\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n                <app-datetimepicker fxFlex=\"245px\" #tiepnhanden id=\"ThoiDiemTiepNhanDenFormat\"\n                    [(model)]=\"lichSuPTTT.ThoiDiemTiepNhanDenFormat\"\n                    label=\"Hoàn thành đến\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n                </app-datetimepicker>\n\n                <app-checkbox [(model)]=\"lichSuPTTT.ThongTinThucHien.ThucHien\" id=\"thucHien\" label=\"Thực hiện\"\n                    class=\"ml-2 mt-2 mr-1\"></app-checkbox>\n                <app-checkbox [(model)]=\"lichSuPTTT.ThongTinThucHien.KhongThucHien\" id=\"khongThucHien\" label=\"Không thực hiện\"\n                    class=\"mt-2 mr-1\"></app-checkbox>\n\n                <button type=\"button\" color=\"primary\" (click)=\"TimKiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button>\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"exportExcel()\"\n                    kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n            </div>\n        </ng-template>\n        <ng-template #khoaGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n        <ng-template #TuongTrinhLaiTemplate let-dataItem>\n            <button *ngIf=\"dataItem.DuocTuongTrinhLai===true && dataItem.TuVongTrongPTTT != true\" color=\"primary\" mat-raised-button\n                (click)=\"tuongtinhLai(dataItem)\">Tường trình\n                lại</button>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1kdi1raG9uZy10aHVjLWhpZW4vbGljaC1zdS1kdi1raG9uZy10aHVjLWhpZW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.ts ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: LichSuDvKhongThucHienComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuDvKhongThucHienComponent", function() { return LichSuDvKhongThucHienComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let LichSuDvKhongThucHienComponent = class LichSuDvKhongThucHienComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.gridColumns = [];
        this.urlGetDataGrid = "PhauThuatThuThuat/GetDataForGridAsyncLichSuDVPTTTKhongThucHien";
        this.urlGetTotalPageGrid = "PhauThuatThuThuat/GetTotalPageForGridAsyncLichSuDVPTTTKhongThucHien";
    }
    ngOnInit() {
        console.log("data Input: ", this.data);
        this.gridColumns = [
            { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 250 },
            { Field: "LyDo", Title: "Lý do hủy", Width: 200 },
            { Field: "HoTenBacSiHuy", Title: "Người hủy", Width: 150 },
        ];
    }
    close() {
        this.dialog.closeAll();
    }
};
LichSuDvKhongThucHienComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
LichSuDvKhongThucHienComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-dv-khong-thuc-hien',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-dv-khong-thuc-hien.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-dv-khong-thuc-hien.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], LichSuDvKhongThucHienComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".zoom {\n  transition: transform 0.2s;\n  /* Animation */\n}\n\n.zoom:hover {\n  transform: scale(2.5);\n  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.icon-close {\n  z-index: 9;\n  right: 0;\n  cursor: pointer;\n}\n\n.icon-close:hover {\n  color: #005dab;\n}\n\n.buttonhover:hover {\n  background-color: #0000CD;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3BoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC1jaGktdGlldC9saWNoLXN1LWhpbmgtYW5oLWNscy1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHBoYXUtdGh1YXQtdGh1LXRodWF0XFxsaWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0XFxsaWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0LWNoaS10aWV0XFxsaWNoLXN1LWhpbmgtYW5oLWNscy1wb3B1cFxcbGljaC1zdS1oaW5oLWFuaC1jbHMtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1oaW5oLWFuaC1jbHMtcG9wdXAvbGljaC1zdS1oaW5oLWFuaC1jbHMtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EscUZBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0LWNoaS10aWV0L2xpY2gtc3UtaGluaC1hbmgtY2xzLXBvcHVwL2xpY2gtc3UtaGluaC1hbmgtY2xzLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnpvb20ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgLyogQW5pbWF0aW9uICovXG59XG5cbi56b29tOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xuICAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4uaWNvbi1jbG9zZSB7XG4gIHotaW5kZXg6IDk7XG4gIHJpZ2h0OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uLWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbi5idXR0b25ob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwQ0Q7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCIuem9vbSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAvKiBBbmltYXRpb24gKi9cbn1cblxuLnpvb206aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG4gIC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5pY29uLWNsb3NlIHtcbiAgei1pbmRleDogOTtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24tY2xvc2U6aG92ZXIge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLmJ1dHRvbmhvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBDRDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component.ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component.ts ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: LichSuHinhAnhClsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuHinhAnhClsPopupComponent", function() { return LichSuHinhAnhClsPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _iconify_icons_ic_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/close */ "./node_modules/@iconify/icons-ic/close.js");
/* harmony import */ var _iconify_icons_ic_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
/* harmony import */ var _iconify_icons_ic_picture_as_pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/picture-as-pdf */ "./node_modules/@iconify/icons-ic/picture-as-pdf.js");
/* harmony import */ var _iconify_icons_ic_picture_as_pdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_picture_as_pdf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/file-download.helper */ "./src/app/core/utilities/file-download.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_baseline_cloud_download__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/baseline-cloud-download */ "./node_modules/@iconify/icons-ic/baseline-cloud-download.js");
/* harmony import */ var _iconify_icons_ic_baseline_cloud_download__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_cloud_download__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-remove-red-eye */ "./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js");
/* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");















let LichSuHinhAnhClsPopupComponent = class LichSuHinhAnhClsPopupComponent {
    constructor(data, dialog, apiService, http, sanitizer) {
        this.data = data;
        this.dialog = dialog;
        this.apiService = apiService;
        this.http = http;
        this.sanitizer = sanitizer;
        this.fileKetQuaCanLamSangsLoai1 = [];
        this.fileKetQuaCanLamSangsLoai2 = [];
        this.isAll = null;
        this.icClose = _iconify_icons_ic_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icPDF = _iconify_icons_ic_picture_as_pdf__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icDownward = _iconify_icons_ic_baseline_cloud_download__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icRedEye = _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].LichSuPhauThuatThuThuat;
    }
    ngOnInit() {
        this.gridColumns = [
            { Field: "Ten", Title: "Tên file", Width: 100 },
            { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate, TemplateHeader: this.downLoadAllTemplate }
        ];
        this.gridDataSource = {
            data: this.data,
            total: 0
        };
        this.fileKetQuaCanLamSangsLoaiAll = this.data;
    }
    close() {
        this.dialog.closeAll();
    }
    Xem(dataItem) {
        let type = null;
        let tilte = null;
        if (dataItem.LoaiFile == 2) {
            type = "PDF";
            tilte = "Tài liệu";
        }
        else {
            type = "Image";
            tilte = "Hình ảnh";
        }
        this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_5__["ViewImagePdfComponent"], {
            disableClose: false,
            width: '1000px',
            height: '600px',
            data: {
                Type: type, Title: tilte,
                Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""),
                Src: dataItem.Url
            }
        });
    }
    Download(dataItem) {
        var self = this;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]({
            fromObject: {
                tenGuid: dataItem.TenGuid,
                duongDan: dataItem.DuongDan,
            },
        });
        self.apiService
            .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
            .subscribe((result) => {
            self.dataPopup = result;
            const options = new _angular_http__WEBPACK_IMPORTED_MODULE_9__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_9__["ResponseContentType"].Blob });
            self.http.get(self.dataPopup, options).subscribe(res => {
                Object(src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_10__["saveFile"])(res.blob(), dataItem.Ten);
            });
        });
    }
    downloadFile() {
        var self = this;
        self.fileKetQuaCanLamSangsLoaiAll.forEach(element => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]({
                fromObject: {
                    tenGuid: element.TenGuid,
                    duongDan: element.DuongDan,
                },
            });
            self.apiService
                .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
                .subscribe((result) => {
                self.dataPopup = result;
                const options = new _angular_http__WEBPACK_IMPORTED_MODULE_9__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_9__["ResponseContentType"].Blob });
                self.http.get(self.dataPopup, options).subscribe(res => {
                    Object(src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_10__["saveFile"])(res.blob(), element.Ten);
                });
            });
        });
    }
};
LichSuHinhAnhClsPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_9__["Http"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], LichSuHinhAnhClsPopupComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('downLoadAllTemplate', { static: true })
], LichSuHinhAnhClsPopupComponent.prototype, "downLoadAllTemplate", void 0);
LichSuHinhAnhClsPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-hinh-anh-cls-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-hinh-anh-cls-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-hinh-anh-cls-popup.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], LichSuHinhAnhClsPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.scss ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.content-tab-popup {\n  margin-top: 49px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.top-content {\n  top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3BoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC1jaGktdGlldC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHBoYXUtdGh1YXQtdGh1LXRodWF0XFxsaWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0XFxsaWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0LWNoaS10aWV0XFxsaWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0LWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0LWNoaS10aWV0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3BoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC1jaGktdGlldC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0LWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRlbnQtdGFiLXBvcHVwIHtcbiAgbWFyZ2luLXRvcDogNDlweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4udG9wLWNvbnRlbnQge1xuICB0b3A6IDUwcHg7XG59IiwiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRlbnQtdGFiLXBvcHVwIHtcbiAgbWFyZ2luLXRvcDogNDlweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4udG9wLWNvbnRlbnQge1xuICB0b3A6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.ts":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.ts ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: LichSuPhauThuatThuThuatChiTietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPhauThuatThuThuatChiTietComponent", function() { return LichSuPhauThuatThuThuatChiTietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../phau-thuat-thu-thuat.model */ "./src/app/modules/main/phau-thuat-thu-thuat/phau-thuat-thu-thuat.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let LichSuPhauThuatThuThuatChiTietComponent = class LichSuPhauThuatThuThuatChiTietComponent {
    constructor(router, route, apiService, dialog, location, notificationService) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.dialog = dialog;
        this.location = location;
        this.notificationService = notificationService;
        this.yeuCauTiepNhanId = null;
        this.yeuCauDichVuKyThuatId = null;
        this.dichVuKyThuatHoanThanh = null;
        this.dichVuKyThuatTuongTrinh = null;
        this.dataThongTinLichSuEkipPTTT = null;
        this.thongTinKhamTheoDoiData = null;
        this.dataKhamKhacChiTiets = null;
        //BVHD-3860
        this.laKhongThucHien = false;
    }
    ngOnInit() {
        this.thongTinBenhNhan = new _phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_7__["ThongTinBenhNhanPTTT"]();
        //BVHD-3860
        if (this.route.snapshot.params.laKhongThucHien != undefined) {
            this.laKhongThucHien = this.route.snapshot.params.laKhongThucHien == 'true' || this.route.snapshot.params.laKhongThucHien == true;
        }
        if (this.route.snapshot.params.id) {
            this.yeuCauDichVuKyThuatId = this.route.snapshot.params.id;
            this.getBenhNhanDangKham(this.yeuCauDichVuKyThuatId);
            // this.getThongTinLichSuEkipPTTT(this.yeuCauTiepNhanId);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    getBenhNhanDangKham(id) {
        this.showPopupLoadingData();
        this.apiService.get("PhauThuatThuThuat/ThongTinBenhNhanPTTT?yeuCauDichVuKyThuatId=" + id).subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.thongTinBenhNhan = resultData;
                this.closePopupLoadingData();
                //console.log("this.thongTinBenhNhan Lich Su PTTT: ", this.thongTinBenhNhan)
                this.apiService.get("PhauThuatThuThuat/GetDichVuKyThuatChuaHoanThanhTrenHoanThanhCanLamSang?yeuCauTiepNhanId=" + this.thongTinBenhNhan.YeuCauTiepNhanId).subscribe(res => {
                    if (res != undefined && res != null) {
                        this.dichVuKyThuatHoanThanh = res;
                        //console.log("this.dichVuKyThuatHoanThanh: ", this.dichVuKyThuatHoanThanh)
                    }
                }, (err) => {
                    this.notificationService.showError(err);
                });
                let obj = {
                    YeuCauTiepNhanId: this.thongTinBenhNhan.YeuCauTiepNhanId,
                    LanThucThien: this.thongTinBenhNhan.LanThucThien
                };
                this.apiService.post("PhauThuatThuThuat/DichVuDaTuongTrinh", obj).subscribe(res => {
                    if (res != undefined && res != null) {
                        this.dichVuKyThuatTuongTrinh = res;
                        console.log("this.dichVuKyThuatTuongTrinh: ", this.dichVuKyThuatTuongTrinh);
                    }
                }, (err) => {
                    this.notificationService.showError(err);
                });
            }
            else {
                this.closePopupLoadingData();
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
                this.closePopupLoadingData();
            }
            this.closePopupLoadingData();
        });
    }
    getThongTinLichSuEkipPTTT(id) {
        this.showPopupLoadingData();
        this.apiService.get("PhauThuatThuThuat/ThongTinLichSuEkipPTTT?yeuCauDichVuKyThuatId=" + id).subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dataThongTinLichSuEkipPTTT = resultData;
                //console.log("data Ekip: ", this.dataThongTinLichSuEkipPTTT);
                this.closePopupLoadingData();
            }
            else {
                this.closePopupLoadingData();
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
                this.closePopupLoadingData();
            }
            this.closePopupLoadingData();
        });
    }
    quayLai() {
        // this.router.navigate(['/lich-su-phau-thuat-thu-thuat']);
        this.location.back();
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.quayLai();
            event.preventDefault();
        }
    }
};
LichSuPhauThuatThuThuatChiTietComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], LichSuPhauThuatThuThuatChiTietComponent.prototype, "keyEvent", null);
LichSuPhauThuatThuThuatChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-phau-thuat-thu-thuat-chi-tiet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-phau-thuat-thu-thuat-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.scss")).default]
    })
], LichSuPhauThuatThuThuatChiTietComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component.scss ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3BoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC1jaGktdGlldC9saWNoLXN1LXB0dHQtY2xzL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxccGhhdS10aHVhdC10aHUtdGh1YXRcXGxpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXRcXGxpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXRcXGxpY2gtc3UtcHR0dC1jbHNcXGxpY2gtc3UtcHR0dC1jbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LWNscy9saWNoLXN1LXB0dHQtY2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LWNscy9saWNoLXN1LXB0dHQtY2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnllbGxvd1RleHQge1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn0iLCIueWVsbG93VGV4dCB7XG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uYmxhY2tUZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: LichSuPtttClsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPtttClsComponent", function() { return LichSuPtttClsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_modules_main_kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/main/kham-benh/kham-benh.model */ "./src/app/modules/main/kham-benh/kham-benh.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-remove-red-eye */ "./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js");
/* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/file-download.helper */ "./src/app/core/utilities/file-download.helper.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_modules_main_xet_nghiem_lay_mau_xet_nghiem_lay_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model.ts");
/* harmony import */ var src_app_modules_main_xet_nghiem_duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component */ "./src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component.ts");
/* harmony import */ var src_app_modules_main_xet_nghiem_lay_mau_xet_nghiem_lay_mau_xet_nghiem_ket_qua_popup_lay_mau_xet_nghiem_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component */ "./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component.ts");
/* harmony import */ var src_app_modules_main_can_lam_sang_lich_su_can_lam_sang_xem_ket_qua_cdha_tdcn_popup_xem_ket_qua_cdha_tdcn_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component.ts");















let LichSuPtttClsComponent = class LichSuPtttClsComponent {
    constructor(apiService, dialog, http, notificationService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.http = http;
        this.notificationService = notificationService;
        this.gridColumns = [];
        this.icRedEye = _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.groups = [{
                field: 'Nhom', dir: null, aggregates: [
                    { field: 'ThanhTien', aggregate: 'sum' },
                    { field: 'BHYTThanhToan', aggregate: 'sum' },
                    { field: 'SoTienMG', aggregate: 'sum' },
                    { field: 'BNThanhToan', aggregate: 'sum' },
                ],
            }];
        this.groupCLSs = [{ field: 'Nhom' }];
        this.goiKhongChietKhau = [];
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].LichSuPhauThuatThuThuat;
        this.trangThaiDichVuKyThuat = new src_app_modules_main_kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_3__["TrangThaiYeuCauDichVuKyThuatObjEnum"]();
        this.inPhieuDuyetKetQua = new src_app_modules_main_xet_nghiem_lay_mau_xet_nghiem_lay_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_11__["InPhieuKetQuaLayMau"]();
        this.dataSource = { data: [], total: 0 };
    }
    totalThanhTien(field) {
        switch (field) {
            case 'ThanhTien':
                return this.goiKhongChietKhau.reduce((sum, item) => sum + item.ThanhTien, 0);
        }
    }
    ;
    ngOnInit() {
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 35, Sortable: true, Template: this.sTTTemplate },
            { Field: "MaDichVu", Title: "Mã", Width: 60, ShowTooltip: true },
            { Field: "Nhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 150, ShowTooltip: true },
            { Field: "TenLoaiGia", Title: "Loại Giá", Width: 80, TemplateGroupFooter: this.congTienGroupFooterTemplate, TemplateFooter: this.tongTienFooterTemplate, Template: this.nhomGiaTemplate },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLan", Title: "SL", Width: 59, Template: this.soLuongTemplate },
            {
                Field: "ThanhTien", Title: "Thành Tiền", Width: 100,
                Template: this.thanhTienTemplate,
                TemplateFooter: this.thanhTienFooterTemplate,
                TemplateGroupFooter: this.thanhTienGroupFooterTemplate
            },
            { Field: "DonGiaBaoHiem", Title: "Đơn Giá BHYT", Width: 100, Template: this.donGiaBaoHiemTemplate },
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemTemplate },
            { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 150, Template: this.noiThucHienTemplate },
            { Field: "TrangThai", Title: "Tình trạng", Width: 100, Template: this.trangThaiTemplate },
            { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 100 },
            { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 100 },
            { Field: "NhanVienThucHien", Title: "Người thực hiện", Width: 100 },
            { Field: "XemKetQua", Title: "Xem KQ", Width: 140, Sortable: true, Template: this.xemKQTemplate }
        ];
    }
    onDataBoundChild(event) {
        if (event != undefined && event != null) {
            this.goiKhongChietKhau = event.Data;
        }
    }
    xemKetQuaCLS(dataItem) {
        // if (dataItem.FileKetQuaCanLamSangs && dataItem.FileKetQuaCanLamSangs.length > 1) {
        this.dialog.open(src_app_modules_main_can_lam_sang_lich_su_can_lam_sang_xem_ket_qua_cdha_tdcn_popup_xem_ket_qua_cdha_tdcn_popup_component__WEBPACK_IMPORTED_MODULE_14__["XemKetQuaCdhaTdcnPopupComponent"], {
            disableClose: false,
            width: '1000px',
            data: dataItem.Id
        }).afterClosed().subscribe(result => {
        });
        // } else {
        //   let type = null;
        //   let title = null;
        //   let description = null;
        //   if (dataItem.FileKetQuaCanLamSangs[0].LoaiFile == 2) {
        //     type = "PDF";
        //     title = "Xem tài liệu";
        //     description = dataItem.MoTa != undefined ? dataItem.MoTa : ""
        //   }
        //   else {
        //     type = "Image";
        //     title = "Xem ảnh";
        //     description = dataItem.MoTa != undefined ? dataItem.MoTa : ""
        //   }
        //   this.dialog.open(ViewImagePdfComponent, {
        //     disableClose: false,
        //     width: '1000px',
        //     height: 'auto',
        //     data: {
        //       Type: type, Title: title,
        //       Description: description,
        //       Src: dataItem.FileKetQuaCanLamSangs[0].Url
        //     }
        //   });
        // }
    }
    downloadFile(dataItem) {
        dataItem.FileKetQuaCanLamSangs.forEach(element => {
            if (element.LoaiFile == 10) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]({
                    fromObject: {
                        tenGuid: element.TenGuid,
                        duongDan: element.DuongDan,
                    },
                });
                this.apiService
                    .get("TaiLieuDinhKem/GetTaiLieuUrl", params)
                    .subscribe((result) => {
                    console.log(result);
                    this.dataPopup = result;
                    const options = new _angular_http__WEBPACK_IMPORTED_MODULE_8__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_8__["ResponseContentType"].Blob });
                    this.http.get(this.dataPopup, options).subscribe(res => {
                        Object(src_app_core_utilities_file_download_helper__WEBPACK_IMPORTED_MODULE_9__["saveFile"])(res.blob(), element.TenGuid);
                    });
                });
            }
        });
    }
    OpenClickPopupXemKetQuaNhomXetNghiemCLS(dataItem) {
        let yeuCauKyThuat = dataItem.items.filter(w => w.TrangThai === "Đã thực hiện" && w.Nhom === dataItem.value);
        if (yeuCauKyThuat.length > 0) {
            this.xemKetQuaCLS(yeuCauKyThuat[0]);
        }
        else {
            this.notificationService.showError("Nhóm này chưa có kết quả");
        }
    }
    downloadFileNhomXetNghiem(dataItem) {
        let yeuCauKyThuat = dataItem.items.filter(w => w.TrangThai === "Đã thực hiện" && w.Nhom === dataItem.value);
        if (yeuCauKyThuat.length > 0) {
            this.downloadFile(yeuCauKyThuat[0]);
        }
        else {
            this.notificationService.showError("Nhóm này chưa có kết quả");
        }
    }
    kiemTraCoKetQuaCLSXetNghiem(lstYeuCauDichVuKyThuat) {
        let result = lstYeuCauDichVuKyThuat.filter(p => p.TrangThai !== 3 && p.LoaiDichVuKyThuat === 2);
        return result.length > 0;
    }
    InPhieuXn() {
        let dialogRef;
        let dataChiTietXetNghiem = [];
        this.apiService.post("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe((result) => {
            if (result != null) {
                result.forEach(element => {
                    if (element.ChiTietKetQuaXetNghiems != null) {
                        element.ChiTietKetQuaXetNghiems.forEach(elements => {
                            dataChiTietXetNghiem.push(elements);
                        });
                    }
                });
                dialogRef = this.dialog.open(src_app_modules_main_xet_nghiem_duyet_ket_qua_chon_loai_ket_qua_xet_nghiem_popup_chon_loai_ket_qua_xet_nghiem_popup_component__WEBPACK_IMPORTED_MODULE_12__["ChonLoaiKetQuaXetNghiemPopupComponent"], {
                    disableClose: true,
                    width: '1000px',
                    // height: '300px',
                    data: dataChiTietXetNghiem,
                }).afterClosed().subscribe((result) => {
                    if (result != undefined && result != null && result != "") {
                        if (result == 'No') {
                            this.closePopupLoadingData();
                        }
                        else {
                            this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                            this.inPhieuDuyetKetQua.Header = true;
                            this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                            this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                            this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                            //this.apiService.postExportPdf<any>('XetNghiem/ExportPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                            this.apiService.post('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(arrHtml => {
                                // const dateTimeNow = new Date();
                                // CommonService.downLoadFile(resData, 'application/pdf', 'KetQuaXetNghiem' + dateTimeNow.getDate() + dateTimeNow.getMonth() + dateTimeNow.getFullYear() + '.pdf');
                                //   this.closePopupLoadingData();
                                this.dialog.open(src_app_modules_main_xet_nghiem_lay_mau_xet_nghiem_lay_mau_xet_nghiem_ket_qua_popup_lay_mau_xet_nghiem_ket_qua_popup_component__WEBPACK_IMPORTED_MODULE_13__["LayMauXetNghiemKetQuaPopupComponent"], {
                                    disableClose: false,
                                    width: '1000px',
                                    data: arrHtml
                                }).afterClosed().subscribe(result => {
                                });
                                this.closePopupLoadingData();
                            }, (err) => {
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                                this.closePopupLoadingData();
                            });
                        }
                    }
                });
            }
            ;
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
};
LichSuPtttClsComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_8__["Http"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTienFooterTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "tongTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congTienGroupFooterTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "congTienGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGiaTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "nhomGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "thanhTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBaoHiemTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "donGiaBaoHiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocHuongBaoHiemTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "duocHuongBaoHiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "noiThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuKyThuat', { static: true })
], LichSuPtttClsComponent.prototype, "gridDichVuKyThuat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xemKQTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "xemKQTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomXemKQTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "nhomXemKQTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sTTTemplate', { static: true })
], LichSuPtttClsComponent.prototype, "sTTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttClsComponent.prototype, "yeuCauTiepNhanId", void 0);
LichSuPtttClsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-pttt-cls',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-pttt-cls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-pttt-cls.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component.scss")).default]
    })
], LichSuPtttClsComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component.scss ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".font-size-css {\n  font: 500 15px/26px var(--font);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3BoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC1jaGktdGlldC9saWNoLXN1LXB0dHQtZWtpcC10aHVjLWhpZW4vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxwaGF1LXRodWF0LXRodS10aHVhdFxcbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdFxcbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC1jaGktdGlldFxcbGljaC1zdS1wdHR0LWVraXAtdGh1Yy1oaWVuXFxsaWNoLXN1LXB0dHQtZWtpcC10aHVjLWhpZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LWVraXAtdGh1Yy1oaWVuL2xpY2gtc3UtcHR0dC1la2lwLXRodWMtaGllbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0LWNoaS10aWV0L2xpY2gtc3UtcHR0dC1la2lwLXRodWMtaGllbi9saWNoLXN1LXB0dHQtZWtpcC10aHVjLWhpZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1zaXplLWNzcyB7XG4gIGZvbnQ6IDUwMCAxNXB4LzI2cHggdmFyKC0tZm9udCk7XG59IiwiLmZvbnQtc2l6ZS1jc3Mge1xuICBmb250OiA1MDAgMTVweC8yNnB4IHZhcigtLWZvbnQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component.ts":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component.ts ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: LichSuPtttEkipThucHienComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPtttEkipThucHienComponent", function() { return LichSuPtttEkipThucHienComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LichSuPtttEkipThucHienComponent = class LichSuPtttEkipThucHienComponent {
    constructor() { }
    ngOnInit() {
        console.log("yeuCauDichVuKyThuatId:", this.yeuCauDichVuKyThuatId);
    }
    ngOnChanges() {
        if (this.dataThongTinLichSuEkipPTTT != null) {
            this.yeuCauDichVuKyThuatId = this.dataThongTinLichSuEkipPTTT.Id;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttEkipThucHienComponent.prototype, "yeuCauDichVuKyThuatId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttEkipThucHienComponent.prototype, "dataThongTinLichSuEkipPTTT", void 0);
LichSuPtttEkipThucHienComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-pttt-ekip-thuc-hien',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-pttt-ekip-thuc-hien.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-pttt-ekip-thuc-hien.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component.scss")).default]
    })
], LichSuPtttEkipThucHienComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LWVraXAtdGh1Yy1oaWVuL2xpY2gtc3UtcHR0dC1udGgvbGljaC1zdS1wdHR0LW50aC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component.ts":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component.ts ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: LichSuPtttNthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPtttNthComponent", function() { return LichSuPtttNthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");




let LichSuPtttNthComponent = class LichSuPtttNthComponent {
    constructor() {
        this.gridNguoiThucHienColumns = [];
        this.isFirstLoadData = true;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].LichSuPhauThuatThuThuat;
    }
    ngOnInit() {
        this.gridNguoiThucHienColumns = [
            { Field: "ChucDanh", Title: "Chức danh", Sortable: false, Width: 120 },
            { Field: "HoTen", Title: "Họ tên", Sortable: false, Width: 120 },
            { Field: "VaiTro", Title: "Vai trò", Sortable: false, Width: 120 },
        ];
    }
    ngOnChanges() {
        this.refreshGrid();
    }
    refreshGrid() {
        var self = this;
        if (self.yeuCauDichVuKyThuatId != null && self.gridPttt != undefined) {
            self.gridPttt._additionalSearchString = self.yeuCauDichVuKyThuatId.toString();
            self.gridPttt.search();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttNthComponent.prototype, "yeuCauDichVuKyThuatId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridPttt', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], static: false })
], LichSuPtttNthComponent.prototype, "gridPttt", void 0);
LichSuPtttNthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-pttt-nth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-pttt-nth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-pttt-nth.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component.scss")).default]
    })
], LichSuPtttNthComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LWdoaS1uaGFuLXZ0LXRodW9jL2xpY2gtc3UtcHR0dC1naGktbmhhbi12dC10aHVvYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component.ts":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component.ts ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: LichSuPtttGhiNhanVtThuocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPtttGhiNhanVtThuocComponent", function() { return LichSuPtttGhiNhanVtThuocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");





let LichSuPtttGhiNhanVtThuocComponent = class LichSuPtttGhiNhanVtThuocComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.gridColumns = [];
        this.gridDataSource = [];
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].LichSuPhauThuatThuThuat;
        this.gridDataSourceVTTHThuoc = {};
        this.gridVTTHThuocColumns = [];
        this.groupsGhiNhanVTHHThuoc = [{ field: 'GiaiDoanPhauThuatDisplay', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
    }
    ngOnInit() {
        //Ghi nhận vật tư/ thuốc
        this.gridVTTHThuocColumns = [
            // { Field: "STT", Title: "#", Width: 40, Template: this.sttTemplate },
            { Field: "GiaiDoanPhauThuatDisplay", Title: "GiaiDoanPhauThuat", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderVTTemplate },
            { Field: "TenDichVuYeuCau", Title: "Tên vật tư/thuốc", Width: 130, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
            { Field: "TenKho", Title: "Kho sử dụng", Width: 100 },
            { Field: "TenDuongDung", Title: "Đường dùng", Width: 100 },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaVTFooterTemplate },
            { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate },
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
            { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemVTTemplate },
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
            { Field: "TinhPhi", Title: "Tính phí", Width: 60, Template: this.tinhPhiGhiNhanVHTTTemplate },
            { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 90 },
            { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 90 },
            // { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 150, },
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 150, },
        ];
        if (this.yeuCauDichVuKyThuatId != null) {
            this.getGridDataGhiNhanVTHHThuoc(this.yeuCauDichVuKyThuatId);
        }
    }
    ngOnChanges() {
        if (this.yeuCauDichVuKyThuatId != null) {
            this.getGridDataGhiNhanVTHHThuoc(this.yeuCauDichVuKyThuatId);
        }
    }
    totalGhiNhanVTTHThuoc(field) {
        if (this.gridDataSourceVTTHThuoc.data != undefined) {
            switch (field) {
                case 'ThanhTien':
                    return this.gridDataSourceVTTHThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }
    getGridDataGhiNhanVTHHThuoc(yeuCauDichVuKyThuatId) {
        var url = `PhauThuatThuThuat/GetGridDataGhiNhanVTTHThuoc?yeuCauDichVuKyThuatId=${yeuCauDichVuKyThuatId}`;
        this.apiService.get(url).subscribe(res => {
            if (res) {
                this.gridDataSourceVTTHThuoc = {
                    data: res,
                    total: res.length
                };
                if (this.gridChildVTTHThuoc !== undefined) {
                    this.gridChildVTTHThuoc.gridDataSource = this.gridDataSourceVTTHThuoc;
                    this.gridChildVTTHThuoc.setDataSource();
                }
            }
        }, (err) => {
        });
    }
};
LichSuPtttGhiNhanVtThuocComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttGhiNhanVtThuocComponent.prototype, "yeuCauDichVuKyThuatId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderVTTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "nhomGroupHeaderVTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaVTTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "donGiaVTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaVTFooterTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "donGiaVTFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongGhiNhanVTTHThuocTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "soLuongGhiNhanVTTHThuocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienVTTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "thanhTienVTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGhiNhanVTTHThuocFooterTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "thanhTienGhiNhanVTTHThuocFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGhiNhanVTTHThuocGroupFooterTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "thanhTienGhiNhanVTTHThuocGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBaoHiemVTTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "donGiaBaoHiemVTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocHuongBaoHiemGhiNhanVHTTTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "duocHuongBaoHiemGhiNhanVHTTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVTTHThuoc', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], static: false })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "gridChildVTTHThuoc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhPhiGhiNhanVHTTTemplate', { static: true })
], LichSuPtttGhiNhanVtThuocComponent.prototype, "tinhPhiGhiNhanVHTTTemplate", void 0);
LichSuPtttGhiNhanVtThuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-pttt-ghi-nhan-vt-thuoc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-pttt-ghi-nhan-vt-thuoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-pttt-ghi-nhan-vt-thuoc.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component.scss")).default]
    })
], LichSuPtttGhiNhanVtThuocComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LWhvaS10aW5oL2xpY2gtc3UtcHR0dC1ob2ktdGluaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component.ts":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: LichSuPtttHoiTinhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPtttHoiTinhComponent", function() { return LichSuPtttHoiTinhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");



let LichSuPtttHoiTinhComponent = class LichSuPtttHoiTinhComponent {
    constructor() {
        this.thongTinKhamTheoDoiData = null;
        this.thongTinKhamTheoDoiTemplateObj = null;
        this.validationErrors = null;
        this.gridKhamKhacColumns = [];
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].LichSuPhauThuatThuThuat;
    }
    ngOnInit() {
        this.gridKhamKhacColumns = [
            { Field: "BoPhan", Title: "Bộ Phận", Width: 100 },
            { Field: "MoTa", Title: "Mô Tả", Width: 100 },
        ];
        this.getThongTinKhamKhacChiTiets(0);
    }
    getThongTinKhamKhacChiTiets(index) {
        this.thongTinKhamTheoDoiTemplateObj = JSON.parse(this.thongTinKhamKhacPTTT[index].ThongTinKhamTheoDoiTemplate);
        this.thongTinKhamTheoDoiData = this.thongTinKhamKhacPTTT[index].ThongTinKhamTheoDoiData;
        if (this.thongTinKhamTheoDoiData == null) {
            this.thongTinKhamTheoDoiTemplateObj = undefined;
        }
        this.bindDataDynamicComponent();
    }
    bindDataDynamicComponent() {
        let strData = this.thongTinKhamTheoDoiData;
        if (strData != undefined && strData != null) {
            let dataObj = JSON.parse(strData);
            let itemTemp = null;
            if (this.thongTinKhamTheoDoiTemplateObj !== null) {
                this.thongTinKhamTheoDoiTemplateObj.ComponentDynamics.forEach(item => {
                    if (item.groupItems != undefined && item.groupItems != null && item.groupItems.length > 0) {
                        item.groupItems.forEach(element => {
                            itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == element.Id);
                            if (itemTemp != null) {
                                element.Value = itemTemp.Value;
                            }
                        });
                    }
                    else {
                        itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == item.Id);
                        if (itemTemp != null) {
                            item.Value = itemTemp.Value;
                        }
                    }
                });
            }
        }
    }
    onTabSelect(event) {
        this.getThongTinKhamKhacChiTiets(event.index);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttHoiTinhComponent.prototype, "yeuCauTiepNhanId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttHoiTinhComponent.prototype, "thongTinKhamKhacPTTT", void 0);
LichSuPtttHoiTinhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-pttt-hoi-tinh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-pttt-hoi-tinh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-pttt-hoi-tinh.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component.scss")).default]
    })
], LichSuPtttHoiTinhComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component.scss ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LWhvaS10aW5oL2xzLXB0dC1jcy1zaW5oLXRvbi9scy1wdHQtY3Mtc2luaC10b24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component.ts":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component.ts ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: LichSuPttCsSinhTonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPttCsSinhTonComponent", function() { return LichSuPttCsSinhTonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");



let LichSuPttCsSinhTonComponent = class LichSuPttCsSinhTonComponent {
    constructor() {
        this.format = 'n2';
        this.gridChiSoSinhTonColumns = [];
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].LichSuPhauThuatThuThuat;
    }
    ngOnInit() {
        this.gridChiSoSinhTonColumns = [
            { Field: "NhipTim", Title: "Mạch (nhịp/phút)", Width: 137, Template: this.nhipTimTemplate },
            { Field: "ThanNhiet", Title: "Nhiệt độ (°C)", Width: 104, Template: this.thanNhietTemplate },
            { Field: "HuyetAp", Title: "Huyết áp (mmHg)", Width: 137, Template: this.huyetApTemplate },
            { Field: "NhipTho", Title: "Nhịp thở (lần/phút)", Width: 155, Template: this.nhipThoTemplate },
            { Field: "CanNang", Title: "Cân nặng (kg)", Width: 113, Template: this.canNangTemplate },
            { Field: "ChieuCao", Title: "Chiều cao (cm)", Width: 117, Template: this.chieuCaoTemplate },
            { Field: "BMI", Title: "BMI (kg/m²)", Width: 91, Template: this.BMITemplate },
            { Field: "Glassgow", Title: "Glassgow", Width: 120, Template: this.glassgowTemplate },
            { Field: "SpO2", Title: "SpO2(%)", Width: 120, Template: this.sPO2Template },
            { Field: "NhanVienThucHien", Title: "Nhân viên thực hiện", Width: 156 },
            { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 160 }
        ];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPttCsSinhTonComponent.prototype, "yeuCauTiepNhanId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('huyetApTemplate', { static: true })
], LichSuPttCsSinhTonComponent.prototype, "huyetApTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanNhietTemplate', { static: true })
], LichSuPttCsSinhTonComponent.prototype, "thanNhietTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhipTimTemplate', { static: true })
], LichSuPttCsSinhTonComponent.prototype, "nhipTimTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhipThoTemplate', { static: true })
], LichSuPttCsSinhTonComponent.prototype, "nhipThoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canNangTemplate', { static: true })
], LichSuPttCsSinhTonComponent.prototype, "canNangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chieuCaoTemplate', { static: true })
], LichSuPttCsSinhTonComponent.prototype, "chieuCaoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('BMITemplate', { static: true })
], LichSuPttCsSinhTonComponent.prototype, "BMITemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('glassgowTemplate', { static: true })
], LichSuPttCsSinhTonComponent.prototype, "glassgowTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sPO2Template', { static: true })
], LichSuPttCsSinhTonComponent.prototype, "sPO2Template", void 0);
LichSuPttCsSinhTonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ls-ptt-cs-sinh-ton',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ls-ptt-cs-sinh-ton.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ls-ptt-cs-sinh-ton.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component.scss")).default]
    })
], LichSuPttCsSinhTonComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LWtldC1sdWFuL2xpY2gtc3UtcHR0dC1rZXQtbHVhbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component.ts":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: LichSuPtttKetLuanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPtttKetLuanComponent", function() { return LichSuPtttKetLuanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");






let LichSuPtttKetLuanComponent = class LichSuPtttKetLuanComponent {
    constructor(dialog, apiService, notificationService) {
        this.dialog = dialog;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.validationErrors = null;
        this.thongTinLichSuKetLuanPTTT = null;
    }
    ngOnInit() {
        this.thongTinKetLuan(this.yeuCauDichVuKyThuatId);
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    thongTinKetLuan(id) {
        this.showPopupLoadingData();
        this.apiService.get("PhauThuatThuThuat/LichSuKetLuanPTTT?yeuCauDichVuKyThuatId=" + id).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.thongTinLichSuKetLuanPTTT = resultData;
                console.log("resultData PTTT", this.thongTinLichSuKetLuanPTTT);
                this.closePopupLoadingData();
            }
            else {
                this.closePopupLoadingData();
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
                this.closePopupLoadingData();
            }
            this.closePopupLoadingData();
        });
    }
};
LichSuPtttKetLuanComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttKetLuanComponent.prototype, "yeuCauDichVuKyThuatId", void 0);
LichSuPtttKetLuanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-pttt-ket-luan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-pttt-ket-luan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-pttt-ket-luan.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component.scss")).default]
    })
], LichSuPtttKetLuanComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component.scss ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("kendo-tabstrip.horizontal-tab-strip-pttt-tuong-trinh {\n  z-index: 0;\n}\n\nkendo-list li.k-item.ng-star-inserted {\n  padding: 0;\n}\n\n#show-khong-thuc-hien {\n  display: flex;\n  align-items: center;\n  padding: 0 !important;\n}\n\n#show-khong-thuc-hien .decor-dv-ko-thuc-hien {\n  text-decoration: underline;\n  color: #005dab;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3BoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC1jaGktdGlldC9saWNoLXN1LXB0dHQtdHVvbmctdHJpbmgtcHR0dC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHBoYXUtdGh1YXQtdGh1LXRodWF0XFxsaWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0XFxsaWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0LWNoaS10aWV0XFxsaWNoLXN1LXB0dHQtdHVvbmctdHJpbmgtcHR0dFxcbGljaC1zdS1wdHR0LXR1b25nLXRyaW5oLXB0dHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LXR1b25nLXRyaW5oLXB0dHQvbGljaC1zdS1wdHR0LXR1b25nLXRyaW5oLXB0dHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3BoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQvbGljaC1zdS1waGF1LXRodWF0LXRodS10aHVhdC1jaGktdGlldC9saWNoLXN1LXB0dHQtdHVvbmctdHJpbmgtcHR0dC9saWNoLXN1LXB0dHQtdHVvbmctdHJpbmgtcHR0dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImtlbmRvLXRhYnN0cmlwLmhvcml6b250YWwtdGFiLXN0cmlwLXB0dHQtdHVvbmctdHJpbmgge1xuICB6LWluZGV4OiAwO1xufVxuXG5rZW5kby1saXN0IGxpLmstaXRlbS5uZy1zdGFyLWluc2VydGVkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuI3Nob3cta2hvbmctdGh1Yy1oaWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4jc2hvdy1raG9uZy10aHVjLWhpZW4gLmRlY29yLWR2LWtvLXRodWMtaGllbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsImtlbmRvLXRhYnN0cmlwLmhvcml6b250YWwtdGFiLXN0cmlwLXB0dHQtdHVvbmctdHJpbmgge1xuICB6LWluZGV4OiAwO1xufVxuXG5rZW5kby1saXN0IGxpLmstaXRlbS5uZy1zdGFyLWluc2VydGVkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuI3Nob3cta2hvbmctdGh1Yy1oaWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4jc2hvdy1raG9uZy10aHVjLWhpZW4gLmRlY29yLWR2LWtvLXRodWMtaGllbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component.ts":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component.ts ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: LichSuPtttTuongTrinhPtttComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPtttTuongTrinhPtttComponent", function() { return LichSuPtttTuongTrinhPtttComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
/* harmony import */ var _phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../phau-thuat-thu-thuat.model */ "./src/app/modules/main/phau-thuat-thu-thuat/phau-thuat-thu-thuat.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _lich_su_dv_khong_thuc_hien_lich_su_dv_khong_thuc_hien_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.ts");









let LichSuPtttTuongTrinhPtttComponent = class LichSuPtttTuongTrinhPtttComponent {
    constructor(dialog, apiService, notificationService) {
        this.dialog = dialog;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.coDichVuHuy = null;
        this.dataThongTinLichSuEkipPTTT = null;
        this.queryInfo = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_2__["LookupQueryInfo"]();
        this.dichVu = new _phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_3__["LichSuDichVuPTTTCombobox"]();
        //BVHD-3860
        this.laKhongThucHien = false;
    }
    ngOnInit() {
        this.coDichVuHuy = this.laKhongThucHien;
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    getThongTinLichSuEkipPTTT(id) {
        this.apiService.get("PhauThuatThuThuat/ThongTinLichSuEkipPTTT?yeuCauDichVuKyThuatId=" + id).subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dataThongTinLichSuEkipPTTT = resultData;
                //console.log("data Ekip: ", this.dataThongTinLichSuEkipPTTT);
                this.apiService.get("PhauThuatThuThuat/KiemTraCoDichVuHuy?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(result => {
                    if (result != undefined && result != null) {
                        this.coDichVuHuy = result;
                    }
                });
            }
            else {
                this.dataThongTinLichSuEkipPTTT = null;
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
                this.closePopupLoadingData();
            }
            this.closePopupLoadingData();
        });
    }
    onTabSelect(event) {
    }
    chonDichVu(event) {
        if (event != undefined && event != null) {
            this.getThongTinLichSuEkipPTTT(event);
        }
    }
    hienThiDichVuKhongThucHien() {
        var self = this;
        self.dialog
            .open(_lich_su_dv_khong_thuc_hien_lich_su_dv_khong_thuc_hien_component__WEBPACK_IMPORTED_MODULE_8__["LichSuDvKhongThucHienComponent"], {
            disableClose: true,
            width: "1200px",
            data: { YeuCauTiepNhanId: this.yeuCauTiepNhanId, LanThucHien: this.lanThucHien },
        });
    }
};
LichSuPtttTuongTrinhPtttComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttTuongTrinhPtttComponent.prototype, "yeuCauTiepNhanId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttTuongTrinhPtttComponent.prototype, "lanThucHien", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttTuongTrinhPtttComponent.prototype, "laKhongThucHien", void 0);
LichSuPtttTuongTrinhPtttComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-pttt-tuong-trinh-pttt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-pttt-tuong-trinh-pttt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-pttt-tuong-trinh-pttt.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component.scss")).default]
    })
], LichSuPtttTuongTrinhPtttComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtY2hpLXRpZXQvbGljaC1zdS1wdHR0LXR1b25nLXRyaW5oL2xpY2gtc3UtcHR0dC10dW9uZy10cmluaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component.ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component.ts ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: LichSuPtttTuongTrinhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPtttTuongTrinhComponent", function() { return LichSuPtttTuongTrinhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");




let LichSuPtttTuongTrinhComponent = class LichSuPtttTuongTrinhComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    xemHinhAnhBoPhanTonThuong(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_3__["ViewImagePdfComponent"], {
            disableClose: false,
            width: '1000px',
            height: '600px',
            data: { Type: "Image", Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""), Src: dataItem.LuocDo }
        });
    }
};
LichSuPtttTuongTrinhComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttTuongTrinhComponent.prototype, "yeuCauDichVuKyThuatId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LichSuPtttTuongTrinhComponent.prototype, "dataThongTinLichSuEkipPTTT", void 0);
LichSuPtttTuongTrinhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-pttt-tuong-trinh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-pttt-tuong-trinh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-pttt-tuong-trinh.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component.scss")).default]
    })
], LichSuPtttTuongTrinhComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.scss ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9waGF1LXRodWF0LXRodS10aHVhdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0L2xpY2gtc3UtcGhhdS10aHVhdC10aHUtdGh1YXQtbGlzdC9saWNoLXN1LXBoYXUtdGh1YXQtdGh1LXRodWF0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: LichSuPhauThuatThuThuatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPhauThuatThuThuatListComponent", function() { return LichSuPhauThuatThuThuatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../phau-thuat-thu-thuat.model */ "./src/app/modules/main/phau-thuat-thu-thuat/phau-thuat-thu-thuat.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");























let LichSuPhauThuatThuThuatListComponent = class LichSuPhauThuatThuThuatListComponent {
    constructor(dialog, router, apiService, authService, location, route, notificationService) {
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.location = location;
        this.route = route;
        this.notificationService = notificationService;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.gridColumns = [];
        this.sort = [{
                field: "ThoiDiemHoanThanh",
                dir: 'desc'
            }];
        this.phongKhamHienTai = {
            DisplayName: null,
            KeyId: Number(this.authService.getPhongLamViecId()),
        };
        this.baseRoute = "/lich-su-phau-thuat-thu-thuat";
        this.addtionStringDefault = null;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].LichSuPhauThuatThuThuat;
    }
    ngOnInit() {
        this.lichSuPTTT = new _phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_13__["LichSuPTTT"]();
        let dateNow = new Date();
        this.lichSuPTTT.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.lichSuPTTT.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null) {
            this.lichSuPTTT.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.lichSuPTTT.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.lichSuPTTT.FromDate = null;
        }
        if (this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
            this.lichSuPTTT.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.lichSuPTTT.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.lichSuPTTT.ToDate = null;
        }
        var queryString = JSON.stringify(this.lichSuPTTT);
        this.addtionStringDefault = queryString;
        this.backWithSearch();
        this.gridColumns = [
            { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.chiTietTemplate },
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "HoTen", Title: "Tên Người Bệnh", Width: 180, Sortable: true },
            { Field: "NamSinh", Title: "Năm Sinh", Width: 100, Sortable: true },
            { Field: "DoiTuong", Title: "Đối Tượng", Width: 140, Sortable: true },
            // { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 100, Sortable: true },
            // { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 180, Sortable: true },
            { Field: "ThoiDiemHoanThanh", Title: "Thời điểm hoàn thành", Width: 150, Sortable: true, Template: this.thoiDiemHoanThanhTemplate },
            { Field: "ThoiDiemThucHien", Title: "Thời điểm thực hiện", Width: 150, Sortable: true, Template: this.thoiDiemThucHienTemplate },
            { Field: "ThoiDiemTiepNhan", Title: "Tiếp Nhận Lúc", Width: 190, Sortable: true, Template: this.thoiDiemTiepNhanTemplate },
            // { Field: "TrieuChungTiepNhan", Title: "Lý Do Khám Bệnh", Width: 145, Sortable: true },
            { Field: "TrangThaiPTTTSearch", Title: "Trạng Thái", Width: 140, Sortable: true, Template: this.trangThaiTemplate },
            { Field: "SoDichVuKhongTuongTrinh", Title: "SL DV Không thực hiện", Width: 100, Sortable: true },
            { Field: "NoiChuyenGiao", Title: "Nơi chuyển giao", Width: 150, Sortable: true },
            { Field: "Action", Title: "", Width: 150, Template: this.TuongTrinhLaiTemplate }
        ];
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].getItem("additionalSearchStringLichSuPTTT");
                if (additionalSearchString != null) {
                    this.lichSuPTTT = JSON.parse(additionalSearchString);
                    if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != undefined && this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != "") {
                        this.lichSuPTTT.ThoiDiemTiepNhanTuFormat = new Date(this.lichSuPTTT.ThoiDiemTiepNhanTuFormat);
                    }
                    else {
                        this.lichSuPTTT.ThoiDiemTiepNhanTuFormat = null;
                    }
                    if (this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != undefined && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != "") {
                        this.lichSuPTTT.ThoiDiemTiepNhanDenFormat = new Date(this.lichSuPTTT.ThoiDiemTiepNhanDenFormat);
                    }
                    else {
                        this.lichSuPTTT.ThoiDiemTiepNhanDenFormat = null;
                    }
                    this.addtionStringDefault = additionalSearchString;
                    this.gridChild.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].removeItem("additionalSearchStringLichSuPTTT");
        }
    }
    onKey(event) {
        if (event.key === "Enter") {
            this.TimKiemNangCao();
        }
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            // self.gridChild._additionalSearchString = null;
            self.TimKiemNangCao();
        }
    }
    clearSearch() {
        this.searchString = "";
        this.gridChild.search();
    }
    thoiDiemTNChange() {
        this.TimKiemNangCao();
    }
    Timkiem() {
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        if (this.searchString != null) {
            QueryString = this.searchString;
        }
        this.gridChild.searchString = QueryString;
        this.gridChild.search();
    }
    TimKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null) {
            this.lichSuPTTT.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.lichSuPTTT.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.lichSuPTTT.FromDate = null;
        }
        if (this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
            this.lichSuPTTT.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.lichSuPTTT.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.lichSuPTTT.ToDate = null;
        }
        var queryString = JSON.stringify(this.lichSuPTTT);
        //this.gridChild.searchString = null;
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_20__["LocalStorageHelper"].setItem("additionalSearchStringLichSuPTTT", queryString);
        this.gridChild.search();
    }
    tuongtinhLai(dataItem) {
        let tuongTrinhLai = new _phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_13__["TuongTrinhLai"]();
        tuongTrinhLai.PhongBenhVienId = dataItem.PhongBenhVienId;
        tuongTrinhLai.TuongTrinhLaiTheoYeuCauDichVuKyThuatId = dataItem.TuongTrinhLaiYeuCauKyThuatIds;
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].MessConfirm, ["tường trình lại"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.apiService.post("PhauThuatThuThuat/TuongTrinhLai", tuongTrinhLai).subscribe(res => {
                    this.gridChild.search();
                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Tường trình lại"]));
                }, (err) => {
                    this.notificationService.showError(err.Message);
                });
            }
        });
    }
    view(id, laKhongThucHien = false) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].View)) {
            this.router.navigate(["/lich-su-phau-thuat-thu-thuat/chi-tiet/" + id + "/" + laKhongThucHien]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("PhauThuatThuThuat/ExportLichSuPhauThuatThuThuat", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "LichSuPhauThuatThuThuat" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.dialog.closeAll();
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
LichSuPhauThuatThuThuatListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
], LichSuPhauThuatThuThuatListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemTiepNhanTemplate', { static: true })
], LichSuPhauThuatThuThuatListComponent.prototype, "thoiDiemTiepNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemThucHienTemplate', { static: true })
], LichSuPhauThuatThuThuatListComponent.prototype, "thoiDiemThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TuongTrinhLaiTemplate', { static: true })
], LichSuPhauThuatThuThuatListComponent.prototype, "TuongTrinhLaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], LichSuPhauThuatThuThuatListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chiTietTemplate', { static: true })
], LichSuPhauThuatThuThuatListComponent.prototype, "chiTietTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemHoanThanhTemplate', { static: true })
], LichSuPhauThuatThuThuatListComponent.prototype, "thoiDiemHoanThanhTemplate", void 0);
LichSuPhauThuatThuThuatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lich-su-phau-thuat-thu-thuat-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-phau-thuat-thu-thuat-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-list.component.scss */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.scss")).default]
    })
], LichSuPhauThuatThuThuatListComponent);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-routing.module.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-routing.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: LichSuPhauThuatThuThuatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPhauThuatThuThuatRoutingModule", function() { return LichSuPhauThuatThuThuatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_list_lich_su_phau_thuat_thu_thuat_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_phau_thuat_thu_thuat_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.ts");








const routes = [
    {
        path: '',
        component: _lich_su_phau_thuat_thu_thuat_list_lich_su_phau_thuat_thu_thuat_list_component__WEBPACK_IMPORTED_MODULE_6__["LichSuPhauThuatThuThuatListComponent"],
        data: {
            title: "Lịch Sử Phẫu Thuật Thủ Thuật",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuPhauThuatThuThuat,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet/:id/:laKhongThucHien',
        component: _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_phau_thuat_thu_thuat_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__["LichSuPhauThuatThuThuatChiTietComponent"],
        data: {
            title: "Lịch Sử Phẫu Thuật Thủ Thuật Chi Tiết",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LichSuPhauThuatThuThuat,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let LichSuPhauThuatThuThuatRoutingModule = class LichSuPhauThuatThuThuatRoutingModule {
};
LichSuPhauThuatThuThuatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LichSuPhauThuatThuThuatRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LichSuPhauThuatThuThuatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPhauThuatThuThuatModule", function() { return LichSuPhauThuatThuThuatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-routing.module */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-routing.module.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat.service */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
/* harmony import */ var ngx_image_drawing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-image-drawing */ "./node_modules/ngx-image-drawing/fesm2015/ngx-image-drawing.js");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_list_lich_su_phau_thuat_thu_thuat_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_phau_thuat_thu_thuat_chi_tiet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_ekip_thuc_hien_lich_su_pttt_ekip_thuc_hien_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_tuong_trinh_pttt_lich_su_pttt_tuong_trinh_pttt_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_ghi_nhan_vt_thuoc_lich_su_pttt_ghi_nhan_vt_thuoc_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_ket_luan_lich_su_pttt_ket_luan_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_hoi_tinh_lich_su_pttt_hoi_tinh_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_ekip_thuc_hien_lich_su_pttt_nth_lich_su_pttt_nth_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_hoi_tinh_ls_ptt_cs_sinh_ton_ls_ptt_cs_sinh_ton_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_tuong_trinh_lich_su_pttt_tuong_trinh_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_cls_lich_su_pttt_cls_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_dv_khong_thuc_hien_lich_su_dv_khong_thuc_hien_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component.ts");
/* harmony import */ var _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_hinh_anh_cls_popup_lich_su_hinh_anh_cls_popup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component */ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component.ts");
/* harmony import */ var _xet_nghiem_lay_mau_xet_nghiem_lay_mau_xet_nghiem_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.module */ "./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.module.ts");
/* harmony import */ var _can_lam_sang_lich_su_can_lam_sang_lich_su_can_lam_sang_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.module */ "./src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.module.ts");



































let LichSuPhauThuatThuThuatModule = class LichSuPhauThuatThuThuatModule {
};
LichSuPhauThuatThuThuatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lich_su_phau_thuat_thu_thuat_list_lich_su_phau_thuat_thu_thuat_list_component__WEBPACK_IMPORTED_MODULE_19__["LichSuPhauThuatThuThuatListComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_phau_thuat_thu_thuat_chi_tiet_component__WEBPACK_IMPORTED_MODULE_20__["LichSuPhauThuatThuThuatChiTietComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_ekip_thuc_hien_lich_su_pttt_ekip_thuc_hien_component__WEBPACK_IMPORTED_MODULE_21__["LichSuPtttEkipThucHienComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_ekip_thuc_hien_lich_su_pttt_nth_lich_su_pttt_nth_component__WEBPACK_IMPORTED_MODULE_26__["LichSuPtttNthComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_tuong_trinh_pttt_lich_su_pttt_tuong_trinh_pttt_component__WEBPACK_IMPORTED_MODULE_22__["LichSuPtttTuongTrinhPtttComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_ghi_nhan_vt_thuoc_lich_su_pttt_ghi_nhan_vt_thuoc_component__WEBPACK_IMPORTED_MODULE_23__["LichSuPtttGhiNhanVtThuocComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_ket_luan_lich_su_pttt_ket_luan_component__WEBPACK_IMPORTED_MODULE_24__["LichSuPtttKetLuanComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_hoi_tinh_lich_su_pttt_hoi_tinh_component__WEBPACK_IMPORTED_MODULE_25__["LichSuPtttHoiTinhComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_hoi_tinh_ls_ptt_cs_sinh_ton_ls_ptt_cs_sinh_ton_component__WEBPACK_IMPORTED_MODULE_27__["LichSuPttCsSinhTonComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_tuong_trinh_lich_su_pttt_tuong_trinh_component__WEBPACK_IMPORTED_MODULE_28__["LichSuPtttTuongTrinhComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_pttt_cls_lich_su_pttt_cls_component__WEBPACK_IMPORTED_MODULE_29__["LichSuPtttClsComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_dv_khong_thuc_hien_lich_su_dv_khong_thuc_hien_component__WEBPACK_IMPORTED_MODULE_30__["LichSuDvKhongThucHienComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_hinh_anh_cls_popup_lich_su_hinh_anh_cls_popup_component__WEBPACK_IMPORTED_MODULE_31__["LichSuHinhAnhClsPopupComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _lich_su_phau_thuat_thu_thuat_routing_module__WEBPACK_IMPORTED_MODULE_3__["LichSuPhauThuatThuThuatRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_17__["ScrollToModule"].forRoot(),
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"],
            _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_7__["IntlModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            ngx_image_drawing__WEBPACK_IMPORTED_MODULE_18__["ImageDrawingModule"],
            _xet_nghiem_lay_mau_xet_nghiem_lay_mau_xet_nghiem_module__WEBPACK_IMPORTED_MODULE_32__["LayMauXetNghiemModule"],
            _can_lam_sang_lich_su_can_lam_sang_lich_su_can_lam_sang_module__WEBPACK_IMPORTED_MODULE_33__["LichSuCanLamSangModule"]
        ],
        entryComponents: [
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_dv_khong_thuc_hien_lich_su_dv_khong_thuc_hien_component__WEBPACK_IMPORTED_MODULE_30__["LichSuDvKhongThucHienComponent"],
            _lich_su_phau_thuat_thu_thuat_chi_tiet_lich_su_hinh_anh_cls_popup_lich_su_hinh_anh_cls_popup_component__WEBPACK_IMPORTED_MODULE_31__["LichSuHinhAnhClsPopupComponent"]
        ],
        providers: [
            _lich_su_phau_thuat_thu_thuat_service__WEBPACK_IMPORTED_MODULE_4__["LichSuPhauThuatThuThuatService"],
            {
                provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"], useClass: _lich_su_phau_thuat_thu_thuat_service__WEBPACK_IMPORTED_MODULE_4__["LichSuPhauThuatThuThuatService"]
            }
        ],
    })
], LichSuPhauThuatThuThuatModule);



/***/ }),

/***/ "./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat.service.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat.service.ts ***!
  \************************************************************************************************************************/
/*! exports provided: LichSuPhauThuatThuThuatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuPhauThuatThuThuatService", function() { return LichSuPhauThuatThuThuatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let LichSuPhauThuatThuThuatService = class LichSuPhauThuatThuThuatService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'PhauThuatThuThuatController';
    }
};
LichSuPhauThuatThuThuatService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
LichSuPhauThuatThuThuatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LichSuPhauThuatThuThuatService);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model.ts ***!
  \****************************************************************************************/
/*! exports provided: LayMauXetNghiemTimKiem, LayMauXetNghiemTimKiemTrangThai, LayMauXetNghiemTimKiemDateRange, ThongTinYeuCauTiepNhanLayMau, XacNhanLayMauXetNghiem, LayMauXetNghiemBarcodeQueryInfo, GuiMauXetNghiem, LayMauXetNghiemInBarcode, KiemTraBarcodeLayMauXetNghiem, InPhieuKetQuaLayMau, CapBarcodeTheoDichVu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemTimKiem", function() { return LayMauXetNghiemTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemTimKiemTrangThai", function() { return LayMauXetNghiemTimKiemTrangThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemTimKiemDateRange", function() { return LayMauXetNghiemTimKiemDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinYeuCauTiepNhanLayMau", function() { return ThongTinYeuCauTiepNhanLayMau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanLayMauXetNghiem", function() { return XacNhanLayMauXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemBarcodeQueryInfo", function() { return LayMauXetNghiemBarcodeQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiMauXetNghiem", function() { return GuiMauXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemInBarcode", function() { return LayMauXetNghiemInBarcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KiemTraBarcodeLayMauXetNghiem", function() { return KiemTraBarcodeLayMauXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuKetQuaLayMau", function() { return InPhieuKetQuaLayMau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapBarcodeTheoDichVu", function() { return CapBarcodeTheoDichVu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LayMauXetNghiemTimKiem {
    constructor(SearchString = null, TrangThai = new LayMauXetNghiemTimKiemTrangThai(), TuNgayDenNgay = new LayMauXetNghiemTimKiemDateRange(), IsGridChuaCapCode = false) {
        this.SearchString = SearchString;
        this.TrangThai = TrangThai;
        this.TuNgayDenNgay = TuNgayDenNgay;
        this.IsGridChuaCapCode = IsGridChuaCapCode;
    }
}
class LayMauXetNghiemTimKiemTrangThai {
    constructor(ChoLayMau = true, ChoGuiMau = false, ChoKetQua = false, ChoDuyetKetQua = false, DaCoKetQUa = false, DaLayMau = false) {
        this.ChoLayMau = ChoLayMau;
        this.ChoGuiMau = ChoGuiMau;
        this.ChoKetQua = ChoKetQua;
        this.ChoDuyetKetQua = ChoDuyetKetQua;
        this.DaCoKetQUa = DaCoKetQUa;
        this.DaLayMau = DaLayMau;
    }
}
class LayMauXetNghiemTimKiemDateRange {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class ThongTinYeuCauTiepNhanLayMau {
    constructor(YeuCauTiepNhanId = null, BenhNhanId = null, MaBenhNhan = null, MaTiepNhan = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, Tuoi = null, TenGioiTinh = null, SoDienThoai = null, Tuyen = null, SoTheBHYT = null, MucHuong = null, DanToc = null, DiaChi = null, NgheNghiep = null, IsTraKetQua = false, TraKetQuaChoBenhNhan = null, IsAutoBarcode = false, IsCoDuKetQua = false, IsCoPhienChiTietCoKetQua = false, IsNhanVienKhoaXetNghiem = false, 
    //BVHD-3364
    TenCongTy = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BenhNhanId = BenhNhanId;
        this.MaBenhNhan = MaBenhNhan;
        this.MaTiepNhan = MaTiepNhan;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.Tuoi = Tuoi;
        this.TenGioiTinh = TenGioiTinh;
        this.SoDienThoai = SoDienThoai;
        this.Tuyen = Tuyen;
        this.SoTheBHYT = SoTheBHYT;
        this.MucHuong = MucHuong;
        this.DanToc = DanToc;
        this.DiaChi = DiaChi;
        this.NgheNghiep = NgheNghiep;
        this.IsTraKetQua = IsTraKetQua;
        this.TraKetQuaChoBenhNhan = TraKetQuaChoBenhNhan;
        this.IsAutoBarcode = IsAutoBarcode;
        this.IsCoDuKetQua = IsCoDuKetQua;
        this.IsCoPhienChiTietCoKetQua = IsCoPhienChiTietCoKetQua;
        this.IsNhanVienKhoaXetNghiem = IsNhanVienKhoaXetNghiem;
        this.TenCongTy = TenCongTy;
    }
}
class XacNhanLayMauXetNghiem {
    constructor(YeuCauTiepNhanId = null, BenhNhanId = null, PhienXetNghiemId = null, NhomDichVuBenhVienId = null, BarcodeNumber = null, BarcodeId = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BenhNhanId = BenhNhanId;
        this.PhienXetNghiemId = PhienXetNghiemId;
        this.NhomDichVuBenhVienId = NhomDichVuBenhVienId;
        this.BarcodeNumber = BarcodeNumber;
        this.BarcodeId = BarcodeId;
    }
}
class LayMauXetNghiemBarcodeQueryInfo {
    constructor(YeuCauTiepNhanId = null, BarcodeNumbers = new Array()) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BarcodeNumbers = BarcodeNumbers;
    }
}
class GuiMauXetNghiem {
    constructor(NhanVienGuiMauId = null, TenNhanVienGuiMau = null, ThoiDiemGuiMau = null, PhongNhanMauId = null, GhiChu = null, NhomMauGuis = new Array()) {
        this.NhanVienGuiMauId = NhanVienGuiMauId;
        this.TenNhanVienGuiMau = TenNhanVienGuiMau;
        this.ThoiDiemGuiMau = ThoiDiemGuiMau;
        this.PhongNhanMauId = PhongNhanMauId;
        this.GhiChu = GhiChu;
        this.NhomMauGuis = NhomMauGuis;
    }
}
class LayMauXetNghiemInBarcode {
    constructor(YeuCauTiepNhanId = null, BarcodeId = null, BarcodeNumber = null, SoLuong = null, HostingName = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BarcodeId = BarcodeId;
        this.BarcodeNumber = BarcodeNumber;
        this.SoLuong = SoLuong;
        this.HostingName = HostingName;
    }
}
class KiemTraBarcodeLayMauXetNghiem {
    constructor(YeuCauTiepNhanId = null, BarcodeNumber = null, IsInBarcode = false, SoLuong = null, IsCapMoi = false, BarcodeString = null, IsCapBarcodeChoDichVu = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BarcodeNumber = BarcodeNumber;
        this.IsInBarcode = IsInBarcode;
        this.SoLuong = SoLuong;
        this.IsCapMoi = IsCapMoi;
        this.BarcodeString = BarcodeString;
        this.IsCapBarcodeChoDichVu = IsCapBarcodeChoDichVu;
    }
}
class InPhieuKetQuaLayMau {
    constructor(HostingName = null, Header = null, YeuCauTiepNhanId = null, PhienXetNghiemId = null, LoaiIn = null, ListIn = []) {
        this.HostingName = HostingName;
        this.Header = Header;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.PhienXetNghiemId = PhienXetNghiemId;
        this.LoaiIn = LoaiIn;
        this.ListIn = ListIn;
    }
}
class CapBarcodeTheoDichVu {
    constructor(YeuCauTiepNhanId = null, BenhNhanId = null, BarcodeNumber = null, BarcodeId = null, SoLuong = null, YeuCauDichVuKyThuatIds = new Array()) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BenhNhanId = BenhNhanId;
        this.BarcodeNumber = BarcodeNumber;
        this.BarcodeId = BarcodeId;
        this.SoLuong = SoLuong;
        this.YeuCauDichVuKyThuatIds = YeuCauDichVuKyThuatIds;
    }
}


/***/ })

}]);
//# sourceMappingURL=phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-lich-su-phau-thuat-thu-thuat-module-es2015.js.map