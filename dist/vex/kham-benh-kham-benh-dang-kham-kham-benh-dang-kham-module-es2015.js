(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-benh-kham-benh-dang-kham-kham-benh-dang-kham-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Bệnh Đang Khám',Path:'', Active:true}          \n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" urlGetData=\"KhamBenh/GetDataForGridKhamBenhDangKham\" [groups]=\"groups\"\n                urlGetTotalPage=\"KhamBenh/GetTotalPageForGridKhamBenhDangKham\" [useHeaderDefault]=\"false\" [searchString]=\"timKiemNangCaoObj.SearchString\"\n                [checkboxAble]=\"false\"\n                [headerTemplate]=\"headerTemplate\">\n            </app-grid>\n            <ng-template #thoiDiemTiepNhanTemplate let-dataItem>\n                {{dataItem.ThoiDiemTiepNhanDisplay}}\n            </ng-template>\n            <ng-template #slBenhNhanNhanTemplate let-dataItem>\n                <a (click)=\"xemDanhSachBenhNhan(dataItem.PhongBenhVienId, dataItem.TenPhongBenhVien)\">{{dataItem.SoLuongBenhNhan}}</a>\n            </ng-template>\n            <ng-template #phongTemplate let-dataItem>\n                <a (click)=\"xemDanhSachBenhNhan(dataItem.PhongBenhVienId, dataItem.TenPhongBenhVien)\">{{dataItem.Phong}}</a>\n            </ng-template>\n            <ng-template #khoaGroupHeaderTemplate let-value=\"value\">\n                <strong>{{value}}</strong>\n            </ng-template>\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-combobox fxFlex=\"300px\" label=\"Khoa\" id=\"KhoaPhongId\" class=\"mt-5 mr-2 on-header\" url=\"KhamBenh/GetListKhoaBenhVien\" \n                        [(model)]=\"timKiemNangCaoObj.KhoaPhongId\" hierarchyKeyToSend=\"KhoaPhongId\"\n                        (modelChange)=\"timKiemNangCao()\" popupSettings=\"null\" [reloadForGrid]=\"true\"\n                        [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" [broadcastAfterLoaded]=\"true\">\n                        <ng-template #khoaTemplateHeader let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <th width=\"20%\">Mã</th>\n                                    <th>Dịch vụ</th>\n                                </tr>\n                            </table>\n                        </ng-template>\n                        <ng-template #khoaTemplate let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                                    <td>{{dataItem.Ten}}</td>\n                                </tr>\n                            </table>\n                        </ng-template>\n                    </app-combobox>\n                    <app-combobox fxFlex=\"300px\" label=\"Phòng\" id=\"PhongBenhVienId\" class=\"mt-5 mr-2 on-header\" url=\"KhamBenh/GetListPhongBenhVien\" \n                        [(model)]=\"timKiemNangCaoObj.PhongBenhVienId\" hierarchyKeyToListen=\"KhoaPhongId\"\n                        (modelChange)=\"timKiemNangCao()\" popupSettings=\"null\" [reloadForGrid]=\"true\"\n                        [templateHeader]=\"phongTemplateHeader\" [template]=\"phongTemplate\" [broadcastAfterLoaded]=\"true\">\n                        <ng-template #phongTemplateHeader let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <th width=\"20%\">Mã</th>\n                                    <th>Dịch vụ</th>\n                                </tr>\n                            </table>\n                        </ng-template>\n                        <ng-template #phongTemplate let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                                    <td>{{dataItem.Ten}}</td>\n                                </tr>\n                            </table>\n                        </ng-template>\n                    </app-combobox>\n                    \n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa tìm kiếm BS/BN\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n                    \n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                    <button class=\"ml-3\" (click)=\"exportExcel()\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.html":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.html ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Đang Khám',Path:'/kham-benh-dang-kham', queryParams: {holdQuery : true}},\n                    {Title:'DS Người bệnh đang khám trong phòng',Path:'/kham-benh-dang-kham/danh-sach-dang-kham/' + this.benhNhanHienTai.PhongBenhVienId, queryParams: {holdQuery : true}},\n                    {Title:'Người bệnh đang khám',Path:'', Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n            <app-hot-key [keys]=\"[\n                {Key:'Ctrl + F1',Description:'Di chuyển tới và mở tab Khám bệnh'},\n                {Key:'Ctrl + F2',Description:'Di chuyển tới và mở tab Lịch sử khám'},\n                {Key:'Ctrl + F3',Description:'Di chuyển tới và mở tab Chỉ định'},\n                {Key:'Ctrl + F5',Description:'Di chuyển tới và mở tab Kết quả CLS'},\n                {Key:'Ctrl + F6',Description:'Di chuyển tới và mở tab Chẩn đoán'},\n\n                {Key:'Ctrl + F7',Description:'Di chuyển tới và check Cho về, kê đơn thuốc'},\n                {Key:'Ctrl + F8',Description:'Di chuyển tới và check Hẹn tái khám'},\n                {Key:'Ctrl + F9',Description:'Di chuyển tới và check Chuyển khám'},\n                {Key:'Ctrl + F10',Description:'Di chuyển tới và check Nhập viện'},\n                {Key:'Ctrl + F11',Description:'Di chuyển tới và check Chuyển viện'},\n                {Key:'Ctrl + F12',Description:'Di chuyển tới và check Tử vong'},\n\n                {Key:'Ctrl + H',Description:'Hoàn thành khám'},\n                {Key:'Ctrl + P',Description:'In chỉ định'},\n                {Key:'Ctrl + P',Description:'In kê toa'},\n                {Key:'Ctrl + S',Description:'Lưu form khám bệnh'},\n                {Key:'Esc',Description:'Hủy', End:true}\n            ]\"></app-hot-key>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div @fadeInUp class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <div style=\"display: flow-root;\" class=\"ml-4 py-3 border-b\">\n                            <h3 class=\"title blue\" style=\"float: left;\">NGƯỜI BỆNH ĐANG KHÁM</h3>\n                            <h3 *ngIf=\"benhNhanHienTai.Id != 0 && benhNhanHienTai.YeuCauKhamBenh.LaThamVan\" class=\"title red\" style=\"float: right;\">DỊCH VỤ KHÁM THAM VẤN</h3>\n                        </div>\n                        <ng-container *ngIf=\"benhNhanHienTai.Id == 0\">\n                            <p class=\"ml-4 mt-2\">Chưa chọn người bệnh</p>\n                        </ng-container>\n                        <ng-container *ngIf=\"benhNhanHienTai.Id != 0\">\n                            <div class=\"row ml-1 mb-2\">\n                                <!-- style=\"background: #e1f5fe;\"  -->\n                                <fieldset fxFlex=\"100%\" class=\"{{(benhNhanHienTai.YeuCauTiepNhan != null && benhNhanHienTai.YeuCauTiepNhan.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n                                    <legend>Thông tin hành chính</legend>\n                                    <div fxFlex=\"100%\" *ngIf=\"benhNhanHienTai.YeuCauTiepNhan != null\">\n                                        <ul class=\"inline\">\n                                            <li>Mã TN:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.MaYeuCauTiepNhan}}</strong>\n                                            </li>\n                                            <li>Mã NB:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.BenhNhan.MaBN}}</strong>\n                                            </li>\n                                            <li>Họ tên:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.HoTen}}</strong>\n                                            </li>\n                                            <li>Giới tính:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.TenGioiTinh}}</strong>\n                                            </li>\n                                            <li *ngIf=\"!isDuoi6Tuoi\">Tuổi:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.Tuoi}}</strong>\n                                            </li>\n                                            <li *ngIf=\"isDuoi6Tuoi\">Tuổi:\n                                                <strong>{{Duoi6TuoiDisplay}}</strong>\n                                            </li>\n\n                                            <li>SĐT:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.SoDienThoaiDisplay}}</strong>\n                                            </li>\n                                            <li>Dân tộc:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.DanToc == null ? null : benhNhanHienTai.YeuCauTiepNhan.DanToc.Ten}}</strong>\n                                            </li>\n                                            <li>Địa chỉ:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.DiaChiDisplay}}</strong>\n                                            </li>\n                                            <li>Nghề nghiệp:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.NgheNghiep == null ? null : benhNhanHienTai.YeuCauTiepNhan.NgheNghiep.Ten}}</strong>\n                                            </li>\n                                            <li>Tuyến khám: <strong style=\"color: green;\">{{benhNhanHienTai.YeuCauTiepNhan.TenLyDoVaoVien}}</strong>\n                                            </li>\n                                            <li>Số BHYT: <strong>{{benhNhanHienTai.YeuCauTiepNhan.BHYTMaSoThe}}</strong>\n                                            </li>\n                                            <li>Mức hưởng: <strong style=\"color: blue;\">{{benhNhanHienTai.YeuCauTiepNhan.BHYTMucHuong}}%</strong>\n                                            </li>\n\n                                            <li>Lý do TN:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.TenLyDoTiepNhan}}</strong>\n                                            </li>\n                                            <li>Ngày TN:\n                                                <strong>{{benhNhanHienTai.YeuCauTiepNhan.ThoiDiemTiepNhanDisplay}}</strong>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </fieldset>\n                            </div>\n                            <div class=\"row ml-1 temp d-inline\">\n                                <kendo-tabstrip fxFlex=\"100%\" id=\"card\" class=\"content-has-border tabstrip-pad sticky-kendotab-item\" (tabSelect)=\"chuyenDen('card', $event)\">\n                                    <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabKhamBenh\">\n                                        <ng-template kendoTabTitle>\n                                            <div kendoTooltip title=\"Phím tắt: Ctrl + F1\">\n                                                KHÁM BỆNH\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoTabContent>\n                                            <div class=\"p-2\">\n                                                <app-lan-kham-hien-tai-kham-benh [data]=\"benhNhanHienTai\" [phongKhamId]=\"phongBenhVienId\" \n                                                    [templateKhamCacCoQuanObj]=\"benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj\"\n                                                    [laChuyenKhoaKhamNhieu]=\"benhNhanHienTai.LaChuyenKhoaKhamNhieuKhamBenhDangKham\">\n                                                </app-lan-kham-hien-tai-kham-benh>\n\n\n                                                <div class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n                                                    <button (click)=\"quayLaiDanhSach()\" type=\"button\" color=\"primary\" mat-stroked-button mat-button style=\"float: left;\" class=\"mt-1 mr-2\">Quay Lại</button>\n                                                    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"xuLyQuayLaiChuaKham()\" class=\"float-left\">Quay lại chưa khám</button>\n                                                    \n                                                    <button type=\"button\" mat-button class=\"mr-2\" *ngIf=\"benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh\" (click)=\"cancelChangeData()\" title=\"Phím tắt: Esc\">Hủy</button>\n                                                    <button type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button *ngIf=\"benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh\" (click)=\"saveChangeData()\" title=\"Phím tắt: Ctrl + S\">Lưu</button>\n                                                    <!-- *ngIf=\"benhNhanHienTai.YeuCauKhamBenh.TrangThai == 1\" -->\n                                                    <button type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button (click)=\"xuLyChuyenDichVuKham()\">Chuyển dịch vụ khám</button>\n                                                </div>\n                                            </div>\n\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n                                    <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabLichSuKham\">\n                                        <ng-template kendoTabTitle>\n                                            <div kendoTooltip title=\"Phím tắt: Ctrl + F2\">\n                                                LỊCH SỬ KHÁM\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoTabContent>\n                                            <app-kham-benh-lich-su-kham-list [BenhNhan]=\"benhNhanHienTai.YeuCauTiepNhan.BenhNhanId\" [YeuCauTiepNhanId]=\"benhNhanHienTai.YeuCauTiepNhanId\">\n                                            </app-kham-benh-lich-su-kham-list>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n\n                                    <!-- tab chỉ định -->\n                                    <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabChiDinh\">\n                                        <ng-template kendoTabTitle>\n                                            <div kendoTooltip title=\"Phím tắt: Ctrl + F3\">\n                                                CHỈ ĐỊNH\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoTabContent>\n                                            <div class=\"m-2\">\n                                                <app-lan-kham-hien-tai-kham-benh-chi-dinh [data]=\"benhNhanHienTai\" [documentType]=\"documentType\">\n                                                </app-lan-kham-hien-tai-kham-benh-chi-dinh>\n                                            </div>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n\n                                    <!-- tab kết quả cls -->\n                                    <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabKetQuaCLS\">\n                                        <ng-template kendoTabTitle>\n                                            <div kendoTooltip title=\"Phím tắt: Ctrl + F5\">\n                                                KQ CLS\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoTabContent>\n                                            <div class=\"mt-2 ml-2 mr-2\">\n                                                <app-lan-kham-hien-tai-ket-qua-cls  [YeuCauTiepNhanId]=\"benhNhanHienTai.YeuCauTiepNhanId\"\n                                                    [documentType]=\"documentType\">\n                                                </app-lan-kham-hien-tai-ket-qua-cls>\n                                            </div>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n\n\n                                    <kendo-tabstrip-tab [selected]=\"lstStatusSelectTabKhambenh.selectedTabChanDoan\">\n                                        <ng-template kendoTabTitle>\n                                            <div kendoTooltip title=\"Phím tắt: Ctrl + F6\">\n                                                CHẨN ĐOÁN\n                                            </div>\n                                        </ng-template>\n                                        <ng-template kendoTabContent>\n                                            <div class=\"p-2\">\n                                                <app-lan-kham-hien-tai-ket-luan [data]=\"benhNhanHienTai\" [dataYeuCauKhamBenh]=\"benhNhanHienTai.YeuCauKhamBenh\" \n                                                    [dataICDKhacs]=\"benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs\" [dataYeuCauKhamBenhPrevious]=\"yeuCauKhamBenhPrevious\" \n                                                    [validationErrors]=\"validationKetLuanErrors\" [documentType]=\"documentType\">\n                                                </app-lan-kham-hien-tai-ket-luan>\n\n                                                <div class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n                                                    <button (click)=\"quayLaiDanhSach()\" type=\"button\" color=\"primary\" mat-stroked-button mat-button style=\"float: left;\" class=\"mt-1 mr-2\">Quay Lại</button>\n                                                    \n                                                    <button (click)=\"huy()\" type=\"button\" *ngIf=\"this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1 mt-2\" title=\"Phím tắt: Esc\">Hủy</button>\n                                                    <button (click)=\"luuKetLuan()\" type=\"button\" *ngIf=\"this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" title=\"Phím tắt: Ctrl + S\">Lưu</button>\n\n                                                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" \n                                                        [disabled]=\"benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru == true\" (click)=\"hoanThanhKham()\" title=\"Phím tắt: Ctrl + H\">Lưu và Hoàn thành khám\n                                                    </button>\n\n                                                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" (click)=\"inPhieuKham()\">In phiếu khám\n                                                        bệnh</button>\n\n                                                    <button type=\"button\" color=\"primary\" *ngIf=\"this.benhNhanHienTai.YeuCauTiepNhan.CoBHYT == true\" mat-raised-button mat-button class=\"mr-1\" (click)=\"inGiayNghiHuongBHXH()\">In giấy nghỉ\n                                                        hưởng BHXH</button>\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n\n                                    <!-- số dư tạm ứng -->\n                                    <kendo-tabstrip-tab [disabled]=\"true\" cssClass=\"tab-right-po\">\n                                        <ng-template kendoTabTitle>\n                                            Tạm ứng:\n                                            <b>{{benhNhanHienTai.YeuCauKhamBenh.SoDuTaiKhoanDisplay}}</b>\n                                            -\n                                            Còn lại: <b>{{benhNhanHienTai.YeuCauKhamBenh.SoDuTaiKhoanConLaiDisplay}}</b>\n                                        </ng-template>\n                                        <ng-template kendoTabContent>\n                                        </ng-template>\n                                    </kendo-tabstrip-tab>\n                                </kendo-tabstrip>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Bệnh Đang Khám',Path: '/kham-benh-dang-kham', queryParams: {holdQuery : true}},\n                        {Title:'DS Người bệnh đang khám trong phòng',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n                <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"KhamBenh/GetDataForGridKhamBenhDangKhamTheoPhongKham\" urlGetTotalPage=\"KhamBenh/GetTotalPageForGridKhamBenhDangKhamTheoPhongKham\" \n                     [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"true\" [sort]=\"sort\"\n                    [headerTemplate]=\"headerTemplate\" [searchString]=\"timKiemNangCaoObj.SearchString\">\n                </app-grid>\n                <!-- [additionalSearchString]=\"phongBenhVienId\" -->\n        \n                <ng-template #headerTemplate>\n                    <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        \n                        <app-checkbox [(model)]=\"timKiemNangCaoObj.TrangThai.ChuaKham\" \n                            id=\"chuaKham\" label=\"Chưa khám\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\"> \n                        </app-checkbox>\n                        <app-checkbox [(model)]=\"timKiemNangCaoObj.TrangThai.DangKham\" \n                            id=\"dangKham\" label=\"Đang khám\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                        </app-checkbox>\n                        <app-checkbox [(model)]=\"timKiemNangCaoObj.TrangThai.DangLamChiDinh\" \n                            id=\"dangLamChiDinh\" label=\"Đang làm chỉ định\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                        </app-checkbox>\n                        <app-checkbox [(model)]=\"timKiemNangCaoObj.TrangThai.DangDoiKetLuan\" \n                            id=\"dangDoiKetLuan\" label=\"Đang đợi kết luận\" class=\"ml-2\" (modelChange)=\"timKiemNangCao()\">\n                        </app-checkbox>\n        \n                        <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                            [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay\" \n                            label=\"Tiếp nhận từ - đến\"  (modelChange)=\"timKiemNangCao()\">\n                        </app-daterangepicker>\n                        \n                        <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                            fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                                type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                        </div>\n                        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                        </button>\n\n                        <button (click)=\"quayLai()\" type=\"button\" color=\"primary\" mat-stroked-button mat-button \n                            style=\"margin-left: auto;\" class=\"ml-auto\">Quay Lại</button>\n\n                            <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mt-1 ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                                <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                            </button>\n                            \n                            <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                                <div *ngFor=\"let column of _gridColumnsFilter\">\n                                    <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                        <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                            {{ column.Title }}\n                                        </mat-checkbox>\n                                    </button>\n                                </div>\n                            </mat-menu>\n                            <button class=\"ml-3\" (click)=\"exportExcel()\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                            </button>\n                    </div>\n                </ng-template>\n        \n                <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n                    {{rowIndex + 1}}\n                </ng-template>\n                <ng-template #thoiDiemTiepNhanTemplate let-dataItem>\n                    {{dataItem.ThoiDiemTiepNhanDisplay}}\n                </ng-template>\n        \n                <ng-template #maTNTemplate let-dataItem>\n                    <a (click)=\"batDauKham(dataItem.PhongBenhVienHangDoiId)\">\n                        <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTiepNhan}}\">{{dataItem.MaTiepNhan}}\n                        </p>\n                    </a>\n                </ng-template>\n                <ng-template #hoTenTemplate let-dataItem>\n                    <p style=\"position: relative;\">{{dataItem.HoTen}}<img *ngIf=\"dataItem.CoBaoHiem\" src=\"assets/img/logoBHXH.png\" class=\"icon-bhyt\" /></p>\n                </ng-template>\n        \n                <ng-template #trangThaiTemplate let-dataItem>\n                    <div style=\"position: relative;\">\n                        <span [ngClass]=\"{'blackText': dataItem.TrangThai == trangThaiYCKB.ChuaKham, \n                                'orangeText': (dataItem.TrangThai == trangThaiYCKB.DangKham \n                                                || dataItem.TrangThai == trangThaiYCKB.DangLamChiDinh\n                                                || dataItem.TrangThai == trangThaiYCKB.DangDoiKetLuan),\n                                'greenText': dataItem.TrangThai == trangThaiYCKB.DaKham}\">\n                            {{dataItem.TenTrangThai}}\n                        </span>\n                    </div>\n                </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgva2hhbS1iZW5oLWRhbmcta2hhbS9raGFtLWJlbmgtZGFuZy1raGFtLWxpc3Qva2hhbS1iZW5oLWRhbmcta2hhbS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: KhamBenhDangKhamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamBenhDangKhamListComponent", function() { return KhamBenhDangKhamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kham_benh_dang_kham_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kham-benh-dang-kham.model */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");





















let KhamBenhDangKhamListComponent = class KhamBenhDangKhamListComponent {
    constructor(router, route, location, dialog, apiService, authService, notificationService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.dialog = dialog;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.baseRoute = "/kham-benh-dang-kham";
        this.gridColumns = [];
        //searchString: string;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.timKiemNangCaoObj = new _kham_benh_dang_kham_model__WEBPACK_IMPORTED_MODULE_9__["KhamBenhDangKhamTimKiem"]();
        this._gridColumnsFilter = [];
        this._isCheckColumnFilter = true;
        this.groups = [{ field: 'Khoa', dir: 'asc', aggregates: [] }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].KhamBenhDangKham;
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_11__["LocalStorageHelper"].getItem("additionalSearchStringKhamBenhDangKhamList");
                if (additionalSearchString != null) {
                    this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                    this.gridChild.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_11__["LocalStorageHelper"].removeItem("additionalSearchStringKhamBenhDangKhamList");
        }
        this.gridColumns = [
            { Field: "Phong", Title: "Phòng", Width: 200, Sortable: true, Template: this.phongTemplate },
            { Field: "Khoa", Title: "Khoa", Hidden: true, Width: 200, Template: this.khoaGroupHeaderTemplate },
            { Field: "BacSiDangKham", Title: "Bác sĩ đang khám", MinWidth: 150, Sortable: true },
            { Field: "BenhNhanDangKham", Title: "Người bệnh đang khám", Width: 250, Sortable: true },
            { Field: "SoLuongBenhNhan", Title: "SL Người bệnh trong phòng", Width: 200, Sortable: true, Template: this.slBenhNhanNhanTemplate }
        ];
        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '' && !p.Hidden);
    }
    searchChanges(event) {
        if (event != undefined && (event == null || event == "")) {
            this.gridChild.searchString = null;
            //this.gridChild.search();
            this.timKiemNangCao();
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            //this.gridChild.search();
            this.timKiemNangCao();
        }
    }
    clearSearch() {
        this.timKiemNangCaoObj.SearchString = null;
        this.gridChild.searchString = null;
        // this.gridChild.search();
        this.timKiemNangCao();
    }
    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        var queryString = JSON.stringify(this.timKiemNangCaoObj);
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_11__["LocalStorageHelper"].setItem("additionalSearchStringKhamBenhDangKhamList", queryString);
        this.gridChild.search();
    }
    xemDanhSachBenhNhan(phongBenhVienId, tenPhongBenhVien) {
        if (phongBenhVienId != undefined && phongBenhVienId != null && phongBenhVienId != 0) {
            this.router.navigate([this.baseRoute + "/danh-sach-dang-kham/" + phongBenhVienId]); //,{ queryParams: { holdQuery: true} }
        }
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Process)) {
            let queryGridInfo = this.gridChild._gridQueryInfo;
            this.apiService.postExportExcel("KhamBenh/ExportKhamBenhDangKham", queryGridInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "KhamBenhDangKham" + dateTimeNow.getFullYear() + ".xlsx");
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
};
KhamBenhDangKhamListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_18__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_20__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoaGroupHeaderTemplate', { static: true })
], KhamBenhDangKhamListComponent.prototype, "khoaGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slBenhNhanNhanTemplate', { static: true })
], KhamBenhDangKhamListComponent.prototype, "slBenhNhanNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phongTemplate', { static: true })
], KhamBenhDangKhamListComponent.prototype, "phongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true, read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"] })
], KhamBenhDangKhamListComponent.prototype, "gridChild", void 0);
KhamBenhDangKhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kham-benh-dang-kham-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-benh-dang-kham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-benh-dang-kham-list.component.scss */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.scss")).default]
    })
], KhamBenhDangKhamListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: KhamBenhDangKhamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamBenhDangKhamRoutingModule", function() { return KhamBenhDangKhamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _kham_benh_dang_kham_list_kham_benh_dang_kham_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-benh-dang-kham-list/kham-benh-dang-kham-list.component */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.ts");
/* harmony import */ var _kham_benh_dang_kham_theo_phong_kham_chi_tiet_kham_benh_dang_kham_theo_phong_kham_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.ts");
/* harmony import */ var _kham_benh_dang_kham_theo_phong_kham_kham_benh_dang_kham_theo_phong_kham_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.ts");








