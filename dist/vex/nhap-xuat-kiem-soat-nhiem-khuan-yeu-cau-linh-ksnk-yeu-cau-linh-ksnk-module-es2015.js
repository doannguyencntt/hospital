(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-kiem-soat-nhiem-khuan-yeu-cau-linh-ksnk-yeu-cau-linh-ksnk-module"],{

/***/ "./node_modules/@iconify/icons-ic/sharp-edit.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/sharp-edit.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/warning.js":
/*!***************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/warning.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'KSNK',Path:''}\n            ,{Title:'Dự trù lĩnh',Path:''}\n            ,{Title:'Yêu cầu lĩnh KSNK',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [checkboxAble]=\"false\" pageSize=\"50\" urlGetData=\"YeuCauLinhKSNK/GetDataDSLinhKSNKForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKForGridAsync\" [detailTemplate]=\"detailTemplate\"\n                [allowSortDefault]=\"true\">\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,1)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachDaChoGoi\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đang chờ gởi\">\n                    </app-checkbox>\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,2)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachDangChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đang chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,3)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachTuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Từ chối duyệt\">\n                    </app-checkbox>\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,4)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachDaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n\n                    <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"searchChanges()\"\n                            placeholder=\"Nhập từ khóa(Người yêu cầu,Lĩnh từ kho,Lĩnh về kho,Người duyệt)\" />\n                    </div>\n                    <span fxFlex=\"5px\"></span>\n                    <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" class=\"mt-1 on-header\" (blur)=\"blur($event)\"\n                        [(model)]=\"timKiemTuNgay.NgayYeuCauRangDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n                        (keyup)=\"onKeyDateRange($event)\" (modelChange)=\"changRange($event)\">\n                    </app-daterangepicker>\n                    <span fxFlex=\"5px\"></span>\n                    <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" label=\"Duyệt từ ngày - đến ngày\"\n                        class=\"mt-1 on-header\" (blur)=\"blur($event)\" (keyup)=\"onKeyDateRange($event)\"\n                        [(model)]=\"timKiemTuNgay.NgayDuyetRangDate\" (modelChange)=\"changRange($event)\">\n                    </app-daterangepicker>\n                    <!-- <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button> -->\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" style=\"margin-left: auto;\" fxFlex=\"none\" class=\"mr-2\"\n                        mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                    <button (click)=\"exportExcel()\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <button [matMenuTriggerFor]=\"taoPhieuLinh\" class=\"ml-3 mr-2\" color=\"primary\" fxFlex=\"none\"\n                        mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n\n                    <mat-menu #taoPhieuLinh xPosition=\"after\" yPosition=\"below\">\n                        <button mat-menu-item\n                            (click)=\"gridChild.navigate('/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong',374,3)\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                            <span>Tạo phiếu lĩnh dự trù</span>\n                        </button>\n                        <button mat-menu-item\n                            (click)=\"gridChild.navigate('/nhap-xuat/kiem-soat-nhiem-khuan/ksnk-can-bu',375,3)\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                            <span>Tạo phiếu lĩnh bù</span>\n                        </button>\n                    </mat-menu>\n\n                </div>\n            </ng-template>\n\n            <ng-template #ngayYeuCauTemplate let-dataItem>\n                {{dataItem.NgayYeuCauHienThi}}\n            </ng-template>\n            <ng-template #ngayDuyetTemplate let-dataItem>\n                {{dataItem.NgayDuyetHienThi}}\n            </ng-template>\n            <ng-template #actionTemplate let-dataItem>\n                <div kendoTooltip>\n                    <button type=\"button\" mat-raised-button mat-button\n                        (click)=\"Xem(dataItem.Id, dataItem.LoaiPhieuLinh,dataItem.DaGui,dataItem.LoaiDuocPhamHayVatTu)\"\n                        style=\"margin: 1px;\">\n                        Xem chi tiết\n                    </button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button (click)=\"InPhieuLinh(dataItem)\"\n                        style=\"margin: 1px;\" *ngIf=\"dataItem.DuocDuyet != true\">\n                        In phiếu lĩnh\n                    </button>\n                    <button type=\"button\" color=\"warn\" mat-raised-button mat-button (click)=\"Huy(dataItem)\"\n                        style=\"margin: 2px;\" *ngIf=\"dataItem.DuocDuyet != true\">\n                        Hủy\n                    </button>\n                </div>\n            </ng-template>\n            <ng-template #TinhTrangTemplate let-dataItem>\n                <span *ngIf=\"dataItem.DuocDuyet == null\" style=\"color: orange;\">{{dataItem.TinhTrang}}</span>\n                <span *ngIf=\"dataItem.DuocDuyet == false\" style=\"color: red;\">{{dataItem.TinhTrang}}</span>\n                <span *ngIf=\"dataItem.DuocDuyet == true\" style=\"color: green;\">{{dataItem.TinhTrang}}</span>\n            </ng-template>\n            <ng-template #maTNTemplate let-dataItem>\n                <a\n                    (click)=\"Xem(dataItem.Id, dataItem.LoaiPhieuLinh,dataItem.DaGui,dataItem.LoaiDuocPhamHayVatTu)\">{{dataItem.MaPL}}</a>\n            </ng-template>\n            <ng-template #groupTemplate let-dataItem>\n                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                    [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"Huy(dataItem)\" mat-menu-item *ngIf=\"dataItem.DuocDuyet == null\">\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                        <button (click)=\"InPhieuLinh(dataItem)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n            <ng-template #detailTemplate let-dataItem>\n                <!-- 1 linh du tru null ,(true,fale)-> # null-->\n                <!-- Vật tư -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruChuaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet == null && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruDaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet != null && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n                <!-- end vật tư -->\n                <!-- Dược phẩm -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruChuaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet == null && dataItem.LoaiDuocPhamHayVatTu == true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSYeuCauLinhDuocPhamKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSYeuCauLinhDuocPhamKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruDaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet != null && dataItem.LoaiDuocPhamHayVatTu == true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSYeuCauLinhDuocPhamKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSYeuCauLinhDuocPhamKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n                <!--end Dược phẩm -->\n                <!-- end linh du tru null ,(true,fale)-> # null-->\n\n                <!-- 2 linh bu vật tu -->\n                <!-- cho duyet -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == null && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" [detailTemplate]=\"detailTemplateKSNKLinhBu\">\n                </app-grid>\n                <!-- da duyet vật tu-->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuDaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == true && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" [detailTemplate]=\"detailTemplateKSNKLinhBu\">\n                </app-grid>\n                <!-- tù chối vật tu-->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuTuChoiColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == false && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n\n\n                <!-- 2 linh bu DP-->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == null && dataItem.LoaiDuocPhamHayVatTu == true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" >\n                </app-grid>\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuDaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == true && dataItem.LoaiDuocPhamHayVatTu == true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\" >\n                </app-grid>\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuTuChoiColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet ==false && dataItem.LoaiDuocPhamHayVatTu == true\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n                <!-- 2 linh bu DP-->\n            </ng-template>\n            <!-- child linh bu -->\n            <ng-template #detailTemplateKSNKLinhBu let-dataItem>\n                <!-- vật tư -->\n                <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == null && dataItem.LoaiDuocPhamHayVatTu == false\" [gridColumns]=\"gridChildChildLinhBuColumns\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.KSNKBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhveKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n                <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == true && dataItem.LoaiDuocPhamHayVatTu == false\"\n                    [gridColumns]=\"gridChildChildLinhBuDaDuyetColumns\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhKSNK/GetDataDSYeuCauLinhKSNKChildChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSYeuCauLinhKSNKChildChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.KSNKBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhveKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n                   <!-- vật tư -->\n                <!-- dược Phẩm -->\n                <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == null && dataItem.LoaiDuocPhamHayVatTu == true\" [gridColumns]=\"gridChildChildLinhBuColumns\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhKSNK/GetDataDSDuyetLinhKSNKChildChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhKSNK/GetTotalPageFDSLinhKSNKChildChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n                <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == true && dataItem.LoaiDuocPhamHayVatTu == true\"\n                    [gridColumns]=\"gridChildChildLinhBuDaDuyetColumns\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhDuocPham/GetDataDSYeuCauLinhKSNKChildChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageFDSYeuCauLinhKSNKChildChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}-{{dataItem.LoaiDuocPhamHayVatTu}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n                <!-- dược Phẩm -->\n            </ng-template>\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                <strong>{{value}}</strong>\n            </ng-template>\n            <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                {{rowIndex + 1}}\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/in-linh-ksnk/in-linh-ksnk.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/in-linh-ksnk/in-linh-ksnk.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n    \n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div style=\"width: 100%; height: 40px; background: #005dab;color:#fff;text-align: center;font-size: 23px\"> PHIẾU LĨNH VẬT TƯ</div>\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.html":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauLinhBuKSNK.LyDoKhongDuyet}}</h4>\n    </div>\n    <!-- [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true ||\n    trangThaiVo.TrangThai == false) || yeuCauLinhBuKSNK.LaNguoiTaoPhieu == false\" -->\n    <app-combobox *ngIf=\"yeuCauLinhBuKSNK.LaNguoiTaoPhieu == false\" id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" url=\"YeuCauLinhKSNK/GetKhoLinhKSNK\" [(model)]=\"yeuCauLinhBuKSNK.KhoXuatId\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauLinhBuKSNK.KhoNhapId +'}', Take: 50}\" [reloadForGrid]=\"true\"\n        [modelText]=\"yeuCauLinhBuKSNK.TenKhoXuat\" label=\"Lĩnh từ kho\" [disabled]=\"true\" class=\"item-no-padding\"\n        (modelChange)=\"linhTuKhoChange($event)\" [bind]=\"true\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"yeuCauLinhBuKSNK.LaNguoiTaoPhieu == false\" id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" [(model)]=\"yeuCauLinhBuKSNK.KhoNhapId\" [modelText]=\"yeuCauLinhBuKSNK.TenKhoNhap\" \n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauLinhBuKSNK.KhoNhapId +'}', Take: 50}\"\n        [disabled]=\"true\" label=\"Lĩnh về kho\" (modelChange)=\"linhVeKhoChange($event)\" class=\"item-no-padding\">\n    </app-combobox>\n\n    <!-- [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\" -->\n    <app-combobox *ngIf=\"yeuCauLinhBuKSNK.LaNguoiTaoPhieu == null || yeuCauLinhBuKSNK.LaNguoiTaoPhieu == true\" [reloadForGrid]=\"true\"\n        id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" url=\"YeuCauLinhKSNK/GetKhoLinhKSNK\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauLinhBuKSNK.KhoNhapId +'}', Take: 50}\"\n        [(model)]=\"yeuCauLinhBuKSNK.KhoXuatId\" [modelText]=\"yeuCauLinhBuKSNK.TenKhoXuat\" label=\"Lĩnh từ kho\"\n        [disabled]=\"true\" class=\"item-no-padding\" (modelChange)=\"linhTuKhoChange($event)\" [bind]=\"true\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhBu\">\n    </app-combobox>\n\n    <!-- [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\" -->\n    <app-combobox *ngIf=\"yeuCauLinhBuKSNK.LaNguoiTaoPhieu == null || yeuCauLinhBuKSNK.LaNguoiTaoPhieu == true\"\n        id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" [bind]=\"true\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + linhVeKhoId +'}', Take: 50}\"\n        [(model)]=\"yeuCauLinhBuKSNK.KhoNhapId\" [modelText]=\"yeuCauLinhBuKSNK.TenKhoNhap\" [disabled]=\"true\"\n        url=\"YeuCauLinhKSNK/GetKhoCurrentUserLinhBuKSNK\" label=\"Lĩnh về kho\" (modelChange)=\"linhVeKhoChange($event)\"\n        class=\"item-no-padding\" [validationerror]=\"'KhoNhapId' | validationerror:validationErrorsLinhBu\">\n    </app-combobox>\n\n\n    <app-textbox id=\"nguoiYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) ? '13%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != null ? '13%' : '25%'\"\n        [required]=\"true\" [(model)]=\"yeuCauLinhBuKSNK.HoTenNguoiYeuCau\" maxlength=\"250\" label=\"Người yêu cầu\"\n        disabled={{true}}>\n    </app-textbox>\n    <app-datepicker id=\"ngayYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) ? '12%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != null ? '12%' : '25%'\"\n        [(model)]=\"yeuCauLinhBuKSNK.NgayYeuCau\" disabled={{true}} [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datepicker>\n\n    <app-textbox\n        *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != false && trangThaiVo.TrangThai != null\"\n        id=\"nguoiPheDuyet\" fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người phê duyệt\"\n        [(model)]=\"yeuCauLinhBuKSNK.TenNhanVienDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker\n        *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != false && trangThaiVo.TrangThai != null\"\n        id=\"ngayDuyet\" fxFlex=\"12\" fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày duyệt\"\n        [(model)]=\"yeuCauLinhBuKSNK.NgayDuyet\" disabled={{true}}>\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"nguoiPheDuyet\"\n        fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người từ chối duyệt\"\n        [(model)]=\"yeuCauLinhBuKSNK.TenNhanVienDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"ngayDuyet\"\n        fxFlex=\"12\" fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày từ chối duyệt\" [(model)]=\"yeuCauLinhBuKSNK.NgayDuyet\"\n        disabled={{true}}>\n    </app-datepicker>\n\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) || yeuCauLinhBuKSNK.LaNguoiTaoPhieu == false\"\n        [(model)]=\"yeuCauLinhBuKSNK.GhiChu\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin KSNK</h3>\n    <ng-container *ngIf=\"isCreate\">\n        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTuFormat\" #tiepnhantu\n            id=\"ThoiDiemChiDinhTuFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Từ ngày chỉ định\" class=\"on-header\">\n        </app-datetimepicker>\n        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDenFormat\" #tiepnhanden\n            id=\"ThoiDiemChiDinhDenFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"đến ngày chỉ định\"\n            class=\"on-header\">\n        </app-datetimepicker>\n        <div fxFlex=\"70%\" fxHide.sm></div>\n    </ng-container>\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\"\n        [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  && (trangThaiVo.TrangThai == null || trangThaiVo.TrangThai == true) || isCreate) ? 'block' : 'none'\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n            [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridKSNK\n            (extOnDataBound)=\"onDataBoundGrid($event)\" [urlGetData]=\"urlGetDataGrid\"\n            [showStt]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true ? true : false\"\n            [urlGetTotalPage]=\"urlGetTotalPageGrid\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n            [detailTemplate]=\"detailTemplate\" [additionalSearchString]=\"dieuKienLoadGridKSNK\">\n        </app-grid>\n       \n        <ng-template #detailTemplate let-dataItem>\n            <app-grid style=\"width: 1px;\" [gridColumns]=\"gridChildColumns\" [allowSortDefault]=\"true\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n                [pageable]=\"true\" [pageSize]=\"10\" [urlGetData]=\"urlGetDataGridChild\"\n                [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [sort]=\"sortChild\" [showStt]=\"true\"\n                [additionalSearchString]=\"phieuLinhId + ';' \n                    + dataItem.VatTuBenhVienId + ';' \n                    + dataItem.LaBHYT + ';' \n                    + isCreate + ';' \n                    + yeuCauLinhBuKSNK.KhoNhapId + ';' \n                    +(trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai) + ';' \n                    + dataItem.SoLuongTon + ';'\n                    + yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTu + ';'\n                    + yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDen + ';'\n                    + dataItem.LoaiDuocPhamHayVatTu +';'\">\n            </app-grid>\n        </ng-template>\n    </div>\n\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\"\n        [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai == false ) ? 'block' : 'none'\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n            [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridKSNKTuChoi\n            (extOnDataBound)=\"onDataBoundGrid($event)\" [urlGetData]=\"urlGetDataGrid\" [showStt]=\"true\"\n            [urlGetTotalPage]=\"urlGetTotalPageGrid\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n            [additionalSearchString]=\"dieuKienLoadGridKSNK\">\n        </app-grid>\n    </div>\n\n    <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #STTTemplateChild let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #slYeuCauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <div>\n            <span fxFlex=\"70%\">\n                {{dataItem.SoLuongTon}}\n            </span>\n            <mat-icon class=\"icon-war-status-grid\"\n                *ngIf=\"dataItem.SoLuongTon != null && yeuCauLinhBuKSNK.KhoXuatId != null && dataItem.SoLuongCanBu > dataItem.SoLuongTon\"\n                fxFlex=\"30%\" [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng tồn ít hơn số lượng bù\">\n            </mat-icon>\n        </div>\n    </ng-template>\n\n    <ng-template #slYeuCauLinhThucTeTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric\n            *ngIf=\"(trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == null) || trangThaiVo == undefined\"\n            [fxFlex]=\"dataItem.SLYeuCauLinhThucTe > 0 ? '100%' : '70%'\" [(model)]=\"dataItem.SLYeuCauLinhThucTe\"\n            [required]=\"true\" min=\"0\" label=\" \" (modelChange)=\"ganSLThucTeChange($event, dataItem.VatTuBenhVienId)\"\n            [validationerror]=\"'YeuCauKSNKBenhViens['+rowIndex+'].SLYeuCauLinhThucTe' | validationerror:validationErrorsLinhBu\">\n            <!-- [max]=\"dataItem.SLYeuCauLinhThucTeMax\"  -->\n        </app-textboxnumeric>\n        <mat-icon class=\"icon-war-status-grid\" *ngIf=\"dataItem.SLYeuCauLinhThucTe == 0\" fxFlex=\"30%\"\n            [icIcon]=\"icWarning\" kendoTooltip title=\"Sẽ không tạo lĩnh bù cho vật tư này.\">\n        </mat-icon>\n        <div *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != null\">\n            {{dataItem.SLYeuCauLinhThucTe}}\n        </div>\n    </ng-template>\n\n    <ng-template #checkBoxTemplate let-dataItem>\n        <app-checkbox id=\"vehicle1-{{dataItem.VatTuBenhVienId}}\" value=\"true\" [(model)]=\"dataItem.CheckBox\"\n            (modelChange)=\"checkBoxDichVu(dataItem, $event)\" label=\" \" class=\"pl-2\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #checkBoxHeaderTemplate let-dataItem>\n        <app-checkbox id=\"vehicle1\" name=\"vehicle1\" value=\"true\" [(model)]=\"checkAll\"\n            (modelChange)=\"checkBoxAllChange($event)\" label=\" \" class=\"pl-2\">\n        </app-checkbox>\n    </ng-template>\n    <ng-template #loaiTemplate  let-dataItem>\n        <span *ngIf=\"dataItem.LoaiDuocPhamHayVatTu == true\">Dược phẩm</span>\n        <span *ngIf=\"dataItem.LoaiDuocPhamHayVatTu == false\">Vật tư</span>\n    </ng-template> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'KSNK',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh ksnk',Path:'/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh bù ksnk</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 2\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 1\"\n                    style=\"color:blue\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-ksnk-bu-gui-lai-shared #temp *ngIf=\"trangThaiVo!=null\"\n                    [isCreate]=\"trangThaiVo.TrangThai==null\" (hideDuyetbtn)=\"anHienButtonDuyet($event)\"\n                    (disabledNguoiTaoPhieu)=\"disableNguoiTaoPhieu($event)\" [validationErrorsLinhBu]=\"validationErrors\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-phieu-linh-ksnk-bu-gui-lai-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" *ngIf=\"isDisabledNguoiTaoPhieu\" [disabled]=\"!isHideDuyet\"\n                        color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" (click)=\"cancel()\" title=\"Phím tắt: Esc\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n\n                    <button type=\"button\" *ngIf=\"isDisabledNguoiTaoPhieu && !loading && trangThaiVo != undefined && trangThaiVo != null \n                        && (trangThaiVo.TrangThai != true && trangThaiVo.TrangThai != false) \"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuPhieuLinhBuKSNK(false)\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu tạm</button>\n\n                    <button type=\"button\" *ngIf=\"isDisabledNguoiTaoPhieu && !loading && trangThaiVo != undefined && trangThaiVo != null \n                    && (trangThaiVo.TrangThai != true && trangThaiVo.TrangThai != false) \" [disabled]=\"!isHideDuyet\"\n                        (click)=\"luuPhieuLinhBuKSNK(true)\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Gửi</button>\n\n                    <!-- <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null \n                            && (trangThaiVo.TrangThai != null && trangThaiVo.TrangThai != true && trangThaiVo.TrangThai != false) \"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuVaGuiDuyetLai()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Lưu & Gửi duyệt lại</button> -->\n\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.html":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'KSNK',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh KSNK',Path:'/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh dự trù KSNK</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 2\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 1\"\n                    style=\"color:blue\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-ksnk-thuong-shared #temp *ngIf=\"trangThaiVo!=null\"  (loaiDuocPhamHayVatTu)=\"loaiDuocPhamHayVatTu($event)\"\n                    [validationErrorsLinhThuong]=\"validationErrors\" [isCreate]=\"trangThaiVo.TrangThai==null\"\n                    (disabledNguoiTaoPhieu)=\"disableNguoiTaoPhieu($event)\" (hideDuyetbtn)=\"anHienButtonDuyet($event)\"\n                    [trangThaiVo]=\"trangThaiVo\">\n\n                </app-phieu-linh-ksnk-thuong-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" *ngIf=\"isDisabledNguoiTaoPhieu\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" (click)=\"cancel()\" title=\"Phím tắt: Esc\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != true && isDisabledNguoiTaoPhieu\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuPhieuLinhThuong()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Lưu tạm</button>\n                    <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != true && isDisabledNguoiTaoPhieu\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"guiPhieuLinhThuong()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Gửi</button>\n                    <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == false  && isDisabledNguoiTaoPhieu\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuVaGuiDuyetLai()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Lưu & Gửi duyệt lại</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.html":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU LĨNH KSNK</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In lĩnh vật tư\" type=\"PDF\" [bodyComponent]=\"this\" *ngIf=\"showNutIn\"> \n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauLinhKSNK.LyDoKhongDuyet}}</h4>\n    </div>\n\n    \n\n    <app-combobox *ngIf=\"yeuCauLinhKSNK.LaNguoiTaoPhieu == false\" id=\"linhVeKho\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n        [required]=\"true\" url=\"YeuCauLinhKSNK/GetKhoCurrentUserKSNK\" [(model)]=\"yeuCauLinhKSNK.KhoNhapId\"\n        [modelText]=\"yeuCauLinhKSNK.TenKhoNhap\" label=\"Lĩnh về kho\" class=\"item-no-padding\"\n        (modelChange)=\"clearGridKSNK()\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\">\n    </app-combobox>\n   \n    <app-combobox *ngIf=\"yeuCauLinhKSNK.LaNguoiTaoPhieu == null || yeuCauLinhKSNK.LaNguoiTaoPhieu == true\"\n        id=\"linhVeKho\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [required]=\"true\" url=\"YeuCauLinhKSNK/GetKhoCurrentUserKSNK\"\n        [(model)]=\"yeuCauLinhKSNK.KhoNhapId\" [modelText]=\"yeuCauLinhKSNK.TenKhoNhap\" label=\"Lĩnh về kho\"\n        class=\"item-no-padding\" (modelChange)=\"clearGridKSNK()\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrorsLinhThuong\">\n    </app-combobox>\n\n    <app-textbox id=\"nguoiYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)   ? '13%' : '15%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)? '13%' : '15%'\"\n        maxlength=\"250\" label=\"Người yêu cầu\" disabled={{true}} [required]=\"true\"\n        [(model)]=\"yeuCauLinhKSNK.HoTenNguoiYeuCau\">\n    </app-textbox>\n\n    <app-datepicker id=\"ngayYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)  ? '12%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)? '12%' : '25%'\"\n        [(model)]=\"yeuCauLinhKSNK.NgayYeuCau\" disabled={{true}} [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == true\" id=\"nguoiPheDuyet\"\n        fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người phê duyệt\" [(model)]=\"yeuCauLinhKSNK.HoTenNguoiDuyet\"\n        disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == true\" id=\"ngayDuyet\" fxFlex=\"12\"\n        fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày duyệt\" [(model)]=\"yeuCauLinhKSNK.NgayDuyet\" disabled={{true}}>\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"nguoiTuChoiDuyet\"\n        fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người từ chối duyệt\"\n        [(model)]=\"yeuCauLinhKSNK.HoTenNguoiDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"ngayTuChoiDuyet\"\n        fxFlex=\"12\" fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày từ chối duyệt\" [(model)]=\"yeuCauLinhKSNK.NgayDuyet\"\n        disabled={{true}}>\n    </app-datepicker>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"45%\" fxFlex.sm=\"45%\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhKSNK.LaNguoiTaoPhieu == false\"\n        [(model)]=\"yeuCauLinhKSNK.GhiChu\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin KSNK</h3>\n\n    <ng-container *ngIf=\"yeuCauLinhKSNK.LaNguoiTaoPhieu == true || yeuCauLinhKSNK.LaNguoiTaoPhieu == null\">\n        <app-combobox \n            id=\"linhTuKho\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [required]=\"true\" url=\"YeuCauLinhKSNK/GetKhoLinhKSNK\"\n            [disabled]=\"disableKhiVaoChiTiet == true\"\n            [(model)]=\"yeuCauLinhKSNK.KhoXuatId\" [modelText]=\"yeuCauLinhKSNK.TenKhoXuat\" label=\"Lĩnh từ kho\"\n             class=\"item-no-padding\"  [queryInfo]=\"{ParameterDependencies:'{KhoLinhVeId:' +yeuCauLinhKSNK.KhoNhapId +'}', Take: 50}\"\n            [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhThuong\"\n            >\n        </app-combobox>\n        <app-radio id=\"loai\" label=\"Loại\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"KSNKGrid.LoaiVatTu\"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhKSNK.KhoXuatId == null || yeuCauLinhKSNK.KhoNhapId == null\"\n            (modelChange)=\"huy()\" [items]=\"[{Value:1,Text:'Không BHYT'},{Value:2,Text:'BHYT'}]\">\n        </app-radio>\n\n        <app-combobox id=\"KSNK\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\" url=\"YeuCauLinhKSNK/GetKSNKTheoKho\"\n            [(model)]=\"KSNKGrid.VatTuBenhVienId\"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhKSNK.KhoXuatId == null || yeuCauLinhKSNK.KhoNhapId == null\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoId:' +yeuCauLinhKSNK.KhoXuatId +', LaKSNKBHYT: '+KSNKGrid.LoaiVatTu+', LoaiDuocPhamHayVatTu: '+loai+'}', Take: 50}\"\n            (selectionChange)=\"chonKSNK($event)\" [template]=\"KSNKTemplate\" [templateHeader]=\"KSNKTemplateHeader\"\n            label=\"Dược phẩm/VT/KSNK\" class=\"item-no-padding\" [popupSettings]=\"{width: 800,popupClass:'item-no-padding'}\"\n            (keyup)=\"onKey($event)\" (openCombobox)=\"openCombobox($event)\"\n            [validationerror]=\"'VatTuBenhVienId' | validationerror:validationErrors\">\n            <ng-template #KSNKTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th width=\"40%\">Tên</th>\n                        <th width=\"10%\">ĐVT</th>\n                        <th width=\"15%\">SL Tồn</th>\n                        <th width=\"15%\">HSD</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #KSNKTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td width=\"40%\">{{dataItem.Ten}}</td>\n                        <td width=\"10%\">{{dataItem.DVT}}</td>\n                        <td width=\"15%\">{{dataItem.SLTonFormat}}</td>\n                        <td width=\"15%\">{{dataItem.HanSuDung}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n\n\n        <app-textboxnumeric fxFlex=\"5\" id=\"slTon\" label=\"SL tồn\" disabled={{true}} [(model)]=\"KSNKGrid.SLTon\">\n        </app-textboxnumeric>\n        <app-textboxnumeric fxFlex=\"10\" id=\"slYeuCau\" label=\"SL yêu cầu\" [required]=\"true\" max=\"999999999\" min=\"1\"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhKSNK.KhoXuatId == null || yeuCauLinhKSNK.KhoNhapId == null\"\n            (keyup)=\"onKey($event)\" [(model)]=\"KSNKGrid.SLYeuCau\"\n            [validationerror]=\"'SLYeuCau' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <app-textbox id=\"dvt\" fxFlex=\"5\" fxFlex.sm=\"10\" maxlength=\"1000\" label=\"ĐVT\" [(model)]=\"KSNKGrid.DVT\"\n            disabled={{true}}>\n        </app-textbox>\n        <app-textbox id=\"hangSanXuat\" fxFlex=\"15\" fxFlex.sm=\"15\" maxlength=\"1000\" label=\"Hãng SX\"\n            [(model)]=\"KSNKGrid.NhaSX\" disabled={{true}}>\n        </app-textbox>\n        <app-textbox id=\"nuocSanXuat\" fxFlex=\"10\" fxFlex.sm=\"10\" maxlength=\"1000\" label=\"Nước SX\"\n            [(model)]=\"KSNKGrid.NuocSX\" disabled={{true}}>\n        </app-textbox>\n\n        <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n            <div\n                [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  && (trangThaiVo.TrangThai == null || trangThaiVo.TrangThai == false) || isCreate) ? 'block' : 'none'\">\n                <button type=\"button\"\n                    [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhKSNK.KhoXuatId == null || yeuCauLinhKSNK.KhoNhapId == null\"\n                    color=\"primary\" (click)=\"huy()\" mat-stroked-button mat-button class=\"mr-1\">Hủy</button>\n            </div>\n            <button\n                [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhKSNK.KhoXuatId == null || yeuCauLinhKSNK.KhoNhapId == null\"\n                type=\"button\" color=\"primary\" (click)=\"themKSNK()\" mat-raised-button mat-button>Thêm</button>\n        </div>\n    </ng-container>\n\n\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\" #gridKSNK\n        [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\">\n    </app-grid>\n\n    <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #actionTemplate let-dataItem>\n        <div class=\"text-center\" kendoTooltip>\n            <button color=\"primary\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhKSNK.LaNguoiTaoPhieu == false\"\n                (click)=\"xoaKSNK(dataItem)\">\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #slYeuCauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric fxFlex=\"80%\" [(model)]=\"dataItem.SLYeuCau\" [required]=\"true\" class=\"no-label\" min=\"1\"\n            [max]=\"999999999\" label=\" \"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhKSNK.LaNguoiTaoPhieu == false\"\n            [validationerror]=\"'YeuCauLinhVatTuChiTiets['+rowIndex+'].SoLuong' | validationerror:validationErrorsLinhThuong\">\n        </app-textboxnumeric>\n        <!-- <mat-icon class=\"icon-war-status-grid\"\n            *ngIf=\"dataItem.SoLuongCoTheXuat != null && dataItem.SLYeuCau > dataItem.SoLuongCoTheXuat\" fxFlex=\"20%\"\n            [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng tồn không đủ\">\n        </mat-icon> -->\n        <mat-icon class=\"icon-war-status-grid\"\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == null && (dataItem.SLTon != null && dataItem.SLYeuCau > dataItem.SLTon)\"\n            fxFlex=\"20%\" [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng tồn không đủ\">\n        </mat-icon>\n        <mat-icon class=\"icon-war-status-grid\"\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == false && (dataItem.SoLuongCoTheXuat != null && dataItem.SLYeuCau > dataItem.SoLuongCoTheXuat)\"\n            fxFlex=\"20%\" [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng có thể xuất không đủ\">\n        </mat-icon>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component.html":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component.html ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div style=\"text-align: center;\">Xác Nhận</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div> -->\n\n<mat-dialog-content style=\"overflow: hidden\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\"style=\"text-align: center;font-size: 20px\"><b>Xác Nhận</b></div>\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"text-align: center;font-size: 15px;padding-bottom: 10px;\">Có các vật tư không đủ tồn</div>\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [checkboxAble]=\"false\"\n            [gridDataSource]=\"gridDataSource\"  [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n            [pageable]=\"false\">\n        </app-grid>\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"font-size: 15px;padding-top: 10px;\">Nếu đồng ý gửi thì sẻ không tạo được những vật tư\n            phẩm này<br>\n            Bạn có muốn tiếp tục gửi không?</div>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button mat-button mat-dialog-close (click)=\"Khong('No')\">Không</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"Co('Yes')\" [mat-dialog-close]=\"true\"\n        cdkFocusInitial>Có</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'KSNK',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh KSNK',Path:'/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk'}\n                ,{Title:'KSNK cần bù',Path:'/nhap-xuat/kiem-soat-nhiem-khuan/ksnk-can-bu',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu lĩnh bù KSNK</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-ksnk-bu-gui-lai-shared [isCreate]=\"!isCreate\"\n                    [validationErrorsLinhBu]=\"validationErrors\">\n                </app-phieu-linh-ksnk-bu-gui-lai-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"XemPhieuLinh()\" color=\"primary\"\n                        class=\"mr-1 align-right-fx\" mat-raised-button><i class=\"ft-save\"></i> Xem phiếu lĩnh</button>\n                    <button type=\"button\" (click)=\"cancel()\" title=\"Phím tắt: Esc\" mat-button><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"luuPhieuLinhKSNK(false)\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Lưu tạm</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"luuPhieuLinhKSNK(true)\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Gửi</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'KSNk',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh KSNK',Path:'/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu lĩnh dự trù KSNK</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\" *ngIf=\"isCreate\">Đang chờ duyệt</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-ksnk-thuong-shared [validationErrorsLinhThuong]=\"validationErrors\" [isCreate]=\"true\"\n                    [trangThaiVo]=\"trangThaiVo\">\n\n                </app-phieu-linh-ksnk-thuong-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" title=\"Phím tắt: Esc\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"luuPhieuLinhThuongKSNK()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Lưu tạm</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"guiPhieuLinhThuongKSNK()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Gửi</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL3lldS1jYXUtbGluaC1rc25rL2Rhbmgtc2FjaC15ZXUtY2F1LWxpbmgta3Nuay9kYW5oLXNhY2gteWV1LWNhdS1saW5oLWtzbmsuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: DanhSachYeuCauLinhKSNKComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachYeuCauLinhKSNKComponent", function() { return DanhSachYeuCauLinhKSNKComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/enum/linh-vat-tu-thuoc.enum */ "./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.ts");





























