(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-vat-tu-yeu-cau-linh-vat-tu-yeu-cau-linh-vat-tu-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Vật tư',Path:''}\n            ,{Title:'Dự trù lĩnh',Path:''}\n            ,{Title:'Yêu cầu lĩnh vật tư',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [checkboxAble]=\"false\" pageSize=\"50\" urlGetData=\"YeuCauLinhVatTu/GetDataDSLinhVatTuForGridAsync\"\n                urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSLinhVatTuForGridAsync\" [detailTemplate]=\"detailTemplate\"\n                [allowSortDefault]=\"true\">\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,1)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachDaChoGoi\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đang chờ gởi\">\n                    </app-checkbox>\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,2)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachDangChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đang chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,3)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachTuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Từ chối duyệt\">\n                    </app-checkbox>\n                    <app-checkbox name=\"dang-thanh-toan\" (modelChange)=\"checkTrangThaiDCT($event,4)\" class=\"ml-2\"\n                        [(model)]=\"kiemTraDanhSachDaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" value=\"dangthanhtoan\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n\n                    <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"searchChanges()\"\n                            placeholder=\"Nhập từ khóa(Người yêu cầu,Lĩnh từ kho,Lĩnh về kho,Người duyệt)\" />\n                    </div>\n                    <span fxFlex=\"5px\"></span>\n                    <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" class=\"mt-1 on-header\" (blur)=\"blur($event)\"\n                        [(model)]=\"timKiemTuNgay.NgayYeuCauRangDate\" label=\"Yêu cầu từ ngày - đến ngày\"\n                        (keyup)=\"onKeyDateRange($event)\" (modelChange)=\"changRange($event)\">\n                    </app-daterangepicker>\n                    <span fxFlex=\"5px\"></span>\n                    <app-daterangepicker id=\"Daterange\" fxFlex=\"250px\" label=\"Duyệt từ ngày - đến ngày\"\n                        class=\"mt-1 on-header\" (blur)=\"blur($event)\" (keyup)=\"onKeyDateRange($event)\"\n                        [(model)]=\"timKiemTuNgay.NgayDuyetRangDate\" (modelChange)=\"changRange($event)\">\n                    </app-daterangepicker>\n                    <!-- <button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\"\n                    mat-raised-button>Tìm</button> -->\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                        (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" style=\"margin-left: auto;\" fxFlex=\"none\" class=\"mr-2\"\n                        mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                    <button (click)=\"exportExcel()\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <button [matMenuTriggerFor]=\"taoPhieuLinh\" class=\"ml-3 mr-2\" color=\"primary\" fxFlex=\"none\"\n                        mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n\n                    <mat-menu #taoPhieuLinh xPosition=\"after\" yPosition=\"below\">\n                        <button mat-menu-item\n                            (click)=\"gridChild.navigate('/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong',154,3)\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                            <span>Tạo phiếu lĩnh dự trù</span>\n                        </button>\n                        <button mat-menu-item (click)=\"gridChild.navigate('/nhap-xuat/vat-tu/vat-tu-can-bu',155,3)\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                            <span>Tạo phiếu lĩnh bù</span>\n                        </button>\n                        <button mat-menu-item\n                            (click)=\"gridChild.navigate('/nhap-xuat/vat-tu/vat-tu-can-linh-truc-tiep',156,3)\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                            <span>Tạo phiếu lĩnh trực tiếp</span>\n                        </button>\n                    </mat-menu>\n\n                </div>\n            </ng-template>\n            <!-- <ng-template #detailTemplate let-dataItem>\n            <app-grid baseRoute=\"\" [gridColumns]=\"gridChild\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                [urlGetData]=\"urlGetDataChild\" [additionalSearchString]=\"dataItem.Id\" [autoHeight]=\"true\" [pageable]=\"false\">\n            </app-grid>\n        </ng-template> -->\n\n            <ng-template #ngayYeuCauTemplate let-dataItem>\n                {{dataItem.NgayYeuCauHienThi}}\n            </ng-template>\n            <ng-template #ngayDuyetTemplate let-dataItem>\n                {{dataItem.NgayDuyetHienThi}}\n            </ng-template>\n            <ng-template #actionTemplate let-dataItem>\n                <div kendoTooltip>\n                    <button type=\"button\" mat-raised-button mat-button\n                        (click)=\"Xem(dataItem.Id, dataItem.LoaiPhieuLinh,dataItem.DaGui)\" style=\"margin: 1px;\">\n                        Xem chi tiết\n                    </button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button (click)=\"InPhieuLinh(dataItem)\"\n                        style=\"margin: 1px;\" *ngIf=\"dataItem.DuocDuyet != true\">\n                        In phiếu lĩnh\n                    </button>\n                    <button type=\"button\" color=\"warn\" mat-raised-button mat-button (click)=\"Huy(dataItem)\"\n                        style=\"margin: 2px;\" *ngIf=\"dataItem.DuocDuyet != true\">\n                        Hủy\n                    </button>\n                </div>\n            </ng-template>\n            <ng-template #TinhTrangTemplate let-dataItem>\n                <span *ngIf=\"dataItem.DuocDuyet == null\" style=\"color: orange;\">{{dataItem.TinhTrang}}</span>\n                <span *ngIf=\"dataItem.DuocDuyet == false\" style=\"color: red;\">{{dataItem.TinhTrang}}</span>\n                <span *ngIf=\"dataItem.DuocDuyet == true\" style=\"color: green;\">{{dataItem.TinhTrang}}</span>\n            </ng-template>\n            <ng-template #maTNTemplate let-dataItem>\n                <a (click)=\"Xem(dataItem.Id, dataItem.LoaiPhieuLinh,dataItem.DaGui)\">{{dataItem.MaPL}}</a>\n            </ng-template>\n            <ng-template #groupTemplate let-dataItem>\n                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                    [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"Huy(dataItem)\" mat-menu-item *ngIf=\"dataItem.DuocDuyet == null\">\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                        <button (click)=\"InPhieuLinh(dataItem)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n            <ng-template #detailTemplate let-dataItem>\n                <!-- 1 linh du tru null ,(true,fale)-> # null-->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruChuaDuyetColumns\" *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet == null\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhVatTu/GetDataDSDuyetLinhVatTuChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSLinhVatTuChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhDuTruDaDuyetColumns\" *ngIf=\"dataItem.LoaiPhieuLinh == 1 && dataItem.DuocDuyet != null\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhVatTu/GetDataDSDuyetLinhVatTuChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSLinhVatTuChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\" [groups]=\"groups\">\n                </app-grid>\n               <!-- end linh du tru null ,(true,fale)-> # null-->\n\n                <!-- 2 linh bu -->\n                <!-- cho duyet -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == null\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhVatTu/GetDataDSDuyetLinhVatTuChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSLinhVatTuChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\"  [detailTemplate]=\"detailTemplateVatTuLinhBu\">\n                </app-grid>\n                <!-- da duyet -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuDaDuyetColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == true\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhVatTu/GetDataDSDuyetLinhVatTuChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSLinhVatTuChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\"  [detailTemplate]=\"detailTemplateVatTuLinhBu\">\n                </app-grid>\n                <!-- tù chối -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBuTuChoiColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 2 && dataItem.DuocDuyet == false\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhVatTu/GetDataDSDuyetLinhVatTuChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSLinhVatTuChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}\"\n                    [autoHeight]=\"true\" >\n                </app-grid>\n                <!-- 3 linh người bệnh -->\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildLinhBenhNhanColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 3 && dataItem.DuocDuyet !=false\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhVatTu/GetDataDSDuyetLinhVatTuChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSLinhVatTuChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.DuocDuyet}}\"\n                    [autoHeight]=\"true\" [detailTemplate]=\"detailTemplateDuocPhamLinhBenhNhan\">\n                </app-grid>\n                <app-grid baseRoute=\"\" [gridColumns]=\"gridChildChildLinhBenhNhanTuChoiColumns\"\n                    *ngIf=\"dataItem.LoaiPhieuLinh == 3 && dataItem.DuocDuyet ==false\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhVatTu/GetDataDSDuyetLinhVatTuChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSLinhVatTuChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.LinhVeKhoId}}-{{dataItem.DuocDuyet}}\"\n                    [autoHeight]=\"true\" >\n                </app-grid>\n            </ng-template>\n            <!-- child linh người bệnh -->\n            <ng-template #detailTemplateDuocPhamLinhBenhNhan let-dataItem>\n                <app-grid baseRoute=\"\" *ngIf=\"dataItem.DuocDuyet == null\" [gridColumns]=\"gridChildChildLinhBenhNhanColumns\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhVatTu/GetDataDSYeuCauLinhVatTuChildChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSYeuCauLinhVatTuChildChildForGridAsync\" \n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}-{{dataItem.YeuCauTiepNhanId}}-{{dataItem.DuocDuyet}}-{{dataItem.KhoLinhId}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n                <app-grid baseRoute=\"\"  *ngIf=\"dataItem.DuocDuyet != null\" [gridColumns]=\"gridChildChildLinhBenhNhanDaDuyetColumns\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhVatTu/GetDataDSYeuCauLinhVatTuChildChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSYeuCauLinhVatTuChildChildForGridAsync\" \n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.DuocPhamBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhVeKhoId}}-{{dataItem.YeuCauTiepNhanId}}-{{dataItem.DuocDuyet}}-{{dataItem.KhoLinhId}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n            <!-- child linh bu -->\n            <ng-template #detailTemplateVatTuLinhBu let-dataItem>\n\n                <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == null\" [gridColumns]=\"gridChildChildLinhBuColumns\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    urlGetData=\"YeuCauLinhVatTu/GetDataDSDuyetLinhVatTuChildChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSLinhVatTuChildChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.VatTuBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhveKhoId}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n                <app-grid baseRoute=\"\" *ngIf=\"dataItem.DaDuyet == true\"\n                    [gridColumns]=\"gridChildChildLinhBuDaDuyetColumns\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [lazyLoadPage]=\"true\" urlGetData=\"YeuCauLinhVatTu/GetDataDSYeuCauLinhVatTuChildChildForGridAsync\"\n                    urlGetTotalPage=\"YeuCauLinhVatTu/GetTotalPageFDSYeuCauLinhVatTuChildChildForGridAsync\"\n                    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiPhieuLinh}}-{{dataItem.VatTuBenhVienId}}-{{dataItem.LaBHYT}}-{{dataItem.LinhveKhoId}}\"\n                    [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                <strong>{{value}}</strong>\n            </ng-template>\n            <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                {{rowIndex + 1}}\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n    \n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div style=\"width: 100%; height: 40px; background: #005dab;color:#fff;text-align: center;font-size: 23px\"> PHIẾU LĨNH VẬT TƯ</div>\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n    \n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div style=\"width: 100%; height: 40px; background: #005dab;color:#fff;text-align: center;font-size: 23px\"> PHIẾU LĨNH TRỰC TIẾP VẬT TƯ</div>\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.html":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauLinhBuVatTu.LyDoKhongDuyet}}</h4>\n    </div>\n    <!-- [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true ||\n    trangThaiVo.TrangThai == false) || yeuCauLinhBuVatTu.LaNguoiTaoPhieu == false\" -->\n    <app-combobox *ngIf=\"yeuCauLinhBuVatTu.LaNguoiTaoPhieu == false\" id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" url=\"YeuCauLinhVatTu/GetKhoLinhVatTu\" [(model)]=\"yeuCauLinhBuVatTu.KhoXuatId\"\n        [modelText]=\"yeuCauLinhBuVatTu.TenKhoXuat\" label=\"Lĩnh từ kho\" [disabled]=\"true\" class=\"item-no-padding\"\n        (modelChange)=\"linhTuKhoChange($event)\" [bind]=\"true\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"yeuCauLinhBuVatTu.LaNguoiTaoPhieu == false\" id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" [(model)]=\"yeuCauLinhBuVatTu.KhoNhapId\" [modelText]=\"yeuCauLinhBuVatTu.TenKhoNhap\"\n        [disabled]=\"true\" label=\"Lĩnh về kho\" (modelChange)=\"linhVeKhoChange($event)\" class=\"item-no-padding\">\n    </app-combobox>\n\n    <!-- [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\" -->\n    <app-combobox *ngIf=\"yeuCauLinhBuVatTu.LaNguoiTaoPhieu == null || yeuCauLinhBuVatTu.LaNguoiTaoPhieu == true\"\n        id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" url=\"YeuCauLinhVatTu/GetKhoLinhVatTu\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + linhTuKhoId +'}', Take: 50}\"\n        [(model)]=\"yeuCauLinhBuVatTu.KhoXuatId\" [modelText]=\"yeuCauLinhBuVatTu.TenKhoXuat\" label=\"Lĩnh từ kho\"\n        [disabled]=\"true\" class=\"item-no-padding\" (modelChange)=\"linhTuKhoChange($event)\" [bind]=\"true\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhBu\">\n    </app-combobox>\n\n    <!-- [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\" -->\n    <app-combobox *ngIf=\"yeuCauLinhBuVatTu.LaNguoiTaoPhieu == null || yeuCauLinhBuVatTu.LaNguoiTaoPhieu == true\"\n        id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" [bind]=\"true\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + linhVeKhoId +'}', Take: 50}\"\n        [(model)]=\"yeuCauLinhBuVatTu.KhoNhapId\" [modelText]=\"yeuCauLinhBuVatTu.TenKhoNhap\" [disabled]=\"true\"\n        url=\"YeuCauLinhVatTu/GetKhoCurrentUserLinhBuVatTu\" label=\"Lĩnh về kho\" (modelChange)=\"linhVeKhoChange($event)\"\n        class=\"item-no-padding\" [validationerror]=\"'KhoNhapId' | validationerror:validationErrorsLinhBu\">\n    </app-combobox>\n\n\n    <app-textbox id=\"nguoiYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) ? '13%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != null ? '13%' : '25%'\"\n        [required]=\"true\" [(model)]=\"yeuCauLinhBuVatTu.HoTenNguoiYeuCau\" maxlength=\"250\" label=\"Người yêu cầu\"\n        disabled={{true}}>\n    </app-textbox>\n    <app-datepicker id=\"ngayYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) ? '12%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != null ? '12%' : '25%'\"\n        [(model)]=\"yeuCauLinhBuVatTu.NgayYeuCau\" disabled={{true}} [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datepicker>\n\n    <app-textbox\n        *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != false && trangThaiVo.TrangThai != null\"\n        id=\"nguoiPheDuyet\" fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người phê duyệt\"\n        [(model)]=\"yeuCauLinhBuVatTu.TenNhanVienDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker\n        *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai != false && trangThaiVo.TrangThai != null\"\n        id=\"ngayDuyet\" fxFlex=\"12\" fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày duyệt\"\n        [(model)]=\"yeuCauLinhBuVatTu.NgayDuyet\" disabled={{true}}>\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"nguoiPheDuyet\"\n        fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người từ chối duyệt\"\n        [(model)]=\"yeuCauLinhBuVatTu.TenNhanVienDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"ngayDuyet\"\n        fxFlex=\"12\" fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày từ chối duyệt\" [(model)]=\"yeuCauLinhBuVatTu.NgayDuyet\"\n        disabled={{true}}>\n    </app-datepicker>\n\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"!isCreate && trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) || yeuCauLinhBuVatTu.LaNguoiTaoPhieu == false\"\n        [(model)]=\"yeuCauLinhBuVatTu.GhiChu\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin vật tư</h3>\n    <ng-container *ngIf=\"isCreate\">\n        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTuFormat\" #tiepnhantu\n            id=\"ThoiDiemChiDinhTuFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"Từ ngày chỉ định\" class=\"on-header\">\n        </app-datetimepicker>\n        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDenFormat\" #tiepnhanden\n            id=\"ThoiDiemChiDinhDenFormat\" (modelChange)=\"thoiDiemTNChange()\" label=\"đến ngày chỉ định\"\n            class=\"on-header\">\n        </app-datetimepicker>\n        <div fxFlex=\"70%\" fxHide.sm></div>\n    </ng-container>\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\"\n        [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  && (trangThaiVo.TrangThai == null || trangThaiVo.TrangThai == true) || isCreate) ? 'block' : 'none'\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n            [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridVatTu\n            (extOnDataBound)=\"onDataBoundGrid($event)\" [urlGetData]=\"urlGetDataGrid\"\n            [showStt]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true ? true : false\"\n            [urlGetTotalPage]=\"urlGetTotalPageGrid\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n            [detailTemplate]=\"detailTemplate\" [additionalSearchString]=\"dieuKienLoadGridVatTu\">\n        </app-grid>\n        <ng-template #detailTemplate let-dataItem>\n            <app-grid style=\"width: 1px;\" [gridColumns]=\"gridChildColumns\" [allowSortDefault]=\"true\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n                [pageable]=\"true\" [pageSize]=\"10\" [urlGetData]=\"urlGetDataGridChild\"\n                [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [sort]=\"sortChild\" [showStt]=\"true\"\n                [additionalSearchString]=\"phieuLinhId + ';' \n                + dataItem.VatTuBenhVienId + ';' \n                + dataItem.LaBHYT + ';' \n                + isCreate + ';' \n                + yeuCauLinhBuVatTu.KhoNhapId + ';' \n                +(trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai) + ';' \n                + dataItem.SoLuongTon + ';'\n                + yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu + ';'\n                + yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen + ';'\">\n            </app-grid>\n        </ng-template>\n    </div>\n\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\"\n        [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai == false ) ? 'block' : 'none'\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n            [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridVatTuTuChoi\n            (extOnDataBound)=\"onDataBoundGrid($event)\" [urlGetData]=\"urlGetDataGrid\" [showStt]=\"true\"\n            [urlGetTotalPage]=\"urlGetTotalPageGrid\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\"\n            [additionalSearchString]=\"dieuKienLoadGridVatTu\">\n        </app-grid>\n    </div>\n\n    <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #STTTemplateChild let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #slYeuCauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <div>\n            <span fxFlex=\"70%\">\n                {{dataItem.SoLuongTon}}\n            </span>\n            <mat-icon class=\"icon-war-status-grid\"\n                *ngIf=\"dataItem.SoLuongTon != null && yeuCauLinhBuVatTu.KhoXuatId != null && dataItem.SoLuongCanBu > dataItem.SoLuongTon\"\n                fxFlex=\"30%\" [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng tồn ít hơn số lượng bù\">\n            </mat-icon>\n        </div>\n    </ng-template>\n\n    <ng-template #slYeuCauLinhThucTeTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric\n            *ngIf=\"(trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == null) || trangThaiVo == undefined\"\n            [fxFlex]=\"dataItem.SLYeuCauLinhThucTe > 0 ? '100%' : '70%'\" [(model)]=\"dataItem.SLYeuCauLinhThucTe\"\n            [required]=\"true\" min=\"0\" label=\" \" (modelChange)=\"ganSLThucTeChange($event, dataItem.VatTuBenhVienId)\"\n            [validationerror]=\"'YeuCauVatTuBenhViens['+rowIndex+'].SLYeuCauLinhThucTe' | validationerror:validationErrorsLinhBu\">\n            <!-- [max]=\"dataItem.SLYeuCauLinhThucTeMax\"  -->\n        </app-textboxnumeric>\n        <mat-icon class=\"icon-war-status-grid\" *ngIf=\"dataItem.SLYeuCauLinhThucTe == 0\" fxFlex=\"30%\"\n            [icIcon]=\"icWarning\" kendoTooltip title=\"Sẽ không tạo lĩnh bù cho vật tư này.\">\n        </mat-icon>\n        <div *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != null\">\n            {{dataItem.SLYeuCauLinhThucTe}}\n        </div>\n    </ng-template>\n\n    <ng-template #checkBoxTemplate let-dataItem>\n        <app-checkbox id=\"vehicle1-{{dataItem.VatTuBenhVienId}}\" value=\"true\" [(model)]=\"dataItem.CheckBox\"\n            (modelChange)=\"checkBoxDichVu(dataItem, $event)\" label=\" \" class=\"pl-2\">\n        </app-checkbox>\n    </ng-template>\n\n    <ng-template #checkBoxHeaderTemplate let-dataItem>\n        <app-checkbox id=\"vehicle1\" name=\"vehicle1\" value=\"true\" [(model)]=\"checkAll\"\n            (modelChange)=\"checkBoxAllChange($event)\" label=\" \" class=\"pl-2\">\n        </app-checkbox>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật tư',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh vật tư',Path:'/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh bù vật tư</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 2\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 1\"\n                    style=\"color:blue\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-vat-tu-bu-gui-lai-shared #temp *ngIf=\"trangThaiVo!=null\"\n                    [isCreate]=\"trangThaiVo.TrangThai==null\" (hideDuyetbtn)=\"anHienButtonDuyet($event)\"\n                    (disabledNguoiTaoPhieu)=\"disableNguoiTaoPhieu($event)\" [validationErrorsLinhBu]=\"validationErrors\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-phieu-linh-vat-tu-bu-gui-lai-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" *ngIf=\"isDisabledNguoiTaoPhieu\" [disabled]=\"!isHideDuyet\"\n                        color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" (click)=\"cancel()\" title=\"Phím tắt: Esc\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n\n                    <button type=\"button\" *ngIf=\"isDisabledNguoiTaoPhieu && !loading && trangThaiVo != undefined && trangThaiVo != null \n                        && (trangThaiVo.TrangThai != true && trangThaiVo.TrangThai != false) \"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuPhieuLinhBuVatTu(false)\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu tạm</button>\n\n                    <button type=\"button\" *ngIf=\"isDisabledNguoiTaoPhieu && !loading && trangThaiVo != undefined && trangThaiVo != null \n                    && (trangThaiVo.TrangThai != true && trangThaiVo.TrangThai != false) \" [disabled]=\"!isHideDuyet\"\n                        (click)=\"luuPhieuLinhBuVatTu(true)\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Gửi</button>\n\n                    <!-- <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null \n                            && (trangThaiVo.TrangThai != null && trangThaiVo.TrangThai != true && trangThaiVo.TrangThai != false) \"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuVaGuiDuyetLai()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Lưu & Gửi duyệt lại</button> -->\n\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật tư',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh vật tư',Path:'/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh dự trù vật tư</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 2\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null && trangThaiVo.EnumTrangThaiPhieuLinh == 1\"\n                    style=\"color:blue\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-vat-tu-thuong-shared #temp *ngIf=\"trangThaiVo!=null\"\n                    [validationErrorsLinhThuong]=\"validationErrors\" [isCreate]=\"trangThaiVo.TrangThai==null\"\n                    (disabledNguoiTaoPhieu)=\"disableNguoiTaoPhieu($event)\" (hideDuyetbtn)=\"anHienButtonDuyet($event)\"\n                    [trangThaiVo]=\"trangThaiVo\">\n\n                </app-phieu-linh-vat-tu-thuong-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" *ngIf=\"isDisabledNguoiTaoPhieu\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" (click)=\"cancel()\" title=\"Phím tắt: Esc\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != true && isDisabledNguoiTaoPhieu\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuPhieuLinhThuong()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Lưu tạm</button>\n                    <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai != true && isDisabledNguoiTaoPhieu\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"guiPhieuLinhThuong()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Gửi</button>\n                    <button type=\"button\"\n                        *ngIf=\"!loading && trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == false  && isDisabledNguoiTaoPhieu\"\n                        [disabled]=\"!isHideDuyet\" (click)=\"luuVaGuiDuyetLai()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Lưu & Gửi duyệt lại</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU LĨNH VẬT TƯ</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In lĩnh vật tư\" type=\"PDF\" [bodyComponent]=\"this\" *ngIf=\"showNutIn\"> \n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauLinhVatTu.LyDoKhongDuyet}}</h4>\n    </div>\n\n    <app-combobox *ngIf=\"yeuCauLinhVatTu.LaNguoiTaoPhieu == false\" id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" url=\"YeuCauLinhVatTu/GetKhoLinhVatTu\" [(model)]=\"yeuCauLinhVatTu.KhoXuatId\"\n        [modelText]=\"yeuCauLinhVatTu.TenKhoXuat\" label=\"Lĩnh từ kho\" (modelChange)=\"clearGridVatTu()\"\n        class=\"item-no-padding\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"yeuCauLinhVatTu.LaNguoiTaoPhieu == false\" id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" url=\"YeuCauLinhVatTu/GetKhoCurrentUserVatTu\" [(model)]=\"yeuCauLinhVatTu.KhoNhapId\"\n        [modelText]=\"yeuCauLinhVatTu.TenKhoNhap\" label=\"Lĩnh về kho\" class=\"item-no-padding\"\n        (modelChange)=\"clearGridVatTu()\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"yeuCauLinhVatTu.LaNguoiTaoPhieu == null || yeuCauLinhVatTu.LaNguoiTaoPhieu == true\"\n        id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" url=\"YeuCauLinhVatTu/GetKhoLinhVatTu\"\n        [(model)]=\"yeuCauLinhVatTu.KhoXuatId\" [modelText]=\"yeuCauLinhVatTu.TenKhoXuat\" label=\"Lĩnh từ kho\"\n        (modelChange)=\"clearGridVatTu()\" class=\"item-no-padding\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhThuong\">\n    </app-combobox>\n    <app-combobox *ngIf=\"yeuCauLinhVatTu.LaNguoiTaoPhieu == null || yeuCauLinhVatTu.LaNguoiTaoPhieu == true\"\n        id=\"linhVeKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" url=\"YeuCauLinhVatTu/GetKhoCurrentUserVatTu\"\n        [(model)]=\"yeuCauLinhVatTu.KhoNhapId\" [modelText]=\"yeuCauLinhVatTu.TenKhoNhap\" label=\"Lĩnh về kho\"\n        class=\"item-no-padding\" (modelChange)=\"clearGridVatTu()\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrorsLinhThuong\">\n    </app-combobox>\n\n    <app-textbox id=\"nguoiYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)   ? '13%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)? '13%' : '25%'\"\n        maxlength=\"250\" label=\"Người yêu cầu\" disabled={{true}} [required]=\"true\"\n        [(model)]=\"yeuCauLinhVatTu.HoTenNguoiYeuCau\">\n    </app-textbox>\n\n    <app-datepicker id=\"ngayYeuCau\"\n        [fxFlex]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)  ? '12%' : '25%'\"\n        [fxFlex.sm]=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)? '12%' : '25%'\"\n        [(model)]=\"yeuCauLinhVatTu.NgayYeuCau\" disabled={{true}} [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == true\" id=\"nguoiPheDuyet\"\n        fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người phê duyệt\" [(model)]=\"yeuCauLinhVatTu.HoTenNguoiDuyet\"\n        disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == true\" id=\"ngayDuyet\" fxFlex=\"12\"\n        fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày duyệt\" [(model)]=\"yeuCauLinhVatTu.NgayDuyet\" disabled={{true}}>\n    </app-datepicker>\n\n    <app-textbox *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"nguoiTuChoiDuyet\"\n        fxFlex=\"13\" fxFlex.sm=\"13\" maxlength=\"250\" label=\"Người từ chối duyệt\"\n        [(model)]=\"yeuCauLinhVatTu.HoTenNguoiDuyet\" disabled={{true}} [required]=\"true\">\n    </app-textbox>\n\n    <app-datepicker *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\" id=\"ngayTuChoiDuyet\"\n        fxFlex=\"12\" fxFlex.sm=\"12\" [required]=\"true\" label=\"Ngày từ chối duyệt\" [(model)]=\"yeuCauLinhVatTu.NgayDuyet\"\n        disabled={{true}}>\n    </app-datepicker>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhVatTu.LaNguoiTaoPhieu == false\"\n        [(model)]=\"yeuCauLinhVatTu.GhiChu\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin vật tư</h3>\n\n    <ng-container *ngIf=\"yeuCauLinhVatTu.LaNguoiTaoPhieu == true || yeuCauLinhVatTu.LaNguoiTaoPhieu == null\">\n        <app-radio id=\"loai\" label=\"Loại\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"vatTuGrid.LoaiVatTu\"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhVatTu.KhoXuatId == null || yeuCauLinhVatTu.KhoNhapId == null\"\n            (modelChange)=\"huy()\" [items]=\"[{Value:1,Text:'Không BHYT'},{Value:2,Text:'BHYT'}]\">\n        </app-radio>\n\n\n        <app-combobox id=\"vatTu\" fxFlex=\"35%\" fxFlex.sm=\"30%\" [required]=\"true\" url=\"YeuCauLinhVatTu/GetVatTuTheoKho\"\n            [(model)]=\"vatTuGrid.VatTuBenhVienId\"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhVatTu.KhoXuatId == null || yeuCauLinhVatTu.KhoNhapId == null\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoId:' +yeuCauLinhVatTu.KhoXuatId +', LaVatTuBHYT: '+vatTuGrid.LoaiVatTu+'}', Take: 50}\"\n            (selectionChange)=\"chonVatTu($event)\" [template]=\"vatTuTemplate\" [templateHeader]=\"vatTuTemplateHeader\"\n            label=\"Vật tư\" class=\"item-no-padding\" [popupSettings]=\"{width: 800,popupClass:'item-no-padding'}\"\n            (keyup)=\"onKey($event)\" (openCombobox)=\"openCombobox($event)\"\n            [validationerror]=\"'VatTuBenhVienId' | validationerror:validationErrors\">\n            <ng-template #vatTuTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th width=\"40%\">Tên</th>\n                        <th width=\"10%\">ĐVT</th>\n                        <th width=\"15%\">SL Tồn</th>\n                        <th width=\"15%\">HSD</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #vatTuTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td width=\"40%\">{{dataItem.Ten}}</td>\n                        <td width=\"10%\">{{dataItem.DVT}}</td>\n                        <td width=\"15%\">{{dataItem.SLTonFormat}}</td>\n                        <td width=\"15%\">{{dataItem.HanSuDung}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n\n\n        <app-textboxnumeric fxFlex=\"10\" id=\"slTon\" label=\"SL tồn\" disabled={{true}} [(model)]=\"vatTuGrid.SLTon\">\n        </app-textboxnumeric>\n        <app-textboxnumeric fxFlex=\"10\" id=\"slYeuCau\" label=\"SL yêu cầu\" [required]=\"true\" max=\"999999999\" min=\"1\"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhVatTu.KhoXuatId == null || yeuCauLinhVatTu.KhoNhapId == null\"\n            (keyup)=\"onKey($event)\" [(model)]=\"vatTuGrid.SLYeuCau\"\n            [validationerror]=\"'SLYeuCau' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <app-textbox id=\"dvt\" fxFlex=\"5\" fxFlex.sm=\"10\" maxlength=\"1000\" label=\"ĐVT\" [(model)]=\"vatTuGrid.DVT\"\n            disabled={{true}}>\n        </app-textbox>\n        <app-textbox id=\"hangSanXuat\" fxFlex=\"15\" fxFlex.sm=\"15\" maxlength=\"1000\" label=\"Hãng SX\"\n            [(model)]=\"vatTuGrid.NhaSX\" disabled={{true}}>\n        </app-textbox>\n        <app-textbox id=\"nuocSanXuat\" fxFlex=\"10\" fxFlex.sm=\"10\" maxlength=\"1000\" label=\"Nước SX\"\n            [(model)]=\"vatTuGrid.NuocSX\" disabled={{true}}>\n        </app-textbox>\n\n        <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n            <div\n                [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  && (trangThaiVo.TrangThai == null || trangThaiVo.TrangThai == false) || isCreate) ? 'block' : 'none'\">\n                <button type=\"button\"\n                    [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhVatTu.KhoXuatId == null || yeuCauLinhVatTu.KhoNhapId == null\"\n                    color=\"primary\" (click)=\"huy()\" mat-stroked-button mat-button class=\"mr-1\">Hủy</button>\n            </div>\n            <button\n                [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhVatTu.KhoXuatId == null || yeuCauLinhVatTu.KhoNhapId == null\"\n                type=\"button\" color=\"primary\" (click)=\"themVatTu()\" mat-raised-button mat-button>Thêm</button>\n        </div>\n    </ng-container>\n\n\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\" #gridVatTu\n        [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\">\n    </app-grid>\n\n    <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #actionTemplate let-dataItem>\n        <div class=\"text-center\" kendoTooltip>\n            <button color=\"primary\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhVatTu.LaNguoiTaoPhieu == false\"\n                (click)=\"xoaVatTu(dataItem)\">\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #slYeuCauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric fxFlex=\"80%\" [(model)]=\"dataItem.SLYeuCau\" [required]=\"true\" class=\"no-label\" min=\"1\"\n            [max]=\"999999999\" label=\" \"\n            [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == true || yeuCauLinhVatTu.LaNguoiTaoPhieu == false\"\n            [validationerror]=\"'YeuCauLinhVatTuChiTiets['+rowIndex+'].SoLuong' | validationerror:validationErrorsLinhThuong\">\n        </app-textboxnumeric>\n        <!-- <mat-icon class=\"icon-war-status-grid\"\n            *ngIf=\"dataItem.SoLuongCoTheXuat != null && dataItem.SLYeuCau > dataItem.SoLuongCoTheXuat\" fxFlex=\"20%\"\n            [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng tồn không đủ\">\n        </mat-icon> -->\n        <mat-icon class=\"icon-war-status-grid\"\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == null && (dataItem.SLTon != null && dataItem.SLYeuCau > dataItem.SLTon)\"\n            fxFlex=\"20%\" [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng tồn không đủ\">\n        </mat-icon>\n        <mat-icon class=\"icon-war-status-grid\"\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.TrangThai == false && (dataItem.SoLuongCoTheXuat != null && dataItem.SLYeuCau > dataItem.SoLuongCoTheXuat)\"\n            fxFlex=\"20%\" [icIcon]=\"icWarning\" kendoTooltip title=\"Số lượng có thể xuất không đủ\">\n        </mat-icon>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.html":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật tư',Path:''}\n                ,{Title:'Dự Trù Lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh vật tư',Path:'/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu',queryParams: {holdQuery : true },Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"!shareChoGoi\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh trực tiếp vật tư</h2>\n                <b class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">{{trangThai.TenTrangThai}}</b>\n            </div>\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"shareChoGoi\">\n                <h2 class=\"title m-0\">Yêu cầu lĩnh trực tiếp vật tư</h2>\n                <b class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">Chờ gởi</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\" *ngIf=\"!shareChoGoi\">\n                <app-phieu-linh-vat-tu-truc-tiep-shared #temp1 [isCreate]=\"true\" (trangThaiYeuCau)=\"getTrangThaiYeuCau($event)\" (quyenUpdate)=\"quyenUpdatePhieuLinh($event)\"></app-phieu-linh-vat-tu-truc-tiep-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\" *ngIf=\"shareChoGoi\">\n                <app-phieu-linh-vt-truc-tiep-cho-goi-shared #temp></app-phieu-linh-vt-truc-tiep-cho-goi-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu lĩnh</button>\n\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\"  (click)=\"guiLaiPhieu()\" color=\"primary\" mat-raised-button><i\n                                class=\"ft-save\"></i> Lưu</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <div fxFlex=\"100%\" *ngIf=\"!showGridTrangThai && isCreate\">\n        <h4 style=\"color: red;\">Lý do: {{lyDoKhongDuyet}}</h4>\n    </div>\n    <app-combobox id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" *ngIf=\"!isCreate\" [disabled]=\"true\"\n        [(model)]=\"phieuLinhTrucTiep.KeyId\" [modelText]=\"phieuLinhTrucTiep.DisplayName\" bind=\"true\"\n        url=\"YeuCauLinhVatTu/GetTatCakhoLinhTuCuaNhanVienLoginLinhTrucTiep\" label=\"Lĩnh từ kho\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhTT\"\n        (selectionChange)=\"ChonKhoLinhChange($event)\">\n    </app-combobox>\n    <app-combobox id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" *ngIf=\"isCreate\" [disabled]=\"true\"\n        [(model)]=\"phieuLinhTrucTiep.KeyId\" [modelText]=\"phieuLinhTrucTiep.DisplayName\"\n        url=\"YeuCauLinhVatTu/GetTatCakhoLinhTuCuaNhanVienLoginLinhTrucTiep\" label=\"Lĩnh từ kho\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrorsLinhTT\"\n        (selectionChange)=\"ChonKhoLinhChange($event)\">\n\n    </app-combobox>\n    <app-textbox id=\"LinhVePhong\" maxlength=\"250\" label=\"Lĩnh về khoa\" disabled={{true}} [(model)]=\"linhVeKhoa\"\n        [required]=\"true\" [validationerror]=\"'KhoNhapId' | validationerror:validationErrorsLinhTT\">\n    </app-textbox>\n\n    <app-textbox id=\"nguoiYeuCau\" [fxFlex]=\"isDaTao  ? '15%' : '25%'\" [fxFlex.sm]=\"isDaTao ? '15%' : '25%'\"\n        maxlength=\"250\" label=\"Người yêu cầu\" disabled={{true}} [(model)]=\"nguoiYeuCau\" [required]=\"true\"\n        [validationerror]=\"'NguoiYeuCau' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-datepicker id=\"ngayYeuCau\" [fxFlex]=\"isDaTao ? '10%' : '25%'\" [fxFlex.sm]=\"isDaTao ? '10%' : '25%'\"\n        [required]=\"true\" label=\"Ngày yêu cầu\" disabled={{true}} [(model)]=\"ngayYeuCau\"\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <ng-container *ngIf=\"isShowDuyet\">\n        <app-textbox id=\"nguoiDuyet\" fxFlex=\"15\" fxFlex.sm=\"15\" maxlength=\"250\" label=\"Người phê duyệt\"\n            *ngIf=\"trangThaiShowDuyet != true\" disabled={{true}} [(model)]=\"daDuyet.NguoiDuyet\" [required]=\"true\"\n            [validationerror]=\"'NguoiDuyet' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-datepicker id=\"ngayDuyet\" fxFlex=\"10\" fxFlex.sm=\"10\" [required]=\"true\" label=\"Ngày duyệt\" disabled={{true}}\n            *ngIf=\"trangThaiShowDuyet != true\" [(model)]=\"daDuyet.NgayDuyet\"\n            [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\">\n        </app-datepicker>\n        <app-textbox id=\"nguoiDuyet\" fxFlex=\"15\" fxFlex.sm=\"15\" maxlength=\"250\" label=\"Người từ chối duyệt\"\n            *ngIf=\"trangThaiShowDuyet == true\" disabled={{true}} [(model)]=\"daDuyet.NguoiDuyet\" [required]=\"true\"\n            [validationerror]=\"'NguoiDuyet' | validationerror:validationErrors\">\n        </app-textbox>\n        <app-datepicker id=\"ngayDuyet\" fxFlex=\"10\" fxFlex.sm=\"10\" [required]=\"true\" label=\"Ngày từ chối duyệt\"\n            disabled={{true}} *ngIf=\"trangThaiShowDuyet == true\" [(model)]=\"daDuyet.NgayDuyet\"\n            [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\">\n        </app-datepicker>\n    </ng-container>\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" *ngIf=\"!isShowDuyet\" [(model)]=\"ghiChu\"\n        [disabled]=\"!quyenUpdatePhieu\" label=\"Ghi chú\" minHeight=\"20\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n    </app-textarea>\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" *ngIf=\"isShowDuyet && !ishowTrangThaiDuyet \"\n        disabled={{true}} [(model)]=\"ghiChu\" label=\"Ghi chú\" minHeight=\"20\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin vật tư</h3>\n    <!-- <app-daterangepicker *ngIf=\"!isCreate\" style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"350px\" fxFlex.sm=\"auto\"\n        [(model)]=\"searchDanhSachThongVatTu.RangeFromDate\"  label=\"Yêu cầu từ ngày điều trị - đến ngày điều trị\"\n        (modelChange)=\"changeNgayBatDauRange($event)\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n    </app-daterangepicker> -->\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" fxLayoutAlign=\"start center\" *ngIf=\"!isCreate\">\n        <app-datetimepicker id=\"TuNgay\" fxFlex=\"18%\" fxFlex.sm=\"100%\" [(model)]=\"searchDanhSachThongVatTu.TuNgay\"\n            label=\"Từ :ngày điều trị\" (modelChange)=\"changeTuNgay($event)\" class=\"mt-1 on-header\">\n        </app-datetimepicker>\n        <span fxFlex=\"2%\" fxFlex.sm=\"100%\"></span>\n        <app-datetimepicker id=\"DenNgay\" fxFlex=\"18%\" fxFlex.sm=\"100%\" [(model)]=\"searchDanhSachThongVatTu.DenNgay\"\n            label=\"đến :ngày điều trị\" (modelChange)=\"changeDenNgay($event)\" class=\"mt-1 on-header\">\n        </app-datetimepicker>\n    </div>\n\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" *ngIf=\"showGridTrangThai\">\n        <app-grid #gridCha fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridChildColumns\"\n            [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" #gridCreate [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [masterName]='linhTrucTiepMasterName' [checkboxAble]=\"KiemTraCheckGrid\" [lazyLoadPage]=\"true\"\n            maxHeight=\"500\" [pageable]=\"false\" (extCheckboxSelection)=\"extCheckboxSelections($event)\"\n            [detailTemplate]=\"detailTemplate\">\n        </app-grid>\n    </div>\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" *ngIf=\"!showGridTrangThai\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumnTuChois\" #gridCreate\n            [allowSortDefault]=\"true\" [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\" >\n        </app-grid>\n    </div>\n    <ng-template #detailTemplate let-dataItem>\n        <app-grid *ngIf=\"!isCreate\" baseRoute=\"\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\"  [showStt]=\"true\"\n            [gridDataSource]=\"getDataSourceChild(dataItem.ListYeuCauVatTuBenhViens)\" [autoHeight]=\"true\"\n            [pageable]=\"false\">\n        </app-grid>\n        <app-grid baseRoute=\"\" *ngIf=\"isCreate && !isShowDuyet\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\"  [showStt]=\"true\" [urlGetData]=\"urlGetDataDaTaoChild\"\n            [additionalSearchString]=\"dataItem.YeuCauTiepNhanId + '-' + dataItem.LoaiThuoc + '-' + phonglamViecId + '-' + yeuCauLinhVatTuId + '-' + dataItem.KhoLinhId\"\n            [autoHeight]=\"true\" [pageable]=\"false\" (extOnDataBound)=\"OnDataBound($event)\">\n        </app-grid>\n        <app-grid baseRoute=\"\" *ngIf=\"isCreate && isShowDuyet\" [gridColumns]=\"gridColumnsDaDuyet\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\"  [showStt]=\"true\" [urlGetData]=\"urlGetDataDaTaoChild\"\n            [additionalSearchString]=\"dataItem.YeuCauTiepNhanId + '-' + dataItem.LoaiThuoc + '-' + phonglamViecId + '-' + yeuCauLinhVatTuId + '-' + dataItem.KhoLinhId\"\n            [autoHeight]=\"true\" [pageable]=\"false\" (extOnDataBound)=\"OnDataBound($event)\">\n        </app-grid>\n    </ng-template>\n    <ng-template #slYeuCauTemplate let-dataItem>\n        <app-textboxnumeric *ngIf=\"isCreate\" [decimals]=\"1\" class=\"no-label\" [max]=\"9999\">\n        </app-textboxnumeric>\n    </ng-template>\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n    <div class=\"gripViewGoiDichViKhacTemplate\">\n\n        <ng-template #checkBoxChildTemplate let-dataItem>\n            <span *ngIf=\"dataItem.SoLuongTon >= dataItem.SLYeuCau\">\n                <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.IsCheckRowItem\" name=\"vehicle1\" \n                    (ngModelChange)=\"checkboxGridChild($event,dataItem)\">\n            </span>\n            <span *ngIf=\"dataItem.SLYeuCau  > dataItem.SoLuongTon\">\n                <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.IsCheckRowItem\" name=\"vehicle1\" disabled\n                    (ngModelChange)=\"checkboxGridChild($event,dataItem)\">\n            </span>\n        </ng-template>\n\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.html":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.html ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-combobox id=\"linhTuKho\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\"  [disabled]=\"true\"\n        [(model)]=\"phieuLinhTrucTiep.KeyId\" [modelText]=\"phieuLinhTrucTiep.DisplayName\" bind=\"true\"\n        url=\"YeuCauLinhVatTu/GetTatCakhoLinhTuCuaNhanVienLoginLinhTrucTiep\" label=\"Lĩnh từ kho\"\n        >\n    </app-combobox>\n    <app-textbox id=\"LinhVePhong\" maxlength=\"250\" label=\"Lĩnh về khoa\" disabled={{true}} [(model)]=\"linhVeKhoa\"\n        [required]=\"true\" >\n    </app-textbox>\n\n    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        maxlength=\"250\" label=\"Người yêu cầu\" disabled={{true}} [(model)]=\"nguoiYeuCau\" [required]=\"true\"\n        >\n    </app-textbox>\n    <app-datepicker id=\"ngayYeuCau\"  fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [required]=\"true\" label=\"Ngày yêu cầu\" disabled={{true}} [(model)]=\"ngayYeuCau\"\n        >\n    </app-datepicker>\n    <app-textarea id=\"ghiChu\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\"  [(model)]=\"ghiChu\"\n         label=\"Ghi chú\" minHeight=\"20\"\n        >\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin vật tư</h3>\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" fxLayoutAlign=\"start center\" >\n        <app-datetimepicker id=\"TuNgay\" fxFlex=\"18%\" fxFlex.sm=\"100%\" [(model)]=\"searchDanhSachThongVatTu.TuNgay\"\n            label=\"Từ :ngày điều trị\" (modelChange)=\"changeTuNgay($event)\" class=\"mt-1 on-header\">\n        </app-datetimepicker>\n        <span fxFlex=\"2%\" fxFlex.sm=\"100%\"></span>\n        <app-datetimepicker id=\"DenNgay\" fxFlex=\"18%\" fxFlex.sm=\"100%\" [(model)]=\"searchDanhSachThongVatTu.DenNgay\"\n            label=\"đến :ngày điều trị\" (modelChange)=\"changeDenNgay($event)\" class=\"mt-1 on-header\">\n        </app-datetimepicker>\n    </div>\n\n    <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" >\n        <app-grid #gridCha  fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n        [gridColumns]=\"gridChildColumns\" [autoRefreshDataSource]=\"true\" [allowSortDefault]=\"true\"\n        [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridCreate\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n        [pageable]=\"false\" (extCheckboxSelection)=\"extCheckboxSelections($event)\" [detailTemplate]=\"detailTemplate\"\n        [masterName]='linhTrucTiepMasterName'>\n    </app-grid>\n    </div>\n    <ng-template #detailTemplate let-dataItem>\n        <app-grid  baseRoute=\"\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n        [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\"  [showStt]=\"true\"\n        [gridDataSource]=\"getDataSourceChild(dataItem.ListYeuCauVatTuBenhViens)\" [autoHeight]=\"true\"\n        [pageable]=\"false\">\n    </app-grid>\n    </ng-template>\n    <ng-template #slYeuCauTemplate let-dataItem>\n        <app-textboxnumeric  [decimals]=\"1\" class=\"no-label\" [max]=\"9999\">\n        </app-textboxnumeric>\n    </ng-template>\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n    <div class=\"gripViewGoiDichViKhacTemplate\">\n\n        <ng-template #checkBoxChildTemplate let-dataItem>\n            <span *ngIf=\"dataItem.SoLuongTon >= dataItem.SLYeuCau\">\n                <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.IsCheckRowItem\" name=\"vehicle1\" \n                    (ngModelChange)=\"checkboxGridChild($event,dataItem)\">\n            </span>\n            <span *ngIf=\"dataItem.SLYeuCau  > dataItem.SoLuongTon\">\n                <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.IsCheckRowItem\" name=\"vehicle1\" disabled\n                    (ngModelChange)=\"checkboxGridChild($event,dataItem)\">\n            </span>\n        </ng-template>\n\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div style=\"text-align: center;\">Xác Nhận</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div> -->\n\n<mat-dialog-content style=\"overflow: hidden\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\"style=\"text-align: center;font-size: 20px\"><b>Xác Nhận</b></div>\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"text-align: center;font-size: 15px;padding-bottom: 10px;\">Có các vật tư không đủ tồn</div>\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [checkboxAble]=\"false\"\n            [gridDataSource]=\"gridDataSource\"  [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\"\n            [pageable]=\"false\">\n        </app-grid>\n        <div fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"font-size: 15px;padding-top: 10px;\">Nếu đồng ý gửi thì sẻ không tạo được những vật tư\n            phẩm này<br>\n            Bạn có muốn tiếp tục gửi không?</div>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button mat-button mat-dialog-close (click)=\"Khong('No')\">Không</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"Co('Yes')\" [mat-dialog-close]=\"true\"\n        cdkFocusInitial>Có</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật tư',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh vật tư',Path:'/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu'}\n                ,{Title:'Vật tư cần bù',Path:'/nhap-xuat/vat-tu/vat-tu-can-bu',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu lĩnh bù vật tư</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-vat-tu-bu-gui-lai-shared [isCreate]=\"!isCreate\"\n                    [validationErrorsLinhBu]=\"validationErrors\">\n                </app-phieu-linh-vat-tu-bu-gui-lai-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"XemPhieuLinh()\" color=\"primary\"\n                        class=\"mr-1 align-right-fx\" mat-raised-button><i class=\"ft-save\"></i> Xem phiếu lĩnh</button>\n                    <button type=\"button\" (click)=\"cancel()\" title=\"Phím tắt: Esc\" mat-button><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"luuPhieuLinhVatTu(false)\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Lưu tạm</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"luuPhieuLinhVatTu(true)\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Gửi</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật tư',Path:''}\n                ,{Title:'Dự trù lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh vật tư',Path:'/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu lĩnh dự trù vật tư</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\" *ngIf=\"isCreate\">Đang chờ duyệt</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-vat-tu-thuong-shared [validationErrorsLinhThuong]=\"validationErrors\" [isCreate]=\"true\"\n                    [trangThaiVo]=\"trangThaiVo\">\n\n                </app-phieu-linh-vat-tu-thuong-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" title=\"Phím tắt: Esc\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"luuPhieuLinhThuongVatTu()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Lưu tạm</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"guiPhieuLinhThuongVatTu()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i> Gửi</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật tư',Path:''}\n                ,{Title:'Dự Trù Lĩnh',Path:''}\n                ,{Title:'Yêu cầu lĩnh vật tư',Path:'/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu'}\n                ,{Title:'Vật tư cần lĩnh trực tiếp',Path:'/nhap-xuat/vat-tu/vat-tu-can-linh-truc-tiep',Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo phiếu lĩnh trực tiếp vật tư</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phieu-linh-vat-tu-truc-tiep-shared [isCreate]=\"false\" [validationErrorsLinhTT]=\"validationErrors\">\n                </app-phieu-linh-vat-tu-truc-tiep-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"xemPhieuLinh()\" color=\"primary\" mat-raised-button\n                        mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-save\"></i> Xem phiếu lĩnh</button>\n                    <button type=\"button\" (click)=\"cancel()\" mat-raised-button><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"create(false)\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Lưu</button>\n                    <button type=\"button\" *ngIf=\"!loading\" (click)=\"create(true)\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Gửi</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

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

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvZGFuaC1zYWNoLXlldS1jYXUtbGluaC12YXQtdHUvZGFuaC1zYWNoLXlldS1jYXUtbGluaC12YXQtdHUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: DanhSachYeuCauLinhVatTuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachYeuCauLinhVatTuComponent", function() { return DanhSachYeuCauLinhVatTuComponent; });
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
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _in_linh_vat_tu_in_linh_vat_tu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../in-linh-vat-tu/in-linh-vat-tu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/enum/linh-vat-tu-thuoc.enum */ "./src/app/shared/enum/linh-vat-tu-thuoc.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");






























