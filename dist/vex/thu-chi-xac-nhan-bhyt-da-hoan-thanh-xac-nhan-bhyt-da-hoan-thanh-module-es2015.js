(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thu-chi-xac-nhan-bhyt-da-hoan-thanh-xac-nhan-bhyt-da-hoan-thanh-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-history.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-history.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [detailTemplate]=\"detailTemplate\" [heightToolbar]=\"425\" additionalSearchString={{id}}\n    [urlGetData]=\"urlGetDataGridParentAsync\" [sort]=\"sort\" (extDetailCollapse)=\"removeLog($event)\" (extDetailExpand)=\"setMasterName($event)\" #gridChiTietCha></app-grid>\n<ng-template #detailTemplate let-dataItem>\n    <app-grid [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [groups]=\"groups\" masterName={{currentMasterName}} [removeGroupFooterIfIsOnlyOne]=\"true\"\n        [urlGetData]=\"urlGetDataGridChildAsync\" additionalSearchString={{dataItem.Id}} [autoHeight]=\"true\" [pageable]=\"false\" (extOnDataBound)=\"onDataBoundForChildren($event)\" #gridChiTietCon>\n    </app-grid>\n</ng-template>\n<ng-template #orderTemplate let-i=\"rowIndex\"><span>{{i+1}}</span></ng-template>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #donGiaBenhVienTemplate let-dataItem>\n    {{dataItem.DonGiaBenhVien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #donGiaGroupFooterTemplate let-dataItem>\n    <span style=\"float: right;\">Cộng:</span>\n</ng-template>\n\n<ng-template #donGiaFooterTemplate let-dataItem>\n    <span style=\"float: right;\">Tổng:</span>\n</ng-template>\n\n<ng-template #thanhTienTemplate let-dataItem>\n    {{dataItem.ThanhTienBenhVien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #thanhTienFooterTemplate let-aggregates>\n    <span style=\"color:blue\">{{totalThanhTien('ThanhTienBenhVien', aggregates) | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n\n<ng-template #thanhTienGroupFooterTemplate let-aggregates>\n    {{aggregates.ThanhTienBenhVien.sum | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #dgbhytThamKhaoTemplate let-dataItem>\n    {{dataItem.DgbhytThamKhao | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #thanhTienBHYTThamKhaoTemplate let-dataItem>\n    {{dataItem.ThanhTienBhytThamKhao | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #templateDGBHYTCT let-dataItem>\n    {{dataItem.DgbhytChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #ttBHYTChiTraTemplate let-dataItem>\n    {{dataItem.TtbhytChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #ttBHYTChiTraGroupFooterTemplate let-aggregates>\n    {{aggregates.TtbhytChiTra.sum | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #ttBHYTChiTraFooterTemplate let-aggregates>\n    <span>{{totalThanhTien('TtbhytChiTra', aggregates) | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n<ng-template #tiLeTheoDvTemplate let-dataItem>\n    <span>{{dataItem.TiLeDv}}%</span>\n</ng-template>\n<ng-template #mucHuongTemplate let-dataItem>\n    <span>{{dataItem.MucHuong}}%</span>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--BEGIN GRID DANH SÁCH ĐÃ XÁC NHẬN BHYT -->\n<app-grid [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [groups]=\"groups\" style=\"width: 1px;\" [heightToolbar]=\"425\" [pageable]=\"false\" [urlGetData]=\"urlGetDataGridAsync\"\n    additionalSearchString={{thisId}} (extOnDataBound)=\"onDataBoundChild($event)\" masterName=\"daXacNhan\" [removeGroupFooterIfIsOnlyOne]=\"true\" #gridDaXacNhan>\n</app-grid>\n\n<!-- Đơn giá bệnh viện template-->\n<ng-template #donGiaBenhVienTemplate let-dataItem>\n    {{dataItem.DonGiaBenhVien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #donGiaGroupFooterTemplate let-dataItem>\n    <span style=\"float: right;\">Cộng:</span>\n</ng-template>\n<!-- Thành tiền custome grid -->\n<ng-template #thanhTienTemplate let-dataItem>\n    {{dataItem.ThanhTienBenhVien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #templateDGBHYTCT let-dataItem>\n    {{dataItem.DgbhytChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #thanhTienGroupFooterTemplate let-aggregates>\n    {{aggregates.ThanhTienBenhVien.sum | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #donGiaFooterTemplate let-dataItem>\n    <span style=\"float: right;\">Tổng:</span>\n</ng-template>\n<ng-template #thanhTienFooterTemplate let-dataItem>\n    <span style=\"color:blue\">{{totaLThanhTien('ThanhTienBenhVien') | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n\n<ng-template #dgbhytThamKhaoTemplate let-dataItem>\n    {{dataItem.DgbhytThamKhao | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #thanhTienBHYTThamKhaoTemplate let-dataItem>\n    {{dataItem.ThanhTienBhytThamKhao | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #tiLeHuongTemplate let-dataItem>\n    {{roundUp(dataItem.TiLeBhyt, 2)}}%\n</ng-template>\n\n\n<ng-template #ttBHYTChiTraTemplate let-dataItem>\n    {{dataItem.TtbhytChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #ttBHYTChiTraGroupFooterTemplate let-aggregates>\n    {{aggregates.TtbhytChiTra.sum | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #ttBHYTChiTraFooterTemplate let-dataItem>\n    <span>{{totalTTBHYTChiTra('TtbhytChiTra') | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n\n\n<ng-template #bnThanhToanTemplate let-dataItem>\n    {{dataItem.BnThanhToan | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #bnThanhToanGroupFooterTemplate let-aggregates>\n    {{aggregates.BnThanhToan.sum | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #bnThanhToanFooterTemplate>\n    <span style=\"color:red\">{{totalBNConPhaiThanhToan('BnThanhToan') | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n<ng-template #orderTemplate let-i=\"rowIndex\"><span>{{i+1}}</span></ng-template>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n<ng-template #actionTemplateDaNhanBHYT let-dataItem let-rowIndex=\"rowIndex\">\n    <div class=\"text-center\" kendoTooltip>\n        <button type=\"button\" (click)=\"lichSuXacNhan(dataItem)\" title=\"Lịch sử xác nhận\" mat-flat-button class=\"mr-3 mt-2\">\n            <mat-icon [icIcon]=\"icHistory\"></mat-icon>\n        </button>\n    </div>\n</ng-template>\n<ng-template #tiLeTheoDvTemplate let-dataItem>\n    <span>{{dataItem.TiLeDv}}%</span>\n</ng-template>\n<ng-template #mucHuongTemplate let-dataItem>\n    <span>{{dataItem.MucHuong}}%</span>\n</ng-template>\n\n<!--END GRID DANH SÁCH ĐÃ XÁC NHẬN BHYT -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"title\">\n    <h3>Lịch sử đã xác nhận</h3>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"py-1 content\">\n        <fieldset class=\"row ml-1\" fxFlex=\"100%\">\n            <legend>Dịch vụ: <span>{{tenDichVu}}</span></legend>\n            <app-grid [gridColumns]=\"gridHistory\" [useAddDeault]=\"false\" class=\"k-grid-border\" #gridHuongBhyt [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [autoHeight]=\"true\" style=\"width: 1px;\" [pageable]=\"false\" [gridDataSource]=\"dataSourceDanhSachLichSuXacNhan\"\n                masterName=\"huongBhyt\" [removeGroupFooterIfIsOnlyOne]=\"true\">\n            </app-grid>\n        </fieldset>\n    </div>\n</mat-dialog-content>\n\n<ng-template #orderTemplate let-i=\"rowIndex\">\n    {{i + 1}}\n</ng-template>\n\n<ng-template #dgbhTemplate let-dataItem>\n    {{dataItem.DgBh | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #ttbhTemplate let-dataItem>\n    {{dataItem.TtBh | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #tlDvTemplate let-dataItem>\n    <span>{{dataItem.TiLeDv}}%</span>\n</ng-template>\n\n<ng-template #mucHuongTemplate let-dataItem>\n    <span>{{dataItem.MucHuong}}%</span>\n</ng-template>\n\n<ng-template #dgbhChiTraTemplate let-dataItem>\n    {{dataItem.DgBhChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #ttbhChiTraTemplate let-dataItem>\n    {{dataItem.TtBhChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                      {Title:'Ngoại Trú',Path:''},\n                      {Title:'Xác Nhận BHYT',Path:''},\n                      {Title:'Chi Tiết Xác Nhận BHYT Đã Hoàn Thành',Path:'/xac-nhan-bhyt-da-hoan-thanh/ngoai-tru', queryParams: {holdQuery : true}, Active:true}\n                  ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n          {Key:'Ctrl + F1',Description:'Di chuyển tới và mở tab DV Đã xác nhận'},\n          {Key:'Ctrl + F2',Description:'Di chuyển tới và mở tab Chi tiết lần xác nhận'},\n          {Key:'Esc',Description:'Hủy', End:true}\n          ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                            <!-- Thông tin hành chính -->\n                            <div fxFlex=\"100%\">\n                                <fieldset>\n                                    <legend>Thông tin hành chính</legend>\n                                    <div fxFlex=\"100%\">\n                                        <ul class=\"inline\">\n                                            <li>Mã TN:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.MaYeuCauTiepNhan}}\n                                                </strong>\n                                            </li>\n                                            <li>Mã NB:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.MaBN}}\n                                                </strong>\n                                            </li>\n                                            <li>Họ Tên:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.HoTen}}\n                                                </strong>\n                                            </li>\n                                            <li>Năm Sinh:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.NamSinh}}\n                                                </strong>\n                                            </li>\n                                            <li>Địa chỉ:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.DiaChi}}\n                                                </strong>\n                                            </li>\n                                            <li>Số điện thoại:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.SoDienThoai}}\n                                                </strong>\n                                            </li>\n                                            <li>Email:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.Email}}\n                                                </strong>\n                                            </li>\n                                            <li>Đối tượng ưu đãi:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.DoiTuongUuDai}}\n                                                </strong>\n                                            </li>\n                                            <li>Công ty ưu đãi:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.CongTyUuDai}}\n                                                </strong>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </fieldset>\n                            </div>\n                            <!-- Thông tin bảo hiểm y tế -->\n                            <div fxFlex=\"100%\">\n                                <fieldset>\n                                    <legend>Thông tin BHYT</legend>\n                                    <div fxFlex=\"100%\">\n                                        <ul class=\"inline\">\n                                            <li>Số thẻ:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.BHYTMaSoThe}}\n                                                </strong>\n                                            </li>\n                                            <li>Ngày hiệu lực:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.BHYTngayHieuLucStr}}\n                                                </strong>\n                                            </li>\n                                            <li>Ngày hết hạn:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.BHYTngayHetHanStr}}\n                                                </strong>\n                                            </li>\n                                            <li>Nơi đăng ký khám BH:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.DKBD}}\n                                                </strong>\n                                            </li>\n                                            <li>Mức hưởng:\n                                                <strong>\n                                                    {{thongTinXacNhanBhyt.BHYTMucHuong}} %\n                                                </strong>\n                                            </li>\n                                            <li>Tuyến khám:\n                                                <strong class=\"color-green\">\n                                                    {{thongTinXacNhanBhyt.LyDoVaoVienDisplay}}\n                                                </strong>\n                                            </li>\n                                            <li>Giấy chuyển viện:\n                                                <strong *ngIf=\"thongTinXacNhanBhyt.GiayChuyenVienDisplay !== null\">\n                                                    <a class=\"color-blue\"\n                                                        (click)=\"viewDocument(thongTinXacNhanBhyt.GiayChuyenVienId, 1)\">{{thongTinXacNhanBhyt.GiayChuyenVienDisplay}}\n                                                    </a>\n                                                </strong>\n                                            </li>\n                                            <li>Giấy miễn cùng chi trả:\n                                                <strong *ngIf=\"thongTinXacNhanBhyt.GiayMienCungChiTraDisplay !== null\">\n                                                    <a class=\"color-blue\"\n                                                        (click)=\"viewDocument(thongTinXacNhanBhyt.BHYTGiayMienCungChiTraId, 2)\">{{thongTinXacNhanBhyt.GiayMienCungChiTraDisplay}}\n                                                    </a>\n                                                </strong>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </fieldset>\n                            </div>\n                            <div fxFlex=\"100%\">\n                                <kendo-tabstrip (tabSelect)=\"onTabSelect($event)\" #tabBhyt class=\"content-has-border\">\n                                    <kendo-tabstrip-tab [selected]=\"tab == 1\">\n                                        <ng-template kendoTabContent>\n                                            <app-da-xac-nhan-bhyt-list (valueChange)=\"switchDaXacNhan()\">\n                                            </app-da-xac-nhan-bhyt-list>\n                                        </ng-template>\n                                        <ng-template kendoTabTitle>\n                                            <div kendoTooltip title=\"Phím tắt: Ctrl + F1\">\n                                                DV Đã xác nhận\n                                            </div>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n                                    <kendo-tabstrip-tab [selected]=\"tab == 2\">\n                                        <ng-template kendoTabContent>\n                                            <app-chi-tiet-lan-xac-nhan-list>\n                                            </app-chi-tiet-lan-xac-nhan-list>\n                                        </ng-template>\n                                        <ng-template kendoTabTitle>\n                                            <div kendoTooltip title=\"Phím tắt: Ctrl + F2\">\n                                                Chi Tiết Lần Xác Nhận\n                                            </div>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n                                </kendo-tabstrip>\n                            </div>\n                            <div fxFlex=\"100%\" class=\"sticky-button-action py-3 text-right\">\n                                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" kendoTooltip>\n                                    <button (click)=\"phieuLinhThuocBenhNhanBHYT()\" color=\"primary\" mat-raised-button\n                                        class=\"mr-2\"> Phiếu lĩnh thuốc\n                                    </button>\n                                    <button (click)=\"onHuy()\" type=\"button\" color=\"\" mat-raised-button\n                                        title=\"Phím tắt: ESC\">Hủy</button>\n                                </div>\n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n          [\n              {Title:'Ngoại Trú',Path:''},\n              {Title:'Xác Nhận BHYT',Path:''},\n              {Title:'Xác Nhận Đã Hoàn Thành',Path:'', Active:true}\n          ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [searchString]=\"searchDaHt.SearchString\"\n                urlGetData=\"XacNhanBhytDaHoanThanh/GetDataForGridAsync\"\n                [additionalSearchString]=\"additionalSearchStringFirst\" [useActionDefault]=\"false\" [pageSize]=\"20\"\n                [lazyLoadPage]=\"false\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" #gridBhyt\n                [checkboxAble]=\"false\" [documentType]=\"documentType\">\n            </app-grid>\n        </div>\n    </vex-page-layout-content>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0 header-container\" fxLayout=\"row\"\n            fxLayoutAlign=\"start center\">\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchDaHt.SearchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"searchChanges()\" placeholder=\"Nhập từ khóa(Mã NB,Tên NB,Năm sinh,Địa chỉ)...\" />\n            </div>\n            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n\n            <app-datetimepicker fxFlex=\"205px\" [(model)]=\"searchDaHt.ThoiDiemDuyetBaoHiemTu\" #tiepnhantu\n                id=\"tiep-nhan-tu\" (keyup)=\"thoiDiemTNChange($event)\" label=\"Từ ngày\" class=\"ml-2 on-header\">\n            </app-datetimepicker>\n            <app-datetimepicker fxFlex=\"205px\" [(model)]=\"searchDaHt.ThoiDiemDuyetBaoHiemDen\" #tiepnhanden\n                id=\"tiep-nhan-den\" (keyup)=\"thoiDiemTNChange($event)\" label=\"Đến ngày\" class=\"ml-2 on-header\">\n            </app-datetimepicker>\n\n            <span fxFlex></span>\n            <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                title=\"Lọc cột\" type=\"button\">\n                <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n            </button>\n\n            <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <div *ngFor=\"let column of gridColumns\">\n                    <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                        <mat-checkbox (click)=\"toggleColumnVisibility(column, $event)\" [disabled]=\"!column.HasFilter\"\n                            [(ngModel)]=\"column.Visible\" color=\"primary\">\n                            {{ column.Title }}\n                        </mat-checkbox>\n                    </button>\n                </div>\n            </mat-menu>\n            <button (click)=\"exportExcel()\" class=\"ml-3\" fxFlex=\"1%\" fxFlex.sm=\"1%\" mat-icon-button kendoTooltip\n                title=\"Xuất Excel\" type=\"button\">\n                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #statusTemplate let-dataItem>\n        <strong *ngIf=\"dataItem.SoTienChoXacNhan != 0\" class=\"text-color\">\n            Chờ xác nhận</strong>\n        <strong *ngIf=\"dataItem.SoTienDaXacNhan > 0 && dataItem.SoTienChoXacNhan == 0\" class=\"blue-color\">\n            Đã xác nhận</strong>\n    </ng-template>\n\n    <ng-template #maTnTemplate let-dataItem>\n        <a (click)=\"thongTinChiTiet(dataItem)\">{{dataItem.MaTn}}</a>\n    </ng-template>\n</vex-page-layout>\n\n<ng-template #soTienDaXnTemplate let-dataItem>\n    <strong style=\"color:blue\">{{dataItem.SoTienDaXacNhan | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n\n<ng-template #thoiDiemDuyetBHTemplate let-dataItem>\n    <strong>{{dataItem.ThoiDiemDuyetBaoHiemDisplayName}}</strong>\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3hhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaC9jaGktdGlldC1sYW4teGFjLW5oYW4tbGlzdC9jaGktdGlldC1sYW4teGFjLW5oYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ChiTietLanXacNhanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietLanXacNhanListComponent", function() { return ChiTietLanXacNhanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _xac_nhan_bhyt_da_hoan_thanh_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xac-nhan-bhyt-da-hoan-thanh.model */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ChiTietLanXacNhanListComponent = class ChiTietLanXacNhanListComponent {
    constructor(route) {
        this.route = route;
        this.id = this.route.snapshot.params.id;
        this.data = [];
        this.lanXacNhanLog = [];
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataGridParentAsync = 'XacNhanBhytDaHoanThanh/GetDataForDuyetBaoHiemAsync';
        this.urlGetDataGridChildAsync = 'XacNhanBhytDaHoanThanh/GetDataForGridDuyetBaoHiemChiTietAsync';
        this.currentMasterName = null;
        this.sort = [{
                field: 'Id',
                dir: 'asc'
            }];
        this.groups = [{
                field: 'Nhom', aggregates: [
                    { field: 'ThanhTienBenhVien', aggregate: 'sum' },
                    { field: 'TtbhytChiTra', aggregate: 'sum' }
                ]
            }];
    }
    totalThanhTien(field, id) {
        const self = this;
        switch (field) {
            case 'ThanhTienBenhVien': {
                if (self.lanXacNhanLog.length !== 0 && self.lanXacNhanLog.filter(x => x.Id === Number(id)).length !== 0) {
                    return self.lanXacNhanLog.filter(x => x.Id === Number(id))[0].
                        DaXacNhanBhyt.reduce((sum, item) => sum + item.ThanhTienBenhVien, 0);
                }
                return 0;
            }
            case 'TtbhytChiTra': {
                if (self.lanXacNhanLog.length !== 0 && self.lanXacNhanLog.filter(x => x.Id === Number(id)).length !== 0) {
                    return self.lanXacNhanLog.filter(x => x.Id === Number(id))[0].
                        DaXacNhanBhyt.reduce((sum, item) => sum + item.TtbhytChiTra, 0);
                }
                return 0;
            }
            default: {
                return 0;
            }
        }
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XacNhanBhytDaHoanThanh;
        this.gridColumns = [
            { Field: 'Id', Title: 'Mã XN', Width: 85 },
            { Field: 'NguoiXacNhan', Title: 'Người Xác Nhận', Width: 1123 },
            { Field: 'NgayXacNhan', Title: 'Ngày Xác Nhận', Width: 458 },
        ];
        this.gridChildColumns = [
            { Field: 'STT', Title: '#', Width: 25, Template: this.orderTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'MaDichVu', Title: 'Mã', Width: 73 },
            { Field: 'TenDichVu', Title: 'Tên dịch vụ', Width: 318, ShowTooltip: true },
            { Field: 'LoaiGia', Title: 'Loại giá', Width: 86 },
            { Field: 'SoLuong', Title: 'SL', Width: 40 },
            {
                Field: 'DonGiaBenhVien', Title: 'ĐG doanh thu', Width: 114,
                Template: this.donGiaBenhVienTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate,
                TemplateFooter: this.donGiaFooterTemplate
            },
            {
                Field: 'ThanhTienBenhVien', Title: 'Thành Tiền', Width: 107,
                Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate,
                TemplateGroupFooter: this.thanhTienGroupFooterTemplate
            },
            { Field: 'DgbhytThamKhao', Title: 'ĐG BHYT', Width: 94, Template: this.dgbhytThamKhaoTemplate },
            { Field: 'ThanhTienBhytThamKhao', Title: 'Thành tiền BHYT', Width: 140, Template: this.thanhTienBHYTThamKhaoTemplate },
            { Field: 'TiLeDv', Title: 'Tỉ lệ theo dịch vụ (%)', Width: 161, Template: this.tiLeTheoDvTemplate },
            { Field: 'MucHuong', Title: 'Mức hưởng (%)', Width: 118, Template: this.mucHuongTemplate },
            { Field: 'DgbhytChiTra', Title: 'ĐG BHYT chi trả', Width: 126, Template: this.templateDGBHYTCT },
            {
                Field: 'TtbhytChiTra', Title: 'TT BHYT Chi Trả', Width: 214,
                Template: this.ttBHYTChiTraTemplate, TemplateFooter: this.ttBHYTChiTraFooterTemplate,
                TemplateGroupFooter: this.ttBHYTChiTraGroupFooterTemplate
            }
        ];
    }
    onDataBoundForChildren(event) {
        const duyetChiTiet = [];
        this.data = event.Data;
        this.data.forEach(duyetChiTietItem => {
            duyetChiTiet.push(duyetChiTietItem);
        });
        let lanXacNhan = new _xac_nhan_bhyt_da_hoan_thanh_model__WEBPACK_IMPORTED_MODULE_4__["LanXacNhanLogList"]();
        lanXacNhan = {
            Id: Number(this.currentMasterName),
            DaXacNhanBhyt: duyetChiTiet
        };
        this.lanXacNhanLog.push(lanXacNhan);
    }
    setMasterName(eventData) {
        this.currentMasterName = eventData.dataItem.Id.toString();
    }
    removeLog(eventData) {
        const deletedPosition = this.lanXacNhanLog.indexOf(this.lanXacNhanLog.filter(x => x.Id === eventData.dataItem.Id)[0]);
        this.lanXacNhanLog.splice(deletedPosition, 1);
    }
};
ChiTietLanXacNhanListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], ChiTietLanXacNhanListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBenhVienTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "donGiaBenhVienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaGroupFooterTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "donGiaGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "thanhTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dgbhytThamKhaoTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "dgbhytThamKhaoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienBHYTThamKhaoTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "thanhTienBHYTThamKhaoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateDGBHYTCT', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "templateDGBHYTCT", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttBHYTChiTraTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "ttBHYTChiTraTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttBHYTChiTraFooterTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "ttBHYTChiTraFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttBHYTChiTraGroupFooterTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "ttBHYTChiTraGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orderTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "orderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tiLeTheoDvTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "tiLeTheoDvTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mucHuongTemplate', { static: true })
], ChiTietLanXacNhanListComponent.prototype, "mucHuongTemplate", void 0);
ChiTietLanXacNhanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-chi-tiet-lan-xac-nhan-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chi-tiet-lan-xac-nhan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chi-tiet-lan-xac-nhan-list.component.scss */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component.scss")).default]
    })
], ChiTietLanXacNhanListComponent);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3hhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaC9kYS14YWMtbmhhbi1iaHl0LWxpc3QvZGEteGFjLW5oYW4tYmh5dC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: DaXacNhanBhytListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaXacNhanBhytListComponent", function() { return DaXacNhanBhytListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _list_duyet_history_list_duyet_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../list-duyet-history/list-duyet-history.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-history */ "./node_modules/@iconify/icons-ic/twotone-history.js");
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");