let DanhSachYeuCauLinhKSNKComponent = class DanhSachYeuCauLinhKSNKComponent {
    constructor(dialog, router, apiService, authService, notificationService, cd, route, location) {
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.route = route;
        this.location = location;
        this.inPhieuLinhThuong = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["PhieuLinhKSNKThuongs"]();
        this.gridColumns = [];
        this.gridChildLinhDuTruChuaDuyetColumns = [];
        this.gridChildLinhDuTruDaDuyetColumns = [];
        this.gridChildLinhDuTruDPChuaDuyetColumns = [];
        this.gridChildLinhDuTruDPDaDuyetColumns = [];
        this.gridChildLinhBuColumns = [];
        this.gridChildLinhBuDaDuyetColumns = [];
        this.gridChildChildLinhBuColumns = [];
        this.gridChildLinhBuTuChoiColumns = [];
        this.gridChildChildLinhBuDaDuyetColumns = [];
        this.gridChildLinhBenhNhanColumns = [];
        this.gridChildChildLinhBenhNhanColumns = [];
        this.gridChildChildLinhBenhNhanDaDuyetColumns = [];
        this.gridChildChildLinhBenhNhanTuChoiColumns = [];
        // searchInfo: searchLoaiCauHinh;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.urlGetData = "";
        this.urlGetTotalPage = "";
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.popupLoadingDataDaDuyet = null;
        this.validationErrors = [];
        this.timKiemTuNgay = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["SearchNgay"]();
        this.kiemTraDanhSachDangChoDuyet = true;
        this.kiemTraDanhSachTuChoiDuyet = false;
        this.kiemTraDanhSachDaDuyet = false;
        this.kiemTraDanhSachDaChoGoi = true;
        this.trangThaiCheck = 0;
        this.exportQueryInfoQueryInfo = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["ExportQueryInfoQueryInfo"]();
        this.stringAdditionalSearchString = "";
        this.holdQuery = null;
        this.baseRoute = "/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk";
        this.groupsYCTN = [{ field: 'MaYeuCauTiepNhan' }];
        this.groups = [{ field: 'TenKhoLinh' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhSachYeuCauLinhKSNK;
        this.gridChild.sort = [{
                field: 'DuocDuyet',
                dir: 'asc'
            }];
        this.route
            .queryParams
            .subscribe(v => {
            this.trangThai = v;
        });
        this.linhKSNKGridVo = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["LinhKSNKGridVo"]();
        this.gridColumns = [
            { Field: "MaPL", Title: "Mã PL", Width: 90, Sortable: true, Template: this.PLTemplate },
            { Field: "Loai", Title: "Loại", MinWidth: 120, Sortable: true },
            { Field: "LinhTuKho", Title: "Lĩnh từ kho", Width: 200, Sortable: true },
            { Field: "LinhVeKho", Title: "Lĩnh về kho", Width: 200, Sortable: true },
            { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
            { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: false, Template: this.TinhTrangTemplate },
            { Field: "Nguoiduyet", Title: "Người duyệt", Width: 150, Sortable: true },
            { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
            { Field: "Action", Title: "", Width: 50, Sortable: true, Template: this.groupTemplate },
        ];
        this.gridChildLinhBuColumns = [
            { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
            { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
            { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
            { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
            { Field: "SoLuongCanBu", Title: "SL yêu cầu", Width: 100 },
        ];
        this.gridChildLinhBuTuChoiColumns = [
            { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
            //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
            { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
            { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
            { Field: "SoLuongCanBu", Title: "SL yêu cầu", Width: 100 },
        ];
        this.gridChildLinhBuDaDuyetColumns = [
            { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
            { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
            { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
            { Field: "SoLuongYeuCauDaDuyet", Title: "SL được duyệt", Width: 100 },
        ];
        this.gridChildChildLinhBuColumns = [
            { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
            { Field: "MaTN", Title: "Mã tiếp nhận", Width: 120, Sortable: true },
            { Field: "MaBN", Title: "Mã người bệnh", Width: 120 },
            { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
            { Field: "DVKham", Title: "Dịch vụ khám", Width: 200, Sortable: true },
            { Field: "BSKeToa", Title: "Bác sỹ kê vật tư", Width: 120, Sortable: true },
            { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120, Sortable: true },
            { Field: "NgayKe", Title: "Ngày kê", Width: 120, Sortable: true },
            { Field: "SL", Title: "Số lượng cần bù", Width: 120, Sortable: true }
        ];
        this.gridChildChildLinhBuDaDuyetColumns = [
            { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
            { Field: "MaTN", Title: "Mã tiếp nhận", Width: 120, Sortable: true },
            { Field: "MaBN", Title: "Mã bệnh nhân", Width: 120 },
            { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
            { Field: "DVKham", Title: "Dịch vụ khám", Width: 200, Sortable: true },
            { Field: "BSKeToa", Title: "Bs kê vật tư", Width: 120, Sortable: true },
            { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120, Sortable: true },
            { Field: "NgayKe", Title: "Ngày kê", Width: 120, Sortable: true },
            { Field: "SLCanBu", Title: "SL cần bù", Width: 60 },
            { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
            { Field: "SL", Title: "SL được duyệt", Width: 120, Sortable: true }
        ];
        //------------------------------lĩnh dự trù-------------------------------------------------------------------------
        this.gridChildLinhDuTruChuaDuyetColumns = [
            { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
            { Field: "TenKhoLinh", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Nhom", Title: "Loại", Width: 80, ShowTooltip: true },
            { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 120, Sortable: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
            { Field: "SLTon", Title: "SL tồn", Width: 120 },
            { Field: "SoLuongYc", Title: "Số lượng yêu cầu", Width: 120 }
        ];
        this.gridChildLinhDuTruDaDuyetColumns = [
            { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
            { Field: "TenKhoLinh", Title: "", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Nhom", Title: "Loại", Width: 80, ShowTooltip: true },
            { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 120, Sortable: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
            // { Field: "SLTon", Title: "SL tồn", Width: 120 },
            { Field: "SoLuongYc", Title: "Số lượng yêu cầu", Width: 120 }
        ];
        //--------------------------end lĩnh dự trù--------------------------------------------------------------------------------
        //-------------------------- lĩnh TT--------------------------------------------------------------------------------
        this.gridChildLinhBenhNhanColumns = [
            { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120, Sortable: true },
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 120, Sortable: true },
            { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
            { Field: "SoLuong", Title: "SL", Width: 80, Sortable: true }
        ];
        this.gridChildChildLinhBenhNhanColumns = [
            { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, Sortable: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
            { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
            { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
            { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120, Sortable: true },
            { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
            { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
            { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
        ];
        this.gridChildChildLinhBenhNhanDaDuyetColumns = [
            { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
            { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
            { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
            { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120, Sortable: true },
            { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
            //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
            { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
        ];
        this.gridChildChildLinhBenhNhanTuChoiColumns = [
            { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
            //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
            { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true },
            { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
            { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
            { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120, Sortable: true },
            { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
        ];
        //--------------------------end  lĩnh TT--------------------------------------------------------------------------------
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].getItem('additionalSearchStringYCLVT') != null) {
            this.TimKiemId();
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].setItem('additionalSearchStringYCLVT', null);
            let NgayDuyetRangDateStartDate = null;
            let NgayDuyetRangDateEndDate = null;
            let NgayYeuCauRangDateStartDate = null;
            let NgayYeuCauRangDateEndDate = null;
            let Searching = null;
            let queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
                + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoGoi\":" + this.linhKSNKGridVo.DangChoGoi + ",\"DangChoDuyet\":" + this.linhKSNKGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhKSNKGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhKSNKGridVo.DaDuyet + " }";
            this.gridChild.additionalSearchString = queryString;
        }
    }
    TimKiemId() {
        var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].getItem("additionalSearchStringYCLVT");
        let KiemTraLoCalAdditonalExit;
        if (searching != null || searching != undefined || searching != "") {
            KiemTraLoCalAdditonalExit = JSON.parse(searching);
        }
        if (searching == null || searching == undefined || searching == "") {
            let NgayDuyetRangDateStartDate = null;
            let NgayDuyetRangDateEndDate = null;
            let NgayYeuCauRangDateStartDate = null;
            let NgayYeuCauRangDateEndDate = null;
            let Searching = null;
            let queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
                + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoGoi\":" + this.linhKSNKGridVo.DangChoGoi + ",\"DangChoDuyet\":" + this.linhKSNKGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhKSNKGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhKSNKGridVo.DaDuyet + " }";
            this.gridChild.additionalSearchString = queryString;
        }
        else {
            if (KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartDate != null) {
                this.timKiemTuNgay.NgayYeuCauRangDate.startDate = new Date(KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartDate);
            }
            else {
                this.timKiemTuNgay.NgayYeuCauRangDate.startDate = null;
            }
            if (KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartEnd != null) {
                this.timKiemTuNgay.NgayYeuCauRangDate.endDate = new Date(KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartEnd);
            }
            else {
                this.timKiemTuNgay.NgayYeuCauRangDate.endDate = null;
            }
            if (KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartDate != null) {
                this.timKiemTuNgay.NgayDuyetRangDate.startDate = new Date(KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartDate);
            }
            else {
                this.timKiemTuNgay.NgayDuyetRangDate.startDate = null;
            }
            if (KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartEnd != null) {
                this.timKiemTuNgay.NgayDuyetRangDate.endDate = new Date(KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartEnd);
            }
            else {
                this.timKiemTuNgay.NgayDuyetRangDate.endDate = null;
            }
            if (KiemTraLoCalAdditonalExit.Searching != null) {
                this.searchString = KiemTraLoCalAdditonalExit.Searching;
            }
            else {
                this.searchString = "";
            }
            this.kiemTraDanhSachDaChoGoi = KiemTraLoCalAdditonalExit.DangChoGoi;
            this.kiemTraDanhSachDangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
            this.kiemTraDanhSachTuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
            this.kiemTraDanhSachDaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
            this.linhKSNKGridVo.DangChoGoi = KiemTraLoCalAdditonalExit.DangChoGoi;
            this.linhKSNKGridVo.DangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
            this.linhKSNKGridVo.TuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
            this.linhKSNKGridVo.DaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
            this.gridChild.additionalSearchString = searching;
        }
    }
    blur($event) {
        this.TimkiemNangCao();
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.TimkiemNangCao();
        }
        if (event.key == "Backspace") {
            this.TimkiemNangCao();
        }
    }
    onKeyDateRange(event) {
        if (event.key == 'Enter') {
            this.TimkiemNangCao();
        }
    }
    changRange(event) {
        this.TimkiemNangCao();
    }
    searchChanges() {
        if (this.searchString == null || this.searchString == "") {
            if (this.holdQuery != null) {
                this.TimkiemNangCao();
            }
        }
    }
    TimkiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.timKiemTuNgay.NgayYeuCauRangDate.startDate != null) {
            this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
        }
        else {
            this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = null;
        }
        if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
            this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
        }
        else {
            this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = null;
        }
        if (this.timKiemTuNgay.NgayDuyetRangDate.startDate != null) {
            this.linhKSNKGridVo.NgayDuyetRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.startDate, "mm/dd/yyyy");
        }
        else {
            this.linhKSNKGridVo.NgayDuyetRangDateStartDate = null;
        }
        if (this.timKiemTuNgay.NgayDuyetRangDate.endDate != null) {
            this.linhKSNKGridVo.NgayDuyetRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.endDate, "mm/dd/yyyy");
        }
        else {
            this.linhKSNKGridVo.NgayDuyetRangDateStartEnd = null;
        }
        if (this.timKiemTuNgay.TrangThaiCheck != null) {
            this.linhKSNKGridVo.TrangThaiCheck = this.timKiemTuNgay.TrangThaiCheck;
        }
        if (this.searchString != null || this.searchString != undefined) {
            this.linhKSNKGridVo.Searching = this.searchString;
        }
        else {
            this.linhKSNKGridVo.Searching = null;
        }
        let queryStringSearch = JSON.stringify(this.linhKSNKGridVo);
        this.stringAdditionalSearchString = queryStringSearch;
        this.gridChild._additionalSearchString = queryStringSearch;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].setItem("additionalSearchStringYCLVT", queryStringSearch);
        this.gridChild.search();
    }
    checkTrangThaiDCT(event, type) {
        this.cd.detectChanges();
        if (type == 1) {
            this.linhKSNKGridVo.DangChoGoi = event;
        }
        if (type == 2) {
            this.linhKSNKGridVo.DangChoDuyet = event;
        }
        if (type == 3) {
            this.linhKSNKGridVo.TuChoiDuyet = event;
        }
        if (type == 4) {
            if (event == true) {
                this.linhKSNKGridVo.DaDuyet = event;
            }
            else {
                this.linhKSNKGridVo.DaDuyet = null;
            }
        }
        this.TimkiemNangCao();
    }
    loadingPageDaDuyet() {
        this.popupLoadingDataDaDuyet = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingDataDaDuyet() {
        if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
            this.popupLoadingDataDaDuyet.close();
        }
    }
    /// in 
    InPhieuLinh(data) {
        var self = this;
        if (data.LoaiPhieuLinh == 1 || data.LoaiPhieuLinh == 2) { //lĩnh dự trù(dự trù) hoặc lĩnh bù
            self.loadingPageDaDuyet();
            self.inPhieuLinhThuong.HostingName = window.location.protocol + "//" + window.location.host;
            self.inPhieuLinhThuong.Header = true;
            self.inPhieuLinhThuong.YeuCauLinhVatTuIds = [];
            let newPhieuVo = {
                YeuCauLinhVatTuId: data.Id,
                LoaiDuocPhamHayVatTu: data.LoaiDuocPhamHayVatTu
            };
            self.inPhieuLinhThuong.YeuCauLinhVatTuIds.push(newPhieuVo);
            self.inPhieuLinhThuong.LoaiPhieuLinh = data.LoaiPhieuLinh;
            self.inPhieuLinhThuong.TrangThai = data.DuocDuyet;
            if (data.LoaiPhieuLinh == 1) {
                self.apiService.post("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuong).subscribe(resData => {
                    if (resData != undefined && resData != null) {
                        self.closePopupLoadingDataDaDuyet();
                        self.inPhieuLinhThuong.Header = false;
                        self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_28__["PhieuLinhKSNKThuongPopupComponent"], {
                            disableClose: false,
                            width: '1200px',
                            data: { Model: resData },
                        });
                    }
                }, (err) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    self.closePopupLoadingDataDaDuyet();
                });
            }
            if (data.LoaiPhieuLinh == 2) {
                self.apiService.post("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhThuong).subscribe(resData => {
                    if (resData != undefined && resData != null) {
                        self.closePopupLoadingDataDaDuyet();
                        self.inPhieuLinhThuong.Header = false;
                        self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_28__["PhieuLinhKSNKThuongPopupComponent"], {
                            disableClose: false,
                            width: '1200px',
                            data: { Model: resData },
                        });
                    }
                }, (err) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    self.closePopupLoadingDataDaDuyet();
                });
            }
        }
    }
    Huy(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_26__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xóa phiếu lĩnh này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    let data = {
                        YeuCauLinhId: dataItem.Id,
                        LoaiDuocPhamHayVatTu: dataItem.LoaiDuocPhamHayVatTu
                    };
                    if (data.LoaiDuocPhamHayVatTu == true) {
                        this.apiService.post("YeuCauLinhDuocPham/HuyItemYeuCauLinhThuoc?id=" + dataItem.Id).subscribe(resultData => {
                            this.notificationService.showSuccess("Xóa thành công");
                            this.TimkiemNangCao();
                        }, (err) => {
                            this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                this.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else {
                        this.apiService.post("YeuCauLinhKSNK/HuyItemYeuCauLinhThuoc?id=" + dataItem.Id).subscribe(resultData => {
                            this.notificationService.showSuccess("Xóa thành công");
                            this.TimkiemNangCao();
                        }, (err) => {
                            this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                this.notificationService.showError(err.Message);
                            }
                        });
                    }
                }
            });
        }
        ;
    }
    Xem(id, loaiPhieuLinh, daGui, loai) {
        switch (loaiPhieuLinh) {
            case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_21__["EnumLoaiPhieuLinh"].LinhDuTru:
                if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhThuongKSNK, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Update)) {
                    this.router.navigate(["/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/gui-lai-phieu-linh-ksnk-thuong/" + id + "/" + loai + "/" + true], { queryParams: { holdQuery: this.trangThaiCheck } });
                    break;
                }
                else {
                    this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__["SystemMessage"].UnAuthorizedMessage);
                }
            case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_21__["EnumLoaiPhieuLinh"].LinhBu:
                if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhBuKSNK, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Update)) {
                    this.router.navigate(["/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/gui-lai-phieu-linh-ksnk-bu/" + id + "/" + loai], { queryParams: { holdQuery: this.trangThaiCheck } });
                    break;
                }
                else {
                    this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__["SystemMessage"].UnAuthorizedMessage);
                }
        }
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        self.exportQueryInfoQueryInfo.Sort = this.gridChild.sort.map(item => {
            return new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_27__["Sort"](item.field, item.dir);
        });
        self.exportQueryInfoQueryInfo.AdditionalSearchString = this.stringAdditionalSearchString;
        // if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
        self.apiService.postExportExcel('YeuCauLinhKSNK/ExportDanhSachLinhKSNK', self.exportQueryInfoQueryInfo).subscribe(resultData => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DanhSachYeuCauLinhKSNK' + dateTimeNow.getFullYear() + '.xlsx');
        }, (err) => {
            self.notificationService.showError(err.Message);
        });
        // } else {
        //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        // }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    clearSearch() { }
};
DanhSachYeuCauLinhKSNKComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_24__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], DanhSachYeuCauLinhKSNKComponent.prototype, "maTNTemplateactionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangTemplate', { static: true })
], DanhSachYeuCauLinhKSNKComponent.prototype, "TinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupTemplate', { static: true })
], DanhSachYeuCauLinhKSNKComponent.prototype, "groupTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], DanhSachYeuCauLinhKSNKComponent.prototype, "PLTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DanhSachYeuCauLinhKSNKComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], DanhSachYeuCauLinhKSNKComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
], DanhSachYeuCauLinhKSNKComponent.prototype, "ngayYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], DanhSachYeuCauLinhKSNKComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
], DanhSachYeuCauLinhKSNKComponent.prototype, "gridChild", void 0);
DanhSachYeuCauLinhKSNKComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-yeu-cau-linh-ksnk',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-yeu-cau-linh-ksnk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-yeu-cau-linh-ksnk.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.scss")).default]
    })
], DanhSachYeuCauLinhKSNKComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/in-linh-ksnk/in-linh-ksnk.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/in-linh-ksnk/in-linh-ksnk.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvaW4tbGluaC1rc25rL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxraWVtLXNvYXQtbmhpZW0ta2h1YW5cXHlldS1jYXUtbGluaC1rc25rXFxpbi1saW5oLWtzbmtcXGluLWxpbmgta3Nuay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvaW4tbGluaC1rc25rL2luLWxpbmgta3Nuay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi95ZXUtY2F1LWxpbmgta3Nuay9pbi1saW5oLWtzbmsvaW4tbGluaC1rc25rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/in-linh-ksnk/in-linh-ksnk.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/in-linh-ksnk/in-linh-ksnk.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: InLinhKSNKComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InLinhKSNKComponent", function() { return InLinhKSNKComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let InLinhKSNKComponent = class InLinhKSNKComponent {
    constructor(data, sanitizer, dialog) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.src = '';
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.loaiPhieuLinh = "";
        this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
    }
    ngOnInit() {
        this.modelPrint = this.data.Model;
        this.loaiPhieuLinh = this.data.LoaiPhieuLinh;
    }
    getSharedPrintForm() {
        return new Promise(resolve => {
            resolve(this.modelPrint);
        });
    }
    close() {
        this.dialog.closeAll();
    }
};
InLinhKSNKComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
InLinhKSNKComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-in-linh-ksnk',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-linh-ksnk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/in-linh-ksnk/in-linh-ksnk.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-linh-ksnk.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/in-linh-ksnk/in-linh-ksnk.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InLinhKSNKComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.scss ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-war-status-grid {\n  color: orange;\n  width: auto;\n  height: 15px;\n  margin-top: 15px;\n}\n\nsvg {\n  height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLWJ1LWd1aS1sYWktc2hhcmVkL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxraWVtLXNvYXQtbmhpZW0ta2h1YW5cXHlldS1jYXUtbGluaC1rc25rXFxwaGlldS1saW5oLWtzbmstYnUtZ3VpLWxhaS1zaGFyZWRcXHBoaWV1LWxpbmgta3Nuay1idS1ndWktbGFpLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLWJ1LWd1aS1sYWktc2hhcmVkL3BoaWV1LWxpbmgta3Nuay1idS1ndWktbGFpLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi95ZXUtY2F1LWxpbmgta3Nuay9waGlldS1saW5oLWtzbmstYnUtZ3VpLWxhaS1zaGFyZWQvcGhpZXUtbGluaC1rc25rLWJ1LWd1aS1sYWktc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24td2FyLXN0YXR1cy1ncmlkIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuc3ZnIHtcbiAgaGVpZ2h0OiAyZW07XG59IiwiLmljb24td2FyLXN0YXR1cy1ncmlkIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuc3ZnIHtcbiAgaGVpZ2h0OiAyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: PhieuLinhKSNKBuGuiLaiSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhKSNKBuGuiLaiSharedComponent", function() { return PhieuLinhKSNKBuGuiLaiSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/warning */ "./node_modules/@iconify/icons-ic/warning.js");
/* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");















let PhieuLinhKSNKBuGuiLaiSharedComponent = class PhieuLinhKSNKBuGuiLaiSharedComponent {
    constructor(apiService, notificationService, authService, ref, dialog, route) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.dialog = dialog;
        this.route = route;
        this.yeuCauLinhBuKSNK = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauLinhKSNK"]();
        this.yeuCauLinhBuKSNKSearch = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauLinhBuKSNKSearch"]();
        this.linhTuKhoId = null;
        this.linhVeKhoId = null;
        this.linhVeKhoPreviousId = null;
        this.dieuKienLoadGridKSNK = null;
        this.phieuLinhId = 0;
        this.icWarning = _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.trangThai = null;
        this.gridDataSourceKSNK = {
            data: [],
            total: 0
        };
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataGrid = "YeuCauLinhKSNK/GetYeuCauKSNKBenhVienDataForGridAsync";
        this.urlGetTotalPageGrid = "YeuCauLinhKSNK/GetYeuCauKSNKBenhVienTotalPageForGridAsync";
        this.urlGetDataGridChild = "YeuCauLinhKSNK/GetBenhNhanTheoKSNKDataForGridAsync";
        this.urlGetTotalPageGridChild = "YeuCauLinhKSNK/GetBenhNhanTheoKSNKTotalPageForGridAsync";
        this.groups = [{ field: 'Nhom' }];
        this.loai = null;
        this.sortChild = [{ field: 'STT', dir: 'asc' }];
        this.isDaTao = false;
        this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledNguoiTaoPhieu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkAll = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhBuKSNK;
        this.yeuCauLinhBuKSNK = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauLinhKSNK"]();
        const loaiDPVT = this.route.snapshot.params.value;
        if (loaiDPVT != undefined && loaiDPVT != null) {
            this.loai = loaiDPVT;
        }
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.yeuCauLinhBuKSNK.LaNguoiTaoPhieu = false;
            this.getById(id);
            this.phieuLinhId = id;
        }
        this.getCurrentUser();
        this.gridColumns = [
            // { Field: "STT", Title: "#", Width: 60, Template: this.STTTemplate },
            { Field: 'CheckBox', Title: '', Width: 50, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && !(this.trangThaiVo.TrangThai == null)) },
            { Field: 'STT', Title: 'STT', Width: 50, Sortable: false, Template: this.STTTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai != null) },
            { Field: "LoaiDuocPhamHayVatTu", Title: "Loại", Width: 180, ShowTooltip: true, Template: this.loaiTemplate },
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
            { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Template: this.slYeuCauTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
            { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
            { Field: "SoLuongDaBu", Title: "SL đã bù", Width: 100 },
            { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 100, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
            { Field: "SLYeuCauLinhThucTe", Title: "SL lĩnh thực tế", Width: 130, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true), Template: this.slYeuCauLinhThucTeTemplate },
            { Field: "SoLuongDuocDuyet", Title: "SL được duyệt", Width: 100, Hidden: this.isCreate || this.trangThaiVo != undefined && this.trangThaiVo != null && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false) },
        ];
        this.gridChildColumns = [
            // { Field: "STT", Title: "#", Width: 40, Template: this.STTTemplateChild },
            { Field: "MaTN", Title: "Mã TN", Width: 120 },
            { Field: "MaBN", Title: "Mã NB", Width: 100 },
            { Field: "HoTen", Title: "Họ tên", Width: 180 },
            { Field: "DVKham", Title: "DV Khám", Width: 180 },
            { Field: "BSKeToa", Title: "BS kê vật tư", Width: 150 },
            { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 125 },
            { Field: "NgayKe", Title: "Ngày kê", Width: 125 },
            { Field: "SL", Title: "SL cần bù", Width: 80 },
            { Field: "SLDaBu", Title: "SL đã bù", Width: 90 },
            { Field: "SLYeuCau", Title: "SL yêu cầu", Width: 90, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai == true) },
            { Field: "SLYeuCau", Title: "SL được duyệt", Width: 90, Hidden: this.isCreate || this.trangThaiVo != undefined && this.trangThaiVo != null && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false) },
        ];
        this.route.queryParams.subscribe(params => {
            let khoLinhId = params['KhoLinhId'];
            let khoBuId = params['KhoBuId'];
            if (khoLinhId != undefined && khoBuId != undefined && khoLinhId > 0 && khoBuId > 0) {
                this.yeuCauLinhBuKSNK.KhoXuatId = parseInt(khoLinhId);
                this.yeuCauLinhBuKSNK.KhoNhapId = parseInt(khoBuId);
                this.linhTuKhoId = parseInt(khoLinhId);
                this.linhVeKhoId = parseInt(khoBuId);
                this.ganDieuKienLoadGridKSNK(parseInt(khoLinhId), parseInt(khoBuId));
            }
        });
    }
    getCurrentUser() {
        if (this.yeuCauLinhBuKSNK.LaNguoiTaoPhieu == null) {
            if (this.yeuCauLinhBuKSNK.NgayYeuCau == null) {
                this.yeuCauLinhBuKSNK.NgayYeuCau = new Date();
            }
            if (this.yeuCauLinhBuKSNK.NhanVienDuyetId == null) {
                this.apiService.get("YeuCauLinhKSNK/GetCurrentUserKSNK").subscribe(resultData => {
                    if (resultData != undefined && resultData != null) {
                        this.yeuCauLinhBuKSNK.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                        this.yeuCauLinhBuKSNK.HoTenNguoiYeuCau = resultData.HoTen;
                    }
                });
            }
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
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    linhTuKhoChange(event) {
        if (event != undefined && event != null) {
            this.linhTuKhoId = event;
        }
        else {
            this.linhTuKhoId = null;
        }
        this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, this.linhVeKhoId);
    }
    linhVeKhoChange(event) {
        if (event != undefined && event != null) {
            this.linhVeKhoId = event;
            if (this.trangThaiVo != undefined
                && this.trangThaiVo != null
                && this.linhTuKhoId != null
                && this.linhVeKhoPreviousId != null
                && (this.trangThaiVo.TrangThai == null || this.trangThaiVo.TrangThai == false)
                && event != this.linhVeKhoPreviousId) {
                this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: "Bạn có chắc muốn chọn lại Kho lĩnh không? (Việc chọn lại Kho sẽ xoá bỏ hết các DL Lĩnh hiện tại trên trang này)." }
                }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                        this.yeuCauLinhBuKSNK.KhoNhapId = event;
                        this.linhVeKhoId = event;
                        this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, event);
                    }
                    else {
                        this.yeuCauLinhBuKSNK.KhoNhapId = this.linhVeKhoPreviousId;
                        this.linhVeKhoId = event;
                        this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, this.linhVeKhoPreviousId);
                    }
                });
            }
            else {
                this.yeuCauLinhBuKSNK.KhoNhapId = event;
                this.linhVeKhoId = event;
                this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, event);
            }
        }
        else {
            this.ganDieuKienLoadGridKSNK(this.linhTuKhoId, event);
            this.linhVeKhoId = null;
        }
    }
    ganDieuKienLoadGridKSNK(linhTuKhoId, linhVeKhoId) {
        if (this.trangThaiVo != undefined) {
            this.yeuCauLinhBuKSNKSearch.TrangThai = this.trangThaiVo.TrangThai;
            this.trangThai = this.trangThaiVo.TrangThai;
        }
        // console.log("TrangThai: ", this.trangThaiVo)
        this.yeuCauLinhBuKSNKSearch.LinhTuKhoId = linhTuKhoId;
        this.yeuCauLinhBuKSNKSearch.LinhVeKhoId = linhVeKhoId;
        this.yeuCauLinhBuKSNKSearch.IsCreate = this.isCreate;
        this.yeuCauLinhBuKSNKSearch.YeuCauLinhVatTuId = this.phieuLinhId;
        this.dieuKienLoadGridKSNK = JSON.stringify(this.yeuCauLinhBuKSNKSearch);
        if (this.yeuCauLinhBuKSNKSearch.TrangThai == null || (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == true)) {
            this.gridKSNK._additionalSearchString = this.dieuKienLoadGridKSNK;
            this.gridKSNK.search();
        }
        if (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == false) {
            this.gridKSNKTuChoi._additionalSearchString = this.dieuKienLoadGridKSNK;
            this.gridKSNKTuChoi.search();
        }
    }
    onDataBoundGrid(event) {
        if (event != undefined && event != null) {
            if (this.isCreate) {
                this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens = [];
                this.yeuCauLinhBuKSNK.YeuCauLinhVatTuChiTiets = [];
                event.Data.forEach(element => {
                    let yeuCauKSNKBenhVien = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauKSNKBenhVienViewModel"]();
                    yeuCauKSNKBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
                    yeuCauKSNKBenhVien.LaVatTuBHYT = element.LaBHYT;
                    yeuCauKSNKBenhVien.SoLuongTon = element.SoLuongTon;
                    yeuCauKSNKBenhVien.KhoLinhTuId = this.linhTuKhoId;
                    yeuCauKSNKBenhVien.KhoLinhVeId = this.linhVeKhoId;
                    yeuCauKSNKBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
                    yeuCauKSNKBenhVien.SoLuongCanBu = element.SoLuongCanBu;
                    yeuCauKSNKBenhVien.SoLuongDaBu = element.SoLuongDaBu;
                    yeuCauKSNKBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
                    yeuCauKSNKBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
                    yeuCauKSNKBenhVien.LoaiDuocPhamHayVatTu = element.LoaiDuocPhamHayVatTu;
                    this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.push(yeuCauKSNKBenhVien);
                });
            }
            else {
                this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens = [];
                this.yeuCauLinhBuKSNK.YeuCauLinhVatTuChiTiets = [];
                event.Data.forEach(element => {
                    let yeuCauKSNKBenhVien = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauKSNKBenhVienViewModel"]();
                    yeuCauKSNKBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
                    yeuCauKSNKBenhVien.LaVatTuBHYT = element.LaBHYT;
                    yeuCauKSNKBenhVien.SoLuongCanBu = element.SoLuongCanBu;
                    yeuCauKSNKBenhVien.SoLuongTon = element.SoLuongTon;
                    yeuCauKSNKBenhVien.KhoLinhTuId = this.yeuCauLinhBuKSNK.KhoXuatId;
                    yeuCauKSNKBenhVien.KhoLinhVeId = this.yeuCauLinhBuKSNK.KhoNhapId;
                    yeuCauKSNKBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
                    yeuCauKSNKBenhVien.SoLuongDaBu = element.SoLuongDaBu;
                    yeuCauKSNKBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
                    yeuCauKSNKBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
                    yeuCauKSNKBenhVien.LoaiDuocPhamHayVatTu = element.LoaiDuocPhamHayVatTu;
                    this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.push(yeuCauKSNKBenhVien);
                });
            }
            if (event.Data.length > 0 && (this.yeuCauLinhBuKSNK.KhoXuatId != null || this.yeuCauLinhBuKSNK.KhoXuatId != undefined)
                && (this.yeuCauLinhBuKSNK.KhoNhapId != null || this.yeuCauLinhBuKSNK.KhoNhapId != undefined)) {
                this.hideDuyetbtn.emit(true);
            }
            else {
                this.hideDuyetbtn.emit(false);
            }
        }
        else {
            this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens = [];
        }
    }
    getById(id) {
        var self = this;
        self.loadingPage();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View)) {
            let modelVO = {
                YeuCauLinhId: id,
                LoaiDuocPhamHayVatTu: this.loai
            };
            self.apiService.post("YeuCauLinhKSNK/GetYeuCauLinhKSNKBuTao", modelVO).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    self.closePopupLoadingData();
                    // console.log("data: ", resultData)
                    this.yeuCauLinhBuKSNK = resultData;
                    if (this.yeuCauLinhBuKSNK.LaNguoiTaoPhieu) {
                        this.disabledNguoiTaoPhieu.emit(true);
                    }
                    else {
                        this.disabledNguoiTaoPhieu.emit(false);
                    }
                    if (this.yeuCauLinhBuKSNK.HoTenNguoiYeuCau == null) {
                        this.yeuCauLinhBuKSNK.HoTenNguoiYeuCau = resultData.TenNhanVienYeuCau;
                    }
                    console.log("yeuCauLinhBuKSNK: ", this.yeuCauLinhBuKSNK);
                    if (this.isCreate) {
                        this.linhVeKhoPreviousId = this.yeuCauLinhBuKSNK.KhoNhapId;
                    }
                    this.linhTuKhoId = this.yeuCauLinhBuKSNK.KhoXuatId;
                    this.linhVeKhoId = this.yeuCauLinhBuKSNK.KhoNhapId;
                    if (this.yeuCauLinhBuKSNK.DuocDuyet == null || this.yeuCauLinhBuKSNK.DuocDuyet == false) {
                        this.isCreate = false;
                    }
                    this.ganDieuKienLoadGridKSNK(this.yeuCauLinhBuKSNK.KhoXuatId, this.yeuCauLinhBuKSNK.KhoNhapId);
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    ganSLThucTeChange(soLuong, KSNKBenhVienId) {
        if (soLuong != undefined && soLuong != null) {
            this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.filter(x => x.VatTuBenhVienId == KSNKBenhVienId).forEach(element => {
                element.SLYeuCauLinhThucTe = soLuong;
            });
        }
        else {
            this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.filter(x => x.VatTuBenhVienId == KSNKBenhVienId).forEach(element => {
                element.SLYeuCauLinhThucTe = null;
            });
        }
    }
    checkBoxDichVu(dataItem, event) {
        let index = this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.findIndex(z => z.VatTuBenhVienId == dataItem.VatTuBenhVienId);
        this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens[index].CheckBox = event;
        let lstDataCurrent = this.gridKSNK.getAllDataFromDatasource();
        if (lstDataCurrent.every(z => z.CheckBox)) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    }
    checkBoxAllChange(event) {
        let lstDataCurrent = this.gridKSNK.getAllDataFromDatasource();
        if (lstDataCurrent.length > 0) {
            lstDataCurrent.forEach(element => {
                element.CheckBox = event;
                let index = this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.findIndex(z => z.VatTuBenhVienId == element.VatTuBenhVienId);
                this.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens[index].CheckBox = event;
            });
        }
    }
    thoiDiemTNChange() {
        if (this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTuFormat != null) {
            this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTu = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTuFormat, "dd/mm/yyyy");
        }
        else {
            this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTu = null;
        }
        if (this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDenFormat != null) {
            this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDen = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDenFormat, "dd/mm/yyyy");
        }
        else {
            this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDen = null;
        }
        this.checkAll = false;
        var queryString = JSON.stringify(this.yeuCauLinhBuKSNKSearch);
        this.gridKSNK._additionalSearchString = queryString;
        this.gridKSNK.search();
    }
    getSharedData() {
        this.yeuCauLinhBuKSNK.ThoiDiemChiDinhTu = this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhTu;
        this.yeuCauLinhBuKSNK.ThoiDiemChiDinhDen = this.yeuCauLinhBuKSNKSearch.ThoiDiemChiDinhDen;
        debugger;
        return this.yeuCauLinhBuKSNK;
    }
};
PhieuLinhKSNKBuGuiLaiSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauTemplate', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "slYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKSNK', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "gridKSNK", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKSNKTuChoi', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "gridKSNKTuChoi", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplateChild', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "STTTemplateChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauLinhThucTeTemplate', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "slYeuCauLinhThucTeTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "checkBoxTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "checkBoxHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiTemplate', { static: true })
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "loaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "validationErrorsLinhBu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "trangThaiVo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "isDaTao", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "hideDuyetbtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhKSNKBuGuiLaiSharedComponent.prototype, "disabledNguoiTaoPhieu", void 0);
PhieuLinhKSNKBuGuiLaiSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-ksnk-bu-gui-lai-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-ksnk-bu-gui-lai-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-ksnk-bu-gui-lai-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.scss")).default]
    })
], PhieuLinhKSNKBuGuiLaiSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLWJ1LWd1aS1sYWkvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxceWV1LWNhdS1saW5oLWtzbmtcXHBoaWV1LWxpbmgta3Nuay1idS1ndWktbGFpXFxwaGlldS1saW5oLWtzbmstYnUtZ3VpLWxhaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLWJ1LWd1aS1sYWkvcGhpZXUtbGluaC1rc25rLWJ1LWd1aS1sYWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi95ZXUtY2F1LWxpbmgta3Nuay9waGlldS1saW5oLWtzbmstYnUtZ3VpLWxhaS9waGlldS1saW5oLWtzbmstYnUtZ3VpLWxhaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59IiwiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: PhieuLinhKSNKBuGuiLaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhKSNKBuGuiLaiComponent", function() { return PhieuLinhKSNKBuGuiLaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts");
/* harmony import */ var _phieu_linh_ksnk_bu_gui_lai_shared_phieu_linh_ksnk_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.ts");


















let PhieuLinhKSNKBuGuiLaiComponent = class PhieuLinhKSNKBuGuiLaiComponent {
    constructor(dialog, route, notificationService, authService, apiService, router, ref) {
        this.dialog = dialog;
        this.route = route;
        this.notificationService = notificationService;
        this.authService = authService;
        this.apiService = apiService;
        this.router = router;
        this.ref = ref;
        this.loading = false;
        this.hostingName = null;
        this.trangThaiVo = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_15__["TrangThaiTaoPhieuLinh"]();
        this.yeuCauLinhKSNK = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauLinhKSNK"]();
        this.isHideDuyet = false;
        this.phieuLinhId = null;
        this.flag = true;
        this.isDisabledNguoiTaoPhieu = false;
        this.inPhieuLinhBu = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_15__["PhieuLinhKSNKThuongs"]();
        this.loai = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].TaoYeuCauLinhBuKSNK;
        this.route
            .queryParams
            .subscribe(v => {
            this.trangThaiDanhSach = v;
        });
        this.yeuCauLinhKSNK = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauLinhKSNK"]();
        const value = this.route.snapshot.params.value;
        if (value !== undefined && value !== null) {
            this.loai = value;
        }
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.GetTrangThaiPhieuLinh(id);
            this.phieuLinhId = id;
        }
        if (window.location.protocol == "http:") {
            this.inPhieuLinhBu.HostingName = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhBu.HostingName = "https://" + window.location.host;
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    luuPhieuLinhBuKSNK(daGui) {
        var self = this;
        self.yeuCauLinhKSNK = self.shared.getSharedData();
        if (self.yeuCauLinhKSNK.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
            if (daGui) {
                self.notificationService.showError("Vui lòng chọn ksnk muốn gửi phiếu.");
            }
            else {
                self.notificationService.showError("Vui lòng chọn ksnk muốn lưu phiếu.");
            }
        }
        else {
            var mess = "";
            if (daGui) {
                mess = "Bạn có muốn gửi phiếu lĩnh ksnk này không ?";
            }
            else {
                mess = "Bạn có muốn lưu phiếu lĩnh ksnk này không ?";
            }
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: mess,
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (daGui) {
                        self.xacNhanGuiPhieuLinh();
                    }
                    else {
                        self.xacNhanLuuPhieuLinh();
                    }
                }
            });
        }
    }
    xacNhanLuuPhieuLinh() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
            self.loadingPage();
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1);
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
                element.DuocDuyet = null;
            });
            self.yeuCauLinhKSNK.DuocDuyet = null;
            self.apiService.post("YeuCauLinhKSNK/GuiLaiPhieuLinhBu", self.yeuCauLinhKSNK).subscribe((result) => {
                if (result != undefined && result != null) {
                    self.yeuCauLinhKSNK.LastModified = result.LastModified;
                    self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                    self.trangThaiVo.Ten = result.ten;
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                    self.shared.ganDieuKienLoadGridKSNK(self.yeuCauLinhKSNK.KhoXuatId, self.yeuCauLinhKSNK.KhoNhapId);
                    self.closePopupLoadingData();
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xacNhanGuiPhieuLinh() {
        debugger;
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
            self.yeuCauLinhKSNK.DaGui = true;
            self.loadingPage();
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1);
            self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
                element.DuocDuyet = null;
            });
            self.yeuCauLinhKSNK.DuocDuyet = null;
            self.apiService.post("YeuCauLinhKSNK/GuiLaiPhieuLinhBu", self.yeuCauLinhKSNK).subscribe((result) => {
                if (result != undefined && result != null) {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                    self.shared.ganDieuKienLoadGridKSNK(self.yeuCauLinhKSNK.KhoXuatId, self.yeuCauLinhKSNK.KhoNhapId);
                    self.closePopupLoadingData();
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn in phiếu lĩnh ksnk này không ?",
                        },
                    }).afterClosed().subscribe((res) => {
                        if (res == "Yes") {
                            self.loadingPageDaDuyet();
                            self.inPhieuLinhBu.Header = true;
                            self.inPhieuLinhBu.YeuCauLinhVatTuIds = result;
                            self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                            self.inPhieuLinhBu.TrangThai = self.trangThaiVo.TrangThai;
                            self.apiService.post("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhBu).subscribe(resData => {
                                if (resData != undefined && resData != null) {
                                    self.inPhieuLinhBu.Header = false;
                                    self.closePopupLoadingDataDaDuyet();
                                    self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongPopupComponent"], {
                                        disableClose: false,
                                        width: '1200px',
                                        data: { Model: resData },
                                    }).afterClosed().subscribe(() => {
                                        self.closePopupLoadingDataDaDuyet();
                                        self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
                                    });
                                }
                            }, (err) => {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                                self.closePopupLoadingDataDaDuyet();
                            });
                        }
                        else {
                            self.closePopupLoadingDataDaDuyet();
                            self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
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
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    loadingPageDaDuyet() {
        this.popupLoadingDataDaDuyet = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingDataDaDuyet() {
        if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
            this.popupLoadingDataDaDuyet.close();
        }
    }
    // luuVaGuiDuyetLai() {
    //   this.dialog.open(ConfirmComponent, {
    //     disableClose: false,
    //     width: '400px',
    //     data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửu lại phê duyệt cho lần lĩnh ksnk này không?" }
    //   }).afterClosed().subscribe(result => {
    //     if (result === 'Yes') {
    //     }
    //   });
    // }
    anHienButtonDuyet(event) {
        if (event) {
            this.isHideDuyet = true;
        }
        else {
            this.isHideDuyet = false;
        }
    }
    disableNguoiTaoPhieu(event) {
        if (event) {
            this.isDisabledNguoiTaoPhieu = true;
        }
        else {
            this.isDisabledNguoiTaoPhieu = false;
        }
    }
    GetTrangThaiPhieuLinh(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].View)) {
            let newModel = {
                YeuCauLinhId: id,
                LoaiDuocPhamHayVatTu: this.loai
            };
            self.apiService.post("YeuCauLinhKSNK/GetTrangThaiPhieuLinhKSNK", newModel).subscribe((result) => {
                self.trangThaiVo = result;
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    inPhieu() {
        var self = this;
        if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
            self.loadingPageDaDuyet();
            self.inPhieuLinhBu.Header = true;
            self.inPhieuLinhBu.YeuCauLinhVatTuIds = [];
            let newPhieu = {
                YeuCauLinhVatTuId: self.phieuLinhId,
                LoaiDuocPhamHayVatTu: this.loai
            };
            self.inPhieuLinhBu.YeuCauLinhVatTuIds.push(newPhieu);
            self.inPhieuLinhBu.LoaiPhieuLinh = 2;
            self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
            self.apiService.post("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhBu).subscribe(resData => {
                if (resData != undefined && resData != null) {
                    self.inPhieuLinhBu.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongPopupComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { Model: resData },
                    }).afterClosed().subscribe(() => {
                        self.closePopupLoadingDataDaDuyet();
                    });
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingDataDaDuyet();
            });
        }
        else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) {
            self.yeuCauLinhKSNK = self.shared.getSharedData();
            self.validationErrors = [];
            self.ref.detectChanges();
            self.loadingPageDaDuyet();
            self.inPhieuLinhBu.Header = true;
            self.inPhieuLinhBu.YeuCauLinhVatTuIds = [];
            let newPhieu = {
                YeuCauLinhVatTuId: self.phieuLinhId,
                LoaiDuocPhamHayVatTu: this.loai
            };
            self.inPhieuLinhBu.YeuCauLinhVatTuIds.push(newPhieu);
            self.inPhieuLinhBu.LoaiPhieuLinh = 2;
            self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
            self.apiService.post("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhBu).subscribe(resData => {
                if (resData != undefined && resData != null) {
                    self.inPhieuLinhBu.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongPopupComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { Model: resData },
                    }).afterClosed().subscribe(() => {
                        self.closePopupLoadingDataDaDuyet();
                    });
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingDataDaDuyet();
            });
        }
        else {
            self.yeuCauLinhKSNK = self.shared.getSharedData();
            if (self.yeuCauLinhKSNK.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
                self.notificationService.showError("Vui lòng chọn ksnk muốn in phiếu.");
            }
            else {
                self.validationErrors = [];
                self.ref.detectChanges();
                self.loadingPageDaDuyet();
                self.inPhieuLinhBu.Header = true;
                self.inPhieuLinhBu.YeuCauLinhVatTuIds = [];
                let newPhieu = {
                    YeuCauLinhVatTuId: self.phieuLinhId,
                    LoaiDuocPhamHayVatTu: this.loai
                };
                self.inPhieuLinhBu.YeuCauLinhVatTuIds.push(newPhieu);
                self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
                self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1);
                self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
                    element.DuocDuyet = null;
                });
                self.yeuCauLinhKSNK.DuocDuyet = null;
                self.apiService.post("YeuCauLinhKSNK/GuiLaiPhieuLinhBu", self.yeuCauLinhKSNK).subscribe((result) => {
                    if (result != undefined && result != null) {
                        self.apiService.post("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhBu).subscribe(resData => {
                            if (resData != undefined && resData != null) {
                                self.inPhieuLinhBu.Header = false;
                                self.closePopupLoadingDataDaDuyet();
                                self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: { Model: resData },
                                }).afterClosed().subscribe(() => {
                                    self.closePopupLoadingDataDaDuyet();
                                });
                            }
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingDataDaDuyet();
                        });
                    }
                }, (err) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    self.closePopupLoadingDataDaDuyet();
                });
            }
        }
    }
    cancel() {
        let data;
        if (this.trangThaiDanhSach.holdQuery == '0') {
            data = 0;
        }
        if (this.trangThaiDanhSach.holdQuery == '1') {
            data = 1;
        }
        if (this.trangThaiDanhSach.holdQuery == '2') {
            data = 2;
        }
        if (this.trangThaiDanhSach.holdQuery == '3') {
            data = 3;
        }
        if (this.trangThaiDanhSach.holdQuery == '4') {
            data = 4;
        }
        if (this.trangThaiDanhSach.holdQuery == '5') {
            data = 5;
        }
        if (this.trangThaiDanhSach.holdQuery == '6') {
            data = 6;
        }
        if (this.trangThaiDanhSach.holdQuery == '7') {
            data = 7;
        }
        this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk'], { queryParams: { holdQuery: data } });
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
PhieuLinhKSNKBuGuiLaiComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _phieu_linh_ksnk_bu_gui_lai_shared_phieu_linh_ksnk_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhKSNKBuGuiLaiSharedComponent"], static: false })
], PhieuLinhKSNKBuGuiLaiComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], PhieuLinhKSNKBuGuiLaiComponent.prototype, "keyEvent", null);
PhieuLinhKSNKBuGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-ksnk-bu-gui-lai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-ksnk-bu-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-ksnk-bu-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.scss")).default]
    })
], PhieuLinhKSNKBuGuiLaiComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLXRodW9uZy1ndWktbGFpL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxraWVtLXNvYXQtbmhpZW0ta2h1YW5cXHlldS1jYXUtbGluaC1rc25rXFxwaGlldS1saW5oLWtzbmstdGh1b25nLWd1aS1sYWlcXHBoaWV1LWxpbmgta3Nuay10aHVvbmctZ3VpLWxhaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLXRodW9uZy1ndWktbGFpL3BoaWV1LWxpbmgta3Nuay10aHVvbmctZ3VpLWxhaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL3lldS1jYXUtbGluaC1rc25rL3BoaWV1LWxpbmgta3Nuay10aHVvbmctZ3VpLWxhaS9waGlldS1saW5oLWtzbmstdGh1b25nLWd1aS1sYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: PhieuLinhKSNKThuongGuiLaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhKSNKThuongGuiLaiComponent", function() { return PhieuLinhKSNKThuongGuiLaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_shared_phieu_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.ts");


















