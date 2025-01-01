(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-ket-luan-~fb7038b1"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Khám Đoàn',Path:''},\n                    {Title:'DS Kết Luận Khám Sức Khỏe Đoàn',Path:'/kham-doan/ket-luan-kham-suc-khoe-doan', queryParams: {holdQuery : true}},\n                    {Title:'Kết Luận Khám Sức Khỏe Đoàn Chi Tiết',Path:'', Active:true} \n\n                    ]\">\n            </vex-breadcrumbs>\n\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <div class=\"row mb-3\">\n                            <app-kham-doan-thong-tin-hanh-chinh [yeuCauTiepNhanId]=\"yeuCauTiepNhanId\">\n                            </app-kham-doan-thong-tin-hanh-chinh>\n                        </div>\n\n                        <div class=\"row\">\n                            <div fxFlex=\"100%\">\n                                <fieldset fxFlex=\"100%\">\n                                    <legend class=\"sub-title\">Thông tin khám sức khỏe</legend>\n                                    <div class=\"row\">\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"8px grid\"\n                                            fxLayoutGap.lt-sm=\"0\">\n                                            <h3 fxFlex=\"100%\" class=\"sub-title title-blue-text\">I. Khám cận lâm sàng</h3>\n                                            <ng-container\n                                                *ngIf=\"khamDoanChuaKetLuan.KetLuanKhamSucKhoeDoanDichVuKhamTemplates != undefined \n                                                    && khamDoanChuaKetLuan.KetLuanKhamSucKhoeDoanDichVuKhamTemplates != null\">\n                                                <ng-container\n                                                    *ngFor=\"let items of khamDoanChuaKetLuan.KetLuanKhamSucKhoeDoanDichVuKhamTemplates, let i = index\">\n                                                    <div fxFlex=\"100%\" class=\"sub-title title-red-text\"\n                                                        style=\"font-size: 15px;\">{{i+1}}. {{items.Title}}</div>\n                                                    <ng-container *ngIf=\"items.ThongTinKhamTheoDichVuData == null\">\n                                                        <b>&nbsp;&nbsp;&nbsp;&nbsp;Dịch vụ chưa khám</b>\n                                                    </ng-container>\n                                                    <ng-container *ngFor=\"let data of thongTinKhamTheoDichVuDatas\">\n                                                        <ng-container *ngIf=\"items.Type == data.Type\">\n                                                            <div fxFlex=\"{{data.fxFlex}}\">\n                                                                <label *ngIf=\"data.TypeTemplate == 4\"\n                                                                    class=\"ml-4\"><b>{{data.Label}} </b></label>\n                                                                <label *ngIf=\"data.TypeTemplate != 4\"\n                                                                    class=\"ml-4\">{{data.Label}} </label>\n                                                                <strong class=\"ml-2\">{{data.Value}}</strong>\n                                                            </div>\n\n                                                        </ng-container>\n\n                                                    </ng-container>\n\n                                                </ng-container>\n\n\n                                            </ng-container>\n                                            <h3 fxFlex=\"100%\" class=\"sub-title title-blue-text\">II. Khám cận lâm sàng\n                                            </h3>\n                                            <div fxFlex=\"100%\">\n                                                <label class=\"ml-4\">a) Kết quả: </label>\n                                                <strong\n                                                    class=\"ml-2\">{{khamDoanChuaKetLuan.KSKKetQuaCanLamSang}}</strong>\n                                            </div>\n                                            <div fxFlex=\"100%\">\n                                                <label class=\"ml-4\">b) Đánh giá: </label>\n                                                <strong\n                                                    class=\"ml-2\">{{khamDoanChuaKetLuan.KSKDanhGiaCanLamSang}}</strong>\n                                            </div>\n                                            <!-- <h3 *ngIf=\"!khamDoanChuaKetLuan.IsHiddenKetLuan\" fxFlex=\"100%\"\n                                                class=\"sub-title title-blue-text\">III. Kết luận </h3> -->\n                                            <!-- Chưa kết luận -->\n                                            <ng-container *ngIf=\"khamDoanChuaKetLuan.TrangThaiYeuCauTiepNhan == 1\">\n                                                <h3 fxFlex=\"100%\" class=\"sub-title title-blue-text\">III. Kết luận </h3>\n                                                <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n                                                    <button type=\"button\" class=\"mr-1\" color=\"primary\" mat-raised-button\n                                                        (click)=\"ketQuaMau()\">Kết quả mẫu</button>\n                                                </div>\n                                                <app-combobox *ngIf=\"khamDoanChuaKetLuan.CoHienThiPhanLoai\"\n                                                    id=\"PhanLoaiSucKhoeId\" fxFlex=\"15%\" fxFlex.sm=\"30%\"\n                                                    label=\"Phân loại sức khỏe\" url=\"KhamDoan/GetPhanLoaiSucKhoes\"\n                                                    [(model)]=\"khamDoanChuaKetLuan.PhanLoaiSucKhoeId\" [required]=\"true\"\n                                                    [modelText]=\"khamDoanChuaKetLuan.KSKKetLuanPhanLoaiSucKhoe\"\n                                                    [validationerror]=\"'PhanLoaiSucKhoeId' | validationerror:validationErrors\">\n                                                </app-combobox>\n\n                                                <app-textarea id=\"cacBenhKhac\" fxFlex=\"auto\" fxFlex.sm=\"100%\"\n                                                    [(model)]=\"khamDoanChuaKetLuan.KSKKetLuanCacBenhTat\"\n                                                    label=\"Các bệnh tật (nếu có)\" [maxlength]=\"4000\">\n                                                </app-textarea>\n\n                                                <app-textarea id=\"ghiChu\" fxFlex=\"100%\" fxFlex.sm=\"auto\" label=\"Đề nghị\"\n                                                    [(model)]=\"khamDoanChuaKetLuan.KSKKetLuanGhiChu\" [maxlength]=\"4000\">\n                                                </app-textarea>\n\n                                            </ng-container>\n\n                                            <!-- Đã kết luận -->\n                                            <ng-container *ngIf=\"khamDoanChuaKetLuan.TrangThaiYeuCauTiepNhan == 2 && khamDoanChuaKetLuan.CoHienThiPhanLoai\">\n                                                <div fxFlex=\"100%\">\n                                                    <label class=\"ml-4\">Phân loại sức khỏe:</label>\n                                                    <strong class=\"ml-2\">\n                                                        {{khamDoanChuaKetLuan.KSKKetLuanPhanLoaiSucKhoe}}</strong>\n                                                </div>\n\n                                                <div fxFlex=\"100%\">\n                                                    <label class=\"ml-4\">Đề nghị: </label>\n                                                    <strong\n                                                        class=\"ml-2\">{{khamDoanChuaKetLuan.KSKKetLuanGhiChu}}</strong>\n                                                </div>\n\n                                                <div fxFlex=\"100%\">\n                                                    <label class=\"ml-4\">Các bệnh tật (nếu có): </label>\n                                                    <strong\n                                                        class=\"ml-2\">{{khamDoanChuaKetLuan.KSKKetLuanCacBenhTat}}</strong>\n                                                </div>\n                                            </ng-container>\n                                        </div>\n\n                                    </div>\n                                </fieldset>\n                            </div>\n                        </div>\n\n                        <div class=\"row pt-4\">\n\n                            <button type=\"button\" color=\"primary\" (click)=\"inSoKSK()\" mat-raised-button mat-button\n                                class=\"float-left mr-1\">\n                                In số KSK định kỳ</button>\n\n                            <button type=\"button\" color=\"primary\" (click)=\"inKetQuaKSK()\" mat-raised-button mat-button\n                                class=\"float-left\">\n                                In kết quả KSK</button>\n\n                                <button *ngIf=\"from==null ||from==''\" type=\"button\"  (click)=\"redirectKetLuanCLS()\" color=\"primary\" class=\"float-right\"\n                                mat-raised-button><i class=\"ft-save\"></i>Lưu và chuyển sang kết luận cls</button>\n                            <button *ngIf=\"khamDoanChuaKetLuan.TrangThaiYeuCauTiepNhan == 1\" type=\"button\"\n                                color=\"primary\" (click)=\"luuVaHoanThanhKhamKSKDoan()\" mat-raised-button mat-button\n                                class=\"float-right mr-1\">\n                                Lưu và hoàn thành khám</button>\n\n                            <button *ngIf=\"khamDoanChuaKetLuan.TrangThaiYeuCauTiepNhan == 1\" type=\"button\"\n                                color=\"primary\" (click)=\"luuKSKDoan()\" mat-raised-button mat-button\n                                class=\"float-right mr-1\">\n                                Lưu</button>\n\n                            <button *ngIf=\"khamDoanChuaKetLuan.TrangThaiYeuCauTiepNhan == 1\" type=\"button\"\n                                color=\"default\" title=\"Phím tắt: Esc\" (click)=\"huy()\" mat-raised-button mat-button\n                                class=\"float-right mr-1\">\n                                Hủy</button>\n\n                            <button *ngIf=\"khamDoanChuaKetLuan.TrangThaiYeuCauTiepNhan != 1\" type=\"button\"\n                                color=\"default\" title=\"Phím tắt: Esc\" (click)=\"huy()\" mat-raised-button mat-button\n                                class=\"float-right mr-1\">\n                                Quay lại</button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.html":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.html ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    style=\"padding-top: 5px;\">\n\n    <app-combobox id=\"CongTyKhamSucKhoeId\" fxFlex=\"30%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n        url=\"KhamDoan/GetCongTys\" [(model)]=\"khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId\" [reloadForGrid]=\"true\"\n        [modelText]=\"khamDoanChuaKetLuanSearch.TenCongTy\" (selectionChange)=\"congTyKhamSucKhoeChange($event)\"\n        (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\">\n    </app-combobox>\n\n    <app-combobox id=\"HopDongKhamSucKhoeId\" fxFlex=\"30%\" fxFlex.sm=\"20%\" label=\"Số hợp đồng\" [required]=\"true\"\n        url=\"KhamDoan/GetHopDongKhamSucKhoes\" [(model)]=\"khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId\"\n        [reloadForGrid]=\"true\" [modelText]=\"khamDoanChuaKetLuanSearch.TenSoHopDong\"\n        (selectionChange)=\"soHopDongChange($event)\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n        (dataForLookupChange)=\"changeLookupHopDong($event)\"\n        [queryInfo]=\"{ParameterDependencies:'{CongTyKhamSucKhoeId:' + khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId + '}', Take: 50}\"\n        (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\">\n    </app-combobox>\n    <div fxFlex=\"40%\">\n        <button type=\"button\" (click)=\"redirectKetLuanCLS()\" color=\"primary\" class=\"float-right mr-1\"\n            mat-raised-button><i class=\"ft-save\"></i> Chuyển sang kết luận cls</button>\n    </div>\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\" style=\"padding-top: 15px;\">\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Danh sách nhân viên</h3>\n    <app-grid #gridChild [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\" [showStt]=\"true\"\n        urlGetData=\"KhamDoan/GetDataForGridAsyncDanhSachKetLuanKhamSucKhoe\" [sort]=\"sort\" heightToolbar=\"326\"\n        urlGetTotalPage=\"KhamDoan/GetTotalPageForGridAsyncDanhSachKetLuanKhamSucKhoe\" [headerTemplate]=\"headerTemplate\">\n        <ng-template #ketLuanTemplate let-dataItem>\n            <label *ngIf=\"dataItem.TinhTrang == 0\">\n                <span>{{dataItem.KSKKetLuanDisplay}}</span>\n            </label>\n            <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                <span>{{dataItem.KSKKetLuanDisplay}}</span>\n            </label>\n\n        </ng-template>\n        <ng-template #maTNTemplate let-dataItem>\n            <div class=\"text-center\" kendoTooltip>\n                <a (click)=\"chinhSua(dataItem.Id, dataItem.YeuCauTiepNhanId)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTN}}\">\n                        {{dataItem.MaTN}}</p>\n                </a>\n            </div>\n        </ng-template>\n\n        <ng-template #gioiTinhTemplate let-dataItem>\n            {{dataItem.GioiTinhDisplay}}\n        </ng-template>\n\n        <ng-template #dichVuDaThucHienTemplate let-dataItem>\n            <div *ngIf=\"dataItem.DichVuDaThucHien == dataItem.TongDichVu\">\n                <label style=\"color:green\">\n                    {{dataItem.DichVuDaThucHien}}\n                </label>/\n                <label>\n                    <b>{{dataItem.TongDichVu}}</b>\n                </label>\n            </div>\n\n            <div *ngIf=\"dataItem.DichVuDaThucHien < dataItem.TongDichVu\">\n                <label style=\"color:orange\">\n                    {{dataItem.DichVuDaThucHien}}\n                </label>/\n                <label>\n                    <b>{{dataItem.TongDichVu}}</b>\n                </label>\n            </div>\n        </ng-template>\n    </app-grid>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'chuaketluan')\" class=\"ml-2\"\n                value=\"coduyet\" [(model)]=\"khamDoanChuaKetLuanSearch.ChuaKetLuan\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chưa KL\">\n            </app-checkbox>\n\n            <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daketluan')\" class=\"ml-2\"\n                value=\"coduyet\" [(model)]=\"khamDoanChuaKetLuanSearch.DaKetLuan\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã KL\">\n            </app-checkbox>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"khamDoanChuaKetLuanSearch.SearchString\"\n                    (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    style=\"padding-top: 5px;\">\n\n    <app-combobox id=\"CongTyKhamSucKhoeId\" fxFlex=\"30%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n        url=\"KhamDoan/GetCongTys\" [(model)]=\"khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId\" [reloadForGrid]=\"true\"\n        [modelText]=\"khamDoanDaKetLuanSearch.TenCongTy\" (selectionChange)=\"congTyKhamSucKhoeChange($event)\"\n        (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\">\n    </app-combobox>\n\n    <app-combobox id=\"HopDongKhamSucKhoeId\" fxFlex=\"30%\" fxFlex.sm=\"20%\" label=\"Số hợp đồng\" [required]=\"true\"\n        url=\"KhamDoan/GetHopDongKhamSucKhoes?LaHopDongKetThuc={{true}}\"\n        [(model)]=\"khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId\" [modelText]=\"khamDoanDaKetLuanSearch.TenSoHopDong\"\n        (selectionChange)=\"soHopDongChange($event)\" [reloadForGrid]=\"true\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n        (dataForLookupChange)=\"changeLookupHopDong($event)\"\n        [queryInfo]=\"{ParameterDependencies:'{CongTyKhamSucKhoeId:' + khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId + '}', Take: 50}\"\n        (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\">\n    </app-combobox>\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\" style=\"padding-top: 15px;\">\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Danh sách nhân viên</h3>\n    <app-grid #gridChildDaKetLuan [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\" [showStt]=\"true\"\n        urlGetData=\"KhamDoan/GetDataForGridAsyncDanhSachKetLuanKhamSucKhoe\" [sort]=\"sort\" heightToolbar=\"326\"\n        urlGetTotalPage=\"KhamDoan/GetTotalPageForGridAsyncDanhSachKetLuanKhamSucKhoe\" [headerTemplate]=\"headerTemplate\">\n        <ng-template #ketLuanTemplate let-dataItem>\n            <label *ngIf=\"dataItem.TinhTrang == 0\">\n                <span>{{dataItem.KSKKetLuanDisplay}}</span>\n            </label>\n            <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                <span>{{dataItem.KSKKetLuanDisplay}}</span>\n            </label>\n\n        </ng-template>\n        <ng-template #maTNTemplate let-dataItem>\n            <div class=\"text-center\" kendoTooltip>\n                <a (click)=\"chinhSua(dataItem.Id, dataItem.YeuCauTiepNhanId)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTN}}\">\n                        {{dataItem.MaTN}}</p>\n                </a>\n            </div>\n        </ng-template>\n\n        <ng-template #gioiTinhTemplate let-dataItem>\n            {{dataItem.GioiTinhDisplay}}\n        </ng-template>\n\n        <ng-template #dichVuDaThucHienTemplate let-dataItem>\n            <div *ngIf=\"dataItem.DichVuDaThucHien == dataItem.TongDichVu\">\n                <label style=\"color:green\">\n                    {{dataItem.DichVuDaThucHien}}\n                </label>/\n                <label>\n                    <b>{{dataItem.TongDichVu}}</b>\n                </label>\n            </div>\n\n            <div *ngIf=\"dataItem.DichVuDaThucHien < dataItem.TongDichVu\">\n                <label style=\"color:orange\">\n                    {{dataItem.DichVuDaThucHien}}\n                </label>/\n                <label>\n                    <b>{{dataItem.TongDichVu}}</b>\n                </label>\n            </div>\n        </ng-template>\n    </app-grid>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'chuaketluan')\" class=\"ml-2\"\n                value=\"coduyet\" [(model)]=\"khamDoanDaKetLuanSearch.ChuaKetLuan\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chưa KL\">\n            </app-checkbox>\n\n            <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daketluan')\" class=\"ml-2\"\n                value=\"coduyet\" [(model)]=\"khamDoanDaKetLuanSearch.DaKetLuan\" fxFlex.lt-md=\"auto\" fxHide.xs\n                fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã KL\">\n            </app-checkbox>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"khamDoanDaKetLuanSearch.SearchString\"\n                    (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Khám Đoàn',Path:''}\n            ,{Title:'DS Kết Luận Khám Sức Khỏe Đoàn',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\" style=\"overflow: hidden; padding-top: 7px; padding-left: 7px;\">\n            <kendo-tabstrip (tabSelect)=\"chuyenDen($event)\">\n\n                <kendo-tabstrip-tab [title]=\"'HĐ CHƯA KẾT LUẬN XONG'\"\n                    [selected]=\"listStatusSelectTabKhamDoanKetLuan.selectedTabChuaKetLuan\">\n                    <ng-template kendoTabContent>\n                        <div class=\"content-tab-popup\" style=\"margin-top: -13px;\">\n                            <app-ket-luan-kham-suc-khoe-doan-chua-ket-luan-list>\n                            </app-ket-luan-kham-suc-khoe-doan-chua-ket-luan-list>\n                        </div>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n\n                <kendo-tabstrip-tab [title]=\"'HĐ ĐÃ KẾT LUẬN XONG'\"\n                    [selected]=\"listStatusSelectTabKhamDoanKetLuan.selectedTabDaKetLuan\">\n                    <ng-template kendoTabContent>\n                        <div class=\"content-tab-popup\" style=\"margin-top: -13px;\">\n                            <app-ket-luan-kham-suc-khoe-doan-da-ket-luan-list>\n                            </app-ket-luan-kham-suc-khoe-doan-da-ket-luan-list>\n                        </div>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n            </kendo-tabstrip>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close('No')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"min-height: 120px;\">\n    <div class=\"row\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"8px grid\" fxLayoutGap.lt-sm=\"0\">\n            <div fxFlex=\"100%\">\n                <b>Hiện tại có {{soDichVuChuaKham}} dịch vụ chưa khám/ chưa thực hiện: </b>\n            </div>\n            <ng-container *ngIf=\"khamDoanChuaKetLuan.DichVuKhamChuaKhams.length > 0\">\n                <div>\n                    <p style=\"color: blue;\">Các dịch vụ khám bệnh:</p>\n                </div>\n                <div fxFlex=\"100%\" *ngFor=\"let item of khamDoanChuaKetLuan.DichVuKhamChuaKhams\">\n                    &nbsp;&nbsp;+ {{item}}.\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"khamDoanChuaKetLuan.DichVuKyThuatChuaThucHiens.length > 0\">\n                <div>\n                    <p style=\"color: blue;\"> Các dịch vụ kỹ thuật:</p>\n                </div>\n                <div fxFlex=\"100%\" *ngFor=\"let item of khamDoanChuaKetLuan.DichVuKyThuatChuaThucHiens\">\n                    &nbsp;&nbsp;+ {{item}}.\n                </div>\n            </ng-container>\n\n            <div fxFlex=\"100%\" style=\"padding-top: 40px;\">\n                Nếu hoàn thành khám thì sẽ hủy những dịch vụ chưa khám/ chưa thực hiện. Bạn chắc chắn muốn hoàn thành\n                khám không?\n            </div>\n\n        </div>\n    </div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <button tabindex=\"-1\" type=\"button\" (click)=\"close('No')\" mat-stroked-button>Không</button>\n    <button tabindex=\"-1\" type=\"button\" (click)=\"close('Yes')\" mat-raised-button mat-button color=\"primary\"\n        class=\"md-primary\">Có</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" style=\"margin: -10px;\">\n    <div>THÔNG TIN KẾT QUẢ KHÁM SỨC KHỎE ĐOÀN</div>\n    <div>\n        <!-- <button type=\"button\" mat-icon-button (click)=\"fullscreen()\" tabindex=\"-1\">\n            <mat-icon [icIcon]=\"isFullscreen?icFullscreenExit:icFullscreen\"></mat-icon>\n        </button> -->\n        <button type=\"button\" mat-icon-button (click)=\"close('No')\" tabindex=\"-1\">\n            <mat-icon [icIcon]=\"icClose\"></mat-icon>\n        </button>\n    </div>\n</div>\n<mat-dialog-content style=\"overflow-y: hidden;overflow-x: hidden;\">\n    <div class=\"container-iframe\" style=\"overflow-y: hidden;\">\n        <div class=\"content-edit\" [ngStyle]=\"{'height':isFullscreen ? '100%' : '330px'}\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"8px grid\" fxLayoutGap.lt-sm=\"0\"\n                style=\"padding-top: 10px;\">\n                <h3 fxFlex=\"100%\" class=\"sub-title mr-4\">CHỈ SỐ SINH TỒN\n                    <button class=\"po-h\" color=\"primary\" (click)=\"themChiSoSinhTon()\">\n                        <mat-icon [icIcon]=\"icAddCircle\"></mat-icon>\n                    </button>\n                </h3>\n                <ng-container *ngIf=\"dataSourceSinhHieuDisplay.data.length == 0\">\n                    <p>Không có chỉ số sinh tồn</p>\n                </ng-container>\n                <app-grid #gridSinhHieu fxFlex=\"100%\" *ngIf=\"dataSourceSinhHieuDisplay.data.length > 0\"\n                    masterName=\"SinhHieu\" [gridColumns]=\"gridSinhHieuColumns\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                    [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\"\n                    [gridDataSource]=\"dataSourceSinhHieuDisplay\" [pageable]=\"false\">\n                </app-grid>\n                <ng-template #nhipTimTemplate let-dataItem>\n                    <app-textboxnumeric *ngIf=\"dataItem.Id == 0 || dataItem.IsUpdate\" [max]=\"9999\" [spinners]=\"false\"\n                        [(model)]=\"dataItem.NhipTim\" class=\"no-label\" (modelChange)=\"onChangeNhipTim(dataItem, $event)\">\n                    </app-textboxnumeric>\n                    <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\">{{dataItem.NhipTim}}</p>\n                </ng-template>\n                <ng-template #huyetApTemplate let-dataItem>\n                    <table width=\"100%\" *ngIf=\"dataItem.Id == 0 || dataItem.IsUpdate\">\n                        <tr>\n                            <td style=\"width:calc(50% - 3px);padding:0\">\n                                <app-textboxnumeric [spinners]=\"false\" [(model)]=\"dataItem.HuyetApTamThu\"\n                                    class=\"no-label\" [max]=\"9999\"\n                                    (modelChange)=\"onChangeHuyetApTamThu($event, dataItem)\">\n                                </app-textboxnumeric>\n                            </td>\n                            <td style=\"width:6px;padding:0\">/</td>\n                            <td style=\"width:calc(50% - 3px);padding:0\">\n                                <app-textboxnumeric [spinners]=\"false\" [(model)]=\"dataItem.HuyetApTamTruong\"\n                                    class=\"no-label\" [max]=\"9999\"\n                                    (modelChange)=\"onChangeHuyetApTamTruong($event, dataItem)\">\n                                </app-textboxnumeric>\n                            </td>\n                        </tr>\n                    </table>\n                    <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\">{{dataItem.HuyetAp}}</p>\n                </ng-template>\n                <ng-template #thanNhietTemplate let-dataItem>\n                    <app-textboxnumeric [format]=\"format\" [max]=\"9999\" [spinners]=\"false\"\n                        *ngIf=\"dataItem.Id == 0 || dataItem.IsUpdate\" [decimals]=\"1\" [(model)]=\"dataItem.ThanNhiet\"\n                        class=\"no-label\">\n                    </app-textboxnumeric>\n                    <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\">{{dataItem.ThanNhiet | number}}</p>\n                </ng-template>\n                <ng-template #nhipThoTemplate let-dataItem>\n                    <app-textboxnumeric *ngIf=\"dataItem.Id == 0 || dataItem.IsUpdate\" [max]=\"9999\" [spinners]=\"false\"\n                        [(model)]=\"dataItem.NhipTho\" class=\"no-label\" (modelChange)=\"onChangeNhipTho($event, dataItem)\">\n                    </app-textboxnumeric>\n                    <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\">{{dataItem.NhipTho}}</p>\n                </ng-template>\n                <ng-template #canNangTemplate let-dataItem>\n                    <app-textboxnumeric *ngIf=\"dataItem.Id == 0 || dataItem.IsUpdate\" [format]=\"format\"\n                        [spinners]=\"false\" [(model)]=\"dataItem.CanNang\" class=\"no-label\" [max]=\"9999\" [decimals]=\"1\"\n                        (modelChange)=\"onChangeCanNang(dataItem)\">\n                    </app-textboxnumeric>\n                    <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\">{{dataItem.CanNang | number}}</p>\n                </ng-template>\n                <ng-template #chieuCaoTemplate let-dataItem>\n                    <app-textboxnumeric *ngIf=\"dataItem.Id == 0 || dataItem.IsUpdate\" [format]=\"format\"\n                        [spinners]=\"false\" [(model)]=\"dataItem.ChieuCao\" [decimals]=\"1\" class=\"no-label\" [max]=\"9999\"\n                        (modelChange)=\"onChangeChieuCao(dataItem)\">\n                    </app-textboxnumeric>\n                    <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\">{{dataItem.ChieuCao | number}}</p>\n                </ng-template>\n                <ng-template #BMITemplate let-dataItem>\n                    <p class=\"ml-1\">{{dataItem.BMI | number: '1.2-2'}}</p>\n                </ng-template>\n                <ng-template #glassgowTemplate let-dataItem>\n                    <app-textboxnumeric *ngIf=\"dataItem.Id == 0 || dataItem.IsUpdate\" [max]=\"9999\" [format]=\"format\"\n                        [spinners]=\"false\" [(model)]=\"dataItem.Glassgow\" [decimals]=\"1\" class=\"no-label\">\n                    </app-textboxnumeric>\n                    <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\">{{dataItem.Glassgow | number}}</p>\n                </ng-template>\n                <ng-template #spO2Template let-dataItem>\n                    <app-textboxnumeric *ngIf=\"dataItem.Id == 0 || dataItem.IsUpdate\" [max]=\"9999\" [format]=\"format\"\n                        [spinners]=\"false\" [(model)]=\"dataItem.SpO2\" [decimals]=\"1\" class=\"no-label\">\n                    </app-textboxnumeric>\n                    <p class=\"ml-1\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\">{{dataItem.SpO2 | number}}</p>\n                </ng-template>\n                <ng-template #actionSinhHieuTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <button color=\"primary\" *ngIf=\"dataItem.Id != 0 && !dataItem.IsUpdate\" mat-icon-button\n                            kendoTooltip title=\"Sửa\" type=\"button\" (click)=\"suaChiSoSinhHieu(dataItem)\">\n                            <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                        </button>\n                        <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                            (click)=\"xoaChiSoSinhHieu(dataItem)\">\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                        </button>\n                    </div>\n                </ng-template>\n            </div>\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"8px grid\" fxLayoutGap.lt-sm=\"0\"\n                style=\"padding-top: 20px;\">\n                <app-grid #gridChinhSua fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\"\n                    [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" [showStt]=\"true\" [pageable]=\"false\" [autoHeight]=\"true\"\n                    masterName=\"gridChinhSua\" [groups]=\"groups\" >\n                </app-grid>\n                <ng-template #nhomGroupHeaderTemplate let-aggregates let-value=\"value\" >\n                    <strong *ngIf=\"value == 'DỊCH VỤ KHÁM BỆNH'\">{{value}}</strong>\n                    <strong *ngIf=\"value == 'DỊCH VỤ KỸ THUẬT'\">{{value}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button  type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n                        (click)=\"CopyKetQuaHienThi()\">Copy kết quả hiển thị</button></strong>\n                </ng-template>\n                <ng-template #editTemplate let-dataItem>\n                    <app-textarea *ngIf=\"dataItem.NhomId == 2\" id=\"KetQuaDichVu\" class=\"no-label\" maxlength=\"1000\"\n                        [(model)]=\"dataItem.KetQuaDichVu\" minHeight=\"20\">\n                    </app-textarea>\n                    <app-textarea *ngIf=\"dataItem.NhomId == 1\" fxFlex=\"100%\" maxlength=\"1000\" class=\"no-label\"\n                        [(model)]=\"dataItem.KetQuaDichVu\" minHeight=\"20\">\n                    </app-textarea>\n                </ng-template>\n                <ng-template #editDefaultTemplate let-dataItem>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\"\n                                                class=\"mt-2\" kendoTooltip>\n                                                <span class=\"reverse-ellipsis r\" title=\"{{dataItem.KetQuaDichVuDefault}}\">\n                                                    {{dataItem.KetQuaDichVuDefault}}\n                                                </span>\n                                            </div>\n                </ng-template>\n            </div>\n        </div>\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"8px grid\" fxLayoutGap.lt-sm=\"0\"\n             *ngIf=\"!isFullscreen\">\n            <app-grid *ngIf=\"showGrid == true\" #gridChinhSua fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                [gridColumns]=\"gridPhanLoaiCacBenhTatVaDeNghiColumns\" [allowSortDefault]=\"true\"\n                [gridDataSource]=\"gridDataSourcePhanLoaiCacBenhTatVaDeNghi\" [documentType]=\"documentType\"\n                [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [lazyLoadPage]=\"true\" [showStt]=\"true\" height=\"195\" [pageable]=\"false\"\n                masterName=\"gridChinhSuaPhanLoaiCacBenhTatVaDeNghi\">\n            </app-grid>\n        </div>\n    </div>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"8px grid\" fxLayoutGap.lt-sm=\"0\"\n        style=\"padding-top: 10px;\" *ngIf=\"isFullscreen\">\n        <app-grid *ngIf=\"showGrid == true\" #gridChinhSua [gridColumns]=\"gridPhanLoaiCacBenhTatVaDeNghiColumns\"\n            [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSourcePhanLoaiCacBenhTatVaDeNghi\"\n            [documentType]=\"documentType\" [useAddDeault]=\"false\" height=\"195\" [useHeaderDefault]=\"false\"\n            [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [showStt]=\"true\" [pageable]=\"false\"\n            masterName=\"gridChinhSuaPhanLoaiCacBenhTatVaDeNghi\">\n        </app-grid>\n\n    </div>\n\n</mat-dialog-content>\n<mat-dialog-actions>\n    <div fxFlex=\"100%\" style=\"text-align: right;\" [ngStyle]=\"{'padding-top':isFullscreen ? '10px' : '30px'}\">\n        <button tabindex=\"-1\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n            (click)=\"Luu(1)\">Lưu</button>\n        <button tabindex=\"-1\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" \n            (click)=\"Luu(2)\">In\n            kết quả\n            KSK</button>\n            <button tabindex=\"-1\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" *ngIf=\"showInLuuChuyenDanhSach\" (click)=\"Luu(3)\">Lưu và chuyển sang danh sách kết luận</button>\n    </div>\n</mat-dialog-actions>\n\n<ng-template #editTenTemplate let-dataItem>\n    <span style=\"font-weight: bold;\">{{dataItem.Ten}}</span>\n</ng-template>\n<ng-template #KetQuaDefaultTemplate let-dataItem>\n    <span *ngIf=\"dataItem.ShowComBoBox == true\">\n        <app-combobox id=\"PhanLoaiSucKhoeId\" class=\"no-label\"\n            url=\"KhamDoan/GetPhanLoaiSucKhoePopupketLuan?phanLoaiId={{dataItem.PhanLoaiId}}\" popupSettings=\"null\"\n            [disabled]=\"true\" [(model)]=\"dataItem.PhanLoaiId\" [bind]=\"true\"\n            (modelChange)=\"changePhanLoai(dataItem,$event)\">\n        </app-combobox>\n    </span>\n    <span *ngIf=\"dataItem.ShowComBoBox == false\">\n        {{dataItem.KetQuaDefault}}\n    </span>\n\n</ng-template>\n<ng-template #editCapNhatTemplate let-dataItem>\n    <span *ngIf=\"dataItem.ShowComBoBox == true\">\n        <app-combobox id=\"PhanLoaiSucKhoeId\" class=\"no-label\" url=\"KhamDoan/GetPhanLoaiSucKhoePopupketLuan\"\n            popupSettings=\"null\" [(model)]=\"dataItem.PhanLoaiIdCapNhat\" [bind]=\"true\"\n            (modelChange)=\"changePhanLoaiCapNhat(dataItem,$event)\">\n        </app-combobox>\n    </span>\n    <span *ngIf=\"dataItem.ShowComBoBox == false\">\n        <app-textarea id=\"KetQua\" fxFlex=\"auto\" fxFlex.sm=\"auto\" class=\"no-label\" [(model)]=\"dataItem.KetQua\"\n            [maxlength]=\"4000\">\n        </app-textarea>\n    </span>\n</ng-template>\n<ng-template #tenDichVuTemplate let-dataItem>\n    <span style=\"font-weight: bold;\">{{dataItem.TenDichVu}}</span>\n</ng-template>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">{{title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 1000px;\">\n    <div *ngIf=\"fileUrl != null && fileUrl != ''\" class=\"container-iframe\">\n        <iframe id=\"fileKetQua\" width=\"100%\" height=\"100%\" frameborder=\"0\" [src]=\"fileUrl | safe\"\n            allowTransparency=\"true\" background=\"transparent\">\n        </iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n            class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" (click)=\"downloadFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải\n        file</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Chỉnh sửa kết quả Chuyên khoa</div>\n    <button type=\"button\" mat-icon-button (click)=\"close('No')\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"min-height: 120px;\">\n    <div class=\"row\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"8px grid\" fxLayoutGap.lt-sm=\"0\">\n            <app-textarea *ngIf=\"data.Type == 1\" [(model)]=\"ketQuaKhamChuyenKhoaNoi.TuanHoan\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Tuần hoàn\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 1\" [(model)]=\"ketQuaKhamChuyenKhoaNoi.HoHap\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Hô hấp\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 1\" [(model)]=\"ketQuaKhamChuyenKhoaNoi.TieuHoa\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Tiêu hóa\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 1\" [(model)]=\"ketQuaKhamChuyenKhoaNoi.ThanTietNieu\"\n                class=\"item-no-padding\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Thận - tiết niệu\" maxlength=\"4000\">\n            </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 1\" [(model)]=\"ketQuaKhamChuyenKhoaNoi.NoiTiet\" class=\"item-no-padding\"\n            fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Nội tiết\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 1\" [(model)]=\"ketQuaKhamChuyenKhoaNoi.CoXuongKhop\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Cơ - xương - khớp\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 1\" [(model)]=\"ketQuaKhamChuyenKhoaNoi.ThanKinh\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Thần kinh\" maxlength=\"4000\"> </app-textarea>\n            \n            <app-textarea *ngIf=\"data.Type == 1\" [(model)]=\"ketQuaKhamChuyenKhoaNoi.TamThan\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Khác\" maxlength=\"4000\"> </app-textarea>\n\n            <app-textarea *ngIf=\"data.Type == 5\" [(model)]=\"ketQuaNgoaiDaLieuSanPhuKhoa.value\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Sản phụ Khoa\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 6\" [(model)]=\"ketQuaNgoaiDaLieuSanPhuKhoa.value\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Da liễu\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 7\" [(model)]=\"ketQuaNgoaiDaLieuSanPhuKhoa.value\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Ngoại khoa\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 8\" [(model)]=\"ketQuaNgoaiDaLieuSanPhuKhoa.value\" class=\"item-no-padding\"\n                fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Kết quả dịch vụ kỹ thuật\" maxlength=\"4000\"> </app-textarea>\n\n            <div fxFlex=\"50%\" *ngIf=\"data.Type == 2\" style=\"font-weight: bold;\">Tai phải</div>\n            <div fxFlex=\"50%\" *ngIf=\"data.Type == 2\" style=\"font-weight: bold;\">Tai trái</div>\n            <app-textarea *ngIf=\"data.Type == 2\" [(model)]=\"KetQuaKhamChuyenKhoaTaiMuiHong.TaiPhaiNoiThuong\"\n                class=\"item-no-padding\" fxFlex=\"25%\" fxFlex.sm=\"100%\" label=\"Nói thường\" maxlength=\"4000\">\n            </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 2\" [(model)]=\"KetQuaKhamChuyenKhoaTaiMuiHong.TaiPhaiNoiTham\"\n                class=\"item-no-padding\" fxFlex=\"25%\" fxFlex.sm=\"100%\" label=\"Nói thầm\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 2\" [(model)]=\"KetQuaKhamChuyenKhoaTaiMuiHong.TaiTraiNoiThuong\"\n                class=\"item-no-padding\" fxFlex=\"25%\" fxFlex.sm=\"100%\" label=\"Nói thường\" maxlength=\"4000\">\n            </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 2\" [(model)]=\"KetQuaKhamChuyenKhoaTaiMuiHong.TaiTraiNoiTham\"\n                class=\"item-no-padding\" fxFlex=\"25%\" fxFlex.sm=\"100%\" label=\"Nói thầm\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 2\" [(model)]=\"KetQuaKhamChuyenKhoaTaiMuiHong.CacBenhTaiMuiHong\"\n                class=\"item-no-padding\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Các bệnh tai mũi họng(nếu có)\"\n                maxlength=\"4000\"> </app-textarea>\n\n            <app-textarea *ngIf=\"data.Type == 3\" [(model)]=\"ketQuaKhamChuyenKhoaNoiRangHamMat.HamTren\"\n                class=\"item-no-padding\" fxFlex=\"50%\" fxFlex.sm=\"100%\" label=\"Hàm trên\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 3\" [(model)]=\"ketQuaKhamChuyenKhoaNoiRangHamMat.HamDuoi\"\n                class=\"item-no-padding\" fxFlex=\"50%\" fxFlex.sm=\"100%\" label=\"Hàm dưới\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 3\" [(model)]=\"ketQuaKhamChuyenKhoaNoiRangHamMat.CacBenhRangHamMat\"\n                class=\"item-no-padding\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Các bệnh về răng hàm mặt(nếu có)\"\n                maxlength=\"4000\"> </app-textarea>\n\n\n\n            <div fxFlex=\"50%\" *ngIf=\"data.Type == 4\" style=\"font-weight: bold;\">Không kính</div>\n            <div fxFlex=\"50%\" *ngIf=\"data.Type == 4\" style=\"font-weight: bold;\">Có kính</div>\n            <app-textarea *ngIf=\"data.Type == 4\" [(model)]=\"ketQuaKhamChuyenKhoaMat.KhongKinhMatPhai\"\n                class=\"item-no-padding\" fxFlex=\"25%\" fxFlex.sm=\"100%\" label=\"Mắt phải\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 4\" [(model)]=\"ketQuaKhamChuyenKhoaMat.KhongKinhMatTrai\"\n                class=\"item-no-padding\" fxFlex=\"25%\" fxFlex.sm=\"100%\" label=\"Mắt trái\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 4\" [(model)]=\"ketQuaKhamChuyenKhoaMat.CoKinhMatPhai\"\n                class=\"item-no-padding\" fxFlex=\"25%\" fxFlex.sm=\"100%\" label=\"Mắt phải \" maxlength=\"4000\">\n            </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 4\" [(model)]=\"ketQuaKhamChuyenKhoaMat.CoKinhMatTrai\"\n                class=\"item-no-padding\" fxFlex=\"25%\" fxFlex.sm=\"100%\" label=\"Mắt trái\" maxlength=\"4000\"> </app-textarea>\n            <app-textarea *ngIf=\"data.Type == 4\" [(model)]=\"ketQuaKhamChuyenKhoaMat.CacBenhVeMat\"\n                class=\"item-no-padding\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Các bệnh về mắt(nếu có)\" maxlength=\"4000\">\n            </app-textarea>\n        </div>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <button tabindex=\"-1\" type=\"button\" (click)=\"close('Yes')\" mat-raised-button mat-button color=\"primary\"\n        class=\"md-primary\">cập nhật</button>\n</mat-dialog-actions> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset fxFlex=\"100%\" style=\"background: #e1f5fe;\">\n    <legend>Thông tin hành chính</legend>\n    <div fxFlex=\"100%\">\n        <ul class=\"inline\">\n            <li>Mã TN:\n                <strong>{{thongTinHanhChinh.MaYeuCauTiepNhan}}</strong>\n            </li>\n            <li>Mã NB:\n                <strong>{{thongTinHanhChinh.MaBenhNhan}}</strong>\n            </li>\n            <li>Họ tên:\n                <strong>{{thongTinHanhChinh.HoTen}}</strong>\n            </li>\n            <li>Giới tính:\n                <strong>{{thongTinHanhChinh.TenGioiTinh}}</strong>\n            </li>\n            <li>Năm sinh:\n                <strong>{{thongTinHanhChinh.NamSinh}}</strong>\n\n            <li>SĐT:\n                <strong>{{thongTinHanhChinh.SoDienThoaiDisplay}}</strong>\n            </li>\n            <li>Dân tộc:\n                <strong>{{thongTinHanhChinh.TenDanToc}}</strong>\n            </li>\n            <li>Địa chỉ:\n                <strong>{{thongTinHanhChinh.DiaChiDisplay}}</strong>\n            </li>\n            <li>Nghề nghiệp:\n                <strong>{{thongTinHanhChinh.TenNgheNghiep}}</strong>\n            </li>\n            <li>Công ty:\n                <strong style=\"color: red;\">{{thongTinHanhChinh.TenCongTy}}</strong>\n            </li>\n        </ul>\n    </div>\n</fieldset>");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.content-tab-popup {\n  margin-top: 49px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.top-content {\n  top: 50px;\n}\n\n.title-blue-text {\n  font-weight: bold;\n  color: blue !important;\n  border-bottom: none !important;\n}\n\n.title-red-text {\n  font-weight: bold;\n  color: red !important;\n  border-bottom: none !important;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2V0LWx1YW4va2V0LWx1YW4ta2hhbS1zdWMta2hvZS1kb2FuLWNoaS10aWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4ta2V0LWx1YW5cXGtldC1sdWFuLWtoYW0tc3VjLWtob2UtZG9hbi1jaGktdGlldFxca2V0LWx1YW4ta2hhbS1zdWMta2hvZS1kb2FuLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1rZXQtbHVhbi9rZXQtbHVhbi1raGFtLXN1Yy1raG9lLWRvYW4tY2hpLXRpZXQva2V0LWx1YW4ta2hhbS1zdWMta2hvZS1kb2FuLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuL2tldC1sdWFuLWtoYW0tc3VjLWtob2UtZG9hbi1jaGktdGlldC9rZXQtbHVhbi1raGFtLXN1Yy1raG9lLWRvYW4tY2hpLXRpZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY29udGVudC10YWItcG9wdXAge1xuICBtYXJnaW4tdG9wOiA0OXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi50b3AtY29udGVudCB7XG4gIHRvcDogNTBweDtcbn1cblxuLnRpdGxlLWJsdWUtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS1yZWQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY29udGVudC10YWItcG9wdXAge1xuICBtYXJnaW4tdG9wOiA0OXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi50b3AtY29udGVudCB7XG4gIHRvcDogNTBweDtcbn1cblxuLnRpdGxlLWJsdWUtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS1yZWQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: KetLuanKhamSucKhoeDoanChiTietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetLuanKhamSucKhoeDoanChiTietComponent", function() { return KetLuanKhamSucKhoeDoanChiTietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _tiep_nhan_benh_nhan_danh_sach_cho_kham_danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model */ "./src/app/modules/main/tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component.ts");
/* harmony import */ var _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../kham-doan-ket-luan.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _kham_doan_tiep_nhan_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.ts");
/* harmony import */ var _ket_luan_ksk_doan_dv_chua_kham_list_popup_ket_luan_ksk_doan_dv_chua_kham_list_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.ts");
/* harmony import */ var _popup_ket_qua_ksk_edit_popup_ket_qua_ksk_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.ts");




















let KetLuanKhamSucKhoeDoanChiTietComponent = class KetLuanKhamSucKhoeDoanChiTietComponent {
    constructor(dialog, route, notificationService, authService, apiService, ref, location, router) {
        this.dialog = dialog;
        this.route = route;
        this.notificationService = notificationService;
        this.authService = authService;
        this.apiService = apiService;
        this.ref = ref;
        this.location = location;
        this.router = router;
        this.thongTinBenhNhan = new _tiep_nhan_benh_nhan_danh_sach_cho_kham_danh_sach_cho_kham_model__WEBPACK_IMPORTED_MODULE_8__["ThongTinBenhNhans"]();
        this.khamDoanChuaKetLuan = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_12__["KhamDoanChuaKetLuan"]();
        this.isConclude = false;
        this.id = 0;
        this.validationErrors = [];
        this.datas = [];
        this.from = "";
        this.thongTinKhamTheoDichVuData = null;
        this.thongTinKhamTheoDichVuTemplate = null;
        this.thongTinKhamTheoDichVuDatas = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan;
        this.route.queryParams.subscribe(param => {
            // console.log('param', param);
            this.id = param['Id'];
            this.yeuCauTiepNhanId = param['YeuCauTiepNhanId'];
            this.from = param['f'];
            this.getByYeuCauTiepNhanId(this.yeuCauTiepNhanId, this.id);
        });
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    savingPage() {
        this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
    ketQuaMau() {
        var self = this;
        self.khamDoanChuaKetLuan.IsOnlySave = false;
        self.khamDoanChuaKetLuan.Id = this.yeuCauTiepNhanId;
        self.khamDoanChuaKetLuan.HopDongKhamSucKhoeId = this.id;
        self.khamDoanChuaKetLuan.LaGetKetQuaMau = true;
        self.loadingPage();
        self.apiService.post("KhamDoan/GetKetQuaMaus", self.khamDoanChuaKetLuan).subscribe((resultData) => {
            self.closePopupLoadingData();
            if (resultData != undefined && resultData != null) {
                self.khamDoanChuaKetLuan.LaGetKetQuaMau = false;
                // console.log(resultData)
                self.dialog
                    .open(_ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_11__["KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent"], {
                    disableClose: false,
                    width: "400px",
                    data: resultData,
                }).afterClosed().subscribe(datas => {
                    if (datas != undefined && datas != null && datas.length > 0) {
                        console.log(datas);
                        datas.forEach(element => {
                            if (element.IsCheck) {
                                if (this.khamDoanChuaKetLuan.KSKKetLuanCacBenhTat == null) {
                                    this.khamDoanChuaKetLuan.KSKKetLuanCacBenhTat = "";
                                }
                                this.khamDoanChuaKetLuan.KSKKetLuanCacBenhTat += element.Value + "; ";
                            }
                        });
                    }
                });
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
            self.closePopupLoadingData();
        });
    }
    getByYeuCauTiepNhanId(yeuCauTiepNhanId, hopDongKhamSucKhoeNhanVienId) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].View)) {
            this.loadingPage();
            let obj = {
                Id: yeuCauTiepNhanId,
                HopDongKhamSucKhoeNhanVienId: hopDongKhamSucKhoeNhanVienId
            };
            this.apiService.post("KhamDoan/GetGoiKhamSucKhoeDoanYeuCauTNYeuCauTN", obj).subscribe((resultData) => {
                this.closePopupLoadingData();
                if (resultData != undefined && resultData != null) {
                    this.khamDoanChuaKetLuan = resultData;
                    this.khamLamSanBindData(this.khamDoanChuaKetLuan.KetLuanKhamSucKhoeDoanDichVuKhamTemplates);
                    console.log("resultData: ", resultData);
                    if (this.thongTinKhamTheoDichVuDatas != []) {
                        this.convertPhanLoai();
                    }
                }
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    convertPhanLoai() {
        for (let i = 1; i < this.thongTinKhamTheoDichVuDatas.length; i += 2) {
            if (this.thongTinKhamTheoDichVuDatas[i].Type == 4 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate == 2) {
                i += 4;
                continue;
            }
            else if (this.thongTinKhamTheoDichVuDatas[i].Type == 6 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate == 3) {
                continue;
            }
            if (this.thongTinKhamTheoDichVuDatas[i].Value === 1 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
                this.thongTinKhamTheoDichVuDatas[i].Value = "Loại I";
            }
            else if (this.thongTinKhamTheoDichVuDatas[i].Value === 2 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
                this.thongTinKhamTheoDichVuDatas[i].Value = "Loại II";
            }
            else if (this.thongTinKhamTheoDichVuDatas[i].Value === 3 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
                this.thongTinKhamTheoDichVuDatas[i].Value = "Loại III";
            }
            else if (this.thongTinKhamTheoDichVuDatas[i].Value === 4 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
                this.thongTinKhamTheoDichVuDatas[i].Value = "Loại IV";
            }
            else if (this.thongTinKhamTheoDichVuDatas[i].Value === 5 && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
                this.thongTinKhamTheoDichVuDatas[i].Value = "Loại V";
            }
            else if (this.thongTinKhamTheoDichVuDatas[i].Value === null && this.thongTinKhamTheoDichVuDatas[i].TypeTemplate === 5) {
                this.thongTinKhamTheoDichVuDatas[i].Value = null;
            }
        }
    }
    khamLamSanBindData(dataItem) {
        dataItem.forEach(element => {
            this.thongTinKhamTheoDichVuTemplate = JSON.parse(element.ThongTinKhamTheoDichVuTemplate);
            this.thongTinKhamTheoDichVuData = element.ThongTinKhamTheoDichVuData;
            if (this.thongTinKhamTheoDichVuData == null) {
                this.thongTinKhamTheoDichVuTemplate = undefined;
            }
            this.bindDataDynamicComponent(element.Type);
        });
        // console.log("tmplate: ", this.thongTinKhamTheoDichVuDatas)
    }
    bindDataDynamicComponent(type) {
        let strData = this.thongTinKhamTheoDichVuData;
        if (strData != undefined && strData != null) {
            let dataObj = JSON.parse(strData);
            let itemTemp = null;
            if (this.thongTinKhamTheoDichVuTemplate !== null) {
                this.thongTinKhamTheoDichVuTemplate.ComponentDynamics.forEach(item => {
                    if (item.groupItems != undefined && item.groupItems != null && item.groupItems.length > 0) {
                        if (item.Type == 4) {
                            let dataGroups = {
                                Type: type,
                                Label: item.Label,
                                TypeTemplate: item.Type,
                                fxFlex: '10%',
                            };
                            this.thongTinKhamTheoDichVuDatas.push(dataGroups);
                        }
                        item.groupItems.forEach(element => {
                            itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == element.Id);
                            if (itemTemp != null) {
                                element.Value = itemTemp.Value;
                            }
                            let data = {
                                Type: type,
                                Label: element.Label + ': ',
                                Value: element.Value,
                                TypeTemplate: element.Type,
                                fxFlex: '20%',
                            };
                            this.thongTinKhamTheoDichVuDatas.push(data);
                        });
                    }
                    else {
                        itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == item.Id);
                        if (itemTemp != null) {
                            item.Value = itemTemp.Value;
                        }
                        let data = {
                            Type: type,
                            Label: item.Label + ': ',
                            Value: item.Value,
                            TypeTemplate: item.Type,
                            fxFlex: '50%'
                        };
                        this.thongTinKhamTheoDichVuDatas.push(data);
                    }
                });
            }
        }
    }
    luuVaHoanThanhKhamKSKDoan() {
        var self = this;
        if (self.khamDoanChuaKetLuan.CoDichVuChuaKham) {
            self.dialog.open(_ket_luan_ksk_doan_dv_chua_kham_list_popup_ket_luan_ksk_doan_dv_chua_kham_list_popup_component__WEBPACK_IMPORTED_MODULE_18__["KetLuanKskDoanDvChuaKhamListPopupComponent"], {
                disableClose: false,
                width: '750px',
                data: { Model: self.khamDoanChuaKetLuan, DichVuKhamChuaKhams: self.khamDoanChuaKetLuan.DichVuKhamChuaKhams, DichVuKyThuatChuaThucHiens: self.khamDoanChuaKetLuan.DichVuKyThuatChuaThucHiens },
            }).afterClosed().subscribe((result) => {
                if (result === 'Yes' && result != null) {
                    self.hoanThanhKham();
                }
            });
        }
        else {
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có chắn chắn muốn lưu và hoàn thành khám cho nhân viên này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    self.hoanThanhKham();
                }
            });
        }
    }
    hoanThanhKham() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
            self.savingPage();
            self.validationErrors = [];
            self.ref.detectChanges();
            self.khamDoanChuaKetLuan.IsOnlySave = false;
            self.khamDoanChuaKetLuan.Id = this.yeuCauTiepNhanId;
            self.khamDoanChuaKetLuan.HopDongKhamSucKhoeId = this.id;
            self.apiService.post("KhamDoan/LuuHoacLuuVaHoanThanhKhamKetLuanKSKDoan", self.khamDoanChuaKetLuan).subscribe(() => {
                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                self.closePopupSavingData();
                if (this.from == "ketluancls") {
                    self.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk'], { queryParams: { "holdQuery": true } });
                }
                else {
                    self.location.back();
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupSavingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    luuKSKDoan() {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn lưu kết luận này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                    self.savingPage();
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    self.khamDoanChuaKetLuan.IsOnlySave = true;
                    self.khamDoanChuaKetLuan.Id = this.yeuCauTiepNhanId;
                    self.khamDoanChuaKetLuan.HopDongKhamSucKhoeId = this.id;
                    self.apiService.post("KhamDoan/LuuHoacLuuVaHoanThanhKhamKetLuanKSKDoan", self.khamDoanChuaKetLuan).subscribe((resData) => {
                        if (resData != undefined && resData != null) {
                            self.khamDoanChuaKetLuan.LastModified = resData;
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            self.closePopupSavingData();
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupSavingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    huy() {
        // this.ngOnInit();
        this.location.back();
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.huy();
            event.preventDefault();
        }
    }
    inSoKSK() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].View)) {
            this.dialog.open(_kham_doan_tiep_nhan_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_17__["SoKhamSucKhoeDinhKyPopupComponent"], {
                disableClose: false,
                width: '1000px',
                data: this.id
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    inKetQuaKSK() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].View)) {
            // this.dialog.open(KetQuaKhamSucKhoePopupComponent, {
            //   disableClose: false,
            //   width: '1000px',
            //   data: this.id
            // });
            this.apiService.post("KhamDoan/GetDataKetQuaKSKDoanEdit?hopDongKhamSucKhoeId=" + this.id).subscribe((resData) => {
                if (resData != undefined && resData != null) {
                    let dialogRef = this.dialog.open(_popup_ket_qua_ksk_edit_popup_ket_qua_ksk_edit_component__WEBPACK_IMPORTED_MODULE_19__["PopupKetQuaKskEditComponent"], {
                        disableClose: false,
                        width: '1500px',
                        data: { Model: resData, hopDongKhamSucKhoeId: this.id, ShowIn: true }
                    });
                    dialogRef.afterClosed().subscribe(result => {
                    });
                }
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupSavingData();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    redirectKetLuanCLS() {
        var self = this;
        if (this.khamDoanChuaKetLuan.TrangThaiYeuCauTiepNhan == 1) {
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn lưu kết luận và chuyển sang kết luận cls này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        self.savingPage();
                        self.validationErrors = [];
                        self.ref.detectChanges();
                        self.khamDoanChuaKetLuan.IsOnlySave = true;
                        self.khamDoanChuaKetLuan.Id = this.yeuCauTiepNhanId;
                        self.khamDoanChuaKetLuan.HopDongKhamSucKhoeId = this.id;
                        self.apiService.post("KhamDoan/LuuHoacLuuVaHoanThanhKhamKetLuanKSKDoan", self.khamDoanChuaKetLuan).subscribe((resData) => {
                            if (resData != undefined && resData != null) {
                                self.khamDoanChuaKetLuan.LastModified = resData;
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                self.closePopupSavingData();
                                //self.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk/detail/'+this.yeuCauTiepNhanId+'/'+this.khamDoanChuaKetLuan.HopDongKhamSucKhoeId+'/'+this.khamDoanChuaKetLuan.CongTyKhamSucKhoeId],{queryParams:{"f":"ketluan"}});                
                                self.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk'], { queryParams: { "holdQuery": true } });
                            }
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupSavingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                    }
                }
            });
        }
        else {
            self.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk'], { queryParams: { "holdQuery": true } });
        }
    }
};
KetLuanKhamSucKhoeDoanChiTietComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], KetLuanKhamSucKhoeDoanChiTietComponent.prototype, "keyEvent", null);
KetLuanKhamSucKhoeDoanChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-luan-kham-suc-khoe-doan-chi-tiet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-luan-kham-suc-khoe-doan-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-chi-tiet.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.scss")).default]
    })
], KetLuanKhamSucKhoeDoanChiTietComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.scss ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuL2tldC1sdWFuLWtoYW0tc3VjLWtob2UtZG9hbi1jaHVhLWtldC1sdWFuLWxpc3Qva2V0LWx1YW4ta2hhbS1zdWMta2hvZS1kb2FuLWNodWEta2V0LWx1YW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.ts":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.ts ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: KetLuanKhamSucKhoeDoanChuaKetLuanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetLuanKhamSucKhoeDoanChuaKetLuanListComponent", function() { return KetLuanKhamSucKhoeDoanChuaKetLuanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kham-doan-ket-luan.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");















let KetLuanKhamSucKhoeDoanChuaKetLuanListComponent = class KetLuanKhamSucKhoeDoanChuaKetLuanListComponent {
    constructor(authService, router, notificationService, apiService, route) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.route = route;
        this.khamDoanChuaKetLuanSearch = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_9__["KhamDoanChuaKetLuanSearch"]();
        this.baseRoute = "/kham-doan/ket-luan-kham-suc-khoe-doan";
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.isSelectDuocPham = false;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.addtionStringDefault = null;
        this.gridColumns = [];
        this.lanDauLoadData = true;
        this.changeDataCongTy = false;
        this.validationErrors = [];
        this.sort = [
            {
                field: "MaBN",
                dir: "desc",
            },
        ];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan;
        this.khamDoanChuaKetLuanSearch = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_9__["KhamDoanChuaKetLuanSearch"]();
        this.backWithSearch();
        this.gridColumns = [
            { Field: "MaTN", Title: "Mã TN", Width: 50, Sortable: true, Template: this.maTNTemplate },
            { Field: "MaBN", Title: "Mã NB", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "MaNhanVien", Title: "Mã NV", Width: 30, Sortable: true, ShowTooltip: true },
            { Field: "HoTen", Title: "Tên NV", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "TenNgheNghiep", Title: "ĐV/BP", Width: 30, Sortable: true },
            { Field: "GioiTinh", Title: "GIỚI TÍNH", Width: 30, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: "NamSinh", Title: "NĂM SINH", Width: 30, Sortable: true },
            { Field: "SoDienThoai", Title: "SĐT", Width: 40, Sortable: true },
            { Field: "Email", Title: "EMAIL", Width: 40, Sortable: true },
            { Field: "SoChungMinhThu", Title: "CMT", Width: 30, Sortable: true },
            //{ Field: "TenDanToc", Title: "DÂN TỘC", Width: 30, Sortable: true },
            { Field: "TenTinhThanh", Title: "TỈNH/TP", Width: 40, Sortable: true },
            //{ Field: "NhomDoiTuongKhamSucKhoe", Title: "NHÓM KHÁM", Width: 40, Sortable: true },
            { Field: "DichVuDaThucHien", Title: "TÌNH TRẠNG DV", Width: 40, Sortable: true, Template: this.dichVuDaThucHienTemplate },
            { Field: "KSKKetLuanPhanLoaiSucKhoe", Title: "KẾT LUẬN", Width: 30, Sortable: true, Template: this.ketLuanTemplate },
        ];
        this.lanDauLoadData = false;
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].getItem("additionalSearchStringKhamDoanChuaKetLuan");
                if (additionalSearchString != null) {
                    this.khamDoanChuaKetLuanSearch = JSON.parse(additionalSearchString);
                    this.addtionStringDefault = additionalSearchString;
                    this.gridChild.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            let menuInfo = this.authService.getAccessUser();
            var queryString = null;
            if (menuInfo.HinhThucKhamBenh != src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__["HinhThucKhamBenh"].KhamDoanNgoaiVien) {
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].removeItem("additionalSearchStringKhamDoanChuaKetLuan");
                queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
            }
            else {
                this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId = this.authService.getCongTyKhamSucKhoeId();
                this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = this.authService.getHopDongKhamSucKhoeId();
                queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
            }
            this.gridChild.additionalSearchString = queryString;
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    clearSearch() {
        this.khamDoanChuaKetLuanSearch.SearchString = null;
        this.gridChild.search();
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            self.timKiem();
        }
    }
    trangThaiCheckBox(event, tinhTrang) {
        if (tinhTrang == "chuaketluan") {
            this.khamDoanChuaKetLuanSearch.ChuaKetLuan = event;
        }
        if (tinhTrang == "daketluan") {
            this.khamDoanChuaKetLuanSearch.DaKetLuan = event;
        }
        this.timKiem();
    }
    timKiem() {
        // this.location.replaceState(this.baseRoute + '?holdQuery=true');
        this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');
        this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
        var queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
    }
    congTyKhamSucKhoeChange(event) {
        this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
        this.changeDataCongTy = true;
        if (event != undefined && event != null) {
            // this.location.replaceState(this.baseRoute + '?holdQuery=true');
            this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');
            this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanChuaKetLuanSearch.TenSoHopDong = null;
            this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId = event.KeyId;
            this.khamDoanChuaKetLuanSearch.TenCongTy = event.Ten;
            let queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
            this.gridChild._additionalSearchString = null;
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
            this.gridChild.search();
        }
        else {
            // this.location.replaceState(this.baseRoute + '?holdQuery=true');
            this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');
            this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId = null;
            this.khamDoanChuaKetLuanSearch.TenCongTy = null;
            this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanChuaKetLuanSearch.TenSoHopDong = null;
            let queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
            this.gridChild._additionalSearchString = queryString;
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
            this.gridChild.search();
        }
    }
    soHopDongChange(event) {
        this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
        if (event != undefined && event != null) {
            this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = event.KeyId;
            this.khamDoanChuaKetLuanSearch.TenSoHopDong = event.DisplayName;
            this.timKiem();
        }
        else {
            // this.location.replaceState(this.baseRoute + '?holdQuery=true');
            this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');
            this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanChuaKetLuanSearch.TenSoHopDong = null;
            let queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
            this.gridChild._additionalSearchString = queryString;
            this.gridChild.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
        }
    }
    chinhSua(id, yeuCauTiepNhanId) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            // this.router.navigate(['/kham-doan/ket-luan-kham-suc-khoe-doan/chi-tiet/' + id + "/yeu-cau-tiep-nhan/" + yeuCauTiepNhanId + '/' + false]);
            let url = '/chi-tiet';
            this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, YeuCauTiepNhanId: yeuCauTiepNhanId } });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    openCombobox(event) {
        if (event) {
            this.isSelectDuocPham = true;
        }
        else {
            this.isSelectDuocPham = false;
        }
    }
    changeLookupHopDong(event) {
        if (!this.lanDauLoadData && this.changeDataCongTy) {
            if (event && event.length > 0 && this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId) {
                if (!this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId) {
                    this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = event[0].KeyId;
                    this.khamDoanChuaKetLuanSearch.TenSoHopDong = event[0].DisplayName;
                }
                this.changeDataCongTy = false;
                this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
                var queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
                this.gridChild._additionalSearchString = queryString;
                this.gridChild.search();
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
            }
        }
    }
    redirectKetLuanCLS() {
        this.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk'], { queryParams: { "holdQuery": true } });
    }
};
KetLuanKhamSucKhoeDoanChuaKetLuanListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], KetLuanKhamSucKhoeDoanChuaKetLuanListComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ketLuanTemplate', { static: true })
], KetLuanKhamSucKhoeDoanChuaKetLuanListComponent.prototype, "ketLuanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhTemplate', { static: true })
], KetLuanKhamSucKhoeDoanChuaKetLuanListComponent.prototype, "gioiTinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuDaThucHienTemplate', { static: true })
], KetLuanKhamSucKhoeDoanChuaKetLuanListComponent.prototype, "dichVuDaThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], KetLuanKhamSucKhoeDoanChuaKetLuanListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], KetLuanKhamSucKhoeDoanChuaKetLuanListComponent.prototype, "sort", void 0);
KetLuanKhamSucKhoeDoanChuaKetLuanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-luan-kham-suc-khoe-doan-chua-ket-luan-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.scss")).default]
    })
], KetLuanKhamSucKhoeDoanChuaKetLuanListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.scss ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuL2tldC1sdWFuLWtoYW0tc3VjLWtob2UtZG9hbi1kYS1rZXQtbHVhbi1saXN0L2tldC1sdWFuLWtoYW0tc3VjLWtob2UtZG9hbi1kYS1rZXQtbHVhbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: KetLuanKhamSucKhoeDoanDaKetLuanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetLuanKhamSucKhoeDoanDaKetLuanListComponent", function() { return KetLuanKhamSucKhoeDoanDaKetLuanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kham-doan-ket-luan.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");














