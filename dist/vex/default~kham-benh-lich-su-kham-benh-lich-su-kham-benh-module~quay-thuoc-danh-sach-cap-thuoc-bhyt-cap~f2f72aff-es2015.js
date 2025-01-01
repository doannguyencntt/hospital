(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~kham-benh-lich-su-kham-benh-lich-su-kham-benh-module~quay-thuoc-danh-sach-cap-thuoc-bhyt-cap~f2f72aff"],{

/***/ "./node_modules/@iconify/icons-ic/delete.js":
/*!**************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/delete.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/info.js":
/*!************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/info.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"font: 500 18px/26px var(--font)\">\n        Miễn giảm dịch vụ: <strong style=\"color: green;\">{{tenDichVu}}</strong>\n    </div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div width=\"100%\" fxLayout=\"row\">\n        <table class=\"table table-border\" width=\"100%\">\n            <tr>\n                <td colspan=\"2\" align=\"right\">Số tiền trước miễn giảm :</td>\n                <td><strong style=\"color: blue;\">{{tongTienTungDichVu | number:'0.2-2':'vi-VN'}}</strong></td>\n            </tr>\n            <ng-container *ngFor=\"let item of danhSachChiPhi.DanhSachMienGiamVos; let i = index\">\n                <tr *ngIf=\"item.LoaiMienGiam === 1\">\n                    <td colspan=\"3\" class=\"no-border-bottom pb-0\">Đối tượng: <strong>{{item.DoiTuongUuDai}}</strong>\n                    </td>\n                </tr>\n                <tr *ngIf=\"item.LoaiMienGiam === 1\">\n                    <td width=\"140px\" style=\"width: 31%;\">\n                        <app-radio class=\"no-format-css p-0\" [disabled]=\"true\" [model]=\"item.LoaiChietKhau\"\n                            [items]=\"[{Value:2,Text:'Tiền'},{Value:1,Text:'%'}]\"></app-radio>\n                    </td>\n                    <td>\n                        <app-textboxnumeric label=\" \" class=\"no-label p-0\" max=\"100\" min=\"0\" [disabled]=\"true\"\n                            [model]=\"item.TiLe\">\n                        </app-textboxnumeric>\n                    </td>\n                    <td>= <strong>{{ item.TongTienMiemGiam | number:'0.2-2':'vi-VN'}}</strong></td>\n                </tr>\n            </ng-container>\n            <ng-container *ngFor=\"let item of danhSachChiPhi.DanhSachMienGiamVos; let i = index\">\n                <tr *ngIf=\"item.LoaiMienGiam === 2\">\n                    <td colspan=\"3\" class=\"no-border-bottom pb-0\">Voucher: <strong>{{item.MaTheVoucher}}</strong></td>\n                </tr>\n                <tr *ngIf=\"item.LoaiMienGiam === 2\">\n                    <td class=\"no-border-bottom pb-0\" style=\"width: 31%;\">\n                        <app-radio class=\"no-format-css p-0\" [disabled]=\"true\" [model]=\"item.LoaiChietKhau\"\n                            [items]=\"[{Value:2,Text:'Tiền'},{Value:1,Text:'%'}]\"></app-radio>\n                    </td>\n                    <td *ngIf=\"item.LoaiMienGiam === 2 && item.LoaiChietKhau === 1\" class=\"no-border-bottom pb-0\">\n                        <app-textboxnumeric label=\" \"  class=\"no-label p-0\" max=\"100\"\n                            min=\"0\" [disabled]=\"true\" [model]=\"item.TiLe\">\n                        </app-textboxnumeric>\n                    </td>\n                    <td *ngIf=\"item.LoaiMienGiam === 2 && item.LoaiChietKhau === 2\" class=\"no-border-bottom pb-0\">\n                        <app-textboxnumeric label=\" \" class=\"no-label p-0\" max=\"999999\" min=\"0\" [disabled]=\"true\"\n                            [model]=\"item.SoTien\">\n                        </app-textboxnumeric>\n                    </td>\n                    <td class=\"no-border-bottom pb-0\">= <strong>{{ item.TongTienMiemGiam | number:'0.2-2':'vi-VN'}}</strong>\n                    </td>\n                </tr>\n            </ng-container>\n\n            <tr>\n                <td colspan=\"3\" class=\"no-border-bottom pb-0\">MG thêm:</td>\n            </tr>\n            <ng-container *ngFor=\"let item of danhSachChiPhi.DanhSachMienGiamVos; let i = index\">\n                <tr *ngIf=\"item.LoaiMienGiam === 3  && item.LoaiChietKhau === 1\">\n                    <td class=\"no-border-bottom\">\n                        <app-checkbox id=\"phan-tram\" value=\"1\" fxFlex=\"40%\" label=\"%\" [(model)]=\"disableInputPhanTram\"\n                            (modelChange)=\"apDungPhanTram($event , item)\">\n                        </app-checkbox>\n                    </td>\n                    <td class=\"no-border-bottom\" style=\"width: 1200px;\">\n                        <app-textboxnumeric style=\"width: 1200px;\" max=\"100\" class=\"no-label p-0\" label=\" \" min=\"0\"\n                            [(model)]=\"item.TiLe\" [disabled]=\"!disableInputPhanTram\"\n                            (modelChange)=\"changePhanTram($event, item)\" \n                            [validationerror]=\"'TiLe' | validationerror: validationErrors\">\n                        </app-textboxnumeric>\n                    </td>\n                    <td class=\"no-border-bottom\">= <strong>{{ item.TongTienMiemGiam | number:'0.2-2':'vi-VN'}}</strong></td>\n                </tr>\n                <tr *ngIf=\"item.LoaiMienGiam === 3  && item.LoaiChietKhau === 2\">\n                    <td class=\"no-border-bottom pb-0\">\n                        <app-checkbox id=\"so-tien\" value=\"1\" fxFlex=\"40%\" label=\"Tiền\" [(model)]=\"disableInputSoTien\"\n                            (modelChange)=\"apDungSoTien($event , item)\">\n                        </app-checkbox>\n                    </td>\n                    <td class=\"no-border-bottom pb-0\" style=\"width: 1200px;\">\n                        <app-textboxnumeric label=\"\" style=\"width: 1200px;\" class=\"no-label p-0\" [(model)]=\"item.SoTien\"\n                            min=\"0\" max=\"99999999\" [disabled]=\"!disableInputSoTien\"\n                            (modelChange)=\"changeSoTien($event, item)\"\n                            [validationerror]=\"'SoTien' | validationerror: validationErrors\">\n                        </app-textboxnumeric>\n                    </td>\n                    <td class=\"no-border-bottom pb-0\" style=\"width: 500px;\">=\n                        <strong>{{ item.TongTienMiemGiam | number:'0.2-2':'vi-VN'}}</strong></td>\n                </tr>\n            </ng-container>\n            <tr>\n                <td colspan=\"2\" align=\"right\">Tổng cộng MG :</td>\n                <td><strong style=\"color: red;\">{{tongTatCaSoTienMg | number:'0.2-2':'vi-VN'}}</strong></td>\n            </tr>\n            <tr>\n                <td colspan=\"3\">\n                    <app-textarea label=\"Ghi chú\" maxlength=\"2000\" minHeight=\"60\"\n                        [(model)]=\"data.dataItem.GhiChuMienGiamThem\">\n                    </app-textarea>\n                </td>\n            </tr>\n        </table>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button mat-button mat-dialog-close (click)=\"HuyApDungMGT()\">Hủy</button>\n    <div *ngIf=\"tongTienTungDichVu > 0\">\n        <button mat-raised-button mat-button color=\"primary\"\n            *ngIf=\"disableInputPhanTram || disableInputSoTien || kiemTraThayDoiSoTienTiLe\" (click)=\"ApDungMGT()\"\n            cdkFocusInitial>Áp dụng</button>\n    </div>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"font: 500 18px/26px var(--font)\">\n        MIỄN GIẢM TẤT CẢ DỊCH VỤ\n    </div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div width=\"100%\" fxLayout=\"row\">\n        <table class=\"table table-border\" width=\"100%\">\n            <tr>\n                <td width=\"100%\">\n                    <app-checkbox id=\"phan-tram\" [(model)]=\"apDungMiemGiamThem.ChietKhauTheoTiLe\" value=\"1\" fxFlex=\"30%\"\n                        label=\"%\" value=\"true\" (modelChange)=\"apDungPhanTram($event)\">\n                    </app-checkbox>\n                    <app-textboxnumeric fxFlex=\"60%\" label=\"\" class=\"no-label\" max=\"100\" min=\"0\"\n                        [(model)]=\"apDungMiemGiamThem.TiLe\" [required]=\"true\" [disabled]=\"disablePhanTram\"\n                        [validationerror]=\"'TiLe' | validationerror: validationErrors\">\n                    </app-textboxnumeric>\n                    <label class=\"red\" fxFlex=\"10%\">(*)</label>\n                </td>\n            </tr>\n            <tr>\n                <td width=\"100%\">\n                    <app-checkbox id=\"so-tien\" [(model)]=\"apDungMiemGiamThem.ChietKhauTheoSoTien\" value=\"1\" fxFlex=\"30%\"\n                         label=\"Tiền\" value=\"true\"\n                        (modelChange)=\"apDungSoTien($event)\">\n                    </app-checkbox>\n                    <app-textboxnumeric  fxFlex=\"60%\" class=\"no-label\"\n                          [disabled]=\"disableSoTien\"\n                          [(model)]=\"apDungMiemGiamThem.SoTien\" [required]=\"true\"\n                        [validationerror]=\"'SoTien' | validationerror: validationErrors\">\n                    </app-textboxnumeric>\n                    <label class=\"red\" fxFlex=\"10%\">(*)</label>\n                </td>\n            </tr>\n            <tr>\n                <td width=\"100%\">\n                    <app-textarea id=\"ghichu\" [(model)]=\"apDungMiemGiamThem.GhiChu\" label=\"Ghi chú\" maxlength=\"2000\"\n                        minHeight=\"60\">\n                    </app-textarea>\n                </td>\n            </tr>\n        </table>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button mat-button mat-dialog-close (click)=\"HuyApDungMGT()\">Hủy</button>\n    <button *ngIf=\"apDungMiemGiamThem.ChietKhauTheoTiLe || apDungMiemGiamThem.ChietKhauTheoSoTien\" mat-raised-button\n        mat-button color=\"primary\" (click)=\"ApDungMGT()\" cdkFocusInitial>Áp dụng</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <app-print-form textPrint=\"In Bảng Kê Thu Tiền Thuốc\" style=\"text-align: right;\"  type=\"PDF\" [event]=\"data\" typeSize=\"A5\" [bodyComponent]=\"this\" *ngIf=\"kiemtraPhieuInManhinh != true && InBangKe == true\"\n        (click)=\"InPhieu(1)\" copies=\"2\">\n    </app-print-form>\n    <app-print-form textPrint=\"In Phiếu Thu\" type=\"PDF\"  style=\"text-align: right;\" typeLayout=\"landscape\" [event]=\"data\" typeSize=\"A5\"\n        [bodyComponent]=\"this\" (click)=\"InPhieu(2)\" *ngIf=\"kiemtraPhieuInManhinh != true && InPhieuThu == true\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <app-print-form textPrint=\"In đơn thuốc\" style=\"text-align: right;\"  type=\"PDF\" [event]=\"data\" typeSize=\"A5\" [bodyComponent]=\"this\" *ngIf=\"kiemtraPhieuInManhinh != true && InBangKe == true\"\n        (click)=\"InPhieu(1)\" >\n    </app-print-form>\n    <app-print-form textPrint=\"In đơn thuốc\" type=\"PDF\"  style=\"text-align: right;\" typeLayout=\"landscape\" [event]=\"data\" typeSize=\"A5\"\n        [bodyComponent]=\"this\" (click)=\"InPhieu(2)\" *ngIf=\"kiemtraPhieuInManhinh != true && InPhieuThu == true\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n                    [\n                    {Title:'Nhà Thuốc',Path:''},\n                    {Title:'DS Đơn Thuốc',Path:'/nha-thuoc', Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <app-hot-key  style=\"position: absolute;right: 180px;top: 7px;\" [keys]=\"[\n            {Key:'Ctrl + Q',Description:'Quét mã vạch',End:true}\n            ]\"></app-hot-key>\n            <button type=\"button\" (click)=\"ToKhachVangLai(typeDanhSachThanhToan)\"\n                style=\"position: absolute;right: 21px;top: 7px;\" mat-raised-button mat-button>Khách Vãng Lai</button>\n               \n        </div>\n       \n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <!-- (onHaddlekiemTraDonThuocThanhToan)=\"getkiemTraDonThuocThanhToan($event)\"  -->\n                        <app-quay-thuoc-tim-benh-nhan (dataSearch)=\"getData($event)\" class=\"mb-2\"\n                             \n                            (onHaddleeXportExel)=\"KiemTraeXportExel($event)\"\n                            (onHaddleUuTienSearch)=\"getonHaddleUuTienSearch($event)\"\n                            [typeDanhSachThanhToan]=\"typeDanhSachThanhToan\"\n                            [dataQuayThuocSearch]=\"dataQuayThuocSearch\" \n                            [hoquerySearch]=\"hoquerySearch\"\n                            >\n                        </app-quay-thuoc-tim-benh-nhan>\n                        <!-- [typeDanhSachThanhToan]=\"typeDanhSachThanhToan\"  -->\n                        <app-quay-thuoc-list \n                        [(id)]=id \n                        [xacNhanIn]=\"xacNhanIn\" \n                        [queryStringSearchUuTien]=\"queryStringSearchUuTien\"\n                        (OnHandleDataQuayThuocSearchList)=\"getonHaddleDataSearch($event)\"\n                        >\n                        </app-quay-thuoc-list>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-grid *ngIf=\"dataSourcedanhsachThuocBHYT.data.length>0\" fxFlex=\"100%\" [gridColumns]=\"gridColumns\"\n        [gridDataSource]=\"dataSourcedanhsachThuocBHYT\" [autoHeight]=\"true\" [lazyLoadPage]=\"false\"\n        [useActionDefault]=\"false\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"false\"\n        [pageable]=\"false\" [headerTemplate]=\"headerTemplate\" useActionDefault=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\">\n        <ng-template #headerTemplate>\n            <div class=\"px-2 py-2\" style=\"background: burlywood;overflow: hidden;\">\n                <h4 style=\"font-weight: bold;float: left;line-height: 36px;\">THUỐC BHYT- VẬT TƯ</h4>\n                <button type=\"button\" (click)=\"KeThuoc()\" style=\"float: right;\" mat-raised-button>\n                    In kê thuốc</button>\n            </div>\n        </ng-template>\n    </app-grid>\n    <app-grid *ngIf=\"dataSourcedanhsachThuocKhongBHYT.data.length>0\" fxFlex=\"100%\" [gridColumns]=\"gridColumns\"\n        [gridDataSource]=\"dataSourcedanhsachThuocKhongBHYT\" [autoHeight]=\"true\" [lazyLoadPage]=\"false\"\n        [useActionDefault]=\"false\" [headerTemplate]=\"headerTemplate1\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n        [allowSortDefault]=\"false\" [pageable]=\"false\" useActionDefault=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\">\n        <ng-template #headerTemplate1>\n            <div class=\"px-2 py-2\" style=\"background: lightblue;\">\n                <h4 style=\"font-weight: bold;\">THUỐC KHÔNG BHYT-VẬT TƯ</h4>\n\n            </div>\n        </ng-template>\n    </app-grid>\n    <p *ngIf=\"dataSourcedanhsachThuocKhongBHYT.data.length == 0 && dataSourcedanhsachThuocBHYT.data.length == 0\"\n        class=\"m-0 p-0\"><strong>Không có dược phẩm nào chờ xuất</strong></p>\n    <ng-template #donGiaTemplate let-dataItem>\n        <span> {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #thanhTienTemplate let-dataItem>\n        <span> {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n</div>\n<br>\n<div *ngIf=\"dataSourcedanhsachThuocBHYT.data.length>0 || dataSourcedanhsachThuocKhongBHYT.data.length>0\">\n    <button type=\"button\" color=\"primary\" (click)=\"GuiData()\" class=\"mr-1 float-right\" mat-raised-button>\n        Xuất thuốc</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"100%\" class=\"mt-3\">\n        <span style=\"float: left;\" *ngIf=\"!(benhnhanThongTin.SoDuTaiKhoan > 0)\">\n            <strong style=\"font-size: 14px;\">Số tiền cần thu của bệnh nhân: </strong>\n            <strong style=\"color:red\">{{tongTien | number:'0.2-2':'vi-VN'}}</strong></span>\n        <span style=\"float: left;\" *ngIf=\"benhnhanThongTin.SoDuTaiKhoan > 0\">\n            <strong style=\"font-size: 14px;\">Số tiền cần thu của bệnh nhân: </strong>\n            <strong style=\"color:red\">{{tongTien |number:'0.2-2':'vi-VN'}}</strong>\n        </span>\n        <!-- <span style=\"float: right;\">Tài khoản\n            <strong style=\"color:green\">{{benhnhanThongTin.SoDuTaiKhoan |number:'0.2-2':'vi-VN'}}</strong>\n        </span> -->\n        <span style=\"float: right;\">\n            <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"nguoiBenhKhongMuaThuoc()\"\n                title=\"Phím tắt: Người bệnh không mua thuốc\">NB không mua thuốc</button>\n        </span>\n    </div>\n    <div fxFlex=\"100%\">\n        <kendo-splitter>           \n            <kendo-splitter-pane [collapsible]=\"true\" size=\"18%\" class=\"sticky-panelbar\" style=\"overflow-x: hidden;\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                    class=\"px-2 py-3\" style=\"overflow:hidden;\">\n                    <app-multiselect [style.display]=\"tongTien < 0 ? 'none' : 'block'\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                        label=\"Hình thức thanh toán\" [(model)]=\"setDefeautTienMat\"\n                        (valueChange)=\"ChangeHinhThucThanhToan($event)\" [data]=\"hinhThucThanhToan\"\n                        [validationerror]=\"'HinhThucThanhToan' | validationerror:validationThuThuocErrors\"\n                        required=\"true\">\n                    </app-multiselect>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedTienMat\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"so-tien\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                        label=\"Tiền mặt\" [step]=\"100\" [(model)]=\"thongtinDonThuoc.TienMat\"\n                        [(selectMoney)]=\"selectMoneyTienMat\" (modelChange)=\"modelChangeTienMat($event , 1)\" min=\"0\"\n                        [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'TienMat' | validationerror:validationThuThuocErrors\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedChuyenKhoan\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"chuyen-khoan\" fxFlex=\"100%\"\n                        fxFlex.sm=\"100%\" label=\"Chuyển khoản\" [step]=\"100\" [(model)]=\"thongtinDonThuoc.ChuyenKhoan\"\n                        [(selectMoney)]=\"selectMoneyTienChuyenKhoan\" (modelChange)=\"modelChangeChuyenKhoan($event , 2)\"\n                        [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'ChuyenKhoan' | validationerror:validationThuThuocErrors\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedPos\" [style.display]=\"tongTien < 0 ? 'none' : 'block'\"\n                        id=\"pos\" fxFlex=\"100%\" [(selectMoney)]=\"selectMoneyTienPos\"\n                        (modelChange)=\"modelChangePos($event , 3)\" fxFlex.sm=\"100%\" label=\"POS\" [step]=\"100\"\n                        [(model)]=\"thongtinDonThuoc.POS\" [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'POS' | validationerror:validationThuThuocErrors\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedSoTienCongNo\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"pos\" fxFlex=\"100%\"\n                        [(selectMoney)]=\"selectMoneySoTienCongNo\" (modelChange)=\"modelChangeSoTienCongNo($event , 4)\"\n                        fxFlex.sm=\"100%\" label=\"Công nợ\" [step]=\"100\" [(model)]=\"thongtinDonThuoc.SoTienCongNo\"\n                        [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'SoTienCongNo' | validationerror:validationThuThuocErrors\">\n                    </app-textboxnumeric>\n                    <p style=\"margin-top:-20px;\" *ngIf=\"showCanhBaoSoTienNhap\" class=\"color-red\">Số tiền nhập không đúng\n                        số tiền thu.</p>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedTienMat\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"benh-nhan-dua\" fxFlex=\"100%\"\n                        fxFlex.sm=\"100%\" label=\"Người bệnh đưa\" [step]=\"100\" [spinners]=\"false\"\n                        [(selectMoney)]=\"selectMoneyTienBNDua\" (modelChange)=\"modelChangeTienBNDua($event)\"\n                        [(model)]=\"thongtinDonThuoc.BenhNhanDua\" (keyup)=\"onChangeBenhNhanDua()\" min=\"0\"\n                        [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'BenhNhanDua' | validationerror:validationThuThuocErrors\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedTienMat\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"tra-lai\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                        label=\"Trả lại\" [(model)]=\"thongtinDonThuoc.TienTraLai\" [readonly]=\"true\" [spinners]=\"false\"\n                        [isFormatCurrenly]=\"true\">\n                    </app-textboxnumeric>\n                    <app-datepicker id=\"ngay-thu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Ngày thu\"\n                        [(model)]=\"thongtinDonThuoc.NgayThu\" [readonly]=\"true\"\n                        [validationerror]=\"'NgayThu' | validationerror:validationThuThuocErrors\">\n                    </app-datepicker>\n                    <app-textbox id=\"noi-dung-thu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Nội dung thu\" maxlength=\"1000\"\n                        [(model)]=\"thongtinDonThuoc.NoiDungThu\"\n                        [validationerror]=\"'NoiDungThu' | validationerror:validationThuThuocErrors\" required=\"true\">\n                    </app-textbox>\n\n                    <div fxFlex=\"100%\" fxLayout=\"row\" style=\"margin-right:10px;margin-top:15px;\"\n                        fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"padding-thu-tien\" kendoTooltip>\n                        <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"ThuTienVaXuatThuoc()\"\n                            title=\"Phím tắt: Thu tiền và xuất thuốc\">Thu tiền và xuất thuốc</button>\n                        <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"ThuTien()\"\n                            title=\"Phím tắt: Ctrl + S\">Thu\n                            tiền</button>\n                    </div>\n                </div>\n            </kendo-splitter-pane>\n            <kendo-splitter-pane>\n                <kendo-tabstrip #tabStrip fxFlex=\"100%\" class=\"content-has-border\" style=\"padding: 5px !important\"\n                    (tabSelect)=\"chuyenDen($event)\">\n                    <kendo-tabstrip-tab [title]=\"'Chưa thu'\" [selected]=\"true\">\n                        <ng-template kendoTabContent>\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\" fxLayoutGap.lt-sm=\"0\"\n                                style=\"padding: 4px; margin-top: -16px;\">\n                                <app-combobox #duocPhamCombobox id=\"DuocPham\" fxFlex=\"55%\" fxFlex.sm=\"55%\"\n                                    [required]=\"true\" [(model)]=\"themDuocPham.DuocPhamId\"\n                                    [modelText]=\"themDuocPham.DuocPhamText\" label=\"Dược phẩm\"\n                                    class=\"item-no-padding pb-0\" [template]=\"dichVuGiuongTemplate\"\n                                    [templateHeader]=\"dichVuGiuongTemplateHeader\"\n                                    (selectionChange)=\"onSelectDuocPham($event)\" url=\"QuayThuoc/GetDuocPham\"\n                                    [validationerror]=\"'DuocPhamId' | validationerror:validationErrors\"\n                                    [popupSettings]=\"{width: 900,popupClass:'item-no-padding'}\"\n                                    (keyup)=\"onKeyEnterAddItem($event)\" (openCombobox)=\"openCombobox($event)\">\n                                    <ng-template #dichVuGiuongTemplateHeader let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <th width=\"10%\" style=\"text-align: left;\">Loại</th>\n                                                <th width=\"20%\" style=\"text-align: left;\">Tên</th>\n                                                <th width=\"10%\">Hàm lượng</th>\n                                                <th width=\"10%\" style=\"text-align: left;\">Hoạt chất</th>\n                                                <th width=\"10%\" style=\"text-align: left;\">ĐVT</th>\n                                                <th width=\"10%\" style=\"text-align: left;\">ĐD</th>\n                                                <th>NSX</th>\n                                                <th width=\"10%\" style=\"text-align: left;\">Tồn</th>\n                                                <th width=\"10%\" style=\"text-align: left;\">Hạn Sử Dụng</th>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                    <ng-template #dichVuGiuongTemplate let-dataItem>\n                                        <table width=\"100%\" class=\"table-combobox\">\n                                            <tr>\n                                                <td width=\"10%\">{{dataItem.Loai}}</td>\n                                                <td width=\"20%\">{{dataItem.Ten}}</td>\n                                                <td width=\"10%\">{{dataItem.HamLuong}}</td>\n                                                <td width=\"10%\">{{dataItem.HoatChat}}</td>\n                                                <td width=\"10%\">{{dataItem.DonViTinh}}</td>\n                                                <td width=\"10%\">{{dataItem.DuongDung}}</td>\n                                                <td>{{dataItem.NhaSanXuat}}</td>\n                                                <td width=\"10%\" style=\"text-align: center;\">{{dataItem.SoLuongTon |\n                                                    number }}</td>\n                                                <td width=\"10%\" style=\"text-align: left;\">{{dataItem.HanSuDung}}\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </ng-template>\n                                </app-combobox>\n                                <app-textboxnumeric class=\"pb-0\" label=\"Số lượng tồn\" fxFlex=\"15%\"\n                                    [(model)]=\"themDuocPham.SoLuongTon\" disabled=\"true\" moreClass=\"text-green bold\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric class=\"pb-0\" fxFlex=\"15%\" label=\"Số lượng\"\n                                    [(model)]=\"themDuocPham.SoLuong\" [required]=\"true\"\n                                    [validationerror]=\"'SoLuong' | validationerror:validationErrors\" min=\"1\"\n                                    (keyup)=\"onKey($event)\">\n                                </app-textboxnumeric>\n                                <div fxFlex=\"10%\" class=\"mt-5\">\n                                    <button type=\"button\" color=\"primary\" class=\"mr-1\" (click)=\"themThuoc()\"\n                                        mat-raised-button>Thêm</button>\n                                </div>\n                            </div>\n                            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0\" fxLayoutGap.lt-sm=\"0\">\n                                <kendo-grid fxFlex=\"100%\" [data]=\"gridData\" [resizable]=\"true\"\n                                    [kendoGridSelectBy]=\"keySelectBy\" [selectable]=\"{enabled: true, checkboxOnly: true}\"\n                                    class=\"header-center header-small\">\n                                    <kendo-grid-checkbox-column width=\"51\">\n                                        <ng-template kendoGridHeaderTemplate>\n                                            <input class=\"k-checkbox\" id=\"selectAllCheckboxId\"\n                                                kendoGridSelectAllCheckbox [state]=\"selectAllState\"\n                                                (selectAllChange)=\"onSelectAllChange($event)\">\n                                            <label class=\"k-checkbox-label\" for=\"selectAllCheckboxId\"></label>\n                                        </ng-template>\n\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <div>\n                                                <input class=\"k-checkbox\" id=\"selectCheckboxId{{dataItem[keySelectBy]}}\"\n                                                    type=\"checkbox\" kendoCheckBox [(ngModel)]=\"dataItem.CheckedDefault\"\n                                                    (change)=\"onSelectChangeCheckbox($event,dataItem[keySelectBy])\" />\n                                                <label class=\"k-checkbox-label\"\n                                                    for=\"selectCheckboxId{{dataItem[keySelectBy]}}\"\n                                                    [style.display]=\"'block'\"></label>\n                                            </div>\n                                        </ng-template>\n                                    </kendo-grid-checkbox-column>\n                                    <kendo-grid-column field=\"STT\" title=\"#\" width=\"59\"\n                                        [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"TenDuocPham\" title=\"Tên Thuốc-Vật Tư\" width=\"143\"\n                                        [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\"\n                                                class=\"mt-2\" kendoTooltip>\n                                                <span class=\"reverse-ellipsis r\" title=\"{{dataItem.TenDuocPham}}\">\n                                                    {{dataItem.TenDuocPham}}\n                                                </span>\n                                            </div>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"NongDoVaHamLuong\" title=\"Nồng Độ/Hàm Lượng\" width=\"80\"\n                                        [hidden]=\"loaiYeuCauTiepNhanKhachVangLai\" [style]=\"{'text-align': 'center'}\"\n                                        [headerStyle]=\"{'text-align': 'center'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\"\n                                                class=\"mt-2\" kendoTooltip>\n                                                <span class=\"reverse-ellipsis r\" title=\"{{dataItem.NongDoVaHamLuong}}\">\n                                                    {{dataItem.NongDoVaHamLuong}}\n                                                </span>\n                                            </div>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"MaHoatChat\" title=\"Hoạt Chất\" width=\"100\"\n                                        [hidden]=\"loaiYeuCauTiepNhanKhachVangLai\" [style]=\"{'text-align': 'center'}\"\n                                        [headerStyle]=\"{'text-align': 'center'}\">\n                                        <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                            <span style=\"color: black;font-size: 14px;font-weight: bold\">Tổng\n                                                cộng:</span>\n                                        </ng-template>\n                                        <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\"\n                                                class=\"mt-2\" kendoTooltip>\n                                                <span class=\"reverse-ellipsis r\" title=\"{{dataItem.MaHoatChat}}\">\n                                                    {{dataItem.MaHoatChat}}\n                                                </span>\n                                            </div>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"DonViTinh\" title=\"ĐVT\" width=\"40\"\n                                        [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\"\n                                                class=\"mt-2\" kendoTooltip>\n                                                <span class=\"reverse-ellipsis r\" title=\"{{dataItem.DonViTinh}}\">\n                                                    {{dataItem.DonViTinh}}\n                                                </span>\n                                            </div>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"SoLuongToa\" title=\"SL Toa\" width=\"78\"\n                                        [hidden]=\"loaiYeuCauTiepNhanKhachVangLai\" [style]=\"{'text-align': 'center'}\"\n                                        [headerStyle]=\"{'text-align': 'center'}\">\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"SoLuongMua\" title=\"SL Mua\" width=\"95\"\n                                        [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <app-textboxnumeric class=\"no-label numeric-in-grid\"\n                                                [disabled]=\"!dataItem.CheckedDefault\"\n                                                (modelChange)=\"modelChangeSoLuongMua($event , dataItem)\"\n                                                [(model)]=\"dataItem.SoLuongMua\">\n                                            </app-textboxnumeric>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"DonGia\" title=\"Đơn Giá\" width=\"90\"\n                                        [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <div>{{ dataItem.DonGia | number:'0.2-2':'vi-VN'}}</div>\n                                        </ng-template>\n                                        <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                            <span style=\"color: black;font-size: 14px;font-weight: bold\"\n                                                *ngIf=\"loaiYeuCauTiepNhanKhachVangLai\">Tổng\n                                                cộng:</span>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"ThanhTien\" title=\"Thành Tiền\" width=\"90\"\n                                        [headerStyle]=\"{'text-align': 'center'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <div style=\"float: right;\">{{ dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                                            </div>\n                                        </ng-template>\n                                        <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\"\n                                            style=\"text-align: center\">\n                                            <span style=\"float: right;\">{{total('ThanhTien') |\n                                                number:'0.2-2':'vi-VN'}} 654</span>\n                                        </ng-template> -->\n                                        <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                            <span style=\"color:red;float: right;\"\n                                                *ngIf=\"loaiYeuCauTiepNhanKhachVangLai\">{{total('ThanhTien') |\n                                                number:'0.2-2':'vi-VN'}}</span>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column-group [style]=\"{'text-align': 'center'}\"\n                                        *ngFor=\"let col of danhSachCongNoChoThus\"\n                                        [headerStyle]=\"{'text-align': 'center'}\">\n                                        <div>\n                                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\"\n                                                let-column=\"column\">\n                                                <div class=\"text-center\">Công nợ </div>\n                                            </ng-template>\n                                        </div>\n                                        <kendo-grid-column *ngFor=\"let col1 of col.CongNoChoThus\" width=\"150\"\n                                            [style]=\"{'text-align': 'center'}\" title=\"{{col1.TenCongTy}}\"\n                                            [headerStyle]=\"{'text-align': 'center'}\">\n                                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\"\n                                                    fxLayoutGap.lt-sm=\"0\" fxLayoutAlign=\"space-between\">\n                                                    <app-textboxnumeric class=\"no-label\" [step]=\"100\" decimals=\"2\"\n                                                        [format]=\"format\" min=\"0.00\"\n                                                        (modelChange)=\"modelChangeCongNo($event , dataItem, col1.ViTri)\"\n                                                        [(model)]=\"dataItem.DanhSachCongNoChoThus[col1.ViTri].SoTienCongNoChoThu\">\n                                                    </app-textboxnumeric>\n                                                </div>\n                                            </ng-template>\n                                            <ng-template kendoGridGroupFooterTemplate>\n                                                <div *ngIf=\"col1.SoTienCongNoChoThu !== 0\">\n                                                    {{col1.SoTienCongNoChoThu | number:'0.2-2':'vi-VN'}}\n                                                </div>\n                                                <div\n                                                    *ngIf=\"col1.SoTienCongNoChoThu === undefined && col1.SoTienCongNoChoThu === 0\">\n                                                    {{0 | number:'0.2-2':'vi-VN'}}\n                                                </div>\n                                            </ng-template>\n                                            <ng-template kendoGridFooterTemplate let-column\n                                                let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n                                                <span style=\"color:black;float: right;\">{{totalCongno(col1.ViTri) |\n                                                    number:'0.2-2':'vi-VN'}}</span>\n                                            </ng-template>\n                                        </kendo-grid-column>\n                                    </kendo-grid-column-group>\n                                    <kendo-grid-column field=\"SoTienMG\" title=\"Số tiền MG\" width=\"130\"\n                                        [hidden]=\"loaiYeuCauTiepNhanKhachVangLai\"\n                                        [headerStyle]=\"{'text-align': 'center'}\" [style]=\"{'text-align': 'center'}\">\n                                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\"\n                                            let-column=\"column\">\n                                            Số tiền MG\n                                            <mat-icon style=\"margin-top: 10px;cursor: pointer\" [icIcon]=\"icRoundEdit\"\n                                                (click)=\"apDungMiemGiamThem()\">\n                                            </mat-icon>\n                                        </ng-template>\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <div class=\"float_right\">\n                                                <div style=\"cursor: pointer;\">\n                                                    {{ dataItem.SoTienMG | number:'0.2-2':'vi-VN'}}\n                                                    <ic-icon [icon]=\"icRoundEdit\" class=\"mr-3\" inline=\"true\"\n                                                        (click)=\"apDungMiemGiamChoTungDichVu(dataItem)\">\n                                                    </ic-icon>\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoGridGroupFooterTemplate let-group=\"group\"\n                                            let-aggregates=\"aggregates\">\n                                            <div style=\"margin-right: 28px;\" class=\"float_right\">\n                                                {{aggregates.SoTienMG.sum |number:'0.2-2':'vi-VN'}}\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                            <span style=\"margin-right: 28px;\" class=\"float_right\">{{total('SoTienMG') |\n                                                number:'0.2-2':'vi-VN'}}</span>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"BNConPhaiThanhToan\" title=\"BN Còn Phải TT\" width=\"90\"\n                                        [hidden]=\"loaiYeuCauTiepNhanKhachVangLai\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <div *ngIf=\"dataItem.BNConPhaiThanhToan >= 0\">\n                                                <span style=\"float: right;\">{{dataItem.BNConPhaiThanhToan |\n                                                    number:'0.2-2':'vi-VN'}}</span>\n                                            </div>\n                                            <div *ngIf=\"dataItem.BNConPhaiThanhToan < 0\" style=\"color:red;float: right\">\n                                                {{ dataItem.BNConPhaiThanhToan | number:'0.2-2':'vi-VN'}}\n                                                <mat-icon [icIcon]=\"icInfo\" kendoTooltip\n                                                    title=\"Số tiền bạn nhập không đúng.\">\n                                                </mat-icon>\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                            <span style=\"color:red;float: right;\">{{total('BNConPhaiThanhToan') |\n                                                number:'0.2-2':'vi-VN'}}</span>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"Solo\" title=\"Số Lô\" width=\"125\"\n                                        [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"HanSuDungHientThi\" title=\"Hạn Sử Dụng\" width=\"80\"\n                                        [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"BacSiKeToa\" title=\"Bác Sĩ Kê Toa\" width=\"80\"\n                                        [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\"\n                                        [hidden]=\"loaiYeuCauTiepNhanKhachVangLai\">\n                                        <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\"\n                                                class=\"mt-2\" kendoTooltip>\n                                                <span class=\"reverse-ellipsis r\" title=\"{{dataItem.BacSiKeToa}}\">\n                                                    {{dataItem.BacSiKeToa}}\n                                                </span>\n                                            </div>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"Action\" title=\"\" width=\"54\"\n                                        [headerStyle]=\"{'text-align': 'center'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <button type=\"button\" mat-icon-button (click)=\"delete(dataItem)\"\n                                                *ngIf=\"dataItem.isNew\">\n                                                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                            </button>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\"\n                                        pagerItems=\"dòng\" detailExpand=\"Mở rộng chi tiết\"\n                                        detailCollapse=\"Thu gọn chi tiết\">\n                                    </kendo-grid-messages>\n                                </kendo-grid>\n                            </div>\n                        </ng-template>\n                    </kendo-tabstrip-tab>\n                    <kendo-tabstrip-tab [title]=\"'Đã thu'\">\n                        <ng-template kendoTabContent>\n                            <app-thong-tin-phieu-da-thu [yeuCauTiepNhanId]=\"maYCTNId\"></app-thong-tin-phieu-da-thu>\n                        </ng-template>\n                    </kendo-tabstrip-tab>\n                </kendo-tabstrip>\n            </kendo-splitter-pane>\n        </kendo-splitter>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"100%\" class=\"mt-3\">\n        <span style=\"float: left;\">Số tiền <strong  style=\"color:red\">{{tongTien | number:'0.2-2':'vi-VN'}}</strong></span>\n    </div>\n    <div fxFlex=\"100%\">\n        <kendo-splitter>\n            <kendo-splitter-pane [collapsible]=\"true\" size=\"18%\" class=\"sticky-panelbar\" style=\"overflow-x: hidden;\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                    class=\"px-2 py-3\" style=\"overflow:hidden;\">\n                    <app-multiselect [style.display]=\"tongTien < 0 ? 'none' : 'block'\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                        label=\"Hình thức thanh toán\" [(model)]=\"setDefeautTienMat\"\n                        (valueChange)=\"ChangeHinhThucThanhToan($event)\" [data]=\"hinhThucThanhToan\"\n                        [validationerror]=\"'HinhThucThanhToan' | validationerror:validationErrors\"\n                        required=\"true\">\n                    </app-multiselect>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedTienMat\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"so-tien\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                        label=\"Tiền mặt\" [step]=\"100\" [(model)]=\"thongtinDonThuoc.TienMat\"\n                        [(selectMoney)]=\"selectMoneyTienMat\" (modelChange)=\"modelChangeTienMat($event , 1)\" min=\"0\"\n                        [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'TienMat' | validationerror:validationErrors\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedChuyenKhoan\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"chuyen-khoan\" fxFlex=\"100%\"\n                        fxFlex.sm=\"100%\" label=\"Chuyển khoản\" [step]=\"100\" [(model)]=\"thongtinDonThuoc.ChuyenKhoan\"\n                        [(selectMoney)]=\"selectMoneyTienChuyenKhoan\" (modelChange)=\"modelChangeChuyenKhoan($event , 2)\"\n                        [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'ChuyenKhoan' | validationerror:validationErrors\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedPos\" [style.display]=\"tongTien < 0 ? 'none' : 'block'\"\n                        id=\"pos\" fxFlex=\"100%\" [(selectMoney)]=\"selectMoneyTienPos\"\n                        (modelChange)=\"modelChangePos($event , 3)\" fxFlex.sm=\"100%\" label=\"POS\" [step]=\"100\"\n                        [(model)]=\"thongtinDonThuoc.POS\" [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'POS' | validationerror:validationErrors\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedSoTienCongNo\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"pos\" fxFlex=\"100%\"\n                        [(selectMoney)]=\"selectMoneySoTienCongNo\" (modelChange)=\"modelChangeSoTienCongNo($event , 4)\"\n                        fxFlex.sm=\"100%\" label=\"Công nợ\" [step]=\"100\" [(model)]=\"thongtinDonThuoc.SoTienCongNo\"\n                        [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'SoTienCongNo' | validationerror:validationErrors\">\n                    </app-textboxnumeric>\n                    <!-- <p style=\"margin-top:-20px;\" *ngIf=\"showCanhBaoSoTienNhap\" class=\"color-red\">\n                        Số tiền nhập không đúng số tiền thu.</p> -->\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedTienMat\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"benh-nhan-dua\" fxFlex=\"100%\"\n                        fxFlex.sm=\"100%\" label=\"Người bệnh đưa\" [step]=\"100\" [spinners]=\"false\"\n                        [(selectMoney)]=\"selectMoneyTienBNDua\" (modelChange)=\"modelChangeTienBNDua($event)\"\n                        [(model)]=\"thongtinDonThuoc.BenhNhanDua\" (keyup)=\"onChangeBenhNhanDua()\" min=\"0\"\n                        [isFormatCurrenly]=\"true\"\n                        [validationerror]=\"'BenhNhanDua' | validationerror:validationErrors\">\n                    </app-textboxnumeric>\n                    <app-textboxnumeric *ngIf=\"flagCheckSeletedTienMat\"\n                        [style.display]=\"tongTien < 0 ? 'none' : 'block'\" id=\"tra-lai\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                        label=\"Trả lại\" [(model)]=\"thongtinDonThuoc.TienTraLai\" [readonly]=\"true\" [spinners]=\"false\"\n                        [isFormatCurrenly]=\"true\">\n                    </app-textboxnumeric>\n                    <app-datepicker id=\"ngay-thu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Ngày thu\"\n                        [(model)]=\"thongtinDonThuoc.NgayThu\" [readonly]=\"true\"\n                        [validationerror]=\"'NgayThu' | validationerror:validationErrors\">\n                    </app-datepicker>\n                    <app-textbox id=\"noi-dung-thu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Nội dung thu\" maxlength=\"1000\"\n                        [(model)]=\"thongtinDonThuoc.NoiDungThu\"\n                        [validationerror]=\"'NoiDungThu' | validationerror:validationErrors\" required=\"true\">\n                    </app-textbox>\n                    <div fxFlex=\"100%\" fxLayout=\"row\" style=\"margin-right:10px;margin-top:15px;\"\n                        fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"padding-thu-tien\" kendoTooltip>\n                        <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"ThuTienVaXuatThuoc()\"\n                            title=\"Phím tắt: Thu tiền và xuất thuốc\">Thu tiền và xuất thuốc</button>\n                        <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"ThuTien()\"\n                            title=\"Phím tắt: Ctrl + S\">Thu\n                            tiền</button>\n                    </div>\n                </div>\n            </kendo-splitter-pane>\n            <kendo-splitter-pane style=\"overflow:hidden;\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px \" fxLayoutGap.lt-sm=\"0\">\n                    <app-grid #gridDanhSachMuaThuoc masterName=\"MuaThuoc\" [documentType]=\"documentType\" fxFlex=\"100%\"\n                        [gridColumns]=\"gridColumns\" [gridDataSource]=\"dataSourcedanhsachThuoc\" [autoHeight]=\"true\"\n                        [lazyLoadPage]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\"\n                        [headerTemplate]=\"headerTemplate\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"false\"\n                        [pageable]=\"false\" useActionDefault=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\">\n                    </app-grid>\n                    <ng-template #donGiaTemplate let-dataItem>\n                        <span *ngIf=\"dataItem.DonGia != null\">{{dataItem.DonGia | number:'0.2-2':'vi-VN'}}</span>\n                        <span *ngIf=\"dataItem.DonGia == null\">{{0| number:'0.2-2':'vi-VN'}}</span>\n                    </ng-template>\n                    <ng-template #thanhTienTemplate let-dataItem>\n                        <span>{{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}</span>\n                    </ng-template>\n                    <ng-template #footerTemplateDonGia let-dataItem> <span style=\"float: right;\">Tổng:</span>\n                    </ng-template>\n                    <ng-template #footerTemplateTongTienDonThuoc let-dataItem>\n                        <span style=\"color:red\">{{tongTienHienThi | number:'0.2-2':'vi-VN'}}</span>\n                    </ng-template>\n                    <ng-template #soLuonTemplate let-dataItem>\n                        <!-- <span >{{dataItem.SoLuongMua | number}}</span> -->\n                        <app-textboxnumeric class=\"no-label numeric-in-grid\"\n                        [disabled]=\"!dataItem.CheckedDefault\"\n                        (modelChange)=\"modelChangeSoLuongMua($event , dataItem)\"\n                        [(model)]=\"dataItem.SoLuongMua\">\n                    </app-textboxnumeric>\n                    </ng-template>\n                    <ng-template #headerTemplate>\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                            class=\"px-2 py-3\">\n                            <app-combobox #duocphamCombobox id=\"DuocPham\" fxFlex=\"55%\" fxFlex.sm=\"55%\"\n                                [(model)]=\"themDuocPham.DuocPhamId\" [required]=\"true\"\n                                (selectionChange)=\"onSelectDuocPham($event)\" [modelText]=\"themDuocPham.DuocPhamText\"\n                                label=\"Dược phẩm\" class=\"item-no-padding\" [template]=\"dichVuGiuongTemplate\"\n                                [templateHeader]=\"dichVuGiuongTemplateHeader\" url=\"QuayThuoc/GetDuocPham\"\n                                [popupSettings]=\"{width: 900,popupClass:'item-no-padding'}\"\n                                [validationerror]=\"'DuocPhamId' | validationerror:validationThuocErrors\"\n                                (keyup)=\"onKeyEnterAddItem($event)\" (openCombobox)=\"openCombobox($event)\">\n                                <ng-template #dichVuGiuongTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"10%\" style=\"text-align: left;\">Loại</th>\n                                            <th width=\"20%\" style=\"text-align: left;\">Tên</th>\n                                            <th width=\"10%\">Hàm lượng</th>\n                                            <th width=\"10%\" style=\"text-align: left;\">Hoạt chất</th>\n                                            <th width=\"10%\" style=\"text-align: left;\">ĐVT</th>\n                                            <th width=\"10%\" style=\"text-align: left;\">Đường dùng</th>\n                                            <th>NSX</th>\n                                            <th width=\"10%\" style=\"text-align: left;\">Tồn</th>\n                                            <th width=\"10%\" style=\"text-align: left;\">HSD</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #dichVuGiuongTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"10%\">{{dataItem.Loai}}</td>\n                                            <td width=\"20%\">{{dataItem.Ten}}</td>\n                                            <td width=\"10%\">{{dataItem.HamLuong}}</td>\n                                            <td width=\"10%\">{{dataItem.HoatChat}}</td>\n                                            <td width=\"10%\">{{dataItem.DonViTinh}}</td>\n                                            <td width=\"10%\">{{dataItem.DuongDung}}</td>\n                                            <td>{{dataItem.NhaSanXuat}}</td>\n                                            <td width=\"10%\" style=\"text-align: center;\">\n                                                {{dataItem.SoLuongTon | number }}</td>\n                                            <td width=\"10%\" style=\"text-align: left;\">{{dataItem.HanSuDung}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n\n                            <app-textboxnumeric label=\"Số lượng tồn\" fxFlex=\"15%\" [(model)]=\"themDuocPham.SoLuongTon\"\n                                disabled=\"true\" moreClass=\"text-green bold\">\n                            </app-textboxnumeric>\n                            <app-textboxnumeric fxFlex=\"15%\" label=\"Số lượng\" [(model)]=\"themDuocPham.SoLuong\"\n                                [required]=\"true\" [validationerror]=\"'SoLuong' | validationerror:validationThuocErrors\"\n                                (keyup)=\"onKey($event)\">\n                            </app-textboxnumeric>\n                            <div fxFlex=\"10%\" class=\"mt-5\">\n                                <button type=\"button\" color=\"primary\" class=\"mr-1\" (click)=\"them1()\"\n                                    mat-raised-button>Thêm</button>\n                            </div>\n\n                        </div>\n                    </ng-template>\n                    <ng-template #actionTemplate let-dataItem>\n                        <div class=\"text-center\" *ngIf=\"dataItem.LoaiDonThuoc === 1\">\n                            <p style=\"color: red\">\n                                <mat-icon [icIcon]=\"icInfo\" class=\"mt-4\" kendoTooltip\n                                    title=\"Thuốc bảo hiểm y tế không có trong kho.\">\n                                </mat-icon>\n                            </p>\n                        </div>\n                        <div class=\"text-center\" *ngIf=\"dataItem.ThuocTrongKhoExit == true\">\n                            <p style=\"color: red\">\n                                <mat-icon [icIcon]=\"icInfo\" class=\"mt-4\" kendoTooltip title=\"Thuốc trong kho đã hết.\">\n                                </mat-icon>\n                            </p>\n                        </div>\n                        <div class=\"text-center\" kendoTooltip *ngIf=\"dataItem.isNew==true\">\n                            <button type=\"button\" mat-icon-button (click)=\"delete(dataItem)\">\n                                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            </button>\n                        </div>\n                    </ng-template>\n\n                </div>\n            </kendo-splitter-pane>\n        </kendo-splitter>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"dataSourcedanhsachThuoc\" [autoHeight]=\"true\"\n        [lazyLoadPage]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n        [allowSortDefault]=\"false\" [pageable]=\"false\" useActionDefault=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\">\n    </app-grid>\n</div>\n<br>\n<div *ngIf=\"dataSourcedanhsachThuoc.data.length>0\">\n    <button type=\"button\" color=\"primary\" (click)=\"GuiData()\" class=\"mr-1 float-right\" mat-raised-button>\n        Xuất thuốc</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <fieldset fxFlex=\"100%\" *ngIf=\"data != null\">\n        <legend>THÔNG TIN HÀNH CHÍNH</legend>\n        <div fxFlex=\"100%\">\n            <ul class=\"inline\">\n                <!-- <li>Mã TN:\n                    <strong>{{data.MaTN}}</strong>\n                </li> -->\n                <li>Mã NB:\n                    <strong>{{data.MaBN}}</strong>\n                </li>\n                <li>Họ tên:\n                    <strong>{{data.HoTen}}</strong>\n                </li>\n                <li>Giới tính:\n                    <strong>{{data.GioiTinhHienThi}}</strong>\n                </li>\n                <li>Năm sinh:\n                    <strong>{{data.NamSinh}}</strong>\n                </li>\n                <li>Địa chỉ:\n                    <strong>{{data.DiaChiDayDu}}</strong>\n                </li>\n\n                <li>SĐT:\n                    <strong>{{data.SoDienThoai}}</strong>\n                </li>\n                <li>Email:\n                    <strong>{{data.Email}}</strong>\n                </li>\n            </ul>\n        </div>\n    </fieldset>\n\n\n    <fieldset fxFlex=\"100%\" *ngIf=\"data == null\">\n        <legend>THÔNG TIN HÀNH CHÍNH</legend>\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n            fxLayoutAlign=\"space-between\">\n            <app-textbox id=\"Ten\" fxFlex=\"14%\" fxFlex.sm=\"14%\" maxlength=\"100\" [(model)]=\"thongTinBenhNhan.HoTen\" class=\"text-transform-uppercase\"\n                [required]=\"true\" (modelChange)=\"onSaveTen()\" label=\"Họ tên\"\n                [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n            </app-textbox>\n\n            <app-radio id=\"GioiTinh\" label=\"Giới tính\" fxFlex=\"11%\" fxFlex.sm=\"11%\"\n                (modelChange)=\"onSaveGioiTinh($event)\" [(model)]=\"thongTinBenhNhan.GioiTinh\"\n                [items]=\"[{Value:1,Text:'Nam'},{Value:2,Text:'Nữ'}]\">\n            </app-radio>\n\n            <app-textboxnumeric id=\"NamSinh\" fxFlex=\"12.5%\" fxFlex.sm=\"12.5%\" label=\"Năm sinh\" [format]=\"'0'\"\n                (modelChange)=\"onSaveNamSinh($event)\" [(model)]=\"thongTinBenhNhan.NamSinh\" [max]=\"9999\"\n                [validationerror]=\"'NamSinh' | validationerror:validationErrors\">\n            </app-textboxnumeric>\n\n            <!-- <app-textbox id=\"SDT\" fxFlex=\"12.5%\" fxFlex.sm=\"12.5%\" maxlength=\"12\" (modelChange)=\"onSaveSDT($event)\"\n                [(model)]=\"thongTinBenhNhan.SoDienThoai\" label=\"Điện thoại\">\n            </app-textbox> -->\n            <app-textboxmask id=\"SDT\" onlynumber=\"true\" fxFlex=\"12.5%\" fxFlex.sm=\"12.5%\" label=\"Số điện thoại\" (modelChange)=\"onSaveSDT($event)\"\n                 maxlength=\"10\" [(model)]=\"thongTinBenhNhan.SoDienThoai\" mask=\"000 000 0000\">\n            </app-textboxmask>\n            <app-combobox id=\"TinhThanhPho\" fxFlex=\"12.5%\" fxFlex.sm=\"12.5%\" (modelChange)=\"TinhThanhPhoChange($event)\"\n                label=\"Tỉnh/Thành Phố\" url=\"QuayThuoc/GetTinhThanh\" hierarchyKeyToSend=\"tinhThanh\"\n                [(model)]=\"thongTinBenhNhan.TinhThanhId\"  [modelText]=\"thongTinBenhNhan.TenTinhDisplay\" bind =\"true\" class=\"item-no-padding\" [template]=\"tinhThanhTemplate\"\n                [templateHeader]=\"tinhThanhTemplateHeader\">\n                <ng-template #tinhThanhTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"20%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #tinhThanhTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n            </app-combobox>\n\n            <app-combobox id=\"QuanHuyen\" fxFlex=\"12.5%\" fxFlex.sm=\"12.5%\" label=\"Quận/Huyện\"\n                (modelChange)=\"QuanHuyenChange($event)\" [modelText]=\"thongTinBenhNhan.TenHuyenDisplay\" url=\"QuayThuoc/GetQuanHuyen\" hierarchyKeyToListen=\"tinhThanh\"\n                hierarchyKeyToSend=\"quanHuyen\" [(model)]=\"thongTinBenhNhan.QuanHuyenId\" class=\"item-no-padding\" bind =\"true\"\n                [template]=\"quanHuyenTemplate\" [templateHeader]=\"quanHuyenTemplateHeader\">\n                <ng-template #quanHuyenTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"20%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #quanHuyenTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n            </app-combobox>\n\n            <app-combobox id=\"PhuongXa\" fxFlex=\"12.5%\" fxFlex.sm=\"12.5%\" label=\"Phường/Xã\" url=\"QuayThuoc/GetPhuongXa\"\n                hierarchyKeyToListen=\"quanHuyen\" (modelChange)=\"PhuongXaChange($event)\" \n                [(model)]=\"thongTinBenhNhan.PhuongXaId\" class=\"item-no-padding\" [template]=\"phuongXaTemplate\"\n                [templateHeader]=\"phuongXaTemplateHeader\">\n                <ng-template #phuongXaTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"20%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #phuongXaTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n            </app-combobox>\n\n            <app-textbox id=\"DiaChi\" fxFlex=\"12.5%\" fxFlex.sm=\"12.5%\" maxlength=\"200\"\n                (modelChange)=\"onSaveDiaChi($event)\" [(model)]=\"thongTinBenhNhan.DiaChi\" label=\"Địa chỉ\">\n            </app-textbox>\n        </div>\n    </fieldset>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n                    [\n                    {Title:'Nhà Thuốc',Path:''},\n                    {Title:'Khách vãng lai',Path:'/nha-thuoc', Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n            {Key:'Ctrl + F1',Description:'Di chuyển tới và mở tab Mua thuốc'},\n            {Key:'Ctrl + F2',Description:'Di chuyển tới và mở tab Chờ xuất thuốc'},\n            {Key:'Ctrl + S',Description:'Thu tiền'},\n            {Key:'Esc',Description:'Quay lại', End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n                        <app-quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh (valueChange)=\"switchValueChanges($event)\"\n                            [validationErrors]=\"validationErrorForThongTin\" [donThuocId]=\"donThuocIds\" [MaBN]=\"MaBN\"\n                            [TenBenhNhan]=\"TenBenhNhan\" [SDT]=\"SDT\"\n                            [ThongTinBenhNhanDaThuTienData]=\"ThongTinBenhNhanDaThuTien\">\n                        </app-quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh>\n                        <kendo-tabstrip fxFlex=\"100%\" class=\"content-has-border has-padding mt-3\"\n                            [keepTabContent]=\"true\" (tabSelect)=\"onTabSelect($event)\" #tabVangLai>\n                            <kendo-tabstrip-tab [selected]=\"kendoTabSelected===1\">\n                                <ng-template kendoTabContent>\n                                    <app-quay-thuoc-khach-vang-lai-cho-thanh-toan\n                                        [thongTinKhachVangLai]=\"thongTinBenhNhan\"\n                                        (valueChangeThuTien)=\"switchValueChangesChoThanhToan($event)\"\n                                        [donThuocId]=\"donThuocIds\" [ttCheck]=\"ttCheck\" (changeTab)=\"changeTab($event)\"\n                                        (MaTiepNhanBenhNhanDaThuTien)=\"MaTiepNhanBenhNhanDaThuTien($event)\"\n                                        (danhSachChuaThanhToan)=\"danhSachChuaThanhToan($event)\">\n                                    </app-quay-thuoc-khach-vang-lai-cho-thanh-toan>\n                                </ng-template>\n                                <ng-template kendoTabTitle>\n                                    <div kendoTooltip title=\"Phím tắt: Ctrl + F1\">\n                                        Mua thuốc\n                                    </div>\n                                </ng-template>\n                            </kendo-tabstrip-tab>\n                            <kendo-tabstrip-tab [selected]=\"kendoTabSelected===2\">\n                                <ng-template kendoTabContent>\n                                    <app-quay-thuoc-khach-vang-lai-cho-xuat-thuoc\n                                        [ThongTinBenhNhanDaThuTienData]=\"ThongTinBenhNhanDaThuTien\" [ttCheck]=\"ttCheck\">\n                                    </app-quay-thuoc-khach-vang-lai-cho-xuat-thuoc>\n                                </ng-template>\n                                <ng-template kendoTabTitle>\n                                    <div kendoTooltip title=\"Phím tắt: Ctrl + F2\">\n                                        Chờ xuất thuốc\n                                    </div>\n                                </ng-template>\n                            </kendo-tabstrip-tab>\n                        </kendo-tabstrip>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n                            <!-- <button type=\"button\" (click)=\"inXemTruocBangKeThuoc()\" mat-raised-button\n                                title=\"In Bảng Kê\">\n                                In Bảng Kê\n                            </button> -->\n                            <button type=\"button\" (click)=\"Huy()\" mat-raised-button title=\"Phím tắt: ESC\">\n                                Quay lại\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-grid #gridD [gridColumns]=\"gridChildColumnsChoThanhToan\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n    [sort]=\"sortConfig\" [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n    heightToolbar=\"272\" [additionalSearchString]=\"queryStringSearchUuTien\" [detailTemplate]=\"detailTemplate\"\n    (extOnDataBound)=\"onDataBound($event)\">\n</app-grid>\n<ng-template #TongGiaTriDonThuocTemplate let-dataItem>\n    <strong class=\"text-color\" style=\"color:red\" *ngIf=\"dataItem.TrangThaiHienThi=='Chưa thanh toán'\">\n        {{dataItem.TongGiaTriDonThuoc | number:'0.2-2':'vi-VN'}}</strong>\n    <strong class=\"text-color\" style=\"color:blue\" *ngIf=\"dataItem.TrangThaiHienThi=='Đã thanh toán'\">\n        {{dataItem.TongGiaTriDonThuoc | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #SoTienChoThanhToanTemplate let-dataItem>\n    <strong class=\"text-color\" style=\"color:red\" *ngIf=\"dataItem.TrangThaiHienThi=='Chưa thanh toán'\">\n        {{dataItem.SoTienChoThanhToan | number:'0.2-2':'vi-VN'}}</strong>\n    <strong class=\"text-color\" style=\"color:blue\" *ngIf=\"dataItem.TrangThaiHienThi=='Đã thanh toán'\">\n        {{dataItem.SoTienChoThanhToan | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #trangThaiTemplate let-dataItem>\n    <strong class=\"text-color\" style=\"color:red\" *ngIf=\"dataItem.TrangThaiHienThi=='Chưa thanh toán'\">\n        {{dataItem.TrangThaiHienThi}}</strong>\n    <strong class=\"text-color\" style=\"color:blue\" *ngIf=\"dataItem.TrangThaiHienThi =='Đã thanh toán'\">\n        {{dataItem.TrangThaiHienThi}}</strong>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <button type=\"button\" color=\"primary\" (click)=\"Xem(dataItem)\" class=\"mr-1 float-right\" mat-raised-button>\n            Xem</button>\n    </div>\n</ng-template>\n\n<ng-template #maTNTemplate let-dataItem>\n    <a (click)=\"Xem(dataItem)\">{{dataItem.MaTN}}</a>\n</ng-template>\n<ng-template #detailTemplate let-dataItem>\n    <app-grid baseRoute=\"\" [gridColumns]=\"gridChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        [urlGetData]=\"urlGetDataChild\"\n        [additionalSearchString]=\"dataItem.Id + '-' +dataItem.DateStart + '-' + dataItem.DateEnd\" [autoHeight]=\"true\"\n        [pageable]=\"false\">\n    </app-grid>\n</ng-template>\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n<ng-template #templatePrint let-dataItem>\n    <span *ngIf=\"dataItem.DonThuocBacSiKeToa == false\">\n        <button kendoTooltip title=\"In phiếu\"\n            (click)=\"PrinAllDonThuocBenhNhan(dataItem.DonThuocThanhToanId, dataItem.LoaiDonThuoc , dataItem.YeuCauKhambenhId)\"\n            mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n        </button>\n    </span>\n</ng-template>\n<ng-template #SoTienThuoctemplate let-dataItem>\n    <span style=\"color:red\"> {{dataItem.SoTienDisPlay}}</span>\n</ng-template>\n<ng-template #TinhTrangThuoctemplate let-dataItem>\n    <span style=\"color:red\" *ngIf=\"dataItem.TinhTrang =='Chưa xuất thuốc' || dataItem.TinhTrang =='Chưa thanh toán'\">\n        {{dataItem.TinhTrang}}</span>\n    <span style=\"color:blue\" *ngIf=\"dataItem.TinhTrang =='Đã thanh toán'\"> {{dataItem.TinhTrang}}</span>\n    <span style=\"color: blue;\" *ngIf=\"dataItem.TinhTrang =='Đã xuất thuốc'\"> {{dataItem.TinhTrang}}</span>\n</ng-template>\n<ng-template #nguoiDungKhongMuaThuocTemplate let-dataItem>\n    <button *ngIf=\"dataItem.TrangThai === 1\"  type=\"button\" color=\"primary\" mat-raised-button (click)=\"nguoiBenhKhongMuaThuoc(dataItem)\"\n     title=\"Phím tắt: Người bệnh không mua thuốc\">NB không mua thuốc</button>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n                    [\n                    {Title:'Nhà Thuốc',Path:''},\n                    {Title:'Mua thuốc',Path:'/nha-thuoc',queryParams: { page: this.ttcheck,hoQuerysearch:false},Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n            {Key:'Ctrl + F1',Description:'Di chuyển tới và mở tab Mua thuốc'},\n            {Key:'Ctrl + F2',Description:'Di chuyển tới và mở tab Chờ xuất thuốc'},\n            {Key:'Ctrl + S',Description:'Thu tiền'},\n            {Key:'Esc',Description:'Quay lại', End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n                        <app-quay-thuoc-thong-tin-hanh-chinh [benhnhanThongTin]=\"benhnhanThongTin\">\n                        </app-quay-thuoc-thong-tin-hanh-chinh>\n                        <!-- class=\"content-has-border\" -->\n                        <kendo-tabstrip fxFlex=\"100%\" class=\"content-has-border has-padding mt-3\" (tabSelect)=\"onTabSelect($event)\" [keepTabContent]=\"true\" #tabQuayThuoc>\n                            <kendo-tabstrip-tab [selected]=\"tt==1\">\n\n                                <ng-template kendoTabContent>\n                                    <app-quay-thuoc-thong-tin-bao-hiem-tu-nhan [tongTienBNThanhToan]=\"tongTienBNThanhToan\" (valueChangeBaoHiem)=\"getBaoHiem($event)\" (valueChangeMg)=\"getMg($event)\">\n                                    </app-quay-thuoc-thong-tin-bao-hiem-tu-nhan>\n\n                                    <app-quay-thuoc-hinh-thuc-thanh-toan [benhnhanThongTin]=\"benhnhanThongTin\" (afterChangedCongNo)=\"afterChangedCongNo()\" (changeTab)=\"changeTab()\" (afterChangedMg)=\"afterChangedMienGiam()\" [apDungCongNoThuoc]=\"apDungCongNoThuoc\" [thongTinTam]=\"thongTinTam\"\n                                        [apDungMienGiam]=\"apDungMienGiam\" [viTri]=\"viTri\" [thongTinMienGiamVos]=\"thongTinMienGiamVos\" (danhSachChuaThanhToan)=\"danhSachChuaThanhToan($event)\">\n                                    </app-quay-thuoc-hinh-thuc-thanh-toan>\n\n                                </ng-template>\n                                <ng-template kendoTabTitle>\n                                    <div kendoTooltip title=\"Phím tắt: Ctrl + F1\">\n                                        Mua thuốc-vật tư\n                                    </div>\n                                </ng-template>\n                            </kendo-tabstrip-tab>\n                            <kendo-tabstrip-tab [selected]=\"tt==2\">\n                                <ng-template kendoTabContent>\n                                    <app-quay-thuoc-cho-xuat-thuoc [flagOnce]=\"flagAllowLoadThuoc\" [trangThaiXuatThuoc]=\"tt\" [ttcheck]=\"ttcheck\">\n                                    </app-quay-thuoc-cho-xuat-thuoc>\n                                </ng-template>\n                                <ng-template kendoTabTitle>\n                                    <div kendoTooltip title=\"Phím tắt: Ctrl + F2\">\n                                        Chờ xuất thuốc-vật tư\n                                    </div>\n                                </ng-template>\n                            </kendo-tabstrip-tab>\n                        </kendo-tabstrip>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n                            <button type=\"button\"  (click)=\"inXemTruocBangKeThuoc()\" mat-raised-button title=\"In Bảng Kê\">\n                               In Bảng Kê\n                            </button>\n                            <button type=\"button\" (click)=\"Huy()\" mat-raised-button title=\"Phím tắt: ESC\">\n                                Quay lại\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n    <fieldset fxFlex=\"100%\" class=\"mb-3\" *ngIf=\"checkHaveBHTN === true\">\n        <legend>Thông tin bảo hiểm tư nhân</legend>\n        <div class=\" mt-1\">\n            <app-grid [gridColumns]=\"gridChildColumns2\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" [gridDataSource]=\"dataSourceDanhSachBHTN\" [autoHeight]=\"true\" style=\"width: 1px;\"\n                [pageable]=\"false\">\n            </app-grid>\n        </div>\n    </fieldset>\n    <!-- <fieldset *ngIf=\"!khachVangLaiMuaThuoc\" fxFlex=\"100%\" class=\"mb-3\">\n        <legend>Thông tin miễn giảm</legend>\n\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            start thông tim voucher\n            <div fxFlex=\"15%\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap.lt-sm=\"0\">\n                    <app-checkbox id=\"loaiVoucher\" fxFlex=\"100%\" fxFlex.sm=\"100%\" value=\"true\"\n                        [disabled]=\"disabledVoucher\" [model]=\"flagEnableVoucher\" (modelChange)=\"onChangeVoucher($event)\"\n                        label=\"Voucher\">\n                    </app-checkbox>\n                    <app-multiselect *ngIf=\"flagEnableVoucher\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Mã Voucher\"\n                        [(model)]=\"listVouchers\" [required]=\"true\"\n                        url=\"ThuNgan/GetMaVoucher?loaiVoucher={{loaiVoucher}}&yeucauTiepNhanId={{idMYCTN}}\"\n                        (openChange)=\"onOpenChange()\" (modelChange)=\"onSelectChangeVoucher($event)\"\n                        (valueChange)=\"valueChangeTheVoucher($event)\"\n                        [validationerror]=\"'ListVouchers' | validationerror:quayThuocValidationErrors\" #voucherList>\n                    </app-multiselect>\n                </div>\n            </div>\n            end thông tim voucher\n\n\n            thông tin miễm giảm thêm\n            <div fxFlex=\"{{flagEnableMGThem?'75%':'10%'}}\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-checkbox id=\"MiemGiamThem\" fxFlex=\"100%\" fxFlex.sm=\"100%\" value=\"true\"\n                        [model]=\"flagEnableMGThem\" [disabled]=\"disabledMGThem\" (modelChange)=\"onChangeMienGiam($event)\"\n                        label=\"MG thêm\">\n                    </app-checkbox>\n                </div>\n                <div *ngIf=\"flagEnableMGThem\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\"\n                    fxLayoutGap.lt-sm=\"0\">\n                    <div fxFlex=\"13%\">\n                        <mat-radio-button name=\"loaiMG\" style=\"position: absolute;z-index: 1;\" [checked]=\"soTienMgCheck\"\n                            (change)=\"onChangeLoaiMg(1)\" value=\"chon-miem-giam\">\n                            Số tiền MG <span style=\"color: red;\">*</span>\n                        </mat-radio-button>\n                        <app-textboxnumeric [(model)]=\"thongTinMienGiamThem.SoTienMG\" class=\"mb-0 pb-0\"\n                            [isFormatCurrenly]=\"true\"\n                            [validationerror]=\"'SoTienMG' | validationerror:quayThuocValidationErrors\">\n                        </app-textboxnumeric>\n                    </div>\n                    <div fxFlex=\"13%\" fxLayout.lt-sm=\"column\" fxLayoutGap.lt-sm=\"0\" *ngIf=\"!checkHiddenSoTienConLai\">\n                        <app-textboxnumeric fxFlex=\"100%\" [disabled]=\"true\" label=\"Số tiền còn lại\" class=\"green\"\n                            [isFormatCurrenly]=\"true\" [spinners]=\"false\"\n                            [(model)]=\"thongTinMienGiamThem.SoTienMGConLai\">\n                        </app-textboxnumeric>\n                    </div>\n                    <div fxFlex=\"13%\">\n                        <mat-radio-button name=\"loaiMG\" [checked]=\"tiLeMgCheck\" style=\"position: absolute;z-index: 1;\"\n                            (change)=\"onChangeLoaiMg(2)\" value=\"chon-miem-giam\">\n                            % MG <span style=\"color: red;\">*</span>\n                        </mat-radio-button>\n                        <app-textboxnumeric fxFlex=\"100%\" [disabled]=\"disabledTiLeMG\" max=\"100\"\n                            [(model)]=\"thongTinMienGiamThem.TiLeMienGiam\" class=\"mb-0 pb-0\"\n                            style=\"margin-top: 1px !important;\"\n                            [validationerror]=\"'TiLeMienGiam' | validationerror:quayThuocValidationErrors\">\n                        </app-textboxnumeric>\n                    </div>\n                    <div fxFlex=\"17%\" fxFlex.sm=\"17%\">\n                        <app-textarea id=\"MienGiamConLai\" [required]=\"true\" label=\"Lý do MG\"\n                            [(model)]=\"thongTinMienGiamThem.LyDoMiemGiam\" minHeight=\"20\"\n                            [validationerror]=\"'LyDoMienGiam' | validationerror:quayThuocValidationErrors\">\n                        </app-textarea>\n                    </div>\n                    <div fxFlex=\"27%\" fxFlex.sm=\"27%\">\n                        <app-upload id=\"Upload\" label=\"File đính kèm\" [required]=\"true\"\n                            [model]=\"thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam\"\n                            (uploadFileDone)=\"uploadFileDone($event)\"\n                            [validationerror]=\"'TaiLieuDinhKem' | validationerror:quayThuocValidationErrors\">\n                        </app-upload>\n                    </div>\n                    <app-combobox id=\"NguoiDuyet\" fxFlex=\"17%\" fxFlex.sm=\"17%\"\n                        [(model)]=\"thongTinMienGiamThem.NhanVienDuyetMienGiamThemId\"\n                        [modelText]=\"thongTinMienGiamThem.TenNhanVienDuyet\" label=\"Người duyệt\"\n                        class=\"item-no-padding\" url=\"NhanVien/GetListLookupNhanVien\">\n                    </app-combobox>\n                </div>\n            </div>\n            thông tin Áp dụng\n            <div fxFlex=\"10%\">\n                <button mat-raised-button color=\"primary\" (click)=\"onApplyMGThem()\" *ngIf=\"flagApDung==true\"\n                    class=\"mt-12\">\n                    Áp dụng\n                </button>\n            </div>\n        </div>\n    </fieldset> -->\n    <ng-template #actionTemplateSTCongNo let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric class=\"no-label\" [step]=\"100\" [(model)]=\"dataItem.SoTien\" \n             decimals=\"2\" [format]=\"format\" min=\"0.00\"\n            (keyup)=\"onKeyCongNo($event, rowIndex)\">\n        </app-textboxnumeric>\n    </ng-template>\n    <ng-template #actionTemplateSubmitCongNo let-dataItem let-rowIndex=\"rowIndex\">\n        <button color=\"primary\" mat-raised-button mat-button (click)=\"ApDungCongNo(rowIndex)\" cdkFocusInitial>Áp\n            dụng</button>\n    </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" >\n    <fieldset fxFlex=\"100%\" *ngIf=\"MaBN == null\">\n        <legend>THÔNG TIN HÀNH CHÍNH</legend>\n        <div fxFlex=\"100%\">\n            <ul class=\"inline\">\n                <li>Mã TN:\n                    <strong>{{benhnhanThongTin.MaYeuCauTiepNhan}}</strong>\n                </li>\n                <li>Mã NB:\n                    \n                    <strong>{{benhnhanThongTin.MaBN}}</strong>\n                </li>\n                <li>Họ tên:\n                    <strong>{{benhnhanThongTin.HoTen}}</strong>\n                </li>\n                <li>Giới tính:\n                    <strong>{{benhnhanThongTin.GioiTinhHienThi}}</strong>\n                </li>\n                <li>Năm sinh:\n                    <strong>{{benhnhanThongTin.NamSinh}}</strong>\n                </li>\n                <li>Địa chỉ:\n                    <strong>{{benhnhanThongTin.DiaChiDayDu}}</strong>\n                </li>\n               \n                <li>SĐT:\n                    <strong>{{benhnhanThongTin.SoDienThoai}}</strong>\n                </li>\n                <li>Email:\n                    <strong>{{benhnhanThongTin.Email}}</strong>\n                </li>\n               \n            </ul>\n        </div>\n    </fieldset>\n    <fieldset fxFlex=\"100%\" *ngIf=\"MaBN != null\">\n        <legend>THÔNG TIN HÀNH CHÍNH</legend>\n        <div fxFlex=\"100%\" >\n            <ul class=\"inline\">\n                <li>Mã NB:\n                    \n                    <strong>{{MaBN}}</strong>\n                </li>\n                <li>Họ tên:\n                    <strong>{{data.HoTen}}</strong>\n                </li>\n                <li>Giới tính:\n                    <strong>{{data.GioiTinhHienThi}}</strong>\n                </li>\n                <li>Năm sinh:\n                    <strong>{{data.NamSinh}}</strong>\n                </li>\n                <li>Địa chỉ:\n                    <strong>{{data.DiaChiDayDu}}</strong>\n                </li>\n               \n                <li>SĐT:\n                    <strong>{{data.SoDienThoai}}</strong>\n                </li>\n                <li>Email:\n                    <strong>{{data.Email}}</strong>\n                </li>\n               \n            </ul>\n        </div>\n    </fieldset>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close('No answer',1)\" tabindex=\"-1\" >\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <app-grid\n    [gridColumns]=\"gridChildColumns2\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [gridDataSource]=\"data\"\n    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n     [autoHeight]=\"true\" [pageable]=\"false\" [detailTemplate]=\"detailTemplate\">\n    </app-grid>\n    <ng-template #actionTemplate let-dataItem>\n        <div class=\"text-center\" kendoTooltip>\n            <button type=\"button\"  color=\"primary\" mat-raised-button (click)=\"close(dataItem,2)\" tabindex=\"-1\">\n                Chọn\n            </button>\n        </div>\n    </ng-template>\n    <ng-template #detailTemplate let-dataItem>\n        <app-grid baseRoute=\"\"\n                        [gridColumns]=\"gridChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                        [urlGetData]=\"urlGetDataChild\" [additionalSearchString]=\"dataItem.Id + '-' +dataItem.DateStart + '-' + dataItem.DateEnd\"\n                        [autoHeight]=\"true\" [pageable]=\"false\"  >\n                    </app-grid>\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n    <ng-template #templatePrint let-dataItem >\n        <span *ngIf=\"dataItem.DonThuocBacSiKeToa == false\">\n            <button  kendoTooltip title=\"In phiếu\"\n            (click)=\"PrinAllDonThuocBenhNhan(dataItem.DonThuocThanhToanId)\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n        </button>\n        </span>\n    </ng-template>\n    <ng-template #SoTienThuoctemplate let-dataItem>\n        <span style=\"color:red\"> {{dataItem.SoTienDisPlay}}</span>\n    </ng-template>\n    <ng-template #TinhTrangThuoctemplate let-dataItem>\n        <span style=\"color:red\" *ngIf=\"dataItem.TinhTrang =='Chưa xuất thuốc' || dataItem.TinhTrang =='Chưa thanh toán'\"> {{dataItem.TinhTrang}}</span>\n        <span style=\"color:blue\" *ngIf=\"dataItem.TinhTrang =='Đã thanh toán'\"> {{dataItem.TinhTrang}}</span>\n    </ng-template>\n</mat-dialog-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset class=\"m-0\">\n    <legend>TÌM NGƯỜI BỆNH</legend>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"300px\" fxFlex.sm=\"20%\" style=\"position: relative;\">\n            <div style=\"background-color: rgba(0, 0, 0, 0.04);height: 100%;\n            width: 100% !important;\n            border-radius: 4px 4px 0 0;\n            padding: 0.75em 0.75em 0 0.75em;\n            border-bottom: 1px solid rgba(82, 63, 105, 0.42);\">\n                <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThai($event,1)\" fxFlex=\"150px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                    [(model)]=\"kiemTraDanhSachThanhToan\" value=\"dangthanhtoan\" label=\"Chờ thanh toán\">\n                </app-checkbox>\n                <app-checkbox name=\"da-thanh-toan\" (modelChange)=\"checkTrangThai($event,2)\"\n                    [(model)]=\"kiemTraDanhSachDaThanhToan\" value=\"dathanhtoan\" fxFlex=\"150px\" fxFlex.lt-md=\"auto\"\n                    fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã thanh toán\">\n                </app-checkbox>\n            </div>\n        </div>\n        <div fxFlex=\"10%\" fxFlex.sm=\"10%\" style=\"position: relative;\">\n            <app-textbox id=\"SoTheBHYT\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Mã NB\" [(model)]=\"timKiem.MaBenhNhan\"\n                (keyup)=\"onKey($event)\" [isAutoFocus]=\"true\" (blurChange)=\"blurChange($event, true)\"\n                (modelChange)=\"searchChangeMaBN($event)\">\n            </app-textbox>\n            <button style=\"position: absolute;right: 21px;margin-top: 10px;\" (click)=\"QuetMaQRCodeClick()\"\n                color=\"primary\" mat-mini-fab type=\"button\" kendoTooltip title=\"Quét mã vạch thẻ BHYT\">\n                <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n            </button>\n\n        </div>\n        <!-- <app-textbox id=\"MaBN\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"4000\" [(model)]=\"timKiem.MaBenhNhan\"\n            label=\"Mã NB\" [validationerror]=\"'MaBN' | validationerror:validationErrors\">\n        </app-textbox> -->\n        <app-textbox id=\"MaTN\" fxFlex=\"10%\" fxFlex.sm=\"15%\" maxlength=\"4000\" [(model)]=\"timKiem.MaTiepNhan\"\n            style=\"padding-left: 10px;\" (keyup)=\"onKey($event)\" label=\"Mã TN\"\n            (modelChange)=\"searchChangeMaTN($event)\" [validationerror]=\"'MaTN' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-textbox id=\"HoTen\" fxFlex=\"15%\" fxFlex.sm=\"15%\" maxlength=\"4000\" [(model)]=\"timKiem.HoTen\"\n            style=\"padding-left: 10px;\" (keyup)=\"onKey($event)\" label=\"Họ Tên\"\n            [validationerror]=\"'HoTen' | validationerror:validationErrors\">\n        </app-textbox>\n        <!-- <app-textbox id=\"DienThoai\" fxFlex=\"10%\" fxFlex.sm=\"10%\" maxlength=\"4000\" [(model)]=\"timKiem.SoDienThoai\"\n            style=\"padding-left: 10px;\" (keyup)=\"onKey($event)\" label=\"Điện thoại\"\n            [validationerror]=\"'DienThoai' | validationerror:validationErrors\">\n        </app-textbox> -->\n        <app-textboxmask id=\"SoDienThoai\" onlynumber=\"true\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Số điện thoại\" (keyup)=\"onKey($event)\"\n                                maxlength=\"10\" [(model)]=\"timKiem.SoDienThoai\" mask=\"000 000 0000\">\n        </app-textboxmask>\n        <app-daterangepicker id=\"Daterange\" fxFlex=\"20%\" fxFlex.sm=\"20%\" (blur)=\"blur($event)\"\n            [(model)]=\"timKiem.RangeDate\" label=\"Từ ngày - Đến ngày\" (keyup)=\"onKey3($event)\"\n            (modelChange)=\"changRange($event)\">\n        </app-daterangepicker>\n        <div fxFlex=\"209px\">\n            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-5\" (click)=\"TimKiem(true)\">Tìm\n                kiếm</button>\n            <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"exportExcel()\">Xuất Excel</button>\n\n        </div>\n        <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>\n    </div>\n</fieldset>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n                    [\n                    {Title:'Nhà Thuốc',Path:'/nha-thuoc'},\n                    {Title:'Mua Toa Cũ ',Path:'',Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"card\" fxFlex=\"auto\">\n                        <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                            <app-quay-thuoc-thong-tin-hanh-chinh [MaBN]=\"id\"></app-quay-thuoc-thong-tin-hanh-chinh>\n                            <h4 class=\"sub-title\" fxFlex=\"100%\" style=\"font-weight: bold;\">Toa Thuốc Cũ</h4>\n                            <app-grid [headerTemplate]=\"headerTemplate\" [useHeaderDefault]=\"false\"\n                                [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                                [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" [useActionDefault]=\"false\"\n                                [checkboxAble]=\"true\" [detailTemplate]=\"detailTemplate\" [lazyLoadPage]=\"true\"\n                                (extCheckboxSelection)=\"extCheckboxSelection($event)\" heightToolbar=\"325\">\n                            </app-grid>\n\n                            <ng-template #detailTemplate let-dataItem>\n                                <app-grid [gridColumns]=\"gridChildColumns\" [useAddDeault]=\"false\"\n                                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                    [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataGridChild1\"\n                                    [urlGetTotalPage]=\"urlGetTotalPageGridChild1\" searchString=\"{{dataItem.Id}}\"\n                                    [autoHeight]=\"true\" [pageable]=\"false\">\n                                </app-grid>\n                            </ng-template>\n                            <ng-template #detailTemplateCT let-dataItem>\n                                <span style=\"color:red\" *ngIf=\"dataItem.LaDuocPhamBenhVien ==  false\">Dược phẩm ngoài\n                                    bệnh viện</span>\n                                <span style=\"color:blue\" *ngIf=\"dataItem.LaDuocPhamBenhVien ==  true\">Dược phẩm trong\n                                    bệnh viện</span>\n                            </ng-template>\n                            <ng-template #headerTemplate>\n                                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\"\n                                    fxLayoutGap.lt-sm=\"0\" class=\"px-2 py-3\">\n                                    <app-textbox id=\"DVKhamHienThi\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"4000\"\n                                        [(model)]=\"timKiemToaThuocCu.DVKhamHienThi\" style=\"padding-left: 10px;\"\n                                        label=\"DV Khám\" (keyup)=\"onKey($event)\">\n                                    </app-textbox>\n                                    <app-textbox id=\"ChuanDoan\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"4000\"\n                                        [(model)]=\"timKiemToaThuocCu.ChuanDoan\" style=\"padding-left: 10px;\"\n                                        label=\"Chẩn đoán\" (keyup)=\"onKey($event)\">\n                                    </app-textbox>\n                                    <app-textbox id=\"BSKham\" fxFlex=\"20%\" fxFlex.sm=\"40%\" maxlength=\"4000\"\n                                        [(model)]=\"timKiemToaThuocCu.BSKham\" style=\"padding-left: 10px;\"\n                                        label=\"BS Khám\" (keyup)=\"onKey($event)\">\n                                    </app-textbox>\n                                   \n                                    <!-- <app-datepicker id=\"NgayKham\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n                                        [(model)]=\"timKiemToaThuocCu.NgayKham\"  label=\"Ngày khám\" (keyup)=\"onKey($event)\">\n                                    </app-datepicker> -->\n                                    <app-daterangepicker id=\"Daterange\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"timKiemToaThuocCu.RangeDate\"\n                                        label=\"Từ ngày - Đến ngày\" (keyup)=\"onKey3($event)\" (modelChange)=\"changRange($event)\">\n                                    </app-daterangepicker>\n                                    <div fxFlex=\"15%\" class=\"mt-5\">\n                                        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n                                            (click)=\"TimKiem()\">Tìm kiếm</button>\n                                    </div>\n\n                                </div>\n                            </ng-template>\n\n\n\n\n\n                            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\">\n                                <button type=\"button\" mat-raised-button mat-button (click)=\"Huy()\">\n                                    Hủy\n                                </button>\n                                <button type=\"button\" color=\"primary\" mat-raised-button mat-button\n                                    (click)=\"ChonThuoc()\">\n                                    Chọn\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n</div>\n<p class=\"mb-3\"> Thực hiện in phiếu cho NB : </p>\n<app-checkbox id=\"InPhieuThu\" [(model)]=\"thongTin.InPhieuThu\" label=\"In phiếu thu\" class=\"pb-0\"></app-checkbox>\n<app-checkbox id=\"InBangKe\" [(model)]=\"thongTin.InBangKe\" label=\"In bảng kê thuốc\" class=\"pb-0\"></app-checkbox>\n<div style=\"float: right;\">\n    <button type=\"button\"  mat-raised-button mat-button class=\"mr-1 mt-2\"\n    (click)=\"close('No answer')\">Không</button>\n    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n    (click)=\"close('In')\">In</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.html":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.html ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n</div>\n<p class=\"mb-3\" *ngIf=\"dataItem.Model != null\"> Người bệnh này chưa có phát sinh đơn thuốc nào. Bạn có muốn bán thuốc cho người bệnh này như khách vãng lai hay không?  </p>\n<p class=\"mb-3\" *ngIf=\"dataItem.Model == null\"> Không tìm thấy người bệnh này trong hệ thống. Bạn có muốn bán thuốc cho người bệnh này như khách vãng lai hay không?  </p>\n<div style=\"float: right;\">\n    <button type=\"button\"  mat-raised-button mat-button class=\"mr-1 mt-2\"\n    (click)=\"close(1)\">Không</button>\n    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n    (click)=\"close(2)\">Có</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close('No answer')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<p> Bạn chắc chắn muốn thu của người bệnh <b>{{tenBenhNhan}}</b> với số tiền <b>{{soTien| number:'0.2-2':'vi-VN'}}</b> hay không?\n</p>\n<div style=\"float: right;\">\n    <button type=\"button\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"close('No answer')\">Không</button>\n    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n        (click)=\"close('Yes')\">Có</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"phieu-thu\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\t<fieldset fxFlex=\"100%\" style=\"padding: 0 !important\">\n\t\t<div class=\"mt-1\" fxFlex=\"100%\">\n\t\t\t<ul fxFlex=\"100%\">\n\t\t\t\t<li>\n\t\t\t\t\t<app-combobox id=\"ten-pttt\" fxFlex=\"30%\" fxFlex.sm=\"30%\" [data]=\"dataSoPhieus\" label=\"Số phiếu\"\n\t\t\t\t\t\t(selectionChange)=\"selectionChangeSoPhieu($event)\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n\t\t\t\t\t\t[(model)]=\"thongTinSoPhieuDaThu.SoPhieuId\" [modelText]=\"thongTinSoPhieuDaThu.TenSoPhieu\"\n\t\t\t\t\t\t[template]=\"soPhieuTemplate\" [templateHeader]=\"soPhieuTemplateHeader\" [popupSettings]=\"null\"\n\t\t\t\t\t\tclass=\"pb-0\">\n\t\t\t\t\t\t<ng-template #soPhieuTemplateHeader let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"50%\">Loại phiếu</th>\n\t\t\t\t\t\t\t\t\t<th width=\"50%\">Tình trạng</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template #soPhieuTemplate let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\"50%\">{{dataItem.DisplayName}}</td>\n\t\t\t\t\t\t\t\t\t<td width=\"50%\" *ngIf=\"dataItem.TinhTrang === trangThaiThuTienBenhNhan.Huy \">\n\t\t\t\t\t\t\t\t\t\t<strong style=\"color: red\"> {{dataItem.TinhTrang}}</strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width=\"50%\" *ngIf=\"dataItem.TinhTrang !== trangThaiThuTienBenhNhan.Huy \">\n\t\t\t\t\t\t\t\t\t\t<strong style=\"color: green\"> {{dataItem.TinhTrang}}</strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</app-combobox>\n\t\t\t\t\t<fieldset fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"ml-3\"\n\t\t\t\t\t\tstyle=\"padding: 13px;flex: 1 1 100%;box-sizing: border-box;max-width: 100%;\"\n\t\t\t\t\t\t*ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null\">\n\t\t\t\t\t\t<div class=\"mt-1\">\n\t\t\t\t\t\t\t<ul class=\"inline\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tLoại phiếu:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.LoaiPhieu}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tTình trạng:\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinSoPhieuDaThu.TinhTrang === trangThaiThuTienBenhNhan.Huy\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: red\"> {{thongTinSoPhieuDaThu.TinhTrang}} </strong>\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green\"> {{thongTinSoPhieuDaThu.TinhTrang}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.TinhTrang === trangThaiThuTienBenhNhan.Huy\">\n\t\t\t\t\t\t\t\t\tNgười hủy:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NhanVienHuyPhieu}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.TinhTrang === trangThaiThuTienBenhNhan.Huy\">\n\t\t\t\t\t\t\t\t\tNgày hủy:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NgayHuyStr}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null \n                                && ((thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi)\n                                && thongTinSoPhieuDaThu.TinhTrang === trangThaiThuTienBenhNhan.Huy)\">\n\t\t\t\t\t\t\t\t\t<span>Thu hồi: </span>\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinSoPhieuDaThu.DaThuHoi\"> Rồi </strong>\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"!thongTinSoPhieuDaThu.DaThuHoi\">\n\t\t\t\t\t\t\t\t\t\tChưa\n\t\t\t\t\t\t\t\t\t\t<mat-icon [icIcon]=\"icEdit\" style=\"transform: scale(0.8)\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"huyPhieuThu(thongTinSoPhieuDaThu ,true)\"> </mat-icon>\n\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.DaThuHoi\">\n\t\t\t\t\t\t\t\t\tNgười thu hồi:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NguoiThuHoi}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.DaThuHoi\">\n\t\t\t\t\t\t\t\t\tNgày thu:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NgayThuStr}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</fieldset>\n\t<fieldset fxFlex=\"100%\" class=\"mb-1\">\n\t\t<div class=\"mt-1 ml-1\">\n\t\t\t<ul class=\"inline\" *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null && \n            thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi\">\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null\">\n\t\t\t\t\tTổng số tiền:\n\t\t\t\t\t<strong style=\"color: red\"> {{thongTinSoPhieuDaThu.TongChiPhi | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tBHYT TT:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.BHYTThanhToan | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tMiễm giảm:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.MienGiam | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tBệnh nhân TT:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.BenhNhanThanhToan | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t\t(<span>Tiền mặt: </span> <strong> {{thongTinSoPhieuDaThu.TienMat| number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t\t<span>Chuyển khoản: </span> <strong> {{thongTinSoPhieuDaThu.ChuyenKhoan| number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t</strong> <span>POS: </span> <strong> {{thongTinSoPhieuDaThu.Pos| number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t\t<span>Công nợ: </span> <strong> {{thongTinSoPhieuDaThu.CongNo| number:'0.2-2':'vi-VN'}} </strong>)\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"mt-1 ml-1\">\n\t\t\t<ul class=\"inline\" *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi\">\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null\">\n\t\t\t\t\tSố tiền:\n\t\t\t\t\t<strong style=\"color: red\"> {{thongTinSoPhieuDaThu.SoTien| number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.NgayThuStr != null\">\n\t\t\t\t\tNgày thu:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NgayThuStr}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.NoiDungThu != null\">\n\t\t\t\t\tNội dung thu:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NoiDungThu}} </strong>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</fieldset>\n\n\t<fieldset fxFlex=\"100%\" class=\"mb-1\"\n\t\t*ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi\">\n\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t<kendo-grid [data]=\"thongTinSoPhieuDaThu.DanhSachThuPhis\" [resizable]=\"true\"\n\t\t\t\t[selectable]=\"{enabled: true, checkboxOnly: true}\" class=\"grid-custom\" id=\"danhSachDaThuTienGrid\"\n\t\t\t\theight=\"500\">\n\t\t\t\t<kendo-grid-column field=\"\" title=\"\" width=\"25\" [style]=\"{'text-align': 'center'}\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'center'}\"> </kendo-grid-column>\n\t\t\t\t<kendo-grid-column field=\"\" title=\"#\" width=\"15\" [style]=\"{'text-align': 'center'}\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'center'}\">\n\t\t\t\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\"> {{rowIndex + 1}}\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kendo-grid-column>\t\t\t\t\n\t\t\t\t<kendo-grid-column field=\"Nhom\" title=\"Nhóm\" width=\"50\" [hidden]=\"true\" [style]=\"{'text-align': 'left'}\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'center'}\" class=\"k-grouping-row p\">\n\t\t\t\t\t<ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\"> {{value}}\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kendo-grid-column>\n\t\t\t\t<kendo-grid-column field=\"TenDichVu\" title=\"Tên Dịch Vụ\" width=\"100\" [style]=\"{'text-align': 'left'}\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'center'}\">\n\t\t\t\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t\t\t\t<span kendoTooltip title=\"{{dataItem.TenDichVu}}\"> {{dataItem.TenDichVu}} </span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n\t\t\t\t\t\t<div class=\"text-center\" style=\"font-weight: bold;color:#000;\" kendoTooltip\n\t\t\t\t\t\t\ttitle=\"Tổng cộng DV đang chọn\">Tổng cộng:</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kendo-grid-column>\n\t\t\t\t<kendo-grid-column field=\"Soluong\" title=\"Số Lượng\" width=\"60\" [style]=\"{'text-align': 'right'}\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'center'}\"> </kendo-grid-column>\n\t\t\t\t<kendo-grid-column field=\"DonGia\" title=\"Đơn Giá\" width=\"90\" [style]=\"{'text-align': 'right'}\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'right'}\">\n\t\t\t\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t\t\t\t<div class=\"float_right\">{{ dataItem.DonGia | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kendo-grid-column>\n\t\t\t\t<kendo-grid-column field=\"ThanhTien\" title=\"Thành Tiền\" width=\"100\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'right'}\">\n\t\t\t\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t\t\t\t<div class=\"float_right\">{{ dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t\t\t\t<div class=\"float_right\">{{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\"\n\t\t\t\t\t\tstyle=\"text-align: center\">\n\t\t\t\t\t\t<span class=\"float_right\">{{total('ThanhTien') | number:'0.2-2':'vi-VN'}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kendo-grid-column>\n\t\t\t\t<kendo-grid-column field=\"BHYTThanhToan\" title=\"BHYT TT\" width=\"100\" [style]=\"{'text-align': 'right'}\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'right'}\">\n\t\t\t\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t\t\t\t<div class=\"float_right\">{{ dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t\t\t\t<div class=\"float_right\">{{aggregates.BHYTThanhToan.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\"\n\t\t\t\t\t\tstyle=\"text-align: right\">\n\t\t\t\t\t\t<span style=\"float: right;\">{{total('BHYTThanhToan') | number:'0.2-2':'vi-VN'}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kendo-grid-column>\n\t\t\t\t<kendo-grid-column width=\"90\" [style]=\"{'text-align': 'right'}\" title=\"Tổng công nợ\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'right'}\">\n\t\t\t\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t\t\t\t<div class=\"float_right\">{{ dataItem.TongCongNo | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t\t\t\t<div class=\"float_right\">{{aggregates.TongCongNo.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\"\n\t\t\t\t\t\tstyle=\"text-align: center\">\n\t\t\t\t\t\t<span style=\"float:right;\">{{total('TongCongNo') | number:'0.2-2':'vi-VN'}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kendo-grid-column>\n\t\t\t\t<kendo-grid-column field=\"SoTienMG\" title=\"Số tiền MG\" width=\"120\" [style]=\"{'text-align': 'right'}\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'right'}\">\n\t\t\t\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t\t\t\t<div class=\"float_right\">\n\t\t\t\t\t\t\t<div inline=\"true\">\n\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\"\n\t\t\t\t\t\t\t\t\tkendoTooltip>\n\t\t\t\t\t\t\t\t\t<span style=\"float:right;\">{{ dataItem.SoTienMG | number:'0.2-2':'vi-VN'}}</span>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t\t\t\t<div class=\"float_right\">{{aggregates.SoTienMG.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\"\n\t\t\t\t\t\tstyle=\"text-align: center\">\n\t\t\t\t\t\t<span style=\"float:right;\">{{total('SoTienMG') | number:'0.2-2':'vi-VN'}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kendo-grid-column>\n\t\t\t\t<kendo-grid-column field=\"DaThanhToan\" title=\"Đã TT\" width=\"100\" [style]=\"{'text-align': 'right'}\"\n\t\t\t\t\t[headerStyle]=\"{'text-align': 'right'}\">\n\t\t\t\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t\t\t\t<div class=\"float_right\">{{ dataItem.DaThanhToan | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t\t\t\t<div class=\"float_right\">{{aggregates.DaThanhToan.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n\t\t\t\t\t\t<span style=\"float: right;\">{{total('DaThanhToan') | number:'0.2-2':'vi-VN'}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kendo-grid-column>\n\t\t\t\t<kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n\t\t\t\t\tdetailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\"> </kendo-grid-messages>\n\t\t\t</kendo-grid>\n\n\t\t</div>\n\t</fieldset>\n</div>\n<div *ngIf=\"thongTinSoPhieuDaThu.SoPhieuId != null\" class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n\t<button (click)=\"phieuIn()\" color=\"primary\" mat-raised-button class=\"mr-2\">Phiếu in</button>\n\t<button style=\"margin-top: 10px;\"\n\t\t*ngIf=\"thongTinSoPhieuDaThu.ConHanHuyPhieuThu && \n\t\t    ((thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi && thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy))\"\n\t\ttype=\"button\" (click)=\"huyPhieuThu(thongTinSoPhieuDaThu, false)\" color=\"warn\" mat-raised-button>\n\t\tHủy phiếu thu\n\t</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\t<div style=\"text-transform: uppercase\">Kết quả phiếu ({{arrFileUrl.length}} file)</div>\n\t<button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n\t\t<mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n\t</button>\n</div>\n<mat-dialog-content style=\"height: 550px\">\n\t<div class=\"container-iframe\">\n\t\t<ng-container [ngSwitch]=\"arrFileUrl.length > 0\">\n\t\t\t<div *ngSwitchCase=\"true\">\n\t\t\t\t<ng-container *ngFor=\"let item of arrFileUrl, let i = index\">\n\t\t\t\t\t<iframe id=\"{{i}}\" width=\"100%\" height=\"550px\" frameborder=\"0\" [src]=\"item | safe\" type=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\" style=\"display: none\" onload=\"this.style.display = 'block';\"></iframe>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<div *ngSwitchDefault>Không có dữ liệu</div>\n\t\t</ng-container>\n\t</div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n\t<button type=\"button\" style=\"margin-left: auto\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n\t<button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải tất cả</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\t<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n\t\t<div>XÁC NHẬN HỦY XUẤT THUỐC</div>\n\t\t<button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n\t\t\t<mat-icon [icIcon]=\"icClose\"></mat-icon>\n\t\t</button>\n\t</div>\n\t<mat-dialog-content style=\"overflow: hidden\"  style=\"height: 250px;\">\n\t\tBạn chắc chắn muốn hủy xuất thuốc của phiếu thu phải không?\n\n\t\t<div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"py-1\">\n\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t<fieldset class=\"row ml-1\" fxFlex=\"100%\">\n\t\t\t\t\t<table class=\"table table-border\" width=\"700px\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width=\"{{huyXuatThuocTrongNgay.ThuHoiPhieu?'13%':'30%'}}\">Nếu phải:</td>\n\t\t\t\t\t\t\t<td width=\"{{huyXuatThuocTrongNgay.ThuHoiPhieu?'25%':'100%'}}\">\n\t\t\t\t\t\t\t\t<app-radio id=\"thuhoiphieu\" label=\"Thu hồi phiếu\" required=\"true\"\n\t\t\t\t\t\t\t\t [(model)]=\"huyXuatThuocTrongNgay.ThuHoiPhieu\" (modelChange)=\"modelChangeThuHoiPhieu($event)\" \n\t\t\t\t\t\t\t\t [items]=\"[{Value:true,Text:'Rồi'},{Value:false,Text:'Chưa'}]\" \n\t\t\t\t\t\t\t\t [validationerror]=\"'ThuHoiPhieu' | validationerror:validationErrors\"> </app-radio>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"30%\">\n\t\t\t\t\t\t\t\t<app-combobox *ngIf=\"huyXuatThuocTrongNgay.ThuHoiPhieu\" [popupSettings]=\"null\" id=\"nguoithuhoi\" label=\"Người thu hồi\" [(model)]=\"huyXuatThuocTrongNgay.NguoiThuHoiId\" [(modelText)]=\"huyXuatThuocTrongNgay.TenNguoiThuHoi\" url=\"NhanVien/GetListLookupNhanVien\" required=\"true\" [validationerror]=\"'NguoiThuHoiId' | validationerror:validationErrors\"> </app-combobox>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"25%\">\n\t\t\t\t\t\t\t\t<app-datetimepicker *ngIf=\"huyXuatThuocTrongNgay.ThuHoiPhieu\" [(model)]=\"huyXuatThuocTrongNgay.ThoiGianThuHoi\" id=\"thuhoiluc\" label=\"Thu hồi Lúc\" required=\"true\" [validationerror]=\"'ThoiGianThuHoi' | validationerror:validationErrors\"> </app-datetimepicker>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"row ml-1\" fxFlex=\"100%\">\n\t\t\t\t\t<app-textarea max=\"4000\" [minHeight]=\"60\" [(model)]=\"huyXuatThuocTrongNgay.LyDo\" id=\"ly-do\" class=\"item-no-padding\" fxFlex=\"100%\" required=\"true\" fxFlex.sm=\"100%\" label=\"Lý do\" [validationerror]=\"'LyDo' | validationerror:validationErrors\"> </app-textarea>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\t</mat-dialog-content>\n</div>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n\t<button mat-button mat-dialog-close>Không</button>\n\t<button mat-raised-button mat-button (click)=\"xacNhanThongTinHuy()\" color=\"primary\" cdkFocusInitial>Có</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!thuHoiPhieu\">\n\t<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n\t\t<div>XÁC NHẬN HỦY PHIẾU THU</div>\n\t\t<button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n\t\t\t<mat-icon [icIcon]=\"icClose\"></mat-icon>\n\t\t</button>\n\t</div>\n\t<mat-dialog-content style=\"overflow: hidden\"  style=\"height: 250px;\">\n\t\tBạn chắc chắn muốn hủy phiếu thu {{thongTinHuyPhieu.TenSoPhieu}} phải không?\n\t\t<div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"py-1\">\n\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t<fieldset class=\"row ml-1\" fxFlex=\"100%\">\n\t\t\t\t\t<table class=\"table table-border\" width=\"700px\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width=\"{{thongTinHuyPhieu.ThuHoiPhieu?'13%':'30%'}}\">Nếu phải:</td>\n\t\t\t\t\t\t\t<td width=\"{{thongTinHuyPhieu.ThuHoiPhieu?'25%':'100%'}}\">\n\t\t\t\t\t\t\t\t<app-radio id=\"thuhoiphieu\" label=\"Thu hồi phiếu\" required=\"true\"\n\t\t\t\t\t\t\t\t [(model)]=\"thongTinHuyPhieu.ThuHoiPhieu\" (modelChange)=\"modelChangeThuHoiPhieu($event)\" \n\t\t\t\t\t\t\t\t [items]=\"[{Value:true,Text:'Rồi'},{Value:false,Text:'Chưa'}]\" \n\t\t\t\t\t\t\t\t [validationerror]=\"'ThuHoiPhieu' | validationerror:validationErrors\"> </app-radio>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"30%\">\n\t\t\t\t\t\t\t\t<app-combobox *ngIf=\"thongTinHuyPhieu.ThuHoiPhieu\" [popupSettings]=\"null\" id=\"nguoithuhoi\" label=\"Người thu hồi\" [(model)]=\"thongTinHuyPhieu.NguoiThuHoiId\" [(modelText)]=\"thongTinHuyPhieu.TenNguoiThuHoi\" url=\"NhanVien/GetListLookupNhanVien\" required=\"true\" [validationerror]=\"'NguoiThuHoiId' | validationerror:validationErrors\"> </app-combobox>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"25%\">\n\t\t\t\t\t\t\t\t<app-datetimepicker *ngIf=\"thongTinHuyPhieu.ThuHoiPhieu\" [(model)]=\"thongTinHuyPhieu.ThoiGianThuHoi\" id=\"thuhoiluc\" label=\"Thu hồi Lúc\" required=\"true\" [validationerror]=\"'ThoiGianThuHoi' | validationerror:validationErrors\"> </app-datetimepicker>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"row ml-1\" fxFlex=\"100%\">\n\t\t\t\t\t<app-textarea max=\"4000\" [minHeight]=\"60\" [(model)]=\"thongTinHuyPhieu.LyDo\" id=\"ly-do\" class=\"item-no-padding\" fxFlex=\"100%\" required=\"true\" fxFlex.sm=\"100%\" label=\"Lý do\" [validationerror]=\"'LyDo' | validationerror:validationErrors\"> </app-textarea>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\t</mat-dialog-content>\n</div>\n\n<div *ngIf=\"thuHoiPhieu\">\n\t<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n\t\t<div>CẬP NHẬT THU HỒI PHIẾU THU</div>\n\t\t<button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n\t\t\t<mat-icon [icIcon]=\"icClose\"></mat-icon>\n\t\t</button>\n\t</div>\n\t<mat-dialog-content style=\"overflow: hidden\"  style=\"height: 250px;\">\n\t\t<div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"py-1\">\n\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t<fieldset class=\"row ml-1\" fxFlex=\"100%\">\n\t\t\t\t\t<table class=\"table table-border\" width=\"700px\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width=\"30%\">\n\t\t\t\t\t\t\t\t<app-combobox [popupSettings]=\"null\" id=\"nguoithuhoi\" label=\"Người thu hồi\" [(model)]=\"thongTinHuyPhieu.NguoiThuHoiId\" [(modelText)]=\"thongTinHuyPhieu.TenNguoiThuHoi\" url=\"NhanVien/GetListLookupNhanVien\" required=\"true\" [validationerror]=\"'NguoiThuHoiId' | validationerror:validationErrors\"> </app-combobox>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"25%\">\n\t\t\t\t\t\t\t\t<app-datetimepicker [(model)]=\"thongTinHuyPhieu.ThoiGianThuHoi\" id=\"thuhoiluc\" label=\"Thu hồi Lúc\" required=\"true\" [validationerror]=\"'ThoiGianThuHoi' | validationerror:validationErrors\"> </app-datetimepicker>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"row ml-1\" fxFlex=\"100%\">\n\t\t\t\t\t<app-textarea max=\"4000\" [minHeight]=\"60\"  [(model)]=\"thongTinHuyPhieu.LyDo\" id=\"ly-do\" class=\"item-no-padding\" fxFlex=\"100%\" required=\"true\" fxFlex.sm=\"100%\" label=\"Lý do\" [validationerror]=\"'LyDo' | validationerror:validationErrors\"> </app-textarea>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\t</mat-dialog-content>\n</div>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n\t<button mat-button mat-dialog-close>Không</button>\n\t<button mat-raised-button mat-button (click)=\"xacNhanThongTinHuy()\" color=\"primary\" cdkFocusInitial>Có</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.scss ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nheight_table {\n  height: 60px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvYXAtZHVuZy1taWVtLWdpYW0tY2hvLXR1bmctbG9haS10aHVvYy1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXGFwLWR1bmctbWllbS1naWFtLWNoby10dW5nLWxvYWktdGh1b2MtcG9wdXBcXGFwLWR1bmctbWllbS1naWFtLWNoby10dW5nLWxvYWktdGh1b2MtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL2FwLWR1bmctbWllbS1naWFtLWNoby10dW5nLWxvYWktdGh1b2MtcG9wdXAvYXAtZHVuZy1taWVtLWdpYW0tY2hvLXR1bmctbG9haS10aHVvYy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vcXVheS10aHVvYy9hcC1kdW5nLW1pZW0tZ2lhbS1jaG8tdHVuZy1sb2FpLXRodW9jLXBvcHVwL2FwLWR1bmctbWllbS1naWFtLWNoby10dW5nLWxvYWktdGh1b2MtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWlnaHRfdGFibGUge1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWlnaHRfdGFibGUge1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ApDungMiemGiamChoTungLoaiThuocPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApDungMiemGiamChoTungLoaiThuocPopupComponent", function() { return ApDungMiemGiamChoTungLoaiThuocPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);








let ApDungMiemGiamChoTungLoaiThuocPopupComponent = class ApDungMiemGiamChoTungLoaiThuocPopupComponent {
    constructor(data, sanitizer, notificationService, dialogRef, cdRef) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.notificationService = notificationService;
        this.dialogRef = dialogRef;
        this.cdRef = cdRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.maxSoTienMiemGiamThem = 0;
        this.maxPhanTramMiemGiamThem = 0;
        this.disablePhanTram = false;
        this.disableSoTien = false;
        this.disableInputPhanTram = false;
        this.disableInputSoTien = false;
        this.tenDichVu = null;
        this.tongTienTungDichVu = 0;
        this.tongSoTienDuocMiemGiam = 0;
        this.loaiMienGiam = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_6__["LoaiMienGiam"];
        this.loaiChietKhau = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_6__["LoaiChietKhau"];
        this.tongTatCaSoTienMg = 0;
        this.danhSachMienGiamVos = [];
        this.isView = false;
        this.format = 'n2';
        this.tiLeBanDau = 0;
        this.soTienBanDau = 0;
        this.kiemTraThayDoiSoTienTiLe = false;
        this.firstApDungDauTien = false;
        this.tamdanhSachChiPhi = {};
        this.changeTien = false;
    }
    ngOnInit() {
        this.tamdanhSachChiPhi = JSON.parse(JSON.stringify(this.data.dataItem));
        this.danhSachChiPhi = Object.assign({}, this.data.dataItem);
        this.bindCheckboxMienGiamThem(this.data.dataItem);
        this.danhSachTam = JSON.parse(JSON.stringify(this.data.dataItem));
        ;
        this.tongTienTungDichVu = this.soTienTruocKhiMiemGiam();
        this.tongTienTungDichVu = this.tongTienTungDichVu < 0 ? 0 : this.tongTienTungDichVu;
        if (this.danhSachChiPhi.DanhSachMienGiamVos != null) {
            this.tinhSoTienMiemGiam(this.danhSachChiPhi);
        }
        this.tenDichVu = this.data.dataItem.TenDichVu;
    }
    resetLaiTongSoTienMG() {
        this.data.dataItem.DanhSachMienGiamVos.forEach((item) => {
            item.TongTienMiemGiam = 0;
        });
    }
    soTienTruocKhiMiemGiam() {
        let thanhTien = this.data.dataItem.DonGia * this.data.dataItem.SoLuongMua;
        let soTienCongNo = 0;
        if (this.data.dataItem.DanhSachCongNoChoThus != undefined && this.data.dataItem.DanhSachCongNoChoThus.length > 0) {
            this.data.dataItem.DanhSachCongNoChoThus.forEach(item => {
                soTienCongNo = soTienCongNo + item.SoTienCongNoChoThu;
            });
        }
        return thanhTien - soTienCongNo;
    }
    changePhanTram(ev, item) {
        if (ev != undefined && ev != null) {
            item.TiLe = ev;
        }
        else {
            item.TiLe = 0;
            item.TongTienMiemGiam = 0;
        }
        this.tinhSoTienMiemGiamTiLe(this.danhSachChiPhi);
    }
    changeSoTien(ev, item) {
        if (ev != undefined && ev != null) {
            item.SoTien = ev;
        }
        else {
            item.SoTien = 0;
            item.TongTienMiemGiam = 0;
        }
        this.tinhSoTienMiemGiamSoTienMGT(this.danhSachChiPhi);
    }
    kiemTraTiLeVaSoTien() {
        this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
            if (element.LoaiMienGiam === 3) {
                if (this.firstApDungDauTien && element.TiLe === this.tiLeBanDau && element.SoTien === this.soTienBanDau) {
                    this.kiemTraThayDoiSoTienTiLe = true;
                }
            }
        });
    }
    apDungPhanTram(ev, item) {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        this.disableInputPhanTram = ev;
        this.firstApDungDauTien = true;
        this.kiemTraTiLeVaSoTien();
        this.data.dataItem = Object.assign({}, this.danhSachChiPhi);
        if (!ev) {
            item.TiLe = 0;
            item.TongTienMiemGiam = 0;
        }
        this.tinhSoTienMiemGiamTiLe(this.danhSachChiPhi);
    }
    apDungSoTien(ev, item) {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        this.disableInputSoTien = ev;
        this.firstApDungDauTien = true;
        this.kiemTraTiLeVaSoTien();
        this.data.dataItem = Object.assign({}, this.danhSachChiPhi);
        if (!ev) {
            item.SoTien = 0;
            item.TongTienMiemGiam = 0;
        }
        this.tinhSoTienMiemGiamSoTienMGT(this.danhSachChiPhi);
    }
    resetPhanTram() {
        this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
            if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 1) {
                element.TiLe = 0;
                element.TongTienMiemGiam = 0;
            }
        });
    }
    resetSoTien() {
        this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
            if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 2) {
                element.SoTien = 0;
                element.TongTienMiemGiam = 0;
            }
        });
    }
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, "g"), replace);
    }
    resetMGT() {
        this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
            if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 1) {
                element.TiLe = 0;
                element.TongTienMiemGiam = 0;
            }
            if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 2) {
                element.SoTien = 0;
                element.TongTieMiemGiam = 0;
            }
        });
    }
    close() {
        this.tamdanhSachChiPhi.apdungMGTThanhCong = false;
        this.dialogRef.close(this.tamdanhSachChiPhi);
    }
    HuyApDungMGT() {
        this.tamdanhSachChiPhi.apdungMGTThanhCong = false;
        this.dialogRef.close(this.tamdanhSachChiPhi);
    }
    ApDungMGT() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
            if (this.disableInputPhanTram && element.LoaiMienGiam === 3 && element.LoaiChietKhau == 1 && (element.TiLe === undefined || element.TiLe === null || element.TiLe === 0)) {
                this.validationErrors.push({
                    Message: "Vui lòng nhập tỉ lệ miễn giảm.",
                    Field: "TiLe",
                });
            }
            if (this.disableInputSoTien && element.LoaiMienGiam === 3 && element.LoaiChietKhau == 2 && (element.SoTien === undefined || element.SoTien === null || element.SoTien === 0)) {
                this.validationErrors.push({
                    Message: "Vui lòng nhập số tiền miễn giảm.",
                    Field: "SoTien",
                });
            }
        });
        if (this.validationErrors.length > 0) {
            return false;
        }
        else {
            if (this.disableInputPhanTram || this.disableInputSoTien || this.kiemTraThayDoiSoTienTiLe) {
                this.data.dataItem.apdungMGTThanhCong = true;
            }
            else {
                this.data.dataItem.apdungMGTThanhCong = false;
            }
            if (this.tongTatCaSoTienMg > this.tongTienTungDichVu) {
                this.notificationService.showError("Tổng số tiền miễn giảm lớn hơn số tiền miễn giảm thực tế.");
            }
            else {
                this.dialogRef.close(this.data.dataItem);
            }
        }
    }
    tinhSoTienMiemGiamTiLe(dataItem) {
        this.tongTatCaSoTienMg = 0;
        var tiLePhanTramConLai = 100;
        if (this.tongTienTungDichVu !== 0) {
            var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
            var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2 && item.SoTien != 0);
            dsMienGiamTheoSoTien.forEach(item => {
                this.tongTatCaSoTienMg += item.TongTienMiemGiam;
            });
            if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
                //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
                dsMienGiamTheoPhanTram = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](dsMienGiamTheoPhanTram, 'LoaiMienGiam');
                dsMienGiamTheoPhanTram.forEach(item => {
                    //Nếu tỉ lệ còn lại sau khi đổ từ trên xuống          
                    item.TongTienMiemGiam = this.tongTienTungDichVu !== 0 ? (item.TiLe * this.tongTienTungDichVu) / 100 : 0;
                    this.tongTatCaSoTienMg += item.TongTienMiemGiam;
                    if (item.TiLe >= tiLePhanTramConLai) {
                        tiLePhanTramConLai = 0;
                    }
                    else {
                        tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
                    }
                });
            }
        }
    }
    tinhSoTienMiemGiamSoTienMGT(dataItem) {
        this.tongTatCaSoTienMg = 0;
        var soTienConLai = this.tongTienTungDichVu;
        if (this.tongTienTungDichVu !== 0) {
            var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2 && item.SoTien != 0);
            var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
            dsMienGiamTheoPhanTram.forEach(item => {
                this.tongTatCaSoTienMg += item.TongTienMiemGiam;
            });
            if (dsMienGiamTheoSoTien != null && dsMienGiamTheoSoTien.length > 0) {
                //miễm giảm sô tiền nhâp thoải mái
                dsMienGiamTheoSoTien = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](dsMienGiamTheoSoTien, 'LoaiMienGiam');
                dsMienGiamTheoSoTien.forEach(item => {
                    if (item.SoTien >= soTienConLai) {
                        soTienConLai = 0;
                    }
                    else {
                        soTienConLai = soTienConLai - item.SoTien;
                    }
                    item.TongTienMiemGiam = this.tongTienTungDichVu !== 0 ? item.SoTien : 0;
                    this.tongTatCaSoTienMg += item.TongTienMiemGiam;
                });
            }
        }
    }
    tinhSoTienMiemGiam(dataItem) {
        this.tongTatCaSoTienMg = 0;
        var tiLePhanTramConLai = 100;
        var soTienConLai = this.tongTienTungDichVu;
        var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
        var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2 && item.SoTien != 0);
        if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
            //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
            dsMienGiamTheoPhanTram = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](dsMienGiamTheoPhanTram, 'LoaiMienGiam');
            dsMienGiamTheoPhanTram.forEach(item => {
                //Nếu tỉ lệ còn lại sau khi đổ từ trên xuống
                if (tiLePhanTramConLai > 0) {
                    item.TiLe = item.TiLe > tiLePhanTramConLai ? tiLePhanTramConLai : item.TiLe;
                }
                else {
                    item.TiLe = 0;
                }
                item.TongTienMiemGiam = this.tongTienTungDichVu !== 0 ? (item.TiLe * this.tongTienTungDichVu) / 100 : 0;
                this.tongTatCaSoTienMg += item.TongTienMiemGiam;
                if (item.TiLe >= tiLePhanTramConLai) {
                    tiLePhanTramConLai = 0;
                }
                else {
                    tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
                }
            });
        }
        if (tiLePhanTramConLai > 0 && dsMienGiamTheoSoTien != null && dsMienGiamTheoSoTien.length > 0) {
            tiLePhanTramConLai = dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0 ? tiLePhanTramConLai : 0;
            soTienConLai = tiLePhanTramConLai != 0 ? ((dataItem.ThanhTien * tiLePhanTramConLai) / 100) : dataItem.ThanhTien;
            //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
            dsMienGiamTheoSoTien = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](dsMienGiamTheoSoTien, 'LoaiMienGiam');
            dsMienGiamTheoSoTien.forEach(item => {
                //Nếu số tiền còn lại sau khi đổ từ trên xuống
                if (soTienConLai > 0) {
                    item.SoTien = item.SoTien > soTienConLai ? soTienConLai : item.SoTien;
                }
                else {
                    item.SoTien = 0;
                }
                item.TongTienMiemGiam = this.tongTienTungDichVu !== 0 ? item.SoTien : 0;
                this.tongTatCaSoTienMg += item.TongTienMiemGiam;
                if (item.SoTien >= soTienConLai) {
                    soTienConLai = 0;
                }
                else {
                    soTienConLai = soTienConLai - item.SoTien;
                }
            });
        }
    }
    //=====================Xử lý miễn giảm thêm bind giá trị miễm giám thêm và checkbox =================================     
    bindCheckboxMienGiamThem(dataItem) {
        if (dataItem.DanhSachMienGiamVos != null) {
            dataItem.DanhSachMienGiamVos.filter(item => item.LoaiMienGiam === 3).forEach(item => {
                if (item.LoaiChietKhau === this.loaiChietKhau.ChietKhauTheoTiLe) {
                    if (item.TiLe != null && item.TiLe != 0) {
                        this.disablePhanTram = true;
                        this.disableInputPhanTram = true;
                        this.tiLeBanDau = item.TiLe;
                    }
                    else {
                        this.disablePhanTram = false;
                        this.disableInputPhanTram = false;
                        item.TongTienMiemGiam = 0;
                    }
                }
                if (item.LoaiChietKhau === this.loaiChietKhau.ChietKhauTheoSoTien) {
                    if (item.SoTien != null && item.SoTien != 0) {
                        this.disableSoTien = true;
                        this.disableInputSoTien = true;
                        this.soTienBanDau = item.SoTien;
                    }
                    else {
                        this.disableSoTien = false;
                        this.disableInputSoTien = false;
                        item.TongTienMiemGiam = 0;
                    }
                }
            });
        }
    }
};
ApDungMiemGiamChoTungLoaiThuocPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ApDungMiemGiamChoTungLoaiThuocPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ap-dung-miem-giam-cho-tung-loai-thuoc-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.scss */ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ApDungMiemGiamChoTungLoaiThuocPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvYXAtZHVuZy1taWVtLWdpYW0tdGhlbS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXGFwLWR1bmctbWllbS1naWFtLXRoZW0tcG9wdXBcXGFwLWR1bmctbWllbS1naWFtLXRoZW0tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL2FwLWR1bmctbWllbS1naWFtLXRoZW0tcG9wdXAvYXAtZHVuZy1taWVtLWdpYW0tdGhlbS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL2FwLWR1bmctbWllbS1naWFtLXRoZW0tcG9wdXAvYXAtZHVuZy1taWVtLWdpYW0tdGhlbS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ApDungMiemGiamThemPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApDungMiemGiamThemPopupComponent", function() { return ApDungMiemGiamThemPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");






let ApDungMiemGiamThemPopupComponent = class ApDungMiemGiamThemPopupComponent {
    constructor(data, sanitizer, cdRef, dialogRef) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.disablePhanTram = true;
        this.disableSoTien = true;
        this.apDungMiemGiamThem = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ApDungMiemGiamThem"];
    }
    ngOnInit() {
    }
    apDungPhanTram(ev) {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        this.disablePhanTram = !ev;
        this.apDungMiemGiamThem.TiLe = 0;
    }
    apDungSoTien(ev) {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        this.disableSoTien = !ev;
        this.apDungMiemGiamThem.SoTien = 0;
    }
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, "g"), replace);
    }
    HuyApDungMGT() {
        this.dialogRef.close(null);
    }
    ApDungMGT() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.apDungMiemGiamThem.ChietKhauTheoTiLe && (this.apDungMiemGiamThem.TiLe === undefined || this.apDungMiemGiamThem.TiLe === 0)) {
            this.validationErrors.push({
                Message: "Vui lòng nhập tỉ lệ miễn giảm.",
                Field: "TiLe",
            });
        }
        if (this.apDungMiemGiamThem.ChietKhauTheoSoTien && (this.apDungMiemGiamThem.SoTien === undefined || this.apDungMiemGiamThem.SoTien === 0)) {
            this.validationErrors.push({
                Message: "Vui lòng nhập số tiền miễn giảm.",
                Field: "SoTien",
            });
        }
        if (this.validationErrors.length > 0) {
            return false;
        }
        else {
            this.dialogRef.close(this.apDungMiemGiamThem);
        }
        //====================================trường hơp ko chọn gì hết====================================
        if (!this.apDungMiemGiamThem.ChietKhauTheoTiLe && !this.apDungMiemGiamThem.ChietKhauTheoSoTien) {
            this.dialogRef.close(null);
        }
        //=================================================================================================
    }
    close() {
        this.dialogRef.close(null);
    }
};
ApDungMiemGiamThemPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
ApDungMiemGiamThemPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ap-dung-miem-giam-them-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ap-dung-miem-giam-them-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ap-dung-miem-giam-them-popup.component.scss */ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ApDungMiemGiamThemPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvaW4tYmFuZy10aHUtdGllbi1wb3AtdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxxdWF5LXRodW9jXFxpbi1iYW5nLXRodS10aWVuLXBvcC11cFxcaW4tYmFuZy10aHUtdGllbi1wb3AtdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL2luLWJhbmctdGh1LXRpZW4tcG9wLXVwL2luLWJhbmctdGh1LXRpZW4tcG9wLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL2luLWJhbmctdGh1LXRpZW4tcG9wLXVwL2luLWJhbmctdGh1LXRpZW4tcG9wLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: InBangThuTienPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBangThuTienPopUpComponent", function() { return InBangThuTienPopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let InBangThuTienPopUpComponent = class InBangThuTienPopUpComponent {
    constructor(data, sanitizer, dialog) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.src = '';
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.kiemtraPhieuInManhinh = false;
    }
    ngOnInit() {
        this.modelPrint = this.data.Model;
        this.kiemtraPhieuInManhinh = this.data.InDonThuocDanhSachList;
        this.InPhieuThu = this.data.InPhieuThu;
        this.InBangKe = this.data.InBangKe;
        this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
    }
    InPhieu(loaiPhieu) {
        this.loaiPhieu = loaiPhieu;
        this.getSharedPrintForm();
    }
    getSharedPrintForm() {
        const tmpBangKeThu = '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>BẢNG KÊ THU TIỀN THUỐC</th></tr></table>';
        const tmpPhieuThu = '<table class=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU THU</th></tr></table>';
        let data;
        data = this.modelPrint.replace(tmpBangKeThu, '');
        data = data.replace(tmpPhieuThu, '');
        // in 2 phieu theo ngang-doc kho a5
        let dataphieukeThuTienThuoc = data.split('<div class=\"pagebreak\"></div>');
        if (this.loaiPhieu == 1) {
            return new Promise(resolve => {
                resolve(dataphieukeThuTienThuoc[0]);
            });
        }
        else {
            if (dataphieukeThuTienThuoc[1] != undefined || dataphieukeThuTienThuoc[1] != null) {
                return new Promise(resolve => {
                    resolve(dataphieukeThuTienThuoc[1]);
                });
            }
            else {
                let message = "Không có phiếu thu tiền";
                return new Promise(resolve => {
                    resolve(message);
                });
            }
        }
    }
    close() {
        this.dialog.closeAll();
    }
};
InBangThuTienPopUpComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
InBangThuTienPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-in-bang-thu-tien-pop-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-bang-thu-tien-pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-bang-thu-tien-pop-up.component.scss */ "./src/app/modules/main/quay-thuoc/in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InBangThuTienPopUpComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvaW4tZG9uLXRodW9jLXBvcC11cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXGluLWRvbi10aHVvYy1wb3AtdXBcXGluLWRvbi10aHVvYy1wb3AtdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL2luLWRvbi10aHVvYy1wb3AtdXAvaW4tZG9uLXRodW9jLXBvcC11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vcXVheS10aHVvYy9pbi1kb24tdGh1b2MtcG9wLXVwL2luLWRvbi10aHVvYy1wb3AtdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: InDonThuocPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InDonThuocPopUpComponent", function() { return InDonThuocPopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let InDonThuocPopUpComponent = class InDonThuocPopUpComponent {
    constructor(data, sanitizer, dialog) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.src = '';
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.kiemtraPhieuInManhinh = false;
    }
    ngOnInit() {
        this.modelPrint = this.data.Model;
        this.kiemtraPhieuInManhinh = this.data.InDonThuocDanhSachList;
        this.InPhieuThu = this.data.InPhieuThu;
        this.InBangKe = this.data.InBangKe;
        this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
    }
    InPhieu(loaiPhieu) {
        this.loaiPhieu = loaiPhieu;
        this.getSharedPrintForm();
    }
    getSharedPrintForm() {
        const tmpBHYT = "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
            "<th>TOA THUỐC BẢO HIỂM Y TẾ</th>" +
            "</p>";
        const tmpKBHYT = "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
            "<th>TOA THUỐC KHÔNG BẢO HIỂM Y TẾ</th>" +
            "</p>";
        const tmpTNBV = "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
            "<th>TOA THUỐC NGOÀI BỆNH VIỆN</ th>" +
            "</p>";
        const tmpTuVan = "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
            "<th>ĐƠN TƯ VẤN</ th>" +
            "</p>";
        let data;
        data = this.modelPrint.replace(tmpBHYT, '');
        data = data.replace(tmpKBHYT, '');
        data = data.replace(tmpKBHYT, '');
        data = data.replace(tmpTuVan, '');
        data = data.replace(tmpTNBV, '');
        // in 2 phieu theo ngang-doc kho a5
        let dataphieukeThuTienThuoc = data.split('<div class=\"pagebreak\"></div>');
        if (this.loaiPhieu == 1) {
            return new Promise(resolve => {
                resolve(dataphieukeThuTienThuoc[0]);
            });
        }
        else {
            if (dataphieukeThuTienThuoc[1] != undefined || dataphieukeThuTienThuoc[1] != null) {
                return new Promise(resolve => {
                    resolve(dataphieukeThuTienThuoc[1]);
                });
            }
            else {
                let message = "Không có phiếu thu tiền";
                return new Promise(resolve => {
                    resolve(message);
                });
            }
        }
    }
    close() {
        this.dialog.closeAll();
    }
};
InDonThuocPopUpComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
InDonThuocPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-in-don-thuoc-pop-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-don-thuoc-pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-don-thuoc-pop-up.component.scss */ "./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InDonThuocPopUpComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/lich-su-quay-thuoc/lich-su-quay-thuoc.model.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/lich-su-quay-thuoc/lich-su-quay-thuoc.model.ts ***!
  \****************************************************************************************/
/*! exports provided: QuayXuatThuoc, TagItem, BenhNhanThongTin, DanhSachThuoc, XacNhanInViewModel, XacNhanInThuocViewModel, ExportQueryInfoQueryInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayXuatThuoc", function() { return QuayXuatThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return TagItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanThongTin", function() { return BenhNhanThongTin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachThuoc", function() { return DanhSachThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanInViewModel", function() { return XacNhanInViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanInThuocViewModel", function() { return XacNhanInThuocViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function() { return ExportQueryInfoQueryInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// export class QuayXuatThuoc {
//     constructor(
//         public Id: number = 0,
//         public MaTN: string = null,
//         public MaBN: string = null,
//         public HoTen: string = null,
//         public SoDon: string = "",

//         public ThoiDiemCapPhatThuoc: string = null,
//         public NgayThuStr: string = null,
//     ) { }
// }
class QuayXuatThuoc {
    constructor(ThoiDiemTiepNhanTuFormat = null, ThoiDiemTiepNhanDenFormat = null, FromDate = null, ToDate = null) {
        this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
        this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}
class TagItem {
    constructor(Key = null, Value = null, ValueDisplay = null, Title = null) {
        this.Key = Key;
        this.Value = Value;
        this.ValueDisplay = ValueDisplay;
        this.Title = Title;
    }
}
class BenhNhanThongTin {
    constructor(Id = null, MaBN = null, MaYeuCauTiepNhan = null, HoTen = null, GioiTinh = null, GioiTinhHienThi = null, NamSinh = null, DiaChi = null, DiaChiDayDu = null, SoDienThoai = null, Email = null, SoDuTaiKhoan = 0) {
        this.Id = Id;
        this.MaBN = MaBN;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.HoTen = HoTen;
        this.GioiTinh = GioiTinh;
        this.GioiTinhHienThi = GioiTinhHienThi;
        this.NamSinh = NamSinh;
        this.DiaChi = DiaChi;
        this.DiaChiDayDu = DiaChiDayDu;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.SoDuTaiKhoan = SoDuTaiKhoan;
    }
}
class DanhSachThuoc {
    constructor(Id = 0, ThuocBHYT = [], ThuocKhongBHYT = []) {
        this.Id = Id;
        this.ThuocBHYT = ThuocBHYT;
        this.ThuocKhongBHYT = ThuocKhongBHYT;
    }
}
class XacNhanInViewModel {
    constructor(TaiKhoanBenhNhanThuId = null, InPhieuThu = null, InBangKe = null, Hosting = null) {
        this.TaiKhoanBenhNhanThuId = TaiKhoanBenhNhanThuId;
        this.InPhieuThu = InPhieuThu;
        this.InBangKe = InBangKe;
        this.Hosting = Hosting;
    }
}
class XacNhanInThuocViewModel {
    constructor(TiepNhanId = null, Hosting = null, IsBhyt = null) {
        this.TiepNhanId = TiepNhanId;
        this.Hosting = Hosting;
        this.IsBhyt = IsBhyt;
    }
}
class ExportQueryInfoQueryInfo {
    constructor(Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", 
    // public searchTerms: string = "",
    Sort = []) {
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}


/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtY2hvLXRoYW5oLXRvYW4vcXVheS10aHVvYy1jaG8tdGhhbmgtdG9hbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: QuayThuocChoThanhToanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocChoThanhToanComponent", function() { return QuayThuocChoThanhToanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_modules_main_quay_thuoc_quay_thuoc_list_quay_thuoc_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");








let QuayThuocChoThanhToanComponent = class QuayThuocChoThanhToanComponent {
    constructor(router, route, cd, dialog) {
        this.router = router;
        this.route = route;
        this.cd = cd;
        this.dialog = dialog;
        this.id = 0;
        this.typeDanhSachThanhToan = 0;
        this.xacNhanIn = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.id = params.page; // id là đã thanh toán
            this.hoquerySearch = params.hoQuerysearch;
        });
        if (this.id == undefined) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].removeItem("additionalSearchStringChiTietNhaThuoc");
        }
        if (this.id == 1) {
            this.typeDanhSachThanhToan = 1;
            var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getItem("additionalSearchStringChiTietNhaThuoc");
            this.queryStringSearchUuTien = searching;
        }
        if (this.id == 2) {
            this.typeDanhSachThanhToan = 2;
            var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getItem("additionalSearchStringChiTietNhaThuoc");
            this.queryStringSearchUuTien = searching;
        }
        if (this.id == 3) {
            this.typeDanhSachThanhToan = 3;
            var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getItem("additionalSearchStringChiTietNhaThuoc");
            this.queryStringSearchUuTien = searching;
        }
        if (this.id == 0) {
            this.typeDanhSachThanhToan = 0;
            var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getItem("additionalSearchStringChiTietNhaThuoc");
            this.queryStringSearchUuTien = searching;
        }
    }
    getonHaddleDataSearch(event) {
        this.dataQuayThuocSearch = event;
    }
    ToKhachVangLai(typeDanhSachThanhToan) {
        //this.router.navigate(['nha-thuoc'], { queryParams: { page: type} });
        this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: typeDanhSachThanhToan } });
    }
    getkiemTraDonThuocThanhToan(event) {
        this.cd.detectChanges();
        // this.typeDanhSachThanhToan = event;
    }
    getonHaddleUuTienSearch(event) {
        // this.gridQuayThuocList.queryStringSearchUuTien = null;
        this.queryStringSearchUuTien = event;
        this.cd.detectChanges();
    }
    KiemTraeXportExel(event) {
        this.xacNhanIn = event;
    }
    getData(event) {
        this.benhNhan = event;
        // if (this.benhNhan.YeuCauTiepNhanId > 0) {
        //   this.router.navigate(['nha-thuoc/mua-thuoc/' + this.benhNhan.YeuCauTiepNhanId + '/' + this.benhNhan.MaBenhNhan + '/' + event.TrangThaiThanhToan + '/'+ this.typeDanhSachThanhToan]);
        // }
        // else {
        //   if(this.benhNhan.)
        //   this.router.navigate(['nha-thuoc/mua-toa-cu/' + this.benhNhan.MaBenhNhan + '/' + this.typeDanhSachThanhToan]);
        // }
        if (event.Id > 0) {
            // this.router.navigate(['nha-thuoc/mua-thuoc/' + event.Id + '/' + event.MaBN + '/' + event.TrangThaiThanhToan + '/'+ this.typeDanhSachThanhToan]);
            this.router.navigate(['nha-thuoc/mua-thuoc/' + event.Id + '/' + event.MaBN + '/' + event.TrangThai + '/' + this.typeDanhSachThanhToan]);
        }
        else {
            if (event.DonThuocThanhToanExits == true) {
                this.router.navigate(['nha-thuoc/mua-toa-cu/' + event.MaBN + '/' + this.typeDanhSachThanhToan]);
            }
            else {
                let dialogRef = this.dialog.open(_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent"], {
                    disableClose: true,
                    width: '500px',
                    data: { Model: event, KiemTraThanhToan: this.typeDanhSachThanhToan, Title: "XÁC NHẬN" }
                }).afterClosed().subscribe(result => {
                });
            }
        }
    }
};
QuayThuocChoThanhToanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
], QuayThuocChoThanhToanComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_modules_main_quay_thuoc_quay_thuoc_list_quay_thuoc_list_component__WEBPACK_IMPORTED_MODULE_5__["QuayThuocListComponent"], { static: true })
], QuayThuocChoThanhToanComponent.prototype, "gridQuayThuocList", void 0);
QuayThuocChoThanhToanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-cho-thanh-toan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-cho-thanh-toan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-cho-thanh-toan.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.scss")).default]
    })
], QuayThuocChoThanhToanComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtY2hvLXh1YXQtdGh1b2MvcXVheS10aHVvYy1jaG8teHVhdC10aHVvYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: QuayThuocChoXuatThuocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocChoXuatThuocComponent", function() { return QuayThuocChoXuatThuocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts");










let QuayThuocChoXuatThuocComponent = class QuayThuocChoXuatThuocComponent {
    constructor(route, dialog, apiService, router, notificationService) {
        this.route = route;
        this.dialog = dialog;
        this.apiService = apiService;
        this.router = router;
        this.notificationService = notificationService;
        this.id = this.route.snapshot.params.id;
        this.gridColumns = [];
        this.dataSourcedanhsachThuocBHYT = {
            data: [],
            total: 0
        };
        this.dataSourcedanhsachThuocKhongBHYT = {
            data: [],
            total: 0
        };
    }
    ngOnInit() {
        this.danhSachThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_4__["danhSachThuoc"]();
        this.GetThongTinDonThuoc(this.id);
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 40, Sortable: false },
            { Field: "TenDuocPham", Title: "Tên Thuốc", Width: 190, Sortable: false },
            { Field: "NongDoVaHamLuong", Title: "Nồng độ / hàm lượng", Width: 185, Sortable: false },
            { Field: "MaHoatChat", Title: "Hoạt chất", Width: 185, Sortable: false },
            { Field: "DonViTinh", Title: "ĐVT", Width: 94, Sortable: false },
            { Field: "SoLuongMua", Title: "SL Mua", Width: 110, Sortable: false },
            { Field: "DonGia", Title: "Đơn giá", Width: 129, Sortable: false, Template: this.donGiaTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 147, Sortable: false, Template: this.thanhTienTemplate },
            { Field: "Solo", Title: "Số lô", Width: 109, Sortable: false },
            { Field: "HanSuDungHientThi", Title: "Hạn sử dụng", Width: 146, Sortable: false },
        ];
    }
    ngOnChanges() {
        if (this.flagOnce == false) {
            this.GetThongTinDonThuoc(this.id);
            this.flagOnce = true;
        }
    }
    loadingPage() {
        var self = this;
        var dialogRef = self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
    }
    GetThongTinDonThuoc(id) {
        var self = this;
        var dialogRef = self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
        // this.apiService.post<Array<any>>("QuayThuoc/GetDanhSachXuatThuocBHYT?tiepNhanId=" + id).subscribe(
        //     resultData => {
        //         this.dataSourcedanhsachThuocBHYT.data = resultData;
        //         let index = 1;
        //         this.dataSourcedanhsachThuocBHYT.data.forEach(x => {
        //             x.STT = index;
        //             index++;
        //         });
        //         this.danhSachThuoc.ThuocBHYT = [...this.dataSourcedanhsachThuocBHYT.data]
        //     },
        //     () => { });
        this.apiService.post("QuayThuoc/GetDanhSachXuatThuocKhongBHYT?tiepNhanId=" + id).subscribe(resultData => {
            this.dataSourcedanhsachThuocKhongBHYT.data = resultData;
            let index = 1;
            this.dataSourcedanhsachThuocKhongBHYT.data.forEach(x => {
                x.STT = index;
                index++;
            });
            this.danhSachThuoc.ThuocKhongBHYT = [...this.dataSourcedanhsachThuocKhongBHYT.data];
        }, () => { });
        dialogRef.close();
    }
    GuiData() {
        this.danhSachThuoc.Id = this.id;
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn xuất đơn thuốc này?" }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.apiService.post("QuayThuoc/XuatDonThuocBHYT", this.danhSachThuoc).subscribe(resultData => {
                    if (resultData != null && resultData != undefined && resultData != "") {
                        this.notificationService.showError(resultData);
                    }
                    else {
                        if (this.ttcheck == 1) {
                            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
                        }
                        if (this.ttcheck == 2) {
                            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
                        }
                        if (this.ttcheck == 3) {
                            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
                        }
                        if (this.ttcheck == 0) {
                            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
                        }
                    }
                }, (err) => {
                });
            }
        });
    }
    KeThuoc() {
        this.showPopupLoadingIn();
        var data = {
            Hosting: null,
            TiepNhanId: this.id
        };
        data.Hosting = window.location.protocol + '//' + window.location.host;
        this.apiService.postExportPdf("QuayThuoc/XacNhanInThuocCoBhyt", data).subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dialog.open(_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_9__["ThongTinPhieuPdfPopupComponent"], {
                    disableClose: true,
                    width: '1000px',
                    data: { Model: resultData }
                }).afterClosed().subscribe(() => {
                    this.closePopupLoadingData();
                });
            }
        }, (err) => {
            if (err.Message !== 'Validation Failed') {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    showPopupLoadingIn() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang loading...' },
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
};
QuayThuocChoXuatThuocComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], QuayThuocChoXuatThuocComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], QuayThuocChoXuatThuocComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocChoXuatThuocComponent.prototype, "flagOnce", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocChoXuatThuocComponent.prototype, "trangThaiXuatThuoc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocChoXuatThuocComponent.prototype, "ttcheck", void 0);
QuayThuocChoXuatThuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-cho-xuat-thuoc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-cho-xuat-thuoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-cho-xuat-thuoc.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component.scss")).default]
    })
], QuayThuocChoXuatThuocComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#SoLuongTon input {\n  font-weight: bold;\n  color: green;\n}\n\n.color-red {\n  color: red;\n}\n\n.reverse-ellipsis.r {\n  text-align: right;\n  direction: inherit;\n}\n\n.mat-icon {\n  font-size: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy1oaW5oLXRodWMtdGhhbmgtdG9hbi9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXHF1YXktdGh1b2MtaGluaC10aHVjLXRoYW5oLXRvYW5cXHF1YXktdGh1b2MtaGluaC10aHVjLXRoYW5oLXRvYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtaGluaC10aHVjLXRoYW5oLXRvYW4vcXVheS10aHVvYy1oaW5oLXRodWMtdGhhbmgtdG9hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtaGluaC10aHVjLXRoYW5oLXRvYW4vcXVheS10aHVvYy1oaW5oLXRodWMtdGhhbmgtdG9hbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNTb0x1b25nVG9uIGlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5yZXZlcnNlLWVsbGlwc2lzLnIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlyZWN0aW9uOiBpbmhlcml0O1xufVxuXG4ubWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn0iLCIjU29MdW9uZ1RvbiBpbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucmV2ZXJzZS1lbGxpcHNpcy5yIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpcmVjdGlvbjogaW5oZXJpdDtcbn1cblxuLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: QuayThuocHinhThucThanhToanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocHinhThucThanhToanComponent", function() { return QuayThuocHinhThucThanhToanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/delete */ "./node_modules/@iconify/icons-ic/delete.js");
/* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.ts");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-info */ "./node_modules/@iconify/icons-ic/twotone-info.js");
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/edit */ "./node_modules/@iconify/icons-ic/edit.js");
/* harmony import */ var _iconify_icons_ic_edit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_edit__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ap_dung_miem_giam_them_popup_ap_dung_miem_giam_them_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component */ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.ts");
/* harmony import */ var _ap_dung_miem_giam_cho_tung_loai_thuoc_popup_ap_dung_miem_giam_cho_tung_loai_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component */ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");























let QuayThuocHinhThucThanhToanComponent = class QuayThuocHinhThucThanhToanComponent {
    constructor(route, apiService, notificationService, dialog, cdRef, authService, router) {
        this.route = route;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.cdRef = cdRef;
        this.authService = authService;
        this.router = router;
        this.icInfo = _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icRoundEdit = _iconify_icons_ic_edit__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.validationErrors = [];
        this.validationThuThuocErrors = [];
        this.id = 0;
        this.idSub = 0;
        this.tongTien = 0;
        this.tongTienGrid = 0;
        this.icDelete = _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.flagCheckSeletedTienMat = false;
        this.flagCheckSeletedChuyenKhoan = false;
        this.flagCheckSeletedPos = false;
        this.flagCheckSeletedSoTienCongNo = false;
        this.format = 'n2';
        this.selectItem = [];
        this.isSelectingItem = false;
        this.showCanhBaoSoTienNhap = false;
        this.hinhThucThanhToan = [
            { KeyId: 1, DisplayName: "Tiền mặt", Selected: false, Change: false },
            { KeyId: 2, DisplayName: "Chuyển khoản", Selected: false, Change: false },
            { KeyId: 3, DisplayName: "Pos", Selected: false, Change: false },
            { KeyId: 4, DisplayName: "Công nợ", Selected: false, Change: false },
        ];
        this.setDefeautTienMat = [1];
        this.lstDonThuocMoiThem = Array();
        this.danhSachCongNoChoThus = [];
        this.dataSourcedanhsachThuoc = {
            data: [],
            total: 0
        };
        this.maYCTNId = 0;
        this.keySelectBy = 'Id';
        this.mySelection = [];
        this.mySelectionInPage = [];
        this.selectAllState = 'unchecked';
        this.selectMoneyTienBNDua = null;
        this.selectMoneyTienMat = null;
        this.selectMoneyTienChuyenKhoan = null;
        this.selectMoneyTienPos = null;
        this.selectMoneySoTienCongNo = null;
        this.danhSachChuaThanhToan = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.apDungCongNoThuoc = false;
        this.apDungMienGiam = false;
        this.thongTinTam = [];
        this.afterChangedCongNo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.afterChangedMg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.state = {};
        this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_10__["process"])(this.dataSourcedanhsachThuoc.data, this.state);
        this.apDungCNAndMiemGiam = false;
        this.arrayThanhToans = [];
        this.arrayThanhToanstmp = [];
        this.confirm = null;
        this.checkSeletedTienMat = false;
        this.checkSeletedChuyenKhoan = false;
        this.checkSeletedPos = false;
        this.checkSeletedSoTienCongNo = false;
        this.loaiYeuCauTiepNhanKhachVangLai = false;
        // update 28/12/2020
        this.apDungMGT = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ApDungMiemGiamThem"];
        this.confrim = null;
        this.danhSachMienGiamVo = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["DanhSachMienGiamVo"];
        this.loaiMienGiam = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["LoaiMienGiam"];
        this.loaiChietKhau = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["LoaiChietKhau"];
    }
    total(field) {
        switch (field) {
            case 'BNConPhaiThanhToan':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0);
            case 'SoTienMG':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'ThanhTienHienThi':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.ThanhTienHienThi, 0);
            case 'BNConPhaiThanhToanHienThi':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.BNConPhaiThanhToanHienThi, 0);
            case 'ThanhTien':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
        }
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].QuayThuoc;
        this.closedialog = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: {}
        });
        const tiepNhanId = this.route.snapshot.params.id;
        this.maYCTNId = tiepNhanId;
        const id = this.route.snapshot.params.id;
        this.id = id;
        this.idSub = this.route.snapshot.params.idsub;
        this.thongtinDonThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ThongTinDonThuoc"]();
        this.GetTenBenhNhan(this.idSub);
        this.checkLoaiYCTN(tiepNhanId);
        this.lstDonThuocMoiThem = new Array();
        this.themDuocPham = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ThemDuocPham"]();
        this.deleteItem = new Array();
        if (this.benhnhanThongTin == null) {
            this.benhnhanThongTin = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["BenhNhanThongTin"]();
        }
        this.selectItem = [1];
        this.checkSeletedTienMat = true;
        this.flagCheckSeletedTienMat = true;
        this.thongtinDonThuoc.NgayThu = new Date();
        this.thongtinDonThuoc.NoiDungThu = 'Thu tiền thuốc';
        this.hinhThucThanhToan = [
            { KeyId: 1, DisplayName: "Tiền mặt", Selected: true, Change: false },
            { KeyId: 2, DisplayName: "Chuyển khoản", Selected: false, Change: false },
            { KeyId: 3, DisplayName: "Pos", Selected: false, Change: false },
            { KeyId: 4, DisplayName: "Công nợ", Selected: false, Change: false },
        ];
        ;
    }
    checkLoaiYCTN(tiepNhanId) {
        this.apiService.post('QuayThuoc/CheckLoaiYCTN?tiepNhanId=' + tiepNhanId).subscribe(resultData => {
            this.loaiYeuCauTiepNhanKhachVangLai = resultData;
        });
    }
    ngOnChanges() {
        if (this.apDungCongNoThuoc === true) {
            this.apDungCNAndMiemGiam = true;
            this.bindChiaTienCongNo();
            const soTienCongNoApply = this.thongTinTam[this.viTri].SoTien;
            const soTienTongHienTai = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            if (soTienCongNoApply > soTienTongHienTai) {
                this.notificationService.showError('Áp dụng công nợ thất bại.');
            }
            else {
                this.notificationService.showSuccess('Áp dụng công nợ thành công.');
            }
            this.afterChangedCongNo.emit();
        }
        if (this.apDungMienGiam === true) {
            this.apDungCNAndMiemGiam = false;
            this.getThongTinMienGiam(this.maYCTNId);
        }
    }
    bindChiaPhanTramDoiTuongUuDai() {
        if (this.danhSachCongNoChoThus.length > 0) {
            this.bindChiaTienCongNo();
            this.cdRef.detectChanges();
        }
        if (this.dataSourcedanhsachThuoc.data.length > 0) {
            if (this.thongTinTam.length === 0) {
                for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                    if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                        dsChiPhiKhamChuaBenh.TLMG = 0;
                        dsChiPhiKhamChuaBenh.SoTienMG = 0;
                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien;
                    }
                }
            }
            //tiền miễn giảm số lẻ làm tròn xuống Math.floor , tiền Người bệnh Thanh toán làm tròn lên Math.round
            if (this.thongTinMienGiamVos != undefined && this.thongTinMienGiamVos != null) {
                // Case 3: Áp dụng voucher
                if (this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo !== null &&
                    Object.entries(this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo).length !== 0) {
                    if (this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.LoaiVoucher === 2) {
                        let soTienMiemGiamThemConLaiVoucherCase = this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.SoTienVoucherMiemGiam;
                        let soTienMiemGiamThemConLaiTamVoucherCase = 0;
                        for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                            const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                            if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                                if (dsChiPhiKhamChuaBenh.BNConPhaiThanhToan !== 0
                                    && dsChiPhiKhamChuaBenh.BNConPhaiThanhToan < soTienMiemGiamThemConLaiVoucherCase) {
                                    soTienMiemGiamThemConLaiTamVoucherCase = dsChiPhiKhamChuaBenh.BNConPhaiThanhToan;
                                    dsChiPhiKhamChuaBenh.SoTienMG = Math.floor(dsChiPhiKhamChuaBenh.SoTienMG +
                                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan);
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = (dsChiPhiKhamChuaBenh.ThanhTien -
                                        totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG);
                                    soTienMiemGiamThemConLaiVoucherCase = soTienMiemGiamThemConLaiVoucherCase -
                                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan - soTienMiemGiamThemConLaiTamVoucherCase;
                                }
                                if (soTienMiemGiamThemConLaiVoucherCase > 0 &&
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan > soTienMiemGiamThemConLaiVoucherCase) {
                                    dsChiPhiKhamChuaBenh.SoTienMG = dsChiPhiKhamChuaBenh.SoTienMG + soTienMiemGiamThemConLaiVoucherCase;
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                                    soTienMiemGiamThemConLaiVoucherCase = 0;
                                }
                            }
                        }
                    }
                    if (this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.LoaiVoucher === 1) {
                        // Case 2: Áp dụng voucher rãi đều % theo tông sô tiền SoTienVoucherMiemGiam
                        let soTienVoucherConLai = this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.SoTienVoucherMiemGiam;
                        this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.DuocPhamMienGiamTheoTiLes.forEach(element => {
                            for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                                if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                                    const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                                    if (dsChiPhiKhamChuaBenh.DuocPhamId === element.DuocPhamId) {
                                        dsChiPhiKhamChuaBenh.TLMG = dsChiPhiKhamChuaBenh.TLMG + element.TiLe;
                                        dsChiPhiKhamChuaBenh.SoTienMG = Math.floor(((dsChiPhiKhamChuaBenh.SoLuongMua * dsChiPhiKhamChuaBenh.DonGia - totalCongNo) *
                                            element.TiLe) / 100);
                                        if (dsChiPhiKhamChuaBenh.SoTienMG > dsChiPhiKhamChuaBenh.SoLuongMua
                                            * dsChiPhiKhamChuaBenh.DonGia - totalCongNo) {
                                            dsChiPhiKhamChuaBenh.SoTienMG = dsChiPhiKhamChuaBenh.SoLuongMua
                                                * dsChiPhiKhamChuaBenh.DonGia - totalCongNo;
                                        }
                                        if (soTienVoucherConLai < dsChiPhiKhamChuaBenh.SoTienMG) {
                                            dsChiPhiKhamChuaBenh.SoTienMG = soTienVoucherConLai;
                                        }
                                        soTienVoucherConLai = soTienVoucherConLai - dsChiPhiKhamChuaBenh.SoTienMG;
                                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan =
                                            (dsChiPhiKhamChuaBenh.SoLuongMua * dsChiPhiKhamChuaBenh.DonGia - totalCongNo)
                                                - dsChiPhiKhamChuaBenh.SoTienMG;
                                    }
                                }
                            }
                        });
                    }
                }
                // Case 2: Áp dụng ThongTinMienGiamThemVo
                if (this.thongTinMienGiamVos.ThongTinMienGiamThemVo != undefined && this.thongTinMienGiamVos.ThongTinMienGiamThemVo != null &&
                    Object.entries(this.thongTinMienGiamVos.ThongTinMienGiamThemVo).length !== 0) {
                    if (this.thongTinMienGiamVos.ThongTinMienGiamThemVo.LoaiMienGiamThem === 1) {
                        let soTienMiemGiamThemConLai = this.thongTinMienGiamVos.ThongTinMienGiamThemVo.SoTienMGConLai;
                        let soTienMiemGiamThemConLaiTam = 0;
                        for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                            const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                            if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                                if (dsChiPhiKhamChuaBenh.BNConPhaiThanhToan !== 0
                                    && dsChiPhiKhamChuaBenh.BNConPhaiThanhToan <= soTienMiemGiamThemConLai) {
                                    soTienMiemGiamThemConLaiTam = dsChiPhiKhamChuaBenh.BNConPhaiThanhToan;
                                    dsChiPhiKhamChuaBenh.SoTienMG = Math.floor(dsChiPhiKhamChuaBenh.SoTienMG
                                        + dsChiPhiKhamChuaBenh.BNConPhaiThanhToan);
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien
                                        - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                                    soTienMiemGiamThemConLai = soTienMiemGiamThemConLai -
                                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan - soTienMiemGiamThemConLaiTam;
                                }
                                if (soTienMiemGiamThemConLai > 0 && dsChiPhiKhamChuaBenh.BNConPhaiThanhToan > soTienMiemGiamThemConLai) {
                                    dsChiPhiKhamChuaBenh.SoTienMG = dsChiPhiKhamChuaBenh.SoTienMG + soTienMiemGiamThemConLai;
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                                    soTienMiemGiamThemConLai = 0;
                                }
                            }
                        }
                    }
                    else {
                        // Case 2: Áp dụng ThongTinMienGiamThemVo tỉ lệ miễm giảm
                        let isApDungDichVuId = false;
                        const tiLeMienGiam = this.thongTinMienGiamVos.ThongTinMienGiamThemVo.TiLeMienGiam;
                        for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                            const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                            if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                                isApDungDichVuId = true;
                                dsChiPhiKhamChuaBenh.TLMG = dsChiPhiKhamChuaBenh.TLMG + tiLeMienGiam;
                                dsChiPhiKhamChuaBenh.SoTienMGThem = dsChiPhiKhamChuaBenh.SoTienMG;
                                dsChiPhiKhamChuaBenh.SoTienMG = Math.floor(((dsChiPhiKhamChuaBenh.SoLuongMua * dsChiPhiKhamChuaBenh.DonGia - totalCongNo) *
                                    dsChiPhiKhamChuaBenh.TLMG) / 100);
                                dsChiPhiKhamChuaBenh.BNConPhaiThanhToan =
                                    dsChiPhiKhamChuaBenh.ThanhTien - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                            }
                        }
                        if (isApDungDichVuId) {
                            for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                                if (dsChiPhiKhamChuaBenh.CheckedDefault === true && dsChiPhiKhamChuaBenh.SoTienMGThem !== undefined) {
                                    const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                                    dsChiPhiKhamChuaBenh.SoTienMG = dsChiPhiKhamChuaBenh.SoTienMG + dsChiPhiKhamChuaBenh.SoTienMGThem;
                                    if (dsChiPhiKhamChuaBenh.SoTienMG > (dsChiPhiKhamChuaBenh.SoLuongMua
                                        * dsChiPhiKhamChuaBenh.DonGia - totalCongNo)) {
                                        dsChiPhiKhamChuaBenh.SoTienMG = (dsChiPhiKhamChuaBenh.SoLuongMua
                                            * dsChiPhiKhamChuaBenh.DonGia - totalCongNo);
                                    }
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan =
                                        (dsChiPhiKhamChuaBenh.SoLuongMua * dsChiPhiKhamChuaBenh.DonGia - totalCongNo)
                                            - dsChiPhiKhamChuaBenh.SoTienMG;
                                }
                            }
                        }
                    }
                }
            }
        }
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            }
            else {
                this.tongTien = 0;
            }
        }
        if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
            this.thongtinDonThuoc.TienMat = this.tongTien;
            if (this.thongtinDonThuoc.BenhNhanDua > 0 && this.apDungMienGiam === true) {
                this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
            }
        }
        this.gridData = this.dataSourcedanhsachThuoc.data;
        this.myDanhSachChuaThanhToan();
    }
    itemTotalCongNo(danhSachCongNoChoThus) {
        let toatalCongNo = 0;
        if (danhSachCongNoChoThus != null) {
            danhSachCongNoChoThus.forEach(cn => {
                toatalCongNo += cn.SoTienCongNoChoThu;
            });
        }
        return toatalCongNo;
    }
    selectDataDanhSachDaChon() {
        let totalThanhTien = 0;
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            if (element.CheckedDefault === true) {
                totalThanhTien += element.ThanhTien;
            }
        });
        return totalThanhTien;
    }
    totalCongNoPrivate() {
        let totalCongNoThanhToan = 0;
        if (this.thongTinTam.length !== 0) {
            // tslint:disable-next-line: prefer-for-of
            for (let index = 0; index < this.thongTinTam.length; index++) {
                totalCongNoThanhToan += this.thongTinTam[index].SoTien;
            }
        }
        return totalCongNoThanhToan;
    }
    tinhTienCongNo(itemThanhTien, congNoId, totalTT) {
        let totalCongNo = 0;
        // kiểm tra công nợ được áp dụng tiền
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.thongTinTam.length; index++) {
            if (this.thongTinTam[index].CongNoId === congNoId) {
                totalCongNo = this.thongTinTam[index].SoTien;
            }
        }
        // const itemSoTienCongNo = Math.floor(parseFloat(((totalCongNo / totalTT) * itemThanhTien).toPrecision(15)));
        // return itemSoTienCongNo;
        var itemSoTienCongNo = Math.round(parseFloat(((totalCongNo / totalTT) * (itemThanhTien)).toPrecision(15)) * 100) / 100;
        return itemSoTienCongNo;
    }
    tinhTiLeMiemGiamInGrid(data) {
        const tongCongNoItem = this.itemTotalCongNo(data.DanhSachCongNoChoThus);
        const sumSoTienBenhNhanTra = (data.ThanhTien - tongCongNoItem);
        if (sumSoTienBenhNhanTra === 0) {
            return 0;
        }
        return Math.round((data.SoTienMG / sumSoTienBenhNhanTra) * 100);
    }
    bindChiaTienCongNo() {
        const totalTT = this.selectDataDanhSachDaChon();
        const totalCongNo = this.totalCongNoPrivate();
        if (totalCongNo > totalTT) {
            this.notificationService.showError('Số tiền thanh toán công nợ không hợp lệ');
            return;
        }
        if (this.danhSachCongNoChoThus[0].CongNoChoThus.length !== 0) {
            this.danhSachCongNoChoThus[0].CongNoChoThus.forEach(congNo => {
                if (congNo.ViTri === this.viTri) {
                    if (this.thongTinTam.length !== 0) {
                        congNo.SoTienCongNoChoThu = this.thongTinTam[this.viTri].SoTien;
                    }
                }
            });
        }
        // mỗi lần cập nhật công nợ thông tin tạm thì sẽ luôn cập nhập thông tin đơn thuốc danh sách công nợ (dùng cho việc thu tiền)
        this.thongTinTam.forEach(element => {
            this.thongtinDonThuoc.DanhSachCongNos.forEach(congNoDonThuoc => {
                if (element.CongNoId === congNoDonThuoc.CongTyCongNoId) {
                    congNoDonThuoc.SoTienCongNo = element.SoTien;
                }
            });
        });
        if (this.thongTinTam.length > 0) {
            const danhSachCongNoChoThu = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["DanhSachCongNoChoThu"]();
            for (let index = 0; index < this.thongTinTam.length; index++) {
                const congNo = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["CongNoChoThu"]();
                congNo.ViTri = index;
                congNo.CongNoId = this.thongTinTam[index].CongNoId;
                congNo.TenCongTy = this.thongTinTam[index].TenCongTy;
                congNo.SoTienCongNoChoThu = 0;
                danhSachCongNoChoThu.CongNoChoThus.push(congNo);
            }
            const lastItem = this.findLast();
            let tongCongNo = 0;
            for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                    if (this.viTri !== -1) {
                        this.dataSourcedanhsachThuoc.data[index].TLMG = 0;
                        this.dataSourcedanhsachThuoc.data[index].SoTienMG = 0;
                        this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                            (this.dataSourcedanhsachThuoc.data[index].SoLuongMua * this.dataSourcedanhsachThuoc.data[index].DonGia)
                                - ((this.dataSourcedanhsachThuoc.data[index].SoLuongMua *
                                    this.dataSourcedanhsachThuoc.data[index].DonGia) * this.dataSourcedanhsachThuoc.data[index].TLMG / 100); // to do Math.round
                        if (index === lastItem) {
                            this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri]
                                .SoTienCongNoChoThu = this.apDungCNAndMiemGiam ?
                                this.thongTinTam[this.viTri].SoTien - tongCongNo :
                                this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu;
                        }
                        if (index !== lastItem) {
                            if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length > 0) {
                                this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu =
                                    danhSachCongNoChoThu.CongNoChoThus[this.viTri].SoTienCongNoChoThu = this.apDungCNAndMiemGiam ?
                                        this.tinhTienCongNo(this.dataSourcedanhsachThuoc.data[index].ThanhTien, danhSachCongNoChoThu.CongNoChoThus[this.viTri].CongNoId, totalTT) :
                                        this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu;
                                tongCongNo += this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu;
                            }
                        }
                        this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                            this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                    }
                }
                else {
                    if (this.viTri !== -1) {
                        this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu =
                            danhSachCongNoChoThu.CongNoChoThus[this.viTri].SoTienCongNoChoThu = 0;
                    }
                }
            }
            this.dataSourcedanhsachThuoc.data.forEach(element => {
                let totalCongNoEle = 0;
                element.DanhSachCongNoChoThus.forEach(elementCongNo => {
                    totalCongNoEle += elementCongNo.SoTienCongNoChoThu;
                });
                let soTienMG = this.tinhSoTienMiemGiam(element);
                element.SoTienMG = soTienMG;
                return element.BNConPhaiThanhToan = element.ThanhTien - totalCongNoEle - element.SoTienMG;
            });
        }
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            }
            else {
                this.tongTien = 0;
            }
        }
        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }
        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
        this.myDanhSachChuaThanhToan();
        this.cdRef.detectChanges();
    }
    findLast() {
        for (let index = this.dataSourcedanhsachThuoc.data.length - 1; index >= 0; index--) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                return index;
            }
        }
        return -1;
    }
    myDanhSachChuaThanhToan() {
        const danhSachChuaThanhToans = [];
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            let totalCongNoEle = 0;
            if (element.CheckedDefault) {
                element.SoTienMG = this.tinhSoTienMiemGiam(element);
                element.DanhSachCongNoChoThus.forEach(elementCongNo => {
                    totalCongNoEle += elementCongNo.SoTienCongNoChoThu;
                });
                let soTienMG = this.tinhSoTienMiemGiam(element);
                element.SoTienMG = soTienMG;
                element.BNConPhaiThanhToan = element.ThanhTien - totalCongNoEle - element.SoTienMG;
                danhSachChuaThanhToans.push(element);
            }
        });
        this.danhSachXemTruocBangKeThuocVaVatTu(danhSachChuaThanhToans);
    }
    danhSachXemTruocBangKeThuocVaVatTu(danhSachChuaThanhToans) {
        // lý do trả về danhSachChuaThanhToan cho quay-thuoc-mua-thuoc.component
        // để xem trước bảng kê
        this.danhSachChuaThanhToan.emit(danhSachChuaThanhToans);
    }
    setSelectAll() {
        setTimeout(function () {
            if (!jQuery('#selectAllCheckboxId').prop('checked')) {
                jQuery('#selectAllCheckboxId').trigger('click');
            }
        }, 1000);
    }
    chuyenDen(event) {
        if (event.index === 0) {
            this.cdRef.detectChanges();
            this.clearHinhThucThanhToan();
            this.defeautSoTien();
            this.setDefeautTienMat = [1];
            this.checkSeletedTienMat = true;
            this.flagCheckSeletedTienMat = true;
            this.GetThongTinDonThuoc(this.maYCTNId);
            this.getDanhSachBHTN();
            let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
            if (items != null && items.length > 0) {
                this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
            }
        }
    }
    onSelectChangeCheckbox(e, val) {
        this.unCheckedBindSoTienMG(val);
        this.mySelection = [];
        if (e.target.checked) {
            this.mySelectionInPage.push(val);
        }
        else {
            this.mySelectionInPage.splice(this.mySelectionInPage.indexOf(val), 1);
        }
        var allData = this.dataSourcedanhsachThuoc.data;
        const len = this.mySelectionInPage.length;
        this.mySelection = this.mySelection.concat(this.mySelectionInPage);
        if (len === 0) {
            this.selectAllState = 'unchecked';
        }
        else if (len > 0 && len < allData
            .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false))
            .length) {
            this.selectAllState = 'indeterminate';
        }
        else {
            this.selectAllState = 'checked';
        }
        this.extCheckboxSelection(this.mySelection);
    }
    onSelectDuocPham(event) {
        let loai = 0;
        if (event == undefined || event == null) {
            // this.notificationService.showError('Bạn chưa chọn thuốc.');
            this.themDuocPham.SoLuongTon = null;
        }
        else {
            this.apiService.post('QuayThuoc/GetThongTinDuocPham?duocPhamId=' + event.KeyId + "&LoaiDuocPhamHoacVatTu=" + event.LoaiDuocPhamHoacVatTu).subscribe(resultData => {
                let soLuongTon = 0;
                this.lstthongTinDonThuoc = resultData;
                if (this.lstDonThuocMoiThem.length > 0) {
                    this.lstDonThuocMoiThem.forEach(x => {
                        if (x.DuocPhamId === this.themDuocPham.DuocPhamId) {
                            soLuongTon = soLuongTon + x.SoLuongMua;
                        }
                    });
                }
                this.themDuocPham.SoLuongTon = resultData.reduce((sum, item) => sum + item.SoLuongTon, 0) - soLuongTon;
            }, () => {
            });
        }
    }
    unCheckedBindSoTienMG(id) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === false) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === id) {
                    this.dataSourcedanhsachThuoc.data[index].SoTienMG = 0;
                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                        this.dataSourcedanhsachThuoc.data[index].ThanhTien - this.dataSourcedanhsachThuoc.data[index].TongCongNo; // to do Math.round
                }
            }
        }
        this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_10__["process"])(this.dataSourcedanhsachThuoc.data, this.state);
    }
    delete(event) {
        if (event != undefined && event != null) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xóa thuốc/vật tư này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.notificationService.showSuccess("Xóa thành công");
                    let i = 0;
                    let stt = event.STT;
                    for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                        if (this.dataSourcedanhsachThuoc.data[index].STT === event.STT) {
                            i = index;
                        }
                    }
                    this.dataSourcedanhsachThuoc.data[i].HighLightClass = null;
                    this.deleteItem.push(this.dataSourcedanhsachThuoc.data[i]);
                    if (this.lstthongTinDonThuoc === undefined) {
                        this.lstthongTinDonThuoc = [];
                    }
                    this.lstthongTinDonThuoc.push(this.dataSourcedanhsachThuoc.data[i]);
                    this.dataSourcedanhsachThuoc.data.splice(i, 1);
                    this.lstDonThuocMoiThem = new Array();
                    for (let index0 = 0; index0 < i; index0++) {
                        this.lstDonThuocMoiThem.push(this.dataSourcedanhsachThuoc.data[index0]);
                    }
                    for (let index1 = i; index1 < this.dataSourcedanhsachThuoc.data.length; index1++) {
                        this.dataSourcedanhsachThuoc.data[index1].STT = stt;
                        this.lstDonThuocMoiThem.push(this.dataSourcedanhsachThuoc.data[index1]);
                        stt++;
                    }
                    this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
                    this.tongTien = this.tongTienGrid;
                    if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
                        if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                            this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
                        }
                        else {
                            this.tongTien = 0;
                        }
                    }
                    // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                    //     this.thongtinDonThuoc.TienMat = this.tongTien;
                    // }
                    let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
                    if (items != null && items.length > 0) {
                        this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
                    }
                }
            });
        }
    }
    clearHinhThucThanhToan() {
        this.flagCheckSeletedTienMat = false;
        this.flagCheckSeletedChuyenKhoan = false;
        this.flagCheckSeletedPos = false;
        this.flagCheckSeletedSoTienCongNo = false;
        this.checkSeletedTienMat = false;
        this.checkSeletedChuyenKhoan = false;
        this.checkSeletedPos = false;
        this.checkSeletedSoTienCongNo = false;
    }
    GetTenBenhNhan(id) {
        this.apiService.post('QuayThuoc/GetTenBenhNhan?benhNhanId=' + id).subscribe(resultData => {
            this.thongtinDonThuoc.HoTenBenhNhan = resultData;
            this.GetThongTinDonThuoc(this.id);
        }, () => {
        });
    }
    onSelectAllChange(checkedState) {
        var allData = this.dataSourcedanhsachThuoc.data;
        if (allData == undefined)
            allData = [];
        this.mySelection = [];
        if (checkedState === 'checked') {
            this.mySelectionInPage = allData
                .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map((item) => item[this.keySelectBy]);
            this.mySelection = this.mySelection.concat(this.mySelectionInPage);
            this.selectAllState = 'checked';
        }
        else {
            var mySelectionRemove = allData
                .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map((item) => item[this.keySelectBy]);
            if (mySelectionRemove != null && mySelectionRemove.length > 0) {
                mySelectionRemove.forEach(obj => {
                    this.mySelection.splice(this.mySelection.indexOf(obj), 1);
                });
            }
            this.mySelectionInPage = [];
            this.selectAllState = 'unchecked';
        }
        this.extCheckboxSelection(this.mySelection);
    }
    GetThongTinDonThuoc(id) {
        this.apiService.post('QuayThuoc/GetDataDonThuoc?tiepNhanId=' + id).subscribe(resultData => {
            this.dataSourcedanhsachThuoc.data = resultData;
            let index = 1;
            this.dataSourcedanhsachThuoc.data.forEach(x => {
                x.STT = index;
                index++;
                x.KiemTraTienSoTienItemDichVu = false;
            });
            this.myDanhSachChuaThanhToan();
            this.getSoDuTaiKhoanBenhNhan(id);
            this.closedialog.close();
        }, () => {
        });
    }
    getSoDuTaiKhoanBenhNhan(id) {
        this.apiService.get('ThuNgan/SoDuTaiKhoanBenhNhan/' + id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                // số dư tài khoản bằng 0 vi đã tra chô thu ngân
                this.benhnhanThongTin.SoDuTaiKhoan = 0;
                this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
                this.tongTien = this.tongTienGrid;
                if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
                    if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                        this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
                    }
                    else {
                        this.tongTien = 0;
                    }
                }
                this.thongtinDonThuoc.TienMat = this.tongTien;
                this.thongtinDonThuoc.HinhThucThanhToan = [1];
                this.getDanhSachBHTN();
            }
        });
    }
    getDanhSachBHTN() {
        this.apiService.get('QuayThuoc/GetListCongTyBaoHiemTuNhans?tiepNhanId=' + this.maYCTNId).subscribe(resultData => {
            if (resultData.length > 0) {
                const danhSachCongNoChoThu = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["DanhSachCongNoChoThu"]();
                for (let index = 0; index < resultData.length; index++) {
                    const congNo = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["CongNoChoThu"]();
                    congNo.ViTri = index;
                    congNo.CongNoId = resultData[index].CongNoId;
                    congNo.TenCongTy = resultData[index].TenCongTy;
                    congNo.SoTienCongNoChoThu = 0;
                    danhSachCongNoChoThu.CongNoChoThus.push(congNo);
                }
                // tslint:disable-next-line: prefer-for-of
                for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                    this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus = [];
                }
                this.danhSachCongNoChoThus = [];
                // tslint:disable-next-line: prefer-for-of
                for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                    // tslint:disable-next-line: prefer-for-of
                    for (let subIndex = 0; subIndex < danhSachCongNoChoThu.CongNoChoThus.length; subIndex++) {
                        const congNoItem = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["CongNoChoThu"]();
                        congNoItem.CongNoId = danhSachCongNoChoThu.CongNoChoThus[subIndex].CongNoId;
                        congNoItem.SoTienCongNoChoThu = danhSachCongNoChoThu.CongNoChoThus[subIndex].SoTienCongNoChoThu;
                        congNoItem.TenCongTy = danhSachCongNoChoThu.CongNoChoThus[subIndex].TenCongTy;
                        congNoItem.ViTri = danhSachCongNoChoThu.CongNoChoThus[subIndex].ViTri;
                        this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.push(congNoItem);
                    }
                    const totalCongNo = this.itemTotalCongNo(this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus);
                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                        this.dataSourcedanhsachThuoc.data[index].ThanhTien - totalCongNo - this.dataSourcedanhsachThuoc.data[index].SoTienMG;
                }
                this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
                this.danhSachCongNoChoThus[0].CongNoChoThus.forEach(element => {
                    const congNo = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["CongNoVo"]();
                    congNo.CongTyCongNoId = element.CongNoId;
                    congNo.SoTienCongNo = element.SoTienCongNoChoThu;
                    this.thongtinDonThuoc.DanhSachCongNos.push(congNo);
                });
            }
            this.gridData = this.dataSourcedanhsachThuoc.data;
            this.setSelectAll();
            // this.getThongTinMienGiam(this.maYCTNId);  // to do
        });
    }
    totalCongno(field) {
        let sumCongNoItem = 0;
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            if (element.DanhSachCongNoChoThus[field] !== undefined) {
                sumCongNoItem += element.DanhSachCongNoChoThus[field].SoTienCongNoChoThu;
            }
        });
        return sumCongNoItem;
    }
    GuiVaXuatThuocData(data) {
        this.apiService.post('QuayThuoc/ThuTienVaXuatThuoc', data).subscribe(resultData => {
            if (resultData.ThanhCong === false) {
                this.notificationService.showError(resultData.Error);
                if (resultData.DanhSachDuocPhamVuotTonKho != null) {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                        // tslint:disable-next-line: prefer-for-of
                        for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                            if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt === this.dataSourcedanhsachThuoc.data[j].STT) {
                                this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                this.dataSourcedanhsachThuoc.data[j].SoLuongDung =
                                    resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                            }
                        }
                    }
                }
            }
            else if (resultData.ThanhCong === true) {
                this.dataSourcedanhsachThuoc.data = [];
                this.lstDonThuocMoiThem = [];
                this.cdRef.detectChanges();
                this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_10__["process"])(this.dataSourcedanhsachThuoc.data, this.state);
                this.dialog.open(_quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_9__["QuayThuocXacNhanInPopUpComponent"], {
                    disableClose: true,
                    width: '500px',
                    data: { Model: resultData, Title: 'XÁC NHẬN' }
                }).afterClosed().subscribe(result => {
                    if (result.Response !== 'No answer') {
                        this.changeTab.emit(2);
                        this.tongTien = 0;
                        this.getSoDuTaiKhoanBenhNhan(data.Id);
                        this.thongtinDonThuoc.TienMat = 0;
                        this.thongtinDonThuoc.ChuyenKhoan = 0;
                        this.thongtinDonThuoc.BenhNhanDua = 0;
                        this.thongtinDonThuoc.TienTraLai = 0;
                        this.XacNhanIn(result);
                    }
                    else {
                        this.changeTab.emit(2);
                        this.getSoDuTaiKhoanBenhNhan(data.Id);
                        this.tongTien = 0;
                        this.thongtinDonThuoc.TienMat = 0;
                        this.thongtinDonThuoc.ChuyenKhoan = 0;
                        this.thongtinDonThuoc.BenhNhanDua = 0;
                        this.thongtinDonThuoc.TienTraLai = 0;
                    }
                });
            }
        });
    }
    GuiData(data) {
        this.apiService.post('QuayThuoc/ThemThanhToanDonThuoc', data).subscribe(resultData => {
            if (resultData.ThanhCong === false) {
                this.notificationService.showError(resultData.Error);
                if (resultData.DanhSachDuocPhamVuotTonKho != null) {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                        // tslint:disable-next-line: prefer-for-of
                        for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                            if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt === this.dataSourcedanhsachThuoc.data[j].STT) {
                                this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                this.dataSourcedanhsachThuoc.data[j].SoLuongDung =
                                    resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                            }
                        }
                    }
                }
            }
            else if (resultData.ThanhCong === true) {
                this.dataSourcedanhsachThuoc.data = [];
                this.lstDonThuocMoiThem = [];
                this.cdRef.detectChanges();
                this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_10__["process"])(this.dataSourcedanhsachThuoc.data, this.state);
                this.dialog.open(_quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_9__["QuayThuocXacNhanInPopUpComponent"], {
                    disableClose: true,
                    width: '500px',
                    data: { Model: resultData, Title: 'XÁC NHẬN' }
                }).afterClosed().subscribe(result => {
                    if (result.Response !== 'No answer') {
                        this.changeTab.emit(2);
                        this.tongTien = 0;
                        this.getSoDuTaiKhoanBenhNhan(data.Id);
                        this.thongtinDonThuoc.TienMat = 0;
                        this.thongtinDonThuoc.ChuyenKhoan = 0;
                        this.thongtinDonThuoc.BenhNhanDua = 0;
                        this.thongtinDonThuoc.TienTraLai = 0;
                        this.XacNhanIn(result);
                    }
                    else {
                        this.changeTab.emit(2);
                        this.getSoDuTaiKhoanBenhNhan(data.Id);
                        this.tongTien = 0;
                        this.thongtinDonThuoc.TienMat = 0;
                        this.thongtinDonThuoc.ChuyenKhoan = 0;
                        this.thongtinDonThuoc.BenhNhanDua = 0;
                        this.thongtinDonThuoc.TienTraLai = 0;
                    }
                });
            }
        });
    }
    XacNhanIn(data) {
        this.showPopupLoadingIn();
        data.Hosting = window.location.protocol + '//' + window.location.host;
        this.apiService.postExportPdf('QuayThuoc/XacNhanIn', data).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                if (data.InBangKe == false && data.InPhieuThu == false) {
                    this.notificationService.showError('Không có phiếu in được chọn.');
                    this.closePopupLoadingData();
                }
                else {
                    this.dialog.open(_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_18__["ThongTinPhieuPdfPopupComponent"], {
                        disableClose: true,
                        width: '1000px',
                        data: { Model: resultData }
                    }).afterClosed().subscribe(() => {
                        this.closePopupLoadingData();
                    });
                }
            }
        }, (err) => {
            this.closePopupLoadingData();
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    shareData() {
        this.thongtinDonThuoc.DanhSachDonThuocs = [...this.dataSourcedanhsachThuoc.data];
        this.thongtinDonThuoc.Id = this.id;
        for (let index = 0; index < this.thongtinDonThuoc.DanhSachDonThuocs.length; index++) {
            this.thongtinDonThuoc.DanhSachDonThuocs[index].HighLightClass = null;
            if (this.thongtinDonThuoc.DanhSachDonThuocs[index].CheckedDefault === false) {
                this.thongtinDonThuoc.DanhSachDonThuocs.splice(index, 1);
                index = -1;
            }
        }
        return this.thongtinDonThuoc;
    }
    kiemTraNhapSoTienTra(dataThuTien) {
        const soTienNhapTra = dataThuTien.ChuyenKhoan + dataThuTien.POS + dataThuTien.TienMat + dataThuTien.SoTienCongNo;
        if (this.tongTien !== soTienNhapTra) {
            return true;
        }
        return false;
    }
    // ======= Begin Thu tiền và xuất thuốc 
    ThuTienVaXuatThuoc() {
        let checkTien = true;
        if (this.validationErrors !== undefined) {
            this.validationThuThuocErrors = [];
        }
        this.cdRef.detectChanges();
        if (this.setDefeautTienMat.length === 0) {
            this.validationThuThuocErrors.push({
                Message: "Vui lòng chọn hình thức thanh toán.",
                Field: "HinhThucThanhToan",
            });
            return true;
        }
        if (this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault).length === 0) {
            this.notificationService.showError('Người bệnh này không có thuốc nào để thanh toán');
            checkTien = false;
        }
        if (this.thongtinDonThuoc.HinhThucThanhToan.length !== 0 && this.kiemTraNhapSoTienTra(this.thongtinDonThuoc)) {
            this.notificationService.showError('Số tiền nhập không đúng.');
            checkTien = false;
        }
        if (this.dataSourcedanhsachThuoc.length != 0) {
            this.dataSourcedanhsachThuoc.data.forEach(element => {
                if (element.KiemTraTienSoTienItemDichVu === true) {
                    this.notificationService.showError('Thanh toán không hợp lệ');
                    checkTien = false;
                }
            });
        }
        this.thongtinDonThuoc.TongTien = this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo;
        if (this.thongtinDonThuoc.Id == null) {
            this.thongtinDonThuoc.Id = this.id;
        }
        this.thongtinDonThuoc.DanhSachDonThuocs = this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault);
        this.apiService.post('QuayThuoc/CheckValidationForQuayThuoc', this.thongtinDonThuoc).subscribe(() => {
            if (checkTien === true) {
                if (this.confirm != null) {
                    // this.dialog.closeAll();
                    this.confirm = null;
                }
                this.confirm = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                    disableClose: true,
                    width: '700px',
                    data: {
                        Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn thu của người bệnh ' +
                            this.benhnhanThongTin.HoTen.bold() + ' với số tiền là ' +
                            this.tongTien.toLocaleString('vi-VI').bold() + ' đồng hay không?'
                    }
                }).afterClosed().subscribe(result => {
                    if (result === 'Yes') {
                        this.GuiVaXuatThuocData(this.thongtinDonThuoc);
                        this.setDefeautTienMat = [1];
                        this.checkSeletedTienMat = true;
                        this.defeautSoTien();
                    }
                });
            }
        }, (err) => {
            this.validationThuThuocErrors = err.ValidationErrors;
        });
    }
    // ======= End Thu tiền và xuất thuốc 
    ThuTien() {
        let checkTien = true;
        if (this.validationErrors !== undefined) {
            this.validationThuThuocErrors = [];
        }
        this.cdRef.detectChanges();
        if (this.setDefeautTienMat.length === 0) {
            this.validationThuThuocErrors.push({
                Message: "Vui lòng chọn hình thức thanh toán.",
                Field: "HinhThucThanhToan",
            });
            return true;
        }
        if (this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault).length === 0) {
            this.notificationService.showError('Người bệnh này không có thuốc nào để thanh toán');
            checkTien = false;
        }
        if (this.thongtinDonThuoc.HinhThucThanhToan.length !== 0 && this.kiemTraNhapSoTienTra(this.thongtinDonThuoc)) {
            this.notificationService.showError('Số tiền nhập không đúng.');
            checkTien = false;
        }
        if (this.dataSourcedanhsachThuoc.length != 0) {
            this.dataSourcedanhsachThuoc.data.forEach(element => {
                if (element.KiemTraTienSoTienItemDichVu === true) {
                    this.notificationService.showError('Thanh toán không hợp lệ');
                    checkTien = false;
                }
            });
        }
        this.thongtinDonThuoc.TongTien = this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo;
        if (this.thongtinDonThuoc.Id == null) {
            this.thongtinDonThuoc.Id = this.id;
        }
        console.log("thongtindonthuoc", this.thongtinDonThuoc);
        this.thongtinDonThuoc.DanhSachDonThuocs = this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault);
        this.apiService.post('QuayThuoc/CheckValidationForQuayThuoc', this.thongtinDonThuoc).subscribe(() => {
            if (checkTien === true) {
                if (this.confirm != null) {
                    // this.dialog.closeAll();
                    this.confirm = null;
                }
                this.confirm = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                    disableClose: true,
                    width: '700px',
                    data: {
                        Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn thu của người bệnh ' +
                            this.benhnhanThongTin.HoTen.bold() + ' với số tiền là ' +
                            this.tongTien.toLocaleString('vi-VI').bold() + ' đồng hay không?'
                    }
                }).afterClosed().subscribe(result => {
                    if (result === 'Yes') {
                        this.GuiData(this.thongtinDonThuoc);
                        this.setDefeautTienMat = [1];
                        this.checkSeletedTienMat = true;
                        this.defeautSoTien();
                    }
                });
            }
        }, (err) => {
            this.validationThuThuocErrors = err.ValidationErrors;
        });
    }
    extCheckboxSelection(event) {
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            element.CheckedDefault = false;
        });
        if (event.length > 0) {
            // tslint:disable-next-line: prefer-for-of
            for (let index = 0; index < event.length; index++) {
                this.dataSourcedanhsachThuoc.data.forEach(element => {
                    let soTienMG = this.tinhSoTienMiemGiam(element);
                    element.SoTienMG = soTienMG;
                    // số tiền người bệnh phải trả đã trừ số tiền miễn giảm
                    let soTienCN = this.soTienCongNoChoTungDichVu(element);
                    if (element.BNConPhaiThanhToan >= element.SoTienMG) {
                        element.BNConPhaiThanhToan = ((element.DonGia * element.SoLuongMua)) - soTienCN - element.SoTienMG;
                    }
                    if (element.Id === event[index]) {
                        return element.CheckedDefault = true;
                    }
                });
            }
        }
        this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
            .reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0));
        this.thongtinDonThuoc.BenhNhanDua = 0;
        this.thongtinDonThuoc.TienTraLai = 0;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            }
            else {
                this.tongTien = 0;
            }
        }
        // var items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        //let pos = this.thongtinDonThuoc.ChuyenKhoan;
        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        //     this.thongtinDonThuoc.POS = 0;
        //     this.thongtinDonThuoc.SoTienCongNo = 0;
        //     this.thongtinDonThuoc.ChuyenKhoan = 0;
        // }
        this.clearHinhThucThanhToan();
        this.defeautSoTien();
        this.setDefeautTienMat = [1];
        this.checkSeletedTienMat = true;
        this.flagCheckSeletedTienMat = true;
        this.thongtinDonThuoc.TienMat = this.tongTien;
        this.resetGiaTienCongNo();
        this.myDanhSachChuaThanhToan();
    }
    resetGiaTienCongNo() {
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            if (element.CheckedDefault !== true) {
                if (element.DanhSachCongNoChoThus != null && element.DanhSachCongNoChoThus.length !== 0) {
                    element.DanhSachCongNoChoThus.forEach(congNo => {
                        congNo.SoTienCongNoChoThu = 0;
                    });
                }
            }
        });
    }
    themThuoc() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.themDuocPham.DuocPhamId == null) {
            this.validationErrors.push({ Message: 'Dược phẩm yêu cầu nhập', Field: 'DuocPhamId' });
        }
        if (this.themDuocPham.SoLuong == null || this.themDuocPham.SoLuong === 0) {
            this.validationErrors.push({ Message: 'Số lượng yêu cầu nhập', Field: 'SoLuong' });
        }
        if (this.themDuocPham.SoLuongTon < this.themDuocPham.SoLuong) {
            this.validationErrors.push({ Message: 'Số lượng phải nhỏ hơn tồn kho', Field: 'SoLuong' });
        }
        if (this.validationErrors.length > 0) {
            return;
        }
        let soLuongDaMua = 0;
        if (this.lstDonThuocMoiThem.length > 0) {
            this.lstDonThuocMoiThem.forEach(x => {
                if (x.DuocPhamId === this.themDuocPham.DuocPhamId) {
                    soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                }
            });
        }
        if (this.themDuocPham.SoLuongTon >= this.themDuocPham.SoLuong) {
            let stt = 1;
            let idNew = 1;
            if (this.dataSourcedanhsachThuoc.data.length > 0) {
                stt = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].STT + 1;
                idNew = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].Id + 1;
            }
            let count = this.themDuocPham.SoLuong;
            let tamp = this.lstthongTinDonThuoc;
            if (this.lstDonThuocMoiThem != undefined || this.lstDonThuocMoiThem != null) {
                for (let jisoo = 0; jisoo < this.lstDonThuocMoiThem.length; jisoo++) {
                    for (let jihoo = 0; jihoo < this.lstthongTinDonThuoc.length; jihoo++) {
                        if (this.lstDonThuocMoiThem[jisoo].Solo == this.lstthongTinDonThuoc[jihoo].Solo) {
                            this.lstthongTinDonThuoc[jihoo].SoLuongTon = this.lstthongTinDonThuoc[jihoo].SoLuongTon - this.lstDonThuocMoiThem[jisoo].SoLuongMua;
                            tamp = this.lstthongTinDonThuoc;
                        }
                    }
                }
            }
            let dsMGThem1 = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["DanhSachMienGiamVo"]();
            let dsMGThem2 = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["DanhSachMienGiamVo"]();
            let danhSachMienGiamVos = new Array();
            dsMGThem1.DoiTuongUuDai = null;
            dsMGThem1.DoiTuongUuDaiId = null;
            dsMGThem1.LoaiChietKhau = 1;
            dsMGThem1.LoaiMienGiam = 3;
            dsMGThem1.MaTheVoucher = null;
            dsMGThem1.SoTien = 0;
            dsMGThem1.TheVoucherId = null;
            dsMGThem1.TiLe = 0;
            danhSachMienGiamVos.push(dsMGThem1);
            dsMGThem2.DoiTuongUuDai = null;
            dsMGThem2.DoiTuongUuDaiId = null;
            dsMGThem2.LoaiChietKhau = 2;
            dsMGThem2.LoaiMienGiam = 3;
            dsMGThem2.MaTheVoucher = null;
            dsMGThem2.SoTien = 0;
            dsMGThem2.TheVoucherId = null;
            dsMGThem2.TiLe = 0;
            danhSachMienGiamVos.push(dsMGThem2);
            for (let index = 0; index < tamp.length; index++) { // tmp don thuuoc
                if (tamp[index].SoLuongTon > 0) {
                    if (count !== 0) {
                        let item = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ThongTinDuocPham"]();
                        if (count <= this.lstthongTinDonThuoc[index].SoLuongTon) {
                            item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                            item.SoLuongMua = count;
                            item.STT = stt;
                            item.Id = idNew;
                            item.CheckedDefault = true;
                            item.isNew = true;
                            item.BacSiKeToa = 'Nhà Thuốc';
                            item.ThanhTien = item.SoLuongMua * item.DonGia;
                            item.BNConPhaiThanhToan = item.ThanhTien;
                            item.ThanhTienHienThi = Math.round(item.ThanhTien);
                            item.DonGiaHienThi = Math.round(item.DonGia);
                            item.BNConPhaiThanhToanHienThi = Math.round(item.ThanhTien);
                            item.DanhSachCongNoChoThus = [];
                            item.DanhSachMienGiamVos = danhSachMienGiamVos;
                            if (this.danhSachCongNoChoThus.length > 0) {
                                if (this.danhSachCongNoChoThus[0].CongNoChoThus.length !== 0 ||
                                    this.danhSachCongNoChoThus == null || this.danhSachCongNoChoThus === undefined) {
                                    for (let i = 0; i < this.danhSachCongNoChoThus[0].CongNoChoThus.length; i++) {
                                        const congNo = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["CongNoChoThu"]();
                                        congNo.ViTri = i;
                                        congNo.CongNoId = this.danhSachCongNoChoThus[0].CongNoChoThus[i].CongNoId;
                                        congNo.TenCongTy = this.danhSachCongNoChoThus[0].CongNoChoThus[i].TenCongTy;
                                        congNo.SoTienCongNoChoThu = 0;
                                        item.DanhSachCongNoChoThus.push(congNo);
                                    }
                                }
                            }
                            this.lstDonThuocMoiThem.push(item);
                            this.mySelectionInPage.push(idNew);
                            this.mySelection = this.mySelection.concat(this.mySelectionInPage);
                            this.lstthongTinDonThuoc[index].SoLuongTon = this.lstthongTinDonThuoc[index].SoLuongTon - count;
                            this.dataSourcedanhsachThuoc.data.push(item);
                            this.duocPhamCombobox.focusManual();
                            count = 0;
                        }
                        else {
                            item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                            item.SoLuongMua = this.lstthongTinDonThuoc[index].SoLuongTon;
                            item.ThanhTien = item.SoLuongMua * item.DonGia;
                            item.BNConPhaiThanhToan = Math.round(item.ThanhTien);
                            item.ThanhTienHienThi = Math.round(item.ThanhTien);
                            item.DonGiaHienThi = Math.round(item.DonGia);
                            item.BNConPhaiThanhToanHienThi = Math.round(item.ThanhTien);
                            item.STT = stt;
                            item.Id = idNew;
                            item.isNew = true;
                            item.CheckedDefault = true;
                            item.BacSiKeToa = 'Nhà Thuốc';
                            count = count - this.lstthongTinDonThuoc[index].SoLuongTon;
                            item.DanhSachCongNoChoThus = [];
                            item.DanhSachMienGiamVos = danhSachMienGiamVos;
                            if (this.danhSachCongNoChoThus.length > 0) {
                                if (this.danhSachCongNoChoThus[0].CongNoChoThus.length !== 0 ||
                                    this.danhSachCongNoChoThus == null || this.danhSachCongNoChoThus === undefined) {
                                    // tslint:disable-next-line: prefer-for-of
                                    for (let i = 0; i < this.danhSachCongNoChoThus[0].CongNoChoThus.length; i++) {
                                        const congNo = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["CongNoChoThu"]();
                                        congNo.ViTri = i;
                                        congNo.CongNoId = this.danhSachCongNoChoThus[0].CongNoChoThus[i].CongNoId;
                                        congNo.TenCongTy = this.danhSachCongNoChoThus[0].CongNoChoThus[i].TenCongTy;
                                        congNo.SoTienCongNoChoThu = 0;
                                        item.DanhSachCongNoChoThus.push(congNo);
                                    }
                                }
                            }
                            this.lstDonThuocMoiThem.push(item);
                            this.mySelectionInPage.push(idNew);
                            this.mySelection = this.mySelection.concat(this.mySelectionInPage);
                            this.dataSourcedanhsachThuoc.data.push(item);
                            this.duocPhamCombobox.focusManual();
                            this.lstthongTinDonThuoc.splice(index, 1);
                            index = -1;
                        }
                        idNew++;
                        stt++;
                    }
                    else {
                        break;
                    }
                }
            }
            if (this.lstDonThuocMoiThem.length > 0) {
                this.lstDonThuocMoiThem.forEach(x => {
                    if (x.DuocPhamId === this.themDuocPham.DuocPhamId) {
                        soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                    }
                });
            }
            this.themDuocPham.SoLuongTon = this.themDuocPham.SoLuongTon - this.themDuocPham.SoLuong;
            this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
            this.tongTien = this.tongTienGrid;
            if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
                if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                    this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
                }
                else {
                    this.tongTien = 0;
                }
            }
            // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
            //     this.thongtinDonThuoc.TienMat = this.tongTien;
            // }
            let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
            if (items != null && items.length > 0) {
                this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
            }
            this.themDuocPham = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ThemDuocPham"]();
        }
        else {
            this.notificationService.showError('Số lượng bạn nhập lớn hơn số lượng tồn');
        }
        this.gridData = this.dataSourcedanhsachThuoc.data;
        this.setSelectAll();
        this.danhSachXemTruocBangKeThuocVaVatTu(this.dataSourcedanhsachThuoc.data);
    }
    // change số lượng mua trả các giá trị về bằng 0
    modelChangeSoLuongMua(ev, dsQuayThuocs) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === dsQuayThuocs.Id) {
                    this.dataSourcedanhsachThuoc.data[index].SoLuongMua = ev;
                    let soTienMGiam = this.tinhSoTienMiemGiam(this.dataSourcedanhsachThuoc.data[index]);
                    this.dataSourcedanhsachThuoc.data[index].SoTienMG = soTienMGiam;
                    this.dataSourcedanhsachThuoc.data[index].ThanhTien = ev * this.dataSourcedanhsachThuoc.data[index].DonGia;
                    this.changeInputSoTienMGBindGrid(this.dataSourcedanhsachThuoc.data[index]);
                    // this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan = this.dataSourcedanhsachThuoc.data[index].ThanhTien;
                    if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus != null) {
                        if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length > 0) {
                            // tslint:disable-next-line: prefer-for-of
                            for (let i = 0; i < this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length; i++) {
                                this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[i].SoTienCongNoChoThu = 0;
                                this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                            }
                        }
                    }
                }
            }
        }
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            }
            else {
                this.tongTien = 0;
            }
        }
        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
    }
    modelChangeSoTienMg(ev, data) {
        data.SoTienMG = ev;
        this.changeInputSoTienMgBindGrid(data);
        this.myDanhSachChuaThanhToan();
    }
    changeInputSoTienMgBindGrid(data) {
        const totalCongNo = this.itemTotalCongNo(data.DanhSachCongNoChoThus);
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === data.Id) {
                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                        this.dataSourcedanhsachThuoc.data[index].ThanhTien - totalCongNo - data.SoTienMG;
                    this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                        this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                }
            }
        }
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            }
            else {
                this.tongTien = 0;
            }
        }
        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }
        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
    }
    getThongTinMienGiam(id) {
        this.apiService.get('ThuNgan/GetThongTinMienGiam?yeuCauTiepNhanId=' + id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.thongTinMienGiamVos = resultData;
                this.bindChiaPhanTramDoiTuongUuDai();
                if (this.apDungMienGiam === true) {
                    this.notificationService.showSuccess('Áp dụng miễn giảm thành công.');
                }
                this.afterChangedMg.emit();
            }
        });
        this.cdRef.detectChanges();
    }
    modelChangeCongNo(ev, data, vtri) {
        data.DanhSachCongNoChoThus[vtri].SoTienCongNoChoThu = ev;
        data.SoTienMG = 0;
        this.changeInputCongNoBindGrid(data);
        this.myDanhSachChuaThanhToan();
    }
    changeInputCongNoBindGrid(data) {
        const totalCongNo = this.itemTotalCongNo(data.DanhSachCongNoChoThus);
        // tslint:disable-next-line: prefer-for-
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === data.Id) {
                    this.dataSourcedanhsachThuoc.data[index].SoTienMG = this.tinhSoTienMiemGiam(this.dataSourcedanhsachThuoc.data[index]);
                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                        this.dataSourcedanhsachThuoc.data[index].ThanhTien - totalCongNo - this.dataSourcedanhsachThuoc.data[index].SoTienMG;
                    this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                        this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                }
            }
        }
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            }
            else {
                this.tongTien = 0;
            }
        }
        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }
        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
    }
    modelChangePos(ev, type) {
        const total = (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.SoTienCongNo) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienPos = [total, 0];
        this.thongtinDonThuoc.POS = ev;
        this.onValueChange(ev, type);
    }
    modelChangeChuyenKhoan(ev, type) {
        const total = (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo) !== 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienChuyenKhoan = [total, 0];
        this.thongtinDonThuoc.ChuyenKhoan = ev;
        this.onValueChange(ev, type);
    }
    modelChangeTienMat(ev, type) {
        const total = (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienMat = [total, 0];
        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
        this.thongtinDonThuoc.TienMat = ev;
        this.onValueChange(ev, type);
    }
    modelChangeSoTienCongNo(ev, type) {
        const total = (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.TienMat) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.TienMat);
        this.selectMoneySoTienCongNo = [total, 0];
        this.thongtinDonThuoc.SoTienCongNo = ev;
        this.onValueChange(ev, type);
    }
    modelChangeTienBNDua(input) {
        this.selectMoneyTienBNDua = [this.tongTien, 100000000];
        this.thongtinDonThuoc.TienTraLai = input - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }
    onChangeBenhNhanDua() {
        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }
    // Begin pttt và công nợ cho quầy thuốc 21/08/2020
    defeautSoTien() {
        this.thongtinDonThuoc.TienMat = 0;
        this.thongtinDonThuoc.POS = 0;
        this.thongtinDonThuoc.SoTienCongNo = 0;
        this.thongtinDonThuoc.ChuyenKhoan = 0;
        this.thongtinDonThuoc.BenhNhanDua = 0;
        this.thongtinDonThuoc.TienTraLai = 0;
    }
    tinhTienChoPhuongThucThanhToan(item) {
        switch (item) {
            case 1:
                this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.TienMat < 0) {
                    this.thongtinDonThuoc.TienMat = 0;
                }
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                    this.thongtinDonThuoc.ChuyenKhoan = 0;
                }
                break;
            case 3:
                this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.POS < 0) {
                    this.thongtinDonThuoc.POS = 0;
                }
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
                if (this.thongtinDonThuoc.SoTienCongNo < 0) {
                    this.thongtinDonThuoc.SoTienCongNo = 0;
                }
                break;
        }
    }
    ChangeHinhThucThanhToan(event) {
        this.clearHinhThucThanhToan();
        this.defeautSoTien();
        this.showCanhBaoSoTienNhap = false;
        var items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length === 1) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
        event.forEach((element) => {
            switch (element) {
                case 1:
                    this.flagCheckSeletedTienMat = true;
                    break;
                case 2:
                    this.flagCheckSeletedChuyenKhoan = true;
                    break;
                case 3:
                    this.flagCheckSeletedPos = true;
                    break;
                case 4:
                    this.flagCheckSeletedSoTienCongNo = true;
                    break;
            }
        });
        this.hinhThucThanhToan.forEach(item => { item.Change = false; });
        this.hinhThucThanhToan.forEach(item => {
            if (event.filter(o => o == item.KeyId).length > 0) {
                item.Selected = true;
                if (event.length == 1) {
                    switch (item.KeyId) {
                        case 1:
                            this.thongtinDonThuoc.TienMat = this.tongTien;
                            break;
                        case 2:
                            this.thongtinDonThuoc.ChuyenKhoan = this.tongTien;
                            break;
                        case 3:
                            this.thongtinDonThuoc.POS = this.tongTien;
                            break;
                        case 4:
                            this.thongtinDonThuoc.SoTienCongNo = this.tongTien;
                            break;
                    }
                }
            }
            else {
                item.Selected = false;
            }
        });
        this.cdRef.detectChanges();
    }
    onValueChange(event, type) {
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
        this.hinhThucThanhToan.forEach(item => {
            if (item.KeyId == type) {
                item.Change = true;
            }
        });
        var itemNotChanges = this.hinhThucThanhToan.filter(o => o.Selected == true && o.Change == false);
        if (itemNotChanges.length == 1) {
            this.changeSoTien(itemNotChanges[0].KeyId);
        }
        else {
            if (itemNotChanges.length == 0 && this.hinhThucThanhToan.filter(o => o.Selected == true).length == 2) {
                var items = this.hinhThucThanhToan.filter(o => o.Selected == true && o.KeyId != type);
                this.changeSoTien(items[0].KeyId);
            }
        }
        if (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo != this.tongTien) {
            this.showCanhBaoSoTienNhap = true;
        }
        else {
            this.showCanhBaoSoTienNhap = false;
        }
        this.changeTienTraLaiBenhNhan();
    }
    changeSoTien(items) {
        switch (items) {
            case 1:
                this.thongtinDonThuoc.TienMat = (this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = (this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 3:
                this.thongtinDonThuoc.POS = (this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = (this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS;
                break;
        }
    }
    changeTienTraLaiBenhNhan() {
        if (this.thongtinDonThuoc.BenhNhanDua > this.thongtinDonThuoc.TienMat) {
            this.thongtinDonThuoc.TienTraLai =
                this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        }
        else {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }
    // End pttt và công nợ cho quầy thuốc 21/08/2020
    onKeyEnterAddItem(event) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {
                this.themThuoc();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }
    openCombobox(event) {
        if (event) {
            this.isSelectingItem = true;
        }
        else {
            this.isSelectingItem = false;
        }
    }
    onKey(event) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {
                this.themThuoc();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }
    apDungMiemGiamThem() {
        let dataMGT = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["ApDungMiemGiamThem"];
        if (this.confrim != null) {
            this.dialog.closeAll();
            this.confrim = null;
        }
        this.confrim = this.dialog.open(_ap_dung_miem_giam_them_popup_ap_dung_miem_giam_them_popup_component__WEBPACK_IMPORTED_MODULE_15__["ApDungMiemGiamThemPopupComponent"], {
            disableClose: true,
            width: "500px",
            data: { dataMGT }
        }).afterClosed().subscribe((result) => {
            if (result != null) {
                // this.dataSourcedanhsachThuoc.data.forEach(element => {
                //     if(element.DanhSachMienGiamVos != null)
                //     {
                //         for (const danhSachMienGiam of element.DanhSachMienGiamVos.filter(x => x.LoaiMienGiam === this.loaiMienGiam.MienGiamThem)) {
                //             element.DanhSachMienGiamVos.splice(element.DanhSachMienGiamVos.indexOf(danhSachMienGiam), 1);
                //         }
                //     }
                // });
                this.dataSourcedanhsachThuoc.data.forEach(element => {
                    element.GhiChuMienGiamThem = result.GhiChu;
                    element.DanhSachMienGiamVos = new Array();
                    if (result.TiLe != undefined && result.TiLe != null) {
                        let dsMiemGiamThem = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["DanhSachMienGiamVo"]();
                        dsMiemGiamThem.LoaiMienGiam = this.loaiMienGiam.MienGiamThem;
                        dsMiemGiamThem.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoTiLe;
                        dsMiemGiamThem.TiLe = result.TiLe;
                        element.DanhSachMienGiamVos.push(dsMiemGiamThem);
                    }
                    if (result.SoTien != undefined && result.SoTien != null) {
                        let dsMiemGiamThem = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["DanhSachMienGiamVo"]();
                        dsMiemGiamThem.LoaiMienGiam = this.loaiMienGiam.MienGiamThem;
                        dsMiemGiamThem.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
                        dsMiemGiamThem.SoTien = result.SoTien;
                        dsMiemGiamThem.SoTienMiemGiamTatCa = result.SoTien;
                        element.DanhSachMienGiamVos.push(dsMiemGiamThem);
                    }
                });
                console.log(result);
                // console.log("data miễn giảm",this.dataSourcedanhsachThuoc.data);
                this.dataSourcedanhsachThuoc.data.forEach(element => {
                    element.SoTienMG = this.tinhSoTienMiemGiam(element);
                    if (element.SoTienMG > element.BNConPhaiThanhToan) {
                        this.notificationService.showSuccess('Số tiền áp dụng lớn hơn số tiền cần thanh toán.');
                    }
                    // số tiền người bệnh phải trả đã trừ số tiền miễn giảm
                    let soTienCN = this.soTienCongNoChoTungDichVu(element);
                    if (element.BNConPhaiThanhToan >= element.SoTienMG) {
                        element.BNConPhaiThanhToan = ((element.DonGia * element.SoLuongMua)) - soTienCN - element.SoTienMG;
                    }
                });
                this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
                this.tongTien = this.tongTienGrid;
                if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
                    if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                        this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
                    }
                    else {
                        this.tongTien = 0;
                    }
                }
                // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                //     this.thongtinDonThuoc.TienMat = this.tongTien;
                // }
                let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
                if (items != null && items.length > 0) {
                    this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
                }
                this.notificationService.showSuccess("Áp dụng miễn giảm thành công.");
            }
        });
    }
    tinhSoTienMiemGiam(dataItem) {
        let tongTatCaSoTienMg = 0;
        var tiLePhanTramConLai = 100;
        let tongTienTungDichVu = ((dataItem.DonGia * dataItem.SoLuongMua)) - this.soTienCongNoChoTungDichVu(dataItem);
        var soTienConLai = tongTienTungDichVu;
        if (tongTienTungDichVu > 0) {
            var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
            var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2 && item.SoTien != 0);
            if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
                //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
                dsMienGiamTheoPhanTram = underscore__WEBPACK_IMPORTED_MODULE_17__["sortBy"](dsMienGiamTheoPhanTram, 'LoaiMienGiam');
                dsMienGiamTheoPhanTram.forEach(item => {
                    //Nếu tỉ lệ còn lại sau khi đổ từ trên xuống
                    if (tiLePhanTramConLai > 0) {
                        item.TiLe = item.TiLe > tiLePhanTramConLai ? tiLePhanTramConLai : item.TiLe;
                    }
                    else {
                        item.TiLe = 0;
                    }
                    item.TongTienMiemGiam = (item.TiLe * tongTienTungDichVu) / 100;
                    tongTatCaSoTienMg += item.TongTienMiemGiam;
                    if (item.TiLe >= tiLePhanTramConLai) {
                        tiLePhanTramConLai = 0;
                    }
                    else {
                        tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
                    }
                });
            }
            if (tiLePhanTramConLai > 0 && dsMienGiamTheoSoTien != null && dsMienGiamTheoSoTien.length > 0) {
                tiLePhanTramConLai = dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0 ? tiLePhanTramConLai : 0;
                soTienConLai = tiLePhanTramConLai != 0 ? (((dataItem.ThanhTien - this.soTienCongNoChoTungDichVu(dataItem)) * tiLePhanTramConLai) / 100) : dataItem.ThanhTien - this.soTienCongNoChoTungDichVu(dataItem);
                //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
                dsMienGiamTheoSoTien = underscore__WEBPACK_IMPORTED_MODULE_17__["sortBy"](dsMienGiamTheoSoTien, 'LoaiMienGiam');
                dsMienGiamTheoSoTien.forEach(item => {
                    //Nếu số tiền còn lại sau khi đổ từ trên xuống
                    if (soTienConLai > 0) {
                        item.SoTien = item.SoTien > soTienConLai ? soTienConLai : item.SoTien;
                    }
                    else {
                        item.SoTien = 0;
                    }
                    item.TongTienMiemGiam = item.SoTien;
                    tongTatCaSoTienMg += item.TongTienMiemGiam;
                    if (item.SoTien >= soTienConLai) {
                        soTienConLai = 0;
                    }
                    else {
                        soTienConLai = soTienConLai - item.SoTien;
                    }
                });
            }
            else {
                dsMienGiamTheoSoTien = underscore__WEBPACK_IMPORTED_MODULE_17__["sortBy"](dsMienGiamTheoSoTien, 'LoaiMienGiam');
                dsMienGiamTheoSoTien.forEach(item => {
                    //NẾU PHẦN TRĂM MÀ SÀI HẾT THÌ BIND TIỀN TẤT CẢ CON LẠI BẰNG 0
                    item.SoTien = 0;
                });
            }
        }
        return tongTatCaSoTienMg < 0 ? 0 : tongTatCaSoTienMg;
    }
    soTienCongNoChoTungDichVu(dataItem) {
        let soTienCongNo = 0;
        if (dataItem.DanhSachCongNoChoThus != null) {
            dataItem.DanhSachCongNoChoThus.forEach(element => {
                soTienCongNo = soTienCongNo + element.SoTienCongNoChoThu;
            });
        }
        return soTienCongNo;
    }
    apDungMiemGiamChoTungDichVu(dataItem) {
        // this.dataSourcedanhsachThuoc.data = this.danhSachChiPhiKhamChuaBenh;
        let isView = true;
        if (this.confrim != null) {
            this.dialog.closeAll();
            this.confrim = null;
        }
        this.confrim = this.dialog.open(_ap_dung_miem_giam_cho_tung_loai_thuoc_popup_ap_dung_miem_giam_cho_tung_loai_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_16__["ApDungMiemGiamChoTungLoaiThuocPopupComponent"], {
            disableClose: true,
            width: "500px",
            data: { dataItem, isView },
        }).afterClosed().subscribe((result) => {
            if (result != null) {
                //tính số tiền miễm giam tren grid                
                if (result.apdungMGTThanhCong) {
                    this.dataSourcedanhsachThuoc.data.forEach(element => {
                        if (element.Id === result.Id) {
                            element.GhiChuMienGiamThem = result.GhiChuMienGiamThem;
                            element.SoTienMG = this.tinhSoTienMiemGiam(element);
                            this.modelChangeSoTienMG(element);
                        }
                    });
                    console.log("data", this.dataSourcedanhsachThuoc.data);
                    this.notificationService.showSuccess("Áp dụng miễn giảm thành công.");
                }
                else {
                    this.dataSourcedanhsachThuoc.data.forEach(element => {
                        if (element.Id === result.Id) {
                            if (element.DanhSachMienGiamVos != null) {
                                element.DanhSachMienGiamVos.forEach(item => {
                                    result.DanhSachMienGiamVos.forEach(item1 => {
                                        if (item1.LoaiMienGiam === item.LoaiMienGiam && item1.LoaiChietKhau === 1) {
                                            {
                                                item.TiLe = item1.TiLe;
                                                item.TongTienMiemGiam = 0;
                                                item.DaSuDung = false;
                                            }
                                        }
                                        if (item1.LoaiMienGiam === item.LoaiMienGiam && item1.LoaiChietKhau === 2) {
                                            {
                                                item.SoTien = item1.SoTien;
                                                item.TongTienMiemGiam = 0;
                                                item.DaSuDung = false;
                                            }
                                        }
                                    });
                                });
                            }
                        }
                    });
                }
            }
        });
    }
    modelChangeSoTienMG(data) {
        this.changeInputSoTienMGBindGrid(data);
        this.myDanhSachChuaThanhToan();
    }
    changeInputSoTienMGBindGrid(dsChiPhiKhamChuaBenh) {
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            let totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === dsChiPhiKhamChuaBenh.Id) {
                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                    this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu = this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                }
            }
        }
        this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_10__["process"])(this.dataSourcedanhsachThuoc.data, this.state);
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            }
            else {
                this.tongTien = 0;
            }
        }
        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }
        // this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0));
        // this.tongTien = this.tongTienGrid;
        // if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
        //     if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
        //         this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
        //     } else {
        //         this.tongTien = 0;
        //     }
        // }
        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }
    }
    nguoiBenhKhongMuaThuoc() {
        debugger;
        var self = this;
        const yeuCauTiepNhanId = this.route.snapshot.params.id;
        if (this.dataSourcedanhsachThuoc.data.length > 0) {
            var nguoiDungKhongMuaDonThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["NguoiDungKhongMuaDonThuoc"]();
            nguoiDungKhongMuaDonThuoc.YeuCauTiepNhanId = yeuCauTiepNhanId;
            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Delete)) {
                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: "Người bệnh không muốn mua thuốc này?" }
                }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                        self.apiService.post("QuayThuoc/NguoiBenhKhongMuaDonThuoc", nguoiDungKhongMuaDonThuoc).subscribe(() => {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                            this.router.navigate(['nha-thuoc']);
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                    }
                });
            }
            else {
                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_21__["SystemMessage"].UnAuthorizedMessage);
            }
        }
    }
    showPopupLoadingIn() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang loading...' },
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
};
QuayThuocHinhThucThanhToanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "danhSachChuaThanhToan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "benhnhanThongTin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "apDungCongNoThuoc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "apDungMienGiam", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "thongTinTam", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "viTri", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "thongTinMienGiamVos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "afterChangedCongNo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "afterChangedMg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocHinhThucThanhToanComponent.prototype, "changeTab", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocPhamCombobox', { static: false })
], QuayThuocHinhThucThanhToanComponent.prototype, "duocPhamCombobox", void 0);
QuayThuocHinhThucThanhToanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-quay-thuoc-hinh-thuc-thanh-toan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-hinh-thuc-thanh-toan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-hinh-thuc-thanh-toan.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.scss")).default]
    })
], QuayThuocHinhThucThanhToanComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.scss ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".xac-nhan-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.title {\n  font-size: 15px;\n  background: #ebeced;\n  border: 1px solid #ccc;\n  padding: 5px;\n}\n\nmat-icon {\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.warning {\n  margin-bottom: -8px;\n  margin-top: 0px;\n  color: #ff5722;\n}\n\n.info {\n  color: #00bcd4;\n}\n\n.ten-dich-vu-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.tooltip-block {\n  background: #005dab;\n  color: #fff;\n}\n\n.tooltip-block * {\n  font-size: 13px;\n}\n\nsection.check-box-huong-bhyt {\n  display: flex;\n  justify-content: center;\n}\n\n.color-red {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy1raGFjaC12YW5nLWxhaS1jaG8tdGhhbmgtdG9hbi9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXHF1YXktdGh1b2Mta2hhY2gtdmFuZy1sYWktY2hvLXRoYW5oLXRvYW5cXHF1YXktdGh1b2Mta2hhY2gtdmFuZy1sYWktY2hvLXRoYW5oLXRvYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2Mta2hhY2gtdmFuZy1sYWktY2hvLXRoYW5oLXRvYW4vcXVheS10aHVvYy1raGFjaC12YW5nLWxhaS1jaG8tdGhhbmgtdG9hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy1raGFjaC12YW5nLWxhaS1jaG8tdGhhbmgtdG9hbi9xdWF5LXRodW9jLWtoYWNoLXZhbmctbGFpLWNoby10aGFuaC10b2FuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnhhYy1uaGFuLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLndhcm5pbmcge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjZmY1NzIyO1xufVxuXG4uaW5mbyB7XG4gIGNvbG9yOiAjMDBiY2Q0O1xufVxuXG4udGVuLWRpY2gtdnUtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udG9vbHRpcC1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICMwMDVkYWI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9vbHRpcC1ibG9jayAqIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zZWN0aW9uLmNoZWNrLWJveC1odW9uZy1iaHl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufSIsIi54YWMtbmhhbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbm1hdC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi53YXJuaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cblxuLmluZm8ge1xuICBjb2xvcjogIzAwYmNkNDtcbn1cblxuLnRlbi1kaWNoLXZ1LWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRvb2x0aXAtYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjMDA1ZGFiO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvb2x0aXAtYmxvY2sgKiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuc2VjdGlvbi5jaGVjay1ib3gtaHVvbmctYmh5dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: QuayThuocKhachVangLaiChoThanhToanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocKhachVangLaiChoThanhToanComponent", function() { return QuayThuocKhachVangLaiChoThanhToanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/delete */ "./node_modules/@iconify/icons-ic/delete.js");
/* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-info */ "./node_modules/@iconify/icons-ic/twotone-info.js");
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");















let QuayThuocKhachVangLaiChoThanhToanComponent = class QuayThuocKhachVangLaiChoThanhToanComponent {
    constructor(apiService, notificationService, dialog, snackBar, cdRef, router) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.cdRef = cdRef;
        this.router = router;
        this.tongTien = 0;
        this.tongTienHienThi = 0;
        this.icDelete = _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.validationThuThuocErrors = [];
        this.flagCheckSeletedTienMat = false;
        this.flagCheckSeletedChuyenKhoan = false;
        this.flagCheckSeletedPos = false;
        this.flagCheckSeletedSoTienCongNo = false;
        this.soLuongTonTrongKho = 0;
        this.icInfo = _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.arrayThanhToans = [];
        this.arrayThanhToanstmp = [];
        this.selectItem = [];
        this.checkSeletedTienMat = false;
        this.checkSeletedChuyenKhoan = false;
        this.checkSeletedPos = false;
        this.isSelectingItem = false;
        this.selectMoneyTienBNDua = null;
        this.selectMoneyTienMat = null;
        this.selectMoneyTienChuyenKhoan = null;
        this.selectMoneyTienPos = null;
        this.selectMoneySoTienCongNo = null;
        this.setDefeautTienMat = [1];
        this.showCanhBaoSoTienNhap = false;
        this.tongTienGrid = 0;
        this.danhSachChuaThanhToan = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.valueChangeThuTien = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gridColumns = [];
        this.lstDonThuocMoiThem = Array();
        this.dataSourcedanhsachThuoc = {
            data: [],
            total: 0
        };
        this.hinhThucThanhToan = [
            { KeyId: 1, DisplayName: "Tiền mặt", Selected: false, Change: false },
            { KeyId: 2, DisplayName: "Chuyển khoản", Selected: false, Change: false },
            { KeyId: 3, DisplayName: "Pos", Selected: false, Change: false },
            { KeyId: 4, DisplayName: "Công nợ", Selected: false, Change: false },
        ];
        this.changeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.MaTiepNhanBenhNhanDaThuTien = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.donThuocIds = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].QuayThuoc;
        this.thongtinDonThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__["ThongTinDonThuoc"]();
        this.lstDonThuocMoiThem = new Array();
        this.themDuocPham = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__["ThemDuocPham"]();
        this.deleteItem = new Array();
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 40, Sortable: false },
            { Field: "TenDuocPham", Title: "Tên Thuốc-Vật Tư", Width: 120, Sortable: false },
            // { Field: "MaHoatChat", Title: "Hoạt Chất", Width: 120, Sortable: false },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60, Sortable: false },
            { Field: "ViTri", Title: "Vị trí", Width: 120, Sortable: false },
            { Field: "SoLuongMua", Title: "SL Mua", Width: 90, Sortable: false, Template: this.soLuonTemplate },
            { Field: "DonGia", Title: "Đơn giá", Width: 100, Sortable: false, Template: this.donGiaTemplate, TemplateFooter: this.footerTemplateDonGia },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.footerTemplateTongTienDonThuoc },
            { Field: "Solo", Title: "Số lô", Width: 120, Sortable: false },
            { Field: "HanSuDungHientThi", Title: "Hạn sử dụng", Width: 100, Sortable: false },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
        ];
        this.flagCheckSeletedTienMat = true;
        this.thongtinDonThuoc.NgayThu = new Date();
        this.thongtinDonThuoc.NoiDungThu = "Thu tiền thuốc";
        this.thongtinDonThuoc.HinhThucThanhToan = [1];
        this.hinhThucThanhToan = [
            { KeyId: 1, DisplayName: "Tiền mặt", Selected: true, Change: false },
            { KeyId: 2, DisplayName: "Chuyển khoản", Selected: false, Change: false },
            { KeyId: 3, DisplayName: "Pos", Selected: false, Change: false },
            { KeyId: 4, DisplayName: "Công nợ", Selected: false, Change: false },
        ];
        ;
        if (this.donThuocId.ToaThuoc != null) {
            this.getDonThuocChiTietCu();
        }
    }
    onSelectDuocPham(event) {
        if (event !== undefined) {
            this.apiService.post('QuayThuoc/GetThongTinDuocPham?duocPhamId=' + event.KeyId + "&LoaiDuocPhamHoacVatTu=" + event.LoaiDuocPhamHoacVatTu).subscribe(resultData => {
                debugger;
                let soLuongTon = 0;
                this.lstthongTinDonThuoc = resultData;
                if (this.lstDonThuocMoiThem.length > 0) {
                    this.lstDonThuocMoiThem.forEach(x => {
                        if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                            soLuongTon = soLuongTon + x.SoLuongMua;
                        }
                    });
                }
                debugger;
                this.themDuocPham.SoLuongTon = resultData.reduce((sum, item) => sum + item.SoLuongTon, 0) - soLuongTon;
            });
        }
        else {
            this.themDuocPham.SoLuongTon = null;
        }
    }
    delete(event) {
        if (event != undefined && event != null) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xóa thuốc/vật tư này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    let i = 0;
                    let stt = event.STT;
                    for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                        if (this.dataSourcedanhsachThuoc.data[index].STT == event.STT) {
                            i = index;
                            this.soLuongTonTrongKho = this.dataSourcedanhsachThuoc.data[index].SoLuongTon;
                        }
                    }
                    this.dataSourcedanhsachThuoc.data[i].SoLuongDung = null;
                    this.dataSourcedanhsachThuoc.data[i].HighLightClass = null;
                    this.deleteItem.push(this.dataSourcedanhsachThuoc.data[i]);
                    this.lstthongTinDonThuoc = new Array();
                    this.lstthongTinDonThuoc.push(this.dataSourcedanhsachThuoc.data[i]);
                    this.dataSourcedanhsachThuoc.data.splice(i, 1);
                    let soLuongTon = 0;
                    let tenDuocPhamText = "";
                    let duocPhamId = 0;
                    if (this.deleteItem.length > 0) {
                        this.deleteItem.forEach(x => {
                            soLuongTon = soLuongTon + x.SoLuongMua;
                            tenDuocPhamText = x.TenDuocPham;
                            duocPhamId = x.DuocPhamId;
                        });
                    }
                    this.thongtinDonThuoc.BenhNhanDua = 0;
                    this.thongtinDonThuoc.TienTraLai = null;
                    this.lstDonThuocMoiThem = new Array();
                    for (let index0 = 0; index0 < i; index0++) {
                        this.lstDonThuocMoiThem.push(this.dataSourcedanhsachThuoc.data[index0]);
                    }
                    for (let index1 = i; index1 < this.dataSourcedanhsachThuoc.data.length; index1++) {
                        this.dataSourcedanhsachThuoc.data[index1].STT = stt;
                        this.lstDonThuocMoiThem.push(this.dataSourcedanhsachThuoc.data[index1]);
                        stt++;
                    }
                    this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                    this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                    // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                    //     this.thongtinDonThuoc.TienMat = this.tongTien;
                    // }
                    let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
                    if (items != null && items.length > 0) {
                        this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
                    }
                    if (this.themDuocPham.DuocPhamId == duocPhamId) {
                        this.apiService.post("QuayThuoc/GetThongTinDuocPham?duocPhamId=" + event.DuocPhamId).subscribe(resultData => {
                            let soLuongTon = 0;
                            if (this.dataSourcedanhsachThuoc.data.length != 0) {
                                this.dataSourcedanhsachThuoc.data.forEach(x => {
                                    if (x.DuocPhamId == event.DuocPhamId) {
                                        soLuongTon = soLuongTon + x.SoLuongMua;
                                    }
                                });
                            }
                            this.themDuocPham.SoLuongTon = resultData.reduce((sum, item) => sum + item.SoLuongTon, 0) - soLuongTon;
                        });
                    }
                    this.notificationService.showSuccess("Xóa thành công");
                    this.danhSachXemTruocBangKeThuocVaVatTu(this.dataSourcedanhsachThuoc.data);
                }
            });
        }
        ;
    }
    onChangeTienThoi() {
        if (this.thongtinDonThuoc.BenhNhanDua < this.tongTien) {
            this.thongtinDonThuoc.TienTraLai = null;
            return;
        }
        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.tongTien;
    }
    setLastItemDelete() {
        if (this.arrayThanhToanstmp.length > 1 && this.arrayThanhToanstmp[this.arrayThanhToanstmp.length - 2].length > this.arrayThanhToans.length) {
            var truoc = this.arrayThanhToanstmp[this.arrayThanhToanstmp.length - 2];
            var sau = this.arrayThanhToanstmp[this.arrayThanhToanstmp.length - 1];
            var valRemove = truoc.filter(arr1Item => !sau.includes(arr1Item));
            let val = 0;
            if (valRemove == 3) {
                val = this.thongtinDonThuoc.POS;
                this.thongtinDonThuoc.POS = 0;
            }
            if (valRemove == 2) {
                val = this.thongtinDonThuoc.ChuyenKhoan;
                this.thongtinDonThuoc.ChuyenKhoan = 0;
            }
            if (valRemove == 1) {
                val = this.thongtinDonThuoc.TienMat;
                this.thongtinDonThuoc.TienMat = 0;
            }
            let lastKeCuoi = this.arrayThanhToanstmp[this.arrayThanhToanstmp.length - 1];
            var kiemTraCuoiCongNoKhong = lastKeCuoi[lastKeCuoi.length - 1];
            if (kiemTraCuoiCongNoKhong === 4) {
                let kpCongNo = lastKeCuoi[lastKeCuoi.length - 2];
                if (kpCongNo == 2) {
                    this.thongtinDonThuoc.ChuyenKhoan += val;
                }
                if (kpCongNo == 3) {
                    this.thongtinDonThuoc.POS += val;
                }
                if (kpCongNo == 1) {
                    this.thongtinDonThuoc.TienMat += val;
                }
            }
            else {
                let kpCongNo = lastKeCuoi[lastKeCuoi.length - 1];
                if (kpCongNo == 2) {
                    this.thongtinDonThuoc.ChuyenKhoan += val;
                }
                if (kpCongNo == 3) {
                    this.thongtinDonThuoc.POS += val;
                }
                if (kpCongNo == 1) {
                    this.thongtinDonThuoc.TienMat += val;
                }
            }
        }
    }
    clearHinhThucThanhToan() {
        this.flagCheckSeletedTienMat = false;
        this.flagCheckSeletedChuyenKhoan = false;
        this.flagCheckSeletedPos = false;
        this.checkSeletedTienMat = false;
        this.checkSeletedChuyenKhoan = false;
        this.flagCheckSeletedSoTienCongNo = false;
        this.checkSeletedPos = false;
    }
    setLastItem() {
        this.arrayThanhToans.sort();
        let lastItem = this.arrayThanhToans[this.arrayThanhToans.length - 1];
        if (lastItem == 1) {
            this.checkSeletedTienMat = true;
            this.checkSeletedChuyenKhoan = true;
            this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
            if (this.thongtinDonThuoc.TienMat < 0) {
                this.thongtinDonThuoc.TienMat = 0;
            }
        }
        if (lastItem == 2) {
            this.checkSeletedChuyenKhoan = true;
            this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS;
            if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                this.thongtinDonThuoc.ChuyenKhoan = 0;
            }
        }
        if (lastItem == 3) {
            this.checkSeletedPos = true;
            this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan;
            if (this.thongtinDonThuoc.POS < 0) {
                this.thongtinDonThuoc.POS = 0;
            }
        }
        if (lastItem == undefined) {
            this.thongtinDonThuoc.TienMat = 0;
            this.thongtinDonThuoc.POS = 0;
            this.thongtinDonThuoc.ChuyenKhoan = 0;
        }
    }
    setLastItemBangTien(input) {
        this.arrayThanhToans.sort();
        let lastItem = this.arrayThanhToans[this.arrayThanhToans.length - 1];
        if (lastItem == 1) {
            this.checkSeletedTienMat = true;
            this.checkSeletedChuyenKhoan = true;
            this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
            if (this.thongtinDonThuoc.TienMat < 0) {
                this.thongtinDonThuoc.TienMat = 0;
            }
        }
        if (lastItem == 2) {
            this.checkSeletedChuyenKhoan = true;
            this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS;
            if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                this.thongtinDonThuoc.ChuyenKhoan = 0;
            }
        }
        if (lastItem == 3) {
            this.checkSeletedPos = true;
            this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - input;
            if (this.thongtinDonThuoc.POS < 0) {
                this.thongtinDonThuoc.POS = 0;
            }
        }
        if (lastItem == undefined) {
            this.thongtinDonThuoc.TienMat = 0;
            this.thongtinDonThuoc.POS = 0;
            this.thongtinDonThuoc.ChuyenKhoan = 0;
        }
    }
    changeSoTien(items) {
        switch (items) {
            case 1:
                this.thongtinDonThuoc.TienMat = (this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = (this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 3:
                this.thongtinDonThuoc.POS = (this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = (this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS;
                break;
        }
    }
    onValueChange(event, type) {
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
        this.hinhThucThanhToan.forEach(item => {
            if (item.KeyId == type) {
                item.Change = true;
            }
        });
        var itemNotChanges = this.hinhThucThanhToan.filter(o => o.Selected == true && o.Change == false);
        if (itemNotChanges.length == 1) {
            this.changeSoTien(itemNotChanges[0].KeyId);
        }
        else {
            if (itemNotChanges.length == 0 && this.hinhThucThanhToan.filter(o => o.Selected == true).length == 2) {
                var items = this.hinhThucThanhToan.filter(o => o.Selected == true && o.KeyId != type);
                this.changeSoTien(items[0].KeyId);
            }
        }
        if (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo != this.tongTien) {
            this.showCanhBaoSoTienNhap = true;
        }
        else {
            this.showCanhBaoSoTienNhap = false;
        }
        this.changeTienTraLaiBenhNhan();
    }
    changeTienTraLaiBenhNhan() {
        if (this.thongtinDonThuoc.BenhNhanDua > this.thongtinDonThuoc.TienMat) {
            this.thongtinDonThuoc.TienTraLai =
                this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        }
        else {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }
    modelChangePos(ev, type) {
        const total = (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.SoTienCongNo) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienPos = [total, 0];
        this.thongtinDonThuoc.POS = ev;
        this.onValueChange(ev, type);
    }
    modelChangeChuyenKhoan(ev, type) {
        const total = (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo) !== 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienChuyenKhoan = [total, 0];
        this.thongtinDonThuoc.ChuyenKhoan = ev;
        this.onValueChange(ev, type);
    }
    modelChangeTienMat(ev, type) {
        const total = (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienMat = [total, 0];
        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
        this.thongtinDonThuoc.TienMat = ev;
        this.onValueChange(ev, type);
    }
    modelChangeSoTienCongNo(ev, type) {
        const total = (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.TienMat) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.TienMat);
        this.selectMoneySoTienCongNo = [total, 0];
        this.thongtinDonThuoc.SoTienCongNo = ev;
        this.onValueChange(ev, type);
    }
    modelChangeTienBNDua(input) {
        this.selectMoneyTienBNDua = [this.tongTien, 100000000];
        this.thongtinDonThuoc.TienTraLai = input - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }
    onChangeBenhNhanDua() {
        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }
    XacNhanIn(data) {
        this.showPopupLoadingIn();
        data.Hosting = window.location.protocol + '//' + window.location.host;
        this.apiService.postExportExcel('QuayThuoc/XacNhanIn', data).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                if (data.InBangKe == false && data.InPhieuThu == false) {
                    this.notificationService.showError('Không có phiếu in được chọn.');
                    this.closePopupLoadingData();
                }
                else {
                    this.dialog.open(_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_13__["ThongTinPhieuPdfPopupComponent"], {
                        disableClose: true,
                        width: '1000px',
                        data: { Model: resultData }
                    }).afterClosed().subscribe(() => {
                        this.closePopupLoadingData();
                    });
                }
            }
        }, (err) => {
            this.closePopupLoadingData();
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    shareData() {
        this.thongtinDonThuoc.DanhSachDonThuocs = [...this.dataSourcedanhsachThuoc.data];
        for (let index = 0; index < this.thongtinDonThuoc.DanhSachDonThuocs.length; index++) {
            this.thongtinDonThuoc.DanhSachDonThuocs[index].HighLightClass = null;
            if (this.thongtinDonThuoc.DanhSachDonThuocs[index].CheckedDefault == false) {
                this.thongtinDonThuoc.DanhSachDonThuocs.splice(index, 1);
                index = -1;
            }
        }
        return this.thongtinDonThuoc;
    }
    ThuTienVaXuatThuoc() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.dataSourcedanhsachThuoc.data === [] || this.dataSourcedanhsachThuoc.data.length == 0) {
            this.notificationService.showError("Người bệnh này không có thuốc nào để thanh toán.");
            return;
        }
        let index = this.dataSourcedanhsachThuoc.data.findIndex(x => x.LoaiDonThuoc == 1);
        if (index != -1) {
            this.notificationService.showError("Đang có thuốc bảo hiểm trong đơn thuốc.");
            return;
        }
        let indexHetThuoc = this.dataSourcedanhsachThuoc.data.findIndex(x => x.ThuocTrongKhoExit == true);
        if (indexHetThuoc != -1) {
            this.notificationService.showError("Thuốc trong kho không còn.");
            return;
        }
        if (this.thongtinDonThuoc.TienMat === null || this.thongtinDonThuoc.TienMat === undefined) {
            this.thongtinDonThuoc.TienMat = 0;
        }
        if (this.thongtinDonThuoc.ChuyenKhoan === null || this.thongtinDonThuoc.ChuyenKhoan === undefined) {
            this.thongtinDonThuoc.ChuyenKhoan = 0;
        }
        if (this.thongtinDonThuoc.POS === null || this.thongtinDonThuoc.POS === undefined) {
            this.thongtinDonThuoc.POS = 0;
        }
        if (this.thongtinDonThuoc.BenhNhanDua === null || this.thongtinDonThuoc.BenhNhanDua === undefined) {
            this.thongtinDonThuoc.BenhNhanDua = 0;
        }
        if (this.thongTinKhachVangLai === undefined) {
            this.thongTinKhachVangLai = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__["KhachVangLai"]();
        }
        if (this.setDefeautTienMat.length === 0) {
            this.validationErrors.push({
                Message: "Vui lòng chọn hình thức thanh toán",
                Field: "HinhThucThanhToan",
            });
            return true;
        }
        var validationCheck = {
            HoTen: this.thongTinKhachVangLai.HoTen,
            NamSinh: this.thongTinKhachVangLai.NamSinh,
            HinhThucThanhToan: this.thongtinDonThuoc.HinhThucThanhToan,
            TienMat: this.thongtinDonThuoc.TienMat,
            ChuyenKhoan: this.thongtinDonThuoc.ChuyenKhoan,
            POS: this.thongtinDonThuoc.POS,
            SoTienCongNo: this.thongtinDonThuoc.SoTienCongNo,
            BenhNhanDua: this.thongtinDonThuoc.BenhNhanDua,
            NgayThu: this.thongtinDonThuoc.NgayThu,
            NoiDungThu: this.thongtinDonThuoc.NoiDungThu,
            TongTien: this.tongTien
        };
        this.validationErrors = [];
        this.validationErrorsThongTin = [];
        if (this.donThuocId.maBN != null) {
            this.maBN = this.donThuocId.maBN;
            this.apiService.post("QuayThuoc/GetThongTinBenhNhan1?maBN=" + this.maBN).subscribe(// to do maBn => benhNhanId
            (resultData) => {
                this.thongTinKhachVangLai.Id = resultData.Id;
                this.thongTinKhachVangLai.HoTen = resultData.HoTen;
                this.thongTinKhachVangLai.GioiTinh = resultData.GioiTinh;
                this.thongTinKhachVangLai.DiaChi = resultData.DiaChi;
                this.thongTinKhachVangLai.DiaChiDayDu = resultData.DiaChiDayDu;
                this.thongTinKhachVangLai.NamSinh = resultData.NamSinh;
                this.thongTinKhachVangLai.PhuongXaId = resultData.PhuongXaId;
                this.thongTinKhachVangLai.QuanHuyenId = resultData.QuanHuyenId;
                this.thongTinKhachVangLai.SoDienThoai = resultData.SoDienThoai;
                this.thongTinKhachVangLai.TinhThanhId = resultData.TinhThanhId;
                this.thongTinKhachVangLai.Email = resultData.Email;
            });
            this.apiService.post("QuayThuoc/GetTenBenhNhan?benhNhanId=" + this.maBN).subscribe(// to do maBn => benhNhanId
            // to do maBn => benhNhanId
            resultData => {
                this.tenBN = resultData;
                validationCheck.HoTen = this.tenBN;
                validationCheck.NamSinh = this.thongTinKhachVangLai.NamSinh;
                this.thongtinDonThuoc.HoTenBenhNhan = this.tenBN;
                this.thongTinKhachVangLai.HoTen = this.tenBN;
                this.apiService.post("QuayThuoc/CheckValidationForQuayThuocKhachVangLai", validationCheck).subscribe(() => {
                    var khachVangLaiChoThanhToan = {
                        ThongTinKhach: this.thongTinKhachVangLai,
                        ThongTinThuChi: this.thongtinDonThuoc,
                        DanhSachDonThuoc: this.lstDonThuocMoiThem
                    };
                    let chuInHoa = this.thongTinKhachVangLai.HoTen.toUpperCase();
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                        //disableClose: true,
                        width: '1000px',
                        data: {
                            Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn thu của người bệnh ' +
                                chuInHoa.bold() + ' với số tiền là ' +
                                this.tongTien.toLocaleString('vi-VI').bold() + ' đồng hay không?'
                        }
                    }).afterClosed().subscribe(result => {
                        if (result == 'Yes') {
                            this.apiService.post("QuayThuoc/ThuTienKhachVangLaiVaXuatThuoc", khachVangLaiChoThanhToan).subscribe(resultData => {
                                khachVangLaiChoThanhToan.DanhSachDonThuoc = [];
                                this.lstDonThuocMoiThem = [];
                                if (resultData.ThanhCong == false) {
                                    this.notificationService.showError(resultData.Error);
                                    for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                                        for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                            if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt == this.dataSourcedanhsachThuoc.data[j].STT) {
                                                this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                                this.dataSourcedanhsachThuoc.data[j].SoLuongDung = resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                            }
                                        }
                                    }
                                }
                                else if (resultData.ThanhCong == true) {
                                    this.dataSourcedanhsachThuoc.data = [];
                                    if (this.gridDanhSachMuaThuoc !== undefined) {
                                        this.gridDanhSachMuaThuoc.setDataSource();
                                    }
                                    this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                                    this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                                    if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                                        this.thongtinDonThuoc.TienMat = this.tongTien;
                                    }
                                    this.benhNhanResultData = resultData;
                                    this.apiService.post("QuayThuoc/GetBenhNhanForNavigation?taiKhoanThuId=" + resultData.TaiKhoanBenhNhanThuId).subscribe(result1 => {
                                        let dialogRef = this.dialog.open(_quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_8__["QuayThuocXacNhanInPopUpComponent"], {
                                            disableClose: true,
                                            width: '500px',
                                            data: { Model: this.benhNhanResultData, Title: "XÁC NHẬN" }
                                        }).afterClosed().subscribe(result => {
                                            if (result.Response != "No answer") {
                                                this.changeTab.emit(2);
                                                this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                                this.XacNhanIn(result);
                                            }
                                            else {
                                                this.changeTab.emit(2);
                                                this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                            }
                                        });
                                    });
                                }
                            });
                        }
                    });
                }, (err) => {
                    this.validationErrors = err.ValidationErrors;
                    if (this.validationErrors.length !== 0) {
                        for (var i = 0; i < this.validationErrors.length; i++) {
                            if (this.validationErrors[i].Field === "HoTen") {
                                this.validationErrorsThongTin.push(this.validationErrors[i]);
                            }
                            if (this.validationErrors[i].Field === "NamSinh") {
                                this.validationErrorsThongTin.push(this.validationErrors[i]);
                            }
                        }
                    }
                    this.valueChangeThuTien.emit(this.validationErrorsThongTin);
                    return;
                });
            }, () => { });
        }
        else {
            this.apiService.post("QuayThuoc/CheckValidationForQuayThuocKhachVangLai", validationCheck).subscribe(() => {
                var khachVangLaiChoThanhToan = {
                    ThongTinKhach: this.thongTinKhachVangLai,
                    ThongTinThuChi: this.thongtinDonThuoc,
                    DanhSachDonThuoc: this.lstDonThuocMoiThem
                };
                let chuInHoa = this.thongTinKhachVangLai.HoTen.toUpperCase();
                this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                    width: '1000px',
                    data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn thu của người bệnh " + chuInHoa.bold() + " với số tiền là " + this.tongTien.toLocaleString("vi-VI").bold() + " đồng hay không?" }
                }).afterClosed().subscribe(result => {
                    if (result == 'Yes') {
                        this.apiService.post("QuayThuoc/ThuTienKhachVangLaiVaXuatThuoc", khachVangLaiChoThanhToan).subscribe(resultData => {
                            khachVangLaiChoThanhToan.DanhSachDonThuoc = [];
                            this.lstDonThuocMoiThem = [];
                            if (resultData.ThanhCong == false) {
                                this.notificationService.showError(resultData.Error);
                                for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                                    for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                        if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt == this.dataSourcedanhsachThuoc.data[j].STT) {
                                            this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                            this.dataSourcedanhsachThuoc.data[j].SoLuongDung = resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                        }
                                    }
                                }
                            }
                            else if (resultData.ThanhCong == true) {
                                this.reset();
                                this.dataSourcedanhsachThuoc.data = [];
                                if (this.gridDanhSachMuaThuoc !== undefined) {
                                    this.gridDanhSachMuaThuoc.setDataSource();
                                }
                                this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                                this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                                if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                                    this.thongtinDonThuoc.TienMat = this.tongTien;
                                }
                                this.benhNhanResultData = resultData;
                                this.apiService.post("QuayThuoc/GetBenhNhanForNavigation?taiKhoanThuId=" + resultData.TaiKhoanBenhNhanThuId).subscribe(result1 => {
                                    let dialogRef = this.dialog.open(_quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_8__["QuayThuocXacNhanInPopUpComponent"], {
                                        disableClose: true,
                                        width: '500px',
                                        data: { Model: this.benhNhanResultData, Title: "XÁC NHẬN" }
                                    }).afterClosed().subscribe(result => {
                                        if (result.Response != "No answer") {
                                            this.changeTab.emit(2);
                                            this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                            this.XacNhanIn(result);
                                        }
                                        else {
                                            this.changeTab.emit(2);
                                            this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                        }
                                    });
                                });
                            }
                        });
                    }
                });
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (this.validationErrors.length !== 0) {
                    for (var i = 0; i < this.validationErrors.length; i++) {
                        if (this.validationErrors[i].Field === "HoTen") {
                            this.validationErrorsThongTin.push(this.validationErrors[i]);
                        }
                        if (this.validationErrors[i].Field === "NamSinh") {
                            this.validationErrorsThongTin.push(this.validationErrors[i]);
                        }
                    }
                }
                this.valueChangeThuTien.emit(this.validationErrorsThongTin);
                return;
            });
        }
    }
    ThuTien() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.dataSourcedanhsachThuoc.data === [] || this.dataSourcedanhsachThuoc.data.length == 0) {
            this.notificationService.showError("Người bệnh này không có thuốc nào để thanh toán.");
            return;
        }
        let index = this.dataSourcedanhsachThuoc.data.findIndex(x => x.LoaiDonThuoc == 1);
        if (index != -1) {
            this.notificationService.showError("Đang có thuốc bảo hiểm trong đơn thuốc.");
            return;
        }
        let indexHetThuoc = this.dataSourcedanhsachThuoc.data.findIndex(x => x.ThuocTrongKhoExit == true);
        if (indexHetThuoc != -1) {
            this.notificationService.showError("Thuốc trong kho không còn.");
            return;
        }
        if (this.thongtinDonThuoc.TienMat === null || this.thongtinDonThuoc.TienMat === undefined) {
            this.thongtinDonThuoc.TienMat = 0;
        }
        if (this.thongtinDonThuoc.ChuyenKhoan === null || this.thongtinDonThuoc.ChuyenKhoan === undefined) {
            this.thongtinDonThuoc.ChuyenKhoan = 0;
        }
        if (this.thongtinDonThuoc.POS === null || this.thongtinDonThuoc.POS === undefined) {
            this.thongtinDonThuoc.POS = 0;
        }
        if (this.thongtinDonThuoc.BenhNhanDua === null || this.thongtinDonThuoc.BenhNhanDua === undefined) {
            this.thongtinDonThuoc.BenhNhanDua = 0;
        }
        if (this.thongTinKhachVangLai === undefined) {
            this.thongTinKhachVangLai = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__["KhachVangLai"]();
        }
        if (this.setDefeautTienMat.length === 0) {
            this.validationErrors.push({
                Message: "Vui lòng chọn hình thức thanh toán",
                Field: "HinhThucThanhToan",
            });
            return true;
        }
        var validationCheck = {
            HoTen: this.thongTinKhachVangLai.HoTen,
            NamSinh: this.thongTinKhachVangLai.NamSinh,
            HinhThucThanhToan: this.thongtinDonThuoc.HinhThucThanhToan,
            TienMat: this.thongtinDonThuoc.TienMat,
            ChuyenKhoan: this.thongtinDonThuoc.ChuyenKhoan,
            POS: this.thongtinDonThuoc.POS,
            SoTienCongNo: this.thongtinDonThuoc.SoTienCongNo,
            BenhNhanDua: this.thongtinDonThuoc.BenhNhanDua,
            NgayThu: this.thongtinDonThuoc.NgayThu,
            NoiDungThu: this.thongtinDonThuoc.NoiDungThu,
            TongTien: this.tongTien
        };
        this.validationErrors = [];
        this.validationErrorsThongTin = [];
        if (this.donThuocId.maBN != null) {
            this.maBN = this.donThuocId.maBN;
            this.apiService.post("QuayThuoc/GetThongTinBenhNhan1?maBN=" + this.maBN).subscribe(// to do maBn => benhNhanId
            (resultData) => {
                this.thongTinKhachVangLai.Id = resultData.Id;
                this.thongTinKhachVangLai.HoTen = resultData.HoTen;
                this.thongTinKhachVangLai.GioiTinh = resultData.GioiTinh;
                this.thongTinKhachVangLai.DiaChi = resultData.DiaChi;
                this.thongTinKhachVangLai.DiaChiDayDu = resultData.DiaChiDayDu;
                this.thongTinKhachVangLai.NamSinh = resultData.NamSinh;
                this.thongTinKhachVangLai.PhuongXaId = resultData.PhuongXaId;
                this.thongTinKhachVangLai.QuanHuyenId = resultData.QuanHuyenId;
                this.thongTinKhachVangLai.SoDienThoai = resultData.SoDienThoai;
                this.thongTinKhachVangLai.TinhThanhId = resultData.TinhThanhId;
                this.thongTinKhachVangLai.Email = resultData.Email;
            });
            this.apiService.post("QuayThuoc/GetTenBenhNhan?benhNhanId=" + this.maBN).subscribe(// to do maBn => benhNhanId
            // to do maBn => benhNhanId
            resultData => {
                this.tenBN = resultData;
                validationCheck.HoTen = this.tenBN;
                validationCheck.NamSinh = this.thongTinKhachVangLai.NamSinh;
                this.thongtinDonThuoc.HoTenBenhNhan = this.tenBN;
                this.thongTinKhachVangLai.HoTen = this.tenBN;
                this.apiService.post("QuayThuoc/CheckValidationForQuayThuocKhachVangLai", validationCheck).subscribe(() => {
                    var khachVangLaiChoThanhToan = {
                        ThongTinKhach: this.thongTinKhachVangLai,
                        ThongTinThuChi: this.thongtinDonThuoc,
                        DanhSachDonThuoc: this.lstDonThuocMoiThem
                    };
                    let chuInHoa = this.thongTinKhachVangLai.HoTen.toUpperCase();
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                        //disableClose: true,
                        width: '1000px',
                        data: {
                            Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn thu của người bệnh ' +
                                chuInHoa.bold() + ' với số tiền là ' +
                                this.tongTien.toLocaleString('vi-VI').bold() + ' đồng hay không?'
                        }
                    }).afterClosed().subscribe(result => {
                        if (result == 'Yes') {
                            this.apiService.post("QuayThuoc/ThuTienKhachVangLai", khachVangLaiChoThanhToan).subscribe(resultData => {
                                khachVangLaiChoThanhToan.DanhSachDonThuoc = [];
                                this.lstDonThuocMoiThem = [];
                                if (resultData.ThanhCong == false) {
                                    this.notificationService.showError(resultData.Error);
                                    for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                                        for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                            if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt == this.dataSourcedanhsachThuoc.data[j].STT) {
                                                this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                                this.dataSourcedanhsachThuoc.data[j].SoLuongDung = resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                            }
                                        }
                                    }
                                }
                                else if (resultData.ThanhCong == true) {
                                    this.dataSourcedanhsachThuoc.data = [];
                                    if (this.gridDanhSachMuaThuoc !== undefined) {
                                        this.gridDanhSachMuaThuoc.setDataSource();
                                    }
                                    this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                                    this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                                    if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                                        this.thongtinDonThuoc.TienMat = this.tongTien;
                                    }
                                    this.benhNhanResultData = resultData;
                                    this.apiService.post("QuayThuoc/GetBenhNhanForNavigation?taiKhoanThuId=" + resultData.TaiKhoanBenhNhanThuId).subscribe(result1 => {
                                        let dialogRef = this.dialog.open(_quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_8__["QuayThuocXacNhanInPopUpComponent"], {
                                            disableClose: true,
                                            width: '500px',
                                            data: { Model: this.benhNhanResultData, Title: "XÁC NHẬN" }
                                        }).afterClosed().subscribe(result => {
                                            if (result.Response != "No answer") {
                                                this.changeTab.emit(2);
                                                this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                                this.XacNhanIn(result);
                                            }
                                            else {
                                                this.changeTab.emit(2);
                                                this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                            }
                                        });
                                    });
                                }
                            });
                        }
                    });
                }, (err) => {
                    this.validationErrors = err.ValidationErrors;
                    if (this.validationErrors.length !== 0) {
                        for (var i = 0; i < this.validationErrors.length; i++) {
                            if (this.validationErrors[i].Field === "HoTen") {
                                this.validationErrorsThongTin.push(this.validationErrors[i]);
                            }
                            if (this.validationErrors[i].Field === "NamSinh") {
                                this.validationErrorsThongTin.push(this.validationErrors[i]);
                            }
                        }
                    }
                    this.valueChangeThuTien.emit(this.validationErrorsThongTin);
                    return;
                });
            }, () => { });
        }
        else {
            this.apiService.post("QuayThuoc/CheckValidationForQuayThuocKhachVangLai", validationCheck).subscribe(() => {
                var khachVangLaiChoThanhToan = {
                    ThongTinKhach: this.thongTinKhachVangLai,
                    ThongTinThuChi: this.thongtinDonThuoc,
                    DanhSachDonThuoc: this.lstDonThuocMoiThem
                };
                let chuInHoa = this.thongTinKhachVangLai.HoTen.toUpperCase();
                this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                    width: '1000px',
                    data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn thu của người bệnh " + chuInHoa.bold() + " với số tiền là " + this.tongTien.toLocaleString("vi-VI").bold() + " đồng hay không?" }
                }).afterClosed().subscribe(result => {
                    if (result == 'Yes') {
                        this.apiService.post("QuayThuoc/ThuTienKhachVangLai", khachVangLaiChoThanhToan).subscribe(resultData => {
                            khachVangLaiChoThanhToan.DanhSachDonThuoc = [];
                            this.lstDonThuocMoiThem = [];
                            if (resultData.ThanhCong == false) {
                                this.notificationService.showError(resultData.Error);
                                for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                                    for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                        if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt == this.dataSourcedanhsachThuoc.data[j].STT) {
                                            this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                            this.dataSourcedanhsachThuoc.data[j].SoLuongDung = resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                        }
                                    }
                                }
                            }
                            else if (resultData.ThanhCong == true) {
                                this.reset();
                                this.dataSourcedanhsachThuoc.data = [];
                                if (this.gridDanhSachMuaThuoc !== undefined) {
                                    this.gridDanhSachMuaThuoc.setDataSource();
                                }
                                this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                                this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                                if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                                    this.thongtinDonThuoc.TienMat = this.tongTien;
                                }
                                this.benhNhanResultData = resultData;
                                this.apiService.post("QuayThuoc/GetBenhNhanForNavigation?taiKhoanThuId=" + resultData.TaiKhoanBenhNhanThuId).subscribe(result1 => {
                                    let dialogRef = this.dialog.open(_quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_8__["QuayThuocXacNhanInPopUpComponent"], {
                                        disableClose: true,
                                        width: '500px',
                                        data: { Model: this.benhNhanResultData, Title: "XÁC NHẬN" }
                                    }).afterClosed().subscribe(result => {
                                        if (result.Response != "No answer") {
                                            this.changeTab.emit(2);
                                            this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                            this.XacNhanIn(result);
                                        }
                                        else {
                                            this.changeTab.emit(2);
                                            this.MaTiepNhanBenhNhanDaThuTien.emit(result1);
                                        }
                                    });
                                });
                            }
                        });
                    }
                });
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (this.validationErrors.length !== 0) {
                    for (var i = 0; i < this.validationErrors.length; i++) {
                        if (this.validationErrors[i].Field === "HoTen") {
                            this.validationErrorsThongTin.push(this.validationErrors[i]);
                        }
                        if (this.validationErrors[i].Field === "NamSinh") {
                            this.validationErrorsThongTin.push(this.validationErrors[i]);
                        }
                    }
                }
                this.valueChangeThuTien.emit(this.validationErrorsThongTin);
                return;
            });
        }
    }
    showError(message) {
        this.showIt(message);
    }
    showIt(message) {
        if (this.snackBarOpen != null) {
            this.snackBarOpen.dismiss();
        }
        this.snackBarOpen = this.snackBar.open(message, 'Đóng', {
            duration: 7000,
            horizontalPosition: 'right'
        });
    }
    them1() {
        this.validationThuocErrors = [];
        if (this.themDuocPham.DuocPhamId == null) {
            this.validationThuocErrors.push({ "Message": "Dược phẩm yêu cầu nhập", "Field": "DuocPhamId" });
        }
        if (this.themDuocPham.SoLuong == null) {
            this.validationThuocErrors.push({ "Message": "Số lượng yêu cầu nhập", "Field": "SoLuong" });
        }
        if (this.themDuocPham.SoLuong == 0) {
            this.validationThuocErrors.push({ "Message": "Số lượng phải lớn hơn 0", "Field": "SoLuong" });
        }
        if (this.themDuocPham.SoLuongTon < this.themDuocPham.SoLuong) {
            this.validationThuocErrors.push({ "Message": "Số lượng phải nhỏ hơn tồn kho", "Field": "SoLuong" });
        }
        if (this.validationThuocErrors.length > 0) {
            return;
        }
        let soLuongDaMua = 0;
        this.thongtinDonThuoc.BenhNhanDua = 0;
        this.thongtinDonThuoc.TienTraLai = null;
        if (this.lstDonThuocMoiThem.length > 0) {
            this.lstDonThuocMoiThem.forEach(x => {
                if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                    soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                }
            });
        }
        if (this.themDuocPham.SoLuongTon >= this.themDuocPham.SoLuong) {
            let stt = 1;
            let idNew = 1;
            if (this.dataSourcedanhsachThuoc.data.length > 0) {
                stt = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].STT + 1;
                idNew = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].Id + 1;
            }
            let count = this.themDuocPham.SoLuong;
            let tamp = this.lstthongTinDonThuoc;
            if (this.lstDonThuocMoiThem != undefined || this.lstDonThuocMoiThem != null) {
                for (let jisoo = 0; jisoo < this.lstDonThuocMoiThem.length; jisoo++) {
                    for (let jihoo = 0; jihoo < this.lstthongTinDonThuoc.length; jihoo++) {
                        if (this.lstDonThuocMoiThem[jisoo].Solo == this.lstthongTinDonThuoc[jihoo].Solo) {
                            this.lstthongTinDonThuoc[jihoo].SoLuongTon = this.lstthongTinDonThuoc[jihoo].SoLuongTon - this.lstDonThuocMoiThem[jisoo].SoLuongMua;
                            tamp = this.lstthongTinDonThuoc;
                        }
                    }
                }
            }
            console.log("lusc them :", this.lstthongTinDonThuoc);
            for (let index = 0; index < tamp.length; index++) {
                if (tamp[index].SoLuongTon > 0) {
                    if (count != 0) {
                        let item = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__["ThongTinDuocPham"]();
                        if (count <= this.lstthongTinDonThuoc[index].SoLuongTon) {
                            item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                            item.SoLuongMua = count;
                            item.STT = stt;
                            item.Id = idNew;
                            item.CheckedDefault = true;
                            item.isNew = true;
                            item.BacSiKeToa = "Nhà Thuốc";
                            item.ThanhTien = item.SoLuongMua * item.DonGia;
                            item.LoaiDuocPhamHoacVatTu1 = item.LoaiDuocPhamHoacVatTu;
                            this.lstDonThuocMoiThem.push(item);
                            this.lstthongTinDonThuoc[index].SoLuongTon = this.lstthongTinDonThuoc[index].SoLuongTon - count;
                            this.dataSourcedanhsachThuoc.data.push(item);
                            this.duocPhamCombobox.focusManual();
                            count = 0;
                        }
                        else {
                            item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                            item.SoLuongMua = this.lstthongTinDonThuoc[index].SoLuongTon;
                            item.ThanhTien = item.SoLuongMua * item.DonGia;
                            item.STT = stt;
                            item.Id = idNew;
                            item.isNew = true;
                            item.CheckedDefault = true;
                            item.BacSiKeToa = "Nhà Thuốc";
                            item.LoaiDuocPhamHoacVatTu1 = item.LoaiDuocPhamHoacVatTu;
                            count = count - this.lstthongTinDonThuoc[index].SoLuongTon;
                            this.lstDonThuocMoiThem.push(item);
                            this.dataSourcedanhsachThuoc.data.push(item);
                            this.duocPhamCombobox.focusManual();
                            this.lstthongTinDonThuoc.splice(index, 1);
                            index = -1;
                        }
                        this.gridDanhSachMuaThuoc.setSelectCheckbox(idNew);
                        idNew++;
                        stt++;
                    }
                    else {
                        break;
                    }
                }
            }
            if (this.lstDonThuocMoiThem.length > 0) {
                this.lstDonThuocMoiThem.forEach(x => {
                    if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                        soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                    }
                });
            }
            this.themDuocPham.SoLuongTon = this.themDuocPham.SoLuongTon - this.themDuocPham.SoLuong;
            this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
            this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            // if (this.thongtinDonThuoc.HinhThucThanhToan.length == 1 && this.thongtinDonThuoc.HinhThucThanhToan[0] == 1) {
            //     this.thongtinDonThuoc.TienMat = this.tongTien;
            // }
            let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
            if (items != null && items.length > 0) {
                this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
            }
            this.themDuocPham = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__["ThemDuocPham"]();
        }
        else {
            this.notificationService.showError("Số lượng bạn nhập lớn hơn số lượng tồn");
        }
        this.danhSachXemTruocBangKeThuocVaVatTu(this.dataSourcedanhsachThuoc.data);
    }
    danhSachXemTruocBangKeThuocVaVatTu(danhSachChuaThanhToans) {
        // lý do trả về danhSachChuaThanhToan cho quay-thuoc-mua-thuoc.component
        // để xem trước bảng kê
        this.danhSachChuaThanhToan.emit(danhSachChuaThanhToans);
    }
    getDonThuocChiTietCu() {
        let toaThuocCuId = [];
        if (typeof (this.donThuocId.ToaThuoc) == 'string') {
            toaThuocCuId.push(this.donThuocId.ToaThuoc);
        }
        else {
            this.donThuocId.ToaThuoc.forEach(element => {
                toaThuocCuId.push(element);
            });
        }
        this.apiService.post("QuayThuoc/GetDonthuocChiTietCu", { ToaThuoc: toaThuocCuId }).subscribe(resultData => {
            this.validationThuocErrors = [];
            let soLuongDaMua = 0;
            if (this.lstDonThuocMoiThem.length > 0) {
                this.lstDonThuocMoiThem.forEach(x => {
                    if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                        soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                    }
                });
            }
            if (this.themDuocPham.SoLuongTon >= this.themDuocPham.SoLuong) {
                let stt = 1;
                let idNew = 1;
                if (this.dataSourcedanhsachThuoc.data.length > 0) {
                    stt = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].STT + 1;
                    idNew = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].Id + 1;
                }
                for (let index = 0; index < resultData.length; index++) {
                    let count = this.themDuocPham.SoLuong;
                    if (count != 0) {
                        let item = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__["ThongTinDuocPham"]();
                        if (count <= resultData[index].SoLuongTon) {
                            item = Object.assign({}, resultData[index]);
                            count = item.SoLuongMua;
                            item.STT = stt;
                            item.Id = idNew;
                            item.CheckedDefault = true;
                            item.isNew = true;
                            item.BacSiKeToa = "Nhà Thuốc";
                            item.ThanhTien = item.SoLuongMua * item.DonGia;
                            this.lstDonThuocMoiThem.push(item);
                            resultData[index].SoLuongTon = resultData[index].SoLuongTon - count;
                            this.dataSourcedanhsachThuoc.data.push(item);
                            count = 0;
                        }
                        else {
                            item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                            item.SoLuongMua = resultData[index].SoLuongTon;
                            item.ThanhTien = item.SoLuongMua * item.DonGia;
                            item.STT = stt;
                            item.Id = idNew;
                            item.isNew = true;
                            item.CheckedDefault = true;
                            item.BacSiKeToa = "Nhà Thuốc";
                            count = count - resultData[index].SoLuongTon;
                            this.lstDonThuocMoiThem.push(item);
                            this.dataSourcedanhsachThuoc.data.push(item);
                            resultData.splice(index, 1);
                            index = -1;
                        }
                        this.gridDanhSachMuaThuoc.setSelectCheckbox(idNew);
                        idNew++;
                        stt++;
                    }
                    else {
                        break;
                    }
                }
                if (this.lstDonThuocMoiThem.length > 0) {
                    this.lstDonThuocMoiThem.forEach(x => {
                        if (x.DuocPhamId == this.themDuocPham.DuocPhamId) {
                            soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                        }
                    });
                }
                this.themDuocPham.SoLuongTon = this.themDuocPham.SoLuongTon - this.themDuocPham.SoLuong;
                this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0) + 0.0000001);
                this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                if (this.thongtinDonThuoc.HinhThucThanhToan.length == 1 && this.thongtinDonThuoc.HinhThucThanhToan[0] == 1) {
                    this.thongtinDonThuoc.TienMat = this.tongTien;
                }
                this.themDuocPham = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__["ThemDuocPham"]();
            }
            else {
                this.notificationService.showError("Số lượng bạn nhập lớn hơn số lượng tồn");
            }
            // });
        }, () => { });
    }
    reset() {
        this.thongtinDonThuoc.HinhThucThanhToan = [1];
        this.thongtinDonThuoc.TienMat = null;
        this.thongtinDonThuoc.BenhNhanDua = null;
        this.thongtinDonThuoc.TienTraLai = null;
        this.thongtinDonThuoc.NgayThu = new Date();
        this.thongtinDonThuoc.NoiDungThu = "Thu tiền thuốc";
    }
    onKeyEnterAddItem(event) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {
                this.them1();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }
    openCombobox(event) {
        if (event) {
            this.isSelectingItem = true;
        }
        else {
            this.isSelectingItem = false;
        }
    }
    onKey(event) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {
                this.them1();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }
    modelChangeSoLuongMua(ev, dsQuayThuocs) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === dsQuayThuocs.Id) {
                    this.dataSourcedanhsachThuoc.data[index].SoTienMG = 0;
                    this.dataSourcedanhsachThuoc.data[index].ThanhTien = ev * this.dataSourcedanhsachThuoc.data[index].DonGia;
                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan = this.dataSourcedanhsachThuoc.data[index].ThanhTien;
                    if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus != null) {
                        if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length > 0) {
                            // tslint:disable-next-line: prefer-for-of
                            for (let i = 0; i < this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length; i++) {
                                this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[i].SoTienCongNoChoThu = 0;
                                this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                            }
                        }
                    }
                }
            }
        }
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        this.tongTienHienThi = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }
        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
        this.danhSachXemTruocBangKeThuocVaVatTu(this.dataSourcedanhsachThuoc.data);
    }
    bindHinhThucThanhToanChangeGrid(item) {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        this.clearHinhThucThanhToan();
        this.defeautSoTien();
        switch (item) {
            case 1:
                this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                this.flagCheckSeletedTienMat = true;
                if (this.thongtinDonThuoc.TienMat < 0) {
                    this.thongtinDonThuoc.TienMat = 0;
                }
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                this.flagCheckSeletedChuyenKhoan = true;
                if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                    this.thongtinDonThuoc.ChuyenKhoan = 0;
                }
                break;
            case 3:
                this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.SoTienCongNo;
                this.flagCheckSeletedPos = true;
                if (this.thongtinDonThuoc.POS < 0) {
                    this.thongtinDonThuoc.POS = 0;
                }
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
                this.flagCheckSeletedSoTienCongNo = true;
                if (this.thongtinDonThuoc.SoTienCongNo < 0) {
                    this.thongtinDonThuoc.SoTienCongNo = 0;
                }
                break;
        }
    }
    defeautSoTien() {
        this.thongtinDonThuoc.TienMat = 0;
        this.thongtinDonThuoc.POS = 0;
        this.thongtinDonThuoc.SoTienCongNo = 0;
        this.thongtinDonThuoc.ChuyenKhoan = 0;
        this.thongtinDonThuoc.BenhNhanDua = 0;
        this.thongtinDonThuoc.TienTraLai = 0;
    }
    tinhTienChoPhuongThucThanhToan(item) {
        switch (item) {
            case 1:
                this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.TienMat < 0) {
                    this.thongtinDonThuoc.TienMat = 0;
                }
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                    this.thongtinDonThuoc.ChuyenKhoan = 0;
                }
                break;
            case 3:
                this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.POS < 0) {
                    this.thongtinDonThuoc.POS = 0;
                }
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
                if (this.thongtinDonThuoc.SoTienCongNo < 0) {
                    this.thongtinDonThuoc.SoTienCongNo = 0;
                }
                break;
        }
    }
    ChangeHinhThucThanhToan(event) {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        this.clearHinhThucThanhToan();
        this.defeautSoTien();
        this.showCanhBaoSoTienNhap = false;
        var items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length === 1) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
        event.forEach((element) => {
            switch (element) {
                case 1:
                    this.flagCheckSeletedTienMat = true;
                    break;
                case 2:
                    this.flagCheckSeletedChuyenKhoan = true;
                    break;
                case 3:
                    this.flagCheckSeletedPos = true;
                    break;
                case 4:
                    this.flagCheckSeletedSoTienCongNo = true;
                    break;
            }
        });
        this.hinhThucThanhToan.forEach(item => { item.Change = false; });
        this.hinhThucThanhToan.forEach(item => {
            if (event.filter(o => o == item.KeyId).length > 0) {
                item.Selected = true;
                if (event.length == 1) {
                    switch (item.KeyId) {
                        case 1:
                            this.thongtinDonThuoc.TienMat = this.tongTien;
                            break;
                        case 2:
                            this.thongtinDonThuoc.ChuyenKhoan = this.tongTien;
                            break;
                        case 3:
                            this.thongtinDonThuoc.POS = this.tongTien;
                            break;
                        case 4:
                            this.thongtinDonThuoc.SoTienCongNo = this.tongTien;
                            break;
                    }
                }
            }
            else {
                item.Selected = false;
            }
        });
        this.cdRef.detectChanges();
    }
    showPopupLoadingIn() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang loading...' },
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
};
QuayThuocKhachVangLaiChoThanhToanComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "danhSachChuaThanhToan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "valueChangeThuTien", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocphamCombobox', { static: false })
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "duocPhamCombobox", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "thongTinKhachVangLai", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabVangLai', { static: true })
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "tabVangLai", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "changeTab", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "MaTiepNhanBenhNhanDaThuTien", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footerTemplateTongTienDonThuoc', { static: true })
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "footerTemplateTongTienDonThuoc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footerTemplateDonGia', { static: true })
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "footerTemplateDonGia", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDanhSachMuaThuoc', { static: true })
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "gridDanhSachMuaThuoc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuonTemplate', { static: true })
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "soLuonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "donThuocId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiChoThanhToanComponent.prototype, "ttCheck", void 0);
QuayThuocKhachVangLaiChoThanhToanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-khach-vang-lai-cho-thanh-toan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-khach-vang-lai-cho-thanh-toan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-khach-vang-lai-cho-thanh-toan.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.scss")).default]
    })
], QuayThuocKhachVangLaiChoThanhToanComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.scss ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2Mta2hhY2gtdmFuZy1sYWktY2hvLXh1YXQtdGh1b2MvcXVheS10aHVvYy1raGFjaC12YW5nLWxhaS1jaG8teHVhdC10aHVvYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: QuayThuocKhachVangLaiChoXuatThuocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocKhachVangLaiChoXuatThuocComponent", function() { return QuayThuocKhachVangLaiChoXuatThuocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");








let QuayThuocKhachVangLaiChoXuatThuocComponent = class QuayThuocKhachVangLaiChoXuatThuocComponent {
    constructor(route, dialog, apiService, router, notificationService) {
        this.route = route;
        this.dialog = dialog;
        this.apiService = apiService;
        this.router = router;
        this.notificationService = notificationService;
        this.gridColumns = [];
        this.dataSourcedanhsachThuoc = {
            data: [],
            total: 0
        };
    }
    ngOnInit() {
        this.danhSachThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["danhSachThuoc"]();
        this.gridColumns = [
            { Field: "TenDuocPham", Title: "Tên thuốc", MinWidth: 120, Sortable: false },
            { Field: "MaHoatChat", Title: "Hoạt chất", Width: 120, Sortable: false },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60, Sortable: false },
            { Field: "ViTri", Title: "Vị trí", Width: 120, Sortable: false },
            { Field: "SoLuongMua", Title: "Số lượng", Width: 120, Sortable: false },
            { Field: "HanSuDungHientThi", Title: "Hạn sử dụng", Width: 120, Sortable: false }
        ];
        if (this.ThongTinBenhNhanDaThuTienData != undefined) {
            this.apiService.post("QuayThuoc/GetDanhSachXuatThuocKhongBHYT?tiepNhanId=" + this.ThongTinBenhNhanDaThuTienData.YeuCauTiepNhanId).subscribe(resultData => {
                this.dataSourcedanhsachThuoc.data = resultData;
            });
        }
        else {
            this.dataSourcedanhsachThuoc.data = [];
        }
    }
    ngOnChanges(event) {
        this.ngOnInit();
    }
    GuiData() {
        this.danhSachThuoc.Id = this.ThongTinBenhNhanDaThuTienData.YeuCauTiepNhanId;
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn xuất đơn thuốc này?" }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.apiService.post("QuayThuoc/XuatDonThuocBHYT", this.danhSachThuoc).subscribe(resultData => {
                    if (resultData != null && resultData != undefined && resultData != "") {
                        this.notificationService.showError(resultData);
                    }
                    else {
                        if (this.ttCheck == 1) {
                            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
                        }
                        if (this.ttCheck == 2) {
                            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
                        }
                        if (this.ttCheck == 3) {
                            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
                        }
                    }
                }, (err) => {
                });
            }
        });
    }
};
QuayThuocKhachVangLaiChoXuatThuocComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiChoXuatThuocComponent.prototype, "ttCheck", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiChoXuatThuocComponent.prototype, "ThongTinBenhNhanDaThuTienData", void 0);
QuayThuocKhachVangLaiChoXuatThuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-khach-vang-lai-cho-xuat-thuoc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.scss")).default]
    })
], QuayThuocKhachVangLaiChoXuatThuocComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.scss ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy1raGFjaC12YW5nLWxhaS10aG9uZy10aW4taGFuaC1jaGluaC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXHF1YXktdGh1b2Mta2hhY2gtdmFuZy1sYWktdGhvbmctdGluLWhhbmgtY2hpbmhcXHF1YXktdGh1b2Mta2hhY2gtdmFuZy1sYWktdGhvbmctdGluLWhhbmgtY2hpbmguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2Mta2hhY2gtdmFuZy1sYWktdGhvbmctdGluLWhhbmgtY2hpbmgvcXVheS10aHVvYy1raGFjaC12YW5nLWxhaS10aG9uZy10aW4taGFuaC1jaGluaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy1raGFjaC12YW5nLWxhaS10aG9uZy10aW4taGFuaC1jaGluaC9xdWF5LXRodW9jLWtoYWNoLXZhbmctbGFpLXRob25nLXRpbi1oYW5oLWNoaW5oLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: QuayThuocKhachVangLaiThongTinHanhChinhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocKhachVangLaiThongTinHanhChinhComponent", function() { return QuayThuocKhachVangLaiThongTinHanhChinhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");



let QuayThuocKhachVangLaiThongTinHanhChinhComponent = class QuayThuocKhachVangLaiThongTinHanhChinhComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.thongTinBenhNhan = {};
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = {};
    }
    ngOnInit() {
        let maBN = this.donThuocId.maBN;
        if (this.MaBN != null) {
            maBN = this.MaBN;
        }
        else {
            this.data = null;
        }
        if (maBN != null) {
            this.GetThongTinBenhNhan(maBN);
        }
        else {
            this.data = null;
        }
        if (this.data == null) {
            if (this.TenBenhNhan != null || this.SDT != null) {
                this.thongTinBenhNhan.HoTen = this.TenBenhNhan;
            }
            if (this.SDT != null) {
                this.thongTinBenhNhan.SoDienThoai = this.SDT;
            }
        }
        if (this.ThongTinBenhNhanDaThuTienData != undefined) {
            this.GetThongTinBenhNhanTN(this.ThongTinBenhNhanDaThuTienData.YeuCauTiepNhanId);
        }
    }
    ngOnChanges(event) {
        this.ngOnInit();
    }
    GetThongTinBenhNhan(maBN) {
        this.apiService.post("QuayThuoc/GetThongTinBenhNhan1?maBN=" + maBN).subscribe(resultData => {
            this.data = resultData;
            console.log(resultData);
        }, () => {
            console.log("Loi roi");
        });
    }
    GetThongTinBenhNhanTN(maTN) {
        this.apiService.post("QuayThuoc/GetThongTinBenhNhanTN?maTN=" + maTN).subscribe(resultData => {
            this.data = resultData;
            console.log(resultData);
        }, () => {
            console.log("Loi roi");
        });
    }
    TinhThanhPhoChange(tinhThanh) {
        this.thongTinBenhNhan.TinhThanhId = tinhThanh;
        this.valueChange.emit(this.thongTinBenhNhan);
        if (this.thongTinBenhNhan.TinhThanhId == null) {
            this.thongTinBenhNhan.QuanHuyenId = null;
            this.thongTinBenhNhan.TinhThanhId = null;
            this.thongTinBenhNhan.PhuongXaId = null;
            this.thongTinBenhNhan.TenHuyenDisplay = null;
            this.thongTinBenhNhan.TenTinhDisplay = null;
            this.thongTinBenhNhan.TenPhuongDisplay = null;
        }
    }
    QuanHuyenChange(quanHuyen) {
        this.thongTinBenhNhan.QuanHuyenId = quanHuyen;
        if (this.thongTinBenhNhan.QuanHuyenId == null) {
            this.thongTinBenhNhan.QuanHuyenId = null;
            this.thongTinBenhNhan.TinhThanhId = null;
            this.thongTinBenhNhan.PhuongXaId = null;
            this.thongTinBenhNhan.TenHuyenDisplay = null;
            this.thongTinBenhNhan.TenTinhDisplay = null;
            this.thongTinBenhNhan.TenPhuongDisplay = null;
        }
        this.valueChange.emit(this.thongTinBenhNhan);
    }
    PhuongXaChange(phuongXa) {
        this.thongTinBenhNhan.PhuongXaId = phuongXa;
        if (this.thongTinBenhNhan.PhuongXaId != null) {
            this.apiService.post("QuayThuoc/GetTinhHuyen?phuongXaId=" + phuongXa).subscribe(resultData => {
                this.thongTinBenhNhan.QuanHuyenId = resultData[0].HuyenId;
                this.thongTinBenhNhan.TinhThanhId = resultData[0].TinhId;
                this.thongTinBenhNhan.TenHuyenDisplay = resultData[0].TenHuyen;
                this.thongTinBenhNhan.TenTinhDisplay = resultData[0].TenTinh;
                this.thongTinBenhNhan.PhuongXaId = phuongXa;
            }, () => {
                console.log("Loi roi");
            });
        }
        else {
            this.thongTinBenhNhan.QuanHuyenId = 0;
            this.thongTinBenhNhan.TinhThanhId = 0;
            this.thongTinBenhNhan.TenHuyenDisplay = null;
            this.thongTinBenhNhan.TenTinhDisplay = null;
        }
        this.valueChange.emit(this.thongTinBenhNhan);
    }
    onSaveTen() {
        this.valueChange.emit(this.thongTinBenhNhan);
    }
    onSaveSDT(sdt) {
        this.thongTinBenhNhan.SoDienThoai = sdt;
        this.valueChange.emit(this.thongTinBenhNhan);
    }
    onSaveGioiTinh(gioiTinh) {
        this.thongTinBenhNhan.GioiTinh = gioiTinh;
        this.valueChange.emit(this.thongTinBenhNhan);
    }
    onSaveNamSinh(namSinh) {
        this.thongTinBenhNhan.NamSinh = namSinh;
        this.valueChange.emit(this.thongTinBenhNhan);
    }
    onSaveDiaChi(diaChi) {
        this.thongTinBenhNhan.DiaChi = diaChi;
        this.valueChange.emit(this.thongTinBenhNhan);
    }
};
QuayThuocKhachVangLaiThongTinHanhChinhComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiThongTinHanhChinhComponent.prototype, "validationErrors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocKhachVangLaiThongTinHanhChinhComponent.prototype, "valueChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiThongTinHanhChinhComponent.prototype, "donThuocId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiThongTinHanhChinhComponent.prototype, "MaBN", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiThongTinHanhChinhComponent.prototype, "TenBenhNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiThongTinHanhChinhComponent.prototype, "SDT", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocKhachVangLaiThongTinHanhChinhComponent.prototype, "ThongTinBenhNhanDaThuTienData", void 0);
QuayThuocKhachVangLaiThongTinHanhChinhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.scss")).default]
    })
], QuayThuocKhachVangLaiThongTinHanhChinhComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2Mta2hhY2gtdmFuZy1sYWkvcXVheS10aHVvYy1raGFjaC12YW5nLWxhaS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: QuayThuocKhachVangLaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocKhachVangLaiComponent", function() { return QuayThuocKhachVangLaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quay_thuoc_khach_vang_lai_cho_thanh_toan_quay_thuoc_khach_vang_lai_cho_thanh_toan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");










let QuayThuocKhachVangLaiComponent = class QuayThuocKhachVangLaiComponent {
    constructor(route, notificationService, router, dialog, apiService) {
        this.route = route;
        this.notificationService = notificationService;
        this.router = router;
        this.dialog = dialog;
        this.apiService = apiService;
        this.kendoTabSelected = 1;
        this.yctnId = 0;
        this.benhNhanId = 0;
        this.trangThai = 0;
        this.flagAllowLoadThuoc = true;
        this.xemTruocBangKeThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["XemTruocBangKeThuoc"]();
        this.tabIndex = 0;
    }
    ngOnInit() {
        this.route
            .queryParams
            .subscribe(v => {
            this.donThuocIds = v;
        });
        this.route.queryParams.subscribe(params => {
            this.ttCheck = params.page;
        });
        if (this.ttCheck == undefined) {
            this.route.queryParams.subscribe(params => {
                this.ttCheck = params.ttCheck;
            });
        }
        this.route.queryParams.subscribe(params => {
            this.MaBN = params.MaBN;
        });
        this.route.queryParams.subscribe(params => {
            this.TenBenhNhan = params.TenBenhNhan;
        });
        this.route.queryParams.subscribe(params => {
            this.SDT = params.SDT;
        });
    }
    onTabSelect(event) {
        this.tabIndex = event.index;
        if (event.index == 1) {
            this.flagAllowLoadThuoc = false;
        }
        else {
            this.flagAllowLoadThuoc = true;
        }
    }
    Huy() {
        this.route.queryParams.subscribe(v => {
            if (v.page != null) {
                this.ttCheck = v.page;
            }
        });
        this.route.queryParams.subscribe(v => {
            if (v.ttCheck != null) {
                this.ttCheck = v.ttCheck;
            }
        });
        if (this.ttCheck == 1) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
        }
        if (this.ttCheck == 2) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
        }
        if (this.ttCheck == 3) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
        }
        if (this.ttCheck == 0) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttCheck } });
        }
    }
    switchValueChanges(data) {
        this.thongTinBenhNhan = data;
    }
    switchValueChangesChoThanhToan(data) {
        this.validationErrorForThongTin = data;
    }
    changeTab(event) {
        this.trangThai = event;
    }
    MaTiepNhanBenhNhanDaThuTien(event) {
        this.ThongTinBenhNhanDaThuTien = event;
        if (this.ThongTinBenhNhanDaThuTien != undefined) {
            this.yctnId = event.YeuCauTiepNhanId;
            this.benhNhanId = event.BenhNhanId;
            if (this.trangThai == 1) {
                this.router.navigate(['nha-thuoc/mua-thuoc/' + this.yctnId + '/' + this.benhNhanId + '/' + this.trangThai + '/' + this.ttCheck]);
            }
            else {
                this.router.navigate(['nha-thuoc/mua-thuoc/' + this.yctnId + '/' + this.benhNhanId + '/' + this.trangThai + '/' + this.ttCheck]);
            }
            this.ngOnInit();
        }
    }
    danhSachChuaThanhToan(data) {
        this.xemTruocBangKeThuoc.DanhSachDonThuocs = data;
    }
    inXemTruocBangKeThuoc() {
        this.showPopupLoadingIn();
        this.xemTruocBangKeThuoc.Hosting = window.location.protocol + '//' + window.location.host;
        this.xemTruocBangKeThuoc.YeuCauTiepNhanId = this.route.snapshot.params.id;
        if (this.xemTruocBangKeThuoc.DanhSachDonThuocs === undefined &&
            this.xemTruocBangKeThuoc.DanhSachDonThuocs === null && this.xemTruocBangKeThuoc.DanhSachDonThuocs.length === 0) {
            this.notificationService.showError("Không có thuốc và vật tư.");
            return;
        }
        else {
            this.apiService.postExportPdf('QuayThuoc/XemTruocBangKeThuoc', this.xemTruocBangKeThuoc).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.dialog.open(_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_8__["ThongTinPhieuPdfPopupComponent"], {
                        disableClose: true,
                        width: '1000px',
                        data: { Model: resultData }
                    }).afterClosed().subscribe(() => {
                        this.closePopupLoadingData();
                    });
                }
            }, (err) => {
                this.closePopupLoadingData();
            });
        }
    }
    showPopupLoadingIn() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang loading...' },
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    keyEvent(event) {
        if (event.keyCode == 83 && event.ctrlKey) {
            // ctrl + s
            if (this.tabIndex == 0) {
                this.quayThuocHinhThucThanhToan.ThuTien();
            }
            event.preventDefault();
        }
        if (event.keyCode == 112 && event.ctrlKey) {
            // ctrl + f1
            this.tabVangLai.selectTab(0);
            event.preventDefault();
        }
        if (event.keyCode == 113 && event.ctrlKey) {
            // ctrl + f2
            this.tabVangLai.selectTab(1);
            event.preventDefault();
        }
        if (event.keyCode == 27 && !event.ctrlKey) {
            // esc
            this.Huy();
            event.preventDefault();
        }
    }
};
QuayThuocKhachVangLaiComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabVangLai', { static: true })
], QuayThuocKhachVangLaiComponent.prototype, "tabVangLai", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_quay_thuoc_khach_vang_lai_cho_thanh_toan_quay_thuoc_khach_vang_lai_cho_thanh_toan_component__WEBPACK_IMPORTED_MODULE_4__["QuayThuocKhachVangLaiChoThanhToanComponent"], { static: false })
], QuayThuocKhachVangLaiComponent.prototype, "quayThuocHinhThucThanhToan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], QuayThuocKhachVangLaiComponent.prototype, "keyEvent", null);
QuayThuocKhachVangLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-khach-vang-lai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-khach-vang-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-khach-vang-lai.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.scss")).default]
    })
], QuayThuocKhachVangLaiComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-bhyt {\n  height: 20px;\n  top: 2px;\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxccXVheS10aHVvY1xccXVheS10aHVvYy1saXN0XFxxdWF5LXRodW9jLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtbGlzdC9xdWF5LXRodW9jLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy1saXN0L3F1YXktdGh1b2MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJoeXQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRvcDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufSIsIi5pY29uLWJoeXQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRvcDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: QuayThuocListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocListComponent", function() { return QuayThuocListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_done__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/done */ "./node_modules/@iconify/icons-ic/done.js");
/* harmony import */ var _iconify_icons_ic_done__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_done__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/info */ "./node_modules/@iconify/icons-ic/info.js");
/* harmony import */ var _iconify_icons_ic_info__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_info__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check */ "./node_modules/@iconify/icons-ic/twotone-check.js");
/* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _in_don_thuoc_pop_up_in_don_thuoc_pop_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../in-don-thuoc-pop-up/in-don-thuoc-pop-up.component */ "./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
















let QuayThuocListComponent = class QuayThuocListComponent {
    constructor(router, apiService, dialog, route, authService, notificationService) {
        this.router = router;
        this.apiService = apiService;
        this.dialog = dialog;
        this.route = route;
        this.authService = authService;
        this.notificationService = notificationService;
        this.icDone = _iconify_icons_ic_done__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icInfo = _iconify_icons_ic_info__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.gridChildColumnsChoThanhToan = [];
        this.gridChildColumnsDaThanhToan = [];
        this.gridChildColumnsAll = [];
        this.gridChild = [];
        this.DieuKienLoadVaoChiTiet = false;
        this.typeDanhSachThanhToan = 0;
        this.xacNhanIn = false;
        this.data = 0;
        this.id = null;
        this.url1 = null;
        this.url2 = null;
        this.queryStringSearchUuTien = null;
        this.OnHandleDataQuayThuocSearchList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.OnHandleDieuKienLoadXemChiTiet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.urlGetDataGridChild = "QuayThuoc/GetDataForGridTimBenhNhanAsync";
        this.urlGetTotalPageGridChild = "QuayThuoc/GetTotalPageForGridTimBenhNhanAsync";
        this.urlGetDataChild = "QuayThuoc/GetDanhSachThuocBenhNhanChild";
        this.validationErrors = [];
        this.groups = [{ field: 'LoaiDonThuoc' }];
        this.sortConfig = [
            {
                field: "TrangThai",
                dir: "asc",
            },
            {
                field: "Id",
                dir: "asc",
            },
        ];
    }
    ngOnInit() {
        this.gridChildColumnsChoThanhToan = [
            { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
            { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 120, Sortable: true },
            { Field: "SoDienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true },
            { Field: "TongGiaTriDonThuoc", Title: "Tổng giá trị đơn thuốc", Width: 200, Sortable: true, Template: this.TongGiaTriDonThuocTemplate },
            { Field: "TrangThaiHienThiString", Title: "Trạng thái", Width: 120, Sortable: false, Template: this.trangThaiTemplate },
            { Field: "", Title: "", Width: 200, Sortable: false, Template: this.nguoiDungKhongMuaThuocTemplate },
        ];
        this.gridChildColumnsDaThanhToan = [
            { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
            { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 120, Sortable: true },
            { Field: "SoDienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true },
            { Field: "TongGiaTriDonThuoc", Title: "Tổng giá trị đơn thuốc", Width: 200, Sortable: true, Template: this.TongGiaTriDonThuocTemplate },
            { Field: "TrangThaiHienThiString", Title: "Trạng thái", Width: 120, Sortable: false, Template: this.trangThaiTemplate },
        ];
        this.gridChildColumnsAll = [
            { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
            { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 120, Sortable: true },
            { Field: "SoDienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true },
            { Field: "SoTienChoThanhToan", Title: "Số tiền chờ thanh toán", Width: 220, Sortable: true, Template: this.SoTienChoThanhToanTemplate },
            { Field: "TongGiaTriDonThuoc", Title: "Tổng giá trị đơn thuốc", Width: 200, Sortable: true, Template: this.TongGiaTriDonThuocTemplate },
            { Field: "TrangThaiHienThiString", Title: "Trạng thái", Width: 120, Sortable: false, Template: this.trangThaiTemplate },
        ];
        this.gridChild = [
            { Field: "STT", Title: "#", Width: 100, Sortable: true },
            { Field: "LoaiDonThuoc", Title: "", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "MaDon", Title: "Mã Đơn", Width: 100, Sortable: true },
            { Field: "NgayKeDon", Title: "Ngày kê đơn", Width: 200, Sortable: true },
            { Field: "DVKham", Title: "Dịch vụ khám", minWidth: 200, Sortable: true },
            { Field: "BSKham", Title: "Bác sĩ khám", Width: 200, Sortable: true },
            { Field: "SoTienDisPlay", Title: "Số tiền ", Width: 80, Sortable: true, TemplateFooter: this.TongCongDonThuocFooter, Template: this.SoTienThuoctemplate },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Sortable: true, Template: this.TinhTrangThuoctemplate },
            { Field: "", Title: "", Width: 120, Sortable: true, Template: this.templatePrint },
        ];
    }
    Xem(event) {
        this.router.navigate(['nha-thuoc/mua-thuoc/' + event.YeuCauTiepNhanId + '/' + event.BenhNhanId + '/' + event.TrangThai + '/' + this.typeDanhSachThanhToan]);
    }
    ngOnChanges(event) {
        if (event.queryStringSearchUuTien != null || event.queryStringSearchUuTien != undefined) {
            if (event.queryStringSearchUuTien.currentValue != null || event.queryStringSearchUuTien.currentValue != undefined) {
                if (event.queryStringSearchUuTien.currentValue != null) {
                    this.gridD._additionalSearchString = event.queryStringSearchUuTien.currentValue;
                    let kiemTraDieuKienLoad = JSON.parse(event.queryStringSearchUuTien.currentValue);
                    this.typeDanhSachThanhToan = kiemTraDieuKienLoad.KiemTraThanhToan;
                    if (kiemTraDieuKienLoad.DieuKienLoadVaoChiTiet != null) {
                        this.DieuKienLoadVaoChiTiet = kiemTraDieuKienLoad.DieuKienLoadVaoChiTiet;
                    }
                    this.gridD.search();
                }
            }
        }
    }
    PrinAllDonThuocBenhNhan(donThuocThanhToanId, LoaiDonThuoc, YeuCauKhambenhId) {
        var data = {
            LoaiDonThuoc: LoaiDonThuoc,
            YeuCauKhambenhId: YeuCauKhambenhId,
            Hosting: null,
            TiepNhanId: donThuocThanhToanId
        };
        if (window.location.protocol == "http:") {
            data.Hosting = "http://" + window.location.host;
        }
        else {
            data.Hosting = "https://" + window.location.host;
        }
        this.apiService.post("QuayThuoc/InThuocBenhNhan", data).subscribe(resultData => {
            let dialogRef = this.dialog.open(_in_don_thuoc_pop_up_in_don_thuoc_pop_up_component__WEBPACK_IMPORTED_MODULE_9__["InDonThuocPopUpComponent"], {
                width: '1000px',
                data: { Model: resultData, InDonThuocDanhSachList: false, InBangKe: true, InPhieuThu: false }
            }).afterClosed().subscribe(() => { });
        }, () => { });
    }
    onDataBound(data) {
        this.OnHandleDieuKienLoadXemChiTiet.emit(true);
        this.OnHandleDataQuayThuocSearchList.emit(data);
    }
    nguoiBenhKhongMuaThuoc(dataItem) {
        var self = this;
        const yeuCauTiepNhanId = dataItem.Id;
        var nguoiDungKhongMuaDonThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_10__["NguoiDungKhongMuaDonThuoc"]();
        nguoiDungKhongMuaDonThuoc.YeuCauTiepNhanId = yeuCauTiepNhanId;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Người bệnh không muốn mua thuốc này?" }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                self.apiService.post("QuayThuoc/NguoiBenhKhongMuaDonThuoc", nguoiDungKhongMuaDonThuoc).subscribe(() => {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                    this.gridD.search();
                }, (err) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
            }
        });
    }
};
QuayThuocListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocListComponent.prototype, "xacNhanIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocListComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocListComponent.prototype, "url1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocListComponent.prototype, "url2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocListComponent.prototype, "queryStringSearchUuTien", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocListComponent.prototype, "OnHandleDataQuayThuocSearchList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocListComponent.prototype, "OnHandleDieuKienLoadXemChiTiet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridD', { static: true })
], QuayThuocListComponent.prototype, "gridD", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], QuayThuocListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TongGiaTriDonThuocTemplate', { static: true })
], QuayThuocListComponent.prototype, "TongGiaTriDonThuocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SoTienChoThanhToanTemplate', { static: true })
], QuayThuocListComponent.prototype, "SoTienChoThanhToanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], QuayThuocListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiDungKhongMuaThuocTemplate', { static: true })
], QuayThuocListComponent.prototype, "nguoiDungKhongMuaThuocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], QuayThuocListComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templatePrint', { static: true })
], QuayThuocListComponent.prototype, "templatePrint", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TongCongDonThuocFooter', { static: true })
], QuayThuocListComponent.prototype, "TongCongDonThuocFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TonggiaTriThuocFooter', { static: true })
], QuayThuocListComponent.prototype, "TonggiaTriThuocFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDonThuocTrongNgay', { static: false })
], QuayThuocListComponent.prototype, "gridDonThuocTrongNgay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], QuayThuocListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SoTienThuoctemplate', { static: true })
], QuayThuocListComponent.prototype, "SoTienThuoctemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangThuoctemplate', { static: true })
], QuayThuocListComponent.prototype, "TinhTrangThuoctemplate", void 0);
QuayThuocListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-list.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.scss")).default]
    })
], QuayThuocListComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtbXVhLXRodW9jL3F1YXktdGh1b2MtbXVhLXRodW9jLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.ts ***!
  \************************************************************************************************/
/*! exports provided: QuayThuocMuaThuocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocMuaThuocComponent", function() { return QuayThuocMuaThuocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _quay_thuoc_hinh_thuc_thanh_toan_quay_thuoc_hinh_thuc_thanh_toan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");










let QuayThuocMuaThuocComponent = class QuayThuocMuaThuocComponent {
    constructor(route, notificationService, dialog, apiService, router, cdRef) {
        this.route = route;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.router = router;
        this.cdRef = cdRef;
        this.tt = this.route.snapshot.params.tt;
        this.ttcheck = this.route.snapshot.params.ttcheck;
        this.apDungCongNoThuoc = false;
        this.thongTinTam = [];
        this.viTri = 0;
        this.tongTienBNThanhToan = 0;
        this.apDungMienGiam = false;
        this.flagAllowLoadThuoc = true;
        this.xemTruocBangKeThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["XemTruocBangKeThuoc"]();
        this.tabIndex = 0;
    }
    ngOnInit() {
        const tiepNhanId = this.route.snapshot.params.id;
        const benhNhanId = this.route.snapshot.params.idsub;
        this.benhnhanThongTin = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["BenhNhanThongTin"]();
        this.GetThongTinBenhNhan(benhNhanId, tiepNhanId);
    }
    GetThongTinBenhNhan(benhNhanId, tiepNhanId) {
        this.apiService.post("QuayThuoc/GetThongTinBenhNhan?benhNhanId=" + benhNhanId + "&tiepNhanId=" + tiepNhanId).subscribe(resultData => {
            this.benhnhanThongTin = resultData;
        }, () => { });
    }
    onTabSelect(event) {
        this.tabIndex = event.index;
        if (event.index == 1) {
            this.flagAllowLoadThuoc = false;
        }
        else {
            this.flagAllowLoadThuoc = true;
        }
    }
    // 2 đã thanh toán --- 1 chưa thanh toán --- 3 là cả 2
    Huy() {
        if (this.ttcheck == 1) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
        }
        if (this.ttcheck == 2) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
        }
        if (this.ttcheck == 3) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
        }
        if (this.ttcheck == 0) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: this.ttcheck, hoQuerysearch: false } });
        }
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    afterChangedCongNo() {
        this.cdRef.detectChanges();
        this.apDungCongNoThuoc = false;
    }
    afterChangedMienGiam() {
        this.cdRef.detectChanges();
        this.apDungMienGiam = false;
    }
    getBaoHiem(data) {
        this.apDungCongNoThuoc = data.apDungCongNoThuoc;
        this.thongTinTam = data.thongTinTam;
        this.viTri = data.viTri;
    }
    getMg(data) {
        this.apDungMienGiam = data.apDungMienGiam;
        this.thongTinMienGiamVos = data.thongTinMienGiam;
    }
    danhSachChuaThanhToan(data) {
        let bnThanhToan = 0;
        if (data != undefined && data != null) {
            data.forEach(ele => {
                bnThanhToan += ele.BNConPhaiThanhToan;
            });
        }
        this.tongTienBNThanhToan = bnThanhToan;
        this.xemTruocBangKeThuoc.DanhSachDonThuocs = data;
    }
    changeTab() {
        this.tabQuayThuoc.selectTab(1);
        this.flagAllowLoadThuoc = false;
    }
    inXemTruocBangKeThuoc() {
        this.showPopupLoadingIn();
        this.xemTruocBangKeThuoc.Hosting = window.location.protocol + '//' + window.location.host;
        this.xemTruocBangKeThuoc.YeuCauTiepNhanId = this.route.snapshot.params.id;
        if (this.xemTruocBangKeThuoc.DanhSachDonThuocs === undefined &&
            this.xemTruocBangKeThuoc.DanhSachDonThuocs === null && this.xemTruocBangKeThuoc.DanhSachDonThuocs.length === 0) {
            this.notificationService.showError("Không có thuốc và vật tư.");
            return;
        }
        else {
            this.apiService.postExportPdf('QuayThuoc/XemTruocBangKeThuoc', this.xemTruocBangKeThuoc).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.dialog.open(_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_8__["ThongTinPhieuPdfPopupComponent"], {
                        disableClose: true,
                        width: '1000px',
                        data: { Model: resultData }
                    }).afterClosed().subscribe(() => {
                        this.closePopupLoadingData();
                    });
                }
            }, (err) => {
                this.closePopupLoadingData();
            });
        }
    }
    showPopupLoadingIn() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang loading...' },
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    keyEvent(event) {
        if (event.keyCode == 83 && event.ctrlKey) {
            // ctrl + s
            if (this.tabIndex == 0) {
                this.quayThuocHinhThucThanhToan.ThuTien();
            }
            event.preventDefault();
        }
        if (event.keyCode == 112 && event.ctrlKey) {
            // ctrl + f1
            this.tabQuayThuoc.selectTab(0);
            event.preventDefault();
        }
        if (event.keyCode == 113 && event.ctrlKey) {
            // ctrl + f2
            this.tabQuayThuoc.selectTab(1);
            event.preventDefault();
        }
        if (event.keyCode == 27 && !event.ctrlKey) {
            // esc
            this.Huy();
            event.preventDefault();
        }
    }
};
QuayThuocMuaThuocComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabQuayThuoc', { static: true })
], QuayThuocMuaThuocComponent.prototype, "tabQuayThuoc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_quay_thuoc_hinh_thuc_thanh_toan_quay_thuoc_hinh_thuc_thanh_toan_component__WEBPACK_IMPORTED_MODULE_5__["QuayThuocHinhThucThanhToanComponent"], { static: false })
], QuayThuocMuaThuocComponent.prototype, "quayThuocHinhThucThanhToan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], QuayThuocMuaThuocComponent.prototype, "keyEvent", null);
QuayThuocMuaThuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-mua-thuoc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-mua-thuoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-mua-thuoc.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.scss")).default]
    })
], QuayThuocMuaThuocComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: QuayThuocRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocRoutingModule", function() { return QuayThuocRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _quay_thuoc_cho_thanh_toan_quay_thuoc_cho_thanh_toan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.ts");
/* harmony import */ var _quay_thuoc_mua_thuoc_quay_thuoc_mua_thuoc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.ts");
/* harmony import */ var _quay_thuoc_toa_thuoc_cu_quay_thuoc_toa_thuoc_cu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.ts");
/* harmony import */ var _quay_thuoc_khach_vang_lai_quay_thuoc_khach_vang_lai_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.ts");










const routes = [{
        path: '',
        component: _quay_thuoc_cho_thanh_toan_quay_thuoc_cho_thanh_toan_component__WEBPACK_IMPORTED_MODULE_6__["QuayThuocChoThanhToanComponent"],
        data: {
            title: 'Tìm thông tin',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].QuayThuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'mua-thuoc/:id/:idsub/:tt/:ttcheck',
        component: _quay_thuoc_mua_thuoc_quay_thuoc_mua_thuoc_component__WEBPACK_IMPORTED_MODULE_7__["QuayThuocMuaThuocComponent"],
        data: {
            title: 'Mua thuốc',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].QuayThuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'mua-toa-cu/:id/:ttcheck',
        component: _quay_thuoc_toa_thuoc_cu_quay_thuoc_toa_thuoc_cu_component__WEBPACK_IMPORTED_MODULE_8__["QuayThuocToaThuocCuComponent"],
        data: {
            title: 'Mua thuốc',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].QuayThuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'khach-vang-lai',
        component: _quay_thuoc_khach_vang_lai_quay_thuoc_khach_vang_lai_component__WEBPACK_IMPORTED_MODULE_9__["QuayThuocKhachVangLaiComponent"],
        data: {
            title: 'Mua thuốc',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].QuayThuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let QuayThuocRoutingModule = class QuayThuocRoutingModule {
};
QuayThuocRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QuayThuocRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n  text-transform: uppercase;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy10aG9uZy10aW4tYmFvLWhpZW0tdHUtbmhhbi9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXHF1YXktdGh1b2MtdGhvbmctdGluLWJhby1oaWVtLXR1LW5oYW5cXHF1YXktdGh1b2MtdGhvbmctdGluLWJhby1oaWVtLXR1LW5oYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtdGhvbmctdGluLWJhby1oaWVtLXR1LW5oYW4vcXVheS10aHVvYy10aG9uZy10aW4tYmFvLWhpZW0tdHUtbmhhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy10aG9uZy10aW4tYmFvLWhpZW0tdHUtbmhhbi9xdWF5LXRodW9jLXRob25nLXRpbi1iYW8taGllbS10dS1uaGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: QuayThuocThongTinBaoHiemTuNhanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocThongTinBaoHiemTuNhanComponent", function() { return QuayThuocThongTinBaoHiemTuNhanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");






let QuayThuocThongTinBaoHiemTuNhanComponent = class QuayThuocThongTinBaoHiemTuNhanComponent {
    constructor(route, apiService, cdRef, notificationService) {
        this.route = route;
        this.apiService = apiService;
        this.cdRef = cdRef;
        this.notificationService = notificationService;
        this.gridChildColumns2 = [];
        this.idMYCTN = this.route.snapshot.params.id;
        this.apDungCongNo = false;
        this.thongTinBenhNhantam = [];
        this.valueChangeBaoHiem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.valueChangeMg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSourceDanhSachBHTN = {
            data: [],
            total: 0
        };
        this.checkHaveBHTN = false;
        this.flagEnableVoucher = false;
        this.flagApDung = false;
        this.thongTinMienGiamThem = [];
        this.thongTinMienGiamVoucher = [];
        this.disabledVoucher = false;
        this.flagEnableMGThem = false;
        this.disabledMGThem = false;
        this.disabledSoTienMG = true;
        this.disabledTiLeMG = true;
        this.isExistFile = false;
        this.soTienMgCheck = true;
        this.tiLeMgCheck = false;
        this.listVouchers = [];
        this.listOldVouchers = [];
        this.quayThuocValidationErrors = [];
        this.apDungMienGiam = false;
        this.idBenhNhan = 0;
        this.tongTienBNThanhToanPrivate = 0;
        this.checkHiddenSoTienConLai = false;
        this.loaiVoucher = 0;
        this.khachVangLaiMuaThuoc = false;
        this.format = 'n2';
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].QuayThuoc;
        this.gridChildColumns2 = [
            { Field: "TenCongTy", Title: "Công Ty", Width: 231 },
            { Field: "SoThe", Title: "Số Thẻ", Width: 111 },
            { Field: "TuNgayHienThi", Title: "Từ ngày", Width: 96 },
            { Field: "DenNgayHienThi", Title: "Đến ngày", Width: 104 },
            { Field: "DienThoai", Title: "Điện thoại", Width: 122 },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 240 },
            { Field: "CongNo", Title: "Công nợ", Width: 115, Template: this.actionTemplateSTCongNo },
            { Field: "", Title: "", Width: 125, Template: this.actionTemplateSubmitCongNo }
        ];
        this.idBenhNhan = this.route.snapshot.params.idsub;
        this.getDanhSachBHTN();
    }
    ngOnChanges() {
        this.tongTienBNThanhToanPrivate = this.tongTienBNThanhToan;
    }
    getDanhSachBHTN() {
        this.apiService.get("QuayThuoc/GetListCongTyBaoHiemTuNhans?tiepNhanId=" + this.idMYCTN).subscribe(resultData => {
            if (resultData != null && resultData != undefined) {
                this.dataSourceDanhSachBHTN.data = resultData;
                this.dataSourceDanhSachBHTN.data.forEach(element => {
                    var congNoItem = {
                        Id: element.Id,
                        CongNoId: element.CongNoId,
                        SoTien: element.SoTien,
                        TenCongTy: element.TenCongTy
                    };
                    this.thongTinBenhNhantam.push(congNoItem);
                });
                this.CheckThongTinBenhNhan(this.idMYCTN);
            }
        });
    }
    CheckThongTinBenhNhan(tiepNhanId) {
        this.apiService.post("QuayThuoc/CheckBenhNhanExistBaoHiemTuNhan?yctnId=" + tiepNhanId).subscribe(resultData => {
            if (resultData.length > 0) {
                this.checkHaveBHTN = true;
            }
            else {
                this.checkHaveBHTN = false;
            }
            this.getThongTinMienGiam(tiepNhanId);
        }, () => { });
    }
    getThongTinMienGiam(id) {
        this.apiService.get("ThuNgan/GetThongTinMienGiam?yeuCauTiepNhanId=" + id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.khachVangLaiMuaThuoc = resultData.KhachVangLaiMuaThuoc;
                if (resultData.ThongTinMienGiamVoucherVo != null || resultData.ThongTinMienGiamVoucherVo != undefined) {
                    this.flagApDung = true;
                    this.flagEnableVoucher = true;
                    if (this.flagEnableVoucher === true) {
                        this.disabledVoucher = true;
                    }
                    this.listVouchers = [];
                    resultData.ThongTinMienGiamVoucherVo.MaVouchers.forEach(element => {
                        this.listVouchers.push(element.KeyId);
                        this.listOldVouchers.push(element.KeyId);
                    });
                    this.thongTinMienGiamVoucher = {
                        MaVouchers: resultData.ThongTinMienGiamVoucherVo.MaVouchers,
                        DuocPhamMienGiamTheoTiLes: resultData.ThongTinMienGiamVoucherVo.DuocPhamMienGiamTheoTiLes,
                        LoaiVoucher: resultData.ThongTinMienGiamVoucherVo.LoaiVoucher,
                        TenVoucher: resultData.ThongTinMienGiamVoucherVo.TenVoucher,
                        SoTienVoucherMiemGiam: resultData.ThongTinMienGiamVoucherVo.LoaiVoucher.SoTienVoucherMiemGiam
                    };
                    this.loaiVoucher = resultData.ThongTinMienGiamVoucherVo.LoaiVoucher;
                }
                if (resultData.ThongTinMienGiamThemVo != null || resultData.ThongTinMienGiamThemVo != undefined) {
                    this.flagApDung = true;
                    this.flagEnableMGThem = true;
                    if (this.flagEnableMGThem === true) {
                        this.disabledMGThem = true;
                    }
                    this.thongTinMienGiamThem = {
                        LoaiMienGiamThem: resultData.ThongTinMienGiamThemVo.LoaiMienGiamThem,
                        LyDoMiemGiam: resultData.ThongTinMienGiamThemVo.LyDoMiemGiam,
                        SoTienMG: resultData.ThongTinMienGiamThemVo.SoTienMG,
                        SoTienMGConLai: resultData.ThongTinMienGiamThemVo.SoTienMGConLai,
                        TiLeMienGiam: resultData.ThongTinMienGiamThemVo.TiLeMienGiam,
                        NhanVienDuyetMienGiamThemId: resultData.ThongTinMienGiamThemVo.NhanVienDuyetMienGiamThemId,
                        TenNhanVienDuyet: resultData.ThongTinMienGiamThemVo.TenNhanVienDuyet,
                        TaiLieuDinhKemGiayMiemGiam: {
                            Id: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.Id,
                            Ma: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.Ma,
                            DuongDan: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.DuongDan,
                            MoTa: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.MoTa,
                            KichThuoc: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.KichThuoc,
                            LoaiTapTin: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.LoaiTapTin,
                            Ten: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.Ten,
                            TenGuid: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.TenGuid
                        }
                    };
                    if (this.thongTinMienGiamThem.SoTienMG != 0) {
                        this.disabledSoTienMG = false;
                        this.soTienMgCheck = true;
                        this.tiLeMgCheck = false;
                    }
                    if (this.thongTinMienGiamThem.TiLeMienGiam != 0) {
                        this.disabledTiLeMG = false;
                        this.soTienMgCheck = false;
                        this.tiLeMgCheck = true;
                    }
                    if (this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam.Ten != null) {
                        this.isExistFile = true;
                    }
                }
                else {
                    this.disabledSoTienMG = false;
                    this.thongTinMienGiamThem = {
                        LoaiMienGiamThem: null,
                        LyDoMiemGiam: null,
                        SoTienMG: 0,
                        SoTienMGConLai: 0,
                        TiLeMienGiam: 0,
                        TaiLieuDinhKemGiayMiemGiam: {
                            Ma: null,
                            DuongDan: null,
                            MoTa: null,
                            KichThuoc: null,
                            LoaiTapTin: null,
                            Ten: null,
                            TenGuid: null
                        }
                    };
                }
            }
        });
    }
    uploadFileDone(tapTin) {
        this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam = tapTin;
        this.cdRef.detectChanges();
    }
    onApplyMGThem() {
        this.thongTinMienGiamVo = {
            ThongTinMienGiamVoucherVo: this.thongTinMienGiamVoucher,
            ThongTinMienGiamThemVo: this.thongTinMienGiamThem,
        };
        this.apDungMienGiam = true;
        var loaiMGThem = 1;
        if (this.soTienMgCheck) {
            loaiMGThem = 1;
        }
        if (this.tiLeMgCheck) {
            loaiMGThem = 2;
        }
        if (this.thongTinMienGiamThem.SoTienMG != 0) {
            this.thongTinMienGiamThem.LoaiMienGiamThem = 1;
            this.thongTinMienGiamThem.TiLeMienGiam = 0;
        }
        if (this.thongTinMienGiamThem.TiLeMienGiam != 0) {
            this.thongTinMienGiamThem.LoaiMienGiamThem = 2;
            this.thongTinMienGiamThem.SoTienMG = 0;
        }
        var thongTinMGThem = {
            ValidateVoucher: this.flagEnableVoucher,
            IdYeuCauTiepNhan: this.idMYCTN,
            ListVouchers: this.listVouchers,
            ValidateMGThem: this.flagEnableMGThem,
            LoaiMienGiamThem: loaiMGThem,
            LyDoMienGiam: this.thongTinMienGiamThem.LyDoMiemGiam,
            TaiLieuDinhKem: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
            SoTienMG: this.thongTinMienGiamThem.SoTienMG,
            TiLeMienGiam: this.thongTinMienGiamThem.TiLeMienGiam,
            SoTienMGConLai: this.thongTinMienGiamThem.SoTienMGConLai,
            BenhNhanId: this.idBenhNhan,
            NhanVienDuyetMienGiamThemId: this.thongTinMienGiamThem.NhanVienDuyetMienGiamThemId
        };
        this.quayThuocValidationErrors = null;
        this.apiService.post("ThuNgan/ThemThongTinMiemGiamThemVaVoucher", thongTinMGThem)
            .subscribe(resultData => {
            if (resultData) {
                this.getThongTinMienGiam(this.idMYCTN);
            }
            this.apDungMienGiam = true;
            var mienGiamObj = {
                apDungMienGiam: this.apDungMienGiam,
                thongTinMienGiam: this.thongTinMienGiamVo
            };
            this.valueChangeMg.emit(mienGiamObj);
        }, (err) => {
            this.quayThuocValidationErrors = err.ValidationErrors;
            this.disabledSoTienMG = true;
            this.thongTinMienGiamThem = {
                LoaiMienGiamThem: loaiMGThem,
                LyDoMiemGiam: this.thongTinMienGiamThem.LyDoMiemGiam,
                SoTienMG: this.thongTinMienGiamThem.SoTienMG,
                TiLeMienGiam: this.thongTinMienGiamThem.TiLeMienGiam,
                SoTienMGConLai: this.thongTinMienGiamThem.SoTienMGConLai,
                TaiLieuDinhKemGiayMiemGiam: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
            };
        });
    }
    onChangeLoaiMg(value) {
        if (value === 1) {
            this.soTienMgCheck = true;
            this.tiLeMgCheck = false;
            this.disabledSoTienMG = false;
            this.disabledTiLeMG = true;
            this.checkHiddenSoTienConLai = false;
            this.thongTinMienGiamThem.TiLeMienGiam = 0;
        }
        if (value === 2) {
            this.soTienMgCheck = false;
            this.tiLeMgCheck = true;
            this.disabledSoTienMG = true;
            this.disabledTiLeMG = false;
            this.checkHiddenSoTienConLai = true;
            this.thongTinMienGiamThem.SoTienMG = 0;
        }
    }
    onKeyCongNo(event, indexRow) {
        if (event.key == "Enter") {
            this.ApDungCongNo(indexRow);
        }
    }
    ApDungCongNo(indexRow) {
        if (this.dataSourceDanhSachBHTN.data[indexRow].SoTien != 0) {
            this.thongTinBenhNhantam[indexRow].SoTien = this.dataSourceDanhSachBHTN.data[indexRow].SoTien;
            this.apDungCongNo = true;
            var apDungCongNoQuayThuoc = {
                apDungCongNoThuoc: this.apDungCongNo,
                viTri: indexRow,
                thongTinTam: this.thongTinBenhNhantam
            };
            this.dataSourceDanhSachBHTN.data[indexRow].SoTien = 0;
            this.valueChangeBaoHiem.emit(apDungCongNoQuayThuoc);
        }
    }
    onChangeVoucher(data) {
        if (data === false) {
            this.flagEnableVoucher = false;
            if (this.flagEnableMGThem) {
                this.flagApDung = true;
                return;
            }
            this.flagApDung = false;
        }
        else {
            this.flagEnableVoucher = true;
            this.flagApDung = true;
            if (this.quayThuocValidationErrors == null) {
                this.quayThuocValidationErrors = [];
            }
            var lengthQuayThuocValidators = this.quayThuocValidationErrors.length;
            if (lengthQuayThuocValidators != 0) {
                for (let i = 0; i < lengthQuayThuocValidators; i++) {
                    if (this.quayThuocValidationErrors.length - 1 < i) {
                        //exceed
                        break;
                    }
                    if (this.quayThuocValidationErrors[i].Field == "ListVouchers") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) {
                            i--;
                        }
                    }
                }
            }
        }
    }
    onChangeMienGiam(data) {
        if (data === false) {
            this.flagEnableMGThem = false;
            if (this.flagEnableVoucher == false && this.flagEnableMGThem == false) {
                this.flagApDung = false;
            }
            if (this.flagEnableVoucher == true) {
                this.flagApDung = true;
            }
        }
        else {
            this.flagEnableMGThem = true;
            this.flagApDung = true;
            this.soTienMgCheck = true;
            this.tiLeMgCheck = false;
            if (this.quayThuocValidationErrors == null) {
                this.quayThuocValidationErrors = [];
            }
            var lengthQuayThuocValidators = this.quayThuocValidationErrors.length;
            if (lengthQuayThuocValidators != 0) {
                for (let i = 0; i < lengthQuayThuocValidators; i++) {
                    if (this.quayThuocValidationErrors.length - 1 < i) {
                        //exceed
                        break;
                    }
                    if (this.quayThuocValidationErrors[i].Field == "SoTienMG") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) {
                            i--;
                        }
                    }
                    if (this.quayThuocValidationErrors[i].Field == "LyDoMienGiam") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) {
                            i--;
                        }
                    }
                    if (this.quayThuocValidationErrors[i].Field == "TiLeMienGiam") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) {
                            i--;
                        }
                    }
                    if (this.quayThuocValidationErrors[i].Field == "TaiLieuDinhKem") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) {
                            i--;
                        }
                    }
                }
            }
        }
    }
    onOpenChange() {
        this.voucherList.getDataForLookup();
    }
    onSelectChangeVoucher(voucherId) {
        if (voucherId.length == 0)
            this.loaiVoucher = 0;
        var last = voucherId[voucherId.length - 1];
        this.apiService.post("ThuNgan/GetMaVoucher?loaiVoucher=" + this.loaiVoucher).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                resultData.forEach(element => {
                    if (element.KeyId == last) {
                        this.loaiVoucher = element.LoaiVoucher;
                    }
                });
            }
        });
    }
    valueChangeTheVoucher(value) {
        var voucherId = [];
        if (value.length > this.listOldVouchers.length) {
            this.listOldVouchers = value;
        }
        if (value.length < this.listOldVouchers.length) {
            if (value.length == 0) {
                this.disabledVoucher = false;
                voucherId = this.listOldVouchers;
                this.flagEnableVoucher = false;
                if (this.flagEnableMGThem === false) {
                    this.flagApDung = false;
                    this.apDungMienGiam = true;
                }
            }
            else {
                voucherId = this.differenceOf2Arrays(this.listOldVouchers, value);
            }
            var thongTinVoucherTheoYeuCauTiepNhan = {
                VoucherIds: voucherId,
                YeucauTiepNhanId: this.idMYCTN
            };
            this.apiService.post("ThuNgan/DeleteTheVoucher", thongTinVoucherTheoYeuCauTiepNhan)
                .subscribe(resultData => {
                if (resultData !== null && resultData !== undefined) {
                    if (resultData.Item1) {
                        this.notificationService.showSuccess(resultData.Item2);
                        this.getThongTinMienGiam(this.idMYCTN);
                        this.apDungMienGiam = true;
                        var mienGiamObj = {
                            apDungMienGiam: this.apDungMienGiam,
                            thongTinMienGiam: this.thongTinMienGiamVo
                        };
                        this.valueChangeMg.emit(mienGiamObj);
                    }
                }
            });
            this.listOldVouchers = value;
        }
    }
    differenceOf2Arrays(arr1, arr2) {
        const temp = [];
        arr1 = arr1.toString().split(',').map(Number);
        arr2 = arr2.toString().split(',').map(Number);
        for (var i in arr1) {
            if (!arr2.includes(arr1[i]))
                temp.push(arr1[i]);
        }
        for (i in arr2) {
            if (!arr1.includes(arr2[i]))
                temp.push(arr2[i]);
        }
        return temp.sort((a, b) => a - b);
    }
};
QuayThuocThongTinBaoHiemTuNhanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplateSTCongNo', { static: true })
], QuayThuocThongTinBaoHiemTuNhanComponent.prototype, "actionTemplateSTCongNo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplateSubmitCongNo', { static: true })
], QuayThuocThongTinBaoHiemTuNhanComponent.prototype, "actionTemplateSubmitCongNo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocThongTinBaoHiemTuNhanComponent.prototype, "valueChangeBaoHiem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocThongTinBaoHiemTuNhanComponent.prototype, "valueChangeMg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocThongTinBaoHiemTuNhanComponent.prototype, "tongTienBNThanhToan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('voucherList', { static: false })
], QuayThuocThongTinBaoHiemTuNhanComponent.prototype, "voucherList", void 0);
QuayThuocThongTinBaoHiemTuNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-thong-tin-bao-hiem-tu-nhan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.scss")).default]
    })
], QuayThuocThongTinBaoHiemTuNhanComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy10aG9uZy10aW4taGFuaC1jaGluaC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXHF1YXktdGh1b2MtdGhvbmctdGluLWhhbmgtY2hpbmhcXHF1YXktdGh1b2MtdGhvbmctdGluLWhhbmgtY2hpbmguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtdGhvbmctdGluLWhhbmgtY2hpbmgvcXVheS10aHVvYy10aG9uZy10aW4taGFuaC1jaGluaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy10aG9uZy10aW4taGFuaC1jaGluaC9xdWF5LXRodW9jLXRob25nLXRpbi1oYW5oLWNoaW5oLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: QuayThuocThongTinHanhChinhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocThongTinHanhChinhComponent", function() { return QuayThuocThongTinHanhChinhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");





let QuayThuocThongTinHanhChinhComponent = class QuayThuocThongTinHanhChinhComponent {
    constructor(route, apiService) {
        this.route = route;
        this.apiService = apiService;
        this.data = {};
    }
    ngOnInit() {
        const id = this.route.snapshot.params.idsub;
        if (this.benhnhanThongTin == null) {
            this.benhnhanThongTin = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_4__["BenhNhanThongTin"]();
        }
        if (this.MaBN != null) {
            this.GetThongTinBenhNhan(this.MaBN);
        }
    }
    GetThongTinBenhNhan(id) {
        this.apiService.post("QuayThuoc/GetThongTinBenhNhan1?maBN=" + id).subscribe(resultData => {
            this.data = resultData;
        }, () => { });
    }
};
QuayThuocThongTinHanhChinhComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocThongTinHanhChinhComponent.prototype, "benhnhanThongTin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocThongTinHanhChinhComponent.prototype, "MaBN", void 0);
QuayThuocThongTinHanhChinhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-thong-tin-hanh-chinh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-thong-tin-hanh-chinh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-thong-tin-hanh-chinh.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component.scss")).default]
    })
], QuayThuocThongTinHanhChinhComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtdGltLWJlbmgtbmhhbi1wb3AtdXAvcXVheS10aHVvYy10aW0tYmVuaC1uaGFuLXBvcC11cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: QuayThuocTimBenhNhanPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocTimBenhNhanPopUpComponent", function() { return QuayThuocTimBenhNhanPopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/done */ "./node_modules/@iconify/icons-ic/done.js");
/* harmony import */ var _iconify_icons_ic_done__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_done__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _in_don_thuoc_pop_up_in_don_thuoc_pop_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../in-don-thuoc-pop-up/in-don-thuoc-pop-up.component */ "./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.ts");










let QuayThuocTimBenhNhanPopUpComponent = class QuayThuocTimBenhNhanPopUpComponent {
    constructor(dialogRef, dataItem, apiService, dialog) {
        this.dialogRef = dialogRef;
        this.dataItem = dataItem;
        this.apiService = apiService;
        this.dialog = dialog;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icDone = _iconify_icons_ic_done__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.Title = null;
        this.data = [];
        this.gridChild = [];
        this.gridChildColumns2 = [];
        this.urlGetDataChild = "QuayThuoc/GetDataForGridChildDTTNAsync";
        this.data = dataItem.Model;
        this.Title = dataItem.Title;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].QuayThuoc;
        this.benhNhan = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_6__["ThongTinBenhNhan"]();
        this.gridChildColumns2 = [
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: false },
            { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: false },
            { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: false },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: false },
            { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: false },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 300, Sortable: false },
            { Field: "SoDienThoaiDisPlay", Title: "Điện thoại", Width: 120, Sortable: false },
            { Field: "Action", Title: "", Width: 80, Template: this.actionTemplate },
        ];
        this.gridChild = [
            { Field: "STT", Title: "#", Width: 100, Sortable: true },
            { Field: "LoaiDonThuoc", Title: "", Width: 200, Sortable: true, Hidden: true },
            { Field: "MaDon", Title: "Mã Đơn", Width: 100, Sortable: true },
            { Field: "NgayKeDon", Title: "Ngày kê đơn", Width: 200, Sortable: true },
            { Field: "DVKham", Title: "Dịch vụ khám", minWidth: 200, Sortable: true },
            { Field: "BSKham", Title: "Bác sĩ khám", Width: 200, Sortable: true },
            { Field: "SoTienDisPlay", Title: "Số tiền ", Width: 80, Sortable: true, Template: this.SoTienThuoctemplate },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Sortable: true, Template: this.TinhTrangThuoctemplate },
            { Field: "", Title: "", Width: 120, Sortable: true, Template: this.templatePrint },
        ];
    }
    close(answer, type) {
        if (type == 1) {
            this.dialogRef.close(answer);
        }
        else {
            // this.benhNhan.MaBenhNhan = answer.BenhNhanId;
            // this.benhNhan.MaTiepNhan=answer.MaTN;
            // this.benhNhan.TrangThaiThanhToan = answer.TrangThai;
            // this.benhNhan.YeuCauTiepNhanId=answer.Id;
            this.dialogRef.close(answer);
        }
    }
    PrinAllDonThuocBenhNhan(YeuCauTiepNhanId) {
        var data = {
            Hosting: null,
            TiepNhanId: YeuCauTiepNhanId
        };
        if (window.location.protocol == "http:") {
            data.Hosting = "http://" + window.location.host;
        }
        else {
            data.Hosting = "https://" + window.location.host;
        }
        this.apiService.post("QuayThuoc/InThuocBenhNhan", data).subscribe(resultData => {
            let dialogRef = this.dialog.open(_in_don_thuoc_pop_up_in_don_thuoc_pop_up_component__WEBPACK_IMPORTED_MODULE_9__["InDonThuocPopUpComponent"], {
                width: '1000px',
                data: { Model: resultData, InDonThuocDanhSachList: false, InBangKe: true, InPhieuThu: false }
            }).afterClosed().subscribe(() => { });
        }, () => { });
    }
};
QuayThuocTimBenhNhanPopUpComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], QuayThuocTimBenhNhanPopUpComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TongGiaTriDonThuocTemplate', { static: true })
], QuayThuocTimBenhNhanPopUpComponent.prototype, "TongGiaTriDonThuocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SoTienChoThanhToanTemplate', { static: true })
], QuayThuocTimBenhNhanPopUpComponent.prototype, "SoTienChoThanhToanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], QuayThuocTimBenhNhanPopUpComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], QuayThuocTimBenhNhanPopUpComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templatePrint', { static: true })
], QuayThuocTimBenhNhanPopUpComponent.prototype, "templatePrint", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SoTienThuoctemplate', { static: true })
], QuayThuocTimBenhNhanPopUpComponent.prototype, "SoTienThuoctemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangThuoctemplate', { static: true })
], QuayThuocTimBenhNhanPopUpComponent.prototype, "TinhTrangThuoctemplate", void 0);
QuayThuocTimBenhNhanPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-tim-benh-nhan-pop-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-tim-benh-nhan-pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-tim-benh-nhan-pop-up.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], QuayThuocTimBenhNhanPopUpComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvcXVheS10aHVvYy10aW0tYmVuaC1uaGFuL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxccXVheS10aHVvY1xccXVheS10aHVvYy10aW0tYmVuaC1uaGFuXFxxdWF5LXRodW9jLXRpbS1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtdGltLWJlbmgtbmhhbi9xdWF5LXRodW9jLXRpbS1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtdGltLWJlbmgtbmhhbi9xdWF5LXRodW9jLXRpbS1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59IiwiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: QuayThuocTimBenhNhanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocTimBenhNhanComponent", function() { return QuayThuocTimBenhNhanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _quay_thuoc_tim_benh_nhan_pop_up_quay_thuoc_tim_benh_nhan_pop_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.ts");
/* harmony import */ var _quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");

















let QuayThuocTimBenhNhanComponent = class QuayThuocTimBenhNhanComponent {
    constructor(apiService, dialog, router, cd, authService, notificationService, route) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.router = router;
        this.cd = cd;
        this.authService = authService;
        this.notificationService = notificationService;
        this.route = route;
        this.isScanF1 = false;
        this.tt111 = 0;
        this.DateTuNgay = null;
        this.DateDenNgay = null;
        this.eXportExel = false;
        this.searchUuTien = true;
        this.exportQueryInfoQueryInfo = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["ExportQueryInfoQueryInfo"]();
        this.kiemTraDanhSachThanhToan = true;
        this.kiemTraDanhSachDaThanhToan = true;
        this.hoquerySearch = false;
        this.dataSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHaddlekiemTraDonThuocThanhToan = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHaddleeXportExel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHaddleUuTienSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.queRyInFoSearchNhaThuoc = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["SearchInfoNhaThuoc"]();
        // icon
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_10___default.a;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].QuayThuoc;
        this.quayThuocGridVo = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["QuayThuocGridVo"]();
        this.benhNhanId = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["ThongTinBenhNhan"]();
        this.timKiem = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["TimBenhNhan"]();
        if (this.timKiem.RangeDate.startDate == null) {
            this.DateTuNgay = new Date();
            this.timKiem.RangeDate.startDate = this.DateTuNgay;
        }
        if (this.timKiem.RangeDate.endDate == null) {
            this.DateDenNgay = new Date();
            this.timKiem.RangeDate.endDate = this.DateDenNgay;
        }
        if (this.typeDanhSachThanhToan == 1) // đang thanh toán
         {
            this.kiemTraDanhSachThanhToan = true;
            this.kiemTraDanhSachDaThanhToan = false;
            this.TimkiemId(this.typeDanhSachThanhToan);
        }
        if (this.typeDanhSachThanhToan == 2) // đã thanh toán
         {
            this.kiemTraDanhSachThanhToan = false;
            this.kiemTraDanhSachDaThanhToan = true;
            this.TimkiemId(this.typeDanhSachThanhToan);
        }
        if (this.typeDanhSachThanhToan == 0) // đang thanh toán  và đãn thanh toán
         {
            this.kiemTraDanhSachThanhToan = true;
            this.kiemTraDanhSachDaThanhToan = true;
            this.TimkiemId(this.typeDanhSachThanhToan);
        }
        if (this.typeDanhSachThanhToan == 3) // đang thanh toán  và đãn thanh toán
         {
            this.kiemTraDanhSachThanhToan = false;
            this.kiemTraDanhSachDaThanhToan = false;
            this.TimkiemId(this.typeDanhSachThanhToan);
        }
        if (this.kiemTraDanhSachThanhToan == true && this.kiemTraDanhSachDaThanhToan == true) {
            this.timKiem.KiemTraThanhToan = 0;
            let data = this.timKiem.KiemTraThanhToan;
        }
        if (this.kiemTraDanhSachThanhToan == false && this.kiemTraDanhSachDaThanhToan == false) {
            this.timKiem.KiemTraThanhToan = 3;
            let data = this.timKiem.KiemTraThanhToan;
            // this.onHaddlekiemTraDonThuocThanhToan.emit(data);
            this.TimkiemId(this.typeDanhSachThanhToan);
        }
        this.route
            .queryParams
            .subscribe(v => {
            this.timKiem.KiemTraThanhToan = v.page;
        });
        this.TimKiem(false);
    }
    TimkiemId(typeDanhSachThanhToan) {
        var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem("additionalSearchStringChiTietNhaThuoc");
        let KiemTraLoCalAdditonalExit;
        if (searching != undefined && searching !== null && searching !== "") {
            KiemTraLoCalAdditonalExit = JSON.parse(searching);
            if (KiemTraLoCalAdditonalExit.MaBenhNhan != null) {
                this.timKiem.MaBenhNhan = KiemTraLoCalAdditonalExit.MaBenhNhan;
            }
            if (KiemTraLoCalAdditonalExit.MaTiepNhan != null) {
                this.timKiem.MaTiepNhan = KiemTraLoCalAdditonalExit.MaTiepNhan;
            }
            if (KiemTraLoCalAdditonalExit.HoTen != null) {
                this.timKiem.HoTen = KiemTraLoCalAdditonalExit.HoTen;
            }
            if (KiemTraLoCalAdditonalExit.SoDienThoai != null) {
                this.timKiem.SoDienThoai = KiemTraLoCalAdditonalExit.SoDienThoai;
            }
            if (KiemTraLoCalAdditonalExit.typeDanhSachThanhToan != null) {
                this.typeDanhSachThanhToan = KiemTraLoCalAdditonalExit.typeDanhSachThanhToan;
            }
            if (KiemTraLoCalAdditonalExit.DateStart != null) {
                this.timKiem.RangeDate.startDate = new Date(KiemTraLoCalAdditonalExit.DateStart);
            }
            else {
                this.timKiem.RangeDate.startDate = null;
            }
            if (KiemTraLoCalAdditonalExit.DateEnd != null) {
                this.timKiem.RangeDate.endDate = new Date(KiemTraLoCalAdditonalExit.DateEnd);
            }
            else {
                this.timKiem.RangeDate.endDate = null;
            }
        }
        if (searching == null || searching == undefined || searching == "") {
            this.timKiem.MaBenhNhan = null;
            this.timKiem.MaTiepNhan = null;
            this.timKiem.HoTen = null;
            this.timKiem.SoDienThoai = null;
            this.typeDanhSachThanhToan = this.timKiem.KiemTraThanhToan;
        }
    }
    ngOnChanges(event) {
        if (event.dataQuayThuocSearch != null || event.dataQuayThuocSearch != undefined) {
            if (event.dataQuayThuocSearch.currentValue != null || event.dataQuayThuocSearch.currentValue != undefined) {
                this.dataQuayThuocSearch = event.dataQuayThuocSearch.currentValue;
                if (this.dataQuayThuocSearch.Data.length > 0) {
                    if (this.dataQuayThuocSearch.Data.length == 1) {
                        if (this.hoquerySearch == true) {
                            this.XemChiTiet(this.dataQuayThuocSearch.Data);
                        }
                    }
                }
                else {
                    if (this.hoquerySearch == true) {
                        this.searchAll();
                    }
                }
            }
        }
    }
    XemChiTiet(data) {
        if (data != null) {
            if (data != null && data.length > 0) {
                if (data.length == 1) {
                    //KHông có toa thuốc đang chờ thanh toán hoặc chờ xuất thuốc
                    if (this.dataQuayThuocSearch.Data[0].Id > 0) {
                        if (this.timKiem.KiemTraThanhToan == undefined) {
                            this.timKiem.KiemTraThanhToan = 3;
                        }
                        this.router.navigate(['nha-thuoc/mua-thuoc/' + data[0].Id + '/' + data[0].MaBN + '/' + data[0].TrangThai + '/' + this.timKiem.KiemTraThanhToan]);
                    }
                }
            }
        }
    }
    searchAll() {
        let maBenhNhanQueryString = null;
        let maTiepNhanQueryString = null;
        let hoTenNhanQueryString = null;
        let sdtQueryString = null;
        let KtraQueryString = null;
        let KtraQueryRangeStartString = null;
        let KtraQueryRangeEndString = null;
        if (this.timKiem.MaBenhNhan != null) {
            maBenhNhanQueryString = "\"" + this.timKiem.MaBenhNhan + "\"";
            this.queRyInFoSearchNhaThuoc.MaBenhNhan = this.timKiem.MaBenhNhan;
        }
        if (this.timKiem.MaTiepNhan != null) {
            maTiepNhanQueryString = "\"" + this.timKiem.MaTiepNhan + "\"";
            this.queRyInFoSearchNhaThuoc.MaTiepNhan = this.timKiem.MaTiepNhan;
        }
        if (this.timKiem.HoTen != null) {
            hoTenNhanQueryString = "\"" + this.timKiem.HoTen + "\"";
            this.queRyInFoSearchNhaThuoc.HoTen = this.timKiem.HoTen;
        }
        if (this.timKiem.SoDienThoai != null) {
            sdtQueryString = "\"" + this.timKiem.SoDienThoai + "\"";
            this.queRyInFoSearchNhaThuoc.SoDienThoai = this.timKiem.SoDienThoai;
        }
        if (this.timKiem.KiemTraThanhToan != null) {
            KtraQueryString = "\"" + this.timKiem.KiemTraThanhToan + "\"";
            this.queRyInFoSearchNhaThuoc.KiemTraThanhToan = "\"" + this.timKiem.KiemTraThanhToan + "\"";
        }
        if (this.timKiem.RangeDate.endDate != null) {
            KtraQueryRangeEndString = "\"" + src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiem.RangeDate.endDate, "mm/dd/yyyy") + "\"";
        }
        if (this.timKiem.RangeDate.startDate != null) {
            KtraQueryRangeStartString = "\"" + src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiem.RangeDate.startDate, "mm/dd/yyyy") + "\"";
        }
        //
        if (this.timKiem.MaBenhNhan == "") {
            maBenhNhanQueryString = null;
            this.queRyInFoSearchNhaThuoc.MaBenhNhan = "";
        }
        if (this.timKiem.MaTiepNhan == null) {
            maTiepNhanQueryString = null;
            this.queRyInFoSearchNhaThuoc.MaTiepNhan = "";
        }
        if (this.timKiem.HoTen == null) {
            hoTenNhanQueryString = null;
            this.queRyInFoSearchNhaThuoc.HoTen = "";
        }
        if (this.timKiem.SoDienThoai == null) {
            sdtQueryString = null;
            this.queRyInFoSearchNhaThuoc.SoDienThoai = "";
        }
        if (this.timKiem.KiemTraThanhToan == null) {
            KtraQueryString = null;
            this.queRyInFoSearchNhaThuoc.KiemTraThanhToan = "";
        }
        if (this.timKiem.RangeDate.startDate == null) {
            KtraQueryRangeStartString = null;
        }
        if (this.timKiem.RangeDate.endDate == null) {
            KtraQueryRangeEndString = null;
        }
        let dateTimeNow = new Date();
        let queryString = "{\"MaBenhNhan\":" + maBenhNhanQueryString + ",\"MaTiepNhan\":" + maTiepNhanQueryString
            + ",\"HoTen\":" + hoTenNhanQueryString + ",\"SoDienThoai\":" + sdtQueryString + ",\"KiemTraThanhToan\":" + KtraQueryString + ",\"DateStart\":" + KtraQueryRangeStartString + ",\"DateEnd\":" + KtraQueryRangeEndString + "}";
        this.apiService.post("QuayThuoc/TimKiemBenhNhan?search=" + queryString).subscribe(resultData => {
            // dialogRef.close();
            if (resultData != null && resultData.length > 0) {
                if (resultData.length == 1) {
                    //KHông có toa thuốc đang chờ thanh toán hoặc chờ xuất thuốc
                    if (resultData[0].Id > 0) {
                        if (this.timKiem.KiemTraThanhToan == undefined) {
                            this.timKiem.KiemTraThanhToan = 3;
                        }
                        this.router.navigate(['nha-thuoc/mua-thuoc/' + resultData[0].Id + '/' + resultData[0].MaBN + '/' + resultData[0].TrangThai + '/' + this.timKiem.KiemTraThanhToan]);
                    }
                    else if (resultData[0].DonThuocThanhToanExits == true) {
                        if (this.timKiem.KiemTraThanhToan == undefined) {
                            this.timKiem.KiemTraThanhToan = 3;
                        }
                        this.router.navigate(['nha-thuoc/mua-toa-cu/' + resultData[0].MaBN + '/' + this.timKiem.KiemTraThanhToan]);
                    }
                }
                else {
                    if (resultData.length == 1) {
                        if (resultData[0].Id > 0) {
                            this.router.navigate(['nha-thuoc/mua-thuoc/' + resultData[0].Id + '/' + resultData[0].MaBN + '/' + resultData[0].TrangThai + '/' + this.timKiem.KiemTraThanhToan]);
                        }
                        else {
                            if (resultData[0].DonThuocThanhToanExits == true) {
                                this.router.navigate(['nha-thuoc/mua-toa-cu/' + resultData[0].MaBN + '/' + this.timKiem.KiemTraThanhToan]);
                            }
                            else {
                                let dialogRef = this.dialog.open(_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_component__WEBPACK_IMPORTED_MODULE_8__["QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent"], {
                                    disableClose: true,
                                    width: '500px',
                                    data: { Model: resultData[0], KiemTraThanhToan: this.timKiem.KiemTraThanhToan, Title: "XÁC NHẬN" }
                                }).afterClosed().subscribe(result => {
                                });
                            }
                        }
                    }
                    else {
                        let dialogRef = this.dialog.open(_quay_thuoc_tim_benh_nhan_pop_up_quay_thuoc_tim_benh_nhan_pop_up_component__WEBPACK_IMPORTED_MODULE_7__["QuayThuocTimBenhNhanPopUpComponent"], {
                            width: '1500px',
                            data: { Model: resultData, Title: "Tìm kiếm người bệnh" }
                        }).afterClosed().subscribe(result => {
                            if (typeof (result) == 'object') {
                                this.dataSearch.emit(result);
                            }
                        });
                    }
                }
            }
            else if (resultData == null) {
                this.notificationService.showError("Không có người bệnh.");
            }
            else {
                // this.notificationService.showError("Người bệnh này chưa có toa thuốc tại bệnh viện.");
                let dialogRef = this.dialog.open(_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_component__WEBPACK_IMPORTED_MODULE_8__["QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent"], {
                    disableClose: true,
                    width: '500px',
                    data: { Model: null, KiemTraThanhToan: this.timKiem.KiemTraThanhToan, TenBenhNhanSearch: this.timKiem.HoTen, SoDienThoaiSearch: this.timKiem.SoDienThoai, Title: "XÁC NHẬN" } // null là người bệnh không tồn tại
                }).afterClosed().subscribe(result => {
                });
            }
        }, (err) => {
        });
    }
    keyEvent(event) {
        if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
            event.preventDefault();
            this.QuetMaQRCodeClick();
            this.isScanF1 = true;
        }
        else if (event.keyCode == 81 && this.isScanF1 == true) {
            event.preventDefault();
        }
    }
    QuetMaQRCodeClick() {
        let elementBarcode = document.getElementById('barcodeActive');
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }
    changeQR($event) {
        if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
            this.modelQRCode = $event;
            var dataTimKiem = $event.split("|");
            if (dataTimKiem.length > 1) {
                this.timKiem.MaBenhNhan = dataTimKiem[0];
                this.TimKiem(true);
            }
            else {
                this.timKiem.MaTiepNhan = $event.slice(0, -1); // Mã tiếp nhận @
                this.TimKiem(true);
            }
        }
        else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScanF1 = false;
    }
    onKey3(event) {
        if (event.key == 'Enter') {
        }
    }
    changRange(event) {
    }
    TimKiem(kiemTra) {
        this.hoquerySearch = kiemTra;
        var self = this;
        var dialogRef = self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
        this.router.navigate(['nha-thuoc'], { queryParams: { page: this.timKiem.KiemTraThanhToan, hoQuerysearch: true } });
        let dateTimeNow = new Date();
        this.quayThuocGridVo.MaBenhNhan = this.timKiem.MaBenhNhan;
        this.quayThuocGridVo.MaTiepNhan = this.timKiem.MaTiepNhan;
        this.quayThuocGridVo.HoTen = this.timKiem.HoTen;
        this.quayThuocGridVo.SoDienThoai = this.timKiem.SoDienThoai;
        if (this.kiemTraDanhSachThanhToan == true && this.kiemTraDanhSachDaThanhToan == true) {
            this.timKiem.KiemTraThanhToan = 0;
        }
        if (this.kiemTraDanhSachThanhToan == false && this.kiemTraDanhSachDaThanhToan == false) {
            this.timKiem.KiemTraThanhToan = 3;
        }
        this.quayThuocGridVo.KiemTraThanhToan = this.timKiem.KiemTraThanhToan;
        this.quayThuocGridVo.DieuKienLoadVaoChiTiet = true;
        if (this.timKiem.RangeDate.endDate != null) {
            this.quayThuocGridVo.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDate(this.timKiem.RangeDate.endDate, "mm/dd/yyyy") + " 11:59 PM";
        }
        else {
            this.quayThuocGridVo.DateEnd = null;
        }
        if (this.timKiem.RangeDate.startDate != null) {
            this.quayThuocGridVo.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDate(this.timKiem.RangeDate.startDate, "mm/dd/yyyy") + " 12:00 AM";
        }
        else {
            this.quayThuocGridVo.DateStart = null;
        }
        this.quayThuocGridVo.DateNow = dateTimeNow;
        let queryStringSearchUuTien = JSON.stringify(this.quayThuocGridVo);
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem("additionalSearchStringChiTietNhaThuoc", queryStringSearchUuTien);
        if (this.searchUuTien == true) {
            this.onHaddleUuTienSearch.emit(queryStringSearchUuTien);
            dialogRef.close();
        }
    }
    KhachVangLai() { }
    onKey(event) {
        if (event.key == "Enter") {
            this.TimKiem(true);
        }
    }
    blurChange($event, isSoTheBHYT) {
    }
    shareData1() {
        return this.benhNhanId;
    }
    checkTrangThai(event, type) {
        this.cd.detectChanges();
        if (type == 1 && event == true) {
            this.kiemTraDanhSachThanhToan = event;
            this.router.navigate(['nha-thuoc'], { queryParams: { page: type } });
        }
        else if (type == 1 && event == false) {
            this.kiemTraDanhSachThanhToan = false;
        }
        if (type == 2 && event == true) {
            this.kiemTraDanhSachDaThanhToan = event;
            this.router.navigate(['nha-thuoc'], { queryParams: { page: type } });
        }
        else if (type == 2 && event == false) {
            this.kiemTraDanhSachDaThanhToan = false;
        }
        if (this.kiemTraDanhSachThanhToan == true) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: 1 } });
            this.timKiem.KiemTraThanhToan = 1;
            let data = this.timKiem.KiemTraThanhToan;
        }
        if (this.kiemTraDanhSachDaThanhToan == true) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: 2 } });
            this.timKiem.KiemTraThanhToan = 2;
            let data = this.timKiem.KiemTraThanhToan;
        }
        if (this.kiemTraDanhSachThanhToan == true && this.kiemTraDanhSachDaThanhToan == true) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: 0 } });
            this.timKiem.KiemTraThanhToan = 0;
            let data = this.timKiem.KiemTraThanhToan;
        }
        if (this.kiemTraDanhSachThanhToan == false && this.kiemTraDanhSachDaThanhToan == false) {
            this.router.navigate(['nha-thuoc'], { queryParams: { page: 3 } });
            this.timKiem.KiemTraThanhToan = 3;
            let data = this.timKiem.KiemTraThanhToan;
        }
        this.TimKiem(true);
    }
    searchChangeMaBN(event) {
        //xóa sreach trước đó
        var self = this;
        if (this.timeoutSearchChange != null) {
            clearTimeout(this.timeoutSearchChange);
            this.timeoutSearchChange = null;
        }
        this.timeoutSearchChange = setTimeout(function () {
            if (event !== undefined && event.endsWith("@")) {
                var dataTimKiem = event.split("|");
                if (dataTimKiem.length > 1) {
                    self.timKiem.MaBenhNhan = dataTimKiem[0];
                    self.TimKiem(true);
                }
                else {
                    self.timKiem.MaBenhNhan = null;
                    self.timKiem.MaTiepNhan = event.slice(0, -1);
                    self.TimKiem(true);
                }
            }
        }, 100);
    }
    searchChangeMaTN(event) {
        //xóa sreach trước đó
        var self = this;
        if (this.timeoutSearchChange != null) {
            clearTimeout(this.timeoutSearchChange);
            this.timeoutSearchChange = null;
        }
        this.timeoutSearchChange = setTimeout(function () {
            if (event !== undefined && event.endsWith("@")) {
                var dataTimKiem = event.split("|");
                if (dataTimKiem.length > 1) {
                    self.timKiem.MaTiepNhan = dataTimKiem[0];
                    self.TimKiem(true);
                }
                else {
                    self.timKiem.MaTiepNhan = null;
                    self.timKiem.MaBenhNhan = event.slice(0, -1);
                    self.TimKiem(true);
                }
            }
        }, 100);
    }
    // EXPORT ÊXCEL
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        let dateTimeNow = new Date();
        this.quayThuocGridVo.MaBenhNhan = this.timKiem.MaBenhNhan;
        this.quayThuocGridVo.MaTiepNhan = this.timKiem.MaTiepNhan;
        this.quayThuocGridVo.HoTen = this.timKiem.HoTen;
        this.quayThuocGridVo.SoDienThoai = this.timKiem.SoDienThoai;
        this.quayThuocGridVo.KiemTraThanhToan = this.timKiem.KiemTraThanhToan;
        this.quayThuocGridVo.DieuKienLoadVaoChiTiet = true;
        if (this.timKiem.RangeDate.endDate != null) {
            this.quayThuocGridVo.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiem.RangeDate.endDate, "mm/dd/yyyy");
        }
        else {
            this.quayThuocGridVo.DateEnd = null;
        }
        if (this.timKiem.RangeDate.startDate != null) {
            this.quayThuocGridVo.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiem.RangeDate.startDate, "mm/dd/yyyy");
        }
        else {
            this.quayThuocGridVo.DateStart = null;
        }
        this.quayThuocGridVo.DateNow = dateTimeNow;
        let queryStringSearchUuTien = JSON.stringify(this.quayThuocGridVo);
        self.exportQueryInfoQueryInfo.AdditionalSearchString = queryStringSearchUuTien;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('QuayThuoc/ExportDonThuocTrongNgay', self.exportQueryInfoQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DonThuocTrongNgay' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    blur(event) {
        this.TimKiem(true);
    }
};
QuayThuocTimBenhNhanComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocTimBenhNhanComponent.prototype, "typeDanhSachThanhToan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocTimBenhNhanComponent.prototype, "hoquerySearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuayThuocTimBenhNhanComponent.prototype, "dataQuayThuocSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocTimBenhNhanComponent.prototype, "dataSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocTimBenhNhanComponent.prototype, "onHaddlekiemTraDonThuocThanhToan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocTimBenhNhanComponent.prototype, "onHaddleeXportExel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuayThuocTimBenhNhanComponent.prototype, "onHaddleUuTienSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], QuayThuocTimBenhNhanComponent.prototype, "keyEvent", null);
QuayThuocTimBenhNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-tim-benh-nhan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-tim-benh-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-tim-benh-nhan.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component.scss")).default]
    })
], QuayThuocTimBenhNhanComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MtdG9hLXRodW9jLWN1L3F1YXktdGh1b2MtdG9hLXRodW9jLWN1LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: QuayThuocToaThuocCuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocToaThuocCuComponent", function() { return QuayThuocToaThuocCuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");







let QuayThuocToaThuocCuComponent = class QuayThuocToaThuocCuComponent {
    constructor(route, router, notificationService) {
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.id = this.route.snapshot.params.id;
        this.idSub = 0;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.donThuocId = [];
        this.urlGetDataGridChild = "QuayThuoc/GetDataForGridToaThuocCuAsync?tiepNhanId=" + this.id;
        this.urlGetTotalPageGridChild = "QuayThuoc/GetTotalPageForGridToaThuocCuAsync?tiepNhanId=" + this.id;
        this.urlGetDataGridChild1 = "QuayThuoc/GetDataForGridChildAsync";
        this.urlGetTotalPageGridChild1 = "QuayThuoc/GetTotalPageForGridChildAsync";
    }
    ngOnInit() {
        this.idSub = this.route.snapshot.params.ttcheck;
        this.id = this.route.snapshot.params.id;
        this.timKiemToaThuocCu = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["ToaThuocCuTimKiem"]();
        this.gridColumns = [
            { Field: "DVKham", Title: "DV Khám", Width: 200, Sortable: true },
            { Field: "ChuanDoan", Title: "Chẩn đoán", MinWidth: 120, Sortable: true },
            { Field: "BacSiKham", Title: "BS Khám", Width: 150, Sortable: true },
            { Field: "NgayKham", Title: "Ngày Khám", Width: 200, Sortable: true },
        ];
        this.gridChildColumns = [
            { Field: "TenThuoc", Title: "Tên thuốc", Width: 200, Sortable: true, LinkDetail: false },
            { Field: "HoatChat", Title: "Hoạt Chất", MinWidth: 200, Sortable: true },
            { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: true },
            { Field: "SoLuong", Title: "Số lượng", Width: 100, Sortable: true },
            { Field: "LaDuocPhamBenhVien", Title: "", Width: 200, Template: this.actionChiTietTemplate }
        ];
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.TimKiem();
        }
    }
    ConvertDateTime(datime) {
        var date = new Date(datime);
        var year = date.getFullYear();
        var rawMonth = parseInt(String(date.getMonth())) + 1;
        var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
        var rawDay = parseInt(String(date.getDate()));
        var day = rawDay < 10 ? '0' + rawDay : rawDay;
        // return day + '/' + month + '/' + year;
        return year + '-' + month + '-' + day;
    }
    TimKiem() {
        let dvKhamQueryString = null;
        let ChuanDoanQueryString = null;
        let BSQueryString = null;
        let ngayKhamStartQueryString = null;
        let ngayKhamEndQueryString = null;
        if (this.timKiemToaThuocCu.DVKhamHienThi != null) {
            dvKhamQueryString = "\"" + this.timKiemToaThuocCu.DVKhamHienThi + "\"";
        }
        if (this.timKiemToaThuocCu.ChuanDoan != null) {
            ChuanDoanQueryString = "\"" + this.timKiemToaThuocCu.ChuanDoan + "\"";
        }
        if (this.timKiemToaThuocCu.BSKham != null) {
            BSQueryString = "\"" + this.timKiemToaThuocCu.BSKham + "\"";
        }
        if (this.timKiemToaThuocCu.RangeDate.startDate != null) {
            ngayKhamStartQueryString = "\"" + src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.timKiemToaThuocCu.RangeDate.startDate, "mm/dd/yyyy") + "\"";
        }
        if (this.timKiemToaThuocCu.RangeDate.endDate != null) {
            ngayKhamEndQueryString = "\"" + src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.timKiemToaThuocCu.RangeDate.endDate, "mm/dd/yyyy") + "\"";
        }
        let queryString = "{\"DVKham\":" + dvKhamQueryString + ",\"ChuanDoan\":" + ChuanDoanQueryString
            + ",\"BacSi\":" + BSQueryString + ",\"DateStart\":" + ngayKhamStartQueryString + ",\"DateEnd\":" + ngayKhamEndQueryString + "}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }
    extCheckboxSelection(event) {
        this.donThuocId = event;
    }
    ChonThuoc() {
        //this.router.navigate(['quay-thuoc/mua-thuoc/'+ this.id +'/' + 0 + '/1/'],this.donThuocId);
        if (this.donThuocId.length == 0) {
            this.notificationService.showError("Bạn chưa chọn toa thuốc.");
        }
        else {
            this.router.navigate(['/nha-thuoc/khach-vang-lai'], { queryParams: { ToaThuoc: this.donThuocId, maBN: this.id, ttCheck: this.idSub } }); // idSub là trạng thái check
        }
    }
    Huy() {
        this.router.navigate(['nha-thuoc']);
    }
    onKey3(event) {
        if (event.key == 'Enter') {
            // this.TimKiem();
        }
    }
    changRange(event) {
        // this.TimKiem();
    }
};
QuayThuocToaThuocCuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], { static: true })
], QuayThuocToaThuocCuComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('detailTemplateCT', { static: true })
], QuayThuocToaThuocCuComponent.prototype, "actionChiTietTemplate", void 0);
QuayThuocToaThuocCuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-toa-thuoc-cu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-toa-thuoc-cu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-toa-thuoc-cu.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.scss")).default]
    })
], QuayThuocToaThuocCuComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MteGFjLW5oYW4taW4tcG9wLXVwL3F1YXktdGh1b2MteGFjLW5oYW4taW4tcG9wLXVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: QuayThuocXacNhanInPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocXacNhanInPopUpComponent", function() { return QuayThuocXacNhanInPopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");




let QuayThuocXacNhanInPopUpComponent = class QuayThuocXacNhanInPopUpComponent {
    constructor(dialogRef, dataItem) {
        this.dialogRef = dialogRef;
        this.dataItem = dataItem;
        this.Title = null;
        this.thongTin = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_3__["ConfirmPrint"]();
        this.thongTin.TaiKhoanBenhNhanThuId = dataItem.Model.TaiKhoanBenhNhanThuId;
        this.Title = dataItem.Title;
    }
    ngOnInit() {
    }
    close(answer) {
        this.thongTin.Response = answer;
        this.dialogRef.close(this.thongTin);
    }
};
QuayThuocXacNhanInPopUpComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
QuayThuocXacNhanInPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-xac-nhan-in-pop-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-xac-nhan-in-pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-xac-nhan-in-pop-up.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], QuayThuocXacNhanInPopUpComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.scss ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MteGFjLW5oYW4tbXVhLXRodW9jLWtoYWNoLXZhbmctbGFpLXBvcC11cC9xdWF5LXRodW9jLXhhYy1uaGFuLW11YS10aHVvYy1raGFjaC12YW5nLWxhaS1wb3AtdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent", function() { return QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent = class QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent {
    constructor(dialogRef, dataItem, router) {
        this.dialogRef = dialogRef;
        this.dataItem = dataItem;
        this.router = router;
        this.Title = null;
        this.Title = dataItem.Title;
        this.typeDanhSachThanhToan = dataItem.KiemTraThanhToan;
    }
    ngOnInit() {
    }
    close(answer) {
        if (answer == 1) {
            this.dialogRef.close();
        }
        else {
            if (this.dataItem.Model != null) {
                this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: this.typeDanhSachThanhToan, maBN: this.dataItem.Model.MaBN } });
                this.dialogRef.close();
            }
            else {
                if (this.dataItem.TenBenhNhanSearch != null && this.dataItem.SoDienThoaiSearch != null) {
                    this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: this.typeDanhSachThanhToan, TenBenhNhan: this.dataItem.TenBenhNhanSearch, SDT: this.dataItem.SoDienThoaiSearch } });
                }
                else if (this.dataItem.TenBenhNhanSearch != null && this.dataItem.SoDienThoaiSearch == null) {
                    this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: this.typeDanhSachThanhToan, TenBenhNhan: this.dataItem.TenBenhNhanSearch } });
                }
                else {
                    this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: this.typeDanhSachThanhToan, SDT: this.dataItem.SoDienThoaiSearch } });
                }
                this.dialogRef.close();
            }
        }
    }
};
QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3F1YXktdGh1b2MteGFjLW5oYW4tcG9wLXVwL3F1YXktdGh1b2MteGFjLW5oYW4tcG9wLXVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: QuayThuocXacNhanPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocXacNhanPopUpComponent", function() { return QuayThuocXacNhanPopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let QuayThuocXacNhanPopUpComponent = class QuayThuocXacNhanPopUpComponent {
    constructor(route, dialogRef, dataItem) {
        this.route = route;
        this.dialogRef = dialogRef;
        this.dataItem = dataItem;
        this.Title = null;
        this.soTien = 0;
        this.tenBenhNhan = null;
        this.dataSourcedanhsachThuoc = {
            data: [],
            total: 0
        };
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.dataSourcedanhsachThuoc.data = dataItem.Model.DanhSachDonThuocs;
        this.soTien = dataItem.Model.DanhSachDonThuocs.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0);
        this.tenBenhNhan = dataItem.Model.HoTenBenhNhan;
        this.Title = dataItem.Title;
    }
    ngOnInit() {
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
};
QuayThuocXacNhanPopUpComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
QuayThuocXacNhanPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quay-thuoc-xac-nhan-pop-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quay-thuoc-xac-nhan-pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quay-thuoc-xac-nhan-pop-up.component.scss */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], QuayThuocXacNhanPopUpComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc.module.ts ***!
  \**************************************************************/
/*! exports provided: QuayThuocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocModule", function() { return QuayThuocModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _quay_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quay-thuoc-routing.module */ "./src/app/modules/main/quay-thuoc/quay-thuoc-routing.module.ts");
/* harmony import */ var _quay_thuoc_tim_benh_nhan_quay_thuoc_tim_benh_nhan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _quay_thuoc_tim_benh_nhan_pop_up_quay_thuoc_tim_benh_nhan_pop_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component.ts");
/* harmony import */ var _quay_thuoc_cho_thanh_toan_quay_thuoc_cho_thanh_toan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component.ts");
/* harmony import */ var _quay_thuoc_mua_thuoc_quay_thuoc_mua_thuoc_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component.ts");
/* harmony import */ var _quay_thuoc_list_quay_thuoc_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quay-thuoc-list/quay-thuoc-list.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component.ts");
/* harmony import */ var _quay_thuoc_thong_tin_hanh_chinh_quay_thuoc_thong_tin_hanh_chinh_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component.ts");
/* harmony import */ var _quay_thuoc_toa_thuoc_cu_quay_thuoc_toa_thuoc_cu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component.ts");
/* harmony import */ var _quay_thuoc_thong_tin_bao_hiem_tu_nhan_quay_thuoc_thong_tin_bao_hiem_tu_nhan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.ts");
/* harmony import */ var _quay_thuoc_hinh_thuc_thanh_toan_quay_thuoc_hinh_thuc_thanh_toan_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component.ts");
/* harmony import */ var _quay_thuoc_xac_nhan_pop_up_quay_thuoc_xac_nhan_pop_up_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component.ts");
/* harmony import */ var _quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component.ts");
/* harmony import */ var _quay_thuoc_cho_xuat_thuoc_quay_thuoc_cho_xuat_thuoc_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component.ts");
/* harmony import */ var _in_bang_thu_tien_pop_up_in_bang_thu_tien_pop_up_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component */ "./src/app/modules/main/quay-thuoc/in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component.ts");
/* harmony import */ var _quay_thuoc_khach_vang_lai_quay_thuoc_khach_vang_lai_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component.ts");
/* harmony import */ var _quay_thuoc_khach_vang_lai_cho_thanh_toan_quay_thuoc_khach_vang_lai_cho_thanh_toan_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component.ts");
/* harmony import */ var _quay_thuoc_khach_vang_lai_cho_xuat_thuoc_quay_thuoc_khach_vang_lai_cho_xuat_thuoc_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component.ts");
/* harmony import */ var _quay_thuoc_khach_vang_lai_thong_tin_hanh_chinh_quay_thuoc_khach_vang_lai_thong_tin_hanh_chinh_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.ts");
/* harmony import */ var _quay_thuoc_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./quay-thuoc.service */ "./src/app/modules/main/quay-thuoc/quay-thuoc.service.ts");
/* harmony import */ var _quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component */ "./src/app/modules/main/quay-thuoc/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.ts");
/* harmony import */ var _in_don_thuoc_pop_up_in_don_thuoc_pop_up_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./in-don-thuoc-pop-up/in-don-thuoc-pop-up.component */ "./src/app/modules/main/quay-thuoc/in-don-thuoc-pop-up/in-don-thuoc-pop-up.component.ts");
/* harmony import */ var _ap_dung_miem_giam_them_popup_ap_dung_miem_giam_them_popup_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component */ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.ts");
/* harmony import */ var _ap_dung_miem_giam_cho_tung_loai_thuoc_popup_ap_dung_miem_giam_cho_tung_loai_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component */ "./src/app/modules/main/quay-thuoc/ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.ts");
/* harmony import */ var _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts");
/* harmony import */ var _thong_tin_phieu_da_thu_thong_tin_phieu_da_thu_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component.ts");
/* harmony import */ var _xac_nhan_phieu_huy_thu_xac_nhan_phieu_huy_thu_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component */ "./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.ts");
/* harmony import */ var _xac_nhan_phieu_huy_thu_ban_thuoc_xac_nhan_phieu_huy_thu_ban_thuoc_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component */ "./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component.ts");










































let QuayThuocModule = class QuayThuocModule {
};
QuayThuocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _quay_thuoc_tim_benh_nhan_quay_thuoc_tim_benh_nhan_component__WEBPACK_IMPORTED_MODULE_4__["QuayThuocTimBenhNhanComponent"],
            _quay_thuoc_tim_benh_nhan_pop_up_quay_thuoc_tim_benh_nhan_pop_up_component__WEBPACK_IMPORTED_MODULE_16__["QuayThuocTimBenhNhanPopUpComponent"],
            _quay_thuoc_cho_thanh_toan_quay_thuoc_cho_thanh_toan_component__WEBPACK_IMPORTED_MODULE_17__["QuayThuocChoThanhToanComponent"], _quay_thuoc_mua_thuoc_quay_thuoc_mua_thuoc_component__WEBPACK_IMPORTED_MODULE_18__["QuayThuocMuaThuocComponent"],
            _quay_thuoc_list_quay_thuoc_list_component__WEBPACK_IMPORTED_MODULE_19__["QuayThuocListComponent"],
            _quay_thuoc_thong_tin_hanh_chinh_quay_thuoc_thong_tin_hanh_chinh_component__WEBPACK_IMPORTED_MODULE_20__["QuayThuocThongTinHanhChinhComponent"],
            _quay_thuoc_toa_thuoc_cu_quay_thuoc_toa_thuoc_cu_component__WEBPACK_IMPORTED_MODULE_21__["QuayThuocToaThuocCuComponent"],
            _quay_thuoc_thong_tin_bao_hiem_tu_nhan_quay_thuoc_thong_tin_bao_hiem_tu_nhan_component__WEBPACK_IMPORTED_MODULE_22__["QuayThuocThongTinBaoHiemTuNhanComponent"],
            _quay_thuoc_hinh_thuc_thanh_toan_quay_thuoc_hinh_thuc_thanh_toan_component__WEBPACK_IMPORTED_MODULE_23__["QuayThuocHinhThucThanhToanComponent"],
            _quay_thuoc_xac_nhan_pop_up_quay_thuoc_xac_nhan_pop_up_component__WEBPACK_IMPORTED_MODULE_24__["QuayThuocXacNhanPopUpComponent"],
            _quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_25__["QuayThuocXacNhanInPopUpComponent"],
            _quay_thuoc_cho_xuat_thuoc_quay_thuoc_cho_xuat_thuoc_component__WEBPACK_IMPORTED_MODULE_26__["QuayThuocChoXuatThuocComponent"],
            _in_bang_thu_tien_pop_up_in_bang_thu_tien_pop_up_component__WEBPACK_IMPORTED_MODULE_27__["InBangThuTienPopUpComponent"],
            _quay_thuoc_khach_vang_lai_quay_thuoc_khach_vang_lai_component__WEBPACK_IMPORTED_MODULE_28__["QuayThuocKhachVangLaiComponent"],
            _quay_thuoc_khach_vang_lai_cho_thanh_toan_quay_thuoc_khach_vang_lai_cho_thanh_toan_component__WEBPACK_IMPORTED_MODULE_29__["QuayThuocKhachVangLaiChoThanhToanComponent"],
            _quay_thuoc_khach_vang_lai_cho_xuat_thuoc_quay_thuoc_khach_vang_lai_cho_xuat_thuoc_component__WEBPACK_IMPORTED_MODULE_30__["QuayThuocKhachVangLaiChoXuatThuocComponent"],
            _quay_thuoc_khach_vang_lai_thong_tin_hanh_chinh_quay_thuoc_khach_vang_lai_thong_tin_hanh_chinh_component__WEBPACK_IMPORTED_MODULE_31__["QuayThuocKhachVangLaiThongTinHanhChinhComponent"],
            _quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_component__WEBPACK_IMPORTED_MODULE_33__["QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent"],
            _in_don_thuoc_pop_up_in_don_thuoc_pop_up_component__WEBPACK_IMPORTED_MODULE_34__["InDonThuocPopUpComponent"],
            _ap_dung_miem_giam_them_popup_ap_dung_miem_giam_them_popup_component__WEBPACK_IMPORTED_MODULE_35__["ApDungMiemGiamThemPopupComponent"],
            _ap_dung_miem_giam_cho_tung_loai_thuoc_popup_ap_dung_miem_giam_cho_tung_loai_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_36__["ApDungMiemGiamChoTungLoaiThuocPopupComponent"],
            _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_37__["ThongTinPhieuPdfPopupComponent"],
            _thong_tin_phieu_da_thu_thong_tin_phieu_da_thu_component__WEBPACK_IMPORTED_MODULE_38__["ThongTinPhieuThuThuoc"],
            _xac_nhan_phieu_huy_thu_xac_nhan_phieu_huy_thu_component__WEBPACK_IMPORTED_MODULE_39__["XacNhanHuyThuComponent"],
            _xac_nhan_phieu_huy_thu_ban_thuoc_xac_nhan_phieu_huy_thu_ban_thuoc_component__WEBPACK_IMPORTED_MODULE_40__["XacNhanHuyThuBanThuocComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _quay_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuayThuocRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        ], entryComponents: [
            _ap_dung_miem_giam_cho_tung_loai_thuoc_popup_ap_dung_miem_giam_cho_tung_loai_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_36__["ApDungMiemGiamChoTungLoaiThuocPopupComponent"],
            _ap_dung_miem_giam_them_popup_ap_dung_miem_giam_them_popup_component__WEBPACK_IMPORTED_MODULE_35__["ApDungMiemGiamThemPopupComponent"],
            _in_don_thuoc_pop_up_in_don_thuoc_pop_up_component__WEBPACK_IMPORTED_MODULE_34__["InDonThuocPopUpComponent"],
            _quay_thuoc_tim_benh_nhan_pop_up_quay_thuoc_tim_benh_nhan_pop_up_component__WEBPACK_IMPORTED_MODULE_16__["QuayThuocTimBenhNhanPopUpComponent"],
            _quay_thuoc_xac_nhan_pop_up_quay_thuoc_xac_nhan_pop_up_component__WEBPACK_IMPORTED_MODULE_24__["QuayThuocXacNhanPopUpComponent"],
            _quay_thuoc_xac_nhan_in_pop_up_quay_thuoc_xac_nhan_in_pop_up_component__WEBPACK_IMPORTED_MODULE_25__["QuayThuocXacNhanInPopUpComponent"],
            _in_bang_thu_tien_pop_up_in_bang_thu_tien_pop_up_component__WEBPACK_IMPORTED_MODULE_27__["InBangThuTienPopUpComponent"],
            _quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_quay_thuoc_xac_nhan_mua_thuoc_khach_vang_lai_pop_up_component__WEBPACK_IMPORTED_MODULE_33__["QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent"],
            _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_37__["ThongTinPhieuPdfPopupComponent"],
            _xac_nhan_phieu_huy_thu_xac_nhan_phieu_huy_thu_component__WEBPACK_IMPORTED_MODULE_39__["XacNhanHuyThuComponent"],
            _xac_nhan_phieu_huy_thu_ban_thuoc_xac_nhan_phieu_huy_thu_ban_thuoc_component__WEBPACK_IMPORTED_MODULE_40__["XacNhanHuyThuBanThuocComponent"]
        ],
        providers: [
            _quay_thuoc_service__WEBPACK_IMPORTED_MODULE_32__["QuayThuocService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"], useClass: _quay_thuoc_service__WEBPACK_IMPORTED_MODULE_32__["QuayThuocService"] },
        ]
    })
], QuayThuocModule);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc.service.ts ***!
  \***************************************************************/
/*! exports provided: QuayThuocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocService", function() { return QuayThuocService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let QuayThuocService = class QuayThuocService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
    }
};
QuayThuocService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
QuayThuocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuayThuocService);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.size-icon {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  line-height: 20px;\n  border-radius: 10px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n}\n\n.size-icon-duoc-bhyt {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  line-height: 20px;\n  border-radius: 7px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n  right: -4px;\n  top: 6px;\n  margin: 0;\n}\n\n.float_right {\n  float: right;\n}\n\n.color-green {\n  color: green;\n}\n\n.color-red {\n  color: red;\n}\n\n.reverse-ellipsis.r {\n  text-align: right;\n  direction: inherit;\n}\n\n.yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvdGhvbmctdGluLXBoaWV1LWRhLXRodS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXHRob25nLXRpbi1waGlldS1kYS10aHVcXHRob25nLXRpbi1waGlldS1kYS10aHUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3Rob25nLXRpbi1waGlldS1kYS10aHUvdGhvbmctdGluLXBoaWV1LWRhLXRodS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvdGhvbmctdGluLXBoaWV1LWRhLXRodS90aG9uZy10aW4tcGhpZXUtZGEtdGh1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpemUtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaXplLWljb24tZHVvYy1iaHl0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHJpZ2h0OiAtNHB4O1xuICB0b3A6IDZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZmxvYXRfcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5yZXZlcnNlLWVsbGlwc2lzLnIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlyZWN0aW9uOiBpbmhlcml0O1xufVxuXG4ueWVsbG93VGV4dCB7XG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uYmxhY2tUZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaXplLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2l6ZS1pY29uLWR1b2MtYmh5dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICByaWdodDogLTRweDtcbiAgdG9wOiA2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZsb2F0X3JpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucmV2ZXJzZS1lbGxpcHNpcy5yIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpcmVjdGlvbjogaW5oZXJpdDtcbn1cblxuLnllbGxvd1RleHQge1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ThongTinPhieuThuThuoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinPhieuThuThuoc", function() { return ThongTinPhieuThuThuoc; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _xac_nhan_phieu_huy_thu_xac_nhan_phieu_huy_thu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component */ "./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.ts");
/* harmony import */ var _thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts");
/* harmony import */ var _lich_su_quay_thuoc_lich_su_quay_thuoc_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lich-su-quay-thuoc/lich-su-quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/lich-su-quay-thuoc/lich-su-quay-thuoc.model.ts");














let ThongTinPhieuThuThuoc = class ThongTinPhieuThuThuoc {
    constructor(route, notificationService, apiService, authService, router, dialog) {
        this.route = route;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.src = '';
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.kiemtraPhieuInManhinh = false;
        this.confrim = null;
        this.thongTinSoPhieuDaThu = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__["ThongTinSoPhieuDaThu"]();
        this.trangThaiThuTienBenhNhan = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__["TrangThaiThuTienBenhNhan"]();
    }
    ngOnInit() {
        this.getThongSoPhieu();
    }
    total(field) {
        switch (field) {
            case 'ThanhTien':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'BHYTThanhToan':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.BHYTThanhToan, 0);
            case 'TongCongNo':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.TongCongNo, 0);
            case 'SoTienMG':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'DaThanhToan':
                return this.thongTinSoPhieuDaThu.DanhSachThuPhis
                    .reduce((sum, item) => sum + item.DaThanhToan, 0);
        }
    }
    getThongSoPhieu() {
        this.apiService.post("QuayThuoc/GetSoPhieuQuayThuoc/" + this.yeuCauTiepNhanId).subscribe(resultData => {
            if (resultData !== undefined && resultData !== null) {
                this.dataSoPhieus = resultData;
                if (resultData.length > 0) {
                    this.xemThongTinPhieu(resultData[0].KeyId);
                }
            }
        });
    }
    xemThongTinPhieu(keyId) {
        let loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: {},
        });
        this.apiService.get("QuayThuoc/GetThongTinPhieuThu/" + keyId).subscribe(resultData => {
            if (resultData !== undefined && resultData !== null) {
                this.thongTinSoPhieuDaThu = resultData;
                this.thongTinSoPhieuDaThu.SoPhieuId = keyId;
                this.thongTinSoPhieuDaThu.TenSoPhieu = resultData.SoPhieu;
                loading.close();
            }
        });
    }
    selectionChangeSoPhieu(event) {
        if (event != undefined && event != null) {
            this.thongTinSoPhieuDaThu.SoPhieuId = event.KeyId;
            this.thongTinSoPhieuDaThu.LoaiPhieu = event.LoaiPhieu;
            this.thongTinSoPhieuDaThu.TinhTrang = event.TinhTrang;
            this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan = event.LoaiPhieuThuChiThuNgan;
            this.xemThongTinPhieu(event.KeyId);
        }
        else {
            this.thongTinSoPhieuDaThu = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__["ThongTinSoPhieuDaThu"]();
        }
    }
    huyPhieuThu(thongTinSoPhieuDaThu, thuHoiPhieu) {
        let thongTinHuyPhieu = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__["ThongTinHuyPhieu"]();
        thongTinHuyPhieu.SoPhieu = thongTinSoPhieuDaThu.Id;
        thongTinHuyPhieu.TenPhieuThuChi = thongTinSoPhieuDaThu.LoaiPhieu;
        thongTinHuyPhieu.TenSoPhieu = this.thongTinSoPhieuDaThu.TenSoPhieu;
        thongTinHuyPhieu.LoaiPhieuThuChiThuNgan = this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan;
        let loaiType = true;
        this.dialog
            .open(_xac_nhan_phieu_huy_thu_xac_nhan_phieu_huy_thu_component__WEBPACK_IMPORTED_MODULE_11__["XacNhanHuyThuComponent"], { disableClose: true, width: "800px", data: { thongTinHuyPhieu, thuHoiPhieu, loaiType } })
            .afterClosed()
            .subscribe(resultData => {
            if (resultData != undefined && resultData !== null && resultData !== "") {
                this.getThongSoPhieu();
                this.notificationService.showSuccess("Hủy phiếu thu thành công.");
            }
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    phieuIn() {
        const self = this;
        const hosting = window.location.protocol + '//' + window.location.host;
        let xacNhanInData = new _lich_su_quay_thuoc_lich_su_quay_thuoc_model__WEBPACK_IMPORTED_MODULE_13__["XacNhanInViewModel"]();
        xacNhanInData = {
            TaiKhoanBenhNhanThuId: this.thongTinSoPhieuDaThu.SoPhieuId,
            Hosting: hosting,
            InBangKe: false,
            InPhieuThu: true,
        };
        self.apiService.postExportPdf('QuayThuoc/XacNhanIn', xacNhanInData).subscribe(resultData => {
            // var arrHtml = [{
            //     Html: resultData,
            //     TenFile: "InPhieuThu",
            //     PageSize: "A4",
            //     PageOrientation: "Landscape",
            // }];
            self.dialog.open(_thong_tin_phieu_pdf_popup_thong_tin_phieu_pdf_popup_component__WEBPACK_IMPORTED_MODULE_12__["ThongTinPhieuPdfPopupComponent"], {
                disableClose: true,
                width: '1000px',
                data: { Model: resultData }
            }).afterClosed().subscribe(() => { });
        });
    }
};
ThongTinPhieuThuThuoc.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThongTinPhieuThuThuoc.prototype, "yeuCauTiepNhanId", void 0);
ThongTinPhieuThuThuoc = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thong-tin-phieu-da-thu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-phieu-da-thu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-phieu-da-thu.component.scss */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component.scss")).default]
    })
], ThongTinPhieuThuThuoc);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n}\n\n.container-iframe iframe {\n  margin-bottom: 10px;\n  -webkit-backface-visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3F1YXktdGh1b2MvdGhvbmctdGluLXBoaWV1LXBkZi1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHF1YXktdGh1b2NcXHRob25nLXRpbi1waGlldS1wZGYtcG9wdXBcXHRob25nLXRpbi1waGlldS1wZGYtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3Rob25nLXRpbi1waGlldS1wZGYtcG9wdXAvdGhvbmctdGluLXBoaWV1LXBkZi1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsbUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3Rob25nLXRpbi1waGlldS1wZGYtcG9wdXAvdGhvbmctdGluLXBoaWV1LXBkZi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ThongTinPhieuPdfPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinPhieuPdfPopupComponent", function() { return ThongTinPhieuPdfPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");








let ThongTinPhieuPdfPopupComponent = class ThongTinPhieuPdfPopupComponent {
    constructor(data, apiService, dialog, notificationService) {
        this.data = data;
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.arrFilePdf = [];
        this.arrFileUrl = [];
    }
    ngOnInit() {
        this.getALlFilePDFFromHtml(this.data.Model);
    }
    getALlFilePDFFromHtml(arrHtml) {
        this.showPopupLoadingData();
        let newBlob = new Blob([arrHtml], { type: "application/pdf" });
        let datalocalURL = window.URL.createObjectURL(newBlob);
        this.arrFileUrl.push(datalocalURL);
        this.arrFilePdf.push(arrHtml);
        this.closePopupLoadingData();
    }
    downloadAllFile() {
        const dateTimeNow = new Date();
        this.arrFilePdf.forEach((file) => {
            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(file, "application/pdf", "PhieuThuNgan" + dateTimeNow.getFullYear() + ".pdf");
        });
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined || this.popupLoadingData == null || this.popupLoadingData.openDialogs == undefined || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
};
ThongTinPhieuPdfPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
ThongTinPhieuPdfPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "thong-tin-phieu-pdf-popup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-phieu-pdf-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-phieu-pdf-popup.component.scss */ "./src/app/modules/main/quay-thuoc/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ThongTinPhieuPdfPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3hhYy1uaGFuLXBoaWV1LWh1eS10aHUtYmFuLXRodW9jL3hhYy1uaGFuLXBoaWV1LWh1eS10aHUtYmFuLXRodW9jLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: XacNhanHuyThuBanThuocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanHuyThuBanThuocComponent", function() { return XacNhanHuyThuBanThuocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");










let XacNhanHuyThuBanThuocComponent = class XacNhanHuyThuBanThuocComponent {
    constructor(data, dialogRef, authService, dialog, notificationService, apiService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].QuayThuoc;
        this.huyXuatThuocTrongNgay = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_9__["HuyXuatThuocTrongNgay"]();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    ngOnInit() {
        this.huyXuatThuocTrongNgay = this.data.huyXuatThuocTrongNgay;
    }
    modelChangeThuHoiPhieu(e) {
        if (e) {
            let currentUser = this.authService.getAccessUser();
            this.apiService.get("NhanVien/GetNhanVienProflie/" + currentUser.Id).subscribe((resultData) => {
                this.huyXuatThuocTrongNgay.NguoiThuHoiId = currentUser.Id;
                this.huyXuatThuocTrongNgay.TenNguoiThuHoi = resultData.HoTen;
                this.huyXuatThuocTrongNgay.ThoiGianThuHoi = new Date();
            });
        }
        else {
            this.huyXuatThuocTrongNgay.NguoiThuHoiId = null;
            this.huyXuatThuocTrongNgay.TenNguoiThuHoi = null;
            this.huyXuatThuocTrongNgay.ThoiGianThuHoi = null;
        }
    }
    xacNhanThongTinHuy() {
        this.showLoadingPopup();
        this.apiService.post(`QuayThuoc/HuyBanThuocTrongNgay`, this.huyXuatThuocTrongNgay).subscribe((resultData) => {
            this.closeAllDialogs();
            this.dialogRef.close("Yes");
        }, (err) => {
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ?
                this.notificationService.showError(err.Message)
                : (this.validationErrors = err.ValidationErrors);
            this.closeAllDialogs();
        });
    }
    close() {
        this.dialog.closeAll();
    }
    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }
    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
};
XacNhanHuyThuBanThuocComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
XacNhanHuyThuBanThuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-xac-nhan-phieu-huy-thu-ban-thuoc",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xac-nhan-phieu-huy-thu-ban-thuoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xac-nhan-phieu-huy-thu-ban-thuoc.component.scss */ "./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], XacNhanHuyThuBanThuocComponent);



/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9xdWF5LXRodW9jL3hhYy1uaGFuLXBoaWV1LWh1eS10aHUveGFjLW5oYW4tcGhpZXUtaHV5LXRodS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: XacNhanHuyThuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanHuyThuComponent", function() { return XacNhanHuyThuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../quay-thuoc.model */ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts");












let XacNhanHuyThuComponent = class XacNhanHuyThuComponent {
    constructor(data, dialogRef, authService, dialog, notificationService, apiService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].QuayThuoc;
        this.thongTinHuyPhieu = new _quay_thuoc_model__WEBPACK_IMPORTED_MODULE_11__["ThongTinHuyPhieu"]();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.thuHoiPhieu = false;
    }
    ngOnInit() {
        this.thongTinHuyPhieu = this.data.thongTinHuyPhieu;
        this.thuHoiPhieu = this.data.thuHoiPhieu;
        this.loaiType = this.data.loaiType;
        this.thongTinHuyPhieu.ThuHoiPhieu = false;
        if (this.thuHoiPhieu) {
            let currentUser = this.authService.getAccessUser();
            this.apiService.get("NhanVien/GetNhanVienProflie/" + currentUser.Id).subscribe((resultData) => {
                this.thongTinHuyPhieu.NguoiThuHoiId = currentUser.Id;
                this.thongTinHuyPhieu.TenNguoiThuHoi = resultData.HoTen;
                this.thongTinHuyPhieu.ThoiGianThuHoi = new Date();
            });
        }
    }
    close() {
        this.dialog.closeAll();
    }
    modelChangeThuHoiPhieu(e) {
        if (e) {
            let currentUser = this.authService.getAccessUser();
            this.apiService.get("NhanVien/GetNhanVienProflie/" + currentUser.Id).subscribe((resultData) => {
                this.thongTinHuyPhieu.NguoiThuHoiId = currentUser.Id;
                this.thongTinHuyPhieu.TenNguoiThuHoi = resultData.HoTen;
                this.thongTinHuyPhieu.ThoiGianThuHoi = new Date();
            });
        }
        else {
            this.thongTinHuyPhieu.NguoiThuHoiId = null;
            this.thongTinHuyPhieu.TenNguoiThuHoi = null;
            this.thongTinHuyPhieu.ThoiGianThuHoi = null;
        }
    }
    xacNhanThongTinHuy() {
        var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: {},
        });
        if (this.loaiType) {
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update)) {
                if (this.thuHoiPhieu) {
                    this.apiService.post("QuayThuoc/CapnhatNguoiThuHoiPhieuThuThuoc", this.thongTinHuyPhieu).subscribe((resultData) => {
                        this.dialog.closeAll();
                        this.dialogRef.close("Yes");
                    }, (err) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
                        loading.close();
                    });
                }
                else {
                    this.apiService.post("QuayThuoc/HuyPhieuThuThuoc", this.thongTinHuyPhieu).subscribe((resultData) => {
                        this.dialog.closeAll();
                        this.dialogRef.close("Yes");
                    }, (err) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
                        loading.close();
                    });
                }
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
            }
        }
        else {
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update)) {
                if (this.thuHoiPhieu) {
                    this.apiService.post("QuayThuoc/CapnhatNguoiThuHoiPhieuThuThuoc", this.thongTinHuyPhieu).subscribe((resultData) => {
                        this.dialog.closeAll();
                        this.dialogRef.close("Yes");
                    }, (err) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
                        loading.close();
                    });
                }
                else {
                    this.apiService.post("QuayThuoc/HuyThanhToan", this.thongTinHuyPhieu).subscribe((resultData) => {
                        this.dialog.closeAll();
                        this.dialogRef.close("Yes");
                    }, (err) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : (this.validationErrors = err.ValidationErrors);
                        loading.close();
                    });
                }
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
            }
        }
    }
};
XacNhanHuyThuComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
XacNhanHuyThuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-xac-nhan-phieu-huy-thu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xac-nhan-phieu-huy-thu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xac-nhan-phieu-huy-thu.component.scss */ "./src/app/modules/main/quay-thuoc/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], XacNhanHuyThuComponent);



/***/ })

}]);
//# sourceMappingURL=default~kham-benh-lich-su-kham-benh-lich-su-kham-benh-module~quay-thuoc-danh-sach-cap-thuoc-bhyt-cap~f2f72aff-es2015.js.map