let PhieuLinhKSNKThuongGuiLaiComponent = class PhieuLinhKSNKThuongGuiLaiComponent {
    constructor(apiService, dialog, notificationService, authService, router, route, ref) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.ref = ref;
        this.hostingName = null;
        this.loading = false;
        this.trangThaiVo = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_9__["TrangThaiTaoPhieuLinh"]();
        this.inPhieuLinhThuongs = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_9__["PhieuLinhKSNKThuongs"]();
        this.isHideDuyet = false;
        this.isDisabledNguoiTaoPhieu = false;
        this.phieuLinhId = null;
        this.inPhieuLinhThuong = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_9__["PhieuLinhKSNKThuong"]();
        this.yeuCauLinhKSNK = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_9__["YeuCauLinhKSNK"]();
        this.loai = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].TaoYeuCauLinhThuongKSNK;
        this.route
            .queryParams
            .subscribe(v => {
            this.trangThaiDanhSach = v;
        });
        const id = this.route.snapshot.params.id;
        const value = this.route.snapshot.params.value;
        if (value !== undefined && value !== null) {
            this.loai = value;
        }
        if (id !== undefined && id !== null) {
            this.GetTrangThaiPhieuLinh(id);
            this.phieuLinhId = id;
        }
        if (window.location.protocol == "http:") {
            this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
        }
        if (window.location.protocol == "http:") {
            this.inPhieuLinhThuongs.HostingName = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhThuongs.HostingName = "https://" + window.location.host;
        }
    }
    loaiDuocPhamHayVatTu(event) {
        this.loai = event;
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    loadingPageDaDuyet() {
        this.popupLoadingDataDaDuyet = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
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
    closePopupLoadingDataDaDuyet() {
        if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
            this.popupLoadingDataDaDuyet.close();
        }
    }
    luuPhieuLinhThuong() {
        var self = this;
        self.yeuCauLinhKSNK = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn lưu phiếu lĩnh ksnk này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        self.loadingPage();
                        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
                            element.DuocDuyet = false;
                        });
                        self.yeuCauLinhKSNK.IsLuu = true;
                        self.yeuCauLinhKSNK.DuocDuyet = false;
                        self.apiService.post("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe((result) => {
                            if (result != undefined && result != null) {
                                self.yeuCauLinhKSNK.LastModified = result.LastModified;
                                self.yeuCauLinhKSNK.IsLuu = false;
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                self.closePopupLoadingData();
                            }
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                }
            });
        }
        else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) { // "Đang chờ duyệt"
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn lưu phiếu lĩnh ksnk này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        self.loadingPage();
                        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
                            element.DuocDuyet = null;
                        });
                        self.yeuCauLinhKSNK.DuocDuyet = null;
                        self.apiService.post("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe((result) => {
                            if (result != undefined && result != null) {
                                self.yeuCauLinhKSNK.LastModified = result.LastModified;
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                self.closePopupLoadingData();
                            }
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingData();
                            self.closePopupLoadingDataDaDuyet();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                }
            });
        }
    }
    guiPhieuLinhThuong() {
        var self = this;
        self.yeuCauLinhKSNK = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn gửi phiếu lĩnh ksnk này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        self.yeuCauLinhKSNK.DaGui = true;
                        self.loadingPage();
                        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
                            element.DuocDuyet = false;
                        });
                        self.yeuCauLinhKSNK.IsLuu = true;
                        self.yeuCauLinhKSNK.DuocDuyet = false;
                        self.apiService.post("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe((result) => {
                            if (result != undefined && result != null) {
                                self.yeuCauLinhKSNK.LastModified = result.LastModified;
                                self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                                self.trangThaiVo.Ten = result.ten;
                                self.yeuCauLinhKSNK.IsLuu = false;
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                self.closePopupLoadingData();
                            }
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                }
            });
        }
        else if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == null) { // "Đang chờ duyệt"
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn gửi phiếu lĩnh ksnk này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        self.yeuCauLinhKSNK.DaGui = true;
                        self.loadingPage();
                        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                        self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
                            element.DuocDuyet = null;
                        });
                        self.yeuCauLinhKSNK.DuocDuyet = null;
                        self.apiService.post("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe((result) => {
                            if (result != undefined && result != null) {
                                self.yeuCauLinhKSNK.LastModified = result.LastModified;
                                self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                                self.trangThaiVo.Ten = result.ten;
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                self.closePopupLoadingData();
                                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                                    disableClose: false,
                                    width: "500px",
                                    data: {
                                        Title: "Xác nhận",
                                        Message: "Bạn có muốn in phiếu lĩnh ksnk này không ?",
                                    },
                                }).afterClosed().subscribe((res) => {
                                    if (res == "Yes") {
                                        self.loadingPageDaDuyet();
                                        self.inPhieuLinhThuongs.Header = true;
                                        self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = result;
                                        self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
                                        self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
                                        self.apiService.post("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(resData => {
                                            if (resData != undefined && resData != null) {
                                                self.closePopupLoadingDataDaDuyet();
                                                self.inPhieuLinhThuong.Header = false;
                                                self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongPopupComponent"], {
                                                    disableClose: false,
                                                    width: '1200px',
                                                    data: { Model: resData },
                                                }).afterClosed().subscribe(() => {
                                                    self.closePopupLoadingDataDaDuyet();
                                                    self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
                                                });
                                            }
                                        }, (err) => {
                                            self.validationErrors = err.ValidationErrors;
                                            if (err.Message != "Validation Failed") {
                                                self.notificationService.showError(err.Message);
                                            }
                                            self.closePopupLoadingDataDaDuyet();
                                        });
                                    }
                                    else {
                                        self.closePopupLoadingDataDaDuyet();
                                        self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
                                    }
                                });
                            }
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingData();
                            self.closePopupLoadingDataDaDuyet();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                }
            });
        }
    }
    luuVaGuiDuyetLai() {
        var self = this;
        self.yeuCauLinhKSNK = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửi lại phê duyệt cho lần lĩnh ksnk này không?" }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                    self.loadingPage();
                    self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                    self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
                        element.DuocDuyet = false;
                    });
                    self.yeuCauLinhKSNK.DuocDuyet = false;
                    self.apiService.post("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe((result) => {
                        if (result != undefined && result != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            self.closePopupLoadingData();
                            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                                disableClose: false,
                                width: "500px",
                                data: {
                                    Title: "Xác nhận",
                                    Message: "Bạn có muốn in phiếu lĩnh dược phẩm này không ?",
                                },
                            }).afterClosed().subscribe((res) => {
                                if (res == "Yes") {
                                    self.loadingPageDaDuyet();
                                    self.inPhieuLinhThuongs.Header = true;
                                    self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = result;
                                    self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
                                    self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
                                    self.apiService.post("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(resData => {
                                        if (resData != undefined && resData != null) {
                                            self.inPhieuLinhThuongs.Header = false;
                                            self.closePopupLoadingDataDaDuyet();
                                            self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Model: resData },
                                            }).afterClosed().subscribe(() => {
                                                self.closePopupLoadingDataDaDuyet();
                                                self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
                                            });
                                        }
                                    }, (err) => {
                                        self.validationErrors = err.ValidationErrors;
                                        if (err.Message != "Validation Failed") {
                                            self.notificationService.showError(err.Message);
                                        }
                                        self.closePopupLoadingData();
                                        self.closePopupLoadingDataDaDuyet();
                                    });
                                }
                                else {
                                    self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
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
            }
        });
    }
    inPhieu() {
        var self = this;
        if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == true) { //Đã duyệt
            self.loadingPageDaDuyet();
            self.inPhieuLinhThuongs.Header = true;
            self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = [];
            let newPhieuVo = {
                YeuCauLinhVatTuId: this.phieuLinhId,
                LoaiDuocPhamHayVatTu: this.loai
            };
            self.inPhieuLinhThuongs.YeuCauLinhVatTuIds.push(newPhieuVo);
            self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
            self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
            self.apiService.post("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(resData => {
                if (resData != undefined && resData != null) {
                    self.inPhieuLinhThuong.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongPopupComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { Model: resData },
                    }).afterClosed().subscribe(() => {
                        self.closePopupLoadingDataDaDuyet();
                    });
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingDataDaDuyet();
            });
        }
        else {
            self.loadingPageDaDuyet();
            self.inPhieuLinhThuongs.Header = true;
            self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = [];
            let newPhieuVo = {
                YeuCauLinhVatTuId: this.phieuLinhId,
                LoaiDuocPhamHayVatTu: this.loai
            };
            self.inPhieuLinhThuongs.YeuCauLinhVatTuIds.push(newPhieuVo);
            self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
            self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
            self.apiService.post("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(resData => {
                if (resData != undefined && resData != null) {
                    self.inPhieuLinhThuong.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongPopupComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { Model: resData },
                    }).afterClosed().subscribe(() => {
                        self.closePopupLoadingDataDaDuyet();
                    });
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingDataDaDuyet();
            });
            // self.yeuCauLinhKSNK = self.shared.getSharedData();
            // self.validationErrors = [];
            // self.ref.detectChanges();
            // if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            //   // self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
            //   self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1)
            //   if (self.trangThaiVo.TrangThai == false) {
            //     self.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
            //       element.DuocDuyet = false;
            //     });
            //   }
            //   self.yeuCauLinhKSNK.IsLuu = true;
            //   self.apiService.post<any>("YeuCauLinhKSNK/GuiLaiPhieuLinhThuongKSNK", self.yeuCauLinhKSNK).subscribe(
            //     (result) => {
            //       if (result != undefined && result != null) {
            //         self.yeuCauLinhKSNK.LastModified = result.LastModified;
            //         self.yeuCauLinhKSNK.IsLuu = false;
            //         self.loadingPageDaDuyet();
            //         self.inPhieuLinhThuongs.Header = true;
            //         self.inPhieuLinhThuongs.YeuCauLinhVatTuIds= result; 
            //         self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
            //         self.inPhieuLinhThuongs.TrangThai = this.trangThaiVo.TrangThai;
            //         self.apiService.post<any>("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(
            //           resData => {
            //             if (resData != undefined && resData != null) {
            //               self.inPhieuLinhThuong.Header = false;
            //               self.closePopupLoadingDataDaDuyet();
            //               self.dialog.open(PhieuLinhKSNKThuongPopupComponent, {
            //                 disableClose: false,
            //                 width: '1200px',
            //                 data: { Model: resData },
            //               }
            //               ).afterClosed().subscribe(() => {
            //                 self.closePopupLoadingDataDaDuyet();
            //               }
            //               );
            //             }
            //           },
            //           (err: ApiError) => {
            //             self.validationErrors = err.ValidationErrors;
            //             if (err.Message != "Validation Failed") {
            //               self.notificationService.showError(err.Message);
            //             }
            //             self.closePopupLoadingDataDaDuyet();
            //           }
            //         );
            //       } else {
            //         self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
            //       }
            //     },
            //     (err: ApiError) => {
            //       self.validationErrors = err.ValidationErrors;
            //       if (err.Message != "Validation Failed") {
            //         self.notificationService.showError(err.Message);
            //       }
            //       self.closePopupLoadingDataDaDuyet();
            //     });
            // } else {
            //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            // }
        }
    }
    anHienButtonDuyet(event) {
        if (event) {
            this.isHideDuyet = true;
        }
        else {
            this.isHideDuyet = false;
        }
    }
    disableNguoiTaoPhieu(event) {
        if (event) {
            this.isDisabledNguoiTaoPhieu = true;
        }
        else {
            this.isDisabledNguoiTaoPhieu = false;
        }
    }
    GetTrangThaiPhieuLinh(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].View)) {
            let newModel = {
                YeuCauLinhId: id,
                LoaiDuocPhamHayVatTu: this.loai
            };
            self.apiService.post("YeuCauLinhKSNK/GetTrangThaiPhieuLinhKSNK", newModel).subscribe((result) => {
                this.trangThaiVo = result;
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    cancel() {
        let data;
        if (this.trangThaiDanhSach.holdQuery == '0') {
            data = 0;
        }
        if (this.trangThaiDanhSach.holdQuery == '1') {
            data = 1;
        }
        if (this.trangThaiDanhSach.holdQuery == '2') {
            data = 2;
        }
        if (this.trangThaiDanhSach.holdQuery == '3') {
            data = 3;
        }
        if (this.trangThaiDanhSach.holdQuery == '4') {
            data = 4;
        }
        if (this.trangThaiDanhSach.holdQuery == '5') {
            data = 5;
        }
        if (this.trangThaiDanhSach.holdQuery == '6') {
            data = 6;
        }
        if (this.trangThaiDanhSach.holdQuery == '7') {
            data = 7;
        }
        this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk'], { queryParams: { holdQuery: data } });
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
PhieuLinhKSNKThuongGuiLaiComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _phieu_linh_ksnk_thuong_shared_phieu_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_10__["PhieuLinhKSNKThuongSharedComponent"], static: false })
], PhieuLinhKSNKThuongGuiLaiComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], PhieuLinhKSNKThuongGuiLaiComponent.prototype, "keyEvent", null);
PhieuLinhKSNKThuongGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-ksnk-thuong-gui-lai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-ksnk-thuong-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-ksnk-thuong-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.scss")).default]
    })
], PhieuLinhKSNKThuongGuiLaiComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLXRodW9uZy1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxca2llbS1zb2F0LW5oaWVtLWtodWFuXFx5ZXUtY2F1LWxpbmgta3Nua1xccGhpZXUtbGluaC1rc25rLXRodW9uZy1wb3B1cFxccGhpZXUtbGluaC1rc25rLXRodW9uZy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLXRodW9uZy1wb3B1cC9waGlldS1saW5oLWtzbmstdGh1b25nLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL3lldS1jYXUtbGluaC1rc25rL3BoaWV1LWxpbmgta3Nuay10aHVvbmctcG9wdXAvcGhpZXUtbGluaC1rc25rLXRodW9uZy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: PhieuLinhKSNKThuongPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhKSNKThuongPopupComponent", function() { return PhieuLinhKSNKThuongPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let PhieuLinhKSNKThuongPopupComponent = class PhieuLinhKSNKThuongPopupComponent {
    constructor(dialog, sanitizer, dialogRef, data) {
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.src = "";
        this.showNutIn = true;
        this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
        if (this.data.showIn != undefined && this.data.showIn != null) {
            this.showNutIn = this.data.showIn;
        }
    }
    ngOnInit() {
        // this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
    }
    close() {
        this.dialogRef.close();
    }
    getSharedPrintForm() {
        let source = this.data.Model.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
            "<th>PHIẾU LĨNH KNSK</th>" +
            "</p>", "");
        return new Promise(resolve => {
            resolve(source);
            //this.close();
        });
    }
};
PhieuLinhKSNKThuongPopupComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
PhieuLinhKSNKThuongPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-ksnk-thuong-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-ksnk-thuong-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-ksnk-thuong-popup.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PhieuLinhKSNKThuongPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-war-status-grid {\n  color: red;\n  margin-top: 18px;\n  width: auto;\n  height: 15px;\n}\n\nsvg {\n  height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLXRodW9uZy1zaGFyZWQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxceWV1LWNhdS1saW5oLWtzbmtcXHBoaWV1LWxpbmgta3Nuay10aHVvbmctc2hhcmVkXFxwaGlldS1saW5oLWtzbmstdGh1b25nLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLXRodW9uZy1zaGFyZWQvcGhpZXUtbGluaC1rc25rLXRodW9uZy1zaGFyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvcGhpZXUtbGluaC1rc25rLXRodW9uZy1zaGFyZWQvcGhpZXUtbGluaC1rc25rLXRodW9uZy1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi13YXItc3RhdHVzLWdyaWQge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG5zdmcge1xuICBoZWlnaHQ6IDJlbTtcbn0iLCIuaWNvbi13YXItc3RhdHVzLWdyaWQge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG5zdmcge1xuICBoZWlnaHQ6IDJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: PhieuLinhKSNKThuongSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhKSNKThuongSharedComponent", function() { return PhieuLinhKSNKThuongSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/warning */ "./node_modules/@iconify/icons-ic/warning.js");
/* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
















let PhieuLinhKSNKThuongSharedComponent = class PhieuLinhKSNKThuongSharedComponent {
    constructor(apiService, notificationService, authService, ref, route, dialog) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.route = route;
        this.dialog = dialog;
        this.yeuCauLinhKSNK = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_6__["YeuCauLinhKSNK"]();
        this.KSNKGrid = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_6__["YeuCauLinhKSNKChiTiet"]();
        this.lstKSNKGrid = [];
        this.dataKSNKGrid = null;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icWarning = _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.gridColumns = [];
        this.phieuLinhId = null;
        this.isHidden = false;
        this.icDisable = null;
        this.isSelectDuocPham = false;
        this.duocPhamIds = null;
        this.groups = [{ field: 'TenKhoLinh' }];
        this.loai = null;
        this.disableKhiVaoChiTiet = false;
        this.isDaTao = false;
        this.isDuyet = false;
        this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledNguoiTaoPhieu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loaiDuocPhamHayVatTu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dangXuLy = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].TaoYeuCauLinhThuongDuocPham;
        this.yeuCauLinhKSNK = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_6__["YeuCauLinhKSNK"]();
        this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = new Array();
        const valueChiTiet = this.route.snapshot.params.valueChiTiet;
        if (valueChiTiet !== undefined && valueChiTiet !== null) {
            this.disableKhiVaoChiTiet = true;
        }
        const loaiDPVT = this.route.snapshot.params.value;
        if (loaiDPVT != undefined && loaiDPVT != null) {
            this.loai = loaiDPVT;
        }
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.yeuCauLinhKSNK.LaNguoiTaoPhieu = false;
            this.getById(id);
            this.phieuLinhId = id;
        }
        this.getCurrentUser();
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 30, Template: this.STTTemplate },
            {
                Field: 'TenKhoLinh',
                Title: '',
                Width: 150,
                Sortable: true,
                Hidden: true,
                TemplateGroupHeader: this.nhomGroupHeaderTemplate
            },
            { Field: "Nhom", Title: "Loại", Width: 80, ShowTooltip: true },
            { Field: "Ma", Title: "Mã", Width: 80, ShowTooltip: true },
            { Field: "Ten", Title: "DP/VT/KSNk", Width: 120, ShowTooltip: true },
            { Field: "DVT", Title: "ĐVT", Width: 100 },
            { Field: "NhaSX", Title: "Hãng SX", Width: 200 },
            { Field: "NuocSX", Title: "Nước SX", Width: 120 },
            { Field: "SLTon", Title: "SL Tồn", Width: 120, Hidden: !this.isCreate },
            // { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Hidden: this.isCreate },
            { Field: "SLYeuCau", Title: "SL Yêu Cầu", Width: 120, Template: this.slYeuCauTemplate },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
        ];
    }
    getCurrentUser() {
        this.KSNKGrid.LoaiVatTu = 1;
        if (this.yeuCauLinhKSNK.LaNguoiTaoPhieu == null) {
            if (this.isCreate) {
                this.yeuCauLinhKSNK.NgayYeuCau = new Date();
            }
            this.apiService.get("YeuCauLinhKSNK/GetCurrentUserKSNK").subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.yeuCauLinhKSNK.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                    this.yeuCauLinhKSNK.HoTenNguoiYeuCau = resultData.HoTen;
                }
            });
        }
    }
    chonKSNK(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.KSNKGrid.Ten = dataItem.Ten;
            this.KSNKGrid.Ma = dataItem.Ma;
            this.KSNKGrid.SLTon = dataItem.SLTon;
            this.KSNKGrid.DVT = dataItem.DVT;
            this.KSNKGrid.NhaSX = dataItem.NhaSanXuat;
            this.KSNKGrid.NuocSX = dataItem.NuocSanXuat;
            this.KSNKGrid.LaVatTuBHYT = dataItem.LaVatTuBHYT;
            this.KSNKGrid.LoaiDuocPhamHayVatTu = dataItem.LoaiDuocPhamHayVatTu;
        }
        else {
            this.validationErrors = [];
            this.KSNKGrid.Ten = null;
            this.KSNKGrid.Ma = null;
            this.KSNKGrid.SLTon = null;
            this.KSNKGrid.SLYeuCau = null;
            this.KSNKGrid.DVT = null;
            this.KSNKGrid.NhaSX = null;
            this.KSNKGrid.NuocSX = null;
            this.KSNKGrid.LaVatTuBHYT = null;
            this.KSNKGrid.LoaiDuocPhamHayVatTu = null;
        }
    }
    getArrayKSNKBenhVienId() {
        this.KSNKGrid.VatTuBenhViens = new Array();
        this.lstKSNKGrid.forEach(element => {
            let KSNKBenhVien = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_6__["KSNKGridViewModelValidator"]();
            KSNKBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
            KSNKBenhVien.LaVatTuBHYT = element.LaVatTuBHYT;
            this.KSNKGrid.VatTuBenhViens.push(KSNKBenhVien);
            console.log("data BenhViens: ", this.KSNKGrid.VatTuBenhViens);
        });
    }
    themKSNK() {
        var self = this;
        //self.getArrayKSNKBenhVienId();
        self.validationErrors = [];
        self.validationErrorsLinhThuong = [];
        self.ref.detectChanges();
        if (self.KSNKGrid.LoaiVatTu == 1) {
            self.KSNKGrid.LaVatTuBHYT = false;
        }
        else {
            self.KSNKGrid.LaVatTuBHYT = true;
        }
        self.KSNKGrid.TenKhoLinh = this.yeuCauLinhKSNK.TenKhoXuat;
        self.KSNKGrid.KhoXuatId = self.yeuCauLinhKSNK.KhoXuatId;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add)) {
            if (this.dangXuLy)
                return;
            this.dangXuLy = true;
            self.apiService.post("YeuCauLinhKSNK/ThemLinhThuongKSNKGridVo", self.KSNKGrid).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    self.lstKSNKGrid.push(resultData);
                    self.setValueForGridKSNK();
                    self.huy();
                }
                self.dangXuLy = false;
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.dangXuLy = false;
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    setValueForGridKSNK() {
        //this.lstKSNKGrid = this.lstKSNKGrid.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT|| a.Ten > b.Ten) ? 1 : -1)
        this.gridDataSource = {
            data: this.lstKSNKGrid,
            total: this.lstKSNKGrid.length
        };
        let STT = 1;
        this.lstKSNKGrid.forEach(element => {
            element.STT = STT;
            STT++;
        });
        this.getArrayKSNKBenhVienId();
        this.gridKSNK.gridDataSource = this.gridDataSource;
        this.gridKSNK.setDataSource();
        this.pushDataKSNK();
        console.log("this.list: ", this.lstKSNKGrid);
        if (this.lstKSNKGrid.length > 0) {
            this.hideDuyetbtn.emit(true);
            this.icDisable = true;
        }
        else {
            this.hideDuyetbtn.emit(false);
            this.icDisable = false;
        }
        //console.log(this.icDisable)
    }
    pushDataKSNK() {
        this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = new Array();
        this.lstKSNKGrid.forEach(obj => {
            let model = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_6__["YeuCauLinhKSNKChiTiet"]();
            model.YeuCauLinhVatTuId = obj.YeuCauLinhVatTuId;
            model.VatTuBenhVienId = obj.VatTuBenhVienId;
            model.LaVatTuBHYT = obj.LaVatTuBHYT;
            model.SoLuong = obj.SLYeuCau;
            model.Nhom = obj.Nhom;
            model.SoLuongCoTheXuat = obj.SoLuongCoTheXuat;
            model.STT = obj.STT;
            model.SLTon = obj.SLTon;
            model.SLYeuCau = obj.SLYeuCau;
            model.KhoXuatId = obj.KhoXuatId;
            model.LoaiDuocPhamHayVatTu = obj.LoaiDuocPhamHayVatTu;
            model.Id = obj.Id;
            this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.push(model);
        });
    }
    xoaKSNK(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.lstKSNKGrid.splice(this.lstKSNKGrid.findIndex((x) => x == dataItem), 1);
                this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                this.validationErrorsLinhThuong = [];
                this.setValueForGridKSNK();
            }
        });
    }
    huy() {
        this.validationErrors = [];
        this.KSNKGrid.Ten = null;
        this.KSNKGrid.VatTuBenhVienId = null;
        this.KSNKGrid.SLTon = null;
        this.KSNKGrid.SLYeuCau = null;
        this.KSNKGrid.DVT = null;
        this.KSNKGrid.NhaSX = null;
        this.KSNKGrid.NuocSX = null;
        this.KSNKGrid.LaVatTuBHYT = null;
        this.KSNKGrid.LoaiDuocPhamHayVatTu = null;
    }
    clearGridKSNK() {
        this.huy();
        this.lstKSNKGrid = [];
        this.gridDataSource = {
            data: this.lstKSNKGrid,
            total: 0
        };
        this.gridKSNK.gridDataSource = this.gridDataSource;
        this.gridKSNK.setDataSource();
        this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets = [];
    }
    getById(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View)) {
            let model = {
                YeuCauLinhId: id,
                LoaiDuocPhamHayVatTu: this.loai
            };
            self.apiService.post("YeuCauLinhKSNK/GetPhieuLinhThuongKSNK", model).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.yeuCauLinhKSNK = resultData;
                    if (this.yeuCauLinhKSNK.LaNguoiTaoPhieu) {
                        this.disabledNguoiTaoPhieu.emit(true);
                    }
                    else {
                        this.disabledNguoiTaoPhieu.emit(false);
                    }
                    // if (this.yeuCauLinhKSNK.DuocDuyet == null) {
                    //   this.isCreate = true;
                    // }
                    this.lstKSNKGrid = [];
                    resultData.YeuCauLinhVatTuChiTiets.forEach(element => {
                        this.lstKSNKGrid.push(element);
                    });
                    //this.getArrayKSNKBenhVienId();
                    this.setValueForGridKSNK();
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    getSharedData() {
        this.setValueForGridKSNK();
        this.yeuCauLinhKSNK.YeuCauLinhVatTuChiTiets.forEach(element => {
            if (element.SoLuongCoTheXuat == undefined || element.SoLuongCoTheXuat == null) {
                element.IsValidator = false;
            }
        });
        return this.yeuCauLinhKSNK;
    }
    onKey(event) {
        if (event.key == "Enter") {
            if (this.isSelectDuocPham != true) {
                this.themKSNK();
            }
            else {
                this.isSelectDuocPham = false;
            }
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
};
PhieuLinhKSNKThuongSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], PhieuLinhKSNKThuongSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], PhieuLinhKSNKThuongSharedComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridKSNK', { static: true })
], PhieuLinhKSNKThuongSharedComponent.prototype, "gridKSNK", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], PhieuLinhKSNKThuongSharedComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauTemplate', { static: true })
], PhieuLinhKSNKThuongSharedComponent.prototype, "slYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhKSNKThuongSharedComponent.prototype, "isDaTao", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhKSNKThuongSharedComponent.prototype, "trangThaiVo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhKSNKThuongSharedComponent.prototype, "validationErrorsLinhThuong", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhKSNKThuongSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhKSNKThuongSharedComponent.prototype, "isDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhKSNKThuongSharedComponent.prototype, "hideDuyetbtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhKSNKThuongSharedComponent.prototype, "disabledNguoiTaoPhieu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhKSNKThuongSharedComponent.prototype, "loaiDuocPhamHayVatTu", void 0);
PhieuLinhKSNKThuongSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-ksnk-thuong-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-ksnk-thuong-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-ksnk-thuong-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.scss")).default]
    })
], PhieuLinhKSNKThuongSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component.scss ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL3lldS1jYXUtbGluaC1rc25rL3BvcHVwLXRob25nLWJhby1rc25rLWtob25nLXRoZS10YW8vcG9wdXAtdGhvbmctYmFvLWtzbmsta2hvbmctdGhlLXRhby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: PopupThongBaoVtKhongTheTaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupThongBaoVtKhongTheTaoComponent", function() { return PopupThongBaoVtKhongTheTaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let PopupThongBaoVtKhongTheTaoComponent = class PopupThongBaoVtKhongTheTaoComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.gridColumns = [];
    }
    ngOnInit() {
        if (this.data != undefined) {
            this.data.forEach(element => {
            });
            this.gridDataSource = {
                data: this.data,
                total: this.data.length
            };
        }
        this.gridColumns = [
            { Field: "TenVatTu", Title: "Tên", Width: 100 },
            { Field: "SoLuongTon", Title: "Tồn", Width: 100 },
            { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 100 },
        ];
    }
    Khong(item) {
        if (item != undefined && item != null && item != "") {
            this.close();
        }
    }
    close() {
        this.dialogRef.close();
    }
    Co(item) {
        if (item != undefined && item != null && item != "") {
            this.dialogRef.close(item);
        }
    }
};
PopupThongBaoVtKhongTheTaoComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
PopupThongBaoVtKhongTheTaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-thong-bao-ksnk-khong-the-tao',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-thong-bao-ksnk-khong-the-tao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-thong-bao-ksnk-khong-the-tao.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], PopupThongBaoVtKhongTheTaoComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvdGFvLXBoaWV1LWxpbmgta3Nuay1idS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxca2llbS1zb2F0LW5oaWVtLWtodWFuXFx5ZXUtY2F1LWxpbmgta3Nua1xcdGFvLXBoaWV1LWxpbmgta3Nuay1idVxcdGFvLXBoaWV1LWxpbmgta3Nuay1idS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvdGFvLXBoaWV1LWxpbmgta3Nuay1idS90YW8tcGhpZXUtbGluaC1rc25rLWJ1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvdGFvLXBoaWV1LWxpbmgta3Nuay1idS90YW8tcGhpZXUtbGluaC1rc25rLWJ1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: TaoPhieuLinhKSNKBuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoPhieuLinhKSNKBuComponent", function() { return TaoPhieuLinhKSNKBuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _phieu_linh_ksnk_bu_gui_lai_shared_phieu_linh_ksnk_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.ts");
/* harmony import */ var src_vex_services_url_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/@vex/services/url.service */ "./src/@vex/services/url.service.ts");




