let KetLuanKhamSucKhoeDoanDaKetLuanListComponent = class KetLuanKhamSucKhoeDoanDaKetLuanListComponent {
    constructor(authService, router, notificationService, route) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.route = route;
        this.khamDoanDaKetLuanSearch = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_9__["KhamDoanDaKetLuanSearch"]();
        this.baseRoute = "/kham-doan/ket-luan-kham-suc-khoe-doan";
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.isSelectDuocPham = false;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.addtionStringDefault = null;
        this.gridColumns = [];
        this.lanDauLoadData = true;
        this.changeDataCongTy = false;
        this.sort = [
            {
                field: "MaBN",
                dir: "desc",
            },
        ];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan;
        this.khamDoanDaKetLuanSearch.LaHopDongDaKetLuan = true;
        this.backWithSearch();
        this.gridColumns = [
            { Field: "MaTN", Title: "Mã TN", Width: 50, Sortable: true, Template: this.maTNTemplate },
            { Field: "MaBN", Title: "Mã NB", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "MaNhanVien", Title: "Mã NV", Width: 30, Sortable: true, ShowTooltip: true },
            { Field: "HoTen", Title: "Tên NV", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "TenNgheNghiep", Title: "ĐV/BP", Width: 30, Sortable: true },
            { Field: "GioiTinh", Title: "GIỚI TÍNH", Width: 30, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: "NamSinh", Title: "NĂM SINH", Width: 30, Sortable: true },
            { Field: "SoDienThoai", Title: "SĐT", Width: 40, Sortable: true },
            { Field: "Email", Title: "EMAIL", Width: 40, Sortable: true },
            { Field: "SoChungMinhThu", Title: "CMT", Width: 30, Sortable: true },
            //{ Field: "TenDanToc", Title: "DÂN TỘC", Width: 30, Sortable: true },
            { Field: "TenTinhThanh", Title: "TỈNH/TP", Width: 40, Sortable: true },
            //{ Field: "NhomDoiTuongKhamSucKhoe", Title: "NHÓM KHÁM", Width: 40, Sortable: true },
            { Field: "DichVuDaThucHien", Title: "TÌNH TRẠNG DV", Width: 40, Sortable: true, Template: this.dichVuDaThucHienTemplate },
            { Field: "KSKKetLuanPhanLoaiSucKhoe", Title: "KẾT LUẬN", Width: 30, Sortable: true, Template: this.ketLuanTemplate },
        ];
        this.lanDauLoadData = false;
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].getItem("additionalSearchStringKhamDoanDaKetLuan");
                if (additionalSearchString != null) {
                    this.khamDoanDaKetLuanSearch = JSON.parse(additionalSearchString);
                    this.addtionStringDefault = additionalSearchString;
                    this.gridChildDaKetLuan.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            let menuInfo = this.authService.getAccessUser();
            var queryString = null;
            if (menuInfo.HinhThucKhamBenh != src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_13__["HinhThucKhamBenh"].KhamDoanNgoaiVien) {
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].removeItem("additionalSearchStringKhamDoanDaKetLuan");
                queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
            }
            else {
                this.khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId = this.authService.getCongTyKhamSucKhoeId();
                this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = this.authService.getHopDongKhamSucKhoeId();
                queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuan", queryString);
            }
            this.gridChildDaKetLuan.additionalSearchString = queryString;
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    clearSearch() {
        this.khamDoanDaKetLuanSearch.SearchString = null;
        this.gridChildDaKetLuan.search();
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChildDaKetLuan.searchString = null;
            self.timKiem();
        }
    }
    trangThaiCheckBox(event, tinhTrang) {
        if (tinhTrang == "chuaketluan") {
            this.khamDoanDaKetLuanSearch.ChuaKetLuan = event;
        }
        if (tinhTrang == "daketluan") {
            this.khamDoanDaKetLuanSearch.DaKetLuan = event;
        }
        this.timKiem();
    }
    timKiem() {
        // this.location.replaceState(this.baseRoute + '?holdQuery=true');
        this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');
        var queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
        this.gridChildDaKetLuan._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuan", queryString);
        this.gridChildDaKetLuan.search();
    }
    congTyKhamSucKhoeChange(event) {
        // this.location.replaceState(this.baseRoute + '?holdQuery=true');
        this.changeDataCongTy = true;
        if (event != undefined && event != null) {
            this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');
            this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanDaKetLuanSearch.TenSoHopDong = null;
            this.khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId = event.KeyId;
            this.khamDoanDaKetLuanSearch.TenCongTy = event.Ten;
            let queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
            this.gridChildDaKetLuan._additionalSearchString = null;
            this.gridChildDaKetLuan.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuan", queryString);
        }
        else {
            // this.location.replaceState(this.baseRoute + '?holdQuery=true');
            this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');
            this.khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId = null;
            this.khamDoanDaKetLuanSearch.TenCongTy = null;
            this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanDaKetLuanSearch.TenSoHopDong = null;
            let queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
            this.gridChildDaKetLuan._additionalSearchString = queryString;
            this.gridChildDaKetLuan.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuan", queryString);
        }
    }
    soHopDongChange(event) {
        if (event != undefined && event != null) {
            this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = event.KeyId;
            this.khamDoanDaKetLuanSearch.TenSoHopDong = event.DisplayName;
            this.timKiem();
        }
        else {
            // this.location.replaceState(this.baseRoute + '?holdQuery=true');
            this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');
            this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = null;
            this.khamDoanDaKetLuanSearch.TenSoHopDong = null;
            let queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
            this.gridChildDaKetLuan._additionalSearchString = queryString;
            this.gridChildDaKetLuan.search();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuan", queryString);
        }
    }
    chinhSua(id, yeuCauTiepNhanId) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            let url = '/chi-tiet';
            this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, YeuCauTiepNhanId: yeuCauTiepNhanId } });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    openCombobox(event) {
        if (event) {
            this.isSelectDuocPham = true;
        }
        else {
            this.isSelectDuocPham = false;
        }
    }
    changeLookupHopDong(event) {
        if (!this.lanDauLoadData && this.changeDataCongTy) {
            if (event && event.length > 0 && this.khamDoanDaKetLuanSearch.CongTyKhamSucKhoeId) {
                if (!this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId) {
                    this.khamDoanDaKetLuanSearch.HopDongKhamSucKhoeId = event[0].KeyId;
                    this.khamDoanDaKetLuanSearch.TenSoHopDong = event[0].DisplayName;
                }
                this.changeDataCongTy = false;
                this.khamDoanDaKetLuanSearch.LaHopDongDaKetLuan = false;
                var queryString = JSON.stringify(this.khamDoanDaKetLuanSearch);
                this.gridChildDaKetLuan._additionalSearchString = queryString;
                this.gridChildDaKetLuan.search();
                src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem("additionalSearchStringKhamDoanDaKetLuan", queryString);
            }
        }
    }
};
KetLuanKhamSucKhoeDoanDaKetLuanListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], KetLuanKhamSucKhoeDoanDaKetLuanListComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ketLuanTemplate', { static: true })
], KetLuanKhamSucKhoeDoanDaKetLuanListComponent.prototype, "ketLuanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhTemplate', { static: true })
], KetLuanKhamSucKhoeDoanDaKetLuanListComponent.prototype, "gioiTinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dichVuDaThucHienTemplate', { static: true })
], KetLuanKhamSucKhoeDoanDaKetLuanListComponent.prototype, "dichVuDaThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], KetLuanKhamSucKhoeDoanDaKetLuanListComponent.prototype, "gridChildDaKetLuan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], KetLuanKhamSucKhoeDoanDaKetLuanListComponent.prototype, "sort", void 0);
KetLuanKhamSucKhoeDoanDaKetLuanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-luan-kham-suc-khoe-doan-da-ket-luan-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.scss")).default]
    })
], KetLuanKhamSucKhoeDoanDaKetLuanListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuL2tldC1sdWFuLWtoYW0tc3VjLWtob2UtZG9hbi1saXN0L2tldC1sdWFuLWtoYW0tc3VjLWtob2UtZG9hbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: KetLuanKhamSucKhoeDoanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetLuanKhamSucKhoeDoanListComponent", function() { return KetLuanKhamSucKhoeDoanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kham-doan-ket-luan.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts");