let DaXacNhanBhytListComponent = class DaXacNhanBhytListComponent {
    constructor(dialog, authService, notificationService, route, apiService) {
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.route = route;
        this.apiService = apiService;
        this.gridColumns = [];
        this.data = [];
        this.urlGetDataGridAsync = 'XacNhanBhytDaHoanThanh/GetDataForGridDaXacNhanAsync';
        this.icHistory = _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.thisId = this.route.snapshot.params.id;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.groups = [{
                field: 'Nhom', aggregates: [
                    { field: 'ThanhTienBenhVien', aggregate: 'sum' },
                    { field: 'TtbhytChiTra', aggregate: 'sum' },
                    { field: 'BnThanhToan', aggregate: 'sum' }
                ]
            }];
    }
    totalBNConPhaiThanhToan(field) {
        switch (field) {
            case 'BnThanhToan':
                return this.data.reduce((sum, item) => sum + item.BnThanhToan, 0);
        }
    }
    totaLThanhTien(field) {
        switch (field) {
            case 'ThanhTienBenhVien':
                return this.data.reduce((sum, item) => sum + item.ThanhTienBenhVien, 0);
        }
    }
    totalTTBHYTChiTra(field) {
        switch (field) {
            case 'TtbhytChiTra':
                return this.data.reduce((sum, item) => sum + item.TtbhytChiTra, 0);
        }
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].XacNhanBhytDaHoanThanh;
        this.thisId = this.route.snapshot.params.id;
        this.gridColumns = [
            { Field: 'STT', Title: '#', Width: 47, Template: this.orderTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'MaDichVu', Title: 'Mã', Width: 92 },
            { Field: 'TenDichVu', Title: 'Tên dịch vụ', Width: 231, ShowTooltip: true },
            { Field: 'LoaiGia', Title: 'Loại giá', Width: 90 },
            { Field: 'SoLuong', Title: 'SL', Width: 45 },
            {
                Field: 'DonGiaBenhVien', Title: 'ĐG doanh thu', Width: 114,
                Template: this.donGiaBenhVienTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate,
                TemplateFooter: this.donGiaFooterTemplate
            },
            {
                Field: 'ThanhTienBenhVien', Title: 'Thành Tiền', Width: 107,
                Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate,
                TemplateGroupFooter: this.thanhTienGroupFooterTemplate
            },
            { Field: 'DgbhytThamKhao', Title: 'ĐG BHYT', Width: 90, Template: this.dgbhytThamKhaoTemplate },
            { Field: 'ThanhTienBhytThamKhao', Title: 'Thành tiền BHYT', Width: 135, Template: this.thanhTienBHYTThamKhaoTemplate },
            { Field: 'TiLeDv', Title: 'Tỉ lệ theo dịch vụ (%)', Width: 161, Template: this.tiLeTheoDvTemplate },
            { Field: 'MucHuong', Title: 'Mức hưởng (%)', Width: 118, Template: this.mucHuongTemplate },
            { Field: 'DgbhytChiTra', Title: 'ĐG BHYT chi trả', Width: 130, Template: this.templateDGBHYTCT },
            {
                Field: 'TtbhytChiTra', Title: 'TT BHYT Chi Trả', Width: 130,
                Template: this.ttBHYTChiTraTemplate, TemplateFooter: this.ttBHYTChiTraFooterTemplate,
                TemplateGroupFooter: this.ttBHYTChiTraGroupFooterTemplate
            },
            {
                Field: 'BnThanhToan', Title: 'BN thanh toán', Width: 122,
                Template: this.bnThanhToanTemplate, TemplateFooter: this.bnThanhToanFooterTemplate,
                TemplateGroupFooter: this.bnThanhToanGroupFooterTemplate
            },
            { Field: 'Action', Title: '', Width: 55, Template: this.actionTemplateDaNhanBHYT }
        ];
    }
    onDataBoundChild(event) {
        this.data = event.Data;
        this.valueChange.emit();
    }
    lichSuXacNhan(data) {
        const self = this;
        const lichSuModel = {
            Id: data.IdDatabase,
            Group: data.GroupType
        };
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].View)) {
            self.apiService.post('XacNhanBHYT/GetHistoryLog', lichSuModel).subscribe((resultData) => {
                const dataPassingToDanhSachPopUp = {
                    listHistory: resultData.Value.Value,
                    title: data.TenDichVu
                };
                self.dialog.open(_list_duyet_history_list_duyet_history_component__WEBPACK_IMPORTED_MODULE_6__["ListDuyetHistoryComponent"], {
                    disableClose: false,
                    width: '1200px',
                    data: { Title: 'Xác nhận', Model: dataPassingToDanhSachPopUp }
                }).afterClosed().subscribe(() => { });
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    roundUp(num, precision) {
        precision = Math.pow(10, precision);
        return Math.ceil(num * precision) / precision;
    }
};
DaXacNhanBhytListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DaXacNhanBhytListComponent.prototype, "valueChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienBHYTThamKhaoTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "thanhTienBHYTThamKhaoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateDGBHYTCT', { static: true })
], DaXacNhanBhytListComponent.prototype, "templateDGBHYTCT", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplateDaNhanBHYT', { static: true })
], DaXacNhanBhytListComponent.prototype, "actionTemplateDaNhanBHYT", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaGroupFooterTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "donGiaGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDaXacNhan', { static: false })
], DaXacNhanBhytListComponent.prototype, "gridDaXacNhanBHYT", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dgbhytThamKhaoTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "dgbhytThamKhaoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBenhVienTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "donGiaBenhVienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "thanhTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttBHYTChiTraTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "ttBHYTChiTraTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttBHYTChiTraFooterTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "ttBHYTChiTraFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orderTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "orderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttBHYTChiTraGroupFooterTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "ttBHYTChiTraGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "bnThanhToanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanFooterTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "bnThanhToanFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanGroupFooterTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "bnThanhToanGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tiLeHuongTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "tiLeHuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tiLeTheoDvTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "tiLeTheoDvTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mucHuongTemplate', { static: true })
], DaXacNhanBhytListComponent.prototype, "mucHuongTemplate", void 0);
DaXacNhanBhytListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-da-xac-nhan-bhyt-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./da-xac-nhan-bhyt-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./da-xac-nhan-bhyt-list.component.scss */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component.scss")).default]
    })
], DaXacNhanBhytListComponent);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  margin: 0;\n  position: relative;\n  height: 55px;\n  justify-content: flex-end !important;\n}\n\n.title h3 {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  text-shadow: 2px 3px 6px rgba(62, 41, 79, 0.59);\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n  font-size: 22px;\n}\n\n.title::after {\n  content: \"\";\n  height: 4px;\n  background-color: #111a1a;\n  width: 80%;\n  position: absolute;\n  top: 45px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.content legend {\n  font-size: 18px;\n  text-shadow: 0px 1px 0px #918996;\n  text-transform: uppercase;\n}\n\n.content legend span {\n  font-size: 0.95em;\n  text-transform: lowercase;\n}\n\n.content table,\n.content tr,\n.content td,\n.content th {\n  border: 3px solid rgba(36, 17, 24, 0.4);\n}\n\n.content table tr td {\n  font-size: 15px;\n}\n\n.content table tr td.price {\n  text-align: right;\n  font-weight: bold;\n}\n\n.content table th {\n  font-size: 16px;\n  font-weight: bold;\n  background: #005dab;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oL2xpc3QtZHV5ZXQtaGlzdG9yeS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRodS1jaGlcXHhhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaFxcbGlzdC1kdXlldC1oaXN0b3J5XFxsaXN0LWR1eWV0LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3hhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaC9saXN0LWR1eWV0LWhpc3RvcnkvbGlzdC1kdXlldC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBOzs7O0VBSUUsdUNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS94YWMtbmhhbi1iaHl0LWRhLWhvYW4tdGhhbmgvbGlzdC1kdXlldC1oaXN0b3J5L2xpc3QtZHV5ZXQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIGgzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1zaGFkb3c6IDJweCAzcHggNnB4IHJnYmEoNjIsIDQxLCA3OSwgMC41OSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4udGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTFhMWE7XG4gIHdpZHRoOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmNvbnRlbnQgbGVnZW5kIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzkxODk5NjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRlbnQgbGVnZW5kIHNwYW4ge1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuLmNvbnRlbnQgdGFibGUsXG4uY29udGVudCB0cixcbi5jb250ZW50IHRkLFxuLmNvbnRlbnQgdGgge1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDM2LCAxNywgMjQsIDAuNCk7XG59XG5cbi5jb250ZW50IHRhYmxlIHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29udGVudCB0YWJsZSB0ciB0ZC5wcmljZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQgdGFibGUgdGgge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjMDA1ZGFiO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIudGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSBoMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRleHQtc2hhZG93OiAycHggM3B4IDZweCByZ2JhKDYyLCA0MSwgNzksIDAuNTkpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnRpdGxlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExYTFhO1xuICB3aWR0aDogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDVweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5jb250ZW50IGxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICM5MTg5OTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250ZW50IGxlZ2VuZCBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbi5jb250ZW50IHRhYmxlLFxuLmNvbnRlbnQgdHIsXG4uY29udGVudCB0ZCxcbi5jb250ZW50IHRoIHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgzNiwgMTcsIDI0LCAwLjQpO1xufVxuXG4uY29udGVudCB0YWJsZSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNvbnRlbnQgdGFibGUgdHIgdGQucHJpY2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50IHRhYmxlIHRoIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogIzAwNWRhYjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ListDuyetHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDuyetHistoryComponent", function() { return ListDuyetHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let ListDuyetHistoryComponent = class ListDuyetHistoryComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.danhSachLichSuVaTitle = null;
        this.tenDichVu = null;
        this.danhSachLichSuKhamBenh = [];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.gridHistory = [];
        this.dataSourceDanhSachLichSuXacNhan = {
            data: [],
            total: 0
        };
        this.danhSachLichSuVaTitle = data.Model;
    }
    ngOnInit() {
        this.tenDichVu = this.danhSachLichSuVaTitle.title;
        this.danhSachLichSuKhamBenh = this.danhSachLichSuVaTitle.listHistory;
        this.dataSourceDanhSachLichSuXacNhan.data = this.danhSachLichSuKhamBenh;
        this.dataSourceDanhSachLichSuXacNhan.total = this.danhSachLichSuKhamBenh.length;
        this.gridHistory = [
            { Field: '', Title: 'STT', Width: 44, Template: this.orderTemplate },
            { Field: 'SoLuong', Title: 'Số Lượng', ShowTooltip: true, Width: 86 },
            {
                Field: 'DgBh', Title: 'ĐGBHYT', Width: 89, ShowTooltip: true, Template: this.dgbhTemplate
            },
            {
                Field: 'TtBh', Title: 'Thành Tiền BHYT', Width: 133, Template: this.ttbhTemplate
            },
            { Field: 'TiLeDv', Title: 'Tỉ Lệ Theo DV', Width: 104, Template: this.tlDvTemplate },
            {
                Field: 'MucHuong', Title: 'Mức Hưởng', Width: 95, Template: this.mucHuongTemplate
            },
            {
                Field: 'DgBhChiTra', Title: 'ĐGBHYT Chi Trả', Width: 122, Template: this.dgbhChiTraTemplate
            },
            {
                Field: 'TtBhChiTra', Title: 'TTBHYT Chi Trả', Width: 122, Template: this.ttbhChiTraTemplate
            },
            { Field: 'NgayDuyet', Title: 'Ngày Cập Nhật', Width: 153 },
            { Field: 'TenNhanVien', Title: 'Người Cập Nhật', Width: 156 },
        ];
    }
    close() {
        this.dialog.closeAll();
    }
};
ListDuyetHistoryComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orderTemplate', { static: true })
], ListDuyetHistoryComponent.prototype, "orderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dgbhTemplate', { static: true })
], ListDuyetHistoryComponent.prototype, "dgbhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttbhTemplate', { static: true })
], ListDuyetHistoryComponent.prototype, "ttbhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tlDvTemplate', { static: true })
], ListDuyetHistoryComponent.prototype, "tlDvTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mucHuongTemplate', { static: true })
], ListDuyetHistoryComponent.prototype, "mucHuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dgbhChiTraTemplate', { static: true })
], ListDuyetHistoryComponent.prototype, "dgbhChiTraTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttbhChiTraTemplate', { static: true })
], ListDuyetHistoryComponent.prototype, "ttbhChiTraTemplate", void 0);
ListDuyetHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-list-duyet-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-duyet-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-duyet-history.component.scss */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], ListDuyetHistoryComponent);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sticky-button-action {\n  position: sticky;\n  position: -webkit-sticky;\n  bottom: 0px;\n  background-color: white;\n  border-top: 1px solid #ccc;\n  overflow: hidden;\n  z-index: 10;\n}\n\n.color-green {\n  color: green;\n}\n\n.color-blue {\n  color: blue;\n  text-decoration: underline;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nfieldset legend {\n  text-transform: uppercase;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oL3hhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaC1kZXRhaWxlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRodS1jaGlcXHhhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaFxceGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oLWRldGFpbGVkXFx4YWMtbmhhbi1iaHl0LWRhLWhvYW4tdGhhbmgtZGV0YWlsZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3hhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaC94YWMtbmhhbi1iaHl0LWRhLWhvYW4tdGhhbmgtZGV0YWlsZWQveGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oLWRldGFpbGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0Q0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS94YWMtbmhhbi1iaHl0LWRhLWhvYW4tdGhhbmgveGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oLWRldGFpbGVkL3hhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaC1kZXRhaWxlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGlja3ktYnV0dG9uLWFjdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNvbG9yLWJsdWUge1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSB1bC5pbmxpbmUgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5pbmxpbmVfYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjQyLCAyNTMsIDAuNSk7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLWdyb3VwLWIge1xuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KSBvdXRzZXQ7XG59IiwiLnN0aWNreS1idXR0b24tYWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: XacNhanBhytDaHoanThanhDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBhytDaHoanThanhDetailedComponent", function() { return XacNhanBhytDaHoanThanhDetailedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _lich_su_xac_nhan_bhyt_thong_tin_phieu_linh_thuoc_pdf_popup_thong_tin_phieu_linh_thuoc_pdf_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lich-su-xac-nhan-bhyt/thong-tin-phieu-linh-thuoc-pdf-popup/thong-tin-phieu-linh-thuoc-pdf-popup.component */ "./src/app/modules/main/thu-chi/lich-su-xac-nhan-bhyt/thong-tin-phieu-linh-thuoc-pdf-popup/thong-tin-phieu-linh-thuoc-pdf-popup.component.ts");

















let XacNhanBhytDaHoanThanhDetailedComponent = class XacNhanBhytDaHoanThanhDetailedComponent {
    constructor(route, router, authService, notificationService, dialog, apiService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.gridColumns = [];
        this.id = this.route.snapshot.params.id;
        this.tabIndex = 0;
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('above');
        this.thongTinXacNhanBhyt = {};
        this.tab = 1;
    }
    ngOnInit() {
        const self = this;
        self.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XacNhanBhytDaHoanThanh;
        self.showPopupLoadingData();
        if (self.id !== undefined && self.id !== null) {
            self.getById(self.id);
            this.yeuCauTiepNhanId = self.id;
        }
    }
    getById(id) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
            this.apiService
                .post('XacNhanBHYT/GetById?id=' + id)
                .subscribe((resultData) => {
                if (resultData !== undefined && resultData != null) {
                    this.thongTinXacNhanBhyt = resultData;
                    this.thongTinXacNhanBhyt.MaBN = resultData.BenhNhan != null ? resultData.BenhNhan.MaBN : '';
                    this.thongTinXacNhanBhyt.DoiTuongUuDai = resultData.DoiTuongUuDai != null ? resultData.DoiTuongUuDai.Ten : '';
                    this.thongTinXacNhanBhyt.CongTyUuDai = resultData.CongTyUuDai != null ? resultData.CongTyUuDai.Ten : '';
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    switchDaXacNhan() {
        this.closePopupLoadingData();
    }
    onHuy() {
        this.router.navigate(['/xac-nhan-bhyt-da-hoan-thanh/ngoai-tru'], {
            queryParamsHandling: 'preserve',
        });
    }
    viewDocument(idFile, type) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
            self.apiService
                .post('XacNhanBHYT/GetDocument?idFile=' + idFile + '&type=' + type)
                .subscribe((result) => {
                if (result.MoTa === undefined) {
                    result.MoTa = null;
                }
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpParams"]({
                    fromObject: {
                        tenGuid: result.TenGuid,
                        duongDan: result.DuongDan,
                    },
                });
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
                    self.apiService
                        .get('TaiLieuDinhKem/GetTaiLieuUrl', params)
                        .subscribe((resp) => {
                        if (resp) {
                            if (result.TenGuid.indexOf('.pdf') !== -1 || result.TenGuid.indexOf('.PDF') !== -1) {
                                self.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_13__["ViewImagePdfComponent"], {
                                    disableClose: false,
                                    width: '1000px',
                                    height: '600px',
                                    data: {
                                        Type: 'PDF', Title: 'Xem tài liệu',
                                        Description: (result.MoTa !== null ? result.MoTa : ''), Src: resp
                                    }
                                });
                            }
                            else {
                                self.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_13__["ViewImagePdfComponent"], {
                                    disableClose: false,
                                    width: '1000px',
                                    height: '600px',
                                    data: {
                                        Type: 'Image', Title: 'Xem ảnh',
                                        Description: (result.MoTa !== null ? result.MoTa : ''), Src: resp
                                    }
                                });
                            }
                        }
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    onTabSelect(ev) {
        const self = this;
        self.tabIndex = ev.index;
    }
    phieuLinhThuocBenhNhanBHYT() {
        let loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: {},
        });
        let hostingName = window.location.protocol + '//' + window.location.host;
        this.apiService.post("XacNhanBHYT/PhieuLinhThuocBenhNhanBHYTTheoYCTN?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&hostingName=" + hostingName).subscribe(arrHtml => {
            var arrHtmls = [{
                    Html: arrHtml,
                    TenFile: "PhieuLinhThuocBenhNhanBHYT",
                    PageSize: "A4",
                    PageOrientation: "Portrait",
                }];
            this.dialog
                .open(_lich_su_xac_nhan_bhyt_thong_tin_phieu_linh_thuoc_pdf_popup_thong_tin_phieu_linh_thuoc_pdf_popup_component__WEBPACK_IMPORTED_MODULE_15__["ThongTinPhieuBHYTPdfPopupComponent"], {
                disableClose: false,
                width: "1000px",
                data: arrHtmls,
            })
                .afterClosed()
                .subscribe(result => { loading.close(); });
        }, (err) => {
            if (err.Message !== "Validation Failed") {
                this.notificationService.showError(err.Message);
                loading.close();
            }
        });
    }
    keyEvent(event) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 112 && event.ctrlKey) {
            // ctrl + f1
            this.tabBhyt.selectTab(0);
            event.preventDefault();
        }
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 113 && event.ctrlKey) {
            // ctrl + f2
            this.tabBhyt.selectTab(1);
            event.preventDefault();
        }
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 27 && !event.ctrlKey) {
            // esc
            this.onHuy();
            event.preventDefault();
        }
    }
};
XacNhanBhytDaHoanThanhDetailedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabBhyt', { static: true })
], XacNhanBhytDaHoanThanhDetailedComponent.prototype, "tabBhyt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], { static: true })
], XacNhanBhytDaHoanThanhDetailedComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], XacNhanBhytDaHoanThanhDetailedComponent.prototype, "keyEvent", null);
XacNhanBhytDaHoanThanhDetailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-xac-nhan-bhyt-da-hoan-thanh-detailed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xac-nhan-bhyt-da-hoan-thanh-detailed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xac-nhan-bhyt-da-hoan-thanh-detailed.component.scss */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.scss")).default]
    })
], XacNhanBhytDaHoanThanhDetailedComponent);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oL3hhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaC1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGh1LWNoaVxceGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oXFx4YWMtbmhhbi1iaHl0LWRhLWhvYW4tdGhhbmgtbGlzdFxceGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3hhYy1uaGFuLWJoeXQtZGEtaG9hbi10aGFuaC94YWMtbmhhbi1iaHl0LWRhLWhvYW4tdGhhbmgtbGlzdC94YWMtbmhhbi1iaHl0LWRhLWhvYW4tdGhhbmgtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS94YWMtbmhhbi1iaHl0LWRhLWhvYW4tdGhhbmgveGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oLWxpc3QveGFjLW5oYW4tYmh5dC1kYS1ob2FuLXRoYW5oLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufSIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: XacNhanBhytDaHoanThanhListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBhytDaHoanThanhListComponent", function() { return XacNhanBhytDaHoanThanhListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _xac_nhan_bhyt_da_hoan_thanh_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../xac-nhan-bhyt-da-hoan-thanh.model */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18__);



