let TaoPhieuLinhKSNKBuComponent = class TaoPhieuLinhKSNKBuComponent {
    constructor(apiService, dialog, notificationService, authService, router, ref, location, urlService, route) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.location = location;
        this.urlService = urlService;
        this.route = route;
        this.yeuCauLinhBuKSNK = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauLinhKSNK"]();
        this.isCreate = false;
        this.hostingName = null;
        this.trangThaiPhieuLinh = null;
        this.inPhieuLinhThuong = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuong"]();
        this.inPhieuLinhThuongs = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongs"]();
        this.loading = false;
        this.flag = true;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].TaoYeuCauLinhBuKSNK;
        this.route
            .queryParams
            .subscribe(v => {
            this.stringJson = v;
            this.khoLinhId = this.stringJson.KhoLinhId;
            this.khoLinhBuId = this.stringJson.KhoBuId;
        });
        if (window.location.protocol == "http:") {
            this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
        }
        if (window.location.protocol == "http:") {
            this.inPhieuLinhThuongs.HostingName = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhThuongs.HostingName = "https://" + window.location.host;
        }
        this.urlService.previousUrl$
            .subscribe((previousUrl) => {
            this.previousUrl = previousUrl;
        });
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    loadingPageHoanThanh() {
        this.popupLoadingDataHoanThanh = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingDataHoanThanh() {
        if (this.popupLoadingDataHoanThanh != undefined && this.popupLoadingDataHoanThanh != null) {
            this.popupLoadingDataHoanThanh.close();
        }
    }
    luuPhieuLinhKSNK(daGui) {
        var self = this;
        self.yeuCauLinhBuKSNK = self.shared.getSharedData();
        if (self.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
            if (daGui) {
                self.notificationService.showError("Vui lòng chọn ksnk muốn gửi phiếu.");
            }
            else {
                self.notificationService.showError("Vui lòng chọn ksnk muốn lưu phiếu.");
            }
        }
        else {
            var mess = "";
            if (daGui) {
                mess = "Bạn có muốn gửi phiếu lĩnh ksnk này không ?";
            }
            else {
                mess = "Bạn có muốn lưu phiếu lĩnh ksnk này không ?";
            }
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: mess,
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (daGui) {
                        self.xacNhanTaoPhieuLinh();
                    }
                    else {
                        self.xacNhanLuuPhieuLinh();
                    }
                }
            });
        }
    }
    xacNhanTaoPhieuLinh() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
            self.yeuCauLinhBuKSNK.DaGui = true;
            self.loadingPage();
            self.apiService.post("YeuCauLinhKSNK/GuiPhieuLinhBuKSNK", self.yeuCauLinhBuKSNK).subscribe((result) => {
                if (result != undefined && result != null) {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Tạo phiếu lĩnh"]));
                    self.closePopupLoadingData();
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn in phiếu lĩnh ksnk này không ?",
                        },
                    }).afterClosed().subscribe((res) => {
                        if (res == "Yes") {
                            self.loadingPageHoanThanh();
                            self.inPhieuLinhThuongs.Header = true;
                            self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = result;
                            self.inPhieuLinhThuongs.LoaiPhieuLinh = 2;
                            self.apiService.post("YeuCauLinhKSNK/InPhieuLinhBuKSNK", self.inPhieuLinhThuongs).subscribe(resData => {
                                if (resData != undefined && resData != null) {
                                    self.closePopupLoadingDataHoanThanh();
                                    self.inPhieuLinhThuong.Header = false;
                                    self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhKSNKThuongPopupComponent"], {
                                        disableClose: false,
                                        width: '1200px',
                                        data: { Model: resData },
                                    }).afterClosed().subscribe(() => {
                                        self.closePopupLoadingDataHoanThanh();
                                        self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
                                    });
                                }
                            }, (err) => {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                                self.closePopupLoadingDataHoanThanh();
                            });
                        }
                        else {
                            this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
                        }
                    });
                }
                // self.closePopupLoadingData();
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xacNhanLuuPhieuLinh() {
        debugger;
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
            self.loadingPage();
            self.apiService.post("YeuCauLinhKSNK/GuiPhieuLinhBuKSNK", self.yeuCauLinhBuKSNK).subscribe((result) => {
                if (result != undefined && result != null) {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Tạo phiếu lĩnh"]));
                    self.closePopupLoadingData();
                    self.router.navigate(["/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/gui-lai-phieu-linh-ksnk-bu/" + result[0].YeuCauLinhVatTuId]);
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    cancel() {
        this.location.back();
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
    XemPhieuLinh() {
        var self = this;
        self.yeuCauLinhBuKSNK = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
            if (self.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
                self.notificationService.showError("Vui lòng chọn ksnk muốn xem phiếu.");
            }
            else {
                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                    disableClose: false,
                    width: "500px",
                    data: {
                        Title: "Xác nhận",
                        Message: "Bạn có muốn in phiếu lĩnh ksnk này không ?",
                    },
                }).afterClosed().subscribe((res) => {
                    if (res == "Yes") {
                        self.loadingPageHoanThanh();
                        let dataIn = {
                            KhoLinhId: this.khoLinhId,
                            KhoLinhBuId: this.khoLinhBuId,
                            HostingName: "http://" + window.location.host,
                            YeuCauVatTuBenhViens: self.yeuCauLinhBuKSNK.YeuCauVatTuBenhViens.filter(d => d.CheckBox)
                        };
                        self.apiService.post("YeuCauLinhKSNK/InPhieuLinhBuKSNKXemTruoc", dataIn).subscribe(resData => {
                            if (resData != undefined && resData != null) {
                                self.closePopupLoadingDataHoanThanh();
                                self.inPhieuLinhThuong.Header = false;
                                self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhKSNKThuongPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: { Model: resData, showIn: false },
                                }).afterClosed().subscribe(() => {
                                });
                            }
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                    }
                });
            }
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
TaoPhieuLinhKSNKBuComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_vex_services_url_service__WEBPACK_IMPORTED_MODULE_19__["UrlService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_phieu_linh_ksnk_bu_gui_lai_shared_phieu_linh_ksnk_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_4__["PhieuLinhKSNKBuGuiLaiSharedComponent"], { static: true })
], TaoPhieuLinhKSNKBuComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], TaoPhieuLinhKSNKBuComponent.prototype, "keyEvent", null);
TaoPhieuLinhKSNKBuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tao-phieu-linh-ksnk-bu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tao-phieu-linh-ksnk-bu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tao-phieu-linh-ksnk-bu.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.scss")).default]
    })
], TaoPhieuLinhKSNKBuComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvdGFvLXBoaWV1LWxpbmgta3Nuay10aHVvbmcvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxceWV1LWNhdS1saW5oLWtzbmtcXHRhby1waGlldS1saW5oLWtzbmstdGh1b25nXFx0YW8tcGhpZXUtbGluaC1rc25rLXRodW9uZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veWV1LWNhdS1saW5oLWtzbmsvdGFvLXBoaWV1LWxpbmgta3Nuay10aHVvbmcvdGFvLXBoaWV1LWxpbmgta3Nuay10aHVvbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi95ZXUtY2F1LWxpbmgta3Nuay90YW8tcGhpZXUtbGluaC1rc25rLXRodW9uZy90YW8tcGhpZXUtbGluaC1rc25rLXRodW9uZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59IiwiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: TaoPhieuLinhKSNKThuongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoPhieuLinhKSNKThuongComponent", function() { return TaoPhieuLinhKSNKThuongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _phieu_linh_ksnk_thuong_shared_phieu_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../yeu-cau-linh-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.ts");


