let KetLuanKhamSucKhoeDoanListComponent = class KetLuanKhamSucKhoeDoanListComponent {
    constructor(route) {
        this.route = route;
        this.baseRoute = "/kham-doan/ket-luan-kham-suc-khoe-doan";
        this.indexTap = 0;
        this.holdQuery = null;
        this.listStatusSelectTabKhamDoanKetLuan = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_5__["ListStatusSelectTabKhamDoanKetLuan"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].getItem('additionalSearchStringKetLuanKhamDoan') != null) {
            this.data = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].getItem('additionalSearchStringKetLuanKhamDoan');
            this.listStatusSelectTabKhamDoanKetLuan = JSON.parse(this.data);
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('additionalSearchStringKetLuanKhamDoan', null);
            this.listStatusSelectTabKhamDoanKetLuan.selectedTabChuaKetLuan = true;
            this.listStatusSelectTabKhamDoanKetLuan.selectedTabDaKetLuan = false;
        }
    }
    chuyenDen(event) {
        if (event.index == 0) {
            this.listStatusSelectTabKhamDoanKetLuan.selectedTabChuaKetLuan = true;
            this.listStatusSelectTabKhamDoanKetLuan.selectedTabDaKetLuan = false;
        }
        if (event.index == 1) {
            this.listStatusSelectTabKhamDoanKetLuan.selectedTabChuaKetLuan = false;
            this.listStatusSelectTabKhamDoanKetLuan.selectedTabDaKetLuan = true;
        }
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('additionalSearchStringKetLuanKhamDoan', JSON.stringify(this.listStatusSelectTabKhamDoanKetLuan));
    }
};
KetLuanKhamSucKhoeDoanListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
KetLuanKhamSucKhoeDoanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-luan-kham-suc-khoe-doan-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-luan-kham-suc-khoe-doan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.scss")).default]
    })
], KetLuanKhamSucKhoeDoanListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuL2tldC1sdWFuLWtzay1kb2FuLWR2LWNodWEta2hhbS1saXN0LXBvcHVwL2tldC1sdWFuLWtzay1kb2FuLWR2LWNodWEta2hhbS1saXN0LXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: KetLuanKskDoanDvChuaKhamListPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetLuanKskDoanDvChuaKhamListPopupComponent", function() { return KetLuanKskDoanDvChuaKhamListPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kham-doan-ket-luan.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts");