let XacNhanBhytDaHoanThanhListComponent = class XacNhanBhytDaHoanThanhListComponent {
    constructor(notificationService, router, route, authService, dialog, apiService) {
        this.notificationService = notificationService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.holdQuery = null;
        this.additionalSearchString = null;
        this.additionalSearchStringFirst = null;
        this.searchDaHt = new _xac_nhan_bhyt_da_hoan_thanh_model__WEBPACK_IMPORTED_MODULE_17__["Search"]();
        this.gridColumns = [];
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XacNhanBhytDaHoanThanh;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem('additionalSearchStringXacNhanBHYTDaHoanThanh') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem('additionalSearchStringXacNhanBHYTDaHoanThanh');
            this.searchDaHt = new _xac_nhan_bhyt_da_hoan_thanh_model__WEBPACK_IMPORTED_MODULE_17__["Search"]();
            this.searchDaHt = JSON.parse(this.additionalSearchString);
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringXacNhanBHYTDaHoanThanh', null);
        }
        this.gridColumns = [
            { Field: 'MaTn', Title: 'Mã TN', Width: 106, Sortable: true, Template: this.maTnTemplate },
            { Field: 'MaBn', Title: 'Mã NB', Width: 83, Sortable: true },
            { Field: 'HoTen', Title: 'Họ Tên', Width: 163, Sortable: true },
            { Field: 'NamSinh', Title: 'Năm Sinh', Width: 127, Sortable: true },
            { Field: 'GioiTinh', Title: 'Giới Tính', Width: 130, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: 'DiaChi', Title: 'Địa Chỉ', Width: 500, Sortable: true },
            { Field: 'SoDienThoaiDisplay', Title: 'Số Điện Thoại', Width: 182, Sortable: true },
            { Field: 'SoTienDaXacNhan', Title: 'Số Tiền Đã XN', Width: 186, Template: this.soTienDaXnTemplate },
            { Field: 'ThoiDiemDuyetBaoHiem', Title: 'Thời điểm duyệt bảo hiểm', Width: 186, Template: this.thoiDiemDuyetBHTemplate },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        if (this.searchDaHt.ThoiDiemDuyetBaoHiemTu == null) {
            this.searchDaHt.ThoiDiemDuyetBaoHiemTu = this.minDateTuNgay;
        }
        if (this.searchDaHt.ThoiDiemDuyetBaoHiemDen == null) {
            this.searchDaHt.ThoiDiemDuyetBaoHiemDen = new Date();
            this.searchDaHt.ThoiDiemDuyetBaoHiemDen.setHours(23, 59, 59);
        }
        let dateNow = new Date();
        this.searchDaHt.FromDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.searchDaHt.ToDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        this.additionalSearchStringFirst = JSON.stringify(this.searchDaHt);
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('XacNhanBhytDaHoanThanh/ExportXacNhanBhytDaHoanThanh', self.gridChild._gridQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'XacNhanDaHoanThanh' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    thongTinChiTiet(dataItem) {
        this.router.navigateByUrl('/xac-nhan-bhyt-da-hoan-thanh/ngoai-tru/thong-tin-chi-tiet-bao-hiem-y-te-da-hoan-thanh-xac-nhan/' + dataItem.Id +
            '?holdQuery=true');
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.Timkiem();
        }
    }
    Timkiem() {
        let QueryString = null;
        if (this.searchDaHt.ThoiDiemDuyetBaoHiemTu != null) {
            this.searchDaHt.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].formatDateTime(this.searchDaHt.ThoiDiemDuyetBaoHiemTu, 'dd/mm/yyyy');
        }
        else {
            this.searchDaHt.FromDate = null;
        }
        if (this.searchDaHt.ThoiDiemDuyetBaoHiemDen != null) {
            this.searchDaHt.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].formatDateTime(this.searchDaHt.ThoiDiemDuyetBaoHiemDen, 'dd/mm/yyyy');
        }
        else {
            this.searchDaHt.ToDate = null;
        }
        if (this.searchDaHt.SearchString != null) {
            this.router.navigateByUrl('xac-nhan-bhyt-da-hoan-thanh/ngoai-tru?holdQuery=true');
            QueryString = this.searchDaHt.SearchString;
        }
        const queryString = JSON.stringify(this.searchDaHt);
        this.gridChild.searchString = QueryString;
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringXacNhanBHYTDaHoanThanh', queryString);
    }
    searchChanges() {
        const self = this;
        if (self.timeoutSearchChange != null) {
            clearTimeout(self.timeoutSearchChange);
            self.timeoutSearchChange = null;
        }
        if (self.searchDaHt.SearchString == null || self.searchDaHt.SearchString === '') {
            self.gridChild.searchString = '';
            self.gridChild.search();
        }
    }
    clearSearch() {
        this.searchDaHt.SearchString = '';
        this.gridChild.search();
    }
    toggleColumnVisibility(column, event) {
        this.gridBhyt.toggleColumnVisibility(column, event);
    }
    thoiDiemTNChange(event) {
        if (event.key === 'Enter') {
            this.Timkiem();
        }
    }
};
XacNhanBhytDaHoanThanhListComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
], XacNhanBhytDaHoanThanhListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhTemplate', { static: true })
], XacNhanBhytDaHoanThanhListComponent.prototype, "gioiTinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTnTemplate', { static: true })
], XacNhanBhytDaHoanThanhListComponent.prototype, "maTnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienDaXnTemplate', { static: true })
], XacNhanBhytDaHoanThanhListComponent.prototype, "soTienDaXnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemDuyetBHTemplate', { static: true })
], XacNhanBhytDaHoanThanhListComponent.prototype, "thoiDiemDuyetBHTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridBhyt', { static: false })
], XacNhanBhytDaHoanThanhListComponent.prototype, "gridBhyt", void 0);
XacNhanBhytDaHoanThanhListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-xac-nhan-bhyt-da-hoan-thanh-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xac-nhan-bhyt-da-hoan-thanh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xac-nhan-bhyt-da-hoan-thanh-list.component.scss */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.scss")).default]
    })
], XacNhanBhytDaHoanThanhListComponent);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-routing.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-routing.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: XacNhanBhytDaHoanThanhRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBhytDaHoanThanhRoutingModule", function() { return XacNhanBhytDaHoanThanhRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xac_nhan_bhyt_da_hoan_thanh_list_xac_nhan_bhyt_da_hoan_thanh_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.ts");
/* harmony import */ var _xac_nhan_bhyt_da_hoan_thanh_detailed_xac_nhan_bhyt_da_hoan_thanh_detailed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");