const routes = [
    {
        path: '',
        component: _kham_benh_dang_kham_list_kham_benh_dang_kham_list_component__WEBPACK_IMPORTED_MODULE_5__["KhamBenhDangKhamListComponent"],
        data: {
            title: "Khám bệnh đang khám",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KhamBenhDangKham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        }
    },
    {
        path: 'danh-sach-dang-kham/:id',
        component: _kham_benh_dang_kham_theo_phong_kham_kham_benh_dang_kham_theo_phong_kham_component__WEBPACK_IMPORTED_MODULE_7__["KhamBenhDangKhamTheoPhongKhamComponent"],
        data: {
            title: "Danh sách đang khám theo phòng khám",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KhamBenhDangKham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        }
    },
    {
        path: 'danh-sach-dang-kham/benh-nhan-dang-kham/:id',
        component: _kham_benh_dang_kham_theo_phong_kham_chi_tiet_kham_benh_dang_kham_theo_phong_kham_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__["KhamBenhDangKhamTheoPhongKhamChiTietComponent"],
        data: {
            title: "Người bệnh đang khám",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KhamBenhDangKham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        }
    },
];
let KhamBenhDangKhamRoutingModule = class KhamBenhDangKhamRoutingModule {
};
KhamBenhDangKhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KhamBenhDangKhamRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.scss ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n\n.sticky-button-action {\n  position: sticky;\n  position: -webkit-sticky;\n  bottom: 0px;\n  background-color: white;\n  border-top: 1px solid #ccc;\n  overflow: hidden;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tYmVuaC9raGFtLWJlbmgtZGFuZy1raGFtL2toYW0tYmVuaC1kYW5nLWtoYW0tdGhlby1waG9uZy1raGFtLWNoaS10aWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1iZW5oXFxraGFtLWJlbmgtZGFuZy1raGFtXFxraGFtLWJlbmgtZGFuZy1raGFtLXRoZW8tcGhvbmcta2hhbS1jaGktdGlldFxca2hhbS1iZW5oLWRhbmcta2hhbS10aGVvLXBob25nLWtoYW0tY2hpLXRpZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgva2hhbS1iZW5oLWRhbmcta2hhbS9raGFtLWJlbmgtZGFuZy1raGFtLXRoZW8tcGhvbmcta2hhbS1jaGktdGlldC9raGFtLWJlbmgtZGFuZy1raGFtLXRoZW8tcGhvbmcta2hhbS1jaGktdGlldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBS0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgva2hhbS1iZW5oLWRhbmcta2hhbS9raGFtLWJlbmgtZGFuZy1raGFtLXRoZW8tcGhvbmcta2hhbS1jaGktdGlldC9raGFtLWJlbmgtZGFuZy1raGFtLXRoZW8tcGhvbmcta2hhbS1jaGktdGlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWZvcm0td3JhcHBlciAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnBvLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmQtdW5zZXQge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gdWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAuaW5saW5lX2Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDI0MiwgMjUzLCAwLjUpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1ncm91cC1iIHtcbiAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgb3V0c2V0O1xufVxuXG4uc3RpY2t5LWxpc3Qge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5zdGlja3ktdGFiIHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0aWNreS10YWIgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyZTM4NGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y1ZjdmYTtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkuYWN0aXZlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5yZXNvbHZlZCB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5wcm9jZXNzaW5nIHtcbiAgY29sb3I6ICNmZjk4MDA7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnVuZnVsZmlsbGVkIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIHtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIC5wcy1zY3JvbGxiYXIteCB7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3RpY2t5LXBhbmVsYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDY0cHg7XG59XG5cbi5zdGlja3ktYnV0dG9uLWFjdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTA7XG59IiwiLm1lbnUtZm9ybS13cmFwcGVyIC5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ucG8tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZC11bnNldCB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSB1bC5pbmxpbmUgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5pbmxpbmVfYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjQyLCAyNTMsIDAuNSk7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLWdyb3VwLWIge1xuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KSBvdXRzZXQ7XG59XG5cbi5zdGlja3ktbGlzdCB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnN0aWNreS10YWIge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RpY2t5LXRhYiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLnN0aWNreS10YWIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzJlMzg0ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVmN2ZhO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5hY3RpdmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnJlc29sdmVkIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnByb2Nlc3Npbmcge1xuICBjb2xvcjogI2ZmOTgwMDtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkudW5mdWxmaWxsZWQge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwge1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwgLnBzLXNjcm9sbGJhci14IHtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGlja3ktcGFuZWxiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogNjRweDtcbn1cblxuLnN0aWNreS1idXR0b24tYWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: KhamBenhDangKhamTheoPhongKhamChiTietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamBenhDangKhamTheoPhongKhamChiTietComponent", function() { return KhamBenhDangKhamTheoPhongKhamChiTietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _kham_benh_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../kham-benh.model */ "./src/app/modules/main/kham-benh/kham-benh.model.ts");
/* harmony import */ var _kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_chuyen_kham_lan_kham_hien_tai_chuyen_kham_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-chuyen-kham/lan-kham-hien-tai-chuyen-kham.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-chuyen-kham/lan-kham-hien-tai-chuyen-kham.component.ts");
/* harmony import */ var _kham_benh_lan_kham_hien_tai_nghi_huong_bhyt_confirm_popup_nghi_huong_bhyt_confirm_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../kham-benh/lan-kham-hien-tai/nghi-huong-bhyt-confirm-popup/nghi-huong-bhyt-confirm-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/nghi-huong-bhyt-confirm-popup/nghi-huong-bhyt-confirm-popup.component.ts");
/* harmony import */ var _kham_benh_lan_kham_hien_tai_phieu_kham_benh_vao_vien_popup_phieu_kham_benh_vao_vien_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../kham-benh/lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component.ts");



















let KhamBenhDangKhamTheoPhongKhamChiTietComponent = class KhamBenhDangKhamTheoPhongKhamChiTietComponent {
    constructor(dialog, apiService, authService, notificationService, ref, route, router) {
        this.dialog = dialog;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.ref = ref;
        this.route = route;
        this.router = router;
        this.tabActive = "card0";
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].KhamBenhDangKham;
        this.baseRoute = "/kham-benh-dang-kham";
        this.phongBenhVienId = 0;
        this.phieuKhamBenhVo = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_15__["PhieuKhamBenhVo"]();
        this.isDuoi6Tuoi = false;
        this.Duoi6TuoiDisplay = "";
        this.lstStatusSelectTabKhambenh = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_15__["ListStatusSelectTabKhamBenh"]();
    }
    ngOnInit() {
        this.benhNhanHienTai = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_15__["BenhVienHangDoi"]();
        this.phongBenhVienId = this.benhNhanHienTai.PhongBenhVienId;
        // this.route.queryParams.subscribe(result => {
        //     this.trangThaiDanhSach = v;
        // });
        let id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getBenhNhanDangKham(id);
        }
    }
    showPopupLoadingData() {
        console.log('this.popupLoadingData.openDialogs', this.popupLoadingData);
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
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
    processDynamicComponent() {
        let dataKhamTheoTemplate;
        let lstDataKhamTheoTemplate = [];
        if (this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj !==
            null) {
            this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach((item) => {
                if (item.groupItems != undefined &&
                    item.groupItems != null &&
                    item.groupItems.length > 0) {
                    item.groupItems.forEach((element) => {
                        if (element.Value != undefined && element.Value !== null) {
                            dataKhamTheoTemplate = {
                                Id: element.Id,
                                Value: element.Value,
                            };
                            lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                        }
                    });
                }
                else if (item.Value != undefined && item.Value !== null) {
                    dataKhamTheoTemplate = {
                        Id: item.Id,
                        Value: item.Value,
                    };
                    lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                }
            });
            let strLstDataKhamTheoTemplate = JSON.stringify(lstDataKhamTheoTemplate);
            let saveTemplate = '{"DataKhamTheoTemplate": ' + strLstDataKhamTheoTemplate + "}";
            return saveTemplate;
        }
        return null;
    }
    bindDataDynamicComponent() {
        let strData = this.benhNhanHienTai.YeuCauKhamBenh
            .ThongTinKhamTheoDichVuData;
        if (strData != undefined && strData != null) {
            let dataObj = JSON.parse(strData);
            let itemTemp = null;
            if (this.benhNhanHienTai.YeuCauKhamBenh
                .ThongTinKhamTheoDichVuTemplateObj !== null) {
                this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach((item) => {
                    if (item.groupItems != undefined &&
                        item.groupItems != null &&
                        item.groupItems.length > 0) {
                        item.groupItems.forEach((element) => {
                            itemTemp = dataObj.DataKhamTheoTemplate.find((x) => x.Id == element.Id);
                            if (itemTemp != null) {
                                element.Value = itemTemp.Value;
                            }
                        });
                    }
                    else {
                        itemTemp = dataObj.DataKhamTheoTemplate.find((x) => x.Id == item.Id);
                        if (itemTemp != null) {
                            item.Value = itemTemp.Value;
                        }
                    }
                });
            }
        }
    }
    ganThongTinKhamTamThoi() {
        let yeuCauKhamBenhKhamBoPhanKhacs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs.slice();
        let yeuCauKhamBenhChanDoanPhanBiets = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets.slice();
        //trường hợp sửa data đã lưu trực tiếp trên grid
        const ketQuaSinhHieus = [];
        this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus.forEach(val => ketQuaSinhHieus.push(Object.assign({}, val)));
        let khamBenhBenhNhanDiUngThuocs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs.slice();
        let khamBenhBenhNhanTienSuBenhs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs.slice();
        let yeuCauKhamBenhBoPhanTonThuongs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs.slice();
        let ThongTinKhamTheoDichVuTemplateObj = JSON.stringify(this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj);
        ketQuaSinhHieus.forEach(element => {
            if (element.IsUpdate) {
                element.IsUpdate = false;
            }
        });
        this.thongTinKhamTemp = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_15__["ThongTinKhamPrevious"](this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan, this.benhNhanHienTai.YeuCauKhamBenh.BenhSu, this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu, this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan, this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan, this.benhNhanHienTai.YeuCauKhamBenh.HoHap, this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa, this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc, this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh, this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop, this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong, this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat, this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong, this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa, this.benhNhanHienTai.YeuCauKhamBenh.DaLieu, this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId, this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD, this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu, ThongTinKhamTheoDichVuTemplateObj, yeuCauKhamBenhKhamBoPhanKhacs, yeuCauKhamBenhChanDoanPhanBiets, ketQuaSinhHieus, khamBenhBenhNhanDiUngThuocs, khamBenhBenhNhanTienSuBenhs, yeuCauKhamBenhBoPhanTonThuongs, 
        //BVHD-3574
        null, null, this.benhNhanHienTai.YeuCauKhamBenh.NoiDungKhamBenh);
    }
    ganThongTinYeuCauKhamBenhPerevious() {
        const yeuCauKhamBenhICDKhacs = [];
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs.forEach(val => yeuCauKhamBenhICDKhacs.push(Object.assign({}, val)));
        this.yeuCauKhamBenhPrevious = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauKhamBenhPrevious"](this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId, this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh, this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh, this.benhNhanHienTai.YeuCauKhamBenh.CoTaiKham, this.benhNhanHienTai.YeuCauKhamBenh.NgayTaiKham, this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTaiKham, this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien, this.benhNhanHienTai.YeuCauKhamBenh.CoChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.KhoaPhongNhapVienId, this.benhNhanHienTai.YeuCauKhamBenh.TenKhoaPhongNhapVien, this.benhNhanHienTai.YeuCauKhamBenh.TinhTrangBenhNhanChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.LoaiLyDoChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.ThoiDiemChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.PhuongTienChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.NhanVienHoTongChuyenVienId, this.benhNhanHienTai.YeuCauKhamBenh.HoTenNhanVienHoTong, this.benhNhanHienTai.YeuCauKhamBenh.LyDoNhapVien, this.benhNhanHienTai.YeuCauKhamBenh.BenhVienChuyenVienId, this.benhNhanHienTai.YeuCauKhamBenh.TenBenhVienChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.LyDoChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.CoTuVong, this.benhNhanHienTai.YeuCauKhamBenh.TomTatKetQuaCLS, this.benhNhanHienTai.YeuCauKhamBenh.CachGiaiQuyet, this.benhNhanHienTai.YeuCauKhamBenh.GhiChu, this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.YeuCauKhamBenhId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.LoaiDichVuKyThuat, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomGiaDichVuKyThuatBenhVienId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.MaDichVu, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.MaGiaDichVu, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVu, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVuHienThi, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomChiPhi, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.Gia, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.SoLan, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DuocHuongBaoHiem, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThai, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThaiThanhToan, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhanVienChiDinhId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemChiDinh, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemDangKy, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenNhomDichVu, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomDichVuBenhVienId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DieuTriNgoaiTru, this.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemBatDauDieuTri, this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa, this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa, this.benhNhanHienTai.YeuCauKhamBenh.KetQuaXetNghiemCLS, this.benhNhanHienTai.YeuCauKhamBenh.PhuongPhapTrongDieuTri, yeuCauKhamBenhICDKhacs);
    }
    cancelChangeDataKetLuan() {
        this.validationKetLuanErrors = [];
        this.ref.detectChanges();
        this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId = this.yeuCauKhamBenhPrevious.IcdchinhId;
        this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh = this.yeuCauKhamBenhPrevious.TenICDChinh;
        this.benhNhanHienTai.YeuCauKhamBenh.CoTaiKham = this.yeuCauKhamBenhPrevious.CoTaiKham;
        this.benhNhanHienTai.YeuCauKhamBenh.NgayTaiKham = this.yeuCauKhamBenhPrevious.NgayTaiKham;
        this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTaiKham = this.yeuCauKhamBenhPrevious.GhiChuTaiKham;
        this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien = this.yeuCauKhamBenhPrevious.CoNhapVien;
        this.benhNhanHienTai.YeuCauKhamBenh.CoChuyenVien = this.yeuCauKhamBenhPrevious.CoChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.KhoaPhongNhapVienId = this.yeuCauKhamBenhPrevious.KhoaPhongNhapVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.TenKhoaPhongNhapVien = this.yeuCauKhamBenhPrevious.TenKhoaPhongNhapVien;
        this.benhNhanHienTai.YeuCauKhamBenh.TinhTrangBenhNhanChuyenVien = this.yeuCauKhamBenhPrevious.TinhTrangBenhNhanChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.LoaiLyDoChuyenVien = this.yeuCauKhamBenhPrevious.LoaiLyDoChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.ThoiDiemChuyenVien = this.yeuCauKhamBenhPrevious.ThoiDiemChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.PhuongTienChuyenVien = this.yeuCauKhamBenhPrevious.PhuongTienChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.NhanVienHoTongChuyenVienId = this.yeuCauKhamBenhPrevious.NhanVienHoTongChuyenVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.HoTenNhanVienHoTong = this.yeuCauKhamBenhPrevious.HoTenNhanVienHoTong;
        this.benhNhanHienTai.YeuCauKhamBenh.LyDoNhapVien = this.yeuCauKhamBenhPrevious.LyDoNhapVien;
        this.benhNhanHienTai.YeuCauKhamBenh.BenhVienChuyenVienId = this.yeuCauKhamBenhPrevious.BenhVienChuyenVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.TenBenhVienChuyenVien = this.yeuCauKhamBenhPrevious.TenBenhVienChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.LyDoChuyenVien = this.yeuCauKhamBenhPrevious.LyDoChuyenVien;
        this.benhNhanHienTai.YeuCauKhamBenh.CoTuVong = this.yeuCauKhamBenhPrevious.CoTuVong;
        this.benhNhanHienTai.YeuCauKhamBenh.TomTatKetQuaCLS = this.yeuCauKhamBenhPrevious.TomTatKetQuaCLS;
        this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh = this.yeuCauKhamBenhPrevious.GhiChuICDChinh;
        this.benhNhanHienTai.YeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenhPrevious.CachGiaiQuyet;
        this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = this.yeuCauKhamBenhPrevious.GhiChu;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomChiPhi = this.yeuCauKhamBenhPrevious.NhomChiPhi;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.Gia = this.yeuCauKhamBenhPrevious.Gia;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.SoLan = this.yeuCauKhamBenhPrevious.SoLan;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DuocHuongBaoHiem = this.yeuCauKhamBenhPrevious.DuocHuongBaoHiem;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThai = this.yeuCauKhamBenhPrevious.TrangThai;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThaiThanhToan = this.yeuCauKhamBenhPrevious.TrangThaiThanhToan;
        this.benhNhanHienTai.YeuCauKhamBenh.NhanVienChiDinhId = this.yeuCauKhamBenhPrevious.NhanVienChiDinhId;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemChiDinh = this.yeuCauKhamBenhPrevious.ThoiDiemChiDinh;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemDangKy = this.yeuCauKhamBenhPrevious.ThoiDiemDangKy;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenNhomDichVu = this.yeuCauKhamBenhPrevious.TenNhomDichVu;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomDichVuBenhVienId = this.yeuCauKhamBenhPrevious.NhomDichVuBenhVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DieuTriNgoaiTru = this.yeuCauKhamBenhPrevious.DieuTriNgoaiTru;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemBatDauDieuTri = this.yeuCauKhamBenhPrevious.ThoiDiemBatDauDieuTri;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVuHienThi = this.yeuCauKhamBenhPrevious.TenDichVuHienThi;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId = this.yeuCauKhamBenhPrevious.DichVuKyThuatBenhVienId;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.LoaiDichVuKyThuat = this.yeuCauKhamBenhPrevious.LoaiDichVuKyThuat;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.YeuCauKhamBenhId = this.yeuCauKhamBenhPrevious.YeuCauKhamBenhId;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.YeuCauTiepNhanId = this.yeuCauKhamBenhPrevious.YeuCauTiepNhanId;
        this.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru = this.yeuCauKhamBenhPrevious.CoDieuTriNgoaiTru;
        this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa = this.yeuCauKhamBenhPrevious.KhongKeToa;
        const yeuCauKhamBenhICDKhacs = [];
        this.yeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs.forEach(val => yeuCauKhamBenhICDKhacs.push(Object.assign({}, val)));
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = yeuCauKhamBenhICDKhacs;
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = this.yeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs.slice();
        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
    }
    getAge(date_1, date_2) {
        let yAppendix, mAppendix, dAppendix;
        // let days = date_2.getDate() - date_1.getDate() + 1;
        let days = date_2.getDate() - date_1.getDate(); //Thach edit
        if (days < 0) {
            date_2.setMonth(date_2.getMonth() - 1);
            days += this.DaysInMonth(date_2);
        }
        let months = date_2.getMonth() - date_1.getMonth();
        if (months < 0) {
            date_2.setFullYear(date_2.getFullYear() - 1);
            months += 12;
        }
        let years = date_2.getFullYear() - date_1.getFullYear();
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
    }
    DaysInMonth(date2_UTC) {
        let monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
        let monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
        let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
        return monthLength;
    }
    unSelectedTab() {
        this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = false;
        this.lstStatusSelectTabKhambenh.selectedTabLichSuKham = false;
        this.lstStatusSelectTabKhambenh.selectedTabChiDinh = false;
        this.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = false;
        this.lstStatusSelectTabKhambenh.selectedTabChanDoan = false;
        this.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = false;
    }
    scrollTo(element) {
        jQuery(".sidenav-content").animate({
            scrollTop: jQuery("#" + element).position().top + 60,
        });
        this.tabActive = element;
    }
    chuyenDen(element, event) {
        var self = this;
        setTimeout(function () {
            self.scrollTo(element);
        }, 100);
        if (event.index == 0 || event.title == "KHÁM BỆNH") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
        }
        if (event.index == 1 || event.title == "LỊCH SỬ KHÁM") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
        }
        if (event.index == 2 || event.title == "CHỈ ĐỊNH") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
        }
        if (event.index == 3 || event.title == "KQ CLS") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
        }
        if (event.index == 4 || event.title == "CHẨN ĐOÁN") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
            self.validationKetLuanErrors = [];
        }
        if (event.index == 5 || event.title == "TƯỜNG TRÌNH PT/TT") {
            self.unSelectedTab();
            self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = true;
            self.validationKetLuanErrors = [];
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    getBenhNhanDangKham(hangDoiId) {
        this.closePopupLoadingData();
        this.benhNhanHienTai = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_15__["BenhVienHangDoi"]();
        this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
        this.benhNhanHienTai.isShowPanelItemKetLuan = false;
        this.showPopupLoadingData();
        this.apiService
            .get("KhamBenh/GetYeuCauKhamBenhDangKham?hangDoiId=" + hangDoiId)
            .subscribe((resultData) => {
            if (resultData !== undefined && resultData != null) {
                this.benhNhanHienTai = resultData;
                this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplate);
                this.bindDataDynamicComponent();
                this.ganThongTinKhamTamThoi();
                this.ganThongTinYeuCauKhamBenhPerevious();
                this.unSelectedTab();
                let phongBenhVienId = this.authService.getPhongLamViecId();
                let nhanVienId = this.authService.getAccessUser().Id;
                let yeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
                this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                //this.isSelectedParentTabKhamBenh = true;
                if (this.benhNhanHienTai.YeuCauTiepNhan.NamSinh != null &&
                    this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh != null &&
                    this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh != null) {
                    var ngaySinh = new Date(this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh +
                        "/" +
                        this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh +
                        "/" +
                        this.benhNhanHienTai.YeuCauTiepNhan.NamSinh +
                        "/");
                    this.getAge(ngaySinh, new Date());
                }
                this.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham = true;
                this.closePopupLoadingData();
            }
            else {
                this.benhNhanHienTai = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_15__["BenhVienHangDoi"]();
                this.closePopupLoadingData();
            }
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    cancelChangeData() {
        this.benhNhanHienTai.validationErrors = null;
        this.ref.detectChanges();
        this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;
        this.benhNhanHienTai.YeuCauKhamBenh.BenhSu = this.thongTinKhamTemp.BenhSu;
        this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu = this.thongTinKhamTemp.ChanDoanCuaNoiGioiThieu;
        this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan = this.thongTinKhamTemp.KhamToanThan;
        this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan = this.thongTinKhamTemp.TuanHoan;
        this.benhNhanHienTai.YeuCauKhamBenh.HoHap = this.thongTinKhamTemp.HoHap;
        this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa = this.thongTinKhamTemp.TieuHoa;
        this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc = this.thongTinKhamTemp.ThanTietNieuSinhDuc;
        this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh = this.thongTinKhamTemp.ThanKinh;
        this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop = this.thongTinKhamTemp.CoXuongKhop;
        this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong = this.thongTinKhamTemp.TaiMuiHong;
        this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat = this.thongTinKhamTemp.RangHamMat;
        this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong = this.thongTinKhamTemp.NoiTietDinhDuong;
        this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa = this.thongTinKhamTemp.SanPhuKhoa;
        this.benhNhanHienTai.YeuCauKhamBenh.DaLieu = this.thongTinKhamTemp.DaLieu;
        this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId = this.thongTinKhamTemp.ChanDoanSoBoICDId;
        this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD = this.thongTinKhamTemp.TenChanDoanSoBoICD;
        this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu = this.thongTinKhamTemp.ChanDoanSoBoGhiChu;
        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(this.thongTinKhamTemp.ThongTinKhamTheoDichVuTemplateObj);
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs = this.thongTinKhamTemp.YeuCauKhamBenhKhamBoPhanKhacs.slice();
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets = this.thongTinKhamTemp.YeuCauKhamBenhChanDoanPhanBiets.slice();
        //this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = this.thongTinKhamTemp.KetQuaSinhHieus.slice();
        // trường hợp sửa data đã lưu trực tiếp trên grid
        const ketQuaSinhHieus = [];
        this.thongTinKhamTemp.KetQuaSinhHieus.forEach(val => ketQuaSinhHieus.push(Object.assign({}, val)));
        this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = ketQuaSinhHieus;
        this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs = this.thongTinKhamTemp.KhamBenhBenhNhanDiUngThuocs.slice();
        this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs = this.thongTinKhamTemp.KhamBenhBenhNhanTienSuBenhs.slice();
        this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs = this.thongTinKhamTemp.YeuCauKhamBenhBoPhanTonThuongs.slice();
        //BVHD-3574
        this.benhNhanHienTai.YeuCauKhamBenh.NoiDungKhamBenh = this.thongTinKhamTemp.NoiDungKhamBenh;
        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
    }
    saveChangeData() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
            this.benhNhanHienTai.validationErrors = null;
            this.ref.detectChanges();
            this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = this.processDynamicComponent();
            this.loadingPage();
            this.apiService
                .post("KhamBenh/LuuThongTinKhamBenh", this.benhNhanHienTai) //LuuThongTinKhamBenhDangKham
                .subscribe((resultData) => {
                this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
                this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs =
                    resultData.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs;
                this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets =
                    resultData.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets;
                this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                    resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
                this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                    resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
                this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                    resultData.YeuCauTiepNhan.KetQuaSinhHieus;
                if (resultData.YeuCauKhamBenh.IcdchinhId != 0 && resultData.YeuCauKhamBenh.IcdchinhId != null) {
                    this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId =
                        resultData.YeuCauKhamBenh.IcdchinhId;
                }
                if (resultData.YeuCauKhamBenh.TenICDChinh != null && resultData.YeuCauKhamBenh.TenICDChinh != "") {
                    this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh =
                        resultData.YeuCauKhamBenh.TenICDChinh;
                }
                if (resultData.YeuCauKhamBenh.GhiChuICDChinh != null && resultData.YeuCauKhamBenh.GhiChuICDChinh != "") {
                    this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh =
                        resultData.YeuCauKhamBenh.GhiChuICDChinh;
                }
                this.ganThongTinKhamTamThoi();
                this.closePopupLoadingData();
            }, (err) => {
                if (!this.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                    this.notificationService.showError("Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh");
                }
                this.benhNhanHienTai.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    luuKetLuan() {
        var self = this;
        self.validationKetLuanErrors = [];
        self.ref.detectChanges();
        if (this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien == true) {
            self.hoanThanhKham(true);
        }
        else {
            self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
            if (this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
                this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
            }
            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                self.loadingPage();
                if (self.documentType == src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].KhamBenhDangKham) {
                    self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham = true;
                }
                self.apiService.post("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh).subscribe(() => {
                    //console.log("resultKetLuan: ", resultKetLuan)
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                    self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                    self.ganThongTinYeuCauKhamBenhPerevious();
                    self.closePopupLoadingData();
                }, (err) => {
                    self.validationKetLuanErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    //console.log(this.validationKetLuanErrors)
                    self.closePopupLoadingData();
                });
            }
            else {
                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
            }
        }
    }
    huy() {
        this.cancelChangeDataKetLuan();
    }
    xuLyChuyenDichVuKham() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
            var self = this;
            self.dialog
                .open(_kham_benh_lan_kham_hien_tai_lan_kham_hien_tai_chuyen_kham_lan_kham_hien_tai_chuyen_kham_component__WEBPACK_IMPORTED_MODULE_16__["LanKhamHienTaiChuyenKhamComponent"], {
                disableClose: false,
                width: "800px",
                data: {
                    "YeuCauTiepNhanId": self.benhNhanHienTai.YeuCauTiepNhanId,
                    "YeuCauKhamBenhId": self.benhNhanHienTai.YeuCauKhamBenhId,
                    "IsKhamBenhDangKham": true
                }
            })
                .afterClosed()
                .subscribe((result) => {
                if (result !== undefined && result !== null) // xử lý chuyển dịch vụ khám
                 {
                    self.loadingPage();
                    result.PhongBenhVienHangDoiTruocId = self.benhNhanHienTai.Id;
                    result.IsKhamBenhDangKham = true;
                    self.apiService.post("KhamBenh/XuLyChuyenDichVuKham", result) //XuLyChuyenDichVuKhamDangKham
                        .subscribe(resultData => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Chuyển khám "]));
                        self.closePopupLoadingData();
                        self.quayLaiDanhSach();
                    }, (err) => {
                        self.closePopupLoadingData();
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    inPhieuKham() {
        var self = this;
        self.validationKetLuanErrors = [];
        self.ref.detectChanges();
        this.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
        this.phieuKhamBenhVo.CoKhamBenh = true;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].View)) {
            self.showPopupLoadingData();
            self.apiService.post("KhamBenh/InPhieuKhamBenh", this.phieuKhamBenhVo).subscribe(resultData => {
                if (resultData != null) {
                    self.closePopupLoadingData();
                    self.dialog.open(_kham_benh_lan_kham_hien_tai_phieu_kham_benh_vao_vien_popup_phieu_kham_benh_vao_vien_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuKhamBenhVaoVienPopupComponent"], {
                        disableClose: true,
                        width: "1000px",
                        data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                    });
                }
            }, (err) => {
                self.validationKetLuanErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                ;
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    inGiayNghiHuongBHXH() {
        // this.apiService.post<any>("KhamBenh/KiemTraYeuCauKhamBenh?yeuCauKhamBenhId=" + this.benhNhanHienTai.YeuCauKhamBenhId).subscribe(
        //   resultData1 => {
        this.dialog.open(_kham_benh_lan_kham_hien_tai_nghi_huong_bhyt_confirm_popup_nghi_huong_bhyt_confirm_popup_component__WEBPACK_IMPORTED_MODULE_17__["NghiHuongBhytConfirmPopupComponent"], {
            disableClose: true,
            width: "400px",
            data: { BenhNhanHienTai: this.benhNhanHienTai, DocumentType: this.documentType }
        });
        // }, (err: ApiError) => {
        //   this.validationKetLuanErrors = err.ValidationErrors;
        //   if (err.Message != "Validation Failed") {
        //     this.notificationService.showError(err.Message);
        //   }
        // }
        // )
    }
    quayLaiDanhSach() {
        this.router.navigate([this.baseRoute + "/danh-sach-dang-kham/" + this.benhNhanHienTai.PhongBenhVienId], { queryParams: { holdQuery: true } });
    }
    hoanThanhKham(isNhapVien = false) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
            var self = this;
            self.validationKetLuanErrors = null;
            self.benhNhanHienTai.validationErrors = null;
            self.ref.detectChanges();
            if (self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator == true ||
                self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator == false) {
                self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = null;
            }
            if (self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && self.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
                self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
            }
            if (!self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham) {
                self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = true;
            }
            ///------------- xử lý lưu thông tin tab khám bệnh
            self.showPopupLoadingData();
            self.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = self.processDynamicComponent();
            self.apiService
                .post("KhamBenh/LuuThongTinKhamBenh", self.benhNhanHienTai)
                .subscribe((resultData) => {
                self.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
                self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = false;
                self.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs =
                    resultData.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs;
                self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets =
                    resultData.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets;
                self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                    resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
                self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                    resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
                self.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                    resultData.YeuCauTiepNhan.KetQuaSinhHieus;
                self.ganThongTinKhamTamThoi();
                ///------------- xử lý lưu thông tin tab chẩn đoán ---> cần update lại api
                self.apiService
                    .post("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh)
                    .subscribe((res) => {
                    self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
                    self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                    self.ganThongTinYeuCauKhamBenhPerevious();
                    self.apiService
                        .post("KhamBenh/XuLyHoanThanhCongDoanKhamHienTaiCuaBenhNhan?hangDoiHienTaiId=" + self.benhNhanHienTai.Id + "&hoanThanhKham=true&isKhamBenhDangKham=true")
                        .subscribe((resultData) => {
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: "500px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có muốn in phiếu khám cho người bệnh này không ?",
                            },
                        })
                            .afterClosed()
                            .subscribe((res) => {
                            if (res == "Yes") {
                                self.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
                                self.phieuKhamBenhVo.CoKhamBenh = true;
                                self.apiService.post("KhamBenh/InPhieuKhamBenh", this.phieuKhamBenhVo).subscribe(resultData => {
                                    if (resultData != null) {
                                        self.dialog
                                            .open(_kham_benh_lan_kham_hien_tai_phieu_kham_benh_vao_vien_popup_phieu_kham_benh_vao_vien_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuKhamBenhVaoVienPopupComponent"], {
                                            disableClose: true,
                                            width: "1000px",
                                            data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                                        })
                                            .afterClosed()
                                            .subscribe(() => {
                                            self.closePopupLoadingData();
                                            self.quayLaiDanhSach();
                                        });
                                    }
                                    else {
                                        self.closePopupLoadingData();
                                    }
                                }, (err) => {
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    ;
                                    self.closePopupLoadingData();
                                });
                            }
                            else {
                                self.closePopupLoadingData();
                                self.quayLaiDanhSach();
                            }
                        });
                    }, (err) => {
                        self.validationKetLuanErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                }, (err) => {
                    self.validationKetLuanErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    self.closePopupLoadingData();
                });
            }, (err) => {
                if (!self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                    self.notificationService.showError("Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh");
                }
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    keyEvent(event) {
        var self = this;
        if (self.benhNhanHienTai.Id != 0) {
            // kiểm tra lưu // ctr + s
            if (event.ctrlKey && event.keyCode == 83) {
                if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                        event.preventDefault();
                        if (this.dialog.openDialogs.length > 0) {
                            return;
                        }
                        this.saveChangeData();
                    }
                    else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                        event.preventDefault();
                    }
                }
                //KẾT LUẬN
                else if (self.lstStatusSelectTabKhambenh.selectedTabChanDoan) {
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                        event.preventDefault();
                        if (this.dialog.openDialogs.length > 0) {
                            return;
                        }
                        this.luuKetLuan();
                    }
                    else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                        event.preventDefault();
                    }
                }
            }
            // esc
            if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                // kiểm tra hủy
                if (event.keyCode == 27 &&
                    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                    event.preventDefault();
                    this.cancelChangeData();
                }
                else if (event.keyCode == 27 &&
                    !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                    event.preventDefault();
                }
            }
            else if (self.lstStatusSelectTabKhambenh.selectedTabChanDoan) {
                if (event.keyCode == 27 &&
                    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                    event.preventDefault();
                    this.cancelChangeDataKetLuan();
                }
                else if (event.keyCode == 27 &&
                    !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                    event.preventDefault();
                }
            }
            // ctrl + f1
            let kendoTab = "card";
            if (event.ctrlKey && event.keyCode == 112) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }
            // ctrl + f2
            if (event.ctrlKey && event.keyCode == 113) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }
            // ctrl + f3
            if (event.ctrlKey && event.keyCode == 114) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }
            // ctrl + f5
            if (event.ctrlKey && event.keyCode == 116) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }
            // ctrl + f6
            if (event.ctrlKey && event.keyCode == 117) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }
            // ctrl + p
            if (event.ctrlKey && event.keyCode == 80) {
                event.preventDefault();
            }
            // ctrl + H
            // if (event.ctrlKey && event.keyCode == 72) {
            //     if (
            //         self.lstStatusSelectTabKhambenh.selectedTabChanDoan &&
            //         self.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru != true
            //     ) {
            //         event.preventDefault();
            //         if (this.dialog.openDialogs.length > 0) {
            //             return;
            //         }
            //         self.hoanThanhKham();
            //     } else {
            //         event.preventDefault();
            //     }
            // }
        }
        else {
            if (event.ctrlKey &&
                (event.keyCode == 83 ||
                    event.keyCode == 27 ||
                    event.keyCode == 112 ||
                    event.keyCode == 113 ||
                    event.keyCode == 114 ||
                    event.keyCode == 115 ||
                    event.keyCode == 116 ||
                    event.keyCode == 117 ||
                    event.keyCode == 39 ||
                    event.keyCode == 80 ||
                    event.keyCode == 72)) {
                event.preventDefault();
            }
        }
    }
    //=================== Cập nhật thêm chức năng quay lại chưa khám ========================
    xuLyQuayLaiChuaKham() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn quay lại chưa khám cho người bệnh này không?' }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.showPopupLoadingData();
                    this.apiService.put("KhamBenh/XuLyQuayLaiChuaKham?hangDoiId=" + this.benhNhanHienTai.Id)
                        .subscribe(() => {
                        this.closePopupLoadingData();
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Quay lại chưa khám"]));
                        this.quayLaiDanhSach();
                    }, (err) => {
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                        this.closePopupLoadingData();
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
KhamBenhDangKhamTheoPhongKhamChiTietComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], KhamBenhDangKhamTheoPhongKhamChiTietComponent.prototype, "keyEvent", null);
KhamBenhDangKhamTheoPhongKhamChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kham-benh-dang-kham-theo-phong-kham-chi-tiet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.html")).default,
        animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.scss */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.scss")).default]
    })
], KhamBenhDangKhamTheoPhongKhamChiTietComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-bhyt {\n  height: 15px;\n  top: 2px;\n  position: absolute;\n  right: 0;\n}\n\n.yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blackText {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tYmVuaC9raGFtLWJlbmgtZGFuZy1raGFtL2toYW0tYmVuaC1kYW5nLWtoYW0tdGhlby1waG9uZy1raGFtL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1iZW5oXFxraGFtLWJlbmgtZGFuZy1raGFtXFxraGFtLWJlbmgtZGFuZy1raGFtLXRoZW8tcGhvbmcta2hhbVxca2hhbS1iZW5oLWRhbmcta2hhbS10aGVvLXBob25nLWtoYW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWJlbmgva2hhbS1iZW5oLWRhbmcta2hhbS9raGFtLWJlbmgtZGFuZy1raGFtLXRoZW8tcGhvbmcta2hhbS9raGFtLWJlbmgtZGFuZy1raGFtLXRoZW8tcGhvbmcta2hhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tYmVuaC9raGFtLWJlbmgtZGFuZy1raGFtL2toYW0tYmVuaC1kYW5nLWtoYW0tdGhlby1waG9uZy1raGFtL2toYW0tYmVuaC1kYW5nLWtoYW0tdGhlby1waG9uZy1raGFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tYmh5dCB7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi55ZWxsb3dUZXh0IHtcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn0iLCIuaWNvbi1iaHl0IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLnllbGxvd1RleHQge1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYmxhY2tUZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: KhamBenhDangKhamTheoPhongKhamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamBenhDangKhamTheoPhongKhamComponent", function() { return KhamBenhDangKhamTheoPhongKhamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _kham_benh_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../kham-benh.model */ "./src/app/modules/main/kham-benh/kham-benh.model.ts");
/* harmony import */ var _kham_benh_dang_kham_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../kham-benh-dang-kham.model */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






















let KhamBenhDangKhamTheoPhongKhamComponent = class KhamBenhDangKhamTheoPhongKhamComponent {
    constructor(authService, notificationService, router, route, location, dialog, apiService) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.dialog = dialog;
        this.apiService = apiService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.gridColumns = [];
        this.trangThaiYCKB = new _kham_benh_model__WEBPACK_IMPORTED_MODULE_17__["TrangThaiYeuCauKhamBenhObjEnum"]();
        this.sort = [{
                field: 'TrangThai',
                dir: 'asc'
            }];
        //searchString: string;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.timKiemNangCaoObj = new _kham_benh_dang_kham_model__WEBPACK_IMPORTED_MODULE_18__["KhamBenhDangKhamTimKiem"]();
        this._gridColumnsFilter = [];
        this._isCheckColumnFilter = true;
        this.baseRoute = "/kham-benh-dang-kham";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__["DocumentType"].KhamBenhDangKham;
        this.phongBenhVienId = this.route.snapshot.params.id;
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].getItem("additionalSearchStringKhamBenhDangKhamTheoPhongList");
                if (additionalSearchString != null) {
                    //let searchTempObj: KhamBenhDangKhamTimKiem = JSON.parse(additionalSearchString);
                    this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                    if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
                        this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
                        //searchTempObj.TuNgayDenNgay.startDate = new Date(searchTempObj.TuNgayDenNgay.startDate);
                    }
                    // else
                    // {
                    //   this.timKiemNangCaoObj.TuNgayDenNgay.startDate = null;
                    //   searchTempObj.TuNgayDenNgay.startDate = null;
                    //   console.log('this.timKiemNangCaoObj1', this.timKiemNangCaoObj.TuNgayDenNgay);
                    //   console.log('searchTempObj.TuNgayDenNgay.startDate', searchTempObj.TuNgayDenNgay);
                    // }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
                        this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
                    }
                    // console.log('searchTempObj2', searchTempObj);
                    // this.timKiemNangCaoObj = searchTempObj;
                    this.gridChild.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            this.gridChild.additionalSearchString = this.phongBenhVienId + "";
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].removeItem("additionalSearchStringKhamBenhDangKhamTheoPhongList");
        }
        if (this.phongBenhVienId !== undefined && this.phongBenhVienId !== null) {
            this.timKiemNangCaoObj.PhongBenhVienId = this.phongBenhVienId;
        }
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 20, Sortable: false, Template: this.sttTemplate },
            { Field: "MaTiepNhan", Title: "Mã TN", Width: 90, Sortable: true, Template: this.maTNTemplate },
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 90, Sortable: true },
            { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true, Template: this.hoTenTemplate },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
            { Field: "SoDienThoai", Title: "Điện thoại", Width: 80, Sortable: true },
            { Field: "ThoiDiemTiepNhan", Title: "Thời điểm tiếp nhận", Width: 100, Sortable: true, Template: this.thoiDiemTiepNhanTemplate },
            { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate }
        ];
        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
    }
    searchChanges(event) {
        if (event != undefined && (event == null || event == "")) {
            this.gridChild.searchString = null;
            //this.gridChild.search();
            this.timKiemNangCao();
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            //this.gridChild.search();
            this.timKiemNangCao();
        }
    }
    clearSearch() {
        this.timKiemNangCaoObj.SearchString = null;
        this.gridChild.searchString = null;
        //this.gridChild.search();
        this.timKiemNangCao();
    }
    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + "/danh-sach-dang-kham/" + this.phongBenhVienId + '?holdQuery=true');
        if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
            this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
        }
        else {
            this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
        }
        if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
            this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
        }
        else {
            this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
        }
        var queryString = JSON.stringify(this.timKiemNangCaoObj);
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].setItem("additionalSearchStringKhamBenhDangKhamTheoPhongList", queryString);
        this.gridChild.search();
    }
    batDauKham(phongBenhVienHangDoiId) {
        if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__["DocumentType"].KhamBenhDangKham, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
            this.router.navigate([this.baseRoute + "/danh-sach-dang-kham/benh-nhan-dang-kham/" + phongBenhVienHangDoiId]); //,{ queryParams: { holdQuery: phongBenhVienId} }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    quayLai() {
        this.router.navigate([this.baseRoute], { queryParams: { holdQuery: true } });
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Process)) {
            let queryGridInfo = this.gridChild._gridQueryInfo;
            this.apiService.postExportExcel("KhamBenh/ExportKhamBenhDangKhamTheoPhongKham", queryGridInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "KhamBenhDangKhamTheoPhongKham" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
KhamBenhDangKhamTheoPhongKhamComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_20__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sttTemplate', { static: true })
], KhamBenhDangKhamTheoPhongKhamComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('thoiDiemTiepNhanTemplate', { static: true })
], KhamBenhDangKhamTheoPhongKhamComponent.prototype, "thoiDiemTiepNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trangThaiTemplate', { static: true })
], KhamBenhDangKhamTheoPhongKhamComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('maTNTemplate', { static: true })
], KhamBenhDangKhamTheoPhongKhamComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('hoTenTemplate', { static: true })
], KhamBenhDangKhamTheoPhongKhamComponent.prototype, "hoTenTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"], { static: true })
], KhamBenhDangKhamTheoPhongKhamComponent.prototype, "gridChild", void 0);
KhamBenhDangKhamTheoPhongKhamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-kham-benh-dang-kham-theo-phong-kham',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-benh-dang-kham-theo-phong-kham.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-benh-dang-kham-theo-phong-kham.component.scss */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.scss")).default]
    })
], KhamBenhDangKhamTheoPhongKhamComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham.model.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham.model.ts ***!
  \*****************************************************************************************/