let KetLuanKskDoanDvChuaKhamListPopupComponent = class KetLuanKskDoanDvChuaKhamListPopupComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.popupSavingData = null;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan;
        this.khamDoanChuaKetLuan = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_5__["KhamDoanChuaKetLuan"]();
        this.soDichVuChuaKham = null;
    }
    ngOnInit() {
        // console.log("data ", this.data)
        this.soDichVuChuaKham = this.data.DichVuKhamChuaKhams.length + this.data.DichVuKyThuatChuaThucHiens.length;
        this.khamDoanChuaKetLuan = this.data.Model;
    }
    close(result) {
        this.dialogRef.close(result);
    }
};
KetLuanKskDoanDvChuaKhamListPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
KetLuanKskDoanDvChuaKhamListPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ket-luan-ksk-doan-dv-chua-kham-list-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-luan-ksk-doan-dv-chua-kham-list-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-luan-ksk-doan-dv-chua-kham-list-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], KetLuanKskDoanDvChuaKhamListPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: KhamDoanKetLuanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKetLuanRoutingModule", function() { return KhamDoanKetLuanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _ket_luan_kham_suc_khoe_doan_chi_tiet_ket_luan_kham_suc_khoe_doan_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.ts");
/* harmony import */ var _ket_luan_kham_suc_khoe_doan_list_ket_luan_kham_suc_khoe_doan_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.ts");








