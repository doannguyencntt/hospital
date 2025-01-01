(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thu-chi-xac-nhan-bhyt-xac-nhan-bhyt-module"],{

/***/ "./node_modules/@iconify/icons-ic/baseline-info.js":
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/baseline-info.js ***!
  \*********************************************************/
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--BEGIN GRID DANH SÁCH ĐANG CHỜ XÁC NHẬN BHYT -->\n<kendo-panelbar keepItemContent=\"true\">\n    <kendo-panelbar-item [title]=\"'DV HƯỞNG BHYT'\" expanded=\"true\">\n        <ng-template kendoPanelBarContent>\n            <app-grid [gridColumns]=\"gridColumnsChoXacNhanBHYT\" [useAddDeault]=\"false\" class=\"k-grid-border\"\n                #gridHuongBhyt [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"true\"\n                [autoHeight]=\"true\" style=\"width: 1px;\" [pageable]=\"false\" [groups]=\"groups\"\n                [gridDataSource]=\"dataHuongBh\" masterName=\"huongBhyt\" [removeGroupFooterIfIsOnlyOne]=\"true\"\n                [masterName]='bhytDuocHuong' (extCheckboxSelection)=\"extCheckboxSelectionDuocHuongBHYT($event)\">\n            </app-grid>\n        </ng-template>\n    </kendo-panelbar-item>\n    <kendo-panelbar-item [title]=\"'DV CHƯA ĐƯỢC HƯỞNG BHYT'\" expanded=\"true\">\n        <ng-template kendoPanelBarContent>\n            <app-grid [gridColumns]=\"gridColumnChuaDuocHuongBHYT\" [useAddDeault]=\"false\" class=\"k-grid-border\"\n                #gridChuaHuongBhyt [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"true\"\n                [autoHeight]=\"true\" style=\"width: 1px;\" [pageable]=\"false\" [groups]=\"groups\"\n                [gridDataSource]=\"dataChuaHuongBh\" masterName=\"chuaHuongBhyt\" [removeGroupFooterIfIsOnlyOne]=\"true\"\n                [masterName]='bhytChuaDuocHuong' (extCheckboxSelection)=\"extCheckboxSelectionKhongHuongBHYT($event)\">\n            </app-grid>\n        </ng-template>\n    </kendo-panelbar-item>\n</kendo-panelbar>\n\n<ng-template #tiLeTheoDvTemplate let-dataItem let-i=\"rowIndex\">\n    <span *ngIf=\"!dataItem.IsPttt || !dataItem.HuongBhyt\">{{dataItem.TiLeTheoDichVu}}%</span>\n    <div kendoTooltip>\n        <app-dropdownlist *ngIf=\"dataItem.IsPttt && dataItem.HuongBhyt && dataItem.CanModify\" id=\"tiLePtttCanModify\"\n            class=\"no-label\" [data]=\"ptPttts\" [(model)]=\"dataItem.LoaiPhanTram\" [modelText]=\"dataItem.LoaiPhanTramText\"\n            (selectionChange)=\"ChangeTiLeDvPttt($event, dataItem)\" popupSettings=\"null\">\n        </app-dropdownlist>\n        <app-dropdownlist *ngIf=\"dataItem.IsPttt && dataItem.HuongBhyt && !dataItem.CanModify\" id=\"tiLePtttReadOnly\"\n            title={{messageWarningTrangThaiThanhToan}} class=\"no-label\" [data]=\"ptPttts\"\n            [(model)]=\"dataItem.LoaiPhanTram\" [modelText]=\"dataItem.LoaiPhanTramText\" [disabled]=\"true\">\n        </app-dropdownlist>\n    </div>\n</ng-template>\n<ng-template #mucHuongTemplate let-dataItem let-i=\"rowIndex\">\n    <span *ngIf=\"!dataItem.HuongBhyt\">{{dataItem.MucHuong}}%</span>\n    <div class=\"xac-nhan-ng-muc-huong-da-duyet-template\" kendoTooltip>\n        <span *ngIf=\"dataItem.showInfoChangeMucHuongDuyet && dataItem.HuongBhyt && dataItem.CanModify\" class=\"xac-nhan-ng-muc-huong-da-duyet-template\" kendoTooltip>\n            <mat-icon (mouseover)=\"showMucHuongDaDuyetTooltip(dataItem)\" [icIcon]=\"icWarning\" class=\"warning\"\n                title={{currentWarningMucHuongDaDuyetMessage}}>\"\"</mat-icon>\n        </span>\n        <app-textboxnumeric *ngIf=\"dataItem.HuongBhyt && dataItem.CanModify\" [(model)]=\"dataItem.MucHuong\"\n            class=\"no-label\" [max]=\"100\" (modelChange)=\"onChangeTiLe(dataItem, $event)\"\n            [validationerror]=\"'BenefitInsurance[' + i + '].MucHuong' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <app-textboxnumeric title={{messageWarningTrangThaiThanhToan}} *ngIf=\"dataItem.HuongBhyt && !dataItem.CanModify\"\n            [(model)]=\"dataItem.MucHuong\" [readonly]=\"true\" class=\"no-label\">\n        </app-textboxnumeric>\n    </div>\n</ng-template>\n<!-- Đơn giá bệnh viện template-->\n<ng-template #donGiaBenhVienTemplate let-dataItem>\n    {{dataItem.DonGiaBenhVien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<!-- Đơn giá bhyt chi trả template-->\n<ng-template #templateDGBHYTCT let-dataItem>\n    {{dataItem.DGBHYTChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<!-- Thành tiền custome grid -->\n<ng-template #thanhTienTemplate let-dataItem>\n    {{dataItem.ThanhTienBenhVien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #thanhTienGroupFooterTemplate let-aggregates>\n    {{aggregates.ThanhTienBenhVien.sum | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #thanhTienKhongDuocHuongBHYTGroupFooterTemplate let-aggregates>\n    {{aggregates.ThanhTienBenhVien.sum | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #donGiaGroupFooterTemplate let-dataItem>\n    <span style=\"float: right;\">Cộng:</span>\n</ng-template>\n<ng-template #donGiaFooterTemplate let-dataItem>\n    <span style=\"float: right;\">Tổng:</span>\n</ng-template>\n<ng-template #thanhTienFooterTemplate let-aggregates>\n    <span style=\"color:blue\">{{totalThanhTienDHBHYT('ThanhTienBenhVien', aggregates) | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n<ng-template #thanhTienKHBHYTFooterTemplate let-aggregates>\n    <span style=\"color:blue\">{{totalThanhTienKDHBHYT('ThanhTienBenhVien', aggregates) | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n\n<ng-template #dgbhytThamKhaoTemplate let-dataItem>\n    {{dataItem.DGBHYTThamKhao | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #thanhTienBHYTThamKhaoTemplate let-dataItem>\n    {{dataItem.ThanhTienBHYTThamKhao | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n\n<ng-template #ttBHYTChiTraTemplate let-dataItem>\n    {{dataItem.TTBHYTChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #ttBHYTChiTraGroupFooterTemplate let-aggregates>\n    {{aggregates.TTBHYTChiTra.sum | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #ttBHYTChiTraFooterTemplate let-aggregates>\n    <span>{{totalTTBHYTChiTraDHBHYT('TTBHYTChiTra', aggregates) | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n<ng-template #ttKBHYTChiTraFooterTemplate let-aggregates>\n    <span>{{totalTTBHYTChiTraKDHBHYT('TTBHYTChiTra', aggregates) | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n\n\n<ng-template #bnThanhToanTemplate let-dataItem>\n    {{dataItem.BNThanhToan | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #bnThanhToanGroupFooterTemplate let-aggregates>\n    {{aggregates.BNThanhToan.sum | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #bnThanhToanFooterTemplate let-aggregates>\n    <span style=\"color:red\">{{totalBNConPhaiThanhToanDHBHYT('BNThanhToan', aggregates) | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n\n<ng-template #bnThanhKhongDHBHYTFooterTemplate let-aggregates>\n    <span style=\"color:red\">{{totalBNConPhaiThanhToanKHBHYT('BNThanhToan', aggregates) | number:'0.2-2':'vi-VN'}}</span>\n</ng-template>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #tenDvTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr>\n                <td colspan=\"2\" class=\"red\">CHẨN ĐOÁN ICD CHÍNH</td>\n            </tr>\n            <tr>\n                <th align=\"left\">ICD</th>\n                <th align=\"left\">CHẨN ĐOÁN</th>\n            </tr>\n            <tr>\n                <td>{{icdChinh}}</td>\n                <td>{{ghiChuIcd}}</td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" class=\"red\">CHẨN ĐOÁN ICD KÈM THEO</td>\n            </tr>\n            <tr>\n                <th align=\"left\">ICD</th>\n                <th align=\"left\">CHẨN ĐOÁN</th>\n            </tr>\n            <tr *ngFor=\"let icd of icdKems\">\n                <td>{{icd.Icd}}</td>\n                <td>{{icd.GhiChu}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"xac-nhan-ng-template\" kendoTooltip>\n        <span *ngIf=\"dataItem.GroupType == 1\" class=\"xac-nhan-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\"\n            tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"setUpIcdTooltip(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n        <span *ngIf=\"dataItem.IsWarning\" class=\"xac-nhan-ng-template\" kendoTooltip>\n            <mat-icon (mouseover)=\"showTooltip(dataItem)\" [icIcon]=\"icWarning\" class=\"warning\"\n                title={{currentWarningMessage}}></mat-icon>\n        </span>\n        <span class=\"ten-dich-vu-label\" title={{dataItem.TenDichVu}}>{{dataItem.TenDichVu}}</span>\n    </div>\n</ng-template>\n\n<ng-template #sttTemplate let-i=\"rowIndex\">\n    {{i + 1}}\n</ng-template>\n\n<ng-template #huongBhytTemplate let-dataItem>\n    <section class=\"check-box-huong-bhyt\">\n        <div kendoTooltip>\n            <app-checkbox *ngIf=\"dataItem.CanModify\" value=\"true\" id=\"check-{{dataItem.Id}}\"\n                [(model)]=\"dataItem.HuongBhyt\" label=\"\" (modelChange)=\"OnChangeHuongBhyt(dataItem)\">\n            </app-checkbox>\n            <app-checkbox *ngIf=\"!dataItem.CanModify\" value=\"true\" id=\"check-{{dataItem.Id}}\" [disabled]=\"true\"\n                [(model)]=\"dataItem.HuongBhyt\" label=\"\" title={{messageWarningTrangThaiThanhToan}}>\n            </app-checkbox>\n        </div>\n    </section>\n\n\n</ng-template>\n\n\n\n<ng-template #actionTemplate let-dataItem>\n    <div *ngIf=\"dataItem.ShowHistory\" class=\"xac-nhan-ng-template\" kendoTooltip>\n        <mat-icon [icIcon]=\"icHistory\" (click)=\"lichSuXacNhan(dataItem)\" title=\"Lịch sử xác nhận\"></mat-icon>\n    </div>\n</ng-template>\n\n<!--END GRID DANH SÁCH ĐANG CHỜ XÁC NHẬN BHYT -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                        {Title:'Ngoại Trú',Path:''},\n                        {Title:'Xác Nhận BHYT',Path:''},\n                        {Title:'DS Xác Nhận BHYT',Path:'/xac-nhan-bhyt/ngoai-tru', queryParams: {holdQuery : true}, Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n            {Key:'Ctrl + S',Description:'Lưu'},\n            {Key:'Esc',Description:'Hủy', End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                            <!-- Thông tin hành chính -->\n                            <div fxFlex=\"100%\">\n                                <fieldset>\n                                    <legend>Thông tin hành chính</legend>\n                                    <div fxFlex=\"100%\">\n                                        <ul class=\"inline\">\n                                            <li>Mã TN:\n                                                <strong>\n                                                    {{thongTinHanhChinh.MaTN}}\n                                                </strong>\n                                            </li>\n                                            <li>Mã NB:\n                                                <strong>\n                                                    {{thongTinHanhChinh.MaBN}}\n                                                </strong>\n                                            </li>\n                                            <li>Họ Tên:\n                                                <strong>\n                                                    {{thongTinHanhChinh.HoTen}}\n                                                </strong>\n                                            </li>\n                                            <li>Năm Sinh:\n                                                <strong>\n                                                    {{thongTinHanhChinh.NamSinh}}\n                                                </strong>\n                                            </li>\n                                            <li>Địa chỉ:\n                                                <strong>\n                                                    {{thongTinHanhChinh.DiaChi}}\n                                                </strong>\n                                            </li>\n                                            <li>Số điện thoại:\n                                                <strong>\n                                                    {{thongTinHanhChinh.SoDienThoaiStr}}\n                                                </strong>\n                                            </li>\n                                            <li>Email:\n                                                <strong>\n                                                    {{thongTinHanhChinh.Email}}\n                                                </strong>\n                                            </li>\n                                            <li>Đối tượng ưu đãi:\n                                                <strong>\n                                                    {{thongTinHanhChinh.DoiTuongUuDai}}\n                                                </strong>\n                                            </li>\n                                            <li>Công ty ưu đãi:\n                                                <strong>\n                                                    {{thongTinHanhChinh.CongTyUuDai}}\n                                                </strong>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </fieldset>\n                            </div>\n                            <!-- Thông tin bảo hiểm y tế -->\n                            <div fxFlex=\"100%\">\n                                <fieldset>\n                                    <legend>Thông tin BHYT</legend>\n                                    <div fxFlex=\"100%\">\n                                        <ul class=\"inline\">\n                                            <li>Số thẻ:\n                                                <strong>\n                                                    {{thongTinBaoHiemXaHoi.SoThe}}\n                                                </strong>\n                                            </li>\n                                            <li>Ngày hiệu lực:\n                                                <strong>\n                                                    {{thongTinBaoHiemXaHoi.NgayHieuLucStr}}\n                                                </strong>\n                                            </li>\n                                            <li>Ngày hết hạn:\n                                                <strong>\n                                                    {{thongTinBaoHiemXaHoi.NgayHetHanStr}}\n                                                </strong>\n                                            </li>\n                                            <li>Nơi đăng ký khám BH:\n                                                <strong>\n                                                    {{thongTinBaoHiemXaHoi.NoiDangKyKhamBenh}}\n                                                </strong>\n                                            </li>\n                                            <li>Mức hưởng:\n                                                <strong>\n                                                    {{thongTinBaoHiemXaHoi.MucHuong}} %\n                                                </strong>\n                                            </li>\n                                            <li>Tuyến khám:\n                                                <strong class=\"color-green\">\n                                                    {{thongTinBaoHiemXaHoi.TuyenKham}}\n                                                </strong>\n                                            </li>\n                                            <li>Giấy chuyển viện:\n                                                <strong *ngIf=\"thongTinBaoHiemXaHoi.GiayChuyenVien !== null\">\n                                                    <a class=\"color-blue\"\n                                                        (click)=\"viewDocument(thongTinBaoHiemXaHoi.GiayChuyenVienId, 1)\">{{thongTinBaoHiemXaHoi.GiayChuyenVien}}\n                                                    </a>\n                                                </strong>\n                                            </li>\n                                            <li>Giấy miễn cùng chi trả:\n                                                <strong *ngIf=\"thongTinBaoHiemXaHoi.GiayMiemCungTriTra !== null\">\n                                                    <a class=\"color-blue\"\n                                                        (click)=\"viewDocument(thongTinBaoHiemXaHoi.GiayMienCungTriTraId, 2)\">{{thongTinBaoHiemXaHoi.GiayMiemCungTriTra}}\n                                                    </a>\n                                                </strong>\n                                            </li>\n                                            <li>Nơi chuyển đi: \n                                                <strong >\n                                                    {{thongTinBaoHiemXaHoi.NoiChuyenDi}}\n                                                </strong>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </fieldset>\n                            </div>\n\n                            <!-- Thông tin xác nhận -->\n                            <div fxFlex=\"100%\">\n                                <fieldset>\n                                    <legend>Thông tin xác nhận</legend>\n                                    <div fxFlex=\"100%\">                                     \n                                        <app-bhyt-thong-tin-xac-nhan [bhytInfo]=\"thongTinBaoHiemXaHoi\"                                           \n                                            [bhytHanhChinh]=\"thongTinHanhChinh\" [validationErrors]=\"errors\" #bhytGrid>\n                                        </app-bhyt-thong-tin-xac-nhan>\n                                    </div>\n                                </fieldset>\n                            </div>\n\n                            <div fxFlex=\"100%\" class=\"sticky-button-action py-3 text-right\">\n                                <div class=\"py-3 text-right\" kendoTooltip>\n                                    <div style=\"float: left;\">\n                                        <button (click)=\"onHuy()\" type=\"button\" mat-button class=\"mr-2\">Quay\n                                            lại</button>\n                                    </div>\n                                    <button (click)=\"phieuLinhThuocBenhNhanBHYT()\" color=\"primary\" mat-raised-button\n                                        class=\"mr-2\"> Phiếu lĩnh thuốc\n                                    </button>\n                                    <button (click)=\"onHuyDuyet()\" type=\"button\" class=\"mr-2\" color=\"warn\"\n                                        mat-raised-button>Hủy\n                                        Duyệt</button>\n                                    <button (click)=\"onXacNhan()\" type=\"button\" color=\"primary\" mat-raised-button\n                                        title=\"Phím tắt: Ctrl + S\">Duyệt</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"\n            [\n                {Title:'Ngoại Trú',Path:''},\n                {Title:'Xác Nhận BHYT',Path:''},\n                {Title:'DS Xác Nhận BHYT',Path:'', Active:true}\n            ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n            {Key:'Ctrl + Q', Description:'Quét mã vạch',End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid *ngIf=\"kiemTraDanhSachThanhToan\" baseRoute=\"/xac-nhan-bhyt/ngoai-tru/danh-sach-cho-xac-nhan-bhyt\"\n                #gridListXacNhan [gridColumns]=\"gridChoNhanBhytColumns\" [sort]=\"sortConfig\" [useActionDefault]=\"false\"\n                [pageSize]=\"20\" [lazyLoadPage]=\"false\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [searchString]=\"xacNhanBhyt.SearchString\" [checkboxAble]=\"false\"\n                [additionalSearchString]=\"additionalSearchString\" [documentType]=\"documentType\">\n            </app-grid>\n        </div>\n    </vex-page-layout-content>\n    <!-- action chuẩn bị khám -->\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThai($event,1)\" fxFlex=\"127px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                [(model)]=\"xacNhanBhyt.ChuaXacNhan\" value=\"dangthanhtoan\" label=\"Chờ xác nhận\">\n            </app-checkbox>\n            <app-checkbox name=\"da-thanh-toan\" (modelChange)=\"checkTrangThai($event,2)\"\n                [(model)]=\"xacNhanBhyt.DaXacNhan\" value=\"dathanhtoan\" fxFlex=\"127px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã xác nhận\">\n            </app-checkbox>\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\" kendoTooltip>\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"xacNhanBhyt.SearchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"searchChanges($event)\"\n                    placeholder=\"Nhập từ khóa(Mã NB,Tên NB,Năm sinh,Địa chỉ)...\" />\n                <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n                    class=\"button-barcoe-in-search\" title=\"Phím tắt: Ctrl + Q\">\n                    <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                </button>\n            </div>\n            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n            <app-datetimepicker fxFlex=\"205px\" [(model)]=\"xacNhanBhyt.ThoiDiemTiepNhanTu\" #tiepnhantu id=\"tiep-nhan-tu\"\n                (modelChange)=\"thoiDiemTNChange()\" label=\"Tiếp nhận từ\" class=\"ml-2 on-header\">\n            </app-datetimepicker>\n            <app-datetimepicker fxFlex=\"205px\" [(model)]=\"xacNhanBhyt.ThoiDiemTiepNhanDen\" #tiepnhanden\n                id=\"tiep-nhan-den\" (modelChange)=\"thoiDiemTNChange()\" label=\"Tiếp nhận đến\" class=\"ml-2 on-header\">\n            </app-datetimepicker>\n            <div fxFlex=\"65%\" fxFlex.sm=\"40%\"></div>\n            <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                title=\"Lọc cột\" type=\"button\">\n                <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n            </button>\n\n            <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <div *ngFor=\"let column of gridChoNhanBhytColumns\">\n                    <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                        <mat-checkbox (click)=\"toggleColumnVisibility(column, $event)\" [disabled]=\"!column.HasFilter\"\n                            [(ngModel)]=\"column.Visible\" color=\"primary\">\n                            {{ column.Title }}\n                        </mat-checkbox>\n                    </button>\n                </div>\n            </mat-menu>\n            <button (click)=\"exportExcel()\" class=\"ml-3\" fxFlex=\"1%\" fxFlex.sm=\"1%\" mat-icon-button kendoTooltip\n                title=\"Xuất Excel\" type=\"button\">\n                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #statusTemplate let-dataItem>\n        <strong *ngIf=\"dataItem.ChuaXacNhan\" class=\"text-color\">\n            Chờ xác nhận</strong>\n        <strong class=\"blue-color\" *ngIf=\"!dataItem.ChuaXacNhan\">Đã xác nhận</strong>\n    </ng-template>\n\n    <ng-template #maTNTemplate let-dataItem>\n        <a (click)=\"thongTinChiTiet(dataItem)\">{{dataItem.MaTN}}</a>\n    </ng-template>\n</vex-page-layout>\n<ng-template #orderTemplate let-i=\"rowIndex\"><span>{{i+1}}</span></ng-template>\n<ng-template #templateTextSoTienDaXacNhan let-dataItem>\n    <strong style=\"color:blue\">{{dataItem.SoTienDaXacNhan | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoTienChoXacNhan let-dataItem>\n    <strong class=\"text-color\"> {{dataItem.SoTienChoXacNhan | number:'0.2-2':'vi-VN'}} </strong>\n</ng-template>\n<ng-template #templateTextSoTienDaXacNhanDaXacNhan let-dataItem>\n    <strong class=\"text-color\"> {{dataItem.SoTienDaXacNhan | number:'0.2-2':'vi-VN'}} </strong>\n</ng-template>\n<ng-template #thoiDiemTiepNhanDisplay let-dataItem>\n    <span> {{dataItem.ThoiDiemTiepNhanDisplay}} </span>\n</ng-template>\n\n<ng-template #huongXuLyDisplay let-dataItem>\n    <strong style=\"color:red\">{{dataItem.HuongXuLy}}</strong>\n</ng-template>\n\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"title\">\n    <h3>Lịch sử đã xác nhận</h3>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"py-1 content\">\n        <fieldset class=\"row ml-1\" fxFlex=\"100%\">\n            <legend>Dịch vụ: <span>{{tenDichVu}}</span></legend>\n            <app-grid [gridColumns]=\"gridHistory\" [useAddDeault]=\"false\" class=\"k-grid-border\" #gridHuongBhyt [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [autoHeight]=\"true\" style=\"width: 1px;\" [pageable]=\"false\" [gridDataSource]=\"dataSourceDanhSachLichSuXacNhan\"\n                masterName=\"huongBhyt\" [removeGroupFooterIfIsOnlyOne]=\"true\">\n            </app-grid>\n        </fieldset>\n    </div>\n</mat-dialog-content>\n\n<ng-template #orderTemplate let-i=\"rowIndex\">\n    {{i + 1}}\n</ng-template>\n\n<ng-template #dgbhTemplate let-dataItem>\n    {{dataItem.DgBh | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #ttbhTemplate let-dataItem>\n    {{dataItem.TtBh | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #tlDvTemplate let-dataItem>\n    <span>{{dataItem.TiLeDv}}%</span>\n</ng-template>\n\n<ng-template #mucHuongTemplate let-dataItem>\n    <span>{{dataItem.MucHuong}}%</span>\n</ng-template>\n\n<ng-template #dgbhChiTraTemplate let-dataItem>\n    {{dataItem.DgBhChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #ttbhChiTraTemplate let-dataItem>\n    {{dataItem.TtBhChiTra | number:'0.2-2':'vi-VN'}}\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".xac-nhan-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.xac-nhan-ng-muc-huong-da-duyet-template {\n  white-space: nowrap;\n}\n\n.title {\n  font-size: 15px;\n  background: #ebeced;\n  border: 1px solid #ccc;\n  padding: 5px;\n}\n\nmat-icon {\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.warning {\n  margin-bottom: -8px;\n  margin-top: 0px;\n  color: #ff5722;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n  color: #00bcd4;\n}\n\n.ten-dich-vu-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.tooltip-block {\n  background: #005dab;\n  color: #fff;\n}\n\n.tooltip-block * {\n  font-size: 13px;\n}\n\nsection.check-box-huong-bhyt {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9iaHl0LXRob25nLXRpbi14YWMtbmhhbi9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRodS1jaGlcXHhhYy1uaGFuLWJoeXRcXGJoeXQtdGhvbmctdGluLXhhYy1uaGFuXFxiaHl0LXRob25nLXRpbi14YWMtbmhhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9iaHl0LXRob25nLXRpbi14YWMtbmhhbi9iaHl0LXRob25nLXRpbi14YWMtbmhhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3hhYy1uaGFuLWJoeXQvYmh5dC10aG9uZy10aW4teGFjLW5oYW4vYmh5dC10aG9uZy10aW4teGFjLW5oYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueGFjLW5oYW4tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi54YWMtbmhhbi1uZy1tdWMtaHVvbmctZGEtZHV5ZXQtdGVtcGxhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLndhcm5pbmcge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjZmY1NzIyO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICMwMGJjZDQ7XG59XG5cbi50ZW4tZGljaC12dS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50b29sdGlwLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogIzAwNWRhYjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b29sdGlwLWJsb2NrICoge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnNlY3Rpb24uY2hlY2stYm94LWh1b25nLWJoeXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iLCIueGFjLW5oYW4tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi54YWMtbmhhbi1uZy1tdWMtaHVvbmctZGEtZHV5ZXQtdGVtcGxhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLndhcm5pbmcge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjZmY1NzIyO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICMwMGJjZDQ7XG59XG5cbi50ZW4tZGljaC12dS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50b29sdGlwLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogIzAwNWRhYjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b29sdGlwLWJsb2NrICoge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnNlY3Rpb24uY2hlY2stYm94LWh1b25nLWJoeXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BhytThongTinXacNhanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BhytThongTinXacNhanComponent", function() { return BhytThongTinXacNhanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-history */ "./node_modules/@iconify/icons-ic/twotone-history.js");
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-warning */ "./node_modules/@iconify/icons-ic/twotone-warning.js");
/* harmony import */ var _iconify_icons_ic_twotone_warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _xac_nhan_bhyt_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../xac-nhan-bhyt.model */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.model.ts");
/* harmony import */ var src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/bhyt-type.enum */ "./src/app/shared/enum/bhyt-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/nhom-goi-dich-vu.enum */ "./src/app/shared/enum/nhom-goi-dich-vu.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _danh_sach_lich_xac_nhan_danh_sach_lich_xac_nhan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.ts");



















let BhytThongTinXacNhanComponent = class BhytThongTinXacNhanComponent {
    constructor(route, apiService, baseService, notificationService, dialog, authService, cdRef) {
        this.route = route;
        this.apiService = apiService;
        this.baseService = baseService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.authService = authService;
        this.cdRef = cdRef;
        this.gridColumnsChoXacNhanBHYT = [];
        this.gridColumnChuaDuocHuongBHYT = [];
        this.serviceGroupIds = [];
        this.dataHuongBh = {
            data: [],
            total: 0
        };
        this.dataChuaHuongBh = {
            data: [],
            total: 0
        };
        this.urlGetDataGridDaHuong = 'XacNhanBHYT/GetDataForDvHuongBhytAsync';
        this.urlGetDataGridChuaHuong = 'XacNhanBHYT/GetDataForDvChuaHuongBhytAsync';
        this.thisId = this.route.snapshot.params.id;
        this.icHistory = _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icWarning = _iconify_icons_ic_twotone_warning__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.searchString = null;
        this.skip = 0;
        this.pageSize = 10;
        this.IsRequestHuongBhyt = false;
        this.IsRequestChuaHuongBhyt = false;
        this.sort = [{
                field: 'Id',
                dir: 'asc'
            }];
        this.lazyLoadPage = false;
        this.currentWarningMessage = null;
        this.currentWarningMucHuongDaDuyetMessage = null;
        this.currentBenefitRatio = null;
        this.icdChinh = null;
        this.ghiChuIcd = null;
        this.mucHuong15Percent = null;
        this.icdKems = [];
        this.ptPttts = [];
        this.messageWarningTrangThaiThanhToan = src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["DuyetBhytMessage"].MessageNotAllowModifyDaThanhToan;
        this.percentTypeForPtttLabel = new Map([
            [src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["PercentTypeForPttt"].Per100, '100%'],
            [src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["PercentTypeForPttt"].Per80, '80%'],
            [src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["PercentTypeForPttt"].Per50, '50%']
        ]);
        this.bhytDuocHuong = "bhytDuocHuong";
        this.bhytChuaDuocHuong = "bhytChuaDuocHuong";
        this.groups = [{
                field: 'Nhom', aggregates: [
                    { field: 'ThanhTienBenhVien', aggregate: 'sum' },
                    { field: 'TTBHYTChiTra', aggregate: 'sum' },
                    { field: 'BNThanhToan', aggregate: 'sum' }
                ]
            }];
    }
    totalThanhTienDHBHYT(field, typeGrid) {
        switch (field) {
            case 'ThanhTienBenhVien': {
                if (this.dataHuongBh.data.length !== 0) {
                    return this.dataHuongBh.data.reduce((sum, item) => sum + item.ThanhTienBenhVien, 0);
                }
            }
        }
    }
    totalThanhTienKDHBHYT(field, typeGrid) {
        switch (field) {
            case 'ThanhTienBenhVien': {
                if (this.dataChuaHuongBh.data.length !== 0) {
                    return this.dataChuaHuongBh.data.reduce((sum, item) => sum + item.ThanhTienBenhVien, 0);
                }
            }
        }
    }
    totalTTBHYTChiTraDHBHYT(field, typeGrid) {
        switch (field) {
            case 'TTBHYTChiTra': {
                if (this.dataHuongBh.data.length !== 0) {
                    return this.dataHuongBh.data.reduce((sum, item) => sum + item.TTBHYTChiTra, 0);
                }
            }
        }
    }
    totalTTBHYTChiTraKDHBHYT(field, typeGrid) {
        switch (field) {
            case 'TTBHYTChiTra': {
                if (this.dataChuaHuongBh.data.length !== 0) {
                    return this.dataChuaHuongBh.data.reduce((sum, item) => sum + item.TTBHYTChiTra, 0);
                }
            }
        }
    }
    totalBNConPhaiThanhToanDHBHYT(field, typeGrid) {
        switch (field) {
            case 'BNThanhToan': {
                if (this.dataHuongBh.data.length !== 0) {
                    return this.dataHuongBh.data.reduce((sum, item) => sum + item.BNThanhToan, 0);
                }
            }
        }
    }
    totalBNConPhaiThanhToanKHBHYT(field, typeGrid) {
        switch (field) {
            case 'BNThanhToan': {
                if (this.dataChuaHuongBh.data.length !== 0) {
                    return this.dataChuaHuongBh.data.reduce((sum, item) => sum + item.BNThanhToan, 0);
                }
            }
        }
    }
    ngOnInit() {
        const self = this;
        self.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].XacNhanBHYT;
        self.take = (this.pageSize * this.skip) + this.pageSize;
        self.gridColumnsChoXacNhanBHYT = [
            { Field: 'STT', Title: '#', Width: 35, Template: self.sttTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Hidden: true },
            { Field: 'MaDichVu', Title: 'Mã', ShowTooltip: true, Width: 60 },
            { Field: 'TenDichVu', Title: 'Tên dịch vụ', Width: 150, ShowTooltip: true, Template: self.tenDvTemplate },
            { Field: 'LoaiGia', Title: 'Loại giá', Width: 80 },
            { Field: 'SoLuong', Title: 'SL', Width: 40 },
            {
                Field: 'DonGiaBenhVien', Title: 'ĐG doanh thu', Width: 114, Template: self.donGiaBenhVienTemplate,
                TemplateGroupFooter: self.donGiaGroupFooterTemplate, TemplateFooter: self.donGiaFooterTemplate
            },
            {
                Field: 'ThanhTienBenhVien', Title: 'Thành Tiền', Width: 96, Template: self.thanhTienTemplate,
                TemplateFooter: self.thanhTienFooterTemplate, TemplateGroupFooter: self.thanhTienGroupFooterTemplate
            },
            { Field: 'DGBHYTThamKhao', Title: 'ĐG BHYT', Width: 93, Template: self.dgbhytThamKhaoTemplate },
            { Field: 'ThanhTienBHYTThamKhao', Title: 'Thành tiền BHYT', Width: 131, Template: self.thanhTienBHYTThamKhaoTemplate },
            { Field: 'HuongBhyt', Title: 'BHYT CHI TRẢ', Width: 73, Template: self.huongBhytTemplate },
            { Field: 'TiLeTheoDichVu', Title: 'Tỉ lệ theo dịch vụ (%)', Width: 161, Template: self.tiLeTheoDvTemplate },
            { Field: 'MucHuong', Title: 'Mức hưởng (%)', Width: 118, Template: self.mucHuongTemplate },
            { Field: 'DGBHYTChiTra', Title: 'ĐG BHYT chi trả', Width: 129, Template: self.templateDGBHYTCT },
            {
                Field: 'TTBHYTChiTra', Title: 'TT BHYT Chi Trả', Width: 127, Template: self.ttBHYTChiTraTemplate,
                TemplateFooter: self.ttBHYTChiTraFooterTemplate, TemplateGroupFooter: self.ttBHYTChiTraGroupFooterTemplate
            },
            {
                Field: 'BNThanhToan', Title: 'BN thanh toán', Width: 124, Template: self.bnThanhToanTemplate,
                TemplateFooter: self.bnThanhToanFooterTemplate, TemplateGroupFooter: self.bnThanhToanGroupFooterTemplate
            },
            {
                Field: 'Action', Title: '', Width: 83, Template: self.actionTemplate
            }
        ];
        self.gridColumnChuaDuocHuongBHYT = [
            { Field: 'STT', Title: '#', Width: 35, Template: self.sttTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Hidden: true },
            { Field: 'MaDichVu', Title: 'Mã', ShowTooltip: true, Width: 60 },
            { Field: 'TenDichVu', Title: 'Tên dịch vụ', Width: 150, ShowTooltip: true, Template: self.tenDvTemplate },
            { Field: 'LoaiGia', Title: 'Loại giá', Width: 80 },
            { Field: 'SoLuong', Title: 'SL', Width: 40 },
            {
                Field: 'DonGiaBenhVien', Title: 'ĐG doanh thu', Width: 114, Template: self.donGiaBenhVienTemplate,
                TemplateGroupFooter: self.donGiaGroupFooterTemplate, TemplateFooter: self.donGiaFooterTemplate
            },
            {
                Field: 'ThanhTienBenhVien', Title: 'Thành Tiền', Width: 96, Template: self.thanhTienTemplate,
                TemplateFooter: self.thanhTienKHBHYTFooterTemplate, TemplateGroupFooter: self.thanhTienKhongDuocHuongBHYTGroupFooterTemplate
            },
            { Field: 'DGBHYTThamKhao', Title: 'ĐG BHYT', Width: 93, Template: self.dgbhytThamKhaoTemplate },
            { Field: 'ThanhTienBHYTThamKhao', Title: 'Thành tiền BHYT', Width: 131, Template: self.thanhTienBHYTThamKhaoTemplate },
            { Field: 'HuongBhyt', Title: 'DUYỆT BHYT', Width: 73, Template: self.huongBhytTemplate },
            { Field: 'TiLeTheoDichVu', Title: 'Tỉ lệ theo dịch vụ (%)', Width: 161, Template: self.tiLeTheoDvTemplate },
            { Field: 'MucHuong', Title: 'Mức hưởng (%)', Width: 118, Template: self.mucHuongTemplate },
            { Field: 'DGBHYTChiTra', Title: 'ĐG BHYT chi trả', Width: 129, Template: self.templateDGBHYTCT },
            {
                Field: 'TTBHYTChiTra', Title: 'TT BHYT Chi Trả', Width: 127, Template: self.ttBHYTChiTraTemplate,
                TemplateFooter: self.ttKBHYTChiTraFooterTemplate, TemplateGroupFooter: self.ttKDBHYTChiTraGroupFooterTemplate
            },
            {
                Field: 'BNThanhToan', Title: 'BN thanh toán', Width: 124, Template: self.bnThanhToanTemplate,
                TemplateFooter: self.bnThanhKhongDHBHYTFooterTemplate, TemplateGroupFooter: self.bnThanhKhongDHBHYTToanGroupFooterTemplate
            },
            {
                Field: 'Action', Title: '', Width: 83, Template: self.actionTemplate
            }
        ];
        self.GetListLoaiPhanTramForPttt();
        self.GetMucHuong15Percent();
    }
    extCheckboxSelectionDuocHuongBHYT(dataDaChon) {
        if (dataDaChon.length > 0) {
            for (let index = 0; index < dataDaChon.length; index++) {
                this.dataHuongBh.data.forEach(dataItem => {
                    {
                        if (dataItem.Id == dataDaChon[index]) {
                            return (dataItem.CheckedDefault = true);
                        }
                    }
                });
            }
        }
    }
    extCheckboxSelectionKhongHuongBHYT(dataDaChon) {
        if (dataDaChon.length > 0) {
            for (let index = 0; index < dataDaChon.length; index++) {
                this.dataChuaHuongBh.data.forEach(element => {
                    {
                        if (element.Id == dataDaChon[index]) {
                            return (element.CheckedDefault = true);
                        }
                    }
                });
            }
        }
    }
    CloseLoading() {
        this.dialog.closeAll();
    }
    GetMucHuong15Percent() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
            self.apiService
                .get('TiepNhanBenhNhan/GetSoTienBHYTSeThanhToan')
                .subscribe(resultData => {
                self.mucHuong15Percent = resultData;
                self.GetDataForBhytDuocHuong();
                self.GetDataForBhytChuaDuocHuong();
            }, err => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    GetDataForBhytDuocHuong() {
        const self = this;
        // tslint:disable-next-line: triple-equals
        let searchText = self.searchString != undefined ? self.searchString : '';
        searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].convertSpecialXML(searchText);
        searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
        self.gridQueryInfo = {
            skip: self.skip, take: self.take, pageSize: self.pageSize, searchString: searchText,
            additionalSearchString: self.thisId.toString(), sort: self.sort, lazyLoadPage: self.lazyLoadPage
        };
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
            self.baseService.getDataForGrid(self.gridQueryInfo, self.urlGetDataGridDaHuong)
                .subscribe((resultData) => {
                self.IsRequestHuongBhyt = true;
                self.dataHuongBh.data = resultData.Data;
                self.dataHuongBh.data.filter(x => x.IsDaXacNhan).forEach(daXacNhanItem => {
                    daXacNhanItem.HighLightClass = 'bg-row-lightblue';
                });
                if (self.IsRequestChuaHuongBhyt && self.IsRequestHuongBhyt) {
                    self.SetWarning();
                }
                setTimeout(() => {
                    self.dataHuongBh.data.forEach((element) => {
                        if (!element.CanModify) {
                            $('#' + 'bhytDuocHuongselectCheckboxId' + element.Id).attr('disabled', true);
                            $('#' + 'bhytDuocHuongselectAllCheckboxId').attr('disabled', true);
                        }
                        if (element.CheckedDefault) {
                            $('#' + 'bhytDuocHuongselectCheckboxId' + element.Id).trigger('click');
                        }
                    });
                }, 300);
                this.kiemTraDuyetTruocDo();
            }, err => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    GetDataForBhytChuaDuocHuong() {
        const self = this;
        // tslint:disable-next-line: triple-equals
        let searchText = self.searchString != undefined ? self.searchString : '';
        searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].convertSpecialXML(searchText);
        searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
        self.gridQueryInfo = {
            skip: self.skip, take: self.take, pageSize: self.pageSize, searchString: searchText,
            additionalSearchString: self.thisId.toString(), sort: self.sort, lazyLoadPage: self.lazyLoadPage
        };
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
            self.baseService.getDataForGrid(self.gridQueryInfo, self.urlGetDataGridChuaHuong)
                .subscribe((resultData) => {
                self.IsRequestChuaHuongBhyt = true;
                self.dataChuaHuongBh.data = resultData.Data;
                self.dataChuaHuongBh.data.filter(x => x.IsDaXacNhan).forEach(daXacNhanItem => {
                    daXacNhanItem.HighLightClass = 'bg-row-lightblue';
                });
                if (self.IsRequestChuaHuongBhyt && self.IsRequestHuongBhyt) {
                    self.SetWarning();
                }
                setTimeout(() => {
                    self.dataChuaHuongBh.data.forEach((element) => {
                        if (!element.CanModify) {
                            $('#' + 'bhytDuocHuongselectCheckboxId' + element.Id).attr('disabled', true);
                            $('#' + 'bhytChuaDuocHuongselectAllCheckboxId').attr('disabled', true);
                        }
                        if (element.CheckedDefault) {
                            $('#' + 'bhytDuocHuongselectCheckboxId' + element.Id).trigger('click');
                        }
                    });
                }, 300);
            }, err => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    MoveCuringServicesFromHuongInsuranceToNotHuongInsurance() {
        if (this.dataHuongBh.data.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh).length > 5) {
            const insert = (arr, index, newItem) => [
                ...arr.slice(0, index),
                newItem,
                ...arr.slice(index)
            ];
            const dataHuongMovingList = this.dataHuongBh.data
                .filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh)
                .splice(5, this.dataHuongBh.data.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh).length);
            for (const dataHuongMove of dataHuongMovingList) {
                dataHuongMove.HighLightClass = '';
                dataHuongMove.HuongBhyt = false;
                const pushedPosition = this.dataChuaHuongBh.data.some(x => x) ? this.dataChuaHuongBh.data.indexOf(this.dataChuaHuongBh.data.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh && x.Id > dataHuongMove.Id)[0]) : 0;
                this.dataChuaHuongBh.data = insert(this.dataChuaHuongBh.data, pushedPosition, dataHuongMove);
                this.dataHuongBh.data.splice(this.dataHuongBh.data.indexOf(dataHuongMove), 1);
            }
        }
    }
    ResetBhytChuaHuong() {
        const self = this;
        self.dataChuaHuongBh.data.forEach(bhyt => {
            self.SetupRatioForSpecificBenefitInsurance(bhyt, 0, 0);
        });
    }
    SetupRatioForSpecificBenefitInsurance(benefitInsurance, currentRatio, wholeRatio = 100, giaSu = false, ignoreMucHuongSystem = false) {
        // benefitInsurance: chỉ định bhyt nào sẽ được thiết lập
        // currentRatio: chỉ định tỉ lệ hưởng theo dịch vụ
        // wholeRatio: (optional) chỉ định mức hưởng
        // giaSu: (optional) nếu là true thì chỉ là áp dụng thử, ko bị ảnh hưởng trên display grid
        if (benefitInsurance.IsDaXacNhan) {
            if (wholeRatio > benefitInsurance.MucHuongSystem && !ignoreMucHuongSystem) {
                wholeRatio = benefitInsurance.MucHuongSystem;
            }
        }
        if (giaSu) {
            const specificRatio = (currentRatio * wholeRatio) / 100;
            const dgBhytTra = (specificRatio * benefitInsurance.DGBHYTThamKhao) / 100;
            benefitInsurance.TTBHYTChiTraGiaSu = dgBhytTra * benefitInsurance.SoLuong;
        }
        else {
            const specificRatio = (currentRatio * wholeRatio) / 100;
            benefitInsurance.TiLeTheoDichVu = currentRatio;
            benefitInsurance.MucHuong = wholeRatio;
            benefitInsurance.DGBHYTChiTra = (specificRatio * benefitInsurance.DGBHYTThamKhao) / 100;
            benefitInsurance.TTBHYTChiTra = benefitInsurance.DGBHYTChiTra * benefitInsurance.SoLuong;
            benefitInsurance.BNThanhToan = benefitInsurance.ThanhTienBenhVien - benefitInsurance.TTBHYTChiTra;
        }
    }
    showMucHuongDaDuyetTooltip(dataItem) {
        const self = this;
        if (dataItem != null) {
            self.currentWarningMucHuongDaDuyetMessage = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["DuyetBhytMessage"].MessageSpecifyMucHuongDaDuyet, [dataItem.MucHuongDaDuyet.toString()]);
        }
    }
    onChangeTiLe(dataItem, event) {
        dataItem.MucHuong = event;
        dataItem.MucHuongSystem = event;
        const specificRatio = (dataItem.TiLeTheoDichVu * event) / 100;
        dataItem.DGBHYTChiTra = (specificRatio * dataItem.DGBHYTThamKhao) / 100;
        if (dataItem.DGBHYTChiTra > dataItem.DonGiaBenhVien) {
            dataItem.DGBHYTChiTra = dataItem.DonGiaBenhVien;
        }
        dataItem.TTBHYTChiTra = dataItem.DGBHYTChiTra * dataItem.SoLuong;
        dataItem.BNThanhToan = dataItem.ThanhTienBenhVien - dataItem.TTBHYTChiTra;
        this.kiemTraDuyetTruocDo();
    }
    kiemTraDuyetTruocDo() {
        //kiểm tra MucHuongDaDuyet có đung giá trị không nếu có change khác show cảnh báo để bít
        setTimeout(() => {
            this.dataHuongBh.data.forEach((dataItem) => {
                if (dataItem.MucHuongDaDuyet != null && dataItem.MucHuongDaDuyet != dataItem.MucHuong) {
                    if (!dataItem.showInfoChangeMucHuongDuyet) {
                        $('#' + 'bhytDuocHuongselectCheckboxId' + dataItem.Id).trigger('click');
                    }
                    dataItem.CheckedDefault = true;
                    dataItem.showInfoChangeMucHuongDuyet = true;
                }
                if (dataItem.MucHuongDaDuyet != null && dataItem.showInfoChangeMucHuongDuyet && dataItem.MucHuongDaDuyet == dataItem.MucHuong) {
                    if (dataItem.showInfoChangeMucHuongDuyet) {
                        $('#' + 'bhytDuocHuongselectCheckboxId' + dataItem.Id).trigger('click');
                    }
                    dataItem.CheckedDefault = false;
                    dataItem.showInfoChangeMucHuongDuyet = false;
                }
            });
        }, 300);
    }
    CalcRatioForBenefitInsurance(handlePttt = false) {
        // hàm này dùng để xử lý việc tính toán cho các dịch vụ được hưởng bảo hiểm
        const self = this;
        //áp cho dịch vụ mức hưởng 100% cho các dịch vụ
        self.SetBenefitRaioForWholeBenefitInsurance(100, false, true);
        //sumOfTTBHYTChiTraCurrent 100 %
        const sumOfTTBHYTChiTraCurrent = self.dataHuongBh.data
            .reduce((sum, item) => sum + item.TTBHYTChiTra, 0);
        //Check thêm hàm áp dụng 100% nếu TTBHYTCT < mucHuong15Percent thì áp 100% mức hưởng
        if (sumOfTTBHYTChiTraCurrent < self.mucHuong15Percent) {
            self.SetBenefitRaioForWholeBenefitInsurance(100, false, true);
        }
        else if (sumOfTTBHYTChiTraCurrent >= self.mucHuong15Percent) {
            self.SetBenefitRaioForWholeBenefitInsurance(self.bhytInfo.MucHuong);
        }
        if (handlePttt) {
            self.dataHuongBh.data.filter(x => x.IsPttt).forEach(ptttEle => {
                self.HandlePttt(ptttEle);
            });
        }
    }
    ChangeTiLeDvPttt(eventData, dataItem) {
        const self = this;
        dataItem.TiLeTheoDichVu = dataItem.TiLeDv = self.GetPhanTramTheoEnum(eventData.KeyId);
        const specificRatio = (dataItem.TiLeTheoDichVu * dataItem.MucHuong) / 100;
        dataItem.DGBHYTChiTra = (specificRatio * dataItem.DGBHYTThamKhao) / 100;
        dataItem.TTBHYTChiTra = dataItem.DGBHYTChiTra * dataItem.SoLuong;
        dataItem.BNThanhToan = dataItem.ThanhTienBenhVien - dataItem.TTBHYTChiTra;
    }
    GetPhanTramTheoEnum(keyId) {
        if (keyId === 1) {
            return 100;
        }
        return keyId === 2 ? 80 : 50;
    }
    GetListLoaiPhanTramForPttt() {
        const self = this;
        // tslint:disable-next-line: forin
        for (const loaiPt in src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["PercentTypeForPttt"]) {
            if (!isNaN(Number(loaiPt))) {
                const ptPttt = {
                    DisplayName: self.percentTypeForPtttLabel.get(Number(loaiPt)),
                    KeyId: Number(loaiPt)
                };
                self.ptPttts.push(ptPttt);
            }
        }
    }
    SetBenefitRaioForWholeBenefitInsurance(wholeRatio = 100, isGiaSu = false, ignoreMucHuongSystem = false) {
        const self = this;
        self.currentBenefitRatio = wholeRatio;
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh)) {
            self.SetBenefitRatio(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKyThuat)) {
            self.SetBenefitRatio(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKyThuat, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].VatTuTieuHao)) {
            self.SetBenefitRatio(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].VatTuTieuHao, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DuocPham)) {
            self.SetBenefitRatio(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DuocPham, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuGiuongBenh)) {
            self.SetBenefitRatio(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuGiuongBenh, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DonThuocThanhToan)) {
            self.SetBenefitRatio(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DonThuocThanhToan, wholeRatio, isGiaSu, ignoreMucHuongSystem);
        }
    }
    SetBenefitRatio(groupType, wholeRatio = 100, isGiaSu = false, ignoreMucHuongSystem = false) {
        const self = this;
        if (groupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh) {
            const firstCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[0];
            const secondCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[1];
            const thirdCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[2];
            const fourthCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[3];
            const lastCuring = self.dataHuongBh.data.filter(x => x.GroupType === groupType)[4];
            // lần 1: 100%
            // first loading sẽ giữ nguyên giá bảo hiểm cho bảo hiểm đã xác nhận
            // tslint:disable-next-line: triple-equals
            if (firstCuring != undefined) {
                // move service sẽ tính toán lại giá bảo hiểm theo rule 100, 30, 30, 30, 10
                self.SetupRatioForSpecificBenefitInsurance(firstCuring, 100, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }
            // lần 2: 30%
            // tslint:disable-next-line: triple-equals
            if (secondCuring != undefined) {
                self.SetupRatioForSpecificBenefitInsurance(secondCuring, 30, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }
            // lần 3: 30%
            // tslint:disable-next-line: triple-equals
            if (thirdCuring != undefined) {
                self.SetupRatioForSpecificBenefitInsurance(thirdCuring, 30, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }
            // lần 4: 30%
            // tslint:disable-next-line: triple-equals
            if (fourthCuring != undefined) {
                self.SetupRatioForSpecificBenefitInsurance(fourthCuring, 30, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }
            // lần 5: 10%
            // tslint:disable-next-line: triple-equals
            if (lastCuring != undefined) {
                self.SetupRatioForSpecificBenefitInsurance(lastCuring, 10, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            }
        }
        else if (groupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DonThuocThanhToan ||
            groupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DuocPham ||
            groupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].VatTuTieuHao) {
            self.dataHuongBh.data.filter(x => x.GroupType === groupType).forEach(huongBhItem => {
                self.SetupRatioForSpecificBenefitInsurance(huongBhItem, huongBhItem.TiLeDv, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            });
        }
        else {
            self.dataHuongBh.data.filter(x => x.GroupType === groupType).forEach(huongBhItem => {
                self.SetupRatioForSpecificBenefitInsurance(huongBhItem, 100, wholeRatio, isGiaSu, ignoreMucHuongSystem);
            });
        }
    }
    SetWarning() {
        const self = this;
        if (self.dataChuaHuongBh.data.some(x => x)) {
            self.ResetBhytChuaHuong();
        }
        if (self.dataHuongBh.data.some(x => x)) {
            self.MoveCuringServicesFromHuongInsuranceToNotHuongInsurance();
            self.ResetBhytChuaHuong();
            self.CalcRatioForBenefitInsurance(true);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh)) {
            self.SetupWarning(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKyThuat) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKyThuat)) {
            self.SetupWarning(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKyThuat);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].VatTuTieuHao) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].VatTuTieuHao)) {
            self.SetupWarning(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].VatTuTieuHao);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DuocPham) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DuocPham)) {
            self.SetupWarning(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DuocPham);
        }
        if (self.dataHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuGiuongBenh) ||
            self.dataChuaHuongBh.data.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuGiuongBenh)) {
            self.SetupWarning(src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuGiuongBenh);
        }
        self.SetDataSource();
        self.CloseLoading();
    }
    SetupWarning(groupType) {
        const self = this;
        // 1/ get all coincident ids of dichvukhambenh-group of huong-bhyt-datasource
        // 2/ add all coincident ids to serviceGroupIds
        self.dataHuongBh.data.filter(x => x.GroupType === groupType)
            .filter((value, index, list) => {
            const dichVuIds = [];
            list.filter(z => z.GroupType === groupType).forEach(item => {
                dichVuIds.push(item.DichVuId);
            });
            return dichVuIds.indexOf(value.DichVuId) !== index;
        }).forEach(uniqueItem => {
            let serviceCoincidentDesignation = new _xac_nhan_bhyt_model__WEBPACK_IMPORTED_MODULE_6__["DesignateCoincidentServiceModel"]();
            serviceCoincidentDesignation = {
                Id: uniqueItem.Id,
                ServiceId: uniqueItem.DichVuId,
                ServiceGroup: groupType,
                PhongBenhVienChiDinh: self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                    x.DichVuId === uniqueItem.DichVuId)[0].NoiChiDinh,
                BacSyChiDinh: self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                    x.DichVuId === uniqueItem.DichVuId)[0].NhanVienChiDinh
            };
            self.serviceGroupIds.push(serviceCoincidentDesignation);
        });
        // 3/ get all coincient ids of dichvukhambenh-group of chua-huong-bhyt-datasource
        // 4/ for every single coincident id of chua-huong-bhyt-datasource, we need to compare its service to
        // huong-bhyt-datasource's service, if there is coincident, we need to add the first service of
        // chua-huong-bhyt to serviceGroupIds
        // serviceGroupIds is important, we use this to display warning whose data is coincident.
        self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType)
            .filter((value, index, list) => {
            const dichVuIds = [];
            list.filter(z => z.GroupType === groupType).forEach(item => {
                dichVuIds.push(item.DichVuId);
            });
            return dichVuIds.indexOf(value.DichVuId) !== index;
        }).forEach(uniqueItem => {
            if (self.dataHuongBh.data.some(x => x.GroupType === groupType && x.DichVuId === uniqueItem.DichVuId)) {
                if (!self.serviceGroupIds.some(x => x.Id === self.dataChuaHuongBh.data
                    .filter(w => w.GroupType === groupType && w.DichVuId === uniqueItem.DichVuId)[0].Id)) {
                    let firstServiceCoincidentDesignation = new _xac_nhan_bhyt_model__WEBPACK_IMPORTED_MODULE_6__["DesignateCoincidentServiceModel"]();
                    firstServiceCoincidentDesignation = {
                        Id: self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType &&
                            x.DichVuId === uniqueItem.DichVuId)[0].Id,
                        ServiceId: uniqueItem.DichVuId,
                        ServiceGroup: groupType,
                        PhongBenhVienChiDinh: self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                            x.DichVuId === uniqueItem.DichVuId)[0].NoiChiDinh,
                        BacSyChiDinh: self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                            x.DichVuId === uniqueItem.DichVuId)[0].NhanVienChiDinh
                    };
                    self.serviceGroupIds.push(firstServiceCoincidentDesignation);
                }
                let serviceCoincidentDesignation = new _xac_nhan_bhyt_model__WEBPACK_IMPORTED_MODULE_6__["DesignateCoincidentServiceModel"]();
                serviceCoincidentDesignation = {
                    Id: uniqueItem.Id,
                    ServiceId: uniqueItem.DichVuId,
                    ServiceGroup: groupType,
                    PhongBenhVienChiDinh: self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                        x.DichVuId === uniqueItem.DichVuId) ? self.dataHuongBh.data
                        .filter(x => x.GroupType === groupType &&
                        x.DichVuId === uniqueItem.DichVuId)[0].NoiChiDinh : self.dataChuaHuongBh.data
                        .filter(x => x.GroupType === groupType &&
                        x.DichVuId === uniqueItem.DichVuId)[0].NoiChiDinh,
                    BacSyChiDinh: self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                        x.DichVuId === uniqueItem.DichVuId) ? self.dataHuongBh.data
                        .filter(x => x.GroupType === groupType &&
                        x.DichVuId === uniqueItem.DichVuId)[0].NhanVienChiDinh : self.dataChuaHuongBh.data
                        .filter(x => x.GroupType === groupType &&
                        x.DichVuId === uniqueItem.DichVuId)[0].NhanVienChiDinh
                };
                self.serviceGroupIds.push(serviceCoincidentDesignation);
            }
        });
        // 5/ update datasource
        self.UpdateWarning(groupType);
    }
    UpdateWarning(groupType) {
        const self = this;
        self.dataHuongBh.data.filter(x => x.GroupType === groupType).forEach(huongBhItem => {
            huongBhItem.IsWarning = false;
        });
        self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType).forEach(huongBhItem => {
            huongBhItem.IsWarning = false;
        });
        self.serviceGroupIds.filter(z => z.ServiceGroup === groupType).forEach(serviceGroupDesignationItem => {
            if (self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                x.Id === serviceGroupDesignationItem.Id)) {
                self.dataHuongBh.data.filter(x => x.GroupType === groupType &&
                    x.Id === serviceGroupDesignationItem.Id)[0].IsWarning = true;
            }
            if (self.dataChuaHuongBh.data.some(x => x.GroupType === groupType &&
                x.Id === serviceGroupDesignationItem.Id)) {
                self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType &&
                    x.Id === serviceGroupDesignationItem.Id)[0].IsWarning = true;
            }
        });
        self.dataHuongBh.data.filter((value, index, list) => {
            const dichVuIds = [];
            list.filter(x => x.GroupType === groupType).forEach(item => {
                dichVuIds.push(item.DichVuId);
            });
            return dichVuIds.indexOf(value.DichVuId) === index;
        }).forEach(designationItem => {
            if (self.dataChuaHuongBh.data.some(x => x.GroupType === groupType &&
                !x.IsWarning && x.DichVuId === designationItem.DichVuId)) {
                self.dataChuaHuongBh.data.filter(x => x.GroupType === groupType &&
                    !x.IsWarning && x.DichVuId === designationItem.DichVuId)
                    .forEach(chuaHuongItem => {
                    chuaHuongItem.IsWarning = true;
                    let serviceCoincidentDesignation = new _xac_nhan_bhyt_model__WEBPACK_IMPORTED_MODULE_6__["DesignateCoincidentServiceModel"]();
                    serviceCoincidentDesignation = {
                        Id: chuaHuongItem.Id,
                        ServiceId: chuaHuongItem.DichVuId,
                        ServiceGroup: groupType,
                        PhongBenhVienChiDinh: self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                            x.DichVuId === chuaHuongItem.DichVuId) ? self.dataHuongBh.data
                            .filter(x => x.GroupType === groupType &&
                            x.DichVuId === chuaHuongItem.DichVuId)[0].NoiChiDinh : self.dataChuaHuongBh.data
                            .filter(x => x.GroupType === groupType &&
                            x.DichVuId === chuaHuongItem.DichVuId)[0].NoiChiDinh,
                        BacSyChiDinh: self.dataHuongBh.data.some(x => x.GroupType === groupType &&
                            x.DichVuId === chuaHuongItem.DichVuId) ? self.dataHuongBh.data
                            .filter(x => x.GroupType === groupType &&
                            x.DichVuId === chuaHuongItem.DichVuId)[0].NhanVienChiDinh : self.dataChuaHuongBh.data
                            .filter(x => x.GroupType === groupType &&
                            x.DichVuId === chuaHuongItem.DichVuId)[0].NhanVienChiDinh
                    };
                    self.serviceGroupIds.push(serviceCoincidentDesignation);
                });
            }
        });
    }
    OnChangeHuongBhyt(dataItem) {
        const self = this;
        if (self.dataHuongBh.data.indexOf(dataItem) !== -1) {
            this.dichVuKhamBenhCungYeuCauKhamBenhId(dataItem);
            self.dataHuongBh.data.splice(self.dataHuongBh.data.indexOf(dataItem), 1);
            self.cdRef.detectChanges();
            dataItem.HighLightClass = '';
            dataItem.HuongBhyt = false;
            self.PushToXacNhanBhyt(src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["BhytType"].ChuaDuocHuong, dataItem);
            self.CalcRatioForBenefitInsurance();
            if (dataItem.IsPttt) {
                self.HandlePttt(dataItem, true);
            }
        }
        else {
            //Nếu Dịch vụ khám bệnh danh sách được hưởng mà cùng chung YeuCauKhambenhId thì nó đi theo xuông ds chua hưởng
            //Ds duoc thanh toán rùi không cần đươc xuống nếu nó cung chung YeuCauKhambenhId
            self.dataChuaHuongBh.data.splice(self.dataChuaHuongBh.data.indexOf(dataItem), 1);
            self.cdRef.detectChanges();
            dataItem.HuongBhyt = true;
            if (dataItem.IsDaXacNhan) {
                dataItem.HighLightClass = src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["DuyetBhytMessage"].BlueColorRow;
            }
            self.PushToXacNhanBhyt(src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["BhytType"].DuocHuong, dataItem);
            self.MoveCuringServicesFromHuongInsuranceToNotHuongInsurance();
            self.ResetBhytChuaHuong();
            self.CalcRatioForBenefitInsurance();
            if (dataItem.IsPttt) {
                self.HandlePttt(dataItem);
            }
        }
        this.kiemTraDuyetTruocDo();
        self.SetDataSource();
        this.kiemTraDichVuDuyetRoiDuaXuongCheckDuyet(dataItem.Id);
    }
    kiemTraDichVuDuyetRoiDuaXuongCheckDuyet(id) {
        if ($('#' + 'bhytChuaDuocHuongselectCheckboxId' + id).is(":checked")) {
            $('#' + 'bhytChuaDuocHuongselectCheckboxId' + id).trigger('click');
        }
        setTimeout(() => {
            this.dataChuaHuongBh.data.filter(c => c.Id == id).forEach((dataItem) => {
                if (dataItem.IsDaXacNhan != true || dataItem.MucHuongDaDuyet != null && dataItem.MucHuongDaDuyet != dataItem.MucHuong) {
                    $('#' + 'bhytChuaDuocHuongselectCheckboxId' + dataItem.Id).trigger('click');
                    dataItem.CheckedDefault = true;
                }
            });
            var fillterYCKB = this.dataChuaHuongBh.data.filter(c => c.IsDaXacNhan != true || c.YeuCauKhamBenhId === id && c.MucHuongDaDuyet != null && c.MucHuongDaDuyet != c.MucHuong);
            if (fillterYCKB.length > 0) {
                fillterYCKB.forEach(dataChuaHuongBh => {
                    if (!$('#' + 'bhytChuaDuocHuongselectCheckboxId' + dataChuaHuongBh.Id).is(":checked")) {
                        $('#' + 'bhytChuaDuocHuongselectCheckboxId' + dataChuaHuongBh.Id).trigger('click');
                        dataChuaHuongBh.CheckedDefault = true;
                    }
                });
            }
        }, 500);
    }
    dichVuKhamBenhCungYeuCauKhamBenhId(dataItem) {
        const self = this;
        var fillterYCKB = self.dataHuongBh.data.filter(c => c.YeuCauKhamBenhId === dataItem.Id);
        if (fillterYCKB.length > 0) {
            fillterYCKB.forEach(dsDuocHuong => {
                if (dsDuocHuong.CanModify && dsDuocHuong.YeuCauKhamBenhId === dataItem.Id) {
                    self.dataHuongBh.data.splice(self.dataHuongBh.data.indexOf(dsDuocHuong), 1);
                    self.cdRef.detectChanges();
                    dsDuocHuong.HighLightClass = '';
                    dsDuocHuong.HuongBhyt = false;
                    self.PushToXacNhanBhyt(src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["BhytType"].ChuaDuocHuong, dsDuocHuong);
                    self.CalcRatioForBenefitInsurance();
                    if (dsDuocHuong.IsPttt) {
                        self.HandlePttt(dsDuocHuong, true);
                    }
                }
            });
        }
    }
    HandlePttt(pttt, reset = false) {
        const self = this;
        if (reset) {
            pttt.TiLeTheoDichVu = 0;
            return;
        }
        if (pttt.TiLeDv === 50 || pttt.TiLeDv === 80) {
            pttt.TiLeTheoDichVu = pttt.TiLeDv;
            pttt.LoaiPhanTram = pttt.TiLeTheoDichVu === 50 ? src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["PercentTypeForPttt"].Per50 : src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["PercentTypeForPttt"].Per80;
            pttt.LoaiPhanTramText = self.percentTypeForPtttLabel.get(pttt.LoaiPhanTram);
        }
        else {
            pttt.TiLeTheoDichVu = 100;
            pttt.LoaiPhanTram = src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["PercentTypeForPttt"].Per100;
            pttt.LoaiPhanTramText = self.percentTypeForPtttLabel.get(pttt.LoaiPhanTram);
        }
        const specificRatio = (pttt.TiLeTheoDichVu * pttt.MucHuong) / 100;
        pttt.DGBHYTChiTra = (specificRatio * pttt.DGBHYTThamKhao) / 100;
        pttt.TTBHYTChiTra = pttt.DGBHYTChiTra * pttt.SoLuong;
        pttt.BNThanhToan = pttt.ThanhTienBenhVien - pttt.TTBHYTChiTra;
    }
    SetDataSource(huongBh = true, khongHuongBh = true) {
        if (huongBh) {
            this.dataHuongBh.total = this.dataHuongBh.data.length;
            this.gridHuongBhyt.setDataSource();
        }
        if (khongHuongBh) {
            this.dataChuaHuongBh.total = this.dataChuaHuongBh.data.length;
            this.gridChuaHuongBhyt.setDataSource();
        }
    }
    PushToXacNhanBhyt(bhytType, dataItem) {
        const insert = (arr, index, newItem) => [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index)
        ];
        if (bhytType === src_app_shared_enum_bhyt_type_enum__WEBPACK_IMPORTED_MODULE_7__["BhytType"].ChuaDuocHuong) {
            let pushedPosition = 0;
            if (this.dataChuaHuongBh.data.some(x => x.GroupType === dataItem.GroupType && x.Id < dataItem.Id)) {
                pushedPosition = this.dataChuaHuongBh.data.indexOf(this.dataChuaHuongBh.data.filter(x => x.GroupType === dataItem.GroupType && x.Id < dataItem.Id).reverse()[0]) + 1;
            }
            this.SetupRatioForSpecificBenefitInsurance(dataItem, 0, 0);
            this.dataChuaHuongBh.data = insert(this.dataChuaHuongBh.data, pushedPosition, dataItem);
        }
        else {
            let pushedPosition = 0;
            if (this.dataHuongBh.data.some(x => x.GroupType === dataItem.GroupType && x.Id < dataItem.Id)) {
                pushedPosition = this.dataHuongBh.data.indexOf(this.dataHuongBh.data.filter(x => x.GroupType === dataItem.GroupType && x.Id < dataItem.Id).reverse()[0]) + 1;
            }
            this.dataHuongBh.data = insert(this.dataHuongBh.data, pushedPosition, dataItem);
            if (dataItem.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_12__["NhomGoiDichVu"].DichVuKhamBenh && this.dataHuongBh.data.indexOf(dataItem) > 4) {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["DuyetBhytMessage"].MessageErrorMoveValidKhamBenh);
            }
        }
    }
    lichSuXacNhan(dataItem) {
        const self = this;
        const lichSuModel = {
            Id: dataItem.Id,
            Group: dataItem.GroupType
        };
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
            self.apiService.post('XacNhanBHYT/GetHistoryLog', lichSuModel).subscribe((resultData) => {
                const dataPassingToDanhSachPopUp = {
                    listHistory: resultData.Value.Value,
                    title: dataItem.TenDichVu
                };
                self.dialog.open(_danh_sach_lich_xac_nhan_danh_sach_lich_xac_nhan_component__WEBPACK_IMPORTED_MODULE_18__["DanhSachLichXacNhanComponent"], {
                    disableClose: false,
                    width: '1200px',
                    data: { Title: 'Xác nhận', Model: dataPassingToDanhSachPopUp }
                }).afterClosed().subscribe(() => { });
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showTooltip(dataItem) {
        const self = this;
        if (dataItem != null) {
            self.currentWarningMessage = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["DuyetBhytMessage"].MessageSpecifyPhong, [self.serviceGroupIds.filter(x => x.Id === dataItem.Id)[0].PhongBenhVienChiDinh,
                self.serviceGroupIds.filter(x => x.Id === dataItem.Id)[0].BacSyChiDinh]);
        }
    }
    setUpIcdTooltip(dataItem) {
        this.icdChinh = dataItem.IcdChinh;
        this.ghiChuIcd = dataItem.GhiChuIcdChinh;
        this.icdKems = dataItem.IcdKemTheos;
    }
    GetSharedData() {
        const insuranceModelRequest = {};
        if (this.dataHuongBh.data != null) {
            insuranceModelRequest.BenefitInsurance = this.dataHuongBh.data;
        }
        else {
            insuranceModelRequest.BenefitInsurance = [];
        }
        if (this.dataChuaHuongBh.data != null) {
            insuranceModelRequest.NonBenefitInsurance = this.dataChuaHuongBh.data;
        }
        else {
            insuranceModelRequest.NonBenefitInsurance = [];
        }
        insuranceModelRequest.IdYeuCauTiepNhan = this.bhytHanhChinh.Id;
        return insuranceModelRequest;
    }
};
BhytThongTinXacNhanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BhytThongTinXacNhanComponent.prototype, "bhytInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BhytThongTinXacNhanComponent.prototype, "bhytHanhChinh", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BhytThongTinXacNhanComponent.prototype, "validationErrors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridHuongBhyt', { static: false })
], BhytThongTinXacNhanComponent.prototype, "gridHuongBhyt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChuaHuongBhyt', { static: false })
], BhytThongTinXacNhanComponent.prototype, "gridChuaHuongBhyt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBenhVienTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "donGiaBenhVienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "thanhTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKHBHYTFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "thanhTienKHBHYTFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienKhongDuocHuongBHYTGroupFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "thanhTienKhongDuocHuongBHYTGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttBHYTChiTraTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "ttBHYTChiTraTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttBHYTChiTraFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "ttBHYTChiTraFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttKBHYTChiTraFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "ttKBHYTChiTraFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttBHYTChiTraGroupFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "ttBHYTChiTraGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttKDBHYTChiTraGroupFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "ttKDBHYTChiTraGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "bnThanhToanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "bnThanhToanFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhToanGroupFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "bnThanhToanGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhKhongDHBHYTFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "bnThanhKhongDHBHYTFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bnThanhKhongDHBHYTToanGroupFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "bnThanhKhongDHBHYTToanGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dgbhytThamKhaoTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "dgbhytThamKhaoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienBHYTThamKhaoTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "thanhTienBHYTThamKhaoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tiLeTheoDvTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "tiLeTheoDvTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mucHuongTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "mucHuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDvTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "tenDvTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateDGBHYTCT', { static: true })
], BhytThongTinXacNhanComponent.prototype, "templateDGBHYTCT", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaGroupFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "donGiaGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('huongBhytTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "huongBhytTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], BhytThongTinXacNhanComponent.prototype, "actionTemplate", void 0);
BhytThongTinXacNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-bhyt-thong-tin-xac-nhan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bhyt-thong-tin-xac-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bhyt-thong-tin-xac-nhan.component.scss */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component.scss")).default]
    })
], BhytThongTinXacNhanComponent);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.color-blue {\n  color: blue;\n  text-decoration: underline;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n\napp-ds-cho-xac-nhan-bhyt app-textboxnumeric kendo-textbox-container {\n  background-color: rgba(0, 0, 0, 0.04);\n  width: 100% !important;\n  border-radius: 4px 4px 0 0;\n  padding: 0.75em 0.75em 0 0.75em;\n  border-bottom: 1px solid rgba(82, 63, 105, 0.42);\n}\n\napp-ds-cho-xac-nhan-bhyt app-textboxnumeric kendo-textbox-container > .k-label {\n  margin-left: 10px;\n  background: none !important;\n  transform: translate(0, -6px) translate(-1px, -0.53125em) translate(-12.5%, -9.375%) scale(0.75) !important;\n}\n\napp-ds-cho-xac-nhan-bhyt app-textboxnumeric kendo-textbox-container.k-state-empty > .k-label {\n  transform: translate(0, 0) scale(1) !important;\n}\n\napp-ds-cho-xac-nhan-bhyt app-textboxnumeric kendo-textbox-container.k-state-focused > .k-label {\n  transform: translate(0, -6px) translate(-1px, -0.53125em) translate(-12.5%, -9.375%) scale(0.75) !important;\n  color: #005dab !important;\n}\n\napp-ds-cho-xac-nhan-bhyt app-textboxnumeric kendo-textbox-container .k-dropzone {\n  background: none !important;\n  padding: 0 !important;\n  margin-top: 11px;\n}\n\napp-ds-cho-xac-nhan-bhyt app-textboxnumeric kendo-textbox-container::after {\n  display: block;\n  z-index: 2;\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  transform-origin: center right;\n  margin: auto;\n  opacity: 0;\n  transform: scaleX(0.5) translateX(-100%);\n  transition: transform 0.8s;\n  transform-origin: center left;\n  background-color: #005dab;\n}\n\napp-ds-cho-xac-nhan-bhyt app-textboxnumeric kendo-textbox-container:hover::after {\n  opacity: 1;\n  transform: scaleX(1);\n  transition: transform 0.8s;\n  transform-origin: center right;\n}\n\napp-upload {\n  padding-bottom: 1.34375em;\n}\n\napp-upload .k-upload {\n  border: none;\n  background: none;\n}\n\napp-upload .k-upload .k-upload-files {\n  padding-bottom: 0 !important;\n}\n\napp-upload .k-upload .k-upload-button {\n  padding: 0.2rem 0.75rem;\n  margin: 0.13rem;\n  border-radius: 30px;\n}\n\napp-upload .upload-disable {\n  background: #efefef;\n  border: solid 1px rgba(0, 93, 171, 0.4);\n  border-radius: 0.25rem;\n}\n\napp-upload .upload-disable ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\napp-upload .upload-disable ul li {\n  padding: 0.14rem 0.75rem;\n  margin-right: 0px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 20px;\n}\n\napp-upload .upload-disable ul li .k-icon {\n  margin-top: 6px;\n  cursor: pointer;\n  position: absolute;\n  right: 6px;\n}\n\napp-upload .upload-disable ul li .k-icon:hover {\n  color: #005dab;\n}\n\napp-upload .single-on-row kendo-upload-action-buttons {\n  display: none !important;\n}\n\napp-upload .single-on-row .k-dropzone {\n  display: inline-block;\n  background: none;\n  padding: 0;\n  margin-top: 11px;\n}\n\napp-upload .single-on-row .k-dropzone .k-upload-status.k-upload-status-total {\n  display: inline-block;\n}\n\napp-upload .single-on-row .k-dropzone .k-upload-status.k-upload-status-total .k-i-exception.k-icon {\n  display: none;\n}\n\napp-upload .single-on-row .k-upload-files {\n  display: inline-block;\n  border: none;\n  float: none;\n  margin-top: 4px;\n  max-width: calc(100% - 150px);\n}\n\napp-upload .single-on-row .k-upload-files li.k-file {\n  padding: 0;\n  border: none;\n}\n\napp-upload .single-on-row .k-upload-files li.k-file .k-file-extension-wrapper,\napp-upload .single-on-row .k-upload-files li.k-file .k-file-invalid-extension-wrapper {\n  display: none;\n}\n\napp-upload .single-on-row .k-upload-files li.k-file .k-file-name-size-wrapper {\n  margin-left: 0;\n  min-height: 15px;\n}\n\napp-upload .single-on-row .k-upload-files li.k-file .k-file-size {\n  display: none;\n}\n\napp-upload .single-on-row .k-upload-files li.k-file .k-upload-status {\n  top: 0;\n}\n\napp-upload .single-on-row .k-upload-files li.k-file .custom-name {\n  margin-right: 15px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.sticky-button-action {\n  position: sticky;\n  position: -webkit-sticky;\n  bottom: 0px;\n  background-color: white;\n  border-top: 1px solid #ccc;\n  overflow: hidden;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9jaGktdGlldC14YWMtbmhhbi1iaHl0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGh1LWNoaVxceGFjLW5oYW4tYmh5dFxcY2hpLXRpZXQteGFjLW5oYW4tYmh5dFxcY2hpLXRpZXQteGFjLW5oYW4tYmh5dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9jaGktdGlldC14YWMtbmhhbi1iaHl0L2NoaS10aWV0LXhhYy1uaGFuLWJoeXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0Q0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUtBLDRCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnREFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJHQUFBO0FDQ0Y7O0FERUE7RUFDRSw4Q0FBQTtBQ0NGOztBREVBO0VBQ0UsMkdBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTs7RUFFRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLE1BQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9jaGktdGlldC14YWMtbmhhbi1iaHl0L2NoaS10aWV0LXhhYy1uaGFuLWJoeXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5wby1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNvbG9yLWJsdWUge1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5wYWRkaW5nLWxlZnQ4MHB4IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5rZW5kby1zcGxpdHRlciB1bCA+IGxpLnJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufVxuXG5hcHAtZHMtY2hvLXhhYy1uaGFuLWJoeXQgYXBwLXRleHRib3hudW1lcmljIGtlbmRvLXRleHRib3gtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIHBhZGRpbmc6IDAuNzVlbSAwLjc1ZW0gMCAwLjc1ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDgyLCA2MywgMTA1LCAwLjQyKTtcbn1cblxuYXBwLWRzLWNoby14YWMtbmhhbi1iaHl0IGFwcC10ZXh0Ym94bnVtZXJpYyBrZW5kby10ZXh0Ym94LWNvbnRhaW5lciA+IC5rLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCkgdHJhbnNsYXRlKC0xcHgsIC0wLjUzMTI1ZW0pIHRyYW5zbGF0ZSgtMTIuNSUsIC05LjM3NSUpIHNjYWxlKDAuNzUpICFpbXBvcnRhbnQ7XG59XG5cbmFwcC1kcy1jaG8teGFjLW5oYW4tYmh5dCBhcHAtdGV4dGJveG51bWVyaWMga2VuZG8tdGV4dGJveC1jb250YWluZXIuay1zdGF0ZS1lbXB0eSA+IC5rLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSkgIWltcG9ydGFudDtcbn1cblxuYXBwLWRzLWNoby14YWMtbmhhbi1iaHl0IGFwcC10ZXh0Ym94bnVtZXJpYyBrZW5kby10ZXh0Ym94LWNvbnRhaW5lci5rLXN0YXRlLWZvY3VzZWQgPiAuay1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpIHRyYW5zbGF0ZSgtMXB4LCAtMC41MzEyNWVtKSB0cmFuc2xhdGUoLTEyLjUlLCAtOS4zNzUlKSBzY2FsZSgwLjc1KSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwNWRhYiAhaW1wb3J0YW50O1xufVxuXG5hcHAtZHMtY2hvLXhhYy1uaGFuLWJoeXQgYXBwLXRleHRib3hudW1lcmljIGtlbmRvLXRleHRib3gtY29udGFpbmVyIC5rLWRyb3B6b25lIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG5cbmFwcC1kcy1jaG8teGFjLW5oYW4tYmh5dCBhcHAtdGV4dGJveG51bWVyaWMga2VuZG8tdGV4dGJveC1jb250YWluZXI6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMXB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpIHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWI7XG59XG5cbmFwcC1kcy1jaG8teGFjLW5oYW4tYmh5dCBhcHAtdGV4dGJveG51bWVyaWMga2VuZG8tdGV4dGJveC1jb250YWluZXI6aG92ZXI6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG59XG5cbmFwcC11cGxvYWQge1xuICBwYWRkaW5nLWJvdHRvbTogMS4zNDM3NWVtO1xufVxuXG5hcHAtdXBsb2FkIC5rLXVwbG9hZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuYXBwLXVwbG9hZCAuay11cGxvYWQgLmstdXBsb2FkLWZpbGVzIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuYXBwLXVwbG9hZCAuay11cGxvYWQgLmstdXBsb2FkLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjc1cmVtO1xuICBtYXJnaW46IDAuMTNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmFwcC11cGxvYWQgLnVwbG9hZC1kaXNhYmxlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCA5MywgMTcxLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5hcHAtdXBsb2FkIC51cGxvYWQtZGlzYWJsZSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hcHAtdXBsb2FkIC51cGxvYWQtZGlzYWJsZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDAuMTRyZW0gMC43NXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmFwcC11cGxvYWQgLnVwbG9hZC1kaXNhYmxlIHVsIGxpIC5rLWljb24ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNnB4O1xufVxuXG5hcHAtdXBsb2FkIC51cGxvYWQtZGlzYWJsZSB1bCBsaSAuay1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cga2VuZG8tdXBsb2FkLWFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLWRyb3B6b25lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLWRyb3B6b25lIC5rLXVwbG9hZC1zdGF0dXMuay11cGxvYWQtc3RhdHVzLXRvdGFsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLWRyb3B6b25lIC5rLXVwbG9hZC1zdGF0dXMuay11cGxvYWQtc3RhdHVzLXRvdGFsIC5rLWktZXhjZXB0aW9uLmstaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cgLmstdXBsb2FkLWZpbGVzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLXVwbG9hZC1maWxlcyBsaS5rLWZpbGUge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cgLmstdXBsb2FkLWZpbGVzIGxpLmstZmlsZSAuay1maWxlLWV4dGVuc2lvbi13cmFwcGVyLFxuYXBwLXVwbG9hZCAuc2luZ2xlLW9uLXJvdyAuay11cGxvYWQtZmlsZXMgbGkuay1maWxlIC5rLWZpbGUtaW52YWxpZC1leHRlbnNpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cgLmstdXBsb2FkLWZpbGVzIGxpLmstZmlsZSAuay1maWxlLW5hbWUtc2l6ZS13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDE1cHg7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cgLmstdXBsb2FkLWZpbGVzIGxpLmstZmlsZSAuay1maWxlLXNpemUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLXVwbG9hZC1maWxlcyBsaS5rLWZpbGUgLmstdXBsb2FkLXN0YXR1cyB7XG4gIHRvcDogMDtcbn1cblxuYXBwLXVwbG9hZCAuc2luZ2xlLW9uLXJvdyAuay11cGxvYWQtZmlsZXMgbGkuay1maWxlIC5jdXN0b20tbmFtZSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0aWNreS1idXR0b24tYWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDtcbn0iLCIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5wby1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNvbG9yLWJsdWUge1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5wYWRkaW5nLWxlZnQ4MHB4IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5rZW5kby1zcGxpdHRlciB1bCA+IGxpLnJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufVxuXG5hcHAtZHMtY2hvLXhhYy1uaGFuLWJoeXQgYXBwLXRleHRib3hudW1lcmljIGtlbmRvLXRleHRib3gtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIHBhZGRpbmc6IDAuNzVlbSAwLjc1ZW0gMCAwLjc1ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDgyLCA2MywgMTA1LCAwLjQyKTtcbn1cblxuYXBwLWRzLWNoby14YWMtbmhhbi1iaHl0IGFwcC10ZXh0Ym94bnVtZXJpYyBrZW5kby10ZXh0Ym94LWNvbnRhaW5lciA+IC5rLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCkgdHJhbnNsYXRlKC0xcHgsIC0wLjUzMTI1ZW0pIHRyYW5zbGF0ZSgtMTIuNSUsIC05LjM3NSUpIHNjYWxlKDAuNzUpICFpbXBvcnRhbnQ7XG59XG5cbmFwcC1kcy1jaG8teGFjLW5oYW4tYmh5dCBhcHAtdGV4dGJveG51bWVyaWMga2VuZG8tdGV4dGJveC1jb250YWluZXIuay1zdGF0ZS1lbXB0eSA+IC5rLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSkgIWltcG9ydGFudDtcbn1cblxuYXBwLWRzLWNoby14YWMtbmhhbi1iaHl0IGFwcC10ZXh0Ym94bnVtZXJpYyBrZW5kby10ZXh0Ym94LWNvbnRhaW5lci5rLXN0YXRlLWZvY3VzZWQgPiAuay1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpIHRyYW5zbGF0ZSgtMXB4LCAtMC41MzEyNWVtKSB0cmFuc2xhdGUoLTEyLjUlLCAtOS4zNzUlKSBzY2FsZSgwLjc1KSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwNWRhYiAhaW1wb3J0YW50O1xufVxuXG5hcHAtZHMtY2hvLXhhYy1uaGFuLWJoeXQgYXBwLXRleHRib3hudW1lcmljIGtlbmRvLXRleHRib3gtY29udGFpbmVyIC5rLWRyb3B6b25lIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG5cbmFwcC1kcy1jaG8teGFjLW5oYW4tYmh5dCBhcHAtdGV4dGJveG51bWVyaWMga2VuZG8tdGV4dGJveC1jb250YWluZXI6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMXB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpIHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWI7XG59XG5cbmFwcC1kcy1jaG8teGFjLW5oYW4tYmh5dCBhcHAtdGV4dGJveG51bWVyaWMga2VuZG8tdGV4dGJveC1jb250YWluZXI6aG92ZXI6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG59XG5cbmFwcC11cGxvYWQge1xuICBwYWRkaW5nLWJvdHRvbTogMS4zNDM3NWVtO1xufVxuXG5hcHAtdXBsb2FkIC5rLXVwbG9hZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuYXBwLXVwbG9hZCAuay11cGxvYWQgLmstdXBsb2FkLWZpbGVzIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuYXBwLXVwbG9hZCAuay11cGxvYWQgLmstdXBsb2FkLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjc1cmVtO1xuICBtYXJnaW46IDAuMTNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmFwcC11cGxvYWQgLnVwbG9hZC1kaXNhYmxlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCA5MywgMTcxLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5hcHAtdXBsb2FkIC51cGxvYWQtZGlzYWJsZSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hcHAtdXBsb2FkIC51cGxvYWQtZGlzYWJsZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDAuMTRyZW0gMC43NXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmFwcC11cGxvYWQgLnVwbG9hZC1kaXNhYmxlIHVsIGxpIC5rLWljb24ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNnB4O1xufVxuXG5hcHAtdXBsb2FkIC51cGxvYWQtZGlzYWJsZSB1bCBsaSAuay1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cga2VuZG8tdXBsb2FkLWFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLWRyb3B6b25lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLWRyb3B6b25lIC5rLXVwbG9hZC1zdGF0dXMuay11cGxvYWQtc3RhdHVzLXRvdGFsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLWRyb3B6b25lIC5rLXVwbG9hZC1zdGF0dXMuay11cGxvYWQtc3RhdHVzLXRvdGFsIC5rLWktZXhjZXB0aW9uLmstaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cgLmstdXBsb2FkLWZpbGVzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLXVwbG9hZC1maWxlcyBsaS5rLWZpbGUge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cgLmstdXBsb2FkLWZpbGVzIGxpLmstZmlsZSAuay1maWxlLWV4dGVuc2lvbi13cmFwcGVyLFxuYXBwLXVwbG9hZCAuc2luZ2xlLW9uLXJvdyAuay11cGxvYWQtZmlsZXMgbGkuay1maWxlIC5rLWZpbGUtaW52YWxpZC1leHRlbnNpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cgLmstdXBsb2FkLWZpbGVzIGxpLmstZmlsZSAuay1maWxlLW5hbWUtc2l6ZS13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDE1cHg7XG59XG5cbmFwcC11cGxvYWQgLnNpbmdsZS1vbi1yb3cgLmstdXBsb2FkLWZpbGVzIGxpLmstZmlsZSAuay1maWxlLXNpemUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5hcHAtdXBsb2FkIC5zaW5nbGUtb24tcm93IC5rLXVwbG9hZC1maWxlcyBsaS5rLWZpbGUgLmstdXBsb2FkLXN0YXR1cyB7XG4gIHRvcDogMDtcbn1cblxuYXBwLXVwbG9hZCAuc2luZ2xlLW9uLXJvdyAuay11cGxvYWQtZmlsZXMgbGkuay1maWxlIC5jdXN0b20tbmFtZSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0aWNreS1idXR0b24tYWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ChiTietXacNhanBhytComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietXacNhanBhytComponent", function() { return ChiTietXacNhanBhytComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/nhom-goi-dich-vu.enum */ "./src/app/shared/enum/nhom-goi-dich-vu.enum.ts");
/* harmony import */ var src_app_shared_enum_trang_thai_thanh_toan_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/trang-thai-thanh-toan.enum */ "./src/app/shared/enum/trang-thai-thanh-toan.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _lich_su_xac_nhan_bhyt_thong_tin_phieu_linh_thuoc_pdf_popup_thong_tin_phieu_linh_thuoc_pdf_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../lich-su-xac-nhan-bhyt/thong-tin-phieu-linh-thuoc-pdf-popup/thong-tin-phieu-linh-thuoc-pdf-popup.component */ "./src/app/modules/main/thu-chi/lich-su-xac-nhan-bhyt/thong-tin-phieu-linh-thuoc-pdf-popup/thong-tin-phieu-linh-thuoc-pdf-popup.component.ts");


















let ChiTietXacNhanBhytComponent = class ChiTietXacNhanBhytComponent {
    constructor(route, apiService, notificationService, authService, router, dialog) {
        this.route = route;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.dataChoXacNhan = [];
        this.dataDaXacNhan = [];
        this.tabIndex = 0;
        this.tab = this.route.snapshot.queryParams.loaiXacNhan;
        this.confrim = null;
        this.errors = [];
        this.yeuCauTiepNhanId = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XacNhanBHYT;
        this.tabIndex = this.tab - 1;
        const id = this.route.snapshot.params.id;
        this.yeuCauTiepNhanId = id;
        this.thongTinBaoHiemXaHoi = {
            SoThe: '',
            NgayHieuLucStr: '',
            NgayHetHanStr: '',
            NoiDangKyKhamBenh: '',
            TuyenKham: '',
            GiayChuyenVien: '',
            GiayMiemCungTriTra: '',
            MucHuong: 0,
            GiayChuyenVienId: 0,
            GiayMienCungTriTraId: 0,
            NoiChuyenDi: ''
        };
        this.thongTinHanhChinh = {
            Id: 1,
            MaTN: '',
            MaBN: '',
            HoTen: '',
            NamSinh: 1990,
            DiaChi: '',
            SoDienThoaiStr: '',
            Email: '',
            DoiTuongUuDai: '',
            CongTyUuDai: '',
            TenGioiTinh: '',
        };
        this.OpenLoading();
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }
    OpenLoading() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
    }
    CloseLoading() {
        this.dialog.closeAll();
    }
    getById(id) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].View)) {
            self.apiService
                .post('XacNhanBHYT/GetById?id=' + id)
                .subscribe((resultData) => {
                if (resultData !== undefined && resultData != null) {
                    self.thongTinBaoHiemXaHoi = {
                        SoThe: resultData.BHYTMaSoThe,
                        NgayHieuLucStr: resultData.BHYTngayHieuLucStr,
                        NgayHetHanStr: resultData.BHYTngayHetHanStr,
                        NoiDangKyKhamBenh: resultData.DKBD,
                        TuyenKham: resultData.LyDoVaoVienDisplay,
                        GiayChuyenVien: resultData.GiayChuyenVienDisplay,
                        GiayChuyenVienId: resultData.GiayChuyenVienId,
                        GiayMiemCungTriTra: resultData.GiayMienCungChiTraDisplay,
                        GiayMienCungTriTraId: resultData.BHYTGiayMienCungChiTraId,
                        MucHuong: resultData.BHYTMucHuong,
                        NoiChuyenDi: resultData.NoiChuyenDi
                    };
                    self.thongTinHanhChinh = {
                        Id: id,
                        MaTN: resultData.MaYeuCauTiepNhan,
                        MaBN: resultData.BenhNhan.MaBN,
                        HoTen: resultData.HoTen,
                        NamSinh: resultData.NamSinh,
                        DiaChi: resultData.DiaChi,
                        SoDienThoaiStr: resultData.SoDienThoai,
                        Email: resultData.Email,
                        DoiTuongUuDai: resultData.DoiTuongUuDai != null
                            ? resultData.DoiTuongUuDai.Ten
                            : '',
                        CongTyUuDai: resultData.CongTyUuDai != null ? resultData.CongTyUuDai.Ten : '',
                        TenGioiTinh: resultData.GioiTinh === 1 ? 'Nam' : 'Nữ',
                    };
                }
            }, err => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    viewDocument(idFile, type) {
        this.apiService
            .post('XacNhanBHYT/GetDocument?idFile=' + idFile + '&type=' + type)
            .subscribe((result) => {
            if (result.MoTa === undefined) {
                result.MoTa = null;
            }
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]({
                fromObject: {
                    tenGuid: result.TenGuid,
                    duongDan: result.DuongDan,
                },
            });
            this.apiService
                .get('TaiLieuDinhKem/GetTaiLieuUrl', params)
                .subscribe((resp) => {
                if (resp) {
                    if (result.TenGuid.indexOf('.pdf') !== -1 || result.TenGuid.indexOf('.PDF') !== -1) {
                        this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_8__["ViewImagePdfComponent"], {
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
                        this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_8__["ViewImagePdfComponent"], {
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
        });
    }
    onTabSelect(ev) {
        this.OpenLoading();
        this.tabIndex = ev.index;
    }
    onXacNhan() {
        const self = this;
        const insuranceModelRequest = self.bhytGrid.GetSharedData();
        if (insuranceModelRequest.BenefitInsurance != null) {
            insuranceModelRequest.BenefitInsurance.forEach(element => {
                {
                    if ($('#' + 'bhytDuocHuongselectCheckboxId' + element.Id).prop('checked')) {
                        return (element.CheckedDefault = true);
                    }
                    else {
                        return (element.CheckedDefault = false);
                    }
                }
            });
        }
        if (insuranceModelRequest.NonBenefitInsurance != null) {
            insuranceModelRequest.NonBenefitInsurance.forEach(element => {
                {
                    if ($('#' + 'bhytChuaDuocHuongselectCheckboxId' + element.Id).prop('checked')) {
                        return (element.CheckedDefault = true);
                    }
                    else {
                        return (element.CheckedDefault = false);
                    }
                }
            });
        }
        if (insuranceModelRequest.BenefitInsurance != null || insuranceModelRequest.NonBenefitInsurance != null) {
            if (self.confrim != null) {
                self.CloseLoading();
                self.confrim = null;
            }
            if (insuranceModelRequest.BenefitInsurance.length === 0 && insuranceModelRequest.NonBenefitInsurance.length === 0) {
                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageNotEmptyBhyt);
                return;
            }
            self.confrim = self.dialog
                .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận',
                    Message: 'Bạn có chắc chắn duyệt những bảo hiểm này không?',
                },
            })
                .afterClosed()
                .subscribe((result) => {
                if (result === 'Yes') {
                    self.errors = self.ValidDataForBhytModel(insuranceModelRequest.BenefitInsurance);
                    if (self.errors != null && self.errors.some(x => x)) {
                        return;
                    }
                    // const msgErrorTlHuong = self.CheckValidationForTiLeHuong(insuranceModelRequest.BenefitInsurance);
                    // if (msgErrorTlHuong != null) {
                    //     self.dialog
                    //         .open(ConfirmComponent, {
                    //             disableClose: false,
                    //             width: '400px',
                    //             data: {
                    //                 Title: 'Cảnh báo',
                    //                 Message: msgErrorTlHuong,
                    //             },
                    //         }).afterClosed()
                    //         .subscribe(confirmResult => {
                    //             if (confirmResult === 'Yes') {
                    //                 self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance(100, false, true);
                    //                 const sumOfTTBHYTChiTraCurrent = self.bhytGrid.dataHuongBh.data
                    //                     .reduce((sum: number, item: GridXacNhanBhyt) => sum + item.TTBHYTChiTra, 0);
                    //                 if (sumOfTTBHYTChiTraCurrent > self.bhytGrid.mucHuong15Percent) {
                    //                     self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance
                    //                         (self.bhytGrid.bhytInfo.MucHuong, false, true);
                    //                 }
                    //                 self.Request(insuranceModelRequest);
                    //             }
                    //         });
                    //     return;
                    // }
                    self.Request(insuranceModelRequest);
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageLoiKoXn);
        }
    }
    Request(insuranceModelRequest) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
            self.apiService
                .post('XacNhanBHYT/ConfirmBenefitInsuranceAsync', insuranceModelRequest)
                .subscribe((resultData) => {
                if (!resultData.IsError) {
                    self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageXnThanhCong);
                    self.router.navigate(['/xac-nhan-bhyt/ngoai-tru'], {
                        queryParamsHandling: 'preserve',
                    });
                    return;
                }
                if (resultData.ErrorType === 3) {
                    self.notificationService.showError(resultData.ErrorMessage);
                    return;
                }
                const msgErrorTlHuongSauRequest = self.CheckValidationForTiLeHuong(insuranceModelRequest.BenefitInsurance, resultData.ErrorType);
                if (msgErrorTlHuongSauRequest != null) {
                    self.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: {
                            Title: 'Cảnh báo',
                            Message: msgErrorTlHuongSauRequest,
                        },
                    }).afterClosed()
                        .subscribe(confirmResult => {
                        if (confirmResult === 'Yes') {
                            if (resultData.ErrorType === 1) {
                                self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance(100);
                            }
                            else {
                                self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance(self.bhytGrid.bhytInfo.MucHuong);
                            }
                        }
                    });
                    return;
                }
            }, err => {
                if (err.ValidationErrors != null) {
                    self.errors = err.ValidationErrors;
                    return;
                }
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    ValidDataForBhytModel(benefitInsurances) {
        const validationErrors = [];
        const self = this;
        if (benefitInsurances != null &&
            benefitInsurances.some(x => x.MucHuong == null && x.TrangThaiThanhToan !== src_app_shared_enum_trang_thai_thanh_toan_enum__WEBPACK_IMPORTED_MODULE_15__["EnumTrangThaiThanhToan"].DaThanhToan)) {
            benefitInsurances.filter(x => x.MucHuong == null && x.TrangThaiThanhToan !== src_app_shared_enum_trang_thai_thanh_toan_enum__WEBPACK_IMPORTED_MODULE_15__["EnumTrangThaiThanhToan"].DaThanhToan)
                .forEach(insurance => {
                const index = benefitInsurances.indexOf(insurance);
                const validationError = {
                    Field: 'BenefitInsurance[' + index + '].MucHuong',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageNotAllowNull
                };
                validationErrors.push(validationError);
            });
        }
        if (benefitInsurances != null &&
            benefitInsurances.some(x => x.MucHuong === 0 && x.TrangThaiThanhToan !== src_app_shared_enum_trang_thai_thanh_toan_enum__WEBPACK_IMPORTED_MODULE_15__["EnumTrangThaiThanhToan"].DaThanhToan)) {
            benefitInsurances.filter(x => x.MucHuong === 0 && x.TrangThaiThanhToan !== src_app_shared_enum_trang_thai_thanh_toan_enum__WEBPACK_IMPORTED_MODULE_15__["EnumTrangThaiThanhToan"].DaThanhToan)
                .forEach(insurance => {
                const index = benefitInsurances.indexOf(insurance);
                const validationError = {
                    Field: 'BenefitInsurance[' + index + '].MucHuong',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageNotEqualZero
                };
                validationErrors.push(validationError);
            });
        }
        return validationErrors;
    }
    CheckValidationForTiLeHuong(benefitInsurances, errorType = 0) {
        const self = this;
        let message = null;
        let showMessage = false;
        self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance(100, true);
        const sumOfTTBHYTChiTraCurrent = self.bhytGrid.dataHuongBh.data
            .reduce((sum, item) => sum + item.TTBHYTChiTraGiaSu, 0);
        if (errorType === 0) {
            if (sumOfTTBHYTChiTraCurrent > self.bhytGrid.mucHuong15Percent) {
                showMessage = self.ShowPopupBaoLoi(benefitInsurances, true);
                if (showMessage) {
                    message = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageGreaterThanCurrent, [self.bhytGrid.bhytInfo.MucHuong.toString()]);
                }
            }
            else {
                showMessage = self.ShowPopupBaoLoi(benefitInsurances);
                if (showMessage) {
                    message = src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageLessThan100;
                }
            }
            return message;
        }
        if (errorType === 1) {
            showMessage = self.ShowPopupBaoLoi(benefitInsurances);
            if (showMessage) {
                message = src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageLessThan100;
            }
        }
        else {
            showMessage = self.ShowPopupBaoLoi(benefitInsurances, true);
            if (showMessage) {
                message = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageGreaterThanCurrent, [self.bhytGrid.bhytInfo.MucHuong.toString()]);
            }
        }
        return message;
    }
    ShowPopupBaoLoi(benefitInsurances, isExceedQuarter = false) {
        const self = this;
        if (isExceedQuarter) {
            if (benefitInsurances.some(x => x.GroupType !== src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh &&
                x.MucHuong > self.bhytGrid.bhytInfo.MucHuong)) {
                return true;
            }
            if (benefitInsurances.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)) {
                const firstCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[0];
                if (firstCuring != null && firstCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }
                const secondCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[1];
                if (secondCuring != null && secondCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }
                const thirdCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[2];
                if (thirdCuring != null && thirdCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }
                const forthCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[3];
                if (forthCuring != null && forthCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }
                const fifthCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[4];
                if (fifthCuring != null && fifthCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }
            }
        }
        else {
            if (benefitInsurances != null && benefitInsurances.some(x => x.GroupType !== src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh &&
                x.MucHuong !== 100)) {
                return true;
            }
            if (benefitInsurances != null && benefitInsurances.some(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)) {
                const firstCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[0];
                if (firstCuring != null && firstCuring.MucHuong !== 100) {
                    return true;
                }
                const secondCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[1];
                if (secondCuring != null && secondCuring.MucHuong !== 100) {
                    return true;
                }
                const thirdCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[2];
                if (thirdCuring != null && thirdCuring.MucHuong !== 100) {
                    return true;
                }
                const forthCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[3];
                if (forthCuring != null && forthCuring.MucHuong !== 100) {
                    return true;
                }
                const fifthCuring = benefitInsurances.filter(x => x.GroupType === src_app_shared_enum_nhom_goi_dich_vu_enum__WEBPACK_IMPORTED_MODULE_14__["NhomGoiDichVu"].DichVuKhamBenh)[4];
                if (fifthCuring != null && fifthCuring.MucHuong !== 100) {
                    return true;
                }
            }
        }
        return false;
    }
    onHuyDuyet() {
        const self = this;
        const insuranceModelRequest = self.bhytGrid.GetSharedData();
        if (insuranceModelRequest.BenefitInsurance != null || insuranceModelRequest.NonBenefitInsurance != null) {
            if (self.confrim != null) {
                self.CloseLoading();
                self.confrim = null;
            }
            if (insuranceModelRequest.BenefitInsurance.length === 0 && insuranceModelRequest.NonBenefitInsurance.length === 0) {
                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageNotEmptyBhyt);
                return;
            }
            self.confrim = self.dialog
                .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận',
                    Message: 'Bạn có chắc chắn hủy duyệt những bảo hiểm này không?',
                },
            })
                .afterClosed()
                .subscribe((result) => {
                if (result === 'Yes') {
                    self.RequestHuyDuyet(insuranceModelRequest);
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageLoiKoXn);
        }
    }
    RequestHuyDuyet(insuranceModelRequest) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
            self.apiService
                .post('XacNhanBHYT/HuyDuyetBaoHiemYte', insuranceModelRequest)
                .subscribe((resultData) => {
                if (!resultData.IsError) {
                    self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["DuyetBhytMessage"].MessageHuyDuyetThanhCong);
                    self.router.navigate(['/xac-nhan-bhyt/ngoai-tru'], {
                        queryParamsHandling: 'preserve',
                    });
                    return;
                }
            }, err => {
                if (err.ValidationErrors != null) {
                    self.errors = err.ValidationErrors;
                    return;
                }
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    onHuy() {
        this.router.navigate(['/xac-nhan-bhyt/ngoai-tru'], {
            queryParamsHandling: 'preserve',
        });
    }
    phieuLinhThuocBenhNhanBHYT() {
        let loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
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
                .open(_lich_su_xac_nhan_bhyt_thong_tin_phieu_linh_thuoc_pdf_popup_thong_tin_phieu_linh_thuoc_pdf_popup_component__WEBPACK_IMPORTED_MODULE_17__["ThongTinPhieuBHYTPdfPopupComponent"], {
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
        if (event.keyCode == 83 && event.ctrlKey) {
            // ctrl + s
            this.onXacNhan();
            event.preventDefault();
        }
        if (event.keyCode == 27 && !event.ctrlKey) {
            // esc
            this.onHuy();
            event.preventDefault();
        }
    }
};
ChiTietXacNhanBhytComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabBhyt', { static: true })
], ChiTietXacNhanBhytComponent.prototype, "tabBhyt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytGrid', { static: true })
], ChiTietXacNhanBhytComponent.prototype, "bhytGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], ChiTietXacNhanBhytComponent.prototype, "keyEvent", null);
ChiTietXacNhanBhytComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-chi-tiet-xac-nhan-bhyt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chi-tiet-xac-nhan-bhyt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chi-tiet-xac-nhan-bhyt.component.scss */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.scss")).default]
    })
], ChiTietXacNhanBhytComponent);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-color {\n  color: red;\n}\n\n.blue-color {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9kYW5oLXNhY2gtY2hvLXhhYy1uaGFuLWJoeXQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx4YWMtbmhhbi1iaHl0XFxkYW5oLXNhY2gtY2hvLXhhYy1uaGFuLWJoeXRcXGRhbmgtc2FjaC1jaG8teGFjLW5oYW4tYmh5dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9kYW5oLXNhY2gtY2hvLXhhYy1uaGFuLWJoeXQvZGFuaC1zYWNoLWNoby14YWMtbmhhbi1iaHl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9kYW5oLXNhY2gtY2hvLXhhYy1uaGFuLWJoeXQvZGFuaC1zYWNoLWNoby14YWMtbmhhbi1iaHl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uYmx1ZS1jb2xvciB7XG4gIGNvbG9yOiBibHVlO1xufSIsIi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJsdWUtY29sb3Ige1xuICBjb2xvcjogYmx1ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DanhSachChoXacNhanBhytComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoXacNhanBhytComponent", function() { return DanhSachChoXacNhanBhytComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xac_nhan_bhyt_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xac-nhan-bhyt.model */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18__);




















let DanhSachChoXacNhanBhytComponent = class DanhSachChoXacNhanBhytComponent {
    constructor(router, authService, route, apiService, notificationService, dialog) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.gridChoNhanBhytColumns = [];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.xacNhanBhyt = new _xac_nhan_bhyt_model__WEBPACK_IMPORTED_MODULE_2__["XacNhanBhyt"]();
        this.xacNhanBhytDefault = new _xac_nhan_bhyt_model__WEBPACK_IMPORTED_MODULE_2__["XacNhanBhyt"]();
        this.showCancelSearch = false;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.additionalSearchString = null;
        this.kiemTraDanhSachThanhToan = true;
        this.timKiemThongTinBenhNhan = {};
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.isScanF1 = false;
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.holdQuery = null;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.sortConfig = [
            {
                field: 'ChuaXacNhan',
                dir: 'desc',
            },
            {
                field: 'ThoiDiemTiepNhan',
                dir: 'desc'
            },
            {
                field: 'Id',
                dir: 'asc',
            },
        ];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__["DocumentType"].XacNhanBHYT;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].getItem('additionalSearchStringXacNhanBHYT') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].getItem('additionalSearchStringXacNhanBHYT');
            this.xacNhanBhyt = new _xac_nhan_bhyt_model__WEBPACK_IMPORTED_MODULE_2__["XacNhanBhyt"]();
            this.xacNhanBhyt = JSON.parse(this.additionalSearchString);
            if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null && this.xacNhanBhyt.ThoiDiemTiepNhanTu !== '') {
                this.xacNhanBhyt.ThoiDiemTiepNhanTu = new Date(this.xacNhanBhyt.ThoiDiemTiepNhanTu);
            }
            else {
                this.xacNhanBhyt.ThoiDiemTiepNhanTu = null;
            }
            if (this.xacNhanBhyt.ThoiDiemTiepNhanDen != null && this.xacNhanBhyt.ThoiDiemTiepNhanDen !== '') {
                this.xacNhanBhyt.ThoiDiemTiepNhanDen = new Date(this.xacNhanBhyt.ThoiDiemTiepNhanDen);
            }
            else {
                this.xacNhanBhyt.ThoiDiemTiepNhanDen = null;
            }
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem('additionalSearchStringXacNhanBHYT', null);
        }
        this.gridChoNhanBhytColumns = [
            {
                Field: 'MaTN',
                Title: 'Mã TN',
                Width: 100,
                Sortable: true,
                Template: this.maTNTemplate,
            },
            { Field: 'MaBN', Title: 'Mã NB', Width: 75, Sortable: true },
            { Field: 'HoTen', Title: 'Họ tên', Width: 170, Sortable: true },
            { Field: 'NamSinhDisplay', Title: 'Năm Sinh', Width: 90, Sortable: true },
            { Field: 'TenGioiTinh', Title: 'Giới tính', Width: 90, Sortable: true },
            { Field: 'DiaChi', Title: 'Địa chỉ', MinWidth: 200, Sortable: true },
            {
                Field: 'SoDienThoaiFormat',
                Title: 'Số điện thoại',
                Width: 120,
                Sortable: true,
            },
            {
                Field: 'SoTienDaXacNhan',
                Title: 'Số tiền đã XN',
                Width: 120,
                Template: this.templateTextSoTienDaXacNhan,
            },
            {
                Field: 'SoTienChoXacNhan',
                Title: 'Số tiền chờ XN',
                Width: 120,
                Template: this.templateTextSoTienChoXacNhan,
            },
            {
                Field: 'Status',
                Title: 'Trạng Thái',
                Width: 101,
                Template: this.statusTemplate,
            },
            {
                Field: 'ThoiDiemTiepNhan',
                Title: 'Tiếp Nhận Lúc',
                Width: 155,
                Sortable: true,
                Template: this.thoiDiemTiepNhanDisplay
            },
            {
                Field: 'HuongXuLy',
                Title: 'Hướng xử lý',
                Width: 155,
                Sortable: true,
                Template: this.huongXuLyDisplay
            }
        ];
        this.listTagSearch = new Array();
        // this.minDateTuNgay = new Date();
        // this.minDateTuNgay.setHours(0, 0, 0, 0);
        // if (this.xacNhanBhyt.ThoiDiemTiepNhanTu == null) {
        //     this.xacNhanBhyt.ThoiDiemTiepNhanTu = this.minDateTuNgay;
        // }
        // if (this.xacNhanBhyt.ThoiDiemTiepNhanDen == null) {
        //     this.xacNhanBhyt.ThoiDiemTiepNhanDen = new Date();
        //     this.xacNhanBhyt.ThoiDiemTiepNhanDen.setHours(23, 59, 59);
        // }
        // let dateNow = new Date();
        // this.xacNhanBhyt.FromDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        // this.xacNhanBhyt.ToDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    }
    checkTrangThai(event, type) {
        this.router.navigateByUrl('/xac-nhan-bhyt/ngoai-tru?holdQuery=true');
        if (type === 1) {
            this.xacNhanBhyt.ChuaXacNhan = event;
        }
        if (type === 2) {
            this.xacNhanBhyt.DaXacNhan = event;
        }
        this.TimkiemNangCao();
    }
    TimkiemNangCao() {
        if (this.xacNhanBhyt.NamSinh != null) {
            this.xacNhanBhyt.NamSinh = Math.round(this.xacNhanBhyt.NamSinh);
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null) {
            this.xacNhanBhyt.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanTu, 'dd/mm/yyyy');
        }
        else {
            this.xacNhanBhyt.FromDate = null;
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanDen != null) {
            this.xacNhanBhyt.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanDen, 'dd/mm/yyyy');
        }
        else {
            this.xacNhanBhyt.ToDate = null;
        }
        this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
        const queryString = JSON.stringify(this.xacNhanBhyt);
        if (this.gridListXacNhan != null) {
            this.gridListXacNhan.searchString = this.xacNhanBhyt.SearchString;
            this.gridListXacNhan._additionalSearchString = queryString;
            this.gridListXacNhan.search();
        }
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem('additionalSearchStringXacNhanBHYT', queryString);
        this.showCancelSearch =
            this.listTagShowOnHeader != null &&
                this.listTagShowOnHeader.length > 0;
    }
    searchChanges(event) {
        const self = this;
        if (self.timeoutSearchChange != null) {
            clearTimeout(self.timeoutSearchChange);
            self.timeoutSearchChange = null;
        }
        self.timeoutSearchChange = setTimeout(() => {
            if (event != null && event.endsWith('@')) {
                const dataTimKiem = event.split('|');
                if (dataTimKiem.length > 1) {
                    self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                }
                else {
                    self.xacNhanBhyt.SearchString = event.slice(0, -1);
                    self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = event.slice(0, -1);
                }
                self.getThongTinYeuCauBenhNhan(self.timKiemThongTinBenhNhan);
            }
            if (self.xacNhanBhyt.SearchString == null || self.xacNhanBhyt.SearchString === '') {
                if (self.gridListXacNhan != null) {
                    self.gridListXacNhan.searchString = '';
                    self.gridListXacNhan.search();
                }
            }
        }, 100);
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.Timkiem();
        }
    }
    clearSearch() {
        this.xacNhanBhyt.SearchString = '';
        if (this.gridListXacNhan != null) {
            this.gridListXacNhan.search();
        }
    }
    Timkiem() {
        let QueryString = null;
        if (this.xacNhanBhyt.SearchString != null) {
            this.router.navigateByUrl('/xac-nhan-bhyt/ngoai-tru?holdQuery=true');
            QueryString = this.xacNhanBhyt.SearchString;
        }
        if (this.xacNhanBhyt.NamSinh != null) {
            this.xacNhanBhyt.NamSinh = Math.round(this.xacNhanBhyt.NamSinh);
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null) {
            this.xacNhanBhyt.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanTu, 'dd/mm/yyyy');
        }
        else {
            this.xacNhanBhyt.FromDate = null;
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanDen != null) {
            this.xacNhanBhyt.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanDen, 'dd/mm/yyyy');
        }
        else {
            this.xacNhanBhyt.ToDate = null;
        }
        const queryString = JSON.stringify(this.xacNhanBhyt);
        if (this.gridListXacNhan != null) {
            this.gridListXacNhan.searchString = QueryString;
            this.gridListXacNhan._additionalSearchString = queryString;
            this.gridListXacNhan.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem('additionalSearchStringXacNhanBHYT', queryString);
        }
    }
    thongTinChiTiet(data) {
        this.router.navigateByUrl('/xac-nhan-bhyt/ngoai-tru/ds-xac-nhan-bhyt/' +
            data.Id +
            '?holdQuery=true&loaiXacNhan=' +
            // tslint:disable-next-line: triple-equals
            (data.SoTienChoXacNhan != 0 ? 1 : 2));
    }
    xacNhan(data) {
        const self = this;
        self.dialog
            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: {
                Title: 'Xác nhận',
                Message: 'Bạn có chắc chắn duyệt những bảo hiểm này không?',
            },
        })
            .afterClosed()
            .subscribe((result) => {
            if (result === 'Yes') {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                    self.apiService.get('XacNhanBHYT/DuyetBaoHiemChoXnAsync?yeuCauTiepNhanId=' + data.Id).subscribe(() => {
                        self.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["DuyetBhytMessage"].MessageXnThanhCong);
                        self.gridListXacNhan.setDataSource();
                    }, err => {
                        self.notificationService.showError(err.Message);
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    QuetMaQRCodeClick() {
        const elementBarcode = document.getElementById('barcodeActive');
        if (elementBarcode != null) {
            elementBarcode.click();
        }
    }
    changeQR($event) {
        if ($event != null && typeof $event === 'string' && $event.endsWith('@')) {
            this.modelQRCode = $event;
            const dataTimKiem = $event.split('|');
            if (dataTimKiem.length > 1) {
                this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
            }
            else {
                this.xacNhanBhyt.SearchString = $event.slice(0, -1);
                this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
            }
            this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
        }
        else {
            this.notificationService.showError('Không tìm thấy thông tin cần tìm.');
        }
        this.isScanF1 = false;
    }
    getThongTinYeuCauBenhNhan(timKiemThongTinBenhNhan) {
        this.apiService
            .post('XacNhanBHYT/GetXacNhanBHYTByMaBNVaMaTT/', timKiemThongTinBenhNhan)
            .subscribe((resultData) => {
            if (resultData.length > 0 && resultData !== undefined) {
                this.thongTinChiTiet(resultData[0]);
            }
            else {
                this.notificationService.showError('Thông tìm thấy thông tin cần tìm.');
            }
        });
    }
    keyEvent(event) {
        if (event.keyCode === 81 && event.ctrlKey && this.isScanF1 !== true) {
            event.preventDefault();
            this.QuetMaQRCodeClick();
        }
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('XacNhanBHYT/ExportXacNhanBhyt', self.gridListXacNhan._gridQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DSXacNhanBHYT' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    thoiDiemTNChange() {
        if (this.xacNhanBhyt.ThoiDiemTiepNhanTu == null && this.xacNhanBhyt.ThoiDiemTiepNhanDen == null) {
            this.Timkiem();
        }
        else if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null && this.xacNhanBhyt.ThoiDiemTiepNhanDen != null) {
            this.router.navigateByUrl('/xac-nhan-bhyt/ngoai-tru?holdQuery=true');
            this.TimkiemNangCao();
        }
        else if (this.xacNhanBhyt.ThoiDiemTiepNhanTu == null && this.xacNhanBhyt.ThoiDiemTiepNhanDen != null) {
            this.router.navigateByUrl('/xac-nhan-bhyt/ngoai-tru?holdQuery=true');
            this.TimkiemNangCao();
        }
        else if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null && this.xacNhanBhyt.ThoiDiemTiepNhanDen == null) {
            this.router.navigateByUrl('/xac-nhan-bhyt/ngoai-tru?holdQuery=true');
            this.TimkiemNangCao();
        }
    }
    toggleColumnVisibility(column, event) {
        this.gridListXacNhan.toggleColumnVisibility(column, event);
    }
};
DanhSachChoXacNhanBhytComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridListXacNhan', { static: false })
], DanhSachChoXacNhanBhytComponent.prototype, "gridListXacNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], { static: false })
], DanhSachChoXacNhanBhytComponent.prototype, "trigger", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateTextSoTienDaXacNhan', { static: true })
], DanhSachChoXacNhanBhytComponent.prototype, "templateTextSoTienDaXacNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateTextSoTienChoXacNhan', { static: true })
], DanhSachChoXacNhanBhytComponent.prototype, "templateTextSoTienChoXacNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('statusTemplate', { static: true })
], DanhSachChoXacNhanBhytComponent.prototype, "statusTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemTiepNhanDisplay', { static: true })
], DanhSachChoXacNhanBhytComponent.prototype, "thoiDiemTiepNhanDisplay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('huongXuLyDisplay', { static: true })
], DanhSachChoXacNhanBhytComponent.prototype, "huongXuLyDisplay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateTextSoTienDaXacNhanDaXacNhan', { static: true })
], DanhSachChoXacNhanBhytComponent.prototype, "templateTextSoTienDaXacNhanDaXacNhan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], DanhSachChoXacNhanBhytComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orderTemplate', { static: true })
], DanhSachChoXacNhanBhytComponent.prototype, "orderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], DanhSachChoXacNhanBhytComponent.prototype, "keyEvent", null);
DanhSachChoXacNhanBhytComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-danh-sach-cho-xac-nhan-bhyt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-xac-nhan-bhyt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-xac-nhan-bhyt.component.scss */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.scss")).default]
    })
], DanhSachChoXacNhanBhytComponent);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  margin: 0;\n  position: relative;\n  height: 55px;\n  justify-content: flex-end !important;\n}\n\n.title h3 {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  text-shadow: 2px 3px 6px rgba(62, 41, 79, 0.59);\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n  font-size: 22px;\n}\n\n.title::after {\n  content: \"\";\n  height: 4px;\n  background-color: #111a1a;\n  width: 80%;\n  position: absolute;\n  top: 45px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.content legend {\n  font-size: 18px;\n  text-shadow: 0px 1px 0px #918996;\n  text-transform: uppercase;\n}\n\n.content legend span {\n  font-size: 0.95em;\n  text-transform: lowercase;\n}\n\n.content table,\n.content tr,\n.content td,\n.content th {\n  border: 3px solid rgba(36, 17, 24, 0.4);\n}\n\n.content table tr td {\n  font-size: 15px;\n}\n\n.content table tr td.price {\n  text-align: right;\n  font-weight: bold;\n}\n\n.content table th {\n  font-size: 16px;\n  font-weight: bold;\n  background: #005dab;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9kYW5oLXNhY2gtbGljaC14YWMtbmhhbi9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRodS1jaGlcXHhhYy1uaGFuLWJoeXRcXGRhbmgtc2FjaC1saWNoLXhhYy1uaGFuXFxkYW5oLXNhY2gtbGljaC14YWMtbmhhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9kYW5oLXNhY2gtbGljaC14YWMtbmhhbi9kYW5oLXNhY2gtbGljaC14YWMtbmhhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTs7OztFQUlFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkveGFjLW5oYW4tYmh5dC9kYW5oLXNhY2gtbGljaC14YWMtbmhhbi9kYW5oLXNhY2gtbGljaC14YWMtbmhhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIGgzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1zaGFkb3c6IDJweCAzcHggNnB4IHJnYmEoNjIsIDQxLCA3OSwgMC41OSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4udGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTFhMWE7XG4gIHdpZHRoOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmNvbnRlbnQgbGVnZW5kIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzkxODk5NjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRlbnQgbGVnZW5kIHNwYW4ge1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuLmNvbnRlbnQgdGFibGUsXG4uY29udGVudCB0cixcbi5jb250ZW50IHRkLFxuLmNvbnRlbnQgdGgge1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDM2LCAxNywgMjQsIDAuNCk7XG59XG5cbi5jb250ZW50IHRhYmxlIHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29udGVudCB0YWJsZSB0ciB0ZC5wcmljZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQgdGFibGUgdGgge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjMDA1ZGFiO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIudGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSBoMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRleHQtc2hhZG93OiAycHggM3B4IDZweCByZ2JhKDYyLCA0MSwgNzksIDAuNTkpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnRpdGxlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExYTFhO1xuICB3aWR0aDogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDVweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5jb250ZW50IGxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICM5MTg5OTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250ZW50IGxlZ2VuZCBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbi5jb250ZW50IHRhYmxlLFxuLmNvbnRlbnQgdHIsXG4uY29udGVudCB0ZCxcbi5jb250ZW50IHRoIHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgzNiwgMTcsIDI0LCAwLjQpO1xufVxuXG4uY29udGVudCB0YWJsZSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNvbnRlbnQgdGFibGUgdHIgdGQucHJpY2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50IHRhYmxlIHRoIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogIzAwNWRhYjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DanhSachLichXacNhanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachLichXacNhanComponent", function() { return DanhSachLichXacNhanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let DanhSachLichXacNhanComponent = class DanhSachLichXacNhanComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.danhSachLichSuVaTitle = null;
        this.tenDichVu = null;
        this.gridHistory = [];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.danhSachLichSuKhamBenh = [];
        this.dataSourceDanhSachLichSuXacNhan = {
            data: [],
            total: 0
        };
        this.danhSachLichSuVaTitle = data.Model;
    }
    ngOnInit() {
        const self = this;
        self.tenDichVu = self.danhSachLichSuVaTitle.title;
        self.danhSachLichSuKhamBenh = self.danhSachLichSuVaTitle.listHistory;
        self.dataSourceDanhSachLichSuXacNhan.data = self.danhSachLichSuKhamBenh;
        self.dataSourceDanhSachLichSuXacNhan.total = self.danhSachLichSuKhamBenh.length;
        self.gridHistory = [
            { Field: '', Title: 'STT', Width: 44, Template: self.orderTemplate },
            { Field: 'SoLuong', Title: 'Số Lượng', ShowTooltip: true, Width: 86 },
            {
                Field: 'DgBh', Title: 'ĐGBHYT', Width: 89, ShowTooltip: true, Template: self.dgbhTemplate
            },
            {
                Field: 'TtBh', Title: 'Thành Tiền BHYT', Width: 133, Template: self.ttbhTemplate
            },
            { Field: 'TiLeDv', Title: 'Tỉ Lệ Theo DV', Width: 104, Template: self.tlDvTemplate },
            {
                Field: 'MucHuong', Title: 'Mức Hưởng', Width: 95, Template: self.mucHuongTemplate
            },
            {
                Field: 'DgBhChiTra', Title: 'ĐGBHYT Chi Trả', Width: 122, Template: self.dgbhChiTraTemplate
            },
            {
                Field: 'TtBhChiTra', Title: 'TTBHYT Chi Trả', Width: 122, Template: self.ttbhChiTraTemplate
            },
            { Field: 'NgayDuyet', Title: 'Ngày Cập Nhật', Width: 153 },
            { Field: 'TenNhanVien', Title: 'Người Cập Nhật', Width: 156 },
        ];
    }
    close() {
        this.dialog.closeAll();
    }
};
DanhSachLichXacNhanComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orderTemplate', { static: true })
], DanhSachLichXacNhanComponent.prototype, "orderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dgbhTemplate', { static: true })
], DanhSachLichXacNhanComponent.prototype, "dgbhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttbhTemplate', { static: true })
], DanhSachLichXacNhanComponent.prototype, "ttbhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tlDvTemplate', { static: true })
], DanhSachLichXacNhanComponent.prototype, "tlDvTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mucHuongTemplate', { static: true })
], DanhSachLichXacNhanComponent.prototype, "mucHuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dgbhChiTraTemplate', { static: true })
], DanhSachLichXacNhanComponent.prototype, "dgbhChiTraTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttbhChiTraTemplate', { static: true })
], DanhSachLichXacNhanComponent.prototype, "ttbhChiTraTemplate", void 0);
DanhSachLichXacNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-danh-sach-lich-xac-nhan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-lich-xac-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-lich-xac-nhan.component.scss */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DanhSachLichXacNhanComponent);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: XacNhanBhytRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBhytRoutingModule", function() { return XacNhanBhytRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _danh_sach_cho_xac_nhan_bhyt_danh_sach_cho_xac_nhan_bhyt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.ts");
/* harmony import */ var _chi_tiet_xac_nhan_bhyt_chi_tiet_xac_nhan_bhyt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");