/*! exports provided: KhamBenhDangKhamTimKiem, KhamBenhDangKhamTimKiemTrangThai, KhamBenhDangKhamTimKiemDateRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamBenhDangKhamTimKiem", function() { return KhamBenhDangKhamTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamBenhDangKhamTimKiemTrangThai", function() { return KhamBenhDangKhamTimKiemTrangThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamBenhDangKhamTimKiemDateRange", function() { return KhamBenhDangKhamTimKiemDateRange; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KhamBenhDangKhamTimKiem {
    constructor(PhongBenhVienId = null, KhoaPhongId = null, SearchString = null, TrangThai = new KhamBenhDangKhamTimKiemTrangThai(), TuNgayDenNgay = new KhamBenhDangKhamTimKiemDateRange()) {
        this.PhongBenhVienId = PhongBenhVienId;
        this.KhoaPhongId = KhoaPhongId;
        this.SearchString = SearchString;
        this.TrangThai = TrangThai;
        this.TuNgayDenNgay = TuNgayDenNgay;
    }
}
class KhamBenhDangKhamTimKiemTrangThai {
    constructor(ChuaKham = true, DangKham = true, DangLamChiDinh = true, DangDoiKetLuan = true, DaKham = true) {
        this.ChuaKham = ChuaKham;
        this.DangKham = DangKham;
        this.DangLamChiDinh = DangLamChiDinh;
        this.DangDoiKetLuan = DangDoiKetLuan;
        this.DaKham = DaKham;
    }
}
class KhamBenhDangKhamTimKiemDateRange {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}


/***/ }),