const routes = [
    {
        path: '',
        component: _ket_luan_kham_suc_khoe_doan_list_ket_luan_kham_suc_khoe_doan_list_component__WEBPACK_IMPORTED_MODULE_7__["KetLuanKhamSucKhoeDoanListComponent"],
        data: {
            title: "Kết Luận KSK Đoàn",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet',
        component: _ket_luan_kham_suc_khoe_doan_chi_tiet_ket_luan_kham_suc_khoe_doan_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__["KetLuanKhamSucKhoeDoanChiTietComponent"],
        data: {
            title: "Kết Luận KSK Đoàn Chi Tiết",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let KhamDoanKetLuanRoutingModule = class KhamDoanKetLuanRoutingModule {
};
KhamDoanKetLuanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KhamDoanKetLuanRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts ***!
  \***************************************************************************************/
/*! exports provided: ListStatusSelectTabKhamDoanKetLuan, KhamDoanChuaKetLuanSearch, KhamDoanDaKetLuanSearch, KhamDoanChuaKetLuan, KetLuanKhamSucKhoeDoanDichVuKhamTemplate, KetLuanKhamSucKhoeDoanDichVuKhamTemplateValue, InSoKhamSucKhoeVaKetQua, KhamDoanKetQuaMau, KetQuaKhamChuyenKhoaNoi, KetQuaNgoaiDaLieuSanPhuKhoa, KetQuaKhamChuyenKhoaMat, KetQuaKhamChuyenKhoaTaiMuiHong, KetQuaKhamChuyenKhoaNoiRangHamMat, LoaiChuyenKhoaVaDichVuKyThuat, ItemEditKetQua, KetQuaKhamSucKhoe, KetQuaKhamSucKhoeModel, KetQuaSinhHieu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStatusSelectTabKhamDoanKetLuan", function() { return ListStatusSelectTabKhamDoanKetLuan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanChuaKetLuanSearch", function() { return KhamDoanChuaKetLuanSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanDaKetLuanSearch", function() { return KhamDoanDaKetLuanSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanChuaKetLuan", function() { return KhamDoanChuaKetLuan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetLuanKhamSucKhoeDoanDichVuKhamTemplate", function() { return KetLuanKhamSucKhoeDoanDichVuKhamTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetLuanKhamSucKhoeDoanDichVuKhamTemplateValue", function() { return KetLuanKhamSucKhoeDoanDichVuKhamTemplateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InSoKhamSucKhoeVaKetQua", function() { return InSoKhamSucKhoeVaKetQua; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKetQuaMau", function() { return KhamDoanKetQuaMau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaKhamChuyenKhoaNoi", function() { return KetQuaKhamChuyenKhoaNoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaNgoaiDaLieuSanPhuKhoa", function() { return KetQuaNgoaiDaLieuSanPhuKhoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaKhamChuyenKhoaMat", function() { return KetQuaKhamChuyenKhoaMat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaKhamChuyenKhoaTaiMuiHong", function() { return KetQuaKhamChuyenKhoaTaiMuiHong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaKhamChuyenKhoaNoiRangHamMat", function() { return KetQuaKhamChuyenKhoaNoiRangHamMat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiChuyenKhoaVaDichVuKyThuat", function() { return LoaiChuyenKhoaVaDichVuKyThuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditKetQua", function() { return ItemEditKetQua; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaKhamSucKhoe", function() { return KetQuaKhamSucKhoe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaKhamSucKhoeModel", function() { return KetQuaKhamSucKhoeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaSinhHieu", function() { return KetQuaSinhHieu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ListStatusSelectTabKhamDoanKetLuan {
    constructor(selectedTabChuaKetLuan = true, selectedTabDaKetLuan = false) {
        this.selectedTabChuaKetLuan = selectedTabChuaKetLuan;
        this.selectedTabDaKetLuan = selectedTabDaKetLuan;
    }
}
class KhamDoanChuaKetLuanSearch {
    constructor(CongTyKhamSucKhoeId = null, TenCongTy = null, HopDongKhamSucKhoeId = null, TenSoHopDong = null, ChuaKetLuan = true, DaKetLuan = true, KetLuan = null, LaHopDongDaKetLuan = null, SearchString = null) {
        this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
        this.TenCongTy = TenCongTy;
        this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
        this.TenSoHopDong = TenSoHopDong;
        this.ChuaKetLuan = ChuaKetLuan;
        this.DaKetLuan = DaKetLuan;
        this.KetLuan = KetLuan;
        this.LaHopDongDaKetLuan = LaHopDongDaKetLuan;
        this.SearchString = SearchString;
    }
}
class KhamDoanDaKetLuanSearch {
    constructor(CongTyKhamSucKhoeId = null, TenCongTy = null, HopDongKhamSucKhoeId = null, TenSoHopDong = null, ChuaKetLuan = true, DaKetLuan = true, LaHopDongDaKetLuan = null, SearchString = null) {
        this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
        this.TenCongTy = TenCongTy;
        this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
        this.TenSoHopDong = TenSoHopDong;
        this.ChuaKetLuan = ChuaKetLuan;
        this.DaKetLuan = DaKetLuan;
        this.LaHopDongDaKetLuan = LaHopDongDaKetLuan;
        this.SearchString = SearchString;
    }
}
class KhamDoanChuaKetLuan {
    constructor(Id = null, HopDongKhamSucKhoeId = null, PhanLoaiSucKhoeId = null, KSKKetQuaCanLamSang = null, KSKDanhGiaCanLamSang = null, KSKKetLuanPhanLoaiSucKhoe = null, KSKKetLuanGhiChu = null, KSKKetLuanCacBenhTat = null, IsEnableKetLuan = null, IsHiddenKetLuan = null, CoHienThiPhanLoai = null, IsOnlySave = null, CoDichVuChuaKham = null, LaGetKetQuaMau = null, DichVuKhamChuaKhams = null, DichVuKyThuatChuaThucHiens = null, LastModified = null, TrangThaiYeuCauTiepNhan = null, KetLuanKhamSucKhoeDoanDichVuKhamTemplates = [], CongTyKhamSucKhoeId = null) {
        this.Id = Id;
        this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
        this.PhanLoaiSucKhoeId = PhanLoaiSucKhoeId;
        this.KSKKetQuaCanLamSang = KSKKetQuaCanLamSang;
        this.KSKDanhGiaCanLamSang = KSKDanhGiaCanLamSang;
        this.KSKKetLuanPhanLoaiSucKhoe = KSKKetLuanPhanLoaiSucKhoe;
        this.KSKKetLuanGhiChu = KSKKetLuanGhiChu;
        this.KSKKetLuanCacBenhTat = KSKKetLuanCacBenhTat;
        this.IsEnableKetLuan = IsEnableKetLuan;
        this.IsHiddenKetLuan = IsHiddenKetLuan;
        this.CoHienThiPhanLoai = CoHienThiPhanLoai;
        this.IsOnlySave = IsOnlySave;
        this.CoDichVuChuaKham = CoDichVuChuaKham;
        this.LaGetKetQuaMau = LaGetKetQuaMau;
        this.DichVuKhamChuaKhams = DichVuKhamChuaKhams;
        this.DichVuKyThuatChuaThucHiens = DichVuKyThuatChuaThucHiens;
        this.LastModified = LastModified;
        this.TrangThaiYeuCauTiepNhan = TrangThaiYeuCauTiepNhan;
        this.KetLuanKhamSucKhoeDoanDichVuKhamTemplates = KetLuanKhamSucKhoeDoanDichVuKhamTemplates;
        this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
    }
}
class KetLuanKhamSucKhoeDoanDichVuKhamTemplate {
    constructor(Type = null, TypeTemplate = null, Title = null, ThongTinKhamTheoDichVuTemplate = null, ThongTinKhamTheoDichVuData = null, KetLuanKhamSucKhoeDoanDichVuKhamTemplateValues = []) {
        this.Type = Type;
        this.TypeTemplate = TypeTemplate;
        this.Title = Title;
        this.ThongTinKhamTheoDichVuTemplate = ThongTinKhamTheoDichVuTemplate;
        this.ThongTinKhamTheoDichVuData = ThongTinKhamTheoDichVuData;
        this.KetLuanKhamSucKhoeDoanDichVuKhamTemplateValues = KetLuanKhamSucKhoeDoanDichVuKhamTemplateValues;
    }
}
class KetLuanKhamSucKhoeDoanDichVuKhamTemplateValue {
    constructor(Label = null, Value = null) {
        this.Label = Label;
        this.Value = Value;
    }
}
class InSoKhamSucKhoeVaKetQua {
    constructor(Id = null, HostingName = null, Loai = null) {
        this.Id = Id;
        this.HostingName = HostingName;
        this.Loai = Loai;
    }
}
class KhamDoanKetQuaMau {
    constructor(IsCheck = true, Value = null) {
        this.IsCheck = IsCheck;
        this.Value = Value;
    }
}
class KetQuaKhamChuyenKhoaNoi {
    constructor(TuanHoan = null, HoHap = null, TieuHoa = null, ThanKinh = null, CoXuongKhop = null, ThanTietNieu = null, NoiTiet = null, TamThan = null) {
        this.TuanHoan = TuanHoan;
        this.HoHap = HoHap;
        this.TieuHoa = TieuHoa;
        this.ThanKinh = ThanKinh;
        this.CoXuongKhop = CoXuongKhop;
        this.ThanTietNieu = ThanTietNieu;
        this.NoiTiet = NoiTiet;
        this.TamThan = TamThan;
    }
}
class KetQuaNgoaiDaLieuSanPhuKhoa {
    constructor(value = null) {
        this.value = value;
    }
}
class KetQuaKhamChuyenKhoaMat {
    constructor(KhongKinhMatPhai = null, KhongKinhMatTrai = null, CoKinhMatPhai = null, CoKinhMatTrai = null, CacBenhVeMat = null) {
        this.KhongKinhMatPhai = KhongKinhMatPhai;
        this.KhongKinhMatTrai = KhongKinhMatTrai;
        this.CoKinhMatPhai = CoKinhMatPhai;
        this.CoKinhMatTrai = CoKinhMatTrai;
        this.CacBenhVeMat = CacBenhVeMat;
    }
}
class KetQuaKhamChuyenKhoaTaiMuiHong {
    constructor(TaiPhaiNoiThuong = null, TaiPhaiNoiTham = null, TaiTraiNoiThuong = null, TaiTraiNoiTham = null, CacBenhTaiMuiHong = null) {
        this.TaiPhaiNoiThuong = TaiPhaiNoiThuong;
        this.TaiPhaiNoiTham = TaiPhaiNoiTham;
        this.TaiTraiNoiThuong = TaiTraiNoiThuong;
        this.TaiTraiNoiTham = TaiTraiNoiTham;
        this.CacBenhTaiMuiHong = CacBenhTaiMuiHong;
    }
}
class KetQuaKhamChuyenKhoaNoiRangHamMat {
    constructor(HamTren = null, HamDuoi = null, CacBenhRangHamMat = null) {
        this.HamTren = HamTren;
        this.HamDuoi = HamDuoi;
        this.CacBenhRangHamMat = CacBenhRangHamMat;
    }
}
var LoaiChuyenKhoaVaDichVuKyThuat;
(function (LoaiChuyenKhoaVaDichVuKyThuat) {
    LoaiChuyenKhoaVaDichVuKyThuat[LoaiChuyenKhoaVaDichVuKyThuat["ChuyenKhoaNoi"] = 1] = "ChuyenKhoaNoi";
    LoaiChuyenKhoaVaDichVuKyThuat[LoaiChuyenKhoaVaDichVuKyThuat["ChuyenKhoaTaiMuiHong"] = 2] = "ChuyenKhoaTaiMuiHong";
    LoaiChuyenKhoaVaDichVuKyThuat[LoaiChuyenKhoaVaDichVuKyThuat["ChuyenKhoaRangHamMat"] = 3] = "ChuyenKhoaRangHamMat";
    LoaiChuyenKhoaVaDichVuKyThuat[LoaiChuyenKhoaVaDichVuKyThuat["ChuyenKhoaMat"] = 4] = "ChuyenKhoaMat";
    LoaiChuyenKhoaVaDichVuKyThuat[LoaiChuyenKhoaVaDichVuKyThuat["ChuyenSanPhuKhoa"] = 5] = "ChuyenSanPhuKhoa";
    LoaiChuyenKhoaVaDichVuKyThuat[LoaiChuyenKhoaVaDichVuKyThuat["ChuyenDaLieu"] = 6] = "ChuyenDaLieu";
    LoaiChuyenKhoaVaDichVuKyThuat[LoaiChuyenKhoaVaDichVuKyThuat["ChuyenNgoaiKhoa"] = 7] = "ChuyenNgoaiKhoa";
    LoaiChuyenKhoaVaDichVuKyThuat[LoaiChuyenKhoaVaDichVuKyThuat["Dvkt"] = 8] = "Dvkt";
})(LoaiChuyenKhoaVaDichVuKyThuat || (LoaiChuyenKhoaVaDichVuKyThuat = {}));
class ItemEditKetQua {
    constructor(Id = null, Type = null, value = null, JsonValueEdit = null) {
        this.Id = Id;
        this.Type = Type;
        this.value = value;
        this.JsonValueEdit = JsonValueEdit;
    }
}
class KetQuaKhamSucKhoe {
    constructor(YeuCauTiepNhanId = null, HopDongKhamSucKhoeId = null, JsonKetQuaKSK = null, JsonKetLuan = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
        this.JsonKetQuaKSK = JsonKetQuaKSK;
        this.JsonKetLuan = JsonKetLuan;
    }
}
class KetQuaKhamSucKhoeModel {
    constructor(DanhSachGridKhamSucKhoe = []) {
        this.DanhSachGridKhamSucKhoe = DanhSachGridKhamSucKhoe;
    }
}
class KetQuaSinhHieu {
    constructor(Id = 0, NhipTim = null, NhipTho = null, ThanNhiet = null, HuyetAp = null, HuyetApTamThu = null, HuyetApTamTruong = null, ChieuCao = null, CanNang = null, BMI = null, Glassgow = null, NoiThucHienId = null, NhanVienThucHienId = null, YeuCauTiepNhanId = 0, NgayThucHien = null, IsUpdate = false, IsDelete = false) {
        this.Id = Id;
        this.NhipTim = NhipTim;
        this.NhipTho = NhipTho;
        this.ThanNhiet = ThanNhiet;
        this.HuyetAp = HuyetAp;
        this.HuyetApTamThu = HuyetApTamThu;
        this.HuyetApTamTruong = HuyetApTamTruong;
        this.ChieuCao = ChieuCao;
        this.CanNang = CanNang;
        this.BMI = BMI;
        this.Glassgow = Glassgow;
        this.NoiThucHienId = NoiThucHienId;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.NgayThucHien = NgayThucHien;
        this.IsUpdate = IsUpdate;
        this.IsDelete = IsDelete;
    }
}


/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.module.ts ***!
  \****************************************************************************************/
/*! exports provided: KhamDoanKetLuanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanKetLuanModule", function() { return KhamDoanKetLuanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _kham_doan_ket_luan_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./kham-doan-ket-luan-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan-routing.module.ts");
/* harmony import */ var _ket_luan_kham_suc_khoe_doan_list_ket_luan_kham_suc_khoe_doan_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component.ts");
/* harmony import */ var _ket_luan_kham_suc_khoe_doan_chua_ket_luan_list_ket_luan_kham_suc_khoe_doan_chua_ket_luan_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.ts");
/* harmony import */ var _ket_luan_kham_suc_khoe_doan_da_ket_luan_list_ket_luan_kham_suc_khoe_doan_da_ket_luan_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component.ts");
/* harmony import */ var _ket_luan_kham_suc_khoe_doan_chi_tiet_ket_luan_kham_suc_khoe_doan_chi_tiet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component.ts");
/* harmony import */ var _kham_doan_thong_tin_hanh_chinh_kham_doan_thong_tin_hanh_chinh_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.module */ "./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.module.ts");
/* harmony import */ var _ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component.ts");
/* harmony import */ var _kham_doan_tiep_nhan_kham_doan_tiep_nhan_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../kham-doan-tiep-nhan/kham-doan-tiep-nhan.module */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.module.ts");
/* harmony import */ var _kham_doan_tiep_nhan_ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.ts");
/* harmony import */ var _kham_doan_tiep_nhan_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.ts");
/* harmony import */ var _ket_luan_ksk_doan_dv_chua_kham_list_popup_ket_luan_ksk_doan_dv_chua_kham_list_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component.ts");
/* harmony import */ var _popup_ket_qua_ksk_edit_popup_ket_qua_ksk_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.ts");
/* harmony import */ var _popup_ket_qua_ksk_shared_popup_ket_qua_ksk_shared_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component.ts");
/* harmony import */ var _popup_ket_qua_ksk_ket_luan_popup_ket_qua_ksk_ket_luan_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component.ts");





























let KhamDoanKetLuanModule = class KhamDoanKetLuanModule {
};
KhamDoanKetLuanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ket_luan_kham_suc_khoe_doan_list_ket_luan_kham_suc_khoe_doan_list_component__WEBPACK_IMPORTED_MODULE_16__["KetLuanKhamSucKhoeDoanListComponent"],
            _ket_luan_kham_suc_khoe_doan_chua_ket_luan_list_ket_luan_kham_suc_khoe_doan_chua_ket_luan_list_component__WEBPACK_IMPORTED_MODULE_17__["KetLuanKhamSucKhoeDoanChuaKetLuanListComponent"],
            _ket_luan_kham_suc_khoe_doan_da_ket_luan_list_ket_luan_kham_suc_khoe_doan_da_ket_luan_list_component__WEBPACK_IMPORTED_MODULE_18__["KetLuanKhamSucKhoeDoanDaKetLuanListComponent"],
            _ket_luan_kham_suc_khoe_doan_chi_tiet_ket_luan_kham_suc_khoe_doan_chi_tiet_component__WEBPACK_IMPORTED_MODULE_19__["KetLuanKhamSucKhoeDoanChiTietComponent"],
            _ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_21__["KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent"],
            _ket_luan_ksk_doan_dv_chua_kham_list_popup_ket_luan_ksk_doan_dv_chua_kham_list_popup_component__WEBPACK_IMPORTED_MODULE_25__["KetLuanKskDoanDvChuaKhamListPopupComponent"],
            _popup_ket_qua_ksk_edit_popup_ket_qua_ksk_edit_component__WEBPACK_IMPORTED_MODULE_26__["PopupKetQuaKskEditComponent"],
            _popup_ket_qua_ksk_shared_popup_ket_qua_ksk_shared_component__WEBPACK_IMPORTED_MODULE_27__["PopupKetQuaKskSharedComponent"],
            _popup_ket_qua_ksk_ket_luan_popup_ket_qua_ksk_ket_luan_component__WEBPACK_IMPORTED_MODULE_28__["PopupKetQuaKskKetLuanComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kham_doan_ket_luan_routing_module__WEBPACK_IMPORTED_MODULE_15__["KhamDoanKetLuanRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kham_doan_thong_tin_hanh_chinh_kham_doan_thong_tin_hanh_chinh_module__WEBPACK_IMPORTED_MODULE_20__["KhamDoanThongTinHanhChinhModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"],
            _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__["IntlModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__["PdfViewerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _kham_doan_tiep_nhan_kham_doan_tiep_nhan_module__WEBPACK_IMPORTED_MODULE_22__["KhamDoanTiepNhanModule"]
        ],
        entryComponents: [
            _ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_ket_luan_kham_suc_khoe_doan_ket_qua_mau_popup_component__WEBPACK_IMPORTED_MODULE_21__["KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent"],
            _kham_doan_tiep_nhan_ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_23__["KetQuaKhamSucKhoePopupComponent"],
            _kham_doan_tiep_nhan_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_24__["SoKhamSucKhoeDinhKyPopupComponent"],
            _ket_luan_ksk_doan_dv_chua_kham_list_popup_ket_luan_ksk_doan_dv_chua_kham_list_popup_component__WEBPACK_IMPORTED_MODULE_25__["KetLuanKskDoanDvChuaKhamListPopupComponent"],
            _popup_ket_qua_ksk_edit_popup_ket_qua_ksk_edit_component__WEBPACK_IMPORTED_MODULE_26__["PopupKetQuaKskEditComponent"],
            _popup_ket_qua_ksk_shared_popup_ket_qua_ksk_shared_component__WEBPACK_IMPORTED_MODULE_27__["PopupKetQuaKskSharedComponent"],
            _popup_ket_qua_ksk_ket_luan_popup_ket_qua_ksk_ket_luan_component__WEBPACK_IMPORTED_MODULE_28__["PopupKetQuaKskKetLuanComponent"]
        ]
    })
], KhamDoanKetLuanModule);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".po-h {\n  color: #005dab;\n  position: relative;\n  top: 0;\n  left: 5px;\n}\n\n.po-h mat-icon {\n  display: contents;\n}\n\n.container-iframe {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 205px);\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.content-edit {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.mat-dialog-container {\n  padding-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2V0LWx1YW4vcG9wdXAta2V0LXF1YS1rc2stZWRpdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLWtldC1sdWFuXFxwb3B1cC1rZXQtcXVhLWtzay1lZGl0XFxwb3B1cC1rZXQtcXVhLWtzay1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1rZXQtbHVhbi9wb3B1cC1rZXQtcXVhLWtzay1lZGl0L3BvcHVwLWtldC1xdWEta3NrLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuL3BvcHVwLWtldC1xdWEta3NrLWVkaXQvcG9wdXAta2V0LXF1YS1rc2stZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wby1oIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1cHg7XG59XG5cbi5wby1oIG1hdC1pY29uIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMDVweCk7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudC1lZGl0IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59IiwiLnBvLWgge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDVweDtcbn1cblxuLnBvLWggbWF0LWljb24ge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwNXB4KTtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50LWVkaXQge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: PopupKetQuaKskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupKetQuaKskEditComponent", function() { return PopupKetQuaKskEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../kham-doan-ket-luan.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts");
/* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/add-circle */ "./node_modules/@iconify/icons-ic/add-circle.js");
/* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-fullscreen */ "./node_modules/@iconify/icons-ic/twotone-fullscreen.js");
/* harmony import */ var _iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-fullscreen-exit */ "./node_modules/@iconify/icons-ic/twotone-fullscreen-exit.js");
/* harmony import */ var _iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
