const routes = [
    {
        path: '',
        component: _xac_nhan_bhyt_da_hoan_thanh_list_xac_nhan_bhyt_da_hoan_thanh_list_component__WEBPACK_IMPORTED_MODULE_3__["XacNhanBhytDaHoanThanhListComponent"],
        data: {
            title: 'Danh sách bhyt đã hoàn thành xác nhận',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].XacNhanBhytDaHoanThanh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
    },
    {
        path: 'thong-tin-chi-tiet-bao-hiem-y-te-da-hoan-thanh-xac-nhan/:id',
        component: _xac_nhan_bhyt_da_hoan_thanh_detailed_xac_nhan_bhyt_da_hoan_thanh_detailed_component__WEBPACK_IMPORTED_MODULE_4__["XacNhanBhytDaHoanThanhDetailedComponent"],
        data: {
            title: 'Thông tin chi tiết bhyt đã hoàn thành xác nhận',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].XacNhanBhytDaHoanThanh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
    }
];
let XacNhanBhytDaHoanThanhRoutingModule = class XacNhanBhytDaHoanThanhRoutingModule {
};
XacNhanBhytDaHoanThanhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], XacNhanBhytDaHoanThanhRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.model.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.model.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ThongTinXacNhanBhyt, DaXacNhanBhytList, LanXacNhanLogList, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinXacNhanBhyt", function() { return ThongTinXacNhanBhyt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaXacNhanBhytList", function() { return DaXacNhanBhytList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanXacNhanLogList", function() { return LanXacNhanLogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ThongTinXacNhanBhyt {
    constructor(Id = null, MaYeuCauTiepNhan = null, BenhNhanId = null, MaBN = null, HoTen = null, NamSinh = null, GioiTinh = null, DiaChi = null, SoDienThoai = null, Email = null, DoiTuongUuDai = null, CongTyUuDai = null, BHYTMaSoThe = null, BHYTngayHieuLucStr = null, BHYTngayHetHanStr = null, DKBD = null, LyDoVaoVienDisplay = null, GiayChuyenVienDisplay = null, GiayChuyenVienId = null, GiayMienCungChiTraDisplay = null, BHYTGiayMienCungChiTraId = null, BHYTMucHuong = null) {
        this.Id = Id;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.BenhNhanId = BenhNhanId;
        this.MaBN = MaBN;
        this.HoTen = HoTen;
        this.NamSinh = NamSinh;
        this.GioiTinh = GioiTinh;
        this.DiaChi = DiaChi;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.DoiTuongUuDai = DoiTuongUuDai;
        this.CongTyUuDai = CongTyUuDai;
        this.BHYTMaSoThe = BHYTMaSoThe;
        this.BHYTngayHieuLucStr = BHYTngayHieuLucStr;
        this.BHYTngayHetHanStr = BHYTngayHetHanStr;
        this.DKBD = DKBD;
        this.LyDoVaoVienDisplay = LyDoVaoVienDisplay;
        this.GiayChuyenVienDisplay = GiayChuyenVienDisplay;
        this.GiayChuyenVienId = GiayChuyenVienId;
        this.GiayMienCungChiTraDisplay = GiayMienCungChiTraDisplay;
        this.BHYTGiayMienCungChiTraId = BHYTGiayMienCungChiTraId;
        this.BHYTMucHuong = BHYTMucHuong;
    }
}
class DaXacNhanBhytList {
    constructor(STT = null, Nhom = null, MaDichVu = null, TenDichVu = null, LoaiGia = null, SoLuong = null, DonGiaBenhVien = null, ThanhTienBenhVien = null, DgbhytThamKhao = null, ThanhTienBhytThamKhao = null, TiLeBhyt = null, DgbhytChiTra = null, TtbhytChiTra = null, BnThanhToan = null) {
        this.STT = STT;
        this.Nhom = Nhom;
        this.MaDichVu = MaDichVu;
        this.TenDichVu = TenDichVu;
        this.LoaiGia = LoaiGia;
        this.SoLuong = SoLuong;
        this.DonGiaBenhVien = DonGiaBenhVien;
        this.ThanhTienBenhVien = ThanhTienBenhVien;
        this.DgbhytThamKhao = DgbhytThamKhao;
        this.ThanhTienBhytThamKhao = ThanhTienBhytThamKhao;
        this.TiLeBhyt = TiLeBhyt;
        this.DgbhytChiTra = DgbhytChiTra;
        this.TtbhytChiTra = TtbhytChiTra;
        this.BnThanhToan = BnThanhToan;
    }
}
class LanXacNhanLogList {
    constructor(Id = null, DaXacNhanBhyt = []) {
        this.Id = Id;
        this.DaXacNhanBhyt = DaXacNhanBhyt;
    }
}
class Search {
    constructor(SearchString = null, ThoiDiemDuyetBaoHiemTu = null, ThoiDiemDuyetBaoHiemDen = null, FromDate = null, ToDate = null) {
        this.SearchString = SearchString;
        this.ThoiDiemDuyetBaoHiemTu = ThoiDiemDuyetBaoHiemTu;
        this.ThoiDiemDuyetBaoHiemDen = ThoiDiemDuyetBaoHiemDen;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: XacNhanBhytDaHoanThanhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBhytDaHoanThanhModule", function() { return XacNhanBhytDaHoanThanhModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _xac_nhan_bhyt_da_hoan_thanh_list_xac_nhan_bhyt_da_hoan_thanh_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component.ts");
/* harmony import */ var _xac_nhan_bhyt_da_hoan_thanh_detailed_xac_nhan_bhyt_da_hoan_thanh_detailed_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component.ts");
/* harmony import */ var _xac_nhan_bhyt_da_hoan_thanh_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xac-nhan-bhyt-da-hoan-thanh.service */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.service.ts");
/* harmony import */ var _xac_nhan_bhyt_da_hoan_thanh_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./xac-nhan-bhyt-da-hoan-thanh-routing.module */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh-routing.module.ts");
/* harmony import */ var _da_xac_nhan_bhyt_list_da_xac_nhan_bhyt_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component.ts");
/* harmony import */ var _chi_tiet_lan_xac_nhan_list_chi_tiet_lan_xac_nhan_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component.ts");
/* harmony import */ var _list_duyet_history_list_duyet_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./list-duyet-history/list-duyet-history.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/list-duyet-history/list-duyet-history.component.ts");
/* harmony import */ var _lich_su_xac_nhan_bhyt_lich_su_xac_nhan_bhyt_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lich-su-xac-nhan-bhyt/lich-su-xac-nhan-bhyt.module */ "./src/app/modules/main/thu-chi/lich-su-xac-nhan-bhyt/lich-su-xac-nhan-bhyt.module.ts");