const routes = [
    {
        path: '',
        component: _danh_sach_cho_xac_nhan_bhyt_danh_sach_cho_xac_nhan_bhyt_component__WEBPACK_IMPORTED_MODULE_3__["DanhSachChoXacNhanBhytComponent"],
        data: {
            title: 'Danh sách chờ xác nhận bhyt',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].XacNhanBHYT,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
    },
    {
        path: 'ds-xac-nhan-bhyt/:id',
        component: _chi_tiet_xac_nhan_bhyt_chi_tiet_xac_nhan_bhyt_component__WEBPACK_IMPORTED_MODULE_4__["ChiTietXacNhanBhytComponent"],
        data: {
            title: 'Thông tin chi tiết chờ xác nhận bhyt',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].XacNhanBHYT,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_7__["PermisssionGuard"]]
    }
];
let XacNhanBhytRoutingModule = class XacNhanBhytRoutingModule {
};
XacNhanBhytRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], XacNhanBhytRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.model.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.model.ts ***!
  \***************************************************************************/
/*! exports provided: XacNhanBhyt, ThongTinHanhChinh, ThongTinBaoHiemXaHoi, DanhSachLichSuXacNhan, TagItem, TimKiemThongTinBenhNhan, GridXacNhanBhyt, IcdKemTheoModel, GridBhytModel, DesignateCoincidentServiceModel, InsuranceModelRequest, ListLoaiPhanTramPttt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBhyt", function() { return XacNhanBhyt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHanhChinh", function() { return ThongTinHanhChinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBaoHiemXaHoi", function() { return ThongTinBaoHiemXaHoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachLichSuXacNhan", function() { return DanhSachLichSuXacNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return TagItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemThongTinBenhNhan", function() { return TimKiemThongTinBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridXacNhanBhyt", function() { return GridXacNhanBhyt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcdKemTheoModel", function() { return IcdKemTheoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBhytModel", function() { return GridBhytModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignateCoincidentServiceModel", function() { return DesignateCoincidentServiceModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceModelRequest", function() { return InsuranceModelRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLoaiPhanTramPttt", function() { return ListLoaiPhanTramPttt; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class XacNhanBhyt {
    constructor(Id = 0, MaTN = null, MaBN = null, HoTen = null, NamSinh = null, TenGioiTinh = null, DiaChi = null, SoDienThoai = null, SoTienDaXacNhan = 0, SoTienChoXacNhan = 0, ChuaXacNhan = true, SearchString = null, DaXacNhan = true, ThoiDiemTiepNhanTu = null, ThoiDiemTiepNhanDen = null, FromDate = null, ToDate = null) {
        this.Id = Id;
        this.MaTN = MaTN;
        this.MaBN = MaBN;
        this.HoTen = HoTen;
        this.NamSinh = NamSinh;
        this.TenGioiTinh = TenGioiTinh;
        this.DiaChi = DiaChi;
        this.SoDienThoai = SoDienThoai;
        this.SoTienDaXacNhan = SoTienDaXacNhan;
        this.SoTienChoXacNhan = SoTienChoXacNhan;
        this.ChuaXacNhan = ChuaXacNhan;
        this.SearchString = SearchString;
        this.DaXacNhan = DaXacNhan;
        this.ThoiDiemTiepNhanTu = ThoiDiemTiepNhanTu;
        this.ThoiDiemTiepNhanDen = ThoiDiemTiepNhanDen;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}
class ThongTinHanhChinh {
    constructor(Id = 0, MaTN = null, MaBN = null, HoTen = null, NamSinh = null, TenGioiTinh = null, DiaChi = null, SoDienThoaiStr = null, Email = null, DoiTuongUuDai = null, CongTyUuDai = null) {
        this.Id = Id;
        this.MaTN = MaTN;
        this.MaBN = MaBN;
        this.HoTen = HoTen;
        this.NamSinh = NamSinh;
        this.TenGioiTinh = TenGioiTinh;
        this.DiaChi = DiaChi;
        this.SoDienThoaiStr = SoDienThoaiStr;
        this.Email = Email;
        this.DoiTuongUuDai = DoiTuongUuDai;
        this.CongTyUuDai = CongTyUuDai;
    }
}
class ThongTinBaoHiemXaHoi {
    constructor(SoThe = null, NgayHieuLucStr = null, NgayHetHanStr = null, NoiDangKyKhamBenh = null, TuyenKham = null, GiayChuyenVien = null, GiayChuyenVienId = null, GiayMiemCungTriTra = null, GiayMienCungTriTraId = null, MucHuong = 0, NoiChuyenDi = null) {
        this.SoThe = SoThe;
        this.NgayHieuLucStr = NgayHieuLucStr;
        this.NgayHetHanStr = NgayHetHanStr;
        this.NoiDangKyKhamBenh = NoiDangKyKhamBenh;
        this.TuyenKham = TuyenKham;
        this.GiayChuyenVien = GiayChuyenVien;
        this.GiayChuyenVienId = GiayChuyenVienId;
        this.GiayMiemCungTriTra = GiayMiemCungTriTra;
        this.GiayMienCungTriTraId = GiayMienCungTriTraId;
        this.MucHuong = MucHuong;
        this.NoiChuyenDi = NoiChuyenDi;
    }
}
class DanhSachLichSuXacNhan {
    constructor(DgBHYTChiTra = null, NgayCapNhatStr = null, NgươiCapNhat = null, DgBh = null, DgBhChiTra = null, MucHuong = null, SoLuong = null, Order = null, NgayDuyet = null, TenNhanVien = null, TiLeDv = null, TtBh = null, TtBhChiTra = null) {
        this.DgBHYTChiTra = DgBHYTChiTra;
        this.NgayCapNhatStr = NgayCapNhatStr;
        this.NgươiCapNhat = NgươiCapNhat;
        this.DgBh = DgBh;
        this.DgBhChiTra = DgBhChiTra;
        this.MucHuong = MucHuong;
        this.SoLuong = SoLuong;
        this.Order = Order;
        this.NgayDuyet = NgayDuyet;
        this.TenNhanVien = TenNhanVien;
        this.TiLeDv = TiLeDv;
        this.TtBh = TtBh;
        this.TtBhChiTra = TtBhChiTra;
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
class TimKiemThongTinBenhNhan {
    constructor(TimKiemMaBNVaMaTN = null) {
        this.TimKiemMaBNVaMaTN = TimKiemMaBNVaMaTN;
    }
}
class GridXacNhanBhyt {
    constructor(CheckedDefault = null, HuongBhyt = null, TrangThaiThanhToan = null, DichVuId = null, TenDichVu = null, Id = null, SoLuong = null, DonGiaBenhVien = null, ThanhTienBenhVien = null, DGBHYTThamKhao = null, ThanhTienBHYTThamKhao = null, TiLeTheoDichVu = null, LoaiPhanTram = null, LoaiPhanTramText = null, TiLeDv = null, IsPttt = null, MucHuong = null, DGBHYTChiTra = null, TTBHYTChiTra = null, TTBHYTChiTraGiaSu = null, BNThanhToan = null, IsDaXacNhan = null, HighLightClass = null, GroupType = null, IsWarning = null, NhanVienChiDinh = null, NoiChiDinh = null, IcdChinh = null, MucHuongSystem = null, GhiChuIcdChinh = null, CanModify = null, MucHuongDaDuyet = null, showInfoChangeMucHuongDuyet = false, YeuCauKhamBenhId = null, IcdKemTheos = []) {
        this.CheckedDefault = CheckedDefault;
        this.HuongBhyt = HuongBhyt;
        this.TrangThaiThanhToan = TrangThaiThanhToan;
        this.DichVuId = DichVuId;
        this.TenDichVu = TenDichVu;
        this.Id = Id;
        this.SoLuong = SoLuong;
        this.DonGiaBenhVien = DonGiaBenhVien;
        this.ThanhTienBenhVien = ThanhTienBenhVien;
        this.DGBHYTThamKhao = DGBHYTThamKhao;
        this.ThanhTienBHYTThamKhao = ThanhTienBHYTThamKhao;
        this.TiLeTheoDichVu = TiLeTheoDichVu;
        this.LoaiPhanTram = LoaiPhanTram;
        this.LoaiPhanTramText = LoaiPhanTramText;
        this.TiLeDv = TiLeDv;
        this.IsPttt = IsPttt;
        this.MucHuong = MucHuong;
        this.DGBHYTChiTra = DGBHYTChiTra;
        this.TTBHYTChiTra = TTBHYTChiTra;
        this.TTBHYTChiTraGiaSu = TTBHYTChiTraGiaSu;
        this.BNThanhToan = BNThanhToan;
        this.IsDaXacNhan = IsDaXacNhan;
        this.HighLightClass = HighLightClass;
        this.GroupType = GroupType;
        this.IsWarning = IsWarning;
        this.NhanVienChiDinh = NhanVienChiDinh;
        this.NoiChiDinh = NoiChiDinh;
        this.IcdChinh = IcdChinh;
        this.MucHuongSystem = MucHuongSystem;
        this.GhiChuIcdChinh = GhiChuIcdChinh;
        this.CanModify = CanModify;
        this.MucHuongDaDuyet = MucHuongDaDuyet;
        this.showInfoChangeMucHuongDuyet = showInfoChangeMucHuongDuyet;
        this.YeuCauKhamBenhId = YeuCauKhamBenhId;
        this.IcdKemTheos = IcdKemTheos;
    }
}
class IcdKemTheoModel {
    constructor(Icd = null, GhiChu = null) {
        this.Icd = Icd;
        this.GhiChu = GhiChu;
    }
}
class GridBhytModel {
    constructor(data = [], total = 0) {
        this.data = data;
        this.total = total;
    }
}
class DesignateCoincidentServiceModel {
    constructor(Id = null, ServiceId = null, ServiceGroup = null, PhongBenhVienChiDinh = null, BacSyChiDinh = null) {
        this.Id = Id;
        this.ServiceId = ServiceId;
        this.ServiceGroup = ServiceGroup;
        this.PhongBenhVienChiDinh = PhongBenhVienChiDinh;
        this.BacSyChiDinh = BacSyChiDinh;
    }
}
class InsuranceModelRequest {
    constructor(BenefitInsurance = [], NonBenefitInsurance = [], IdYeuCauTiepNhan = null) {
        this.BenefitInsurance = BenefitInsurance;
        this.NonBenefitInsurance = NonBenefitInsurance;
        this.IdYeuCauTiepNhan = IdYeuCauTiepNhan;
    }
}
class ListLoaiPhanTramPttt {
    constructor(DisplayName = null, KeyId = null) {
        this.DisplayName = DisplayName;
        this.KeyId = KeyId;
    }
}


/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.module.ts ***!
  \****************************************************************************/