let TaoPhieuLinhKSNKThuongComponent = class TaoPhieuLinhKSNKThuongComponent {
    constructor(apiService, dialog, notificationService, authService, router, ref) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.yeuCauLinhThuongKSNK = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_12__["YeuCauLinhKSNK"]();
        this.isCreate = false;
        this.hostingName = null;
        this.trangThaiPhieuLinh = null;
        this.inPhieuLinhThuong = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_12__["PhieuLinhKSNKThuong"]();
        this.inPhieuLinhThuongs = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_12__["PhieuLinhKSNKThuongs"]();
        this.trangThaiVo = new _yeu_cau_linh_ksnk_model__WEBPACK_IMPORTED_MODULE_12__["TrangThaiTaoPhieuLinh"]();
        this.loading = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__["DocumentType"].TaoYeuCauLinhThuongKSNK;
        if (window.location.protocol == "http:") {
            this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
        }
        this.trangThaiVo.TrangThai = null;
        if (window.location.protocol == "http:") {
            this.inPhieuLinhThuongs.HostingName = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhThuongs.HostingName = "https://" + window.location.host;
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    luuPhieuLinhThuongKSNK() {
        var self = this;
        self.yeuCauLinhThuongKSNK = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn lưu phiếu lĩnh ksnk này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
                    self.loadingPage();
                    self.yeuCauLinhThuongKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhThuongKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                    self.apiService.post("YeuCauLinhKSNK/GuiPhieuLinhThuongKSNK", self.yeuCauLinhThuongKSNK).subscribe((result) => {
                        if (result != undefined && result != null && result[0] != undefined && result[0] != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            self.closePopupLoadingData();
                            self.router.navigate(["/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/gui-lai-phieu-linh-ksnk-thuong/" + result[0].YeuCauLinhVatTuId + "/" + result[0].LoaiDuocPhamHayVatTu + "/true"]);
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    guiPhieuLinhThuongKSNK() {
        var self = this;
        self.yeuCauLinhThuongKSNK = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn gửi phiếu lĩnh dược phẩm này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
                    self.loadingPage();
                    self.yeuCauLinhThuongKSNK.DaGui = true;
                    self.yeuCauLinhThuongKSNK.YeuCauLinhVatTuChiTiets = self.yeuCauLinhThuongKSNK.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT) ? 1 : -1);
                    self.apiService.post("YeuCauLinhKSNK/GuiPhieuLinhThuongKSNK", self.yeuCauLinhThuongKSNK).subscribe((result) => {
                        if (result != undefined && result != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            self.closePopupLoadingData();
                            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                                disableClose: false,
                                width: "500px",
                                data: {
                                    Title: "Xác nhận",
                                    Message: "Bạn có muốn in phiếu phiếu lĩnh vật tư này không ?",
                                },
                            }).afterClosed().subscribe((res) => {
                                if (res == "Yes") {
                                    self.loadingPage();
                                    self.inPhieuLinhThuongs.Header = true;
                                    self.inPhieuLinhThuongs.YeuCauLinhVatTuIds = result;
                                    self.inPhieuLinhThuongs.LoaiPhieuLinh = 1;
                                    self.apiService.post("YeuCauLinhKSNK/InPhieuLinhThuongKSNK", self.inPhieuLinhThuongs).subscribe(resData => {
                                        if (resData != undefined && resData != null) {
                                            self.closePopupLoadingData();
                                            self.inPhieuLinhThuong.Header = false;
                                            self.dialog.open(_phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhKSNKThuongPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Model: resData },
                                            }).afterClosed().subscribe(() => {
                                                self.closePopupLoadingData();
                                                self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
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
                                else {
                                    self.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
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
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    cancel() {
        this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk']);
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
TaoPhieuLinhKSNKThuongComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_phieu_linh_ksnk_thuong_shared_phieu_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_2__["PhieuLinhKSNKThuongSharedComponent"], { static: true })
], TaoPhieuLinhKSNKThuongComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], TaoPhieuLinhKSNKThuongComponent.prototype, "keyEvent", null);
TaoPhieuLinhKSNKThuongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tao-phieu-linh-ksnk-thuong',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tao-phieu-linh-ksnk-thuong.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tao-phieu-linh-ksnk-thuong.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.scss")).default]
    })
], TaoPhieuLinhKSNKThuongComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk-routing.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: YeuCauLinhKSNKRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhKSNKRoutingModule", function() { return YeuCauLinhKSNKRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _danh_sach_yeu_cau_linh_ksnk_danh_sach_yeu_cau_linh_ksnk_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _tao_phieu_linh_ksnk_thuong_tao_phieu_linh_ksnk_thuong_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.ts");
/* harmony import */ var _tao_phieu_linh_ksnk_bu_tao_phieu_linh_ksnk_bu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_gui_lai_phieu_linh_ksnk_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.ts");
/* harmony import */ var _phieu_linh_ksnk_bu_gui_lai_phieu_linh_ksnk_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.ts");











const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _danh_sach_yeu_cau_linh_ksnk_danh_sach_yeu_cau_linh_ksnk_component__WEBPACK_IMPORTED_MODULE_3__["DanhSachYeuCauLinhKSNKComponent"],
        data: {
            title: 'Danh Sách Yêu Cầu Lĩnh Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachYeuCauLinhKSNK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'tao-phieu-linh-ksnk-thuong',
        component: _tao_phieu_linh_ksnk_thuong_tao_phieu_linh_ksnk_thuong_component__WEBPACK_IMPORTED_MODULE_7__["TaoPhieuLinhKSNKThuongComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhThuongKSNK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'tao-phieu-linh-ksnk-bu',
        component: _tao_phieu_linh_ksnk_bu_tao_phieu_linh_ksnk_bu_component__WEBPACK_IMPORTED_MODULE_8__["TaoPhieuLinhKSNKBuComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Bù Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhThuongKSNK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'gui-lai-phieu-linh-ksnk-thuong/:id/:value/:valueChiTiet',
        component: _phieu_linh_ksnk_thuong_gui_lai_phieu_linh_ksnk_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_9__["PhieuLinhKSNKThuongGuiLaiComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhThuongKSNK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'gui-lai-phieu-linh-ksnk-bu/:id/:value',
        component: _phieu_linh_ksnk_bu_gui_lai_phieu_linh_ksnk_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_10__["PhieuLinhKSNKBuGuiLaiComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Bù Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhBuKSNK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    }
];
let YeuCauLinhKSNKRoutingModule = class YeuCauLinhKSNKRoutingModule {
};
YeuCauLinhKSNKRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], YeuCauLinhKSNKRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: YeuCauLinhKSNKModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhKSNKModule", function() { return YeuCauLinhKSNKModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _yeu_cau_linh_ksnk_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yeu-cau-linh-ksnk-routing.module */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk-routing.module.ts");
/* harmony import */ var _danh_sach_yeu_cau_linh_ksnk_danh_sach_yeu_cau_linh_ksnk_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component.ts");
/* harmony import */ var _phieu_linh_ksnk_bu_gui_lai_phieu_linh_ksnk_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component.ts");
/* harmony import */ var _phieu_linh_ksnk_bu_gui_lai_shared_phieu_linh_ksnk_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-bu-gui-lai-shared/phieu-linh-ksnk-bu-gui-lai-shared.component.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_gui_lai_phieu_linh_ksnk_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_shared_phieu_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-shared/phieu-linh-ksnk-thuong-shared.component.ts");
/* harmony import */ var _tao_phieu_linh_ksnk_bu_tao_phieu_linh_ksnk_bu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component.ts");
/* harmony import */ var _tao_phieu_linh_ksnk_thuong_tao_phieu_linh_ksnk_thuong_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _in_linh_ksnk_in_linh_ksnk_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./in-linh-ksnk/in-linh-ksnk.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/in-linh-ksnk/in-linh-ksnk.component.ts");
/* harmony import */ var _phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/phieu-linh-ksnk-thuong-popup/phieu-linh-ksnk-thuong-popup.component.ts");
/* harmony import */ var _popup_thong_bao_ksnk_khong_the_tao_popup_thong_bao_ksnk_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/popup-thong-bao-ksnk-khong-the-tao/popup-thong-bao-ksnk-khong-the-tao.component.ts");























let YeuCauLinhKSNKModule = class YeuCauLinhKSNKModule {
};
YeuCauLinhKSNKModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _danh_sach_yeu_cau_linh_ksnk_danh_sach_yeu_cau_linh_ksnk_component__WEBPACK_IMPORTED_MODULE_4__["DanhSachYeuCauLinhKSNKComponent"],
            _phieu_linh_ksnk_bu_gui_lai_phieu_linh_ksnk_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_5__["PhieuLinhKSNKBuGuiLaiComponent"],
            _phieu_linh_ksnk_bu_gui_lai_shared_phieu_linh_ksnk_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_6__["PhieuLinhKSNKBuGuiLaiSharedComponent"],
            _phieu_linh_ksnk_thuong_gui_lai_phieu_linh_ksnk_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_7__["PhieuLinhKSNKThuongGuiLaiComponent"],
            _phieu_linh_ksnk_thuong_shared_phieu_linh_ksnk_thuong_shared_component__WEBPACK_IMPORTED_MODULE_8__["PhieuLinhKSNKThuongSharedComponent"],
            _tao_phieu_linh_ksnk_bu_tao_phieu_linh_ksnk_bu_component__WEBPACK_IMPORTED_MODULE_9__["TaoPhieuLinhKSNKBuComponent"],
            _tao_phieu_linh_ksnk_thuong_tao_phieu_linh_ksnk_thuong_component__WEBPACK_IMPORTED_MODULE_10__["TaoPhieuLinhKSNKThuongComponent"],
            _in_linh_ksnk_in_linh_ksnk_component__WEBPACK_IMPORTED_MODULE_20__["InLinhKSNKComponent"], _phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_21__["PhieuLinhKSNKThuongPopupComponent"], _popup_thong_bao_ksnk_khong_the_tao_popup_thong_bao_ksnk_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_22__["PopupThongBaoVtKhongTheTaoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_16__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _yeu_cau_linh_ksnk_routing_module__WEBPACK_IMPORTED_MODULE_3__["YeuCauLinhKSNKRoutingModule"]
        ],
        entryComponents: [
            src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"],
            _phieu_linh_ksnk_thuong_popup_phieu_linh_ksnk_thuong_popup_component__WEBPACK_IMPORTED_MODULE_21__["PhieuLinhKSNKThuongPopupComponent"],
            _in_linh_ksnk_in_linh_ksnk_component__WEBPACK_IMPORTED_MODULE_20__["InLinhKSNKComponent"],
            _popup_thong_bao_ksnk_khong_the_tao_popup_thong_bao_ksnk_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_22__["PopupThongBaoVtKhongTheTaoComponent"]
        ]
    })
], YeuCauLinhKSNKModule);



/***/ }),

/***/ "./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts ***!
  \*******************************************************/
/*! exports provided: EnumLoaiPhieuLinh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumLoaiPhieuLinh", function() { return EnumLoaiPhieuLinh; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EnumLoaiPhieuLinh;
(function (EnumLoaiPhieuLinh) {
    EnumLoaiPhieuLinh[EnumLoaiPhieuLinh["LinhDuTru"] = 1] = "LinhDuTru";
    EnumLoaiPhieuLinh[EnumLoaiPhieuLinh["LinhBu"] = 2] = "LinhBu";
    EnumLoaiPhieuLinh[EnumLoaiPhieuLinh["LinhChoBenhNhan"] = 3] = "LinhChoBenhNhan";
})(EnumLoaiPhieuLinh || (EnumLoaiPhieuLinh = {}));


/***/ })

}]);
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-yeu-cau-linh-ksnk-yeu-cau-linh-ksnk-module-es2015.js.map