let XacNhanBhytDaHoanThanhModule = class XacNhanBhytDaHoanThanhModule {
};
XacNhanBhytDaHoanThanhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _xac_nhan_bhyt_da_hoan_thanh_list_xac_nhan_bhyt_da_hoan_thanh_list_component__WEBPACK_IMPORTED_MODULE_14__["XacNhanBhytDaHoanThanhListComponent"],
            _xac_nhan_bhyt_da_hoan_thanh_detailed_xac_nhan_bhyt_da_hoan_thanh_detailed_component__WEBPACK_IMPORTED_MODULE_15__["XacNhanBhytDaHoanThanhDetailedComponent"],
            _da_xac_nhan_bhyt_list_da_xac_nhan_bhyt_list_component__WEBPACK_IMPORTED_MODULE_18__["DaXacNhanBhytListComponent"],
            _chi_tiet_lan_xac_nhan_list_chi_tiet_lan_xac_nhan_list_component__WEBPACK_IMPORTED_MODULE_19__["ChiTietLanXacNhanListComponent"],
            _list_duyet_history_list_duyet_history_component__WEBPACK_IMPORTED_MODULE_20__["ListDuyetHistoryComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _xac_nhan_bhyt_da_hoan_thanh_routing_module__WEBPACK_IMPORTED_MODULE_17__["XacNhanBhytDaHoanThanhRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            _lich_su_xac_nhan_bhyt_lich_su_xac_nhan_bhyt_module__WEBPACK_IMPORTED_MODULE_21__["LichSuXacNhanBhytModule"]
        ],
        providers: [
            _xac_nhan_bhyt_da_hoan_thanh_service__WEBPACK_IMPORTED_MODULE_16__["XacNhanBHYTDaHoanThanhService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"], useClass: _xac_nhan_bhyt_da_hoan_thanh_service__WEBPACK_IMPORTED_MODULE_16__["XacNhanBHYTDaHoanThanhService"] },
        ],
        entryComponents: [
            _list_duyet_history_list_duyet_history_component__WEBPACK_IMPORTED_MODULE_20__["ListDuyetHistoryComponent"]
        ]
    })
], XacNhanBhytDaHoanThanhModule);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.service.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: XacNhanBHYTDaHoanThanhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBHYTDaHoanThanhService", function() { return XacNhanBHYTDaHoanThanhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let XacNhanBHYTDaHoanThanhService = class XacNhanBHYTDaHoanThanhService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'XacNhanBhytDaHoanThanh';
    }
};
XacNhanBHYTDaHoanThanhService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
XacNhanBHYTDaHoanThanhService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XacNhanBHYTDaHoanThanhService);



/***/ })

}]);
//# sourceMappingURL=thu-chi-xac-nhan-bhyt-da-hoan-thanh-xac-nhan-bhyt-da-hoan-thanh-module-es2015.js.map