let DanhSachYeuCauLinhVatTuComponent = class DanhSachYeuCauLinhVatTuComponent {
    constructor(dialog, router, apiService, authService, notificationService, cd, route, location) {
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.route = route;
        this.location = location;
        this.inPhieuLinhThuong = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["PhieuLinhVatTuThuong"]();
        this.gridColumns = [];
        this.gridChildLinhDuTruChuaDuyetColumns = [];
        this.gridChildLinhDuTruDaDuyetColumns = [];
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
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.popupLoadingDataDaDuyet = null;
        this.validationErrors = [];
        this.timKiemTuNgay = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["SearchNgay"]();
        this.kiemTraDanhSachDangChoDuyet = true;
        this.kiemTraDanhSachTuChoiDuyet = false;
        this.kiemTraDanhSachDaDuyet = false;
        this.kiemTraDanhSachDaChoGoi = true;
        this.trangThaiCheck = 0;
        this.exportQueryInfoQueryInfo = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["ExportQueryInfoQueryInfo"]();
        this.stringAdditionalSearchString = "";
        this.holdQuery = null;
        this.baseRoute = "/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu";
        this.groupsYCTN = [{ field: 'MaYeuCauTiepNhan' }];
        this.groups = [{ field: 'Nhom' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhSachYeuCauLinhVatTu;
        this.gridChild.sort = [{
                field: 'DuocDuyet',
                dir: 'asc'
            }];
        this.route
            .queryParams
            .subscribe(v => {
            this.trangThai = v;
        });
        this.linhVatTuGridVo = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["LinhVatTuGridVo"]();
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
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
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
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
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
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
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
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 120, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "DonViTinh", Title: "Đơn vị tính", Width: 100, Sortable: true },
            { Field: "HangSanXuat", Title: "Hãng Sản Xuất", Width: 200, Sortable: true },
            { Field: "NuocSanXuat", Title: "Nước Sản Xuất", Width: 120, Sortable: true },
            { Field: "SLTon", Title: "SL tồn", Width: 120 },
            { Field: "SoLuongYc", Title: "Số lượng yêu cầu", Width: 120 }
        ];
        this.gridChildLinhDuTruDaDuyetColumns = [
            { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 120, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "DonViTinh", Title: "Đơn vị tính", Width: 100, Sortable: true },
            { Field: "HangSanXuat", Title: "Hãng Sản Xuất", Width: 200, Sortable: true },
            { Field: "NuocSanXuat", Title: "Nước Sản Xuất", Width: 120, Sortable: true },
            { Field: "SLTon", Title: "SL tồn", Width: 120 },
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
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, Sortable: true },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
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
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, Sortable: true },
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
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, Sortable: true },
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
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].getItem('additionalSearchStringYCLVT') != null) {
            this.TimKiemId();
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].setItem('additionalSearchStringYCLVT', null);
            let NgayDuyetRangDateStartDate = null;
            let NgayDuyetRangDateEndDate = null;
            let NgayYeuCauRangDateStartDate = null;
            let NgayYeuCauRangDateEndDate = null;
            let Searching = null;
            let queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
                + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoGoi\":" + this.linhVatTuGridVo.DangChoGoi + ",\"DangChoDuyet\":" + this.linhVatTuGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhVatTuGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhVatTuGridVo.DaDuyet + " }";
            this.gridChild.additionalSearchString = queryString;
        }
    }
    TimKiemId() {
        var searching = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].getItem("additionalSearchStringYCLVT");
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
                + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoGoi\":" + this.linhVatTuGridVo.DangChoGoi + ",\"DangChoDuyet\":" + this.linhVatTuGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhVatTuGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhVatTuGridVo.DaDuyet + " }";
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
            this.linhVatTuGridVo.DangChoGoi = KiemTraLoCalAdditonalExit.DangChoGoi;
            this.linhVatTuGridVo.DangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
            this.linhVatTuGridVo.TuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
            this.linhVatTuGridVo.DaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
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
            this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
        }
        else {
            this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = null;
        }
        if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
            this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
        }
        else {
            this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = null;
        }
        if (this.timKiemTuNgay.NgayDuyetRangDate.startDate != null) {
            this.linhVatTuGridVo.NgayDuyetRangDateStartDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.startDate, "mm/dd/yyyy");
        }
        else {
            this.linhVatTuGridVo.NgayDuyetRangDateStartDate = null;
        }
        if (this.timKiemTuNgay.NgayDuyetRangDate.endDate != null) {
            this.linhVatTuGridVo.NgayDuyetRangDateStartEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.endDate, "mm/dd/yyyy");
        }
        else {
            this.linhVatTuGridVo.NgayDuyetRangDateStartEnd = null;
        }
        if (this.timKiemTuNgay.TrangThaiCheck != null) {
            this.linhVatTuGridVo.TrangThaiCheck = this.timKiemTuNgay.TrangThaiCheck;
        }
        if (this.searchString != null || this.searchString != undefined) {
            this.linhVatTuGridVo.Searching = this.searchString;
        }
        else {
            this.linhVatTuGridVo.Searching = null;
        }
        let queryStringSearch = JSON.stringify(this.linhVatTuGridVo);
        this.stringAdditionalSearchString = queryStringSearch;
        this.gridChild._additionalSearchString = queryStringSearch;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_27__["LocalStorageHelper"].setItem("additionalSearchStringYCLVT", queryStringSearch);
        this.gridChild.search();
    }
    checkTrangThaiDCT(event, type) {
        this.cd.detectChanges();
        if (type == 1) {
            this.linhVatTuGridVo.DangChoGoi = event;
        }
        if (type == 2) {
            this.linhVatTuGridVo.DangChoDuyet = event;
        }
        if (type == 3) {
            this.linhVatTuGridVo.TuChoiDuyet = event;
        }
        if (type == 4) {
            if (event == true) {
                this.linhVatTuGridVo.DaDuyet = event;
            }
            else {
                this.linhVatTuGridVo.DaDuyet = null;
            }
        }
        this.TimkiemNangCao();
    }
    loadingPageDaDuyet() {
        this.popupLoadingDataDaDuyet = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__["LoadingComponent"], {
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
            self.inPhieuLinhThuong.YeuCauLinhVatTuId = data.Id;
            self.inPhieuLinhThuong.LoaiPhieuLinh = data.LoaiPhieuLinh;
            self.inPhieuLinhThuong.TrangThai = data.DuocDuyet;
            self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(resData => {
                if (resData != undefined && resData != null) {
                    self.closePopupLoadingDataDaDuyet();
                    self.inPhieuLinhThuong.Header = false;
                    self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_21__["PhieuLinhVatTuThuongPopupComponent"], {
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
        else {
            let trangThaiIn;
            if (data.DuocDuyet == false) {
                trangThaiIn = false;
            }
            else {
                trangThaiIn = true;
            }
            let dataIn = {
                Hosting: null,
                YeuCauLinhVatTuId: data.Id,
                LoaiPhieuLinh: data.LoaiPhieuLinh,
                TrangThaiIn: trangThaiIn
            };
            if (window.location.protocol == "http:") {
                dataIn.Hosting = "http://" + window.location.host;
            }
            else {
                dataIn.Hosting = "https://" + window.location.host;
            }
            this.apiService.post("YeuCauLinhVatTu/InLinhVatTu", dataIn).subscribe(resultData => {
                let dialogRef = this.dialog.open(_in_linh_vat_tu_in_linh_vat_tu_component__WEBPACK_IMPORTED_MODULE_15__["InLinhVatTuComponent"], {
                    width: '1000px',
                    data: { Model: resultData, LoaiPhieuLinh: data.Loai }
                }).afterClosed().subscribe(() => { });
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
    }
    Huy(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xóa phiếu lĩnh này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.apiService.post("YeuCauLinhVatTu/HuyItemYeuCauLinhThuoc?id=" + dataItem.Id).subscribe(resultData => {
                        this.notificationService.showSuccess("Xóa thành công");
                        this.TimkiemNangCao();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        ;
    }
    Xem(id, loaiPhieuLinh, daGui) {
        switch (loaiPhieuLinh) {
            case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_23__["EnumLoaiPhieuLinh"].LinhDuTru:
                if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhThuongVatTu, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_24__["SecurityOperation"].Update)) {
                    this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-thuong/" + id], { queryParams: { holdQuery: this.trangThaiCheck } });
                    break;
                }
                else {
                    this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_25__["SystemMessage"].UnAuthorizedMessage);
                }
            case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_23__["EnumLoaiPhieuLinh"].LinhBu:
                if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhBuVatTu, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_24__["SecurityOperation"].Update)) {
                    this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-bu/" + id], { queryParams: { holdQuery: this.trangThaiCheck } });
                    break;
                }
                else {
                    this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_25__["SystemMessage"].UnAuthorizedMessage);
                }
            case src_app_shared_enum_linh_vat_tu_thuoc_enum__WEBPACK_IMPORTED_MODULE_23__["EnumLoaiPhieuLinh"].LinhChoBenhNhan:
                if (this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhTrucTiepVatTu, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_24__["SecurityOperation"].Update)) {
                    if (daGui == null || daGui == false) {
                        this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-truc-tiep/" + id], { queryParams: { holdQuery: true } });
                        break;
                    }
                    else {
                        this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-truc-tiep/" + id]);
                        break;
                    }
                }
                else {
                    this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_25__["SystemMessage"].UnAuthorizedMessage);
                }
        }
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        self.exportQueryInfoQueryInfo.Sort = this.gridChild.sort.map(item => {
            return new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_29__["Sort"](item.field, item.dir);
        });
        self.exportQueryInfoQueryInfo.AdditionalSearchString = this.stringAdditionalSearchString;
        // if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
        self.apiService.postExportExcel('YeuCauLinhVatTu/ExportDanhSachLinhVatTu', self.exportQueryInfoQueryInfo).subscribe(resultData => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DanhSachYeuCauLinhVatTu' + dateTimeNow.getFullYear() + '.xlsx');
        }, (err) => {
            self.notificationService.showError(err.Message);
        });
        // } else {
        //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        // }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__["LoadingComponent"], {
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
DanhSachYeuCauLinhVatTuComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_26__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], DanhSachYeuCauLinhVatTuComponent.prototype, "maTNTemplateactionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangTemplate', { static: true })
], DanhSachYeuCauLinhVatTuComponent.prototype, "TinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupTemplate', { static: true })
], DanhSachYeuCauLinhVatTuComponent.prototype, "groupTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], DanhSachYeuCauLinhVatTuComponent.prototype, "PLTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DanhSachYeuCauLinhVatTuComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], DanhSachYeuCauLinhVatTuComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
], DanhSachYeuCauLinhVatTuComponent.prototype, "ngayYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], DanhSachYeuCauLinhVatTuComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
], DanhSachYeuCauLinhVatTuComponent.prototype, "gridChild", void 0);
DanhSachYeuCauLinhVatTuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-yeu-cau-linh-vat-tu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-yeu-cau-linh-vat-tu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-yeu-cau-linh-vat-tu.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.scss")).default]
    })
], DanhSachYeuCauLinhVatTuComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9pbi1saW5oLXZhdC10dS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFx5ZXUtY2F1LWxpbmgtdmF0LXR1XFxpbi1saW5oLXZhdC10dVxcaW4tbGluaC12YXQtdHUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvaW4tbGluaC12YXQtdHUvaW4tbGluaC12YXQtdHUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9pbi1saW5oLXZhdC10dS9pbi1saW5oLXZhdC10dS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: InLinhVatTuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InLinhVatTuComponent", function() { return InLinhVatTuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let InLinhVatTuComponent = class InLinhVatTuComponent {
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
InLinhVatTuComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
InLinhVatTuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-in-linh-vat-tu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-linh-vat-tu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-linh-vat-tu.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InLinhVatTuComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.scss ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvaW4tcGhpZXUtbGluaC10cnVjLXRpZXAtdmF0LXR1LXBvcHVwL2luLXBoaWV1LWxpbmgtdHJ1Yy10aWVwLXZhdC10dS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: InPhieuLinhTrucTiepVatTuPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuLinhTrucTiepVatTuPopupComponent", function() { return InPhieuLinhTrucTiepVatTuPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let InPhieuLinhTrucTiepVatTuPopupComponent = class InPhieuLinhTrucTiepVatTuPopupComponent {
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
            this.close();
        });
    }
    close() {
        this.dialog.closeAll();
    }
};
InPhieuLinhTrucTiepVatTuPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
InPhieuLinhTrucTiepVatTuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-in-phieu-linh-truc-tiep-vat-tu-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-phieu-linh-truc-tiep-vat-tu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-phieu-linh-truc-tiep-vat-tu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InPhieuLinhTrucTiepVatTuPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-war-status-grid {\n  color: orange;\n  width: auto;\n  height: 15px;\n  margin-top: 15px;\n}\n\nsvg {\n  height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9waGlldS1saW5oLXZhdC10dS1idS1ndWktbGFpLXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFx5ZXUtY2F1LWxpbmgtdmF0LXR1XFxwaGlldS1saW5oLXZhdC10dS1idS1ndWktbGFpLXNoYXJlZFxccGhpZXUtbGluaC12YXQtdHUtYnUtZ3VpLWxhaS1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12YXQtdHUtYnUtZ3VpLWxhaS1zaGFyZWQvcGhpZXUtbGluaC12YXQtdHUtYnUtZ3VpLWxhaS1zaGFyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9waGlldS1saW5oLXZhdC10dS1idS1ndWktbGFpLXNoYXJlZC9waGlldS1saW5oLXZhdC10dS1idS1ndWktbGFpLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXdhci1zdGF0dXMtZ3JpZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogMmVtO1xufSIsIi5pY29uLXdhci1zdGF0dXMtZ3JpZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogMmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: PhieuLinhVatTuBuGuiLaiSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVatTuBuGuiLaiSharedComponent", function() { return PhieuLinhVatTuBuGuiLaiSharedComponent; });
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
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var _duoc_pham_yeu_cau_linh_thuoc_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
















let PhieuLinhVatTuBuGuiLaiSharedComponent = class PhieuLinhVatTuBuGuiLaiSharedComponent {
    constructor(apiService, notificationService, authService, ref, dialog, route) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.dialog = dialog;
        this.route = route;
        this.yeuCauLinhBuVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauLinhVatTu"]();
        this.yeuCauLinhBuDuocPhamSearch = new _duoc_pham_yeu_cau_linh_thuoc_yeu_cau_linh_thuoc_model__WEBPACK_IMPORTED_MODULE_14__["YeuCauLinhBuDuocPhamSearch"]();
        this.linhTuKhoId = null;
        this.linhVeKhoId = null;
        this.linhVeKhoPreviousId = null;
        this.dieuKienLoadGridVatTu = null;
        this.phieuLinhId = 0;
        this.icWarning = _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.trangThai = null;
        this.gridDataSourceVatTu = {
            data: [],
            total: 0
        };
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataGrid = "YeuCauLinhVatTu/GetYeuCauVatTuBenhVienDataForGridAsync";
        this.urlGetTotalPageGrid = "YeuCauLinhVatTu/GetYeuCauVatTuBenhVienTotalPageForGridAsync";
        this.urlGetDataGridChild = "YeuCauLinhVatTu/GetBenhNhanTheoVatTuDataForGridAsync";
        this.urlGetTotalPageGridChild = "YeuCauLinhVatTu/GetBenhNhanTheoVatTuTotalPageForGridAsync";
        this.groups = [{ field: 'Nhom' }];
        this.sortChild = [{ field: 'STT', dir: 'asc' }];
        this.isDaTao = false;
        this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledNguoiTaoPhieu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkAll = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhBuVatTu;
        this.yeuCauLinhBuVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauLinhVatTu"]();
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.yeuCauLinhBuVatTu.LaNguoiTaoPhieu = false;
            this.getById(id);
            this.phieuLinhId = id;
        }
        this.getCurrentUser();
        this.gridColumns = [
            // { Field: "STT", Title: "#", Width: 60, Template: this.STTTemplate },
            { Field: 'CheckBox', Title: '', Width: 50, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && !(this.trangThaiVo.TrangThai == null)) },
            { Field: 'STT', Title: 'STT', Width: 50, Sortable: false, Template: this.STTTemplate, Hidden: (this.trangThaiVo != undefined && this.trangThaiVo != null && this.trangThaiVo.TrangThai != null) },
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
                this.yeuCauLinhBuVatTu.KhoXuatId = parseInt(khoLinhId);
                this.yeuCauLinhBuVatTu.KhoNhapId = parseInt(khoBuId);
                this.linhTuKhoId = parseInt(khoLinhId);
                this.linhVeKhoId = parseInt(khoBuId);
                this.ganDieuKienLoadGridVatTu(parseInt(khoLinhId), parseInt(khoBuId));
            }
        });
    }
    getCurrentUser() {
        if (this.yeuCauLinhBuVatTu.LaNguoiTaoPhieu == null) {
            if (this.yeuCauLinhBuVatTu.NgayYeuCau == null) {
                this.yeuCauLinhBuVatTu.NgayYeuCau = new Date();
            }
            if (this.yeuCauLinhBuVatTu.NhanVienDuyetId == null) {
                this.apiService.get("YeuCauLinhVatTu/GetCurrentUserVatTu").subscribe(resultData => {
                    if (resultData != undefined && resultData != null) {
                        this.yeuCauLinhBuVatTu.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                        this.yeuCauLinhBuVatTu.HoTenNguoiYeuCau = resultData.HoTen;
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
        this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, this.linhVeKhoId);
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
                        this.yeuCauLinhBuVatTu.KhoNhapId = event;
                        this.linhVeKhoId = event;
                        this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, event);
                    }
                    else {
                        this.yeuCauLinhBuVatTu.KhoNhapId = this.linhVeKhoPreviousId;
                        this.linhVeKhoId = event;
                        this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, this.linhVeKhoPreviousId);
                    }
                });
            }
            else {
                this.yeuCauLinhBuVatTu.KhoNhapId = event;
                this.linhVeKhoId = event;
                this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, event);
            }
        }
        else {
            this.ganDieuKienLoadGridVatTu(this.linhTuKhoId, event);
            this.linhVeKhoId = null;
        }
    }
    ganDieuKienLoadGridVatTu(linhTuKhoId, linhVeKhoId) {
        if (this.trangThaiVo != undefined) {
            this.yeuCauLinhBuDuocPhamSearch.TrangThai = this.trangThaiVo.TrangThai;
            this.trangThai = this.trangThaiVo.TrangThai;
        }
        // console.log("TrangThai: ", this.trangThaiVo)
        this.yeuCauLinhBuDuocPhamSearch.LinhTuKhoId = linhTuKhoId;
        this.yeuCauLinhBuDuocPhamSearch.LinhVeKhoId = linhVeKhoId;
        this.yeuCauLinhBuDuocPhamSearch.IsCreate = this.isCreate;
        this.yeuCauLinhBuDuocPhamSearch.YeuCauLinhVatTuId = this.phieuLinhId;
        this.dieuKienLoadGridVatTu = JSON.stringify(this.yeuCauLinhBuDuocPhamSearch);
        if (this.yeuCauLinhBuDuocPhamSearch.TrangThai == null || (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == true)) {
            this.gridVatTu._additionalSearchString = this.dieuKienLoadGridVatTu;
            this.gridVatTu.search();
        }
        if (this.trangThaiVo != undefined && this.trangThaiVo.TrangThai == false) {
            this.gridVatTuTuChoi._additionalSearchString = this.dieuKienLoadGridVatTu;
            this.gridVatTuTuChoi.search();
        }
    }
    onDataBoundGrid(event) {
        if (event != undefined && event != null) {
            if (this.isCreate) {
                this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens = [];
                this.yeuCauLinhBuVatTu.YeuCauLinhVatTuChiTiets = [];
                event.Data.forEach(element => {
                    let yeuCauVatTuBenhVien = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauVatTuBenhVienViewModel"]();
                    yeuCauVatTuBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
                    yeuCauVatTuBenhVien.LaVatTuBHYT = element.LaBHYT;
                    yeuCauVatTuBenhVien.SoLuongTon = element.SoLuongTon;
                    yeuCauVatTuBenhVien.KhoLinhTuId = this.linhTuKhoId;
                    yeuCauVatTuBenhVien.KhoLinhVeId = this.linhVeKhoId;
                    yeuCauVatTuBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
                    yeuCauVatTuBenhVien.SoLuongCanBu = element.SoLuongCanBu;
                    yeuCauVatTuBenhVien.SoLuongDaBu = element.SoLuongDaBu;
                    yeuCauVatTuBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
                    yeuCauVatTuBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
                    this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.push(yeuCauVatTuBenhVien);
                });
            }
            else {
                this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens = [];
                this.yeuCauLinhBuVatTu.YeuCauLinhVatTuChiTiets = [];
                event.Data.forEach(element => {
                    let yeuCauVatTuBenhVien = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["YeuCauVatTuBenhVienViewModel"]();
                    yeuCauVatTuBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
                    yeuCauVatTuBenhVien.LaVatTuBHYT = element.LaBHYT;
                    yeuCauVatTuBenhVien.SoLuongCanBu = element.SoLuongCanBu;
                    yeuCauVatTuBenhVien.SoLuongTon = element.SoLuongTon;
                    yeuCauVatTuBenhVien.KhoLinhTuId = this.yeuCauLinhBuVatTu.KhoXuatId;
                    yeuCauVatTuBenhVien.KhoLinhVeId = this.yeuCauLinhBuVatTu.KhoNhapId;
                    yeuCauVatTuBenhVien.SoLuongYeuCau = element.SoLuongYeuCau;
                    yeuCauVatTuBenhVien.SoLuongDaBu = element.SoLuongDaBu;
                    yeuCauVatTuBenhVien.SLYeuCauLinhThucTe = element.SLYeuCauLinhThucTe;
                    yeuCauVatTuBenhVien.SLYeuCauLinhThucTeMax = element.SLYeuCauLinhThucTeMax;
                    this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.push(yeuCauVatTuBenhVien);
                });
            }
            if (event.Data.length > 0 && (this.yeuCauLinhBuVatTu.KhoXuatId != null || this.yeuCauLinhBuVatTu.KhoXuatId != undefined)
                && (this.yeuCauLinhBuVatTu.KhoNhapId != null || this.yeuCauLinhBuVatTu.KhoNhapId != undefined)) {
                this.hideDuyetbtn.emit(true);
            }
            else {
                this.hideDuyetbtn.emit(false);
            }
        }
        else {
            this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens = [];
        }
    }
    getById(id) {
        var self = this;
        self.loadingPage();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View)) {
            self.apiService.get("YeuCauLinhVatTu/GetYeuCauLinhVatTuBuTao?id=" + id).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    self.closePopupLoadingData();
                    // console.log("data: ", resultData)
                    this.yeuCauLinhBuVatTu = resultData;
                    if (this.yeuCauLinhBuVatTu.LaNguoiTaoPhieu) {
                        this.disabledNguoiTaoPhieu.emit(true);
                    }
                    else {
                        this.disabledNguoiTaoPhieu.emit(false);
                    }
                    if (this.yeuCauLinhBuVatTu.HoTenNguoiYeuCau == null) {
                        this.yeuCauLinhBuVatTu.HoTenNguoiYeuCau = resultData.TenNhanVienYeuCau;
                    }
                    console.log("yeuCauLinhBuVatTu: ", this.yeuCauLinhBuVatTu);
                    if (this.isCreate) {
                        this.linhVeKhoPreviousId = this.yeuCauLinhBuVatTu.KhoNhapId;
                    }
                    this.linhTuKhoId = this.yeuCauLinhBuVatTu.KhoXuatId;
                    this.linhVeKhoId = this.yeuCauLinhBuVatTu.KhoNhapId;
                    if (this.yeuCauLinhBuVatTu.DuocDuyet == null || this.yeuCauLinhBuVatTu.DuocDuyet == false) {
                        this.isCreate = false;
                    }
                    this.ganDieuKienLoadGridVatTu(this.yeuCauLinhBuVatTu.KhoXuatId, this.yeuCauLinhBuVatTu.KhoNhapId);
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
    ganSLThucTeChange(soLuong, vatTuBenhVienId) {
        if (soLuong != undefined && soLuong != null) {
            this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.filter(x => x.VatTuBenhVienId == vatTuBenhVienId).forEach(element => {
                element.SLYeuCauLinhThucTe = soLuong;
            });
        }
        else {
            this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.filter(x => x.VatTuBenhVienId == vatTuBenhVienId).forEach(element => {
                element.SLYeuCauLinhThucTe = null;
            });
        }
    }
    checkBoxDichVu(dataItem, event) {
        let index = this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.findIndex(z => z.VatTuBenhVienId == dataItem.VatTuBenhVienId);
        this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens[index].CheckBox = event;
        let lstDataCurrent = this.gridVatTu.getAllDataFromDatasource();
        if (lstDataCurrent.every(z => z.CheckBox)) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    }
    checkBoxAllChange(event) {
        let lstDataCurrent = this.gridVatTu.getAllDataFromDatasource();
        if (lstDataCurrent.length > 0) {
            lstDataCurrent.forEach(element => {
                element.CheckBox = event;
                let index = this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.findIndex(z => z.VatTuBenhVienId == element.VatTuBenhVienId);
                this.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens[index].CheckBox = event;
            });
        }
    }
    thoiDiemTNChange() {
        if (this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTuFormat != null) {
            this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTuFormat, "dd/mm/yyyy");
        }
        else {
            this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu = null;
        }
        if (this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDenFormat != null) {
            this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].formatDateTime(this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDenFormat, "dd/mm/yyyy");
        }
        else {
            this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen = null;
        }
        this.checkAll = false;
        var queryString = JSON.stringify(this.yeuCauLinhBuDuocPhamSearch);
        this.gridVatTu._additionalSearchString = queryString;
        this.gridVatTu.search();
    }
    getSharedData() {
        this.yeuCauLinhBuVatTu.ThoiDiemChiDinhTu = this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhTu;
        this.yeuCauLinhBuVatTu.ThoiDiemChiDinhDen = this.yeuCauLinhBuDuocPhamSearch.ThoiDiemChiDinhDen;
        return this.yeuCauLinhBuVatTu;
    }
};
PhieuLinhVatTuBuGuiLaiSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauTemplate', { static: true })
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "slYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTu', { static: true })
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "gridVatTu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTuTuChoi', { static: true })
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "gridVatTuTuChoi", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplateChild', { static: true })
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "STTTemplateChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauLinhThucTeTemplate', { static: true })
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "slYeuCauLinhThucTeTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { static: true })
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "checkBoxTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { static: true })
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "checkBoxHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "validationErrorsLinhBu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "trangThaiVo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "isDaTao", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "hideDuyetbtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhVatTuBuGuiLaiSharedComponent.prototype, "disabledNguoiTaoPhieu", void 0);
PhieuLinhVatTuBuGuiLaiSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-vat-tu-bu-gui-lai-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-vat-tu-bu-gui-lai-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-vat-tu-bu-gui-lai-shared.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.scss")).default]
    })
], PhieuLinhVatTuBuGuiLaiSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9waGlldS1saW5oLXZhdC10dS1idS1ndWktbGFpL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHlldS1jYXUtbGluaC12YXQtdHVcXHBoaWV1LWxpbmgtdmF0LXR1LWJ1LWd1aS1sYWlcXHBoaWV1LWxpbmgtdmF0LXR1LWJ1LWd1aS1sYWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12YXQtdHUtYnUtZ3VpLWxhaS9waGlldS1saW5oLXZhdC10dS1idS1ndWktbGFpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9waGlldS1saW5oLXZhdC10dS1idS1ndWktbGFpL3BoaWV1LWxpbmgtdmF0LXR1LWJ1LWd1aS1sYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: PhieuLinhVatTuBuGuiLaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVatTuBuGuiLaiComponent", function() { return PhieuLinhVatTuBuGuiLaiComponent; });
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
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var _phieu_linh_vat_tu_bu_gui_lai_shared_phieu_linh_vat_tu_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.ts");


