/***/ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham.module.ts ***!
  \******************************************************************************************/
/*! exports provided: KhamBenhDangKhamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamBenhDangKhamModule", function() { return KhamBenhDangKhamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kham_benh_dang_kham_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-benh-dang-kham-routing.module */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-routing.module.ts");
/* harmony import */ var _kham_benh_dang_kham_list_kham_benh_dang_kham_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-benh-dang-kham-list/kham-benh-dang-kham-list.component */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-list/kham-benh-dang-kham-list.component.ts");
/* harmony import */ var _kham_benh_dang_kham_theo_phong_kham_kham_benh_dang_kham_theo_phong_kham_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component.ts");
/* harmony import */ var _kham_benh_dang_kham_theo_phong_kham_chi_tiet_kham_benh_dang_kham_theo_phong_kham_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component */ "./src/app/modules/main/kham-benh/kham-benh-dang-kham/kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.ts");
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
/* harmony import */ var ngx_image_drawing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-image-drawing */ "./node_modules/ngx-image-drawing/fesm2015/ngx-image-drawing.js");
/* harmony import */ var _kham_benh_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../kham-benh.module */ "./src/app/modules/main/kham-benh/kham-benh.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");





















let KhamBenhDangKhamModule = class KhamBenhDangKhamModule {
};
KhamBenhDangKhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _kham_benh_dang_kham_list_kham_benh_dang_kham_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamBenhDangKhamListComponent"],
            _kham_benh_dang_kham_theo_phong_kham_kham_benh_dang_kham_theo_phong_kham_component__WEBPACK_IMPORTED_MODULE_5__["KhamBenhDangKhamTheoPhongKhamComponent"],
            _kham_benh_dang_kham_theo_phong_kham_chi_tiet_kham_benh_dang_kham_theo_phong_kham_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__["KhamBenhDangKhamTheoPhongKhamChiTietComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kham_benh_dang_kham_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamBenhDangKhamRoutingModule"],
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
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"],
            _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_15__["IntlModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            ngx_image_drawing__WEBPACK_IMPORTED_MODULE_17__["ImageDrawingModule"],
            _kham_benh_module__WEBPACK_IMPORTED_MODULE_18__["KhamBenhModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]
        ],
        entryComponents: [
        //KhamBenhDangKhamTheoPhongKhamComponent
        ]
    })
], KhamBenhDangKhamModule);



/***/ })

}]);
//# sourceMappingURL=kham-benh-kham-benh-dang-kham-kham-benh-dang-kham-module-es2015.js.map