let PopupKetQuaKskEditComponent = class PopupKetQuaKskEditComponent {
    constructor(data, dialogRef, route, router, apiService, dialog, notificationService, authService, ref, location) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.location = location;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icAddCircle = _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icFullscreen = _iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icFullscreenExit = _iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.isFullscreen = false;
        this.gridColumns = [];
        this.gridPhanLoaiCacBenhTatVaDeNghiColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.gridDataSourcePhanLoaiCacBenhTatVaDeNghi = {
            data: [],
            total: 0
        };
        this.gridSinhHieuColumns = [];
        this.dataSourceSinhHieuDisplay = {
            data: [],
            total: 0
        };
        this.current = new Date();
        this.dataSourceSinhHieu = {
            data: [],
            total: 0
        };
        this.format = 'n1';
        this.yeuCauTiepNhanId = 0;
        this.showGrid = true;
        this.showInLuuChuyenDanhSach = false;
        this.groups = [{ field: 'TenNhom' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan;
        if (this.data.YeuCauTiepNhanId != undefined) {
            this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
        }
        else {
            this.route.queryParams.subscribe(param => {
                this.yeuCauTiepNhanId = param['YeuCauTiepNhanId'];
            });
        }
        this.gridDataSource.data = this.data.Model;
        this.getGridSinhHieu();
        this.gridColumns = [
            { Field: "TenNhom", Title: "", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 100, Template: this.tenDichVuTemplate },
            { Field: "KetQuaDichVuDefault", Title: "Kết quả dịch vụ", Width: 100, ShowTooltip: true, Template: this.editDefaultTemplate },
            { Field: "KetQuaDichVu", Title: "Cập nhật Kết quả dịch vụ ", MinWidth: 100, Template: this.editTemplate },
        ];
        this.gridSinhHieuColumns = [
            { Field: 'NhipTim', Title: 'Mạch (nhịp/phút)', Width: 137, Template: this.nhipTimTemplate },
            { Field: 'ThanNhiet', Title: 'Nhiệt độ (°C)', Width: 100, Template: this.thanNhietTemplate },
            { Field: 'HuyetAp', Title: 'Huyết áp (mmHg)', Width: 135, Template: this.huyetApTemplate },
            { Field: 'NhipTho', Title: 'Nhịp thở (lần/phút)', Width: 150, Template: this.nhipThoTemplate },
            { Field: 'CanNang', Title: 'Cân nặng (kg)', Width: 113, Template: this.canNangTemplate },
            { Field: 'ChieuCao', Title: 'Chiều cao (cm)', Width: 117, Template: this.chieuCaoTemplate },
            { Field: 'BMI', Title: 'BMI (kg/m²)', Width: 91, Template: this.BMITemplate },
            { Field: 'Glassgow', Title: 'Glassgow', Width: 120, Template: this.glassgowTemplate },
            { Field: 'SpO2', Title: 'SpO2 (%)', Width: 120, Template: this.spO2Template },
            { Field: 'NgayThucHien', Title: 'Ngày thực hiện', Width: 145 },
            { Field: 'Action', Title: '', Width: 70, Template: this.actionSinhHieuTemplate }
        ];
        this.gridPhanLoaiCacBenhTatVaDeNghiColumns = [
            { Field: "", Title: "", Width: 200, Sortable: true, Hidden: true },
            { Field: "Ten", Title: "Tên", Width: 120, Template: this.editTenTemplate },
            { Field: "KetQuaDefault", Title: "Kết quả ", Width: 100, ShowTooltip: true, Template: this.KetQuaDefaultTemplate },
            { Field: "KetQua", Title: "Cập nhật", MinWidth: 100, Template: this.editCapNhatTemplate },
        ];
        if (this.data != null) {
            if (this.data.hopDongKhamSucKhoeId != null) {
                this.gridPhanLoaiCacBenhTatVaDeNghi(this.data.hopDongKhamSucKhoeId);
                //this.runTest(this.data.hopDongKhamSucKhoeId);
            }
        }
        if (this.data.ShowIn != null) {
            this.showInLuuChuyenDanhSach = this.data.ShowIn;
        }
    }
    ngAfterContentInit() {
        this.gridPhanLoaiCacBenhTatVaDeNghi(this.data.hopDongKhamSucKhoeId);
        this.fullscreen();
    }
    close(result) {
        this.dialogRef.close(result);
    }
    getGridSinhHieu() {
        this.apiService.get("KhamDoan/GetDataListForChiSoSinhTon?id=" + this.yeuCauTiepNhanId).subscribe((resultData) => {
            if (resultData != undefined && resultData != null && resultData != "") {
                this.dataSourceSinhHieu = {
                    data: [...resultData.Data],
                    total: resultData.Data.length
                };
                this.dataSourceSinhHieuDisplay = {
                    data: [...resultData.Data],
                    total: resultData.Data.length
                };
            }
        });
    }
    // BindValue(dataItem){
    //   if (dataItem != undefined && dataItem != null) {
    //     let dialogRef = this.dialog.open(PopupKetQuaKskSharedComponent, {
    //       disableClose: false,
    //       width: '800px',
    //       height: 'auto',
    //       data: dataItem,
    //     });
    //     dialogRef.afterClosed().subscribe(result => {
    //       if(result != undefined && result != null && result !="")
    //       {
    //         if(result =='No')
    //         {
    //         }else{
    //           this.gridDataSource.data.forEach(element => {
    //             if(element.Id == result.Id && element.Type == result.Type)
    //             {
    //               element.KetQuaDichVu = result.value;
    //               element.JsonStringKetQua = result.JsonValueEdit;
    //               this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["cập nhật"]));
    //             }
    //           });
    //         }
    //       }
    //     });
    //   }
    // }
    Luu(isSave) {
        let ketQuaKhamSucKhoe = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_13__["KetQuaKhamSucKhoe"]();
        ketQuaKhamSucKhoe.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
        ketQuaKhamSucKhoe.HopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
        ketQuaKhamSucKhoe.JsonKetQuaKSK = JSON.stringify(this.gridDataSource.data);
        ketQuaKhamSucKhoe.JsonKetLuan = JSON.stringify(this.gridDataSourcePhanLoaiCacBenhTatVaDeNghi.data);
        var loading = this.showLoading("Đang lưu...");
        this.apiService.post("KhamDoan/SaveBanInKhamDoanTiepNhan", ketQuaKhamSucKhoe).subscribe((resultData) => {
            if (resultData != undefined && resultData != null && resultData != "") {
                this.closeLoading(loading);
                const sendingParam = {
                    data: [...this.dataSourceSinhHieu.data],
                    Id: this.yeuCauTiepNhanId
                };
                if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
                    this.apiService.post('KhamDoan/UpdateChiSoSinhTonAsync', sendingParam)
                        // tslint:disable-next-line: deprecation
                        .subscribe(_ => {
                        // this.notificationService.
                        //   showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, ['Cập nhật chỉ số sinh tồn']));
                        //this.quayLai();
                        this.dataSourceSinhHieu = {
                            data: [],
                            total: 0
                        };
                        this.dataSourceSinhHieuDisplay = {
                            data: [],
                            total: 0
                        };
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        if (isSave == 2) {
                            // this.dialog.open(PopupKetQuaKskKetLuanComponent, {
                            //   disableClose: false,
                            //   width: '1000px',
                            //   data: {Id:this.data.hopDongKhamSucKhoeId,ShowIn:true}
                            // });
                            loading = this.showLoading("Đang in...");
                            var obj = {
                                "Id": this.data.hopDongKhamSucKhoeId,
                                "HostingName": window.location.protocol + "//" + window.location.host
                            };
                            this.apiService.postExportPdf("KhamDoan/XuLyInKetQuaKhamSucKhoeKetLuanAsync", obj).subscribe(res => {
                                if (res != undefined && res != null) {
                                    let newBlob = new Blob([res], { type: "application/pdf" });
                                    const blobUrl = URL.createObjectURL(newBlob);
                                    const iframe = document.createElement('iframe');
                                    iframe.style.display = 'none';
                                    iframe.src = blobUrl;
                                    document.body.appendChild(iframe);
                                    iframe.contentWindow.print();
                                    this.closeLoading(loading);
                                }
                            }, err => {
                                if (err.Message != "Validation Failed") {
                                    this.notificationService.showError(err.Message);
                                }
                                this.closeLoading(loading);
                            });
                        }
                        if (isSave != 3) // hoặc kiểm tra yctn ! = undefine
                         {
                            this.apiService.get(`KhamDoan/GetDataListForChiSoSinhTon?id=` + this.yeuCauTiepNhanId).subscribe((resultData) => {
                                if (resultData !== null && resultData !== undefined) {
                                    this.dataSourceSinhHieu = {
                                        data: [...resultData.Data],
                                        total: resultData.Data.length
                                    };
                                    this.dataSourceSinhHieuDisplay = {
                                        data: [...resultData.Data],
                                        total: resultData.Data.length
                                    };
                                }
                            });
                        }
                    }, (err) => {
                        this.notificationService.showError(err.Message);
                    });
                }
                if (isSave == 3) {
                    this.location.back();
                }
                //
            }
        });
    }
    themChiSoSinhTon() {
        if (this.dataSourceSinhHieuDisplay.data.findIndex(x => x.Id === 0) === -1) {
            const newItem = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_13__["KetQuaSinhHieu"]();
            newItem.NgayThucHien = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTimeSACH(this.current, 'dd/mm/yyyy').toString();
            this.dataSourceSinhHieuDisplay.data.push(newItem);
            this.dataSourceSinhHieu.data.push(newItem);
        }
    }
    onChangeNhipTim(data, input) {
        if (input % 1 !== 0) {
            data.NhipTim = input.toFixed();
            if (typeof data.NhipTim === 'string') {
                data.NhipTim = Number(data.NhipTim);
            }
        }
    }
    onChangeNhipTho(input, dataItem) {
        if (input % 1 !== 0) {
            dataItem.NhipTho = input.toFixed();
            if (typeof dataItem.NhipTho === 'string') {
                dataItem.NhipTho = Number(dataItem.NhipTho);
            }
        }
    }
    onChangeHuyetApTamThu(input, dataItem) {
        if (input % 1 !== 0) {
            dataItem.HuyetApTamThu = input.toFixed();
            if (typeof dataItem.HuyetApTamThu === 'string') {
                dataItem.HuyetApTamThu = Number(dataItem.HuyetApTamThu);
            }
        }
        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        }
        else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
        }
    }
    onChangeHuyetApTamTruong(input, dataItem) {
        if (input % 1 !== 0) {
            dataItem.HuyetApTamTruong = input.toFixed();
            if (typeof dataItem.HuyetApTamTruong === 'string') {
                dataItem.HuyetApTamTruong = Number(dataItem.HuyetApTamTruong);
            }
        }
        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        }
        else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
        }
    }
    onChangeCanNang(data) {
        const chieuCao = data.ChieuCao / 100;
        if (chieuCao === 0) {
            data.BMI = null;
            return;
        }
        data.BMI = data.CanNang / (chieuCao * chieuCao);
    }
    onChangeChieuCao(data) {
        const chieuCao = data.ChieuCao / 100;
        if (chieuCao === 0) {
            data.BMI = null;
            return;
        }
        data.BMI = data.CanNang / (chieuCao * chieuCao);
    }
    suaChiSoSinhHieu(dataItem) {
        if (dataItem) {
            dataItem.IsUpdate = true;
            this.dataSourceSinhHieu.data.filter(x => x === dataItem)[0].IsUpdate = true;
            dataItem.NgayThucHien = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTimeSACH(new Date(), 'dd/mm/yyyy').toString();
        }
    }
    xoaChiSoSinhHieu(item) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].MessConfirm, ['xóa']) }
        }).afterClosed()
            // tslint:disable-next-line: deprecation
            .subscribe(result => {
            if (result === 'Yes' && this.dataSourceSinhHieuDisplay.data.some(x => x === item)) {
                this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                this.dataSourceSinhHieu.data.filter(x => x === item)[0].IsDelete = true;
                this.dataSourceSinhHieuDisplay.data.splice(this.dataSourceSinhHieuDisplay.data.findIndex(x => x === item), 1);
            }
        });
    }
    gridPhanLoaiCacBenhTatVaDeNghi(hopDongKhamSucKhoeId) {
        this.apiService.post("KhamDoan/GetGridPhanLoaiVaCacBenhtatDenghi?hopDongKhamSucKhoeId=" + hopDongKhamSucKhoeId).subscribe((resData) => {
            if (resData != undefined && resData != null) {
                if (resData.length == 0) {
                    this.showGrid = false;
                }
                this.gridDataSourcePhanLoaiCacBenhTatVaDeNghi = {
                    data: [...resData],
                    total: [...resData].length
                };
            }
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    changePhanLoai(dataItem, value) {
        dataItem.PhanLoaiId = value;
        dataItem.PhanLoaiIdCapNhatId = dataItem.PhanLoaiId;
        if (dataItem.DaCoketLuan != true && value != undefined && value != null) {
            this.apiService.post("KhamDoan/GetPhanLoaiSucKhoeKetLuan?id=" + dataItem.PhanLoaiIdCapNhatId).subscribe((resData) => {
                if (resData != undefined && resData != null) {
                    dataItem.KetQua = resData[0].DisplayName;
                }
            }, (err) => {
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
    }
    changePhanLoaiCapNhat(dataItem, value) {
        dataItem.PhanLoaiIdCapNhat = value;
        if (dataItem.DaCoketLuan != true && value != undefined && value != null) {
            this.apiService.post("KhamDoan/GetPhanLoaiSucKhoeKetLuan?id=" + value).subscribe((resData) => {
                if (resData != undefined && resData != null) {
                    dataItem.KetQua = resData[0].DisplayName;
                }
            }, (err) => {
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
    }
    changeCacBenhTatVaDeNghi(dataItem, value) {
        if (dataItem.DaCoketLuan != true && value != undefined && value != null && value != "") {
            dataItem.KetQuaDefault = value;
            dataItem.KetQua = value;
        }
    }
    showLoading(title) {
        return this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_22__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: title }
        });
    }
    closeLoading(loading) {
        loading.close();
    }
    fullscreen() {
        if (this.isFullscreen) {
            jQuery(".content-edit").css({ "height": jQuery(window).height() - 727 });
        }
        else {
            jQuery(".content-edit").css({ "height": jQuery(window).height() - 440 });
        }
        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].fullScreenDialog(this.isFullscreen, 650, 1000, 137);
        this.isFullscreen = !this.isFullscreen;
    }
    CopyKetQuaHienThi() {
        var loading = this.showLoading("Đang copy...");
        if (this.gridDataSource.data != null) {
            this.gridDataSource.data.forEach(element => {
                if (element.KetQuaDichVu == null || element.KetQuaDichVu == "") {
                    element.KetQuaDichVu = element.KetQuaDichVuDefault;
                }
            });
        }
        this.closeLoading(loading);
    }
    setDataGridView() {
        this.gridChinhSua.gridDataSource = this.gridDataSource.data;
        if (this.gridChinhSua !== undefined)
            this.gridChinhSua.setDataSource();
    }
};
PopupKetQuaKskEditComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_23__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChinhSua', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
], PopupKetQuaKskEditComponent.prototype, "gridChinhSua", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "editTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editDefaultTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "editDefaultTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionSinhHieuTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "actionSinhHieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('huyetApTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "huyetApTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanNhietTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "thanNhietTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhipTimTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "nhipTimTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhipThoTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "nhipThoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canNangTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "canNangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chieuCaoTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "chieuCaoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('BMITemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "BMITemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('glassgowTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "glassgowTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('spO2Template', { static: true })
], PopupKetQuaKskEditComponent.prototype, "spO2Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridSinhHieu', { static: false })
], PopupKetQuaKskEditComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChinhSuaPhanLoaiCacBenhTatVaDeNghi', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
], PopupKetQuaKskEditComponent.prototype, "gridChinhSuaPhanLoaiCacBenhTatVaDeNghi", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editTenTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "editTenTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editCapNhatTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "editCapNhatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('KetQuaDefaultTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "KetQuaDefaultTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDichVuTemplate', { static: true })
], PopupKetQuaKskEditComponent.prototype, "tenDichVuTemplate", void 0);
PopupKetQuaKskEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-ket-qua-ksk-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-ket-qua-ksk-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-ket-qua-ksk-edit.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PopupKetQuaKskEditComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 607px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4ta2V0LWx1YW4vcG9wdXAta2V0LXF1YS1rc2sta2V0LWx1YW4vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi1rZXQtbHVhblxccG9wdXAta2V0LXF1YS1rc2sta2V0LWx1YW5cXHBvcHVwLWtldC1xdWEta3NrLWtldC1sdWFuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1rZXQtbHVhbi9wb3B1cC1rZXQtcXVhLWtzay1rZXQtbHVhbi9wb3B1cC1rZXQtcXVhLWtzay1rZXQtbHVhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1rZXQtbHVhbi9wb3B1cC1rZXQtcXVhLWtzay1rZXQtbHVhbi9wb3B1cC1rZXQtcXVhLWtzay1rZXQtbHVhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDdweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDdweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: PopupKetQuaKskKetLuanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupKetQuaKskKetLuanComponent", function() { return PopupKetQuaKskKetLuanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");