let PhieuLinhVatTuBuGuiLaiComponent = class PhieuLinhVatTuBuGuiLaiComponent {
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
        this.trangThaiVo = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__["TrangThaiTaoPhieuLinh"]();
        this.yeuCauLinhVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauLinhVatTu"]();
        this.isHideDuyet = false;
        this.phieuLinhId = null;
        this.flag = true;
        this.isDisabledNguoiTaoPhieu = false;
        this.inPhieuLinhBu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__["PhieuLinhVatTuThuong"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].TaoYeuCauLinhBuVatTu;
        this.route
            .queryParams
            .subscribe(v => {
            this.trangThaiDanhSach = v;
        });
        this.yeuCauLinhVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauLinhVatTu"]();
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
    luuPhieuLinhBuVatTu(daGui) {
        var self = this;
        self.yeuCauLinhVatTu = self.shared.getSharedData();
        if (self.yeuCauLinhVatTu.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
            if (daGui) {
                self.notificationService.showError("Vui lòng chọn vật tư muốn gửi phiếu.");
            }
            else {
                self.notificationService.showError("Vui lòng chọn vật tư muốn lưu phiếu.");
            }
        }
        else {
            var mess = "";
            if (daGui) {
                mess = "Bạn có muốn gửi phiếu lĩnh vật tư này không ?";
            }
            else {
                mess = "Bạn có muốn lưu phiếu lĩnh vật tư này không ?";
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
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1);
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
                element.DuocDuyet = null;
            });
            self.yeuCauLinhVatTu.DuocDuyet = null;
            self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhBu", self.yeuCauLinhVatTu).subscribe((result) => {
                if (result != undefined && result != null) {
                    self.yeuCauLinhVatTu.LastModified = result.LastModified;
                    self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                    self.trangThaiVo.Ten = result.ten;
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                    self.shared.ganDieuKienLoadGridVatTu(self.yeuCauLinhVatTu.KhoXuatId, self.yeuCauLinhVatTu.KhoNhapId);
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
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
            self.yeuCauLinhVatTu.DaGui = true;
            self.loadingPage();
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1);
            self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
                element.DuocDuyet = null;
            });
            self.yeuCauLinhVatTu.DuocDuyet = null;
            self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhBu", self.yeuCauLinhVatTu).subscribe((result) => {
                if (result != undefined && result != null) {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                    self.shared.ganDieuKienLoadGridVatTu(self.yeuCauLinhVatTu.KhoXuatId, self.yeuCauLinhVatTu.KhoNhapId);
                    self.closePopupLoadingData();
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn in phiếu lĩnh vật tư này không ?",
                        },
                    }).afterClosed().subscribe((res) => {
                        if (res == "Yes") {
                            self.loadingPageDaDuyet();
                            self.inPhieuLinhBu.Header = true;
                            self.inPhieuLinhBu.YeuCauLinhVatTuId = result.Id;
                            self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                            self.inPhieuLinhBu.TrangThai = self.trangThaiVo.TrangThai;
                            self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhBu).subscribe(resData => {
                                if (resData != undefined && resData != null) {
                                    self.inPhieuLinhBu.Header = false;
                                    self.closePopupLoadingDataDaDuyet();
                                    self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuongPopupComponent"], {
                                        disableClose: false,
                                        width: '1200px',
                                        data: { Model: resData },
                                    }).afterClosed().subscribe(() => {
                                        self.closePopupLoadingDataDaDuyet();
                                        self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
                            self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
    //     data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửu lại phê duyệt cho lần lĩnh vật tư này không?" }
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
            self.apiService.get("YeuCauLinhVatTu/GetTrangThaiPhieuLinhVatTu?phieuLinhId=" + id).subscribe((result) => {
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
            self.inPhieuLinhBu.YeuCauLinhVatTuId = this.phieuLinhId;
            self.inPhieuLinhBu.LoaiPhieuLinh = 2;
            self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
            self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhBu).subscribe(resData => {
                if (resData != undefined && resData != null) {
                    self.inPhieuLinhBu.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuongPopupComponent"], {
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
            self.yeuCauLinhVatTu = self.shared.getSharedData();
            self.validationErrors = [];
            self.ref.detectChanges();
            self.loadingPageDaDuyet();
            self.inPhieuLinhBu.Header = true;
            self.inPhieuLinhBu.YeuCauLinhVatTuId = self.phieuLinhId;
            self.inPhieuLinhBu.LoaiPhieuLinh = 2;
            self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
            self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhBu).subscribe(resData => {
                if (resData != undefined && resData != null) {
                    self.inPhieuLinhBu.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuongPopupComponent"], {
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
            self.yeuCauLinhVatTu = self.shared.getSharedData();
            if (self.yeuCauLinhVatTu.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
                self.notificationService.showError("Vui lòng chọn vật tư muốn in phiếu.");
            }
            else {
                self.validationErrors = [];
                self.ref.detectChanges();
                self.loadingPageDaDuyet();
                self.inPhieuLinhBu.Header = true;
                self.inPhieuLinhBu.YeuCauLinhVatTuId = self.phieuLinhId;
                self.inPhieuLinhBu.LoaiPhieuLinh = 2;
                self.inPhieuLinhBu.TrangThai = this.trangThaiVo.TrangThai;
                self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1);
                self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
                    element.DuocDuyet = null;
                });
                self.yeuCauLinhVatTu.DuocDuyet = null;
                self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhBu", self.yeuCauLinhVatTu).subscribe((result) => {
                    if (result != undefined && result != null) {
                        self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhBu).subscribe(resData => {
                            if (resData != undefined && resData != null) {
                                self.inPhieuLinhBu.Header = false;
                                self.closePopupLoadingDataDaDuyet();
                                self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuongPopupComponent"], {
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
        this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu'], { queryParams: { holdQuery: data } });
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
PhieuLinhVatTuBuGuiLaiComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _phieu_linh_vat_tu_bu_gui_lai_shared_phieu_linh_vat_tu_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_16__["PhieuLinhVatTuBuGuiLaiSharedComponent"], static: false })
], PhieuLinhVatTuBuGuiLaiComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], PhieuLinhVatTuBuGuiLaiComponent.prototype, "keyEvent", null);
PhieuLinhVatTuBuGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-vat-tu-bu-gui-lai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-vat-tu-bu-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-vat-tu-bu-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.scss")).default]
    })
], PhieuLinhVatTuBuGuiLaiComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9waGlldS1saW5oLXZhdC10dS10aHVvbmctZ3VpLWxhaS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFx5ZXUtY2F1LWxpbmgtdmF0LXR1XFxwaGlldS1saW5oLXZhdC10dS10aHVvbmctZ3VpLWxhaVxccGhpZXUtbGluaC12YXQtdHUtdGh1b25nLWd1aS1sYWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12YXQtdHUtdGh1b25nLWd1aS1sYWkvcGhpZXUtbGluaC12YXQtdHUtdGh1b25nLWd1aS1sYWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS95ZXUtY2F1LWxpbmgtdmF0LXR1L3BoaWV1LWxpbmgtdmF0LXR1LXRodW9uZy1ndWktbGFpL3BoaWV1LWxpbmgtdmF0LXR1LXRodW9uZy1ndWktbGFpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: PhieuLinhVatTuThuongGuiLaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVatTuThuongGuiLaiComponent", function() { return PhieuLinhVatTuThuongGuiLaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_shared_phieu_linh_vat_tu_thuong_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.ts");


















let PhieuLinhVatTuThuongGuiLaiComponent = class PhieuLinhVatTuThuongGuiLaiComponent {
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
        this.trangThaiVo = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_9__["TrangThaiTaoPhieuLinh"]();
        this.isHideDuyet = false;
        this.isDisabledNguoiTaoPhieu = false;
        this.phieuLinhId = null;
        this.inPhieuLinhThuong = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_9__["PhieuLinhVatTuThuong"]();
        this.yeuCauLinhVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_9__["YeuCauLinhVatTu"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].TaoYeuCauLinhThuongVatTu;
        this.route
            .queryParams
            .subscribe(v => {
            this.trangThaiDanhSach = v;
        });
        const id = this.route.snapshot.params.id;
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
        self.yeuCauLinhVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn lưu phiếu lĩnh vật tư này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        self.loadingPage();
                        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
                            element.DuocDuyet = false;
                        });
                        self.yeuCauLinhVatTu.IsLuu = true;
                        self.yeuCauLinhVatTu.DuocDuyet = false;
                        self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe((result) => {
                            if (result != undefined && result != null) {
                                self.yeuCauLinhVatTu.LastModified = result.LastModified;
                                self.yeuCauLinhVatTu.IsLuu = false;
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
                    Message: "Bạn có muốn lưu phiếu lĩnh vật tư này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        self.loadingPage();
                        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
                            element.DuocDuyet = null;
                        });
                        self.yeuCauLinhVatTu.DuocDuyet = null;
                        self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe((result) => {
                            if (result != undefined && result != null) {
                                self.yeuCauLinhVatTu.LastModified = result.LastModified;
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
        self.yeuCauLinhVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.trangThaiVo != undefined && self.trangThaiVo != null && self.trangThaiVo.TrangThai == false) { //Từ chối duyệt
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn gửi phiếu lĩnh vật tư này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        self.yeuCauLinhVatTu.DaGui = true;
                        self.loadingPage();
                        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
                            element.DuocDuyet = false;
                        });
                        self.yeuCauLinhVatTu.IsLuu = true;
                        self.yeuCauLinhVatTu.DuocDuyet = false;
                        self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe((result) => {
                            if (result != undefined && result != null) {
                                self.yeuCauLinhVatTu.LastModified = result.LastModified;
                                self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                                self.trangThaiVo.Ten = result.ten;
                                self.yeuCauLinhVatTu.IsLuu = false;
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
                    Message: "Bạn có muốn gửi phiếu lĩnh vật tư này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                        self.yeuCauLinhVatTu.DaGui = true;
                        self.loadingPage();
                        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                        self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
                            element.DuocDuyet = null;
                        });
                        self.yeuCauLinhVatTu.DuocDuyet = null;
                        self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe((result) => {
                            if (result != undefined && result != null) {
                                self.yeuCauLinhVatTu.LastModified = result.LastModified;
                                self.trangThaiVo.EnumTrangThaiPhieuLinh = result.enumTrangThaiPhieuLinh;
                                self.trangThaiVo.Ten = result.ten;
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                self.closePopupLoadingData();
                                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                                    disableClose: false,
                                    width: "500px",
                                    data: {
                                        Title: "Xác nhận",
                                        Message: "Bạn có muốn in phiếu lĩnh vật tư này không ?",
                                    },
                                }).afterClosed().subscribe((res) => {
                                    if (res == "Yes") {
                                        self.loadingPageDaDuyet();
                                        self.inPhieuLinhThuong.Header = true;
                                        self.inPhieuLinhThuong.YeuCauLinhVatTuId = result.Id;
                                        self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                                        self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
                                        self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(resData => {
                                            if (resData != undefined && resData != null) {
                                                self.closePopupLoadingDataDaDuyet();
                                                self.inPhieuLinhThuong.Header = false;
                                                self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuongPopupComponent"], {
                                                    disableClose: false,
                                                    width: '1200px',
                                                    data: { Model: resData },
                                                }).afterClosed().subscribe(() => {
                                                    self.closePopupLoadingDataDaDuyet();
                                                    self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
                                        this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
        self.yeuCauLinhVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửi lại phê duyệt cho lần lĩnh vật tư này không?" }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                    self.loadingPage();
                    self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                    self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
                        element.DuocDuyet = false;
                    });
                    self.yeuCauLinhVatTu.DuocDuyet = false;
                    self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe((result) => {
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
                                    self.inPhieuLinhThuong.Header = true;
                                    self.inPhieuLinhThuong.YeuCauLinhVatTuId = result.Id;
                                    self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                                    self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
                                    self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(resData => {
                                        if (resData != undefined && resData != null) {
                                            self.inPhieuLinhThuong.Header = false;
                                            self.closePopupLoadingDataDaDuyet();
                                            self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuongPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Model: resData },
                                            }).afterClosed().subscribe(() => {
                                                self.closePopupLoadingDataDaDuyet();
                                                this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
                                    this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
            self.inPhieuLinhThuong.Header = true;
            self.inPhieuLinhThuong.YeuCauLinhVatTuId = this.phieuLinhId;
            self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
            self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
            self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(resData => {
                if (resData != undefined && resData != null) {
                    self.inPhieuLinhThuong.Header = false;
                    self.closePopupLoadingDataDaDuyet();
                    self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuongPopupComponent"], {
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
            self.yeuCauLinhVatTu = self.shared.getSharedData();
            self.validationErrors = [];
            self.ref.detectChanges();
            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
                // self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets = self.yeuCauLinhDuocPham.YeuCauLinhDuocPhamChiTiets.sort((a, b) => (a.Nhom > b.Nhom) ? 1 : -1)
                self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                if (self.trangThaiVo.TrangThai == false) {
                    self.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
                        element.DuocDuyet = false;
                    });
                }
                self.yeuCauLinhVatTu.IsLuu = true;
                self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhThuongVatTu", self.yeuCauLinhVatTu).subscribe((result) => {
                    if (result != undefined && result != null) {
                        self.yeuCauLinhVatTu.LastModified = result.LastModified;
                        self.yeuCauLinhVatTu.IsLuu = false;
                        self.loadingPageDaDuyet();
                        self.inPhieuLinhThuong.Header = true;
                        self.inPhieuLinhThuong.YeuCauLinhVatTuId = result.Id;
                        self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                        self.inPhieuLinhThuong.TrangThai = this.trangThaiVo.TrangThai;
                        self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(resData => {
                            if (resData != undefined && resData != null) {
                                self.inPhieuLinhThuong.Header = false;
                                self.closePopupLoadingDataDaDuyet();
                                self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuongPopupComponent"], {
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
                        self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
            }
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
            self.apiService.get("YeuCauLinhVatTu/GetTrangThaiPhieuLinhVatTu?phieuLinhId=" + id).subscribe((result) => {
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
        this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu'], { queryParams: { holdQuery: data } });
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
PhieuLinhVatTuThuongGuiLaiComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _phieu_linh_vat_tu_thuong_shared_phieu_linh_vat_tu_thuong_shared_component__WEBPACK_IMPORTED_MODULE_10__["PhieuLinhVatTuThuongSharedComponent"], static: false })
], PhieuLinhVatTuThuongGuiLaiComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], PhieuLinhVatTuThuongGuiLaiComponent.prototype, "keyEvent", null);
PhieuLinhVatTuThuongGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-vat-tu-thuong-gui-lai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-vat-tu-thuong-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-vat-tu-thuong-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.scss")).default]
    })
], PhieuLinhVatTuThuongGuiLaiComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.scss ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9waGlldS1saW5oLXZhdC10dS10aHVvbmctcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXHZhdC10dVxceWV1LWNhdS1saW5oLXZhdC10dVxccGhpZXUtbGluaC12YXQtdHUtdGh1b25nLXBvcHVwXFxwaGlldS1saW5oLXZhdC10dS10aHVvbmctcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12YXQtdHUtdGh1b25nLXBvcHVwL3BoaWV1LWxpbmgtdmF0LXR1LXRodW9uZy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS95ZXUtY2F1LWxpbmgtdmF0LXR1L3BoaWV1LWxpbmgtdmF0LXR1LXRodW9uZy1wb3B1cC9waGlldS1saW5oLXZhdC10dS10aHVvbmctcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: PhieuLinhVatTuThuongPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVatTuThuongPopupComponent", function() { return PhieuLinhVatTuThuongPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let PhieuLinhVatTuThuongPopupComponent = class PhieuLinhVatTuThuongPopupComponent {
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
            "<th>PHIẾU LĨNH VẬT TƯ</th>" +
            "</p>", "");
        return new Promise(resolve => {
            resolve(source);
            //this.close();
        });
    }
};
PhieuLinhVatTuThuongPopupComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
PhieuLinhVatTuThuongPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-vat-tu-thuong-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-vat-tu-thuong-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-vat-tu-thuong-popup.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PhieuLinhVatTuThuongPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-war-status-grid {\n  color: red;\n  margin-top: 18px;\n  width: auto;\n  height: 15px;\n}\n\nsvg {\n  height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9waGlldS1saW5oLXZhdC10dS10aHVvbmctc2hhcmVkL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHlldS1jYXUtbGluaC12YXQtdHVcXHBoaWV1LWxpbmgtdmF0LXR1LXRodW9uZy1zaGFyZWRcXHBoaWV1LWxpbmgtdmF0LXR1LXRodW9uZy1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12YXQtdHUtdGh1b25nLXNoYXJlZC9waGlldS1saW5oLXZhdC10dS10aHVvbmctc2hhcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12YXQtdHUtdGh1b25nLXNoYXJlZC9waGlldS1saW5oLXZhdC10dS10aHVvbmctc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24td2FyLXN0YXR1cy1ncmlkIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTVweDtcbn1cblxuc3ZnIHtcbiAgaGVpZ2h0OiAyZW07XG59IiwiLmljb24td2FyLXN0YXR1cy1ncmlkIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTVweDtcbn1cblxuc3ZnIHtcbiAgaGVpZ2h0OiAyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: PhieuLinhVatTuThuongSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVatTuThuongSharedComponent", function() { return PhieuLinhVatTuThuongSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/warning */ "./node_modules/@iconify/icons-ic/warning.js");
/* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
















let PhieuLinhVatTuThuongSharedComponent = class PhieuLinhVatTuThuongSharedComponent {
    constructor(apiService, notificationService, authService, ref, route, dialog) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.route = route;
        this.dialog = dialog;
        this.yeuCauLinhVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_6__["YeuCauLinhVatTu"]();
        this.vatTuGrid = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_6__["YeuCauLinhVatTuChiTiet"]();
        this.lstVatTuGrid = [];
        this.dataVatTuGrid = null;
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
        this.groups = [{ field: 'Nhom' }];
        this.isDaTao = false;
        this.isDuyet = false;
        this.hideDuyetbtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledNguoiTaoPhieu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dangXuLy = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].TaoYeuCauLinhThuongDuocPham;
        this.yeuCauLinhVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_6__["YeuCauLinhVatTu"]();
        this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = new Array();
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.yeuCauLinhVatTu.LaNguoiTaoPhieu = false;
            this.getById(id);
            this.phieuLinhId = id;
        }
        this.getCurrentUser();
        this.gridColumns = [
            { Field: "STT", Title: "#", Width: 30, Template: this.STTTemplate },
            { Field: "Ma", Title: "Mã", Width: 80, ShowTooltip: true },
            { Field: "Ten", Title: "Tên vật tư", Width: 120, ShowTooltip: true },
            { Field: "DVT", Title: "ĐVT", Width: 100 },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "NhaSX", Title: "Hãng SX", Width: 200 },
            { Field: "NuocSX", Title: "Nước SX", Width: 120 },
            { Field: "SLTon", Title: "SL Tồn", Width: 120, Hidden: !this.isCreate },
            { Field: "SoLuongCoTheXuat", Title: "SL Có thể xuất", Width: 120, Hidden: this.isCreate },
            { Field: "SLYeuCau", Title: "SL Yêu Cầu", Width: 120, Template: this.slYeuCauTemplate },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
        ];
    }
    getCurrentUser() {
        this.vatTuGrid.LoaiVatTu = 1;
        if (this.yeuCauLinhVatTu.LaNguoiTaoPhieu == null) {
            if (this.isCreate) {
                this.yeuCauLinhVatTu.NgayYeuCau = new Date();
            }
            this.apiService.get("YeuCauLinhVatTu/GetCurrentUserVatTu").subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.yeuCauLinhVatTu.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                    this.yeuCauLinhVatTu.HoTenNguoiYeuCau = resultData.HoTen;
                }
            });
        }
    }
    chonVatTu(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.vatTuGrid.Ten = dataItem.Ten;
            this.vatTuGrid.Ma = dataItem.Ma;
            this.vatTuGrid.SLTon = dataItem.SLTon;
            this.vatTuGrid.DVT = dataItem.DVT;
            this.vatTuGrid.NhaSX = dataItem.NhaSanXuat;
            this.vatTuGrid.NuocSX = dataItem.NuocSanXuat;
            this.vatTuGrid.LaVatTuBHYT = dataItem.LaVatTuBHYT;
        }
        else {
            this.validationErrors = [];
            this.vatTuGrid.Ten = null;
            this.vatTuGrid.Ma = null;
            this.vatTuGrid.SLTon = null;
            this.vatTuGrid.SLYeuCau = null;
            this.vatTuGrid.DVT = null;
            this.vatTuGrid.NhaSX = null;
            this.vatTuGrid.NuocSX = null;
            this.vatTuGrid.LaVatTuBHYT = null;
        }
    }
    getArrayVatTuBenhVienId() {
        this.vatTuGrid.VatTuBenhViens = new Array();
        this.lstVatTuGrid.forEach(element => {
            let vatTuBenhVien = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_6__["VatTuGridViewModelValidator"]();
            vatTuBenhVien.VatTuBenhVienId = element.VatTuBenhVienId;
            vatTuBenhVien.LaVatTuBHYT = element.LaVatTuBHYT;
            this.vatTuGrid.VatTuBenhViens.push(vatTuBenhVien);
            console.log("data BenhViens: ", this.vatTuGrid.VatTuBenhViens);
        });
    }
    themVatTu() {
        var self = this;
        //self.getArrayVatTuBenhVienId();
        self.validationErrors = [];
        self.validationErrorsLinhThuong = [];
        self.ref.detectChanges();
        if (self.vatTuGrid.LoaiVatTu == 1) {
            self.vatTuGrid.LaVatTuBHYT = false;
        }
        else {
            self.vatTuGrid.LaVatTuBHYT = true;
        }
        self.vatTuGrid.KhoXuatId = self.yeuCauLinhVatTu.KhoXuatId;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add)) {
            if (this.dangXuLy)
                return;
            this.dangXuLy = true;
            self.apiService.post("YeuCauLinhVatTu/ThemLinhThuongVatTuGridVo", self.vatTuGrid).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    self.lstVatTuGrid.push(resultData);
                    self.setValueForGridVatTu();
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
    setValueForGridVatTu() {
        //this.lstVatTuGrid = this.lstVatTuGrid.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT|| a.Ten > b.Ten) ? 1 : -1)
        this.gridDataSource = {
            data: this.lstVatTuGrid,
            total: this.lstVatTuGrid.length
        };
        let STT = 1;
        this.lstVatTuGrid.forEach(element => {
            element.STT = STT;
            STT++;
        });
        this.getArrayVatTuBenhVienId();
        this.gridVatTu.gridDataSource = this.gridDataSource;
        this.gridVatTu.setDataSource();
        this.pushDataVatTu();
        console.log("this.list: ", this.lstVatTuGrid);
        if (this.lstVatTuGrid.length > 0) {
            this.hideDuyetbtn.emit(true);
            this.icDisable = true;
        }
        else {
            this.hideDuyetbtn.emit(false);
            this.icDisable = false;
        }
        //console.log(this.icDisable)
    }
    pushDataVatTu() {
        this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = new Array();
        this.lstVatTuGrid.forEach(obj => {
            let model = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_6__["YeuCauLinhVatTuChiTiet"]();
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
            this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.push(model);
        });
    }
    xoaVatTu(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.lstVatTuGrid.splice(this.lstVatTuGrid.findIndex((x) => x == dataItem), 1);
                this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                this.validationErrorsLinhThuong = [];
                this.setValueForGridVatTu();
            }
        });
    }
    huy() {
        this.validationErrors = [];
        this.vatTuGrid.Ten = null;
        this.vatTuGrid.VatTuBenhVienId = null;
        this.vatTuGrid.SLTon = null;
        this.vatTuGrid.SLYeuCau = null;
        this.vatTuGrid.DVT = null;
        this.vatTuGrid.NhaSX = null;
        this.vatTuGrid.NuocSX = null;
        this.vatTuGrid.LaVatTuBHYT = null;
    }
    clearGridVatTu() {
        this.huy();
        this.lstVatTuGrid = [];
        this.gridDataSource = {
            data: this.lstVatTuGrid,
            total: 0
        };
        this.gridVatTu.gridDataSource = this.gridDataSource;
        this.gridVatTu.setDataSource();
        this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets = [];
    }
    getById(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View)) {
            self.apiService.get("YeuCauLinhVatTu/GetPhieuLinhThuongVatTu?id=" + id).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.yeuCauLinhVatTu = resultData;
                    if (this.yeuCauLinhVatTu.LaNguoiTaoPhieu) {
                        this.disabledNguoiTaoPhieu.emit(true);
                    }
                    else {
                        this.disabledNguoiTaoPhieu.emit(false);
                    }
                    // if (this.yeuCauLinhVatTu.DuocDuyet == null) {
                    //   this.isCreate = true;
                    // }
                    this.lstVatTuGrid = [];
                    resultData.YeuCauLinhVatTuChiTiets.forEach(element => {
                        this.lstVatTuGrid.push(element);
                    });
                    //this.getArrayVatTuBenhVienId();
                    this.setValueForGridVatTu();
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
        this.setValueForGridVatTu();
        this.yeuCauLinhVatTu.YeuCauLinhVatTuChiTiets.forEach(element => {
            if (element.SoLuongCoTheXuat == undefined || element.SoLuongCoTheXuat == null) {
                element.IsValidator = false;
            }
        });
        return this.yeuCauLinhVatTu;
    }
    onKey(event) {
        if (event.key == "Enter") {
            if (this.isSelectDuocPham != true) {
                this.themVatTu();
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
PhieuLinhVatTuThuongSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], PhieuLinhVatTuThuongSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], PhieuLinhVatTuThuongSharedComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTu', { static: true })
], PhieuLinhVatTuThuongSharedComponent.prototype, "gridVatTu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], PhieuLinhVatTuThuongSharedComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauTemplate', { static: true })
], PhieuLinhVatTuThuongSharedComponent.prototype, "slYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuThuongSharedComponent.prototype, "isDaTao", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuThuongSharedComponent.prototype, "trangThaiVo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuThuongSharedComponent.prototype, "validationErrorsLinhThuong", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuThuongSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuThuongSharedComponent.prototype, "isDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhVatTuThuongSharedComponent.prototype, "hideDuyetbtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhVatTuThuongSharedComponent.prototype, "disabledNguoiTaoPhieu", void 0);
PhieuLinhVatTuThuongSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-vat-tu-thuong-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-vat-tu-thuong-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-vat-tu-thuong-shared.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.scss")).default]
    })
], PhieuLinhVatTuThuongSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS9waGlldS1saW5oLXZhdC10dS10cnVjLXRpZXAtZ3VpLWxhaS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFx5ZXUtY2F1LWxpbmgtdmF0LXR1XFxwaGlldS1saW5oLXZhdC10dS10cnVjLXRpZXAtZ3VpLWxhaVxccGhpZXUtbGluaC12YXQtdHUtdHJ1Yy10aWVwLWd1aS1sYWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12YXQtdHUtdHJ1Yy10aWVwLWd1aS1sYWkvcGhpZXUtbGluaC12YXQtdHUtdHJ1Yy10aWVwLWd1aS1sYWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12YXQtdHUtdHJ1Yy10aWVwLWd1aS1sYWkvcGhpZXUtbGluaC12YXQtdHUtdHJ1Yy10aWVwLWd1aS1sYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: PhieuLinhVatTuTrucTiepGuiLaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVatTuTrucTiepGuiLaiComponent", function() { return PhieuLinhVatTuTrucTiepGuiLaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _phieu_linh_vat_tu_truc_tiep_shared_phieu_linh_vat_tu_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _in_phieu_linh_truc_tiep_vat_tu_popup_in_phieu_linh_truc_tiep_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.ts");
/* harmony import */ var _phieu_linh_vt_truc_tiep_cho_goi_shared_phieu_linh_vt_truc_tiep_cho_goi_shared_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.ts");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var _popup_thong_bao_vt_khong_the_tao_popup_thong_bao_vt_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.ts");






















let PhieuLinhVatTuTrucTiepGuiLaiComponent = class PhieuLinhVatTuTrucTiepGuiLaiComponent {
    constructor(apiService, dialog, notificationService, authService, router, ref, route) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.route = route;
        this.yeuCauLinhVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__["LinhTrucTiepVatTu"]();
        this.loading = false;
        this.popupLoadingData = null;
        this.inPhieuLinhTrucTiep = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__["PhieuLinhVatTuTrucTiep"]();
        this.isShow = false;
        this.isShowLuuDuyetLai = false;
        this.quyenUpdate = false;
        this.shareChoGoi = false;
        this.groups = [
            {
                field: "VatTuId",
                aggregates: [
                    { field: 'SoLuongYeuCau', aggregate: 'sum' },
                ],
            },
        ];
        this.state = {
            group: this.groups,
        };
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].TaoYeuCauLinhTrucTiepVatTu;
        this.route
            .queryParams
            .subscribe(v => {
            this.trangThaiDanhSach = v;
            if (this.trangThaiDanhSach.holdQuery == 'true') {
                this.shareChoGoi = true;
            }
        });
        this.trangThai = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__["TrangThaiDuyetYeuCauLinh"]();
        if (window.location.protocol == "http:") {
            this.inPhieuLinhTrucTiep.Hosting = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhTrucTiep.Hosting = "https://" + window.location.host;
        }
        console.log("asdsssss:", this.trangThai);
    }
    cancel() {
        this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu'], { queryParams: { holdQuery: true } });
    }
    inPhieu() {
        var self = this;
        if (self.shareChoGoi) {
            self.yeuCauLinhVatTu = this.shared.getSharedData();
        }
        else {
            self.yeuCauLinhVatTu = this.shared1.getSharedData();
        }
        // self.yeuCauLinhVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        self.inPhieuLinhTrucTiep.Header = true;
        if (this.trangThai.DuocDuyet == false) {
            self.inPhieuLinhTrucTiep.TrangThaiIn = false;
        }
        else {
            self.inPhieuLinhTrucTiep.TrangThaiIn = true;
        }
        self.inPhieuLinhTrucTiep.YeuCauLinhVatTuId = self.yeuCauLinhVatTu.Id;
        self.apiService.post("YeuCauLinhVatTu/InPhieuLinhTrucTiepVatTu", self.inPhieuLinhTrucTiep).subscribe(resData => {
            if (resData != undefined && resData != null) {
                self.inPhieuLinhTrucTiep.Header = false;
                self.dialog.open(_in_phieu_linh_truc_tiep_vat_tu_popup_in_phieu_linh_truc_tiep_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_17__["InPhieuLinhTrucTiepVatTuPopupComponent"], {
                    disableClose: false,
                    width: '1200px',
                    height: 'auto',
                    //height: '600',
                    data: { Model: resData },
                }).afterClosed().subscribe(() => {
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
    getTrangThaiYeuCau(event) {
        if (event != undefined && event != null) {
            this.trangThai = event;
            this.trangThai = event;
            if (this.trangThai.DuocDuyet == true) {
                this.isShow = false;
                this.isShowLuuDuyetLai = true;
            }
            else if (this.trangThai.DuocDuyet == false) {
                this.isShow = false;
                this.isShowLuuDuyetLai = true;
            }
            else {
                this.isShow = true;
                this.isShowLuuDuyetLai = true;
            }
        }
    }
    // luuVaGuiDuyetLai() {
    //   this.save();
    // }
    quyenUpdatePhieuLinh(event) {
        this.quyenUpdate = event;
    }
    guiLaiPhieu() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
            self.yeuCauLinhVatTu = self.shared.getSharedData();
            self.validationErrors = [];
            self.ref.detectChanges();
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn gửi lại phiếu lĩnh vật tư này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    let kiemTraCoDuocPhamKhongDuTon = this.getItemKhongDuTon(self.yeuCauLinhVatTu.DanhSachVatTuTonKhongDus);
                    self.closePopupLoadingData();
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (kiemTraCoDuocPhamKhongDuTon.length == 0) {
                        this.newCreate();
                    }
                    else {
                        self.dialog.open(_popup_thong_bao_vt_khong_the_tao_popup_thong_bao_vt_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_20__["PopupThongBaoVtKhongTheTaoComponent"], {
                            disableClose: false,
                            width: '500px',
                            data: kiemTraCoDuocPhamKhongDuTon,
                        }).afterClosed().subscribe((res) => {
                            if (res == "Yes") {
                                this.newCreate();
                            }
                        });
                    }
                }
                // else{
                //   self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
                // }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    getItemKhongDuTon(danhSachYeuCauVatTuBenhVien) {
        let data = [];
        let dataKhongChoTao = [];
        let dataList = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_19__["process"])(danhSachYeuCauVatTuBenhVien, this.state);
        console.log("::::::::::::::::::::::", dataList);
        dataList.data.forEach(element => {
            let tongSlYeuCau = 0;
            let tenVatTu = "";
            let slTon = 0;
            if (element.items.length != 0) {
                element.items.forEach(element => {
                    tongSlYeuCau += element.SoLuongYeuCau;
                    tenVatTu = element.TenVatTu;
                    slTon = element.SoLuongTon;
                });
            }
            let objGroup = {
                VatTuId: element.value,
                TenVatTu: tenVatTu,
                SoLuongYeuCau: tongSlYeuCau,
                SoLuongTon: slTon
            };
            data.push(objGroup);
            let dataSLKhongChoTao = data.filter(d => d.SoLuongTon < d.SoLuongYeuCau);
            if (dataSLKhongChoTao.length != 0) {
                dataSLKhongChoTao.forEach(element => {
                    dataKhongChoTao.push(element);
                });
            }
        });
        return dataKhongChoTao;
    }
    newCreate() {
        var self = this;
        self.loadingPage();
        self.apiService.post("YeuCauLinhVatTu/GuiLaiPhieuLinhTrucTiep", self.yeuCauLinhVatTu).subscribe((result) => {
            if (result != undefined && result != null) {
                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                self.closePopupLoadingData();
                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                    disableClose: false,
                    width: "500px",
                    data: {
                        Title: "Xác nhận",
                        Message: "Bạn có muốn in phiếu lĩnh vật tư này không ?",
                    },
                }).afterClosed().subscribe((res) => {
                    if (res == "Yes") {
                        self.loadingPage();
                        self.inPhieuLinhTrucTiep.Header = true;
                        self.inPhieuLinhTrucTiep.YeuCauLinhVatTuId = result;
                        self.inPhieuLinhTrucTiep.TrangThaiIn = true;
                        self.apiService.post("YeuCauLinhVatTu/InPhieuLinhTrucTiepVatTu", self.inPhieuLinhTrucTiep).subscribe(resData => {
                            if (resData != undefined && resData != null) {
                                self.inPhieuLinhTrucTiep.Header = false;
                                self.dialog.open(_in_phieu_linh_truc_tiep_vat_tu_popup_in_phieu_linh_truc_tiep_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_17__["InPhieuLinhTrucTiepVatTuPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: { Model: resData },
                                }).afterClosed().subscribe(() => {
                                    self.closePopupLoadingData();
                                    self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
                        //self.closePopupLoadingData();
                        self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
};
PhieuLinhVatTuTrucTiepGuiLaiComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp', { read: _phieu_linh_vt_truc_tiep_cho_goi_shared_phieu_linh_vt_truc_tiep_cho_goi_shared_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhVtTrucTiepChoGoiSharedComponent"], static: false })
], PhieuLinhVatTuTrucTiepGuiLaiComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('temp1', { read: _phieu_linh_vat_tu_truc_tiep_shared_phieu_linh_vat_tu_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_2__["PhieuLinhVatTuTrucTiepSharedComponent"], static: false })
], PhieuLinhVatTuTrucTiepGuiLaiComponent.prototype, "shared1", void 0);
PhieuLinhVatTuTrucTiepGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-vat-tu-truc-tiep-gui-lai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-vat-tu-truc-tiep-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-vat-tu-truc-tiep-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.scss")).default]
    })
], PhieuLinhVatTuTrucTiepGuiLaiComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.scss ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12YXQtdHUtdHJ1Yy10aWVwLXNoYXJlZC9waGlldS1saW5oLXZhdC10dS10cnVjLXRpZXAtc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: PhieuLinhVatTuTrucTiepSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVatTuTrucTiepSharedComponent", function() { return PhieuLinhVatTuTrucTiepSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");













let PhieuLinhVatTuTrucTiepSharedComponent = class PhieuLinhVatTuTrucTiepSharedComponent {
    constructor(notificationService, cdRef, dialog, apiService, route, baseService, authService) {
        this.notificationService = notificationService;
        this.cdRef = cdRef;
        this.dialog = dialog;
        this.apiService = apiService;
        this.route = route;
        this.baseService = baseService;
        this.authService = authService;
        this.linhTrucTiep = {};
        this.linhTrucTiepVatTuObject = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["LinhVatTuTrucTiep"]();
        this.phieuLinhTrucTiep = {};
        this.thongtinVatTuchitiet = [];
        this.linhTrucTiepVatTuitem = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["LinhTrucTiepVatTu"]();
        this.linhTrucTiepVatTu = [];
        this.gridDataSource = {};
        this.gridDataSourceCreate = {};
        this.gridColumns = [];
        this.gridColumnTuChois = [];
        this.gridChildColumns = [];
        this.gridColumnsDaDuyet = [];
        this.linhVeKhoa = "";
        this.nguoiYeuCau = "";
        this.nguoiDuyet = "";
        this.ngayDuyet = null;
        this.ghiChu = "";
        this.lyDoKhongDuyet = "";
        this.urlGetDataChild = "YeuCauLinhVatTu/GetAllYeuCauLinhThuocTuKho";
        this.urlGetDataDaTaoChild = "YeuCauLinhVatTu/GetAllYeuCauLinhThuocTuKhoDaTao";
        this.searchDanhSachThongVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["SearchDanhSachThongVatTu"]();
        this.khoLinhIdSearch = 0;
        this.phongLinhIdSearch = 0;
        this.dateBatDau = "";
        this.dateKetThuc = "";
        this.linhTrucTiepMasterName = "masterLinhTT";
        this.checkChild = false;
        this.quyenUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDaTao = false;
        this.groups = [{ field: 'LoaiThuoc' }];
        this.groupChilds = [{ field: 'MaTN' }];
        this.yeuCauLinhVatTuId = 0;
        this.ishowpopupComBoBox = false;
        this.isShowDuyet = false;
        this.ishowTrangThaiDuyet = false;
        this.trangThaiShowDuyet = false;
        this.quyenUpdatePhieu = false;
        this.KiemTraCheckGrid = false;
        this.popupLoadingData = null;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            let khoLinhId = params['KhoLinhId'];
            let phongLinhVeId = 0;
            this.khoLinhIdSearch = khoLinhId;
            this.phongLinhIdSearch = phongLinhVeId;
            if (khoLinhId != undefined && phongLinhVeId != undefined && khoLinhId > 0) {
                this.showGridTrangThai = true;
                this.quyenUpdatePhieu = true;
                this.KiemTraCheckGrid = true;
                this.apiService.post('YeuCauLinhVatTu/ThongTinDanhSachCanLinh?idKhoLinh=' + khoLinhId + "&phongLinhVeId=" + phongLinhVeId).subscribe(resultData => {
                    this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                    this.linhTrucTiepVatTuObject.KhoNhapId = resultData.LinhVePhongId;
                    this.linhVeKhoa = resultData.LinhVeKhoa;
                    this.ngayYeuCau = new Date();
                    this.nguoiYeuCau = resultData.NguoiYeuCau;
                    this.ghiChu = resultData.GhiChu;
                    this.phieuLinhTrucTiep.KeyId = parseInt(khoLinhId);
                    this.phonglamViecId = phongLinhVeId;
                    this.apiService.post('YeuCauLinhVatTu/GetData', { idKhoLinh: parseInt(khoLinhId), phongLinhVeId: phongLinhVeId, dateSearchStart: "", dateSearchEnd: "" }).subscribe(
                    // this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetData?idKhoLinh=' + parseInt(khoLinhId) + '&phongDangNhapId=' + phongLinhVeId).subscribe(
                    resultData => {
                        this.gridDataSource = {
                            data: resultData,
                            total: resultData.length
                        };
                        let STT = 1;
                        resultData.forEach(element => {
                            element.STT = STT;
                            STT++;
                        });
                        resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1);
                        this.setDataGridView();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }, (err) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        });
        this.gridChildColumns = [
            { Field: "STT", Title: "#", Width: 60 },
            { Field: "MaTN", Title: "Mã TN", Width: 100 },
            { Field: "MaBN", Title: "Mã NB", Width: 100 },
            { Field: "HoTen", Title: "Họ tên", Width: 180 },
            { Field: "SLYeuCau", Title: "SL", Width: 120 },
            { Field: "Action", Title: "", Width: 80 }
        ];
        this.gridColumns = [
            { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isCreate },
            { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate, },
            // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            // { Field: "HoatChat", Title: "Mã vật tư", Width: 180 },
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "HangSX", Title: "Hãng SX", Width: 180 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            { Field: "SoLuongTon", Title: "SL tồn", Width: 100 },
            { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
            { Field: "DVKham", Title: "DV Khám", Width: 180 },
            { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
            { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
            { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
        ];
        this.gridColumnTuChois = [
            { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isCreate },
            { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate, },
            // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            // { Field: "HoatChat", Title: "Mã vật tư", Width: 180 },
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "HangSX", Title: "Hãng SX", Width: 180 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            //{ Field: "SoLuongTon", Title: "SL tồn", Width: 100 },
            { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
            { Field: "DVKham", Title: "DV Khám", Width: 180 },
            { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
            { Field: "NgayDieuTriTuChoi", Title: "Ngày điều trị", Width: 120 },
            { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
        ];
        this.gridColumnsDaDuyet = [
            { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isCreate },
            { Field: "LoaiThuoc", Title: "LoaiThuoc", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate, },
            // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
            // { Field: "HoatChat", Title: "Mã vật tư", Width: 180 },
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "HangSX", Title: "Hãng SX", Width: 180 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            //{ Field: "SoLuongTon", Title: "SL tồn", Width: 100 },
            { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
            { Field: "DVKham", Title: "DV Khám", Width: 180 },
            { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
            { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
            { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
        ];
        this.phieuLinhTrucTiep = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["KhoLinhTu"]();
        this.daDuyet = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["DaDuyet"]();
        this.ngayYeuCau = new Date();
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.getTrangThaiDuyet(id);
            this.isCreate = true;
            if (this.isCreate == true) {
                this.ishowpopupComBoBox = true;
            }
            this.isDaTao = true;
            this.yeuCauLinhVatTuId = id;
        }
        this.phonglamViecId = this.authService.getPhongLamViecId();
        this.getNhanVienId = this.authService.getAccessUser();
    }
    ChonKhoLinhChange(data) {
        this.linhVeKhoa = "";
        this.ngayYeuCau = null;
        this.nguoiYeuCau = "";
        this.ghiChu = "";
        this.gridChild.gridDataSource = [];
        this.showGridTrangThai = true;
        if (this.ishowpopupComBoBox == false) {
            if (data == undefined || data == null) {
                this.linhTrucTiepVatTuObject.KhoXuatId = null;
                this.gridDataSource = {
                    data: [],
                    total: 0
                };
                this.setDataGridViewRefesh();
            }
            else {
                this.phieuLinhTrucTiep.KeyId = data.KeyId;
                this.phieuLinhTrucTiep.DisplayName = data.DisplayName;
                this.apiService.post('YeuCauLinhVatTu/ThongTinLinhTuKho?idKhoLinh=' + data.KeyId).subscribe(resultData => {
                    this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultData[0].NhanVienYeuCauId;
                    this.linhTrucTiepVatTuObject.KhoNhapId = resultData[0].linhVeKhoaId;
                    this.linhVeKhoa = resultData[0].linhVeKhoa;
                    this.ngayYeuCau = new Date();
                    this.nguoiYeuCau = resultData[0].NguoiYeuCau;
                    this.ghiChu = resultData[0].GhiChu;
                    this.apiService.post('YeuCauLinhVatTu/GetData?idKhoLinh=' + data.KeyId + '&phongDangNhapId=' + resultData[0].linhVeKhoaId).subscribe(resultData => {
                        this.gridDataSource = {
                            data: resultData,
                            total: resultData.length
                        };
                        let STT = 1;
                        resultData.forEach(element => {
                            element.STT = STT;
                            STT++;
                        });
                        resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1);
                        this.setDataGridView();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }, (err) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        }
        else {
            if (data == undefined || data == null) {
                this.linhTrucTiepVatTuObject.KhoXuatId = null;
                this.gridDataSource = {
                    data: [],
                    total: 0
                };
                this.setDataGridViewRefesh();
            }
            else {
                var self = this;
                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                    disableClose: false,
                    width: "500px",
                    data: {
                        Title: "Xác nhận",
                        Message: "Bạn có muốn thay đổi kho ?",
                    },
                }).afterClosed().subscribe((res) => {
                    this.phieuLinhTrucTiep.KeyId = data.KeyId;
                    this.phieuLinhTrucTiep.DisplayName = data.DisplayName;
                    this.apiService.post('YeuCauLinhVatTu/ThongTinLinhTuKho?idKhoLinh=' + data.KeyId).subscribe(resultData => {
                        this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultData[0].NhanVienYeuCauId;
                        this.linhTrucTiepVatTuObject.KhoNhapId = resultData[0].linhVeKhoaId;
                        this.linhVeKhoa = resultData[0].linhVeKhoa;
                        this.ngayYeuCau = new Date();
                        this.nguoiYeuCau = resultData[0].NguoiYeuCau;
                        this.ghiChu = resultData[0].GhiChu;
                        this.apiService.post('YeuCauLinhVatTu/GetData?idKhoLinh=' + data.KeyId + '&phongDangNhapId=' + resultData[0].linhVeKhoaId).subscribe(resultData => {
                            this.gridDataSource = {
                                data: resultData,
                                total: resultData.length
                            };
                            let STT = 1;
                            resultData.forEach(element => {
                                element.STT = STT;
                                STT++;
                            });
                            resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1);
                            this.setDataGridView();
                        }, (err) => {
                            this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                this.notificationService.showError(err.Message);
                            }
                        });
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                });
            }
        }
    }
    setDataGridView() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    setDataGridViewRefesh() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    OnDataBound(dataChild) {
    }
    getSharedData() {
        //thong tin login 
        this.validationErrors = [];
        this.linhTrucTiepVatTuObject.GhiChu = this.ghiChu;
        //thong tin login 
        this.validationErrors = [];
        this.linhTrucTiepVatTuObject.GhiChu = this.ghiChu;
        //-----------------xử lý phiếu linh từ ngày - đến ngày---------------------//
        //----Từ ngày-------------------------------------------------------------//
        if (this.searchDanhSachThongVatTu.TuNgay != null) {
            this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopTuNgay = this.searchDanhSachThongVatTu.TuNgay;
        }
        else {
            let yeuCauVatTuBenhViens = [];
            yeuCauVatTuBenhViens = this.gridDichVuDuocCheck();
            if (yeuCauVatTuBenhViens.length != 0) {
                let listSortNhoNhatDenLonNhat = yeuCauVatTuBenhViens.sort((a, b) => (new Date(a.NgayDieuTri) > new Date(b.NgayDieuTri)) ? 1 : -1);
                this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopTuNgay = new Date(listSortNhoNhatDenLonNhat[0].NgayDieuTri);
            }
        }
        //----đến ngày-------------------------------------------------------------//
        if (this.searchDanhSachThongVatTu.DenNgay != null) {
            this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopDenNgay = this.searchDanhSachThongVatTu.DenNgay;
        }
        else {
            this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopDenNgay = null;
        }
        //--------------end xử lý phiếu linh từ ngày - đến ngày---------------------//
        if (this.phieuLinhTrucTiep.KeyId != null) {
            this.linhTrucTiepVatTuObject.KhoXuatId = this.phieuLinhTrucTiep.KeyId;
        }
        // yeucau vat tu benh vien
        if (this.gridDataSource.data == null || this.gridDataSource.data == undefined) {
            // this.validationErrors = [];
        }
        else {
            this.linhTrucTiepVatTuObject.YeuCauVatTuBenhViensTT = new Array();
            this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds = new Array();
            this.linhTrucTiepVatTuObject.DanhSachVatTuTonKhongDus = new Array();
            this.gridDataSource.data.forEach(element => {
                if (element.IsCheckRowItem == true) {
                    element.ListYeuCauVatTuBenhViens.forEach(item => {
                        if (item.IsCheckRowItem == true) {
                            let index = this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.findIndex(sp => sp == item.Id);
                            if (index == -1) {
                                this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.push(item.Id);
                                let vtKhongDuTon = {
                                    VatTuId: item.VatTuId,
                                    TenVatTu: item.TenVatTu,
                                    SoLuongTon: item.SoLuongTon,
                                    SoLuongYeuCau: item.SLYeuCau
                                };
                                this.linhTrucTiepVatTuObject.DanhSachVatTuTonKhongDus.push(vtKhongDuTon);
                            }
                        }
                    });
                }
            });
        }
        this.setDataGridView();
        return this.linhTrucTiepVatTuObject;
    }
    getTrangThaiDuyet(id) {
        this.apiService.post('YeuCauLinhVatTu/GetTrangThaiDuyet?IdYeuCauLinh=' + id).subscribe(resultData => {
            this.trangThaiDuyet = resultData;
            if (this.trangThaiDuyet == true) {
                this.trangThaiYeuCau.emit(new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiDuyetYeuCauLinh"]("Đã duyệt", resultData));
                this.apiService.post('YeuCauLinhVatTu/GetDaDuyet?IdYeuCauLinh=' + id).subscribe(resultData => {
                    this.daDuyet.NguoiDuyet = resultData.NguoiDuyet;
                    this.daDuyet.NgayDuyet = resultData.NgayDuyet;
                    if (this.daDuyet.NguoiDuyet != null && this.daDuyet.NgayDuyet != null) {
                        this.isShowDuyet = true;
                        this.isDaTao = true;
                        this.showGridTrangThai = true;
                    }
                });
            }
            else if (this.trangThaiDuyet == false) {
                this.trangThaiYeuCau.emit(new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiDuyetYeuCauLinh"]("Từ chối duyệt", resultData));
                this.apiService.post('YeuCauLinhVatTu/GetDaDuyet?IdYeuCauLinh=' + id).subscribe(resultData => {
                    this.daDuyet.NguoiDuyet = resultData.NguoiDuyet;
                    this.daDuyet.NgayDuyet = resultData.NgayDuyet;
                    if (this.daDuyet.NguoiDuyet != null && this.daDuyet.NgayDuyet != null) {
                        this.trangThaiShowDuyet = true;
                        this.isDaTao = true;
                        this.showGridTrangThai = false;
                    }
                });
            }
            else {
                this.trangThaiYeuCau.emit(new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiDuyetYeuCauLinh"]("Đang chờ duyệt", resultData));
                this.daDuyet.NguoiDuyet = null;
                this.daDuyet.NgayDuyet = null;
                if (this.daDuyet.NguoiDuyet == null && this.daDuyet.NgayDuyet == null) {
                    this.isShowDuyet = false;
                    this.isDaTao = false;
                    this.showGridTrangThai = true;
                }
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    getById(id) {
        var self = this;
        this.linhTrucTiepVatTuObject.Id = id;
        self.apiService.get("YeuCauLinhVatTu/GetALL?id=" + id).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
                this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
                this.lyDoKhongDuyet = resultData.LyDoKhongDuyet;
                self.apiService.post('YeuCauLinhVatTu/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + id).subscribe(resultDatas => {
                    this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
                    this.linhTrucTiepVatTuObject.KhoNhapId = resultDatas[0].LinhVePhongId;
                    this.linhVeKhoa = resultDatas[0].LinhVeKhoa;
                    this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
                    let dataTime = resultDatas[0].NgayYeuCau;
                    this.ngayYeuCau = dataTime;
                    this.ghiChu = resultDatas[0].GhiChu;
                    this.phonglamViecId = resultDatas[0].NoiChiDinhId;
                    this.phonglamViecId = resultDatas[0].NoiChiDinhId;
                    if (this.getNhanVienId.AccessToken.Id == this.linhTrucTiepVatTuObject.NhanVienYeuCauId) {
                        this.quyenUpdatePhieu = true;
                        this.quyenUpdate.emit(true);
                    }
                    let trangThai = 0;
                    if (this.trangThaiDuyet == true) {
                        trangThai = 1;
                    }
                    else if (this.trangThaiDuyet == null) {
                        trangThai = 1;
                    }
                    else {
                        trangThai = 0;
                        this.showGridTrangThai = false;
                    }
                    this.apiService.post('YeuCauLinhVatTu/GetDataDaTao?idKhoLinh=' + resultData.KhoXuatId + '&idYeuCauLinhVatTu=' + id + '&phongDangNhapId=' + resultDatas[0].NoiChiDinhId + "&trangThai=" + trangThai).subscribe(resultData => {
                        this.gridDataSource = {
                            data: resultData,
                            total: resultData.length
                        };
                        let STT = 1;
                        resultData.forEach(element => {
                            element.STT = STT;
                            STT++;
                        });
                        resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1);
                        this.setDataGridView();
                        this.setDataGridView();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }, (err) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
    changeTuNgay(event) {
        this.timkiem();
    }
    changeDenNgay(event) {
        this.timkiem();
    }
    blur() {
        this.timkiem();
    }
    timkiem() {
        if (this.khoLinhIdSearch != undefined && this.phongLinhIdSearch != undefined && this.khoLinhIdSearch > 0) {
            this.showGridTrangThai = true;
            this.quyenUpdatePhieu = true;
            this.KiemTraCheckGrid = true;
            this.loadingPage();
            this.apiService.post('YeuCauLinhVatTu/ThongTinDanhSachCanLinh?idKhoLinh=' + this.khoLinhIdSearch + "&phongLinhVeId=" + this.phongLinhIdSearch).subscribe(resultData => {
                this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                this.linhTrucTiepVatTuObject.KhoNhapId = resultData.LinhVePhongId;
                this.linhVeKhoa = resultData.LinhVeKhoa;
                this.ngayYeuCau = new Date();
                this.nguoiYeuCau = resultData.NguoiYeuCau;
                this.ghiChu = resultData.GhiChu;
                this.phieuLinhTrucTiep.KeyId = this.khoLinhIdSearch;
                this.phonglamViecId = this.phongLinhIdSearch;
                this.dateBatDau = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.searchDanhSachThongVatTu.TuNgay, "mm/dd/yyyy");
                this.dateKetThuc = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.searchDanhSachThongVatTu.DenNgay, "mm/dd/yyyy");
                this.apiService.post('YeuCauLinhVatTu/GetData', { idKhoLinh: this.khoLinhIdSearch, phongLinhVeId: this.phongLinhIdSearch, dateSearchStart: this.dateBatDau, dateSearchEnd: this.dateKetThuc }).subscribe(
                // this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetData?idKhoLinh=' + this.khoLinhIdSearch + '&phongDangNhapId=' + this.phongLinhIdSearch + "&dateSearchStart=" + this.dateBatDau + "&dateSearchEnd=" + this.dateKetThuc).subscribe(
                resultData => {
                    this.gridDataSource = {
                        data: resultData,
                        total: resultData.length
                    };
                    let arrayNull = [];
                    this.extCheckboxSelections(arrayNull);
                    this.gridCha.onSelectAllChange('unchecked');
                    let STT = 1;
                    resultData.forEach(element => {
                        element.STT = STT;
                        STT++;
                    });
                    resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1);
                    this.setDataGridView();
                    this.closePopupLoadingData();
                }, (err) => {
                    this.closePopupLoadingData();
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }, (err) => {
                this.closePopupLoadingData();
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
    }
    extCheckboxSelections(event) {
        this.cdRef.detectChanges();
        let tmpArray = event;
        let tmp = [];
        this.linhTrucTiepVatTuObject.CheckKhiTao = tmpArray;
        let gridCheckCu = [];
        if (this.linhTrucTiepVatTuObject.CheckKhiTao.length != 0) {
            let dataCheck = [];
            for (let i = 0; i < this.gridDataSource.data.length; i++) {
                for (let j = 0; j < this.linhTrucTiepVatTuObject.CheckKhiTao.length; j++) {
                    if (this.linhTrucTiepVatTuObject.CheckKhiTao[j] == this.gridDataSource.data[i].YeuCauTiepNhanId) {
                        if (this.checkChild == false) {
                            this.gridDataSource.data[i].IsCheckRowItem = true;
                            if (this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.length == this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.filter(sp => sp.IsCheckRowItem == false).length) {
                                this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                                    if (elements.SoLuongTon >= elements.SLYeuCau) {
                                        elements.IsCheckRowItem = true;
                                    }
                                });
                            }
                            this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
                            break;
                        }
                        else {
                            this.gridDataSource.data[i].IsCheckRowItem = true;
                            if (this.gridDataSource.data[i].IsCheckRowItem == true) {
                                if (this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.length == this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.filter(sp => sp.IsCheckRowItem == false).length) {
                                    this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                                        if (elements.SoLuongTon >= elements.SLYeuCau) {
                                            elements.IsCheckRowItem = true;
                                        }
                                    });
                                }
                            }
                            this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
                            break;
                        }
                    }
                    else {
                        let index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == this.gridDataSource.data[i].YeuCauTiepNhanId);
                        if (index == -1) {
                            gridCheckCu.push(this.gridDataSource.data[i]);
                        }
                    }
                    //  else{
                    //   this.gridDataSource.data[i].IsCheckRowItem = false;
                    //   this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                    //       elements.IsCheckRowItem = false;
                    //     });
                    //     this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
                    //  }
                }
            }
            this.linhTrucTiepVatTuObject.CheckKhiTao.forEach(element => {
                var index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element);
                if (index != -1) {
                    let dd = gridCheckCu.filter(sp => sp.YeuCauTiepNhanId == element); //.IsCheckRowItem = false
                    gridCheckCu.splice(gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element), 1);
                }
            });
            gridCheckCu.forEach(element => {
                element.IsCheckRowItem = false;
                element.ListYeuCauVatTuBenhViens.forEach(elements => {
                    elements.IsCheckRowItem = false;
                });
                this.getDataSourceChild(element.ListYeuCauVatTuBenhViens);
            });
        }
        else {
            this.gridDataSource.data.forEach(element => {
                element.IsCheckRowItem = false;
                element.ListYeuCauVatTuBenhViens.forEach(elements => {
                    elements.IsCheckRowItem = false;
                });
                this.getDataSourceChild(element.ListYeuCauVatTuBenhViens);
            });
        }
    }
    // grid item con 
    checkboxGridChild(event, dataItem) {
        if (event == true) {
            dataItem.IsCheckRowItem = true;
        }
        else {
            dataItem.IsCheckRowItem = false;
        }
        //   let mySelection: number[] = [];
        this.gridDataSource.data.forEach(element => {
            if (dataItem.YeuCauTiepNhanId == element.Id) {
                let inxdex = element.ListYeuCauVatTuBenhViens.findIndex(sp => sp.IsCheckRowItem == true);
                if (inxdex != -1) {
                    this.checkChild = true;
                    let indexChange = element.ListYeuCauVatTuBenhViens.filter(sp => sp.Id == dataItem.Id);
                    if (indexChange.length == 1) {
                        indexChange.forEach(element => {
                            element.IsCheckRowItem = event;
                        });
                    }
                    let inxdex = element.ListYeuCauVatTuBenhViens.filter(sp => sp.IsCheckRowItem == false);
                    if (element.ListYeuCauVatTuBenhViens.length == inxdex.length) {
                        if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('unchecked')) {
                            jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                        }
                    }
                    if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('checked')) {
                        jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                    }
                    return;
                }
                else {
                    this.checkChild = true;
                    let inxdex = element.ListYeuCauVatTuBenhViens.filter(sp => sp.IsCheckRowItem == false);
                    if (element.ListYeuCauVatTuBenhViens.length == inxdex.length) {
                        if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('unchecked')) {
                            jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                        }
                    }
                    return;
                }
            }
        });
        //this.checkChild = false;
    }
    getDataSourceChild(parentItem) {
        return {
            data: parentItem,
            total: parentItem.length
        };
    }
    gridDichVuDuocCheck() {
        let yeuCauVatTuBenhViens = [];
        this.gridDataSource.data.forEach(element => {
            if (element.IsCheckRowItem == true) {
                element.ListYeuCauVatTuBenhViens.forEach(item => {
                    if (item.IsCheckRowItem == true) {
                        let index = this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.findIndex(sp => sp == item.Id);
                        if (index == -1) {
                            yeuCauVatTuBenhViens.push(item);
                        }
                    }
                });
            }
        });
        return yeuCauVatTuBenhViens;
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
};
PhieuLinhVatTuTrucTiepSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "quyenUpdate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "trangThaiYeuCau", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauTemplate', { static: true })
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "slYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxChildTemplate', { static: true })
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "checkBoxChildTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCreate', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: false })
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCha', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: false })
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "gridCha", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "isDaTao", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhieuLinhVatTuTrucTiepSharedComponent.prototype, "validationErrorsLinhTT", void 0);
PhieuLinhVatTuTrucTiepSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-vat-tu-truc-tiep-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-vat-tu-truc-tiep-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-vat-tu-truc-tiep-shared.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.scss")).default]
    })
], PhieuLinhVatTuTrucTiepSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.scss ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcGhpZXUtbGluaC12dC10cnVjLXRpZXAtY2hvLWdvaS1zaGFyZWQvcGhpZXUtbGluaC12dC10cnVjLXRpZXAtY2hvLWdvaS1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: PhieuLinhVtTrucTiepChoGoiSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVtTrucTiepChoGoiSharedComponent", function() { return PhieuLinhVtTrucTiepChoGoiSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");












let PhieuLinhVtTrucTiepChoGoiSharedComponent = class PhieuLinhVtTrucTiepChoGoiSharedComponent {
    constructor(notificationService, cdRef, dialog, apiService, route, baseService, authService) {
        this.notificationService = notificationService;
        this.cdRef = cdRef;
        this.dialog = dialog;
        this.apiService = apiService;
        this.route = route;
        this.baseService = baseService;
        this.authService = authService;
        this.linhTrucTiep = {};
        this.linhTrucTiepVatTuObject = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["LinhVatTuTrucTiep"]();
        this.searchDanhSachThongVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["SearchDanhSachThongVatTu"]();
        this.phieuLinhTrucTiep = {};
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.isShowChoGoi = false;
        this.yeuCauLinhVatTuId = null;
        this.gridDataSource = {};
        this.gridDataSourceCreate = {};
        this.linhVeKhoa = "";
        this.nguoiYeuCau = "";
        this.nguoiDuyet = "";
        this.ngayDuyet = null;
        this.ghiChu = "";
        this.linhTrucTiepMasterName = "masterLinhTT";
        this.checkChild = false;
        this.popupLoadingData = null;
        this.shareChoGoi = false;
    }
    ngOnInit() {
        this.gridChildColumns = [
            { Field: "STT", Title: "#", Width: 60 },
            { Field: "MaTN", Title: "Mã TN", Width: 100 },
            { Field: "MaBN", Title: "Mã NB", Width: 100 },
            { Field: "HoTen", Title: "Họ tên", Width: 180 },
            { Field: "SLYeuCau", Title: "SL", Width: 120 },
            { Field: "Action", Title: "", Width: 80 }
        ];
        this.gridColumns = [
            { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isShowChoGoi },
            { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
            { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
            { Field: "HangSX", Title: "Hãng SX", Width: 180 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            { Field: "SoLuongTon", Title: "SL tồn", Width: 100 },
            { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
            { Field: "DVKham", Title: "DV Khám", Width: 180 },
            { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
            { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
            { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
        ];
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.isShowChoGoi = true;
            this.yeuCauLinhVatTuId = id;
        }
        this.phonglamViecId = this.authService.getPhongLamViecId();
        this.getNhanVienId = this.authService.getAccessUser();
    }
    setDataGridView() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    setDataGridViewRefesh() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    getById(id) {
        this.linhTrucTiepVatTuObject.Id = id;
        this.apiService.get("YeuCauLinhVatTu/GetALL?id=" + id).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
                this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
                let vo = {
                    KhoLinhId: resultData.KhoXuatId,
                    YeuCauLinhVatTuId: id,
                    TuNgay: null,
                    DenNgay: null
                };
                this.apiService.post('YeuCauLinhVatTu/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + id).subscribe(resultDatas => {
                    this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
                    this.linhTrucTiepVatTuObject.KhoNhapId = resultDatas[0].LinhVePhongId;
                    this.linhVeKhoa = resultDatas[0].LinhVeKhoa;
                    this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
                    let dataTime = resultDatas[0].NgayYeuCau;
                    this.ngayYeuCau = dataTime;
                    this.ghiChu = resultDatas[0].GhiChu;
                    this.apiService.post('YeuCauLinhVatTu/GetDataGridYeuCauLinhVatTuLuuTamThoi', vo).subscribe(resultData => {
                        this.gridDataSource = {
                            data: resultData,
                            total: resultData.length
                        };
                        let STT = 1;
                        resultData.forEach(element => {
                            element.STT = STT;
                            STT++;
                        });
                        resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1);
                        this.setDataGridView();
                        let arrayNull = [];
                        if (this.gridDataSource.total != 0) {
                            this.gridDataSource.data.forEach(element => {
                                if (element.IsCheckRowItem == true) {
                                    arrayNull.push(element.Id);
                                }
                            });
                        }
                        this.extCheckboxSelections(arrayNull);
                        this.selectCheckBox(arrayNull);
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }, (err) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    changeTuNgay(event) {
        this.timkiem();
    }
    changeDenNgay(event) {
        this.timkiem();
    }
    blur() {
        this.timkiem();
    }
    timkiem() {
        this.loadingPage();
        this.apiService.get("YeuCauLinhVatTu/GetALL?id=" + this.yeuCauLinhVatTuId).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
                this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
                let vo = {
                    KhoLinhId: resultData.KhoXuatId,
                    YeuCauLinhVatTuId: this.yeuCauLinhVatTuId,
                    TuNgay: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.searchDanhSachThongVatTu.TuNgay, "mm/dd/yyyy"),
                    DenNgay: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.searchDanhSachThongVatTu.DenNgay, "mm/dd/yyyy")
                };
                this.apiService.post('YeuCauLinhVatTu/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + this.yeuCauLinhVatTuId).subscribe(resultDatas => {
                    this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
                    this.linhTrucTiepVatTuObject.KhoNhapId = resultDatas[0].LinhVePhongId;
                    this.linhVeKhoa = resultDatas[0].LinhVeKhoa;
                    this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
                    let dataTime = resultDatas[0].NgayYeuCau;
                    this.ngayYeuCau = dataTime;
                    this.ghiChu = resultDatas[0].GhiChu;
                    this.apiService.post('YeuCauLinhVatTu/GetDataGridYeuCauLinhVatTuLuuTamThoi', vo).subscribe(resultData => {
                        this.gridDataSource = {
                            data: resultData,
                            total: resultData.length
                        };
                        // let arrayNull: any[] = [];
                        // this.extCheckboxSelections(arrayNull);
                        // this.gridCha.onSelectAllChange('unchecked');
                        let STT = 1;
                        resultData.forEach(element => {
                            element.STT = STT;
                            STT++;
                        });
                        resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1);
                        this.setDataGridView();
                        this.setDataGridView();
                        this.closePopupLoadingData();
                    }, (err) => {
                        this.closePopupLoadingData();
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }, (err) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        }, (err) => {
            this.closePopupLoadingData();
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    extCheckboxSelections(event) {
        this.cdRef.detectChanges();
        let tmpArray = event;
        let tmp = [];
        this.linhTrucTiepVatTuObject.CheckKhiTao = tmpArray;
        let gridCheckCu = [];
        if (this.linhTrucTiepVatTuObject.CheckKhiTao.length != 0) {
            let dataCheck = [];
            for (let i = 0; i < this.gridDataSource.data.length; i++) {
                for (let j = 0; j < this.linhTrucTiepVatTuObject.CheckKhiTao.length; j++) {
                    if (this.linhTrucTiepVatTuObject.CheckKhiTao[j] == this.gridDataSource.data[i].YeuCauTiepNhanId) {
                        if (this.checkChild == false) {
                            this.gridDataSource.data[i].IsCheckRowItem = true;
                            if (this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.length == this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.filter(sp => sp.IsCheckRowItem == false).length) {
                                this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                                    if (elements.SoLuongTon >= elements.SLYeuCau) {
                                        elements.IsCheckRowItem = true;
                                    }
                                });
                            }
                            this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
                            break;
                        }
                        else {
                            this.gridDataSource.data[i].IsCheckRowItem = true;
                            if (this.gridDataSource.data[i].IsCheckRowItem == true) {
                                if (this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.length == this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.filter(sp => sp.IsCheckRowItem == false).length) {
                                    this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                                        if (elements.SoLuongTon >= elements.SLYeuCau) {
                                            elements.IsCheckRowItem = true;
                                        }
                                    });
                                }
                            }
                            this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
                            break;
                        }
                    }
                    else {
                        let index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == this.gridDataSource.data[i].YeuCauTiepNhanId);
                        if (index == -1) {
                            gridCheckCu.push(this.gridDataSource.data[i]);
                        }
                    }
                    //  else{
                    //   this.gridDataSource.data[i].IsCheckRowItem = false;
                    //   this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                    //       elements.IsCheckRowItem = false;
                    //     });
                    //     this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
                    //  }
                }
            }
            this.linhTrucTiepVatTuObject.CheckKhiTao.forEach(element => {
                var index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element);
                if (index != -1) {
                    let dd = gridCheckCu.filter(sp => sp.YeuCauTiepNhanId == element); //.IsCheckRowItem = false
                    gridCheckCu.splice(gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element), 1);
                }
            });
            gridCheckCu.forEach(element => {
                element.IsCheckRowItem = false;
                element.ListYeuCauVatTuBenhViens.forEach(elements => {
                    elements.IsCheckRowItem = false;
                });
                this.getDataSourceChild(element.ListYeuCauVatTuBenhViens);
            });
        }
        else {
            this.gridDataSource.data.forEach(element => {
                element.IsCheckRowItem = false;
                element.ListYeuCauVatTuBenhViens.forEach(elements => {
                    elements.IsCheckRowItem = false;
                });
                this.getDataSourceChild(element.ListYeuCauVatTuBenhViens);
            });
        }
    }
    // grid item con 
    checkboxGridChild(event, dataItem) {
        if (event == true) {
            dataItem.IsCheckRowItem = true;
        }
        else {
            dataItem.IsCheckRowItem = false;
        }
        //   let mySelection: number[] = [];
        this.gridDataSource.data.forEach(element => {
            if (dataItem.YeuCauTiepNhanId == element.Id) {
                let inxdex = element.ListYeuCauVatTuBenhViens.findIndex(sp => sp.IsCheckRowItem == true);
                if (inxdex != -1) {
                    this.checkChild = true;
                    let indexChange = element.ListYeuCauVatTuBenhViens.filter(sp => sp.Id == dataItem.Id);
                    if (indexChange.length == 1) {
                        indexChange.forEach(element => {
                            element.IsCheckRowItem = event;
                        });
                    }
                    let inxdex = element.ListYeuCauVatTuBenhViens.filter(sp => sp.IsCheckRowItem == false);
                    if (element.ListYeuCauVatTuBenhViens.length == inxdex.length) {
                        if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('unchecked')) {
                            jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                        }
                    }
                    if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('checked')) {
                        jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                    }
                    return;
                }
                else {
                    this.checkChild = true;
                    let inxdex = element.ListYeuCauVatTuBenhViens.filter(sp => sp.IsCheckRowItem == false);
                    if (element.ListYeuCauVatTuBenhViens.length == inxdex.length) {
                        if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).prop('unchecked')) {
                            jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element.Id).trigger('click');
                        }
                    }
                    return;
                }
            }
        });
        //this.checkChild = false;
    }
    getDataSourceChild(parentItem) {
        return {
            data: parentItem,
            total: parentItem.length
        };
    }
    gridDichVuDuocCheck() {
        let yeuCauVatTuBenhViens = [];
        this.gridDataSource.data.forEach(element => {
            if (element.IsCheckRowItem == true) {
                element.ListYeuCauVatTuBenhViens.forEach(item => {
                    if (item.IsCheckRowItem == true) {
                        let index = this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.findIndex(sp => sp == item.Id);
                        if (index == -1) {
                            yeuCauVatTuBenhViens.push(item);
                        }
                    }
                });
            }
        });
        return yeuCauVatTuBenhViens;
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
    selectCheckBox(arr) {
        if (arr.length != 0) {
            arr.forEach(element => {
                if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element).prop('checked')) {
                    jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId' + element).trigger('click');
                }
            });
        }
    }
    getSharedData() {
        //thong tin login 
        this.validationErrors = [];
        this.linhTrucTiepVatTuObject.GhiChu = this.ghiChu;
        //thong tin login 
        this.validationErrors = [];
        this.linhTrucTiepVatTuObject.GhiChu = this.ghiChu;
        //-----------------xử lý phiếu linh từ ngày - đến ngày---------------------//
        //----Từ ngày-------------------------------------------------------------//
        if (this.searchDanhSachThongVatTu.TuNgay != null) {
            this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopTuNgay = this.searchDanhSachThongVatTu.TuNgay;
        }
        else {
            let yeuCauVatTuBenhViens = [];
            yeuCauVatTuBenhViens = this.gridDichVuDuocCheck();
            if (yeuCauVatTuBenhViens.length != 0) {
                let listSortNhoNhatDenLonNhat = yeuCauVatTuBenhViens.sort((a, b) => (new Date(a.NgayDieuTri) > new Date(b.NgayDieuTri)) ? 1 : -1);
                this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopTuNgay = new Date(listSortNhoNhatDenLonNhat[0].NgayDieuTri);
            }
        }
        //----đến ngày-------------------------------------------------------------//
        if (this.searchDanhSachThongVatTu.DenNgay != null) {
            this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopDenNgay = this.searchDanhSachThongVatTu.DenNgay;
        }
        else {
            this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopDenNgay = null;
        }
        //--------------end xử lý phiếu linh từ ngày - đến ngày---------------------//
        if (this.phieuLinhTrucTiep.KeyId != null) {
            this.linhTrucTiepVatTuObject.KhoXuatId = this.phieuLinhTrucTiep.KeyId;
        }
        // yeucau vat tu benh vien
        if (this.gridDataSource.data == null || this.gridDataSource.data == undefined) {
            // this.validationErrors = [];
        }
        else {
            this.linhTrucTiepVatTuObject.YeuCauVatTuBenhViensTT = new Array();
            this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds = new Array();
            this.linhTrucTiepVatTuObject.DanhSachVatTuTonKhongDus = new Array();
            this.gridDataSource.data.forEach(element => {
                if (element.IsCheckRowItem == true) {
                    element.ListYeuCauVatTuBenhViens.forEach(item => {
                        if (item.IsCheckRowItem == true) {
                            let index = this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.findIndex(sp => sp == item.Id);
                            if (index == -1) {
                                this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.push(item.Id);
                                let vtKhongDuTon = {
                                    VatTuId: item.VatTuId,
                                    TenVatTu: item.TenVatTu,
                                    SoLuongTon: item.SoLuongTon,
                                    SoLuongYeuCau: item.SLYeuCau
                                };
                                this.linhTrucTiepVatTuObject.DanhSachVatTuTonKhongDus.push(vtKhongDuTon);
                            }
                        }
                    });
                }
            });
        }
        this.linhTrucTiepVatTuObject.YeuCauLinhVatTuId = this.yeuCauLinhVatTuId;
        this.setDataGridView();
        return this.linhTrucTiepVatTuObject;
    }
};
PhieuLinhVtTrucTiepChoGoiSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slYeuCauTemplate', { static: true })
], PhieuLinhVtTrucTiepChoGoiSharedComponent.prototype, "slYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], PhieuLinhVtTrucTiepChoGoiSharedComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxChildTemplate', { static: true })
], PhieuLinhVtTrucTiepChoGoiSharedComponent.prototype, "checkBoxChildTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCreate', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: false })
], PhieuLinhVtTrucTiepChoGoiSharedComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCha', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], static: false })
], PhieuLinhVtTrucTiepChoGoiSharedComponent.prototype, "gridCha", void 0);
PhieuLinhVtTrucTiepChoGoiSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-linh-vt-truc-tiep-cho-goi-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-linh-vt-truc-tiep-cho-goi-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-linh-vt-truc-tiep-cho-goi-shared.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.scss")).default]
    })
], PhieuLinhVtTrucTiepChoGoiSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvcG9wdXAtdGhvbmctYmFvLXZ0LWtob25nLXRoZS10YW8vcG9wdXAtdGhvbmctYmFvLXZ0LWtob25nLXRoZS10YW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.ts ***!
  \**************************************************************************************************************************************************/
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
        selector: 'app-popup-thong-bao-vt-khong-the-tao',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-thong-bao-vt-khong-the-tao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-thong-bao-vt-khong-the-tao.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], PopupThongBaoVtKhongTheTaoComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS90YW8tcGhpZXUtbGluaC12YXQtdHUtYnUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXHZhdC10dVxceWV1LWNhdS1saW5oLXZhdC10dVxcdGFvLXBoaWV1LWxpbmgtdmF0LXR1LWJ1XFx0YW8tcGhpZXUtbGluaC12YXQtdHUtYnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvdGFvLXBoaWV1LWxpbmgtdmF0LXR1LWJ1L3Rhby1waGlldS1saW5oLXZhdC10dS1idS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvdGFvLXBoaWV1LWxpbmgtdmF0LXR1LWJ1L3Rhby1waGlldS1saW5oLXZhdC10dS1idS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59IiwiLnN0YXR1cy15ZXUtY2F1LWxpbmgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWNoby1kdXlldCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1kYS1kdXlldCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: TaoPhieuLinhVatTuBuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoPhieuLinhVatTuBuComponent", function() { return TaoPhieuLinhVatTuBuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _phieu_linh_vat_tu_bu_gui_lai_shared_phieu_linh_vat_tu_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.ts");
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
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.ts");
/* harmony import */ var src_vex_services_url_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/@vex/services/url.service */ "./src/@vex/services/url.service.ts");




















let TaoPhieuLinhVatTuBuComponent = class TaoPhieuLinhVatTuBuComponent {
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
        this.yeuCauLinhBuVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_17__["YeuCauLinhVatTu"]();
        this.isCreate = false;
        this.hostingName = null;
        this.trangThaiPhieuLinh = null;
        this.inPhieuLinhThuong = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuong"]();
        this.loading = false;
        this.flag = true;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].TaoYeuCauLinhBuVatTu;
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
    luuPhieuLinhVatTu(daGui) {
        var self = this;
        self.yeuCauLinhBuVatTu = self.shared.getSharedData();
        if (self.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
            if (daGui) {
                self.notificationService.showError("Vui lòng chọn vật tư muốn gửi phiếu.");
            }
            else {
                self.notificationService.showError("Vui lòng chọn vật tư muốn lưu phiếu.");
            }
        }
        else {
            var mess = "";
            if (daGui) {
                mess = "Bạn có muốn gửi phiếu lĩnh vật tư này không ?";
            }
            else {
                mess = "Bạn có muốn lưu phiếu lĩnh vật tư này không ?";
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
            self.yeuCauLinhBuVatTu.DaGui = true;
            self.loadingPage();
            self.apiService.post("YeuCauLinhVatTu/GuiPhieuLinhBuVatTu", self.yeuCauLinhBuVatTu).subscribe((result) => {
                if (result != undefined && result != null) {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Tạo phiếu lĩnh"]));
                    self.closePopupLoadingData();
                    self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn in phiếu lĩnh vật tư này không ?",
                        },
                    }).afterClosed().subscribe((res) => {
                        if (res == "Yes") {
                            self.loadingPageHoanThanh();
                            self.inPhieuLinhThuong.Header = true;
                            self.inPhieuLinhThuong.YeuCauLinhVatTuId = result;
                            self.inPhieuLinhThuong.LoaiPhieuLinh = 2;
                            self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(resData => {
                                if (resData != undefined && resData != null) {
                                    self.closePopupLoadingDataHoanThanh();
                                    self.inPhieuLinhThuong.Header = false;
                                    self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhVatTuThuongPopupComponent"], {
                                        disableClose: false,
                                        width: '1200px',
                                        data: { Model: resData },
                                    }).afterClosed().subscribe(() => {
                                        self.closePopupLoadingDataHoanThanh();
                                        self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
                            this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
            self.loadingPage();
            self.apiService.post("YeuCauLinhVatTu/GuiPhieuLinhBuVatTu", self.yeuCauLinhBuVatTu).subscribe((result) => {
                if (result != undefined && result != null) {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].ActionSuccessfully, ["Tạo phiếu lĩnh"]));
                    self.closePopupLoadingData();
                    self.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-bu/" + result]);
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
        // if(this.previousUrl.indexOf("vat-tu-can-bu")>=0)
        // {
        //   this.location.back();
        // }
        // else
        // {
        //   this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
        // }    
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
        self.yeuCauLinhBuVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
            if (self.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.every(z => !z.CheckBox)) {
                self.notificationService.showError("Vui lòng chọn vật tư muốn xem phiếu.");
            }
            else {
                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
                    disableClose: false,
                    width: "500px",
                    data: {
                        Title: "Xác nhận",
                        Message: "Bạn có muốn in phiếu lĩnh vật tư này không ?",
                    },
                }).afterClosed().subscribe((res) => {
                    if (res == "Yes") {
                        self.loadingPageHoanThanh();
                        let dataIn = {
                            KhoLinhId: this.khoLinhId,
                            KhoLinhBuId: this.khoLinhBuId,
                            HostingName: "http://" + window.location.host,
                            YeuCauVatTuBenhViens: self.yeuCauLinhBuVatTu.YeuCauVatTuBenhViens.filter(d => d.CheckBox)
                        };
                        self.apiService.post("YeuCauLinhVatTu/InPhieuLinhBuVatTuXemTruoc", dataIn).subscribe(resData => {
                            if (resData != undefined && resData != null) {
                                self.closePopupLoadingDataHoanThanh();
                                self.inPhieuLinhThuong.Header = false;
                                self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_18__["PhieuLinhVatTuThuongPopupComponent"], {
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
TaoPhieuLinhVatTuBuComponent.ctorParameters = () => [
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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_phieu_linh_vat_tu_bu_gui_lai_shared_phieu_linh_vat_tu_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_4__["PhieuLinhVatTuBuGuiLaiSharedComponent"], { static: true })
], TaoPhieuLinhVatTuBuComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], TaoPhieuLinhVatTuBuComponent.prototype, "keyEvent", null);
TaoPhieuLinhVatTuBuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tao-phieu-linh-vat-tu-bu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tao-phieu-linh-vat-tu-bu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tao-phieu-linh-vat-tu-bu.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.scss")).default]
    })
], TaoPhieuLinhVatTuBuComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS90YW8tcGhpZXUtbGluaC12YXQtdHUtdGh1b25nL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHlldS1jYXUtbGluaC12YXQtdHVcXHRhby1waGlldS1saW5oLXZhdC10dS10aHVvbmdcXHRhby1waGlldS1saW5oLXZhdC10dS10aHVvbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvdGFvLXBoaWV1LWxpbmgtdmF0LXR1LXRodW9uZy90YW8tcGhpZXUtbGluaC12YXQtdHUtdGh1b25nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS90YW8tcGhpZXUtbGluaC12YXQtdHUtdGh1b25nL3Rhby1waGlldS1saW5oLXZhdC10dS10aHVvbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: TaoPhieuLinhVatTuThuongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoPhieuLinhVatTuThuongComponent", function() { return TaoPhieuLinhVatTuThuongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _phieu_linh_vat_tu_thuong_shared_phieu_linh_vat_tu_thuong_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.ts");


















let TaoPhieuLinhVatTuThuongComponent = class TaoPhieuLinhVatTuThuongComponent {
    constructor(apiService, dialog, notificationService, authService, router, ref) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.yeuCauLinhThuongVatTu = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__["YeuCauLinhVatTu"]();
        this.isCreate = false;
        this.hostingName = null;
        this.trangThaiPhieuLinh = null;
        this.inPhieuLinhThuong = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__["PhieuLinhVatTuThuong"]();
        this.trangThaiVo = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__["TrangThaiTaoPhieuLinh"]();
        this.loading = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__["DocumentType"].TaoYeuCauLinhThuongVatTu;
        if (window.location.protocol == "http:") {
            this.inPhieuLinhThuong.HostingName = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhThuong.HostingName = "https://" + window.location.host;
        }
        this.trangThaiVo.TrangThai = null;
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
    luuPhieuLinhThuongVatTu() {
        var self = this;
        self.yeuCauLinhThuongVatTu = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn lưu phiếu lĩnh dược phẩm này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
                    self.loadingPage();
                    self.yeuCauLinhThuongVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhThuongVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT || a.Ten > b.Ten) ? 1 : -1);
                    self.apiService.post("YeuCauLinhVatTu/GuiPhieuLinhThuongVatTu", self.yeuCauLinhThuongVatTu).subscribe((result) => {
                        if (result != undefined && result != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            self.closePopupLoadingData();
                            self.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-thuong/" + result]);
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
    guiPhieuLinhThuongVatTu() {
        var self = this;
        self.yeuCauLinhThuongVatTu = self.shared.getSharedData();
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
                    self.yeuCauLinhThuongVatTu.DaGui = true;
                    self.yeuCauLinhThuongVatTu.YeuCauLinhVatTuChiTiets = self.yeuCauLinhThuongVatTu.YeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.STT > b.STT) ? 1 : -1);
                    self.apiService.post("YeuCauLinhVatTu/GuiPhieuLinhThuongVatTu", self.yeuCauLinhThuongVatTu).subscribe((result) => {
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
                                    self.inPhieuLinhThuong.Header = true;
                                    self.inPhieuLinhThuong.YeuCauLinhVatTuId = result;
                                    self.inPhieuLinhThuong.LoaiPhieuLinh = 1;
                                    self.apiService.post("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(resData => {
                                        if (resData != undefined && resData != null) {
                                            self.closePopupLoadingData();
                                            self.inPhieuLinhThuong.Header = false;
                                            self.dialog.open(_phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuLinhVatTuThuongPopupComponent"], {
                                                disableClose: false,
                                                width: '1200px',
                                                data: { Model: resData },
                                            }).afterClosed().subscribe(() => {
                                                self.closePopupLoadingData();
                                                self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
                                    this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
        this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
TaoPhieuLinhVatTuThuongComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_phieu_linh_vat_tu_thuong_shared_phieu_linh_vat_tu_thuong_shared_component__WEBPACK_IMPORTED_MODULE_2__["PhieuLinhVatTuThuongSharedComponent"], { static: true })
], TaoPhieuLinhVatTuThuongComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
], TaoPhieuLinhVatTuThuongComponent.prototype, "keyEvent", null);
TaoPhieuLinhVatTuThuongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tao-phieu-linh-vat-tu-thuong',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tao-phieu-linh-vat-tu-thuong.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tao-phieu-linh-vat-tu-thuong.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.scss")).default]
    })
], TaoPhieuLinhVatTuThuongComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".align-right-fx {\n  margin-left: auto;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveWV1LWNhdS1saW5oLXZhdC10dS90YW8tcGhpZXUtbGluaC12YXQtdHUtdHJ1Yy10aWVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHlldS1jYXUtbGluaC12YXQtdHVcXHRhby1waGlldS1saW5oLXZhdC10dS10cnVjLXRpZXBcXHRhby1waGlldS1saW5oLXZhdC10dS10cnVjLXRpZXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3lldS1jYXUtbGluaC12YXQtdHUvdGFvLXBoaWV1LWxpbmgtdmF0LXR1LXRydWMtdGllcC90YW8tcGhpZXUtbGluaC12YXQtdHUtdHJ1Yy10aWVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS95ZXUtY2F1LWxpbmgtdmF0LXR1L3Rhby1waGlldS1saW5oLXZhdC10dS10cnVjLXRpZXAvdGFvLXBoaWV1LWxpbmgtdmF0LXR1LXRydWMtdGllcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59IiwiLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: TaoPhieuLinhVatTuTrucTiepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoPhieuLinhVatTuTrucTiepComponent", function() { return TaoPhieuLinhVatTuTrucTiepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _phieu_linh_vat_tu_truc_tiep_shared_phieu_linh_vat_tu_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _in_phieu_linh_truc_tiep_vat_tu_popup_in_phieu_linh_truc_tiep_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var src_vex_services_url_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/@vex/services/url.service */ "./src/@vex/services/url.service.ts");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var _popup_thong_bao_vt_khong_the_tao_popup_thong_bao_vt_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.ts");
























let TaoPhieuLinhVatTuTrucTiepComponent = class TaoPhieuLinhVatTuTrucTiepComponent {
    constructor(apiService, dialog, notificationService, authService, router, route, ref, location, urlService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.ref = ref;
        this.location = location;
        this.urlService = urlService;
        this.yeuCauLinhDuocPham = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["LinhTrucTiepVatTu"]();
        this.loading = false;
        this.popupLoadingData = null;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.inPhieuLinhTrucTiep = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["PhieuLinhVatTuTrucTiep"]();
        this.previousUrl = "";
        this.groups = [
            {
                field: "VatTuId",
                aggregates: [
                    { field: 'SoLuongYeuCau', aggregate: 'sum' },
                ],
            },
        ];
        this.state = {
            group: this.groups,
        };
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].TaoYeuCauLinhTrucTiepVatTu; //LinhTrucTiepDuocPham;
        if (window.location.protocol == "http:") {
            this.inPhieuLinhTrucTiep.Hosting = "http://" + window.location.host;
        }
        else {
            this.inPhieuLinhTrucTiep.Hosting = "https://" + window.location.host;
        }
        this.urlService.previousUrl$
            .subscribe((previousUrl) => {
            this.previousUrl = previousUrl;
        });
        this.route
            .queryParams
            .subscribe(v => {
            this.trangThai = v;
        });
    }
    create(goi) {
        var self = this;
        let messageLuu = "Bạn có muốn lưu phiếu lĩnh vật tư này không ?";
        let messageGoi = "Bạn có muốn tạo phiếu lĩnh vật tư này không ?";
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Add)) {
            self.yeuCauLinhDuocPham = self.shared.getSharedData();
            self.yeuCauLinhDuocPham.Goi = goi;
            self.validationErrors = [];
            self.ref.detectChanges();
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: goi == true ? messageGoi : messageLuu,
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    let kiemTraCoDuocPhamKhongDuTon = this.getItemKhongDuTon(self.yeuCauLinhDuocPham.DanhSachVatTuTonKhongDus);
                    self.closePopupLoadingData();
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (kiemTraCoDuocPhamKhongDuTon.length == 0) {
                        this.newCreate();
                    }
                    else {
                        self.dialog.open(_popup_thong_bao_vt_khong_the_tao_popup_thong_bao_vt_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_22__["PopupThongBaoVtKhongTheTaoComponent"], {
                            disableClose: false,
                            width: '500px',
                            data: kiemTraCoDuocPhamKhongDuTon,
                        }).afterClosed().subscribe((res) => {
                            if (res == "Yes") {
                                this.newCreate();
                            }
                        });
                    }
                }
                // else{
                //   self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
                // }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    cancel() {
        if (this.previousUrl.indexOf("vat-tu-can-linh-truc-tiep") >= 0) {
            this.location.back();
        }
        else {
            this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
        }
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
    xemPhieuLinh() {
        var self = this;
        self.yeuCauLinhDuocPham = self.shared.getSharedData();
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Add)) {
            if (self.yeuCauLinhDuocPham.YeuCauVatTuBenhVienIds.length == 0) {
                self.notificationService.showError("Chưa chọn vật tư cần in.");
            }
            else {
                self.loadingPage();
                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                    disableClose: false,
                    width: "500px",
                    data: {
                        Title: "Xác nhận",
                        Message: "Bạn có muốn xem trước in phiếu lĩnh vật tư này không ?",
                    },
                }).afterClosed().subscribe((res) => {
                    if (res == "Yes") {
                        self.loadingPage();
                        let objInVatTuXemTruoc = new _yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["XemTruocPhieuLinhVatTuTrucTiep"]();
                        if (window.location.protocol == "http:") {
                            objInVatTuXemTruoc.Hosting = "http://" + window.location.host;
                        }
                        else {
                            objInVatTuXemTruoc.Hosting = "https://" + window.location.host;
                        }
                        objInVatTuXemTruoc.YeuCauVatTuBenhVienIds = self.yeuCauLinhDuocPham.YeuCauVatTuBenhVienIds;
                        objInVatTuXemTruoc.ThoiDiemLinhTongHopTuNgay = self.yeuCauLinhDuocPham.ThoiDiemLinhTongHopTuNgay;
                        objInVatTuXemTruoc.ThoiDiemLinhTongHopDenNgay = self.yeuCauLinhDuocPham.ThoiDiemLinhTongHopDenNgay;
                        self.apiService.post("YeuCauLinhVatTu/InXemTruocPhieuLinhTrucTiepVatTu", objInVatTuXemTruoc).subscribe(resData => {
                            if (resData != undefined && resData != null) {
                                self.inPhieuLinhTrucTiep.Header = false;
                                self.dialog.open(_in_phieu_linh_truc_tiep_vat_tu_popup_in_phieu_linh_truc_tiep_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_18__["InPhieuLinhTrucTiepVatTuPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: { Model: resData },
                                }).afterClosed().subscribe(() => {
                                    self.closePopupLoadingData();
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
                        self.closePopupLoadingData();
                    }
                });
            }
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    getItemKhongDuTon(danhSachYeuCauVatTuBenhVien) {
        let data = [];
        let dataKhongChoTao = [];
        let dataList = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_21__["process"])(danhSachYeuCauVatTuBenhVien, this.state);
        console.log("::::::::::::::::::::::", dataList);
        dataList.data.forEach(element => {
            let tongSlYeuCau = 0;
            let tenVatTu = "";
            let slTon = 0;
            if (element.items.length != 0) {
                element.items.forEach(element => {
                    tongSlYeuCau += element.SoLuongYeuCau;
                    tenVatTu = element.TenVatTu;
                    slTon = element.SoLuongTon;
                });
            }
            let objGroup = {
                VatTuId: element.value,
                TenVatTu: tenVatTu,
                SoLuongYeuCau: tongSlYeuCau,
                SoLuongTon: slTon
            };
            data.push(objGroup);
            let dataSLKhongChoTao = data.filter(d => d.SoLuongTon < d.SoLuongYeuCau);
            if (dataSLKhongChoTao.length != 0) {
                dataSLKhongChoTao.forEach(element => {
                    dataKhongChoTao.push(element);
                });
            }
        });
        return dataKhongChoTao;
    }
    newCreate() {
        var self = this;
        self.loadingPage();
        self.apiService.post("YeuCauLinhVatTu/GuiPhieuLinhTrucTiep", self.yeuCauLinhDuocPham).subscribe((result) => {
            if (result != undefined && result != null) {
                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                self.closePopupLoadingData();
                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                    disableClose: false,
                    width: "500px",
                    data: {
                        Title: "Xác nhận",
                        Message: "Bạn có muốn in phiếu lĩnh vật tư này không ?",
                    },
                }).afterClosed().subscribe((res) => {
                    if (res == "Yes") {
                        self.loadingPage();
                        self.inPhieuLinhTrucTiep.Header = true;
                        self.inPhieuLinhTrucTiep.YeuCauLinhVatTuId = result;
                        self.inPhieuLinhTrucTiep.TrangThaiIn = true;
                        self.apiService.post("YeuCauLinhVatTu/InPhieuLinhTrucTiepVatTu", self.inPhieuLinhTrucTiep).subscribe(resData => {
                            if (resData != undefined && resData != null) {
                                self.inPhieuLinhTrucTiep.Header = false;
                                self.dialog.open(_in_phieu_linh_truc_tiep_vat_tu_popup_in_phieu_linh_truc_tiep_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_18__["InPhieuLinhTrucTiepVatTuPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: { Model: resData },
                                }).afterClosed().subscribe(() => {
                                    self.closePopupLoadingData();
                                    self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
                        //self.closePopupLoadingData();
                        self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
};
TaoPhieuLinhVatTuTrucTiepComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: src_vex_services_url_service__WEBPACK_IMPORTED_MODULE_20__["UrlService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_phieu_linh_vat_tu_truc_tiep_shared_phieu_linh_vat_tu_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_3__["PhieuLinhVatTuTrucTiepSharedComponent"], { static: true })
], TaoPhieuLinhVatTuTrucTiepComponent.prototype, "shared", void 0);
TaoPhieuLinhVatTuTrucTiepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tao-phieu-linh-vat-tu-truc-tiep',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tao-phieu-linh-vat-tu-truc-tiep.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tao-phieu-linh-vat-tu-truc-tiep.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.scss")).default]
    })
], TaoPhieuLinhVatTuTrucTiepComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: YeuCauLinhVatTuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhVatTuRoutingModule", function() { return YeuCauLinhVatTuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _danh_sach_yeu_cau_linh_vat_tu_danh_sach_yeu_cau_linh_vat_tu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _tao_phieu_linh_vat_tu_thuong_tao_phieu_linh_vat_tu_thuong_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.ts");
/* harmony import */ var _tao_phieu_linh_vat_tu_bu_tao_phieu_linh_vat_tu_bu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.ts");
/* harmony import */ var _tao_phieu_linh_vat_tu_truc_tiep_tao_phieu_linh_vat_tu_truc_tiep_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_gui_lai_phieu_linh_vat_tu_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_bu_gui_lai_phieu_linh_vat_tu_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_truc_tiep_gui_lai_phieu_linh_vat_tu_truc_tiep_gui_lai_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.ts");













const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _danh_sach_yeu_cau_linh_vat_tu_danh_sach_yeu_cau_linh_vat_tu_component__WEBPACK_IMPORTED_MODULE_3__["DanhSachYeuCauLinhVatTuComponent"],
        data: {
            title: 'Danh Sách Yêu Cầu Lĩnh Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachYeuCauLinhVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'tao-phieu-linh-vat-tu-thuong',
        component: _tao_phieu_linh_vat_tu_thuong_tao_phieu_linh_vat_tu_thuong_component__WEBPACK_IMPORTED_MODULE_7__["TaoPhieuLinhVatTuThuongComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhThuongVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'tao-phieu-linh-vat-tu-bu',
        component: _tao_phieu_linh_vat_tu_bu_tao_phieu_linh_vat_tu_bu_component__WEBPACK_IMPORTED_MODULE_8__["TaoPhieuLinhVatTuBuComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Bù Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhThuongVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'tao-phieu-linh-vat-tu-truc-tiep',
        component: _tao_phieu_linh_vat_tu_truc_tiep_tao_phieu_linh_vat_tu_truc_tiep_component__WEBPACK_IMPORTED_MODULE_9__["TaoPhieuLinhVatTuTrucTiepComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Trực Tiếp Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhTrucTiepVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'gui-lai-phieu-linh-vat-tu-thuong/:id',
        component: _phieu_linh_vat_tu_thuong_gui_lai_phieu_linh_vat_tu_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_10__["PhieuLinhVatTuThuongGuiLaiComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhThuongVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'gui-lai-phieu-linh-vat-tu-bu/:id',
        component: _phieu_linh_vat_tu_bu_gui_lai_phieu_linh_vat_tu_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_11__["PhieuLinhVatTuBuGuiLaiComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Bù Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhBuVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'gui-lai-phieu-linh-vat-tu-truc-tiep/:id',
        component: _phieu_linh_vat_tu_truc_tiep_gui_lai_phieu_linh_vat_tu_truc_tiep_gui_lai_component__WEBPACK_IMPORTED_MODULE_12__["PhieuLinhVatTuTrucTiepGuiLaiComponent"],
        data: {
            title: 'Yêu Cầu Lĩnh Trực Tiếp Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].TaoYeuCauLinhTrucTiepVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    }
];
let YeuCauLinhVatTuRoutingModule = class YeuCauLinhVatTuRoutingModule {
};
YeuCauLinhVatTuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], YeuCauLinhVatTuRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: YeuCauLinhVatTuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhVatTuModule", function() { return YeuCauLinhVatTuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _yeu_cau_linh_vat_tu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yeu-cau-linh-vat-tu-routing.module */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu-routing.module.ts");
/* harmony import */ var _danh_sach_yeu_cau_linh_vat_tu_danh_sach_yeu_cau_linh_vat_tu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_bu_gui_lai_phieu_linh_vat_tu_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_bu_gui_lai_shared_phieu_linh_vat_tu_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_gui_lai_phieu_linh_vat_tu_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_shared_phieu_linh_vat_tu_thuong_shared_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_truc_tiep_gui_lai_phieu_linh_vat_tu_truc_tiep_gui_lai_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_truc_tiep_shared_phieu_linh_vat_tu_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component.ts");
/* harmony import */ var _tao_phieu_linh_vat_tu_bu_tao_phieu_linh_vat_tu_bu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component.ts");
/* harmony import */ var _tao_phieu_linh_vat_tu_thuong_tao_phieu_linh_vat_tu_thuong_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component.ts");
/* harmony import */ var _tao_phieu_linh_vat_tu_truc_tiep_tao_phieu_linh_vat_tu_truc_tiep_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _in_linh_vat_tu_in_linh_vat_tu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./in-linh-vat-tu/in-linh-vat-tu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-linh-vat-tu/in-linh-vat-tu.component.ts");
/* harmony import */ var _phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component.ts");
/* harmony import */ var _in_phieu_linh_truc_tiep_vat_tu_popup_in_phieu_linh_truc_tiep_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component.ts");
/* harmony import */ var _popup_thong_bao_vt_khong_the_tao_popup_thong_bao_vt_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component.ts");
/* harmony import */ var _phieu_linh_vt_truc_tiep_cho_goi_shared_phieu_linh_vt_truc_tiep_cho_goi_shared_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component.ts");




























let YeuCauLinhVatTuModule = class YeuCauLinhVatTuModule {
};
YeuCauLinhVatTuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _danh_sach_yeu_cau_linh_vat_tu_danh_sach_yeu_cau_linh_vat_tu_component__WEBPACK_IMPORTED_MODULE_4__["DanhSachYeuCauLinhVatTuComponent"],
            _phieu_linh_vat_tu_bu_gui_lai_phieu_linh_vat_tu_bu_gui_lai_component__WEBPACK_IMPORTED_MODULE_5__["PhieuLinhVatTuBuGuiLaiComponent"],
            _phieu_linh_vat_tu_bu_gui_lai_shared_phieu_linh_vat_tu_bu_gui_lai_shared_component__WEBPACK_IMPORTED_MODULE_6__["PhieuLinhVatTuBuGuiLaiSharedComponent"],
            _phieu_linh_vat_tu_thuong_gui_lai_phieu_linh_vat_tu_thuong_gui_lai_component__WEBPACK_IMPORTED_MODULE_7__["PhieuLinhVatTuThuongGuiLaiComponent"],
            _phieu_linh_vat_tu_thuong_shared_phieu_linh_vat_tu_thuong_shared_component__WEBPACK_IMPORTED_MODULE_8__["PhieuLinhVatTuThuongSharedComponent"],
            _phieu_linh_vat_tu_truc_tiep_gui_lai_phieu_linh_vat_tu_truc_tiep_gui_lai_component__WEBPACK_IMPORTED_MODULE_9__["PhieuLinhVatTuTrucTiepGuiLaiComponent"],
            _phieu_linh_vat_tu_truc_tiep_shared_phieu_linh_vat_tu_truc_tiep_shared_component__WEBPACK_IMPORTED_MODULE_10__["PhieuLinhVatTuTrucTiepSharedComponent"],
            _tao_phieu_linh_vat_tu_bu_tao_phieu_linh_vat_tu_bu_component__WEBPACK_IMPORTED_MODULE_11__["TaoPhieuLinhVatTuBuComponent"],
            _tao_phieu_linh_vat_tu_thuong_tao_phieu_linh_vat_tu_thuong_component__WEBPACK_IMPORTED_MODULE_12__["TaoPhieuLinhVatTuThuongComponent"],
            _tao_phieu_linh_vat_tu_truc_tiep_tao_phieu_linh_vat_tu_truc_tiep_component__WEBPACK_IMPORTED_MODULE_13__["TaoPhieuLinhVatTuTrucTiepComponent"], _in_linh_vat_tu_in_linh_vat_tu_component__WEBPACK_IMPORTED_MODULE_23__["InLinhVatTuComponent"], _phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_24__["PhieuLinhVatTuThuongPopupComponent"], _in_phieu_linh_truc_tiep_vat_tu_popup_in_phieu_linh_truc_tiep_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_25__["InPhieuLinhTrucTiepVatTuPopupComponent"], _popup_thong_bao_vt_khong_the_tao_popup_thong_bao_vt_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_26__["PopupThongBaoVtKhongTheTaoComponent"], _phieu_linh_vt_truc_tiep_cho_goi_shared_phieu_linh_vt_truc_tiep_cho_goi_shared_component__WEBPACK_IMPORTED_MODULE_27__["PhieuLinhVtTrucTiepChoGoiSharedComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_19__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_20__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
            _yeu_cau_linh_vat_tu_routing_module__WEBPACK_IMPORTED_MODULE_3__["YeuCauLinhVatTuRoutingModule"]
        ],
        entryComponents: [
            src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"],
            _phieu_linh_vat_tu_thuong_popup_phieu_linh_vat_tu_thuong_popup_component__WEBPACK_IMPORTED_MODULE_24__["PhieuLinhVatTuThuongPopupComponent"],
            _in_phieu_linh_truc_tiep_vat_tu_popup_in_phieu_linh_truc_tiep_vat_tu_popup_component__WEBPACK_IMPORTED_MODULE_25__["InPhieuLinhTrucTiepVatTuPopupComponent"],
            _in_linh_vat_tu_in_linh_vat_tu_component__WEBPACK_IMPORTED_MODULE_23__["InLinhVatTuComponent"],
            _popup_thong_bao_vt_khong_the_tao_popup_thong_bao_vt_khong_the_tao_component__WEBPACK_IMPORTED_MODULE_26__["PopupThongBaoVtKhongTheTaoComponent"]
        ]
    })
], YeuCauLinhVatTuModule);



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
//# sourceMappingURL=nhap-xuat-vat-tu-yeu-cau-linh-vat-tu-yeu-cau-linh-vat-tu-module-es2015.js.map