/*! exports provided: XacNhanBhytModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBhytModule", function() { return XacNhanBhytModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _xac_nhan_bhyt_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xac-nhan-bhyt-routing.module */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt-routing.module.ts");
/* harmony import */ var _danh_sach_cho_xac_nhan_bhyt_danh_sach_cho_xac_nhan_bhyt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component.ts");
/* harmony import */ var _chi_tiet_xac_nhan_bhyt_chi_tiet_xac_nhan_bhyt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _danh_sach_lich_xac_nhan_danh_sach_lich_xac_nhan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component.ts");
/* harmony import */ var _xac_nhan_bhyt_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xac-nhan-bhyt.service */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _bhyt_thong_tin_xac_nhan_bhyt_thong_tin_xac_nhan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component */ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component.ts");
/* harmony import */ var _lich_su_xac_nhan_bhyt_lich_su_xac_nhan_bhyt_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lich-su-xac-nhan-bhyt/lich-su-xac-nhan-bhyt.module */ "./src/app/modules/main/thu-chi/lich-su-xac-nhan-bhyt/lich-su-xac-nhan-bhyt.module.ts");






















let XacNhanBhytModule = class XacNhanBhytModule {
};
XacNhanBhytModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _danh_sach_cho_xac_nhan_bhyt_danh_sach_cho_xac_nhan_bhyt_component__WEBPACK_IMPORTED_MODULE_4__["DanhSachChoXacNhanBhytComponent"],
            _chi_tiet_xac_nhan_bhyt_chi_tiet_xac_nhan_bhyt_component__WEBPACK_IMPORTED_MODULE_5__["ChiTietXacNhanBhytComponent"],
            _danh_sach_lich_xac_nhan_danh_sach_lich_xac_nhan_component__WEBPACK_IMPORTED_MODULE_15__["DanhSachLichXacNhanComponent"],
            _bhyt_thong_tin_xac_nhan_bhyt_thong_tin_xac_nhan_component__WEBPACK_IMPORTED_MODULE_19__["BhytThongTinXacNhanComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _xac_nhan_bhyt_routing_module__WEBPACK_IMPORTED_MODULE_3__["XacNhanBhytRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
            _lich_su_xac_nhan_bhyt_lich_su_xac_nhan_bhyt_module__WEBPACK_IMPORTED_MODULE_20__["LichSuXacNhanBhytModule"]
        ],
        providers: [
            _xac_nhan_bhyt_service__WEBPACK_IMPORTED_MODULE_16__["XacNhanBHYTService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__["BaseService"], useClass: _xac_nhan_bhyt_service__WEBPACK_IMPORTED_MODULE_16__["XacNhanBHYTService"] },
        ],
        entryComponents: [
            _danh_sach_lich_xac_nhan_danh_sach_lich_xac_nhan_component__WEBPACK_IMPORTED_MODULE_15__["DanhSachLichXacNhanComponent"]
        ]
    })
], XacNhanBhytModule);