let PopupKetQuaKskKetLuanComponent = class PopupKetQuaKskKetLuanComponent {
    constructor(data, dialog, apiService, notificationService) {
        this.data = data;
        this.dialog = dialog;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.title = "KẾT QUẢ KHÁM SỨC KHỎE";
    }
    ngOnInit() {
        this.getHtml();
    }
    getHtml() {
        this.showPopupLoadingData();
        var obj = {
            "Id": this.data,
            "HostingName": window.location.protocol + "//" + window.location.host
        };
        this.apiService.postExportPdf("KhamDoan/XuLyInKetQuaKhamSucKhoeKetLuanAsync", obj).subscribe(res => {
            let newBlob = new Blob([res], { type: "application/pdf" });
            let datalocalURL = window.URL.createObjectURL(newBlob);
            this.fileUrl = datalocalURL;
            this.file = res;
            this.closePopupLoadingData();
        }, err => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }
    // getFilePDFFromHtml(html) {
    //   var obj = {
    //     "Html": html,
    //     "TenFile": "KetQuaKhamSucKhoe"
    //   }
    //   this.apiService.postExportPdf<any>('KhamDoan/GetFilePDFFromHtml', obj).subscribe(
    //     file => {
    //       let newBlob = new Blob([file], { type: "application/pdf" });
    //       let datalocalURL = window.URL.createObjectURL(newBlob);
    //       this.fileUrl = datalocalURL;
    //       this.file = file;
    //       this.closePopupLoadingData();
    //     },
    //     (err: ApiError) => {
    //       if (err.Message !== 'Validation Failed') {
    //         this.notificationService.showError(err.Message);
    //       }
    //       this.closePopupLoadingData();
    //     });
    // }
    downloadFile() {
        const dateTimeNow = new Date();
        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(this.file, 'application/pdf', 'KetQuaKhamSucKhoe' + dateTimeNow.getFullYear() + '.pdf');
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
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
PopupKetQuaKskKetLuanComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
PopupKetQuaKskKetLuanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-ket-qua-ksk-ket-luan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-ket-qua-ksk-ket-luan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-ket-qua-ksk-ket-luan.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PopupKetQuaKskKetLuanComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWtldC1sdWFuL3BvcHVwLWtldC1xdWEta3NrLXNoYXJlZC9wb3B1cC1rZXQtcXVhLWtzay1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PopupKetQuaKskSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupKetQuaKskSharedComponent", function() { return PopupKetQuaKskSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kham-doan-ket-luan.model */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");










let PopupKetQuaKskSharedComponent = class PopupKetQuaKskSharedComponent {
    constructor(data, dialogRef, route, router, apiService, dialog, notificationService, authService, ref) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.ketQuaKhamChuyenKhoaMat = {};
        this.ketQuaKhamChuyenKhoaNoi = {};
        this.KetQuaKhamChuyenKhoaTaiMuiHong = {};
        this.ketQuaKhamChuyenKhoaNoiRangHamMat = {};
        this.ketQuaNgoaiDaLieuSanPhuKhoa = {};
        this.itemEditKetQua = {};
        this.returnItemEditKetQua = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].KhamDoanKetLuanKhamSucKhoeDoan;
        if (this.data.JsonStringKetQua == null) {
            this.apiService.post("KhamDoan/GetDataKetQuaKhamTheoKhoa?id=" + this.data.Id + "&type=" + this.data.Type).subscribe((resData) => {
                if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaNoi) {
                    this.ketQuaKhamChuyenKhoaNoi = resData.KetQuaKhamChuyenKhoaNoiOBJ;
                }
                if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaTaiMuiHong) {
                    this.KetQuaKhamChuyenKhoaTaiMuiHong = resData.KetQuaKhamChuyenKhoaTaiMuiHongOBJ;
                }
                if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaRangHamMat) {
                    this.ketQuaKhamChuyenKhoaNoiRangHamMat = resData.KetQuaKhamChuyenKhoaNoiRangHamMatOBJ;
                }
                if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaMat) {
                    this.ketQuaKhamChuyenKhoaMat = resData.KetQuaKhamChuyenKhoaMatOBJ;
                }
                if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenSanPhuKhoa || this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenDaLieu || this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenNgoaiKhoa) {
                    this.ketQuaNgoaiDaLieuSanPhuKhoa = resData.KetQuaNgoaiDaLieuSanPhuKhoaOBJ;
                }
                if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].Dvkt) // dịch vụ kỹ thuật
                 {
                    this.ketQuaNgoaiDaLieuSanPhuKhoa = resData.KetQuaDVKTOBJ;
                }
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
        else {
            let jsonPar = JSON.parse(this.data.JsonStringKetQua);
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaNoi) {
                this.ketQuaKhamChuyenKhoaNoi = jsonPar;
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaTaiMuiHong) {
                this.KetQuaKhamChuyenKhoaTaiMuiHong = jsonPar;
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaRangHamMat) {
                this.ketQuaKhamChuyenKhoaNoiRangHamMat = jsonPar;
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaMat) {
                this.ketQuaKhamChuyenKhoaMat = jsonPar;
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenSanPhuKhoa || this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenDaLieu || this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenNgoaiKhoa) {
                this.ketQuaNgoaiDaLieuSanPhuKhoa = jsonPar;
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].Dvkt) // dịch vụ kỹ thuật
             {
                this.ketQuaNgoaiDaLieuSanPhuKhoa = jsonPar;
            }
        }
    }
    close(result) {
        if (result == 'Yes') {
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaNoi) {
                this.itemEditKetQua = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["ItemEditKetQua"]();
                this.itemEditKetQua.Id = this.data.Id;
                this.itemEditKetQua.Type = this.data.Type;
                this.itemEditKetQua.value = "Tuần hoàn: " + this.ketQuaKhamChuyenKhoaNoi.TuanHoan + " ," +
                    "Hô hấp: " + this.ketQuaKhamChuyenKhoaNoi.HoHap + " ," +
                    "Tiêu hóa: " + this.ketQuaKhamChuyenKhoaNoi.TieuHoa + " ," +
                    "Thận tiết niệu: " + this.ketQuaKhamChuyenKhoaNoi.ThanTietNieu + " ," +
                    "Nội tiết: " + this.ketQuaKhamChuyenKhoaNoi.NoiTiet + " ," +
                    "Thần kinh: " + this.ketQuaKhamChuyenKhoaNoi.ThanKinh + " ," +
                    "Cơ xương khớp: " + this.ketQuaKhamChuyenKhoaNoi.CoXuongKhop + " ," +
                    "Tâm thần: " + this.ketQuaKhamChuyenKhoaNoi.TamThan;
                this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaKhamChuyenKhoaNoi);
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaTaiMuiHong) {
                this.itemEditKetQua = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["ItemEditKetQua"]();
                this.itemEditKetQua.Id = this.data.Id;
                this.itemEditKetQua.Type = this.data.Type;
                this.itemEditKetQua.value = "Tai phải nói thường: " + this.KetQuaKhamChuyenKhoaTaiMuiHong.TaiPhaiNoiThuong + " ," +
                    "Tai phải nói thầm:" + this.KetQuaKhamChuyenKhoaTaiMuiHong.TaiPhaiNoiTham + " ," +
                    "Tai trái nói thường: " + this.KetQuaKhamChuyenKhoaTaiMuiHong.TaiTraiNoiThuong + " ," +
                    "Tai trái nói thầm: " + this.KetQuaKhamChuyenKhoaTaiMuiHong.TaiTraiNoiTham + " ," +
                    "Các bệnh tai mũi họng (nếu có): " + this.KetQuaKhamChuyenKhoaTaiMuiHong.CacBenhTaiMuiHong;
                this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.KetQuaKhamChuyenKhoaTaiMuiHong);
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaRangHamMat) {
                this.itemEditKetQua = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["ItemEditKetQua"]();
                this.itemEditKetQua.Id = this.data.Id;
                this.itemEditKetQua.Type = this.data.Type;
                this.itemEditKetQua.value = "Hàm trên: " + this.ketQuaKhamChuyenKhoaNoiRangHamMat.HamTren + " ," +
                    "Hàm dưới: " + this.ketQuaKhamChuyenKhoaNoiRangHamMat.HamDuoi + " ," +
                    "Các bệnh răng hàm mặt(nếu có): " + this.ketQuaKhamChuyenKhoaNoiRangHamMat.CacBenhRangHamMat;
                this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaKhamChuyenKhoaNoiRangHamMat);
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenKhoaMat) {
                this.itemEditKetQua = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["ItemEditKetQua"]();
                this.itemEditKetQua.Id = this.data.Id;
                this.itemEditKetQua.Type = this.data.Type;
                this.itemEditKetQua.value = "Không kính mắt phải: " + this.ketQuaKhamChuyenKhoaMat.KhongKinhMatPhai + " ," +
                    "Không kính mắt trái: " + this.ketQuaKhamChuyenKhoaMat.KhongKinhMatTrai + " ," +
                    "Có kinh mắt phải: " + this.ketQuaKhamChuyenKhoaMat.CoKinhMatPhai + " ," +
                    "Có kính mắt trái: " + this.ketQuaKhamChuyenKhoaMat.CoKinhMatTrai + " ," +
                    "Các bệnh về mắt (nếu có): " + this.ketQuaKhamChuyenKhoaMat.CacBenhVeMat;
                this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaKhamChuyenKhoaMat);
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenSanPhuKhoa || this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenDaLieu || this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenNgoaiKhoa) {
                this.itemEditKetQua = new _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["ItemEditKetQua"]();
                this.itemEditKetQua.Id = this.data.Id;
                this.itemEditKetQua.Type = this.data.Type;
                this.itemEditKetQua.value = this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenSanPhuKhoa ? "Sản phụ khoa: " + this.ketQuaNgoaiDaLieuSanPhuKhoa.value :
                    this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenDaLieu ? "Da liễu: " + this.ketQuaNgoaiDaLieuSanPhuKhoa.value :
                        this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].ChuyenNgoaiKhoa ? "Ngoại khoa: " + this.ketQuaNgoaiDaLieuSanPhuKhoa.value : "";
                this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaNgoaiDaLieuSanPhuKhoa);
            }
            if (this.data.Type == _kham_doan_ket_luan_model__WEBPACK_IMPORTED_MODULE_1__["LoaiChuyenKhoaVaDichVuKyThuat"].Dvkt) // dịch vụ kỹ thuật
             {
                this.itemEditKetQua.Id = this.data.Id;
                this.itemEditKetQua.Type = this.data.Type;
                this.itemEditKetQua.value = this.ketQuaNgoaiDaLieuSanPhuKhoa.value;
                this.itemEditKetQua.JsonValueEdit = JSON.stringify(this.ketQuaNgoaiDaLieuSanPhuKhoa);
            }
            this.dialogRef.close(this.itemEditKetQua);
        }
        else {
            this.dialogRef.close(result);
        }
    }
};
PopupKetQuaKskSharedComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], PopupKetQuaKskSharedComponent.prototype, "returnItemEditKetQua", void 0);
PopupKetQuaKskSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-popup-ket-qua-ksk-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-ket-qua-ksk-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-ket-qua-ksk-shared.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], PopupKetQuaKskSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGhvbmctdGluLWhhbmgtY2hpbmgvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi10aG9uZy10aW4taGFuaC1jaGluaFxca2hhbS1kb2FuLXRob25nLXRpbi1oYW5oLWNoaW5oLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi10aG9uZy10aW4taGFuaC1jaGluaC9raGFtLWRvYW4tdGhvbmctdGluLWhhbmgtY2hpbmguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRob25nLXRpbi1oYW5oLWNoaW5oL2toYW0tZG9hbi10aG9uZy10aW4taGFuaC1jaGluaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59IiwiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: KhamDoanThongTinHanhChinhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanThongTinHanhChinhComponent", function() { return KhamDoanThongTinHanhChinhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _kham_doan_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kham-doan.model */ "./src/app/modules/main/kham-doan/kham-doan.model.ts");





let KhamDoanThongTinHanhChinhComponent = class KhamDoanThongTinHanhChinhComponent {
    constructor(apiService, notificationService) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.thongTinHanhChinh = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_4__["KhamDoanThongTinHanhChinh"]();
    }
    ngOnInit() {
        this.getThongTinHanhChinh(this.yeuCauTiepNhanId);
    }
    getThongTinHanhChinh(yeuCauTiepNhanId) {
        this.apiService
            .get("KhamDoan/GetThongTinHanhChinh?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe((resultData) => {
            this.thongTinHanhChinh = resultData;
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
};
KhamDoanThongTinHanhChinhComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], KhamDoanThongTinHanhChinhComponent.prototype, "yeuCauTiepNhanId", void 0);
KhamDoanThongTinHanhChinhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kham-doan-thong-tin-hanh-chinh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-thong-tin-hanh-chinh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-thong-tin-hanh-chinh.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.component.scss")).default]
    })
], KhamDoanThongTinHanhChinhComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: KhamDoanThongTinHanhChinhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanThongTinHanhChinhModule", function() { return KhamDoanThongTinHanhChinhModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kham_doan_thong_tin_hanh_chinh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-thong-tin-hanh-chinh.component */ "./src/app/modules/main/kham-doan/kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.component.ts");




let KhamDoanThongTinHanhChinhModule = class KhamDoanThongTinHanhChinhModule {
};
KhamDoanThongTinHanhChinhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _kham_doan_thong_tin_hanh_chinh_component__WEBPACK_IMPORTED_MODULE_3__["KhamDoanThongTinHanhChinhComponent"]
        ],
        exports: [
            _kham_doan_thong_tin_hanh_chinh_component__WEBPACK_IMPORTED_MODULE_3__["KhamDoanThongTinHanhChinhComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], KhamDoanThongTinHanhChinhModule);



/***/ })

}]);
//# sourceMappingURL=default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-ket-luan-~fb7038b1-es2015.js.map