/***/ }),

/***/ "./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main/thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.service.ts ***!
  \*****************************************************************************/
/*! exports provided: XacNhanBHYTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanBHYTService", function() { return XacNhanBHYTService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let XacNhanBHYTService = class XacNhanBHYTService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'XacNhanBHYT';
    }
};
XacNhanBHYTService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
XacNhanBHYTService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XacNhanBHYTService);



/***/ }),

/***/ "./src/app/shared/enum/trang-thai-thanh-toan.enum.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/enum/trang-thai-thanh-toan.enum.ts ***!
  \***********************************************************/
/*! exports provided: EnumTrangThaiThanhToan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumTrangThaiThanhToan", function() { return EnumTrangThaiThanhToan; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EnumTrangThaiThanhToan;
(function (EnumTrangThaiThanhToan) {
    EnumTrangThaiThanhToan[EnumTrangThaiThanhToan["ChuaThanhToan"] = 1] = "ChuaThanhToan";
    EnumTrangThaiThanhToan[EnumTrangThaiThanhToan["DaThanhToan"] = 2] = "DaThanhToan";
    EnumTrangThaiThanhToan[EnumTrangThaiThanhToan["CapNhatThanhToan"] = 3] = "CapNhatThanhToan";
    EnumTrangThaiThanhToan[EnumTrangThaiThanhToan["HuyThanhToan"] = 4] = "HuyThanhToan";
})(EnumTrangThaiThanhToan || (EnumTrangThaiThanhToan = {}));


/***/ })

}]);
//# sourceMappingURL=thu-chi-xac-nhan-bhyt-xac-nhan-bhyt-module-es2015.js.map